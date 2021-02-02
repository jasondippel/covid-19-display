import express from 'express'
import bodyParser from 'body-parser'

const PORT = parseInt(process.env.PORT || '') || 3000
const HOST = "0.0.0.0" // Important to specify this rather than localhost (won't work in containers)

const app = express()
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
  res.send('Sup');
})

app.listen(PORT, HOST, () => {
  console.log(`gateway-service listening on ${HOST}:${PORT}`);
});
