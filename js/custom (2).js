(function(jQuery) {
 "use strict";

jQuery(document).ready(function() {

	jQuery("#owl-demo").owlCarousel({
	autoPlay: 3000,
	items : 4,
	itemsDesktop : [1170,3],
	itemsDesktopSmall : [1170,3]
	});
	
	jQuery("#owl-demo2").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"fade"
	});
	
	jQuery("#owl-demo3").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"fadeUp"
	});
	
	jQuery("#owl-demo4").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"goDown"
	});
	
	jQuery("#owl-demo5").owlCarousel({
	autoPlay : 8000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"goDown"
	});
	
	jQuery("#owl-demo6").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"fadeUp"
	});
	
	jQuery("#owl-demo7").owlCarousel({
	items : 4,
	lazyLoad : true,
	navigation : true,
	pagination:true,
	});
	
	jQuery("#owl-demo8").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	singleItem : true,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	transitionStyle:"fade"
  	});

	jQuery("#owl-demo10").owlCarousel({
	autoPlay : 8000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"backSlide"
  	});
	
	jQuery("#owl-demo11").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"backSlide"
	});
	
	jQuery("#owl-demo12").owlCarousel({
	autoPlay : 18000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	});
	
	jQuery("#owl-demo13").owlCarousel({
	autoPlay : 18000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	});
	
	jQuery("#owl-demo14").owlCarousel({
	autoPlay : 5000,
	stopOnHover : true,
	navigation: false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"goDown"
	});
	
	jQuery("#owl-demo15").owlCarousel({
	autoPlay : 9000,
	stopOnHover : true,
	lazyLoad : true,
	pagination:true,
	singleItem : true,
	});
	
	jQuery("#owl-demo16").owlCarousel({
	autoPlay : 12000,
	stopOnHover : true,
	lazyLoad : true,
	pagination:true,
	singleItem : true,
	});
	
	jQuery("#owl-demo17").owlCarousel({
	items : 2,
	autoPlay : 9000,
	stopOnHover : true,
	lazyLoad : true,
	pagination:true,
	itemsDesktop : [1170,2],
	itemsDesktopSmall : [1170,2]
	});
	
	jQuery("#owl-demo18").owlCarousel({
	autoPlay : 9000,
	stopOnHover : true,
	navigation: true,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	pagination:false,
	transitionStyle:"backSlide"
  	});
	
	
  var time = 7; // time in seconds

  var jQueryprogressBar,
	  jQuerybar, 
	  jQueryelem, 
	  isPause, 
	  tick,
	  percentTime;

	//Init the carousel
	jQuery("#owl-demo9").owlCarousel({
	  slideSpeed : 500,
	  navigation: true,
	  paginationSpeed : 500,
	  singleItem : true,
	  afterInit : progressBar,
	  afterMove : moved,
	  startDragging : pauseOnDragging
	});

	//Init progressBar where elem is jQuery("#owl-demo")
	function progressBar(elem){
	  jQueryelem = elem;
	  //build progress bar elements
	  buildProgressBar();
	  //start counting
	  start();
	}

	//create div#progressBar and div#bar then prepend to jQuery("#owl-demo")
	function buildProgressBar(){
	  jQueryprogressBar = jQuery("<div>",{
		id:"progressBar"
	  });
	  jQuerybar = jQuery("<div>",{
		id:"bar"
	  });
	  jQueryprogressBar.append(jQuerybar).prependTo(jQueryelem);
	}

	function start() {
	  //reset timer
	  percentTime = 0;
	  isPause = false;
	  //run interval every 0.01 second
	  tick = setInterval(interval, 10);
	};

	function interval() {
	  if(isPause === false){
		percentTime += 1 / time;
		jQuerybar.css({
		   width: percentTime+"%"
		 });
		//if percentTime is equal or greater than 100
		if(percentTime >= 100){
		  //slide to next item 
		  jQueryelem.trigger('owl.next')
		}
	  }
	}

	//pause while dragging 
	function pauseOnDragging(){
	  isPause = true;
	}

	//moved callback
	function moved(){
	  //clear interval
	  clearTimeout(tick);
	  //start again
	  start();
	}

	
	
	var sync1 = jQuery("#sync1");
	var sync2 = jQuery("#sync2");
	
	sync1.owlCarousel({
	singleItem : true,
	slideSpeed : 1000,
	pagination:false,
	afterAction : syncPosition,
	responsiveRefreshRate : 200,
	});
	
	sync2.owlCarousel({
	items : 5,
	itemsDesktop      : [1170,5],
	itemsDesktopSmall     : [979,5],
	itemsTablet       : [768,3],
	itemsMobile       : [479,3],
	pagination:false,
	responsiveRefreshRate : 100,
	afterInit : function(el){
	  el.find(".owl-item").eq(0).addClass("synced");
	}
	});
	
	function syncPosition(el){
	var current = this.currentItem;
	jQuery("#sync2")
	  .find(".owl-item")
	  .removeClass("synced")
	  .eq(current)
	  .addClass("synced")
	if(jQuery("#sync2").data("owlCarousel") !== undefined){
	  center(current)
	}
	
	}
	
	jQuery("#sync2").on("click", ".owl-item", function(e){
	e.preventDefault();
	var number = jQuery(this).data("owlItem");
	sync1.trigger("owl.goTo",number);
	});
	
	function center(number){
	var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	
	var num = number;
	var found = false;
	for(var i in sync2visible){
	  if(num === sync2visible[i]){
		var found = true;
	  }
	}
	
	if(found===false){
	  if(num>sync2visible[sync2visible.length-1]){
		sync2.trigger("owl.goTo", num - sync2visible.length+2)
	  }else{
		if(num - 1 === -1){
		  num = 0;
		}
		sync2.trigger("owl.goTo", num);
	  }
	} else if(num === sync2visible[sync2visible.length-1]){
	  sync2.trigger("owl.goTo", sync2visible[1])
	} else if(num === sync2visible[0]){
	  sync2.trigger("owl.goTo", num-1)
	}
	}

	
		
});	
	
})(jQuery);