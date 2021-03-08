class CreateTweetTagRelations < ActiveRecord::Migration[6.0]
  def change
    create_table :tweet_tag_relations do |t|
      t.reference :tweet, foreign_key: true
      t.reference :tag, foreign_key: true
      t.timestamps
    end
  end
end
