---
title: Let’s Talk about Decoupled Authentication
tags:
  - Drupal-planet
  - RESTful
permalink: "/content/restful-access-token"
layout: post
author: RoySegall
image: /assets/images/posts/access-token/cookies.jpg
description: "Normally in Drupal we don’t need to worry about authentication, This post
explains how to handle authentication with decoupled sites with Angular JS."
---

{% include setup %}

When talking about a traditional Drupal site, we don’t need to handle authentication
because Drupal has our back: a user submits the login form, gets a cookie, and starts
using your awesome site. But what about decoupled sites? How can we authenticate
the user?

Before diving into that part we need to understand the authentication types
provided by RESTful:

  1. CSRF token - Will help the server to make sure the request is a valid
  request. If you'll inspect a standard Drupal form you can see the form
  contains a token. That token help Drupal to ensure the submitted form is valid
  form and not a fraud form. You can read more in this [blog post](https://cloudunder.io/blog/csrf-token/).
  2. Access token - RESTful will generate an access token and bind it to the
  user.

<!-- more -->

Important: in order to use access token authentication you’ll need
to enable the module [RESTful token authentication](https://github.com/RESTful-Drupal/restful/tree/7.x-2.x/modules/restful_token_auth)
(which is a sub module of the [Restful](https://github.com/RESTful-Drupal/restful)
module).

## Generating the access token

Below is how to generate an access token using Angular JS. If the
authentication process passes, the end point will return an object with 3
values:

  1. `access_token` - This is the token which represents the user in any request.
  2. `expires_in` - The amount of seconds in which the access token is valid.
  3. `refresh_token` - Once the the token is no longer valid you'll need to ask
  for a new one using the refresh token.

You can see below a small amount of Angular JS code:

```javascript
$http.get('http://localhost/drupal/api/login-token', {
  headers: {
    'Authorization': 'Basic ' + Base64.encode(username + ':' + password)
  }
})
.success(function(data) {
  localStorageService.set('access_token', data.access_token);
});
```

And this is what you’ll get back:

```json
{
  "access_token": "Y3wQua-qFY-mukslgPaLqKdNmlGdBQK4dly-UhlJcYk",
  "type": "Bearer",
  "expires_in": 86400,
  "refresh_token": "xRP-nnKA05GGsN-jr80Z_hfPHqrkpyjAtevDSeTLbYU"
}
```

## Refreshing access token
As mentioned above, the access token is only valid for a specific amount of time,
usually 24 hours, and you’ll need to check it before the request:

```javascript
if (new Date().getTime() > localStorageService.get('expire_in')) {
  var refresh_token = localStorageService.get('refresh_token');
  $http.get('http://localhost/drupal/refresh-token/' + refresh_token)
  .success(function(data) {
    localStorageService.set('access_token', data.access_token);
    localStorageService.set('refresh_token', data.refresh_token);
    localStorageService.set('expire_in', new Date().getTime() + data.expires_in);
  });
}
```

## Using the access token
OK, so we got the access token and we can refresh it when it's no longer valid. The
next thing you need to know is how to inject the access token into the header:

```javascript
$http.post('http://localhost/drupal/api/article', {
  headers: {
    'access-token': localStorageService.get('access_token')
  },
  data: {
    'label': 'foo'
  }
})
.success(function(data) {
  console.log('Cool! You posted a new article.');
});
```

You can have a look on our [yo hedley](https://github.com/Gizra/generator-hedley)
generator to see how we [implemented](http://bit.ly/2dVYTg5) HTTP interceptor to
improve the process displayed above.
