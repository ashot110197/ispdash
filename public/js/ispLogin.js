'use strict';

function requestISPLogin() {

    var userName = $('#uname').val();
    var password = $('#upassword').val();

    $.ajax({
        url: 'http://XXXXXXXXXXXXXX:10001/oauth/token',
        type: 'post',
        data: {
            grant_type:'password',
            usernmae: userName,
            password: password
        },
        headers: {
            Authorization: 'Basic ' + btoa('clientId:clientSecret')
        },
        dataType: 'json',
        success: function (data) {
            console.info(data);
            alert(data);
        }
    });

};


window.requestISPLogin = requestISPLogin;
