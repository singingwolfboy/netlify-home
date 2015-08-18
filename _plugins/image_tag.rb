require "RMagick"

module Jekyll
  class ImageTag < Liquid::Tag
    include Magick
    attr_accessor :markup, :tokens

    def initialize(tag_name, markup, tokens)
      @markup = markup
      @tokens = tokens
      super
    end

    def render(context)
      if markup.empty?
        return "Error processing image"
      end

      args = {}
      markup.scan(/(\w+)=((?:"[^"]+")|(?:'[^']+')|[\w\.\_-]+)/) do |key,value|
        if (value[0..0] == "'" && value[-1..-1]) == "'" || (value[0..0] == '"' && value[-1..-1] == '"')
          args[key] = value[1..-2]
        else
          args[key] = context[value]
        end
      end

      if args["width"] && args["height"]
        return "Error resizing - can't set both width and height"
      end

      site = context.registers[:site]
      img_attrs = generate_image(site, args["src"], args)

      srcset = []
      (1..3).each do |factor|
        srcset << {:factor => factor, :img => generate_image(site, args["src"], args.merge("factor" => factor))}
      end
      img_attrs["srcset"] = srcset.map {|i| "#{i[:img]["src"]} #{i[:factor]}x"}.join(", ")

      return "<img #{args.merge(img_attrs).map {|k,v| "#{k}=\"#{v}\""}.join(" ")}>"
    end

    def generate_image(site, src, attrs)
      img = Image.read(File.join(site.source, src)).first
      img_attrs = {}

      if attrs["height"]
        scale = attrs["height"].to_f * (attrs["factor"] || 1) / img.rows.to_f
        img.scale!(scale) if scale <= 1
        img_attrs["height"] = attrs["height"]
      elsif attrs["width"]
        scale = attrs["width"].to_f * (attrs["factor"] || 1) / img.columns.to_f
        img.scale!(scale) if scale <= 1
        img_attrs["width"] = attrs["width"]
      end

      img_attrs["src"] = src.sub(/(\.\w+)$/, "-#{img.columns}x#{img.rows}" + '\1')
      filename = img_attrs["src"].sub(/^\//, '')
      dest = File.join(site.dest, filename)
      FileUtils.mkdir_p(File.dirname(dest))
      unless File.exist?(dest)
        img.strip!
        img.write(dest)
        if dest.match(/\.png$/)
          `optipng #{dest}`
        end
      end
      site.config['keep_files'] << filename unless site.config['keep_files'].include?(filename)
      img_attrs
    end
  end
end

Liquid::Template.register_tag('image_tag', Jekyll::ImageTag)
