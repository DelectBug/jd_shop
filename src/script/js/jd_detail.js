$(document).ready(function() {
    //取到地址栏的sid
    const picid = location.search.substring(1).split('=')[1];
    //数据渲染
    (function() {
        //将sid传输到后台
        $.ajax({
            url: "http://10.31.163.39/projectname/jd_shop/php/detail.php",
            data: {
                sid: picid
            },
            dataType: 'json'
        }).done(function(data) {
            //详情页数据渲染
            const arr = data.urllist.split(',');
            $('.jqzoom img').attr('sid', data.sid);
            var str = '';
            $.each(arr, function(index, value) {
                $('.jqzoom img').attr("src", arr[0])
                str += '<li style="width:54px;height:54px;"><img src="' + value + '"/ style="width:50px;height:50px;"></li>';
            });
            $('.lh').html(str);
            $('.lh').width($('.lh li').size() * $('.lh li').outerWidth(true))
            $('.lh li').eq(0).addClass("img_hover");
            $('.zoomdiv').find('img').attr("src", arr[0]);
            // //放大镜效果
            (function() {
                class Magnifier {
                    constructor() {
                        this.lh_li = $('.lh li');
                        this.jqzoom = $('.jqzoom');
                        this.jqZoomPup = $('.jqZoomPup');
                        this.zoomdiv = $('.zoomdiv');
                    }
                    Magnifier_init() {
                        let _this = this;
                        //li标签悬停
                        this.lh_li.hover(function() {
                                _this.Magnifier_li_hover(this);
                            })
                            //大图悬停
                        this.jqzoom.hover(function() {
                            _this.over(this.lh_li);
                        }, function() {
                            _this.out();
                        })
                        this.Magnifier_enlarge();
                    }
                    Magnifier_li_hover(li) {
                        //传过来的是原生的li要转jq所以要加$符号。
                        $(li).addClass("img_hover").siblings().removeClass("img_hover");
                        $('.jqzoom img').attr("src", $(li).find('img').attr('src'));
                        $('.zoomdiv img').attr("src", $(li).find('img').attr('src'));
                    }
                    over() {
                        let _this = this;

                        this.zoomdiv.css("display", "block");
                        this.bili = this.zoomdiv.find('img').width() / this.jqzoom.find("img").width();
                        this.jqZoomPup.css({
                            "display": "block",
                            "width": (this.jqzoom.find('img').width()) * (this.zoomdiv.width()) / (this.zoomdiv.find('img').width()) + "px",
                            "height": (this.jqzoom.find('img').height()) * (this.zoomdiv.height()) / (this.zoomdiv.find('img').height()) + "px"
                        })
                        this.jqzoom.on('mousemove', function(e) {
                            _this.move(e);
                        })

                    }
                    out() {
                        this.jqZoomPup.css("display", "none");
                        this.zoomdiv.css("display", "none");

                    }
                    move(e) {
                        let l = e.pageX - this.jqzoom.offset().left - this.jqZoomPup.width() / 2;
                        let t = e.pageY - this.jqzoom.offset().top - this.jqZoomPup.height() / 2;

                        if (l <= 0) {
                            l = 0
                        } else if (l >= this.jqzoom.find('img').width() - this.jqZoomPup.width()) {
                            l = this.jqzoom.find('img').width() - this.jqZoomPup.width()
                        }

                        if (t <= 0) {
                            t = 0
                        } else if (t >= this.jqzoom.find('img').height() - this.jqZoomPup.height()) {
                            t = this.jqzoom.find('img').height() - this.jqZoomPup.height()
                        }
                        this.jqZoomPup.css({
                            left: l,
                            top: t
                        });
                        this.zoomdiv.find('img').css({
                            left: -this.bili * l,
                            top: -this.bili * t
                        })

                    }
                    Magnifier_enlarge() {
                        // let _this = this;
                    }

                };
                new Magnifier().Magnifier_init();
            })();
        });
    })();
    //存储cookie值
    (function() {
        class cookie {
            constructor() {
                this.arrsid = [];
                this.arrnum = [];
                this.cart_bth = $('.choose_btns a');
                this.sid = $('.jqzoom img').attr('sid');
                this.btn_reduce = $('.btn_reduce');
                this.btn_add = $('.btn_add');
                // console.log(this.btn_add);
                this.value = $('.buy_num').val();
            }


            cookie_init() {
                var _this = this;
                // console.log(this)
                this.btn_reduce.on('click', function(event) {
                        _this.btn_reduce_click();
                        // event.stopPropagation();
                    })
                    // console.log(this.btn_add)
                this.btn_add.on('click', function(event) {
                    console.log(_this.btn_add)
                    _this.btn_add_click();
                    // event.stopPropagation();
                })
                this.cart_bth.on('click', function(event) {
                    console.log(_this)
                    _this.btnclick();
                    // event.stopPropagation();
                })
            }


            btn_reduce_click() {
                this.value--;
                if (this.value <= 1) {
                    this.value = 1;
                    this.btn_reduce.css("cursor", "not-allowed");
                    this.btn_reduce.attr('disabled', "true")
                }
                if (this.value > 1) {
                    this.btn_reduce.css("cursor", "pointer")
                }
                $('.buy_num').val(this.value)
                $('.shopping_cart .ci-count').html(this.value);
            }


            btn_add_click() {
                console.log(this);
                this.value++;
                this.btn_reduce.css("cursor", "pointer");
                $('.buy_num').val(this.value)
                $('.shopping_cart .ci-count').html(this.value);
            }


            cookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) { //判断商品是第一次存还是多次存储
                    this.arrsid = $.cookie('cookiesid').split(','); //cookie商品的sid                     
                    this.arrnum = $.cookie('cookienum').split(','); //cookie商品的num
                }
            }


            btnclick() {
                console.log(3)
                    //要ajax先执行好在取得sid数据,否则是数据取得失败,点击事件也是异步的所以放在这里也可以实现。
                this.sid = $('.jqzoom img').attr('sid');
                this.cookietoarray();
                if ($.inArray(this.sid, this.arrsid) != -1) { //商品存在，数量叠加 
                    //先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
                    var $num = parseInt(this.arrnum[$.inArray(this.sid, this.arrsid)]) + parseInt($('.buy_num').val());
                    this.arrnum[$.inArray(this.sid, this.arrsid)] = $num;
                    console.log(this.arrnum)
                    $.cookie('cookienum', this.arrnum.toString(), { expires: 7 }); //数组存入cookie
                    alert('商品数量更新');
                    $('.shopping_cart .ci-count').html($num);
                } else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
                    this.arrsid.push(this.sid); //将当前的id存入数组
                    $.cookie('cookiesid', this.arrsid.toString(), { expires: 7 }); //数组存入cookie

                    this.arrnum.push($('.buy_num').val());
                    $.cookie('cookienum', this.arrnum.toString(), { expires: 7 }); //数组存入cookie
                    alert('商品数量添加');
                }
                // this.cookietoarray();
            }
        }
        new cookie().cookie_init();
    })();
});