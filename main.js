 /**
 *
 * American School of Bombay - default
 * @link http://bombay.redesign.finalsite.com
 * Site Template : newclientcustom
 * Built By: Ryan Reese
 * Project Manager: Michael Hartzler
 * Designer: Akua Duah
 * ==== Git Info ====
 * Branch Name: clients/bombay
 * Build version: 1.0.0
 * Git Tag: Composer-Build-2.0-428-g07963dd125
 * Last build by: Jonathan Brooks
 *
 **/

// Build package info 
window.buildinfo = {
  buildname : 'fs-composer-build',
  ver : '1.0.0',
  template : 'newclientcustom'
};

/*!
 * global_vars is a file particular to your site
 * it contains base functions that are likely but not always used
**/
jQuery(function($) {
  window.initMap = window.initMap || {};
  var initMap;

  var $html = $('html'),
    $body = $('body'),
    $touch = $('html.touch'),
    $noTouch = $('html.no-touch'),
    $bodyDraftMode = $('body.fsDraftMode'),
    $bodyNotComposeMode = $('body:not(.fsComposeMode)'),
    $bodyNotDraftMode = $('body:not(.fsDraftMode)'),
    $drawer = $('.fsMenu'),
    $drawerRibbon = $('.drawer-ribbon'),
    $fsPageWrapper = $('#fsPageWrapper'),
    $fsPageBodyWrapper = $('#fsPageBodyWrapper'),
    $fsPageBody = $('#fsPageBody'),
    $fsHeader = $('#fsHeader'),
    $fsHeaderBanner = $('#fsHeader .fsBanner'),
    $fsFooter = $('#fsFooter'),
    $fsFooterBanner = $('#fsFooter .fsBanner'),
    $fsPageContent = $('#fsPageContent'),
    $fsBannerLeft = $('#fsBannerLeft'),
    $fsBannerRight = $('#fsBannerRight'),
    $fsLayout = $('#fsLayout'),
    $fsPoweredByFinalsite = $('#fsPoweredByFinalsite'),
    $navMain = $('.nav-main'),
    $navSub = $('.nav-sub'),
    $navSubTitle = $('.nav-sub > header > .fsElementTitle'),
    $navTier = $('.nav-tier'),
    $fsSiteSearch = $('.site-search'),
    $fsSiteSearchContainer = $('.search-container'),
    $fsSearchTrigger = $('.search-trigger'),
    $mainSlideshow = $('.home-slider'),
    $home = $('.home'),
    $mobileBP = 600;

  $.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
  })();

  // ================================
  // Remove Youtube Title
  // ================================
  $(".fsElement.fsYoutube.no-title").each(function() {
    $(this).find("iframe").attr("src",$(this).find("iframe").attr("src")+"&showinfo=0");
  });
  // ================================
  // Tab Treatment
  // ================================
  if($bodyNotComposeMode.length) {
  $('.box').each(function(i) {
    $(this).mediaSlider({
      mediaTemplate:[
        '<article class="fsCard" style="background-image: url({imgSrc});">',
          '<div class="pre-hover">{captionTitle}</div>',
          '<div class="post-hover">',
            '<div class="box-title">{captionTitle}</div>',
            '<div class="box-desc">{captionDesc}</div>',
          '</div>',
        '</article>'
      ],
      callback: function() {
        panelTreatment(i);
      }
    });
  });
  $(".tab-treatment section.fsElement.fsPanel").eq(0).addClass("oneActive");
  function movePanels() {
    $(".tab-treatment section.fsElement.fsPanel:nth-child(1n+3)").each(function() {
      $(this).find(".fsCard").clone().appendTo($(".tab-treatment").find("section.fsPanel.fsElement").eq(0).find(".box .fsMediaCustomPlayer"));
    });
  }
  function panelTreatment(z) {
    $(".tab-treatment section.fsElement.fsPanel").each(function() {
      var indexClass;
      var _this = $(this);
      if($(this).index() === 1) {
        indexClass="one";
      }
      else if($(this).index() === 2) {
        indexClass="two";
      }
      else if($(this).index() === 3) {
        indexClass="three";
      }
      else if($(this).index() === 4) {
        indexClass="four";
      }
      else if($(this).index() === 5) {
        indexClass="five";
      }
      else if($(this).index() === 6) {
        indexClass="six";
      }
      else if($(this).index() === 7) {
        indexClass="seven";
      }
      else if($(this).index() === 8) {
        indexClass="eight";
      }
      else if($(this).index() === 9) {
        indexClass="nine";
      }
      _this.find(".fsCard").each(function() {
        if(indexClass === "one") {
          $(this).addClass("one");
        }
        else {
          $(this).addClass(indexClass);
        }
      });
    });
    if((z + 1) === $(".tab-treatment section.fsElement.fsPanel").length) {
      setTimeout(function() {
        movePanels();
      },200);
    }
  }
  var firstPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html();
  var firstPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html();
  var secondPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(3) > .fsElementContent > .fsElement.fsContent").html();
  var secondPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(3) > .fsElementContent > .fsElement.fsLayout").html();
  var thirdPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(4) > .fsElementContent > .fsElement.fsContent").html();
  var thirdPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(4) > .fsElementContent > .fsElement.fsLayout").html();
  var fourthPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(5) > .fsElementContent > .fsElement.fsContent").html();
  var fourthPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(5) > .fsElementContent > .fsElement.fsLayout").html();
  var fifthPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(6) > .fsElementContent > .fsElement.fsContent").html();
  var fifthPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(6) > .fsElementContent > .fsElement.fsLayout").html();
  var sixthPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(7) > .fsElementContent > .fsElement.fsContent").html();
  var sixthPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(7) > .fsElementContent > .fsElement.fsLayout").html();
  var seventhPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(8) > .fsElementContent > .fsElement.fsContent").html();
  var seventhPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(8) > .fsElementContent > .fsElement.fsLayout").html();
  var eighthPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(9) > .fsElementContent > .fsElement.fsContent").html();
  var eighthPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(9) > .fsElementContent > .fsElement.fsLayout").html();
  var ninthPanelHTML = textHTML= $(".tab-treatment").find("section.fsPanel:nth-child(10) > .fsElementContent > .fsElement.fsContent").html();
  var ninthPanelLayout = textLayout= $(".tab-treatment").find("section.fsPanel:nth-child(10) > .fsElementContent > .fsElement.fsLayout").html();
  $(".tab-treatment .fsTabsNav li a").on("click",function() {
    var parentIndex = $(this).parent().index();
    if(parentIndex === 0) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(firstPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(firstPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("twoActive").removeClass("threeActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sixActive").removeClass("sevenActive").removeClass("eightActive").removeClass("nineActive").addClass("oneActive");
    }
    else if(parentIndex === 1) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(secondPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(secondPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("threeActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sixActive").removeClass("sevenActive").removeClass("eightActive").removeClass("nineActive").addClass("twoActive");
    }
    else if(parentIndex === 2) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(thirdPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(thirdPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sixActive").removeClass("sevenActive").removeClass("eightActive").removeClass("nineActive").addClass("threeActive");
    }
    else if(parentIndex === 3) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(fourthPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(fourthPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("threeActive").removeClass("fiveActive").removeClass("sixActive").removeClass("sevenActive").removeClass("eightActive").removeClass("nineActive").addClass("fourActive");
    }
    else if(parentIndex === 4) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(fifthPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(fifthPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("threeActive").removeClass("fourActive").removeClass("sixActive").removeClass("sevenActive").removeClass("eightActive").removeClass("nineActive").addClass("fiveActive");
    }
    else if(parentIndex === 5) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(sixthPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(sixthPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("threeActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sevenActive").removeClass("eightActive").removeClass("nineActive").addClass("sixActive");
    }
    else if(parentIndex === 6) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(seventhPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(seventhPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("threeActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sixActive").removeClass("eightActive").removeClass("nineActive").addClass("sevenActive");
    }
    else if(parentIndex === 7) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(eighthPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(eighthPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("threeActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sixActive").removeClass("sevenActive").removeClass("nineActive").addClass("eightActive");
    }
    else if(parentIndex === 8) {
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsContent").html(ninthPanelHTML);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2) > .fsElementContent > .fsElement.fsLayout").html(ninthPanelLayout);
      $(this).parents(".tab-treatment").find("section.fsPanel:nth-child(2)").removeClass("oneActive").removeClass("twoActive").removeClass("threeActive").removeClass("fourActive").removeClass("fiveActive").removeClass("sixActive").removeClass("sevenActive").removeClass("eightActive").addClass("nineActive");
    }
  });
}

  // ================================
  // 2/3rd Slideshow
  // ================================
  $(window).on("scroll",function() {
    $windowPosition = $(window).scrollTop();
    $offset = $fsHeader.find(".site-info-container").height();
    if($windowPosition >= $offset) {
      $(".site-info-container").addClass("fixed");
    }
    else {
      $(".site-info-container").removeClass("fixed");
    }
  });
  if($(".twoThirdSlider").length) {
    var $heroSlider = $(".twoThirdSlider");
    $heroSlider.mediaSlider({
      mediaTemplate:[
        '<div class="universal-slide">',
          '<article style="background-image: url({imgSrc});">',
            '<img src="{imgSrc}" class="bpa-img" />',
          '</article>',
          '<div class="caption-wrapper">',
            '<div class="caption-title">{captionTitle}</div>',
            '<div class="caption-desc">{captionDesc}</div>',
          '</div>',
        '</div>'
      ],
      callback: function() {
      }
    });
  }

  // ================================
  // 5050 Slideshow Treatment
  // ================================
  if($(".fiftyfiftySlider").length) {
    var $bpaSlider = $(".fiftyfiftySlider");
    $bpaSlider.mediaSlider({
      mediaTemplate:[
        '<div class="bpa-slide">',
          '<div class="caption-wrapper">',
            '<div class="caption-title">{captionTitle}</div>',
            '<div class="caption-desc">{captionDesc}</div>',
          '</div>',
          '<article style="background-image: url({imgSrc});">',
            '<img src="{imgSrc}" class="bpa-img" />',
          '</article>',
        '</div>'
      ],
      callback: function() {
        $bpaSlider.find('.fsMediaCustomPlayer').slick({
          fade:true,
          dots:true,
          adaptiveHeight:true
        });
      }
    });
  }

  // ================================
  // Enhancements
  // ================================
  if($("body:not(.home) .fs_style_17").length) {
    $(".fs_style_17").each(function() {
      $(this).parents(".fsElement.fsContent").removeClass("action-buttons").addClass("action-buttons");//make sure only one class is on
    });
    $(".action-buttons").each(function() {
      var _self=$(this);
      var howMany = _self.find(".fs_style_17").length;
      if(howMany === 1) {
        _self.addClass("oneButton");
      }
      else if(howMany === 2) {
        _self.addClass("twoButtons");
      }
      else if(howMany === 3) {
        _self.addClass("threeButtons");
      }
      $(this).find(">.fsElementContent").clone().prependTo($(this)).removeClass("fsElementContent").addClass("clonedSection");
      $(this).find(".clonedSection").addClass("one").wrapInner('<div class="inner"></div>');
      $(this).find(".clonedSection a:first-child").addClass("active");
      $(this).find(">.fsElementContent a.fs_style_17").on("mouseenter",function() {
        var classIndex;
        if($(this).index() === 0) {
          classIndex = "one";
        }
        else if($(this).index() === 1) {
          classIndex = "two";
        }
        else if($(this).index() === 2) {
          classIndex = "three";
        }
        _self.find(".clonedSection a.fs_style_17").removeClass("active").eq($(this).index()).addClass("active");
        _self.find(".clonedSection").removeClass("one").removeClass("two").removeClass("three").addClass(classIndex);
        setTimeout(function() {
          _self.find(".clonedSection").addClass("finished");
        },400);
      });
    });
  }
  if($(".landing-slider").length) {
    $('.landing-slider').mediaSlider({
      mediaTemplate:[
        '<article class="universal-slide" style="background-image: url({imgSrc});">',
          '<img src="{imgSrc}" class="universal-img" />',
        '</article>'
      ], // html markup
      callback: function() {
        $('.landing-slider').find('.fsMediaCustomPlayer').slick();
      }
    });
  }
  $("body:not(.fsComposeMode) .custom-quote-slider >.fsElementContent").slick({
    dots:true,
    arrows:false
  });
  // Commented out in case it needs to be recreated in another element.
  // getFacebook('218037409767', '.fb-slider > .fsElementContent' , 3);
  // $(".fb-slider > .fsElementContent").each(function() {
  //   var checkFB = setInterval(function() {
  //     if($(".fb-slider article").length === 3) {
  //       $(".fb-slider .gotopage").prependTo($(".fb-slider"));
  //       $(".fb-slider article .entry-content").dotdotdot({
  //         watch:"window"
  //       });
  //       $(".fb-slider > .fsElementContent").slick({
  //         dots:true,
  //         arrows:false,
  //         fade:true
  //       });
  //       clearInterval(checkFB);
  //     }
  //   },200);
  // });

  // ================================
  // News Element (List/Slideshow)
  // ================================
  //news slideshows
  $(".fsNews.fsSlideshow article").each(function() {
    $(this).wrapInner('<div class="article-inner"><div class="centerArt"></div></div>');
    $(this).find(".fsThumbnail").prependTo($(this).find('.article-inner'));
    var thumbnailSRC = $(this).find(".fsThumbnail img").attr("src");
    console.log(thumbnailSRC);
    $(this).find(".fsThumbnail").css("background-image","url("+thumbnailSRC+")");
  });
  var newsLength = $(".fsNews.fsSlideshow").length;
  for(var z = 0; z < newsLength; z++) {
    $(".fsNews.fsSlideshow:eq("+z+") .fsElementSlideshow").slick('slickSetOption', 'appendDots', ".fsNews.fsSlideshow:eq("+z+") article .centerArt", true);
    $(".fsNews.fsSlideshow:eq("+z+") .fsElementSlideshow").slick('slickSetOption', 'adaptiveHeight', true, true);
  }

  var setFirstSlideActiveDot = setInterval(function() {
    if($(".fsNews.fsSlideshow .fsElementSlideshow article.slick-current .fsPager li:first-child").length) {
      $(".fsNews.fsSlideshow .fsElementSlideshow article .fsPager li:first-child").addClass("slick-active");
      clearInterval(setFirstSlideActiveDot);
    }
  },200);
  $(".fsNews.fsSlideshow .fsElementSlideshow").on('afterChange', function(event, slick, currentSlide){
    $(".fsNews.fsSlideshow .fsElementSlideshow").find(".slick-slide.slick-active .fsPager li:nth-child("+(currentSlide)+")").removeClass("slick-active");
    $(".fsNews.fsSlideshow .fsElementSlideshow").find(".slick-slide.slick-active .fsPager li:nth-child("+(currentSlide+1)+")").addClass("slick-active");
  });
  //news list
  // $(".fsNews.fsList .fsListItems").each(function() {
  //   $(this).find("article").wrapInner('<div class="article-inner"><div class="centerArt"></div></div>');
  //   $(this).find("article").each(function() {
  //     $(this).find(".fsThumbnail").prependTo($(this).find('.article-inner'));
  //   });
    // $(this).slick({
    //   dots:true,
    //   arrows:false,
    //   slidesToScroll:1,
    //   slidesToShow:1,
    //   appendDots:$(this).find("article .centerArt")
    // });
    // $(this).on('afterChange', function(event, slick, currentSlide){
    //   $(this).find(".slick-slide.slick-active .slick-dots li:nth-child("+(currentSlide+1)+")").addClass("slick-active");
    // });
  // });
  //for whenever elements are saved
  // FS.events.onElementUpdated('News', function($element) {
  //   function slickNewsList($eleToSlick) {
  //     $eleToSlick.find("article").wrapInner('<div class="article-inner"><div class="centerArt"></div></div>');
  //     $eleToSlick.find("article").each(function() {
  //       $(this).find(".fsThumbnail").prependTo($(this).find('.article-inner'));
  //     });
  //     $eleToSlick.find(".fsListItems").slick({
  //       dots:true,
  //       arrows:false,
  //       appendDots:$eleToSlick.find("article .centerArt")
  //     });
  //     $eleToSlick.on('afterChange', function(event, slick, currentSlide){
  //       $eleToSlick.find(".slick-slide.slick-active .slick-dots li:nth-child("+(currentSlide+1)+")").addClass("slick-active");
  //     });
  //   }
  //   var classList = $element[0].className.split(" ");
  //   if(classList[1] == "fsNews" &&  classList[2] == "fsList") {
  //     slickNewsList($element);
  //   }
  // });

  function customImageSliders(el) {
    $(el).mediaSlider({
      mediaTemplate:[
        '<article class="universal-slide" style="background-image: url({imgSrc});">',
          '<img src="{imgSrc}" class="universal-img" />',
        '</article>'
      ], // html markup
      callback: function() {
        $(el).find('.fsMediaCustomPlayer').on('init', function(event, slick){
            $(el).parents(".fsSharedContainer").css("background-image",$(el).find(".slick-slide.slick-active").css("background-image"));
        });
        $(el).find('.fsMediaCustomPlayer').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,
          arrows:false,
          fade:true,
          autoplay:false
        });
        $(el).find('.fsMediaCustomPlayer').on('afterChange', function (event, slick, currentSlide, nextSlide) {
          $(el).parents(".fsSharedContainer").css("background-image",$(el).find(".slick-slide.slick-active").css("background-image"));
        });
        $(window).on("load resize scroll", function() {
          var backgroundPosition = $(el).parents(".fsSharedContainer").css("background-position");
          $(el).find('.slick-slide').css("background-position",backgroundPosition);
        });
      }
    });
  }
  function scrollingEffects() {
    $(".fsPageLayout > .fsDiv").fullpage({
      "scrollBar":true,
      "navigation":true,
      "showActiveTooltip":true,
      "easingcss3":"ease-in-out",
      "recordHistory":false,
      scrollingSpeed: 1200,
      navigationTooltips: ['Home', 'Remarkable Educators', 'Mumbai & The World', 'Learning With Intent', 'Welcome Home', 'Contact Us'],
      afterRender: function(){
        $('<a href="#" class="nextSection">Next</a>').appendTo($("#fp-nav"));
        $('<span class="overlayed-circle"></span').appendTo($("#fp-nav"));
        $(".fsPageLayout > .fsDiv > .fsElement").attr("data-stellar-background-ratio","0.5");
        $.stellar({
          responsive:true,
          positionProperty:"transform"
        });
      },
      onLeave: function(index, nextIndex, direction){
        $(".full-screen-slider").addClass("hide");
        $("#fp-nav .overlayed-circle").attr("class","overlayed-circle moving slide"+nextIndex);
        var nextSection = $(".fsPageLayout .section").eq(nextIndex - 1).find(".full-screen-slider .fsMediaCustomPlayer");
        var currentSection = $(".fsPageLayout .section").eq(index - 1).find(".full-screen-slider .fsMediaCustomPlayer");
        //reset current sections slide to initial slide when you leave
        currentSection.slick('slickSetOption', 'autoplay', false).slick("slickPause");
        setTimeout(function() {
          currentSection.slick("slickGoTo", 0);
        },1000);
        $(".fsPageLayout .section").eq(index - 1).removeClass("changing");
        $(".fsPageLayout .section").eq(nextIndex - 1).addClass("changing");

        if($(".fsPageLayout .section").eq(nextIndex - 1)[0].classList[2] === "bombay-world") {
          $(".bombay-world .quote-slider > .fsElementContent").slick("slickGoTo", 0);
          setTimeout(function() {
            $(".bombay-world .quote-slider > .fsElementContent").slick('slickSetOption', 'autoplaySpeed', "7500");
            $(".bombay-world .quote-slider > .fsElementContent").slick('slickSetOption', 'autoplay', true).slick("slickPlay");
            $(".bombay-world .quote-slider > .fsElementContent").slick("slickGoTo", 0);
          },2300);
        }
        else if($(".fsPageLayout .section").eq(nextIndex - 1)[0].classList[2] === "learning-intent") {
          $(".learning-intent .quote-slider > .fsElementContent").slick("slickGoTo", 0);
          setTimeout(function() {
            $(".learning-intent .quote-slider > .fsElementContent").slick('slickSetOption', 'autoplaySpeed', "7500");
            $(".learning-intent .quote-slider > .fsElementContent").slick('slickSetOption', 'autoplay', true).slick("slickPlay");
            $(".learning-intent .quote-slider > .fsElementContent").slick("slickGoTo", 0);
          },2300);
        }
        else if($(".fsPageLayout .section").eq(nextIndex - 1)[0].classList[2] === "remarkable-educators") {
          nextSection.slick("slickGoTo", 0);
          setTimeout(function() {
            nextSection.slick('slickSetOption', 'autoplaySpeed', "7500");
            nextSection.slick('slickSetOption', 'autoplay', true).slick("slickPlay");
            nextSection.slick("slickGoTo", 0);
          },3500);
        }
        else if($(".fsPageLayout .section").eq(nextIndex - 1)[0].classList[2] === "welcome-home") {
          nextSection.slick("slickGoTo", 0);
          setTimeout(function() {
            nextSection.slick('slickSetOption', 'autoplaySpeed', "7500");
            nextSection.slick('slickSetOption', 'autoplay', true).slick("slickPlay");
            nextSection.slick("slickGoTo", 0);
          },2200);
        }
        else if($(".fsPageLayout .section").eq(nextIndex - 1)[0].classList[2] === "dream-video") {
          nextSection.slick("slickGoTo", 0);
          setTimeout(function() {
            nextSection.slick('slickSetOption', 'autoplaySpeed', "7500");
            nextSection.slick('slickSetOption', 'autoplay', true).slick("slickPlay");
            nextSection.slick("slickGoTo", 0);
          },3600);
        }
      },
      afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
        $(".full-screen-slider").removeClass("hide");
        setTimeout(function() {
          $("#fp-nav .overlayed-circle").removeClass("moving");
        },500);
        if(index === $('.fsPageLayout > .fsDiv .section').length){
          $("#fp-nav .nextSection").addClass("lastSlide");
        }
        else {
          $("#fp-nav .nextSection").removeClass("lastSlide");
        }
      }
    });
    $('#fp-nav .nextSection').click(function(e){
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
    });
  }
  function DLS() {
    customImageSliders(".dream-video .full-screen-slider");
    var arrayOfTitleText = $(".dream-video .centered-intro > header > .fsElementTitle").html().split(" ");
    var newArrayOfTitleText = [];
    for(var y = 0;y < arrayOfTitleText.length;y++) {
      if(y > 0) {
        newArrayOfTitleText.push("<span>&bull;</span>");
      }
      newArrayOfTitleText.push("<span>"+arrayOfTitleText[y]+"</span>");
    }
    $(".dream-video .centered-intro > header > .fsElementTitle").html(newArrayOfTitleText.join(" "));
    // $(".dream-video .centered-intro .fsElementContent a[href=#media-playlist-link]").on("click",function() {
    //   onAJAXSuccess = function onAJAXSuccess(event, xhr, options, data){
    //     console.log("click");
    //     console.log($("#fsMediaPlayerDialog video").length);
    //     $("#fsMediaPlayerDialog video").attr("autoplay","true").get(0).play();
    //   };
    //   $(document).ajaxSuccess(onAJAXSuccess);
    // });

  }
  function loadingScreen() {
    $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
    });
    $(".loading-element").insertAfter($("#fsHeader"));
    $body.addClass("loading");
    var bar = new ProgressBar.Circle(".loading-element > .fsElementContent", {
      color: '#fff',
      strokeWidth: 3,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('0%');
          $(".loading-element > .fsElementContent").addClass("rotationCircle");
        }
        else {
          circle.setText(value+"%");
        }
        if(state.offset===0) {
          $(".loading-element > .fsElementContent").removeClass("rotationCircle");
          $(".loading-element").addClass("startRemoval");
          $(".dream-video").addClass("startAnimation");
          if($(window).width() >= 700) {
            setTimeout(function() {
              $body.removeClass("loading");
            },2750);
          }
          else {
            setTimeout(function() {
              $body.removeClass("loading");
            },2500);
          }
          setTimeout(function() {
            $(".dream-video").removeClass("startAnimation").addClass("finalState");
            $(".dream-video .fsMediaCustomPlayer").slick('slickSetOption', 'autoplay', true).slick("slickPlay");
            $(".dream-video .fsMediaCustomPlayer").slick('slickSetOption', 'autoplaySpeed', "7500");
          },7000);
          $fsPageBodyWrapper.addClass("show");
          $fsFooter.addClass("show");
        }
      }
    });
    bar.text.style.fontFamily = "museo-sans";
    bar.text.style.fontWeight = "500";
    bar.text.style.fontSize = '1rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0
  }
  function remarkableEducators() {
    customImageSliders(".remarkable-educators .full-screen-slider");
    $("body:not(.fsComposeMode) .remarkable-educators .infographic-slider >.fsElementContent").slick({
      slidesToShow:1,
      dots:true,
      mobileFirst:true,
      variableWidth:true,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow:2
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow:3
          }
        }
      ]
    });
    $(".remarkable-educators").append('<span class="mobile-content-toggle"></span>');
  }
  function mumbaiWorld() {
    customImageSliders(".bombay-world .full-screen-slider");
    $("body:not(.fsComposeMode) .bombay-world .quote-slider > .fsElementContent").slick({
      arrows:false,
      dots:true,
      fade:true,
      mobileFirst:true
    });
    $(".bombay-world .quote-slider > .fsElementContent").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $(".bombay-world .full-screen-slider .fsMediaCustomPlayer").slick("slickNext");
      $(".bombay-world .quote-slider > .fsElementContent .slick-slide").removeClass("active-slide");
      $(".bombay-world .quote-slider > .fsElementContent .slick-slide").eq(nextSlide).addClass("active-slide");
    });
    $(".bombay-world").append('<span class="mobile-content-toggle"></span>');
  }
  function learningIntent() {
    customImageSliders(".learning-intent .full-screen-slider");
    $("body:not(.fsComposeMode) .learning-intent .quote-slider > .fsElementContent").slick({
      arrows:false,
      dots:true,
      fade:true,
      mobileFirst:true
    });
    $(".learning-intent .quote-slider > .fsElementContent").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $(".learning-intent .full-screen-slider .fsMediaCustomPlayer").slick("slickNext");
      $(".learning-intent .quote-slider > .fsElementContent .slick-slide").removeClass("active-slide");
      $(".learning-intent .quote-slider > .fsElementContent .slick-slide").eq(nextSlide).addClass("active-slide");
    });
    $(".learning-intent").append('<span class="mobile-content-toggle"></span>');
  }
  function welcomeHome() {
    customImageSliders(".welcome-home .full-screen-slider");
    $(".welcome-home").append('<span class="mobile-content-toggle"></span>');
  }
  function googleMaps() {
    var API_KEY = "AIzaSyBFHQOS-JFK5Y1GlTdAKz5JbvajgUZbYzE";
    $('head').append('<script src=\"//maps.googleapis.com/maps/api/js?key=' + API_KEY + '&callback=initMap\" async defer></script>');
  }
  window.initMap = function() {
    var bombayIcon = {
      url: '/uploaded/themes/default/images/bombay-marker.png',
      scaledSize: new google.maps.Size(21, 32)
    };
    var markers = [
      {
        "lat": parseFloat(19.071984),
        "lng": parseFloat(72.875640),
        "icon": bombayIcon,
        "description": '<h5>Elementary School Campus</h5><p>Commercial 2, Tower 4,Kohinoor City, Kirol Road, Off 400 070, Lal Bahadur Shastri Marg, Kurla West, Mumbai, India</p><a target="_blank" href="https://www.google.com/maps/dir/Current+Location/Commercial 2, Tower 4,Kohinoor City, Kirol Road, Off 400 070, Lal Bahadur Shastri Marg, Kurla West, Mumbai, India">Directions</a>'
      },
      {
        "lat": parseFloat(19.066860),
        "lng": parseFloat(72.870450),
        "icon": bombayIcon,
        "description": '<h5>Secondary School Campus</h5><p>SF-2, G-Block, Bandra Kurla Complex Road,Bandra East, Mumbai, Maharashtra 400098, India</p><a target="_blank" href="https://www.google.com/maps/dir/Current+Location/SF-2, G-Block, Bandra Kurla Complex Road,Bandra East, Mumbai, Maharashtra 400098, India">Directions</a>'
      },
      {
        "lat": parseFloat(19.123054),
        "lng": parseFloat(72.921738),
        "icon": bombayIcon,
        "description": '<h5>Early Childhood Learning Powai Campus</h5><p>701, 7th Floor, Hiranandani Knowledge Park, Technology Street, Opp. Hiranandani Hospital, Powai, Mumbai, India</p><a target="_blank" href="https://www.google.com/maps/dir/Current+Location/American School of Bombay - Powai Campus, 701, 7th Floor, Hiranandani Knowledge Park, Technology Street, Hill Side Avenue, Opp. Hiranandani Hospital, Powai, Mumbai, Maharashtra 400076, India">Directions</a>'
      } // Ticket 8818215 - Adding third school
    ];
    var mapOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel:false,
      center: {lat: parseFloat(19.076395122079923), lng: parseFloat(72.86991119384766)}
    };
    var mapContainer = $(".google-maps")[0];
    var map = new google.maps.Map(mapContainer, mapOptions);
    var infoWindow = new google.maps.InfoWindow();
    for (var i = 0; i < markers.length; i++) {
      var data = markers[i];
      var myLatlng = new google.maps.LatLng(data.lat, data.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: data.icon
      });
      (function (marker, data) {
        google.maps.event.addListener(marker, "click", function (e) {
          infoWindow.setContent(data.description);
          infoWindow.open(map, marker);
        });
      })(marker, data);
    }
  };
  function actionButtons() {
    $(".action-buttons").each(function() {
      var _self=$(this);
      $(this).find(">.fsElementContent").clone().prependTo($(this)).removeClass("fsElementContent").addClass("clonedSection");
      $(this).find(".clonedSection").addClass("one").wrapInner('<div class="inner"></div>');
      $(this).find(".clonedSection a:first-child").addClass("active");
      $(this).find(">.fsElementContent > a").on("mouseenter",function() {
        var classIndex;
        if($(this).index() === 0) {
          classIndex = "one";
        }
        else if($(this).index() === 1) {
          classIndex = "two";
        }
        else if($(this).index() === 2) {
          classIndex = "three";
        }
        _self.find(".clonedSection a").removeClass("active").eq($(this).index()).addClass("active");
        _self.find(".clonedSection").removeClass("one").removeClass("two").removeClass("three").addClass(classIndex);
        setTimeout(function() {
          _self.find(".clonedSection").addClass("finished");
        },400);
      });
    });
  }
  function mobileToggle() {
    $(".mobile-content-toggle").on("click",function() {
      $(this).parent().toggleClass("mobileShow");
      // if($(this).parent().find(".slick-slider").length) {
      //   _this = $(this);
      //   _this.parent().find(".quote-slider .slick-slider").slick("resize");
      // }
    });
  }
  function stickyHeader() {
    $(window).on("scroll",function() {
      $windowPosition = $(window).scrollTop();
      $offset = $fsHeader.height();
      if($windowPosition >= $offset) {
        $fsHeader.addClass("fixed");
        $("#fp-nav").addClass("headerIsFixed");
      }
      else {
        $fsHeader.removeClass("fixed");
        $("#fp-nav").removeClass("headerIsFixed");
      }
    });
  }
  // ================================
  // Homepage
  // ================================
  if($home.length) {
    if($bodyNotComposeMode.length) {
      actionButtons();
    }
    //scrollingEffects();
    loadingScreen();
    DLS();
    remarkableEducators();
    mumbaiWorld();
    learningIntent();
    welcomeHome();
    googleMaps();
    mobileToggle();
    stickyHeader();
  }
  enquire
    .register("screen and (min-width: 700px)", {
      match: function() {
        bpLarge();
      },
      unmatch: function() {
        bpBelowLarge();
      }
    }, true)
  function bpBelowLarge() {
    if($home.length) {
      $.fn.fullpage.destroy("all");
    }
  }
  function bpLarge() {
    if($home.length) {
      scrollingEffects();
    }
  }
  // ================================
  // Navigation
  // ================================
  var $navMain_level1 = $('.nav-main:first .fsNavLevel1'),
      $navSub_title = $navSub.find('> header > .fsElementTitle'),
      sectionTitle = $navMain_level1.find('> li[class*="fsNavCurrentPage"] > a').text()
  ;
  if (sectionTitle.length !== 0) {
    $navSub_title.html(sectionTitle);
  }
  if($navSub.find('nav .fsNavLevel1').length !== 0) {
      $navSub.removeClass( 'nav-sub-empty' );
  }
  else {
      $navSub.addClass( 'nav-sub-empty' );
  }
  if($navTier.find('nav .fsNavLevel1').length !== 0) {
      $navTier.removeClass( 'nav-tier-empty' );
  }
  else {
      $navTier.addClass( 'nav-tier-empty' );
  }
  // nav-sub - mobile toggle
  $navSub_title.click( function() {
    $(this).closest( $navSub ).toggleClass( 'active-nav' );
  });
  $(document).on('click', function(event) {
    if ( !$(event.target).closest( $navSub ).length ) {
      $navSub.removeClass( 'active-nav' );
    }
  });
  if($touch) {
    $fsHeader.find(".nav-main .fsNavLevel1 > li").doubleTapToGo();
  }
  // ================================
  // Off Canvas Menu
  // ================================
  $('<div class="drop-trigger"></div>').insertAfter($(".fsMenu .nav-main .fsNavLevel1 > li.fsNavParentPage > a"));

  $('.fsMenu .nav-main .fsNavLevel1 >li').each(function() {
    var lowerMenu = $(this).find('>.fsNavPageInfo');
    $('<div class="lower-menu-title"></div>').prependTo(lowerMenu);
    $(this).find('>a').clone().appendTo(lowerMenu.find(".lower-menu-title"));
    $('<div class="lower-menu-buttons"><span class="menu-toggle menu-back">BACK</span><button class="drawer-trigger" href="#"></button></div>').prependTo(lowerMenu);
  });
  $('.menu-back').click(function(e) {
    $(this).parents('li').removeClass('active-link');
  });
  $('.fsMenu .nav-main .fsNavLevel1 >li > .drop-trigger').click(function(e) {
    e.preventDefault();
    $(this).parent().addClass('active-link');
  });
  $('<div class="drawer-ribbon"><button class="drawer-trigger" href="#">MENU</button></div>').appendTo($(".site-info-container > .fsElementContent"));
  // Toggle attribute of the body
  $('.drawer-trigger').click(function() {
    $body.toggleClass('drawer-is-active');
    $(".fsMenu .nav-main .fsNavLevel1 > li").removeClass("active-link");
  });
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.fsMenu, .drawer-trigger, .next').length) {
      $body.removeClass('drawer-is-active');
      $(".fsMenu .nav-main .fsNavLevel1 > li").removeClass("active-link");
    }
  });

  // ================================
  // Manipulate DOM
  // ================================

  // ================================
  // Search
  // ================================
  placeholder($fsHeader.find($fsSiteSearch),"Search");
  $fsHeader.find($fsSearchTrigger).on("click",function(e) {
    e.preventDefault();
    $fsSiteSearchContainer.toggleClass("open");
    $(this).toggleClass("active");
  });
  $(document).on('click', function(event) {
    if (!$(event.target).closest($fsSiteSearchContainer).length) {
      $fsSiteSearchContainer.removeClass("open");
      $fsSearchTrigger.removeClass("active");
    }
  });

  // ================================
  // Modify DOM
  // ================================
  $fsHeader.find($fsSiteSearch).appendTo($fsSiteSearchContainer.find(">.fsElementContent"));

  // ================================
  // Responsive Built-in sliders
  // ================================
  var targets = [
    '.fsCalendar.fsSlideshow'
  ];
  var bp = [{
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
  breakpoint: $mobileBP,
    settings: {
      slidesToShow: 1,
      slidesToScroll:1,
      dots: false
    }
  }];
  for (var i = 0; i < targets.length; i++) {
    $(targets[i] + ' .fsElementSlideshow').slick('slickSetOption', 'responsive', bp, true);
  }

  // ================================
  // GraphicOrganizers SpiderMap
  // ================================

  if($(".spiderMap").length) {
    var spiderMap = new GraphicOrganizers.SpiderMap();
  }
});


