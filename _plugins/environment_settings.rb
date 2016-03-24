require "jekyll-srcset"

module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      site.config['cms'] = ENV['CMS_ENV'] || 'development'
      # Add other environment variables to `site.config` here...
      site.config['minify_html'] = site.config['cms'] == 'production'
      site.config['cache'] = ENV['JEKYLL_CACHE'] || "_cache"
      site.config['minify_html'] = ENV['JEKYLL_ENV'] == 'production'
      if ENV['JEKYLL_ENV'] == 'production'
        site.config['srcset'] ||= {}
        site.config['srcset']['optipng'] = true
        site.config['srcset']['cache'] = '/opt/build/cache/srcset'
      end
    end
  end
end
