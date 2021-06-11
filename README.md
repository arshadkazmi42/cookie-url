# cookie-url

[![Build](https://github.com/arshadkazmi42/cookie-url/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/cookie-url/actions/workflows/nodejs.yml)

Generate browser cookie url from cookie object. Supports [Chrome Cookie](https://developer.chrome.com/extensions/cookies#type-Cookie) & [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#Type)

## Install

```
npm i cookie-url
```

## Usage

```javascript

const CookieURL = require('cookie-url');

const cookie = {
  secure: false,
  domain: '.github.com',
  path: '/arshadkazmi42'
};

console.log(CookieURL(cookie));

// OUTPUT
// http://github.com/arshadkazmi42


const cookie = {
  secure: true,
  domain: '.github.com',
  path: '/arshadkazmi42'
};

console.log(CookieURL(cookie));

// OUTPUT
// https://github.com/arshadkazmi42


const cookie = {
  secure: true,
  domain: '.github.com',
  path: '/arshadkazmi42'
};

console.log(CookieURL(cookie, true /* withWWWPrefix */));

// OUTPUT
// https://www.github.com/arshadkazmi42


const cookie = {
  secure: true,
  domain: '.www.github.com',
  path: '/arshadkazmi42'
};

console.log(CookieURL(cookie, true /* withWWWPrefix */));

// OUTPUT
// https://www.github.com/arshadkazmi42

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/cookie-url/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
