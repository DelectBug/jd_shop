$('#nav_header').load("http://10.31.163.39/projectname/jd_shop/src/jd_nav_header.html");
$('#header').load("http://10.31.163.39/projectname/jd_shop/src/jd_header.html");
$('#main').load("http://10.31.163.39/projectname/jd_shop/src/jd_main.html");
$('#main-floors').load("http://10.31.163.39/projectname/jd_shop/src/jd_main_floor.html");
$('#footer').load("http://10.31.163.39/projectname/jd_shop/src/jd_footer.html");
$(document).ready(function() {
    (function() {
        console.log($(".navitems-group1").width())
        console.log($(".a_m_inner_img").width())

        class slideshow {
            constructor() {
                this.slider_wrapper = $("#main-floors")
            }
            init() {
                console.log(this.slider_wrappe_width())
            }
            slider_wrappe_width() {
                return $("#main-floors").width();
            }

        }
        new slideshow().init();
    })();
})