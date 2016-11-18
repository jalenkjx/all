require(["jquery","date"],function($,date){
	var month = date.getSelfMonth();
	//获取当前月份的天数
	var days = date.getSelfMonthDays();
	
	//声明一个空的数组，存放当前月的天数
	var arrayDays = new Array(days);
	arrayDays.fill("").forEach(function(item,i){
		arrayDays[i] = i + 1;
	});
	
//	var prevDate = new Date("2016-10-01");
//	
//	var Week = [7,1,2,3,4,5,6];
//	var prevDay = Week[prevDate.getDay()];
	
	//添加上一个月的天数
//	arrayDays.unshift();
	//添加下一个月的天数
//	arrayDays.push(1,2,3,4);
	
	var html = "";
	
	html += "<ul>";
	for(var i=0;i<arrayDays.length;i++){
		if(i%7 == 0 && i != 0){
			html += "</ul><ul>";
		}
		var number = arrayDays[i];
		html += "<li data-month='"+ (month + 1) +"' data-day='"+ number +"'>" + (number < 10 ? "0"+number : number ) + "</li>";
	}
	
	html += "</ul>";
	
	$("#wrap").html(html);
	
	$("#wrap").on("click","li",function(){
		//获取自定义属性时，不传参数会把所有的自定义属性当做对象返回
		var data = $(this).data();
		var time = "2016-"+data.month + "-"+data.day;
		$.get("/api/test",{
			//向服务器发送的数据
			url : "http://v.juhe.cn/todayOnhistory/queryEvent.php",
			date : data.month + "/" + data.day,
			key : "963e291d6be89582f50a7b8eae45c15c"
		},function(result){
			console.log(result);
		},"json");
		
	});
});