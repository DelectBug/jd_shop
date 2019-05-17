;
(function() {
    class log {
        constructor() {
            this.login_btn = $('.login-btn a');
            this.loginname = $('#loginname');
            this.loginpwd = $('#loginpwd');
            this.hint = $('.hint');
            console.log(this.hint)

        }
        log_init() {
            var _this = this;
            this.login_btn.on("click", function() {
                _this.click();
            })
        }
        click() {
            var _this = this;
            $.ajax({
                type: 'post',
                url: '../php/jd_log.php',
                data: { //将用户名和密码传输给后端
                    name: this.loginname.val(),
                    pass: this.loginpwd.val()
                },
                success: function(data) { //请求成功，接收后端返回的值
                    if (!data) { //用户名或者密码错误
                        _this.hint.html('用户名或者密码错误');
                    } else { //成功,存cookie,跳转到首页
                        $.cookie('UserName', _this.loginname.val(), { expires: 7 });
                        location.href = './jd_index.html';
                    }
                }
            })
        }

    }
    new log().log_init();
})();
//