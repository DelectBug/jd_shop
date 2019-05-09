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

});;