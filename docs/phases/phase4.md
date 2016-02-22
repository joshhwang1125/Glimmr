# Phase 4: Favorites, Tags, and Followers (1 day)

## Rails
### Models
* Tag
* Tagging
* Followers
* Favorites

### Controllers
* Api::TagsController (create, show, destroy)
* Api::TaggingsController (create, destroy)
* Api::CommentsController (create, show, destroy)
* Api::FavoritesController (create, show, destroy)
* Api::FollowersController (create, show, destroy)

### Views
* tag/show.json.jbuilder

## Flux
### Views (React Components)

### Stores
* Favorite
* Comment
* Follower

### Actions
* ApiActions.createComment
* ApiActions.deleteComment
* ApiActions.createFavorite
* ApiActions.deleteFavorite
* ApiActions.createFollower
* ApiActions.deleteFollower

### ApiUtil
* ApiUtil.createComment
* ApiUtil.deleteComment
* ApiUtil.createFavorite
* ApiUtil.deleteFavorite
* ApiUtil.createFollower
* ApiUtil.deleteFollower

## Gems/Libraries
