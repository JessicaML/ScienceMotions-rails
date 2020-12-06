Rails.application.routes.draw do
 
  root to: redirect('/container')

  devise_for :users do
    get "/users/sign_out" => "devise/sessions#destroy", :as => :destroy_user_session
  end

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :users do
    resources :completed_lessons
  end

  get 'container', to: 'container#index'
  get 'team', to: 'team#index'
  resources :lessons, param: :slug

  resources :completed_lessons do
    put "togglelesson"
  end
  
  get "completed_lessons/:id/togglelesson" => "completed_lessons#togglelesson", :as => "togglelesson", :via => [:get]
end

