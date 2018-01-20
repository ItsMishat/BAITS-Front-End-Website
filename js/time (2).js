/* Backstretch */
(function(jQuery, window, undefined) {
    'use strict';
    jQuery.fn.backstretch = function(images, options) {
        // We need at least one image or method name
        if (images === undefined || images.length === 0) {
            jQuery.error("No images were supplied for Backstretch");
        }
        if (jQuery(window).scrollTop() === 0) {
            window.scrollTo(0, 0);
        }
        return this.each(function() {
            var jQuerythis = jQuery(this),
                obj = jQuerythis.data('backstretch');
            if (obj) {
                if (typeof images == 'string' && typeof obj[images] == 'function') {
                    // Call the method
                    obj[images](options);
                    return;
                }
                options = jQuery.extend(obj.options, options);
                obj.destroy(true);
            }
            obj = new Backstretch(this, images, options);
            jQuerythis.data('backstretch', obj);
        });
    };
    jQuery.backstretch = function(images, options) {
        return jQuery('body').backstretch(images, options).data('backstretch');
    };
    jQuery.expr[':'].backstretch = function(elem) {
        return jQuery(elem).data('backstretch') !== undefined;
    };
    jQuery.fn.backstretch.defaults = {
        centeredX: true // Should we center the image on the X axis?
            ,
        centeredY: true // Should we center the image on the Y axis?
            ,
        duration: 5000 // Amount of time in between slides (if slideshow)
            ,
        fade: 0 // Speed of fade transition between slides
    };
    var styles = {
        wrap: {
            left: 0,
            top: 0,
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            height: '100%',
            width: '100%',
            zIndex: -999999
        },
        img: {
            position: 'absolute',
            display: 'none',
            margin: 0,
            padding: 0,
            border: 'none',
            width: 'auto',
            height: 'auto',
            maxHeight: 'none',
            maxWidth: 'none',
            zIndex: -999999
        }
    };
    var Backstretch = function(container, images, options) {
        this.options = jQuery.extend({}, jQuery.fn.backstretch.defaults, options || {});
        this.images = jQuery.isArray(images) ? images : [images];
        // Preload images
        jQuery.each(this.images, function() {
            jQuery('<img />')[0].src = this;
        });
        // Convenience reference to know if the container is body.
        this.isBody = container === document.body;
        this.jQuerycontainer = jQuery(container);
        this.jQueryroot = this.isBody ? supportsFixedPosition ? jQuery(window) : jQuery(document) : this.jQuerycontainer;
        // Don't create a new wrap if one already exists (from a previous instance of Backstretch)
        var jQueryexisting = this.jQuerycontainer.children(".backstretch").first();
        this.jQuerywrap = jQueryexisting.length ? jQueryexisting : jQuery('<div class="backstretch"></div>').css(styles.wrap).appendTo(this.jQuerycontainer);
        // Non-body elements need some style adjustments
        if (!this.isBody) {
            // If the container is statically positioned, we need to make it relative,
            // and if no zIndex is defined, we should set it to zero.
            var position = this.jQuerycontainer.css('position'),
                zIndex = this.jQuerycontainer.css('zIndex');
            this.jQuerycontainer.css({
                position: position === 'static' ? 'relative' : position,
                zIndex: zIndex === 'auto' ? 0 : zIndex,
                background: 'none'
            });
            // Needs a higher z-index
            this.jQuerywrap.css({
                zIndex: -999998
            });
        }
        // Fixed or absolute positioning?
        this.jQuerywrap.css({
            position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
        });
        // Set the first image
        this.index = 0;
        this.show(this.index);
        // Listen for resize
        jQuery(window).on('resize.backstretch', jQuery.proxy(this.resize, this)).on('orientationchange.backstretch', jQuery.proxy(function() {
            // Need to do this in order to get the right window height
            if (this.isBody && window.pageYOffset === 0) {
                window.scrollTo(0, 1);
                this.resize();
            }
        }, this));
    };
    Backstretch.prototype = {
        resize: function() {
            try {
                var bgCSS = {
                        left: 0,
                        top: 0
                    },
                    rootWidth = this.isBody ? this.jQueryroot.width() : this.jQueryroot.innerWidth(),
                    bgWidth = rootWidth,
                    rootHeight = this.isBody ? (window.innerHeight ? window.innerHeight : this.jQueryroot.height()) : this.jQueryroot.innerHeight(),
                    bgHeight = bgWidth / this.jQueryimg.data('ratio'),
                    bgOffset;
                // Make adjustments based on image ratio
                if (bgHeight >= rootHeight) {
                    bgOffset = (bgHeight - rootHeight) / 2;
                    if (this.options.centeredY) {
                        bgCSS.top = '-' + bgOffset + 'px';
                    }
                } else {
                    bgHeight = rootHeight;
                    bgWidth = bgHeight * this.jQueryimg.data('ratio');
                    bgOffset = (bgWidth - rootWidth) / 2;
                    if (this.options.centeredX) {
                        bgCSS.left = '-' + bgOffset + 'px';
                    }
                }
                this.jQuerywrap.css({
                    width: rootWidth,
                    height: rootHeight
                }).find('img:not(.deleteable)').css({
                    width: bgWidth,
                    height: bgHeight
                }).css(bgCSS);
            } catch (err) {}
            return this;
        },
        show: function(newIndex) {
            // Validate index
            if (Math.abs(newIndex) > this.images.length - 1) {
                return;
            }
            // Vars
            var self = this,
                oldImage = self.jQuerywrap.find('img').addClass('deleteable'),
                evtOptions = {
                    relatedTarget: self.jQuerycontainer[0]
                };
            self.jQuerycontainer.trigger(jQuery.Event('backstretch.before', evtOptions), [self, newIndex]);
            this.index = newIndex;
            clearInterval(self.interval);
            self.jQueryimg = jQuery('<img />').css(styles.img).bind('load', function(e) {
                var imgWidth = this.width || jQuery(e.target).width(),
                    imgHeight = this.height || jQuery(e.target).height();
                jQuery(this).data('ratio', imgWidth / imgHeight);
                jQuery(this).fadeIn(self.options.speed || self.options.fade, function() {
                    oldImage.remove();
                    // Resume the slideshow
                    if (!self.paused) {
                        self.cycle();
                    }
                    jQuery(['after', 'show']).each(function() {
                        self.jQuerycontainer.trigger(jQuery.Event('backstretch.' + this, evtOptions), [self, newIndex]);
                    });
                });
                self.resize();
            }).appendTo(self.jQuerywrap);
            self.jQueryimg.attr('src', self.images[newIndex]);
            return self;
        },
        next: function() {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
        },
        prev: function() {
            return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
        },
        pause: function() {
            this.paused = true;
            return this;
        },
        resume: function() {
            this.paused = false;
            this.next();
            return this;
        },
        cycle: function() {
            // Start/resume the slideshow
            if (this.images.length > 1) {
                // Clear the interval, just in case
                clearInterval(this.interval);
                this.interval = setInterval(jQuery.proxy(function() {
                    // Check for paused slideshow
                    if (!this.paused) {
                        this.next();
                    }
                }, this), this.options.duration);
            }
            return this;
        },
        destroy: function(preserveBackground) {
            // Stop the resize events
            jQuery(window).off('resize.backstretch orientationchange.backstretch');
            // Clear the interval
            clearInterval(this.interval);
            // Remove Backstretch
            if (!preserveBackground) {
                this.jQuerywrap.remove();
            }
            this.jQuerycontainer.removeData('backstretch');
        }
    };
    var supportsFixedPosition = (function() {
        var ua = navigator.userAgent,
            platform = navigator.platform
            // Rendering engine is Webkit, and capture major version
            ,
            wkmatch = ua.match(/AppleWebKit\/([0-9]+)/),
            wkversion = !!wkmatch && wkmatch[1],
            ffmatch = ua.match(/Fennec\/([0-9]+)/),
            ffversion = !!ffmatch && ffmatch[1],
            operammobilematch = ua.match(/Opera Mobi\/([0-9]+)/),
            omversion = !!operammobilematch && operammobilematch[1],
            iematch = ua.match(/MSIE ([0-9]+)/),
            ieversion = !!iematch && iematch[1];
        return !(
            // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
            ((platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1 || platform.indexOf("iPod") > -1) && wkversion && wkversion < 534) ||
            // Opera Mini
            (window.operamini && ({}).toString.call(window.operamini) === "[object OperaMini]") || (operammobilematch && omversion < 7458) ||
            //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
            (ua.indexOf("Android") > -1 && wkversion && wkversion < 533) ||
            // Firefox Mobile before 6.0 -
            (ffversion && ffversion < 6) ||
            // WebOS less than 3
            ("palmGetResource" in window && wkversion && wkversion < 534) ||
            // MeeGo
            (ua.indexOf("MeeGo") > -1 && ua.indexOf("NokiaBrowser/8.5.0") > -1) ||
            // IE6
            (ieversion && ieversion <= 6));
    }());
}(jQuery, window));
/*!* jQuery Countdown  */
(function(jQuery) {
    jQuery.fn.countDown = function(options) {
        config = {};
        jQuery.extend(config, options);
        diffSecs = this.setCountDown(config);
        if (config.onComplete) {
            jQuery.data(jQuery(this)[0], 'callback', config.onComplete);
        }
        if (config.omitWeeks) {
            jQuery.data(jQuery(this)[0], 'omitWeeks', config.omitWeeks);
        }
        jQuery('#' + jQuery(this).attr('id') + ' .digit').html('<div class="top"></div><div class="bottom"></div>');
        jQuery(this).doCountDown(jQuery(this).attr('id'), diffSecs, 500);
        return this;
    };
    jQuery.fn.stopCountDown = function() {
        clearTimeout(jQuery.data(this[0], 'timer'));
    };
    jQuery.fn.startCountDown = function() {
        this.doCountDown(jQuery(this).attr('id'), jQuery.data(this[0], 'diffSecs'), 500);
    };
    jQuery.fn.setCountDown = function(options) {
        var targetTime = new Date();
        if (options.targetDate) {
            targetTime = new Date(options.targetDate.month + '/' + options.targetDate.day + '/' + options.targetDate.year + ' ' + options.targetDate.hour + ':' + options.targetDate.min + ':' + options.targetDate.sec + (options.targetDate.utc ? ' UTC' : ''));
        } else if (options.targetOffset) {
            targetTime.setFullYear(options.targetOffset.year + targetTime.getFullYear());
            targetTime.setMonth(options.targetOffset.month + targetTime.getMonth());
            targetTime.setDate(options.targetOffset.day + targetTime.getDate());
            targetTime.setHours(options.targetOffset.hour + targetTime.getHours());
            targetTime.setMinutes(options.targetOffset.min + targetTime.getMinutes());
            targetTime.setSeconds(options.targetOffset.sec + targetTime.getSeconds());
        }
        var nowTime = new Date();
        diffSecs = Math.floor((targetTime.valueOf() - nowTime.valueOf()) / 1000);
        jQuery.data(this[0], 'diffSecs', diffSecs);
        return diffSecs;
    };
    jQuery.fn.doCountDown = function(id, diffSecs, duration) {
        jQuerythis = jQuery('#' + id);
        if (diffSecs <= 0) {
            diffSecs = 0;
            if (jQuery.data(jQuerythis[0], 'timer')) {
                clearTimeout(jQuery.data(jQuerythis[0], 'timer'));
            }
        }
        secs = diffSecs % 60;
        mins = Math.floor(diffSecs / 60) % 60;
        hours = Math.floor(diffSecs / 60 / 60) % 24;
        if (jQuery.data(jQuerythis[0], 'omitWeeks') == true) {
            days = Math.floor(diffSecs / 60 / 60 / 24);
            weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7);
        } else {
            days = Math.floor(diffSecs / 60 / 60 / 24) % 7;
            weeks = Math.floor(diffSecs / 60 / 60 / 24 / 7);
        }
        jQuerythis.dashChangeTo(id, 'seconds_dash', secs, duration ? duration : 800);
        jQuerythis.dashChangeTo(id, 'minutes_dash', mins, duration ? duration : 1200);
        jQuerythis.dashChangeTo(id, 'hours_dash', hours, duration ? duration : 1200);
        jQuerythis.dashChangeTo(id, 'days_dash', days, duration ? duration : 1200);
        jQuerythis.dashChangeTo(id, 'weeks_dash', weeks, duration ? duration : 1200);
        jQuery.data(jQuerythis[0], 'diffSecs', diffSecs);
        if (diffSecs > 0) {
            e = jQuerythis;
            t = setTimeout(function() {
                e.doCountDown(id, diffSecs - 1)
            }, 1000);
            jQuery.data(e[0], 'timer', t);
        } else if (cb = jQuery.data(jQuerythis[0], 'callback')) {
            jQuery.data(jQuerythis[0], 'callback')();
        }
    };
    jQuery.fn.dashChangeTo = function(id, dash, n, duration) {
        jQuerythis = jQuery('#' + id);
        for (var i = (jQuerythis.find('.' + dash + ' .digit').length - 1); i >= 0; i--) {
            var d = n % 10;
            n = (n - d) / 10;
            jQuerythis.digitChangeTo('#' + jQuerythis.attr('id') + ' .' + dash + ' .digit:eq(' + i + ')', d, duration);
        }
    };
    jQuery.fn.digitChangeTo = function(digit, n, duration) {
        if (!duration) {
            duration = 800;
        }
        if (jQuery(digit + ' div.top').html() != n + '') {
            jQuery(digit + ' div.top').css({
                'display': 'none'
            });
            jQuery(digit + ' div.top').html((n ? n : '0')).slideDown(duration);
            jQuery(digit + ' div.bottom').animate({
                'height': ''
            }, duration, function() {
                jQuery(digit + ' div.bottom').html(jQuery(digit + ' div.top').html());
                jQuery(digit + ' div.bottom').css({
                    'display': 'block',
                    'height': ''
                });
                jQuery(digit + ' div.top').hide().slideUp(10);
            });
        }
    };
})(jQuery);
/* ======== Countdown ======= */
jQuery('#countdown_dashboard').countDown({
    targetDate: {
        'day': 30,
        'month': 12,
        'year': 2016,
        'hour': 11,
        'min': 13,
        'sec': 0
    },
    omitWeeks: true
});