$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

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

        if(bodyWidth <= 480) {

            $(".sidebar-left-nav").addClass("withscroll");

        } else {

            $(".sidebar-left-nav").removeClass("withscroll");

        }

        getLogoBoxHeight();


        // for( doctoPhotoCountFor = 0; doctoPhotoCountFor >= doctoPhotoCount;  doctoPhotoCountFor++ ) {

        //     if ( $(".doctor-card .photo-box:eq("+ doctoPhotoCountFor +") img").height() < $(".doctor-card .photo-box:eq("+ doctoPhotoCountFor +")").height() ) {

        //         $(".doctor-card .photo-box:eq("+ doctoPhotoCountFor +") img").css({
        //                                                                             "height" : "100%",
        //                                                                             "width" : "auto"
        //                                                                         });
        //     }

        // }


    });



    // -----------------------------------------------------------------------------

    //  Показать скрыть диалоговое окно

    var doctorPhotoCount = $(".doctor-card .photo-box").length - 1;
    var doctorPhotoCountFor = 0;

    
    var widthImg = 1;

    // console.log(doctorPhotoCountFor +"  "+ doctorPhotoCount);

    // for( doctorPhotoCountFor = 0; doctorPhotoCountFor <= doctorPhotoCount;  doctorPhotoCountFor++ ) {

    //     // console.log(doctorPhotoCountFor +"  "+ doctorPhotoCount);


    //     if ( $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").height() < $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +")").height() ||
    //          $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").width() < $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +")").width() ) {

    //         console.log($(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").width());
                
    //         // for( widthImg = 100;  ; widthImg++ ) {

    //         // while ($(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").height() > $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +")").height() &&
    //         //        $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").width() > $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +")").width()){


    //         //     $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").css({"width" : widthImg + "%"});


    //         // }

    //         widthImg = 100;

    //         var imgWidthAnim;

    //         imgWidthAnim = setTimeout(function() {

    //             // console.log($(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").width());

    //             $(".doctor-card .photo-box:eq("+ 1 +") img").css({"width" : ( widthImg++ )  + "%"});

    //             // widthImg++;

    //             console.log($(".doctor-card .photo-box:eq("+ 1 +") img").height() +"   "+ $(".doctor-card .photo-box:eq("+ 1 +")").height() );

    //             console.log($(".doctor-card .photo-box:eq("+ 1 +") img").width() +"   "+ $(".doctor-card .photo-box:eq("+ 1 +")").width());


    //             if ( ( $(".doctor-card .photo-box:eq("+ 1 +") img").height() >= $(".doctor-card .photo-box:eq("+ 1 +")").height() ) && (  $(".doctor-card .photo-box:eq("+ 1 +") img").width() >= $(".doctor-card .photo-box:eq("+ 1 +")").width() ) ){


    //                 // $(".doctor-card .photo-box:eq("+ doctorPhotoCountFor +") img").css({"width" : widthImg + "%"});

    //                 console.log($(".doctor-card .photo-box:eq("+ 1 +") img").height() +"   "+ $(".doctor-card .photo-box:eq("+ 1 +")").height()); 

    //                 clearInterval(imgWidthAnim);

    //                 function getImgSize() {

    //                     getImgSizeInterval();

    //                 };

    //             }

    //             console.log($(".doctor-card .photo-box:eq("+ 1 +") img").height() +"  "+ $(".doctor-card .photo-box:eq("+ 1 +")").height());   

    //         }, 100);        


    //     }

    // }

    // imgSizeInterval();

    // getImgSize();

    // function getImgSize() {        

    //     imgSizeInterval();

    //     console.log(widthImg);

    // }

    // function imgSizeInterval() {

    //     setInterval(function() {

    //         widthImg++;

    //         getImgSize();

    //     }, 1000);

    // }




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

//  Mosaic Sript

    $(function() {

        var mosaicItemsCount = $(".mosaicflow .mosaicflow__item").length - 1;
        var mosaicItemsCountFor = 0;

        var showMosaicItemInterval = setInterval(function() {


            $(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").width($(".mosaicflow__item:eq("+ mosaicItemsCountFor +") .mosaic-inner-content").outerWidth(true));

            if($(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").attr("data")) {

                $(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").width($(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").attr("data"));

            }

            mosaicItemsCountFor++;

            if(mosaicItemsCountFor > mosaicItemsCount) {

                clearInterval(showMosaicItemInterval);

                // $(".mosaicflow").animate({"opacity" : 1}, 300);

            }

        }, 100);                


    });





// -----------------------------------------------------------------------------

//  Показать скрыть диалоговое окно


    $(".popup-btn").click(function() {

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

            console.log(".close-sidebar-btnr");

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

            // console.log($(".header .center-box").height() ) ;

            // console.log ($(".header .center-box").offset().top );

            // $(".header .center-box").offset({top: 150});
    }


});
