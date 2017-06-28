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

router.post('/contact', function (req, res) {
    console.log(req.body);
    const from_email = new helper.Email(req.body.email);
    const to_email = new helper.Email("jjsorianoe@gmail.com");
    const subject = "Contact Message";
    const content = new helper.Content("text/plain", req.body.message);
    const mail = new helper.Mail(from_email, subject, to_email, content);

    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
    })
    res.end('It worked!');
});



app.use('/', router);

app.listen(3000, () => console.log('Running on port 3000'));