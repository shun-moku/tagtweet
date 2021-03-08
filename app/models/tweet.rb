class Tweet < ApplicationRecord
  hasm_may :tweet_tag_relations
  has_many :tags, through: :tweet_tag_relations
end
