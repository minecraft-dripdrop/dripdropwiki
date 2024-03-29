/*!
 * docsify-plugin-flexible-alerts
 * v1.1.0
 * https://github.com/fzankl/docsify-plugin-flexible-alerts#readme
 * (c) 2020 Fabian Zankl
 * MIT license
 */
! function () {
    "use strict";

    function h(t) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var e;
    ! function (t, e) {
        void 0 === e && (e = {});
        var a, l, o = e.insertAt;
        t && "undefined" != typeof document && (a = document.head || document.getElementsByTagName("head")[0], (l = document.createElement("style")).type = "text/css", "top" === o && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? l.styleSheet.cssText = t : l.appendChild(document.createTextNode(t)))
    }(".alert{display:block;position:relative;word-wrap:break-word;word-break:break-word;padding:.75rem 1.25rem!important;margin-bottom:1rem!important}.alert>*{max-width:100%}.alert>:first-child{margin-top:0}.alert>:last-child{margin-bottom:0}.alert:before{content:unset!important}.alert+.alert{margin-top:-.25rem!important}.alert p{margin-top:.5rem;margin-bottom:.5rem}.alert .title{display:flex;align-items:center;flex-wrap:wrap;font-weight:600;margin:0}.icon{display:inline-block;width:16px;height:16px;background-repeat:no-repeat;margin-right:.5rem}.alert.callout{border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem;background:var(--background)}.alert.callout.note{border-left-color:#17a2b8!important}.alert.callout.note .title{color:#17a2b8}.alert.callout.note .icon-note{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%2317a2b8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z'/%3E%3C/svg%3E\")}.alert.callout.tip{border-left-color:#28a745!important}.alert.callout.tip .title{color:#28a745}.alert.callout.tip .icon-tip{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 352 512' fill='%2328a745' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0026.64 14.28h61.71a31.99 31.99 0 0026.64-14.28l17.09-25.69a31.989 31.989 0 005.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'/%3E%3C/svg%3E\")}.alert.callout.warning{border-left-color:#f0ad4e!important}.alert.callout.warning .title{color:#f0ad4e}.alert.callout.warning .icon-warning{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 17 16' fill='%23f0ad4e' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3E%3C/svg%3E\")}.alert.callout.attention{border-left-color:#dc3545!important}.alert.callout.attention .title{color:#dc3545}.alert.callout.attention .icon-attention{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%23dc3545' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3E%3Cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708 0z'/%3E%3C/svg%3E\")}.alert.flat{border-radius:.125rem;color:#383d41;background-color:#e2e3e5;border:1px solid #d6d8db}.alert.flat.note{color:#02587f;background-color:#cdeefd;border-color:#b4e6fc}.alert.flat.note .title{color:#01354d}.alert.flat.note .icon-note{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%2301354d' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z'/%3E%3C/svg%3E\")}.alert.flat.tip{color:#285b2a;background-color:#dbefdc;border-color:#c9e7cb}.alert.flat.tip .title{color:#18381a}.alert.flat.tip .icon-tip{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 352 512' fill='%2318381a' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0026.64 14.28h61.71a31.99 31.99 0 0026.64-14.28l17.09-25.69a31.989 31.989 0 005.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z'/%3E%3C/svg%3E\")}.alert.flat.warning{color:#852d12;background-color:#ffddd3;border-color:#ffc9ba}.alert.flat.warning .title{color:#581e0c}.alert.flat.warning .icon-warning{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 17 16' fill='%23581e0c' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3E%3C/svg%3E\")}.alert.flat.attention{color:#7f231c;background-color:#fdd9d7;border-color:#fcc2bf}.alert.flat.attention .title{color:#551713}.alert.flat.attention .icon-attention{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='1em' height='1em' viewBox='0 0 16 16' fill='%23551713' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3E%3Cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708 0z'/%3E%3C/svg%3E\")}"), e = {
        style: "callout",
        note: {
            label: "备注",
            icon: "icon-note",
            className: "note"
        },
        tip: {
            label: "技巧",
            icon: "icon-tip",
            className: "tip"
        },
        warning: {
            label: "警告",
            icon: "icon-warning",
            className: "warning"
        },
        attention: {
            label: "注意",
            icon: "icon-attention",
            className: "attention"
        },
        typeMappings: {
            info: "note",
            danger: "attention"
        }
    }, window.$docsify = window.$docsify || {}, window.$docsify.plugins = [].concat(function (t, f) {
        function p(t, e, a, l) {
            var o = (t || "").match(new RegExp("".concat(e, ":(([\\s\\w\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF-]*))")));
            return o ? l ? l(o[1]) : o[1] : l ? l(a) : a
        }
        var w = function t(e, a, l) {
            var o, r = 2 < arguments.length && void 0 !== l ? l : 0;
            for (o in a) try {
                a[o].constructor === Object && r < 1 ? e[o] = t(e[o], a[o], r + 1) : e[o] = a[o]
            } catch (t) {
                e[o] = a[o]
            }
            return e
        }(e, f.config["flexible-alerts"] || f.config.flexibleAlerts);
        t.afterEach(function (t, e) {
            e(t.replace(/<\s*blockquote[^>]*>(?:<p>|[\S\n]*)?\[!(\w*)((?:\|[\w*:[\s\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]*)*?)\]([\s\S]*?)(?:<\/p>)?<\s*\/\s*blockquote>/g, function (t, e, a, l) {
                !w[e.toLowerCase()] && w.typeMappings[e.toLowerCase()] && (e = w.typeMappings[e.toLowerCase()]);
                var o = w[e.toLowerCase()];
                if (!o) return t;
                var r, n = p(a, "style", w.style),
                    i = p(a, "iconVisibility", "visible", function (t) {
                        return "hidden" !== t
                    }),
                    c = p(a, "labelVisibility", "visible", function (t) {
                        return "hidden" !== t
                    }),
                    d = p(a, "label", o.label),
                    s = p(a, "icon", o.icon),
                    g = p(a, "className", o.className);
                "object" === h(d) && ((r = Object.keys(d).filter(function (t) {
                    return -1 < f.route.path.indexOf(t)
                })) && 0 < r.length ? d = d[r[0]] : i = c = !1);
                var m = '<span class="icon '.concat(s, '"></span>'),
                    u = '<p class="title">'.concat(i ? m : "").concat(c ? d : "", "</p>");
                return '<div class="alert '.concat(n, " ").concat(g, '">\n            ').concat(i || c ? u : "", "\n            <p>").concat(l, "</p>\n          </div>")
            }))
        })
    }, window.$docsify.plugins)
}();
//# sourceMappingURL=docsify-plugin-flexible-alerts.min.js.map