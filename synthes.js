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
    (function(e) {
        "use strict";
        function t(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        }, o = n(2), i = t(o);
        !function(t) {
            var n = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], t = arguments[1], n = e || null, r = null;
                t && 1 == t.nodeType ? r = t : "string" == typeof t && (r = document.querySelectorAll(t)[0]);
                var o = (0, i["default"])(n), a = null, u = !1, l = {
                    render: function() {
                        return r && r.appendChild(o) && (u = !0), this;
                    },
                    data: function(e) {
                        return a = e, this;
                    },
                    bind: function(e) {
                        return r = 1 == e.nodeType ? e : null, u && this.render(), this;
                    },
                    node: null,
                    string: null,
                    template: e,
                    isSynthes: !0
                };
                return Object.defineProperty(l, "template", {
                    set: function(e) {
                        n = e;
                        var t = (0, i["default"])(n);
                        o.parentNode.insertBefore(t, o), o.remove(), o = t, t = null;
                    },
                    get: function() {
                        return n;
                    },
                    configurable: !1
                }), Object.defineProperty(l, "sandbox", {
                    set: function(e) {
                        r = 1 == e.nodeType ? e : null, o.remove(), u && this.render();
                    },
                    get: function() {
                        return r;
                    },
                    configurable: !1
                }), Object.defineProperty(l, "node", {
                    set: function() {},
                    get: function() {
                        return o;
                    },
                    configurable: !1
                }), Object.defineProperty(l, "string", {
                    set: function() {},
                    get: function() {
                        var e = document.createElement("div");
                        return e.appendChild(o.cloneNode(!0)), e.innerHTML;
                    },
                    configurable: !1
                }), Object.defineProperty(l, "isSynthes", {
                    value: !0,
                    writable: !1,
                    configurable: !1
                }), l;
            };
            t ? t.Synthes = n : "object" === r(e) && e.exports && (e.exports = n);
        }(window);
    }).call(t, n(1)(e));
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], 
        e.webpackPolyfill = 1), e;
    };
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
    var i = n(3), a = r(i), u = function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
        if (!e) return null;
        var t = function n(e) {
            var t = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "span" : arguments[0];
                return document.createElement(e);
            }, r = Object.keys(e)[0], i = t(r);
            if ("string" == typeof e[r] || null == e[r]) return i.innerHTML = e[r] || "", i;
            if (e[r] instanceof Array) {
                for (var u in e[r]) e[r][u].isRandr && e[r][u].node ? i.appendChild(e[r][u].node) : i.appendChild(n(e[r][u]));
                return i;
            }
            if (e[r] instanceof Object) for (var l in e[r]) "content" != l && (e[r][l] instanceof Object || e[r][l] instanceof Array ? i.appendChild(n(o({}, l, e[r][l]))) : "string" == typeof e[r][l] && (a["default"].indexOf(l) + 1 ? i.appendChild(n(o({}, l, e[r][l]))) : i.setAttribute(l, e[r][l])));
            if (e[r].content instanceof Array) for (var c in e[r].content) e[r].content[c].isRandr && e[r].content[c].node ? i.appendChild(e[r].content[c].node) : i.appendChild(n(e[r].content[c])); else {
                if (e[r].content instanceof Object) {
                    if (e[r].content.isRandr && e[r].content.node) i.appendChild(e[r].content.node); else {
                        var d = Object.keys(e[r].content)[0];
                        if (e[r].content[d] instanceof Object) for (var f in e[r].content) i.appendChild(n(o({}, f, e[r].content[f]))); else i.appendChild(n(e[r].content));
                    }
                    return i;
                }
                "string" == typeof e[r].content && (i.innerHTML = e[r].content);
            }
            return i;
        };
        return t(e);
    };
    t["default"] = u, e.exports = t["default"];
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr" ];
    t["default"] = n, e.exports = t["default"];
} ]);
//# sourceMappingURL=synthes.js.map