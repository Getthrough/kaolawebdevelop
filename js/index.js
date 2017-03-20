	
	$(function(){
		//顶部导航栏开始
		//手机考拉鼠标移入事件
		$('#top_wrap_lfet2 .ph_app').hover(function(){
			
		},function(){
			
		})
		//个人中心鼠标移入移出事件
		var msg;
		
		$('#top_wrap ul .pc').hover(function(){
			msg = $(this).index()-2;
			msg2 = msg;
			msg = (msg==4?3:msg)
			$('#top_wrap ul .drop_menu').eq(msg2).css('display','block');
			$('#top_wrap ul .pc').eq(msg).addClass('brd').siblings().css('transform','none');
			$('#top_wrap ul .pc a').css('border-left','1px rgb(255, 255, 255) solid');
			
		},function(){
			$('#top_wrap ul .drop_menu').eq(msg2).css('display','none');
			$('#top_wrap ul .pc').removeClass('brd');
			$('#top_wrap ul .pc a').css('border-left','1px rgb(204, 204, 204) solid');
		})
		//下拉菜单鼠标移入移出事件
		
	//顶部导航栏结束
	})
