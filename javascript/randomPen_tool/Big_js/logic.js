function generateNumber() {
    let rangeStart = new BigNumber(Number(document.getElementById("rangeStart").value));
    let rangeEnd = new BigNumber(Number(document.getElementById("rangeEnd").value));
    let count = Number(document.getElementById("count").value);
    let sep = document.getElementById("sep").value;

    let wholeNums = document.getElementById("wholeNums").value;
    let fractNums = document.getElementById("fractNums").value;

    var radios = document.getElementsByName('increasing');
    for (var radio of radios) {
        if (radio.checked) {

            increasing = radio.value;
        }
    }

    console.log("rangeStart:->", rangeStart, "rangeEnd:->", rangeEnd, "count:->", count, "sep:->", sep, "increasing:->", increasing);

    var randomNumbers = [];
    for (var i = 0; i < count; i++) {
        if (wholeNums == increasing) {
            increasing != true;
            randomNumbers.push(generateRandomWholeNumber(rangeStart, rangeEnd));
        } else if (fractNums = increasing) {
            increasing != false;
            randomNumbers.push(generateRandomFractNumber(rangeStart, rangeEnd).toFixed());
        }
    }

    if (sep == "\\n")
        sep = "\n";
    let answer = randomNumbers.join(sep);
    console.log(answer)
    document.getElementById("answer").value = answer;
}
function generateRandomWholeNumber(rangeStart, rangeEnd) {
    return (BigNumber.random().times(rangeEnd.minus(rangeStart).plus(1)).plus(rangeStart)).floor();
}
function generateRandomFractNumber(rangeStart, rangeEnd) {
    return BigNumber.random().times(rangeEnd.minus(rangeStart)).plus(rangeStart);
}

























