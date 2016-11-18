//逐帧动画
//查看 requestAnimationFrame 资料 https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { return window.setTimeout(callback, 1000 / 60); };
define(["$"],function($){
	var $game;
	var number = 0;
	
	//水瓶滴水
	function game(){
		number++;
		$("#drink").addClass("move");
	}
	//记录碰撞检测结果，有几滴水滴进碗里
	var bowl = {};
	/**
	 * 碰撞检测
	 * @param {Object} vodka  水滴
	 * @param {Object} hand   碗
	 */
	function collide(vodka,hand){
		var vodka_id = vodka.parent().attr("id");
		//如果该水滴已经滴进碗里后，就无需再做碰撞检测
		if(vodka_id in bowl){
			return false;
		}
		
		var hand_offset = hand.offset();
		var hand_w = hand.width() * 0.7;
		var vodka_offset = vodka.offset();
		
//		console.log(hand_offset,vodka_offset);
		
		if(
			//水滴的 left （ x 轴） 距离  如果大于 碗的 left(x轴) 证明 水滴在  碗的右侧
			vodka_offset.left > hand_offset.left && 
			//水滴的 left + 水滴的宽度 = 水滴的 right 值
			// 碗的 left + 碗的 宽度 = 碗的 right 值
			// 水滴的 right 小于 碗的 right 证明 水滴在碗的 左侧
			vodka_offset.left+ vodka_offset.width < hand_offset.left + hand_w){
				//水滴的 bottom 值
				var vodka_y =  vodka_offset.top + vodka_offset.height;
				// 碗的 top 值
				var hand_y = hand_offset.top;
				//判断 水滴是否越过 碗的 top 值
				if(vodka_y > hand_y){
					console.log("vodka_id : ",vodka_id);
					//记录水滴 滴进碗里
					bowl[vodka_id] = true;
					//隐藏该元素
					vodka.hide();
					// style.display = none
					// 元素上有 dispaly : none 时会导致所有 css动画失效
				}
			}
	}
	
	function main(){
		$game = $(".game");
		var rAFid;
		
		//清除更新频率
		function clearrAF(){
			if(window.cancelAnimationFrame){
				window.cancelAnimationFrame(rAFid);
			}else{
				clearTimeout(rAFid);
			}
			
			console.log(bowl);
		}
		
		//遮罩层点击事件
		$(".ready",$game).on("tap",function(){
			//消失遮罩层
			$game.addClass("on");
			game();
			
			var raf = function(){
				rAFid = requestAnimationFrame(function(){
					var $vodkas = $(".vodka",$game);
					$vodkas.each(function(i,dom){
						var $i = $("i",dom);
						if($i.length > 0){
							collide($i, $(".hand",$game));
						}
					});
					raf();
				});
			}
			raf();
			
		});
		
		//监听水瓶滴水动画完毕
		$("#drink",$game).on('webkitAnimationEnd', function(){
			//向页面添加一个水滴元素
			var offset = $("#drink").offset();
			var id = "vodka_" + parseInt(Math.random()*1000);
			$game.append('<div id="'+ id +'" class="vodka" style="left:'+offset.left+'px;"><i></i></div>');
			//去除水瓶滴水的动作，还原水瓶状态
			$("#drink").removeClass("move");
			
			if(number < 6){
				//一秒后再次滴水
				setTimeout(game,1000);
			}
			
			setTimeout(function(){
				//水瓶滴水动画完毕
				$("#"+id,$game).on('webkitAnimationEnd', function(e){
					//删除自身元素
					$(e.target).remove();
					
					if(number >=6 && $(".vodka",$game).length < 1){
						//清除定时器
						setTimeout(clearrAF,500);
					}
				});
			},0);
		});
		
	}
	
	return main;
});
