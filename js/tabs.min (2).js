//	 Tabs 
//	=======================================================================================
jQuery(document).ready(function() {
    "use strict";

    function jQueryTabs() {
        jQuery(".tabs").each(function() {
            jQuery(".tabs-panel").not(":first").hide(), jQuery("li", this).removeClass("active"), jQuery("li:first-child", this).addClass("active"), jQuery(".tabs-panel:first-child").show(), jQuery("li", this).on('click', function(t) {
                var i = jQuery("a", this).attr("href");
                jQuery(this).siblings().removeClass("active"), jQuery(this).addClass("active"), jQuery(i).siblings().hide(), jQuery(i).fadeIn(400), t.preventDefault()
            }), jQuery(window).width() < 100 && jQuery(".tabs-panel").show()
        })
    }
    jQueryTabs(), jQuery(".tabs li a").each(function() {
        var t = jQuery(this).attr("href"),
            i = jQuery(this).html();
        jQuery(t + " .tab-title").prepend("<p><strong>" + i + "</strong></p>")

    })


    function jQueryTabs2() {
        jQuery(".tabs2").each(function() {
            jQuery(".tabs-panel2").not(":first").hide(), jQuery("li", this).removeClass("active"), jQuery("li:first-child", this).addClass("active"), jQuery(".tabs-panel:first-child").show(), jQuery("li", this).on('click', function(t) {
                var i = jQuery("a", this).attr("href");
                jQuery(this).siblings().removeClass("active"), jQuery(this).addClass("active"), jQuery(i).siblings().hide(), jQuery(i).fadeIn(400), t.preventDefault()
            }), jQuery(window).width() < 100 && jQuery(".tabs-panel2").show()
        })
    }
    jQueryTabs2(), jQuery(".tabs2 li a").each(function() {
        var t = jQuery(this).attr("href"),
            i = jQuery(this).html();
        jQuery(t + " .tab-title2").prepend("<p><strong>" + i + "</strong></p>")
    })

    jQuery(".tabs3").each(function() {
        jQuery(".tabs-panel3").not(":first").hide(), jQuery("li", this).removeClass("active"), jQuery("li:first-child", this).addClass("active"), jQuery(".tabs-panel:first-child").show(), jQuery("li", this).on('click', function(t) {
            var i = jQuery("a", this).attr("href");
            jQuery(this).siblings().removeClass("active"), jQuery(this).addClass("active"), jQuery(i).siblings().hide(), jQuery(i).fadeIn(400), t.preventDefault()
        }), jQuery(window).width() < 100 && jQuery(".tabs-panel3").show()
    })

    jQueryTabs3(), jQuery(".tabs3 li a").each(function() {
        var t = jQuery(this).attr("href"),
            i = jQuery(this).html();
        jQuery(t + " .tab-title3").prepend("<p><strong>" + i + "</strong></p>")
    })

}), jQuery(window).resize(function() {
    jQueryTabs()
});