/*!
 * Portfolio
 */
! function(a, b, c, d) {
    "use strict";
    var e = "cbp",
        f = "." + e;
    "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }), a.expr[":"].uncached = function(b) {
        if (!a(b).is('img[src][src!=""]')) return !1;
        var c = new Image;
        return c.src = b.src, !c.complete
    };
    var g = {
            init: function(a, b) {
                var c, d = this;
                return d.cubeportfolio = a, d.type = b, d.isOpen = !1, d.options = d.cubeportfolio.options, "singlePageInline" === b ? (d.matrice = [-1, -1], d.height = 0, void d._createMarkupSinglePageInline()) : (d._createMarkup(), void(d.options.singlePageDeeplinking && "singlePage" === b && (d.url = location.href, "#" === d.url.slice(-1) && (d.url = d.url.slice(0, -1)), c = d.cubeportfolio.blocksAvailable.find(d.options.singlePageDelegate).filter(function() {
                    return d.url.split("#cbp=")[1] === this.getAttribute("href")
                })[0], c && (d.url = d.url.replace(/#cbp=(.+)/gi, ""), d.openSinglePage(d.cubeportfolio.blocksAvailable.find(d.options.singlePageDelegate), c)))))
            },
            _createMarkup: function() {
                var b = this,
                    d = "";
                "singlePage" === b.type && "left" !== b.options.singlePageAnimation && (d = " mt-popup-singlePage-" + b.options.singlePageAnimation), b.wrap = a("<div/>", {
                    "class": "mt-popup-wrap mt-popup-" + b.type + d,
                    "data-action": "lightbox" === b.type ? "close" : ""
                }).on("click" + f, function(c) {
                    if (!b.stopEvents) {
                        var d = a(c.target).attr("data-action");
                        b[d] && (b[d](), c.preventDefault())
                    }
                }), b.content = a("<div/>", {
                    "class": "mt-popup-content"
                }).appendTo(b.wrap), a("<div/>", {
                    "class": "mt-popup-loadingBox"
                }).appendTo(b.wrap), "ie8" === b.cubeportfolio.browser && (b.bg = a("<div/>", {
                    "class": "mt-popup-ie8bg",
                    "data-action": "lightbox" === b.type ? "close" : ""
                }).appendTo(b.wrap)), b.navigationWrap = a("<div/>", {
                    "class": "mt-popup-navigation-wrap"
                }).appendTo(b.wrap), b.navigation = a("<div/>", {
                    "class": "mt-popup-navigation"
                }).appendTo(b.navigationWrap), b.closeButton = a("<div/>", {
                    "class": "mt-popup-close",
                    title: "Close (Esc arrow key)",
                    "data-action": "close"
                }).appendTo(b.navigation), b.nextButton = a("<div/>", {
                    "class": "mt-popup-next",
                    title: "Next (Right arrow key)",
                    "data-action": "next"
                }).appendTo(b.navigation), b.prevButton = a("<div/>", {
                    "class": "mt-popup-prev",
                    title: "Previous (Left arrow key)",
                    "data-action": "prev"
                }).appendTo(b.navigation), "singlePage" === b.type && (b.options.singlePageCounter && (b.counter = a(b.options.singlePageCounter).appendTo(b.navigation), b.counter.text("")), b.content.on("click" + f, b.options.singlePageDelegate, function(a) {
                    a.preventDefault();
                    var c, d = b.dataArray.length,
                        e = this.getAttribute("href");
                    for (c = 0; d > c && b.dataArray[c].url !== e; c++);
                    b.singlePageJumpTo(c - b.current)
                }), b.wrap.on("mousewheel" + f + " DOMMouseScroll" + f, function(a) {
                    a.stopImmediatePropagation()
                })), a(c).on("keydown" + f, function(a) {
                    b.isOpen && (b.stopEvents || (37 === a.keyCode ? b.prev() : 39 === a.keyCode ? b.next() : 27 === a.keyCode && b.close()))
                })
            },
            _createMarkupSinglePageInline: function() {
                var b = this;
                b.wrap = a("<div/>", {
                    "class": "mt-popup-singlePageInline"
                }).on("click" + f, function(c) {
                    if (!b.stopEvents) {
                        var d = a(c.target).attr("data-action");
                        d && b[d] && (b[d](), c.preventDefault())
                    }
                }), b.content = a("<div/>", {
                    "class": "mt-popup-content"
                }).appendTo(b.wrap), a("<div/>", {
                    "class": "mt-popup-loadingBox"
                }).appendTo(b.wrap), b.navigation = a("<div/>", {
                    "class": "mt-popup-navigation"
                }).appendTo(b.wrap), b.closeButton = a("<div/>", {
                    "class": "mt-popup-close",
                    title: "Close (Esc arrow key)",
                    "data-action": "close"
                }).appendTo(b.navigation)
            },
            destroy: function() {
                var b = this,
                    d = a("body");
                a(c).off("keydown" + f), d.off("click" + f, b.options.lightboxDelegate), d.off("click" + f, b.options.singlePageDelegate), b.content.off("click" + f, b.options.singlePageDelegate), b.cubeportfolio.$obj.off("click" + f, b.options.singlePageInlineDelegate), b.cubeportfolio.$obj.off("click" + f, b.options.lightboxDelegate), b.cubeportfolio.$obj.off("click" + f, b.options.singlePageDelegate), b.cubeportfolio.$obj.removeClass("mt-popup-isOpening"), b.cubeportfolio.blocks.removeClass("mt-singlePageInline-active"), b.wrap.remove()
            },
            openLightbox: function(d, e) {
                var f, g, h = this,
                    i = 0,
                    j = [];
                if (!h.isOpen) {
                    if (h.isOpen = !0, h.stopEvents = !1, h.dataArray = [], h.current = null, f = e.getAttribute("href"), null === f) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                    a.each(d, function(b, c) {
                        var d, e = c.getAttribute("href"),
                            g = e,
                            k = "isImage";
                        if (-1 === a.inArray(e, j)) {
                            if (f === e) h.current = i;
                            else if (!h.options.lightboxGallery) return;
                            /youtube/i.test(e) ? (d = e.substring(e.lastIndexOf("v=") + 2), /autoplay=/i.test(d) || (d += "&autoplay=1"), d = d.replace(/\?|&/, "?"), g = "//www.youtube.com/embed/" + d, k = "isYoutube") : /vimeo/i.test(e) ? (d = e.substring(e.lastIndexOf("/") + 1), /autoplay=/i.test(d) || (d += "&autoplay=1"), d = d.replace(/\?|&/, "?"), g = "//player.vimeo.com/video/" + d, k = "isVimeo") : /ted\.com/i.test(e) ? (g = "http://embed.ted.com/talks/" + e.substring(e.lastIndexOf("/") + 1) + ".html", k = "isTed") : /(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e) && (g = e.split(-1 !== e.indexOf("|") ? "|" : "%7C"), k = "isSelfHosted"), h.dataArray.push({
                                src: g,
                                title: c.getAttribute(h.options.lightboxTitleSrc),
                                type: k
                            }), i++
                        }
                        j.push(e)
                    }), h.counterTotal = h.dataArray.length, 1 === h.counterTotal ? (h.nextButton.hide(), h.prevButton.hide(), h.dataActionImg = "") : (h.nextButton.show(), h.prevButton.show(), h.dataActionImg = 'data-action="next"'), h.wrap.appendTo(c.body), h.scrollTop = a(b).scrollTop(), h.originalStyle = a("html").attr("style"), a("html").css({
                        overflow: "hidden",
                        paddingRight: b.innerWidth - a(c).width()
                    }), h.wrap.show(), g = h.dataArray[h.current], h[g.type](g)
                }
            },
            openSinglePage: function(d, e) {
                var g, h = this,
                    i = 0,
                    j = [];
                if (!h.isOpen) {
                    if (h.cubeportfolio.singlePageInline && h.cubeportfolio.singlePageInline.isOpen && h.cubeportfolio.singlePageInline.close(), h.isOpen = !0, h.stopEvents = !1, h.dataArray = [], h.current = null, g = e.getAttribute("href"), null === g) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                    if (a.each(d, function(b, c) {
                            var d = c.getAttribute("href"); - 1 === a.inArray(d, j) && (g === d && (h.current = i), h.dataArray.push({
                                url: d,
                                element: c
                            }), i++), j.push(d)
                        }), h.counterTotal = h.dataArray.length, 1 === h.counterTotal ? (h.nextButton.hide(), h.prevButton.hide()) : (h.nextButton.show(), h.prevButton.show()), h.wrap.appendTo(c.body), h.scrollTop = a(b).scrollTop(), a("html").css({
                            overflow: "hidden",
                            paddingRight: b.innerWidth - a(c).width()
                        }), h.wrap.scrollTop(0), h.wrap.show(), h.finishOpen = 2, h.navigationMobile = a(), h.wrap.one(h.cubeportfolio.transitionEnd, function() {
                            var b;
                            h.options.singlePageStickyNavigation && (h.wrap.addClass("mt-popup-singlePage-sticky"), b = h.wrap[0].clientWidth, h.navigationWrap.width(b), ("android" === h.cubeportfolio.browser || "ios" === h.cubeportfolio.browser) && (h.navigationMobile = a("<div/>", {
                                "class": "mt-popup-singlePage mt-popup-singlePage-sticky"
                            }).on("click" + f, function(b) {
                                if (!h.stopEvents) {
                                    var c = a(b.target).attr("data-action");
                                    h[c] && (h[c](), b.preventDefault())
                                }
                            }), h.navigationMobile.appendTo(c.body).append(h.navigationWrap))), h.finishOpen--, h.finishOpen <= 0 && h.updateSinglePageIsOpen.call(h)
                        }), "ie8" === h.cubeportfolio.browser || "ie9" === h.cubeportfolio.browser) {
                        if (h.options.singlePageStickyNavigation) {
                            var k = h.wrap[0].clientWidth;
                            h.navigationWrap.width(k), setTimeout(function() {
                                h.wrap.addClass("mt-popup-singlePage-sticky")
                            }, 1e3)
                        }
                        h.finishOpen--
                    }
                    h.wrap.addClass("mt-popup-loading"), h.cubeportfolio._forceReflow(h.wrap).addClass("mt-popup-singlePage-open"), h.options.singlePageDeeplinking && (location.href = h.url + "#cbp=" + h.dataArray[h.current].url), a.isFunction(h.options.singlePageCallback) && h.options.singlePageCallback.call(h, h.dataArray[h.current].url, h.dataArray[h.current].element)
                }
            },
            openSinglePageInline: function(b, c, d) {
                var e, f, g, h, i, j, k = this,
                    l = 0,
                    m = 0,
                    n = 0;
                if (d = d || !1, k.fromOpen = d, k.storeBlocks = b, k.storeCurrentBlock = c, k.isOpen) return h = a(c).closest(".mt-item").index(), void(k.dataArray[k.current].url !== c.getAttribute("href") || k.current !== h ? k.cubeportfolio.singlePageInline.close("open", {
                    blocks: b,
                    currentBlock: c,
                    fromOpen: !0
                }) : k.close());
                if (k.wrap.addClass("mt-popup-loading"), k.isOpen = !0, k.stopEvents = !1, k.dataArray = [], k.current = null, e = c.getAttribute("href"), null === e) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                i = a(c).closest(".mt-item")[0], a.each(b, function(a, b) {
                    i === b && (k.current = a)
                }), k.dataArray[k.current] = {
                    url: e,
                    element: c
                }, j = a(k.dataArray[k.current].element).parents(".mt-item").addClass("mt-singlePageInline-active"), k.counterTotal = b.length, k.wrap.insertBefore(k.cubeportfolio.$ul), "top" === k.options.singlePageInlinePosition ? (m = 0, n = k.cubeportfolio.cols - 1) : "bottom" === k.options.singlePageInlinePosition ? (m = k.counterTotal, n = k.counterTotal, k.lastColumn = !0, d ? k.lastColumn && (k.top = k.lastColumnHeight) : (k.lastColumnHeight = k.cubeportfolio.height, k.top = k.lastColumnHeight)) : "above" === k.options.singlePageInlinePosition ? (l = Math.floor(k.current / k.cubeportfolio.cols), m = k.cubeportfolio.cols * l, n = k.cubeportfolio.cols * (l + 1) - 1) : (l = Math.floor(k.current / k.cubeportfolio.cols), m = Math.min(k.cubeportfolio.cols * (l + 1), k.counterTotal), n = Math.min(k.cubeportfolio.cols * (l + 2) - 1, k.counterTotal), f = Math.ceil((k.current + 1) / k.cubeportfolio.cols), g = Math.ceil(k.counterTotal / k.cubeportfolio.cols), k.lastColumn = f === g, d ? k.lastColumn && (k.top = k.lastColumnHeight) : (k.lastColumnHeight = k.cubeportfolio.height, k.top = k.lastColumnHeight)), k.matrice = [m, n], d || (k.finishOpen = 2, k.wrap.one(k.cubeportfolio.transitionEnd, function() {
                    k.finishOpen--, k.finishOpen <= 0 && k.singlePageInlineIsOpen.call(k)
                }), k._resizeSinglePageInline(!1, !0), ("ie8" === k.cubeportfolio.browser || "ie9" === k.cubeportfolio.browser) && k.finishOpen--), a.isFunction(k.options.singlePageInlineCallback) && k.options.singlePageInlineCallback.call(k, k.dataArray[k.current].url, k.dataArray[k.current].element)
            },
            _resizeSinglePageInline: function(c, d) {
                var e, f = this;
                c = c || !1, d = d || !1, f.height = f.content.outerHeight(!0), f.cubeportfolio._layout(), f.cubeportfolio._processStyle(f.cubeportfolio.transition), c && f.wrap.removeClass("mt-popup-loading"), f.cubeportfolio.$obj.addClass("mt-popup-isOpening"), f.wrap.css({
                    height: f.height
                }), f.wrap.css({
                    top: f.top
                }), e = f.lastColumn ? f.height : 0, f.cubeportfolio._resizeMainContainer(f.cubeportfolio.transition, e), f.options.singlePageInlineInFocus && d && (f.scrollTop = a(b).scrollTop(), a("body,html").animate({
                    scrollTop: f.wrap.offset().top - 150
                }))
            },
            appendScriptsToWrap: function(a) {
                var b = this,
                    d = 0,
                    e = function(f) {
                        var g = c.createElement("script"),
                            h = f.src;
                        g.type = "text/javascript", g.readyState ? g.onreadystatechange = function() {
                            ("loaded" == g.readyState || "complete" == g.readyState) && (g.onreadystatechange = null, d++, a[d] && e(a[d]))
                        } : g.onload = function() {
                            d++, a[d] && e(a[d])
                        }, h ? g.src = h : g.text = f.text, b.content[0].appendChild(g)
                    };
                e(a[0])
            },
            updateSinglePage: function(b, c, d) {
                var e, f = this;
                f.content.addClass("mt-popup-content").removeClass("mt-popup-content-basic"), d === !1 && f.content.removeClass("mt-popup-content").addClass("mt-popup-content-basic"), f.counter && (e = a(f._getCounterMarkup(f.options.singlePageCounter, f.current + 1, f.counterTotal)), f.counter.text(e.text())), f.content.html(b), c && f.appendScriptsToWrap(c), f.finishOpen--, f.finishOpen <= 0 && f.updateSinglePageIsOpen.call(f)
            },
            updateSinglePageIsOpen: function() {
                var b, c = this;
                c.wrap.addClass("mt-popup-ready"), c.wrap.removeClass("mt-popup-loading"), b = c.content.find(".mt-slider"), b ? (b.find(".mt-slider-item").addClass("mt-item"), c.slider = b.cubeportfolio({
                    layoutMode: "slider",
                    mediaQueries: [{
                        width: 1,
                        cols: 1
                    }],
                    gapHorizontal: 0,
                    gapVertical: 0,
                    caption: ""
                })) : c.slider = null, ("android" === c.cubeportfolio.browser || "ios" === c.cubeportfolio.browser) && a("html").css({
                    position: "fixed"
                }), c.cubeportfolio.$obj.trigger("updateSinglePageComplete" + f)
            },
            updateSinglePageInline: function(a, b) {
                var c = this;
                c.content.html(a), b && c.appendScriptsToWrap(b), c.finishOpen--, c.finishOpen <= 0 && c.singlePageInlineIsOpen.call(c)
            },
            singlePageInlineIsOpen: function() {
                var a = this;
                a.cubeportfolio._load(a.wrap, function() {
                    var b = a.content.find(".mt-slider");
                    b ? (b.find(".mt-slider-item").addClass("mt-item"), a.slider = b.cubeportfolio({
                        layoutMode: "slider",
                        displayType: "default",
                        mediaQueries: [{
                            width: 1,
                            cols: 1
                        }],
                        gapHorizontal: 0,
                        gapVertical: 0,
                        caption: ""
                    }), b.on("pluginResize.cbp", function() {
                        a._resizeSinglePageInline(!0)
                    })) : a.slider = null, a.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete" + f), a._resizeSinglePageInline(!0)
                })
            },
            isImage: function(b) {
                var c = this,
                    d = new Image;
                c.tooggleLoading(!0), a('<img src="' + b.src + '">').is("img:uncached") ? (a(d).on("load" + f + " error" + f, function() {
                    c.updateImagesMarkup(b.src, b.title, c._getCounterMarkup(c.options.lightboxCounter, c.current + 1, c.counterTotal)), c.tooggleLoading(!1)
                }), d.src = b.src) : (c.updateImagesMarkup(b.src, b.title, c._getCounterMarkup(c.options.lightboxCounter, c.current + 1, c.counterTotal)), c.tooggleLoading(!1))
            },
            isVimeo: function(a) {
                var b = this;
                b.updateVideoMarkup(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            isYoutube: function(a) {
                var b = this;
                b.updateVideoMarkup(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            isTed: function(a) {
                var b = this;
                b.updateVideoMarkup(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            isSelfHosted: function(a) {
                var b = this;
                b.updateSelfHostedVideo(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            _getCounterMarkup: function(a, b, c) {
                if (!a.length) return "";
                var d = {
                    current: b,
                    total: c
                };
                return a.replace(/\{\{current}}|\{\{total}}/gi, function(a) {
                    return d[a.slice(2, -2)]
                })
            },
            updateSelfHostedVideo: function(a, b, c) {
                var d, e = this;
                e.wrap.addClass("mt-popup-lightbox-isIframe");
                var f = '<div class="mt-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';
                for (d = 0; d < a.length; d++) /(\.mp4)/i.test(a[d]) ? f += '<source src="' + a[d] + '" type="video/mp4">' : /(\.ogg)|(\.ogv)/i.test(a[d]) ? f += '<source src="' + a[d] + '" type="video/ogg">' : /(\.webm)/i.test(a[d]) && (f += '<source src="' + a[d] + '" type="video/webm">');
                f += 'Your browser does not support the video tag.</video><div class="mt-popup-lightbox-bottom">' + (b ? '<div class="mt-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>", e.content.html(f), e.wrap.addClass("mt-popup-ready"), e.preloadNearbyImages()
            },
            updateVideoMarkup: function(a, b, c) {
                var d = this;
                d.wrap.addClass("mt-popup-lightbox-isIframe");
                var e = '<div class="mt-popup-lightbox-iframe"><iframe src="' + a + '" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="mt-popup-lightbox-bottom">' + (b ? '<div class="mt-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                d.content.html(e), d.wrap.addClass("mt-popup-ready"), d.preloadNearbyImages()
            },
            updateImagesMarkup: function(a, b, c) {
                var d = this;
                d.wrap.removeClass("mt-popup-lightbox-isIframe");
                var e = '<div class="mt-popup-lightbox-figure"><img src="' + a + '" class="mt-popup-lightbox-img" ' + d.dataActionImg + ' /><div class="mt-popup-lightbox-bottom">' + (b ? '<div class="mt-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                d.content.html(e), d.wrap.addClass("mt-popup-ready"), d.resizeImage(), d.preloadNearbyImages()
            },
            next: function() {
                var a = this;
                a[a.type + "JumpTo"](1)
            },
            prev: function() {
                var a = this;
                a[a.type + "JumpTo"](-1)
            },
            lightboxJumpTo: function(a) {
                var b, c = this;
                c.current = c.getIndex(c.current + a), b = c.dataArray[c.current], c[b.type](b)
            },
            singlePageJumpTo: function(b) {
                var c = this;
                c.current = c.getIndex(c.current + b), a.isFunction(c.options.singlePageCallback) && (c.resetWrap(), c.wrap.scrollTop(0), c.wrap.addClass("mt-popup-loading"), c.options.singlePageCallback.call(c, c.dataArray[c.current].url, c.dataArray[c.current].element), c.options.singlePageDeeplinking && (location.href = c.url + "#cbp=" + c.dataArray[c.current].url))
            },
            resetWrap: function() {
                var a = this;
                "singlePage" === a.type && a.options.singlePageDeeplinking && (location.href = a.url + "#")
            },
            getIndex: function(a) {
                var b = this;
                return a %= b.counterTotal, 0 > a && (a = b.counterTotal + a), a
            },
            close: function(c, d) {
                var e = this;
                e.isOpen = !1, "singlePageInline" === e.type ? "open" === c ? (e.wrap.addClass("mt-popup-loading"), a(e.dataArray[e.current].element).closest(".mt-item").removeClass("mt-singlePageInline-active"), e.openSinglePageInline(d.blocks, d.currentBlock, d.fromOpen)) : (e.matrice = [-1, -1], e.cubeportfolio._layout(), e.cubeportfolio._processStyle(e.cubeportfolio.transition), e.cubeportfolio._resizeMainContainer(e.cubeportfolio.transition), e.wrap.css({
                    height: 0
                }), a(e.dataArray[e.current].element).parents(".mt-item").removeClass("mt-singlePageInline-active"), "ie8" === e.cubeportfolio.browser || "ie9" === e.cubeportfolio.browser ? (e.content.html(""), e.wrap.detach(), e.cubeportfolio.$obj.removeClass("mt-popup-isOpening"), "promise" === c && a.isFunction(d.callback) && d.callback.call(e.cubeportfolio)) : e.wrap.one(e.cubeportfolio.transitionEnd, function() {
                    e.content.html(""), e.wrap.detach(), e.cubeportfolio.$obj.removeClass("mt-popup-isOpening"), "promise" === c && a.isFunction(d.callback) && d.callback.call(e.cubeportfolio)
                }), e.options.singlePageInlineInFocus && a("body, html").animate({
                    scrollTop: e.scrollTop
                })) : "singlePage" === e.type ? (e.resetWrap(), e.wrap.removeClass("mt-popup-ready"), ("android" === e.cubeportfolio.browser || "ios" === e.cubeportfolio.browser) && (a("html").css({
                    position: ""
                }), e.navigationWrap.appendTo(e.wrap), e.navigationMobile.remove()), a(b).scrollTop(e.scrollTop), setTimeout(function() {
                    e.stopScroll = !0, e.navigationWrap.css({
                        top: e.wrap.scrollTop()
                    }), e.wrap.removeClass("mt-popup-singlePage-open mt-popup-singlePage-sticky"), ("ie8" === e.cubeportfolio.browser || "ie9" === e.cubeportfolio.browser) && (e.content.html(""), e.wrap.detach(), a("html").css({
                        overflow: "",
                        paddingRight: "",
                        position: ""
                    }), e.navigationWrap.removeAttr("style"))
                }, 0), e.wrap.one(e.cubeportfolio.transitionEnd, function() {
                    e.content.html(""), e.wrap.detach(), a("html").css({
                        overflow: "",
                        paddingRight: "",
                        position: ""
                    }), e.navigationWrap.removeAttr("style")
                })) : (e.originalStyle ? a("html").attr("style", e.originalStyle) : a("html").css({
                    overflow: "",
                    paddingRight: ""
                }), a(b).scrollTop(e.scrollTop), e.content.html(""), e.wrap.detach())
            },
            tooggleLoading: function(a) {
                var b = this;
                b.stopEvents = a, b.wrap[a ? "addClass" : "removeClass"]("mt-popup-loading")
            },
            resizeImage: function() {
                if (this.isOpen) {
                    var c = a(b).height(),
                        d = this.content.find("img"),
                        e = parseInt(d.css("margin-top"), 10) + parseInt(d.css("margin-bottom"), 10);
                    d.css("max-height", c - e + "px")
                }
            },
            preloadNearbyImages: function() {
                var b, c, d = [],
                    e = this;
                d.push(e.getIndex(e.current + 1)), d.push(e.getIndex(e.current + 2)), d.push(e.getIndex(e.current + 3)), d.push(e.getIndex(e.current - 1)), d.push(e.getIndex(e.current - 2)), d.push(e.getIndex(e.current - 3));
                for (var f = d.length - 1; f >= 0; f--) "isImage" === e.dataArray[d[f]].type && (c = e.dataArray[d[f]].src, b = new Image, a('<img src="' + c + '">').is("img:uncached") && (b.src = c))
            }
        },
        h = {
            _main: function(b, c, d) {
                var e = this;
                e.styleQueue = [], e.isAnimating = !1, e.defaultFilter = "*", e.registeredEvents = [], a.isFunction(d) && e._registerEvent("initFinish", d, !0), e._extendOptions(c), e.obj = b, e.$obj = a(b), e.width = e.$obj.width(), e.$obj.addClass("cbp portfoliooading"), e.$obj.children().first().hasClass("mt-item") && e.$obj.wrapInner("<div/>"), e.$ul = e.$obj.children(), e.$ul.addClass("mt-wrapper"), ("lazyLoading" === e.options.displayType || "fadeIn" === e.options.displayType) && e.$ul.css({
                    opacity: 0
                }), "fadeInToTop" === e.options.displayType && e.$ul.css({
                    opacity: 0,
                    marginTop: 30
                }), e._browserInfo(), e._initCSSandEvents(), e._prepareBlocks(), -1 !== a.inArray(e.options.displayType, ["lazyLoading", "sequentially", "bottomToTop", "fadeInToTop"]) ? e._load(e.$obj, e._beforeDisplay) : e._beforeDisplay()
            },
            _extendOptions: function(b) {
                var c = this;
                b && !b.hasOwnProperty("lightboxCounter") && b.lightboxShowCounter === !1 && (b.lightboxCounter = ""), b && !b.hasOwnProperty("singlePageCounter") && b.singlePageShowCounter === !1 && (b.singlePageCounter = ""), c.options = a.extend({}, a.fn.cubeportfolio.options, b)
            },
            _browserInfo: function() {
                var a, c, d = this,
                    e = navigator.appVersion;
                return d.browser = -1 !== e.indexOf("MSIE 8.") ? "ie8" : -1 !== e.indexOf("MSIE 9.") ? "ie9" : -1 !== e.indexOf("MSIE 10.") ? "ie10" : b.ActiveXObject || "ActiveXObject" in b ? "ie11" : /android/gi.test(e) ? "android" : /iphone|ipad|ipod/gi.test(e) ? "ios" : /chrome/gi.test(e) ? "chrome" : "", d.browser && d.$obj.addClass("mt-" + d.browser), a = d._styleSupport("transition"), c = d._styleSupport("animation"), d.transition = d.transitionByFilter = a ? "css" : "animate", "animate" === d.transition ? void(d.supportTransform = "_withCSS2") : (d.transitionEnd = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }[a], d.animationEnd = {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "Animationend",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                }[c], d.supportCSSTransform = d._styleSupport("transform"), void(d.supportCSSTransform ? (d._cssHooks(), d.supportTransform = "_withCSS3") : d.supportTransform = "_withCSS2"))
            },
            _styleSupport: function(a) {
                var b, d, e, f = a.charAt(0).toUpperCase() + a.slice(1),
                    g = ["Moz", "Webkit", "O", "ms"],
                    h = c.createElement("div");
                if (a in h.style) d = a;
                else
                    for (e = g.length - 1; e >= 0; e--)
                        if (b = g[e] + f, b in h.style) {
                            d = b;
                            break
                        } return h = null, d
            },
            _cssHooks: function() {
                function b(b, e, f) {
                    var g, h, i, j, k, l, m = a(b),
                        n = m.data("transformFn") || {},
                        o = {},
                        p = {};
                    o[f] = e, a.extend(n, o);
                    for (g in n) n.hasOwnProperty(g) && (h = n[g], p[g] = c[g](h));
                    i = p.translate || "", j = p.scale || "", l = p.skew || "", k = i + j + l, m.data("transformFn", n), b.style[d.supportCSSTransform] = k
                }
                var c, d = this;
                c = d._has3d() ? {
                    translate: function(a) {
                        return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                    },
                    scale: function(a) {
                        return "scale3d(" + a + ", " + a + ", 1) "
                    },
                    skew: function(a) {
                        return "skew(" + a[0] + "deg, " + a[1] + "deg) "
                    }
                } : {
                    translate: function(a) {
                        return "translate(" + a[0] + "px, " + a[1] + "px) "
                    },
                    scale: function(a) {
                        return "scale(" + a + ") "
                    },
                    skew: function(a) {
                        return "skew(" + a[0] + "deg, " + a[1] + "deg) "
                    }
                }, a.cssNumber.scale = !0, a.cssHooks.scale = {
                    set: function(a, c) {
                        "string" == typeof c && (c = parseFloat(c)), b(a, c, "scale")
                    },
                    get: function(b) {
                        var c = a.data(b, "transformFn");
                        return c && c.scale ? c.scale : 1
                    }
                }, a.fx.step.scale = function(b) {
                    a.cssHooks.scale.set(b.elem, b.now + b.unit)
                }, a.cssNumber.translate = !0, a.cssHooks.translate = {
                    set: function(a, c) {
                        b(a, c, "translate")
                    },
                    get: function(b) {
                        var c = a.data(b, "transformFn");
                        return c && c.translate ? c.translate : [0, 0]
                    }
                }, a.cssNumber.skew = !0, a.cssHooks.skew = {
                    set: function(a, c) {
                        b(a, c, "skew")
                    },
                    get: function(b) {
                        var c = a.data(b, "transformFn");
                        return c && c.skew ? c.skew : [0, 0]
                    }
                }
            },
            _has3d: function() {
                var a, e, f = c.createElement("p"),
                    g = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                c.body.insertBefore(f, null);
                for (a in g) g.hasOwnProperty(a) && f.style[a] !== d && (f.style[a] = "translate3d(1px,1px,1px)", e = b.getComputedStyle(f).getPropertyValue(g[a]));
                return c.body.removeChild(f), e !== d && e.length > 0 && "none" !== e
            },
            _prepareBlocks: function() {
                var a = this;
                a.blocks = a.$ul.children(".mt-item"), a.blocksAvailable = a.blocks, a.options.caption && (a.blocks.wrapInner('<div class="mt-item-wrapper"></div>'), a._captionInit())
            },
            _captionInit: function() {
                var a = this;
                ("ie8" === a.browser || "ie9" === a.browser) && (a.options.caption = "minimal"), a.$obj.addClass("mt-caption-" + a.options.caption)
            },
            _captionDestroy: function() {
                var a = this;
                a.$obj.removeClass("mt-caption-" + a.options.caption)
            },
            _initCSSandEvents: function() {
                var c, d, e, g = this,
                    h = a(b),
                    i = h.width();
                h.on("resize" + f, function() {
                    c && clearTimeout(c), c = setTimeout(function() {
                        e = h.width(), i !== e && (i = e, g.$obj.removeClass("mt-no-transition mt-appendItems-loading"), "responsive" === g.options.gridAdjustment && g._responsiveLayout(), g._layout(), g._processStyle(g.transition), g._resizeMainContainer(g.transition), g.lightbox && g.lightbox.resizeImage(), "slider" === g.options.layoutMode && g._updateSlider(), g.singlePage && g.singlePage.options.singlePageStickyNavigation && (d = g.singlePage.wrap[0].clientWidth, d > 0 && (g.singlePage.navigationWrap.width(d), g.singlePage.navigation.width(d))), g.singlePageInline && g.singlePageInline.isOpen && g.singlePageInline.close())
                    }, 50)
                })
            },
            _load: function(b, c, d) {
                var e, f = this,
                    g = [],
                    h = 0;
                d = d || [], b.find("img:uncached").each(function() {
                    g.push(this.src)
                }), e = g.length, 0 === e && c.apply(f, d), a.each(g, function(b, g) {
                    var i = new Image;
                    a(i).one("load.cbp error.cbp", function() {
                        return a(this).off("load.cbp error.cbp"), h++, h === e ? (c.apply(f, d), !1) : void 0
                    }), i.src = g
                })
            },
            _beforeDisplay: function() {
                var a = this;
                a.options.animationType && "grid" === a.options.layoutMode && (("ie8" === a.browser || "ie9" === a.browser) && (a.options.animationType = "fadeOut"), a["_" + a.options.animationType + "Init"] && a["_" + a.options.animationType + "Init"](), a.$obj.addClass("mt-animation-" + a.options.animationType)), a.localColumnWidth = a.blocks.eq(0).outerWidth() + a.options.gapVertical, a._filterFromUrl(), "" === a.options.defaultFilter || "*" === a.options.defaultFilter ? a._display() : a.filter(a.options.defaultFilter, function() {
                    a._display()
                }, a)
            },
            _filterFromUrl: function() {
                var a = this,
                    b = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href);
                null !== b && (a.options.defaultFilter = b[1])
            },
            _display: function() {
                var b, d, e = this,
                    h = a(c.body);
                e.getColumnsType = a.isArray(e.options.mediaQueries) ? "_getColumnsBreakpoints" : "_getColumnsAuto", "responsive" === e.options.gridAdjustment && e._responsiveLayout(), e["_" + e.options.layoutMode + "Markup"](), e._layout(), e._processStyle("css"), e._resizeMainContainer("css"), ("lazyLoading" === e.options.displayType || "fadeIn" === e.options.displayType) && e.$ul.animate({
                    opacity: 1
                }, e.options.displayTypeSpeed), "fadeInToTop" === e.options.displayType && e.$ul.animate({
                    opacity: 1,
                    marginTop: 0
                }, e.options.displayTypeSpeed, function() {
                    e.$ul.css({
                        marginTop: 0
                    }), e.$ulClone && e.$ulClone.css({
                        marginTop: 0
                    })
                }), "sequentially" === e.options.displayType && (b = 0, e.blocks.css("opacity", 0), function i() {
                    d = e.blocksAvailable.eq(b++), d.length && (d.animate({
                        opacity: 1
                    }), setTimeout(i, e.options.displayTypeSpeed))
                }()), "bottomToTop" === e.options.displayType && (b = 0, e.blocks.css({
                    opacity: 0,
                    marginTop: 80
                }), function j() {
                    d = e.blocksAvailable.eq(b++), d.length ? (d.animate({
                        opacity: 1,
                        marginTop: 0
                    }, 400), setTimeout(j, e.options.displayTypeSpeed)) : (e.blocks.css({
                        marginTop: 0
                    }), e.blocksClone && e.blocksClone.css({
                        marginTop: 0
                    }))
                }()), e._forceReflow(e.$obj).removeClass("portfoliooading"), e.$obj.addClass("mt-ready"), e.lightbox = null, e.$obj.find(e.options.lightboxDelegate) && (e.lightbox = Object.create(g), e.lightbox.init(e, "lightbox"), e.$obj.on("click" + f, e.options.lightboxDelegate, function(b) {
                    b.preventDefault();
                    var c = a(this);
                    c.closest(a(".mt-popup-singlePageInline")).length || e.lightbox.openLightbox(e.blocksAvailable.find(e.options.lightboxDelegate), this)
                })), 1 != h.data("cbpLightboxIsOn") && (h.on("click" + f, e.options.lightboxDelegate, function(b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.data("cbpLightbox");
                    c.closest(a(".mt-wrapper")).length || (d ? e.lightbox.openLightbox(a(e.options.lightboxDelegate).filter("[data-portfolioightbox=" + d + "]"), this) : e.lightbox.openLightbox(c, this))
                }), h.data("cbpLightboxIsOn", !0)), e.singlePage = null, e.$obj.find(e.options.singlePageDelegate) && (e.singlePage = Object.create(g), e.singlePage.init(e, "singlePage"), e.$obj.on("click" + f, e.options.singlePageDelegate, function(a) {
                    a.preventDefault(), e.singlePage.openSinglePage(e.blocksAvailable.find(e.options.singlePageDelegate), this)
                })), 1 != h.data("cbpSinglePageIsOn") && (h.on("click" + f, e.options.singlePageDelegate, function(b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.data("cbpSinglepage");
                    c.closest(a(".cbp")).length || (d ? e.singlePage.openSinglePage(a(e.options.singlePageDelegate).filter("[data-mt-singlePage=" + d + "]"), this) : e.singlePage.openSinglePage(c, this))
                }), h.data("cbpSinglePageIsOn", !0)), e.singlePageInline = null, e.$obj.find(e.options.singlePageInlineDelegate) && (e.singlePageInline = Object.create(g), e.singlePageInline.init(e, "singlePageInline"), e.$obj.on("click" + f, e.options.singlePageInlineDelegate, function(a) {
                    a.preventDefault(), e.singlePageInline.openSinglePageInline(e.blocksAvailable, this)
                })), e._triggerEvent("initFinish"), e.$obj.trigger("initComplete" + f)
            },
            _forceReflow: function(a) {
                return a.offset(), a
            },
            _layout: function() {
                var a = this;
                a["_" + a.options.layoutMode + "LayoutReset"](), a["_" + a.options.layoutMode + "Layout"](), a.$obj.removeClass(function(a, b) {
                    return (b.match(/\bmt-cols-\d+/gi) || []).join(" ")
                }), a.$obj.addClass("mt-cols-" + a.cols)
            },
            _sliderMarkup: function() {
                var b = this;
                b.sliderStopEvents = !1, b.sliderActive = 0, b.$obj.addClass("mt-mode-slider"), b.$ul.wrap('<div class="mt-wrapper-outer"></div>'), b.nav = a("<div/>", {
                    "class": "mt-nav"
                }), b.nav.on("click" + f, "[data-slider-action]", function(c) {
                    if (c.preventDefault(), c.stopImmediatePropagation(), c.stopPropagation(), !b.sliderStopEvents) {
                        var d = a(this),
                            e = d.attr("data-slider-action");
                        b["_" + e + "Slider"] && b["_" + e + "Slider"](d)
                    }
                }), b.options.showNavigation && (b.controls = a("<div/>", {
                    "class": "mt-nav-controls"
                }), b.navPrev = a("<div/>", {
                    "class": "mt-nav-prev",
                    "data-slider-action": "prev"
                }).appendTo(b.controls), b.navNext = a("<div/>", {
                    "class": "mt-nav-next",
                    "data-slider-action": "next"
                }).appendTo(b.controls), b.controls.appendTo(b.nav)), b.options.showPagination && (b.navPagination = a("<div/>", {
                    "class": "mt-nav-pagination"
                }).appendTo(b.nav)), (b.controls || b.navPagination) && b.nav.appendTo(b.$obj), b._updateSliderPagination(), b.options.auto && (b.options.autoPauseOnHover && (b.mouseIsEntered = !1, b.$obj.on("mouseenter" + f, function() {
                    b.mouseIsEntered = !0, b._stopSliderAuto()
                }).on("mouseleave" + f, function() {
                    b.mouseIsEntered = !1, b._startSliderAuto()
                })), b._startSliderAuto()), b.options.drag && "ie8" !== b.browser && "ie9" !== b.browser && b._dragSlider()
            },
            _updateSlider: function() {
                var a = this;
                a._updateSliderPosition(), a._updateSliderPagination()
            },
            _updateSliderPagination: function() {
                var b, c, d = this;
                if (d.options.showPagination) {
                    for (b = Math.ceil(d.blocksAvailable.length / d.cols), d.navPagination.empty(), c = b - 1; c >= 0; c--) a("<div/>", {
                        "class": "mt-nav-pagination-item",
                        "data-slider-action": "jumpTo"
                    }).appendTo(d.navPagination);
                    d.navPaginationItems = d.navPagination.children()
                }
                d._enableDisableNavSlider()
            },
            _destroySlider: function() {
                var a = this;
                "slider" === a.options.layoutMode && (a.$obj.off("click" + f), a.navNext && a.navNext.remove(), a.navPrev && a.navPrev.remove(), a.navPagination && a.navPagination.remove())
            },
            _nextSlider: function() {
                var a = this;
                if (a._isEndSlider()) {
                    if (!a.options.rewindNav) return;
                    a.sliderActive = 0
                } else a.options.scrollByPage ? a.sliderActive = Math.min(a.sliderActive + a.cols, a.blocksAvailable.length - a.cols) : a.sliderActive += 1;
                a._goToSlider()
            },
            _prevSlider: function() {
                var a = this;
                if (a._isStartSlider()) {
                    if (!a.options.rewindNav) return;
                    a.sliderActive = a.blocksAvailable.length - a.cols
                } else a.options.scrollByPage ? a.sliderActive = Math.max(0, a.sliderActive - a.cols) : a.sliderActive -= 1;
                a._goToSlider()
            },
            _jumpToSlider: function(a) {
                var b = this,
                    c = Math.min(a.index() * b.cols, b.blocksAvailable.length - b.cols);
                c !== b.sliderActive && (b.sliderActive = c, b._goToSlider())
            },
            _jumpDragToSlider: function(a) {
                var b, c, d, e = this,
                    f = a > 0 ? !0 : !1;
                e.options.scrollByPage ? (b = e.cols * e.localColumnWidth, c = e.cols) : (b = e.localColumnWidth, c = 1), a = Math.abs(a), d = Math.floor(a / b) * c, a % b > 20 && (d += c), e.sliderActive = f ? Math.min(e.sliderActive + d, e.blocksAvailable.length - e.cols) : Math.max(0, e.sliderActive - d), e._goToSlider()
            },
            _isStartSlider: function() {
                return 0 === this.sliderActive
            },
            _isEndSlider: function() {
                var a = this;
                return a.sliderActive + a.cols > a.blocksAvailable.length - 1
            },
            _goToSlider: function() {
                var a = this;
                a._enableDisableNavSlider(), a._updateSliderPosition()
            },
            _startSliderAuto: function() {
                var a = this;
                return a.isDrag ? void a._stopSliderAuto() : void(a.timeout = setTimeout(function() {
                    a._nextSlider(), a._startSliderAuto()
                }, a.options.autoTimeout))
            },
            _stopSliderAuto: function() {
                clearTimeout(this.timeout)
            },
            _enableDisableNavSlider: function() {
                var a, b, c = this;
                c.options.showNavigation && (c.options.rewindNav || (b = c._isStartSlider() ? "addClass" : "removeClass", c.navPrev[b]("mt-nav-stop"), b = c._isEndSlider() ? "addClass" : "removeClass", c.navNext[b]("mt-nav-stop"))), c.options.showPagination && (a = c.options.scrollByPage ? Math.ceil(c.sliderActive / c.cols) : c._isEndSlider() ? c.navPaginationItems.length - 1 : Math.floor(c.sliderActive / c.cols), c.navPaginationItems.removeClass("mt-nav-pagination-active").eq(a).addClass("mt-nav-pagination-active"))
            },
            _sliderLayout: function() {
                var b = this;
                b.blocksAvailable.each(function(c, d) {
                    var e = a(d),
                        f = 0;
                    b.styleQueue.push({
                        $el: e,
                        style: b[b.supportTransform](b.localColumnWidth * c, 0)
                    }), f += e.outerHeight(!0) + b.options.gapHorizontal, b.colVert.push(f)
                }), b.sliderColVert = b.colVert.slice(b.sliderActive, b.sliderActive + b.cols), b.ulWidth = b.localColumnWidth * b.blocksAvailable.length - b.options.gapVertical, b.$ul.width(b.ulWidth)
            },
            _updateSliderPosition: function() {
                var a = this,
                    b = -a.sliderActive * a.localColumnWidth,
                    c = a[a.supportTransform](b, 0);
                a.$ul[a.transition](c), a.sliderColVert = a.colVert.slice(a.sliderActive, a.sliderActive + a.cols), a._resizeMainContainer(a.transition)
            },
            _dragSlider: function() {
                function d(b) {
                    return u ? o = b : b.preventDefault(), p.options.auto && p._stopSliderAuto(), s ? void a(l).one("click" + f, function() {
                        return !1
                    }) : (l = a(b.target), j = i(b).x, k = 0, m = -p.sliderActive * p.localColumnWidth, n = p.localColumnWidth * (p.blocksAvailable.length - p.cols), q.on(t.move, g), q.on(t.end, e), void p.$obj.addClass("mt-mode-slider-dragStart"))
                }

                function e() {
                    p.$obj.removeClass("mt-mode-slider-dragStart"), s = !0, 0 !== k ? (l.one("click" + f, function() {
                        return !1
                    }), p._jumpDragToSlider(k), p.$ul.one(p.transitionEnd, h)) : h.call(p), q.off(t.move), q.off(t.end)
                }

                function g(a) {
                    k = j - i(a).x, (k > 8 || -8 > k) && a.preventDefault(), p.isDrag = !0;
                    var b = m - k;
                    0 > k && m > k ? b = (m - k) / 5 : k > 0 && -n > m - k && (b = -n + (n + m - k) / 5);
                    var c = r(b, 0);
                    p.$ul[p.transition](c)
                }

                function h() {
                    if (s = !1, p.isDrag = !1, p.options.auto) {
                        if (p.mouseIsEntered) return;
                        p._startSliderAuto()
                    }
                }

                function i(a) {
                    return {
                        x: a.pageX || a.originalEvent.touches[0].pageX,
                        y: a.pageY || a.originalEvent.touches[0].pageY
                    }
                }
                var j, k, l, m, n, o, p = this,
                    q = a(c),
                    r = p[p.supportTransform],
                    s = !1,
                    t = {},
                    u = !1;
                p.isDrag = !1, "ontouchstart" in b || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? (t = {
                    start: "touchstart" + f,
                    move: "touchmove" + f,
                    end: "touchend" + f
                }, u = !0) : t = {
                    start: "mousedown" + f,
                    move: "mousemove" + f,
                    end: "mouseup" + f
                }, p.$ul.on(t.start, d)
            },
            _sliderLayoutReset: function() {
                var a = this;
                a.colVert = []
            },
            _gridMarkup: function() {},
            _gridLayout: function() {
                var b = this;
                b.blocksAvailable.each(function(c, d) {
                    var e = a(d),
                        f = Math.ceil(e.outerWidth() / b.localColumnWidth),
                        g = 0;
                    if (f = Math.min(f, b.cols), b.singlePageInline && c >= b.singlePageInline.matrice[0] && c <= b.singlePageInline.matrice[1] && (g = b.singlePageInline.height), 1 === f) b._placeBlocks(e, b.colVert, g);
                    else {
                        var h, i, j = b.cols + 1 - f,
                            k = [];
                        for (i = 0; j > i; i++) h = b.colVert.slice(i, i + f), k[i] = Math.max.apply(Math, h);
                        b._placeBlocks(e, k, g)
                    }
                })
            },
            _gridLayoutReset: function() {
                var a, b = this;
                for ("alignCenter" === b.options.gridAdjustment ? (b.$obj.attr("style", ""), b.width = b.$obj.width(), b.cols = Math.max(Math.floor((b.width + b.options.gapVertical) / b.localColumnWidth), 1), b.width = b.cols * b.localColumnWidth - b.options.gapVertical, b.$obj.css("max-width", b.width)) : (b.width = b.$obj.width(), b.cols = Math.max(Math.floor((b.width + b.options.gapVertical) / b.localColumnWidth), 1)), b.colVert = [], a = b.cols; a--;) b.colVert.push(0)
            },
            _responsiveLayout: function() {
                var a, b, c = this;
                c.columnWidthCache ? c.localColumnWidth = c.columnWidthCache : c.columnWidthCache = c.localColumnWidth, c.width = c.$obj.outerWidth() + c.options.gapVertical, c.cols = c[c.getColumnsType](), a = c.width - c.options.gapVertical * c.cols, c.localColumnWidth = parseInt(a / c.cols, 10) + c.options.gapVertical, b = c.localColumnWidth - c.options.gapVertical + "px", c.blocks.each(function(a, d) {
                    d.style.width = b, c.blocksClone && (c.blocksClone.eq(a)[0].style.width = b)
                })
            },
            _getColumnsAuto: function() {
                var a = this;
                return Math.max(Math.round(a.width / a.localColumnWidth), 1)
            },
            _getColumnsBreakpoints: function() {
                var b, c = this,
                    e = c.width - c.options.gapVertical;
                return a.each(c.options.mediaQueries, function(a, c) {
                    return e >= c.width ? (b = c.cols, !1) : void 0
                }), b === d && (b = c.options.mediaQueries[c.options.mediaQueries.length - 1].cols), b
            },
            _resizeMainContainer: function(a, b) {
                var c, d = this,
                    e = d.sliderColVert || d.colVert;
                b = b || 0, c = Math.max.apply(Math, e) + b, c !== d.height && (d.$obj[a]({
                    height: c - d.options.gapHorizontal
                }, 400), d.height = c, d.$obj.one(d.transitionEnd, function() {
                    d.$obj.trigger("pluginResize.cbp")
                }))
            },
            _processStyle: function(a) {
                var b, c = this;
                for (b = c.styleQueue.length - 1; b >= 0; b--) c.styleQueue[b].$el[a](c.styleQueue[b].style);
                c.styleQueue = []
            },
            _placeBlocks: function(a, b, c) {
                var d, e, f, g, h, i, j = this,
                    k = Math.min.apply(Math, b),
                    l = 0;
                for (h = 0, i = b.length; i > h; h++)
                    if (b[h] === k) {
                        l = h;
                        break
                    }
                for (j.singlePageInline && 0 !== c && (j.singlePageInline.top = k), k += c, d = Math.round(j.localColumnWidth * l), e = Math.round(k), j.styleQueue.push({
                        $el: a,
                        style: j[j.supportTransform](d, e)
                    }), f = k + a.outerHeight() + j.options.gapHorizontal, g = j.cols + 1 - i, h = 0; g > h; h++) j.colVert[l + h] = f
            },
            _withCSS2: function(a, b) {
                return {
                    left: a,
                    top: b
                }
            },
            _withCSS3: function(a, b) {
                return {
                    translate: [a, b]
                }
            },
            _duplicateContent: function(a) {
                var b = this;
                b.$ulClone = b.$ul.clone(), b.blocksClone = b.$ulClone.children(), b.$ulClone.css(a), b.ulHidden = "clone", b.$obj.append(b.$ulClone)
            },
            _fadeOutFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }), b.length && d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _quicksandFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && d.styleQueue.push({
                    $el: a,
                    style: {
                        scale: .01,
                        opacity: 0
                    }
                }), b.length && d.styleQueue.push({
                    $el: b,
                    style: {
                        scale: 1,
                        opacity: 1
                    }
                }), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _flipOutFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && a.find(".mt-item-wrapper").removeClass("mt-animation-flipOut-in").addClass("mt-animation-flipOut-out"), b.length && b.find(".mt-item-wrapper").removeClass("mt-animation-flipOut-out").addClass("mt-animation-flipOut-in"), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _flipBottomFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && a.find(".mt-item-wrapper").removeClass("mt-animation-flipBottom-in").addClass("mt-animation-flipBottom-out"), b.length && b.find(".mt-item-wrapper").removeClass("mt-animation-flipBottom-out").addClass("mt-animation-flipBottom-in"), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _scaleSidesFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && a.find(".mt-item-wrapper").removeClass("mt-animation-scaleSides-in").addClass("mt-animation-scaleSides-out"), b.length && b.find(".mt-item-wrapper").removeClass("mt-animation-scaleSides-out").addClass("mt-animation-scaleSides-in"), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _skewFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && d.styleQueue.push({
                    $el: a,
                    style: {
                        skew: [50, 0],
                        scale: .01,
                        opacity: 0
                    }
                }), b.length && d.styleQueue.push({
                    $el: b,
                    style: {
                        skew: [0, 0],
                        scale: 1,
                        opacity: 1
                    }
                }), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _sequentiallyInit: function() {
                this.transitionByFilter = "css"
            },
            _sequentiallyFilter: function(a, b, c) {
                var d = this,
                    e = d.blocksAvailable;
                d.blocksAvailable = d.blocks.filter(c), d.$obj.addClass("mt-no-transition"), e[d.transition]({
                    top: -30,
                    opacity: 0
                }), setTimeout(function() {
                    "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), a.length && a.css({
                        display: "none"
                    }), b.length && b.css("display", "block"), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition);
                    var e, f = 0;
                    ! function g() {
                        e = d.blocksAvailable.eq(f++), e.length ? (e[d.transition]({
                            top: 0,
                            opacity: 1
                        }), setTimeout(g, 130)) : setTimeout(function() {
                            d._filterFinish()
                        }, 600)
                    }()
                }, 600)
            },
            _fadeOutTopInit: function() {
                this.transitionByFilter = "css"
            },
            _fadeOutTopFilter: function(a, b, c) {
                var d = this;
                d.blocksAvailable = d.blocks.filter(c), d.$ul[d.transition]({
                    top: -30,
                    opacity: 0
                }), d.$obj.addClass("mt-no-transition"), setTimeout(function() {
                    "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), a.length && a.css("opacity", 0), b.length && b.css("opacity", 1), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), d.$ul[d.transition]({
                        top: 0,
                        opacity: 1
                    }), setTimeout(function() {
                        d._filterFinish()
                    }, 400)
                }, 400)
            },
            _boxShadowInit: function() {
                var a = this;
                a.blocksAvailable.append('<div class="mt-animation-boxShadowMask"></div>')
            },
            _boxShadowFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden");
                var e = d.blocks.find(".mt-animation-boxShadowMask");
                e.addClass("mt-animation-boxShadowShow"), e.removeClass("mt-animation-boxShadowActive mt-animation-boxShadowInactive"), d.blocksAvailable = d.blocks.filter(c);
                var f = {};
                a.length && (a.find(".mt-animation-boxShadowMask").addClass("mt-animation-boxShadowActive"), d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }), f = a.last()), b.length && (b.find(".mt-animation-boxShadowMask").addClass("mt-animation-boxShadowInactive"), d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }), f = b.last()), d._layout(), f.length ? f.one(d.transitionEnd, function() {
                    e.removeClass("mt-animation-boxShadowShow"), d._filterFinish()
                }) : (e.removeClass("mt-animation-boxShadowShow"), d._filterFinish()), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition)
            },
            _bounceLeftInit: function() {
                var a = this;
                a._duplicateContent({
                    left: "-100%",
                    opacity: 0
                }), a.transitionByFilter = "css", a.$ul.addClass("mt-wrapper-front")
            },
            _bounceLeftFilter: function(a, b, c) {
                var d, e, f, g = this;
                g.$obj.addClass("mt-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), b = e.filter(".mt-item-hidden"), "*" !== c && (b = b.filter(c), e.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), g.blocksAvailable = e.filter(c), g._layout(), f[g.transition]({
                    left: "-100%",
                    opacity: 0
                }).removeClass("mt-wrapper-front").addClass("mt-wrapper-back"), d[g.transition]({
                    left: 0,
                    opacity: 1
                }).addClass("mt-wrapper-front").removeClass("mt-wrapper-back"), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition), setTimeout(function() {
                    g._filterFinish()
                }, 400)
            },
            _bounceTopInit: function() {
                var a = this;
                a._duplicateContent({
                    top: "-100%",
                    opacity: 0
                }), a.transitionByFilter = "css", a.$ul.addClass("mt-wrapper-front")
            },
            _bounceTopFilter: function(a, b, c) {
                var d, e, f, g = this;
                g.$obj.addClass("mt-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), b = e.filter(".mt-item-hidden"), "*" !== c && (b = b.filter(c), e.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), g.blocksAvailable = e.filter(c), g._layout(), f[g.transition]({
                    top: "-100%",
                    opacity: 0
                }).removeClass("mt-wrapper-front").addClass("mt-wrapper-back"), d[g.transition]({
                    top: 0,
                    opacity: 1
                }).addClass("mt-wrapper-front").removeClass("mt-wrapper-back"), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition), setTimeout(function() {
                    g._filterFinish()
                }, 400)
            },
            _bounceBottomInit: function() {
                var a = this;
                a._duplicateContent({
                    top: "100%",
                    opacity: 0
                }), a.transitionByFilter = "css"
            },
            _bounceBottomFilter: function(a, b, c) {
                var d, e, f, g = this;
                g.$obj.addClass("mt-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), b = e.filter(".mt-item-hidden"), "*" !== c && (b = b.filter(c), e.not(".mt-item-hidden").not(c).addClass("mt-item-hidden")), b.removeClass("mt-item-hidden"), g.blocksAvailable = e.filter(c), g._layout(), f[g.transition]({
                    top: "100%",
                    opacity: 0
                }).removeClass("mt-wrapper-front").addClass("mt-wrapper-back"), d[g.transition]({
                    top: 0,
                    opacity: 1
                }).addClass("mt-wrapper-front").removeClass("mt-wrapper-back"), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition), setTimeout(function() {
                    g._filterFinish()
                }, 400)
            },
            _moveLeftInit: function() {
                var a = this;
                a._duplicateContent({
                    left: "100%",
                    opacity: 0
                }), a.$ulClone.addClass("no-trans"), a.transitionByFilter = "css"
            },
            _moveLeftFilter: function(a, b, c) {
                var d, e, f, g = this;
                "*" !== c && (b = b.filter(c)), b.removeClass("mt-item-hidden"), g.$obj.addClass("mt-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), e.css("opacity", 0), e.addClass("mt-item-hidden"), g.blocksAvailable = e.filter(c), g.blocksAvailable.css("opacity", 1), g.blocksAvailable.removeClass("mt-item-hidden"), g._layout(), f[g.transition]({
                    left: "-100%",
                    opacity: 0
                }), d.removeClass("no-trans"), "css" === g.transition ? (d[g.transition]({
                    left: 0,
                    opacity: 1
                }), f.one(g.transitionEnd, function() {
                    f.addClass("no-trans").css({
                        left: "100%",
                        opacity: 0
                    }), g._filterFinish()
                })) : d[g.transition]({
                    left: 0,
                    opacity: 1
                }, function() {
                    f.addClass("no-trans").css({
                        left: "100%",
                        opacity: 0
                    }), g._filterFinish()
                }), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition)
            },
            _slideLeftInit: function() {
                var a = this;
                a._duplicateContent({}), a.$ul.addClass("mt-wrapper-front"), a.$ulClone.css("opacity", 0), a.transitionByFilter = "css"
            },
            _slideLeftFilter: function(a, b, c) {
                var d, e, f, g, h = this;
                h.blocks.show(), h.blocksClone.show(), "*" !== c && (b = b.filter(c)), b.removeClass("mt-item-hidden"), h.$obj.addClass("mt-no-transition"), h.blocks.find(".mt-item-wrapper").removeClass("mt-animation-slideLeft-out mt-animation-slideLeft-in"), h.blocksClone.find(".mt-item-wrapper").removeClass("mt-animation-slideLeft-out mt-animation-slideLeft-in"), h.$ul.css({
                    opacity: 1
                }), h.$ulClone.css({
                    opacity: 1
                }), "clone" === h.ulHidden ? (h.ulHidden = "first", e = h.blocks, f = h.blocksClone, d = h.blocksClone, h.$ul.removeClass("mt-wrapper-front"), h.$ulClone.addClass("mt-wrapper-front")) : (h.ulHidden = "clone", e = h.blocksClone, f = h.blocks, d = h.blocks, h.$ul.addClass("mt-wrapper-front"), h.$ulClone.removeClass("mt-wrapper-front")), d.css("opacity", 0), d.addClass("mt-item-hidden"), h.blocksAvailable = d.filter(c), h.blocksAvailable.css({
                    opacity: 1
                }), h.blocksAvailable.removeClass("mt-item-hidden"), h._layout(), "css" === h.transition ? (e.find(".mt-item-wrapper").addClass("mt-animation-slideLeft-out"), f.find(".mt-item-wrapper").addClass("mt-animation-slideLeft-in"), g = e.find(".mt-item-wrapper").last(), g.length ? g.one(h.animationEnd, function() {
                    h._filterFinish()
                }) : h._filterFinish()) : (e.find(".mt-item-wrapper").animate({
                    left: "-100%"
                }, 400, function() {
                    h._filterFinish()
                }), f.find(".mt-item-wrapper").css("left", "100%"), f.find(".mt-item-wrapper").animate({
                    left: 0
                }, 400)), h._processStyle(h.transitionByFilter), h._resizeMainContainer("animate")
            },
            _slideDelayInit: function() {
                this._wrapperFilterInit()
            },
            _slideDelayFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "slideDelay", !0)
            },
            _3dflipInit: function() {
                this._wrapperFilterInit()
            },
            _3dflipFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "3dflip", !0)
            },
            _rotateSidesInit: function() {
                this._wrapperFilterInit()
            },
            _rotateSidesFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "rotateSides", !0)
            },
            _flipOutDelayInit: function() {
                this._wrapperFilterInit()
            },
            _flipOutDelayFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "flipOutDelay", !1)
            },
            _foldLeftInit: function() {
                this._wrapperFilterInit()
            },
            _foldLeftFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "foldLeft", !0)
            },
            _unfoldInit: function() {
                this._wrapperFilterInit()
            },
            _unfoldFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "unfold", !0)
            },
            _scaleDownInit: function() {
                this._wrapperFilterInit()
            },
            _scaleDownFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "scaleDown", !0)
            },
            _frontRowInit: function() {
                this._wrapperFilterInit()
            },
            _frontRowFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "frontRow", !0)
            },
            _rotateRoomInit: function() {
                this._wrapperFilterInit()
            },
            _rotateRoomFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "rotateRoom", !0)
            },
            _wrapperFilterInit: function() {
                var a = this;
                a._duplicateContent({}), a.$ul.addClass("mt-wrapper-front"), a.$ulClone.css("opacity", 0), a.transitionByFilter = "css"
            },
            _wrapperFilter: function(b, c, d, e, f) {
                var g, h, i, j, k = this;
                if (k.blocks.show(), k.blocksClone.show(), "*" !== d && (c = c.filter(d)), c.removeClass("mt-item-hidden"), k.$obj.addClass("mt-no-transition"), k.blocks.find(".mt-item-wrapper").removeClass("mt-animation-" + e + "-out mt-animation-" + e + "-in mt-animation-" + e + "-fadeOut").css("style", ""), k.blocksClone.find(".mt-item-wrapper").removeClass("mt-animation-" + e + "-out mt-animation-" + e + "-in mt-animation-" + e + "-fadeOut").css("style", ""), k.$ul.css({
                        opacity: 1
                    }), k.$ulClone.css({
                        opacity: 1
                    }), "clone" === k.ulHidden ? (k.ulHidden = "first", g = k.blocksClone, k.$ul.removeClass("mt-wrapper-front"), k.$ulClone.addClass("mt-wrapper-front")) : (k.ulHidden = "clone", g = k.blocks, k.$ul.addClass("mt-wrapper-front"), k.$ulClone.removeClass("mt-wrapper-front")), h = k.blocksAvailable, g.css("opacity", 0), g.addClass("mt-item-hidden"), k.blocksAvailable = g.filter(d), k.blocksAvailable.css({
                        opacity: 1
                    }), k.blocksAvailable.removeClass("mt-item-hidden"), i = k.blocksAvailable, k._layout(), "css" === k.transition) {
                    var l = 0,
                        m = 0;
                    i.each(function(b, c) {
                        a(c).find(".mt-item-wrapper").addClass("mt-animation-" + e + "-in").css("animation-delay", m / 20 + "s"), m++
                    }), h.each(function(b, c) {
                        l >= m && f ? a(c).find(".mt-item-wrapper").addClass("mt-animation-" + e + "-fadeOut") : a(c).find(".mt-item-wrapper").addClass("mt-animation-" + e + "-out").css("animation-delay", l / 20 + "s"), l++
                    }), j = h.find(".mt-item-wrapper").first(), j.length ? j.one(k.animationEnd, function() {
                        k._filterFinish(), ("ie10" === k.browser || "ie11" === k.browser) && setTimeout(function() {
                            a(".mt-item-wrapper").removeClass("mt-animation-" + e + "-in")
                        }, 300)
                    }) : (k._filterFinish(), ("ie10" === k.browser || "ie11" === k.browser) && setTimeout(function() {
                        a(".mt-item-wrapper").removeClass("mt-animation-" + e + "-in")
                    }, 300))
                } else h.find(".mt-item-wrapper").animate({
                    left: "-100%"
                }, 400, function() {
                    k._filterFinish()
                }), i.find(".mt-item-wrapper").css("left", "100%"), i.find(".mt-item-wrapper").animate({
                    left: 0
                }, 400);
                k._processStyle(k.transitionByFilter), k._resizeMainContainer("animate")
            },
            _filterFinish: function() {
                var a = this;
                a.isAnimating = !1, a._triggerEvent("filterFinish"), a.$obj.trigger("filterComplete" + f)
            },
            _registerEvent: function(a, b, c) {
                var d = this;
                d.registeredEvents[a] || (d.registeredEvents[a] = []), d.registeredEvents[a].push({
                    func: b,
                    oneTime: c || !1
                })
            },

            _triggerEvent: function(a) {
                var b, c, d = this;
                if (d.registeredEvents[a])
                    for (b = 0, c = d.registeredEvents[a].length; c > b; b++) d.registeredEvents[a][b].func.call(d), d.registeredEvents[a][b].oneTime && (d.registeredEvents[a].splice(b, 1), b--, c--)
            },
            init: function(b, c) {
                var d = a.data(this, "cubeportfolio");
                if (d) throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");
                d = a.data(this, "cubeportfolio", Object.create(h)), d._main(this, b, c)
            },
            destroy: function(d) {
                var e = a.data(this, "cubeportfolio");
                if (!e) throw new Error("cubeportfolio is not initialized. Initialize it before calling destroy method!");
                a.isFunction(d) && e._registerEvent("destroyFinish", d, !0), a.removeData(this, "cubeportfolio"), a.each(e.blocks, function() {
                    a.removeData(this, "transformFn"), a.removeData(this, "mt-wxh")
                }), e.$obj.removeClass("cbp portfoliooading mt-ready mt-no-transition"), e.$ul.removeClass("mt-wrapper-front mt-wrapper-back mt-wrapper no-trans").removeAttr("style"), "slider" === e.options.layoutMode && e.$ul.unwrap(), e.$obj.removeAttr("style"), e.$ulClone && e.$ulClone.remove(), e.browser && e.$obj.removeClass("mt-" + e.browser), a(b).off("resize" + f), e.$obj.off(".cbp"), a(c).off(".cbp"), e.lightbox && e.lightbox.destroy(), e.singlePage && e.singlePage.destroy(), e.singlePageInline && e.singlePageInline.destroy(), e.blocks.removeClass("mt-item-hidden").removeAttr("style"), e.blocks.find(".mt-item-wrapper").children().unwrap(), e.options.caption && e._captionDestroy(), e.options.animationType && ("boxShadow" === e.options.animationType && a(".mt-animation-boxShadowMask").remove(), e.$obj.removeClass("mt-animation-" + e.options.animationType)), e._destroySlider(), e._triggerEvent("destroyFinish")
            },
            filter: function(b, c, d) {
                var e, f, g, h = d || a.data(this, "cubeportfolio");
                if (!h) throw new Error("cubeportfolio is not initialized. Initialize it before calling filter method!");
                b = "*" === b || "" === b ? "*" : b, h.isAnimating || h.defaultFilter === b || ("ie8" === h.browser || "ie9" === h.browser ? h.$obj.removeClass("mt-no-transition mt-appendItems-loading") : (h.obj.classList.remove("mt-no-transition"), h.obj.classList.remove("mt-appendItems-loading")), h.defaultFilter = b, h.isAnimating = !0, a.isFunction(c) && h._registerEvent("filterFinish", c, !0), e = h.blocks.filter(".mt-item-hidden"), f = [], h.singlePageInline && h.singlePageInline.isOpen ? h.singlePageInline.close("promise", {
                    callback: function() {
                        h["_" + h.options.animationType + "Filter"](f, e, b)
                    }
                }) : h["_" + h.options.animationType + "Filter"](f, e, b), h.options.filterDeeplinking && (g = location.href.replace(/#cbpf=(.*?)([#|?&]|$)/gi, ""), location.href = g + "#cbpf=" + b, h.singlePage && h.singlePage.url && (h.singlePage.url = location.href)))
            },
            showCounter: function(b, c) {
                var d = a.data(this, "cubeportfolio");
                if (!d) throw new Error("cubeportfolio is not initialized. Initialize it before calling showCounter method!");
                d.elems = b, a.each(b, function() {
                    var b, c = a(this),
                        e = c.data("filter");
                    e = "*" === e || "" === e ? "*" : e, b = d.blocks.filter(e).length, c.find(".mt-filter-counter").text(b)
                }), a.isFunction(c) && c.call(d)
            },
            appendItems: function(b, c) {
                var d = this,
                    e = a.data(d, "cubeportfolio");
                if (!e) throw new Error("cubeportfolio is not initialized. Initialize it before calling appendItems method!");
                e.singlePageInline && e.singlePageInline.isOpen ? e.singlePageInline.close("promise", {
                    callback: function() {
                        h._addItems.call(d, b, c)
                    }
                }) : h._addItems.call(d, b, c)
            },
            _addItems: function(b, c) {
                var d, e, f, g, i = a.data(this, "cubeportfolio"),
                    j = this;
                a.isFunction(c) && i._registerEvent("appendItemsFinish", c, !0), i.$obj.addClass("mt-no-transition mt-appendItems-loading"), b = a(b).css("opacity", 0), b.filter(".mt-item").wrapInner('<div class="mt-item-wrapper"></div>'), g = b.filter(i.defaultFilter), i.ulHidden ? "first" === i.ulHidden ? (b.appendTo(i.$ulClone), i.blocksClone = i.$ulClone.children(), e = i.blocksClone, f = b.clone(), f.appendTo(i.$ul), i.blocks = i.$ul.children()) : (b.appendTo(i.$ul), i.blocks = i.$ul.children(), e = i.blocks, f = b.clone(), f.appendTo(i.$ulClone), i.blocksClone = i.$ulClone.children()) : (b.appendTo(i.$ul), i.blocks = i.$ul.children(), e = i.blocks), i.options.caption && (i._captionDestroy(), i._captionInit()), d = i.defaultFilter, i.blocksAvailable = e.filter(d), e.not(".mt-item-hidden").not(d).addClass("mt-item-hidden"), i._load(i.$obj, function() {
                    "responsive" === i.options.gridAdjustment && i._responsiveLayout(), i._layout(), i._processStyle(i.transitionByFilter), i._resizeMainContainer("animate"), "slider" === i.options.layoutMode && (i._updateSlider(), i.$obj.removeClass("mt-no-transition"));
                    var a = b.filter(".mt-item-hidden");
                    switch (i.options.animationType) {
                        case "flipOut":
                            a.find(".mt-item-wrapper").addClass("mt-animation-flipOut-out");
                            break;
                        case "scaleSides":
                            a.find(".mt-item-wrapper").addClass("mt-animation-scaleSides-out");
                            break;
                        case "flipBottom":
                            a.find(".mt-item-wrapper").addClass("mt-animation-flipBottom-out")
                    }
                    g.animate({
                        opacity: 1
                    }, 800, function() {
                        switch (i.options.animationType) {
                            case "bounceLeft":
                            case "bounceTop":
                            case "bounceBottom":
                                i.blocks.css("opacity", 1), i.blocksClone.css("opacity", 1);
                                break;
                            case "flipOut":
                            case "scaleSides":
                            case "flipBottom":
                                a.css("opacity", 1)
                        }
                    }), i.elems && h.showCounter.call(j, i.elems), setTimeout(function() {
                        i._triggerEvent("appendItemsFinish")
                    }, 700)
                })
            }
        };
    a.fn.cubeportfolio = function(a) {
        var b = arguments;
        return this.each(function() {
            if (h[a]) return h[a].apply(this, Array.prototype.slice.call(b, 1));
            if ("object" != typeof a && a) throw new Error("Method " + a + " does not exist on jquery.cubeportfolio.js");
            return h.init.apply(this, b)
        })
    }, a.fn.cubeportfolio.options = {
        layoutMode: "grid",
        drag: !0,
        auto: !1,
        autoTimeout: 5e3,
        autoPauseOnHover: !0,
        showNavigation: !0,
        showPagination: !0,
        rewindNav: !0,
        scrollByPage: !1,
        defaultFilter: "*",
        filterDeeplinking: !1,
        animationType: "fadeOut",
        gridAdjustment: "responsive",
        mediaQueries: !1,
        gapHorizontal: 10,
        gapVertical: 10,
        caption: "pushTop",
        displayType: "lazyLoading",
        displayTypeSpeed: 400,
        lightboxDelegate: ".portfolioightbox",
        lightboxGallery: !0,
        lightboxTitleSrc: "data-title",
        lightboxCounter: '<div class="mt-popup-lightbox-counter">{{current}} of {{total}}</div>',
        singlePageDelegate: ".mt-singlePage",
        singlePageDeeplinking: !0,
        singlePageStickyNavigation: !0,
        singlePageCounter: '<div class="mt-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageAnimation: "left",
        singlePageCallback: function() {},
        singlePageInlineDelegate: ".mt-singlePageInline",
        singlePageInlinePosition: "top",
        singlePageInlineInFocus: !0,
        singlePageInlineCallback: function() {}
    }
}(jQuery, window, document);