window.onload = function(){
	var oTopNav = document.getElementById("topNav2");
	var oRightSide = document.getElementById("rightSide");
	document.onscroll = function(){
		var oScroll = document.documentElement.scrollTop;
		if(oScroll>240){
			oTopNav.style.display = 'block'
		}else{
			oTopNav.style.display = 'none'
			oRightSide.style.position = 'absolute'
			oRightSide.style.top = '700px'
		}
		if(oScroll>292){
			oRightSide.style.position = 'fixed'
			oRightSide.style.top = '70px'
			oRightSide.style.zIndex = '9999'
		}
	}
}
