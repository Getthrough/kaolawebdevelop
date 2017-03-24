	
	$(function(){
		//顶部导航栏开始-----------------------
		//手机考拉鼠标移入移出事件
		$('#top_wrap_lfet2 .ph_app').hover(function(){
			$('#ph_ewm').css('display','block');
			$('#sjx').css('display','block');
		},function(){
			$('#ph_ewm').css('display','none');
			$('#sjx').css('display','none');
		})
//		每日签到开始
		$('#top_wrap .qd').click(function(){
			$('#sign_on').css('display','block');
			$('#sign_box').addClass('hd');
		})
//		每日签到结束
		
		//新浪微博二维码鼠标移入移出事件
		$('#dm3 .sa_ewm').hover(function(){
			$('#dm3 .sina').css('display','block');
		},function(){
			$('#dm3 .sina').css('display','none');
		})
		//微信二维码鼠标移入移出事件
		$('#dm3 .wx_ewm').hover(function(){
			$('#dm3 .wechat').css('display','block');
		},function(){
			$('#dm3 .wechat').css('display','none');
		})
		//易信二维码鼠标移入移出事件
		$('#dm3 .yx_ewm').hover(function(){
			$('#dm3 .yixin').css('display','block');
		},function(){
			$('#dm3 .yixin').css('display','none');
		})
		//下拉菜单鼠标移入移出事件
	//顶部导航栏结束
	
//	顶部搜索区域开始---------------
				
//	顶部搜索区域结束--------------

//fix的搜索区域开始
		$(window).scroll(function(){
			var ht = $(document).scrollTop();
			
			if(ht>30){
				$('#doc_head').css('display','block');
			}else if (ht<30) {
				$('#doc_head').css('display','none');
			}
		})

//fix的搜索区域结束

//	分类导航栏开始------------------
		$('#show_items li').hover(function(){
			$('#show_items .show_menu').eq($(this).index()).css('display','block');
		},function(){
			$('#show_items .show_menu').eq($(this).index()).css('display','none');
		})
//	分类导航栏结束	-----------------

//	轮播图开始----------------------------------------------

//	图片自动轮播
	    var curIndex = 0;  //当前index
	    function changeTo(){ 
	    	if(curIndex <  $("#show_imgs_box img").length-1){ 
	            curIndex ++; 
	        }else{ 
	            curIndex = 0;
	        }
	        $("#show_imgs_box").find("img").removeClass("imgOn").hide().eq(curIndex).fadeIn().addClass("imgOn");
	        $("#show_dot li").eq(curIndex).css({'background':'red'}).siblings('li').css({'background':'#333'});
	    }
	          // 定时器自动变换2.5秒每次
	    var autoChange = setInterval(changeTo,2500);
	    
//		数字图标鼠标移入移出事件
		$("#show_dot li").hover(function(){
			var cur_num = $(this).index();
			clearInterval(autoChange);
			$("#show_imgs_box").find("img").removeClass("imgOn").hide().eq(cur_num).fadeIn().addClass("imgOn");
	        $("#show_dot li").eq(cur_num).css({'background':'red'}).siblings('li').css({'background':'#333'});
		},function(){
			autoChange = setInterval(changeTo,2500);
		})
		
//		向左向右图标鼠标移入移出的显隐
		$('#show_midbox').hover(function(){
			$('#show_left').css('display','block');
			$('#show_right').css('display','block');
		},function(){
			$('#show_left').css('display','none');
			$('#show_right').css('display','none');
		})
		//向左向右功能实现
		var st;
		$('#show_left').click(function(){
			clearInterval(autoChange);
			clearTimeout(st);
			if(curIndex == 0){ 
	            curIndex=$("#show_imgs_box img").length; 
//	            alert(curIndex);
	        }
			curIndex--;
			$("#show_imgs_box").find("img").removeClass("imgOn").hide().eq(curIndex).fadeIn().addClass("imgOn");
			$("#show_dot li").eq(curIndex).css({'background':'red'}).siblings('li').css({'background':'#333'});
			st = setTimeout(function(){
				autoChange = setInterval(changeTo,2500);
			},3000)
		})
		$('#show_right').click(function(){
			clearInterval(autoChange);
			clearTimeout(st);
			if(curIndex == $("#show_imgs_box img").length-1){ 
	            curIndex=0; 
//	            alert(curIndex);
	        }
			curIndex++;
			$("#show_imgs_box").find("img").removeClass("imgOn").hide().eq(curIndex).fadeIn().addClass("imgOn");
			$("#show_dot li").eq(curIndex).css({'background':'red'}).siblings('li').css({'background':'#333'});
			st = setTimeout(function(){
				autoChange = setInterval(changeTo,2500);
			},3000)
		})

//	轮播图结束----------------------------------------------
	})
