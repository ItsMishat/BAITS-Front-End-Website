;
(function(jQuery, window, undefined) {

    'use strict';
    var jQueryevent = jQuery.event,
        jQueryspecial,
        resizeTimeout;

    jQueryspecial = jQueryevent.special.debouncedresize = {
        setup: function() {
            jQuery(this).on("resize", jQueryspecial.handler);
        },
        teardown: function() {
            jQuery(this).off("resize", jQueryspecial.handler);
        },
        handler: function(event, execAsap) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    jQueryevent.dispatch.apply(context, args);
                };

            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }

            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout(dispatch, jQueryspecial.threshold);
        },
        threshold: 20
    };

    // global
    var jQuerywindow = jQuery(window),
        jQuerydocument = jQuery(document),
        Modernizr = window.Modernizr;

    jQuery.Slitslider = function(options, element) {

        this.jQueryelWrapper = jQuery(element);
        this._init(options);

    };

    jQuery.Slitslider.defaults = {
        // transitions speed
        speed: 800,
        // if true the item's slices will also animate the opacity value
        optOpacity: false,
        // amount (%) to translate both slices - adjust as necessary
        translateFactor: 230,
        // maximum possible angle
        maxAngle: 25,
        // maximum possible scale
        maxScale: 2,
        // slideshow on / off
        autoplay: true,
        // keyboard navigation
        keyboard: true,
        // time between transitions
        interval: 4000,
        // callbacks
        onBeforeChange: function(slide, idx) {
            return false;
        },
        onAfterChange: function(slide, idx) {
            return false;
        }
    };

    jQuery.Slitslider.prototype = {

        _init: function(options) {

            // options
            this.options = jQuery.extend(true, {}, jQuery.Slitslider.defaults, options);

            // https://github.com/twitter/bootstrap/issues/2870
            this.transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            };
            this.transEndEventName = this.transEndEventNames[Modernizr.prefixed('transition')];
            // suport for css 3d transforms and css transitions
            this.support = Modernizr.csstransitions && Modernizr.csstransforms3d;
            // the slider
            this.jQueryel = this.jQueryelWrapper.children('.sl-slider');
            // the slides
            this.jQueryslides = this.jQueryel.children('.sl-slide').hide();
            // total slides
            this.slidesCount = this.jQueryslides.length;
            // current slide
            this.current = 0;
            // control if it's animating
            this.isAnimating = false;
            // get container size
            this._getSize();
            // layout
            this._layout();
            // load some events
            this._loadEvents();
            // slideshow
            if (this.options.autoplay) {

                this._startSlideshow();

            }

        },
        // gets the current container width & height
        _getSize: function() {

            this.size = {
                width: this.jQueryelWrapper.outerWidth(true),
                height: this.jQueryelWrapper.outerHeight(true)
            };

        },
        _layout: function() {

            this.jQueryslideWrapper = jQuery('<div class="sl-slides-wrapper" />');

            // wrap the slides
            this.jQueryslides.wrapAll(this.jQueryslideWrapper).each(function(i) {

                var jQueryslide = jQuery(this),
                    // vertical || horizontal
                    orientation = jQueryslide.data('orientation');

                jQueryslide.addClass('sl-slide-' + orientation)
                    .children()
                    .wrapAll('<div class="sl-content-wrapper" />')
                    .wrapAll('<div class="sl-content" />');

            });

            // set the right size of the slider/slides for the current window size
            this._setSize();
            // show first slide
            this.jQueryslides.eq(this.current).show();

        },
        _navigate: function(dir, pos) {

            if (this.isAnimating || this.slidesCount < 2) {

                return false;

            }

            this.isAnimating = true;

            var self = this,
                jQuerycurrentSlide = this.jQueryslides.eq(this.current);

            // if position is passed
            if (pos !== undefined) {

                this.current = pos;

            }
            // if not check the boundaries
            else if (dir === 'next') {

                this.current = this.current < this.slidesCount - 1 ? ++this.current : 0;

            } else if (dir === 'prev') {

                this.current = this.current > 0 ? --this.current : this.slidesCount - 1;

            }

            this.options.onBeforeChange(jQuerycurrentSlide, this.current);

            // next slide to be shown
            var jQuerynextSlide = this.jQueryslides.eq(this.current),
                // the slide we want to cut and animate
                jQuerymovingSlide = (dir === 'next') ? jQuerycurrentSlide : jQuerynextSlide,

                // the following are the data attrs set for each slide
                configData = jQuerymovingSlide.data(),
                config = {};

            config.orientation = configData.orientation || 'horizontal',
                config.slice1angle = configData.slice1Rotation || 0,
                config.slice1scale = configData.slice1Scale || 1,
                config.slice2angle = configData.slice2Rotation || 0,
                config.slice2scale = configData.slice2Scale || 1;

            this._validateValues(config);

            var cssStyle = config.orientation === 'horizontal' ? {
                    marginTop: -this.size.height / 2
                } : {
                    marginLeft: -this.size.width / 2
                },
                // default slide's slices style
                resetStyle = {
                    'transform': 'translate(0%,0%) rotate(0deg) scale(1)',
                    opacity: 1
                },
                // slice1 style
                slice1Style = config.orientation === 'horizontal' ? {
                    'transform': 'translateY(-' + this.options.translateFactor + '%) rotate(' + config.slice1angle + 'deg) scale(' + config.slice1scale + ')'
                } : {
                    'transform': 'translateX(-' + this.options.translateFactor + '%) rotate(' + config.slice1angle + 'deg) scale(' + config.slice1scale + ')'
                },
                // slice2 style
                slice2Style = config.orientation === 'horizontal' ? {
                    'transform': 'translateY(' + this.options.translateFactor + '%) rotate(' + config.slice2angle + 'deg) scale(' + config.slice2scale + ')'
                } : {
                    'transform': 'translateX(' + this.options.translateFactor + '%) rotate(' + config.slice2angle + 'deg) scale(' + config.slice2scale + ')'
                };

            if (this.options.optOpacity) {

                slice1Style.opacity = 0;
                slice2Style.opacity = 0;

            }

            // we are adding the classes sl-trans-elems and sl-trans-back-elems to the slide that is either coming "next"
            // or going "prev" according to the direction.
            // the idea is to make it more interesting by giving some animations to the respective slide's elements
            //( dir === 'next' ) ? jQuerynextSlide.addClass( 'sl-trans-elems' ) : jQuerycurrentSlide.addClass( 'sl-trans-back-elems' );

            jQuerycurrentSlide.removeClass('sl-trans-elems');

            var transitionProp = {
                'transition': 'all ' + this.options.speed + 'ms ease-in-out'
            };

            // add the 2 slices and animate them
            jQuerymovingSlide.css('z-index', this.slidesCount)
                .find('div.sl-content-wrapper')
                .wrap(jQuery('<div class="sl-content-slice" />').css(transitionProp))
                .parent()
                .cond(
                    dir === 'prev',
                    function() {

                        var slice = this;
                        this.css(slice1Style);
                        setTimeout(function() {

                            slice.css(resetStyle);

                        }, 50);

                    },
                    function() {

                        var slice = this;
                        setTimeout(function() {

                            slice.css(slice1Style);

                        }, 50);

                    }
                )
                .clone()
                .appendTo(jQuerymovingSlide)
                .cond(
                    dir === 'prev',
                    function() {

                        var slice = this;
                        this.css(slice2Style);
                        setTimeout(function() {

                            jQuerycurrentSlide.addClass('sl-trans-back-elems');

                            if (self.support) {

                                slice.css(resetStyle).on(self.transEndEventName, function() {

                                    self._onEndNavigate(slice, jQuerycurrentSlide, dir);

                                });

                            } else {

                                self._onEndNavigate(slice, jQuerycurrentSlide, dir);

                            }

                        }, 50);

                    },
                    function() {

                        var slice = this;
                        setTimeout(function() {

                            jQuerynextSlide.addClass('sl-trans-elems');

                            if (self.support) {

                                slice.css(slice2Style).on(self.transEndEventName, function() {

                                    self._onEndNavigate(slice, jQuerycurrentSlide, dir);

                                });

                            } else {

                                self._onEndNavigate(slice, jQuerycurrentSlide, dir);

                            }

                        }, 50);

                    }
                )
                .find('div.sl-content-wrapper')
                .css(cssStyle);

            jQuerynextSlide.show();

        },
        _validateValues: function(config) {

            // OK, so we are restricting the angles and scale values here.
            // This is to avoid the slices wrong sides to be shown.
            // you can adjust these values as you wish but make sure you also ajust the
            // paddings of the slides and also the options.translateFactor value and scale data attrs
            if (config.slice1angle > this.options.maxAngle || config.slice1angle < -this.options.maxAngle) {

                config.slice1angle = this.options.maxAngle;

            }
            if (config.slice2angle > this.options.maxAngle || config.slice2angle < -this.options.maxAngle) {

                config.slice2angle = this.options.maxAngle;

            }
            if (config.slice1scale > this.options.maxScale || config.slice1scale <= 0) {

                config.slice1scale = this.options.maxScale;

            }
            if (config.slice2scale > this.options.maxScale || config.slice2scale <= 0) {

                config.slice2scale = this.options.maxScale;

            }
            if (config.orientation !== 'vertical' && config.orientation !== 'horizontal') {

                config.orientation = 'horizontal'

            }

        },
        _onEndNavigate: function(jQueryslice, jQueryoldSlide, dir) {

            // reset previous slide's style after next slide is shown
            var jQueryslide = jQueryslice.parent(),
                removeClasses = 'sl-trans-elems sl-trans-back-elems';

            // remove second slide's slice
            jQueryslice.remove();
            // unwrap..
            jQueryslide.css('z-index', 1)
                .find('div.sl-content-wrapper')
                .unwrap();

            // hide previous current slide
            jQueryoldSlide.hide().removeClass(removeClasses);
            jQueryslide.removeClass(removeClasses);
            // now we can navigate again..
            this.isAnimating = false;
            this.options.onAfterChange(jQueryslide, this.current);

        },
        _setSize: function() {

            // the slider and content wrappers will have the window's width and height
            var cssStyle = {
                width: this.size.width,
                height: this.size.height
            };

            this.jQueryel.css(cssStyle).find('div.sl-content-wrapper').css(cssStyle);

        },
        _loadEvents: function() {

            var self = this;

            jQuerywindow.on('debouncedresize.slitslider', function(event) {

                // update size values
                self._getSize();
                // set the sizes again
                self._setSize();

            });

            if (this.options.keyboard) {

                jQuerydocument.on('keydown.slitslider', function(e) {

                    var keyCode = e.keyCode || e.which,
                        arrow = {
                            left: 37,
                            up: 38,
                            right: 39,
                            down: 40
                        };

                    switch (keyCode) {

                        case arrow.left:

                            self._stopSlideshow();
                            self._navigate('prev');
                            break;

                        case arrow.right:

                            self._stopSlideshow();
                            self._navigate('next');
                            break;

                    }

                });

            }

        },
        _startSlideshow: function() {

            var self = this;

            this.slideshow = setTimeout(function() {

                self._navigate('next');

                if (self.options.autoplay) {

                    self._startSlideshow();

                }

            }, this.options.interval);

        },
        _stopSlideshow: function() {

            if (this.options.autoplay) {

                clearTimeout(this.slideshow);
                this.isPlaying = false;
                this.options.autoplay = false;

            }

        },
        _destroy: function(callback) {

            this.jQueryel.off('.slitslider').removeData('slitslider');
            jQuerywindow.off('.slitslider');
            jQuerydocument.off('.slitslider');
            this.jQueryslides.each(function(i) {

                var jQueryslide = jQuery(this),
                    jQuerycontent = jQueryslide.find('div.sl-content').children();

                jQuerycontent.appendTo(jQueryslide);
                jQueryslide.children('div.sl-content-wrapper').remove();

            });
            this.jQueryslides.unwrap(this.jQueryslideWrapper).hide();
            this.jQueryslides.eq(0).show();
            if (callback) {

                callback.call();

            }

        },
        // public methos: adds more slides to the slider
        add: function(jQueryslides, callback) {

            this.jQueryslides = this.jQueryslides.add(jQueryslides);

            var self = this;


            jQueryslides.each(function(i) {

                var jQueryslide = jQuery(this),
                    // vertical || horizontal
                    orientation = jQueryslide.data('orientation');

                jQueryslide.hide().addClass('sl-slide-' + orientation)
                    .children()
                    .wrapAll('<div class="sl-content-wrapper" />')
                    .wrapAll('<div class="sl-content" />')
                    .end()
                    .appendTo(self.jQueryel.find('div.sl-slides-wrapper'));

            });

            this._setSize();

            this.slidesCount = this.jQueryslides.length;

            if (callback) {

                callback.call(jQueryitems);

            }

        },
        // public method: shows next slide
        next: function() {

            this._stopSlideshow();
            this._navigate('next');

        },
        // public method: shows previous slide
        previous: function() {

            this._stopSlideshow();
            this._navigate('prev');

        },
        // public method: goes to a specific slide
        jump: function(pos) {

            pos -= 1;

            if (pos === this.current || pos >= this.slidesCount || pos < 0) {

                return false;

            }

            this._stopSlideshow();
            this._navigate(pos > this.current ? 'next' : 'prev', pos);

        },
        // public method: starts the slideshow
        // any call to next(), previous() or jump() will stop the slideshow
        play: function() {

            if (!this.isPlaying) {

                this.isPlaying = true;

                this._navigate('next');
                this.options.autoplay = true;
                this._startSlideshow();

            }

        },
        // public method: pauses the slideshow
        pause: function() {

            if (this.isPlaying) {

                this._stopSlideshow();

            }

        },
        // public method: check if isAnimating is true
        isActive: function() {

            return this.isAnimating;

        },
        // publicc methos: destroys the slicebox instance
        destroy: function(callback) {

            this._destroy(callback);

        }

    };

    var logError = function(message) {

        if (window.console) {

            window.console.error(message);

        }

    };

    jQuery.fn.slitslider = function(options) {

        var self = jQuery.data(this, 'slitslider');

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function() {

                if (!self) {

                    logError("cannot call methods on slitslider prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;

                }

                if (!jQuery.isFunction(self[options]) || options.charAt(0) === "_") {

                    logError("no such method '" + options + "' for slitslider self");
                    return;

                }

                self[options].apply(self, args);

            });

        } else {

            this.each(function() {

                if (self) {

                    self._init();

                } else {

                    self = jQuery.data(this, 'slitslider', new jQuery.Slitslider(options, this));

                }

            });

        }

        return self;

    };

})(jQuery, window);

