$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var countHeadersRow = $(".header .header-row").length - 1;
    var countHeadersRowFor = 0;
    var headersRowsHeight = 0;


    getLogoBoxHeight();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


        getLogoBoxHeight();


    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

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

        // var countHeadersRow = $(".header .header-row").length - 1;
        // var countHeadersRowFor = 0;
        // var headersRowsHeight = 0;

        // getLogoBoxHeight();
        // getLogoBoxHeight(countHeadersRow, countHeadersRowFor, headersRowsHeight);

    });



    $(function() {

        $(".customNavigation .btn.prev").prependTo(".owl-pagination");

        $(".customNavigation .btn.next").appendTo(".owl-pagination");

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

            $(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").fadeIn(400);

            $(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").width($(".mosaicflow__item:eq("+ mosaicItemsCountFor +") .mosaic-inner-content").outerWidth(true));

            if($(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").attr("data")) {

                $(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").width($(".mosaicflow__item:eq("+ mosaicItemsCountFor +")").attr("data"));

            }

            mosaicItemsCountFor++;

            if(mosaicItemsCountFor > mosaicItemsCount) {

                clearInterval(showMosaicItemInterval);

            }

        }, 700);                


    });






    function getLogoBoxHeight() {

        for( countHeadersRowFor = 0; countHeadersRowFor <= countHeadersRow; countHeadersRowFor++) {

            headersRowsHeight = headersRowsHeight + $(".header .header-row:eq("+ countHeadersRowFor +")").outerHeight();

        }

        $(".header .logo-box").height( $(".header").height() - headersRowsHeight);

    }


});
