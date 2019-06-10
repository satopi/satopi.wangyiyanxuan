window.onload = function(){
	var oTopNav = document.getElementById("topNav2");
	var oDTopNav = document.getElementById("d_topNav");
	var oShopCar = document.getElementsByClassName('d_addShopCar')[0];
	var oRightSide = document.getElementById("rightSide");
	document.onscroll = function(){
		var oScroll = document.documentElement.scrollTop;
		if(oScroll>292){
			oRightSide.style.position = 'fixed'
			oRightSide.style.top = '70px'
			oRightSide.style.zIndex = '9999'
		}
		
		if(oScroll<=240){
			oTopNav.style.display = 'none'
			oDTopNav.style.position = 'relative'
			oShopCar.style.display = 'none'
			oRightSide.style.position = 'absolute'
			oRightSide.style.top = '700px'
		}
		
		if(oScroll>240&&oScroll<=894){
			oTopNav.style.display = 'block'
			oDTopNav.style.position = 'relative'
			oDTopNav.style.zIndex = '999'
			oShopCar.style.display = 'none'
		}
		if(oScroll>894){
			oTopNav.style.display = 'none'
			oDTopNav.style.position = 'fixed'
			oDTopNav.style.top = '0'
			oDTopNav.style.zIndex = '999'
			oShopCar.style.display = 'block'
		}
	}
}
