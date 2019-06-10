$(function(){
//	$('#telLogin').click(function(){
//		alert(1)
//		$('#emailLogin').css({'opacity':'0','zIndex':'3'})
//		$('#telLogin').css({'opacity':'1','zIndex':'5'})
//	})
//	
//	$('#emailLogin').click(function(){
//		alert(2)
//		$('#telLogin').css({'opacity':'0','zIndex':'3'})
//		$('#emailLogin').css({'opacity':'1','zIndex':'5'})
//	})
	
	
	$('.login_telInput').blur(function(){
		//取到input的value值，用.val()
		var index = $('.login_telInput').index(this);
		var value = $('.login_telInput').eq(index).val();
		var reg;
		switch(index){
//			case 0:
//			  var reg=/^1\d{10}$/;
//			  break;
//			case 1:
//			  var reg=/^\d{6}$/;
//			  break;
			case 0:
			  var reg=/^\d{5,11}@qq.com$/;
			  break;
			case 1:
			  var reg=/^\w{6,12}$/;
			  break;
		}
		checked(reg,value,index)
	})
	function checked(reg,value,index){
		var result = reg.test(value);
		if(result==false){
			$('.tips').eq(index).css('opacity','1');
		}else{
			$('.tips').eq(index).css('opacity','0');
		}
	}
})