var express 		= require('express');
var bodyParser 		= require('body-parser');
var exSession 		= require('express-session');

var logout			= require('./controllers/logout');
 var home			= require('./controllers/homecontroller');
 var user			= require('./controllers/user');

 var app  			= express();
var port 			= 6262;

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(exSession({secret: 'my top secret code', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
// app.use('/login', login);
app.use('/', home);
app.use('/user', user);
app.use('/logout',logout);
//app.use('/user')
// app.use('/logout', logout);
//app.use('/assets', express.static());
app.use(express.static('public'))

//ROUTES
 app.get('/user/login', (req,res)=>res.render('login'));
 app.get('/user/register', (req,res)=>res.render('register'));
 
 //app.get('/user/', (req,res)=>res.redicrect('/user/'));
// app.get('/setCookie', (req,res)=>{
// 	res.cookie('cookie1', 'first cookie');
// 	res.send("done");
// });

// app.get('/viewCookie', (req,res)=>{
// 	res.send(req.cookies['cookie1']);
// });

// app.get('/rmCookie', (req,res)=>{
// 	res.clearCookie('cookie1');
// 	res.send('Done');
// });



app.listen(port, function(){console.log('server started at'+port+"...")});