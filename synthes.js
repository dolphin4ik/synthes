!function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports;
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0);
}([ function(e, n, t) {
    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    var o, i, u = ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
    }, t(1)), a = r(u);
    !function(t) {
        var r = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], t = e || null, r = null;
            n && 1 == n.nodeType ? r = n : "string" == typeof n && (r = document.querySelectorAll(n)[0]);
            var o = (0, a["default"])(t), i = !1, u = {
                render: function() {
                    return r && r.appendChild(o) && (i = !0), this;
                },
                bind: function(e) {
                    return r = 1 == e.nodeType ? e : null, i && this.render(), this;
                },
                node: null,
                string: null,
                template: e,
                isSynthes: !0
            };
            return Object.defineProperty(u, "template", {
                set: function(e) {
                    t = e;
                    var n = (0, a["default"])(t);
                    o.parentNode.insertBefore(n, o), o.remove(), o = n, n = null;
                },
                get: function() {
                    return t;
                },
                configurable: !1
            }), Object.defineProperty(u, "sandbox", {
                set: function(e) {
                    r = 1 == e.nodeType ? e : null, o.remove(), i && this.render();
                },
                get: function() {
                    return r;
                },
                configurable: !1
            }), Object.defineProperty(u, "node", {
                set: function() {},
                get: function() {
                    return o;
                },
                configurable: !1
            }), Object.defineProperty(u, "string", {
                set: function() {},
                get: function() {
                    var e = document.createElement("div");
                    return e.appendChild(o.cloneNode(!0)), e.innerHTML;
                },
                configurable: !1
            }), Object.defineProperty(u, "isSynthes", {
                value: !0,
                writable: !1,
                configurable: !1
            }), u;
        };
        t ? t.Synthes = r : (o = [], i = function() {
            return r;
        }.apply(n, o), !(void 0 !== i && (e.exports = i)));
    }(window);
}, function(e, n, t) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    function o(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e;
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(2), u = r(i), a = function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
        if (!e) return null;
        var n = function t(e) {
            var n = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "span" : arguments[0];
                return document.createElement(e);
            }, r = Object.keys(e)[0], i = n(r);
            if ("string" == typeof e[r] || null == e[r]) return i.innerHTML = e[r] || "", i;
            if (e[r] instanceof Array) {
                for (var a in e[r]) e[r][a].isSynthes && e[r][a].node ? i.appendChild(e[r][a].node) : i.appendChild(t(e[r][a]));
                return i;
            }
            if (e[r] instanceof Object) for (var l in e[r]) "content" != l && (e[r][l] instanceof Object || e[r][l] instanceof Array ? e[r][l].isSynthes && e[r][l].node ? i.appendChild(e[r][l].node) : i.appendChild(t(o({}, l, e[r][l]))) : "string" == typeof e[r][l] && (u["default"].indexOf(l) + 1 ? i.appendChild(t(o({}, l, e[r][l]))) : i.setAttribute(l, e[r][l])));
            if (e[r].content instanceof Array) for (var d in e[r].content) e[r].content[d].isSynthes && e[r].content[d].node ? i.appendChild(e[r].content[d].node) : i.appendChild(t(e[r].content[d])); else {
                if (e[r].content instanceof Object) {
                    if (e[r].content.isSynthes && e[r].content.node) i.appendChild(e[r].content.node); else {
                        var c = Object.keys(e[r].content)[0];
                        if (e[r].content[c] instanceof Object) for (var f in e[r].content) i.appendChild(t(o({}, f, e[r].content[f]))); else i.appendChild(t(e[r].content));
                    }
                    return i;
                }
                "string" == typeof e[r].content && (i.innerHTML = e[r].content);
            }
            return i;
        };
        return n(e);
    };
    n["default"] = a, e.exports = n["default"];
}, function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var t = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr" ];
    n["default"] = t, e.exports = n["default"];
} ]);
//# sourceMappingURL=synthes.js.map