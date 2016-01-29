require "date"

module Jekyll
  module ParseDateFilter
    def parse_date(input)
      Date.parse(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::ParseDateFilter)