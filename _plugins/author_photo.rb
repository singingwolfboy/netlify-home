module Jekyll
  class AuthorPhotoTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      author = context[@text]
      src = ""

      # Just hardcoded for now
      case author
      when /mathias/i
        src = "/img/authors/mathias.jpg"
      end

      # <img src="http://placehold.it/80x80" srcset="http://placehold.it/80x80 1x, http://placehold.it/160x160 2x, http://placehold.it/240x240" alt="Mathias Biilmann" width="80" height="80">
      "<img src='#{src}' width='80'>"
    end
  end
end

Liquid::Template.register_tag('author_img', Jekyll::AuthorPhotoTag)
