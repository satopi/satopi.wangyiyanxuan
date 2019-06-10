window.onload = function(){
	var oTopNav = document.getElementById("topNav2");
	var oLeftSide = document.getElementById("leftSide");
	var oRightSide = document.getElementById("rightSide");
	document.onscroll = function(){
		var oScroll = document.documentElement.scrollTop;
		if(oScroll>240){
			oTopNav.style.display = 'block'
		}else{
			oTopNav.style.display = 'none'
			oLeftSide.style.position = 'absolute'
			oLeftSide.style.top = '700px'
			oLeftSide.style.left = '50px'
			oRightSide.style.position = 'absolute'
			oRightSide.style.top = '700px'
		}
		if(oScroll>292){
			oLeftSide.style.position = 'fixed'
			oLeftSide.style.top = '70px'
			oLeftSide.style.left = '70px'
			oLeftSide.style.zIndex = '9999'
			oRightSide.style.position = 'fixed'
			oRightSide.style.top = '70px'
			oRightSide.style.zIndex = '9999'
		}
	}
}
