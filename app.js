const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, 'html')))
app.use(express.static(path.join(__dirname, 'stilesheets')))
app.use(express.static(path.join(__dirname, 'img', )))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'))

})


app.listen(3000, () => {
  console.log('http://localhost:3000');
});