//fixed-nav
$(document).on("scroll",function(){
	if($(document).scrollTop()>20){ 
		$("header").removeClass("large").addClass("small");
	}
	else{
		$("header").removeClass("small").addClass("large");
	}
});


//search
 $(function(){
     $(".attr-nav").each(function(){  
                $(".search", this).on("click", function(e){
                    e.preventDefault();
                    $(".top-search").slideToggle();
                });
            });
            $(".input-group-addon.close-search").on("click", function(){
                $(".top-search").slideUp();
            })
  })


//back-top
$(function(){
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		if(_top>300){
			$('.back_top').fadeIn(600);
		}else{
			$('.back_top').fadeOut(600);
		}
	});
	$(".back_top").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
});

// fixed service
$(function() {
	$(".online_section").hover(function() {
		$(".online_section").css("right", "0");
		$(".online_section .online_code").css('height', '160px');
	}, function() {
		$(".online_section").css("right", "-220px");
		$(".online_section .online_code").css('height', '40px');
	});
});

$(function() {
	$(".tcon").hover(function() {
		$(this).children(".tcon a").css("left", "34px");
	}, function() {
		$(this).children(".tcon a").css("left", "-200px");
	});
});


//fixed inquiry
$(document).ready(function(){

    $("#floatShow").bind("click",function(){
	
        $("#onlineService").animate({
            height:"show", 
            opacity:"show"
        }, "normal" ,function(){
            $("#onlineService").show();
        });
		
        $("#floatShow").attr("style","display:none");
        $("#floatHide").attr("style","display:block");
		
        return false;
    });
	
    $("#floatHide").bind("click",function(){
	
        $("#onlineService").animate({
            height:"hide", 
            opacity:"hide"
        }, "normal" ,function(){
            $("#onlineService").hide();
        });
		
        $("#floatShow").attr("style","display:block");
        $("#floatHide").attr("style","display:none");
		
        return false;
    });
  
});


$(function(){
	$('.autoplay1').slick({
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover:true,
		dots:true,
		responsive: [
		{
		  breakpoint:480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		},
		
	]
	})
})


$(function(){
	$('.autoplay2m').slick({
		infinite: true,
		speed: 1500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover:true,
		dots:true,
		responsive: [
		{
		  breakpoint:480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		},
		
	]
	})
})

$(function(){
	$('.autoplay3').slick({
		infinite: true,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover:false,
		dots:true,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    slidesToShow:2,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed:3000,
	        infinite: true,
		    dots:true,
			}
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		}
	]
	})
})

$(function(){
	$('.autoplay4').slick({
		infinite: true,
		speed: 1500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover:false,
		dots:true,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
		    slidesToShow:3,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed:3000,
	        infinite: true,
		    dots:true,
			}
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		},
		{
		  breakpoint: 400,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		}
	]
	})
})

$(function(){
	$('.autoplay5').slick({
		infinite: true,
		speed: 1500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed:3000,
		pauseOnHover:true,
		dots:true,
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
		    slidesToShow:4,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed:3000,
	        infinite: true,
		    dots:true,
			}
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed:3000,
			dots:true,
		  }
		}
	]
	})
})
$(function(){
	$('.center05').slick({
	  centerMode: true,
	  centerPadding: '0',
	  slidesToShow: 5,
	  responsive: [
		{
		  breakpoint: 992,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint:400,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '20px',
			slidesToShow:1
		  }
		}
	  ]
	})
})


//faq
var action = 'click';
var speed = "500";

//Document.Ready
$(document).ready(function(){
  //Question handler
$('li.question').on(action, function(){
  //gets next element
  //opens .a of selected question
$(this).next().slideToggle(speed)
    //selects all other answers and slides up any open answer
    .siblings('li.answer').slideUp();
  
  //Grab img from clicked question
var img = $(this).children('div.column');
  //Remove Rotate class from all images except the active
  $('div.column').not(img).removeClass('rotate');
  //toggle rotate class
  img.toggleClass('rotate');

});//End on click
});//End Ready


