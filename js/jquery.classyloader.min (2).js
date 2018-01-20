(function(d) {
	"use strict";
    d.fn.ClassyLoader = function(a) {
        a = d.extend({}, {
            width: 230,
            height: 230,
            animate: !0,
            displayOnLoad: !0,
            percentage: 100,
            speed: 1,
            roundedLine: !1,
            showRemaining: !0,
            fontFamily: "Helvetica",
            fontSize: "50px",
            showText: !0,
            diameter: 80,
            fontColor: "rgba(39, 39, 39, 0.8)",
            lineColor: "rgba(55, 55, 55, 1)",
            remainingLineColor: "rgba(55, 55, 55, 0.4)",
            lineWidth: 5
        }, a);
        var e = d(this);
        this.draw = function(b) {
            "undefined" !== typeof b && (a.percentage = b);
            var c = e[0].getContext("2d"),
                g = e.width() / 2,
                d = e.height() / 2,
                f = 0;
            c.scale(1, 1);
            c.lineWidth = a.lineWidth;
            c.strokeStyle = a.lineColour;
            setTimeout(function h() {
                var b = Math.PI / 180 * 360 / 100 * (f + 1),
                    b = b || Math.PI / 180 * 360 / 100 * (f + 1);
                c.clearRect(0, 0, e.width(), e.height());
                !0 === a.showRemaining && (c.beginPath(), c.strokeStyle = a.remainingLineColor, c.arc(g, d, a.diameter, 0, 360), c.stroke(), c.closePath());
                c.strokeStyle = a.lineColor;
                c.beginPath();
                c.lineCap = !0 === a.roundedLine ? "round" : "butt";
                c.arc(g, d, a.diameter, 0, b);
                c.stroke();
                c.closePath();
                !0 === a.showText && (c.fillStyle = a.fontColor, c.font = a.fontSize + " " + a.fontFamily, c.textAlign = "center", c.textBaseline = "middle", c.fillText(f + 1 + "%", g, d));
                f += 1;
                f < a.percentage && setTimeout(h, a.speed)
            }, a.speed)
        };
        this.setPercent = function(b) {
            a.percentage = b;
            return this
        };
        this.getPercent = function() {
            return a.percentage
        };
        this.show = function() {
            var b = e[0].getContext("2d"),
                c = e.width() / 2,
                d = e.height() / 2;
            b.scale(1, 1);
            b.lineWidth = a.lineWidth;
            b.strokeStyle = a.lineColour;
            b.clearRect(0, 0, e.width(), e.height());
            b.strokeStyle = a.lineColor;
            b.beginPath();
            b.arc(c, d, a.diameter, 0, Math.PI / 180 * (a.percentage / 100) * 360);
            b.stroke();
            b.closePath();
            !0 === a.showText && (b.fillStyle = a.fontColor, b.font = a.fontSize + " " + a.font, b.textAlign = "center", b.textBaseline = "middle", b.fillText(a.percentage + "%", c, d));
            !0 === a.showRemaining && (b.beginPath(), b.strokeStyle = a.remainingLineColor, b.arc(c, d, a.diameter, 0, 360), b.stroke(), b.closePath())
        };
        this.__constructor = function() {
            d(this).attr("width", a.width);
            d(this).attr("height", a.height);
            !0 === a.displayOnLoad && (!0 === a.animate ? this.draw() : this.show());
            return this
        };
        return this.__constructor()
    }
})(jQuery);


