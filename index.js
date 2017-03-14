var express=require('express');//获取第方三插件

var session = require('express-session');

var app=express();//实例化插件
app.use(require('body-parser')());      //解析POST   必须安装npm install body-parser --save


//----验证码-----------

app.use(session({
    secret: 'hes',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.get('/', function (req, res) {
    randomcodePngController(req, res);
});

app.get('/session', function (req, res) {
    res.send(req.session.loginStatus);
});

app.listen(2345);

//------验证码----完------------------------------------------


//配置默认进入页面
var router=require('./routes/routes.js');
app.use('/',router);


//静态资源
app.use(express.static(__dirname+'/public'));//设置资源

app.set('port',process.env.PORT||2001);//服务器端口号，范围1千到一万

app.get('/',function (reg,res) {   //get('/')配置默认页面   res相遇
    console.log('user in');
    res.type('text/html');//请求类型
    res.send('<span style="color:green">-welcome-</span>');
});



//404  检测状态
app.use(function (reg,res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404-NOT Found</span>');
});



//500  服务器数据错误，内部逻辑错误
app.use(function (reg,res,next,err) {
    console.error(err,stack);
    res.type('text/html');
    res.status(500);
    res.send('<span style="color:red">500-Server Error</span>');
});


//提示
app.listen(app.get('port'),function () {
    console.log('Express Started on http://localhost:'+app.get('port')+';press Ctrl+C to terminate');
});
