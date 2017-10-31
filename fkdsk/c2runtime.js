'use strict';

function n() {
    return function() {}
}

function aa(f) {
    return function() {
        return this[f]
    }
}

function ba(f) {
    return function() {
        return f
    }
}
var da, ea, fa, ga, ha, ia, ja, ka, la, oa, pa, qa, ra, sa, ta, ua, va, ya, za, Aa, Ba, Ca, Da, p, Ea, Fa, Ga, Ha, Ia, Ja, Ka, Ma, Na, Oa, Ra, Sa, Ta, Xa, Ya, Za, $a, ab, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc = {}, ec = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(f) {
    return f.__proto__
} : function(f) {
    return f.constructor.prototype
});
(function() {
    function f(d, e, m, a) {
        this.set(d, e, m, a)
    }

    function h() {
        this.Ib = this.Hb = this.Kb = this.Jb = this.Sb = this.Rb = this.ib = this.hb = 0
    }

    function b(d, e, m, a) {
        d < e ? m < a ? (r = d < m ? d : m, l = e > a ? e : a) : (r = d < a ? d : a, l = e > m ? e : m) : m < a ? (r = e < m ? e : m, l = d > a ? d : a) : (r = e < a ? e : a, l = d > m ? d : m)
    }

    function c() {
        this.Zd = this.Cd = null;
        this.gg = 0;
        m && (this.Cd = new Set);
        this.Hg = [];
        this.ue = !0
    }

    function a(d) {
        D[L++] = d
    }

    function e() {
        this.Oa = this.ek = this.y = this.Jk = 0
    }

    function q(d) {
        this.xg = [];
        this.zn = this.Bn = this.Cn = this.An = 0;
        this.Wh(d)
    }

    function A(d, e) {
        this.Yq = d;
        this.Xq = e;
        this.cells = {}
    }

    function g(d, e, m) {
        var a;
        return J.length ? (a = J.pop(), a.Bs = d, a.x = e, a.y = m, a) : new ea(d, e, m)
    }

    function k(d, e, m) {
        this.Bs = d;
        this.x = e;
        this.y = m;
        this.uj = new fa
    }
    ga = function(d) {
        window.console && window.console.log && window.console.log(d)
    };
    da = function(d) {
        return d
    };
    ha = function(d) {
        return "undefined" === typeof d
    };
    ia = function(d) {
        return "number" === typeof d
    };
    ja = function(d) {
        return "string" === typeof d
    };
    ka = function(d) {
        return 0 < d && 0 === (d - 1 & d)
    };
    la = function(d) {
        --d;
        for (var e = 1; 32 > e; e <<= 1) d |= d >> e;
        return d + 1
    };
    oa = function(d) {
        return 0 > d ? -d : d
    };
    pa = function(d, e) {
        return d > e ? d : e
    };
    qa = function(d, e) {
        return d < e ? d : e
    };
    ra = Math.PI;
    sa = function(d) {
        return 0 <= d ? d | 0 : (d | 0) - 1
    };
    ta = function(d) {
        var e = d | 0;
        return e === d ? e : e + 1
    };
    ua = function(d, e, m, a, b, v, l, k) {
        var y, D, q, g;
        d < m ? (D = d, y = m) : (D = m, y = d);
        b < l ? (g = b, q = l) : (g = l, q = b);
        if (y < g || D > q) return !1;
        e < a ? (D = e, y = a) : (D = a, y = e);
        v < k ? (g = v, q = k) : (g = k, q = v);
        if (y < g || D > q) return !1;
        y = b - d + l - m;
        D = v - e + k - a;
        d = m - d;
        e = a - e;
        b = l - b;
        v = k - v;
        k = oa(e * b - v * d);
        return oa(b * D - v * y) > k ? !1 : oa(d * D - e * y) <= k
    };
    f.prototype.set = function(d, e, m, a) {
        this.left = d;
        this.top = e;
        this.right = m;
        this.bottom = a
    };
    f.prototype.copy = function(d) {
        this.left = d.left;
        this.top = d.top;
        this.right = d.right;
        this.bottom = d.bottom
    };
    f.prototype.width = function() {
        return this.right - this.left
    };
    f.prototype.height = function() {
        return this.bottom - this.top
    };
    f.prototype.offset = function(d, e) {

        this.left += d;
        this.top += e;
        this.right += d;
        this.bottom += e;
        return this
    };
    f.prototype.normalize = function() {
        var d = 0;
        this.left > this.right && (d = this.left, this.left = this.right, this.right = d);
        this.top > this.bottom && (d = this.top, this.top = this.bottom, this.bottom = d)
    };
    f.prototype.cd = function(d, e) {
        return d >= this.left && d <= this.right && e >= this.top && e <= this.bottom
    };
    f.prototype.ur = function(d) {
        return this.left === d.left && this.top === d.top && this.right === d.right && this.bottom === d.bottom
    };
    va = f;
    h.prototype.Zj = function(d) {
        this.hb = d.left;
        this.ib = d.top;
        this.Rb = d.right;
        this.Sb = d.top;
        this.Jb = d.right;
        this.Kb = d.bottom;
        this.Hb = d.left;
        this.Ib = d.bottom
    };
    h.prototype.Ep = function(d, e) {
        if (0 === e) this.Zj(d);
        else {
            var m = Math.sin(e),
                a = Math.cos(e),
                b = d.left * m,
                v = d.top * m,
                l = d.right * m,
                m = d.bottom * m,
                k = d.left * a,
                y = d.top * a,
                D = d.right * a,
                a = d.bottom * a;
            this.hb = k - v;
            this.ib = y + b;
            this.Rb = D - v;
            this.Sb = y + l;
            this.Jb = D - m;
            this.Kb = a + l;
            this.Hb = k - m;
            this.Ib = a + b
        }
    };
    h.prototype.offset = function(d, e) {
        this.hb += d;
        this.ib += e;
        this.Rb += d;
        this.Sb += e;
        this.Jb += d;
        this.Kb += e;
        this.Hb += d;
        this.Ib += e;
        return this
    };
    var r = 0,
        l = 0;
    h.prototype.En = function(d) {
        b(this.hb, this.Rb, this.Jb, this.Hb);
        d.left = r;
        d.right = l;
        b(this.ib, this.Sb, this.Kb, this.Ib);
        d.top = r;
        d.bottom = l
    };
    h.prototype.cd = function(d, e) {
        var m = this.Rb - this.hb,
            a = this.Sb - this.ib,
            b = this.Jb - this.hb,
            v = this.Kb - this.ib,
            l = d - this.hb,
            k = e - this.ib,
            y = m * m + a * a,
            D = m * b + a * v,
            a = m * l + a * k,
            q = b * b + v * v,
            g = b * l + v * k,
            c = 1 / (y * q - D * D),
            m = (q * a - D * g) * c,
            y = (y * g - D * a) * c;
        if (0 <= m && 0 < y && 1 > m + y) return !0;
        m = this.Hb - this.hb;
        a = this.Ib - this.ib;
        y = m * m + a * a;
        D = m * b + a * v;
        a = m * l + a * k;
        c = 1 / (y * q - D * D);
        m = (q * a - D * g) * c;
        y = (y * g - D * a) * c;
        return 0 <= m && 0 < y && 1 > m + y
    };
    ya = h;
    za = function(d, e) {
        for (var m in e) e.hasOwnProperty(m) && (d[m] = e[m]);
        return d
    };
    Aa = function(d, e) {
        var m, a;
        e = sa(e);
        if (!(0 > e || e >= d.length)) {
            m = e;
            for (a = d.length - 1; m < a; m++) d[m] = d[m + 1];
            d.length = a
        }
    };
    Ba = function(d, e) {
        d.length = e.length;
        var m, a;
        m = 0;
        for (a = e.length; m < a; m++) d[m] = e[m]
    };
    Ca = function(d, e) {
        var m, a;
        m = 0;
        for (a = d.length; m < a; ++m)
            if (d[m] === e) return m;
        return -1
    };
    Da = function(d, e) {
        var m = Ca(d, e); - 1 !== m && Aa(d, m)
    };
    p = function(d) {
        return d / (180 / ra)
    };
    Ea = function(d) {
        return d * (180 / ra)
    };
    Fa = function(d) {
        d %= 360;
        0 > d && (d += 360);
        return d
    };
    Ga = function(d) {
        d %= 2 * ra;
        0 > d && (d += 2 * ra);

        return d
    };
    Ha = function(d) {
        return Fa(Ea(d))
    };
    Ia = function(d) {
        return Ga(p(d))
    };
    Ja = function(d, e, m, a) {
        return Math.atan2(a - e, m - d)
    };
    Ka = function(d, e) {
        if (d === e) return 0;
        var m = Math.sin(d),
            a = Math.cos(d),
            b = Math.sin(e),
            v = Math.cos(e),
            m = m * b + a * v;
        return 1 <= m ? 0 : -1 >= m ? ra : Math.acos(m)
    };
    Ma = function(d, e, m) {
        var a = Math.sin(d),
            b = Math.cos(d),
            v = Math.sin(e),
            l = Math.cos(e);
        return Math.acos(a * v + b * l) > m ? 0 < b * v - a * l ? Ga(d + m) : Ga(d - m) : Ga(e)
    };
    Na = function(d, e) {
        var m = Math.sin(d),
            a = Math.cos(d),
            b = Math.sin(e),
            v = Math.cos(e);
        return 0 >= a * b - m * v
    };
    Oa = function(d, e, m, a, b, v) {
        if (0 === m) return v ? d : e;
        var l = Math.sin(m);
        m = Math.cos(m);
        d -= a;
        e -= b;
        var y = d * l;
        d = d * m - e * l;
        e = e * m + y;
        return v ? d + a : e + b
    };
    Ra = function(d, e, m, a) {
        d = m - d;
        e = a - e;
        return Math.sqrt(d * d + e * e)
    };
    Sa = function(d, e) {
        return !d !== !e
    };
    Ta = function(d) {
        for (var e in d)
            if (d.hasOwnProperty(e)) return !0;
        return !1
    };
    Xa = function(d) {
        for (var e in d) d.hasOwnProperty(e) && delete d[e]
    };
    var x = +new Date;
    Ya = function() {
        if ("undefined" !== typeof window.performance) {
            var d = window.performance;
            if ("undefined" !== typeof d.now) return d.now();
            if ("undefined" !== typeof d.webkitNow) return d.webkitNow();
            if ("undefined" !== typeof d.mozNow) return d.mozNow();
            if ("undefined" !== typeof d.msNow) return d.msNow()
        }
        return Date.now() - x
    };
    var d = !1,
        v = d = !1,
        y = !1;
    "undefined" !== typeof window && (d = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), d = !d && /safari/i.test(navigator.userAgent), v = /(iphone|ipod|ipad)/i.test(navigator.userAgent), y = window.c2ejecta);
    var m = !d && !y && !v && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    c.prototype.contains = function(d) {
        return this.dd() ? !1 : m ? this.Cd.has(d) : this.Zd && this.Zd.hasOwnProperty(d)
    };
    c.prototype.add = function(d) {
        if (m) this.Cd.has(d) || (this.Cd.add(d), this.ue = !1);
        else {
            var e = d.toString(),
                a = this.Zd;
            a ? a.hasOwnProperty(e) || (a[e] = d, this.gg++, this.ue = !1) : (this.Zd = {}, this.Zd[e] = d, this.gg = 1, this.ue = !1)
        }
    };
    c.prototype.remove = function(d) {
        if (!this.dd())
            if (m) this.Cd.has(d) && (this.Cd["delete"](d), this.ue = !1);
            else if (this.Zd) {
            d = d.toString();
            var e = this.Zd;
            e.hasOwnProperty(d) && (delete e[d], this.gg--, this.ue = !1)
        }
    };
    c.prototype.clear = function() {
        this.dd() || (m ? this.Cd.clear() : (this.Zd = null, this.gg = 0), this.Hg.length = 0, this.ue = !0)
    };
    c.prototype.dd = function() {
        return 0 === this.count()
    };
    c.prototype.count = function() {
        return m ? this.Cd.size : this.gg
    };
    var D = null,
        L = 0;
    c.prototype.Zt = function() {
        if (!this.ue) {
            if (m) this.Hg.length = this.Cd.size, D = this.Hg, L = 0, this.Cd.forEach(a), D = null, L = 0;
            else {
                var d = this.Hg;
                d.length = this.gg;
                var e, b = 0,
                    v = this.Zd;
                if (v)
                    for (e in v) v.hasOwnProperty(e) && (d[b++] = v[e])
            }
            this.ue = !0
        }
    };
    c.prototype.Gf = function() {
        this.Zt();
        return this.Hg
    };
    fa = c;
    new fa;
    e.prototype.add = function(d) {
        this.y = d - this.Jk;
        this.ek = this.Oa + this.y;
        this.Jk = this.ek - this.Oa - this.y;
        this.Oa = this.ek
    };
    e.prototype.reset = function() {
        this.Oa = this.ek = this.y = this.Jk = 0
    };
    Za = e;
    $a = function(d) {
        return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    q.prototype.Wh = function(d) {
        this.tp = d;
        this.Nj = d.length / 2;
        this.xg.length = d.length;
        this.Kk = this.Lk = -1;
        this.Gn = 0
    };
    q.prototype.Ss = function() {
        return !this.tp.length
    };
    q.prototype.fc = function() {
        for (var d = this.xg, e = d[0], m = e, a = d[1], b = a, v, l, y = 1, k = this.Nj; y < k; ++y) l = 2 * y, v = d[l], l = d[l + 1], v < e && (e = v), v > m && (m = v), l < a && (a = l), l > b && (b = l);
        this.An = e;
        this.Bn = m;
        this.Cn = a;
        this.zn = b
    };
    q.prototype.Zj = function(d, e, m) {
        this.xg.length = 8;
        this.Nj = 4;
        var a = this.xg;
        a[0] = d.left - e;
        a[1] = d.top - m;
        a[2] = d.right - e;
        a[3] = d.top - m;
        a[4] = d.right - e;
        a[5] = d.bottom - m;
        a[6] = d.left - e;
        a[7] = d.bottom - m;
        this.Lk = d.right - d.left;
        this.Kk = d.bottom - d.top;
        this.fc()
    };
    q.prototype.Vq = function(d, e, m) {
        if (this.Lk !== d || this.Kk !== e || this.Gn !== m) {
            this.Lk = d;
            this.Kk = e;
            this.Gn = m;
            var a, b, v, l, y, k = 0,
                D = 1,
                q = this.tp,
                g = this.xg;
            0 !== m && (k = Math.sin(m), D = Math.cos(m));
            m = 0;
            for (v = this.Nj; m < v; m++) a = 2 * m, b = a + 1, l = q[a] * d, y = q[b] * e, g[a] = l * D - y * k, g[b] = y * D + l * k;
            this.fc()
        }
    };
    q.prototype.cd = function(d, e) {
        var m = this.xg;
        if (d === m[0] && e === m[1]) return !0;
        var a, b, v, l = this.Nj,
            y = this.An - 110,
            k = this.Cn - 101,
            D = this.Bn + 131,
            q = this.zn + 120,
            g, c, A = 0,
            L = 0;
        for (a = 0; a < l; a++) b = 2 * a, v = 2 * ((a + 1) % l), g = m[b], b = m[b + 1], c = m[v], v = m[v + 1], ua(y, k, d, e, g, b, c, v) && A++, ua(D, q, d, e, g, b, c, v) && L++;
        return 1 === A % 2 || 1 === L % 2
    };
    ab = q;
    A.prototype.bo = function(d, e, m) {
        var a;
        a = this.cells[d];
        return a ? (a = a[e]) ? a : m ? (a = g(this, d, e), this.cells[d][e] = a) : null : m ? (a = g(this, d, e), this.cells[d] = {}, this.cells[d][e] = a) : null
    };
    A.prototype.kn = function(d) {
        return sa(d / this.Yq)
    };
    A.prototype.ln = function(d) {
        return sa(d / this.Xq)
    };
    A.prototype.update = function(d, e, m) {
        var a, b, v, l, y;
        if (e)
            for (a = e.left, b = e.right; a <= b; ++a)
                for (v = e.top, l = e.bottom; v <= l; ++v)
                    if (!m || !m.cd(a, v))
                        if (y = this.bo(a, v, !1)) y.remove(d), y.dd() && (y.uj.clear(), 1E3 > J.length && J.push(y), this.cells[a][v] = null);
        if (m)
            for (a = m.left, b = m.right; a <= b; ++a)
                for (v = m.top, l = m.bottom; v <= l; ++v) e && e.cd(a, v) || this.bo(a, v, !0).Hs(d)
    };
    fb = A;
    var J = [];
    k.prototype.dd = function() {
        return this.uj.dd()
    };
    k.prototype.Hs = function(d) {
        this.uj.add(d)
    };
    k.prototype.remove = function(d) {
        this.uj.remove(d)
    };
    ea = k;
    var F = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    gb = function(d) {
        return 0 >= d || 11 <= d ? "source-over" : F[d - 1]
    };
    hb = function(d, e, m) {
        if (m) switch (d.Qb = m.ONE, d.Nb = m.ONE_MINUS_SRC_ALPHA, e) {
            case 1:
                d.Qb = m.ONE;
                d.Nb = m.ONE;
                break;
            case 3:
                d.Qb = m.ONE;
                d.Nb = m.ZERO;
                break;
            case 4:
                d.Qb = m.ONE_MINUS_DST_ALPHA;
                d.Nb = m.ONE;
                break;
            case 5:
                d.Qb = m.DST_ALPHA;
                d.Nb = m.ZERO;
                break;
            case 6:
                d.Qb = m.ZERO;
                d.Nb = m.SRC_ALPHA;
                break;
            case 7:
                d.Qb = m.ONE_MINUS_DST_ALPHA;
                d.Nb = m.ZERO;
                break;
            case 8:
                d.Qb = m.ZERO;
                d.Nb = m.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                d.Qb = m.DST_ALPHA;
                d.Nb = m.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                d.Qb = m.ONE_MINUS_DST_ALPHA, d.Nb = m.SRC_ALPHA
        }
    };
    ib = function(d) {
        return Math.round(1E6 * d) / 1E6
    };
    jb = function(d, e) {
        return "string" !== typeof d || "string" !== typeof e || d.length !== e.length ? !1 : d === e ? !0 : d.toLowerCase() === e.toLowerCase()
    };
    kb = function(d) {
        d = d.target;
        return !d || d === document || d === window || document && document.body && d === document.body || jb(d.tagName, "canvas") ? !0 : !1
    }
})();
var fc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function gc(f) {
    var h = new fc(3);
    f && (h[0] = f[0], h[1] = f[1], h[2] = f[2]);
    return h
}

function hc(f) {
    var h = new fc(16);
    f && (h[0] = f[0], h[1] = f[1], h[2] = f[2], h[3] = f[3], h[4] = f[4], h[5] = f[5], h[6] = f[6], h[7] = f[7], h[8] = f[8], h[9] = f[9], h[10] = f[10], h[11] = f[11], h[12] = f[12], h[13] = f[13], h[14] = f[14], h[15] = f[15]);
    return h
}

function ic(f, h) {
    h[0] = f[0];
    h[1] = f[1];
    h[2] = f[2];
    h[3] = f[3];
    h[4] = f[4];
    h[5] = f[5];
    h[6] = f[6];
    h[7] = f[7];
    h[8] = f[8];
    h[9] = f[9];
    h[10] = f[10];
    h[11] = f[11];
    h[12] = f[12];
    h[13] = f[13];
    h[14] = f[14];
    h[15] = f[15]
}

function jc(f, h) {
    var b = h[0],
        c = h[1];
    h = h[2];
    f[0] *= b;
    f[1] *= b;
    f[2] *= b;
    f[3] *= b;
    f[4] *= c;
    f[5] *= c;
    f[6] *= c;
    f[7] *= c;
    f[8] *= h;
    f[9] *= h;
    f[10] *= h;
    f[11] *= h
}

function kc(f, h, b, c) {
    c || (c = hc());
    var a, e, q, A, g, k, r, l, x = f[0],
        d = f[1];
    f = f[2];
    e = b[0];
    q = b[1];
    a = b[2];
    b = h[1];
    k = h[2];
    x === h[0] && d === b && f === k ? (f = c, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (b = x - h[0], k = d - h[1], r = f - h[2], l = 1 / Math.sqrt(b * b + k * k + r * r), b *= l, k *= l, r *= l, h = q * r - a * k, a = a * b - e * r, e = e * k - q * b, (l = Math.sqrt(h * h + a * a + e * e)) ? (l = 1 / l, h *= l, a *= l, e *= l) : e = a = h = 0, q = k * e - r * a, A = r * h - b * e, g = b * a - k * h, (l = Math.sqrt(q * q + A * A + g * g)) ? (l = 1 / l, q *= l, A *= l, g *= l) : g = A = q = 0, c[0] = h, c[1] = q, c[2] = b, c[3] = 0, c[4] = a, c[5] = A, c[6] = k, c[7] = 0, c[8] = e, c[9] = g, c[10] = r, c[11] = 0, c[12] = -(h * x + a * d + e * f), c[13] = -(q * x + A * d + g * f), c[14] = -(b * x + k * d + r * f), c[15] = 1)
}(function() {
    function f(e) {
        this.bg = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Hn = gc([0, 0, 100]);
        this.Po = gc([0, 0, 0]);
        this.Vp = gc([0, 1, 0]);
        this.Rm = gc([1, 1, 1]);
        this.Tn = !0;
        this.Sl = hc();
        this.Uc = hc();
        this.Ho = hc();
        this.Sk = hc();
        this.G = e;
        this.so()
    }

    function h(e, a, b) {
        this.G = e;
        this.Xh = a;
        this.name = b;
        this.Tc = e.getAttribLocation(a, "aPos");
        this.Ge = e.getAttribLocation(a, "aTex");
        this.No = e.getUniformLocation(a, "matP");
        this.kg = e.getUniformLocation(a, "matMV");
        this.lg = e.getUniformLocation(a, "opacity");
        this.Oo = e.getUniformLocation(a, "samplerFront");
        this.Bh = e.getUniformLocation(a, "samplerBack");
        this.wf = e.getUniformLocation(a, "destStart");
        this.vf = e.getUniformLocation(a, "destEnd");
        this.Ol = e.getUniformLocation(a, "seconds");
        this.Nl = e.getUniformLocation(a, "pixelWidth");
        this.Ml = e.getUniformLocation(a, "pixelHeight");
        this.Ah = e.getUniformLocation(a, "layerScale");
        this.zh = e.getUniformLocation(a, "layerAngle");
        this.Ch = e.getUniformLocation(a, "viewOrigin");
        this.Es = !! (this.Nl || this.Ml || this.Ol || this.Bh || this.wf || this.vf || this.Ah || this.zh || this.Ch);
        this.lg && e.uniform1f(this.lg, 1);
        this.Oo && e.uniform1i(this.Oo, 0);
        this.Bh && e.uniform1i(this.Bh, 1);
        this.wf && e.uniform2f(this.wf, 0, 0);
        this.vf && e.uniform2f(this.vf, 1, 1);
        this.Ah && e.uniform1f(this.Ah, 1);
        this.zh && e.uniform1f(this.zh, 0);
        this.Ch && e.uniform2f(this.Ch, 0, 0);
        this.lf = !1
    }

    function b(e, a) {
        this.type = e;
        this.J = a;
        this.G = a.G;
        this.wd = this.Wc = this.hp = 0;
        this.za = this.nd = null;
        this.Fp = []
    }
    f.prototype.so = function() {
        var e = this.G,
            a;
        this.Io = 1;
        this.rf = this.qf = null;
        this.Pn = 1;
        e.clearColor(0, 0, 0, 0);
        e.clear(e.COLOR_BUFFER_BIT);
        e.enable(e.BLEND);
        e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
        e.disable(e.CULL_FACE);
        e.disable(e.DEPTH_TEST);
        this.Jo = e.ONE;
        this.Go = e.ONE_MINUS_SRC_ALPHA;
        this.im = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, this.im);
        this.ki = Array(4);
        this.ci = Array(4);
        for (a = 0; 4 > a; a++) this.ki[a] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.ki[a]), this.ci[a] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.ci[a]);
        this.Pd = 0;
        this.Gs = e.createBuffer();
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.Gs);
        this.Om = new Float32Array(16E3);
        this.Em = new Float32Array(16E3);
        this.ht = new Float32Array(32E3);
        for (var b = new Uint16Array(12E3), g = a = 0; 12E3 > a;) b[a++] = g, b[a++] = g + 1, b[a++] = g + 2, b[a++] = g, b[a++] = g + 2, b[a++] = g + 3, g += 4;
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, b, e.STATIC_DRAW);
        this.jm = this.Hd = 0;
        this.qb = [];
        a = this.Pk({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
        this.qb.push(a);
        a = this.Pk({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.qb.push(a);
        for (var k in lc) lc.hasOwnProperty(k) && this.qb.push(this.Pk(lc[k], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", k));
        e.activeTexture(e.TEXTURE0);
        e.bindTexture(e.TEXTURE_2D, null);
        this.te = [];
        this.Od = 0;
        this.tc = !1;
        this.Qn = this.sh = -1;
        this.Wg = null;
        this.Ur = e.createFramebuffer();
        this.xp = null;
        this.Se = gc([0, 0, 0]);
        this.Qo = e.getParameter(e.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.Qo && (this.Qo = 2048);
        this.Fd(0)
    };
    f.prototype.Pk = function(e, a, b) {
        var g = this.G,
            k = g.createShader(g.FRAGMENT_SHADER);
        g.shaderSource(k, e.src);
        g.compileShader(k);
        if (!g.getShaderParameter(k, g.COMPILE_STATUS)) return g.deleteShader(k), null;
        var c = g.createShader(g.VERTEX_SHADER);
        g.shaderSource(c, a);
        g.compileShader(c);
        if (!g.getShaderParameter(c, g.COMPILE_STATUS)) return g.deleteShader(k), g.deleteShader(c), null;
        a = g.createProgram();
        g.attachShader(a, k);
        g.attachShader(a, c);
        g.linkProgram(a);
        if (!g.getProgramParameter(a, g.LINK_STATUS)) return g.deleteShader(k), g.deleteShader(c), g.deleteProgram(a), null;
        g.useProgram(a);
        g.deleteShader(k);
        g.deleteShader(c);
        b = new h(g, a, b);
        b.$k = e.$k || 0;
        b.al = e.al || 0;
        b.On = !! e.On;
        b.vn = !! e.vn;
        b.U = e.U || [];
        e = 0;
        for (k = b.U.length; e < k; e++) b.U[e][1] = g.getUniformLocation(a, b.U[e][0]), g.uniform1f(b.U[e][1], 0);
        return b
    };
    f.prototype.ol = function(e) {
        var a, b;
        a = 0;
        for (b = this.qb.length; a < b; a++)
            if (this.qb[a].name === e) return a;
        return -1
    };
    f.prototype.sp = function(e, a, b) {
        var g = this.Uc,
            k = this.Sl,
            c = [0, 0, 0, 0, 0, 0, 0, 0];
        c[0] = g[0] * e + g[4] * a + g[12];
        c[1] = g[1] * e + g[5] * a + g[13];
        c[2] = g[2] * e + g[6] * a + g[14];
        c[3] = g[3] * e + g[7] * a + g[15];
        c[4] = k[0] * c[0] + k[4] * c[1] + k[8] * c[2] + k[12] * c[3];
        c[5] = k[1] * c[0] + k[5] * c[1] + k[9] * c[2] + k[13] * c[3];
        c[6] = k[2] * c[0] + k[6] * c[1] + k[10] * c[2] + k[14] * c[3];
        c[7] = -c[2];
        0 !== c[7] && (c[7] = 1 / c[7], c[4] *= c[7], c[5] *= c[7], c[6] *= c[7], b[0] = (0.5 * c[4] + 0.5) * this.width, b[1] = (0.5 * c[5] + 0.5) * this.height)
    };
    f.prototype.Ag = function(e, a, b) {
        if (this.width !== e || this.height !== a || b) {
            this.ff();
            this.width = e;
            this.height = a;
            this.G.viewport(0, 0, e, a);
            a = e / a;
            var g = this.Sl,
                k;
            k = 1 * Math.tan(45 * Math.PI / 360);
            a *= k;
            e = -a;
            b = -k;
            g || (g = hc());
            var c = a - e,
                l = k - b;
            g[0] = 2 / c;
            g[1] = 0;
            g[2] = 0;
            g[3] = 0;
            g[4] = 0;
            g[5] = 2 / l;
            g[6] = 0;
            g[7] = 0;
            g[8] = (a + e) / c;
            g[9] = (k + b) / l;
            g[10] = -1001 / 999;
            g[11] = -1;
            g[12] = 0;
            g[13] = 0;
            g[14] = -2E3 / 999;
            g[15] = 0;
            kc(this.Hn, this.Po, this.Vp, this.Uc);
            e = [0, 0];
            a = [0, 0];
            this.sp(0, 0, e);
            this.sp(1, 1, a);
            this.Rm[0] = 1 / (a[0] - e[0]);
            this.Rm[1] = -1 / (a[1] - e[1]);
            e = 0;
            for (a = this.qb.length; e < a; e++) b = this.qb[e], b.lf = !1, b.No && (this.G.useProgram(b.Xh), this.G.uniformMatrix4fv(b.No, !1, this.Sl));
            this.G.useProgram(this.qb[this.sh].Xh);
            this.G.bindTexture(this.G.TEXTURE_2D, null);
            this.G.activeTexture(this.G.TEXTURE1);
            this.G.bindTexture(this.G.TEXTURE_2D, null);
            this.G.activeTexture(this.G.TEXTURE0);
            this.rf = this.qf = null
        }
    };
    f.prototype.Ke = function() {
        kc(this.Hn, this.Po, this.Vp, this.Uc);
        jc(this.Uc, this.Rm)
    };
    f.prototype.translate = function(e, a) {
        if (0 !== e || 0 !== a) {
            this.Se[0] = e;
            this.Se[1] = a;
            this.Se[2] = 0;
            var b = this.Uc,
                c = this.Se,
                k = c[0],
                h = c[1],
                c = c[2];
            b[12] = b[0] * k + b[4] * h + b[8] * c + b[12];
            b[13] = b[1] * k + b[5] * h + b[9] * c + b[13];
            b[14] = b[2] * k + b[6] * h + b[10] * c + b[14];
            b[15] = b[3] * k + b[7] * h + b[11] * c + b[15]
        }
    };
    f.prototype.scale = function(e, a) {
        if (1 !== e || 1 !== a) this.Se[0] = e, this.Se[1] = a, this.Se[2] = 1, jc(this.Uc, this.Se)
    };
    f.prototype.zp = function(e) {
        if (0 !== e) {
            var a = this.Uc,
                b, c = Math.sin(e);
            e = Math.cos(e);
            var k = a[0],
                h = a[1],
                l = a[2],
                f = a[3],
                d = a[4],
                v = a[5],
                y = a[6],
                m = a[7];
            b ? a !== b && (b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]) : b = a;
            b[0] = k * e + d * c;
            b[1] = h * e + v * c;
            b[2] = l * e + y * c;
            b[3] = f * e + m * c;
            b[4] = k * -c + d * e;
            b[5] = h * -c + v * e;
            b[6] = l * -c + y * e;
            b[7] = f * -c + m * e
        }
    };
    f.prototype.Ue = function() {
        for (var e = !1, a = 0; 16 > a; a++)
            if (this.Ho[a] !== this.Uc[a]) {
                e = !0;
                break
            }
        e && (e = this.ld(), e.type = 5, e.za ? ic(this.Uc, e.za) : e.za = hc(this.Uc), ic(this.Uc, this.Ho), this.tc = !1)
    };
    b.prototype.mr = function() {
        this.G.bindTexture(this.G.TEXTURE_2D, this.nd)
    };
    b.prototype.nr = function() {
        var e = this.G;
        e.activeTexture(e.TEXTURE1);
        e.bindTexture(e.TEXTURE_2D, this.nd);
        e.activeTexture(e.TEXTURE0)
    };
    b.prototype.jr = function() {
        var e = this.hp,
            a = this.J;
        a.Pn = e;
        a = a.Wg;
        a.lg && this.G.uniform1f(a.lg, e)
    };
    b.prototype.gr = function() {
        this.G.drawElements(this.G.TRIANGLES, this.wd, this.G.UNSIGNED_SHORT, 2 * this.Wc)
    };
    b.prototype.ir = function() {
        this.G.blendFunc(this.Wc, this.wd)
    };
    b.prototype.or = function() {
        var a, b, c, g = this.J.qb,
            k = this.J.Qn;
        a = 0;
        for (b = g.length; a < b; a++) c = g[a], a === k && c.kg ? (this.G.uniformMatrix4fv(c.kg, !1, this.za), c.lf = !0) : c.lf = !1;
        ic(this.za, this.J.Sk)
    };
    b.prototype.hr = function() {
        var a = this.G,
            b = this.J;
        this.nd ? (b.rf === this.nd && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.rf = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.Ur), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.nd, 0)) : (a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    b.prototype.er = function() {
        var a = this.G;
        0 === this.Wc ? (a.clearColor(this.za[0], this.za[1], this.za[2], this.za[3]), a.clear(a.COLOR_BUFFER_BIT)) : (a.enable(a.SCISSOR_TEST), a.scissor(this.za[0], this.za[1], this.za[2], this.za[3]), a.clearColor(0, 0, 0, 0), a.clear(this.G.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST))
    };
    b.prototype.fr = function() {
        var a = this.G,
            b = this.J,
            c = b.qb[1];
        a.useProgram(c.Xh);
        !c.lf && c.kg && (a.uniformMatrix4fv(c.kg, !1, b.Sk), c.lf = !0);
        a.enableVertexAttribArray(c.Tc);
        a.bindBuffer(a.ARRAY_BUFFER, b.im);
        a.vertexAttribPointer(c.Tc, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.Wc / 4, this.wd);
        c = b.Wg;
        a.useProgram(c.Xh);
        0 <= c.Tc && (a.enableVertexAttribArray(c.Tc), a.bindBuffer(a.ARRAY_BUFFER, b.ki[b.Pd]), a.vertexAttribPointer(c.Tc, 2, a.FLOAT, !1, 0, 0));
        0 <= c.Ge && (a.enableVertexAttribArray(c.Ge), a.bindBuffer(a.ARRAY_BUFFER, b.ci[b.Pd]), a.vertexAttribPointer(c.Ge, 2, a.FLOAT, !1, 0, 0))
    };
    b.prototype.kr = function() {
        var a = this.G,
            b = this.J,
            c = b.qb[this.Wc];
        b.Qn = this.Wc;
        b.Wg = c;
        a.useProgram(c.Xh);
        !c.lf && c.kg && (a.uniformMatrix4fv(c.kg, !1, b.Sk), c.lf = !0);
        c.lg && a.uniform1f(c.lg, b.Pn);
        0 <= c.Tc && (a.enableVertexAttribArray(c.Tc), a.bindBuffer(a.ARRAY_BUFFER, b.ki[b.Pd]), a.vertexAttribPointer(c.Tc, 2, a.FLOAT, !1, 0, 0));
        0 <= c.Ge && (a.enableVertexAttribArray(c.Ge), a.bindBuffer(a.ARRAY_BUFFER, b.ci[b.Pd]), a.vertexAttribPointer(c.Ge, 2, a.FLOAT, !1, 0, 0))
    };
    b.prototype.lr = function() {
        var a, b, c = this.J.Wg,
            g = this.G;
        a = this.za;
        c.Bh && this.J.rf !== this.nd && (g.activeTexture(g.TEXTURE1), g.bindTexture(g.TEXTURE_2D, this.nd), this.J.rf = this.nd, g.activeTexture(g.TEXTURE0));
        c.Nl && g.uniform1f(c.Nl, a[0]);
        c.Ml && g.uniform1f(c.Ml, a[1]);
        c.wf && g.uniform2f(c.wf, a[2], a[3]);
        c.vf && g.uniform2f(c.vf, a[4], a[5]);
        c.Ah && g.uniform1f(c.Ah, a[6]);
        c.zh && g.uniform1f(c.zh, a[7]);
        c.Ch && g.uniform2f(c.Ch, a[8], a[9]);
        c.Ol && g.uniform1f(c.Ol, Ya() / 1E3);
        if (c.U.length)
            for (a = 0, b = c.U.length; a < b; a++) g.uniform1f(c.U[a][1], this.Fp[a])
    };
    f.prototype.ld = function() {
        this.Od === this.te.length && this.te.push(new b(0, this));
        return this.te[this.Od++]
    };
    f.prototype.ff = function() {
        if (0 !== this.Od && !this.G.isContextLost()) {
            var a = this.G;
            0 < this.jm && (a.bindBuffer(a.ARRAY_BUFFER, this.im), a.bufferData(a.ARRAY_BUFFER, this.ht.subarray(0, this.jm), a.STREAM_DRAW), b && 0 <= b.Tc && "<point>" === b.name && a.vertexAttribPointer(b.Tc, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.Hd) {
                var b = this.Wg;
                a.bindBuffer(a.ARRAY_BUFFER, this.ki[this.Pd]);
                a.bufferData(a.ARRAY_BUFFER, this.Om.subarray(0, this.Hd), a.STREAM_DRAW);
                b && 0 <= b.Tc && "<point>" !== b.name && a.vertexAttribPointer(b.Tc, 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.ci[this.Pd]);
                a.bufferData(a.ARRAY_BUFFER, this.Em.subarray(0, this.Hd), a.STREAM_DRAW);
                b && 0 <= b.Ge && "<point>" !== b.name && a.vertexAttribPointer(b.Ge, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0, b = this.Od; a < b; a++) switch (c = this.te[a], c.type) {
                case 1:
                    c.gr();
                    break;
                case 2:
                    c.mr();
                    break;
                case 3:
                    c.jr();
                    break;
                case 4:
                    c.ir();
                    break;
                case 5:
                    c.or();
                    break;
                case 6:
                    c.hr();
                    break;
                case 7:
                    c.er();
                    break;
                case 8:
                    c.fr();
                    break;
                case 9:
                    c.kr();
                    break;
                case 10:
                    c.lr();
                    break;
                case 11:
                    c.nr()
            }
            this.jm = this.Hd = this.Od = 0;
            this.tc = !1;
            this.Pd++;
            4 <= this.Pd && (this.Pd = 0)
        }
    };
    f.prototype.zf = function(a) {
        if (a !== this.Io) {
            var b = this.ld();
            b.type = 3;
            this.Io = b.hp = a;
            this.tc = !1
        }
    };
    f.prototype.zc = function(a) {
        if (a !== this.qf) {
            var b = this.ld();
            b.type = 2;
            this.qf = b.nd = a;
            this.tc = !1
        }
    };
    f.prototype.Le = function(a, b) {
        if (a !== this.Jo || b !== this.Go) {
            var c = this.ld();
            c.type = 4;
            c.Wc = a;
            c.wd = b;
            this.Jo = a;
            this.Go = b;
            this.tc = !1
        }
    };
    f.prototype.Bp = function() {
        this.Le(this.G.ONE, this.G.ONE_MINUS_SRC_ALPHA)
    };
    f.prototype.Qj = function(a, b, c, g, k, h, l, f) {
        15992 <= this.Hd && this.ff();
        var d = this.Hd,
            v = this.Om,
            y = this.Em;
        if (this.tc) this.te[this.Od - 1].wd += 6;
        else {
            var m = this.ld();
            m.type = 1;
            m.Wc = 3 * (d / 4);
            m.wd = 6;
            this.tc = !0
        }
        v[d] = a;
        y[d++] = 0;
        v[d] = b;
        y[d++] = 0;
        v[d] = c;
        y[d++] = 1;
        v[d] = g;
        y[d++] = 0;
        v[d] = k;
        y[d++] = 1;
        v[d] = h;
        y[d++] = 1;
        v[d] = l;
        y[d++] = 0;
        v[d] = f;
        y[d++] = 1;
        this.Hd = d
    };
    f.prototype.Bd = function(a, b, c, g, k, h, l, f, d) {
        15992 <= this.Hd && this.ff();
        var v = this.Hd,
            y = this.Om,
            m = this.Em;
        if (this.tc) this.te[this.Od - 1].wd += 6;
        else {
            var D = this.ld();
            D.type = 1;
            D.Wc = 3 * (v / 4);
            D.wd = 6;
            this.tc = !0
        }
        var D = d.left,
            L = d.top,
            J = d.right;
        d = d.bottom;
        y[v] = a;
        m[v++] = D;
        y[v] = b;
        m[v++] = L;
        y[v] = c;
        m[v++] = J;
        y[v] = g;
        m[v++] = L;
        y[v] = k;
        m[v++] = J;
        y[v] = h;
        m[v++] = d;
        y[v] = l;
        m[v++] = D;
        y[v] = f;
        m[v++] = d;
        this.Hd = v
    };
    f.prototype.Fd = function(a) {
        if (this.sh !== a) {
            if (!this.qb[a]) {
                if (0 === this.sh) return;
                a = 0
            }
            var b = this.ld();
            b.type = 9;
            this.sh = b.Wc = a;
            this.tc = !1
        }
    };
    f.prototype.Ph = function(a) {
        a = this.qb[a];
        return !(!a.wf && !a.vf)
    };
    f.prototype.km = function(a) {
        a = this.qb[a];
        return !!(a.wf || a.vf || a.On)
    };
    f.prototype.ot = function(a) {
        a = this.qb[a];
        return 0 !== a.$k || 0 !== a.al
    };
    f.prototype.js = function(a) {
        return this.qb[a].$k
    };
    f.prototype.ks = function(a) {
        return this.qb[a].al
    };
    f.prototype.ls = function(a, b) {
        return this.qb[a].U[b][2]
    };
    f.prototype.Mj = function(a) {
        return this.qb[a].vn
    };
    f.prototype.zg = function(a, b, c, g, k, h, l, f, d, v, y, m) {
        var D = this.qb[this.sh],
            L, J;
        if (D.Es || m.length) {
            L = this.ld();
            L.type = 10;
            L.za ? ic(this.Uc, L.za) : L.za = hc();
            J = L.za;
            J[0] = b;
            J[1] = c;
            J[2] = g;
            J[3] = k;
            J[4] = h;
            J[5] = l;
            J[6] = f;
            J[7] = d;
            J[8] = v;
            J[9] = y;
            L.nd = D.Bh ? a : null;
            if (m.length)
                for (c = L.Fp, c.length = m.length, a = 0, b = m.length; a < b; a++) c[a] = m[a];
            this.tc = !1
        }
    };
    f.prototype.clear = function(a, b, c, g) {
        var k = this.ld();
        k.type = 7;
        k.Wc = 0;
        k.za || (k.za = hc());
        k.za[0] = a;
        k.za[1] = b;
        k.za[2] = c;
        k.za[3] = g;
        this.tc = !1
    };
    f.prototype.clearRect = function(a, b, c, g) {
        if (!(0 > c || 0 > g)) {
            var k = this.ld();
            k.type = 7;
            k.Wc = 1;
            k.za || (k.za = hc());
            k.za[0] = a;
            k.za[1] = b;
            k.za[2] = c;
            k.za[3] = g;
            this.tc = !1
        }
    };
    f.prototype.nt = function() {
        this.ff();
        this.G.flush()
    };
    var c = [],
        a = {};
    f.prototype.ig = function(b, h, f, g) {
        h = !! h;
        f = !! f;
        var k = b.src + "," + h + "," + f + (h ? ",undefined" : ""),
            r = null;
        if ("undefined" !== typeof b.src && a.hasOwnProperty(k)) return r = a[k], r.vi++, r;
        this.ff();
        var l = this.G,
            x = ka(b.width) && ka(b.height),
            r = l.createTexture();
        l.bindTexture(l.TEXTURE_2D, r);
        l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var d = l.RGBA,
            v = l.RGBA,
            y = l.UNSIGNED_BYTE;
        if (g && !this.bg) switch (g) {
            case 1:
                v = d = l.RGB;
                break;
            case 2:
                y = l.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                y = l.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                v = d = l.RGB, y = l.UNSIGNED_SHORT_5_6_5
        }
        if (!x && h) {
            g = document.createElement("canvas");
            g.width = la(b.width);
            g.height = la(b.height);
            var m = g.getContext("2d");
            m.webkitImageSmoothingEnabled = f;
            m.mozImageSmoothingEnabled = f;
            m.msImageSmoothingEnabled = f;
            m.imageSmoothingEnabled = f;
            m.drawImage(b, 0, 0, b.width, b.height, 0, 0, g.width, g.height);
            l.texImage2D(l.TEXTURE_2D, 0, d, v, y, g)
        } else l.texImage2D(l.TEXTURE_2D, 0, d, v, y, b);
        h ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.REPEAT), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.REPEAT)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE));
        f ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR), x && this.Tn ? (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR_MIPMAP_LINEAR), l.generateMipmap(l.TEXTURE_2D)) : l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR)) : (l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST));
        l.bindTexture(l.TEXTURE_2D, null);
        this.qf = null;
        r.Sg = b.width;
        r.Rg = b.height;
        r.vi = 1;
        r.Fn = k;
        c.push(r);
        return a[k] = r
    };
    f.prototype.ye = function(a, b, h) {
        var g;
        this.ff();
        var k = this.G;
        this.bg && (g = !1);
        var f = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, f);
        k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, a, b, 0, k.RGBA, g ? k.UNSIGNED_SHORT_4_4_4_4 : k.UNSIGNED_BYTE, null);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, h ? k.LINEAR : k.NEAREST);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, h ? k.LINEAR : k.NEAREST);
        k.bindTexture(k.TEXTURE_2D, null);
        this.qf = null;
        f.Sg = a;
        f.Rg = b;
        c.push(f);
        return f
    };
    f.prototype.deleteTexture = function(b) {
        b && ("undefined" !== typeof b.vi && 1 < b.vi ? b.vi-- : (this.ff(), b === this.qf && (this.G.bindTexture(this.G.TEXTURE_2D, null), this.qf = null), b === this.rf && (this.G.activeTexture(this.G.TEXTURE1), this.G.bindTexture(this.G.TEXTURE_2D, null), this.G.activeTexture(this.G.TEXTURE0), this.rf = null), Da(c, b), "undefined" !== typeof b.Fn && delete a[b.Fn], this.G.deleteTexture(b)))
    };
    f.prototype.Dd = function(a) {
        if (a !== this.xp) {
            var b = this.ld();
            b.type = 6;
            this.xp = b.nd = a;
            this.tc = !1
        }
    };
    lb = f
})();
(function() {
    function f(d) {
        if (d && (d.getContext || d.dc) && !d.c2runtime) {
            d.c2runtime = this;
            var a = this;
            this.bj = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
            this.fd = !this.bj && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2isphonegap && window.c2isphonegap;
            this.Yb = !! d.dc;
            this.ag = "undefined" !== typeof window.AppMobi || this.Yb;
            this.uc = !! window.c2cocoonjs;
            this.Wd = !! window.c2ejecta;
            this.uc && (CocoonJS.App.onSuspended.addEventListener(function() {
                a.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                a.setSuspended(!1)
            }));
            this.Wd && (document.addEventListener("pagehide", function() {
                a.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                a.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                a.setSize(window.innerWidth, window.innerHeight)
            }));
            this.nb = this.Yb || this.uc || this.Wd;
            this.bg = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent);
            this.Ao = /tizen/i.test(navigator.userAgent);
            this.aj = /android/i.test(navigator.userAgent) && !this.Ao && !this.bg;
            this.Fl = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.bg;
            this.Eo = /ipad/i.test(navigator.userAgent);
            this.fj = this.Fl || this.Eo || this.Wd;
            this.Ts = this.Fl && /os\s6/i.test(navigator.userAgent);
            this.nh = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
            this.Is = /amazonwebappplatform/i.test(navigator.userAgent);
            this.xo = /firefox/i.test(navigator.userAgent);
            this.zo = /safari/i.test(navigator.userAgent) && !this.nh && !this.bg;
            this.Os = /windows/i.test(navigator.userAgent);
            this.Ee = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
            this.Qs = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Rs = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Dl = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Co = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Bo = this.Qs || this.Rs || this.Co;
            this.Js = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.wo = this.aj && !this.nh && !this.xo && !this.Is && !this.nb;
            this.devicePixelRatio = 1;
            this.De = this.fd || this.bj || this.ag || this.uc || this.aj || this.fj || this.Dl || this.Co || this.Js || this.Ao || this.Wd;
            this.De || (this.De = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            "undefined" === typeof cr_is_preview || this.Ee || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.Ee = !0);
            this.Ks = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = d;
            this.In = document.getElementById("c2canvasdiv");
            this.Da = this.J = this.G = null;
            this.el = "";
            this.Ri = !1;
            this.$o = this.bp = 0;
            this.canvas.oncontextmenu = function(d) {
                d.preventDefault && d.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(d) {
                d.preventDefault && d.preventDefault();
                return !1
            };
            this.Yb && (window.c2runtime = this);
            this.Ee && (window.ondragover = function(d) {
                d.preventDefault();
                return !1
            }, window.ondrop = function(d) {
                d.preventDefault();
                return !1
            }, require("nw.gui").App.clearCache());
            this.width = d.width;
            this.height = d.height;
            this.ba = this.width;
            this.aa = this.height;
            this.Ei = this.width;
            this.Di = this.height;
            this.vh = window.innerWidth;
            this.uh = window.innerHeight;
            this.qa = !0;
            this.ph = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.I = [];
            this.$a = [];
            this.Kl = {};
            this.hd = [];
            this.Zk = {};
            this.Sd = [];
            this.Hf = [];
            this.lk = [];
            this.Nq = [];
            this.Oq = [];
            this.td = new fa;
            this.Al = !1;
            this.ed = 0;
            this.Cl = !1;
            this.qc = [];
            this.$d = this.$b = this.mj = this.um = "";
            this.ai = this.Ip = !1;
            this.Ok = this.Dh = this.Ae = this.bb = 0;
            this.Ef = 1;
            this.wc = new Za;
            this.ij = 0;
            this.Ro = !0;
            this.tj = this.Si = this.Ni = this.hi = this.wh = this.dl = 0;
            this.cf = null;
            this.Ji = [];
            this.Yk = [];
            this.Mi = -1;
            this.Pl = [
                []
            ];
            this.Im = this.pj = 0;
            this.Pj(null);
            this.Rl = [];
            this.qj = -1;
            this.Yg = this.Vo = this.Ih = 0;
            this.bi = [];
            this.jk = this.Rj = -1;
            this.fg = !0;
            this.uf = 0;
            this.oh = !1;
            this.Mt = 0;
            this.Qf = null;
            this.Cs = !1;
            this.Gl = 0;
            this.xd = this.rl = this.lm = !1;
            this.Zo = new fa;
            this.Yl = new fa;
            this.Zl = new fa;
            this.ut = [];
            new ab([]);
            new ab([]);
            this.qe = [];
            this.Xi = {};
            this.Uf = {};
            this.Of = {};
            this.Ig = {};
            this.Dn = {};
            this.Mo = this.lj = this.xc = this.Ic = this.Lo = this.kj = this.ra = null;
            this.Gg = this.El = !1;
            this.fl = [null, null];
            this.jf = 0;
            this.Qi = "";
            this.He = {};
            this.ck = this.jg = null;
            this.load();
            this.devicePixelRatio = (this.cg = (!this.nb || this.Wd) && this.$t && !this.wo) ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
            this.Fb();
            var b, m = this.Ek && !(this.Ee || this.Bo || this.Dl || this.bj);
            0 < this.sc && this.setSize(window.innerWidth, window.innerHeight, !0);
            try {
                this.sr && (this.uc || this.Wd || !this.nb) && (b = {
                    alpha: m,
                    depth: !1,
                    antialias: !1,
                    failIfMajorPerformanceCaveat: !0
                }, this.G = d.getContext("webgl", b) || d.getContext("experimental-webgl", b))
            } catch (e) {}
            if (this.G) {
                this.nb || (this.Bb = document.createElement("canvas"), jQuery(this.Bb).appendTo(this.canvas.parentNode), this.Bb.oncontextmenu = ba(!1), this.Bb.onselectstart = ba(!1), this.Bb.width = this.Ei, this.Bb.height = this.Di, jQuery(this.Bb).css({
                    width: this.Ei + "px",
                    height: this.Di + "px"
                }), this.rp(), this.gm = this.Bb.getContext("2d"));
                this.J = new lb(this.G, this.De);
                this.J.Ag(d.width, d.height);
                this.J.Tn = 0 !== this.pr;
                this.Da = null;
                this.canvas.addEventListener("webglcontextlost", function(d) {
                    d.preventDefault();
                    a.$s();
                    console.log("[Construct 2] WebGL context lost");
                    window.cr_setSuspended(!0)
                }, !1);
                this.canvas.addEventListener("webglcontextrestored", function() {
                    a.J.so();
                    a.J.Ag(a.J.width, a.J.height, !0);
                    a.Ic = null;
                    a.xc = null;
                    a.fl[0] = null;
                    a.fl[1] = null;
                    a.bt();
                    a.qa = !0;
                    console.log("[Construct 2] WebGL context restored");
                    window.cr_setSuspended(!1)
                }, !1);
                var l, c, k, g, h, f;
                d = 0;
                for (b = this.I.length; d < b; d++)
                    for (c = this.I[d], m = 0, l = c.W.length; m < l; m++) g = c.W[m], g.Cb = this.J.ol(g.id), this.Gg = this.Gg || this.J.Ph(g.Cb);
                d = 0;
                for (b = this.hd.length; d < b; d++) {
                    h = this.hd[d];
                    m = 0;
                    for (l = h.W.length; m < l; m++) g = h.W[m], g.Cb = this.J.ol(g.id);
                    m = 0;
                    for (l = h.ja.length; m < l; m++)
                        for (f = h.ja[m], c = 0, k = f.W.length; c < k; c++) g = f.W[c], g.Cb = this.J.ol(g.id), this.Gg = this.Gg || this.J.Ph(g.Cb)
                }
            } else {
                if (0 < this.sc && this.Yb) {
                    this.canvas = null;
                    document.oncontextmenu = ba(!1);
                    document.onselectstart = ba(!1);
                    this.Da = AppMobi.canvas.getContext("2d");
                    try {
                        this.Da.samplingMode = this.ma ? "smooth" : "sharp", this.Da.globalScale = 1, this.Da.HTML5CompatibilityMode = !0, this.Da.imageSmoothingEnabled = this.ma
                    } catch (q) {}
                    0 !== this.width && 0 !== this.height && (this.Da.width = this.width, this.Da.height = this.height)
                }
                this.Da || (b = this.uc ? {
                    antialias: !! this.ma,
                    alpha: m
                } : {
                    alpha: m
                }, this.Da = d.getContext("2d", b), this.Da.webkitImageSmoothingEnabled = this.ma, this.Da.mozImageSmoothingEnabled = this.ma, this.Da.msImageSmoothingEnabled = this.ma, this.Da.imageSmoothingEnabled = this.ma);
                this.gm = this.Bb = null
            }
            this.ik = function() {
                a.gb(!1)
            };
            window == window.top || this.nb || this.Bo || this.Dl || (document.addEventListener("mousedown", function() {
                window.focus()
            }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0));
            "undefined" !== typeof cr_is_preview && (this.uc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ga("Reloading for continuous preview"), this.mj = "__c2_continuouspreview", this.ai = !0), this.gt && !this.De && (jQuery(window).focus(function() {
                a.setSuspended(!1)
            }), jQuery(window).blur(function() {
                a.setSuspended(!0)
            })));
            d = function(d) {
                kb(d) && document.activeElement && document.activeElement.blur && document.activeElement.blur()
            };
            window.navigator.pointerEnabled ? document.addEventListener("pointerdown", d) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", d) : document.addEventListener("touchstart", d);
            0 === this.sc && this.cg && 1 < this.devicePixelRatio && this.setSize(this.wb, this.ub, !0);
            this.Rp();
            this.zs();
            this.go();
            this.Ra = {}
        }
    }

    function h(d) {
        d.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function b(d, a, b, m) {
        var e = indexedDB.open("_C2SaveStates");
        e.onupgradeneeded = h;
        e.onerror = m;
        e.onsuccess = function(e) {
            e = e.target.result;
            e.onerror = m;
            e.transaction(["saves"], "readwrite").objectStore("saves").put({
                slot: d,
                data: a
            }).onsuccess = b
        }
    }

    function c(d, a, b) {
        var m = indexedDB.open("_C2SaveStates");
        m.onupgradeneeded = h;
        m.onerror = b;
        m.onsuccess = function(m) {
            m = m.target.result;
            m.onerror = b;
            var e = m.transaction(["saves"]).objectStore("saves").get(d);
            e.onsuccess = function() {
                e.result ? a(e.result.data) : a(null)
            }
        }
    }

    function a() {
        ga("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
    }

    function e(d) {
        var a, b = {};
        for (a in d)!d.hasOwnProperty(a) || d[a] instanceof fa || d[a] && "undefined" !== typeof d[a].$u || (b[a] = d[a]);
        return b
    }
    f.prototype.setSize = function(d, a, b) {
        var m = 0,
            e = 0,
            l = 0,
            c = 0,
            c = 0,
            k = this.Ts && this.zo && !navigator.standalone && !this.nb && !this.fd;
        k && (a += 60);
        if (this.vh !== d || this.uh !== a || b) {
            this.vh = d;
            this.uh = a;
            var g = this.sc,
                h = (document.mozFullScreen || document.webkitIsFullScreen || !! document.msFullscreenElement || document.fullScreen || this.oh) && !this.fd;
            if (h || 0 !== this.sc || b) h && 0 < this.jf && (g = this.jf), b = this.devicePixelRatio, 4 <= g ? (l = this.wb / this.ub, d / a > l ? (l *= a, 5 === g ? (c = l * b / this.wb, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), l = this.wb * c / b, c = this.ub * c / b, m = (d - l) / 2, e = (a - c) / 2, d = l, a = c) : (m = (d - l) / 2, d = l)) : (c = d / l, 5 === g ? (c = c * b / this.ub, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), l = this.wb * c / b, c = this.ub * c / b, m = (d - l) / 2, e = (a - c) / 2, d = l) : e = (a - c) / 2, a = c), h && !this.Ee && (e = m = 0)) : this.Ee && this.oh && 0 === this.$n && (m = Math.floor((d - this.wb) / 2), e = Math.floor((a - this.ub) / 2), d = this.wb, a = this.ub), 2 > g && (this.Qg = b), this.cg && this.Eo && 1 < b && (1024 <= d && (d = 1023), 1024 <= a && (a = 1023)), this.Ei = Math.round(d), this.Di = Math.round(a), this.width = Math.round(d * b), this.height = Math.round(a * b), this.qa = !0, this.cq ? (this.ba = this.width, this.aa = this.height, this.Qc = !0) : this.width < this.wb && this.height < this.ub || 1 === g ? (this.ba = this.width, this.aa = this.height, this.Qc = !0) : (this.ba = this.wb, this.aa = this.ub, this.Qc = !1, 2 === g ? (l = this.wb / this.ub, g = this.vh / this.uh, g < l ? this.ba = this.aa * g : g > l && (this.aa = this.ba / g)) : 3 === g && (l = this.wb / this.ub, g = this.vh / this.uh, g > l ? this.ba = this.aa * g : g < l && (this.aa = this.ba / g))), this.In && !this.nb && (jQuery(this.In).css({
                width: Math.round(d) + "px",
                height: Math.round(a) + "px",
                "margin-left": Math.floor(m) + "px",
                "margin-top": Math.floor(e) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(d) + "px",
                height: Math.round(a) + "px"
            })), this.canvas && (this.canvas.width = Math.round(d * b), this.canvas.height = Math.round(a * b), this.Wd ? (this.canvas.style.left = Math.floor(m) + "px", this.canvas.style.top = Math.floor(e) + "px", this.canvas.style.width = Math.round(d) + "px", this.canvas.style.height = Math.round(a) + "px") : this.cg && !this.nb && jQuery(this.canvas).css({
                width: Math.round(d) + "px",
                height: Math.round(a) + "px"
            })), this.Bb && (this.Bb.width = Math.round(d), this.Bb.height = Math.round(a), jQuery(this.Bb).css({
                width: Math.round(d) + "px",
                height: Math.round(a) + "px"
            })), this.J && this.J.Ag(Math.round(d * b), Math.round(a * b)), this.Yb && this.Da && (this.Da.width = Math.round(d), this.Da.height = Math.round(a)), this.Da && (this.Da.webkitImageSmoothingEnabled = this.ma, this.Da.mozImageSmoothingEnabled = this.ma, this.Da.msImageSmoothingEnabled = this.ma, this.Da.imageSmoothingEnabled = this.ma), this.Rp(), this.nb || !k && !this.Fl || window.setTimeout(function() {
                window.scrollTo(0, 1)
            }, 100)
        }
    };
    f.prototype.Rp = function() {
        if (this.Qq && 0 !== this.em) {
            var d = "portrait";
            2 === this.em && (d = "landscape");
            screen.lockOrientation ? screen.lockOrientation(d) : screen.webkitLockOrientation ? screen.webkitLockOrientation(d) : screen.mozLockOrientation ? screen.mozLockOrientation(d) : screen.msLockOrientation && screen.msLockOrientation(d)
        }
    };
    f.prototype.$s = function() {
        this.El = !0;
        var d, a, b;
        d = 0;
        for (a = this.I.length; d < a; d++) b = this.I[d], b.xj && b.xj()
    };
    f.prototype.bt = function() {
        this.El = !1;
        var d, a, b;
        d = 0;
        for (a = this.I.length; d < a; d++) b = this.I[d], b.zj && b.zj()
    };
    f.prototype.rp = function() {
        if (!this.nb) {
            var d = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.oh) && !this.fd ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            d.position = "absolute";
            jQuery(this.Bb).css(d)
        }
    };
    var q = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    f.prototype.setSuspended = function(d) {
        var a;
        if (d && !this.ph)
            for (ga("[Construct 2] Suspending"), this.ph = !0, -1 !== this.Rj && q && q(this.Rj), -1 !== this.jk && clearTimeout(this.jk), d = 0, a = this.bi.length; d < a; d++) this.bi[d](!0);
        else if (!d && this.ph) {
            ga("[Construct 2] Resuming");
            this.ph = !1;
            this.ij = Ya();
            this.wh = Ya();
            d = this.Dh = this.Si = 0;
            for (a = this.bi.length; d < a; d++) this.bi[d](!1);
            this.gb(!1)
        }
    };
    f.prototype.Mq = function(d) {
        this.bi.push(d)
    };
    f.prototype.load = function() {
        var d = mc();
        this.name = d[0];
        this.Zn = d[1];
        this.sc = d[12];
        this.$n = d[12];
        this.wb = d[10];
        this.ub = d[11];
        this.op = this.wb / 2;
        this.pp = this.ub / 2;
        this.nb && !this.Wd && (4 <= d[12] || 0 === d[12]) && (ga("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.$n = this.sc = 3);
        this.Mm = d[18];
        this.yh = d[19];
        0 === this.yh && (this.jg = new Image, this.jg.src = "loading-logo.png");
        this.Ih = d[21];
        this.Gd = new t(this);
        var a, b, m, e, c, l, k, g, h;
        a = 0;
        for (b = d[2].length; a < b; a++) k = d[2][a], mb(k), h = new k[0](this), h.bk = k[1], h.Fe = k[2], h.So = k[9], h.ca && h.ca(), this.plugins.push(h);
        d = mc();
        a = 0;
        for (b = d[3].length; a < b; a++) {
            k = d[3][a];
            c = k[1];
            h = null;
            m = 0;
            for (e = this.plugins.length; m < e; m++)
                if (this.plugins[m] instanceof c) {
                    h = this.plugins[m];
                    break
                }
            var f = new h.Ja(h);
            f.name = k[0];
            f.R = k[2];
            f.yl = k[3].slice(0);
            f.bu = k[3].length;
            f.Rq = k[4];
            f.Xr = k[5];
            f.da = k[11];
            f.R ? (f.rj = [], f.Td = this.Yg++, f.Ka = null) : (f.rj = null, f.Td = -1, f.Ka = []);
            f.Oi = null;
            f.Xf = null;
            f.Vn = null;
            f.vc = !1;
            f.pc = null;
            k[6] ? (f.fk = k[6][0], f.Fm = k[6][1], f.ei = k[6][2]) : (f.fk = null, f.Fm = 0, f.ei = 0);
            f.oc = k[7] ? k[7] : null;
            f.index = a;
            f.j = [];
            f.Hi = [];
            f.Oe = [new nb(f)];
            f.Qd = 0;
            f.Nc = null;
            f.dr = 0;
            f.Dg = !0;
            f.nk = ob;
            f.ho = qb;
            f.gs = rb;
            f.fa = sb;
            f.Qh = tb;
            f.Oj = ub;
            f.yf = vb;
            f.Ui = wb;
            f.hl = xb;
            f.kl = yb;
            f.qd = zb;
            f.io = Ab;
            f.Kn = new fb(this.wb, this.ub);
            f.wn = !0;
            f.xn = !1;
            f.Ra = {};
            f.toString = Bb;
            f.$a = [];
            m = 0;
            for (e = k[8].length; m < e; m++) {
                g = k[8][m];
                var q = g[1],
                    x = null;
                c = 0;
                for (l = this.$a.length; c < l; c++)
                    if (this.$a[c] instanceof q) {
                        x = this.$a[c];
                        break
                    }
                x || (x = new q(this), x.Uo = [], x.sj = new fa, x.ca && x.ca(), this.$a.push(x)); - 1 === x.Uo.indexOf(f) && x.Uo.push(f);
                c = new x.Ja(x, f);
                c.name = g[0];
                c.da = g[2];
                c.ca();
                f.$a.push(c)
            }
            f.global = k[9];
            f.Bl = k[10];
            f.W = [];
            m = 0;
            for (e = k[12].length; m < e; m++) f.W.push({
                id: k[12][m][0],
                name: k[12][m][1],
                Cb: -1,
                Za: !0,
                index: m
            });
            f.pv = k[13];
            this.Mm && !f.R && !f.Bl && h.Fe || f.ca();
            f.name && (this.types[f.name] = f);
            this.I.push(f);
            h.bk && (m = new h.Ba(f), m.uid = this.Ih++, m.up = this.Vo++, m.mf = 0, m.gh = Cb, m.toString = Db, m.H = k[14], m.ca(), f.j.push(m), this.He[m.uid.toString()] = m)
        }
        a = 0;
        for (b = d[4].length; a < b; a++)
            for (c = d[4][a], l = this.I[c[0]], m = 1, e = c.length; m < e; m++) k = this.I[c[m]], k.Ka.push(l), l.rj.push(k);
        a = 0;
        for (b = d[26].length; a < b; a++) {
            c = d[26][a];
            l = [];
            m = 0;
            for (e = c.length; m < e; m++) l.push(this.I[c[m]]);
            m = 0;
            for (e = l.length; m < e; m++) l[m].vc = !0, l[m].pc = l
        }
        if (0 < this.Yg)
            for (a = 0, b = this.I.length; a < b; a++)
                if (k = this.I[a], !k.R && k.Ka.length) {
                    k.Oi = Array(this.Yg);
                    k.Xf = Array(this.Yg);
                    k.Vn = Array(this.Yg);
                    f = [];
                    m = x = q = g = 0;
                    for (e = k.Ka.length; m < e; m++)
                        for (h = k.Ka[m], k.Oi[h.Td] = g, g += h.bu, k.Xf[h.Td] = q, q += h.Rq, k.Vn[h.Td] = x, x += h.Xr, c = 0, l = h.W.length; c < l; c++) f.push(za({}, h.W[c]));
                    k.W = f.concat(k.W);
                    m = 0;
                    for (e = k.W.length; m < e; m++) k.W[m].index = m
                }
        a = 0;
        for (b = d[5].length; a < b; a++) k = d[5][a], m = new Hb(this, k), this.Kl[m.name] = m, this.hd.push(m);
        a = 0;
        for (b = d[6].length; a < b; a++) k = d[6][a], m = new Ib(this, k), this.Zk[m.name] = m, this.Sd.push(m);
        a = 0;
        for (b = this.Sd.length; a < b; a++) this.Sd[a].Va();
        a = 0;
        for (b = this.Sd.length; a < b; a++) this.Sd[a].Km();
        a = 0;
        for (b = this.lk.length; a < b; a++) this.lk[a].Va();
        this.lk.length = 0;
        this.Pq = d[7];
        this.Qi = d[8];
        this.Ad = d[9];
        this.Qg = 1;
        this.sr = d[13];
        this.ma = d[14];
        this.Ek = d[15];
        this.$t = d[17];
        this.em = d[20];
        this.Qq = 0 < this.em;
        this.gt = d[22];
        this.Qc = this.cq = d[23];
        this.pr = d[24];
        this.mt = d[25];
        this.dk = Date.now()
    };
    var A = !1;
    f.prototype.bq = function(d) {
        d.onerror = function(a) {
            A = d.Tq = !0;
            console && console.error && console.error("Error loading image '" + d.src + "': ", a)
        };
        this.Hf.push(d)
    };
    f.prototype.Vr = function(d) {
        var a, b;
        a = 0;
        for (b = this.Hf.length; a < b; a++)
            if (this.Hf[a].Zq === d) return this.Hf[a];
        return null
    };
    var g = 0,
        k = !1;
    f.prototype.zs = function() {
        this.Qf && (g = this.Qf.It(this.Pq))
    };
    f.prototype.yn = function() {
        var d = g,
            a = 0,
            b = 0,
            m = !0,
            e, c, b = 0;
        for (e = this.Hf.length; b < e; b++) {
            c = this.Hf[b];
            var l = c.Mn;
            if (!l || 0 >= l) l = 5E4;
            d += l;
            !c.complete && !c.loaded || c.Tq ? m = !1 : a += l
        }
        m && this.mt && this.Qf && (k || (this.Qf.Nt(), k = !0), b = this.Qf.hs(), a += b, b < g && (m = !1));
        this.xa = 0 == d ? 0 : a / d;
        return m
    };
    f.prototype.go = function() {
        if (this.Da || this.J) {
            var d = this.Da || this.gm;
            this.Bb && this.rp();
            this.xa = 0;
            this.Ko = -1;
            if (this.yn()) this.As();
            else {
                var a = Date.now() - this.dk;
                if (d) {
                    var b = this.width,
                        m = this.height,
                        e = this.devicePixelRatio;
                    this.Bb && (b = this.Ei, m = this.Di, e = 1);
                    if (3 !== this.yh && (this.uc || 500 <= a && this.Ko != this.xa)) {
                        d.clearRect(0, 0, b, m);
                        var a = b / 2,
                            m = m / 2,
                            b = 0 === this.yh && this.jg.complete,
                            c = 40 * e,
                            l = 0,
                            k = 80 * e,
                            g;
                        b && (k = this.jg.width * e, g = this.jg.height * e, c = k / 2, l = g / 2, d.drawImage(this.jg, sa(a - c), sa(m - l), k, g));
                        1 >= this.yh ? (a = sa(a - c) + 0.5, m = sa(m + (l + (b ? 12 * e : 0))) + 0.5, d.fillStyle = A ? "red" : "DodgerBlue", d.fillRect(a, m, Math.floor(k * this.xa), 6 * e), d.strokeStyle = "black", d.strokeRect(a, m, k, 6 * e), d.strokeStyle = "white", d.strokeRect(a - 1 * e, m - 1 * e, k + 2 * e, 8 * e)) : 2 === this.yh && (d.font = this.Wd ? "12pt ArialMT" : "12pt Arial", d.fillStyle = A ? "#f00" : "#999", d.ov = "middle", e = Math.round(100 * this.xa) + "%", b = d.measureText ? d.measureText(e) : null, d.fillText(e, a - (b ? b.width : 0) / 2, m))
                    }
                    this.Ko = this.xa
                }
                setTimeout(function(d) {
                    return function() {
                        d.go()
                    }
                }(this), this.uc ? 10 : 100)
            }
        }
    };
    f.prototype.As = function() {
        this.Bb && (this.canvas.parentNode.removeChild(this.Bb), this.Bb = this.gm = null);
        this.dk = Date.now();
        this.wh = Ya();
        var d, a, b;
        if (this.Mm)
            for (d = 0, a = this.I.length; d < a; d++) b = this.I[d], b.R || b.Bl || !b.Na.Fe || b.ca();
        else this.fg = !1;
        d = 0;
        for (a = this.hd.length; d < a; d++) this.hd[d].$q();
        2 <= this.sc && (d = this.wb / this.ub, a = this.width / this.height, this.Qg = 2 !== this.sc && a > d || 2 === this.sc && a < d ? this.height / this.ub : this.width / this.wb);
        this.Zn ? this.Kl[this.Zn].Cm() : this.hd[0].Cm();
        this.Mm || (this.uf = 1, this.trigger(t.prototype.d.Xm, null));
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        d = 0;
        for (a = this.I.length; d < a; d++) b = this.I[d], b.Zs && b.Zs();
        this.gb(!1);
        this.Yb && AppMobi.webview.execute("onGameReady();")
    };
    var r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    f.prototype.gb = function(d) {
        if (this.ra) {
            var a = Ya();
            if (this.Cs && this.lm && 29 > a - this.Gl) this.lm = !1, this.Gl = a, r ? this.Rj = r(this.ik, this.canvas) : this.jk = setTimeout(this.ik, this.De ? 1 : 16);
            else {
                this.lm = !0;
                this.Gl = a;
                var b = this.sc,
                    m = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement) && !this.fd;
                (m || this.oh) && 0 < this.jf && (b = this.jf);
                if (0 < b && (!this.fj || window.self !== window.top)) {
                    var b = window.innerWidth,
                        e = window.innerHeight;
                    this.vh === b && this.uh === e || this.setSize(b, e)
                }
                this.nb || (m ? (this.Ri || (this.el = jQuery(this.canvas).css("margin") || "0", this.Ri = !0), this.nh || this.Ee || jQuery(this.canvas).css({
                    "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                    "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                })) : this.Ri ? (this.nh || this.Ee || jQuery(this.canvas).css("margin", this.el), this.el = "", this.Ri = !1, 0 === this.sc && this.setSize(Math.round(this.bp / this.devicePixelRatio), Math.round(this.$o / this.devicePixelRatio), !0)) : (this.bp = this.width, this.$o = this.height));
                this.fg && (m = this.yn(), this.uf = this.xa, m && (this.fg = !1, this.xa = 1, this.trigger(t.prototype.d.Xm, null)));
                this.Xs();
                !this.qa && !this.uc || this.El || this.ai || d || (this.qa = !1, this.J ? this.Pc() : this.Rd(), this.ck && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.ck[0], this.ck[1]), this.trigger(t.prototype.d.oq, null)), this.ck = null));
                this.hv || (this.hi++, this.Ni++, this.Si++);
                this.Dh += Ya() - a;
                this.ph || d || (r ? this.Rj = r(this.ik, this.canvas) : this.jk = setTimeout(this.ik, this.De ? 1 : 16))
            }
        }
    };
    f.prototype.Xs = function() {
        var d, a, b, m, e, c, l, k, g;
        d = Ya();
        1E3 <= d - this.wh && (this.wh += 1E3, this.dl = this.Si, this.Si = 0, this.Ok = this.Dh, this.Dh = 0);
        this.Ro && (0 !== this.ij && (a = d - this.ij, 0 !== a || this.Ks ? (this.Ae = a / 1E3, 0.5 < this.Ae ? this.Ae = 0 : 0.1 < this.Ae && (this.Ae = 0.1)) : (10 <= this.rv && (this.Ro = !1), this.Ae = 1 / 60)), this.ij = d);
        this.bb = this.Ae * this.Ef;
        this.wc.add(this.bb);
        d = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !! document.msFullscreenElement || this.oh) && !this.fd;
        2 <= this.sc || d && 0 < this.jf ? (a = this.wb / this.ub, b = this.width / this.height, m = this.sc, d && 0 < this.jf && (m = this.jf), this.Qg = 2 !== m && b > a || 2 === m && b < a ? this.height / this.ub : this.width / this.wb, this.ra && (this.ra.vm(this.ra.scrollX), this.ra.wm(this.ra.scrollY))) : this.Qg = this.cg ? this.devicePixelRatio : 1;
        this.Fb();
        this.ed++;
        this.Gd.zt();
        this.ed--;
        this.Fb();
        this.ed++;
        b = this.Zo.Gf();
        d = 0;
        for (a = b.length; d < a; d++) b[d].kv();
        d = 0;
        for (a = this.I.length; d < a; d++)
            if (l = this.I[d], !l.R && (l.$a.length || l.Ka.length))
                for (b = 0, m = l.j.length; b < m; b++)
                    for (k = l.j[b], e = 0, c = k.Y.length; e < c; e++) k.Y[e].gb();
        d = 0;
        for (a = this.I.length; d < a; d++)
            if (l = this.I[d], !l.R && (l.$a.length || l.Ka.length))
                for (b = 0, m = l.j.length; b < m; b++)
                    for (k = l.j[b], e = 0, c = k.Y.length; e < c; e++) g = k.Y[e], g.lt && g.lt();
        b = this.Yl.Gf();
        d = 0;
        for (a = b.length; d < a; d++) b[d].gb();
        this.ed--;
        this.Ds();
        for (d = 0; this.cf && 10 > d++;) this.Sn(this.cf);
        d = 0;
        for (a = this.Sd.length; d < a; d++) this.Sd[d].tl = !1;
        this.ra.gf && this.ra.gf.fb();
        this.ut.length = 0;
        this.ed++;
        d = 0;
        for (a = this.I.length; d < a; d++)
            if (l = this.I[d], !l.R && (l.$a.length || l.Ka.length))
                for (b = 0, m = l.j.length; b < m; b++)
                    for (k = l.j[b], e = 0, c = k.Y.length; e < c; e++) g = k.Y[e], g.fi && g.fi();
        b = this.Zl.Gf();
        d = 0;
        for (a = b.length; d < a; d++) b[d].fi();
        this.ed--
    };
    f.prototype.Sn = function(d) {
        var a = this.ra;
        this.ra.Ot();
        var b, m, e, l, c, k, g;
        if (this.J)
            for (b = 0, m = this.I.length; b < m; b++) c = this.I[b], c.R || !c.mk || c.global && 0 !== c.j.length || -1 !== d.mh.indexOf(c) || c.mk();
        a == d && (this.Gd.kc.length = 0);
        d.Cm();
        b = 0;
        for (m = this.I.length; b < m; b++)
            if (c = this.I[b], c.global || c.Na.bk)
                for (d = 0, a = c.j.length; d < a; d++)
                    if (k = c.j[d], k.cm && k.cm(), k.Y)
                        for (e = 0, l = k.Y.length; e < l; e++) g = k.Y[e], g.cm && g.cm();
        this.qa = !0;
        this.Fb()
    };
    f.prototype.gi = function(d) {
        this.Yl.add(d)
    };
    f.prototype.Rt = function(d) {
        this.Zl.add(d)
    };
    f.prototype.Yf = function(d) {
        return d && -1 !== d.Hh ? this.Ae * d.Hh : this.bb
    };
    f.prototype.Rd = function() {
        this.ra.Rd(this.Da);
        this.Yb && this.Da.present()
    };
    f.prototype.Pc = function() {
        this.ra.Pc(this.J);
        this.J.nt()
    };
    f.prototype.qn = function(d) {
        d && this.Ji.push(d)
    };
    f.prototype.wt = function(d) {
        Da(this.Ji, d)
    };
    f.prototype.dh = function(d) {
        d = d.toString();
        return this.He.hasOwnProperty(d) ? this.He[d] : null
    };
    f.prototype.We = function(d) {
        var a, b;
        if (!this.td.contains(d)) {
            this.td.add(d);
            if (d.vc)
                for (a = 0, b = d.siblings.length; a < b; a++) this.We(d.siblings[a]);
            this.Al && this.td.Hg.push(d);
            this.ed++;
            this.trigger(Object.getPrototypeOf(d.type.Na).d.pq, d);
            this.ed--
        }
    };
    f.prototype.Fb = function() {
        var d, a, b, m, e, c, l, k, g, f;
        this.Al = !0;
        m = 0;
        for (c = this.qc.length; m < c; m++)
            for (d = this.qc[m], a = d.type, a.j.push(d), e = 0, l = a.Ka.length; e < l; e++) a.Ka[e].j.push(d), a.Ka[e].Dg = !0;
        this.qc.length = 0;
        c = this.td.Gf();
        for (m = 0; m < c.length; m++) {
            d = c[m];
            a = d.type;
            b = a.j;
            e = 0;
            for (l = this.Ji.length; e < l; e++) this.Ji[e](d);
            Da(b, d);
            0 === b.length && (a.xn = !1);
            d.Ai && a.Kn.update(d, d.Ai, null);
            d.A && (Aa(d.A.j, d.Hc()), d.A.Dc = !0);
            e = 0;
            for (l = a.Ka.length; e < l; e++) Da(a.Ka[e].j, d), a.Ka[e].Dg = !0;
            if (d.Y)
                for (e = 0, l = d.Y.length; e < l; e++) b = d.Y[e], b.ug && b.ug(), b.N.sj.remove(d);
            this.Zo.remove(d);
            this.Yl.remove(d);
            this.Zl.remove(d);
            e = 0;
            for (l = this.Gd.kc.length; e < l; e++)
                if (g = this.Gd.kc[e], g.cc.hasOwnProperty(a.index) && Da(g.cc[a.index].Vd, d), !a.R)
                    for (b = 0, k = a.Ka.length; b < k; b++) f = a.Ka[b], g.cc.hasOwnProperty(f.index) && Da(g.cc[f.index].Vd, d);
            d.ug && d.ug();
            this.He.hasOwnProperty(d.uid.toString()) && delete this.He[d.uid.toString()];
            this.tj--;
            64 > a.Hi.length && a.Hi.push(d);
            a.Dg = !0
        }
        this.td.dd() || (this.qa = !0);
        this.td.clear();
        this.Al = !1
    };
    f.prototype.Nn = function(a, b, e, m) {
        if (a.R) {
            var c = sa(Math.random() * a.rj.length);
            return this.Nn(a.rj[c], b, e, m)
        }
        return a.Nc ? this.ze(a.Nc, b, !1, e, m, !1) : null
    };
    var l = [];
    f.prototype.ze = function(a, b, e, m, c, k) {
        var g, f, h, q;
        if (!a) return null;
        var x = this.I[a[1]],
            r = x.Na.Fe;
        if (this.fg && r && !x.Bl || r && !this.J && 11 === a[0][11]) return null;
        var A = b;
        r || (b = null);
        var s;
        x.Hi.length ? (s = x.Hi.pop(), s.Vc = !0, x.Na.Ba.call(s, x)) : (s = new x.Na.Ba(x), s.Vc = !1);
        s.uid = e && !k ? a[2] : this.Ih++;
        this.He[s.uid.toString()] = s;
        s.up = this.Vo++;
        s.mf = x.j.length;
        g = 0;
        for (f = this.qc.length; g < f; ++g) this.qc[g].type === x && s.mf++;
        s.gh = Cb;
        h = a[3];
        if (s.Vc) Xa(s.Ra);
        else {
            s.Ra = {};
            if ("undefined" !== typeof cr_is_preview)
                for (s.vo = [], s.vo.length = h.length, g = 0, f = h.length; g < f; g++) s.vo[g] = h[g][1];
            s.mb = [];
            s.mb.length = h.length
        }
        g = 0;
        for (f = h.length; g < f; g++) s.mb[g] = h[g][0];
        if (r) {
            var z = a[0];
            s.x = ha(m) ? z[0] : m;
            s.y = ha(c) ? z[1] : c;
            s.z = z[2];
            s.width = z[3];
            s.height = z[4];
            s.depth = z[5];
            s.q = z[6];
            s.opacity = z[7];
            s.Wb = z[8];
            s.Xb = z[9];
            s.ic = z[10];
            g = z[11];
            !this.J && x.W.length && (s.ic = g);
            s.Vf = gb(s.ic);
            this.G && hb(s, s.ic, this.G);
            if (s.Vc) {
                g = 0;
                for (f = z[12].length; g < f; g++)
                    for (h = 0, q = z[12][g].length; h < q; h++) s.Qa[g][h] = z[12][g][h];
                s.hc.set(0, 0, 0, 0);
                s.Ai.set(0, 0, -1, -1);
                s.Rf.Zj(s.hc);
                s.Ik.length = 0
            } else {
                s.Qa = z[12].slice(0);
                g = 0;
                for (f = s.Qa.length; g < f; g++) s.Qa[g] = z[12][g].slice(0);
                s.ua = [];
                s.pe = [];
                s.pe.length = x.W.length;
                s.hc = new va(0, 0, 0, 0);
                s.Ai = new va(0, 0, -1, -1);
                s.Rf = new ya;
                s.Ik = [];
                s.Wa = Jb;
                s.Zu = Kb;
                s.cd = Lb;
                s.fc = Mb;
                s.qv = Nb;
                s.Hc = Ob
            }
            s.Tt = !1;
            s.Vt = 0;
            s.Ut = 0;
            s.St = null;
            14 === z.length && (s.Tt = !0, s.Vt = z[13][0], s.Ut = z[13][1], s.St = z[13][2]);
            g = 0;
            for (f = x.W.length; g < f; g++) s.pe[g] = !0;
            s.ke = Pb;
            s.ke();
            s.Zp = !! s.ua.length;
            s.Hk = !0;
            s.Mk = !0;
            x.wn = !0;
            s.visible = !0;
            s.Hh = -1;
            s.A = b;
            s.If = b.j.length;
            "undefined" === typeof s.sd && (s.sd = null);
            this.qa = s.Ug = !0
        }
        s.toString = Db;
        var H;
        g = l.length = 0;
        for (f = x.Ka.length; g < f; g++) l.push.apply(l, x.Ka[g].$a);
        l.push.apply(l, x.$a);
        if (s.Vc)
            for (g = 0, f = l.length; g < f; g++) {
                var M = l[g];
                H = s.Y[g];
                H.Vc = !0;
                M.N.Ba.call(H, M, s);
                z = a[4][g];
                h = 0;
                for (q = z.length; h < q; h++) H.H[h] = z[h];
                H.ca();
                M.N.sj.add(s)
            } else
                for (s.Y = [], g = 0, f = l.length; g < f; g++) M = l[g], H = new M.N.Ba(M, s), H.Vc = !1, H.H = a[4][g].slice(0), H.ca(), s.Y.push(H), M.N.sj.add(s);
        z = a[5];
        if (s.Vc)
            for (g = 0, f = z.length; g < f; g++) s.H[g] = z[g];
        else s.H = z.slice(0);
        this.qc.push(s);
        b && (b.j.push(s), 1 !== b.be || 1 !== b.de) && (x.xn = !0);
        this.tj++;
        if (x.vc) {
            if (s.vc = !0, s.Vc ? s.siblings.length = 0 : s.siblings = [], !e && !k) {
                g = 0;
                for (f = x.pc.length; g < f; g++)
                    if (x.pc[g] !== x) {
                        if (!x.pc[g].Nc) return null;
                        s.siblings.push(this.ze(x.pc[g].Nc, A, !1, r ? s.x : m, r ? s.y : c, !0))
                    }
                g = 0;
                for (f = s.siblings.length; g < f; g++)
                    for (s.siblings[g].siblings.push(s), h = 0; h < f; h++) g !== h && s.siblings[g].siblings.push(s.siblings[h])
            }
        } else s.vc = !1, s.siblings = null;
        s.ca();
        g = 0;
        for (f = s.Y.length; g < f; g++) s.Y[g].kt && s.Y[g].kt();
        return s
    };
    f.prototype.ml = function(a) {
        var b, e;
        b = 0;
        for (e = this.ra.ja.length; b < e; b++) {
            var m = this.ra.ja[b];
            if (jb(m.name, a)) return m
        }
        return null
    };
    f.prototype.bh = function(a) {
        a = sa(a);
        0 > a && (a = 0);
        a >= this.ra.ja.length && (a = this.ra.ja.length - 1);
        return this.ra.ja[a]
    };
    f.prototype.Nk = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].fa().ka = !0
    };
    f.prototype.Qh = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Qh()
    };
    f.prototype.Oj = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Oj()
    };
    f.prototype.yf = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].yf()
    };
    f.prototype.Qt = function(a, b, e) {
        var m = a.fa(),
            c, l, k, g, f, h;
        if (m.ka)
            for (m.ka = !1, c = m.j.length = 0, g = a.j.length; c < g; c++) k = a.j[c], k.fc(), f = k.A.Vb(b, e, !0), h = k.A.Vb(b, e, !1), k.cd(f, h) && m.j.push(k);
        else {
            c = l = 0;
            for (g = m.j.length; c < g; c++) k = m.j[c], k.fc(), f = k.A.Vb(b, e, !0), h = k.A.Vb(b, e, !1), k.cd(f, h) && (m.j[l] = m.j[c], l++);
            m.j.length = l
        }
        a.qd();
        return m.sl()
    };
    new ya;
    new va(0, 0, 0, 0);
    f.prototype.Sp = function(a, b) {
        if (!b) return !1;
        var e, m, c, l, k;
        e = 0;
        for (m = a.$a.length; e < m; e++)
            if (a.$a[e].N instanceof b) return !0;
        if (!a.R)
            for (e = 0, m = a.Ka.length; e < m; e++)
                for (k = a.Ka[e], c = 0, l = k.$a.length; c < l; c++)
                    if (k.$a[c].N instanceof b) return !0;
        return !1
    };
    f.prototype.Tp = function(a) {
        return this.Sp(a, ec.xu)
    };
    f.prototype.Jm = function(a) {
        return this.Sp(a, ec.yu)
    };
    var x = -1;
    f.prototype.trigger = function(a, b, e) {
        if (!this.ra) return !1;
        var m = this.ra.gf;
        if (!m) return !1;
        var c = !1,
            l, k, g;
        x++;
        var f = m.Uk;
        k = 0;
        for (g = f.length; k < g; ++k) l = this.Pp(a, b, f[k], e), c = c || l;
        l = this.Pp(a, b, m, e);
        x--;
        return c || l
    };
    f.prototype.Pp = function(a, b, e, m) {
        var c = !1,
            l, k, g, f;
        if (b)
            for (g = this.Hm(a, b, b.type.name, e, m), c = c || g, f = b.type.Ka, l = 0, k = f.length; l < k; ++l) g = this.Hm(a, b, f[l].name, e, m), c = c || g;
        else g = this.Hm(a, b, "system", e, m), c = c || g;
        return c
    };
    f.prototype.Hm = function(a, b, e, m, c) {
        var l, k = !1,
            g = !1,
            g = "undefined" !== typeof c,
            f = (g ? m.Xn : m.Qp)[e];
        if (!f) return k;
        var h = null;
        m = 0;
        for (l = f.length; m < l; ++m)
            if (f[m].method == a) {
                h = f[m].Xg;
                break
            }
        if (!h) return k;
        a = g ? h[c] : h;
        if (!a) return null;
        m = 0;
        for (l = a.length; m < l; m++) c = a[m][0], g = a[m][1], g = this.Tr(b, e, c, g), k = k || g;
        return k
    };
    f.prototype.Tr = function(a, b, e, m) {
        var c, l, k = !1;
        this.Im++;
        var g = this.Ob().Mb;
        g && this.Qh(g.Me);
        var f = 1 < this.Im;
        this.Qh(e.Me);
        f && this.pt();
        var h = this.Pj(e);
        h.Mb = e;
        a && (c = this.types[b].fa(), c.ka = !1, c.j.length = 1, c.j[0] = a, this.types[b].qd());
        a = !0;
        if (e.parent) {
            b = h.Mp;
            for (c = e.parent; c;) b.push(c), c = c.parent;
            b.reverse();
            c = 0;
            for (l = b.length; c < l; c++)
                if (!b[c].Bt()) {
                    a = !1;
                    break
                }
        }
        a && (this.Ni++, e.jd ? e.At(m) : e.fb(), k = k || h.sf);
        this.Ij();
        f && this.it();
        this.yf(e.Me);
        g && this.yf(g.Me);
        0 !== this.ed || 0 !== x || this.Cl || this.td.dd() && !this.qc.length || this.Fb();
        this.Im--;
        return k
    };
    f.prototype.co = function() {
        var a = this.Ob();
        return a.Mb.kb[a.ab]
    };
    f.prototype.pt = function() {
        this.pj++;
        this.pj >= this.Pl.length && this.Pl.push([])
    };
    f.prototype.it = function() {
        this.pj--
    };
    f.prototype.eo = function() {
        return this.Pl[this.pj]
    };
    f.prototype.Pj = function(a) {
        this.Mi++;
        this.Mi >= this.Yk.length && this.Yk.push(new Qb);
        var b = this.Ob();
        b.reset(a);
        return b
    };
    f.prototype.Ij = function() {
        this.Mi--
    };
    f.prototype.Ob = function() {
        return this.Yk[this.Mi]
    };
    f.prototype.qt = function() {
        this.qj++;
        this.qj >= this.Rl.length && this.Rl.push(da({
            name: void 0,
            index: 0,
            ec: !1
        }));
        var a = this.as();
        a.name = void 0;
        a.index = 0;
        a.ec = !1;
        return a
    };
    f.prototype.jt = function() {
        this.qj--
    };
    f.prototype.as = function() {
        return this.Rl[this.qj]
    };
    f.prototype.fo = function(a, b) {
        for (var e, m, c, l, k, g; b;) {
            e = 0;
            for (m = b.Xc.length; e < m; e++)
                if (g = b.Xc[e], g instanceof Rb && jb(a, g.name)) return g;
            b = b.parent
        }
        e = 0;
        for (m = this.Sd.length; e < m; e++)
            for (k = this.Sd[e], c = 0, l = k.Be.length; c < l; c++)
                if (g = k.Be[c], g instanceof Rb && jb(a, g.name)) return g;
        return null
    };
    f.prototype.jo = function(a) {
        var b, e;
        b = 0;
        for (e = this.hd.length; b < e; b++)
            if (this.hd[b].da === a) return this.hd[b];
        return null
    };
    f.prototype.Wi = function(a) {
        var b, e;
        b = 0;
        for (e = this.I.length; b < e; b++)
            if (this.I[b].da === a) return this.I[b];
        return null
    };
    f.prototype.bs = function(a) {
        var b, e;
        b = 0;
        for (e = this.qe.length; b < e; b++)
            if (this.qe[b].da === a) return this.qe[b];
        return null
    };
    f.prototype.Ds = function() {
        var d = this,
            e = this.um,
            l = this.$d,
            m = this.mj,
            k = !1;
        this.Ip && (k = !0, e = "__c2_continuouspreview", this.Ip = !1);
        if (e.length) {
            this.Fb();
            l = this.Ft();
            if (window.indexedDB && !this.uc) b(e, l, function() {
                ga("Saved state to IndexedDB storage (" + l.length + " bytes)");
                d.$d = l;
                d.trigger(t.prototype.d.wk, null);
                d.$d = "";
                k && a()
            }, function(b) {
                try {
                    storage.set("__c2save_" + e, l, true), ga("Saved state to WebStorage (" + l.length + " bytes)"), d.$d = l, d.trigger(t.prototype.d.wk, null), d.$d = "", k && a()
                } catch (m) {
                    ga("Failed to save game state: " + b + "; " + m)
                }
            });
            else try {
                storage.set("__c2save_" + e, l, true), ga("Saved state to WebStorage (" + l.length + " bytes)"), d.$d = l, this.trigger(t.prototype.d.wk, null), d.$d = "", k && a()
            } catch (g) {
                ga("Error saving to WebStorage: " + g)
            }
            this.$b = this.mj = this.um = ""
        }
        m.length && (window.indexedDB && !this.uc ? c(m, function(a) {
            a ? (d.$b = a, ga("Loaded state from IndexedDB storage (" + d.$b.length + " bytes)")) : (d.$b = storage.get("__c2save_" + m) || "", ga("Loaded state from WebStorage (" + d.$b.length + " bytes)"));
            d.ai = !1;
            d.$b.length || d.trigger(t.prototype.d.vk, null)
        }, function() {
            d.$b = storage.get("__c2save_" + m) || "";
            ga("Loaded state from WebStorage (" + d.$b.length + " bytes)");
            d.ai = !1;
            d.$b.length || d.trigger(t.prototype.d.vk, null)
        }) : (this.$b = storage.get("__c2save_" + m) || "", ga("Loaded state from WebStorage (" + this.$b.length + " bytes)"), this.ai = !1, d.$b.length || d.trigger(t.prototype.d.vk, null)), this.um = this.mj = "");
        this.$b.length && (this.Fb(), this.Ws(this.$b), this.$d = this.$b, this.trigger(t.prototype.d.sq, null), this.$b = this.$d = "")
    };
    f.prototype.Ft = function() {
        var a, b, c, m, l, k, g, f = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.wc.Oa,
                    timescale: this.Ef,
                    tickcount: this.hi,
                    execcount: this.Ni,
                    next_uid: this.Ih,
                    running_layout: this.ra.da,
                    start_time_offset: Date.now() - this.dk
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (l = this.I[a], !l.R && !this.Tp(l)) {
                k = {
                    instances: []
                };
                Ta(l.Ra) && (k.ex = e(l.Ra));
                c = 0;
                for (m = l.j.length; c < m; c++) k.instances.push(this.tm(l.j[c]));
                f.types[l.da.toString()] = k
            }
        a = 0;
        for (b = this.hd.length; a < b; a++) c = this.hd[a], f.layouts[c.da.toString()] = c.yb();
        m = f.events.groups;
        a = 0;
        for (b = this.qe.length; a < b; a++) c = this.qe[a], m[c.da.toString()] = this.Xi[c.hh].Zf;
        b = f.events.cnds;
        for (g in this.Uf) this.Uf.hasOwnProperty(g) && (a = this.Uf[g], Ta(a.Ra) && (b[g] = {
            ex: e(a.Ra)
        }));
        b = f.events.acts;
        for (g in this.Of) this.Of.hasOwnProperty(g) && (a = this.Of[g], Ta(a.Ra) && (b[g] = {
            ex: a.Ra
        }));
        b = f.events.vars;
        for (g in this.Ig) this.Ig.hasOwnProperty(g) && (a = this.Ig[g], a.cj || a.parent && !a.rh || (b[g] = a.data));
        f.system = this.Gd.yb();
        return JSON.stringify(f)
    };
    f.prototype.wp = function() {
        var a, b, e, m, c, l;
        this.He = {};
        a = 0;
        for (b = this.I.length; a < b; a++)
            if (e = this.I[a], !e.R)
                for (m = 0, c = e.j.length; m < c; m++) l = e.j[m], this.He[l.uid.toString()] = l
    };
    f.prototype.Ws = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            var b = a.rt;
            this.wc.reset();
            this.wc.Oa = b.time;
            this.Ef = b.timescale;
            this.hi = b.tickcount;
            this.dk = Date.now() - b.start_time_offset;
            var e = b.running_layout;
            if (e !== this.ra.da)
                if (e = this.jo(e)) this.Sn(e);
                else return;
            var m, c, l, k, g, f, h;
            f = a.types;
            for (c in f)
                if (f.hasOwnProperty(c) && (k = this.Wi(parseInt(c, 10))) && !k.R && !this.Tp(k)) {
                    f[c].ex ? k.Ra = f[c].ex : Xa(k.Ra);
                    g = k.j;
                    l = f[c].instances;
                    e = 0;
                    for (m = qa(g.length, l.length); e < m; e++) this.nj(g[e], l[e]);
                    e = l.length;
                    for (m = g.length; e < m; e++) this.We(g[e]);
                    e = g.length;
                    for (m = l.length; e < m; e++) {
                        g = null;

                        if (k.Na.Fe && (g = this.ra.Vi(l[e].w.l), !g)) continue;
                        g = this.ze(k.Nc, g, !1, 0, 0, !0);
                        this.nj(g, l[e])
                    }
                    k.Dg = !0
                }
            this.Fb();
            this.wp();
            m = a.layouts;
            for (c in m) m.hasOwnProperty(c) && (e = this.jo(parseInt(c, 10))) && e.Pb(m[c]);
            m = a.events.groups;
            for (c in m) m.hasOwnProperty(c) && (e = this.bs(parseInt(c, 10))) && this.Xi[e.hh] && (this.Xi[e.hh].Zf = m[c]);
            e = a.events.cnds;
            for (c in e) e.hasOwnProperty(c) && this.Uf.hasOwnProperty(c) && (this.Uf[c].Ra = e[c].ex);
            e = a.events.acts;
            for (c in e) e.hasOwnProperty(c) && this.Of.hasOwnProperty(c) && (this.Of[c].Ra = e[c].ex);
            e = a.events.vars;
            for (c in e) e.hasOwnProperty(c) && this.Ig.hasOwnProperty(c) && (this.Ig[c].data = e[c]);
            this.Ih = b.next_uid;
            this.Gd.Pb(a.system);
            e = 0;
            for (m = this.I.length; e < m; e++)
                if (k = this.I[e], !k.R)
                    for (c = 0, a = k.j.length; c < a; c++) {
                        g = k.j[c];
                        if (k.vc)
                            for (f = g.gh(), b = g.siblings.length = 0, l = k.pc.length; b < l; b++) h = k.pc[b], k !== h && g.siblings.push(h.j[f]);
                        g.Ld && g.Ld();
                        if (g.Y)
                            for (b = 0, l = g.Y.length; b < l; b++) f = g.Y[b], f.Ld && f.Ld()
                    }
                this.qa = !0
        }
    };
    f.prototype.tm = function(a, b) {
        var c, m, l, k, g;
        k = a.type;
        l = k.Na;
        var f = {};
        b ? f.c2 = !0 : f.uid = a.uid;
        Ta(a.Ra) && (f.ex = e(a.Ra));
        if (a.mb && a.mb.length)
            for (f.ivs = {}, c = 0, m = a.mb.length; c < m; c++) f.ivs[a.type.yl[c].toString()] = a.mb[c];
        if (l.Fe) {
            l = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.A.da,
                zi: a.Hc()
            };
            0 !== a.q && (l.a = a.q);
            1 !== a.opacity && (l.o = a.opacity);
            0.5 !== a.Wb && (l.hX = a.Wb);
            0.5 !== a.Xb && (l.hY = a.Xb);
            0 !== a.ic && (l.bm = a.ic);
            a.visible || (l.v = a.visible);
            a.Ug || (l.ce = a.Ug); - 1 !== a.Hh && (l.mts = a.Hh);
            if (k.W.length)
                for (l.fx = [], c = 0, m = k.W.length; c < m; c++) g = k.W[c], l.fx.push({
                    name: g.name,
                    active: a.pe[g.index],
                    params: a.Qa[g.index]
                });
            f.w = l
        }
        if (a.Y && a.Y.length)
            for (f.behs = {}, c = 0, m = a.Y.length; c < m; c++) k = a.Y[c], k.yb && (f.behs[k.type.da.toString()] = k.yb());
        a.yb && (f.data = a.yb());
        return f
    };
    f.prototype.ds = function(a, b) {
        var e, m;
        e = 0;
        for (m = a.yl.length; e < m; e++)
            if (a.yl[e] === b) return e;
        return -1
    };
    f.prototype.$r = function(a, b) {
        var e, m;
        e = 0;
        for (m = a.Y.length; e < m; e++)
            if (a.Y[e].type.da === b) return e;
        return -1
    };
    f.prototype.nj = function(a, b, e) {
        var m, c, l, k, g;
        g = a.type;
        l = g.Na;
        if (e) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.Ra = b.ex : Xa(a.Ra);
        if (c = b.ivs)
            for (m in c) c.hasOwnProperty(m) && (e = this.ds(g, parseInt(m, 10)), 0 > e || e >= a.mb.length || (a.mb[e] = c[m]));
        if (l.Fe) {
            l = b.w;
            a.A.da !== l.l && (e = a.A, a.A = this.ra.Vi(l.l), a.A ? (a.A.j.push(a), a.A.Dc = !0, Da(e.j, a), e.Dc = !0) : (a.A = e, this.We(a)));
            a.x = l.x;
            a.y = l.y;
            a.width = l.w;
            a.height = l.h;
            a.If = l.zi;
            a.q = l.hasOwnProperty("a") ? l.a : 0;
            a.opacity = l.hasOwnProperty("o") ? l.o : 1;
            a.Wb = l.hasOwnProperty("hX") ? l.hX : 0.5;
            a.Xb = l.hasOwnProperty("hY") ? l.hY : 0.5;
            a.visible = l.hasOwnProperty("v") ? l.v : !0;
            a.Ug = l.hasOwnProperty("ce") ? l.ce : !0;
            a.Hh = l.hasOwnProperty("mts") ? l.mts : -1;
            a.ic = l.hasOwnProperty("bm") ? l.bm : 0;
            a.Vf = gb(a.ic);
            this.G && hb(a, a.ic, this.G);
            a.Wa();
            if (l.hasOwnProperty("fx"))
                for (e = 0, c = l.fx.length; e < c; e++) k = g.kl(l.fx[e].name), 0 > k || (a.pe[k] = l.fx[e].active, a.Qa[k] = l.fx[e].params);
            a.ke()
        }
        if (g = b.behs)
            for (m in g) g.hasOwnProperty(m) && (l = this.$r(a, parseInt(m, 10)), 0 > l || a.Y[l].Pb(g[m]));
        b.data && a.Pb(b.data)
    };
    Sb = function(a) {
        return new f(document.getElementById(a))
    };
    Tb = function(a, b) {
        return new f({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Sb;
    window.cr_createDCRuntime = Tb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.nv = !0;
        document.body.appendChild(a);
        a = new f(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new f(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function(f, h) {
    if (0 !== f && 0 !== h) {
        var b = window.cr_getC2Runtime();
        b && b.setSize(f, h)
    }
};
window.cr_setSuspended = function(f) {
    var h = window.cr_getC2Runtime();
    h && h.setSuspended(f)
};
(function() {
    function f(a, b) {
        this.c = a;
        this.gf = null;
        this.scrollX = this.c.wb / 2;
        this.scrollY = this.c.ub / 2;
        this.scale = 1;
        this.q = 0;
        this.$g = !0;
        this.name = b[0];
        this.width = b[1];
        this.height = b[2];
        this.Up = b[3];
        this.Gp = b[4];
        this.da = b[5];
        var c = b[6],
            f, g;
        this.ja = [];
        this.mh = [];
        f = 0;
        for (g = c.length; f < g; f++) {
            var k = new Ub(this, c[f]);
            k.Xo = f;
            this.ja.push(k)
        }
        c = b[7];
        this.of = [];
        f = 0;
        for (g = c.length; f < g; f++) {
            var k = c[f],
                h = this.c.I[k[1]];
            h.Nc || (h.Nc = k);
            this.of.push(k); - 1 === this.mh.indexOf(h) && this.mh.push(h)
        }
        this.W = [];
        this.ua = [];
        this.Qa = [];
        f = 0;
        for (g = b[8].length; f < g; f++) this.W.push({
            id: b[8][f][0],
            name: b[8][f][1],
            Cb: -1,
            Za: !0,
            index: f
        }), this.Qa.push(b[8][f][2].slice(0));
        this.ke();
        this.Sh = new va(0, 0, 1, 1);
        this.mm = new va(0, 0, 1, 1);
        this.Ie = {}
    }

    function h(a, b) {
        this.Ea = a;
        this.c = a.c;
        this.j = [];
        this.scale = 1;
        this.q = 0;
        this.ef = !1;
        this.je = new va(0, 0, 0, 0);
        this.Op = new ya;
        this.Bc = this.Eb = this.Cc = this.Db = 0;
        this.Dc = !1;
        this.name = b[0];
        this.index = b[1];
        this.da = b[2];
        this.visible = b[3];
        this.re = b[4];
        this.Ff = b[5];
        this.be = b[6];
        this.de = b[7];
        this.opacity = b[8];
        this.cl = b[9];
        this.le = b[10];
        this.ic = b[11];
        this.rr = b[12];
        this.Vf = "source-over";
        this.Nb = this.Qb = 0;
        this.Je = !1;
        var c = b[13],
            f, g;
        this.$f = [];
        f = 0;
        for (g = c.length; f < g; f++) {
            var k = c[f],
                h = this.c.I[k[1]];
            h.Nc || (h.Nc = k, h.dr = this.index);
            this.$f.push(k); - 1 === this.Ea.mh.indexOf(h) && this.Ea.mh.push(h)
        }
        this.W = [];
        this.ua = [];
        this.Qa = [];
        f = 0;
        for (g = b[14].length; f < g; f++) this.W.push({
            id: b[14][f][0],
            name: b[14][f][1],
            Cb: -1,
            Za: !0,
            index: f
        }), this.Qa.push(b[14][f][2].slice(0));
        this.ke();
        this.Sh = new va(0, 0, 1, 1);
        this.mm = new va(0, 0, 1, 1)
    }

    function b(a, b) {
        return a.If - b.If
    }
    f.prototype.Et = function(a) {
        var b = a.type.da.toString();
        this.Ie.hasOwnProperty(b) || (this.Ie[b] = []);
        this.Ie[b].push(this.c.tm(a))
    };
    f.prototype.po = function() {
        var a = this.ja[0];
        return !a.Ff && 1 === a.opacity && !a.cl && a.visible
    };
    f.prototype.ke = function() {
        this.ua.length = 0;
        var a, b, c;
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], c.Za && this.ua.push(c)
    };
    f.prototype.jl = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.W.length; b < c; b++)
            if (f = this.W[b], f.name === a) return f;
        return null
    };
    var c = [];
    f.prototype.Cm = function() {
        this.Gp && (this.gf = this.c.Zk[this.Gp], this.gf.Km());
        this.c.ra = this;
        this.scrollX = this.c.wb / 2;
        this.scrollY = this.c.ub / 2;
        var a, e, f, h, g, k, r;
        a = 0;
        for (f = this.c.I.length; a < f; a++)
            if (e = this.c.I[a], !e.R)
                for (g = e.j, e = 0, h = g.length; e < h; e++)
                    if (k = g[e], k.A) {
                        var l = k.A.Xo;
                        l >= this.ja.length && (l = this.ja.length - 1);
                        k.A = this.ja[l]; - 1 === k.A.j.indexOf(k) && k.A.j.push(k);
                        k.A.Dc = !0
                    }
        c.length = 0;
        this.Sq();
        a = 0;
        for (f = this.ja.length; a < f; a++) k = this.ja[a], k.br(), k.ef = !0, e = k.Vb(0, 0, !0, !0), h = k.Vb(0, 0, !1, !0), k.ef = !1, this.c.Ad && (e = e + 0.5 | 0, h = h + 0.5 | 0), k.pm(e, h, null);
        g = !1;
        if (!this.$g) {
            for (r in this.Ie)
                if (this.Ie.hasOwnProperty(r) && (e = this.c.Wi(parseInt(r, 10))) && !e.R && this.c.Jm(e)) {
                    h = this.Ie[r];
                    a = 0;
                    for (f = h.length; a < f; a++) {
                        k = null;
                        if (e.Na.Fe && (k = this.Vi(h[a].w.l), !k)) continue;
                        k = this.c.ze(e.Nc, k, !1, 0, 0, !0);
                        this.c.nj(k, h[a]);
                        g = !0;
                        c.push(k)
                    }
                    h.length = 0
                }
            a = 0;
            for (f = this.ja.length; a < f; a++) this.ja[a].j.sort(b), this.ja[a].Dc = !0
        }
        g && (this.c.Fb(), this.c.wp());
        for (a = 0; a < c.length; a++)
            if (k = c[a], k.type.vc)
                for (f = k.gh(), e = 0, h = k.type.pc.length; e < h; e++) r = k.type.pc[e], k.type !== r && (r.j.length > f ? k.siblings.push(r.j[f]) : r.Nc && (g = this.c.ze(r.Nc, k.A, !0, k.x, k.y, !0), this.c.Fb(), r.nk(), k.siblings.push(g), c.push(g)));
        a = 0;
        for (f = this.of.length; a < f; a++) this.c.ze(this.of[a], null, !0);
        this.c.cf = null;
        this.c.Fb();
        if (this.c.Da && !this.c.nb)
            for (a = 0, f = this.c.I.length; a < f; a++) r = this.c.I[a], !r.R && r.j.length && r.Lj && r.Lj(this.c.Da);
        a = 0;
        for (f = c.length; a < f; a++) k = c[a], this.c.trigger(Object.getPrototypeOf(k.type.Na).d.Jd, k);
        c.length = 0;
        this.c.trigger(t.prototype.d.uk, null);
        this.$g = !1
    };
    f.prototype.$q = function() {
        var a, b, c, f, g;
        b = a = 0;
        for (c = this.of.length; a < c; a++) f = this.of[a], g = this.c.I[f[1]], g.global ? this.c.ze(f, null, !0) : (this.of[b] = f, b++);
        this.of.length = b
    };
    f.prototype.Ot = function() {
        this.c.trigger(t.prototype.d.rq, null);
        this.c.Gd.kc.length = 0;
        var a, b, c, f, g, k;
        a = 0;
        for (b = this.ja.length; a < b; a++) {
            g = this.ja[a].j;
            c = 0;
            for (f = g.length; c < f; c++) k = g[c], k.type.global || (this.c.Jm(k.type) && this.Et(k), this.c.We(k));
            this.c.Fb();
            g.length = 0;
            this.ja[a].Dc = !0
        }
        a = 0;
        for (b = this.c.I.length; a < b; a++)
            if (g = this.c.I[a], !(g.global || g.Na.Fe || g.Na.bk || g.R)) {
                c = 0;
                for (f = g.j.length; c < f; c++) this.c.We(g.j[c]);
                this.c.Fb()
            }
    };
    f.prototype.Rd = function(a) {
        var b, c = a,
            f = !1,
            g = !this.c.Qc;
        g && (this.c.lj || (this.c.lj = document.createElement("canvas"), b = this.c.lj, b.width = this.c.ba, b.height = this.c.aa, this.c.Mo = b.getContext("2d"), f = !0), b = this.c.lj, c = this.c.Mo, b.width !== this.c.ba && (b.width = this.c.ba, f = !0), b.height !== this.c.aa && (b.height = this.c.aa, f = !0), f && (c.webkitImageSmoothingEnabled = this.c.ma, c.mozImageSmoothingEnabled = this.c.ma, c.msImageSmoothingEnabled = this.c.ma, c.imageSmoothingEnabled = this.c.ma));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.c.Ek && !this.po() && c.clearRect(0, 0, this.c.ba, this.c.aa);
        var k, h, f = 0;
        for (k = this.ja.length; f < k; f++) h = this.ja[f], h.visible && 0 < h.opacity && 11 !== h.ic && h.Rd(c);
        g && a.drawImage(b, 0, 0, this.c.width, this.c.height)
    };
    f.prototype.Pc = function(a) {
        var b = 0 < this.ua.length || this.c.Gg || !this.c.Qc;
        if (b) {
            this.c.xc || (this.c.xc = a.ye(this.c.ba, this.c.aa, this.c.ma));
            if (this.c.xc.Sg !== this.c.ba || this.c.xc.Rg !== this.c.aa) a.deleteTexture(this.c.xc), this.c.xc = a.ye(this.c.ba, this.c.aa, this.c.ma);
            a.Dd(this.c.xc);
            this.c.Qc || a.Ag(this.c.ba, this.c.aa)
        } else this.c.xc && (a.Dd(null), a.deleteTexture(this.c.xc), this.c.xc = null);
        this.c.Ek && !this.po() && a.clear(0, 0, 0, 0);
        var c, f;
        c = 0;
        for (f = this.ja.length; c < f; c++) this.ja[c].visible && 0 < this.ja[c].opacity && this.ja[c].Pc(a);
        b && (0 === this.ua.length || 1 === this.ua.length && this.c.Qc ? (1 === this.ua.length ? (b = this.ua[0].index, a.Fd(this.ua[0].Cb), a.zg(null, 1 / this.c.ba, 1 / this.c.aa, 0, 0, 1, 1, this.scale, this.q, 0, 0, this.Qa[b]), a.Mj(this.ua[0].Cb) && (this.c.qa = !0)) : a.Fd(0), this.c.Qc || a.Ag(this.c.width, this.c.height), a.Dd(null), a.zf(1), a.zc(this.c.xc), a.Bp(), a.Ke(), a.Ue(), b = this.c.width / 2, c = this.c.height / 2, a.Qj(-b, c, b, c, b, -c, -b, -c), a.zc(null)) : this.nm(a, null, null, null))
    };
    f.prototype.eh = function() {
        return 0 < this.ua.length || this.c.Gg || !this.c.Qc ? this.c.xc : null
    };
    f.prototype.ko = function() {
        var a = this.ja[0].Rc(),
            b, c, f;
        b = 1;
        for (c = this.ja.length; b < c; b++) f = this.ja[b], (0 !== f.be || 0 !== f.de) && f.Rc() < a && (a = f.Rc());
        return a
    };
    f.prototype.vm = function(a) {
        if (!this.Up) {
            var b = this.c.ba * (1 / this.ko()) / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.c.qa = !0)
    };
    f.prototype.wm = function(a) {
        if (!this.Up) {
            var b = this.c.aa * (1 / this.ko()) / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.c.qa = !0)
    };
    f.prototype.Sq = function() {
        this.vm(this.scrollX);
        this.wm(this.scrollY)
    };
    f.prototype.nm = function(a, b, c, f) {
        var g = c ? c.ua : b ? b.ua : this.ua,
            k = 1,
            h = 0,
            l = 0,
            x = 0;
        c ? (k = c.A.Rc(), h = c.A.sb(), l = c.A.Db, x = c.A.Eb) : b && (k = b.Rc(), h = b.sb(), l = b.Db, x = b.Eb);
        var d = this.c.fl,
            v, y, m, D, L = 0,
            J = 1,
            F, K = this.c.ba,
            I = this.c.aa,
            U = K / 2,
            Y = I / 2,
            T = b ? b.Sh : this.Sh,
            s = b ? b.mm : this.mm,
            z = 0,
            H = 0,
            M = 0,
            W = 0,
            O = K,
            E = K,
            B = I,
            Q = I,
            S = m = 0,
            N = c ? c.A.sb() : 0;
        if (c) {
            v = 0;
            for (y = g.length; v < y; v++) m += a.js(g[v].Cb), S += a.ks(g[v].Cb);
            D = c.hc;
            z = b.Sc(D.left, D.top, !0);
            M = b.Sc(D.left, D.top, !1);
            O = b.Sc(D.right, D.bottom, !0);
            B = b.Sc(D.right, D.bottom, !1);
            0 !== N && (v = b.Sc(D.right, D.top, !0), y = b.Sc(D.right, D.top, !1), H = b.Sc(D.left, D.bottom, !0), W = b.Sc(D.left, D.bottom, !1), D = Math.min(z, O, v, H), O = Math.max(z, O, v, H), z = D, D = Math.min(M, B, y, W), B = Math.max(M, B, y, W), M = D);
            z -= m;
            M -= S;
            O += m;
            B += S;
            s.left = z / K;
            s.top = 1 - M / I;
            s.right = O / K;
            s.bottom = 1 - B / I;
            H = z = sa(z);
            W = M = sa(M);
            E = O = ta(O);
            Q = B = ta(B);
            H -= m;
            W -= S;
            E += m;
            Q += S;
            0 > z && (z = 0);
            0 > M && (M = 0);
            O > K && (O = K);
            B > I && (B = I);
            0 > H && (H = 0);
            0 > W && (W = 0);
            E > K && (E = K);
            Q > I && (Q = I);
            T.left = z / K;
            T.top = 1 - M / I;
            T.right = O / K;
            T.bottom = 1 - B / I
        } else T.left = s.left = 0, T.top = s.top = 0, T.right = s.right = 1, T.bottom = s.bottom = 1;
        S = c && ((c.q || N) && a.Ph(g[0].Cb) || 0 !== m || 0 !== S || 1 !== c.opacity || c.type.Na.So) || b && !c && 1 !== b.opacity;
        a.Bp();
        if (S) {
            d[L] || (d[L] = a.ye(K, I, this.c.ma));
            if (d[L].Sg !== K || d[L].Rg !== I) a.deleteTexture(d[L]), d[L] = a.ye(K, I, this.c.ma);
            a.Fd(0);
            a.Dd(d[L]);
            F = Q - W;
            a.clearRect(H, I - W - F, E - H, F);
            c ? c.Pc(a) : (a.zc(this.c.Ic), a.zf(b.opacity), a.Ke(), a.translate(-U, -Y), a.Ue(), a.Bd(z, B, O, B, O, M, z, M, T));
            s.left = s.top = 0;
            s.right = s.bottom = 1;
            c && (D = T.top, T.top = T.bottom, T.bottom = D);
            L = 1;
            J = 0
        }
        a.zf(1);
        m = g.length - 1;
        var N = a.km(g[m].Cb) || !b && !c && !this.c.Qc,
            w = 0;
        v = 0;
        for (y = g.length; v < y; v++) {
            d[L] || (d[L] = a.ye(K, I, this.c.ma));
            if (d[L].Sg !== K || d[L].Rg !== I) a.deleteTexture(d[L]), d[L] = a.ye(K, I, this.c.ma);
            a.Fd(g[v].Cb);
            w = g[v].index;
            a.Mj(g[v].Cb) && (this.c.qa = !0);
            0 != v || S ? (a.zg(f, 1 / K, 1 / I, s.left, s.top, s.right, s.bottom, k, h, l, x, c ? c.Qa[w] : b ? b.Qa[w] : this.Qa[w]), a.zc(null), v !== m || N ? (a.Dd(d[L]), F = Q - W, D = I - W - F, a.clearRect(H, D, E - H, F)) : (c ? a.Le(c.Qb, c.Nb) : b && a.Le(b.Qb, b.Nb), a.Dd(f)), a.zc(d[J]), a.Ke(), a.translate(-U, -Y), a.Ue(), a.Bd(z, B, O, B, O, M, z, M, T), v !== m || N || a.zc(null)) : (a.Dd(d[L]), F = Q - W, D = I - W - F, a.clearRect(H, D, E - H, F), c ? (a.zg(f, 1 / c.width, 1 / c.height, s.left, s.top, s.right, s.bottom, k, h, l, x, c.Qa[w]), c.Pc(a)) : (a.zg(f, 1 / K, 1 / I, 0, 0, 1, 1, k, h, l, x, b ? b.Qa[w] : this.Qa[w]), a.zc(b ? this.c.Ic : this.c.xc), a.Ke(), a.translate(-U, -Y), a.Ue(), a.Bd(z, B, O, B, O, M, z, M, T)), s.left = s.top = 0, s.right = s.bottom = 1, c && !N && (D = B, B = M, M = D));
            L = 0 === L ? 1 : 0;
            J = 0 === L ? 1 : 0
        }
        N && (a.Fd(0), c ? a.Le(c.Qb, c.Nb) : b ? a.Le(b.Qb, b.Nb) : this.c.Qc || (a.Ag(this.c.width, this.c.height), U = this.c.width / 2, Y = this.c.height / 2, M = z = 0, O = this.c.width, B = this.c.height), a.Dd(f), a.zc(d[J]), a.Ke(), a.translate(-U, -Y), a.Ue(), c && 1 === g.length && !S ? a.Bd(z, M, O, M, O, B, z, B, T) : a.Bd(z, B, O, B, O, M, z, M, T), a.zc(null))
    };
    f.prototype.Vi = function(a) {
        var b, c;
        b = 0;
        for (c = this.ja.length; b < c; b++)
            if (this.ja[b].da === a) return this.ja[b];
        return null
    };
    f.prototype.yb = function() {
        var a, b, c, f = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.q,
                w: this.width,
                h: this.height,
                fv: this.$g,
                persist: this.Ie,
                fx: [],
                layers: {}
            };
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], f.fx.push({
            name: c.name,
            active: c.Za,
            params: this.Qa[c.index]
        });
        a = 0;
        for (b = this.ja.length; a < b; a++) c = this.ja[a], f.layers[c.da.toString()] = c.yb();
        return f
    };
    f.prototype.Pb = function(a) {
        var b, c, f, g;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.q = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Ie = a.persist;
        "undefined" !== typeof a.fv && (this.$g = a.fv);
        var k = a.fx;
        b = 0;
        for (c = k.length; b < c; b++)
            if (f = this.jl(k[b].name)) f.Za = k[b].active, this.Qa[f.index] = k[b].params;
        this.ke();
        b = a.layers;
        for (g in b) b.hasOwnProperty(g) && (a = this.Vi(parseInt(g, 10))) && a.Pb(b[g])
    };
    Hb = f;
    h.prototype.ke = function() {
        this.ua.length = 0;
        var a, b, c;
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], c.Za && this.ua.push(c)
    };
    h.prototype.jl = function(a) {
        var b, c, f;
        b = 0;
        for (c = this.W.length; b < c; b++)
            if (f = this.W[b], f.name === a) return f;
        return null
    };
    h.prototype.br = function() {
        var a, b, f, h, g, k;
        b = a = 0;
        for (f = this.$f.length; a < f; a++) {
            h = this.$f[a];
            g = this.c.I[h[1]];
            k = this.c.Jm(g);
            g = !0;
            if (!k || this.Ea.$g) h = this.c.ze(h, this, !0), c.push(h), h.type.global && (g = !1);
            g && (this.$f[b] = this.$f[a], b++)
        }
        this.$f.length = b;
        this.c.Fb();
        !this.c.J && this.W.length && (this.ic = this.rr);
        this.Vf = gb(this.ic);
        this.c.G && hb(this, this.ic, this.c.G)
    };
    h.prototype.Yt = function() {
        if (this.Dc) {
            var a, b;
            a = 0;
            for (b = this.j.length; a < b; a++) this.j[a].If = a;
            this.Dc = !1
        }
    };
    h.prototype.Rc = function(a) {
        return this.es() * (this.c.Qc || a ? this.c.Qg : 1)
    };
    h.prototype.es = function() {
        return (this.scale * this.Ea.scale - 1) * this.le + 1
    };
    h.prototype.sb = function() {
        return this.ef ? 0 : Ga(this.Ea.q + this.q)
    };
    h.prototype.Rd = function(a) {
        this.Je = this.cl || 1 !== this.opacity || 0 !== this.ic;
        var b = this.c.canvas,
            c = a,
            f = !1;
        this.Je && (this.c.kj || (this.c.kj = document.createElement("canvas"), b = this.c.kj, b.width = this.c.ba, b.height = this.c.aa, this.c.Lo = b.getContext("2d"), f = !0), b = this.c.kj, c = this.c.Lo, b.width !== this.c.ba && (b.width = this.c.ba, f = !0), b.height !== this.c.aa && (b.height = this.c.aa, f = !0), f && (c.webkitImageSmoothingEnabled = this.c.ma, c.mozImageSmoothingEnabled = this.c.ma, c.msImageSmoothingEnabled = this.c.ma, c.imageSmoothingEnabled = this.c.ma), this.Ff && c.clearRect(0, 0, this.c.ba, this.c.aa));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.Ff || (c.fillStyle = "rgb(" + this.re[0] + "," + this.re[1] + "," + this.re[2] + ")", c.fillRect(0, 0, this.c.ba, this.c.aa));
        c.save();
        this.ef = !0;
        var f = this.Vb(0, 0, !0, !0),
            g = this.Vb(0, 0, !1, !0);
        this.ef = !1;
        this.c.Ad && (f = f + 0.5 | 0, g = g + 0.5 | 0);
        this.pm(f, g, c);
        var k = this.Rc();
        c.scale(k, k);
        c.translate(-f, -g);
        for (var h, f = 0, g = this.j.length; f < g; f++) k = this.j[f], k.visible && 0 !== k.width && 0 !== k.height && (k.fc(), h = k.hc, h.right < this.Db || h.bottom < this.Eb || h.left > this.Cc || h.top > this.Bc || (c.globalCompositeOperation = k.Vf, k.Rd(c)));
        c.restore();
        this.Je && (a.globalCompositeOperation = this.Vf, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    h.prototype.pm = function(a, b, c) {
        var f = this.Rc();
        this.Db = a;
        this.Eb = b;
        this.Cc = a + this.c.ba * (1 / f);
        this.Bc = b + this.c.aa * (1 / f);
        a = this.sb();
        0 !== a && (c && (c.translate(this.c.ba / 2, this.c.aa / 2), c.rotate(-a), c.translate(this.c.ba / -2, this.c.aa / -2)), this.je.set(this.Db, this.Eb, this.Cc, this.Bc), this.je.offset((this.Db + this.Cc) / -2, (this.Eb + this.Bc) / -2), this.Op.Ep(this.je, a), this.Op.En(this.je), this.je.offset((this.Db + this.Cc) / 2, (this.Eb + this.Bc) / 2), this.Db = this.je.left, this.Eb = this.je.top, this.Cc = this.je.right, this.Bc = this.je.bottom)
    };
    h.prototype.Pc = function(a) {
        var b = this.c.ba,
            c = this.c.aa,
            f = 0,
            g = 0;
        if (this.Je = this.cl || 1 !== this.opacity || 0 < this.ua.length || 0 !== this.ic) {
            this.c.Ic || (this.c.Ic = a.ye(this.c.ba, this.c.aa, this.c.ma));
            if (this.c.Ic.Sg !== this.c.ba || this.c.Ic.Rg !== this.c.aa) a.deleteTexture(this.c.Ic), this.c.Ic = a.ye(this.c.ba, this.c.aa, this.c.ma);
            a.Dd(this.c.Ic);
            this.Ff && a.clear(0, 0, 0, 0)
        }
        this.Ff || a.clear(this.re[0] / 255, this.re[1] / 255, this.re[2] / 255, 1);
        this.ef = !0;
        var g = this.Vb(0, 0, !0, !0),
            k = this.Vb(0, 0, !1, !0);
        this.ef = !1;
        this.c.Ad && (g = g + 0.5 | 0, k = k + 0.5 | 0);
        this.pm(g, k, null);
        k = this.Rc();
        a.Ke();
        a.scale(k, k);
        a.zp(-this.sb());
        a.translate((this.Db + this.Cc) / -2, (this.Eb + this.Bc) / -2);
        a.Ue();
        var h, l, x;
        h = 0;
        for (l = this.j.length; h < l; h++)
            if (x = this.j[h], x.visible && 0 !== x.width && 0 !== x.height && (x.fc(), f = x.hc, !(f.right < this.Db || f.bottom < this.Eb || f.left > this.Cc || f.top > this.Bc)))
                if (x.Zp)
                    if (f = x.ua[0].Cb, g = x.ua[0].index, 1 !== x.ua.length || a.km(f) || a.ot(f) || (x.q || x.A.sb()) && a.Ph(f) || 1 !== x.opacity || x.type.Na.So) this.Ea.nm(a, this, x, this.Je ? this.c.Ic : this.Ea.eh()), a.Ke(), a.scale(k, k), a.zp(-this.sb()), a.translate((this.Db + this.Cc) / -2, (this.Eb + this.Bc) / -2), a.Ue();
                    else {
                        a.Fd(f);
                        a.Le(x.Qb, x.Nb);
                        a.Mj(f) && (this.c.qa = !0);
                        var d = 0,
                            v = 0,
                            y = 0,
                            m = 0;
                        a.Ph(f) && (f = x.hc, d = this.Sc(f.left, f.top, !0), v = this.Sc(f.left, f.top, !1), y = this.Sc(f.right, f.bottom, !0), f = this.Sc(f.right, f.bottom, !1), d /= b, v = 1 - v / c, y /= b, m = 1 - f / c);
                        a.zg(this.Je ? this.c.Ic : this.Ea.eh(), 1 / x.width, 1 / x.height, d, v, y, m, this.Rc(), this.sb(), this.Db, this.Eb, x.Qa[g]);
                        x.Pc(a)
                    } else a.Fd(0), a.Le(x.Qb, x.Nb), x.Pc(a);
        this.Je && (f = this.ua.length ? this.ua[0].Cb : 0, g = this.ua.length ? this.ua[0].index : 0, 0 === this.ua.length || 1 === this.ua.length && !a.km(f) && 1 === this.opacity ? (1 === this.ua.length ? (a.Fd(f), a.zg(this.Ea.eh(), 1 / this.c.ba, 1 / this.c.aa, 0, 0, 1, 1, this.Rc(), this.sb(), this.Db, this.Eb, this.Qa[g]), a.Mj(f) && (this.c.qa = !0)) : a.Fd(0), a.Dd(this.Ea.eh()), a.zf(this.opacity), a.zc(this.c.Ic), a.Le(this.Qb, this.Nb), a.Ke(), a.Ue(), b = this.c.ba / 2, c = this.c.aa / 2, a.Qj(-b, c, b, c, b, -c, -b, -c), a.zc(null)) : this.Ea.nm(a, this, null, this.Ea.eh()))
    };
    h.prototype.Vb = function(a, b, c, f) {
        var g = this.c.devicePixelRatio;
        this.c.cg && (a *= g, b *= g);
        var g = this.c.op,
            k = this.c.pp,
            g = (this.Ea.scrollX - g) * this.be + g,
            k = (this.Ea.scrollY - k) * this.de + k,
            h = 1 / this.Rc(!f);
        f ? (g -= this.c.ba * h / 2, k -= this.c.aa * h / 2) : (g -= this.c.width * h / 2, k -= this.c.height * h / 2);
        g += a * h;
        k += b * h;
        b = this.sb();
        0 !== b && (g -= this.Ea.scrollX, k -= this.Ea.scrollY, a = Math.cos(b), b = Math.sin(b), f = g * a - k * b, k = k * a + g * b, g = f + this.Ea.scrollX, k += this.Ea.scrollY);
        return c ? g : k
    };
    h.prototype.Sc = function(a, b, c) {
        var f = this.sb();
        if (0 !== f) {
            a -= this.Ea.scrollX;
            b -= this.Ea.scrollY;
            var g = Math.cos(-f),
                f = Math.sin(-f),
                k = a * g - b * f;
            b = b * g + a * f;
            a = k + this.Ea.scrollX;
            b += this.Ea.scrollY
        }
        g = this.c.op;
        f = this.c.pp;
        g = (this.Ea.scrollX - g) * this.be + g;
        f = (this.Ea.scrollY - f) * this.de + f;
        k = 1 / this.Rc(!1);
        g -= this.c.ba * k / 2;
        f -= this.c.aa * k / 2;
        g = (a - g) / k;
        return c ? g : (b - f) / k
    };
    h.prototype.yb = function() {
        var a, b, c, f = {
                s: this.scale,
                a: this.q,
                vl: this.Db,
                vt: this.Eb,
                vr: this.Cc,
                vb: this.Bc,
                v: this.visible,
                bc: this.re,
                t: this.Ff,
                px: this.be,
                py: this.de,
                o: this.opacity,
                zr: this.le,
                fx: [],
                instances: []
            };
        a = 0;
        for (b = this.W.length; a < b; a++) c = this.W[a], f.fx.push({
            name: c.name,
            active: c.Za,
            params: this.Qa[c.index]
        });
        return f
    };
    h.prototype.Pb = function(a) {
        var c, f;
        this.scale = a.s;
        this.q = a.a;
        this.Db = a.vl;
        this.Eb = a.vt;
        this.Cc = a.vr;
        this.Bc = a.vb;
        this.visible = a.v;
        this.re = a.bc;
        this.Ff = a.t;
        this.be = a.px;
        this.de = a.py;
        this.opacity = a.o;
        this.le = a.zr;
        var h = a.fx;
        a = 0;
        for (c = h.length; a < c; a++)
            if (f = this.jl(h[a].name)) f.Za = h[a].active, this.Qa[f.index] = h[a].params;
        this.ke();
        this.j.sort(b);
        this.Dc = !0
    };
    Ub = h
})();
(function() {
    function f(a, b) {
        var d, c = a.length;
        switch (c) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (d = 0; d < c; d++)
                    if (a[d] !== b[d]) return !1;
                return !0
        }
    }

    function h(a, b) {
        return a.index - b.index
    }

    function b(a) {
        var b, c, l, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(h);
        a.length >= d.length && (d.length = a.length + 1);
        d[a.length] || (d[a.length] = []);
        e = d[a.length];
        b = 0;
        for (c = e.length; b < c; b++)
            if (l = e[b], f(a, l)) return l;
        e.push(a);
        return a
    }

    function c(a, b) {
        this.c = a;
        this.Qp = {};
        this.Xn = {};
        this.tl = !1;
        this.ro = new fa;
        this.Uk = [];
        this.Fk = [];
        this.name = b[0];
        var d = b[1];
        this.Be = [];
        var c, l;
        c = 0;
        for (l = d.length; c < l; c++) this.to(d[c], null, this.Be)
    }

    function a(a) {
        this.type = a;
        this.j = [];
        this.la = [];
        this.ka = !0
    }

    function e(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.c = a.c;
        this.Ga = [];
        this.Me = [];
        this.qo = this.kk = this.Gm = this.$i = this.group = this.Bm = !1;
        this.kb = [];
        this.$c = [];
        this.Xc = [];
        this.hh = "";
        this.Zf = this.$i = this.group = !1;
        this.Bi = null;
        d[1] && (this.hh = d[1][1].toLowerCase(), this.group = !0, this.$i = !! d[1][0], this.Bi = [], this.Zf = this.$i, this.c.qe.push(this), this.c.Xi[this.hh] = this);
        this.jd = d[2];
        this.da = d[4];
        this.group || (this.c.Dn[this.da.toString()] = this);
        var c = d[5];
        a = 0;
        for (b = c.length; a < b; a++) {
            var l = new Vb(this, c[a]);
            l.index = a;
            this.kb.push(l);
            this.rn(l.type)
        }
        c = d[6];
        a = 0;
        for (b = c.length; a < b; a++) l = new Wb(this, c[a]), l.index = a, this.$c.push(l);
        if (8 === d.length)
            for (d = d[7], a = 0, b = d.length; a < b; a++) this.sheet.to(d[a], this, this.Xc);
        this.dj = !1;
        this.kb.length && (this.dj = null == this.kb[0].type && this.kb[0].Ab == t.prototype.d.iq)
    }

    function q(a, b) {
        var d, c, l;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.vc))
            for (d = 0, c = a.pc.length; d < c; d++) l = a.pc[d], a !== l && -1 === b.indexOf(l) && b.push(l)
    }

    function A(a, b) {
        this.Ec = a;
        this.sheet = a.sheet;
        this.c = a.c;
        this.U = [];
        this.Fa = [];
        this.Ra = {};
        this.index = -1;
        this.Pg = !1;
        this.Ab = b[1];
        this.trigger = 0 < b[3];
        this.Wn = 2 === b[3];
        this.ae = b[4];
        this.zl = b[5];
        this.Us = b[6];
        this.da = b[7];
        this.c.Uf[this.da.toString()] = this; - 1 === b[0] ? (this.type = null, this.fb = this.rm, this.bf = null, this.Lc = -1) : (this.type = this.c.I[b[0]], this.fb = this.Us ? this.Ct : this.qm, b[2] ? (this.bf = this.type.Ui(b[2]), this.Lc = this.type.hl(b[2])) : (this.bf = null, this.Lc = -1), this.Ec.parent && this.Ec.parent.Xj());
        this.Wn && (this.fb = this.Dt);
        if (10 === b.length) {
            var d, c, l = b[9];
            d = 0;
            for (c = l.length; d < c; d++) {
                var e = new Xb(this, l[d]);
                this.U.push(e)
            }
            this.Fa.length = l.length
        }
    }

    function g(a, b) {
        this.Ec = a;
        this.sheet = a.sheet;
        this.c = a.c;
        this.U = [];
        this.Fa = [];
        this.Ra = {};
        this.index = -1;
        this.Pg = !1;
        this.Ab = b[1]; - 1 === b[0] ? (this.type = null, this.fb = this.rm, this.bf = null, this.Lc = -1) : (this.type = this.c.I[b[0]], this.fb = this.qm, b[2] ? (this.bf = this.type.Ui(b[2]), this.Lc = this.type.hl(b[2])) : (this.bf = null, this.Lc = -1));
        this.da = b[3];
        this.c.Of[this.da.toString()] = this;
        if (6 === b.length) {
            var d, c, l = b[5];
            d = 0;
            for (c = l.length; d < c; d++) {
                var e = new Xb(this, l[d]);
                this.U.push(e)
            }
            this.Fa.length = l.length
        }
    }

    function k(a, b) {
        this.O = a;
        this.Ec = a.Ec;
        this.sheet = a.sheet;
        this.c = a.c;
        this.type = b[0];
        this.ud = null;
        this.Ne = 0;
        this.get = null;
        this.Ln = 0;
        this.Ea = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.ii = this.Cf = this.ii = this.Cf = this.Yn = this.hf = this.ji = null;
        this.Yc = !1;
        var d, c, l;
        switch (b[0]) {
            case 0:
            case 7:
                this.ud = new Yb(this, b[1]);
                this.Ne = 0;
                this.get = this.ps;
                break;
            case 1:
                this.ud = new Yb(this, b[1]);
                this.Ne = 0;
                this.get = this.qs;
                break;
            case 5:
                this.ud = new Yb(this, b[1]);
                this.Ne = 0;
                this.get = this.vs;
                break;
            case 3:
            case 8:
                this.Ln = b[1];
                this.get = this.ns;
                break;
            case 6:
                this.Ea = this.c.Kl[b[1]];
                this.get = this.ws;
                break;
            case 9:
                this.key = b[1];
                this.get = this.us;
                break;
            case 4:
                this.object = this.c.I[b[1]];
                this.get = this.xs;
                this.Ec.rn(this.object);
                this.O instanceof Wb ? this.Ec.Xj() : this.Ec.parent && this.Ec.parent.Xj();
                break;
            case 10:
                this.index = b[1];
                a.type.R ? (this.get = this.rs, this.Yc = !0) : this.get = this.ts;
                break;
            case 11:
                this.ji = b[1];
                this.hf = null;
                this.get = this.os;
                break;
            case 2:
            case 12:
                this.Yn = b[1];
                this.get = this.ms;
                break;
            case 13:
                for (this.get = this.ys, this.Cf = [], this.ii = [], d = 1, c = b.length; d < c; d++) l = new Xb(this.O, b[d]), this.Cf.push(l), this.ii.push(0)
        }
    }

    function r(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.c = a.c;
        this.Ga = [];
        this.name = d[1];
        this.ok = d[2];
        this.xl = d[3];
        this.rh = !! d[4];
        this.cj = !! d[5];
        this.da = d[6];
        this.c.Ig[this.da.toString()] = this;
        this.data = this.xl;
        this.parent ? (this.xf = this.rh || this.cj ? -1 : this.c.Mt++, this.c.Oq.push(this)) : (this.xf = -1, this.c.Nq.push(this))
    }

    function l(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.c = a.c;
        this.Ga = [];
        this.kh = null;
        this.Fs = d[1];
        this.Za = !0
    }

    function x() {
        this.Mp = [];
        this.reset(null)
    }
    var d = [];
    c.prototype.toString = aa("name");
    c.prototype.to = function(a, b, d) {
        switch (a[0]) {
            case 0:
                a = new Zb(this, b, a);
                if (a.jd)
                    for (d.push(a), d = 0, b = a.kb.length; d < b; d++) a.kb[d].trigger && this.uo(a, d);
                else a.Do() ? this.uo(a, 0) : d.push(a);
                break;
            case 1:
                a = new Rb(this, b, a);
                d.push(a);
                break;
            case 2:
                a = new $b(this, b, a), d.push(a)
        }
    };
    c.prototype.Va = function() {
        var a, b;
        a = 0;
        for (b = this.Be.length; a < b; a++) this.Be[a].Va(a < b - 1 && this.Be[a + 1].dj)
    };
    c.prototype.Km = function() {
        this.Uk.length = 0;
        this.Fk.length = 0;
        this.pn(this);
        this.Fk.length = 0
    };
    c.prototype.pn = function(a) {
        var b, d, c, l, e = a.Uk,
            k = a.Fk,
            f = this.ro.Gf();
        b = 0;
        for (d = f.length; b < d; ++b) c = f[b], l = c.kh, !c.Za || a === l || -1 < k.indexOf(l) || (k.push(l), l.pn(a), e.push(l))
    };
    c.prototype.fb = function(a) {
        this.c.lv || (this.tl = !0, a || (this.c.Cl = !0));
        var b, d;
        b = 0;
        for (d = this.Be.length; b < d; b++) {
            var c = this.Be[b];
            c.fb();
            this.c.Nk(c.Ga);
            this.c.td.dd() && !this.c.qc.length || this.c.Fb()
        }
        a || (this.c.Cl = !1)
    };
    c.prototype.uo = function(a, b) {
        a.jd || this.c.lk.push(a);
        var d, c, l = a.kb[b],
            e;
        e = l.type ? l.type.name : "system";
        var k = (d = l.Wn) ? this.Xn : this.Qp;
        k[e] || (k[e] = []);
        e = k[e];
        k = l.Ab;
        if (d) {
            if (l.U.length && (l = l.U[0], 1 === l.type && 2 === l.ud.type)) {
                l = l.ud.value.toLowerCase();
                d = 0;
                for (c = e.length; d < c; d++)
                    if (e[d].method == k) {
                        d = e[d].Xg;
                        d[l] ? d[l].push([a, b]) : d[l] = [
                            [a, b]
                        ];
                        return
                    }
                d = {};
                d[l] = [
                    [a, b]
                ];
                e.push({
                    method: k,
                    Xg: d
                })
            }
        } else {
            d = 0;
            for (c = e.length; d < c; d++)
                if (e[d].method == k) {
                    e[d].Xg.push([a, b]);
                    return
                }
            u && k === u.prototype.d.Nf ? e.unshift({
                method: k,
                Xg: [
                    [a, b]
                ]
            }) : e.push({
                method: k,
                Xg: [
                    [a, b]
                ]
            })
        }
    };
    Ib = c;
    a.prototype.sl = function() {
        return this.ka ? this.type.j.length : this.j.length
    };
    a.prototype.Gc = function() {
        return this.ka ? this.type.j : this.j
    };
    a.prototype.Nh = function(a) {
        a && (a.c.Ob().Mb.jd ? (this.ka && (this.j.length = 0, Ba(this.la, a.type.j), this.ka = !1), a = this.la.indexOf(a), -1 !== a && (this.j.push(this.la[a]), this.la.splice(a, 1))) : (this.ka = !1, this.j.length = 1, this.j[0] = a))
    };
    nb = a;
    window._c2hh_ = "E9F4E41969C9BD7F41DDCF66DEB00E842A7DAEFD";
    e.prototype.Va = function(a) {
        var d, c = this.parent;
        if (this.group)
            for (this.kk = !0; c;) {
                if (!c.group) {
                    this.kk = !1;
                    break
                }
                c = c.parent
            }
        this.Gm = !this.Do() && (!this.parent || this.parent.group && this.parent.kk);
        this.qo = !! a;
        this.Me = this.Ga.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (d = c.Ga.length; a < d; a++) this.Lq(c.Ga[a]);
            c = c.parent
        }
        this.Ga = b(this.Ga);
        this.Me = b(this.Me);
        a = 0;
        for (d = this.kb.length; a < d; a++) this.kb[a].Va();
        a = 0;
        for (d = this.$c.length; a < d; a++) this.$c[a].Va();
        a = 0;
        for (d = this.Xc.length; a < d; a++) this.Xc[a].Va(a < d - 1 && this.Xc[a + 1].dj)
    };
    e.prototype.Ht = function(a) {
        if (this.Zf !== !! a) {
            this.Zf = !! a;
            var b;
            a = 0;
            for (b = this.Bi.length; a < b; ++a) this.Bi[a].Wp();
            0 < b && this.c.ra.gf && this.c.ra.gf.Km()
        }
    };
    e.prototype.rn = function(a) {
        q(a, this.Ga)
    };
    e.prototype.Lq = function(a) {
        q(a, this.Me)
    };
    e.prototype.Xj = function() {
        this.Bm = !0;
        this.parent && this.parent.Xj()
    };
    e.prototype.Do = function() {
        return this.kb.length ? this.kb[0].trigger : !1
    };
    e.prototype.fb = function() {
        var a, b = !1,
            d, c = this.c,
            l = this.c.Ob();
        l.Mb = this;
        var e = this.kb;
        this.dj || (l.Xk = !1);
        if (this.jd) {
            0 === e.length && (b = !0);
            l.ab = 0;
            for (a = e.length; l.ab < a; l.ab++) e[l.ab].trigger || (d = e[l.ab].fb()) && (b = !0);
            (l.sf = b) && this.Tj()
        } else {
            l.ab = 0;
            for (a = e.length; l.ab < a; l.ab++)
                if (d = e[l.ab].fb(), !d) {
                    l.sf = !1;
                    !this.Gm || c.td.dd() && !c.qc.length || c.Fb();
                    return
                }
            l.sf = !0;
            this.Tj()
        }
        this.tr(l)
    };
    e.prototype.tr = function(a) {
        a.sf && this.qo && (a.Xk = !0);
        !this.Gm || this.c.td.dd() && !this.c.qc.length || this.c.Fb()
    };
    e.prototype.At = function(a) {
        this.c.Ob().Mb = this;
        this.kb[a].fb() && (this.Tj(), this.c.Ob().sf = !0)
    };
    e.prototype.Tj = function() {
        var a = this.c.Ob(),
            b;
        a.nc = 0;
        for (b = this.$c.length; a.nc < b; a.nc++)
            if (this.$c[a.nc].fb()) return;
        this.Ap()
    };
    e.prototype.xt = function() {
        var a = this.c.Ob(),
            b;
        for (b = this.$c.length; a.nc < b; a.nc++)
            if (this.$c[a.nc].fb()) return;
        this.Ap()
    };
    e.prototype.Ap = function() {
        if (this.Xc.length) {
            var a, b, d, c, l = this.Xc.length - 1;
            this.c.Pj(this);
            if (this.Bm)
                for (a = 0, b = this.Xc.length; a < b; a++) d = this.Xc[a], (c = !this.kk || !this.group && a < l) && this.c.Oj(d.Ga), d.fb(), c ? this.c.yf(d.Ga) : this.c.Nk(d.Ga);
            else
                for (a = 0, b = this.Xc.length; a < b; a++) this.Xc[a].fb();
            this.c.Ij()
        }
    };
    e.prototype.Bt = function() {
        var a = this.c.Ob();
        a.Mb = this;
        var b = !1,
            d;
        a.ab = 0;
        for (d = this.kb.length; a.ab < d; a.ab++)
            if (this.kb[a.ab].fb()) b = !0;
            else if (!this.jd) return !1;
        return this.jd ? b : !0
    };
    e.prototype.yp = function() {
        this.c.Ni++;
        var a = this.c.Ob().ab,
            b = this.c.Pj(this);
        if (!this.jd)
            for (b.ab = a + 1, a = this.kb.length; b.ab < a; b.ab++)
                if (!this.kb[b.ab].fb()) {
                    this.c.Ij();
                    return
                }
        this.Tj();
        this.c.Ij()
    };
    e.prototype.Ls = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.kb[b].type === a.type) return !1;
        return !0
    };
    Zb = e;
    A.prototype.Va = function() {
        var a, b, d;
        a = 0;
        for (b = this.U.length; a < b; a++) d = this.U[a], d.Va(), d.Yc && (this.Pg = !0)
    };
    A.prototype.Dt = ba(!0);
    A.prototype.rm = function() {
        var a, b;
        a = 0;
        for (b = this.U.length; a < b; a++) this.Fa[a] = this.U[a].get();
        return Sa(this.Ab.apply(this.c.Gd, this.Fa), this.zl)
    };
    A.prototype.Ct = function() {
        var a, b;
        a = 0;
        for (b = this.U.length; a < b; a++) this.Fa[a] = this.U[a].get();
        a = this.Ab.apply(this.bf ? this.bf : this.type, this.Fa);
        this.type.qd();
        return a
    };
    A.prototype.qm = function() {
        var a, b, d, c, l, e, k, f, g = this.type,
            h = g.fa(),
            x = this.Ec.jd && !this.trigger;
        b = 0;
        var v = g.vc,
            r = g.R,
            y = g.Td,
            q = this.Lc,
            A = -1 < q,
            E = this.Pg,
            B = this.U,
            Q = this.Fa,
            S = this.zl,
            N = this.Ab,
            w;
        if (E)
            for (b = 0, l = B.length; b < l; ++b) e = B[b], e.Yc || (Q[b] = e.get(0));
        else
            for (b = 0, l = B.length; b < l; ++b) Q[b] = B[b].get(0); if (h.ka) {
            h.j.length = 0;
            h.la.length = 0;
            w = g.j;
            a = 0;
            for (c = w.length; a < c; ++a) {
                f = w[a];
                if (E)
                    for (b = 0, l = B.length; b < l; ++b) e = B[b], e.Yc && (Q[b] = e.get(a));
                A ? (b = 0, r && (b = f.type.Xf[y]), b = N.apply(f.Y[q + b], Q)) : b = N.apply(f, Q);
                (k = Sa(b, S)) ? h.j.push(f) : x && h.la.push(f)
            }
            g.finish && g.finish(!0);
            h.ka = !1;
            g.qd();
            return h.sl()
        }
        d = 0;
        w = (k = x && !this.Ec.Ls(this)) ? h.la : h.j;
        var wa = !1;
        a = 0;
        for (c = w.length; a < c; ++a) {
            f = w[a];
            if (E)
                for (b = 0, l = B.length; b < l; ++b) e = B[b], e.Yc && (Q[b] = e.get(a));
            A ? (b = 0, r && (b = f.type.Xf[y]), b = N.apply(f.Y[q + b], Q)) : b = N.apply(f, Q);
            if (Sa(b, S))
                if (wa = !0, k) {
                    if (h.j.push(f), v)
                        for (b = 0, l = f.siblings.length; b < l; b++) e = f.siblings[b], e.type.fa().j.push(e)
                } else {
                    w[d] = f;
                    if (v)
                        for (b = 0, l = f.siblings.length; b < l; b++) e = f.siblings[b], e.type.fa().j[d] = e;
                    d++
                } else if (k) {
                w[d] = f;
                if (v)
                    for (b = 0, l = f.siblings.length; b < l; b++) e = f.siblings[b], e.type.fa().la[d] = e;
                d++
            } else if (x && (h.la.push(f), v))
                for (b = 0, l = f.siblings.length; b < l; b++) e = f.siblings[b], e.type.fa().la.push(e)
        }
        w.length = d;
        if (v)
            for (r = g.pc, a = 0, c = r.length; a < c; a++) f = r[a].fa(), k ? f.la.length = d : f.j.length = d;
        d = wa;
        if (k && !wa)
            for (a = 0, c = h.j.length; a < c; a++) {
                f = h.j[a];
                if (E)
                    for (b = 0, l = B.length; b < l; b++) e = B[b], e.Yc && (Q[b] = e.get(a));
                b = A ? N.apply(f.Y[q], Q) : N.apply(f, Q);
                if (Sa(b, S)) {
                    wa = !0;
                    break
                }
            }
        g.finish && g.finish(d || x);
        return x ? wa : h.sl()
    };
    Vb = A;
    g.prototype.Va = function() {
        var a, b, d;
        a = 0;
        for (b = this.U.length; a < b; a++) d = this.U[a], d.Va(), d.Yc && (this.Pg = !0)
    };
    g.prototype.rm = function() {
        var a, b;
        a = 0;
        for (b = this.U.length; a < b; a++) this.Fa[a] = this.U[a].get();
        return this.Ab.apply(this.c.Gd, this.Fa)
    };
    g.prototype.qm = function() {
        var a = this.type.fa().Gc(),
            b = this.type.R,
            d = this.type.Td,
            c = this.Lc,
            l = -1 < c,
            e = this.Pg,
            k = this.U,
            f = this.Fa,
            g = this.Ab,
            h, x, v, r, y, q;
        if (e)
            for (x = 0, r = k.length; x < r; ++x) y = k[x], y.Yc || (f[x] = y.get(0));
        else
            for (x = 0, r = k.length; x < r; ++x) f[x] = k[x].get(0);
        h = 0;
        for (v = a.length; h < v; ++h) {
            q = a[h];
            if (e)
                for (x = 0, r = k.length; x < r; ++x) y = k[x], y.Yc && (f[x] = y.get(h));
            l ? (x = 0, b && (x = q.type.Xf[d]), g.apply(q.Y[c + x], f)) : g.apply(q, f)
        }
        return !1
    };
    Wb = g;
    var v = [],
        y = -1;
    k.prototype.Va = function() {
        var a, b;
        if (11 === this.type) this.hf = this.c.fo(this.ji, this.Ec.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Cf.length; a < b; a++) this.Cf[a].Va();
        this.ud && this.ud.Va()
    };
    k.prototype.Ys = function(a) {
        this.Yc || !a || a.Na.bk || (this.Yc = !0)
    };
    k.prototype.Dp = function() {
        this.Yc = !0
    };
    k.prototype.pb = function() {
        y++;
        v.length === y && v.push(new ac);
        return v[y]
    };
    k.prototype.eb = function() {
        y--
    };
    k.prototype.ps = function(a) {
        this.Ne = a || 0;
        a = this.pb();
        this.ud.get(a);
        this.eb();
        return a.data
    };
    k.prototype.qs = function(a) {
        this.Ne = a || 0;
        a = this.pb();
        this.ud.get(a);
        this.eb();
        return ja(a.data) ? a.data : ""
    };
    k.prototype.xs = aa("object");
    k.prototype.ns = aa("Ln");
    k.prototype.vs = function(a) {
        this.Ne = a || 0;
        a = this.pb();
        this.ud.get(a);
        this.eb();
        return a.tb() ? this.c.bh(a.data) : this.c.ml(a.data)
    };
    k.prototype.ws = aa("Ea");
    k.prototype.us = aa("key");
    k.prototype.ts = aa("index");
    k.prototype.rs = function(a) {
        a = a || 0;
        var b = this.O.type,
            d = null,
            d = b.fa(),
            c = d.Gc();
        if (c.length) d = c[a % c.length].type;
        else if (d.la.length) d = d.la[a % d.la.length].type;
        else if (b.j.length) d = b.j[a % b.j.length].type;
        else return 0;
        return this.index + d.Oi[b.Td]
    };
    k.prototype.os = aa("hf");
    k.prototype.ms = aa("Yn");
    k.prototype.ys = function() {
        var a, b;
        a = 0;
        for (b = this.Cf.length; a < b; a++) this.ii[a] = this.Cf[a].get();
        return this.ii
    };
    Xb = k;
    r.prototype.Va = function() {
        this.Ga = b(this.Ga)
    };
    r.prototype.Af = function(a) {
        var b = this.c.eo();
        this.parent && !this.rh && b ? (this.xf >= b.length && (b.length = this.xf + 1), b[this.xf] = a) : this.data = a
    };
    r.prototype.fh = function() {
        var a = this.c.eo();
        return !this.parent || this.rh || !a || this.cj ? this.data : this.xf >= a.length || "undefined" === typeof a[this.xf] ? this.xl : a[this.xf]
    };
    r.prototype.fb = function() {
        !this.parent || this.rh || this.cj || this.Af(this.xl)
    };
    Rb = r;
    l.prototype.toString = function() {
        return "include:" + this.kh.toString()
    };
    l.prototype.Va = function() {
        this.kh = this.c.Zk[this.Fs];
        this.sheet.ro.add(this);
        this.Ga = b(this.Ga);
        for (var a = this.parent; a;) a.group && a.Bi.push(this), a = a.parent;
        this.Wp()
    };
    l.prototype.fb = function() {
        this.parent && this.c.Qh(this.c.I);
        this.kh.tl || this.kh.fb(!0);
        this.parent && this.c.yf(this.c.I)
    };
    l.prototype.Wp = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Zf) {
                this.Za = !1;
                return
            }
            a = a.parent
        }
        this.Za = !0
    };
    $b = l;
    x.prototype.reset = function(a) {
        this.Mb = a;
        this.nc = this.ab = 0;
        this.Mp.length = 0;
        this.Xk = this.sf = !1
    };
    x.prototype.Ns = function() {
        return this.Mb.Bm ? !0 : this.ab < this.Mb.kb.length - 1 ? !! this.Mb.Ga.length : !1
    };
    Qb = x
})();
(function() {
    function f(b, c) {
        this.O = b;
        this.c = b.c;
        this.type = c[0];
        this.get = [this.Hr, this.Dr, this.Pr, this.Sr, this.wr, this.Qr, this.Lr, this.Ar, this.Kr, this.Or, this.xr, this.Nr, this.Br, this.Mr, this.Ir, this.Jr, this.Er, this.Fr, this.yr, this.Rr, this.Un, this.Gr, this.Un, this.Cr][this.type];
        var a = null;
        this.jc = this.U = this.Fa = this.Ab = this.hk = this.zb = this.first = this.value = null;
        this.Lc = -1;
        this.Ud = null;
        this.Nm = -1;
        this.hf = this.ji = null;
        this.Th = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = c[1];
                break;
            case 3:
                this.first = new Yb(b, c[1]);
                break;
            case 18:
                this.first = new Yb(b, c[1]);
                this.zb = new Yb(b, c[2]);
                this.hk = new Yb(b, c[3]);
                break;
            case 19:
                this.Ab = c[1];
                this.Ab !== t.prototype.e.random && this.Ab !== t.prototype.e.rd || this.O.Dp();
                this.Fa = [];
                this.U = [];
                3 === c.length ? (a = c[2], this.Fa.length = a.length + 1) : this.Fa.length = 1;
                break;
            case 20:
                this.jc = this.c.I[c[1]];
                this.Lc = -1;
                this.Ab = c[2];
                this.Th = c[3];
                dc.kq && this.Ab === dc.kq.prototype.e.iu && this.O.Dp();
                this.Ud = c[4] ? new Yb(b, c[4]) : null;
                this.Fa = [];
                this.U = [];
                6 === c.length ? (a = c[5], this.Fa.length = a.length + 1) : this.Fa.length = 1;
                break;
            case 21:
                this.jc = this.c.I[c[1]];
                this.Th = c[2];
                this.Ud = c[3] ? new Yb(b, c[3]) : null;
                this.Nm = c[4];
                break;
            case 22:
                this.jc = this.c.I[c[1]];
                this.jc.Ui(c[2]);
                this.Lc = this.jc.hl(c[2]);
                this.Ab = c[3];
                this.Th = c[4];
                this.Ud = c[5] ? new Yb(b, c[5]) : null;
                this.Fa = [];
                this.U = [];
                7 === c.length ? (a = c[6], this.Fa.length = a.length + 1) : this.Fa.length = 1;
                break;
            case 23:
                this.ji = c[1], this.hf = null
        }
        this.O.Ys(this.jc);
        4 <= this.type && 17 >= this.type && (this.first = new Yb(b, c[1]), this.zb = new Yb(b, c[2]));
        if (a) {
            var e, f;
            e = 0;
            for (f = a.length; e < f; e++) this.U.push(new Yb(b, a[e]))
        }
    }

    function h(b, c) {
        this.type = b || bc.Kf;
        this.data = c || 0;
        this.pg = null;
        this.type == bc.Kf && (this.data = Math.floor(this.data))
    }
    f.prototype.Va = function() {
        23 === this.type && (this.hf = this.O.c.fo(this.ji, this.O.Ec.parent));
        this.first && this.first.Va();
        this.zb && this.zb.Va();
        this.hk && this.hk.Va();
        this.Ud && this.Ud.Va();
        if (this.U) {
            var b, c;
            b = 0;
            for (c = this.U.length; b < c; b++) this.U[b].Va()
        }
    };
    f.prototype.Rr = function(b) {
        this.Fa[0] = b;
        b = this.O.pb();
        var c, a;
        c = 0;
        for (a = this.U.length; c < a; c++) this.U[c].get(b), this.Fa[c + 1] = b.data;
        this.O.eb();
        this.Ab.apply(this.c.Gd, this.Fa)
    };
    f.prototype.Un = function(b) {
        var c = this.jc.fa(),
            a = c.Gc();
        if (!a.length)
            if (c.la.length) a = c.la;
            else {
                this.Th ? b.Ac("") : b.Ia(0);
                return
            }
        this.Fa[0] = b;
        b.pg = this.jc;
        b = this.O.pb();
        var e, c = 0;
        for (e = this.U.length; c < e; c++) this.U[c].get(b), this.Fa[c + 1] = b.data;
        c = this.O.Ne;
        this.Ud && (this.Ud.get(b), b.tb() && (c = b.data, a = this.jc.j));
        this.O.eb();
        c %= a.length;
        0 > c && (c += a.length);
        a = a[c]; - 1 < this.Lc ? (b = 0, this.jc.R && (b = a.type.Xf[this.jc.Td]), this.Ab.apply(a.Y[this.Lc + b], this.Fa)) : this.Ab.apply(a, this.Fa)
    };
    f.prototype.Gr = function(b) {
        var c = this.jc.fa(),
            a = c.Gc();
        if (!a.length)
            if (c.la.length) a = c.la;
            else {
                this.Th ? b.Ac("") : b.Ia(0);
                return
            }
        c = this.O.Ne;
        if (this.Ud) {
            var e = this.O.pb();
            this.Ud.get(e);
            if (e.tb()) {
                c = e.data;
                a = this.jc.j;
                c %= a.length;
                0 > c && (c += a.length);
                a = a[c].mb[this.Nm];
                ja(a) ? b.Ac(a) : b.K(a);
                this.O.eb();
                return
            }
            this.O.eb()
        }
        c %= a.length;
        0 > c && (c += a.length);
        a = a[c];
        c = 0;
        this.jc.R && (c = a.type.Oi[this.jc.Td]);
        a = a.mb[this.Nm + c];
        ja(a) ? b.Ac(a) : b.K(a)
    };
    f.prototype.Hr = function(b) {
        b.type = bc.Kf;
        b.data = this.value
    };
    f.prototype.Dr = function(b) {
        b.type = bc.Jf;
        b.data = this.value
    };
    f.prototype.Pr = function(b) {
        b.type = bc.si;
        b.data = this.value
    };
    f.prototype.Sr = function(b) {
        this.first.get(b);
        b.tb() && (b.data = -b.data)
    };
    f.prototype.wr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data += c.data, c.dg() && b.mg());
        this.O.eb()
    };
    f.prototype.Qr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data -= c.data, c.dg() && b.mg());
        this.O.eb()
    };
    f.prototype.Lr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data *= c.data, c.dg() && b.mg());
        this.O.eb()
    };
    f.prototype.Ar = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data /= c.data, b.mg());
        this.O.eb()
    };
    f.prototype.Kr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data %= c.data, c.dg() && b.mg());
        this.O.eb()
    };
    f.prototype.Or = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data = Math.pow(b.data, c.data), c.dg() && b.mg());
        this.O.eb()
    };
    f.prototype.xr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() ? c.ej() ? b.Ac(b.data.toString() + c.data) : b.data && c.data ? b.Ia(1) : b.Ia(0) : b.ej() && (b.data = c.ej() ? b.data + c.data : b.data + (Math.round(1E10 * c.data) / 1E10).toString());
        this.O.eb()
    };
    f.prototype.Nr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.tb() && c.tb() && (b.data || c.data ? b.Ia(1) : b.Ia(0));
        this.O.eb()
    };
    f.prototype.yr = function(b) {
        this.first.get(b);
        b.data ? this.zb.get(b) : this.hk.get(b)
    };
    f.prototype.Br = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.Ia(b.data === c.data ? 1 : 0);
        this.O.eb()
    };
    f.prototype.Mr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.Ia(b.data !== c.data ? 1 : 0);
        this.O.eb()
    };
    f.prototype.Ir = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.Ia(b.data < c.data ? 1 : 0);
        this.O.eb()
    };
    f.prototype.Jr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.Ia(b.data <= c.data ? 1 : 0);
        this.O.eb()
    };
    f.prototype.Er = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.Ia(b.data > c.data ? 1 : 0);
        this.O.eb()
    };
    f.prototype.Fr = function(b) {
        this.first.get(b);
        var c = this.O.pb();
        this.zb.get(c);
        b.Ia(b.data >= c.data ? 1 : 0);
        this.O.eb()
    };
    f.prototype.Cr = function(b) {
        var c = this.hf.fh();
        ia(c) ? b.K(c) : b.Ac(c)
    };
    Yb = f;
    h.prototype.dg = function() {
        return this.type === bc.Jf
    };
    h.prototype.tb = function() {
        return this.type === bc.Kf || this.type === bc.Jf
    };
    h.prototype.ej = function() {
        return this.type === bc.si
    };
    h.prototype.mg = function() {
        this.dg() || (this.ej() && (this.data = parseFloat(this.data)), this.type = bc.Jf)
    };
    h.prototype.Ia = function(b) {
        this.type = bc.Kf;
        this.data = Math.floor(b)
    };
    h.prototype.K = function(b) {
        this.type = bc.Jf;
        this.data = b
    };
    h.prototype.Ac = function(b) {
        this.type = bc.si;
        this.data = b
    };
    h.prototype.Lt = function(b) {
        ia(b) ? (this.type = bc.Jf, this.data = b) : ja(b) ? (this.type = bc.si, this.data = b.toString()) : (this.type = bc.Kf, this.data = 0)
    };
    ac = h;
    bc = {
        Kf: 0,
        Jf: 1,
        si: 2
    }
})();

function t(f) {
    this.c = f;
    this.kc = []
}
t.prototype.yb = function() {
    var f = {}, h, b, c, a, e, q, A, g;
    f.waits = [];
    var k = f.waits,
        r;
    h = 0;
    for (b = this.kc.length; h < b; h++) {
        q = this.kc[h];
        r = {
            t: q.time,
            st: q.Jp,
            s: q.Am,
            ev: q.Wf.da,
            sm: [],
            sols: {}
        };
        q.Wf.$c[q.nc] && (r.act = q.Wf.$c[q.nc].da);
        c = 0;
        for (a = q.Ga.length; c < a; c++) r.sm.push(q.Ga[c].da);
        for (e in q.cc)
            if (q.cc.hasOwnProperty(e)) {
                A = this.c.I[parseInt(e, 10)];
                g = {
                    sa: q.cc[e].Uj,
                    insts: []
                };
                c = 0;
                for (a = q.cc[e].Vd.length; c < a; c++) g.insts.push(q.cc[e].Vd[c].uid);
                r.sols[A.da.toString()] = g
            }
        k.push(r)
    }
    return f
};
t.prototype.Pb = function(f) {
    f = f.waits;
    var h, b, c, a, e, q, A, g, k, r, l;
    h = this.kc.length = 0;
    for (b = f.length; h < b; h++)
        if (q = f[h], g = this.c.Dn[q.ev.toString()]) {
            k = -1;
            c = 0;
            for (a = g.$c.length; c < a; c++)
                if (g.$c[c].da === q.act) {
                    k = c;
                    break
                }
            if (-1 !== k) {
                A = {
                    cc: {},
                    Ga: [],
                    Vk: !1
                };
                A.time = q.t;
                A.Jp = q.st || "";
                A.Am = !! q.s;
                A.Wf = g;
                A.nc = k;
                c = 0;
                for (a = q.sm.length; c < a; c++)(g = this.c.Wi(q.sm[c])) && A.Ga.push(g);
                for (e in q.sols)
                    if (q.sols.hasOwnProperty(e) && (g = this.c.Wi(parseInt(e, 10)))) {
                        k = q.sols[e];
                        r = {
                            Uj: k.sa,
                            Vd: []
                        };
                        c = 0;
                        for (a = k.insts.length; c < a; c++)(l = this.c.dh(k.insts[c])) && r.Vd.push(l);
                        A.cc[g.index.toString()] = r
                    }
                this.kc.push(A)
            }
        }
};
(function() {
    function f() {}

    function h() {}

    function b() {}
    var c = t.prototype;
    f.prototype.uk = ba(!0);
    f.prototype.rq = ba(!0);
    f.prototype.Kg = function(a, b, c) {
        return cc(a, b, c)
    };
    var a = [],
        e = -1;
    f.prototype.Vm = function(b) {
        var c = b.fa();
        e++;
        a.length === e && a.push([]);
        var f = a[e];
        Ba(f, c.Gc());
        var l = this.c.Ob(),
            h = l.Mb,
            d = l.Ns(),
            l = this.c.qt(),
            v, y, m, q, A, J, F = b.vc;
        if (d)
            for (d = 0, v = f.length; d < v && !l.ec; d++) {
                this.c.Oj(h.Ga);
                q = f[d];
                c = b.fa();
                c.ka = !1;
                c.j.length = 1;
                c.j[0] = q;
                if (F)
                    for (y = 0, m = q.siblings.length; y < m; y++) A = q.siblings[y], J = A.type.fa(), J.ka = !1, J.j.length = 1, J.j[0] = A;
                l.index = d;
                h.yp();
                this.c.yf(h.Ga)
            } else
                for (c.ka = !1, c.j.length = 1, d = 0, v = f.length; d < v && !l.ec; d++) {
                    q = f[d];
                    c.j[0] = q;
                    if (F)
                        for (y = 0, m = q.siblings.length; y < m; y++) A = q.siblings[y], J = A.type.fa(), J.ka = !1, J.j.length = 1, J.j[0] = A;
                    l.index = d;
                    h.yp()
                }
        f.length = 0;
        this.c.jt();
        e--;
        return !1
    };
    f.prototype.pi = function(b, c, f, l) {
        var h, d, v, y;
        if (b) {
            e++;
            a.length === e && a.push([]);
            var m = a[e],
                q = b.fa();
            Ba(m, q.Gc());
            q.ka && (q.la.length = 0);
            var A = this.c.co();
            v = h = 0;
            for (d = m.length; h < d; h++) y = m[h], m[v] = y, c = A.U[1].get(h), l = A.U[3].get(h), cc(c, f, l) ? v++ : q.la.push(y);
            m.length = v;
            q.ka = !1;
            Ba(q.j, m);
            m.length = 0;
            e--;
            b.qd();
            return !!q.j.length
        }
    };
    f.prototype.n = function(a, b, c) {
        return cc(a.fh(), b, c)
    };
    f.prototype.Tm = function(a, b, c) {
        return a >= b && a <= c
    };
    f.prototype.iq = function() {
        var a = this.c.Ob();
        return a.Xk ? !1 : !a.sf
    };
    f.prototype.Xm = ba(!0);
    f.prototype.oq = ba(!0);
    f.prototype.wk = ba(!0);
    f.prototype.sq = ba(!0);
    f.prototype.vk = ba(!0);
    c.d = new f;
    h.prototype.qk = function(a) {
        this.c.fg || this.c.cf || (this.c.cf = a)
    };
    h.prototype.Aa = function(a, b, c, l) {
        if (b && a && (b = this.c.Nn(a, b, c, l))) {
            this.c.ed++;
            var e;
            this.c.trigger(Object.getPrototypeOf(a.Na).d.Jd, b);
            if (b.vc)
                for (c = 0, l = b.siblings.length; c < l; c++) e = b.siblings[c], this.c.trigger(Object.getPrototypeOf(e.type.Na).d.Jd, e);
            this.c.ed--;
            a = a.fa();
            a.ka = !1;
            a.j.length = 1;
            a.j[0] = b;
            if (b.vc)
                for (c = 0, l = b.siblings.length; c < l; c++) e = b.siblings[c], a = e.type.fa(), a.ka = !1, a.j.length = 1, a.j[0] = e
        }
    };
    h.prototype.zk = function(a, b) {
        a && a.visible !== b && (a.visible = b, this.c.qa = !0)
    };
    h.prototype.k = function(a, b) {
        0 === a.ok ? ia(b) ? a.Af(b) : a.Af(parseFloat(b)) : 1 === a.ok && a.Af(b.toString())
    };
    h.prototype.fq = function(a, b) {
        0 === a.ok ? ia(b) ? a.Af(a.fh() + b) : a.Af(a.fh() + parseFloat(b)) : 1 === a.ok && a.Af(a.fh() + b.toString())
    };
    var q = [],
        A = [];
    h.prototype.B = function(a) {
        if (!(0 > a)) {
            var b, c, l, e = this.c.Ob(),
                d;
            d = q.length ? q.pop() : {
                cc: {},
                Ga: []
            };
            d.Vk = !1;
            d.time = this.c.wc.Oa + a;
            d.Jp = "";
            d.Am = !1;
            d.Wf = e.Mb;
            d.nc = e.nc + 1;
            a = 0;
            for (b = this.c.I.length; a < b; a++) l = this.c.I[a], c = l.fa(), c.ka && -1 === e.Mb.Ga.indexOf(l) || (d.Ga.push(l), l = void 0, l = A.length ? A.pop() : {
                Vd: []
            }, l.Uj = !1, l.Uj = c.ka, Ba(l.Vd, c.j), d.cc[a.toString()] = l);
            this.kc.push(d);
            return !0
        }
    };
    h.prototype.wq = function() {
        if (!this.c.fg && !this.c.cf && this.c.ra) {
            this.c.cf = this.c.ra;
            var a, b, c;
            a = 0;
            for (b = this.c.qe.length; a < b; a++) c = this.c.qe[a], c.Ht(c.$i)
        }
    };
    c.b = new h;
    b.prototype["int"] = function(a, b) {
        ja(b) ? (a.Ia(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.Ia(b)
    };
    b.prototype["float"] = function(a, b) {
        ja(b) ? (a.K(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.K(b)
    };
    b.prototype.random = function(a, b, c) {
        void 0 === c ? a.K(Math.random() * b) : a.K(Math.random() * (c - b) + b)
    };
    b.prototype.sqrt = function(a, b) {
        a.K(Math.sqrt(b))
    };
    b.prototype.abs = function(a, b) {
        a.K(Math.abs(b))
    };
    b.prototype.round = function(a, b) {
        a.Ia(Math.round(b))
    };
    b.prototype.floor = function(a, b) {
        a.Ia(Math.floor(b))
    };
    b.prototype.ceil = function(a, b) {
        a.Ia(Math.ceil(b))
    };
    b.prototype.sin = function(a, b) {
        a.K(Math.sin(p(b)))
    };
    b.prototype.cos = function(a, b) {
        a.K(Math.cos(p(b)))
    };
    b.prototype.tan = function(a, b) {
        a.K(Math.tan(p(b)))
    };
    b.prototype.asin = function(a, b) {
        a.K(Ea(Math.asin(b)))
    };
    b.prototype.acos = function(a, b) {
        a.K(Ea(Math.acos(b)))
    };
    b.prototype.exp = function(a, b) {
        a.K(Math.exp(b))
    };
    b.prototype.max = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var c, l, e;
        c = 2;
        for (l = arguments.length; c < l; c++) e = arguments[c], "number" === typeof e && b < e && (b = e);
        a.K(b)
    };
    b.prototype.min = function(a) {
        var b = arguments[1];
        "number" !== typeof b && (b = 0);
        var c, l, e;
        c = 2;
        for (l = arguments.length; c < l; c++) e = arguments[c], "number" === typeof e && b > e && (b = e);
        a.K(b)
    };
    b.prototype.bb = function(a) {
        a.K(this.c.bb)
    };
    b.prototype.Ef = function(a) {
        a.K(this.c.Ef)
    };
    b.prototype.time = function(a) {
        a.K(this.c.wc.Oa)
    };
    b.prototype.hi = function(a) {
        a.Ia(this.c.hi)
    };
    b.prototype.tj = function(a) {
        a.Ia(this.c.tj)
    };
    b.prototype.dl = function(a) {
        a.Ia(this.c.dl)
    };
    b.prototype.q = function(a, b, c, l, e) {
        a.K(Ea(Ja(b, c, l, e)))
    };
    b.prototype.left = function(a, b, c) {
        a.Ac(ja(b) ? b.substr(0, c) : "")
    };
    b.prototype.right = function(a, b, c) {
        a.Ac(ja(b) ? b.substr(b.length - c) : "")
    };
    b.prototype.replace = function(a, b, c, l) {
        ja(b) && ja(c) && ja(l) ? a.Ac(b.replace(RegExp($a(c), "gi"), l)) : a.Ac(ja(b) ? b : "")
    };
    b.prototype.rd = function(a) {
        var b = sa(Math.random() * (arguments.length - 1));
        a.Lt(arguments[b + 1])
    };
    b.prototype.Ok = function(a) {
        a.K(this.c.Ok / 1E3)
    };
    b.prototype.uf = function(a) {
        a.K(this.c.uf)
    };
    c.e = new b;
    c.zt = function() {
        var a, b, c, l, e, d, f = this.c.Ob();
        a = 0;
        for (c = this.kc.length; a < c; a++) {
            l = this.kc[a];
            if (-1 === l.time) {
                if (!l.Am) continue
            } else if (l.time > this.c.wc.Oa) continue;
            f.Mb = l.Wf;
            f.nc = l.nc;
            f.ab = 0;
            for (b in l.cc) l.cc.hasOwnProperty(b) && (e = this.c.I[parseInt(b, 10)].fa(), d = l.cc[b], e.ka = d.Uj, Ba(e.j, d.Vd), e = d, e.Vd.length = 0, A.push(e));
            l.Wf.xt();
            this.c.Nk(l.Ga);
            l.Vk = !0
        }
        b = a = 0;
        for (c = this.kc.length; a < c; a++) l = this.kc[a], this.kc[b] = l, l.Vk ? (Xa(l.cc), l.Ga.length = 0, q.push(l)) : b++;
        this.kc.length = b
    }
})();
(function() {
    mb = function(f) {
        var b = f[0].prototype,
            c = f[1],
            a = f[3],
            e = f[4],
            q = f[5],
            A = f[6],
            g = f[7];
        f = f[8];
        b.d || (b.d = {});
        b.b || (b.b = {});
        b.e || (b.e = {});
        var k = b.d,
            r = b.b,
            b = b.e;
        a && (k.ya = function(a, b) {
            return cc(this.x, a, b)
        }, k.ju = function(a, b) {
            return cc(this.y, a, b)
        }, k.qu = function() {
            var a = this.A;
            this.fc();
            var b = this.hc;
            return !(b.right < a.Db || b.bottom < a.Eb || b.left > a.Cc || b.top > a.Bc)
        }, k.ru = function() {
            this.fc();
            var a = this.hc,
                b = this.c.ra;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, k.Tb = function(a, b, d) {
            var c = this.fa(),
                e = c.Gc();
            if (!e.length) return !1;
            var f = e[0],
                k = f,
                g = Ra(f.x, f.y, b, d),
                h, r, q;
            h = 1;
            for (r = e.length; h < r; h++)
                if (f = e[h], q = Ra(f.x, f.y, b, d), 0 === a && q < g || 1 === a && q > g) g = q, k = f;
            c.Nh(k);
            return !0
        }, r.Og = function(a) {
            this.x !== a && (this.x = a, this.Wa())
        }, r.Ck = function(a) {
            this.y !== a && (this.y = a, this.Wa())
        }, r.Ak = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.Wa()
        }, r.Qu = function(a, b) {
            var d = a.gs(this);
            if (d) {
                var c;
                d.ll ? (c = d.ll(b, !0), d = d.ll(b, !1)) : (c = d.x, d = d.y);
                if (this.x !== c || this.y !== d) this.x = c, this.y = d, this.Wa()
            }
        }, r.vu = function(a) {
            0 !== a && (this.x += Math.cos(this.q) * a, this.y += Math.sin(this.q) * a, this.Wa())
        }, r.uu = function(a, b) {
            0 !== b && (this.x += Math.cos(p(a)) * b, this.y += Math.sin(p(a)) * b, this.Wa())
        }, b.u = function(a) {
            a.K(this.x)
        }, b.jb = function(a) {
            a.K(this.y)
        }, b.bb = function(a) {
            a.K(this.c.Yf(this))
        });
        e && (k.Ve = function(a, b) {
            return cc(this.width, a, b)
        }, k.hq = function(a, b) {
            return cc(this.height, a, b)
        }, r.Ye = function(a) {
            this.width !== a && (this.width = a, this.Wa())
        }, r.Ou = function(a) {
            this.height !== a && (this.height = a, this.Wa())
        }, r.gn = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.Wa()
        }, b.M = function(a) {
            a.K(this.width)
        }, b.lu = function(a) {
            a.K(this.height)
        }, b.fu = function(a) {
            this.fc();
            a.K(this.hc.left)
        }, b.hu = function(a) {
            this.fc();
            a.K(this.hc.top)
        }, b.gu = function(a) {
            this.fc();
            a.K(this.hc.right)
        }, b.eu = function(a) {
            this.fc();
            a.K(this.hc.bottom)
        });
        q && (k.du = function(a, b) {
            return Ka(this.q, p(b)) <= p(a)
        }, k.ou = function(a) {
            return Na(this.q, p(a))
        }, k.Wm = function(a, b) {
            var d = Ia(a),
                c = Ia(b),
                e = Ga(this.q);
            return Na(c, d) ? Na(e, d) && !Na(e, c) : !(!Na(e, d) && Na(e, c))
        }, r.xq = function(a) {
            a = p(Fa(a));
            isNaN(a) || this.q === a || (this.q = a, this.Wa())
        }, r.Eu = function(a) {
            0 === a || isNaN(a) || (this.q += p(a), this.q = Ga(this.q), this.Wa())
        }, r.Fu = function(a) {
            0 === a || isNaN(a) || (this.q -= p(a), this.q = Ga(this.q), this.Wa())
        }, r.Gu = function(a, b) {
            var d = Ma(this.q, p(b), p(a));
            isNaN(d) || this.q === d || (this.q = d, this.Wa())
        }, r.Hu = function(a, b, d) {
            a = Ma(this.q, Math.atan2(d - this.y, b - this.x), p(a));
            isNaN(a) || this.q === a || (this.q = a, this.Wa())
        }, r.Ru = function(a, b) {
            var d = Math.atan2(b - this.y, a - this.x);
            isNaN(d) || this.q === d || (this.q = d, this.Wa())
        }, b.gq = function(a) {
            a.K(Ha(this.q))
        });
        c || (k.li = function(a, b, d) {
            return cc(this.mb[a], b, d)
        }, k.nu = function(a) {
            return this.mb[a]
        }, k.Au = function(a, b) {
            var d = this.fa(),
                c = d.Gc();
            if (!c.length) return !1;
            var e = c[0],
                f = e,
                k = e.mb[b],
                g, h, r;
            g = 1;
            for (h = c.length; g < h; g++)
                if (e = c[g], r = e.mb[b], 0 === a && r < k || 1 === a && r > k) k = r, f = e;
            d.Nh(f);
            return !0
        }, k.zu = function(a) {
            var b, d, c, e, f;
            if (this.c.co().zl) {
                f = this.fa();
                if (f.ka)
                    for (f.ka = !1, f.j.length = 0, f.la.length = 0, c = this.j, b = 0, d = c.length; b < d; b++) e = c[b], e.uid === a ? f.la.push(e) : f.j.push(e);
                else {
                    c = b = 0;
                    for (d = f.j.length; b < d; b++) e = f.j[b], f.j[c] = e, e.uid === a ? f.la.push(e) : c++;
                    f.j.length = c
                }
                this.qd();
                return !!f.j.length
            }
            e = this.c.dh(a);
            if (!e) return !1;
            f = this.fa();
            if (!f.ka && -1 === f.j.indexOf(e)) return !1;
            if (this.R)
                for (a = e.type.Ka, b = 0, d = a.length; b < d; b++) {
                    if (a[b] === this) return f.Nh(e), this.qd(), !0
                } else if (e.type === this) return f.Nh(e), this.qd(), !0;
            return !1
        }, k.Jd = ba(!0), k.pq = ba(!0), r.ri = function(a, b) {
            var d = this.mb;
            ia(d[a]) ? d[a] = ia(b) ? b : parseFloat(b) : ja(d[a]) && (d[a] = ja(b) ? b : b.toString())
        }, r.dq = function(a, b) {
            var d = this.mb;
            ia(d[a]) ? d[a] = ia(b) ? d[a] + b : d[a] + parseFloat(b) : ja(d[a]) && (d[a] = ja(b) ? d[a] + b : d[a] + b.toString())
        }, r.Uu = function(a, b) {
            var d = this.mb;
            ia(d[a]) && (d[a] = ia(b) ? d[a] - b : d[a] - parseFloat(b))
        }, r.Iu = function(a, b) {
            this.mb[a] = b ? 1 : 0
        }, r.Wu = function(a) {
            this.mb[a] = 1 - this.mb[a]
        }, r.Ha = function() {
            this.c.We(this)
        }, r.mq || (r.mq = function(a) {
            var b, d;
            try {
                b = JSON.parse(a)
            } catch (c) {
                return
            }
            this.c.nj(this, b, !0);
            this.Ld && this.Ld();
            if (this.Y)
                for (a = 0, b = this.Y.length; a < b; ++a) d = this.Y[a], d.Ld && d.Ld()
        }), b.ku = function(a) {
            var b = a.pg.j.length,
                d, c, e;
            d = 0;
            for (c = this.c.qc.length; d < c; d++) e = this.c.qc[d], a.pg.R ? 0 <= e.type.Ka.indexOf(a.pg) && b++ : e.type === a.pg && b++;
            a.Ia(b)
        }, b.Cu = function(a) {
            a.Ia(a.pg.fa().Gc().length)
        }, b.Xu = function(a) {
            a.Ia(this.uid)
        }, b.mu = function(a) {
            a.Ia(this.gh())
        }, b.Sm || (b.Sm = function(a) {
            a.Ac(JSON.stringify(this.c.tm(this, !0)))
        }));
        A && (k.sk = aa("visible"), r.X = function(a) {
            !a !== !this.visible && (this.visible = a, this.c.qa = !0)
        }, k.Zc = function(a, b) {
            return cc(ib(100 * this.opacity), a, b)
        }, r.Jc = function(a) {
            a /= 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.c.qa = !0)
        }, b.Opacity = function(a) {
            a.K(ib(100 * this.opacity))
        });
        g && (k.pu = function(a) {
            return a ? this.A === a : !1
        }, k.Bu = function(a) {
            var b = this.fa(),
                d = b.Gc();
            if (!d.length) return !1;
            var c = d[0],
                e = c,
                f, k;
            f = 1;
            for (k = d.length; f < k; f++)
                if (c = d[f], 0 === a) {
                    if (c.A.index > e.A.index || c.A.index === e.A.index && c.Hc() > e.Hc()) e = c
                } else if (c.A.index < e.A.index || c.A.index === e.A.index && c.Hc() < e.Hc()) e = c;
            b.Nh(e);
            return !0
        }, r.wu = function() {
            var a = this.Hc();
            a !== this.A.j.length - 1 && (Aa(this.A.j, a), this.A.j.push(this), this.c.qa = !0, this.A.Dc = !0)
        }, r.mi = function() {
            var a = this.Hc();
            0 !== a && (Aa(this.A.j, a), this.A.j.unshift(this), this.c.qa = !0, this.A.Dc = !0)
        }, r.me = function(a) {
            a && a != this.A && (Aa(this.A.j, this.Hc()), this.A.Dc = !0, this.A = a, this.If = a.j.length, a.j.push(this), this.c.qa = !0)
        }, r.Gq = function(a, b) {
            var d = 0 === a;
            if (b) {
                var c = b.ho(this);
                if (c && c.uid !== this.uid) {
                    this.A.index !== c.A.index && (Aa(this.A.j, this.Hc()), this.A.Dc = !0, this.A = c.A, this.If = c.A.j.length, c.A.j.push(this));
                    var e = this.Hc(),
                        c = c.Hc();
                    Aa(this.A.j, e);
                    e < c && c--;
                    d && c++;
                    c === this.A.j.length ? this.A.j.push(this) : this.A.j.splice(c, 0, this);
                    this.A.Dc = !0;
                    this.c.qa = !0
                }
            }
        }, b.tu = function(a) {
            a.Ia(this.A.Xo)
        }, b.su = function(a) {
            a.Ac(this.A.name)
        }, b.Yu = function(a) {
            a.Ia(this.Hc())
        });
        f && (r.Lu = function(a, b) {
            if (this.c.J) {
                var c = this.type.kl(b);
                if (!(0 > c)) {
                    var e = 1 === a;
                    this.pe[c] !== e && (this.pe[c] = e, this.ke(), this.c.qa = !0)
                }
            }
        }, r.Mu = function(a, b, c) {
            if (this.c.J) {
                var e = this.type.kl(a);
                0 > e || (a = this.type.W[e], e = this.Qa[e], b = Math.floor(b), 0 > b || b >= e.length || (1 === this.c.J.ls(a.Cb, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Za && (this.c.qa = !0))))
            }
        })
    };
    Jb = function() {
        this.Mk = this.Hk = !0;
        this.type.wn = !0;
        this.c.qa = !0;
        var f, b, c = this.Ik;
        f = 0;
        for (b = c.length; f < b; ++f) c[f](this)
    };
    Kb = function(f) {
        f && this.Ik.push(f)
    };
    Mb = function() {
        if (this.Hk) {
            var f = this.hc,
                b = this.Rf;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.Wb * this.width, -this.Xb * this.height);
            this.q ? (f.offset(-this.x, -this.y), b.Ep(f, this.q), b.offset(this.x, this.y), b.En(f)) : b.Zj(f);
            f.normalize();
            this.Hk = !1
        }
    };
    var f = new va(0, 0, 0, 0);
    Nb = function() {
        if (this.Mk && this.Ug) {
            this.fc();
            var h = this.type.Kn,
                b = this.Ai,
                c = this.hc;
            f.set(h.kn(c.left), h.ln(c.top), h.kn(c.right), h.ln(c.bottom));
            b.ur(f) || (b.right < b.left ? h.update(this, null, f) : h.update(this, b, f), b.copy(f), this.Mk = !1)
        }
    };
    Lb = function(f, b) {
        return this.hc.cd(f, b) && this.Rf.cd(f, b) ? this.sd && !this.sd.Ss() ? (this.sd.Vq(this.width, this.height, this.q), this.sd.cd(f - this.x, b - this.y)) : !0 : !1
    };
    Cb = function() {
        this.type.nk();
        return this.mf
    };
    Ob = function() {
        this.A.Yt();
        return this.If
    };
    Pb = function() {
        this.ua.length = 0;
        var f, b;
        f = 0;
        for (b = this.pe.length; f < b; f++) this.pe[f] && this.ua.push(this.type.W[f]);
        this.Zp = !! this.ua.length
    };
    Db = function() {
        return "Inst" + this.up
    };
    qb = function(f) {
        if (f && f.vc && f.type != this) {
            var b, c, a;
            b = 0;
            for (c = f.siblings.length; b < c; b++)
                if (a = f.siblings[b], a.type == this) return a
        }
        f = this.fa().Gc();
        return f.length ? f[0] : null
    };
    rb = function(f) {
        var b = this.fa().Gc();
        return b.length ? b[f.gh() % b.length] : null
    };
    ob = function() {
        if (this.Dg && !this.R) {
            var f, b;
            f = 0;
            for (b = this.j.length; f < b; f++) this.j[f].mf = f;
            var c = f,
                a = this.c.qc;
            f = 0;
            for (b = a.length; f < b; ++f) a[f].type === this && (a[f].mf = c++);
            this.Dg = !1
        }
    };
    Ab = function(f) {
        if (f < this.j.length) return this.j[f];
        f -= this.j.length;
        var b = this.c.qc,
            c, a;
        c = 0;
        for (a = b.length; c < a; ++c)
            if (b[c].type === this) {
                if (0 === f) return b[c];
                --f
            }
        return null
    };
    sb = function() {
        return this.Oe[this.Qd]
    };
    tb = function() {
        this.Qd++;
        this.Qd === this.Oe.length ? this.Oe.push(new nb(this)) : this.Oe[this.Qd].ka = !0
    };
    ub = function() {
        this.Qd++;
        this.Qd === this.Oe.length && this.Oe.push(new nb(this));
        var f = this.Oe[this.Qd],
            b = this.Oe[this.Qd - 1];
        b.ka ? f.ka = !0 : (f.ka = !1, Ba(f.j, b.j), Ba(f.la, b.la))
    };
    vb = function() {
        this.Qd--
    };
    wb = function(f) {
        var b, c, a, e, q, A = 0;
        if (!this.R)
            for (b = 0, c = this.Ka.length; b < c; b++)
                for (q = this.Ka[b], a = 0, e = q.$a.length; a < e; a++) {
                    if (f === q.$a[a].name) return this.Ra.Fo = A, q.$a[a];
                    A++
                }
        b = 0;
        for (c = this.$a.length; b < c; b++) {
            if (f === this.$a[b].name) return this.Ra.Fo = A, this.$a[b];
            A++
        }
        return null
    };
    xb = function(f) {
        return this.Ui(f) ? this.Ra.Fo : -1
    };
    yb = function(f) {
        var b, c;
        b = 0;
        for (c = this.W.length; b < c; b++)
            if (this.W[b].name === f) return b;
        return -1
    };
    zb = function() {
        if (this.vc && !this.R) {
            var f, b, c, a, e, q, A;
            this.nk();
            q = this.fa();
            var g = q.ka,
                k = (f = this.c.Ob()) && f.Mb && f.Mb.jd;
            f = 0;
            for (b = this.pc.length; f < b; f++)
                if (e = this.pc[f], e !== this && (e.nk(), A = e.fa(), A.ka = g, !g)) {
                    A.j.length = q.j.length;
                    c = 0;
                    for (a = q.j.length; c < a; c++) A.j[c] = e.io(q.j[c].mf);
                    if (k)
                        for (A.la.length = q.la.length, c = 0, a = q.la.length; c < a; c++) A.la[c] = e.io(q.la[c].mf)
                }
        }
    };
    Bb = function() {
        return "Type" + this.da
    };
    cc = function(f, b, c) {
        if ("undefined" === typeof f || "undefined" === typeof c) return !1;
        switch (b) {
            case 0:
                return f === c;
            case 1:
                return f !== c;
            case 2:
                return f < c;
            case 3:
                return f <= c;
            case 4:
                return f > c;
            case 5:
                return f >= c;
            default:
                return !1
        }
    }
})();
var lc = {};

function C(f) {
    this.c = f
}(function() {
    function f(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return 20 * (Math.log(a) / Math.log(10))
    }

    function h(a) {
        a = a.toLowerCase();
        return ca.hasOwnProperty(a) && ca[a].length ? ca[a][0].Fc() : w.destination
    }

    function b() {
        return w.createGain ? w.createGain() : w.createGainNode()
    }

    function c(a) {
        return w.createDelay ? w.createDelay(a) : w.createDelayNode(a)
    }

    function a(a) {
        a.start ? a.start(0) : a.noteOn(0)
    }

    function e(a, b, c) {
        a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
    }

    function q(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function A(a, c, d, e, f, l) {
        this.type = "filter";
        this.kd = [a, c, d, e, f, l];
        this.ha = b();
        this.V = b();
        this.V.gain.value = l;
        this.S = b();
        this.S.gain.value = 1 - l;
        this.cb = w.createBiquadFilter();
        this.cb.type = "number" === typeof this.cb.type ? a : Rc[a];
        this.cb.frequency.value = c;
        this.cb.detune && (this.cb.detune.value = d);
        this.cb.Q.value = e;
        this.cb.gain.value = f;
        this.ha.connect(this.cb);
        this.ha.connect(this.S);
        this.cb.connect(this.V)
    }

    function g(a, d, e) {
        this.type = "delay";
        this.kd = [a, d, e];
        this.ha = b();
        this.V = b();
        this.V.gain.value = e;
        this.S = b();
        this.S.gain.value = 1 - e;
        this.Eh = b();
        this.Oc = c(a);
        this.Oc.delayTime.value = a;
        this.Ii = b();
        this.Ii.gain.value = d;
        this.ha.connect(this.Eh);
        this.ha.connect(this.S);
        this.Eh.connect(this.V);
        this.Eh.connect(this.Oc);
        this.Oc.connect(this.Ii);
        this.Ii.connect(this.Eh)
    }

    function k(a, c, d, e) {
        this.type = "convolve";
        this.kd = [c, d, e];
        this.ha = b();
        this.V = b();
        this.V.gain.value = d;
        this.S = b();
        this.S.gain.value = 1 - d;
        this.df = w.createConvolver();
        a && (this.df.normalize = c, this.df.buffer = a);
        this.ha.connect(this.df);
        this.ha.connect(this.S);
        this.df.connect(this.V)
    }

    function r(d, e, f, l, k) {
        this.type = "flanger";
        this.kd = [d, e, f, l, k];
        this.ha = b();
        this.S = b();
        this.S.gain.value = 1 - k / 2;
        this.V = b();
        this.V.gain.value = k / 2;
        this.Pi = b();
        this.Pi.gain.value = l;
        this.Oc = c(d + e);
        this.Oc.delayTime.value = d;
        this.xb = w.createOscillator();
        this.xb.frequency.value = f;
        this.yc = b();
        this.yc.gain.value = e;
        this.ha.connect(this.Oc);
        this.ha.connect(this.S);
        this.Oc.connect(this.V);
        this.Oc.connect(this.Pi);
        this.Pi.connect(this.Oc);
        this.xb.connect(this.yc);
        this.yc.connect(this.Oc.delayTime);
        a(this.xb)
    }

    function l(c, d, e, f, l, k) {
        this.type = "phaser";
        this.kd = [c, d, e, f, l, k];
        this.ha = b();
        this.S = b();
        this.S.gain.value = 1 - k / 2;
        this.V = b();
        this.V.gain.value = k / 2;
        this.cb = w.createBiquadFilter();
        this.cb.type = "number" === typeof this.cb.type ? 7 : "allpass";
        this.cb.frequency.value = c;
        this.cb.detune && (this.cb.detune.value = d);
        this.cb.Q.value = e;
        this.xb = w.createOscillator();
        this.xb.frequency.value = l;
        this.yc = b();
        this.yc.gain.value = f;
        this.ha.connect(this.cb);
        this.ha.connect(this.S);
        this.cb.connect(this.V);
        this.xb.connect(this.yc);
        this.yc.connect(this.cb.frequency);
        a(this.xb)
    }

    function x(a) {
        this.type = "gain";
        this.kd = [a];
        this.na = b();
        this.na.gain.value = a
    }

    function d(c, d) {
        this.type = "tremolo";
        this.kd = [c, d];
        this.na = b();
        this.na.gain.value = 1 - d / 2;
        this.xb = w.createOscillator();
        this.xb.frequency.value = c;
        this.yc = b();
        this.yc.gain.value = d / 2;
        this.xb.connect(this.yc);
        this.yc.connect(this.na.gain);
        a(this.xb)
    }

    function v(c, d) {
        this.type = "ringmod";
        this.kd = [c, d];
        this.ha = b();
        this.V = b();
        this.V.gain.value = d;
        this.S = b();
        this.S.gain.value = 1 - d;
        this.Uh = b();
        this.Uh.gain.value = 0;
        this.xb = w.createOscillator();
        this.xb.frequency.value = c;
        this.xb.connect(this.Uh.gain);
        a(this.xb);
        this.ha.connect(this.Uh);
        this.ha.connect(this.S);
        this.Uh.connect(this.V)
    }

    function y(a, c, d, e, f) {
        this.type = "distortion";
        this.kd = [a, c, d, e, f];
        this.ha = b();
        this.Kj = b();
        this.Jj = b();
        this.Gt(d, Math.pow(10, e / 20));
        this.V = b();
        this.V.gain.value = f;
        this.S = b();
        this.S.gain.value = 1 - f;
        this.pk = w.createWaveShaper();
        this.Gi = new Float32Array(65536);
        this.Yr(a, c);
        this.pk.Gi = this.Gi;
        this.ha.connect(this.Kj);
        this.ha.connect(this.S);
        this.Kj.connect(this.pk);
        this.pk.connect(this.Jj);
        this.Jj.connect(this.V)
    }

    function m(a, b, c, d, e) {
        this.type = "compressor";
        this.kd = [a, b, c, d, e];
        this.na = w.createDynamicsCompressor();
        try {
            this.na.threshold.value = a, this.na.knee.value = b, this.na.ratio.value = c, this.na.attack.value = d, this.na.release.value = e
        } catch (f) {}
    }

    function D(a, b) {
        this.type = "analyser";
        this.kd = [a, b];
        this.na = w.createAnalyser();
        this.na.fftSize = a;
        this.na.smoothingTimeConstant = b;
        this.Wr = new Float32Array(this.na.frequencyBinCount);
        this.Hp = new Uint8Array(a);
        this.Mh = 0
    }

    function L() {
        this.T = null;
        this.oj = 0;
        this.Pe = [];
        this.Wl = this.hj = this.gj = 0
    }

    function J(a, c) {
        this.src = a;
        this.wa = N;
        this.gd = c;
        this.tn = !1;
        var d = this;
        this.Ul = this.fm = null;
        this.wg = [];
        this.Vj = 0;
        this.bl = this.Kp = this.Dj = !1;
        N === B && c && (this.wa = E, this.fm = b());
        this.Pf = this.Ca = null;
        var e;
        switch (this.wa) {
            case E:
                this.Ca = new Audio;
                N !== B || !w.createMediaElementSource || H.xo || /wiiu/i.test(navigator.userAgent) || (this.Kp = !0, this.Ca.addEventListener("canplay", function() {
                    d.Ul || (d.Ul = w.createMediaElementSource(d.Ca), d.Ul.connect(d.fm))
                }));
                this.Ca.autoplay = !1;
                this.Ca.jv = "auto";
                this.Ca.src = a;
                break;
            case B:
                e = new XMLHttpRequest;
                e.open("GET", a, !0);
                e.responseType = "arraybuffer";
                e.onload = function() {
                    d.Pf = e.response;
                    d.cr()
                };
                e.onerror = function() {
                    d.bl = !0
                };
                e.send();
                break;
            case Q:
                this.Ca = !0;
                break;
            case S:
                this.Ca = !0
        }
    }

    function F(a, c) {
        var d = this;
        this.Qe = c;
        this.ec = this.Ce = !0;
        this.src = a.src;
        this.buffer = a;
        this.wa = N;
        this.gd = a.gd;
        this.playbackRate = 1;
        this.hm = !0;
        this.Yd = this.he = !1;
        this.md = 0;
        this.qh = this.eg = this.ae = !1;
        this.Gh = this.volume = 1;
        this.startTime = H.wc.Oa;
        this.Ua = this.rb = null;
        this.yd = !1;
        this.Ta = null;
        this.lp = this.kp = this.jp = this.ip = this.np = this.mp = 0;
        this.C = null;
        var e = !1;
        this.wa !== B || this.buffer.wa !== E || this.buffer.Kp || (this.wa = E);
        switch (this.wa) {
            case E:
                this.gd ? (this.C = a.Ca, e = !a.tn, a.tn = !0) : (this.C = new Audio, this.C.autoplay = !1, this.C.src = a.Ca.src, e = !0);
                e && this.C.addEventListener("ended", function() {
                    W = d.Qe;
                    d.ec = !0;
                    H.trigger(C.prototype.d.Mf, M)
                });
                break;
            case B:
                this.rb = b();
                this.rb.connect(h(c));
                this.buffer.wa === B ? a.Ca && (this.C = w.createBufferSource(), this.C.buffer = a.Ca, this.C.connect(this.rb)) : (this.C = this.buffer.Ca, this.buffer.fm.connect(this.rb));
                break;
            case Q:
                this.C = new window.Media(O + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (d.hm = !0, d.ec = !0, W = d.Qe, H.trigger(C.prototype.d.Mf, M))
                });
                break;
            case S:
                this.C = !0
        }
    }

    function K(a, b) {
        var c = a.Xd() ? 1 : 0,
            d = b.Xd() ? 1 : 0;
        return c === d ? 0 : c < d ? 1 : -1
    }

    function I(a, b) {
        ma.length = 0;
        if (a.length) {
            var c, d, e;
            c = 0;
            for (d = V.length; c < d; c++) e = V[c], jb(a, e.Qe) && ma.push(e);
            b && ma.sort(K)
        } else Ua && !Ua.ih() && (ma.length = 1, ma[0] = Ua)
    }

    function U(a, b) {
        ca.hasOwnProperty(a) ? ca[a].push(b) : ca[a] = [b];
        var c, d, e, f, l = w.destination;
        if (ca.hasOwnProperty(a) && (e = ca[a], e.length))
            for (l = e[0].Fc(), c = 0, d = e.length; c < d; c++) f = e[c], c + 1 === d ? f.Mc(w.destination) : f.Mc(e[c + 1].Fc());
        I(a);
        c = 0;
        for (d = ma.length; c < d; c++) ma[c].tt(l);
        Pa && Eb === a && (Pa.disconnect(), Pa.connect(l))
    }

    function Y() {}

    function T() {}

    function s() {}
    var z = C.prototype;
    z.Ja = function(a) {
        this.Na = a;
        this.c = a.c
    };
    z.Ja.prototype.ca = n();
    var H = null,
        M = null,
        W = "",
        O = "",
        E = 0,
        B = 1,
        Q = 2,
        S = 3,
        N = E,
        w = null,
        wa = [],
        V = [],
        Ua = null,
        Qa = !1,
        pb = 0,
        na = !1,
        La = 1,
        Va = 0,
        Wa = 0,
        Fb = 1,
        Gb = 1,
        Cc = 10,
        Dc = 1E4,
        Ec = 1,
        Pa = null,
        Eb = "",
        bb = !1,
        cb = [],
        ca = {}, Rc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    A.prototype.Mc = function(a) {
        this.V.disconnect();
        this.V.connect(a);
        this.S.disconnect();
        this.S.connect(a)
    };
    A.prototype.remove = function() {
        this.ha.disconnect();
        this.cb.disconnect();
        this.V.disconnect();
        this.S.disconnect()
    };
    A.prototype.Fc = aa("ha");
    g.prototype.Mc = function(a) {
        this.V.disconnect();
        this.V.connect(a);
        this.S.disconnect();
        this.S.connect(a)
    };
    g.prototype.remove = function() {
        this.ha.disconnect();
        this.Eh.disconnect();
        this.Oc.disconnect();
        this.Ii.disconnect();
        this.V.disconnect();
        this.S.disconnect()
    };
    g.prototype.Fc = aa("ha");
    k.prototype.Mc = function(a) {
        this.V.disconnect();
        this.V.connect(a);
        this.S.disconnect();
        this.S.connect(a)
    };
    k.prototype.remove = function() {
        this.ha.disconnect();
        this.df.disconnect();
        this.V.disconnect();
        this.S.disconnect()
    };
    k.prototype.Fc = aa("ha");
    r.prototype.Mc = function(a) {
        this.S.disconnect();
        this.S.connect(a);
        this.V.disconnect();
        this.V.connect(a)
    };
    r.prototype.remove = function() {
        this.ha.disconnect();
        this.Oc.disconnect();
        this.xb.disconnect();
        this.yc.disconnect();
        this.S.disconnect();
        this.V.disconnect();
        this.Pi.disconnect()
    };
    r.prototype.Fc = aa("ha");
    l.prototype.Mc = function(a) {
        this.S.disconnect();
        this.S.connect(a);
        this.V.disconnect();
        this.V.connect(a)
    };
    l.prototype.remove = function() {
        this.ha.disconnect();
        this.cb.disconnect();
        this.xb.disconnect();
        this.yc.disconnect();
        this.S.disconnect();
        this.V.disconnect()
    };
    l.prototype.Fc = aa("ha");
    x.prototype.Mc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    x.prototype.remove = function() {
        this.na.disconnect()
    };
    x.prototype.Fc = aa("na");
    d.prototype.Mc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    d.prototype.remove = function() {
        this.xb.disconnect();
        this.yc.disconnect();
        this.na.disconnect()
    };
    d.prototype.Fc = aa("na");
    v.prototype.Mc = function(a) {
        this.V.disconnect();
        this.V.connect(a);
        this.S.disconnect();
        this.S.connect(a)
    };
    v.prototype.remove = function() {
        this.xb.disconnect();
        this.Uh.disconnect();
        this.ha.disconnect();
        this.V.disconnect();
        this.S.disconnect()
    };
    v.prototype.Fc = aa("ha");
    y.prototype.Gt = function(a, b) {
        0.01 > a && (a = 0.01);
        this.Kj.gain.value = a;
        this.Jj.gain.value = Math.pow(1 / a, 0.6) * b
    };
    y.prototype.shape = function(a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    y.prototype.Yr = function(a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, f = 0; 32768 > f; ++f) e = f / 32768, e = this.shape(e, c, d), this.Gi[32768 + f] = e, this.Gi[32768 - f - 1] = -e
    };
    y.prototype.Mc = function(a) {
        this.V.disconnect();
        this.V.connect(a);
        this.S.disconnect();
        this.S.connect(a)
    };
    y.prototype.remove = function() {
        this.ha.disconnect();
        this.Kj.disconnect();
        this.pk.disconnect();
        this.Jj.disconnect();
        this.V.disconnect();
        this.S.disconnect()
    };
    y.prototype.Fc = aa("ha");
    m.prototype.Mc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    m.prototype.remove = function() {
        this.na.disconnect()
    };
    m.prototype.Fc = aa("na");
    D.prototype.gb = function() {
        this.na.getFloatFrequencyData(this.Wr);
        this.na.getByteTimeDomainData(this.Hp);
        for (var a = this.na.fftSize, b = 0, c = this.Mh = 0, d = 0; b < a; b++) d = (this.Hp[b] - 128) / 128, 0 > d && (d = -d), this.Mh < d && (this.Mh = d), c += d * d;
        this.Mh = f(this.Mh);
        f(Math.sqrt(c / a))
    };
    D.prototype.Mc = function(a) {
        this.na.disconnect();
        this.na.connect(a)
    };
    D.prototype.remove = function() {
        this.na.disconnect()
    };
    D.prototype.Fc = aa("na");
    L.prototype.Vh = function(a) {
        if (this.T = a) this.gj = this.T.x, this.hj = this.T.y;
        this.Pe.length = 0
    };
    L.prototype.Yi = function() {
        return !!this.T
    };
    L.prototype.gb = function(a) {
        this.T && 0 !== a && (this.Wl = Ja(this.gj, this.hj, this.T.x, this.T.y), a = Ra(this.gj, this.hj, this.T.x, this.T.y) / a, 4 > this.Pe.length || this.Pe.shift(), this.Pe.push(a), this.gj = this.T.x, this.hj = this.T.y)
    };
    L.prototype.lo = function() {
        if (!this.Pe.length) return 0;
        var a, b, c = 0;
        a = 0;
        for (b = this.Pe.length; a < b; a++) c += this.Pe[a];
        return c / this.Pe.length
    };
    L.prototype.pl = function() {
        return Math.cos(this.Wl) * this.lo()
    };
    L.prototype.ql = function() {
        return Math.sin(this.Wl) * this.lo()
    };
    var Fc = !1;
    J.prototype.cr = function() {
        if (!this.Ca && this.Pf) {
            var a = this;
            if (w.decodeAudioData) w.decodeAudioData(this.Pf, function(b) {
                a.Ca = b;
                var c, d, e;
                if (ha(a.Fj) || na) ha(a.Ci) || (c = a.Ci.df, c.normalize = a.Wo, c.buffer = b);
                else if (a.wg.length) {
                    c = 0;
                    for (d = a.wg.length; c < d; c++) {
                        b = a.wg[c];
                        e = new F(a, b.Np);
                        e.ym(!0);
                        if ("undefined" !== typeof b.Yo && (b.T = H.dh(b.Yo), !b.T)) continue;
                        if (b.T) {
                            var f = Oa(b.T.x, b.T.y, -b.T.A.sb(), Va, Wa, !0),
                                l = Oa(b.T.x, b.T.y, -b.T.A.sb(), Va, Wa, !1);
                            e.xm(f, l, Ea(b.T.q - b.T.A.sb()), b.ul, b.Xl, b.$l);
                            e.Vh(b.T)
                        } else e.xm(b.x, b.y, b.Hq, b.ul, b.Xl, b.$l);
                        e.play(a.Ql, a.Pm, a.Vj);
                        a.Dj && e.pause();
                        V.push(e)
                    }
                    a.wg.length = 0
                } else e = new F(a, a.Fj), e.play(a.Ql, a.Pm, a.Vj), a.Dj && e.pause(), V.push(e)
            }, function() {
                a.bl = !0
            });
            else if (this.Ca = w.createBuffer(this.Pf, !1), ha(this.Fj) || na) ha(this.Ci) || (b = this.Ci.df, b.normalize = this.Wo, b.buffer = this.Ca);
            else {
                var b = new F(this, this.Fj);
                b.play(this.Ql, this.Pm, this.Vj);
                this.Dj && b.pause();
                V.push(b)
            }
        }
    };
    J.prototype.yo = function() {
        switch (this.wa) {
            case E:
                return 4 <= this.Ca.readyState;
            case B:
                return !!this.Pf;
            case Q:
                return !0;
            case S:
                return !0
        }
        return !1
    };
    J.prototype.Ms = function() {
        switch (this.wa) {
            case E:
                return 4 <= this.Ca.readyState;
            case B:
                return !!this.Pf && !! this.Ca;
            case Q:
                return !0;
            case S:
                return !0
        }
        return !1
    };
    J.prototype.oo = function() {
        switch (this.wa) {
            case E:
                return !!this.Ca.error;
            case B:
                return this.bl
        }
        return !1
    };
    F.prototype.ih = function() {
        switch (this.wa) {
            case E:
                return this.C.ended;
            case B:
                return this.buffer.wa === B ? !this.Ce && !this.ec && this.C.loop || this.Yd ? !1 : H.wc.Oa - this.startTime > this.buffer.Ca.duration : this.C.ended;
            case Q:
                return this.hm;
            case S:
                !0
        }
        return !0
    };
    F.prototype.Wq = function() {
        return this.Ce || this.ec ? !0 : this.ih()
    };
    F.prototype.ym = function(a) {
        N === B && (!this.yd && a ? this.rb && (this.Ua || (this.Ua = w.createPanner(), this.Ua.panningModel = "number" === typeof this.Ua.panningModel ? Fb : ["equalpower", "HRTF", "soundfield"][Fb], this.Ua.distanceModel = "number" === typeof this.Ua.distanceModel ? Gb : ["linear", "inverse", "exponential"][Gb], this.Ua.refDistance = Cc, this.Ua.maxDistance = Dc, this.Ua.rolloffFactor = Ec), this.rb.disconnect(), this.rb.connect(this.Ua), this.Ua.connect(h(this.Qe)), this.yd = !0) : this.yd && !a && this.rb && (this.Ua.disconnect(), this.rb.disconnect(), this.rb.connect(h(this.Qe)), this.yd = !1))
    };
    F.prototype.xm = function(a, b, c, d, e, f) {
        this.yd && N === B && (this.Ua.setPosition(a, b, 0), this.Ua.setOrientation(Math.cos(p(c)), Math.sin(p(c)), 0), this.Ua.coneInnerAngle = d, this.Ua.coneOuterAngle = e, this.Ua.coneOuterGain = f, this.mp = a, this.np = b, this.ip = c, this.jp = d, this.kp = e, this.lp = f)
    };
    F.prototype.Vh = function(a) {
        this.yd && N === B && (this.Ta || (this.Ta = new L), this.Ta.Vh(a))
    };
    F.prototype.gb = function(a) {
        if (this.yd && N === B && this.Ta && this.Ta.Yi() && this.Xd()) {
            this.Ta.gb(a);
            a = this.Ta.T;
            var b = Oa(a.x, a.y, -a.A.sb(), Va, Wa, !0),
                c = Oa(a.x, a.y, -a.A.sb(), Va, Wa, !1);
            this.Ua.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.Ta.T.q && (b = a.q - a.A.sb(), this.Ua.setOrientation(Math.cos(b), Math.sin(b), 0));
            b = Oa(this.Ta.pl(), this.Ta.ql(), -a.A.sb(), 0, 0, !0);
            c = Oa(this.Ta.pl(), this.Ta.ql(), -a.A.sb(), 0, 0, !1);
            this.Ua.setVelocity(b, c, 0)
        }
    };
    F.prototype.play = function(b, c, d) {
        var f = this.C;
        this.ae = b;
        this.volume = c;
        d = d || 0;
        switch (this.wa) {
            case E:
                1 !== f.playbackRate && (f.playbackRate = 1);
                f.volume !== c * La && (f.volume = c * La);
                f.loop !== b && (f.loop = b);
                f.muted && (f.muted = !1);
                if (f.currentTime !== d) try {
                    f.currentTime = d
                } catch (l) {}
                if (this.gd && bb && !H.xd) cb.push(this);
                else try {
                    this.C.play()
                } catch (k) {}
                break;
            case B:
                this.muted = !1;
                this.Gh = 1;
                if (this.buffer.wa === B) this.Ce || (this.C = w.createBufferSource(), this.C.buffer = this.buffer.Ca, this.C.connect(this.rb)), this.C.loop = b, this.rb.gain.value = c * La, 0 === d ? a(this.C) : e(this.C, d, this.kf());
                else {
                    1 !== f.playbackRate && (f.playbackRate = 1);
                    f.loop !== b && (f.loop = b);
                    this.rb.gain.value = c * La;
                    if (f.currentTime !== d) try {
                        f.currentTime = d
                    } catch (g) {}
                    this.gd && bb && !H.xd ? cb.push(this) : f.play()
                }
                break;
            case Q:
                (!this.Ce && this.ec || 0 !== d) && f.seekTo(d);
                f.play();
                this.hm = !1;
                break;
            case S:
                H.Yb ? AppMobi.context.playSound(this.src, b) : AppMobi.player.playSound(this.src, b)
        }
        this.playbackRate = 1;
        this.startTime = H.wc.Oa - d;
        this.Yd = this.ec = this.Ce = !1
    };
    F.prototype.stop = function() {
        switch (this.wa) {
            case E:
                this.C.paused || this.C.pause();
                break;
            case B:
                this.buffer.wa === B ? q(this.C) : this.C.paused || this.C.pause();
                break;
            case Q:
                this.C.stop();
                break;
            case S:
                H.Yb && AppMobi.context.stopSound(this.src)
        }
        this.ec = !0;
        this.Yd = !1
    };
    F.prototype.pause = function() {
        if (!(this.Ce || this.ec || this.ih() || this.Yd)) {
            switch (this.wa) {
                case E:
                    this.C.paused || this.C.pause();
                    break;
                case B:
                    this.buffer.wa === B ? (this.md = this.nl(), this.ae && (this.md %= this.kf()), q(this.C)) : this.C.paused || this.C.pause();
                    break;
                case Q:
                    this.C.pause();
                    break;
                case S:
                    H.Yb && AppMobi.context.stopSound(this.src)
            }
            this.Yd = !0
        }
    };
    F.prototype.tt = function(a) {
        this.wa === B && (this.yd ? (this.Ua.disconnect(), this.Ua.connect(a)) : (this.rb.disconnect(), this.rb.connect(a)))
    };
    F.prototype.kf = function() {
        switch (this.wa) {
            case E:
                if ("undefined" !== typeof this.C.duration) return this.C.duration;
                break;
            case B:
                return this.buffer.Ca.duration;
            case Q:
                return this.C.getDuration();
            case S:
                if (H.Yb) return AppMobi.context.getDurationSound(this.src)
        }
        return 0
    };
    F.prototype.nl = function() {
        var a = this.kf(),
            b = 0;
        switch (this.wa) {
            case E:
                "undefined" !== typeof this.C.currentTime && (b = this.C.currentTime);
                break;
            case B:
                if (this.buffer.wa === B) {
                    if (this.Yd) return this.md;
                    b = H.wc.Oa - this.startTime
                } else "undefined" !== typeof this.C.currentTime && (b = this.C.currentTime);
                break;
            case S:
                H.Yb && (b = AppMobi.context.getPlaybackTimeSound(this.src))
        }!this.ae && b > a && (b = a);
        return b
    };
    F.prototype.Xd = function() {
        return !this.Yd && !this.Ce && !this.ec && !this.ih()
    };
    F.prototype.Xt = function() {
        var a = this.volume * La;
        switch (this.wa) {
            case E:
                this.C.volume && this.C.volume !== a && (this.C.volume = a);
                break;
            case B:
                this.rb.gain.value = a * this.Gh
        }
    };
    F.prototype.Ki = function(a) {
        switch (this.wa) {
            case E:
                this.C.muted !== !! a && (this.C.muted = !! a);
                break;
            case B:
                this.Gh = a ? 0 : 1, this.rb.gain.value = La * this.volume * this.Gh
        }
    };
    F.prototype.Cp = function(a) {
        this.eg = !! a;
        this.Ki(this.eg || this.qh)
    };
    F.prototype.Wj = function(a) {
        this.qh = !! a;
        this.Ki(this.eg || this.qh)
    };
    F.prototype.Xp = function() {
        var a = this.playbackRate;
        if (1 === pb && !this.gd || 2 === pb) a *= H.Ef;
        switch (this.wa) {
            case E:
                this.C.playbackRate !== a && (this.C.playbackRate = a);
                break;
            case B:
                this.buffer.wa === B ? this.C.playbackRate.value !== a && (this.C.playbackRate.value = a) : this.C.playbackRate !== a && (this.C.playbackRate = a)
        }
    };
    F.prototype.Kt = function(a) {
        switch (this.wa) {
            case E:
                a ? this.Xd() ? (this.C.pause(), this.he = !0) : this.he = !1 : this.he && this.C.play();
                break;
            case B:
                a ? this.Xd() ? (this.buffer.wa === B ? (this.md = this.nl(), this.ae && (this.md %= this.kf()), q(this.C)) : this.C.pause(), this.he = !0) : this.he = !1 : this.he && (this.buffer.wa === B ? (this.C = w.createBufferSource(), this.C.buffer = this.buffer.Ca, this.C.connect(this.rb), this.C.loop = this.ae, this.rb.gain.value = La * this.volume * this.Gh, this.startTime = H.wc.Oa - this.md, e(this.C, this.md, this.kf())) : this.C.play());
                break;
            case Q:
                a ? this.Xd() ? (this.C.pause(), this.he = !0) : this.he = !1 : this.he && this.C.play()
        }
    };
    z.Ba = function(b) {
        this.type = b;
        H = this.c = b.c;
        M = this;
        this.Zb = null;
        this.xh = -600;
        !(this.c.fj || this.c.aj && (this.c.nh || this.c.wo)) || this.c.bj || this.c.nb || (bb = !0);
        w = null;
        "undefined" !== typeof AudioContext ? (N = B, w = new AudioContext) : "undefined" !== typeof webkitAudioContext && (N = B, w = new webkitAudioContext);
        (this.c.fj && N === B || bb) && document.addEventListener("touchstart", function() {
            var b, c, d;
            !Fc && w && (b = w.createBuffer(1, 1, 22050), c = w.createBufferSource(), c.buffer = b, c.connect(w.destination), a(c), Fc = !0);
            if (bb) {
                if (!na)
                    for (b = 0, c = cb.length; b < c; ++b) d = cb[b], d.ec || d.Yd || d.C.play();
                cb.length = 0
            }
        }, !0);
        N !== B && (this.c.fd && "undefined" !== typeof window.Media ? N = Q : this.c.ag && (N = S));
        N === Q && (O = location.href, b = O.lastIndexOf("/"), -1 < b && (O = O.substr(0, b + 1)), O = O.replace("file://", ""));
        if (this.c.zo && this.c.Os && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.c.We(this);
        else {
            if (this.c.Yb) Qa = this.c.aj;
            else try {
                Qa = !! (new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (c) {
                Qa = !1
            }
            this.c.gi(this)
        }
    };
    var xa = z.Ba.prototype;
    xa.ca = function() {
        this.c.Qf = this;
        pb = this.H[0];
        this.ie = this.H[1];
        Fb = this.H[2];
        Gb = this.H[3];
        this.xh = -this.H[4];
        Cc = this.H[5];
        Dc = this.H[6];
        Ec = this.H[7];
        this.Zb = new L;
        N === B && (w.listener.speedOfSound = this.H[8], w.listener.dopplerFactor = this.H[9], w.listener.setPosition(this.c.ba / 2, this.c.aa / 2, this.xh), w.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Pa && Pa.disconnect();
            Eb = b.toLowerCase();
            Pa = w.createMediaStreamSource(a);
            Pa.connect(h(Eb))
        });
        this.c.Mq(function(a) {
            M.ft(a)
        });
        var a = this;
        this.c.qn(function(b) {
            a.am(b)
        })
    };
    xa.am = function(a) {
        var b, c, d;
        b = 0;
        for (c = V.length; b < c; b++) d = V[b], d.Ta && d.Ta.T === a && (d.Ta.T = null, d.yd && d.Xd() && d.ae && d.stop());
        this.Zb.T === a && (this.Zb.T = null)
    };
    xa.yb = function() {
        var a = {
            silent: na,
            masterVolume: La,
            listenerZ: this.xh,
            listenerUid: this.Zb.Yi() ? this.Zb.T.uid : -1,
            playing: [],
            effects: {}
        }, b = a.playing,
            c, d, e, f, l, k;
        c = 0;
        for (d = V.length; c < d; c++) e = V[c], !e.Xd() || 3 === this.ie || e.gd && 1 === this.ie || !e.gd && 2 === this.ie || (f = e.nl(), e.ae && (f %= e.kf()), f = {
            tag: e.Qe,
            buffersrc: e.buffer.src,
            is_music: e.gd,
            playbackTime: f,
            volume: e.volume,
            looping: e.ae,
            muted: e.eg,
            playbackRate: e.playbackRate,
            paused: e.Yd,
            resume_position: e.md
        }, e.yd && (f.pan = {}, k = f.pan, e.Ta && e.Ta.Yi() ? k.objUid = e.Ta.T.uid : (k.x = e.mp, k.y = e.np, k.a = e.ip), k.ia = e.jp, k.oa = e.kp, k.og = e.lp), b.push(f));
        b = a.effects;
        for (l in ca)
            if (ca.hasOwnProperty(l)) {
                e = [];
                c = 0;
                for (d = ca[l].length; c < d; c++) e.push({
                    type: ca[l][c].type,
                    params: ca[l][c].kd
                });
                b[l] = e
            }
        return a
    };
    var db = [];
    xa.Pb = function(a) {
        var b = a.silent;
        La = a.masterVolume;
        this.xh = a.listenerZ;
        this.Zb.Vh(null);
        var c = a.listenerUid; - 1 !== c && (this.Zb.oj = c, db.push(this.Zb));
        var c = a.playing,
            e, f, h, q, s, F, J, B, z, w, E;
        if (3 !== this.ie)
            for (e = 0, f = V.length; e < f; e++) z = V[e], z.gd && 1 === this.ie || (z.gd || 2 !== this.ie) && z.stop();
        for (s in ca)
            if (ca.hasOwnProperty(s))
                for (e = 0, f = ca[s].length; e < f; e++) ca[s][e].remove();
        Xa(ca);
        for (s in a.effects)
            if (a.effects.hasOwnProperty(s))
                for (F = a.effects[s], e = 0, f = F.length; e < f; e++) switch (h = F[e].type, w = F[e].params, h) {
                    case "filter":
                        U(s, new A(w[0], w[1], w[2], w[3], w[4], w[5]));
                        break;
                    case "delay":
                        U(s, new g(w[0], w[1], w[2]));
                        break;
                    case "convolve":
                        h = w[2];
                        z = this.Ti(h, !1);
                        z.Ca ? h = new k(z.Ca, w[0], w[1], h) : (h = new k(null, w[0], w[1], h), z.Wo = w[0], z.Ci = h);
                        U(s, h);
                        break;
                    case "flanger":
                        U(s, new r(w[0], w[1], w[2], w[3], w[4]));
                        break;
                    case "phaser":
                        U(s, new l(w[0], w[1], w[2], w[3], w[4], w[5]));
                        break;
                    case "gain":
                        U(s, new x(w[0]));
                        break;
                    case "tremolo":
                        U(s, new d(w[0], w[1]));
                        break;
                    case "ringmod":
                        U(s, new v(w[0], w[1]));
                        break;
                    case "distortion":
                        U(s, new y(w[0], w[1], w[2], w[3], w[4]));
                        break;
                    case "compressor":
                        U(s, new m(w[0], w[1], w[2], w[3], w[4]));
                        break;
                    case "analyser":
                        U(s, new D(w[0], w[1]))
                }
            e = 0;
        for (f = c.length; e < f; e++) 3 === this.ie || (a = c[e], h = a.buffersrc, q = a.is_music, s = a.tag, F = a.playbackTime, J = a.looping, B = a.volume, E = (w = a.pan) && w.hasOwnProperty("objUid") ? w.objUid : -1, q && 1 === this.ie) || !q && 2 === this.ie || ((z = this.gl(h, s, q, J, B)) ? (z.md = a.resume_position, z.ym( !! w), z.play(J, B, F), z.Xp(), z.Xt(), z.Ki(z.eg || z.qh), a.paused && z.pause(), a.muted && z.Cp(!0), z.Ki(z.eg || z.qh), w && (-1 !== E ? (z.Ta = z.Ta || new L, z.Ta.oj = E, db.push(z.Ta)) : z.xm(w.x, w.y, w.a, w.ia, w.oa, w.og))) : (z = this.Ti(h, q), z.Vj = F, z.Dj = a.paused, w && (-1 !== E ? z.wg.push({
            Yo: E,
            ul: w.ia,
            Xl: w.oa,
            $l: w.og,
            Np: s
        }) : z.wg.push({
            x: w.x,
            y: w.y,
            Hq: w.a,
            ul: w.ia,
            Xl: w.oa,
            $l: w.og,
            Np: s
        }))));
        if (b && !na) {
            e = 0;
            for (f = V.length; e < f; e++) V[e].Wj(!0);
            na = !0
        } else if (!b && na) {
            e = 0;
            for (f = V.length; e < f; e++) V[e].Wj(!1);
            na = !1
        }
    };
    xa.Ld = function() {
        var a, b, c, d;
        a = 0;
        for (b = db.length; a < b; a++) c = db[a], d = this.c.dh(c.oj), c.Vh(d), c.oj = -1, d && (Va = d.x, Wa = d.y);
        db.length = 0
    };
    xa.ft = function(a) {
        var b, c;
        b = 0;
        for (c = V.length; b < c; b++) V[b].Kt(a)
    };
    xa.gb = function() {
        var a = this.c.bb,
            b, c, d;
        b = 0;
        for (c = V.length; b < c; b++) d = V[b], d.gb(a), d.wa === E || d.wa === S || d.Ce || d.ec || !d.ih() || (d.ec = !0, W = d.Qe, H.trigger(C.prototype.d.Mf, M)), 0 !== pb && d.Xp();
        var e, f;
        for (e in ca)
            if (ca.hasOwnProperty(e))
                for (d = ca[e], b = 0, c = d.length; b < c; b++) f = d[b], f.gb && f.gb();
        N === B && this.Zb.Yi() && (this.Zb.gb(a), Va = this.Zb.T.x, Wa = this.Zb.T.y, w.listener.setPosition(this.Zb.T.x, this.Zb.T.y, this.xh), w.listener.setVelocity(this.Zb.pl(), this.Zb.ql(), 0))
    };
    var eb = [];
    xa.It = function(a) {
        var b, c, d, e, f, l = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (d = a[b], e = d[0], d = 2 * d[1], (f = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && Qa || !f && !Qa) eb.push({
                filename: e,
                size: d,
                T: null
            }), l += d;
        return l
    };
    xa.Nt = function() {
        var a, b, c, d;
        a = 0;
        for (b = eb.length; a < b; ++a) c = eb[a], d = this.c.Qi + c.filename, c.T = this.Ti(d, !1)
    };
    xa.hs = function() {
        var a = 0,
            b, c, d;
        b = 0;
        for (c = eb.length; b < c; ++b) d = eb[b], d.T.Ms() || d.T.oo() || this.c.nb ? a += d.size : d.T.yo() && (a += Math.floor(d.size / 2));
        return a
    };
    xa.Ti = function(a, b) {
        var c, d, e, f = null;
        c = 0;
        for (d = wa.length; c < d; c++)
            if (e = wa[c], e.src === a) {
                f = e;
                break
            }
        f || (f = new J(a, b), wa.push(f));
        return f
    };
    xa.gl = function(a, b, c, d, e) {
        var f, l, k;
        f = 0;
        for (l = V.length; f < l; f++)
            if (k = V[f], k.src === a && (k.Wq() || c)) return k.Qe = b, k;
        a = this.Ti(a, c);
        if (!a.Ca) return "<preload>" !== b && (a.Fj = b, a.Ql = d, a.Pm = e), null;
        k = new F(a, b);
        V.push(k);
        return k
    };
    var ma = [];
    Y.prototype.Mf = function(a) {
        return jb(W, a)
    };
    Y.prototype.vq = function() {
        var a, b;
        a = 0;
        for (b = wa.length; a < b; a++)
            if (!wa[a].yo() && !wa[a].oo()) return !1;
        return !0
    };
    Y.prototype.Jg = function() {
        return N === B
    };
    Y.prototype.rk = function(a) {
        I(a);
        var b;
        a = 0;
        for (b = ma.length; a < b; a++)
            if (ma[a].Xd()) return !0;
        return !1
    };
    z.d = new Y;
    T.prototype.Play = function(a, b, c, d) {
        !na && (c = Math.pow(10, c / 20), 0 > c && (c = 0), 1 < c && (c = 1), Ua = this.gl(this.c.Qi + a[0] + (Qa ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (Ua.ym(!1), Ua.play(0 !== b, c))
    };
    T.prototype.dn = function(a, b) {
        I(a);
        var c, d;
        c = 0;
        for (d = ma.length; c < d; c++) ma[c].Cp(0 === b)
    };
    T.prototype.Gb = function(a) {
        if (!na) {
            var b = a[1];
            a = this.c.Qi + a[0] + (Qa ? ".ogg" : ".m4a");
            N === S ? this.c.Yb ? AppMobi.context.loadSound(a) : AppMobi.player.loadSound(a) : N !== Q && this.gl(a, "<preload>", b, !1)
        }
    };
    T.prototype.Kc = function(a) {
        I(a);
        var b;
        a = 0;
        for (b = ma.length; a < b; a++) ma[a].stop()
    };
    T.prototype.jn = function() {
        var a, b;
        a = 0;
        for (b = V.length; a < b; a++) V[a].stop()
    };
    T.prototype.en = function(a) {
        var b;
        2 === a && (a = na ? 1 : 0);
        if (0 === a && !na) {
            a = 0;
            for (b = V.length; a < b; a++) V[a].Wj(!0);
            na = !0
        } else if (1 === a && na) {
            a = 0;
            for (b = V.length; a < b; a++) V[a].Wj(!1);
            na = !1
        }
    };
    z.b = new T;
    s.prototype.Um = function(a, b) {
        I(b, !0);
        ma.length ? a.K(ma[0].kf()) : a.K(0)
    };
    z.e = new s
})();

function u(f) {
    this.c = f
}(function() {
    function f() {
        if (0 === this.Tk.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Bg ? b.drawImage(this.$, this.sg, this.tg, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.$, 0, 0, this.width, this.height);
            this.Tk = a.toDataURL("image/png")
        }
        return this.Tk
    }

    function h() {}

    function b() {}
    var c = u.prototype;
    c.Ja = function(a) {
        this.Na = a;
        this.c = a.c
    };
    var a = c.Ja.prototype;
    a.ca = function() {
        if (!this.R) {
            var a, b, c, e, d, g, h, m, q;
            this.ad = [];
            this.Zi = !1;
            a = 0;
            for (b = this.oc.length; a < b; a++) {
                d = this.oc[a];
                h = {};
                h.name = d[0];
                h.speed = d[1];
                h.loop = d[2];
                h.om = d[3];
                h.Sj = d[4];
                h.ge = d[5];
                h.da = d[6];
                h.frames = [];
                c = 0;
                for (e = d[7].length; c < e; c++) g = d[7][c], m = {}, m.fk = g[0], m.Fm = g[1], m.sg = g[2], m.tg = g[3], m.width = g[4], m.height = g[5], m.duration = g[6], m.Wb = g[7], m.Xb = g[8], m.wl = g[9], m.Hj = g[10], m.qp = g[11], m.Bg = 0 !== m.width, m.Tk = "", m.cv = f, q = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, m.zm = q, m.ea = null, (q = this.c.Vr(g[0])) ? m.$ = q : (m.$ = new Image, m.$.idtkLoadDisposed = !0, m.$.src = g[0], m.$.Zq = g[0], m.$.Mn = g[1], m.$.Uq = null, this.c.bq(m.$)), h.frames.push(m), this.ad.push(m);
                this.oc[a] = h
            }
        }
    };
    a.Wt = function() {
        var a, b, c;
        a = 0;
        for (b = this.j.length; a < b; a++) c = this.j[a], c.Fi = c.Lb.ea
    };
    a.xj = function() {
        if (!this.R) {
            var a, b, c;
            a = 0;
            for (b = this.ad.length; a < b; ++a) c = this.ad[a], c.$.Uq = null, c.ea = null
        }
    };
    a.zj = function() {
        if (!this.R && this.j.length) {
            var a, b, c;
            a = 0;
            for (b = this.ad.length; a < b; ++a) c = this.ad[a], c.ea = this.c.J.ig(c.$, !1, this.c.ma, c.qp);
            this.Wt()
        }
    };
    a.Ll = function() {
        if (!this.R && !this.Zi && this.c.J) {
            var a, b, c;
            a = 0;
            for (b = this.ad.length; a < b; ++a) c = this.ad[a], c.ea = this.c.J.ig(c.$, !1, this.c.ma, c.qp);
            this.Zi = !0
        }
    };
    a.mk = function() {
        if (!this.R && !this.j.length && this.Zi) {
            var a, b, c;
            a = 0;
            for (b = this.ad.length; a < b; ++a) c = this.ad[a], this.c.J.deleteTexture(c.ea), c.ea = null;
            this.Zi = !1
        }
    };
    var e = [];
    a.Lj = function(a) {
        var b, c, f;
        b = e.length = 0;
        for (c = this.ad.length; b < c; ++b) f = this.ad[b].$, -1 === e.indexOf(f) && (a.drawImage(f, 0, 0), e.push(f))
    };
    c.Ba = function(a) {
        this.type = a;
        this.c = a.c;
        a = this.type.oc[0].frames[0].Hj;
        this.Vc ? this.sd.Wh(a) : this.sd = new ab(a)
    };
    var q = c.Ba.prototype;
    q.ca = function() {
        this.visible = 0 === this.H[0];
        this.jh = this.pf = !1;
        this.Ug = 0 !== this.H[3];
        1 === this.type.oc.length && 1 === this.type.oc[0].frames.length || 0 === this.type.oc[0].speed || (this.c.gi(this), this.pf = !0);
        this.La = this.ao(this.H[1]) || this.type.oc[0];
        this.L = this.H[2];
        0 > this.L && (this.L = 0);
        this.L >= this.La.frames.length && (this.L = this.La.frames.length - 1);
        var a = this.La.frames[this.L];
        this.sd.Wh(a.Hj);
        this.Wb = a.Wb;
        this.Xb = a.Xb;
        this.Vg = this.La.speed;
        this.Vc ? this.bd.reset() : this.bd = new Za;
        this.vd = this.bd.Oa;
        this.Md = !0;
        this.Nd = 0;
        this.$e = !0;
        this.Sf = this.un = "";
        this.Jn = 0;
        this.Tg = -1;
        this.type.Ll();
        var b, c, e, d, f, g, m, a = 0;
        for (b = this.type.oc.length; a < b; a++)
            for (d = this.type.oc[a], c = 0, e = d.frames.length; c < e; c++) f = d.frames[c], 0 === f.width && (f.width = f.$.width, f.height = f.$.height), f.Bg && (m = f.$, g = f.zm, g.left = f.sg / m.width, g.top = f.tg / m.height, g.right = (f.sg + f.width) / m.width, g.bottom = (f.tg + f.height) / m.height, 0 === f.sg && 0 === f.tg && f.width === m.width && f.height === m.height && (f.Bg = !1));
        this.Lb = this.La.frames[this.L];
        this.Fi = this.Lb.ea
    };
    q.yb = function() {
        var a = {
            a: this.La.da,
            f: this.L,
            cas: this.Vg,
            fs: this.vd,
            ar: this.Nd,
            at: this.bd.Oa
        };
        this.Md || (a.ap = this.Md);
        this.$e || (a.af = this.$e);
        return a
    };
    q.Pb = function(a) {
        var b = this.Zr(a.a);
        b && (this.La = b);
        this.L = a.f;
        0 > this.L && (this.L = 0);
        this.L >= this.La.frames.length && (this.L = this.La.frames.length - 1);
        this.Vg = a.cas;
        this.vd = a.fs;
        this.Nd = a.ar;
        this.bd.reset();
        this.bd.Oa = a.at;
        this.Md = a.hasOwnProperty("ap") ? a.ap : !0;
        this.$e = a.hasOwnProperty("af") ? a.af : !0;
        this.Lb = this.La.frames[this.L];
        this.Fi = this.Lb.ea;
        this.sd.Wh(this.Lb.Hj);
        this.Wb = this.Lb.Wb;
        this.Xb = this.Lb.Xb
    };
    q.Gk = function(a) {
        this.L = a ? 0 : this.La.frames.length - 1;
        this.Md = !1;
        this.un = this.La.name;
        this.jh = !0;
        this.c.trigger(u.prototype.d.nq, this);
        this.c.trigger(u.prototype.d.ni, this);
        this.jh = !1;
        this.Nd = 0
    };
    q.gv = function() {
        return this.bd.Oa
    };
    q.gb = function() {
        this.bd.add(this.c.Yf(this));
        this.Sf.length && this.Rn();
        0 <= this.Tg && this.Wk();
        var a = this.bd.Oa,
            b = this.La,
            c = b.frames[this.L],
            e = c.duration / this.Vg;
        this.Md && a >= this.vd + e && (this.$e ? this.L++ : this.L--, this.vd += e, this.L >= b.frames.length && (b.ge ? (this.$e = !1, this.L = b.frames.length - 2) : b.loop ? this.L = b.Sj : (this.Nd++, this.Nd >= b.om ? this.Gk(!1) : this.L = b.Sj)), 0 > this.L && (b.ge ? (this.L = 1, this.$e = !0, b.loop || (this.Nd++, this.Nd >= b.om && this.Gk(!0))) : b.loop ? this.L = b.Sj : (this.Nd++, this.Nd >= b.om ? this.Gk(!0) : this.L = b.Sj)), 0 > this.L ? this.L = 0 : this.L >= b.frames.length && (this.L = b.frames.length - 1), a > this.vd + b.frames[this.L].duration / this.Vg && (this.vd = a), a = b.frames[this.L], this.Nf(c, a), this.c.qa = !0)
    };
    q.ao = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.oc.length; b < c; b++)
            if (e = this.type.oc[b], jb(e.name, a)) return e;
        return null
    };
    q.Zr = function(a) {
        var b, c, e;
        b = 0;
        for (c = this.type.oc.length; b < c; b++)
            if (e = this.type.oc[b], e.da === a) return e;
        return null
    };
    q.Rn = function() {
        var a = this.La.frames[this.L],
            b = this.ao(this.Sf);
        this.Sf = "";
        !b || jb(b.name, this.La.name) && this.Md || (this.La = b, this.Vg = b.speed, 0 > this.L && (this.L = 0), this.L >= this.La.frames.length && (this.L = this.La.frames.length - 1), 1 === this.Jn && (this.L = 0), this.Md = !0, this.vd = this.bd.Oa, this.$e = !0, this.Nf(a, this.La.frames[this.L]), this.c.qa = !0)
    };
    q.Wk = function() {
        var a = this.La.frames[this.L],
            b = this.L;
        this.L = sa(this.Tg);
        0 > this.L && (this.L = 0);
        this.L >= this.La.frames.length && (this.L = this.La.frames.length - 1);
        b !== this.L && (this.Nf(a, this.La.frames[this.L]), this.vd = this.bd.Oa, this.c.qa = !0);
        this.Tg = -1
    };
    q.Nf = function(a, b) {
        var c = a.width,
            e = a.height,
            d = b.width,
            f = b.height;
        c != d && (this.width *= d / c);
        e != f && (this.height *= f / e);
        this.Wb = b.Wb;
        this.Xb = b.Xb;
        this.sd.Wh(b.Hj);
        this.Wa();
        this.Lb = b;
        this.Fi = b.ea;
        c = 0;
        for (e = this.Y.length; c < e; c++) d = this.Y[c], d.ep && d.ep(a, b);
        this.c.trigger(u.prototype.d.Nf, this)
    };
    q.Rd = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Lb,
            c = b.Bg,
            e = b.$,
            d = this.x,
            f = this.y,
            g = this.width,
            m = this.height;
        if (0 === this.q && 0 <= g && 0 <= m) d -= this.Wb * g, f -= this.Xb * m, this.c.Ad && (d = d + 0.5 | 0, f = f + 0.5 | 0), c ? a.drawImage(e, b.sg, b.tg, b.width, b.height, d, f, g, m) : a.drawImage(e, d, f, g, m);
        else {
            this.c.Ad && (d = d + 0.5 | 0, f = f + 0.5 | 0);
            a.save();
            var h = 0 < g ? 1 : -1,
                q = 0 < m ? 1 : -1;
            a.translate(d, f);
            1 === h && 1 === q || a.scale(h, q);
            a.rotate(this.q * h * q);
            d = 0 - this.Wb * oa(g);
            f = 0 - this.Xb * oa(m);
            c ? a.drawImage(e, b.sg, b.tg, b.width, b.height, d, f, oa(g), oa(m)) : a.drawImage(e, d, f, oa(g), oa(m));
            a.restore()
        }
    };
    q.Pc = function(a) {
        a.zc(this.Fi);
        a.zf(this.opacity);
        var b = this.Lb,
            c = this.Rf;
        if (this.c.Ad) {
            var e = (this.x + 0.5 | 0) - this.x,
                d = (this.y + 0.5 | 0) - this.y;
            b.Bg ? a.Bd(c.hb + e, c.ib + d, c.Rb + e, c.Sb + d, c.Jb + e, c.Kb + d, c.Hb + e, c.Ib + d, b.zm) : a.Qj(c.hb + e, c.ib + d, c.Rb + e, c.Sb + d, c.Jb + e, c.Kb + d, c.Hb + e, c.Ib + d)
        } else b.Bg ? a.Bd(c.hb, c.ib, c.Rb, c.Sb, c.Jb, c.Kb, c.Hb, c.Ib, b.zm) : a.Qj(c.hb, c.ib, c.Rb, c.Sb, c.Jb, c.Kb, c.Hb, c.Ib)
    };
    q.cs = function(a) {
        var b = this.Lb,
            c, e;
        c = 0;
        for (e = b.wl.length; c < e; c++)
            if (jb(a, b.wl[c][0])) return c;
        return -1
    };
    q.ll = function(a, b) {
        var c = this.Lb,
            e = c.wl,
            d;
        d = ja(a) ? this.cs(a) : a - 1;
        d = sa(d);
        if (0 > d || d >= e.length) return b ? this.x : this.y;
        var f = (e[d][1] - c.Wb) * this.width,
            e = e[d][2],
            e = (e - c.Xb) * this.height,
            c = Math.cos(this.q);
        d = Math.sin(this.q);
        var g = f * c - e * d,
            e = e * c + f * d,
            f = g + this.x,
            e = e + this.y;
        return b ? f : e
    };
    var A = new fa,
        g = !1;
    a.finish = function(a) {
        if (g) {
            if (a) {
                var b = this.c.Ob().Mb.jd;
                a = null.fa();
                var c = A.Gf(),
                    e, d;
                if (a.ka) {
                    a.ka = !1;
                    a.j.length = c.length;
                    e = 0;
                    for (d = c.length; e < d; e++) a.j[e] = c[e];
                    if (b)
                        for (e = a.la.length = 0, d = null.j.length; e < d; e++) c = null.j[e], A.contains(c) || a.la.push(c)
                } else if (b)
                    for (b = a.j.length, a.j.length = b + c.length, e = 0, d = c.length; e < d; e++) a.j[b + e] = c[e], Da(a.la, c[e]);
                else Ba(a.j, c);
                null.qd()
            }
            A.clear();
            g = !1
        }
    };
    h.prototype.gc = function(a) {
        return this.Sf.length ? jb(this.Sf, a) : jb(this.La.name, a)
    };
    h.prototype.ni = function(a) {
        return jb(this.un, a)
    };
    h.prototype.nq = ba(!0);
    h.prototype.Nf = ba(!0);
    c.d = new h;
    b.prototype.Ze = function() {
        this.Md = !1
    };
    b.prototype.Dk = function(a) {
        this.Md = !0;
        this.vd = this.bd.Oa;
        1 === a && 0 !== this.L && (this.Tg = 0, this.jh || this.Wk());
        this.pf || (this.c.gi(this), this.pf = !0)
    };
    b.prototype.F = function(a, b) {
        this.Sf = a;
        this.Jn = b;
        this.pf || (this.c.gi(this), this.pf = !0);
        this.jh || this.Rn()
    };
    b.prototype.Mg = function(a) {
        this.Tg = a;
        this.pf || (this.c.gi(this), this.pf = !0);
        this.jh || this.Wk()
    };
    c.b = new b;
    c.e = new(n())
})();

function nc(f) {
    this.c = f
}(function() {
    function f(a, b, c) {
        if (c) {
            var f;
            c = 0;
            for (f = b.length; c < f; c++) a.length < e && a.push(b[c]);
            b.length = 0
        } else
            for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (a.length < e && a.push(b[f]), delete b[f])
    }

    function h(a, b, c) {
        var e = a.tf;
        c = c.replace(/\s\s*$/, "");
        b >= e.length && e.push(q.length ? q.pop() : {});
        b = e[b];
        b.text = c;
        b.width = a.Tl(c);
        a.Fg = pa(a.Fg, b.width)
    }

    function b() {}
    var c = nc.prototype;
    c.ca = n();
    c.Ja = function(a) {
        this.Na = a;
        this.c = a.c
    };
    var a = c.Ja.prototype;
    a.ca = function() {
        this.R || (this.$ = new Image, this.$.idtkLoadDisposed = !0, this.$.src = this.fk, this.c.bq(this.$), this.ea = null)
    };
    a.xj = function() {
        this.R || (this.ea = null)
    };
    a.zj = function() {
        if (!this.R && this.j.length) {
            this.ea || (this.ea = this.c.J.ig(this.$, !1, this.c.ma, this.ei));
            var a, b;
            a = 0;
            for (b = this.j.length; a < b; a++) this.j[a].ea = this.ea
        }
    };
    a.mk = function() {
        this.R || this.j.length || !this.ea || (this.c.J.deleteTexture(this.ea), this.ea = null)
    };
    a.Lj = function(a) {
        a.drawImage(this.$, 0, 0)
    };
    c.Ba = function(a) {
        this.type = a;
        this.c = a.c
    };
    a = c.Ba.prototype;
    a.ug = function() {
        f(q, this.tf, !0);
        f(A, this.xi, !1);
        f(g, this.yi, !1);
        Xa(this.xe)
    };
    a.ca = function() {
        this.$ = this.type.$;
        this.wi = this.H[0];
        this.ve = this.H[1];
        this.characterSet = this.H[2];
        this.text = this.H[3];
        this.we = this.H[4];
        this.visible = 0 === this.H[5];
        this.no = this.H[6] / 2;
        this.$p = this.H[7] / 2;
        this.cu = 0 === this.H[9];
        this.Tf = this.H[10];
        this.lineHeight = this.H[11];
        this.Df = this.Fg = 0;
        this.Vc ? (this.tf.length = 0, Xa(this.xi), Xa(this.yi), Xa(this.xe)) : (this.tf = [], this.xi = {}, this.yi = {}, this.xe = {});
        this.di = !0;
        this.Hl = this.width;
        this.c.J && (this.type.ea || (this.type.ea = this.c.J.ig(this.type.$, !1, this.c.ma, this.type.ei)), this.ea = this.type.ea);
        this.yq()
    };
    a.yb = function() {
        var a = {
            t: this.text,
            csc: this.we,
            csp: this.Tf,
            lh: this.lineHeight,
            tw: this.Fg,
            th: this.Df,
            lrt: this.Vs,
            cw: {}
        }, b;
        for (b in this.xe) a.cw[b] = this.xe[b];
        return a
    };
    a.Pb = function(a) {
        this.text = a.t;
        this.we = a.csc;
        this.Tf = a.csp;
        this.lineHeight = a.lh;
        this.Fg = a.tw;
        this.Df = a.th;
        this.Vs = a.lrt;
        for (var b in a.cw) this.xe[b] = a.cw[b];
        this.di = !0;
        this.Hl = this.width
    };
    var e = 1E3,
        q = [],
        A = [],
        g = [];
    a.yq = function() {
        for (var a = this.$, b = a.width, c = a.height, a = this.wi, e = this.ve, f = a / b, k = e / c, h = this.characterSet, b = Math.floor(b / a), c = Math.floor(c / e), q = 0; q < h.length && !(q >= b * c); q++) {
            var r = q % b,
                F = Math.floor(q / b),
                K = h.charAt(q);
            if (this.c.J) {
                var I = this.yi,
                    U = r * f,
                    Y = F * k,
                    r = (r + 1) * f,
                    F = (F + 1) * k;
                void 0 === I[K] && (I[K] = g.length ? g.pop() : new va);
                I[K].left = U;
                I[K].top = Y;
                I[K].right = r;
                I[K].bottom = F
            } else I = this.xi, r *= a, F *= e, U = a, Y = e, void 0 === I[K] && (I[K] = A.length ? A.pop() : {}), I[K].x = r, I[K].y = F, I[K].aq = U, I[K].mo = Y
        }
    };
    var k = [];
    c.Cq = function(a) {
        k.length = 0;
        for (var b = "", c, e = 0; e < a.length;)
            if (c = a.charAt(e), "\n" === c) b.length && (k.push(b), b = ""), k.push("\n"), ++e;
            else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(e), e++; while (e < a.length && (" " === a.charAt(e) || "\t" === a.charAt(e)));
            k.push(b);
            b = ""
        } else e < a.length && (b += c, e++);
        b.length && k.push(b)
    };
    c.Eq = function(a) {
        var b = a.text,
            c = a.tf;
        if (b && b.length) {
            var e = a.width;
            if (2 >= e) f(q, c, !0);
            else {
                var g = a.we,
                    k = a.Tf;
                if (b.length * (a.wi * g + k) - k <= e && -1 === b.indexOf("\n") && (k = a.Tl(b), k <= e)) {
                    f(q, c, !0);
                    c.push(q.length ? q.pop() : {});
                    c[0].text = b;
                    c[0].width = k;
                    a.Fg = k;
                    a.Df = a.ve * g + a.lineHeight;
                    return
                }
                this.Fq(a);
                a.Df = c.length * (a.ve * g + a.lineHeight)
            }
        } else f(q, c, !0)
    };
    c.Fq = function(a) {
        var b = a.cu,
            c = a.text,
            f = a.tf,
            g = a.width;
        b && (this.Cq(c), c = k);
        var m = "",
            r, A, J, F = 0,
            K = !1;
        for (J = 0; J < c.length; J++) "\n" === c[J] ? (!0 === K ? K = !1 : (h(a, F, m), F++), m = "") : (K = !1, r = m, m += c[J], A = a.Tl(m.replace(/\s\s*$/, "")), A > g && ("" === r ? (h(a, F, m), m = "", K = !0) : (h(a, F, r), m = c[J]), F++, b || " " !== m || (m = "")));
        m.replace(/\s\s*$/, "").length && (h(a, F, m), F++);
        for (J = F; J < f.length; J++) q.length < e && q.push(f[J]);
        f.length = F
    };
    a.Tl = function(a) {
        for (var b = this.Tf, c = a.length, e = 0, f = 0; f < c; f++) e += this.il(a.charAt(f)) * this.we + b;
        return e - (0 < e ? b : 0)
    };
    a.il = function(a) {
        var b = this.xe;
        return void 0 !== b[a] ? b[a] : this.wi
    };
    a.vp = function() {
        if (this.di || this.width !== this.Hl) this.Df = this.Fg = 0, this.type.Na.Eq(this), this.di = !1, this.Hl = this.width
    };
    a.Rd = function(a) {
        var b = this.$;
        if ("" !== this.text && null != b && (this.vp(), !(this.height < this.ve * this.we + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.c.Ad && (b = b + 0.5 | 0, c = c + 0.5 | 0);
            var e = this.A.Db,
                f = this.A.Eb,
                g = this.A.Cc,
                k = this.A.Bc;
            a.save();
            a.translate(b, c);
            a.rotate(this.q);
            for (var h = this.no, q = this.we, r = this.ve * q, A = this.lineHeight, I = this.Tf, U = this.tf, Y, T = -(this.Wb * this.width), s = -(this.Xb * this.height), s = s + this.$p * pa(0, this.height - this.Df), z, H, M, W = 0; W < U.length; W++) {
                var O = U[W].text;
                Y = h * pa(0, this.width - U[W].width);
                z = T + Y;
                s += A;
                if (c + s + r < f) s += r;
                else {
                    for (var E = 0; E < O.length; E++) {
                        H = O.charAt(E);
                        Y = this.il(H);
                        var B = this.xi[H];
                        if (b + z + Y * q + I < e) z += Y * q + I;
                        else {
                            if (z + Y * q > this.width + 1E-5) break;
                            void 0 !== B && (H = z, M = s, 0 === this.q && (H = Math.round(H), M = Math.round(M)), a.drawImage(this.$, B.x, B.y, B.aq, B.mo, H, M, B.aq * q, B.mo * q));
                            z += Y * q + I;
                            if (b + z > g) break
                        }
                    }
                    s += r;
                    if (s + r + A > this.height || c + s > k) break
                }
            }
            a.restore()
        }
    };
    var r = new ya;
    a.Pc = function(a) {
        a.zc(this.ea);
        a.zf(this.opacity);
        if (this.text && (this.vp(), !(this.height < this.ve * this.we + this.lineHeight))) {
            this.fc();
            var b = this.Rf,
                c = 0,
                e = 0;
            this.c.Ad && (c = (this.x + 0.5 | 0) - this.x, e = (this.y + 0.5 | 0) - this.y);
            var f = this.A.Db,
                g = this.A.Eb,
                k = this.A.Cc,
                h = this.A.Bc,
                q = this.q,
                A = this.no,
                K = this.$p,
                I = this.we,
                U = this.ve * I,
                Y = this.lineHeight,
                T = this.Tf,
                s = this.tf,
                z = this.Df,
                H, M, W;
            0 !== q && (M = Math.cos(q), W = Math.sin(q));
            for (var c = b.hb + c, b = b.ib + e, O, K = K * pa(0, this.height - z), E, B, z = 0; z < s.length; z++)
                if (e = s[z].text, O = H = A * pa(0, this.width - s[z].width), K += Y, b + K + U < g) K += U;
                else {
                    for (var Q = 0; Q < e.length; Q++) {
                        var S = e.charAt(Q);
                        H = this.il(S);
                        S = this.yi[S];
                        if (c + O + H * I + T < f) O += H * I + T;
                        else {
                            if (O + H * I > this.width + 1E-5) break;
                            if (void 0 !== S) {
                                var N = this.wi * I,
                                    w = this.ve * I;
                                E = O;
                                B = K;
                                0 === q && (E = Math.round(E), B = Math.round(B));
                                r.hb = E;
                                r.ib = B;
                                r.Rb = E + N;
                                r.Sb = B;
                                r.Hb = E;
                                r.Ib = B + w;
                                r.Jb = E + N;
                                r.Kb = B + w;
                                0 !== q && (E = r, B = M, N = W, w = void 0, w = E.hb * B - E.ib * N, E.ib = E.ib * B + E.hb * N, E.hb = w, w = E.Rb * B - E.Sb * N, E.Sb = E.Sb * B + E.Rb * N, E.Rb = w, w = E.Hb * B - E.Ib * N, E.Ib = E.Ib * B + E.Hb * N, E.Hb = w, w = E.Jb * B - E.Kb * N, E.Kb = E.Kb * B + E.Jb * N, E.Jb = w);
                                r.offset(c, b);
                                a.Bd(r.hb, r.ib, r.Rb, r.Sb, r.Jb, r.Kb, r.Hb, r.Ib, S)
                            }
                            O += H * I + T;
                            if (c + O > k) break
                        }
                    }
                    K += U;
                    if (K + U + Y > this.height || b + K > h) break
                }
        }
    };
    c.d = new(n());
    b.prototype.Bk = function(a) {
        ia(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.di = !0, this.c.qa = !0)
    };
    a.Ju = function(a, b) {
        var c = parseInt(b, 10);
        this.xe[a] !== c && (this.xe[a] = c, this.di = !0, this.c.qa = !0)
    };
    c.b = new b;
    c.e = new(n())
})();

function G(f) {
    this.c = f
}(function() {
    function f(a) {
        A = a.x;
        g = a.y;
        k = a.z
    }

    function h(a) {
        r = a.x;
        l = a.y;
        x = a.z
    }

    function b() {}

    function c() {}
    var a = G.prototype;
    a.Ja = function(a) {
        this.Na = a;
        this.c = a.c
    };
    a.Ja.prototype.ca = n();
    a.Ba = function(a) {
        this.type = a;
        this.c = a.c;
        this.touches = [];
        this.Vl = !1
    };
    var e = a.Ba.prototype,
        q = {
            left: 0,
            top: 0
        };
    e.Zg = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var A = 0,
        g = 0,
        k = 0,
        r = 0,
        l = 0,
        x = 0;
    e.ca = function() {
        this.Ps = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.Te = this.Rk = this.Qk = this.on = this.nn = this.mn = this.Kq = this.Jq = this.Iq = this.Lh = this.Kh = this.Jh = 0;
        this.au = 0 !== this.H[0];
        var a = 0 < this.c.sc ? document : this.c.canvas,
            b = document;
        this.c.Yb ? b = a = window.Canvas : this.c.uc && (b = a = window);
        var c = this;
        window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
            c.dp(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.cp(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.yj(a)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.yj(a)
        }, !1), this.c.canvas && (this.c.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.c.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.dp(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.cp(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.yj(a)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.yj(a)
        }, !1), this.c.canvas && (this.c.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.gp(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.fp(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.dm(a)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.dm(a)
        }, !1));
        if (this.Ps) {
            var e = function(a) {
                a = a.reading;
                c.mn = a.accelerationX;
                c.nn = a.accelerationY;
                c.on = a.accelerationZ
            }, g = function(a) {
                    a = a.reading;
                    c.Jh = a.yawDegrees;
                    c.Kh = a.pitchDegrees;
                    c.Lh = a.rollDegrees
                }, k = Windows.Devices.Sensors.Accelerometer.getDefault();
            k && (k.reportInterval = Math.max(k.minimumReportInterval, 16), k.addEventListener("readingchanged", e));
            var l = Windows.Devices.Sensors.Inclinometer.getDefault();
            l && (l.reportInterval = Math.max(l.minimumReportInterval, 16), l.addEventListener("readingchanged", g));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (k && k.removeEventListener("readingchanged", e), l && l.removeEventListener("readingchanged", g)) : (k && k.addEventListener("readingchanged", e), l && l.addEventListener("readingchanged", g))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Jh = a.alpha || 0;
            c.Kh = a.beta || 0;
            c.Lh = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.Iq = a.accelerationIncludingGravity.x || 0, c.Jq = a.accelerationIncludingGravity.y || 0, c.Kq = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.mn = a.acceleration.x || 0, c.nn = a.acceleration.y || 0, c.on = a.acceleration.z || 0)
        }, !1);
        this.au && !this.c.nb && (jQuery(document).mousemove(function(a) {
            c.dt(a)
        }), jQuery(document).mousedown(function(a) {
            c.ct(a)
        }), jQuery(document).mouseup(function(a) {
            c.et(a)
        }));
        this.c.ag && !this.c.Yb && AppMobi.accelerometer.watchAcceleration(f, {
            frequency: 40,
            adjustForRotation: !0
        });
        this.c.fd && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(h, null, {
            frequency: 40
        });
        this.c.Rt(this)
    };
    e.cp = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.Zg(a.pointerId),
                c = Ya();
            if (0 <= b) {
                var e = this.c.nb ? q : jQuery(this.c.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || (b.jj = b.time, b.Il = b.x, b.Jl = b.y, b.time = c, b.x = a.pageX - e.left, b.y = a.pageY - e.top)
            }
        }
    };
    e.dp = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.c.nb ? q : jQuery(this.c.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top,
                e = Ya();
            this.Te = this.touches.length;
            this.touches.push({
                time: e,
                x: c,
                y: b,
                jj: e,
                Il: c,
                Jl: b,
                id: a.pointerId,
                Dm: this.Te
            });
            this.c.xd = !0;
            this.c.trigger(G.prototype.d.Zm, this);
            this.c.trigger(G.prototype.d.oi, this);
            this.Qk = c;
            this.Rk = b;
            this.c.trigger(G.prototype.d.mc, this);
            this.c.xd = !1
        }
    };
    e.yj = function(a) {
        a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType && (a.preventDefault && a.preventDefault(), a = this.Zg(a.pointerId), this.Te = 0 <= a ? this.touches[a].Dm : -1, this.c.xd = !0, this.c.trigger(G.prototype.d.Ym, this), this.c.trigger(G.prototype.d.Lg, this), this.c.xd = !1, 0 <= a && this.touches.splice(a, 1))
    };
    e.fp = function(a) {
        a.preventDefault && a.preventDefault();
        var b = Ya(),
            c, e, f, g;
        c = 0;
        for (e = a.changedTouches.length; c < e; c++)
            if (f = a.changedTouches[c], g = this.Zg(f.identifier), 0 <= g) {
                var k = this.c.nb ? q : jQuery(this.c.canvas).offset();
                g = this.touches[g];
                2 > b - g.time || (g.jj = g.time, g.Il = g.x, g.Jl = g.y, g.time = b, g.x = f.pageX - k.left, g.y = f.pageY - k.top)
            }
    };
    e.gp = function(a) {
        a.preventDefault && a.preventDefault();
        var b = this.c.nb ? q : jQuery(this.c.canvas).offset(),
            c = Ya();
        this.c.xd = !0;
        var e, f, g, k;
        e = 0;
        for (f = a.changedTouches.length; e < f; e++)
            if (g = a.changedTouches[e], k = this.Zg(g.identifier), -1 === k) {
                k = g.pageX - b.left;
                var h = g.pageY - b.top;
                this.Te = this.touches.length;
                this.touches.push({
                    time: c,
                    x: k,
                    y: h,
                    jj: c,
                    Il: k,
                    Jl: h,
                    id: g.identifier,
                    Dm: this.Te
                });
                this.c.trigger(G.prototype.d.Zm, this);
                this.c.trigger(G.prototype.d.oi, this);
                this.Qk = k;
                this.Rk = h;
                this.c.trigger(G.prototype.d.mc, this)
            }
        this.c.xd = !1
    };
    e.dm = function(a) {
        a.preventDefault && a.preventDefault();
        this.c.xd = !0;
        var b, c, e;
        b = 0;
        for (c = a.changedTouches.length; b < c; b++) e = a.changedTouches[b], e = this.Zg(e.identifier), 0 <= e && (this.Te = this.touches[e].Dm, this.c.trigger(G.prototype.d.Ym, this), this.c.trigger(G.prototype.d.Lg, this), this.touches.splice(e, 1));
        this.c.xd = !1
    };
    e.av = function() {
        return this.c.ag && 0 === this.Jh && 0 !== k ? 90 * k : this.c.fd && 0 === this.Jh && 0 !== x ? 90 * x : this.Jh
    };
    e.bv = function() {
        return this.c.ag && 0 === this.Kh && 0 !== g ? -90 * g : this.c.fd && 0 === this.Kh && 0 !== l ? -90 * l : this.Kh
    };
    e.dv = function() {
        return this.c.ag && 0 === this.Lh && 0 !== A ? 90 * A : this.c.fd && 0 === this.Lh && 0 !== r ? 90 * r : this.Lh
    };
    e.ct = function(a) {
        a.preventDefault && this.c.rl && !this.c.De && a.preventDefault();
        this.gp({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Vl = !0
    };
    e.dt = function(a) {
        this.Vl && this.fp({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    e.et = function(a) {
        a.preventDefault && this.c.rl && !this.c.De && a.preventDefault();
        this.c.rl = !0;
        this.dm({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.Vl = !1
    };
    e.fi = function() {
        var a, b, c, e = Ya();
        a = 0;
        for (b = this.touches.length; a < b; a++) c = this.touches[a], c.time <= e - 50 && (c.jj = e)
    };
    b.prototype.oi = ba(!0);
    b.prototype.Lg = ba(!0);
    b.prototype.lq = function() {
        return this.touches.length
    };
    b.prototype.mc = function(a) {
        return a ? this.c.Qt(a, this.Qk, this.Rk) : !1
    };
    b.prototype.Lf = function(a) {
        if (!a) return !1;
        var b = a.fa(),
            c = b.Gc(),
            e, f, g = [],
            k, h, l, q;
        k = 0;
        for (h = c.length; k < h; k++) {
            var r = c[k];
            r.fc();
            l = 0;
            for (q = this.touches.length; l < q; l++)
                if (f = this.touches[l], e = r.A.Vb(f.x, f.y, !0), f = r.A.Vb(f.x, f.y, !1), r.cd(e, f)) {
                    g.push(r);
                    break
                }
        }
        return g.length ? (b.ka = !1, b.j = g, a.qd(), !0) : !1
    };
    b.prototype.Zm = function(a) {
        a = Math.floor(a);
        return a === this.Te
    };
    b.prototype.Ym = function(a) {
        a = Math.floor(a);
        return a === this.Te
    };
    a.d = new b;
    c.prototype.u = function(a, b) {
        if (this.touches.length) {
            var c, e, f, g, k;
            ha(b) ? (c = this.c.bh(0), e = c.scale, f = c.le, g = c.be, k = c.q, c.scale = this.c.ra.scale, c.le = 1, c.be = 1, c.q = this.c.ra.q, a.K(c.Vb(this.touches[0].x, this.touches[0].y, !0)), c.scale = e, c.le = f, c.be = g, c.q = k) : (c = ia(b) ? this.c.bh(b) : this.c.ml(b)) ? a.K(c.Vb(this.touches[0].x, this.touches[0].y, !0)) : a.K(0)
        } else a.K(0)
    };
    c.prototype.jb = function(a, b) {
        if (this.touches.length) {
            var c, e, f, g, k;
            ha(b) ? (c = this.c.bh(0), e = c.scale, f = c.le, g = c.de, k = c.q, c.scale = this.c.ra.scale, c.le = 1, c.de = 1, c.q = this.c.ra.q, a.K(c.Vb(this.touches[0].x, this.touches[0].y, !1)), c.scale = e, c.le = f, c.de = g, c.q = k) : (c = ia(b) ? this.c.bh(b) : this.c.ml(b)) ? a.K(c.Vb(this.touches[0].x, this.touches[0].y, !1)) : a.K(0)
        } else a.K(0)
    };
    a.e = new c
})();

function oc(f) {
    this.c = f
}(function() {
    function f() {
        g || (ga("[Construct 2] Webstorage plugin: session storage is not supported on this platform. Try using local storage or global variables instead."), g = !0)
    }

    function h() {}

    function b() {}

    function c() {}
    var a = oc.prototype;
    a.Ja = function(a) {
        this.Na = a;
        this.c = a.c
    };
    a.Ja.prototype.ca = n();
    a.Ba = function(a) {
        this.type = a;
        this.c = a.c
    };
    var e = a.Ba.prototype,
        q = "",
        A = "undefined" !== typeof window.is_scirra_arcade;
    A && (q = "arcade" + window.scirra_arcade_id);
    var g = !1;
    e.ca = n();
    h.prototype.cn = function(a) {
        return this.c.uc || !sessionStorage ? (f(), !1) : null != sessionStorage.getItem(q + a)
    };
    h.prototype.$m = ba(!0);
    a.d = new h;
    b.prototype.zq = function(a, b) {
        try {
            storage.set(q + a, b, true)
        } catch (c) {
            this.c.trigger(oc.prototype.d.$m, this)
        }
    };
    b.prototype.Aq = function(a, b) {
        if (this.c.uc || !sessionStorage) f();
        else try {
            sessionStorage.setItem(q + a, b)
        } catch (c) {
            this.c.trigger(oc.prototype.d.$m, this)
        }
    };
    a.b = new b;
    c.prototype.tk = function(a, b) {
        a.Ac((q + b) || "")
    };
    c.prototype.Sm = function(a) {
        var b = {}, c, e, d;
        c = 0;
        for (e = localStorage.length; c < e; c++) d = localStorage.key(c), A ? d.substr(0, q.length) === q && (b[d.substr(q.length)] = storage.get(d)) : b[d] = storage.get(d);
        a.Ac(JSON.stringify({
            c2dictionary: !0,
            data: b
        }))
    };
    a.e = new c
})();

function P(f) {
    this.c = f
}(function() {
    function f() {}

    function h() {}
    var b = P.prototype;
    b.Ja = function(a) {
        this.Na = a;
        this.c = a.c
    };
    var c = b.Ja.prototype;
    c.ca = function() {
        this.R || (this.$ = new Image, this.$.idtkLoadDisposed = !0, this.$.src = this.fk, this.$.Mn = this.Fm, this.c.Hf.push(this.$), this.ea = null)
    };
    c.xj = function() {
        this.R || (this.ea = null)
    };
    c.zj = function() {
        if (!this.R && this.j.length) {
            this.ea || (this.ea = this.c.J.ig(this.$, !0, this.c.ma, this.ei));
            var a, b;
            a = 0;
            for (b = this.j.length; a < b; a++) this.j[a].ea = this.ea
        }
    };
    c.Ll = function() {
        this.R || this.ea || !this.c.J || (this.ea = this.c.J.ig(this.$, !0, this.c.ma, this.ei))
    };
    c.mk = function() {
        this.R || this.j.length || !this.ea || (this.c.J.deleteTexture(this.ea), this.ea = null)
    };
    c.Lj = function(a) {
        a.drawImage(this.$, 0, 0)
    };
    b.Ba = function(a) {
        this.type = a;
        this.c = a.c
    };
    c = b.Ba.prototype;
    c.ca = function() {
        this.visible = 0 === this.H[0];
        this.Sh = new va(0, 0, 0, 0);
        this.c.J && this.type.Ll();
        this.qg = this.H[2];
        this.rg = this.H[3];
        this.Eg = this.H[4];
        this.$h = this.H[5]
    };
    c.ug = n();
    c.yb = function() {
        return {
            "offset x": this.qg,
            "offset y": this.rg,
            "sub width": this.Eg,
            "sub height": this.$h
        }
    };
    c.Pb = function(a) {
        this.qg = a["offset x"];
        this.rg = a["offset y"];
        this.Eg = a["sub width"];
        this.$h = a["sub height"]
    };
    c.Rd = function(a) {
        a.save();
        a.globalAlpha = this.opacity;
        a.globalCompositeOperation = this.Vf;
        var b = this.x,
            c = this.y;
        this.c.Ad && (b = Math.round(b), c = Math.round(c));
        a.translate(b, c);
        var b = this.width,
            c = this.height,
            f = 0 < b ? 1 : -1,
            g = 0 < c ? 1 : -1;
        if (1 !== f || 1 !== g) a.scale(f, g), b = oa(b), c = oa(c);
        a.rotate(this.q);
        a.drawImage(this.type.$, this.qg, this.rg, this.Eg, this.$h, 0 - this.Wb * b, 0 - this.Xb * c, b, c);
        a.restore()
    };
    c.Pc = function(a) {
        var b = this.type.$;
        a.zc(this.type.ea);
        a.zf(this.opacity);
        var c = this.Sh;
        c.left = this.qg / b.width;
        c.top = this.rg / b.height;
        c.right = (this.qg + this.Eg) / b.width;
        c.bottom = (this.rg + this.$h) / b.height;
        b = this.Rf;
        if (this.c.Ad) {
            var f = Math.round(this.x) - this.x,
                g = Math.round(this.y) - this.y;
            a.Bd(b.hb + f, b.ib + g, b.Rb + f, b.Sb + g, b.Jb + f, b.Kb + g, b.Hb + f, b.Ib + g, c)
        } else a.Bd(b.hb, b.ib, b.Rb, b.Sb, b.Jb, b.Kb, b.Hb, b.Ib, c)
    };
    b.d = new(n());
    f.prototype.Ng = function(a, b, c, f) {
        this.qg = a;
        this.rg = b;
        this.Eg = c;
        this.$h = f;
        this.c.qa = !0
    };
    b.b = new f;
    h.prototype.Bq = function(a) {
        a.K(this.Eg)
    };
    b.e = new h
})();

function pc(f) {
    this.c = f
}(function() {
    function f() {}

    function h() {}
    var b = pc.prototype;
    b.Ja = function(a) {
        this.N = a;
        this.c = a.c
    };
    b.Ja.prototype.ca = n();
    b.Ba = function(a, b) {
        this.type = a;
        this.N = a.N;
        this.g = b;
        this.c = a.c
    };
    var c = b.Ba.prototype;
    c.ca = function() {
        this.Re = this.Ed = this.Cg = this.vj = this.Cj = 0
    };
    c.yb = function() {
        return {
            ontime: this.Cj,
            offtime: this.vj,
            stage: this.Cg,
            stagetimeleft: this.Ed,
            timeleft: this.Re
        }
    };
    c.Pb = function(a) {
        this.Cj = a.ontime;
        this.vj = a.offtime;
        this.Cg = a.stage;
        this.Ed = a.stagetimeleft;
        this.Re = a.timeleft
    };
    c.gb = function() {
        if (!(0 >= this.Re)) {
            var a = this.c.Yf(this.g);
            this.Re -= a;
            0 >= this.Re ? (this.Re = 0, this.g.visible = !0, this.c.qa = !0, this.c.trigger(pc.prototype.d.qq, this.g)) : (this.Ed -= a, 0 >= this.Ed && (0 === this.Cg ? (this.g.visible = !1, this.Cg = 1, this.Ed += this.vj) : (this.g.visible = !0, this.Cg = 0, this.Ed += this.Cj), this.c.qa = !0))
        }
    };
    f.prototype.qq = ba(!0);
    b.d = new f;
    h.prototype.jq = function(a, b, c) {
        this.Cj = a;
        this.vj = b;
        this.Cg = 1;
        this.Ed = b;
        this.Re = c;
        this.g.visible = !1;
        this.c.qa = !0
    };
    b.b = new h;
    b.e = new(n())
})();

function R(f) {
    this.c = f
}(function() {
    function f() {}
    var h = R.prototype;
    h.Ja = function(b) {
        this.N = b;
        this.c = b.c
    };
    h.Ja.prototype.ca = n();
    h.Ba = function(b, a) {
        this.type = b;
        this.N = b.N;
        this.g = a;
        this.c = b.c
    };
    var b = h.Ba.prototype;
    b.ca = function() {
        this.ob = null;
        this.Ej = -1;
        this.mode = this.hg = this.gk = this.ng = this.fe = this.Oh = 0;
        var b = this;
        this.Vc || (this.To = function(a) {
            b.am(a)
        });
        this.c.qn(this.To)
    };
    b.yb = function() {
        return {
            uid: this.ob ? this.ob.uid : -1,
            pa: this.Oh,
            pd: this.fe,
            msa: this.ng,
            tsa: this.gk,
            lka: this.hg,
            m: this.mode
        }
    };
    b.Pb = function(b) {
        this.Ej = b.uid;
        this.Oh = b.pa;
        this.fe = b.pd;
        this.ng = b.msa;
        this.gk = b.tsa;
        this.hg = b.lka;
        this.mode = b.m
    };
    b.Ld = function() {
        this.ob = -1 === this.Ej ? null : this.c.dh(this.Ej);
        this.Ej = -1
    };
    b.am = function(b) {
        this.ob == b && (this.ob = null)
    };
    b.ug = function() {
        this.ob = null;
        this.c.wt(this.To)
    };
    b.gb = n();
    b.fi = function() {
        if (this.ob) {
            this.hg !== this.g.q && (this.ng = Ga(this.ng + (this.g.q - this.hg)));
            var b = this.g.x,
                a = this.g.y;
            if (3 === this.mode || 4 === this.mode) {
                var e = Ra(this.g.x, this.g.y, this.ob.x, this.ob.y);
                if (e > this.fe || 4 === this.mode && e < this.fe) a = Ja(this.ob.x, this.ob.y, this.g.x, this.g.y), b = this.ob.x + Math.cos(a) * this.fe, a = this.ob.y + Math.sin(a) * this.fe
            } else b = this.ob.x + Math.cos(this.ob.q + this.Oh) * this.fe, a = this.ob.y + Math.sin(this.ob.q + this.Oh) * this.fe;
            this.hg = e = Ga(this.ng + (this.ob.q - this.gk));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.g.x === b && this.g.y === a || (this.g.x = b, this.g.y = a, this.g.Wa());
            0 !== this.mode && 2 !== this.mode || this.g.q === e || (this.g.q = e, this.g.Wa())
        }
    };
    h.d = new(n());
    f.prototype.Ub = function(b, a) {
        if (b) {
            var e = b.ho(this.g);
            e && (this.ob = e, this.Oh = Ja(e.x, e.y, this.g.x, this.g.y) - e.q, this.fe = Ra(e.x, e.y, this.g.x, this.g.y), this.hg = this.ng = this.g.q, this.gk = e.q, this.mode = a)
        }
    };
    f.prototype.Pa = function() {
        this.ob = null
    };
    h.b = new f;
    h.e = new(n())
})();

function qc(f) {
    this.c = f
}(function() {
    var f = qc.prototype;
    f.Ja = function(b) {
        this.N = b;
        this.c = b.c
    };
    f.Ja.prototype.ca = n();
    f.Ba = function(b, c) {
        this.type = b;
        this.N = b.N;
        this.g = c;
        this.c = b.c
    };
    var h = f.Ba.prototype;
    h.ca = function() {
        this.speed = p(this.H[0]);
        this.ti = p(this.H[1])
    };
    h.yb = function() {
        return {
            speed: this.speed,
            acc: this.ti
        }
    };
    h.Pb = function(b) {
        this.speed = b.speed;
        this.ti = b.acc
    };
    h.gb = function() {
        var b = this.c.Yf(this.g);
        0 !== b && (0 !== this.ti && (this.speed += this.ti * b), 0 !== this.speed && (this.g.q = Ga(this.g.q + this.speed * b), this.g.Wa()))
    };
    f.d = new(n());
    f.b = new(n());
    f.e = new(n())
})();

function rc(f) {
    this.c = f
}(function() {
    function f() {}

    function h() {}

    function b() {}
    var c = rc.prototype;
    c.Ja = function(a) {
        this.N = a;
        this.c = a.c
    };
    c.Ja.prototype.ca = n();
    c.Ba = function(a, b) {
        this.type = a;
        this.N = a.N;
        this.g = b;
        this.c = a.c;
        this.Sa = 0
    };
    var a = c.Ba.prototype,
        e = 2 * Math.PI,
        q = Math.PI / 2,
        A = 3 * Math.PI / 2;
    a.ca = function() {
        this.Za = 1 === this.H[0];
        this.Fh = this.H[1];
        this.Qm = this.H[2];
        this.ee = this.H[3];
        this.ee += Math.random() * this.H[4];
        0 === this.ee ? this.Sa = 0 : (this.Sa = this.H[5] / this.ee * e, this.Sa += Math.random() * this.H[6] / this.ee * e);
        this.ac = this.H[7];
        this.ac += Math.random() * this.H[8];
        this.Rh = this.nf = this.ga = 0;
        this.init()
    };
    a.yb = function() {
        return {
            i: this.Sa,
            a: this.Za,
            mv: this.Fh,
            w: this.Qm,
            p: this.ee,
            mag: this.ac,
            iv: this.ga,
            iv2: this.nf,
            r: this.Rh,
            lkv: this.Z,
            lkv2: this.Ma
        }
    };
    a.Pb = function(a) {
        this.Sa = a.i;
        this.Za = a.a;
        this.Fh = a.mv;
        this.Qm = a.w;
        this.ee = a.p;
        this.ac = a.mag;
        this.ga = a.iv;
        this.nf = a.iv2 || 0;
        this.Rh = a.r;
        this.Z = a.lkv;
        this.Ma = a.lkv2 || 0
    };
    a.init = function() {
        switch (this.Fh) {
            case 0:
                this.ga = this.g.x;
                break;
            case 1:
                this.ga = this.g.y;
                break;
            case 2:
                this.ga = this.g.width;
                this.Rh = this.g.height / this.g.width;
                break;
            case 3:
                this.ga = this.g.width;
                break;
            case 4:
                this.ga = this.g.height;
                break;
            case 5:
                this.ga = this.g.q;
                this.ac = p(this.ac);
                break;
            case 6:
                this.ga = this.g.opacity;
                break;
            case 7:
                this.ga = 0;
                break;
            case 8:
                this.ga = this.g.x, this.nf = this.g.y
        }
        this.Z = this.ga;
        this.Ma = this.nf
    };
    a.Id = function(a) {
        a %= e;
        switch (this.Qm) {
            case 0:
                return Math.sin(a);
            case 1:
                return a <= q ? a / q : a <= A ? 1 - 2 * (a - q) / Math.PI : (a - A) / q - 1;
            case 2:
                return 2 * a / e - 1;
            case 3:
                return -2 * a / e + 1;
            case 4:
                return a < Math.PI ? -1 : 1
        }
        return 0
    };
    a.gb = function() {
        var a = this.c.Yf(this.g);
        if (this.Za && 0 !== a) {
            0 === this.ee ? this.Sa = 0 : (this.Sa += a / this.ee * e, this.Sa %= e);
            switch (this.Fh) {
                case 0:
                    this.g.x !== this.Z && (this.ga += this.g.x - this.Z);
                    this.g.x = this.ga + this.Id(this.Sa) * this.ac;
                    this.Z = this.g.x;
                    break;
                case 1:
                    this.g.y !== this.Z && (this.ga += this.g.y - this.Z);
                    this.g.y = this.ga + this.Id(this.Sa) * this.ac;
                    this.Z = this.g.y;
                    break;
                case 2:
                    this.g.width = this.ga + this.Id(this.Sa) * this.ac;
                    this.g.height = this.g.width * this.Rh;
                    break;
                case 3:
                    this.g.width = this.ga + this.Id(this.Sa) * this.ac;
                    break;
                case 4:
                    this.g.height = this.ga + this.Id(this.Sa) * this.ac;
                    break;
                case 5:
                    this.g.q !== this.Z && (this.ga = Ga(this.ga + (this.g.q - this.Z)));
                    this.g.q = Ga(this.ga + this.Id(this.Sa) * this.ac);
                    this.Z = this.g.q;
                    break;
                case 6:
                    this.g.opacity = this.ga + this.Id(this.Sa) * this.ac / 100;
                    0 > this.g.opacity ? this.g.opacity = 0 : 1 < this.g.opacity && (this.g.opacity = 1);
                    break;
                case 8:
                    this.g.x !== this.Z && (this.ga += this.g.x - this.Z), this.g.y !== this.Ma && (this.nf += this.g.y - this.Ma), this.g.x = this.ga + Math.cos(this.g.q) * this.Id(this.Sa) * this.ac, this.g.y = this.nf + Math.sin(this.g.q) * this.Id(this.Sa) * this.ac, this.Z = this.g.x, this.Ma = this.g.y
            }
            this.g.Wa()
        }
    };
    a.ep = function(a, b) {
        switch (this.Fh) {
            case 2:
                this.ga *= b.width / a.width;
                this.Rh = b.height / b.width;
                break;
            case 3:
                this.ga *= b.width / a.width;
                break;
            case 4:
                this.ga *= b.height / a.height
        }
    };
    f.prototype.Xe = aa("Za");
    c.d = new f;
    h.prototype.ne = function(a) {
        this.Za = 1 === a
    };
    c.b = new h;
    b.prototype.Dq = function(a) {
        a.K(this.Id(this.Sa) * this.ac)
    };
    c.e = new b
})();
var sc = [],
    tc = [],
    uc = [],
    vc = [],
    wc = [],
    xc = [],
    yc = [],
    zc = [],
    Ac = [],
    Bc = 1E4;

function Gc(f, h) {
    return Math.round(f / h * Bc)
}

function Hc(f, h, b, c) {
    var a = 0;
    switch (f) {
        case 0:
            a = 1 * h / b + 0;
            break;
        case 1:
            a = 1 * (h /= b) * h + 0;
            break;
        case 2:
            a = -1 * (h /= b) * (h - 2) + 0;
            break;
        case 3:
            a = 1 > (h /= b / 2) ? 0.5 * h * h + 0 : -0.5 * (--h * (h - 2) - 1) + 0;
            break;
        case 4:
            a = 1 * (h /= b) * h * h + 0;
            break;
        case 5:
            a = 1 * ((h = h / b - 1) * h * h + 1) + 0;
            break;
        case 6:
            a = 1 > (h /= b / 2) ? 0.5 * h * h * h + 0 : 0.5 * ((h -= 2) * h * h + 2) + 0;
            break;
        case 7:
            a = 1 * (h /= b) * h * h * h + 0;
            break;
        case 8:
            a = -1 * ((h = h / b - 1) * h * h * h - 1) + 0;
            break;
        case 9:
            a = 1 > (h /= b / 2) ? 0.5 * h * h * h * h + 0 : -0.5 * ((h -= 2) * h * h * h - 2) + 0;
            break;
        case 10:
            a = 1 * (h /= b) * h * h * h * h + 0;
            break;
        case 11:
            a = 1 * ((h = h / b - 1) * h * h * h * h + 1) + 0;
            break;
        case 12:
            a = 1 > (h /= b / 2) ? 0.5 * h * h * h * h * h + 0 : 0.5 * ((h -= 2) * h * h * h * h + 2) + 0;
            break;
        case 13:
            a = wc[Gc(h, b)];
            break;
        case 14:
            a = xc[Gc(h, b)];
            break;
        case 15:
            a = yc[Gc(h, b)];
            break;
        case 16:
            f = 0;
            0 == f && (f = 1.70158);
            a = 1 * (h /= b) * h * ((f + 1) * h - f) + 0;
            break;
        case 17:
            a = zc[Gc(h, b)];
            break;
        case 18:
            a = Ac[Gc(h, b)];
            break;
        case 19:
            a = tc[Gc(h, b)];
            break;
        case 20:
            a = uc[Gc(h, b)];
            break;
        case 21:
            a = vc[Gc(h, b)];
            break;
        case 22:
            a = 1 - sc[Gc(b - h, b)] + 0;
            break;
        case 23:
            a = sc[Gc(h, b)];
            break;
        case 24:
            a = h < b / 2 ? 0.5 * (1 - sc[Gc(b - 2 * h, b)] + 0) + 0 : 0.5 * sc[Gc(2 * h - b, b)] + 0.5;
            break;
        case 25:
            h = h / b / 2;
            a = 2 * h * h * (3 - 2 * h);
            break;
        case 26:
            h = (h / b + 1) / 2;
            a = 2 * h * h * (3 - 2 * h) - 1;
            break;
        case 27:
            h /= b, a = h * h * (3 - 2 * h)
    }
    return c ? 1 - a : a
}
for (var Ic = 0, Jc = 0, Kc = 0, X = 0, Lc = 0, Mc = 0; Mc <= Bc; Mc++) {
    X = Mc / Bc;
    (X /= 1) < 1 / 2.75 || (X < 2 / 2.75 ? X -= 1.5 / 2.75 : X < 2.5 / 2.75 ? X -= 2.25 / 2.75 : X -= 2.625 / 2.75);
    var Nc, Oc = Mc / Bc;
    Nc = (Oc /= 1) < 1 / 2.75 ? 7.5625 * Oc * Oc + 0 : Oc < 2 / 2.75 ? 1 * (7.5625 * (Oc -= 1.5 / 2.75) * Oc + 0.75) + 0 : Oc < 2.5 / 2.75 ? 1 * (7.5625 * (Oc -= 2.25 / 2.75) * Oc + 0.9375) + 0 : 1 * (7.5625 * (Oc -= 2.625 / 2.75) * Oc + 0.984375) + 0;
    sc[Mc] = Nc;
    X = Mc / Bc;
    Kc = Jc = 0;
    X /= 1;
    0 == Kc && (Kc = 0.3);
    0 == Jc || Jc < Math.abs(1) ? (Jc = 1, Lc = Kc / 4) : Lc = Kc / (2 * Math.PI) * Math.asin(1 / Jc);
    Ic = -(Jc * Math.pow(2, 10 * (X -= 1)) * Math.sin(2 * (1 * X - Lc) * Math.PI / Kc)) + 0;
    tc[Mc] = Ic;
    X = Mc / Bc;
    Kc = Jc = 0;
    X /= 1;
    0 == Kc && (Kc = 0.3);
    0 == Jc || Jc < Math.abs(1) ? (Jc = 1, Lc = Kc / 4) : Lc = Kc / (2 * Math.PI) * Math.asin(1 / Jc);
    Ic = Jc * Math.pow(2, -10 * X) * Math.sin(2 * (1 * X - Lc) * Math.PI / Kc) + 1;
    uc[Mc] = Ic;
    X = Mc / Bc;
    Kc = Jc = 0;
    X /= 0.5;
    0 == Kc && (Kc = 0.3 * 1.5);
    0 == Jc || Jc < Math.abs(1) ? (Jc = 1, Lc = Kc / 4) : Lc = Kc / (2 * Math.PI) * Math.asin(1 / Jc);
    Ic = 1 > X ? -0.5 * Jc * Math.pow(2, 10 * (X -= 1)) * Math.sin(2 * (1 * X - Lc) * Math.PI / Kc) + 0 : 0.5 * Jc * Math.pow(2, -10 * (X -= 1)) * Math.sin(2 * (1 * X - Lc) * Math.PI / Kc) + 1;
    vc[Mc] = Ic;
    X = Mc / Bc;
    wc[Mc] = -(Math.sqrt(1 - X * X) - 1);
    X = Mc / Bc;
    xc[Mc] = Math.sqrt(1 - (X - 1) * (X - 1));
    X = Mc / Bc;
    Ic = 1 > (X /= 0.5) ? -0.5 * (Math.sqrt(1 - X * X) - 1) + 0 : 0.5 * (Math.sqrt(1 - (X -= 2) * X) + 1) + 0;
    yc[Mc] = Ic;
    X = Mc / Bc;
    Lc = 0;
    0 == Lc && (Lc = 1.70158);
    Ic = 1 * ((X = X / 1 - 1) * X * ((Lc + 1) * X + Lc) + 1) + 0;
    zc[Mc] = Ic;
    X = Mc / Bc;
    Lc = 0;
    0 == Lc && (Lc = 1.70158);
    Ic = 1 > (X /= 0.5) ? 0.5 * X * X * (((Lc *= 1.525) + 1) * X - Lc) + 0 : 0.5 * ((X -= 2) * X * (((Lc *= 1.525) + 1) * X + Lc) + 2) + 0;
    Ac[Mc] = Ic
}

function Pc(f, h, b, c, a, e, q) {
    this.name = f;
    this.value = 0;
    this.yg(c);
    this.Yj(a);
    this.Li = b;
    this.Ya = h;
    this.duration = e;
    this.state = this.xa = 0;
    this.Aj = this.Bj = this.wj = this.vg = !1;
    this.Ma = this.Z = 0;
    this.rc = q;
    this.ge = 1;
    this.ah = !1
}
Pc.prototype = {};
Pc.prototype.yg = function(f) {
    this.va = parseFloat(f.split(",")[0]);
    this.lb = parseFloat(f.split(",")[1]);
    this.Ma = this.Z = 0
};
Pc.prototype.Yj = function(f) {
    this.ta = parseFloat(f.split(",")[0]);
    this.Xa = parseFloat(f.split(",")[1]);
    isNaN(this.Xa) && (this.Xa = this.ta)
};
Pc.prototype.xk = function(f) {
    if (0 === this.state) return -1;
    1 === this.state && (this.xa += f);
    2 === this.state && (this.xa -= f);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.xa += f * this.ge;
    5 === this.state && (this.xa += f * this.ge);
    return 0 > this.xa ? (this.xa = 0, 4 === this.state ? this.ge = 1 : 6 === this.state ? (this.ge = 1, this.ah = !1) : this.state = 0, this.Aj = !0, 0) : this.xa > this.duration ? (this.xa = this.duration, 4 === this.state ? this.ge = -1 : 6 === this.state ? (this.ge = -1, this.ah = !0) : 5 === this.state ? this.xa = 0 : this.state = 0, this.wj = !0, 1) : this.ah ? Hc(this.Li, this.duration - this.xa, this.duration, this.ah) : Hc(this.Li, this.xa, this.duration, this.ah)
};

function Z(f) {
    this.c = f
}(function() {
    var f = Z.prototype;
    f.Ja = function(b) {
        this.N = b;
        this.c = b.c
    };
    f.Ja.prototype.ca = n();
    f.Ba = function(b, c) {
        this.type = b;
        this.N = b.N;
        this.g = c;
        this.c = b.c;
        this.Sa = 0
    };
    var h = f.Ba.prototype;
    h.ca = function() {
        this.Gj = this.H[0];
        this.Za = 1 == this.Gj || 2 == this.Gj || 3 == this.Gj || 4 == this.Gj;
        this.Ya = this.H[1];
        this.qr = this.H[2];
        this.target = this.H[3];
        this.Lp = this.H[4];
        this.Yp = !1;
        1 === this.Lp && (this.target = "relative(" + this.target + ")");
        this.duration = this.H[5];
        this.rc = 1 === this.H[6];
        this.value = 0;
        this.P = {};
        this.sn(this.Ya, this.qr, "current", this.target, this.duration, this.rc);
        1 === this.H[0] && this.Zh(0);
        2 === this.H[0] && this.Zh(2);
        3 === this.H[0] && this.Zh(3);
        4 === this.H[0] && this.Zh(4)
    };
    h.zd = function(b, c) {
        void 0 === c && (c = "current");
        var a = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        c = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var e = this.value;
        if ("current" === c) switch (b) {
            case 0:
                a = this.g.x + "," + this.g.y;
                break;
            case 1:
                a = this.g.width + "," + this.g.height;
                break;
            case 2:
                a = this.g.width + "," + this.g.height;
                break;
            case 3:
                a = this.g.width + "," + this.g.height;
                break;
            case 4:
                a = Ea(this.g.q) + "," + Ea(this.g.q);
                break;
            case 5:
                a = 100 * this.g.opacity + "," + 100 * this.g.opacity;
                break;
            case 6:
                a = e + "," + e;
                break;
            case 7:
                a = this.g.x + "," + this.g.y;
                break;
            case 8:
                a = this.g.x + "," + this.g.y;
                break;
            case 9:
                a = void 0 !== this.g.Lb ? this.g.width / this.g.Lb.width + "," + this.g.height / this.g.Lb.height : "1,1"
        }
        if ("relative" === c.substring(0, 8)) {
            var f = c.match(/\((.*?)\)/);
            if (f) var h = parseFloat(f[1].split(",")[0]),
            g = parseFloat(f[1].split(",")[1]);
            isNaN(h) && (h = 0);
            isNaN(g) && (g = 0);
            switch (b) {
                case 0:
                    a = this.g.x + h + "," + (this.g.y + g);
                    break;
                case 1:
                    a = this.g.width + h + "," + (this.g.height + g);
                    break;
                case 2:
                    a = this.g.width + h + "," + (this.g.height + g);
                    break;
                case 3:
                    a = this.g.width + h + "," + (this.g.height + g);
                    break;
                case 4:
                    a = Ea(this.g.q) + h + "," + (Ea(this.g.q) + g);
                    break;
                case 5:
                    a = 100 * this.g.opacity + h + "," + (100 * this.g.opacity + g);
                    break;
                case 6:
                    a = e + h + "," + e + h;
                    break;
                case 7:
                    a = this.g.x + h + "," + this.g.y;
                    break;
                case 8:
                    a = this.g.x + "," + (this.g.y + h);
                    break;
                case 9:
                    a = h + "," + g
            }
        }
        return a
    };
    h.sn = function(b, c, a, e, f, h) {
        a = this.zd(b, a);
        e = this.zd(b, e);
        void 0 !== this.P["default"] && delete this.P["default"];
        this.P["default"] = new Pc("default", b, c, a, e, f, h);
        this.P["default"].bb = 0
    };
    h.yb = n();
    h.Pb = n();
    h.Jt = function(b) {
        1 < b && (b = 1);
        0 > b && (b = 0);
        for (var c in this.P) {
            var a = this.P[c];
            a.Z = 0;
            a.Ma = 0;
            a.state = 3;
            a.xa = b * a.duration;
            var e = a.xk(0);
            this.Lm(a, e)
        }
    };
    h.Zh = function(b) {
        for (var c in this.P) {
            var a = this.P[c];
            if (this.Yp) {
                var e = this.zd(a.Ya, "current"),
                    f = this.zd(a.Ya, this.target);
                a.yg(e);
                a.Yj(f)
            }
            0 === b && (a.xa = 1E-6, a.Z = 0, a.Ma = 0, a.vg = !0, a.state = 1);
            1 === b && (a.state = 1);
            if (2 === b || 4 === b) a.xa = 1E-6, a.Z = 0, a.Ma = 0, a.vg = !0, 2 == b && (a.state = 4), 4 == b && (a.state = 6);
            3 === b && (a.xa = 1E-6, a.Z = 0, a.Ma = 0, a.vg = !0, a.state = 5)
        }
    };
    h.Pt = function(b) {
        for (var c in this.P) {
            var a = this.P[c];
            1 === b && (a.xa = 0);
            2 === b && (a.xa = a.duration);
            a.state = 3;
            var e = a.xk(0);
            this.Lm(a, e)
        }
    };
    h.yt = function(b) {
        for (var c in this.P) {
            var a = this.P[c];
            1 === b && (a.xa = a.duration, a.Z = 0, a.Ma = 0, a.Bj = !0);
            a.state = 2
        }
    };
    h.Lm = function(b, c) {
        if (0 === b.Ya) b.rc ? (this.g.x = b.va + (b.ta - b.va) * c, this.g.y = b.lb + (b.Xa - b.lb) * c) : (this.g.x += (b.ta - b.va) * c - b.Z, this.g.y += (b.Xa - b.lb) * c - b.Ma, b.Z = (b.ta - b.va) * c, b.Ma = (b.Xa - b.lb) * c);
        else if (1 === b.Ya) b.rc ? (this.g.width = b.va + (b.ta - b.va) * c, this.g.height = b.lb + (b.Xa - b.lb) * c) : (this.g.width += (b.ta - b.va) * c - b.Z, this.g.height += (b.Xa - b.lb) * c - b.Ma, b.Z = (b.ta - b.va) * c, b.Ma = (b.Xa - b.lb) * c);
        else if (2 === b.Ya) b.rc ? this.g.width = b.va + (b.ta - b.va) * c : (this.g.width += (b.ta - b.va) * c - b.Z, b.Z = (b.ta - b.va) * c);
        else if (3 === b.Ya) b.rc ? this.g.height = b.lb + (b.Xa - b.lb) * c : (this.g.height += (b.Xa - b.lb) * c - b.Ma, b.Ma = (b.Xa - b.lb) * c);
        else if (4 === b.Ya)
            if (b.rc) {
                var a = b.va + (b.ta - b.va) * c;
                this.g.q = Ga(p(a))
            } else a = (b.ta - b.va) * c - b.Z, this.g.q = Ga(this.g.q + p(a)), b.Z = (b.ta - b.va) * c;
            else if (5 === b.Ya) b.rc ? this.g.opacity = (b.va + (b.ta - b.va) * c) / 100 : (this.g.opacity += ((b.ta - b.va) * c - b.Z) / 100, b.Z = (b.ta - b.va) * c);
        else if (6 === b.Ya) b.rc ? this.value = b.va + (b.ta - b.va) * c : (this.value += (b.ta - b.va) * c - b.Z, b.Z = (b.ta - b.va) * c);
        else if (7 === b.Ya) b.rc ? this.g.x = b.va + (b.ta - b.va) * c : (this.g.x += (b.ta - b.va) * c - b.Z, b.Z = (b.ta - b.va) * c);
        else if (8 === b.Ya) b.rc ? this.g.y = b.lb + (b.Xa - b.lb) * c : (this.g.y += (b.Xa - b.lb) * c - b.Ma, b.Ma = (b.Xa - b.lb) * c);
        else if (9 === b.Ya) {
            var a = b.va + (b.ta - b.va) * c,
                e = b.lb + (b.Xa - b.lb) * c;
            0 > this.g.width && (a = b.va + (b.ta + b.va) * -c);
            0 > this.g.height && (e = b.lb + (b.Xa + b.lb) * -c);
            b.rc ? (this.g.width = this.g.Lb.width * a, this.g.height = this.g.Lb.height * e) : (0 > this.g.width ? (this.g.width = a * (this.g.width / (-1 + b.Z)), b.Z = a + 1) : (this.g.width = a * (this.g.width / (1 + b.Z)), b.Z = a - 1), 0 > this.g.height ? (this.g.height = e * (this.g.height / (-1 + b.Ma)), b.Ma = e + 1) : (this.g.height = e * (this.g.height / (1 + b.Ma)), b.Ma = e - 1))
        }
        this.g.Wa()
    };
    h.gb = function() {
        var b = this.c.Yf(this.g),
            c = this.P["default"];
        0 !== c.state && (c.vg && (this.c.trigger(Z.prototype.d.uq, this.g), c.vg = !1), c.Bj && (this.c.trigger(Z.prototype.d.tq, this.g), c.Bj = !1), this.Za = 1 == c.state || 2 == c.state || 4 == c.state || 5 == c.state || 6 == c.state, b = c.xk(b), this.Lm(c, b), c.wj && (this.c.trigger(Z.prototype.d.lc, this.g), c.wj = !1), c.Aj && (this.c.trigger(Z.prototype.d.an, this.g), c.Aj = !1))
    };
    f.d = {};
    h = f.d;
    h.Xe = function() {
        return 0 !== this.P["default"].state
    };
    h.od = function(b, c) {
        var a = this.P["default"];
        return cc(a.xa / a.duration, b, c)
    };
    h.uq = function() {
        return void 0 === this.P["default"] ? !1 : this.P["default"].vg
    };
    h.tq = function() {
        return void 0 === this.P["default"] ? !1 : this.P["default"].Bj
    };
    h.lc = function() {
        return void 0 === this.P["default"] ? !1 : this.P["default"].wj
    };
    h.an = function() {
        return void 0 === this.P["default"] ? !1 : this.P["default"].Aj
    };
    f.b = {};
    h = f.b;
    h.D = function(b, c) {
        this.Yp = 1 == c;
        this.Zh(b)
    };
    h.Kc = function(b) {
        this.Pt(b)
    };
    h.qi = function(b) {
        this.yt(b)
    };
    h.bn = function(b) {
        this.Jt(b)
    };
    h.yk = function(b) {
        isNaN(b) || 0 > b || void 0 === this.P["default"] || (this.P["default"].duration = b)
    };
    h.Nu = function(b) {
        void 0 !== this.P["default"] && (this.P["default"].rc = 1 === b)
    };
    h.Pu = function(b) {
        void 0 !== this.P["default"] && (b = this.zd(this.P["default"].Ya, b), this.P["default"].yg(b))
    };
    h.oe = function(b, c, a) {
        if (void 0 !== this.P["default"] && !isNaN(a)) {
            var e = this.P["default"],
                f = a + "";
            this.Lp = c;
            var h = "",
                g = "";
            if (1 === c) {
                this.target = "relative(" + f + ")";
                switch (b) {
                    case 0:
                        h = this.g.x + a;
                        g = e.Xa;
                        break;
                    case 1:
                        h = e.ta;
                        g = this.g.y + a;
                        break;
                    case 2:
                        g = h = "" + Ea(this.g.q + p(a));
                        break;
                    case 3:
                        g = h = "" + 100 * this.g.opacity + a;
                        break;
                    case 4:
                        h = this.g.width + a;
                        g = e.Xa;
                        break;
                    case 5:
                        h = e.ta;
                        g = this.g.height + a;
                        break;
                    case 6:
                        g = h = a
                }
                f = h + "," + g
            } else {
                switch (b) {
                    case 0:
                        h = a;
                        g = e.Xa;
                        break;
                    case 1:
                        h = e.ta;
                        g = a;
                        break;
                    case 2:
                        g = h = a;
                        break;
                    case 3:
                        g = h = a;
                        break;
                    case 4:
                        h = a;
                        g = e.Xa;
                        break;
                    case 5:
                        h = e.ta;
                        g = a;
                        break;
                    case 6:
                        g = h = a
                }
                this.target = f = h + "," + g
            }
            b = this.zd(this.P["default"].Ya, "current");
            f = this.zd(this.P["default"].Ya, f);
            e.yg(b);
            e.Yj(f)
        }
    };
    h.Su = function(b) {
        void 0 !== this.P["default"] && (this.P["default"].Ya = b)
    };
    h.Ku = function(b) {
        void 0 !== this.P["default"] && (this.P["default"].Li = b)
    };
    h.Tu = function(b) {
        var c = this.P["default"];
        this.value = b;
        6 === c.Ya && c.yg(this.zd(c.Ya, "current"))
    };
    h.Kd = function(b, c, a, e, f) {
        if (void 0 === this.P["default"]) this.sn(b, c, initial, a, e, f);
        else {
            var h = this.P["default"];
            h.Ya = b;
            h.Li = c;
            h.yg(this.zd(b, "current"));
            h.Yj(this.zd(b, a));
            h.duration = e;
            h.rc = 1 === f
        }
    };
    f.e = {};
    f = f.e;
    f.Du = function(b) {
        b.K(this.P["default"].xa / this.P["default"].duration)
    };
    f.Um = function(b) {
        b.K(this.P["default"].duration)
    };
    f.Vu = function(b) {
        var c = this.P["default"],
            a = "N/A";
        switch (c.Ya) {
            case 0:
                a = c.ta;
                break;
            case 1:
                a = c.Xa;
                break;
            case 2:
                a = c.ta;
                break;
            case 3:
                a = c.ta;
                break;
            case 4:
                a = c.ta;
                break;
            case 5:
                a = c.Xa;
                break;
            case 6:
                a = c.ta
        }
        b.K(a)
    };
    f.Dq = function(b) {
        b.K(this.value)
    }
})();

function Qc(f) {
    this.c = f;
    this.ak = this.Yh = this.Bf = this.$j = 0
}(function() {
    function f() {}
    var h = Qc.prototype;
    h.Ja = function(b) {
        this.N = b;
        this.c = b.c
    };
    h.Ja.prototype.ca = n();
    h.Ba = function(b, a) {
        this.type = b;

        this.N = b.N;
        this.g = a;
        this.c = b.c
    };
    var b = h.Ba.prototype;
    b.ca = function() {
        this.enabled = 0 !== this.H[0]
    };
    b.yb = function() {
        return {
            smg: this.N.$j,
            ss: this.N.Bf,
            se: this.N.Yh,
            smd: this.N.ak
        }
    };
    b.Pb = function(b) {
        this.N.$j = b.smg;
        this.N.Bf = b.ss;
        this.N.Yh = b.se;
        this.N.ak = b.smd
    };
    b.gb = n();
    b.fi = function() {
        if (this.enabled) {
            var b = this.N.sj.Gf(),
                a = 0,
                e = 0,
                f, h, g, k = 0;
            f = 0;
            for (h = b.length; f < h; f++) {
                a: {
                    g = b[f];
                    for (var r = void 0, l = void 0, x = void 0, r = 0, l = g.Y.length; r < l; ++r)
                        if (x = g.Y[r], x.N instanceof Qc) {
                            g = x;
                            break a
                        }
                    g = null
                }
                g && g.enabled && (a += b[f].x, e += b[f].y, ++k)
            }
            b = this.g.A.Ea;
            h = this.c.wc.Oa;
            g = f = 0;
            h >= this.N.Bf && h < this.N.Yh && (f = this.N.$j * Math.min(this.c.Ef, 1), 0 === this.N.ak && (f *= 1 - (h - this.N.Bf) / (this.N.Yh - this.N.Bf)), h = 2 * Math.random() * Math.PI, g = Math.random() * f, f = Math.cos(h) * g, g *= Math.sin(h));
            b.vm(a / k + f);
            b.wm(e / k + g)
        }
    };
    f.prototype.hn = function(b, a, e) {
        this.N.$j = b;
        this.N.Bf = this.c.wc.Oa;
        this.N.Yh = this.N.Bf + a;
        this.N.ak = e
    };
    h.b = new f
})();

function mc() {
    return [null, "preloader", [
        [C, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [P, !1, !0, !0, !0, !0, !0, !0, !0, !0],
        [u, !1, !0, !0, !0, !0, !0, !0, !0, !1],
        [nc, !1, !0, !0, !0, !0, !0, !0, !0, !0],
        [G, !0, !1, !1, !1, !1, !1, !1, !1, !1],
        [oc, !0, !1, !1, !1, !1, !1, !1, !1, !1]
    ], [
        ["t0", u, !1, [], 0, 0, null, [
                ["anim2", 5, !1, 1, 0, !1, 7435460880439442, [
                    ["images/bg-sheet0.png", 205890, 0, 0, 661, 813, 1, 0.5068078637123108, 0.7343173623085022, [],
                        [-0.5068078637123108, -0.7343173623085022, -0.002385854721069336, -0.30826336145401, 0.3926091194152832, -0.4331463575363159, 0.4931921362876892, -0.08578234910964966, 0.4931921362876892, 0.2656826376914978, -0.002385854721069336, -0.05954635143280029, -0.2268818616867065, -0.09417736530303955, -0.3603798747062683, -0.08578234910964966], 0
                    ]
                ]],
                ["anim4", 5, !1, 1, 0, !1, 4684336265773109, [
                    ["images/bg-sheet1.png", 154049, 0, 0, 651, 805, 1, 0.5084485411643982, 0.5714285969734192, [],
                        [-0.5084485411643982, -0.5714285969734192, 0.04008746147155762, -0.5714285969734192, 0.4915514588356018, -0.5714285969734192, 0.4915514588356018, 0.4238154292106628, -0.5084485411643982, 0.4083573818206787], 0
                    ]
                ]]
            ],
            [], !1, !1, 0x8b0478a2872bf, [], null
        ],
        ["t1", u, !1, [], 9, 0, null, [
                ["glowa", 6, !0, 1, 0, !0, 0xae58a2c0086b5, [
                    ["images/mike-sheet2.png", 116013, 217, 1, 70, 149, 3, 0.4000000059604645, 0.9932885766029358, [],
                        [-0.4000000059604645, -0.9932885766029358, -0.4000000059604645, -0.9932885766029358, 0.6000000238418579, -0.9932885766029358, 0.6000000238418579, -0.9059311747550964, 0.6000000238418579, -0.9932885766029358, -0.4000000059604645, 0.006711423397064209, -0.4000000059604645, -0.9932885766029358, -0.4000000059604645, -0.9059311747550964], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 433, 1, 69, 149, 1, 0.4057970941066742, 0.9932885766029358, [],
                        [-0.4057970941066742, -0.9932885766029358, -0.3089458048343658, -0.9932885766029358, 0.5942028760910034, -0.9932885766029358, -0.2552241086959839, -0.4219245910644531, -0.4057970941066742, -0.2730375528335571, -0.3089458048343658, -0.3668115735054016, -0.4057970941066742, 0.006711423397064209, -0.4057970941066742, -0.4219245910644531], 0
                    ]
                ]],
                ["lokiec", 5, !1, 1, 0, !1, 0xf8951e36c5104, [
                    ["images/mike-sheet1.png", 147226, 276, 299, 83, 150, 1, 0.3373493850231171, 0.9933333396911621, [],
                        [-0.3373493850231171, -0.9492498636245728, 0.6256026029586792, -0.9547256231307983, 0.2409826219081879, -0.4486043453216553, 0.2409826219081879, -0.3609923124313355, 0.1024916172027588, -0.353169322013855, -0.3036555945873261, -0.06842732429504395, -0.3373493850231171, -0.4486043453216553], 0
                    ]
                ]],
                ["pieta", 5, !1, 1, 0, !1, 9023200574279138, [
                    ["images/mike-sheet2.png", 116013, 288, 152, 68, 149, 1, 0.3676470518112183, 1.006711363792419, [],
                        [-0.3676470518112183, -1.006711363792419, 0.6323529481887817, -1.006711363792419, 0.6323529481887817, -0.5268383622169495, 0.6323529481887817, -0.4166423678398132, 0.4008299708366394, -0.4068033695220947, -0.3676470518112183, -0.04866838455200195, -0.3676470518112183, -0.5268383622169495], 0
                    ]
                ]],
                ["moonwalk", 12, !1, 1, 0, !1, 8958409430366574, [
                    ["images/mike-sheet1.png", 147226, 84, 308, 70, 150, 1, 0.4000000059604645, 0.9866666793823242, [],
                        [0.6000000238418579, -0.4167816638946533, 0.6000000238418579, -0.7674866914749146, 0.6000000238418579, -0.8787707090377808, 0.6000000238418579, -0.3078756928443909, 0.6000000238418579, -0.190541684627533, 0.6000000238418579, -0.190541684627533, 0.4903499782085419, 0.01333332061767578, -0.4000000059604645, -0.3078756928443909], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 156, 308, 70, 150, 4, 0.4000000059604645, 0.9866666793823242, [],
                        [0.6000000238418579, -0.3654826879501343, 0.6000000238418579, -0.7703396677970886, 0.6000000238418579, -0.8988068103790283, 0.6000000238418579, -0.2397596836090088, 0.2882600128650665, -0.1043086647987366, 0.6000000238418579, -0.1043086647987366, -0.4000000059604645, 0.01333332061767578, -0.4000000059604645, -0.2397596836090088], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 1, 1, 70, 150, 1, 0.4000000059604645, 0.9933333396911621, [],
                        [0.6000000238418579, -0.4234483242034912, 0.6000000238418579, -0.7741533517837524, 0.6000000238418579, -0.8854373693466187, 0.6000000238418579, -0.3145423531532288, 0.6000000238418579, -0.1972083449363709, 0.6000000238418579, -0.1972083449363709, 0.6000000238418579, 0.006666660308837891, -0.4000000059604645, -0.3145423531532288], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 73, 1, 70, 150, 1, 0.4000000059604645, 0.9933333396911621, [],
                        [-0.1758200079202652, -0.4213493466377258, -0.4000000059604645, -0.7733463048934937, 0.6000000238418579, -0.8850393295288086, 0.1603460013866425, -0.3120423555374146, -0.4000000059604645, -0.1942763328552246, -0.4000000059604645, -0.1942763328552246, -0.4000000059604645, 0.006666660308837891, -0.4000000059604645, -0.3120423555374146], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 289, 1, 70, 149, 4, 0.4000000059604645, 0.9932885766029358, [],
                        [-0.4000000059604645, -0.3764826059341431, -0.4000000059604645, -0.7900625467300415, -0.4000000059604645, -0.9212968945503235, -0.4000000059604645, -0.2480515837669373, -0.4000000059604645, -0.1096816062927246, -0.4000000059604645, -0.1096816062927246, -0.4000000059604645, 0.006711423397064209, -0.4000000059604645, -0.2480515837669373], 0
                    ]
                ]],

                ["front1", 15, !0, 1, 0, !1, 6978340448910338, [
                    ["images/mike-sheet0.png", 146871, 379, 327, 97, 152, 1, 0.4226804077625275, 1, [],
                        [-0.4226804077625275, -0.9981818199157715, 0.5773196220397949, -0.02690500020980835, 0.5773196220397949, -0.2643399834632874, -0.4226804077625275, -0.5494049787521362, 0.5773196220397949, 0, 0.5773196220397949, 0, -0.4226804077625275, 0, -0.4226804077625275, -0.5494049787521362], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 388, 153, 86, 152, 1, 0.4186046421527863, 1, [],
                        [-0.3979498445987701, -1, 0.5813953876495361, -0.1271200180053711, 0.5813953876495361, -0.3405010104179382, 0.5813953876495361, -0.5966880321502686, 0.5813953876495361, -0.06096601486206055, 0.5813953876495361, -0.07199198007583618, -0.3936411440372467, -0.05383199453353882, -0.4186046421527863, -0.5966880321502686], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 105, 328, 97, 152, 1, 0.4226804077625275, 1, [],
                        [-0.1086304187774658, -0.9550678730010986, 0.5773196220397949, -0.9981850981712341, 0.5773196220397949, -0.3798249959945679, 0.5773196220397949, -0.8986470103263855, -0.1010984182357788, 0], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 100, 154, 86, 152, 1, 0.4186046421527863, 1, [],
                        [], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 1, 330, 97, 152, 1, 0.4226804077625275, 1, [],
                        [-0.4226804077625275, -0.9981850981712341, -0.4226804077625275, -0.03043097257614136, -0.4226804077625275, -0.2670040130615234, -0.4226804077625275, -0.55103600025177, -0.3050784170627594, 0, -0.4226804077625275, 0, -0.4226804077625275, 0, -0.4226804077625275, -0.55103600025177], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 188, 154, 86, 152, 1, 0.4186046421527863, 1, [],
                        [-0.4186046421527863, -1, -0.4186046421527863, -0.1287050247192383, -0.4186046421527863, -0.3416979908943176, -0.4186046421527863, -0.5974199771881104, 0.5813953876495361, -0.06266999244689941, -0.4186046421527863, -0.07367599010467529, -0.4186046421527863, -0.0555490255355835, -0.4186046421527863, -0.5974199771881104], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 105, 328, 97, 152, 1, 0.4226804077625275, 1, [],
                        [-0.1086304187774658, -0.9550678730010986, 0.5773196220397949, -0.9981850981712341, 0.5773196220397949, -0.3798249959945679, 0.5773196220397949, -0.8986470103263855, -0.1010984182357788, 0], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 100, 154, 86, 152, 1, 0.4186046421527863, 1, [],
                        [], 0
                    ]
                ]],
                ["tylek", 5, !1, 1, 0, !1, 629645851856309, [
                    ["images/mike-sheet1.png", 147226, 361, 307, 86, 134, 1, 0.4767441749572754, 1.111940264701843, [],
                        [-0.4767441749572754, -1.111940264701843, 0.3674408197402954, -1.111940264701843, 0.5232558250427246, -0.7877413034439087, 0.5232558250427246, -0.6922842264175415, 0.5232558250427246, -0.1119402647018433, 0.3674408197402954, -0.868513286113739, -0.29963219165802, -0.2094912528991699, -0.3288331627845764, -0.6922842264175415], 0
                    ]
                ]],
                ["front", 3, !0, 1, 0, !1, 5068124152777912, [
                    ["images/mike-sheet1.png", 147226, 1, 1, 97, 152, 1, 0.4226804077625275, 0.9934210777282715, [],
                        [-0.4226804077625275, -0.9934210777282715, 0.02349558472633362, -0.2826520800590515, 0.3228906095027924, -0.7696470618247986, 0.4116766154766083, -0.4672740697860718, 0.5773196220397949, 0.006578922271728516, 0.02349558472633362, 0.006578922271728516, -0.356427401304245, -0.1079640984535217, -0.3440386056900024, -0.4672740697860718], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 100, 1, 97, 151, 1, 0.4226804077625275, 0.9933775067329407, [],
                        [-0.4226804077625275, -0.9933775067329407, 0.1937595903873444, -0.4034895300865173, 0.2256576120853424, -0.5758625268936157, 0.5773196220397949, -0.5100325345993042, 0.5773196220397949, 0.006622493267059326, 0.1937595903873444, -0.3877295255661011, 0.01739460229873657, -0.3415985107421875, -0.3591425120830536, -0.5100325345993042], 0
                    ]
                ]],
                ["gwiazda", 15, !1, 1, 0, !1, 0x38f3de0ad2c09, [
                    ["images/mike-sheet1.png", 147226, 199, 1, 95, 151, 1, 0.4526315927505493, 0.9933775067329407, [],
                        [-0.4526315927505493, -0.9933775067329407, 0.5473684072494507, -0.3938285112380981, 0.5473684072494507, -0.8930385112762451, 0.5473684072494507, -0.5830814838409424, 0.5473684072494507, -0.02476048469543457, 0.5473684072494507, -0.07766252756118774, 0.5473684072494507, -0.2147585153579712, 0.5473684072494507, -0.5830814838409424], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 1, 177, 102, 151, 1, 0.5686274766921997, 0.9933775067329407, [],
                        [-0.5686274766921997, -0.9933775067329407, 0.4313725233078003, -0.3938285112380981, 0.4313725233078003, -0.8930385112762451, 0.4313725233078003, -0.5830814838409424, 0.4313725233078003, -0.02476048469543457, 0.4313725233078003, -0.07766252756118774, -0.5323883891105652, -0.2147585153579712, -0.4672954678535461, -0.5830814838409424], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 387, 176, 104, 149, 1, 0.6538461446762085, 0.9932885766029358, [],
                        [-0.6538461446762085, -0.9932885766029358, 0.005727827548980713, -0.3996835947036743, 0.3461538553237915, -0.9063024520874023, 0.3461538553237915, -0.5917445421218872, 0.3461538553237915, -0.02513760328292847, 0.005727827548980713, -0.07882457971572876, -0.6538461446762085, -0.2179555892944336, -0.6538461446762085, -0.5917445421218872], 0
                    ]
                ]],
                ["gwiazda2", 12, !1, 1, 0, !1, 6680615434027085, [
                    ["images/mike-sheet1.png", 147226, 199, 1, 95, 151, 1, 0.4526315927505493, 0.9933775067329407, [],
                        [-0.4526315927505493, -0.9933775067329407, 0.5473684072494507, -0.3938285112380981, 0.5473684072494507, -0.8930385112762451, 0.5473684072494507, -0.5830814838409424, 0.5473684072494507, -0.02476048469543457, 0.5473684072494507, -0.07766252756118774, 0.5473684072494507, -0.2147585153579712, 0.5473684072494507, -0.5830814838409424], 0
                    ]
                ]],
                ["gwiazda3", 5, !1, 1, 0, !1, 0xcb9fd8cb3163d, [
                    ["images/mike-sheet0.png", 146871, 171, 1, 168, 173, 1, 0.5059523582458496, 0.5144508481025696, [],
                        [-0.5059523582458496, -0.5144508481025696, 0.4940476417541504, 0.1246931552886963, 0.4940476417541504, -0.5144508481025696, 0.4940476417541504, -0.2166358530521393, 0.4940476417541504, 0.4855491518974304, 0.4940476417541504, 0.4855491518974304, 0.4940476417541504, 0.4476571679115295, 0.4940476417541504, -0.2166358530521393], 0
                    ]
                ]],
                ["gwiazda4", 5, !1, 1, 0, !1, 0x82350d3eb6ead, [
                    ["images/mike-sheet0.png", 146871, 1, 1, 168, 174, 1, 0.5059523582458496, 0.5114942789077759, [],
                        [-0.5059523582458496, -0.5114942789077759, 0.4940476417541504, 0.08934372663497925, 0.4940476417541504, -0.5114942789077759, 0.4940476417541504, -0.5114942789077759, 0.4940476417541504, 0.4885057210922241, 0.4940476417541504, 0.4885057210922241, 0.4940476417541504, 0.4885057210922241, 0.4940476417541504, -0.5114942789077759], 0
                    ]
                ]],
                ["gwiazda25", 5, !1, 1, 0, !1, 7872386279139379, [
                    ["images/mike-sheet0.png", 146871, 341, 1, 158, 173, 1, 0.5316455960273743, 0.5144508481025696, [
                            ["Imagepoint 1", 0.4936708807945252, 0.9537572264671326]
                        ],
                        [-0.5316455960273743, -0.5144508481025696, 0.03041738271713257, -0.5144508481025696, 0.4683544039726257, -0.5144508481025696, 0.4683544039726257, -0.0847388505935669, 0.4683544039726257, 0.2979691624641419, 0.03041738271713257, 0.2979691624641419, 0.01070940494537354, -0.2868348360061646, 0.01070940494537354, -0.0847388505935669], 0
                    ]
                ]],
                ["tupniecie", 5, !1, 1, 0, !1, 5163967530474752, [
                    ["images/mike-sheet1.png", 147226, 296, 1, 90, 152, 1, 0.4333333373069763, 0.9934210777282715, [],
                        [-0.4333333373069763, -0.9934210777282715, 0.5666666626930237, -0.9934210777282715, -0.4333333373069763, -0.9934210777282715, -0.4333333373069763, 0.004760921001434326, -0.4333333373069763, 0.004760921001434326, -0.4333333373069763, -0.9934210777282715], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 276, 155, 88, 142, 1, 0.4545454680919647, 1, [],
                        [], 0
                    ]
                ]],
                ["paluszek", 5, !1, 1, 0, !1, 8627987525325723, [
                    ["images/mike-sheet1.png", 147226, 1, 155, 86, 150, 1, 0.3372093141078949, 0.9933333396911621, [],
                        [-0.3372093141078949, -0.9933333396911621, 0.6627906560897827, -0.9933333396911621, 0.6627906560897827, -0.4999213516712189, 0.6627906560897827, -0.06902533769607544, 0.6627906560897827, 0.006666660308837891, 0.05466967821121216, -0.07149434089660645, -0.06243032217025757, -0.4999213516712189], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 388, 1, 90, 150, 1, 0.3222222328186035, 0.9933333396911621, [],
                        [-0.3222222328186035, -0.9933333396911621, 0.6777777671813965, -0.9933333396911621, -0.2304602265357971, -0.4999213516712189, 0.6777777671813965, -0.06902533769607544, -0.2847298383712769, 0.006666660308837891, -0.3222222328186035, -0.07149434089660645, -0.3222222328186035, -0.4999213516712189], 0
                    ]
                ]],
                ["glowa2", 6, !0, 1, 0, !0, 5083498133372669, [
                    ["images/mike-sheet2.png", 116013, 361, 1, 70, 149, 3, 0.4142857193946838, 0.9932885766029358, [],
                        [0.5857142806053162, -0.9059311747550964, 0.5857142806053162, -0.9932885766029358, 0.5857142806053162, 0.006711423397064209, -0.4142857193946838, -0.9932885766029358, -0.4142857193946838, -0.9059311747550964, -0.4142857193946838, -0.9932885766029358, 0.5857142806053162, -0.9932885766029358, 0.5857142806053162, -0.9932885766029358], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 217, 152, 69, 149, 1, 0.4057970941066742, 0.9932885766029358, [],
                        [0.5942028760910034, -0.4219245910644531, 0.5942028760910034, 0.006711423397064209, 0.4973519146442413, -0.3668115735054016, 0.5942028760910034, -0.2730375528335571, 0.4436298906803131, -0.4219245910644531, -0.4057970941066742, -0.9932885766029358, 0.4973519146442413, -0.9932885766029358, 0.5942028760910034, -0.9932885766029358], 0
                    ]
                ]],
                ["scisniecie", 5, !1, 1, 0, !1, 0x3e63efe51b34a, [
                    ["images/mike-sheet2.png", 116013, 145, 1, 70, 150, 1, 0.4142857193946838, 0.9933333396911621, [],
                        [-0.3820426166057587, -0.9933333396911621, 0.00500527024269104, -0.9933333396911621, 0.5857142806053162, -0.9933333396911621, 0.5857142806053162, -0.5568643808364868, 0.3201022744178772, -0.1326133608818054, 0.00500527024269104, -0.06321531534194946, -0.4142857193946838, 0.006666660308837891, -0.2000967264175415, -0.5568643808364868], 0
                    ],
                    ["images/mike-sheet1.png", 147226, 1, 307, 81, 150, 1, 0.3580246865749359, 0.9933333396911621, [],
                        [-0.1580326855182648, -0.9177393317222595, 0.3413443267345429, -0.9933333396911621, 0.6419752836227417, -0.9933333396911621, 0.6419752836227417, -0.5194293260574341, 0.6419752836227417, -0.1379543542861939, 0.3413443267345429, -0.09160733222961426, -0.3580246865749359, -0.01456034183502197, 0.08898231387138367, -0.5194293260574341], 0
                    ]
                ]],
                ["lokiecFront", 5, !1, 1, 0, !1, 6634284546512116, [
                    ["images/mike-sheet0.png", 146871, 279, 327, 98, 151, 1, 0.4183673560619354, 1, [],
                        [-0.4183673560619354, -1, 0.139282613992691, -1, 0.5816326141357422, -1, 0.5816326141357422, -0.5908520221710205, 0.5816326141357422, -0.02830100059509277, 0.139282613992691, -0.003675997257232666, -0.4183673560619354, -0.5908520221710205], 0
                    ]
                ]],
                ["wykopy2", 10, !1, 1, 0, !1, 0xa97683d3d393d, [
                    ["images/mike-sheet2.png", 116013, 358, 152, 66, 150, 2, 0.4545454680919647, 0.9933333396911621, [],
                        [-0.4503960907459259, -0.9486444592475891, -0.4503960907459259, -0.7531613111495972, 0.5454545021057129, -0.7531613111495972, 0.5454545021057129, -0.604546308517456, 0.5454545021057129, -0.2472293376922607, -0.4503960907459259, 0.006666660308837891, -0.4503960907459259, -0.2472293376922607, -0.4503960907459259, -0.604546308517456], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 140, 153, 67, 142, 4, 0.5223880410194397, 1, [],
                        [-0.5223880410194397, -0.7744529843330383, 0.4776119589805603, -0.5383039712905884, 0.4776119589805603, -0.5383039712905884, 0.4776119589805603, -0.2208549976348877, 0.4776119589805603, 0, -0.5223880410194397, 0], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 72, 153, 66, 148, 1, 0.4848484992980957, 0.9932432174682617, [],
                        [-0.4848484992980957, -0.8735392093658447, 0.5151515007019043, -0.5970011949539185, 0.5151515007019043, -0.5970011949539185, 0.5151515007019043, -0.2252612113952637, 0.5151515007019043, 0.004890799522399902, -0.4848484992980957, 0.004890799522399902], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 204, 328, 73, 149, 2, 0.5068492889404297, 0.9932885766029358, [],
                        [0.4931507110595703, -0.9932885766029358, 0.4931507110595703, -0.9932885766029358, 0.4931507110595703, -0.9932885766029358, 0.4931507110595703, -0.5284285545349121, 0.4931507110595703, 0.006711423397064209, -0.5068492889404297, 0.006711423397064209], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 1, 153, 69, 142, 4, 0.4492753744125366, 1, [],
                        [], 0
                    ],
                    ["images/mike-sheet2.png", 116013, 426, 152, 66, 149, 1, 0.3939394056797028, 0.9932885766029358, [],
                        [-0.3939394056797028, -0.9316727519035339, -0.3939394056797028, -0.6269135475158691, 0.6018935441970825, -0.6269135475158691, 0.6018935441970825, -0.2172355651855469, -0.3939394056797028, 0.004866421222686768, -0.3939394056797028, 0.004866421222686768], 0
                    ]
                ]],
                ["upadek", 5, !1, 1, 0, !1, 0x7968f48a7b07c, [
                    ["images/mike-sheet0.png", 146871, 171, 176, 106, 150, 1, 0.4905660450458527, 0.9933333396911621, [],
                        [0.2170219719409943, -0.7670523524284363, 0.5094339847564697, -0.8509923219680786, 0.5094339847564697, -0.4933333396911621, 0.5094339847564697, -0.3418753147125244, 0.1769009530544281, -0.2068403363227844], 0
                    ],
                    ["images/mike-sheet0.png", 146871, 279, 176, 106, 149, 1, 0.4905660450458527, 0.9865771532058716, [],
                        [-0.4905660450458527, -0.7569571733474731, 0.4898369610309601, -0.8421411514282227, 0.1386459767818451, -0.4791831374168396, 0.1697999536991119, -0.3254821300506592, -0.4905660450458527, -0.1884471774101257], 0
                    ]
                ]]
            ],
            [
                ["move", Z, 511132111183535],
                ["LiteTween1tylek", Z, 7810291089551957],
                ["LiteTween2tylek", Z, 5480019998669046],
                ["LiteTween3tylek", Z, 5953282237376405],
                ["LiteTween4tylek", Z, 4807056474528961],
                ["LiteTween1gwiazda", Z, 0x44ea9e393e3a0],
                ["blinking", Z, 6817534163024458],
                ["fall", Z, 6876098653803446],
                ["powrot", Z, 0x5a9f2119091c4]
            ], !1, !1, 358022111459876, [], null
        ],
        ["t2", G, !1, [], 0, 0, null, null, [], !1, !1, 0x76a5a63fa64a1, [], null, [1]],
        ["t3", u, !1, [], 0, 0, null, [
                ["anim3", 5, !1, 1, 0, !1, 5501160428501583, [
                    ["images/stagepion-sheet0.png", 6500, 0, 0, 44, 250, 1, 0.5, 0.05200000107288361, [],
                        [-0.4777325987815857, 0.1314850002527237, 0.2636989951133728, 0.02942690253257752, 0.5, -0.05200000107288361, 0.5, 0.4390090107917786, -0.05954098701477051, 0.5435700416564941, 0.2636989951133728, 0.5435700416564941, -0.5, 0.7667509913444519, -0.5, 0.4390090107917786], 0
                    ]
                ]]
            ],
            [], !1, !1, 9823860999261998, [], null
        ],
        ["t4", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0x9ab7f1b6ef129, [
                    ["images/buttonsound-sheet0.png", 8780, 0, 0, 79, 68, 1, 0.08860759437084198, 0.720588207244873, [],
                        [], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 715121083383159, [
                    ["images/buttonsound-sheet1.png", 4332, 0, 0, 63, 70, 1, 0.0476190485060215, 0.6285714507102966, [],
                        [-0.0476190485060215, -0.6285714507102966, 0.364738941192627, -0.09556847810745239, 0.9523809552192688, -0.6285714507102966, 0.9523809552192688, 0.3055495619773865, 0.03612085059285164, -0.1391684412956238, -0.0476190485060215, -0.2932204604148865], 0
                    ]
                ]]
            ],
            [], !1, !1, 4827012799876385, [], null
        ],
        ["t5", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 6336946224701043, [
                    ["images/buttonmusic-sheet0.png", 9079, 0, 0, 84, 80, 1, 0.4285714328289032, 0.375, [],
                        [], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 4536157076306952, [
                    ["images/buttonmusic-sheet1.png", 5079, 0, 0, 82, 71, 1, 0.3048780560493469, 0.2535211145877838, [],
                        [], 0
                    ]
                ]]
            ],
            [], !1, !1, 5059239062499553, [], null
        ],
        ["t6", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 7162839729368871, [
                    ["images/logo-sheet0.png", 12800, 0, 0, 130, 62, 1, 0.5076923370361328, 0.4838709533214569, [],
                        [], 0
                    ]
                ]]
            ],
            [], !1, !1, 0xa69dc06377809, [], null
        ],
        ["t7", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0xc0e640661fd38, [
                    ["images/sprite12-sheet0.png", 116, 0, 0, 364, 61, 1, 0.6868131756782532, 0.311475396156311, [],
                        [0.1785718202590942, -0.2950820028781891, -0.1785711646080017, -0.2950820028781891, 0.3104398250579834, -0.01639339327812195, -0.1950551867485046, 0.1803275942802429, -1.788139343261719E-7, 0.688524603843689, -0.6868131756782532, 0.688524603843689, -0.6840659379959106, -0.01639339327812195], 1
                    ]
                ]]
            ],
            [], !1, !1, 7137602168729201, [], null
        ],
        ["t8", u, !1, [], 0, 0, null, [
                ["anim2", 5, !1, 1, 0, !1, 6163697971324064, [
                    ["images/stagepion2-sheet0.png", 5635, 0, 0, 44, 250, 1, 0.5454545617103577, 0.02400000020861626, [],
                        [-0.2092965543270111, 0.02719260007143021, 0.4499504566192627, 0.0830489993095398, -0.2054635584354401, 0.4670250117778778, 0.1382134556770325, 0.6953999996185303, -0.2092965543270111, 0.5074020028114319, -0.5454545617103577, 0.7386490106582642, -0.5454545617103577, 0.4670250117778778], 0
                    ]
                ]]
            ],
            [], !1, !1, 778386270134922, [], null
        ],
        ["t9", u, !1, [], 0, 0, null, [
                ["anim2", 5, !1, 1, 0, !1, 0x5f48bd0b43ba8, [
                    ["images/stagepoziom-sheet0.png", 308, 0, 0, 400, 8, 1, 0, 1.25, [],
                        [0.5257970094680786, -1.25, 0.9279860258102417, -1.205196857452393, 0.5281360149383545, -0.25, 0.7378039956092834, -0.25, 0.5257970094680786, -0.25, 0.2609840035438538, -0.25, 0, -0.25], 0
                    ]
                ]]
            ],
            [], !1, !1, 6862535422571154, [], null
        ],
        ["t10", u, !1, [0x9a0782bbf5d52], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5907185923511186, [
                    ["images/reflektor2-sheet0.png", 2899, 0, 0, 38, 57, 1, 0.4736842215061188, 0.05263157933950424, [],
                        [0.5263158082962036, -0.05263157933950424, 0.5263158082962036, -0.05263157933950424, 0.5263158082962036, -0.05263157933950424, 0.5263158082962036, -0.05263157933950424, -0.4736842215061188, 0.9473684430122375, -0.4736842215061188, -0.05263157933950424], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 6804801491257693, [
                    ["images/reflektor2-sheet1.png", 2403, 0, 0, 38, 57, 1, 0.4736842215061188, 0.05263157933950424, [],
                        [-0.4736842215061188, -0.05263157933950424, -0.4736842215061188, 0.9473684430122375, 0.5263158082962036, -0.05263157933950424, -0.4736842215061188, -0.05263157933950424, -0.4736842215061188, 0.9473684430122375, -0.4736842215061188, -0.05263157933950424], 0
                    ]
                ]]
            ],
            [], !1, !1, 7333250141210231, [], null
        ],
        ["t11", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0x641f6ee9a3b10, [
                    ["images/reflektor-sheet2.png", 2006, 0, 0, 31, 39, 1, 0.6774193644523621, -0.02564102597534657, [],
                        [], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 7024571108761956, [
                    ["images/reflektor-sheet1.png", 1968, 0, 0, 30, 45, 1, 0.4666666686534882, 0, [],
                        [], 0
                    ]
                ]],
                ["anim3", 5, !1, 1, 0, !1, 5050118376983195, [
                    ["images/reflektor-sheet0.png", 2862, 0, 0, 40, 60, 1, 0.425000011920929, 0.0833333358168602, [],
                        [-0.3637004196643829, 0.07701066881418228, 0.1487429738044739, -0.0833333358168602, 0.3205519914627075, 0.4786436855792999, -0.1535820066928864, 0.4098486602306366, 0.574999988079071, 0.9166666865348816, 0.1487429738044739, 0.9166666865348816, -0.425000011920929, 0.4098486602306366], 0
                    ]
                ]]
            ],
            [], !1, !1, 9868759550360008, [], null
        ],
        ["t12", u, !1, [], 0, 0, null, [
                ["anim2", 5, !1, 1, 0, !1, 6424379054271227, [
                    ["images/stagepoziom2-sheet0.png", 294, 0, 0, 400, 8, 1, 0.002499999944120646, 1.25, [],
                        [0.4843670129776001, -1.25, 0.8229870200157166, -1.25, 0.4863350093364716, -0.530364990234375, 0.6628640294075012, -0.25, 0.4843670129776001, -0.25, 0.2614090144634247, -0.25, -0.002499999944120646, -0.530364990234375], 0
                    ]
                ]]
            ],
            [], !1, !1, 8429736464663951, [], null
        ],
        ["t13", u, !1, [], 2, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5869445681409094, [
                    ["images/przeslona-sheet0.png", 947, 0, 0, 877, 998, 1, 0.5222349166870117, 0.5, [],
                        [-0.5211049914360046, -0.4990089237689972, 0.4166680574417114, -0.3933719992637634, 0.2947890758514404, -0.01745501160621643, 0.2947890758514404, -0.01199400424957275, -0.5211049914360046, 0.4990090131759644, -0.5211049914360046, -0.01745501160621643], 1
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0xd54f41aaf6fbd],
                ["LiteTween2", Z, 8824534091763123]
            ], !1, !1, 945408858544049, [], null
        ],
        ["t14", u, !1, [9395818164991114], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5944418665244442, [
                    ["images/reflektorlight-sheet0.png", 47485, 0, 0, 129, 573, 1, 0.4418604671955109, 0.09947644174098969, [],
                        [-0.4418604671955109, -0.09947644174098969, -0.01863646507263184, 0.9005235433578491, -0.4418604671955109, 0.9005235433578491, -0.4418604671955109, 0.9005235433578491, -0.4418604671955109, 0.9005235433578491, -0.4418604671955109, 0.9005235433578491], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0x3b29e38fb99b6]
            ], !1, !1, 9618298504551324, [], null
        ],
        ["t15", u, !1, [], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 8685527831005193, [
                    ["images/hands-sheet0.png", 5073, 0, 0, 210, 215, 1, 0, 0, [],
                        [0.2747470140457153, 0.1563500016927719, 1, 0.1103390008211136, 1, 0.1621010005474091, 1, 0.4812999963760376, 1, 1, 1, 1, 0, 1, 0, 0.4812999963760376], 0
                    ]
                ]],
                ["anim2", 12, !0, 1, 0, !1, 0x924aaa662353c, [
                    ["images/hands-sheet1.png", 3601, 0, 0, 210, 215, 1, 0, 0, [],
                        [0.2273270040750504, 0.2747560143470764, 0.6792680025100708, 0.07909750193357468, 0.6951389908790588, 0.6627110242843628, 0.4667119979858398, 0.5480729937553406, 1, 1, 0.6792680025100708, 1, 0.2188249975442886, 0.829122006893158, 0, 0.5480729937553406], 0
                    ],
                    ["images/hands-sheet2.png", 3165, 0, 0, 210, 215, 1, 0, 0, [],
                        [], 0
                    ]
                ]]
            ],
            [
                ["Sine", rc, 0xf5c24feb4c0ea]
            ], !1, !1, 0x62eeb0e9e3297, [], null
        ],
        ["t16", u, !1, [], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5514082087394841, [
                    ["images/handsbg-sheet1.png", 46782, 0, 0, 431, 228, 1, 0.4918793439865112, 0.7982456088066101, [],
                        [-0.467472642660141, -0.7938596606254578, 4.186630249023438E-4, -0.7938596606254578, 0.1572906374931335, -0.2290886044502258, -0.2756223380565643, -0.3489096164703369, 0.5058006644248962, 0.2017543911933899, 4.186630249023438E-4, 0.2017543911933899, -0.4872389733791351, -0.3489096164703369], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 0x53d18249619c5, [
                    ["images/handsbg-sheet0.png", 41050, 0, 0, 429, 429, 1, 0.501165509223938, 0.501165509223938, [],
                        [-0.3846155107021332, -0.3444254994392395, -0.00233149528503418, -0.3036735057830811, 0.4125874638557434, -0.3851785063743591, 0.496503472328186, -0.002732515335083008, 0.4941725134849548, 0.4925644993782044, -0.4965035021305084, 0.4925644993782044, -0.4988345205783844, -0.002732515335083008], 0
                    ]
                ]]
            ],
            [
                ["Sine", rc, 0xb637affe43f35]
            ], !1, !1, 0x648c7e7d4dd51, [], null
        ],
        ["t17", u, !1, [], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5153761035347196, [
                    ["images/shaker-sheet0.png", 92, 0, 0, 8, 8, 1, 0.5, 0.5, [],
                        [], 1
                    ]
                ]]
            ],
            [
                ["ScrollTo", Qc, 0xfb383eb273eaa]
            ], !1, !1, 9791373431150726, [], null
        ],
        ["t18", u, !1, [], 2, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 7935718566238955, [
                    ["images/halo-sheet0.png", 30188, 117, 1, 93, 170, 1, 0.4838709533214569, 0.5529412031173706, [],
                        [0.1391120254993439, -0.180580198764801, 0.06777402758598328, -0.5529412031173706, 0.5113509893417358, -0.4617657959461212, 0.1926150619983673, -0.01486819982528687, 0.06777402758598328, -0.1475872099399567, -0.4838709533214569, 0.4470587968826294], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 0xdd6ed1b8f6a49, [
                    ["images/halo-sheet0.png", 30188, 1, 1, 114, 206, 1, 0.5, 0.5388349294662476, [],
                        [0.2147809863090515, -0.2327369153499603, 0.1332520246505737, -0.5388349294662476, 0.5, -0.5388349294662476, 0.2759289741516113, -0.03726792335510254, 0.1332520246505737, -0.1938199400901794, -0.4971988797187805, 0.4611650705337524], 0
                    ]
                ]]
            ],
            [
                ["Sine", rc, 0xdf00c39283881],
                ["LiteTween", Z, 7143852941541749]
            ], !1, !1, 0xbeee390b1cd8e, [], null
        ],
        ["t19", P, !1, [], 3, 0, ["images/platform.png", 389, 0], null, [
            ["LiteTween", Z, 0x5db1f75145ea9],
            ["LiteTween2", Z, 9551361193697640],
            ["LiteTween3", Z, 0xf243a882d2a17]
        ], !1, !1, 0x62f468e5f4423, [], null],
        ["t20", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5760443103579672, [
                    ["images/buttonhome-sheet0.png", 8401, 0, 0, 93, 83, 1, 0.4838709533214569, 0.4698795080184937, [],
                        [-0.4838709533214569, -0.4698795080184937, 5.100369453430176E-4, -0.4174520075321198, 0.3323440253734589, -0.4174520075321198, 0.4426150619983673, 0.4870094656944275, 5.100369453430176E-4, 0.3351324796676636, -0.3006919622421265, 0.3827354907989502, -0.4838709533214569, -0.006401509046554565], 0
                    ]
                ]]
            ],
            [], !1, !1, 0xff3f91b7268a2, [], null
        ],
        ["t21", u, !1, [], 2, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 4759433176709682, [
                    ["images/menumike-sheet0.png", 44604, 0, 0, 350, 518, 1, 0.5057142972946167, 0.5115830302238464, [],
                        [-0.5057142972946167, -0.5115830302238464, 0.007805705070495606, -0.5115830302238464, 0.4942857027053833, -0.5115830302238464, 0.4730017185211182, -0.0588800311088562, 0.38522869348526, 0.3004689812660217, 0.007805705070495606, 0.3216079473495483, -0.3345082998275757, 0.2856729626655579, -0.3520622849464417, -0.0588800311088562], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 502378418130509],
                ["LiteTween2", Z, 0x72334f3c3e343]
            ], !1, !1, 381777103995995, [], null
        ],
        ["t22", u, !1, [], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0xd633c2b4795ec, [
                    ["images/buttonplay-sheet0.png", 20648, 0, 0, 216, 276, 1, 0.4583333432674408, 0.510869562625885, [],
                        [-0.388888955116272, -0.2318845689296722, 0.4537036716938019, -0.4637680649757385, 0.4629626572132111, 0.05797141790390015, -0.4027777314186096, 0.4456524252891541], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 613352149506318]
            ], !1, !1, 437511449147536, [], null
        ],
        ["t23", u, !1, [], 4, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0xb8f84a4fb078d, [
                    ["images/buttoncredits-sheet0.png", 12879, 0, 0, 161, 153, 1, 0.4844720363616943, 0.4379085004329681, [],
                        [-0.3726710379123688, -0.1895425021648407, 0.3975159525871277, -0.3267974853515625, 0.3975159525871277, 0.2091505229473114, -0.3726710379123688, 0.4575165212154388], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 297370518496718, [
                    ["images/buttoncredits-sheet1.png", 12961, 0, 0, 161, 153, 1, 0.4844720363616943, 0.4379085004329681, [],
                        [-0.3726710379123688, -0.1895425021648407, 0.3975159525871277, -0.3267974853515625, 0.3975159525871277, 0.2091505229473114, -0.3726710379123688, 0.4575165212154388], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 7186971755226753],
                ["LiteTween2", Z, 0xa5262774c2630],
                ["LiteTween3", Z, 7676404340436959],
                ["LiteTween4", Z, 8760890887651802]
            ], !1, !1, 544011625450347, [], null
        ],
        ["t24", P, !1, [], 2, 0, ["images/stage.png", 431, 0], null, [
            ["Pin2", R, 9850806561680944],
            ["dojazd", Z, 9323143675376196]
        ], !1, !1, 0x56dc2791f1fb1, [], null],
        ["t25", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 6058935618377802, [
                    ["images/stagepoziomui-sheet0.png", 5071, 1, 37, 1066, 33, 1, 0.5037523508071899, 0.2727272808551788, [],
                        [0.2525896430015564, -0.2727272808551788, 0.4962476491928101, -0.2727272808551788, -0.4773105382919312, -0.2727272808551788, -0.2791433334350586, -0.2727272808551788, 0.2525896430015564, -0.2727272808551788, -0.1737833619117737, -0.2727272808551788, -0.5037523508071899, -0.2727272808551788], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 0x80d3ac84ea680, [
                    ["images/stagepoziomui-sheet0.png", 5071, 1, 1, 1066, 34, 1, 0.5037523508071899, 0.2647058963775635, [],
                        [0.02204465866088867, -0.2647058963775635, 0.4242336750030518, -0.2199026942253113, 0.02438366413116455, 0.7352941036224365, 0.2340516448020935, 0.7352941036224365, 0.02204465866088867, 0.7352941036224365, -0.2427683472633362, 0.7352941036224365, -0.5037523508071899, 0.7352941036224365], 0
                    ]
                ]]
            ],
            [], !1, !1, 5788041406996015, [], null
        ],
        ["t26", u, !1, [6301568546568297], 4, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 4999327217287335, [
                    ["images/refresh-sheet0.png", 32587, 1, 1, 369, 332, 1, 0.1300812959671021, 0.2349397540092468, [],
                        [0.4065036773681641, 0.3614462614059448, 0.368563711643219, 0.09036123752593994, 0.6883466839790344, -0.03313274681568146, 0.6287267208099365, 0.2650602459907532, 0.542005717754364, 0.4006022214889526, 0.368563711643219, 0.5632532238960266, 0.4579946994781494, 0.1114462316036224, 0.4363147020339966, 0.2650602459907532], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 7592110826854313, [
                    ["images/refresh-sheet0.png", 32587, 1, 335, 199, 144, 1, 1.015075325965881, -0.875, [],
                        [-0.8340322971343994, 1.703799962997437, -0.6265243291854858, 0.875, -0.2504743337631226, 1.47166895866394, -0.01507532596588135, 1.416460037231445, -0.2504743337631226, 1.361250042915344, -0.6265243291854858, 1.802926063537598, -1.015075325965881, 1.799161911010742, -1.015075325965881, 1.416460037231445], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 5819720602799822],
                ["LiteTween2", Z, 7724506842155549],
                ["LiteTween3", Z, 0xb27bcc360a284],
                ["Rotate", qc, 8155123122811877]
            ], !1, !1, 7175468100241245, [], null
        ],
        ["t27", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 875002687015703, [
                    ["images/scoreboard-sheet0.png", 96230, 0, 0, 470, 446, 1, 0.5, 0.5, [],
                        [], 0
                    ]
                ]]
            ],
            [], !1, !1, 0xb896331ffc526, [], null
        ],
        ["t28", u, !1, [], 1, 0, null, [
                ["Default", 10, !0, 1, 0, !1, 4951880928822921, [
                    ["images/comet-sheet0.png", 54246, 334, 1, 332, 560, 1, 0.5, 0.1428571492433548, [],
                        [0.5, -0.1428571492433548, 0.5, -0.1428571492433548, 0.5, -0.08085635304450989, 0.5, 0.3547268509864807, 0.5, 0.06928284466266632, 0.5, 0.07581084966659546, -0.5, 0.8571428656578064, -0.5, 0.3547268509864807], 0
                    ],
                    ["images/comet-sheet0.png", 54246, 1, 1, 331, 567, 1, 0.5015105605125427, 0.1111111119389534, [],
                        [], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 906298380165731]
            ], !1, !1, 0xc2e02b08a7b4, [], null
        ],
        ["t29", u, !1, [], 2, 0, null, [
                ["Default", 10, !1, 1, 0, !1, 8061046281028059, [
                    ["images/scoreflash-sheet0.png", 89421, 0, 0, 620, 618, 1, 0.5, 0.5016181468963623, [],
                        [-0.298229992389679, -0.4442121386528015, 0.04230797290802002, -0.5016181468963623, 0.4477689862251282, -0.5016181468963623, 0.1918200254440308, -0.07725715637207031, 0.0685269832611084, -0.4134577512741089, 0.04230797290802002, -0.4498037397861481, -0.1175050139427185, -0.1143021583557129, -0.05101999640464783, -0.07725715637207031], 0
                    ],
                    ["images/scoreflash-sheet1.png", 100309, 0, 0, 620, 618, 1, 0.5, 0.5016181468963623, [],
                        [-0.298229992389679, -0.4442121386528015, 0.04230797290802002, -0.5016181468963623, 0.4477689862251282, -0.5016181468963623, 0.1918200254440308, -0.07725715637207031, 0.0685269832611084, -0.4134577512741089, 0.04230797290802002, -0.4498037397861481, -0.1175050139427185, -0.1143021583557129, -0.05101999640464783, -0.07725715637207031], 0
                    ],
                    ["images/scoreflash-sheet2.png", 120880, 0, 0, 620, 618, 1, 0.5, 0.5016181468963623, [],
                        [-0.298229992389679, -0.4442121386528015, 0.04230797290802002, -0.5016181468963623, 0.4477689862251282, -0.5016181468963623, 0.1918200254440308, -0.07725715637207031, 0.0685269832611084, -0.4134577512741089, 0.04230797290802002, -0.4498037397861481, -0.1175050139427185, -0.1143021583557129, -0.05101999640464783, -0.07725715637207031], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 6536595621788936],
                ["LiteTween2", Z, 4912408845668891]
            ], !1, !1, 0x4ab6acddd2616, [], null
        ],
        ["t30", u, !1, [], 2, 0, null, [
                ["Default", 1, !0, 1, 0, !1, 5480642365403041, [
                    ["images/menutitle-sheet0.png", 280316, 0, 0, 566, 410, 1, 0.5106006860733032, 0.8999999761581421, [],
                        [-0.5106006860733032, -0.8999999761581421, -0.2019536793231964, -0.8999999761581421, 0.4893993139266968, -0.8999999761581421, 0.4893993139266968, -0.7887259721755981, 0.4893993139266968, 0.1000000238418579, -0.2019536793231964, -0.7260319590568542, -0.5106006860733032, -0.8087869882583618, -0.5106006860733032, -0.7887259721755981], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 755761573461548],
                ["LiteTween2", Z, 0xe014b32a898bd]
            ], !1, !1, 6988160495689107, [], null
        ],
        ["t31", C, !1, [], 0, 0, null, null, [], !1, !1, 7319402563279856, [], null, [0, 0, 1, 1, 600, 600, 1E4, 1, 5E3, 1]],
        ["t32", u, !1, [], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0xebd2b68b73f9b, [
                    ["images/scorenew-sheet0.png", 14304, 0, 0, 134, 84, 1, 0.5074626803398132, 0.4761904776096344, [],
                        [-0.3745226860046387, -0.3548874855041504, -0.003815650939941406, -0.4086597859859467, 0.4170823097229004, -0.4412135779857636, 0.4686203002929688, -0.006097465753555298, 0.02818530797958374, -0.2418214827775955, -0.003815650939941406, -0.05463749170303345, -0.2194016873836517, 0.07528653740882874, -0.2443286776542664, -0.006097465753555298], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 8504369028128336]
            ], !1, !1, 0x67f06a4a88108, [], null
        ],
        ["t33", oc, !1, [], 0, 0, null, null, [], !1, !1, 9289062822291492, [], null, []],
        ["t34", nc, !1, [], 1, 0, ["images/fontbest.png", 4846, 0], null, [
            ["LiteTween", Z, 0x78f1972dddfaf]
        ], !1, !1, 9062816310200714, [], null],
        ["t35", nc, !1, [], 1, 0, ["images/fontscoreb.png", 7070, 0], null, [
            ["LiteTween", Z, 5009389946518085]
        ], !1, !1, 6740267476272131, [], null],
        ["t36", nc, !1, [], 1, 0, ["images/fontscore.png", 61375, 0], null, [
            ["LiteTween", Z, 330619327785632]
        ], !1, !1, 542076638253294, [], null],
        ["t37", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 6492974875292142, [
                    ["images/tut-sheet0.png", 18692, 0, 0, 425, 156, 1, 0.4752941131591797, 0.5256410241127014, [],
                        [-0.4752941131591797, -0.4648858308792114, 0.5000758767127991, -0.484969824552536, -0.00998610258102417, -5.910396575927734E-4, -0.00998610258102417, -0.2994880080223084, -0.4752941131591797, 0.4743589758872986, -0.4752941131591797, -5.910396575927734E-4], 0
                    ]
                ]]
            ],
            [], !1, !1, 7732951385085432, [], null
        ],
        ["t38", P, !1, [], 2, 0, ["images/platform2.png", 389, 0], null, [
            ["LiteTween", Z, 0xfb703988c4222],
            ["LiteTween2", Z, 0xbeab55e11b90f]
        ], !1, !1, 0xe8e51d5804cbf, [], null],
        ["t39", u, !1, [], 1, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0x50bac8c6a7f57, [
                    ["images/buttonok-sheet0.png", 27370, 0, 0, 197, 119, 1, 0.4974619150161743, 0.5042017102241516, [],
                        [], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0x9bdd3569676be]
            ], !1, !1, 400663490985988, [], null
        ],
        ["t40", u, !1, [], 1, 0, null, [
                ["Default", 6, !1, 1, 0, !1, 5524937990971268, [
                    ["images/taphand-sheet0.png", 1740, 1, 1, 98, 151, 1, 0.3163265287876129, 0.9668874144554138, [],
                        [-0.1224485337734222, -0.8410594463348389, 0.1836734712123871, -0.5960264205932617, 0.09183648228645325, -0.5827814340591431, 0.5714284181594849, -0.4701984226703644, 0.5510205030441284, -0.05298042297363281, 0.1836734712123871, -4.172325134277344E-7, -0.1020405292510986, -0.1059604287147522, -0.132653534412384, -0.4701984226703644], 0
                    ],
                    ["images/taphand-sheet0.png", 1740, 101, 1, 98, 138, 1, 0.3163265287876129, 0.9637681245803833, [],
                        [-0.1122445315122604, -0.8188401460647583, 0.1836734712123871, -0.6521741151809692, 0.2244894802570343, -0.6376811265945435, 0.6122444868087769, -0.4637681245803833, 0.5510205030441284, -0.05797111988067627, 0.1836734712123871, -1.192092895507813E-7, -0.1020405292510986, -0.115942120552063, -0.1428575217723846, -0.4637681245803833], 0
                    ]
                ]],
                ["anim2", 6, !1, 1, 0, !1, 352677226053499, [
                    ["images/taphand-sheet0.png", 1740, 101, 1, 98, 138, 1, 0.3163265287876129, 0.9637681245803833, [],
                        [-0.1122445315122604, -0.8188401460647583, 0.1836734712123871, -0.6521741151809692, 0.2244894802570343, -0.6376811265945435, 0.6122444868087769, -0.4637681245803833, 0.5510205030441284, -0.05797111988067627, 0.1836734712123871, -1.192092895507813E-7, -0.1020405292510986, -0.115942120552063, -0.1428575217723846, -0.4637681245803833], 0
                    ],
                    ["images/taphand-sheet0.png", 1740, 1, 1, 98, 151, 1, 0.3163265287876129, 0.9668874144554138, [],
                        [-0.1224485337734222, -0.8410594463348389, 0.1836734712123871, -0.5960264205932617, 0.09183648228645325, -0.5827814340591431, 0.5714284181594849, -0.4701984226703644, 0.5510205030441284, -0.05298042297363281, 0.1836734712123871, -4.172325134277344E-7, -0.1020405292510986, -0.1059604287147522, -0.132653534412384, -0.4701984226703644], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 8900265583195774]
            ], !1, !1, 7700885979884185, [], null
        ],
        ["t41", u, !1, [], 2, 0, null, [
                ["Default", 10, !1, 1, 0, !1, 0x6ad074debbf43, [
                    ["images/tapshadow-sheet0.png", 11251, 0, 0, 168, 168, 1, 0.5, 0.5, [],
                        [-0.5, -0.5, -0.4880951941013336, -0.5, -0.119047999382019, -0.5, -0.5, -0.5, -0.4880951941013336, -0.5, -0.5, 0.02381002902984619], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 859887752543172],
                ["LiteTween2", Z, 0xe74501590fd05]
            ], !1, !1, 0x943356f3d29d5, [], null
        ],
        ["t42", u, !1, [], 3, 0, null, [
                ["Default", 10, !1, 1, 0, !1, 6877722944744515, [
                    ["images/tapshadow-sheet0.png", 11251, 0, 0, 168, 168, 1, 0.5, 0.5, [],
                        [-0.5, -0.5, -0.4880951941013336, -0.5, -0.119047999382019, -0.5, -0.5, -0.5, -0.4880951941013336, -0.5, -0.5, 0.02381002902984619], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0x4be3c0cf9b4db],
                ["LiteTween2", Z, 8897127518572163],
                ["LiteTween3", Z, 0xa309a8a0b0190]
            ], !1, !1, 9945922015122644, [], null
        ],
        ["t43", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 0xab3b355568a3f, [
                    ["images/creditsboard-sheet0.png", 72524, 0, 0, 505, 458, 1, 0.4851485192775726, 0.5021833777427673, [],
                        [-0.4395027160644531, -0.4492584764957428, -0.001428514719009399, -0.4492584764957428, 0.2544074952602387, -0.1879843771457672, 0.047636479139328, -0.001716375350952148, 0.286824494600296, 0.2320546507835388, -0.001428514719009399, 0.4978166222572327, -0.4851485192775726, 0.4978166222572327, -0.4851485192775726, -0.001716375350952148], 0
                    ]
                ]]
            ],
            [], !1, !1, 8152883884149061, [], null
        ],
        ["t44", u, !1, [], 2, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 5067511189409339, [
                    ["images/przeslona-sheet0.png", 947, 0, 0, 877, 998, 1, 0.5222349166870117, 0.5, [],
                        [-0.5211049914360046, -0.4990089237689972, 0.4166680574417114, -0.3933719992637634, 0.2947890758514404, -0.01745501160621643, 0.2947890758514404, -0.01199400424957275, -0.5211049914360046, 0.4990090131759644, -0.5211049914360046, -0.01745501160621643], 1
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0x72b42ca36f613],
                ["LiteTween2", Z, 6754275944369626]
            ], !1, !1, 0xafa34aeeb7401, [], null
        ],
        ["t45", u, !1, [5363819871492451], 2, 0, null, [
                ["anim1", 5, !1, 1, 0, !1, 0x4ceca6e0cff54, [
                    ["images/woosh-sheet0.png", 46946, 1, 1, 62, 106, 1, 0.5161290168762207, 0.5, [],
                        [0.4838709831237793, -0.5, 0.4838709831237793, -0.5, 0.4838709831237793, -0.5, 0.4838709831237793, -0.5, 0.4838709831237793, 0.5, 0.4838709831237793, 0.5, 0.4838709831237793, -0.5, 0.4838709831237793, -0.5], 0
                    ]
                ]],
                ["anim2", 5, !1, 1, 0, !1, 6032293023280161, [
                    ["images/woosh-sheet0.png", 46946, 65, 1, 62, 97, 1, 0.5, 0.5051546096801758, [],
                        [0.5, -0.5051546096801758, 0.5, -0.5051546096801758, 0.5, -0.5051546096801758, 0.5, -0.5051546096801758, 0.5, 0.4948453903198242, 0.5, 0.4948453903198242, 0.5, -0.5051546096801758, 0.5, -0.5051546096801758], 0
                    ]
                ]],
                ["anim3", 5, !1, 1, 0, !1, 7219609722493717, [
                    ["images/woosh-sheet0.png", 46946, 129, 73, 64, 90, 1, 0.515625, 0.5222222208976746, [],
                        [0.484375, -0.5222222208976746, 0.484375, -0.5222222208976746, 0.484375, -0.5222222208976746, 0.484375, -0.5222222208976746, 0.484375, 0.4777777791023254, 0.484375, 0.4777777791023254, 0.484375, -0.5222222208976746, 0.484375, -0.5222222208976746], 0
                    ]
                ]],
                ["anim4", 5, !1, 1, 0, !1, 5834924582309376, [
                    ["images/woosh-sheet1.png", 37838, 1, 1, 62, 83, 1, 0.5, 0.5060241222381592, [],
                        [0.2306240200996399, -0.5060241222381592, 0.5, -0.5060241222381592, 0.5, -0.5060241222381592, 0.5, -0.5060241222381592, 0.5, 0.4939758777618408, 0.5, 0.4939758777618408, 0.5, -0.3912221193313599, 0.5, -0.5060241222381592], 0
                    ]
                ]],
                ["anim5", 5, !1, 1, 0, !1, 0xdba225785272a, [
                    ["images/woosh-sheet0.png", 46946, 195, 73, 59, 77, 1, 0.508474588394165, 0.5194805264472961, [],
                        [0.1325414180755615, -0.5194805264472961, 0.491525411605835, -0.5194805264472961, 0.491525411605835, -0.5194805264472961, 0.491525411605835, -0.5194805264472961, 0.491525411605835, 0.4805194735527039, 0.491525411605835, 0.4805194735527039, 0.491525411605835, 0.4805194735527039, 0.491525411605835, -0.5194805264472961], 0
                    ]
                ]],
                ["anim6", 5, !1, 1, 0, !1, 0x3fbb6adfc22df, [
                    ["images/woosh-sheet1.png", 37838, 140, 66, 64, 73, 1, 0.484375, 0.4931506812572479, [],
                        [-0.484375, -0.4931506812572479, 0.515625, -0.4931506812572479, 0.515625, -0.4931506812572479, 0.515625, -0.4931506812572479, 0.515625, 0.5068492889404297, 0.515625, 0.5068492889404297, 0.515625, 0.5068492889404297, 0.515625, -0.4931506812572479], 0
                    ]
                ]],
                ["anim7", 5, !1, 1, 0, !1, 7953095455954477, [
                    ["images/woosh-sheet0.png", 46946, 1, 179, 69, 70, 1, 0.4927536249160767, 0.5, [],
                        [-0.2696966230869293, -0.5, 0.5072463750839233, -0.5, 0.5072463750839233, -0.5, 0.5072463750839233, -0.4023301899433136, 0.5072463750839233, 0.5, 0.5072463750839233, 0.5, 0.5072463750839233, 0.3396540284156799, 0.07543039321899414, -0.4023301899433136], 0
                    ]
                ]],
                ["anim8", 5, !1, 1, 0, !1, 8574142711780487, [
                    ["images/woosh-sheet1.png", 37838, 65, 69, 69, 67, 1, 0.4927536249160767, 0.5223880410194397, [],
                        [-0.2223906219005585, -0.5223880410194397, 0.5072463750839233, -0.5223880410194397, 0.5072463750839233, -0.5223880410194397, 0.5072463750839233, -0.451666533946991, 0.5072463750839233, 0.4776119589805603, 0.5072463750839233, 0.4776119589805603, 0.5072463750839233, 0.2940089702606201, 0.1375803947448731, -0.451666533946991], 0
                    ]
                ]],
                ["anim9", 5, !1, 1, 0, !1, 0x46177338c4498, [
                    ["images/woosh-sheet1.png", 37838, 145, 141, 65, 63, 1, 0.4769230782985687, 0.4920634925365448, [],
                        [-0.1762060821056366, -0.4920634925365448, 0.5230768918991089, -0.4920634925365448, 0.5230768918991089, -0.4920634925365448, 0.5230768918991089, -0.4473669826984406, 0.5230768918991089, 0.5079364776611328, 0.5230768918991089, 0.5079364776611328, 0.5230768918991089, 0.2906915247440338, 0.1547048985958099, -0.4473669826984406], 0
                    ]
                ]],
                ["anim10", 5, !1, 1, 0, !1, 0x8111d4c583df7, [
                    ["images/woosh-sheet1.png", 37838, 75, 141, 68, 64, 1, 0.5147058963775635, 0.515625, [],
                        [-0.2079018950462341, -0.515625, 0.4852941036224365, -0.515625, 0.4852941036224365, -0.515625, 0.4852941036224365, -0.4192491173744202, 0.4852941036224365, 0.484375, 0.4852941036224365, 0.484375, 0.4852941036224365, 0.260903000831604, 0.1121751070022583, -0.4192491173744202], 0
                    ]
                ]],
                ["anim11", 5, !1, 1, 0, !1, 6088888142569519, [
                    ["images/woosh-sheet1.png", 37838, 140, 1, 76, 63, 1, 0.5, 0.523809552192688, [],
                        [-0.1610679924488068, -0.523809552192688, 0.5, -0.523809552192688, 0.5, -0.523809552192688, 0.5, -0.4862674474716187, 0.5, 0.476190447807312, 0.5, 0.476190447807312, 0.5, 0.2674944400787354, 0.14553302526474, -0.4862674474716187], 0
                    ]
                ]],
                ["anim12", 5, !1, 1, 0, !1, 4799008425094893, [
                    ["images/woosh-sheet1.png", 37838, 1, 138, 72, 63, 1, 0.4861111044883728, 0.4920634925365448, [],
                        [-0.2642911076545715, -0.4920634925365448, 0.5138888955116272, -0.4920634925365448, 0.5138888955116272, -0.4920634925365448, 0.5138888955116272, -0.463239997625351, 0.5138888955116272, 0.5079364776611328, 0.5138888955116272, 0.5079364776611328, 0.5138888955116272, 0.2748185098171234, 0.08423787355422974, -0.463239997625351], 0
                    ]
                ]],
                ["anim13", 5, !1, 1, 0, !1, 4940757407979346, [
                    ["images/woosh-sheet1.png", 37838, 65, 1, 73, 66, 1, 0.5068492889404297, 0.5, [],
                        [-0.221707284450531, -0.5, 0.4931507110595703, -0.5, 0.4931507110595703, -0.5, 0.4931507110595703, -0.3221459984779358, 0.4931507110595703, 0.5, 0.4931507110595703, 0.5, 0.4931507110595703, 0.4348269701004028, 0.153616726398468, -0.3221459984779358], 0
                    ]
                ]],
                ["anim14", 5, !1, 1, 0, !1, 0xb786dc1f69c2, [
                    ["images/woosh-sheet0.png", 46946, 168, 165, 81, 65, 1, 0.5185185074806213, 0.4923076927661896, [],
                        [-0.321288526058197, -0.4923076927661896, 0.4814814925193787, -0.4923076927661896, 0.4814814925193787, -0.4923076927661896, 0.4814814925193787, -0.3539696931838989, 0.4814814925193787, 0.5076923370361328, 0.4814814925193787, 0.5076923370361328, 0.4814814925193787, 0.3385483324527741, 0.04857951402664185, -0.3539696931838989], 0
                    ]
                ]],
                ["anim15", 5, !1, 1, 0, !1, 0xc65ad8a06485, [
                    ["images/woosh-sheet0.png", 46946, 1, 109, 83, 68, 1, 0.4939759075641632, 0.529411792755127, [],
                        [-0.2267069220542908, -0.529411792755127, 0.5060241222381592, -0.529411792755127, 0.5060241222381592, -0.529411792755127, 0.5060241222381592, -0.2290928065776825, 0.5060241222381592, 0.4705882072448731, 0.5060241222381592, 0.4705882072448731, 0.5060241222381592, 0.338306188583374, 0.0972261130809784, -0.2290928065776825], 0
                    ]
                ]],
                ["anim16", 5, !1, 1, 0, !1, 0xe122c83b2712e, [
                    ["images/woosh-sheet0.png", 46946, 86, 165, 80, 70, 1, 0.5249999761581421, 0.5428571701049805, [],
                        [-0.2457619905471802, -0.5428571701049805, 0.4750000238418579, -0.5428571701049805, 0.4750000238418579, -0.5428571701049805, 0.4750000238418579, -0.3586651682853699, 0.4750000238418579, 0.4571428298950195, 0.4750000238418579, 0.4571428298950195, 0.4750000238418579, 0.2561208009719849, 0.0615120530128479, -0.3586651682853699], 0
                    ]
                ]],
                ["anim17", 5, !1, 1, 0, !1, 5229080002860967, [
                    ["images/woosh-sheet0.png", 46946, 129, 1, 84, 70, 1, 0.5357142686843872, 0.5285714268684387, [],
                        [-0.3011082708835602, -0.5285714268684387, 0.4642857313156128, -0.5285714268684387, 0.4642857313156128, -0.5285714268684387, 0.4642857313156128, -0.2303944230079651, 0.4642857313156128, 0.4714285731315613, 0.4642857313156128, 0.4714285731315613, 0.415262758731842, 0.3066605925559998, -0.01456224918365479, -0.2303944230079651], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0xc56d44eed05ee],
                ["Sine", rc, 6983087151876283]
            ], !1, !1, 8754076191758275, [], null
        ],
        ["t46", u, !1, [], 1, 0, null, [
                ["anim2", 5, !1, 1, 0, !1, 6535794802898464, [
                    ["images/hinge1-sheet0.png", 1827, 1, 1, 34, 24, 1, 0.970588207244873, 0.0416666679084301, [],
                        [-0.7565072178840637, -0.0416666679084301, -0.10489821434021, -0.0416666679084301, 0.02941179275512695, -0.0416666679084301, 0.02941179275512695, 0.3378613293170929, 0.02941179275512695, 0.9583333134651184, -0.10489821434021, 0.9583333134651184, -0.8312501907348633, 0.9583333134651184, -0.7066782116889954, 0.3378613293170929], 0
                    ]
                ]],
                ["anim3", 5, !1, 1, 0, !1, 0x56c213381fee4, [
                    ["images/hinge1-sheet0.png", 1827, 1, 27, 30, 25, 1, 0.9333333373069763, 0.07999999821186066, [],
                        [-0.9333333373069763, -0.07999999821186066, -0.654762327671051, -0.07999999821186066, 0.06666666269302368, -0.07999999821186066, 0.06666666269302368, 0.327754020690918, 0.06666666269302368, 0.9200000166893005, -0.654762327671051, 0.8138800263404846, -0.9333333373069763, 0.9200000166893005, -0.7560603618621826, 0.327754020690918], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0xc84c26b0038e4]
            ], !1, !1, 8825763756976637, [], null
        ],
        ["t47", u, !1, [], 1, 0, null, [
                ["anim2", 5, !1, 1, 0, !1, 8112270721559298, [
                    ["images/hinge2-sheet0.png", 1890, 1, 1, 26, 36, 1, 0.115384615957737, 0.9444444179534912, [],
                        [0.4305714070796967, -0.653577446937561, 0.8846153616905212, -0.9166666269302368, 0.8846153616905212, -0.9166666269302368, 0.8846153616905212, -0.4103034138679504, 0.8846153616905212, 0.02777755260467529, 0.8846153616905212, 0.007455527782440186, 0.3581273853778839, -0.09992039203643799, 0.4788663685321808, -0.4103034138679504], 0
                    ]
                ]],
                ["anim3", 5, !1, 1, 0, !1, 9888209537165104, [
                    ["images/hinge2-sheet0.png", 1890, 29, 1, 25, 30, 1, 0.07999999821186066, 0.9333333373069763, [],
                        [], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 6915493040632384]
            ], !1, !1, 4789822367788618, [], null
        ],
        ["t48", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 7916496805133978, [
                    ["images/aaa2-sheet0.png", 42851, 0, 0, 300, 153, 1, 0.5, 0.2549019753932953, [],
                        [-0.3660289943218231, 0.00842103362083435, -7.970035076141357E-4, 0.1181390285491943, 0.4106860160827637, -0.0793529748916626, 0.4314190149307251, 0.2435310184955597, 0.4202550053596497, 0.5883580446243286, -7.970035076141357E-4, 0.729423999786377, -0.3133969902992249, 0.3783270418643951, -0.4633173942565918, 0.2435310184955597], 0
                    ]
                ]]
            ],
            [], !1, !0, 5717362973476209, [], null
        ],
        ["t49", u, !1, [], 1, 0, null, [
                ["Default", 3, !0, 1, 0, !1, 0xbc1a48e5a97de, [
                    ["images/aaa1-sheet0.png", 2630, 1, 1, 300, 30, 1, 0, 1, [],
                        [], 0
                    ],
                    ["images/aaa1-sheet0.png", 2630, 1, 33, 300, 30, 1, 0, 1, [],
                        [], 0
                    ],
                    ["images/aaa1-sheet0.png", 2630, 1, 65, 300, 30, 1, 0, 1, [],
                        [], 0
                    ],
                    ["images/aaa1-sheet0.png", 2630, 1, 97, 300, 30, 1, 0, 1, [],
                        [], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 5259963318052077]
            ], !1, !0, 0x803cd8ceecc47, [], null
        ],
        ["t50", u, !1, [], 0, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 8537837677830397, [
                    ["images/aaa5-sheet0.png", 2667, 0, 0, 462, 52, 1, 0, 0, [],
                        [0.00162866001483053, 0.4776119887828827, 0.4934850037097931, 0.02985070087015629, 0.9967430233955383, 0.3731339871883392, 0.9967430233955383, 0.671642005443573, 0.9837129712104797, 0.8507459759712219, 0.4934850037097931, 0.9850749969482422, 0.008143319748342037, 0.8059700131416321], 0
                    ]
                ]]
            ],
            [], !1, !0, 6318969012134831, [], null
        ],
        ["t51", P, !1, [], 0, 0, ["images/aaa6.png", 2586, 0], null, [], !1, !0, 0xb700e21fe6f6b, [], null],
        ["t52", u, !1, [], 2, 0, null, [
                ["Default", 5, !1, 1, 0, !1, 6822409652839365, [
                    ["images/aaa3-sheet0.png", 2472, 0, 0, 300, 30, 1, 0.503333330154419, 1, [],
                        [-0.003333330154418945, -0.800000011920929, 0.3266666531562805, -0.5, -0.003333330154418945, -0.6666669845581055, -0.3433333337306976, -0.5], 0
                    ]
                ]]
            ],
            [
                ["LiteTween", Z, 0x9407eccfac09b],
                ["Flash", pc, 5389307457373613]
            ], !1, !0, 5396411108462791, [], null
        ],
        ["t53", u, !0, [], 1, 0, null, null, [
            ["LiteTween", Z, 0xfe629492e8004]
        ], !1, !1, 519981606258793, [], null],
        ["t54", P, !0, [], 1, 0, null, null, [
            ["Pin", R, 8366321748037658]
        ], !1, !1, 7918371605175763, [], null],
        ["t55", u, !0, [], 1, 0, null, null, [
            ["Pin", R, 6499566381927574]
        ], !1, !1, 9702328355539538, [], null],
        ["t56", u, !0, [], 1, 0, null, null, [
            ["LiteTween", Z, 713851341497813]
        ], !1, !1, 7893948758652545, [], null]
    ], [
        [53, 1],
        [54, 19, 24],
        [55, 46, 47, 11, 3, 8, 9, 12],
        [56, 27]
    ], [
        ["Layout 1", 640, 840, !1, "Event sheet 1", 7044917518150287, [
                ["tlo", 0, 5693169731700803, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [325, 460, 0, 661.1400146484375, 810.9769897460938, 0, 0, 1, 0.5084485411643982, 0.5714285969734192, 0, 0, []], 0, 0, [],
                            [],
                            [0, "anim4", 0, 1]
                        ],
                        [
                            [120, 900, 0, 62, 106, 0, 0, 0.5, 0.5161290168762207, 0.5, 0, 0, []], 45, 45, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim1", 0, 1]
                        ],
                        [
                            [172.0147094726563, 897.1368408203125, 0, 62, 97, 0, 0, 0.5, 0.5, 0.5051546096801758, 0, 0, []], 45, 139, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [228, 895, 0, 64, 90, 0, 0, 0.5, 0.515625, 0.5222222208976746, 0, 0, []], 45, 156, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim3", 0, 1]
                        ],
                        [
                            [281.0912475585938, 898.0162353515625, 0, 62, 83, 0, 0, 0.5, 0.5, 0.5060241222381592, 0, 0, []], 45, 158, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim4", 0, 1]
                        ],
                        [
                            [331.0147094726563, 894.9087524414062, 0, 59, 77, 0, 0, 0.5, 0.508474588394165, 0.5194805264472961, 0, 0, []], 45, 159, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim5", 0, 1]
                        ],
                        [
                            [385.0912475585938, 892.9381713867188, 0, 64, 73, 0, 0, 0.5, 0.484375, 0.4931506812572479, 0, 0, []], 45, 160, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim6", 0, 1]
                        ],
                        [
                            [439.0765380859375, 890.9381103515625, 0, 69, 70, 0, 0, 0.5, 0.4927536249160767, 0.5, 0, 0, []], 45, 161, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim7", 0, 1]
                        ],
                        [
                            [494.0162353515625, 893.8793334960938, 0, 69, 67, 0, 0, 0.5, 0.4927536249160767, 0.5223880410194397, 0, 0, []], 45, 162, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim8", 0, 1]
                        ],
                        [
                            [541.1515502929688, 889.9544067382812, 0, 65, 63, 0, 0, 0.5, 0.4769230782985687, 0.4920634925365448, 0, 0, []], 45, 163, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim9", 0, 1]
                        ],
                        [
                            [596.1369018554688, 892.0750122070312, 0, 68, 64, 0, 0, 0.5, 0.5147058963775635, 0.515625, 0, 0, []], 45, 164, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim10", 0, 1]
                        ],
                        [
                            [651.0147705078125, 896.8793334960938, 0, 76, 63, 0, 0, 0.5, 0.5, 0.523809552192688, 0, 0, []], 45, 165, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim11", 0, 1]
                        ],
                        [
                            [703, 894.8175048828125, 0, 72, 63, 0, 0, 0.5, 0.4861111044883728, 0.4920634925365448, 0, 0, []], 45, 166, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim12", 0, 1]
                        ],
                        [
                            [761.0162353515625, 895.892578125, 0, 73, 66, 0, 0, 0.5, 0.5068492889404297, 0.5, 0, 0, []], 45, 167, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim13", 0, 1]
                        ],
                        [
                            [816.0162353515625, 890.0750122070312, 0, 81, 65, 0, 0, 0.5, 0.5185185074806213, 0.4923076927661896, 0, 0, []], 45, 168, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim14", 0, 1]
                        ],
                        [
                            [869.1369018554688, 894.0618286132812, 0, 83, 68, 0, 0, 0.5, 0.4939759075641632, 0.529411792755127, 0, 0, []], 45, 169, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim15", 0, 1]
                        ],
                        [
                            [922.0618286132812, 891.90869140625, 0, 80, 70, 0, 0, 0.5, 0.5249999761581421, 0.5428571701049805, 0, 0, []], 45, 170, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim16", 0, 1]
                        ],
                        [
                            [985.9087524414062, 892.9706420898438, 0, 84, 70, 0, 0, 0.5, 0.5357142686843872, 0.5285714268684387, 0, 0, []], 45, 171, [
                                [-10]
                            ],
                            [
                                [0, 0, 0, "-540,-1130", 1, 1, 1],
                                [0, 6, 0, 0.4, 0, 0, 0, 30, 0]
                            ],
                            [0, "anim17", 0, 1]
                        ],
                        [
                            [605.6593017578125, 765.1036987304688, 0, -212.3969116210938, 153.3350219726563, 0, 0, 1, 0.501165509223938, 0.501165509223938, 0, 0, []], 16, 39, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [396.9583129882813, 760.1461181640625, 0, -212.3969116210938, 153.3350219726563, 0, 0, 1, 0.501165509223938, 0.501165509223938, 0, 0, []], 16, 40, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [191.5055847167969, 755.6002197265625, 0, -212.3969116210938, 153.3350219726563, 0, 0, 1, 0.501165509223938, 0.501165509223938, 0, 0, []], 16, 41, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [-19.40261840820313, 754.6927490234375, 0, -212.3969116210938, 153.3350219726563, 0, 0, 1, 0.501165509223938, 0.501165509223938, 0, 0, []], 16, 42, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [105.3360595703125, 812.2069091796875, 0, 267.2400817871094, 170.1065826416016, 0, 0, 1, 0.4918793439865112, 0.7982456088066101, 0, 0, []], 16, 37, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [359.6387634277344, 812.2069091796875, 0, -269.4652099609375, 167.7445678710938, 0, 0, 1, 0.4918793439865112, 0.7982456088066101, 0, 0, []], 16, 22, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [585.8389892578125, 812.2069091796875, 0, -269.4652099609375, 167.7445678710938, 0, 0, 1, 0.4918793439865112, 0.7982456088066101, 0, 0, []], 16, 38, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [320, 421, 0, 20, 20, 0, 0, 1, 0.5, 0.5, 0, 0, []], 17, 44, [],
                            [
                                [1]
                            ],
                            [1, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["main", 1, 0x5d84af4ef96ae, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [-53, 599, 0, 42, 250, 0, 0, 1, 0.5454545617103577, 0.02400000020861626, 0, 0, []], 8, 20, [],
                            [
                                []
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [82.10382080078125, 99.10758972167969, 0, 38, 57, 0, 0, 1, 0.4736842215061188, 0.05263157933950424, 0, 0, []], 10, 53, [
                                [0]
                            ],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [-601.1965942382812, 642, 0, 721.3825073242188, 8, 0, 0, 1, 0.002499999944120646, 1.25, 0, 0, []], 12, 6, [],
                            [
                                []
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [-357, 600, 0, 42, 250, 0, 0, 1, 0.5454545617103577, 0.02400000020861626, 0, 0, []], 8, 18, [],
                            [
                                []
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [-209, 601, 0, 42, 250, 0, 0, 1, 0.5454545617103577, 0.02400000020861626, 0, 0, []], 8, 11, [],
                            [
                                []
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [101, 601, 0, 42, 250, 0, 0, 1, 0.5454545617103577, 0.02400000020861626, 0, 0, []], 8, 16, [],
                            [
                                []
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [-245, 649.05712890625, 0, 355, 8, 0, 0, 1, 0, 1.25, 0, 0, []], 9, 23, [],
                            [
                                []
                            ],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [-368, 613, 0, 44, 250, 0, 0, 1, 0.5, 0.05200000107288361, 0, 0, []], 3, 10, [],
                            [
                                []
                            ],
                            [0, "anim3", 0, 1]
                        ],
                        [
                            [-220, 612, 0, 44, 250, 0, 0, 1, 0.5, 0.05200000107288361, 0, 0, []], 3, 15, [],
                            [
                                []
                            ],
                            [0, "anim3", 0, 1]
                        ],
                        [
                            [90, 612, 0, 44, 250, 0, 0, 1, 0.5, 0.05200000107288361, 0, 0, []], 3, 19, [],
                            [
                                []
                            ],
                            [0, "anim3", 0, 1]
                        ],
                        [
                            [-64, 612, 0, 44, 250, 0, 0, 1, 0.5, 0.05200000107288361, 0, 0, []], 3, 21, [],
                            [
                                []
                            ],
                            [0, "anim3", 0, 1]
                        ],
                        [
                            [40, 649, 0, 31, 39, 0, 0, 1, 0.6774193644523621, -0.02564102597534657, 0, 0, []], 11, 28, [],
                            [
                                []
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [-293, 649, 0, 30, 47.14285659790039, 0, 0, 1, 0.4666666686534882, 0, 0, 0, []], 11, 5, [],
                            [
                                []
                            ],
                            [1, "anim2", 0, 1]
                        ]
                    ],
                    []
                ],
                ["player", 2, 0x4dc465a262e23, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [-311, 580, 0, 450, 24, 0, 0, 1, 0, 0, 0, 0, []], 24, 58, [],
                            [
                                [],
                                [],
                                [0, 0, 23, "100,100", 0, 2.5, 0]
                            ],
                            [0, 0, 0, 0, 450, 24]
                        ],
                        [
                            [139, 580, 0, 0, 24, 0, -1.570796370506287, 1, 0, 0, 0, 0, []], 19, 50, [],
                            [
                                [],
                                [0, 4, 0, "90", 1, 0.2, 0],
                                [0, 4, 1, "90", 1, 0.4, 0],
                                [0, 0, 4, "0,500", 1, 0.5, 0]
                            ],
                            [0, 0, 0, 0, 20, 24]
                        ],
                        [
                            [140, 581, 0, 0, 0, 0, 0, 1, 0.07999999821186066, 0.9333333373069763, 0, 0, []], 47, 172, [],
                            [
                                [],
                                [0, 1, 17, "26,30", 0, 0.2, 0]
                            ],
                            [1, "anim3", 0, 1]
                        ],
                        [
                            [140, 581, 0, 0, 0, 0, 0, 1, 0.9333333373069763, 0.07999999821186066, 0, 0, []], 46, 100, [],
                            [
                                [],
                                [0, 1, 17, "30,26", 0, 0.2, 0]
                            ],
                            [1, "anim3", 0, 1]
                        ],
                        [
                            [83.46190643310547, 140.7394104003906, 0, 114.2099990844727, 551.22802734375, 0, 0, 0.6000000238418579, 0.4418604671955109, 0.09947644174098969, 0, 0, []], 14, 29, [
                                [0]
                            ],
                            [
                                [0, 5, 5, "0", 0, 0.2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [84, 586, 0, 70, 149, 0, 0, 1, 0.4142857193946838, 0.9932885766029358, 0, 0, []], 1, 4, [],
                            [
                                [0, 0, 27, "0", 1, 0.5, 0],
                                [0, 0, 0, "400,0", 1, 2, 0],
                                [0, 4, 25, "20", 1, 0.2, 0],
                                [0, 0, 0, "0,12", 1, 0.1, 0],
                                [0, 4, 26, "-20", 1, 0.5, 0],
                                [0, 0, 26, "0,-29", 1, 0.15, 0],
                                [0, 4, 0, "2520", 1, 2, 0],
                                [0, 5, 27, "-30", 1, 0.3, 1],
                                [0, 0, 1, "0,500", 1, 0.4, 0],
                                [0, 0, 23, "100,100", 0, 2.5, 0]
                            ],
                            [0, "glowa2", 0, 1]
                        ],
                        [
                            [89, 520, 0, 93, 170, 0, 0, 0.5, 0.4838709533214569, 0.5529412031173706, 0, 0, []], 18, 46, [],
                            [
                                [0, 6, 2, 0.1, 0, 0, 0, 30, 0],
                                [0, 5, 25, "0", 0, 0.3, 1]
                            ],
                            [1, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["oklaski", 3, 5503746234905677, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [54.24687194824219, 717.858642578125, 0, 150.0815734863281, 145.9090576171875, 0, 0, 1, 0, 0, 0, 0, []], 15, 25, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 5, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [162.5213165283203, 764.5287475585938, 0, 101.3879699707031, 97.55967712402344, 0, 0, 1, 0, 0, 0, 0, []], 15, 30, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 3, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [234.579345703125, 721.0419921875, 0, 148.5596618652344, 135.6007385253906, 0, 0, 1, 0, 0, 0, 0, []], 15, 32, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 5, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [384, 734, 0, 136.4460296630859, 133.181640625, 0, 0, 1, 0, 0, 0, 0, []], 15, 33, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 5, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [336.5460510253906, 754.3619995117188, 0, 101.3879699707031, 97.55967712402344, 0, 0, 1, 0, 0, 0, 0, []], 15, 34, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [521, 751, 0, 124, 121, 0, 0, 1, 0, 0, 0, 0, []], 15, 35, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 4, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [-55, 729, 0, 136.4460296630859, 133.181640625, 0, 0, 1, 0, 0, 0, 0, []], 15, 36, [],
                            [
                                [1, 1, 0, 0.6, 0, 0, 0, 4, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [304, 92.45099639892578, 0, 784, 8.241999626159668, 0, 0, 1, 0.5037523508071899, 0.2647058963775635, 0, 0, []], 25, 26, [],
                            [],
                            [0, "anim2", 0, 1]
                        ]
                    ],
                    []
                ],
                ["sciemnienie", 4, 884741207893459, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [333.6213684082031, 419, 0, 664, 864, 0, 0, 0.5, 0.5222349166870117, 0.5, 0, 0, []], 13, 27, [],
                            [
                                [0, 5, 4, "50", 0, 0.2, 0],
                                [0, 0, 23, "100,100", 0, 2.5, 0]
                            ],
                            [0, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["score", 5, 528023178785224, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [319, 407, 0, 498.0132141113281, 472.582763671875, 0, 0, 0, 0.5, 0.5, 0, 0, []], 27, 145, [],
                            [
                                [0, 5, 25, "100", 0, 0.2, 0]
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [440.8521728515625, 560.120361328125, 0, 134, 84, 0, 0.09831725805997849, 1, 0.5074626803398132, 0.4761904776096344, 0, 0, []], 32, 152, [],
                            [
                                [0, 5, 27, "-50", 1, 0.3, 0]
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [330, 587, 0, 234.1038513183594, 71, 0, 0, 0, 0.5, 0.5, 0, 0, []], 34, 154, [],
                            [
                                [0, 5, 25, "100", 0, 0.2, 0]
                            ],
                            [55, 49, "0123456789", "33", 1, 1, 1, 1, 1, 0, -10, 0]
                        ],
                        [
                            [330, 273, 0, 285, 90, 0, 0, 0, 0.5, 0.5, 0, 0, []], 35, 155, [],
                            [
                                [0, 5, 25, "100", 0, 0.2, 0]
                            ],
                            [79, 71, "0123456789", "0", 1, 1, 1, 1, 1, 0, -10, 0]
                        ],
                        [
                            [319, 407, 0, 199, 144, 0, 0, 0, 1.015075325965881, -0.875, 0, 0, []], 26, 146, [
                                [0]
                            ],
                            [
                                [0, 4, 0, "-180", 1, 1, 0],
                                [0, 4, 0, "-180", 1, 1, 0],
                                [0, 5, 25, "80", 0, 0.3, 0],
                                [-180, 0]
                            ],
                            [1, "anim2", 0, 1]
                        ],
                        [
                            [319, 407, 0, 199, 144, 0, 3.141592741012573, 0, 1.015075325965881, -0.875, 0, 0, []], 26, 147, [
                                [0]
                            ],
                            [
                                [0, 4, 0, "-180", 1, 1, 0],
                                [0, 4, 0, "-180", 1, 1, 0],
                                [0, 5, 25, "80", 0, 0.3, 0],
                                [-180, 0]
                            ],
                            [1, "anim2", 0, 1]
                        ]
                    ],
                    []
                ],
                ["kometka", 6, 701688035495545, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [642, -8, 0, 57.63888931274414, 97.902099609375, 0, -2.460914373397827, 1, 0.5, 0.1428571492433548, 0, 0, []], 28, 148, [],
                            [
                                [0, 0, 0, "320,400", 0, 0.2, 0]
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [-10, 845, 0, 57.63888931274414, 97.902099609375, 0, 0.6806784272193909, 1, 0.5, 0.1428571492433548, 0, 0, []], 28, 149, [],
                            [
                                [0, 0, 0, "320,400", 0, 0.2, 0]
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [320, 400, 0, 400, 400, 0, 0, 1, 0.5, 0.5016181468963623, 0, 0, []], 29, 150, [],
                            [
                                [0, 5, 7, "0", 0, 0.4, 0],
                                [0, 1, 26, "800,800", 0, 0.5, 0]
                            ],
                            [1, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["tutorial", 7, 8220174445460682, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [378, 218, 0, 425, 156, 0, 0, 1, 0.4752941131591797, 0.5256410241127014, 0, 0, []], 37, 2, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [137.9900054931641, 580, 0, 0, 24, 0, -1.570796370506287, 1, 0, 0, 0, 0, []], 38, 3, [],
                            [
                                [0, 2, 0, "0", 0, 1, 1],
                                [0, 4, 0, "90", 1, 0.2, 1]
                            ],
                            [0, 0, 0, 0, 0, 24]
                        ],
                        [
                            [320, 690, 0, 197, 119, 0, 0, 1, 0.4974619150161743, 0.5042017102241516, 0, 0, []], 39, 31, [],
                            [
                                [2, 5, 0, "86", 0, 0.4, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [381, 372, 0, 30, 30, 0, 0, 0.5, 0.5, 0.5, 0, 0, []], 41, 52, [],
                            [
                                [0, 1, 0, "200,200", 0, 1, 1],
                                [0, 5, 0, "0", 0, 1, 1]
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [384, 474, 0, 80, 123, 0, 0, 1, 0.3163265287876129, 0.9668874144554138, 0, 0, []], 40, 84, [],
                            [
                                [0, 5, 26, "100", 0, 0.2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [381, 372, 0, 30, 30, 0, 0, 0.5, 0.5, 0.5, 0, 0, []], 42, 9, [],
                            [
                                [0, 1, 0, "200,200", 0, 1, 1],
                                [0, 5, 0, "0", 0, 1, 1],
                                [0, 0, 23, "100,100", 0, 2.5, 0]
                            ],
                            [1, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["UI", 8, 5733127164129533, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [440.3406677246094, 65.68318176269531, 0, 647, -105.7779846191406, 0, 0, 0.6000000238418579, 0.6868131756782532, 0.311475396156311, 0, 0, []], 7, 51, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [113.3858795166016, 71.11372375488281, 0, 55, 48, 0, 0, 1, 0.08860759437084198, 0.720588207244873, 0, 0, []], 4, 12, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [193.7400360107422, 53.60724639892578, 0, 59, 56, 0, 0, 1, 0.4285714328289032, 0.375, 0, 0, []], 5, 13, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [49.7044677734375, 53.74178314208984, 0, 93, 83, 0, 0, 1, 0.4838709533214569, 0.4698795080184937, 0, 0, []], 20, 49, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [366, 60, 0, 273, 73, 0, 0, 1, 0.5, 0.5, 0, 0, []], 36, 157, [],
                            [
                                [0, 5, 25, "0", 0, 0.2, 0]
                            ],
                            [80, 73, "0123456789", "0", 0.9, 0, 1, 1, 1, 0, -28, 0]
                        ]
                    ],
                    []
                ],
                ["logo", 9, 8794969900639455, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [335.5108032226563, 416, 0, 663, 864, 0, 0, 0, 0.5222349166870117, 0.5, 0, 0, []], 44, 43, [],
                            [
                                [0, 5, 8, "100", 0, 0.3, 0],
                                [0, 0, 23, "100,100", 0, 2.5, 0]
                            ],
                            [1, "Default", 0, 1]
                        ],
                        [
                            [564.781982421875, 55, 0, 130, 62, 0, 0, 1, 0.5076923370361328, 0.4838709533214569, 0, 0, []], 6, 14, [],
                            [],
                            [0, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["POMOCNICZA", 10, 8198769997552411, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [],
                    []
                ]
            ],
            [],
            []
        ],
        ["menu", 640, 800, !1, "menuSheet", 7619990458258958, [
                ["Layer 0", 0, 5449511934837892, !0, [255, 255, 255], !1, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [326, 595, 0, 669, 821, 0, 0, 1, 0.5068078637123108, 0.7343173623085022, 0, 0, []], 0, 56, [],
                            [],
                            [0, "anim2", 0, 1]
                        ],
                        [
                            [21.51280975341797, 54.17318725585938, 0, 79, 68, 0, 0, 1, 0.08860759437084198, 0.720588207244873, 0, 0, []], 4, 48, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [138.6321868896484, 30.86301422119141, 0, 84, 80, 0, 0, 1, 0.4285714328289032, 0.375, 0, 0, []], 5, 54, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [494, 633, 0, 350, 518, 0, -0.3124892115592957, 1, 0.5057142972946167, 0.5115830302238464, 0, 0, []], 21, 8, [],
                            [
                                [2, 0, 27, "4,14", 1, 0.5, 0],
                                [0, 0, 3, "300,1050", 1, 0.8, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [125.8261871337891, 642.5703735351562, 0, 216, 276, 0, -0.4699661135673523, 1, 0.4583333432674408, 0.510869562625885, 0, 0, []], 22, 57, [],
                            [
                                [0, 1, 27, "10,10", 1, 0.5, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [272, 652, 0, 161, 153, 0, -0.4188790321350098, 1, 0.4844720363616943, 0.4379085004329681, 0, 0, []], 23, 17, [],
                            [
                                [0, 1, 27, "4,4", 1, 0.5, 0],
                                [0, 4, 2, "24", 1, 0.7, 0],
                                [0, 4, 2, "-24", 1, 0.7, 0],
                                [0, 0, 3, "320,652", 0, 0.7, 0]
                            ],
                            [0, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["credits", 1, 0xaefe9e8c21200, !1, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [315, 342, 0, 505, 458, 0, 0, 1, 0.4851485192775726, 0.5021833777427673, 0, 0, []], 43, 24, [],
                            [],
                            [0, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["sciemnianie", 2, 0xfc2757775a13a, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [335, 392, 0, 725.9999389648438, 1012.000061035156, 0, 0, 0, 0.5222349166870117, 0.5, 0, 0, []], 13, 144, [],
                            [
                                [0, 5, 1, "100", 0, 0.3, 0],
                                [0, 5, 1, "100", 0, 0.5, 0]
                            ],
                            [1, "Default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["Layer 1", 3, 48542742340135, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [],
                    []
                ],
                ["UI", 4, 9153756435612584, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [564.781982421875, 34, 0, 130, 62, 0, 0, 1, 0.5076923370361328, 0.4838709533214569, 0, 0, []], 6, 55, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [300, 402, 0, 563, 385.8230895996094, 0, -0.0221826583147049, 1, 0.5106006860733032, 0.8999999761581421, 0, 0, []], 30, 143, [],
                            [
                                [0, 5, 25, "0", 0, 0.7, 0],
                                [0, 0, 23, "100,100", 0, 2.5, 0]
                            ],
                            [0, "default", 0, 1]
                        ]
                    ],
                    []
                ],
                ["Layer 2", 5, 0xf851f1877cc83, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [],
                    []
                ]
            ],
            [],
            []
        ],
        ["preloader", 640, 800, !1, "loading", 46019888761845, [
                ["Layer 0", 0, 0x8cd664aa9049c, !0, [69, 53, 125], !1, 1, 1, 1, !1, 1, 0, 0, [
                        [
                            [319, 238, 0, 300, 153, 0, 0, 1, 0.5, 0.2549019753932953, 0, 0, []], 48, 1, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [256, 595, 0, 300, 30, 0, 0, 1, 0, 1, 0, 0, []], 49, 47, [],
                            [
                                [0, 3, 16, "0", 0, 0.2, 0]
                            ],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [91, 602, 0, 462, 52, 0, 0, 1, 0, 0, 0, 0, []], 50, 59, [],
                            [],
                            [0, "Default", 0, 1]
                        ],
                        [
                            [92, 603, 0, 0, 49, 0, 0, 1, 0, 0, 0, 0, []], 51, 60, [],
                            [],
                            [0, 0, 0, 0, 0, 49]
                        ],
                        [
                            [321, 591, 0, 300, 0, 0, 0, 1, 0.503333330154419, 1, 0, 0, []], 52, 61, [],
                            [
                                [0, 3, 17, "30", 0, 0.2, 0],
                                []
                            ],
                            [1, "Default", 0, 1]
                        ]
                    ],
                    []
                ]
            ],
            [],
            []
        ]
    ], [
        ["Event sheet 1", [
            [1, "animacjaStand", 0, 0, !1, !1, 0xb78da28b0896, !1],
            [1, "animacjaPunch", 0, 0, !1, !1, 0xf7b38a32ed576, !1],
            [1, "animacjaMove", 0, 0, !1, !1, 0xaf80c7b8d9053, !1],
            [1, "powrotTarg", 0, 0, !1, !1, 4692424257416343, !1],
            [1, "nextX", 0, 0, !1, !1, 8656472807548433, !1],
            [1, "nextDlugosc", 0, 0, !1, !1, 9215799652540924, !1],
            [1, "nowaPlatforma", 0, 0, !1, !1, 593961090808698, !1],
            [1, "przesuwanie", 0, 0, !1, !1, 0x46c4f03e5ceda, !1],
            [1, "pinezka2", 0, 0, !1, !1, 0xe4fb13bf139d, !1],
            [1, "score", 0, 0, !1, !1, 8346670435401421, !1],
            [1, "game", 0, 0, !1, !1, 891657758115664, !1],
            [1, "tutDistance", 0, 0, !1, !1, 7840310001286894, !1],
            [1, "stageSzer", 0, 0, !1, !1, 48653859794341, !1],
            [1, "moveDur", 0, 0, !1, !1, 4955438354112317, !1],
            [1, "pinezka1", 0, 0, !1, !1, 0xb2bcd4b260246, !1],
            [0, null, !1, null, 0x3c478ab7c7762, [
                    [45, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 710474437050688, !1]
                ],
                [
                    [45, rc.prototype.b.ne, "Sine", 9281913981155628, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xe25e0e2cbe8de, [
                    [45, u.prototype.d.li, null, 0, !1, !1, !1, 0x4f981364415bb, !1, [
                        [10, 0],
                        [8, 2],
                        [7, [0, 0]]
                    ]],
                    [45, u.prototype.d.li, null, 0, !1, !1, !1, 9795324727620432, !1, [
                        [10, 0],
                        [8, 4],
                        [7, [0, -5]]
                    ]]
                ],
                [
                    [45, Z.prototype.b.D, "LiteTween", 7707821102036001, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [45, rc.prototype.b.ne, "Sine", 0x884da645210a0, !1, [
                        [3, 1]
                    ]],
                    [45, u.prototype.b.ri, null, 0xb19017d604ad6, !1, [
                        [10, 0],
                        [7, [0, -10]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x651c86a2ae551, [
                    [45, u.prototype.d.li, null, 0, !1, !1, !1, 5890671637951982, !1, [
                        [10, 0],
                        [8, 5],
                        [7, [0, 0]]
                    ]],
                    [45, u.prototype.d.li, null, 0, !1, !1, !1, 8086161927794181, !1, [
                        [10, 0],
                        [8, 2],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [45, u.prototype.b.dq, null, 0x650f18cc77375, !1, [
                        [10, 0],
                        [7, [3, [19, t.prototype.e.bb]]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xa3185f92a7031, [
                    [-1, t.prototype.d.uk, null, 1, !1, !1, !1, 7861370124889136, !1]
                ],
                [
                    [14, u.prototype.b.ri, null, 7995926428079683, !1, [
                        [10, 0],
                        [7, [5, [20, 14, u.prototype.e.u, !1, null],
                            [20, 1, u.prototype.e.u, !1, null]
                        ]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xaad0b1a9784bf, !1, [
                        [11, "nextX"],
                        [7, [19, t.prototype.e.random, [
                            [0, 190],
                            [0, 530]
                        ]]]
                    ]],
                    [-1, t.prototype.b.Aa, null, 4831469730578766, !1, [
                        [4, 24],
                        [5, [0, 2]],
                        [0, [23, "nextX"]],
                        [0, [0, 580]]
                    ]],
                    [-1, t.prototype.b.Aa, null, 4879512034949454, !1, [
                        [4, 46],
                        [5, [0, 2]],
                        [0, [4, [4, [23, "nextX"],
                                [23, "stageSzer"]
                            ],
                            [0, 50]
                        ]],
                        [0, [0, 581]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xb11dfd8326247, !1, [
                        [11, "animacjaStand"],
                        [7, [19, t.prototype.e.rd, [
                            [0, 1],
                            [0, 2],
                            [0, 3]
                        ]]]
                    ]],
                    [1, u.prototype.b.F, null, 8704723617526182, !1, [
                        [1, [18, [12, [23, "animacjaStand"],
                                [0, 1]
                            ],
                            [2, "front"],
                            [18, [12, [23, "animacjaStand"],
                                    [0, 2]
                                ],
                                [2, "glowa"],
                                [2, "glowa2"]
                            ]
                        ]],
                        [3, 1]
                    ]],
                    [19, P.prototype.b.mi, null, 5761181248392164, !1]
                ],
                [
                    [0, null, !1, null, 8863468540164841, [
                            [31, C.prototype.d.Jg, null, 0, !1, !0, !1, 6342350400027402, !1]
                        ],
                        [
                            [31, C.prototype.b.en, null, 8291437208446217, !1, [
                                [3, 0]
                            ]],
                            [5, u.prototype.b.Ha, null, 6709669196701737, !1],
                            [4, u.prototype.b.Ha, null, 6370392430546013, !1],
                            [-1, t.prototype.b.k, null, 8791437467928534, !1, [
                                [11, "MusicMode"],
                                [7, [0, 1]]
                            ]],
                            [-1, t.prototype.b.k, null, 727000160231517, !1, [
                                [11, "SoundMode"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 469720842476095, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x6916ed798633b, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [4, u.prototype.b.F, null, 47271398972988, !1, [
                                [1, [2, "anim2"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xd5284abbbd3c4, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7225270278827149, !1, [
                                [11, "MusicMode"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [5, u.prototype.b.F, null, 9948379271117656, !1, [
                                [1, [2, "anim2"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9914309925030134, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xc0b0217e3186e, !1, [
                                [11, "MusicMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [31, C.prototype.d.rk, null, 0, !1, !0, !1, 9350394522761834, !1, [
                                [1, [2, "muza"]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 9532301554091088, !1, [
                                [2, ["untitled2", !1]],
                                [3, 1],
                                [0, [0, -10]],
                                [1, [2, "muza"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x3fa9a042c79f9, [
                            [-1, t.prototype.d.Vm, null, 0, !0, !1, !1, 0x3e53f6df8c06c, !1, [
                                [4, 10]
                            ]]
                        ],
                        [
                            [10, u.prototype.b.ri, null, 6227422584577932, !1, [
                                [10, 0],
                                [7, [5, [20, 10, u.prototype.e.u, !1, null],
                                    [20, 1, u.prototype.e.u, !1, null]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 67020005672632, [
                            [33, oc.prototype.d.cn, null, 0, !1, !0, !1, 9531441455199122, !1, [
                                [1, [2, "fureyeDiscoBridgeBeginning"]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 9736356668394004, !1, [
                                [11, "game"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 9915570844977504, [
                            [33, oc.prototype.d.cn, null, 0, !1, !1, !1, 0x4192794fe34b1, !1, [
                                [1, [2, "fureyeDiscoBridgeBeginning"]]
                            ]]
                        ],
                        [
                            [40, u.prototype.b.Ha, null, 439831337992936, !1],
                            [37, u.prototype.b.Ha, null, 0x55b4d904a5acb, !1],
                            [41, u.prototype.b.Ha, null, 8375774763682769, !1],
                            [13, u.prototype.b.Jc, null, 6069221122115821, !1, [
                                [0, [0, 0]]
                            ]],
                            [13, u.prototype.b.X, null, 8916862345144227, !1, [
                                [3, 0]
                            ]],
                            [38, P.prototype.b.Ha, null, 8937823454894171, !1],
                            [39, u.prototype.b.Ha, null, 4975136230307665, !1],
                            [42, u.prototype.b.Ha, null, 4545428008482462, !1]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0xd20c2135d742b, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8183127562259778, !1, [
                        [11, "game"],
                        [8, 0],
                        [7, [0, 1]]
                    ]]
                ],
                [],
                [
                    [0, null, !1, null, 0xf17731489ff, [
                            [40, u.prototype.d.ni, null, 1, !1, !1, !1, 6711698742106451, !1, [
                                [1, [2, "default"]]
                            ]]
                        ],
                        [
                            [41, u.prototype.b.gn, null, 543584799046806, !1, [
                                [0, [0, 30]],
                                [0, [0, 30]]
                            ]],
                            [41, u.prototype.b.Jc, null, 5261653939797512, !1, [
                                [0, [0, 50]]
                            ]],
                            [41, u.prototype.b.X, null, 8673026517037089, !1, [
                                [3, 1]
                            ]],
                            [41, u.prototype.b.F, null, 4639710979973865, !1, [
                                [1, [2, "default"]],
                                [3, 1]
                            ]],
                            [41, Z.prototype.b.D, "LiteTween", 7374228971497738, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [41, Z.prototype.b.D, "LiteTween2", 9778973911372484, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [38, Z.prototype.b.oe, "LiteTween", 7920794550811759, !1, [
                                [3, 4],
                                [3, 0],
                                [0, [23, "tutDistance"]]
                            ]],
                            [38, Z.prototype.b.yk, "LiteTween", 0x98c32bc97eb69, !1, [
                                [0, [4, [7, [23, "tutDistance"],
                                        [0, 500]
                                    ],
                                    [1, 0.2]
                                ]]
                            ]],
                            [38, Z.prototype.b.D, "LiteTween", 33584553831801, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [-1, t.prototype.b.B, null, 0xfa7b19c458b1e, !1, [
                                [0, [1, 0.4]]
                            ]],
                            [42, u.prototype.b.gn, null, 8050646120189879, !1, [
                                [0, [0, 30]],
                                [0, [0, 30]]
                            ]],
                            [42, u.prototype.b.Jc, null, 9987350613864686, !1, [
                                [0, [0, 50]]
                            ]],
                            [42, u.prototype.b.X, null, 0x64242ed90403d, !1, [
                                [3, 1]
                            ]],
                            [42, u.prototype.b.F, null, 8843437806650515, !1, [
                                [1, [2, "default"]],
                                [3, 1]
                            ]],
                            [42, Z.prototype.b.D, "LiteTween", 9867383085849746, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [42, Z.prototype.b.D, "LiteTween2", 0x83a726db6c737, !1, [
                                [3, 0],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xf659710690630, [
                            [-1, t.prototype.d.Kg, null, 0, !1, !1, !1, 4552574403085296, !1, [
                                [7, [20, 38, P.prototype.e.Bq, !1, null]],
                                [8, 1],
                                [7, [20, 38, P.prototype.e.M, !1, null]]
                            ]]
                        ],
                        [
                            [38, P.prototype.b.Ng, null, 4506674521399208, !1, [
                                [0, [0, 0]],
                                [0, [0, 0]],
                                [0, [20, 38, P.prototype.e.M, !1, null]],
                                [0, [0, 24]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xfd9cb677c1c54, [
                            [38, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 0x5126e8225dd2f, !1]
                        ],
                        [
                            [38, Z.prototype.b.D, "LiteTween2", 5555250150031691, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [40, u.prototype.b.F, null, 9713371299736760, !1, [
                                [1, [2, "anim2"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8880298510280864, [
                            [38, Z.prototype.d.lc, "LiteTween2", 1, !1, !1, !1, 7204286531163393, !1]
                        ],
                        [
                            [-1, t.prototype.b.B, null, 428885323205671, !1, [
                                [0, [0, 1]]
                            ]],
                            [38, P.prototype.b.Ye, null, 5117944194879133, !1, [
                                [0, [0, 0]]
                            ]],
                            [38, P.prototype.b.xq, null, 0x91beea49fc1df, !1, [
                                [0, [0, -90]]
                            ]],
                            [-1, t.prototype.b.B, null, 0x63e526cac24e5, !1, [
                                [0, [1, 0.5]]
                            ]],
                            [40, u.prototype.b.F, null, 0x75f4093a40331, !1, [
                                [1, [2, "default"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 7816887700245883, [
                            [41, u.prototype.d.Zc, null, 0, !1, !1, !1, 7626221782527796, !1, [
                                [8, 2],
                                [0, [0, 5]]
                            ]]
                        ],
                        [
                            [41, u.prototype.b.X, null, 0xcff83ab4e712f, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8614423562696026, [
                            [42, u.prototype.d.Zc, null, 0, !1, !1, !1, 9847552516605954, !1, [
                                [8, 2],
                                [0, [0, 5]]
                            ]]
                        ],
                        [
                            [42, u.prototype.b.X, null, 389124548897625, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8674516461159123, [
                            [2, G.prototype.d.Lg, null, 1, !1, !1, !1, 4831223982002931, !1],
                            [2, G.prototype.d.Lf, null, 0, !1, !1, !1, 8086262307180629, !1, [
                                [4, 39]
                            ]]
                        ],
                        [
                            [40, u.prototype.b.Ha, null, 7424375303660348, !1],
                            [37, u.prototype.b.Ha, null, 8059808554865034, !1],
                            [41, u.prototype.b.Ha, null, 5619754327904766, !1],
                            [42, u.prototype.b.Ha, null, 0xafa0ddfb28924, !1],
                            [13, u.prototype.b.Jc, null, 7323773847471514, !1, [
                                [0, [0, 0]]
                            ]],
                            [13, u.prototype.b.X, null, 939298492186295, !1, [
                                [3, 0]
                            ]],
                            [38, P.prototype.b.Ha, null, 5257386220689157, !1],
                            [39, u.prototype.b.Ha, null, 0x72902d9f43e2c, !1],
                            [-1, t.prototype.b.k, null, 6817031864177287, !1, [
                                [11, "game"],
                                [7, [0, 10]]
                            ]],
                            [33, oc.prototype.b.Aq, null, 7592758686732654, !1, [
                                [1, [2, "fureyeDiscoBridgeBeginning"]],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xa4e4530fbae1, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5061096270729184, !1, [
                                        [11, "SoundMode"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [31, C.prototype.b.Play, null, 5154819530629245, !1, [
                                        [2, ["024603202-super-click", !1]],
                                        [3, 0],
                                        [0, [0, 0]],
                                        [1, [2, "click"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xd17559ebd59ca, [],
                                [
                                    [-1, t.prototype.b.B, null, 0x6844010290882, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 9704448621373280, !1, [
                                        [11, "game"],
                                        [7, [0, 0]]
                                    ]]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0x623b015bd72e9, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6805653133469935, !1, [
                        [11, "game"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [],
                [
                    [0, null, !1, null, 9444829509771684, [
                            [31, C.prototype.d.Mf, null, 1, !1, !1, !1, 980558287426139, !1, [
                                [1, [2, "kick"]]
                            ]],
                            [1, Z.prototype.d.Xe, "move", 0, !1, !1, !1, 6458680649624363, !1],
                            [1, Z.prototype.d.od, "move", 0, !1, !1, !1, 4914334241118992, !1, [
                                [8, 3],
                                [0, [1, 0.8]]
                            ]],
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8718650738080375, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.B, null, 5200614288575119, !1, [
                                [0, [1, 0.07]]
                            ]],
                            [31, C.prototype.b.Play, null, 8814018087732303, !1, [
                                [2, ["008176387-swish-03", !1]],
                                [3, 0],
                                [0, [0, -3]],
                                [1, [2, "kick"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8503510139964607, [
                            [1, u.prototype.d.ni, null, 1, !1, !1, !1, 335952452064277, !1, [
                                [1, [2, "wykopy2"]]
                            ]],
                            [1, Z.prototype.d.Xe, "move", 0, !1, !1, !1, 7083719151031491, !1],
                            [1, Z.prototype.d.od, "move", 0, !1, !1, !1, 9358208644556572, !1, [
                                [8, 3],
                                [0, [1, 0.8]]
                            ]]
                        ],
                        [
                            [1, u.prototype.b.F, null, 8987217993836475, !1, [
                                [1, [2, "wykopy2"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 908720204873499, [
                            [31, C.prototype.d.Mf, null, 1, !1, !1, !1, 6635773323905122, !1, [
                                [1, [2, "wipe"]]
                            ]],
                            [1, Z.prototype.d.Xe, "move", 0, !1, !1, !1, 0x3bd215cfdb47a, !1],
                            [1, Z.prototype.d.od, "move", 0, !1, !1, !1, 6330899452731324, !1, [
                                [8, 3],
                                [0, [1, 0.8]]
                            ]],
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xa1468d964fafd, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.B, null, 5994717800532579, !1, [
                                [0, [1, 0.1]]
                            ]],
                            [31, C.prototype.b.Play, null, 5742299449866462, !1, [
                                [2, ["040210706-wiping-feet", !1]],
                                [3, 0],
                                [0, [0, -5]],
                                [1, [2, "wipe"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xe83fafa8dcba4, [
                            [31, C.prototype.d.Mf, null, 1, !1, !1, !1, 0xc724c4f0e9430, !1, [
                                [1, [2, "tapping"]]
                            ]],
                            [1, u.prototype.d.gc, null, 0, !1, !1, !1, 9157879550225440, !1, [
                                [1, [2, "front1"]]
                            ]],
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6588777896247089, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 8700853544363608, !1, [
                                [2, ["021258742-tap-dance-steps-1", !1]],
                                [3, 0],
                                [0, [0, 10]],
                                [1, [2, "tapping"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xe4d7153a61c76, [
                            [1, Z.prototype.d.lc, "LiteTween4tylek", 1, !1, !1, !1, 0x58eb7ef3a696a, !1],
                            [1, Z.prototype.d.Xe, "move", 0, !1, !1, !1, 9116237394517704, !1],
                            [1, Z.prototype.d.od, "move", 0, !1, !1, !1, 0xe2508898f92b5, !1, [
                                [8, 3],
                                [0, [1, 0.9]]
                            ]]
                        ],
                        [
                            [1, Z.prototype.b.qi, "LiteTween4tylek", 0xe4c84c18a9452, !1, [
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xed48401e882f6, [
                            [1, Z.prototype.d.an, "LiteTween4tylek", 1, !1, !1, !1, 6254123644783723, !1],
                            [1, Z.prototype.d.Xe, "move", 0, !1, !1, !1, 6111183867756915, !1]
                        ],
                        [
                            [1, Z.prototype.b.D, "LiteTween4tylek", 0x9454c2d5c26d2, !1, [
                                [3, 0],
                                [3, 1]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xd05161c22b051, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7522366797410415, !1, [
                                        [11, "SoundMode"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [31, C.prototype.b.Play, null, 8190383583079163, !1, [
                                        [2, ["008727352-cartoon-bubble", !1]],
                                        [3, 0],
                                        [0, [0, 0]],
                                        [1, [2, "bounce2"]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 875164804427631, [
                            [1, u.prototype.d.ni, null, 1, !1, !1, !1, 0x5adca48e0efcd, !1, [
                                [1, [2, "moonwalk"]]
                            ]],
                            [1, Z.prototype.d.Xe, "move", 0, !1, !1, !1, 4953047017389145, !1],
                            [1, Z.prototype.d.od, "move", 0, !1, !1, !1, 6507295618191439, !1, [
                                [8, 3],
                                [0, [1, 0.95]]
                            ]]
                        ],
                        [
                            [1, u.prototype.b.F, null, 0xd39e3a82d5b83, !1, [
                                [1, [2, "moonwalk"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 717065489757184, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9113320129301320, !1, [
                                [11, "nowaPlatforma"],
                                [8, 0],
                                [7, [0, 3]]
                            ]],
                            [24, P.prototype.d.ya, null, 0, !1, !1, !1, 0x65f2555608129, !1, [
                                [8, 5],
                                [0, [0, 640]]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 0xf58ae110f9630, [
                                    [3, u.prototype.d.ya, null, 0, !1, !1, !1, 0x87e36214cde46, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [3, R.prototype.b.Ub, "Pin", 4809890626013118, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8219587416655514, [
                                    [8, u.prototype.d.ya, null, 0, !1, !1, !1, 5846265645515895, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [8, R.prototype.b.Ub, "Pin", 0xc6dad7f56fbe7, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 8896144703998474, [
                                    [9, u.prototype.d.ya, null, 0, !1, !1, !1, 0x8f02d90a2a7da, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [9, R.prototype.b.Ub, "Pin", 8566562734744723, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x6b60c48699611, [
                                    [12, u.prototype.d.ya, null, 0, !1, !1, !1, 575828569551598, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [12, R.prototype.b.Ub, "Pin", 0xeef0d7a27439b, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5414001513210193, [
                                    [11, u.prototype.d.ya, null, 0, !1, !1, !1, 8648020695292479, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [11, R.prototype.b.Ub, "Pin", 6336056500496469, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x7127229903b8d, [
                                    [46, u.prototype.d.ya, null, 0, !1, !1, !1, 8221052271614602, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [46, R.prototype.b.Ub, "Pin", 9693409721433752, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 9053942063453360, [
                                    [47, u.prototype.d.ya, null, 0, !1, !1, !1, 9819286951827524, !1, [
                                        [8, 4],
                                        [0, [0, 640]]
                                    ]]
                                ],
                                [
                                    [47, R.prototype.b.Ub, "Pin", 0x43d84e01bd2e3, !1, [
                                        [4, 24],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xbcee047298940, [],
                                [
                                    [-1, t.prototype.b.k, null, 6954155674630389, !1, [
                                        [11, "nowaPlatforma"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 0x4958568c50f34, !1, [
                                        [11, "pinezka2"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 7346943830318358, !1, [
                                        [0, [1, 0.1]]
                                    ]],
                                    [24, Z.prototype.b.Kd, "dojazd", 8360871114500447, !1, [
                                        [3, 0],
                                        [3, 27],
                                        [1, [2, ""]],
                                        [0, [1, 0.3]],
                                        [3, 0]
                                    ]],
                                    [24, Z.prototype.b.oe, "dojazd", 6658948454941667, !1, [
                                        [3, 0],
                                        [3, 0],
                                        [0, [23, "nextX"]]
                                    ]],
                                    [24, Z.prototype.b.oe, "dojazd", 0xf26144560017c, !1, [
                                        [3, 1],
                                        [3, 0],
                                        [0, [0, 580]]
                                    ]],
                                    [24, Z.prototype.b.D, "dojazd", 8273740499665247, !1, [
                                        [3, 0],
                                        [3, 1]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0x861aea817c53d, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7329473108255994, !1, [
                                [11, "nowaPlatforma"],
                                [8, 0],
                                [7, [0, 2]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 0x53c5815d50b37, !1, [
                                [11, "nowaPlatforma"],
                                [7, [0, 3]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5535144090117312, [
                            [46, u.prototype.d.Jd, null, 1, !1, !1, !1, 0x6946c28166608, !1]
                        ],
                        [
                            [46, u.prototype.b.Gq, null, 9638032319311764, !1, [
                                [3, 0],
                                [4, 24]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x60bada40fa94c, [
                            [47, u.prototype.d.Jd, null, 1, !1, !1, !1, 7871060683349109, !1]
                        ],
                        [
                            [47, u.prototype.b.mi, null, 7483973073764557, !1]
                        ]
                    ],
                    [0, null, !1, null, 0x70d80086f147c, [
                            [24, P.prototype.d.Jd, null, 1, !1, !1, !1, 0xd67b3663403a7, !1],
                            [24, P.prototype.d.ya, null, 0, !1, !1, !1, 0x4c0cbddbec9df, !1, [
                                [8, 5],
                                [0, [0, 190]]
                            ]]
                        ],
                        [
                            [24, P.prototype.b.Ye, null, 9379213420812528, !1, [
                                [0, [19, t.prototype.e.rd, [
                                    [19, t.prototype.e.random, [
                                        [0, 60],
                                        [5, [0, 590],
                                            [23, "nextX"]
                                        ]
                                    ]],
                                    [19, t.prototype.e.random, [
                                        [0, 60],
                                        [18, [16, [5, [0, 590],
                                                    [23, "nextX"]
                                                ],
                                                [0, 200]
                                            ],
                                            [0, 200],
                                            [5, [0, 590],
                                                [23, "nextX"]
                                            ]
                                        ]
                                    ]],
                                    [19, t.prototype.e.random, [
                                        [0, 60],
                                        [18, [16, [5, [0, 590],
                                                    [23, "nextX"]
                                                ],
                                                [0, 100]
                                            ],
                                            [0, 100],
                                            [5, [0, 590],
                                                [23, "nextX"]
                                            ]
                                        ]
                                    ]],
                                    [19, t.prototype.e.random, [
                                        [0, 60],
                                        [18, [16, [5, [0, 590],
                                                    [23, "nextX"]
                                                ],
                                                [0, 100]
                                            ],
                                            [0, 100],
                                            [5, [0, 590],
                                                [23, "nextX"]
                                            ]
                                        ]
                                    ]]
                                ]]]
                            ]],
                            [24, P.prototype.b.Ng, null, 9550767155502818, !1, [
                                [0, [0, 0]],
                                [0, [0, 0]],
                                [0, [20, 24, P.prototype.e.M, !1, null]],
                                [0, [0, 24]]
                            ]],
                            [-1, t.prototype.b.Aa, null, 0x5508721c70f40, !1, [
                                [4, 46],
                                [5, [0, 2]],
                                [0, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                        [20, 24, P.prototype.e.M, !1, null]
                                    ],
                                    [0, 1]
                                ]],
                                [0, [0, 581]]
                            ]],
                            [-1, t.prototype.b.Aa, null, 9850073844096936, !1, [
                                [4, 47],
                                [5, [0, 2]],
                                [0, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                        [20, 24, P.prototype.e.M, !1, null]
                                    ],
                                    [0, 1]
                                ]],
                                [0, [0, 581]]
                            ]],
                            [24, P.prototype.b.mi, null, 5398535700057895, !1],
                            [-1, t.prototype.b.k, null, 8842158574714965, !1, [
                                [11, "stageSzer"],
                                [7, [5, [20, 24, P.prototype.e.M, !1, null],
                                    [0, 50]
                                ]]
                            ]],
                            [-1, t.prototype.b.k, null, 9304027697171084, !1, [
                                [11, "tutDistance"],
                                [7, [4, [4, [0, -140],
                                        [20, 24, P.prototype.e.u, !1, null]
                                    ],
                                    [7, [20, 24, P.prototype.e.M, !1, null],

                                        [0, 2]
                                    ]
                                ]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6363918461450758, [
                                    [24, P.prototype.d.Ve, null, 0, !1, !1, !1, 5093971603912786, !1, [
                                        [8, 2],
                                        [0, [0, 140]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.Aa, null, 5284482846724514, !1, [
                                        [4, 8],
                                        [5, [0, 1]],
                                        [0, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                [7, [20, 24, P.prototype.e.M, !1, null],
                                                    [0, 2]
                                                ]
                                            ],
                                            [0, 11]
                                        ]],
                                        [0, [0, 601]]
                                    ]],
                                    [-1, t.prototype.b.Aa, null, 0x3a0473467806e, !1, [
                                        [4, 3],
                                        [5, [0, 1]],
                                        [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                            [7, [20, 24, P.prototype.e.M, !1, null],
                                                [0, 2]
                                            ]
                                        ]],
                                        [0, [0, 612]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 7753484874140177, [
                                    [24, P.prototype.d.Ve, null, 0, !1, !1, !1, 4760374071702092, !1, [
                                        [8, 5],
                                        [0, [0, 140]]
                                    ]]
                                ],
                                [],
                                [
                                    [0, null, !1, null, 5821234452421614, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8672445440839443, !1, [
                                                [11, "stageSzer"],
                                                [8, 2],
                                                [7, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [-1, t.prototype.b.Aa, null, 5536612705207094, !1, [
                                                [4, 12],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 36]
                                                ]],
                                                [0, [0, 642]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0xc043bdd3ed332, !1, [
                                                [4, 8],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 56]
                                                ]],
                                                [0, [0, 601]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 8657985097134918, !1, [
                                                [4, 8],
                                                [5, [0, 1]],
                                                [0, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 34]
                                                ]],
                                                [0, [0, 601]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 5492958339659257, !1, [
                                                [4, 9],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 25]
                                                ]],
                                                [0, [0, 649]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0x65d6619b78719, !1, [
                                                [4, 3],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 45]
                                                ]],
                                                [0, [0, 612]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 5914892612654785, !1, [
                                                [4, 3],
                                                [5, [0, 1]],
                                                [0, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 45]
                                                ]],
                                                [0, [0, 612]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 8976205957735024, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7628682153525034, !1, [
                                                [11, "stageSzer"],
                                                [8, 5],
                                                [7, [0, 140]]
                                            ]],
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9046634967701812, !1, [
                                                [11, "stageSzer"],
                                                [8, 3],
                                                [7, [0, 220]]
                                            ]]
                                        ],
                                        [
                                            [-1, t.prototype.b.Aa, null, 5764119045611747, !1, [
                                                [4, 12],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 36]
                                                ]],
                                                [0, [0, 642]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 4975512071431879, !1, [
                                                [4, 8],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 56]
                                                ]],
                                                [0, [0, 601]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0xcacf8198d9538, !1, [
                                                [4, 8],
                                                [5, [0, 1]],
                                                [0, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 34]
                                                ]],
                                                [0, [0, 601]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0x5aa7a789240c7, !1, [
                                                [4, 11],
                                                [5, [0, 1]],
                                                [0, [19, t.prototype.e.random, [
                                                    [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                            [0, 25]
                                                        ],
                                                        [0, 70]
                                                    ],
                                                    [5, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                                [0, 25]
                                                            ],
                                                            [23, "stageSzer"]
                                                        ],
                                                        [0, 70]
                                                    ]
                                                ]]],
                                                [0, [0, 649]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 4874642014317034, !1, [
                                                [4, 9],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 25]
                                                ]],
                                                [0, [0, 649]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 6730792355403397, !1, [
                                                [4, 3],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 45]
                                                ]],
                                                [0, [0, 612]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0xe297619407fd7, !1, [
                                                [4, 3],
                                                [5, [0, 1]],
                                                [0, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 45]
                                                ]],
                                                [0, [0, 612]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 0xfce96363f240b, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9637052314876280, !1, [
                                                [11, "stageSzer"],
                                                [8, 4],
                                                [7, [0, 220]]
                                            ]]
                                        ],
                                        [
                                            [-1, t.prototype.b.Aa, null, 8895230384716953, !1, [
                                                [4, 12],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 36]
                                                ]],
                                                [0, [0, 642]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0x87d908b841b8b, !1, [
                                                [4, 8],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 56]
                                                ]],
                                                [0, [0, 601]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 7344777099658728, !1, [
                                                [4, 8],
                                                [5, [0, 1]],
                                                [0, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 34]
                                                ]],
                                                [0, [0, 601]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0x7bdf529d3e0be, !1, [
                                                [4, 11],
                                                [5, [0, 1]],
                                                [0, [19, t.prototype.e.random, [
                                                    [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                            [0, 25]
                                                        ],
                                                        [0, 70]
                                                    ],
                                                    [5, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                                [0, 25]
                                                            ],
                                                            [7, [23, "stageSzer"],
                                                                [0, 2]
                                                            ]
                                                        ],
                                                        [0, 30]
                                                    ]
                                                ]]],
                                                [0, [0, 649]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 0xc71974f3eed43, !1, [
                                                [4, 11],
                                                [5, [0, 1]],
                                                [0, [19, t.prototype.e.random, [
                                                    [4, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                                [0, 25]
                                                            ],
                                                            [7, [23, "stageSzer"],
                                                                [0, 2]
                                                            ]
                                                        ],
                                                        [0, 30]
                                                    ],
                                                    [5, [4, [4, [20, 24, P.prototype.e.u, !1, null],
                                                                [0, 25]
                                                            ],
                                                            [23, "stageSzer"]
                                                        ],
                                                        [0, 70]
                                                    ]
                                                ]]],
                                                [0, [0, 649]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 8523728733273375, !1, [
                                                [4, 9],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 25]
                                                ]],
                                                [0, [0, 649]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 5502284832764253, !1, [
                                                [4, 3],
                                                [5, [0, 1]],
                                                [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [0, 45]
                                                ]],
                                                [0, [0, 612]]
                                            ]],
                                            [-1, t.prototype.b.Aa, null, 8579332541033341, !1, [
                                                [4, 3],
                                                [5, [0, 1]],
                                                [0, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 45]
                                                ]],
                                                [0, [0, 612]]
                                            ]]
                                        ]
                                    ]
                                ]
                            ],
                            [0, null, !1, null, 0x5b82df0a5270a, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7230905548301996, !1, [
                                        [11, "nowaPlatforma"],
                                        [8, 0],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 0xf4fd9aa616249, !1, [
                                        [11, "nowaPlatforma"],
                                        [7, [0, 2]]
                                    ]]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8892743016778592, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x7931a7c5e8cbe, !1, [
                                [11, "przesuwanie"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 9650079325527008, [
                                    [2, G.prototype.d.oi, null, 1, !1, !1, !1, 0xf6aa6363f77fa, !1],
                                    [2, G.prototype.d.Lf, null, 0, !1, !0, !1, 0x3d27ffd12e41e, !1, [
                                        [4, 22]
                                    ]],
                                    [2, G.prototype.d.Lf, null, 0, !1, !0, !1, 5391330049190312, !1, [
                                        [4, 4]
                                    ]],
                                    [2, G.prototype.d.Lf, null, 0, !1, !0, !1, 0x694277681d042, !1, [
                                        [4, 5]
                                    ]],
                                    [2, G.prototype.d.Lf, null, 0, !1, !0, !1, 9954401728935872, !1, [
                                        [4, 20]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 9162642320632784, !1, [
                                        [11, "przesuwanie"],
                                        [7, [0, 1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 0xdf133c6a34623, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x9f1bfb2b02e3a, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 0xc4212496d4b2e, !1, [
                                                [2, ["010758098-finger-click", !1]],
                                                [3, 1],
                                                [0, [0, 0]],
                                                [1, [2, "building"]]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9877831787215266, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6838409984260925, !1, [
                                [11, "przesuwanie"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 942872290346054, [
                                    [2, G.prototype.d.lq, null, 0, !1, !1, !1, 579461578872115, !1],
                                    [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 8500733638759751, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]]
                                ],
                                [
                                    [19, P.prototype.b.Ye, null, 9058253995880628, !1, [
                                        [0, [18, [14, [4, [20, 19, P.prototype.e.M, !1, null],
                                                    [6, [0, 720],
                                                        [19, t.prototype.e.bb]
                                                    ]
                                                ],
                                                [0, 460]
                                            ],
                                            [4, [20, 19, P.prototype.e.M, !1, null],
                                                [6, [0, 720],
                                                    [19, t.prototype.e.bb]
                                                ]
                                            ],
                                            [0, 460]
                                        ]]
                                    ]],
                                    [19, P.prototype.b.Ng, null, 0x750c9bf5407bc, !1, [
                                        [0, [0, 0]],
                                        [0, [0, 0]],
                                        [0, [18, [14, [4, [20, 19, P.prototype.e.M, !1, null],
                                                    [6, [0, 720],
                                                        [19, t.prototype.e.bb]
                                                    ]
                                                ],
                                                [0, 460]
                                            ],
                                            [4, [20, 19, P.prototype.e.M, !1, null],
                                                [6, [0, 720],
                                                    [19, t.prototype.e.bb]
                                                ]
                                            ],
                                            [0, 460]
                                        ]],
                                        [0, [0, 24]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0x89e72e108645a, [
                                    [2, G.prototype.d.Lg, null, 1, !1, !1, !1, 7193683727755901, !1],
                                    [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 8795368012565376, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 4835689851318127, !1, [
                                        [11, "przesuwanie"],
                                        [7, [0, 200]]
                                    ]],
                                    [31, C.prototype.b.Kc, null, 7433427230286745, !1, [
                                        [1, [2, "building"]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 0x39bd625bd393f, [
                                            [47, u.prototype.d.Tb, null, 0, !1, !1, !0, 709363341151294, !1, [
                                                [3, 0],
                                                [0, [20, 19, P.prototype.e.u, !1, null]],
                                                [0, [20, 19, P.prototype.e.jb, !1, null]]
                                            ]]
                                        ],
                                        [
                                            [47, R.prototype.b.Ub, "Pin", 0x92c51261ab51, !1, [
                                                [4, 19],
                                                [3, 0]
                                            ]],
                                            [47, u.prototype.b.X, null, 9681838787348984, !1, [
                                                [3, 1]
                                            ]],
                                            [47, Z.prototype.b.D, "LiteTween", 5919782072229146, !1, [
                                                [3, 0],
                                                [3, 0]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 5690312386812588, [
                                            [46, u.prototype.d.Tb, null, 0, !1, !1, !0, 0xa6f76969a3a58, !1, [
                                                [3, 0],
                                                [0, [20, 19, P.prototype.e.u, !1, null]],
                                                [0, [20, 19, P.prototype.e.jb, !1, null]]
                                            ]]
                                        ],
                                        [
                                            [46, u.prototype.b.X, null, 817056729656787, !1, [
                                                [3, 1]
                                            ]],
                                            [46, Z.prototype.b.D, "LiteTween", 7609700239387471, !1, [
                                                [3, 0],
                                                [3, 0]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 0xee86e4b193558, [],
                                        [
                                            [-1, t.prototype.b.B, null, 9084701172653380, !1, [
                                                [0, [1, 0.2]]
                                            ]],
                                            [-1, t.prototype.b.k, null, 0xe975e4cb6b065, !1, [
                                                [11, "animacjaPunch"],
                                                [7, [18, [12, [23, "animacjaStand"],
                                                        [0, 1]
                                                    ],
                                                    [19, t.prototype.e.rd, [
                                                        [0, 11],
                                                        [0, 12]
                                                    ]],
                                                    [18, [12, [23, "animacjaStand"],
                                                            [0, 2]
                                                        ],
                                                        [19, t.prototype.e.rd, [
                                                            [0, 21],
                                                            [0, 22]
                                                        ]],
                                                        [19, t.prototype.e.rd, [
                                                            [0, 31],
                                                            [0, 32]
                                                        ]]
                                                    ]
                                                ]]
                                            ]],
                                            [-1, t.prototype.b.k, null, 9097873529671304, !1, [
                                                [11, "animacjaMove"],
                                                [7, [18, [12, [23, "animacjaStand"],
                                                        [0, 1]
                                                    ],
                                                    [19, t.prototype.e.rd, [
                                                        [0, 11],
                                                        [0, 12]
                                                    ]],
                                                    [18, [12, [23, "animacjaStand"],
                                                            [0, 2]
                                                        ],
                                                        [19, t.prototype.e.rd, [
                                                            [0, 21],
                                                            [0, 22]
                                                        ]],
                                                        [19, t.prototype.e.rd, [
                                                            [0, 31],
                                                            [0, 32]
                                                        ]]
                                                    ]
                                                ]]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 8381657852684581, [
                                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xca43793e3943f, !1, [
                                                        [11, "SoundMode"],
                                                        [8, 0],
                                                        [7, [0, 0]]
                                                    ]]
                                                ],
                                                [],
                                                [
                                                    [0, null, !0, null, 0x7660f3ee38c85, [
                                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7720510281483361, !1, [
                                                                [11, "animacjaPunch"],
                                                                [8, 0],
                                                                [7, [0, 11]]
                                                            ]],
                                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x50d8aeced610d, !1, [
                                                                [11, "animacjaPunch"],
                                                                [8, 0],
                                                                [7, [0, 21]]
                                                            ]],
                                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5690670141512524, !1, [
                                                                [11, "animacjaPunch"],
                                                                [8, 0],
                                                                [7, [0, 22]]
                                                            ]]
                                                        ],
                                                        [
                                                            [31, C.prototype.b.Play, null, 5607494261911973, !1, [
                                                                [2, ["008874896-punch-face", !1]],
                                                                [3, 0],
                                                                [0, [0, 5]],
                                                                [1, [2, "hit"]]
                                                            ]]
                                                        ]
                                                    ]
                                                ]
                                            ],
                                            [0, null, !1, null, 0x3acf8eafb32b5, [],
                                                [
                                                    [-1, t.prototype.b.B, null, 6300655169457432, !1, [
                                                        [0, [1, 0.2]]
                                                    ]]
                                                ],
                                                [
                                                    [0, null, !1, null, 6353283458281901, [
                                                            [-1, t.prototype.d.Vm, null, 0, !0, !1, !1, 5591007342369302, !1, [
                                                                [4, 45]
                                                            ]]
                                                        ],
                                                        [
                                                            [45, u.prototype.b.ri, null, 0x8da8b61f2f2b3, !1, [
                                                                [10, 0],
                                                                [7, [19, t.prototype.e.random, [
                                                                    [0, 0],
                                                                    [1, 2.3]
                                                                ]]]
                                                            ]]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 6611531125414309, [
                            [10, u.prototype.d.ya, null, 0, !1, !1, !1, 7376918259620984, !1, [
                                [8, 1],
                                [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                    [21, 10, !1, null, 0]
                                ]]
                            ]]
                        ],
                        [
                            [10, u.prototype.b.Og, null, 0xde6463c386867, !1, [
                                [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                    [21, 10, !1, null, 0]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x4b0f7c3a514b4, [
                            [14, u.prototype.d.ya, null, 0, !1, !1, !1, 0x3db6d7c979f97, !1, [
                                [8, 1],
                                [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                    [21, 14, !1, null, 0]
                                ]]
                            ]]
                        ],
                        [
                            [14, u.prototype.b.Og, null, 0x41c5350f5f32d, !1, [
                                [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                    [21, 14, !1, null, 0]
                                ]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6500606126435492, [
                            [9, u.prototype.d.Jd, null, 1, !1, !1, !1, 0x3c2c248f276d2, !1],
                            [9, u.prototype.d.ya, null, 0, !1, !1, !1, 0x6b8b6b4c38ec5, !1, [
                                [8, 4],
                                [0, [0, 0]]
                            ]]
                        ],
                        [
                            [9, u.prototype.b.Ye, null, 5107559791050503, !1, [
                                [0, [23, "stageSzer"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5752301344327017, [
                            [12, u.prototype.d.Jd, null, 1, !1, !1, !1, 0xfd37f67f1e0e8, !1],
                            [12, u.prototype.d.ya, null, 0, !1, !1, !1, 0xd00eb7b78447c, !1, [
                                [8, 4],
                                [0, [0, 0]]
                            ]]
                        ],
                        [
                            [12, u.prototype.b.Ye, null, 4886778311470974, !1, [
                                [0, [23, "stageSzer"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5750294674767199, [
                            [24, Z.prototype.d.lc, "dojazd", 1, !1, !1, !1, 4589415736448536, !1],
                            [24, P.prototype.d.ya, null, 0, !1, !1, !1, 0xa526e42f38b5f, !1, [
                                [8, 5],
                                [0, [0, 140]]
                            ]],
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8405835238283512, !1, [
                                [11, "pinezka2"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 5821932328924645, !1, [
                                [11, "pinezka2"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 0x9bc13238efd2b, !1, [
                                [11, "przesuwanie"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.B, null, 0x52b048da3f0ac, !1, [
                                [0, [1, 0.1]]
                            ]],
                            [3, R.prototype.b.Pa, "Pin", 0x7aa7bc341102, !1],
                            [3, R.prototype.b.Pa, "Pin", 0xaf3b24453b20c, !1],
                            [8, R.prototype.b.Pa, "Pin", 7418676067022706, !1],
                            [9, R.prototype.b.Pa, "Pin", 4505465963877648, !1],
                            [12, R.prototype.b.Pa, "Pin", 4915225589334646, !1],
                            [11, R.prototype.b.Pa, "Pin", 6792349744111346, !1],
                            [46, R.prototype.b.Pa, "Pin", 0xb8aa3a901b80f, !1],
                            [47, R.prototype.b.Pa, "Pin", 890525893950955, !1]
                        ]
                    ],
                    [0, null, !1, null, 4803638209308375, [
                            [19, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 0xb5bb972b8ffd7, !1],
                            [24, P.prototype.d.ya, null, 0, !1, !1, !1, 9134321430846588, !1, [
                                [8, 5],
                                [0, [0, 100]]
                            ]],
                            [24, P.prototype.d.Tb, null, 0, !1, !1, !0, 0x927870e3b08e5, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]],
                            [1, Z.prototype.d.od, "fall", 0, !1, !1, !1, 8756203632120997, !1, [
                                [8, 0],
                                [0, [0, 0]]
                            ]]
                        ],
                        [],
                        [
                            [0, null, !1, null, 4800164899908605, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8215891611454358, !1, [
                                        [11, "SoundMode"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [31, C.prototype.b.Play, null, 0x5568bc07f6950, !1, [
                                        [2, ["002343863-sound-designboommetaldark-reve", !1]],
                                        [3, 0],
                                        [0, [0, 0]],
                                        [1, [2, "platformFall"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xa4e10df557c94, [],
                                [
                                    [1, Z.prototype.b.Kd, "move", 7047596673852184, !1, [
                                        [3, 0],
                                        [3, 0],
                                        [1, [2, ""]],
                                        [0, [0, 0]],
                                        [3, 0]
                                    ]],
                                    [1, Z.prototype.b.oe, "move", 7489488308666192, !1, [
                                        [3, 0],
                                        [3, 0],
                                        [0, [18, [10, [16, [4, [20, 19, P.prototype.e.u, !1, null],
                                                        [20, 19, P.prototype.e.M, !1, null]
                                                    ],
                                                    [20, 24, P.prototype.e.u, !1, null]
                                                ],
                                                [14, [4, [20, 19, P.prototype.e.u, !1, null],
                                                        [20, 19, P.prototype.e.M, !1, null]
                                                    ],
                                                    [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ]
                                                ]
                                            ],
                                            [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                    [20, 24, P.prototype.e.M, !1, null]
                                                ],
                                                [0, 50]
                                            ],
                                            [5, [4, [20, 19, P.prototype.e.u, !1, null],
                                                    [20, 19, P.prototype.e.M, !1, null]
                                                ],
                                                [0, 50]
                                            ]
                                        ]]
                                    ]],
                                    [1, Z.prototype.b.oe, "move", 9270861265100126, !1, [
                                        [3, 1],
                                        [3, 1],
                                        [0, [0, 0]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 8843504683960713, !1, [
                                        [11, "moveDur"],
                                        [7, [4, [1, 0.5],
                                            [6, [1, 0.6],
                                                [7, [5, [18, [10, [16, [4, [20, 19, P.prototype.e.u, !1, null],
                                                                        [20, 19, P.prototype.e.M, !1, null]
                                                                    ],
                                                                    [20, 24, P.prototype.e.u, !1, null]
                                                                ],
                                                                [14, [4, [20, 19, P.prototype.e.u, !1, null],
                                                                        [20, 19, P.prototype.e.M, !1, null]
                                                                    ],
                                                                    [4, [20, 24, P.prototype.e.u, !1, null],
                                                                        [20, 24, P.prototype.e.M, !1, null]
                                                                    ]
                                                                ]
                                                            ],
                                                            [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                                    [20, 24, P.prototype.e.M, !1, null]
                                                                ],
                                                                [0, 50]
                                                            ],
                                                            [5, [4, [20, 19, P.prototype.e.u, !1, null],
                                                                    [20, 19, P.prototype.e.M, !1, null]
                                                                ],
                                                                [0, 50]
                                                            ]
                                                        ],
                                                        [20, 1, u.prototype.e.u, !1, null]
                                                    ],
                                                    [0, 500]
                                                ]
                                            ]
                                        ]]
                                    ]],
                                    [1, Z.prototype.b.yk, "move", 4607280070636717, !1, [
                                        [0, [18, [12, [23, "animacjaMove"],
                                                [0, 32]
                                            ],
                                            [0, 0],
                                            [18, [14, [23, "moveDur"],
                                                    [1, 0.6]
                                                ],
                                                [1, 0.45],
                                                [18, [14, [23, "moveDur"],
                                                        [1, 0.9]
                                                    ],
                                                    [1, 0.9],
                                                    [1, 1.2]
                                                ]
                                            ]
                                        ]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 8733337953039173, !1, [
                                        [0, [18, [12, [23, "animacjaMove"],
                                                [0, 120]
                                            ],
                                            [1, 0.5],
                                            [18, [12, [23, "animacjaMove"],
                                                    [0, 220]
                                                ],
                                                [1, 0.1],
                                                [18, [12, [23, "animacjaMove"],
                                                        [0, 32]
                                                    ],
                                                    [1, 1.2],
                                                    [0, 0]
                                                ]
                                            ]
                                        ]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 7019437673389809, !1, [
                                        [0, [18, [11, [11, [12, [23, "animacjaPunch"],
                                                        [0, 11]
                                                    ],
                                                    [12, [23, "animacjaPunch"],
                                                        [0, 21]
                                                    ]
                                                ],
                                                [12, [23, "animacjaPunch"],
                                                    [0, 22]
                                                ]
                                            ],
                                            [1, 0.1],
                                            [0, 0]
                                        ]]
                                    ]],
                                    [1, Z.prototype.b.D, "move", 5500426136784297, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 8296346119635277, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xb8601e3732dd0, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 120]]
                                            ]]
                                        ],
                                        [
                                            [1, Z.prototype.b.yk, "LiteTween1gwiazda", 8465025381084705, !1, [
                                                [0, [22, 1, "move", Z.prototype.e.Um, !1, null]]
                                            ]],
                                            [1, Z.prototype.b.oe, "LiteTween1gwiazda", 7331367356064271, !1, [
                                                [3, 2],
                                                [3, 1],
                                                [0, [18, [14, [23, "moveDur"],
                                                        [1, 0.6]
                                                    ],
                                                    [0, 720],
                                                    [18, [14, [23, "moveDur"],
                                                            [1, 0.9]
                                                        ],
                                                        [0, 1080],
                                                        [0, 1440]
                                                    ]
                                                ]]
                                            ]],
                                            [1, Z.prototype.b.D, "LiteTween1gwiazda", 0x858b8c052f942, !1, [
                                                [3, 0],
                                                [3, 1]
                                            ]],
                                            [1, u.prototype.b.Ak, null, 9866151082447704, !1, [
                                                [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                                    [1, 6.3]
                                                ]],
                                                [0, [5, [20, 1, u.prototype.e.jb, !1, null],
                                                    [1, 76.3]
                                                ]]
                                            ]],
                                            [1, u.prototype.b.F, null, 438195089487971, !1, [
                                                [1, [2, "gwiazda25"]],
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xcad0b9c5cead2, [
                            [1, Z.prototype.d.lc, "move", 1, !1, !1, !1, 0xaaa3c294c8a05, !1]
                        ],
                        [],
                        [
                            [0, null, !1, null, 9479574098123228, [
                                    [31, C.prototype.d.rk, null, 0, !1, !1, !1, 9589800330359688, !1, [
                                        [1, [2, "StarSpin"]]
                                    ]],
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6891878963660698, !1, [
                                        [11, "SoundMode"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [31, C.prototype.b.Kc, null, 860721212493699, !1, [
                                        [1, [2, "StarSpin"]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xab59613b013ff, [
                                    [24, P.prototype.d.ya, null, 0, !1, !1, !1, 6060792737071487, !1, [
                                        [8, 5],
                                        [0, [0, 100]]
                                    ]],
                                    [24, P.prototype.d.Tb, null, 0, !1, !1, !0, 0xded80351958e8, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]],
                                    [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 0x7775c9db3a230, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]],
                                    [-1, t.prototype.d.Tm, null, 0, !1, !1, !1, 0x8b975bbb7297, !1, [
                                        [0, [4, [20, 19, P.prototype.e.u, !1, null],
                                            [20, 19, P.prototype.e.M, !1, null]
                                        ]],
                                        [0, [20, 24, P.prototype.e.u, !1, null]],
                                        [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                            [20, 24, P.prototype.e.M, !1, null]
                                        ]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.fq, null, 5422355598045029, !1, [
                                        [11, "score"],
                                        [7, [0, 1]]
                                    ]],
                                    [36, nc.prototype.b.Bk, null, 7911456122689236, !1, [
                                        [7, [23, "score"]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 0xc78061f1d61d5, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6403417077786499, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 0xdd6d0f14da3a8, !1, [
                                                [2, ["008836163-small-short-applause", !1]],
                                                [3, 0],
                                                [0, [0, -5]],
                                                [1, [2, ""]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 9353950670250054, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5430285847553208, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 120]]
                                            ]]
                                        ],
                                        [
                                            [55, R.prototype.b.Pa, "Pin", 830362184089275, !1],
                                            [54, R.prototype.b.Pa, "Pin", 7652871515679812, !1],
                                            [1, u.prototype.b.F, null, 7960216531634466, !1, [
                                                [1, [2, "front"]],
                                                [3, 1]
                                            ]],
                                            [1, u.prototype.b.Ak, null, 0xf28a9dd6cdaee, !1, [
                                                [0, [5, [20, 1, u.prototype.e.u, !1, null],
                                                    [1, 6.3]
                                                ]],
                                                [0, [4, [20, 1, u.prototype.e.jb, !1, null],
                                                    [1, 76.3]
                                                ]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 7932225496419102, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x85f627efc96f3, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 220]]
                                            ]]
                                        ],
                                        [
                                            [55, R.prototype.b.Pa, "Pin", 0x3efca3cbfca9b, !1],
                                            [54, R.prototype.b.Pa, "Pin", 674613880219378, !1],
                                            [1, Z.prototype.b.Kc, "LiteTween4tylek", 0xadebcf5eca08a, !1, [
                                                [3, 0]
                                            ]],
                                            [1, u.prototype.b.Ck, null, 0x8d71e2c5543fe, !1, [
                                                [0, [0, 586]]
                                            ]],
                                            [1, u.prototype.b.F, null, 6478683962294426, !1, [
                                                [1, [2, "glowa"]],
                                                [3, 1]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 8007753267670954, [],
                                        [
                                            [-1, t.prototype.b.k, null, 0x64ec2e53da857, !1, [
                                                [11, "powrotTarg"],
                                                [7, [0, 1]]
                                            ]],
                                            [1, Z.prototype.b.Kd, "powrot", 0x98abaf4912abc, !1, [
                                                [3, 0],
                                                [3, 27],
                                                [1, [2, ""]],
                                                [0, [1, 0.5]],
                                                [3, 0]
                                            ]],
                                            [1, Z.prototype.b.oe, "powrot", 0xfccd2b0be2d4e, !1, [
                                                [3, 0],
                                                [3, 1],
                                                [0, [3, [5, [4, [20, 24, P.prototype.e.u, !1, null],
                                                        [20, 24, P.prototype.e.M, !1, null]
                                                    ],
                                                    [0, 140]
                                                ]]]
                                            ]],
                                            [1, Z.prototype.b.oe, "powrot", 0xd0f2428ca9774, !1, [
                                                [3, 1],
                                                [3, 1],
                                                [0, [0, 0]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 4971244926977086, [],
                                        [
                                            [15, u.prototype.b.F, null, 0x818c8c46a40b4, !1, [
                                                [1, [2, "anim2"]],
                                                [3, 1]
                                            ]],
                                            [-1, t.prototype.b.B, null, 0xf7d896ca54711, !1, [
                                                [0, [1, 0.8]]
                                            ]],
                                            [15, u.prototype.b.F, null, 0xbae5c358ba426, !1, [
                                                [1, [2, "default"]],
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ],
                            [0, null, !1, null, 0x8e9958b2e17e2, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x5946c0b67e078, !1, [
                                        [11, "powrotTarg"],
                                        [8, 1],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 0xcdbd29d7b99c, !1, [
                                        [11, "powrotTarg"],
                                        [7, [0, 0]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0xcc8959118738d, !1, [
                                        [0, [1, 0.07]]
                                    ]],
                                    [54, R.prototype.b.Ub, "Pin", 681222389748149, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [3, R.prototype.b.Ub, "Pin", 0x8ce3e25527b64, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [8, R.prototype.b.Ub, "Pin", 4678570577202936, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [9, R.prototype.b.Ub, "Pin", 7913063347746498, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [12, R.prototype.b.Ub, "Pin", 7430397074647576, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [11, R.prototype.b.Ub, "Pin", 4965297538107348, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [46, R.prototype.b.Ub, "Pin", 8526002986988897, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [47, R.prototype.b.Ub, "Pin", 5041603861052565, !1, [
                                        [4, 1],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 5509326220255035, !1, [
                                        [0, [1, 0.07]]
                                    ]],
                                    [1, Z.prototype.b.D, "powrot", 6422206965422553, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]],
                                    [-1, t.prototype.b.B, null, 5500514048023771, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 0xc99c1497e8b55, !1, [
                                        [11, "pinezka1"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 0xe08a840143040, !1, [
                                        [11, "nowaPlatforma"],
                                        [7, [0, 1]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 5306563899930313, !1, [
                                        [11, "nextX"],
                                        [7, [19, t.prototype.e.random, [
                                            [0, 190],
                                            [0, 510]
                                        ]]]
                                    ]],
                                    [-1, t.prototype.b.Aa, null, 0xad3db0557fdea, !1, [
                                        [4, 24],
                                        [5, [0, 2]],
                                        [0, [0, 700]],
                                        [0, [0, 580]]
                                    ]],
                                    [-1, t.prototype.b.k, null, 0x41a777cdc6b04, !1, [
                                        [11, "animacjaStand"],
                                        [7, [19, t.prototype.e.rd, [
                                            [0, 1],
                                            [0, 2],
                                            [0, 3]
                                        ]]]
                                    ]],
                                    [1, u.prototype.b.F, null, 4790786662569352, !1, [
                                        [1, [18, [12, [23, "animacjaStand"],
                                                [0, 1]
                                            ],
                                            [2, "front"],
                                            [18, [12, [23, "animacjaStand"],
                                                    [0, 2]
                                                ],
                                                [2, "glowa"],
                                                [2, "glowa2"]
                                            ]
                                        ]],
                                        [3, 1]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 5857450591605062, [
                                    [24, P.prototype.d.ya, null, 0, !1, !1, !1, 0xd5d4f05aa37a7, !1, [
                                        [8, 5],
                                        [0, [0, 100]]
                                    ]],
                                    [24, P.prototype.d.Tb, null, 0, !1, !1, !0, 0xb0c29324258da, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]],
                                    [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 6528884823883804, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]],
                                    [-1, t.prototype.d.Tm, null, 0, !1, !0, !1, 7793047753341731, !1, [
                                        [0, [4, [20, 19, P.prototype.e.u, !1, null],
                                            [20, 19, P.prototype.e.M, !1, null]
                                        ]],
                                        [0, [20, 24, P.prototype.e.u, !1, null]],
                                        [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                            [20, 24, P.prototype.e.M, !1, null]
                                        ]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 7455989264814259, !1, [
                                        [11, "game"],
                                        [7, [0, 2]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0x56b295bf2eed1, !1, [
                                        [0, [18, [12, [20, 1, u.prototype.e.Opacity, !1, null],
                                                [0, 100]
                                            ],
                                            [0, 0],
                                            [1, 0.07]
                                        ]]
                                    ]],
                                    [55, R.prototype.b.Pa, "Pin", 0xd019d0dc71445, !1],
                                    [54, R.prototype.b.Pa, "Pin", 7153387726460677, !1],
                                    [1, u.prototype.b.F, null, 5517288507781301, !1, [
                                        [1, [2, "front"]],
                                        [3, 1]
                                    ]],
                                    [1, u.prototype.b.Ak, null, 9038845528689976, !1, [
                                        [0, [5, [20, 1, u.prototype.e.u, !1, null],
                                            [1, 6.3]
                                        ]],
                                        [0, [4, [20, 1, u.prototype.e.jb, !1, null],
                                            [1, 76.3]
                                        ]]
                                    ]],
                                    [1, Z.prototype.b.D, "fall", 4745753603245422, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]],
                                    [19, Z.prototype.b.D, "LiteTween2", 715437340420945, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]],
                                    [19, Z.prototype.b.D, "LiteTween3", 5002320466290534, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]],
                                    [10, u.prototype.b.F, null, 4882768212728331, !1, [
                                        [1, [2, "anim2"]],
                                        [3, 1]
                                    ]],
                                    [14, Z.prototype.b.D, "LiteTween", 798080387397885, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]],
                                    [1, u.prototype.b.F, null, 6816244706821495, !1, [
                                        [1, [2, "upadek"]],
                                        [3, 0]
                                    ]],
                                    [13, u.prototype.b.X, null, 0x4d8686abc16eb, !1, [
                                        [3, 1]
                                    ]],
                                    [13, Z.prototype.b.Kd, "LiteTween", 635987763498657, !1, [
                                        [3, 5],
                                        [3, 4],
                                        [1, [2, "50"]],
                                        [0, [1, 0.2]],
                                        [3, 0]
                                    ]],
                                    [13, Z.prototype.b.D, "LiteTween", 9825421531877412, !1, [
                                        [3, 0],
                                        [3, 0]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 6098718675774987, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 736757772073005, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 8866137180756265, !1, [
                                                [2, ["043102532-male-falling-jump-shout", !1]],
                                                [3, 0],
                                                [0, [0, 5]],
                                                [1, [2, ""]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 0x6a58f375eee76, [],
                                        [
                                            [-1, t.prototype.b.B, null, 0x8f4011ddda758, !1, [
                                                [0, [1, 0.4]]
                                            ]],
                                            [17, Qc.prototype.b.hn, "ScrollTo", 5281265485810335, !1, [
                                                [0, [0, 30]],
                                                [0, [1, 0.8]],
                                                [3, 0]
                                            ]],
                                            [15, rc.prototype.b.ne, "Sine", 9602123052229002, !1, [
                                                [3, 0]
                                            ]],
                                            [28, u.prototype.b.X, null, 0xd8481425f9e9d, !1, [
                                                [3, 1]
                                            ]],
                                            [28, Z.prototype.b.D, "LiteTween", 0xa83c5ce6b0a6f, !1, [
                                                [3, 0],
                                                [3, 1]
                                            ]],
                                            [31, C.prototype.b.Kc, null, 8361964686039708, !1, [
                                                [1, [2, "muza"]]
                                            ]],
                                            [16, rc.prototype.b.ne, "Sine", 9041418466653384, !1, [
                                                [3, 0]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 0x4c8ddf3e6e6cd, [
                                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9566390525183, !1, [
                                                        [11, "SoundMode"],
                                                        [8, 0],
                                                        [7, [0, 0]]
                                                    ]]
                                                ],
                                                [
                                                    [31, C.prototype.b.Play, null, 8588032846904796, !1, [
                                                        [2, ["041711798-stamp-or-icon-impact-1-whoosh-", !1]],
                                                        [3, 0],
                                                        [0, [0, 0]],
                                                        [1, [2, ""]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 8917206810734033, [
                            [1, Z.prototype.d.od, "powrot", 0, !1, !1, !1, 5731297790398717, !1, [
                                [8, 0],
                                [0, [0, 1]]
                            ]],
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x6446215a5821e, !1, [
                                [11, "pinezka1"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 0x7ec1d933262c7, !1, [
                                [11, "pinezka1"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.B, null, 289062519789602, !1, [
                                [0, [1, 0.1]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 6511397413960394, [
                                    [24, P.prototype.d.ya, null, 0, !1, !1, !1, 8109402866382103, !1, [
                                        [8, 3],
                                        [0, [0, 100]]
                                    ]],
                                    [24, P.prototype.d.Tb, null, 0, !1, !1, !0, 6707129933274853, !1, [
                                        [3, 0],
                                        [0, [20, 1, u.prototype.e.u, !1, null]],
                                        [0, [20, 1, u.prototype.e.jb, !1, null]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.Aa, null, 4967494861938268, !1, [
                                        [4, 19],
                                        [5, [0, 2]],
                                        [0, [4, [20, 24, P.prototype.e.u, !1, null],
                                            [20, 24, P.prototype.e.M, !1, null]
                                        ]],
                                        [0, [0, 580]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 0xd61c5b0a48593, [],
                                [],
                                [
                                    [0, null, !1, null, 0xe62ce969c802c, [
                                            [3, u.prototype.d.ya, null, 0, !1, !1, !1, 8336970445910855, !1, [
                                                [8, 3],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [3, R.prototype.b.Pa, "Pin", 0x8b4c78fe5375a, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 7376594381000528, [
                                            [8, u.prototype.d.ya, null, 0, !1, !1, !1, 4922379175124379, !1, [
                                                [8, 2],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [8, R.prototype.b.Pa, "Pin", 0x8c32d201bc26c, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 0xef6d5ea9a4051, [
                                            [9, u.prototype.d.ya, null, 0, !1, !1, !1, 4983158695672932, !1, [
                                                [8, 2],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [9, R.prototype.b.Pa, "Pin", 5469001993971607, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 333322940503094, [
                                            [12, u.prototype.d.ya, null, 0, !1, !1, !1, 0x8e74b2d4c8928, !1, [
                                                [8, 2],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [12, R.prototype.b.Pa, "Pin", 0xb2c6c67db54bd, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 0x39856d3f01182, [
                                            [11, u.prototype.d.ya, null, 0, !1, !1, !1, 9010287896059480, !1, [
                                                [8, 2],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [11, R.prototype.b.Pa, "Pin", 8780339363817807, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 5675442535022551, [
                                            [24, P.prototype.d.ya, null, 0, !1, !1, !1, 0xdc8362d9291f0, !1, [
                                                [8, 3],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [24, R.prototype.b.Pa, "Pin", 5171154344280388, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 7075179560298125, [
                                            [19, P.prototype.d.ya, null, 0, !1, !1, !1, 0xfdf8b4d9d268c, !1, [
                                                [8, 3],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [19, R.prototype.b.Pa, "Pin", 8251639288195018, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 7618061478636908, [
                                            [46, u.prototype.d.ya, null, 0, !1, !1, !1, 9772419548558828, !1, [
                                                [8, 3],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [46, R.prototype.b.Pa, "Pin", 942517686470616, !1]
                                        ]
                                    ],
                                    [0, null, !1, null, 5388420602159364, [
                                            [47, u.prototype.d.ya, null, 0, !1, !1, !1, 7309265227406368, !1, [
                                                [8, 3],
                                                [0, [0, 140]]
                                            ]]
                                        ],
                                        [
                                            [47, R.prototype.b.Pa, "Pin", 8898362892130133, !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xc197c789462e7, [
                            [-1, t.prototype.d.pi, null, 0, !1, !1, !1, 7568311853460893, !1, [
                                [4, 24],
                                [7, [4, [20, 24, P.prototype.e.u, !1, null],
                                    [20, 24, P.prototype.e.M, !1, null]
                                ]],
                                [8, 3],
                                [7, [0, -5]]
                            ]]
                        ],
                        [
                            [24, P.prototype.b.Ha, null, 9522868744138044, !1]
                        ]
                    ],
                    [0, null, !1, null, 0x500a65e140c8c, [
                            [-1, t.prototype.d.pi, null, 0, !1, !1, !1, 6333121558587503, !1, [
                                [4, 19],
                                [7, [4, [20, 19, P.prototype.e.u, !1, null],
                                    [20, 19, P.prototype.e.M, !1, null]
                                ]],
                                [8, 3],
                                [7, [0, -5]]
                            ]]
                        ],
                        [
                            [19, P.prototype.b.Ha, null, 0xe87343bdd8a43, !1]
                        ]
                    ],
                    [0, null, !1, null, 0x80dafaa9147a6, [
                            [-1, t.prototype.d.pi, null, 0, !1, !1, !1, 8532969106907191, !1, [
                                [4, 9],
                                [7, [4, [20, 9, u.prototype.e.u, !1, null],
                                    [20, 9, u.prototype.e.M, !1, null]
                                ]],
                                [8, 3],
                                [7, [0, -5]]
                            ]]
                        ],
                        [
                            [9, u.prototype.b.Ha, null, 0x646de40775fbf, !1]
                        ]
                    ],
                    [0, null, !1, null, 6004087618846344, [
                            [-1, t.prototype.d.pi, null, 0, !1, !1, !1, 4902337603498359, !1, [
                                [4, 12],
                                [7, [4, [20, 12, u.prototype.e.u, !1, null],
                                    [20, 12, u.prototype.e.M, !1, null]
                                ]],
                                [8, 3],
                                [7, [0, -5]]
                            ]]
                        ],
                        [
                            [12, u.prototype.b.Ha, null, 6801199496788533, !1]
                        ]
                    ],
                    [0, null, !1, null, 4597086869719865, [
                            [19, P.prototype.d.Jd, null, 1, !1, !1, !1, 9294379593130492, !1]
                        ],
                        [
                            [19, P.prototype.b.mi, null, 0xd48f70d6ed3bc, !1]
                        ]
                    ],
                    [0, null, !1, null, 0xb0c3e91378dd9, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x99e242a420f2e, !1, [
                                [11, "animacjaPunch"],
                                [8, 0],
                                [7, [0, 11]]
                            ]],
                            [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 6564811408398197, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]]
                        ],
                        [
                            [1, u.prototype.b.F, null, 0xa4e6adbd857aa, !1, [
                                [1, [2, "lokiecFront"]],
                                [3, 1]
                            ]],
                            [19, Z.prototype.b.D, "LiteTween", 0xcc5f67c4b7564, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [-1, t.prototype.b.k, null, 0x9da9dae57d67a, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 4606738659981357, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 4611734846249616, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 11]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.B, null, 430422773617625, !1, [
                                        [0, [1, 0.3]]
                                    ]],
                                    [1, u.prototype.b.F, null, 7114637839029355, !1, [
                                        [1, [2, "front1"]],
                                        [3, 1]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 6360451098462976, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x68eb1dd974a8f, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 6090068781895516, !1, [
                                                [2, ["021258742-tap-dance-steps-1", !1]],
                                                [3, 0],
                                                [0, [0, 10]],
                                                [1, [2, "tapping"]]
                                            ]]
                                        ]
                                    ]
                                ]
                            ],
                            [0, null, !1, null, 0x3cd5a55bb5362, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5494170716682347, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 12]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 0xabb2bffd565c6, !1, [
                                        [11, "animacjaMove"],
                                        [7, [0, 120]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0x39e2f48715ea0, !1, [
                                        [0, [1, 0.3]]
                                    ]],
                                    [1, u.prototype.b.F, null, 0xa8dfeb406f605, !1, [
                                        [1, [2, "gwiazda2"]],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0xff44b2b696bd, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [1, u.prototype.b.F, null, 6767381137201086, !1, [
                                        [1, [2, "gwiazda"]],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 9813871435612914, !1, [
                                        [0, [1, 0.1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 6851043242430544, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9413677936789588, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 0xb03251d66ca03, !1, [
                                                [2, ["000949518-martial-arts-sounds-4", !1]],
                                                [3, 0],
                                                [0, [0, 40]],
                                                [1, [2, ""]]
                                            ]],
                                            [-1, t.prototype.b.B, null, 7793664541407226, !1, [
                                                [0, [1, 0.1]]
                                            ]],
                                            [31, C.prototype.b.Play, null, 8027186772133087, !1, [
                                                [2, ["009840601-sfx-woosh-bambu-stick-47-ear", !1]],
                                                [3, 1],
                                                [0, [0, 30]],
                                                [1, [2, "StarSpin"]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 9681184685616928, [],
                                        [
                                            [-1, t.prototype.b.B, null, 309856071647712, !1, [
                                                [0, [1, 0.2]]
                                            ]],
                                            [1, u.prototype.b.F, null, 4858628724003307, !1, [
                                                [1, [2, "gwiazda3"]],
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9729138692707372, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x96b95135de26a, !1, [
                                [11, "animacjaPunch"],
                                [8, 0],
                                [7, [0, 12]]
                            ]],
                            [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 9154204766407078, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 88511167839416, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]],
                            [1, u.prototype.b.F, null, 0xb81859a373ecc, !1, [
                                [1, [2, "tupniecie"]],
                                [3, 1]
                            ]],
                            [-1, t.prototype.b.B, null, 8494586526384578, !1, [
                                [0, [1, 0.2]]
                            ]],
                            [19, Z.prototype.b.D, "LiteTween", 7604129351605524, !1, [
                                [3, 0],
                                [3, 0]
                            ]],
                            [17, Qc.prototype.b.hn, "ScrollTo", 7112307715913095, !1, [
                                [0, [0, 20]],
                                [0, [1, 0.4]],
                                [3, 0]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 500231195889422, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5832879189727581, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 11]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.B, null, 0x80c4e1fa964df, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [1, u.prototype.b.F, null, 8844320706591665, !1, [
                                        [1, [2, "front1"]],
                                        [3, 1]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 4742602476314579, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8569826272665534, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 7924902843265883, !1, [
                                                [2, ["021258742-tap-dance-steps-1", !1]],
                                                [3, 0],
                                                [0, [0, 10]],
                                                [1, [2, "tapping"]]
                                            ]]
                                        ]
                                    ]
                                ]
                            ],
                            [0, null, !1, null, 778715621895118, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5443642231717177, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 12]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 629581198136473, !1, [
                                        [11, "animacjaMove"],
                                        [7, [0, 120]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 579354164652718, !1, [
                                        [0, [1, 0.3]]
                                    ]],
                                    [1, u.prototype.b.F, null, 0xc7eafdf353a18, !1, [
                                        [1, [2, "gwiazda2"]],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 7911429595714844, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [1, u.prototype.b.F, null, 0x6c2442e5757a3, !1, [
                                        [1, [2, "gwiazda"]],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 7336048121463924, !1, [
                                        [0, [1, 0.1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 9435656238333552, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5186701344065364, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 0x780e6743623ff, !1, [
                                                [2, ["000949518-martial-arts-sounds-4", !1]],
                                                [3, 0],
                                                [0, [0, 40]],
                                                [1, [2, ""]]
                                            ]],
                                            [-1, t.prototype.b.B, null, 8885067884793374, !1, [
                                                [0, [1, 0.1]]
                                            ]],
                                            [31, C.prototype.b.Play, null, 0xfd98dc7ab3beb, !1, [
                                                [2, ["009840601-sfx-woosh-bambu-stick-47-ear", !1]],
                                                [3, 1],
                                                [0, [0, 30]],
                                                [1, [2, "StarSpin"]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 5625308672696289, [],
                                        [
                                            [-1, t.prototype.b.B, null, 0x80cb11a013671, !1, [
                                                [0, [1, 0.2]]
                                            ]],
                                            [1, u.prototype.b.F, null, 7133551269047041, !1, [
                                                [1, [2, "gwiazda3"]],
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 9566628818658464, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7223996328608177, !1, [
                                [11, "animacjaPunch"],
                                [8, 0],
                                [7, [0, 21]]
                            ]],
                            [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 7253652706731198, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 9199253273378716, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]],
                            [1, u.prototype.b.F, null, 6073821307274858, !1, [
                                [1, [2, "pieta"]],
                                [3, 1]
                            ]],
                            [19, Z.prototype.b.D, "LiteTween", 826671302928056, !1, [
                                [3, 0],
                                [3, 0]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xd98e0bc0cb6b2, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xc448a53cf0fec, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 21]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.B, null, 7272540062689759, !1, [
                                        [0, [1, 0.3]]
                                    ]],
                                    [1, u.prototype.b.F, null, 7125701883816117, !1, [
                                        [1, [2, "moonwalk"]],
                                        [3, 1]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 8862609214144449, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9439050319537092, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 0xcda459680afb3, !1, [
                                                [2, ["040210706-wiping-feet", !1]],
                                                [3, 0],
                                                [0, [0, -5]],
                                                [1, [2, "wipe"]]
                                            ]]
                                        ]
                                    ]
                                ]
                            ],
                            [0, null, !1, null, 0xb9de6315d46f2, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xaeed7d1b3632c, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 22]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 9322136334307272, !1, [
                                        [11, "animacjaMove"],
                                        [7, [0, 220]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 5974726925444573, !1, [
                                        [0, [1, 0.1]]
                                    ]],
                                    [1, u.prototype.b.F, null, 0x8b1e86f1cb622, !1, [
                                        [1, [2, "glowa"]],
                                        [3, 1]
                                    ]],
                                    [1, Z.prototype.b.D, "LiteTween1tylek", 5280276776916305, !1, [
                                        [3, 0],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 9488932786795192, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [1, u.prototype.b.F, null, 0xd32889baa93e8, !1, [
                                        [1, [2, "tylek"]],
                                        [3, 1]
                                    ]],
                                    [1, Z.prototype.b.D, "LiteTween2tylek", 0xce4906fa7e468, !1, [
                                        [3, 0],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0x924a6c59ec801, !1, [
                                        [0, [1, 0.1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 842387119664032, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xba42efbcdbadb, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 6283901970288565, !1, [
                                                [2, ["008727352-cartoon-bubble", !1]],
                                                [3, 0],
                                                [0, [0, 0]],
                                                [1, [2, "bounce2"]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 0x727102c93b16, [],
                                        [
                                            [1, Z.prototype.b.D, "LiteTween3tylek", 9602865074977420, !1, [
                                                [3, 0],
                                                [3, 1]
                                            ]],
                                            [1, Z.prototype.b.D, "LiteTween4tylek", 0xe01a7a0b1cf42, !1, [
                                                [3, 0],
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 0xb37090f702b24, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9390043991212824, !1, [
                                [11, "animacjaPunch"],
                                [8, 0],
                                [7, [0, 22]]
                            ]],
                            [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 5765060514899851, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 508519860930499, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]],
                            [1, u.prototype.b.F, null, 0xee53e918efd6c, !1, [
                                [1, [2, "lokiec"]],
                                [3, 1]
                            ]],
                            [19, Z.prototype.b.D, "LiteTween", 6009319935436906, !1, [
                                [3, 0],
                                [3, 0]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xc05e09338d7a0, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7414108871256984, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 21]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.B, null, 7954367555050548, !1, [
                                        [0, [1, 0.3]]
                                    ]],
                                    [1, u.prototype.b.F, null, 6935893842348154, !1, [
                                        [1, [2, "moonwalk"]],
                                        [3, 1]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 7278752196327046, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xc9b6228cd1375, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 0xf77a0f1c77925, !1, [
                                                [2, ["040210706-wiping-feet", !1]],
                                                [3, 0],
                                                [0, [0, -5]],
                                                [1, [2, "wipe"]]
                                            ]]
                                        ]
                                    ]
                                ]
                            ],
                            [0, null, !1, null, 0x4892c9c6dce00, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xf901104bea69f, !1, [
                                        [11, "animacjaMove"],
                                        [8, 0],
                                        [7, [0, 22]]
                                    ]]
                                ],
                                [
                                    [-1, t.prototype.b.k, null, 0x731a78d6f5f65, !1, [
                                        [11, "animacjaMove"],
                                        [7, [0, 220]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0xcf5784a5772e2, !1, [
                                        [0, [1, 0.1]]
                                    ]],
                                    [1, u.prototype.b.F, null, 9797664373656528, !1, [
                                        [1, [2, "glowa"]],
                                        [3, 1]
                                    ]],
                                    [1, Z.prototype.b.D, "LiteTween1tylek", 5067729435073255, !1, [
                                        [3, 0],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0xd3e997bbf49d1, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [1, u.prototype.b.F, null, 6458657039981492, !1, [
                                        [1, [2, "tylek"]],
                                        [3, 1]
                                    ]],
                                    [1, Z.prototype.b.D, "LiteTween2tylek", 5335060710382611, !1, [
                                        [3, 0],
                                        [3, 1]
                                    ]],
                                    [-1, t.prototype.b.B, null, 7887464097024444, !1, [
                                        [0, [1, 0.1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 9291807402612842, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7990321853052957, !1, [
                                                [11, "SoundMode"],
                                                [8, 0],
                                                [7, [0, 0]]
                                            ]]
                                        ],
                                        [
                                            [31, C.prototype.b.Play, null, 4875528676048748, !1, [
                                                [2, ["008727352-cartoon-bubble", !1]],
                                                [3, 0],
                                                [0, [0, 0]],
                                                [1, [2, "bounce2"]]
                                            ]]
                                        ]
                                    ],
                                    [0, null, !1, null, 0xcff39952e353d, [],
                                        [
                                            [1, Z.prototype.b.D, "LiteTween3tylek", 8740789270563694, !1, [
                                                [3, 0],
                                                [3, 1]
                                            ]],
                                            [1, Z.prototype.b.D, "LiteTween4tylek", 6475047417258915, !1, [
                                                [3, 0],
                                                [3, 1]
                                            ]]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 4817360239995215, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x584126af1357a, !1, [
                                [11, "animacjaPunch"],
                                [8, 0],
                                [7, [0, 31]]
                            ]],
                            [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 490492802118779, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 8670073477139022, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]],
                            [1, u.prototype.b.F, null, 4863242116953921, !1, [
                                [1, [2, "scisniecie"]],
                                [3, 1]
                            ]],
                            [1, u.prototype.b.Ze, null, 0xb81d3e12b0e51, !1],
                            [-1, t.prototype.b.B, null, 0x8108d125cdec2, !1, [
                                [0, [1, 0.1]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 8333057935403631, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x6d1d792a2e6b2, !1, [
                                        [11, "SoundMode"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [31, C.prototype.b.Play, null, 0xd4e828cf4d559, !1, [
                                        [2, ["044878398-rubber-stretch-and-snap", !1]],
                                        [3, 0],
                                        [0, [0, 0]],
                                        [1, [2, ""]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 6892380607187886, [],
                                [
                                    [-1, t.prototype.b.B, null, 74562242255896, !1, [
                                        [0, [1, 0.2]]
                                    ]],
                                    [1, u.prototype.b.Mg, null, 6197933838752291, !1, [
                                        [0, [0, 1]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 6233758173380279, !1, [
                                        [0, [1, 0.1]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 4981054590642026, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6489601465112766, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 31]]
                                            ]]
                                        ],
                                        [
                                            [19, Z.prototype.b.D, "LiteTween", 0x3e064886357a2, !1, [
                                                [3, 0],
                                                [3, 0]
                                            ]],
                                            [-1, t.prototype.b.B, null, 4761884332554304, !1, [
                                                [0, [1, 0.2]]
                                            ]],
                                            [1, u.prototype.b.F, null, 569490980561124, !1, [
                                                [1, [2, "wykopy2"]],
                                                [3, 1]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 6743709332993763, [
                                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8446428349726703, !1, [
                                                        [11, "SoundMode"],
                                                        [8, 0],
                                                        [7, [0, 0]]
                                                    ]]
                                                ],
                                                [
                                                    [31, C.prototype.b.Play, null, 0x6e202dacb4b03, !1, [
                                                        [2, ["008176387-swish-03", !1]],
                                                        [3, 0],
                                                        [0, [0, -3]],
                                                        [1, [2, "kick"]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ],
                                    [0, null, !1, null, 7809268305059059, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5120961662586125, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 32]]
                                            ]]
                                        ],
                                        [
                                            [19, Z.prototype.b.D, "LiteTween", 0xbe577ddbb1c44, !1, [
                                                [3, 0],
                                                [3, 0]
                                            ]],
                                            [-1, t.prototype.b.B, null, 0x516e19f528f1d, !1, [
                                                [0, [1, 0.2]]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 5780648032017211, [
                                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6446490070273653, !1, [
                                                        [11, "SoundMode"],
                                                        [8, 0],
                                                        [7, [0, 0]]
                                                    ]]
                                                ],
                                                [
                                                    [31, C.prototype.b.Play, null, 7441555696684783, !1, [
                                                        [2, ["041289318-pbfx-whoosh-hit-sci-fi-disappe", !1]],
                                                        [3, 0],
                                                        [0, [0, -3]],
                                                        [1, [2, ""]]
                                                    ]]
                                                ]
                                            ],
                                            [0, null, !1, null, 0xb960f2ffed1f5, [],
                                                [
                                                    [1, u.prototype.b.F, null, 8273554436589865, !1, [
                                                        [1, [2, "glowa2"]],
                                                        [3, 1]
                                                    ]],
                                                    [1, u.prototype.b.Ze, null, 0xb8f0152446098, !1],
                                                    [18, u.prototype.b.Og, null, 4965980236393609, !1, [
                                                        [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                                            [0, 6]
                                                        ]]
                                                    ]],
                                                    [18, u.prototype.b.X, null, 0xfb8a55a4e4973, !1, [
                                                        [3, 1]
                                                    ]],
                                                    [18, rc.prototype.b.ne, "Sine", 8259013041562555, !1, [
                                                        [3, 1]
                                                    ]],
                                                    [1, Z.prototype.b.D, "blinking", 0xb5a44d9c6d608, !1, [
                                                        [3, 0],
                                                        [3, 1]
                                                    ]],
                                                    [-1, t.prototype.b.B, null, 680907347813761, !1, [
                                                        [0, [1, 0.2]]
                                                    ]],
                                                    [-1, t.prototype.b.B, null, 4840019870484073, !1, [
                                                        [0, [1, 0.8]]
                                                    ]],
                                                    [18, u.prototype.b.Jc, null, 0xa268732d51cd5, !1, [
                                                        [0, [0, 100]]
                                                    ]],
                                                    [18, u.prototype.b.F, null, 5322811353977687, !1, [
                                                        [1, [2, "anim2"]],
                                                        [3, 1]
                                                    ]],
                                                    [18, rc.prototype.b.ne, "Sine", 9333779362166196, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [18, Z.prototype.b.D, "LiteTween", 6152526128468921, !1, [
                                                        [3, 0],
                                                        [3, 1]
                                                    ]],
                                                    [1, u.prototype.b.X, null, 0x72e8053ae6949, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [1, Z.prototype.b.Kc, "blinking", 9594102345939896, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [-1, t.prototype.b.B, null, 8534088578766409, !1, [
                                                        [0, [1, 0.2]]
                                                    ]],
                                                    [1, u.prototype.b.Dk, null, 6193090699324712, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [1, u.prototype.b.X, null, 8682476581393366, !1, [
                                                        [3, 1]
                                                    ]],
                                                    [1, u.prototype.b.Jc, null, 0xe2cd2ec07a352, !1, [
                                                        [0, [0, 100]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [0, null, !1, null, 7274391960142966, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9610574174293900, !1, [
                                [11, "animacjaPunch"],
                                [8, 0],
                                [7, [0, 32]]
                            ]],
                            [19, P.prototype.d.Tb, null, 0, !1, !1, !0, 6481499789923348, !1, [
                                [3, 0],
                                [0, [20, 1, u.prototype.e.u, !1, null]],
                                [0, [20, 1, u.prototype.e.jb, !1, null]]
                            ]]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 8684388206313722, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]],
                            [1, u.prototype.b.F, null, 5717924591018788, !1, [
                                [1, [2, "paluszek"]],
                                [3, 1]
                            ]],
                            [1, u.prototype.b.Ze, null, 9729885338805576, !1],
                            [-1, t.prototype.b.B, null, 0x88d813fb77eef, !1, [
                                [0, [1, 0.2]]
                            ]]
                        ],
                        [
                            [0, null, !1, null, 0xb3d03e973fde7, [
                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6889461242917829, !1, [
                                        [11, "SoundMode"],
                                        [8, 0],
                                        [7, [0, 0]]
                                    ]]
                                ],
                                [
                                    [31, C.prototype.b.Play, null, 9151780807338952, !1, [
                                        [2, ["037149199-bloop-pop-medium-human-mouth-g", !1]],
                                        [3, 0],
                                        [0, [0, 5]],
                                        [1, [2, ""]]
                                    ]]
                                ]
                            ],
                            [0, null, !1, null, 6317902060486692, [],
                                [
                                    [1, u.prototype.b.Mg, null, 4886949520531697, !1, [
                                        [0, [0, 1]]
                                    ]],
                                    [-1, t.prototype.b.B, null, 0xed5851058981a, !1, [
                                        [0, [1, 0.2]]
                                    ]]
                                ],
                                [
                                    [0, null, !1, null, 8069016285814268, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5825080952510484, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 31]]
                                            ]]
                                        ],
                                        [
                                            [19, Z.prototype.b.D, "LiteTween", 7521092165470148, !1, [
                                                [3, 0],
                                                [3, 0]
                                            ]],
                                            [-1, t.prototype.b.B, null, 9009899887940160, !1, [
                                                [0, [1, 0.2]]
                                            ]],
                                            [1, u.prototype.b.F, null, 7453089913322965, !1, [
                                                [1, [2, "wykopy2"]],
                                                [3, 1]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 0xf8b0c4833cd7a, [
                                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 4592846710021244, !1, [
                                                        [11, "SoundMode"],
                                                        [8, 0],
                                                        [7, [0, 0]]
                                                    ]]
                                                ],
                                                [
                                                    [31, C.prototype.b.Play, null, 9814441652988832, !1, [
                                                        [2, ["008176387-swish-03", !1]],
                                                        [3, 0],
                                                        [0, [0, -3]],
                                                        [1, [2, "kick"]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ],
                                    [0, null, !1, null, 8186380970217493, [
                                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 7060544631953907, !1, [
                                                [11, "animacjaMove"],
                                                [8, 0],
                                                [7, [0, 32]]
                                            ]]
                                        ],
                                        [
                                            [19, Z.prototype.b.D, "LiteTween", 325572773838834, !1, [
                                                [3, 0],
                                                [3, 0]
                                            ]],
                                            [-1, t.prototype.b.B, null, 0xe78f530a69531, !1, [
                                                [0, [1, 0.2]]
                                            ]]
                                        ],
                                        [
                                            [0, null, !1, null, 6700975454073723, [
                                                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 4702338579490068, !1, [
                                                        [11, "SoundMode"],
                                                        [8, 0],
                                                        [7, [0, 0]]
                                                    ]]
                                                ],
                                                [
                                                    [31, C.prototype.b.Play, null, 6362710841120432, !1, [
                                                        [2, ["041289318-pbfx-whoosh-hit-sci-fi-disappe", !1]],
                                                        [3, 0],
                                                        [0, [0, -3]],
                                                        [1, [2, ""]]
                                                    ]]
                                                ]
                                            ],
                                            [0, null, !1, null, 5706592879171488, [],
                                                [
                                                    [1, u.prototype.b.F, null, 6769582730665475, !1, [
                                                        [1, [2, "glowa2"]],
                                                        [3, 1]
                                                    ]],
                                                    [1, u.prototype.b.Ze, null, 0xeabf8a226fe3d, !1],
                                                    [18, u.prototype.b.Og, null, 9079854613375606, !1, [
                                                        [0, [4, [20, 1, u.prototype.e.u, !1, null],
                                                            [0, 6]
                                                        ]]
                                                    ]],
                                                    [18, u.prototype.b.X, null, 9540291095123472, !1, [
                                                        [3, 1]
                                                    ]],
                                                    [18, rc.prototype.b.ne, "Sine", 896808630330734, !1, [
                                                        [3, 1]
                                                    ]],
                                                    [1, Z.prototype.b.D, "blinking", 0x6cc4fffd66a13, !1, [
                                                        [3, 0],
                                                        [3, 1]
                                                    ]],
                                                    [-1, t.prototype.b.B, null, 7435145565475178, !1, [
                                                        [0, [1, 0.2]]
                                                    ]],
                                                    [-1, t.prototype.b.B, null, 0x4a2ec2c63187a, !1, [
                                                        [0, [1, 0.8]]
                                                    ]],
                                                    [18, u.prototype.b.Jc, null, 0xac8490fe410c7, !1, [
                                                        [0, [0, 100]]
                                                    ]],
                                                    [18, u.prototype.b.F, null, 6497022478157739, !1, [
                                                        [1, [2, "anim2"]],
                                                        [3, 1]
                                                    ]],
                                                    [18, rc.prototype.b.ne, "Sine", 0x51ddb9ed718ec, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [18, Z.prototype.b.D, "LiteTween", 5197044275584461, !1, [
                                                        [3, 0],
                                                        [3, 1]
                                                    ]],
                                                    [1, u.prototype.b.X, null, 0x94f0420d639ba, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [1, Z.prototype.b.Kc, "blinking", 7775527294233533, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [-1, t.prototype.b.B, null, 6449819116957662, !1, [
                                                        [0, [1, 0.2]]
                                                    ]],
                                                    [1, u.prototype.b.Dk, null, 0x7d38bd9aa153, !1, [
                                                        [3, 0]
                                                    ]],
                                                    [1, u.prototype.b.X, null, 6984680614590662, !1, [
                                                        [3, 1]
                                                    ]],
                                                    [1, u.prototype.b.Jc, null, 7007535918238663, !1, [
                                                        [0, [0, 100]]
                                                    ]]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 9916744629886118, [
                    [28, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 5807817695412891, !1]
                ],
                [
                    [28, u.prototype.b.Ha, null, 0xe0d78f4a459bf, !1],
                    [29, u.prototype.b.Dk, null, 9112861032745900, !1, [
                        [3, 1]
                    ]],
                    [29, u.prototype.b.X, null, 9454130554019148, !1, [
                        [3, 1]
                    ]],
                    [29, Z.prototype.b.D, "LiteTween2", 561267026923404, !1, [
                        [3, 0],
                        [3, 1]
                    ]],
                    [29, Z.prototype.b.D, "LiteTween", 4906057403604109, !1, [
                        [3, 0],
                        [3, 1]
                    ]],
                    [36, Z.prototype.b.D, "LiteTween", 6735204539732656, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [-1, t.prototype.b.B, null, 0x88a3f2b784f77, !1, [
                        [0, [1, 0.15]]
                    ]],
                    [27, u.prototype.b.X, null, 0x63f8c440027a2, !1, [
                        [3, 1]
                    ]],
                    [26, u.prototype.b.X, null, 0x9c17853feec10, !1, [
                        [3, 1]
                    ]],
                    [56, Z.prototype.b.D, "LiteTween", 9978928163304452, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [26, Z.prototype.b.D, "LiteTween3", 9353787081329964, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [34, nc.prototype.b.X, null, 0xcf8034cd29245, !1, [
                        [3, 1]
                    ]],
                    [34, Z.prototype.b.D, "LiteTween", 9057414700980252, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [34, nc.prototype.b.Bk, null, 5572806996584753, !1, [
                        [7, [18, [16, [23, "score"],
                                [19, t.prototype.e["float"],
                                    [
                                        [20, 33, oc.prototype.e.tk, !0, null, [
                                            [2, "fureyeBSdiscoBridge"]
                                        ]]
                                    ]
                                ]
                            ],
                            [23, "score"],
                            [19, t.prototype.e["float"],
                                [
                                    [20, 33, oc.prototype.e.tk, !0, null, [
                                        [2, "fureyeBSdiscoBridge"]
                                    ]]
                                ]
                            ]
                        ]]
                    ]],
                    [35, nc.prototype.b.X, null, 0xaa4c8126a6c9b, !1, [
                        [3, 1]
                    ]],
                    [35, Z.prototype.b.D, "LiteTween", 0x95a013db23cfd, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [35, nc.prototype.b.Bk, null, 0x8656958eedf22, !1, [
                        [7, [23, "score"]]
                    ]]
                ],
                [
                    [0, null, !1, null, 7057820424107235, [
                            [-1, t.prototype.d.Kg, null, 0, !1, !1, !1, 5330836417773192, !1, [
                                [7, [23, "score"]],
                                [8, 4],
                                [7, [19, t.prototype.e["float"],
                                    [
                                        [20, 33, oc.prototype.e.tk, !0, null, [
                                            [2, "fureyeBSdiscoBridge"]
                                        ]]
                                    ]
                                ]]
                            ]]
                        ],
                        [
                            [33, oc.prototype.b.zq, null, 0xed82dc975898d, !1, [
                                [1, [2, "fureyeBSdiscoBridge"]],
                                [7, [23, "score"]]
                            ]],
                            [-1, t.prototype.b.B, null, 4722163587556477, !1, [
                                [0, [1, 0.4]]
                            ]],
                            [32, u.prototype.b.X, null, 5689138230029414, !1, [
                                [3, 1]
                            ]],
                            [32, Z.prototype.b.D, "LiteTween", 8011874167276567, !1, [
                                [3, 2],
                                [3, 0]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0x4df32c0a617d3, [
                    [36, nc.prototype.d.Zc, null, 0, !1, !1, !1, 9873676527000302, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]]
                ],
                [
                    [36, nc.prototype.b.X, null, 0xa436eefb38952, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 5318594086049119, [
                    [18, u.prototype.d.Zc, null, 0, !1, !1, !1, 5167221226302756, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]]
                ],
                [
                    [18, u.prototype.b.X, null, 0xa87a5f1a9b46c, !1, [
                        [3, 0]
                    ]],
                    [18, Z.prototype.b.Kc, "LiteTween", 9494177849199528, !1, [
                        [3, 2]
                    ]],
                    [18, u.prototype.b.Jc, null, 8574322292075928, !1, [
                        [0, [0, 50]]
                    ]],
                    [18, u.prototype.b.F, null, 0xb48e212c8c816, !1, [
                        [1, [2, "default"]],
                        [3, 1]
                    ]]
                ]
            ],
            [0, null, !1, null, 966593403960148, [
                    [29, u.prototype.d.Zc, null, 0, !1, !1, !1, 8665651838768998, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]]
                ],
                [
                    [29, u.prototype.b.Ha, null, 8643139036324321, !1]
                ]
            ],
            [0, null, !1, null, 0x4a3d26dd8776b, [
                    [18, u.prototype.d.Zc, null, 0, !1, !1, !1, 0x539d215ded60d, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]]
                ],
                [
                    [18, u.prototype.b.X, null, 0x611209e3a739e, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 5309566302027005, [
                    [3, u.prototype.d.ya, null, 0, !1, !1, !1, 4575782729426716, !1, [
                        [8, 3],
                        [0, [0, -60]]
                    ]]
                ],
                [
                    [3, u.prototype.b.Ha, null, 86332264958903, !1]
                ]
            ],
            [0, null, !1, null, 5149638645230716, [
                    [8, u.prototype.d.ya, null, 0, !1, !1, !1, 0x94d7655d797b, !1, [
                        [8, 3],
                        [0, [0, -60]]
                    ]]
                ],
                [
                    [8, u.prototype.b.Ha, null, 8629736901956099, !1]
                ]
            ],
            [0, null, !1, null, 6693978984892372, [
                    [11, u.prototype.d.ya, null, 0, !1, !1, !1, 0xa3ed673e6c999, !1, [
                        [8, 3],
                        [0, [0, -60]]
                    ]]
                ],
                [
                    [11, u.prototype.b.Ha, null, 4925260593038199, !1]
                ]
            ],
            [0, null, !1, null, 0x8861af679b9d4, [
                    [14, u.prototype.d.Zc, null, 0, !1, !1, !1, 0xaa48d52470eb0, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]]
                ],
                [
                    [14, u.prototype.b.Ha, null, 8196335010256798, !1]
                ]
            ],
            [0, null, !1, null, 5215386211148104, [
                    [2, G.prototype.d.Lg, null, 1, !1, !1, !1, 5161702367793869, !1],
                    [2, G.prototype.d.Lf, null, 0, !1, !1, !1, 7778587236561797, !1, [
                        [4, 27]
                    ]],
                    [27, u.prototype.d.Zc, null, 0, !1, !1, !1, 5964508316966191, !1, [
                        [8, 5],
                        [0, [0, 95]]
                    ]]
                ],
                [],
                [
                    [0, null, !1, null, 0xcaab5d597a853, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x789c5cd1cf072, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 6672636251153997, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x950e3b5ce20f9, [],
                        [
                            [31, C.prototype.b.jn, null, 8580773706912184, !1],
                            [-1, t.prototype.b.wq, null, 5254323015185462, !1],
                            [-1, t.prototype.b.k, null, 324386280749043, !1, [
                                [11, "animacjaMove"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 8585667599560245, !1, [
                                [11, "animacjaPunch"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 8987749667821472, !1, [
                                [11, "animacjaStand"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 8457262762525229, !1, [
                                [11, "game"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 9763216888517956, !1, [
                                [11, "moveDur"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 0x628bf45353d01, !1, [
                                [11, "nextDlugosc"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 0xb8ef99d3c285a, !1, [
                                [11, "nextX"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 0x5fa7c66f7d207, !1, [
                                [11, "nowaPlatforma"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 23550290343813, !1, [
                                [11, "pinezka1"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 854877488784976, !1, [
                                [11, "pinezka2"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 299988022747031, !1, [
                                [11, "powrotTarg"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 0xa9f6bb390a4f6, !1, [
                                [11, "przesuwanie"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 9849594101846368, !1, [
                                [11, "score"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 6476342018418153, !1, [
                                [11, "stageSzer"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 6046869026540596, !1, [
                                [11, "titleFrame"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 0x6798874686d90, !1, [
                                [11, "touchMusic"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 4824569748221756, !1, [
                                [11, "touchSound"],
                                [7, [0, 0]]
                            ]],
                            [-1, t.prototype.b.k, null, 4717997647816784, !1, [
                                [11, "tutDistance"],
                                [7, [0, 0]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0xdfebbf7e407b5, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 0xfcc090bceb2df, !1, [
                        [4, 20]
                    ]]
                ],
                [
                    [44, u.prototype.b.X, null, 6295316735952057, !1, [
                        [3, 1]
                    ]],
                    [44, Z.prototype.b.D, "LiteTween", 8459636299478199, !1, [
                        [3, 0],
                        [3, 0]
                    ]]
                ],
                [
                    [0, null, !1, null, 0xa009a87f8c04b, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9960659771900976, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 0xf43f4cdde315d, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6230813280815005, [],
                        [
                            [-1, t.prototype.b.B, null, 7479266150772757, !1, [
                                [0, [1, 0.1]]
                            ]],
                            [31, C.prototype.b.jn, null, 383345437312289, !1]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0x95af6dd7792c, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5475001020540549, !1, [
                        [11, "touchMusic"],
                        [8, 0],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [-1, t.prototype.b.k, null, 0x78748af15a961, !1, [
                        [11, "touchMusic"],
                        [7, [0, 2]]
                    ]],
                    [-1, t.prototype.b.B, null, 8398810124360176, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [-1, t.prototype.b.k, null, 8891031390821521, !1, [
                        [11, "touchMusic"],
                        [7, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 8292811776918986, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8741530738657172, !1, [
                        [11, "touchSound"],
                        [8, 0],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [-1, t.prototype.b.k, null, 0x9f43970d00153, !1, [
                        [11, "touchSound"],
                        [7, [0, 2]]
                    ]],
                    [-1, t.prototype.b.B, null, 0x70df40c3fd875, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [-1, t.prototype.b.k, null, 0x739f54fc2bda0, !1, [
                        [11, "touchSound"],
                        [7, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 8618655300136567, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 9718138956242096, !1, [
                        [4, 4]
                    ]],
                    [4, u.prototype.d.gc, null, 0, !1, !1, !1, 6306594859874945, !1, [
                        [1, [2, "default"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 980122735091791, !1, [
                        [11, "touchSound"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [4, u.prototype.b.F, null, 7562991272774017, !1, [
                        [1, [2, "anim2"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 733431352278861, !1, [
                        [11, "touchSound"],
                        [7, [0, 1]]
                    ]],
                    [-1, t.prototype.b.k, null, 7789022383574011, !1, [
                        [11, "SoundMode"],
                        [7, [0, 1]]
                    ]]
                ]
            ],
            [0, null, !1, null, 6290443133846582, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 7087966955656799, !1, [
                        [4, 4]
                    ]],
                    [4, u.prototype.d.gc, null, 0, !1, !1, !1, 6188017688331732, !1, [
                        [1, [2, "anim2"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9764653155729700, !1, [
                        [11, "touchSound"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [4, u.prototype.b.F, null, 0x53bf1dae6091b, !1, [
                        [1, [2, "default"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 9504659769778136, !1, [
                        [11, "touchSound"],
                        [7, [0, 1]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xc4acf4288b503, !1, [
                        [11, "SoundMode"],
                        [7, [0, 0]]
                    ]],
                    [31, C.prototype.b.dn, null, 5003254139631452, !1, [
                        [1, [2, "click"]],
                        [3, 1]
                    ]],
                    [31, C.prototype.b.Play, null, 6996662419267444, !1, [
                        [2, ["024603202-super-click", !1]],
                        [3, 0],
                        [0, [0, 0]],
                        [1, [2, "click"]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xdfce19658c430, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 0xca7e7f42486dc, !1, [
                        [4, 5]
                    ]],
                    [5, u.prototype.d.gc, null, 0, !1, !1, !1, 292053650001524, !1, [
                        [1, [2, "default"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x7a60c00f73260, !1, [
                        [11, "touchMusic"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [5, u.prototype.b.F, null, 0x8107018b8c847, !1, [
                        [1, [2, "anim2"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 0xc9ef1f76a1332, !1, [
                        [11, "touchMusic"],
                        [7, [0, 1]]
                    ]],
                    [31, C.prototype.b.Kc, null, 9020407045817876, !1, [
                        [1, [2, "muza"]]
                    ]],
                    [-1, t.prototype.b.k, null, 5471422652065503, !1, [
                        [11, "MusicMode"],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [0, null, !1, null, 0xa640b9e4b36f, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x895a85119709d, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 6780456450629238, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 6269527815018571, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 0xc6f49a675e6fc, !1, [
                        [4, 5]
                    ]],
                    [5, u.prototype.d.gc, null, 0, !1, !1, !1, 0x9482206387b15, !1, [
                        [1, [2, "anim2"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 663376564008759, !1, [
                        [11, "touchMusic"],
                        [8, 0],
                        [7, [0, 0]]
                    ]],
                    [27, u.prototype.d.sk, null, 0, !1, !0, !1, 0x89d38fcb952f6, !1]
                ],
                [
                    [5, u.prototype.b.F, null, 0x575e0339db309, !1, [
                        [1, [2, "default"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 0xb4e3983a7db5b, !1, [
                        [11, "touchMusic"],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [0, null, !1, null, 6744876285601174, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8505375630377534, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 0xe6205a4833a47, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0x7cdaea0137d6c, [],
                        [
                            [-1, t.prototype.b.B, null, 0x9a44b77f4c969, !1, [
                                [0, [1, 0.1]]
                            ]],
                            [31, C.prototype.b.Play, null, 0xda919b354de6e, !1, [
                                [2, ["untitled2", !1]],
                                [3, 1],
                                [0, [0, -10]],
                                [1, [2, "muza"]]
                            ]],
                            [-1, t.prototype.b.k, null, 6434327266068213, !1, [
                                [11, "MusicMode"],
                                [7, [0, 0]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0x5b26d3263841b, [
                    [44, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 0x78dfb912171c9, !1]
                ],
                [
                    [-1, t.prototype.b.B, null, 5695742300953456, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [-1, t.prototype.b.k, null, 0x543356f7067a3, !1, [
                        [11, "animacjaMove"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 5025226960967117, !1, [
                        [11, "animacjaPunch"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xe4761cee3ea9d, !1, [
                        [11, "animacjaStand"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 5257005641376912, !1, [
                        [11, "game"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xdd760d562c12e, !1, [
                        [11, "moveDur"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 8700828042408273, !1, [
                        [11, "nextDlugosc"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 8585811080854963, !1, [
                        [11, "nextX"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 8616995510942092, !1, [
                        [11, "nowaPlatforma"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 6566525844211424, !1, [
                        [11, "pinezka1"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xd31da0c7ff833, !1, [
                        [11, "pinezka2"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xd0edff91a28e3, !1, [
                        [11, "powrotTarg"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 6056272151265455, !1, [
                        [11, "przesuwanie"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 5882667658014927, !1, [
                        [11, "score"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0x7f2a4348e59b9, !1, [
                        [11, "stageSzer"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xdec2d07eaddf3, !1, [
                        [11, "titleFrame"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 9041174011268948, !1, [
                        [11, "touchMusic"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 0xfa6792325eaae, !1, [
                        [11, "touchSound"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.k, null, 5049936950008029, !1, [
                        [11, "tutDistance"],
                        [7, [0, 0]]
                    ]],
                    [-1, t.prototype.b.qk, null, 0xd922cb47be1ad, !1, [
                        [6, "menu"]
                    ]]
                ]
            ]
        ]],
        ["menuSheet", [
            [1, "touchSound", 0, 0, !1, !1, 83831933972315, !1],
            [1, "titleFrame", 0, 0, !1, !1, 5132955721781745, !1],
            [1, "SoundMode", 0, 0, !1, !1, 598062194968405, !1],
            [1, "MusicMode", 0, 0, !1, !1, 7326813324501386, !1],
            [1, "touchMusic", 0, 0, !1, !1, 5938742765674608, !1],
            [0, null, !1, null, 7379125401712395, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 4839109431074593, !1, [
                        [11, "touchMusic"],
                        [8, 0],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [-1, t.prototype.b.k, null, 812304249262356, !1, [
                        [11, "touchMusic"],
                        [7, [0, 2]]
                    ]],
                    [-1, t.prototype.b.B, null, 8777741194088624, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [-1, t.prototype.b.k, null, 0x8c416ce99f650, !1, [
                        [11, "touchMusic"],
                        [7, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x5c537ee592b83, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 9709866370143762, !1, [
                        [11, "touchSound"],
                        [8, 0],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [-1, t.prototype.b.k, null, 5273563195675865, !1, [
                        [11, "touchSound"],
                        [7, [0, 2]]
                    ]],
                    [-1, t.prototype.b.B, null, 5760064303763336, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [-1, t.prototype.b.k, null, 8838403125300915, !1, [
                        [11, "touchSound"],
                        [7, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x69daece54e1c, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 0x781aba23bf26f, !1, [
                        [4, 4]
                    ]],
                    [4, u.prototype.d.gc, null, 0, !1, !1, !1, 0x620d9589a8f23, !1, [
                        [1, [2, "default"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x6717d3a688508, !1, [
                        [11, "touchSound"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [4, u.prototype.b.F, null, 8636973598498392, !1, [
                        [1, [2, "anim2"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 0xef97e687b9d9, !1, [
                        [11, "touchSound"],
                        [7, [0, 1]]
                    ]],
                    [-1, t.prototype.b.k, null, 0x847af8757f271, !1, [
                        [11, "SoundMode"],
                        [7, [0, 1]]
                    ]]
                ]
            ],
            [0, null, !1, null, 737467153641207, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 4892625523807769, !1, [
                        [4, 4]
                    ]],
                    [4, u.prototype.d.gc, null, 0, !1, !1, !1, 0xbd6ae1e41f266, !1, [
                        [1, [2, "anim2"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xd8511c9c7f3ef, !1, [
                        [11, "touchSound"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [4, u.prototype.b.F, null, 8173290856081215, !1, [
                        [1, [2, "default"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 0x756e99c2ab70f, !1, [
                        [11, "touchSound"],
                        [7, [0, 1]]
                    ]],
                    [-1, t.prototype.b.k, null, 0x6dbfcb26c6379, !1, [
                        [11, "SoundMode"],
                        [7, [0, 0]]
                    ]],
                    [31, C.prototype.b.dn, null, 9297411679931928, !1, [
                        [1, [2, "click"]],
                        [3, 1]
                    ]],
                    [31, C.prototype.b.Play, null, 0x6bcf8f2a60fe1, !1, [
                        [2, ["024603202-super-click", !1]],
                        [3, 0],
                        [0, [0, 0]],
                        [1, [2, "click"]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xfd8c1fde44820, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 8698254486487774, !1, [
                        [4, 5]
                    ]],
                    [5, u.prototype.d.gc, null, 0, !1, !1, !1, 0xef6d15196dd8, !1, [
                        [1, [2, "default"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8697883769995566, !1, [
                        [11, "touchMusic"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [5, u.prototype.b.F, null, 909653105952175, !1, [
                        [1, [2, "anim2"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 7273134372782884, !1, [
                        [11, "touchMusic"],
                        [7, [0, 1]]
                    ]],
                    [31, C.prototype.b.Kc, null, 0x43198b57fa81c, !1, [
                        [1, [2, "muza"]]
                    ]],
                    [-1, t.prototype.b.k, null, 5733816803069289, !1, [
                        [11, "MusicMode"],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [0, null, !1, null, 9268514198318684, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8877751498513906, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 0xf39ba2781bee3, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 672636446220653, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 9590048340140116, !1, [
                        [4, 5]
                    ]],
                    [5, u.prototype.d.gc, null, 0, !1, !1, !1, 6060405462811804, !1, [
                        [1, [2, "anim2"]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 964985968880617, !1, [
                        [11, "touchMusic"],
                        [8, 0],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [5, u.prototype.b.F, null, 9466581321641752, !1, [
                        [1, [2, "default"]],
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.k, null, 0xdc17ba3a40974, !1, [
                        [11, "touchMusic"],
                        [7, [0, 1]]
                    ]]
                ],
                [
                    [0, null, !1, null, 5671233769013789, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6501243296856166, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 9389383721185780, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6406865722984397, [],
                        [
                            [-1, t.prototype.b.B, null, 5151010820695473, !1, [
                                [0, [1, 0.1]]
                            ]],
                            [31, C.prototype.b.Play, null, 6437443740453, !1, [
                                [2, ["untitled2", !1]],
                                [3, 1],
                                [0, [0, -10]],
                                [1, [2, "muza"]]
                            ]],
                            [-1, t.prototype.b.k, null, 5818665937379691, !1, [
                                [11, "MusicMode"],
                                [7, [0, 0]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 665592430754477, [
                    [-1, t.prototype.d.uk, null, 1, !1, !1, !1, 7049996802870164, !1]
                ],
                [
                    [-1, t.prototype.b.zk, null, 0xa9abb703b6bbf, !1, [
                        [5, [0, 1]],
                        [3, 0]
                    ]]
                ],
                [
                    [0, null, !1, null, 4979325658029809, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 5891013082847261, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [4, u.prototype.b.F, null, 0xfdbf1a3052534, !1, [
                                [1, [2, "anim2"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 8203682390189866, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 612080822563192, !1, [
                                [11, "MusicMode"],
                                [8, 0],
                                [7, [0, 1]]
                            ]]
                        ],
                        [
                            [5, u.prototype.b.F, null, 0x8e14bbc10e468, !1, [
                                [1, [2, "anim2"]],
                                [3, 1]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 4958033415339325, [
                            [31, C.prototype.d.Jg, null, 0, !1, !0, !1, 847529526611081, !1]
                        ],
                        [
                            [31, C.prototype.b.en, null, 0x772d323af00f5, !1, [
                                [3, 0]
                            ]],
                            [5, u.prototype.b.Ha, null, 0x448cb63085b85, !1],
                            [4, u.prototype.b.Ha, null, 8622303315989374, !1],
                            [-1, t.prototype.b.k, null, 0x5d03066a03749, !1, [
                                [11, "MusicMode"],
                                [7, [0, 1]]
                            ]],
                            [-1, t.prototype.b.k, null, 7684027263443883, !1, [
                                [11, "SoundMode"],
                                [7, [0, 1]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 6838750586380696, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x3efd687b57dcc, !1, [
                                [11, "MusicMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]],
                            [31, C.prototype.d.rk, null, 0, !1, !0, !1, 0x6c5847626b1d2, !1, [
                                [1, [2, "muza"]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 0x451f2af01288b, !1, [
                                [2, ["untitled2", !1]],
                                [3, 1],
                                [0, [0, -10]],
                                [1, [2, "muza"]]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 5201806580564991, [],
                        [
                            [30, u.prototype.b.Ze, null, 6941364167894833, !1],
                            [-1, t.prototype.b.B, null, 5198427188789638, !1, [
                                [0, [1, 0.5]]
                            ]],
                            [22, Z.prototype.b.D, "LiteTween", 986252177395426, !1, [
                                [3, 2],
                                [3, 1]
                            ]],
                            [23, Z.prototype.b.D, "LiteTween", 316422540715713, !1, [
                                [3, 2],
                                [3, 1]
                            ]],
                            [30, u.prototype.b.Mg, null, 0x42ef3153304ed, !1, [
                                [0, [0, 1]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0x83ded127f2efb, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 8590220822218825, !1, [
                        [4, 22]
                    ]],
                    [-1, t.prototype.d.Kg, null, 0, !1, !1, !1, 0xeaf947f014b92, !1, [
                        [7, [19, t.prototype.e.round, [
                            [20, 23, u.prototype.e.gq, !1, null]
                        ]]],
                        [8, 0],
                        [7, [0, 336]]
                    ]]
                ],
                [
                    [23, u.prototype.b.me, null, 0xe5e33ffb7ed37, !1, [
                        [5, [0, 0]]
                    ]],
                    [30, u.prototype.b.me, null, 0xe4b0d671bea0c, !1, [
                        [5, [0, 4]]
                    ]],
                    [5, u.prototype.b.me, null, 488809487680864, !1, [
                        [5, [0, 0]]
                    ]],
                    [4, u.prototype.b.me, null, 6803799083067391, !1, [
                        [5, [0, 0]]
                    ]],
                    [30, Z.prototype.b.D, "LiteTween", 5493131400637026, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [13, u.prototype.b.Jc, null, 395743016931173, !1, [
                        [0, [0, 0]]
                    ]],
                    [13, u.prototype.b.X, null, 8226050658700831, !1, [
                        [3, 1]
                    ]],
                    [13, Z.prototype.b.Kd, "LiteTween2", 621672074856512, !1, [
                        [3, 5],
                        [3, 1],
                        [1, [2, "100"]],
                        [0, [1, 0.3]],
                        [3, 1]
                    ]],
                    [13, Z.prototype.b.D, "LiteTween2", 0x5a1333be50664, !1, [
                        [3, 0],
                        [3, 0]
                    ]]
                ],
                [
                    [0, null, !1, null, 8024381912376703, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x6649f70af69ff, !1, [
                                [11, "MusicMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 6504392677959855, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 9540628671374328, [
                    [30, Z.prototype.d.od, "LiteTween", 0, !1, !1, !1, 0xfc6e2b7cd8815, !1, [
                        [8, 0],
                        [0, [0, 1]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 6066755151641266, !1, [
                        [11, "titleFrame"],
                        [8, 1],
                        [7, [0, 10]]
                    ]]
                ],
                [
                    [-1, t.prototype.b.k, null, 7989420282714414, !1, [
                        [11, "titleFrame"],
                        [7, [0, 10]]
                    ]],
                    [-1, t.prototype.b.qk, null, 0xd655d899ae77f, !1, [
                        [6, "Layout 1"]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xe76848e86bb25, [
                    [30, u.prototype.d.Zc, null, 0, !1, !1, !1, 9991087282228432, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]]
                ],
                [
                    [30, u.prototype.b.X, null, 0x40974c85d966a, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x5eb38d43e30c5, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 948995042088506, !1, [
                        [4, 23]
                    ]],
                    [23, u.prototype.d.Wm, null, 0, !1, !1, !1, 4612421520281397, !1, [
                        [0, [0, 335]],
                        [0, [0, 337]]
                    ]],
                    [23, u.prototype.d.gc, null, 0, !1, !1, !1, 6696680547671167, !1, [
                        [1, [2, "default"]]
                    ]]
                ],
                [
                    [23, Z.prototype.b.Kd, "LiteTween2", 9599888302282428, !1, [
                        [3, 4],
                        [3, 17],
                        [1, [2, "relative(744)"]],
                        [0, [1, 0.7]],
                        [3, 0]
                    ]],
                    [23, Z.prototype.b.D, "LiteTween2", 0x55fcc7342fc8d, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [23, Z.prototype.b.D, "LiteTween4", 0xc4807ceeaf378, !1, [
                        [3, 0],
                        [3, 1]
                    ]],
                    [23, u.prototype.b.me, null, 9290538628181980, !1, [
                        [5, [0, 4]]
                    ]],
                    [30, u.prototype.b.me, null, 0xfca2ef7453d75, !1, [
                        [5, [0, 0]]
                    ]],
                    [5, u.prototype.b.me, null, 9679520636811652, !1, [
                        [5, [0, 4]]
                    ]],
                    [4, u.prototype.b.me, null, 8950965504466424, !1, [
                        [5, [0, 4]]
                    ]],
                    [13, u.prototype.b.X, null, 0xc26d19628195b, !1, [
                        [3, 1]
                    ]],
                    [13, Z.prototype.b.Kd, "LiteTween", 0x84b616f18632c, !1, [
                        [3, 5],
                        [3, 1],
                        [1, [2, "100"]],
                        [0, [1, 0.3]],
                        [3, 0]
                    ]],
                    [13, Z.prototype.b.D, "LiteTween", 518585937718776, !1, [
                        [3, 0],
                        [3, 1]
                    ]]
                ],
                [
                    [0, null, !1, null, 5775566633474102, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8341796367259297, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 0x69f863cf3e4d, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 304123320558422, [
                    [23, u.prototype.d.gc, null, 0, !1, !1, !1, 8303292741890235, !1, [
                        [1, [2, "default"]]
                    ]],
                    [23, Z.prototype.d.od, "LiteTween2", 0, !1, !1, !1, 0x72dd6eefcc7a9, !1, [
                        [8, 5],
                        [0, [1, 0.2]]
                    ]]
                ],
                [
                    [23, u.prototype.b.F, null, 0xaf007d3ad574a, !1, [
                        [1, [2, "anim2"]],
                        [3, 0]
                    ]],
                    [23, Z.prototype.b.bn, "LiteTween3", 7315478682316498, !1, [
                        [0, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x77d375343153a, [
                    [13, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 351646535533007, !1],
                    [23, u.prototype.d.gc, null, 0, !1, !1, !1, 6121585525288381, !1, [
                        [1, [2, "anim2"]]
                    ]]
                ],
                [
                    [22, u.prototype.b.X, null, 6658090819824684, !1, [
                        [3, 0]
                    ]],
                    [0, u.prototype.b.F, null, 0xd657df9c10f4d, !1, [
                        [1, [2, "anim4"]],
                        [3, 1]
                    ]],
                    [0, u.prototype.b.Ck, null, 5182153211660031, !1, [
                        [0, [0, 455]]
                    ]],
                    [30, u.prototype.b.X, null, 311930913979847, !1, [
                        [3, 0]
                    ]],
                    [21, u.prototype.b.X, null, 0xd3cfd9594159e, !1, [
                        [3, 0]
                    ]],
                    [-1, t.prototype.b.zk, null, 0x854ab6d1769df, !1, [
                        [5, [0, 1]],
                        [3, 1]
                    ]],
                    [13, Z.prototype.b.Kc, "LiteTween", 5010303453391618, !1, [
                        [3, 0]
                    ]],
                    [13, u.prototype.b.Jc, null, 8648889282185897, !1, [
                        [0, [0, 100]]
                    ]],
                    [-1, t.prototype.b.B, null, 5957037463868057, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [13, Z.prototype.b.qi, "LiteTween", 0xf08b7225e4c5d, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 9662333978615616, [
                    [2, G.prototype.d.mc, null, 1, !1, !1, !1, 0x4a371dd969cf5, !1, [
                        [4, 23]
                    ]],
                    [23, u.prototype.d.gc, null, 0, !1, !1, !1, 0x71034ba35eb15, !1, [
                        [1, [2, "anim2"]]
                    ]],
                    [23, u.prototype.d.Wm, null, 0, !1, !1, !1, 0x41780ef03d786, !1, [
                        [0, [0, 359]],
                        [0, [0, 1]]
                    ]]
                ],
                [
                    [23, Z.prototype.b.Kd, "LiteTween3", 0x8679455c751e5, !1, [
                        [3, 4],
                        [3, 17],
                        [1, [2, "relative(-744)"]],
                        [0, [1, 0.7]],
                        [3, 0]
                    ]],
                    [23, Z.prototype.b.D, "LiteTween3", 5731189462042818, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [13, u.prototype.b.X, null, 0xc2d9fe0ca0b46, !1, [
                        [3, 1]
                    ]],
                    [13, Z.prototype.b.Kd, "LiteTween", 5907680024059491, !1, [
                        [3, 5],
                        [3, 1],
                        [1, [2, "100"]],
                        [0, [1, 0.3]],
                        [3, 0]
                    ]],
                    [13, Z.prototype.b.D, "LiteTween", 333717424669263, !1, [
                        [3, 0],
                        [3, 1]
                    ]],
                    [23, Z.prototype.b.qi, "LiteTween4", 0x56f4cc768b11d, !1, [
                        [3, 0]
                    ]]
                ],
                [
                    [0, null, !1, null, 7915358862385594, [
                            [-1, t.prototype.d.n, null, 0, !1, !1, !1, 8647247726390481, !1, [
                                [11, "SoundMode"],
                                [8, 0],
                                [7, [0, 0]]
                            ]]
                        ],
                        [
                            [31, C.prototype.b.Play, null, 8242978296751463, !1, [
                                [2, ["024603202-super-click", !1]],
                                [3, 0],
                                [0, [0, 0]],
                                [1, [2, "click"]]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 6902292929510378, [
                    [23, u.prototype.d.gc, null, 0, !1, !1, !1, 5415768144840816, !1, [
                        [1, [2, "anim2"]]
                    ]],
                    [23, Z.prototype.d.od, "LiteTween3", 0, !1, !1, !1, 0xef8883b363e58, !1, [
                        [8, 5],
                        [0, [1, 0.2]]
                    ]]
                ],
                [
                    [23, u.prototype.b.F, null, 873050615799911, !1, [
                        [1, [2, "default"]],
                        [3, 0]
                    ]],
                    [23, Z.prototype.b.bn, "LiteTween2", 5950589657549468, !1, [
                        [0, [0, 0]]
                    ]]
                ]
            ],
            [0, null, !1, null, 6103860742736933, [
                    [13, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 0xd47be27ea4d91, !1],
                    [23, u.prototype.d.gc, null, 0, !1, !1, !1, 9145281400425066, !1, [
                        [1, [2, "default"]]
                    ]]
                ],
                [
                    [22, u.prototype.b.X, null, 6141771871569496, !1, [
                        [3, 1]
                    ]],
                    [0, u.prototype.b.F, null, 0x83d9c5305c5e2, !1, [
                        [1, [2, "anim2"]],
                        [3, 1]
                    ]],
                    [0, u.prototype.b.Ck, null, 0x9605958d95fe5, !1, [
                        [0, [0, 595]]
                    ]],
                    [0, u.prototype.b.Og, null, 8857120103457723, !1, [
                        [0, [0, 326]]
                    ]],
                    [30, u.prototype.b.X, null, 5915644925904184, !1, [
                        [3, 1]
                    ]],
                    [21, u.prototype.b.X, null, 6293151387569687, !1, [
                        [3, 1]
                    ]],
                    [-1, t.prototype.b.zk, null, 5956411062575835, !1, [
                        [5, [0, 1]],
                        [3, 0]
                    ]],
                    [13, Z.prototype.b.Kc, "LiteTween", 6320571125556737, !1, [
                        [3, 0]
                    ]],
                    [13, u.prototype.b.Jc, null, 7212056267485716, !1, [
                        [0, [0, 100]]
                    ]],
                    [-1, t.prototype.b.B, null, 7632748382689533, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [13, Z.prototype.b.qi, "LiteTween", 0xab558f0705e83, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 6059317387370927, [
                    [13, u.prototype.d.Zc, null, 0, !1, !1, !1, 0xb8fadeb6dd7ee, !1, [
                        [8, 3],
                        [0, [0, 5]]
                    ]],
                    [13, u.prototype.d.sk, null, 0, !1, !1, !1, 35755077980347, !1]
                ],
                [
                    [13, u.prototype.b.X, null, 5995750141703873, !1, [
                        [3, 0]
                    ]]
                ]
            ],
            [0, null, !1, null, 0xfdc71fad7547a, [
                    [13, u.prototype.d.Zc, null, 0, !1, !1, !1, 0x3db9741a15db6, !1, [
                        [8, 4],
                        [0, [0, 5]]
                    ]],
                    [13, u.prototype.d.sk, null, 0, !1, !0, !1, 0x3cd77130730dc, !1]
                ],
                [
                    [13, u.prototype.b.X, null, 288657317664606, !1, [
                        [3, 1]
                    ]]
                ]
            ]
        ]],
        ["loading", [
            [1, "load", 0, 0, !1, !1, 0x499c7b89128ed, !1],
            [1, "LastEye", 0, 0, !1, !1, 7386868479412815, !1],
            [0, null, !1, null, 0x7e314dcc9d6c, [
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0x7f55f3dcb2a64, !1, [
                        [11, "load"],
                        [8, 0],
                        [7, [0, 0]]
                    ]],
                    [31, C.prototype.d.Jg, null, 0, !1, !1, !1, 0xf826a3ac481f4, !1]
                ],
                [
                    [-1, t.prototype.b.k, null, 5197114375164344, !1, [
                        [11, "load"],
                        [7, [0, 1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 563563099924951, !1, [
                        [2, ["000949518-martial-arts-sounds-4", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 9435271070806222, !1, [
                        [2, ["002343863-sound-designboommetaldark-reve", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 0x7b04f4150be4f, !1, [
                        [2, ["008176387-swish-03", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 8818476190915567, !1, [
                        [2, ["008727352-cartoon-bubble", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 0xb7acf5f363b32, !1, [
                        [2, ["008836163-small-short-applause", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 9165590434023036, !1, [
                        [2, ["008874896-punch-face", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 6514183502310226, !1, [
                        [2, ["009840601-sfx-woosh-bambu-stick-47-ear", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 0x719c71690d75e, !1, [
                        [2, ["010758098-finger-click", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 8304855758363975, !1, [
                        [2, ["021258742-tap-dance-steps-1", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 4862392321743919, !1, [
                        [2, ["024603202-super-click", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 0x53153013095e7, !1, [
                        [2, ["037149199-bloop-pop-medium-human-mouth-g", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 0x79e11f8cb2035, !1, [
                        [2, ["040210706-wiping-feet", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 7737253586703464, !1, [
                        [2, ["041289318-pbfx-whoosh-hit-sci-fi-disappe", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 0xb84a7ff4922cd, !1, [
                        [2, ["041711798-stamp-or-icon-impact-1-whoosh-", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 944783026508804, !1, [
                        [2, ["043102532-male-falling-jump-shout", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 33777052468282, !1, [
                        [2, ["044878398-rubber-stretch-and-snap", !1]]
                    ]],
                    [31, C.prototype.b.Gb, null, 5484069066859787, !1, [
                        [2, ["untitled2", !1]]
                    ]]
                ]
            ],
            [0, null, !1, null, 8435784761411064, [
                    [51, P.prototype.d.Ve, null, 0, !1, !1, !1, 0x536b4f02567a4, !1, [
                        [8, 2],
                        [0, [0, 425]]
                    ]],
                    [51, P.prototype.d.Ve, null, 0, !1, !1, !1, 0x5e5fede49416a, !1, [
                        [8, 2],
                        [0, [6, [0, 425],
                            [19, t.prototype.e.uf]
                        ]]
                    ]]
                ],
                [
                    [51, P.prototype.b.Ng, null, 550687115655289, !1, [
                        [0, [0, 0]],
                        [0, [0, 0]],
                        [0, [18, [14, [4, [20, 51, P.prototype.e.M, !1, null],
                                    [6, [0, 459],
                                        [19, t.prototype.e.bb]
                                    ]
                                ],
                                [0, 459]
                            ],
                            [4, [20, 51, P.prototype.e.M, !1, null],
                                [6, [0, 459],
                                    [19, t.prototype.e.bb]
                                ]
                            ],
                            [0, 459]
                        ]],
                        [0, [0, 49]]
                    ]],
                    [51, P.prototype.b.Ye, null, 0x9594edca738c3, !1, [
                        [0, [18, [14, [4, [20, 51, P.prototype.e.M, !1, null],
                                    [6, [0, 459],
                                        [19, t.prototype.e.bb]
                                    ]
                                ],
                                [0, 459]
                            ],
                            [4, [20, 51, P.prototype.e.M, !1, null],
                                [6, [0, 459],
                                    [19, t.prototype.e.bb]
                                ]
                            ],
                            [0, 459]
                        ]]
                    ]]
                ]
            ],
            [0, null, !1, null, 6942766081494606, [
                    [51, P.prototype.d.Ve, null, 0, !1, !1, !1, 4803157713801325, !1, [
                        [8, 5],
                        [0, [0, 425]]
                    ]],
                    [51, P.prototype.d.Ve, null, 0, !1, !1, !1, 5775155189816104, !1, [
                        [8, 2],
                        [0, [0, 459]]
                    ]],
                    [-1, t.prototype.d.Kg, null, 0, !1, !1, !1, 7519889054496531, !1, [
                        [7, [19, t.prototype.e.uf]],
                        [8, 4],
                        [7, [0, 0]]
                    ]]
                ],
                [
                    [51, P.prototype.b.Ng, null, 7630321601739929, !1, [
                        [0, [0, 0]],
                        [0, [0, 0]],
                        [0, [18, [14, [4, [20, 51, P.prototype.e.M, !1, null],
                                    [6, [0, 459],
                                        [19, t.prototype.e.bb]
                                    ]
                                ],
                                [0, 459]
                            ],
                            [4, [20, 51, P.prototype.e.M, !1, null],
                                [6, [0, 459],
                                    [19, t.prototype.e.bb]
                                ]
                            ],
                            [0, 459]
                        ]],
                        [0, [0, 49]]
                    ]],
                    [51, P.prototype.b.Ye, null, 0xfbbd6324454df, !1, [
                        [0, [18, [14, [4, [20, 51, P.prototype.e.M, !1, null],
                                    [6, [0, 459],
                                        [19, t.prototype.e.bb]
                                    ]
                                ],
                                [0, 459]
                            ],
                            [4, [20, 51, P.prototype.e.M, !1, null],
                                [6, [0, 459],
                                    [19, t.prototype.e.bb]
                                ]
                            ],
                            [0, 459]
                        ]]
                    ]]
                ]
            ],
            [0, null, !1, null, 5863732236853063, [
                    [-1, t.prototype.d.Kg, null, 0, !1, !1, !1, 6234595803936088, !1, [
                        [7, [19, t.prototype.e.uf]],
                        [8, 5],
                        [7, [1, 0.99]]
                    ]],
                    [-1, t.prototype.d.n, null, 0, !1, !1, !1, 0xd58b845070823, !1, [
                        [11, "LastEye"],
                        [8, 0],
                        [7, [0, 0]]
                    ]],
                    [51, P.prototype.d.Ve, null, 0, !1, !1, !1, 0xff2980c9d8d70, !1, [
                        [8, 5],
                        [0, [0, 455]]
                    ]]
                ],
                [],
                [
                    [0, null, !1, null, 0xb76738d7d7b65, [
                            [31, C.prototype.d.Jg, null, 0, !1, !1, !1, 97796121235286, !1],
                            [31, C.prototype.d.vq, null, 0, !1, !1, !1, 5792093049390269, !1]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 9464028344036896, !1, [
                                [11, "LastEye"],
                                [7, [0, 1]]
                            ]],
                            [49, u.prototype.b.Mg, null, 5678638510799352, !1, [
                                [0, [0, 0]]
                            ]],
                            [49, u.prototype.b.Ze, null, 8345860999177605, !1],
                            [-1, t.prototype.b.B, null, 5056963522881435, !1, [
                                [0, [0, 1]]
                            ]],
                            [49, Z.prototype.b.D, "LiteTween", 9233866223589700, !1, [
                                [3, 0],
                                [3, 0]
                            ]]
                        ]
                    ],
                    [0, null, !1, null, 0xf1b43455f9504, [
                            [31, C.prototype.d.Jg, null, 0, !1, !0, !1, 5016354482767337, !1]
                        ],
                        [
                            [-1, t.prototype.b.k, null, 8596594888863451, !1, [
                                [11, "LastEye"],
                                [7, [0, 1]]
                            ]],
                            [49, u.prototype.b.Mg, null, 0xcef50c94f98ee, !1, [
                                [0, [0, 0]]
                            ]],
                            [49, u.prototype.b.Ze, null, 0x50d40bcdb475e, !1],
                            [-1, t.prototype.b.B, null, 0xade25aeac3263, !1, [
                                [0, [0, 1]]
                            ]],
                            [49, Z.prototype.b.D, "LiteTween", 0x7eb524c779b30, !1, [
                                [3, 0],
                                [3, 0]
                            ]]
                        ]
                    ]
                ]
            ],
            [0, null, !1, null, 0xbfa041695e877, [
                    [49, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 5501477418984228, !1]
                ],
                [
                    [49, u.prototype.b.Ha, null, 0xb1d5a8494aac, !1],
                    [-1, t.prototype.b.B, null, 6735178252152326, !1, [
                        [0, [1, 0.1]]
                    ]],
                    [52, Z.prototype.b.D, "LiteTween", 4804168966168917, !1, [
                        [3, 0],
                        [3, 0]
                    ]],
                    [52, u.prototype.b.X, null, 9528144045109, !1, [
                        [3, 1]
                    ]]
                ]
            ],
            [0, null, !1, null, 6210097833823511, [
                    [52, Z.prototype.d.lc, "LiteTween", 1, !1, !1, !1, 0x6a4035dc9b53b, !1]
                ],
                [
                    [-1, t.prototype.b.B, null, 9332703316511566, !1, [
                        [0, [1, 0.4]]
                    ]],
                    [52, pc.prototype.b.jq, "Flash", 0x93c99c28f251c, !1, [
                        [0, [1, 0.4]],
                        [0, [1, 0.4]],
                        [0, [0, 300]]
                    ]]
                ]
            ],
            [0, null, !1, null, 0x55f477047684f, [
                    [2, G.prototype.d.oi, null, 1, !1, !1, !1, 8657329361102298, !1],
                    [52, u.prototype.d.hq, null, 0, !1, !1, !1, 5444962409595609, !1, [
                        [8, 5],
                        [0, [0, 20]]
                    ]]
                ],
                [
                    [-1, t.prototype.b.qk, null, 7129439740182158, !1, [
                        [6, "menu"]
                    ]]
                ]
            ]
        ]]
    ], [], "media/", !1, 640, 800, 4, !0, !0, !1, "1.0.0.0", !0, !0, 2, 0, 173, !1, !0, 1, !1, []]
};