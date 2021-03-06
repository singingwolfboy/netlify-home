require 'jekyll/document'

# Modified version of
#
# http://www.chrisyin.com/2014/08/23/jekyll-related-posts/
#
# We always want to return some results so we keep the original
# Jekyll related_posts method around so we can call it if we
# don't find a match
#
module BetterRelatedPosts

  # Used to remove #related_posts so that it can be overridden
  def self.included(klass)
    klass.class_eval do
      alias_method :old_related_posts, :related_posts
      remove_method :related_posts
    end
  end

  # Calculate related posts.
  #
  # Returns [<Post>]
  def related_posts
    posts = site.posts.docs
    return [] unless posts.size > 1
    highest_freq = Jekyll::Document.tag_freq(posts).values.max
    related_scores = Hash.new(0)
    posts.each do |post|
      post.data['tags'].each do |tag|
        if self.data['tags'].include?(tag) && post != self
          cat_freq = Jekyll::Document.tag_freq(posts)[tag]
          related_scores[post] += (1+highest_freq-cat_freq)
        end
      end
    end
    if related_scores.empty?
      old_related_posts
    else
      Jekyll::Document.sort_related_posts(related_scores)
    end
  end

  module ClassMethods
    # Calculate the frequency of each tag.
    #
    # Returns {tag => freq, tag => freq, ...}
    def tag_freq(posts)
      return @tag_freq if @tag_freq
      @tag_freq = Hash.new(0)
      posts.each do |post|
        post.data['tags'].each {|tag| @tag_freq[tag] += 1}
      end
      @tag_freq
    end

    # Sort the related posts in order of their score and date
    # and return just the posts
    def sort_related_posts(related_scores)
      related_scores.sort do |a,b|
        if a[1] < b[1]
          1
        elsif a[1] > b[1]
          -1
        else
          b[0].date <=> a[0].date
        end
      end.collect {|post,freq| post}
    end
  end

end

module Jekyll
  class Document
    include BetterRelatedPosts
    extend BetterRelatedPosts::ClassMethods
  end
end
