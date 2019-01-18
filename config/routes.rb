Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get 'container', to: 'container#index'
  get 'team', to: 'team#index'
  resources :completed_lessons do
    # put :toggle
  end
  resources :lessons, only: [:show, :index]

  devise_for :users do
    get "/users/sign_out" => "devise/sessions#destroy", :as => :destroy_user_session
  end
  resources :users do
    resources :completed_lessons
  end

  # put "completed_lessons/:id/toggle" => "completed_lessons#toggle", :as => "toggle", :via => [:put]
  get "completed_lessons/:id/toggle" => "completed_lessons#toggle", :as => "toggle", :via => [:get]

  # match "completed_lessons/:id/toggle" => "completed_lessons#toggle", :via => [:post]

  root to: redirect('/container')
  resources :lessons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/static/:index" => "static#show"
  get "/static/:navigation" => "static#show"
end

