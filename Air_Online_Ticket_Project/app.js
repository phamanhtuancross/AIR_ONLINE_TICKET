var express = require('express');
var app = express();

var server = app.listen(3000,()=> console.log('listen successfully on port 3000'));
app.use(express.static(__dirname + '/public/'));

app.get('/Data/Image/Login/background',(req,res) => {
    res.sendFile(__dirname + +'public/Data/Image/Login/background/')
});

app.get('/',function (req,res) {
   res.sendFile(__dirname + '/View/Login/login.html');
});

app.get('/LoginStyle.css',function (req,res) {
    res.sendFile(__dirname + '/View/Login/LoginStyle.css');
});

app.get('/Data/Image/Login/icon',function (req,res) {
   res.sendFile(__dirname  +'public/Data/Image/Login/icon/');
})

app.get('/LoginController.js',function (req,res) {
    res.sendFile(__dirname + '/View/Login/LoginController.js');
});


app.get('/ErrorDefine',function (req,res) {
    res.sendFile(__dirname + '../../Define/ErrorDefine.js')
})