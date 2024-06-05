# Express Resource Server

This package is a resource server built with Express.js. It provides a RESTful API for managing resources.

## Installation

To install the package, run the following command:
```npm i @oryfox/express-resource-server```

## Usage
Import the package
```import useResourceServer from '@oryfox/express-resource-server';```
and then install the middleware
```app.use(useResourceServer(<jwksUri>));```
