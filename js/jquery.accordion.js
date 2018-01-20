(function(window, jQuery, undefined) {
    "use strict";

    var jQueryevent = jQuery.event,
        resizeTimeout;

    jQueryevent.special.smartresize = {
        setup: function() {
            jQuery(this).bind("resize", jQueryevent.special.smartresize.handler);
        },
        teardown: function() {
            jQuery(this).unbind("resize", jQueryevent.special.smartresize.handler);
        },
        handler: function(event, execAsap) {
            // Save the context
            var context = this,
                args = arguments;

            // set correct event type
            event.type = "smartresize";

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(function() {
                jQuery.event.handle.apply(context, args);
            }, execAsap === "execAsap" ? 0 : 100);
        }
    };

    jQuery.fn.smartresize = function(fn) {
        return fn ? this.bind("smartresize", fn) : this.trigger("smartresize", ["execAsap"]);
    };

    jQuery.Accordion = function(options, element) {

        this.jQueryel = jQuery(element);
        // list items
        this.jQueryitems = this.jQueryel.children('ul').children('li');
        // total number of items
        this.itemsCount = this.jQueryitems.length;

        // initialize accordion
        this._init(options);

    };

    jQuery.Accordion.defaults = {
        // index of opened item. -1 means all are closed by default.
        open: -1,
        // if set to true, only one item can be opened. Once one item is opened, any other that is opened will be closed first
        oneOpenedItem: false,
        // speed of the open / close item animation
        speed: 300,
        // easing of the open / close item animation
        easing: 'easeInOutExpo',
        // speed of the scroll to action animation
        scrollSpeed: 900,
        // easing of the scroll to action animation
        scrollEasing: 'easeInOutExpo'
    };

    jQuery.Accordion.prototype = {
        _init: function(options) {

            this.options = jQuery.extend(true, {}, jQuery.Accordion.defaults, options);

            // validate options
            this._validate();

            // current is the index of the opened item
            this.current = this.options.open;

            // hide the contents so we can fade it in afterwards
            this.jQueryitems.find('div.st-content').hide();

            // save original height and top of each item	
            this._saveDimValues();

            // if we want a default opened item...
            if (this.current != -1)
                this._toggleItem(this.jQueryitems.eq(this.current));

            // initialize the events
            this._initEvents();

        },
        _saveDimValues: function() {

            this.jQueryitems.each(function() {

                var jQueryitem = jQuery(this);

                jQueryitem.data({
                    originalHeight: jQueryitem.find('a:first').height(),
                    offsetTop: jQueryitem.offset().top
                });

            });

        },
        // validate options
        _validate: function() {

            // open must be between -1 and total number of items, otherwise we set it to -1
            if (this.options.open < -1 || this.options.open > this.itemsCount - 1)
                this.options.open = -1;

        },
        _initEvents: function() {

            var instance = this;

            // open / close item
            this.jQueryitems.find('a:first').bind('click.accordion', function(event) {

                var jQueryitem = jQuery(this).parent();

                // close any opened item if oneOpenedItem is true
                if (instance.options.oneOpenedItem && instance._isOpened() && instance.current !== jQueryitem.index()) {

                    instance._toggleItem(instance.jQueryitems.eq(instance.current));

                }

                // open / close item
                instance._toggleItem(jQueryitem);

                return false;

            });

            jQuery(window).bind('smartresize.accordion', function(event) {

                // reset orinal item values
                instance._saveDimValues();

                // reset the content's height of any item that is currently opened
                instance.jQueryel.find('li.st-open').each(function() {

                    var jQuerythis = jQuery(this);
                    jQuerythis.css('height', jQuerythis.data('originalHeight') + jQuerythis.find('div.st-content').outerHeight(true));

                });

                // scroll to current
                if (instance._isOpened())
                    instance._scroll();

            });

        },
        // checks if there is any opened item
        _isOpened: function() {

            return (this.jQueryel.find('li.st-open').length > 0);

        },
        // open / close item
        _toggleItem: function(jQueryitem) {

            var jQuerycontent = jQueryitem.find('div.st-content');

            (jQueryitem.hasClass('st-open'))

            ?
            (this.current = -1, jQuerycontent.stop(true, true).fadeOut(this.options.speed), jQueryitem.removeClass('st-open').stop().animate({
                height: jQueryitem.data('originalHeight')
            }, this.options.speed, this.options.easing))

            :
            (this.current = jQueryitem.index(), jQuerycontent.stop(true, true).fadeIn(this.options.speed), jQueryitem.addClass('st-open').stop().animate({
                height: jQueryitem.data('originalHeight') + jQuerycontent.outerHeight(true)
            }, this.options.speed, this.options.easing), this._scroll(this))

        },
        // scrolls to current item or last opened item if current is -1
        _scroll: function(instance) {

            var instance = instance || this,
                current;

            (instance.current !== -1) ? current = instance.current: current = instance.jQueryel.find('li.st-open:last').index();

            //jQuery('html, body').stop().animate({
            //				scrollTop	: ( instance.options.oneOpenedItem ) ? instance.jQueryitems.eq( current ).data( 'offsetTop' ) : instance.jQueryitems.eq( current ).offset().top
            //			}, instance.options.scrollSpeed, instance.options.scrollEasing );

        }
    };

    var logError = function(message) {

        if (this.console) {

            console.error(message);

        }

    };

    jQuery.fn.accordion = function(options) {

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function() {

                var instance = jQuery.data(this, 'accordion');

                if (!instance) {
                    logError("cannot call methods on accordion prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }

                if (!jQuery.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for accordion instance");
                    return;
                }

                instance[options].apply(instance, args);

            });

        } else {

            this.each(function() {
                var instance = jQuery.data(this, 'accordion');
                if (!instance) {
                    jQuery.data(this, 'accordion', new jQuery.Accordion(options, this));
                }
            });

        }

        return this;

    };

})(window, jQuery);

jQuery(function() {

    jQuery('#st-accordion').accordion();

    jQuery('#st-accordion-two').accordion({
        oneOpenedItem: true
    });

    jQuery('#st-accordion-three').accordion({
        oneOpenedItem: true,
        open: 0,
    });

    jQuery('#st-accordion-four').accordion({
        oneOpenedItem: true,
        open: 0,
    });
    jQuery('#st-accordion-five').accordion({
        open: 0,
    });

});