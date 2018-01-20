jQuery(document).ready(function() {
    "use strict";


    /******************************************
    Newsletter popup
    ******************************************/

    jQuery('.newsletter-close').click(function() {
        jQuery(".newsletter-wrap").hide();
        jQuery(".newsletter-bg").hide();
    });

    /******************************************
    Best sale slider
    ******************************************/

    jQuery("#best-sale-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Best sale slider home5
        ******************************************/

        jQuery("#best-sale-slider5 .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),
        /******************************************
        New arrivals slider
        ******************************************/

        jQuery("#new-arrivals-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        New arrivals slider
        ******************************************/

        jQuery("#new-arrivals-slider5 .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),
        /******************************************
        Featured slider Home3
        ******************************************/

        jQuery("#new-arrivals-slider3 .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Special products slider Home3
        ******************************************/

        jQuery("#special-products-slider3 .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        New product slider
        ******************************************/

        jQuery("#new-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        New product slider home5
        ******************************************/

        jQuery("#new-product-slider5 .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),
        /******************************************
        Top sellers slider
        ******************************************/

        jQuery("#top-sellers-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Top sellers slider home5
        ******************************************/

        jQuery("#top-sellers-slider5 .slider-items").owlCarousel({
            items: 2,
            itemsDesktop: [1024, 2],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Latest Products slider home3
        ******************************************/

        jQuery("#top-sellers-slider3 .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Our clients slider
        ******************************************/

        jQuery("#our-clients-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 2],
            itemsMobile: [480, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Our clients slider home3
        ******************************************/

        jQuery("#our-clients-slider3 .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [640, 2],
            itemsMobile: [480, 1],
            navigation: false,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true
        }),

        /******************************************
        Latest news slider
        ******************************************/

        jQuery("#latest-news-slider .slider-items").owlCarousel({
            autoplay: !0,
            items: 3,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [480, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1
        }),

        /******************************************
        hot deals slider
        ******************************************/
        jQuery("#hot-deals-slider .slider-items").owlCarousel({
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1024, 1], //5 items between 1024px and 901px
            itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0;
            itemsMobile: [320, 1],
            navigation: true,
            navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true,
        });

    /******************************************
    hot deals slider home5
    ******************************************/
    jQuery("#hot-deals-slider5 .slider-items").owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: false,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false,
        autoPlay: true,
    });

    /******************************************
    Mobile menu
    ******************************************/

    jQuery("#mobile-menu").mobileMenu({
            MenuWidth: 250,
            SlideSpeed: 300,
            WindowsMaxWidth: 767,
            PagePush: !0,
            FromLeft: !0,
            Overlay: !0,
            CollapseMenu: !0,
            ClassName: "mobile-menu"

        }),

        /******************************************
        Home 4 Mega Menu
        ******************************************/

        jQuery('.mega-menu-title').on('click', function() {
            if (jQuery('.mega-menu-category').is(':visible')) {
                jQuery('.mega-menu-category').slideUp();
            } else {
                jQuery('.mega-menu-category').slideDown();
            }
        });


    jQuery('.mega-menu-category .nav > li').hover(function() {
        jQuery(this).addClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeIn('slow');
    }, function() {
        jQuery(this).removeClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeOut('slow');
    });


    jQuery('.mega-menu-category .nav > li.view-more').on('click', function(e) {
        if (jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')) {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
            jQuery(this).find('a').text('More category');
        } else {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
            jQuery(this).find('a').text('Close menu');
        }
        e.preventDefault();
    });

    /******************************************
    Category desc slider
    ******************************************/

    jQuery("#category-desc-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
    });

    /******************************************
    Category desc slider
    ******************************************/

    jQuery("#upsell-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: false
        }),

        /******************************************
        Related product slider
        ******************************************/

        jQuery("#related-product-slider .slider-items").owlCarousel({
            items: 4,
            itemsDesktop: [1024, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),

        /******************************************
        Related posts
        ******************************************/

        jQuery("#related-posts .slider-items").owlCarousel({
            items: 3,
            itemsDesktop: [1024, 3],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [640, 2],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: !1,
            autoPlay: true
        }),


        /******************************************
        testimonials slider
        ******************************************/

        jQuery("#testimonials-slider .slider-items").owlCarousel({
            items: 1,
            itemsDesktop: [1024, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [640, 1],
            itemsMobile: [390, 1],
            navigation: !0,
            navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
            slideSpeed: 500,
            pagination: false,
            autoPlay: true
        }),

        /******************************************
        Home testimonials slider
        ******************************************/

        jQuery(".subDropdown")[0] && jQuery(".subDropdown").click(function() {
            jQuery(this).toggleClass("plus"), jQuery(this).toggleClass("minus"), jQuery(this).parent().find("ul").slideToggle()
        })
    if (jQuery('#home-testimonials-slider').length) {
        jQuery('#home-testimonials-slider').bxSlider({
            auto: true,
            infiniteLoop: true,
            hideControlOnEnd: true
        });
    }

    /******************************************
    PRICE FILTER
    ******************************************/

    jQuery('.slider-range-price').each(function() {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_reasult = jQuery(this).data('label-reasult');
        var t = jQuery(this);
        jQuery(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function(event, ui) {
                var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.amount-range-price').html(result);
            }
        });
    })

    /******************************************
    Footer expander
    ******************************************/

    jQuery(".collapsed-block .expander").click(function(e) {
        var collapse_content_selector = jQuery(this).attr("href");
        var expander = jQuery(this);
        if (!jQuery(collapse_content_selector).hasClass("open")) expander.addClass("open").html("&minus;");
        else expander.removeClass("open").html("+");
        if (!jQuery(collapse_content_selector).hasClass("open")) jQuery(collapse_content_selector).addClass("open").slideDown("normal");
        else jQuery(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
    });

    /******************************************
    Category sidebar
    ******************************************/

    jQuery(function() {
        jQuery(".category-sidebar ul > li.cat-item.cat-parent > ul").hide();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat.cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent").click(function() {
            if (jQuery(this).hasClass('current-cat-parent')) {
                var li = jQuery(this).closest('li');
                li.find(' > ul').slideToggle('fast');
                jQuery(this).toggleClass("close-cat");
            } else {
                var li = jQuery(this).closest('li');
                li.find(' > ul').slideToggle('fast');
                jQuery(this).toggleClass("cat-item.cat-parent open-cat");
            }
        });
        jQuery(".category-sidebar ul.children li.cat-item,ul.children li.cat-item > a").click(function(e) {
            e.stopPropagation();
        });
    });

    /******************************************
    colosebut
    ******************************************/

    jQuery("#colosebut1").click(function() {
        jQuery("#div1").fadeOut("slow");
    });
    jQuery("#colosebut2").click(function() {
        jQuery("#div2").fadeOut("slow");
    });
    jQuery("#colosebut3").click(function() {
        jQuery("#div3").fadeOut("slow");
    });
    jQuery("#colosebut4").click(function() {
        jQuery("#div4").fadeOut("slow");
    });


    /******************************************
    totop
    ******************************************/
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        jQueryback_to_top = jQuery('.totop');

    //hide or show the "back to top" link
    jQuery(window).scroll(function() {
        (jQuery(this).scrollTop() > offset) ? jQueryback_to_top.addClass('totop-is-visible'): jQueryback_to_top.removeClass('totop-is-visible totop-fade-out');
        if (jQuery(this).scrollTop() > offset_opacity) {
            jQueryback_to_top.addClass('totop-fade-out');
        }
    });

    //smooth scroll to top
    jQueryback_to_top.on('click', function(event) {
        event.preventDefault();
        jQuery('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    /******************************************
    tooltip
    ******************************************/


    jQuery('[data-toggle="tooltip"]').tooltip();



    /* ---------------------------------------------
            carousel
      --------------------------------------------- */
    if (jQuery.fn.owlCarousel) {

        jQuery("#clients-1").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 6,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });

        jQuery("#testimonial-2").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 1
        });

        jQuery("#testimonial-3").owlCarousel({
            autoPlay: 4000, //Set AutoPlay to 3 seconds
            items: 1
        });

        jQuery("#testimonial-4").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 1
        });

        jQuery("#testimonial-5").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 1
        });

        jQuery("#carousel-object").owlCarousel({
            autoPlay: 4000, //Set AutoPlay to 3 seconds
            items: 1
                //pagination : false
        });

        jQuery("#owl-slider").owlCarousel({
            autoPlay: 4000, //Set AutoPlay to 3 seconds
            items: 1,
            navigation: true,
            //pagination : false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });


        jQuery("#img-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });



    }

    /* ---------------------------------------------
         slider typist
         --------------------------------------------- */

    if (typeof Typist == 'function') {
        new Typist(document.querySelector('.typist-element'), {
            letterInterval: 60,
            textInterval: 3000
        });
    }

})

/******************************************
Stick menu
******************************************/

jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > 1 ? jQuery("nav").addClass("stick") : jQuery("nav").removeClass("stick"),
            jQuery(this).scrollTop() > 1 ? jQuery(".top-cart").addClass("stick") : jQuery(".top-cart").removeClass("stick")

    }),


    /******************************************
    top search
    ******************************************/

    function(e) {}(jQuery),
    jQuery.extend(jQuery.easing, {}),
    function(e) {
        e.fn.extend({
            accordion: function() {}
        })
    }(jQuery), jQuery(function(e) {
        e(".accordion").accordion(), e(".accordion").each(function() {
            var t = e(this).find("li.active");
            t.each(function(n) {
                e(this).children("ul").css("display", "block"), n == t.length - 1 && e(this).addClass("current")
            })
        })
    }),


    function(e) {
        e.fn.extend({}), jQuery(function() {
            function e() {
                var e = jQuery('.navbar-collapse form[role="search"].active');
                e.find("input").val(""), e.removeClass("active")
            }
            jQuery('.navbar-collapse form[role="search"] button[type="reset"]').on("click keyup", function(t) {
                console.log(t.currentTarget), (27 == t.which && jQuery('.navbar-collapse form[role="search"]').hasClass("active") || "reset" == jQuery(t.currentTarget).attr("type")) && e()
            }), jQuery(document).on("click", '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(e) {
                e.preventDefault();
                var t = jQuery(this).closest("form"),
                    n = t.find("input");
                t.addClass("active"), n.focus()
            }), jQuery(document).on("click", '.navbar-collapse form[role="search"].active button[type="submit"]', function(t) {
                t.preventDefault();
                var n = jQuery(this).closest("form"),
                    i = n.find("input");
                jQuery("#showSearchTerm").text(i.val()), e()
            })
        })
    }(jQuery);