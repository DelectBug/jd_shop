"use strict";var _createClass=function(){function a(i,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}return function(i,t,n){return t&&a(i.prototype,t),n&&a(i,n),i}}();function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}$("#nav_header").load("./jd_nav_header.html"),$("#header").load("./jd_header.html"),$("#main").load("./jd_main.html",function(){$(document).ready(function(){function i(){_classCallCheck(this,i),this.pic_list=$(".focus_list li"),this.rightbtn=$(".slider_control-r"),this.leftbtn=$(".slider_control-l"),this.circle_btn=$(".slider_indicators_btn"),this.num=0,this.autoplay=null,this.slide_box=$(".focus_list")}(_createClass(i,[{key:"banner_init",value:function(){var i=this;this.circle_btn.hover(function(){i.num=$(this).index(),i.pic_change()}),this.leftbtn.on("click",function(){i.leftclick()}),this.rightbtn.on("click",function(){i.rightclick()}),this.slide_box.on("mouseover",function(){clearInterval(i.autoplay)}),this.slide_box.on("mouseout",function(){i.auto()}),this.auto()}},{key:"rightclick",value:function(){this.num++,6<this.num&&(this.num=0),this.pic_change()}},{key:"leftclick",value:function(){this.num--,this.num<0&&(this.num=this.pic_list.size()-1),this.pic_change()}},{key:"pic_change",value:function(){this.circle_btn.eq(this.num).addClass("slider_indicators_btn_on").siblings().removeClass("slider_indicators_btn_on"),this.pic_list.eq(this.num).stop(!0,!0).animate({opacity:1}).siblings().stop(!0).animate({opacity:0})}},{key:"auto",value:function(){var i=this;this.autoplay=setInterval(function(){i.rightclick()},1500)}}]),new i).banner_init()})}),$("#main-floors").load("./jd_main_floor.html",function(){$(document).ready(function(){function i(){_classCallCheck(this,i),this.tab_bth=$(".box1_footer_tab_header .box1_footer_tab_item"),this.tab_inner=$(".box1_footer_tab_body .tab_body_inner")}function t(){_classCallCheck(this,t),this.tab_btn=$(".box3_footer_tab .tab_btn_begin"),this.tab_inner=$(".box3_footer_list .box3_footer_item"),this.tab_box=$(".box3_footer_list .box3_footer_wrapper")}(_createClass(i,[{key:"rank_tab_init",value:function(){var i=this;this.tab_bth.hover(function(){i.over(this)})}},{key:"over",value:function(i){$(i).addClass("tab_item_on").siblings("div").removeClass("tab_item_on");var t=$(i).index();this.tab_inner.eq(t).show().siblings("div").hide()}}]),new i).rank_tab_init(),(_createClass(t,[{key:"tab",value:function(){var n=this;this.tab_btn.hover(function(){n.over(this);var i=$(this).index();console.log(i);var t=n.tab_inner.width();console.log(t),n.tab_box.css({transform:"translate3d("+-i*t+"px,0px,0px)",transition:"all .5s"})})}},{key:"over",value:function(i){$(i).addClass("tab_btn_active").siblings("i").removeClass("tab_btn_active")}}]),new t).tab(),$.ajax({url:"../php/jd_indexdata.php",dataType:"json"}).done(function(i){var n='<ul class="clear floors_7_ul">';$.each(i,function(i,t){n+='\n                    <li class="floors_7_ul_list">\n                    <a href="./details.html?sid='+t.sid+'" class="floors_7_img">\n                        <div class="floors_7_a_img">\n                            <img class="lazy" data-original="'+t.url+'" style="width:150px;height:150px;">\n                        </div>\n                        <div class="floors_7_info">\n                            <p class="floors_7_desc"><i class="floors_7_desc_zy">自营</i>'+t.title+'</p>\n                            <div class="floors_7_price">\n                                <div class="info_price">\n                                    <i>￥</i><span>'+t.price+'</span>\n                                </div>\n                                <div class="price_ticket">券</div>\n                            </div>\n                        </div>\n                        <div class="floors_7_on">\n                            <div class="floors_7_on_l">\n                                <i class="floors_7_icon"></i>\n                                <span>找相似</span>\n                            </div>\n                            <div class="floors_7_on_r">\n                                <i class="floors_7_icon"></i>\n                                <span>不喜欢</span>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n                    '}),n+=n+n+"</ul>",$(".floor_7_data").html(n),$(function(){$(".lazy").lazyload({effect:"fadeIn"})})})})}),$("#footer").load("./jd_footer.html"),function(){function i(){_classCallCheck(this,i),this.jd_stairs_nav_last_nav=$(".jd_stairs_nav_last_nav")}(new(_createClass(i,[{key:"init",value:function(){this.back_top()}},{key:"back_top",value:function(){this.jd_stairs_nav_last_nav.on("click",function(){$("html,body").animate({scrollTop:0})})}}]),i)).init()}();var p1=new Promise(function(i){i()}).then(function(){$("#nav_header").load("./jd_nav_header.html")});setTimeout(function(){function i(){_classCallCheck(this,i),this.log_name=$(".nav-header-ul-r li:first a:first"),console.log(this.log_name)}(_createClass(i,[{key:"init",value:function(){}}]),new i).init()},0),Promise.all([p1]).then(function(){function i(){_classCallCheck(this,i),this.log_name=$(".nav-header-ul-r li:first a:first"),console.log(this.log_name)}(_createClass(i,[{key:"init",value:function(){}}]),new i).init()});