"use strict";var _createClass=function(){function a(i,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}return function(i,t,n){return t&&a(i.prototype,t),n&&a(i,n),i}}();function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){function i(){_classCallCheck(this,i),this.empty_cart=$(".empty-cart"),this.cart_main_inner=$("#cart_data_render"),this.arrsid=[],this.arrnum=[]}(new(_createClass(i,[{key:"cart_init",value:function(){var i=this;this.cart_sid(),this.kong(),$(".quantity_form_r").on("click",function(){i.sum_add(this)}),$(".quantity_form_l").on("click",function(){i.sum_reduce(this)}),$(".jdcheckbox").on("change",function(){i.allcheck(this)}),$(".quantity_form input").on("input",function(){i.inputvaluechange(this)}),$(".cart_main_list").on("change",function(){i.shop_jdcheckbox()}),$(".cart_main_list").on("click",".shop_info_del a",function(){console.log(this),i.shop_del(this)}),$(".cart_account_desc").find("a:first").on("click",function(){i.checked_shop_del()}),this.del_cookie()}},{key:"data_render",value:function(a,e){$.ajax({url:"../php/jd_indexdata.php",dataType:"json"}).done(function(i){$.each(i,function(i,t){if(a==t.sid){var n=$(".cart_main_list:hidden").clone(!0);$(".cart_main_list"),n.attr("sid",a),n.find(".info_l_img").find("img").attr("src",t.url),n.find(".shop_info_mid").find(".shop_info_mid_txt").html(t.title),n.find(".img_desc").find("a").html(t.title),n.find(".quantity_form").find("input").val(e),n.find(".shop_info_price").find("p").find("span").html(t.price),n.find(".shop_info_sum").find("strong").find("span").html((t.price*e).toFixed(2)),n.css("display","block"),$("#cart_data_render").prepend(n)}})})}},{key:"cart_sid",value:function(){var t=this;if($.cookie("cookiesid")&&$.cookie("cookienum")){var n=$.cookie("cookiesid").split(","),a=$.cookie("cookienum").split(",");$.each(n,function(i){t.data_render(n[i],a[i])})}}},{key:"kong",value:function(){$.cookie("cookiesid")&&$.cookie("cookienum")?$(".empty-cart").hide():$(".empty-cart").show()}},{key:"cookietoarray",value:function(){$.cookie("cookiesid")&&$.cookie("cookienum")&&(this.arrsid=$.cookie("cookiesid").split(","),this.arrnum=$.cookie("cookienum").split(","))}},{key:"sum_add",value:function(i){var t=$(i).parents(".cart_main_list").find(".quantity_form_mid").val();99<=++t&&(t=99),$(i).parents(".cart_main_list").find(".quantity_form_mid").val(t);var n=$(i).parents(".cart_main_list").find(".quantity_form_mid").val();$(i).parents(".cart_main_list").find(".shop_info_sum").find("strong").find("span").html(this.singleprice($(i))),this.cookietoarray(),this.arrnum[$.inArray($(i).parents(".cart_main_list").attr("sid"),this.arrsid)]=n,$.cookie("cookienum",this.arrnum,{expires:7}),this.priceall()}},{key:"sum_reduce",value:function(i){console.log($(i).parents(".cart_main_list").find(".quantity_form_mid").val());var t=$(i).parents(".cart_main_list").find(".quantity_form_mid").val();--t<=0&&(t=1),$(i).parents(".cart_main_list").find(".quantity_form_mid").val(t);var n=$(i).parents(".cart_main_list").find(".quantity_form_mid").val();$(i).parents(".cart_main_list").find(".shop_info_sum").find("strong").find("span").html(this.singleprice($(i))),this.cookietoarray(),this.arrnum[$.inArray($(i).parents(".cart_main_list").attr("sid"),this.arrsid)]=n,$.cookie("cookienum",this.arrnum,{expires:7}),this.priceall()}},{key:"singleprice",value:function(i){return(parseFloat(i.parents(".cart_main_list").find(".shop_info_price").find("span").html())*parseInt(i.parents(".cart_main_list").find(".quantity_form_mid").val())).toFixed(2)}},{key:"priceall",value:function(){var n=0,a=0;$(".cart_main_list:visible").each(function(i,t){$(t).find(".cart_checkbox_icon input").prop("checked")&&(n+=parseInt($(t).find(".quantity_form").find("input").val()),a+=parseFloat($(t).find(".shop_info_sum").find("span").html()))}),$(".amount-sum").find("em").html(n),$(".sumPrice").find("span").html(a.toFixed(2))}},{key:"allcheck",value:function(i){$(".cart_main_list:visible").find(":checkbox").prop("checked",$(i).prop("checked")),$(".jdcheckbox").prop("checked",$(i).prop("checked")),this.priceall()}},{key:"shop_jdcheckbox",value:function(){this.inputs=$(".cart_main_list:visible").find(":checkbox"),$(".cart_main_list:visible").find("input:checkbox").length==$(".cart_main_list:visible").find("input:checked").size()?$(".jdcheckbox").prop("checked",!0):$(".jdcheckbox").prop("checked",!1),this.priceall()}},{key:"inputvaluechange",value:function(i){var t=parseInt($(i).val());/^\d+$/g.test(t)?99<=t?$(i).val(99):t<=0?$(i).val(1):$(i).val(t):$(i).val(1),$(i).parents(".cart_main_list").find(".shop_info_sum").find("span").html(this.singleprice($(i)));var n=$(i).val();this.cookietoarray(),this.arrnum[$.inArray($(i).parents(".cart_main_list").attr("sid"),this.arrsid)]=n,$.cookie("cookienum",this.arrnum,{expires:7}),this.priceall()}},{key:"shop_del",value:function(i){confirm("你确定要删除吗？")&&($(i).parents(".cart_main_list").remove(),this.cookietoarray(),this.arrnum.splice($.inArray($(i).parents(".cart_main_list").attr("sid"),this.arrsid),1),this.arrsid.splice($.inArray($(i).parents(".cart_main_list").attr("sid"),this.arrsid),1),console.log(this.arrnum),$.cookie("cookienum",this.arrnum,{expires:7}),$.cookie("cookiesid",this.arrsid,{expires:7}),this.priceall())}},{key:"checked_shop_del",value:function(){var i=this;this.cookietoarray(),confirm("你确定删除吗？")&&$(".cart_main_list:visible").each(function(){$(this).find(".shop_jdcheckbox").prop("checked")&&($(this).remove(),i.arrnum.splice($.inArray($(this).parents(".cart_main_list").attr("sid"),i.arrsid),1),i.arrsid.splice($.inArray($(this).parents(".cart_main_list").attr("sid"),i.arrsid),1),console.log(i.arrnum),console.log(i.arrsid),$.cookie("cookienum",i.arrnum,{expires:7}),$.cookie("cookiesid",i.arrsid,{expires:7}),i.priceall(),location.reload())})}},{key:"del_cookie",value:function(){null==($.cookie("cookiesid")&&$.cookie("cookienum"))&&($.cookie("cookienum",{expires:-999}),$.cookie("cookiesid",{expires:-999}))}}]),i)).cart_init()}();