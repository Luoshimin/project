/**
 * Created by Administrator on 2017/1/10.
 */
var express=require('express');
var router=express.Router();

//设置一个默认界面，如果没有index.html，就会显示这个界面的内容
router.get('/',function(req,res){
    console.log('use in');
    res.type('text/html');
    res.send('<span style="color:green;">-welcome-</span>')
});

//----文本编辑上传----formidable.html-message.html---------------------
/*var formidable=require('formidable');
var fs=require('fs');
const AVATAR_UPLOAD_FOLDER='/avatar/';
router.post('/getimedata',function (req,res) {
    console.log('11111data1111');
    var summernote=new formidable.IncomingForm();
    summernote.encoding='utf-8';   //设置编辑
    summernote.uploadDir='public'+AVATAR_UPLOAD_FOLDER;
    summernote.keepExtensions=true;
    summernote.parse(req,function (err,fields,files) {
        console.log(files);
        if (err) {
            return res.redirect(303, '/test1');
        }
        var extName = '';  //后缀名
        switch (files.myfile.type) {
            case 'images/pjpeg':
                extName = 'jpg';
                break;
            case 'images/jpeg':
                extName = 'jpg';
                break;
            case 'images/png':
                extName = 'png';
                break;
            case 'images/x-png':
                extName = 'jpg';
                break;
            case 'images/gif':
                extName = 'gif';
                break;
            case 'audio/mpeg':
                extName = 'mp3';
                break;
            case 'video/mp4':
                extName = 'mp4';
                break;
        }

        //因为是在window系统下，路径符号是\，在这注意转义符号
        var timepoint = Date.now();
        var newPath = 'public\\avatar_2\\' + timepoint + "." + extName;
        //把文件从临时文件avatar移动到avatar_2
        fs.renameSync(files.myfile.path, newPath);

        var webPath = 'avatar_2/' + timepoint + "." + extName;
        res.send(webPath);
    })
});

router.post('/jsondata',function (req,res) {
    console.log(req.body);
    var data=JSON.stringify(req.body);
    console.log(data);
    console.log("-------------------------------");
    var ss=Date.now().toString();
    var path="./public/jsons/"+ss+".json";
    console.log(path);
    res.send(path);
    fs.writeFile(path,data,function (err) {
        if(err){console.log(err)}
    });
});*/
//----文本编辑上传----------完----------------------------------

//-----------异步刷新---------------------------------------
//-----------get方法---refresh_2.html------
router.get('/aaa',function(req,res){   //aaa
    console.log("7679678");
    console.log(req.query.username);
    console.log(req.query.phones);
    res.send(req.query);   //参数返回到页面
});
//-------post传数据----refresh.html----------
router.post('/user',function (req,res) {
    console.log("post");
    console.log(req.body);
    console.log(req.body.userName);
    console.log(req.body.password);
    console.log(req.body.password2);
    res.send(req.body);
});
//--------异步刷新------完---------------------------------------


//--------上传文件-----upload_files.html----------------------------
var formidable=require('formidable');
var fs=require('fs');
const AVATAR_UPLOAD_FOLDER='/avatar/';
router.post('/fileData',function (req,res) {
    console.log('11111data1111');
    var summernote=new formidable.IncomingForm();
    summernote.encoding='utf-8';   //设置编辑
    summernote.uploadDir='public'+AVATAR_UPLOAD_FOLDER;
    summernote.keepExtensions=true;
    summernote.parse(req,function (err,fields,files) {
        console.log(files);
        if (err) {
            return res.redirect(303, '/test1');
        }
        var extName = '';  //后缀名
        switch (files.imgfile.type) {
            case 'images/pjpeg':
                extName = 'jpg';
                break;
            case 'images/jpeg':
                extName = 'jpg';
                break;
            case 'images/png':
                extName = 'png';
                break;
            case 'images/x-png':
                extName = 'jpg';
                break;
            case 'images/gif':
                extName = 'gif';
                break;
            case 'audio/mpeg':
                extName = 'mp3';
                break;
            case 'video/mp4':
                extName = 'mp4';
                break;
        }

        //因为是在window系统下，路径符号是\，在这注意转义符号
        var timepoint = Date.now();
        var newPath = 'public\\avatar_2\\' + timepoint + "." + extName;
        //把文件从临时文件avatar移动到avatar_2
        fs.renameSync(files.imgfile.path, newPath);

        var webPath = 'avatar_2/' + timepoint + "." + extName;
        res.send(webPath);
    })
});
//--------上传文件---------------完-------------------------------


//----------随机验证码验证码--------------------------------------
var codes=require('../lib/captcha');
router.get('/code',codes.captchap);
//----------随机验证码验证码-------完-------------------------------



//----------随机验证码验证码----------完---------------------------




module.exports=router;
