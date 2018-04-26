//connect to db
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
});


var Define = {
    USER_LOGIN_SUCCESSFULL: "user lgoin successfull",
    USER_LOGIN_FAILED: "user login failed",
    USER_REGISTER_NEW_ACCOUNT_FAILED: "user register new account failed",
    USERNAME_INVALID: "user name in valid",
    USERNAME_HAVE_SPACE: "username have space",
    USERNAME_EMPTY: "user name empty",
    PASSWORD_HAVE_SPACE: "password have space",
    PASSWORD_NOT_TRUE: "passwrod no true",
    PASSWORD_EMPTY: "password empty",
    ACCOUNT_NOT_EXIST: "Your account is not exist",
}


//logic solved
$(document).ready(function () {

    $("#btnLogin").click(function () {

        let username = $("#username").val();
        let password = $("#password").val();

        var isLoginSuccessful = checkUsernamePasswordFormat(username,password);
        if(isLoginSuccessful){
            alert(Define.USER_LOGIN_SUCCESSFULL);
        }
        else{
            alert(Define.USER_LOGIN_FAILED);
        }
    });
    $("#btnRegister").click(function () {
        alert("button register clicked");
    });
});

function checkUsernamePasswordFormat(username, password){

    console.log("CHECK USER ACCOUNT FORMAT FUNCTUON");
    if(username.length == 0){
        console.log(Define.USERNAME_EMPTY);
        return false;
    }

    if(password.length == 0){
        console.log(Define.PASSWORD_EMPTY);
        return false;
    }

    if(username.indexOf(' ') >= 0){
        console.log(Define.USERNAME_HAVE_SPACE);
        return false;
    }

    if(password.indexOf(' ') >= 0){
        console.log(Define.PASSWORD_HAVE_SPACE);
        return false;
    }

    return true;
}

function checkValidUserAccount(username, password){
    con.connect(function (err) {
        if(err) throw err;

        //select all users account and return the result of check

    });
    return true;
}

