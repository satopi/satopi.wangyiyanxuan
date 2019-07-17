$(function(){
	var str = '';
	$.each(srr1, function(index,data) {
		str = `<li class="say_Box">
					<div class="say_picBox">
						<img src="${data.src}" class="say_pic"/>
					</div>
					<div class="say_textBox">
						<section class="say_useInfo">
							<span class="say_userName">${data.name}</span>
							<span class="say_date">${data.date}</span>
						</section>
						<section class="say_middleTitle">
							<span class="say_title">${data.title}</span>
							<span class="say_price">${data.price}</span>
						</section>
						<section class="say_evaluate">
							<p>${data.evaluate}</p>
						</section>
					</div>
				</li>`;
		$('.say_goods').append(str);
	})
	
	var iNow = 0;	
	slider();
	function slider(){
		inter();
		var iNow = 0;
		var timer;
		function inter(){
			timer = setInterval(function(){
				iNow++;
				if(iNow>7){
					iNow=0;
					$('.say_goods').css('left',-iNow*365);
					iNow = 1;
				}
				else{
					changePic(iNow);
					$('.say_goods').stop().animate({'left':-iNow*365},300)
				}
				changePic(iNow);
			},2000)
		}
		
		$('#say_leftButton').click(function(){
			clearInterval(timer);
			iNow--;
			if(iNow<0){
				iNow = 0;
			}
			changePic(iNow);
			console.log('向前'+iNow);
			inter();
		})
		$('#say_rightButton').click(function(){
			clearInterval(timer);
			iNow++;
			if(iNow>7){
				iNow = 0;
				$('.say_goods').css('left',-iNow*365);
				iNow = 1;
			}
			changePic(iNow);
			$('.say_goods').stop().animate({'left':-iNow*365},300)
			console.log('向后'+iNow);
			inter();
		})
		
		function changePic(){
			var nowleft = -iNow*365;
			console.log(nowleft)
			$('.say_goods').stop().animate({'left':-iNow*365},300)
		}
	}
})