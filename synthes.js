!function(e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports;
    }
    var t = {};
    return n.m = e, n.c = t, n.p = "", n(0);
}([ function(e, n, t) {
    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    var r, i, d = ("function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
    }, t(1)), l = o(d);
    !function(t) {
        var o = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], t = {
                template: e || null,
                sandbox: n && 1 == n.nodeType ? n : "string" == typeof n ? document.querySelectorAll(n)[0] : null,
                node: (0, l["default"])(e),
                WRAPPER: document.createElement("wrapper"),
                string: null,
                softDelete: !1,
                isRendered: !1
            };
            t.softDeleteDisplay = t.node ? 0 == t.node.style.display.length ? "block" : t.node.style.display : "block", 
            t.node && (t.WRAPPER.appendChild(t.node.cloneNode(!0)), t.string = t.WRAPPER.innerHTML);
            var o = {
                render: function() {
                    return t.sandbox && t.node && (t.softDelete ? (this.node.style.display = t.softDeleteDisplay, 
                    t.softDelete = !1) : t.sandbox.appendChild(t.node) && (t.isRendered = !0)), this;
                },
                bind: function(e) {
                    return t.sandbox = 1 == e.nodeType ? e : null, t.isRendered && this.render(), this;
                },
                "delete": function() {
                    var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                    return e ? (this.node.remove(), t.softDelete = !1) : this.node && (this.node.style.display = "none", 
                    t.softDelete = !0), this;
                },
                node: null,
                string: null,
                template: t.template,
                isSynthes: !0
            };
            return Object.defineProperty(o, "template", {
                set: function(e) {
                    t.template = e;
                    var n = (0, l["default"])(t.template);
                    t.isRendered && (n && t.node.parentNode.insertBefore(n, t.node), t.node.remove(), 
                    t.isRendered = !1), t.node = n, n = null, t.WRAPPER.innerHTML = "", t.node ? (t.WRAPPER.appendChild(t.node.cloneNode(!0)), 
                    t.string = t.WRAPPER.innerHTML) : t.string = null;
                },
                get: function() {
                    return t.template;
                },
                configurable: !1
            }), Object.defineProperty(o, "sandbox", {
                set: function(e) {
                    t.sandbox = 1 == e.nodeType ? e : null, t.node.remove(), t.isRendered && this.render();
                },
                get: function() {
                    return t.sandbox;
                },
                configurable: !1
            }), Object.defineProperty(o, "node", {
                set: function() {},
                get: function() {
                    return t.node;
                },
                configurable: !1
            }), Object.defineProperty(o, "string", {
                set: function() {},
                get: function() {
                    return t.string;
                },
                configurable: !1
            }), Object.defineProperty(o, "isSynthes", {
                value: !0,
                writable: !1,
                configurable: !1
            }), o;
        };
        r = [], i = function() {
            return o;
        }.apply(n, r), !(void 0 !== i && (e.exports = i)), t && (t.Synthes = o);
    }(window);
}, function(e, n, t) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
    function r(e, n, t) {
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
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
    }, d = t(2), l = o(d), a = function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
        if ("object" != ("undefined" == typeof e ? "undefined" : i(e))) return null;
        var n = function t(e) {
            var n = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "span" : arguments[0];
                return document.createElement(e);
            }, o = Object.keys(e)[0], i = n(o);
            if ("string" == typeof e[o] || null == e[o]) return i.innerHTML = e[o] || "", i;
            if (e[o] instanceof Array) {
                for (var d in e[o]) e[o][d].isSynthes && e[o][d].node ? i.appendChild(e[o][d].node) : i.appendChild(t(e[o][d]));
                return i;
            }
            if (e[o] instanceof Object) for (var a in e[o]) "content" != a && (e[o][a] instanceof Object || e[o][a] instanceof Array ? e[o][a].isSynthes && e[o][a].node ? i.appendChild(e[o][a].node) : i.appendChild(t(r({}, a, e[o][a]))) : "string" == typeof e[o][a] && (l["default"].indexOf(a) + 1 ? i.appendChild(t(r({}, a, e[o][a]))) : i.setAttribute(a, e[o][a])));
            if (e[o].content instanceof Array) for (var s in e[o].content) e[o].content[s].isSynthes && e[o].content[s].node ? i.appendChild(e[o].content[s].node) : i.appendChild(t(e[o].content[s])); else {
                if (e[o].content instanceof Object) {
                    if (e[o].content.isSynthes && e[o].content.node) i.appendChild(e[o].content.node); else {
                        var u = Object.keys(e[o].content)[0];
                        if (e[o].content[u] instanceof Object) for (var c in e[o].content) i.appendChild(t(r({}, c, e[o].content[c]))); else i.appendChild(t(e[o].content));
                    }
                    return i;
                }
                "string" == typeof e[o].content && (i.innerHTML = e[o].content);
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