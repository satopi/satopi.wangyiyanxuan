$(function(){
	$('.c_goods').mouseover(function(){
		var i = $('.c_goods').index(this);
		var path = 'img/i_clothes/i_clothesGoods'+i+'-1.png'
		$(".c_goodsPic img").eq($('.c_goods').index(this)).attr('src',path);
	})
	
	$('.c_goods').mouseout(function(){
		var i = $('.c_goods').index(this);
		var path = 'img/i_clothes/i_clothesGoods'+i+'-0.png'
		$(".c_goodsPic img").eq($('.c_goods').index(this)).attr('src',path);
	})
})