/**
 * Created by Administrator on 2017/3/14.
 */
var captchapng = require('captchapng');

exports.captchap=function (req, res, next) {
    var width=!isNaN(parseInt(req.query.width))?parseInt(req.query.width):100;
    var height=!isNaN(parseInt(req.query.height))?parseInt(req.query.height):30;

    //产生随机数
    var code = parseInt(Math.random()*9000+1000);

    req.session.checkcode = code;

    console.log('------------'+code+'------------');
    var p = new captchapng(width,height, code);

    p.color(100, 100, 0, 0.5);
    p.color(80, 80, 80, 255);

    var img = p.getBase64();

    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
};
/*
function randomcodePngController(req , res){
    var code = '0123456789';
    var length = 4;
    var randomcode = '';
    for (var i = 0; i < length; i++) {
        randomcode += code[parseInt(Math.random() * 1000) % code.length];
    }
    // 保存到session

    if (null == req.session['loginStatus']) {
        req.session["loginStatus"] = {};
    }
    req.session.loginStatus.randomcode= randomcode;

    // 输出图片
    var p = new captchapng(100,36,parseInt(randomcode)); // width,height,numeric captcha
    p.color(0, 0, 0, 255);  // First color: background (red, green, blue, alpha)
    p.color(255, 255, 255, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}
*/