function backgroundImage(t){backgroundElement=t,$(backgroundElement).each(function(){var t=$(this).find("img").attr("src");$(this).css("background-image",'url("'+t+'")')})}function date(){var t,e,n=".date-container",o=new Date,i=o.getYear(),r=o.getDay(),s=o.getMonth(),a=o.getDate(),l=o.getHours();t=l%12||12,e=l<12?"am":"pm";var c=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes();i<1e3&&(i+=1900),a<10&&(a="0"+a);var u=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),f=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),d='<div class="date"><div class="day">'+u[r]+',</div><div class="month"> '+f[s]+" "+a+'</div><div class="time">'+t+":"+c+" "+e+"</div></div>";$(n).html(d)}function debounce(t,e,n){var o;return function(){var i=this,r=arguments,s=function(){o=null,n||t.apply(i,r)},a=n&&!o;clearTimeout(o),o=setTimeout(s,e),a&&t.apply(i,r)}}function placeholder(t,e){"use strict";var n,o,i=100,r=100;n=function s(){t.find("input.gsc-input").length?$.support.placeholder?t.find("input.gsc-input").attr("placeholder",e):t.find("input.gsc-input").attr("value",e):i>0&&(o=setTimeout(s,r),i-=1)},o=setTimeout(n,r)}function nano(t,e){return t.replace(/\{([\w\.]*)\}/g,function(t,n){for(var o=n.split("."),i=e[o.shift()],r=0,s=o.length;r<s;r++)i=i[o[r]];return"undefined"!=typeof i&&null!==i?i:""})}var GraphicOrganizers=function(){"use strict";$=$||$j;var t=function(t){var e=this;e.construct=function(){$(".bubble-inner--center").addClass("bubble-inner").appendTo(".bubble-container > header").wrapInner('<div class="bubble-content" /></div>').append('<div class="bubble-close">Close</div>'),$(".bubble-item").click(function(){$(this).next(".bubble-inner").clone().appendTo(".bubble-container").addClass("open-content"),$(".spiderMap__overlay").addClass("active")}),$(".bubble-container > header").click(function(){$(this).find(".bubble-inner").clone().appendTo(".bubble-container").addClass("open-content"),$(".spiderMap__overlay").addClass("active")}),$(document).on("click",".bubble-close",function(){$(this).closest(".bubble-inner").remove(),$(".spiderMap__overlay").removeClass("active")}),$(document).on("click",function(t){$(t.target).closest(".bubble-inner, .bubble-wrapper, .bubble-close, .bubble-container > header").length||($(".bubble-inner").removeClass("open-content"),$(".bubble-wrapper").removeClass("opened"),$(".bubble-item").removeClass("opened"),$(".spiderMap__overlay").removeClass("active"))}),$(".bubble-item").each(function(){var t=$(this).attr("class");$(this).parent().find(".bubble-inner").addClass(t),$(".bubble-inner").removeClass("fsElement, fsContent, bubble-item")}),$(".spiderMap").append("<div class='spiderMap__overlay'></div>")},e.init=function(){$("body:not(.fsComposeMode)").length&&($(".spiderMap > header .fsElementHeaderContent").find("img").each(function(){var t=$(this).attr("src");$(".spiderMap").css("background-image","url("+t+")")}),backgroundImage(".bubble-item"),$("body:not(.fsComposeMode)").find(".bubble-item").wrapInner('<div class="bubble-inner"><div class="bubble-content" /><div class="bubble-close">close</div></div>'),$(".bubble-item").each(function(){var t=$(this).find(".bubble-inner");$(this).wrap('<span class="bubble-wrapper" />');$(t).insertAfter(this)}),$(".bubble-container").addClass("mobile-bubble"),$(".spiderMap").waypoint(function(t){"down"===t?$(".spiderMap").addClass("animate"):$(".spiderMap").removeClass("animate")},{offset:300}),$(".bubble-container").removeClass("mobile-bubble"),$(".bubble-container").addClass("desktop"),e.construct())},e.init()};return{SpiderMap:t}}();if($(".fsCalendar.fsGrid").length){$(".fsCalendar.fsGrid").addClass("smallCal");var eventview,scrollUp,onClickGridEvent=function(t){var e,n,o=$(t.target).closest(".fsCalendarDaybox");n=o.clone(),e=eventview.offset().top-16,$(".fsCalendarEventGrid .fsCalendarDaybox, .fsCalendarWeekendDayBox>div").removeClass("selected"),eventview.empty().append(n),o.addClass("selected"),$("html,body").animate({scrollTop:e},450)},onClickScrollUp=function(){var t=$(".fsCalendarMonthBrowser").offset().top-16;$("html,body").animate({scrollTop:t},450)},onAJAXSuccess=function(t,e,n,o){var i=$(o).hasClass("fsCalendar fsGrid");i&&initCalendar()},initCalendar=function(){eventview=$('<div id="event-view" />').insertAfter(".fsCalendarEventGrid"),scrollUp=$('<div class="scroll-up"><span>Back Up To Calendar</span></div>').insertAfter(eventview),scrollUp.on("click",onClickScrollUp),$(".fsCalendarDaybox").has(".fsCalendarInfo").addClass("has-info"),$(".fsCalendarEventGrid").on("click",".fsCalendarDaybox:not(.fsCalendarWeekendDayBox),.fsCalendarWeekendDayBox>div ",onClickGridEvent)};$(document).ajaxSuccess(onAJAXSuccess),initCalendar()}!function(t,e){function n(t,e,n){var o=t.children(),i=!1;t.empty();for(var s=0,a=o.length;a>s;s++){var l=o.eq(s);if(t.append(l),n&&t.append(n),r(t,e)){l.remove(),i=!0;break}n&&n.detach()}return i}function o(e,n,s,a,l){var c=!1,u="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",f="script, .dotdotdot-keep";return e.contents().detach().each(function(){var d=this,h=t(d);if("undefined"==typeof d)return!0;if(h.is(f))e.append(h);else{if(c)return!0;e.append(h),!l||h.is(a.after)||h.find(a.after).length||e[e.is(u)?"after":"append"](l),r(s,a)&&(c=3==d.nodeType?i(h,n,s,a,l):o(h,n,s,a,l)),c||l&&l.detach()}}),n.addClass("is-truncated"),c}function i(e,n,o,i,a){var u=e[0];if(!u)return!1;var d=c(u),h=-1!==d.indexOf(" ")?" ":"　",p="letter"==i.wrap?"":h,g=d.split(p),m=-1,v=-1,y=0,w=g.length-1;for(i.fallbackToLetter&&0==y&&0==w&&(p="",g=d.split(p),w=g.length-1);w>=y&&(0!=y||0!=w);){var b=Math.floor((y+w)/2);if(b==v)break;v=b,l(u,g.slice(0,v+1).join(p)+i.ellipsis),o.children().each(function(){t(this).toggle().toggle()}),r(o,i)?(w=v,i.fallbackToLetter&&0==y&&0==w&&(p="",g=g[0].split(p),m=-1,v=-1,y=0,w=g.length-1)):(m=v,y=v)}if(-1==m||1==g.length&&0==g[0].length){var S=e.parent();e.detach();var x=a&&a.closest(S).length?a.length:0;S.contents().length>x?u=f(S.contents().eq(-1-x),n):(u=f(S,n,!0),x||S.detach()),u&&(d=s(c(u),i),l(u,d),x&&a&&t(u).parent().append(a))}else d=s(g.slice(0,m+1).join(p),i),l(u,d);return!0}function r(t,e){return t.innerHeight()>e.maxHeight}function s(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function a(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function c(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function u(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function f(e,n,o){var i,r=e&&e[0];if(r){if(!o){if(3===r.nodeType)return r;if(t.trim(e.text()))return f(e.contents().last(),n)}for(i=u(r);!i;){if(e=e.parent(),e.is(n)||!e.length)return!1;i=u(e[0])}if(i)return f(t(i),n)}return!1}function d(e,n){return!!e&&("string"==typeof e?(e=t(e,n),!!e.length&&e):!!e.jquery&&e)}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],o=0,i=n.length;i>o;o++){var r=parseInt(t.css(n[o]),10);isNaN(r)&&(r=0),e-=r}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var i=this,s=i.contents();i.data("dotdotdot")&&i.trigger("destroy.dot"),i.data("dotdotdot-style",i.attr("style")||""),i.css("word-wrap","break-word"),"nowrap"===i.css("white-space")&&i.css("white-space","normal"),i.bind_events=function(){return i.bind("update.dot",function(e,a){switch(i.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(i[0]);break;default:l.maxHeight=h(i)}l.maxHeight+=l.tolerance,"undefined"!=typeof a&&(("string"==typeof a||"nodeType"in a&&1===a.nodeType)&&(a=t("<div />").append(a).contents()),a instanceof t&&(s=a)),g=i.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var u=!1,f=!1;return c.afterElement&&(u=c.afterElement.clone(!0),u.show(),c.afterElement.detach()),r(g,l)&&(f="children"==l.wrap?n(g,l,u):o(g,i,g,l,u)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(i[0],f,s),c.isTruncated=f,f}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(i[0],c.isTruncated),c.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(i[0],s),s}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),i.unwatch().unbind_events().contents().detach().end().append(s).attr("style",i.data("dotdotdot-style")||"").removeClass("is-truncated").data("dotdotdot",!1)}),i},i.unbind_events=function(){return i.unbind(".dot"),i},i.watch=function(){if(i.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),o=e.height();e.bind("resize.dot"+c.dotId,function(){n==e.width()&&o==e.height()&&l.windowResizeFix||(n=e.width(),o=e.height(),f&&clearInterval(f),f=setTimeout(function(){i.trigger("update.dot")},100))})}else u=a(i),f=setInterval(function(){if(i.is(":visible")){var t=a(i);u.width==t.width&&u.height==t.height||(i.trigger("update.dot"),u=t)}},500);return i},i.unwatch=function(){return t(window).unbind("resize.dot"+c.dotId),f&&clearInterval(f),i};var l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),c={},u={},f=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),c.afterElement=d(l.after,i),c.isTruncated=!1,c.dotId=p++,i.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&i.watch(),i},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(t){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var m=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):m.apply(this,arguments)}}}(jQuery),jQuery(document).ready(function(t){t(".dot-ellipsis").each(function(){var e=t(this).hasClass("dot-resize-update"),n=t(this).hasClass("dot-timer-update"),o=0,i=t(this).attr("class").split(/\s+/);t.each(i,function(t,e){var n=e.match(/^dot-height-(\d+)$/);null!==n&&(o=Number(n[1]))});var r=new Object;n&&(r.watch=!0),e&&(r.watch="window"),o>0&&(r.height=o),t(this).dotdotdot(r)})}),jQuery(window).load(function(){jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")}),function(t,e,n,o){t.fn.doubleTapToGo=function(o){return!!("ontouchstart"in e||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i))&&(this.each(function(){var e=!1;t(this).on("click",function(n){var o=t(this);o[0]!=e[0]&&(n.preventDefault(),e=o)}),t(n).on("click touchstart MSPointerDown",function(n){for(var o=!0,i=t(n.target).parents(),r=0;r<i.length;r++)i[r]==e[0]&&(o=!1);o&&(e=!1)})}),this)}}(jQuery,window,document),jQuery.effects||function(t,e){var n=t.uiBackCompat!==!1,o="ui-effects-";t.effects={effect:{}},function(e,n){function o(t,e,n){var o=d[e.type]||{};return null==t?n||!e.def?null:e.def:(t=o.floor?~~t:parseFloat(t),isNaN(t)?e.def:o.mod?(t+o.mod)%o.mod:0>t?0:t>o.max?o.max:t)}function i(t){var o=u(),i=o._rgba=[];return t=t.toLowerCase(),g(c,function(e,r){var s,a=r.re.exec(t),l=a&&r.parse(a),c=r.space||"rgba";return l?(s=o[c](l),o[f[c].cache]=s[f[c].cache],i=o._rgba=s._rgba,!1):n}),i.length?("0,0,0,0"===i.join()&&e.extend(i,s.transparent),o):s[t]}function r(t,e,n){return n=(n+1)%1,1>6*n?t+6*(e-t)*n:1>2*n?e:2>3*n?t+6*(e-t)*(2/3-n):t}var s,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,c=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],u=e.Color=function(t,n,o,i){return new e.Color.fn.parse(t,n,o,i)},f={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=u.support={},p=e("<p>")[0],g=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=p.style.backgroundColor.indexOf("rgba")>-1,g(f,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(r,a,l,c){if(r===n)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(a),a=n);var d=this,h=e.type(r),p=this._rgba=[];return a!==n&&(r=[r,a,l,c],h="array"),"string"===h?this.parse(i(r)||s._default):"array"===h?(g(f.rgba.props,function(t,e){p[e.idx]=o(r[e.idx],e)}),this):"object"===h?(r instanceof u?g(f,function(t,e){r[e.cache]&&(d[e.cache]=r[e.cache].slice())}):g(f,function(e,n){var i=n.cache;g(n.props,function(t,e){if(!d[i]&&n.to){if("alpha"===t||null==r[t])return;d[i]=n.to(d._rgba)}d[i][e.idx]=o(r[t],e,!0)}),d[i]&&0>t.inArray(null,d[i].slice(0,3))&&(d[i][3]=1,n.from&&(d._rgba=n.from(d[i])))}),this):n},is:function(t){var e=u(t),o=!0,i=this;return g(f,function(t,r){var s,a=e[r.cache];return a&&(s=i[r.cache]||r.to&&r.to(i._rgba)||[],g(r.props,function(t,e){return null!=a[e.idx]?o=a[e.idx]===s[e.idx]:n})),o}),o},_space:function(){var t=[],e=this;return g(f,function(n,o){e[o.cache]&&t.push(n)}),t.pop()},transition:function(t,e){var n=u(t),i=n._space(),r=f[i],s=0===this.alpha()?u("transparent"):this,a=s[r.cache]||r.to(s._rgba),l=a.slice();return n=n[r.cache],g(r.props,function(t,i){var r=i.idx,s=a[r],c=n[r],u=d[i.type]||{};null!==c&&(null===s?l[r]=c:(u.mod&&(c-s>u.mod/2?s+=u.mod:s-c>u.mod/2&&(s-=u.mod)),l[r]=o((c-s)*e+s,i)))}),this[i](l)},blend:function(t){if(1===this._rgba[3])return this;var n=this._rgba.slice(),o=n.pop(),i=u(t)._rgba;return u(e.map(n,function(t,e){return(1-o)*i[e]+o*t}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===n[3]&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===n[3]&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),o=n.pop();return t&&n.push(~~(255*o)),"#"+e.map(n,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,f.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,n,o=t[0]/255,i=t[1]/255,r=t[2]/255,s=t[3],a=Math.max(o,i,r),l=Math.min(o,i,r),c=a-l,u=a+l,f=.5*u;return e=l===a?0:o===a?60*(i-r)/c+360:i===a?60*(r-o)/c+120:60*(o-i)/c+240,n=0===f||1===f?f:.5>=f?c/u:c/(2-u),[Math.round(e)%360,n,f,null==s?1:s]},f.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],o=t[2],i=t[3],s=.5>=o?o*(1+n):o+n-o*n,a=2*o-s;return[Math.round(255*r(a,s,e+1/3)),Math.round(255*r(a,s,e)),Math.round(255*r(a,s,e-1/3)),i]},g(f,function(t,i){var r=i.props,s=i.cache,a=i.to,c=i.from;u.fn[t]=function(t){if(a&&!this[s]&&(this[s]=a(this._rgba)),t===n)return this[s].slice();var i,l=e.type(t),f="array"===l||"object"===l?t:arguments,d=this[s].slice();return g(r,function(t,e){var n=f["object"===l?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=o(n,e)}),c?(i=u(c(d)),i[s]=d,i):u(d)},g(r,function(n,o){u.fn[n]||(u.fn[n]=function(i){var r,s=e.type(i),a="alpha"===n?this._hsla?"hsla":"rgba":t,c=this[a](),u=c[o.idx];return"undefined"===s?u:("function"===s&&(i=i.call(this,u),s=e.type(i)),null==i&&o.empty?this:("string"===s&&(r=l.exec(i),r&&(i=u+parseFloat(r[2])*("+"===r[1]?1:-1))),c[o.idx]=i,this[a](c)))})})}),g(a,function(t,n){e.cssHooks[n]={set:function(t,o){var r,s,a="";if("string"!==e.type(o)||(r=i(o))){if(o=u(r||o),!h.rgba&&1!==o._rgba[3]){for(s="backgroundColor"===n?t.parentNode:t;(""===a||"transparent"===a)&&s&&s.style;)try{a=e.css(s,"backgroundColor"),s=s.parentNode}catch(l){}o=o.blend(a&&"transparent"!==a?a:"_default")}o=o.toRgbaString()}try{t.style[n]=o}catch(c){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=u(t.elem,n),t.end=u(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}}),e.cssHooks.borderColor={expand:function(t){var e={};return g(["Top","Right","Bottom","Left"],function(n,o){e["border"+o+"Color"]=t}),e}},s=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function n(){var e,n,o=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,i={};if(o&&o.length&&o[0]&&o[o[0]])for(n=o.length;n--;)e=o[n],"string"==typeof o[e]&&(i[t.camelCase(e)]=o[e]);else for(e in o)"string"==typeof o[e]&&(i[e]=o[e]);return i}function o(e,n){var o,i,s={};for(o in n)i=n[o],e[o]!==i&&(r[o]||(t.fx.step[o]||!isNaN(parseFloat(i)))&&(s[o]=i));return s}var i=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,n){t.fx.step[n]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,n,t.end),t.setAttr=!0)}}),t.effects.animateClass=function(e,r,s,a){var l=t.speed(r,s,a);return this.queue(function(){var r,s=t(this),a=s.attr("class")||"",c=l.children?s.find("*").andSelf():s;c=c.map(function(){var e=t(this);return{el:e,start:n.call(this)}}),r=function(){t.each(i,function(t,n){e[n]&&s[n+"Class"](e[n])})},r(),c=c.map(function(){return this.end=n.call(this.el[0]),this.diff=o(this.start,this.end),this}),s.attr("class",a),c=c.map(function(){var e=this,n=t.Deferred(),o=jQuery.extend({},l,{queue:!1,complete:function(){n.resolve(e)}});return this.el.animate(this.diff,o),n.promise()}),t.when.apply(t,c.get()).done(function(){r(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(s[0])})})},t.fn.extend({_addClass:t.fn.addClass,addClass:function(e,n,o,i){return n?t.effects.animateClass.call(this,{add:e},n,o,i):this._addClass(e)},_removeClass:t.fn.removeClass,removeClass:function(e,n,o,i){return n?t.effects.animateClass.call(this,{remove:e},n,o,i):this._removeClass(e)},_toggleClass:t.fn.toggleClass,toggleClass:function(n,o,i,r,s){return"boolean"==typeof o||o===e?i?t.effects.animateClass.call(this,o?{add:n}:{remove:n},i,r,s):this._toggleClass(n,o):t.effects.animateClass.call(this,{toggle:n},o,i,r)},switchClass:function(e,n,o,i,r){return t.effects.animateClass.call(this,{add:n,remove:e},o,i,r)}})}(),function(){function i(e,n,o,i){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),t.isFunction(n)&&(i=n,o=null,n={}),("number"==typeof n||t.fx.speeds[n])&&(i=o,o=n,n={}),t.isFunction(o)&&(i=o,o=null),n&&t.extend(e,n),o=o||n.duration,e.duration=t.fx.off?0:"number"==typeof o?o:o in t.fx.speeds?t.fx.speeds[o]:t.fx.speeds._default,e.complete=i||n.complete,e}function r(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||"string"==typeof e&&!t.effects.effect[e]&&(!n||!t.effects[e])}t.extend(t.effects,{version:"1.9.2",save:function(t,e){for(var n=0;e.length>n;n++)null!==e[n]&&t.data(o+e[n],t[0].style[e[n]])},restore:function(t,n){var i,r;for(r=0;n.length>r;r++)null!==n[r]&&(i=t.data(o+n[r]),i===e&&(i=""),t.css(n[r],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var n,o;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":o=0;break;case"center":o=.5;break;case"right":o=1;break;default:o=t[1]/e.width}return{x:o,y:n}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var n={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},o=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(s){r=document.body}return e.wrap(o),(e[0]===r||t.contains(e[0],r))&&t(r).focus(),o=e.parent(),"static"===e.css("position")?(o.css({position:"relative"}),e.css({position:"relative"})):(t.extend(n,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,o){n[o]=e.css(o),isNaN(parseInt(n[o],10))&&(n[o]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(i),o.css(n).show()},removeWrapper:function(e){var n=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===n||t.contains(e[0],n))&&t(n).focus()),e},setTransition:function(e,n,o,i){return i=i||{},t.each(n,function(t,n){var r=e.cssUnit(n);r[0]>0&&(i[n]=r[0]*o+r[1])}),i}}),t.fn.extend({effect:function(){function e(e){function n(){t.isFunction(r)&&r.call(i[0]),t.isFunction(e)&&e()}var i=t(this),r=o.complete,s=o.mode;(i.is(":hidden")?"hide"===s:"show"===s)?n():a.call(i[0],o,n)}var o=i.apply(this,arguments),r=o.mode,s=o.queue,a=t.effects.effect[o.effect],l=!a&&n&&t.effects[o.effect];return t.fx.off||!a&&!l?r?this[r](o.duration,o.complete):this.each(function(){o.complete&&o.complete.call(this)}):a?s===!1?this.each(e):this.queue(s||"fx",e):l.call(this,{options:o,duration:o.duration,callback:o.complete,mode:o.mode})},_show:t.fn.show,show:function(t){if(r(t))return this._show.apply(this,arguments);var e=i.apply(this,arguments);return e.mode="show",this.effect.call(this,e)},_hide:t.fn.hide,hide:function(t){if(r(t))return this._hide.apply(this,arguments);var e=i.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)},__toggle:t.fn.toggle,toggle:function(e){if(r(e)||"boolean"==typeof e||t.isFunction(e))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(e){var n=this.css(e),o=[];return t.each(["em","px","%","pt"],function(t,e){n.indexOf(e)>0&&(o=[parseFloat(n),e])}),o}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;((e=Math.pow(2,--n))-1)/11>t;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?n(2*t)/2:1-n(-2*t+2)/2}})}()}(jQuery),!function(t,e,n){var o=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(o):"function"==typeof define&&define.amd?define(function(){return e[t]=n(o)}):e[t]=n(o)}("enquire",this,function(t){"use strict";function e(t,e){var n,o=0,i=t.length;for(o;i>o&&(n=e(t[o],o),n!==!1);o++);}function n(t){return"[object Array]"===Object.prototype.toString.apply(t)}function o(t){return"function"==typeof t}function i(t){this.options=t,!t.deferSetup&&this.setup()}function r(e,n){this.query=e,this.isUnconditional=n,this.handlers=[],this.mql=t(e);var o=this;this.listener=function(t){o.mql=t,o.assess()},this.mql.addListener(this.listener)}function s(){if(!t)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!t("only all").matches}return i.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},r.prototype={addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var n=this.handlers;e(n,function(e,o){return e.equals(t)?(e.destroy(),!n.splice(o,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";e(this.handlers,function(e){e[t]()})}},s.prototype={register:function(t,i,s){var a=this.queries,l=s&&this.browserIsIncapable;return a[t]||(a[t]=new r(t,l)),o(i)&&(i={match:i}),n(i)||(i=[i]),e(i,function(e){o(e)&&(e={match:e}),a[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},new s}),$.fn.mediaSlider=function(t){slideshowClass=this;var e,n,o=600,i=$(slideshowClass).find(".fsMediaCustomPlayer"),r=i.attr("data-playlisturl"),s=$.extend({mediaTemplate:""},t),a={slide:s.mediaTemplate.join("\n")};i.data("display_loaded",!1),$.getJSON(r,function(t){var r;$(window).width()>o?e="full":(e="mobile",$(window).on("resize",function(){var t=$(this).width();t>o&&!i.data("display_loaded")&&!r&&($(window).data("display_loaded",!0),r=!0,i.find("article").each(function(){var t=$(this).find("img").attr("src").replace("/mobile/","/fullsize/");$(this).find("img").attr("src",t),$(this).attr("style",'background-image: url("'+t+'");')}))})),$.each(t.objects,function(o,r){n="full"===e?t.objects[o].full_path:t.objects[o].mobile_path,i.append(nano(a.slide,{imgSrc:n,captionTitle:t.objects[o].object_title,captionDesc:t.objects[o].object_description}))})}).done(function(){t.callback()}).fail(function(){i.append("<span>Please make sure you have content added to media manager and that you have selected the correct element settings.</span>").css("textAlign","center")})},function(t,e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(n){return e(n,t,t.document,t.Math)}):"undefined"!=typeof exports?module.exports=e(require("jquery"),t,t.document,t.Math):e(jQuery,t,t.document,t.Math)}("undefined"!=typeof window?window:this,function(t,e,n,o,i){"use strict";var r="fullpage-wrapper",s="."+r,a="fp-scrollable",l="."+a,c="fp-responsive",u="fp-notransition",f="fp-destroyed",d="fp-enabled",h="fp-viewing",p="active",g="."+p,m="fp-completely",v="."+m,y=".section",w="fp-section",b="."+w,S=b+g,x=b+":first",_=b+":last",C="fp-tableCell",T="."+C,k="fp-auto-height",E="fp-normal-scroll",O="fp-nav",A="#"+O,M="fp-tooltip",P="."+M,L="fp-show-active",I=".slide",$="fp-slide",z="."+$,F=z+g,j="fp-slides",H="."+j,B="fp-slidesContainer",D="."+B,R="fp-table",W="fp-slidesNav",q="."+W,N=q+" a",V="fp-controlArrow",U="."+V,Q="fp-prev",G="."+Q,Y=V+" "+Q,K=U+G,X="fp-next",J="."+X,Z=V+" "+X,tt=U+J,et=t(e),nt=t(n),ot={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0};t.fn.fullpage=function(a){function l(){a.css3&&(a.css3=be()),a.scrollBar=a.scrollBar||a.hybrid,G(),X(),Be.setAllowScrolling(!0),Be.setAutoScrolling(a.autoScrolling,"internal");var e=t(S).find(F);e.length&&(0!==t(S).index(b)||0===t(S).index(b)&&0!==e.index())&&Ae(e),Zt(),we(),"complete"===n.readyState&&Ht(),et.on("load",Ht)}function V(){et.on("scroll",gt).on("hashchange",Bt).blur(Ut).resize(Jt),nt.keydown(Dt).keyup(Wt).on("click touchstart",A+" a",Qt).on("click touchstart",N,Gt).on("click",P,Rt),t(b).on("click touchstart",U,Vt),a.normalScrollElements&&(nt.on("mouseenter",a.normalScrollElements,function(){Be.setMouseWheelScrolling(!1)}),nt.on("mouseleave",a.normalScrollElements,function(){Be.setMouseWheelScrolling(!0)}))}function G(){var e=Ue.find(a.sectionSelector);a.anchors.length||(a.anchors=e.filter("[data-anchor]").map(function(){return t(this).data("anchor").toString()}).get()),a.navigationTooltips.length||(a.navigationTooltips=e.filter("[data-tooltip]").map(function(){return t(this).data("tooltip").toString()}).get())}function X(){Ue.css({height:"100%",position:"relative"}),Ue.addClass(r),t("html").addClass(d),Qe=et.height(),Ue.removeClass(f),at(),t(b).each(function(e){var n=t(this),o=n.find(z),i=o.length;rt(n,e),st(n,e),i>0?J(n,o,i):a.verticalCentered&&le(n)}),a.fixedElements&&a.css3&&t(a.fixedElements).appendTo(He),a.navigation&&ct(),ft(),dt(),a.scrollOverflow?("complete"===n.readyState&&ut(),et.on("load",ut)):pt()}function J(e,n,o){var i=100*o,r=100/o;n.wrapAll('<div class="'+B+'" />'),n.parent().wrap('<div class="'+j+'" />'),e.find(D).css("width",i+"%"),o>1&&(a.controlArrows&&lt(e),a.slidesNavigation&&ge(e,o)),n.each(function(e){t(this).css("width",r+"%"),a.verticalCentered&&le(t(this))});var s=e.find(F);s.length&&(0!==t(S).index(b)||0===t(S).index(b)&&0!==s.index())?Ae(s):n.eq(0).addClass(p)}function rt(e,n){n||0!==t(S).length||e.addClass(p),e.css("height",Qe+"px"),a.paddingTop&&e.css("padding-top",a.paddingTop),a.paddingBottom&&e.css("padding-bottom",a.paddingBottom),"undefined"!=typeof a.sectionsColor[n]&&e.css("background-color",a.sectionsColor[n]),"undefined"!=typeof a.anchors[n]&&e.attr("data-anchor",a.anchors[n])}function st(e,n){"undefined"!=typeof a.anchors[n]&&e.hasClass(p)&&ie(a.anchors[n],n),a.menu&&a.css3&&t(a.menu).closest(s).length&&t(a.menu).appendTo(He)}function at(){Ue.find(a.sectionSelector).each(function(){t(this).addClass(w)}),Ue.find(a.slideSelector).each(function(){t(this).addClass($)})}function lt(t){t.find(H).after('<div class="'+Y+'"></div><div class="'+Z+'"></div>'),"#fff"!=a.controlArrowColor&&(t.find(tt).css("border-color","transparent transparent transparent "+a.controlArrowColor),t.find(K).css("border-color","transparent "+a.controlArrowColor+" transparent transparent")),a.loopHorizontal||t.find(K).hide()}function ct(){He.append('<div id="'+O+'"><ul></ul></div>');var e=t(A);e.addClass(function(){return a.showActiveTooltip?L+" "+a.navigationPosition:a.navigationPosition});for(var n=0;n<t(b).length;n++){var o="";a.anchors.length&&(o=a.anchors[n]);var i='<li><a href="#'+o+'"><span></span></a>',r=a.navigationTooltips[n];"undefined"!=typeof r&&""!==r&&(i+='<div class="'+M+" "+a.navigationPosition+'">'+r+"</div>"),i+="</li>",e.find("ul").append(i)}t(A).css("margin-top","-"+t(A).height()/2+"px"),t(A).find("li").eq(t(S).index(b)).find("a").addClass(p);
}function ut(){t(b).each(function(){var e=t(this).find(z);e.length?e.each(function(){ae(t(this))}):ae(t(this))}),pt()}function ft(){Ue.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=ht(t(this).attr("src"));t(this).attr("src",t(this).attr("src")+e+"enablejsapi=1")})}function dt(){Ue.find('iframe[src*="player.vimeo.com/"]').each(function(){var e=ht(t(this).attr("src"));t(this).attr("src",t(this).attr("src")+e+"api=1")})}function ht(t){return/\?/.test(t)?"&":"?"}function pt(){var e=t(S);e.addClass(m),a.scrollOverflowHandler.afterRender&&a.scrollOverflowHandler.afterRender(e),$t(e),zt(e),t.isFunction(a.afterLoad)&&a.afterLoad.call(e,e.data("anchor"),e.index(b)+1),t.isFunction(a.afterRender)&&a.afterRender.call(Ue)}function gt(){var e;if(!a.autoScrolling||a.scrollBar){var o=et.scrollTop(),i=vt(o),r=0,s=o+et.height()/2,l=He.height()-et.height()===o,c=n.querySelectorAll(b);if(l)r=c.length-1;else for(var u=0;u<c.length;++u){var f=c[u];f.offsetTop<=s&&(r=u)}if(mt(i)&&(t(S).hasClass(m)||t(S).addClass(m).siblings().removeClass(m)),e=t(c).eq(r),!e.hasClass(p)){an=!0;var d=t(S),h=d.index(b)+1,g=re(e),v=e.data("anchor"),y=e.index(b)+1,w=e.find(F);if(w.length)var x=w.data("anchor"),_=w.index();Ke&&(e.addClass(p).siblings().removeClass(p),t.isFunction(a.onLeave)&&a.onLeave.call(d,h,y,g),t.isFunction(a.afterLoad)&&a.afterLoad.call(e,v,y),Ft(d),$t(e),zt(e),ie(v,y-1),a.anchors.length&&(De=v,me(_,x,v,y))),clearTimeout(nn),nn=setTimeout(function(){an=!1},100)}a.fitToSection&&(clearTimeout(on),on=setTimeout(function(){Ke&&a.fitToSection&&(t(S).is(e)&&(Ge=!0),Ot(t(S)),Ge=!1)},a.fitToSectionDelay))}}function mt(e){var n=t(S).position().top,o=n+et.height();return"up"==e?o>=et.scrollTop()+et.height():n<=et.scrollTop()}function vt(t){var e=t>ln?"down":"up";return ln=t,pn=t,e}function yt(t,e){if(Je.m[t]){var n,o;if("down"==t?(n="bottom",o=Be.moveSectionDown):(n="top",o=Be.moveSectionUp),e.length>0){if(!a.scrollOverflowHandler.isScrolled(n,e))return!0;o()}else o()}}function wt(e){var n=e.originalEvent;if(!bt(e.target)&&St(n)){a.autoScrolling&&e.preventDefault();var i=t(S),r=a.scrollOverflowHandler.scrollable(i);if(Ke&&!qe){var s=Oe(n);fn=s.y,dn=s.x,i.find(H).length&&o.abs(un-dn)>o.abs(cn-fn)?o.abs(un-dn)>et.outerWidth()/100*a.touchSensitivity&&(un>dn?Je.m.right&&Be.moveSlideRight():Je.m.left&&Be.moveSlideLeft()):a.autoScrolling&&o.abs(cn-fn)>et.height()/100*a.touchSensitivity&&(cn>fn?yt("down",r):fn>cn&&yt("up",r))}}}function bt(e,n){n=n||0;var o=t(e).parent();return!!(n<a.normalScrollElementTouchThreshold&&o.is(a.normalScrollElements))||n!=a.normalScrollElementTouchThreshold&&bt(o,++n)}function St(t){return"undefined"==typeof t.pointerType||"mouse"!=t.pointerType}function xt(t){var e=t.originalEvent;if(a.fitToSection&&je.stop(),St(e)){var n=Oe(e);cn=n.y,un=n.x}}function _t(t,e){for(var n=0,i=t.slice(o.max(t.length-e,1)),r=0;r<i.length;r++)n+=i[r];return o.ceil(n/e)}function Ct(n){var i=(new Date).getTime(),r=t(v).hasClass(E);if(a.autoScrolling&&!We&&!r){n=n||e.event;var s=n.wheelDelta||-n.deltaY||-n.detail,l=o.max(-1,o.min(1,s)),c="undefined"!=typeof n.wheelDeltaX||"undefined"!=typeof n.deltaX,u=o.abs(n.wheelDeltaX)<o.abs(n.wheelDelta)||o.abs(n.deltaX)<o.abs(n.deltaY)||!c;Xe.length>149&&Xe.shift(),Xe.push(o.abs(s)),a.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);var f=t(S),d=a.scrollOverflowHandler.scrollable(f),h=i-hn;if(hn=i,h>200&&(Xe=[]),Ke){var p=_t(Xe,10),g=_t(Xe,70),m=p>=g;m&&u&&(l<0?yt("down",d):yt("up",d))}return!1}a.fitToSection&&je.stop()}function Tt(e,n){var o="undefined"==typeof n?t(S):n,i=o.find(H),r=i.find(z).length;if(!(!i.length||qe||r<2)){var s=i.find(F),l=null;if(l="prev"===e?s.prev(z):s.next(z),!l.length){if(!a.loopHorizontal)return;l="prev"===e?s.siblings(":last"):s.siblings(":first")}qe=!0,Xt(i,l)}}function kt(){t(F).each(function(){Ae(t(this),"internal")})}function Et(t){var e=t.position(),n=e.top,o=e.top>pn,i=n-Qe+t.outerHeight(),r=a.bigSectionsDestination;return t.outerHeight()>Qe?(o||r)&&"bottom"!==r||(n=i):(o||Ge&&t.is(":last-child"))&&(n=i),pn=n,n}function Ot(e,n,o){if("undefined"!=typeof e){var i=Et(e),r={element:e,callback:n,isMovementUp:o,dtop:i,yMovement:re(e),anchorLink:e.data("anchor"),sectionIndex:e.index(b),activeSlide:e.find(F),activeSection:t(S),leavingSection:t(S).index(b)+1,localIsResizing:Ge};if(!(r.activeSection.is(e)&&!Ge||a.scrollBar&&et.scrollTop()===r.dtop&&!e.hasClass(k))){if(r.activeSlide.length)var s=r.activeSlide.data("anchor"),l=r.activeSlide.index();a.autoScrolling&&a.continuousVertical&&"undefined"!=typeof r.isMovementUp&&(!r.isMovementUp&&"up"==r.yMovement||r.isMovementUp&&"down"==r.yMovement)&&(r=Pt(r)),t.isFunction(a.onLeave)&&!r.localIsResizing&&a.onLeave.call(r.activeSection,r.leavingSection,r.sectionIndex+1,r.yMovement)===!1||(Ft(r.activeSection),e.addClass(p).siblings().removeClass(p),$t(e),a.scrollOverflowHandler.onLeave(),Ke=!1,me(l,s,r.anchorLink,r.sectionIndex),At(r),De=r.anchorLink,ie(r.anchorLink,r.sectionIndex))}}}function At(e){if(a.css3&&a.autoScrolling&&!a.scrollBar){var n="translate3d(0px, -"+e.dtop+"px, 0px)";ue(n,!0),a.scrollingSpeed?tn=setTimeout(function(){It(e)},a.scrollingSpeed):It(e)}else{var o=Mt(e);t(o.element).animate(o.options,a.scrollingSpeed,a.easing).promise().done(function(){a.scrollBar?setTimeout(function(){It(e)},30):It(e)})}}function Mt(t){var e={};return a.autoScrolling&&!a.scrollBar?(e.options={top:-t.dtop},e.element=s):(e.options={scrollTop:t.dtop},e.element="html, body"),e}function Pt(e){return e.isMovementUp?t(S).before(e.activeSection.nextAll(b)):t(S).after(e.activeSection.prevAll(b).get().reverse()),Me(t(S).position().top),kt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.position().top,e.yMovement=re(e.element),e}function Lt(e){e.wrapAroundElements&&e.wrapAroundElements.length&&(e.isMovementUp?t(x).before(e.wrapAroundElements):t(_).after(e.wrapAroundElements),Me(t(S).position().top),kt())}function It(e){Lt(e),t.isFunction(a.afterLoad)&&!e.localIsResizing&&a.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),a.scrollOverflowHandler.afterLoad(),zt(e.element),e.element.addClass(m).siblings().removeClass(m),Ke=!0,t.isFunction(e.callback)&&e.callback.call(this)}function $t(e){var e=jt(e);e.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){t(this).attr("src",t(this).data("src")),t(this).removeAttr("data-src"),t(this).is("source")&&t(this).closest("video").get(0).load()})}function zt(e){var e=jt(e);e.find("video, audio").each(function(){var e=t(this).get(0);e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),e.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=t(this).get(0);/youtube\.com\/embed\//.test(t(this).attr("src"))&&e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")})}function Ft(e){var e=jt(e);e.find("video, audio").each(function(){var e=t(this).get(0);e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),e.find('iframe[src*="youtube.com/embed/"]').each(function(){var e=t(this).get(0);/youtube\.com\/embed\//.test(t(this).attr("src"))&&!e.hasAttribute("data-keepplaying")&&t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function jt(e){var n=e.find(F);return n.length&&(e=t(n)),e}function Ht(){var t=e.location.hash.replace("#","").split("/"),n=decodeURIComponent(t[0]),o=decodeURIComponent(t[1]);n&&(a.animateAnchor?he(n,o):Be.silentMoveTo(n,o))}function Bt(){if(!an&&!a.lockAnchors){var t=e.location.hash.replace("#","").split("/"),n=decodeURIComponent(t[0]),o=decodeURIComponent(t[1]),i="undefined"==typeof De,r="undefined"==typeof De&&"undefined"==typeof o&&!qe;n.length&&(n&&n!==De&&!i||r||!qe&&Re!=o)&&he(n,o)}}function Dt(e){clearTimeout(rn);var n=t(":focus");if(!n.is("textarea")&&!n.is("input")&&!n.is("select")&&"true"!==n.attr("contentEditable")&&""!==n.attr("contentEditable")&&a.keyboardScrolling&&a.autoScrolling){var o=e.which,i=[40,38,32,33,34];t.inArray(o,i)>-1&&e.preventDefault(),We=e.ctrlKey,rn=setTimeout(function(){Yt(e)},150)}}function Rt(){t(this).prev().trigger("click")}function Wt(t){Ye&&(We=t.ctrlKey)}function qt(t){2==t.which&&(gn=t.pageY,Ue.on("mousemove",Kt))}function Nt(t){2==t.which&&Ue.off("mousemove")}function Vt(){var e=t(this).closest(b);t(this).hasClass(Q)?Je.m.left&&Be.moveSlideLeft(e):Je.m.right&&Be.moveSlideRight(e)}function Ut(){Ye=!1,We=!1}function Qt(e){e.preventDefault();var n=t(this).parent().index();Ot(t(b).eq(n))}function Gt(e){e.preventDefault();var n=t(this).closest(b).find(H),o=n.find(z).eq(t(this).closest("li").index());Xt(n,o)}function Yt(e){var n=e.shiftKey;switch(e.which){case 38:case 33:Je.k.up&&Be.moveSectionUp();break;case 32:if(n&&Je.k.up){Be.moveSectionUp();break}case 40:case 34:Je.k.down&&Be.moveSectionDown();break;case 36:Je.k.up&&Be.moveTo(1);break;case 35:Je.k.down&&Be.moveTo(t(b).length);break;case 37:Je.k.left&&Be.moveSlideLeft();break;case 39:Je.k.right&&Be.moveSlideRight();break;default:return}}function Kt(t){Ke&&(t.pageY<gn&&Je.m.up?Be.moveSectionUp():t.pageY>gn&&Je.m.down&&Be.moveSectionDown()),gn=t.pageY}function Xt(e,n){var i=n.position(),r=n.index(),s=e.closest(b),l=s.index(b),c=s.data("anchor"),u=s.find(q),f=ye(n),d=s.find(F),h=Ge;if(a.onSlideLeave){var m=d.index(),v=se(m,r);if(!h&&"none"!==v&&t.isFunction(a.onSlideLeave)&&a.onSlideLeave.call(d,c,l+1,m,v,r)===!1)return void(qe=!1)}Ft(d),n.addClass(p).siblings().removeClass(p),h||$t(n),!a.loopHorizontal&&a.controlArrows&&(s.find(K).toggle(0!==r),s.find(tt).toggle(!n.is(":last-child"))),s.hasClass(p)&&me(r,f,c,l);var y=function(){h||t.isFunction(a.afterSlideLoad)&&a.afterSlideLoad.call(n,c,l+1,f,r),zt(n),qe=!1};if(a.css3){var w="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";te(e.find(D),a.scrollingSpeed>0).css(Pe(w)),en=setTimeout(function(){y()},a.scrollingSpeed,a.easing)}else e.animate({scrollLeft:o.round(i.left)},a.scrollingSpeed,a.easing,function(){y()});u.find(g).removeClass(p),u.find("li").eq(r).find("a").addClass(p)}function Jt(){if(Zt(),Ne){var e=t(n.activeElement);if(!e.is("textarea")&&!e.is("input")&&!e.is("select")){var i=et.height();o.abs(i-mn)>20*o.max(mn,i)/100&&(Be.reBuild(!0),mn=i)}}else clearTimeout(Ze),Ze=setTimeout(function(){Be.reBuild(!0)},350)}function Zt(){var t=a.responsive||a.responsiveWidth,e=a.responsiveHeight,n=t&&et.outerWidth()<t,o=e&&et.height()<e;t&&e?Be.setResponsive(n||o):t?Be.setResponsive(n):e&&Be.setResponsive(o)}function te(t){var e="all "+a.scrollingSpeed+"ms "+a.easingcss3;return t.removeClass(u),t.css({"-webkit-transition":e,transition:e})}function ee(t){return t.addClass(u)}function ne(e,n){a.navigation&&(t(A).find(g).removeClass(p),e?t(A).find('a[href="#'+e+'"]').addClass(p):t(A).find("li").eq(n).find("a").addClass(p))}function oe(e){a.menu&&(t(a.menu).find(g).removeClass(p),t(a.menu).find('[data-menuanchor="'+e+'"]').addClass(p))}function ie(t,e){oe(t),ne(t,e)}function re(e){var n=t(S).index(b),o=e.index(b);return n==o?"none":n>o?"up":"down"}function se(t,e){return t==e?"none":t>e?"left":"right"}function ae(t){if(!t.hasClass("fp-noscroll")){t.css("overflow","hidden");var e,n=a.scrollOverflowHandler,o=n.wrapContent(),i=t.closest(b),r=n.scrollable(t);r.length?e=n.scrollHeight(t):(e=t.get(0).scrollHeight,a.verticalCentered&&(e=t.find(T).get(0).scrollHeight));var s=Qe-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));e>s?r.length?n.update(t,s):(a.verticalCentered?t.find(T).wrapInner(o):t.wrapInner(o),n.create(t,s)):n.remove(t),t.css("overflow","")}}function le(t){t.addClass(R).wrapInner('<div class="'+C+'" style="height:'+ce(t)+'px;" />')}function ce(t){var e=Qe;if(a.paddingTop||a.paddingBottom){var n=t;n.hasClass(w)||(n=t.closest(b));var o=parseInt(n.css("padding-top"))+parseInt(n.css("padding-bottom"));e=Qe-o}return e}function ue(t,e){e?te(Ue):ee(Ue),Ue.css(Pe(t)),setTimeout(function(){Ue.removeClass(u)},10)}function fe(e){var n=Ue.find(b+'[data-anchor="'+e+'"]');return n.length||(n=t(b).eq(e-1)),n}function de(t,e){var n=e.find(H),o=n.find(z+'[data-anchor="'+t+'"]');return o.length||(o=n.find(z).eq(t)),o}function he(t,e){var n=fe(t);"undefined"==typeof e&&(e=0),t===De||n.hasClass(p)?pe(n,e):Ot(n,function(){pe(n,e)})}function pe(t,e){if("undefined"!=typeof e){var n=t.find(H),o=de(e,t);o.length&&Xt(n,o)}}function ge(t,e){t.append('<div class="'+W+'"><ul></ul></div>');var n=t.find(q);n.addClass(a.slidesNavPosition);for(var o=0;o<e;o++)n.find("ul").append('<li><a href="#"><span></span></a></li>');n.css("margin-left","-"+n.width()/2+"px"),n.find("li").first().find("a").addClass(p)}function me(t,e,n,o){var i="";a.anchors.length&&!a.lockAnchors&&(t?("undefined"!=typeof n&&(i=n),"undefined"==typeof e&&(e=t),Re=e,ve(i+"/"+e)):"undefined"!=typeof t?(Re=e,ve(n)):ve(n)),we()}function ve(t){if(a.recordHistory)location.hash=t;else if(Ne||Ve)e.history.replaceState(i,i,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function ye(t){var e=t.data("anchor"),n=t.index();return"undefined"==typeof e&&(e=n),e}function we(){var e=t(S),n=e.find(F),o=ye(e),i=ye(n),r=String(o);n.length&&(r=r+"-"+i),r=r.replace("/","-").replace("#","");var s=new RegExp("\\b\\s?"+h+"-[^\\s]+\\b","g");He[0].className=He[0].className.replace(s,""),He.addClass(h+"-"+r)}function be(){var t,o=n.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(o,null);for(var s in r)o.style[s]!==i&&(o.style[s]="translate3d(1px,1px,1px)",t=e.getComputedStyle(o).getPropertyValue(r[s]));return n.body.removeChild(o),t!==i&&t.length>0&&"none"!==t}function Se(){n.addEventListener?(n.removeEventListener("mousewheel",Ct,!1),n.removeEventListener("wheel",Ct,!1),n.removeEventListener("MozMousePixelScroll",Ct,!1)):n.detachEvent("onmousewheel",Ct)}function xe(){var t,o="";e.addEventListener?t="addEventListener":(t="attachEvent",o="on");var r="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?n[t](o+"MozMousePixelScroll",Ct,!1):n[t](o+r,Ct,!1)}function _e(){Ue.on("mousedown",qt).on("mouseup",Nt)}function Ce(){Ue.off("mousedown",qt).off("mouseup",Nt)}function Te(){if(Ne||Ve){var e=Ee();t(s).off("touchstart "+e.down).on("touchstart "+e.down,xt),t(s).off("touchmove "+e.move).on("touchmove "+e.move,wt)}}function ke(){if(Ne||Ve){var e=Ee();t(s).off("touchstart "+e.down),t(s).off("touchmove "+e.move)}}function Ee(){var t;return t=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Oe(t){var e=[];return e.y="undefined"!=typeof t.pageY&&(t.pageY||t.pageX)?t.pageY:t.touches[0].pageY,e.x="undefined"!=typeof t.pageX&&(t.pageY||t.pageX)?t.pageX:t.touches[0].pageX,Ve&&St(t)&&a.scrollBar&&(e.y=t.touches[0].pageY,e.x=t.touches[0].pageX),e}function Ae(t,e){Be.setScrollingSpeed(0,"internal"),"undefined"!=typeof e&&(Ge=!0),Xt(t.closest(H),t),"undefined"!=typeof e&&(Ge=!1),Be.setScrollingSpeed(sn.scrollingSpeed,"internal")}function Me(t){if(a.scrollBar)Ue.scrollTop(t);else if(a.css3){var e="translate3d(0px, -"+t+"px, 0px)";ue(e,!1)}else Ue.css("top",-t)}function Pe(t){return{"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t}}function Le(t,e,n){switch(e){case"up":Je[n].up=t;break;case"down":Je[n].down=t;break;case"left":Je[n].left=t;break;case"right":Je[n].right=t;break;case"all":"m"==n?Be.setAllowScrolling(t):Be.setKeyboardScrolling(t)}}function Ie(){Me(0),Ue.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){t(this).attr("src",t(this).data("src")),t(this).removeAttr("data-src")}),t(A+", "+q+", "+U).remove(),t(b).css({height:"","background-color":"",padding:""}),t(z).css({width:""}),Ue.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),je.css({overflow:"",height:""}),t("html").removeClass(d),He.removeClass(c),t.each(He.get(0).className.split(/\s+/),function(t,e){0===e.indexOf(h)&&He.removeClass(e)}),t(b+", "+z).each(function(){a.scrollOverflowHandler.remove(t(this)),t(this).removeClass(R+" "+p)}),ee(Ue),Ue.find(T+", "+D+", "+H).each(function(){t(this).replaceWith(this.childNodes)}),je.scrollTop(0);var e=[w,$,B];t.each(e,function(e,n){t("."+n).removeClass(n)})}function $e(t,e,n){a[t]=e,"internal"!==n&&(sn[t]=e)}function ze(){return t("html").hasClass(d)?void Fe("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(a.continuousVertical&&(a.loopTop||a.loopBottom)&&(a.continuousVertical=!1,Fe("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),a.scrollBar&&a.scrollOverflow&&Fe("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),a.continuousVertical&&a.scrollBar&&(a.continuousVertical=!1,Fe("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),void t.each(a.anchors,function(e,n){var o=nt.find("[name]").filter(function(){return t(this).attr("name")&&t(this).attr("name").toLowerCase()==n.toLowerCase()}),i=nt.find("[id]").filter(function(){return t(this).attr("id")&&t(this).attr("id").toLowerCase()==n.toLowerCase()});(i.length||o.length)&&(Fe("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&Fe("error",'"'+n+'" is is being used by another element `id` property'),o.length&&Fe("error",'"'+n+'" is is being used by another element `name` property'))}))}function Fe(t,e){console&&console[t]&&console[t]("fullPage: "+e)}if(t("html").hasClass(d))return void ze();var je=t("html, body"),He=t("body"),Be=t.fn.fullpage;a=t.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:it,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:y,slideSelector:I,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},a);var De,Re,We,qe=!1,Ne=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Ve="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ue=t(this),Qe=et.height(),Ge=!1,Ye=!0,Ke=!0,Xe=[],Je={};Je.m={up:!0,down:!0,left:!0,right:!0},Je.k=t.extend(!0,{},Je.m);var Ze,tn,en,nn,on,rn,sn=t.extend(!0,{},a);ze(),ot.click=Ve,ot=t.extend(ot,a.scrollOverflowOptions),t.extend(t.easing,{easeInOutCubic:function(t,e,n,o,i){return(e/=i/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n}}),Be.setAutoScrolling=function(e,n){$e("autoScrolling",e,n);var o=t(S);a.autoScrolling&&!a.scrollBar?(je.css({overflow:"hidden",height:"100%"}),Be.setRecordHistory(sn.recordHistory,"internal"),Ue.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&Me(o.position().top)):(je.css({overflow:"visible",height:"initial"}),Be.setRecordHistory(!1,"internal"),Ue.css({"-ms-touch-action":"","touch-action":""}),Me(0),o.length&&je.scrollTop(o.position().top))},Be.setRecordHistory=function(t,e){$e("recordHistory",t,e)},Be.setScrollingSpeed=function(t,e){$e("scrollingSpeed",t,e)},Be.setFitToSection=function(t,e){$e("fitToSection",t,e)},Be.setLockAnchors=function(t){a.lockAnchors=t},Be.setMouseWheelScrolling=function(t){t?(xe(),_e()):(Se(),Ce())},Be.setAllowScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),t.each(n,function(t,n){Le(e,n,"m")})):e?(Be.setMouseWheelScrolling(!0),Te()):(Be.setMouseWheelScrolling(!1),ke())},Be.setKeyboardScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),t.each(n,function(t,n){Le(e,n,"k")})):a.keyboardScrolling=e},Be.moveSectionUp=function(){var e=t(S).prev(b);e.length||!a.loopTop&&!a.continuousVertical||(e=t(b).last()),e.length&&Ot(e,null,!0)},Be.moveSectionDown=function(){var e=t(S).next(b);e.length||!a.loopBottom&&!a.continuousVertical||(e=t(b).first()),e.length&&Ot(e,null,!1)},Be.silentMoveTo=function(t,e){Be.setScrollingSpeed(0,"internal"),Be.moveTo(t,e),Be.setScrollingSpeed(sn.scrollingSpeed,"internal")},Be.moveTo=function(t,e){var n=fe(t);"undefined"!=typeof e?he(t,e):n.length>0&&Ot(n)},Be.moveSlideRight=function(t){Tt("next",t)},Be.moveSlideLeft=function(t){Tt("prev",t)},Be.reBuild=function(e){if(!Ue.hasClass(f)){Ge=!0,Qe=et.height(),t(b).each(function(){var e=t(this).find(H),n=t(this).find(z);a.verticalCentered&&t(this).find(T).css("height",ce(t(this))+"px"),t(this).css("height",Qe+"px"),a.scrollOverflow&&(n.length?n.each(function(){ae(t(this))}):ae(t(this))),n.length>1&&Xt(e,e.find(F))});var n=t(S),o=n.index(b);o&&Be.silentMoveTo(o+1),Ge=!1,t.isFunction(a.afterResize)&&e&&a.afterResize.call(Ue),t.isFunction(a.afterReBuild)&&!e&&a.afterReBuild.call(Ue)}},Be.setResponsive=function(e){var n=He.hasClass(c);e?n||(Be.setAutoScrolling(!1,"internal"),Be.setFitToSection(!1,"internal"),t(A).hide(),He.addClass(c)):n&&(Be.setAutoScrolling(sn.autoScrolling,"internal"),Be.setFitToSection(sn.autoScrolling,"internal"),t(A).show(),He.removeClass(c))},t(this).length&&(l(),V());var an=!1,ln=0,cn=0,un=0,fn=0,dn=0,hn=(new Date).getTime(),pn=0,gn=0,mn=Qe;Be.destroy=function(e){Be.setAutoScrolling(!1,"internal"),Be.setAllowScrolling(!1),Be.setKeyboardScrolling(!1),Ue.addClass(f),clearTimeout(en),clearTimeout(tn),clearTimeout(Ze),clearTimeout(nn),clearTimeout(on),et.off("scroll",gt).off("hashchange",Bt).off("resize",Jt),nt.off("click",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click",N).off("mouseover",a.normalScrollElements).off("mouseout",a.normalScrollElements),t(b).off("click",U),clearTimeout(en),clearTimeout(tn),e&&Ie()}},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var it={refreshId:null,iScrollInstances:[],onLeave:function(){var e=t(S).find(l).data("iscrollInstance");"undefined"!=typeof e&&e&&e.wheelOff()},afterLoad:function(){var e=t(S).find(l).data("iscrollInstance");"undefined"!=typeof e&&e&&e.wheelOn()},create:function(e,n){var o=e.find(l);o.height(n),o.each(function(){var e=jQuery(this),n=e.data("iscrollInstance");n&&t.each(it.iScrollInstances,function(){t(this).destroy()}),n=new IScroll(e.get(0),ot),it.iScrollInstances.push(n),e.data("iscrollInstance",n)})},isScrolled:function(t,e){var n=e.data("iscrollInstance");return!n||("top"===t?n.y>=0&&!e.scrollTop():"bottom"===t?0-n.y+e.scrollTop()+1+e.innerHeight()>=e[0].scrollHeight:void 0)},scrollable:function(t){return t.find(H).length?t.find(F).find(l):t.find(l)},scrollHeight:function(t){return t.find(l).children().first().get(0).scrollHeight},remove:function(t){var e=t.find(l);if(e.length){var n=e.data("iscrollInstance");n.destroy(),e.data("iscrollInstance",null)}t.find(l).children().first().children().first().unwrap().unwrap()},update:function(e,n){clearTimeout(it.refreshId),it.refreshId=setTimeout(function(){t.each(it.iScrollInstances,function(){t(this).get(0).refresh()})},150),e.find(l).css("height",n+"px").parent().css("height",n+"px")},wrapContent:function(){return'<div class="'+a+'"><div class="fp-scroller"></div></div>'}}}),!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in n)e.push(n[o]);for(var i=0,r=e.length;r>i;i++)e[i][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,n+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,o={},i=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,i.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||i.isTouch)&&(e.didScroll=!0,i.requestAnimationFrame(t))})},e.prototype.handleResize=function(){i.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var o=e[n],i=o.newScroll>o.oldScroll,r=i?o.forward:o.backward;for(var s in this.waypoints[n]){var a=this.waypoints[n][s],l=o.oldScroll<a.triggerPoint,c=o.newScroll>=a.triggerPoint,u=l&&c,f=!l&&!c;(u||f)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var d in t)t[d].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var o=0,i=t.length;i>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,c,u,f,d,h=this.waypoints[r][a],p=h.options.offset,g=h.triggerPoint,m=0,v=null==g;h.element!==h.element.window&&(m=h.adapter.offset()[s.offsetProp]),"function"==typeof p?p=p.apply(h):"string"==typeof p&&(p=parseFloat(p),h.options.offset.indexOf("%")>-1&&(p=Math.ceil(s.contextDimension*p/100))),l=s.contextScroll-s.contextOffset,h.triggerPoint=m+l-p,c=g<s.oldScroll,u=h.triggerPoint>=s.oldScroll,f=c&&u,d=!c&&!u,!v&&f?(h.queueTrigger(s.backward),o[h.group.id]=h.group):!v&&d?(h.queueTrigger(s.forward),o[h.group.id]=h.group):v&&s.oldScroll>=h.triggerPoint&&(h.queueTrigger(s.forward),o[h.group.id]=h.group)}}return i.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},i.requestAnimationFrame=function(e){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;n.call(window,e)},i.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},i=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var o=this.triggerQueues[n],i="up"===n||"left"===n;o.sort(i?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints),o=n===this.waypoints.length-1;return o?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return o[t.axis][t.name]||new n(t)},i.Group=n}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,n=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,n){
t.prototype[n]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[n].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(n,o){t[o]=e[o]}),n.adapters.push({name:"jquery",Adapter:t}),n.Adapter=t}(),function(){"use strict";function t(t){return function(){var n=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var i=t.extend({},o,{element:this});"string"==typeof i.context&&(i.context=t(this).closest(i.context)[0]),n.push(new e(i))}),n}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),window.Modernizr=function(t,e,n){function o(t){y.cssText=t}function i(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var o in t){var i=t[o];if(!r(i,"-")&&y[i]!==n)return"pfx"!=e||i}return!1}function a(t,e,o){for(var r in t){var s=e[t[r]];if(s!==n)return o===!1?t[r]:i(s,"function")?s.bind(o||e):s}return!1}function l(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+x.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?s(r,e):(r=(t+" "+_.join(o+" ")+o).split(" "),a(r,e,n))}var c,u,f,d="2.8.3",h={},p=!0,g=e.documentElement,m="modernizr",v=e.createElement(m),y=v.style,w={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",x=S.split(" "),_=S.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},T={},k=[],E=k.slice,O=function(t,n,o,i){var r,s,a,l,c=e.createElement("div"),u=e.body,f=u||e.createElement("body");if(parseInt(o,10))for(;o--;)a=e.createElement("div"),a.id=i?i[o]:m+(o+1),c.appendChild(a);return r=["&#173;",'<style id="s',m,'">',t,"</style>"].join(""),c.id=m,(u?c:f).innerHTML+=r,f.appendChild(c),u||(f.style.background="",f.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),s=n(c,t),u?c.parentNode.removeChild(c):(f.parentNode.removeChild(f),g.style.overflow=l),!!s},A=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var o;return O("@media "+e+" { #"+m+" { position: absolute; } }",function(e){o="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),o},M={}.hasOwnProperty;f=i(M,"undefined")||i(M.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return M.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=E.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var r=new i,s=e.apply(r,n.concat(E.call(arguments)));return Object(s)===s?s:r}return e.apply(t,n.concat(E.call(arguments)))};return o}),T.flexbox=function(){return l("flexWrap")},T.flexboxlegacy=function(){return l("boxDirection")},T.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:O(["@media (",b.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in g.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,n){t=9===e.offsetLeft&&3===e.offsetHeight}),t},T.csstransitions=function(){return l("transition")},T.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return n},T.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n},T.svg=function(){return!!e.createElementNS&&!!e.createElementNS(C.svg,"svg").createSVGRect},T.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==C.svg},T.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(C.svg,"clipPath")))};for(var P in T)f(T,P)&&(u=P.toLowerCase(),h[u]=T[P](),k.push((h[u]?"":"no-")+u));return h.addTest=function(t,e){if("object"==typeof t)for(var o in t)f(t,o)&&h.addTest(o,t[o]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof p&&p&&(g.className+=" "+(e?"":"no-")+t),h[t]=e}return h},o(""),v=c=null,function(t,e){function n(t,e){var n=t.createElement("p"),o=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=v[t[g]];return e||(e={},m++,t[g]=m,v[m]=e),e}function r(t,n,o){if(n||(n=e),u)return n.createElement(t);o||(o=i(n));var r;return r=o.cache[t]?o.cache[t].cloneNode():p.test(t)?(o.cache[t]=o.createElem(t)).cloneNode():o.createElem(t),!r.canHaveChildren||h.test(t)||r.tagUrn?r:o.frag.appendChild(r)}function s(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||i(t);for(var r=n.frag.cloneNode(),s=0,a=o(),l=a.length;s<l;s++)r.createElement(a[s]);return r}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?r(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function l(t){t||(t=e);var o=i(t);return y.shivCSS&&!c&&!o.hasCSS&&(o.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||a(t,o),t}var c,u,f="3.7.0",d=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,u=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:s};t.html5=y,l(e)}(this,e),h._version=d,h._prefixes=b,h._domPrefixes=_,h._cssomPrefixes=x,h.mq=A,h.testProp=function(t){return s([t])},h.testAllProps=l,h.testStyles=O,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+k.join(" "):""),h}(this,this.document),function(t,e,n){function o(t){return"[object Function]"==m.call(t)}function i(t){return"string"==typeof t}function r(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=v.shift();y=1,t?t.t?p(function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):y=0}function l(t,n,o,i,r,l,c){function u(e){if(!h&&s(f.readyState)&&(w.r=h=1,!y&&a(),f.onload=f.onreadystatechange=null,e)){"img"!=t&&p(function(){S.removeChild(f)},50);for(var o in k[n])k[n].hasOwnProperty(o)&&k[n][o].onload()}}var c=c||d.errorTimeout,f=e.createElement(t),h=0,m=0,w={t:o,s:n,e:r,a:l,x:c};1===k[n]&&(m=1,k[n]=[]),"object"==t?f.data=n:(f.src=n,f.type=t),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,m)},v.splice(i,0,w),"img"!=t&&(m||2===k[n]?(S.insertBefore(f,b?null:g),p(u,c)):k[n].push(f))}function c(t,e,n,o,r){return y=0,e=e||"j",i(t)?l("c"==e?_:x,t,e,this.i++,n,o,r):(v.splice(this.i++,0,t),1==v.length&&a()),this}function u(){var t=d;return t.loader={load:c,i:0},t}var f,d,h=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,w="MozAppearance"in h.style,b=w&&!!e.createRange().compareNode,S=b?h:g.parentNode,h=t.opera&&"[object Opera]"==m.call(t.opera),h=!!e.attachEvent&&!h,x=w?"object":h?"script":"img",_=h?"script":x,C=Array.isArray||function(t){return"[object Array]"==m.call(t)},T=[],k={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};d=function(t){function e(t){var e,n,o,t=t.split("!"),i=T.length,r=t.pop(),s=t.length,r={url:r,origUrl:r,prefixes:t};for(n=0;n<s;n++)o=t[n].split("="),(e=E[o.shift()])&&(r=e(r,o));for(n=0;n<i;n++)r=T[n](r);return r}function s(t,i,r,s,a){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(i&&(i=o(i)?i:i[t]||i[s]||i[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,i,r,s,a):(k[l.url]?l.noexec=!0:k[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(o(i)||o(c))&&r.load(function(){u(),i&&i(l.origUrl,a,s),c&&c(l.origUrl,a,s),k[l.url]=2})))}function a(t,e){function n(t,n){if(t){if(i(t))n||(f=function(){var t=[].slice.call(arguments);d.apply(this,t),h()}),s(t,f,e,0,c);else if(Object(t)===t)for(l in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(l)&&(!n&&!--a&&(o(f)?f=function(){var t=[].slice.call(arguments);d.apply(this,t),h()}:f[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),h()}}(d[l])),s(t[l],f,e,l,c))}else!n&&h()}var a,l,c=!!t.test,u=t.load||t.both,f=t.callback||r,d=f,h=t.complete||r;n(c?t.yep:t.nope,!!u),u&&n(u)}var l,c,f=this.yepnope.loader;if(i(t))s(t,0,f,0);else if(C(t))for(l=0;l<t.length;l++)c=t[l],i(c)?s(c,0,f,0):C(c)?d(c):Object(c)===c&&a(c,f);else Object(t)===t&&a(t,f)},d.addPrefix=function(t,e){E[t]=e},d.addFilter=function(t){T.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,o,i,l,c){var u,f,h=e.createElement("script"),i=i||d.errorTimeout;h.src=t;for(f in o)h.setAttribute(f,o[f]);n=c?a:n||r,h.onreadystatechange=h.onload=function(){!u&&s(h.readyState)&&(u=1,n(),h.onload=h.onreadystatechange=null)},p(function(){u||(u=1,n(1))},i),l?h.onload():g.parentNode.insertBefore(h,g)},t.yepnope.injectCss=function(t,n,o,i,s,l){var c,i=e.createElement("link"),n=l?a:n||r;i.href=t,i.rel="stylesheet",i.type="text/css";for(c in o)i.setAttribute(c,o[c]);s||(g.parentNode.insertBefore(i,g),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},jQuery(function(t){t("body.portal:not(.fsComposeMode)").length&&(t(".portal-hero").insertBefore("#fsPageBodyWrapper"),t(".portal-sub-nav").clone().addClass("portal-sub-mobile").insertBefore("#fsPageBodyWrapper"),t(".portal-sub-mobile").prepend('<div class="sub-trigger">More Pages</div>'),t(".sub-trigger").click(function(){t(this).parent().toggleClass("active")}),backgroundImage(t(".portal-news a.fsThumbnail")),backgroundImage(t(".portal-directory .fsPhoto")),t(".portal-cal footer .fsElementFooterContent").appendTo(".portal-cal > .fsElementContent > .fsListItems"),t(".portal-student-announcements").prependTo("#fsPageBody"),t(".portal-photos").insertAfter("#fsPageBodyWrapper"))}),!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.ProgressBar=t()}}(function(){var t;return function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,n,o){(function(){var e=this||Function("return this")(),i=function(){"use strict";function i(){}function r(t,e){var n;for(n in t)Object.hasOwnProperty.call(t,n)&&e(n)}function s(t,e){return r(e,function(n){t[n]=e[n]}),t}function a(t,e){r(e,function(n){"undefined"==typeof t[n]&&(t[n]=e[n])})}function l(t,e,n,o,i,r,s){var a,l,u,f=r>t?0:(t-r)/i;for(a in e)e.hasOwnProperty(a)&&(l=s[a],u="function"==typeof l?l:p[l],e[a]=c(n[a],o[a],u,f));return e}function c(t,e,n,o){return t+(e-t)*n(o)}function u(t,e){var n=h.prototype.filter,o=t._filterArgs;r(n,function(i){"undefined"!=typeof n[i][e]&&n[i][e].apply(t,o)})}function f(t,e,n,o,i,r,s,a,c,f,d){S=e+n+o,x=Math.min(d||b(),S),_=x>=S,C=o-(S-x),t.isPlaying()&&(_?(c(s,t._attachment,C),t.stop(!0)):(t._scheduleId=f(t._timeoutHandler,y),u(t,"beforeTween"),e+n>x?l(1,i,r,s,1,1,a):l(x,i,r,s,o,e+n,a),u(t,"afterTween"),c(i,t._attachment,C)))}function d(t,e){var n={},o=typeof e;return"string"===o||"function"===o?r(t,function(t){n[t]=e}):r(t,function(t){n[t]||(n[t]=e[t]||m)}),n}function h(t,e){this._currentState=t||{},this._configured=!1,this._scheduleFunction=g,"undefined"!=typeof e&&this.setConfig(e)}var p,g,m="linear",v=500,y=1e3/60,w=Date.now?Date.now:function(){return+new Date},b="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:w;g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var S,x,_,C;return h.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=b(),this._start(this.get(),this._attachment),this.resume())},h.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||i,this._step=t.step||i,this._finish=t.finish||i,this._duration=t.duration||v,this._currentState=s({},t.from)||this.get(),this._originalState=this.get(),this._targetState=s({},t.to)||this.get();var e=this;this._timeoutHandler=function(){f(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var n=this._currentState,o=this._targetState;return a(o,n),this._easing=d(n,t.easing||m),this._filterArgs=[n,this._originalState,o,this._easing],u(this,"tweenCreated"),this},h.prototype.get=function(){return s({},this._currentState)},h.prototype.set=function(t){this._currentState=t},h.prototype.pause=function(){return this._pausedAtTime=b(),this._isPaused=!0,this},h.prototype.resume=function(){return this._isPaused&&(this._timestamp+=b()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},h.prototype.seek=function(t){t=Math.max(t,0);var e=b();return this._timestamp+t===0?this:(this._timestamp=e-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,f(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,e),this.pause()),this)},h.prototype.stop=function(t){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=i,(e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||e.mozCancelRequestAnimationFrame||e.clearTimeout)(this._scheduleId),t&&(u(this,"beforeTween"),l(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),u(this,"afterTween"),u(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},h.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},h.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},h.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},h.prototype.filter={},h.prototype.formula={linear:function(t){return t}},p=h.prototype.formula,s(h,{now:b,each:r,tweenProps:l,tweenProp:c,applyFilter:u,shallowCopy:s,defaults:a,composeEasingObject:d}),"function"==typeof SHIFTY_DEBUG_NOW&&(e.timeoutHandler=f),"object"==typeof o?n.exports=h:"function"==typeof t&&t.amd?t(function(){return h}):"undefined"==typeof e.Tweenable&&(e.Tweenable=h),h}();!function(){i.shallowCopy(i.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return-Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},swingFromTo:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},swingFrom:function(t){var e=1.70158;return t*t*((e+1)*t-e)},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?2-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}})}(),function(){function t(t,e,n,o,i,r){function s(t){return((h*t+p)*t+g)*t}function a(t){return((m*t+v)*t+y)*t}function l(t){return(3*h*t+2*p)*t+g}function c(t){return 1/(200*t)}function u(t,e){return a(d(t,e))}function f(t){return t>=0?t:0-t}function d(t,e){var n,o,i,r,a,c;for(i=t,c=0;8>c;c++){if(r=s(i)-t,f(r)<e)return i;if(a=l(i),f(a)<1e-6)break;i-=r/a}if(n=0,o=1,i=t,n>i)return n;if(i>o)return o;for(;o>n;){if(r=s(i),f(r-t)<e)return i;t>r?n=i:o=i,i=.5*(o-n)+n}return i}var h=0,p=0,g=0,m=0,v=0,y=0;return g=3*e,p=3*(o-e)-g,h=1-g-p,y=3*n,v=3*(i-n)-y,m=1-y-v,u(t,c(r))}function e(e,n,o,i){return function(r){return t(r,e,n,o,i,1)}}i.setBezierFunction=function(t,n,o,r,s){var a=e(n,o,r,s);return a.displayName=t,a.x1=n,a.y1=o,a.x2=r,a.y2=s,i.prototype.formula[t]=a},i.unsetBezierFunction=function(t){delete i.prototype.formula[t]}}(),function(){function t(t,e,n,o,r,s){return i.tweenProps(o,e,t,n,1,s,r)}var e=new i;e._filterArgs=[],i.interpolate=function(n,o,r,s,a){var l=i.shallowCopy({},n),c=a||0,u=i.composeEasingObject(n,s||"linear");e.set({});var f=e._filterArgs;f.length=0,f[0]=l,f[1]=n,f[2]=o,f[3]=u,i.applyFilter(e,"tweenCreated"),i.applyFilter(e,"beforeTween");var d=t(n,l,o,r,u,c);return i.applyFilter(e,"afterTween"),d}}(),function(t){function e(t,e){var n,o=[],i=t.length;for(n=0;i>n;n++)o.push("_"+e+"_"+n);return o}function n(t){var e=t.match(S);return e?(1===e.length||t[0].match(b))&&e.unshift(""):e=["",""],e.join(k)}function o(e){t.each(e,function(t){var n=e[t];"string"==typeof n&&n.match(T)&&(e[t]=i(n))})}function i(t){return l(T,t,r)}function r(t){var e=s(t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function s(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),E[0]=a(t.substr(0,2)),E[1]=a(t.substr(2,2)),E[2]=a(t.substr(4,2)),E}function a(t){return parseInt(t,16)}function l(t,e,n){var o=e.match(t),i=e.replace(t,k);if(o)for(var r,s=o.length,a=0;s>a;a++)r=o.shift(),i=i.replace(k,n(r));return i}function c(t){return l(_,t,u)}function u(t){for(var e=t.match(x),n=e.length,o=t.match(C)[0],i=0;n>i;i++)o+=parseInt(e[i],10)+",";return o=o.slice(0,-1)+")"}function f(o){var i={};return t.each(o,function(t){var r=o[t];if("string"==typeof r){var s=v(r);i[t]={formatString:n(r),chunkNames:e(s,t)}}}),i}function d(e,n){t.each(n,function(t){for(var o=e[t],i=v(o),r=i.length,s=0;r>s;s++)e[n[t].chunkNames[s]]=+i[s];delete e[t]})}function h(e,n){t.each(n,function(t){var o=e[t],i=p(e,n[t].chunkNames),r=g(i,n[t].chunkNames);o=m(n[t].formatString,r),e[t]=c(o)})}function p(t,e){for(var n,o={},i=e.length,r=0;i>r;r++)n=e[r],o[n]=t[n],delete t[n];return o}function g(t,e){O.length=0;for(var n=e.length,o=0;n>o;o++)O.push(t[e[o]]);return O}function m(t,e){for(var n=t,o=e.length,i=0;o>i;i++)n=n.replace(k,+e[i].toFixed(4));return n}function v(t){return t.match(x)}function y(e,n){t.each(n,function(t){var o,i=n[t],r=i.chunkNames,s=r.length,a=e[t];if("string"==typeof a){var l=a.split(" "),c=l[l.length-1];for(o=0;s>o;o++)e[r[o]]=l[o]||c}else for(o=0;s>o;o++)e[r[o]]=a;delete e[t]})}function w(e,n){t.each(n,function(t){var o=n[t],i=o.chunkNames,r=i.length,s=e[i[0]],a=typeof s;if("string"===a){for(var l="",c=0;r>c;c++)l+=" "+e[i[c]],delete e[i[c]];e[t]=l.substr(1)}else e[t]=s})}var b=/(\d|\-|\.)/,S=/([^\-0-9\.]+)/g,x=/[0-9.\-]+/g,_=new RegExp("rgb\\("+x.source+/,\s*/.source+x.source+/,\s*/.source+x.source+"\\)","g"),C=/^.*\(/,T=/#([0-9]|[a-f]){3,6}/gi,k="VAL",E=[],O=[];t.prototype.filter.token={tweenCreated:function(t,e,n,i){o(t),o(e),o(n),this._tokenData=f(t)},beforeTween:function(t,e,n,o){y(o,this._tokenData),d(t,this._tokenData),d(e,this._tokenData),d(n,this._tokenData)},afterTween:function(t,e,n,o){h(t,this._tokenData),h(e,this._tokenData),h(n,this._tokenData),w(o,this._tokenData)}}}(i)}).call(null)},{}],2:[function(t,e,n){var o=t("./shape"),i=t("./utils"),r=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,o.apply(this,arguments)};r.prototype=new o,r.prototype.constructor=r,r.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var n=50-e/2;return i.render(this._pathTemplate,{radius:n,"2radius":2*n})},r.prototype._trailString=function(t){return this._pathString(t)},e.exports=r},{"./shape":7,"./utils":8}],3:[function(t,e,n){var o=t("./shape"),i=t("./utils"),r=function(t,e){this._pathTemplate="M 0,{center} L 100,{center}",o.apply(this,arguments)};r.prototype=new o,r.prototype.constructor=r,r.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},r.prototype._pathString=function(t){return i.render(this._pathTemplate,{center:t.strokeWidth/2})},r.prototype._trailString=function(t){return this._pathString(t)},e.exports=r},{"./shape":7,"./utils":8}],4:[function(t,e,n){e.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./utils":8}],5:[function(t,e,n){var o=t("shifty"),i=t("./utils"),r={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},s=function a(t,e){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");e=i.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},e);var n;n=i.isString(t)?document.querySelector(t):t,this.path=n,this._opts=e,this._tweenable=null;var o=this.path.getTotalLength();this.path.style.strokeDasharray=o+" "+o,this.set(0)};s.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength(),n=1-t/e;return parseFloat(n.toFixed(6),10)},s.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(i.isFunction(e)){var n=this._easing(this._opts.easing),o=this._calculateTo(t,n),r=this._opts.shape||this;e(o,r,this._opts.attachment)}},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},s.prototype.animate=function(t,e,n){e=e||{},i.isFunction(e)&&(n=e,e={});var r=i.extend({},e),s=i.extend({},this._opts);e=i.extend(s,e);var a=this._easing(e.easing),l=this._resolveFromAndTo(t,a,r);this.stop(),this.path.getBoundingClientRect();var c=this._getComputedDashOffset(),u=this._progressToOffset(t),f=this;this._tweenable=new o,this._tweenable.tween({from:i.extend({offset:c},l.from),to:i.extend({offset:u},l.to),duration:e.duration,easing:a,step:function(t){f.path.style.strokeDashoffset=t.offset;var n=e.shape||f;e.step(t,n,e.attachment)},finish:function(t){i.isFunction(n)&&n()}})},s.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},s.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},s.prototype._resolveFromAndTo=function(t,e,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},s.prototype._calculateFrom=function(t){return o.interpolate(this._opts.from,this._opts.to,this.value(),t)},s.prototype._calculateTo=function(t,e){return o.interpolate(this._opts.from,this._opts.to,t,e)},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null)},s.prototype._easing=function(t){return r.hasOwnProperty(t)?r[t]:t},e.exports=s},{"./utils":8,shifty:1}],6:[function(t,e,n){var o=t("./shape"),i=t("./circle"),r=t("./utils"),s=function(t,e){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,o.apply(this,arguments)};s.prototype=new o,s.prototype.constructor=s,s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 50")},s.prototype._initializeTextContainer=function(t,e,n){t.text.style&&(n.style.top="auto",n.style.bottom="0",t.text.alignToBottom?r.setStyle(n,"transform","translate(-50%, 0)"):r.setStyle(n,"transform","translate(-50%, 50%)"))},s.prototype._pathString=i.prototype._pathString,s.prototype._trailString=i.prototype._trailString,e.exports=s},{"./circle":2,"./shape":7,"./utils":8}],7:[function(t,e,n){var o=t("./path"),i=t("./utils"),r="Object is destroyed",s=function a(t,e){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=i.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},e,!0),i.isObject(e)&&void 0!==e.svgStyle&&(this._opts.svgStyle=e.svgStyle),i.isObject(e)&&i.isObject(e.text)&&void 0!==e.text.style&&(this._opts.text.style=e.text.style);var n,r=this._createSvgView(this._opts);if(n=i.isString(t)?document.querySelector(t):t,!n)throw new Error("Container does not exist: "+t);this._container=n,this._container.appendChild(r.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&i.setStyles(r.svg,this._opts.svgStyle),this.svg=r.svg,this.path=r.path,this.trail=r.trail,this.text=null;var s=i.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new o(r.path,s),i.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};s.prototype.animate=function(t,e,n){if(null===this._progressPath)throw new Error(r);this._progressPath.animate(t,e,n)},s.prototype.stop=function(){if(null===this._progressPath)throw new Error(r);void 0!==this._progressPath&&this._progressPath.stop()},s.prototype.destroy=function(){if(null===this._progressPath)throw new Error(r);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},s.prototype.set=function(t){if(null===this._progressPath)throw new Error(r);this._progressPath.set(t)},s.prototype.value=function(){if(null===this._progressPath)throw new Error(r);return void 0===this._progressPath?0:this._progressPath.value()},s.prototype.setText=function(t){if(null===this._progressPath)throw new Error(r);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),i.isObject(t)?(i.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},s.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var n=null;(t.trailColor||t.trailWidth)&&(n=this._createTrail(t),e.appendChild(n));var o=this._createPath(t);return e.appendChild(o),{svg:e,path:o,trail:n}},s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},s.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},s.prototype._createTrail=function(t){var e=this._trailString(t),n=i.extend({},t);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(e,n)},s.prototype._createPathElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("stroke",e.color),n.setAttribute("stroke-width",e.strokeWidth),e.fill?n.setAttribute("fill",e.fill):n.setAttribute("fill-opacity","0"),n},s.prototype._createTextContainer=function(t,e){var n=document.createElement("div");n.className=t.text.className;var o=t.text.style;return o&&(t.text.autoStyleContainer&&(e.style.position="relative"),i.setStyles(n,o),o.color||(n.style.color=t.color)),this._initializeTextContainer(t,e,n),n},s.prototype._initializeTextContainer=function(t,e,n){},s.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._warnContainerAspectRatio=function(t){
if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),n=parseFloat(e.getPropertyValue("width"),10),o=parseFloat(e.getPropertyValue("height"),10);i.floatEquals(this.containerAspectRatio,n/o)||(console.warn("Incorrect aspect ratio of container","#"+t.id,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",n/o),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},e.exports=s},{"./path":5,"./utils":8}],8:[function(t,e,n){function o(t,e,n){t=t||{},e=e||{},n=n||!1;for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],s=e[i];n&&f(r)&&f(s)?t[i]=o(r,s,n):t[i]=s}return t}function i(t,e){var n=t;for(var o in e)if(e.hasOwnProperty(o)){var i=e[o],r="\\{"+o+"\\}",s=new RegExp(r,"g");n=n.replace(s,i)}return n}function r(t,e,n){for(var o=t.style,i=0;i<g.length;++i){var r=g[i];o[r+a(e)]=n}o[e]=n}function s(t,e){d(e,function(e,n){null!==e&&void 0!==e&&(f(e)&&e.prefix===!0?r(t,n,e.value):t.style[n]=e)})}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t){return"string"==typeof t||t instanceof String}function c(t){return"function"==typeof t}function u(t){return"[object Array]"===Object.prototype.toString.call(t)}function f(t){if(u(t))return!1;var e=typeof t;return"object"===e&&!!t}function d(t,e){for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];e(o,n)}}function h(t,e){return Math.abs(t-e)<m}function p(t){for(;t.firstChild;)t.removeChild(t.firstChild)}var g="Webkit Moz O ms".split(" "),m=.001;e.exports={extend:o,render:i,setStyle:r,setStyles:s,capitalize:a,isString:l,isFunction:c,isObject:f,forEachObject:d,floatEquals:h,removeChildren:p}},{}]},{},[4])(4)}),!function(t,e,n,o){function i(e,n){this.element=e,this.options=t.extend({},s,n),this._defaults=s,this._name=r,this.init()}var r="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},a={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[u];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[u];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},l={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,n,o,i){t[0].style[u]="translate3d("+(e-n)+"px, "+(o-i)+"px, 0)"}}},c=function(){var e,n=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,o=t("script")[0].style,i="";for(e in o)if(n.test(e)){i=e.match(n)[0];break}return"WebkitOpacity"in o&&(i="Webkit"),"KhtmlOpacity"in o&&(i="Khtml"),function(t){return i+(i.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}(),u=c("transform"),f=t("<div />",{style:"background:#fff"}).css("background-position-x")!==o,d=f?function(t,e,n){t.css({"background-position-x":e,"background-position-y":n})}:function(t,e,n){t.css("background-position",e+" "+n)},h=f?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},p=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};i.prototype={init:function(){this.options.name=r+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===n.body&&(this.element=e),this.$scrollElement=t(this.element),this.$element=this.element===e?t("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==o?t(this.options.viewportElement):this.$scrollElement[0]===e||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=a[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var e=this,n=a[e.options.scrollProperty],o=l[e.options.positionProperty],i=n.setLeft,r=n.setTop;this._setScrollLeft="function"==typeof i?function(t){i(e.$scrollElement,t)}:t.noop,this._setScrollTop="function"==typeof r?function(t){r(e.$scrollElement,t)}:t.noop,this._setPosition=o.setPosition||function(t,n,i,r,s){e.options.horizontalScrolling&&o.setLeft(t,n,i),e.options.verticalScrolling&&o.setTop(t,r,s)}},_handleWindowLoadAndResize:function(){var n=this,o=t(e);n.options.responsive&&o.bind("load."+this.name,function(){n.refresh()}),o.bind("resize."+this.name,function(){n._detectViewport(),n.options.responsive&&n.refresh()})},refresh:function(n){var o=this,i=o._getScrollLeft(),r=o._getScrollTop();n&&n.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)&&t(e).load(function(){var t=o._getScrollLeft(),e=o._getScrollTop();o._setScrollLeft(t+1),o._setScrollTop(e+1),o._setScrollLeft(t),o._setScrollTop(e)}),this._setScrollLeft(i),this._setScrollTop(r)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==o;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){var e=this;if(this._getScrollLeft(),this._getScrollTop(),this.particles!==o)for(var n=this.particles.length-1;n>=0;n--)this.particles[n].$element.data("stellar-elementIsActive",o);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var n,i,r,s,a,l,c,u,f,d=t(this),h=0,p=0,g=0,m=0;if(d.data("stellar-elementIsActive")){if(d.data("stellar-elementIsActive")!==this)return}else d.data("stellar-elementIsActive",this);e.options.showElement(d),d.data("stellar-startingLeft")?(d.css("left",d.data("stellar-startingLeft")),d.css("top",d.data("stellar-startingTop"))):(d.data("stellar-startingLeft",d.css("left")),d.data("stellar-startingTop",d.css("top"))),r=d.position().left,s=d.position().top,a="auto"===d.css("margin-left")?0:parseInt(d.css("margin-left"),10),l="auto"===d.css("margin-top")?0:parseInt(d.css("margin-top"),10),u=d.offset().left-a,f=d.offset().top-l,d.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(h=g,p=m,c=e,!1):(g+=e.position().left,void(m+=e.position().top))}),n=d.data("stellar-horizontal-offset")!==o?d.data("stellar-horizontal-offset"):c!==o&&c.data("stellar-horizontal-offset")!==o?c.data("stellar-horizontal-offset"):e.horizontalOffset,i=d.data("stellar-vertical-offset")!==o?d.data("stellar-vertical-offset"):c!==o&&c.data("stellar-vertical-offset")!==o?c.data("stellar-vertical-offset"):e.verticalOffset,e.particles.push({$element:d,$offsetParent:c,isFixed:"fixed"===d.css("position"),horizontalOffset:n,verticalOffset:i,startingPositionLeft:r,startingPositionTop:s,startingOffsetLeft:u,startingOffsetTop:f,parentOffsetLeft:h,parentOffsetTop:p,stellarRatio:d.data("stellar-ratio")!==o?d.data("stellar-ratio"):1,width:d.outerWidth(!0),height:d.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var e,n=this,i=this._getScrollLeft(),r=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(e=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(e=e.add(this.$element)),e.each(function(){var e,s,a,l,c,u,f,p=t(this),g=h(p),m=0,v=0,y=0,w=0;if(p.data("stellar-backgroundIsActive")){if(p.data("stellar-backgroundIsActive")!==this)return}else p.data("stellar-backgroundIsActive",this);p.data("stellar-backgroundStartingLeft")?d(p,p.data("stellar-backgroundStartingLeft"),p.data("stellar-backgroundStartingTop")):(p.data("stellar-backgroundStartingLeft",g[0]),p.data("stellar-backgroundStartingTop",g[1])),a="auto"===p.css("margin-left")?0:parseInt(p.css("margin-left"),10),l="auto"===p.css("margin-top")?0:parseInt(p.css("margin-top"),10),c=p.offset().left-a-i,u=p.offset().top-l-r,p.parents().each(function(){var e=t(this);return e.data("stellar-offset-parent")===!0?(m=y,v=w,f=e,!1):(y+=e.position().left,void(w+=e.position().top))}),e=p.data("stellar-horizontal-offset")!==o?p.data("stellar-horizontal-offset"):f!==o&&f.data("stellar-horizontal-offset")!==o?f.data("stellar-horizontal-offset"):n.horizontalOffset,s=p.data("stellar-vertical-offset")!==o?p.data("stellar-vertical-offset"):f!==o&&f.data("stellar-vertical-offset")!==o?f.data("stellar-vertical-offset"):n.verticalOffset,n.backgrounds.push({$element:p,$offsetParent:f,isFixed:"fixed"===p.css("background-attachment"),horizontalOffset:e,verticalOffset:s,startingValueLeft:g[0],startingValueTop:g[1],startingBackgroundPositionLeft:isNaN(parseInt(g[0],10))?0:parseInt(g[0],10),startingBackgroundPositionTop:isNaN(parseInt(g[1],10))?0:parseInt(g[1],10),startingPositionLeft:p.position().left,startingPositionTop:p.position().top,startingOffsetLeft:c,startingOffsetTop:u,parentOffsetLeft:m,parentOffsetTop:v,stellarRatio:p.data("stellar-background-ratio")===o?1:p.data("stellar-background-ratio")})}))},_reset:function(){var t,e,n,o,i;for(i=this.particles.length-1;i>=0;i--)t=this.particles[i],e=t.$element.data("stellar-startingLeft"),n=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,n,n),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(i=this.backgrounds.length-1;i>=0;i--)o=this.backgrounds[i],o.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),d(o.$element,o.startingValueLeft,o.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=t.noop,t(e).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,o=t(e);o.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),o.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),o.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t,e,n,o,i,r,s,a,l,c,u=this._getScrollLeft(),f=this._getScrollTop(),h=!0,p=!0;if(this.currentScrollLeft!==u||this.currentScrollTop!==f||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=u,this.currentScrollTop=f,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,c=this.particles.length-1;c>=0;c--)t=this.particles[c],e=t.isFixed?1:0,this.options.horizontalScrolling?(r=(u+t.horizontalOffset+this.viewportOffsetLeft+t.startingPositionLeft-t.startingOffsetLeft+t.parentOffsetLeft)*-(t.stellarRatio+e-1)+t.startingPositionLeft,a=r-t.startingPositionLeft+t.startingOffsetLeft):(r=t.startingPositionLeft,a=t.startingOffsetLeft),this.options.verticalScrolling?(s=(f+t.verticalOffset+this.viewportOffsetTop+t.startingPositionTop-t.startingOffsetTop+t.parentOffsetTop)*-(t.stellarRatio+e-1)+t.startingPositionTop,l=s-t.startingPositionTop+t.startingOffsetTop):(s=t.startingPositionTop,l=t.startingOffsetTop),this.options.hideDistantElements&&(p=!this.options.horizontalScrolling||a+t.width>(t.isFixed?0:u)&&a<(t.isFixed?0:u)+this.viewportWidth+this.viewportOffsetLeft,h=!this.options.verticalScrolling||l+t.height>(t.isFixed?0:f)&&l<(t.isFixed?0:f)+this.viewportHeight+this.viewportOffsetTop),p&&h?(t.isHidden&&(this.options.showElement(t.$element),t.isHidden=!1),this._setPosition(t.$element,r,t.startingPositionLeft,s,t.startingPositionTop)):t.isHidden||(this.options.hideElement(t.$element),t.isHidden=!0);for(c=this.backgrounds.length-1;c>=0;c--)n=this.backgrounds[c],e=n.isFixed?0:1,o=this.options.horizontalScrolling?(u+n.horizontalOffset-this.viewportOffsetLeft-n.startingOffsetLeft+n.parentOffsetLeft-n.startingBackgroundPositionLeft)*(e-n.stellarRatio)+"px":n.startingValueLeft,i=this.options.verticalScrolling?(f+n.verticalOffset-this.viewportOffsetTop-n.startingOffsetTop+n.parentOffsetTop-n.startingBackgroundPositionTop)*(e-n.stellarRatio)+"px":n.startingValueTop,d(n.$element,o,i)}},_handleScrollEvent:function(){var t=this,e=!1,n=function(){t._repositionElements(),e=!1},o=function(){e||(p(n),e=!0)};this.$scrollElement.bind("scroll."+this.name,o),o()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){p(t._animationLoop),t._repositionElements()},this._animationLoop()}},t.fn[r]=function(e){var n=arguments;return e===o||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+r)||t.data(this,"plugin_"+r,new i(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var o=t.data(this,"plugin_"+r);o instanceof i&&"function"==typeof o[e]&&o[e].apply(o,Array.prototype.slice.call(n,1)),"destroy"===e&&t.data(this,"plugin_"+r,null)}):void 0},t[r]=function(){var n=t(e);return n.stellar.apply(n,Array.prototype.slice.call(arguments,0))},t[r].scrollProperty=a,t[r].positionProperty=l,e.Stellar=i}(jQuery,this,document),$.fn.randomize=function(t){var e=t?$(this).find(t):$(this).children(),n=e.parent();return n.each(function(){$(this).children(t).sort(function(){return Math.round(Math.random())-.5}).detach().appendTo(this)}),this};