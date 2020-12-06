Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get 'container', to: 'container#index'
  get 'team', to: 'team#index'
  resources :completed_lessons do
    put "togglelesson"
  end
  
  resources :lessons, param: :slug

  devise_for :users do
    get "/users/sign_out" => "devise/sessions#destroy", :as => :destroy_user_session
  end
  resources :users do
    resources :completed_lessons
  end

  get "completed_lessons/:id/togglelesson" => "completed_lessons#togglelesson", :as => "togglelesson", :via => [:get]

  root to: redirect('/container')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/static/:index" => "static#show"
  get "/static/:navigation" => "static#show"
end

