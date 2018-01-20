(function(jQuery, window, document, undefined) {
    'use strict';

    var gridContainer = jQuery('#grid-container'),
        filtersContainer = jQuery('#filters-container'),
        wrap, filtersCallback;


    /*********************************
       mt-portfolio
     *********************************/
    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1600,
            cols: 1
        }, {
            width: 1200,
            cols: 1
        }, {
            width: 800,
            cols: 1
        }, {
            width: 500,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.mt-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="mt-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.mt-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="mt-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.mt-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });


    /*********************************
        add listener for filters
     *********************************/
    if (filtersContainer.hasClass('mt-l-filters-dropdown')) {
        wrap = filtersContainer.find('.mt-l-filters-dropdownWrap');

        wrap.on({
            'mouseover.cbp': function() {
                wrap.addClass('mt-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function() {
                wrap.removeClass('mt-l-filters-dropdownWrap-open');
            }
        });

        filtersCallback = function(me) {
            wrap.find('.mt-filter-item').removeClass('mt-filter-item-active');
            wrap.find('.mt-l-filters-dropdownHeader').text(me.text());
            me.addClass('mt-filter-item-active');
            wrap.trigger('mouseleave.cbp');
        };
    } else {
        filtersCallback = function(me) {
            me.addClass('mt-filter-item-active').siblings().removeClass('mt-filter-item-active');
        };
    }

    filtersContainer.on('click.cbp', '.mt-filter-item', function() {
        var me = jQuery(this);

        if (me.hasClass('mt-filter-item-active')) {
            return;
        }

        // get mt-portfolio data and check if is still animating (reposition) the items.
        if (!jQuery.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});
    });


    /*********************************
        activate counter for filters
     *********************************/
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.mt-filter-item'), function() {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|jQuery)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.mt-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });


    /*********************************
        add load more functionality
     *********************************/
    var loadMoreObject = Object.create({
        init: function() {
            var t = this;

            // the job inactive
            t.isActive = false;

            t.numberOfClicks = 0;

            // cache link selector
            t.loadMore = jQuery('.mt-l-loadMore-text-link');

            // cache window selector
            t.window = jQuery(window);

            // add events for scroll
            t.addEvents();

            // trigger method on init
            t.getNewItems();

            return t;
        },

        addEvents: function() {
            var t = this;

            t.window.on("scroll.loadMoreObject", function() {
                // get new items on scroll
                t.getNewItems();
            });
        },

        getNewItems: function() {
            var t = this,
                topLoadMore, topWindow;

            if (t.isActive || t.loadMore.hasClass('mt-l-loadMore-text-stop')) {
                return;
            }

            //topLoadMore = t.loadMore.offset().top;
            topWindow = t.window.scrollTop() + t.window.height();

            if (topLoadMore > topWindow) {
                return;
            }

            // this job is now busy
            t.isActive = true;

            // increment number of clicks
            t.numberOfClicks++;

            // perform ajax request
            jQuery.ajax({
                    url: t.loadMore.attr('data-href'),
                    type: 'GET',
                    dataType: 'HTML',
                    cache: true
                })
                .done(function(result) {
                    var items, itemsNext;

                    // find current container
                    items = jQuery(result).filter(function() {
                        return jQuery(this).is('div' + '.mt-loadMore-block' + t.numberOfClicks);
                    });

                    gridContainer.cubeportfolio('appendItems', items.html(),
                        function() {
                            // check if we have more works
                            itemsNext = jQuery(result).filter(function() {
                                return jQuery(this).is('div' + '.mt-loadMore-block' + (t.numberOfClicks + 1));
                            });

                            if (itemsNext.length === 0) {

                                t.loadMore.text('NO MORE ENTRIES');
                                t.loadMore.addClass('mt-l-loadMore-text-stop');

                                t.window.off("scroll.loadMoreObject");

                            } else {
                                // make the job inactive
                                t.isActive = false;

                                //topLoadMore = t.loadMore.offset().top;
                                topWindow = t.window.scrollTop() + t.window.height();

                                if (topLoadMore <= topWindow) {
                                    t.getNewItems();
                                }
                            }

                        });

                })
                .fail(function() {
                    // make the job inactive
                    t.isActive = false;
                });
        }
    }).init();

    // when the height of grid is changed
    gridContainer.on('filterComplete.cbp', function() {
        loadMoreObject.window.trigger('scroll.loadMoreObject');
    });

})(jQuery, window, document);