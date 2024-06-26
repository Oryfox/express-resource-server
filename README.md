# Express Resource Server

This package provides a single method to install a global middleware to enable OAuth authentication on expressjs servers.

## Installation

To install the package run

```npm i @oryfox/express-resource-server```

## Usage
### Import the package
```import useResourceServer from '@oryfox/express-resource-server';```

### And then install the middleware
```app.use(useResourceServer(<jwksUri>));```

### Example usage
```javascript
app.get('/test', (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.token) {
        res.send(req.token)
    } else {
        res.sendStatus(401)
    }
})
```