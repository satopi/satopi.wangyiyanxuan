$(function(){	
	$('.login_telInput').blur(function(){
		//取到input的value值，用.val()
		var index = $('.login_telInput').index(this);
		var value = $('.login_telInput').eq(index).val();
		var oCheck = document.getElementById('check');
		var reg;
		switch(index){
			case 0:
			  var reg=/^1\d{10}$/;
			  break;
			case 1:
			  var reg=/^\d{6}$/;
			  break;
			case 2:
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
	
	$('#check').click(function(){
		if($('#check').prop('checked')==true){
			$('#registButton').attr('disabled' ,'');
		}else{
			$('#registButton').attr('disabled' ,'disabled');
			alert('您需要同意相关条款才能注册！');
		}
	})
})