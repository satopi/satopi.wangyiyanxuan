$(function(){
	var str = '';
	$.each(srr, function(index,data) {
		str = `<li class="newPic">
					<img src="${data.src}" />
				    <div id="n_goodsTitle">
						<h4>
							<div class="i_newTitle"></div>
							<div class="i_newName">
								<span>${data.name}</span>
							</div>
							<p class="i_newPrice">
								<span>${data.price}</span>
							</p>
						</h4>
					</div>
				</li>`;
		$('#newPicBox').append(str);
	})
	
	$('.newPic').mouseover(function(){
		var i = $('.newPic').index(this)+1;
		var path = 'img/i_new/i_new'+i+'-1.jpg'
		$(".newPic img").eq($('.newPic').index(this)).attr('src',path);
	})
	
	$('.newPic').mouseout(function(){
		var i = $('.newPic').index(this)+1;
		var path = 'img/i_new/i_new'+i+'-0.png'
		$(".newPic img").eq($('.newPic').index(this)).attr('src',path);
	})
	
	var iNow = 0;	
	$('#n_leftButton').click(function(){
		iNow--;
		if(iNow<0){
			iNow = $('.newPic').length-10;
		}
		changePic(iNow);
		console.log('向前'+iNow)
	})
	$('#n_rightButton').click(function(){
		iNow++;
		if(iNow>2){
			if(iNow = $('.newPic').length-1){
				iNow = 0;
			}
		}
		changePic(iNow);
		console.log('向后'+iNow)
	})
	
	function changePic(){
		var nowleft = -iNow*1060;
		console.log(nowleft)
		$('#newPicBox').css('left',nowleft)
	}
})