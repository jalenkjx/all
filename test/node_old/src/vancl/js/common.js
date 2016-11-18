function common(){
	

	$(function(){
		
		function setFontSize(){
			// 设计稿 640px
			var width = document.documentElement.clientWidth;
			var fontSize = (width / 640) * 100;
			document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
		}
		$(window).on("resize",setFontSize);
		setFontSize();
		
		
	})
	
}