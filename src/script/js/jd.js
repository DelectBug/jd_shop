$('#nav_header').load("http://10.31.163.39/projectname/jd_shop/src/jd_nav_header.html");
$('#header').load("http://10.31.163.39/projectname/jd_shop/src/jd_header.html");
$('#main').load("http://10.31.163.39/projectname/jd_shop/src/jd_main.html", function() {
    $(document).ready(function() {
        // banner---轮播图
        (function() {
            class banner_slide {
                constructor() {
                    this.pic_list = $('.focus_list li');
                    this.rightbtn = $('.slider_control-r');
                    this.leftbtn = $('.slider_control-l');
                    this.circle_btn = $('.slider_indicators_btn');
                    this.num = 0;
                    this.autoplay = null;
                    this.slide_box = $('.focus_list');


                }
                banner_init() {
                    var _this = this;
                    this.circle_btn.hover(function() {
                        _this.num = $(this).index();
                        _this.pic_change();
                    })
                    this.leftbtn.on("click", function() {
                        _this.leftclick()
                    })
                    this.rightbtn.on("click", function() {
                        _this.rightclick()
                    })
                    this.slide_box.on('mouseover', function() {
                        clearInterval(_this.autoplay)
                    })
                    this.slide_box.on('mouseout', function() {
                        _this.auto();
                    })
                    this.auto();
                }

                rightclick() {
                    this.num++;

                    if (this.num > 6) {
                        this.num = 0;
                    }
                    this.pic_change();
                }
                leftclick() {
                    this.num--;
                    if (this.num < 0) {
                        this.num = this.pic_list.size() - 1
                    }
                    this.pic_change();
                }
                pic_change() {
                    this.circle_btn.eq(this.num).addClass('slider_indicators_btn_on').siblings().removeClass('slider_indicators_btn_on');
                    this.pic_list.eq(this.num).stop(true, true).animate({
                        opacity: 1
                    }).siblings().stop(true).animate({
                        opacity: 0
                    })
                }
                auto() {
                    var _this = this;
                    this.autoplay = setInterval(function() {
                        _this.rightclick();

                    }, 1500)
                }
            }

            new banner_slide().banner_init();
        })();
        // console.log($('.focus_list li'))
    });

});
$('#main-floors').load("http://10.31.163.39/projectname/jd_shop/src/jd_main_floor.html", function() {
    $(document).ready(function() {
        //排行榜-------tab切换
        (function() {
            class rank_tab {
                constructor() {
                    this.tab_bth = $('.box1_footer_tab_header .box1_footer_tab_item');
                    this.tab_inner = $('.box1_footer_tab_body .tab_body_inner')
                }
                rank_tab_init() {
                    var _this = this;
                    this.tab_bth.hover(function() {
                        _this.over(this);

                    })
                }
                over(present_bth) {
                    $(present_bth).addClass('tab_item_on').siblings('div').removeClass('tab_item_on');
                    var $num = $(present_bth).index();
                    this.tab_inner.eq($num).show().siblings('div').hide()
                }
            }
            new rank_tab().rank_tab_init();
        })();

        //会员专辑------轮播图
        (function() {
            /* class slideshow {
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
            new slideshow().init(); */
        })();

        //领券中心------tab切换
        (function() {
            class coupon_tab {
                constructor() {
                    this.tab_btn = $('.box3_footer_tab .tab_btn_begin');
                    this.tab_inner = $('.box3_footer_list .box3_footer_item')
                    this.tab_box = $('.box3_footer_list .box3_footer_wrapper')
                }
                tab() {
                    let _this = this;
                    this.tab_btn.hover(function() {
                        _this.over(this)
                        let $num = $(this).index();
                        console.log($num)
                        let $width = _this.tab_inner.width();
                        console.log($width)
                        _this.tab_box.css({
                            "transform": "translate3d(" + (-$num * $width) + "px,0px,0px)",
                            "transition": "all .5s",
                        })
                    })
                }
                over(btn) {
                    // var _this = this;
                    $(btn).addClass('tab_btn_active').siblings('i').removeClass('tab_btn_active');
                }
            }
            new coupon_tab().tab();
        })();
        //数据渲染
        (function() {
            $.ajax({
                url: 'http://10.31.163.39/projectname/jd_shop/php/jd_indexdata.php',
                dataType: 'json'
            }).done(function(data) {
                var $html = '<ul class="clear floors_7_ul">';
                // console.log(data);

                $.each(data, function(index, value) {
                    console.log(value)
                    $html += `
                    <li class="floors_7_ul_list">
                    <a href="http://10.31.163.39/projectname/jd_shop/src/details.html?sid=${value.sid}" class="floors_7_img">
                        <div class="floors_7_a_img">
                            <img class="lazy" data-original="${value.url}" style="width:150px;height:150px;">
                        </div>
                        <div class="floors_7_info">
                            <p class="floors_7_desc"><i class="floors_7_desc_zy">自营</i>${value.title}</p>
                            <div class="floors_7_price">
                                <div class="info_price">
                                    <i>￥</i><span>${value.price}</span>
                                </div>
                                <div class="price_ticket">券</div>
                            </div>
                        </div>
                        <div class="floors_7_on">
                            <div class="floors_7_on_l">
                                <i class="floors_7_icon"></i>
                                <span>找相似</span>
                            </div>
                            <div class="floors_7_on_r">
                                <i class="floors_7_icon"></i>
                                <span>不喜欢</span>
                            </div>
                        </div>
                    </a>
                </li>
                    `;
                });
                $html += $html + $html + '</ul>';
                $('.floor_7_data').html($html);
                $(function() {
                    $(".lazy").lazyload({
                        effect: "fadeIn"
                    });
                });
            });
        })();
    });
});
$('#footer').load("http://10.31.163.39/projectname/jd_shop/src/jd_footer.html");
//楼梯导航
;
(function() {
    class jd_stairs_effect {
        constructor() {
            this.jd_stairs_nav_last_nav = $('.jd_stairs_nav_last_nav')
        }
        init() {
            this.back_top();
        }
        back_top() {
            this.jd_stairs_nav_last_nav.on('click', function() {
                $('html,body').animate({ //这里给滚动条赋值，兼容写法
                    scrollTop: 0
                });
            })
        }
    }
    new jd_stairs_effect().init();
})();