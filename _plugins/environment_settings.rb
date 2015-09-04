module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      site.config['cms'] = ENV['CMS_ENV'] || 'production'
      # Add other environment variables to `site.config` here...
      site.config['minify_html'] = site.config['cms'] == 'production'
    end
  end
end
