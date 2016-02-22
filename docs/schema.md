# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
profile_pic     | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## followers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
follower_id | integer   | not null, foreign key (references users), indexed


## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | not null
image_url   | string    | not null
medium_url  | string    | not null
thumb_url   | string    | not null
date_taken  | datetime  | not null
public      | boolean   | not null


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | string    | not null
type        | integer   | not null (specifies what type of comment)
foreign_id  | integer   | not null, foreign key (references photos), indexed
author_id   | integer   | not null, foreign key (references users), indexed

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
user_id     | integer   | not null, foreign key (references users), indexed


## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## album_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |

## group_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed


## group_members
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
member_id   | integer   | not null, foreign key (references users), indexed



## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
lat         | float     | not null
long        | float     | not null