(function(d) {
    d.fn.ClassyLoader2 = function(a) {
        a = d.extend({}, {
            width: 200,
            height: 200,
            animate: !0,
            displayOnLoad: !0,
            percentage: 100,
            speed: 1,
            roundedLine: !1,
            showRemaining: !0,
            fontFamily: "Helvetica",
            fontSize: "50px",
            showText: !0,
            diameter: 80,
            fontColor: "rgba(39, 39, 39, 0.8)",
            lineColor: "rgba(55, 55, 55, 1)",
            remainingLineColor: "rgba(55, 55, 55, 0.4)",
            lineWidth: 5
        }, a);
        var e = d(this);
        this.draw = function(b) {
            "undefined" !== typeof b && (a.percentage = b);
            var c = e[0].getContext("2d"),
                g = e.width() / 2,
                d = e.height() / 2,
                f = 0;
            c.scale(1, 1);
            c.lineWidth = a.lineWidth;
            c.strokeStyle = a.lineColour;
            setTimeout(function h() {
                var b = Math.PI / 180 * 360 / 100 * (f + 1),
                    b = b || Math.PI / 180 * 360 / 100 * (f + 1);
                c.clearRect(0, 0, e.width(), e.height());
                !0 === a.showRemaining && (c.beginPath(), c.strokeStyle = a.remainingLineColor, c.arc(g, d, a.diameter, 0, 360), c.stroke(), c.closePath());
                c.strokeStyle = a.lineColor;
                c.beginPath();
                c.lineCap = !0 === a.roundedLine ? "round" : "butt";
                c.arc(g, d, a.diameter, 0, b);
                c.stroke();
                c.closePath();
                !0 === a.showText && (c.fillStyle = a.fontColor, c.font = a.fontSize + " " + a.fontFamily, c.textAlign = "center", c.textBaseline = "middle", c.fillText(f + 1 + "%", g, d));
                f += 1;
                f < a.percentage && setTimeout(h, a.speed)
            }, a.speed)
        };
        this.setPercent = function(b) {
            a.percentage = b;
            return this
        };
        this.getPercent = function() {
            return a.percentage
        };
        this.show = function() {
            var b = e[0].getContext("2d"),
                c = e.width() / 2,
                d = e.height() / 2;
            b.scale(1, 1);
            b.lineWidth = a.lineWidth;
            b.strokeStyle = a.lineColour;
            b.clearRect(0, 0, e.width(), e.height());
            b.strokeStyle = a.lineColor;
            b.beginPath();
            b.arc(c, d, a.diameter, 0, Math.PI / 180 * (a.percentage / 100) * 360);
            b.stroke();
            b.closePath();
            !0 === a.showText && (b.fillStyle = a.fontColor, b.font = a.fontSize + " " + a.font, b.textAlign = "center", b.textBaseline = "middle", b.fillText(a.percentage + "%", c, d));
            !0 === a.showRemaining && (b.beginPath(), b.strokeStyle = a.remainingLineColor, b.arc(c, d, a.diameter, 0, 360), b.stroke(), b.closePath())
        };
        this.__constructor = function() {
            d(this).attr("width", a.width);
            d(this).attr("height", a.height);
            !0 === a.displayOnLoad && (!0 === a.animate ? this.draw() : this.show());
            return this
        };
        return this.__constructor()
    }
})(jQuery);



(function(d) {
    d.fn.ClassyLoader3 = function(a) {
        a = d.extend({}, {
            width: 292,
            height: 292,
            animate: !0,
            displayOnLoad: !0,
            percentage: 100,
            speed: 1,
            roundedLine: !1,
            showRemaining: !0,
            fontFamily: "Helvetica",
            fontSize: "50px",
            showText: !0,
            diameter: 80,
            fontColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(55, 55, 55, 1)",
            remainingLineColor: "rgba(55, 55, 55, 0.4)",
            lineWidth: 5
        }, a);
        var e = d(this);
        this.draw = function(b) {
            "undefined" !== typeof b && (a.percentage = b);
            var c = e[0].getContext("2d"),
                g = e.width() / 2,
                d = e.height() / 2,
                f = 0;
            c.scale(1, 1);
            c.lineWidth = a.lineWidth;
            c.strokeStyle = a.lineColour;
            setTimeout(function h() {
                var b = Math.PI / 180 * 360 / 100 * (f + 1),
                    b = b || Math.PI / 180 * 360 / 100 * (f + 1);
                c.clearRect(0, 0, e.width(), e.height());
                !0 === a.showRemaining && (c.beginPath(), c.strokeStyle = a.remainingLineColor, c.arc(g, d, a.diameter, 0, 360), c.stroke(), c.closePath());
                c.strokeStyle = a.lineColor;
                c.beginPath();
                c.lineCap = !0 === a.roundedLine ? "round" : "butt";
                c.arc(g, d, a.diameter, 0, b);
                c.stroke();
                c.closePath();
                !0 === a.showText && (c.fillStyle = a.fontColor, c.font = a.fontSize + " " + a.fontFamily, c.textAlign = "center", c.textBaseline = "middle", c.fillText(f + 1 + "%", g, d));
                f += 1;
                f < a.percentage && setTimeout(h, a.speed)
            }, a.speed)
        };
        this.setPercent = function(b) {
            a.percentage = b;
            return this
        };
        this.getPercent = function() {
            return a.percentage
        };
        this.show = function() {
            var b = e[0].getContext("2d"),
                c = e.width() / 2,
                d = e.height() / 2;
            b.scale(1, 1);
            b.lineWidth = a.lineWidth;
            b.strokeStyle = a.lineColour;
            b.clearRect(0, 0, e.width(), e.height());
            b.strokeStyle = a.lineColor;
            b.beginPath();
            b.arc(c, d, a.diameter, 0, Math.PI / 180 * (a.percentage / 100) * 360);
            b.stroke();
            b.closePath();
            !0 === a.showText && (b.fillStyle = a.fontColor, b.font = a.fontSize + " " + a.font, b.textAlign = "center", b.textBaseline = "middle", b.fillText(a.percentage + "%", c, d));
            !0 === a.showRemaining && (b.beginPath(), b.strokeStyle = a.remainingLineColor, b.arc(c, d, a.diameter, 0, 360), b.stroke(), b.closePath())
        };
        this.__constructor = function() {
            d(this).attr("width", a.width);
            d(this).attr("height", a.height);
            !0 === a.displayOnLoad && (!0 === a.animate ? this.draw() : this.show());
            return this
        };
        return this.__constructor()
    }
})(jQuery);


