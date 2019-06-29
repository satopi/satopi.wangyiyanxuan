$(function(){
	function times(){
		var nowDate = new Date();
		var oYear = nowDate.getFullYear();
		//月份为0-10
		var oMoth = nowDate.getMonth();
		var oDate = nowDate.getDate();
		var oHour = nowDate.getHours();
		var oMinutes = nowDate.getMinutes();
		var oSeconds = nowDate.getSeconds();
		oSeconds--;
		if(oHour>10){
			var endDate = new Date(oYear,oMoth,oDate+1,10,0,0);
		}else{
			var endDate = new Date(oYear,oMoth,oDate,10,0,0);
		}
		//相差的总秒数
		var totalSeconds = parseInt((endDate-nowDate)/1000);
//					console.log(totalSeconds)
		//取余
		var modulo = totalSeconds%(60*60*24);
//					console.log(modulo)
		//相差的小时
		var hours = Math.floor(modulo/(60*60));
		if(hours<10){
			hours = '0'+hours;
		}
//					console.log(hours)
		//再取余
		var modulo2 = modulo%(60*60);
//					console.log(modulo2)
		//相差的分钟
		var minutes = Math.floor(modulo2/60);
		if(minutes<10){
			minutes = '0'+minutes;
		}
//					console.log(minutes)
		//相差的秒数
		var seconds = modulo2%60;
		if(seconds<10){
			seconds = '0'+seconds;
		}
		
		$('#time .countDown:nth-of-type(1) span').html(hours);
		$('#time .countDown:nth-of-type(2) span').html(minutes);
		$('#time .countDown:nth-of-type(3) span').html(seconds);
	}
	times();
	setInterval(function(){
		times();
	},1000)
})