const express = require('express')
const app = express()
const port = 3000

// -------- ROUTES --------

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fuckyou', (req, res) => {
  res.send('<h1>No fuck you</h1>')
})

//--------------

app.listen(port, () => {
  console.log(`Our App is listening at http://localhost:${port}. Wohooo`)
})
