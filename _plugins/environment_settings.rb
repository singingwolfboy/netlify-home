module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      site.config['cms'] = ENV['CMS_ENV'] || 'production'
      # Add other environment variables to `site.config` here...
      site.config['minify_html'] = ENV['JEKYLL_ENV'] == 'production'
      site.config['srcset'] ||= {}
      if ENV['JEKYLL_ENV'] == 'production'
        site.config['srcset']['optipng'] = true
        site.config['srcset']['cache'] = '/opt/build/cache/srcset'
    end
  end
end
