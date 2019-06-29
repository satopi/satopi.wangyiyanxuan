$(function(){
	var iNow = 0;	
	slider();
	function slider(){
		inter();
		var iNow = 0;
		var timer;
		bind();
		function inter(){
			timer = setInterval(function(){
				iNow++;
				if(iNow>$('.intro_bigPic').length-1){
					iNow=0;
					changePic(iNow);
					changeBtn(iNow);
					$('#intro_picBox').css('transition','')
				}else{
					changePic(iNow);
					changeBtn(iNow);
					$('#intro_picBox').css('transition','all 0.2s')
				}
			},2000)
		}
		
		function bind(){
			$('.intro_picBtn').mouseover(function(){
				clearInterval(timer);
				var index = $('.intro_picBtn').index(this);
				iNow = index;
				changePic(index);
				changeBtn(index);
				$('#intro_picBox').css('transition','all 0.2s')
				inter();
				console.log('mouse'+index)
			})
		}
		
		$('#intro_leftButton').click(function(){
			clearInterval(timer);
			iNow--;
			if(iNow<0){
				iNow = 4;
			}
			changePic(iNow);
			changeBtn(iNow);
			$('#intro_picBox').css('transition','all 0.2s')
			console.log('向前'+iNow);
			inter();
		})
		$('#intro_rightButton').click(function(){
			clearInterval(timer);
			iNow++;
			if(iNow>4){
				iNow = 0;
			}
			changePic(iNow);
			changeBtn(iNow);
			$('#intro_picBox').css('transition','all 0.2s')
			console.log('向后'+iNow);
			inter();
		})
		
		function changePic(){
			var nowleft = -iNow*1090;
			console.log(nowleft)
			$('#intro_picBox').css('left',nowleft)
		}
		
		function changeBtn(index){
			for(var j=0;j<$('.intro_picBtn').length;j++){
				$('.intro_picBtn')[j].style.backgroundColor = 'white';
				if(j==index){
					$('.intro_picBtn')[index].style.backgroundColor = '#B89A61';
				}
			}
		}
	}
	
	//tab切换
	$('#hotel').click(function(){
		var content = '本期严选改造了一间北京后海民宿，希望用温暖感十足布艺软装和质感高级的家居单品，打造一个即使在繁华之内，也能让你宁静下来的后海小院';
		var path = '../img/introduction/intro_Pic17.jpg';
		$("#intro_spaceText").text(content);
		$('#intro_spacePicBox img').attr('src',path);
		$('#hotel').css({'border-bottom':'none','color':'#333','backgroundColor':'white'});
		$('#apartment').css({'color':'#666','backgroundColor':'#f5f5f5'});
	})
	
	$('#apartment').click(function(){
		var content = '独居的女孩子，在都市中自己与自己生活，当然希望居住空间里的一切都精致的顺你心意，能够好好抚慰工作后疲惫的身体。想要守护你的这种精致，本期严选HOME与万科泊寓再次合作，用高级灰加上低饱和度的粉色，搭配真丝、香薰这些好物，为你打造出有质感的女神范单身公寓。';
		var path = '../img/introduction/intro_Pic18.jpg';
		$("#intro_spaceText").text(content);
		$('#intro_spacePicBox img').attr('src',path);
		$('#apartment').css({'border-bottom':'none','color':'#333','backgroundColor':'white'});
		$('#hotel').css({'color':'#666','backgroundColor':'#f5f5f5'});
	})
})