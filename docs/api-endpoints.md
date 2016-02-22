# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `PATCH /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`

### Tags

- `GET /api/photos/:id/tags`
- `POST /api/tags`
- `DELETE /api/tags/:id`

### Favorites

- `GET /api/users/:id/favorites`
- `POST /api/favorites`
- `DELETE /api/favorits/:id`

### Following

- `GET /api/followers`
- `POST /api/followers`
- `DELETE /api/followers/:id`

### Comments

- `GET /api/photos/:id/comments`
- `POST /api/comments`
- `DELETE /api/comments/:id`


### Locations

- `GET /api/photos/:id/locations`
- `POST /api/locations`
- `DELETE /api/locations/:id`

