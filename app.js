const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main-layouts');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Backend app ONLINE!');
});

app.get('/about', (req, res, next) => {
  // display views/about.ejs for the browser
  res.render('about', {
    name: 'JP',
    // age: 30,
    // citiesTraveled: [ 'Miami', 'Madrid', 'Barcelona', 'Paris' ],
    // faveFoods: [
    //   { name: 'pizza slice', calories: 400 },
    //   { name: 'bagel bites', calories: 380 },
    //   { name: 'pizza doritos', calories: 450 },
    // ]
  });
});
