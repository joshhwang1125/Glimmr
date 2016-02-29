# Glimmr

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Glimmr is an image sharing web application inspired by Flickr built using Ruby on Rails and React.js. Glimmr allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] User creation capabilities with secure authentication

- [ ] Static splash page prompting user to log in, and explanation of site vision

- [ ] Photo uploading, viewing, editing, sharing, deleting capabilties

- [ ] Camera roll - Contains all photos uploaded by user, can be selected and added to album or deleted (shared, downloaded)

- [ ] Tag photo

- [ ] Create and delete comments for photos

- [ ] Follow other users

- [ ] Individual photo view pages

- [ ] Favorite photo - adds to favorites page

- [ ] Search functionality: using tags, uploader, or group

- [ ] Setting locations for photos

- [ ] Navigation in individual photo view page with hotkeys

- [ ] Activity feed page on log in with stream of photos to see and notifications


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1.0 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank splash page
- [ ] blank landing page after signin
- [ ] create photos index layout
- [ ] create user profile layout
- [ ] create `Photo` model

### Phase 2: Photo Model and Flux Initialization (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [ ] seed the database with a small amount of test data
- [ ] CRUD API for photos (`PhotosController`)
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] Set up Photo Store
- [ ] Set up React views for photo Index and IndexItem
- [ ] Clicking on photo should bring user to photo show page
- [ ] Style these

### Phase 3: favorites, followers, comments (1 days)


- [ ] Users can follow other users, and see their profiles
- [ ] Users can tag their own photos, and these tags will show on the photo show page.
- [ ] A favorites page will have a photo feed with all favorited photos


### Phase 4: tags and Search (1.5 days)


- [ ] create `Album` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for albums (`AlbumsController`)
- [ ] create `Group` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for groups (`GroupsController`)
- [ ] Both albums and groups will have show pages that have many photos, like the photo index view
- [ ] Can see users in a group, and make comments on the group.
- [ ] Photos are destroyed when deleted from any location



### Phase 5: Styling and Bug Fixing (2 days)

- [ ] Finish CSS styling
- [ ] Create seed data and set up environment
- [ ] Double check that all features work

### Bonus: Search and Location (2 day)
- [ ] Add search bar
- [ ] Add Locations
- [ ] Mosiac picture pattern
- [ ] Multiple sessions
- [ ] Create the feed


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
