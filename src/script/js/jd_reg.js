var $user = $('#username');
$user.blur(function() {
        $.ajax({
            type: "post",
            url: "http://10.31.163.39/projectname/jd_shop/php/jd_reg.php",
            data: {
                username: $user.val()
            },
            success: function(d) {
                console.log(!d)
                if (d) {
                    $('#username-error').html('用户名以存在')
                } else {
                    $('#username-error').html('√')
                }
            }
        })
    })
    //该方法对用户名进行自定义检测
function check_username() {
    //正则检测
    var $reg = /^[\u4E00-\u9FA5]{1,6}$/;
    //用户名id
    var $useid = $("#username").val();
    //正则test方法检测
    if ($reg.test($useid)) {
        return true;
    } else {
        return false;
    }
}
//自定义validate的验证规则，形式如下
jQuery.validator.addMethod("check_username", function(value, element) {
    return check_price();
}, "用户名格式错误");
//该方法对电话号码进行自定义检测
function check_tel() {
    //正则检测
    var $reg = /^1[34578]\d{9}$/;
    //电话检测
    var $check_tel = $("#tel").val();
    //正则test方法检测
    if ($reg.test($check_tel)) {
        return true;
    } else {
        return false;
    }
}
//自定义validate的验证规则，形式如下
jQuery.validator.addMethod("check_tel", function(value, element) {
    return check_tel();
}, "电话格式错误");
//该方法对email进行自定义检测
function check_email() {
    //正则检测
    var $reg = /^1[34578]\d{9}$/;
    //电话检测
    var $check_email = $("#email").val();
    //正则test方法检测
    if ($reg.test($check_email)) {
        return true;
    } else {
        return false;
    }
}
//自定义validate的验证规则，形式如下
jQuery.validator.addMethod("check_email", function(value, element) {
    return check_email();
}, "邮件格式错误");

function check_pwd() {
    //正则检测
    var $reg = /^1[34578]\d{9}$/;
    var $reg1 =
        //电话检测
        var $check_pwd = $("#password").val();
    //正则test方法检测
    if ($reg.test($check_pwd)) {
        return true;
    } else {
        return false;
    }
}
//自定义validate的验证规则，形式如下
jQuery.validator.addMethod("check_pwd", function(value, element) {
    return check_pwd();
}, "密码过于简单");


$(function() {
    $('#register-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 3,
                maxlength: 10,
                check_username: true
                    // remote: { //将前端的name给后端
                    //     url: "http://10.31.163.39/projectname/jd_shop/php/jd_reg.php", //后台处理程序
                    //     type: "post" //数据发送方式
                    // }
            },
            password: {
                required: true,
                minlength: 6
            },
            repass: {
                required: true,
                equalTo: '#password'
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: '用户名不能为空',
                minlength: '用户名不能小于3',
                maxlength: '用户名不能大于10',
                remote: '用户名已存在',
                check_username: '用户名可是错误'
            },
            password: {
                required: '密码不能为空'
            },
            repass: {
                required: '密码重复不能为空'
            },
            email: {
                required: '电子邮箱不能为空',
                email: '你输入的格式有误'
            }
        }

    });

    $.validator.setDefaults({
        /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
        success: function(label) {
            label.text('√').css('color', 'green').addClass('valid');
        }
    });
});