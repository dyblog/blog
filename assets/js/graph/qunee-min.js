window.Q = function (t, i, n) {
    "use strict";

    function e(t, i, n) {
        if (t[er]()) {
            var s = t._f3 || t[sr]();
            if (s) {
                s = s._jr || s;
                for (var h = 0, r = s.length; r > h; h++) if (i[hr](n, s[h]) === !1 || e(s[h], i, n) === !1) return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t[er]()) return t instanceof _W ? t : null;
        for (var i, n = t._f3._jr, e = n[rr] - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }

    function h(t, i, n, e) {
        return e ? r(t, i, n) : a(t, i, n)
    }

    function r(t, i, n) {
        t = t._jr || t;
        for (var e, s = 0, h = t.length; h > s; s++) if (e = t[s], e.hasChildren() && !r(e.children, i, n) || i.call(n, e) === !1) return !1;
        return !0
    }

    function a(t, i, n) {
        t = t._jr || t;
        for (var e, s = 0, h = t[rr]; h > s; s++) if (e = t[s], i[hr](n, e) === !1 || e[er]() && !a(e.children, i, n)) return !1;
        return !0
    }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }

    function f(t, i, n) {
        t = t._jr || t;
        for (var e, s = t.length, h = s - 1; h >= 0; h--) if (e = t[h], e.hasChildren() && !f(e[ar], i, n) || i.call(n, e) === !1) return !1;
        return !0
    }

    function u(t, i, n) {
        t = t._jr || t;
        for (var e, s = t.length, h = s - 1; h >= 0; h--) if (e = t[h], i[hr](n, e) === !1 || e.hasChildren() && !u(e.children, i, n)) return !1;
        return !0
    }

    function c(t, i, n) {
        for (var e, s = (t._jr || t)[or](0); s[rr];) {
            e = s[0], s = s[fr](1);
            var h = i.call(n, e);
            if (h === !1) return !1;
            if (e[er]()) {
                var r = e.children;
                r = r._jr || r, s = s[ur](r)
            }
        }
        return !0
    }

    function _(t, i, n) {
        for (var e, s = (t._jr || t).slice(0); s[rr];) {
            e = s[s[rr] - 1], s = s.splice(0, s[rr] - 1);
            var h = i[hr](n, e);
            if (h === !1) return !1;
            if (e[er]()) {
                var r = e[ar];
                r = r._jr || r, s = s[ur](r)
            }
        }
        return !0
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t[rr], s = n[rr], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r
        }

        function e(t) {
            var i = t[rr], s = Math[cr](i / 2);
            return 1 >= i ? t : n(e(t.slice(0, s)), e(t.slice(s)))
        }

        return e(t)
    }

    function l(t, i, n, e) {
        t instanceof UY && (t = t._jr);
        for (var s = 0, h = (t._jr || t)[rr]; h > s; s++) {
            var r = i[hr](n, t[s], s, e);
            if (r === !1) return !1
        }
        return !0
    }

    function v(t, i, n) {
        for (var e = t instanceof UY, s = t._jr || t, h = 0, r = s[rr]; r > h; h++) {
            var a = s[h];
            i.call(n, a) && (e ? t[_r](a) : t[fr](h, 1), h--, r--)
        }
    }

    function b(t, i, n, e) {
        t instanceof UY && (t = t._jr);
        for (var s = (t._jr || t)[rr] - 1; s >= 0; s--) {
            var h = i.call(n, t[s], s, e);
            if (h === !1) return !1
        }
        return !0
    }

    function y(t) {
        if (t[dr] instanceof Function) return t[dr](!0);
        var i, n = [];
        return l(t, function (t) {
            i = t && t[dr] instanceof Function ? t[dr]() : t, n.push(i)
        }, this), n
    }

    function g(t, i, e) {
        e === n || 0 > e ? t[lr](i) : t[fr](e, 0, i)
    }

    function p(t, i) {
        var n = t[vr](i);
        return 0 > n || n >= t[rr] ? !1 : t.splice(n, 1)
    }

    function m(t, i) {
        var n = !1;
        return l(t, function (t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }

    function x(t, i) {
        var n = t;
        for (var e in i) if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(e), h = i.__lookupSetter__(e);
            s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
        } else n[e] = i[e];
        return n
    }

    function E(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        br == typeof i && (e = i, i = t, t = function () {
            i.apply(this, arguments)
        });
        var s = t.prototype, h = function () {
        };
        return h[yr] = i[yr], t[yr] = new h, t[gr] = i.prototype, t[gr].constructor = i, x(t[yr], s), e && x(t[yr], e), n && x(t[yr], n), t[yr][pr] = t, t
    }

    function w(t, i, n) {
        return T(t, i, "constructor", n)
    }

    function T(t, i, n, e) {
        var s = i.superclass;
        if (s) {
            var h = s[n];
            return h ? h[mr](t, e) : void 0
        }
    }

    function k(t, i, n, e) {
        if ("constructor" == n) return M(t, i, e);
        if (i[xr] instanceof Function) {
            var s = i[xr].prototype[n];
            return s instanceof Function ? s.apply(t, e) : void 0
        }
    }

    function M(t, i, n) {
        return i[xr] instanceof Function ? i[xr][mr](t, n) : void 0
    }

    function O(t, i) {
        return t[xr] = i, t.prototype = Object[Er](i[yr], {
            super_: {value: i, enumerable: !1},
            constructor: {value: t, enumerable: !1}
        }), t
    }

    function S(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t[wr];
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
                i[mr](this, arguments)
            } : function () {
            }, S(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object) return S(t, i[wr], i);
        if (i && O(t, i), n) {
            var s = t.prototype;
            for (var h in n) s[h] = n[h]
        }
        return t
    }

    function I(t, i, e, s, h) {
        if (s) return void Object.defineProperty(t, i, {value: e, enumerable: !0});
        var r = {configurable: !0, enumerable: !0}, a = Tr + i;
        e !== n && (t[a] = e), r.get = function () {
            return this[a]
        }, r.set = function (t) {
            var n = this[a];
            if (n == t) return !1;
            var e = new cq(this, i, t, n);
            return this.beforeEvent(e) ? (this[a] = t, h && h[hr](this, t, n), this.onEvent(e), !0) : !1
        }, Object[kr](t, i, r)
    }

    function P(t, i) {
        for (var n = 0, e = i[rr]; e > n; n++) {
            var s = i[n];
            I(t, s.name || s, s[Mr] || s[Or], s[Sr], s[Ir])
        }
    }

    function A(t, i, n) {
        return i instanceof Object ? t = t.bind(i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }

    function C(i, n) {
        return n && (i = i[Pr](n)), t[Ar](i)
    }

    function L(t, i) {
        return t.className = i, t
    }

    function D(t, i) {
        if (!t.hasOwnProperty(Cr)) {
            var n = t.getAttribute(pr);
            if (!n) return L(t, i);
            for (var e = n[Lr](Dr), s = 0, h = e[rr]; h > s; s++) if (e[s] == i) return;
            return n += Dr + i, L(t, n)
        }
        t[Cr].add(i)
    }

    function j(t, i) {
        if (!t.hasOwnProperty(Cr)) {
            var n = t.getAttribute(pr);
            if (!n || !n[vr](i)) return;
            for (var e = "", s = n[Lr](Dr), h = 0, r = s[rr]; r > h; h++) s[h] != i && (e += s[h] + Dr);
            return L(t, e)
        }
        t[Cr].remove(i)
    }

    function R(t) {
        return !isNaN(t) && t instanceof Number || jr == typeof t
    }

    function N(t) {
        return t !== n && (t instanceof String || Rr == typeof t)
    }

    function B(t) {
        return t !== n && (t instanceof Boolean || Nr == typeof t)
    }

    function $(t) {
        return Array[Br](t)
    }

    function F(i) {
        i || (i = t.event), i.preventDefault ? i[$r]() : i[Fr] = !1
    }

    function G(i) {
        i || (i = t[Gr]), i[zr] ? i.stopPropagation() : i.cancelBubble || (i[Yr] = !0)
    }

    function z(t) {
        F(t), G(t)
    }

    function Y(t) {
        return Math[qr](Math.random() * t)
    }

    function q() {
        return Math.random() >= .5
    }

    function H(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }

    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[qr](16777215 * Math[Hr]());
            return Ur + (i >> 16 & 255) + Wr + (i >> 8 & 255) + Wr + (255 & i) + Wr + t[Vr](2) + Xr
        }
        return X(Math[qr](16777215 * Math.random()))
    }

    function W(t) {
        return t > 0 ? Math[qr](t) : Math[cr](t)
    }

    function V(t) {
        return t > 0 ? Math.ceil(t) : Math[qr](t)
    }

    function X(t) {
        return 16777216 > t ? Zr + (Kr + t.toString(16))[or](-6) : Ur + (t >> 16 & 255) + Wr + (t >> 8 & 255) + Wr + (255 & t) + Wr + ((t >> 24 & 255) / 255)[Vr](2) + Xr
    }

    function Z(t, i, n) {
        br != typeof n || n.hasOwnProperty(Jr) || (n.enumerable = !0), Object.defineProperty(t, i, n)
    }

    function K(t, i) {
        for (var n in i) if (Qr != n[0]) {
            var e = i[n];
            br != typeof e || e.hasOwnProperty(Jr) || (e[Jr] = !0)
        }
        Object.defineProperties(t, i)
    }

    function J(i, n) {
        n || (n = t);
        for (var e = i.split(ta), s = 0, h = e.length; h > s; s++) {
            var r = e[s];
            n = n[r]
        }
        return n
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[ia] !== n
    }

    function ti() {
        t.console && console.log[mr](console, arguments)
    }

    function ii(i) {
        t.console && console[na](i)
    }

    function ni(i) {
        t.console && console[ea](i)
    }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._n2 ? (e = -1, h = 0, s = i) : 0 == t._n4 ? (e = 0, h = 1, s = n) : (e = -1 / t._n2, s = (t._n2 - e) * i + t._n6, h = 1);
        var r = new KY;
        return r._n2 = e, r._n6 = s, r._n4 = h, r._n0 = i, r._my = n, r._le = Math[sa](e, h), r[ha] = Math.cos(r._le), r[ra] = Math.sin(r._le), r
    }

    function si(t, i, n, e, s) {
        var h, r;
        i > e ? h = -1 : e > i && (h = 1), n > s ? r = -1 : s > n && (r = 1);
        var a, o;
        if (!h) return o = 0 > r ? t.y : t.bottom, {x: i, y: o};
        if (!r) return a = 0 > h ? t.x : t.right, {x: a, y: n};
        var f = (n - s) / (i - e), u = n - f * i, c = 0 > h ? i - t.x : i - t[aa], _ = 0 > r ? n - t.y : n - t[oa];
        return Math.abs(f) >= Math.abs(_ / c) ? (o = 0 > r ? t.y : t.bottom, a = (o - u) / f) : (a = 0 > h ? t.x : t[aa], o = f * a + u), {
            x: a,
            y: o
        }
    }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
    }

    function ri(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h
    }

    function ai(t, i, n, e, s, h, r, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && h >= i && t + n >= s + r && i + e >= h + a
    }

    function oi(t, i, n, e, s, h, r, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += r;
        var c = h;
        return c += a, s > t && (t = s), h > i && (i = h), o > u && (o = u), f > c && (f = c), o -= t, f -= i, 0 > o || 0 > f ? null : new QY(t, i, o, f)
    }

    function fi(t) {
        return fa in t && ua in t
    }

    function ui(t, i) {
        var n = ci(t, i[ca], i[_a]);
        return n.x += i.x || 0, n.y += i.y || 0, n
    }

    function ci(t, i, e) {
        if (!t) return {x: 0, y: 0};
        if (N(t) && (t = iq.fromString(t)), t instanceof iq) {
            var s, h, r = t[da], a = t[la];
            switch (r) {
                case nq:
                    s = 0;
                    break;
                case sq:
                    s = i;
                    break;
                default:
                    s = i / 2
            }
            switch (a) {
                case hq:
                    h = 0;
                    break;
                case aq:
                    h = e;
                    break;
                default:
                    h = e / 2
            }
            return {x: s, y: h}
        }
        if (t.x !== n) return t[va] ? {x: t.x * i, y: t.y * e} : {x: t.x, y: t.y};
        throw new Error("Position not be supported - " + t)
    }

    function _i(t, i, n) {
        t[ar].add(i, n), t[ba](i, n)
    }

    function di(t, i) {
        t._f3 && (t._f3.remove(i), t[ya](i))
    }

    function li(t) {
        return t.replace(/^-ms-/, ga).replace(/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function vi(t) {
        return t[pa](/[A-Z]/g, function (t) {
            return ma + t[xa]()
        })[pa](/^ms-/, Ea)
    }

    function bi(t, i) {
        var n = t[wa];
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = Oq(e)) && (n[s] = i[e]);
        return t
    }

    function yi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = Oq(i)) && (e += vi(n) + Ta + t[i] + ka);
        return e ? e.substring(0, e[rr] - 1) : e
    }

    function gi(t, i, n) {
        (i = Oq(i)) && (t.style[i] = n)
    }

    function pi(t, i) {
        return kq ? (i && !N(i) && (i = yi(i)), kq.insertRule ? void kq[Ma](t + Oa + i + Sa, 0) : void (kq[Ia] && kq[Ia](t, i, 0))) : !1
    }

    function mi(t, i) {
        var n = t[Pa];
        return n ? (i = i || t[Aa](), i[ca] / n) : 1
    }

    function xi(i, n) {
        i[ia] && (i = i[Ca] && i.changedTouches.length ? i[Ca][0] : i[ia][0]);
        var e = i[La] || 0, s = i[Da] || 0;
        YY && BY && (t.pageXOffset && e == i[ja] && (e -= t[Ra]), t.pageYOffset && s == i[Na] && (s -= t[Ba]));
        var h = n.getBoundingClientRect();
        e -= h.left, s -= h.top;
        var r = mi(n, h);
        return r && 1 !== r && (e /= r, s /= r), {x: e, y: s}
    }

    function Ei(t, i) {
        var n, e;
        t.touches ? (n = t.cx, e = t.cy) : (n = t[La], e = t[Da]);
        var s = mi(i);
        return s && 1 !== s && (n /= s, e /= s), {timeStamp: t.timeStamp, x: n, y: e}
    }

    function wi(t, i, n) {
        this._m9 = t, this._scope = n, this._handler = i, this._dragPoints = new ki, this[$a]()
    }

    function Ti(t) {
        return $Y && t[Fa] || !$Y && t[Ga]
    }

    function ki() {
        this.points = []
    }

    function Mi(t, i, n, e, s) {
        Si(t, function (e) {
            if (i) {
                var s = e.responseXML;
                if (!s) return void (n || sH)(za + t + Ya);
                i(s)
            }
        }, n, e, s)
    }

    function Oi(t, i, n, e, s) {
        Si(t, function (e) {
            if (i) {
                var s, h = e[qa];
                if (!h) return (n || sH)(za + t + Ha), s = new Error(za + t + Ha), i(h, s);
                try {
                    h = JSON[Ua](h)
                } catch (r) {
                    (n || sH)(r), s = r
                }
                i(h, s)
            }
        }, n, e, s)
    }

    function Si(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var h = new XMLHttpRequest, r = encodeURI(t);
            if (s !== !1) {
                var a;
                a = r.indexOf(Wa) > 0 ? "&" : Wa, r += a + Va + Date.now()
            }
            h[Xa](Za, r), h[Ka] = function () {
                return 4 == h[Ja] ? h.status && 200 != h.status ? void (n || sH)(za + t + Qa) : void (i && i(h)) : void 0
            }, h.send(e)
        } catch (o) {
            (n || sH)(za + t + Qa, o)
        }
    }

    function hi(t, i, n, e, s, h, r, a) {
        return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
    }

    function ai(t, i, n, e, s, h, r, a) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + a
    }

    function Ii(t, i, n) {
        return t instanceof Object && t.x ? Ai(t, i, 0, 0) : Pi(t, i, n, 0, 0)
    }

    function Pi(t, i, n, e, s) {
        var h = Math.sin(n), r = Math.cos(n), a = t - e, o = i - s;
        return t = a * r - o * h + e, i = a * h + o * r + s, new XY(t, i, n)
    }

    function Ai(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math.sin(i), h = Math.cos(i), r = t.x - n, a = t.y - e;
        return t.x = r * h - a * s + n, t.y = r * s + a * h + e, t
    }

    function Ci(t, i, n) {
        return Li(t, i, n, 0, 0)
    }

    function Li(t, i, n, e, s) {
        var h = Pi(t.x, t.y, i, e, s), r = Pi(t.x + t[ca], t.y, i, e, s), a = Pi(t.x + t.width, t.y + t[_a], i, e, s),
            o = Pi(t.x, t.y + t.height, i, e, s);
        return n ? n[to]() : n = new QY, n[io](h), n[io](r), n[io](a), n.addPoint(o), n
    }

    function Di(t, i) {
        var n = this[no] || 1;
        this[wa].width = t + eo, this[wa][_a] = i + eo, this[ca] = t * n, this[_a] = i * n
    }

    function ji(t) {
        var i = t[so] || t[ho] || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
        return aH / i
    }

    function Ri(t, n, e) {
        var s = i[ro](ao);
        if (s.g = s[oo](fo), t !== !0 && !e) return t && n && (s[ca] = t, s.height = n), s;
        var h = s.g;
        return h[no] = s.ratio = ji(h), s[uo] = Di, h._kz = function () {
            this.canvas[ca] = this.canvas[ca]
        }, t && n && s[uo](t, n), s
    }

    function Ni(t, i) {
        return oH || (oH = Ri()), t && i && (oH.width = t, oH[_a] = i), oH.g
    }

    function Bi(t, i, n) {
        return (n || HY[co]) + Dr + (i || HY.FONT_SIZE) + _o + (t || HY[lo])
    }

    function $i(t, i, n, e, s, h, r, a, o, f) {
        if (t[vo](), t[bo](n, e), fH && uH > r) {
            var u = r / uH;
            t.scale(u, u), r = uH, f = null
        }
        o || (o = HY[yo]), r || (r = HY.FONT_SIZE), o *= r, t[go] = f || Bi(h, r, a), t.textAlign = s, t[po] = mo;
        for (var c = o / 2, _ = i[Lr](xo), d = 0, l = _[rr]; l > d; d++) {
            var v = _[d];
            t[Eo](v, 0, c), c += o
        }
        t[wo]()
    }

    function Fi(t, i, n, e, s, h) {
        if (!t) return {width: 0, height: 0};
        if (i || (i = HY[To]), fH && uH > i) {
            var r = i / uH, a = Fi(t, uH, n, e, s);
            return a[ca] *= r, a[_a] *= r, a
        }
        var o = Ni();
        o[go] = h || Bi(n, i, e), s || (s = HY[yo]);
        for (var f = i * s, u = 0, c = 0, _ = t[Lr](xo), d = 0, l = _[rr]; l > d; d++) {
            var v = _[d];
            u = Math.max(o.measureText(v).width, u), c += f
        }
        return {width: u, height: c}
    }

    function Gi(t, i, n, e, s) {
        var h;
        try {
            h = t[ko](i, n, e, s)
        } catch (r) {
        }
        return h
    }

    function zi(t) {
        return Math.log(t + Math[Mo](t * t + 1))
    }

    function Yi(t, i) {
        i = i || t(1);
        var n = 1 / i, e = .5 * n, s = Math.min(1, i / 100);
        return function (h) {
            if (0 >= h) return 0;
            if (h >= i) return 1;
            for (var r = h * n, a = 0; a++ < 10;) {
                var o = t(r), f = h - o;
                if (Math.abs(f) <= s) return r;
                r += f * e
            }
            return r
        }
    }

    function qi(t, i, n) {
        var e = 1 - t, s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {x: s, y: h, rotate: Math[sa](a, r)}
        }
        return {t: t, x: s, y: h}
    }

    function Hi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }

    function Ui(t, i) {
        i.add(t[4], t[5]);
        var n = Hi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = qi(n, t);
            i.add(e.x, e.y)
        }
        var s = Hi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = qi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }

    function Wi(t, i) {
        return Math.abs(t - i) < 1e-7
    }

    function Vi(t, i) {
        return Wi(t[0], i[0]) && Wi(t[1], i[1])
    }

    function Xi(t) {
        if (Vi([t[0], t[1]], [t[2], t[3]])) {
            var i = t[0], n = t[1], e = t[4], s = t[5], h = Math[Mo](cH(i, n, e, s));
            return function (t) {
                return h * t
            }
        }
        if (Vi([t[0], t[1]], [t[4], t[5]]) || Vi([t[2], t[3]], [t[4], t[5]])) {
            var i = t[0], n = t[1], e = t[2], s = t[3], h = Math[Mo](cH(i, n, e, s));
            return function (t) {
                return h * t
            }
        }
        var r = t[0], a = t[2], o = t[4], f = r - 2 * a + o, u = 2 * a - 2 * r;
        r = t[1], a = t[3], o = t[5];
        var c = r - 2 * a + o, _ = 2 * a - 2 * r, d = 4 * (f * f + c * c), l = 4 * (f * u + c * _), v = u * u + _ * _,
            h = 4 * d * v - l * l;
        if (1e-5 > h && h > -1e-5) {
            var b = ZY(t[0], t[1], t[2], t[3]), y = ZY(t[2], t[3], t[4], t[5]);
            return function (t) {
                return (2 * b + (y - b) * t) * t
            }
        }
        var g = 1 / h, p = .125 * Math.pow(d, -1.5), m = 2 * Math.sqrt(d),
            x = (h * zi(l / Math[Mo](h)) + 2 * Math[Mo](d) * l * Math[Mo](v)) * p;
        return function (t) {
            var i = l + 2 * t * d, n = i / Math[Mo](h), e = i * i * g;
            return (h * Math.log(n + Math[Mo](e + 1)) + m * i * Math[Mo](v + t * l + t * t * d)) * p - x
        }
    }

    function Zi(t, i, n) {
        var e = 1 - t, s = i[0], h = i[2], r = i[4], a = i[6],
            o = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], h = i[3], r = i[5], a = i[7];
        var u = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
            return {x: o, y: u, rotate: Math.atan2(c, f)}
        }
        return {x: o, y: u}
    }

    function Ki(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var h = 2 * t - 4 * i + 2 * n, r = i - t, a = h * h - 4 * s * r;
        return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math[Mo](a), [(a - h) / (2 * s), (-a - h) / (2 * s)])
    }

    function Ji(t, i) {
        i.add(t[6], t[7]);
        var n = Ki(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n.length; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var h = Zi(s, t);
                i.add(h.x, h.y)
            }
        }
        if (n = Ki(t[1], t[3], t[5], t[7])) for (var e = 0; e < n.length; e++) {
            var s = n[e];
            if (!(0 >= s || s >= 1)) {
                var h = Zi(s, t);
                i.add(h.x, h.y)
            }
        }
    }

    function Qi(t) {
        var i = {x: t[0], y: t[1]}, n = {x: t[2], y: t[3]}, e = {x: t[4], y: t[5]}, s = {x: t[6], y: t[7]}, h = i.x - 0,
            r = i.y - 0, a = n.x - 0, o = n.y - 0, f = e.x - 0, u = e.y - 0, c = s.x - 0, _ = s.y - 0,
            d = 3 * (-h + 3 * a - 3 * f + c), l = 6 * (h - 2 * a + f), v = 3 * (-h + a),
            b = 3 * (-r + 3 * o - 3 * u + _), y = 6 * (r - 2 * o + u), g = 3 * (-r + o), p = function (t) {
                var i = d * t * t + l * t + v, n = b * t * t + y * t + g;
                return Math[Mo](i * i + n * n)
            }, m = (p(0) + 4 * p(.5) + p(1)) / 6;
        return m
    }

    function tn(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e, h = 2 * t - 4 * i + 2 * n, r = i - t;
            return function (t) {
                return 3 * (s * t * t + h * t + r)
            }
        }

        function e(t, i) {
            var n = s(t), e = h(t);
            return Math[Mo](n * n + e * e) * i
        }

        var s = n(t[0], t[2], t[4], t[6]), h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function (t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0; ;) {
                if (i = n + r, i >= t) return s += e(n, i - n);
                s += e(n, r), n = i
            }
        }
    }

    function nn(t, i, n) {
        return cH(i, n, t.cx, t.cy) <= t[Oo] + _H
    }

    function en(t, i, n, e) {
        return n = n || sn(t, i), new hn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }

    function sn(t, i) {
        return ZY(t.x, t.y, i.x, i.y)
    }

    function hn(t, i, n, e, s, h, r) {
        this.cx = t, this.cy = i, this.r = n, this._squareR = n * n, this.p1 = e, this.p2 = s, this.p3 = h, this._otherPoint = r
    }

    function rn(t, i, n, e) {
        this.cx = t, this.cy = i, this.width = n, this[_a] = e
    }

    function an(t) {
        var i = t[0], n = t[1], e = t[2], s = hn[So](i, n, e);
        return fn(t, i, n, e, s)
    }

    function on(t, i) {
        i = i || un(t);
        for (var n, e = i[ca] / i[_a], s = [], h = t[rr], r = 0; h > r; r++) n = t[r], s[lr]({x: n.x, y: n.y * e});
        var a = an(s);
        return a ? new rn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }

    function fn(t, i, n, e, s) {
        for (var h, r, a = t[rr], o = s[Oo], f = 0; a > f; f++) if (h = t[f], h != i && h != n && h != e) {
            var u = cH(s.cx, s.cy, h.x, h.y);
            u - _H > o && (o = u, r = h)
        }
        if (!r) return s;
        var c, _ = hn._jxCircle(r, i, n), d = hn[So](r, i, e), l = hn[So](r, e, n);
        return nn(_, e.x, e.y) && (c = _), nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d), nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c[Io], fn(t, i, n, e, c)
    }

    function un(t) {
        for (var i, n = t[rr], e = new QY, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
        return e
    }

    function cn(t, i, n, e, s) {
        this._68 && this[Po]();
        var h = s ? this.getBounds(s) : this[Ao], r = n / h[ca], a = t - r * h.x, o = e / h[_a], f = i - o * h.y,
            u = this._fp, c = [];
        return l(u, function (t) {
            var i = t[dr](), n = i[Co];
            if (n && n.length) {
                for (var e = n[rr], s = [], h = 0; e > h; h++) {
                    var u = n[h];
                    h++;
                    var _ = n[h];
                    u = r * u + a, _ = o * _ + f, s.push(u), s.push(_)
                }
                i.points = s
            }
            c[lr](i)
        }, this), new YH(c)
    }

    function _n(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h) return !1;
        if (!e) {
            var r = this[Lo](s);
            if (!r.intersectsPoint(t, i, n)) return !1
        }
        var a = Math.round(2 * n) || 1, o = Ni(a, a), f = (o[ao], -t + n), u = -i + n;
        if (o.setTransform(1, 0, 0, 1, f, u), !o[Do]) {
            this._lm(o), s && o.stroke(), h && o[jo]();
            var c = Gi(o, 0, 0, a, a);
            if (!c) return !1;
            c = c.data;
            for (var _ = c[rr] / 4; _ > 0;) {
                if (c[4 * _ - 1] > zH) return !0;
                --_
            }
            return !1
        }
        return o.lineWidth = (s || 0) + 2 * n, this._lm(o), s && o[Do](n, n) ? !0 : h ? o[Ro](n, n) : !1
    }

    function dn(t, i, n) {
        if (!this._iy || this._fp[rr] < 2) {
            if (this._fp[rr]) {
                var e = n !== !1 ? this._fp[0][No] : this._fp[this._fp[rr] - 1][Bo];
                return i && (e.y += i), t && (e.x += t), e
            }
            return null
        }
        var s = this._fp;
        n === !1 && (t += this._iy);
        var h = s[0];
        if (0 >= t) return Ks(h[Co][0], h.points[1], s[1].points[0], s[1].points[1], t, i);
        if (t >= this._iy) {
            h = s[s[rr] - 1];
            var r, a, o = h.points, f = o[rr], u = o[f - 2], c = o[f - 1];
            if (f >= 4) r = o[f - 4], a = o[f - 3]; else {
                h = s[s[rr] - 2];
                var _ = h[Bo];
                r = _.x, a = _.y
            }
            return Ks(u, c, u + u - r, c + c - a, t - this._iy, i)
        }
        for (var d, l = 0, v = 1, f = s.length; f > v; v++) if (d = s[v], d._iy) {
            if (!(l + d._iy < t)) {
                var b, _ = h.lastPoint;
                if (d[$o] == $H) {
                    var y = d[Co];
                    b = ln(t - l, d, _.x, _.y, y[0], y[1], y[2], y[3], d._r)
                } else {
                    if (!d._lf) return Ks(_.x, _.y, d[Co][0], d.points[1], t - l, i);
                    var g = Yi(d._lf, d._iy)(t - l), y = d.points;
                    b = d[$o] == BH && 6 == y.length ? Zi(g, [_.x, _.y][ur](y), !0) : qi(g, [_.x, _.y][ur](y), !0), b.t = g
                }
                return i && (b.x -= i * Math.sin(b[Fo] || 0), b.y += i * Math.cos(b.rotate || 0)), b
            }
            l += d._iy, h = d
        } else h = d
    }

    function ln(t, i, n, e, s, h, r, a) {
        if (t <= i._l1) return Ks(n, e, s, h, t, t);
        if (t >= i._iy) return t -= i._iy, Ks(i[Go], i._p2y, r, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i[zo] && (o = -o);
            var f = Pi(i._p1x, i[Yo], o, i._o.x, i._o.y);
            return f.rotate += i[qo] || 0, f.rotate += Math.PI, f
        }
        return Ks(i._p1x, i[Yo], i[Go], i[Ho], t, t)
    }

    function ei(t, i, n) {
        var e, s, h;
        0 == t._n2 ? (e = -1, h = 0, s = i) : 0 == t._n4 ? (e = 0, h = 1, s = n) : (e = -1 / t._n2, s = (t._n2 - e) * i + t._n6, h = 1);
        var r = new KY;
        return r._n2 = e, r._n6 = s, r._n4 = h, r._n0 = i, r._my = n, r
    }

    function vn(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function bn(t, i, n, e, s, h, r, a) {
        var o = ZY(i, n, e, s), f = ZY(e, s, h, r);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._iy = 0;
        var u = gn(e, s, i, n), c = gn(e, s, h, r);
        t[qo] = u, t[Uo] = c;
        var _ = u - c;
        _ = vn(_), _ > Math.PI && (_ = 2 * Math.PI - _, t[zo] = !0);
        var d = Math.PI - _, l = Math.tan(_ / 2), v = a / l, b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math.cos(u) * v, p = s + Math.sin(u) * v, m = e + Math.cos(c) * v, x = s + Math.sin(c) * v,
            E = new KY(i, n, e, s), w = new KY(e, s, h, r), T = ei(E, g, p), k = ei(w, m, x), M = T._3k(k),
            O = Math[sa](p - M.y, g - M.x), S = Math[sa](x - M.y, m - M.x);
        y = t[zo] ? S : O;
        for (var I, P = 0; 4 > P;) {
            var A = P * WY;
            if (vn(A - y) <= d) {
                var C, L;
                if (I ? I++ : I = 1, 0 == P ? (C = M.x + a, L = M.y) : 1 == P ? (C = M.x, L = M.y + a) : 2 == P ? (C = M.x - a, L = M.y) : (C = M.x, L = M.y - a), t[Wo + I] = {
                    x: C,
                    y: L
                }, 2 == I) break
            }
            P++
        }
        return t._p1x = g, t._p1y = p, t._p2x = m, t[Ho] = x, t._o = M, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._iy = t._l1 + d * a
    }

    function yn(t, i, n, e, s, h, r) {
        var a = gn(n, e, t, i), o = gn(n, e, s, h), f = a - o;
        return r ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }

    function gn(t, i, n, e) {
        return Math[sa](e - i, n - t)
    }

    function pn(t, i) {
        for (var n = t.getImageData(0, 0, i.width, i[_a])[Vo], e = !1, s = 3, h = n[rr]; h > s; s += 4) if (n[s] < 255) {
            e = !0;
            break
        }
        return e
    }

    function mn(t) {
        return t = En(t), /^png/i[Xo](t) || /^gif/i[Xo](t)
    }

    function xn(t, i, n, e, s) {
        if (i && n) {
            t[Zo] = .5, t[Ko] = Jo, t[Qo](0, 0, i, n), e && (t[tf] = e, t.fillRect(0, 0, i, n));
            var h = 2, r = 40, a = 28, o = 10, f = Math.min(i / (r + o), n / (a + o));
            t[vo](), t.globalAlpha = .6, t[bo](i / 2, n / 2), t[nf](f, f), t.translate(-r / 2, -a / 2), t[ef](), t[sf](0, 0, r, a), t.clip(), t[tf] = hf, t[jo](), t.globalAlpha = 1, t[rf](0, 21), t[af](12, 12), t.lineTo(26, 28), t.moveTo(18, 18), t[af](28, 8), t[af](40, 18), t.lineWidth = h, t.strokeStyle = of, t[ff](), s && (t.beginPath(), t.moveTo(26, -4), t[af](17, 11), t[af](23, 17), t[af](14, 32), t[Zo] = 5, t[Ko] = e || uf, t[ff]()), t.restore()
        }
    }

    function En(t) {
        var i = lH[cf](t);
        if (i) return i[1];
        var n = t[_f](ta);
        return n >= 0 && n < t[rr] - 1 ? t[df](n + 1) : void 0
    }

    function wn(t) {
        if (!t) return null;
        if (t instanceof YH) return xH;
        if (t[lf] instanceof Function) return mH;
        if (N(t)) {
            var i = En(t);
            if (i) {
                if (!AY && vH[Xo](i)) return pH;
                if (bH.test(i)) return gH
            }
            return yH
        }
    }

    function Tn(t, i, n) {
        if (this._mb = wn(t), !this._mb) throw new Error("the image format is not supported", t);
        this._lh = t, this._n2b = i, this._8u = n, this.width = i || HY[vf], this[_a] = n || HY.IMAGE_HEIGHT, this._j6 = {}
    }

    function kn(t, i, n, e) {
        return i ? (kH[t] = new Tn(i, n, e), t) : void delete kH[t]
    }

    function Mn(t) {
        if (t._kq) return t._kq;
        var i = N(t);
        if (!i && !t[bf]) return t._kq = new Tn(t);
        var n = t.name || t;
        return n in kH ? kH[n] : kH[n] = new Tn(t)
    }

    function On(t) {
        return t in kH
    }

    function Sn(t, i, n) {
        n = n || {};
        var e = t[Lo](n.lineWidth);
        if (!e[ca] || !e[_a]) return !1;
        var s = i[oo](fo), h = i[no] || 1, r = n.scaleMode || yf, a = /full/i[Xo](r), o = /uniform/i[Xo](r), f = 1,
            u = 1;
        if (a) {
            var c = i[ca], _ = i[_a], d = n.padding, l = 0, v = 0;
            if (d) {
                var b, y, g, p;
                R(d) ? b = y = g = p = d : (b = d.top || 0, y = d[oa] || 0, g = d.left || 0, p = d[aa] || 0), c -= g + p, _ -= b + y, l += g, v += b
            }
            f = c / e.width, u = _ / e.height, o && (f > u ? (l += (c - u * e[ca]) / 2, f = u) : u > f && (v += (_ - f * e.height) / 2, u = f)), (l || v) && s[bo](l, v)
        }
        s.translate(-e.x * f, -e.y * u), t[lf](s, h, n, f, u, !0)
    }

    function In(t, i, n) {
        var e = Mn(t);
        return e ? (e[Po](), (e._mb == pH || e._62()) && e[gf](function (t) {
            t[pf] && (this[ca] = this[ca], Sn(t[pf], this, n))
        }, i), void Sn(e, i, n)) : (hH[ea](mf + t), !1)
    }

    function Pn(t, i, n, e) {
        var s = t.length;
        if (s && !(0 > s)) {
            e = e || 1;
            for (var h, r, a = 0; a++ < s;) if (h = t[xf](a, 0), h && (r = ZY(i, n, h.x, h.y), !(r > e))) {
                for (var o = 0; o++ < e;) if (h = t[xf](a + o, 0)) {
                    var f = ZY(i, n, h.x, h.y);
                    if (f >= r) {
                        a += o;
                        break
                    }
                    r = f
                }
                for (var u = a, c = t.length - 1, _ = 0, a = 0, d = t._fp.length; d > a; a++) if (_ += t._fp[a]._iy || 0, _ > u) {
                    c = a;
                    break
                }
                return h.length = u, h.index = c, h
            }
        }
    }

    function An(t, i, n) {
        return {x: t.x + (i.x - t.x) * n, y: t.y + (i.y - t.y) * n}
    }

    function Cn(t, i, n, e, s) {
        e = e || HY[Ef];
        var h = Pn(t, i, n, s);
        if (h) {
            i = h.x, n = h.y;
            var r = t._fp, a = h[wf], o = a == r[rr] - 1, f = r[a], u = r[or](0);
            if (f[$o] == RH || f[$o] == FH) if (Tf == e) u.splice(a, 0, new GH(RH, [h.x, h.y])); else {
                var c = r[a - 1][Bo], _ = f.firstPoint, d = ZY(c.x, c.y, i, n) / ZY(c.x, c.y, _.x, _.y),
                    l = An(c, h, d), v = An(h, _, d);
                u[fr](a, 1, new GH(NH, [l.x, l.y, i, n]), new GH(NH, f.invalidTerminal ? [v.x, v.y] : [v.x, v.y, _.x, _.y]))
            } else if (kf in h && Tf != e) {
                var d = h.t;
                if (f[$o] == BH) {
                    var c = r[a - 1].lastPoint, _ = {x: f[Co][0], y: f[Co][1]}, b = {x: f.points[2], y: f.points[3]},
                        y = {x: f.points[4], y: f.points[5]}, l = An(c, _, d), v = An(_, b, d), g = An(b, y, d),
                        p = An(l, v, d), m = An(v, g, d);
                    u[fr](a, 1, new GH(BH, [l.x, l.y, p.x, p.y, i, n]), new GH(BH, f.invalidTerminal ? [m.x, m.y, g.x, g.y] : [m.x, m.y, g.x, g.y, y.x, y.y]))
                } else if (f.type == NH) {
                    var c = r[a - 1][Bo], _ = {x: f[Co][0], y: f[Co][1]}, b = {x: f.points[2], y: f.points[3]},
                        l = An(c, _, d), v = An(_, b, d);
                    u[fr](a, 1, new GH(NH, [l.x, l.y, i, n]), new GH(NH, f[Mf] ? [v.x, v.y] : [v.x, v.y, b.x, b.y]))
                }
            } else {
                var _ = f.lastPoint;
                u[fr](a, 1, new GH(RH, [i, n]), new GH(RH, [_.x, _.y]))
            }
            return {atEnd: o, index: a, isCurve: Tf !== e, segments: u}
        }
    }

    function Ln(t) {
        var i = t[ca], n = t[_a], e = Gi(t.g, 0, 0, i, n);
        return e ? jn(e[Vo], i, n) : void 0
    }

    function Dn(t, i, n) {
        this._$z(t, i, n)
    }

    function jn(t, i, n) {
        return new Dn(t, i, n)
    }

    function Rn(t) {
        if (Zr == t[0]) {
            if (t = t[df](1), 3 == t[rr]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t[rr]) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t[vr](Of), n = t[vr](Xr);
            if (0 > i || i > n) return;
            if (t = t[df](i + 1, n), t = t[Lr](Wr), t[rr] < 3) return;
            var e = parseInt(t[0]), s = parseInt(t[1]), h = parseInt(t[2]), r = 3 == t[rr] ? 255 : parseInt(t[3]);
            return [e, s, h, r]
        }
        hH[ea]("color format error, [" + t + Sf)
    }

    function Nn(t, i, n) {
        return n || (n = HY.BLEND_MODE), n == rH[If] ? t * i : n == rH[Pf] ? Math.min(t, i) : n == rH.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : n == rH[Af] ? t + i - 1 : n == rH.BLEND_MODE_LIGHTEN ? Math.max(t, i) : n == rH.BLEND_MODE_SCREEN ? t + i - t * i : i
    }

    function Bn(t, i, n) {
        var e = Gi(t.g, 0, 0, t[ca], t[_a]);
        if (e) {
            var s = e[Vo];
            if (n instanceof Function) s = n(t, s, i) || s; else {
                var h = i[0] / 255, r = i[1] / 255, a = i[2] / 255;
                if (n == rH.BLEND_MODE_GRAY) for (var o = 0, f = s[rr]; f > o; o += 4) {
                    var u = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
                    s[o] = u * h | 0, s[o + 1] = u * r | 0, s[o + 2] = u * a | 0
                } else for (var o = 0, f = s.length; f > o; o += 4) s[o] = 255 * Nn(h, s[o] / 255, n) | 0, s[o + 1] = 255 * Nn(r, s[o + 1] / 255, n) | 0, s[o + 2] = 255 * Nn(a, s[o + 2] / 255, n) | 0
            }
            var t = Ri(t[ca], t[_a]);
            return t.g[Cf](e, 0, 0), t
        }
    }

    function $n(t, i, n, e) {
        return 1 > n && (n = 1), Fn(t - n, i - n, 2 * n, 2 * n, e)
    }

    function Fn(t, i, n, e, s) {
        n = Math[Lf](n) || 1, e = Math[Lf](e) || 1;
        var h = Ni(n, e);
        h[Df](1, 0, 0, 1, -t, -i), s.draw(h);
        var r = Gi(h, 0, 0, n, e);
        if (!r) return !1;
        r = r[Vo];
        for (var a = r[rr] / 4; a-- > 0;) if (r[4 * a - 1] > zH) return !0;
        return !1
    }

    function Gn(t, i, n, e, s, h) {
        t -= s.$x, i -= s.$y;
        var r = s._f5.intersection(t, i, n, e);
        if (!r) return !1;
        t = r.x * h, i = r.y * h, n = r[ca] * h, e = r[_a] * h, n = Math[Lf](n) || 1, e = Math[Lf](e) || 1;
        var a = Ni(), o = a.canvas;
        o.width < n || o.height < e ? (o.width = n, o[_a] = e) : (a[Df](1, 0, 0, 1, 0, 0), a[jf](0, 0, n, e)), a[Df](1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h), a[nf](h, h), s._jn(a, 1);
        var f = Gi(a, 0, 0, n, e);
        if (!f) return !1;
        f = f[Vo];
        for (var u = f[rr] / 4; u-- > 0;) if (f[4 * u - 1] > zH) return !0;
        return !1
    }

    function zn(t, i, n, e, s, h, r, a, o) {
        if (ri(t, i, n, e, a, o)) return null;
        var f, u, c, _ = new GH(RH, [t + n - s, i]), d = new GH(NH, [t + n, i, t + n, i + h]),
            l = new GH(RH, [t + n, i + e - h]), v = new GH(NH, [t + n, i + e, t + n - s, i + e]),
            b = new GH(RH, [t + s, i + e]), y = new GH(NH, [t, i + e, t, i + e - h]), g = new GH(RH, [t, i + h]),
            p = new GH(NH, [t, i, t + s, i]), m = (new GH(FH), [_, d, l, v, b, y, g, p]),
            x = new QY(t + s, i + h, n - s - s, e - h - h);
        t > a ? (f = nq, c = 5) : a > t + n ? (f = sq, c = 1) : (f = eq, c = 0), i > o ? (u = hq, f == nq && (c = 7)) : o > i + e ? (u = aq, f == sq ? c = 3 : f == eq && (c = 4)) : (u = rq, f == nq ? c = 6 : f == sq && (c = 2));
        var E = Vn(c, t, i, n, e, s, h, r, a, o, x), w = E[0], T = E[1], k = new YH, M = k._fp;
        M[lr](new GH(jH, [w.x, w.y])), M[lr](new GH(RH, [a, o])), M[lr](new GH(RH, [T.x, T.y])), T._lp && (M.push(T._lp), T[Rf]++);
        for (var O = T[Rf] % 8, S = w._lpNO; M[lr](m[O]), ++O, O %= 8, O != S;) ;
        return w._lp && M[lr](w._lp), k[Nf](), k
    }

    function Yn(t, i, e, s, h, r, a, o, f, u, c, _, d, l) {
        var v = new KY(_, d, e, s), b = new KY(i[0], i[1], i[4], i[5]), y = b._3k(v, c), g = y[0], p = y[1];
        if (g._rest !== n) {
            g[Rf] = (t - 1) % 8, p[Rf] = (t + 1) % 8;
            var m = g[Bf];
            7 == t ? (g.y = r + u + Math.min(l[_a], m), p.x = h + f + Math.min(l[ca], m)) : 5 == t ? (g.x = h + f + Math.min(l[ca], m), p.y = r + o - u - Math.min(l[_a], m)) : 3 == t ? (g.y = r + o - u - Math.min(l[_a], m), p.x = h + a - f - Math.min(l.width, m)) : 1 == t && (g.x = h + a - f - Math.min(l[ca], m), p.y = r + u + Math.min(l.height, m))
        } else {
            v._mq(v._n0, v._my, g.x, g.y), g = v._$b(i), v._mq(v._n0, v._my, p.x, p.y), p = v._$b(i);
            var x = Xn(i, [g, p]), E = x[0], w = x[2];
            g[Rf] = t, p[Rf] = t, g._lp = new GH(NH, E[or](2)), p._lp = new GH(NH, w.slice(2))
        }
        return [g, p]
    }

    function qn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (o - a >= i + h) u = {y: n, x: o - a}, u[Rf] = 0; else {
            u = {y: n + r, x: Math.max(i, o - a)};
            var _ = [i, n + r, i, n, i + h, n], d = new KY(o, f, u.x, u.y);
            if (u = d._$b(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(_, [u]);
                l = l[0], l && (u._lp = new GH(NH, l.slice(2))), u[Rf] = 7
            } else u = {y: n, x: i + h}, u._lpNO = 0
        }
        if (i + e - h >= o + a) c = {y: n, x: o + a}, c._lpNO = 0; else {
            c = {y: n + r, x: Math.min(i + e, o + a)};
            var v = [i + e - h, n, i + e, n, i + e, n + r], d = new KY(o, f, c.x, c.y);
            if (c = d._$b(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(v, [c]);
                l && l[l[rr] - 1] && (c._lp = new GH(NH, l[l.length - 1].slice(2))), c[Rf] = 1
            } else c = {y: n, x: i + e - h}, c[Rf] = 0
        }
        return [u, c]
    }

    function Hn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (f - a >= n + r) u = {x: i + e, y: f - a}, u._lpNO = 2; else {
            u = {x: i + e - h, y: Math.max(n, f - a)};
            var _ = [i + e - h, n, i + e, n, i + e, n + r], d = new KY(o, f, u.x, u.y);
            if (u = d._$b(_)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(_, [u]);
                l = l[0], l && (u._lp = new GH(NH, l[or](2))), u[Rf] = 1
            } else u = {x: i + e, y: n + r}, u[Rf] = 2
        }
        if (n + s - r >= f + a) c = {x: i + e, y: f + a}, c[Rf] = 2; else {
            c = {x: i + e - h, y: Math.min(n + s, f + a)};
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = new KY(o, f, c.x, c.y);
            if (c = d._$b(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(v, [c]);
                l[1] && (c._lp = new GH(NH, l[1].slice(2))), c[Rf] = 3
            } else c = {x: i + e, y: n + s - r}, c._lpNO = 2
        }
        return [u, c]
    }

    function Un(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (o - a >= i + h) c = {y: n + s, x: o - a}, c._lpNO = 4; else {
            c = {y: n + s - r, x: Math.max(i, o - a)};
            var _ = [i + h, n + s, i, n + s, i, n + s - r], d = new KY(o, f, c.x, c.y);
            if (c = d._$b(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(_, [c]);
                l = l[l[rr] - 1], l && (c._lp = new GH(NH, l[or](2))), c[Rf] = 5
            } else c = {y: n + s, x: i + h}, c[Rf] = 4
        }
        if (i + e - h >= o + a) u = {y: n + s, x: o + a}, u._lpNO = 4; else {
            u = {y: n + s - r, x: Math.min(i + e, o + a)};
            var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = new KY(o, f, u.x, u.y);
            if (u = d._$b(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(v, [u]);
                l[0] && (u._lp = new GH(NH, l[0].slice(2))), u[Rf] = 3
            } else u = {y: n + s, x: i + e - h}, u[Rf] = 4
        }
        return [u, c]
    }

    function Wn(t, i, n, e, s, h, r, a, o, f) {
        var u, c;
        if (f - a >= n + r) c = {x: i, y: f - a}, c._lpNO = 6; else {
            c = {x: i + h, y: Math.max(n, f - a)};
            var _ = [i, n + r, i, n, i + h, n], d = new KY(o, f, c.x, c.y);
            if (c = d._$b(_)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Xn(_, [c]);
                l = l[l[rr] - 1], l && (c._lp = new GH(NH, l[or](2)))
            } else c = {x: i, y: n + r};
            c._lpNO = 7
        }
        if (n + s - r >= f + a) u = {x: i, y: f + a}, u[Rf] = 6; else {
            u = {x: i + h, y: Math.min(n + s, f + a)};
            var v = [i + h, n + s, i, n + s, i, n + s - r], d = new KY(o, f, u.x, u.y);
            if (u = d._$b(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Xn(v, [u]);
                l[0] && (u._lp = new GH(NH, l[0].slice(2))), u._lpNO = 5
            } else u = {x: i, y: n + s - r}, u[Rf] = 6
        }
        return [u, c]
    }

    function Vn(t, i, n, e, s, h, r, a, o, f, u) {
        var c = a / 2;
        switch (h = h || 1e-4, r = r || 1e-4, t) {
            case 7:
                var _ = [i, n + r, i, n, i + h, n], d = i + h, l = n + r;
                return Yn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 5:
                return _ = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Yn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 3:
                return _ = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Yn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 1:
                return _ = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Yn(t, _, d, l, i, n, e, s, h, r, a, o, f, u);
            case 0:
                return qn(t, i, n, e, s, h, r, c, o, f, u);
            case 2:
                return Hn(t, i, n, e, s, h, r, c, o, f, u);
            case 4:
                return Un(t, i, n, e, s, h, r, c, o, f, u);
            case 6:
                return Wn(t, i, n, e, s, h, r, c, o, f, u)
        }
    }

    function Xn(t, i) {
        for (var e, s, h, r, a, o, f = t[0], u = t[1], c = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (_ - u) * o, h = c + (d - c) * o, r = _ + (l - _) * o, v.push([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = h, _ = r) : v[lr](null);
        return h !== n && v[lr]([a.x, a.y, h, r, d, l]), v
    }

    function Zn(t) {
        return this[$f] && this[Ff] && (t.x -= this[Ff].x, t.y -= this[Ff].y), this[Gf] && Ai(t, this[Gf]), t.x += this[zf] || 0, t.y += this[Yf] || 0, this[qf] && this[Hf] ? Ai(t, this[Hf]) : t
    }

    function Kn(t) {
        return this.$rotatable && this[Hf] && Ai(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this.$offsetY || 0, this[Gf] && Ai(t, -this[Gf]), this.$layoutByAnchorPoint && this._n2x && (t.x += this[Ff].x, t.y += this[Ff].y), t
    }

    function Jn() {
        var t = this.$invalidateSize;
        this[Uf] && (this[Uf] = !1, this.$invalidateAnchorPoint = !0, this._7v.setByRect(this._jd), this.$padding && this._7v.grow(this.$padding), this[Wf] && this._7v[Vf](this.$border));
        var i = this._$s();
        if (i) var n = this.showPointer && this[Xf];
        return this.$invalidateAnchorPoint && this[$f] && (this[Zf] = !1, n && (t = !0), this[Ff] = ci(this[Kf], this._7v[ca], this._7v.height), this._n2x.x += this._7v.x, this._n2x.y += this._7v.y), i ? (t && (this[Jf] = !0, Qn.call(this, n)), this[Jf] && (this[Jf] = !1, this[Qf] = this.backgroundGradient && this._m5Shape && this[tu][Ao] ? MH[yr].generatorGradient[hr](this.backgroundGradient, this[tu][Ao]) : null), t) : (this[iu] = !1, t)
    }

    function Qn(t) {
        var i = this._7v.x + this[Wf] / 2, n = this._7v.y + this[Wf] / 2, e = this._7v.width - this[Wf],
            s = this._7v[_a] - this.$border, h = 0, r = 0;
        if (this[nu] && (R(this[nu]) ? h = r = this[nu] : (h = this.$borderRadius.x || 0, r = this.$borderRadius.y || 0), h = Math.min(h, e / 2), r = Math.min(r, s / 2)), t && (this._pointerX = this[Ff].x - this[zf] + this[eu], this[su] = this[Ff].y - this[Yf] + this[hu], !this._7v[ru](this[au], this[su]))) {
            var a = new HH(i, n, e, s, h, r, this.$pointerWidth, this[au], this[su]);
            return this[tu] = a._lp, this[tu][Ao].set(i, n, e, s), void (this[iu] = !0)
        }
        this._m5Shape && this[tu][to](), this._m5Shape = lW[ou](i, n, e, s, h, r, this._m5Shape), this[tu][Ao].set(i, n, e, s)
    }

    function te(t, i, n, e) {
        return e && (t[ca] < 0 || t[_a] < 0) ? (t.x = i, t.y = n, void (t.width = t[_a] = 0)) : (i < t.x ? (t[ca] += t.x - i, t.x = i) : i > t.x + t[ca] && (t.width = i - t.x), void (n < t.y ? (t[_a] += t.y - n, t.y = n) : n > t.y + t[_a] && (t[_a] = n - t.y)))
    }

    function ie(t, i, e) {
        var s, h = t[fu], r = t.layoutByPath === n ? this[uu] : t[uu];
        return this.$data instanceof YH && r ? (s = dH._n63(h, this.$data, this[Zo], i, e), s.x *= this._jf, s.y *= this._jh) : (s = ci(h, this._7v.width, this._7v[_a]), s.x += this._7v.x, s.y += this._7v.y), Zn.call(this, s)
    }

    function ne(t, i) {
        if (i) if (i._7v.isEmpty()) t.$x = i.$x, t.$y = i.$y; else {
            var n = ie[hr](i, t);
            t.$x = n.x, t.$y = n.y, t._hostRotate = n[Fo]
        } else t.$x = 0, t.$y = 0;
        t[cu] && VH[hr](t)
    }

    function ee(t) {
        if (t.lineDash === n) {
            var i, e;
            if (t[_u]) i = t.getLineDash, e = t[_u]; else {
                var s;
                if (t.mozDash !== n) s = du; else {
                    if (t[lu] === n) return !1;
                    s = lu
                }
                e = function (t) {
                    this[s] = t
                }, i = function () {
                    return this[s]
                }
            }
            Z(t, vu, {
                get: function () {
                    return i[hr](this)
                }, set: function (t) {
                    e[hr](this, t)
                }
            })
        }
        if (t[bu] === n) {
            var h;
            if (t[yu] !== n) h = yu; else {
                if (t.webkitLineDashOffset === n) return;
                h = gu
            }
            Z(t, bu, {
                get: function () {
                    return this[h]
                }, set: function (t) {
                    this[h] = t
                }
            })
        }
    }

    function se(t, i, n, e, s) {
        var h, r, a, o, f, u, c, _, d = function (t) {
            return function (i) {
                t(i)
            }
        }, l = function () {
            r = null, a = null, o = f, f = null, u = null
        }, v = function (t) {
            h = t, c || (c = Ri()), c[ca] = h[ca], c[_a] = h.height, i[ca] = h.width, i[_a] = h.height
        }, b = function (t) {
            y(), l(), r = t.transparencyGiven ? t[pu] : null, a = 10 * t[mu], f = t[xu]
        }, y = function () {
            if (u) {
                var t = u[ko](0, 0, h[ca], h.height), n = {data: t, _pixels: jn(t[Vo], h[ca], h.height), delay: a};
                s[hr](i, n)
            }
        }, g = function (t) {
            u || (u = c[oo](fo));
            var i = t.lctFlag ? t.lct : h.gct, n = u[ko](t[Eu], t[wu], t[ca], t[_a]);
            t[Tu].forEach(function (t, e) {
                r !== t ? (n[Vo][4 * e + 0] = i[t][0], n.data[4 * e + 1] = i[t][1], n.data[4 * e + 2] = i[t][2], n[Vo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n[Vo][4 * e + 3] = 0)
            }), u[Cf](n, t[Eu], t[wu])
        }, p = function () {
        }, m = {
            hdr: d(v), gce: d(b), com: d(p), app: {NETSCAPE: d(p)}, img: d(g, !0), eof: function () {
                y(), n.call(i)
            }
        }, x = new XMLHttpRequest;
        AY || x[ku]("text/plain; charset=x-user-defined"), x[Mu] = function () {
            _ = new QH(x[qa]);
            try {
                iU(_, m)
            } catch (t) {
                e[hr](i, Ua)
            }
        }, x[Ou] = function () {
            e[hr](i, Su)
        }, x.open(Za, t, !0), x[Iu]()
    }

    function he(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i.forEach(function (n, e) {
            i[e] = t(n)
        }), i.join("")
    }

    function re(t, i) {
        try {
            if (null == t || t[rr] < 8) return;
            if (null == i || i[rr] <= 0) return;
            for (var n = "", e = 0; e < i[rr]; e++) n += i[Pu](e).toString();
            var s = Math[qr](n[rr] / 5),
                h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n[Au](4 * s) + n.charAt(5 * s), 10),
                r = Math[Lf](i[rr] / 2), a = Math.pow(2, 31) - 1, o = parseInt(t[df](t[rr] - 8, t[rr]), 16);
            for (t = t[df](0, t[rr] - 8), n += o; n[rr] > 10;) n = (parseInt(n.substring(0, 10), 10) + parseInt(n[df](10, n.length), 10)).toString();
            n = (h * n + r) % a;
            for (var f = "", u = "", e = 0; e < t[rr]; e += 2) f = parseInt(parseInt(t[df](e, e + 2), 16) ^ Math[qr](n / a * 255), 10), u += String[Cu](f), n = (h * n + r) % a;
            return 0 | u[0] ? CU = aU[Lu + uU + Du](u) : null
        } catch (c) {
        }
    }

    function ae() {
        var t = eU;
        if (!t) return void (BU = !0);
        AU = t;
        var i;
        t = t[Lr](Wr);
        for (var n = 0; n < t[rr] && (i = re(t[n], hU), !(i && i.split(xo)[rr] >= 8));) 1 == t[rr] && (i = re(t[n], ju)), n++;
        if (!i || i[Lr](xo)[rr] < 8) return jU = !0, "" === hU || hU == Ru + lU + Nu + vU + kf || hU == Bu + dU + $u ? (RU = GU, BU = !1, void (PU = !1)) : (RU = GU, void (BU = !0));
        PU = i.split(xo);
        var e = PU[3];
        if (e != zV) return void (jU = !0);
        BU = !1;
        var s = PU[0];
        s > 1 && (jU = !1);
        var h = PU[5];
        NU = h;
        var r = PU[6];
        RU = r
    }

    function oe() {
        var t = AU;
        if (t) {
            var i;
            t = t[Lr](Wr);
            for (var n = 0; n < t[rr] && (i = zU(t[n], hU), !(i && i[Lr](xo).length >= 8));) 1 == t.length && (i = zU(t[n], ju)), n++;
            if (i.split(xo)[rr] >= 8) return void ($U = !1)
        }
        return hU && hU != Ru + lU + Nu + vU + kf && hU != Bu + dU + $u ? void ($U = !0) : void ($U = !1)
    }

    function fe() {
        if (jU) {
            var t = mh[mU + $o]._jn, i = DU;
            mh[mU + $o]._jn = function () {
                t[mr](this, arguments), i[hr](this[Fu], this.g)
            };
            var n = nW[mU + $o]._h4;
            nW[mU + $o]._h4 = function (t) {
                n.apply(this, arguments), i[hr](this, t)
            }
        }
    }

    function ue() {
        if (NU !== !0 && NU) {
            var t = NU[Lr](ta);
            if (3 != t[rr]) return void (bW.prototype._jn = null);
            var i = parseInt(t[0], 10), n = parseInt(t[1], 10), e = parseInt(t[2], 10), s = 3,
                h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            sU > h && (bW[yr]._jn = null)
        }
    }

    function ce() {
        var t = 0 | RU;
        if (t) {
            var i = wq[yr]._kj;
            wq[mU + $o]._kj = function () {
                return this._jr[rr] > t ? !1 : i[mr](this, arguments)
            }
        }
    }

    function _e() {
        BU && (UY[mU + $o]._kj = UY[mU + $o]._fg)
    }

    function de() {
        if ($U) {
            var t = DU, i = nW[mU + $o]._h4;
            nW[mU + $o]._h4 = function (n) {
                i.apply(this, arguments), t.call(this, n)
            }
        }
    }

    function le() {
        if (FU) {
            var t = mh[mU + $o]._jn, i = DU;
            mh[mU + $o]._jn = function () {
                t[mr](this, arguments), i[hr](this._n6aseCanvas, this.g)
            }
        }
    }

    function ve() {
        PU === n && (nW[mU + $o]._j4 = QY[Gu])
    }

    function be(t) {
        var i = Ri(!0);
        return ee(i.g), i[zu] = function () {
            return !1
        }, t.appendChild(i), i[Yu] = WU, i
    }

    function d(t, i) {
        function n(t, n) {
            for (var e = t.length, s = n[rr], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return r
        }

        function e(t) {
            var i = t.length, s = Math[cr](i / 2);
            return 1 >= i ? t : n(e(t.slice(0, s)), e(t[or](s)))
        }

        return e(t)
    }

    function ye(t) {
        t.width = t[ca]
    }

    function ge(t) {
        QU || (QU = "imageSmoothingEnabled" in CanvasRenderingContext2D[yr] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D[yr] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[QU] = !1
    }

    function pe(t, i, n, e, s) {
        e = V(i + e) - (i = W(i)), s = V(n + s) - (n = W(n)), t[jf](i, n, e, s), t[sf](i, n, e, s)
    }

    function W(t) {
        return Math[qr](t)
    }

    function V(t) {
        return Math.ceil(t)
    }

    function me(t) {
        var i = [];
        return t[qu](function (t) {
            i.push(-t)
        }), i
    }

    function xe(t) {
        return t %= sW, 0 > t && (t += sW), t
    }

    function Ee(t, i, n, e, s, h, r, a) {
        var o = ((t * e - i * n) * (s - r) - (t - n) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r)),
            f = ((t * e - i * n) * (h - a) - (i - e) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1
        } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1
        } else if (!(f >= i && e >= f)) return !1;
        if (s >= r) {
            if (!(o >= r && s >= o)) return !1
        } else if (!(o >= s && r >= o)) return !1;
        if (h >= a) {
            if (!(f >= a && h >= f)) return !1
        } else if (!(f >= h && a >= f)) return !1;
        return !0
    }

    function we(t, i) {
        for (var n = 0, e = t.length; e > n;) {
            for (var s = t[n], h = t[(n + 1) % e], r = 0; 4 > r;) {
                var a = i[r], o = i[(r + 1) % e];
                if (Ee(s[0], s[1], h[0], h[1], a[0], a[1], o[0], o[1])) return !0;
                r++
            }
            n++
        }
        return !1
    }

    function Te(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }

    function ke(t) {
        return t[Hu] ? (t = t.parent, t._dh ? t._dh : t instanceof vW && t._fn === !1 ? t : null) : null
    }

    function Me(t, i, n) {
        if (n = n || i[Uu], n == t) return !1;
        var e = t[Wu](n);
        return e || (e = new AV(t, n), t[Vu][n.id] = e), e._hq(i, t)
    }

    function Oe(t, i, n) {
        if (n = n || i.toAgent, n == t) return !1;
        var e = t[Wu](n);
        return e ? e[Xu](i, t) : void 0
    }

    function Se(t, i, e) {
        return e === n && (e = i[Uu]), e != t ? (t._7n || (t._7n = new UY), t._7n.add(i) === !1 ? !1 : void t._8z++) : void 0
    }

    function Ie(t, i, n) {
        return t._7n && t._7n[_r](i) !== !1 ? (t._8z--, void Oe(t, i, n)) : !1
    }

    function Pe(t, i) {
        return i[Zu] != t ? (t._98 || (t._98 = new UY), t._98.add(i) === !1 ? !1 : void t[Ku]++) : void 0
    }

    function Ae(t, i) {
        return t._98 && t._98[_r](i) !== !1 ? (t[Ku]--, void Oe(i[Zu], i, t)) : !1
    }

    function Ce(t, i) {
        if (i === n && (i = t instanceof cW), i) {
            if (t[Ju]()) return null;
            var e = Ce(t.from, !1);
            if (t[Qu]()) return e;
            for (var s = Ce(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[tc](s)) return s;
                if (s[tc](e)) return e;
                e = Ce(e, !1), s = Ce(s, !1)
            }
            return null
        }
        for (var h = t[Hu]; null != h;) {
            if (h._i4()) return h;
            h = h.parent
        }
        return null
    }

    function Le(t, i, n) {
        t._i4() && t.hasChildren() && t.children[qu](function (t) {
            t instanceof _W && i.add(t) && Le(t, i, n)
        }, this), t[ic]() && t._dc.forEach(function (t) {
            (null == n || n[nc](t)) && i.add(t) && Le(t, i, n)
        })
    }

    function De(t, i) {
        i.parent ? i[Hu][ec](i, i[Hu][sc] - 1) : t.roots[hc](i, t.roots[rr] - 1)
    }

    function je(t, i) {
        i[Hu] ? i[Hu][ec](i, 0) : t[rc].setIndex(i, 0)
    }

    function Re(t, i) {
        if (i instanceof cW) return void (i[Ju]() || Be(t, i));
        for (De(t, i); i = i[Hu];) De(t, i)
    }

    function Ne(t, i) {
        if (i instanceof cW) return void (i[Ju]() || $e(t, i));
        for (je(t, i); i = i.parent;) je(t, i)
    }

    function Be(t, i) {
        var n = i.fromAgent;
        if (i[Qu]()) De(t, n); else {
            var e = i[Uu];
            De(t, n), De(t, e)
        }
    }

    function $e(t, i) {
        var n = i[Zu];
        if (i.isLooped()) je(t, n); else {
            var e = i[Uu];
            je(t, n), je(t, e)
        }
    }

    function Fe(t, i) {
        return t._8z++, t._f7 ? (i._i8 = t._i0, t._i0._i6 = i, void (t._i0 = i)) : (t._f7 = i, void (t._i0 = i))
    }

    function Ge(t, i) {
        t._8z--, t._i0 == i && (t._i0 = i._i8), i._i8 ? i._i8._i6 = i._i6 : t._f7 = i._i6, i._i6 && (i._i6._i8 = i._i8), i._i8 = null, i._i6 = null, Oe(t, i, i.$to)
    }

    function ze(t, i) {
        return t._n6n++, t._hz ? (i._jj = t._j9, t._j9._je = i, void (t._j9 = i)) : (t._hz = i, void (t._j9 = i))
    }

    function Ye(t, i) {
        t._n6n--, t._j9 == i && (t._j9 = i._jj), i._jj ? i._jj._je = i._je : t._hz = i._je, i._je && (i._je._jj = i._jj), i._jj = null, i._je = null
    }

    function qe(t, i) {
        return i = i || new UY, t[ac](function (t) {
            i.add({id: t.id, edge: t, fromAgent: t[oc]._dh, toAgent: t.$to._dh})
        }), t[fc](function (t) {
            t instanceof _W && qe(t, i)
        }), i
    }

    function He(t, i, n) {
        return We(t, i, n) === !1 ? !1 : Ue(t, i, n)
    }

    function Ue(t, i, n) {
        if (t._f7) for (var e = t._f7; e;) {
            if (i[hr](n, e) === !1) return !1;
            e = e._i6
        }
    }

    function We(t, i, n) {
        if (t._hz) for (var e = t._hz; e;) {
            if (i[hr](n, e) === !1) return !1;
            e = e._je
        }
    }

    function Ve(t, i, e, s, h, r, a) {
        return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math.min(r, s / 2), a = Math.min(a, h / 2), t.moveTo(i + r, e), t[af](i + s - r, e), t[uc](i + s, e, i + s, e + a), t[af](i + s, e + h - a), t[uc](i + s, e + h, i + s - r, e + h), t[af](i + r, e + h), t.quadTo(i, e + h, i, e + h - a), t[af](i, e + a), t[uc](i, e, i + r, e), t.closePath(), t) : (t[rf](i, e), t[af](i + s, e), t.lineTo(i + s, e + h), t[af](i, e + h), t[Nf](), t)
    }

    function Xe(t, i) {
        var n = i.r || 1, e = i.cx || 0, s = i.cy || 0, h = n * Math.tan(Math.PI / 8), r = n * Math.sin(Math.PI / 4);
        t.moveTo(e + n, s), t[uc](e + n, s + h, e + r, s + r), t[uc](e + h, s + n, e, s + n), t[uc](e - h, s + n, e - r, s + r), t[uc](e - n, s + h, e - n, s), t[uc](e - n, s - h, e - r, s - r), t[uc](e - h, s - n, e, s - n), t[uc](e + h, s - n, e + r, s - r), t.quadTo(e + n, s - h, e + n, s)
    }

    function Ze(t, i, n, e, s) {
        i instanceof rn && (e = i[ca], s = i[_a], n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848, r = e / 2 * h, a = s / 2 * h, o = i + e, f = n + s, u = i + e / 2, c = n + s / 2;
        return t[rf](i, c), t[cc](i, c - a, u - r, n, u, n), t[cc](u + r, n, o, c - a, o, c), t[cc](o, c + a, u + r, f, u, f), t[cc](u - r, f, i, c + a, i, c), t
    }

    function Ke(t, i, n, e, s) {
        var h = 2 * e, r = 2 * s, a = i + e / 2, o = n + s / 2;
        return t[rf](a - h / 4, o - r / 12), t[af](i + .306 * e, n + .579 * s), t.lineTo(a - h / 6, o + r / 4), t[af](i + e / 2, n + .733 * s), t.lineTo(a + h / 6, o + r / 4), t[af](i + .693 * e, n + .579 * s), t[af](a + h / 4, o - r / 12), t[af](i + .611 * e, n + .332 * s), t[af](a + 0, o - r / 4), t[af](i + .388 * e, n + .332 * s), t.closePath(), t
    }

    function Je(t, i, n, e, s) {
        return t.moveTo(i, n), t[af](i + e, n + s / 2), t[af](i, n + s), t[Nf](), t
    }

    function Qe(t, i, n, e, s) {
        return t[rf](i, n + s / 2), t.lineTo(i + e / 2, n), t.lineTo(i + e, n + s / 2), t.lineTo(i + e / 2, n + s), t[Nf](), t
    }

    function ts(t, i, n, e, s, h) {
        return t[rf](i, n), t.lineTo(i + e, n + s / 2), t[af](i, n + s), h || (t.lineTo(i + .25 * e, n + s / 2), t[Nf]()), t
    }

    function is(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var h, r, a = 0, o = 2 * Math.PI / t, f = new YH; t > a;) h = i + e * Math.cos(s), r = n + e * Math.sin(s), a ? f[af](h, r) : f[rf](h, r), ++a, s += o;
        return f[Nf](), f
    }

    function ns() {
        var t = new YH;
        return t[rf](75, 40), t[cc](75, 37, 70, 25, 50, 25), t[cc](20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t[cc](110, 102, 130, 80, 130, 62.5), t[cc](130, 62.5, 130, 25, 100, 25), t[cc](85, 25, 75, 37, 75, 40), t
    }

    function es() {
        var t = new YH;
        return t[rf](20, 0), t[af](80, 0), t.lineTo(100, 100), t[af](0, 100), t.closePath(), t
    }

    function ss() {
        var t = new YH;
        return t[rf](100, 0), t.lineTo(100, 80), t.lineTo(0, 100), t[af](0, 20), t[Nf](), t
    }

    function hs() {
        var t = new YH;
        return t[rf](20, 0), t.lineTo(100, 0), t[af](80, 100), t[af](0, 100), t.closePath(), t
    }

    function rs() {
        var t = new YH;
        return t[rf](43, 23), t[af](28, 10), t[af](37, 2), t[af](63, 31), t[af](37, 59), t[af](28, 52), t[af](44, 38), t.lineTo(3, 38), t[af](3, 23), t.closePath(), t
    }

    function as() {
        var t = new YH;
        return t[rf](1, 8), t[af](7, 2), t[af](32, 26), t.lineTo(7, 50), t[af](1, 44), t[af](18, 26), t.closePath(), t[rf](27, 8), t[af](33, 2), t[af](57, 26), t.lineTo(33, 50), t[af](27, 44), t[af](44, 26), t[Nf](), t
    }

    function os() {
        var t = new YH;
        return t[rf](0, 15), t[af](23, 15), t.lineTo(23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t.lineTo(23, 29), t[af](0, 29), t.closePath(), t
    }

    function fs() {
        var t = new YH;
        return t.moveTo(0, 21), t.lineTo(30, 21), t.lineTo(19, 0), t[af](25, 0), t[af](47, 25), t[af](25, 48), t[af](19, 48), t[af](30, 28), t[af](0, 28), t[Nf](), t
    }

    function us() {
        var t = new YH;
        return t[rf](0, 0), t[af](34, 24), t[af](0, 48), t.lineTo(14, 24), t[Nf](), t
    }

    function cs() {
        var t = new YH;
        return t[rf](20, 0), t[af](34, 14), t[af](20, 28), t.lineTo(22, 18), t[af](1, 25), t[af](10, 14), t[af](1, 3), t[af](22, 10), t[Nf](), t
    }

    function _s() {
        var t = new YH;
        return t.moveTo(4, 18), t.lineTo(45, 18), t.lineTo(37, 4), t.lineTo(83, 25), t[af](37, 46), t[af](45, 32), t.lineTo(4, 32), t[Nf](), t
    }

    function ds() {
        var t = new YH;
        return t.moveTo(17, 11), t.lineTo(27, 11), t.lineTo(42, 27), t[af](27, 42), t[af](17, 42), t.lineTo(28, 30), t[af](4, 30), t[af](4, 23), t[af](28, 23), t.closePath(), t
    }

    function ls() {
        lW[_c](rH[dc], Ze(new YH, 0, 0, 100, 100)), lW[_c](rH[lc], Ve(new YH, 0, 0, 100, 100)), lW.register(rH[vc], Ve(new YH, 0, 0, 100, 100, 20, 20)), lW[_c](rH.SHAPE_STAR, Ke(new YH, 0, 0, 100, 100)), lW.register(rH[bc], Je(new YH, 0, 0, 100, 100)), lW.register(rH[yc], is(5)), lW[_c](rH[gc], is(6)), lW[_c](rH[pc], Qe(new YH, 0, 0, 100, 100)), lW[_c](rH.SHAPE_HEART, ns()), lW.register(rH[mc], es()), lW[_c](rH.SHAPE_RHOMBUS, ss()), lW[_c](rH[xc], hs());
        var t = new YH;
        t[rf](20, 0), t[af](40, 0), t[af](40, 20), t[af](60, 20), t[af](60, 40), t[af](40, 40), t[af](40, 60), t.lineTo(20, 60), t[af](20, 40), t[af](0, 40), t[af](0, 20), t[af](20, 20), t[Nf](), lW.register(rH[Ec], t), lW[_c](rH[wc], ts(new YH, 0, 0, 100, 100)), lW.register(rH[Tc], rs()), lW[_c](rH[kc], as()), lW.register(rH[Mc], os()), lW.register(rH[Oc], fs()), lW.register(rH[Sc], us()), lW[_c](rH[Ic], cs()), lW.register(rH[Pc], _s()), lW.register(rH[Ac], ds()), lW[_c](rH[Cc], ts(new YH, 0, 0, 100, 100, !0))
    }

    function vs() {
        w(this, vs, arguments), this.busLayout = !0
    }

    function bs() {
        w(this, bs), this._$n = new yq
    }

    function ys() {
        if (this._fn === !0) {
            var t = this._7n, i = this._98;
            if (t) for (t = t._jr; t.length;) {
                var n = t[0];
                Ie(this, n, n.toAgent)
            }
            if (i) for (i = i._jr; i.length;) {
                var n = i[0];
                Ae(this, n, n[Zu])
            }
            return void this[fc](function (t) {
                t._i4() && ys[hr](t)
            })
        }
        var e = qe(this);
        e[qu](function (t) {
            t = t[Lc];
            var i = t[oc], n = t.$to, e = i.isDescendantOf(this), s = n[tc](this);
            e && !s ? (Se(this, t), Me(this, t)) : s && !e && (Pe(this, t), Me(t[Zu], t, this))
        }, this)
    }

    function gs() {
        w(this, gs, arguments), this.$image = null
    }

    function ps(t, i, n, e) {
        return t[i] = n, e ? {
            get: function () {
                return this[i]
            }, set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this[Dc], this._1d = !0;
                    for (var n = e[rr]; --n >= 0;) this[e[n]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            }, set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function ms(t, i) {
        var n = {}, e = {};
        for (var s in i) {
            var h = i[s];
            h[jc] && h[jc].forEach(function (t, i, n) {
                n[i] = Rc + t, e[t] = !0
            }), n[s] = ps(t, Tr + s, h[Or], h[jc])
        }
        for (var r in e) t[Rc + r] = !0;
        Object[Nc](t, n)
    }

    function xs(t, i, n, e) {
        if (Array[Br](i)) for (var s = i.length; --s >= 0;) xs(t, i[s], n, e); else {
            var h = i.target;
            if (h) {
                if (h instanceof bW || (h = t[h]), !h) return
            } else h = t;
            if (e || (e = t[Bc](i[$c], n)), i[Fc] && (h[i.bindingProperty] = e), i[Gc]) {
                var r = i[Gc];
                r instanceof Function || (r = t[r]), r instanceof Function && r[hr](t, e, h)
            }
        }
    }

    function Es() {
        yW.forEach(function (t) {
            this[t] = {}
        }, this)
    }

    function ws(t, i, n, e) {
        return e == rH.PROPERTY_TYPE_ACCESSOR ? void (t[n] = i) : e == rH[zc] ? void t.set(n, i) : e == rH[Yc] ? void t[qc](n, i) : !1
    }

    function Ts() {
        w(this, Ts, arguments)
    }

    function ks() {
        w(this, ks, arguments)
    }

    function Ms(t, i, n, e, s, h) {
        var r = Os(t, i, n, e), a = [];
        return As(t) ? Ss(r, i, n, a, e.getStyle(gW[Hc]), s, h) : Gs(t, i, n, a, r, e, s, h), a
    }

    function Os(t, i, n) {
        if (null != t) {
            if (t == rH.EDGE_TYPE_ELBOW_HORIZONTAL || t == rH[Uc] || t == rH[Wc] || t == rH[Vc] || t == rH[Xc]) return !0;
            if (t == rH[Zc] || t == rH[Kc] || t == rH.EDGE_TYPE_VERTICAL_HORIZONTAL || t == rH[Jc] || t == rH[Qc]) return !1
        }
        var e = Ds(i, n), s = js(i, n);
        return e >= s
    }

    function Ss(t, i, n, e, s, h, r) {
        t ? Us(i, n, e, s, h, r) : Ws(i, n, e, s, h, r)
    }

    function Is(t, i) {
        return i[t_](gW.EDGE_SPLIT_BY_PERCENT)
    }

    function Ps(t) {
        return null != t && (t == rH.EDGE_TYPE_EXTEND_TOP || t == rH[Vc] || t == rH[Qc] || t == rH.EDGE_TYPE_EXTEND_RIGHT)
    }

    function As(t) {
        return t && (t == rH[i_] || t == rH[n_] || t == rH[Zc])
    }

    function Cs(t, i, n, e, s, h, r) {
        if (t == rH.EDGE_TYPE_HORIZONTAL_VERTICAL) return {x: r.x, y: h.y};
        if (t == rH.EDGE_TYPE_VERTICAL_HORIZONTAL) return {x: h.x, y: r.y};
        var a;
        if (Ps(t)) {
            var o = Math.min(n.y, e.y), f = Math.min(n.x, e.x), u = Math.max(n.bottom, e[oa]),
                c = Math.max(n[aa], e[aa]);
            if (a = s.getStyle(gW.EDGE_EXTEND), t == rH[Jc]) return new XY((f + c) / 2, o - a);
            if (t == rH[Vc]) return new XY(f - a, (o + u) / 2);
            if (t == rH[Qc]) return new XY((f + c) / 2, u + a);
            if (t == rH.EDGE_TYPE_EXTEND_RIGHT) return new XY(c + a, (o + u) / 2)
        }
        var _ = Is(t, s);
        if (a = _ ? Rs(t, i, n, e, s[t_](gW[e_])) : s[t_](gW[s_]), a == Number[h_] || a == Number[r_]) return new XY(e.x + e.width / 2, e.y + e.height / 2);
        if (0 == a) return new XY(n.x + n[ca] / 2, n.y + n[_a] / 2);
        if (i) {
            var d = n.x + n[aa] < e.x + e[aa];
            return new XY($s(d, a, n.x, n.width), n.y + n[_a] / 2)
        }
        var l = n.y + n[oa] < e.y + e[oa];
        return new XY(n.x + n.width / 2, $s(l, a, n.y, n[_a]))
    }

    function Ls(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }

    function Ds(t, i) {
        var n = Math.max(t.x + (t.width || 0), i.x + (i[ca] || 0)) - Math.min(t.x, i.x);
        return n - (t[ca] || 0) - (i.width || 0)
    }

    function js(t, i) {
        var n = Math.max(t.y + (t[_a] || 0), i.y + (i[_a] || 0)) - Math.min(t.y, i.y);
        return n - (t[_a] || 0) - (i[_a] || 0)
    }

    function Rs(t, i, n, e, s) {
        var h = Ns(s, i, n, e, null);
        return h * s
    }

    function Ns(t, i, n, e) {
        return i ? Bs(t, n.x, n[aa], e.x, e[aa]) : Bs(t, n.y, n[oa], e.y, e.bottom)
    }

    function Bs(t, i, n, e, s) {
        var h = Ls(i, n, e, s), r = e + s > i + n;
        if (h > 0) {
            if (1 == t) return h + (s - e) / 2;
            if (t >= 0 && 1 > t) return h;
            if (0 > t) return r ? e - i : n - s
        }
        return Math.abs(r && t > 0 || !r && 0 > t ? n - s : i - e)
    }

    function $s(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }

    function Fs(t, i) {
        var n = t[rr];
        if (!(3 > n)) {
            var e = i[t_](gW[a_]);
            if (e != rH[o_]) {
                var s = i.getStyle(gW[f_]), h = 0, r = 0;
                s && (R(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
                for (var a, o, f, u, c = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l], b = _.x - c.x, y = _.y - c.y, m = v.x - _.x, x = v.y - _.y,
                        E = !b || b > -_H && _H > b, w = !y || y > -_H && _H > y, T = !m || m > -_H && _H > m,
                        k = !x || x > -_H && _H > x, M = w;
                    (E && k || w && T) && (M ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, h), o = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, r), f = new XY(_.x - (b > 0 ? a : -a), _.y), u = new XY(_.x, _.y + (x > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(m) : Math.abs(m) / 2, h), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, r), f = new XY(_.x, _.y - (y > 0 ? o : -o)), u = new XY(_.x + (m > 0 ? a : -a), _.y)), p(t, _), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == rH[u_] ? (g(t, u, l), l++, n++) : e == rH[c_] && (g(t, [_, u], l), l++, n++)), c = _, _ = v
                }
                null != d && u.x == _.x && u.y == _.y && p(t, _)
            }
        }
    }

    function Gs(t, i, n, e, s, h, r, a) {
        var o = h[t_](gW[__]), f = null == o;
        if (null != o) {
            var u = (new QY)[d_](i)[d_](n);
            u.intersects(o) || (s = zs(o.x, o.y, u.y, u.x, u.bottom, u[aa]))
        } else o = Cs(t, s, i, n, h, r, a);
        s ? Hs(i, n, o, e, f, r, a) : qs(i, n, o, e, f, r, a)
    }

    function zs(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
    }

    function Ys(t, i, n) {
        return i >= t.x && i <= t.right && n >= t.y && n <= t.bottom
    }

    function qs(t, i, n, e, s, h, r) {
        var a = Math.max(t.y, i.y), o = Math.min(t.y + t.height, i.y + i[_a]), f = null != n ? n.y : o + (a - o) / 2,
            u = h ? h.x : t.x + t[ca] / 2, c = r ? r.x : i.x + i[ca] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[ca] && (u = n.x), n.x >= i.x && n.x <= i.x + i[ca] && (c = n.x)), Ys(i, u, f) || Ys(t, u, f) || e[lr](new XY(u, f)), Ys(i, c, f) || Ys(t, c, f) || e[lr](new XY(c, f)), 0 == e.length) if (null != n) Ys(i, n.x, f) || Ys(t, n.x, f) || e.push(new XY(n.x, f)); else {
            var _ = Math.max(t.x, i.x), d = Math.min(t.x + t.width, i.x + i[ca]);
            e[lr](new XY(_ + (d - _) / 2, f))
        }
    }

    function Hs(t, i, n, e, s, h, r) {
        var a = Math.max(t.x, i.x), o = Math.min(t.x + t[ca], i.x + i[ca]), f = null != n ? n.x : o + (a - o) / 2,
            u = h ? h.y : t.y + t.height / 2, c = r ? r.y : i.y + i[_a] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[_a] && (u = n.y), n.y >= i.y && n.y <= i.y + i.height && (c = n.y)), Ys(i, f, u) || Ys(t, f, u) || e[lr](new XY(f, u)), Ys(i, f, c) || Ys(t, f, c) || e[lr](new XY(f, c)), 0 == e[rr]) if (null != n) Ys(i, f, n.y) || Ys(t, f, n.y) || e[lr](new XY(f, n.y)); else {
            var _ = Math.max(t.y, i.y), d = Math.min(t.y + t.height, i.y + i[_a]);
            e[lr](new XY(f, _ + (d - _) / 2))
        }
    }

    function Us(t, i, n, e, s, h) {
        var r = i.x + i[ca] < t.x, a = t.x + t[ca] < i.x, o = r ? t.x : t.x + t[ca], f = s.y, u = a ? i.x : i.x + i[ca],
            c = h.y, _ = e, d = r ? -_ : _, l = new XY(o + d, f);
        d = a ? -_ : _;
        var v = new XY(u + d, c);
        if (r == a) {
            var b = r ? Math.min(o, u) - e : Math.max(o, u) + e;
            n.push(new XY(b, f)), n[lr](new XY(b, c))
        } else if (l.x < v.x == r) {
            var y = f + (c - f) / 2;
            n[lr](l), n[lr](new XY(l.x, y)), n[lr](new XY(v.x, y)), n[lr](v)
        } else n.push(l), n[lr](v)
    }

    function Ws(t, i, n, e, s, h) {
        var r = i.y + i[_a] < t.y, a = t.y + t[_a] < i.y, o = s.x, f = r ? t.y : t.y + t[_a], u = h.x,
            c = a ? i.y : i.y + i[_a], _ = e, d = r ? -_ : _, l = new XY(o, f + d);
        d = a ? -_ : _;
        var v = new XY(u, c + d);
        if (r == a) {
            var b = r ? Math.min(f, c) - e : Math.max(f, c) + e;
            n[lr](new XY(o, b)), n[lr](new XY(u, b))
        } else if (l.y < v.y == r) {
            var y = o + (u - o) / 2;
            n[lr](l), n[lr](new XY(y, l.y)), n[lr](new XY(y, v.y)), n[lr](v)
        } else n[lr](l), n[lr](v)
    }

    function Vs(t) {
        return t == rH[l_] || t == rH.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == rH[Wc] || t == rH[Kc] || t == rH.EDGE_TYPE_VERTICAL_HORIZONTAL || t == rH.EDGE_TYPE_EXTEND_TOP || t == rH[Vc] || t == rH.EDGE_TYPE_EXTEND_BOTTOM || t == rH[Xc] || t == rH.EDGE_TYPE_ELBOW || t == rH[n_] || t == rH[Zc]
    }

    function Xs(t, i) {
        var n, e;
        i && i[ca] && i[_a] ? (n = i[ca], e = i[_a]) : n = e = isNaN(i) ? HY.ARROW_SIZE : i;
        var s = lW[v_](t, -n, -e / 2, n, e);
        return s || (s = new YH, s[rf](-n, -e / 2), s[af](0, 0), s.lineTo(-n, e / 2)), s
    }

    function Zs(t, i) {
        var n = Math.sin(i), e = Math.cos(i), s = t.x, h = t.y;
        return t.x = s * e - h * n, t.y = s * n + h * e, t
    }

    function Ks(t, i, n, e, s, h) {
        var r = Math.atan2(e - i, n - t), a = new XY(s, h);
        return a[Fo] = r, Zs(a, r), a.x += t, a.y += i, a
    }

    function Js(t, i, e, s, h, r) {
        i = si(s, i.x, i.y, e.x, e.y), e = si(h, e.x, e.y, i.x, i.y);
        var a = Math.PI / 2 + Math[sa](e.y - i.y, e.x - i.x), o = t * Math.cos(a), f = t * Math.sin(a);
        i.x += o, i.y += f, e.x += o, e.y += f;
        var u = e.x - i.x, c = e.y - i.y;
        if (r == rH[b_]) {
            var _ = [new GH(jH, [i.x, i.y]), new GH(RH, [e.x, e.y])];
            return _[y_] = !1, _
        }
        if (r == rH[g_]) {
            var d = Math[Mo](u * u + c * c), l = 5;
            return d > 2 * l && (a = Math[sa](e.y - i.y, e.x - i.x), u = l * Math.cos(a), c = l * Math.sin(a), i.x += u, i.y += c, e.x -= u, e.y -= c), [new GH(RH, [i.x, i.y]), new GH(RH, [e.x, e.y])]
        }
        return [new GH(BH, [i.x + .25 * u, i.y + .25 * c, i.x + .75 * u, i.y + .75 * c, n, n])]
    }

    function Qs(t, i, e) {
        if (g(t, new GH(jH, [i.x, i.y]), 0), e) {
            if (t[rr] > 1) {
                var s = t[t[rr] - 1];
                if (NH == s[$o] && (s[Mf] || s[Co][2] === n || null === s[Co][2])) return s[Co][2] = e.x, s.points[3] = e.y, void (s.invalidTerminal = !0);
                if (BH == s[$o] && (s.invalidTerminal || s.points[4] === n || null === s[Co][4])) return s[Co][4] = e.x, s[Co][5] = e.y, void (s[Mf] = !0)
            }
            t.push(new GH(RH, [e.x, e.y]))
        }
    }

    function th(t, i, n) {
        var e = i[p_](t[t_](gW[m_]), n), s = t[t_](gW.EDGE_FROM_OFFSET);
        return s && (e.x += s.x || 0, e.y += s.y || 0), e
    }

    function ih(t, i, n) {
        var e = i[p_](t[t_](gW[x_]), n), s = t[t_](gW.EDGE_TO_OFFSET);
        return s && (e.x += s.x || 0, e.y += s.y || 0), e
    }

    function nh(t, i, n, e, s) {
        var h = e == s, r = t[E_].getUI(e), a = h ? r : t[E_].getUI(s);
        if (r && a) {
            var o = i.edgeType, f = t[w_](r), u = h ? f : t[w_](a), c = i[T_]();
            if (h && !c) return t.drawLoopedEdge(t.path, r, o, f);
            var _ = th(t, r, f), d = ih(t, a, u);
            if (!h && !o && !c) {
                var l = e[k_], v = s[k_];
                if (l != v) {
                    var b, y, g, p, m = i[M_];
                    l ? (b = r, y = f, g = a, p = u) : (b = a, y = u, g = r, p = f);
                    var x = oh(y, b, l, g, p, m);
                    if (x && 2 == x[rr]) {
                        var E = x[0], w = x[1];
                        return n[rf](E.x, E.y), w.x == E.x && w.y == E.y && (w.y += .01), n[af](w.x, w.y), void (n._68 = !0)
                    }
                }
            }
            t._3a(i, n, r, a, o, f, u, _, d), (!h && n._fp[y_] !== !1 || c) && eh(t, i, n, r, a, o, f, u, _, d), delete n._fp[y_], n._68 = !0
        }
    }

    function eh(t, i, e, s, h, r, a, o, f, u) {
        var c = t[O_], _ = t[S_];
        if (!c && !_) return void Qs(e._fp, f, u);
        var d = e._fp;
        if (d[rr]) {
            if (c) {
                var l = d[0], v = l.firstPoint;
                sh(s, a, v, f, n, n)
            }
            if (_) {
                var b, y = d[d[rr] - 1], g = y.lastPoint, p = y[Co].length, m = y[Mf] || g.x === n || g.y === n;
                p >= 4 && (m || o[I_](g.x, g.y)) && (m || (u = g), b = !0, g = {
                    x: y[Co][p - 4],
                    y: y[Co][p - 3]
                }, o.contains(g.x, g.y) && (u = g, p >= 6 ? (g = {
                    x: y.points[p - 6],
                    y: y[Co][p - 5]
                }, y[Co] = y.points[or](0, 4), y[$o] = NH) : 1 == d.length ? (g = {
                    x: f.x,
                    y: f.y
                }, y[Co] = y[Co][or](0, 2), y[$o] = RH) : (y = d[d[rr] - 2], g = y[Bo]))), sh(h, o, g, u, n, n), b && (p = y.points[rr], y.points[p - 2] = u.x, y.points[p - 1] = u.y, u = null)
            }
        } else {
            var x = Math[sa](u.y - f.y, u.x - f.x), E = Math.cos(x), w = Math.sin(x);
            c && sh(s, a, u, f, E, w), _ && sh(h, o, f, u, -E, -w)
        }
        Qs(e._fp, f, u)
    }

    function sh(t, i, e, s, h, r) {
        if (h === n) {
            var a = Math[sa](e.y - s.y, e.x - s.x);
            h = Math.cos(a), r = Math.sin(a)
        }
        for (e = {x: e.x, y: e.y}, i[I_](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ;) {
            if (!i[I_](e.x, e.y)) return s;
            if (t[P_](e.x - h, e.y - r, HY[A_])) {
                s.x = e.x - h / 2, s.y = e.y - r / 2;
                break
            }
            e.x -= h, e.y -= r
        }
        return s
    }

    function hh(t, i, n, e, s, h, r, a) {
        if (i[T_]()) return i._8s;
        var o = i[C_];
        if (Vs(o)) {
            var f = Ms(o, n, e, t, r, a);
            if (!f || !f.length) return null;
            g(f, r, 0), f[lr](a), o != rH[i_] && Fs(f, t);
            for (var u = [], c = f[rr], _ = 1; c - 1 > _; _++) {
                var d = f[_];
                u[lr]($(d) ? new GH(NH, [d[0].x, d[0].y, d[1].x, d[1].y]) : new GH(RH, [d.x, d.y]))
            }
            return u
        }
        if (i[L_]) {
            var l = t._27();
            if (!l) return;
            return Js(l, r, a, n, e, t.getStyle(gW[D_]))
        }
    }

    function rh(t, i, n) {
        var e = t[t_](gW.EDGE_LOOPED_EXTAND), s = t._27(), h = e + .2 * s, r = i.x + i[ca] - h, a = i.y,
            o = i.x + i.width, f = i.y + h;
        e += s;
        var u = .707, c = -.707, _ = i.x + i[ca], d = i.y, l = _ + u * e, v = d + c * e, b = {x: r, y: a},
            y = {x: l, y: v}, g = {x: o, y: f}, p = b.x, m = y.x, x = g.x, E = b.y, w = y.y, T = g.y,
            k = ((T - E) * (w * w - E * E + m * m - p * p) + (w - E) * (E * E - T * T + p * p - x * x)) / (2 * (m - p) * (T - E) - 2 * (x - p) * (w - E)),
            M = ((x - p) * (m * m - p * p + w * w - E * E) + (m - p) * (p * p - x * x + E * E - T * T)) / (2 * (w - E) * (x - p) - 2 * (T - E) * (m - p)),
            h = Math[Mo]((p - k) * (p - k) + (E - M) * (E - M)), O = Math[sa](b.y - M, b.x - k),
            S = Math[sa](g.y - M, g.x - k), I = S - O;
        return 0 > I && (I += 2 * Math.PI), ah(k, M, O, I, h, h, !0, n)
    }

    function ah(t, i, n, e, s, h, r, a) {
        var o, f, u, c, _, d, l, v, b, y, g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[cr](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, u = n, _ > 0) {
            d = t + Math.cos(u) * s, l = i + Math.sin(u) * h, moveTo ? a[rf](d, l) : a[af](d, l);
            for (var p = 0; _ > p; p++) u += f, c = u - f / 2, v = t + Math.cos(u) * s, b = i + Math.sin(u) * h, y = t + Math.cos(c) * (s / Math.cos(f / 2)), g = i + Math.sin(c) * (h / Math.cos(f / 2)), a.quadTo(y, g, v, b)
        }
    }

    function oh(t, i, n, e, s, h) {
        var r = s.cx, a = s.cy, o = Math.cos(h), f = Math.sin(h), u = uh(i, t, {x: r, y: a}, -o, -f);
        if (!u) {
            var c = r < t.x, _ = r > t[aa], d = a < t.y, l = a > t.bottom, v = t.cx, b = t.cy, y = c || _, g = d || l;
            h = Math[sa](a - b, r - v), y || g || (h += Math.PI), o = Math.cos(h), f = Math.sin(h), u = uh(i, t, {
                x: r,
                y: a
            }, -o, -f) || {x: v, y: b}
        }
        var p = uh(e, s, {x: u.x, y: u.y}, -u[j_] || o, -u[R_] || f, !1) || {x: r, y: a};
        return n ? [u, p] : [p, u]
    }

    function fh(t, i, n, e, s, h) {
        var r = i < t.x, a = i > t.right, o = n < t.y, f = n > t[oa];
        if (r && e > 0) {
            var u = t.x - i, c = n + u * s / e;
            if (c >= t.y && c <= t.bottom) return {x: t.x, y: c, perX: e, perY: s}
        }
        if (a && 0 > e) {
            var u = t[aa] - i, c = n + u * s / e;
            if (c >= t.y && c <= t[oa]) return {x: t[aa], y: c, perX: e, perY: s}
        }
        if (o && s > 0) {
            var _ = t.y - n, d = i + _ * e / s;
            if (d >= t.x && d <= t[aa]) return {x: d, y: t.y, perX: e, perY: s}
        }
        if (f && 0 > s) {
            var _ = t[oa] - n, d = i + _ * e / s;
            if (d >= t.x && d <= t.right) return {x: d, y: t[oa], perX: e, perY: s}
        }
        return h !== !1 ? fh(t, i, n, -e, -s, !1) : void 0
    }

    function uh(t, i, n, e, s, h) {
        if (!i.contains(n.x, n.y)) {
            if (n = fh(i, n.x, n.y, e, s, h), !n) return;
            return ch(t, i, n, n[j_], n[R_])
        }
        return h === !1 ? ch(t, i, n, e, s) : ch(t, i, {x: n.x, y: n.y, perX: e, perY: s}, e, s) || ch(t, i, n, -e, -s)
    }

    function ch(t, i, n, e, s) {
        for (; ;) {
            if (!i[I_](n.x, n.y)) return;
            if (t.hitTest(n.x + e, n.y + s)) break;
            n.x += e, n.y += s
        }
        return n
    }

    function _h(t) {
        return On(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i[Xo](t) ? t : (t = J(t), t instanceof Object && t[lf] ? t : void 0)
    }

    function dh(t) {
        for (var i = t[Hu]; i;) {
            if (i.enableSubNetwork) return i;
            i = i[Hu]
        }
        return null
    }

    function lh() {
        w(this, lh, arguments)
    }

    function vh(t, n, e, s, h, r, a) {
        var o = i[ro](N_);
        o[Yu] = B_, bi(o, RW), n && bi(o, n);
        var f = i[ro]($_);
        return r && (YY && (f[F_] = r), Dq || (f[G_] = r)), f[bf] = a, f.src = e, bi(f, NW), h && bi(f, h), s && gi(f, z_, Y_), o._img = f, o[q_](f), t[q_](o), o
    }

    function bh(t, n) {
        this[H_] = i[ro](N_), this[H_].className = U_, bi(this[H_], {
            "background-color": W_,
            overflow: V_,
            "user-select": X_,
            position: Z_
        }), this[K_] = vh(this[H_], {width: J_}, HY[Q_], !1, null, n, td), this[id] = vh(this[H_], {height: J_}, HY[nd], !1, BW, n, ed), this[sd] = vh(this[H_], {
            height: J_,
            right: hd
        }, HY.NAVIGATION_IMAGE_LEFT, !0, BW, n, aa), this._n6ottom = vh(this._navPane, {
            width: J_,
            bottom: hd
        }, HY.NAVIGATION_IMAGE_TOP, !0, null, n, oa), t[q_](this[H_])
    }

    function yh(t, i) {
        if (!HY[nd]) {
            var n = Ri(20, 40), e = n.g;
            e[nf](e.ratio, e.ratio), e[rf](16, 4), e[af](4, 20), e.lineTo(16, 36), e[Zo] = 3, e[rd] = Lf, e[ad] = Lf, e.strokeStyle = uf, e.shadowColor = od, e[fd] = 5, e[ff](), HY[nd] = n.toDataURL();
            var s = Ri(n[_a], n[ca], !1);
            s.g.translate(s[ca], 0), s.g.rotate(Math.PI / 2), s.g[ud](n, 0, 0), HY[Q_] = s.toDataURL()
        }
        this[Fu] = t;
        var h = function (i) {
            z(i);
            var n, e, s = i[cd], h = s[bf];
            if (ed == h) n = 1; else if (aa == h) n = -1; else if (td == h) e = 1; else {
                if (oa != h) return;
                e = -1
            }
            YY && (s.className = _d, setTimeout(function () {
                s[Yu] = ""
            }, 100)), z(i), t._km._9u(n, e)
        };
        bh.call(this, i, h), this._3p(i.clientWidth, i.clientHeight)
    }

    function gh(t, i) {
        this[Fu] = t, this[dd](i, t)
    }

    function ph() {
        w(this, ph, arguments)
    }

    function mh(t, i) {
        this._n6aseCanvas = t, this._j3 = be(i), this.g = this._j3.g, this[ld] = new UY
    }

    function xh(t) {
        var i = t.selectionModel, n = [];
        return t[vd][qu](function (i) {
            t[bd](i) && t[yd](i) && n[lr](i)
        }), i.set(n)
    }

    function Eh(t, i, n, e) {
        var s = t[Ao];
        n = n || s, i = i || 1;
        var h = null;
        h && n.width * n.height * i * i > h && (i = Math.sqrt(h / n[ca] / n[_a]));
        var r = Ri();
        ee(r.g), r.width = n[ca] * i, r[_a] = n[_a] * i, t._8i._h4(r.g, i, n);
        var a = null;
        try {
            a = r.toDataURL(e || gd)
        } catch (o) {
            hH[ea](o)
        }
        return {canvas: r, data: a, width: r[ca], height: r[_a]}
    }

    function wh(t) {
        this[E_] = t, this[pd] = t[pd]
    }

    function Th(t, i) {
        this.interactions = t, this[md] = i || xd
    }

    function kh() {
        w(this, kh, arguments)
    }

    function Mh(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }

    function Oh() {
        w(this, Oh, arguments)
    }

    function Sh(t, i, n, e) {
        var s;
        return t[Ed](function (h) {
            var r = h[Vo];
            return r instanceof hH.Node && (!e || e(r) !== !1) && h[wd].intersectsPoint(i - h.x, n - h.y) && h.hitTest(i, n, HY[Td] / t.scale) ? (s = r, !1) : void 0
        }), s
    }

    function Ih(t) {
        this[sf] = t[Lo](), this.points = t[kd](), this[Md] = t[Od]()
    }

    function Ph() {
        w(this, Ph, arguments)
    }

    function Ah() {
        w(this, Ah, arguments)
    }

    function Ch() {
        w(this, Ch, arguments)
    }

    function Lh(i, n, e) {
        i += t[Ra], n += t.pageYOffset;
        var s = e.getBoundingClientRect();
        return {x: i + s.left, y: n + s.top}
    }

    function Dh(t, i, n) {
        var e = t[Sd], s = t[Id];
        t[wa].left = i - e / 2 + eo, t[wa].top = n - s / 2 + eo
    }

    function jh(t) {
        var n = i[ro](ao), e = n[oo](fo), s = getComputedStyle(t, null), h = s[go];
        h || (h = s[Pd] + Dr + s[Ad] + Dr + s[Cd]), e.font = h;
        var r = t[Or], a = r.split(xo), o = parseInt(s[Ad]), f = 0, u = 0;
        return hH[qu](a, function (t) {
            var i = e[Ld](t)[ca];
            i > f && (f = i), u += 1.2 * o
        }), {width: f, height: u}
    }

    function Rh(t, n) {
        if (jr == typeof t[Dd] && jr == typeof t[jd]) {
            var e = t[Or], s = t[Dd];
            t[Or] = e[or](0, s) + n + e.slice(t[jd]), t.selectionEnd = t[Dd] = s + n.length
        } else if (Rd != typeof i[Nd]) {
            var h = i.selection.createRange();
            h[Bd] = n, h[$d](!1), h.select()
        }
    }

    function Nh(i) {
        if (AY) {
            var n = t.scrollX || t[Ra], e = t[Fd] || t.pageYOffset;
            return i.select(), void t[Gd](n, e)
        }
        i[zd]()
    }

    function Bh() {
    }

    function $h() {
        w(this, $h, arguments), this[Yd] = YY ? 8 : 5
    }

    function Fh(t) {
        return t[$o] == NH || t.type == BH
    }

    function Gh() {
        w(this, Gh, arguments), this[Yd] = YY ? 8 : 4, this._rotateHandleLength = YY ? 30 : 20
    }

    function zh(t, i) {
        var n = new QY;
        return n[io](Zn[hr](t, {x: i.x, y: i.y})), n.addPoint(Zn[hr](t, {
            x: i.x + i.width,
            y: i.y
        })), n[io](Zn.call(t, {x: i.x + i.width, y: i.y + i[_a]})), n.addPoint(Zn[hr](t, {
            x: i.x,
            y: i.y + i.height
        })), n
    }

    function Yh(t) {
        t %= 2 * Math.PI;
        var i = Math[Lf](t / GW);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : qd
    }

    function qh() {
    }

    function Hh(n, e, s) {
        var h = i[Hd], r = new QY(t[Ra], t[Ba], h[Pa] - 2, h.clientHeight - 2), a = n.offsetWidth, o = n[Id];
        e + a > r.x + r[ca] && (e = r.x + r[ca] - a), s + o > r.y + r.height && (s = r.y + r.height - o), e < r.x && (e = r.x), s < r.y && (s = r.y), n[wa][ed] = e + eo, n[wa].top = s + eo
    }

    function Uh(t) {
        this[Ud] = t, this[Wd] = function (t) {
            return this._kh && (this._isFrameTimer ? (cancelAnimationFrame(this._kh), this._isFrameTimer = null) : clearTimeout(this._kh), this._kh = null), t === !0 || t === !1 ? void this[Ud]() : t ? void (this._kh = setTimeout(function () {
                this[Ud](), this._kh = null
            }[Pr](this), t)) : (this[Vd] = !0, void (this._kh = requestAnimationFrame(function () {
                this[Ud](), this._kh = null, this[Vd] = null
            }[Pr](this))))
        }
    }

    function Wh(t, i, n, e, s) {
        this[pf] = t, this[$o] = Xd, this.kind = i, this[Gr] = n, this.data = e, this[Zd] = s
    }

    function Vh(t) {
        this._4l = {}, this._km = t, this._km._1f[Kd](this._9l, this), this[Jd] = rH.INTERACTION_MODE_DEFAULT
    }

    function Xh(t) {
        return t >= 100 && 200 > t
    }

    function Zh(t) {
        return t == eV || t == cV || t == uV || t == rV || t == lV || t == vV
    }

    function Kh() {
        var t, i, n = {}, e = [], s = 0, h = {}, r = 0;
        this.graph[qu](function (a) {
            if (this.isLayoutable(a)) if (a instanceof _W) {
                var o = {node: a, id: a.id, x: a.x, y: a.y};
                for (this[Qd] && this.appendNodeInfo(a, o), n[a.id] = o, e[lr](o), s++, i = a[Hu]; i instanceof vW;) {
                    t || (t = {});
                    var f = t[i.id];
                    f || (f = t[i.id] = {id: i.id, children: []}), f[ar].push(o), i = i.parent
                }
            } else if (a instanceof cW && !a[Qu]() && a[Zu] && a[Uu]) {
                var o = {edge: a};
                h[a.id] = o, r++
            }
        }, this);
        var a = {};
        for (var o in h) {
            var f = h[o], u = f.edge, c = u.fromAgent, _ = u.toAgent, d = c.id + ma + _.id, l = _.id + ma + c.id;
            if (n[c.id] && n[_.id] && !a[d] && !a[l]) {
                var v = n[c.id], b = n[_.id];
                f[tl] = v, f.to = b, a[d] = f, this[il] && this[il](u, f)
            } else delete h[o], r--
        }
        return {groups: t, nodesArray: e, nodes: n, nodeCount: s, edges: h, edgeCount: r, minEnergy: this[nl](s, r)}
    }

    function Jh(t) {
        this[E_] = t, this.currentMovingNodes = {}
    }

    function Qh() {
        w(this, Qh, arguments)
    }

    function tr(t, i, n, e, s) {
        e ? t.forEachEdge(function (e) {
            var h = e.otherNode(t);
            h != n && h[el] != s && i(h, t)
        }, this, !0) : t[sl](function (e) {
            var h = e[Uu];
            h != n && h[el] != s && i(h, t)
        })
    }

    var ir = "3fe3a9f80b209e263e1a35434ab3177b127c916dd3975c272a52d1da87f78f803fb51f780ac429b70a72af03a723208175512869bf05e9bbc63ff995737fb12f451cc20d1e862a7c618dca3f8935db2f2a8f83a2b853ce5adcbdbd7d13a6e7179d47ec6cdd9e9028ef05cbd957d436a1cabe7bbdd506152e4eeb93904c8d7782cb1ed56d381c287be7ae48004eb6da874234a7bd216ede93bc7a3b0f905836a37f084fb1480ff92800d74d4b2cbc4e223b7caa7afff354471a2e9fb7bee6e9eb43bc49cd953ae0fafc0d29364f8ef7cd23d40675b4742b4f74203ac465f2427aa4f9c41cb4889b3df3edf2d30d267d120ca4e9ebc4ca6ba94feb77abb21224681f056931e17e47727e18bbb81ffefcaf9fd5dcda01b6a58d0770905dae86e8a112e8c9aaead47628209b4aca147031c1c3ed45b6c732fffed9f7d4c20d6020fd6b78ed08d08f792ce99432a980f7f3dccd08561fbcf24cedf534a06bc9801fe94464d2673637e301296b5f3f48a5e4dad7fc9e5abfe24c93633ea611e1e2a721396233125d5fbffdd0ac8ee72045a803e9a5daaac2889c456bfc8db9c03802ca99341eb9d287de911fafc9fdb48fa4bd15f2b0cb715d2f644844ba8d4a1fd9886b9863c59623b75f4d44f46e26ea14e519186d02e9b65e0652889907b2adb4c7ab4eb6f4f7fb13309e9a662bff2f9d2db153582729eaa3ec2f8a51efd17bae8f1bc9c87126e0bf487268ccc55508e4de5c86fd0d2d95023b24aafdecaed06a1fedb2c504942d0e9f182ad2543a880d1b89b4f4ac7e5f6ff650ccf144820fb23fa051dfb3cf661224904d32ff362bf04835283c3b6ef740ada996545af06fb6acaa3324d8525d9fd9098ce096f7c5d27d78d2dfc2fa2d8ecb21f18a1a64349d0bdfa449712c1a7c3b6a7a4ce458072b0efecc45fbaca67943483e500d20a808278b328841503c5f6a6512563a62802f85fbef5a9ae9343433caafc26d72be060565c80cdf17fee41be1894748898e0769503aff36986d1f30c27feb7f8be63f74d96cd20511747d4262dae134e8f1579f5c73bed27a229e01b5ba886052f41b4cc15d2478b4abd7896e78d622adf15c7d26c6753fbf7f8b92b840948763701663142877bd569f31dfa2b84b58d821d64b4182bf8848fc1c933ce6add482fe2532202dc7fea05d3198a9ed12a725a78a3fa1ed00f440fe0c86b03a576f8cbf970f2bc02e91bd56cd94a5d56b68fdaa708ea57f2f2f360f539f1092388abb4b6e14b3d6b6691630648f87b182019e39317a731119bdf61c5464b4e71645f2c820248d59666ae2e1538bdb95d2cabfeaa9dfc2350c539dbe31ab003bb5dba4728fba2a6eec4c100d9b7fed22be14bba7091e547a3821f7d2863568f798f09921299f5dcaaafd999f276d9b75b0354bb701279e29f8afcc86d2e5d965586e02176defd683d4777fffdc337145248fec448cd7468a7679614945194e223fab762688d3256a4e4c98d6eb824540ff3896e160c0c04845de30b9dedb9b4fbbc0ac86ad698d6ef002b4d1a191a94b00806ee6bf5f7825402040099c54bbd3d59cf2ffacbb27309732c4cf082f7c002f74e631d9a65c463e0c5042ce19d78691268ef29eee97af474665204df6fb0954365106b800c5429e66a9741a909c3e26d7c3be5b00af06c27e804b941abb23020fe7fa56d5de9097ef347fe3fbf0fb2e90ed1ef9d9ab576ae038a937d7ea2e6754b05f35f4c63afec9693c7d4742ebd5c916f11d5d516c8989e53d7ae28f3601815fd59ec3c981c679e8390e582c4bfa9a56acec6dc995afcb47c3c54ebb132d2b0b4f73edc4523a169489ed3b71f6f763891ce328a72d5afeb0f69b0e533feb959458ee2a6fe2880c601e8fb7687e43df033c1fdf82462029a70da2d5773cf0040a31c2e7abccab9cdab5b06cb258222ef58e0ff0c371e2a90e540196df278ea5d0642693c79826cfa0f570c52d6d086e27f5a373553a655fe4d478da2e13c79968d3ab92b9c79536816bcd969b1507471e46efb0f0a0a807c2f677de3b4b0df37befc428e1a2e88c51813b5c2d949daeb00244ecde4878b4fdbcd6d9107bbfc9a98267a70c9267e80016427af40bedc3e11ce1c6ad33fe79aefab4e256017362ae6fa891a40170e17b6dff8ad2ebd0f8a64c3639dfef53bc4d22faa433e8ce4b3d82189bbcc662e34b4a4d0eaf4151ed5eedefb225f55941256fc98f494f8f955ae8a8fd2f3c488f6d528cc8b8d29767d55316079e7a982a76fbdf4ac2cb51cc1f16a2887da83b23a3ada96dec9279e618de3f16bf7810856d6c21ab393b5f5cd51a2098187af60c89ae7a58d4a67400f0bc9ca33bdccd379ecb75f0761d002142badbb3111490270594f537082cbf0ee4bc12e4501f7408a69422d51b35fcb1b1467f9b9f56c99f0bdcf4d343bf694779dd041cbdb05b33fdf82655f13dafa63590d3022cdc5aa70a63010588b0d3ded051a3724a9ca4588c91e83ec877f7f31bbbab0ae75fd9c5c6d17a6ca1ea85f67c4243d12f3800454d2774ac04128877450eba30e84d73bf30f8e6d04775260b99b56270c9f2c252836c62df2ec8905d48f52bfec72970c245b0b0b507996920f09e242759769a368d73fb7c72523234e708e9eb67985a7d94bab1ca27f286348501b40ccbb946c7fe7eb178558db7197e139e8a247686d8e846741d02067aa84da01a8b2744901542b4846a7bcc4c6aa56dbacb7560c535ad50f188702cba5b1e2d7f366926cb6c871edc51fc91bcfc8afb8a624173ecdf7866f71497433b4cf28d5107ee36a3a695e3929c04bc8e4816bbe0497dec5f9c5c1bd5fc120ebcfff8b41f287e8c5a346e1f031589d13bb82ec70efe3832a57e0821ad409f4b92602baeb022bf0fe52b712099927b04ac2cee68d77d4c3b2d427f003266ef0364bafe5a5b02d727fbdac8717b7e0400c18ba996086d9ee8112acff56f4420fed0bc26f5760301a74b5d86e367bb584ee3a11974fef09dc768cebc0a01bb4cf113f75eafcccb3e86f12c8473eca5e0d86edb12266213345ad32f91aa43a47411f36439f6de93b128cde72cf4b04c4983ff183108c2515d8c5ae6ab28c70e6676a319ee0e917af3387194610bb935d6d328363bd0ed48ccafd8a9185a54d51def62554fe9902baaf8d027e720f414d049e56fef95763ba559856ee813ca9361a2696c1d5fc00266875471c2785e14fd1f2e22360a2499685a4f0a1c0364970c3fdaded7d1aeaf79db28a6f6f0d1144e8a3ec002ea2f86a561459a141f802a5048880ab146ebd8650ca0663193abc6924c5e3f0ba64f8704c7e83a69d3f7926e7fcd2f6fca376f6cb97a1789d36d7e73e4b5b18b41645ffd2cedf3b39596433d5d718c091b840fe05bf26b8a0b632c6ca530b21fcd85455e45e91db206c6ed137715f5aca9563f9bfee94aaf0df20ae567fee8dad4ad2778e506037b2dce748947834d8ddf6229a4c9f8c4b56ca2ce174de9e662b6517e7e3857e2b7fe064b3eea4b55e589eb39c9fe3fa66c21ab1df686148944586387af19b6bcfb1f81260c2fac252a514997539c0afda6f94d5bdd8dd71d08476b4bb89689d4807210538c78c2733bdde64b6cbe0c45989193dc80cae623308dadd18cb3265c2fe1e7e7f411ee3035292881279b57ca3a4a57df6d9f9dc6618c279c4ade7e0aa08a3538614da5e3264b771c81fd4d6f854ae3f00e4db4dc1e2dc15c9276940e37c59a9fcb551b75583101d4aef781a5604a72313cdf02c24ebcea29eacbbb2b9472bea477d928e38afeacd61f6a92b6724786e103af9e0140e25748ce823309131bb8189031fb9e602f246e02d1cf93b8525a70f78a834934f51944b09da1b20d4f0041d9e1c2c7b38a5e92e0603defa1d9d6fd967ef68b4412de95f69377fda8d8fe348d7ff24fc88490e32bc77cd22111ba57608c18d85e68b2c750502c7d01b04001afefeb2578bbab0d3ff75df99b2a052bd8a33e1ae4fe3420e8618cc97e8beff5c27054624500e486329379d3328e5010c8f168db55852f936a0e7dd54fa36036b0dc54c8c38afe96a00ef47a42f7dfa38ef5100e19e5b81da42a2a97be7ffe7260440677fe3b16b3a41978dbf850a1e48e583cb141e31e55235e0033b8e097525a670b659a7cdb434efd937769fc514caea8f1aec0a25f5f39a1f1f81b4bc473994d73ea5e47d1cf11e378f3a3596a56ef460697b1c99fc85686b6d4cd6e4fe5d49eecc99754addf90cf5bc9c4776fe6af590d2b20b8c831a02bbf13f5ef0f8303dbee43b1acc26e4b15cf3263b04228fb1f62291ce0b96290f9126f060962c0633dcffa59097f6f9e029b6d70fc85d33169dfc6f24570f802f6127bb50ae07fa5dac9f908558883e2d4605850a27b0dc7dbde7ee43495c5669ca4ab273678711861970b5d58ad802366c8a336196702ec01493dcc1973549e98f663c1d6b906401ea1207cfe0a34e432a8aeb2341d429095c8f13bdfd0e1e559c20f8985d0b8964ad8443571b478b919f8268aa4447e0cd8d1b2010dc164482452044161d0df87c588011fa5641e44fdd70a473d6865157a0a2eee61b63f94dbdd2db6e7d7a40293cd531ef2e330779edf8a7b1ea937c9fd2deeb6aa1384b2b7321fa213e17cb0e21f1b9e1631af3014071cdf36991ac54f6720ee89638a2d1c6f2c4ce0c615fc57b8ac8a34822633ff7235d1d9a4f24bc7887d24f1c2d423fcce64cea2e80bd1d7533784186a315b70fcb42af750df1aee4fbd28bf659dc9b69cf2788eb4f3ea0a4431920ea411cc6cc3d864d1caca121409091cad229bcc1e60e763bb921901d0398de25173ec81fc22cde96cb2bba10b78875a7e93c08d5cd124aa880e7925859ac3aaefc341af18c9df36e084531fe799153f6de5435d5b99fb7d5632b8b3d697171af03f7eda0964d6b97c7f54225c83b6ceefa583e64c944b6d4d8d67cbe1c4b45f9d210fb4ff14a2dba82f428dba7826da4094614cddc7661e2e9e3820a34ec097707cde7bf3275ff6a559c0ef543027300cf4fd04a045bb471e1491f044c25b90dcbd8b75117fda1c6741bf0f8094efc6d1810e3df05baa0b46921e41219017d607d9fd56a62eae45d3e7b13b88e415f9964bf08aa8d5b64a1f0f65fd967c48e0985b6ae7eaf6bc6c95253cd3aa3c9bed6a6a9bbb794b11fc2964a24a5c51b6d79bf472ee9fc71e49f3db479f119a67b0caee5fd21a3d3b3fc446c2fbb831e3d5b23b9216a02e2fa89fe6b521d7c2c1c45b9ac7c7d8ff07cc7254108cbe660ae9286281303e49c66d62e31465366efc453846aa05bc27164f96067241075d6b0ef4d7731e26c52bfeb2fa81bb0d2ff35f2c4e201529d24e6912ee9fdac58a95884fb1a305bf920ef8de4305465673dbf24a24ccdc92e50bc26882daffd03f902f1c1a3c527b8eda751f5a4546cf97263da2b9c8e2dc7ba4be35f7c1ec94625325e74b48d23e3eeab5e432af4566ba6bdfaa4f4063f6fd27d11516e248025f6fca867a542c6f818257c1ac66b4b289b663f745527015317920b3076bb4a3319371d1469c705873c3a07fab6d4890b6903556bf365fab89667eb0ca66d67be6c40116bf20f19dd4b3cba7a3c49d7da77812e53732133965dd37d5561fb1c6449847721156001323d5fee37678385962611f1ff9d2a50e0cd55f684a64bcfa01199c01d07691e033ecc0028db28b7db30a9a4ca5b4810b7ecefa60465707732bb46fad7785f1a8a91019ab7a11044669a325e1840843253880621fd9f5fda93b21002ebd8b5bf37472fa42a14865d8821f8d30ac6db7440b58102d222985449a29f462aee69982ec82edfc7c5ec315404d57c2b18e0b96794ec4eb8b427bd8dcef5ab6580ce588c254a8a12622fdb02da207e2a65a485327d3bbb04e3d026eaf9369788e0ce519f256358f397328856236770b8780725f89ec3ef716cd69f5f9723696c48ca3b5a374bf03f4dcab0fe1bf42f80aba5aee65cd0b41ef52aab8b4d21f231f330ebac9860482bdf3344b09675b817d43e4905137e88508d912933077f07db8a8c9e41c5733983f23ea9e912cd48e133f56f46ac59fdb6546597a846ab21ce12a075366734ee44c1ce6ba3d78ec430a75ff6e946a58e347dd1bb097de8e2e98588afa9cb075d69998ff8ee7c770053fd2dead6ebeb4a3136b0560a8885bc1a64cf6fc079a5c4c8e84cd74035235cf8727b18db30ef05f5e958be21b36cf95d6d1dfde7a8c6dbb4dd2f7f40de22597950e3f5b1f430b69ef1ab349cdf38a1aac8b11233c93d48cee6a9ae0796f138bd5bd7f52c6721265687111059a938482a05fea5e7a14d5b4186ee26e5c54c339a0f1c7bd1472949005f69d1381eb2788b77fcc256f26b0819946a8b710a389bb04db323cb3b2a1012e694507e9025a43c454bc58a3f115458ab1ddbade2013a27837becd4fb4928908726b02fb4b8750ba515fb3ac4db9f3147259b933a835f0904d82074a5e6b39c2a8e2ca7d52a6db5eb67471c325fca83b727df5b6af023f70e5e8b2a4133b0727af911a9386f618adce7be6f42ffb4c1f10bc31a30571f4b1dd6a56a0dcac8140a10b323e66fbffedb022592833308cd383f264be99421904794936927fedf38f3ca363d594c616e5bab15fd1374db5fba61a23a1f470d751f2781ee9ea27895376c92759ae369a1edcb7d526a894fdcec90b226f6b15f66afccba73a68d412788ba5c981e82005d93e09952fc4d624db19ac4da6f4182bd18e7c8a0fe4ff0d4413e89cb28632a55ff74b4ae64247598d4afb5f5a29fa20969d29e8f6e02d55ccfa045f707678bedee5943a8bd7d4927789726664a7c09735224bfa2d8156cca0cd6bf8d7a5d12e69f0f5d483b0ee4f53475a27b4b17ff16fb80e4da522bb36c7d95dfa5652cfe94db67fb4409df052d41aeff048307547dcff320b22bc7431fcde2ad11b6904a0983b4ef6f3a40341ed27eb0a51bc8e354045405f0a6cd1bd9b4c75df8e7955641078d54856f2686453d1c89823a3ff198c545a7a788b33310818f161d8216ee047101bb176d41be0750e559bcb0a4d3b91ac7c10f2239fe96df9d9252a57673faf93202c05220d271001edb2b7e2855844860a7687b8cd075b0bb56af88223f4e1be4f0cff8357c05444b428f9c3f817f48293ea846258c5d44a6cbc508ce7a05dcc59f2e37c188622216ed5d25ce0429fe41633bbec33749f3a3ae51ae61d481ed21702e73e83ecfdd43aae47acba257b81a56f0c376ca2b72fa7f97368ef0aa63ead4c44b80a29182f6de3952adc795989f0c1b521d81648cbee44a22a40e9892b9a183908f3761eaf85b990e3fa52ac693a36eed053d80205620a37a9e72570dab980e9f282051423bd011d13ee32f54e0ab0480798b839096dedc369d27c6b5cf6bff685a101abe77eb0394a14986f3440bb89974e6a1db795792c682dc17058d49d4d5343bfb487029d1ca8126e278264ee3576b57dfd3a8c62b91a5881e5dc44bf5a5f2430e7dca44e75c4f7524157eaccbb63367610f446e78e78ee4736fb6e5f8cd95ea914061a537d46382a6ec60738765188ebcf363d96e895c0e9c21c41cb5e88e6e774c4d10d3be95fddef174ab20bea652f8c052a73f08a2dc642e0d892cd08e35d843c5e43b3b456418601a31fd0607af8552e748fd2fc574c5fae1d069b7bf72ed134cce23ccdf03f60709b43683d77e383cd0777e3d84ce2de3777e6b350aa430e17e5d86d3667b53756fb7b56c6401a926a415f80bfc1e3cc31809e8aea1d7f54eabdcec1eff5b1904466b95c87ea0f4dbd7d29f4100f5c039a129e995c775a086a54eb6b9e35c01e47f1a4ee4b7355e50a4c70df90f344e22937a8ca98aa33b91a9fe1ba7ee6993baa389511499f6aeab0de2308ba54665daef14e954afecbe2f84f230c74bab61c439a93fdca10418aa8789f1d8517d9d854c0630feed84db09082189348cb1bedc1baba911ad0807a976043b5097a5dddc25a2aa196e65174913637af208ad6902b4c5a2e31c2f92a19398017fe266031edd260d434e15a4b0586a5ba123ca431efa9f8752f8a2c974e0046bab5faccd184464559b0da2b7bb1d437bd814c5423bfe38301206d75ad17d57ef133d3613ddc22c15929d73136c2a8d8bb77e3084216d21d00d5e52d6da5bc35eacf5a0fe41722e11e44aabd535cb63773f2a155c26e1c5fea4eb2cfabbf39c5859894f54dd3c69380b8e75f1546aa16592f47f335ae66355db5ae06c7a9bdb633d2dbeb6d18d45fb7945a6f928c98c97210489fc49119207c61c45e6ff402cabc248b0d3639e721f298d7d2e0c4ef27e96b70db82b074ee5519fb0c704666682091e89f0db675a8bd7203251c26210b526f4767af28432a4204ce230e03a0a09f710e2fa67326a5f4d811aa0a6bd49efd68f6819ff812b53edae069d016201cddfeb5b4e157d768d4eb279790ac6efba354b55d143021cff66fc62cb0110b5e97b09d39df3b27c90d8d0534a51d356aa1d586501235b0b13452cea2814785e3cf444b8b9db10b20c313edb0f532d233bde4335f4be135a8c08f81ac36af8b85e486dc0ad246ec0660dbc7307e797bd9d589503371624680c69128911bd81e416c47f72ac4ff1fd51711f5307a0284f08456d9dcac9ffb02c9c6b2f525cc58ec13da4352832e16165e2f3200a73f87e7b46581cd6630eeb23907fe305cf624cca2101d910838206e801ff64084942f130c15cfb4e5fedf2fe7c97ecfa10357970c6545f0d993764823325811bde6b692714bd474b404f809966d5161bb95ee9b69a56f583fd29f830026e6b18fe66bffa19c5f26f3a72fc9ccbaa252bb4c57c09f517fc8ffeba38beaee3c03ac9a4b30d490ae188378ea8da8302a64f0409baf4a87e7a97372fb5691b8356fa4f4ed534c3d2a93c4b5638e73aaeb055973f35be462684fd5177475f0e2bb1875c0265229ceedef62c570a24f02650877d83664666871aeeacaf5c8e88cd91964768d330a621cf029dc9570372bc87c7454648fc68aa166b3a74c9a1830483a73fbdbdbdd85f6ffe4784e52e7f285a7b48db72b2e9c5a98cc2cf55c2ae77b2f0c8ad86cdf5a8eb6aa28d37fde3eaac66d95fcd926b0aa8e83b46209006303cd669612c833294150212db0e550f80ef4b336485cb50071b932d506087336f3c38fe09601408941d4130d61314d93a8ff7f303f3b31a2437150352b73dad4cd286a02bb91582857d4b5967ff220236b849b19592bf4870a977c728be88b153bdaf776acd6e63892f9b4885684f9596b137346f6e178f60fac595c80de818ec2c2cb625ecdbcc8278727ce9f7eefcd0ff78802ccac3fbfada3978fe5be85c5189b70f08640a13839cebd721763d806e0770f521dd8a9d0f30489d34a1b0b33684b01cc4d7ff2787b861b7486b5d69ee7869dae92ac4bc90af3604a9d658f9850c422b82138d3722bb16311aef83d0b3346b7555a0db8231f82944b0147551a619a56f1a9ed16954770230dca19ea4d0493e2cc04f3e390c357e6d69ffe06bd352354023d3a1c15afad62d528c2200d54856ecb9f3e6c8863e0a62c323a5ffe8d1419713d6828cf2decb7f421162d20749c6eff3671c67357a32af328bf9074841ad95ea98324a7b96f0ae8dd4c61ca85975d3e4b4b3dc0302f48566f7d7ad94854100b567c1c5527ebe593a8c96b15c46b1b2e09279740170a050ce736e87c05bd2e72c911ee5eccdaa52bef0b462fb7883a615bc6c9efd872e9bf727c3341d3aba5894d4b0ca15bfe6bac13872e11ecf1141f2e48cb0a5d301d5098efb71b80a353209ca7401707f252855759bfd12b42ee61848c49e57a9579dfb4547bdaa436b7799c104546d9c73b81f086c224ff3a4a2b692e524f2a966f7a8b067d08adc7cb5f600ff11b20e7c955f65cf905d5e6260314b0bbc4d442ae407ebea18384f74db3e20113cfbf3e99e2e8b86c99c38bb253b518e5d933541bab18bfd54989355607950f7e63ba37ab6561eb8c27495016d840be7b8d5f01f5e29a16c08ea6a8841b11af1a7f773879f4bd89f2e98fee8b24380cf547490d992bfdac5dd09ffeb643fdb04fa29c641a9a2f09197f266f2d9adae3ac36dabf61d647aee0694395a5d73318e279c88a6776de461b0516bbea5cdb5edff85c34129db8b03a51894c73d8ab7894ada03f0caadaef15f940b898017ee1a72447542b9546ff092e18c86a2126f94d7c9880cdd51f9b1a9b9a17bb16ad07edfbffd3b74178f135c6d9db21c995b0f988a57207165e6508d189646e12561a436ab5e454d7b5e7fd643039720be79901ec9d1ef6182851783d1c37fcec056a7ce391811242bd5295eea711434a145e12608511d75c7e894dffc60eada1838f2d92c6358612dce7cc6f170284f60cfab5968eca3aae88ad23c9d0ff07a024bdc6b5ef64870d4b879b0070f0f6f18506d0344043fa68d5d0a80c540efbed77bcb03225a0deb84cfa5742bf7b97d09fe5f08cf2d1e895032600a0e0f7a2ede7a45a876b8a3258486cdbdc94dd9aaaefcdea6c55858df1b7a9432c6d1e61949f0219ff1a9da66dd08dd451a6a494cd05593e9f95d099fdce5e3cc1bb60a07f1639971205065ab8e80c2583437ee8ef528ac1679b20b3c2c2537eb3dab2558c936edb726b6d831f48cd3224959b3010c130f3cb4513222e854a3a6c4b127001d38b49a70370463ce8576c995abdc130af37c44590401b8b8d314451a87ee27572288277024d6f085730963ae6221e5fcd518bf2a733899f3b18345a4ea288b1b6cbb2679cdbed840fb59d1c1b474e9b714d3219c20e5fc1cfddcc209bf0883a5d26b48da7d3926b47ed333fe52ca8571a7225ffdc6bbaba9e46443d155d5ff552233659e26eb9a8187e8728629152466a3dc011ec22a52d37440e4366be7fb5101e54f52d1ea1b91a9b9c8379b225849a68a10b5d339de9a579aafeb140bd22c1c27d6a59a32a8df2822df3874d495a078f8dff5033b14effa41450bcfd87c4bab13a4fb22723aa511705ce0965cc0bff615e63c04e753407448194a8228d1d8fc2eacc089883e23c647d237814f88dc8346444d184286cf5ce7d09d32a54bf30d3c82ed183c0de8e8c37967f8bec7e0634208a8fd268ecf2659c75c56ff1e8f7347aee026df2e097a8c97eb8fb4aa46770a8909f0ccdb781b8a2f19656dfcc9e7082736edb85b0b55b28cc77d5b46bf5fcceefe6f5f516ab3ba1845594b97f38bb9e913fe6b4af9e55183e92de054c4f4d851bf2de52e37db210b400a5f34221610550870b80433c2c9b74b57a0ac39c5d4c439564f293f622c252ffcc5e99fbb2eb4f49294b62ce07f2953434525a739fed484da577592a0237ae629570653ca9fac33526d1fe30fff551157087f0cbf36d7331fa8e36719f8f23e45460b4fa2ac641eb79457d7e7658bcf9d50beb9724f040578aa64489bd7e7c4b5c01d651be387a7a051cb7806842373f8951256a90b0aa9d1058efacaeeba569070798f9fde0e241e42e3c76bbf7bd3a1b3a2554c45fc2bb6b3d446326825fc58c69846bdc54eb482c39b69d198f96fb29428974fb8fa9f0812002b861cc3408f66fb92fdd125c217a2456d42ad5ea83d1fa3022b626872f10bc2da807794975c56902472e189109c21978fbda620410169864d3ac01e5d564f9500f7040eee83079886372ed387d6e9084723c4d11814711d0a4eae84ebe03f0c8c1b546b196092772322dbeae18cd14257c1b9efb6cb9006c551f0c9887b1bd19919747b43b1d6b747f718daf1ea13d557385532996968d93fb6089b87af66ff3d096ef8790cc3208fea1601d52d65362665f21f4f3722e964cca863b1e8bed09bb486ae00386e953d5daac95968c6f6cc32e108c4e2063b9d880aa3b9c98def44bd9611f317b434527ee4bd3766a57d48f3398f477bb0c05a2f359258905987eca7e85bf4baf095fa7a19e84c6c74449dd847d0b78322aed4d5a608253938867fd95b2fbd3e56a99f15e8d78a847df9831d4123039c63e9306df107e5bf95bf030b3f997ef392239e96e991d55aa7a676a41e370b592903c79429704f02f3916c3ce186af618354e7eb4da2faef9605ffc7da84fe0e927d74e73294056532dfa139ce25e3c186e438cb4ec74d439212292813f2a08c9b4a329222e1201e8b13b22e46dc11d8fbaf71a60ff42a2f89aa16796a04376a8930a963550073375559f06f2d967888a65001b360f50915bae66d4e32bf81005ec7af477da9ec9f8a4a353f0ebe9eccc0682e25b424756e1228e15de390c81cbbc8aefc9e7e77cd2429fabd8cf6acc336f409ee07abd939196c166d75113e1fcb6c135f17f6d29115b753c9eec517e8bd813055be7c1fa51aa92af44085dc088b606b3a5fcb51374f32adbcc317f21888153c66ede1e31dce3aac371f0bbe914d26b7c11e1e27ff274aa9c11bb264b1e77f963963e0b45248880e5d930f3896976a0b9a530dab04a830c46488ec891f68465ef6f03dd875cad652f267f6ef09e0f50c6ca4c49a118154a92be015d69f12574e5a2b1abeca5fce88d4638f6065cf3a33bb9fbb5a579ab8ab6e454721cecd5ad493478a588b69e4d3a0b8cc0a8e4c875cd53e5cc27fd15874949145f158de3169e391229e027f23c11e70bbf6ce62ffcefd3641aba830acf6b1ae320bf2abd0d8e5babe875413abb14cb79b3af0b382b8d90fdd49bdffddfb9e550b9f23ab9e3448cf2b2d63c4d7822b3625d00ceb5df296487453b88fc7451192194f278169173e3f3253e5396d8c3d0ebfbc748912e5f149a6b84c72773d4c03e990d4cba933bc02db71c382346e74a714c27d387cb7ec2a9c625820cb4f84ad140f3c3c5e2342d648af7a77a7161c2213a53ecdb5a63dd6a58e075e46fe3b05aeba8dcd2d4fa6cbdb74ae76ba3d42ebc6c4f630ce963885b19e9acf686ec479361c8602eafbfed5521d943dd4373b61ad90f62e39060a1da65751ea3a3ed0698e43aa22ae97bbb90053d3c4461d0f0f70bad39b680ac6213cadef035d2fa300eca19ae496a304afb871abc5efc014d37b414969a8f52fc28f4829a917052ec6dd4211ddf73358f8b3273a263abdb007d15f258357c16d039a7a439f197f0cac7a5db866a58d187f9dce4967367a68208a445fcbed64ddc09138a6cb7341a384752ce11f5d3c8ed3775f1ee2e3d54be1fd96cf0ff65101e83b722e5dad91ec934ccad387bfe827254280753e98dc799f0d04d6a6de6aaa3dcfdcc6507c466dff46c660546cfb10c1f7ec211d93f97028c011521e8ed7ebfc15a9f4b8f5ebf04e86da84c36190c63d495e8729af73a63ec220afdd8ba3cf44c26c4c9b9ae3c65449285675e6767f788262ac5dd416624ad64bd7117bb21843024c706d4ac1c237f03aa36d746006355321abceef79f76500794b3be198c7a6b3ed0b63fe2b89ceacb9a50369e7671e1389299557699abe2c8860d20f8446eaa45dac9a1c5a3e80a81012668df855efabcb906508ebe4cbfebcff6f7ed408c9797a4d9d3768daa98c851bad57db08812145cde638b3727e1ebfb74f14a917bacc36f1459f11b961f6ccec42a5bd22e46c66802335e786f93149df212f685b0fc4829c6b069c2b764e288c324f15f205cd5f8593d3f062b7f9501988b8884b7038c6b063f59bd2c6ca786c74ebe21bffb1ddbf66f79fe8a6ea436e7c53f414c8645f9d5efb4b4246cc67abaf3f7391be1c256ba3bb921ae098eef1b8da8095f86cbb6eb0ca8cfc70134d86f7f7e6f1c4005a8993bbe1c1e8df1bc24c85b0d4a2d4284cff18b3ce8935f536b1779f9d65176ee2fa8fee13e0edf0853237a6f453409d69f8b38cb1c8c34b842a6611c0b3b2c749603308bd77e2afd82a835363b9b4c5dfc6e925b7b07e794fa544df09ca750aeb80fe05b41dfb109eea7072be955375e155abfbfe2537d5a1aa06e922d9658011e6093091d304fc74521f3c86732bc9a12f702bfc431ddafde0909ae775f1b635e2dfae0710c3669b07c39e1a9a4e2dccdea778ad6722f7e5a17347040e72880df2c750567982fd30977b2e69f14aa5303397c3590b880a1c0426af0186b1f0c36f9c2286ce65e612e87aa0beaa13f21c28df2c5f5a9b998dc6299612ca3f2dcb8d44c03dd082b596222c138fb60e1c12ac43311475ed20793013ac4d817da8549e8d772cae31c45ce2f1f3e72c7ad1a0f83a70bb03af160f615564ebdaeb7bf53b0a11828be0e18a488b708c08334aa2d21458743992a6969a602b8e61bf5310c2c87f7a1a8f49e7e5c6371613d6f771911a71638a7feaf05a49a8c15fccd3fcfbf8473fec8fb9f40a94065a769c291c37e4f25f3c1994fd0207eb83dd70c03d43c1e9caf882baf0f1f3158b0ff71e5c016c0daa9a5c9a3c7192214cda8b34c34188ea165e39bdbc4ebaa2879403d891eaccdb079d69b3d09be94ad2b1a2799634a04bd0e4cfc85afb2eebcbf1dca01982599a5cebc8d762cb18e1ecaa65660913c8a62e49856058d8104a19c909410b8e39c16b2058de5dec7254bfea33c16a0f820c158bf182fceeddb8fb2a6700a5ed9cd93892452e3e6c4a3aa7b838630cbcd3124a954c92dde0723a43c49dedb4d248d209190de0794e76d31b93d9d70acb02a2fb3b797063cbf4be7cd4738408187bd0ac4ca36d8e6fc4d0e47cf73537e71c9cd8f110f03a1fe35e0a853051858656c3fd5c45e58e99589c3be258cc2093a2493a566ddf043233bcad31ae23bcd8b8ebc3f43061f1075973e8702554e9afd5fc9952c362e9e77a78c65623065356e07a7060675a9c9b3aa97a98acbb12eeb9f9e364f1718a524f610ab1e3fd9a25199158da12fce07a385606dd14f724096a9e04770c7b8cf3f8f649b040dc19df3243d5f14d1f650114c6c8b4c9054dac1e968b53e28c7299e455189ea2b3eb24a2824f4e468a8b7dd8069be0d694ddd7f31b8b11fd95d48d4508891ebc79f74c1445aae0d262557614dd143d8eadb59e0b17577ada3b95643bd5a50a5cc55a92ce86a60f83c31d2ad6e344a630e118ebfd95e53a22ee36c7d186fc0b09b6a56cfab12e6fe599031b3aac231bd04d7f589adf96290957f9c71940144819b8a55c6ca2c38a565f09ae074ad761ae6189419ac9e484e03b95dde886181cc624eb0660dd842d72ff9e8b83f4eb96a24d7400317ba2c235a8d713f72fe4852139c6a719eafa947f0e987dc05eb4e8169d20c21f8ef922fbba741167cb599172176a382b21204039ae555371a093d20be6cb673953f84e25d94cf884d409d207f4228c5610f6e3548600bb7b3d7cb51fb3afd17d0b882b51179a5ed3976c7126db6123435adc8fb54170bdb95d991b8dd952c9607202d2243bb09fe84319f6c8d2fda504710ddcb0ae6450d481737191c8a273d37cde8471c10c13d6d15a9eb1d5c258132f99c06b569ab6643feae35b27e5b8a4592380a39f67e5d1100e8afb0b9f350350e5bedea52d113142e6725ce283bb40da61e4b080cbe4074fe1bb6a8b72ae8828b580d98cf12f1b6e6af266df26c6bbb04b0f44cc51d215354c3232981cb067eee63aa01758027d1306f8624ea5dc070006abe204cc1022193d9a5ed35dfa569b8bfda6de5f24c55906ce67a1a2d5804687e0c5ef99f3ff219ed601b0d8ac54ad45d48f828aae7a773cd7484d3b05d4df64ca1dc038af00c56d6f053b034f71d43f213368910965f239129ac660bf5d33d74b206c1a08735b77f393efb093aa18800dfc4e4b71d4926a0ed083e65ddd7f6853c3f16ef62367cbceb512a0822cf45987aed30a7b77d04bea5413c229a4e1a438365c91a4475720b8d5d73b815349091effbe2d52df63965780a71a1ead945ee773ad6e22f6b64fbb98862cbb5be590ebcf708919cc6b54e795553a92140fe9e49eff5aee277d1f677916c265c26dbec0e4b53d18ebccbeadc016d07110115c89a75e9059c9b1ca386d969fdabc72c54439ab0b602305f6535e8ce7b8171300ed1ce04a537a3556be8d1ffa0749b99026866e25a501b5daaf99cccbbddf3cde5f2ba7e12ae0425039c",
        nr = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    !function (t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
                h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
                r = Math.round(i.length / 2), a = Math.pow(2, 31) - 1,
                o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (h * n + r) % a;
            for (var f = "", u = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), u += String.fromCharCode(f), n = (h * n + r) % a;
            return u
        }

        t = i(t, "QUNEE"), nr = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(ir);
    var er = nr[0] + nr[1] + nr[2], sr = nr[3] + nr[1] + nr[2], hr = nr[4], rr = nr[5], ar = nr[6], or = nr[7],
        fr = nr[8], ur = nr[9], cr = nr[10], _r = nr[11], dr = nr[12], lr = nr[13], vr = nr[14] + nr[15] + nr[16],
        br = nr[17], yr = nr[18], gr = nr[19], pr = nr[20], mr = nr[21], xr = nr[22] + nr[23], Er = nr[24], wr = nr[22],
        Tr = nr[25], kr = nr[26] + nr[27] + nr[28], Mr = nr[29] + nr[30] + nr[31], Or = nr[32],
        Sr = nr[33] + nr[15] + nr[34], Ir = nr[35] + nr[36] + nr[37], Pr = nr[38],
        Ar = nr[39] + nr[40] + nr[41] + nr[42] + nr[43], Cr = nr[20] + nr[44] + nr[45], Lr = nr[46], Dr = nr[47],
        jr = nr[48], Rr = nr[49], Nr = nr[50], Br = nr[51] + nr[40] + nr[52], $r = nr[53] + nr[54] + nr[55],
        Fr = nr[56] + nr[30] + nr[31], Gr = nr[57], zr = nr[58] + nr[27] + nr[59], Yr = nr[60] + nr[61] + nr[62],
        qr = nr[63], Hr = nr[64], Ur = nr[65] + nr[66], Wr = nr[67], Vr = nr[68] + nr[42] + nr[69], Xr = nr[70],
        Zr = nr[71], Kr = nr[72], Jr = nr[73], Qr = nr[23], ta = nr[74], ia = nr[75], na = nr[76], ea = nr[77],
        sa = nr[78] + nr[79], ha = nr[23] + nr[80] + nr[81] + nr[82], ra = nr[23] + nr[83], aa = nr[84], oa = nr[85],
        fa = nr[86], ua = nr[87], ca = nr[88], _a = nr[89], da = nr[90] + nr[27] + nr[91],
        la = nr[92] + nr[27] + nr[91], va = nr[93] + nr[27] + nr[94], ba = nr[35] + nr[1] + nr[95] + nr[40] + nr[96],
        ya = nr[35] + nr[1] + nr[95] + nr[97] + nr[98], ga = nr[99] + nr[100], pa = nr[101], ma = nr[100],
        xa = nr[68] + nr[44] + nr[102] + nr[1] + nr[103], Ea = nr[100] + nr[99] + nr[100], wa = nr[104], Ta = nr[105],
        ka = nr[106], Ma = nr[107] + nr[97] + nr[108], Oa = nr[109], Sa = nr[110], Ia = nr[111] + nr[97] + nr[108],
        Pa = nr[112] + nr[113] + nr[114], Aa = nr[3] + nr[61] + nr[115] + nr[1] + nr[116] + nr[97] + nr[117],
        Ca = nr[118] + nr[119] + nr[120], La = nr[112] + nr[121], Da = nr[112] + nr[122], ja = nr[123] + nr[121],
        Ra = nr[123] + nr[124] + nr[125], Na = nr[123] + nr[122], Ba = nr[123] + nr[126] + nr[125],
        $a = nr[23] + nr[127], Fa = nr[128] + nr[129] + nr[130], Ga = nr[131] + nr[129] + nr[130], za = nr[132],
        Ya = nr[133] + nr[134] + nr[47] + nr[135] + nr[47] + nr[77] + nr[74], qa = nr[136] + nr[119] + nr[137],
        Ha = nr[133] + nr[138] + nr[47] + nr[135] + nr[47] + nr[77] + nr[74], Ua = nr[139], Wa = nr[140],
        Va = nr[141] + nr[142] + nr[143], Xa = nr[144], Za = nr[145], Ka = nr[146], Ja = nr[147] + nr[36] + nr[148],
        Qa = nr[133] + nr[149] + nr[47] + nr[77], to = nr[150], io = nr[111] + nr[27] + nr[151], no = nr[152],
        eo = nr[153], so = nr[154] + nr[61] + nr[155] + nr[36] + nr[156] + nr[27] + nr[157] + nr[97] + nr[158],
        ho = nr[159] + nr[61] + nr[155] + nr[36] + nr[156] + nr[27] + nr[157] + nr[97] + nr[158],
        ro = nr[24] + nr[160] + nr[161], ao = nr[162], oo = nr[3] + nr[1] + nr[163], fo = nr[79] + nr[164],
        uo = nr[165] + nr[36] + nr[166], co = nr[167] + nr[23] + nr[168], _o = nr[153] + nr[47],
        lo = nr[167] + nr[23] + nr[169], vo = nr[170], bo = nr[171], yo = nr[172] + nr[23] + nr[173], go = nr[174],
        po = nr[175] + nr[61] + nr[176], mo = nr[177], xo = nr[178], Eo = nr[179] + nr[119] + nr[137], wo = nr[180],
        To = nr[167] + nr[23] + nr[181], ko = nr[3] + nr[182] + nr[183] + nr[54] + nr[184], Mo = nr[185],
        Oo = nr[23] + nr[186] + nr[97], So = nr[23] + nr[187] + nr[1] + nr[188],
        Io = nr[23] + nr[189] + nr[27] + nr[151], Po = nr[190], Ao = nr[191], Co = nr[192],
        Lo = nr[3] + nr[61] + nr[193], Do = nr[51] + nr[27] + nr[151] + nr[182] + nr[80] + nr[36] + nr[194],
        jo = nr[179], Ro = nr[51] + nr[27] + nr[151] + nr[182] + nr[80] + nr[27] + nr[195],
        No = nr[196] + nr[27] + nr[151], Bo = nr[197] + nr[27] + nr[151], $o = nr[198], Fo = nr[199],
        Go = nr[23] + nr[200] + nr[79] + nr[86], zo = nr[23] + nr[201], Yo = nr[23] + nr[200] + nr[202] + nr[87],
        qo = nr[23] + nr[80] + nr[203], Ho = nr[23] + nr[200] + nr[79] + nr[87], Uo = nr[23] + nr[80] + nr[204],
        Wo = nr[25] + nr[205] + nr[27] + nr[151], Vo = nr[206], Xo = nr[207], Zo = nr[208] + nr[113] + nr[114],
        Ko = nr[209] + nr[36] + nr[210], Jo = nr[71] + nr[211], Qo = nr[209] + nr[97] + nr[117],
        tf = nr[179] + nr[36] + nr[210], nf = nr[212], ef = nr[213] + nr[27] + nr[195], sf = nr[214],
        hf = nr[71] + nr[16] + nr[215] + nr[16] + nr[202] + nr[16] + nr[79], rf = nr[216] + nr[119] + nr[217],
        af = nr[208] + nr[119] + nr[217], of = nr[71] + nr[218], ff = nr[209], uf = nr[71] + nr[219], cf = nr[220],
        _f = nr[197] + nr[182] + nr[221] + nr[15] + nr[16], df = nr[222], lf = nr[223], vf = nr[224] + nr[23] + nr[225],
        bf = nr[226], yf = nr[227] + nr[74] + nr[228], gf = nr[23] + nr[80] + nr[229], pf = nr[230],
        mf = nr[223] + nr[47] + nr[231] + nr[47] + nr[77] + nr[232], xf = nr[3] + nr[44] + nr[233],
        Ef = nr[234] + nr[23] + nr[235] + nr[23] + nr[236], wf = nr[14], Tf = nr[208], kf = nr[237],
        Mf = nr[238] + nr[119] + nr[239], Of = nr[66], Sf = nr[240], If = nr[241] + nr[23] + nr[242] + nr[23] + nr[243],
        Pf = nr[241] + nr[23] + nr[242] + nr[23] + nr[244],
        Af = nr[241] + nr[23] + nr[242] + nr[23] + nr[245] + nr[23] + nr[246],
        Cf = nr[247] + nr[182] + nr[183] + nr[54] + nr[184], Lf = nr[248], Df = nr[165] + nr[119] + nr[249],
        jf = nr[150] + nr[97] + nr[117], Rf = nr[23] + nr[250] + nr[251], Nf = nr[252] + nr[27] + nr[195],
        Bf = nr[23] + nr[253], $f = nr[25] + nr[254] + nr[61] + nr[87] + nr[40] + nr[255] + nr[27] + nr[151],
        Ff = nr[23] + nr[80] + nr[79] + nr[86], Gf = nr[25] + nr[199], zf = nr[25] + nr[256] + nr[121],
        Yf = nr[25] + nr[256] + nr[122], qf = nr[25] + nr[257], Hf = nr[258] + nr[259] + nr[97] + nr[260],
        Uf = nr[25] + nr[261] + nr[36] + nr[166], Wf = nr[25] + nr[262], Vf = nr[263],
        Xf = nr[25] + nr[264] + nr[113] + nr[114], Zf = nr[25] + nr[261] + nr[40] + nr[255] + nr[27] + nr[151],
        Kf = nr[25] + nr[265] + nr[27] + nr[91],
        Jf = nr[23] + nr[80] + nr[266] + nr[267] + nr[268] + nr[269] + nr[182] + nr[270] + nr[42] + nr[271],
        Qf = nr[23] + nr[80] + nr[266] + nr[267] + nr[268] + nr[269],
        tu = nr[23] + nr[272] + nr[273] + nr[36] + nr[274], iu = nr[141] + nr[275] + nr[27] + nr[276],
        nu = nr[25] + nr[262] + nr[97] + nr[277], eu = nr[25] + nr[264] + nr[121], su = nr[23] + nr[264] + nr[122],
        hu = nr[25] + nr[264] + nr[122], ru = nr[278] + nr[27] + nr[151], au = nr[23] + nr[264] + nr[121],
        ou = nr[3] + nr[97] + nr[117], fu = nr[279], uu = nr[254] + nr[61] + nr[87] + nr[27] + nr[195],
        cu = nr[25] + nr[261] + nr[97] + nr[260], _u = nr[165] + nr[44] + nr[280] + nr[54] + nr[281],
        du = nr[159] + nr[54] + nr[281], lu = nr[154] + nr[44] + nr[280] + nr[54] + nr[281],
        vu = nr[208] + nr[54] + nr[281], bu = nr[208] + nr[54] + nr[281] + nr[15] + nr[125],
        yu = nr[159] + nr[54] + nr[281] + nr[15] + nr[125],
        gu = nr[154] + nr[44] + nr[280] + nr[54] + nr[281] + nr[15] + nr[125], pu = nr[282] + nr[182] + nr[221],
        mu = nr[283] + nr[119] + nr[284], xu = nr[285] + nr[286] + nr[287], Eu = nr[288] + nr[27] + nr[82],
        wu = nr[289] + nr[27] + nr[82], Tu = nr[290], ku = nr[291] + nr[286] + nr[284] + nr[119] + nr[292],
        Mu = nr[293], Ou = nr[294], Su = nr[295], Iu = nr[296], Pu = nr[297] + nr[1] + nr[298] + nr[40] + nr[237],
        Au = nr[297] + nr[40] + nr[237], Cu = nr[299] + nr[1] + nr[300] + nr[1] + nr[298], Lu = nr[301] + nr[302],
        Du = nr[303], ju = nr[304], Ru = nr[305], Nu = nr[306], Bu = nr[307],
        $u = nr[215] + nr[74] + nr[215] + nr[74] + nr[202], Fu = nr[23] + nr[80] + nr[266] + nr[103] + nr[1] + nr[308],
        Gu = nr[309], zu = nr[310], Yu = nr[20] + nr[311] + nr[312], qu = nr[313] + nr[160] + nr[314], Hu = nr[315],
        Uu = nr[68] + nr[40] + nr[316], Wu = nr[3] + nr[160] + nr[317] + nr[61] + nr[318],
        Vu = nr[23] + nr[319] + nr[311] + nr[320], Xu = nr[23] + nr[80] + nr[266] + nr[321],
        Zu = nr[299] + nr[40] + nr[316], Ku = nr[23] + nr[80] + nr[266] + nr[80], Ju = nr[51] + nr[182] + nr[322],
        Qu = nr[51] + nr[44] + nr[323], tc = nr[51] + nr[54] + nr[324] + nr[15] + nr[16], ic = nr[0] + nr[42] + nr[325],
        nc = nr[326], ec = nr[165] + nr[1] + nr[95] + nr[182] + nr[221], sc = nr[6] + nr[1] + nr[327],
        hc = nr[165] + nr[182] + nr[221], rc = nr[328], ac = nr[313] + nr[160] + nr[314] + nr[160] + nr[317],
        oc = nr[25] + nr[299], fc = nr[313] + nr[160] + nr[314] + nr[1] + nr[95], uc = nr[329] + nr[119] + nr[217],
        cc = nr[330] + nr[119] + nr[217], _c = nr[331], dc = nr[332] + nr[23] + nr[333],
        lc = nr[332] + nr[23] + nr[334], vc = nr[332] + nr[23] + nr[335], bc = nr[332] + nr[23] + nr[336],
        yc = nr[332] + nr[23] + nr[337], gc = nr[332] + nr[23] + nr[338], pc = nr[332] + nr[23] + nr[339],
        mc = nr[332] + nr[23] + nr[340], xc = nr[332] + nr[23] + nr[341], Ec = nr[332] + nr[23] + nr[342],
        wc = nr[332] + nr[23] + nr[343] + nr[23] + nr[344], Tc = nr[332] + nr[23] + nr[343] + nr[23] + nr[202],
        kc = nr[332] + nr[23] + nr[343] + nr[23] + nr[79], Mc = nr[332] + nr[23] + nr[343] + nr[23] + nr[345],
        Oc = nr[332] + nr[23] + nr[343] + nr[23] + nr[81], Sc = nr[332] + nr[23] + nr[343] + nr[23] + nr[273],
        Ic = nr[332] + nr[23] + nr[343] + nr[23] + nr[266], Pc = nr[332] + nr[23] + nr[343] + nr[23] + nr[346],
        Ac = nr[332] + nr[23] + nr[343] + nr[23] + nr[347], Cc = nr[332] + nr[23] + nr[343] + nr[23] + nr[348],
        Lc = nr[349], Dc = nr[23] + nr[80] + nr[350], jc = nr[190] + nr[42] + nr[351], Rc = nr[25] + nr[261],
        Nc = nr[26] + nr[27] + nr[352], Bc = nr[3] + nr[27] + nr[28], $c = nr[353], Fc = nr[354] + nr[27] + nr[28],
        Gc = nr[355], zc = nr[356] + nr[23] + nr[236] + nr[23] + nr[357],
        Yc = nr[356] + nr[23] + nr[236] + nr[23] + nr[168], qc = nr[165] + nr[36] + nr[210],
        Hc = nr[358] + nr[23] + nr[359], Uc = nr[358] + nr[23] + nr[236] + nr[23] + nr[360] + nr[23] + nr[361],
        Wc = nr[358] + nr[23] + nr[236] + nr[23] + nr[361] + nr[23] + nr[362],
        Vc = nr[358] + nr[23] + nr[236] + nr[23] + nr[359] + nr[23] + nr[363],
        Xc = nr[358] + nr[23] + nr[236] + nr[23] + nr[359] + nr[23] + nr[364],
        Zc = nr[358] + nr[23] + nr[236] + nr[23] + nr[365] + nr[23] + nr[362],
        Kc = nr[358] + nr[23] + nr[236] + nr[23] + nr[360] + nr[23] + nr[362],
        Jc = nr[358] + nr[23] + nr[236] + nr[23] + nr[359] + nr[23] + nr[366],
        Qc = nr[358] + nr[23] + nr[236] + nr[23] + nr[359] + nr[23] + nr[367], t_ = nr[3] + nr[36] + nr[210],
        i_ = nr[358] + nr[23] + nr[236] + nr[23] + nr[365],
        n_ = nr[358] + nr[23] + nr[236] + nr[23] + nr[365] + nr[23] + nr[361],
        e_ = nr[358] + nr[23] + nr[368] + nr[23] + nr[369], s_ = nr[358] + nr[23] + nr[368] + nr[23] + nr[370],
        h_ = nr[371] + nr[23] + nr[372], r_ = nr[373] + nr[23] + nr[372], a_ = nr[358] + nr[23] + nr[374],
        o_ = nr[358] + nr[23] + nr[374] + nr[23] + nr[375], f_ = nr[358] + nr[23] + nr[374] + nr[23] + nr[376],
        u_ = nr[358] + nr[23] + nr[374] + nr[23] + nr[377], c_ = nr[358] + nr[23] + nr[374] + nr[23] + nr[378],
        __ = nr[358] + nr[23] + nr[379] + nr[23] + nr[380], d_ = nr[381],
        l_ = nr[358] + nr[23] + nr[236] + nr[23] + nr[360], v_ = nr[3] + nr[36] + nr[274],
        b_ = nr[358] + nr[23] + nr[382] + nr[23] + nr[236] + nr[23] + nr[383],
        y_ = nr[23] + nr[384] + nr[119] + nr[239] + nr[27] + nr[151],
        g_ = nr[358] + nr[23] + nr[382] + nr[23] + nr[236] + nr[23] + nr[365],
        p_ = nr[3] + nr[27] + nr[385] + nr[27] + nr[151], m_ = nr[358] + nr[23] + nr[386] + nr[23] + nr[387],
        x_ = nr[358] + nr[23] + nr[388] + nr[23] + nr[387], E_ = nr[389],
        w_ = nr[3] + nr[160] + nr[390] + nr[27] + nr[151] + nr[61] + nr[193],
        T_ = nr[0] + nr[27] + nr[195] + nr[36] + nr[391], k_ = nr[392] + nr[44] + nr[393], M_ = nr[394],
        O_ = nr[299] + nr[40] + nr[237] + nr[160] + nr[317], S_ = nr[68] + nr[40] + nr[237] + nr[160] + nr[317],
        I_ = nr[395], P_ = nr[396] + nr[119] + nr[397],
        A_ = nr[398] + nr[23] + nr[358] + nr[23] + nr[399] + nr[23] + nr[400], C_ = nr[349] + nr[119] + nr[292],
        L_ = nr[25] + nr[401] + nr[160] + nr[402], D_ = nr[358] + nr[23] + nr[382] + nr[23] + nr[236],
        j_ = nr[403] + nr[121], R_ = nr[403] + nr[122], N_ = nr[404],
        B_ = nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[311] + nr[407] + nr[100] + nr[61] + nr[408],
        $_ = nr[409], F_ = nr[410], G_ = nr[411], z_ = nr[412], Y_ = nr[199] + nr[66] + nr[413] + nr[414] + nr[70],
        q_ = nr[415] + nr[1] + nr[95], H_ = nr[23] + nr[416] + nr[27] + nr[417],
        U_ = nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[311] + nr[407],
        W_ = nr[65] + nr[66] + nr[215] + nr[418] + nr[215] + nr[418] + nr[215] + nr[418] + nr[215] + nr[70],
        V_ = nr[419], X_ = nr[420], Z_ = nr[421], K_ = nr[23] + nr[289], J_ = nr[422] + nr[423],
        Q_ = nr[424] + nr[23] + nr[224] + nr[23] + nr[366], td = nr[289], id = nr[23] + nr[288],
        nd = nr[424] + nr[23] + nr[224] + nr[23] + nr[363], ed = nr[288], sd = nr[23] + nr[84], hd = nr[215] + nr[153],
        rd = nr[208] + nr[1] + nr[425], ad = nr[208] + nr[426] + nr[427], od = nr[71] + nr[428],
        fd = nr[429] + nr[61] + nr[430], ud = nr[223] + nr[182] + nr[183], cd = nr[431], _d = nr[432], dd = nr[433],
        ld = nr[23] + nr[80] + nr[434], vd = nr[389] + nr[286] + nr[435], bd = nr[51] + nr[30] + nr[436],
        yd = nr[51] + nr[36] + nr[437], gd = nr[231] + nr[438] + nr[439], pd = nr[289] + nr[1] + nr[308],
        md = nr[29] + nr[1] + nr[440], xd = nr[29],
        Ed = nr[313] + nr[160] + nr[314] + nr[97] + nr[441] + nr[30] + nr[436] + nr[442],
        wd = nr[443] + nr[61] + nr[193], Td = nr[444] + nr[23] + nr[400],
        kd = nr[3] + nr[27] + nr[385] + nr[27] + nr[445], Md = nr[29] + nr[27] + nr[151],
        Od = nr[3] + nr[54] + nr[55] + nr[27] + nr[385] + nr[27] + nr[151], Sd = nr[256] + nr[113] + nr[114],
        Id = nr[256] + nr[446] + nr[447], Pd = nr[174] + nr[36] + nr[210], Ad = nr[174] + nr[36] + nr[166],
        Cd = nr[174] + nr[42] + nr[448], Ld = nr[449] + nr[119] + nr[137], Dd = nr[450] + nr[36] + nr[451],
        jd = nr[450] + nr[160] + nr[390], Rd = nr[452], Nd = nr[450], Bd = nr[175], $d = nr[453],
        Fd = nr[454] + nr[122], Gd = nr[454] + nr[119] + nr[217], zd = nr[455], Yd = nr[456] + nr[36] + nr[166],
        qd = nr[457] + nr[100] + nr[458], Hd = nr[459] + nr[160] + nr[161], Ud = nr[23] + nr[80] + nr[79] + nr[460],
        Wd = nr[461], Vd = nr[23] + nr[51] + nr[42] + nr[43] + nr[119] + nr[462], Xd = nr[463], Zd = nr[464],
        Kd = nr[111] + nr[44] + nr[465], Jd = nr[466] + nr[286] + nr[298],
        Qd = nr[415] + nr[311] + nr[298] + nr[182] + nr[467], tl = nr[299],
        il = nr[415] + nr[160] + nr[317] + nr[182] + nr[467], nl = nr[468] + nr[160] + nr[469] + nr[42] + nr[470],
        el = nr[23] + nr[471], sl = nr[313] + nr[160] + nr[314] + nr[15] + nr[472] + nr[160] + nr[317], hl = nr[473],
        rl = nr[474] + nr[40] + nr[316], al = nr[475],
        ol = nr[154] + nr[97] + nr[476] + nr[40] + nr[41] + nr[42] + nr[43],
        fl = nr[217] + nr[97] + nr[476] + nr[40] + nr[41] + nr[42] + nr[43], ul = nr[165] + nr[119] + nr[477],
        cl = nr[60] + nr[40] + nr[41] + nr[42] + nr[43],
        _l = nr[159] + nr[1] + nr[478] + nr[40] + nr[41] + nr[42] + nr[43],
        dl = nr[217] + nr[1] + nr[478] + nr[40] + nr[41] + nr[42] + nr[43],
        ll = nr[99] + nr[1] + nr[478] + nr[40] + nr[41] + nr[42] + nr[43], vl = nr[150] + nr[119] + nr[477],
        bl = nr[71] + nr[479], yl = nr[23] + nr[174] + nr[36] + nr[210], gl = nr[480],
        pl = nr[23] + nr[174] + nr[1] + nr[481], ml = nr[23] + nr[174] + nr[36] + nr[166],
        xl = nr[23] + nr[174] + nr[42] + nr[448], El = nr[23] + nr[174],
        wl = nr[395] + nr[61] + nr[87] + nr[182] + nr[164], Tl = nr[133] + nr[482] + nr[47] + nr[483],
        kl = nr[3] + nr[61] + nr[87] + nr[182] + nr[164], Ml = nr[23] + nr[80] + nr[266] + nr[484],
        Ol = nr[11] + nr[61] + nr[87] + nr[182] + nr[164], Sl = nr[51] + nr[160] + nr[485],
        Il = nr[68] + nr[54] + nr[486], Pl = nr[68] + nr[302] + nr[487] + nr[1] + nr[103],
        Al = nr[196] + nr[1] + nr[95], Cl = nr[196] + nr[160] + nr[161] + nr[1] + nr[95],
        Ll = nr[488] + nr[119] + nr[292], Dl = nr[489] + nr[311] + nr[312], jl = nr[27] + nr[151] + nr[66],
        Rl = nr[418], Nl = nr[490], Bl = nr[36] + nr[166] + nr[66], $l = nr[491] + nr[47] + nr[77],
        Fl = nr[278] + nr[97] + nr[117], Gl = nr[111] + nr[97] + nr[117], zl = nr[492] + nr[23] + nr[370], Yl = nr[493],
        ql = nr[278], Hl = nr[494], Ul = nr[495] + nr[311] + nr[312], Wl = nr[496], Vl = nr[497], Xl = nr[498],
        Zl = nr[272], Kl = nr[499], Jl = nr[363] + nr[23] + nr[366], Ql = nr[363] + nr[23] + nr[367],
        tv = nr[500] + nr[23] + nr[366], iv = nr[500] + nr[23] + nr[501], nv = nr[500] + nr[23] + nr[367],
        ev = nr[364] + nr[23] + nr[367], sv = nr[363] + nr[23] + nr[501], hv = nr[364] + nr[23] + nr[366],
        rv = nr[364] + nr[23] + nr[501], av = nr[299] + nr[36] + nr[502], ov = nr[503], fv = nr[504], uv = nr[505],
        cv = nr[230] + nr[506], _v = nr[418] + nr[198] + nr[506], dv = nr[418] + nr[505] + nr[506],
        lv = nr[353] + nr[74] + nr[507], vv = nr[418] + nr[353] + nr[311] + nr[312] + nr[506],
        bv = nr[418] + nr[508] + nr[30] + nr[31] + nr[506], yv = nr[418] + nr[32] + nr[506],
        gv = nr[353] + nr[311] + nr[312], pv = nr[508] + nr[30] + nr[31], mv = nr[509] + nr[182] + nr[221],
        xv = nr[508] + nr[182] + nr[221], Ev = nr[510] + nr[74] + nr[111], wv = nr[510] + nr[74] + nr[11], Tv = nr[510],
        kv = nr[510] + nr[74] + nr[14], Mv = nr[511], Ov = nr[512] + nr[160] + nr[513], Sv = nr[35] + nr[160] + nr[513],
        Iv = nr[514], Pv = nr[515], Av = nr[516], Cv = nr[11] + nr[44] + nr[465], Lv = nr[517],
        Dv = nr[418] + nr[206] + nr[506], jv = nr[418] + nr[14] + nr[506],
        Rv = nr[418] + nr[508] + nr[182] + nr[221] + nr[506], Nv = nr[111], Bv = nr[518] + nr[23] + nr[519],
        $v = nr[518] + nr[23] + nr[520] + nr[23] + nr[521], Fv = nr[14] + nr[74] + nr[507],
        Gv = nr[23] + nr[80] + nr[266] + nr[87], zv = nr[23] + nr[80] + nr[266] + nr[272],
        Yv = nr[35] + nr[27] + nr[522] + nr[1] + nr[481], qv = nr[68] + nr[1] + nr[2],
        Hv = nr[35] + nr[1] + nr[2] + nr[1] + nr[523], Uv = nr[3] + nr[182] + nr[164], Wv = nr[23] + nr[524],
        Vv = nr[518] + nr[23] + nr[234], Xv = nr[518] + nr[23] + nr[525], Zv = nr[23] + nr[526], Kv = nr[527],
        Jv = nr[517] + nr[1] + nr[528] + nr[54] + nr[529], Qv = nr[450] + nr[1] + nr[528] + nr[54] + nr[529],
        tb = nr[23] + nr[450] + nr[286] + nr[435], ib = nr[206] + nr[1] + nr[528] + nr[54] + nr[529],
        nb = nr[512] + nr[54] + nr[184] + nr[27] + nr[28] + nr[1] + nr[528],
        eb = nr[510] + nr[182] + nr[221] + nr[1] + nr[528] + nr[54] + nr[529], sb = nr[25] + nr[328], hb = nr[530],
        rb = nr[3] + nr[160] + nr[531], ab = nr[11] + nr[1] + nr[95], ob = nr[315] + nr[1] + nr[528] + nr[54] + nr[529],
        fb = nr[23] + nr[80] + nr[266] + nr[532] + nr[182] + nr[221] + nr[42] + nr[271], ub = nr[206] + nr[533],
        cb = nr[3] + nr[61] + nr[87] + nr[182] + nr[221], _b = nr[450] + nr[286] + nr[435],
        db = nr[23] + nr[80] + nr[266] + nr[534] + nr[1] + nr[528] + nr[44] + nr[465], lb = nr[535],
        vb = nr[119] + nr[249], bb = nr[24] + nr[27] + nr[536], yb = nr[175] + nr[438] + nr[537],
        gb = nr[304] + nr[100] + nr[538], pb = nr[539], mb = nr[540], xb = nr[541],
        Eb = nr[111] + nr[160] + nr[513] + nr[44] + nr[465], wb = nr[11] + nr[160] + nr[513] + nr[44] + nr[465],
        Tb = nr[542] + nr[23] + nr[543], kb = nr[544] + nr[67] + nr[545] + nr[67] + nr[546] + nr[67] + nr[547],
        Mb = nr[548], Ob = nr[549] + nr[550] + nr[36] + nr[551],
        Sb = nr[552] + nr[67] + nr[553] + nr[67] + nr[554] + nr[67] + nr[555] + nr[67] + nr[556] + nr[67] + nr[557] + nr[67] + nr[558] + nr[67] + nr[559] + nr[67],
        Ib = nr[67] + nr[544] + nr[67] + nr[545] + nr[67] + nr[546] + nr[67] + nr[547],
        Pb = nr[119] + nr[560] + nr[160] + nr[513],
        Ab = nr[561] + nr[23] + nr[543] + nr[23] + nr[562] + nr[23] + nr[563],
        Cb = nr[564] + nr[23] + nr[565] + nr[23] + nr[562], Lb = nr[29] + nr[27] + nr[566],
        Db = nr[23] + nr[80] + nr[81] + nr[567] + nr[182] + nr[568],
        jb = nr[23] + nr[35] + nr[113] + nr[569] + nr[286] + nr[550] + nr[302] + nr[200], Rb = nr[557], Nb = nr[554],
        Bb = nr[141] + nr[80] + nr[79] + nr[460], $b = nr[23] + nr[68] + nr[570] + nr[513],
        Fb = nr[23] + nr[541] + nr[160] + nr[513], Gb = nr[23] + nr[35] + nr[160] + nr[513], zb = nr[35],
        Yb = nr[141] + nr[571] + nr[27] + nr[572] + nr[119] + nr[462],
        qb = nr[141] + nr[35] + nr[44] + nr[573] + nr[27] + nr[572] + nr[42] + nr[470], Hb = nr[574],
        Ub = nr[23] + nr[575] + nr[160] + nr[513], Wb = nr[576] + nr[79], Vb = nr[576],
        Xb = nr[23] + nr[80] + nr[81] + nr[478] + nr[44] + nr[573] + nr[27] + nr[572] + nr[119] + nr[462], Zb = nr[577],
        Kb = nr[141] + nr[578] + nr[119] + nr[560] + nr[160] + nr[513],
        Jb = nr[141] + nr[579] + nr[1] + nr[327] + nr[1] + nr[528], Qb = nr[23] + nr[580],
        ty = nr[141] + nr[80] + nr[81] + nr[478] + nr[1] + nr[581],
        iy = nr[141] + nr[575] + nr[286] + nr[582] + nr[119] + nr[560] + nr[160] + nr[513],
        ny = nr[164] + nr[36] + nr[583], ey = nr[584] + nr[36] + nr[583], sy = nr[23] + nr[212], hy = nr[141] + nr[585],
        ry = nr[586], ay = nr[141] + nr[587], oy = nr[23] + nr[588], fy = nr[589], uy = nr[590], cy = nr[23] + nr[591],
        _y = nr[142] + nr[36] + nr[592], dy = nr[141] + nr[411], ly = nr[23] + nr[593],
        vy = nr[23] + nr[541] + nr[119] + nr[560] + nr[160] + nr[513], by = nr[553],
        yy = nr[141] + nr[575] + nr[44] + nr[573] + nr[27] + nr[572], gy = nr[555],
        py = nr[23] + nr[51] + nr[54] + nr[594] + nr[1] + nr[581], my = nr[556], xy = nr[552], Ey = nr[595],
        wy = nr[596] + nr[54] + nr[597], Ty = nr[598], ky = nr[23] + nr[456], My = nr[599], Oy = nr[23] + nr[516],
        Sy = nr[600], Iy = nr[601] + nr[121], Py = nr[141] + nr[80] + nr[81] + nr[581] + nr[119] + nr[462],
        Ay = nr[141] + nr[602], Cy = nr[603], Ly = nr[580] + nr[79], Dy = nr[580], jy = nr[593] + nr[79], Ry = nr[593],
        Ny = nr[604] + nr[79], By = nr[604], $y = nr[588] + nr[79], Fy = nr[588],
        Gy = nr[23] + nr[605] + nr[27] + nr[445], zy = nr[3] + nr[1] + nr[567] + nr[36] + nr[606],
        Yy = nr[591] + nr[79], qy = nr[591], Hy = nr[23] + nr[607] + nr[36] + nr[608], Uy = nr[3] + nr[54] + nr[184],
        Wy = nr[3] + nr[442], Vy = nr[162] + nr[27] + nr[609],
        Xy = nr[3] + nr[160] + nr[161] + nr[61] + nr[87] + nr[286] + nr[550] + nr[160] + nr[513],
        Zy = nr[3] + nr[610] + nr[87] + nr[286] + nr[550] + nr[160] + nr[513],
        Ky = nr[35] + nr[160] + nr[161] + nr[97] + nr[611], Jy = nr[23] + nr[612] + nr[44] + nr[613],
        Qy = nr[23] + nr[350] + nr[321], tg = nr[23] + nr[614] + nr[182] + nr[615],
        ig = nr[23] + nr[80] + nr[81] + nr[616] + nr[182] + nr[617] + nr[44] + nr[613],
        ng = nr[141] + nr[35] + nr[160] + nr[513], eg = nr[141] + nr[541] + nr[160] + nr[513], sg = nr[618],
        hg = nr[23] + nr[614] + nr[182] + nr[617], rg = nr[23] + nr[575] + nr[121], ag = nr[23] + nr[575] + nr[122],
        og = nr[619], fg = nr[620] + nr[54] + nr[597] + nr[121],
        ug = nr[100] + nr[154] + nr[100] + nr[621] + nr[100] + nr[622],
        cg = nr[100] + nr[154] + nr[100] + nr[621] + nr[100] + nr[623], _g = nr[100] + nr[154] + nr[100] + nr[624],
        dg = nr[100] + nr[154] + nr[100] + nr[625], lg = nr[100] + nr[159] + nr[100] + nr[621] + nr[100] + nr[622],
        vg = nr[100] + nr[159] + nr[100] + nr[621] + nr[100] + nr[623], bg = nr[100] + nr[159] + nr[100] + nr[624],
        yg = nr[100] + nr[159] + nr[100] + nr[625], gg = nr[626], pg = nr[216],
        mg = nr[627] + nr[66] + nr[206] + nr[105] + nr[231] + nr[438] + nr[628] + nr[106] + nr[629] + nr[630] + nr[67] + nr[631] + nr[632] + nr[633] + nr[215] + nr[634] + nr[635] + nr[636] + nr[637] + nr[638] + nr[639] + nr[640] + nr[16] + nr[347] + nr[438] + nr[641] + nr[637] + nr[642] + nr[499] + nr[79] + nr[643] + nr[215] + nr[164] + nr[79] + nr[42] + nr[87] + nr[644] + nr[641] + nr[631] + nr[645] + nr[499] + nr[646] + nr[80] + nr[647] + nr[496] + nr[648] + nr[273] + nr[649] + nr[650] + nr[651] + nr[311] + nr[652] + nr[438] + nr[27] + nr[653] + nr[27] + nr[633] + nr[286] + nr[654] + nr[655] + nr[16] + nr[656] + nr[87] + nr[657] + nr[80] + nr[438] + nr[658] + nr[659] + nr[660] + nr[661] + nr[651] + nr[40] + nr[662] + nr[268] + nr[639] + nr[121] + nr[81] + nr[663] + nr[664] + nr[665] + nr[272] + nr[666] + nr[633] + nr[202] + nr[1] + nr[667] + nr[668] + nr[496] + nr[40] + nr[202] + nr[87] + nr[40] + nr[81] + nr[669] + nr[129] + nr[637] + nr[122] + nr[633] + nr[61] + nr[670] + nr[671] + nr[672] + nr[673] + nr[674] + nr[675] + nr[639] + nr[676] + nr[639] + nr[677] + nr[347] + nr[637] + nr[438] + nr[81] + nr[678] + nr[679] + nr[680] + nr[681] + nr[273] + nr[682] + nr[683] + nr[347] + nr[47] + nr[347] + nr[67] + nr[626],
        xg = nr[684] + nr[15] + nr[472], Eg = nr[23] + nr[80] + nr[81] + nr[685], wg = nr[23] + nr[39] + nr[686],
        Tg = nr[23] + nr[35] + nr[36] + nr[687], kg = nr[23] + nr[80] + nr[81] + nr[664], Mg = nr[23] + nr[688],
        Og = nr[215] + nr[74] + nr[215], Sg = nr[51] + nr[119] + nr[560] + nr[36] + nr[689],
        Ig = nr[395] + nr[97] + nr[117], Pg = nr[97] + nr[117], Ag = nr[160] + nr[513],
        Cg = nr[27] + nr[28] + nr[1] + nr[528] + nr[160] + nr[513], Lg = nr[446] + nr[690], Dg = nr[27] + nr[91],
        jg = nr[36] + nr[691] + nr[286] + nr[435], Rg = nr[51] + nr[286] + nr[692] + nr[129] + nr[130],
        Ng = nr[693] + nr[54] + nr[694], Bg = nr[54] + nr[695] + nr[36] + nr[689], $g = nr[696],
        Fg = nr[111] + nr[697] + nr[108], Gg = nr[698], zg = nr[699], Yg = nr[262] + nr[74] + nr[214], qg = nr[262],
        Hg = nr[429], Ug = nr[700], Wg = nr[700] + nr[74] + nr[446], Vg = nr[700] + nr[74] + nr[30], Xg = nr[701],
        Zg = nr[701] + nr[74] + nr[446], Kg = nr[701] + nr[74] + nr[30],
        Jg = nr[701] + nr[74] + nr[446] + nr[74] + nr[30], Qg = nr[701] + nr[74] + nr[30] + nr[74] + nr[446],
        tp = nr[702] + nr[74] + nr[289], ip = nr[702] + nr[74] + nr[288], np = nr[702] + nr[74] + nr[85],
        ep = nr[702] + nr[74] + nr[84], sp = nr[703], hp = nr[704], rp = nr[705], ap = nr[706], op = nr[707],
        fp = nr[708], up = nr[709], cp = nr[710], _p = nr[711], dp = nr[712], lp = nr[713], vp = nr[714], bp = nr[715],
        yp = nr[716], gp = nr[717], pp = nr[718], mp = nr[719] + nr[74] + nr[720], xp = nr[719] + nr[74] + nr[202],
        Ep = nr[719] + nr[74] + nr[79], wp = nr[719] + nr[74] + nr[345], Tp = nr[719] + nr[74] + nr[81],
        kp = nr[719] + nr[74] + nr[273], Mp = nr[719] + nr[74] + nr[266], Op = nr[719] + nr[74] + nr[346],
        Sp = nr[719] + nr[74] + nr[347], Ip = nr[719] + nr[74] + nr[144],
        Pp = nr[172] + nr[23] + nr[721] + nr[23] + nr[236] + nr[23] + nr[722], Ap = nr[723],
        Cp = nr[172] + nr[23] + nr[721] + nr[23] + nr[236] + nr[23] + nr[378],
        Lp = nr[172] + nr[23] + nr[721] + nr[23] + nr[236] + nr[23] + nr[724], Dp = nr[186],
        jp = nr[172] + nr[23] + nr[725] + nr[23] + nr[236] + nr[23] + nr[378],
        Rp = nr[172] + nr[23] + nr[725] + nr[23] + nr[236] + nr[23] + nr[726], Np = nr[727],
        Bp = nr[358] + nr[23] + nr[382] + nr[23] + nr[236] + nr[23] + nr[728], $p = nr[330], Fp = nr[729],
        Gp = nr[444] + nr[23] + nr[236], zp = nr[444] + nr[23] + nr[236] + nr[23] + nr[730],
        Yp = nr[444] + nr[23] + nr[730] + nr[23] + nr[731], qp = nr[444] + nr[23] + nr[732],
        Hp = nr[343] + nr[23] + nr[181], Up = nr[224] + nr[23] + nr[492] + nr[23] + nr[181],
        Wp = nr[733] + nr[27] + nr[157] + nr[97] + nr[158], Vp = nr[256], Xp = nr[734] + nr[119] + nr[217],
        Zp = nr[735] + nr[1] + nr[736] + nr[119] + nr[217], Kp = nr[737] + nr[1] + nr[736] + nr[119] + nr[217],
        Jp = nr[25] + nr[205] + nr[27] + nr[151] + nr[202], Qp = nr[25] + nr[205] + nr[27] + nr[151] + nr[79],
        tm = nr[224] + nr[23] + nr[173], im = nr[224] + nr[23] + nr[738], nm = nr[739] + nr[1] + nr[740],
        em = nr[492] + nr[23] + nr[741] + nr[23] + nr[742], sm = nr[165] + nr[61] + nr[87] + nr[97] + nr[117],
        hm = nr[23] + nr[743], rm = nr[315] + nr[311] + nr[298],
        am = nr[182] + nr[183] + nr[47] + nr[149] + nr[47] + nr[77] + nr[232], om = nr[23] + nr[290],
        fm = nr[718] + nr[15] + nr[744], um = nr[40] + nr[745], cm = nr[746], _m = nr[747], dm = nr[748],
        lm = nr[23] + nr[88], vm = nr[23] + nr[89], bm = nr[429] + nr[1] + nr[740],
        ym = nr[429] + nr[15] + nr[125] + nr[121], gm = nr[429] + nr[15] + nr[125] + nr[122],
        pm = nr[739] + nr[1] + nr[740] + nr[61] + nr[749] + nr[286] + nr[298], mm = nr[23] + nr[29] + nr[1] + nr[750],
        xm = nr[751] + nr[36] + nr[583], Em = nr[231], wm = nr[149], Tm = nr[331] + nr[182] + nr[183],
        km = nr[0] + nr[182] + nr[183], Mm = nr[3] + nr[40] + nr[688] + nr[182] + nr[752], Om = nr[753], Sm = nr[754],
        Im = nr[755] + nr[23] + nr[236] + nr[23] + nr[756], Pm = nr[755] + nr[23] + nr[236] + nr[23] + nr[245],
        Am = nr[111] + nr[1] + nr[740] + nr[36] + nr[289], Cm = nr[245] + nr[23] + nr[755] + nr[23] + nr[362],
        Lm = nr[756] + nr[23] + nr[755], Dm = nr[757] + nr[23] + nr[245] + nr[23] + nr[755] + nr[23] + nr[362],
        jm = nr[757] + nr[23] + nr[756] + nr[23] + nr[755], Rm = nr[667], Nm = nr[758], Bm = nr[664],
        $m = nr[235] + nr[23] + nr[172] + nr[23] + nr[388], Fm = nr[235] + nr[23] + nr[759] + nr[23] + nr[388],
        Gm = nr[235] + nr[23] + nr[728] + nr[23] + nr[388], zm = nr[235] + nr[23] + nr[760] + nr[23] + nr[388],
        Ym = nr[235] + nr[23] + nr[761], qm = nr[51] + nr[311] + nr[762], Hm = nr[27] + nr[195] + nr[36] + nr[763],
        Um = nr[68] + nr[138], Wm = nr[450] + nr[1] + nr[740], Vm = nr[450] + nr[36] + nr[764] + nr[61] + nr[430],
        Xm = nr[450] + nr[36] + nr[764] + nr[15] + nr[125] + nr[121],
        Zm = nr[450] + nr[36] + nr[764] + nr[15] + nr[125] + nr[122],
        Km = nr[444] + nr[23] + nr[236] + nr[23] + nr[765], Jm = nr[450] + nr[61] + nr[766],
        Qm = nr[450] + nr[119] + nr[292], tx = nr[767] + nr[36] + nr[210], ix = nr[767],
        nx = nr[65] + nr[66] + nr[215] + nr[67] + nr[215] + nr[67] + nr[215] + nr[67] + nr[215] + nr[70],
        ex = nr[179] + nr[1] + nr[740], sx = nr[179] + nr[268] + nr[269],
        hx = nr[208] + nr[42] + nr[768] + nr[1] + nr[740], rx = nr[208] + nr[54] + nr[281] + nr[426] + nr[427],
        ax = nr[23] + nr[769] + nr[36] + nr[166], ox = nr[23] + nr[770] + nr[27] + nr[771] + nr[113] + nr[114],
        fx = nr[23] + nr[770] + nr[27] + nr[771], ux = nr[772], cx = nr[773],
        _x = nr[241] + nr[23] + nr[242] + nr[23] + nr[732] + nr[23] + nr[246], dx = nr[774] + nr[74] + nr[775],
        lx = nr[776] + nr[74] + nr[775], vx = nr[241] + nr[23] + nr[242] + nr[23] + nr[777], bx = nr[778],
        yx = nr[241] + nr[23] + nr[242] + nr[23] + nr[779], gx = nr[601],
        px = nr[241] + nr[23] + nr[242] + nr[23] + nr[780], mx = nr[781], xx = nr[241] + nr[23] + nr[242], Ex = nr[782],
        wx = nr[727] + nr[44] + nr[783], Tx = nr[71] + nr[202] + nr[1] + nr[266] + nr[61] + nr[641] + nr[54],
        kx = nr[71] + nr[784], Mx = nr[71] + nr[785] + nr[160] + nr[347] + nr[61],
        Ox = nr[71] + nr[786] + nr[61] + nr[787], Sx = nr[71] + nr[786] + nr[40] + nr[788],
        Ix = nr[71] + nr[789] + nr[1] + nr[790], Px = nr[71] + nr[791],
        Ax = nr[71] + nr[202] + nr[54] + nr[266] + nr[1] + nr[641] + nr[42], Cx = nr[71] + nr[792] + nr[61] + nr[215],
        Lx = nr[71] + nr[793] + nr[794], Dx = nr[71] + nr[202] + nr[42] + nr[266] + nr[795] + nr[79],
        jx = nr[71] + nr[786] + nr[40] + nr[796], Rx = nr[71] + nr[797],
        Nx = nr[71] + nr[79] + nr[651] + nr[347] + nr[798], Bx = nr[71] + nr[799],
        $x = nr[71] + nr[800] + nr[54] + nr[790], Fx = nr[71] + nr[801],
        Gx = nr[71] + nr[202] + nr[42] + nr[802] + nr[40] + nr[81], zx = nr[71] + nr[803] + nr[804] + nr[79],
        Yx = nr[71] + nr[805] + nr[806], qx = nr[71] + nr[202] + nr[160] + nr[266] + nr[807] + nr[215],
        Hx = nr[71] + nr[808], Ux = nr[71] + nr[16] + nr[346] + nr[16] + nr[347] + nr[16] + nr[347],
        Wx = nr[24] + nr[44] + nr[809] + nr[268] + nr[269], Vx = nr[71] + nr[266] + nr[40] + nr[810],
        Xx = nr[71] + nr[81] + nr[42] + nr[81] + nr[1] + nr[81] + nr[61], Zx = nr[71] + nr[811], Kx = nr[71] + nr[812],
        Jx = nr[71] + nr[266] + nr[42] + nr[266] + nr[160] + nr[266] + nr[42], Qx = nr[71] + nr[81] + nr[1] + nr[813],
        tE = nr[71] + nr[814], iE = nr[71] + nr[346] + nr[54] + nr[346] + nr[54] + nr[346] + nr[54],
        nE = nr[71] + nr[815], eE = nr[71] + nr[816], sE = nr[71] + nr[817],
        hE = nr[71] + nr[641] + nr[160] + nr[641] + nr[54] + nr[641] + nr[54],
        rE = nr[71] + nr[40] + nr[346] + nr[40] + nr[273] + nr[40] + nr[81],
        aE = nr[71] + nr[40] + nr[641] + nr[40] + nr[266] + nr[40] + nr[273],
        oE = nr[71] + nr[40] + nr[346] + nr[40] + nr[81] + nr[40] + nr[345], fE = nr[71] + nr[818],
        uE = nr[71] + nr[160] + nr[641] + nr[819], cE = nr[71] + nr[641] + nr[820] + nr[215] + nr[758] + nr[215],
        _E = nr[71] + nr[497] + nr[641] + nr[821], dE = nr[71] + nr[345] + nr[651] + nr[345] + nr[758] + nr[822],
        lE = nr[71] + nr[61] + nr[79] + nr[823], vE = nr[71] + nr[79] + nr[160] + nr[347] + nr[824],
        bE = nr[71] + nr[825], yE = nr[71] + nr[499] + nr[273] + nr[499] + nr[273] + nr[499] + nr[266],
        gE = nr[405] + nr[100], pE = nr[283], mE = nr[23] + nr[80] + nr[81] + nr[750], xE = nr[23] + nr[826],
        EE = nr[23] + nr[80] + nr[266] + nr[217], wE = nr[23] + nr[80] + nr[266] + nr[827] + nr[182] + nr[183],
        TE = nr[828], kE = nr[33] + nr[61] + nr[829], ME = nr[33], OE = nr[33] + nr[61] + nr[830],
        SE = nr[182] + nr[322] + nr[47] + nr[831] + nr[47] + nr[832] + nr[74], IE = nr[833],
        PE = nr[311] + nr[834] + nr[47] + nr[758] + nr[47] + nr[833] + nr[47] + nr[835] + nr[74],
        AE = nr[33] + nr[302] + nr[836], CE = nr[837] + nr[42] + nr[271], LE = nr[838], DE = nr[774] + nr[97] + nr[839],
        jE = nr[840], RE = nr[841] + nr[1] + nr[740], NE = nr[769] + nr[40] + nr[842] + nr[97] + nr[158], BE = nr[843],
        $E = nr[474] + nr[182] + nr[844], FE = nr[282] + nr[268] + nr[845], GE = nr[846], zE = nr[847],
        YE = nr[848] + nr[446] + nr[849], qE = nr[850], HE = nr[851], UE = nr[852], WE = nr[853],
        VE = nr[137] + nr[119] + nr[292], XE = nr[854], ZE = nr[855], KE = nr[856], JE = nr[857],
        QE = nr[858] + nr[42] + nr[271], tw = nr[858] + nr[36] + nr[166],
        iw = nr[859] + nr[286] + nr[622] + nr[1] + nr[298] + nr[36] + nr[166], nw = nr[860], ew = nr[137], sw = nr[861],
        hw = nr[302] + nr[862] + nr[47] + nr[863] + nr[506] + nr[215] + nr[86], rw = nr[864], aw = nr[558],
        ow = nr[838] + nr[129] + nr[130], fw = nr[865] + nr[129] + nr[130], uw = nr[866] + nr[1] + nr[298],
        cw = nr[178] + nr[30] + nr[867] + nr[232], _w = nr[868],
        dw = nr[178] + nr[27] + nr[869] + nr[47] + nr[54] + nr[870] + nr[232], lw = nr[871] + nr[54] + nr[870],
        vw = nr[872], bw = nr[873],
        yw = nr[16] + nr[874] + nr[499] + nr[81] + nr[651] + nr[875] + nr[876] + nr[346] + nr[758] + nr[877] + nr[651] + nr[878] + nr[497] + nr[345] + nr[879] + nr[641] + nr[880] + nr[881] + nr[882] + nr[883] + nr[884] + nr[215] + nr[499] + nr[273] + nr[16] + nr[885] + nr[758] + nr[886] + nr[887] + nr[888] + nr[497] + nr[889] + nr[890] + nr[345] + nr[891] + nr[215] + nr[892] + nr[893] + nr[499] + nr[894] + nr[895] + nr[896] + nr[897] + nr[345] + nr[651] + nr[898] + nr[16] + nr[899] + nr[900] + nr[266] + nr[499] + nr[901] + nr[16] + nr[902] + nr[903] + nr[641] + nr[904] + nr[905] + nr[16] + nr[641] + nr[497] + nr[273] + nr[164] + nr[202] + nr[651] + nr[81] + nr[651] + nr[906] + nr[499] + nr[79] + nr[164] + nr[888] + nr[907] + nr[347] + nr[164] + nr[345] + nr[651] + nr[67] + nr[908] + nr[202] + nr[758] + nr[909] + nr[164] + nr[910] + nr[758] + nr[911] + nr[16] + nr[912] + nr[887] + nr[913] + nr[914] + nr[915] + nr[916] + nr[81] + nr[917] + nr[918] + nr[919] + nr[920] + nr[758] + nr[346] + nr[921] + nr[345] + nr[497] + nr[215] + nr[922] + nr[923] + nr[924] + nr[925] + nr[651] + nr[926] + nr[927] + nr[215] + nr[497] + nr[928] + nr[929] + nr[930] + nr[908] + nr[931] + nr[932] + nr[933] + nr[497] + nr[215] + nr[934] + nr[935] + nr[936] + nr[937] + nr[497] + nr[938] + nr[939] + nr[641] + nr[499] + nr[940] + nr[497] + nr[941] + nr[942] + nr[266] + nr[943] + nr[944] + nr[758] + nr[945] + nr[651] + nr[202] + nr[946] + nr[947] + nr[948] + nr[347] + nr[497] + nr[949] + nr[651] + nr[950] + nr[942] + nr[67] + nr[347] + nr[951] + nr[641] + nr[16] + nr[79] + nr[16] + nr[952] + nr[651] + nr[953] + nr[897] + nr[954] + nr[895] + nr[202] + nr[497] + nr[955] + nr[651] + nr[81] + nr[956] + nr[957] + nr[164] + nr[958] + nr[959] + nr[960] + nr[961] + nr[962] + nr[963] + nr[964] + nr[499] + nr[641] + nr[907] + nr[822] + nr[497] + nr[965] + nr[16] + nr[966] + nr[499] + nr[273] + nr[96] + nr[967] + nr[651] + nr[968] + nr[16] + nr[969] + nr[758] + nr[345] + nr[497] + nr[641] + nr[758] + nr[970] + nr[971] + nr[972] + nr[758] + nr[973] + nr[758] + nr[974] + nr[975] + nr[976] + nr[977] + nr[978] + nr[497] + nr[979] + nr[497] + nr[980] + nr[499] + nr[347] + nr[499] + nr[981] + nr[890] + nr[982] + nr[497] + nr[345] + nr[164] + nr[983] + nr[904] + nr[947] + nr[16],
        gw = nr[178] + nr[44] + nr[984] + nr[47] + nr[68] + nr[506],
        pw = nr[423] + nr[434] + nr[985] + nr[423] + nr[345] + nr[40] + nr[423] + nr[434] + nr[986] + nr[74] + nr[304] + nr[74] + nr[855] + nr[423] + nr[79] + nr[1] + nr[987] + nr[74] + nr[304] + nr[74] + nr[855] + nr[423] + nr[79] + nr[1] + nr[988] + nr[74] + nr[304] + nr[74] + nr[855],
        mw = nr[989], xw = nr[990], Ew = nr[991], ww = nr[165] + nr[119], Tw = nr[992], kw = nr[346] + nr[74],
        Mw = nr[948], Ow = nr[82], Sw = nr[993], Iw = nr[1] + nr[308], Pw = nr[97] + nr[994], Aw = nr[1] + nr[995],
        Cw = nr[996], Lw = nr[997], Dw = nr[998], jw = nr[999], Rw = nr[1e3], Nw = nr[1001], Bw = nr[1002],
        $w = nr[1003], Fw = nr[477], Gw = nr[1004], zw = nr[1005], Yw = nr[405] + nr[532],
        qw = nr[47] + nr[313] + nr[47] + nr[1006] + nr[273], Hw = nr[1007], Uw = nr[1008],
        Ww = nr[1009] + nr[113] + nr[569], Vw = nr[1010], Xw = nr[1011] + nr[74] + nr[888] + nr[74] + nr[202],
        Zw = nr[36] + nr[502], Kw = nr[1012], Jw = nr[160] + nr[161], Qw = nr[312], tT = nr[1013],
        iT = nr[1014] + nr[113] + nr[569], nT = nr[1015], eT = nr[137] + nr[79] + nr[54],
        sT = nr[496] + nr[119] + nr[137], hT = nr[1016], rT = nr[215] + nr[47] + nr[215],
        aT = nr[405] + nr[100] + nr[1] + nr[308], oT = nr[405] + nr[100] + nr[1] + nr[308] + nr[27] + nr[609],
        fT = nr[405] + nr[100] + nr[268] + nr[406], uT = nr[23] + nr[80] + nr[266] + nr[633],
        cT = nr[165] + nr[27] + nr[522], _T = nr[23] + nr[1017] + nr[321], dT = nr[261],
        lT = nr[23] + nr[80] + nr[266] + nr[532], vT = nr[1018], bT = nr[1019], yT = nr[23] + nr[1020] + nr[686],
        gT = nr[23] + nr[80] + nr[81] + nr[497], pT = nr[23] + nr[80] + nr[266] + nr[86],
        mT = nr[227] + nr[97] + nr[1021], xT = nr[23] + nr[80] + nr[79] + nr[498], ET = nr[23] + nr[1019],
        wT = nr[23] + nr[80] + nr[1022], TT = nr[23] + nr[1023] + nr[44] + nr[45],
        kT = nr[23] + nr[80] + nr[79] + nr[164], MT = nr[664] + nr[182] + nr[221], OT = nr[1024] + nr[61] + nr[534],
        ST = nr[23] + nr[80] + nr[81] + nr[1025], IT = nr[23] + nr[80] + nr[266] + nr[1026],
        PT = nr[23] + nr[80] + nr[266] + nr[532] + nr[1] + nr[308] + nr[36] + nr[166] + nr[42] + nr[271],
        AT = nr[1027] + nr[119] + nr[249], CT = nr[23] + nr[80] + nr[81] + nr[567] + nr[286] + nr[1028],
        LT = nr[1029] + nr[286] + nr[1028], DT = nr[1030],
        jT = nr[141] + nr[80] + nr[81] + nr[1031] + nr[286] + nr[1028], RT = nr[1030] + nr[66], NT = nr[1032],
        BT = nr[141] + nr[631] + nr[79], $T = nr[1033],
        FT = nr[3] + nr[160] + nr[161] + nr[61] + nr[87] + nr[182] + nr[164], GT = nr[23] + nr[80] + nr[79] + nr[16],
        zT = nr[1034] + nr[160] + nr[161], YT = nr[1035] + nr[182] + nr[221], qT = nr[443] + nr[182] + nr[164],
        HT = nr[141] + nr[1036], UT = nr[23] + nr[80] + nr[266] + nr[532] + nr[61] + nr[193] + nr[42] + nr[271],
        WT = nr[23] + nr[80] + nr[81] + nr[651], VT = nr[68] + nr[44] + nr[1037], XT = nr[171] + nr[119] + nr[217],
        ZT = nr[23] + nr[80] + nr[1038], KT = nr[112] + nr[446] + nr[447],
        JT = nr[3] + nr[268] + nr[1039] + nr[61] + nr[193], QT = nr[23] + nr[1019] + nr[1] + nr[1040],
        tk = nr[162] + nr[61] + nr[193], ik = nr[23] + nr[68] + nr[182] + nr[1041] + nr[97] + nr[117],
        nk = nr[424] + nr[23] + nr[1042], ek = nr[1043] + nr[74] + nr[574], sk = nr[1043] + nr[74] + nr[1044],
        hk = nr[424] + nr[23] + nr[236], rk = nr[424] + nr[23] + nr[1045], ak = nr[23] + nr[1046],
        ok = nr[23] + nr[289] + nr[1] + nr[308], fk = nr[23] + nr[1047],
        uk = nr[23] + nr[631] + nr[79] + nr[42] + nr[1048], ck = nr[51] + nr[61] + nr[318] + nr[160] + nr[402],
        _k = nr[23] + nr[266] + nr[667], dk = nr[313] + nr[160] + nr[314] + nr[97] + nr[441],
        lk = nr[23] + nr[345] + nr[200], vk = nr[23] + nr[1049] + nr[40] + nr[1050],
        bk = nr[1049] + nr[40] + nr[237] + nr[1] + nr[1051], yk = nr[23] + nr[1052],
        gk = nr[23] + nr[347] + nr[272] + nr[1] + nr[481], pk = nr[1053] + nr[74] + nr[191],
        mk = nr[23] + nr[1019] + nr[1] + nr[481], xk = nr[25] + nr[206], Ek = nr[141] + nr[81] + nr[217],
        wk = nr[141] + nr[1017], Tk = nr[739] + nr[36] + nr[583], kk = nr[68] + nr[1] + nr[308], Mk = nr[1054],
        Ok = nr[261] + nr[97] + nr[1055], Sk = nr[443] + nr[1] + nr[1056],
        Ik = nr[1057] + nr[36] + nr[1058] + nr[311] + nr[1059], Pk = nr[261] + nr[30] + nr[1060], Ak = nr[1061],
        Ck = nr[35] + nr[27] + nr[28] + nr[1] + nr[528], Lk = nr[261] + nr[54] + nr[184],
        Dk = nr[23] + nr[80] + nr[266] + nr[651], jk = nr[23] + nr[80] + nr[81] + nr[633],
        Rk = nr[190] + nr[160] + nr[317] + nr[61] + nr[318], Nk = nr[141] + nr[1062], Bk = nr[0] + nr[160] + nr[317],
        $k = nr[3] + nr[182] + nr[221] + nr[61] + nr[87] + nr[182] + nr[164], Fk = nr[442] + nr[533],
        Gk = nr[133] + nr[482] + nr[47] + nr[1063], zk = nr[165] + nr[182] + nr[221] + nr[61] + nr[1064],
        Yk = nr[23] + nr[1065] + nr[286] + nr[435], qk = nr[1066], Hk = nr[23] + nr[80] + nr[266] + nr[1067] + nr[286],
        Uk = nr[23] + nr[1068] + nr[61] + nr[193], Wk = nr[353] + nr[119] + nr[292], Vk = nr[25] + nr[226],
        Xk = nr[443], Zk = nr[23] + nr[80] + nr[874], Kk = nr[354] + nr[442] + nr[321],
        Jk = nr[405] + nr[74] + nr[160] + nr[161], Qk = nr[1069], tM = nr[247] + nr[36] + nr[1070], iM = nr[1071],
        nM = nr[405] + nr[74] + nr[160] + nr[317], eM = nr[23] + nr[80] + nr[81] + nr[164], sM = nr[1072],
        hM = nr[401] + nr[160] + nr[402], rM = nr[1073] + nr[74] + nr[1074],
        aM = nr[11] + nr[27] + nr[195] + nr[36] + nr[763], oM = nr[1075] + nr[27] + nr[195] + nr[1] + nr[528],
        fM = nr[68], uM = nr[25] + nr[231], cM = nr[405] + nr[100] + nr[488], _M = nr[25] + nr[1076],
        dM = nr[0] + nr[44] + nr[1077], lM = nr[23] + nr[80] + nr[81] + nr[639], vM = nr[1076], bM = nr[259],
        yM = nr[68] + nr[42] + nr[325], gM = nr[23] + nr[259], pM = nr[405] + nr[74] + nr[311] + nr[298],
        mM = nr[1078] + nr[74] + nr[111], xM = nr[1078] + nr[74] + nr[11], EM = nr[265] + nr[27] + nr[91],
        wM = nr[1073], TM = nr[1079] + nr[23] + nr[1080], kM = nr[343] + nr[23] + nr[388],
        MM = nr[405] + nr[74] + nr[36] + nr[274] + nr[311] + nr[298], OM = nr[1081], SM = nr[1082],
        IM = nr[405] + nr[74] + nr[61] + nr[1083], PM = nr[466] + nr[36] + nr[1058] + nr[311] + nr[1059],
        AM = nr[1084] + nr[23] + nr[236], CM = nr[1084] + nr[23] + nr[1085], LM = nr[261] + nr[42] + nr[271],
        DM = nr[25] + nr[1086] + nr[119] + nr[292], jM = nr[25] + nr[1087], RM = nr[1084] + nr[23] + nr[1088],
        NM = nr[1086], BM = nr[1084] + nr[23] + nr[1089] + nr[23] + nr[181], $M = nr[405] + nr[74] + nr[268] + nr[1090],
        FM = nr[468] + nr[36] + nr[166], GM = nr[1086] + nr[119] + nr[292], zM = nr[1087],
        YM = nr[1086] + nr[182] + nr[183], qM = nr[405] + nr[74] + nr[119] + nr[137], HM = nr[119] + nr[137],
        UM = nr[71] + nr[1091], WM = nr[25] + nr[265] + nr[27] + nr[151], VM = nr[179] + nr[97] + nr[117],
        XM = nr[1092] + nr[36] + nr[691], ZM = nr[1092] + nr[36] + nr[691] + nr[36] + nr[1070], KM = nr[25] + nr[1093],
        JM = nr[1068] + nr[40] + nr[1094], QM = nr[256] + nr[121], tO = nr[256] + nr[122],
        iO = nr[444] + nr[23] + nr[236] + nr[23] + nr[765] + nr[23] + nr[334], nO = nr[23] + nr[1095],
        eO = nr[262] + nr[44] + nr[280] + nr[54] + nr[281],
        sO = nr[262] + nr[44] + nr[280] + nr[54] + nr[281] + nr[15] + nr[125], hO = nr[25] + nr[261] + nr[54] + nr[184],
        rO = nr[449], aO = nr[190] + nr[36] + nr[166], oO = nr[35] + nr[61] + nr[193] + nr[1] + nr[481],
        fO = nr[25] + nr[261] + nr[44] + nr[233], uO = nr[25] + nr[261] + nr[30] + nr[1060],
        cO = nr[25] + nr[1096] + nr[160] + nr[485], _O = nr[1097], dO = nr[1098] + nr[30] + nr[1099],
        lO = nr[25] + nr[1100] + nr[1] + nr[740], vO = nr[25] + nr[1100] + nr[268] + nr[269],
        bO = nr[1098] + nr[446] + nr[1101] + nr[119] + nr[397], yO = nr[35] + nr[54] + nr[184] + nr[1] + nr[481],
        gO = nr[23] + nr[80] + nr[79] + nr[637], pO = nr[30] + nr[1060], mO = nr[44] + nr[233],
        xO = nr[40] + nr[255] + nr[27] + nr[151], EO = nr[36] + nr[166], wO = nr[765] + nr[23] + nr[376],
        TO = nr[61] + nr[267] + nr[268] + nr[269], kO = nr[444] + nr[23] + nr[765], MO = nr[97] + nr[260],
        OO = nr[54] + nr[184], SO = nr[356] + nr[23] + nr[236] + nr[23] + nr[1102], IO = nr[450] + nr[74] + nr[774],
        PO = nr[450] + nr[74] + nr[262], AO = nr[444] + nr[23] + nr[730] + nr[23] + nr[1103] + nr[23] + nr[122],
        CO = nr[450] + nr[74] + nr[198], LO = nr[739] + nr[74] + nr[774],
        DO = nr[1104] + nr[23] + nr[732] + nr[23] + nr[241] + nr[23] + nr[242], jO = nr[1105], RO = nr[1093],
        NO = nr[730] + nr[23] + nr[731], BO = nr[429] + nr[74] + nr[1106], $O = nr[730] + nr[23] + nr[732],
        FO = nr[429] + nr[74] + nr[774], GO = nr[730] + nr[23] + nr[1103] + nr[23] + nr[121],
        zO = nr[429] + nr[74] + nr[256] + nr[74] + nr[86], YO = nr[730] + nr[23] + nr[1103] + nr[23] + nr[122],
        qO = nr[429] + nr[74] + nr[256] + nr[74] + nr[87], HO = nr[332] + nr[23] + nr[1107],
        UO = nr[1108] + nr[74] + nr[209], WO = nr[1108] + nr[74] + nr[209] + nr[74] + nr[104],
        VO = nr[332] + nr[23] + nr[172] + nr[23] + nr[1109] + nr[23] + nr[732],
        XO = nr[1108] + nr[74] + nr[208] + nr[74] + nr[1110],
        ZO = nr[332] + nr[23] + nr[172] + nr[23] + nr[1111] + nr[23] + nr[1103],
        KO = nr[332] + nr[23] + nr[1109] + nr[23] + nr[732], JO = nr[1108] + nr[74] + nr[179] + nr[74] + nr[774],
        QO = nr[332] + nr[23] + nr[1109] + nr[23] + nr[755], tS = nr[1108] + nr[74] + nr[179] + nr[74] + nr[1112],
        iS = nr[332] + nr[23] + nr[1113], nS = nr[1108] + nr[74] + nr[767],
        eS = nr[332] + nr[23] + nr[1113] + nr[23] + nr[168], sS = nr[1108] + nr[74] + nr[767] + nr[74] + nr[104],
        hS = nr[1114] + nr[23] + nr[1115] + nr[23] + nr[1116], rS = nr[254] + nr[74] + nr[93] + nr[74] + nr[1073],
        aS = nr[1117] + nr[23] + nr[732], oS = nr[1100] + nr[74] + nr[774], fS = nr[1117] + nr[23] + nr[755],
        uS = nr[1100] + nr[74] + nr[1112], cS = nr[262] + nr[74] + nr[88], _S = nr[765] + nr[23] + nr[732],
        dS = nr[262] + nr[74] + nr[774], lS = nr[765] + nr[23] + nr[172] + nr[23] + nr[1111],
        vS = nr[262] + nr[74] + nr[208] + nr[74] + nr[1110],
        bS = nr[765] + nr[23] + nr[172] + nr[23] + nr[1111] + nr[23] + nr[1103], yS = nr[262] + nr[74] + nr[503],
        gS = nr[1088], pS = nr[172] + nr[23] + nr[721], mS = nr[208] + nr[74] + nr[1118],
        xS = nr[172] + nr[23] + nr[725], ES = nr[208] + nr[74] + nr[1032],
        wS = nr[172] + nr[23] + nr[1111] + nr[23] + nr[721], TS = nr[208] + nr[74] + nr[1110] + nr[74] + nr[1118],
        kS = nr[172] + nr[23] + nr[1111] + nr[23] + nr[725], MS = nr[208] + nr[74] + nr[1110] + nr[74] + nr[1032],
        OS = nr[224] + nr[23] + nr[1117] + nr[23] + nr[732], SS = nr[224] + nr[23] + nr[1117] + nr[23] + nr[755],
        IS = nr[231] + nr[74] + nr[262] + nr[74] + nr[88], PS = nr[224] + nr[23] + nr[765] + nr[23] + nr[168],
        AS = nr[224] + nr[23] + nr[765] + nr[23] + nr[732], CS = nr[231] + nr[74] + nr[262] + nr[74] + nr[104],
        LS = nr[224] + nr[23] + nr[765] + nr[23] + nr[172] + nr[23] + nr[1111],
        DS = nr[224] + nr[23] + nr[765] + nr[23] + nr[376], jS = nr[231] + nr[74] + nr[503],
        RS = nr[231] + nr[74] + nr[1087], NS = nr[224] + nr[23] + nr[643] + nr[23] + nr[520],
        BS = nr[231] + nr[74] + nr[664] + nr[74] + nr[14], $S = nr[231] + nr[74] + nr[1119],
        FS = nr[231] + nr[74] + nr[1093], GS = nr[1120] + nr[23] + nr[1121], zS = nr[1122] + nr[74] + nr[199],
        YS = nr[1120] + nr[23] + nr[1123], qS = nr[1122] + nr[74] + nr[279], HS = nr[1122] + nr[74] + nr[1033],
        US = nr[1120] + nr[23] + nr[1124] + nr[23] + nr[1123], WS = nr[1120] + nr[23] + nr[732],
        VS = nr[1122] + nr[74] + nr[774], XS = nr[1120] + nr[23] + nr[167] + nr[23] + nr[181],
        ZS = nr[1122] + nr[74] + nr[174] + nr[74] + nr[1018], KS = nr[1120] + nr[23] + nr[167] + nr[23] + nr[169],
        JS = nr[1122] + nr[74] + nr[174] + nr[74] + nr[1125], QS = nr[1120] + nr[23] + nr[167] + nr[23] + nr[168],
        tI = nr[1122] + nr[74] + nr[174] + nr[74] + nr[104], iI = nr[1120] + nr[23] + nr[1088],
        nI = nr[1122] + nr[74] + nr[1087], eI = nr[1120] + nr[23] + nr[1126] + nr[23] + nr[225],
        sI = nr[1122] + nr[74] + nr[264] + nr[74] + nr[88], hI = nr[1120] + nr[23] + nr[1126],
        rI = nr[1122] + nr[74] + nr[264], aI = nr[1120] + nr[23] + nr[376], oI = nr[1122] + nr[74] + nr[503],
        fI = nr[1120] + nr[23] + nr[1103] + nr[23] + nr[121], uI = nr[1122] + nr[74] + nr[256] + nr[74] + nr[86],
        cI = nr[1122] + nr[74] + nr[256] + nr[74] + nr[87], _I = nr[1120] + nr[23] + nr[181],
        dI = nr[1122] + nr[74] + nr[1018], lI = nr[1122] + nr[74] + nr[1127] + nr[74] + nr[279],
        vI = nr[1122] + nr[74] + nr[262], bI = nr[1120] + nr[23] + nr[765] + nr[23] + nr[168],
        yI = nr[1122] + nr[74] + nr[262] + nr[74] + nr[104], gI = nr[1120] + nr[23] + nr[1117] + nr[23] + nr[755],
        pI = nr[1120] + nr[23] + nr[1128], mI = nr[1122] + nr[74] + nr[257],
        xI = nr[1122] + nr[74] + nr[429] + nr[74] + nr[1106], EI = nr[1120] + nr[23] + nr[730] + nr[23] + nr[732],
        wI = nr[1122] + nr[74] + nr[429] + nr[74] + nr[774],
        TI = nr[1120] + nr[23] + nr[730] + nr[23] + nr[1103] + nr[23] + nr[121],
        kI = nr[1120] + nr[23] + nr[643] + nr[23] + nr[520], MI = nr[1122] + nr[74] + nr[664] + nr[74] + nr[14],
        OI = nr[1120] + nr[23] + nr[1129] + nr[23] + nr[366], SI = nr[1122] + nr[74] + nr[35] + nr[74] + nr[289],
        II = nr[1084] + nr[23] + nr[376], PI = nr[1086] + nr[74] + nr[503], AI = nr[1084] + nr[23] + nr[1107],
        CI = nr[1086] + nr[74] + nr[209], LI = nr[1084] + nr[23] + nr[1107] + nr[23] + nr[168],
        DI = nr[1086] + nr[74] + nr[209] + nr[74] + nr[774],
        jI = nr[1084] + nr[23] + nr[1107] + nr[23] + nr[172] + nr[23] + nr[1111] + nr[23] + nr[1103],
        RI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1121],
        NI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1123],
        BI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[732],
        $I = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[167] + nr[23] + nr[181],
        FI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[167] + nr[23] + nr[169],
        GI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1126] + nr[23] + nr[225],
        zI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1126],
        YI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[376],
        qI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1103] + nr[23] + nr[121],
        HI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[765] + nr[23] + nr[168],
        UI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1117] + nr[23] + nr[732],
        WI = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1128], VI = nr[358] + nr[23] + nr[225],
        XI = nr[349] + nr[74] + nr[88], ZI = nr[358] + nr[23] + nr[732], KI = nr[349] + nr[74] + nr[774],
        JI = nr[358] + nr[23] + nr[1113], QI = nr[349] + nr[74] + nr[767],
        tP = nr[358] + nr[23] + nr[1113] + nr[23] + nr[168], iP = nr[349] + nr[74] + nr[767] + nr[74] + nr[104],
        nP = nr[358] + nr[23] + nr[172] + nr[23] + nr[1111], eP = nr[349] + nr[74] + nr[208] + nr[74] + nr[1110],
        sP = nr[358] + nr[23] + nr[386] + nr[23] + nr[1103], hP = nr[349] + nr[74] + nr[299] + nr[74] + nr[256],
        rP = nr[349] + nr[74] + nr[68] + nr[74] + nr[256], aP = nr[349] + nr[74] + nr[179] + nr[74] + nr[774],
        oP = nr[349] + nr[74] + nr[401] + nr[74] + nr[198], fP = nr[358] + nr[23] + nr[382] + nr[23] + nr[1130],
        uP = nr[349] + nr[74] + nr[401] + nr[74] + nr[1131], cP = nr[349] + nr[74] + nr[1132] + nr[74] + nr[1133],
        _P = nr[349] + nr[74] + nr[702], dP = nr[349] + nr[74] + nr[1134] + nr[74] + nr[1135],
        lP = nr[358] + nr[23] + nr[368] + nr[23] + nr[1115] + nr[23] + nr[369],
        vP = nr[349] + nr[74] + nr[46] + nr[74] + nr[1136], bP = nr[349] + nr[74] + nr[46] + nr[74] + nr[32],
        yP = nr[349] + nr[74] + nr[1137], gP = nr[349] + nr[74] + nr[1137] + nr[74] + nr[503],
        pP = nr[358] + nr[23] + nr[386] + nr[23] + nr[1138] + nr[23] + nr[358],
        mP = nr[349] + nr[74] + nr[299] + nr[74] + nr[1139] + nr[74] + nr[349],
        xP = nr[349] + nr[74] + nr[68] + nr[74] + nr[1139] + nr[74] + nr[349],
        EP = nr[349] + nr[74] + nr[299] + nr[74] + nr[1140], wP = nr[349] + nr[74] + nr[68] + nr[74] + nr[1140],
        TP = nr[343] + nr[23] + nr[386], kP = nr[719] + nr[74] + nr[299],
        MP = nr[343] + nr[23] + nr[386] + nr[23] + nr[181], OP = nr[719] + nr[74] + nr[299] + nr[74] + nr[1018],
        SP = nr[343] + nr[23] + nr[386] + nr[23] + nr[1103], IP = nr[719] + nr[74] + nr[299] + nr[74] + nr[256],
        PP = nr[719] + nr[74] + nr[299] + nr[74] + nr[209],
        AP = nr[343] + nr[23] + nr[386] + nr[23] + nr[1107] + nr[23] + nr[168],
        CP = nr[719] + nr[74] + nr[299] + nr[74] + nr[767],
        LP = nr[343] + nr[23] + nr[386] + nr[23] + nr[1113] + nr[23] + nr[168],
        DP = nr[343] + nr[23] + nr[386] + nr[23] + nr[172] + nr[23] + nr[1111],
        jP = nr[719] + nr[74] + nr[299] + nr[74] + nr[208] + nr[74] + nr[1110],
        RP = nr[343] + nr[23] + nr[386] + nr[23] + nr[172] + nr[23] + nr[1111] + nr[23] + nr[1103],
        NP = nr[343] + nr[23] + nr[386] + nr[23] + nr[1109] + nr[23] + nr[755],
        BP = nr[343] + nr[23] + nr[386] + nr[23] + nr[172] + nr[23] + nr[721],
        $P = nr[719] + nr[74] + nr[299] + nr[74] + nr[208] + nr[74] + nr[1118],
        FP = nr[343] + nr[23] + nr[386] + nr[23] + nr[172] + nr[23] + nr[725],
        GP = nr[719] + nr[74] + nr[299] + nr[74] + nr[208] + nr[74] + nr[1032], zP = nr[719] + nr[74] + nr[68],
        YP = nr[343] + nr[23] + nr[388] + nr[23] + nr[181], qP = nr[719] + nr[74] + nr[68] + nr[74] + nr[1018],
        HP = nr[343] + nr[23] + nr[388] + nr[23] + nr[1103], UP = nr[719] + nr[74] + nr[68] + nr[74] + nr[256],
        WP = nr[343] + nr[23] + nr[388] + nr[23] + nr[1107], VP = nr[719] + nr[74] + nr[68] + nr[74] + nr[209],
        XP = nr[343] + nr[23] + nr[388] + nr[23] + nr[1107] + nr[23] + nr[168],
        ZP = nr[343] + nr[23] + nr[388] + nr[23] + nr[1113], KP = nr[719] + nr[74] + nr[68] + nr[74] + nr[767],
        JP = nr[343] + nr[23] + nr[388] + nr[23] + nr[172] + nr[23] + nr[1111],
        QP = nr[719] + nr[74] + nr[68] + nr[74] + nr[208] + nr[74] + nr[1110],
        tA = nr[343] + nr[23] + nr[388] + nr[23] + nr[172] + nr[23] + nr[1111] + nr[23] + nr[1103],
        iA = nr[343] + nr[23] + nr[388] + nr[23] + nr[1109] + nr[23] + nr[732],
        nA = nr[719] + nr[74] + nr[68] + nr[74] + nr[179] + nr[74] + nr[774],
        eA = nr[343] + nr[23] + nr[388] + nr[23] + nr[1109] + nr[23] + nr[755],
        sA = nr[343] + nr[23] + nr[388] + nr[23] + nr[172] + nr[23] + nr[721],
        hA = nr[719] + nr[74] + nr[68] + nr[74] + nr[208] + nr[74] + nr[1118],
        rA = nr[719] + nr[74] + nr[68] + nr[74] + nr[208] + nr[74] + nr[1032], aA = nr[1122],
        oA = nr[1120] + nr[23] + nr[1141], fA = nr[774], uA = nr[262] + nr[1] + nr[740],
        cA = nr[1120] + nr[23] + nr[1117] + nr[23] + nr[732], _A = nr[1100] + nr[1] + nr[740],
        dA = nr[1096] + nr[15] + nr[80] + nr[119] + nr[1142], lA = nr[1120] + nr[23] + nr[1143] + nr[23] + nr[1123],
        vA = nr[1127] + nr[27] + nr[91], bA = nr[264] + nr[113] + nr[114], yA = nr[1096] + nr[27] + nr[276],
        gA = nr[262] + nr[97] + nr[277], pA = nr[1120] + nr[23] + nr[1103] + nr[23] + nr[122], mA = nr[257],
        xA = nr[1100] + nr[268] + nr[269], EA = nr[1120] + nr[23] + nr[730] + nr[23] + nr[731],
        wA = nr[1120] + nr[23] + nr[730] + nr[23] + nr[1103] + nr[23] + nr[122], TA = nr[1104] + nr[23] + nr[732],
        kA = nr[23] + nr[79] + nr[272], MA = nr[765], OA = nr[23] + nr[80] + nr[81] + nr[658],
        SA = nr[332] + nr[23] + nr[1107] + nr[23] + nr[168], IA = nr[1119] + nr[119] + nr[292],
        PA = nr[332] + nr[23] + nr[172] + nr[23] + nr[1111], AA = nr[224] + nr[23] + nr[1088],
        CA = nr[224] + nr[23] + nr[765], LA = nr[1144] + nr[61] + nr[1145], DA = nr[23] + nr[273] + nr[484],
        jA = nr[1108], RA = nr[1084] + nr[23] + nr[1107] + nr[23] + nr[172] + nr[23] + nr[1111],
        NA = nr[23] + nr[81] + nr[217], BA = nr[299] + nr[40] + nr[1146], $A = nr[68] + nr[40] + nr[1146],
        FA = nr[208] + nr[54] + nr[281] + nr[1] + nr[425],
        GA = nr[358] + nr[23] + nr[388] + nr[23] + nr[1138] + nr[23] + nr[358],
        zA = nr[358] + nr[23] + nr[172] + nr[23] + nr[1111] + nr[23] + nr[1103],
        YA = nr[299] + nr[40] + nr[1146] + nr[36] + nr[166], qA = nr[299] + nr[40] + nr[1146] + nr[15] + nr[125],
        HA = nr[343] + nr[23] + nr[386] + nr[23] + nr[1107], UA = nr[299] + nr[40] + nr[1146] + nr[36] + nr[194],
        WA = nr[299] + nr[40] + nr[1146] + nr[36] + nr[194] + nr[36] + nr[210],
        VA = nr[343] + nr[23] + nr[386] + nr[23] + nr[1113], XA = nr[299] + nr[40] + nr[1146] + nr[15] + nr[1147],
        ZA = nr[343] + nr[23] + nr[386] + nr[23] + nr[1109] + nr[23] + nr[732],
        KA = nr[299] + nr[40] + nr[1146] + nr[42] + nr[768] + nr[1] + nr[740],
        JA = nr[299] + nr[40] + nr[1146] + nr[44] + nr[280] + nr[54] + nr[281],
        QA = nr[299] + nr[40] + nr[1146] + nr[44] + nr[280] + nr[426] + nr[427],
        tC = nr[299] + nr[40] + nr[1146] + nr[44] + nr[280] + nr[1] + nr[425],
        iC = nr[68] + nr[40] + nr[1146] + nr[36] + nr[166], nC = nr[68] + nr[40] + nr[1146] + nr[15] + nr[125],
        eC = nr[68] + nr[40] + nr[1146] + nr[36] + nr[194],
        sC = nr[68] + nr[40] + nr[1146] + nr[36] + nr[194] + nr[36] + nr[210],
        hC = nr[68] + nr[40] + nr[1146] + nr[15] + nr[1147],
        rC = nr[343] + nr[23] + nr[388] + nr[23] + nr[1113] + nr[23] + nr[168],
        aC = nr[68] + nr[40] + nr[1146] + nr[15] + nr[1147] + nr[36] + nr[210],
        oC = nr[68] + nr[40] + nr[1146] + nr[42] + nr[768] + nr[1] + nr[740],
        fC = nr[68] + nr[40] + nr[1146] + nr[42] + nr[768] + nr[268] + nr[269],
        uC = nr[68] + nr[40] + nr[1146] + nr[44] + nr[280] + nr[54] + nr[281],
        cC = nr[343] + nr[23] + nr[388] + nr[23] + nr[172] + nr[23] + nr[725],
        _C = nr[68] + nr[40] + nr[1146] + nr[44] + nr[280] + nr[426] + nr[427],
        dC = nr[68] + nr[40] + nr[1146] + nr[44] + nr[280] + nr[1] + nr[425], lC = nr[401] + nr[44] + nr[1148],
        vC = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1124] + nr[23] + nr[1123],
        bC = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1088],
        yC = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1103] + nr[23] + nr[122],
        gC = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[765],
        pC = nr[358] + nr[23] + nr[382] + nr[23] + nr[1120] + nr[23] + nr[1117] + nr[23] + nr[755],
        mC = nr[261] + nr[36] + nr[274], xC = nr[23] + nr[80] + nr[266] + nr[498],
        EC = nr[261] + nr[1] + nr[2] + nr[182] + nr[221], wC = nr[261] + nr[36] + nr[166],
        TC = nr[25] + nr[261] + nr[1] + nr[95], kC = nr[11] + nr[61] + nr[1149],
        MC = nr[35] + nr[61] + nr[1149] + nr[27] + nr[28] + nr[1] + nr[528], OC = nr[111] + nr[1] + nr[95],
        SC = nr[433] + nr[44] + nr[1148], IC = nr[433] + nr[61] + nr[1149] + nr[27] + nr[352],
        PC = nr[354] + nr[27] + nr[352], AC = nr[111] + nr[61] + nr[1149], CC = nr[495],
        LC = nr[25] + nr[450] + nr[61] + nr[766], DC = nr[25] + nr[429] + nr[15] + nr[125] + nr[121],
        jC = nr[25] + nr[450] + nr[36] + nr[764] + nr[15] + nr[125] + nr[121],
        RC = nr[25] + nr[429] + nr[15] + nr[125] + nr[122], NC = nr[25] + nr[450] + nr[36] + nr[764] + nr[61] + nr[430],
        BC = nr[442] + nr[23] + nr[1150] + nr[23] + nr[1151], $C = nr[23] + nr[80] + nr[266] + nr[1145],
        FC = nr[25] + nr[739] + nr[1] + nr[740],
        GC = nr[25] + nr[739] + nr[1] + nr[740] + nr[61] + nr[749] + nr[286] + nr[298],
        zC = nr[25] + nr[429] + nr[1] + nr[740], YC = nr[25] + nr[429] + nr[61] + nr[430], qC = nr[770],
        HC = nr[23] + nr[80] + nr[81] + nr[200], UC = nr[71] + nr[1152], WC = nr[25] + nr[1018],
        VC = nr[25] + nr[261] + nr[36] + nr[583], XC = nr[25] + nr[261] + nr[42] + nr[768] + nr[268] + nr[269],
        ZC = nr[23] + nr[179] + nr[268] + nr[269], KC = nr[1082] + nr[268] + nr[269],
        JC = nr[25] + nr[179] + nr[268] + nr[269], QC = nr[25] + nr[1119] + nr[119] + nr[292],
        tL = nr[25] + nr[208] + nr[113] + nr[114], iL = nr[25] + nr[179] + nr[1] + nr[740], nL = nr[36] + nr[583],
        eL = nr[42] + nr[768] + nr[268] + nr[269], sL = nr[23] + nr[770] + nr[61] + nr[193],
        hL = nr[1143] + nr[23] + nr[1123], rL = nr[25] + nr[174] + nr[36] + nr[166],
        aL = nr[25] + nr[174] + nr[36] + nr[210], oL = nr[25] + nr[174],
        fL = nr[165] + nr[286] + nr[1153] + nr[61] + nr[193], uL = nr[25] + nr[174] + nr[42] + nr[448],
        cL = nr[42] + nr[995], _L = nr[25] + nr[261] + nr[42] + nr[995], dL = nr[1073] + nr[61] + nr[193],
        lL = nr[25] + nr[261] + nr[42] + nr[1154] + nr[40] + nr[1146],
        vL = nr[25] + nr[261] + nr[119] + nr[217] + nr[40] + nr[1146], bL = nr[25] + nr[767],
        yL = nr[25] + nr[299] + nr[40] + nr[1146], gL = nr[299] + nr[40] + nr[1146] + nr[44] + nr[233],
        pL = nr[25] + nr[299] + nr[40] + nr[1146] + nr[36] + nr[274],
        mL = nr[25] + nr[299] + nr[40] + nr[1146] + nr[36] + nr[166],
        xL = nr[299] + nr[40] + nr[1146] + nr[42] + nr[768] + nr[268] + nr[269],
        EL = nr[299] + nr[40] + nr[1146] + nr[36] + nr[1070], wL = nr[25] + nr[68] + nr[40] + nr[1146],
        TL = nr[25] + nr[68] + nr[40] + nr[1146] + nr[36] + nr[274],
        kL = nr[25] + nr[68] + nr[40] + nr[1146] + nr[15] + nr[125],
        ML = nr[68] + nr[40] + nr[1146] + nr[36] + nr[1070], OL = nr[268] + nr[269],
        SL = nr[68] + nr[40] + nr[1146] + nr[44] + nr[233], IL = nr[40] + nr[1146] + nr[36] + nr[194],
        PL = nr[40] + nr[1146] + nr[36] + nr[194] + nr[36] + nr[210], AL = nr[40] + nr[1146] + nr[36] + nr[1070],
        CL = nr[40] + nr[1146] + nr[44] + nr[280] + nr[54] + nr[281],
        LL = nr[40] + nr[1146] + nr[44] + nr[280] + nr[54] + nr[281] + nr[15] + nr[125],
        DL = nr[40] + nr[1146] + nr[42] + nr[768] + nr[1] + nr[740],
        jL = nr[40] + nr[1146] + nr[42] + nr[768] + nr[268] + nr[269],
        RL = nr[40] + nr[1146] + nr[44] + nr[280] + nr[1] + nr[425],
        NL = nr[40] + nr[1146] + nr[44] + nr[280] + nr[426] + nr[427], BL = nr[40] + nr[1146] + nr[15] + nr[1147],
        $L = nr[40] + nr[1146] + nr[15] + nr[1147] + nr[36] + nr[210], FL = nr[42] + nr[1154] + nr[40] + nr[1146],
        GL = nr[119] + nr[217] + nr[40] + nr[1146], zL = nr[1073] + nr[36] + nr[391],
        YL = nr[223] + nr[44] + nr[323] + nr[160] + nr[317], qL = nr[223] + nr[160] + nr[317],
        HL = nr[1155] + nr[61] + nr[1156], UL = nr[3] + nr[126] + nr[125],
        WL = nr[51] + nr[27] + nr[1157] + nr[15] + nr[1158], VL = nr[24] + nr[61] + nr[318] + nr[44] + nr[1148],
        XL = nr[1159], ZL = nr[190] + nr[27] + nr[445], KL = nr[702] + nr[74],
        JL = nr[358] + nr[23] + nr[236] + nr[23] + nr[1160], QL = nr[111] + nr[36] + nr[763] + nr[119] + nr[292],
        tD = nr[1139] + nr[160] + nr[390], iD = nr[23] + nr[80] + nr[1161], nD = nr[25] + nr[261] + nr[61] + nr[193],
        eD = nr[1162] + nr[27] + nr[1163], sD = nr[747] + nr[61] + nr[193],
        hD = nr[3] + nr[44] + nr[1164] + nr[61] + nr[193], rD = nr[199] + nr[121], aD = nr[199] + nr[122],
        oD = nr[1140], fD = nr[444] + nr[23] + nr[730] + nr[23] + nr[1103] + nr[23] + nr[121],
        uD = nr[1120] + nr[23] + nr[765], cD = nr[71] + nr[1165], _D = nr[1084] + nr[23] + nr[1117] + nr[23] + nr[732],
        dD = nr[358] + nr[23] + nr[1166] + nr[23] + nr[1167], lD = nr[71] + nr[1168] + nr[1169] + nr[273],
        vD = nr[71] + nr[1170] + nr[160] + nr[215], bD = nr[23] + nr[1171], yD = nr[458],
        gD = nr[1172] + nr[30] + nr[1173], pD = nr[1174], mD = nr[1175], xD = nr[58] + nr[160] + nr[513],
        ED = nr[206] + nr[119] + nr[1176], wD = nr[3] + nr[54] + nr[1177] + nr[182] + nr[467],
        TD = nr[1068] + nr[119] + nr[217] + nr[44] + nr[1178], kD = nr[1179] + nr[40] + nr[460], MD = nr[311] + nr[298],
        OD = nr[24] + nr[119] + nr[137], SD = nr[36] + nr[274] + nr[311] + nr[298],
        ID = nr[24] + nr[36] + nr[274] + nr[311] + nr[298], PD = nr[268] + nr[1090], AD = nr[24] + nr[268] + nr[1090],
        CD = nr[23] + nr[80] + nr[266] + nr[631], LD = nr[112] + nr[27] + nr[352], DD = nr[538],
        jD = nr[1180] + nr[23] + nr[1181], RD = nr[35] + nr[182] + nr[617] + nr[160] + nr[513],
        ND = nr[1144] + nr[44] + nr[1182] + nr[61] + nr[193], BD = nr[1183], $D = nr[1184], FD = nr[1185],
        GD = nr[1162], zD = nr[1155] + nr[44] + nr[1186] + nr[42] + nr[1154],
        YD = nr[1155] + nr[44] + nr[1186] + nr[119] + nr[217], qD = nr[994] + nr[27] + nr[151] + nr[160] + nr[1187],
        HD = nr[111] + nr[160] + nr[161], UD = nr[3] + nr[54] + nr[55] + nr[36] + nr[210],
        WD = nr[1188] + nr[61] + nr[193], VD = nr[1019] + nr[61] + nr[193], XD = nr[4] + nr[44] + nr[1189],
        ZD = nr[23] + nr[80] + nr[81] + nr[1190] + nr[61] + nr[193], KD = nr[621] + nr[40] + nr[237],
        JD = nr[621] + nr[182] + nr[80], QD = nr[621] + nr[15] + nr[472], tj = nr[468] + nr[36] + nr[583],
        ij = nr[23] + nr[80] + nr[79] + nr[87], nj = nr[51] + nr[182] + nr[270], ej = nr[577] + nr[119] + nr[217],
        sj = nr[216] + nr[119] + nr[217] + nr[1] + nr[1051], hj = nr[621] + nr[40] + nr[41],
        rj = nr[1191] + nr[23] + nr[1192], aj = nr[212] + nr[36] + nr[687], oj = nr[23] + nr[1193] + nr[40] + nr[41],
        fj = nr[1194], uj = nr[1195], cj = nr[1027] + nr[36] + nr[1196],
        _j = nr[1197] + nr[36] + nr[1196] + nr[40] + nr[688], dj = nr[165] + nr[44] + nr[233],
        lj = nr[51] + nr[286] + nr[1198], vj = nr[23] + nr[1183] + nr[42] + nr[1048],
        bj = nr[1027] + nr[160] + nr[1199], yj = nr[111] + nr[1] + nr[616] + nr[182] + nr[617],
        gj = nr[11] + nr[1] + nr[616] + nr[182] + nr[617], pj = nr[1200], mj = nr[1201] + nr[1006],
        xj = nr[54] + nr[1202] + nr[47] + nr[160] + nr[1203] + nr[232], Ej = nr[11] + nr[36] + nr[691],
        wj = nr[1180] + nr[23] + nr[1204], Tj = nr[36] + nr[274], kj = nr[35] + nr[160] + nr[161] + nr[1] + nr[1205],
        Mj = nr[44] + nr[280], Oj = nr[36] + nr[1070], Sj = nr[24] + nr[160] + nr[317], Ij = nr[160] + nr[317],
        Pj = nr[349] + nr[1206] + nr[1056], Aj = nr[463] + nr[27] + nr[352], Cj = nr[1207] + nr[160] + nr[1208],
        Lj = nr[35] + nr[44] + nr[1148] + nr[160] + nr[1208], Dj = nr[1209] + nr[160] + nr[485] + nr[44] + nr[1148],
        jj = nr[44] + nr[1148] + nr[47] + nr[1] + nr[1210] + nr[132] + nr[237] + nr[47] + nr[160] + nr[485],
        Rj = nr[261] + nr[160] + nr[161], Nj = nr[463] + nr[286] + nr[298], Bj = nr[1211],
        $j = nr[1212] + nr[160] + nr[531], Fj = nr[1213] + nr[97] + nr[1214], Gj = nr[1162] + nr[27] + nr[445],
        zj = nr[1215], Yj = nr[23] + nr[80] + nr[81] + nr[567] + nr[286] + nr[298],
        qj = nr[353] + nr[1] + nr[528] + nr[54] + nr[529], Hj = nr[23] + nr[1019] + nr[61] + nr[193],
        Uj = nr[23] + nr[1188] + nr[61] + nr[193], Wj = nr[1216] + nr[23] + nr[1217],
        Vj = nr[1084] + nr[23] + nr[1089] + nr[23] + nr[173], Xj = nr[1084] + nr[23] + nr[236] + nr[23] + nr[706],
        Zj = nr[1084] + nr[23] + nr[1089] + nr[23] + nr[225], Kj = nr[1084] + nr[23] + nr[236] + nr[23] + nr[333],
        Jj = nr[1218] + nr[237], Qj = nr[1219] + nr[153],
        tR = nr[1220] + nr[47] + nr[215] + nr[74] + nr[79] + nr[321] + nr[47] + nr[1221] + nr[100] + nr[622],
        iR = nr[863],
        nR = nr[74] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[311] + nr[407] + nr[47] + nr[409],
        eR = nr[1220] + nr[105] + nr[202] + nr[106] + nr[1100] + nr[100] + nr[774] + nr[506] + nr[65] + nr[66] + nr[215] + nr[418] + nr[215] + nr[418] + nr[215] + nr[418] + nr[215] + nr[74] + nr[273] + nr[70],
        sR = nr[74] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[311] + nr[407],
        hR = nr[1220] + nr[105] + nr[215] + nr[106], rR = nr[1222],
        aR = nr[105] + nr[1220] + nr[47] + nr[345] + nr[321] + nr[47] + nr[1223] + nr[100] + nr[737] + nr[66] + nr[215] + nr[74] + nr[347] + nr[418] + nr[215] + nr[418] + nr[215] + nr[74] + nr[347] + nr[418] + nr[202] + nr[70],
        oR = nr[74] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[311] + nr[407] + nr[105] + nr[432],
        fR = nr[1220] + nr[105] + nr[202] + nr[106],
        uR = nr[105] + nr[1220] + nr[47] + nr[215] + nr[74] + nr[345] + nr[321] + nr[47] + nr[776],
        cR = nr[23] + nr[409], _R = nr[23] + nr[80] + nr[81] + nr[321],
        dR = nr[74] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[36] + nr[551] + nr[61] + nr[1224],
        lR = nr[1225] + nr[506] + nr[79] + nr[153] + nr[1226] + nr[279] + nr[506] + nr[1016] + nr[106] + nr[1227] + nr[100] + nr[1228] + nr[506] + nr[262] + nr[100] + nr[1227] + nr[106] + nr[1227] + nr[100] + nr[429] + nr[1229] + nr[219] + nr[47] + nr[215] + nr[153] + nr[47] + nr[215] + nr[153] + nr[47] + nr[202] + nr[153] + nr[1226] + nr[1100] + nr[100] + nr[774] + nr[506] + nr[65] + nr[66] + nr[1230] + nr[67] + nr[1230] + nr[67] + nr[1230] + nr[67] + nr[215] + nr[74] + nr[345] + nr[1231] + nr[262] + nr[100] + nr[503] + nr[506] + nr[81] + nr[153] + nr[106] + nr[1225] + nr[506] + nr[202] + nr[153] + nr[106],
        vR = nr[74] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[36] + nr[551] + nr[61] + nr[1224] + nr[74] + nr[432] + nr[1232] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[36] + nr[551] + nr[61] + nr[1224] + nr[105] + nr[432],
        bR = nr[1225] + nr[100] + nr[85] + nr[506] + nr[347] + nr[153] + nr[106],
        yR = nr[1225] + nr[100] + nr[84] + nr[506] + nr[347] + nr[153] + nr[106],
        gR = nr[74] + nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[36] + nr[551] + nr[27] + nr[417],
        pR = nr[105] + nr[1220] + nr[47] + nr[345] + nr[321] + nr[47] + nr[1223] + nr[100] + nr[737] + nr[66] + nr[215] + nr[74] + nr[347] + nr[418] + nr[215] + nr[418] + nr[215] + nr[74] + nr[347] + nr[418] + nr[202] + nr[1231],
        mR = nr[23] + nr[92] + nr[54] + nr[695] + nr[36] + nr[689],
        xR = nr[23] + nr[90] + nr[54] + nr[695] + nr[36] + nr[689],
        ER = nr[405] + nr[100] + nr[268] + nr[406] + nr[100] + nr[36] + nr[551] + nr[27] + nr[417],
        wR = nr[1057] + nr[182] + nr[1233], TR = nr[23] + nr[80] + nr[1234], kR = nr[61] + nr[1235], MR = nr[1236],
        OR = nr[1237] + nr[23] + nr[1238], SR = nr[1221] + nr[15] + nr[472], IR = nr[141] + nr[283] + nr[97] + nr[1055],
        PR = nr[35] + nr[40] + nr[41] + nr[36] + nr[451], AR = nr[23] + nr[299] + nr[1239],
        CR = nr[23] + nr[68] + nr[1239], LR = nr[23] + nr[299] + nr[1240], DR = nr[23] + nr[68] + nr[1240],
        jR = nr[23] + nr[299] + nr[36] + nr[583], RR = nr[1241], NR = nr[751] + nr[119] + nr[284],
        BR = nr[1242] + nr[119] + nr[292], $R = nr[1237] + nr[23] + nr[236], FR = nr[23] + nr[68] + nr[36] + nr[583],
        GR = nr[1243] + nr[23] + nr[1244] + nr[23] + nr[181] + nr[23] + nr[1245],
        zR = nr[1243] + nr[23] + nr[1121] + nr[23] + nr[1244] + nr[23] + nr[181] + nr[23] + nr[1245], YR = nr[1053],
        qR = nr[111] + nr[54] + nr[184] + nr[27] + nr[28] + nr[1] + nr[528] + nr[44] + nr[465],
        HR = nr[206] + nr[27] + nr[28] + nr[1] + nr[528] + nr[54] + nr[529],
        UR = nr[35] + nr[54] + nr[184] + nr[27] + nr[28] + nr[1] + nr[528],
        WR = nr[11] + nr[54] + nr[184] + nr[27] + nr[28] + nr[1] + nr[528] + nr[44] + nr[465],
        VR = nr[11] + nr[54] + nr[1246], XR = nr[1236] + nr[44] + nr[45], ZR = nr[23] + nr[1247] + nr[182] + nr[164],
        KR = nr[111] + nr[54] + nr[1246], JR = nr[1098] + nr[54] + nr[1248], QR = nr[54] + nr[1246] + nr[182] + nr[617],
        tN = nr[1249], iN = nr[127], nN = nr[223] + nr[27] + nr[151], eN = nr[104] + nr[54] + nr[1248],
        sN = nr[3] + nr[54] + nr[55] + nr[54] + nr[1248] + nr[36] + nr[1070], hN = nr[466] + nr[27] + nr[151],
        rN = nr[1207], aN = nr[23] + nr[80] + nr[81] + nr[567] + nr[27] + nr[385], oN = nr[1207] + nr[27] + nr[385],
        fN = nr[24] + nr[160] + nr[317] + nr[61] + nr[87] + nr[182] + nr[617], uN = nr[1250],
        cN = nr[1251] + nr[27] + nr[151], _N = nr[23] + nr[80] + nr[79] + nr[631], dN = nr[1252], lN = nr[1253],
        vN = nr[1] + nr[1254] + nr[160] + nr[317] + nr[182] + nr[617], bN = nr[223] + nr[97] + nr[117], yN = nr[1255],
        gN = nr[71] + nr[202] + nr[54] + nr[1256], pN = nr[71] + nr[160] + nr[1257],
        mN = nr[24] + nr[36] + nr[274] + nr[61] + nr[87] + nr[182] + nr[617],
        xN = nr[1] + nr[1254] + nr[36] + nr[274] + nr[182] + nr[617],
        EN = nr[24] + nr[44] + nr[280] + nr[61] + nr[87] + nr[182] + nr[617],
        wN = nr[1] + nr[1254] + nr[44] + nr[280] + nr[182] + nr[617],
        TN = nr[223] + nr[97] + nr[1258] + nr[44] + nr[280],
        kN = nr[1] + nr[1254] + nr[36] + nr[1259] + nr[160] + nr[317] + nr[182] + nr[617],
        MN = nr[1120] + nr[23] + nr[1260] + nr[23] + nr[1261] + nr[23] + nr[1262] + nr[23] + nr[1263] + nr[23] + nr[1264],
        ON = nr[1265], SN = nr[405] + nr[100] + nr[44] + nr[1148] + nr[160] + nr[1266],
        IN = nr[175] + nr[40] + nr[1267], PN = nr[1268] + nr[1269] + nr[1270] + nr[160] + nr[47] + nr[202] + nr[153],
        AN = nr[273] + nr[153], CN = nr[60] + nr[160] + nr[1208], LN = nr[35] + nr[30] + nr[31] + nr[1] + nr[528],
        DN = nr[58] + nr[160] + nr[1208], jN = nr[35] + nr[36] + nr[166] + nr[1] + nr[528],
        RN = nr[58] + nr[160] + nr[1208] + nr[113] + nr[1271] + nr[1] + nr[581] + nr[15] + nr[80] + nr[113] + nr[569],
        NN = nr[35] + nr[1] + nr[581] + nr[15] + nr[80] + nr[113] + nr[569], BN = nr[165] + nr[119] + nr[137],
        $N = nr[51] + nr[160] + nr[1272], FN = nr[44] + nr[1148] + nr[160] + nr[1266],
        GN = nr[1122] + nr[160] + nr[1266], zN = nr[1273], YN = nr[51] + nr[160] + nr[1187],
        qN = nr[1207] + nr[44] + nr[1148] + nr[160] + nr[1208], HN = nr[1274] + nr[36] + nr[583],
        UN = nr[621] + nr[119] + nr[217] + nr[15] + nr[1275], WN = nr[160] + nr[1208] + nr[182] + nr[617], VN = nr[459],
        XN = nr[1276], ZN = nr[1277] + nr[47] + nr[231] + nr[232], KN = nr[47] + nr[86] + nr[47],
        JN = nr[587] + nr[160] + nr[1203], QN = nr[466] + nr[54] + nr[1278] + nr[160] + nr[161],
        tB = nr[51] + nr[36] + nr[1279], iB = nr[1180] + nr[23] + nr[1280] + nr[23] + nr[1281],
        nB = nr[1180] + nr[23] + nr[1282], eB = nr[216] + nr[160] + nr[1203],
        sB = nr[1180] + nr[23] + nr[1280] + nr[23] + nr[1283], hB = nr[58] + nr[40] + nr[41],
        rB = nr[1284] + nr[23] + nr[1281], aB = nr[1284] + nr[23] + nr[1283], oB = nr[1285] + nr[97] + nr[1214],
        fB = nr[23] + nr[1286] + nr[27] + nr[1287], uB = nr[23] + nr[80] + nr[81] + nr[1210] + nr[160] + nr[1208],
        cB = nr[51] + nr[160] + nr[390] + nr[27] + nr[151] + nr[160] + nr[1187], _B = nr[51] + nr[42] + nr[1154],
        dB = nr[51] + nr[1] + nr[1288] + nr[27] + nr[151], lB = nr[223] + nr[44] + nr[280], vB = nr[71] + nr[1289],
        bB = nr[23] + nr[1290], yB = nr[51] + nr[36] + nr[1291], gB = nr[160] + nr[317] + nr[442],
        pB = nr[358] + nr[23] + nr[388] + nr[23] + nr[1103], mB = nr[235] + nr[23] + nr[1280] + nr[23] + nr[388],
        xB = nr[11] + nr[27] + nr[195] + nr[36] + nr[763] + nr[61] + nr[87] + nr[182] + nr[221],
        EB = nr[380] + nr[23] + nr[525], wB = nr[1135], TB = nr[51] + nr[27] + nr[151] + nr[40] + nr[1292],
        kB = nr[380] + nr[23] + nr[234], MB = nr[51] + nr[160] + nr[390] + nr[27] + nr[151],
        OB = nr[508] + nr[27] + nr[445], SB = nr[584] + nr[36] + nr[763], IB = nr[1293] + nr[36] + nr[763],
        PB = nr[23] + nr[80] + nr[81] + nr[86], AB = nr[1294], CB = nr[1295], LB = nr[1074],
        DB = nr[380] + nr[23] + nr[1282], jB = nr[508] + nr[311] + nr[137] + nr[27] + nr[445],
        RB = nr[620] + nr[54] + nr[597] + nr[122], NB = nr[380] + nr[23] + nr[1280] + nr[23] + nr[1283],
        BB = nr[444] + nr[23] + nr[1296] + nr[23] + nr[1107],
        $B = nr[444] + nr[23] + nr[1296] + nr[23] + nr[1107] + nr[23] + nr[732], FB = nr[1297],
        GB = nr[1296] + nr[23] + nr[444] + nr[23] + nr[242] + nr[23] + nr[1298], zB = nr[1299],
        YB = nr[1296] + nr[23] + nr[444] + nr[23] + nr[242],
        qB = nr[1296] + nr[23] + nr[444] + nr[23] + nr[242] + nr[23] + nr[1300], HB = nr[23] + nr[994],
        UB = nr[23] + nr[1052] + nr[119] + nr[462],
        WB = nr[444] + nr[23] + nr[1296] + nr[23] + nr[1109] + nr[23] + nr[732],
        VB = nr[1301] + nr[36] + nr[691] + nr[286] + nr[298],
        XB = nr[313] + nr[160] + nr[314] + nr[30] + nr[436] + nr[442], ZB = nr[1302] + nr[23] + nr[1303],
        KB = nr[23] + nr[1304] + nr[182] + nr[164],
        JB = nr[1057] + nr[97] + nr[1305] + nr[36] + nr[691] + nr[61] + nr[87] + nr[97] + nr[1306] + nr[61] + nr[408],
        QB = nr[1307], t$ = nr[1308], i$ = nr[23] + nr[199] + nr[27] + nr[151], n$ = nr[23] + nr[1309],
        e$ = nr[1310] + nr[100] + nr[458], s$ = nr[1311] + nr[100] + nr[458], h$ = nr[1312] + nr[100] + nr[458],
        r$ = nr[65] + nr[66] + nr[215] + nr[418] + nr[1313] + nr[418] + nr[215] + nr[418] + nr[202] + nr[70],
        a$ = nr[71] + nr[1314] + nr[215], o$ = nr[23] + nr[199] + nr[446] + nr[1315] + nr[44] + nr[1316],
        f$ = nr[51] + nr[97] + nr[1317], u$ = nr[51] + nr[97] + nr[1318], c$ = nr[23] + nr[80] + nr[79] + nr[667],
        _$ = nr[23] + nr[80] + nr[79] + nr[237], d$ = nr[165] + nr[1] + nr[567] + nr[160] + nr[161],
        l$ = nr[1121] + nr[23] + nr[1281], v$ = nr[1319] + nr[23] + nr[1281], b$ = nr[770] + nr[61] + nr[193],
        y$ = nr[1320], g$ = nr[1121] + nr[23] + nr[1283], p$ = nr[1319] + nr[23] + nr[1283],
        m$ = nr[97] + nr[1321] + nr[182] + nr[617], x$ = nr[165] + nr[36] + nr[691],
        E$ = nr[296] + nr[119] + nr[217] + nr[119] + nr[1142], w$ = nr[1302], T$ = nr[455] + nr[40] + nr[688],
        k$ = nr[1322] + nr[23] + nr[542], M$ = nr[405] + nr[100] + nr[119] + nr[1323],
        O$ = nr[1324] + nr[23] + nr[1103] + nr[23] + nr[122], S$ = nr[1325] + nr[23] + nr[1326], I$ = nr[71] + nr[1327],
        P$ = nr[202] + nr[153] + nr[47] + nr[1268] + nr[1269] + nr[54] + nr[641] + nr[54] + nr[641] + nr[54] + nr[641],
        A$ = nr[79] + nr[153] + nr[47] + nr[81] + nr[153], C$ = nr[1328], L$ = nr[1096],
        D$ = nr[3] + nr[182] + nr[1329], j$ = nr[1330] + nr[1331] + nr[1332],
        R$ = nr[3] + nr[119] + nr[1323] + nr[160] + nr[161], N$ = nr[175] + nr[1] + nr[1333], B$ = nr[23] + nr[1334],
        $$ = nr[1009], F$ = nr[1172], G$ = nr[1322] + nr[23] + nr[1335], z$ = nr[1207] + nr[119] + nr[462],
        Y$ = nr[165] + nr[119] + nr[1323], q$ = nr[58] + nr[119] + nr[462], H$ = nr[1057] + nr[119] + nr[1323],
        U$ = nr[3] + nr[119] + nr[1323], W$ = nr[1069] + nr[119] + nr[292], V$ = nr[1069] + nr[54] + nr[594],
        X$ = nr[1069] + nr[54] + nr[1336], Z$ = nr[283] + nr[40] + nr[460],
        K$ = nr[621] + nr[61] + nr[87] + nr[286] + nr[550] + nr[160] + nr[513],
        J$ = nr[1053] + nr[74] + nr[216] + nr[74] + nr[1207], Q$ = nr[1053] + nr[74] + nr[1337],
        tF = nr[1053] + nr[74] + nr[216] + nr[74] + nr[994], iF = nr[1053] + nr[74] + nr[1338],
        nF = nr[1053] + nr[74] + nr[1339], eF = nr[1135] + nr[74] + nr[216] + nr[74] + nr[1207],
        sF = nr[1135] + nr[74] + nr[1337], hF = nr[1135] + nr[74] + nr[216] + nr[74] + nr[994],
        rF = nr[1135] + nr[74] + nr[111], aF = nr[1135] + nr[74] + nr[11], oF = nr[458] + nr[74] + nr[1207],
        fF = nr[1340], uF = nr[458] + nr[74] + nr[994], cF = nr[199] + nr[74] + nr[1207], _F = nr[1341], dF = nr[1342],
        lF = nr[199] + nr[74] + nr[994], vF = nr[1193] + nr[74] + nr[1207], bF = nr[1193] + nr[74] + nr[994],
        yF = nr[1086] + nr[74] + nr[1061], gF = nr[358] + nr[23] + nr[382], pF = nr[349] + nr[74] + nr[401],
        mF = nr[1302] + nr[23] + nr[1281], xF = nr[455] + nr[74] + nr[1207], EF = nr[455] + nr[74] + nr[1343],
        wF = nr[1302] + nr[23] + nr[1283], TF = nr[455] + nr[74] + nr[994], kF = nr[564] + nr[23] + nr[543],
        MF = nr[571] + nr[74] + nr[555], OF = nr[23] + nr[463] + nr[36] + nr[689],
        SF = nr[23] + nr[35] + nr[160] + nr[161] + nr[1] + nr[523], IF = nr[23] + nr[1344] + nr[182] + nr[617],
        PF = nr[23] + nr[1345] + nr[1] + nr[616] + nr[182] + nr[617] + nr[44] + nr[465],
        AF = nr[466] + nr[182] + nr[617] + nr[286] + nr[298], CF = nr[3] + nr[182] + nr[617] + nr[182] + nr[1346],
        LF = nr[331] + nr[182] + nr[615], DF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[1347], jF = nr[1348],
        RF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[738], NF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[444],
        BF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[1349], $F = nr[1350],
        FF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[1351], GF = nr[1352],
        zF = nr[24] + nr[74] + nr[1353] + nr[74] + nr[349],
        YF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[1354] + nr[23] + nr[358], qF = nr[24] + nr[74] + nr[349],
        HF = nr[24] + nr[74] + nr[1108], UF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[1354] + nr[23] + nr[172],
        WF = nr[24] + nr[74] + nr[208],
        VF = nr[1243] + nr[23] + nr[242] + nr[23] + nr[1354] + nr[23] + nr[1355] + nr[23] + nr[358],
        XF = nr[27] + nr[1210] + nr[182] + nr[617], ZF = nr[36] + nr[691] + nr[182] + nr[617],
        KF = nr[286] + nr[1356] + nr[182] + nr[617], JF = nr[119] + nr[1323] + nr[182] + nr[617],
        QF = nr[97] + nr[1305] + nr[36] + nr[691] + nr[182] + nr[617],
        tG = nr[97] + nr[1305] + nr[36] + nr[691] + nr[182] + nr[617] + nr[61] + nr[87] + nr[97] + nr[1306] + nr[61] + nr[408],
        iG = nr[44] + nr[1357], nG = nr[1358], eG = nr[1359], sG = nr[488], hG = nr[93] + nr[40] + nr[1360],
        rG = nr[3] + nr[44] + nr[393] + nr[97] + nr[1361], aG = nr[1362] + nr[23] + nr[364],
        oG = nr[1362] + nr[23] + nr[363], fG = nr[1362] + nr[23] + nr[367],
        uG = nr[1362] + nr[23] + nr[364] + nr[23] + nr[366], cG = nr[1362] + nr[23] + nr[364] + nr[23] + nr[367],
        _G = nr[1362] + nr[23] + nr[363] + nr[23] + nr[366], dG = nr[1362] + nr[23] + nr[363] + nr[23] + nr[367],
        lG = nr[1362] + nr[23] + nr[367] + nr[23] + nr[363], vG = nr[1362] + nr[23] + nr[367] + nr[23] + nr[364],
        bG = nr[1362] + nr[23] + nr[366] + nr[23] + nr[363], yG = nr[1362] + nr[23] + nr[366] + nr[23] + nr[364],
        gG = nr[1363], pG = nr[1364] + nr[74] + nr[1365], mG = nr[1363] + nr[74] + nr[637],
        xG = nr[1363] + nr[74] + nr[1366], EG = nr[1114] + nr[23] + nr[236] + nr[23] + nr[1367],
        wG = nr[1114] + nr[23] + nr[236] + nr[23] + nr[1367] + nr[23] + nr[361],
        TG = nr[1114] + nr[23] + nr[236] + nr[23] + nr[1368] + nr[23] + nr[1369], kG = nr[29] + nr[36] + nr[166],
        MG = nr[3] + nr[311] + nr[298] + nr[36] + nr[166], OG = nr[23] + nr[80] + nr[266] + nr[639],
        SG = nr[3] + nr[1370] + nr[425], IG = nr[3] + nr[1371] + nr[425],
        PG = nr[3] + nr[44] + nr[393] + nr[119] + nr[292], AG = nr[637] + nr[268] + nr[425],
        CG = nr[1366] + nr[268] + nr[425], LG = nr[254] + nr[119] + nr[292], DG = nr[1372], jG = nr[1373],
        RG = nr[315] + nr[1] + nr[2] + nr[54] + nr[1374], NG = nr[1098] + nr[44] + nr[393],
        BG = nr[315] + nr[61] + nr[193], $G = nr[23] + nr[80] + nr[1375],
        FG = nr[23] + nr[80] + nr[79] + nr[255] + nr[44] + nr[233], GG = nr[23] + nr[651] + nr[641],
        zG = nr[259] + nr[1376], YG = nr[259] + nr[1377], qG = nr[488] + nr[121],
        HG = nr[23] + nr[80] + nr[266] + nr[200], UG = nr[488] + nr[122], WG = nr[23] + nr[80] + nr[266] + nr[667],
        VG = nr[23] + nr[1378] + nr[27] + nr[522] + nr[1] + nr[2] + nr[54] + nr[1374], XG = nr[23] + nr[80] + nr[911],
        ZG = nr[466] + nr[286] + nr[1379] + nr[311] + nr[320], KG = nr[254] + nr[54] + nr[486],
        JG = nr[261] + nr[44] + nr[393] + nr[54] + nr[486], QG = nr[1380], tz = nr[58],
        iz = nr[1274] + nr[44] + nr[393] + nr[54] + nr[486], nz = nr[488] + nr[1] + nr[327], ez = nr[1381],
        sz = nr[142] + nr[36] + nr[687], hz = nr[23] + nr[484] + nr[346] + nr[498], rz = nr[1382],
        az = nr[1207] + nr[40] + nr[1383], oz = nr[61] + nr[1384] + nr[44] + nr[1357], fz = nr[1385], uz = nr[1386],
        cz = nr[228], _z = nr[1387], dz = nr[1388] + nr[23] + nr[1389] + nr[23] + nr[1390],
        lz = nr[1388] + nr[23] + nr[1389] + nr[23] + nr[1391], vz = nr[376] + nr[23] + nr[242] + nr[23] + nr[1392],
        bz = nr[376] + nr[23] + nr[242] + nr[23] + nr[1393], yz = nr[51] + nr[44] + nr[1394],
        gz = nr[3] + nr[268] + nr[425], pz = nr[1395], mz = nr[394] + nr[36] + nr[1396], xz = nr[3] + nr[97] + nr[277],
        Ez = nr[503] + nr[286] + nr[298], wz = nr[23] + nr[80] + nr[81] + nr[631], Tz = nr[488] + nr[202],
        kz = nr[358] + nr[23] + nr[382] + nr[23] + nr[1085],
        Mz = nr[23] + nr[349] + nr[61] + nr[318] + nr[182] + nr[270] + nr[42] + nr[271],
        Oz = nr[23] + nr[80] + nr[266] + nr[532] + nr[61] + nr[1397] + nr[42] + nr[271],
        Sz = nr[23] + nr[80] + nr[79] + nr[484], Iz = nr[1398] + nr[160] + nr[317],
        Pz = nr[495] + nr[61] + nr[1149] + nr[160] + nr[531],
        Az = nr[23] + nr[631] + nr[79] + nr[182] + nr[80] + nr[61] + nr[318], Cz = nr[1399],
        Lz = nr[1400] + nr[182] + nr[1401], Dz = nr[1402], jz = nr[1403] + nr[121], Rz = nr[1403] + nr[122],
        Nz = nr[51] + nr[182] + nr[1404], Bz = nr[1403], $z = nr[1089] + nr[23] + nr[370], Fz = nr[1405], Gz = nr[1406],
        zz = nr[254] + nr[286] + nr[1407], Yz = nr[254] + nr[160] + nr[1408], qz = nr[1409],
        Hz = nr[23] + nr[1410] + nr[42] + nr[1411], Uz = nr[1381] + nr[40] + nr[52], Wz = nr[1412],
        Vz = nr[468] + nr[160] + nr[469], Xz = nr[466] + nr[160] + nr[469], Zz = nr[36] + nr[1413] + nr[44] + nr[1357],
        Kz = nr[1221] + nr[15] + nr[472] + nr[36] + nr[1414], Jz = nr[508] + nr[44] + nr[1415],
        Qz = nr[23] + nr[80] + nr[79] + nr[1360], tY = nr[23] + nr[1416] + nr[119] + nr[292], iY = nr[23] + nr[1417],
        nY = nr[328] + nr[47] + nr[77],
        eY = nr[313] + nr[160] + nr[314] + nr[61] + nr[87] + nr[119] + nr[1418] + nr[61] + nr[1419] + nr[42] + nr[1420] + nr[36] + nr[1421],
        sY = nr[23] + nr[299], hY = nr[68] + nr[1] + nr[740], rY = nr[51] + nr[1422], aY = nr[51] + nr[15] + nr[1423],
        oY = nr[51] + nr[36] + nr[1424], fY = nr[51] + nr[1] + nr[1425], uY = nr[54] + nr[55] + nr[36] + nr[1070],
        cY = nr[54] + nr[1426], _Y = nr[1] + nr[1427], dY = nr[268] + nr[406], lY = nr[61] + nr[103] + nr[442],
        vY = nr[160] + nr[161] + nr[442], bY = nr[311] + nr[298] + nr[442], yY = nr[44] + nr[1148] + nr[442],
        gY = nr[36] + nr[1428], pY = nr[182] + nr[617] + nr[160] + nr[513], mY = nr[268] + nr[406] + nr[286] + nr[435],
        xY = nr[160] + nr[317] + nr[61] + nr[318],
        EY = nr[405] + nr[1429] + nr[47] + nr[313] + nr[47] + nr[1006] + nr[273], wY = nr[79] + nr[74] + nr[215],
        TY = nr[79] + nr[74] + nr[346] + nr[74] + nr[346] + nr[74] + nr[79],
        kY = nr[405] + nr[1429] + nr[232] + nr[54] + nr[1430] + nr[47] + nr[1] + nr[1431] + nr[47] + nr[313] + nr[47] + nr[1006] + nr[273] + nr[438] + nr[1] + nr[308],
        MY = nr[686] + nr[1246], OY = nr[1432] + nr[438] + nr[1219] + nr[438] + nr[1433], SY = 0;
    if (t[hl]) {
        var IY = navigator[rl], PY = /opera/i[Xo](IY), AY = !PY && /msie/i[Xo](IY), CY = /rv:11.0/i[Xo](IY),
            LY = /MSIE 10./i[Xo](IY);
        if (/Edge/i[Xo](IY), CY && (AY = !0), /msie\s[6,7,8]/i[Xo](IY)) throw new Error("your browser is not supported");
        var DY = /webkit|khtml/i[Xo](IY), jY = !DY && /gecko/i.test(IY), RY = /firefox\//i[Xo](IY),
            NY = /Chrome\//i[Xo](IY), BY = !NY && /Safari\//i[Xo](IY), $Y = /Macintosh;/i.test(IY),
            FY = /(iPad|iPhone|iPod)/g.test(IY), GY = /Android/g[Xo](IY), zY = /Windows Phone/g[Xo](IY),
            YY = (FY || GY || zY) && F_ in t, qY = IY[al](/AppleWebKit\/([0-9\.]*)/);
        if (qY && qY.length > 1) {
            parseFloat(qY[1])
        }
        GY && parseFloat(IY[al](/Android\s([0-9\.]*)/)[1])
    }
    t[Ar] || (t.requestAnimationFrame = t[ol] || t.mozRequestAnimationFrame || t[fl] || t.msRequestAnimationFrame || function (i) {
        return t[ul](function () {
            i()
        }, 1e3 / 60)
    }), t[cl] || (t[cl] = t.webkitCancelAnimationFrame || t[_l] || t[dl] || t[ll] || function (i) {
        return t[vl](i)
    });
    var HY = {SELECTION_TOLERANCE: YY ? 7 : 4, LABEL_COLOR: bl};
    K(HY, {
        FONT_STYLE: {
            get: function () {
                return this[yl] || (this[yl] = gl)
            }, set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this[pl] = !0)
            }
        }, FONT_SIZE: {
            get: function () {
                return this[ml] || (this[ml] = 12)
            }, set: function (t) {
                this[ml] != t && (this[ml] = t, this[pl] = !0)
            }
        }, FONT_FAMILY: {
            get: function () {
                return this[xl] || (this[xl] = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this._fontFamily != t && (this[xl] = t, this[pl] = !0)
            }
        }, FONT: {
            get: function () {
                return (this[pl] || this[pl] === n) && (this[pl] = !1, this[El] = this.FONT_STYLE + Dr + this[To] + _o + this[lo]), this[El]
            }
        }
    });
    var UY = function (t) {
        this._jr = [], this._lj = {}, t && this.add(t)
    };
    UY[yr] = {
        _jr: null, _lj: null, get: function (t) {
            return this.getByIndex(t)
        }, getById: function (t) {
            return this._lj[t]
        }, getByIndex: function (t) {
            return this._jr[t]
        }, forEach: function (t, i, n) {
            return l(this._jr, t, i, n)
        }, forEachReverse: function (t, i, n) {
            return b(this._jr, t, i, n)
        }, size: function () {
            return this._jr.length
        }, contains: function (t) {
            return this[wl](t.id)
        }, containsById: function (t) {
            return this._lj.hasOwnProperty(t)
        }, setIndex: function (t, i) {
            var n = this._jr[vr](t);
            if (0 > n) throw new Error(za + t.id + Tl);
            return n == i ? !1 : (this._jr[fr](n, 1), this._jr.splice(i, 0, t), !0)
        }, setIndexAfter: function (t, i) {
            var n = this._jr[vr](t);
            if (0 > n) throw new Error(za + t.id + Tl);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jr.splice(n, 1), this._jr[fr](i, 0, t), i)
        }, setIndexBefore: function (t, i) {
            var n = this._jr.indexOf(t);
            if (0 > n) throw new Error(za + t.id + Tl);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jr.splice(n, 1), this._jr[fr](i, 0, t), i)
        }, indexOf: function (t) {
            return this._jr.indexOf(t)
        }, getIndexById: function (t) {
            var i = this[kl](t);
            return i ? this._jr[vr](i) : -1
        }, add: function (t, i) {
            return $(t) ? this._f6(t, i) : this._kj(t, i)
        }, addFirst: function (t) {
            return this.add(t, 0)
        }, _f6: function (t, i) {
            if (0 == t.length) return !1;
            var e = !1, s = i >= 0;
            t = t._jr || t;
            for (var h = 0, r = t[rr]; r > h; h++) {
                var a = t[h];
                null !== a && a !== n && this._kj(a, i, !0) && (e = !0, s && i++)
            }
            return e
        }, _kj: function (t, i) {
            var e = t.id;
            return e === n || this[wl](e) ? !1 : (g(this._jr, t, i), this._lj[e] = t, t)
        }, remove: function (t) {
            return $(t) ? this[Ml](t) : t.id ? this._fg(t.id, t) : this[Ol](t)
        }, _n6k: function (t) {
            if (0 == t[rr]) return !1;
            var i = !1;
            t = t._jr || t;
            for (var e = 0, s = t[rr]; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) {
                    h.id === n && (h = this._lj[h]);
                    var r = h.id;
                    this._fg(r, h, !0) && (i = !0)
                }
            }
            return i
        }, _fg: function (t, i) {
            return t !== n && this[wl](t) ? ((null === i || i === n) && (i = this[kl](t)), delete this._lj[t], p(this._jr, i), !0) : !1
        }, removeById: function (t) {
            var i = this._lj[t];
            return i ? this._fg(t, i) : !1
        }, set: function (t) {
            if (!t || 0 == t) return this[to]();
            if (this[Sl]() || !$(t)) return this[to](), this.add(t);
            var i = [], n = {}, e = 0;
            if (l(t, function (t) {
                this._lj[t.id] ? (n[t.id] = t, e++) : i[lr](t)
            }, this), e != this[rr]) {
                var s = [];
                this[qu](function (t) {
                    n[t.id] || s[lr](t)
                }, this), s.length && this[Ml](s)
            }
            return i.length && this._f6(i), !0
        }, clear: function () {
            return this[Sl]() ? !1 : (this._jr[rr] = 0, this._lj = {}, !0)
        }, toDatas: function () {
            return this._jr.slice(0)
        }, isEmpty: function () {
            return 0 == this._jr[rr]
        }, valueOf: function () {
            return this._jr[rr]
        }, clone: function (t) {
            var i = new UY;
            return i.add(t ? y(this._jr) : this[Il]()), i
        }
    }, K(UY[yr], {
        datas: {
            get: function () {
                return this._jr
            }
        }, random: {
            get: function () {
                return this._jr && this._jr[rr] ? this._jr[Y(this._jr[rr])] : null
            }
        }, length: {
            get: function () {
                return this._jr ? this._jr[rr] : 0
            }
        }
    });
    var WY = (2 * Math.PI, .5 * Math.PI), VY = function (t, i) {
        i = i[Pl]();
        for (var n = AY ? t[Al] : t[Cl]; n && (1 != n[Ll] || n.tagName && n[Dl].toUpperCase() != i);) n = AY ? n.nextSibling : n.nextElementSibling;
        return n && 1 == n.nodeType && n.tagName && n.tagName[Pl]() == i ? n : null
    }, XY = function (t, i, n) {
        t instanceof XY && (i = t.y, t = t.x, n = t[Fo]), this.set(t, i, n)
    }, ZY = function (t, i, n, e) {
        var s = t - n, h = i - e;
        return Math[Mo](s * s + h * h)
    };
    XY[yr] = {
        x: 0, y: 0, rotate: n, set: function (t, i, n) {
            this.x = t || 0, this.y = i || 0, this.rotate = n || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return ZY(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return jl + this.x + Rl + this.y + Xr
        }, clone: function () {
            return new XY(this.x, this.y)
        }
    }, Object.defineProperty(XY[yr], Nl, {
        get: function () {
            return Math[Mo](this.x * this.x + this.y * this.y)
        }
    });
    var KY = function (t, i, e, s) {
        t !== n && this._mq(t, i, e, s)
    };
    KY.prototype = {
        _n0: null, _my: null, _mx: null, _mv: null, _n2: null, _n6: null, _n4: 1, _mq: function (t, i, n, e) {
            this._n0 = t, this._my = i, this._mx = n, this._mv = e, t == n ? (this._n2 = -1, this._n4 = 0, this._n6 = t) : (this._n2 = (i - e) / (t - n), this._n6 = i - this._n2 * t, this._n4 = 1), this._le = Math.atan2(this._mv - this._my, this._mx - this._n0), this._n4os = Math.cos(this._le), this._sin = Math.sin(this._le)
        }, _n46: function (t) {
            return 0 == this._n4 ? Number.NaN : this._n2 * t + this._n6
        }, _n48: function (t) {
            return 0 == this._n2 ? Number.NaN : (t - this._n6) / this._n2
        }, _$b: function (t) {
            var i, n, e, s, h, r = t[0], a = t[2], o = t[4], f = t[1], u = t[3], c = t[5], _ = this._n2, d = this._n6,
                l = this._n4;
            if (0 == l ? (e = Math.sqrt((-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -_ * a + _ * r, h = _ * o - 2 * _ * a + _ * r) : (e = Math[Mo]((-f + _ * r + d) * c + u * u + (-2 * _ * a - 2 * d) * u + (_ * o + d) * f + (-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -u + f + _ * a - _ * r, h = c - 2 * u + f - _ * o + 2 * _ * a - _ * r), 0 != h) {
                i = (e + s) / h, n = (-e + s) / h;
                var v, b;
                return i >= 0 && 1 >= i && (v = qi(i, t)), n >= 0 && 1 >= n && (b = qi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        }, _3k: function (t, i, n) {
            if (this._n2 == t._n2 || 0 == this._n4 && 0 == t._n4) return null;
            var e, s;
            if (e = 0 == this._n4 ? this._n6 : 0 == t._n4 ? t._n6 : (t._n6 - this._n6) / (this._n2 - t._n2), s = 0 == this._n2 ? this._n6 : 0 == t._n2 ? t._n6 : this._n4 ? this._n2 * e + this._n6 : t._n2 * e + t._n6, !i) return {
                x: e,
                y: s
            };
            var h, r, a;
            if (n) h = -i / 2, r = -h; else {
                h = -ZY(this._n0, this._my, e, s), r = ZY(this._mx, this._mv, e, s);
                var o = -h + r;
                if (o > i) {
                    var f = i / o;
                    h *= f, r *= f
                } else a = (i - o) / 2
            }
            var u = this._73(e, s, h), c = this._73(e, s, r);
            return a && (u[Bf] = a, c._rest = a), [u, c]
        }, _73: function (t, i, n) {
            return 0 == this._n4 ? {x: t, y: i + n} : {x: t + n * this[ha], y: i + n * this._sin}
        }
    };
    var JY = function (t, i) {
        this.width = t, this[_a] = i
    };
    JY[yr] = {
        width: 0, height: 0, isEmpty: function () {
            return this[ca] <= 0 || this[_a] <= 0
        }, clone: function () {
            return new JY(this[ca], this.height)
        }, toString: function () {
            return Bl + this[ca] + Rl + this[_a] + Xr
        }
    };
    var QY = function (t, i, e, s) {
        t instanceof Object && !R(t) && (i = t.y, e = t[ca], s = t[_a], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[ca] = e, this[_a] = s
    };
    QY[yr] = {
        x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this[ca] = t[ca] || 0, this.height = t.height || 0
        }, set: function (t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this.width = n || 0, this[_a] = e || 0
        }, offset: function (t, i) {
            return this.x += t, this.y += i, this
        }, contains: function (t, i, n, e) {
            if (1 == arguments[rr]) {
                if (br == typeof t && fi(t)) return this[I_](t.x, t.y, t[ca], t[_a]);
                throw{message: $l}
            }
            return 2 == arguments[rr] ? t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[_a] : ai(this.x, this.y, this[ca], this[_a], t, i, n || 0, e || 0)
        }, intersectsPoint: function (t, i, n) {
            return this[ca] <= 0 && this[_a] <= 0 ? !1 : n ? this[Fl](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        }, intersectsRect: function (t, i, n, e) {
            return hi(this.x, this.y, this.width, this.height, t, i, n, e)
        }, intersects: function (t, i) {
            return R(t[ca]) ? this[Fl](t.x, t.y, t[ca], t[_a]) : this[ru](t, i)
        }, intersection: function (t, i, n, e) {
            var s = this.x, h = this.y, r = s;
            r += this[ca];
            var a = h;
            a += this[_a];
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > h && (h = i), r > o && (r = o), a > f && (a = f), r -= s, a -= h, 0 > r || 0 > a ? null : new QY(s, h, r, a)
        }, addPoint: function (t) {
            this.add(t.x, t.y)
        }, add: function (t, i) {
            if (R(t[ca])) return this[Gl](t.x, t.y, t.width, t[_a]);
            if (R(t.x) && (i = t.y, t = t.x), this[ca] < 0 || this[_a] < 0) return this.x = t, this.y = i, void (this[ca] = this.height = 0);
            var n = this.x, e = this.y, s = this[ca], h = this[_a];
            s += n, h += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > h && (h = i), s -= n, h -= e, s > Number[zl] && (s = Number[zl]), h > Number[zl] && (h = Number.MAX_VALUE), this.set(n, e, s, h)
        }, addRect: function (t, i, n, e) {
            var s = this[ca], h = this.height;
            (0 > s || 0 > h) && this.set(t, i, n, e);
            var r = n, a = e;
            if (!(0 > r || 0 > a)) {
                var o = this.x, f = this.y;
                s += o, h += f;
                var u = t, c = i;
                r += u, a += c, o > u && (o = u), f > c && (f = c), r > s && (s = r), a > h && (h = a), s -= o, h -= f, s > Number.MAX_VALUE && (s = Number[zl]), h > Number[zl] && (h = Number[zl]), this.set(o, f, s, h)
            }
        }, shrink: function (t, i, n, e) {
            return R(t) ? 1 == arguments[rr] ? e = i = n = t || 0 : 2 == arguments[rr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[ed] || 0, n = t.bottom || 0, e = t[aa] || 0, t = t.top || 0), this.x += i, this.y += t, this[ca] -= i + e, this[_a] -= t + n, this
        }, grow: function (t, i, n, e) {
            return R(t) ? 1 == arguments[rr] ? e = i = n = t || 0 : 2 == arguments[rr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[ed] || 0, n = t[oa] || 0, e = t[aa] || 0, t = t.top || 0), this.x -= i, this.y -= t, this[ca] += i + e, this[_a] += t + n, this
        }, scale: function (t) {
            return this.x *= t, this.y *= t, this[ca] *= t, this.height *= t, this
        }, isEmpty: function () {
            return this[ca] <= 0 && this[_a] <= 0
        }, toString: function () {
            return this.x + Yl + this.y + Yl + this[ca] + Yl + this.height
        }, union: function (t) {
            var i = this[ca], n = this[_a];
            if (0 > i || 0 > n) return new QY(t.x, t.y, t.width, t.height);
            var e = t.width, s = t[_a];
            if (0 > e || 0 > s) return new QY(this.x, this.y, this.width, this[_a]);
            var h = this.x, r = this.y;
            i += h, n += r;
            var a = t.x, o = t.y;
            return e += a, s += o, h > a && (h = a), r > o && (r = o), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number.MAX_VALUE && (i = Number[zl]), n > Number[zl] && (n = Number[zl]), new QY(h, r, i, n)
        }, clear: function () {
            this.set(0, 0, -1, -1)
        }, equals: function (t) {
            return t && this.x == t.x && this.y == t.y && this[ca] == t[ca] && this[_a] == t[_a]
        }, clone: function (t, i) {
            return new QY(this.x + (t || 0), this.y + (i || 0), this[ca], this[_a])
        }, toArray: function () {
            return [this.x, this.y, this[ca], this[_a]]
        }, getIntersectionPoint: function (t, i, n, e) {
            return si(this, t, i, n, e)
        }
    }, E(QY, JY), QY[Gu] = function (t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t[ca] == i.width && t.height == i[_a]
    }, K(QY.prototype, {
        left: {
            get: function () {
                return this.x
            }
        }, top: {
            get: function () {
                return this.y
            }
        }, bottom: {
            get: function () {
                return this.y + this.height
            }
        }, right: {
            get: function () {
                return this.x + this[ca]
            }
        }, cx: {
            get: function () {
                return this.x + this[ca] / 2
            }
        }, cy: {
            get: function () {
                return this.y + this[_a] / 2
            }
        }, center: {
            get: function () {
                return new XY(this.cx, this.cy)
            }
        }
    }), QY[ql] = hi, QY[Hl] = oi, QY.intersectsPoint = ri;
    var tq = function (t, i, n, e) {
        1 == arguments[rr] ? i = n = e = t : 2 == arguments.length && (n = t, e = i), this.set(t, i, n, e)
    };
    tq[yr] = {
        top: 0, bottom: 0, left: 0, right: 0, set: function (t, i, n, e) {
            this.top = t || 0, this[ed] = i || 0, this[oa] = n || 0, this[aa] = e || 0
        }, clone: function () {
            return new tq(this.top, this[ed], this[oa], this[aa])
        }, equals: function (t) {
            return t && this.top == t.top && this.bottom == t[oa] && this[ed] == t[ed] && this[aa] == t.right
        }
    };
    var iq = function (t, i) {
        this[da] = t, this[la] = i
    };
    iq[yr] = {
        verticalPosition: !1, horizontalPosition: !1, toString: function () {
            return (this.horizontalPosition || "") + (this[la] || "")
        }
    }, Z(iq[yr], Ul, {
        get: function () {
            return (this[da] || "") + (this[la] || "")
        }
    });
    var nq = Wl, eq = Vl, sq = Xl, hq = kf, rq = Zl, aq = Kl;
    iq[Jl] = new iq(nq, hq), iq.LEFT_MIDDLE = new iq(nq, rq), iq[Ql] = new iq(nq, aq), iq[tv] = new iq(eq, hq), iq[iv] = new iq(eq, rq), iq[nv] = new iq(eq, aq), iq.RIGHT_TOP = new iq(sq, hq), iq.RIGHT_MIDDLE = new iq(sq, rq), iq[ev] = new iq(sq, aq);
    var oq = [iq[Jl], iq[sv], iq[Ql], iq[tv], iq.CENTER_MIDDLE, iq[nv], iq[hv], iq[rv], iq[ev]];
    Z(iq, Hr, {
        get: function () {
            return oq[Y(oq.length)]
        }
    }), iq[av] = function (t) {
        for (var i in iq) {
            var n = iq[i];
            if (n && Hr != i && n instanceof iq && n.toString() == t) return n
        }
        throw new Error("Position not be supported - " + t)
    };
    var fq = function (t, i, n, e, s) {
        this.set(t, i, n, e), this[ov] = s
    };
    fq.prototype = {
        radius: 0, classify: function (t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        }, intersectsRect: function (t, i, n, e) {
            if (T(this, fq, Fl, arguments) === !1) return !1;
            var s = this.x, h = this.y, r = s + this[ca], a = h + this[_a], o = 2 * radius, f = 2 * radius,
                u = Math.min(this[ca], Math.abs(o)) / 2, c = Math.min(this.height, Math.abs(f)) / 2,
                _ = this[fv](t, s, r, u), d = this[fv](t + n, s, r, u), l = this.classify(i, h, a, c),
                v = this[fv](i + e, h, a, c);
            return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + u) : t -= r - u, i = 1 == v ? i = i + e - (h + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
        }, intersectsPoint: function (t, i) {
            if (T(this, fq, ru, arguments) === !1) return !1;
            var n = this.x, e = this.y, s = n + this[ca], h = e + this[_a];
            if (n > t || e > i || t >= s || i >= h) return !1;
            var r = 2 * radius, a = 2 * radius, o = Math.min(this.width, Math.abs(r)) / 2,
                f = Math.min(this.height, Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = h - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        }, clone: function () {
            return new fq(this.x, this.y, this.width, this[_a], this[ov])
        }
    }, E(fq, QY);
    var uq = function (t, i, n, e) {
        this.source = t, this[$o] = i, this[uv] = n, this.value = e
    };
    uq.prototype = {
        source: null, type: null, kind: null, value: null, toString: function () {
            return cv + this[pf] + _v + this.type + dv + this.kind
        }
    };
    var cq = function (t, i, n, e, s) {
        this[pf] = t, this[uv] = i, this.oldValue = e, this[Or] = n, this.propertyType = s
    };
    cq.prototype = {
        type: lv, propertyType: null, toString: function () {
            return cv + this[pf] + _v + this[$o] + vv + this.kind + bv + this.oldValue + yv + this[Or]
        }
    }, E(cq, uq), Z(cq[yr], gv, {
        get: function () {
            return this[uv]
        }, set: function (t) {
            this.kind = t
        }
    });
    var _q = function (t, i, n) {
        this[pf] = t, this[pv] = t[Hu], this[Or] = i, this[mv] = n, this[pv] && (this[xv] = this.oldValue.getChildIndex(t))
    };
    _q[yr] = {kind: Hu}, E(_q, cq);
    var dq = function (t, i) {
        this.source = t, this[Or] = i
    };
    dq[yr][uv] = Ev, E(dq, cq);
    var lq = function (t, i) {
        this[pf] = t, this[Or] = i
    };
    lq[yr][uv] = wv, E(lq, cq);
    var vq = function (t, i, n, e) {
        this.source = i, this[pv] = n, this.value = e, this[Hu] = t, this[Tv] = i, this[xv] = n, this[mv] = e
    };
    vq.prototype[uv] = kv, E(vq, cq);
    var bq = function () {
    };
    bq[yr] = {
        listener: null, beforeEvent: function (t) {
            return null != this.listener && this[Mv].beforeEvent ? this[Mv][Ov](t) : !0
        }, onEvent: function (t) {
            null != this[Mv] && this.listener[Sv] && this[Mv][Sv](t)
        }
    };
    var yq = function () {
        w(this, yq, arguments), this[Iv] = {}, this[Pv] = []
    }, gq = function (t, i) {
        this.listener = t, this.scope = i, t instanceof Function ? this.onEvent = t : (this[Sv] = t[Sv], this.beforeEvent = t[Ov]), this[Gu] = function (t) {
            return t && this.listener == t.listener && this[Av] == t[Av]
        }
    };
    gq[yr] = {
        equals: function (t) {
            return t && this[Mv] == t[Mv] && this.scope == t[Av]
        }, destroy: function () {
            delete this[Av], delete this[Mv]
        }
    }, yq[yr] = {
        listeners: null, _n6o: function () {
            return this[Pv] && this[Pv].length > 0
        }, _78: function (t, i) {
            return t instanceof yq ? t : new gq(t, i)
        }, _9b: function (t, i) {
            if (t instanceof yq) return this.listeners.indexOf(t);
            for (var n = this[Pv], e = 0, s = n[rr]; s > e; e++) {
                var h = n[e];
                if (h[Mv] == t && h[Av] == i) return e
            }
            return -1
        }, contains: function (t, i) {
            return this._9b(t, i) >= 0
        }, addListener: function (t, i) {
            return this[I_](t, i) ? !1 : void this.listeners[lr](this._78(t, i))
        }, removeListener: function (t, i) {
            var n = this._9b(t, i);
            n >= 0 && this[Pv][fr](n, 1)
        }, on: function (t, i) {
            this.addListener(t, i)
        }, un: function (t, i, n) {
            this[Cv](t, i, n)
        }, onEvent: function (t) {
            return this[Pv] ? void l(this.listeners, function (i) {
                i[Sv] && (i[Av] ? i.onEvent[hr](i[Av], t) : i.onEvent(t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this[Pv] ? l(this[Pv], function (i) {
                return i.beforeEvent ? i[Av] ? i[Ov][hr](i[Av], t) : i[Ov](t) : !0
            }, this) : !0
        }, _dd: function (t) {
            return this.beforeEvent(t) === !1 ? !1 : (this.onEvent(t), !0)
        }, clear: function () {
            this[Pv] = []
        }, destroy: function () {
            this.clear()
        }
    }, E(yq, bq);
    var pq = {
        onEvent: function () {
        }, beforeEvent: function () {
        }
    }, mq = function (t, i, n, e, s) {
        this.source = t, this[$o] = Lv, this[uv] = i, this[Vo] = n, this[wf] = e, this.oldIndex = s
    };
    mq[yr] = {
        index: -1, oldIndex: -1, toString: function () {
            return cv + this.source + _v + this[$o] + dv + this[uv] + Dv + this.data + jv + this[wf] + Rv + this[xv]
        }
    }, E(mq, uq), mq.KIND_ADD = Nv, mq.KIND_REMOVE = _r, mq[Bv] = to, mq[$v] = Fv;
    var xq = function () {
        this.id = ++SY, this._n6y = {}
    };
    xq[yr] = {
        _n6y: null, id: null, get: function (t) {
            return this[Gv][t]
        }, set: function (t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new cq(this, t, i, n);
            return e.propertyType = rH[zc], this[zv](t, i, e, this[Gv])
        }, _n6m: function (t, i, e, s) {
            return this.beforeEvent(e) === !1 ? !1 : (s || (s = this[Gv]), i === n ? delete s[t] : s[t] = i, this[Sv](e), !0)
        }, remove: function (t) {
            this.set(t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _dg: function (t, i) {
            if (i === n && (i = -1), this == t || t == this._jl) return !1;
            if (t && this == t._jl && !t._dg(null)) return !1;
            var e = new _q(this, t, i);
            if (!this[Ov](e)) return !1;
            var s, h, r = this._jl;
            return t && (s = new dq(t, this), !t[Ov](s)) ? !1 : null == r || (h = new lq(r, this), r[Ov](h)) ? (this._jl = t, null != t && _i(t, this, i), null != r && di(r, this), this.onEvent(e), null != t && t[Sv](s), null != r && r[Sv](h), this[Yv](r, t), !0) : !1
        }, addChild: function (t, i) {
            var n = t._dg(this, i);
            return n && this[ba](t, i), n
        }, removeChild: function (t) {
            if (!this._f3 || !this._f3[I_](t)) return !1;
            var i = t._dg(null);
            return this[ya](t), i
        }, toChildren: function () {
            return this._f3 ? this._f3[Il]() : null
        }, clearChildren: function () {
            if (this._f3 && this._f3.length) {
                var t = this[qv]();
                l(t, function (t) {
                    t._dg(null)
                }, this), this[Hv](t)
            }
        }, forEachChild: function (t, i) {
            return this[er]() ? this._f3.forEach(t, i) : !1
        }, onChildAdd: function () {
        }, onChildRemove: function () {
        }, onChildrenClear: function () {
        }, onParentChanged: function () {
        }, getChildIndex: function (t) {
            return this._f3 && this._f3.length ? this._f3[vr](t) : -1
        }, setChildIndex: function (t, i) {
            if (!this._f3 || !this._f3[rr]) return !1;
            var n = this._f3[vr](t);
            if (0 > n || n == i) return !1;
            var e = new vq(this, t, n, i);
            return this[Ov](e) === !1 ? !1 : (this._f3[_r](t) && this._f3.add(t, i), this[Sv](e), !0)
        }, hasChildren: function () {
            return this._f3 && this._f3.length > 0
        }, getChildAt: function (t) {
            return null == this._f3 ? null : this._f3._jr[t]
        }, isDescendantOf: function (t) {
            if (!t.hasChildren()) return !1;
            for (var i = this[Hu]; null != i;) {
                if (t == i) return !0;
                i = i[Hu]
            }
            return !1
        }, firePropertyChangeEvent: function (t, i, n, e) {
            this[Sv](new cq(this, t, i, n, e))
        }
    }, E(xq, bq), K(xq[yr], {
        childrenCount: {
            get: function () {
                return this._f3 ? this._f3.length : 0
            }
        }, children: {
            get: function () {
                return this._f3 || (this._f3 = new UY), this._f3
            }
        }, parent: {
            get: function () {
                return this._jl
            }, set: function (t) {
                this._dg(t, -1)
            }
        }, properties: {
            get: function () {
                return this[Gv]
            }, set: function (t) {
                this._n6y != t && (this[Gv] = t)
            }
        }
    });
    var Eq = function () {
        this._jr = [], this._lj = {}, this._1f = new yq
    };
    Eq[yr] = {
        beforeEvent: function (t) {
            return null != this._1f && this._1f[Ov] ? this._1f[Ov](t) : !0
        }, onEvent: function (t) {
            return this._1f instanceof Function ? void this._1f(t) : void (null != this._1f && this._1f[Sv] && this._1f.onEvent(t))
        }, _1f: null, setIndex: function (t, i) {
            if (!this[I_](t)) throw new Error(za + t[Uv]() + Tl);
            var n = this[vr](t);
            if (n == i) return !1;
            var e = new mq(this, mq[$v], t, i, n);
            return this[Ov](e) === !1 ? !1 : (this._jr[_r](t) >= 0 && this._jr.add(i, t), this[Sv](e), !0)
        }, _f6: function (t, i) {
            if (0 == t[rr]) return !1;
            var e = !1, s = i >= 0, h = new mq(this, mq.KIND_ADD, t, i);
            if (this[Ov](h) === !1) return !1;
            var r = [];
            t = t._jr || t;
            for (var a = 0, o = t[rr]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._kj(f, i, !0) && (r[lr](f), e = !0, s && i++)
            }
            return h[Vo] = r, this[Sv](h), e
        }, _kj: function (t, i, n) {
            if (this[nc](t) === !1) return !1;
            if (n) return T(this, Eq, Wv, arguments);
            var e = new mq(this, mq[Vv], t, i);
            return this[Ov](e) === !1 ? !1 : T(this, Eq, Wv, arguments) ? (this._kn(t, e), t) : !1
        }, _kn: function (t, i) {
            this[Sv](i)
        }, _n6k: function (t) {
            if (0 == t.length) return !1;
            var i = new mq(this, mq[Xv], t);
            if (this[Ov](i) === !1) return !1;
            var e = [], s = !1;
            t = t._jr || t;
            for (var h = 0, r = t[rr]; r > h; h++) {
                var a = t[h];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._fg(o, a, !0) && (e[lr](a), s = !0)
                }
            }
            return i[Vo] = e, this[Sv](i), s
        }, _fg: function (t, i, n) {
            if (n) return T(this, Eq, Zv, arguments);
            var e = new mq(this, mq.KIND_REMOVE, i);
            return this[Ov](e) === !1 ? !1 : T(this, Eq, Zv, arguments) ? (this.onEvent(e), !0) : !1
        }, clear: function () {
            if (this.isEmpty()) return !1;
            var t = new mq(this, mq[Bv], this[Il]());
            return this.beforeEvent(t) === !1 ? !1 : T(this, Eq, to) ? (this[Sv](t), !0) : !1
        }, accept: function (t) {
            return this[Kv] && this[Kv](t) === !1 ? !1 : !0
        }
    }, E(Eq, UY), Z(Eq[yr], Jv, {
        get: function () {
            return this._1f
        }
    });
    var wq = function () {
        w(this, wq, arguments), this[Qv] = new yq, this[tb] = new Tq(this), this[tb]._1f = this[Qv], this[ib] = new yq, this.dataChangeDispatcher[Kd]({
            beforeEvent: this[nb],
            onEvent: this.onDataPropertyChanged
        }, this), this.parentChangeDispatcher = new yq, this[eb] = new yq, this[sb] = new UY;
        var t = this;
        this[sb][hc] = function (i, n) {
            if (!t[sb][I_](i)) throw new Error(za + i.id + Tl);
            var e = t[sb]._jr.indexOf(i);
            if (e == n) return !1;
            t[sb]._jr[fr](e, 1), t[sb]._jr[fr](n, 0, i), t._n6uIndexFlag = !0;
            var s = new vq(t, i, e, n);
            return t._23(s), !0
        }
    };
    wq[yr] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _kn: function (t, i) {
            t[Mv] = this[ib], t[Hu] || this[sb].add(t), this.onEvent(i)
        },
        _fg: function (t, i) {
            if (T(this, wq, Zv, arguments)) {
                if (i instanceof cW) i[hb](); else if (i instanceof _W) {
                    var n = i[rb]();
                    this[_r](n)
                }
                var e = i.parent;
                return null == e ? this.$roots.remove(i) : (e[ab](i), e.__68 = !0), i[er]() && this.remove(i[qv]()), i[Mv] = null, !0
            }
            return !1
        },
        _54: function (t) {
            var i = t.source;
            this.contains(i) && (null == i[Hu] ? this.$roots.add(i) : null == t.oldValue && this.$roots[_r](i), this[ob][Sv](t))
        },
        _23: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof _q ? this[ob][Ov](t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof _q ? (this[fb] = !0, t.source._n6uIndexFlag = !0, void this._54(t)) : void (t instanceof vq && (this[fb] = !0, t.source[fb] = !0, this._23(t)))
        },
        toRoots: function () {
            return this[sb][Il]()
        },
        _g1: function (t) {
            var i, n = t._jl;
            i = n ? n._f3 : this[sb];
            var e = i[vr](t);
            if (0 > e) throw new Error(ub + t + "' not exist in the box");
            return 0 == e ? n : i[cb](e - 1)
        },
        _g2: function (t) {
            var i, n = t._jl;
            i = n ? n._f3 : this[sb];
            var e = i.indexOf(t);
            if (0 > e) throw new Error(ub + t + "' not exist in the box");
            return e == i[rr] - 1 ? n ? this._g2(n) : null : i[cb](e + 1)
        },
        forEachByDepthFirst: function (t, i, n) {
            return this[sb].length ? h(this[sb], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function (t, i, n) {
            return this[sb].length ? o(this[sb], t, i, n) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this[sb][rr] ? c(this[sb], t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this[sb][rr] ? _(this[sb], t, i) : !1
        },
        clear: function () {
            return T(this, wq, to) ? (this[sb][to](), this[_b].clear(), !0) : !1
        }
    }, E(wq, Eq), K(wq[yr], {
        selectionModel: {
            get: function () {
                return this[tb]
            }
        }, roots: {
            get: function () {
                return this[sb]
            }
        }
    });
    var Tq = function (t) {
        w(this, Tq), this.box = t, this[db] = {
            onEvent: function (t) {
                mq[Xv] == t[uv] ? null != t[Vo] ? this[_r](t[Vo]) : null != t.datas && this[_r](t[Zd]) : mq.KIND_CLEAR == t[uv] && this[to]()
            }
        }, this.box[Jv][Kd](this._n6oxChangeListener, this)
    };
    Tq.prototype = {
        box: null, isSelected: function (t) {
            return this[wl](t.id || t)
        }, select: function (t) {
            return this.add(t)
        }, unselect: function (t) {
            return this[_r](t)
        }, reverseSelect: function (t) {
            return this.contains(t) ? this[_r](t) : this.add(t)
        }, accept: function (t) {
            return this.box[I_](t)
        }
    }, E(Tq, Eq);
    var kq = null, Mq = null, Oq = function () {
        if (!i[ro]) return function (t) {
            return t
        };
        var t = i.createElement(N_), e = t.style, s = {};
        return function (t) {
            if (s[t]) return s[t];
            var i = li(t);
            return e[i] !== n || Mq && e[i = li(Mq + i)] !== n ? (s[t] = i, i) : t
        }
    }(), Sq = {};
    !function () {
        if (!i[lb]) return !1;
        for (var e = i[lb], s = "Webkit Moz O ms Khtml"[Lr](Dr), h = 0; h < s[rr]; h++) if (e[wa][s[h] + vb] !== n) {
            Mq = ma + s[h][xa]() + ma;
            break
        }
        var r = i.createElement(wa);
        t[bb] || r[q_](i.createTextNode("")), r[$o] = yb, r.id = gb, e[q_](r), kq = r[pb];
        var a, o;
        for (var f in Sq) {
            var u = Sq[f];
            a = f, o = "";
            for (var c in u) o += Oq(c) + Ta + u[c] + mb;
            pi(a, o)
        }
    }();
    var Iq = function (t, i, n, e, s) {
        if (s) {
            var h = function (t) {
                h[xb][hr](h[Av], t)
            };
            return h[Av] = s, h[xb] = n, t[Eb](i, h, e), h
        }
        return t[Eb](i, n, e), n
    }, Pq = function (t, i, n) {
        t[wb](i, n)
    };
    if (HY.DOUBLE_CLICK_INTERVAL_TIME = 200, HY.LONG_PRESS_INTERVAL = 800, HY[Tb] = !0, t.navigator && navigator[rl]) {
        var Aq, Cq = /mobile|tablet|ip(ad|hone|od)|android/i, Lq = F_ in t, Dq = Lq && Cq[Xo](navigator.userAgent);
        if (Dq) Aq = kb; else {
            var jq = Mb in t ? "mousewheel" : Ob;
            Aq = Sb + jq, Lq && (Aq += Ib)
        }
        Aq = Aq[Lr](/[\s,]+/);
        var Rq = function (i) {
            return t[Pb] && i instanceof t.TouchEvent
        }, Nq = function () {
            return HY[Ab]
        }, Bq = function () {
            return HY[Cb]
        }, F = function (t) {
            t[$r] ? t.preventDefault() : t[Fr] = !1
        }, G = function (t) {
            t[zr] && t.stopPropagation(), t[Yr] = !0
        }, z = function (t) {
            F(t), G(t)
        }, $q = function (t) {
            return t[Lb] || t[Fr] === !1
        }, Fq = function (t) {
            Hq[Db] && Hq[Db]._onWindowMouseMove(t)
        }, Gq = function (t) {
            if (Hq[Db]) {
                var i = Hq[Db];
                i[jb](t), zq(null)
            }
        }, zq = function (t) {
            Hq[Db] != t && (Hq._n4urrentItem && (Hq._n4urrentItem.__dragging = !1), Hq._n4urrentItem = t)
        }, Yq = function (i, n) {
            Aq[qu](function (t) {
                i[Eb](t, n, !1)
            }), YY || Hq[Dc] || (Hq[Dc] = !0, t[Eb](Rb, Fq, !0), t[Eb](Nb, Gq, !0))
        }, qq = function (t, i) {
            Aq.forEach(function (n) {
                t[wb](n, i, !1)
            })
        };
        wi[yr] = {
            _install: function () {
                this[Bb] || (this[Bb] = function (t) {
                    this[Ud](t)
                }.bind(this), Yq(this._m9, this[Bb]))
            }, _uninstall: function () {
                this.__n2ction && qq(this._m9, this.__n2ction)
            }, _n2ction: function (t) {
                t = this[$b](t);
                var i = t[$o];
                this[Fb](t, i) === !1 && this[Gb](t, zb + i)
            }, _n4ancelLongPressTimer: function () {
                this[Yb] && (clearTimeout(this.__longPressTimer), this[Yb] = null)
            }, __kpLongPress: function (t) {
                this[qb] || (this[qb] = function () {
                    this._kpEvent && (this.__n4ancelClick = !0, this._kpEvent[Hb] ? this[Gb](this[Ub], Wb) : this[Gb](this[Ub], Vb))
                }[Pr](this)), this[Xb](), this[Yb] = setTimeout(this[qb], Bq(t))
            }, __fixTouchEvent: function (t) {
                for (var i, n, e = 0, s = 0, h = t[ia].length, r = 0; h > r;) {
                    var a = t[ia][r++], o = a[La], f = a[Da];
                    if (2 == r) {
                        var u = n[0] - o, c = n[1] - f;
                        i = Math[Mo](u * u + c * c)
                    }
                    n = [o, f], e += o, s += f
                }
                t.cx = e / h, t.cy = s / h, t[Zb] = {x: t.cx, y: t.cy, clientX: t.cx, clientY: t.cy}, t[Nl] = i
            }, __touchCountChange: function (t) {
                this._dragPoints[to](), this._9y = Ei(t, this._m9)
            }, _handleTouchEvent: function (t, i) {
                switch (i) {
                    case"touchstart":
                        G(t), this[Kb](t), this[Jb](t);
                        var n = t[ia].length;
                        this._kpEvent || (this[Ub] = t, this[Qb](t), this[ty] = !1, this.__kpLongPress(t)), 1 == n && (this[iy] = null), n >= 2 && !this[iy] && (this.__kpMulTouchEvent = {
                            cx: t.cx,
                            cy: t.cy,
                            distance: t[Nl]
                        });
                        break;
                    case"touchmove":
                        z(t), this.__fixTouchEvent(t);
                        var n = t.touches.length;
                        if (n >= 2 && this.__kpMulTouchEvent) {
                            var e = this[iy][Nl];
                            t._scale = t.distance / e, t[ny] = this[iy][ey] ? t[sy] / this[iy][ey] : t[sy], this.__kpMulTouchEvent[ey] = t[sy], this[hy] || (this[hy] = !0, this._onEvent(t, ry))
                        }
                        this.__dragging || (this[ay] = !0, this._kpdrag(t)), this[oy](t), this[hy] && this._onEvent(t, fy);
                        break;
                    case"touchend":
                        z(t);
                        var n = t.touches.length;
                        n && (this[Kb](t), this[Jb](t)), 1 >= n && (this[hy] && (this[hy] = !1, this[Gb](t, uy)), this[iy] = null), 0 == n && (this[ay] ? (this[cy](t), this[ay] = !1) : t[_y] - this[Ub].timeStamp < .8 * Nq(t) && this[dy](this._kpEvent), this[ly](t));
                        break;
                    case"touchcancel":
                        this[ay] = !1, this.__pinching = !1, this[iy] = null
                }
                return !1
            }, _handleEvent: function (t, i) {
                if (Rq(t)) return this[vy](t, i);
                if (by == i) G(t), zq(this), this._9y = Ei(t, this._m9), this[Ub] || (this._kpEvent = t, this[Qb](t)), this[ty] = !1, this[yy](t); else if (Nb == i) zq(), this[ly](t); else if (gy == i) {
                    if (this[ty]) return !0;
                    if (this[py]()) return this[dy](t), !0
                } else if (my == i) {
                    if (this._isDelayClick()) return !0
                } else {
                    if (xy == i) return this[Gb](t, Ey), this[Ub] && $q(t) && zq(this), !0;
                    if (i == jq) {
                        var e = t[wy];
                        if (e !== n ? e /= 120 : e = -t[Ty], !e) return;
                        return t.delta = e, this[Gb](t, Mb)
                    }
                }
                return !1
            }, _onEvent: function (t, i) {
                if (this[ky]) {
                    var n = this._handler;
                    if (i = i || t.type, n instanceof Function) return n(t, i);
                    if (!(n[nc] instanceof Function && n.accept(i, t) === !1)) return n[My] instanceof Function && n[My](i, t, this[Oy] || this._m9), n[i] instanceof Function ? n[i][hr](n, t, this._scope || this._m9) : void 0
                }
            }, _toQEvent: function (t) {
                return t
            }, _onWindowMouseUp: function (t) {
                this[ay] && (z(t), this[ay] = !1, t = this[$b](t), this[cy](t), this[ly](t), this[Gb](t, Sy))
            }, _kpDragDistance: 4, _onWindowMouseMove: function (t) {
                if (this._kpEvent) {
                    if (z(t), !this.__dragging) {
                        var i = this[Ub][Iy] - t[Iy], n = this._kpEvent.screenY - t.screenY, e = i * i + n * n;
                        if (e < this._kpDragDistance) return;
                        this[ay] = !0, this._kpdrag(t)
                    }
                    this[oy](this[$b](t))
                }
            }, _isDelayClick: function () {
                return HY[Tb]
            }, __onclick: function (t) {
                if (!this.__n4ancelClick) {
                    var i = Nq(t);
                    this[Py] ? this[Ay] || (clearTimeout(this[Py]), this[Py] = null, this._onEvent(t, Cy), this[Ay] = !0) : (this[Ay] = !1, this[Py] = setTimeout(function (t) {
                        this[Py] = null, this[Ay] || this[Gb](t, G_)
                    }[Pr](this, t, i), i))
                }
            }, _onstart: function (t) {
                t[Hb] ? this._onEvent(t, Ly) : this[Gb](t, Dy)
            }, _onrelease: function (t) {
                this._kpEvent && (this[Xb](), t[Hb] ? this._onEvent(t, jy) : this[Gb](t, Ry), this[Ub] = null, this._9y = null)
            }, _n2ppendDragInfo: function (t) {
                var i = this._9y;
                this._9y = Ei(t, this._m9), this._dragPoints.add(i, this._9y, t)
            }, _kpdrag: function () {
                this[ty] = !0, this[Xb](), this[Ub][Hb] ? this._onEvent(this[Ub], Ny) : this._onEvent(this[Ub], By)
            }, _ondrag: function (t) {
                this._n2ppendDragInfo(t), this[Ub].button ? this._onEvent(t, $y) : this._onEvent(t, Fy)
            }, _enddrag: function (t) {
                if (t.timeStamp - this._9y.timeStamp < 100) {
                    var i = this[Gy][zy]();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this._kpEvent[Hb] ? this[Gb](t, Yy) : this[Gb](t, qy), this[Gy][to]()
            }, _ih: function () {
                this[Hy]()
            }, _kzStatus: function () {
                Hq[Db] == this && delete Hq[Db], this[Xb](), delete this._9y, this[Ub] && (delete this[Ub][Uy], delete this[Ub][Wy], delete this._kpEvent)
            }
        };
        var Hq = S(function (t) {
            this._km = t, wi[mr](this, [t[Vy], null, t])
        }, {
            "super": wi, _muData: function (t) {
                return this._km[Xy](t)
            }, _lb: function (t) {
                return this._km[Zy](t)
            }, _toQEvent: function (i) {
                return (i instanceof MouseEvent || t[Pb] && i instanceof t[Pb]) && (i[Uy] = this._muData.bind(this, i), i.getUI = this._lb[Pr](this, i)), i
            }, _onElementRemoved: function (t) {
                this._ilListeners(function (i) {
                    i.onElementRemoved instanceof Function && i[Ky](t, this._km)
                })
            }, _onElementClear: function () {
                this[Jy](function (t) {
                    t.onClear instanceof Function && t.onClear(this._km)
                })
            }, _ih: function (t) {
                this[Qy] && this[tg](this._29s, t), this._n4ustomInteractionListeners && this[tg](this[ig], t), this._kzStatus()
            }, _km: null, _29s: null, _n4ustomInteractionListeners: null, _mqInteraction: function (t) {
                return this._29s == t ? !1 : (this[Qy] && this[Qy][rr] && this[tg](this._29s), void (this[Qy] = t))
            }, _mnCustomInteractionListener: function (t) {
                this[ig] || (this[ig] = []), this[ig].push(t)
            }, _kcCustomInteractionListener: function (t) {
                this[ig] && 0 != this[ig].length && p(this._n4ustomInteractionListeners, t)
            }, _onEvent: function (t, i, n) {
                this._km[i] instanceof Function && this._km[i][hr](this._km, t, n), this[Qy] && this[ng](t, i, this._29s, n), this[ig] && this[ng](t, i, this[ig], n)
            }, _ilListeners: function (t) {
                this[Qy] && l(this._29s, t, this), this[ig] && l(this[ig], t, this)
            }, __onEvent: function (t, i, n, e) {
                if (!$(n)) return void this[eg](t, i, n, e);
                for (var s = 0; s < n[rr]; s++) {
                    var h = n[s];
                    this[eg](t, i, h, e)
                }
            }, __handleEvent: function (t, i, n, e) {
                if (!(n.accept instanceof Function && n[nc](i, t, this._km, e) === !1)) {
                    n[My] instanceof Function && n[My](i, t, this._km, e);
                    var s = n[i];
                    s instanceof Function && s.call(n, t, this._km, e)
                }
            }, _ihInteraction: function (t) {
                t.destroy instanceof Function && t[sg][hr](t, this._km)
            }, _ihInteractions: function (t, i) {
                if (!$(t)) return void this._ihInteraction(t, i);
                for (var n = 0; n < t[rr]; n++) {
                    var e = t[n];
                    e && this[hg](e, i)
                }
            }
        })
    }
    ki[yr] = {
        limitCount: 10, points: null, add: function (t, i, n) {
            0 == this.points[rr] && (this[rg] = t.x, this[ag] = t.y);
            var e = i[_y] - t[_y] || 1;
            n[og] = e;
            var s = i.x - t.x, h = i.y - t.y;
            n.dx = s, n.dy = h, n.startX = this[rg], n.startY = this._kpY, n[fg] = i.x - this._kpX, n.totalDeltaY = i.y - this[ag], this.points[fr](0, 0, {
                interval: e,
                dx: s,
                dy: h
            }), this.points[rr] > this.limitCount && this[Co].pop()
        }, getCurrentSpeed: function () {
            if (!this[Co][rr]) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this.points[rr]; s > e; e++) {
                var h = this.points[e], r = h[og];
                if (r > 150) {
                    t = 0;
                    break
                }
                if (t += r, i += h.dx, n += h.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {x: i / t, y: n / t}
        }, clear: function () {
            this[Co] = []
        }
    };
    var Uq, Wq, Vq, Xq;
    DY ? (Uq = ug, Wq = cg, Vq = _g, Xq = dg) : jY ? (Uq = lg, Wq = vg, Vq = bg, Xq = yg) : (Uq = gg, Wq = gg, Vq = xd, Xq = pg);
    var Zq = mg, Kq = Math.PI, Jq = Math.pow, Qq = Math.sin, tH = 1.70158, iH = {
        swing: function (t) {
            return -Math.cos(t * Kq) / 2 + .5
        }, easeNone: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return (2 - t) * t
        }, easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        }, easeInStrong: function (t) {
            return t * t * t * t
        }, easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        }, easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        }, elasticIn: function (t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : -(Jq(2, 10 * (t -= 1)) * Qq(2 * (t - n) * Kq / i))
        }, elasticOut: function (t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : Jq(2, -10 * t) * Qq(2 * (t - n) * Kq / i) + 1
        }, elasticBoth: function (t) {
            var i = .45, n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * Jq(2, 10 * (t -= 1)) * Qq(2 * (t - n) * Kq / i) : Jq(2, -10 * (t -= 1)) * Qq(2 * (t - n) * Kq / i) * .5 + 1
        }, backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((tH + 1) * t - tH)
        }, backOut: function (t) {
            return (t -= 1) * t * ((tH + 1) * t + tH) + 1
        }, backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((tH *= 1.525) + 1) * t - tH) : .5 * ((t -= 2) * t * (((tH *= 1.525) + 1) * t + tH) + 2)
        }, bounceIn: function (t) {
            return 1 - iH[xg](1 - t)
        }, bounceOut: function (t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        }, bounceBoth: function (t) {
            return .5 > t ? .5 * iH.bounceIn(2 * t) : .5 * iH.bounceOut(2 * t - 1) + .5
        }
    }, nH = function (t) {
        this._k7 = t
    };
    nH[yr] = {
        _k7: null, _85: function () {
            this._n4allback instanceof Function && (this[Eg](), this._n4allback = null)
        }, _kp: function (t) {
            var i = Date.now();
            this._ll(), this[Eg] = t, this[wg] = requestAnimationFrame(function n() {
                var t = Date.now(), e = t - i;
                return !e || this._k7 && this._k7(e) !== !1 ? (i = t, void (this._requestID = requestAnimationFrame(n[Pr](this)))) : void this._ll()
            }.bind(this))
        }, _6d: function () {
        }, _ll: function () {
            return this[wg] ? (this._6d(), this._85(), t.cancelAnimationFrame(this[wg]), void delete this[wg]) : !1
        }, _df: function () {
            return null != this[wg]
        }
    };
    var eH = function (t, i, n, e) {
        this[Tg] = t, this[Oy] = i || this, this._36 = e, n && n > 0 && (this._ir = n)
    };
    eH.prototype = {
        _ir: 1e3, _36: null, _dl: 0, _ll: function () {
            return this._dl = 0, this[kg] = 0, T(this, eH, Mg)
        }, _n4z: 0, _k7: function (t) {
            if (this._dl += t, this._dl >= this._ir) return this[Tg].call(this[Oy], 1, (1 - this._n4z) * this._ir, t, this._ir), !1;
            var i = this._dl / this._ir;
            return this._36 && (i = this._36(i)), this[Tg].call(this._scope, i, (i - this[kg]) * this._ir, t, this._ir) === !1 ? !1 : void (this[kg] = i)
        }
    }, E(eH, nH);
    var sH = function (t) {
        ni(t)
    }, hH = {
        version: Og,
        extend: E,
        doSuperConstructor: w,
        doSuper: T,
        createFunction: function (t, i) {
            return i[Pr](t)
        },
        setClass: L,
        appendClass: D,
        removeClass: j,
        forEach: l,
        forEachReverse: b,
        isNumber: R,
        isString: N,
        isBoolean: B,
        isArray: $,
        eventPreventDefault: F,
        eventStopPropagation: G,
        stopEvent: z,
        callLater: A,
        nextFrame: C,
        forEachChild: e,
        forEachByDepthFirst: h,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: Y,
        randomBool: q,
        randomColor: U,
        addEventListener: Iq,
        getFirstElementChildByTagName: VY
    };
    hH[Sg] = YY, hH.isIOS = FY, hH[ru] = ri, hH[Ig] = ai, hH[Pg] = QY, hH.Size = JY, hH.Point = XY, hH.Insets = tq, hH[Ag] = uq, hH[Cg] = cq, hH.ListEvent = mq, hH[Lg] = bq, hH.Dispatcher = yq, hH[Dg] = iq, hH.Data = xq, hH[jg] = Tq, hH.DataModel = wq, hH.IListener = pq, hH.loadURL = Si, hH.loadXML = Mi, hH.loadJSON = Oi, hH[Rg] = Ti, hH[Ng] = ZY, hH.HashList = UY, hH[Bg] = wi, hH.alert = function (t) {
        alert(t)
    }, hH.prompt = function (t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[hr](e, s) : s
    }, hH[$g] = function (t, i, n) {
        var e = confirm(t);
        return e && i ? i.call(n) : e
    }, hH[Fg] = pi;
    var rH = {
        IMAGE_ADJUST_FLIP: Gg,
        IMAGE_ADJUST_MIRROR: zg,
        SELECTION_TYPE_BORDER_RECT: Yg,
        SELECTION_TYPE_BORDER: qg,
        SELECTION_TYPE_SHADOW: Hg,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: Ug,
        EDGE_TYPE_ELBOW_HORIZONTAL: Wg,
        EDGE_TYPE_ELBOW_VERTICAL: Vg,
        EDGE_TYPE_ORTHOGONAL: Xg,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Zg,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: Kg,
        EDGE_TYPE_HORIZONTAL_VERTICAL: Jg,
        EDGE_TYPE_VERTICAL_HORIZONTAL: Qg,
        EDGE_TYPE_EXTEND_TOP: tp,
        EDGE_TYPE_EXTEND_LEFT: ip,
        EDGE_TYPE_EXTEND_BOTTOM: np,
        EDGE_TYPE_EXTEND_RIGHT: ep,
        EDGE_TYPE_ZIGZAG: sp,
        EDGE_CORNER_NONE: X_,
        EDGE_CORNER_ROUND: Lf,
        EDGE_CORNER_BEVEL: hp,
        GROUP_TYPE_RECT: sf,
        GROUP_TYPE_CIRCLE: rp,
        GROUP_TYPE_ELLIPSE: ap,
        SHAPE_CIRCLE: op,
        SHAPE_RECT: sf,
        SHAPE_ROUNDRECT: fp,
        SHAPE_STAR: up,
        SHAPE_TRIANGLE: cp,
        SHAPE_HEXAGON: _p,
        SHAPE_PENTAGON: dp,
        SHAPE_TRAPEZIUM: lp,
        SHAPE_RHOMBUS: vp,
        SHAPE_PARALLELOGRAM: bp,
        SHAPE_HEART: yp,
        SHAPE_DIAMOND: gp,
        SHAPE_CROSS: pp,
        SHAPE_ARROW_STANDARD: mp,
        SHAPE_ARROW_1: xp,
        SHAPE_ARROW_2: Ep,
        SHAPE_ARROW_3: wp,
        SHAPE_ARROW_4: Tp,
        SHAPE_ARROW_5: kp,
        SHAPE_ARROW_6: Mp,
        SHAPE_ARROW_7: Op,
        SHAPE_ARROW_8: Sp,
        SHAPE_ARROW_OPEN: Ip
    };
    rH[Pp] = Ap, rH[Cp] = Lf, rH[Lp] = Dp, rH.LINE_JOIN_TYPE_BEVEL = hp, rH[jp] = Lf, rH[Rp] = Np, rH[Bp] = $p, rH[b_] = Fp, rH[g_] = Ug, HY[Gp] = rH[zp], HY[Td] = Dq ? 8 : 3, HY.SELECTION_BORDER = 2, HY[Yp] = 7, HY[qp] = X(3422561023), HY.SELECTION_TYPE = rH[zp], HY.BORDER_RADIUS = 10, HY.POINTER_WIDTH = 10, HY[Hp] = 10, HY[Up] = 200, HY[yo] = 1.2;
    var aH = t[Wp] || 1;
    1 > aH && (aH = 1);
    var oH;
    hH.createCanvas = Ri;
    var fH = NY && !YY, uH = 9, cH = function (t, i, n, e) {
        var s = t - n, h = i - e;
        return s * s + h * h
    };
    hn[yr] = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, hn[So] = function (t, i, n) {
        if (!n) return en(t, i);
        var e = cH(t.x, t.y, i.x, i.y), s = cH(t.x, t.y, n.x, n.y), h = cH(n.x, n.y, i.x, i.y);
        if (e + _H >= s + h) return en(t, i, 0, n);
        if (s + _H >= e + h) return en(t, n, 0, i);
        if (h + _H >= e + s) return en(i, n, 0, t);
        var r;
        Math.abs(n.y - i.y) < 1e-4 && (r = t, t = i, i = r), r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new hn(a, o, ZY(a, o, t.x, t.y), t, i, n)
    };
    var _H = .01, dH = {
        _n63: function (t, i, e, s, h) {
            if (N(t) && (t = iq[av](t)), !t) return {x: 0, y: 0};
            var r = 0, a = 0, o = i._iy;
            if (e = e || 0, t.x === n) {
                var f = t[da], u = t.verticalPosition, c = !0;
                switch (f) {
                    case sq:
                        c = !1;
                        break;
                    case eq:
                        r += o / 2
                }
                switch (u) {
                    case hq:
                        a -= e / 2;
                        break;
                    case aq:
                        a += e / 2
                }
            } else r = t.x, a = t.y, Math.abs(r) > 0 && Math.abs(r) < 1 && (r *= o);
            h && null != s && (a += s.y, r += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var _ = dn[hr](i, r, a, c);
            return _ ? (h || null == s || _[Vp](s), _) : {x: 0, y: 0}
        }, _lm: function (t, i) {
            var n = i.type, e = i[Co];
            switch (n) {
                case $H:
                    t[Xp](e[0], e[1], e[2], e[3], i._r);
                    break;
                case jH:
                    t.moveTo(e[0], e[1]);
                    break;
                case RH:
                    t.lineTo(e[0], e[1]);
                    break;
                case NH:
                    t[Zp](e[0], e[1], e[2], e[3]);
                    break;
                case BH:
                    t[Kp](e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case FH:
                    t[Nf]()
            }
        }, _5p: function (t, i, n, e) {
            var s = i[$o];
            if (s != jH && s != FH) {
                var h = n[Bo], r = i.points;
                switch (n[$o] == jH && t.add(h.x, h.y), s) {
                    case $H:
                        bn(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]), t.add(r[0], r[1]), t.add(i._p1x, i[Yo]), t.add(i[Go], i[Ho]), i[Jp] && t.add(i.$boundaryPoint1.x, i.$boundaryPoint1.y), i.$boundaryPoint2 && t.add(i[Qp].x, i[Qp].y);
                        break;
                    case RH:
                        t.add(r[0], r[1]);
                        break;
                    case NH:
                        Ui([h.x, h.y][ur](r), t);
                        break;
                    case BH:
                        Ji([h.x, h.y][ur](r), t);
                        break;
                    case FH:
                        e && t.add(e[Co][0], e[Co][1])
                }
            }
        }, _5q: function (t, i, n) {
            var e = t[$o];
            if (e == jH) return 0;
            var s = i.lastPoint, h = t[Co];
            switch (e == BH && 4 == h[rr] && (e = NH), e) {
                case RH:
                    return ZY(h[0], h[1], s.x, s.y);
                case $H:
                    return t._iy;
                case NH:
                    var r = Xi([s.x, s.y][ur](h));
                    return t._lf = r, r(1);
                case BH:
                    var r = tn([s.x, s.y][ur](h));
                    return t._lf = r, r(1) || Qi([s.x, s.y].concat(h));
                case FH:
                    if (s && n) return t[Co] = n.points, ZY(n[Co][0], n[Co][1], s.x, s.y)
            }
            return 0
        }
    }, lH = /^data:image\/(\w+);base64,/i, vH = /^gif/i, bH = /^svg/i, yH = 10, gH = 11, pH = 12, mH = 20, xH = 30;
    HY[vf] = 50, HY[tm] = 30, HY[im] = {
        draw: function (t, i) {
            xn(t, i.width, i.height, i[nm])
        }
    }, HY.IMAGE_INVALID = {
        draw: function (t, i) {
            xn(t, i[ca], i[_a], i[nm], !0)
        }
    }, HY[em] = 1e6;
    var EH = 1, wH = 2, TH = 3;
    Tn[yr] = {
        _j1: 0, _68: !0, _kq: null, _j3: null, _lh: null, _mb: null, _n2b: n, _8u: n, _62: function () {
            return this._j1 == EH
        }, getBounds: function (t) {
            return this._mb == xH ? this._lh[Lo](t) : (this._68 && this._fu(), this)
        }, validate: function () {
            this._68 && this._fu()
        }, _fu: function () {
            if (this._68 = !1, this._mb == xH) return this._lh[Po](), void this[sm](this._lh[Ao]);
            if (this._mb == mH) return void this._93();
            if (this._j1 != EH) try {
                this._dn()
            } catch (t) {
                this._j1 = TH, hH.error(t)
            }
        }, _52: function () {
            this._dd(), this[hm][to](), delete this._dispatcher
        }, _ht: function (t) {
            this._kq[rm] && this._kq.parentNode.removeChild(this._kq), this._j1 = TH, hH.error(am + this._lh), this[om] = null, this._j3 = null, this._kq = null, t !== !1 && this._52()
        }, _dn: function () {
            var t = this._lh;
            if (this._j1 = EH, this[hm] = new yq, this._mb == pH) {
                for (var n in ZH) this[n] = ZH[n];
                return void se(this._lh, this, this._n4t, this._ht, this._ef)
            }
            this._kq || (this._kq = i.createElement($_), this._kq[fm] = um, AY && (this._kq[wa][cm] = V_, i[_m].appendChild(this._kq))), AY ? (this._kq[Mu] = function () {
                setTimeout(this._7s[Pr](this), 100)
            }[Pr](this), this._kq[Ou] = this._ht.bind(this)) : (this._kq[Mu] = this._7s.bind(this), this._kq.onerror = this._7s.bind(this)), this._kq.src = t
        }, _hv: !0, _7s: function () {
            var t = this._kq.width, i = this._kq[_a];
            if (!t || !i) return void this._ht();
            if (this._kq[rm] && this._kq[rm][ab](this._kq), this._j1 = wH, this[ca] = t, this.height = i, AY && this._mb == gH) this[om] = null, this._hv = !1; else if (this._mb == gH || mn(this._kq.src)) {
                var n = Ri();
                n[ca] = t, n.height = i, n.g[ud](this._kq, 0, 0, t, i), pn(n.g, n) && (this._j3 = n, this[om] = Ln(n))
            }
            this._52()
        }, _93: function () {
            var t = this._lh;
            if (!(t[lf] instanceof Function)) return void this._ht(!1);
            if (t[dm] === !1 && t.width && t[_a]) return this[ca] = t[ca], void (this.height = t[_a]);
            var i = t[ca] || HY[Up], n = t[_a] || HY.IMAGE_MAX_SIZE, e = this._db();
            e.width = i, e[_a] = n;
            var s = e.g;
            t[lf](s);
            var h = Gi(s, 0, 0, i, n);
            if (h) {
                var r = jn(h.data, i, n);
                this.x = r._x, this.y = r._y, this[ca] = r[lm], this.height = r[vm], e[ca] = this[ca], e[_a] = this[_a], s[Cf](h, -this.x, -this.y), this._pixels = r
            }
        }, _db: function () {
            return this._j3 || (this._j3 = Ri())
        }, draw: function (t, i, n, e, s, h) {
            if (this[ca] && this[_a]) {
                i = i || 1, e = e || 1, s = s || 1;
                var r = this[ca] * e, a = this.height * s;
                if (h && n[bm] && (t[bm] = n.shadowColor, t.shadowBlur = (n[fd] || 0) * i, t[ym] = (n.shadowOffsetX || 0) * i, t.shadowOffsetY = (n[gm] || 0) * i), this._j1 == EH) return void (HY.IMAGE_DEFAULT && HY.IMAGE_DEFAULT[lf](t, {
                    src: this._lh,
                    width: r,
                    height: a,
                    renderColor: n[nm]
                }));
                if (this._j1 == TH) return void (HY.IMAGE_INVALID && HY.IMAGE_INVALID[lf](t, {
                    src: this._lh,
                    width: r,
                    height: a,
                    renderColor: n[nm]
                }));
                if (this._mb == xH) return t[nf](e, s), void this._lh[lf](t, i, n);
                var o = this._fe(i, e, s);
                return o ? ((this.x || this.y) && t[bo](this.x * e, this.y * s), t[nf](e / o.scale, s / o.scale), void o._lm(t, n[nm], n[pm])) : void this._j4(t, i, e, s, this[ca] * e, this.height * s, n)
            }
        }, _j4: function (t, i, n, e, s, h, r) {
            if (this._mb == mH) return 1 != n && 1 != e && t[nf](n, e), void this._lh[lf](t, r);
            if (this._kq) {
                if (!RY) return void t.drawImage(this._kq, 0, 0, s, h);
                var n = i * s / this.width, e = i * h / this[_a];
                t[nf](1 / n, 1 / e), t[ud](this._kq, 0, 0, s * n, h * e)
            }
        }, _j6: null, _fe: function (t, i, n) {
            if (this._mb == mH && this._lh[dm] === !1) return null;
            if (this._mb == yH || (t *= Math.max(i, n)) <= 1) return this[mm] || (this[mm] = this._ff(this._j3 || this._kq, 1, this._hv)), this[mm];
            var e = this._j6[xm] || 0;
            if (t = Math.ceil(t), e >= t) {
                for (var s = t, h = this._j6[s]; !h && ++s <= e;) h = this._j6[s];
                if (h) return h
            }
            t % 2 && t++;
            var r = this[ca] * t, a = this[_a] * t;
            if (r * a > HY[em]) return null;
            var o = Ri(r, a);
            return (this.x || this.y) && o.g[bo](-this.x * t, -this.y * t), this._j4(o.g, 1, t, t, r, a), this._ff(o, t)
        }, _ff: function (t, i) {
            var n = new qH(t, i);
            return this._j6[i] = n, this._j6[xm] = i, n
        }, hitTest: function (t, i, n) {
            if (this._mb == xH) return this._lh[P_][mr](this._lh, arguments);
            if (!(this[om] || this._kq && this._kq[om])) return !0;
            var e = this._pixels || this._kq[om];
            return e._hx(t, i, n)
        }, _dd: function () {
            this[hm] && this[hm][Sv](new uq(this, Em, wm, this._kq))
        }, _n27: function (t, i) {
            this[hm] && this._dispatcher[Kd](t, i)
        }, _6a: function (t, i) {
            this[hm] && this._dispatcher.removeListener(t, i)
        }, _n42: function (t) {
            this._j6 = {}, (t || this[ca] * this[_a] > 1e5) && (this._kq = null, this._j3 = null)
        }
    }, E(Tn, QY);
    var kH = {};
    hH[ud] = In, hH[Tm] = kn, hH[km] = On, hH[Mm] = function () {
        var t = [];
        for (var i in kH) t[lr](i);
        return t
    };
    var MH = function (t, i, n, e, s, h) {
        this.type = t, this[Om] = i, this[Sm] = n, this[M_] = e || 0, this.tx = s || 0, this.ty = h || 0
    };
    rH[Im] = Xl, rH[Pm] = Wl, MH.prototype = {
        type: null, colors: null, positions: null, angle: null, tx: 0, ty: 0, position: iq[iv], isEmpty: function () {
            return null == this[Om] || 0 == this.colors.length
        }, _6b: function () {
            var t = this[Om][rr];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[lr](n * e);
            return this[Sm] || (this[Sm] = i), i
        }, generatorGradient: function (t) {
            if (null == this[Om] || 0 == this[Om].length) return null;
            var i, n = Ni();
            if (this[$o] == rH[Pm]) {
                var e = this.angle;
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var h = Math.atan2(t[_a], t.width), r = Math[Mo](t[ca] * t[ca] + t[_a] * t.height), a = h - e;
                    s = Math.cos(a) * r
                } else {
                    var h = Math[sa](t[ca], t.height), r = Math[Mo](t.width * t[ca] + t[_a] * t[_a]),
                        a = h - (e - Math.PI / 2);
                    s = Math.cos(a) * r
                }
                var o = s / 2, f = o * Math.cos(e), u = o * Math.sin(e), c = t.x + t.width / 2 - f,
                    _ = t.y + t[_a] / 2 - u, d = t.x + t[ca] / 2 + f, l = t.y + t.height / 2 + u;
                i = n.createLinearGradient(c, _, d, l)
            } else {
                if (!(this[$o] = rH[Im])) return null;
                var v = ci(this.position, t.width, t[_a]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[_a] * this.ty : this.ty);
                var b = ZY(v.x, v.y, t.x, t.y);
                b = Math.max(b, ZY(v.x, v.y, t.x, t.y + t[_a])), b = Math.max(b, ZY(v.x, v.y, t.x + t[ca], t.y + t[_a])), b = Math.max(b, ZY(v.x, v.y, t.x + t[ca], t.y)), i = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, b)
            }
            var y = this.colors, g = this.positions;
            g && g[rr] == y[rr] || (g = this._6b());
            for (var p = 0, m = y[rr]; m > p; p++) i[Am](g[p], y[p]);
            return i
        }
    };
    var OH = new MH(rH[Pm], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        SH = new MH(rH[Pm], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
        IH = (new MH(rH[Pm], [X(1154272460), X(1442840575)], [.1, .9], 0), new MH(rH[Im], [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        PH = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
        AH = [0, .12, .28, .45, .6, .75, .8, 1], CH = new MH(rH.GRADIENT_TYPE_LINEAR, PH, AH),
        LH = new MH(rH[Pm], PH, AH, Math.PI / 2), DH = new MH(rH.GRADIENT_TYPE_RADIAL, PH, AH);
    MH[Cm] = OH, MH.LINEAR_GRADIENT_HORIZONTAL = SH, MH[Lm] = IH, MH.RAINBOW_LINEAR_GRADIENT = CH, MH[Dm] = LH, MH[jm] = DH;
    var jH = Zl, RH = Wl, NH = Rm, BH = Vl, $H = Nm, FH = Bm;
    rH.SEGMENT_MOVE_TO = jH, rH[$m] = RH, rH[Fm] = NH, rH[Gm] = BH, rH[zm] = $H, rH[Ym] = FH;
    var GH = function (t, i) {
        this.id = ++SY, $(t) ? this.points = t : (this[$o] = t, this[Co] = i)
    };
    GH[yr] = {
        toJSON: function () {
            var t = {type: this[$o], points: this.points};
            return this[Mf] && (t[Mf] = !0), t
        }, parseJSON: function (t) {
            this[$o] = t[$o], this[Co] = t[Co], this[Mf] = t[Mf]
        }, points: null, type: RH, clone: function () {
            return new GH(this.type, this[Co] ? y(this.points) : null)
        }, move: function (t, i) {
            if (this.points) for (var n = 0, e = this[Co][rr]; e > n; n++) {
                var s = this[Co][n];
                hH[qm](s) && (this.points[n] += n % 2 == 0 ? t : i)
            }
        }
    }, K(GH[yr], {
        lastPoint: {
            get: function () {
                return this[$o] == $H ? {x: this[Go], y: this[Ho]} : {
                    x: this[Co][this.points.length - 2],
                    y: this.points[this[Co][rr] - 1]
                }
            }
        }, firstPoint: {
            get: function () {
                return {x: this[Co][0], y: this.points[1]}
            }
        }
    }), hH[Hm] = GH;
    var zH = 0;
    HY[Ef] = $p;
    var YH = function (t) {
        this[Ao] = new QY, this._fp = t || []
    };
    YH.prototype = {
        toJSON: function () {
            var t = [];
            return this._fp[qu](function (i) {
                t.push(i[Um]())
            }), t
        }, parseJSON: function (t) {
            var i = this._fp;
            t[qu](function (t) {
                i.push(new GH(t.type, t[Co]))
            })
        }, clear: function () {
            this._fp[rr] = 0, this[Ao][to](), this._iy = 0, this._68 = !0
        }, _e7: !0, _66: function (t, i) {
            this._e7 && 0 === this._fp[rr] && t != jH && this._fp[lr](new GH(jH, [0, 0])), this._fp.push(new GH(t, i)), this._68 = !0
        }, add: function (t, i) {
            g(this._fp, t, i), this._68 = !0
        }, removePathSegment: function (t) {
            return t >= this._fp.length ? !1 : (this._fp[fr](t, 1), void (this._68 = !0))
        }, moveTo: function (t, i) {
            this._66(jH, [t, i])
        }, lineTo: function (t, i) {
            this._66(RH, [t, i])
        }, quadTo: function (t, i, n, e) {
            this._66(NH, [t, i, n, e])
        }, curveTo: function (t, i, n, e, s, h) {
            this._66(BH, [t, i, n, e, s, h])
        }, arcTo: function (t, i, n, e, s) {
            this._66($H, [t, i, n, e, s])
        }, closePath: function () {
            this._66(FH)
        }, _7r: function (t, i, n, e, s) {
            if (e.selectionColor) {
                if (n == rH[zp]) {
                    if (!e.selectionShadowBlur) return;
                    return t[bm] = e[Wm], t[fd] = e[Vm] * i, t[ym] = (e[Xm] || 0) * i, void (t[gm] = (e[Zm] || 0) * i)
                }
                if (n == rH[Km]) {
                    if (!e[Jm]) return;
                    t.strokeStyle = e[Wm];
                    var h = s[Zo] || 0;
                    s.outline && (h += 2 * s.outline), t[Zo] = e[Jm] + h, this._lm(t), t[ff]()
                }
            }
        }, _68: !0, _fp: null, _iy: 0, lineCap: Ap, lineJoin: Lf, draw: function (t, i, n, e, s) {
            t[rd] = n[rd] || this[rd], t[ad] = n[ad] || this[ad], e && (s || (s = n), this._7r(t, i, s[Qm], s, n));
            var h = e && s[Qm] == rH[zp];
            n[tx] && (this._lm(t), t.lineWidth = n[Zo] + 2 * (n[ix] || 0), t[Ko] = n[tx], t[ff](), h && (h = !1, t[bm] = nx)), t[Zo] = 0, this._lm(t), n[ex] && (t[tf] = n.renderColor || n.fillColor, t[jo]()), n.fillGradient && (t[tf] = n._fillGradient || n[sx], t[jo]()), n.lineWidth && (t[Zo] = n[Zo], n[vu] && (n[hx] && (t.strokeStyle = n[hx], t.stroke(), h && (t[bm] = nx)), t[rd] = n.lineDashCap || t[rd], t.lineJoin = n[rx] || t[ad], t.lineDash = n[vu], t.lineDashOffset = n[bu]), t[Ko] = n[nm] || n.strokeStyle, t[ff](), t.lineDash = [])
        }, _lm: function (t) {
            t[ef]();
            for (var i, n, e = 0, s = this._fp[rr]; s > e; e++) i = this._fp[e], dH._lm(t, i, n), n = i
        }, invalidate: function () {
            this._68 = !0
        }, validate: function () {
            if (this._68 = !1, this[Ao][to](), this._iy = 0, 0 != this._fp.length) for (var t, i, n = this._fp, e = 1, s = n[0], h = s, r = n.length; r > e; e++) t = n[e], t[$o] == jH ? h = t : (dH._5p(this.bounds, t, s, h), i = dH._5q(t, s, h), t._iy = i, this._iy += i), s = t
        }, getBounds: function (t, i) {
            if (this._68 && this.validate(), i = i || new QY, t) {
                var n = t / 2;
                i.set(this[Ao].x - n, this[Ao].y - n, this[Ao][ca] + t, this[Ao][_a] + t)
            } else i.set(this[Ao].x, this[Ao].y, this[Ao][ca], this[Ao][_a]);
            return i
        }, hitTest: function (t, i, n, e, s, h) {
            return _n[hr](this, t, i, n, e, s, h)
        }, toSegments: function () {
            return [].concat(this._fp)
        }, generator: function (t, i, n, e, s) {
            return cn[hr](this, t, i, n, e, s)
        }, getLocation: function (t, i) {
            return dn[hr](this, t, i || 0)
        }
    }, K(YH.prototype, {
        segments: {
            get: function () {
                return this._fp
            }, set: function (t) {
                this.clear(), this._fp = t
            }
        }, length: {
            get: function () {
                return this._68 && this[Po](), this._iy
            }
        }, _empty: {
            get: function () {
                return 0 == this._fp[rr]
            }
        }
    }), Dn[yr] = {
        _$z: function (t, i) {
            var n, e, s, h, r, a = t.length, o = 0, f = 0;
            for (r = 0; a > r; r += 4) if (t[r + 3] > 0) {
                n = (r + 4) / i / 4 | 0;
                break
            }
            for (r = a - 4; r >= 0; r -= 4) if (t[r + 3] > 0) {
                e = (r + 4) / i / 4 | 0;
                break
            }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    s = o;
                    break
                }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    h = o;
                    break
                }
                if (h >= 0) break
            }
            this._x = s, this._y = n, this[lm] = h - s + 1, this[vm] = e - n + 1, this._jd = new QY(s, n, this[lm], this._height), this[ax] = this[lm] * this[vm], this[ox] = i, this[fx] = t
        }, _e4: function (t, i) {
            return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        }, _hx: function (t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math[Lf](t - this._x) - n, i = Math[Lf](i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._e4(e, s)) return !0;
                    ++e
                }
                ++s
            }
            return !1
        }
    }, rH[Pf] = ux, rH[If] = cx, rH[_x] = dx, rH.BLEND_MODE_LINEAR_BURN = lx, rH[vx] = bx, rH[yx] = gx, rH[px] = mx, HY[xx] = rH[Af];
    var qH = function (t, i, n) {
        this._j3 = t, this[nf] = i || 1, this._hv = n
    };
    qH[yr] = {
        scale: 1, _j3: null, _j6: null, _hv: !0, _lm: function (t, i, n) {
            if (i && (i = Rn(i)), !i || this._hv === !1) return void t.drawImage(this._j3, 0, 0);
            if (this._j3 instanceof Image) {
                var e = Ri();
                e[ca] = this._j3[ca], e.height = this._j3[_a], e.g[ud](this._j3, 0, 0, this._j3[ca], this._j3[_a]), this._j3 = e
            }
            this._j6 || (this._j6 = {});
            var s = i + n, e = this._j6[s];
            if (e || (e = Bn(this._j3, i, n), e || (this._hv = !1), this._j6[s] = e || this._j3), e) if (AY) try {
                t[ud](e, 0, 0)
            } catch (h) {
            } else t.drawImage(e, 0, 0)
        }
    };
    var HH = function (t, i, n, e, s, h, r, a, o) {
        this._lp = zn(t, i, n, e, s, h, r, a, o)
    }, UH = {
        server: {
            draw: function (t) {
                t[vo](), t.translate(0, 0), t[ef](), t[rf](0, 0), t[af](40, 0), t[af](40, 40), t[af](0, 40), t.closePath(), t[Ex](), t[bo](0, 0), t[bo](0, 0), t.scale(1, 1), t[bo](0, 0), t[Ko] = nx, t.lineCap = Ap, t[ad] = Np, t[wx] = 4, t[vo](), t.save(), t[wo](), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t[wo](), t.save(), t[wo](), t[vo](), t[wo](), t[vo](), t.restore(), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t.restore(), t[wo](), t[vo]();
                var i = t.createLinearGradient(6.75, 3.9033, 30.5914, 27.7447);
                i[Am](.0493, Tx), i[Am](.0689, kx), i[Am](.0939, Mx), i[Am](.129, Ox), i[Am](.2266, Sx), i[Am](.2556, Ix), i[Am](.2869, Px), i.addColorStop(.3194, Ax), i[Am](.3525, Cx), i.addColorStop(.3695, Lx), i[Am](.5025, Dx), i[Am](.9212, jx), i.addColorStop(1, Rx), t[tf] = i, t.beginPath(), t.moveTo(25.677, 4.113), t[Kp](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[Kp](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[Kp](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[Kp](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[Kp](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[Kp](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[Kp](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[Kp](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[Kp](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[Kp](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[Kp](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t[Nf](), t.fill(), t[ff](), t.restore(), t.save(), t[vo](), t.fillStyle = Nx, t[ef](), t.moveTo(19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[Kp](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[Kp](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t.bezierCurveTo(21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t.lineTo(21.398, 36.253), t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[Kp](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[Kp](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t[Kp](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[Kp](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[af](2.924, 8.431), t[Kp](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[Kp](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t[Kp](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t.lineTo(19.763, 6.645), t[Nf](), t[jo](), t[ff](), t[wo](), t[wo](), t[vo](), t[tf] = Bx, t[ef](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[Nf](), t[jo](), t.stroke(), t.restore(), t.save(), t[tf] = Nx, t[ef](), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[Nf](), t[jo](), t.stroke(), t.restore(), t[vo](), t.fillStyle = Bx, t[ef](), t[rf](19.377, 17.247), t[Kp](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[af](5.882, 18.108999999999998), t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[af](5.02, 11.144), t[Kp](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t.lineTo(19.377, 17.247), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t.save(), t[tf] = Nx, t[ef](), t[rf](18.536, 13.176),t[Kp](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),t[af](6.479, 13.794),t[Kp](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),t[af](5.861, 11.84),t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221),t[af](17.918, 11.221),t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),t.lineTo(18.535, 13.176),t.closePath(),t[jo](),t[ff](),t.restore(),t.save(),t[tf] = Nx,t[ef](),t.moveTo(18.536, 16.551),t[Kp](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),t[af](6.479, 17.168999999999997),t[Kp](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),t[af](5.861, 15.215999999999998),t[Kp](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),t[af](17.918, 14.596999999999998),t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),t[af](18.535, 16.551),t[Nf](),t[jo](),t.stroke(),t[wo](),t[wo](),t.restore()
            }
        }, exchanger2: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t[af](40, 0), t[af](40, 40), t[af](0, 40), t[Nf](), t[Ex](), t.translate(0, 0), t.translate(0, 0), t[nf](1, 1), t[bo](0, 0), t.strokeStyle = nx, t[rd] = Ap, t[ad] = Np, t.miterLimit = 4, t[vo](), t.save(), t.restore(), t[vo](), t[wo](), t.save(), t.restore(), t.save(), t.restore(), t.save(), t[wo](), t[vo](), t[wo](), t[vo](), t.restore(), t[vo](), t.restore(), t[vo](), t[wo](), t.save(), t[wo](), t[wo](), t[vo]();
                var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                i.addColorStop(0, Tx), i[Am](.0788, Sx), i.addColorStop(.2046, $x), i.addColorStop(.3649, Fx), i.addColorStop(.5432, Gx), i.addColorStop(.6798, zx), i[Am](.7462, Yx), i.addColorStop(.8508, qx), i[Am](.98, Ix), i[Am](1, Hx), t[tf] = i, t[ef](), t[rf](.41, 16.649), t[Kp](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[Kp](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[Kp](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[Kp](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[Kp](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t[jo](), t[ff](), t[wo](), t[vo](), t[vo](), t.fillStyle = Nx, t[ef](), t[rf](16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t[Kp](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[Kp](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[Kp](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[Kp](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[Kp](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[Kp](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[Kp](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t.closePath(), t[jo](), t.stroke(), t.restore(), t[wo](), t[vo](), t[vo](), t.save(), t.save(), t[vo](), t[tf] = Ux, t[ef](), t[rf](5.21, 21.754), t[af](8.188, 17.922), t[af](9.53, 18.75), t.lineTo(15.956, 16.004), t[af](18.547, 17.523), t.lineTo(12.074, 20.334), t[af](13.464, 21.204), t[af](5.21, 21.754), t[Nf](), t[jo](), t.stroke(), t[wo](), t[wo](), t.restore(), t.save(), t[vo](), t[vo](), t.fillStyle = Ux, t[ef](), t[rf](17.88, 14.61), t[af](9.85, 13.522), t.lineTo(11.703, 12.757), t[af](7.436, 10.285), t[af](10.783, 8.942), t[af](15.091, 11.357), t.lineTo(16.88, 10.614), t[af](17.88, 14.61), t[Nf](), t[jo](), t[ff](), t.restore(), t.restore(), t[vo](), t.save(), t[tf] = Ux, t[ef](), t.moveTo(17.88, 14.61), t[af](9.85, 13.522), t[af](11.703, 12.757), t[af](7.436, 10.285), t[af](10.783, 8.942), t.lineTo(15.091, 11.357), t[af](16.88, 10.614), t.lineTo(17.88, 14.61), t[Nf](), t.fill(), t.stroke(), t[wo](), t[wo](), t[wo](),t.save(),t.save(),t[vo](),t[tf] = Ux,t[ef](),t[rf](23.556, 15.339),t[af](20.93, 13.879),t[af](26.953, 11.304),t[af](25.559, 10.567),t.lineTo(33.251, 9.909),t.lineTo(31.087, 13.467),t[af](29.619, 12.703),t[af](23.556, 15.339),t.closePath(),t[jo](),t[ff](),t[wo](),t[wo](),t[wo](),t[vo](),t[vo](),t[vo](),t[tf] = Ux,t.beginPath(),t[rf](30.028, 23.383),t[af](24.821, 20.366),t.lineTo(22.915, 21.227),t[af](21.669, 16.762),t[af](30.189, 17.942),t[af](28.33, 18.782),t[af](33.579, 21.725),t[af](30.028, 23.383),t[Nf](),t[jo](),t[ff](),t[wo](),t[wo](),t.save(),t[vo](),t[tf] = Ux,t[ef](),t.moveTo(30.028, 23.383),t.lineTo(24.821, 20.366),t[af](22.915, 21.227),t.lineTo(21.669, 16.762),t.lineTo(30.189, 17.942),t[af](28.33, 18.782),t.lineTo(33.579, 21.725),t[af](30.028, 23.383),t[Nf](),t[jo](),t[ff](),t[wo](),t[wo](),t[wo](),t.restore(),t[wo](),t.restore()
            }
        }, exchanger: {
            draw: function (t) {
                t[vo](), t[bo](0, 0), t.beginPath(), t.moveTo(0, 0), t[af](40, 0), t.lineTo(40, 40), t[af](0, 40), t.closePath(), t[Ex](), t[bo](0, 0), t[bo](0, 0), t.scale(1, 1), t[bo](0, 0), t.strokeStyle = nx, t[rd] = Ap, t[ad] = Np, t.miterLimit = 4, t[vo](), t.save(), t[wo](), t[vo](), t[wo](), t.save(), t[wo](), t.save(), t[wo](), t[vo](), t[wo](), t[vo](), t.restore(), t[vo](), t.restore(), t.restore(), t.save();
                var i = t[Wx](.2095, 20.7588, 39.4941, 20.7588);
                i[Am](0, Vx), i[Am](.0788, Xx), i.addColorStop(.352, Zx), i.addColorStop(.6967, Kx), i[Am](.8916, Jx), i[Am](.9557, Qx), i[Am](1, tE), t[tf] = i, t[ef](), t[rf](39.449, 12.417), t.lineTo(39.384, 9.424), t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[Kp](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t[Kp](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[Kp](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[Kp](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[Kp](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[Kp](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[Kp](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t[af](39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t.closePath(), t.fill(), t[ff](), t.restore(), t.save(), t[vo](), t[vo](), t[vo](), t[wo](), t.save(), t.restore(), t[vo](), t.restore(), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t[wo](), t[vo](), t.restore(), t[vo](), t[wo](), t[vo](), t[wo](), t[wo](), t[vo]();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i.addColorStop(0, iE), i[Am](.1455, nE), i[Am](.2975, eE), i[Am](.4527, sE), i[Am](.6099, hE), i[Am](.7687, rE), i[Am](.9268, aE), i[Am](.9754, oE), i[Am](1, fE), t[tf] = i, t[ef](), t[rf](33.591, 24.763), t[Kp](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[Kp](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[Kp](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[Kp](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t[Kp](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[Kp](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[Kp](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[Kp](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[Kp](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t.bezierCurveTo(38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[Kp](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[Kp](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[Nf](), t[jo](), t[ff](), t.restore(), t[wo](), t[wo](), t[vo](), t[vo](), t[vo](), t.fillStyle = Ux, t[ef](), t.moveTo(10.427, 19.292), t[af](5.735, 16.452), t.lineTo(12.58, 13.8), t[af](12.045, 15.07), t[af](20.482, 15.072), t[af](19.667, 17.887), t[af](11.029, 17.851), t[af](10.427, 19.292), t[Nf](), t[jo](), t[ff](), t[wo](), t[wo](), t[vo](), t[vo](), t[tf] = Ux, t[ef](), t.moveTo(13.041, 13.042), t.lineTo(8.641, 10.73), t[af](14.82, 8.474), t[af](14.373, 9.537), t[af](22.102, 9.479), t[af](21.425, 11.816), t.lineTo(13.54, 11.85), t[af](13.041, 13.042), t.closePath(), t.fill(), t[ff](), t[wo](), t[wo](), t[vo](), t[vo](), t[tf] = Ux, t[ef](), t[rf](29.787, 16.049), t[af](29.979, 14.704), t[af](21.51, 14.706), t.lineTo(22.214, 12.147), t[af](30.486, 12.116), t[af](30.653, 10.926), t[af](36.141, 13.4), t[af](29.787, 16.049), t[Nf](), t[jo](), t[ff](), t[wo](), t[wo](), t[vo](), t[vo](), t[tf] = Ux, t.beginPath(), t.moveTo(28.775, 23.14), t[af](29.011, 21.49), t.lineTo(19.668, 21.405), t[af](20.523, 18.295), t[af](29.613, 18.338), t.lineTo(29.815, 16.898), t.lineTo(35.832, 19.964), t[af](28.775, 23.14), t[Nf](), t[jo](), t[ff](), t[wo](), t[wo](), t.restore(),t.restore()
            }
        }, cloud: {
            draw: function (t) {
                t.save(), t.beginPath(), t[rf](0, 0), t[af](90.75, 0), t.lineTo(90.75, 62.125), t[af](0, 62.125), t.closePath(), t[Ex](), t.strokeStyle = nx, t.lineCap = Ap, t[ad] = Np, t[wx] = 4, t[vo]();
                var i = t[Wx](44.0054, 6.4116, 44.0054, 51.3674);
                i[Am](0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, uE), t[tf] = i, t[ef](), t[rf](57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[Kp](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[Kp](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[Kp](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[Kp](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[Kp](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[Kp](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[Kp](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[Kp](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[Kp](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[Nf](), t[jo](), t.stroke(), t.restore(), t[wo]()
            }
        }, node: {
            width: 60, height: 100, draw: function (t) {
                t[vo](), t[bo](0, 0), t[ef](), t[rf](0, 0), t.lineTo(40, 0), t[af](40, 40), t[af](0, 40), t[Nf](), t.clip(), t[bo](0, 0), t[bo](0, 0), t.scale(1, 1), t[bo](0, 0), t[Ko] = nx, t[rd] = Ap, t.lineJoin = Np, t[wx] = 4, t[vo](), t[tf] = cE, t[ef](), t.moveTo(13.948, 31.075), t[af](25.914, 31.075), t[Zp](25.914, 31.075, 25.914, 31.075), t[af](25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t[af](13.948, 34.862), t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862), t[af](13.948, 31.075), t[Zp](13.948, 31.075, 13.948, 31.075), t[Nf](), t[jo](), t.stroke(), t.restore(), t.save(), t[tf] = _E, t[ef](), t[rf](29.679, 35.972), t[Kp](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[af](11.456, 37.244), t[Kp](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t.lineTo(10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[af](28.407, 34.863), t[Kp](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[af](29.678, 35.972), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[tf] = _E, t[ef](), t[rf](.196, 29.346), t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t.lineTo(37.936, 31.075), t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[af](39.665, 27.174), t[af](.196, 27.174), t.lineTo(.196, 29.346), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[tf] = dE, t[ef](), t[rf](37.937, 3.884), t[af](1.926, 3.884), t[Kp](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[af](.19699999999999984, 27.12), t[af](39.666000000000004, 27.12), t[af](39.666000000000004, 5.615), t[Kp](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[vo](), t.restore(), t[vo](), t[wo](), t[wo](), t[vo]();
                var i = t[Wx](6.9609, 2.9341, 32.9008, 28.874);
                i[Am](0, lE), i.addColorStop(1, vE), t.fillStyle = i, t[ef](), t[rf](35.788, 6.39), t[af](4.074, 6.39), t[Kp](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t.lineTo(2.702, 24.616), t.lineTo(37.159, 24.616), t[af](37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t.closePath(), t[jo](), t[ff](), t.restore(), t[wo]()
            }
        }, group: {
            draw: function (t) {
                t[vo](), t[bo](0, 0), t[ef](), t.moveTo(0, 0), t[af](47.75, 0), t.lineTo(47.75, 40), t[af](0, 40), t[Nf](), t[Ex](), t.translate(0, 0), t[bo](0, 0), t.scale(1, 1), t[bo](0, 0), t.strokeStyle = nx, t[rd] = Ap, t[ad] = Np, t.miterLimit = 4, t[vo](), t[vo](), t.fillStyle = cE, t.beginPath(), t[rf](10.447, 26.005), t[af](18.847, 26.005), t.quadraticCurveTo(18.847, 26.005, 18.847, 26.005), t.lineTo(18.847, 28.663), t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663), t.lineTo(10.447, 28.663), t[Zp](10.447, 28.663, 10.447, 28.663), t.lineTo(10.447, 26.005), t[Zp](10.447, 26.005, 10.447, 26.005), t.closePath(), t.fill(), t[ff](), t[wo](), t.save(), t[tf] = _E, t[ef](), t.moveTo(21.491, 29.443), t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t.lineTo(8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t[Kp](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t[Kp](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[af](21.491, 29.443), t.closePath(), t.fill(), t[ff](), t[wo](), t[vo](), t[tf] = _E, t[ef](), t[rf](.789, 24.79), t[Kp](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t.lineTo(27.289, 26.005), t[Kp](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t.lineTo(28.504, 23.267), t.lineTo(.789, 23.267), t.lineTo(.789, 24.79), t[Nf](), t.fill(), t[ff](), t[wo](), t[vo](), t.fillStyle = dE, t.beginPath(), t[rf](27.289, 6.912), t.lineTo(2.006, 6.912), t[Kp](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t.lineTo(.7889999999999997, 23.227), t[af](28.503999999999998, 23.227), t[af](28.503999999999998, 8.126), t[Kp](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t.closePath(), t[jo](), t.stroke(), t.restore(), t[vo](), t[vo](), t[wo](), t.save(), t[wo](), t.restore(), t[vo]();
                var i = t[Wx](5.54, 6.2451, 23.7529, 24.458);
                i[Am](0, lE), i.addColorStop(1, vE), t.fillStyle = i, t[ef](), t.moveTo(25.78, 8.671), t[af](3.514, 8.671), t[Kp](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[af](2.549, 21.466), t[af](26.743, 21.466), t.lineTo(26.743, 9.636), t[Kp](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t.fill(), t.stroke(), t[wo](), t[wo](), t[vo](), t[vo](), t.fillStyle = cE, t[ef](), t[rf](27.053, 33.602), t[af](36.22, 33.602), t[Zp](36.22, 33.602, 36.22, 33.602), t.lineTo(36.22, 36.501), t[Zp](36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t[Zp](27.053, 36.501, 27.053, 36.501), t.lineTo(27.053, 33.602), t[Zp](27.053, 33.602, 27.053, 33.602), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[tf] = _E, t[ef](), t[rf](39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[af](25.143, 38.327), t[Kp](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t[af](38.131, 36.501), t[Kp](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[af](39.105, 37.352), t.closePath(), t[jo](), t.stroke(), t.restore(), t[vo](), t[tf] = _E, t[ef](), t[rf](16.514, 32.275), t[Kp](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t.lineTo(45.433, 33.601), t[Kp](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[af](46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t.lineTo(16.514, 32.275), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[tf] = dE, t.beginPath(), t[rf](45.433, 12.763), t[af](17.839, 12.763), t[Kp](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[af](16.514, 30.57), t[af](46.757999999999996, 30.57), t[af](46.757999999999996, 14.088), t[Kp](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[Nf](), t.fill(), t.stroke(), t[wo](), t[vo](), t[vo](), t[wo](), t[vo](), t[wo](), t[wo](), t.save(), i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), i[Am](0, lE), i[Am](1, vE), t[tf] = i, t.beginPath(), t[rf](43.785, 14.683), t[af](19.486, 14.683), t[Kp](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t.lineTo(44.837, 28.649), t[af](44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[Nf](), t[jo](), t.stroke(), t.restore(), t.restore(),t.save(),t.globalAlpha = .5,t[ef](),t.moveTo(23.709, 36.33),t[af](4.232, 36.33),t.lineTo(4.232, 27.199),t.lineTo(5.304, 27.199),t.lineTo(5.304, 35.259),t[af](23.709, 35.259),t[af](23.709, 36.33),t.closePath(),t.fill(),t.stroke(),t[wo](),t.restore()
            }
        }, subnetwork: {
            draw: function (t) {
                t.save(), t[bo](0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(60.75, 0), t.lineTo(60.75, 42.125), t[af](0, 42.125), t[Nf](), t[Ex](), t.translate(0, .26859504132231393), t[nf](.6694214876033058, .6694214876033058), t.translate(0, 0), t[Ko] = nx, t[rd] = Ap, t[ad] = Np, t[wx] = 4, t[vo](), t.save(), t[wo](), t[vo](), t[wo](), t.restore(), t[vo]();
                var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i[Am](.9726, uE), t[tf] = i, t[ef](), t[rf](61.732, 16.509), t[Kp](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[Kp](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[Kp](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[Kp](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[Kp](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[Kp](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[Kp](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t.fill(), t[ff](), t.restore(), t[vo](), t[vo](), t[tf] = cE, t[ef](), t[rf](34.966, 44.287), t[af](45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t[af](45.112, 47.497), t[Zp](45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t[Zp](34.966, 47.497, 34.966, 47.497), t[af](34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[tf] = bE, t[ef](), t[rf](48.306, 48.439), t[Kp](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t[Kp](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[af](31.771, 48.578), t[Kp](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[af](47.226, 47.497), t[Kp](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t.lineTo(48.306, 48.439), t[Nf](), t[jo](), t[ff](), t[wo](), t.save(), t[tf] = yE, t.beginPath(), t[rf](23.302, 42.82), t[Kp](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[Kp](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[af](56.775, 40.98), t[af](23.302, 40.98), t[af](23.302, 42.82), t[Nf](), t[jo](), t[ff](), t[wo](), t[vo](), t[tf] = dE, t[ef](), t[rf](55.307, 21.229), t[af](24.771, 21.229), t[Kp](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t[af](56.774, 40.933), t[af](56.774, 22.695), t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[Nf](), t.fill(), t[ff](), t.restore(), t[vo](), t[vo](), t[wo](), t[vo](), t.restore(), t[wo](), t[vo](), i = t[Wx](29.04, 20.4219, 51.0363, 42.4181), i[Am](0, lE), i[Am](1, vE), t[tf] = i, t[ef](), t[rf](53.485, 23.353), t[af](26.592, 23.353), t[Kp](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t.lineTo(25.427, 38.807), t[af](54.647, 38.807), t[af](54.647, 24.517000000000003), t[Kp](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[Nf](),t.fill(),t[ff](),t.restore(),t[wo](),t.restore()
            }
        }
    };
    for (var WH in UH) kn(gE + WH, UH[WH]);
    var VH = function () {
        this[cu] = !1;
        var t = this._f5;
        t.clear();
        var i = this[Wf] || 0, n = this._7v.x + i / 2, e = this._7v.y + i / 2, s = this._7v.width - i,
            h = this._7v.height - i, r = Zn[hr](this, {x: n, y: e});
        te(t, r.x, r.y, !0), r = Zn.call(this, {x: n + s, y: e}), te(t, r.x, r.y), r = Zn[hr](this, {
            x: n + s,
            y: e + h
        }), te(t, r.x, r.y), r = Zn[hr](this, {
            x: n,
            y: e + h
        }), te(t, r.x, r.y), this.__mfPointer && (r = Zn[hr](this, {
            x: this[au],
            y: this[su]
        }), te(t, r.x, r.y)), i && t[Vf](i / 2)
    }, XH = 20, ZH = {
        _fw: !1, _k1: null, _d7: 0, _ks: -1, _kh: null, _ef: function (t) {
            this._k1 || (this._k1 = [], this._j1 = wH), this._k1.push(t), this._ei(), this._kp()
        }, _kp: function () {
            if (!this._kh) {
                var t = this;
                this._kh = setTimeout(function i() {
                    return t._ei() !== !1 ? void (t._kh = setTimeout(i, t._g6())) : void delete t._kh
                }, this._g6())
            }
        }, _g6: function () {
            return Math.max(XH, this._k1[this._ks][pE])
        }, _ei: function () {
            return this._gd(this._ks + 1)
        }, _gd: function (t) {
            if (this._fw) t %= this._d7; else if (t >= this._k1[rr]) return !1;
            if (this._ks == t) return !1;
            this._ks = t;
            var i = this._k1[this._ks], n = i[mE];
            return n || (i._n4ache = n = Ri(this[ca], this.height), n.g.putImageData(i[Vo], 0, 0), n._pixels = i._pixels), this._kq = n, this[Uf] = !0, this._dd()
        }, _n4t: function () {
            return this._k1 ? (this._fw = !0, this._d7 = this._k1[rr], 1 == this._d7 ? this._dd() : void this._kp()) : void this._ht()
        }, _ll: function () {
            this._kh && (clearTimeout(this._kh), delete this._kh)
        }, _dd: function () {
            var t = this[hm][Pv];
            if (!t || !t[rr]) return !1;
            for (var i = new uq(this, Em, wm, this._kq), n = 0, e = t[rr]; e > n; n++) {
                var s = t[n];
                s[Av]._jl && s.scope._jl[xE] ? (t.splice(n, 1), n--, e--) : s[Sv][hr](s.scope, i)
            }
            return t[rr] > 0
        }, _n27: function (t, i) {
            this._dispatcher[Kd](t, i), this._fw && !this._kh && this._kp()
        }, _6a: function (t, i) {
            this[hm].removeListener(t, i), this[hm][EE]() || this._ll()
        }, _ih: function () {
            this._ll(), this[hm][to]()
        }, _fe: function () {
            var t = this._kq[wE];
            return t || (this._kq._n6ufferedImage = t = new qH(this._kq, 1)), t
        }
    }, KH = function (t) {
        return t[TE](function (t, i) {
            return 2 * t + i
        }, 0)
    }, JH = function (t) {
        for (var i = [], n = 7; n >= 0; n--) i[lr](!!(t & 1 << n));
        return i
    }, QH = function (t) {
        this[Vo] = t, this.len = this.data.length, this.pos = 0, this[kE] = function () {
            if (this.pos >= this.data[rr]) throw new Error("Attempted to read past end of stream.");
            return 255 & t[Pu](this.pos++)
        }, this.readBytes = function (t) {
            for (var i = [], n = 0; t > n; n++) i[lr](this[kE]());
            return i
        }, this[ME] = function (t) {
            for (var i = "", n = 0; t > n; n++) i += String[Cu](this.readByte());
            return i
        }, this.readUnsigned = function () {
            var t = this[OE](2);
            return (t[1] << 8) + t[0]
        }
    }, tU = function (t, i, n) {
        for (var e, s, h = 0, r = function (t) {
            for (var n = 0, e = 0; t > e; e++) i.charCodeAt(h >> 3) & 1 << (7 & h) && (n |= 1 << e), h++;
            return n
        }, a = [], o = 1 << t, f = o + 1, u = t + 1, c = [], _ = function () {
            c = [], u = t + 1;
            for (var i = 0; o > i; i++) c[i] = [i];
            c[o] = [], c[f] = null
        }, d = 0; s = e, e = r(u), !(d++ > n);) if (e !== o) {
            if (e === f) break;
            if (e < c.length) s !== o && c[lr](c[s][ur](c[e][0])); else {
                if (e !== c[rr]) throw new Error(SE);
                c[lr](c[s][ur](c[s][0]))
            }
            a[lr][mr](a, c[e]), c[rr] === 1 << u && 12 > u && u++
        } else _();
        return a
    }, iU = function (t, i) {
        i || (i = {});
        var n = function (i) {
            for (var n = [], e = 0; i > e; e++) n[lr](t[OE](3));
            return n
        }, e = function () {
            var i, n;
            n = "";
            do i = t.readByte(), n += t[ME](i); while (0 !== i);
            return n
        }, s = function () {
            var e = {};
            if (e.sig = t[ME](3), e.ver = t[ME](3), IE !== e.sig) throw new Error(PE);
            e[ca] = t[AE](), e[_a] = t[AE]();
            var s = JH(t[kE]());
            e[CE] = s[LE](), e[DE] = KH(s[fr](0, 3)), e[jE] = s.shift(), e.gctSize = KH(s[fr](0, 3)), e[RE] = t[kE](), e[NE] = t[kE](), e[CE] && (e.gct = n(1 << e.gctSize + 1)), i.hdr && i.hdr(e)
        }, h = function (n) {
            var s = function (n) {
                var e = (t.readByte(), JH(t[kE]()));
                n[BE] = e[fr](0, 3), n[xu] = KH(e.splice(0, 3)), n[$E] = e[LE](), n[FE] = e[LE](), n[mu] = t.readUnsigned(), n[pu] = t[kE](), n[GE] = t[kE](), i.gce && i.gce(n)
            }, h = function (t) {
                t[zE] = e(), i.com && i.com(t)
            }, r = function (n) {
                t[kE](), n[YE] = t.readBytes(12), n.ptData = e(), i.pte && i.pte(n)
            }, a = function (n) {
                var s = function (n) {
                    t[kE](), n[qE] = t.readByte(), n[HE] = t[AE](), n.terminator = t[kE](), i.app && i.app.NETSCAPE && i.app[UE](n)
                }, h = function (t) {
                    t.appData = e(), i.app && i.app[t.identifier] && i.app[t.identifier](t)
                };
                switch (t[kE](), n[WE] = t[ME](8), n.authCode = t[ME](3), n.identifier) {
                    case"NETSCAPE":
                        s(n);
                        break;
                    default:
                        h(n)
                }
            }, o = function (t) {
                t[Vo] = e(), i[qE] && i.unknown(t)
            };
            switch (n.label = t[kE](), n.label) {
                case 249:
                    n[VE] = XE, s(n);
                    break;
                case 254:
                    n.extType = ZE, h(n);
                    break;
                case 1:
                    n[VE] = KE, r(n);
                    break;
                case 255:
                    n[VE] = JE, a(n);
                    break;
                default:
                    n[VE] = qE, o(n)
            }
        }, r = function (s) {
            var h = function (t, i) {
                for (var n = new Array(t[rr]), e = t[rr] / i, s = function (e, s) {
                    var h = t[or](s * i, (s + 1) * i);
                    n[fr][mr](n, [e * i, i].concat(h))
                }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++) for (var f = h[o]; e > f; f += r[o]) s(f, a), a++;
                return n
            };
            s[Eu] = t.readUnsigned(), s[wu] = t[AE](), s.width = t[AE](), s[_a] = t[AE]();
            var r = s.width * s.height, a = JH(t.readByte());
            s[QE] = a[LE](), s.interlaced = a[LE](), s.sorted = a.shift(), s[BE] = a.splice(0, 2), s.lctSize = KH(a[fr](0, 3)), s[QE] && (s.lct = n(1 << s[tw] + 1)), s[iw] = t[kE]();
            var o = e();
            s.pixels = tU(s.lzwMinCodeSize, o, r), s[nw] && (s[Tu] = h(s[Tu], s[ca])), i.img && i.img(s)
        }, a = function () {
            var n = {};
            switch (n.sentinel = t[kE](), String[Cu](n.sentinel)) {
                case"!":
                    n[$o] = ew, h(n);
                    break;
                case",":
                    n[$o] = $_, r(n);
                    break;
                case";":
                    n[$o] = sw, i.eof && i.eof(n);
                    break;
                default:
                    throw new Error(hw + n[rw].toString(16))
            }
            sw !== n[$o] && setTimeout(a, 0)
        }, o = function () {
            s(), setTimeout(a, 0)
        };
        o()
    }, nU = "";
    i.addEventListener && i[Eb](aw, function (t) {
        if (t[Ga] && t[ow] && t[fw] && 73 == t[uw]) {
            var i = hH[bf] + cw + hH[_w] + dw + hH[lw] + xo + hH[vw] + xo + hH[bw] + nU;
            hH.alert(i)
        }
    }, !1);
    var eU = yw;
    nU = gw + decodeURIComponent(pw);
    var sU, hU, rU, aU = t, oU = mw, fU = xw, uU = Ew, cU = ww, _U = Tw, dU = kw, lU = Mw, vU = Ow, bU = Sw, yU = Iw,
        gU = Pw, pU = Aw, mU = Cw, xU = Lw, EU = Er, wU = Dw, TU = jw, kU = Rw, MU = Nw, OU = Bw, SU = $w,
        IU = aU[cU + Fw];
    IU && (hU = aU[xU + Gw][_U + zw], IU.call(aU, ae, wU), IU[hr](aU, oe, MU), IU[hr](aU, function () {
        AU && AU == eU && (FU = !1)
    }, TU));
    var PU, AU, CU, LU = 111, DU = function (t, i) {
        i || (i = Yw + fU + qw);
        try {
            rU.call(t, i, 6 * LU, 1 * LU)
        } catch (n) {
        }
    }, jU = !0, RU = !0, NU = !0, BU = !0, $U = !0, FU = !0, GU = 2048, zU = function (t, i) {
        return re ? re(t, i) || "" : void 0
    };
    if (i.createElement) {
        var YU = i.createElement(Hw);
        YU.style[Uw] = X_, YU[Mu] = function (t) {
            var i = t[cd][Ww], n = hU;
            if ("" === n || Vw == n || Xw == n) return void this[rm][rm][ab](this[rm]);
            var e = i[Zw][Cu];
            i[cU + Fw](function () {
                he(e) != PU && (bW[yr]._jn = null)
            }, MU), this[rm][rm][ab](this[rm])
        };
        var qU = i.createElement(N_);
        qU[wa][ca] = hd, qU[wa].height = hd, qU.style[Kw] = V_, qU[q_](YU), i[Hd][q_](qU)
    }
    if (i[EU + Jw]) {
        var HU = i[EU + Jw](bU + Qw);
        HU.style[Uw] = X_, HU.onload = function (t) {
            var i = tT, n = t[cd][i + iT];
            sU = n.Date.now();
            var e = n[yU + gU + nT + pU + eT][mU + $o];
            rU = e[oU + sT], NY && (n = aU);
            var s = n[cU + Fw];
            s.call(aU, _e, MU), s.call(aU, de, OU), s[hr](aU, ve, TU), s[hr](aU, fe, kU), s[hr](aU, ce, SU), s[hr](aU, le, MU), s[hr](aU, ue, MU), this.parentNode.parentNode.removeChild(this[rm])
        };
        var qU = i[ro](N_);
        qU[wa][ca] = hd, qU[wa][_a] = hd, qU.style.overflow = V_, qU[q_](HU), i[Hd][q_](qU)
    }
    var UU = {position: hT, userSelect: X_, outline: X_, transformOrigin: rT, "-webkit-tap-highlight-color": nx},
        WU = aT;
    pi(ta + WU, UU);
    var VU = {
        width: J_,
        height: J_,
        position: Z_,
        overflow: V_,
        textAlign: ed,
        outline: X_,
        tapHighlightColor: nx,
        userSelect: X_
    }, XU = oT;
    pi(ta + XU, VU);
    var ZU = fT, KU = {overflow: V_, "text-align": ed, "-webkit-tap-highlight-color": nx, outline: X_};
    pi(ta + ZU, KU);
    var JU = S(function (t) {
        this._n69 = new tW, this._mp = new UY, this._8d = [], this._d1 = [], this._lmingList = [], this._8f = {}, this.bounds = new QY, this._js = new rW, this._viewport = new aW, this._js.listener = function (t) {
            this._6p(t)
        }[Pr](this), this[uT](), this[cT](t)
    }, {
        _n2f: null, _j3: null, _mp: null, _d1: null, _js: null, _n6u: function (t) {
            return t ? (this._68s || (this[_T] = {}), this[_T][t] ? !1 : (this[_T][t] = !0, void this.invalidate())) : this[dT]()
        }, _9h: function (t) {
            return this._68s && this[_T][t]
        }, isInvalidate: function () {
            return this._68
        }, clear: function () {
            this._mp.clear(), this._d1[rr] = 0, this._8f = {}, this._n29 = !1, this[dT]()
        }, _70: function () {
            this[lT](vT), this._2j()
        }, _2j: function () {
            this[lT](bT)
        }, invalidate: function (t) {
            (t || !this._68) && (this._68 = !0, this._ll || (this[yT] = requestAnimationFrame(this._fu[Pr](this))))
        }, _6w: function (t) {
            return this._ll = t, t ? void (this[yT] && (cancelAnimationFrame(this[yT]), this._jningID = null)) : void (this._68 && this[dT](!0))
        }, _fu: function () {
            this[yT] = null, this._68 = !1;
            var t = this[Dc];
            this[Dc] || (this[gT](), this[Dc] = !0), this[pT](!t), this._38(), this._jn(), this._22()
        }, _n6x: function (t) {
            this._n60 = t || this[mT], (t || this[_T].size) && this._8v(), (t || this._68s.matrix) && this._6l(), this[xT](t), this._45(t), this[_T] = {}
        }, _38: function () {
            this._d1[rr] = 0;
            var t = this[ET];
            if (this._mp[qu](function (i) {
                if (i.__i2 !== !1) {
                    var n = this._n2d(i);
                    t[ql](n.x, n.y, n.width, n.height) && this._d1.push(i)
                }
            }, this), this._d1 = this._id(this._d1), !this[wT]) {
                var i = this._n69;
                this[TT][rr] = 0, i._n67(this[ET]), i._hd() || this._d1.forEach(function (t) {
                    var n = this[kT](t);
                    i._el(n.x, n.y, n[ca], n.height) && this._lmingList[lr](t)
                }, this)
            }
        }, _id: function (t) {
            return NY ? t = d(t, this._9r) : t.sort(this._9r), t
        }, _9r: function (t, i) {
            return t = t[MT] || 0, i = i[MT] || 0, t - i
        }, _n2d: function (t) {
            return t[OT]
        }, _jn: function () {
            if (this[wT]) return this._dw(), this._6q(!0), void this.render(this._n4tx, this._d1);
            this._6q(this._n6uffer);
            var t = this._n69, i = this[ST];
            i.save(), this._n6uffer && (ge(i), i.drawImage(this[IT][ao], this._n6uffer.x, this[IT].y)), t._ju(i, this._du[Pr](this)), this._dw(), this.render(i, this._lmingList), i[wo]()
        }, _6q: function (t) {
            this[PT] ? (this[PT] = !1, this._j3[uo](this[lm], this._height)) : t && ye(this._j3)
        }, _8v: function () {
            var t = this[ca], i = this[_a];
            return this._width == t && this[vm] == i ? !1 : (this[lm] = t, this._height = i, void (this[PT] = !0))
        }, _45: function (t) {
            if (!t && !this._68s[bT]) return !1;
            var i = this._js[AT]([0, 0]), n = this[nf], e = this[lm] / n, s = this[vm] / n, h = this[Fo], r = this[ET];
            if (r.x == i[0] && r.y == i[1] && r[ca] == e && r[_a] == s && r[Fo] == h) return !1;
            var a = r[Um]();
            return this[ET].set(i[0], i[1], e, s, h, n), this._3p(this[ET], a, t), !0
        }, _3p: function (t, i, n) {
            this._n60 || n || (this[IT] = this._g5(i, t))
        }, _6p: function () {
            if (this[Dc]) {
                if (this._ll) {
                    var t;
                    this[CT] ? this[CT][LT] = t = eW.mul([], this._js.m, eW.invert([], this._n4urrentMatrix.m)) : t = this._js.m, this._50(t)
                }
                this._n6u(DT), this._2j()
            }
        }, _50: function (t) {
            this[jT] = t, oW.setStyle(this._j3, z_, t ? RT + t[NT](Wr) + ")" : "")
        }, _6l: function () {
            var t = this[CT];
            if (this[CT] = {
                tx: this._js.m[4],
                ty: this._js.m[5],
                m: this._js.m.slice(),
                scale: this._js._gf(),
                rotate: this._js._dp()
            }, this.__n4ssMatrix && this._50(null), !this._n60) {
                if (this._2v(this[CT], t), !t || t.scale != this[CT][nf]) return this._7b(this[CT][nf], t ? t[nf] : null), void (this[wT] = !0);
                if (!t || t[Fo] != this[CT][Fo]) return this._4z(this[CT].rotate, t ? t[Fo] : null), void (this[wT] = !0);
                var i = t.m[4] - this[CT].m[4], n = t.m[5] - this._n4urrentMatrix.m[5], e = this[no];
                i *= e, n *= e;
                var s = 1e-4;
                (Math.abs(i - Math.round(i)) > s || Math.abs(n - Math[Lf](n)) > s) && (this._n60 = !0)
            }
        }, _6k: function () {
            var t = this[Ao], i = t[dr]();
            t[to](), this._mp[qu](function (i) {
                i[BT] !== !1 && t.add(this[kT](i))
            }, this), t[Gu](i) || this._3b(t, i)
        }, _3b: function () {
        }, _n29: !1, _n4c: function () {
        }, _9g: function (t) {
            var i = t[no];
            t.scale(i, i), t[z_][mr](t, this._js.m)
        }, render: function (t, i) {
            i && i.length && (t[vo](), this._9g(t), i[qu](function (i) {
                if (t[vo](), i[$T] !== !1) try {
                    i.render(t)
                } catch (n) {
                    console[ea](n)
                }
                t[wo]()
            }, this), t[wo]())
        }, setParent: function (t) {
            N(t) && (t = i[FT](t)), this._ml != t && (this._ml && this[GT] && (j(this._ml, ZU), this._ml.removeChild(this._n2f)), this._ml = t, this._ml && (D(this._ml, ZU), this._ml[q_](this._6j()), this._70()))
        }, _6j: function () {
            return this[GT] || this[uT](), this[GT]
        }, _n6w: function () {
            var t = Ri(!0);
            ee(t.g), t[Yu] = WU;
            var n = i.createElement(N_);
            return n[Eb](by, function (t) {
                return i[zT] == this ? (t[$r] && t[$r](), !1) : void 0
            }[Pr](n), !1), n[Yu] = XU, n[q_](t), n[YT] = 0, this._j3 = t, this._n2f = n, this._n4tx = this._j3[oo](fo), t
        }, toLogical: function (t, i) {
            return t instanceof Object && (Q(t) && (t = this._80(t)), Array[Br](t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._js[AT]([t, i])
        }, toCanvas: function (t, i) {
            return this._js[z_]([t, i])
        }, _80: function (t) {
            return xi(t, this[GT])
        }, _eg: function (t, i, n) {
            if (t.hitTest instanceof Function) return t[P_](i, n);
            var e = this[kT](t);
            return e ? n ? QY[ql](e.x, e.y, e[ca], e[_a], i[0] - n, i[1] - n, n + n, n + n) : QY.intersects(e.x, e.y, e[ca], e[_a], i[0], i[1]) : t
        }, hitTest: function (t, i) {
            return this._8h(t, i)
        }, _8h: function (t, i) {
            i = this._9c(i), t = this.toLogical(t);
            for (var n, e = this._d1[rr]; --e >= 0;) if (n = this._d1[e], this._eg(n, t, i)) return n
        }, _9c: function (t) {
            return (t === n || null === t) && (t = HY[Td]), t ? t / this[nf] : 0
        }, getUIByMouseEvent: function (t, i) {
            if (t[qT]) return this._mp[kl](t[qT]);
            var n = this._8h(t, i);
            return t[qT] = n ? n.id : -1, n
        }, _8f: null, invalidateUI: function (t) {
            this._8f[t.id] = t, this.invalidate()
        }, _9n: function (t) {
            t[Po] instanceof Function && t[Po](this)
        }, _n4e: function (t, i) {
            t[HT] && this._g8(t.__jd);
            var n = t[BT];
            if (t[BT] = this._ej(t, i), !t[BT]) return n;
            var e = t[HT];
            this._9n(t);
            var s = this._n2d(t);
            t[HT] = {x: s.x, y: s.y, width: s[ca], height: s.height};
            var h = t[BT] !== n || !QY.equals(e, s);
            return h && t[HT] && this._g8(t[HT]), h
        }, _ej: function (t) {
            return t[$T] !== !1
        }, _$q: function (t) {
            this._mp[qu](function (i) {
                this._n4e(i, t)
            }, this), this._8f = {}, this._6k()
        }, _n2r: function (t) {
            var i = this.scale;
            if (t) return this._$q(i);
            var n = this[UT];
            this[UT] = !1;
            for (var e in this._8f) {
                var s = this._8f[e];
                n ? this._n4e(s, i) : n = this[WT](s, i)
            }
            this._8f = {}, n && this._6k()
        }, _8d: null, _22: function () {
            if (!this._8d[rr]) return !1;
            var t = this._8d;
            this._8d = [], t.forEach(function (t) {
                try {
                    var i = t[hr], n = t.scope, e = t.delay;
                    n instanceof Object ? i = i[Pr](n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
                } catch (s) {
                }
            }, this), this._68 && this._fu()
        }, _e2: function (t, i, n) {
            this._8d[lr]({call: t, scope: i, delay: n}), this._68 || this._22()
        }, _4b: function (t, i) {
            for (var n = this._d1, e = 0, s = n[rr]; s > e; e++) if (t[hr](i, n[e]) === !1) return !1
        }, _ec: function (t, i) {
            this._mp.forEach(t, i)
        }, _$u: function (t, i) {
            for (var n = this._d1, e = n[rr] - 1; e >= 0; e--) if (t[hr](i, n[e]) === !1) return !1
        }, _3v: function (t, i) {
            this._mp.forEachReverse(t, i)
        }, _3z: function () {
            return this.bounds
        }, _fq: function (t, i, n) {
            t /= this[nf] || 1, this._jq(t, i, n)
        }, _jq: function (t, i, e) {
            if (this._n29 && (i === n || null === i)) {
                var s = this[VT](this[ca] / 2, this[_a] / 2);
                i = s[0] || 0, e = s[1] || 0
            }
            return this._js[nf](t, [i || 0, e || 0])
        }, _e0: function (t, i) {
            this._js[bo]([t, i], !0)
        }, _n2y: function (t, i, n, e) {
            if (n == this[nf] && e !== !1) {
                var s = this.ratio;
                s != (0 | s) && (t = Math.round(t * s) / s, i = Math[Lf](i * s) / s)
            }
            this._js[XT]([t, i], n)
        }, _jo: function (t, i) {
            return this._jq(this._dx, t, i)
        }, _ib: function (t, i) {
            return this._jq(1 / this._dx, t, i)
        }, _1k: function () {
            var t = this._3z();
            if (!t[Sl]()) {
                var i = this.width / t[ca], n = this.height / t[_a], e = Math.min(i, n);
                return e = Math.max(this._fz, Math.min(this._fy, e)), {scale: e, cx: t.cx, cy: t.cy}
            }
        }, _dx: 1.3, _fy: 10, _fz: .1, _n60: !1, _7b: function () {
        }, _4z: function () {
        }, _2v: function () {
        }, _dw: function () {
            this[IT] = null, this[ZT]._kz()
        }, _du: function (t) {
            var i = this._js, n = this._j3[no], e = this[nf], s = i._dp();
            if (!s) {
                var h = i[z_]([t[0], t[1]]);
                return h[0] *= n, h[1] *= n, n *= e, h[2] = t[2] * n, h[3] = t[3] * n, h
            }
            var r = new QY, a = i[z_]([t[0], t[1]]);
            return r.add(a[0], a[1]), a = i[z_]([t[0] + t[2], t[1]]), r.add(a[0], a[1]), a = i.transform([t[0], t[1] + t[3]]), r.add(a[0], a[1]), a = i[z_]([t[0] + t[2], t[1] + t[3]]), r.add(a[0], a[1]), [r.x * n, r.y * n, r[ca] * n, r.height * n]
        }, _g5: function (t, n) {
            var e = this._j3;
            if (e.width && e.height) {
                var s = n._34(t.x, t.y, t.width, t[_a]);
                if (s && s.width && s.width) {
                    var h = this.scale * this[no], r = this[ZT], a = {}, o = 1e-6;
                    s.x > o && (a[ed] = n._4i(0, 0, s.x, n[_a], h)), n[ca] - s[aa] > o && (a[aa] = n._4i(s[aa], 0, n[ca] - s[aa], n.height, h)), s.y > o && (a.top = n._4i(s.x, 0, s[ca], s.y, h)), n[_a] - s[oa] > o && (a[oa] = n._4i(s.x, s[oa], s.width, n[_a] - s[oa], h)), H(a) || r._40(a);
                    var f = n._ia(t.x, t.y), u = (f[0] - s.x) * h, c = (f[1] - s.y) * h, _ = s[ca] * h, d = s[_a] * h;
                    u = Math[Lf](u), c = Math[Lf](c), _ = Math.round(_), d = Math.round(d);
                    var l = this._n6ackCanvas;
                    return l || (l = this._n6ackCanvas = i[ro](ao), l.g = l.getContext(fo)), l.width = _, l.height = d, ge(l.g), l.g[ud](e, u, c), u = f[0] * h - u, c = f[1] * h - c, {
                        x: u,
                        y: c,
                        canvas: l
                    }
                }
            }
        }, _m5: function (t, i, n, e) {
            this._n69._mn(t, i, n, e)
        }, _g8: function (t) {
            this._n69._ij(t)
        }
    });
    Object[Nc](JU[yr], {
        width: {
            get: function () {
                return this[GT][Pa]
            }
        }, height: {
            get: function () {
                return this._n2f[KT]
            }
        }, rotate: {
            get: function () {
                return this._js._dp()
            }
        }, tx: {
            get: function () {
                return this._js._8a()[0]
            }
        }, ty: {
            get: function () {
                return this._js._8a()[1]
            }
        }, ratio: {
            get: function () {
                return this._j3 ? this._j3[no] : void 0
            }
        }, scale: {
            get: function () {
                return this._js._gf()
            }, set: function (t) {
                this._fq(t)
            }
        }, renderScale: {
            get: function () {
                return this[nf] * this[no]
            }
        }, uis: {
            get: function () {
                return this._mp
            }
        }, length: {
            get: function () {
                return this._mp.length
            }
        }, viewportBounds: {
            get: function () {
                return this._viewport[JT]()
            }
        }
    });
    var QU, tW = S({
        constructor: function () {
            this._gc = [], this._jd = new QY, this._ga = AY ? 20 : 50
        }, _ga: 20, _gc: null, _m7: !1, _jd: null, _kz: function () {
            this._m7 = !1, this._gc.length = 0, this[QT] = null, this._jd[to]()
        }, _hd: function () {
            return 0 == this._gc.length && !this[QT]
        }, _mn: function (t, i, n, e) {
            0 >= n || 0 >= e || this._gc[lr]([t, i, n, e])
        }, _ij: function (t) {
            this._mn(t.x, t.y, t[ca], t[_a])
        }, _40: function (t) {
            var i = this._jd;
            for (var n in t) {
                var e = t[n], s = e[JT]();
                i.add(s)
            }
            this[QT] = t
        }, _n67: function (t, i) {
            for (var n = [], e = this._gc, s = 0, h = e.length; h > s; s++) {
                var r = e[s];
                t[ql](r[0], r[1], r[2], r[3]) && (n[lr](r), this._jd.addRect(r[0], r[1], r[2], r[3]))
            }
            this._gc = n, this._m7 = i || n[rr] >= this._ga
        }, _el: function (t, i, n, e) {
            if (!this._jd[Fl](t, i, n, e)) return !1;
            if (this._m7) return !0;
            if (this[QT]) {
                var s = this[QT];
                for (var h in s) if (s[h].intersects(t, i, n, e)) return !0
            }
            for (var r, a = 0, o = this._gc[rr]; o > a; a++) if (r = this._gc[a], QY.intersects(t, i, n, e, r[0], r[1], r[2], r[3])) return !0;
            return !1
        }, _ju: function (t, i) {
            if (this._hd()) return !1;
            if (t.beginPath(), this._m7) {
                var n = i([this._jd.x, this._jd.y, this._jd[ca], this._jd.height]);
                return pe(t, n[0], n[1], n[2], n[3]), void t[Ex]()
            }
            if (this._viewportClips) for (var e in this[QT]) {
                var n = this[QT][e][tk];
                pe(t, n[0], n[1], n[2], n[3])
            }
            for (var s = this._gc, h = 0, r = s[rr]; r > h; h++) {
                var n = i(s[h]);
                pe(t, n[0], n[1], n[2], n[3])
            }
            t[Ex]()
        }
    });
    tW[ik] = function (t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t[ca], e = t.height, t = t.x), n = V(t + n) - (t = W(t)), e = V(i + e) - (i = W(i)), [t, i, n, e]
    }, tW._d2 = W, tW._fh = V, rH[nk] = ek, rH.NAVIGATION_SCROLLBAR = sk, HY[hk] = rH[rk];
    var iW = S({
        _jn: function () {
            k(this, iW, ak, arguments), this[ok]._jn()
        },
        _9r: function (t, i) {
            return t = t.$data.zIndex || 0, i = i.$data[MT] || 0, t - i
        },
        "super": JU,
        constructor: function (t, n) {
            this._km = t, N(n) && (n = i[FT](n)), n && n[Dl] || (n = i[ro](N_)), M(this, iW, [n]), this._topCanvas = new mh(this, this._n2f), this._h2 = [], this._km._5[Kd](this._1i, this), this._km._1f[Kd](this._9l, this), this._km._13.addListener(this._64, this), this._km._$i[Kd](this._2o, this), this._km._$k[Kd](this._3n, this), this._n6e = {}, this._3e(HY.NAVIGATION_TYPE, !0)
        },
        _50: function (t) {
            k(this, iW, fk, arguments), this._topCanvas._50(t)
        },
        _gh: function (t) {
            return t.id || (t = this._mp[kl](t)), t ? (this._mp[_r](t), t[sg](), t[HT] && this._g8(t[HT]), void (this[UT] = !0)) : !1
        },
        _gi: function () {
            this._mp[qu](function (t) {
                t.destroy()
            }), this._mp.clear()
        },
        _ej: function (t, i) {
            var n = t.data || t;
            return n._$o && (n._$o = !1, n._i2 = this._4w(n, i)), n._i2 !== !1
        },
        _4w: function (t, i) {
            return this._3t(t, i) ? !this._km[uk] || this._km[uk](t, i) !== !1 : !1
        },
        _9p: function (t) {
            return this._km._35 == dh(t)
        },
        _3t: function (t, i) {
            if (t[$T] === !1) return !1;
            if (!(t instanceof cW)) return this._km._35 != dh(t) ? !1 : !t._dh;
            var n = t[Zu], e = t[Uu];
            if (!n || !e) return !1;
            if (n == e && !t[Qu]()) return !1;
            if (t[ck]()) {
                var s = t[Wu](!0);
                if (s && !s._ej(t, i)) return !1
            }
            return this._ej(n, i) && this._ej(e, i) ? !0 : !1
        },
        _n2d: function (t) {
            return t[Dc] ? {x: t.$x + t[wd].x, y: t.$y + t[wd].y, width: t.uiBounds[ca], height: t[wd][_a]} : void 0
        },
        _2i: function (t) {
            var i = this._lb(t);
            if (i) {
                var n = this[kT](i);
                if (n) return new QY(n)
            }
        },
        _eg: function (t, i, n) {
            return t.hitTest(i[0], i[1], n)
        },
        hitTest: function (t, i) {
            var n = k(this, iW, P_, arguments);
            if (n) {
                t = this.toLogical(t), i = this._9c(i);
                var e = n[P_](t[0], t[1], i, !0);
                if (e instanceof bW) return e
            }
            return n
        },
        _3s: function (t) {
            return this.getUIByMouseEvent(t)
        },
        _6q: function () {
            k(this, iW, _k, arguments), this[ok]._iv(this.width, this[_a])
        },
        _l3: 1,
        _d1: null,
        _8n: null,
        _8m: null,
        _mp: null,
        _ml: null,
        _j3: null,
        _n69: null,
        _68: !1,
        _n29: !1,
        _js: null,
        _4b: function (t, i) {
            for (var n = this._d1, e = 0, s = n[rr]; s > e; e++) if (t.call(i, n[e]) === !1) return !1
        },
        _ec: function (t, i) {
            this._mp[qu](t, i)
        },
        _$u: function (t, i) {
            for (var n = this._d1, e = n[rr] - 1; e >= 0; e--) if (t[hr](i, n[e]) === !1) return !1
        },
        _3v: function (t, i) {
            this._mp[dk](t, i)
        },
        _3p: function (t) {
            k(this, iW, lk, arguments), this._viewportChanged = {value: t}
        },
        _n4c: function () {
            this._45(!0), this[vk] || (this._originAdjusted = !0, this._km && this._km[bk] && this._js[XT]([this.width / 2, this.height / 2]))
        },
        _fu: function () {
            if (!this._ihed && this._68) {
                if (this._jningID = null, this._68 = !1, this._n29 && this._km && this._km._$o && (this._km._$o = !1, this._km[qu](function (t) {
                    t.invalidateVisibility(!0)
                })), k(this, iW, yk, arguments), this._8mChanged) {
                    this._7f && this._7f._k3();
                    var t = this._8mChanged[Or], i = this[gk].old;
                    this._8mChanged = null, this._km._47(new cq(this._km, pk, t, i))
                }
                this[mk] && (this[mk] = !1, this._7f && this._7f._3p && this._7f._3p(this[ET][ca] * this[ET][nf], this[ET].height * this[ET][nf]), this._km._47(new cq(this._km, bT, this[ET])))
            }
        },
        _h2: null,
        _n4e: function (t) {
            var i = t.$data;
            if (!t._1d && !i._68 && !i._$o) return !1;
            var n = t[Uf];
            return n = k(this, iW, WT, arguments) || n
        },
        _9n: function (t) {
            var i = t[xk];
            i[Ek] && (i[Ek] = !1, t._4o()), i[wk] && i._i4() && (t._5k(), i.__68 = !1), (t._1d || i._68) && (i._68 = !1, t[Po]())
        },
        _h3: function (t, i) {
            var n = t.ratio;
            t[nf](n, n), t[z_][mr](t, this._js.m);
            for (var e = this[Tk], s = [], h = 0, r = i.length; r > h; h++) {
                var a = i[h];
                a._jn(t, e), a._jv && a._jv.length && s[lr](a)
            }
            if (s[rr]) for (h = 0, r = s[rr]; r > h; h++) s[h]._91(t, e)
        },
        render: function (t, i) {
            if (i.length) {
                if (t[vo](), AY) try {
                    this._h3(t, i)
                } catch (n) {
                } else this._h3(t, i);
                t[wo]()
            }
        },
        _h4: function (t, i, n) {
            t[vo](), t[bo](-n.x * i, -n.y * i), t[nf](i, i);
            var e, s, h = this._mp._jr[or]();
            h = this._id(h);
            for (var r = [], a = 0, o = h[rr]; o > a; a++) e = h[a], e.__i2 && (s = this[kT](e), n[Fl](s.x, s.y, s.width, s[_a]) && (e._jn(t, i), e._jv && e._jv.length && r[lr](e)));
            if (r.length) for (a = 0, o = r.length; o > a; a++) r[a]._91(t, i);
            t[wo]()
        },
        _$w: function () {
        },
        _1r: function () {
            for (var t, i, n = this._mp._jr, e = new QY, s = n.length - 1; s >= 0; s--) t = n[s], t._i2 && (i = t[wd], e[Gl](t.$x + i.x, t.$y + i.y, i[ca], i.height));
            var h = this._8m;
            this._8m = e, e[Gu](h) || this._$w(h, e)
        },
        _5t: function () {
            this._d1[rr] = 0, this._8n = {}
        },
        _l9: function () {
            this._kz()
        },
        _ih: function () {
            this._kz(), this._ihed = !0, this._68 = !1, this._topCanvas[to](), this._8d.length = 0, this._7f && (this._7f._ih(), delete this._7f)
        },
        _lb: function (t) {
            return this._mp[kl](t.id || t)
        },
        _8: function (t) {
            return this._eb(t)
        },
        _h6: function (t, i) {
            var n = this[kk](t, i);
            return {x: n[0], y: n[1]}
        },
        _eb: function (t, i) {
            var n = this[VT](t, i);
            return {x: n[0], y: n[1]}
        },
        _$d: null,
        _3n: function (t) {
            var i = t.source, n = t[Vo];
            if (n) if (this[Dc]) {
                var e, s;
                if ($(n)) for (var h = 0, r = n[rr]; r > h; h++) s = n[h].id, e = this._mp[kl](s), e && (e[Mk] = i[wl](s), e[Ok]()); else {
                    if (s = n.id, e = this._mp[kl](s), !e) return;
                    e[Mk] = i.containsById(s), e[Ok]()
                }
                this[lT]()
            } else {
                this._$d || (this._$d = {});
                var e, s;
                if ($(n)) for (var h = 0, r = n[rr]; r > h; h++) s = n[h].id, this._$d[s] = !0; else s = n.id, this._$d[s] = !0
            }
        },
        _km: null,
        _n4w: function (t) {
            var i = t[Sk];
            return i ? new i(t, this._km) : void 0
        },
        _1i: function (t) {
            if (!this[Dc]) return !1;
            var i = t[pf], n = t.kind;
            Ik == n && this._km[Pk](), Sk == n ? (this._gh(i.id), this._kn(i)) : Ak == n && i._i4() && t[Or] && this._5x(i);
            var e = this._mp.getById(i.id);
            e && e._n29 && e[Ck](t) && this._n6u()
        },
        _32: function (t) {
            var i = this._lb(t);
            i && (i[Lk](), this[lT]())
        },
        _9l: function (t) {
            if (!this[Dc]) return !1;
            switch (t[uv]) {
                case mq[Vv]:
                    this._kn(t[Vo]);
                    break;
                case mq.KIND_REMOVE:
                    this._ha(t[Vo]);
                    break;
                case mq[Bv]:
                    this._if(t[Vo])
            }
        },
        _kz: function () {
            this[Dk] = {}, this._gi(), this.clear()
        },
        _n6e: null,
        _kn: function (t) {
            var i = this[jk](t);
            i && (this._mp.add(i), this[Dc] && (this._n6e[t.id] = t), this[lT]())
        },
        _ha: function (t) {
            if (Array.isArray(t)) {
                for (var i, n = [], e = 0, s = t[rr]; s > e; e++) i = t[e].id, n[lr](i), delete this[Dk][i];
                t = n
            } else t = t.id, delete this[Dk][t], t = [t];
            t[qu](function (t) {
                this._gh(t)
            }, this), this._n6u()
        },
        _if: function () {
            this._kz()
        },
        _64: function (t) {
            return this[Dc] ? void (t[pf] instanceof _W && !this._n6e[t[pf].id] && (t.oldValue && (this._32(t.oldValue), t[pv][wk] = !0), t[Or] && (this._32(t[Or]), t[Or][wk] = !0), this._5x(t[pf]))) : !1
        },
        _2o: function (t) {
            return this[Dc] ? void (t[pf] instanceof _W && !this[Dk][t[pf].id] && this._5x(t[pf])) : !1
        },
        _2p: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[Wu](!0);
                if (!i) return t._edgeBundleInvalidateFlag = !1, void t[Rk]();
                i[Po](this._km), i._n61(function (t) {
                    t[Rk]()
                })
            }
        },
        _$q: function (t) {
            var i, n = (this._km, this._km[vd]), e = this._mp, s = [], h = 1;
            if (n.forEachByDepthFirst(function (t) {
                return t instanceof cW ? (this._2p(t), void s[lr](t)) : (i = this._n4w(t), void (i && (e.add(i), t[Nk] = h++)))
            }, this), e[rr]) for (var r = e._jr, h = r[rr] - 1; h >= 0; h--) i = r[h], this._3h(i, i[xk], t);
            for (var a, h = 0, o = s.length; o > h; h++) if (a = s[h], i = this[jk](a)) {
                this._3h(i, a, t), e.add(i);
                var f = a[Zu], u = a[Uu], c = f.__ks || 0;
                f != u && (c = Math.max(c, u.__ks || 0)), a[Nk] = c
            }
            if (s[rr] && e._jr.sort(function (t, i) {
                return t.$data[Nk] - i[xk][Nk]
            }), this._$d) {
                var _ = n[_b];
                for (var d in this._$d) if (_[wl](d)) {
                    var i = e.getById(d);
                    i && (i[Mk] = !0)
                }
                this._$d = null
            }
            this._6k()
        },
        _n2r: function (t, i) {
            if (t) return this._$q();
            var n = this._n6uBoundsFlag;
            this[UT] = !1;
            for (var e in this[Dk]) {
                var s = this[Dk][e];
                s instanceof _W ? this._5x(s) : this._5z(s)
            }
            this[Dk] = {};
            for (var h, r, a = this._mp._jr, o = [], f = a[rr] - 1; f >= 0; f--) h = a[f], r = h[xk], r instanceof cW ? (this._2p(r), o[lr](h)) : this._3h(h, r, i) && !n && (n = !0);
            if (o[rr]) for (var f = 0, u = o[rr]; u > f; f++) h = o[f], this._3h(h, h[xk], i) && !n && (n = !0);
            n && this._6k()
        },
        _3h: function (t, i, n) {
            if (i instanceof cW) return i[Ek] && (i[Ek] = !1, t._4o()), this[WT](t, n);
            if (i.__68 && i._i4() && (t._5k(), i.__68 = !1), this._n4e(t, n)) {
                var e = this._4c(i);
                return e && (e[wk] = !0), i[Bk]() && i[ac](function (t) {
                    t.__4o = !0
                }, this), !0
            }
        },
        _2s: function (t, i) {
            var n = t[Zu], e = t[Uu], s = i[$k](n.id);
            if (n == e) return s;
            var h = i[$k](e.id);
            return Math.max(s, h)
        },
        _2u: function (t, i) {
            var n = this[vd]._fj(t);
            return n ? i[$k](n.id) : 0
        },
        _5x: function (t) {
            var i = this._mp, n = i[kl](t.id);
            if (!n) throw new Error(Fk + t.name + Gk);
            var s = this._2u(t, i), h = [n];
            t.hasChildren() && e(t, function (t) {
                t instanceof _W && (n = i[kl](t.id), n && h[lr](n))
            }, this), this._49(i, s, h)
        },
        _5z: function (t) {
            var i = this._mp[kl](t.id);
            if (i) {
                var n = this._2s(t, this._mp);
                this._mp[zk](i, n)
            }
        },
        _49: function (t, i, n) {
            function e(t) {
                s.add(t)
            }

            var s = new UY;
            l(n, function (n) {
                i = t.setIndexAfter(n, i), n[xk][ac](e)
            }, this), 0 != s.length && s[qu](this._5z, this)
        },
        _4c: function (t) {
            var i = Ce(t);
            return i && i.expanded ? i : null
        },
        _7g: null,
        _7f: null,
        _3e: function (t, i) {
            return i || t != this._7g ? (this._7g = t, this._7f && (this._7f._ih(), delete this._7f), t == rH[rk] ? void (this._7f = new gh(this, this[GT])) : t == rH.NAVIGATION_BUTTON ? void (this._7f = new yh(this, this[GT])) : void 0) : !1
        },
        _2v: function (t, i) {
            this._7f && this._7f._k3(), this._km._47(new cq(this._km, z_, t, i))
        },
        _7b: function (t, i) {
            this._km._47(new cq(this._km, nf, t, i))
        },
        _3b: function (t, i) {
            this[gk] = {value: t, old: i}
        },
        _7a: function () {
            this._70()
        }
    });
    Object[Nc](iW[yr], {
        _viewportBounds: {
            get: function () {
                return this.viewportBounds
            }
        }, _scale: {
            get: function () {
                return this[nf]
            }, set: function (t) {
                this._fq(t)
            }
        }, _tx: {
            get: function () {
                return this.tx
            }
        }, _ty: {
            get: function () {
                return this.ty
            }
        }, graphModel: {
            get: function () {
                return this._km[Yk]
            }
        }
    });
    var nW = JU, eW = {};
    eW[Er] = function () {
        return [1, 0, 0, 1, 0, 0]
    }, eW[qk] = function (t, i) {
        var n = i[0], e = i[1], s = i[2], h = i[3], r = i[4], a = i[5], o = n * h - e * s;
        return o ? (o = 1 / o, t[0] = h * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - h * r) * o, t[5] = (e * r - n * a) * o, t) : null
    }, eW.multiply = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = n[0], u = n[1], c = n[2], _ = n[3],
            d = n[4], l = n[5];
        return t[0] = e * f + h * u, t[1] = s * f + r * u, t[2] = e * c + h * _, t[3] = s * c + r * _, t[4] = e * d + h * l + a, t[5] = s * d + r * l + o, t
    }, eW.mul = eW[cx], eW[Fo] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = Math.sin(n), u = Math.cos(n);
        return t[0] = e * u + h * f, t[1] = s * u + r * f, t[2] = e * -f + h * u, t[3] = s * -f + r * u, t[4] = a, t[5] = o, t
    }, eW[nf] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = h * u, t[3] = r * u, t[4] = a, t[5] = o, t
    }, eW[bo] = function (t, i, n) {
        var e = i[0], s = i[1], h = i[2], r = i[3], a = i[4], o = i[5], f = n[0], u = n[1];
        return t[0] = e, t[1] = s, t[2] = h, t[3] = r, t[4] = e * f + h * u + a, t[5] = s * f + r * u + o, t
    }, eW.transform = function (t, i) {
        var n = i[0], e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    }, eW[AT] = function (t, i) {
        return eW[z_](eW[qk]([], t), i)
    };
    var sW = Math.PI + Math.PI, hW = R, rW = S({
        equals: function (t) {
            if (!t || !Array.isArray(t)) return !1;
            for (var i = this.m, n = 0; n < i[rr];) {
                if (i[n] != t[n]) return !1;
                ++n
            }
            return !0
        }, constructor: function (t) {
            this.m = t || eW.create(), this.im = []
        }, listener: null, _68: !0, invalidate: function () {
            return this._68 = !0, this[Hk] && this[Gu](this[Hk]) ? !1 : (this[Mv] && this.listener({
                target: this,
                kind: dT
            }), this._n6ackM = this.m.slice(), this)
        }, validate: function () {
            return this._68 = !1, eW[qk](this.im, this.m), this
        }, translate: function (t, i) {
            return hW(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this.invalidate()) : (eW[bo](this.m, this.m, t), this.invalidate())
        }, translateTo: function (t, i) {
            return hW(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._gf(), eW[nf](this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this[dT]()
        }, scale: function (t, i) {
            return jr == typeof t && (t = [t, t]), i ? (eW[bo](this.m, this.m, i), eW[nf](this.m, this.m, t), eW[bo](this.m, this.m, me(i))) : eW.scale(this.m, this.m, t), this[dT]()
        }, rotate: function (t, i) {
            return i ? (eW[bo](this.m, this.m, i), eW[Fo](this.m, this.m, t), eW[bo](this.m, this.m, me(i))) : eW[Fo](this.m, this.m, t), this[dT]()
        }, transform: function (t) {
            return eW[z_](this.m, t)
        }, reverseTransform: function (t) {
            return eW[z_](this._4g(), t)
        }, toString: function () {
            return RT + this.m[NT](Wr) + Xr
        }, _4g: function () {
            return this._68 && this[Po](), this.im
        }, _ds: function () {
            var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
            return [Math.sqrt(t * t + n * n), Math[Mo](i * i + e * e)]
        }, _gf: function () {
            var t = this.m[0], i = this.m[2];
            return Math[Mo](t * t + i * i)
        }, _8a: function () {
            return [this.m[4], this.m[5]]
        }, _n4u: function () {
            var t = this.m[0], i = this.m[1], n = this.m[2], e = this.m[3];
            return [xe(Math[sa](i, e)), xe(Math.atan2(-n, t))]
        }, _dp: function () {
            return xe(Math[sa](this.m[1], this.m[3]))
        }
    }), aW = S({
        constructor: function () {
        }, x: 0, y: 0, width: 0, height: 0, rotate: 0, set: function (t, i, n, e, s, h) {
            return this.x = t, this.y = i, this[ca] = n, this.height = e, this.rotate = s, this._n4os = Math.cos(s), this[ra] = Math.sin(s), this.scale = h, this[Uk] = null, this
        }, _ia: function (t, i) {
            return t -= this.x, i -= this.y, this[Fo] ? Te(t, i, this._sin, this[ha]) : [t, i]
        }, _89: function (t) {
            var i = new QY;
            return i.add(this._ia(t.x, t.y)), i.add(this._ia(t.x + t.width, t.y)), i.add(this._ia(t.x, t.y + t[_a])), i.add(this._ia(t.x + t[ca], t.y + t[_a])), i
        }, _gm: function (t, i) {
            if (this.rotate) {
                var n = Te(t, i, Math.sin(-this[Fo]), Math.cos(-this.rotate));
                t = n[0], i = n[1]
            }
            return [this.x + t, this.y + i]
        }, _57: function (t, i) {
            var n = this._ia(t, i);
            return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[ca] && i <= this[_a]
        }, intersects: function (t, i, n, e) {
            if (!this[Fo]) return QY[ql](this.x, this.y, this[ca], this[_a], t, i, n, e);
            if (!n || !e) return this._57(t, i);
            var s = this[JT]();
            if (!s[ql](t, i, n, e)) return !1;
            for (var h = s[Co], r = 0; r < h[rr];) {
                var a = h[r];
                if (QY[ru](t, i, n, e, a[0], a[1])) return !0;
                r++
            }
            var o = [[t, i], [t + n, i], [t, i + e], [t + n, i + e]];
            for (r = 0; r < o.length;) {
                var a = o[r];
                if (this._57(a[0], a[1])) return !0;
                r++
            }
            return we(h, o)
        }, getGlobalBounds: function () {
            return this[Uk] || (this._globalBounds = this._6g(0, 0, this.width, this.height)), this[Uk]
        }, _6g: function (t, i, n, e) {
            if (!this[Fo]) return new QY(this.x + t, this.y + i, n, e);
            var s = [], h = new QY, r = this._gm(t, i);
            return s[lr](r), h.add(r[0], r[1]), r = this._gm(t + n, i), s[lr](r), h.add(r[0], r[1]), r = this._gm(t, i + e), s[lr](r), h.add(r[0], r[1]), r = this._gm(t + n, i + e), s[lr](r), h.add(r[0], r[1]), h[Co] = s, h
        }, _4i: function (t, i, n, e, s) {
            var h;
            if (this[Fo]) {
                var r = this._gm(t, i);
                h = (new aW).set(r[0], r[1], n, e, this[Fo], this[nf])
            } else h = (new aW).set(this.x + t, this.y + i, n, e, 0, this[nf]);
            return h[tk] = [Math.round(s * t), Math[Lf](s * i), Math.round(s * n), Math[Lf](s * e)], h
        }, _34: function (t, i, n, e) {
            if (!this[Fo]) {
                var s = QY.intersection(this.x, this.y, this.width, this.height, t, i, n, e);
                return s && s.offset(-this.x, -this.y), s
            }
            var h = this._ia(t, i);
            return t = h[0], i = h[1], QY[Hl](0, 0, this[ca], this.height, h[0], h[1], n, e)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this[ca] == t[ca] && this[_a] == t[_a] && this.rotate == t[Fo]
        }, toString: function () {
            return this.x + Wr + this.y + Wr + this[ca] + Wr + this[_a] + Wr + this[Fo]
        }, toJSON: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height, rotate: this[Fo], scale: this[nf]}
        }
    }), oW = {setStyle: gi, setStyles: bi, addRule: pi, pre: Oq}, fW = function (t, i, n, e) {
        this[pf] = t, this[uv] = i, this[pv] = e, this[Or] = n, this[Wk] = rH[Yc]
    };
    E(fW, cq);
    var uW = function (t) {
        this.id = ++SY, this[Gv] = {}, this._jc = {}, t && (this[Vk] = t)
    };
    uW[yr] = {
        _jc: null, getStyle: function (t) {
            return this._jc[t]
        }, setStyle: function (t, i) {
            var n = this._jc[t];
            return n === i || n && i && n[Gu] && n[Gu](i) ? !1 : this[zv](t, i, new fW(this, t, i, n), this._jc)
        }, putStyles: function (t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._jc[n] = e : this[qc](n, e)
            }
        }, _$o: !0, invalidateVisibility: function (t) {
            this._$o = !0, t || (this instanceof _W && this[Bk]() && this[ac](function (t) {
                t._$o = !0
            }), this._i4() && this[er]() && this[fc](function (t) {
                t.invalidateVisibility()
            }))
        }, onParentChanged: function () {
            this[Pk]()
        }, _i4: function () {
            return !this._3u && this instanceof vW
        }, invalidate: function () {
            this[Sv](new uq(this, Xk, dT))
        }, _n43: null, addUI: function (t, i) {
            if (this._n43 || (this[Zk] = new UY), t.id || (t.id = ++SY), this[Zk][wl](t.id)) return !1;
            var n = {id: t.id, ui: t, bindingProperties: i};
            this[Zk].add(n);
            var e = new uq(this, Xk, Nv, n);
            return this.onEvent(e)
        }, removeUI: function (t) {
            if (!this[Zk]) return !1;
            var i = this[Zk][kl](t.id || t);
            return i ? (this[Zk][_r](i), void this.onEvent(new uq(this, Xk, _r, i))) : !1
        }, clearUIs: function () {
            this.bindingUIs && this[Kk][Il]()[qu](function (t) {
                this.removeUI(t.ui)
            }.bind(this))
        }, toString: function () {
            return this[Vk] || this.id
        }, type: Jk, _3u: !1, _i2: !0, inGroup: function (t) {
            var i = Ce(this);
            return i == t || i && t instanceof vW && i.isDescendantOf(t)
        }
    }, E(uW, xq), P(uW[yr], [Sk, bf, MT, Qk]), K(uW[yr], {
        enableSubNetwork: {
            get: function () {
                return this._3u
            }, set: function (t) {
                if (this._3u != t) {
                    var i = this._3u;
                    this._3u = t, this instanceof _W && this._$y(), this[Sv](new cq(this, Ik, t, i))
                }
            }
        }, bindingUIs: {
            get: function () {
                return this[Zk]
            }
        }, styles: {
            get: function () {
                return this._jc
            }, set: function (t) {
                if (this._jc != t) {
                    for (var i in this._jc) i in t || (t[i] = n);
                    this[tM](t), this._jc = t
                }
            }
        }
    }), hH.findGroup = Ce;
    var cW = function (t, i, n) {
        this.id = ++SY, this[Gv] = {}, this._jc = {}, n && (this[Vk] = n), this[oc] = t, this.$to = i, this[iM]()
    };
    cW.prototype = {
        $uiClass: Ts, _jj: null, _i8: null, _je: null, _i6: null, _dj: !1, type: nM, otherNode: function (t) {
            return t == this[tl] ? this.to : t == this.to ? this.from : void 0
        }, connect: function () {
            if (this._dj) return !1;
            if (!this.$from || !this.$to) return !1;
            if (this._dj = !0, this.$from == this.$to) return void this[oc]._i1(this);
            ze(this.$to, this), Fe(this[oc], this), Me(this[oc], this, this.$to);
            var t = this[Zu], i = this.toAgent;
            if (t != i) {
                var n;
                this[oc]._dh && (Se(t, this, i), n = !0), this.$to._dh && (Pe(i, this, t), n = !0), n && Me(t, this, i)
            }
        }, disconnect: function () {
            if (!this._dj) return !1;
            if (this._dj = !1, this.$from == this.$to) return void this[oc][eM](this);
            Ge(this[oc], this), Ye(this.$to, this), Oe(this[oc], this, this.$to);
            var t = this[Zu], i = this.toAgent;
            if (t != i) {
                var n;
                this[oc]._dh && (Ie(t, this, i), n = !0), this.$to._dh && (Ae(i, this, t), n = !0), n && Oe(t, this, i)
            }
        }, isConnected: function () {
            return this._dj
        }, isInvalid: function () {
            return !this.$from || !this.$to
        }, isLooped: function () {
            return this[oc] == this.$to
        }, getEdgeBundle: function (t) {
            return t ? this._30() : this[Qu]() ? this.$from._42 : this[oc][Wu](this.$to)
        }, hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t[sM].length > 1
        }, _30: function () {
            var t = this[Zu], i = this[Uu];
            return t == i ? this[oc]._dh || this.$to._dh ? null : this[oc]._42 : this[Zu].getEdgeBundle(this[Uu])
        }, _8s: null, hasPathSegments: function () {
            return this._8s && !this._8s[Sl]()
        }, isBundleEnabled: function () {
            return this[hM] && !this[T_]() && !this[C_]
        }, firePathChange: function (t) {
            this[Sv](new cq(this, rM, t))
        }, addPathSegment: function (t, i, n) {
            var e = new GH(i || RH, t);
            this._8s || (this._8s = new UY), this._8s.add(e, n), this.firePathChange(e)
        }, addPathSegement: function () {
            return hH.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this.addPathSegment[mr](this, arguments)
        }, removePathSegmentByIndex: function (t) {
            return this[aM](t)
        }, removePathSegment: function (t) {
            return this._8s ? (R(t) && (t = this._8s[cb](t)), void (t && (this._8s.remove(t), this[oM](t)))) : !1
        }, movePathSegment: function (t, i, n) {
            if (!this._8s) return !1;
            if (t = t || 0, i = i || 0, hH[qm](n)) {
                var e = this._8s[cb](n);
                return e ? (e.move(t, i), void this.firePathChange()) : !1
            }
            l(function (n) {
                n[pg](t, i)
            }), this[oM]()
        }, move: function (t, i) {
            return this._8s ? (this._8s.forEach(function (n) {
                n[pg](t, i)
            }, this), void this[oM]()) : !1
        }, validateEdgeBundle: function () {
        }
    }, E(cW, uW), K(cW[yr], {
        pathSegments: {
            get: function () {
                return this._8s
            }, set: function (t) {
                hH.isArray(t) && (t = new UY(t)), this._8s = t, this[oM]()
            }
        }, from: {
            get: function () {
                return this.$from
            }, set: function (t) {
                if (this[oc] != t) {
                    var i = new cq(this, tl, t, this[oc]);
                    this[Ov](i) !== !1 && (this.disconnect(), this[oc] = t, this.connect(), this.onEvent(i))
                }
            }
        }, to: {
            get: function () {
                return this.$to
            }, set: function (t) {
                if (this.$to != t) {
                    var i = new cq(this, fM, t, this.$to);
                    this[Ov](i) !== !1 && (this.disconnect(), this.$to = t, this.connect(), this[Sv](i))
                }
            }
        }, fromAgent: {
            get: function () {
                return this[oc] ? this[oc]._dh || this.$from : null
            }
        }, toAgent: {
            get: function () {
                return this.$to ? this.$to._dh || this.$to : null
            }
        }
    }), P(cW[yr], [C_, {name: hM, value: !0}, M_]);
    var _W = function (t, i, n) {
        2 == arguments[rr] && R(t) && (n = i, i = t, t = null), this.id = ++SY, this._n6y = {}, this._jc = {}, t && (this[Vk] = t), this[uM] = cM, this.$anchorPosition = iq[iv], this[_M] = {
            x: i || 0,
            y: n || 0
        }, this[Vu] = {}
    };
    _W[yr] = {
        $uiClass: ks, _dh: null, forEachEdge: function (t, i, n) {
            return !n && this._l5 && this._l5[qu](t, i) === !1 ? !1 : He(this, t, i)
        }, forEachOutEdge: function (t, i) {
            return Ue(this, t, i)
        }, forEachInEdge: function (t, i) {
            return We(this, t, i)
        }, getEdges: function () {
            var t = [];
            return this[ac](function (i) {
                t[lr](i)
            }), t
        }, _hz: null, _f7: null, _j9: null, _i0: null, _n6n: 0, _8z: 0, hasInEdge: function () {
            return null != this._hz
        }, hasOutEdge: function () {
            return null != this._f7
        }, hasEdge: function () {
            return null != this._hz || null != this._f7 || this[dM]()
        }, linkedWith: function (t) {
            return t[tl] == this || t.to == this || t.fromAgent == this || t[Uu] == this
        }, hasEdgeWith: function (t) {
            var i = this[Wu](t);
            return i && i.edges[rr] > 0
        }, _l5: null, _42: null, hasLoops: function () {
            return this._l5 && this._l5[rr] > 0
        }, _i1: function (t) {
            return this._l5 || (this._l5 = new UY, this._42 = new AV(this, this, this._l5)), this._42._hq(t)
        }, _n4d: function (t) {
            return this._42 ? this._42[Xu](t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._42 : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        }, _6n: function () {
            return this._98 && this._98[rr]
        }, _4y: function () {
            return this._7n && this._7n.length
        }, _96: function () {
            return this._6n() || this._4y()
        }, _7n: null, _98: null, _n4g: function () {
            var t = this._dh, i = ke(this);
            if (t != i) {
                var n = qe(this);
                this._8q(i), n.forEach(function (t) {
                    var i = t[Zu], n = t[Uu], t = t[Lc], e = t.$from._dh, s = t.$to._dh;
                    i != n && (i && Ie(i, t, n || t.$to), n && Ae(n, t, i || t[oc])), e != s && (e && Se(e, t, s || t.$to), s && Pe(s, t, e || t[oc]), Me(e || t[oc], t, s || t.$to))
                }, this)
            }
        }, onParentChanged: function () {
            hH.doSuper(this, _W, Yv, arguments), this[lM]()
        }, _88: null, _$y: function () {
            var t;
            if (this._3u ? t = null : (t = this._dh, t || this._fn !== !1 || (t = this)), this._88 == t) return !1;
            if (this._88 = t, this._f3 && this._f3._jr[rr]) for (var i, n = this._f3._jr, e = 0, s = n[rr]; s > e; e++) i = n[e], i instanceof _W && i._8q(t)
        }, setLocation: function (t, i) {
            if (this[_M] && this[_M].x == t && this[_M].y == i) return !1;
            var n;
            n = this.$location ? {x: this[_M].x, y: this.$location.y} : this[_M];
            var e = new cq(this, vM, n, {x: t, y: i});
            return this.beforeEvent(e) === !1 ? !1 : (this[_M] ? (this[_M].x = t, this[_M].y = i) : this[_M] = new XY(t, i), this[Sv](e), !0)
        }, _dc: null, addFollower: function (t) {
            return null == t ? !1 : t[bM] = this
        }, removeFollower: function (t) {
            return this._dc && this._dc[I_](t) ? t[bM] = null : !1
        }, hasFollowers: function () {
            return this._dc && !this._dc.isEmpty()
        }, toFollowers: function () {
            return this.hasFollowers() ? this._dc[Il]() : null
        }, clearFollowers: function () {
            this.hasFollowers() && (this[yM](), l(this[yM](), function (t) {
                t[bM] = null
            }))
        }, getFollowerIndex: function (t) {
            return this._dc && this._dc[I_](t) ? this._dc[vr](t) : -1
        }, setFollowerIndex: function (t, i) {
            return this._dc && this._dc[I_](t) ? void this._dc[hc](t, i) : -1
        }, getFollowerCount: function () {
            return this._dc ? this._dc[rr] : 0
        }, _9d: function () {
            return this._dc ? this._dc : (this._dc = new UY, this._dc)
        }, isFollow: function (t) {
            if (!t || !this[gM]) return !1;
            for (var i = this[gM]; i;) {
                if (i == t) return !0;
                i = i[gM]
            }
            return !1
        }, _8q: function (t) {
            return t == this._dh ? !1 : (this._dh = t, this[Pk](), void this._$y())
        }, type: pM
    }, E(_W, uW), K(_W[yr], {
        loops: {
            get: function () {
                return this._l5
            }
        }, edgeCount: {
            get: function () {
                return this._n6n + this._8z
            }
        }, agentNode: {
            get: function () {
                return this._dh || this
            }
        }, host: {
            set: function (t) {
                if (this == t || t == this[gM]) return !1;
                var i = new cq(this, bM, this[gM], t);
                if (!1 === this[Ov](i)) return !1;
                var n = null, e = null, s = this._host;
                if (null != t && (n = new cq(t, mM, null, this), !1 === t[Ov](n))) return !1;
                if (null != s && (e = new cq(s, xM, null, this), !1 === s.beforeEvent(e))) return !1;
                if (this._host = t, null != t) {
                    var h = t._9d();
                    h.add(this)
                }
                if (null != s) {
                    var h = s._9d();
                    h[_r](this)
                }
                return this[Sv](i), null != t && t[Sv](n), null != s && s[Sv](e), !0
            }, get: function () {
                return this[gM]
            }
        }
    }), P(_W.prototype, [vM, vT, Em, Fo, EM]), K(_W[yr], {
        x: {
            get: function () {
                return this.location.x
            }, set: function (t) {
                t != this.location.x && (this[vM] = new XY(t, this[vM].y))
            }
        }, y: {
            get: function () {
                return this[vM].y
            }, set: function (t) {
                t != this[vM].y && (this.location = new XY(this.location.x, t))
            }
        }
    });
    var dW = function (t, i) {
        t instanceof YH && (i = t, t = n), w(this, dW, [t]), this[wM] = i || new YH, this[EM] = null, this.uiClass = ph, HY[TM] || (HY.SHAPENODE_STYLES = {}, HY.SHAPENODE_STYLES[gW[kM]] = !1), this.putStyles(HY[TM])
    };
    dW[yr] = {
        $uiClass: ph, type: MM, moveTo: function (t, i) {
            this[wM].moveTo(t, i), this.firePathChange()
        }, lineTo: function (t, i) {
            this[wM][af](t, i), this[oM]()
        }, quadTo: function (t, i, n, e) {
            this[wM][uc](t, i, n, e), this.firePathChange()
        }, curveTo: function (t, i, n, e, s, h) {
            this[wM][cc](t, i, n, e, s, h), this[oM]()
        }, arcTo: function (t, i, n, e, s) {
            this[wM].arcTo(t, i, n, e, s), this.firePathChange()
        }, closePath: function () {
            this[wM][Nf](), this.firePathChange()
        }, clear: function () {
            this[wM][to](), this.firePathChange()
        }, removePathSegmentByIndex: function (t) {
            this[wM][aM](t) !== !1 && this[oM]()
        }, firePathChange: function () {
            this[wM]._68 = !0, this[Sv](new cq(this, rM))
        }, addPathSegment: function (t, i, n) {
            this.path.add(new GH(i || RH, t), n), this[oM]()
        }
    }, E(dW, _W), K(dW[yr], {
        path: {
            get: function () {
                return this.image
            }, set: function (t) {
                this[Em] = t
            }
        }, pathSegments: {
            get: function () {
                return this.path.segments
            }, set: function (t) {
                this[wM][OM] = t || [], this[oM]()
            }
        }, length: {
            get: function () {
                return this[wM][rr]
            }
        }
    }), hH.ShapeNode = dW;
    var lW = {
        _jb: {}, register: function (t, i) {
            lW._jb[t] = i
        }, getShape: function (t, i, e, s, h, r) {
            s === n && (s = i, h = e, i = 0, e = 0), s || (s = 50), h || (h = 50);
            var a = lW._jb[t];
            return a ? a[SM] instanceof Function ? a[SM](i, e, s, h, r) : a : void 0
        }, getRect: function (t, i, n, e, s, h, r) {
            return t instanceof Object && ca in t && (i = t.y, n = t[ca], e = t.height, s = t.rx, h = t.ry, r = t.path, t = t.x), Ve(r || new YH, t, i, n, e, s, h)
        }, getAllShapes: function (t, i, n, e, s) {
            var h = {};
            for (var r in lW._jb) {
                var a = lW[v_](r, t, i, n, e, s);
                a && (h[r] = a)
            }
            return h
        }, createRegularShape: function (t, i, n, e, s) {
            return is(t, i, n, e, s)
        }
    };
    ls(), vs[yr] = {type: IM}, E(vs, dW), hH.Bus = vs, bs[yr] = {
        _fj: function (t) {
            var i, n = t._jl;
            i = n ? n._f3 : this.$roots;
            var e = i[vr](t);
            if (0 > e) throw new Error(ub + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof _W ? n : null;
                e -= 1;
                var h = i[cb](e);
                if (h = s(h)) return h
            }
            return null
        }, forEachNode: function (t, i) {
            this[qu](function (n) {
                return n instanceof _W && t[hr](i, n) === !1 ? !1 : void 0
            })
        }, _35: null
    }, E(bs, wq), K(bs[yr], {
        propertyChangeDispatcher: {
            get: function () {
                return this._$n
            }
        }, currentSubNetwork: {
            get: function () {
                return this._35
            }, set: function (t) {
                if (t && !t[Ik] && (t = null), this._35 != t) {
                    var i = this._35;
                    this._35 = t, this._$n[Sv](new cq(this, PM, t, i))
                }
            }
        }
    }), HY[AM] = rH.GROUP_TYPE_RECT, HY.GROUP_PADDING = 5, HY[CM] = !0, HY.GROUP_MIN_SIZE = {width: 60, height: 60};
    var vW = function (t, i, e) {
        w(this, vW, arguments), (i === n || e === n) && (this[_M][LM] = !0), this[DM] = HY[AM], this[jM] = HY[RM], this[uM] = UH[NM], this.$minSize = HY[BM], this[Ak] = HY[CM]
    };
    vW[yr] = {
        type: $M, $uiClass: lh, _95: function () {
            return !this._fn && !this._dh
        }, forEachOutEdge: function (t, i, n) {
            return Ue(this, t, i) === !1 ? !1 : !n && this._95() && this._7n ? this._7n[qu](t, i) : void 0
        }, forEachInEdge: function (t, i, n) {
            return We(this, t, i) === !1 ? !1 : !n && this._95() && this._98 ? this._98.forEach(t, i) : void 0
        }, forEachEdge: function (t, i, n) {
            return T(this, vW, ac, arguments) === !1 ? !1 : n || n || !this._95() ? void 0 : this._98 && this._98.forEach(t, i) === !1 ? !1 : this._7n ? this._7n[qu](t, i) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._hz : null != this._hz || this._6n()
        }, hasOutEdge: function (t) {
            return t ? null != this._f7 : null != this._f7 || this._4y()
        }, hasEdge: function (t) {
            return t ? null != this._hz || null != this._f7 : null != this._hz || null != this._f7 || this._96()
        }
    }, E(vW, _W), K(vW[yr], {
        expanded: {
            get: function () {
                return this._fn
            }, set: function (t) {
                if (this._fn != t) {
                    var i = new cq(this, Ak, t, this._fn);
                    this[Ov](i) !== !1 && (this._fn = t, this._$y(), this[Sv](i), this._dh || ys[hr](this))
                }
            }
        }
    }), P(vW[yr], [FM, GM, zM, YM]), hH.Group = vW, gs[yr][$o] = qM, E(gs, _W), hH[HM] = gs;
    var bW = function (t) {
        this._jd = new QY, this._7v = new QY, this._f5 = new QY, this.id = ++SY, t && (this.data = t)
    };
    bW[yr] = {
        invalidate: function () {
            this[Lk]()
        },
        _1d: !0,
        _jd: null,
        _7v: null,
        _f5: null,
        _n29: !1,
        _jf: 1,
        _jh: 1,
        _i2: !0,
        _7x: 0,
        _69: 0,
        _jl: null,
        _n2x: null,
        borderColor: UM,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _15: function () {
            this[WM] = ci(this[EM], this._7x, this._69)
        },
        setMeasuredBounds: function (t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t[ca]), this._jd[ca] == t && this._jd[_a] == i && this._jd.x == n && this._jd.y == e ? !1 : void this._jd.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _7r: function (t, i, n) {
            n[Qm] == rH[zp] ? (t.shadowColor = n[Wm], t[fd] = n.selectionShadowBlur * i, t[ym] = (n[Xm] || 0) * i, t[gm] = (n[Zm] || 0) * i) : this._21(t, i, n)
        },
        _21: function (t, i, n) {
            var e = n[Jm] || 0;
            n.selectionBackgroundColor && (t[tf] = n.selectionBackgroundColor, t[VM](this._7v.x - e / 2, this._7v.y - e / 2, this._7v.width + e, this._7v[_a] + e)), t.strokeStyle = n[Wm], t.lineWidth = e, t[Qo](this._7v.x - e / 2, this._7v.y - e / 2, this._7v[ca] + e, this._7v[_a] + e)
        },
        _jn: function (t, i, n, e) {
            if (!this._i2) return !1;
            if (this[XM] || (n = this[Mk]), (n && !this[ZM] || !e) && (e = this), t[vo](), 1 != this[KM] && (t[JM] = this[KM]), t.translate(this.$x, this.$y), this.$rotatable && this[Hf] && t.rotate(this.$_hostRotate), (this[QM] || this[tO]) && t[bo](this[QM], this[tO]), this.$rotate && t[Fo](this.$rotate), this[$f] && this._n2x && t.translate(-this[Ff].x, -this[Ff].y), this.shadowColor && (t[bm] = this.shadowColor, t[fd] = this[fd] * i, t[ym] = this.shadowOffsetX * i, t[gm] = this[gm] * i), n && e.selectionType == rH[iO] && (this._21(t, i, e), n = !1), this._$s() && this[tu] && !this[tu][nO]) {
                this._m5Shape[Po]();
                var s = {
                    lineWidth: this[Wf],
                    strokeStyle: this.borderColor,
                    lineDash: this[eO],
                    lineDashOffset: this[sO],
                    fillColor: this.$backgroundColor,
                    fillGradient: this[Qf],
                    lineCap: Ap,
                    lineJoin: Lf
                };
                this._m5Shape[lf](t, i, s, n, e), n = !1, t[bm] = nx
            }
            t[ef](), this[lf](t, i, n, e), t[wo]()
        },
        invalidateData: function () {
            this[hO] = !0, this[Uf] = !0, this._1d = !0
        },
        invalidateSize: function () {
            this.$invalidateSize = !0, this._1d = !0
        },
        invalidateRender: function () {
            this._1d = !0
        },
        _4w: function () {
        },
        _$s: function () {
            return this.$backgroundColor || this.$backgroundGradient || this[Wf]
        },
        _3w: function () {
            return this.$backgroundColor || this.$backgroundGradient
        },
        doValidate: function () {
            return this[hO] && (this[hO] = !1, this[rO]() !== !1 && (this[Uf] = !0)), this[Uf] && this.validateSize && this[aO](), Jn[hr](this) ? (this.$invalidateRotate = !0, this[oO] && this[oO](), !0) : this[fO] ? (this.$invalidateRotate = !0, this[fO] = !1, !0) : void 0
        },
        validate: function () {
            var t = this._i2;
            return this[uO] && (this[uO] = !1, this._i2 = this.$visible, !this._i2 || (this[xk] || this[cO]) && this._4w() !== !1 || (this._i2 = !1)), this._i2 ? (this._1d = !1, this[Dc] || (this[_O](), this[Dc] = !0), this[dO]()) : t != this._i2
        },
        _ia: function (t, i) {
            return t -= this.$x, i -= this.$y, Kn.call(this, {x: t, y: i})
        },
        hitTest: function (t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._f5[ru](t, i, n)) return !1;
            var s = Kn.call(this, {x: t, y: i});
            return t = s.x, i = s.y, !e && this._$s() && this._m5Shape && this[tu].hitTest(t, i, n, !1, this[Wf], this[lO] || this[vO]) ? !0 : this[bO](t, i, n)
        },
        doHitTest: function (t, i, n) {
            return this._jd.intersectsPoint(t, i, n)
        },
        hitTestByBounds: function (t, i, n, e) {
            var s = this._ia(t, i);
            return !e && this._$s() && this._m5Shape && this[tu].hitTest(t, i, n, !1, this[Wf], this[lO] || this[vO]) ? !0 : this._jd[ru](s.x, s.y, n)
        },
        onDataChanged: function () {
            this[hO] = !0, this._1d = !0, this[uO] = !0
        },
        getBounds: function () {
            var t = this._f5.clone();
            return t.offset(this.x, this.y), this[Hu] && (this.parent[Fo] && Ci(t, this[Hu].rotate, t), t[Vp](this[Hu].x || 0, this.parent.y || 0)), t
        },
        destroy: function () {
            this._ihed = !0
        },
        _da: !1
    }, K(bW[yr], {
        originalBounds: {
            get: function () {
                return this._jd
            }
        }, data: {
            get: function () {
                return this[xk]
            }, set: function (t) {
                if (this.$data != t) {
                    var i = this.$data;
                    this.$data = t, this[yO](t, i)
                }
            }
        }, parent: {
            get: function () {
                return this._jl
            }
        }, showOnTop: {
            get: function () {
                return this._da
            }, set: function (t) {
                t != this._da && (this._da = t, this._1d = !0, this._jl && this._jl[gO] && this._jl._n2h(this))
            }
        }
    }), ms(bW.prototype, {
        visible: {value: !0, validateFlags: [pO, mO]},
        showEmpty: {validateFlags: [pO]},
        anchorPosition: {value: iq.CENTER_MIDDLE, validateFlags: [xO, mO]},
        position: {value: iq.CENTER_MIDDLE, validateFlags: [mO]},
        offsetX: {value: 0, validateFlags: [mO]},
        offsetY: {value: 0, validateFlags: [mO]},
        layoutByAnchorPoint: {value: !0, validateFlags: [EO, xO, mO]},
        padding: {value: 0, validateFlags: [EO]},
        border: {value: 0, validateFlags: [EO]},
        borderRadius: {value: HY[wO]},
        showPointer: {value: !1, validateFlags: [EO]},
        pointerX: {value: 0, validateFlags: [EO]},
        pointerY: {value: 0, validateFlags: [EO]},
        pointerWidth: {value: HY.POINTER_WIDTH},
        backgroundColor: {validateFlags: [EO]},
        backgroundGradient: {validateFlags: [EO, TO]},
        selected: {value: !1, validateFlags: [EO]},
        selectionBorder: {value: HY[kO], validateFlags: [EO]},
        selectionShadowBlur: {value: HY.SELECTION_SHADOW_BLUR, validateFlags: [EO]},
        selectionColor: {value: HY[qp], validateFlags: [EO]},
        selectionType: {value: HY.SELECTION_TYPE, validateFlags: [EO]},
        selectionShadowOffsetX: {value: 0, validateFlags: [EO]},
        selectionShadowOffsetY: {value: 0, validateFlags: [EO]},
        shadowBlur: {value: 0, validateFlags: [EO]},
        shadowColor: {validateFlags: [EO]},
        shadowOffsetX: {value: 0, validateFlags: [EO]},
        shadowOffsetY: {value: 0, validateFlags: [EO]},
        renderColorBlendMode: {},
        renderColor: {},
        x: {value: 0, validateFlags: [mO]},
        y: {value: 0, validateFlags: [mO]},
        rotatable: {value: !0, validateFlags: [MO, EO]},
        rotate: {value: 0, validateFlags: [MO, EO]},
        _hostRotate: {validateFlags: [MO]},
        lineWidth: {value: 0, validateFlags: [OO]},
        alpha: {value: 1}
    });
    var yW = [rH[SO], rH.PROPERTY_TYPE_STYLE, rH[zc]];
    Es.prototype = {
        removeBinding: function (t) {
            for (var i = yW.length; --i >= 0;) {
                var n = yW[i], e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array[Br](h) ? (v(h, function (i) {
                        return i[cd] == t
                    }, this), h[rr] || delete e[s]) : h[cd] == t && delete e[s]
                }
            }
        }, _1z: function (t, i, n) {
            if (!n && (n = this[i.propertyType || rH[SO]], !n)) return !1;
            var e = n[t];
            e ? (Array[Br](e) || (n[t] = e = [e]), e[lr](i)) : n[t] = i
        }, _2h: function (t, i, n, e, s, h) {
            t = t || rH[SO];
            var r = this[t];
            if (!r) return !1;
            var a = {property: i, propertyType: t, bindingProperty: e, target: n, callback: s, invalidateSize: h};
            this._1z(i, a, r)
        }, onBindingPropertyChange: function (t, i, n, e) {
            var s = this[n || rH[SO]];
            if (!s) return !1;
            var h = s[i];
            return h ? (t._1d = !0, xs(t, h, n, e), !0) : !1
        }, initBindingProperties: function (t, i) {
            for (var e = yW[rr]; --e >= 0;) {
                var s = yW[e], h = this[s];
                for (var r in h) {
                    var a = h[r];
                    if (a[Fc]) {
                        var o = a[cd];
                        if (o) {
                            if (!(o instanceof bW || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t[Bc](a.property, s) : s == rH.PROPERTY_TYPE_STYLE ? t[E_][t_](t[xk], a[$c]) : t.$data[a.property], f !== n && (o[a.bindingProperty] = f)
                    }
                }
            }
        }
    };
    var gW = {};
    gW[qp] = IO, gW[kO] = PO, gW[Yp] = "selection.shadow.blur", gW.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x", gW[AO] = "selection.shadow.offset.y", gW.SELECTION_TYPE = CO, gW.RENDER_COLOR = LO, gW[DO] = "render.color.blend.mode", gW[jO] = RO, gW[NO] = BO, gW[$O] = FO, gW[GO] = zO, gW[YO] = qO, gW[HO] = UO, gW.SHAPE_STROKE_STYLE = WO, gW[VO] = "shape.stroke.fill.color", gW.SHAPE_LINE_DASH = XO, gW[ZO] = "shape.line.dash.offset", gW[KO] = JO, gW[QO] = tS, gW[iS] = nS, gW[eS] = sS, gW[hS] = rS, gW[aS] = oS, gW[fS] = uS, gW.BORDER = cS, gW[_S] = dS, gW[lS] = vS, gW[bS] = "border.line.dash.offset", gW[wO] = yS, gW[gS] = zM, gW[pS] = mS, gW[xS] = ES, gW[wS] = TS, gW[kS] = MS, gW[OS] = "image.background.color", gW[SS] = "image.background.gradient", gW.IMAGE_BORDER = IS, gW[PS] = gW[AS] = CS, gW[LS] = "image.border.line.dash", gW.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", gW.IMAGE_RADIUS = gW[DS] = jS, gW.IMAGE_PADDING = RS, gW[NS] = BS, gW.IMAGE_ADJUST = $S, gW.IMAGE_ALPHA = FS, gW[GS] = zS, gW[YS] = qS, gW.LABEL_VISIBLE = HS, gW[US] = "label.anchor.position", gW[WS] = VS, gW[XS] = ZS, gW[KS] = JS, gW[QS] = tI, gW[iI] = nI, gW[eI] = sI, gW[hI] = rI, gW[aI] = oI, gW[fI] = uI, gW.LABEL_OFFSET_Y = cI, gW[_I] = dI, gW.LABEL_ALIGN_POSITION = lI, gW.LABEL_BORDER = vI, gW[bI] = yI, gW.LABEL_BACKGROUND_COLOR = "label.background.color", gW[gI] = "label.background.gradient", gW[pI] = mI, gW.LABEL_SHADOW_BLUR = xI, gW[EI] = wI, gW[TI] = "label.shadow.offset.x", gW.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", gW[kI] = MI, gW[OI] = SI, gW.GROUP_BACKGROUND_COLOR = "group.background.color", gW.GROUP_BACKGROUND_GRADIENT = "group.background.gradient", gW[II] = PI, gW[AI] = CI, gW[LI] = DI, gW.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash", gW[jI] = "group.stroke.line.dash.offset", gW[RI] = "edge.bundle.label.rotate", gW[NI] = "edge.bundle.label.position", gW.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", gW[BI] = "edge.bundle.label.color", gW[$I] = "edge.bundle.label.font.size", gW[FI] = "edge.bundle.label.font.family", gW.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", gW.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", gW[GI] = "edge.bundle.label.pointer.width", gW[zI] = "edge.bundle.label.pointer", gW[YI] = "edge.bundle.label.radius", gW[qI] = "edge.bundle.label.offset.x", gW.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", gW.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", gW[HI] = "edge.bundle.label.border.color", gW[UI] = "edge.bundle.label.background.color", gW.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", gW[WI] = "edge.bundle.label.rotatable", gW[VI] = XI, gW[ZI] = KI, gW[JI] = QI,gW[tP] = iP,gW[nP] = eP,gW.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset",gW[sP] = hP,gW.EDGE_TO_OFFSET = rP,gW.EDGE_FILL_COLOR = aP,gW[D_] = oP,gW[fP] = uP,gW.EDGE_LOOPED_EXTAND = cP,gW.EDGE_EXTEND = _P,gW[__] = dP,gW[lP] = "edge.split.by.percent",gW.EDGE_SPLIT_PERCENT = vP,gW.EDGE_SPLIT_VALUE = bP,gW[a_] = yP,gW[f_] = gP,gW[pP] = mP,gW.EDGE_TO_AT_EDGE = xP,gW.EDGE_FROM_PORT = EP,gW[x_] = wP,gW[TP] = kP,gW[MP] = OP,gW[SP] = IP,gW.ARROW_FROM_STROKE = PP,gW[AP] = "arrow.from.stroke.style",gW.ARROW_FROM_OUTLINE = CP,gW[LP] = "arrow.from.outline.style",gW[DP] = jP,gW[RP] = "arrow.from.line.dash.offset",gW.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color",gW[NP] = "arrow.from.fill.gradient",gW[BP] = $P,gW[FP] = GP,gW[kM] = zP,gW[YP] = qP,gW[HP] = UP,gW[WP] = VP,gW[XP] = "arrow.to.stroke.style",gW[ZP] = KP,gW.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",gW[JP] = QP,gW[tA] = "arrow.to.line.dash.offset",gW[iA] = nA,gW[eA] = "arrow.to.fill.gradient",gW[sA] = hA,gW.ARROW_TO_LINE_JOIN = rA;
    var pW = new Es, mW = rH[SO], xW = rH[Yc], EW = !1;
    pW._2h(xW, gW.SELECTION_TYPE, null, Qm), pW._2h(xW, gW[kO], null, Jm), pW._2h(xW, gW[Yp], null, Vm), pW._2h(xW, gW.SELECTION_COLOR, null, Wm), pW._2h(xW, gW.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"), pW._2h(xW, gW[AO], null, "selectionShadowOffsetY"), pW._2h(mW, bf, aA, Vo), pW._2h(xW, gW[oA], aA, $T), pW._2h(xW, gW.LABEL_POSITION, aA, fu), pW._2h(xW, gW[US], aA, EM), pW._2h(xW, gW[WS], aA, fA), pW._2h(xW, gW[XS], aA, Ad), pW._2h(xW, gW.LABEL_BORDER, aA, qg), pW._2h(xW, gW.LABEL_BORDER_STYLE, aA, uA), pW._2h(xW, gW[cA], aA, _A), pW._2h(xW, gW[OI], aA, dA), EW || (pW._2h(xW, gW[NO], null, fd), pW._2h(xW, gW[$O], null, bm), pW._2h(xW, gW.SHADOW_OFFSET_X, null, ym), pW._2h(xW, gW.SHADOW_OFFSET_Y, null, gm), pW._2h(xW, gW.LABEL_FONT_FAMILY, aA, Cd), pW._2h(xW, gW[QS], aA, Pd), pW._2h(xW, gW[lA], aA, vA), pW._2h(xW, gW[GS], aA, Fo), pW._2h(xW, gW[iI], aA, zM), pW._2h(xW, gW.LABEL_POINTER_WIDTH, aA, bA), pW._2h(xW, gW[hI], aA, yA), pW._2h(xW, gW.LABEL_RADIUS, aA, gA), pW._2h(xW, gW.LABEL_OFFSET_X, aA, QM), pW._2h(xW, gW[pA], aA, tO), pW._2h(xW, gW[pI], aA, mA), pW._2h(xW, gW[gI], aA, xA), pW._2h(xW, gW[_I], aA, vT), pW._2h(xW, gW[EA], aA, fd), pW._2h(xW, gW[EI], aA, bm), pW._2h(xW, gW.LABEL_SHADOW_OFFSET_X, aA, ym), pW._2h(xW, gW[wA], aA, gm), pW._2h(xW, gW[kI], aA, MT), pW._2h(xW, gW[TA], null, nm), pW._2h(xW, gW.RENDER_COLOR_BLEND_MODE, null, pm), pW._2h(xW, gW[jO], null, RO));
    var wW = new Es;
    wW._2h(mW, vM), wW._2h(mW, EM, null, kA), wW._2h(mW, Fo, null, Fo), EW || (wW._2h(xW, gW[aS], null, _A), wW._2h(xW, gW[fS], null, xA), wW._2h(xW, gW[gS], null, zM), wW._2h(xW, gW[MA], null, qg), wW._2h(xW, gW[wO], null, gA), wW._2h(xW, gW[_S], null, uA), wW._2h(xW, gW[lS], null, eO), wW._2h(xW, gW[bS], null, sO)), wW._2h(mW, Em, Em, Vo, OA), wW._2h(mW, vT, Em, vT), wW._2h(xW, gW.SHAPE_STROKE, Em, Zo), wW._2h(xW, gW[SA], Em, Ko), wW._2h(xW, gW.SHAPE_FILL_COLOR, Em, ex), wW._2h(xW, gW.LAYOUT_BY_PATH, Em, uu), EW || (wW._2h(xW, gW.IMAGE_ADJUST, Em, IA), wW._2h(xW, gW.SHAPE_OUTLINE, Em, ix), wW._2h(xW, gW[eS], Em, tx), wW._2h(xW, gW[QO], Em, sx), wW._2h(xW, gW[PA], Em, vu), wW._2h(xW, gW[ZO], Em, bu), wW._2h(xW, gW[pS], Em, rd), wW._2h(xW, gW[xS], Em, ad), wW._2h(xW, gW[OS], Em, _A), wW._2h(xW, gW.IMAGE_BACKGROUND_GRADIENT, Em, xA), wW._2h(xW, gW[AA], Em, zM), wW._2h(xW, gW[CA], Em, qg), wW._2h(xW, gW.IMAGE_BORDER_RADIUS, Em, gA), wW._2h(xW, gW.IMAGE_BORDER_COLOR, Em, uA), wW._2h(xW, gW[LS], Em, eO), wW._2h(xW, gW.IMAGE_BORDER_LINE_DASH_OFFSET, Em, sO), wW._2h(xW, gW[NS], Em, MT), wW._2h(xW, gW.IMAGE_ALPHA, Em, RO)), wW._2h(mW, Ak, null, null, LA), wW._2h(mW, Ik, null, null, LA);
    var TW = new Es;
    TW._2h(mW, GM, null, null, DA), TW._2h(mW, YM, null, null, DA), TW._2h(mW, FM, null, null, DA), TW._2h(mW, zM, null, null, DA), TW._2h(xW, gW.GROUP_BACKGROUND_COLOR, jA, ex), TW._2h(xW, gW.GROUP_BACKGROUND_GRADIENT, jA, sx), TW._2h(xW, gW[AI], jA, Zo), TW._2h(xW, gW[LI], jA, Ko), TW._2h(xW, gW[RA], jA, vu), TW._2h(xW, gW[jI], jA, bu), TW._2h(xW, gW[II], null, null, DA);
    var kW = new Es;
    kW._2h(mW, tl, jA, null, NA), kW._2h(mW, fM, jA, null, NA), kW._2h(mW, C_, jA, null, NA), kW._2h(xW, gW[Hc], jA, null, NA), kW._2h(xW, gW.EDGE_BUNDLE_TYPE, jA, null, NA), kW._2h(xW, gW[VI], jA, Zo), kW._2h(xW, gW[ZI], jA, Ko), kW._2h(xW, gW.ARROW_FROM, jA, BA), kW._2h(xW, gW[kM], jA, $A), EW || (kW._2h(xW, gW[wS], jA, FA), kW._2h(xW, gW.LINE_DASH_JOIN, jA, rx), kW._2h(xW, gW.EDGE_FILL_COLOR, jA, hx), kW._2h(xW, gW[pP], null, O_, NA), kW._2h(xW, gW[GA], null, S_, NA), kW._2h(xW, gW[JI], jA, ix), kW._2h(xW, gW.EDGE_OUTLINE_STYLE, jA, tx), kW._2h(xW, gW[nP], jA, vu), kW._2h(xW, gW[zA], jA, bu), kW._2h(xW, gW[__], jA, null, NA), kW._2h(xW, gW[sP], jA, null, NA), kW._2h(xW, gW.EDGE_TO_OFFSET, jA, null, NA), kW._2h(xW, gW[m_], jA, null, NA), kW._2h(xW, gW[x_], jA, null, NA), kW._2h(xW, gW[pS], jA, rd), kW._2h(xW, gW[xS], jA, ad), kW._2h(mW, rM, null, null, NA, !0), kW._2h(mW, M_, null, null, NA, !0), kW._2h(xW, gW[MP], jA, YA), kW._2h(xW, gW[SP], jA, qA), kW._2h(xW, gW[HA], jA, UA), kW._2h(xW, gW.ARROW_FROM_STROKE_STYLE, jA, WA), kW._2h(xW, gW[VA], jA, XA), kW._2h(xW, gW[LP], jA, "fromArrowOutlineStyle"), kW._2h(xW, gW[ZA], jA, KA), kW._2h(xW, gW[NP], jA, "fromArrowFillGradient"), kW._2h(xW, gW[DP], jA, JA), kW._2h(xW, gW[RP], jA, "fromArrowLineDashOffset"), kW._2h(xW, gW.ARROW_FROM_LINE_JOIN, jA, QA), kW._2h(xW, gW[BP], jA, tC), kW._2h(xW, gW[YP], jA, iC), kW._2h(xW, gW[HP], jA, nC), kW._2h(xW, gW.ARROW_TO_STROKE, jA, eC), kW._2h(xW, gW[XP], jA, sC), kW._2h(xW, gW[ZP], jA, hC), kW._2h(xW, gW[rC], jA, aC), kW._2h(xW, gW[iA], jA, oC), kW._2h(xW, gW.ARROW_TO_FILL_GRADIENT, jA, fC), kW._2h(xW, gW[JP], jA, uC), kW._2h(xW, gW[tA], jA, "toArrowLineDashOffset"), kW._2h(xW, gW[cC], jA, _C), kW._2h(xW, gW[sA], jA, dC));
    var MW = new Es;
    MW._2h(xW, gW.EDGE_BUNDLE_LABEL_COLOR, lC, fA), MW._2h(xW, gW[NI], lC, fu), MW._2h(xW, gW[vC], lC, EM), MW._2h(xW, gW.EDGE_BUNDLE_LABEL_FONT_SIZE, lC, Ad), MW._2h(xW, gW[WI], lC, mA), EW || (MW._2h(xW, gW[RI], lC, Fo), MW._2h(xW, gW.EDGE_BUNDLE_LABEL_FONT_FAMILY, lC, Cd), MW._2h(xW, gW.EDGE_BUNDLE_LABEL_FONT_STYLE, lC, Pd), MW._2h(xW, gW[bC], lC, zM), MW._2h(xW, gW[GI], lC, bA), MW._2h(xW, gW[zI], lC, yA), MW._2h(xW, gW[YI], lC, gA), MW._2h(xW, gW.EDGE_BUNDLE_LABEL_OFFSET_X, lC, QM), MW._2h(xW, gW[yC], lC, tO), MW._2h(xW, gW[gC], lC, qg), MW._2h(xW, gW[HI], lC, uA), MW._2h(xW, gW[UI], lC, _A), MW._2h(xW, gW[pC], lC, xA));
    var OW = new Es;
    OW._2h(mW, vM), OW._2h(xW, gW[aS], null, _A), OW._2h(xW, gW[fS], null, xA), OW._2h(xW, gW.PADDING, null, zM), OW._2h(xW, gW[MA], null, qg), OW._2h(xW, gW[wO], null, gA), OW._2h(xW, gW[_S], null, uA), OW._2h(xW, gW[lS], null, eO), OW._2h(xW, gW[bS], null, sO), OW._2h(mW, Fo, null, Fo), OW._2h(mW, rM, null, null, mC), OW._2h(mW, wM, Em, Vo), OW._2h(mW, vT, Em, vT), OW._2h(xW, gW[HO], Em, Zo), OW._2h(xW, gW[SA], Em, Ko), OW._2h(xW, gW[KO], Em, ex), OW._2h(xW, gW[QO], Em, sx), EW || (OW._2h(xW, gW[wS], Em, FA), OW._2h(xW, gW[kS], Em, rx), OW._2h(xW, gW[VO], Em, hx), OW._2h(xW, gW[iS], Em, ix), OW._2h(xW, gW[eS], Em, tx), OW._2h(xW, gW[PA], Em, vu), OW._2h(xW, gW[ZO], Em, bu), OW._2h(xW, gW[pS], Em, rd), OW._2h(xW, gW[xS], Em, ad), OW._2h(xW, gW[hS], Em, uu), OW._2h(xW, gW.IMAGE_BACKGROUND_COLOR, Em, _A), OW._2h(xW, gW[SS], Em, xA), OW._2h(xW, gW[AA], Em, zM), OW._2h(xW, gW.IMAGE_BORDER, Em, qg), OW._2h(xW, gW[DS], Em, gA), OW._2h(xW, gW[AS], Em, uA), OW._2h(xW, gW[LS], Em, eO), OW._2h(xW, gW.IMAGE_BORDER_LINE_DASH_OFFSET, Em, sO), OW._2h(xW, gW.ARROW_FROM, Em, BA), OW._2h(xW, gW[MP], Em, YA), OW._2h(xW, gW.ARROW_FROM_OFFSET, Em, qA), OW._2h(xW, gW[HA], Em, UA), OW._2h(xW, gW[AP], Em, WA), OW._2h(xW, gW[ZA], Em, KA), OW._2h(xW, gW[NP], Em, "fromArrowFillGradient"), OW._2h(xW, gW.ARROW_FROM_LINE_DASH, Em, JA), OW._2h(xW, gW[RP], Em, "fromArrowLineDashOffset"), OW._2h(xW, gW.ARROW_FROM_LINE_JOIN, Em, QA), OW._2h(xW, gW[BP], Em, tC), OW._2h(xW, gW[YP], Em, iC), OW._2h(xW, gW[HP], Em, nC), OW._2h(xW, gW.ARROW_TO, Em, $A), OW._2h(xW, gW[WP], Em, eC), OW._2h(xW, gW.ARROW_TO_STROKE_STYLE, Em, sC), OW._2h(xW, gW[iA], Em, oC), OW._2h(xW, gW[eA], Em, fC), OW._2h(xW, gW[JP], Em, uC), OW._2h(xW, gW[tA], Em, "toArrowLineDashOffset"), OW._2h(xW, gW.ARROW_TO_LINE_JOIN, Em, _C), OW._2h(xW, gW[sA], Em, dC));
    var SW = function (t, i) {
        return t = t[MT], i = i[MT], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    }, IW = function (t, i) {
        this.uiBounds = new QY, w(this, IW, arguments), this.id = this[xk].id, this.graph = i, this._f3 = [], this[xC] = new Es
    };
    IW.prototype = {
        syncSelection: !1, graph: null, layoutByAnchorPoint: !1, _n6r: null, _f3: null, addChild: function (t, i) {
            t._jl = this, i !== n ? g(this._f3, t, i) : this._f3[lr](t), t._da && this[gO](t), this[EC](), this[wC](), this[TC] = !0
        }, removeChild: function (t) {
            this[xC][kC](t), t._jl = null, p(this._f3, t), this._jv && this._jv[_r](t), this[wC](), this[TC] = !0
        }, getProperty: function (t, i) {
            return i == rH[Yc] ? this.graph[t_](this[xk], t) : i == rH[zc] ? this.$data.get(t) : this[xk][t]
        }, getStyle: function (t) {
            return this.graph[t_](this[xk], t)
        }, _$t: function (t, i, n) {
            var e = this[xC].onBindingPropertyChange(this, t, i, n);
            return pW[MC](this, t, i, n) || e
        }, onPropertyChange: function (t) {
            if (MT == t[uv]) return this[Ok](), !0;
            if (Xk == t[$o]) {
                if (dT == t[uv]) return this[dT](), !0;
                var i = t[Or];
                return i && i.ui ? (Nv == t[uv] ? this._9e(i) : _r == t[uv] && this[ab](i.ui), !0) : !1
            }
            return this._$t(t.kind, t[Wk] || mW, t[Or])
        }, label: null, initLabel: function () {
            var t = new AW;
            t[bf] = aA, this[OC](t), this[aA] = t
        }, initialize: function () {
            this[SC](), this[xk][Zk] && this.$data[Zk].forEach(this._9e, this), pW.initBindingProperties(this), this._n6r[IC](this, !1)
        }, addBinding: function (t, i) {
            return i.property ? (i[cd] = t, void this[xC]._1z(i[$c], i)) : !1
        }, _gw: function (t, i) {
            var n = this.$data;
            if (!n[Zk]) return !1;
            var e = n._n43[kl](t.id);
            if (!e || !e[PC]) return !1;
            var s = e[PC];
            if ($(s)) {
                var h = !1;
                return l(s, function (t) {
                    return Vo == t[Fc] ? (h = ws(n, i, t[$c], t[Wk]), !1) : void 0
                }, this), h
            }
            return Vo == s.bindingProperty ? ws(n, i, s[$c], s[Wk]) : !1
        }, _9e: function (t) {
            var i = t.ui;
            if (i) {
                var n = t[PC];
                n && (Array[Br](n) ? n[qu](function (t) {
                    this[AC](i, t)
                }, this) : this.addBinding(i, n)), this.addChild(i)
            }
        }, validate: function () {
            return this[Dc] || (this[_O](), this[Dc] = !0), this[dO]()
        }, _7: !0, invalidateChildrenIndex: function () {
            this._7 = !0
        }, doValidate: function () {
            if (this._1d && (this._1d = !1, this.validateChildren() && (this[rO](), this[Uf] = !0), this._7 && (this._7 = !1, NY ? this._f3 = d(this._f3, SW) : this._f3[CC](SW))), Jn.call(this) && (this.$invalidateRotate = !0), this.$invalidateRotate) {
                VH[hr](this), this[wd].setByRect(this._f5);
                var t = this[LC] || 0, i = Math.max(this[LC] || 0, this[DC] || 0, this[jC] || 0),
                    n = Math.max(this[RC] || 0, this.$selectionShadowOffsetY || 0),
                    e = Math.max(2 * t, this.$shadowBlur, this[NC]);
                e += HY[BC] || 0;
                var s = e - i, h = e + i, r = e - n, a = e + n;
                return 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), 0 > a && (a = 0), this[wd][Vf](r, s, a, h), this[oO] && this[oO](), this.$invalidateBounds = !0, !0
            }
        }, validateChildren: function () {
            var t = this[TC];
            this[TC] = !1;
            var i = this[$C], n = this.bodyChanged;
            i && (i[FC] = this[FC], i[GC] = this.$renderColorBlendMode, i[zC] = this[zC], i[YC] = this[YC], i.$shadowOffsetX = this[DC], i.$shadowOffsetY = this[RC]), this.bodyChanged = !1, i && i._1d && (n = i[Po]() || n, i.$x = 0, i.$y = 0, i[cu] && VH[hr](i), t = !0);
            for (var e = 0, s = this._f3.length; s > e; e++) {
                var h = this._f3[e];
                if (h != i) {
                    var r = h._1d && h[Po]();
                    (r || n) && h._i2 && ne(h, i, this), !t && r && (t = !0)
                }
            }
            return t
        }, measure: function () {
            this._jd.clear();
            for (var t, i, n = 0, e = this._f3[rr]; e > n; n++) t = this._f3[n], t._i2 && (i = t._f5, i[ca] <= 0 || i.height <= 0 || this._jd.addRect(t.$x + i.x, t.$y + i.y, i.width, i[_a]))
        }, _jv: null, _n2h: function (t) {
            if (!this._jv) {
                if (!t[dA]) return;
                return this._jv = new UY, this._jv.add(t)
            }
            return t.showOnTop ? this._jv.add(t) : this._jv[_r](t)
        }, draw: function (t, i, n) {
            for (var e, s = 0, h = this._f3[rr]; h > s; s++) e = this._f3[s], e._i2 && !e[dA] && e._jn(t, i, n, this)
        }, _91: function (t, i) {
            if (!this._i2 || !this._jv || !this._jv[rr]) return !1;
            t[vo](), t.translate(this.$x, this.$y), this[qf] && this[Hf] && t[Fo](this[Hf]), (this[QM] || this[tO]) && t.translate(this.offsetX, this[tO]), this[Gf] && t[Fo](this[Gf]), this.$layoutByAnchorPoint && this._n2x && t.translate(-this[Ff].x, -this[Ff].y), this.shadowColor && (t[bm] = this[bm], t.shadowBlur = this[fd] * i, t[ym] = this[ym] * i, t[gm] = this[gm] * i), t.beginPath();
            for (var n, e = 0, s = this._f3[rr]; s > e; e++) n = this._f3[e], n._i2 && n.showOnTop && n._jn(t, i, this.selected, this);
            t.restore()
        }, doHitTest: function (t, i, n) {
            if (n) {
                if (!this._jd[Fl](t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._jd[ru](t, i)) return !1;
            return this.hitTestChildren(t, i, n)
        }, hitTestChildren: function (t, i, n) {
            for (var e, s = this._f3[rr] - 1; s >= 0; s--) if (e = this._f3[s], e._i2 && e.hitTest(t, i, n)) return e;
            return !1
        }, destroy: function () {
            this._ihed = !0;
            for (var t, i = this._f3[rr] - 1; i >= 0; i--) t = this._f3[i], t[sg]()
        }
    }, E(IW, bW), K(IW[yr], {
        renderColorBlendMode: {
            get: function () {
                return this.$renderColorBlendMode
            }, set: function (t) {
                this.$renderColorBlendMode = t, this._1d = !0, this.body && (this[_m].renderColorBlendMode = this[GC])
            }
        }, renderColor: {
            get: function () {
                return this[FC]
            }, set: function (t) {
                this[FC] = t, this._1d = !0, this[_m] && (this[_m][nm] = this[FC])
            }
        }, bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this.$invalidateBounds = !1;
                    var t, i = this[_m];
                    t = i && i._i2 && !this._$s() ? i._f5[dr]() : this._7v[dr](), this[Fo] && (t[qC] = t[dr](), t.rotate = this.rotate, t.tx = this.x, t.ty = this.y, Ci(t, this[Fo], t)), t.x += this.$x, t.y += this.$y, this._n4p = t
                }
                return this[HC]
            }
        }, bounds: {
            get: function () {
                return new QY((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this[wd].y, this[wd].width, this[wd][_a])
            }
        }, body: {
            get: function () {
                return this[$C]
            }, set: function (t) {
                t && this[$C] != t && (this[$C] = t, this.bodyChanged = !0, this[wC]())
            }
        }
    }), HY[BC] = 1;
    var PW = function () {
        w(this, PW, arguments)
    };
    PW.prototype = {
        strokeStyle: UC,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jf: 1,
        _jh: 1,
        outline: 0,
        onDataChanged: function (t) {
            T(this, PW, yO, arguments), this._kq && this._7s && this._kq._6a(this._7s, this), t && this[OA](t)
        },
        _n4j: function (t) {
            this._kq = Mn(t), this._kq[Po](), (this._kq._mb == pH || this._kq._62()) && (this._7s || (this._7s = function () {
                this[Lk](), this._jl && this._jl.graph && (this._jl[wC](), this._jl[E_][dT]())
            }), this._kq._n27(this._7s, this))
        },
        _kq: null,
        initialize: function () {
            this[OA](this[xk])
        },
        _4w: function () {
            return this._kq && this._kq[lf]
        },
        _8v: function (t) {
            if (!t || t[ca] <= 0 || t[_a] <= 0 || !this[WC] || !(this.size instanceof Object)) return this._jf = 1, void (this._jh = 1);
            var i = this.size.width, e = this[vT].height;
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jf = 1, void (this._jh = 1);
            var s, h, r = t.width, a = t[_a];
            i >= 0 && (s = i / r), e >= 0 && (h = e / a), 0 > i ? s = h : 0 > e && (h = s), this._jf = s, this._jh = h
        },
        validateSize: function () {
            if (this[VC]) {
                this[VC] = !1;
                var t = this._originalBounds;
                this._jf, this._jh, this._8v(t), this.setMeasuredBounds(t[ca] * this._jf, t.height * this._jh, t.x * this._jf, t.y * this._jh)
            }
        },
        measure: function () {
            var t = this._kq[Lo](this[Zo] + this.outline);
            return t ? (this[VC] = !0, void (this._originalBounds = t[dr]())) : void this._jd.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this[XC] = !0
        },
        _1m: function () {
            this.$invalidateFillGradient = !1, this[ZC] = this.fillGradient ? MH[yr][KC][hr](this[JC], this._7v) : null
        },
        _k5: function (t) {
            var i, n;
            if (Gg == this.$adjustType) i = 1, n = -1; else {
                if (zg != this.$adjustType) return;
                i = -1, n = 1
            }
            var e = this._jd.cx, s = this._jd.cy;
            t.translate(e, s), t[nf](i, n), t[bo](-e, -s)
        },
        draw: function (t, i, n, e) {
            if (this._jf && this._jh) {
                if (this[XC] && this._1m(), t[vo](), this[QC] && this._k5(t), this._kq._mb == xH) return t[nf](this._jf, this._jh), this._kq._lh.draw(t, i, this, n, e || this), void t[wo]();
                n && this._7r(t, i, e), this._kq.draw(t, i, this, this._jf, this._jh), t.restore()
            }
        },
        doHitTest: function (t, i, n) {
            if (this._kq[P_]) {
                if (Gg == this.$adjustType) {
                    var e = this._jd.cy;
                    i = 2 * e - i
                } else if (zg == this[QC]) {
                    var s = this._jd.cx;
                    t = 2 * s - t
                }
                t /= this._jf, i /= this._jh;
                var h = (this._jf + this._jh) / 2;
                return h > 1 && (n /= h, n = 0 | n), this._kq._lh instanceof YH ? this._kq._lh[P_](t, i, n, !0, this[tL], this[iL] || this[JC]) : this._kq.hitTest(t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, E(PW, bW), ms(PW.prototype, {
        adjustType: {},
        fillColor: {},
        size: {validateFlags: [EO, nL]},
        fillGradient: {validateFlags: [eL]}
    }), K(PW.prototype, {
        originalBounds: {
            get: function () {
                return this[sL]
            }
        }
    }), HY[hL] = iq.CENTER_MIDDLE;
    var AW = function () {
        w(this, AW, arguments), this[fA] = HY[WS]
    };
    AW[yr] = {
        color: HY[WS],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _fa: null,
        alignPosition: null,
        measure: function () {
            this.$data = "" + this[xk], this[go];
            var t = Fi(this.$data, this[rL], this.$fontFamily, this[aL], HY[yo], this[oL]);
            if (this._fa = t, this.$size) {
                var i = this[WC][ca] || 0, n = this[WC].height || 0;
                return this.setMeasuredBounds(i > t[ca] ? i : t[ca], n > t.height ? n : t.height)
            }
            return this[fL](t[ca], t[_a])
        },
        doHitTest: function (t, i, n) {
            return this[xk] ? $n(t, i, n, this) : !1
        },
        draw: function (t, i, n, e) {
            if (n && this._7r(t, i, e), this.$fontSize || HY[To], this.$rotatable && this[Hf]) {
                var s = vn(this[Hf]);
                s > WY && 3 * WY > s && (t[bo](this._jd.width / 2, this._jd[_a] / 2), t[Fo](Math.PI), t[bo](-this._jd[ca] / 2, -this._jd[_a] / 2))
            }
            var h = this[vA] || HY[hL], r = h[da], a = h[la], o = 0;
            r == eq ? (r = Zb, o += this._jd[ca] / 2) : r == sq ? (r = aa, o += this._jd[ca]) : r = ed;
            var f = 0;
            a == rq ? f = (this._jd[_a] - this._fa.height) / 2 : a == aq && (f = this._jd[_a] - this._fa[_a]), t[tf] = this[fA], $i(t, this[xk], o, f, r, this[uL], this.$fontSize, this[aL], HY[yo], this[oL])
        },
        _4w: function () {
            return null != this.$data || this[WC]
        },
        $invalidateFont: !0
    }, E(AW, bW), ms(AW[yr], {
        size: {validateFlags: [OO]},
        fontStyle: {validateFlags: [OO, cL]},
        fontSize: {validateFlags: [OO, cL]},
        fontFamily: {validateFlags: [OO, cL]}
    }), K(AW[yr], {
        font: {
            get: function () {
                return this[_L] && (this.$invalidateFont = !1, this.$font = (this[aL] || HY[co]) + Dr + (this[rL] || HY[To]) + _o + (this[uL] || HY[lo])), this[oL]
            }
        }
    });
    var CW = function (t) {
        t = t || new YH, this[dL] = new QY, w(this, CW, [t])
    };
    CW[yr] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this[lL] = !0, this[vL] = !0, this[xk].getBounds(this[tL] + this[bL], this[dL]), this[fL](this[dL])
        },
        validateSize: function () {
            if (this[lL] || this[vL]) {
                var t = this[dL][dr]();
                if (this[lL]) {
                    this[lL] = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i)
                }
                if (this[vL]) {
                    this.$invalidateToArrow = !1;
                    var i = this.validateToArrow();
                    i && t.add(i)
                }
                this[fL](t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._iy || !this[yL]) return void (this.$fromArrowShape = null);
            var t = this.$data, i = 0, n = 0, e = this.$fromArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._iy)), this[gL] = t[xf](i, n), this.fromArrowLocation.rotate = Math.PI + this.fromArrowLocation[Fo] || 0, this[pL] = Xs(this[yL], this[mL]);
            var s = this[pL].getBounds(this.fromArrowStyles[Zo] + this.fromArrowStyles[ix]);
            return this[xL] instanceof hH.Gradient ? this[EL]._fillGradient = MH.prototype[KC].call(this[xL], s) : this[EL] && (this[EL][ZC] = null), s[Vp](this[gL].x, this[gL].y), Li(s, this[gL][Fo], s, this[gL].x, this.fromArrowLocation.y), s
        },
        validateToArrow: function () {
            if (!this[xk]._iy || !this[wL]) return void (this[TL] = null);
            var t = this.$data, i = 0, n = 0, e = this[kL];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._iy), i += t._iy, this.toArrowLocation = t.getLocation(i, n), this[TL] = Xs(this[wL], this.$toArrowSize);
            var s = this[TL][Lo](this[ML][Zo] + this[ML][ix]);
            return this[fC] instanceof hH[OL] ? this[ML][ZC] = MH.prototype.generatorGradient[hr](this[fC], s) : this[ML] && (this[ML][ZC] = null), s[Vp](this[SL].x, this.toArrowLocation.y), Li(s, this[SL][Fo], s, this[SL].x, this[SL].y), s
        },
        _28: function (t) {
            var i = t ? "from" : fM, e = this[i + IL];
            e === n && (e = this[tL]);
            var s = this[i + PL];
            s === n && (s = this.strokeStyle);
            var h = this[i + AL];
            h || (this[i + AL] = h = {}), h.lineWidth = e, h[Ko] = s, h.lineDash = this[i + CL], h.lineDashOffset = this[i + LL], h.fillColor = this[i + DL], h[sx] = this[i + jL], h.lineCap = this[i + RL], h[ad] = this[i + NL], h[ix] = this[i + BL] || 0, h[tx] = this[i + $L]
        },
        doValidate: function () {
            return this[yL] && this._28(!0), this[wL] && this._28(!1), T(this, CW, dO)
        },
        drawArrow: function (t, i, n, e) {
            if (this[yL] && this[pL]) {
                t[vo]();
                var s = this[gL], h = s.x, r = s.y, a = s.rotate;
                t[bo](h, r), a && t[Fo](a), this[pL][lf](t, i, this[EL], n, e), t[wo]()
            }
            if (this[wL] && this[TL]) {
                t.save();
                var s = this[SL], h = s.x, r = s.y, a = s.rotate;
                t[bo](h, r), a && t[Fo](a), this.$toArrowShape.draw(t, i, this[ML], n, e), t[wo]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this[XC] = !0
        },
        _1m: function () {
            this.$invalidateFillGradient = !1, this[ZC] = this.$fillGradient ? MH[yr][KC].call(this[JC], this._7v) : null
        },
        draw: function (t, i, n, e) {
            this.$invalidateFillGradient && this._1m(), this.$data.draw(t, i, this, n, e), this.drawArrow(t, i, n, e)
        },
        doHitTest: function (t, i, n) {
            if (this.$data[P_](t, i, n, !0, this.$lineWidth + this.$outline, this.$fillColor || this.$fillGradient)) return !0;
            if (this[wL] && this[TL]) {
                var e = t - this[SL].x, s = i - this[SL].y;
                if (this.toArrowLocation[Fo]) {
                    var h = Ii(e, s, -this[SL][Fo]);
                    e = h.x, s = h.y
                }
                var r = this[ML][ex] || this[ML][sx];
                if (this[TL][P_](e, s, n, !0, this.toArrowStyles.lineWidth, r)) return !0
            }
            if (this[yL] && this[pL]) {
                var e = t - this.fromArrowLocation.x, s = i - this[gL].y;
                if (this[gL][Fo]) {
                    var h = Ii(e, s, -this[gL][Fo]);
                    e = h.x, s = h.y
                }
                var r = this[EL][ex] || this.fromArrowStyles.fillGradient;
                if (this[pL][P_](e, s, n, !0, this.fromArrowStyles[Zo], r)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, E(CW, bW), ms(CW.prototype, {
        strokeStyle: {validateFlags: [FL, GL]},
        fillColor: {},
        fillGradient: {validateFlags: [eL]},
        fromArrowOffset: {validateFlags: [FL, EO]},
        fromArrowSize: {validateFlags: [FL, EO]},
        fromArrow: {validateFlags: [FL, EO]},
        fromArrowOutline: {validateFlags: [FL, EO]},
        fromArrowStroke: {validateFlags: [FL, EO]},
        fromArrowStrokeStyle: {validateFlags: [FL]},
        toArrowOffset: {validateFlags: [GL, EO]},
        toArrowSize: {validateFlags: [GL, EO]},
        toArrow: {validateFlags: [GL, EO]},
        toArrowOutline: {validateFlags: [GL, EO]},
        toArrowStroke: {validateFlags: [GL, EO]},
        toArrowStrokeStyle: {validateFlags: [GL]},
        outline: {value: 0, validateFlags: [OO]}
    }), K(CW.prototype, {
        length: {
            get: function () {
                return this[Vo][rr]
            }
        }
    }), Ts[yr] = {
        shape: null, path: null, initialize: function () {
            T(this, Ts, _O), this[wM] = new YH, this[wM]._e7 = !1, this.shape = new CW(this.path), this.addChild(this[jA], 0), this._n6ody = this.shape, kW[IC](this)
        }, _1t: !0, _59: null, _$s: function () {
            return !1
        }, _3w: function () {
            return !1
        }, validatePoints: function () {
            this[jA].invalidateData();
            var t = this[xk], i = this[wM];
            i[to]();
            var n = t[Zu], e = t[Uu];
            n && e && nh(this, t, i, n, e)
        }, getEndPointBounds: function (t) {
            return t.getLinkableBounds()
        }, _3a: function (t, i, n, e, s, h, r, a, o) {
            return t.hasPathSegments() ? void (i[OM] = t[zL][Il]()) : n == e ? void this[YL](i, n, s, h, a, o) : void this[qL](i, n, e, s, h, r, a, o)
        }, drawLoopedEdge: function (t, i, n, e) {
            rh(this, e, t)
        }, drawEdge: function (t, i, n, e, s, h, r, a) {
            if (e == rH.EDGE_TYPE_ZIGZAG) {
                var o = (r.x + a.x) / 2, f = (r.y + a.y) / 2, u = r.x - a.x, c = r.y - a.y, _ = Math[Mo](u * u + c * c),
                    d = Math[sa](c, u);
                d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
                var l = Math.cos(d) * _, v = Math.sin(d) * _;
                return t[af](o - v, f + l), void t.lineTo(o + v, f - l)
            }
            var b = hh(this, this[Vo], s, h, i, n, r, a);
            b && (t._fp = b)
        }, _27: function () {
            if (!this.data[ck]()) return null;
            var t = this[Vo][Wu](!0);
            if (!t || !t[HL](this.graph) || !t._fn) return null;
            var i = t[UL](this);
            return t[WL](this.$data) || (i = -i), i
        }, checkBundleLabel: function () {
            var t = this.getBundleLabel();
            return t ? (this[lC] || this[VL](), this[lC]._i2 = !0, void (this.bundleLabel[Vo] = t)) : void (this[lC] && (this[lC]._i2 = !1, this[lC][Vo] = null))
        }, createBundleLabel: function () {
            var t = new AW;
            t[XL] = !1, this[lC] = t, this[OC](this.bundleLabel), MW[IC](this)
        }, getBundleLabel: function () {
            return this[E_].getBundleLabel(this[Vo])
        }, doValidate: function () {
            return this._1t && (this._1t = !1, this[ZL]()), this.checkBundleLabel(), T(this, Ts, dO)
        }, _4o: function () {
            this._1t = !0, this[wC]()
        }, _$t: function (t, i, n) {
            var e = this[xC][MC](this, t, i, n);
            return e = pW[MC](this, t, i, n) || e, this[lC] && this[lC][xk] && (e = MW[MC](this, t, i, n) || e), kW[MC](this, t, i, n) || e
        }
    }, E(Ts, IW), Ts.drawReferenceLine = function (t, i, n, e) {
        if (t[rf](i.x, i.y), !e || e == rH.EDGE_TYPE_DEFAULT) return void t[af](n.x, n.y);
        if (e == rH.EDGE_TYPE_VERTICAL_HORIZONTAL) t[af](i.x, n.y); else if (e == rH.EDGE_TYPE_HORIZONTAL_VERTICAL) t[af](n.x, i.y); else if (0 == e.indexOf(rH.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = e == rH[Uc] ? !0 : e == rH[Kc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var h = (i.x + n.x) / 2, r = (i.y + n.y) / 2;
            s ? (t.lineTo(h, i.y), t.lineTo(h, n.y)) : (t.lineTo(i.x, r), t[af](n.x, r))
        } else if (0 == e[vr](rH.EDGE_TYPE_ELBOW)) {
            var s, a = LW[gW[Hc]] || 0;
            s = e == rH.EDGE_TYPE_ELBOW_HORIZONTAL ? !0 : e == rH[Zc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t[af](i.x + a, i.y), t.lineTo(n.x - a, n.y)) : (t[af](i.x, i.y + a), t[af](n.x, n.y - a))
        } else if (0 == e[vr](KL)) {
            var a = LW[gW[Hc]] || 0;
            if (e == rH.EDGE_TYPE_EXTEND_TOP) {
                var o = Math.min(i.y, n.y) - a;
                t.lineTo(i.x, o), t[af](n.x, o)
            } else if (e == rH[Qc]) {
                var o = Math.max(i.y, n.y) + a;
                t[af](i.x, o), t[af](n.x, o)
            } else if (e == rH[Vc]) {
                var f = Math.min(i.x, n.x) - a;
                t[af](f, i.y), t.lineTo(f, n.y)
            } else if (e == rH[Xc]) {
                var f = Math.max(i.x, n.x) + a;
                t[af](f, i.y), t[af](f, n.y)
            }
        } else if (e == rH[JL]) {
            var h = (i.x + n.x) / 2, r = (i.y + n.y) / 2, u = i.x - n.x, c = i.y - n.y, _ = Math.sqrt(u * u + c * c),
                d = Math[sa](c, u);
            d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
            var l = Math.cos(d) * _, v = Math.sin(d) * _;
            t.lineTo(h - v, r + l), t[af](h + v, r - l)
        }
        t[af](n.x, n.y)
    }, K(Ts.prototype, {
        length: {
            get: function () {
                return this[wM] ? this[wM].length : 0
            }
        }
    }), Ts.prototype[io] = function (t, i, n) {
        var e = Cn(this.path, t, i, this.data[QL], n);
        if (!e) return !1;
        var s = e[OM];
        if (s.length > 2) {
            var h = this[Vo], r = s[s[rr] - 1];
            r[$o] == RH ? h.pathSegments = s[fr](1, s.length - 2) : (e[tD] && (r.invalidTerminal = !0), h[zL] = s[fr](1, s[rr] - 1))
        }
    }, ks[yr] = {
        _2m: null, image: null, initialize: function () {
            T(this, ks, _O), this[iD](), wW[IC](this)
        }, _n4j: function () {
            this[Vo][Em] ? this.image && (this[_m] = this[Em]) : this[aA] && (this.body = this.label)
        }, _n65: function () {
            this[Em] = new PW, this[OC](this[Em], 0), this._n4j()
        }, doValidate: function () {
            this.body && (this instanceof lh && !this[xk].groupImage && this._5r() ? this[_m][$f] = !1 : (this[_m][$f] = null != this._2m, this[_m][EM] = this._2m));
            var t = this[xk][_M], i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[nD] = !0), this.$x = i, this.$y = n, IW[yr][dO][hr](this) || e
        }, _$t: function (t, i, n) {
            var e = this[xC][MC](this, t, i, n);
            return e = pW[MC](this, t, i, n) || e, wW[MC](this, t, i, n) || e
        }, getLinkablePorts: function () {
            return this.data[eD]
        }, getLinkableBounds: function () {
            return this[sD]
        }, getDefaultPortPoint: function (t) {
            return ui(iq[iv], t || this.getLinkableBounds())
        }, getPortPoint: function (t, i) {
            if (!t) return this.getDefaultPortPoint(i);
            i = i || this[hD]();
            var n;
            return i[qC] ? (n = ui(t, i.original), i[Fo] && (n = Pi(n.x, n.y, i[Fo], i[rD] || 0, i[aD] || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n[oD] = t, n
        }, getPortPoints: function () {
            var t = this.getLinkablePorts();
            if (t && Array[Br](t)) {
                var i = [], n = this[hD]();
                return t[qu](function (t) {
                    i[lr](this[p_](t, n))
                }.bind(this)), i
            }
        }
    }, E(ks, IW);
    var LW = {};
    LW[gW[qp]] = HY[qp], LW[gW.SELECTION_BORDER] = HY[kO], LW[gW.SELECTION_SHADOW_BLUR] = HY.SELECTION_SHADOW_BLUR, LW[gW.SELECTION_TYPE] = rH[zp], LW[gW[fD]] = 2, LW[gW[AO]] = 2, LW[gW[WS]] = HY[WS], LW[gW.LABEL_POSITION] = iq[nv], LW[gW.LABEL_ANCHOR_POSITION] = iq.CENTER_TOP, LW[gW[iI]] = new tq(0, 2), LW[gW[eI]] = 8, LW[gW[aI]] = 8, LW[gW.LABEL_POINTER] = !0, LW[gW[uD]] = 0, LW[gW.LABEL_BORDER_STYLE] = UC, LW[gW.LABEL_ROTATABLE] = !0, LW[gW[cA]] = null, LW[gW[gI]] = null, LW[gW.EDGE_COLOR] = cD, LW[gW.EDGE_WIDTH] = 1.5, LW[gW[pP]] = !0, LW[gW.EDGE_TO_AT_EDGE] = !0, LW[gW[_D]] = X(3438210798), LW[gW[AI]] = 1, LW[gW.GROUP_STROKE_STYLE] = UC, LW[gW.ARROW_TO] = !0, LW[gW[MP]] = HY.ARROW_SIZE, LW[gW[YP]] = HY[Hp], LW[gW[dD]] = 10, LW[gW[f_]] = 8, LW[gW.EDGE_CORNER] = rH[c_], LW[gW.EDGE_SPLIT_BY_PERCENT] = !0, LW[gW[Hc]] = 20, LW[gW[e_]] = .5, LW[gW[s_]] = 20, LW[gW[fP]] = 20, LW[gW.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = iq[nv], LW[gW[NI]] = iq[tv], LW[gW[BI]] = lD, LW[gW.SHAPE_STROKE] = 1, LW[gW[SA]] = vD, LW[gW.RENDER_COLOR_BLEND_MODE] = HY[xx], LW[gW[jO]] = 1, HY.LOOKING_EDGE_ENDPOINT_TOLERANCE = 2;
    var DW = function (i, n) {
        this._$n = new yq, this._$n.on(function (t) {
            PM == t[uv] && this.invalidateVisibility()
        }, this), this._1f = new yq, this._1f[Kd](function (t) {
            !this[PM] || t[uv] != mq.KIND_CLEAR && t[uv] != mq[Xv] || this[vd][I_](this[PM]) || (this.currentSubNetwork = null)
        }, this), this._5 = new yq, this._13 = new yq, this._$i = new yq, this._$k = new yq, this.graphModel = n || new bs, this._8i = new iW(this, i), this._2y = new Vh(this), this._17 = new yq, this[bD] = Iq(t, yD, function () {
            this[gD]()
        }, !1, this), this._8i[GT][pD] = function (t) {
            this[pD](t)
        }[Pr](this), this._8i[GT][mD] = function (t) {
            this.ondragover(t)
        }[Pr](this)
    };
    DW[yr] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            // hH[xD](t)
        },
        getDropInfo: function (t, i) {
            var n = null;
            if (i) try {
                n = JSON[Ua](i)
            } catch (e) {
            }
            return n
        },
        ondrop: function (t) {
            var i = t[ED];
            if (i) {
                var n = i.getData(Bd), e = this[wD](t, n);
                e || (e = {}, e[Em] = i[Uy](Em), e[$o] = i.getData($o), e[aA] = i[Uy](aA), e[YM] = i[Uy](YM));
                var s = this[TD](t);
                if (s = this[VT](s.x, s.y), !(this[kD] instanceof Function && this[kD][hr](this, t, s, e) === !1) && (e.image || e[aA] || e[$o])) {
                    var h = e[Em], r = e[$o], a = e[aA], o = e[YM];
                    hH[xD](t);
                    var f;
                    if (r && MD != r ? HM == r ? f = this[OD](a, s.x, s.y) : SD == r ? f = this[ID](a, s.x, s.y) : PD == r ? (f = this[AD](a, s.x, s.y), o && (o = _h(o), o && (f.groupImage = o))) : (r = J(r), r instanceof Function && r[yr] instanceof _W && (f = new r, f[bf] = a, f[vM] = new XY(s.x, s.y), this[Yk].add(f))) : f = this.createNode(a, s.x, s.y), f) {
                        if (h && (h = _h(h), h && (f[Em] = h)), t.shiftKey) {
                            var u = this[Xy](t);
                            u && this[CD](u) && (f.parent = u)
                        }
                        if (e.properties) for (var c in e.properties) f[c] = e.properties[c];
                        if (e.clientProperties) for (var c in e.clientProperties) f.set(c, e[LD][c]);
                        if (e[DD] && f[tM](e[DD]), this.onElementCreated(f, t, e) === !1) return !1;
                        var _ = new Wh(this, Wh[jD], t, f);
                        return this[RD](_), f
                    }
                }
            }
        },
        _n6i: function (t) {
            return t[Ik] || t instanceof vW || t.droppable
        },
        enableDoubleClickToOverview: !0,
        _8i: null,
        _$n: null,
        _1f: null,
        _5: null,
        _$k: null,
        _13: null,
        _$i: null,
        _1p: function (t) {
            return this._$n.beforeEvent(t)
        },
        _47: function (t) {
            this._$n[Sv](t), bT == t[uv] && this[ND]()
        },
        isVisible: function (t) {
            return this._8i._ej(t)
        },
        isMovable: function (t) {
            return (t instanceof _W || t instanceof cW && t.hasPathSegments()) && t[BD] !== !1
        },
        isSelectable: function (t) {
            return t[$D] !== !1
        },
        isEditable: function (t) {
            return t[XL] !== !1
        },
        isRotatable: function (t) {
            return t[mA] !== !1
        },
        isResizable: function (t) {
            return t[FD] !== !1
        },
        canLinkFrom: function (t) {
            return t[GD] !== !1 && t[zD] !== !1
        },
        canLinkTo: function (t, i) {
            return t.linkable === !1 || t[YD] === !1 ? !1 : i instanceof hH[PD] && t[tc](i) ? !1 : t instanceof hH.Group && i[tc](t) ? !1 : !0
        },
        isEndPointEditable: function (t) {
            return t[qD] !== !1
        },
        createNode: function (t, i, n) {
            var e = new _W(t, i, n);
            return this[Yk].add(e), e
        },
        createText: function (t, i, n) {
            var e = new gs(t, i, n);
            return this[Yk].add(e), e
        },
        createShapeNode: function (t, i, n, e) {
            R(i) && (e = n, n = i, i = null);
            var s = new dW(t, i);
            return s.$location = new XY(n, e), this[Yk].add(s), s
        },
        createGroup: function (t, i, n) {
            var e = new vW(t, i, n);
            return this[Yk].add(e), e
        },
        createEdge: function (t, i, n) {
            if (t instanceof _W) {
                var e = n;
                n = i, i = t, t = e
            }
            var s = new cW(i, n);
            return t && (s[Vk] = t), this[Yk].add(s), s
        },
        addElement: function (t, i) {
            this[Yk].add(t), i && t[er]() && t[fc](function (t) {
                this[HD](t, i)
            }, this)
        },
        removeElement: function (t) {
            this[Yk][_r](t)
        },
        clear: function () {
            this[Yk].clear()
        },
        getStyle: function (t, i) {
            var e = t._jc[i];
            return e !== n ? e : this[UD](i)
        },
        getDefaultStyle: function (t) {
            if (this._jc) {
                var i = this._jc[t];
                if (i !== n) return i
            }
            return LW[t]
        },
        _2l: function (t, i) {
            if (!this[WD] || this.limitedBounds[I_](this[VD])) return i && i(), !1;
            t = this._2d(), this.stopAnimation();
            var n, e, s, h = this[VD], r = this[WD], a = h.width / this.limitedBounds[ca], o = h[_a] / this[WD][_a];
            if (1 >= a && 1 >= o) return n = r[ed] > h[ed] ? r.left : r[aa] < h[aa] ? h[ed] - (h.right - r[aa]) : h[ed], e = r.top > h.top ? r.top : r[oa] < h[oa] ? h.top - (h.bottom - r[oa]) : h.top, void this[XT](-n * this[nf], -e * this[nf], this.scale, !1, i);
            var f = a > o;
            s = Math.max(a, o), f ? (n = r.x, e = r.y + (h.top - r.top) * (1 - s) / s, e >= r.y ? e = r.y : e < r[oa] - h[_a] / s && (e = r[oa] - h[_a] / s)) : (e = r.y, n = r.x + (h.left - r[ed]) * (1 - s) / s, n >= r.x ? n = r.x : n < r[aa] - h[ca] / s && (n = r[aa] - h.width / s)), s *= this.scale, n *= s, e *= s, this[XT](-n, -e, s, t, i)
        },
        checkLimitedBounds: function (t) {
            return this._n4heckingBounds || !this[WD] || this.limitedBounds[I_](this[VD]) ? !1 : (this._n4heckingBounds = !0, void this[XD](function () {
                this._2l(t, function () {
                    this[ZD] = !1
                }[Pr](this))
            }, this))
        },
        zoomByMouseEvent: function (t, i, n, e) {
            var s = this[TD](t);
            return jr == typeof i ? this[KD](Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[JD](s.x, s.y, n, e) : this[QD](s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function (t, i, n) {
            return this[XT](this.tx + t, this.ty + i, this[nf], n)
        },
        translateTo: function (t, i, n, e, s) {
            if (n && (n = Math.min(this[xm], Math.max(this[tj], n))), e) {
                var h = this._5j();
                return void h._ko(t, i, n, e, s)
            }
            var r = this._8i[ij](t, i, n);
            return s && s(), r
        },
        centerTo: function (t, i, e, s, h) {
            return (!e || 0 >= e) && (e = this[nf]), s === n && (s = this._2d()), this[XT](this[ca] / 2 - t * e, this[_a] / 2 - i * e, e, s, h)
        },
        moveToCenter: function (t, i) {
            if (arguments[2] === !1 || !this._8i[nj]()) {
                var n = this[Ao];
                return void this[ej](n.cx, n.cy, t, i)
            }
            return this._8i[Dc] || (i = !1), this[XD](this[sj][Pr](this, t, i, !1))
        },
        zoomToOverview: function (t, i) {
            if (arguments[2] === !1 || !this._8i[nj]()) {
                var n = this._8i._1k();
                return void (n && (i && (n[nf] = Math.min(n[nf], i)), this.centerTo(n.cx, n.cy, n[nf], t)))
            }
            return this._8i._n29 || (t = !1), this[XD](this.zoomToOverview[Pr](this, t, i, !1))
        },
        _2d: function () {
            return this._8i[Dc] ? this[hj] === n || null === this[hj] ? HY[rj] : this[hj] : !1
        },
        zoomAt: function (t, i, e, s, h) {
            s === n && (s = this._2d()), i === n && (i = this[ca] / 2), i = i || 0, e === n && (e = this[_a] / 2), e = e || 0;
            var r = this[nf];
            return t = Math.min(this.maxScale, Math.max(this[tj], r * t)), i = t * (this.tx - i) / r + i, e = t * (this.ty - e) / r + e, this[XT](i, e, t, s, h)
        },
        zoomOut: function (t, i, n, e) {
            return this[KD](1 / this[aj], t, i, n, e)
        },
        zoomIn: function (t, i, n, e) {
            return this[KD](this[aj], t, i, n, e)
        },
        _5j: function () {
            return this[oj] || (this[oj] = new FW(this)), this._panAnimation
        },
        onAnimationStart: function () {
        },
        onAnimationEnd: function () {
        },
        isAnimating: function () {
            return this[oj] && this._panAnimation._df()
        },
        enableInertia: !0,
        _9u: function (t, i) {
            var n = this._5j();
            return n._gk(t || 0, i || 0)
        },
        stopAnimation: function () {
            this._panAnimation && this[oj]._ll()
        },
        getUI: function (t) {
            return Q(t) ? this._8i._3s(t) : this._8i._lb(t)
        },
        getUIByMouseEvent: function (t) {
            return this._8i._3s(t)
        },
        hitTest: function (t) {
            return this._8i[P_](t)
        },
        globalToLocal: function (t) {
            return this._8i._80(t)
        },
        toCanvas: function (t, i) {
            return this._8i._h6(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._8i._8(t) : this._8i._eb(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._8i._3s(t);
            return i ? i[xk] : void 0
        },
        getElement: function (t) {
            return Q(t) ? this.getElementByMouseEvent(t) : this[Yk].getById(t)
        },
        invalidate: function () {
            this._8i[lT]()
        },
        invalidateUI: function (t) {
            t.invalidate(), this[dT]()
        },
        invalidateElement: function (t) {
            this._8i._32(t)
        },
        getUIBounds: function (t) {
            return this._8i._2i(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._8i._4b(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._8i._$u(t, i)
        },
        forEachUI: function (t, i) {
            return this._8i._ec(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._8i._3v(t, i)
        },
        forEach: function (t, i) {
            return this[Yk][qu](t, i)
        },
        getElementByName: function (t) {
            var i;
            return this[qu](function (n) {
                return n[bf] == t ? (i = n, !1) : void 0
            }), i
        },
        focus: function (i) {
            if (i) {
                var n = t.scrollX || t[Ra], e = t[Fd] || t[Ba];
                return this[Vy][fj](), void t.scrollTo(n, e)
            }
            this[Vy][fj]()
        },
        callLater: function (t, i, n) {
            this._8i._e2(t, i, n)
        },
        exportImage: function (t, i, n) {
            return Eh(this, t, i, n)
        },
        setSelection: function (t) {
            return this[Yk][tb].set(t)
        },
        select: function (t) {
            return this[Yk][tb][zd](t)
        },
        unselect: function (t) {
            return this._kmModel._selectionModel[uj](t)
        },
        reverseSelect: function (t) {
            return this._kmModel._selectionModel[cj](t)
        },
        selectAll: function () {
            xh(this)
        },
        unSelectAll: function () {
            this[_b][to]()
        },
        unselectAll: function () {
            this[_j]()
        },
        isSelected: function (t) {
            return this[Yk][tb].contains(t)
        },
        sendToTop: function (t) {
            Re(this[Yk], t)
        },
        sendToBottom: function (t) {
            Ne(this[Yk], t)
        },
        moveElements: function (t, i, n) {
            var e = [], s = new UY;
            return l(t, function (t) {
                t instanceof _W ? e[lr](t) : t instanceof cW && s.add(t)
            }), this._em(e, i, n, s)
        },
        _em: function (t, i, n, e) {
            if (0 == i && 0 == n || 0 == t.length && 0 == e[rr]) return !1;
            if (0 != t.length) {
                var s = this._4r(t);
                e = this._43(s, e), l(s, function (t) {
                    var e = t[_M];
                    e ? t[dj](e.x + i, e.y + n) : t[dj](i, n)
                })
            }
            return e && e.length && this._en(e, i, n), !0
        },
        _en: function (t, i, n) {
            t[qu](function (t) {
                t[pg](i, n)
            })
        },
        _43: function (t, i) {
            return this[vd][qu](function (n) {
                n instanceof cW && this.isMovable(n) && t[I_](n[Zu]) && t[I_](n[Uu]) && i.add(n)
            }, this), i
        },
        _4r: function (t) {
            var i = new UY;
            return l(t, function (t) {
                !this[lj](t), i.add(t), Le(t, i, this[vj])
            }, this), i
        },
        reverseExpanded: function (t) {
            if (!t[ck]()) return !1;
            var i = t[Wu](!0);
            return i ? i[bj]() !== !1 ? (this[dT](), !0) : void 0 : !1
        },
        _2y: null,
        _17: null,
        beforeInteractionEvent: function (t) {
            return this._17.beforeEvent(t)
        },
        onInteractionEvent: function (t) {
            this._17[Sv](t)
        },
        addCustomInteraction: function (t) {
            this._2y[yj](t)
        },
        removeCustomInteraction: function (t) {
            this._2y[gj](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t.tooltip || t.name
        },
        updateViewport: function () {
            this._8i._7a()
        },
        destroy: function () {
            this._47(new cq(this, sg, !0, this[xE])), this[xE] = !0, Pq(t, yD, this[bD]), this._2y.destroy(), this[vd] = new bs;
            var i = this[pj];
            this._8i._ih(), i && (i[mj] = "")
        },
        onPropertyChange: function (t, i, n) {
            this._$n[Kd](function (e) {
                e.kind == t && i[hr](n, e)
            })
        },
        removeSelection: function () {
            var t = this[_b]._jr;
            return t && 0 != t[rr] ? (t = t[or](), this[Yk][_r](t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this[_b][Zd];
            return i && 0 != i[rr] ? void hH[$g](xj + i[rr], function () {
                var i = this[Ej]();
                if (i) {
                    var n = new Wh(this, Wh[wj], t, i);
                    this[RD](n)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, n, e) {
            var s = new YH(i);
            i[rr] > 2 && s[Nf]();
            var h = this.createShapeNode(Tj, s, n, e);
            this[kj](h, t);
            var r = new Wh(this, Wh[jD], t, h);
            return this.onInteractionEvent(r), h
        },
        createLineByInteraction: function (t, i, n, e) {
            var s = new YH(i), h = this[ID](Mj, s, n, e);
            h[qc](hH[Oj][KO], null), h[qc](hH[Oj][QO], null), h.setStyle(hH.Styles[hS], !0), this[kj](h, t);
            var r = new Wh(this, Wh[jD], t, h);
            return this[RD](r), h
        },
        createEdgeByInteraction: function (t, i, n, e, s, h) {
            var r = this[Sj](Ij, t, i);
            if (s && r.setStyle(hH.Styles.EDGE_FROM_PORT, s), h && r[qc](hH[Oj][x_], h), e) r._8s = e; else {
                var a = this[Pj], o = this[C_];
                this[Aj] && (a = this[Aj][Sk] || a, o = this[Aj].edgeType || o), a && (r[Sk] = a), o && (r[C_] = o)
            }
            this[kj](r, n);
            var f = new Wh(this, Wh[jD], n, r);
            return this.onInteractionEvent(f), r
        },
        onElementCreated: function (t) {
            !t[Hu] && this[PM] && (t.parent = this[PM])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, n, e) {
            var s = this;
            n[Cj](e.x, e.y, i[Vo], this[t_](t, gW[XS]), function (n) {
                return s[Lj](t, i, n, i[Hu])
            })
        },
        onLabelEdit: function (t, i, n, e) {
            if (!n && !this[Dj]) return hH.alert(jj), !1;
            if (aA == i[bf]) {
                if (t[bf] == n) return !1;
                t[bf] = n
            } else e._gw(i, n) === !1 && (i[Vo] = n, this[Rj](t))
        },
        setInteractionMode: function (t, i) {
            this[Nj] = t, this.interactionProperties = i
        },
        upSubNetwork: function () {
            return this._35 ? this.currentSubNetwork = dh(this._35) : !1
        },
        _$o: !1,
        invalidateVisibility: function () {
            this._$o = !0, this[dT]()
        },
        getBundleLabel: function (t) {
            var i = t.getEdgeBundle(!0);
            return i && i.agentEdge == t ? Bj + i[$j].length : null
        },
        zoomAnimation: null,
        pauseRendering: function (t, i) {
            (this[Fj] || i) && this._8i._6w(t)
        },
        _4n: n,
        enableRectangleSelectionByRightButton: !0,
        getLinkablePoints: function (t) {
            return t[Gj]
        }
    }, K(DW[yr], {
        center: {
            get: function () {
                return this.toLogical(this[pj][Pa] / 2, this[pj].clientHeight / 2)
            }
        }, visibleFilter: {
            get: function () {
                return this[uk]
            }, set: function (t) {
                this[uk] = t, this[Pk]()
            }
        }, topCanvas: {
            get: function () {
                return this._8i._topCanvas
            }
        }, propertyChangeDispatcher: {
            get: function () {
                return this._$n
            }
        }, listChangeDispatcher: {
            get: function () {
                return this._1f
            }
        }, dataPropertyChangeDispatcher: {
            get: function () {
                return this._5
            }
        }, selectionChangeDispatcher: {
            get: function () {
                return this._$k
            }
        }, parentChangeDispatcher: {
            get: function () {
                return this._13
            }
        }, childIndexChangeDispatcher: {
            get: function () {
                return this._$i
            }
        }, interactionDispatcher: {
            get: function () {
                return this._17
            }
        }, cursor: {
            set: function (t) {
                this[Vy].style[zj] = t || this._2y[md]
            }, get: function () {
                return this.canvasPanel[wa].cursor
            }
        }, interactionMode: {
            get: function () {
                return this._2y[Yj]
            }, set: function (t) {
                var i = this.interactionMode;
                i != t && (this._2y[Jd] = t, this._47(new cq(this, Nj, t, i)))
            }
        }, scaleStep: {
            get: function () {
                return this._8i._dx
            }, set: function (t) {
                this._8i._dx = t
            }
        }, maxScale: {
            get: function () {
                return this._8i._fy
            }, set: function (t) {
                this._8i._fy = t
            }
        }, minScale: {
            get: function () {
                return this._8i._fz
            }, set: function (t) {
                this._8i._fz = t
            }
        }, scale: {
            get: function () {
                return this._8i._scale
            }, set: function (t) {
                return this._8i[sy] = t
            }
        }, tx: {
            get: function () {
                return this._8i._tx
            }
        }, ty: {
            get: function () {
                return this._8i._ty
            }
        }, styles: {
            get: function () {
                return this._jc
            }, set: function (t) {
                this._jc = t
            }
        }, selectionModel: {
            get: function () {
                return this._kmModel[tb]
            }
        }, graphModel: {
            get: function () {
                return this[Yk]
            }, set: function (t) {
                if (this[Yk] == t) return !1;
                var i = this[Yk], n = new cq(this, vd, i, t);
                return this._1p(n) === !1 ? !1 : (null != i && (i[qj].removeListener(this._$n, this), i.listChangeDispatcher.removeListener(this._1f, this), i[ib][Cv](this._5, this), i[ob][Cv](this._13, this), i[eb][Cv](this._$i, this), i.selectionChangeDispatcher[Cv](this._$k, this)), this[Yk] = t, this._kmModel && (this[Yk][qj].addListener(this._$n, this), this[Yk][Jv][Kd](this._1f, this), this._kmModel[ib][Kd](this._5, this), this._kmModel[ob].addListener(this._13, this), this[Yk].childIndexChangeDispatcher[Kd](this._$i, this), this._kmModel[Qv].addListener(this._$k, this)), this._8i && this._8i._l9(), void this._47(n))
            }
        }, count: {
            get: function () {
                return this[Yk][rr]
            }
        }, width: {
            get: function () {
                return this[pj].clientWidth
            }
        }, height: {
            get: function () {
                return this.html[KT]
            }
        }, viewportBounds: {
            get: function () {
                return this._8i[Hj]
            }
        }, bounds: {
            get: function () {
                return this._8i._3z()
            }
        }, canvasPanel: {
            get: function () {
                return this._8i[GT]
            }
        }, html: {
            get: function () {
                return this._8i._n2f.parentNode
            }
        }, navigationType: {
            get: function () {
                return this._8i._7g
            }, set: function (t) {
                this._8i._3e(t)
            }
        }, _35: {
            get: function () {
                return this[Yk]._35
            }
        }, currentSubNetwork: {
            get: function () {
                return this[Yk][PM]
            }, set: function (t) {
                this[Yk][PM] = t
            }
        }, limitedBounds: {
            get: function () {
                return this[Uj]
            }, set: function (t) {
                return QY.equals(t, this[Uj]) ? !1 : t ? void (this[Uj] = new QY(t)) : void (this[Uj] = null)
            }
        }, ratio: {
            get: function () {
                return this._8i[no]
            }
        }, delayedRendering: {
            get: function () {
                return this._4n === n ? HY[Wj] : this._4n
            }, set: function (t) {
                t != this[Fj] && (this._4n = t, this.pauseRendering(!1, !0))
            }
        }, fullRefresh: {
            get: function () {
                return this._8i[mT]
            }, set: function (t) {
                this._8i[mT] = t
            }
        }
    }), HY.DELAYED_RENDERING = !0, HY.GROUP_MIN_WIDTH = 60, HY[Vj] = 60, lh.prototype = {
        _n4j: function () {
            return this._5r() ? void 0 : T(this, lh, OA, arguments)
        }, initialize: function () {
            T(this, lh, _O), this[LA]()
        }, _n6a: function () {
            this._lp = new YH, this[jA] = new PW(this._lp), this.shape[uu] = !1, this[OC](this[jA], 0), this[_m] = this[jA]
        }, checkBody: function () {
            return this._5r() ? (this._2a = !0, this[jA] ? (this[jA].visible = !0, this[_m] = this[jA]) : (this._n6a(), TW[IC](this)), void (this[Em] && (this[Em][$T] = !1))) : (this[Em] ? (this[Em][$T] = !0, this.body = this[Em]) : this[iD](), void (this.shape && (this[jA].visible = !1)))
        }, _5r: function () {
            return this[xk]._i4() && this[xk].expanded
        }, _lp: null, _2a: !0, _5k: function () {
            this._1d = !0, this._2a = !0
        }, doValidate: function () {
            if (this._2a && this._5r()) {
                if (this._2a = !1, this[jA][Lk](), this[xk].groupImage) {
                    this[jA].data = this[xk][YM];
                    var t = this._2b();
                    return this.shape[QM] = t.x + t[ca] / 2, this.shape[tO] = t.y + t[_a] / 2, this[jA][vT] = {
                        width: t[ca],
                        height: t[_a]
                    }, ks[yr][dO].call(this)
                }
                this.shape[QM] = 0, this.shape[tO] = 0;
                var i = this._8k(this.$data[GM]);
                if (this._lp[to](), i instanceof QY) {
                    var n = this[t_](gW[II]) || 0;
                    Ve(this._lp, i.x, i.y, i.width, i[_a], i.rx || n, i.ry || n)
                } else i instanceof hn ? Xe(this._lp, i) : i instanceof rn && Ze(this._lp, i);
                this._lp._68 = !0, this.shape[Lk]()
            }
            return ks.prototype.doValidate.call(this)
        }, _6u: function (t, i, n, e, s) {
            switch (jr != typeof e && (e = -i / 2), jr != typeof s && (s = -n / 2), t) {
                case rH.GROUP_TYPE_CIRCLE:
                    var h = Math.max(i, n) / 2;
                    return new hn(e + i / 2, s + n / 2, h);
                case rH[Xj]:
                    return new rn(e + i / 2, s + n / 2, i, n);
                default:
                    return new QY(e, s, i, n)
            }
        }, _2b: function () {
            return this._8k(null)
        }, _8k: function (t) {
            var i, e, s = this[Vo], h = s.padding, r = s[FM], a = HY[Zj], o = HY.GROUP_MIN_HEIGHT;
            if (r && (jr == typeof r[ca] && (a = r[ca]), jr == typeof r.height && (o = r[_a]), i = r.x, e = r.y), !s.hasChildren()) return this._6u(t, a, o, i, e);
            var f, u = this[xk]._f3._jr;
            (t == rH[Kj] || t == rH[Xj]) && (f = []);
            for (var c, _, d, l, v = new QY, b = 0, y = u[rr]; y > b; b++) {
                var g = u[b];
                if (this[E_][bd](g) && !(g instanceof cW)) {
                    var p = this[E_][Wy](g);
                    p && (c = p.$x + p._f5.x, _ = p.$y + p._f5.y, d = p._f5.width, l = p._f5[_a], v[Gl](c, _, d, l), f && (f[lr]({
                        x: c,
                        y: _
                    }), f[lr]({x: c + d, y: _}), f[lr]({x: c + d, y: _ + l}), f[lr]({x: c, y: _ + l})))
                }
            }
            if (v.isEmpty()) return this._6u(t, a, o, i, e);
            var m = this[xk].$location;
            m ? m[LM] && (m[LM] = !1, i === n && (m.x = v.cx), e === n && (m.y = v.cy)) : m = this.$data[_M] = {
                x: v.cx,
                y: v.cy
            }, h && v[Vf](h), jr == typeof i && i + m.x < v.x && (v[ca] += v.x - (i + m.x), v.x = i + m.x, f && f[lr]({
                x: v.x,
                y: v.cy
            })), jr == typeof e && e + m.y < v.y && (v[_a] += v.y - (v.y, e + m.y), v.y = e + m.y, f && f[lr]({
                x: v.cx,
                y: v.y
            }));
            var x, i = m.x, e = m.y;
            if (t == rH.GROUP_TYPE_CIRCLE) {
                x = an(f), x.cx -= i, x.cy -= e;
                var E = Math.max(a, o) / 2;
                return x.r < E && (x.cx += E - x.r, x.cy += E - x.r, x.r = E), x
            }
            return t == rH.GROUP_TYPE_ELLIPSE ? (x = on(f, v), x.cx -= i, x.cy -= e, x[ca] < a && (x.cx += (a - x[ca]) / 2, x.width = a), x[_a] < o && (x.cy += (o - x[_a]) / 2, x[_a] = o), x) : (x = v, v[ca] < a && (v[ca] = a), v[_a] < o && (v[_a] = o), v[Vp](-i, -e), x)
        }, _$t: function (t, i, n) {
            if (!this._5r()) return T(this, lh, Jj, arguments);
            var e = this[xC][MC](this, t, i, n);
            return e = pW[MC](this, t, i, n) || e, e = wW[MC](this, t, i, n) || e, TW[MC](this, t, i, n) || e
        }
    }, E(lh, ks), hH.GroupUI = lh;
    var jW = {
        draw: function () {
        }
    };
    HY[nd] = null, HY[Q_] = null;
    var RW = {position: hT, "text-align": Zb}, NW = {padding: Qj, transition: tR}, BW = {position: Z_, display: iR};
    pi(nR, "opacity:0.7;vertical-align:middle;"), pi(".Q-Graph-Nav img:hover,img.hover", eR), YY || (pi(sR, hR + Oq(rR) + aR), pi(oR, fR + Oq(rR) + uR)), yh.prototype = {
        _n4s: function (t, i) {
            return t._i2 == i ? !1 : (t._i2 = i, void (t[wa][cm] = i ? "visible" : V_))
        }, _3p: function (t, i) {
            var n = i / 2 - this._left[cR].clientHeight / 2 + eo;
            this[id][cR].style.top = n, this[sd][cR].style.top = n, this._navPane.style[ca] = t + eo, this[H_].style[_a] = i + eo
        }, _9s: function (t, i, n, e) {
            this[_R](this[K_], t), this[_R](this[id], i), this[_R](this._n6ottom, n), this[_R](this[sd], e)
        }, _ih: function () {
            var t = this[H_][rm];
            t && t[ab](this._navPane)
        }, _k3: function () {
            var t = this[Fu]._km;
            if (t) {
                var i = t.bounds;
                if (i[Sl]()) return void this._9s(!1, !1, !1, !1);
                var n = t.viewportBounds, e = n.y > i.y + 1, s = n.x > i.x + 1, h = n.bottom < i[oa] - 1,
                    r = n[aa] < i[aa] - 1;
                this._9s(e, s, h, r)
            }
        }
    };
    var $W = 10;
    pi(dR, lR), pi(vR, "background-color: #7E7E7E;" + Oq(rR) + ": background-color 0.2s linear;"), pi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;overflow: hidden;"), pi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;overflow: hidden;"), pi(".Q-Graph-ScrollBar--V.Both", bR), pi(".Q-Graph-ScrollBar--H.Both", yR), YY || (pi(gR, hR + Oq(rR) + pR), pi(".Q-Graph:hover .Q-Graph-ScrollPane", fR + Oq(rR) + ":opacity 0.3s linear;")), gh[yr] = {
        _ih: function () {
            this[mR]._ih(),/** this._horizontalDragSupport._ih(), delete this._verticalDragSupport,**/ delete this[xR], this._m9[rm] && this._m9[rm][ab](this._m9)
        }, _m9: null, _n66: null, _7p: null, init: function (t) {
            var n = i.createElement(N_);
            n.className = ER, bi(n, {width: J_, height: J_, position: Z_});
            var e = i[ro](N_);
            e.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[ro](N_);
            s[Yu] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n[q_](s), t.appendChild(n), this._m9 = n, this._7p = s, this._n66 = e, s.isH = !0;
            var h = this, r = {
                onstart: function (t, i) {
                    i[Cr].add(_d)
                }, onrelease: function (t, i) {
                    i[Cr].remove(_d)
                }, ondrag: function (t, i) {
                    // var n = h._n6aseCanvas._km;
                    // if (n) {
                    //     var e = i.isH, s = e ? t.dx : t.dy;
                    //     if (s && i.scale) {
                    //         var r = n[nf] / i[nf];
                    //         e ? n[bo](-r * s, 0) : n[bo](0, -r * s), hH.stopEvent(t)
                    //     }
                    // }
                }, enddrag: function (t, i) {
                    // var n = h[Fu]._km;
                    // if (n && n[wR]) {
                    //     var e = i.isH, s = e ? t.vx : t.vy;
                    //     if (Math.abs(s) > .1) {
                    //         var r = n[nf] / i[nf];
                    //         s *= r, e ? n._9u(-s, 0) : n._9u(0, -s)
                    //     }
                    // }
                }
            };
            this[mR] = new wi(e, r)//, this._horizontalDragSupport = new wi(s, r)
        }, _3p: function () {
            var t = this[Fu]._km;
            t && t.callLater(this._k3.bind(this))
        }, _k3: function () {
            var t = this[Fu]._km;
            if (t) {
                var i = t[Ao];
                if (i[Sl]()) return this._4t(!1), void this._4e(!1);
                var n = t[VD], e = t[ca], s = t[_a], h = t[nf], r = 1 / h, a = n.x > i.x + r || n[aa] < i[aa] - r,
                    o = n.y > i.y + r || n.bottom < i[oa] - r, f = a && o;
                f ? (D(this[TR], kR), D(this._7p, kR)) : (j(this[TR], kR), j(this._7p, kR)), this._4t(a, n, i, f ? e - $W : e), this._4e(o, n, i, f ? s - $W : s)
            }
        }, _4t: function (t, i, n, e) {
            if (!t) return this._7p[wa][Uw] = X_, void (this._7p.scale = 0);
            var s = Math.min(i.x, n.x), h = Math.max(i[aa], n[aa]), r = h - s, a = e / r;
            this._7p[nf] = a, this._7p[wa][ed] = parseInt((i.x - s) * a) + eo, this._7p[wa][aa] = parseInt((h - i[aa]) * a) + eo, this._7p[wa][Uw] = ""
        }, _4e: function (t, i, n, e) {
            if (!t) return this._n66.style[Uw] = X_, void (this[TR][nf] = 0);
            var s = Math.min(i.y, n.y), h = Math.max(i[oa], n.bottom), r = h - s, a = e / r;
            this[TR][nf] = a, this[TR][wa].top = parseInt((i.y - s) * a) + eo, this[TR][wa][oa] = parseInt((h - i[oa]) * a) + eo, this[TR][wa].display = ""
        }
    }, ph[yr] = {
        shape: null, initialize: function () {
            T(this, ph, _O), this[iD](), OW[IC](this)
        }, _n65: function () {
            this[Em] = new CW(this[xk].path), this[OC](this[Em], 0), this.body = this[Em]
        }, invalidateShape: function () {
            this[Em][Lk](), this.invalidateRender()
        }, _$t: function (t, i, n) {
            var e = this[xC][MC](this, t, i, n);
            return e = pW[MC](this, t, i, n) || e, OW[MC](this, t, i, n) || e
        }, doValidate: function () {
            this[_m] && (this.image.data = this[Vo][wM], this.body[$f] = null != this._2m, this[_m][EM] = this._2m);
            var t = this[xk].$location, i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[nD] = !0), this.$x = i, this.$y = n, IW[yr].doValidate[hr](this) || e
        }, getLinkablePorts: function () {
            return this[Vo][eD]
        }, getLinkableBounds: function () {
            return this[sD]
        }, getDefaultPortPoint: function (t) {
            return ui(iq[iv], t || this[hD]())
        }, getPortPoint: function (t, i) {
            if (!t) return this[Od](i);
            i = i || this[hD]();
            var n;
            return i[qC] ? (n = ui(t, i.original), i[Fo] && (n = Pi(n.x, n.y, i[Fo], i[rD] || 0, i[aD] || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n.port = t, n
        }, getPortPoints: function () {
            var t = this.getLinkablePorts();
            if (t && Array[Br](t)) {
                var i = [], n = this[hD]();
                return t[qu](function (t) {
                    i.push(this[p_](t, n))
                }[Pr](this)), i
            }
        }
    }, E(ph, IW), K(ph.prototype, {
        path: {
            get: function () {
                return this[Vo][wM]
            }
        }, length: {
            get: function () {
                return this[Vo][rr]
            }
        }
    }), ph[yr].addPoint = function (t, i, n) {
        var e = this._ia(t, i), s = this[Vo], h = Cn(this.path, e.x, e.y, this[Vo][QL], n);
        return h ? void (s.pathSegments = h[OM]) : !1
    }, mh.prototype = {
        _mf: function () {
            this._j3[wa].visibility = $T
        }, _k8: function () {
            this._j3[wa][cm] = V_
        }, clear: function () {
            this[ld][to](), this[lT]()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this[ld][wl](t)
        }, _50: function (t) {
            oW[qc](this._j3, z_, t ? RT + t.join(Wr) + ")" : "")
        }, addDrawable: function (t, i) {
            if (i) {
                var n = {id: ++SY, drawable: t, scope: i};
                return this[ld].add(n), n
            }
            return t.id || (t.id = ++SY), this[ld].add(t), t
        }, removeDrawable: function (t) {
            return t.id ? void this[ld].remove(t) : this[ld][Ol](t)
        }, _n20: null, invalidate: function () {
            this[lT]()
        }, _n6u: function () {
            this._n6aseCanvas._68 || this._jn()
        }, _iv: function (t, i) {
            this._j3[uo](t, i)
        }, _jn: function () {
            var t = this._n6aseCanvas[sy], i = this.g;
            i._kz(), i.save(), this._n6aseCanvas._9g(i);
            for (var n = this[ld]._jr, e = 0, s = n.length; s > e; e++) i.save(), i[ef](), this._gn(i, n[e], t), i[wo]();
            i[wo]()
        }, _gn: function (t, i, n) {
            return i instanceof Function ? void i(t, n) : void (i[MR] instanceof Function && i[Av] && i[MR][hr](i[Av], t, n))
        }
    }, HY.ZOOM_ANIMATE = !0;
    var FW = function (t) {
        this._km = t
    };
    HY[OR] = 600, HY.ANIMATION_TYPE = iH[SR], FW[yr] = {
        _km: null, _ex: null, _gk: function (t, i, n) {
            this._ll();
            var e = Math.abs(t / 2), s = Math.abs(i / 2), h = Math.min(HY[OR], .6 * Math.max(e, s) * 1e3);
            if (10 > h) return !1;
            var r = function (t) {
                return -(2 * Math.pow(t, 1.5) - 3 * t)
            }, a = t * h / 3, o = i * h / 3;
            this._ko(this._km.tx + a, this._km.ty + o, 0, {duration: h, animationType: r}, n)
        }, _6h: function (t, i, n, e, s) {
            this._ex && this._ex._ll(), s && (this[IR] = !0, this._km.pauseRendering(!0)), this._4j(), this._ex = new eH(t, this, i, n), this._ex._6d = this._6d[Pr](this), this._ex._kp(e)
        }, _4j: function () {
            this._km[PR]()
        }, _6d: function () {
            this.__delayRender && (this._km.pauseRendering(!1), delete this[IR]), this._km.onAnimationEnd()
        }, _df: function () {
            return this._ex && this._ex._df()
        }, _ll: function () {
            this._ex && this._ex._ll()
        }, _it: function (t) {
            var i = this[AR] + (this[CR] - this[AR]) * t, n = this[LR] + (this[DR] - this[LR]) * t,
                e = this[jR] + (this._toScale - this._fromScale) * t;
            this._km[XT](i, n, e, this.toInt)
        }, _ko: function (t, i, n, e, s) {
            this._ll();
            var h = this._km, r = h[nf];
            if (0 >= n && (n = r), t != h.tx || i != h.ty || n != r) {
                var a, o, f;
                e instanceof Object && (a = e[RR], o = e[NR], f = e[BR]);
                var u = h.tx, c = h.ty;
                if (!a) if (n != r) {
                    var _ = n > r ? n / r : r / n;
                    _ = Math.log(_) / Math.log(1.3), a = 60 * _
                } else {
                    var d = ZY(t, i, u, c);
                    a = d / 2
                }
                o = o || HY[OR], f = f || HY[$R], a = Math.min(o, a), this[AR] = u, this[LR] = c, this._fromScale = r, this[CR] = t, this[DR] = i, this[FR] = n, this._6h(this._it, a, f, s, n != r)
            }
        }
    }, HY.INTERACTION_HANDLER_SIZE_TOUCH = 8, HY[GR] = 4, HY.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30, HY[zR] = 20;
    var GW = Math.PI / 4;
    wh[yr] = {
        element: null, _$l: !1, setCurrentElement: function (t, i) {
            this[YR] = t, i && this[qR]()
        }, onDataPropertyChange: function () {
        }, addDataPropertyChangeListener: function () {
            this._$l || (this._$l = !0, this[E_][HR][Kd](this._1i, this))
        }, removeDataPropertyChangeListener: function () {
            this._$l && (this._$l = !1, this[E_][HR].removeListener(this._1i, this))
        }, _1i: function (t) {
            this[YR] && t[pf] == this.element && this[UR](t)
        }, onElementRemoved: function (t, i) {
            this[YR] && (t == this[YR] || $(t) && m(t, this[YR])) && this[sg](i)
        }, onClear: function (t) {
            this.element && this[sg](t)
        }, destroy: function () {
            delete this[YR], this[WR](), this[VR](), this[XR] = null
        }, invalidate: function () {
            this[pd].invalidate()
        }, removeDrawable: function () {
            this._lmableId && (this[pd].removeDrawable(this[ZR]), delete this[ZR], this.invalidate())
        }, drawableList: null, addDrawable: function () {
            this._lmableId || (this[ZR] = this.topCanvas[KR](this.draw, this).id, this[dT]())
        }, isShowing: function () {
            return this[ZR]
        }, draw: function (t, i) {
            this[XR] && this.drawableList[qu](function (n) {
                n.draw(t, i)
            }), this[JR](t, i)
        }, doDraw: function () {
        }, escapable: !0, onkeydown: function (t, i) {
            this.escapable && 27 == t[uw] && (z(t), this[sg](i))
        }
    }, hH[QR] = wh, Th.prototype = {
        defaultCursor: xd, getInteractionInstances: function (t) {
            if (!this[tN]) return null;
            for (var i = [], n = 0, e = this[tN][rr]; e > n; n++) {
                var s = this[tN][n];
                s instanceof Function && (s = new s(t)), s.install instanceof Function && s[iN](t), i.push(s)
            }
            return i
        }
    }, kh[yr] = {
        _ey: null, _ka: null, destroy: function () {
            T(this, kh, sg, arguments), delete this._ka, delete this._9y, delete this._ey
        }, doDraw: function (t) {
            var i = this[Co];
            i && (t[ef](), i[qu](function (i) {
                this[nN](t, i)
            }, this), this.isClosePath && t[Nf](), this[eN](t))
        }, styleDraw: function (t) {
            var i = Mh(this[E_][Aj], this[sN](this[E_]));
            i[Zo] && (t[Zo] = i.lineWidth, i[rd] && (t.lineCap = i.lineCap), i[ad] && (t.lineJoin = i[ad]), i[vu] && (t[vu] = i[vu], t[bu] = i.lineDashOffset || 0), t[Ko] = i[Ko], t.stroke()), i[tf] && (t.fillStyle = i[tf], t[jo]())
        }, drawPoint: function (t, i, n) {
            if (n) return void t[rf](i.x, i.y);
            if (hH.isArray(i)) {
                var e = i[0], s = i[1];
                t.quadraticCurveTo(e.x, e.y, s.x, s.y)
            } else t.lineTo(i.x, i.y)
        }, setCurrentPoint: function (t) {
            this[hN] = t
        }, addPoint: function (t) {
            this._ka || (this._ka = [], this.addDrawable()), this._ka[lr](t), this[dT]()
        }
    }, E(kh, wh), K(kh[yr], {
        currentPoint: {
            get: function () {
                return this._9y
            }, set: function (t) {
                this._9y = t, this[dT]()
            }
        }, prevPoint: {
            get: function () {
                return this._ka && this._ka.length ? this._ka[this._ka[rr] - 1] : null
            }
        }, points: {
            get: function () {
                return this._9y && this._ka && this._ka.length ? this._ka[ur](this._9y) : void 0
            }
        }
    }), hH.DrawPathInteraction = kh, Oh[yr] = {
        _ix: function (t, i) {
            return this.start && t != this[rN] ? this._ez(t, i) : this._n2i(t, i)
        }, _n2i: function (t, i) {
            return t instanceof _W && i[zD](t)
        }, _ez: function (t, i) {
            return t instanceof _W && i[YD](t, this[rN])
        }, _n25: function (t, i, n, e) {
            if (this[aN]) return this[aN].nearestPoint(n, e);
            var s = i.getUI(t);
            return s && s[sD] ? s[sD][Zb] : t[vM]
        }, _d3: function (t) {
            this._kh && (clearTimeout(this._kh), delete this._kh), this._kh = setTimeout(function (t) {
                if (delete this._kh, this[rN] && this[hN]) {
                    var i = t.x - this.currentPoint.x, n = t.y - this[hN].y;
                    Math[Mo](i * i + n * n) * this[E_][nf] <= 2 && this[io](this[hN])
                }
            }[Pr](this, this.toLogicalPoint(t)), HY[Cb])
        }, destroy: function () {
            T(this, Oh, sg, arguments), this[rN] = null, this[oN] = null, this._kh && (clearTimeout(this._kh), delete this._kh), this._n2e = null, this[aN] = null
        }, ondblclick: function (t, i) {
            this[sg](i)
        }, finish: function (t, i, n, e) {
            var s;
            this._ka && this._ka[rr] >= 2 && (this._ka[LE](), s = new UY, l(this._ka, function (t) {
                if (hH.isArray(t)) {
                    var i = t[0], n = t[1];
                    s.add(new GH(rH[Fm], [i.x, i.y, n.x, n.y]))
                } else s.add(new GH(rH[$m], [t.x, t.y]))
            }, this)), i[fN](this[rN], n, t, s, this[oN], e), this.destroy(i)
        }, onstart: function (t, i) {
            if (this[rN]) {
                var n = t.getData(), e = i.toLogical(t);
                return this._ez(n, i) ? void this[uN](t, i, n, new Ih(i[Wy](n))[cN](e.x, e.y)[oD]) : void this[io](e)
            }
        }, startdrag: function (t, i) {
            // if (!this.start && !t.responded) {
            //     var n = t[Uy]();
            //     if (n && this[_N](n, i)) {
            //         t[dN] = !0, this[rN] = n;
            //         var e = i[VT](t), s = this._n25(n, i, e.x, e.y);
            //         this.startPort = s.port, this.addPoint(s)
            //     }
            // }
        }, ondrag: function (t, i) {
            // this[lN](t, i)
        }, enddrag: function (t, i) {
            // if (this.start) {
            //     var n = t.getData();
            //     if (this._ez(n, i)) {
            //         var e = i[VT](t);
            //         this.finish(t, i, n, new Ih(i[Wy](n)).nearestPoint(e.x, e.y).port)
            //     }
            // }
        }, onrelease: function (t, i) {
            Rq(t) && this[sg](i)
        }, _n2e: null, onmousemove: function (t, i) {
            // var n = i[VT](t), e = Sh(i, n.x, n.y, function (t) {
            //     return this._ix(t, i)
            // }[Pr](this));
            // e != this._n2e && (this._n2e = e, this[aN] = e ? new Ih(i[Wy](e)) : null, e ? (this.addDrawable(), this[XR] = [this._n4urrentPort]) : this[XR] = null, this[dT]());
            // var s;
            // this[aN] && (s = this._n4urrentPort.nearestPoint(n.x, n.y), this.invalidate()), this[rN] && (this[hN] = s || n, Rq(t) && this._d3(t, i))
        }, toLogicalPoint: function (t) {
            return this[E_].toLogical(t)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[UD](gW.EDGE_WIDTH),
                strokeStyle: this.graph[UD](gW[ZI]),
                lineDash: this[E_][UD](gW[nP]),
                lineDashOffset: this[E_][UD](gW[zA]),
                lineCap: this[E_][UD](gW[pS]),
                lineJoin: this[E_][UD](gW[xS])
            }
        }
    }, E(Oh, kh), hH[vN] = Oh, Ih[yr][bN] = function (t, i, n) {
        var e = 0;
        t.beginPath(), t.rect(n.x - e, n.y - e, n[ca] + 2 * e, n[_a] + 2 * e), t.lineWidth = 2 / i, t[Ko] = vD, t.stroke()
    }, Ih[yr].drawPoint = function (t, i, n) {
        var e = 4;
        t.beginPath();
        var s = e / i;
        t[rf](n.x + s, n.y), t.arc(n.x, n.y, s, 0, 2 * Math.PI, !1), t.lineWidth = 1 / i, n[yN] ? (t[Ko] = gN, t[tf] = pN) : (t[Ko] = vD, t.fillStyle = "rgba(255, 255, 255, 0.8)"), t.fill(), t[ff]()
    }, Ih[yr].draw = function (t, i) {
        var n = this[sf];
        this[bN](t, i, n), this[Co] && this[Co].forEach(function (n) {
            this[nN](t, i, n)
        }.bind(this))
    }, Ih[yr][cN] = function (t, i, n) {
        if (this[Co]) {
            n = n || 20, n *= n;
            var e, s = n;
            return this[Co][qu](function (h) {
                h[yN] && (h[yN] = !1);
                var r = h.x - t, a = h.y - i, o = r * r + a * a;
                n > o && s > o && (s = o, e = h)
            }), e && (e[yN] = !0), e || this[Md]
        }
        return this[Md]
    }, Ph[yr] = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[UD](gW[HO]),
                strokeStyle: this[E_][UD](gW[SA]),
                fillStyle: this[E_].getDefaultStyle(gW[KO])
            }
        }, finish: function (t, i) {
            if (this._ka && this._ka[rr]) {
                var n = this._ka, e = 0, s = 0, h = 0;
                n[qu](function (t) {
                    return hH.isArray(t) ? void t[qu](function () {
                        e += t.x, s += t.y, h++
                    }) : (e += t.x, s += t.y, void h++)
                }), e /= h, s /= h;
                var r = [];
                n[qu](function (t, i) {
                    if (0 == i) return void r.push(new GH(rH.SEGMENT_MOVE_TO, [t.x - e, t.y - s]));
                    if (hH[Br](t)) {
                        var n = t[0], h = t[1];
                        r[lr](new GH(rH.SEGMENT_QUAD_TO, [n.x - e, n.y - s, h.x - e, h.y - s]))
                    } else r.push(new GH(rH[$m], [t.x - e, t.y - s]))
                }), this[ro](t, r, e, s), this[sg](i)
            }
        }, startdrag: function (t) {
            t[dN] = !0
        }, createElement: function (t, i, n, e) {
            return this[E_][mN](t, i, n, e)
        }, onstart: function (t, i) {
            var n = i[VT](t);
            this._ey = n, this[io](n)
        }, onmousemove: function (t, i) {
            // this._ey && (this[hN] = i[VT](t))
        }, ondblclick: function (t, i) {
            if (this._ey) {
                if (this._ka[rr] < 3) return void this.destroy(i);
                delete this._ka[this._ka[rr] - 1], this[uN](t, i)
            }
        }, isClosePath: !0
    }, E(Ph, kh), hH[xN] = Ph, Ah[yr] = {
        isClosePath: !1, createElement: function (t, i, n, e) {
            return this[E_][EN](t, i, n, e)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: LW[gW[HO]],
                strokeStyle: LW[gW[SA]],
                lineDash: this.graph.getDefaultStyle(gW[PA]),
                lineDashOffset: this[E_][UD](gW[ZO]),
                lineCap: this[E_][UD](gW[pS]),
                lineJoin: this.graph.getDefaultStyle(gW[xS])
            }
        }
    }, E(Ah, Ph), hH[wN] = Ah, Ch[yr] = {
        destroy: function (t) {
            T(this, Ch, sg, arguments), t[zj] = "", this.start = null
        }, doDraw: function (t) {
            if (this[rN] && this.currentPoint) {
                var i, n;
                this[E_][Aj] && (i = this[E_][Aj].uiClass, n = this[E_].interactionProperties[C_]), i = i || this[E_][Pj] || hH.EdgeUI, n = n || this[E_].edgeType;
                var e = i[TN] || hH.EdgeUI[TN], s = this.graph[Wy](this[rN]);
                s && s[sD] && (s = s[sD][Zb], t[ef](), e(t, s, this[hN], n), this[eN](t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof _W && i.canLinkFrom(t)
        }, canLinkTo: function (t, i) {
            return t instanceof _W && i[YD](t, this.start)
        }, startdrag: function (t, i) {
            // var n = t[Uy]();
            // this.canLinkFrom(n, i) && (t[dN] = !0, this.start = n, i[zj] = gg, this[KR]())
        }, ondrag: function (t, i) {
            // this.start && (hH.stopEvent(t), this[hN] = i[VT](t), this[dT]())
        }, enddrag: function (t, i) {
            // if (this[rN]) {
            //     this.invalidate();
            //     var n = t.getData();
            //     this[YD](n, i) && i[fN](this[rN], n, t), this[sg](i)
            // }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[E_][UD](gW[VI]),
                strokeStyle: this[E_].getDefaultStyle(gW[ZI]),
                lineDash: this[E_][UD](gW[nP]),
                lineDashOffset: this[E_][UD](gW[zA]),
                lineCap: this[E_].getDefaultStyle(gW[pS]),
                lineJoin: this[E_][UD](gW.LINE_JOIN)
            }
        }
    }, E(Ch, kh), hH[kN] = Ch, HY[MN] = !1, Bh.prototype = {
        html: null, createHTML: function () {
            var t = i[ro](ON);
            t[Yu] = SN, t[wa][fu] = hT, t[wa][IN] = Zb, t.style.border = PN, t[wa][zM] = AN, t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style.display = X_, t.style.overflow = V_;
            var n = this;
            return t.oninput = function (t) {
                n.onValueChange(t)
            }, t.onkeydown = function (t) {
                return 27 == t.keyCode ? void n[CN]() : void 0
            }, t.onkeypress = function (i) {
                if (13 == i.keyCode || 10 == i[uw]) {
                    if (i[$r](), i[fw] || i[Ga] || i[ow]) return Rh(t, xo), void n[LN](i);
                    n[DN]()
                }
            }, i[_m].appendChild(t), t
        }, setText: function (t, i) {
            this[pj][Or] = t || "", i && (this[pj][wa][Ad] = i), Nh(this[pj]), this[jN](this.html)
        }, onSizeChange: function (t) {
            var i = (t[Sd], t[Id], jh(t));
            return t[wa][ca] = i[ca] + 30 + eo, t.style[_a] = i[_a] + 10 + eo, i
        }, onValueChange: function (t) {
            var i = t[cd];
            this.onSizeChange(i), i[wa][ed] = i.x - i[Sd] / 2 + eo
        }, onClickOnWindow: function (t) {
            t.target != this.html && (HY[MN] ? this[DN]() : this[CN]())
        }, startEdit: function (i, n, e, s, h) {
            this[pj] || (this[pj] = this.createHTML()), this[RN] || (this.stopEditWhenClickOnWindow = function (t) {
                this[NN](t)
            }[Pr](this)), t[Eb](by, this.stopEditWhenClickOnWindow, !0), this[Gc] = h, this[pj].x = i, this[pj].y = n, this.html[wa].display = iR, Dh(this[pj], i, n), this[BN](e, s || 10), Dh(this.html, i, n)
        }, isEditing: function () {
            return X_ != this.html[wa].display
        }, cancelEdit: function () {
            this.stopEdit(!0)
        }, stopEdit: function (i) {
            if (this[$N]()) {
                t[wb](by, this.stopEditWhenClickOnWindow);
                var n = this[pj].value;
                !i && this[Gc] && this[Gc](n), this[pj].style.display = X_, this[pj].value = null, this.callback = null
            }
        }, destroy: function () {
            this.html && i[_m][ab](this[pj])
        }
    }, hH[FN] = Bh;
    var zW = function (t) {
        this.graph = t
    };
    zW[yr] = {
        destroy: function (t) {
            t[GN] && (t.labelEditor[sg](), delete t.labelEditor)
        }, ondblclick: function (t, i) {
            var n = t[Uy]();
            if (n) {
                if (n[zN] !== !1) {
                    if (i.editable && i[YN](n)) {
                        var e = i.hitTest(t);
                        if (e instanceof AW && e[XL] !== !1) {
                            var s = i.labelEditor;
                            s || (i[GN] = s = new Bh);
                            var h = e.getBounds();
                            return h = i.toCanvas(h.x + h.width / 2, h.y + h[_a] / 2), h = Lh(h.x, h.y, i.html), void i[qN](n, e, s, h)
                        }
                    }
                    var r = n instanceof vW, a = n instanceof cW && n.hasEdgeBundle();
                    return n._3u && (Ti(t) || !r && !a) ? void (i.currentSubNetwork = n) : r ? (n[Ak] = !n.expanded, void this[E_].onInteractionEvent(new Wh(this[E_], Wh[CM], t, n))) : void (a && this[E_][bj](n) && this[E_][RD](new Wh(this[E_], Wh.EDGE_BUNDLE, t, n)))
                }
            } else {
                if (i[PM]) return void i.upSubNetwork();
                if (i.enableDoubleClickToOverview) {
                    var o = i[HN] || 1;
                    Math.abs(i[nf] - o) < 1e-4 ? i[UN]() : i[sj](o)
                }
            }
        }
    };
    var YW = function (t) {
        this[E_] = t
    };
    YW[yr] = {
        onkeydown: function (t, i) {
            if (i.editable) {
                var n = t.keyCode;
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void F(t);
                if (Ti(t)) {
                    if (67 == n) ; else if (86 == n) ; else if (90 == n) ; else if (89 != n) return;
                    F(t)
                }
            }
        }
    }, hH[WN] = YW;
    var qW = function (t) {
        this.graph = t
    };
    qW[yr] = {
        onkeydown: function (i, n) {
            if (i[Fa] && 83 == i[uw]) {
                var e = n.exportImage(n.scale, n[VD]), s = t[Xa](), h = s[VN];
                h[XN] = ZN + e[ca] + KN + e[_a];
                var r = h[ro]($_);
                r.src = e.data, h[_m].appendChild(r), F(i)
            }
        }
    };
    var HW = function (t) {
        this.graph = t
    };
    HW[yr] = {
        destroy: function () {
            delete this[JN], delete this.currentDraggingElement
        }, _24: function (t) {
            var i = new UY;
            return t[_b][qu](function (n) {
                t[lj](n) && t[bd](n) && i.add(n)
            }, this), i
        }, onstart: function (t, i) {
            this[QN] && this[sg](i)
        }, startdrag: function (t, i) {
            // if (!(t.responded || t[ia] && 1 != t.touches[rr])) {
            //     var n = t[Uy]();
            //     if (!n || !i[tB](n) || !i[lj](n)) return void this.destroy(i);
            //     t[dN] = !0, this[QN] = n, this.draggingElements = this._24(i);
            //     var e = new Wh(i, Wh[iB], t, this[QN], this[JN][Zd]);
            //     return i.beforeInteractionEvent(e) === !1 ? void this[sg](i) : void i.onInteractionEvent(e)
            // }
        }, ondrag: function (t, i) {
            // if (this[QN]) {
            //     if (t[ia] && 1 != t.touches[rr]) return void this.enddrag(t, i);
            //     z(t);
            //     var n = t.dx, e = t.dy, s = i.scale;
            //     n /= s, e /= s;
            //     var h = new Wh(i, Wh[nB], t, this[QN], this[JN][Zd]);
            //     i[eB](this.draggingElements.datas, n, e), i[RD](h)
            // }
        }, enddrag: function (t, i) {
            // if (this[QN]) {
            //     if (this[JN] && this.draggingElements.length) {
            //         if (t[ow]) {
            //             var n, e = i[VT](t), s = e.x, h = e.y;
            //             i[Ed](function (t) {
            //                 var i = t.data;
            //                 if (!this[JN][I_](i) && t[wd].intersectsPoint(s - t.x, h - t.y) && t[P_](s, h, 1)) {
            //                     if (i instanceof hH.Edge) {
            //                         if (!i[Ik]) return;
            //                         for (var e = this[JN].length; e-- > 0;) {
            //                             var r = this[JN].get(e);
            //                             if (r instanceof hH[MD] && r.linkedWith(i)) return
            //                         }
            //                         return n = i, !1
            //                     }
            //                     return (i[Ik] || i._i4() && i[Ak]) && (n = i), !1
            //                 }
            //             }, this), n && this[JN][qu](function (t) {
            //                 for (var i = t.parent; i;) {
            //                     if (this[JN][I_](i)) return;
            //                     i = i[Hu]
            //                 }
            //                 t[Hu] = n
            //             }, this)
            //         }
            //         var r = new Wh(i, Wh[sB], t, this[QN], this[JN][Zd]);
            //         i.onInteractionEvent(r)
            //     }
            //     this.destroy(i)
            // }
        }, onpinch: function (t, i) {
            // this[QN] && this.enddrag(t, i)
        }, step: 1, onkeydown: function (t, i) {
            if (Ti(t)) {
                var n, e;
                if (37 == t.keyCode ? n = -1 : 39 == t[uw] ? n = 1 : 38 == t[uw] ? e = -1 : 40 == t[uw] && (e = 1), n || e) {
                    var s = this._24(i).datas;
                    if (0 != s[rr]) {
                        F(t), n = n || 0, e = e || 0;
                        var h = this.step / i[nf], r = new Wh(i, Wh[sB], t, null, s);
                        i[eB](s, n * h, e * h), i[RD](r)
                    }
                }
            }
        }
    };
    var UW = function (t) {
        this[E_] = t
    };
    UW[yr] = {
        onkeydown: function (t, i) {
            Ti(t) || (37 == t[uw] ? (this._5e(i, 1, 0), F(t)) : 39 == t.keyCode ? (this._5e(i, -1, 0), F(t)) : 38 == t[uw] ? (this._5e(i, 0, 1), F(t)) : 40 == t.keyCode && (this._5e(i, 0, -1), F(t)))
        }, _5e: function (t, i, n) {
            t._9u(i, n)
        }, onstart: function (t, i) {
            this._kp && this[sg](i)
        }, _kp: !1, startdrag: function (t, i) {
            // if (!t[dN]) {
            //     i[hB](), t[dN] = !0, this._kp = !0, i.cursor = Xq;
            //     var n = new Wh(i, Wh[rB], t);
            //     i[RD](n)
            // }
        }, ondrag: function (t, i) {
            // this._kp && i.translate(t.dx || 0, t.dy || 0)
        }, enddrag: function (t, i) {
            // if (this._kp) {
            //     if (i[wR] !== !1) {
            //         var n = t.vx, e = t.vy;
            //         (Math.abs(n) > .1 || Math.abs(e) > .1) && i._9u(n, e)
            //     }
            //     this[sg](i);
            //     var s = new Wh(i, Wh[aB], t);
            //     i[RD](s)
            // }
        }, startpinch: function (t, i) {
            // i[oB](!0)
        }, onpinch: function (t, i) {
            // this._kp = !0;
            // var n = t.dScale;
            // if (n) {
            //     var e = i[TD](t[Zb]);
            //     i.zoomAt(n, e.x, e.y, !1)
            // }
        }, endpinch: function (t, i) {
            // i.pauseRendering(!1)
        }, destroy: function (t) {
            this._kp = !1, t[zj] = null
        }
    }, $h[yr] = {
        onDataPropertyChange: function () {
            this[E_].callLater(function () {
                this._k3()
            }, this)
        }, destroy: function () {
            this.graph[zj] = null, this.element && delete this[YR]._editting, this[fB] = !1, delete this._8s, delete this._9y, delete this[uB], T(this, $h, sg, arguments)
        }, _8s: null, _55: function (t) {
            this._8s = t, this[dT]()
        }, isEndPointEditable: function (t, i) {
            return this.graph[cB](t, i)
        }, drawPoint: function (t, i, n) {
            (!i.isEndPoint || this.isEndPointEditable(this[YR], i[_B])) && (t[ef](), i[dB] ? t[sf](i.x - this[Yd] / n, i.y - this.handlerSize / n, this.handlerSize / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this.handlerSize / n, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t.lineDash = [], t[Ko] = od, t.fillStyle = "rgba(255, 255, 0, 0.8)", t[ff](), t.fill())
        }, _fm: function (t, i, n, e) {
            e ? t[rf](i, n) : t.lineTo(i, n)
        }, doDraw: function (t, i) {
            this[lB](t, i)
        }, drawLine: function (t, i) {
            if (this._8s && this._8s[rr]) {
                var n = this._8s;
                t[vo]();
                var e = this[YR] instanceof dW;
                e && (t[bo](this[YR].x, this[YR].y), this.element.rotate && t[Fo](this.element.rotate));
                var s, h = [];
                t[ef]();
                var r = n[rr];
                n[qu](function (i, n) {
                    if (i.type != rH.SEGMENT_CLOSE) for (var e = !n || n == r - 1, a = 0, o = i[Co]; a + 1 < o[rr];) {
                        var f = o[a], u = o[a + 1], c = {x: f, y: u, isControlPoint: this._75(i, a)};
                        e && (c.isEndPoint = !0, c[_B] = 0 == n), h.push(c), this._fm(t, c.x, c.y, null == s), s = c, a += 2
                    }
                }, this), t[Zo] = 1 / i, t[vu] = [2 / i, 3 / i], t[Ko] = vB, t[ff](), h.forEach(function (n, e) {
                    this[nN](t, n, i, e)
                }, this), t[wo]()
            }
        }, invalidate: function () {
            this[pd][dT]()
        }, _3d: function (t) {
            if (this[YR] != t && (this[YR] && this[sg](), t && this[YN](t))) {
                var i = this._61(t, this[E_]);
                i && (this.setCurrentElement(t, !0), t[bB] = !0, this[uB] = !0, this._55(i), this[KR]())
            }
        }, _k3: function () {
            if (this[yB]() && this[YR]) {
                var t = this._61(this[YR], this.graph);
                return t ? void this._55(t) : void this[sg](this[E_])
            }
        }, _61: function (t, i) {
            if (i.isEditable(t)) {
                var n = t[zL] || [];
                n instanceof UY && (n = n[Il]());
                var e = i[Wy](t);
                if (e instanceof hH[gB]) {
                    var s = e[w_](i[Wy](t[Zu])), h = e.getEndPointBounds(i[Wy](t.toAgent)), r = s.center, a = h.center,
                        o = e[t_](gW[sP]), f = e.getStyle(gW[pB]);
                    o && (r.x += o.x || 0, r.y += o.y || 0), f && (a.x += f.x || 0, a.y += f.y || 0), n[fr](0, 0, new hH.PathSegment(rH[mB], [r.x, r.y])), n.push(new hH[Hm](rH[mB], [a.x, a.y]))
                }
                return n
            }
        }, _ia: function (t, i) {
            t -= this[YR].x, i -= this.element.y;
            var n = {x: t, y: i};
            return this.element[Fo] && Zs(n, -this[YR].rotate), n
        }, isPointAddable: function () {
            return !0
        }, isPointRemovable: function () {
            return !0
        }, onclick: function (t, i) {
            if (i[XL] && t[fw] && this[YR]) {
                var n = this._fs(t, i);
                if (n && n[dB] && this.isPointRemovable(this[YR], n, i) !== !1) {
                    if (n[wf] >= 0) {
                        this[YR][xB](n[wf]);
                        var e = new Wh(i, Wh[EB], t, this[YR]);
                        e[wB] = n, i.onInteractionEvent(e)
                    }
                } else if (this.element == t.getData() && this[TB](this.element, i) !== !1) {
                    var s = i[VT](t), h = i[Wy](this[YR]);
                    if (h.addPoint(s.x, s.y, this.handlerSize || 2) !== !1) {
                        var e = new Wh(i, Wh[kB], t, this[YR]);
                        e[wB] = s, i[RD](e)
                    }
                }
            }
        }, isEditable: function (t) {
            return this[E_][YN](t) && (t instanceof dW || t instanceof cW && (!t[Qu]() || t[T_]()))
        }, ondblclick: function (t, i) {
            if (!i[XL]) return void (this.element && this.destroy(i));
            var n = t.getData();
            return !n || n == this[YR] || n[bB] ? void this[sg](i) : void this._3d(n)
        }, onstart: function (t, i) {
            if (this[fB] = !0, !i.editable) return void (this[YR] && this[sg](i));
            if (!t[dN]) {
                if (this.element && this._fs(t, i)) return void (t.responded = !0);
                var n = t[Uy]();
                return n && i.isResizable(n) && n instanceof dW ? void (this.element && n != this[YR] && this[sg]()) : void this._3d(n)
            }
        }, onrelease: function () {
            this._mousePressed = !1, this[YR] && (this._n4anEdit = !0)
        }, _9y: null, _fs: function (t, i) {
            var n = i[VT](t);
            this.element instanceof dW && (n = this._ia(n.x, n.y));
            var e, s = i[nf], h = this[Yd] / s, r = this._8s, a = r.length, o = this.element instanceof hH.Edge;
            return r[qu](function (t, s) {
                for (var f = 0, u = t[Co]; f + 1 < u[rr];) {
                    var c = u[f], _ = u[f + 1], d = ZY(n.x, n.y, c, _);
                    if (h > d) {
                        if (e = {
                            oldPoints: u.slice(0),
                            segment: t,
                            index: s,
                            pointIndex: f
                        }, o && (e[wf] -= 1), o && !Fh(t) && (0 == s || s == r[rr] - 1)) {
                            e[MB] = !0;
                            var l = 0 == s;
                            e[_B] = l;
                            var v = l ? hH[Oj][sP] : hH[Oj][pB], b = i[t_](this[YR], v) || {};
                            e[OB] = [b.x || 0, b.y || 0]
                        }
                        return this._75(t, f) && (e[dB] = !0, s > 0 && (e[SB] = r instanceof UY ? r[cb](s - 1) : r[s - 1]), a > s + 1 && (e[IB] = r instanceof UY ? r[cb](s + 1) : r[s + 1], e[IB][Co] && (e.oldNextPoints = e[IB][Co][or](0)))), !1
                    }
                    f += 2
                }
            }, this), e && e[MB] && !this[cB](this.element, e[_B]) ? void 0 : e
        }, _75: function (t, i) {
            return i == t[Co][rr] - 2
        }, startdrag: function (t, i) {
            // if (this[YR] && this[uB] && (this._9y = this._fs(t, i), this._9y)) {
            //     this[VR](), t.responded = !0;
            //     var n = new Wh(i, Wh.POINT_MOVE_START, t, this.element);
            //     n[wB] = this._9y, i.onInteractionEvent(n)
            // }
        }, onkeyup: function (t, i) {
            this._mousePressed && 16 != !t.keyCode && this.element && this._9y && this._9y.delta && this[PB](this._9y[AB].x, this._9y[AB].y, i, t, !1)
        }, onkeydown: function (t, i) {
            T(this, $h, CB, arguments), this[fB] && this.element && this._9y && t[ow] && this._9y[AB] && this[PB](this._9y[AB].x, this._9y[AB].y, i, t, !0)
        }, _n4x: function (t, i, n, e, s) {
            var h = this._9y, r = this.element, a = h.oldPoints, o = h[LB];
            if (h[MB]) {
                var f = h[_B] ? hH[Oj][sP] : hH[Oj][pB], u = {x: a[0] + t, y: a[1] + i};
                r[qc](f, u);
                var c = new Wh(n, Wh[DB], e, r);
                return c.point = h, void n[RD](c)
            }
            if (s && h[dB]) {
                var _ = {x: a[a[rr] - 2] + t, y: a[a.length - 1] + i}, d = h.prevSegment, l = h[IB], v = 20 / n[nf],
                    b = Number.MAX_VALUE, y = b, g = b, p = b;
                d && (d = d[Bo], b = Math.abs(_.x - d.x), g = Math.abs(_.y - d.y)), l && (l = l[Bo], y = Math.abs(_.x - l.x), p = Math.abs(_.y - l.y)), v > b && y > b ? t += d.x - _.x : v > y && b > y && (t += l.x - _.x), v > g && p > g ? i += d.y - _.y : v > p && g > p && (i += l.y - _.y)
            }
            if (h[dB] && Fh(o)) {
                for (var m = o.points[rr] - 4; m < o[Co][rr];) {
                    var x = a[m] + t, E = a[m + 1] + i;
                    o[Co][m] = x, o[Co][m + 1] = E, m += 2
                }
                if (h[IB] && Fh(h[IB])) {
                    var w = h[jB], x = w[0] + t, E = w[1] + i;
                    h.nextSegment.points[0] = x, h[IB].points[1] = E
                }
            } else {
                var m = h.pointIndex, x = a[m] + t, E = a[m + 1] + i;
                o[Co][m] = x, o[Co][m + 1] = E
            }
            r[oM]();
            var c = new Wh(n, Wh[DB], e, r);
            c[wB] = h, n[RD](c)
        }, ondrag: function (t, i) {
            // if (this.element && this._9y) {
            //     var n = this._9y, e = this[YR], s = t[fg], h = t[RB], r = i[nf];
            //     if (s /= r, h /= r, e.rotate) {
            //         var a = {x: s, y: h};
            //         Zs(a, -e[Fo]), s = a.x, h = a.y
            //     }
            //     n[AB] = {x: s, y: h}, this[PB](s, h, i, t, t.shiftKey)
            // }
        }, enddrag: function (t, i) {
            // if (this.element && this._9y) {
            //     this[KR](), this._k3();
            //     var n = new Wh(i, Wh[NB], t, this[YR]);
            //     n[wB] = this._9y, i[RD](n)
            // }
        }, onmousemove: function (t, i) {
            // this[YR] && (i.cursor = t[fw] && (this._fs(t, i) || this.element == t[Uy]()) ? "crosshair" : null)
        }
    }, E($h, wh), HY[BB] = 1, HY[$B] = X(3724541951), HY.SELECTION_RECTANGLE_FILL_COLOR = X(1430753245), rH.RECTANGLE_SELECTION_MODE_INTERSECT = FB, rH[GB] = zB, HY[YB] = rH[qB];
    var WW = function (t) {
        this[E_] = t, this.topCanvas = t[pd]
    };
    WW[yr] = {
        onstart: function (t, i) {
            this._kp && this[sg](i)
        }, startdrag: function (t, i) {
            // t.responded || (t[dN] = !0, this._kp = i[VT](t), i.cursor = gg, this._11Id = this[pd][KR](this._11, this).id)
        }, ondrag: function (t, i) {
            // if (this._kp) {
            //     z(t), this[HB] = i.toLogical(t), this.invalidate();
            //     var n = new Wh(i, Wh.SELECT_START, t, i[_b]);
            //     i[RD](n)
            // }
        }, enddrag: function (t, i) {
            // if (this._kp) {
            //     this[UB] && (clearTimeout(this[UB]), this[UB] = null), this._fu(!0), this.destroy(i);
            //     var n = new Wh(i, Wh.SELECT_END, t, i[_b]);
            //     i[RD](n)
            // }
        }, onpinch: function (t, i) {
            // this._kp && this.enddrag(t, i)
        }, _11: function (t, i) {
            t[Ko] = HY[$B], t[tf] = HY[WB], t[Zo] = HY[BB] / i;
            var n = this._kp.x, e = this._kp.y;
            t[sf](n, e, this[HB].x - n, this[HB].y - e), t[jo](), t[ff]()
        }, invalidate: function () {
            return this[LM] ? void this[pd][dT]() : (this[LM] = !0, void (this._fuTimer = setTimeout(this._fu.bind(this), 100)))
        }, _fu: function (t) {
            if (this.invalidateFlag = !1, this[UB] = null, !this._kp || LY && !t) return void this.topCanvas[dT]();
            var i = Math.min(this._kp.x, this[HB].x), n = Math.min(this._kp.y, this._end.y),
                e = Math.abs(this._kp.x - this[HB].x), s = Math.abs(this._kp.y - this[HB].y);
            if (!e || !s) return void this.graph[_b].clear();
            var h = [], r = this[E_].scale, a = this[E_][VB];
            if (this.graph[XB](function (t) {
                t._i2 && this[E_][yd](t[xk]) && this.inRectangle(i, n, e, s, t, r, a) && h[lr](t[Vo])
            }[Pr](this)), this[E_].selectionModel.set(h), this[pd][dT](), !t) {
                var o = new Wh(this[E_], Wh[ZB], null, this[E_].selectionModel);
                this[E_].onInteractionEvent(o)
            }
        }, inRectangle: function (t, i, n, e, s, h, r) {
            var a = s[Lo]();
            return ai(t, i, n, e, a.x, a.y, a[ca], a.height) ? !0 : (r = r || HY[YB], r == rH[GB] ? !1 : Gn(t, i, n, e, s, h))
        }, destroy: function (t) {
            this._kp = null, t[zj] = null, this[KB] && (this[pd][VR](this[KB]), delete this[KB], this[pd][dT]())
        }
    };
    var VW = S({
        "super": WW, onstart: null, startdrag: null, ondrag: null, enddrag: null, accept: function (t, i, n) {
            return n[JB] !== !1
        }, oncontextmenu: function (t, i) {
            i[QB] || z(t)
        }, onstart2: function () {
            WW[yr][Dy].apply(this, arguments)
        }, startdrag2: function (t, i) {
            t[dN] || (i[QB] && i[QB][t$] instanceof Function && i.popupmenu[t$](), WW[yr].startdrag[mr](this, arguments))
        }, ondrag2: function () {
            WW[yr][Fy][mr](this, arguments)
        }, enddrag2: function () {
            WW.prototype[qy][mr](this, arguments)
        }
    }), GW = Math.PI / 4;
    Gh.prototype = {
        _ew: !1, _ev: !1, onDataPropertyChange: function () {
            this[E_][XD](function () {
                this[qo]()
            }, this)
        }, ondblclick: function (t, i) {
            this[YR] && this[sg](i)
        }, destroy: function (t) {
            t[zj] = null, delete this[HC], delete this[$C], delete this._9y, delete this[uB], delete this._ka, delete this[i$], delete this._ev, delete this._ew, delete this[n$], T(this, Gh, sg, arguments)
        }, _n4p: null, _ka: null, _8o: function (t) {
            this[HC] = t;
            var i = this._n4p.x, n = this._n4p.y, e = this._n4p[ca], s = this._n4p[_a];
            if (this[YR] instanceof vW && this[YR][Ak], this._ev) {
                var h = [];
                h[lr]({x: i, y: n, p: iq.LEFT_TOP, cursor: e$, rotate: 5 * GW}), h[lr]({
                    x: i + e / 2,
                    y: n,
                    p: iq[tv],
                    cursor: s$,
                    rotate: 6 * GW
                }), h[lr]({x: i + e, y: n, p: iq[hv], cursor: qd, rotate: 7 * GW}), h[lr]({
                    x: i,
                    y: n + s / 2,
                    p: iq.LEFT_MIDDLE,
                    cursor: h$,
                    rotate: 4 * GW
                }), h[lr]({x: i, y: n + s, p: iq[Ql], cursor: qd, rotate: 3 * GW}), h[lr]({
                    x: i + e,
                    y: n + s / 2,
                    p: iq[rv],
                    cursor: h$,
                    rotate: 0
                }), h[lr]({x: i + e / 2, y: n + s, p: iq[nv], cursor: s$, rotate: 2 * GW}), h.push({
                    x: i + e,
                    y: n + s,
                    p: iq[ev],
                    cursor: e$,
                    rotate: GW
                }), this._ka = h
            }
            this._rotatePoint = this._ew ? {x: i + e / 2, y: n, cursor: Zq} : null, this[dT]()
        }, _et: function (t, i, n, e) {
            t[ef]();
            var s = (this[Yd] - 1) / e;
            t.rect(i - s, n - s, 2 * s, 2 * s), t.lineWidth = 1 / e, t.lineDash = [], t[Ko] = od, t.fillStyle = "rgba(255, 255, 255, 0.8)", t.stroke(), t.fill()
        }, _5a: function (t, i, n, e, s, h) {
            s = s || this[Yd], h = h || r$, t[ef](), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[Zo] = 1 / e, t.lineDash = [], t[Ko] = od, t[tf] = h, t[ff](), t.fill()
        }, _ia: function (t, i) {
            t -= this[YR].x, i -= this[YR].y;
            var n = {x: t, y: i};
            return this[YR][Fo] && Zs(n, -this[YR][Fo]), n
        }, doDraw: function (t, i) {
            if (this[HC]) {
                if (t[vo](), t.translate(this[YR].x, this[YR].y), this[YR][Fo] && t[Fo](this.element.rotate), this[i$]) {
                    this._5a(t, 0, 0, i, 3, a$);
                    var n = this._rotatePoint.x, e = this[i$].y - this[o$] / i;
                    t[ef](), t.moveTo(n, this[i$].y), t[af](n, e), t.lineWidth = 1 / i, t[Ko] = vB, t.stroke(), this._5a(t, n, e, i)
                }
                if (this._ka) {
                    var s = this[HC].x, h = this[HC].y, r = this._n4p[ca], a = this[HC][_a];
                    t[ef](), t.rect(s, h, r, a), t[Zo] = 1 / i, t[vu] = [2 / i, 3 / i], t.strokeStyle = vB, t[ff](), l(this._ka, function (n) {
                        this._et(t, n.x, n.y, i)
                    }, this)
                }
                t[wo]()
            }
        }, _n21: function () {
            if (this[yB]() && this.element) {
                var t = this[E_][Wy](this[YR]);
                this._n6ody = t[_m];
                var i = zh(this[$C], this[$C]._jd), n = zh(this[$C], this[$C]._7v);
                this[n$] = new tq(i.y - n.y, i.x - n.x, n[oa] - i[oa], n.right - i[aa]), this._8o(n)
            }
        }, _n2q: function (t, i) {
            return i[f$](t)
        }, _n2t: function (t, i) {
            return !(t instanceof vW && t[Ak] || !i[u$](t))
        }, _n4m: function (t, i) {
            return t instanceof _W && i.isEditable(t)
        }, onstart: function (t, i) {
            if (!i.editable) return void (this.element && this[sg](i));
            if (!t.responded) {
                var n = i.getUI(t), e = t[Uy]();
                if (e != this[YR]) {
                    if (this[YR]) {
                        if (this._fs(t, i)) return void (t[dN] = !0);
                        this[sg](i)
                    }
                    if (e && !e[bB] && this._n4m(e, i)) {
                        var s = this[c$](e, i, n), h = this[_$](e, i, n);
                        (s || h) && (this[d$](e, !0), this[KR](), this._ev = s, this._ew = h, this._n21())
                    }
                }
            }
        }, onrelease: function (t, i) {
            this[YR] && (this[uB] = !0, this[KR](), i[XD](function () {
                this[qo]()
            }, this))
        }, _9y: null, _fs: function (t, i) {
            var n = i.toLogical(t);
            n = this._ia(n.x, n.y);
            var e = i[nf], s = this[Yd] / e;
            if (this[i$]) {
                var h = this[i$].x, r = this[i$].y - this[o$] / e;
                if (ZY(n.x, n.y, h, r) < s) return this[i$]
            }
            if (this._ka && this._ka[rr]) {
                var a;
                return l(this._ka, function (t) {
                    return ZY(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        }, onmousemove: function (t, i) {
            // if (this[YR]) {
            //     var n = this._fs(t, i);
            //     if (!n) return void (i[zj] = null);
            //     if (n != this[i$] && this[YR][Fo]) {
            //         var e = n[Fo] + this.element[Fo];
            //         return void (i[zj] = Yh(e))
            //     }
            //     i[zj] = n[zj]
            // }
        }, startdrag: function (t, i) {
            // if (this[YR] && (this.removeDrawable(), this._n4anEdit && (this._9y = this._fs(t, i), this._9y))) {
            //     if (t[dN] = !0, this._9y == this[i$]) {
            //         this._9y.start = i[VT](t), this._9y.rotate = this.element[Fo] || 0;
            //         var n = new Wh(i, Wh[l$], t, this.element);
            //         return n[Or] = this.element[Fo], void i[RD](n)
            //     }
            //     var n = new Wh(i, Wh[v$], t, this[YR]);
            //     n[wB] = this._9y, i.onInteractionEvent(n)
            // }
        }, _7d: function (t, i, n, e, s, h) {
            var r = this._n4p, a = r.x, o = r.y, f = r[ca], u = r[_a];
            if (h) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var _ = t[wM][OM], d = e / f, l = s / u, v = -a * d + i, b = -o * l + n;
            _[qu](function (t) {
                if (t[$o] != rH[Ym]) {
                    var e = t[Co];
                    if (e && e.length) for (var s = 0, h = e[rr]; h > s; s += 2) {
                        var r = e[s], f = e[s + 1];
                        e[s] = (r - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
                    }
                }
            }), this._n4p.set(i - v, n - b, e, s), t[dj](t.x + v, t.y + b), t[oM]()
        }, _9x: function (t, i, n, e, s) {
            this[HC].set(i, n, e, s), t[FM] = {x: i, y: n, width: e, height: s}
        }, _4p: function (t, i, n, e, s) {
            if (this.element instanceof vW && this[YR][Ak]) return this._9x(this.element, t, i, n, e, s);
            if (this.element instanceof dW) return this._7d(this[YR], t, i, n, e, s);
            var h = this[$C] instanceof AW;
            if (!h && s) {
                var r = this[HC], a = this[$C][b$], o = n != r.width;
                o ? e = n * a[_a] / a[ca] : n = e * a[ca] / a[_a]
            }
            var f = this[YR][EM], u = new JY(n - this[n$].left - this._insets[aa], e - this[n$].top - this._insets[oa]);
            if (u[ca] < 1 && (n = this[n$].left + this[n$].right + 1, u[ca] = 1), u[_a] < 1 && (e = this[n$].top + this[n$].bottom + 1, u[_a] = 1), h ? this[YR][qc](gW[_I], u) : this.element[vT] = u, f) {
                var c = ci(f, n, e), _ = c.x + t - (this[$C][QM] || 0), d = c.y + i - (this[$C][tO] || 0);
                if (this[HC].set(t - _, i - d, n, e), this.element[Fo]) {
                    var c = Zs({x: _, y: d}, this[YR][Fo]);
                    _ = c.x, d = c.y
                }
                this[YR].x += _, this[YR].y += d
            } else {
                var _ = this[HC].x * n / this[HC].width - t, d = this[HC].y * e / this[HC][_a] - i;
                if (this[HC].set(t + _, i + d, n, e), this[YR][Fo]) {
                    var c = Zs({x: _, y: d}, this.element.rotate);
                    _ = c.x, d = c.y
                }
                this.element.x -= _, this[YR].y -= d
            }
        }, ondrag: function (t, i) {
            // if (this.element && this._9y) {
            //     if (this._9y == this[i$]) {
            //         var n = i[VT](t), e = yn(n.x, n.y, this[YR].x, this[YR].y, this._9y.start.x, this._9y[rN].y, !0);
            //         e += this._9y[Fo] || 0, t.shiftKey && (e = Math.round(e / Math.PI * 4) * Math.PI / 4);
            //         var s = this[YR][Fo];
            //         this.element[Fo] = e % (2 * Math.PI);
            //         var h = new Wh(i, Wh.ROTATING, t, this.element);
            //         return h[pv] = s, h.value = this.element[Fo], void i[RD](h)
            //     }
            //     var r = t.dx, a = t.dy, o = i.scale;
            //     if (r /= o, a /= o, this[YR][Fo]) {
            //         var n = {x: r, y: a};
            //         Zs(n, -this[YR][Fo]), r = n.x, a = n.y
            //     }
            //     var f = this._9y.p, u = this._n4p, c = u.x, _ = u.y, d = u[ca], l = u.height;
            //     f.horizontalPosition == nq ? r >= d ? (c += d, d = r - d || 1) : (c += r, d -= r) : f.horizontalPosition == sq && (-r >= d ? (d = -r - d || 1, c -= d) : d += r), f.verticalPosition == hq ? a >= l ? (_ += l, l = a - l || 1) : (_ += a, l -= a) : f[la] == aq && (-a >= l ? (l = -a - l || 1, _ -= l) : l += a), this._4p(c, _, d, l, t.shiftKey);
            //     var h = new Wh(i, Wh[y$], t, this[YR]);
            //     h.point = this._9y, i[RD](h)
            // }
        }, enddrag: function (t, i) {
            // if (this[YR] && this._9y) {
            //     if (this._9y == this[i$]) {
            //         var n = new Wh(i, Wh[g$], t, this[YR]);
            //         return n[Or] = this[YR][Fo], void i[RD](n)
            //     }
            //     var n = new Wh(i, Wh[p$], t, this[YR]);
            //     n[wB] = this._9y, i[RD](n)
            // }
        }
    }, E(Gh, wh), hH[m$] = Gh;
    var XW = function (t) {
        this[E_] = t
    };
    XW.prototype = {
        onstart2: function (t, i) {
            this[Dy](t, i)
        }, onstart: function (t, i) {
            if (!t[dN]) {
                var n = t.getData();
                if (n && !i[yd](n) && (n = null), n && Ti(t)) {
                    i.reverseSelect(n);
                    var e = new Wh(i, Wh.SELECT, t, i[_b]);
                    return void i[RD](e)
                }
                if (!n || !i[_b][tB](n)) {
                    n ? (i[x$](n), i[E$](n)) : i[x$](null);
                    var e = new Wh(i, Wh[w$], t, i[_b]);
                    i[RD](e)
                }
            }
        }, onkeydown: function (t, i) {
            return 27 == t[uw] ? void i[_j]() : void (Ti(t) && 65 == t.keyCode && (i[T$](), F(t)))
        }
    }, HY.TOOLTIP_DURATION = 3e3, HY[k$] = 1e3, qh.CLASS_NAME = M$, qh.CURSOR_OFFSET_X = 0, qh[O$] = 15, pi(ta + qh[S$], {
        "user-select": X_,
        "background-color": I$,
        overflow: V_,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: UC,
        "pointer-events": X_,
        border: P$,
        padding: A$,
        display: iR,
        position: hT
    }), qh.getInstance = function () {
        var t = qh[C$];
        return t || (t = qh[C$] = new qh), t
    }, qh[L$] = function (t, i, n) {
        qh[D$]()[L$](t, i, n)
    }, qh.hide = function () {
        qh[D$]()[t$]()
    }, qh[yr] = {
        getTooltipElement: function () {
            var t = this._m9;
            return t || (t = i[ro](N_), t[Yu] = qh.CLASS_NAME, this._m9 = t, i.body[q_](t)), t
        }, update: function (t, i) {
            if (this.isShowing()) {
                var n = Bd == i;
                t && !n && (t = t.replace(/\n/g, j$));
                var e = this[R$]();
                n ? e[N$] = t || "" : e.innerHTML = t || "", Hh(e, this[B$].x + qh.CURSOR_OFFSET_X, this._info.y + qh.CURSOR_OFFSET_Y)
            }
        }, setTooltip: function (t, i) {
            if (!t || !t[$$]) return this[B$] = null, this._m9 && (this._m9.style.display = X_), void (this._9v = Date.now());
            this._9v = null, this._info = t;
            var n = this.getTooltipElement();
            n.style.display = "", this[F$](this[B$].content, this._info[$o]), isNaN(i) && (i = HY[G$]), i && this[z$](this[Y$][Pr](this, !1), i)
        }, _9v: null, _kh: null, stopTimer: function () {
            this._kh && (clearTimeout(this._kh), this._kh = null)
        }, startTimer: function (t, i) {
            this[q$](), this._kh = setTimeout(function (t) {
                this._kh = null, t()
            }[Pr](this, t), i)
        }, show: function (t, i, n) {
            return this[yB]() || this._9v && Date.now() - this._9v < 1e3 ? void this[Y$](t, n) : (isNaN(i) && (i = HY[k$]), void (i ? this[z$](this[Y$][Pr](this, t, n), i) : this[Y$](t, n)))
        }, isShowing: function () {
            return this._m9 && X_ !== this._m9.style[Uw]
        }, hide: function () {
            this[q$](), this[yB]() && this.setTooltip(!1)
        }
    };
    var ZW = function (t) {
        this.graph = t
    };
    ZW[yr] = {
        onstart: function (t, i) {
            this[sg](i)
        }, _ip: null, onmousemove: function (t, i) {
            // if (i[H$]) {
            //     var n = t[Uy](), e = n ? i[U$](n, t) : null;
            //     return e ? void qh.show({
            //         target: n,
            //         content: e,
            //         type: n[W$],
            //         x: t[ja],
            //         y: t[Na]
            //     }, i[V$], i[X$]) : void qh.hide()
            // }
        }, destroy: function () {
            qh[t$]()
        }
    };
    var KW = function (t) {
        this[E_] = t
    };
    KW[yr] = {
        destroy: function () {
            this[Z$] && (this[Z$] = null)
        }, onmousewheel: function (t, i) {
            // if (i.enableWheelZoom !== !1 && t[AB]) {
            //     if (hH[xD](t), i[hB](), i.delayedRendering) {
            //         var n = this[Z$];
            //         n || (n = this.delayAction = new Uh(function () {
            //             i.pauseRendering(!1)
            //         })), i[oB](!0), n[Wd](100)
            //     }
            //     i[K$](t, t[AB], !1)
            // }
        }
    };
    var JW = function (t) {
        this[E_] = t
    };
    JW.prototype = {
        onclick: function (t, i) {
            i[K$](t, !Ti(t))
        }
    };
    var QW = function (t) {
        this[E_] = t
    };
    QW[yr] = {
        onclick: function (t, i) {
            i.zoomByMouseEvent(t, Ti(t))
        }
    }, E(Wh, uq), Wh.ELEMENT_MOVE_START = J$, Wh[nB] = Q$, Wh.ELEMENT_MOVE_END = tF, Wh[jD] = iF, Wh[wj] = nF, Wh.POINT_MOVE_START = eF, Wh[DB] = sF, Wh.POINT_MOVE_END = hF, Wh[kB] = rF, Wh.POINT_REMOVE = aF, Wh[v$] = oF, Wh[y$] = fF, Wh[p$] = uF, Wh.ROTATE_START = cF, Wh[_F] = dF, Wh[g$] = lF, Wh.PAN_START = vF, Wh[aB] = bF, Wh[CM] = yF, Wh[gF] = pF, Wh[w$] = zd, Wh[mF] = xF, Wh.SELECT_BETWEEN = EF, Wh[wF] = TF, Wh[kF] = MF, Vh[yr] = {
        _9l: function (t) {
            if (this[OF]) switch (t[uv]) {
                case mq[Xv]:
                    this[OF]._onElementRemoved(t[Vo]);
                    break;
                case mq.KIND_CLEAR:
                    this[OF][SF](t[Vo])
            }
        }, destroy: function () {
            delete this._km, delete this._4l, this[OF] && (this[OF]._ih(), delete this._interactionSupport)
        }, _km: null, _4l: null, defaultMode: null, _h0: function (t, i, n) {
            this._4l[t] = new Th(i, n), t == this[Jd] && this._interactionSupport[IF](i)
        }, addCustomInteraction: function (t) {
            this._interactionSupport[PF](t)
        }, removeCustomInteraction: function (t) {
            this[OF]._kcCustomInteractionListener(t)
        }, _mu: function (t) {
            var i = this._4l[t];
            return i ? i : tV[t]
        }
    }, K(Vh[yr], {
        defaultCursor: {
            get: function () {
                return this[AF] ? this[AF][md] : void 0
            }
        }, currentMode: {
            get: function () {
                return this[Yj]
            }, set: function (t) {
                this[Yj] != t && (this._n4urrentMode, this._interactionSupport || (this[OF] = new Hq(this._km)), this[Yj] = t, this[AF] = this._mu(this[Yj]), this._km.cursor = this[md], this[OF][IF](this[AF] ? this[AF][CF](this._km) : []))
            }
        }
    });
    var tV = {};
    HY[LF] = function (t, i, n) {
        var e = new Th(i, n);
        tV[t] = e
    }, rH[DF] = jF, rH[RF] = xd, rH[NF] = Nd, rH[BF] = $F, rH[FF] = GF, rH.INTERACTION_MODE_CREATE_SIMPLE_EDGE = zF, rH[YF] = qF, rH.INTERACTION_MODE_CREATE_SHAPE = HF, rH[UF] = WF, HY[LF](rH[DF], [XW, UW, KW, qW, zW, ZW, VW]), HY[LF](rH[VF], [YW, Ch, XW, UW, KW, qW, ZW]), HY.registerInteractions(rH.INTERACTION_MODE_CREATE_EDGE, [YW, $h, XW, Oh, UW, KW, qW, ZW]), HY.registerInteractions(rH.INTERACTION_MODE_CREATE_SHAPE, [YW, Ph, XW, UW, KW, qW, ZW]), HY[LF](rH[UF], [Ah, XW, UW, KW, qW, ZW]), HY[LF](rH[RF], [YW, $h, Gh, XW, HW, UW, KW, qW, zW, ZW, VW]), HY[LF](rH.INTERACTION_MODE_SELECTION, [YW, $h, Gh, XW, HW, WW, UW, KW, qW, zW, ZW]), HY[LF](rH[BF], [KW, qW, JW], Uq), HY[LF](rH[FF], [KW, qW, QW], Wq), hH[XF] = UW, hH[ZF] = XW, hH[KF] = HW, hH.WheelZoomInteraction = KW, hH.DoubleClickInteraction = zW, hH.ExportInteraction = qW, hH[JF] = ZW, hH[QF] = WW, hH[tG] = VW, hH.PointsInteraction = $h;
    var iV = function (t) {
        this[E_] = t
    };
    hH[iG] = iV, iV[yr] = {
        getNodeBounds: function (t) {
            return this[E_].getUIBounds(t)
        }, isLayoutable: function (t) {
            return this[E_][bd](t) && t.layoutable !== !1
        }, getLayoutResult: function () {
        }, updateLocations: function (t, i, n, e, s) {
            if (i === !0) {
                if (this.animate || (this.animate = new jV), n && (this.animate.duration = n), e && (this.animate.animationType = e), this[nG][eG] = t, s) {
                    var h = s, r = this;
                    s = function () {
                        h[hr](r, t)
                    }
                }
                return void this[nG][rN](s)
            }
            for (var a in t) {
                var o = t[a], f = o[sG];
                f[dj](o.x, o.y)
            }
            s && s[hr](this, t)
        }, _fl: function (t) {
            var i, n, e, s = null;
            t && (i = t[hG], s = t.callback, n = t[RR], e = t[BR]);
            var h = this[rG](t);
            return h ? (this.updateLocations(h, i, n, e, s), h) : !1
        }, doLayout: function (t, i) {
            return this[E_] && i !== !0 ? void this[E_][XD](function () {
                this._fl(t)
            }, this) : this._fl(t)
        }
    };
    var nV = 110, eV = 120, sV = 130, hV = 210, rV = 220, aV = 230, oV = 111, fV = 112, uV = 121, cV = 122, _V = 211,
        dV = 212, lV = 221, vV = 222;
    rH[aG] = nV, rH[oG] = eV, rH.DIRECTION_CENTER = sV, rH[fG] = hV, rH.DIRECTION_TOP = rV, rH.DIRECTION_MIDDLE = aV, rH[uG] = oV, rH[cG] = fV, rH[_G] = uV, rH[dG] = cV, rH[lG] = _V, rH[vG] = dV, rH[bG] = lV, rH[yG] = vV;
    var bV = gG, yV = pG, gV = mG, pV = xG;
    rH[EG] = bV, rH[wG] = gV, rH.LAYOUT_TYPE_EVEN_VERTICAL = pV, rH[TG] = yV, hH.isHorizontalDirection = Xh;
    var mV = function (t) {
        this[E_] = t
    };
    mV[yr] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: hV,
        layoutType: bV,
        defaultSize: {width: 50, height: 60},
        getNodeSize: function (t) {
            if (this[E_]._8i[Dc]) {
                var i = this.graph.getUI(t);
                if (i) return i._f5
            }
            return t[Em] && t[Em].bounds ? {width: t[Em][Ao].width, height: t[Em][Ao][_a]} : this[kG]
        },
        _d5: function (t, i) {
            var n = t.id;
            if (!(n in this._8x) && this.isLayoutable(t)) {
                var e, s = this[MG](t);
                e = s instanceof QY ? [-s.x, -s.y] : [s[ca] / 2, s.height / 2];
                var h = (t.parentChildrenDirection, i ? this._8x[i.id] : this[OG]);
                this._8x[n] = new xV(this[SG](t), this[IG](t), this[PG](t), t.parentChildrenDirection, h, t, s.width, s[_a], e)
            }
        },
        getHGap: function (t) {
            return t && R(t[AG]) ? t[AG] : this[AG]
        },
        getVGap: function (t) {
            return t && R(t[CG]) ? t[CG] : this[CG]
        },
        getLayoutType: function (t) {
            return t && t.layoutType ? t[LG] : this.layoutType
        },
        _8x: null,
        _n6g: null,
        _kz: function () {
            this._8x = null, this._n6g = null
        },
        getLayoutResult: function (t) {
            var i, n, e, s, h = this.graph;
            t instanceof Object && (i = t.x, n = t.y, h = t[DG] || this[E_], e = t[Ao], s = t[jG]), this._8x = {}, this._n6g = new xV, this[OG]._mq(this[AG], this.vGap, this[RG], this.layoutType);
            var r = {}, a = BV(h, this._d5, this, !1, s);
            return a && (this[OG]._fl(i || 0, n || 0, r), e && e.set(this._n6g.x, this[OG].y, this[OG][ca], this._n6g[_a])), this._kz(), r
        },
        doLayout: function (t, i) {
            if (R(t)) {
                var n = t, e = 0;
                R(i) && (e = i), t = {x: n, y: e}, i = !0
            }
            return T(this, mV, NG, [t, i])
        }
    }, E(mV, iV);
    var xV = function (t, i, n, e, s, h, r, a, o) {
        this._m2 = t || 0, this._m3 = i || 0, this.layoutType = n, this[RG] = e, this[BG] = s, s && s._fc(this), this.node = h, this._e9 = r, this[$G] = a, this[FG] = o
    };
    xV.prototype = {
        _mq: function (t, i, n, e) {
            this._m2 = t, this._m3 = i, this.parentChildrenDirection = n, this[LG] = e
        },
        _8j: function () {
            this._f3 = []
        },
        _m2: 0,
        _m3: 0,
        _f3: null,
        _e9: 0,
        _n40: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _fc: function (t) {
            this._f3 || (this._f3 = []), this._f3[lr](t)
        },
        _n44: function (t, i, n, e) {
            var s = new QY;
            return n(this._f3, function (n) {
                n._33(t, i), s.add(n), e ? t += n.width + this._m2 : i += n.height + this._m3
            }, this), s
        },
        _8b: function (t, i, n, e, s) {
            var h, r = e ? this._m2 : this._m3, a = e ? this._m3 : this._m2, o = e ? "width" : _a,
                f = e ? "height" : ca, u = e ? "_e9" : $G, c = e ? "_n40" : GG, _ = e ? "hostDX" : zG,
                d = e ? "hostDY" : YG, v = new QY, b = 0, y = 0, g = [], p = 0, m = 0;
            n(this._f3, function (n) {
                var s = m >= y;
                n._inheritedParentChildrenDirection = s ? e ? eV : rV : e ? nV : hV, n._33(t, i), s ? (g[lr](n), b = Math.max(b, n[o]), y += n[f] + a) : (h || (h = []), h.push(n), p = Math.max(p, n[o]), m += n[f] + a)
            }, this), y -= a, m -= a;
            var x = Math.max(y, m), E = r, w = 0;
            this.node && (s && (E += this[u] + r, x > this[c] ? this[d] = (x - this[c]) / 2 : w = (this[c] - x) / 2), this[_] = b + E / 2 - this[u] / 2);
            var T = 0, k = w;
            return l(g, function (t) {
                e ? t[Vp](b - t[o], k) : t.offset(k, b - t[o]), k += a + t[f], v.add(t)
            }, this), h ? (k = w, T = b + E, l(h, function (t) {
                e ? t[Vp](T, k) : t[Vp](k, T), k += a + t[f], v.add(t)
            }, this), v) : v
        },
        offset: function (t, i) {
            this.x += t, this.y += i, this[qG] += t, this.nodeY += i, this._6f(t, i)
        },
        _n6p: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _n6q: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _mc: function (t) {
            if (this._f3 && 0 != this._f3.length) {
                if (t) return this[sG] && (this[qG] += this[HG](this.nodeX, this._e9)), void l(this._f3, function (t) {
                    t[Vp](this[HG](t.x, t[ca]), 0)
                }, this);
                this[sG] && (this[UG] += this[WG](this[UG], this[$G])), l(this._f3, function (t) {
                    t[Vp](0, this._n6q(t.y, t[_a]))
                }, this)
            }
        },
        _6f: function (t, i) {
            this._f3 && l(this._f3, function (n) {
                n.offset(t, i)
            }, this)
        },
        _33: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._f3 && 0 != this._f3.length ? void this._1v(this.x, this.y, this.layoutType) : void (this[sG] && (this.width = this._e9, this[_a] = this[$G], this.nodeX = this.x, this.nodeY = this.y))
        },
        _6c: function (t) {
            if (this[sG]) {
                var i = this[FG], n = i[0], e = i[1];
                t[this[sG].id] = {
                    node: this.node,
                    x: this.nodeX + n,
                    y: this[UG] + e,
                    left: this[qG],
                    top: this[UG],
                    width: this._e9,
                    height: this._n40
                }
            }
            this._f3 && l(this._f3, function (i) {
                i._6c(t)
            }, this)
        },
        _fl: function (t, i, n) {
            this._33(t, i), this._6c(n)
        },
        _1v: function (t, i, e) {
            var s, h = t, r = i;
            !this[RG] && this[BG] && (this.parentChildrenDirection = this[VG] || this[BG][RG]);
            var a = this[RG], o = Xh(a);
            if (this[sG]) {
                s = a == sV || a == aV;
                var f = Zh(a);
                s || (o ? t += this._e9 + this._m2 : i += this[$G] + this._m3)
            }
            var u, c = this[sG] && this[sG].layoutReverse ? b : l;
            if (e == yV) u = this._8b(t, i, c, !o, s); else {
                var _;
                _ = e == bV ? !o : e == gV, u = this[XG](t, i, c, _, s)
            }
            var d = 0, v = 0;
            if (u && !u.isEmpty() && (d = u[ca], v = u[_a], this.add(u)), this[sG]) {
                if (this[qG] = h, this[UG] = r, this[YG] !== n || this.hostDY !== n) this[qG] += this[YG] || 0, this[UG] += this[zG] || 0; else {
                    var y;
                    y = a == hV || a == rV || a == eV || a == nV ? 1 : a == dV || a == vV || a == cV || a == fV ? 0 : 2, o ? (1 == y ? this.nodeY += v / 2 - this._n40 / 2 : 2 == y && (this[UG] += v - this[$G]), r > this[UG] && this[Vp](0, r - this[UG])) : (1 == y ? this[qG] += d / 2 - this._e9 / 2 : 2 == y && (this[qG] += d - this._e9), h > this[qG] && this[Vp](h - this[qG], 0))
                }
                this[Gl](this.nodeX, this.nodeY, this._e9, this[$G]), f && this._mc(o)
            }
        },
        node: null,
        uiBounds: null
    }, E(xV, QY), Jh[yr] = {
        layoutDatas: null, isMovable: function (t) {
            return !this[ZG][t.id]
        }, _7i: !1, _3m: function () {
            this._7i = !0, this[E_]._1f[Kd](this._9o, this), this[E_]._17.addListener(this._29, this)
        }, _1o: function () {
            this._7i = !1, this.graph._1f[Cv](this._9o, this), this.graph._17[Cv](this._29, this)
        }, invalidateFlag: !0, invalidateLayoutDatas: function () {
            this[LM] = !0
        }, resetLayoutDatas: function () {
            return this[LM] = !1, this[KG] = Kh[hr](this)
        }, _29: function (t) {
            Wh[iB] == t[uv] ? (this[ZG] = {}, t.datas.forEach(function (t) {
                this.currentMovingNodes[t.id] = t
            }, this)) : Wh[sB] == t[uv] && (this[ZG] = {})
        }, _9o: function () {
            this[JG]()
        }, isRunning: function () {
            return this.timer && this[QG]._df()
        }, getLayoutResult: function () {
            this[tz](), this[iz]();
            for (var t = this.getMaxIterations(this.layoutDatas[nz] || 0, this[KG].edgeCount || 0), i = 0; t > i && this.step(!1) !== !1; i++) ;
            var n = this[KG][ez];
            return this.onstop(), n
        }, _lo: function () {
            return !1
        }, step: function (t) {
            if (t === !1) return this._lo(this[sz]);
            (this[LM] || !this[KG]) && this[iz]();
            var i = this._lo(t), n = this[KG].nodes;
            for (var e in n) {
                var s = n[e], h = s[sG];
                this[lj](h) ? h.setLocation(s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
            }
            return i
        }, onstop: function () {
            delete this[KG]
        }, start: function (t) {
            if (this.isRunning()) return !1;
            this._7i || this._3m(), this[hz] || (this[hz] = function (t) {
                return this[rz](t)
            }[Pr](this)), this[JG](), this.timer = new nH(this[hz]);
            var i = this;
            return this[QG]._kp(function () {
                i.onstop(), t && t()
            }), !0
        }, stop: function () {
            this.timer && (this[QG]._ll(), this.onstop())
        }, getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        }, resetGraph: function () {
            this._7i || this._3m(), this[iz]()
        }, destroy: function () {
            this[tz](), this._1o()
        }
    }, E(Jh, iV);
    var EV = function (t, i, n, e) {
        this[E_] = t, R(i) && (this[ov] = i), R(n) && (this.gap = n), R(e) && (this[az] = e)
    };
    hH[oz] = EV;
    var wV = fz, TV = uz, kV = cz, MV = _z;
    rH[dz] = wV, rH[lz] = TV, rH[vz] = kV, rH[bz] = MV, EV[yr] = {
        angleSpacing: wV,
        radiusMode: MV,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _8x: null,
        _n6g: null,
        _kz: function () {
            this._8x = null, this._n6g = null
        },
        getLayoutResult: function (t) {
            var i, n = 0, e = 0, s = this[E_];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[DG] || this.graph, i = t[Ao]), this._8x = {}, this[OG] = new IV(this);
            var h = {}, r = $V(s, this._d5, this);
            return r && (this[OG]._f3 && 1 == this[OG]._f3.length && (this[OG] = this[OG]._f3[0]), this[OG]._ee(!0), this[OG]._5m(n, e, this.startAngle, h, i)), this._kz(), h
        },
        _d5: function (t, i) {
            if (this[yz](t)) {
                var n = i ? this._8x[i.id] : this[OG];
                this._8x[t.id] = new IV(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this.radius
        },
        getNodeSize: function (t) {
            if (this[E_]._8i[Dc]) {
                var i = this[E_][Wy](t);
                if (i) return (i._f5.width + i._f5[_a]) / 2
            }
            return this.defaultSize
        },
        getGap: function () {
            return this.gap
        },
        _2x: function (t, i, n) {
            return this.getNodeSize(t, i, n) + this[gz](t, i, n)
        }
    };
    var OV = function (t) {
        var i, n = this._f3[rr], e = 0, s = 0;
        if (l(this._f3, function (t) {
            var n = t._ee();
            1 > n && (n = 1), s += n, n > e && (e = n, i = t)
        }, this), n > 1) {
            var h = 0, r = {}, a = s / n / 3;
            s = 0, l(this._f3, function (t) {
                var i = t._mh;
                a > i && (i = a), r[t.id] = i, s += i
            }, this);
            var o = sW / s;
            l(this._f3, function (i, n) {
                var e = r[i.id], s = e * o;
                0 === n && (h = t ? -s / 2 : -s), i._le = h + s / 2, i._ld = s, h += s
            }, this)
        }
        return [e, i._ld]
    }, SV = function (t) {
        var i = this._82, n = 2 * Math.PI / i, e = 0, s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._f3, function (t) {
            t._le = s % sW, s += n, t._ld = n;
            var i = t._ee();
            i > e && (e = i)
        }, this), [e, n]
    }, IV = function (t, i, n) {
        this[pz] = t, i && (this._mi = i, this.id = i.id), n && (n._fc(this), n._mg = !1, this._lf = n._lf + 1)
    }, sW = 2 * Math.PI;
    IV[yr] = {
        _ld: 0,
        _le: 0,
        _j7: 0,
        _dy: 0,
        _n4i: 0,
        _lf: 0,
        _mg: !0,
        _mh: 0,
        _g4: 0,
        _f3: null,
        _mi: null,
        _fc: function (t) {
            this._f3 || (this._f3 = []), this._f3[lr](t), t[Hu] = this
        },
        _hc: function (t) {
            if (this._le = (this._le + t) % sW, this._f3) {
                var i = this._f3[rr];
                if (1 == i) return void this._f3[0]._hc(this._le);
                t = this._le + Math.PI, l(this._f3, function (i) {
                    i._hc(t)
                }, this)
            }
        },
        _82: 0,
        _7l: function (t) {
            return this._mi && (this._g4 = this[pz]._2x(this._mi, this._lf, this._mg) / 2), this._f3 ? (this._g4, this._82 = this._f3[rr], this._82 <= 2 || this[pz][mz] == TV ? SV.call(this, t) : OV[hr](this, t)) : null
        },
        _ee: function (t) {
            var i = this._7l(t);
            if (!i) return this._mh = this._g4;
            var n = i[0], e = i[1], s = this[pz][xz](this._mi, this._lf);
            if (s < this._g4 && (s = this._g4), this._dy = s, this._g4 + n > s && (s = this._g4 + n), n && this._82 > 1 && e < Math.PI) {
                var h = n / Math.sin(e / 2);
                h > s && (s = h)
            }
            return this._j7 = s, this._mh = s + n, this._mi && this._f3 && this.layouter[Ez] == MV && l(this._f3, function (t) {
                var i = t._mh;
                1 == t._82 && (i /= 2);
                var n = this._g4 + i, e = t._ld;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2), h = i / s;
                    h > i && (i = h)
                }
                n > i && (i = n), t[wz] = i
            }, this), (!this._mi || t) && this._hc(0), this._mh
        },
        _5m: function (t, i, n, e, s) {
            if (this._mi && (e[this._mi.id] = {
                x: t,
                y: i,
                node: this._mi
            }, s && s[Gl](t - this._g4 / 2, i - this._g4 / 2, this._g4, this._g4)), this._f3) {
                if (!this._mi && 1 == this._f3[rr]) return void this._f3[0]._5m(t, i, n, e, s);
                n = n || 0;
                var h = this._j7, r = this._dy;
                l(this._f3, function (a) {
                    var o = h;
                    a[wz] && (o = Math.max(r, a[wz]));
                    var f = a._le + n, u = t + o * Math.cos(f), c = i + o * Math.sin(f);
                    a._5m(u, c, n, e, s)
                }, this)
            }
        }
    }, E(EV, iV);
    var PV = function () {
        w(this, PV, arguments)
    };
    E(PV, Qh);
    var AV = function (t, i) {
        this[Tz] = t, this.node2 = i, t == i ? (this[Qu] = !0, this._kf = t._l5) : this._kf = new UY, this._7y = [], this._fn = HY[kz]
    };
    HY.EDGE_BUNDLE_EXPANDED = !0, AV[yr] = {
        node1: null,
        node2: null,
        _kf: null,
        _fn: HY[kz],
        _7y: null,
        _gv: null,
        agentEdge: null,
        _n61: function (t, i, n) {
            this._kf[qu](function (e) {
                return n && e.$from != n && e[Zu] != n ? void 0 : t.call(i, e)
            })
        },
        _5v: 0,
        _5w: 0,
        _hq: function (t, i) {
            return this._kf.add(t) === !1 ? !1 : (i == this.node1 ? this._5v++ : this._5w++, this[Dc] ? void this._12(t) : void (this[Dc] = !0))
        },
        _n6s: function (t, i) {
            return this._kf.remove(t) === !1 ? !1 : (i == this[Tz] ? this._5v-- : this._5w--, this._12(t), void this._kf[qu](function (t) {
                t[Mz] = !0, t.__4o = !0
            }, this))
        },
        _12: function (t) {
            this[Oz] = !0, this._68 = !0, t[Mz] = !0, t[Ek] = !0
        },
        invalidate: function () {
            this[lT]()
        },
        _n6u: function () {
            this._68 || (this._68 = !0, this._kf[qu](function (t) {
                t[Mz] = !0
            }))
        },
        isEmpty: function () {
            return this._kf[Sl]()
        },
        isPositiveOrder: function (t) {
            return this[Tz] == t.$from || this.node1 == t[Zu]
        },
        canBind: function (t) {
            return t && this._68 && this[Po](t), this._kf[rr] > 1 && this._7y.length > 1
        },
        _hk: function (t) {
            return this._7y[vr](t)
        },
        getYOffset: function (t) {
            return this._gv[t.id]
        },
        _4v: function (t) {
            if (!this[HL]()) return void (this._gv = {});
            var i = {}, n = this._7y[rr];
            if (!(2 > n)) {
                var e = 0, s = this._7y[0];
                i[s.id] = 0;
                for (var h = 1; n > h; h++) {
                    s = this._7y[h];
                    var r = t[t_](s, gW[fP]) || LW[gW.EDGE_BUNDLE_GAP];
                    e += r, i[s.id] = e
                }
                if (!this[Qu] && e) for (var a = e / 2, h = 0; n > h; h++) s = this._7y[h], i[s.id] -= a;
                this._gv = i
            }
        },
        _n2k: function (t) {
            return this._fn == t ? !1 : (this._fn = t, this._n6u(), !0)
        },
        reverseExpanded: function () {
            return this[Sz](!this._fn)
        },
        _19: function () {
            this._7y[rr] = 0;
            var t;
            this._kf[qu](function (i) {
                if (i.isBundleEnabled()) {
                    if (!this[WL](i)) return t || (t = []), void t[lr](i);
                    this._7y[lr](i)
                }
            }, this), t && (this._7y = t[ur](this._7y))
        },
        _ej: function (t) {
            return t == this[Iz] || !this[HL]() || this._fn
        },
        validate: function (t) {
            this._68 = !1, this._kf.forEach(function (t) {
                t[Mz] = !1
            }), this[Oz] && (this._19(), this[Oz] = !1), this._7y[rr] > 1 && this[Pz] instanceof Function && this[Pz](this._7y);
            var i = this._fn, n = this[HL](), e = !n || i;
            return l(this._7y, function (t) {
                t._$o = !0, t[Az] = e, e && (t.__4o = !0)
            }, this), e ? (this._99(null, t), void this._4v(t)) : (this._99(this._7y[0], t), this[Iz]._i2InBundle = !0, void (this.agentEdge[Ek] = !0))
        },
        _99: function (t, i) {
            if (t != this.agentEdge) {
                var n = this[Iz];
                return this.agentEdge = t, i && i._47(new cq(this, Iz, t, n)), !0
            }
        }
    }, K(AV.prototype, {
        bindableEdges: {
            get: function () {
                return this._7y
            }
        }, edges: {
            get: function () {
                return this._kf._jr
            }
        }, length: {
            get: function () {
                return this._kf ? this._kf[rr] : 1
            }
        }, expanded: {
            get: function () {
                return this._fn
            }, set: function (t) {
                return this._fn == t ? !1 : (this._fn = t, void this[lT]())
            }
        }
    });
    var CV = function () {
        function t(t, i) {
            this[sG] = t, this.body = i
        }

        function i() {
            this[Cz] = [], this[Lz] = 0
        }

        var n = -1e6, e = .8;
        i[yr] = {
            isEmpty: function () {
                return 0 === this[Lz]
            }, push: function (i, n) {
                var e = this[Cz][this.popIdx];
                e ? (e[sG] = i, e[_m] = n) : this[Cz][this[Lz]] = new t(i, n), ++this[Lz]
            }, pop: function () {
                return this[Lz] > 0 ? this[Cz][--this[Lz]] : void 0
            }, reset: function () {
                this[Lz] = 0
            }
        };
        var s = [], h = new i, r = function () {
            this[_m] = null, this[Dz] = [], this.mass = 0, this[jz] = 0, this[Rz] = 0, this[ed] = 0, this.top = 0, this[oa] = 0, this[aa] = 0, this.isInternal = !1
        }, a = [], o = 0, f = function () {
            var t;
            return a[o] ? (t = a[o], t[Dz][0] = null, t[Dz][1] = null, t[Dz][2] = null, t[Dz][3] = null, t.body = null, t.mass = t.massX = t.massY = 0, t[ed] = t[aa] = t.top = t[oa] = 0, t[Nz] = !1) : (t = new r, a[o] = t), ++o, t
        }, u = f(), c = function (t, i) {
            var n = Math.abs(t.x - i.x), e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        }, _ = function (t) {
            for (h.reset(), h.push(u, t); !h[Sl]();) {
                var i = h.pop(), n = i[sG], e = i[_m];
                if (n[Nz]) {
                    var s = e.x, r = e.y;
                    n[Bz] = n[Bz] + e[Bz], n[jz] = n[jz] + e.mass * s, n[Rz] = n.massY + e.mass * r;
                    var a = 0, o = n[ed], _ = (n[aa] + o) / 2, d = n.top, l = (n.bottom + d) / 2;
                    if (s > _) {
                        a += 1;
                        var v = o;
                        o = _, _ += _ - v
                    }
                    if (r > l) {
                        a += 2;
                        var b = d;
                        d = l, l += l - b
                    }
                    var y = n.quads[a];
                    y || (y = f(), y[ed] = o, y.top = d, y[aa] = _, y[oa] = l, n[Dz][a] = y), h[lr](y, e)
                } else if (n[_m]) {
                    var g = n[_m];
                    if (n[_m] = null, n[Nz] = !0, c(g, e)) {
                        if (n.right - n[ed] < 1e-8) return;
                        do {
                            var p = Math.random(), m = (n.right - n.left) * p, x = (n[oa] - n.top) * p;
                            g.x = n[ed] + m, g.y = n.top + x
                        } while (c(g, e))
                    }
                    h.push(n, g), h[lr](n, e)
                } else n.body = e
            }
        }, d = function (t) {
            var i, h, r, a, o = s, f = 1, c = 0, _ = 1;
            for (o[0] = u; f;) {
                var d = o[c], l = d.body;
                f -= 1, c += 1, l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math[Mo](h * h + r * r), 0 === a && (h = (Math[Hr]() - .5) / 50, r = (Math.random() - .5) / 50, a = Math.sqrt(h * h + r * r)), i = n * l.mass * t[Bz] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d.mass || (d[Bz] = 1), h = d[jz] / d.mass - t.x, r = d.massY / d[Bz] - t.y, a = Math.sqrt(h * h + r * r), 0 === a && (h = (Math.random() - .5) / 50, r = (Math.random() - .5) / 50, a = Math[Mo](h * h + r * r)), (d[aa] - d.left) / a < e ? (i = n * d[Bz] * t[Bz] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[Dz][0] && (o[_] = d[Dz][0], f += 1, _ += 1), d.quads[1] && (o[_] = d.quads[1], f += 1, _ += 1), d[Dz][2] && (o[_] = d[Dz][2], f += 1, _ += 1), d[Dz][3] && (o[_] = d[Dz][3], f += 1, _ += 1)))
            }
        }, l = function (t, i) {
            n = i;
            var e, s = Number.MAX_VALUE, h = Number[zl], r = Number[$z], a = Number[$z], c = t, d = c.length;
            for (e = d; e--;) {
                var l = c[e].x, v = c[e].y;
                s > l && (s = l), l > r && (r = l), h > v && (h = v), v > a && (a = v)
            }
            var b = r - s, y = a - h;
            for (b > y ? a = h + b : r = s + y, o = 0, u = f(), u[ed] = s, u[aa] = r, u.top = h, u[oa] = a, e = d; e--;) _(c[e], u)
        };
        return {init: l, update: d}
    }, LV = function (t) {
        t.fx -= t.x * this[Fz], t.fy -= t.y * this[Fz]
    }, DV = function (t) {
        if (0 != t.k) {
            var i = this._d9, n = t[tl], e = t.to, s = e.x - n.x, h = e.y - n.y, r = s * s + h * h,
                a = Math[Mo](r) || .1, o = (a - i) * t.k * this[Gz];
            o /= a;
            var f = o * s, u = o * h;
            e.fx -= f, e.fy -= u, n.fx += f, n.fy += u
        }
    };
    Qh[yr] = {
        appendNodeInfo: function (t, i) {
            i.mass = t[zz] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        }, appendEdgeInfo: function (t, i) {
            i.k = t[Yz] || 1
        }, setMass: function (t, i) {
            t.layoutMass = i, this.layoutDatas && this[KG][ez] && (t = this[KG].nodes[t.id], t && (t[Bz] = i))
        }, setElasticity: function (t, i) {
            t.layoutElasticity = i, this[KG] && this.layoutDatas[sM] && (t = this.layoutDatas[sM][t.id], t && (t.k = i))
        }, _d9: 50, _he: .5, timeStep: .05, repulsion: 50, attractive: .1, elastic: 3, _me: 1e3, _ke: function (t) {
            return this._me + .3 * (t - this._me)
        }, _lo: function (t, i) {
            var n = (Date.now(), this[KG][ez]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[Hr]() - .5, s.y += Math[Hr]() - .5), LV[hr](this, s)
            }
            var h = this[KG][qz];
            if (h) for (var e in h) {
                var r = h[e], a = r[ar], o = 0, f = 0;
                a.forEach(function (t) {
                    o += t.x, f += t.y
                }), o /= a.length, f /= a[rr];
                var u = 10 * this.attractive;
                a[qu](function (t) {
                    t.fx -= (t.x - o) * u, t.fy -= (t.y - f) * u
                })
            }
            var c = this[Hz];
            c || (c = this[Hz] = CV()), c.init(this[KG][Uz], -this.repulsion * this.repulsion * this[Wz]);
            for (var e in n) c[F$](n[e]);
            if (this[Gz]) {
                var _ = this[KG][sM];
                for (var e in _) DV[hr](this, _[e])
            }
            return this._ma(t)
        }, _ma: function (t) {
            var i = this.layoutDatas[Vz], n = (this[KG].currentEnergy, this[KG].nodes), t = this[sz], e = 0,
                s = this._he;
            for (var h in n) {
                var r = n[h], a = r.fx / r[Bz], o = r.fy / r.mass, f = r.vx += a * t, u = r.vy += o * t;
                r.x += f * t, r.y += u * t, i > e && (e += 2 * (f * f + u * u)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s
            }
            return this[KG][Xz] = e, e >= i
        }
    }, E(Qh, Jh), hH[Zz] = Qh;
    var jV = function (t) {
        this[eG] = t
    };
    jV[yr] = {
        oldLocations: null, _f1: null, duration: 700, animationType: iH[Kz], _7j: function (t) {
            if (this._f1 = t, this[Jz] = {}, t) for (var i in t) {
                var n = t[i], e = n[sG];
                this[Jz][i] = {x: e.x, y: e.y}
            }
        }, setLocation: function (t, i, n) {
            t[dj](i, n)
        }, forEach: function (t, i) {
            for (var n in this[eG]) {
                var e = this[Jz][n], s = this[eG][n];
                t.call(i, e, s)
            }
        }, _jz: function (t) {
            this.forEach(function (i, n) {
                var e = n[sG], s = i.x + (n.x - i.x) * t, h = i.y + (n.y - i.y) * t;
                this[dj](e, s, h)
            }, this)
        }, stop: function () {
            this[Qz] && this[Qz]._ll()
        }, start: function (t) {
            this[Qz] ? (this[Qz]._ll(), this[Qz]._ir = this[RR], this._n2nimate[tY] = this.animationType, this._n2nimate[iY] = this[iY]) : this[Qz] = new eH(this._jz, this, this.duration, this[BR]), this._n2nimate._kp(t)
        }
    }, K(jV[yr], {
        locations: {
            get: function () {
                return this._f1
            }, set: function (t) {
                this._f1 != t && this._7j(t)
            }
        }
    });
    var RV = function (t) {
        function i(i) {
            var n = !1;
            return i.forEachInEdge(function (i) {
                return t[I_](i) && !i[Qu]() ? (n = !0, !1) : void 0
            }), n
        }

        function n(i) {
            var n = !1;
            return i[sl](function (i) {
                return t[I_](i) && !i[Qu]() ? (n = !0, !1) : void 0
            }), n
        }

        var e, s = new UY;
        return t.forEach(function (t) {
            t instanceof _W && (i(t) ? !e && n(t) && (e = t) : s.add(t))
        }), s[Sl]() && e && s.add(e), s
    }, NV = function (t, i, n, e, s, h) {
        if (i instanceof xq) return t(i, n, e, s, h), i;
        if (i instanceof DW) {
            var r = new UY;
            i._kmModel.forEach(function (t) {
                return i[bd](t) ? t._i4() && t._fn && t.hasChildren() ? void (t.$location && (t.$location[LM] = !1)) : void r.add(t) : void 0
            }), i = r
        } else if (Array[Br](i)) i = new UY(i); else if (!(i instanceof UY)) throw new Error(nY);
        return i = RV(i, e), i[qu](function (i) {
            t(i, n, e, s, h)
        }), i
    }, BV = function (t, i, n, e, s) {
        return NV(FV, t, i, n, e, s)
    }, $V = function (t, i, n, e, s) {
        return NV(GV, t, i, n, e, s)
    };
    bs[yr].forEachByTopoDepthFirstSearch = function (t, i, n, e) {
        BV(this, t, i, n, e)
    }, bs[yr][eY] = function (t, i, n, e) {
        t instanceof Object && 1 == arguments[rr] && (i = t[Av]), $V(this, t, i, n, e)
    }, hH.forEachByTopoDepthFirstSearch = BV, hH[eY] = $V;
    var FV = function (t, i, n, e, s) {
        function h(t, i, n, e, s, r, a, o) {
            t._marker = r, e || i.call(n, t, o, a), tr(t, function (o) {
                h(o, i, n, e, s, r, a + 1, t)
            }, o, s, r, n), e && i[hr](n, t, o, a)
        }

        h(t, i, n, e, s, {}, 0)
    }, GV = function (t, i, n, e, s) {
        function h(t, i, n, e, s, r, a) {
            var o, f = t[rr];
            t[qu](function (t, h) {
                var u = t.v;
                u[el] = r, e || i[hr](n, u, t._from, a, h, f), tr(u, function (t) {
                    o || (o = []), t[el] = r, o[lr]({v: t, _from: u})
                }, u, s, r, n)
            }), o && h(o, i, n, e, s, r, a + 1), e && t.forEach(function (t, e) {
                i.call(n, t.v, t[sY], a, e, f)
            })
        }

        h([{v: t}], i, n, e, s, {}, 0)
    };
    hH[hY] = X, hH.log = ti, hH[ea] = ni, hH[na] = ii, hH[rY] = AY, hH[aY] = PY, hH.isWebkit = DY, hH.isGecko = jY, hH.isFirefox = RY, hH[oY] = BY, hH[fY] = NY, hH.isMac = $Y, hH[uY] = LW, hH[cY] = HY, hH.Styles = gW, hH[_Y] = rH, hH.Graphs = UH, hH[dY] = DW, hH[lY] = bW, hH[vY] = IW, hH[bY] = ks, hH[gB] = Ts, hH[yY] = AW, hH.ImageUI = PW, hH[gY] = lW, hH.Path = YH, hH[OL] = MH, hH[pY] = Wh, hH.Element = uW, hH.Node = _W, hH[Ij] = cW, hH[mY] = bs, hH[xY] = AV, hH.TreeLayouter = mV, hH[bf] = EY;
    var zV = wY;
    return hH[_w] = TY, hH.about = kY, hH[bw] = "Copyright © 2019 Qunee.com", hH.css = bi, hH[MY] = jW, ti = function () {
    }, hH[lw] = OY, hH
}(window, document);