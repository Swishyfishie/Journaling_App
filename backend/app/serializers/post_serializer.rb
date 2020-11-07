class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :tag_list
  has_one :user
end
