Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  post '/lessons/indicators' => 'completed_lessons'

  get 'container', to: 'container#index'
  get 'team', to: 'team#index'
  resources :completed_lessons
  # resources :lessons
  resources :lessons, only: [:show, :index]

  devise_for :users
  resources :users do
    resources :completed_lessons
  end
  get 'pages/chemistry'

  root to: redirect('/lessons')
  resources :lessons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/static/:index" => "static#show"
  get "/static/:navigation" => "static#show"
end

