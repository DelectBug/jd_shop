;
(function() {
    //数据渲染

    class cart_data {
        constructor() {
            this.empty_cart = $('.empty-cart');
            this.cart_main_inner = $('#cart_data_render');
            this.arrsid = [];
            this.arrnum = [];
        }
        cart_init() {
                var _this = this;
                //数据渲染要先渲染数据
                this.cart_sid();
                //掩藏空购物车
                this.kong();
                //购物车数量增加按钮
                $(".quantity_form_r").on('click', function() {
                        _this.sum_add(this)
                    })
                    //购物车数量减少按钮
                $(".quantity_form_l").on('click', function() {
                        _this.sum_reduce(this)
                    })
                    //全选按钮，不包括渲染的全选按钮
                $('.jdcheckbox').on('change', function() {
                    _this.allcheck(this);
                })
                $('.quantity_form input').on('input', function() {
                        _this.inputvaluechange(this)
                    })
                    // 事件委托 渲染input数值改变
                $('.cart_main_list').on('change', function() {
                        _this.shop_jdcheckbox();
                    })
                    //事件委托 渲染数据删除   
                $('.cart_main_list').on('click', '.shop_info_del a', function() {
                        console.log(this)
                        _this.shop_del(this);
                    })
                    //删除选中商品
                $('.cart_account_desc').find('a:first').on('click', function() {
                        _this.checked_shop_del();
                    })
                    //当页面无数据是删除cookie
                this.del_cookie();
            }
            //1.数据渲染
        data_render(id, count) {
                var _this = this;
                $.ajax({
                    url: 'http://10.31.163.39/projectname/jd_shop/php/jd_indexdata.php',
                    dataType: 'json'
                }).done(function(data) {
                    var $html = '<div class="cart_main_list">';
                    $.each(data, function(index, value) {
                        if (id == value.sid) {
                            var $clonebox = $('.cart_main_list:hidden').clone(true)
                            var $cart_main_list = $('.cart_main_list');
                            $clonebox.attr("sid", id);
                            $clonebox.find('.info_l_img').find('img').attr("src", value.url);
                            $clonebox.find('.shop_info_mid').find('.shop_info_mid_txt').html(value.title);
                            $clonebox.find('.img_desc').find('a').html(value.title);
                            // console.log($(this))
                            $clonebox.find('.quantity_form').find('input').val(count);
                            $clonebox.find('.shop_info_price').find('p').find('span').html(value.price);
                            $clonebox.find('.shop_info_sum').find('strong').find('span').html((value.price * count).toFixed(2));
                            $clonebox.css('display', 'block');
                            $('#cart_data_render').prepend($clonebox);
                            //console.log($(".quantity_form_r"))
                        }
                    });

                });
            }
            //2.获取cookie，执行渲染列表的函数
        cart_sid() {
                let _this = this;
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    var shopsid = $.cookie('cookiesid').split(','); //数组商品编码sid
                    // console.log($.cookie('cookienum'))
                    // console.log($.cookie('cookiesid')) 
                    var shopnum = $.cookie('cookienum').split(','); //数组商品数量num     
                    // console.log(shopnum)
                    $.each(shopsid, function(i, value) {
                        _this.data_render(shopsid[i], shopnum[i]);

                    });
                }
            }
            //3.如果购物车为空，显示empty-cart盒子(购物车空空的)
        kong() {
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                $('.empty-cart').hide(); //cookie存在，购物车有商品，隐藏盒子。
            } else {
                $('.empty-cart').show();
            }
        }
        cookietoarray() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) { //判断商品是第一次存还是多次存储
                    this.arrsid = $.cookie('cookiesid').split(','); //cookie商品的sid                     
                    this.arrnum = $.cookie('cookienum').split(','); //cookie商品的num
                }
            }
            // 4.商品数量增加
        sum_add(m) { //m为当前操作元素就是点击的+号
                var $count = $(m).parents('.cart_main_list').find('.quantity_form_mid').val(); //值            
                $count++;
                if ($count >= 99) {
                    $count = 99;
                }
                $(m).parents('.cart_main_list').find('.quantity_form_mid').val($count); //赋值回去
                var $cookiecount = $(m).parents('.cart_main_list').find('.quantity_form_mid').val();
                $(m).parents('.cart_main_list').find('.shop_info_sum').find('strong').find('span').html(this.singleprice($(m))); //改变后的价格
                this.cookietoarray();
                this.arrnum[$.inArray($(m).parents('.cart_main_list').attr('sid'), this.arrsid)] = $cookiecount;
                $.cookie('cookienum', this.arrnum, { expires: 7 }); //将改变的数量重新添加到cookie
                this.priceall(); //重新计算总和。

            }
            //5.商品数量减少
        sum_reduce(m) {
                console.log($(m).parents('.cart_main_list').find('.quantity_form_mid').val())
                var $count = $(m).parents('.cart_main_list').find('.quantity_form_mid').val(); //值            
                $count--;
                if ($count <= 0) {
                    $count = 1;
                }
                $(m).parents('.cart_main_list').find('.quantity_form_mid').val($count); //赋值回去
                var $cookiecount = $(m).parents('.cart_main_list').find('.quantity_form_mid').val();
                $(m).parents('.cart_main_list').find('.shop_info_sum').find('strong').find('span').html(this.singleprice($(m))); //改变后的价格
                this.cookietoarray();
                this.arrnum[$.inArray($(m).parents('.cart_main_list').attr('sid'), this.arrsid)] = $cookiecount;
                $.cookie('cookienum', this.arrnum, { expires: 7 }); //将改变的数量重新添加到cookie;
                this.priceall(); //重新计算总和。
            }
            //6.计算数量改变后单个商品的价格
        singleprice(obj) { //obj:当前元素
                var $dj = parseFloat(obj.parents('.cart_main_list').find('.shop_info_price').find('span').html()); //单价
                var $cnum = parseInt(obj.parents('.cart_main_list').find('.quantity_form_mid').val()); //数量
                return ($dj * $cnum).toFixed(2); //结果
            }
            //7.计算总价和总的商品件数，必须是选中的商品。
        priceall() {
                var $sum = 0;
                var $count = 0;
                $('.cart_main_list:visible').each(function(i, e) { //
                    if ($(e).find('.cart_checkbox_icon input').prop('checked')) {
                        $sum += parseInt($(e).find('.quantity_form').find('input').val());

                        $count += parseFloat($(e).find('.shop_info_sum').find('span').html()); //取得所有所选商品价格总和
                    }
                });

                $('.amount-sum').find('em').html($sum);
                $('.sumPrice').find('span').html($count.toFixed(2));
            }
            //8.全选计算总和
        allcheck(y) {
                // console.log($('.cart_main_list:visible').find(':checkbox'))
                $('.cart_main_list:visible').find(':checkbox').prop('checked', $(y).prop("checked"));
                $('.jdcheckbox').prop('checked', $(y).prop('checked'));
                this.priceall(); //取消选项，重算总和。
            }
            //9. 渲染数据全选按钮
        shop_jdcheckbox() {
                //console.log($('.cart_main_list'))//这里取到了所有的渲染出来的盒子
                this.inputs = $('.cart_main_list:visible').find(':checkbox');
                //console.log(this.inputs)//这个取到了渲染盒子的input元素
                if ($('.cart_main_list:visible').find('input:checkbox').length == $('.cart_main_list:visible').find('input:checked').size()) {
                    $('.jdcheckbox').prop('checked', true);
                } else {
                    $('.jdcheckbox').prop('checked', false);
                }
                this.priceall(); //取消选项，重算总和。
            }
            //10.input改变value重新计算小计和总价格
        inputvaluechange(z) {
                var $reg = /^\d+$/g; //只能输入数字
                var $value = parseInt($(z).val());
                if ($reg.test($value)) { //是数字
                    if ($value >= 99) { //限定范围
                        $(z).val(99);
                    } else if ($value <= 0) {
                        $(z).val(1);
                    } else {
                        $(z).val($value);
                    }
                } else { //不是数字
                    $(z).val(1);
                }
                $(z).parents('.cart_main_list').find('.shop_info_sum').find('span').html(this.singleprice($(z))); //改变后的价格
                var $cookiecount = $(z).val();
                this.cookietoarray();
                this.arrnum[$.inArray($(z).parents('.cart_main_list').attr('sid'), this.arrsid)] = $cookiecount;
                $.cookie('cookienum', this.arrnum, { expires: 7 }); //将改变的数量重新添加到cookie;
                this.priceall();

            }
            //11.渲染商品删除
        shop_del(x) {
                if (confirm('你确定要删除吗？')) {
                    $(x).parents('.cart_main_list').remove(); //通过当前点击的元素找到整个一行列表，删除
                    this.cookietoarray();
                    // console.log($.inArray($(x).parents('.cart_main_list').attr('sid'), this.arrsid));
                    this.arrnum.splice($.inArray($(x).parents('.cart_main_list').attr('sid'), this.arrsid), 1);
                    this.arrsid.splice($.inArray($(x).parents('.cart_main_list').attr('sid'), this.arrsid), 1);
                    console.log(this.arrnum)
                    $.cookie('cookienum', this.arrnum, { expires: 7 })
                    $.cookie('cookiesid', this.arrsid, { expires: 7 })
                    this.priceall();
                }

            }
            //12.删除选中的商品
        checked_shop_del() {
            let _this = this;
            this.cookietoarray();
            if (confirm('你确定删除吗？')) {
                $('.cart_main_list:visible').each(function(i, v) {
                    if ($(this).find('.shop_jdcheckbox').prop('checked')) {
                        $(this).remove();
                        _this.arrnum.splice($.inArray($(this).parents('.cart_main_list').attr('sid'), _this.arrsid), 1);
                        _this.arrsid.splice($.inArray($(this).parents('.cart_main_list').attr('sid'), _this.arrsid), 1);
                        console.log(_this.arrnum)
                        console.log(_this.arrsid)

                        $.cookie('cookienum', _this.arrnum, { expires: 7 })
                        $.cookie('cookiesid', _this.arrsid, { expires: 7 })
                        _this.priceall();
                        location.reload()
                    }
                })
            }
        }

        del_cookie() {
            // console.log(($.cookie('cookiesid') && $.cookie('cookienum')))
            if (($.cookie('cookiesid') && $.cookie('cookienum')) == null) {
                $.cookie('cookienum', { expires: -999 })
                $.cookie('cookiesid', { expires: -999 })

            }
        }
    }
    new cart_data().cart_init();
})();