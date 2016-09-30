!function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0);
}([ function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    var o, i, l = ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
    }, n(1)), d = r(l);
    !function(n) {
        var r = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], n = e || null, r = null;
            t && 1 == t.nodeType ? r = t : "string" == typeof t && (r = document.querySelectorAll(t)[0]);
            var o = (0, d["default"])(n), i = 0 == o.style.display.length ? "block" : o.style.display, l = !1, a = !1, u = document.createElement("wrapper"), c = {
                render: function() {
                    return r && o && (l ? (this.node.style.display = i, l = !1) : r.appendChild(o) && (a = !0)), 
                    this;
                },
                bind: function(e) {
                    return r = 1 == e.nodeType ? e : null, a && this.render(), this;
                },
                "delete": function() {
                    var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                    return e ? (this.node.remove(), l = !1) : this.node && (this.node.style.display = "none", 
                    l = !0), this;
                },
                node: null,
                string: null,
                template: e,
                isSynthes: !0
            };
            return Object.defineProperty(c, "template", {
                set: function(e) {
                    n = e;
                    var t = (0, d["default"])(n);
                    o.parentNode.insertBefore(t, o), o.remove(), o = t, t = null;
                },
                get: function() {
                    return n;
                },
                configurable: !1
            }), Object.defineProperty(c, "sandbox", {
                set: function(e) {
                    r = 1 == e.nodeType ? e : null, o.remove(), a && this.render();
                },
                get: function() {
                    return r;
                },
                configurable: !1
            }), Object.defineProperty(c, "node", {
                set: function() {},
                get: function() {
                    return o;
                },
                configurable: !1
            }), Object.defineProperty(c, "string", {
                set: function() {},
                get: function() {
                    return o ? (u.appendChild(o.cloneNode(!0)), u.innerHTML) : null;
                },
                configurable: !1
            }), Object.defineProperty(c, "isSynthes", {
                value: !0,
                writable: !1,
                configurable: !1
            }), c;
        };
        o = [], i = function() {
            return r;
        }.apply(t, o), !(void 0 !== i && (e.exports = i)), n && (n.Synthes = r);
    }(window);
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2), l = r(i), d = function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
        if (!e) return null;
        var t = function n(e) {
            var t = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "span" : arguments[0];
                return document.createElement(e);
            }, r = Object.keys(e)[0], i = t(r);
            if ("string" == typeof e[r] || null == e[r]) return i.innerHTML = e[r] || "", i;
            if (e[r] instanceof Array) {
                for (var d in e[r]) e[r][d].isSynthes && e[r][d].node ? i.appendChild(e[r][d].node) : i.appendChild(n(e[r][d]));
                return i;
            }
            if (e[r] instanceof Object) for (var a in e[r]) "content" != a && (e[r][a] instanceof Object || e[r][a] instanceof Array ? e[r][a].isSynthes && e[r][a].node ? i.appendChild(e[r][a].node) : i.appendChild(n(o({}, a, e[r][a]))) : "string" == typeof e[r][a] && (l["default"].indexOf(a) + 1 ? i.appendChild(n(o({}, a, e[r][a]))) : i.setAttribute(a, e[r][a])));
            if (e[r].content instanceof Array) for (var u in e[r].content) e[r].content[u].isSynthes && e[r].content[u].node ? i.appendChild(e[r].content[u].node) : i.appendChild(n(e[r].content[u])); else {
                if (e[r].content instanceof Object) {
                    if (e[r].content.isSynthes && e[r].content.node) i.appendChild(e[r].content.node); else {
                        var c = Object.keys(e[r].content)[0];
                        if (e[r].content[c] instanceof Object) for (var s in e[r].content) i.appendChild(n(o({}, s, e[r].content[s]))); else i.appendChild(n(e[r].content));
                    }
                    return i;
                }
                "string" == typeof e[r].content && (i.innerHTML = e[r].content);
            }
            return i;
        };
        return t(e);
    };
    t["default"] = d, e.exports = t["default"];
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr" ];
    t["default"] = n, e.exports = t["default"];
} ]);