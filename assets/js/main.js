var steen = steen || {};
$(function() {
  try {
    steen.scene = {
      init:function() {
        steen.scene.start();
      },
      start:function() {
        var num = $('.main-banner__slider .slide').length;
        var now = Math.ceil(Math.random()*num);
        var scene = $('.main-banner__slider').slick({
          initialSlide: now - 1,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 5000,
          dots: true,
          arrows: false,
          infinite: true,
          speed: 1500,
          cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
        });

        $('.main-banner__slider').on('setPosition', function(slick){
          setTimeout(function() {
            $('.main-banner__slider .slide').eq(now).addClass('active');
          }, 300)
        });

        scene.slick('setPosition');

        $('.main-banner__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          now = nextSlide + 1;
        });

        $('.main-banner__slider').on('afterChange', function(event, slick, currentSlide){
          for (var i=0; i<=num; i++) {
            if(i != currentSlide - 1) {
              $('.main-banner__slider .slide').eq(i).removeClass('active');
            }
          }
        });
      }
    }

    // steen.concept = {
    //   init:function() {
    //     steen.concept.random();
    //     steen.concept.start();
    //   },
    //   random:function() {
    //     $('.sec-facilities__slider > .slider-item').sort(function() {
    //       return Math.round(Math.random()) - 0.5;
    //     }).detach().appendTo($('.sec-facilities__slider'));
    //   },
    //   start:function() {
    //     var concept = $('.sec-facilities__slider').slick({
    //       centerMode: true,
    //       centerPadding: '260px',
    //       slidesToShow: 3,
    //       arrows: true,
    //       infinite: true,
    //       cssEase: 'linear',
    //       autoplaySpeed: 5000,
    //       autoplay: true,
    //       loop: false,
    //       responsive: [
    //         {
    //           breakpoint: 1601,
    //           settings: {
    //             centerMode: true,
    //             centerPadding: '160px',
    //             slidesToShow: 3
    //           }
    //         },
    //         {
    //           breakpoint: 1336,
    //           settings: {
    //             centerMode: true,
    //             centerPadding: '100px',
    //             slidesToShow: 3
    //           }
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             centerMode: false,
    //             slidesToShow: 1
    //           }
    //         },
    //       ]
    //     });
    //   }
    // }

  } catch(e) {};
});

$(window).on('load', function() {
  $('.navbar-nav').addClass('load-end');
  setTimeout(function(){ 
    $('.navbar-nav.load-end').addClass('show-menu')
  }, 2500);

  setTimeout(function(){ 
    $('.main-banner .main-copy').addClass('show-main__copy')
  }, 1000);
})

var navPos = $('.navbar').offset().top;
$(window).on('load scroll',function() {
  var scroll = $(window).scrollTop();
  var footerPos = $('footer').offset().top;
  var hidePos = scroll + $('.navbar').height() + 100;
  if( navPos >= 18 ) {
    $('.navbar').addClass('nav-fixed');
  } else {
    $('.navbar').removeClass('nav-fixed');
  }
  if( scroll >= 18 ) {
    $('.navbar').addClass('nav-fixed');
  } else {
    $('.navbar').removeClass('nav-fixed');
  }
  if( $('body').hasClass('home') ) {
    if( hidePos >= footerPos ) {
      $('.navbar').hide();
    } else {
      $('.navbar').show();
    }
  }
});

$(document).ready(function(){

  /*----header----*/
  $('.navbar .navbar-toggler').click(function() {
    $('header nav.navbar').toggleClass('active');
    $('body').toggleClass('hidden');
  });

  /*----Back to Top----*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.pagetop').addClass('active');
		} else {
			$('.pagetop').removeClass('active');
		}
	});

	$(".pagetop a").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

  // Custom scroll
  $(".custom-scroll").mCustomScrollbar();

  $(window).on('load resize', function() {
    var maxHeight = -1;

    $('.sec-service .service-image').each(function() {
      maxHeight = maxHeight > $(this).height() ? maxHeight :     $(this).height();
    });

    $('.sec-service .service-image').each(function() {
      $(this).height(maxHeight);
    });
  });

  var video = $('.information-detail__content .video').find('video');
  video.each(function() {
    $('.information-detail__content .btn-play').on('click', function() {
      $(this).parents('.information-detail__content .video').addClass('is-play-video');
      var showVideo = $(this).parents('.information-detail__content').find('video');
      if (showVideo.get(0).paused) {
        showVideo.get(0).play();
        showVideo.prop("controls",true); 
      } else {
        showVideo.get(0).pause();
      }
    })
  });

  steen.scene.init();
  // steen.concept.init();

});

var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
  }
);
wow.init();
