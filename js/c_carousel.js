$(function(){
	slider();
	function slider(){
		var iNow = 0;
		var timer;
		bind();
		
		function bind(){
			$('.c_picBtn').mouseover(function(){
				var index = $('.c_picBtn').index(this);
				iNow = index;
				changePic(index);
				changeBtn(index);
				console.log('mouse'+index)
			})
		}
		
		function changePic(index){
			for(var j=0;j<$('.c_bigPic').length;j++){
				$('.c_bigPic')[j].style.opacity = 0;
				if(j==index){
					$('.c_bigPic')[index].style.opacity = 1;
				}
			}
		}
		
		function changeBtn(index){
			for(var j=0;j<$('.c_picBtn').length;j++){
				$('.c_picBtn')[j].style.backgroundColor = 'white';
				if(j==index){
					$('.c_picBtn')[index].style.backgroundColor = '#B89A61';
				}
			}
		}
		$('#c_leftButton').click(function(){
			iNow--;
			if(iNow<0){
				iNow = $('.c_bigPic').length-1;
			}
			changePic(iNow);
			changeBtn(iNow);
			console.log('向前'+iNow)
		})		
	
		$('#c_rightButton').click(function(){
			iNow++;
			if(iNow>2){
				if(iNow = $('.c_bigPic').length-1){
					iNow = 0;
				}
			}
			changePic(iNow);
			changeBtn(iNow);
		})
	}
})