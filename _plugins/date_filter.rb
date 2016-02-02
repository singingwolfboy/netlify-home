require "date"

module Jekyll
  module DateFilter
    
    def to_date(date)
      date.to_date
    end
    
    def parse_date(input)
      Date.parse(input)
    end
    
    def add_days(date, days)
      date.to_date + days
    end
    
    def subtract_days(date, days)
      date.to_date - days
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)