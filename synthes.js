!function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Synthes = n() : e.Synthes = n();
}(this, function() {
    return function(e) {
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
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(1), i = o(r), d = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1], t = {};
            t.template = e, t.sandbox = n && 1 == n.nodeType ? n : "string" == typeof n ? document.querySelectorAll(n)[0] : null, 
            t.node = e ? (0, i["default"])(e) : null, t.WRAPPER = document.createElement("wrapper"), 
            t.string = null, t.softDelete = !1, t.isRendered = !1, t.softDeleteDisplay = t.node ? 0 == t.node.style.display.length ? "block" : t.node.style.display : "block", 
            t.node && (t.WRAPPER.appendChild(t.node.cloneNode(!0)), t.string = t.WRAPPER.innerHTML);
            var o = {
                render: function() {
                    return t.sandbox && t.node && (t.softDelete ? (this.node.style.display = t.softDeleteDisplay, 
                    t.softDelete = !1) : t.sandbox.appendChild(t.node) && (t.isRendered = !0)), this;
                },
                bind: function(e) {
                    return t.sandbox = e && 1 == e.nodeType ? e : null, t.isRendered && this.render(), 
                    this;
                },
                remove: function() {
                    var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                    return e ? this.node && (this.node.style.display = "none", t.softDelete = !0) : (this.node.remove(), 
                    t.softDelete = !1), this;
                },
                node: null,
                string: null,
                template: t.template,
                isSynthes: !0
            };
            return Object.defineProperty(o, "template", {
                set: function(e) {
                    t.template = e;
                    var n = (0, i["default"])(t.template);
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
        n["default"] = d, e.exports = n["default"];
    }, function(e, n) {
        "use strict";
        function t(e, n, t) {
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
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
        }, r = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
            if ("object" != ("undefined" == typeof e ? "undefined" : o(e))) return null;
            var n = function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0], n = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "span" : arguments[0];
                    return document.createElement(e);
                }, o = Object.keys(e)[0], i = n(o);
                if ("string" == typeof e[o] || null == e[o]) return i.innerHTML = e[o] || "", i;
                if (e[o] instanceof Array) {
                    for (var d in e[o]) e[o][d].isSynthes && e[o][d].node ? i.appendChild(e[o][d].node) : i.appendChild(r(e[o][d]));
                    return i;
                }
                if (e[o] instanceof Object) for (var l in e[o]) "content" != l && (e[o][l] instanceof Object || e[o][l] instanceof Array ? e[o][l].isSynthes && e[o][l].node ? i.appendChild(e[o][l].node) : i.appendChild(r(t({}, l, e[o][l]))) : "string" == typeof e[o][l] && ("@" == l[0] ? i.appendChild(r(t({}, l.slice(1), e[o][l]))) : i.setAttribute(l, e[o][l])));
                if (e[o].content) if (e[o].content instanceof Array) for (var s in e[o].content) e[o].content[s].isSynthes && e[o].content[s].node ? i.appendChild(e[o].content[s].node) : i.appendChild(r(e[o].content[s])); else {
                    if (e[o].content instanceof Object) {
                        if (e[o].content.isSynthes && e[o].content.node) i.appendChild(e[o].content.node); else {
                            var u = Object.keys(e[o].content)[0];
                            if (e[o].content[u] instanceof Object) for (var f in e[o].content) i.appendChild(r(t({}, f, e[o].content[f]))); else i.appendChild(r(e[o].content));
                        }
                        return i;
                    }
                    "string" == typeof e[o].content && (i.innerHTML = e[o].content);
                }
                return i;
            };
            return n(e);
        };
        n["default"] = r, e.exports = n["default"];
    } ]);
});