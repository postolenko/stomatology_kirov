$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

        // setTimeout(function() {

        //     $(".preload-bg").fadeOut(500);

        // }, 700);

    // });

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    var countHeadersRow = $(".header .header-row").length - 1;
    var countHeadersRowFor = 0;
    var headersRowsHeight = 0;   


    getLogoBoxHeight();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        if($(".callback")) {
            
            $(".callback").css({ "top" : ( $(window).height() - $(".callback-form").outerHeight(true) ) / 2 + "px" });
            
        }

        getLogoBoxHeight();

    });



    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });



    $(function() {

        var indexSeoTxt;

        $(".seo-text-section .links-box h3").click(function() {

            indexSeoTxt = $(".seo-text-section .links-box h3").index(this);

            $(".seo-text-section .links-box:eq(" + indexSeoTxt +")").toggleClass("active");

        });

    });



    $(function() {

        var indexNav;

        $(".with-inner-nav .fa-angle-down").click(function(showMenuEvent) {

            showMenuEvent.preventDefault();

            indexNav = $(".with-inner-nav .fa-angle-down").index(this);

            if( $(".with-inner-nav:eq("+ indexNav +") + ul").css("display") == "block" ) {

                $(".with-inner-nav .fa-angle-down:eq("+ indexNav +")").removeClass("active");

                $(".with-inner-nav:eq("+ indexNav +") + ul").fadeOut(200);

            } else {

                $(".with-inner-nav .fa-angle-down:eq("+ indexNav +")").addClass("active");

                $(".with-inner-nav:eq("+ indexNav +") + ul").fadeIn(200);

            }

        });


    });


    $(function() {

        var indexLeftNav;
        var innerNavHeight;

        $(".sidebar-left-nav li a").click(function(leftNavLinkEvent) {

            if( $(this).hasClass("with-inner-nav") ) {

                leftNavLinkEvent.preventDefault();

                indexLeftNav = $(".sidebar-left-nav li a").index(this);

                innerNavHeight = $(".sidebar-left-nav li a:eq("+ indexLeftNav +") + .inner-nav-hover > ul").height();

                if( $(".sidebar-left-nav li a:eq("+ indexLeftNav +") + .inner-nav-hover").height() <= 0) {

                    $(".sidebar-left-nav li a:eq("+ indexLeftNav +")").addClass("active");

                    $(".sidebar-left-nav li a:eq("+ indexLeftNav +") + .inner-nav-hover").animate({"height" : innerNavHeight + "px"}, 300);

                } else {

                    $(".sidebar-left-nav li a:eq("+ indexLeftNav +")").removeClass("active");

                    $(".sidebar-left-nav li a:eq("+ indexLeftNav +") + .inner-nav-hover").animate({"height" : 0 + "px"}, 300);

                }


            }

        });


    });
    


    $(function() {

        $(".customNavigation .btn.prev").prependTo(".owl-controls");

        $(".customNavigation .btn.next").appendTo(".owl-controls");

        var countSlickSlider = $(".slick-slider").length - 1;
        var countSlickSliderFor = 0;

        for ( countSlickSliderFor = 0; countSlickSliderFor <= countSlickSlider; countSlickSliderFor++ ) {

            $(".slick-slider:eq("+ countSlickSliderFor +") .slick-dots").wrap("<div class='controls-navigation-slick'></div>");

            $(".slick-slider:eq("+ countSlickSliderFor +") button.slick-prev").prependTo( ".slick-slider:eq("+ countSlickSliderFor +") .controls-navigation-slick" );
            $(".slick-slider:eq("+ countSlickSliderFor +") button.slick-next").appendTo( ".slick-slider:eq("+ countSlickSliderFor +") .controls-navigation-slick" );

            $(".slick-slider:eq("+ countSlickSliderFor +") .slick-dots li button").text("");

        }

        

    });


    $(function() {


        $("#scroll-down").click(function () {

            $("body,html").animate({

                scrollTop: $("#scrollDownCoor").offset().top

            }, 700);

            return false;

        });

    });


// -----------------------------------------------------------------------------

//  Показать скрыть диалоговое окно


    $(".popup-btn, .call-back").click(function(callbackEvent) {

        callbackEvent.preventDefault();

        $(".callback").fadeIn(300);

        $(".callback").css({ "top" : ( $(window).height() - $(".callback-form").outerHeight(true) ) / 2 + "px" });

    });


    $(".close-callback, .callback-bg").click(function() {

        $(".callback").fadeOut(300);

    });


// -----------------------------------------------------------------------------

// Адаптивное меню 


    $(function() {

        var indexRespNav;
        var innerRespNavHeight;

        $(".resp-nav .with-inner-nav").click(function(respNavLinkEvent) {

            if( $(this).hasClass("with-inner-nav") ) {

                respNavLinkEvent.preventDefault();

                indexRespNav = $(".resp-nav li a").index(this);

                innerRespNavHeight = $(".resp-nav li a:eq("+ indexRespNav +") + .inner-nav-hover > ul").outerHeight();

                if( $(".resp-nav li a:eq("+ indexRespNav +") + .inner-nav-hover").height() <= 0) {

                    $(".resp-nav li a:eq("+ indexRespNav +")").addClass("active");

                    $(".resp-nav li a.with-inner-nav:eq("+ indexRespNav +") .fa-angle-dow").addClass("active");

                    $(".resp-nav li a:eq("+ indexRespNav +") + .inner-nav-hover").animate({"height" : innerRespNavHeight + "px"}, 300);

                } else {

                    $(".resp-nav li a:eq("+ indexRespNav +")").removeClass("active");

                    $(".resp-nav li a.with-inner-nav:eq("+ indexRespNav +") .fa-angle-dow").removeClass("active");

                    $(".resp-nav li a:eq("+ indexRespNav +") + .inner-nav-hover").animate({"height" : 0 + "px"}, 300);

                }


            }

        });


    });


    $(function() {

        $(".respmenubtn").click(function() {

            $(".resp-nav").toggleClass("respnavleftcoor");
            $(".respmenubtn").toggleClass("respmenubtn-active");

        });

        $(".close-resp-nav").click(function() {

            $(".resp-nav").toggleClass("respnavleftcoor");
            $(".respmenubtn").toggleClass("respmenubtn-active");

        });

        $(".show-sidebar").click(function() {

            $(".sidebar").addClass("show");

        });

        $(".close-sidebar-btn").click(function() {

            $(".sidebar").removeClass("show");

        });


    });



// -----------------------------------------------------------------------------

// Центрирование центрального блога в промоблоке на главной странице


    function getLogoBoxHeight() {

        headersRowsHeight = 0;

        for( countHeadersRowFor = 0; countHeadersRowFor <= countHeadersRow; countHeadersRowFor++) {

            headersRowsHeight = headersRowsHeight + $(".header .header-row:eq("+ countHeadersRowFor +")").outerHeight();

        }

        $(".header .logo-box").height( $(".header").outerHeight(true) - headersRowsHeight);

    }


});
