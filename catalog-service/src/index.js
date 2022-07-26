const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const routes = require('./routes')
routes(app)

app.listen(port, '0.0.0.0', () => {
  console.log(`Catalog Service listening on port http://localhost:${port}`)
})