!function (e) {
    "use strict";
    function n(e) {
        function a(e, n) {
            var t, r, i, o, u, s, l = this;
            if (!(l instanceof a))
                return new a(e, n);
            if (null != n && V(n, 2, 64, C, "base")) {
                if (n = 0 | n,
                    s = e + "",
                    10 == n)
                    return l = new a(e instanceof a ? e : s),
                        I(l, B + l.e + 1, P);
                if ((o = "number" == typeof e) && 0 * e != 0 || !new RegExp("^-?" + (t = "[" + v.slice(0, n) + "]+") + "(?:\\." + t + ")?$", 37 > n ? "i" : "").test(s))
                    return U(l, s, o, n);
                o ? (l.s = 0 > 1 / e ? (s = s.slice(1),
                    -1) : 1,
                    z && s.replace(/^0\.0*|\./, "").length > 15 && x(C, w, e),
                    o = !1) : l.s = 45 === s.charCodeAt(0) ? (s = s.slice(1),
                        -1) : 1,
                    s = A(s, 10, n, l.s)
            } else {
                if (e instanceof a)
                    return l.s = e.s,
                        l.e = e.e,
                        l.c = (e = e.c) ? e.slice() : e,
                        void (C = 0);
                if ((o = "number" == typeof e) && 0 * e == 0) {
                    if (l.s = 0 > 1 / e ? (e = -e,
                        -1) : 1,
                        e === ~~e) {
                        for (r = 0,
                            i = e; i >= 10; i /= 10,
                            r++)
                            ;
                        return l.e = r,
                            l.c = [e],
                            void (C = 0)
                    }
                    s = e + ""
                } else {
                    if (!h.test(s = e + ""))
                        return U(l, s, o);
                    l.s = 45 === s.charCodeAt(0) ? (s = s.slice(1),
                        -1) : 1
                }
            }
            for ((r = s.indexOf(".")) > -1 && (s = s.replace(".", "")),
                (i = s.search(/e/i)) > 0 ? (0 > r && (r = i),
                    r += +s.slice(i + 1),
                    s = s.substring(0, i)) : 0 > r && (r = s.length),
                i = 0; 48 === s.charCodeAt(i); i++)
                ;
            for (u = s.length; 48 === s.charCodeAt(--u);)
                ;
            if (s = s.slice(i, u + 1))
                if (u = s.length,
                    o && z && u > 15 && (e > y || e !== p(e)) && x(C, w, l.s * e),
                    r = r - i - 1,
                    r > G)
                    l.c = l.e = null;
                else if ($ > r)
                    l.c = [l.e = 0];
                else {
                    if (l.e = r,
                        l.c = [],
                        i = (r + 1) % b,
                        0 > r && (i += b),
                        u > i) {
                        for (i && l.c.push(+s.slice(0, i)),
                            u -= b; u > i;)
                            l.c.push(+s.slice(i, i += b));
                        s = s.slice(i),
                            i = b - s.length
                    } else
                        i -= u;
                    for (; i--; s += "0")
                        ;
                    l.c.push(+s)
                }
            else
                l.c = [l.e = 0];
            C = 0
        }
        function A(e, n, t, i) {
            var o, u, l, f, h, g, p, d = e.indexOf("."), m = B, w = P;
            for (37 > t && (e = e.toLowerCase()),
                d >= 0 && (l = W,
                    W = 0,
                    e = e.replace(".", ""),
                    p = new a(t),
                    h = p.pow(e.length - d),
                    W = l,
                    p.c = s(c(r(h.c), h.e), 10, n),
                    p.e = p.c.length),
                g = s(e, t, n),
                u = l = g.length; 0 == g[--l]; g.pop())
                ;
            if (!g[0])
                return "0";
            if (0 > d ? --u : (h.c = g,
                h.e = u,
                h.s = i,
                h = L(h, p, m, w, n),
                g = h.c,
                f = h.r,
                u = h.e),
                o = u + m + 1,
                d = g[o],
                l = n / 2,
                f = f || 0 > o || null != g[o + 1],
                f = 4 > w ? (null != d || f) && (0 == w || w == (h.s < 0 ? 3 : 2)) : d > l || d == l && (4 == w || f || 6 == w && 1 & g[o - 1] || w == (h.s < 0 ? 8 : 7)),
                1 > o || !g[0])
                e = f ? c("1", -m) : "0";
            else {
                if (g.length = o,
                    f)
                    for (--n; ++g[--o] > n;)
                        g[o] = 0,
                            o || (++u,
                                g = [1].concat(g));
                for (l = g.length; !g[--l];)
                    ;
                for (d = 0,
                    e = ""; l >= d; e += v.charAt(g[d++]))
                    ;
                e = c(e, u)
            }
            return e
        }
        function E(e, n, t, i) {
            var o, u, s, f, h;
            if (t = null != t && V(t, 0, 8, i, m) ? 0 | t : P,
                !e.c)
                return e.toString();
            if (o = e.c[0],
                s = e.e,
                null == n)
                h = r(e.c),
                    h = 19 == i || 24 == i && q >= s ? l(h, s) : c(h, s);
            else if (e = I(new a(e), n, t),
                u = e.e,
                h = r(e.c),
                f = h.length,
                19 == i || 24 == i && (u >= n || q >= u)) {
                for (; n > f; h += "0",
                    f++)
                    ;
                h = l(h, u)
            } else if (n -= s,
                h = c(h, u),
                u + 1 > f) {
                if (--n > 0)
                    for (h += "."; n--; h += "0")
                        ;
            } else if (n += u - f,
                n > 0)
                for (u + 1 == f && (h += "."); n--; h += "0")
                    ;
            return e.s < 0 && o ? "-" + h : h
        }
        function D(e, n) {
            var t, r, i = 0;
            for (u(e[0]) && (e = e[0]),
                t = new a(e[0]); ++i < e.length;) {
                if (r = new a(e[i]),
                    !r.s) {
                    t = r;
                    break
                }
                n.call(t, r) && (t = r)
            }
            return t
        }
        function F(e, n, t, r, i) {
            return (n > e || e > t || e != f(e)) && x(r, (i || "decimal places") + (n > e || e > t ? " out of range" : " not an integer"), e),
                !0
        }
        function _(e, n, t) {
            for (var r = 1, i = n.length; !n[--i]; n.pop())
                ;
            for (i = n[0]; i >= 10; i /= 10,
                r++)
                ;
            return (t = r + t * b - 1) > G ? e.c = e.e = null : $ > t ? e.c = [e.e = 0] : (e.e = t,
                e.c = n),
                e
        }
        function x(e, n, t) {
            var r = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][e] + "() " + n + ": " + t);
            throw r.name = "BigNumber Error",
            C = 0,
            r
        }
        function I(e, n, t, r) {
            var i, o, u, s, l, c, f, a = e.c, h = O;
            if (a) {
                e: {
                    for (i = 1,
                        s = a[0]; s >= 10; s /= 10,
                        i++)
                        ;
                    if (o = n - i,
                        0 > o)
                        o += b,
                            u = n,
                            l = a[c = 0],
                            f = l / h[i - u - 1] % 10 | 0;
                    else if (c = g((o + 1) / b),
                        c >= a.length) {
                        if (!r)
                            break e;
                        for (; a.length <= c; a.push(0))
                            ;
                        l = f = 0,
                            i = 1,
                            o %= b,
                            u = o - b + 1
                    } else {
                        for (l = s = a[c],
                            i = 1; s >= 10; s /= 10,
                            i++)
                            ;
                        o %= b,
                            u = o - b + i,
                            f = 0 > u ? 0 : l / h[i - u - 1] % 10 | 0
                    }
                    if (r = r || 0 > n || null != a[c + 1] || (0 > u ? l : l % h[i - u - 1]),
                        r = 4 > t ? (f || r) && (0 == t || t == (e.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == t || r || 6 == t && (o > 0 ? u > 0 ? l / h[i - u] : 0 : a[c - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)),
                        1 > n || !a[0])
                        return a.length = 0,
                            r ? (n -= e.e + 1,
                                a[0] = h[(b - n % b) % b],
                                e.e = -n || 0) : a[0] = e.e = 0,
                            e;
                    if (0 == o ? (a.length = c,
                        s = 1,
                        c--) : (a.length = c + 1,
                            s = h[b - o],
                            a[c] = u > 0 ? p(l / h[i - u] % h[u]) * s : 0),
                        r)
                        for (; ;) {
                            if (0 == c) {
                                for (o = 1,
                                    u = a[0]; u >= 10; u /= 10,
                                    o++)
                                    ;
                                for (u = a[0] += s,
                                    s = 1; u >= 10; u /= 10,
                                    s++)
                                    ;
                                o != s && (e.e++,
                                    a[0] == N && (a[0] = 1));
                                break
                            }
                            if (a[c] += s,
                                a[c] != N)
                                break;
                            a[c--] = 0,
                                s = 1
                        }
                    for (o = a.length; 0 === a[--o]; a.pop())
                        ;
                }
                e.e > G ? e.c = e.e = null : e.e < $ && (e.c = [e.e = 0])
            }
            return e
        }
        var L, U, C = 0, M = a.prototype, T = new a(1), B = 20, P = 4, q = -7, k = 21, $ = -1e7, G = 1e7, z = !0, V = F, j = !1, H = 1, W = 0, J = {
            decimalSeparator: ".",
            groupSeparator: ",",
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: " ",
            fractionGroupSize: 0
        };
        return a.another = n,
            a.ROUND_UP = 0,
            a.ROUND_DOWN = 1,
            a.ROUND_CEIL = 2,
            a.ROUND_FLOOR = 3,
            a.ROUND_HALF_UP = 4,
            a.ROUND_HALF_DOWN = 5,
            a.ROUND_HALF_EVEN = 6,
            a.ROUND_HALF_CEIL = 7,
            a.ROUND_HALF_FLOOR = 8,
            a.EUCLID = 9,
            a.config = a.set = function () {
                var e, n, t = 0, r = {}, i = arguments, s = i[0], l = s && "object" == typeof s ? function () {
                    return s.hasOwnProperty(n) ? null != (e = s[n]) : void 0
                }
                    : function () {
                        return i.length > t ? null != (e = i[t++]) : void 0
                    }
                    ;
                return l(n = "DECIMAL_PLACES") && V(e, 0, S, 2, n) && (B = 0 | e),
                    r[n] = B,
                    l(n = "ROUNDING_MODE") && V(e, 0, 8, 2, n) && (P = 0 | e),
                    r[n] = P,
                    l(n = "EXPONENTIAL_AT") && (u(e) ? V(e[0], -S, 0, 2, n) && V(e[1], 0, S, 2, n) && (q = 0 | e[0],
                        k = 0 | e[1]) : V(e, -S, S, 2, n) && (q = -(k = 0 | (0 > e ? -e : e)))),
                    r[n] = [q, k],
                    l(n = "RANGE") && (u(e) ? V(e[0], -S, -1, 2, n) && V(e[1], 1, S, 2, n) && ($ = 0 | e[0],
                        G = 0 | e[1]) : V(e, -S, S, 2, n) && (0 | e ? $ = -(G = 0 | (0 > e ? -e : e)) : z && x(2, n + " cannot be zero", e))),
                    r[n] = [$, G],
                    l(n = "ERRORS") && (e === !!e || 1 === e || 0 === e ? (C = 0,
                        V = (z = !!e) ? F : o) : z && x(2, n + d, e)),
                    r[n] = z,
                    l(n = "CRYPTO") && (e === !0 || e === !1 || 1 === e || 0 === e ? e ? (e = "undefined" == typeof crypto,
                        !e && crypto && (crypto.getRandomValues || crypto.randomBytes) ? j = !0 : z ? x(2, "crypto unavailable", e ? void 0 : crypto) : j = !1) : j = !1 : z && x(2, n + d, e)),
                    r[n] = j,
                    l(n = "MODULO_MODE") && V(e, 0, 9, 2, n) && (H = 0 | e),
                    r[n] = H,
                    l(n = "POW_PRECISION") && V(e, 0, S, 2, n) && (W = 0 | e),
                    r[n] = W,
                    l(n = "FORMAT") && ("object" == typeof e ? J = e : z && x(2, n + " not an object", e)),
                    r[n] = J,
                    r
            }
            ,
            a.max = function () {
                return D(arguments, M.lt)
            }
            ,
            a.min = function () {
                return D(arguments, M.gt)
            }
            ,
            a.random = function () {
                var e = 9007199254740992
                    , n = Math.random() * e & 2097151 ? function () {
                        return p(Math.random() * e)
                    }
                        : function () {
                            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                        }
                    ;
                return function (e) {
                    var t, r, i, o, u, s = 0, l = [], c = new a(T);
                    if (e = null != e && V(e, 0, S, 14) ? 0 | e : B,
                        o = g(e / b),
                        j)
                        if (crypto.getRandomValues) {
                            for (t = crypto.getRandomValues(new Uint32Array(o *= 2)); o > s;)
                                u = 131072 * t[s] + (t[s + 1] >>> 11),
                                    u >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)),
                                        t[s] = r[0],
                                        t[s + 1] = r[1]) : (l.push(u % 1e14),
                                            s += 2);
                            s = o / 2
                        } else if (crypto.randomBytes) {
                            for (t = crypto.randomBytes(o *= 7); o > s;)
                                u = 281474976710656 * (31 & t[s]) + 1099511627776 * t[s + 1] + 4294967296 * t[s + 2] + 16777216 * t[s + 3] + (t[s + 4] << 16) + (t[s + 5] << 8) + t[s + 6],
                                    u >= 9e15 ? crypto.randomBytes(7).copy(t, s) : (l.push(u % 1e14),
                                        s += 7);
                            s = o / 7
                        } else
                            j = !1,
                                z && x(14, "crypto unavailable", crypto);
                    if (!j)
                        for (; o > s;)
                            u = n(),
                                9e15 > u && (l[s++] = u % 1e14);
                    for (o = l[--s],
                        e %= b,
                        o && e && (u = O[b - e],
                            l[s] = p(o / u) * u); 0 === l[s]; l.pop(),
                        s--)
                        ;
                    if (0 > s)
                        l = [i = 0];
                    else {
                        for (i = -1; 0 === l[0]; l.splice(0, 1),
                            i -= b)
                            ;
                        for (s = 1,
                            u = l[0]; u >= 10; u /= 10,
                            s++)
                            ;
                        b > s && (i -= b - s)
                    }
                    return c.e = i,
                        c.c = l,
                        c
                }
            }(),
            L = function () {
                function e(e, n, t) {
                    var r, i, o, u, s = 0, l = e.length, c = n % R, f = n / R | 0;
                    for (e = e.slice(); l--;)
                        o = e[l] % R,
                            u = e[l] / R | 0,
                            r = f * o + u * c,
                            i = c * o + r % R * R + s,
                            s = (i / t | 0) + (r / R | 0) + f * u,
                            e[l] = i % t;
                    return s && (e = [s].concat(e)),
                        e
                }
                function n(e, n, t, r) {
                    var i, o;
                    if (t != r)
                        o = t > r ? 1 : -1;
                    else
                        for (i = o = 0; t > i; i++)
                            if (e[i] != n[i]) {
                                o = e[i] > n[i] ? 1 : -1;
                                break
                            }
                    return o
                }
                function r(e, n, t, r) {
                    for (var i = 0; t--;)
                        e[t] -= i,
                            i = e[t] < n[t] ? 1 : 0,
                            e[t] = i * r + e[t] - n[t];
                    for (; !e[0] && e.length > 1; e.splice(0, 1))
                        ;
                }
                return function (i, o, u, s, l) {
                    var c, f, h, g, d, m, w, v, y, O, R, S, A, E, D, F, _, x = i.s == o.s ? 1 : -1, L = i.c, U = o.c;
                    if (!(L && L[0] && U && U[0]))
                        return new a(i.s && o.s && (L ? !U || L[0] != U[0] : U) ? L && 0 == L[0] || !U ? 0 * x : x / 0 : NaN);
                    for (v = new a(x),
                        y = v.c = [],
                        f = i.e - o.e,
                        x = u + f + 1,
                        l || (l = N,
                            f = t(i.e / b) - t(o.e / b),
                            x = x / b | 0),
                        h = 0; U[h] == (L[h] || 0); h++)
                        ;
                    if (U[h] > (L[h] || 0) && f--,
                        0 > x)
                        y.push(1),
                            g = !0;
                    else {
                        for (E = L.length,
                            F = U.length,
                            h = 0,
                            x += 2,
                            d = p(l / (U[0] + 1)),
                            d > 1 && (U = e(U, d, l),
                                L = e(L, d, l),
                                F = U.length,
                                E = L.length),
                            A = F,
                            O = L.slice(0, F),
                            R = O.length; F > R; O[R++] = 0)
                            ;
                        _ = U.slice(),
                            _ = [0].concat(_),
                            D = U[0],
                            U[1] >= l / 2 && D++;
                        do {
                            if (d = 0,
                                c = n(U, O, F, R),
                                0 > c) {
                                if (S = O[0],
                                    F != R && (S = S * l + (O[1] || 0)),
                                    d = p(S / D),
                                    d > 1)
                                    for (d >= l && (d = l - 1),
                                        m = e(U, d, l),
                                        w = m.length,
                                        R = O.length; 1 == n(m, O, w, R);)
                                        d--,
                                            r(m, w > F ? _ : U, w, l),
                                            w = m.length,
                                            c = 1;
                                else
                                    0 == d && (c = d = 1),
                                        m = U.slice(),
                                        w = m.length;
                                if (R > w && (m = [0].concat(m)),
                                    r(O, m, R, l),
                                    R = O.length,
                                    -1 == c)
                                    for (; n(U, O, F, R) < 1;)
                                        d++,
                                            r(O, R > F ? _ : U, R, l),
                                            R = O.length
                            } else
                                0 === c && (d++,
                                    O = [0]);
                            y[h++] = d,
                                O[0] ? O[R++] = L[A] || 0 : (O = [L[A]],
                                    R = 1)
                        } while ((A++ < E || null != O[0]) && x--);
                        g = null != O[0],
                            y[0] || y.splice(0, 1)
                    }
                    if (l == N) {
                        for (h = 1,
                            x = y[0]; x >= 10; x /= 10,
                            h++)
                            ;
                        I(v, u + (v.e = h + f * b - 1) + 1, s, g)
                    } else
                        v.e = f,
                            v.r = +g;
                    return v
                }
            }(),
            U = function () {
                var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                    , n = /^([^.]+)\.$/
                    , t = /^\.([^.]+)$/
                    , r = /^-?(Infinity|NaN)$/
                    , i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                return function (o, u, s, l) {
                    var c, f = s ? u : u.replace(i, "");
                    if (r.test(f))
                        o.s = isNaN(f) ? null : 0 > f ? -1 : 1;
                    else {
                        if (!s && (f = f.replace(e, function (e, n, t) {
                            return c = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8,
                                l && l != c ? e : n
                        }),
                            l && (c = l,
                                f = f.replace(n, "$1").replace(t, "0.$1")),
                            u != f))
                            return new a(f, c);
                        z && x(C, "not a" + (l ? " base " + l : "") + " number", u),
                            o.s = null
                    }
                    o.c = o.e = null,
                        C = 0
                }
            }(),
            M.absoluteValue = M.abs = function () {
                var e = new a(this);
                return e.s < 0 && (e.s = 1),
                    e
            }
            ,
            M.ceil = function () {
                return I(new a(this), this.e + 1, 2)
            }
            ,
            M.comparedTo = M.cmp = function (e, n) {
                return C = 1,
                    i(this, new a(e, n))
            }
            ,
            M.decimalPlaces = M.dp = function () {
                var e, n, r = this.c;
                if (!r)
                    return null;
                if (e = ((n = r.length - 1) - t(this.e / b)) * b,
                    n = r[n])
                    for (; n % 10 == 0; n /= 10,
                        e--)
                        ;
                return 0 > e && (e = 0),
                    e
            }
            ,
            M.dividedBy = M.div = function (e, n) {
                return C = 3,
                    L(this, new a(e, n), B, P)
            }
            ,
            M.dividedToIntegerBy = M.divToInt = function (e, n) {
                return C = 4,
                    L(this, new a(e, n), 0, 1)
            }
            ,
            M.equals = M.eq = function (e, n) {
                return C = 5,
                    0 === i(this, new a(e, n))
            }
            ,
            M.floor = function () {
                return I(new a(this), this.e + 1, 3)
            }
            ,
            M.greaterThan = M.gt = function (e, n) {
                return C = 6,
                    i(this, new a(e, n)) > 0
            }
            ,
            M.greaterThanOrEqualTo = M.gte = function (e, n) {
                return C = 7,
                    1 === (n = i(this, new a(e, n))) || 0 === n
            }
            ,
            M.isFinite = function () {
                return !!this.c
            }
            ,
            M.isInteger = M.isInt = function () {
                return !!this.c && t(this.e / b) > this.c.length - 2
            }
            ,
            M.isNaN = function () {
                return !this.s
            }
            ,
            M.isNegative = M.isNeg = function () {
                return this.s < 0
            }
            ,
            M.isZero = function () {
                return !!this.c && 0 == this.c[0]
            }
            ,
            M.lessThan = M.lt = function (e, n) {
                return C = 8,
                    i(this, new a(e, n)) < 0
            }
            ,
            M.lessThanOrEqualTo = M.lte = function (e, n) {
                return C = 9,
                    -1 === (n = i(this, new a(e, n))) || 0 === n
            }
            ,
            M.minus = M.sub = function (e, n) {
                var r, i, o, u, s = this, l = s.s;
                if (C = 10,
                    e = new a(e, n),
                    n = e.s,
                    !l || !n)
                    return new a(NaN);
                if (l != n)
                    return e.s = -n,
                        s.plus(e);
                var c = s.e / b
                    , f = e.e / b
                    , h = s.c
                    , g = e.c;
                if (!c || !f) {
                    if (!h || !g)
                        return h ? (e.s = -n,
                            e) : new a(g ? s : NaN);
                    if (!h[0] || !g[0])
                        return g[0] ? (e.s = -n,
                            e) : new a(h[0] ? s : 3 == P ? -0 : 0)
                }
                if (c = t(c),
                    f = t(f),
                    h = h.slice(),
                    l = c - f) {
                    for ((u = 0 > l) ? (l = -l,
                        o = h) : (f = c,
                            o = g),
                        o.reverse(),
                        n = l; n--; o.push(0))
                        ;
                    o.reverse()
                } else
                    for (i = (u = (l = h.length) < (n = g.length)) ? l : n,
                        l = n = 0; i > n; n++)
                        if (h[n] != g[n]) {
                            u = h[n] < g[n];
                            break
                        }
                if (u && (o = h,
                    h = g,
                    g = o,
                    e.s = -e.s),
                    n = (i = g.length) - (r = h.length),
                    n > 0)
                    for (; n--; h[r++] = 0)
                        ;
                for (n = N - 1; i > l;) {
                    if (h[--i] < g[i]) {
                        for (r = i; r && !h[--r]; h[r] = n)
                            ;
                        --h[r],
                            h[i] += N
                    }
                    h[i] -= g[i]
                }
                for (; 0 == h[0]; h.splice(0, 1),
                    --f)
                    ;
                return h[0] ? _(e, h, f) : (e.s = 3 == P ? -1 : 1,
                    e.c = [e.e = 0],
                    e)
            }
            ,
            M.modulo = M.mod = function (e, n) {
                var t, r, i = this;
                return C = 11,
                    e = new a(e, n),
                    !i.c || !e.s || e.c && !e.c[0] ? new a(NaN) : !e.c || i.c && !i.c[0] ? new a(i) : (9 == H ? (r = e.s,
                        e.s = 1,
                        t = L(i, e, 0, 3),
                        e.s = r,
                        t.s *= r) : t = L(i, e, 0, H),
                        i.minus(t.times(e)))
            }
            ,
            M.negated = M.neg = function () {
                var e = new a(this);
                return e.s = -e.s || null,
                    e
            }
            ,
            M.plus = M.add = function (e, n) {
                var r, i = this, o = i.s;
                if (C = 12,
                    e = new a(e, n),
                    n = e.s,
                    !o || !n)
                    return new a(NaN);
                if (o != n)
                    return e.s = -n,
                        i.minus(e);
                var u = i.e / b
                    , s = e.e / b
                    , l = i.c
                    , c = e.c;
                if (!u || !s) {
                    if (!l || !c)
                        return new a(o / 0);
                    if (!l[0] || !c[0])
                        return c[0] ? e : new a(l[0] ? i : 0 * o)
                }
                if (u = t(u),
                    s = t(s),
                    l = l.slice(),
                    o = u - s) {
                    for (o > 0 ? (s = u,
                        r = c) : (o = -o,
                            r = l),
                        r.reverse(); o--; r.push(0))
                        ;
                    r.reverse()
                }
                for (o = l.length,
                    n = c.length,
                    0 > o - n && (r = c,
                        c = l,
                        l = r,
                        n = o),
                    o = 0; n;)
                    o = (l[--n] = l[n] + c[n] + o) / N | 0,
                        l[n] = N === l[n] ? 0 : l[n] % N;
                return o && (l = [o].concat(l),
                    ++s),
                    _(e, l, s)
            }
            ,
            M.precision = M.sd = function (e) {
                var n, t, r = this, i = r.c;
                if (null != e && e !== !!e && 1 !== e && 0 !== e && (z && x(13, "argument" + d, e),
                    e != !!e && (e = null)),
                    !i)
                    return null;
                if (t = i.length - 1,
                    n = t * b + 1,
                    t = i[t]) {
                    for (; t % 10 == 0; t /= 10,
                        n--)
                        ;
                    for (t = i[0]; t >= 10; t /= 10,
                        n++)
                        ;
                }
                return e && r.e + 1 > n && (n = r.e + 1),
                    n
            }
            ,
            M.round = function (e, n) {
                var t = new a(this);
                return (null == e || V(e, 0, S, 15)) && I(t, ~~e + this.e + 1, null != n && V(n, 0, 8, 15, m) ? 0 | n : P),
                    t
            }
            ,
            M.shift = function (e) {
                var n = this;
                return V(e, -y, y, 16, "argument") ? n.times("1e" + f(e)) : new a(n.c && n.c[0] && (-y > e || e > y) ? n.s * (0 > e ? 0 : 1 / 0) : n)
            }
            ,
            M.squareRoot = M.sqrt = function () {
                var e, n, i, o, u, s = this, l = s.c, c = s.s, f = s.e, h = B + 4, g = new a("0.5");
                if (1 !== c || !l || !l[0])
                    return new a(!c || 0 > c && (!l || l[0]) ? NaN : l ? s : 1 / 0);
                if (c = Math.sqrt(+s),
                    0 == c || c == 1 / 0 ? (n = r(l),
                        (n.length + f) % 2 == 0 && (n += "0"),
                        c = Math.sqrt(n),
                        f = t((f + 1) / 2) - (0 > f || f % 2),
                        c == 1 / 0 ? n = "1e" + f : (n = c.toExponential(),
                            n = n.slice(0, n.indexOf("e") + 1) + f),
                        i = new a(n)) : i = new a(c + ""),
                    i.c[0])
                    for (f = i.e,
                        c = f + h,
                        3 > c && (c = 0); ;)
                        if (u = i,
                            i = g.times(u.plus(L(s, u, h, 1))),
                            r(u.c).slice(0, c) === (n = r(i.c)).slice(0, c)) {
                            if (i.e < f && --c,
                                n = n.slice(c - 3, c + 1),
                                "9999" != n && (o || "4999" != n)) {
                                (!+n || !+n.slice(1) && "5" == n.charAt(0)) && (I(i, i.e + B + 2, 1),
                                    e = !i.times(i).eq(s));
                                break
                            }
                            if (!o && (I(u, u.e + B + 2, 0),
                                u.times(u).eq(s))) {
                                i = u;
                                break
                            }
                            h += 4,
                                c += 4,
                                o = 1
                        }
                return I(i, i.e + B + 1, P, e)
            }
            ,
            M.times = M.mul = function (e, n) {
                var r, i, o, u, s, l, c, f, h, g, p, d, m, w, v, y = this, O = y.c, S = (C = 17,
                    e = new a(e, n)).c;
                if (!(O && S && O[0] && S[0]))
                    return !y.s || !e.s || O && !O[0] && !S || S && !S[0] && !O ? e.c = e.e = e.s = null : (e.s *= y.s,
                        O && S ? (e.c = [0],
                            e.e = 0) : e.c = e.e = null),
                        e;
                for (i = t(y.e / b) + t(e.e / b),
                    e.s *= y.s,
                    c = O.length,
                    g = S.length,
                    g > c && (m = O,
                        O = S,
                        S = m,
                        o = c,
                        c = g,
                        g = o),
                    o = c + g,
                    m = []; o--; m.push(0))
                    ;
                for (w = N,
                    v = R,
                    o = g; --o >= 0;) {
                    for (r = 0,
                        p = S[o] % v,
                        d = S[o] / v | 0,
                        s = c,
                        u = o + s; u > o;)
                        f = O[--s] % v,
                            h = O[s] / v | 0,
                            l = d * f + h * p,
                            f = p * f + l % v * v + m[u] + r,
                            r = (f / w | 0) + (l / v | 0) + d * h,
                            m[u--] = f % w;
                    m[u] = r
                }
                return r ? ++i : m.splice(0, 1),
                    _(e, m, i)
            }
            ,
            M.toDigits = function (e, n) {
                var t = new a(this);
                return e = null != e && V(e, 1, S, 18, "precision") ? 0 | e : null,
                    n = null != n && V(n, 0, 8, 18, m) ? 0 | n : P,
                    e ? I(t, e, n) : t
            }
            ,
            M.toExponential = function (e, n) {
                return E(this, null != e && V(e, 0, S, 19) ? ~~e + 1 : null, n, 19)
            }
            ,
            M.toFixed = function (e, n) {
                return E(this, null != e && V(e, 0, S, 20) ? ~~e + this.e + 1 : null, n, 20)
            }
            ,
            M.toFormat = function (e, n) {
                var t = E(this, null != e && V(e, 0, S, 21) ? ~~e + this.e + 1 : null, n, 21);
                if (this.c) {
                    var r, i = t.split("."), o = +J.groupSize, u = +J.secondaryGroupSize, s = J.groupSeparator, l = i[0], c = i[1], f = this.s < 0, a = f ? l.slice(1) : l, h = a.length;
                    if (u && (r = o,
                        o = u,
                        u = r,
                        h -= r),
                        o > 0 && h > 0) {
                        for (r = h % o || o,
                            l = a.substr(0, r); h > r; r += o)
                            l += s + a.substr(r, o);
                        u > 0 && (l += s + a.slice(r)),
                            f && (l = "-" + l)
                    }
                    t = c ? l + J.decimalSeparator + ((u = +J.fractionGroupSize) ? c.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + J.fractionGroupSeparator) : c) : l
                }
                return t
            }
            ,
            M.toFraction = function (e) {
                var n, t, i, o, u, s, l, c, f, h = z, g = this, p = g.c, d = new a(T), m = t = new a(T), w = l = new a(T);
                if (null != e && (z = !1,
                    s = new a(e),
                    z = h,
                    (!(h = s.isInt()) || s.lt(T)) && (z && x(22, "max denominator " + (h ? "out of range" : "not an integer"), e),
                        e = !h && s.c && I(s, s.e + 1, 1).gte(T) ? s : null)),
                    !p)
                    return g.toString();
                for (f = r(p),
                    o = d.e = f.length - g.e - 1,
                    d.c[0] = O[(u = o % b) < 0 ? b + u : u],
                    e = !e || s.cmp(d) > 0 ? o > 0 ? d : m : s,
                    u = G,
                    G = 1 / 0,
                    s = new a(f),
                    l.c[0] = 0; c = L(s, d, 0, 1),
                    i = t.plus(c.times(w)),
                    1 != i.cmp(e);)
                    t = w,
                        w = i,
                        m = l.plus(c.times(i = m)),
                        l = i,
                        d = s.minus(c.times(i = d)),
                        s = i;
                return i = L(e.minus(t), w, 0, 1),
                    l = l.plus(i.times(m)),
                    t = t.plus(i.times(w)),
                    l.s = m.s = g.s,
                    o *= 2,
                    n = L(m, w, o, P).minus(g).abs().cmp(L(l, t, o, P).minus(g).abs()) < 1 ? [m.toString(), w.toString()] : [l.toString(), t.toString()],
                    G = u,
                    n
            }
            ,
            M.toNumber = function () {
                return +this
            }
            ,
            M.toPower = M.pow = function (e, n) {
                var t, r, i, o = p(0 > e ? -e : +e), u = this;
                if (null != n && (C = 23,
                    n = new a(n)),
                    !V(e, -y, y, 23, "exponent") && (!isFinite(e) || o > y && (e /= 0) || parseFloat(e) != e && !(e = NaN)) || 0 == e)
                    return t = Math.pow(+u, e),
                        new a(n ? t % n : t);
                for (n ? e > 1 && u.gt(T) && u.isInt() && n.gt(T) && n.isInt() ? u = u.mod(n) : (i = n,
                    n = null) : W && (t = g(W / b + 2)),
                    r = new a(T); ;) {
                    if (o % 2) {
                        if (r = r.times(u),
                            !r.c)
                            break;
                        t ? r.c.length > t && (r.c.length = t) : n && (r = r.mod(n))
                    }
                    if (o = p(o / 2),
                        !o)
                        break;
                    u = u.times(u),
                        t ? u.c && u.c.length > t && (u.c.length = t) : n && (u = u.mod(n))
                }
                return n ? r : (0 > e && (r = T.div(r)),
                    i ? r.mod(i) : t ? I(r, W, P) : r)
            }
            ,
            M.toPrecision = function (e, n) {
                return E(this, null != e && V(e, 1, S, 24, "precision") ? 0 | e : null, n, 24)
            }
            ,
            M.toString = function (e) {
                var n, t = this, i = t.s, o = t.e;
                return null === o ? i ? (n = "Infinity",
                    0 > i && (n = "-" + n)) : n = "NaN" : (n = r(t.c),
                        n = null != e && V(e, 2, 64, 25, "base") ? A(c(n, o), 0 | e, 10, i) : q >= o || o >= k ? l(n, o) : c(n, o),
                        0 > i && t.c[0] && (n = "-" + n)),
                    n
            }
            ,
            M.truncated = M.trunc = function () {
                return I(new a(this), this.e + 1, 1)
            }
            ,
            M.valueOf = M.toJSON = function () {
                var e, n = this, t = n.e;
                return null === t ? n.toString() : (e = r(n.c),
                    e = q >= t || t >= k ? l(e, t) : c(e, t),
                    n.s < 0 ? "-" + e : e)
            }
            ,
            M.isBigNumber = !0,
            null != e && a.config(e),
            a
    }
    function t(e) {
        var n = 0 | e;
        return e > 0 || e === n ? n : n - 1
    }
    function r(e) {
        for (var n, t, r = 1, i = e.length, o = e[0] + ""; i > r;) {
            for (n = e[r++] + "",
                t = b - n.length; t--; n = "0" + n)
                ;
            o += n
        }
        for (i = o.length; 48 === o.charCodeAt(--i);)
            ;
        return o.slice(0, i + 1 || 1)
    }
    function i(e, n) {
        var t, r, i = e.c, o = n.c, u = e.s, s = n.s, l = e.e, c = n.e;
        if (!u || !s)
            return null;
        if (t = i && !i[0],
            r = o && !o[0],
            t || r)
            return t ? r ? 0 : -s : u;
        if (u != s)
            return u;
        if (t = 0 > u,
            r = l == c,
            !i || !o)
            return r ? 0 : !i ^ t ? 1 : -1;
        if (!r)
            return l > c ^ t ? 1 : -1;
        for (s = (l = i.length) < (c = o.length) ? l : c,
            u = 0; s > u; u++)
            if (i[u] != o[u])
                return i[u] > o[u] ^ t ? 1 : -1;
        return l == c ? 0 : l > c ^ t ? 1 : -1
    }
    function o(e, n, t) {
        return (e = f(e)) >= n && t >= e
    }
    function u(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
    function s(e, n, t) {
        for (var r, i, o = [0], u = 0, s = e.length; s > u;) {
            for (i = o.length; i--; o[i] *= n)
                ;
            for (o[r = 0] += v.indexOf(e.charAt(u++)); r < o.length; r++)
                o[r] > t - 1 && (null == o[r + 1] && (o[r + 1] = 0),
                    o[r + 1] += o[r] / t | 0,
                    o[r] %= t)
        }
        return o.reverse()
    }
    function l(e, n) {
        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (0 > n ? "e" : "e+") + n
    }
    function c(e, n) {
        var t, r;
        if (0 > n) {
            for (r = "0."; ++n; r += "0")
                ;
            e = r + e
        } else if (t = e.length,
            ++n > t) {
            for (r = "0",
                n -= t; --n; r += "0")
                ;
            e += r
        } else
            t > n && (e = e.slice(0, n) + "." + e.slice(n));
        return e
    }
    function f(e) {
        return e = parseFloat(e),
            0 > e ? g(e) : p(e)
    }
    var a, h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, g = Math.ceil, p = Math.floor, d = " not a boolean or binary digit", m = "rounding mode", w = "number type has more than 15 significant digits", v = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", N = 1e14, b = 14, y = 9007199254740991, O = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], R = 1e7, S = 1e9;
    a = n(),
        a["default"] = a.BigNumber = a,
        "function" == typeof define && define.amd ? define(function () {
            return a
        }) : "undefined" != typeof module && module.exports ? module.exports = a : (e || (e = "undefined" != typeof self ? self : Function("return this")()),
            e.BigNumber = a)
}(this);
;