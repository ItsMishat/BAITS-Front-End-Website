(function(jQuery) {
    "use strict";

    (function(d) {
        var p = function(b) {
                return b.split("").reverse().join("")
            },
            l = {
                numberStep: function(b, a) {
                    var e = Math.floor(b);
                    d(a.elem).text(e)
                }
            },
            h = function(b) {
                var a = b.elem;
                a.nodeType && a.parentNode && (a = a._animateNumberSetter, a || (a = l.numberStep), a(b.now, b))
            };
        d.Tween && d.Tween.propHooks ? d.Tween.propHooks.number = {
            set: h
        } : d.fx.step.number = h;
        d.animateNumber = {
            numberStepFactories: {
                append: function(b) {
                    return function(a, e) {
                        var k = Math.floor(a);
                        d(e.elem).prop("number", a).text(k + b)
                    }
                },
                separator: function(b, a) {
                    b = b || " ";
                    a =
                        a || 3;
                    return function(e, k) {
                        var c = Math.floor(e).toString(),
                            s = d(k.elem);
                        if (c.length > a) {
                            for (var f = c, g = a, l = f.split("").reverse(), c = [], m, q, n, r = 0, h = Math.ceil(f.length / g); r < h; r++) {
                                m = "";
                                for (n = 0; n < g; n++) {
                                    q = r * g + n;
                                    if (q === f.length) break;
                                    m += l[q]
                                }
                                c.push(m)
                            }
                            f = c.length - 1;
                            g = p(c[f]);
                            c[f] = p(parseInt(g, 10).toString());
                            c = (void 0).join(b);
                            c = p(c)
                        }
                        s.prop("number", e).text(c)
                    }
                }
            }
        };
        d.fn.animateNumber = function() {
            for (var b = arguments[0], a = d.extend({}, l, b), e = d(this), k = [a], c = 1, h = arguments.length; c < h; c++) k.push(arguments[c]);
            if (b.numberStep) {
                var f =
                    this.each(function() {
                        this._animateNumberSetter = b.numberStep
                    }),
                    g = a.complete;
                a.complete = function() {
                    f.each(function() {
                        delete this._animateNumberSetter
                    });
                    g && g.apply(this, arguments)
                }
            }
            return e.animate.apply(e, k)
        }
    })(jQuery);

    jQuery('#target').animateNumber({
            number: 150,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )
    jQuery('#target2').animateNumber({
            number: 45,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )
    jQuery('#target3').animateNumber({
            number: 23,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        7000
    )
    jQuery('#target4').animateNumber({
            number: 1100,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )
    jQuery('#target5').animateNumber({
            number: 365,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )



    jQuery('#target6').animateNumber({
            number: 150,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )

    jQuery('#target7').animateNumber({
            number: 45,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )

    jQuery('#target8').animateNumber({
            number: 23,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )

    jQuery('#target9').animateNumber({
            number: 1100,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )



    jQuery('#target10').animateNumber({
            number: 150,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )

    jQuery('#target11').animateNumber({
            number: 45,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )

    jQuery('#target12').animateNumber({
            number: 120,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        10000
    )

    jQuery('#target13').animateNumber({
            number: 1100,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        2300
    )

    jQuery('#target14').animateNumber({
            number: 3300,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        2300
    )

    jQuery('#target15').animateNumber({
            number: 345589,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        2300
    )

    jQuery('#target16').animateNumber({
            number: 45380,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        2300
    )

    jQuery('#target17').animateNumber({
            number: 245785,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        2300
    )

    jQuery('#target18').animateNumber({
            number: 537550,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        2300
    )


    jQuery('#target21').animateNumber({
            number: 450,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        12000
    )
    jQuery('#target22').animateNumber({
            number: 230,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        12000
    )
    jQuery('#target23').animateNumber({
            number: 180,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        12000
    )
    jQuery('#target24').animateNumber({
            number: 7223,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now),
                    target = jQuery(tween.elem);

                target.text(floored_number);
            }
        },
        12000
    )



})(jQuery);