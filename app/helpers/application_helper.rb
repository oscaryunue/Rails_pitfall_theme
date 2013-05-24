module ApplicationHelper
  def is_active?(page_names, type = :action)
    "active" if [*page_names].include? params[type]
  end
end
