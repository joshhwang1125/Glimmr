Rails.application.routes.draw do
  root to: 'static_pages#root'

  get "home", to: 'static_pages#home'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index, :destroy, :create, :show]
    resources :users, only: [:show]
    resources :favorites, only: [:index, :create, :destroy]
  end
end
