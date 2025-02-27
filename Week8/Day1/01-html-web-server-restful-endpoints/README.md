# Exercise: HTML Web Server RESTful Endpoints

In this exercise, you will be determining RESTful endpoints for an HTML web
server based on the given scenarios.

## Set up

Clone the exercise from the [starter].

## Conventions for RESTful Endpoints for an HTML web server

The following tables show the conventions for RESTful Endpoints of a traditional
HTML web server:

| Path Pattern                     | HTTP Verb | Meaning                                                               |
| -------------------------------- | --------- | --------------------------------------------------------------------- |
| /resource-name                   | GET       | Index page: Get an HTML-based list of the resource                    |
| /resource-name/new               | GET       | Create form page: Show a form to create a new record for the resource |
| /resource-name                   | POST      | Submit create form: Create a new record for the resource              |
| /resource-name/:record-id        | GET       | Detail page: See the details of the specified record                  |
| /resource-name/:record-id/edit   | GET       | Edit form page: Show the edit form for the specified record           |
| /resource-name/:record-id        | POST      | Submit edit form: Update the specified record                         |
| /resource-name/:record-id/delete | POST      | Submit delete form: Delete the specified record                       |

For Nested Resources:

| Path Pattern                                  | HTTP Verb | Meaning                                                                                                      |
| --------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| /resource-name/:record-id/nested-resource     | GET       | Index page: Get an HTML-based list of the nested resource related to the specified record                    |
| /resource-name/:record-id/nested-resource/new | GET       | Create form page: Show a form to create a new record for the nested resource related to the specified record |
| /resource-name/:record-id/nested-resource     | POST      | Submit create form: Create a new record for the nested resource related to the specified record              |
| /nested-resource/:nested-record-id            | GET       | Detail page: See the details of the specified nested resource's record                                       |
| /nested-resource/:nested-record-id/edit       | GET       | Edit form page: Show the edit form for the specified nested resource's record                                |
| /nested-resource/:nested-record-id            | POST      | Submit edit form: Update the specified nested resource's record                                              |
| /nested-resource/:nested-record-id/delete     | POST      | Submit delete form: Delete the specified nested resource's record                                            |

## Instructions

Determine an endpoint for each of the following use cases. Don't worry about
getting it perfect as this is just practice!

For example, to access the home page of a site, the RESTful endpoint could be
`GET /` or `GET /home`.

Remember, HTML web servers should only accept requests with methods of `GET` and
`POST` only! They cannot accept `PUT`, `PATCH` or `DELETE` requests.

- Access the home page
  - `GET /`
  - `GET /home`
- Submit a contact form
  - `POST /contacts`
- Access the posts page
  - `GET /posts`
- Access the edit page for a post
  - `GET /posts/:postId/edit`
  - exists so we need an id
- Access the create page for a post
  - `GET /posts/create`
  - doesn't exist so we don't need id
- Create a new user
  - `POST /users/create`
  - `POST /users/register`
  - post to certain url to create user
- Log In
  - `POST /login`
  - post to special login page
- Log Out
  - `POST /logout`
  - post to special log out page
- Access the comments for a post page
  - `GET /posts/:postId/comments`
  - get all comments under certain post
- Access the create page for a post's comment
  - `GET /posts/:postId/comments/create`
  - access create page for comments on certain post
- Access the edit page for a comment
  - `GET /comments/:commentId/edit`
  - accessing certain comment, doesn't matter what post from, no post id
- Submit a like for a post
  - `POST /posts/:postId/likes/`
  - adding to collection of likes on certain post
- Delete a like for a post
  - `POST /posts/:postId/likes/:likeId/delete`
  - specify we are deleting certain like on certain post
- Access all the posts of a user
  - `GET /users/:userId/posts`
  - get all posts for certain user
- Submit a search on posts
  - `POST /posts/search`
  - post a search on the collection of posts

[starter]: https://github.com/appacademy/practice-for-week-08-html-web-server-restful-endpoints
