$(function(){
	//放大镜
	$('.detailsPic').mousemove(function(){
		$('#d_square').css('display','block');
		$('#d_magnifier').css('display','block');
		var nowleft = Math.floor(event.pageX-$('.detailsPic').offset().left-100);
		var nowtop = event.pageY-$('.detailsPic').offset().top-100;
		if(nowleft<0){
			nowleft = 0;
		}
		if(nowleft>231){
			nowleft = 231;
		}
		if(nowtop<0){
			nowtop = 0;
		}
		if(nowtop>231){
			nowtop = 231;
		}
		$('#d_square').css({'top':nowtop,'left':nowleft});
		$('#d_magBigPic').css({'top':-nowtop*2,'left':-nowleft*2});
	})
	
	$('.detailsPic').mouseout(function(){
		$('#d_square').css('display','none');
		$('#d_magnifier').css('display','none');
	})
	
	//切换
	$('.detailsBtn').mousemove(function(){
		var i = $('.detailsBtn').index(this);
		var path = '../img/details/d_bigPic'+i+'.jpg';
		$('.detailsPic img').attr('src',path);
	})
	
	//数量加减
	$('#numMin').click(function(){
		var num = $('#numText').val();
		if(num==1){
			$('#numText').val('1');
			alert('本商品1件起售！')
		}else{
			num--;
			$('#numText').val(num);
		}
	})
	
	$('#numSum').click(function(){
		var num = $('#numText').val();
		num++;
		$('#numText').val(num);
	})
	
	
	//吸顶切换
	$('.d_tab').click(function(){
		var i = $('.d_tab').index(this);
		$('.d_topBtns').removeClass('d_topBtns');
		$('.d_topBtns1').removeClass('d_topBtns1');
		$('.d_tab').addClass('d_topBtns');
		$('.d_tab').eq($('.d_tab').index(this)).addClass('d_topBtns1');
		$('.d_topBtns').css('border','none');
		$('.d_tab').eq($('.d_tab').index(this)).css('borderTop','3px solid #b4a078');
		if(i==0){
			$('#d_comment').css('display','none');
			$('#d_question').css('display','none');
			$('.d_picBox').eq($('.d_tab').index(this)).css('display','block');
			$('#details_footer').css('top','3830px');
		}else if(i==1){
			$('#d_details').css('display','none');
			$('#d_question').css('display','none');
			$('.d_picBox').eq($('.d_tab').index(this)).css('display','block');
			$('#details_footer').css('top','650px');
		}else{
			$('#d_comment').css('display','none');
			$('#d_details').css('display','none');
			$('.d_picBox').eq($('.d_tab').index(this)).css('display','block');
			$('#details_footer').css('top','1155px');
		}
	})
})