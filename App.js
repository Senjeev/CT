const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index", { value: [] });
})

function solve(x,y,z) {
  const arr = ["hello", x, "", "done"];

if(Math.pow(x, y) > z) {
  arr[2] = "higher than expected";
} else {
  arr[2] = Math.pow(x, y).toString();
}
return arr;
}

// handle POST request to /submit
app.post('/submit', (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  const z = req.body.z;

  res.render("index", { value: solve(x, y, z) });
});

// start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});