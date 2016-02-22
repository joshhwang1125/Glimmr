# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PhotosIndex
  - PhotosIndexItem
* NoteForm

### Stores
* Photo

### Actions
* ApiActions.receiveAllPhotos -> triggered by ApiUtil
* ApiActions.receiveSingleNote
* ApiActions.deleteNote
* NoteActions.fetchAllNotes -> triggers ApiUtil
* NoteActions.fetchSingleNote 
* NoteActions.createNote
* NoteActions.editNote 
* NoteActions.destroyNote

### ApiUtil
* ApiUtil.fetchAllNotes
* ApiUtil.fetchSingleNote
* ApiUtil.createNote
* ApiUtil.editNote
* ApiUtil.destroyNote

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
