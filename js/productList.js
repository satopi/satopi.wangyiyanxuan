$(function(){
	var str = '';
	$.each(srr2, function(index,data) {
		str = `<a href="details.html" style="text-decoration: none;">
					<li class="pro_goodsBox">
						<div class="pro_pic">
							<img src="${data.src}" />
						</div>
						<div class="pro_goodsText">
							<section class="pro_goodsSpan"></section>
							<a href="#" style="text-decoration: none;"><h4>${data.name}</h4></a>
							<section class="pro_priceBox">
								<span class="pro_price1">${data.price1}</span>
								<span class="pro_price2">${data.price2}</span>
							</section>
							<section class="pro_textBox">
								<hr />
								<p>${data.introduce}</p>
							</section>
						</div>
					</li>
				</a>`;
		$('#pro_goodsBigBox').append(str);
		
		$('.pro_goodsBox').mouseover(function(){
			if(index == $('.pro_goodsBox').index(this)){
				var path = data.src2;
			}
			$(".pro_pic img").eq($('.pro_goodsBox').index(this)).attr('src',path);
		})
		
		$('.pro_goodsBox').mouseout(function(){
			if(index == $('.pro_goodsBox').index(this)){
				var path = data.src;
			}
			$(".pro_pic img").eq($('.pro_goodsBox').index(this)).attr('src',path);
		})
	})
})