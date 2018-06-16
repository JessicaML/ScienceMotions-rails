Rails.application.routes.draw do

  get 'physics/solarsystem'
  get 'physics/sound'
  get 'physics/atoms'
  get 'physics/galaxy'
  
  get 'chemistry/indicators'
  get 'chemistry/periodictable'
  get 'chemistry/statesofmatter'
  get 'chemistry/diffusion'
  
  get 'biology/dna'
  get 'biology/classification'
  get 'biology/eye'
    
  post '/lessons/indicators' => 'completed_lessons'

  get 'container', to: 'container#index'
  get 'team', to: 'team#index'  
  resources :completed_lessons
  resources :lessons
  devise_for :users
  resources :users do
    resources :completed_lessons
  end
  get 'pages/chemistry'

  resources :lesson
  
  root to: redirect('/lessons')  
  resources :lessons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/static/:index" => "static#show"
  get "/static/:navigation" => "static#show"
end

