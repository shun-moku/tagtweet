class TweetsTag

  include ActiveModel::Model
  attr_accessor :message, :name

  with_options presence: true do
    validates :message
    validates :name
  end

  def save
    tweet = Tweet.create(message: message)
    # tag = Tag.create(name: name)
    tag = Tag.where(name: name).first_or_initialize
    tag.save
    # first_or_initializeの記述だけでは、レコードを探すだけで終わってしまうため、saveメソッドで保存する
    TweetTagRelation.create(tweet_id: tweet.id, tag_id: tag.id)
  end

end
