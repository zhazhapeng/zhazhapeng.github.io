var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
    
//  animate初始化
    on:{
	      init: function(){
	        swiperAnimateCache(this); //隐藏动画元素 
	        swiperAnimate(this); //初始化完成开始动画
	      }, 
	      slideChangeTransitionEnd: function(){ 
	        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
	        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
	      } 
	    }
    });
    var m=1;
	$('#music').on('touchstart',function(){
		if(m==0){
			$('#music').css({
			'animation-play-state':'paused',
			})
			//暂停播放音乐
			$('#music1')[0].pause();
			m=1;
		}else{
			$('#music').css({
			'animation-play-state':'running',
			})
//			继续播放音乐
			$('#music1')[0].play();
			m=0;
		}
	})
	
//	一定要用touchend
		document.ontouchend=function(){
		$('#music1')[0].play();
		$('#music').css({
			'animation-play-state':'running',
			})
		m=0;
	}