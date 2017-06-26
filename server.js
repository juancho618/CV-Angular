let express = require('express');

let app = express();
let router =  express.Router();
app.set('view engine', 'pug');

//views folder
app.set('views', __dirname + '/views/');

//static elements folder
app.use('/static', express.static(__dirname + '/static/'));

//angular material
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material/'));
app.use('/scripts',  express.static(__dirname + '/node_modules/'));

// To known what methos are being required
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/", (req, res) => {
    res.render("index");
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/resume', function (req, res) {
    res.render('resume');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

app.use('/', router);

app.listen(3000, () => console.log('Running on port 3000'));