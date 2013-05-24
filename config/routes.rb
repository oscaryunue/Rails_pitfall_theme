RailsPitfallExample::Application.routes.draw do
  get "errors/not_found"

  match "/about_us" => "pages#about_us"
  match "/blog" => "pages#blog"
  match "/contact" => "pages#contact"
  match "/elements" => "pages#elements"
  match "/home_alternative" => "pages#home_alternative"
  match "/portfolio" => "pages#portfolio"
  match "/portfolio_item" => "pages#portfolio_item"
  match "/portfolio_item_2" => "pages#portfolio_item_2"
  match "/services" => "pages#services"
  match "/single_post" => "pages#single_post"
  match "/register" => "pages#register"

  match "/404" => "errors#not_found", as: "error_404"

  root :to => "pages#home_alternative"
end
