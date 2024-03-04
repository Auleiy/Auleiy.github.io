function gotoRegister()
{
    document.getElementById("login-article").hidden = true;
    document.getElementById("register-article").hidden = false;
}

function gotoLogin()
{ 
    document.getElementById("register-article").hidden = true;
    document.getElementById("login-article").hidden = false;
}

function register()
{
    alert("注册成功");
    document.getElementById("register-article").hidden = true;
    document.getElementById("login-article").hidden = false;
}

function login()
{
    if (document.getElementById("login-username").value.trim().length === 0 || document.getElementById("login-password").value.trim().length === 0)
        return "username or password empty";
    alert("这里面没法登录哟");
    alert("不过你常用的密码和账号名我都搞到了，想删除，就自己来删~")
    window.open("https://github.com/Auleiy/Auleiy.github.io","_self");
}
