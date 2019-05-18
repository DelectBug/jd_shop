"use strict";function check_username(){var e=$("#username").val();return!!/^[\u4E00-\u9FA5]{1,6}$/.test(e)}function check_tel(){var e=$("#tel").val();return!!/^1[34578]\d{9}$/.test(e)}function check_email(){var e=$("#email").val();return!!/^(\w+[\.\+\-]*\w+)\@(\w+[\.\+\-]*\w+)\.(\w+[\.\+\-]*\w+)$/.test(e)}function check_pwd(){var e=$("#password").val(),r=0;if(/[0-9]/.test(e)&&r++,/[a-zA-Z_]/.test(e)&&r++,/[^0-9a-zA-Z_]/.test(e)&&r++,2<=r)return!0}jQuery.validator.addMethod("check_username",function(){return check_username()},"用户名格式错误"),jQuery.validator.addMethod("check_tel",function(){return check_tel()},"电话格式错误"),jQuery.validator.addMethod("check_email",function(){return check_email()},"邮件格式错误"),jQuery.validator.addMethod("check_pwd",function(){return check_pwd()},"密码过于简单"),$(function(){$("#register-form").validate({rules:{username:{required:!0,minlength:3,maxlength:10,check_username:!0},tel:{check_tel:!0},password:{check_pwd:!0,required:!0,minlength:6},repass:{required:!0,equalTo:"#password"},email:{check_email:!0,required:!0,email:!0}},messages:{username:{required:"用户名不能为空",minlength:"用户名不能小于3",maxlength:"用户名不能大于10",remote:"用户名已存在",check_username:"请输入中文用户名"},password:{required:"密码不能为空"},repass:{required:"密码重复不能为空"},email:{required:"电子邮箱不能为空",email:"你输入的格式有误"}}});var e=$("#username");e.blur(function(){$.ajax({type:"post",url:"../php/jd_reg.php",data:{username:e.val()},success:function(e){e&&$("#username-error").html("用户名以存在")}})})});