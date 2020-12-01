Rails.application.routes.draw do
  root to: redirect('/container')

  get 'container', to: 'container#index'
  get 'team', to: 'team#index'
  get "/static/:index" => "static#show"
  get "/static/:navigation" => "static#show"

  resources :lessons, only: [:show, :index]

  resources :completed_lessons do
    put "togglelesson"
  end
  
  get "completed_lessons/:id/toggleindex" => "completed_lessons#toggleindex", :as => "toggleindex", :via => [:get]
  get "completed_lessons/:id/togglelesson" => "completed_lessons#togglelesson", :as => "togglelesson", :via => [:get]

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users do
    get "/users/sign_out" => "devise/sessions#destroy", :as => :destroy_user_session
  end
  
  resources :users do
    resources :completed_lessons
  end
end

