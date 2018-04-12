Rails.application.routes.draw do
  devise_for :models
  resources :completed_lessons
  resources :lessons
  devise_for :users
  resources :users do
    resources :completed_lessons
  end
  get 'pages/info'

  root to: redirect('/lessons')  
  resources :lessons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

