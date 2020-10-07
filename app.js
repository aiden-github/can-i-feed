const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 80;
const router = require('./routes/router');

// app.use(cors());

app.set('views', __dirname + '/client/build');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/client/build'));

app.get('/*', (req, res, next) => {
  res.render('index.html');
});
app.use('/', router);



app.listen(PORT, () => {
  console.log(`listening on ${ PORT }`);
});