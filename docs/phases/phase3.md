# Phase 3: Albums and Groups (2 days)

## Rails
### Models
* Album
* Group

### Controllers
* Api::AlbumsController (create, destroy, index, show, update)
* Api::GroupsController (create, destroy, index, show, update)

### Views
* albums/show.json.jbuilder (the albums path will be nested the users path)
* groups/index.json.jbuilder
* groups/show.json.jbuilder

## Flux
### Views (React Components)
* AlbumsIndex
- AlbumsIndexItem
* GroupsIndex
- GroupsIndexItem

### Stores
* Album
* Group

### Actions

* ApiActions.fetchAllAlbums(userId) -> triggers ApiUtil
* ApiActions.fetchSingleAlbum(albumId)
* ApiActions.createAlbum
* ApiActions.editAlbum
* ApiActions.destroyAlbum (only allowed for the owner)

* ApiActions.receiveAllGroups -> triggered by ApiUtil
* ApiActions.receiveSingleGroup(groupId)
* ApiActions.deleteGroup (only allowed for the owner)
* NotebookActions.fetchAllGroups -> triggers ApiUtil
* NotebookActions.fetchSingleGroup(groupId)
* NotebookActions.createGroup
* NotebookActions.editGroup
* NotebookActions.destroyGroup (only allowed for the owner)

### ApiUtil
* ApiUtil.fetchAllAlbums(userId)
* ApiUtil.fetchSingleAlbum(albumId)
* ApiUtil.createAlbum
* ApiUtil.editAlbum
* ApiUtil.destroyAlbum

* ApiUtil.fetchAllGroups
* ApiUtil.fetchSingleGroup(groupId)
* ApiUtil.createGroup
* ApiUtil.editGroup
* ApiUtil.destroyGroup

## Gems/Libraries