(function(d) {
    d.fn.ClassyLoader4 = function(a) {
        a = d.extend({}, {
            width: 230,
            height: 230,
            animate: !0,
            displayOnLoad: !0,
            percentage: 100,
            speed: 1,
            roundedLine: !1,
            showRemaining: !0,
            fontFamily: "Helvetica",
            fontSize: "50px",
            showText: !0,
            diameter: 80,
            fontColor: "rgba(255, 255, 255, 1)",
            lineColor: "rgba(55, 55, 55, 1)",
            remainingLineColor: "rgba(55, 55, 55, 0.4)",
            lineWidth: 5
        }, a);
        var e = d(this);
        this.draw = function(b) {
            "undefined" !== typeof b && (a.percentage = b);
            var c = e[0].getContext("2d"),
                g = e.width() / 2,
                d = e.height() / 2,
                f = 0;
            c.scale(1, 1);
            c.lineWidth = a.lineWidth;
            c.strokeStyle = a.lineColour;
            setTimeout(function h() {
                var b = Math.PI / 180 * 360 / 100 * (f + 1),
                    b = b || Math.PI / 180 * 360 / 100 * (f + 1);
                c.clearRect(0, 0, e.width(), e.height());
                !0 === a.showRemaining && (c.beginPath(), c.strokeStyle = a.remainingLineColor, c.arc(g, d, a.diameter, 0, 360), c.stroke(), c.closePath());
                c.strokeStyle = a.lineColor;
                c.beginPath();
                c.lineCap = !0 === a.roundedLine ? "round" : "butt";
                c.arc(g, d, a.diameter, 0, b);
                c.stroke();
                c.closePath();
                !0 === a.showText && (c.fillStyle = a.fontColor, c.font = a.fontSize + " " + a.fontFamily, c.textAlign = "center", c.textBaseline = "middle", c.fillText(f + 1 + "%", g, d));
                f += 1;
                f < a.percentage && setTimeout(h, a.speed)
            }, a.speed)
        };
        this.setPercent = function(b) {
            a.percentage = b;
            return this
        };
        this.getPercent = function() {
            return a.percentage
        };
        this.show = function() {
            var b = e[0].getContext("2d"),
                c = e.width() / 2,
                d = e.height() / 2;
            b.scale(1, 1);
            b.lineWidth = a.lineWidth;
            b.strokeStyle = a.lineColour;
            b.clearRect(0, 0, e.width(), e.height());
            b.strokeStyle = a.lineColor;
            b.beginPath();
            b.arc(c, d, a.diameter, 0, Math.PI / 180 * (a.percentage / 100) * 360);
            b.stroke();
            b.closePath();
            !0 === a.showText && (b.fillStyle = a.fontColor, b.font = a.fontSize + " " + a.font, b.textAlign = "center", b.textBaseline = "middle", b.fillText(a.percentage + "%", c, d));
            !0 === a.showRemaining && (b.beginPath(), b.strokeStyle = a.remainingLineColor, b.arc(c, d, a.diameter, 0, 360), b.stroke(), b.closePath())
        };
        this.__constructor = function() {
            d(this).attr("width", a.width);
            d(this).attr("height", a.height);
            !0 === a.displayOnLoad && (!0 === a.animate ? this.draw() : this.show());
            return this
        };
        return this.__constructor()
    }
})(jQuery);