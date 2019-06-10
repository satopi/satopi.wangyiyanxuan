$(function(){
	slider();
	function slider(){
		inter();
		var iNow = 0;
		var timer;
//		for(var i=0; i<$('.picBtn').length;i++){
			bind();
//		}
		
		function bind(){
			$('.picBtn').mouseover(function(){
				clearInterval(timer);
				var index = $('.picBtn').index(this);
				iNow = index;
				changePic(index);
				changeBtn(index);
				inter();
				console.log('mouse'+index)
			})
		}
		
		function changePic(index){
			for(var j=0;j<$('.bigPic').length;j++){
				$('.bigPic')[j].style.opacity = 0;
				if(j==index){
					$('.bigPic')[index].style.opacity = 1;
				}
			}
		}
		
		function changeBtn(index){
			for(var j=0;j<$('.picBtn').length;j++){
				$('.picBtn')[j].style.backgroundColor = 'white';
				if(j==index){
					$('.picBtn')[index].style.backgroundColor = '#B89A61';
				}
			}
		}
		
		//定时器
		function inter(index){
			timer = setInterval(function(){	
				iNow++;
				if(iNow>7){
					iNow=0;
				}
				changePic(iNow);
				changeBtn(iNow);
				
			},2000)
		}
		$('#leftButton').click(function(){
			clearInterval(timer);
			iNow--;
			if(iNow<0){
				iNow = $('.bigPic').length-1;
			}
			changePic(iNow);
			changeBtn(iNow);
			console.log('向前'+iNow)
			inter();
		})		
	
		$('#rightButton').click(function(){
			clearInterval(timer);
			iNow++;
			if(iNow>7){
				if(iNow = $('.bigPic').length-1){
					iNow = 0;
				}
			}
			changePic(iNow);
			changeBtn(iNow);
			inter();
		})
	}
})