(function(jQuery) {
    jQuery.fn.cond = function() {
        var e, a = arguments,
            b = 0,
            f, d, c;
        while (!f && b < a.length) {
            f = a[b++];
            d = a[b++];
            f = jQuery.isFunction(f) ? f.call(this) : f;
            c = !d ? f : f ? d.call(this, f) : e
        }
        return c !== e ? c : this
    }
})(jQuery);




/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

jQuery(function() {

    var Page = (function() {

        var jQuerynavArrows = jQuery('#nav-arrows'),
            jQuerynav = jQuery('#nav-dots > span'),
            slitslider = jQuery('#slider').slitslider({
                onBeforeChange: function(slide, pos) {

                    jQuerynav.removeClass('nav-dot-current');
                    jQuerynav.eq(pos).addClass('nav-dot-current');

                }
            }),

            init = function() {

                initEvents();

            },
            initEvents = function() {

                // add navigation events
                jQuerynavArrows.children(':last').on('click', function() {

                    slitslider.next();
                    return false;

                });

                jQuerynavArrows.children(':first').on('click', function() {

                    slitslider.previous();
                    return false;

                });

                jQuerynav.each(function(i) {

                    jQuery(this).on('click', function(event) {

                        var jQuerydot = jQuery(this);

                        if (!slitslider.isActive()) {

                            jQuerynav.removeClass('nav-dot-current');
                            jQuerydot.addClass('nav-dot-current');

                        }

                        slitslider.jump(i + 1);
                        return false;

                    });

                });

            };

        return {
            init: init
        };

    })();

    Page.init();

});