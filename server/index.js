const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.post('/', (req, res) => {
console.log(req.body);
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})