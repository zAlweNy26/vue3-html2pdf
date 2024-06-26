import { toValue as Ju, defineComponent as Xu, ref as Ku, openBlock as $u, createElementBlock as Zu, mergeProps as Qu, renderSlot as tl, unref as pc } from "vue";
function fe(n) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fe(n);
}
var sn = Uint8Array, Qe = Uint16Array, la = Uint32Array, fo = new sn([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), po = new sn([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), vs = new sn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Uc = function(n, t) {
  for (var r = new Qe(31), i = 0; i < 31; ++i)
    r[i] = t += 1 << n[i - 1];
  for (var s = new la(r[30]), i = 1; i < 30; ++i)
    for (var o = r[i]; o < r[i + 1]; ++o)
      s[o] = o - r[i] << 5 | i;
  return [r, s];
}, Hc = Uc(fo, 2), Wc = Hc[0], bs = Hc[1];
Wc[28] = 258, bs[258] = 28;
var Vc = Uc(po, 0), el = Vc[0], gc = Vc[1], ws = new Qe(32768);
for (var ye = 0; ye < 32768; ++ye) {
  var Ir = (ye & 43690) >>> 1 | (ye & 21845) << 1;
  Ir = (Ir & 52428) >>> 2 | (Ir & 13107) << 2, Ir = (Ir & 61680) >>> 4 | (Ir & 3855) << 4, ws[ye] = ((Ir & 65280) >>> 8 | (Ir & 255) << 8) >>> 1;
}
var Zn = function(n, t, r) {
  for (var i = n.length, s = 0, o = new Qe(t); s < i; ++s)
    ++o[n[s] - 1];
  var u = new Qe(t);
  for (s = 0; s < t; ++s)
    u[s] = u[s - 1] + o[s - 1] << 1;
  var h;
  if (r) {
    h = new Qe(1 << t);
    var f = 15 - t;
    for (s = 0; s < i; ++s)
      if (n[s])
        for (var g = s << 4 | n[s], b = t - n[s], x = u[n[s] - 1]++ << b, S = x | (1 << b) - 1; x <= S; ++x)
          h[ws[x] >>> f] = g;
  } else
    for (h = new Qe(i), s = 0; s < i; ++s)
      h[s] = ws[u[n[s] - 1]++] >>> 15 - n[s];
  return h;
}, Or = new sn(288);
for (var ye = 0; ye < 144; ++ye)
  Or[ye] = 8;
for (var ye = 144; ye < 256; ++ye)
  Or[ye] = 9;
for (var ye = 256; ye < 280; ++ye)
  Or[ye] = 7;
for (var ye = 280; ye < 288; ++ye)
  Or[ye] = 8;
var ha = new sn(32);
for (var ye = 0; ye < 32; ++ye)
  ha[ye] = 5;
var nl = /* @__PURE__ */ Zn(Or, 9, 0), rl = /* @__PURE__ */ Zn(Or, 9, 1), il = /* @__PURE__ */ Zn(ha, 5, 0), al = /* @__PURE__ */ Zn(ha, 5, 1), ss = function(n) {
  for (var t = n[0], r = 1; r < n.length; ++r)
    n[r] > t && (t = n[r]);
  return t;
}, Rn = function(n, t, r) {
  var i = t / 8 >> 0;
  return (n[i] | n[i + 1] << 8) >>> (t & 7) & r;
}, cs = function(n, t) {
  var r = t / 8 >> 0;
  return (n[r] | n[r + 1] << 8 | n[r + 2] << 16) >>> (t & 7);
}, Is = function(n) {
  return (n / 8 >> 0) + (n & 7 && 1);
}, Gc = function(n, t, r) {
  (r == null || r > n.length) && (r = n.length);
  var i = new (n instanceof Qe ? Qe : n instanceof la ? la : sn)(r - t);
  return i.set(n.subarray(t, r)), i;
}, ol = function(n, t, r) {
  var i = n.length, s = !t || r, o = !r || r.i;
  r || (r = {}), t || (t = new sn(i * 3));
  var u = function(Y) {
    var Q = t.length;
    if (Y > Q) {
      var et = new sn(Math.max(Q * 2, Y));
      et.set(t), t = et;
    }
  }, h = r.f || 0, f = r.p || 0, g = r.b || 0, b = r.l, x = r.d, S = r.m, p = r.n, O = i * 8;
  do {
    if (!b) {
      r.f = h = Rn(n, f, 1);
      var I = Rn(n, f + 1, 3);
      if (f += 3, I)
        if (I == 1)
          b = rl, x = al, S = 9, p = 5;
        else if (I == 2) {
          var X = Rn(n, f, 31) + 257, ot = Rn(n, f + 10, 15) + 4, ut = X + Rn(n, f + 5, 31) + 1;
          f += 14;
          for (var wt = new sn(ut), tt = new sn(19), D = 0; D < ot; ++D)
            tt[vs[D]] = Rn(n, f + D * 3, 7);
          f += ot * 3;
          var gt = ss(tt), dt = (1 << gt) - 1;
          if (!o && f + ut * (gt + 7) > O)
            break;
          for (var F = Zn(tt, gt, 1), D = 0; D < ut; ) {
            var P = F[Rn(n, f, dt)];
            f += P & 15;
            var R = P >>> 4;
            if (R < 16)
              wt[D++] = R;
            else {
              var z = 0, q = 0;
              for (R == 16 ? (q = 3 + Rn(n, f, 3), f += 2, z = wt[D - 1]) : R == 17 ? (q = 3 + Rn(n, f, 7), f += 3) : R == 18 && (q = 11 + Rn(n, f, 127), f += 7); q--; )
                wt[D++] = z;
            }
          }
          var at = wt.subarray(0, X), nt = wt.subarray(X);
          S = ss(at), p = ss(nt), b = Zn(at, S, 1), x = Zn(nt, p, 1);
        } else
          throw "invalid block type";
      else {
        var R = Is(f) + 4, _ = n[R - 4] | n[R - 3] << 8, E = R + _;
        if (E > i) {
          if (o)
            throw "unexpected EOF";
          break;
        }
        s && u(g + _), t.set(n.subarray(R, E), g), r.b = g += _, r.p = f = E * 8;
        continue;
      }
      if (f > O)
        throw "unexpected EOF";
    }
    s && u(g + 131072);
    for (var lt = (1 << S) - 1, Z = (1 << p) - 1, ft = S + p + 18; o || f + ft < O; ) {
      var z = b[cs(n, f) & lt], ht = z >>> 4;
      if (f += z & 15, f > O)
        throw "unexpected EOF";
      if (!z)
        throw "invalid length/literal";
      if (ht < 256)
        t[g++] = ht;
      else if (ht == 256) {
        b = null;
        break;
      } else {
        var kt = ht - 254;
        if (ht > 264) {
          var D = ht - 257, L = fo[D];
          kt = Rn(n, f, (1 << L) - 1) + Wc[D], f += L;
        }
        var j = x[cs(n, f) & Z], M = j >>> 4;
        if (!j)
          throw "invalid distance";
        f += j & 15;
        var nt = el[M];
        if (M > 3) {
          var L = po[M];
          nt += cs(n, f) & (1 << L) - 1, f += L;
        }
        if (f > O)
          throw "unexpected EOF";
        s && u(g + 131072);
        for (var W = g + kt; g < W; g += 4)
          t[g] = t[g - nt], t[g + 1] = t[g + 1 - nt], t[g + 2] = t[g + 2 - nt], t[g + 3] = t[g + 3 - nt];
        g = W;
      }
    }
    r.l = b, r.p = f, r.b = g, b && (h = 1, r.m = S, r.d = x, r.n = p);
  } while (!h);
  return g == t.length ? t : Gc(t, 0, g);
}, fr = function(n, t, r) {
  r <<= t & 7;
  var i = t / 8 >> 0;
  n[i] |= r, n[i + 1] |= r >>> 8;
}, sa = function(n, t, r) {
  r <<= t & 7;
  var i = t / 8 >> 0;
  n[i] |= r, n[i + 1] |= r >>> 8, n[i + 2] |= r >>> 16;
}, us = function(n, t) {
  for (var r = [], i = 0; i < n.length; ++i)
    n[i] && r.push({ s: i, f: n[i] });
  var s = r.length, o = r.slice();
  if (!s)
    return [new sn(0), 0];
  if (s == 1) {
    var u = new sn(r[0].s + 1);
    return u[r[0].s] = 1, [u, 1];
  }
  r.sort(function(ut, wt) {
    return ut.f - wt.f;
  }), r.push({ s: -1, f: 25001 });
  var h = r[0], f = r[1], g = 0, b = 1, x = 2;
  for (r[0] = { s: -1, f: h.f + f.f, l: h, r: f }; b != s - 1; )
    h = r[r[g].f < r[x].f ? g++ : x++], f = r[g != b && r[g].f < r[x].f ? g++ : x++], r[b++] = { s: -1, f: h.f + f.f, l: h, r: f };
  for (var S = o[0].s, i = 1; i < s; ++i)
    o[i].s > S && (S = o[i].s);
  var p = new Qe(S + 1), O = ys(r[b - 1], p, 0);
  if (O > t) {
    var i = 0, I = 0, R = O - t, _ = 1 << R;
    for (o.sort(function(wt, tt) {
      return p[tt.s] - p[wt.s] || wt.f - tt.f;
    }); i < s; ++i) {
      var E = o[i].s;
      if (p[E] > t)
        I += _ - (1 << O - p[E]), p[E] = t;
      else
        break;
    }
    for (I >>>= R; I > 0; ) {
      var X = o[i].s;
      p[X] < t ? I -= 1 << t - p[X]++ - 1 : ++i;
    }
    for (; i >= 0 && I; --i) {
      var ot = o[i].s;
      p[ot] == t && (--p[ot], ++I);
    }
    O = t;
  }
  return [new sn(p), O];
}, ys = function(n, t, r) {
  return n.s == -1 ? Math.max(ys(n.l, t, r + 1), ys(n.r, t, r + 1)) : t[n.s] = r;
}, mc = function(n) {
  for (var t = n.length; t && !n[--t]; )
    ;
  for (var r = new Qe(++t), i = 0, s = n[0], o = 1, u = function(f) {
    r[i++] = f;
  }, h = 1; h <= t; ++h)
    if (n[h] == s && h != t)
      ++o;
    else {
      if (!s && o > 2) {
        for (; o > 138; o -= 138)
          u(32754);
        o > 2 && (u(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
      } else if (o > 3) {
        for (u(s), --o; o > 6; o -= 6)
          u(8304);
        o > 2 && (u(o - 3 << 5 | 8208), o = 0);
      }
      for (; o--; )
        u(s);
      o = 1, s = n[h];
    }
  return [r.subarray(0, i), t];
}, ca = function(n, t) {
  for (var r = 0, i = 0; i < t.length; ++i)
    r += n[i] * t[i];
  return r;
}, Ls = function(n, t, r) {
  var i = r.length, s = Is(t + 2);
  n[s] = i & 255, n[s + 1] = i >>> 8, n[s + 2] = n[s] ^ 255, n[s + 3] = n[s + 1] ^ 255;
  for (var o = 0; o < i; ++o)
    n[s + o + 4] = r[o];
  return (s + 4 + i) * 8;
}, vc = function(n, t, r, i, s, o, u, h, f, g, b) {
  fr(t, b++, r), ++s[256];
  for (var x = us(s, 15), S = x[0], p = x[1], O = us(o, 15), I = O[0], R = O[1], _ = mc(S), E = _[0], X = _[1], ot = mc(I), ut = ot[0], wt = ot[1], tt = new Qe(19), D = 0; D < E.length; ++D)
    tt[E[D] & 31]++;
  for (var D = 0; D < ut.length; ++D)
    tt[ut[D] & 31]++;
  for (var gt = us(tt, 7), dt = gt[0], F = gt[1], P = 19; P > 4 && !dt[vs[P - 1]]; --P)
    ;
  var z = g + 5 << 3, q = ca(s, Or) + ca(o, ha) + u, at = ca(s, S) + ca(o, I) + u + 14 + 3 * P + ca(tt, dt) + (2 * tt[16] + 3 * tt[17] + 7 * tt[18]);
  if (z <= q && z <= at)
    return Ls(t, b, n.subarray(f, f + g));
  var nt, lt, Z, ft;
  if (fr(t, b, 1 + (at < q)), b += 2, at < q) {
    nt = Zn(S, p, 0), lt = S, Z = Zn(I, R, 0), ft = I;
    var ht = Zn(dt, F, 0);
    fr(t, b, X - 257), fr(t, b + 5, wt - 1), fr(t, b + 10, P - 4), b += 14;
    for (var D = 0; D < P; ++D)
      fr(t, b + 3 * D, dt[vs[D]]);
    b += 3 * P;
    for (var kt = [E, ut], L = 0; L < 2; ++L)
      for (var j = kt[L], D = 0; D < j.length; ++D) {
        var M = j[D] & 31;
        fr(t, b, ht[M]), b += dt[M], M > 15 && (fr(t, b, j[D] >>> 5 & 127), b += j[D] >>> 12);
      }
  } else
    nt = nl, lt = Or, Z = il, ft = ha;
  for (var D = 0; D < h; ++D)
    if (i[D] > 255) {
      var M = i[D] >>> 18 & 31;
      sa(t, b, nt[M + 257]), b += lt[M + 257], M > 7 && (fr(t, b, i[D] >>> 23 & 31), b += fo[M]);
      var W = i[D] & 31;
      sa(t, b, Z[W]), b += ft[W], W > 3 && (sa(t, b, i[D] >>> 5 & 8191), b += po[W]);
    } else
      sa(t, b, nt[i[D]]), b += lt[i[D]];
  return sa(t, b, nt[256]), b + lt[256];
}, sl = /* @__PURE__ */ new la([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), cl = function(n, t, r, i, s, o) {
  var u = n.length, h = new sn(i + u + 5 * (1 + Math.floor(u / 7e3)) + s), f = h.subarray(i, h.length - s), g = 0;
  if (!t || u < 8)
    for (var b = 0; b <= u; b += 65535) {
      var x = b + 65535;
      x < u ? g = Ls(f, g, n.subarray(b, x)) : (f[b] = o, g = Ls(f, g, n.subarray(b, u)));
    }
  else {
    for (var S = sl[t - 1], p = S >>> 13, O = S & 8191, I = (1 << r) - 1, R = new Qe(32768), _ = new Qe(I + 1), E = Math.ceil(r / 3), X = 2 * E, ot = function(Ut) {
      return (n[Ut] ^ n[Ut + 1] << E ^ n[Ut + 2] << X) & I;
    }, ut = new la(25e3), wt = new Qe(288), tt = new Qe(32), D = 0, gt = 0, b = 0, dt = 0, F = 0, P = 0; b < u; ++b) {
      var z = ot(b), q = b & 32767, at = _[z];
      if (R[q] = at, _[z] = q, F <= b) {
        var nt = u - b;
        if ((D > 7e3 || dt > 24576) && nt > 423) {
          g = vc(n, f, 0, ut, wt, tt, gt, dt, P, b - P, g), dt = D = gt = 0, P = b;
          for (var lt = 0; lt < 286; ++lt)
            wt[lt] = 0;
          for (var lt = 0; lt < 30; ++lt)
            tt[lt] = 0;
        }
        var Z = 2, ft = 0, ht = O, kt = q - at & 32767;
        if (nt > 2 && z == ot(b - kt))
          for (var L = Math.min(p, nt) - 1, j = Math.min(32767, b), M = Math.min(258, nt); kt <= j && --ht && q != at; ) {
            if (n[b + Z] == n[b + Z - kt]) {
              for (var W = 0; W < M && n[b + W] == n[b + W - kt]; ++W)
                ;
              if (W > Z) {
                if (Z = W, ft = kt, W > L)
                  break;
                for (var Y = Math.min(kt, W - 2), Q = 0, lt = 0; lt < Y; ++lt) {
                  var et = b - kt + lt + 32768 & 32767, rt = R[et], At = et - rt + 32768 & 32767;
                  At > Q && (Q = At, at = et);
                }
              }
            }
            q = at, at = R[q], kt += q - at + 32768 & 32767;
          }
        if (ft) {
          ut[dt++] = 268435456 | bs[Z] << 18 | gc[ft];
          var xt = bs[Z] & 31, Ct = gc[ft] & 31;
          gt += fo[xt] + po[Ct], ++wt[257 + xt], ++tt[Ct], F = b + Z, ++D;
        } else
          ut[dt++] = n[b], ++wt[n[b]];
      }
    }
    g = vc(n, f, o, ut, wt, tt, gt, dt, P, b - P, g);
  }
  return Gc(h, 0, i + Is(g) + s);
}, ul = function() {
  var n = 1, t = 0;
  return {
    p: function(r) {
      for (var i = n, s = t, o = r.length, u = 0; u != o; ) {
        for (var h = Math.min(u + 5552, o); u < h; ++u)
          i += r[u], s += i;
        i %= 65521, s %= 65521;
      }
      n = i, t = s;
    },
    d: function() {
      return (n >>> 8 << 16 | (t & 255) << 8 | t >>> 8) + ((n & 255) << 23) * 2;
    }
  };
}, ll = function(n, t, r, i, s) {
  return cl(n, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 12 + t.mem, r, i, !s);
}, hl = function(n, t, r) {
  for (; r; ++t)
    n[t] = r, r >>>= 8;
}, fl = function(n, t) {
  var r = t.level, i = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  n[0] = 120, n[1] = i << 6 | (i ? 32 - 2 * i : 1);
}, dl = function(n) {
  if ((n[0] & 15) != 8 || n[0] >>> 4 > 7 || (n[0] << 8 | n[1]) % 31)
    throw "invalid zlib data";
  if (n[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function xs(n, t) {
  t === void 0 && (t = {});
  var r = ul();
  r.p(n);
  var i = ll(n, t, 2, 4);
  return fl(i, t), hl(i, i.length - 4, r.d()), i;
}
function pl(n, t) {
  return ol((dl(n), n.subarray(2, -4)), t);
}
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.5.1 Built on 2022-01-28T15:37:57.791Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2021 yWorks GmbH, http://www.yworks.com
 *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */
var Ht = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function ls() {
  Ht.console && typeof Ht.console.log == "function" && Ht.console.log.apply(Ht.console, arguments);
}
var ve = { log: ls, warn: function(n) {
  Ht.console && (typeof Ht.console.warn == "function" ? Ht.console.warn.apply(Ht.console, arguments) : ls.call(null, arguments));
}, error: function(n) {
  Ht.console && (typeof Ht.console.error == "function" ? Ht.console.error.apply(Ht.console, arguments) : ls(n));
} };
function hs(n, t, r) {
  var i = new XMLHttpRequest();
  i.open("GET", n), i.responseType = "blob", i.onload = function() {
    Vr(i.response, t, r);
  }, i.onerror = function() {
    ve.error("could not download file");
  }, i.send();
}
function bc(n) {
  var t = new XMLHttpRequest();
  t.open("HEAD", n, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Qa(n) {
  try {
    n.dispatchEvent(new MouseEvent("click"));
  } catch {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(t);
  }
}
var ua, As, Vr = Ht.saveAs || ((typeof window > "u" ? "undefined" : fe(window)) !== "object" || window !== Ht ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, t, r) {
  var i = Ht.URL || Ht.webkitURL, s = document.createElement("a");
  t = t || n.name || "download", s.download = t, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? bc(s.href) ? hs(n, t, r) : Qa(s, s.target = "_blank") : Qa(s)) : (s.href = i.createObjectURL(n), setTimeout(function() {
    i.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    Qa(s);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(n, t, r) {
  if (t = t || n.name || "download", typeof n == "string") if (bc(n)) hs(n, t, r);
  else {
    var i = document.createElement("a");
    i.href = n, i.target = "_blank", setTimeout(function() {
      Qa(i);
    });
  }
  else navigator.msSaveOrOpenBlob(function(s, o) {
    return o === void 0 ? o = { autoBom: !1 } : fe(o) !== "object" && (ve.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
  }(n, r), t);
} : function(n, t, r, i) {
  if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), typeof n == "string") return hs(n, t, r);
  var s = n.type === "application/octet-stream", o = /constructor/i.test(Ht.HTMLElement) || Ht.safari, u = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((u || s && o) && (typeof FileReader > "u" ? "undefined" : fe(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var b = h.result;
      b = u ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = b : location = b, i = null;
    }, h.readAsDataURL(n);
  } else {
    var f = Ht.URL || Ht.webkitURL, g = f.createObjectURL(n);
    i ? i.location = g : location.href = g, i = null, setTimeout(function() {
      f.revokeObjectURL(g);
    }, 4e4);
  }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function Yc(n) {
  var t;
  n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
  for (var r = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], i = 0; i < r.length; i++) {
    var s = r[i].re, o = r[i].process, u = s.exec(n);
    u && (t = o(u), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var h = this.r.toString(16), f = this.g.toString(16), g = this.b.toString(16);
    return h.length == 1 && (h = "0" + h), f.length == 1 && (f = "0" + f), g.length == 1 && (g = "0" + g), "#" + h + f + g;
  };
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function fs(n, t) {
  var r = n[0], i = n[1], s = n[2], o = n[3];
  r = Je(r, i, s, o, t[0], 7, -680876936), o = Je(o, r, i, s, t[1], 12, -389564586), s = Je(s, o, r, i, t[2], 17, 606105819), i = Je(i, s, o, r, t[3], 22, -1044525330), r = Je(r, i, s, o, t[4], 7, -176418897), o = Je(o, r, i, s, t[5], 12, 1200080426), s = Je(s, o, r, i, t[6], 17, -1473231341), i = Je(i, s, o, r, t[7], 22, -45705983), r = Je(r, i, s, o, t[8], 7, 1770035416), o = Je(o, r, i, s, t[9], 12, -1958414417), s = Je(s, o, r, i, t[10], 17, -42063), i = Je(i, s, o, r, t[11], 22, -1990404162), r = Je(r, i, s, o, t[12], 7, 1804603682), o = Je(o, r, i, s, t[13], 12, -40341101), s = Je(s, o, r, i, t[14], 17, -1502002290), r = Xe(r, i = Je(i, s, o, r, t[15], 22, 1236535329), s, o, t[1], 5, -165796510), o = Xe(o, r, i, s, t[6], 9, -1069501632), s = Xe(s, o, r, i, t[11], 14, 643717713), i = Xe(i, s, o, r, t[0], 20, -373897302), r = Xe(r, i, s, o, t[5], 5, -701558691), o = Xe(o, r, i, s, t[10], 9, 38016083), s = Xe(s, o, r, i, t[15], 14, -660478335), i = Xe(i, s, o, r, t[4], 20, -405537848), r = Xe(r, i, s, o, t[9], 5, 568446438), o = Xe(o, r, i, s, t[14], 9, -1019803690), s = Xe(s, o, r, i, t[3], 14, -187363961), i = Xe(i, s, o, r, t[8], 20, 1163531501), r = Xe(r, i, s, o, t[13], 5, -1444681467), o = Xe(o, r, i, s, t[2], 9, -51403784), s = Xe(s, o, r, i, t[7], 14, 1735328473), r = Ke(r, i = Xe(i, s, o, r, t[12], 20, -1926607734), s, o, t[5], 4, -378558), o = Ke(o, r, i, s, t[8], 11, -2022574463), s = Ke(s, o, r, i, t[11], 16, 1839030562), i = Ke(i, s, o, r, t[14], 23, -35309556), r = Ke(r, i, s, o, t[1], 4, -1530992060), o = Ke(o, r, i, s, t[4], 11, 1272893353), s = Ke(s, o, r, i, t[7], 16, -155497632), i = Ke(i, s, o, r, t[10], 23, -1094730640), r = Ke(r, i, s, o, t[13], 4, 681279174), o = Ke(o, r, i, s, t[0], 11, -358537222), s = Ke(s, o, r, i, t[3], 16, -722521979), i = Ke(i, s, o, r, t[6], 23, 76029189), r = Ke(r, i, s, o, t[9], 4, -640364487), o = Ke(o, r, i, s, t[12], 11, -421815835), s = Ke(s, o, r, i, t[15], 16, 530742520), r = $e(r, i = Ke(i, s, o, r, t[2], 23, -995338651), s, o, t[0], 6, -198630844), o = $e(o, r, i, s, t[7], 10, 1126891415), s = $e(s, o, r, i, t[14], 15, -1416354905), i = $e(i, s, o, r, t[5], 21, -57434055), r = $e(r, i, s, o, t[12], 6, 1700485571), o = $e(o, r, i, s, t[3], 10, -1894986606), s = $e(s, o, r, i, t[10], 15, -1051523), i = $e(i, s, o, r, t[1], 21, -2054922799), r = $e(r, i, s, o, t[8], 6, 1873313359), o = $e(o, r, i, s, t[15], 10, -30611744), s = $e(s, o, r, i, t[6], 15, -1560198380), i = $e(i, s, o, r, t[13], 21, 1309151649), r = $e(r, i, s, o, t[4], 6, -145523070), o = $e(o, r, i, s, t[11], 10, -1120210379), s = $e(s, o, r, i, t[2], 15, 718787259), i = $e(i, s, o, r, t[9], 21, -343485551), n[0] = jr(r, n[0]), n[1] = jr(i, n[1]), n[2] = jr(s, n[2]), n[3] = jr(o, n[3]);
}
function go(n, t, r, i, s, o) {
  return t = jr(jr(t, n), jr(i, o)), jr(t << s | t >>> 32 - s, r);
}
function Je(n, t, r, i, s, o, u) {
  return go(t & r | ~t & i, n, t, s, o, u);
}
function Xe(n, t, r, i, s, o, u) {
  return go(t & i | r & ~i, n, t, s, o, u);
}
function Ke(n, t, r, i, s, o, u) {
  return go(t ^ r ^ i, n, t, s, o, u);
}
function $e(n, t, r, i, s, o, u) {
  return go(r ^ (t | ~i), n, t, s, o, u);
}
function Jc(n) {
  var t, r = n.length, i = [1732584193, -271733879, -1732584194, 271733878];
  for (t = 64; t <= n.length; t += 64) fs(i, gl(n.substring(t - 64, t)));
  n = n.substring(t - 64);
  var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (t = 0; t < n.length; t++) s[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
  if (s[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (fs(i, s), t = 0; t < 16; t++) s[t] = 0;
  return s[14] = 8 * r, fs(i, s), i;
}
function gl(n) {
  var t, r = [];
  for (t = 0; t < 64; t += 4) r[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
  return r;
}
ua = Ht.atob.bind(Ht), As = Ht.btoa.bind(Ht);
var wc = "0123456789abcdef".split("");
function ml(n) {
  for (var t = "", r = 0; r < 4; r++) t += wc[n >> 8 * r + 4 & 15] + wc[n >> 8 * r & 15];
  return t;
}
function vl(n) {
  return String.fromCharCode((255 & n) >> 0, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
}
function Ns(n) {
  return Jc(n).map(vl).join("");
}
var bl = function(n) {
  for (var t = 0; t < n.length; t++) n[t] = ml(n[t]);
  return n.join("");
}(Jc("hello")) != "5d41402abc4b2a76b9719d911017c592";
function jr(n, t) {
  if (bl) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  return n + t & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function Ss(n, t) {
  var r, i, s, o;
  if (n !== r) {
    for (var u = (s = n, o = 1 + (256 / n.length >> 0), new Array(o + 1).join(s)), h = [], f = 0; f < 256; f++) h[f] = f;
    var g = 0;
    for (f = 0; f < 256; f++) {
      var b = h[f];
      g = (g + b + u.charCodeAt(f)) % 256, h[f] = h[g], h[g] = b;
    }
    r = n, i = h;
  } else h = i;
  var x = t.length, S = 0, p = 0, O = "";
  for (f = 0; f < x; f++) p = (p + (b = h[S = (S + 1) % 256])) % 256, h[S] = h[p], h[p] = b, u = h[(h[S] + h[p]) % 256], O += String.fromCharCode(t.charCodeAt(f) ^ u);
  return O;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var yc = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Si(n, t, r, i) {
  this.v = 1, this.r = 2;
  var s = 192;
  n.forEach(function(h) {
    if (yc.perm !== void 0) throw new Error("Invalid permission: " + h);
    s += yc[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var o = (t + this.padding).substr(0, 32), u = (r + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(o, u), this.P = -(1 + (255 ^ s)), this.encryptionKey = Ns(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(0, 5), this.U = Ss(this.encryptionKey, this.padding);
}
function _i(n) {
  if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
  for (var t = "", r = n.length, i = 0; i < r; i++) {
    var s = n.charCodeAt(i);
    s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? t += "#" + ("0" + s.toString(16)).slice(-2) : t += n[i];
  }
  return t;
}
function Lc(n) {
  if (fe(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var t = {};
  this.subscribe = function(r, i, s) {
    if (s = s || !1, typeof r != "string" || typeof i != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    t.hasOwnProperty(r) || (t[r] = {});
    var o = Math.random().toString(35);
    return t[r][o] = [i, !!s], o;
  }, this.unsubscribe = function(r) {
    for (var i in t) if (t[i][r]) return delete t[i][r], Object.keys(t[i]).length === 0 && delete t[i], !0;
    return !1;
  }, this.publish = function(r) {
    if (t.hasOwnProperty(r)) {
      var i = Array.prototype.slice.call(arguments, 1), s = [];
      for (var o in t[r]) {
        var u = t[r][o];
        try {
          u[0].apply(n, i);
        } catch (h) {
          Ht.console && ve.error("jsPDF PubSub Error", h.message, h);
        }
        u[1] && s.push(o);
      }
      s.length && s.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return t;
  };
}
function co(n) {
  if (!(this instanceof co)) return new co(n);
  var t = "opacity,stroke-opacity".split(",");
  for (var r in n) n.hasOwnProperty(r) && t.indexOf(r) >= 0 && (this[r] = n[r]);
  this.id = "", this.objectNumber = -1;
}
function Xc(n, t) {
  this.gState = n, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function Gr(n, t, r, i, s) {
  if (!(this instanceof Gr)) return new Gr(n, t, r, i, s);
  this.type = n === "axial" ? 2 : 3, this.coords = t, this.colors = r, Xc.call(this, i, s);
}
function Pi(n, t, r, i, s) {
  if (!(this instanceof Pi)) return new Pi(n, t, r, i, s);
  this.boundingBox = n, this.xStep = t, this.yStep = r, this.stream = "", this.cloneIndex = 0, Xc.call(this, i, s);
}
function zt(n) {
  var t, r = typeof arguments[0] == "string" ? arguments[0] : "p", i = arguments[1], s = arguments[2], o = arguments[3], u = [], h = 1, f = 16, g = "S", b = null;
  fe(n = n || {}) === "object" && (r = n.orientation, i = n.unit || i, s = n.format || s, o = n.compress || n.compressPdf || o, (b = n.encryption || null) !== null && (b.userPassword = b.userPassword || "", b.ownerPassword = b.ownerPassword || "", b.userPermissions = b.userPermissions || []), h = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (t = n.precision), n.floatPrecision !== void 0 && (f = n.floatPrecision), g = n.defaultPathOperation || "S"), u = n.filters || (o === !0 ? ["FlateEncode"] : u), i = i || "mm", r = ("" + (r || "P")).toLowerCase();
  var x = n.putOnlyUsedFonts || !1, S = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = Lc;
  var O = "1.3", I = p.__private__.getPdfVersion = function() {
    return O;
  };
  p.__private__.setPdfVersion = function(c) {
    O = c;
  };
  var R = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return R;
  };
  var _ = p.__private__.getPageFormat = function(c) {
    return R[c];
  };
  s = s || "a4";
  var E = { COMPAT: "compat", ADVANCED: "advanced" }, X = E.COMPAT;
  function ot() {
    this.saveGraphicsState(), B(new Tt(It, 0, 0, -It, 0, vr() * It).toString() + " cm"), this.setFontSize(this.getFontSize() / It), g = "n", X = E.ADVANCED;
  }
  function ut() {
    this.restoreGraphicsState(), g = "S", X = E.COMPAT;
  }
  var wt = p.__private__.combineFontStyleAndFontWeight = function(c, v) {
    if (c == "bold" && v == "normal" || c == "bold" && v == 400 || c == "normal" && v == "italic" || c == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return v && (c = v == 400 || v === "normal" ? c === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || c !== "normal" ? (v == 700 ? "bold" : v) + "" + c : "bold"), c;
  };
  p.advancedAPI = function(c) {
    var v = X === E.COMPAT;
    return v && ot.call(this), typeof c != "function" || (c(this), v && ut.call(this)), this;
  }, p.compatAPI = function(c) {
    var v = X === E.ADVANCED;
    return v && ut.call(this), typeof c != "function" || (c(this), v && ot.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return X === E.ADVANCED;
  };
  var tt, D = function(c) {
    if (X !== E.ADVANCED) throw new Error(c + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, gt = p.roundToPrecision = p.__private__.roundToPrecision = function(c, v) {
    var C = t || v;
    if (isNaN(c) || isNaN(C)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return c.toFixed(C).replace(/0+$/, "");
  };
  tt = p.hpf = p.__private__.hpf = typeof f == "number" ? function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(c, f);
  } : f === "smart" ? function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(c, c > -1 && c < 1 ? 16 : 5);
  } : function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(c, 16);
  };
  var dt = p.f2 = p.__private__.f2 = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f2");
    return gt(c, 2);
  }, F = p.__private__.f3 = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.f3");
    return gt(c, 3);
  }, P = p.scale = p.__private__.scale = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.scale");
    return X === E.COMPAT ? c * It : X === E.ADVANCED ? c : void 0;
  }, z = function(c) {
    return X === E.COMPAT ? vr() - c : X === E.ADVANCED ? c : void 0;
  }, q = function(c) {
    return P(z(c));
  };
  p.__private__.setPrecision = p.setPrecision = function(c) {
    typeof parseInt(c, 10) == "number" && (t = parseInt(c, 10));
  };
  var at, nt = "00000000000000000000000000000000", lt = p.__private__.getFileId = function() {
    return nt;
  }, Z = p.__private__.setFileId = function(c) {
    return nt = c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c) ? c.toUpperCase() : nt.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), b !== null && (Ge = new Si(b.userPermissions, b.userPassword, b.ownerPassword, nt)), nt;
  };
  p.setFileId = function(c) {
    return Z(c), this;
  }, p.getFileId = function() {
    return lt();
  };
  var ft = p.__private__.convertDateToPDFDate = function(c) {
    var v = c.getTimezoneOffset(), C = v < 0 ? "+" : "-", T = Math.floor(Math.abs(v / 60)), J = Math.abs(v % 60), st = [C, M(T), "'", M(J), "'"].join("");
    return ["D:", c.getFullYear(), M(c.getMonth() + 1), M(c.getDate()), M(c.getHours()), M(c.getMinutes()), M(c.getSeconds()), st].join("");
  }, ht = p.__private__.convertPDFDateToDate = function(c) {
    var v = parseInt(c.substr(2, 4), 10), C = parseInt(c.substr(6, 2), 10) - 1, T = parseInt(c.substr(8, 2), 10), J = parseInt(c.substr(10, 2), 10), st = parseInt(c.substr(12, 2), 10), yt = parseInt(c.substr(14, 2), 10);
    return new Date(v, C, T, J, st, yt, 0);
  }, kt = p.__private__.setCreationDate = function(c) {
    var v;
    if (c === void 0 && (c = /* @__PURE__ */ new Date()), c instanceof Date) v = ft(c);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(c)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      v = c;
    }
    return at = v;
  }, L = p.__private__.getCreationDate = function(c) {
    var v = at;
    return c === "jsDate" && (v = ht(at)), v;
  };
  p.setCreationDate = function(c) {
    return kt(c), this;
  }, p.getCreationDate = function(c) {
    return L(c);
  };
  var j, M = p.__private__.padd2 = function(c) {
    return ("0" + parseInt(c)).slice(-2);
  }, W = p.__private__.padd2Hex = function(c) {
    return ("00" + (c = c.toString())).substr(c.length);
  }, Y = 0, Q = [], et = [], rt = 0, At = [], xt = [], Ct = !1, Et = et, Ut = function() {
    Y = 0, rt = 0, et = [], Q = [], At = [], er = Oe(), Sn = Oe();
  };
  p.__private__.setCustomOutputDestination = function(c) {
    Ct = !0, Et = c;
  };
  var ct = function(c) {
    Ct || (Et = c);
  };
  p.__private__.resetCustomOutputDestination = function() {
    Ct = !1, Et = et;
  };
  var B = p.__private__.out = function(c) {
    return c = c.toString(), rt += c.length + 1, Et.push(c), Et;
  }, Xt = p.__private__.write = function(c) {
    return B(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, " "));
  }, Bt = p.__private__.getArrayBuffer = function(c) {
    for (var v = c.length, C = new ArrayBuffer(v), T = new Uint8Array(C); v--; ) T[v] = c.charCodeAt(v);
    return C;
  }, Lt = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return Lt;
  };
  var Nt = n.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(c) {
    return Nt = X === E.ADVANCED ? c / It : c, this;
  };
  var Ft, Pt = p.__private__.getFontSize = p.getFontSize = function() {
    return X === E.COMPAT ? Nt : Nt * It;
  }, Rt = n.R2L || !1;
  p.__private__.setR2L = p.setR2L = function(c) {
    return Rt = c, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return Rt;
  };
  var Gt, Zt = p.__private__.setZoomMode = function(c) {
    var v = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) Ft = c;
    else if (isNaN(c)) {
      if (v.indexOf(c) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + c + '" is not recognized.');
      Ft = c;
    } else Ft = parseInt(c, 10);
  };
  p.__private__.getZoomMode = function() {
    return Ft;
  };
  var te, ie = p.__private__.setPageMode = function(c) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(c) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + c + '" is not recognized.');
    Gt = c;
  };
  p.__private__.getPageMode = function() {
    return Gt;
  };
  var de = p.__private__.setLayoutMode = function(c) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(c) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + c + '" is not recognized.');
    te = c;
  };
  p.__private__.getLayoutMode = function() {
    return te;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(c, v, C) {
    return Zt(c), de(v), ie(C), this;
  };
  var Wt = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(c) {
    if (Object.keys(Wt).indexOf(c) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return Wt[c];
  }, p.__private__.getDocumentProperties = function() {
    return Wt;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(c) {
    for (var v in Wt) Wt.hasOwnProperty(v) && c[v] && (Wt[v] = c[v]);
    return this;
  }, p.__private__.setDocumentProperty = function(c, v) {
    if (Object.keys(Wt).indexOf(c) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return Wt[c] = v;
  };
  var ee, It, Ve, oe, xn, ge = {}, Le = {}, zn = [], ce = {}, Mr = {}, Ae = {}, An = {}, tr = null, Ne = 0, Yt = [], ue = new Lc(p), Br = n.hotfixes || [], He = {}, Un = {}, Hn = [], Tt = function c(v, C, T, J, st, yt) {
    if (!(this instanceof c)) return new c(v, C, T, J, st, yt);
    isNaN(v) && (v = 1), isNaN(C) && (C = 0), isNaN(T) && (T = 0), isNaN(J) && (J = 1), isNaN(st) && (st = 0), isNaN(yt) && (yt = 0), this._matrix = [v, C, T, J, st, yt];
  };
  Object.defineProperty(Tt.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(c) {
    this._matrix[0] = c;
  } }), Object.defineProperty(Tt.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(c) {
    this._matrix[1] = c;
  } }), Object.defineProperty(Tt.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(c) {
    this._matrix[2] = c;
  } }), Object.defineProperty(Tt.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(c) {
    this._matrix[3] = c;
  } }), Object.defineProperty(Tt.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(c) {
    this._matrix[4] = c;
  } }), Object.defineProperty(Tt.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(c) {
    this._matrix[5] = c;
  } }), Object.defineProperty(Tt.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(c) {
    this._matrix[0] = c;
  } }), Object.defineProperty(Tt.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(c) {
    this._matrix[1] = c;
  } }), Object.defineProperty(Tt.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(c) {
    this._matrix[2] = c;
  } }), Object.defineProperty(Tt.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(c) {
    this._matrix[3] = c;
  } }), Object.defineProperty(Tt.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(c) {
    this._matrix[4] = c;
  } }), Object.defineProperty(Tt.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(c) {
    this._matrix[5] = c;
  } }), Object.defineProperty(Tt.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Tt.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Tt.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Tt.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Tt.prototype.join = function(c) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(tt).join(c);
  }, Tt.prototype.multiply = function(c) {
    var v = c.sx * this.sx + c.shy * this.shx, C = c.sx * this.shy + c.shy * this.sy, T = c.shx * this.sx + c.sy * this.shx, J = c.shx * this.shy + c.sy * this.sy, st = c.tx * this.sx + c.ty * this.shx + this.tx, yt = c.tx * this.shy + c.ty * this.sy + this.ty;
    return new Tt(v, C, T, J, st, yt);
  }, Tt.prototype.decompose = function() {
    var c = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty, yt = Math.sqrt(c * c + v * v), jt = (c /= yt) * C + (v /= yt) * T;
    C -= c * jt, T -= v * jt;
    var qt = Math.sqrt(C * C + T * T);
    return jt /= qt, c * (T /= qt) < v * (C /= qt) && (c = -c, v = -v, jt = -jt, yt = -yt), { scale: new Tt(yt, 0, 0, qt, 0, 0), translate: new Tt(1, 0, 0, 1, J, st), rotate: new Tt(c, v, -v, c, 0, 0), skew: new Tt(1, 0, jt, 1, 0, 0) };
  }, Tt.prototype.toString = function(c) {
    return this.join(" ");
  }, Tt.prototype.inversed = function() {
    var c = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty, yt = 1 / (c * T - v * C), jt = T * yt, qt = -v * yt, Kt = -C * yt, Qt = c * yt;
    return new Tt(jt, qt, Kt, Qt, -jt * J - Kt * st, -qt * J - Qt * st);
  }, Tt.prototype.applyToPoint = function(c) {
    var v = c.x * this.sx + c.y * this.shx + this.tx, C = c.x * this.shy + c.y * this.sy + this.ty;
    return new ci(v, C);
  }, Tt.prototype.applyToRectangle = function(c) {
    var v = this.applyToPoint(c), C = this.applyToPoint(new ci(c.x + c.w, c.y + c.h));
    return new Ui(v.x, v.y, C.x - v.x, C.y - v.y);
  }, Tt.prototype.clone = function() {
    var c = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty;
    return new Tt(c, v, C, T, J, st);
  }, p.Matrix = Tt;
  var Nn = p.matrixMult = function(c, v) {
    return v.multiply(c);
  }, Wn = new Tt(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = Wn;
  var tn = function(c, v) {
    if (!Mr[c]) {
      var C = (v instanceof Gr ? "Sh" : "P") + (Object.keys(ce).length + 1).toString(10);
      v.id = C, Mr[c] = C, ce[C] = v, ue.publish("addPattern", v);
    }
  };
  p.ShadingPattern = Gr, p.TilingPattern = Pi, p.addShadingPattern = function(c, v) {
    return D("addShadingPattern()"), tn(c, v), this;
  }, p.beginTilingPattern = function(c) {
    D("beginTilingPattern()"), Ia(c.boundingBox[0], c.boundingBox[1], c.boundingBox[2] - c.boundingBox[0], c.boundingBox[3] - c.boundingBox[1], c.matrix);
  }, p.endTilingPattern = function(c, v) {
    D("endTilingPattern()"), v.stream = xt[j].join(`
`), tn(c, v), ue.publish("endTilingPattern", v), Hn.pop().restore();
  };
  var Re = p.__private__.newObject = function() {
    var c = Oe();
    return ln(c, !0), c;
  }, Oe = p.__private__.newObjectDeferred = function() {
    return Y++, Q[Y] = function() {
      return rt;
    }, Y;
  }, ln = function(c, v) {
    return v = typeof v == "boolean" && v, Q[c] = rt, v && B(c + " 0 obj"), c;
  }, Xr = p.__private__.newAdditionalObject = function() {
    var c = { objId: Oe(), content: "" };
    return At.push(c), c;
  }, er = Oe(), Sn = Oe(), _n = p.__private__.decodeColorString = function(c) {
    var v = c.split(" ");
    if (v.length !== 2 || v[1] !== "g" && v[1] !== "G")
      v.length === 5 && (v[4] === "k" || v[4] === "K") && (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), "r"]);
    else {
      var C = parseFloat(v[0]);
      v = [C, C, C, "r"];
    }
    for (var T = "#", J = 0; J < 3; J++) T += ("0" + Math.floor(255 * parseFloat(v[J])).toString(16)).slice(-2);
    return T;
  }, Pn = p.__private__.encodeColorString = function(c) {
    var v;
    typeof c == "string" && (c = { ch1: c });
    var C = c.ch1, T = c.ch2, J = c.ch3, st = c.ch4, yt = c.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof C == "string" && C.charAt(0) !== "#") {
      var jt = new Yc(C);
      if (jt.ok) C = jt.toHex();
      else if (!/^\d*\.?\d*$/.test(C)) throw new Error('Invalid color "' + C + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof C == "string" && /^#[0-9A-Fa-f]{3}$/.test(C) && (C = "#" + C[1] + C[1] + C[2] + C[2] + C[3] + C[3]), typeof C == "string" && /^#[0-9A-Fa-f]{6}$/.test(C)) {
      var qt = parseInt(C.substr(1), 16);
      C = qt >> 16 & 255, T = qt >> 8 & 255, J = 255 & qt;
    }
    if (T === void 0 || st === void 0 && C === T && T === J) if (typeof C == "string") v = C + " " + yt[0];
    else switch (c.precision) {
      case 2:
        v = dt(C / 255) + " " + yt[0];
        break;
      case 3:
      default:
        v = F(C / 255) + " " + yt[0];
    }
    else if (st === void 0 || fe(st) === "object") {
      if (st && !isNaN(st.a) && st.a === 0) return v = ["1.", "1.", "1.", yt[1]].join(" ");
      if (typeof C == "string") v = [C, T, J, yt[1]].join(" ");
      else switch (c.precision) {
        case 2:
          v = [dt(C / 255), dt(T / 255), dt(J / 255), yt[1]].join(" ");
          break;
        default:
        case 3:
          v = [F(C / 255), F(T / 255), F(J / 255), yt[1]].join(" ");
      }
    } else if (typeof C == "string") v = [C, T, J, st, yt[2]].join(" ");
    else switch (c.precision) {
      case 2:
        v = [dt(C), dt(T), dt(J), dt(st), yt[2]].join(" ");
        break;
      case 3:
      default:
        v = [F(C), F(T), F(J), F(st), yt[2]].join(" ");
    }
    return v;
  }, Vn = p.__private__.getFilters = function() {
    return u;
  }, mn = p.__private__.putStream = function(c) {
    var v = (c = c || {}).data || "", C = c.filters || Vn(), T = c.alreadyAppliedFilters || [], J = c.addLength1 || !1, st = v.length, yt = c.objectId, jt = function(Ye) {
      return Ye;
    };
    if (b !== null && yt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    b !== null && (jt = Ge.encryptor(yt, 0));
    var qt = {};
    C === !0 && (C = ["FlateEncode"]);
    var Kt = c.additionalKeyValues || [], Qt = (qt = zt.API.processDataByFilters !== void 0 ? zt.API.processDataByFilters(v, C) : { data: v, reverseChain: [] }).reverseChain + (Array.isArray(T) ? T.join(" ") : T.toString());
    if (qt.data.length !== 0 && (Kt.push({ key: "Length", value: qt.data.length }), J === !0 && Kt.push({ key: "Length1", value: st })), Qt.length != 0) if (Qt.split("/").length - 1 == 1) Kt.push({ key: "Filter", value: Qt });
    else {
      Kt.push({ key: "Filter", value: "[" + Qt + "]" });
      for (var re = 0; re < Kt.length; re += 1) if (Kt[re].key === "DecodeParms") {
        for (var xe = [], Se = 0; Se < qt.reverseChain.split("/").length - 1; Se += 1) xe.push("null");
        xe.push(Kt[re].value), Kt[re].value = "[" + xe.join(" ") + "]";
      }
    }
    B("<<");
    for (var Ee = 0; Ee < Kt.length; Ee++) B("/" + Kt[Ee].key + " " + Kt[Ee].value);
    B(">>"), qt.data.length !== 0 && (B("stream"), B(jt(qt.data)), B("endstream"));
  }, Gn = p.__private__.putPage = function(c) {
    var v = c.number, C = c.data, T = c.objId, J = c.contentsObjId;
    ln(T, !0), B("<</Type /Page"), B("/Parent " + c.rootDictionaryObjId + " 0 R"), B("/Resources " + c.resourceDictionaryObjId + " 0 R"), B("/MediaBox [" + parseFloat(tt(c.mediaBox.bottomLeftX)) + " " + parseFloat(tt(c.mediaBox.bottomLeftY)) + " " + tt(c.mediaBox.topRightX) + " " + tt(c.mediaBox.topRightY) + "]"), c.cropBox !== null && B("/CropBox [" + tt(c.cropBox.bottomLeftX) + " " + tt(c.cropBox.bottomLeftY) + " " + tt(c.cropBox.topRightX) + " " + tt(c.cropBox.topRightY) + "]"), c.bleedBox !== null && B("/BleedBox [" + tt(c.bleedBox.bottomLeftX) + " " + tt(c.bleedBox.bottomLeftY) + " " + tt(c.bleedBox.topRightX) + " " + tt(c.bleedBox.topRightY) + "]"), c.trimBox !== null && B("/TrimBox [" + tt(c.trimBox.bottomLeftX) + " " + tt(c.trimBox.bottomLeftY) + " " + tt(c.trimBox.topRightX) + " " + tt(c.trimBox.topRightY) + "]"), c.artBox !== null && B("/ArtBox [" + tt(c.artBox.bottomLeftX) + " " + tt(c.artBox.bottomLeftY) + " " + tt(c.artBox.topRightX) + " " + tt(c.artBox.topRightY) + "]"), typeof c.userUnit == "number" && c.userUnit !== 1 && B("/UserUnit " + c.userUnit), ue.publish("putPage", { objId: T, pageContext: Yt[v], pageNumber: v, page: C }), B("/Contents " + J + " 0 R"), B(">>"), B("endobj");
    var st = C.join(`
`);
    return X === E.ADVANCED && (st += `
Q`), ln(J, !0), mn({ data: st, filters: Vn(), objectId: J }), B("endobj"), T;
  }, Rr = p.__private__.putPages = function() {
    var c, v, C = [];
    for (c = 1; c <= Ne; c++) Yt[c].objId = Oe(), Yt[c].contentsObjId = Oe();
    for (c = 1; c <= Ne; c++) C.push(Gn({ number: c, data: xt[c], objId: Yt[c].objId, contentsObjId: Yt[c].contentsObjId, mediaBox: Yt[c].mediaBox, cropBox: Yt[c].cropBox, bleedBox: Yt[c].bleedBox, trimBox: Yt[c].trimBox, artBox: Yt[c].artBox, userUnit: Yt[c].userUnit, rootDictionaryObjId: er, resourceDictionaryObjId: Sn }));
    ln(er, !0), B("<</Type /Pages");
    var T = "/Kids [";
    for (v = 0; v < Ne; v++) T += C[v] + " 0 R ";
    B(T + "]"), B("/Count " + Ne), B(">>"), B("endobj"), ue.publish("postPutPages");
  }, Kr = function(c) {
    ue.publish("putFont", { font: c, out: B, newObject: Re, putStream: mn }), c.isAlreadyPutted !== !0 && (c.objectNumber = Re(), B("<<"), B("/Type /Font"), B("/BaseFont /" + _i(c.postScriptName)), B("/Subtype /Type1"), typeof c.encoding == "string" && B("/Encoding /" + c.encoding), B("/FirstChar 32"), B("/LastChar 255"), B(">>"), B("endobj"));
  }, $r = function() {
    for (var c in ge) ge.hasOwnProperty(c) && (x === !1 || x === !0 && S.hasOwnProperty(c)) && Kr(ge[c]);
  }, Zr = function(c) {
    c.objectNumber = Re();
    var v = [];
    v.push({ key: "Type", value: "/XObject" }), v.push({ key: "Subtype", value: "/Form" }), v.push({ key: "BBox", value: "[" + [tt(c.x), tt(c.y), tt(c.x + c.width), tt(c.y + c.height)].join(" ") + "]" }), v.push({ key: "Matrix", value: "[" + c.matrix.toString() + "]" });
    var C = c.pages[1].join(`
`);
    mn({ data: C, additionalKeyValues: v, objectId: c.objectNumber }), B("endobj");
  }, Qr = function() {
    for (var c in He) He.hasOwnProperty(c) && Zr(He[c]);
  }, fa = function(c, v) {
    var C, T = [], J = 1 / (v - 1);
    for (C = 0; C < 1; C += J) T.push(C);
    if (T.push(1), c[0].offset != 0) {
      var st = { offset: 0, color: c[0].color };
      c.unshift(st);
    }
    if (c[c.length - 1].offset != 1) {
      var yt = { offset: 1, color: c[c.length - 1].color };
      c.push(yt);
    }
    for (var jt = "", qt = 0, Kt = 0; Kt < T.length; Kt++) {
      for (C = T[Kt]; C > c[qt + 1].offset; ) qt++;
      var Qt = c[qt].offset, re = (C - Qt) / (c[qt + 1].offset - Qt), xe = c[qt].color, Se = c[qt + 1].color;
      jt += W(Math.round((1 - re) * xe[0] + re * Se[0]).toString(16)) + W(Math.round((1 - re) * xe[1] + re * Se[1]).toString(16)) + W(Math.round((1 - re) * xe[2] + re * Se[2]).toString(16));
    }
    return jt.trim();
  }, vo = function(c, v) {
    v || (v = 21);
    var C = Re(), T = fa(c.colors, v), J = [];
    J.push({ key: "FunctionType", value: "0" }), J.push({ key: "Domain", value: "[0.0 1.0]" }), J.push({ key: "Size", value: "[" + v + "]" }), J.push({ key: "BitsPerSample", value: "8" }), J.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), J.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), mn({ data: T, additionalKeyValues: J, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: C }), B("endobj"), c.objectNumber = Re(), B("<< /ShadingType " + c.type), B("/ColorSpace /DeviceRGB");
    var st = "/Coords [" + tt(parseFloat(c.coords[0])) + " " + tt(parseFloat(c.coords[1])) + " ";
    c.type === 2 ? st += tt(parseFloat(c.coords[2])) + " " + tt(parseFloat(c.coords[3])) : st += tt(parseFloat(c.coords[2])) + " " + tt(parseFloat(c.coords[3])) + " " + tt(parseFloat(c.coords[4])) + " " + tt(parseFloat(c.coords[5])), B(st += "]"), c.matrix && B("/Matrix [" + c.matrix.toString() + "]"), B("/Function " + C + " 0 R"), B("/Extend [true true]"), B(">>"), B("endobj");
  }, bo = function(c, v) {
    var C = Oe(), T = Re();
    v.push({ resourcesOid: C, objectOid: T }), c.objectNumber = T;
    var J = [];
    J.push({ key: "Type", value: "/Pattern" }), J.push({ key: "PatternType", value: "1" }), J.push({ key: "PaintType", value: "1" }), J.push({ key: "TilingType", value: "1" }), J.push({ key: "BBox", value: "[" + c.boundingBox.map(tt).join(" ") + "]" }), J.push({ key: "XStep", value: tt(c.xStep) }), J.push({ key: "YStep", value: tt(c.yStep) }), J.push({ key: "Resources", value: C + " 0 R" }), c.matrix && J.push({ key: "Matrix", value: "[" + c.matrix.toString() + "]" }), mn({ data: c.stream, additionalKeyValues: J, objectId: c.objectNumber }), B("endobj");
  }, ti = function(c) {
    var v;
    for (v in ce) ce.hasOwnProperty(v) && (ce[v] instanceof Gr ? vo(ce[v]) : ce[v] instanceof Pi && bo(ce[v], c));
  }, da = function(c) {
    for (var v in c.objectNumber = Re(), B("<<"), c) switch (v) {
      case "opacity":
        B("/ca " + dt(c[v]));
        break;
      case "stroke-opacity":
        B("/CA " + dt(c[v]));
    }
    B(">>"), B("endobj");
  }, wo = function() {
    var c;
    for (c in Ae) Ae.hasOwnProperty(c) && da(Ae[c]);
  }, ji = function() {
    for (var c in B("/XObject <<"), He) He.hasOwnProperty(c) && He[c].objectNumber >= 0 && B("/" + c + " " + He[c].objectNumber + " 0 R");
    ue.publish("putXobjectDict"), B(">>");
  }, yo = function() {
    Ge.oid = Re(), B("<<"), B("/Filter /Standard"), B("/V " + Ge.v), B("/R " + Ge.r), B("/U <" + Ge.toHexString(Ge.U) + ">"), B("/O <" + Ge.toHexString(Ge.O) + ">"), B("/P " + Ge.P), B(">>"), B("endobj");
  }, pa = function() {
    for (var c in B("/Font <<"), ge) ge.hasOwnProperty(c) && (x === !1 || x === !0 && S.hasOwnProperty(c)) && B("/" + c + " " + ge[c].objectNumber + " 0 R");
    B(">>");
  }, Lo = function() {
    if (Object.keys(ce).length > 0) {
      for (var c in B("/Shading <<"), ce) ce.hasOwnProperty(c) && ce[c] instanceof Gr && ce[c].objectNumber >= 0 && B("/" + c + " " + ce[c].objectNumber + " 0 R");
      ue.publish("putShadingPatternDict"), B(">>");
    }
  }, ei = function(c) {
    if (Object.keys(ce).length > 0) {
      for (var v in B("/Pattern <<"), ce) ce.hasOwnProperty(v) && ce[v] instanceof p.TilingPattern && ce[v].objectNumber >= 0 && ce[v].objectNumber < c && B("/" + v + " " + ce[v].objectNumber + " 0 R");
      ue.publish("putTilingPatternDict"), B(">>");
    }
  }, xo = function() {
    if (Object.keys(Ae).length > 0) {
      var c;
      for (c in B("/ExtGState <<"), Ae) Ae.hasOwnProperty(c) && Ae[c].objectNumber >= 0 && B("/" + c + " " + Ae[c].objectNumber + " 0 R");
      ue.publish("putGStateDict"), B(">>");
    }
  }, ke = function(c) {
    ln(c.resourcesOid, !0), B("<<"), B("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), pa(), Lo(), ei(c.objectOid), xo(), ji(), B(">>"), B("endobj");
  }, ga = function() {
    var c = [];
    $r(), wo(), Qr(), ti(c), ue.publish("putResources"), c.forEach(ke), ke({ resourcesOid: Sn, objectOid: Number.MAX_SAFE_INTEGER }), ue.publish("postPutResources");
  }, ma = function() {
    ue.publish("putAdditionalObjects");
    for (var c = 0; c < At.length; c++) {
      var v = At[c];
      ln(v.objId, !0), B(v.content), B("endobj");
    }
    ue.publish("postPutAdditionalObjects");
  }, va = function(c) {
    Le[c.fontName] = Le[c.fontName] || {}, Le[c.fontName][c.fontStyle] = c.id;
  }, Oi = function(c, v, C, T, J) {
    var st = { id: "F" + (Object.keys(ge).length + 1).toString(10), postScriptName: c, fontName: v, fontStyle: C, encoding: T, isStandardFont: J || !1, metadata: {} };
    return ue.publish("addFont", { font: st, instance: this }), ge[st.id] = st, va(st), st.id;
  }, Ao = function(c) {
    for (var v = 0, C = Lt.length; v < C; v++) {
      var T = Oi.call(this, c[v][0], c[v][1], c[v][2], Lt[v][3], !0);
      x === !1 && (S[T] = !0);
      var J = c[v][0].split("-");
      va({ id: T, fontName: J[0], fontStyle: J[1] || "" });
    }
    ue.publish("addFonts", { fonts: ge, dictionary: Le });
  }, kn = function(c) {
    return c.foo = function() {
      try {
        return c.apply(this, arguments);
      } catch (T) {
        var v = T.stack || "";
        ~v.indexOf(" at ") && (v = v.split(" at ")[1]);
        var C = "Error in function " + v.split(`
`)[0].split("<")[0] + ": " + T.message;
        if (!Ht.console) throw new Error(C);
        Ht.console.error(C, T), Ht.alert && alert(C);
      }
    }, c.foo.bar = c, c.foo;
  }, ni = function(c, v) {
    var C, T, J, st, yt, jt, qt, Kt, Qt;
    if (J = (v = v || {}).sourceEncoding || "Unicode", yt = v.outputEncoding, (v.autoencode || yt) && ge[ee].metadata && ge[ee].metadata[J] && ge[ee].metadata[J].encoding && (st = ge[ee].metadata[J].encoding, !yt && ge[ee].encoding && (yt = ge[ee].encoding), !yt && st.codePages && (yt = st.codePages[0]), typeof yt == "string" && (yt = st[yt]), yt)) {
      for (qt = !1, jt = [], C = 0, T = c.length; C < T; C++) (Kt = yt[c.charCodeAt(C)]) ? jt.push(String.fromCharCode(Kt)) : jt.push(c[C]), jt[C].charCodeAt(0) >> 8 && (qt = !0);
      c = jt.join("");
    }
    for (C = c.length; qt === void 0 && C !== 0; ) c.charCodeAt(C - 1) >> 8 && (qt = !0), C--;
    if (!qt) return c;
    for (jt = v.noBOM ? [] : [254, 255], C = 0, T = c.length; C < T; C++) {
      if ((Qt = (Kt = c.charCodeAt(C)) >> 8) >> 8) throw new Error("Character at position " + C + " of string '" + c + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      jt.push(Qt), jt.push(Kt - (Qt << 8));
    }
    return String.fromCharCode.apply(void 0, jt);
  }, en = p.__private__.pdfEscape = p.pdfEscape = function(c, v) {
    return ni(c, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Ei = p.__private__.beginPage = function(c) {
    xt[++Ne] = [], Yt[Ne] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(c[0]), topRightY: Number(c[1]) } }, wa(Ne), ct(xt[j]);
  }, ba = function(c, v) {
    var C, T, J;
    switch (r = v || r, typeof c == "string" && (C = _(c.toLowerCase()), Array.isArray(C) && (T = C[0], J = C[1])), Array.isArray(c) && (T = c[0] * It, J = c[1] * It), isNaN(T) && (T = s[0], J = s[1]), (T > 14400 || J > 14400) && (ve.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), T = Math.min(14400, T), J = Math.min(14400, J)), s = [T, J], r.substr(0, 1)) {
      case "l":
        J > T && (s = [J, T]);
        break;
      case "p":
        T > J && (s = [J, T]);
    }
    Ei(s), Sa(qi), B(Fn), Ti !== 0 && B(Ti + " J"), zi !== 0 && B(zi + " j"), ue.publish("addPage", { pageNumber: Ne });
  }, No = function(c) {
    c > 0 && c <= Ne && (xt.splice(c, 1), Yt.splice(c, 1), Ne--, j > Ne && (j = Ne), this.setPage(j));
  }, wa = function(c) {
    c > 0 && c <= Ne && (j = c);
  }, So = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return xt.length - 1;
  }, ya = function(c, v, C) {
    var T, J = void 0;
    return C = C || {}, c = c !== void 0 ? c : ge[ee].fontName, v = v !== void 0 ? v : ge[ee].fontStyle, T = c.toLowerCase(), Le[T] !== void 0 && Le[T][v] !== void 0 ? J = Le[T][v] : Le[c] !== void 0 && Le[c][v] !== void 0 ? J = Le[c][v] : C.disableWarning === !1 && ve.warn("Unable to look up font label for font '" + c + "', '" + v + "'. Refer to getFontList() for available fonts."), J || C.noFallback || (J = Le.times[v]) == null && (J = Le.times.normal), J;
  }, _o = p.__private__.putInfo = function() {
    var c = Re(), v = function(T) {
      return T;
    };
    for (var C in b !== null && (v = Ge.encryptor(c, 0)), B("<<"), B("/Producer (" + en(v("jsPDF " + zt.version)) + ")"), Wt) Wt.hasOwnProperty(C) && Wt[C] && B("/" + C.substr(0, 1).toUpperCase() + C.substr(1) + " (" + en(v(Wt[C])) + ")");
    B("/CreationDate (" + en(v(at)) + ")"), B(">>"), B("endobj");
  }, Mi = p.__private__.putCatalog = function(c) {
    var v = (c = c || {}).rootDictionaryObjId || er;
    switch (Re(), B("<<"), B("/Type /Catalog"), B("/Pages " + v + " 0 R"), Ft || (Ft = "fullwidth"), Ft) {
      case "fullwidth":
        B("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        B("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        B("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        B("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var C = "" + Ft;
        C.substr(C.length - 1) === "%" && (Ft = parseInt(Ft) / 100), typeof Ft == "number" && B("/OpenAction [3 0 R /XYZ null null " + dt(Ft) + "]");
    }
    switch (te || (te = "continuous"), te) {
      case "continuous":
        B("/PageLayout /OneColumn");
        break;
      case "single":
        B("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        B("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        B("/PageLayout /TwoColumnRight");
    }
    Gt && B("/PageMode /" + Gt), ue.publish("putCatalog"), B(">>"), B("endobj");
  }, Po = p.__private__.putTrailer = function() {
    B("trailer"), B("<<"), B("/Size " + (Y + 1)), B("/Root " + Y + " 0 R"), B("/Info " + (Y - 1) + " 0 R"), b !== null && B("/Encrypt " + Ge.oid + " 0 R"), B("/ID [ <" + nt + "> <" + nt + "> ]"), B(">>");
  }, ko = p.__private__.putHeader = function() {
    B("%PDF-" + O), B("%ºß¬à");
  }, Fo = p.__private__.putXRef = function() {
    var c = "0000000000";
    B("xref"), B("0 " + (Y + 1)), B("0000000000 65535 f ");
    for (var v = 1; v <= Y; v++)
      typeof Q[v] == "function" ? B((c + Q[v]()).slice(-10) + " 00000 n ") : Q[v] !== void 0 ? B((c + Q[v]).slice(-10) + " 00000 n ") : B("0000000000 00000 n ");
  }, nr = p.__private__.buildDocument = function() {
    Ut(), ct(et), ue.publish("buildDocument"), ko(), Rr(), ma(), ga(), b !== null && yo(), _o(), Mi();
    var c = rt;
    return Fo(), Po(), B("startxref"), B("" + c), B("%%EOF"), ct(xt[j]), et.join(`
`);
  }, ri = p.__private__.getBlob = function(c) {
    return new Blob([Bt(c)], { type: "application/pdf" });
  }, ii = p.output = p.__private__.output = kn(function(c, v) {
    switch (typeof (v = v || {}) == "string" ? v = { filename: v } : v.filename = v.filename || "generated.pdf", c) {
      case void 0:
        return nr();
      case "save":
        p.save(v.filename);
        break;
      case "arraybuffer":
        return Bt(nr());
      case "blob":
        return ri(nr());
      case "bloburi":
      case "bloburl":
        if (Ht.URL !== void 0 && typeof Ht.URL.createObjectURL == "function") return Ht.URL && Ht.URL.createObjectURL(ri(nr())) || void 0;
        ve.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var C = "", T = nr();
        try {
          C = As(T);
        } catch {
          C = As(unescape(encodeURIComponent(T)));
        }
        return "data:application/pdf;filename=" + v.filename + ";base64," + C;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Ht) === "[object Window]") {
          var J = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", st = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          v.pdfObjectUrl && (J = v.pdfObjectUrl, st = "");
          var yt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + J + '"' + st + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(v) + ");<\/script></body></html>", jt = Ht.open();
          return jt !== null && jt.document.write(yt), jt;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Ht) === "[object Window]") {
          var qt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (v.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + v.filename + '" width="500px" height="400px" /></body></html>', Kt = Ht.open();
          if (Kt !== null) {
            Kt.document.write(qt);
            var Qt = this;
            Kt.document.documentElement.querySelector("#pdfViewer").onload = function() {
              Kt.document.title = v.filename, Kt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(Qt.output("bloburl"));
            };
          }
          return Kt;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Ht) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var re = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", v) + '"></iframe></body></html>', xe = Ht.open();
        if (xe !== null && (xe.document.write(re), xe.document.title = v.filename), xe || typeof safari > "u") return xe;
        break;
      case "datauri":
      case "dataurl":
        return Ht.document.location.href = this.output("datauristring", v);
      default:
        return null;
    }
  }), La = function(c) {
    return Array.isArray(Br) === !0 && Br.indexOf(c) > -1;
  };
  switch (i) {
    case "pt":
      It = 1;
      break;
    case "mm":
      It = 72 / 25.4;
      break;
    case "cm":
      It = 72 / 2.54;
      break;
    case "in":
      It = 72;
      break;
    case "px":
      It = La("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      It = 12;
      break;
    case "ex":
      It = 6;
      break;
    default:
      if (typeof i != "number") throw new Error("Invalid unit: " + i);
      It = i;
  }
  var Ge = null;
  kt(), Z();
  var Io = function(c) {
    return b !== null ? Ge.encryptor(c, 0) : function(v) {
      return v;
    };
  }, xa = p.__private__.getPageInfo = p.getPageInfo = function(c) {
    if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Yt[c].objId, pageNumber: c, pageContext: Yt[c] };
  }, Vt = p.__private__.getPageInfoByObjId = function(c) {
    if (isNaN(c) || c % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var v in Yt) if (Yt[v].objId === c) break;
    return xa(v);
  }, Co = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: Yt[j].objId, pageNumber: j, pageContext: Yt[j] };
  };
  p.addPage = function() {
    return ba.apply(this, arguments), this;
  }, p.setPage = function() {
    return wa.apply(this, arguments), ct.call(this, xt[j]), this;
  }, p.insertPage = function(c) {
    return this.addPage(), this.movePage(j, c), this;
  }, p.movePage = function(c, v) {
    var C, T;
    if (c > v) {
      C = xt[c], T = Yt[c];
      for (var J = c; J > v; J--) xt[J] = xt[J - 1], Yt[J] = Yt[J - 1];
      xt[v] = C, Yt[v] = T, this.setPage(v);
    } else if (c < v) {
      C = xt[c], T = Yt[c];
      for (var st = c; st < v; st++) xt[st] = xt[st + 1], Yt[st] = Yt[st + 1];
      xt[v] = C, Yt[v] = T, this.setPage(v);
    }
    return this;
  }, p.deletePage = function() {
    return No.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(c, v, C, T, J) {
    var st, yt, jt, qt, Kt, Qt, re, xe, Se, Ee = (T = T || {}).scope || this;
    if (typeof c == "number" && typeof v == "number" && (typeof C == "string" || Array.isArray(C))) {
      var Ye = C;
      C = v, v = c, c = Ye;
    }
    if (arguments[3] instanceof Tt ? (D("The transform parameter of text() with a Matrix value"), Se = J) : (jt = arguments[4], qt = arguments[5], fe(re = arguments[3]) === "object" && re !== null || (typeof jt == "string" && (qt = jt, jt = null), typeof re == "string" && (qt = re, re = null), typeof re == "number" && (jt = re, re = null), T = { flags: re, angle: jt, align: qt })), isNaN(v) || isNaN(C) || c == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (c.length === 0) return Ee;
    var De = "", In = !1, hn = typeof T.lineHeightFactor == "number" ? T.lineHeightFactor : Dr, ir = Ee.internal.scaleFactor;
    function Ca(be) {
      return be = be.split("	").join(Array(T.TabLen || 9).join(" ")), en(be, re);
    }
    function Gi(be) {
      for (var we, Fe = be.concat(), qe = [], cr = Fe.length; cr--; ) typeof (we = Fe.shift()) == "string" ? qe.push(we) : Array.isArray(be) && (we.length === 1 || we[1] === void 0 && we[2] === void 0) ? qe.push(we[0]) : qe.push([we[0], we[1], we[2]]);
      return qe;
    }
    function Yi(be, we) {
      var Fe;
      if (typeof be == "string") Fe = we(be)[0];
      else if (Array.isArray(be)) {
        for (var qe, cr, xr = be.concat(), bi = [], Oa = xr.length; Oa--; ) typeof (qe = xr.shift()) == "string" ? bi.push(we(qe)[0]) : Array.isArray(qe) && typeof qe[0] == "string" && (cr = we(qe[0], qe[1], qe[2]), bi.push([cr[0], cr[1], cr[2]]));
        Fe = bi;
      }
      return Fe;
    }
    var li = !1, Ji = !0;
    if (typeof c == "string") li = !0;
    else if (Array.isArray(c)) {
      var Xi = c.concat();
      yt = [];
      for (var hi, nn = Xi.length; nn--; ) (typeof (hi = Xi.shift()) != "string" || Array.isArray(hi) && typeof hi[0] != "string") && (Ji = !1);
      li = Ji;
    }
    if (li === !1) throw new Error('Type of text must be string or Array. "' + c + '" is not recognized.');
    typeof c == "string" && (c = c.match(/[\r?\n]/) ? c.split(/\r\n|\r|\n/g) : [c]);
    var fi = Nt / Ee.internal.scaleFactor, di = fi * (hn - 1);
    switch (T.baseline) {
      case "bottom":
        C -= di;
        break;
      case "top":
        C += fi - di;
        break;
      case "hanging":
        C += fi - 2 * di;
        break;
      case "middle":
        C += fi / 2 - di;
    }
    if ((Qt = T.maxWidth || 0) > 0 && (typeof c == "string" ? c = Ee.splitTextToSize(c, Qt) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(be, we) {
      return be.concat(Ee.splitTextToSize(we, Qt));
    }, []))), st = { text: c, x: v, y: C, options: T, mutex: { pdfEscape: en, activeFontKey: ee, fonts: ge, activeFontSize: Nt } }, ue.publish("preProcessText", st), c = st.text, jt = (T = st.options).angle, !(Se instanceof Tt) && jt && typeof jt == "number") {
      jt *= Math.PI / 180, T.rotationDirection === 0 && (jt = -jt), X === E.ADVANCED && (jt = -jt);
      var pi = Math.cos(jt), Ki = Math.sin(jt);
      Se = new Tt(pi, Ki, -Ki, pi, 0, 0);
    } else jt && jt instanceof Tt && (Se = jt);
    X !== E.ADVANCED || Se || (Se = Wn), (Kt = T.charSpace || si) !== void 0 && (De += tt(P(Kt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (xe = T.horizontalScale) !== void 0 && (De += tt(100 * xe) + ` Tz
`), T.lang;
    var rn = -1, zo = T.renderingMode !== void 0 ? T.renderingMode : T.stroke, $i = Ee.internal.getCurrentPageInfo().pageContext;
    switch (zo) {
      case 0:
      case !1:
      case "fill":
        rn = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        rn = 1;
        break;
      case 2:
      case "fillThenStroke":
        rn = 2;
        break;
      case 3:
      case "invisible":
        rn = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        rn = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        rn = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        rn = 6;
        break;
      case 7:
      case "addToPathForClipping":
        rn = 7;
    }
    var ja = $i.usedRenderingMode !== void 0 ? $i.usedRenderingMode : -1;
    rn !== -1 ? De += rn + ` Tr
` : ja !== -1 && (De += `0 Tr
`), rn !== -1 && ($i.usedRenderingMode = rn), qt = T.align || "left";
    var Cn, Zi = Nt * hn, Uo = Ee.internal.pageSize.getWidth(), Ho = ge[ee];
    Kt = T.charSpace || si, Qt = T.maxWidth || 0, re = Object.assign({ autoencode: !0, noBOM: !0 }, T.flags);
    var br = [];
    if (Object.prototype.toString.call(c) === "[object Array]") {
      var vn;
      yt = Gi(c), qt !== "left" && (Cn = yt.map(function(be) {
        return Ee.getStringUnitWidth(be, { font: Ho, charSpace: Kt, fontSize: Nt, doKerning: !1 }) * Nt / ir;
      }));
      var jn, wr = 0;
      if (qt === "right") {
        v -= Cn[0], c = [], nn = yt.length;
        for (var Jn = 0; Jn < nn; Jn++) Jn === 0 ? (jn = rr(v), vn = gr(C)) : (jn = P(wr - Cn[Jn]), vn = -Zi), c.push([yt[Jn], jn, vn]), wr = Cn[Jn];
      } else if (qt === "center") {
        v -= Cn[0] / 2, c = [], nn = yt.length;
        for (var ar = 0; ar < nn; ar++) ar === 0 ? (jn = rr(v), vn = gr(C)) : (jn = P((wr - Cn[ar]) / 2), vn = -Zi), c.push([yt[ar], jn, vn]), wr = Cn[ar];
      } else if (qt === "left") {
        c = [], nn = yt.length;
        for (var gi = 0; gi < nn; gi++) c.push(yt[gi]);
      } else {
        if (qt !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        c = [], nn = yt.length, Qt = Qt !== 0 ? Qt : Uo;
        for (var On = 0; On < nn; On++) vn = On === 0 ? gr(C) : -Zi, jn = On === 0 ? rr(v) : 0, On < nn - 1 ? br.push(tt(P((Qt - Cn[On]) / (yt[On].split(" ").length - 1)))) : br.push(0), c.push([yt[On], jn, vn]);
      }
    }
    var mi = typeof T.R2L == "boolean" ? T.R2L : Rt;
    mi === !0 && (c = Yi(c, function(be, we, Fe) {
      return [be.split("").reverse().join(""), we, Fe];
    })), st = { text: c, x: v, y: C, options: T, mutex: { pdfEscape: en, activeFontKey: ee, fonts: ge, activeFontSize: Nt } }, ue.publish("postProcessText", st), c = st.text, In = st.mutex.isHex || !1;
    var Qi = ge[ee].encoding;
    Qi !== "WinAnsiEncoding" && Qi !== "StandardEncoding" || (c = Yi(c, function(be, we, Fe) {
      return [Ca(be), we, Fe];
    })), yt = Gi(c), c = [];
    for (var yr, En, or, Ur = 0, vi = 1, Hr = Array.isArray(yt[0]) ? vi : Ur, Lr = "", ta = function(be, we, Fe) {
      var qe = "";
      return Fe instanceof Tt ? (Fe = typeof T.angle == "number" ? Nn(Fe, new Tt(1, 0, 0, 1, be, we)) : Nn(new Tt(1, 0, 0, 1, be, we), Fe), X === E.ADVANCED && (Fe = Nn(new Tt(1, 0, 0, -1, 0, 0), Fe)), qe = Fe.join(" ") + ` Tm
`) : qe = tt(be) + " " + tt(we) + ` Td
`, qe;
    }, bn = 0; bn < yt.length; bn++) {
      switch (Lr = "", Hr) {
        case vi:
          or = (In ? "<" : "(") + yt[bn][0] + (In ? ">" : ")"), yr = parseFloat(yt[bn][1]), En = parseFloat(yt[bn][2]);
          break;
        case Ur:
          or = (In ? "<" : "(") + yt[bn] + (In ? ">" : ")"), yr = rr(v), En = gr(C);
      }
      br !== void 0 && br[bn] !== void 0 && (Lr = br[bn] + ` Tw
`), bn === 0 ? c.push(Lr + ta(yr, En, Se) + or) : Hr === Ur ? c.push(Lr + or) : Hr === vi && c.push(Lr + ta(yr, En, Se) + or);
    }
    c = Hr === Ur ? c.join(` Tj
T* `) : c.join(` Tj
`), c += ` Tj
`;
    var sr = `BT
/`;
    return sr += ee + " " + Nt + ` Tf
`, sr += tt(Nt * hn) + ` TL
`, sr += Tr + `
`, sr += De, sr += c, B(sr += "ET"), S[ee] = !0, Ee;
  };
  var jo = p.__private__.clip = p.clip = function(c) {
    return B(c === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return jo("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return B("n"), this;
  };
  var Yn = p.__private__.isValidStyle = function(c) {
    var v = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(c) !== -1 && (v = !0), v;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(c) {
    return Yn(c) && (g = c), this;
  };
  var Aa = p.__private__.getStyle = p.getStyle = function(c) {
    var v = g;
    switch (c) {
      case "D":
      case "S":
        v = "S";
        break;
      case "F":
        v = "f";
        break;
      case "FD":
      case "DF":
        v = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        v = c;
    }
    return v;
  }, Na = p.close = function() {
    return B("h"), this;
  };
  p.stroke = function() {
    return B("S"), this;
  }, p.fill = function(c) {
    return ai("f", c), this;
  }, p.fillEvenOdd = function(c) {
    return ai("f*", c), this;
  }, p.fillStroke = function(c) {
    return ai("B", c), this;
  }, p.fillStrokeEvenOdd = function(c) {
    return ai("B*", c), this;
  };
  var ai = function(c, v) {
    fe(v) === "object" ? Eo(v, c) : B(c);
  }, Bi = function(c) {
    c === null || X === E.ADVANCED && c === void 0 || (c = Aa(c), B(c));
  };
  function Oo(c, v, C, T, J) {
    var st = new Pi(v || this.boundingBox, C || this.xStep, T || this.yStep, this.gState, J || this.matrix);
    st.stream = this.stream;
    var yt = c + "$$" + this.cloneIndex++ + "$$";
    return tn(yt, st), st;
  }
  var Eo = function(c, v) {
    var C = Mr[c.key], T = ce[C];
    if (T instanceof Gr) B("q"), B(Mo(v)), T.gState && p.setGState(T.gState), B(c.matrix.toString() + " cm"), B("/" + C + " sh"), B("Q");
    else if (T instanceof Pi) {
      var J = new Tt(1, 0, 0, -1, 0, vr());
      c.matrix && (J = J.multiply(c.matrix || Wn), C = Oo.call(T, c.key, c.boundingBox, c.xStep, c.yStep, J).id), B("q"), B("/Pattern cs"), B("/" + C + " scn"), T.gState && p.setGState(T.gState), B(v), B("Q");
    }
  }, Mo = function(c) {
    switch (c) {
      case "f":
      case "F":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
        return "W S";
      case "B*":
        return "W* S";
      case "S":
        return "W S";
      case "n":
        return "W n";
    }
  }, Ri = p.moveTo = function(c, v) {
    return B(tt(P(c)) + " " + tt(q(v)) + " m"), this;
  }, qr = p.lineTo = function(c, v) {
    return B(tt(P(c)) + " " + tt(q(v)) + " l"), this;
  }, pr = p.curveTo = function(c, v, C, T, J, st) {
    return B([tt(P(c)), tt(q(v)), tt(P(C)), tt(q(T)), tt(P(J)), tt(q(st)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(c, v, C, T, J) {
    if (isNaN(c) || isNaN(v) || isNaN(C) || isNaN(T) || !Yn(J)) throw new Error("Invalid arguments passed to jsPDF.line");
    return X === E.COMPAT ? this.lines([[C - c, T - v]], c, v, [1, 1], J || "S") : this.lines([[C - c, T - v]], c, v, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(c, v, C, T, J, st) {
    var yt, jt, qt, Kt, Qt, re, xe, Se, Ee, Ye, De, In;
    if (typeof c == "number" && (In = C, C = v, v = c, c = In), T = T || [1, 1], st = st || !1, isNaN(v) || isNaN(C) || !Array.isArray(c) || !Array.isArray(T) || !Yn(J) || typeof st != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (Ri(v, C), yt = T[0], jt = T[1], Kt = c.length, Ye = v, De = C, qt = 0; qt < Kt; qt++) (Qt = c[qt]).length === 2 ? (Ye = Qt[0] * yt + Ye, De = Qt[1] * jt + De, qr(Ye, De)) : (re = Qt[0] * yt + Ye, xe = Qt[1] * jt + De, Se = Qt[2] * yt + Ye, Ee = Qt[3] * jt + De, Ye = Qt[4] * yt + Ye, De = Qt[5] * jt + De, pr(re, xe, Se, Ee, Ye, De));
    return st && Na(), Bi(J), this;
  }, p.path = function(c) {
    for (var v = 0; v < c.length; v++) {
      var C = c[v], T = C.c;
      switch (C.op) {
        case "m":
          Ri(T[0], T[1]);
          break;
        case "l":
          qr(T[0], T[1]);
          break;
        case "c":
          pr.apply(this, T);
          break;
        case "h":
          Na();
      }
    }
    return this;
  }, p.__private__.rect = p.rect = function(c, v, C, T, J) {
    if (isNaN(c) || isNaN(v) || isNaN(C) || isNaN(T) || !Yn(J)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return X === E.COMPAT && (T = -T), B([tt(P(c)), tt(q(v)), tt(P(C)), tt(P(T)), "re"].join(" ")), Bi(J), this;
  }, p.__private__.triangle = p.triangle = function(c, v, C, T, J, st, yt) {
    if (isNaN(c) || isNaN(v) || isNaN(C) || isNaN(T) || isNaN(J) || isNaN(st) || !Yn(yt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[C - c, T - v], [J - C, st - T], [c - J, v - st]], c, v, [1, 1], yt, !0), this;
  }, p.__private__.roundedRect = p.roundedRect = function(c, v, C, T, J, st, yt) {
    if (isNaN(c) || isNaN(v) || isNaN(C) || isNaN(T) || isNaN(J) || isNaN(st) || !Yn(yt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var jt = 4 / 3 * (Math.SQRT2 - 1);
    return J = Math.min(J, 0.5 * C), st = Math.min(st, 0.5 * T), this.lines([[C - 2 * J, 0], [J * jt, 0, J, st - st * jt, J, st], [0, T - 2 * st], [0, st * jt, -J * jt, st, -J, st], [2 * J - C, 0], [-J * jt, 0, -J, -st * jt, -J, -st], [0, 2 * st - T], [0, -st * jt, J * jt, -st, J, -st]], c + J, v, [1, 1], yt, !0), this;
  }, p.__private__.ellipse = p.ellipse = function(c, v, C, T, J) {
    if (isNaN(c) || isNaN(v) || isNaN(C) || isNaN(T) || !Yn(J)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var st = 4 / 3 * (Math.SQRT2 - 1) * C, yt = 4 / 3 * (Math.SQRT2 - 1) * T;
    return Ri(c + C, v), pr(c + C, v - yt, c + st, v - T, c, v - T), pr(c - st, v - T, c - C, v - yt, c - C, v), pr(c - C, v + yt, c - st, v + T, c, v + T), pr(c + st, v + T, c + C, v + yt, c + C, v), Bi(J), this;
  }, p.__private__.circle = p.circle = function(c, v, C, T) {
    if (isNaN(c) || isNaN(v) || isNaN(C) || !Yn(T)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(c, v, C, C, T);
  }, p.setFont = function(c, v, C) {
    return C && (v = wt(v, C)), ee = ya(c, v, { disableWarning: !1 }), this;
  };
  var Bo = p.__private__.getFont = p.getFont = function() {
    return ge[ya.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var c, v, C = {};
    for (c in Le) if (Le.hasOwnProperty(c)) for (v in C[c] = [], Le[c]) Le[c].hasOwnProperty(v) && C[c].push(v);
    return C;
  }, p.addFont = function(c, v, C, T, J) {
    var st = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && st.indexOf(arguments[3]) !== -1 ? J = arguments[3] : arguments[3] && st.indexOf(arguments[3]) == -1 && (C = wt(C, T)), J = J || "Identity-H", Oi.call(this, c, v, C, J);
  };
  var Dr, qi = n.lineWidth || 0.200025, oi = p.__private__.getLineWidth = p.getLineWidth = function() {
    return qi;
  }, Sa = p.__private__.setLineWidth = p.setLineWidth = function(c) {
    return qi = c, B(tt(P(c)) + " w"), this;
  };
  p.__private__.setLineDash = zt.API.setLineDash = zt.API.setLineDashPattern = function(c, v) {
    if (c = c || [], v = v || 0, isNaN(v) || !Array.isArray(c)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return c = c.map(function(C) {
      return tt(P(C));
    }).join(" "), v = tt(P(v)), B("[" + c + "] " + v + " d"), this;
  };
  var _a = p.__private__.getLineHeight = p.getLineHeight = function() {
    return Nt * Dr;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return Nt * Dr;
  };
  var Pa = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(c) {
    return typeof (c = c || 1.15) == "number" && (Dr = c), this;
  }, ka = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return Dr;
  };
  Pa(n.lineHeight);
  var rr = p.__private__.getHorizontalCoordinate = function(c) {
    return P(c);
  }, gr = p.__private__.getVerticalCoordinate = function(c) {
    return X === E.ADVANCED ? c : Yt[j].mediaBox.topRightY - Yt[j].mediaBox.bottomLeftY - P(c);
  }, Ro = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(c) {
    return tt(rr(c));
  }, mr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(c) {
    return tt(gr(c));
  }, Fn = n.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return _n(Fn);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(c, v, C, T) {
    return Fn = Pn({ ch1: c, ch2: v, ch3: C, ch4: T, pdfColorType: "draw", precision: 2 }), B(Fn), this;
  };
  var Di = n.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return _n(Di);
  }, p.__private__.setFillColor = p.setFillColor = function(c, v, C, T) {
    return Di = Pn({ ch1: c, ch2: v, ch3: C, ch4: T, pdfColorType: "fill", precision: 2 }), B(Di), this;
  };
  var Tr = n.textColor || "0 g", qo = p.__private__.getTextColor = p.getTextColor = function() {
    return _n(Tr);
  };
  p.__private__.setTextColor = p.setTextColor = function(c, v, C, T) {
    return Tr = Pn({ ch1: c, ch2: v, ch3: C, ch4: T, pdfColorType: "text", precision: 3 }), this;
  };
  var si = n.charSpace, Do = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(si || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(c) {
    if (isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return si = c, this;
  };
  var Ti = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(c) {
    var v = p.CapJoinStyles[c];
    if (v === void 0) throw new Error("Line cap style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Ti = v, B(v + " J"), this;
  };
  var zi = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(c) {
    var v = p.CapJoinStyles[c];
    if (v === void 0) throw new Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return zi = v, B(v + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(c) {
    if (c = c || 0, isNaN(c)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return B(tt(P(c)) + " M"), this;
  }, p.GState = co, p.setGState = function(c) {
    (c = typeof c == "string" ? Ae[An[c]] : Fa(null, c)).equals(tr) || (B("/" + c.id + " gs"), tr = c);
  };
  var Fa = function(c, v) {
    if (!c || !An[c]) {
      var C = !1;
      for (var T in Ae) if (Ae.hasOwnProperty(T) && Ae[T].equals(v)) {
        C = !0;
        break;
      }
      if (C) v = Ae[T];
      else {
        var J = "GS" + (Object.keys(Ae).length + 1).toString(10);
        Ae[J] = v, v.id = J;
      }
      return c && (An[c] = v.id), ue.publish("addGState", v), v;
    }
  };
  p.addGState = function(c, v) {
    return Fa(c, v), this;
  }, p.saveGraphicsState = function() {
    return B("q"), zn.push({ key: ee, size: Nt, color: Tr }), this;
  }, p.restoreGraphicsState = function() {
    B("Q");
    var c = zn.pop();
    return ee = c.key, Nt = c.size, Tr = c.color, tr = null, this;
  }, p.setCurrentTransformationMatrix = function(c) {
    return B(c.toString() + " cm"), this;
  }, p.comment = function(c) {
    return B("#" + c), this;
  };
  var ci = function(c, v) {
    var C = c || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return C;
    }, set: function(st) {
      isNaN(st) || (C = parseFloat(st));
    } });
    var T = v || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return T;
    }, set: function(st) {
      isNaN(st) || (T = parseFloat(st));
    } });
    var J = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return J;
    }, set: function(st) {
      J = st.toString();
    } }), this;
  }, Ui = function(c, v, C, T) {
    ci.call(this, c, v), this.type = "rect";
    var J = C || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return J;
    }, set: function(yt) {
      isNaN(yt) || (J = parseFloat(yt));
    } });
    var st = T || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return st;
    }, set: function(yt) {
      isNaN(yt) || (st = parseFloat(yt));
    } }), this;
  }, Hi = function() {
    this.page = Ne, this.currentPage = j, this.pages = xt.slice(0), this.pagesContext = Yt.slice(0), this.x = Ve, this.y = oe, this.matrix = xn, this.width = zr(j), this.height = vr(j), this.outputDestination = Et, this.id = "", this.objectNumber = -1;
  };
  Hi.prototype.restore = function() {
    Ne = this.page, j = this.currentPage, Yt = this.pagesContext, xt = this.pages, Ve = this.x, oe = this.y, xn = this.matrix, Wi(j, this.width), Vi(j, this.height), Et = this.outputDestination;
  };
  var Ia = function(c, v, C, T, J) {
    Hn.push(new Hi()), Ne = j = 0, xt = [], Ve = c, oe = v, xn = J, Ei([C, T]);
  }, To = function(c) {
    if (Un[c]) Hn.pop().restore();
    else {
      var v = new Hi(), C = "Xo" + (Object.keys(He).length + 1).toString(10);
      v.id = C, Un[c] = C, He[C] = v, ue.publish("addFormObject", v), Hn.pop().restore();
    }
  };
  for (var ui in p.beginFormObject = function(c, v, C, T, J) {
    return Ia(c, v, C, T, J), this;
  }, p.endFormObject = function(c) {
    return To(c), this;
  }, p.doFormObject = function(c, v) {
    var C = He[Un[c]];
    return B("q"), B(v.toString() + " cm"), B("/" + C.id + " Do"), B("Q"), this;
  }, p.getFormObject = function(c) {
    var v = He[Un[c]];
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix };
  }, p.save = function(c, v) {
    return c = c || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || !1, v.returnPromise === !1 ? (Vr(ri(nr()), c), typeof Vr.unload == "function" && Ht.setTimeout && setTimeout(Vr.unload, 911), this) : new Promise(function(C, T) {
      try {
        var J = Vr(ri(nr()), c);
        typeof Vr.unload == "function" && Ht.setTimeout && setTimeout(Vr.unload, 911), C(J);
      } catch (st) {
        T(st.message);
      }
    });
  }, zt.API) zt.API.hasOwnProperty(ui) && (ui === "events" && zt.API.events.length ? function(c, v) {
    var C, T, J;
    for (J = v.length - 1; J !== -1; J--) C = v[J][0], T = v[J][1], c.subscribe.apply(c, [C].concat(typeof T == "function" ? [T] : T));
  }(ue, zt.API.events) : p[ui] = zt.API[ui]);
  var zr = p.getPageWidth = function(c) {
    return (Yt[c = c || j].mediaBox.topRightX - Yt[c].mediaBox.bottomLeftX) / It;
  }, Wi = p.setPageWidth = function(c, v) {
    Yt[c].mediaBox.topRightX = v * It + Yt[c].mediaBox.bottomLeftX;
  }, vr = p.getPageHeight = function(c) {
    return (Yt[c = c || j].mediaBox.topRightY - Yt[c].mediaBox.bottomLeftY) / It;
  }, Vi = p.setPageHeight = function(c, v) {
    Yt[c].mediaBox.topRightY = v * It + Yt[c].mediaBox.bottomLeftY;
  };
  return p.internal = { pdfEscape: en, getStyle: Aa, getFont: Bo, getFontSize: Pt, getCharSpace: Do, getTextColor: qo, getLineHeight: _a, getLineHeightFactor: ka, getLineWidth: oi, write: Xt, getHorizontalCoordinate: rr, getVerticalCoordinate: gr, getCoordinateString: Ro, getVerticalCoordinateString: mr, collections: {}, newObject: Re, newAdditionalObject: Xr, newObjectDeferred: Oe, newObjectDeferredBegin: ln, getFilters: Vn, putStream: mn, events: ue, scaleFactor: It, pageSize: { getWidth: function() {
    return zr(j);
  }, setWidth: function(c) {
    Wi(j, c);
  }, getHeight: function() {
    return vr(j);
  }, setHeight: function(c) {
    Vi(j, c);
  } }, encryptionOptions: b, encryption: Ge, getEncryptor: Io, output: ii, getNumberOfPages: So, pages: xt, out: B, f2: dt, f3: F, getPageInfo: xa, getPageInfoByObjId: Vt, getCurrentPageInfo: Co, getPDFVersion: I, Point: ci, Rectangle: Ui, Matrix: Tt, hasHotfix: La }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return zr(j);
  }, set: function(c) {
    Wi(j, c);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return vr(j);
  }, set: function(c) {
    Vi(j, c);
  }, enumerable: !0, configurable: !0 }), Ao.call(p, Lt), ee = "F1", ba(s, r), ue.publish("initialized"), p;
}
Si.prototype.lsbFirstWord = function(n) {
  return String.fromCharCode(n >> 0 & 255, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
}, Si.prototype.toHexString = function(n) {
  return n.split("").map(function(t) {
    return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, Si.prototype.hexToBytes = function(n) {
  for (var t = [], r = 0; r < n.length; r += 2) t.push(String.fromCharCode(parseInt(n.substr(r, 2), 16)));
  return t.join("");
}, Si.prototype.processOwnerPassword = function(n, t) {
  return Ss(Ns(t).substr(0, 5), n);
}, Si.prototype.encryptor = function(n, t) {
  var r = Ns(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
  return function(i) {
    return Ss(r, i);
  };
}, co.prototype.equals = function(n) {
  var t, r = "id,objectNumber,equals";
  if (!n || fe(n) !== fe(this)) return !1;
  var i = 0;
  for (t in this) if (!(r.indexOf(t) >= 0)) {
    if (this.hasOwnProperty(t) && !n.hasOwnProperty(t) || this[t] !== n[t]) return !1;
    i++;
  }
  for (t in n) n.hasOwnProperty(t) && r.indexOf(t) < 0 && i--;
  return i === 0;
}, zt.API = { events: [] }, zt.version = "2.5.1";
var Pe = zt.API, Cs = 1, Jr = function(n) {
  return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, Ai = function(n) {
  return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, Jt = function(n) {
  return n.toFixed(2);
}, Cr = function(n) {
  return n.toFixed(5);
};
Pe.__acroform__ = {};
var un = function(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n;
}, xc = function(n) {
  return n * Cs;
}, Kn = function(n) {
  var t = new $c(), r = Mt.internal.getHeight(n) || 0, i = Mt.internal.getWidth(n) || 0;
  return t.BBox = [0, 0, Number(Jt(i)), Number(Jt(r))], t;
}, wl = Pe.__acroform__.setBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return n |= 1 << t;
}, yl = Pe.__acroform__.clearBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return n &= ~(1 << t);
}, Ll = Pe.__acroform__.getBit = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return n & 1 << t ? 1 : 0;
}, Ie = Pe.__acroform__.getBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return Ll(n, t - 1);
}, Ce = Pe.__acroform__.setBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return wl(n, t - 1);
}, je = Pe.__acroform__.clearBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return yl(n, t - 1);
}, xl = Pe.__acroform__.calculateCoordinates = function(n, t) {
  var r = t.internal.getHorizontalCoordinate, i = t.internal.getVerticalCoordinate, s = n[0], o = n[1], u = n[2], h = n[3], f = {};
  return f.lowerLeft_X = r(s) || 0, f.lowerLeft_Y = i(o + h) || 0, f.upperRight_X = r(s + u) || 0, f.upperRight_Y = i(o) || 0, [Number(Jt(f.lowerLeft_X)), Number(Jt(f.lowerLeft_Y)), Number(Jt(f.upperRight_X)), Number(Jt(f.upperRight_Y))];
}, Al = function(n) {
  if (n.appearanceStreamContent) return n.appearanceStreamContent;
  if (n.V || n.DV) {
    var t = [], r = n._V || n.DV, i = _s(n, r), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
    t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(n.scope.__private__.encodeColorString(n.color)), t.push("/" + s + " " + Jt(i.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(i.text), t.push("ET"), t.push("Q"), t.push("EMC");
    var o = Kn(n);
    return o.scope = n.scope, o.stream = t.join(`
`), o;
  }
}, _s = function(n, t) {
  var r = n.fontSize === 0 ? n.maxFontSize : n.fontSize, i = { text: "", fontSize: "" }, s = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
  s = n.multiline ? s.map(function(F) {
    return F.split(`
`);
  }) : s.map(function(F) {
    return [F];
  });
  var o = r, u = Mt.internal.getHeight(n) || 0;
  u = u < 0 ? -u : u;
  var h = Mt.internal.getWidth(n) || 0;
  h = h < 0 ? -h : h;
  var f = function(F, P, z) {
    if (F + 1 < s.length) {
      var q = P + " " + s[F + 1][0];
      return to(q, n, z).width <= h - 4;
    }
    return !1;
  };
  o++;
  t: for (; o > 0; ) {
    t = "", o--;
    var g, b, x = to("3", n, o).height, S = n.multiline ? u - o : (u - x) / 2, p = S += 2, O = 0, I = 0, R = 0;
    if (o <= 0) {
      t = `(...) Tj
`, t += "% Width of Text: " + to(t, n, o = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var _ = "", E = 0, X = 0; X < s.length; X++) if (s.hasOwnProperty(X)) {
      var ot = !1;
      if (s[X].length !== 1 && R !== s[X].length - 1) {
        if ((x + 2) * (E + 2) + 2 > u) continue t;
        _ += s[X][R], ot = !0, I = X, X--;
      } else {
        _ = (_ += s[X][R] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
        var ut = parseInt(X), wt = f(ut, _, o), tt = X >= s.length - 1;
        if (wt && !tt) {
          _ += " ", R = 0;
          continue;
        }
        if (wt || tt) {
          if (tt) I = ut;
          else if (n.multiline && (x + 2) * (E + 2) + 2 > u) continue t;
        } else {
          if (!n.multiline || (x + 2) * (E + 2) + 2 > u) continue t;
          I = ut;
        }
      }
      for (var D = "", gt = O; gt <= I; gt++) {
        var dt = s[gt];
        if (n.multiline) {
          if (gt === I) {
            D += dt[R] + " ", R = (R + 1) % dt.length;
            continue;
          }
          if (gt === O) {
            D += dt[dt.length - 1] + " ";
            continue;
          }
        }
        D += dt[0] + " ";
      }
      switch (D = D.substr(D.length - 1) == " " ? D.substr(0, D.length - 1) : D, b = to(D, n, o).width, n.textAlign) {
        case "right":
          g = h - b - 2;
          break;
        case "center":
          g = (h - b) / 2;
          break;
        case "left":
        default:
          g = 2;
      }
      t += Jt(g) + " " + Jt(p) + ` Td
`, t += "(" + Jr(D) + `) Tj
`, t += -Jt(g) + ` 0 Td
`, p = -(o + 2), b = 0, O = ot ? I : I + 1, E++, _ = "";
    }
    break;
  }
  return i.text = t, i.fontSize = o, i;
}, to = function(n, t, r) {
  var i = t.scope.internal.getFont(t.fontName, t.fontStyle), s = t.scope.getStringUnitWidth(n, { font: i, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
  return { height: t.scope.getStringUnitWidth("3", { font: i, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: s };
}, Nl = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, Sl = function(n, t) {
  var r = { type: "reference", object: n };
  t.internal.getPageInfo(n.page).pageContext.annotations.find(function(i) {
    return i.type === r.type && i.object === r.object;
  }) === void 0 && t.internal.getPageInfo(n.page).pageContext.annotations.push(r);
}, _l = function(n, t) {
  for (var r in n) if (n.hasOwnProperty(r)) {
    var i = r, s = n[r];
    t.internal.newObjectDeferredBegin(s.objId, !0), fe(s) === "object" && typeof s.putStream == "function" && s.putStream(), delete n[i];
  }
}, Pl = function(n, t) {
  if (t.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
    if (Dn.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(Nl)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Cs = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new Zc(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
      (function(r) {
        r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID, r.internal.acroformPlugin.printedOut = !0;
      })(n);
    }), n.internal.events.subscribe("buildDocument", function() {
      (function(r) {
        r.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var i = r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var s in i) if (i.hasOwnProperty(s)) {
          var o = i[s];
          o.objId = void 0, o.hasAnnotation && Sl(o, r);
        }
      })(n);
    }), n.internal.events.subscribe("putCatalog", function() {
      (function(r) {
        if (r.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        r.internal.write("/AcroForm " + r.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(n);
    }), n.internal.events.subscribe("postPutPages", function(r) {
      (function(i, s) {
        var o = !i;
        for (var u in i || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), i = i || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (i.hasOwnProperty(u)) {
          var h = i[u], f = [], g = h.Rect;
          if (h.Rect && (h.Rect = xl(h.Rect, s)), s.internal.newObjectDeferredBegin(h.objId, !0), h.DA = Mt.createDefaultAppearanceStream(h), fe(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var b = Al(h);
            f.push({ key: "AP", value: "<</N " + b + ">>" }), s.internal.acroformPlugin.xForms.push(b);
          }
          if (h.appearanceStreamContent) {
            var x = "";
            for (var S in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(S)) {
              var p = h.appearanceStreamContent[S];
              if (x += "/" + S + " ", x += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var u in p) if (p.hasOwnProperty(u)) {
                  var O = p[u];
                  typeof O == "function" && (O = O.call(s, h)), x += "/" + u + " " + O + " ", s.internal.acroformPlugin.xForms.indexOf(O) >= 0 || s.internal.acroformPlugin.xForms.push(O);
                }
              } else typeof (O = p) == "function" && (O = O.call(s, h)), x += "/" + u + " " + O, s.internal.acroformPlugin.xForms.indexOf(O) >= 0 || s.internal.acroformPlugin.xForms.push(O);
              x += ">>";
            }
            f.push({ key: "AP", value: `<<
` + x + ">>" });
          }
          s.internal.putStream({ additionalKeyValues: f, objectId: h.objId }), s.internal.out("endobj");
        }
        o && _l(s.internal.acroformPlugin.xForms, s);
      })(r, n);
    }), n.internal.acroformPlugin.isInitialized = !0;
  }
}, Kc = Pe.__acroform__.arrayToPdfArray = function(n, t, r) {
  var i = function(u) {
    return u;
  };
  if (Array.isArray(n)) {
    for (var s = "[", o = 0; o < n.length; o++) switch (o !== 0 && (s += " "), fe(n[o])) {
      case "boolean":
      case "number":
      case "object":
        s += n[o].toString();
        break;
      case "string":
        n[o].substr(0, 1) !== "/" ? (t !== void 0 && r && (i = r.internal.getEncryptor(t)), s += "(" + Jr(i(n[o].toString())) + ")") : s += n[o].toString();
    }
    return s += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, ds = function(n, t, r) {
  var i = function(s) {
    return s;
  };
  return t !== void 0 && r && (i = r.internal.getEncryptor(t)), (n = n || "").toString(), n = "(" + Jr(i(n)) + ")";
}, $n = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(n) {
    this._objId = n;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
$n.prototype.toString = function() {
  return this.objId + " 0 R";
}, $n.prototype.putStream = function() {
  var n = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: n, objectId: this.objId }), this.scope.internal.out("endobj");
}, $n.prototype.getKeyValueListForStream = function() {
  var n = [], t = Object.getOwnPropertyNames(this).filter(function(o) {
    return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
  });
  for (var r in t) if (Object.getOwnPropertyDescriptor(this, t[r]).configurable === !1) {
    var i = t[r], s = this[i];
    s && (Array.isArray(s) ? n.push({ key: i, value: Kc(s, this.objId, this.scope) }) : s instanceof $n ? (s.scope = this.scope, n.push({ key: i, value: s.objId + " 0 R" })) : typeof s != "function" && n.push({ key: i, value: s }));
  }
  return n;
};
var $c = function() {
  $n.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var n, t = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return t;
  }, set: function(r) {
    t = r;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(r) {
    n = r.trim();
  }, get: function() {
    return n || null;
  } });
};
un($c, $n);
var Zc = function() {
  $n.call(this);
  var n, t = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return t.length > 0 ? t : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return t;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (n) {
      var r = function(i) {
        return i;
      };
      return this.scope && (r = this.scope.internal.getEncryptor(this.objId)), "(" + Jr(r(n)) + ")";
    }
  }, set: function(r) {
    n = r;
  } });
};
un(Zc, $n);
var Dn = function n() {
  $n.call(this);
  var t = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
    t = _;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(t, 3);
  }, set: function(_) {
    _ ? this.F = Ce(t, 3) : this.F = je(t, 3);
  } });
  var r = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
    r = _;
  } });
  var i = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (i.length !== 0) return i;
  }, set: function(_) {
    i = _ !== void 0 ? _ : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[0]) ? 0 : i[0];
  }, set: function(_) {
    i[0] = _;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[1]) ? 0 : i[1];
  }, set: function(_) {
    i[1] = _;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[2]) ? 0 : i[2];
  }, set: function(_) {
    i[2] = _;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[3]) ? 0 : i[3];
  }, set: function(_) {
    i[3] = _;
  } });
  var s = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return s;
  }, set: function(_) {
    switch (_) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        s = _;
        break;
      default:
        throw new Error('Invalid value "' + _ + '" for attribute FT supplied.');
    }
  } });
  var o = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!o || o.length < 1) {
      if (this instanceof uo) return;
      o = "FieldObject" + n.FieldNum++;
    }
    var _ = function(E) {
      return E;
    };
    return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), "(" + Jr(_(o)) + ")";
  }, set: function(_) {
    o = _.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return o;
  }, set: function(_) {
    o = _;
  } });
  var u = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return u;
  }, set: function(_) {
    u = _;
  } });
  var h = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return h;
  }, set: function(_) {
    h = _;
  } });
  var f = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return f;
  }, set: function(_) {
    f = _;
  } });
  var g = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return g === void 0 ? 50 / Cs : g;
  }, set: function(_) {
    g = _;
  } });
  var b = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return b;
  }, set: function(_) {
    b = _;
  } });
  var x = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!x || this instanceof uo || this instanceof Yr)) return ds(x, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), x = _;
  } });
  var S = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (S) return this instanceof Ue ? S : ds(S, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), S = this instanceof Ue ? _ : _.substr(0, 1) === "(" ? Ai(_.substr(1, _.length - 2)) : Ai(_);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Ue ? Ai(S.substr(1, S.length - 1)) : S;
  }, set: function(_) {
    _ = _.toString(), S = this instanceof Ue ? "/" + _ : _;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return p;
  }, set: function(_) {
    this.V = _;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return this instanceof Ue ? p : ds(p, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Ue ? _ : _.substr(0, 1) === "(" ? Ai(_.substr(1, _.length - 2)) : Ai(_);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Ue ? Ai(p.substr(1, p.length - 1)) : p;
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Ue ? "/" + _ : _;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var O, I = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return I;
  }, set: function(_) {
    _ = !!_, I = _;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (O) return O;
  }, set: function(_) {
    O = _;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 1);
  }, set: function(_) {
    _ ? this.Ff = Ce(this.Ff, 1) : this.Ff = je(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 2);
  }, set: function(_) {
    _ ? this.Ff = Ce(this.Ff, 2) : this.Ff = je(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 3);
  }, set: function(_) {
    _ ? this.Ff = Ce(this.Ff, 3) : this.Ff = je(this.Ff, 3);
  } });
  var R = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (R !== null) return R;
  }, set: function(_) {
    if ([0, 1, 2].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
    R = _;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var _;
    switch (R) {
      case 0:
      default:
        _ = "left";
        break;
      case 1:
        _ = "center";
        break;
      case 2:
        _ = "right";
    }
    return _;
  }, configurable: !0, enumerable: !0, set: function(_) {
    switch (_) {
      case "right":
      case 2:
        R = 2;
        break;
      case "center":
      case 1:
        R = 1;
        break;
      case "left":
      case 0:
      default:
        R = 0;
    }
  } });
};
un(Dn, $n);
var ki = function() {
  Dn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var n = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } });
  var t = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return Kc(t, this.objId, this.scope);
  }, set: function(r) {
    var i, s;
    s = [], typeof (i = r) == "string" && (s = function(o, u, h) {
      h || (h = 1);
      for (var f, g = []; f = u.exec(o); ) g.push(f[h]);
      return g;
    }(i, /\((.*?)\)/g)), t = s;
  } }), this.getOptions = function() {
    return t;
  }, this.setOptions = function(r) {
    t = r, this.sort && t.sort();
  }, this.addOption = function(r) {
    r = (r = r || "").toString(), t.push(r), this.sort && t.sort();
  }, this.removeOption = function(r, i) {
    for (i = i || !1, r = (r = r || "").toString(); t.indexOf(r) !== -1 && (t.splice(t.indexOf(r), 1), i !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 18);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 18) : this.Ff = je(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 19);
  }, set: function(r) {
    this.combo === !0 && (r ? this.Ff = Ce(this.Ff, 19) : this.Ff = je(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 20);
  }, set: function(r) {
    r ? (this.Ff = Ce(this.Ff, 20), t.sort()) : this.Ff = je(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 22);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 22) : this.Ff = je(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 23);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 27);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 27) : this.Ff = je(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
un(ki, Dn);
var Fi = function() {
  ki.call(this), this.fontName = "helvetica", this.combo = !1;
};
un(Fi, ki);
var Ii = function() {
  Fi.call(this), this.combo = !0;
};
un(Ii, Fi);
var io = function() {
  Ii.call(this), this.edit = !0;
};
un(io, Ii);
var Ue = function() {
  Dn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 15);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 15) : this.Ff = je(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 16);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 16) : this.Ff = je(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 17);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 17) : this.Ff = je(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 26);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
  } });
  var n, t = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var r = function(o) {
      return o;
    };
    if (this.scope && (r = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
      var i, s = [];
      for (i in s.push("<<"), t) s.push("/" + i + " (" + Jr(r(t[i])) + ")");
      return s.push(">>"), s.join(`
`);
    }
  }, set: function(r) {
    fe(r) === "object" && (t = r);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return t.CA || "";
  }, set: function(r) {
    typeof r == "string" && (t.CA = r);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(r) {
    n = "/" + r;
  } });
};
un(Ue, Dn);
var ao = function() {
  Ue.call(this), this.pushButton = !0;
};
un(ao, Ue);
var Ci = function() {
  Ue.call(this), this.radio = !0, this.pushButton = !1;
  var n = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t !== void 0 ? t : [];
  } });
};
un(Ci, Ue);
var uo = function() {
  var n, t;
  Dn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(s) {
    n = s;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return t;
  }, set: function(s) {
    t = s;
  } });
  var r, i = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var s = function(h) {
      return h;
    };
    this.scope && (s = this.scope.internal.getEncryptor(this.objId));
    var o, u = [];
    for (o in u.push("<<"), i) u.push("/" + o + " (" + Jr(s(i[o])) + ")");
    return u.push(">>"), u.join(`
`);
  }, set: function(s) {
    fe(s) === "object" && (i = s);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return i.CA || "";
  }, set: function(s) {
    typeof s == "string" && (i.CA = s);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(s) {
    r = s;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return r.substr(1, r.length - 1);
  }, set: function(s) {
    r = "/" + s;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Mt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
un(uo, Dn), Ci.prototype.setAppearance = function(n) {
  if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
    var r = this.Kids[t];
    r.appearanceStreamContent = n.createAppearanceStream(r.optionName), r.caption = n.getCA();
  }
}, Ci.prototype.createOption = function(n) {
  var t = new uo();
  return t.Parent = this, t.optionName = n, this.Kids.push(t), kl.call(this.scope, t), t;
};
var oo = function() {
  Ue.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Mt.CheckBox.createAppearanceStream();
};
un(oo, Ue);
var Yr = function() {
  Dn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 13);
  }, set: function(t) {
    t ? this.Ff = Ce(this.Ff, 13) : this.Ff = je(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 21);
  }, set: function(t) {
    t ? this.Ff = Ce(this.Ff, 21) : this.Ff = je(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 23);
  }, set: function(t) {
    t ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 24);
  }, set: function(t) {
    t ? this.Ff = Ce(this.Ff, 24) : this.Ff = je(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 25);
  }, set: function(t) {
    t ? this.Ff = Ce(this.Ff, 25) : this.Ff = je(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 26);
  }, set: function(t) {
    t ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
  } });
  var n = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(t) {
    Number.isInteger(t) && (n = t);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
un(Yr, Dn);
var so = function() {
  Yr.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 14);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 14) : this.Ff = je(this.Ff, 14);
  } }), this.password = !0;
};
un(so, Yr);
var Mt = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Mt.CheckBox.YesNormal }, D: { On: Mt.CheckBox.YesPushDown, Off: Mt.CheckBox.OffPushDown } };
}, YesPushDown: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [], i = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), o = _s(n, n.caption);
  return r.push("0.749023 g"), r.push("0 0 " + Jt(Mt.internal.getWidth(n)) + " " + Jt(Mt.internal.getHeight(n)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + i + " " + Jt(o.fontSize) + " Tf " + s), r.push("BT"), r.push(o.text), r.push("ET"), r.push("Q"), r.push("EMC"), t.stream = r.join(`
`), t;
}, YesNormal: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = n.scope.internal.getFont(n.fontName, n.fontStyle).id, i = n.scope.__private__.encodeColorString(n.color), s = [], o = Mt.internal.getHeight(n), u = Mt.internal.getWidth(n), h = _s(n, n.caption);
  return s.push("1 g"), s.push("0 0 " + Jt(u) + " " + Jt(o) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + Jt(u - 1) + " " + Jt(o - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + r + " " + Jt(h.fontSize) + " Tf " + i), s.push(h.text), s.push("ET"), s.push("Q"), t.stream = s.join(`
`), t;
}, OffPushDown: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + Jt(Mt.internal.getWidth(n)) + " " + Jt(Mt.internal.getHeight(n)) + " re"), r.push("f"), t.stream = r.join(`
`), t;
} }, RadioButton: { Circle: { createAppearanceStream: function(n) {
  var t = { D: { Off: Mt.RadioButton.Circle.OffPushDown }, N: {} };
  return t.N[n] = Mt.RadioButton.Circle.YesNormal, t.D[n] = Mt.RadioButton.Circle.YesPushDown, t;
}, getCA: function() {
  return "l";
}, YesNormal: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [], i = Mt.internal.getWidth(n) <= Mt.internal.getHeight(n) ? Mt.internal.getWidth(n) / 4 : Mt.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Mt.internal.Bezier_C, o = Number((i * s).toFixed(5));
  return r.push("q"), r.push("1 0 0 1 " + Cr(Mt.internal.getWidth(n) / 2) + " " + Cr(Mt.internal.getHeight(n) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"), r.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"), r.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"), r.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"), r.push("f"), r.push("Q"), t.stream = r.join(`
`), t;
}, YesPushDown: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [], i = Mt.internal.getWidth(n) <= Mt.internal.getHeight(n) ? Mt.internal.getWidth(n) / 4 : Mt.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Number((2 * i).toFixed(5)), o = Number((s * Mt.internal.Bezier_C).toFixed(5)), u = Number((i * Mt.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Cr(Mt.internal.getWidth(n) / 2) + " " + Cr(Mt.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), r.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), r.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), r.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + Cr(Mt.internal.getWidth(n) / 2) + " " + Cr(Mt.internal.getHeight(n) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + u + " " + u + " " + i + " 0 " + i + " c"), r.push("-" + u + " " + i + " -" + i + " " + u + " -" + i + " 0 c"), r.push("-" + i + " -" + u + " -" + u + " -" + i + " 0 -" + i + " c"), r.push(u + " -" + i + " " + i + " -" + u + " " + i + " 0 c"), r.push("f"), r.push("Q"), t.stream = r.join(`
`), t;
}, OffPushDown: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [], i = Mt.internal.getWidth(n) <= Mt.internal.getHeight(n) ? Mt.internal.getWidth(n) / 4 : Mt.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Number((2 * i).toFixed(5)), o = Number((s * Mt.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Cr(Mt.internal.getWidth(n) / 2) + " " + Cr(Mt.internal.getHeight(n) / 2) + " cm"), r.push(s + " 0 m"), r.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), r.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), r.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), r.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), r.push("f"), r.push("Q"), t.stream = r.join(`
`), t;
} }, Cross: { createAppearanceStream: function(n) {
  var t = { D: { Off: Mt.RadioButton.Cross.OffPushDown }, N: {} };
  return t.N[n] = Mt.RadioButton.Cross.YesNormal, t.D[n] = Mt.RadioButton.Cross.YesPushDown, t;
}, getCA: function() {
  return "8";
}, YesNormal: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [], i = Mt.internal.calculateCross(n);
  return r.push("q"), r.push("1 1 " + Jt(Mt.internal.getWidth(n) - 2) + " " + Jt(Mt.internal.getHeight(n) - 2) + " re"), r.push("W"), r.push("n"), r.push(Jt(i.x1.x) + " " + Jt(i.x1.y) + " m"), r.push(Jt(i.x2.x) + " " + Jt(i.x2.y) + " l"), r.push(Jt(i.x4.x) + " " + Jt(i.x4.y) + " m"), r.push(Jt(i.x3.x) + " " + Jt(i.x3.y) + " l"), r.push("s"), r.push("Q"), t.stream = r.join(`
`), t;
}, YesPushDown: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = Mt.internal.calculateCross(n), i = [];
  return i.push("0.749023 g"), i.push("0 0 " + Jt(Mt.internal.getWidth(n)) + " " + Jt(Mt.internal.getHeight(n)) + " re"), i.push("f"), i.push("q"), i.push("1 1 " + Jt(Mt.internal.getWidth(n) - 2) + " " + Jt(Mt.internal.getHeight(n) - 2) + " re"), i.push("W"), i.push("n"), i.push(Jt(r.x1.x) + " " + Jt(r.x1.y) + " m"), i.push(Jt(r.x2.x) + " " + Jt(r.x2.y) + " l"), i.push(Jt(r.x4.x) + " " + Jt(r.x4.y) + " m"), i.push(Jt(r.x3.x) + " " + Jt(r.x3.y) + " l"), i.push("s"), i.push("Q"), t.stream = i.join(`
`), t;
}, OffPushDown: function(n) {
  var t = Kn(n);
  t.scope = n.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + Jt(Mt.internal.getWidth(n)) + " " + Jt(Mt.internal.getHeight(n)) + " re"), r.push("f"), t.stream = r.join(`
`), t;
} } }, createDefaultAppearanceStream: function(n) {
  var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color);
  return "/" + t + " " + n.fontSize + " Tf " + r;
} };
Mt.internal = { Bezier_C: 0.551915024494, calculateCross: function(n) {
  var t = Mt.internal.getWidth(n), r = Mt.internal.getHeight(n), i = Math.min(t, r);
  return { x1: { x: (t - i) / 2, y: (r - i) / 2 + i }, x2: { x: (t - i) / 2 + i, y: (r - i) / 2 }, x3: { x: (t - i) / 2, y: (r - i) / 2 }, x4: { x: (t - i) / 2 + i, y: (r - i) / 2 + i } };
} }, Mt.internal.getWidth = function(n) {
  var t = 0;
  return fe(n) === "object" && (t = xc(n.Rect[2])), t;
}, Mt.internal.getHeight = function(n) {
  var t = 0;
  return fe(n) === "object" && (t = xc(n.Rect[3])), t;
};
var kl = Pe.addField = function(n) {
  if (Pl(this, n), !(n instanceof Dn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var t;
  return (t = n).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Pe.AcroFormChoiceField = ki, Pe.AcroFormListBox = Fi, Pe.AcroFormComboBox = Ii, Pe.AcroFormEditBox = io, Pe.AcroFormButton = Ue, Pe.AcroFormPushButton = ao, Pe.AcroFormRadioButton = Ci, Pe.AcroFormCheckBox = oo, Pe.AcroFormTextField = Yr, Pe.AcroFormPasswordField = so, Pe.AcroFormAppearance = Mt, Pe.AcroForm = { ChoiceField: ki, ListBox: Fi, ComboBox: Ii, EditBox: io, Button: Ue, PushButton: ao, RadioButton: Ci, CheckBox: oo, TextField: Yr, PasswordField: so, Appearance: Mt }, zt.AcroForm = { ChoiceField: ki, ListBox: Fi, ComboBox: Ii, EditBox: io, Button: Ue, PushButton: ao, RadioButton: Ci, CheckBox: oo, TextField: Yr, PasswordField: so, Appearance: Mt };
function Qc(n) {
  return n.reduce(function(t, r, i) {
    return t[r] = i, t;
  }, {});
}
(function(n) {
  n.__addimage__ = {};
  var t = "UNKNOWN", r = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, i = n.__addimage__.getImageFileTypeByImageData = function(F, P) {
    var z, q, at, nt, lt, Z = t;
    if ((P = P || t) === "RGBA" || F.data !== void 0 && F.data instanceof Uint8ClampedArray && "height" in F && "width" in F) return "RGBA";
    if (wt(F)) for (lt in r) for (at = r[lt], z = 0; z < at.length; z += 1) {
      for (nt = !0, q = 0; q < at[z].length; q += 1) if (at[z][q] !== void 0 && at[z][q] !== F[q]) {
        nt = !1;
        break;
      }
      if (nt === !0) {
        Z = lt;
        break;
      }
    }
    else for (lt in r) for (at = r[lt], z = 0; z < at.length; z += 1) {
      for (nt = !0, q = 0; q < at[z].length; q += 1) if (at[z][q] !== void 0 && at[z][q] !== F.charCodeAt(q)) {
        nt = !1;
        break;
      }
      if (nt === !0) {
        Z = lt;
        break;
      }
    }
    return Z === t && P !== t && (Z = P), Z;
  }, s = function F(P) {
    for (var z = this.internal.write, q = this.internal.putStream, at = (0, this.internal.getFilters)(); at.indexOf("FlateEncode") !== -1; ) at.splice(at.indexOf("FlateEncode"), 1);
    P.objectId = this.internal.newObject();
    var nt = [];
    if (nt.push({ key: "Type", value: "/XObject" }), nt.push({ key: "Subtype", value: "/Image" }), nt.push({ key: "Width", value: P.width }), nt.push({ key: "Height", value: P.height }), P.colorSpace === R.INDEXED ? nt.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (P.palette.length / 3 - 1) + " " + ("sMask" in P && P.sMask !== void 0 ? P.objectId + 2 : P.objectId + 1) + " 0 R]" }) : (nt.push({ key: "ColorSpace", value: "/" + P.colorSpace }), P.colorSpace === R.DEVICE_CMYK && nt.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), nt.push({ key: "BitsPerComponent", value: P.bitsPerComponent }), "decodeParameters" in P && P.decodeParameters !== void 0 && nt.push({ key: "DecodeParms", value: "<<" + P.decodeParameters + ">>" }), "transparency" in P && Array.isArray(P.transparency)) {
      for (var lt = "", Z = 0, ft = P.transparency.length; Z < ft; Z++) lt += P.transparency[Z] + " " + P.transparency[Z] + " ";
      nt.push({ key: "Mask", value: "[" + lt + "]" });
    }
    P.sMask !== void 0 && nt.push({ key: "SMask", value: P.objectId + 1 + " 0 R" });
    var ht = P.filter !== void 0 ? ["/" + P.filter] : void 0;
    if (q({ data: P.data, additionalKeyValues: nt, alreadyAppliedFilters: ht, objectId: P.objectId }), z("endobj"), "sMask" in P && P.sMask !== void 0) {
      var kt = "/Predictor " + P.predictor + " /Colors 1 /BitsPerComponent " + P.bitsPerComponent + " /Columns " + P.width, L = { width: P.width, height: P.height, colorSpace: "DeviceGray", bitsPerComponent: P.bitsPerComponent, decodeParameters: kt, data: P.sMask };
      "filter" in P && (L.filter = P.filter), F.call(this, L);
    }
    if (P.colorSpace === R.INDEXED) {
      var j = this.internal.newObject();
      q({ data: D(new Uint8Array(P.palette)), objectId: j }), z("endobj");
    }
  }, o = function() {
    var F = this.internal.collections.addImage_images;
    for (var P in F) s.call(this, F[P]);
  }, u = function() {
    var F, P = this.internal.collections.addImage_images, z = this.internal.write;
    for (var q in P) z("/I" + (F = P[q]).index, F.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", u));
  }, f = function() {
    var F = this.internal.collections.addImage_images;
    return h.call(this), F;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, b = function(F) {
    return typeof n["process" + F.toUpperCase()] == "function";
  }, x = function(F) {
    return fe(F) === "object" && F.nodeType === 1;
  }, S = function(F, P) {
    if (F.nodeName === "IMG" && F.hasAttribute("src")) {
      var z = "" + F.getAttribute("src");
      if (z.indexOf("data:image/") === 0) return ua(unescape(z).split("base64,").pop());
      var q = n.loadFile(z, !0);
      if (q !== void 0) return q;
    }
    if (F.nodeName === "CANVAS") {
      if (F.width === 0 || F.height === 0) throw new Error("Given canvas must have data. Canvas width: " + F.width + ", height: " + F.height);
      var at;
      switch (P) {
        case "PNG":
          at = "image/png";
          break;
        case "WEBP":
          at = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          at = "image/jpeg";
      }
      return ua(F.toDataURL(at, 1).split("base64,").pop());
    }
  }, p = function(F) {
    var P = this.internal.collections.addImage_images;
    if (P) {
      for (var z in P) if (F === P[z].alias) return P[z];
    }
  }, O = function(F, P, z) {
    return F || P || (F = -96, P = -96), F < 0 && (F = -1 * z.width * 72 / F / this.internal.scaleFactor), P < 0 && (P = -1 * z.height * 72 / P / this.internal.scaleFactor), F === 0 && (F = P * z.width / z.height), P === 0 && (P = F * z.height / z.width), [F, P];
  }, I = function(F, P, z, q, at, nt) {
    var lt = O.call(this, z, q, at), Z = this.internal.getCoordinateString, ft = this.internal.getVerticalCoordinateString, ht = f.call(this);
    if (z = lt[0], q = lt[1], ht[at.index] = at, nt) {
      nt *= Math.PI / 180;
      var kt = Math.cos(nt), L = Math.sin(nt), j = function(W) {
        return W.toFixed(4);
      }, M = [j(kt), j(L), j(-1 * L), j(kt), 0, 0, "cm"];
    }
    this.internal.write("q"), nt ? (this.internal.write([1, "0", "0", 1, Z(F), ft(P + q), "cm"].join(" ")), this.internal.write(M.join(" ")), this.internal.write([Z(z), "0", "0", Z(q), "0", "0", "cm"].join(" "))) : this.internal.write([Z(z), "0", "0", Z(q), Z(F), ft(P + q), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + at.index + " Do"), this.internal.write("Q");
  }, R = n.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  n.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var _ = n.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, E = n.__addimage__.sHashCode = function(F) {
    var P, z, q = 0;
    if (typeof F == "string") for (z = F.length, P = 0; P < z; P++) q = (q << 5) - q + F.charCodeAt(P), q |= 0;
    else if (wt(F)) for (z = F.byteLength / 2, P = 0; P < z; P++) q = (q << 5) - q + F[P], q |= 0;
    return q;
  }, X = n.__addimage__.validateStringAsBase64 = function(F) {
    (F = F || "").toString().trim();
    var P = !0;
    return F.length === 0 && (P = !1), F.length % 4 != 0 && (P = !1), /^[A-Za-z0-9+/]+$/.test(F.substr(0, F.length - 2)) === !1 && (P = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(F.substr(-2)) === !1 && (P = !1), P;
  }, ot = n.__addimage__.extractImageFromDataUrl = function(F) {
    var P = (F = F || "").split("base64,"), z = null;
    if (P.length === 2) {
      var q = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(P[0]);
      Array.isArray(q) && (z = { mimeType: q[1], charset: q[2], data: P[1] });
    }
    return z;
  }, ut = n.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  n.__addimage__.isArrayBuffer = function(F) {
    return ut() && F instanceof ArrayBuffer;
  };
  var wt = n.__addimage__.isArrayBufferView = function(F) {
    return ut() && typeof Uint32Array < "u" && (F instanceof Int8Array || F instanceof Uint8Array || typeof Uint8ClampedArray < "u" && F instanceof Uint8ClampedArray || F instanceof Int16Array || F instanceof Uint16Array || F instanceof Int32Array || F instanceof Uint32Array || F instanceof Float32Array || F instanceof Float64Array);
  }, tt = n.__addimage__.binaryStringToUint8Array = function(F) {
    for (var P = F.length, z = new Uint8Array(P), q = 0; q < P; q++) z[q] = F.charCodeAt(q);
    return z;
  }, D = n.__addimage__.arrayBufferToBinaryString = function(F) {
    for (var P = "", z = wt(F) ? F : new Uint8Array(F), q = 0; q < z.length; q += 8192) P += String.fromCharCode.apply(null, z.subarray(q, q + 8192));
    return P;
  };
  n.addImage = function() {
    var F, P, z, q, at, nt, lt, Z, ft;
    if (typeof arguments[1] == "number" ? (P = t, z = arguments[1], q = arguments[2], at = arguments[3], nt = arguments[4], lt = arguments[5], Z = arguments[6], ft = arguments[7]) : (P = arguments[1], z = arguments[2], q = arguments[3], at = arguments[4], nt = arguments[5], lt = arguments[6], Z = arguments[7], ft = arguments[8]), fe(F = arguments[0]) === "object" && !x(F) && "imageData" in F) {
      var ht = F;
      F = ht.imageData, P = ht.format || P || t, z = ht.x || z || 0, q = ht.y || q || 0, at = ht.w || ht.width || at, nt = ht.h || ht.height || nt, lt = ht.alias || lt, Z = ht.compression || Z, ft = ht.rotation || ht.angle || ft;
    }
    var kt = this.internal.getFilters();
    if (Z === void 0 && kt.indexOf("FlateEncode") !== -1 && (Z = "SLOW"), isNaN(z) || isNaN(q)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var L = gt.call(this, F, P, lt, Z);
    return I.call(this, z, q, at, nt, L, ft), this;
  };
  var gt = function(F, P, z, q) {
    var at, nt, lt;
    if (typeof F == "string" && i(F) === t) {
      F = unescape(F);
      var Z = dt(F, !1);
      (Z !== "" || (Z = n.loadFile(F, !0)) !== void 0) && (F = Z);
    }
    if (x(F) && (F = S(F, P)), P = i(F, P), !b(P)) throw new Error("addImage does not support files of type '" + P + "', please ensure that a plugin for '" + P + "' support is added.");
    if (((lt = z) == null || lt.length === 0) && (z = function(ft) {
      return typeof ft == "string" || wt(ft) ? E(ft) : wt(ft.data) ? E(ft.data) : null;
    }(F)), (at = p.call(this, z)) || (ut() && (F instanceof Uint8Array || P === "RGBA" || (nt = F, F = tt(F))), at = this["process" + P.toUpperCase()](F, g.call(this), z, function(ft) {
      return ft && typeof ft == "string" && (ft = ft.toUpperCase()), ft in n.image_compression ? ft : _.NONE;
    }(q), nt)), !at) throw new Error("An unknown error occurred whilst processing the image.");
    return at;
  }, dt = n.__addimage__.convertBase64ToBinaryString = function(F, P) {
    var z;
    P = typeof P != "boolean" || P;
    var q, at = "";
    if (typeof F == "string") {
      q = (z = ot(F)) !== null ? z.data : F;
      try {
        at = ua(q);
      } catch (nt) {
        if (P) throw X(q) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + nt.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return at;
  };
  n.getImageProperties = function(F) {
    var P, z, q = "";
    if (x(F) && (F = S(F)), typeof F == "string" && i(F) === t && ((q = dt(F, !1)) === "" && (q = n.loadFile(F) || ""), F = q), z = i(F), !b(z)) throw new Error("addImage does not support files of type '" + z + "', please ensure that a plugin for '" + z + "' support is added.");
    if (!ut() || F instanceof Uint8Array || (F = tt(F)), !(P = this["process" + z.toUpperCase()](F))) throw new Error("An unknown error occurred whilst processing the image");
    return P.fileType = z, P;
  };
})(zt.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function(r) {
    if (r !== void 0 && r != "") return !0;
  };
  zt.API.events.push(["addPage", function(r) {
    this.internal.getPageInfo(r.pageNumber).pageContext.annotations = [];
  }]), n.events.push(["putPage", function(r) {
    for (var i, s, o, u = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(r.objId), g = r.pageContext.annotations, b = !1, x = 0; x < g.length && !b; x++) switch ((i = g[x]).type) {
      case "link":
        (t(i.options.url) || t(i.options.pageNumber)) && (b = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        b = !0;
    }
    if (b != 0) {
      this.internal.write("/Annots [");
      for (var S = 0; S < g.length; S++) {
        i = g[S];
        var p = this.internal.pdfEscape, O = this.internal.getEncryptor(r.objId);
        switch (i.type) {
          case "reference":
            this.internal.write(" " + i.object.objId + " 0 R ");
            break;
          case "text":
            var I = this.internal.newAdditionalObject(), R = this.internal.newAdditionalObject(), _ = this.internal.getEncryptor(I.objId), E = i.title || "Note";
            o = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + u(i.bounds.x) + " " + h(i.bounds.y + i.bounds.h) + " " + u(i.bounds.x + i.bounds.w) + " " + h(i.bounds.y) + "] ") + "/Contents (" + p(_(i.contents)) + ")", o += " /Popup " + R.objId + " 0 R", o += " /P " + f.objId + " 0 R", o += " /T (" + p(_(E)) + ") >>", I.content = o;
            var X = I.objId + " 0 R";
            o = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + u(i.bounds.x + 30) + " " + h(i.bounds.y + i.bounds.h) + " " + u(i.bounds.x + i.bounds.w + 30) + " " + h(i.bounds.y) + "] ") + " /Parent " + X, i.open && (o += " /Open true"), o += " >>", R.content = o, this.internal.write(I.objId, "0 R", R.objId, "0 R");
            break;
          case "freetext":
            s = "/Rect [" + u(i.bounds.x) + " " + h(i.bounds.y) + " " + u(i.bounds.x + i.bounds.w) + " " + h(i.bounds.y + i.bounds.h) + "] ";
            var ot = i.color || "#000000";
            o = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + p(O(i.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + ot + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
            break;
          case "link":
            if (i.options.name) {
              var ut = this.annotations._nameMap[i.options.name];
              i.options.pageNumber = ut.page, i.options.top = ut.y;
            } else i.options.top || (i.options.top = 0);
            if (s = "/Rect [" + i.finalBounds.x + " " + i.finalBounds.y + " " + i.finalBounds.w + " " + i.finalBounds.h + "] ", o = "", i.options.url) o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + p(O(i.options.url)) + ") >>";
            else if (i.options.pageNumber)
              switch (o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(i.options.pageNumber).objId + " 0 R", i.options.magFactor = i.options.magFactor || "XYZ", i.options.magFactor) {
                case "Fit":
                  o += " /Fit]";
                  break;
                case "FitH":
                  o += " /FitH " + i.options.top + "]";
                  break;
                case "FitV":
                  i.options.left = i.options.left || 0, o += " /FitV " + i.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var wt = h(i.options.top);
                  i.options.left = i.options.left || 0, i.options.zoom === void 0 && (i.options.zoom = 0), o += " /XYZ " + i.options.left + " " + wt + " " + i.options.zoom + "]";
              }
            o != "" && (o += " >>", this.internal.write(o));
        }
      }
      this.internal.write("]");
    }
  }]), n.createAnnotation = function(r) {
    var i = this.internal.getCurrentPageInfo();
    switch (r.type) {
      case "link":
        this.link(r.bounds.x, r.bounds.y, r.bounds.w, r.bounds.h, r);
        break;
      case "text":
      case "freetext":
        i.pageContext.annotations.push(r);
    }
  }, n.link = function(r, i, s, o, u) {
    var h = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: f(r), y: g(i), w: f(r + s), h: g(i + o) }, options: u, type: "link" });
  }, n.textWithLink = function(r, i, s, o) {
    var u, h, f = this.getTextWidth(r), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (o.maxWidth !== void 0) {
      h = o.maxWidth;
      var b = this.splitTextToSize(r, h).length;
      u = Math.ceil(g * b);
    } else h = f, u = g;
    return this.text(r, i, s, o), s += 0.2 * g, o.align === "center" && (i -= f / 2), o.align === "right" && (i -= f), this.link(i, s - g, h, u, o), f;
  }, n.getTextWidth = function(r) {
    var i = this.internal.getFontSize();
    return this.getStringUnitWidth(r) * i / this.internal.scaleFactor;
  };
}(zt.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, r = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, s = [1570, 1571, 1573, 1575];
  n.__arabicParser__ = {};
  var o = n.__arabicParser__.isInArabicSubstitutionA = function(I) {
    return t[I.charCodeAt(0)] !== void 0;
  }, u = n.__arabicParser__.isArabicLetter = function(I) {
    return typeof I == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(I);
  }, h = n.__arabicParser__.isArabicEndLetter = function(I) {
    return u(I) && o(I) && t[I.charCodeAt(0)].length <= 2;
  }, f = n.__arabicParser__.isArabicAlfLetter = function(I) {
    return u(I) && s.indexOf(I.charCodeAt(0)) >= 0;
  };
  n.__arabicParser__.arabicLetterHasIsolatedForm = function(I) {
    return u(I) && o(I) && t[I.charCodeAt(0)].length >= 1;
  };
  var g = n.__arabicParser__.arabicLetterHasFinalForm = function(I) {
    return u(I) && o(I) && t[I.charCodeAt(0)].length >= 2;
  };
  n.__arabicParser__.arabicLetterHasInitialForm = function(I) {
    return u(I) && o(I) && t[I.charCodeAt(0)].length >= 3;
  };
  var b = n.__arabicParser__.arabicLetterHasMedialForm = function(I) {
    return u(I) && o(I) && t[I.charCodeAt(0)].length == 4;
  }, x = n.__arabicParser__.resolveLigatures = function(I) {
    var R = 0, _ = r, E = "", X = 0;
    for (R = 0; R < I.length; R += 1) _[I.charCodeAt(R)] !== void 0 ? (X++, typeof (_ = _[I.charCodeAt(R)]) == "number" && (E += String.fromCharCode(_), _ = r, X = 0), R === I.length - 1 && (_ = r, E += I.charAt(R - (X - 1)), R -= X - 1, X = 0)) : (_ = r, E += I.charAt(R - X), R -= X, X = 0);
    return E;
  };
  n.__arabicParser__.isArabicDiacritic = function(I) {
    return I !== void 0 && i[I.charCodeAt(0)] !== void 0;
  };
  var S = n.__arabicParser__.getCorrectForm = function(I, R, _) {
    return u(I) ? o(I) === !1 ? -1 : !g(I) || !u(R) && !u(_) || !u(_) && h(R) || h(I) && !u(R) || h(I) && f(R) || h(I) && h(R) ? 0 : b(I) && u(R) && !h(R) && u(_) && g(_) ? 3 : h(I) || !u(_) ? 1 : 2 : -1;
  }, p = function(I) {
    var R = 0, _ = 0, E = 0, X = "", ot = "", ut = "", wt = (I = I || "").split("\\s+"), tt = [];
    for (R = 0; R < wt.length; R += 1) {
      for (tt.push(""), _ = 0; _ < wt[R].length; _ += 1) X = wt[R][_], ot = wt[R][_ - 1], ut = wt[R][_ + 1], u(X) ? (E = S(X, ot, ut), tt[R] += E !== -1 ? String.fromCharCode(t[X.charCodeAt(0)][E]) : X) : tt[R] += X;
      tt[R] = x(tt[R]);
    }
    return tt.join(" ");
  }, O = n.__arabicParser__.processArabic = n.processArabic = function() {
    var I, R = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, _ = [];
    if (Array.isArray(R)) {
      var E = 0;
      for (_ = [], E = 0; E < R.length; E += 1) Array.isArray(R[E]) ? _.push([p(R[E][0]), R[E][1], R[E][2]]) : _.push([p(R[E])]);
      I = _;
    } else I = p(R);
    return typeof arguments[0] == "string" ? I : (arguments[0].text = I, arguments[0]);
  };
  n.events.push(["preProcessText", O]);
}(zt.API), zt.API.autoPrint = function(n) {
  var t;
  switch ((n = n || {}).variant = n.variant || "non-conform", n.variant) {
    case "javascript":
      this.addJS("print({});");
      break;
    case "non-conform":
    default:
      this.internal.events.subscribe("postPutResources", function() {
        t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + t + " 0 R");
      });
  }
  return this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function() {
    var r = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return r;
    }, set: function(h) {
      r = h;
    } });
    var i = 150;
    Object.defineProperty(this, "width", { get: function() {
      return i;
    }, set: function(h) {
      i = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = i + 1);
    } });
    var s = 300;
    Object.defineProperty(this, "height", { get: function() {
      return s;
    }, set: function(h) {
      s = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = s + 1);
    } });
    var o = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return o;
    }, set: function(h) {
      o = h;
    } });
    var u = {};
    Object.defineProperty(this, "style", { get: function() {
      return u;
    }, set: function(h) {
      u = h;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  t.prototype.getContext = function(r, i) {
    var s;
    if ((r = r || "2d") !== "2d") return null;
    for (s in i) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = i[s]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, t.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, n.events.push(["initialized", function() {
    this.canvas = new t(), this.canvas.pdf = this;
  }]);
}(zt.API), function(n) {
  var t = { left: 0, top: 0, bottom: 0, right: 0 }, r = !1, i = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
  }, s = function() {
    this.internal.__cell__.lastCell = new o(), this.internal.__cell__.pages = 1;
  }, o = function() {
    var f = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return f;
    }, set: function(I) {
      f = I;
    } });
    var g = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return g;
    }, set: function(I) {
      g = I;
    } });
    var b = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return b;
    }, set: function(I) {
      b = I;
    } });
    var x = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return x;
    }, set: function(I) {
      x = I;
    } });
    var S = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return S;
    }, set: function(I) {
      S = I;
    } });
    var p = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return p;
    }, set: function(I) {
      p = I;
    } });
    var O = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return O;
    }, set: function(I) {
      O = I;
    } }), this;
  };
  o.prototype.clone = function() {
    return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, o.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, n.setHeaderFunction = function(f) {
    return i.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, n.getTextDimensions = function(f, g) {
    i.call(this);
    var b = (g = g || {}).fontSize || this.getFontSize(), x = g.font || this.getFont(), S = g.scaleFactor || this.internal.scaleFactor, p = 0, O = 0, I = 0, R = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var _ = g.maxWidth;
    _ > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, _) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(X, ot) {
      return X.concat(R.splitTextToSize(ot, _));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var E = 0; E < f.length; E++) p < (I = this.getStringUnitWidth(f[E], { font: x }) * b) && (p = I);
    return p !== 0 && (O = f.length), { w: p /= S, h: Math.max((O * b * this.getLineHeightFactor() - b * (this.getLineHeightFactor() - 1)) / S, 0) };
  }, n.cellAddPage = function() {
    i.call(this), this.addPage();
    var f = this.internal.__cell__.margins || t;
    return this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var u = n.cell = function() {
    var f;
    f = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), i.call(this);
    var g = this.internal.__cell__.lastCell, b = this.internal.__cell__.padding, x = this.internal.__cell__.margins || t, S = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === f.lineNumber ? (f.x = (g.x || 0) + (g.width || 0), f.y = g.y || 0) : g.y + g.height + f.height + x.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = x.top, p && S && (this.printHeaderRow(f.lineNumber, !0), f.y += S[0].height)) : f.y = g.y + g.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, r === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - b, f.y + b, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + b, { align: "center", baseline: "top", maxWidth: f.width - b - b }) : this.text(f.text, f.x + b, f.y + b, { align: "left", baseline: "top", maxWidth: f.width - b - b })), this.internal.__cell__.lastCell = f, this;
  };
  n.table = function(f, g, b, x, S) {
    if (i.call(this), !b) throw new Error("No data for PDF table.");
    var p, O, I, R, _ = [], E = [], X = [], ot = {}, ut = {}, wt = [], tt = [], D = (S = S || {}).autoSize || !1, gt = S.printHeaders !== !1, dt = S.css && S.css["font-size"] !== void 0 ? 16 * S.css["font-size"] : S.fontSize || 12, F = S.margins || Object.assign({ width: this.getPageWidth() }, t), P = typeof S.padding == "number" ? S.padding : 3, z = S.headerBackgroundColor || "#c8c8c8", q = S.headerTextColor || "#000";
    if (s.call(this), this.internal.__cell__.printHeaders = gt, this.internal.__cell__.margins = F, this.internal.__cell__.table_font_size = dt, this.internal.__cell__.padding = P, this.internal.__cell__.headerBackgroundColor = z, this.internal.__cell__.headerTextColor = q, this.setFontSize(dt), x == null) E = _ = Object.keys(b[0]), X = _.map(function() {
      return "left";
    });
    else if (Array.isArray(x) && fe(x[0]) === "object") for (_ = x.map(function(ht) {
      return ht.name;
    }), E = x.map(function(ht) {
      return ht.prompt || ht.name || "";
    }), X = x.map(function(ht) {
      return ht.align || "left";
    }), p = 0; p < x.length; p += 1) ut[x[p].name] = x[p].width * (19.049976 / 25.4);
    else Array.isArray(x) && typeof x[0] == "string" && (E = _ = x, X = _.map(function() {
      return "left";
    }));
    if (D || Array.isArray(x) && typeof x[0] == "string") for (p = 0; p < _.length; p += 1) {
      for (ot[R = _[p]] = b.map(function(ht) {
        return ht[R];
      }), this.setFont(void 0, "bold"), wt.push(this.getTextDimensions(E[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), O = ot[R], this.setFont(void 0, "normal"), I = 0; I < O.length; I += 1) wt.push(this.getTextDimensions(O[I], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      ut[R] = Math.max.apply(null, wt) + P + P, wt = [];
    }
    if (gt) {
      var at = {};
      for (p = 0; p < _.length; p += 1) at[_[p]] = {}, at[_[p]].text = E[p], at[_[p]].align = X[p];
      var nt = h.call(this, at, ut);
      tt = _.map(function(ht) {
        return new o(f, g, ut[ht], nt, at[ht].text, void 0, at[ht].align);
      }), this.setTableHeaderRow(tt), this.printHeaderRow(1, !1);
    }
    var lt = x.reduce(function(ht, kt) {
      return ht[kt.name] = kt.align, ht;
    }, {});
    for (p = 0; p < b.length; p += 1) {
      "rowStart" in S && S.rowStart instanceof Function && S.rowStart({ row: p, data: b[p] }, this);
      var Z = h.call(this, b[p], ut);
      for (I = 0; I < _.length; I += 1) {
        var ft = b[p][_[I]];
        "cellStart" in S && S.cellStart instanceof Function && S.cellStart({ row: p, col: I, data: ft }, this), u.call(this, new o(f, g, ut[_[I]], Z, ft, p + 2, lt[_[I]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = g, this;
  };
  var h = function(f, g) {
    var b = this.internal.__cell__.padding, x = this.internal.__cell__.table_font_size, S = this.internal.scaleFactor;
    return Object.keys(f).map(function(p) {
      var O = f[p];
      return this.splitTextToSize(O.hasOwnProperty("text") ? O.text : O, g[p] - b - b);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * x / S + b + b;
    }, this).reduce(function(p, O) {
      return Math.max(p, O);
    }, 0);
  };
  n.setTableHeaderRow = function(f) {
    i.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, n.printHeaderRow = function(f, g) {
    if (i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var b;
    if (r = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var x = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o(x[0], x[1], x[2], x[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var S = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      b = this.internal.__cell__.tableHeaderRow[p].clone(), g && (b.y = this.internal.__cell__.margins.top || 0, S.push(b)), b.lineNumber = f;
      var O = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), u.call(this, b), this.setTextColor(O);
    }
    S.length > 0 && this.setTableHeaderRow(S), this.setFont(void 0, "normal"), r = !1;
  };
}(zt.API);
var tu = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, eu = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Ps = Qc(eu), nu = [100, 200, 300, 400, 500, 600, 700, 800, 900], Fl = Qc(nu);
function ks(n) {
  var t = n.family.replace(/"|'/g, "").toLowerCase(), r = function(o) {
    return tu[o = o || "normal"] ? o : "normal";
  }(n.style), i = function(o) {
    if (!o) return 400;
    if (typeof o == "number") return o >= 100 && o <= 900 && o % 100 == 0 ? o : 400;
    if (/^\d00$/.test(o)) return parseInt(o);
    switch (o) {
      case "bold":
        return 700;
      case "normal":
      default:
        return 400;
    }
  }(n.weight), s = function(o) {
    return typeof Ps[o = o || "normal"] == "number" ? o : "normal";
  }(n.stretch);
  return { family: t, style: r, weight: i, stretch: s, src: n.src || [], ref: n.ref || { name: t, style: [s, r, i].join(" ") } };
}
function Ac(n, t, r, i) {
  var s;
  for (s = r; s >= 0 && s < t.length; s += i) if (n[t[s]]) return n[t[s]];
  for (s = r; s >= 0 && s < t.length; s -= i) if (n[t[s]]) return n[t[s]];
}
var Il = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, Nc = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function Sc(n) {
  return [n.stretch, n.style, n.weight, n.family].join(" ");
}
function Cl(n, t, r) {
  for (var i = (r = r || {}).defaultFontFamily || "times", s = Object.assign({}, Il, r.genericFontFamilies || {}), o = null, u = null, h = 0; h < t.length; ++h) if (s[(o = ks(t[h])).family] && (o.family = s[o.family]), n.hasOwnProperty(o.family)) {
    u = n[o.family];
    break;
  }
  if (!(u = u || n[i])) throw new Error("Could not find a font-family for the rule '" + Sc(o) + "' and default family '" + i + "'.");
  if (u = function(f, g) {
    if (g[f]) return g[f];
    var b = Ps[f], x = b <= Ps.normal ? -1 : 1, S = Ac(g, eu, b, x);
    if (!S) throw new Error("Could not find a matching font-stretch value for " + f);
    return S;
  }(o.stretch, u), u = function(f, g) {
    if (g[f]) return g[f];
    for (var b = tu[f], x = 0; x < b.length; ++x) if (g[b[x]]) return g[b[x]];
    throw new Error("Could not find a matching font-style for " + f);
  }(o.style, u), !(u = function(f, g) {
    if (g[f]) return g[f];
    if (f === 400 && g[500]) return g[500];
    if (f === 500 && g[400]) return g[400];
    var b = Fl[f], x = Ac(g, nu, b, f < 400 ? -1 : 1);
    if (!x) throw new Error("Could not find a matching font-weight for value " + f);
    return x;
  }(o.weight, u))) throw new Error("Failed to resolve a font for the rule '" + Sc(o) + "'.");
  return u;
}
function _c(n) {
  return n.trimLeft();
}
function jl(n, t) {
  for (var r = 0; r < n.length; ) {
    if (n.charAt(r) === t) return [n.substring(0, r), n.substring(r + 1)];
    r += 1;
  }
  return null;
}
function Ol(n) {
  var t = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return t === null ? null : [t[0], n.substring(t[0].length)];
}
var eo, Pc, kc, ps = ["times"];
(function(n) {
  var t, r, i, s, o, u, h, f, g, b = function(L) {
    return L = L || {}, this.isStrokeTransparent = L.isStrokeTransparent || !1, this.strokeOpacity = L.strokeOpacity || 1, this.strokeStyle = L.strokeStyle || "#000000", this.fillStyle = L.fillStyle || "#000000", this.isFillTransparent = L.isFillTransparent || !1, this.fillOpacity = L.fillOpacity || 1, this.font = L.font || "10px sans-serif", this.textBaseline = L.textBaseline || "alphabetic", this.textAlign = L.textAlign || "left", this.lineWidth = L.lineWidth || 1, this.lineJoin = L.lineJoin || "miter", this.lineCap = L.lineCap || "butt", this.path = L.path || [], this.transform = L.transform !== void 0 ? L.transform.clone() : new f(), this.globalCompositeOperation = L.globalCompositeOperation || "normal", this.globalAlpha = L.globalAlpha || 1, this.clip_path = L.clip_path || [], this.currentPoint = L.currentPoint || new u(), this.miterLimit = L.miterLimit || 10, this.lastPoint = L.lastPoint || new u(), this.lineDashOffset = L.lineDashOffset || 0, this.lineDash = L.lineDash || [], this.margin = L.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = L.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof L.ignoreClearRect != "boolean" || L.ignoreClearRect, this;
  };
  n.events.push(["initialized", function() {
    this.context2d = new x(this), t = this.internal.f2, r = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, u = this.internal.Point, h = this.internal.Rectangle, f = this.internal.Matrix, g = new b();
  }]);
  var x = function(L) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var j = L;
    Object.defineProperty(this, "pdf", { get: function() {
      return j;
    } });
    var M = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return M;
    }, set: function(ct) {
      M = !!ct;
    } });
    var W = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return W;
    }, set: function(ct) {
      W = !!ct;
    } });
    var Y = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return Y;
    }, set: function(ct) {
      isNaN(ct) || (Y = ct);
    } });
    var Q = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return Q;
    }, set: function(ct) {
      isNaN(ct) || (Q = ct);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(ct) {
      var B;
      typeof ct == "number" ? B = [ct, ct, ct, ct] : ((B = new Array(4))[0] = ct[0], B[1] = ct.length >= 2 ? ct[1] : B[0], B[2] = ct.length >= 3 ? ct[2] : B[0], B[3] = ct.length >= 4 ? ct[3] : B[1]), g.margin = B;
    } });
    var et = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return et;
    }, set: function(ct) {
      et = ct;
    } });
    var rt = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return rt;
    }, set: function(ct) {
      rt = ct;
    } });
    var At = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return At;
    }, set: function(ct) {
      At = ct;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(ct) {
      ct instanceof b && (g = ct);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(ct) {
      g.path = ct;
    } });
    var xt = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return xt;
    }, set: function(ct) {
      xt = ct;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(ct) {
      var B;
      B = S(ct), this.ctx.fillStyle = B.style, this.ctx.isFillTransparent = B.a === 0, this.ctx.fillOpacity = B.a, this.pdf.setFillColor(B.r, B.g, B.b, { a: B.a }), this.pdf.setTextColor(B.r, B.g, B.b, { a: B.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(ct) {
      var B = S(ct);
      this.ctx.strokeStyle = B.style, this.ctx.isStrokeTransparent = B.a === 0, this.ctx.strokeOpacity = B.a, B.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (B.a, this.pdf.setDrawColor(B.r, B.g, B.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(ct) {
      ["butt", "round", "square"].indexOf(ct) !== -1 && (this.ctx.lineCap = ct, this.pdf.setLineCap(ct));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(ct) {
      isNaN(ct) || (this.ctx.lineWidth = ct, this.pdf.setLineWidth(ct));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(ct) {
      ["bevel", "round", "miter"].indexOf(ct) !== -1 && (this.ctx.lineJoin = ct, this.pdf.setLineJoin(ct));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(ct) {
      isNaN(ct) || (this.ctx.miterLimit = ct, this.pdf.setMiterLimit(ct));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(ct) {
      this.ctx.textBaseline = ct;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(ct) {
      ["right", "end", "center", "left", "start"].indexOf(ct) !== -1 && (this.ctx.textAlign = ct);
    } });
    var Ct = null;
    function Et(ct, B) {
      if (Ct === null) {
        var Xt = function(Bt) {
          var Lt = [];
          return Object.keys(Bt).forEach(function(Nt) {
            Bt[Nt].forEach(function(Ft) {
              var Pt = null;
              switch (Ft) {
                case "bold":
                  Pt = { family: Nt, weight: "bold" };
                  break;
                case "italic":
                  Pt = { family: Nt, style: "italic" };
                  break;
                case "bolditalic":
                  Pt = { family: Nt, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  Pt = { family: Nt };
              }
              Pt !== null && (Pt.ref = { name: Nt, style: Ft }, Lt.push(Pt));
            });
          }), Lt;
        }(ct.getFontList());
        Ct = function(Bt) {
          for (var Lt = {}, Nt = 0; Nt < Bt.length; ++Nt) {
            var Ft = ks(Bt[Nt]), Pt = Ft.family, Rt = Ft.stretch, Gt = Ft.style, Zt = Ft.weight;
            Lt[Pt] = Lt[Pt] || {}, Lt[Pt][Rt] = Lt[Pt][Rt] || {}, Lt[Pt][Rt][Gt] = Lt[Pt][Rt][Gt] || {}, Lt[Pt][Rt][Gt][Zt] = Ft;
          }
          return Lt;
        }(Xt.concat(B));
      }
      return Ct;
    }
    var Ut = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Ut;
    }, set: function(ct) {
      Ct = null, Ut = ct;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(ct) {
      var B;
      if (this.ctx.font = ct, (B = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ct)) !== null) {
        var Xt = B[1], Bt = (B[2], B[3]), Lt = B[4], Nt = (B[5], B[6]), Ft = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Lt)[2];
        Lt = Math.floor(Ft === "px" ? parseFloat(Lt) * this.pdf.internal.scaleFactor : Ft === "em" ? parseFloat(Lt) * this.pdf.getFontSize() : parseFloat(Lt) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Lt);
        var Pt = function(Wt) {
          var ee, It, Ve = [], oe = Wt.trim();
          if (oe === "") return ps;
          if (oe in Nc) return [Nc[oe]];
          for (; oe !== ""; ) {
            switch (It = null, ee = (oe = _c(oe)).charAt(0)) {
              case '"':
              case "'":
                It = jl(oe.substring(1), ee);
                break;
              default:
                It = Ol(oe);
            }
            if (It === null || (Ve.push(It[0]), (oe = _c(It[1])) !== "" && oe.charAt(0) !== ",")) return ps;
            oe = oe.replace(/^,/, "");
          }
          return Ve;
        }(Nt);
        if (this.fontFaces) {
          var Rt = Cl(Et(this.pdf, this.fontFaces), Pt.map(function(Wt) {
            return { family: Wt, stretch: "normal", weight: Bt, style: Xt };
          }));
          this.pdf.setFont(Rt.ref.name, Rt.ref.style);
        } else {
          var Gt = "";
          (Bt === "bold" || parseInt(Bt, 10) >= 700 || Xt === "bold") && (Gt = "bold"), Xt === "italic" && (Gt += "italic"), Gt.length === 0 && (Gt = "normal");
          for (var Zt = "", te = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, ie = 0; ie < Pt.length; ie++) {
            if (this.pdf.internal.getFont(Pt[ie], Gt, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              Zt = Pt[ie];
              break;
            }
            if (Gt === "bolditalic" && this.pdf.internal.getFont(Pt[ie], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) Zt = Pt[ie], Gt = "bold";
            else if (this.pdf.internal.getFont(Pt[ie], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              Zt = Pt[ie], Gt = "normal";
              break;
            }
          }
          if (Zt === "") {
            for (var de = 0; de < Pt.length; de++) if (te[Pt[de]]) {
              Zt = te[Pt[de]];
              break;
            }
          }
          Zt = Zt === "" ? "Times" : Zt, this.pdf.setFont(Zt, Gt);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(ct) {
      this.ctx.globalCompositeOperation = ct;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(ct) {
      this.ctx.globalAlpha = ct;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(ct) {
      this.ctx.lineDashOffset = ct, kt.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(ct) {
      this.ctx.lineDash = ct, kt.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(ct) {
      this.ctx.ignoreClearRect = !!ct;
    } });
  };
  x.prototype.setLineDash = function(L) {
    this.lineDash = L;
  }, x.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, x.prototype.fill = function() {
    ot.call(this, "fill", !1);
  }, x.prototype.stroke = function() {
    ot.call(this, "stroke", !1);
  }, x.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, x.prototype.moveTo = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var M = this.ctx.transform.applyToPoint(new u(L, j));
    this.path.push({ type: "mt", x: M.x, y: M.y }), this.ctx.lastPoint = new u(L, j);
  }, x.prototype.closePath = function() {
    var L = new u(0, 0), j = 0;
    for (j = this.path.length - 1; j !== -1; j--) if (this.path[j].type === "begin" && fe(this.path[j + 1]) === "object" && typeof this.path[j + 1].x == "number") {
      L = new u(this.path[j + 1].x, this.path[j + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new u(L.x, L.y);
  }, x.prototype.lineTo = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var M = this.ctx.transform.applyToPoint(new u(L, j));
    this.path.push({ type: "lt", x: M.x, y: M.y }), this.ctx.lastPoint = new u(M.x, M.y);
  }, x.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), ot.call(this, null, !0);
  }, x.prototype.quadraticCurveTo = function(L, j, M, W) {
    if (isNaN(M) || isNaN(W) || isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var Y = this.ctx.transform.applyToPoint(new u(M, W)), Q = this.ctx.transform.applyToPoint(new u(L, j));
    this.path.push({ type: "qct", x1: Q.x, y1: Q.y, x: Y.x, y: Y.y }), this.ctx.lastPoint = new u(Y.x, Y.y);
  }, x.prototype.bezierCurveTo = function(L, j, M, W, Y, Q) {
    if (isNaN(Y) || isNaN(Q) || isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var et = this.ctx.transform.applyToPoint(new u(Y, Q)), rt = this.ctx.transform.applyToPoint(new u(L, j)), At = this.ctx.transform.applyToPoint(new u(M, W));
    this.path.push({ type: "bct", x1: rt.x, y1: rt.y, x2: At.x, y2: At.y, x: et.x, y: et.y }), this.ctx.lastPoint = new u(et.x, et.y);
  }, x.prototype.arc = function(L, j, M, W, Y, Q) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W) || isNaN(Y)) throw ve.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (Q = !!Q, !this.ctx.transform.isIdentity) {
      var et = this.ctx.transform.applyToPoint(new u(L, j));
      L = et.x, j = et.y;
      var rt = this.ctx.transform.applyToPoint(new u(0, M)), At = this.ctx.transform.applyToPoint(new u(0, 0));
      M = Math.sqrt(Math.pow(rt.x - At.x, 2) + Math.pow(rt.y - At.y, 2));
    }
    Math.abs(Y - W) >= 2 * Math.PI && (W = 0, Y = 2 * Math.PI), this.path.push({ type: "arc", x: L, y: j, radius: M, startAngle: W, endAngle: Y, counterclockwise: Q });
  }, x.prototype.arcTo = function(L, j, M, W, Y) {
    throw new Error("arcTo not implemented.");
  }, x.prototype.rect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(L, j), this.lineTo(L + M, j), this.lineTo(L + M, j + W), this.lineTo(L, j + W), this.lineTo(L, j), this.lineTo(L + M, j), this.lineTo(L, j);
  }, x.prototype.fillRect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var Y = {};
      this.lineCap !== "butt" && (Y.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Y.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(L, j, M, W), this.fill(), Y.hasOwnProperty("lineCap") && (this.lineCap = Y.lineCap), Y.hasOwnProperty("lineJoin") && (this.lineJoin = Y.lineJoin);
    }
  }, x.prototype.strokeRect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    O.call(this) || (this.beginPath(), this.rect(L, j, M, W), this.stroke());
  }, x.prototype.clearRect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(L, j, M, W));
  }, x.prototype.save = function(L) {
    L = typeof L != "boolean" || L;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, M = 0; M < this.pdf.internal.getNumberOfPages(); M++) this.pdf.setPage(M + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(j), L) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var W = new b(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = W;
    }
  }, x.prototype.restore = function(L) {
    L = typeof L != "boolean" || L;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, M = 0; M < this.pdf.internal.getNumberOfPages(); M++) this.pdf.setPage(M + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(j), L && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, x.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var S = function(L) {
    var j, M, W, Y;
    if (L.isCanvasGradient === !0 && (L = L.getColor()), !L) return { r: 0, g: 0, b: 0, a: 0, style: L };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L)) j = 0, M = 0, W = 0, Y = 0;
    else {
      var Q = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);
      if (Q !== null) j = parseInt(Q[1]), M = parseInt(Q[2]), W = parseInt(Q[3]), Y = 1;
      else if ((Q = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L)) !== null) j = parseInt(Q[1]), M = parseInt(Q[2]), W = parseInt(Q[3]), Y = parseFloat(Q[4]);
      else {
        if (Y = 1, typeof L == "string" && L.charAt(0) !== "#") {
          var et = new Yc(L);
          L = et.ok ? et.toHex() : "#000000";
        }
        L.length === 4 ? (j = L.substring(1, 2), j += j, M = L.substring(2, 3), M += M, W = L.substring(3, 4), W += W) : (j = L.substring(1, 3), M = L.substring(3, 5), W = L.substring(5, 7)), j = parseInt(j, 16), M = parseInt(M, 16), W = parseInt(W, 16);
      }
    }
    return { r: j, g: M, b: W, a: Y, style: L };
  }, p = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, O = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  x.prototype.fillText = function(L, j, M, W) {
    if (isNaN(j) || isNaN(M) || typeof L != "string") throw ve.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (W = isNaN(W) ? void 0 : W, !p.call(this)) {
      var Y = Z(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
      P.call(this, { text: L, x: j, y: M, scale: Q, angle: Y, align: this.textAlign, maxWidth: W });
    }
  }, x.prototype.strokeText = function(L, j, M, W) {
    if (isNaN(j) || isNaN(M) || typeof L != "string") throw ve.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!O.call(this)) {
      W = isNaN(W) ? void 0 : W;
      var Y = Z(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
      P.call(this, { text: L, x: j, y: M, scale: Q, renderingMode: "stroke", angle: Y, align: this.textAlign, maxWidth: W });
    }
  }, x.prototype.measureText = function(L) {
    if (typeof L != "string") throw ve.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var j = this.pdf, M = this.pdf.internal.scaleFactor, W = j.internal.getFontSize(), Y = j.getStringUnitWidth(L) * W / j.internal.scaleFactor, Q = function(et) {
      var rt = (et = et || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return rt;
      } }), this;
    };
    return new Q({ width: Y *= Math.round(96 * M / 72 * 1e4) / 1e4 });
  }, x.prototype.scale = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var M = new f(L, 0, 0, j, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(M);
  }, x.prototype.rotate = function(L) {
    if (isNaN(L)) throw ve.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var j = new f(Math.cos(L), Math.sin(L), -Math.sin(L), Math.cos(L), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(j);
  }, x.prototype.translate = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var M = new f(1, 0, 0, 1, L, j);
    this.ctx.transform = this.ctx.transform.multiply(M);
  }, x.prototype.transform = function(L, j, M, W, Y, Q) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W) || isNaN(Y) || isNaN(Q)) throw ve.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var et = new f(L, j, M, W, Y, Q);
    this.ctx.transform = this.ctx.transform.multiply(et);
  }, x.prototype.setTransform = function(L, j, M, W, Y, Q) {
    L = isNaN(L) ? 1 : L, j = isNaN(j) ? 0 : j, M = isNaN(M) ? 0 : M, W = isNaN(W) ? 1 : W, Y = isNaN(Y) ? 0 : Y, Q = isNaN(Q) ? 0 : Q, this.ctx.transform = new f(L, j, M, W, Y, Q);
  };
  var I = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  x.prototype.drawImage = function(L, j, M, W, Y, Q, et, rt, At) {
    var xt = this.pdf.getImageProperties(L), Ct = 1, Et = 1, Ut = 1, ct = 1;
    W !== void 0 && rt !== void 0 && (Ut = rt / W, ct = At / Y, Ct = xt.width / W * rt / W, Et = xt.height / Y * At / Y), Q === void 0 && (Q = j, et = M, j = 0, M = 0), W !== void 0 && rt === void 0 && (rt = W, At = Y), W === void 0 && rt === void 0 && (rt = xt.width, At = xt.height);
    for (var B, Xt = this.ctx.transform.decompose(), Bt = Z(Xt.rotate.shx), Lt = new f(), Nt = (Lt = (Lt = (Lt = Lt.multiply(Xt.translate)).multiply(Xt.skew)).multiply(Xt.scale)).applyToRectangle(new h(Q - j * Ut, et - M * ct, W * Ct, Y * Et)), Ft = R.call(this, Nt), Pt = [], Rt = 0; Rt < Ft.length; Rt += 1) Pt.indexOf(Ft[Rt]) === -1 && Pt.push(Ft[Rt]);
    if (X(Pt), this.autoPaging) for (var Gt = Pt[0], Zt = Pt[Pt.length - 1], te = Gt; te < Zt + 1; te++) {
      this.pdf.setPage(te);
      var ie = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], de = te === 1 ? this.posY + this.margin[0] : this.margin[0], Wt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ee = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], It = te === 1 ? 0 : Wt + (te - 2) * ee;
      if (this.ctx.clip_path.length !== 0) {
        var Ve = this.path;
        B = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = E(B, this.posX + this.margin[3], -It + de + this.ctx.prevPageLastElemOffset), ut.call(this, "fill", !0), this.path = Ve;
      }
      var oe = JSON.parse(JSON.stringify(Nt));
      oe = E([oe], this.posX + this.margin[3], -It + de + this.ctx.prevPageLastElemOffset)[0];
      var xn = (te > Gt || te < Zt) && I.call(this);
      xn && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ie, ee, null).clip().discardPath()), this.pdf.addImage(L, "JPEG", oe.x, oe.y, oe.w, oe.h, null, null, Bt), xn && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(L, "JPEG", Nt.x, Nt.y, Nt.w, Nt.h, null, null, Bt);
  };
  var R = function(L, j, M) {
    var W = [];
    j = j || this.pdf.internal.pageSize.width, M = M || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var Y = this.posY + this.ctx.prevPageLastElemOffset;
    switch (L.type) {
      default:
      case "mt":
      case "lt":
        W.push(Math.floor((L.y + Y) / M) + 1);
        break;
      case "arc":
        W.push(Math.floor((L.y + Y - L.radius) / M) + 1), W.push(Math.floor((L.y + Y + L.radius) / M) + 1);
        break;
      case "qct":
        var Q = ft(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x, L.y);
        W.push(Math.floor((Q.y + Y) / M) + 1), W.push(Math.floor((Q.y + Q.h + Y) / M) + 1);
        break;
      case "bct":
        var et = ht(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x2, L.y2, L.x, L.y);
        W.push(Math.floor((et.y + Y) / M) + 1), W.push(Math.floor((et.y + et.h + Y) / M) + 1);
        break;
      case "rect":
        W.push(Math.floor((L.y + Y) / M) + 1), W.push(Math.floor((L.y + L.h + Y) / M) + 1);
    }
    for (var rt = 0; rt < W.length; rt += 1) for (; this.pdf.internal.getNumberOfPages() < W[rt]; ) _.call(this);
    return W;
  }, _ = function() {
    var L = this.fillStyle, j = this.strokeStyle, M = this.font, W = this.lineCap, Y = this.lineWidth, Q = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = L, this.strokeStyle = j, this.font = M, this.lineCap = W, this.lineWidth = Y, this.lineJoin = Q;
  }, E = function(L, j, M) {
    for (var W = 0; W < L.length; W++) switch (L[W].type) {
      case "bct":
        L[W].x2 += j, L[W].y2 += M;
      case "qct":
        L[W].x1 += j, L[W].y1 += M;
      case "mt":
      case "lt":
      case "arc":
      default:
        L[W].x += j, L[W].y += M;
    }
    return L;
  }, X = function(L) {
    return L.sort(function(j, M) {
      return j - M;
    });
  }, ot = function(L, j) {
    for (var M, W, Y = this.fillStyle, Q = this.strokeStyle, et = this.lineCap, rt = this.lineWidth, At = Math.abs(rt * this.ctx.transform.scaleX), xt = this.lineJoin, Ct = JSON.parse(JSON.stringify(this.path)), Et = JSON.parse(JSON.stringify(this.path)), Ut = [], ct = 0; ct < Et.length; ct++) if (Et[ct].x !== void 0) for (var B = R.call(this, Et[ct]), Xt = 0; Xt < B.length; Xt += 1) Ut.indexOf(B[Xt]) === -1 && Ut.push(B[Xt]);
    for (var Bt = 0; Bt < Ut.length; Bt++) for (; this.pdf.internal.getNumberOfPages() < Ut[Bt]; ) _.call(this);
    if (X(Ut), this.autoPaging) for (var Lt = Ut[0], Nt = Ut[Ut.length - 1], Ft = Lt; Ft < Nt + 1; Ft++) {
      this.pdf.setPage(Ft), this.fillStyle = Y, this.strokeStyle = Q, this.lineCap = et, this.lineWidth = At, this.lineJoin = xt;
      var Pt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Rt = Ft === 1 ? this.posY + this.margin[0] : this.margin[0], Gt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Zt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], te = Ft === 1 ? 0 : Gt + (Ft - 2) * Zt;
      if (this.ctx.clip_path.length !== 0) {
        var ie = this.path;
        M = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = E(M, this.posX + this.margin[3], -te + Rt + this.ctx.prevPageLastElemOffset), ut.call(this, L, !0), this.path = ie;
      }
      if (W = JSON.parse(JSON.stringify(Ct)), this.path = E(W, this.posX + this.margin[3], -te + Rt + this.ctx.prevPageLastElemOffset), j === !1 || Ft === 0) {
        var de = (Ft > Lt || Ft < Nt) && I.call(this);
        de && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Pt, Zt, null).clip().discardPath()), ut.call(this, L, j), de && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = rt;
    }
    else this.lineWidth = At, ut.call(this, L, j), this.lineWidth = rt;
    this.path = Ct;
  }, ut = function(L, j) {
    if ((L !== "stroke" || j || !O.call(this)) && (L === "stroke" || j || !p.call(this))) {
      for (var M, W, Y = [], Q = this.path, et = 0; et < Q.length; et++) {
        var rt = Q[et];
        switch (rt.type) {
          case "begin":
            Y.push({ begin: !0 });
            break;
          case "close":
            Y.push({ close: !0 });
            break;
          case "mt":
            Y.push({ start: rt, deltas: [], abs: [] });
            break;
          case "lt":
            var At = Y.length;
            if (Q[et - 1] && !isNaN(Q[et - 1].x) && (M = [rt.x - Q[et - 1].x, rt.y - Q[et - 1].y], At > 0)) {
              for (; At >= 0; At--) if (Y[At - 1].close !== !0 && Y[At - 1].begin !== !0) {
                Y[At - 1].deltas.push(M), Y[At - 1].abs.push(rt);
                break;
              }
            }
            break;
          case "bct":
            M = [rt.x1 - Q[et - 1].x, rt.y1 - Q[et - 1].y, rt.x2 - Q[et - 1].x, rt.y2 - Q[et - 1].y, rt.x - Q[et - 1].x, rt.y - Q[et - 1].y], Y[Y.length - 1].deltas.push(M);
            break;
          case "qct":
            var xt = Q[et - 1].x + 2 / 3 * (rt.x1 - Q[et - 1].x), Ct = Q[et - 1].y + 2 / 3 * (rt.y1 - Q[et - 1].y), Et = rt.x + 2 / 3 * (rt.x1 - rt.x), Ut = rt.y + 2 / 3 * (rt.y1 - rt.y), ct = rt.x, B = rt.y;
            M = [xt - Q[et - 1].x, Ct - Q[et - 1].y, Et - Q[et - 1].x, Ut - Q[et - 1].y, ct - Q[et - 1].x, B - Q[et - 1].y], Y[Y.length - 1].deltas.push(M);
            break;
          case "arc":
            Y.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(Y[Y.length - 1].abs) && Y[Y.length - 1].abs.push(rt);
        }
      }
      W = j ? null : L === "stroke" ? "stroke" : "fill";
      for (var Xt = !1, Bt = 0; Bt < Y.length; Bt++) if (Y[Bt].arc) for (var Lt = Y[Bt].abs, Nt = 0; Nt < Lt.length; Nt++) {
        var Ft = Lt[Nt];
        Ft.type === "arc" ? D.call(this, Ft.x, Ft.y, Ft.radius, Ft.startAngle, Ft.endAngle, Ft.counterclockwise, void 0, j, !Xt) : z.call(this, Ft.x, Ft.y), Xt = !0;
      }
      else if (Y[Bt].close === !0) this.pdf.internal.out("h"), Xt = !1;
      else if (Y[Bt].begin !== !0) {
        var Pt = Y[Bt].start.x, Rt = Y[Bt].start.y;
        q.call(this, Y[Bt].deltas, Pt, Rt), Xt = !0;
      }
      W && gt.call(this, W), j && dt.call(this);
    }
  }, wt = function(L) {
    var j = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, M = j * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return L - M;
      case "top":
        return L + j - M;
      case "hanging":
        return L + j - 2 * M;
      case "middle":
        return L + j / 2 - M;
      case "ideographic":
        return L;
      case "alphabetic":
      default:
        return L;
    }
  }, tt = function(L) {
    return L + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  x.prototype.createLinearGradient = function() {
    var L = function() {
    };
    return L.colorStops = [], L.addColorStop = function(j, M) {
      this.colorStops.push([j, M]);
    }, L.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, L.isCanvasGradient = !0, L;
  }, x.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, x.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var D = function(L, j, M, W, Y, Q, et, rt, At) {
    for (var xt = nt.call(this, M, W, Y, Q), Ct = 0; Ct < xt.length; Ct++) {
      var Et = xt[Ct];
      Ct === 0 && (At ? F.call(this, Et.x1 + L, Et.y1 + j) : z.call(this, Et.x1 + L, Et.y1 + j)), at.call(this, L, j, Et.x2, Et.y2, Et.x3, Et.y3, Et.x4, Et.y4);
    }
    rt ? dt.call(this) : gt.call(this, et);
  }, gt = function(L) {
    switch (L) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, dt = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, F = function(L, j) {
    this.pdf.internal.out(r(L) + " " + i(j) + " m");
  }, P = function(L) {
    var j;
    switch (L.align) {
      case "right":
      case "end":
        j = "right";
        break;
      case "center":
        j = "center";
        break;
      case "left":
      case "start":
      default:
        j = "left";
    }
    var M = this.pdf.getTextDimensions(L.text), W = wt.call(this, L.y), Y = tt.call(this, W) - M.h, Q = this.ctx.transform.applyToPoint(new u(L.x, W)), et = this.ctx.transform.decompose(), rt = new f();
    rt = (rt = (rt = rt.multiply(et.translate)).multiply(et.skew)).multiply(et.scale);
    for (var At, xt, Ct, Et = this.ctx.transform.applyToRectangle(new h(L.x, W, M.w, M.h)), Ut = rt.applyToRectangle(new h(L.x, Y, M.w, M.h)), ct = R.call(this, Ut), B = [], Xt = 0; Xt < ct.length; Xt += 1) B.indexOf(ct[Xt]) === -1 && B.push(ct[Xt]);
    if (X(B), this.autoPaging) for (var Bt = B[0], Lt = B[B.length - 1], Nt = Bt; Nt < Lt + 1; Nt++) {
      this.pdf.setPage(Nt);
      var Ft = Nt === 1 ? this.posY + this.margin[0] : this.margin[0], Pt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Rt = this.pdf.internal.pageSize.height - this.margin[2], Gt = Rt - this.margin[0], Zt = this.pdf.internal.pageSize.width - this.margin[1], te = Zt - this.margin[3], ie = Nt === 1 ? 0 : Pt + (Nt - 2) * Gt;
      if (this.ctx.clip_path.length !== 0) {
        var de = this.path;
        At = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = E(At, this.posX + this.margin[3], -1 * ie + Ft), ut.call(this, "fill", !0), this.path = de;
      }
      var Wt = E([JSON.parse(JSON.stringify(Ut))], this.posX + this.margin[3], -ie + Ft + this.ctx.prevPageLastElemOffset)[0];
      L.scale >= 0.01 && (xt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(xt * L.scale), Ct = this.lineWidth, this.lineWidth = Ct * L.scale);
      var ee = this.autoPaging !== "text";
      if (ee || Wt.y + Wt.h <= Rt) {
        if (ee || Wt.y >= Ft && Wt.x <= Zt) {
          var It = ee ? L.text : this.pdf.splitTextToSize(L.text, L.maxWidth || Zt - Wt.x)[0], Ve = E([JSON.parse(JSON.stringify(Et))], this.posX + this.margin[3], -ie + Ft + this.ctx.prevPageLastElemOffset)[0], oe = ee && (Nt > Bt || Nt < Lt) && I.call(this);
          oe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], te, Gt, null).clip().discardPath()), this.pdf.text(It, Ve.x, Ve.y, { angle: L.angle, align: j, renderingMode: L.renderingMode }), oe && this.pdf.restoreGraphicsState();
        }
      } else Wt.y < Rt && (this.ctx.prevPageLastElemOffset += Rt - Wt.y);
      L.scale >= 0.01 && (this.pdf.setFontSize(xt), this.lineWidth = Ct);
    }
    else L.scale >= 0.01 && (xt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(xt * L.scale), Ct = this.lineWidth, this.lineWidth = Ct * L.scale), this.pdf.text(L.text, Q.x + this.posX, Q.y + this.posY, { angle: L.angle, align: j, renderingMode: L.renderingMode, maxWidth: L.maxWidth }), L.scale >= 0.01 && (this.pdf.setFontSize(xt), this.lineWidth = Ct);
  }, z = function(L, j, M, W) {
    M = M || 0, W = W || 0, this.pdf.internal.out(r(L + M) + " " + i(j + W) + " l");
  }, q = function(L, j, M) {
    return this.pdf.lines(L, j, M, null, null);
  }, at = function(L, j, M, W, Y, Q, et, rt) {
    this.pdf.internal.out([t(s(M + L)), t(o(W + j)), t(s(Y + L)), t(o(Q + j)), t(s(et + L)), t(o(rt + j)), "c"].join(" "));
  }, nt = function(L, j, M, W) {
    for (var Y = 2 * Math.PI, Q = Math.PI / 2; j > M; ) j -= Y;
    var et = Math.abs(M - j);
    et < Y && W && (et = Y - et);
    for (var rt = [], At = W ? -1 : 1, xt = j; et > 1e-5; ) {
      var Ct = xt + At * Math.min(et, Q);
      rt.push(lt.call(this, L, xt, Ct)), et -= Math.abs(Ct - xt), xt = Ct;
    }
    return rt;
  }, lt = function(L, j, M) {
    var W = (M - j) / 2, Y = L * Math.cos(W), Q = L * Math.sin(W), et = Y, rt = -Q, At = et * et + rt * rt, xt = At + et * Y + rt * Q, Ct = 4 / 3 * (Math.sqrt(2 * At * xt) - xt) / (et * Q - rt * Y), Et = et - Ct * rt, Ut = rt + Ct * et, ct = Et, B = -Ut, Xt = W + j, Bt = Math.cos(Xt), Lt = Math.sin(Xt);
    return { x1: L * Math.cos(j), y1: L * Math.sin(j), x2: Et * Bt - Ut * Lt, y2: Et * Lt + Ut * Bt, x3: ct * Bt - B * Lt, y3: ct * Lt + B * Bt, x4: L * Math.cos(M), y4: L * Math.sin(M) };
  }, Z = function(L) {
    return 180 * L / Math.PI;
  }, ft = function(L, j, M, W, Y, Q) {
    var et = L + 0.5 * (M - L), rt = j + 0.5 * (W - j), At = Y + 0.5 * (M - Y), xt = Q + 0.5 * (W - Q), Ct = Math.min(L, Y, et, At), Et = Math.max(L, Y, et, At), Ut = Math.min(j, Q, rt, xt), ct = Math.max(j, Q, rt, xt);
    return new h(Ct, Ut, Et - Ct, ct - Ut);
  }, ht = function(L, j, M, W, Y, Q, et, rt) {
    var At, xt, Ct, Et, Ut, ct, B, Xt, Bt, Lt, Nt, Ft, Pt, Rt, Gt = M - L, Zt = W - j, te = Y - M, ie = Q - W, de = et - Y, Wt = rt - Q;
    for (xt = 0; xt < 41; xt++) Bt = (B = (Ct = L + (At = xt / 40) * Gt) + At * ((Ut = M + At * te) - Ct)) + At * (Ut + At * (Y + At * de - Ut) - B), Lt = (Xt = (Et = j + At * Zt) + At * ((ct = W + At * ie) - Et)) + At * (ct + At * (Q + At * Wt - ct) - Xt), xt == 0 ? (Nt = Bt, Ft = Lt, Pt = Bt, Rt = Lt) : (Nt = Math.min(Nt, Bt), Ft = Math.min(Ft, Lt), Pt = Math.max(Pt, Bt), Rt = Math.max(Rt, Lt));
    return new h(Math.round(Nt), Math.round(Ft), Math.round(Pt - Nt), Math.round(Rt - Ft));
  }, kt = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var L, j, M = (L = this.ctx.lineDash, j = this.ctx.lineDashOffset, JSON.stringify({ lineDash: L, lineDashOffset: j }));
      this.prevLineDash !== M && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = M);
    }
  };
})(zt.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function(o) {
    var u, h, f, g, b, x, S, p, O, I;
    for (h = [], f = 0, g = (o += u = "\0\0\0\0".slice(o.length % 4 || 4)).length; g > f; f += 4) (b = (o.charCodeAt(f) << 24) + (o.charCodeAt(f + 1) << 16) + (o.charCodeAt(f + 2) << 8) + o.charCodeAt(f + 3)) !== 0 ? (x = (b = ((b = ((b = ((b = (b - (I = b % 85)) / 85) - (O = b % 85)) / 85) - (p = b % 85)) / 85) - (S = b % 85)) / 85) % 85, h.push(x + 33, S + 33, p + 33, O + 33, I + 33)) : h.push(122);
    return function(R, _) {
      for (var E = _; E > 0; E--) R.pop();
    }(h, u.length), String.fromCharCode.apply(String, h) + "~>";
  }, r = function(o) {
    var u, h, f, g, b, x = String, S = "length", p = 255, O = "charCodeAt", I = "slice", R = "replace";
    for (o[I](-2), o = o[I](0, -2)[R](/\s/g, "")[R]("z", "!!!!!"), f = [], g = 0, b = (o += u = "uuuuu"[I](o[S] % 5 || 5))[S]; b > g; g += 5) h = 52200625 * (o[O](g) - 33) + 614125 * (o[O](g + 1) - 33) + 7225 * (o[O](g + 2) - 33) + 85 * (o[O](g + 3) - 33) + (o[O](g + 4) - 33), f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
    return function(_, E) {
      for (var X = E; X > 0; X--) _.pop();
    }(f, u[S]), x.fromCharCode.apply(x, f);
  }, i = function(o) {
    var u = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), o.length % 2 && (o += "0"), u.test(o) === !1) return "";
    for (var h = "", f = 0; f < o.length; f += 2) h += String.fromCharCode("0x" + (o[f] + o[f + 1]));
    return h;
  }, s = function(o) {
    for (var u = new Uint8Array(o.length), h = o.length; h--; ) u[h] = o.charCodeAt(h);
    return o = (u = xs(u)).reduce(function(f, g) {
      return f + String.fromCharCode(g);
    }, "");
  };
  n.processDataByFilters = function(o, u) {
    var h = 0, f = o || "", g = [];
    for (typeof (u = u || []) == "string" && (u = [u]), h = 0; h < u.length; h += 1) switch (u[h]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        f = r(f), g.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        f = t(f), g.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        f = i(f), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(b) {
          return ("0" + b.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", g.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        f = s(f), g.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + u[h] + '" is not implemented');
    }
    return { data: f, reverseChain: g.reverse().join(" ") };
  };
}(zt.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.loadFile = function(t, r, i) {
    return function(s, o, u) {
      o = o !== !1, u = typeof u == "function" ? u : function() {
      };
      var h = void 0;
      try {
        h = function(f, g, b) {
          var x = new XMLHttpRequest(), S = 0, p = function(O) {
            var I = O.length, R = [], _ = String.fromCharCode;
            for (S = 0; S < I; S += 1) R.push(_(255 & O.charCodeAt(S)));
            return R.join("");
          };
          if (x.open("GET", f, !g), x.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (x.onload = function() {
            x.status === 200 ? b(p(this.responseText)) : b(void 0);
          }), x.send(null), g && x.status === 200) return p(x.responseText);
        }(s, o, u);
      } catch {
      }
      return h;
    }(t, r, i);
  }, n.loadImageFile = n.loadFile;
}(zt.API), function(n) {
  function t() {
    return (Ht.html2canvas ? Promise.resolve(Ht.html2canvas) : import("./html2canvas.esm-d2sM-0Wm.js")).catch(function(u) {
      return Promise.reject(new Error("Could not load html2canvas: " + u));
    }).then(function(u) {
      return u.default ? u.default : u;
    });
  }
  function r() {
    return (Ht.DOMPurify ? Promise.resolve(Ht.DOMPurify) : import("./purify.es-B7BPtUgm.js")).catch(function(u) {
      return Promise.reject(new Error("Could not load dompurify: " + u));
    }).then(function(u) {
      return u.default ? u.default : u;
    });
  }
  var i = function(u) {
    var h = fe(u);
    return h === "undefined" ? "undefined" : h === "string" || u instanceof String ? "string" : h === "number" || u instanceof Number ? "number" : h === "function" || u instanceof Function ? "function" : u && u.constructor === Array ? "array" : u && u.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, s = function(u, h) {
    var f = document.createElement(u);
    for (var g in h.className && (f.className = h.className), h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) f.style[g] = h.style[g];
    return f;
  }, o = function u(h) {
    var f = Object.assign(u.convert(Promise.resolve()), JSON.parse(JSON.stringify(u.template))), g = u.convert(Promise.resolve(), f);
    return g = (g = g.setProgress(1, u, 1, [u])).set(h);
  };
  (o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(u, h) {
    return u.__proto__ = h || o.prototype, u;
  }, o.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, o.prototype.from = function(u, h) {
    return this.then(function() {
      switch (h = h || function(f) {
        switch (i(f)) {
          case "string":
            return "string";
          case "element":
            return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(u)) {
        case "string":
          return this.then(r).then(function(f) {
            return this.set({ src: s("div", { innerHTML: u, dompurify: f }) });
          });
        case "element":
          return this.set({ src: u });
        case "canvas":
          return this.set({ canvas: u });
        case "img":
          return this.set({ img: u });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, o.prototype.to = function(u) {
    switch (u) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, o.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var u = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function f(g, b) {
        for (var x = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1), S = g.firstChild; S; S = S.nextSibling) b !== !0 && S.nodeType === 1 && S.nodeName === "SCRIPT" || x.appendChild(f(S, b));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (x.width = g.width, x.height = g.height, x.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (x.value = g.value), x.addEventListener("load", function() {
          x.scrollTop = g.scrollTop, x.scrollLeft = g.scrollLeft;
        }, !0)), x;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (u.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = s("div", { className: "html2pdf__container", style: u }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(s("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, o.prototype.toCanvas = function() {
    var u = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(u).then(t).then(function(h) {
      var f = Object.assign({}, this.opt.html2canvas);
      return delete f.onrendered, h(this.prop.container, f);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toContext2d = function() {
    var u = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(u).then(t).then(function(h) {
      var f = this.opt.jsPDF, g = this.opt.fontFaces, b = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, x = Object.assign({ async: !0, allowTaint: !0, scale: b, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete x.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = g, g) for (var S = 0; S < g.length; ++S) {
        var p = g[S], O = p.src.find(function(I) {
          return I.format === "truetype";
        });
        O && f.addFont(O.url, p.ref.name, p.ref.style);
      }
      return x.windowHeight = x.windowHeight || 0, x.windowHeight = x.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : x.windowHeight, f.context2d.save(!0), h(this.prop.container, x);
    }).then(function(h) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var u = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = u;
    });
  }, o.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, o.prototype.output = function(u, h, f) {
    return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(u, h) : this.outputPdf(u, h);
  }, o.prototype.outputPdf = function(u, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(u, h);
    });
  }, o.prototype.outputImg = function(u) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (u) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + u + '" is not supported.';
      }
    });
  }, o.prototype.save = function(u) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(u ? { filename: u } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, o.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, o.prototype.set = function(u) {
    if (i(u) !== "object") return this;
    var h = Object.keys(u || {}).map(function(f) {
      if (f in o.template.prop) return function() {
        this.prop[f] = u[f];
      };
      switch (f) {
        case "margin":
          return this.setMargin.bind(this, u.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = u.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, u.pageSize);
        default:
          return function() {
            this.opt[f] = u[f];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, o.prototype.get = function(u, h) {
    return this.then(function() {
      var f = u in o.template.prop ? this.prop[u] : this.opt[u];
      return h ? h(f) : f;
    });
  }, o.prototype.setMargin = function(u) {
    return this.then(function() {
      switch (i(u)) {
        case "number":
          u = [u, u, u, u];
        case "array":
          if (u.length === 2 && (u = [u[0], u[1], u[0], u[1]]), u.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = u;
    }).then(this.setPageSize);
  }, o.prototype.setPageSize = function(u) {
    function h(f, g) {
      return Math.floor(f * g / 72 * 96);
    }
    return this.then(function() {
      (u = u || zt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (u.inner = { width: u.width - this.opt.margin[1] - this.opt.margin[3], height: u.height - this.opt.margin[0] - this.opt.margin[2] }, u.inner.px = { width: h(u.inner.width, u.k), height: h(u.inner.height, u.k) }, u.inner.ratio = u.inner.height / u.inner.width), this.prop.pageSize = u;
    });
  }, o.prototype.setProgress = function(u, h, f, g) {
    return u != null && (this.progress.val = u), h != null && (this.progress.state = h), f != null && (this.progress.n = f), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, o.prototype.updateProgress = function(u, h, f, g) {
    return this.setProgress(u ? this.progress.val + u : null, h || null, f ? this.progress.n + f : null, g ? this.progress.stack.concat(g) : null);
  }, o.prototype.then = function(u, h) {
    var f = this;
    return this.thenCore(u, h, function(g, b) {
      return f.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(x) {
        return f.updateProgress(null, g), x;
      }).then(g, b).then(function(x) {
        return f.updateProgress(1), x;
      });
    });
  }, o.prototype.thenCore = function(u, h, f) {
    f = f || Promise.prototype.then, u && (u = u.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), b = f.call(g, u, h);
    return o.convert(b, this.__proto__);
  }, o.prototype.thenExternal = function(u, h) {
    return Promise.prototype.then.call(this, u, h);
  }, o.prototype.thenList = function(u) {
    var h = this;
    return u.forEach(function(f) {
      h = h.thenCore(f);
    }), h;
  }, o.prototype.catch = function(u) {
    u && (u = u.bind(this));
    var h = Promise.prototype.catch.call(this, u);
    return o.convert(h, this);
  }, o.prototype.catchExternal = function(u) {
    return Promise.prototype.catch.call(this, u);
  }, o.prototype.error = function(u) {
    return this.then(function() {
      throw new Error(u);
    });
  }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, zt.getPageSize = function(u, h, f) {
    if (fe(u) === "object") {
      var g = u;
      u = g.orientation, h = g.unit || h, f = g.format || f;
    }
    h = h || "mm", f = f || "a4", u = ("" + (u || "P")).toLowerCase();
    var b, x = ("" + f).toLowerCase(), S = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        b = 1;
        break;
      case "mm":
        b = 72 / 25.4;
        break;
      case "cm":
        b = 72 / 2.54;
        break;
      case "in":
        b = 72;
        break;
      case "px":
        b = 0.75;
        break;
      case "pc":
      case "em":
        b = 12;
        break;
      case "ex":
        b = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var p, O = 0, I = 0;
    if (S.hasOwnProperty(x)) O = S[x][1] / b, I = S[x][0] / b;
    else try {
      O = f[1], I = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (u === "p" || u === "portrait") u = "p", I > O && (p = I, I = O, O = p);
    else {
      if (u !== "l" && u !== "landscape") throw "Invalid orientation: " + u;
      u = "l", O > I && (p = I, I = O, O = p);
    }
    return { width: I, height: O, unit: h, k: b, orientation: u };
  }, n.html = function(u, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(ks) : null;
    var f = new o(h);
    return h.worker ? f : f.from(u).doCallback();
  };
}(zt.API), zt.API.addJS = function(n) {
  return kc = n, this.internal.events.subscribe("postPutResources", function() {
    eo = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (eo + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Pc = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + kc + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    eo !== void 0 && Pc !== void 0 && this.internal.out("/Names <</JavaScript " + eo + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t;
  n.events.push(["postPutResources", function() {
    var r = this, i = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var s = r.outline.render().split(/\r\n/), o = 0; o < s.length; o++) {
      var u = s[o], h = i.exec(u);
      if (h != null) {
        var f = h[1];
        r.internal.newObjectDeferredBegin(f, !1);
      }
      r.internal.write(u);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, b = [];
      for (o = 0; o < g; o++) {
        var x = r.internal.newObject();
        b.push(x);
        var S = r.internal.getPageInfo(o + 1);
        r.internal.write("<< /D[" + S.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = r.internal.newObject();
      for (r.internal.write("<< /Names [ "), o = 0; o < b.length; o++) r.internal.write("(page_" + (o + 1) + ")" + b[o] + " 0 R");
      r.internal.write(" ] >>", "endobj"), t = r.internal.newObject(), r.internal.write("<< /Dests " + p + " 0 R"), r.internal.write(">>", "endobj");
    }
  }]), n.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"));
  }]), n.events.push(["initialized", function() {
    var r = this;
    r.outline = { createNamedDestinations: !1, root: { children: [] } }, r.outline.add = function(i, s, o) {
      var u = { title: s, options: o, children: [] };
      return i == null && (i = this.root), i.children.push(u), u;
    }, r.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = r, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, r.outline.genIds_r = function(i) {
      i.id = r.internal.newObjectDeferred();
      for (var s = 0; s < i.children.length; s++) this.genIds_r(i.children[s]);
    }, r.outline.renderRoot = function(i) {
      this.objStart(i), this.line("/Type /Outlines"), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, i)), this.objEnd();
    }, r.outline.renderItems = function(i) {
      for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < i.children.length; o++) {
        var u = i.children[o];
        this.objStart(u), this.line("/Title " + this.makeString(u.title)), this.line("/Parent " + this.makeRef(i)), o > 0 && this.line("/Prev " + this.makeRef(i.children[o - 1])), o < i.children.length - 1 && this.line("/Next " + this.makeRef(i.children[o + 1])), u.children.length > 0 && (this.line("/First " + this.makeRef(u.children[0])), this.line("/Last " + this.makeRef(u.children[u.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, u);
        if (h > 0 && this.line("/Count " + h), u.options && u.options.pageNumber) {
          var f = r.internal.getPageInfo(u.options.pageNumber);
          this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + s(0) + " 0]");
        }
        this.objEnd();
      }
      for (var g = 0; g < i.children.length; g++) this.renderItems(i.children[g]);
    }, r.outline.line = function(i) {
      this.ctx.val += i + `\r
`;
    }, r.outline.makeRef = function(i) {
      return i.id + " 0 R";
    }, r.outline.makeString = function(i) {
      return "(" + r.internal.pdfEscape(i) + ")";
    }, r.outline.objStart = function(i) {
      this.ctx.val += `\r
` + i.id + ` 0 obj\r
<<\r
`;
    }, r.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, r.outline.count_r = function(i, s) {
      for (var o = 0; o < s.children.length; o++) i.count++, this.count_r(i, s.children[o]);
      return i.count;
    };
  }]);
}(zt.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = [192, 193, 194, 195, 196, 197, 198, 199];
  n.processJPEG = function(r, i, s, o, u, h) {
    var f, g = this.decode.DCT_DECODE, b = null;
    if (typeof r == "string" || this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) {
      switch (r = u || r, r = this.__addimage__.isArrayBuffer(r) ? new Uint8Array(r) : r, (f = function(x) {
        for (var S, p = 256 * x.charCodeAt(4) + x.charCodeAt(5), O = x.length, I = { width: 0, height: 0, numcomponents: 1 }, R = 4; R < O; R += 2) {
          if (R += p, t.indexOf(x.charCodeAt(R + 1)) !== -1) {
            S = 256 * x.charCodeAt(R + 5) + x.charCodeAt(R + 6), I = { width: 256 * x.charCodeAt(R + 7) + x.charCodeAt(R + 8), height: S, numcomponents: x.charCodeAt(R + 9) };
            break;
          }
          p = 256 * x.charCodeAt(R + 2) + x.charCodeAt(R + 3);
        }
        return I;
      }(r = this.__addimage__.isArrayBufferView(r) ? this.__addimage__.arrayBufferToBinaryString(r) : r)).numcomponents) {
        case 1:
          h = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          h = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          h = this.color_spaces.DEVICE_RGB;
      }
      b = { data: r, width: f.width, height: f.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: i, alias: s };
    }
    return b;
  };
}(zt.API);
var Ni, no, Fc, Ic, Cc, El = function() {
  var n, t, r;
  function i(o) {
    var u, h, f, g, b, x, S, p, O, I, R, _, E, X;
    for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, x = null; ; ) {
      switch (u = this.readUInt32(), O = (function() {
        var ot, ut;
        for (ut = [], ot = 0; ot < 4; ++ot) ut.push(String.fromCharCode(this.data[this.pos++]));
        return ut;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(u);
          break;
        case "fcTL":
          x && this.animation.frames.push(x), this.pos += 4, x = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, b = this.readUInt16(), g = this.readUInt16() || 100, x.delay = 1e3 * b / g, x.disposeOp = this.data[this.pos++], x.blendOp = this.data[this.pos++], x.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (O === "fdAT" && (this.pos += 4, u -= 4), o = (x != null ? x.data : void 0) || this.imgData, _ = 0; 0 <= u ? _ < u : _ > u; 0 <= u ? ++_ : --_) o.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(u), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((I = f - this.transparency.indexed.length) > 0) for (E = 0; 0 <= I ? E < I : E > I; 0 <= I ? ++E : --E) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(u)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(u);
          }
          break;
        case "tEXt":
          S = (R = this.read(u)).indexOf(0), p = String.fromCharCode.apply(String, R.slice(0, S)), this.text[p] = String.fromCharCode.apply(String, R.slice(S + 1));
          break;
        case "IEND":
          return x && this.animation.frames.push(x), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (X = this.colorType) === 4 || X === 6, h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += u;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  i.prototype.read = function(o) {
    var u, h;
    for (h = [], u = 0; 0 <= o ? u < o : u > o; 0 <= o ? ++u : --u) h.push(this.data[this.pos++]);
    return h;
  }, i.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, i.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, i.prototype.decodePixels = function(o) {
    var u = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * u), f = 0, g = this;
    if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
    function b(x, S, p, O) {
      var I, R, _, E, X, ot, ut, wt, tt, D, gt, dt, F, P, z, q, at, nt, lt, Z, ft, ht = Math.ceil((g.width - x) / p), kt = Math.ceil((g.height - S) / O), L = g.width == ht && g.height == kt;
      for (P = u * ht, dt = L ? h : new Uint8Array(P * kt), ot = o.length, F = 0, R = 0; F < kt && f < ot; ) {
        switch (o[f++]) {
          case 0:
            for (E = at = 0; at < P; E = at += 1) dt[R++] = o[f++];
            break;
          case 1:
            for (E = nt = 0; nt < P; E = nt += 1) I = o[f++], X = E < u ? 0 : dt[R - u], dt[R++] = (I + X) % 256;
            break;
          case 2:
            for (E = lt = 0; lt < P; E = lt += 1) I = o[f++], _ = (E - E % u) / u, z = F && dt[(F - 1) * P + _ * u + E % u], dt[R++] = (z + I) % 256;
            break;
          case 3:
            for (E = Z = 0; Z < P; E = Z += 1) I = o[f++], _ = (E - E % u) / u, X = E < u ? 0 : dt[R - u], z = F && dt[(F - 1) * P + _ * u + E % u], dt[R++] = (I + Math.floor((X + z) / 2)) % 256;
            break;
          case 4:
            for (E = ft = 0; ft < P; E = ft += 1) I = o[f++], _ = (E - E % u) / u, X = E < u ? 0 : dt[R - u], F === 0 ? z = q = 0 : (z = dt[(F - 1) * P + _ * u + E % u], q = _ && dt[(F - 1) * P + (_ - 1) * u + E % u]), ut = X + z - q, wt = Math.abs(ut - X), D = Math.abs(ut - z), gt = Math.abs(ut - q), tt = wt <= D && wt <= gt ? X : D <= gt ? z : q, dt[R++] = (I + tt) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + o[f - 1]);
        }
        if (!L) {
          var j = ((S + F * O) * g.width + x) * u, M = F * P;
          for (E = 0; E < ht; E += 1) {
            for (var W = 0; W < u; W += 1) h[j++] = dt[M++];
            j += (p - 1) * u;
          }
        }
        F++;
      }
    }
    return o = pl(o), g.interlaceMethod == 1 ? (b(0, 0, 8, 8), b(4, 0, 8, 8), b(0, 4, 4, 8), b(2, 0, 4, 4), b(0, 2, 2, 4), b(1, 0, 2, 2), b(0, 1, 1, 2)) : b(0, 0, 1, 1), h;
  }, i.prototype.decodePalette = function() {
    var o, u, h, f, g, b, x, S, p;
    for (h = this.palette, b = this.transparency.indexed || [], g = new Uint8Array((b.length || 0) + h.length), f = 0, o = 0, u = x = 0, S = h.length; x < S; u = x += 3) g[f++] = h[u], g[f++] = h[u + 1], g[f++] = h[u + 2], g[f++] = (p = b[o++]) != null ? p : 255;
    return g;
  }, i.prototype.copyToImageData = function(o, u) {
    var h, f, g, b, x, S, p, O, I, R, _;
    if (f = this.colors, I = null, h = this.hasAlphaChannel, this.palette.length && (I = (_ = this._decodedPalette) != null ? _ : this._decodedPalette = this.decodePalette(), f = 4, h = !0), O = (g = o.data || o).length, x = I || u, b = S = 0, f === 1) for (; b < O; ) p = I ? 4 * u[b / 4] : S, R = x[p++], g[b++] = R, g[b++] = R, g[b++] = R, g[b++] = h ? x[p++] : 255, S = p;
    else for (; b < O; ) p = I ? 4 * u[b / 4] : S, g[b++] = x[p++], g[b++] = x[p++], g[b++] = x[p++], g[b++] = h ? x[p++] : 255, S = p;
  }, i.prototype.decode = function() {
    var o;
    return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), o;
  };
  var s = function() {
    if (Object.prototype.toString.call(Ht) === "[object Window]") {
      try {
        t = Ht.document.createElement("canvas"), r = t.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return s(), n = function(o) {
    var u;
    if (s() === !0) return r.width = o.width, r.height = o.height, r.clearRect(0, 0, o.width, o.height), r.putImageData(o, 0, 0), (u = new Image()).src = t.toDataURL(), u;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, i.prototype.decodeFrames = function(o) {
    var u, h, f, g, b, x, S, p;
    if (this.animation) {
      for (p = [], h = b = 0, x = (S = this.animation.frames).length; b < x; h = ++b) u = S[h], f = o.createImageData(u.width, u.height), g = this.decodePixels(new Uint8Array(u.data)), this.copyToImageData(f, g), u.imageData = f, p.push(u.image = n(f));
      return p;
    }
  }, i.prototype.renderFrame = function(o, u) {
    var h, f, g;
    return h = (f = this.animation.frames)[u], g = f[u - 1], u === 0 && o.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && o.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), o.drawImage(h.image, h.xOffset, h.yOffset);
  }, i.prototype.animate = function(o) {
    var u, h, f, g, b, x, S = this;
    return h = 0, x = this.animation, g = x.numFrames, f = x.frames, b = x.numPlays, (u = function() {
      var p, O;
      if (p = h++ % g, O = f[p], S.renderFrame(o, p), g > 1 && h / g < b) return S.animation._timeout = setTimeout(u, O.delay);
    })();
  }, i.prototype.stopAnimation = function() {
    var o;
    return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
  }, i.prototype.render = function(o) {
    var u, h;
    return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, o.height = this.height, u = o.getContext("2d"), this.animation ? (this.decodeFrames(u), this.animate(u)) : (h = u.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), u.putImageData(h, 0, 0));
  }, i;
}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function Ml(n) {
  var t = 0;
  if (n[t++] !== 71 || n[t++] !== 73 || n[t++] !== 70 || n[t++] !== 56 || (n[t++] + 1 & 253) != 56 || n[t++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var r = n[t++] | n[t++] << 8, i = n[t++] | n[t++] << 8, s = n[t++], o = s >> 7, u = 1 << (7 & s) + 1;
  n[t++], n[t++];
  var h = null, f = null;
  o && (h = t, f = u, t += 3 * u);
  var g = !0, b = [], x = 0, S = null, p = 0, O = null;
  for (this.width = r, this.height = i; g && t < n.length; ) switch (n[t++]) {
    case 33:
      switch (n[t++]) {
        case 255:
          if (n[t] !== 11 || n[t + 1] == 78 && n[t + 2] == 69 && n[t + 3] == 84 && n[t + 4] == 83 && n[t + 5] == 67 && n[t + 6] == 65 && n[t + 7] == 80 && n[t + 8] == 69 && n[t + 9] == 50 && n[t + 10] == 46 && n[t + 11] == 48 && n[t + 12] == 3 && n[t + 13] == 1 && n[t + 16] == 0) t += 14, O = n[t++] | n[t++] << 8, t++;
          else for (t += 12; ; ) {
            if (!((F = n[t++]) >= 0)) throw Error("Invalid block size");
            if (F === 0) break;
            t += F;
          }
          break;
        case 249:
          if (n[t++] !== 4 || n[t + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var I = n[t++];
          x = n[t++] | n[t++] << 8, S = n[t++], !(1 & I) && (S = null), p = I >> 2 & 7, t++;
          break;
        case 254:
          for (; ; ) {
            if (!((F = n[t++]) >= 0)) throw Error("Invalid block size");
            if (F === 0) break;
            t += F;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + n[t - 1].toString(16));
      }
      break;
    case 44:
      var R = n[t++] | n[t++] << 8, _ = n[t++] | n[t++] << 8, E = n[t++] | n[t++] << 8, X = n[t++] | n[t++] << 8, ot = n[t++], ut = ot >> 6 & 1, wt = 1 << (7 & ot) + 1, tt = h, D = f, gt = !1;
      ot >> 7 && (gt = !0, tt = t, D = wt, t += 3 * wt);
      var dt = t;
      for (t++; ; ) {
        var F;
        if (!((F = n[t++]) >= 0)) throw Error("Invalid block size");
        if (F === 0) break;
        t += F;
      }
      b.push({ x: R, y: _, width: E, height: X, has_local_palette: gt, palette_offset: tt, palette_size: D, data_offset: dt, data_length: t - dt, transparent_index: S, interlaced: !!ut, delay: x, disposal: p });
      break;
    case 59:
      g = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + n[t - 1].toString(16));
  }
  this.numFrames = function() {
    return b.length;
  }, this.loopCount = function() {
    return O;
  }, this.frameInfo = function(P) {
    if (P < 0 || P >= b.length) throw new Error("Frame index out of range.");
    return b[P];
  }, this.decodeAndBlitFrameBGRA = function(P, z) {
    var q = this.frameInfo(P), at = q.width * q.height, nt = new Uint8Array(at);
    jc(n, q.data_offset, nt, at);
    var lt = q.palette_offset, Z = q.transparent_index;
    Z === null && (Z = 256);
    var ft = q.width, ht = r - ft, kt = ft, L = 4 * (q.y * r + q.x), j = 4 * ((q.y + q.height) * r + q.x), M = L, W = 4 * ht;
    q.interlaced === !0 && (W += 4 * r * 7);
    for (var Y = 8, Q = 0, et = nt.length; Q < et; ++Q) {
      var rt = nt[Q];
      if (kt === 0 && (kt = ft, (M += W) >= j && (W = 4 * ht + 4 * r * (Y - 1), M = L + (ft + ht) * (Y << 1), Y >>= 1)), rt === Z) M += 4;
      else {
        var At = n[lt + 3 * rt], xt = n[lt + 3 * rt + 1], Ct = n[lt + 3 * rt + 2];
        z[M++] = Ct, z[M++] = xt, z[M++] = At, z[M++] = 255;
      }
      --kt;
    }
  }, this.decodeAndBlitFrameRGBA = function(P, z) {
    var q = this.frameInfo(P), at = q.width * q.height, nt = new Uint8Array(at);
    jc(n, q.data_offset, nt, at);
    var lt = q.palette_offset, Z = q.transparent_index;
    Z === null && (Z = 256);
    var ft = q.width, ht = r - ft, kt = ft, L = 4 * (q.y * r + q.x), j = 4 * ((q.y + q.height) * r + q.x), M = L, W = 4 * ht;
    q.interlaced === !0 && (W += 4 * r * 7);
    for (var Y = 8, Q = 0, et = nt.length; Q < et; ++Q) {
      var rt = nt[Q];
      if (kt === 0 && (kt = ft, (M += W) >= j && (W = 4 * ht + 4 * r * (Y - 1), M = L + (ft + ht) * (Y << 1), Y >>= 1)), rt === Z) M += 4;
      else {
        var At = n[lt + 3 * rt], xt = n[lt + 3 * rt + 1], Ct = n[lt + 3 * rt + 2];
        z[M++] = At, z[M++] = xt, z[M++] = Ct, z[M++] = 255;
      }
      --kt;
    }
  };
}
function jc(n, t, r, i) {
  for (var s = n[t++], o = 1 << s, u = o + 1, h = u + 1, f = s + 1, g = (1 << f) - 1, b = 0, x = 0, S = 0, p = n[t++], O = new Int32Array(4096), I = null; ; ) {
    for (; b < 16 && p !== 0; ) x |= n[t++] << b, b += 8, p === 1 ? p = n[t++] : --p;
    if (b < f) break;
    var R = x & g;
    if (x >>= f, b -= f, R !== o) {
      if (R === u) break;
      for (var _ = R < h ? R : I, E = 0, X = _; X > o; ) X = O[X] >> 8, ++E;
      var ot = X;
      if (S + E + (_ !== R ? 1 : 0) > i) return void ve.log("Warning, gif stream longer than expected.");
      r[S++] = ot;
      var ut = S += E;
      for (_ !== R && (r[S++] = ot), X = _; E--; ) X = O[X], r[--ut] = 255 & X, X >>= 8;
      I !== null && h < 4096 && (O[h++] = I << 8 | ot, h >= g + 1 && f < 12 && (++f, g = g << 1 | 1)), I = R;
    } else h = u + 1, g = (1 << (f = s + 1)) - 1, I = null;
  }
  return S !== i && ve.log("Warning, gif stream shorter than expected."), r;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function gs(n) {
  var t, r, i, s, o, u = Math.floor, h = new Array(64), f = new Array(64), g = new Array(64), b = new Array(64), x = new Array(65535), S = new Array(65535), p = new Array(64), O = new Array(64), I = [], R = 0, _ = 7, E = new Array(64), X = new Array(64), ot = new Array(64), ut = new Array(256), wt = new Array(2048), tt = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], D = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], gt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], dt = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], F = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], q = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], at = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function nt(L, j) {
    for (var M = 0, W = 0, Y = new Array(), Q = 1; Q <= 16; Q++) {
      for (var et = 1; et <= L[Q]; et++) Y[j[W]] = [], Y[j[W]][0] = M, Y[j[W]][1] = Q, W++, M++;
      M *= 2;
    }
    return Y;
  }
  function lt(L) {
    for (var j = L[0], M = L[1] - 1; M >= 0; ) j & 1 << M && (R |= 1 << _), M--, --_ < 0 && (R == 255 ? (Z(255), Z(0)) : Z(R), _ = 7, R = 0);
  }
  function Z(L) {
    I.push(L);
  }
  function ft(L) {
    Z(L >> 8 & 255), Z(255 & L);
  }
  function ht(L, j, M, W, Y) {
    for (var Q, et = Y[0], rt = Y[240], At = function(Lt, Nt) {
      var Ft, Pt, Rt, Gt, Zt, te, ie, de, Wt, ee, It = 0;
      for (Wt = 0; Wt < 8; ++Wt) {
        Ft = Lt[It], Pt = Lt[It + 1], Rt = Lt[It + 2], Gt = Lt[It + 3], Zt = Lt[It + 4], te = Lt[It + 5], ie = Lt[It + 6];
        var Ve = Ft + (de = Lt[It + 7]), oe = Ft - de, xn = Pt + ie, ge = Pt - ie, Le = Rt + te, zn = Rt - te, ce = Gt + Zt, Mr = Gt - Zt, Ae = Ve + ce, An = Ve - ce, tr = xn + Le, Ne = xn - Le;
        Lt[It] = Ae + tr, Lt[It + 4] = Ae - tr;
        var Yt = 0.707106781 * (Ne + An);
        Lt[It + 2] = An + Yt, Lt[It + 6] = An - Yt;
        var ue = 0.382683433 * ((Ae = Mr + zn) - (Ne = ge + oe)), Br = 0.5411961 * Ae + ue, He = 1.306562965 * Ne + ue, Un = 0.707106781 * (tr = zn + ge), Hn = oe + Un, Tt = oe - Un;
        Lt[It + 5] = Tt + Br, Lt[It + 3] = Tt - Br, Lt[It + 1] = Hn + He, Lt[It + 7] = Hn - He, It += 8;
      }
      for (It = 0, Wt = 0; Wt < 8; ++Wt) {
        Ft = Lt[It], Pt = Lt[It + 8], Rt = Lt[It + 16], Gt = Lt[It + 24], Zt = Lt[It + 32], te = Lt[It + 40], ie = Lt[It + 48];
        var Nn = Ft + (de = Lt[It + 56]), Wn = Ft - de, tn = Pt + ie, Re = Pt - ie, Oe = Rt + te, ln = Rt - te, Xr = Gt + Zt, er = Gt - Zt, Sn = Nn + Xr, _n = Nn - Xr, Pn = tn + Oe, Vn = tn - Oe;
        Lt[It] = Sn + Pn, Lt[It + 32] = Sn - Pn;
        var mn = 0.707106781 * (Vn + _n);
        Lt[It + 16] = _n + mn, Lt[It + 48] = _n - mn;
        var Gn = 0.382683433 * ((Sn = er + ln) - (Vn = Re + Wn)), Rr = 0.5411961 * Sn + Gn, Kr = 1.306562965 * Vn + Gn, $r = 0.707106781 * (Pn = ln + Re), Zr = Wn + $r, Qr = Wn - $r;
        Lt[It + 40] = Qr + Rr, Lt[It + 24] = Qr - Rr, Lt[It + 8] = Zr + Kr, Lt[It + 56] = Zr - Kr, It++;
      }
      for (Wt = 0; Wt < 64; ++Wt) ee = Lt[Wt] * Nt[Wt], p[Wt] = ee > 0 ? ee + 0.5 | 0 : ee - 0.5 | 0;
      return p;
    }(L, j), xt = 0; xt < 64; ++xt) O[tt[xt]] = At[xt];
    var Ct = O[0] - M;
    M = O[0], Ct == 0 ? lt(W[0]) : (lt(W[S[Q = 32767 + Ct]]), lt(x[Q]));
    for (var Et = 63; Et > 0 && O[Et] == 0; ) Et--;
    if (Et == 0) return lt(et), M;
    for (var Ut, ct = 1; ct <= Et; ) {
      for (var B = ct; O[ct] == 0 && ct <= Et; ) ++ct;
      var Xt = ct - B;
      if (Xt >= 16) {
        Ut = Xt >> 4;
        for (var Bt = 1; Bt <= Ut; ++Bt) lt(rt);
        Xt &= 15;
      }
      Q = 32767 + O[ct], lt(Y[(Xt << 4) + S[Q]]), lt(x[Q]), ct++;
    }
    return Et != 63 && lt(et), M;
  }
  function kt(L) {
    L = Math.min(Math.max(L, 1), 100), o != L && (function(j) {
      for (var M = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], W = 0; W < 64; W++) {
        var Y = u((M[W] * j + 50) / 100);
        Y = Math.min(Math.max(Y, 1), 255), h[tt[W]] = Y;
      }
      for (var Q = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], et = 0; et < 64; et++) {
        var rt = u((Q[et] * j + 50) / 100);
        rt = Math.min(Math.max(rt, 1), 255), f[tt[et]] = rt;
      }
      for (var At = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], xt = 0, Ct = 0; Ct < 8; Ct++) for (var Et = 0; Et < 8; Et++) g[xt] = 1 / (h[tt[xt]] * At[Ct] * At[Et] * 8), b[xt] = 1 / (f[tt[xt]] * At[Ct] * At[Et] * 8), xt++;
    }(L < 50 ? Math.floor(5e3 / L) : Math.floor(200 - 2 * L)), o = L);
  }
  this.encode = function(L, j) {
    j && kt(j), I = new Array(), R = 0, _ = 7, ft(65496), ft(65504), ft(16), Z(74), Z(70), Z(73), Z(70), Z(0), Z(1), Z(1), Z(0), ft(1), ft(1), Z(0), Z(0), function() {
      ft(65499), ft(132), Z(0);
      for (var Pt = 0; Pt < 64; Pt++) Z(h[Pt]);
      Z(1);
      for (var Rt = 0; Rt < 64; Rt++) Z(f[Rt]);
    }(), function(Pt, Rt) {
      ft(65472), ft(17), Z(8), ft(Rt), ft(Pt), Z(3), Z(1), Z(17), Z(0), Z(2), Z(17), Z(1), Z(3), Z(17), Z(1);
    }(L.width, L.height), function() {
      ft(65476), ft(418), Z(0);
      for (var Pt = 0; Pt < 16; Pt++) Z(D[Pt + 1]);
      for (var Rt = 0; Rt <= 11; Rt++) Z(gt[Rt]);
      Z(16);
      for (var Gt = 0; Gt < 16; Gt++) Z(dt[Gt + 1]);
      for (var Zt = 0; Zt <= 161; Zt++) Z(F[Zt]);
      Z(1);
      for (var te = 0; te < 16; te++) Z(P[te + 1]);
      for (var ie = 0; ie <= 11; ie++) Z(z[ie]);
      Z(17);
      for (var de = 0; de < 16; de++) Z(q[de + 1]);
      for (var Wt = 0; Wt <= 161; Wt++) Z(at[Wt]);
    }(), ft(65498), ft(12), Z(3), Z(1), Z(0), Z(2), Z(17), Z(3), Z(17), Z(0), Z(63), Z(0);
    var M = 0, W = 0, Y = 0;
    R = 0, _ = 7, this.encode.displayName = "_encode_";
    for (var Q, et, rt, At, xt, Ct, Et, Ut, ct, B = L.data, Xt = L.width, Bt = L.height, Lt = 4 * Xt, Nt = 0; Nt < Bt; ) {
      for (Q = 0; Q < Lt; ) {
        for (xt = Lt * Nt + Q, Et = -1, Ut = 0, ct = 0; ct < 64; ct++) Ct = xt + (Ut = ct >> 3) * Lt + (Et = 4 * (7 & ct)), Nt + Ut >= Bt && (Ct -= Lt * (Nt + 1 + Ut - Bt)), Q + Et >= Lt && (Ct -= Q + Et - Lt + 4), et = B[Ct++], rt = B[Ct++], At = B[Ct++], E[ct] = (wt[et] + wt[rt + 256 >> 0] + wt[At + 512 >> 0] >> 16) - 128, X[ct] = (wt[et + 768 >> 0] + wt[rt + 1024 >> 0] + wt[At + 1280 >> 0] >> 16) - 128, ot[ct] = (wt[et + 1280 >> 0] + wt[rt + 1536 >> 0] + wt[At + 1792 >> 0] >> 16) - 128;
        M = ht(E, g, M, t, i), W = ht(X, b, W, r, s), Y = ht(ot, b, Y, r, s), Q += 32;
      }
      Nt += 8;
    }
    if (_ >= 0) {
      var Ft = [];
      Ft[1] = _ + 1, Ft[0] = (1 << _ + 1) - 1, lt(Ft);
    }
    return ft(65497), new Uint8Array(I);
  }, n = n || 50, function() {
    for (var L = String.fromCharCode, j = 0; j < 256; j++) ut[j] = L(j);
  }(), t = nt(D, gt), r = nt(P, z), i = nt(dt, F), s = nt(q, at), function() {
    for (var L = 1, j = 2, M = 1; M <= 15; M++) {
      for (var W = L; W < j; W++) S[32767 + W] = M, x[32767 + W] = [], x[32767 + W][1] = M, x[32767 + W][0] = W;
      for (var Y = -(j - 1); Y <= -L; Y++) S[32767 + Y] = M, x[32767 + Y] = [], x[32767 + Y][1] = M, x[32767 + Y][0] = j - 1 + Y;
      L <<= 1, j <<= 1;
    }
  }(), function() {
    for (var L = 0; L < 256; L++) wt[L] = 19595 * L, wt[L + 256 >> 0] = 38470 * L, wt[L + 512 >> 0] = 7471 * L + 32768, wt[L + 768 >> 0] = -11059 * L, wt[L + 1024 >> 0] = -21709 * L, wt[L + 1280 >> 0] = 32768 * L + 8421375, wt[L + 1536 >> 0] = -27439 * L, wt[L + 1792 >> 0] = -5329 * L;
  }(), kt(n);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function qn(n, t) {
  if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Oc(n) {
  function t(D) {
    if (!D) throw Error("assert :P");
  }
  function r(D, gt, dt) {
    for (var F = 0; 4 > F; F++) if (D[gt + F] != dt.charCodeAt(F)) return !0;
    return !1;
  }
  function i(D, gt, dt, F, P) {
    for (var z = 0; z < P; z++) D[gt + z] = dt[F + z];
  }
  function s(D, gt, dt, F) {
    for (var P = 0; P < F; P++) D[gt + P] = dt;
  }
  function o(D) {
    return new Int32Array(D);
  }
  function u(D, gt) {
    for (var dt = [], F = 0; F < D; F++) dt.push(new gt());
    return dt;
  }
  function h(D, gt) {
    var dt = [];
    return function F(P, z, q) {
      for (var at = q[z], nt = 0; nt < at && (P.push(q.length > z + 1 ? [] : new gt()), !(q.length < z + 1)); nt++) F(P[nt], z + 1, q);
    }(dt, 0, D), dt;
  }
  var f = function() {
    var D = this;
    function gt(e, a) {
      for (var l = 1 << a - 1 >>> 0; e & l; ) l >>>= 1;
      return l ? (e & l - 1) + l : e;
    }
    function dt(e, a, l, d, m) {
      t(!(d % l));
      do
        e[a + (d -= l)] = m;
      while (0 < d);
    }
    function F(e, a, l, d, m) {
      if (t(2328 >= m), 512 >= m) var w = o(512);
      else if ((w = o(m)) == null) return 0;
      return function(y, A, N, k, U, K) {
        var $, G, vt = A, it = 1 << N, H = o(16), V = o(16);
        for (t(U != 0), t(k != null), t(y != null), t(0 < N), G = 0; G < U; ++G) {
          if (15 < k[G]) return 0;
          ++H[k[G]];
        }
        if (H[0] == U) return 0;
        for (V[1] = 0, $ = 1; 15 > $; ++$) {
          if (H[$] > 1 << $) return 0;
          V[$ + 1] = V[$] + H[$];
        }
        for (G = 0; G < U; ++G) $ = k[G], 0 < k[G] && (K[V[$]++] = G);
        if (V[15] == 1) return (k = new P()).g = 0, k.value = K[0], dt(y, vt, 1, it, k), it;
        var pt, bt = -1, mt = it - 1, Ot = 0, St = 1, Dt = 1, _t = 1 << N;
        for (G = 0, $ = 1, U = 2; $ <= N; ++$, U <<= 1) {
          if (St += Dt <<= 1, 0 > (Dt -= H[$])) return 0;
          for (; 0 < H[$]; --H[$]) (k = new P()).g = $, k.value = K[G++], dt(y, vt + Ot, U, _t, k), Ot = gt(Ot, $);
        }
        for ($ = N + 1, U = 2; 15 >= $; ++$, U <<= 1) {
          if (St += Dt <<= 1, 0 > (Dt -= H[$])) return 0;
          for (; 0 < H[$]; --H[$]) {
            if (k = new P(), (Ot & mt) != bt) {
              for (vt += _t, pt = 1 << (bt = $) - N; 15 > bt && !(0 >= (pt -= H[bt])); ) ++bt, pt <<= 1;
              it += _t = 1 << (pt = bt - N), y[A + (bt = Ot & mt)].g = pt + N, y[A + bt].value = vt - A - bt;
            }
            k.g = $ - N, k.value = K[G++], dt(y, vt + (Ot >> N), U, _t, k), Ot = gt(Ot, $);
          }
        }
        return St != 2 * V[15] - 1 ? 0 : it;
      }(e, a, l, d, m, w);
    }
    function P() {
      this.value = this.g = 0;
    }
    function z() {
      this.value = this.g = 0;
    }
    function q() {
      this.G = u(5, P), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = u(nn, z);
    }
    function at(e, a, l, d) {
      t(e != null), t(a != null), t(2147483648 > d), e.Ca = 254, e.I = 0, e.b = -8, e.Ka = 0, e.oa = a, e.pa = l, e.Jd = a, e.Yc = l + d, e.Zc = 4 <= d ? l + d - 4 + 1 : l, Q(e);
    }
    function nt(e, a) {
      for (var l = 0; 0 < a--; ) l |= rt(e, 128) << a;
      return l;
    }
    function lt(e, a) {
      var l = nt(e, a);
      return et(e) ? -l : l;
    }
    function Z(e, a, l, d) {
      var m, w = 0;
      for (t(e != null), t(a != null), t(4294967288 > d), e.Sb = d, e.Ra = 0, e.u = 0, e.h = 0, 4 < d && (d = 4), m = 0; m < d; ++m) w += a[l + m] << 8 * m;
      e.Ra = w, e.bb = d, e.oa = a, e.pa = l;
    }
    function ft(e) {
      for (; 8 <= e.u && e.bb < e.Sb; ) e.Ra >>>= 8, e.Ra += e.oa[e.pa + e.bb] << pi - 8 >>> 0, ++e.bb, e.u -= 8;
      M(e) && (e.h = 1, e.u = 0);
    }
    function ht(e, a) {
      if (t(0 <= a), !e.h && a <= di) {
        var l = j(e) & fi[a];
        return e.u += a, ft(e), l;
      }
      return e.h = 1, e.u = 0;
    }
    function kt() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function L() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function j(e) {
      return e.Ra >>> (e.u & pi - 1) >>> 0;
    }
    function M(e) {
      return t(e.bb <= e.Sb), e.h || e.bb == e.Sb && e.u > pi;
    }
    function W(e, a) {
      e.u = a, e.h = M(e);
    }
    function Y(e) {
      e.u >= Ki && (t(e.u >= Ki), ft(e));
    }
    function Q(e) {
      t(e != null && e.oa != null), e.pa < e.Zc ? (e.I = (e.oa[e.pa++] | e.I << 8) >>> 0, e.b += 8) : (t(e != null && e.oa != null), e.pa < e.Yc ? (e.b += 8, e.I = e.oa[e.pa++] | e.I << 8) : e.Ka ? e.b = 0 : (e.I <<= 8, e.b += 8, e.Ka = 1));
    }
    function et(e) {
      return nt(e, 1);
    }
    function rt(e, a) {
      var l = e.Ca;
      0 > e.b && Q(e);
      var d = e.b, m = l * a >>> 8, w = (e.I >>> d > m) + 0;
      for (w ? (l -= m, e.I -= m + 1 << d >>> 0) : l = m + 1, d = l, m = 0; 256 <= d; ) m += 8, d >>= 8;
      return d = 7 ^ m + rn[d], e.b -= d, e.Ca = (l << d) - 1, w;
    }
    function At(e, a, l) {
      e[a + 0] = l >> 24 & 255, e[a + 1] = l >> 16 & 255, e[a + 2] = l >> 8 & 255, e[a + 3] = l >> 0 & 255;
    }
    function xt(e, a) {
      return e[a + 0] << 0 | e[a + 1] << 8;
    }
    function Ct(e, a) {
      return xt(e, a) | e[a + 2] << 16;
    }
    function Et(e, a) {
      return xt(e, a) | xt(e, a + 2) << 16;
    }
    function Ut(e, a) {
      var l = 1 << a;
      return t(e != null), t(0 < a), e.X = o(l), e.X == null ? 0 : (e.Mb = 32 - a, e.Xa = a, 1);
    }
    function ct(e, a) {
      t(e != null), t(a != null), t(e.Xa == a.Xa), i(a.X, 0, e.X, 0, 1 << a.Xa);
    }
    function B() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Xt(e, a, l, d) {
      t(l != null), t(d != null);
      var m = l[0], w = d[0];
      return m == 0 && (m = (e * w + a / 2) / a), w == 0 && (w = (a * m + e / 2) / e), 0 >= m || 0 >= w ? 0 : (l[0] = m, d[0] = w, 1);
    }
    function Bt(e, a) {
      return e + (1 << a) - 1 >>> a;
    }
    function Lt(e, a) {
      return ((4278255360 & e) + (4278255360 & a) >>> 0 & 4278255360) + ((16711935 & e) + (16711935 & a) >>> 0 & 16711935) >>> 0;
    }
    function Nt(e, a) {
      D[a] = function(l, d, m, w, y, A, N) {
        var k;
        for (k = 0; k < y; ++k) {
          var U = D[e](A[N + k - 1], m, w + k);
          A[N + k] = Lt(l[d + k], U);
        }
      };
    }
    function Ft() {
      this.ud = this.hd = this.jd = 0;
    }
    function Pt(e, a) {
      return ((4278124286 & (e ^ a)) >>> 1) + (e & a) >>> 0;
    }
    function Rt(e) {
      return 0 <= e && 256 > e ? e : 0 > e ? 0 : 255 < e ? 255 : void 0;
    }
    function Gt(e, a) {
      return Rt(e + (e - a + 0.5 >> 1));
    }
    function Zt(e, a, l) {
      return Math.abs(a - l) - Math.abs(e - l);
    }
    function te(e, a, l, d, m, w, y) {
      for (d = w[y - 1], l = 0; l < m; ++l) w[y + l] = d = Lt(e[a + l], d);
    }
    function ie(e, a, l, d, m) {
      var w;
      for (w = 0; w < l; ++w) {
        var y = e[a + w], A = y >> 8 & 255, N = 16711935 & (N = (N = 16711935 & y) + ((A << 16) + A));
        d[m + w] = (4278255360 & y) + N >>> 0;
      }
    }
    function de(e, a) {
      a.jd = e >> 0 & 255, a.hd = e >> 8 & 255, a.ud = e >> 16 & 255;
    }
    function Wt(e, a, l, d, m, w) {
      var y;
      for (y = 0; y < d; ++y) {
        var A = a[l + y], N = A >>> 8, k = A, U = 255 & (U = (U = A >>> 16) + ((e.jd << 24 >> 24) * (N << 24 >> 24) >>> 5));
        k = 255 & (k = (k = k + ((e.hd << 24 >> 24) * (N << 24 >> 24) >>> 5)) + ((e.ud << 24 >> 24) * (U << 24 >> 24) >>> 5)), m[w + y] = (4278255360 & A) + (U << 16) + k;
      }
    }
    function ee(e, a, l, d, m) {
      D[a] = function(w, y, A, N, k, U, K, $, G) {
        for (N = K; N < $; ++N) for (K = 0; K < G; ++K) k[U++] = m(A[d(w[y++])]);
      }, D[e] = function(w, y, A, N, k, U, K) {
        var $ = 8 >> w.b, G = w.Ea, vt = w.K[0], it = w.w;
        if (8 > $) for (w = (1 << w.b) - 1, it = (1 << $) - 1; y < A; ++y) {
          var H, V = 0;
          for (H = 0; H < G; ++H) H & w || (V = d(N[k++])), U[K++] = m(vt[V & it]), V >>= $;
        }
        else D["VP8LMapColor" + l](N, k, vt, it, U, K, y, A, G);
      };
    }
    function It(e, a, l, d, m) {
      for (l = a + l; a < l; ) {
        var w = e[a++];
        d[m++] = w >> 16 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 0 & 255;
      }
    }
    function Ve(e, a, l, d, m) {
      for (l = a + l; a < l; ) {
        var w = e[a++];
        d[m++] = w >> 16 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 0 & 255, d[m++] = w >> 24 & 255;
      }
    }
    function oe(e, a, l, d, m) {
      for (l = a + l; a < l; ) {
        var w = (y = e[a++]) >> 16 & 240 | y >> 12 & 15, y = y >> 0 & 240 | y >> 28 & 15;
        d[m++] = w, d[m++] = y;
      }
    }
    function xn(e, a, l, d, m) {
      for (l = a + l; a < l; ) {
        var w = (y = e[a++]) >> 16 & 248 | y >> 13 & 7, y = y >> 5 & 224 | y >> 3 & 31;
        d[m++] = w, d[m++] = y;
      }
    }
    function ge(e, a, l, d, m) {
      for (l = a + l; a < l; ) {
        var w = e[a++];
        d[m++] = w >> 0 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 16 & 255;
      }
    }
    function Le(e, a, l, d, m, w) {
      if (w == 0) for (l = a + l; a < l; ) At(d, ((w = e[a++])[0] >> 24 | w[1] >> 8 & 65280 | w[2] << 8 & 16711680 | w[3] << 24) >>> 0), m += 32;
      else i(d, m, e, a, l);
    }
    function zn(e, a) {
      D[a][0] = D[e + "0"], D[a][1] = D[e + "1"], D[a][2] = D[e + "2"], D[a][3] = D[e + "3"], D[a][4] = D[e + "4"], D[a][5] = D[e + "5"], D[a][6] = D[e + "6"], D[a][7] = D[e + "7"], D[a][8] = D[e + "8"], D[a][9] = D[e + "9"], D[a][10] = D[e + "10"], D[a][11] = D[e + "11"], D[a][12] = D[e + "12"], D[a][13] = D[e + "13"], D[a][14] = D[e + "0"], D[a][15] = D[e + "0"];
    }
    function ce(e) {
      return e == Go || e == Yo || e == Da || e == Jo;
    }
    function Mr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Ae() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function An() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Mr(), this.f.kb = new Ae(), this.sd = null;
    }
    function tr() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function Ne() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function Yt(e) {
      return alert("todo:WebPSamplerProcessPlane"), e.T;
    }
    function ue(e, a) {
      var l = e.T, d = a.ba.f.RGBA, m = d.eb, w = d.fb + e.ka * d.A, y = yn[a.ba.S], A = e.y, N = e.O, k = e.f, U = e.N, K = e.ea, $ = e.W, G = a.cc, vt = a.dc, it = a.Mc, H = a.Nc, V = e.ka, pt = e.ka + e.T, bt = e.U, mt = bt + 1 >> 1;
      for (V == 0 ? y(A, N, null, null, k, U, K, $, k, U, K, $, m, w, null, null, bt) : (y(a.ec, a.fc, A, N, G, vt, it, H, k, U, K, $, m, w - d.A, m, w, bt), ++l); V + 2 < pt; V += 2) G = k, vt = U, it = K, H = $, U += e.Rc, $ += e.Rc, w += 2 * d.A, y(A, (N += 2 * e.fa) - e.fa, A, N, G, vt, it, H, k, U, K, $, m, w - d.A, m, w, bt);
      return N += e.fa, e.j + pt < e.o ? (i(a.ec, a.fc, A, N, bt), i(a.cc, a.dc, k, U, mt), i(a.Mc, a.Nc, K, $, mt), l--) : 1 & pt || y(A, N, null, null, k, U, K, $, k, U, K, $, m, w + d.A, null, null, bt), l;
    }
    function Br(e, a, l) {
      var d = e.F, m = [e.J];
      if (d != null) {
        var w = e.U, y = a.ba.S, A = y == qa || y == Da;
        a = a.ba.f.RGBA;
        var N = [0], k = e.ka;
        N[0] = e.T, e.Kb && (k == 0 ? --N[0] : (--k, m[0] -= e.width), e.j + e.ka + e.T == e.o && (N[0] = e.o - e.j - k));
        var U = a.eb;
        k = a.fb + k * a.A, e = Oa(d, m[0], e.width, w, N, U, k + (A ? 0 : 3), a.A), t(l == N), e && ce(y) && xr(U, k, A, w, N, a.A);
      }
      return 0;
    }
    function He(e) {
      var a = e.ma, l = a.ba.S, d = 11 > l, m = l == Ba || l == Ra || l == qa || l == Vo || l == 12 || ce(l);
      if (a.memory = null, a.Ib = null, a.Jb = null, a.Nd = null, !Ji(a.Oa, e, m ? 11 : 12)) return 0;
      if (m && ce(l) && yt(), e.da) alert("todo:use_scaling");
      else {
        if (d) {
          if (a.Ib = Yt, e.Kb) {
            if (l = e.U + 1 >> 1, a.memory = o(e.U + 2 * l), a.memory == null) return 0;
            a.ec = a.memory, a.fc = 0, a.cc = a.ec, a.dc = a.fc + e.U, a.Mc = a.cc, a.Nc = a.dc + l, a.Ib = ue, yt();
          }
        } else alert("todo:EmitYUV");
        m && (a.Jb = Br, d && J());
      }
      if (d && !Ks) {
        for (e = 0; 256 > e; ++e) Fu[e] = 89858 * (e - 128) + za >> Ta, ju[e] = -22014 * (e - 128) + za, Cu[e] = -45773 * (e - 128), Iu[e] = 113618 * (e - 128) + za >> Ta;
        for (e = na; e < $o; ++e) a = 76283 * (e - 16) + za >> Ta, Ou[e - na] = hn(a, 255), Eu[e - na] = hn(a + 8 >> 4, 15);
        Ks = 1;
      }
      return 1;
    }
    function Un(e) {
      var a = e.ma, l = e.U, d = e.T;
      return t(!(1 & e.ka)), 0 >= l || 0 >= d ? 0 : (l = a.Ib(e, a), a.Jb != null && a.Jb(e, a, l), a.Dc += l, 1);
    }
    function Hn(e) {
      e.ma.memory = null;
    }
    function Tt(e, a, l, d) {
      return ht(e, 8) != 47 ? 0 : (a[0] = ht(e, 14) + 1, l[0] = ht(e, 14) + 1, d[0] = ht(e, 1), ht(e, 3) != 0 ? 0 : !e.h);
    }
    function Nn(e, a) {
      if (4 > e) return e + 1;
      var l = e - 2 >> 1;
      return (2 + (1 & e) << l) + ht(a, l) + 1;
    }
    function Wn(e, a) {
      return 120 < a ? a - 120 : 1 <= (l = ((l = gu[a - 1]) >> 4) * e + (8 - (15 & l))) ? l : 1;
      var l;
    }
    function tn(e, a, l) {
      var d = j(l), m = e[a += 255 & d].g - 8;
      return 0 < m && (W(l, l.u + 8), d = j(l), a += e[a].value, a += d & (1 << m) - 1), W(l, l.u + e[a].g), e[a].value;
    }
    function Re(e, a, l) {
      return l.g += e.g, l.value += e.value << a >>> 0, t(8 >= l.g), e.g;
    }
    function Oe(e, a, l) {
      var d = e.xc;
      return t((a = d == 0 ? 0 : e.vc[e.md * (l >> d) + (a >> d)]) < e.Wb), e.Ya[a];
    }
    function ln(e, a, l, d) {
      var m = e.ab, w = e.c * a, y = e.C;
      a = y + a;
      var A = l, N = d;
      for (d = e.Ta, l = e.Ua; 0 < m--; ) {
        var k = e.gc[m], U = y, K = a, $ = A, G = N, vt = (N = d, A = l, k.Ea);
        switch (t(U < K), t(K <= k.nc), k.hc) {
          case 2:
            ja($, G, (K - U) * vt, N, A);
            break;
          case 0:
            var it = U, H = K, V = N, pt = A, bt = (_t = k).Ea;
            it == 0 && (zo($, G, null, null, 1, V, pt), te($, G + 1, 0, 0, bt - 1, V, pt + 1), G += bt, pt += bt, ++it);
            for (var mt = 1 << _t.b, Ot = mt - 1, St = Bt(bt, _t.b), Dt = _t.K, _t = _t.w + (it >> _t.b) * St; it < H; ) {
              var se = Dt, le = _t, ae = 1;
              for ($i($, G, V, pt - bt, 1, V, pt); ae < bt; ) {
                var ne = (ae & ~Ot) + mt;
                ne > bt && (ne = bt), (0, br[se[le++] >> 8 & 15])($, G + +ae, V, pt + ae - bt, ne - ae, V, pt + ae), ae = ne;
              }
              G += bt, pt += bt, ++it & Ot || (_t += St);
            }
            K != k.nc && i(N, A - vt, N, A + (K - U - 1) * vt, vt);
            break;
          case 1:
            for (vt = $, H = G, bt = ($ = k.Ea) - (pt = $ & ~(V = (G = 1 << k.b) - 1)), it = Bt($, k.b), mt = k.K, k = k.w + (U >> k.b) * it; U < K; ) {
              for (Ot = mt, St = k, Dt = new Ft(), _t = H + pt, se = H + $; H < _t; ) de(Ot[St++], Dt), vn(Dt, vt, H, G, N, A), H += G, A += G;
              H < se && (de(Ot[St++], Dt), vn(Dt, vt, H, bt, N, A), H += bt, A += bt), ++U & V || (k += it);
            }
            break;
          case 3:
            if ($ == N && G == A && 0 < k.b) {
              for (H = N, $ = vt = A + (K - U) * vt - (pt = (K - U) * Bt(k.Ea, k.b)), G = N, V = A, it = [], pt = (bt = pt) - 1; 0 <= pt; --pt) it[pt] = G[V + pt];
              for (pt = bt - 1; 0 <= pt; --pt) H[$ + pt] = it[pt];
              Cn(k, U, K, N, vt, N, A);
            } else Cn(k, U, K, $, G, N, A);
        }
        A = d, N = l;
      }
      N != l && i(d, l, A, N, w);
    }
    function Xr(e, a) {
      var l = e.V, d = e.Ba + e.c * e.C, m = a - e.C;
      if (t(a <= e.l.o), t(16 >= m), 0 < m) {
        var w = e.l, y = e.Ta, A = e.Ua, N = w.width;
        if (ln(e, m, l, d), m = A = [A], t((l = e.C) < (d = a)), t(w.v < w.va), d > w.o && (d = w.o), l < w.j) {
          var k = w.j - l;
          l = w.j, m[0] += k * N;
        }
        if (l >= d ? l = 0 : (m[0] += 4 * w.v, w.ka = l - w.j, w.U = w.va - w.v, w.T = d - l, l = 1), l) {
          if (A = A[0], 11 > (l = e.ca).S) {
            var U = l.f.RGBA, K = (d = l.S, m = w.U, w = w.T, k = U.eb, U.A), $ = w;
            for (U = U.fb + e.Ma * U.A; 0 < $--; ) {
              var G = y, vt = A, it = m, H = k, V = U;
              switch (d) {
                case Ma:
                  jn(G, vt, it, H, V);
                  break;
                case Ba:
                  wr(G, vt, it, H, V);
                  break;
                case Go:
                  wr(G, vt, it, H, V), xr(H, V, 0, it, 1, 0);
                  break;
                case Ts:
                  gi(G, vt, it, H, V);
                  break;
                case Ra:
                  Le(G, vt, it, H, V, 1);
                  break;
                case Yo:
                  Le(G, vt, it, H, V, 1), xr(H, V, 0, it, 1, 0);
                  break;
                case qa:
                  Le(G, vt, it, H, V, 0);
                  break;
                case Da:
                  Le(G, vt, it, H, V, 0), xr(H, V, 1, it, 1, 0);
                  break;
                case Vo:
                  Jn(G, vt, it, H, V);
                  break;
                case Jo:
                  Jn(G, vt, it, H, V), bi(H, V, it, 1, 0);
                  break;
                case zs:
                  ar(G, vt, it, H, V);
                  break;
                default:
                  t(0);
              }
              A += N, U += K;
            }
            e.Ma += w;
          } else alert("todo:EmitRescaledRowsYUVA");
          t(e.Ma <= l.height);
        }
      }
      e.C = a, t(e.C <= e.i);
    }
    function er(e) {
      var a;
      if (0 < e.ua) return 0;
      for (a = 0; a < e.Wb; ++a) {
        var l = e.Ya[a].G, d = e.Ya[a].H;
        if (0 < l[1][d[1] + 0].g || 0 < l[2][d[2] + 0].g || 0 < l[3][d[3] + 0].g) return 0;
      }
      return 1;
    }
    function Sn(e, a, l, d, m, w) {
      if (e.Z != 0) {
        var y = e.qd, A = e.rd;
        for (t(Nr[e.Z] != null); a < l; ++a) Nr[e.Z](y, A, d, m, d, m, w), y = d, A = m, m += w;
        e.qd = y, e.rd = A;
      }
    }
    function _n(e, a) {
      var l = e.l.ma, d = l.Z == 0 || l.Z == 1 ? e.l.j : e.C;
      if (d = e.C < d ? d : e.C, t(a <= e.l.o), a > d) {
        var m = e.l.width, w = l.ca, y = l.tb + m * d, A = e.V, N = e.Ba + e.c * d, k = e.gc;
        t(e.ab == 1), t(k[0].hc == 3), Uo(k[0], d, a, A, N, w, y), Sn(l, d, a, w, y, m);
      }
      e.C = e.Ma = a;
    }
    function Pn(e, a, l, d, m, w, y) {
      var A = e.$ / d, N = e.$ % d, k = e.m, U = e.s, K = l + e.$, $ = K;
      m = l + d * m;
      var G = l + d * w, vt = 280 + U.ua, it = e.Pb ? A : 16777216, H = 0 < U.ua ? U.Wa : null, V = U.wc, pt = K < G ? Oe(U, N, A) : null;
      t(e.C < w), t(G <= m);
      var bt = !1;
      t: for (; ; ) {
        for (; bt || K < G; ) {
          var mt = 0;
          if (A >= it) {
            var Ot = K - l;
            t((it = e).Pb), it.wd = it.m, it.xd = Ot, 0 < it.s.ua && ct(it.s.Wa, it.s.vb), it = A + vu;
          }
          if (N & V || (pt = Oe(U, N, A)), t(pt != null), pt.Qb && (a[K] = pt.qb, bt = !0), !bt) if (Y(k), pt.jc) {
            mt = k, Ot = a;
            var St = K, Dt = pt.pd[j(mt) & nn - 1];
            t(pt.jc), 256 > Dt.g ? (W(mt, mt.u + Dt.g), Ot[St] = Dt.value, mt = 0) : (W(mt, mt.u + Dt.g - 256), t(256 <= Dt.value), mt = Dt.value), mt == 0 && (bt = !0);
          } else mt = tn(pt.G[0], pt.H[0], k);
          if (k.h) break;
          if (bt || 256 > mt) {
            if (!bt) if (pt.nd) a[K] = (pt.qb | mt << 8) >>> 0;
            else {
              if (Y(k), bt = tn(pt.G[1], pt.H[1], k), Y(k), Ot = tn(pt.G[2], pt.H[2], k), St = tn(pt.G[3], pt.H[3], k), k.h) break;
              a[K] = (St << 24 | bt << 16 | mt << 8 | Ot) >>> 0;
            }
            if (bt = !1, ++K, ++N >= d && (N = 0, ++A, y != null && A <= w && !(A % 16) && y(e, A), H != null)) for (; $ < K; ) mt = a[$++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
          } else if (280 > mt) {
            if (mt = Nn(mt - 256, k), Ot = tn(pt.G[4], pt.H[4], k), Y(k), Ot = Wn(d, Ot = Nn(Ot, k)), k.h) break;
            if (K - l < Ot || m - K < mt) break t;
            for (St = 0; St < mt; ++St) a[K + St] = a[K + St - Ot];
            for (K += mt, N += mt; N >= d; ) N -= d, ++A, y != null && A <= w && !(A % 16) && y(e, A);
            if (t(K <= m), N & V && (pt = Oe(U, N, A)), H != null) for (; $ < K; ) mt = a[$++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
          } else {
            if (!(mt < vt)) break t;
            for (bt = mt - 280, t(H != null); $ < K; ) mt = a[$++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
            mt = K, t(!(bt >>> (Ot = H).Xa)), a[mt] = Ot.X[bt], bt = !0;
          }
          bt || t(k.h == M(k));
        }
        if (e.Pb && k.h && K < m) t(e.m.h), e.a = 5, e.m = e.wd, e.$ = e.xd, 0 < e.s.ua && ct(e.s.vb, e.s.Wa);
        else {
          if (k.h) break t;
          y != null && y(e, A > w ? w : A), e.a = 0, e.$ = K - l;
        }
        return 1;
      }
      return e.a = 3, 0;
    }
    function Vn(e) {
      t(e != null), e.vc = null, e.yc = null, e.Ya = null;
      var a = e.Wa;
      a != null && (a.X = null), e.vb = null, t(e != null);
    }
    function mn() {
      var e = new To();
      return e == null ? null : (e.a = 0, e.xb = Ws, zn("Predictor", "VP8LPredictors"), zn("Predictor", "VP8LPredictors_C"), zn("PredictorAdd", "VP8LPredictorsAdd"), zn("PredictorAdd", "VP8LPredictorsAdd_C"), ja = ie, vn = Wt, jn = It, wr = Ve, Jn = oe, ar = xn, gi = ge, D.VP8LMapColor32b = Zi, D.VP8LMapColor8b = Ho, e);
    }
    function Gn(e, a, l, d, m) {
      var w = 1, y = [e], A = [a], N = d.m, k = d.s, U = null, K = 0;
      t: for (; ; ) {
        if (l) for (; w && ht(N, 1); ) {
          var $ = y, G = A, vt = d, it = 1, H = vt.m, V = vt.gc[vt.ab], pt = ht(H, 2);
          if (vt.Oc & 1 << pt) w = 0;
          else {
            switch (vt.Oc |= 1 << pt, V.hc = pt, V.Ea = $[0], V.nc = G[0], V.K = [null], ++vt.ab, t(4 >= vt.ab), pt) {
              case 0:
              case 1:
                V.b = ht(H, 3) + 2, it = Gn(Bt(V.Ea, V.b), Bt(V.nc, V.b), 0, vt, V.K), V.K = V.K[0];
                break;
              case 3:
                var bt, mt = ht(H, 8) + 1, Ot = 16 < mt ? 0 : 4 < mt ? 1 : 2 < mt ? 2 : 3;
                if ($[0] = Bt(V.Ea, Ot), V.b = Ot, bt = it = Gn(mt, 1, 0, vt, V.K)) {
                  var St, Dt = mt, _t = V, se = 1 << (8 >> _t.b), le = o(se);
                  if (le == null) bt = 0;
                  else {
                    var ae = _t.K[0], ne = _t.w;
                    for (le[0] = _t.K[0][0], St = 1; St < 1 * Dt; ++St) le[St] = Lt(ae[ne + St], le[St - 1]);
                    for (; St < 4 * se; ++St) le[St] = 0;
                    _t.K[0] = null, _t.K[0] = le, bt = 1;
                  }
                }
                it = bt;
                break;
              case 2:
                break;
              default:
                t(0);
            }
            w = it;
          }
        }
        if (y = y[0], A = A[0], w && ht(N, 1) && !(w = 1 <= (K = ht(N, 4)) && 11 >= K)) {
          d.a = 3;
          break t;
        }
        var me;
        if (me = w) e: {
          var pe, $t, Me, an = d, Be = y, on = A, he = K, dn = l, pn = an.m, Te = an.s, We = [null], Ze = 1, Ln = 0, Xn = mu[he];
          n: for (; ; ) {
            if (dn && ht(pn, 1)) {
              var ze = ht(pn, 3) + 2, lr = Bt(Be, ze), Wr = Bt(on, ze), wi = lr * Wr;
              if (!Gn(lr, Wr, 0, an, We)) break n;
              for (We = We[0], Te.xc = ze, pe = 0; pe < wi; ++pe) {
                var Sr = We[pe] >> 8 & 65535;
                We[pe] = Sr, Sr >= Ze && (Ze = Sr + 1);
              }
            }
            if (pn.h) break n;
            for ($t = 0; 5 > $t; ++$t) {
              var _e = Us[$t];
              !$t && 0 < he && (_e += 1 << he), Ln < _e && (Ln = _e);
            }
            var Zo = u(Ze * Xn, P), Qs = Ze, tc = u(Qs, q);
            if (tc == null) var Ha = null;
            else t(65536 >= Qs), Ha = tc;
            var ra = o(Ln);
            if (Ha == null || ra == null || Zo == null) {
              an.a = 1;
              break n;
            }
            var Wa = Zo;
            for (pe = Me = 0; pe < Ze; ++pe) {
              var Bn = Ha[pe], yi = Bn.G, Li = Bn.H, ec = 0, Va = 1, nc = 0;
              for ($t = 0; 5 > $t; ++$t) {
                _e = Us[$t], yi[$t] = Wa, Li[$t] = Me, !$t && 0 < he && (_e += 1 << he);
                i: {
                  var Ga, Qo = _e, Ya = an, ia = ra, Ru = Wa, qu = Me, ts = 0, _r = Ya.m, Du = ht(_r, 1);
                  if (s(ia, 0, 0, Qo), Du) {
                    var Tu = ht(_r, 1) + 1, zu = ht(_r, 1), rc = ht(_r, zu == 0 ? 1 : 8);
                    ia[rc] = 1, Tu == 2 && (ia[rc = ht(_r, 8)] = 1);
                    var Ja = 1;
                  } else {
                    var ic = o(19), ac = ht(_r, 4) + 4;
                    if (19 < ac) {
                      Ya.a = 3;
                      var Xa = 0;
                      break i;
                    }
                    for (Ga = 0; Ga < ac; ++Ga) ic[pu[Ga]] = ht(_r, 3);
                    var es = void 0, aa = void 0, oc = Ya, Uu = ic, Ka = Qo, sc = ia, ns = 0, Pr = oc.m, cc = 8, uc = u(128, P);
                    r: for (; F(uc, 0, 7, Uu, 19); ) {
                      if (ht(Pr, 1)) {
                        var Hu = 2 + 2 * ht(Pr, 3);
                        if ((es = 2 + ht(Pr, Hu)) > Ka) break r;
                      } else es = Ka;
                      for (aa = 0; aa < Ka && es--; ) {
                        Y(Pr);
                        var lc = uc[0 + (127 & j(Pr))];
                        W(Pr, Pr.u + lc.g);
                        var xi = lc.value;
                        if (16 > xi) sc[aa++] = xi, xi != 0 && (cc = xi);
                        else {
                          var Wu = xi == 16, hc = xi - 16, Vu = fu[hc], fc = ht(Pr, hu[hc]) + Vu;
                          if (aa + fc > Ka) break r;
                          for (var Gu = Wu ? cc : 0; 0 < fc--; ) sc[aa++] = Gu;
                        }
                      }
                      ns = 1;
                      break r;
                    }
                    ns || (oc.a = 3), Ja = ns;
                  }
                  (Ja = Ja && !_r.h) && (ts = F(Ru, qu, 8, ia, Qo)), Ja && ts != 0 ? Xa = ts : (Ya.a = 3, Xa = 0);
                }
                if (Xa == 0) break n;
                if (Va && du[$t] == 1 && (Va = Wa[Me].g == 0), ec += Wa[Me].g, Me += Xa, 3 >= $t) {
                  var oa, rs = ra[0];
                  for (oa = 1; oa < _e; ++oa) ra[oa] > rs && (rs = ra[oa]);
                  nc += rs;
                }
              }
              if (Bn.nd = Va, Bn.Qb = 0, Va && (Bn.qb = (yi[3][Li[3] + 0].value << 24 | yi[1][Li[1] + 0].value << 16 | yi[2][Li[2] + 0].value) >>> 0, ec == 0 && 256 > yi[0][Li[0] + 0].value && (Bn.Qb = 1, Bn.qb += yi[0][Li[0] + 0].value << 8)), Bn.jc = !Bn.Qb && 6 > nc, Bn.jc) {
                var $a, hr = Bn;
                for ($a = 0; $a < nn; ++$a) {
                  var kr = $a, Fr = hr.pd[kr], Za = hr.G[0][hr.H[0] + kr];
                  256 <= Za.value ? (Fr.g = Za.g + 256, Fr.value = Za.value) : (Fr.g = 0, Fr.value = 0, kr >>= Re(Za, 8, Fr), kr >>= Re(hr.G[1][hr.H[1] + kr], 16, Fr), kr >>= Re(hr.G[2][hr.H[2] + kr], 0, Fr), Re(hr.G[3][hr.H[3] + kr], 24, Fr));
                }
              }
            }
            Te.vc = We, Te.Wb = Ze, Te.Ya = Ha, Te.yc = Zo, me = 1;
            break e;
          }
          me = 0;
        }
        if (!(w = me)) {
          d.a = 3;
          break t;
        }
        if (0 < K) {
          if (k.ua = 1 << K, !Ut(k.Wa, K)) {
            d.a = 1, w = 0;
            break t;
          }
        } else k.ua = 0;
        var is = d, dc = y, Yu = A, as = is.s, os = as.xc;
        if (is.c = dc, is.i = Yu, as.md = Bt(dc, os), as.wc = os == 0 ? -1 : (1 << os) - 1, l) {
          d.xb = Nu;
          break t;
        }
        if ((U = o(y * A)) == null) {
          d.a = 1, w = 0;
          break t;
        }
        w = (w = Pn(d, U, 0, y, A, A, null)) && !N.h;
        break t;
      }
      return w ? (m != null ? m[0] = U : (t(U == null), t(l)), d.$ = 0, l || Vn(k)) : Vn(k), w;
    }
    function Rr(e, a) {
      var l = e.c * e.i, d = l + a + 16 * a;
      return t(e.c <= a), e.V = o(d), e.V == null ? (e.Ta = null, e.Ua = 0, e.a = 1, 0) : (e.Ta = e.V, e.Ua = e.Ba + l + a, 1);
    }
    function Kr(e, a) {
      var l = e.C, d = a - l, m = e.V, w = e.Ba + e.c * l;
      for (t(a <= e.l.o); 0 < d; ) {
        var y = 16 < d ? 16 : d, A = e.l.ma, N = e.l.width, k = N * y, U = A.ca, K = A.tb + N * l, $ = e.Ta, G = e.Ua;
        ln(e, y, m, w), Es($, G, U, K, k), Sn(A, l, l + y, U, K, N), d -= y, m += y * e.c, l += y;
      }
      t(l == a), e.C = e.Ma = a;
    }
    function $r() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Zr() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function Qr() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
    }
    function fa() {
      this.Yb = function() {
        var e = [];
        return function a(l, d, m) {
          for (var w = m[d], y = 0; y < w && (l.push(m.length > d + 1 ? [] : 0), !(m.length < d + 1)); y++) a(l[y], d + 1, m);
        }(e, 0, [3, 11]), e;
      }();
    }
    function vo() {
      this.jb = o(3), this.Wc = h([4, 8], fa), this.Xc = h([4, 17], fa);
    }
    function bo() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
    }
    function ti() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function da() {
      this.Na = this.la = 0;
    }
    function wo() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function ji() {
      this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function yo() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new ti()), this.Y = 0, this.ya = Array(new ji()), this.aa = 0, this.l = new ei();
    }
    function pa() {
      this.y = o(16), this.f = o(8), this.ea = o(8);
    }
    function Lo() {
      this.cb = this.a = 0, this.sc = "", this.m = new kt(), this.Od = new $r(), this.Kc = new Zr(), this.ed = new bo(), this.Qa = new Qr(), this.Ic = this.$c = this.Aa = 0, this.D = new yo(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = u(8, kt), this.ia = 0, this.pb = u(4, wo), this.Pa = new vo(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new pa()), this.Hd = 0, this.rb = Array(new da()), this.sb = 0, this.wa = Array(new ti()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new ji()), this.L = this.aa = 0, this.gd = h([4, 2], ti), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function ei() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function xo() {
      var e = new Lo();
      return e != null && (e.a = 0, e.sc = "OK", e.cb = 0, e.Xb = 0, ea || (ea = va)), e;
    }
    function ke(e, a, l) {
      return e.a == 0 && (e.a = a, e.sc = l, e.cb = 0), 0;
    }
    function ga(e, a, l) {
      return 3 <= l && e[a + 0] == 157 && e[a + 1] == 1 && e[a + 2] == 42;
    }
    function ma(e, a) {
      if (e == null) return 0;
      if (e.a = 0, e.sc = "OK", a == null) return ke(e, 2, "null VP8Io passed to VP8GetHeaders()");
      var l = a.data, d = a.w, m = a.ha;
      if (4 > m) return ke(e, 7, "Truncated header.");
      var w = l[d + 0] | l[d + 1] << 8 | l[d + 2] << 16, y = e.Od;
      if (y.Rb = !(1 & w), y.td = w >> 1 & 7, y.yd = w >> 4 & 1, y.ub = w >> 5, 3 < y.td) return ke(e, 3, "Incorrect keyframe parameters.");
      if (!y.yd) return ke(e, 4, "Frame not displayable.");
      d += 3, m -= 3;
      var A = e.Kc;
      if (y.Rb) {
        if (7 > m) return ke(e, 7, "cannot parse picture header");
        if (!ga(l, d, m)) return ke(e, 3, "Bad code word");
        A.c = 16383 & (l[d + 4] << 8 | l[d + 3]), A.Td = l[d + 4] >> 6, A.i = 16383 & (l[d + 6] << 8 | l[d + 5]), A.Ud = l[d + 6] >> 6, d += 7, m -= 7, e.za = A.c + 15 >> 4, e.Ub = A.i + 15 >> 4, a.width = A.c, a.height = A.i, a.Da = 0, a.j = 0, a.v = 0, a.va = a.width, a.o = a.height, a.da = 0, a.ib = a.width, a.hb = a.height, a.U = a.width, a.T = a.height, s((w = e.Pa).jb, 0, 255, w.jb.length), t((w = e.Qa) != null), w.Cb = 0, w.Bb = 0, w.Fb = 1, s(w.Zb, 0, 0, w.Zb.length), s(w.Lb, 0, 0, w.Lb);
      }
      if (y.ub > m) return ke(e, 7, "bad partition length");
      at(w = e.m, l, d, y.ub), d += y.ub, m -= y.ub, y.Rb && (A.Ld = et(w), A.Kd = et(w)), A = e.Qa;
      var N, k = e.Pa;
      if (t(w != null), t(A != null), A.Cb = et(w), A.Cb) {
        if (A.Bb = et(w), et(w)) {
          for (A.Fb = et(w), N = 0; 4 > N; ++N) A.Zb[N] = et(w) ? lt(w, 7) : 0;
          for (N = 0; 4 > N; ++N) A.Lb[N] = et(w) ? lt(w, 6) : 0;
        }
        if (A.Bb) for (N = 0; 3 > N; ++N) k.jb[N] = et(w) ? nt(w, 8) : 255;
      } else A.Bb = 0;
      if (w.Ka) return ke(e, 3, "cannot parse segment header");
      if ((A = e.ed).zd = et(w), A.Tb = nt(w, 6), A.wb = nt(w, 3), A.Pc = et(w), A.Pc && et(w)) {
        for (k = 0; 4 > k; ++k) et(w) && (A.vd[k] = lt(w, 6));
        for (k = 0; 4 > k; ++k) et(w) && (A.od[k] = lt(w, 6));
      }
      if (e.L = A.Tb == 0 ? 0 : A.zd ? 1 : 2, w.Ka) return ke(e, 3, "cannot parse filter header");
      var U = m;
      if (m = N = d, d = N + U, A = U, e.Xb = (1 << nt(e.m, 2)) - 1, U < 3 * (k = e.Xb)) l = 7;
      else {
        for (N += 3 * k, A -= 3 * k, U = 0; U < k; ++U) {
          var K = l[m + 0] | l[m + 1] << 8 | l[m + 2] << 16;
          K > A && (K = A), at(e.Jc[+U], l, N, K), N += K, A -= K, m += 3;
        }
        at(e.Jc[+k], l, N, A), l = N < d ? 0 : 5;
      }
      if (l != 0) return ke(e, l, "cannot parse partitions");
      for (l = nt(N = e.m, 7), m = et(N) ? lt(N, 4) : 0, d = et(N) ? lt(N, 4) : 0, A = et(N) ? lt(N, 4) : 0, k = et(N) ? lt(N, 4) : 0, N = et(N) ? lt(N, 4) : 0, U = e.Qa, K = 0; 4 > K; ++K) {
        if (U.Cb) {
          var $ = U.Zb[K];
          U.Fb || ($ += l);
        } else {
          if (0 < K) {
            e.pb[K] = e.pb[0];
            continue;
          }
          $ = l;
        }
        var G = e.pb[K];
        G.Sc[0] = Xo[hn($ + m, 127)], G.Sc[1] = Ko[hn($ + 0, 127)], G.Eb[0] = 2 * Xo[hn($ + d, 127)], G.Eb[1] = 101581 * Ko[hn($ + A, 127)] >> 16, 8 > G.Eb[1] && (G.Eb[1] = 8), G.Qc[0] = Xo[hn($ + k, 117)], G.Qc[1] = Ko[hn($ + N, 127)], G.lc = $ + N;
      }
      if (!y.Rb) return ke(e, 4, "Not a key frame.");
      for (et(w), y = e.Pa, l = 0; 4 > l; ++l) {
        for (m = 0; 8 > m; ++m) for (d = 0; 3 > d; ++d) for (A = 0; 11 > A; ++A) k = rt(w, xu[l][m][d][A]) ? nt(w, 8) : yu[l][m][d][A], y.Wc[l][m].Yb[d][A] = k;
        for (m = 0; 17 > m; ++m) y.Xc[l][m] = y.Wc[l][Au[m]];
      }
      return e.kc = et(w), e.kc && (e.Bd = nt(w, 8)), e.cb = 1;
    }
    function va(e, a, l, d, m, w, y) {
      var A = a[m].Yb[l];
      for (l = 0; 16 > m; ++m) {
        if (!rt(e, A[l + 0])) return m;
        for (; !rt(e, A[l + 1]); ) if (A = a[++m].Yb[0], l = 0, m == 16) return 16;
        var N = a[m + 1].Yb;
        if (rt(e, A[l + 2])) {
          var k = e, U = 0;
          if (rt(k, ($ = A)[(K = l) + 3])) if (rt(k, $[K + 6])) {
            for (A = 0, K = 2 * (U = rt(k, $[K + 8])) + ($ = rt(k, $[K + 9 + U])), U = 0, $ = bu[K]; $[A]; ++A) U += U + rt(k, $[A]);
            U += 3 + (8 << K);
          } else rt(k, $[K + 7]) ? (U = 7 + 2 * rt(k, 165), U += rt(k, 145)) : U = 5 + rt(k, 159);
          else U = rt(k, $[K + 4]) ? 3 + rt(k, $[K + 5]) : 2;
          A = N[2];
        } else U = 1, A = N[1];
        N = y + wu[m], 0 > (k = e).b && Q(k);
        var K, $ = k.b, G = (K = k.Ca >> 1) - (k.I >> $) >> 31;
        --k.b, k.Ca += G, k.Ca |= 1, k.I -= (K + 1 & G) << $, w[N] = ((U ^ G) - G) * d[(0 < m) + 0];
      }
      return 16;
    }
    function Oi(e) {
      var a = e.rb[e.sb - 1];
      a.la = 0, a.Na = 0, s(e.zc, 0, 0, e.zc.length), e.ja = 0;
    }
    function Ao(e, a) {
      if (e == null) return 0;
      if (a == null) return ke(e, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!e.cb && !ma(e, a)) return 0;
      if (t(e.cb), a.ac == null || a.ac(a)) {
        a.ob && (e.L = 0);
        var l = Ua[e.L];
        if (e.L == 2 ? (e.yb = 0, e.zb = 0) : (e.yb = a.v - l >> 4, e.zb = a.j - l >> 4, 0 > e.yb && (e.yb = 0), 0 > e.zb && (e.zb = 0)), e.Va = a.o + 15 + l >> 4, e.Hb = a.va + 15 + l >> 4, e.Hb > e.za && (e.Hb = e.za), e.Va > e.Ub && (e.Va = e.Ub), 0 < e.L) {
          var d = e.ed;
          for (l = 0; 4 > l; ++l) {
            var m;
            if (e.Qa.Cb) {
              var w = e.Qa.Lb[l];
              e.Qa.Fb || (w += d.Tb);
            } else w = d.Tb;
            for (m = 0; 1 >= m; ++m) {
              var y = e.gd[l][m], A = w;
              if (d.Pc && (A += d.vd[0], m && (A += d.od[0])), 0 < (A = 0 > A ? 0 : 63 < A ? 63 : A)) {
                var N = A;
                0 < d.wb && (N = 4 < d.wb ? N >> 2 : N >> 1) > 9 - d.wb && (N = 9 - d.wb), 1 > N && (N = 1), y.dd = N, y.tc = 2 * A + N, y.ld = 40 <= A ? 2 : 15 <= A ? 1 : 0;
              } else y.tc = 0;
              y.La = m;
            }
          }
        }
        l = 0;
      } else ke(e, 6, "Frame setup failed"), l = e.a;
      if (l = l == 0) {
        if (l) {
          e.$c = 0, 0 < e.Aa || (e.Ic = Bu);
          t: {
            l = e.Ic, d = 4 * (N = e.za);
            var k = 32 * N, U = N + 1, K = 0 < e.L ? N * (0 < e.Aa ? 2 : 1) : 0, $ = (e.Aa == 2 ? 2 : 1) * N;
            if ((y = d + 832 + (m = 3 * (16 * l + Ua[e.L]) / 2 * k) + (w = e.Fa != null && 0 < e.Fa.length ? e.Kc.c * e.Kc.i : 0)) != y) l = 0;
            else {
              if (y > e.Vb) {
                if (e.Vb = 0, e.Ec = o(y), e.Fc = 0, e.Ec == null) {
                  l = ke(e, 1, "no memory during frame initialization.");
                  break t;
                }
                e.Vb = y;
              }
              y = e.Ec, A = e.Fc, e.Ac = y, e.Bc = A, A += d, e.Gd = u(k, pa), e.Hd = 0, e.rb = u(U + 1, da), e.sb = 1, e.wa = K ? u(K, ti) : null, e.Y = 0, e.D.Nb = 0, e.D.wa = e.wa, e.D.Y = e.Y, 0 < e.Aa && (e.D.Y += N), t(!0), e.oc = y, e.pc = A, A += 832, e.ya = u($, ji), e.aa = 0, e.D.ya = e.ya, e.D.aa = e.aa, e.Aa == 2 && (e.D.aa += N), e.R = 16 * N, e.B = 8 * N, N = (k = Ua[e.L]) * e.R, k = k / 2 * e.B, e.sa = y, e.ta = A + N, e.qa = e.sa, e.ra = e.ta + 16 * l * e.R + k, e.Ha = e.qa, e.Ia = e.ra + 8 * l * e.B + k, e.$c = 0, A += m, e.mb = w ? y : null, e.nb = w ? A : null, t(A + w <= e.Fc + e.Vb), Oi(e), s(e.Ac, e.Bc, 0, d), l = 1;
            }
          }
          if (l) {
            if (a.ka = 0, a.y = e.sa, a.O = e.ta, a.f = e.qa, a.N = e.ra, a.ea = e.Ha, a.Vd = e.Ia, a.fa = e.R, a.Rc = e.B, a.F = null, a.J = 0, !Ds) {
              for (l = -255; 255 >= l; ++l) Ms[255 + l] = 0 > l ? -l : l;
              for (l = -1020; 1020 >= l; ++l) Bs[1020 + l] = -128 > l ? -128 : 127 < l ? 127 : l;
              for (l = -112; 112 >= l; ++l) Rs[112 + l] = -16 > l ? -16 : 15 < l ? 15 : l;
              for (l = -255; 510 >= l; ++l) qs[255 + l] = 0 > l ? 0 : 255 < l ? 255 : l;
              Ds = 1;
            }
            On = _o, mi = No, yr = wa, En = So, or = ya, Qi = ba, Ur = Di, vi = Tr, Hr = Do, Lr = Ti, ta = qo, bn = si, sr = zi, be = Fa, we = ka, Fe = rr, qe = gr, cr = Ro, Mn[0] = Yn, Mn[1] = Po, Mn[2] = Co, Mn[3] = jo, Mn[4] = Aa, Mn[5] = ai, Mn[6] = Na, Mn[7] = Bi, Mn[8] = Eo, Mn[9] = Oo, Ar[0] = La, Ar[1] = Fo, Ar[2] = nr, Ar[3] = ri, Ar[4] = Ge, Ar[5] = Io, Ar[6] = xa, ur[0] = pr, ur[1] = ko, ur[2] = Mo, ur[3] = Ri, ur[4] = Dr, ur[5] = Bo, ur[6] = qi, l = 1;
          } else l = 0;
        }
        l && (l = function(G, vt) {
          for (G.M = 0; G.M < G.Va; ++G.M) {
            var it, H = G.Jc[G.M & G.Xb], V = G.m, pt = G;
            for (it = 0; it < pt.za; ++it) {
              var bt = V, mt = pt, Ot = mt.Ac, St = mt.Bc + 4 * it, Dt = mt.zc, _t = mt.ya[mt.aa + it];
              if (mt.Qa.Bb ? _t.$b = rt(bt, mt.Pa.jb[0]) ? 2 + rt(bt, mt.Pa.jb[2]) : rt(bt, mt.Pa.jb[1]) : _t.$b = 0, mt.kc && (_t.Ad = rt(bt, mt.Bd)), _t.Za = !rt(bt, 145) + 0, _t.Za) {
                var se = _t.Ob, le = 0;
                for (mt = 0; 4 > mt; ++mt) {
                  var ae, ne = Dt[0 + mt];
                  for (ae = 0; 4 > ae; ++ae) {
                    ne = Lu[Ot[St + ae]][ne];
                    for (var me = Hs[rt(bt, ne[0])]; 0 < me; ) me = Hs[2 * me + rt(bt, ne[me])];
                    ne = -me, Ot[St + ae] = ne;
                  }
                  i(se, le, Ot, St, 4), le += 4, Dt[0 + mt] = ne;
                }
              } else ne = rt(bt, 156) ? rt(bt, 128) ? 1 : 3 : rt(bt, 163) ? 2 : 0, _t.Ob[0] = ne, s(Ot, St, ne, 4), s(Dt, 0, ne, 4);
              _t.Dd = rt(bt, 142) ? rt(bt, 114) ? rt(bt, 183) ? 1 : 3 : 2 : 0;
            }
            if (pt.m.Ka) return ke(G, 7, "Premature end-of-partition0 encountered.");
            for (; G.ja < G.za; ++G.ja) {
              if (pt = H, bt = (V = G).rb[V.sb - 1], Ot = V.rb[V.sb + V.ja], it = V.ya[V.aa + V.ja], St = V.kc ? it.Ad : 0) bt.la = Ot.la = 0, it.Za || (bt.Na = Ot.Na = 0), it.Hc = 0, it.Gc = 0, it.ia = 0;
              else {
                var pe, $t;
                if (bt = Ot, Ot = pt, St = V.Pa.Xc, Dt = V.ya[V.aa + V.ja], _t = V.pb[Dt.$b], mt = Dt.ad, se = 0, le = V.rb[V.sb - 1], ne = ae = 0, s(mt, se, 0, 384), Dt.Za) var Me = 0, an = St[3];
                else {
                  me = o(16);
                  var Be = bt.Na + le.Na;
                  if (Be = ea(Ot, St[1], Be, _t.Eb, 0, me, 0), bt.Na = le.Na = (0 < Be) + 0, 1 < Be) On(me, 0, mt, se);
                  else {
                    var on = me[0] + 3 >> 3;
                    for (me = 0; 256 > me; me += 16) mt[se + me] = on;
                  }
                  Me = 1, an = St[0];
                }
                var he = 15 & bt.la, dn = 15 & le.la;
                for (me = 0; 4 > me; ++me) {
                  var pn = 1 & dn;
                  for (on = $t = 0; 4 > on; ++on) he = he >> 1 | (pn = (Be = ea(Ot, an, Be = pn + (1 & he), _t.Sc, Me, mt, se)) > Me) << 7, $t = $t << 2 | (3 < Be ? 3 : 1 < Be ? 2 : mt[se + 0] != 0), se += 16;
                  he >>= 4, dn = dn >> 1 | pn << 7, ae = (ae << 8 | $t) >>> 0;
                }
                for (an = he, Me = dn >> 4, pe = 0; 4 > pe; pe += 2) {
                  for ($t = 0, he = bt.la >> 4 + pe, dn = le.la >> 4 + pe, me = 0; 2 > me; ++me) {
                    for (pn = 1 & dn, on = 0; 2 > on; ++on) Be = pn + (1 & he), he = he >> 1 | (pn = 0 < (Be = ea(Ot, St[2], Be, _t.Qc, 0, mt, se))) << 3, $t = $t << 2 | (3 < Be ? 3 : 1 < Be ? 2 : mt[se + 0] != 0), se += 16;
                    he >>= 2, dn = dn >> 1 | pn << 5;
                  }
                  ne |= $t << 4 * pe, an |= he << 4 << pe, Me |= (240 & dn) << pe;
                }
                bt.la = an, le.la = Me, Dt.Hc = ae, Dt.Gc = ne, Dt.ia = 43690 & ne ? 0 : _t.ia, St = !(ae | ne);
              }
              if (0 < V.L && (V.wa[V.Y + V.ja] = V.gd[it.$b][it.Za], V.wa[V.Y + V.ja].La |= !St), pt.Ka) return ke(G, 7, "Premature end-of-file encountered.");
            }
            if (Oi(G), V = vt, pt = 1, it = (H = G).D, bt = 0 < H.L && H.M >= H.zb && H.M <= H.Va, H.Aa == 0) t: {
              if (it.M = H.M, it.uc = bt, Yi(H, it), pt = 1, it = ($t = H.D).Nb, bt = (ne = Ua[H.L]) * H.R, Ot = ne / 2 * H.B, me = 16 * it * H.R, on = 8 * it * H.B, St = H.sa, Dt = H.ta - bt + me, _t = H.qa, mt = H.ra - Ot + on, se = H.Ha, le = H.Ia - Ot + on, dn = (he = $t.M) == 0, ae = he >= H.Va - 1, H.Aa == 2 && Yi(H, $t), $t.uc) for (pn = (Be = H).D.M, t(Be.D.uc), $t = Be.yb; $t < Be.Hb; ++$t) {
                Me = $t, an = pn;
                var Te = (We = (_e = Be).D).Nb;
                pe = _e.R;
                var We = We.wa[We.Y + Me], Ze = _e.sa, Ln = _e.ta + 16 * Te * pe + 16 * Me, Xn = We.dd, ze = We.tc;
                if (ze != 0) if (t(3 <= ze), _e.L == 1) 0 < Me && Fe(Ze, Ln, pe, ze + 4), We.La && cr(Ze, Ln, pe, ze), 0 < an && we(Ze, Ln, pe, ze + 4), We.La && qe(Ze, Ln, pe, ze);
                else {
                  var lr = _e.B, Wr = _e.qa, wi = _e.ra + 8 * Te * lr + 8 * Me, Sr = _e.Ha, _e = _e.Ia + 8 * Te * lr + 8 * Me;
                  Te = We.ld, 0 < Me && (vi(Ze, Ln, pe, ze + 4, Xn, Te), Lr(Wr, wi, Sr, _e, lr, ze + 4, Xn, Te)), We.La && (bn(Ze, Ln, pe, ze, Xn, Te), be(Wr, wi, Sr, _e, lr, ze, Xn, Te)), 0 < an && (Ur(Ze, Ln, pe, ze + 4, Xn, Te), Hr(Wr, wi, Sr, _e, lr, ze + 4, Xn, Te)), We.La && (ta(Ze, Ln, pe, ze, Xn, Te), sr(Wr, wi, Sr, _e, lr, ze, Xn, Te));
                }
              }
              if (H.ia && alert("todo:DitherRow"), V.put != null) {
                if ($t = 16 * he, he = 16 * (he + 1), dn ? (V.y = H.sa, V.O = H.ta + me, V.f = H.qa, V.N = H.ra + on, V.ea = H.Ha, V.W = H.Ia + on) : ($t -= ne, V.y = St, V.O = Dt, V.f = _t, V.N = mt, V.ea = se, V.W = le), ae || (he -= ne), he > V.o && (he = V.o), V.F = null, V.J = null, H.Fa != null && 0 < H.Fa.length && $t < he && (V.J = Vi(H, V, $t, he - $t), V.F = H.mb, V.F == null && V.F.length == 0)) {
                  pt = ke(H, 3, "Could not decode alpha data.");
                  break t;
                }
                $t < V.j && (ne = V.j - $t, $t = V.j, t(!(1 & ne)), V.O += H.R * ne, V.N += H.B * (ne >> 1), V.W += H.B * (ne >> 1), V.F != null && (V.J += V.width * ne)), $t < he && (V.O += V.v, V.N += V.v >> 1, V.W += V.v >> 1, V.F != null && (V.J += V.v), V.ka = $t - V.j, V.U = V.va - V.v, V.T = he - $t, pt = V.put(V));
              }
              it + 1 != H.Ic || ae || (i(H.sa, H.ta - bt, St, Dt + 16 * H.R, bt), i(H.qa, H.ra - Ot, _t, mt + 8 * H.B, Ot), i(H.Ha, H.Ia - Ot, se, le + 8 * H.B, Ot));
            }
            if (!pt) return ke(G, 6, "Output aborted.");
          }
          return 1;
        }(e, a)), a.bc != null && a.bc(a), l &= 1;
      }
      return l ? (e.cb = 0, l) : 0;
    }
    function kn(e, a, l, d, m) {
      m = e[a + l + 32 * d] + (m >> 3), e[a + l + 32 * d] = -256 & m ? 0 > m ? 0 : 255 : m;
    }
    function ni(e, a, l, d, m, w) {
      kn(e, a, 0, l, d + m), kn(e, a, 1, l, d + w), kn(e, a, 2, l, d - w), kn(e, a, 3, l, d - m);
    }
    function en(e) {
      return (20091 * e >> 16) + e;
    }
    function Ei(e, a, l, d) {
      var m, w = 0, y = o(16);
      for (m = 0; 4 > m; ++m) {
        var A = e[a + 0] + e[a + 8], N = e[a + 0] - e[a + 8], k = (35468 * e[a + 4] >> 16) - en(e[a + 12]), U = en(e[a + 4]) + (35468 * e[a + 12] >> 16);
        y[w + 0] = A + U, y[w + 1] = N + k, y[w + 2] = N - k, y[w + 3] = A - U, w += 4, a++;
      }
      for (m = w = 0; 4 > m; ++m) A = (e = y[w + 0] + 4) + y[w + 8], N = e - y[w + 8], k = (35468 * y[w + 4] >> 16) - en(y[w + 12]), kn(l, d, 0, 0, A + (U = en(y[w + 4]) + (35468 * y[w + 12] >> 16))), kn(l, d, 1, 0, N + k), kn(l, d, 2, 0, N - k), kn(l, d, 3, 0, A - U), w++, d += 32;
    }
    function ba(e, a, l, d) {
      var m = e[a + 0] + 4, w = 35468 * e[a + 4] >> 16, y = en(e[a + 4]), A = 35468 * e[a + 1] >> 16;
      ni(l, d, 0, m + y, e = en(e[a + 1]), A), ni(l, d, 1, m + w, e, A), ni(l, d, 2, m - w, e, A), ni(l, d, 3, m - y, e, A);
    }
    function No(e, a, l, d, m) {
      Ei(e, a, l, d), m && Ei(e, a + 16, l, d + 4);
    }
    function wa(e, a, l, d) {
      mi(e, a + 0, l, d, 1), mi(e, a + 32, l, d + 128, 1);
    }
    function So(e, a, l, d) {
      var m;
      for (e = e[a + 0] + 4, m = 0; 4 > m; ++m) for (a = 0; 4 > a; ++a) kn(l, d, a, m, e);
    }
    function ya(e, a, l, d) {
      e[a + 0] && En(e, a + 0, l, d), e[a + 16] && En(e, a + 16, l, d + 4), e[a + 32] && En(e, a + 32, l, d + 128), e[a + 48] && En(e, a + 48, l, d + 128 + 4);
    }
    function _o(e, a, l, d) {
      var m, w = o(16);
      for (m = 0; 4 > m; ++m) {
        var y = e[a + 0 + m] + e[a + 12 + m], A = e[a + 4 + m] + e[a + 8 + m], N = e[a + 4 + m] - e[a + 8 + m], k = e[a + 0 + m] - e[a + 12 + m];
        w[0 + m] = y + A, w[8 + m] = y - A, w[4 + m] = k + N, w[12 + m] = k - N;
      }
      for (m = 0; 4 > m; ++m) y = (e = w[0 + 4 * m] + 3) + w[3 + 4 * m], A = w[1 + 4 * m] + w[2 + 4 * m], N = w[1 + 4 * m] - w[2 + 4 * m], k = e - w[3 + 4 * m], l[d + 0] = y + A >> 3, l[d + 16] = k + N >> 3, l[d + 32] = y - A >> 3, l[d + 48] = k - N >> 3, d += 64;
    }
    function Mi(e, a, l) {
      var d, m = a - 32, w = fn, y = 255 - e[m - 1];
      for (d = 0; d < l; ++d) {
        var A, N = w, k = y + e[a - 1];
        for (A = 0; A < l; ++A) e[a + A] = N[k + e[m + A]];
        a += 32;
      }
    }
    function Po(e, a) {
      Mi(e, a, 4);
    }
    function ko(e, a) {
      Mi(e, a, 8);
    }
    function Fo(e, a) {
      Mi(e, a, 16);
    }
    function nr(e, a) {
      var l;
      for (l = 0; 16 > l; ++l) i(e, a + 32 * l, e, a - 32, 16);
    }
    function ri(e, a) {
      var l;
      for (l = 16; 0 < l; --l) s(e, a, e[a - 1], 16), a += 32;
    }
    function ii(e, a, l) {
      var d;
      for (d = 0; 16 > d; ++d) s(a, l + 32 * d, e, 16);
    }
    function La(e, a) {
      var l, d = 16;
      for (l = 0; 16 > l; ++l) d += e[a - 1 + 32 * l] + e[a + l - 32];
      ii(d >> 5, e, a);
    }
    function Ge(e, a) {
      var l, d = 8;
      for (l = 0; 16 > l; ++l) d += e[a - 1 + 32 * l];
      ii(d >> 4, e, a);
    }
    function Io(e, a) {
      var l, d = 8;
      for (l = 0; 16 > l; ++l) d += e[a + l - 32];
      ii(d >> 4, e, a);
    }
    function xa(e, a) {
      ii(128, e, a);
    }
    function Vt(e, a, l) {
      return e + 2 * a + l + 2 >> 2;
    }
    function Co(e, a) {
      var l, d = a - 32;
      for (d = new Uint8Array([Vt(e[d - 1], e[d + 0], e[d + 1]), Vt(e[d + 0], e[d + 1], e[d + 2]), Vt(e[d + 1], e[d + 2], e[d + 3]), Vt(e[d + 2], e[d + 3], e[d + 4])]), l = 0; 4 > l; ++l) i(e, a + 32 * l, d, 0, d.length);
    }
    function jo(e, a) {
      var l = e[a - 1], d = e[a - 1 + 32], m = e[a - 1 + 64], w = e[a - 1 + 96];
      At(e, a + 0, 16843009 * Vt(e[a - 1 - 32], l, d)), At(e, a + 32, 16843009 * Vt(l, d, m)), At(e, a + 64, 16843009 * Vt(d, m, w)), At(e, a + 96, 16843009 * Vt(m, w, w));
    }
    function Yn(e, a) {
      var l, d = 4;
      for (l = 0; 4 > l; ++l) d += e[a + l - 32] + e[a - 1 + 32 * l];
      for (d >>= 3, l = 0; 4 > l; ++l) s(e, a + 32 * l, d, 4);
    }
    function Aa(e, a) {
      var l = e[a - 1 + 0], d = e[a - 1 + 32], m = e[a - 1 + 64], w = e[a - 1 - 32], y = e[a + 0 - 32], A = e[a + 1 - 32], N = e[a + 2 - 32], k = e[a + 3 - 32];
      e[a + 0 + 96] = Vt(d, m, e[a - 1 + 96]), e[a + 1 + 96] = e[a + 0 + 64] = Vt(l, d, m), e[a + 2 + 96] = e[a + 1 + 64] = e[a + 0 + 32] = Vt(w, l, d), e[a + 3 + 96] = e[a + 2 + 64] = e[a + 1 + 32] = e[a + 0 + 0] = Vt(y, w, l), e[a + 3 + 64] = e[a + 2 + 32] = e[a + 1 + 0] = Vt(A, y, w), e[a + 3 + 32] = e[a + 2 + 0] = Vt(N, A, y), e[a + 3 + 0] = Vt(k, N, A);
    }
    function Na(e, a) {
      var l = e[a + 1 - 32], d = e[a + 2 - 32], m = e[a + 3 - 32], w = e[a + 4 - 32], y = e[a + 5 - 32], A = e[a + 6 - 32], N = e[a + 7 - 32];
      e[a + 0 + 0] = Vt(e[a + 0 - 32], l, d), e[a + 1 + 0] = e[a + 0 + 32] = Vt(l, d, m), e[a + 2 + 0] = e[a + 1 + 32] = e[a + 0 + 64] = Vt(d, m, w), e[a + 3 + 0] = e[a + 2 + 32] = e[a + 1 + 64] = e[a + 0 + 96] = Vt(m, w, y), e[a + 3 + 32] = e[a + 2 + 64] = e[a + 1 + 96] = Vt(w, y, A), e[a + 3 + 64] = e[a + 2 + 96] = Vt(y, A, N), e[a + 3 + 96] = Vt(A, N, N);
    }
    function ai(e, a) {
      var l = e[a - 1 + 0], d = e[a - 1 + 32], m = e[a - 1 + 64], w = e[a - 1 - 32], y = e[a + 0 - 32], A = e[a + 1 - 32], N = e[a + 2 - 32], k = e[a + 3 - 32];
      e[a + 0 + 0] = e[a + 1 + 64] = w + y + 1 >> 1, e[a + 1 + 0] = e[a + 2 + 64] = y + A + 1 >> 1, e[a + 2 + 0] = e[a + 3 + 64] = A + N + 1 >> 1, e[a + 3 + 0] = N + k + 1 >> 1, e[a + 0 + 96] = Vt(m, d, l), e[a + 0 + 64] = Vt(d, l, w), e[a + 0 + 32] = e[a + 1 + 96] = Vt(l, w, y), e[a + 1 + 32] = e[a + 2 + 96] = Vt(w, y, A), e[a + 2 + 32] = e[a + 3 + 96] = Vt(y, A, N), e[a + 3 + 32] = Vt(A, N, k);
    }
    function Bi(e, a) {
      var l = e[a + 0 - 32], d = e[a + 1 - 32], m = e[a + 2 - 32], w = e[a + 3 - 32], y = e[a + 4 - 32], A = e[a + 5 - 32], N = e[a + 6 - 32], k = e[a + 7 - 32];
      e[a + 0 + 0] = l + d + 1 >> 1, e[a + 1 + 0] = e[a + 0 + 64] = d + m + 1 >> 1, e[a + 2 + 0] = e[a + 1 + 64] = m + w + 1 >> 1, e[a + 3 + 0] = e[a + 2 + 64] = w + y + 1 >> 1, e[a + 0 + 32] = Vt(l, d, m), e[a + 1 + 32] = e[a + 0 + 96] = Vt(d, m, w), e[a + 2 + 32] = e[a + 1 + 96] = Vt(m, w, y), e[a + 3 + 32] = e[a + 2 + 96] = Vt(w, y, A), e[a + 3 + 64] = Vt(y, A, N), e[a + 3 + 96] = Vt(A, N, k);
    }
    function Oo(e, a) {
      var l = e[a - 1 + 0], d = e[a - 1 + 32], m = e[a - 1 + 64], w = e[a - 1 + 96];
      e[a + 0 + 0] = l + d + 1 >> 1, e[a + 2 + 0] = e[a + 0 + 32] = d + m + 1 >> 1, e[a + 2 + 32] = e[a + 0 + 64] = m + w + 1 >> 1, e[a + 1 + 0] = Vt(l, d, m), e[a + 3 + 0] = e[a + 1 + 32] = Vt(d, m, w), e[a + 3 + 32] = e[a + 1 + 64] = Vt(m, w, w), e[a + 3 + 64] = e[a + 2 + 64] = e[a + 0 + 96] = e[a + 1 + 96] = e[a + 2 + 96] = e[a + 3 + 96] = w;
    }
    function Eo(e, a) {
      var l = e[a - 1 + 0], d = e[a - 1 + 32], m = e[a - 1 + 64], w = e[a - 1 + 96], y = e[a - 1 - 32], A = e[a + 0 - 32], N = e[a + 1 - 32], k = e[a + 2 - 32];
      e[a + 0 + 0] = e[a + 2 + 32] = l + y + 1 >> 1, e[a + 0 + 32] = e[a + 2 + 64] = d + l + 1 >> 1, e[a + 0 + 64] = e[a + 2 + 96] = m + d + 1 >> 1, e[a + 0 + 96] = w + m + 1 >> 1, e[a + 3 + 0] = Vt(A, N, k), e[a + 2 + 0] = Vt(y, A, N), e[a + 1 + 0] = e[a + 3 + 32] = Vt(l, y, A), e[a + 1 + 32] = e[a + 3 + 64] = Vt(d, l, y), e[a + 1 + 64] = e[a + 3 + 96] = Vt(m, d, l), e[a + 1 + 96] = Vt(w, m, d);
    }
    function Mo(e, a) {
      var l;
      for (l = 0; 8 > l; ++l) i(e, a + 32 * l, e, a - 32, 8);
    }
    function Ri(e, a) {
      var l;
      for (l = 0; 8 > l; ++l) s(e, a, e[a - 1], 8), a += 32;
    }
    function qr(e, a, l) {
      var d;
      for (d = 0; 8 > d; ++d) s(a, l + 32 * d, e, 8);
    }
    function pr(e, a) {
      var l, d = 8;
      for (l = 0; 8 > l; ++l) d += e[a + l - 32] + e[a - 1 + 32 * l];
      qr(d >> 4, e, a);
    }
    function Bo(e, a) {
      var l, d = 4;
      for (l = 0; 8 > l; ++l) d += e[a + l - 32];
      qr(d >> 3, e, a);
    }
    function Dr(e, a) {
      var l, d = 4;
      for (l = 0; 8 > l; ++l) d += e[a - 1 + 32 * l];
      qr(d >> 3, e, a);
    }
    function qi(e, a) {
      qr(128, e, a);
    }
    function oi(e, a, l) {
      var d = e[a - l], m = e[a + 0], w = 3 * (m - d) + Wo[1020 + e[a - 2 * l] - e[a + l]], y = Ea[112 + (w + 4 >> 3)];
      e[a - l] = fn[255 + d + Ea[112 + (w + 3 >> 3)]], e[a + 0] = fn[255 + m - y];
    }
    function Sa(e, a, l, d) {
      var m = e[a + 0], w = e[a + l];
      return wn[255 + e[a - 2 * l] - e[a - l]] > d || wn[255 + w - m] > d;
    }
    function _a(e, a, l, d) {
      return 4 * wn[255 + e[a - l] - e[a + 0]] + wn[255 + e[a - 2 * l] - e[a + l]] <= d;
    }
    function Pa(e, a, l, d, m) {
      var w = e[a - 3 * l], y = e[a - 2 * l], A = e[a - l], N = e[a + 0], k = e[a + l], U = e[a + 2 * l], K = e[a + 3 * l];
      return 4 * wn[255 + A - N] + wn[255 + y - k] > d ? 0 : wn[255 + e[a - 4 * l] - w] <= m && wn[255 + w - y] <= m && wn[255 + y - A] <= m && wn[255 + K - U] <= m && wn[255 + U - k] <= m && wn[255 + k - N] <= m;
    }
    function ka(e, a, l, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) _a(e, a + d, l, m) && oi(e, a + d, l);
    }
    function rr(e, a, l, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) _a(e, a + d * l, 1, m) && oi(e, a + d * l, 1);
    }
    function gr(e, a, l, d) {
      var m;
      for (m = 3; 0 < m; --m) ka(e, a += 4 * l, l, d);
    }
    function Ro(e, a, l, d) {
      var m;
      for (m = 3; 0 < m; --m) rr(e, a += 4, l, d);
    }
    function mr(e, a, l, d, m, w, y, A) {
      for (w = 2 * w + 1; 0 < m--; ) {
        if (Pa(e, a, l, w, y)) if (Sa(e, a, l, A)) oi(e, a, l);
        else {
          var N = e, k = a, U = l, K = N[k - 2 * U], $ = N[k - U], G = N[k + 0], vt = N[k + U], it = N[k + 2 * U], H = 27 * (pt = Wo[1020 + 3 * (G - $) + Wo[1020 + K - vt]]) + 63 >> 7, V = 18 * pt + 63 >> 7, pt = 9 * pt + 63 >> 7;
          N[k - 3 * U] = fn[255 + N[k - 3 * U] + pt], N[k - 2 * U] = fn[255 + K + V], N[k - U] = fn[255 + $ + H], N[k + 0] = fn[255 + G - H], N[k + U] = fn[255 + vt - V], N[k + 2 * U] = fn[255 + it - pt];
        }
        a += d;
      }
    }
    function Fn(e, a, l, d, m, w, y, A) {
      for (w = 2 * w + 1; 0 < m--; ) {
        if (Pa(e, a, l, w, y)) if (Sa(e, a, l, A)) oi(e, a, l);
        else {
          var N = e, k = a, U = l, K = N[k - U], $ = N[k + 0], G = N[k + U], vt = Ea[112 + ((it = 3 * ($ - K)) + 4 >> 3)], it = Ea[112 + (it + 3 >> 3)], H = vt + 1 >> 1;
          N[k - 2 * U] = fn[255 + N[k - 2 * U] + H], N[k - U] = fn[255 + K + it], N[k + 0] = fn[255 + $ - vt], N[k + U] = fn[255 + G - H];
        }
        a += d;
      }
    }
    function Di(e, a, l, d, m, w) {
      mr(e, a, l, 1, 16, d, m, w);
    }
    function Tr(e, a, l, d, m, w) {
      mr(e, a, 1, l, 16, d, m, w);
    }
    function qo(e, a, l, d, m, w) {
      var y;
      for (y = 3; 0 < y; --y) Fn(e, a += 4 * l, l, 1, 16, d, m, w);
    }
    function si(e, a, l, d, m, w) {
      var y;
      for (y = 3; 0 < y; --y) Fn(e, a += 4, 1, l, 16, d, m, w);
    }
    function Do(e, a, l, d, m, w, y, A) {
      mr(e, a, m, 1, 8, w, y, A), mr(l, d, m, 1, 8, w, y, A);
    }
    function Ti(e, a, l, d, m, w, y, A) {
      mr(e, a, 1, m, 8, w, y, A), mr(l, d, 1, m, 8, w, y, A);
    }
    function zi(e, a, l, d, m, w, y, A) {
      Fn(e, a + 4 * m, m, 1, 8, w, y, A), Fn(l, d + 4 * m, m, 1, 8, w, y, A);
    }
    function Fa(e, a, l, d, m, w, y, A) {
      Fn(e, a + 4, 1, m, 8, w, y, A), Fn(l, d + 4, 1, m, 8, w, y, A);
    }
    function ci() {
      this.ba = new An(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new Ne(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function Ui() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function Hi() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Ia() {
      this.ua = 0, this.Wa = new B(), this.vb = new B(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new q(), this.yc = new P();
    }
    function To() {
      this.xb = this.a = 0, this.l = new ei(), this.ca = new An(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new L(), this.Pb = 0, this.wd = new L(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Ia(), this.ab = 0, this.gc = u(4, Hi), this.Oc = 0;
    }
    function ui() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new ei(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function zr(e, a, l, d, m, w, y) {
      for (e = e == null ? 0 : e[a + 0], a = 0; a < y; ++a) m[w + a] = e + l[d + a] & 255, e = m[w + a];
    }
    function Wi(e, a, l, d, m, w, y) {
      var A;
      if (e == null) zr(null, null, l, d, m, w, y);
      else for (A = 0; A < y; ++A) m[w + A] = e[a + A] + l[d + A] & 255;
    }
    function vr(e, a, l, d, m, w, y) {
      if (e == null) zr(null, null, l, d, m, w, y);
      else {
        var A, N = e[a + 0], k = N, U = N;
        for (A = 0; A < y; ++A) k = U + (N = e[a + A]) - k, U = l[d + A] + (-256 & k ? 0 > k ? 0 : 255 : k) & 255, k = N, m[w + A] = U;
      }
    }
    function Vi(e, a, l, d) {
      var m = a.width, w = a.o;
      if (t(e != null && a != null), 0 > l || 0 >= d || l + d > w) return null;
      if (!e.Cc) {
        if (e.ga == null) {
          var y;
          if (e.ga = new ui(), (y = e.ga == null) || (y = a.width * a.o, t(e.Gb.length == 0), e.Gb = o(y), e.Uc = 0, e.Gb == null ? y = 0 : (e.mb = e.Gb, e.nb = e.Uc, e.rc = null, y = 1), y = !y), !y) {
            y = e.ga;
            var A = e.Fa, N = e.P, k = e.qc, U = e.mb, K = e.nb, $ = N + 1, G = k - 1, vt = y.l;
            if (t(A != null && U != null && a != null), Nr[0] = null, Nr[1] = zr, Nr[2] = Wi, Nr[3] = vr, y.ca = U, y.tb = K, y.c = a.width, y.i = a.height, t(0 < y.c && 0 < y.i), 1 >= k) a = 0;
            else if (y.$a = A[N + 0] >> 0 & 3, y.Z = A[N + 0] >> 2 & 3, y.Lc = A[N + 0] >> 4 & 3, N = A[N + 0] >> 6 & 3, 0 > y.$a || 1 < y.$a || 4 <= y.Z || 1 < y.Lc || N) a = 0;
            else if (vt.put = Un, vt.ac = He, vt.bc = Hn, vt.ma = y, vt.width = a.width, vt.height = a.height, vt.Da = a.Da, vt.v = a.v, vt.va = a.va, vt.j = a.j, vt.o = a.o, y.$a) t: {
              t(y.$a == 1), a = mn();
              e: for (; ; ) {
                if (a == null) {
                  a = 0;
                  break t;
                }
                if (t(y != null), y.mc = a, a.c = y.c, a.i = y.i, a.l = y.l, a.l.ma = y, a.l.width = y.c, a.l.height = y.i, a.a = 0, Z(a.m, A, $, G), !Gn(y.c, y.i, 1, a, null) || (a.ab == 1 && a.gc[0].hc == 3 && er(a.s) ? (y.ic = 1, A = a.c * a.i, a.Ta = null, a.Ua = 0, a.V = o(A), a.Ba = 0, a.V == null ? (a.a = 1, a = 0) : a = 1) : (y.ic = 0, a = Rr(a, y.c)), !a)) break e;
                a = 1;
                break t;
              }
              y.mc = null, a = 0;
            }
            else a = G >= y.c * y.i;
            y = !a;
          }
          if (y) return null;
          e.ga.Lc != 1 ? e.Ga = 0 : d = w - l;
        }
        t(e.ga != null), t(l + d <= w);
        t: {
          if (a = (A = e.ga).c, w = A.l.o, A.$a == 0) {
            if ($ = e.rc, G = e.Vc, vt = e.Fa, N = e.P + 1 + l * a, k = e.mb, U = e.nb + l * a, t(N <= e.P + e.qc), A.Z != 0) for (t(Nr[A.Z] != null), y = 0; y < d; ++y) Nr[A.Z]($, G, vt, N, k, U, a), $ = k, G = U, U += a, N += a;
            else for (y = 0; y < d; ++y) i(k, U, vt, N, a), $ = k, G = U, U += a, N += a;
            e.rc = $, e.Vc = G;
          } else {
            if (t(A.mc != null), a = l + d, t((y = A.mc) != null), t(a <= y.i), y.C >= a) a = 1;
            else if (A.ic || J(), A.ic) {
              A = y.V, $ = y.Ba, G = y.c;
              var it = y.i, H = (vt = 1, N = y.$ / G, k = y.$ % G, U = y.m, K = y.s, y.$), V = G * it, pt = G * a, bt = K.wc, mt = H < pt ? Oe(K, k, N) : null;
              t(H <= V), t(a <= it), t(er(K));
              e: for (; ; ) {
                for (; !U.h && H < pt; ) {
                  if (k & bt || (mt = Oe(K, k, N)), t(mt != null), Y(U), 256 > (it = tn(mt.G[0], mt.H[0], U))) A[$ + H] = it, ++H, ++k >= G && (k = 0, ++N <= a && !(N % 16) && _n(y, N));
                  else {
                    if (!(280 > it)) {
                      vt = 0;
                      break e;
                    }
                    it = Nn(it - 256, U);
                    var Ot, St = tn(mt.G[4], mt.H[4], U);
                    if (Y(U), !(H >= (St = Wn(G, St = Nn(St, U))) && V - H >= it)) {
                      vt = 0;
                      break e;
                    }
                    for (Ot = 0; Ot < it; ++Ot) A[$ + H + Ot] = A[$ + H + Ot - St];
                    for (H += it, k += it; k >= G; ) k -= G, ++N <= a && !(N % 16) && _n(y, N);
                    H < pt && k & bt && (mt = Oe(K, k, N));
                  }
                  t(U.h == M(U));
                }
                _n(y, N > a ? a : N);
                break e;
              }
              !vt || U.h && H < V ? (vt = 0, y.a = U.h ? 5 : 3) : y.$ = H, a = vt;
            } else a = Pn(y, y.V, y.Ba, y.c, y.i, a, Kr);
            if (!a) {
              d = 0;
              break t;
            }
          }
          l + d >= w && (e.Cc = 1), d = 1;
        }
        if (!d) return null;
        if (e.Cc && ((d = e.ga) != null && (d.mc = null), e.ga = null, 0 < e.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return e.nb + l * m;
    }
    function c(e, a, l, d, m, w) {
      for (; 0 < m--; ) {
        var y, A = e, N = a + (l ? 1 : 0), k = e, U = a + (l ? 0 : 3);
        for (y = 0; y < d; ++y) {
          var K = k[U + 4 * y];
          K != 255 && (K *= 32897, A[N + 4 * y + 0] = A[N + 4 * y + 0] * K >> 23, A[N + 4 * y + 1] = A[N + 4 * y + 1] * K >> 23, A[N + 4 * y + 2] = A[N + 4 * y + 2] * K >> 23);
        }
        a += w;
      }
    }
    function v(e, a, l, d, m) {
      for (; 0 < d--; ) {
        var w;
        for (w = 0; w < l; ++w) {
          var y = e[a + 2 * w + 0], A = 15 & (k = e[a + 2 * w + 1]), N = 4369 * A, k = (240 & k | k >> 4) * N >> 16;
          e[a + 2 * w + 0] = (240 & y | y >> 4) * N >> 16 & 240 | (15 & y | y << 4) * N >> 16 >> 4 & 15, e[a + 2 * w + 1] = 240 & k | A;
        }
        a += m;
      }
    }
    function C(e, a, l, d, m, w, y, A) {
      var N, k, U = 255;
      for (k = 0; k < m; ++k) {
        for (N = 0; N < d; ++N) {
          var K = e[a + N];
          w[y + 4 * N] = K, U &= K;
        }
        a += l, y += A;
      }
      return U != 255;
    }
    function T(e, a, l, d, m) {
      var w;
      for (w = 0; w < m; ++w) l[d + w] = e[a + w] >> 8;
    }
    function J() {
      xr = c, bi = v, Oa = C, Es = T;
    }
    function st(e, a, l) {
      D[e] = function(d, m, w, y, A, N, k, U, K, $, G, vt, it, H, V, pt, bt) {
        var mt, Ot = bt - 1 >> 1, St = A[N + 0] | k[U + 0] << 16, Dt = K[$ + 0] | G[vt + 0] << 16;
        t(d != null);
        var _t = 3 * St + Dt + 131074 >> 2;
        for (a(d[m + 0], 255 & _t, _t >> 16, it, H), w != null && (_t = 3 * Dt + St + 131074 >> 2, a(w[y + 0], 255 & _t, _t >> 16, V, pt)), mt = 1; mt <= Ot; ++mt) {
          var se = A[N + mt] | k[U + mt] << 16, le = K[$ + mt] | G[vt + mt] << 16, ae = St + se + Dt + le + 524296, ne = ae + 2 * (se + Dt) >> 3;
          _t = ne + St >> 1, St = (ae = ae + 2 * (St + le) >> 3) + se >> 1, a(d[m + 2 * mt - 1], 255 & _t, _t >> 16, it, H + (2 * mt - 1) * l), a(d[m + 2 * mt - 0], 255 & St, St >> 16, it, H + (2 * mt - 0) * l), w != null && (_t = ae + Dt >> 1, St = ne + le >> 1, a(w[y + 2 * mt - 1], 255 & _t, _t >> 16, V, pt + (2 * mt - 1) * l), a(w[y + 2 * mt + 0], 255 & St, St >> 16, V, pt + (2 * mt + 0) * l)), St = se, Dt = le;
        }
        1 & bt || (_t = 3 * St + Dt + 131074 >> 2, a(d[m + bt - 1], 255 & _t, _t >> 16, it, H + (bt - 1) * l), w != null && (_t = 3 * Dt + St + 131074 >> 2, a(w[y + bt - 1], 255 & _t, _t >> 16, V, pt + (bt - 1) * l)));
      };
    }
    function yt() {
      yn[Ma] = Su, yn[Ba] = Vs, yn[Ts] = _u, yn[Ra] = Gs, yn[qa] = Ys, yn[Vo] = Js, yn[zs] = Pu, yn[Go] = Vs, yn[Yo] = Gs, yn[Da] = Ys, yn[Jo] = Js;
    }
    function jt(e) {
      return e & ~ku ? 0 > e ? 0 : 255 : e >> Xs;
    }
    function qt(e, a) {
      return jt((19077 * e >> 8) + (26149 * a >> 8) - 14234);
    }
    function Kt(e, a, l) {
      return jt((19077 * e >> 8) - (6419 * a >> 8) - (13320 * l >> 8) + 8708);
    }
    function Qt(e, a) {
      return jt((19077 * e >> 8) + (33050 * a >> 8) - 17685);
    }
    function re(e, a, l, d, m) {
      d[m + 0] = qt(e, l), d[m + 1] = Kt(e, a, l), d[m + 2] = Qt(e, a);
    }
    function xe(e, a, l, d, m) {
      d[m + 0] = Qt(e, a), d[m + 1] = Kt(e, a, l), d[m + 2] = qt(e, l);
    }
    function Se(e, a, l, d, m) {
      var w = Kt(e, a, l);
      a = w << 3 & 224 | Qt(e, a) >> 3, d[m + 0] = 248 & qt(e, l) | w >> 5, d[m + 1] = a;
    }
    function Ee(e, a, l, d, m) {
      var w = 240 & Qt(e, a) | 15;
      d[m + 0] = 240 & qt(e, l) | Kt(e, a, l) >> 4, d[m + 1] = w;
    }
    function Ye(e, a, l, d, m) {
      d[m + 0] = 255, re(e, a, l, d, m + 1);
    }
    function De(e, a, l, d, m) {
      xe(e, a, l, d, m), d[m + 3] = 255;
    }
    function In(e, a, l, d, m) {
      re(e, a, l, d, m), d[m + 3] = 255;
    }
    function hn(e, a) {
      return 0 > e ? 0 : e > a ? a : e;
    }
    function ir(e, a, l) {
      D[e] = function(d, m, w, y, A, N, k, U, K) {
        for (var $ = U + (-2 & K) * l; U != $; ) a(d[m + 0], w[y + 0], A[N + 0], k, U), a(d[m + 1], w[y + 0], A[N + 0], k, U + l), m += 2, ++y, ++N, U += 2 * l;
        1 & K && a(d[m + 0], w[y + 0], A[N + 0], k, U);
      };
    }
    function Ca(e, a, l) {
      return l == 0 ? e == 0 ? a == 0 ? 6 : 5 : a == 0 ? 4 : 0 : l;
    }
    function Gi(e, a, l, d, m) {
      switch (e >>> 30) {
        case 3:
          mi(a, l, d, m, 0);
          break;
        case 2:
          Qi(a, l, d, m);
          break;
        case 1:
          En(a, l, d, m);
      }
    }
    function Yi(e, a) {
      var l, d, m = a.M, w = a.Nb, y = e.oc, A = e.pc + 40, N = e.oc, k = e.pc + 584, U = e.oc, K = e.pc + 600;
      for (l = 0; 16 > l; ++l) y[A + 32 * l - 1] = 129;
      for (l = 0; 8 > l; ++l) N[k + 32 * l - 1] = 129, U[K + 32 * l - 1] = 129;
      for (0 < m ? y[A - 1 - 32] = N[k - 1 - 32] = U[K - 1 - 32] = 129 : (s(y, A - 32 - 1, 127, 21), s(N, k - 32 - 1, 127, 9), s(U, K - 32 - 1, 127, 9)), d = 0; d < e.za; ++d) {
        var $ = a.ya[a.aa + d];
        if (0 < d) {
          for (l = -1; 16 > l; ++l) i(y, A + 32 * l - 4, y, A + 32 * l + 12, 4);
          for (l = -1; 8 > l; ++l) i(N, k + 32 * l - 4, N, k + 32 * l + 4, 4), i(U, K + 32 * l - 4, U, K + 32 * l + 4, 4);
        }
        var G = e.Gd, vt = e.Hd + d, it = $.ad, H = $.Hc;
        if (0 < m && (i(y, A - 32, G[vt].y, 0, 16), i(N, k - 32, G[vt].f, 0, 8), i(U, K - 32, G[vt].ea, 0, 8)), $.Za) {
          var V = y, pt = A - 32 + 16;
          for (0 < m && (d >= e.za - 1 ? s(V, pt, G[vt].y[15], 4) : i(V, pt, G[vt + 1].y, 0, 4)), l = 0; 4 > l; l++) V[pt + 128 + l] = V[pt + 256 + l] = V[pt + 384 + l] = V[pt + 0 + l];
          for (l = 0; 16 > l; ++l, H <<= 2) V = y, pt = A + $s[l], Mn[$.Ob[l]](V, pt), Gi(H, it, 16 * +l, V, pt);
        } else if (V = Ca(d, m, $.Ob[0]), Ar[V](y, A), H != 0) for (l = 0; 16 > l; ++l, H <<= 2) Gi(H, it, 16 * +l, y, A + $s[l]);
        for (l = $.Gc, V = Ca(d, m, $.Dd), ur[V](N, k), ur[V](U, K), H = it, V = N, pt = k, 255 & ($ = l >> 0) && (170 & $ ? yr(H, 256, V, pt) : or(H, 256, V, pt)), $ = U, H = K, 255 & (l >>= 8) && (170 & l ? yr(it, 320, $, H) : or(it, 320, $, H)), m < e.Ub - 1 && (i(G[vt].y, 0, y, A + 480, 16), i(G[vt].f, 0, N, k + 224, 8), i(G[vt].ea, 0, U, K + 224, 8)), l = 8 * w * e.B, G = e.sa, vt = e.ta + 16 * d + 16 * w * e.R, it = e.qa, $ = e.ra + 8 * d + l, H = e.Ha, V = e.Ia + 8 * d + l, l = 0; 16 > l; ++l) i(G, vt + l * e.R, y, A + 32 * l, 16);
        for (l = 0; 8 > l; ++l) i(it, $ + l * e.B, N, k + 32 * l, 8), i(H, V + l * e.B, U, K + 32 * l, 8);
      }
    }
    function li(e, a, l, d, m, w, y, A, N) {
      var k = [0], U = [0], K = 0, $ = N != null ? N.kd : 0, G = N ?? new Ui();
      if (e == null || 12 > l) return 7;
      G.data = e, G.w = a, G.ha = l, a = [a], l = [l], G.gb = [G.gb];
      t: {
        var vt = a, it = l, H = G.gb;
        if (t(e != null), t(it != null), t(H != null), H[0] = 0, 12 <= it[0] && !r(e, vt[0], "RIFF")) {
          if (r(e, vt[0] + 8, "WEBP")) {
            H = 3;
            break t;
          }
          var V = Et(e, vt[0] + 4);
          if (12 > V || 4294967286 < V) {
            H = 3;
            break t;
          }
          if ($ && V > it[0] - 8) {
            H = 7;
            break t;
          }
          H[0] = V, vt[0] += 12, it[0] -= 12;
        }
        H = 0;
      }
      if (H != 0) return H;
      for (V = 0 < G.gb[0], l = l[0]; ; ) {
        t: {
          var pt = e;
          it = a, H = l;
          var bt = k, mt = U, Ot = vt = [0];
          if ((_t = K = [K])[0] = 0, 8 > H[0]) H = 7;
          else {
            if (!r(pt, it[0], "VP8X")) {
              if (Et(pt, it[0] + 4) != 10) {
                H = 3;
                break t;
              }
              if (18 > H[0]) {
                H = 7;
                break t;
              }
              var St = Et(pt, it[0] + 8), Dt = 1 + Ct(pt, it[0] + 12);
              if (2147483648 <= Dt * (pt = 1 + Ct(pt, it[0] + 15))) {
                H = 3;
                break t;
              }
              Ot != null && (Ot[0] = St), bt != null && (bt[0] = Dt), mt != null && (mt[0] = pt), it[0] += 18, H[0] -= 18, _t[0] = 1;
            }
            H = 0;
          }
        }
        if (K = K[0], vt = vt[0], H != 0) return H;
        if (it = !!(2 & vt), !V && K) return 3;
        if (w != null && (w[0] = !!(16 & vt)), y != null && (y[0] = it), A != null && (A[0] = 0), y = k[0], vt = U[0], K && it && N == null) {
          H = 0;
          break;
        }
        if (4 > l) {
          H = 7;
          break;
        }
        if (V && K || !V && !K && !r(e, a[0], "ALPH")) {
          l = [l], G.na = [G.na], G.P = [G.P], G.Sa = [G.Sa];
          t: {
            St = e, H = a, V = l;
            var _t = G.gb;
            bt = G.na, mt = G.P, Ot = G.Sa, Dt = 22, t(St != null), t(V != null), pt = H[0];
            var se = V[0];
            for (t(bt != null), t(Ot != null), bt[0] = null, mt[0] = null, Ot[0] = 0; ; ) {
              if (H[0] = pt, V[0] = se, 8 > se) {
                H = 7;
                break t;
              }
              var le = Et(St, pt + 4);
              if (4294967286 < le) {
                H = 3;
                break t;
              }
              var ae = 8 + le + 1 & -2;
              if (Dt += ae, 0 < _t && Dt > _t) {
                H = 3;
                break t;
              }
              if (!r(St, pt, "VP8 ") || !r(St, pt, "VP8L")) {
                H = 0;
                break t;
              }
              if (se[0] < ae) {
                H = 7;
                break t;
              }
              r(St, pt, "ALPH") || (bt[0] = St, mt[0] = pt + 8, Ot[0] = le), pt += ae, se -= ae;
            }
          }
          if (l = l[0], G.na = G.na[0], G.P = G.P[0], G.Sa = G.Sa[0], H != 0) break;
        }
        l = [l], G.Ja = [G.Ja], G.xa = [G.xa];
        t: if (_t = e, H = a, V = l, bt = G.gb[0], mt = G.Ja, Ot = G.xa, St = H[0], pt = !r(_t, St, "VP8 "), Dt = !r(_t, St, "VP8L"), t(_t != null), t(V != null), t(mt != null), t(Ot != null), 8 > V[0]) H = 7;
        else {
          if (pt || Dt) {
            if (_t = Et(_t, St + 4), 12 <= bt && _t > bt - 12) {
              H = 3;
              break t;
            }
            if ($ && _t > V[0] - 8) {
              H = 7;
              break t;
            }
            mt[0] = _t, H[0] += 8, V[0] -= 8, Ot[0] = Dt;
          } else Ot[0] = 5 <= V[0] && _t[St + 0] == 47 && !(_t[St + 4] >> 5), mt[0] = V[0];
          H = 0;
        }
        if (l = l[0], G.Ja = G.Ja[0], G.xa = G.xa[0], a = a[0], H != 0) break;
        if (4294967286 < G.Ja) return 3;
        if (A == null || it || (A[0] = G.xa ? 2 : 1), y = [y], vt = [vt], G.xa) {
          if (5 > l) {
            H = 7;
            break;
          }
          A = y, $ = vt, it = w, e == null || 5 > l ? e = 0 : 5 <= l && e[a + 0] == 47 && !(e[a + 4] >> 5) ? (V = [0], _t = [0], bt = [0], Z(mt = new L(), e, a, l), Tt(mt, V, _t, bt) ? (A != null && (A[0] = V[0]), $ != null && ($[0] = _t[0]), it != null && (it[0] = bt[0]), e = 1) : e = 0) : e = 0;
        } else {
          if (10 > l) {
            H = 7;
            break;
          }
          A = vt, e == null || 10 > l || !ga(e, a + 3, l - 3) ? e = 0 : ($ = e[a + 0] | e[a + 1] << 8 | e[a + 2] << 16, it = 16383 & (e[a + 7] << 8 | e[a + 6]), e = 16383 & (e[a + 9] << 8 | e[a + 8]), 1 & $ || 3 < ($ >> 1 & 7) || !($ >> 4 & 1) || $ >> 5 >= G.Ja || !it || !e ? e = 0 : (y && (y[0] = it), A && (A[0] = e), e = 1));
        }
        if (!e || (y = y[0], vt = vt[0], K && (k[0] != y || U[0] != vt))) return 3;
        N != null && (N[0] = G, N.offset = a - N.w, t(4294967286 > a - N.w), t(N.offset == N.ha - l));
        break;
      }
      return H == 0 || H == 7 && K && N == null ? (w != null && (w[0] |= G.na != null && 0 < G.na.length), d != null && (d[0] = y), m != null && (m[0] = vt), 0) : H;
    }
    function Ji(e, a, l) {
      var d = a.width, m = a.height, w = 0, y = 0, A = d, N = m;
      if (a.Da = e != null && 0 < e.Da, a.Da && (A = e.cd, N = e.bd, w = e.v, y = e.j, 11 > l || (w &= -2, y &= -2), 0 > w || 0 > y || 0 >= A || 0 >= N || w + A > d || y + N > m)) return 0;
      if (a.v = w, a.j = y, a.va = w + A, a.o = y + N, a.U = A, a.T = N, a.da = e != null && 0 < e.da, a.da) {
        if (!Xt(A, N, l = [e.ib], w = [e.hb])) return 0;
        a.ib = l[0], a.hb = w[0];
      }
      return a.ob = e != null && e.ob, a.Kb = e == null || !e.Sd, a.da && (a.ob = a.ib < 3 * d / 4 && a.hb < 3 * m / 4, a.Kb = 0), 1;
    }
    function Xi(e) {
      if (e == null) return 2;
      if (11 > e.S) {
        var a = e.f.RGBA;
        a.fb += (e.height - 1) * a.A, a.A = -a.A;
      } else a = e.f.kb, e = e.height, a.O += (e - 1) * a.fa, a.fa = -a.fa, a.N += (e - 1 >> 1) * a.Ab, a.Ab = -a.Ab, a.W += (e - 1 >> 1) * a.Db, a.Db = -a.Db, a.F != null && (a.J += (e - 1) * a.lb, a.lb = -a.lb);
      return 0;
    }
    function hi(e, a, l, d) {
      if (d == null || 0 >= e || 0 >= a) return 2;
      if (l != null) {
        if (l.Da) {
          var m = l.cd, w = l.bd, y = -2 & l.v, A = -2 & l.j;
          if (0 > y || 0 > A || 0 >= m || 0 >= w || y + m > e || A + w > a) return 2;
          e = m, a = w;
        }
        if (l.da) {
          if (!Xt(e, a, m = [l.ib], w = [l.hb])) return 2;
          e = m[0], a = w[0];
        }
      }
      d.width = e, d.height = a;
      t: {
        var N = d.width, k = d.height;
        if (e = d.S, 0 >= N || 0 >= k || !(e >= Ma && 13 > e)) e = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            y = w = m = a = 0;
            var U = (A = N * Zs[e]) * k;
            if (11 > e || (w = (k + 1) / 2 * (a = (N + 1) / 2), e == 12 && (y = (m = N) * k)), (k = o(U + 2 * w + y)) == null) {
              e = 1;
              break t;
            }
            d.sd = k, 11 > e ? ((N = d.f.RGBA).eb = k, N.fb = 0, N.A = A, N.size = U) : ((N = d.f.kb).y = k, N.O = 0, N.fa = A, N.Fd = U, N.f = k, N.N = 0 + U, N.Ab = a, N.Cd = w, N.ea = k, N.W = 0 + U + w, N.Db = a, N.Ed = w, e == 12 && (N.F = k, N.J = 0 + U + 2 * w), N.Tc = y, N.lb = m);
          }
          if (a = 1, m = d.S, w = d.width, y = d.height, m >= Ma && 13 > m) if (11 > m) e = d.f.RGBA, a &= (A = Math.abs(e.A)) * (y - 1) + w <= e.size, a &= A >= w * Zs[m], a &= e.eb != null;
          else {
            e = d.f.kb, A = (w + 1) / 2, U = (y + 1) / 2, N = Math.abs(e.fa), k = Math.abs(e.Ab);
            var K = Math.abs(e.Db), $ = Math.abs(e.lb), G = $ * (y - 1) + w;
            a &= N * (y - 1) + w <= e.Fd, a &= k * (U - 1) + A <= e.Cd, a = (a &= K * (U - 1) + A <= e.Ed) & N >= w & k >= A & K >= A, a &= e.y != null, a &= e.f != null, a &= e.ea != null, m == 12 && (a &= $ >= w, a &= G <= e.Tc, a &= e.F != null);
          }
          else a = 0;
          e = a ? 0 : 2;
        }
      }
      return e != 0 || l != null && l.fd && (e = Xi(d)), e;
    }
    var nn = 64, fi = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], di = 24, pi = 32, Ki = 8, rn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    Nt("Predictor0", "PredictorAdd0"), D.Predictor0 = function() {
      return 4278190080;
    }, D.Predictor1 = function(e) {
      return e;
    }, D.Predictor2 = function(e, a, l) {
      return a[l + 0];
    }, D.Predictor3 = function(e, a, l) {
      return a[l + 1];
    }, D.Predictor4 = function(e, a, l) {
      return a[l - 1];
    }, D.Predictor5 = function(e, a, l) {
      return Pt(Pt(e, a[l + 1]), a[l + 0]);
    }, D.Predictor6 = function(e, a, l) {
      return Pt(e, a[l - 1]);
    }, D.Predictor7 = function(e, a, l) {
      return Pt(e, a[l + 0]);
    }, D.Predictor8 = function(e, a, l) {
      return Pt(a[l - 1], a[l + 0]);
    }, D.Predictor9 = function(e, a, l) {
      return Pt(a[l + 0], a[l + 1]);
    }, D.Predictor10 = function(e, a, l) {
      return Pt(Pt(e, a[l - 1]), Pt(a[l + 0], a[l + 1]));
    }, D.Predictor11 = function(e, a, l) {
      var d = a[l + 0];
      return 0 >= Zt(d >> 24 & 255, e >> 24 & 255, (a = a[l - 1]) >> 24 & 255) + Zt(d >> 16 & 255, e >> 16 & 255, a >> 16 & 255) + Zt(d >> 8 & 255, e >> 8 & 255, a >> 8 & 255) + Zt(255 & d, 255 & e, 255 & a) ? d : e;
    }, D.Predictor12 = function(e, a, l) {
      var d = a[l + 0];
      return (Rt((e >> 24 & 255) + (d >> 24 & 255) - ((a = a[l - 1]) >> 24 & 255)) << 24 | Rt((e >> 16 & 255) + (d >> 16 & 255) - (a >> 16 & 255)) << 16 | Rt((e >> 8 & 255) + (d >> 8 & 255) - (a >> 8 & 255)) << 8 | Rt((255 & e) + (255 & d) - (255 & a))) >>> 0;
    }, D.Predictor13 = function(e, a, l) {
      var d = a[l - 1];
      return (Gt((e = Pt(e, a[l + 0])) >> 24 & 255, d >> 24 & 255) << 24 | Gt(e >> 16 & 255, d >> 16 & 255) << 16 | Gt(e >> 8 & 255, d >> 8 & 255) << 8 | Gt(e >> 0 & 255, d >> 0 & 255)) >>> 0;
    };
    var zo = D.PredictorAdd0;
    D.PredictorAdd1 = te, Nt("Predictor2", "PredictorAdd2"), Nt("Predictor3", "PredictorAdd3"), Nt("Predictor4", "PredictorAdd4"), Nt("Predictor5", "PredictorAdd5"), Nt("Predictor6", "PredictorAdd6"), Nt("Predictor7", "PredictorAdd7"), Nt("Predictor8", "PredictorAdd8"), Nt("Predictor9", "PredictorAdd9"), Nt("Predictor10", "PredictorAdd10"), Nt("Predictor11", "PredictorAdd11"), Nt("Predictor12", "PredictorAdd12"), Nt("Predictor13", "PredictorAdd13");
    var $i = D.PredictorAdd2;
    ee("ColorIndexInverseTransform", "MapARGB", "32b", function(e) {
      return e >> 8 & 255;
    }, function(e) {
      return e;
    }), ee("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(e) {
      return e;
    }, function(e) {
      return e >> 8 & 255;
    });
    var ja, Cn = D.ColorIndexInverseTransform, Zi = D.MapARGB, Uo = D.VP8LColorIndexInverseTransformAlpha, Ho = D.MapAlpha, br = D.VP8LPredictorsAdd = [];
    br.length = 16, (D.VP8LPredictors = []).length = 16, (D.VP8LPredictorsAdd_C = []).length = 16, (D.VP8LPredictors_C = []).length = 16;
    var vn, jn, wr, Jn, ar, gi, On, mi, Qi, yr, En, or, Ur, vi, Hr, Lr, ta, bn, sr, be, we, Fe, qe, cr, xr, bi, Oa, Es, Ms = o(511), Bs = o(2041), Rs = o(225), qs = o(767), Ds = 0, Wo = Bs, Ea = Rs, fn = qs, wn = Ms, Ma = 0, Ba = 1, Ts = 2, Ra = 3, qa = 4, Vo = 5, zs = 6, Go = 7, Yo = 8, Da = 9, Jo = 10, hu = [2, 3, 7], fu = [3, 3, 11], Us = [280, 256, 256, 256, 40], du = [0, 1, 1, 1, 0], pu = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], gu = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], mu = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], vu = 8, Xo = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], Ko = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ea = null, bu = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], wu = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], Hs = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], yu = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], Lu = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], xu = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], Au = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Ar = [], Mn = [], ur = [], Nu = 1, Ws = 2, Nr = [], yn = [];
    st("UpsampleRgbLinePair", re, 3), st("UpsampleBgrLinePair", xe, 3), st("UpsampleRgbaLinePair", In, 4), st("UpsampleBgraLinePair", De, 4), st("UpsampleArgbLinePair", Ye, 4), st("UpsampleRgba4444LinePair", Ee, 2), st("UpsampleRgb565LinePair", Se, 2);
    var Su = D.UpsampleRgbLinePair, _u = D.UpsampleBgrLinePair, Vs = D.UpsampleRgbaLinePair, Gs = D.UpsampleBgraLinePair, Ys = D.UpsampleArgbLinePair, Js = D.UpsampleRgba4444LinePair, Pu = D.UpsampleRgb565LinePair, Ta = 16, za = 1 << Ta - 1, na = -227, $o = 482, Xs = 6, ku = (256 << Xs) - 1, Ks = 0, Fu = o(256), Iu = o(256), Cu = o(256), ju = o(256), Ou = o($o - na), Eu = o($o - na);
    ir("YuvToRgbRow", re, 3), ir("YuvToBgrRow", xe, 3), ir("YuvToRgbaRow", In, 4), ir("YuvToBgraRow", De, 4), ir("YuvToArgbRow", Ye, 4), ir("YuvToRgba4444Row", Ee, 2), ir("YuvToRgb565Row", Se, 2);
    var $s = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], Ua = [0, 2, 8], Mu = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], Bu = 1;
    this.WebPDecodeRGBA = function(e, a, l, d, m) {
      var w = Ba, y = new ci(), A = new An();
      y.ba = A, A.S = w, A.width = [A.width], A.height = [A.height];
      var N = A.width, k = A.height, U = new tr();
      if (U == null || e == null) var K = 2;
      else t(U != null), K = li(e, a, l, U.width, U.height, U.Pd, U.Qd, U.format, null);
      if (K != 0 ? N = 0 : (N != null && (N[0] = U.width[0]), k != null && (k[0] = U.height[0]), N = 1), N) {
        A.width = A.width[0], A.height = A.height[0], d != null && (d[0] = A.width), m != null && (m[0] = A.height);
        t: {
          if (d = new ei(), (m = new Ui()).data = e, m.w = a, m.ha = l, m.kd = 1, a = [0], t(m != null), ((e = li(m.data, m.w, m.ha, null, null, null, a, null, m)) == 0 || e == 7) && a[0] && (e = 4), (a = e) == 0) {
            if (t(y != null), d.data = m.data, d.w = m.w + m.offset, d.ha = m.ha - m.offset, d.put = Un, d.ac = He, d.bc = Hn, d.ma = y, m.xa) {
              if ((e = mn()) == null) {
                y = 1;
                break t;
              }
              if (function($, G) {
                var vt = [0], it = [0], H = [0];
                e: for (; ; ) {
                  if ($ == null) return 0;
                  if (G == null) return $.a = 2, 0;
                  if ($.l = G, $.a = 0, Z($.m, G.data, G.w, G.ha), !Tt($.m, vt, it, H)) {
                    $.a = 3;
                    break e;
                  }
                  if ($.xb = Ws, G.width = vt[0], G.height = it[0], !Gn(vt[0], it[0], 1, $, null)) break e;
                  return 1;
                }
                return t($.a != 0), 0;
              }(e, d)) {
                if (d = (a = hi(d.width, d.height, y.Oa, y.ba)) == 0) {
                  e: {
                    d = e;
                    n: for (; ; ) {
                      if (d == null) {
                        d = 0;
                        break e;
                      }
                      if (t(d.s.yc != null), t(d.s.Ya != null), t(0 < d.s.Wb), t((l = d.l) != null), t((m = l.ma) != null), d.xb != 0) {
                        if (d.ca = m.ba, d.tb = m.tb, t(d.ca != null), !Ji(m.Oa, l, Ra)) {
                          d.a = 2;
                          break n;
                        }
                        if (!Rr(d, l.width) || l.da) break n;
                        if ((l.da || ce(d.ca.S)) && J(), 11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), d.ca.f.kb.F != null && J()), d.Pb && 0 < d.s.ua && d.s.vb.X == null && !Ut(d.s.vb, d.s.Wa.Xa)) {
                          d.a = 1;
                          break n;
                        }
                        d.xb = 0;
                      }
                      if (!Pn(d, d.V, d.Ba, d.c, d.i, l.o, Xr)) break n;
                      m.Dc = d.Ma, d = 1;
                      break e;
                    }
                    t(d.a != 0), d = 0;
                  }
                  d = !d;
                }
                d && (a = e.a);
              } else a = e.a;
            } else {
              if ((e = new xo()) == null) {
                y = 1;
                break t;
              }
              if (e.Fa = m.na, e.P = m.P, e.qc = m.Sa, ma(e, d)) {
                if ((a = hi(d.width, d.height, y.Oa, y.ba)) == 0) {
                  if (e.Aa = 0, l = y.Oa, t((m = e) != null), l != null) {
                    if (0 < (N = 0 > (N = l.Md) ? 0 : 100 < N ? 255 : 255 * N / 100)) {
                      for (k = U = 0; 4 > k; ++k) 12 > (K = m.pb[k]).lc && (K.ia = N * Mu[0 > K.lc ? 0 : K.lc] >> 3), U |= K.ia;
                      U && (alert("todo:VP8InitRandom"), m.ia = 1);
                    }
                    m.Ga = l.Id, 100 < m.Ga ? m.Ga = 100 : 0 > m.Ga && (m.Ga = 0);
                  }
                  Ao(e, d) || (a = e.a);
                }
              } else a = e.a;
            }
            a == 0 && y.Oa != null && y.Oa.fd && (a = Xi(y.ba));
          }
          y = a;
        }
        w = y != 0 ? null : 11 > w ? A.f.RGBA.eb : A.f.kb.y;
      } else w = null;
      return w;
    };
    var Zs = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(D, gt) {
    for (var dt = "", F = 0; F < 4; F++) dt += String.fromCharCode(D[gt++]);
    return dt;
  }
  function b(D, gt) {
    return (D[gt + 0] << 0 | D[gt + 1] << 8 | D[gt + 2] << 16) >>> 0;
  }
  function x(D, gt) {
    return (D[gt + 0] << 0 | D[gt + 1] << 8 | D[gt + 2] << 16 | D[gt + 3] << 24) >>> 0;
  }
  new f();
  var S = [0], p = [0], O = [], I = new f(), R = n, _ = function(D, gt) {
    var dt = {}, F = 0, P = !1, z = 0, q = 0;
    if (dt.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    function(j, M, W, Y) {
      for (var Q = 0; Q < Y; Q++) if (j[M + Q] != W.charCodeAt(Q)) return !0;
      return !1;
    }(D, gt, "RIFF", 4)) {
      var at, nt;
      for (x(D, gt += 4), gt += 8; gt < D.length; ) {
        var lt = g(D, gt), Z = x(D, gt += 4);
        gt += 4;
        var ft = Z + (1 & Z);
        switch (lt) {
          case "VP8 ":
          case "VP8L":
            dt.frames[F] === void 0 && (dt.frames[F] = {}), (L = dt.frames[F]).src_off = P ? q : gt - 8, L.src_size = z + Z + 8, F++, P && (P = !1, z = 0, q = 0);
            break;
          case "VP8X":
            (L = dt.header = {}).feature_flags = D[gt];
            var ht = gt + 4;
            L.canvas_width = 1 + b(D, ht), ht += 3, L.canvas_height = 1 + b(D, ht), ht += 3;
            break;
          case "ALPH":
            P = !0, z = ft + 8, q = gt - 8;
            break;
          case "ANIM":
            (L = dt.header).bgcolor = x(D, gt), ht = gt + 4, L.loop_count = (at = D)[(nt = ht) + 0] << 0 | at[nt + 1] << 8, ht += 2;
            break;
          case "ANMF":
            var kt, L;
            (L = dt.frames[F] = {}).offset_x = 2 * b(D, gt), gt += 3, L.offset_y = 2 * b(D, gt), gt += 3, L.width = 1 + b(D, gt), gt += 3, L.height = 1 + b(D, gt), gt += 3, L.duration = b(D, gt), gt += 3, kt = D[gt++], L.dispose = 1 & kt, L.blend = kt >> 1 & 1;
        }
        lt != "ANMF" && (gt += ft);
      }
      return dt;
    }
  }(R, 0);
  _.response = R, _.rgbaoutput = !0, _.dataurl = !1;
  var E = _.header ? _.header : null, X = _.frames ? _.frames : null;
  if (E) {
    E.loop_counter = E.loop_count, S = [E.canvas_height], p = [E.canvas_width];
    for (var ot = 0; ot < X.length && X[ot].blend != 0; ot++) ;
  }
  var ut = X[0], wt = I.WebPDecodeRGBA(R, ut.src_off, ut.src_size, p, S);
  ut.rgba = wt, ut.imgwidth = p[0], ut.imgheight = S[0];
  for (var tt = 0; tt < p[0] * S[0] * 4; tt++) O[tt] = wt[tt];
  return this.width = p, this.height = S, this.data = O, this;
}
(function(n) {
  var t = function() {
    return typeof xs == "function";
  }, r = function(S, p, O, I) {
    var R = 4, _ = u;
    switch (I) {
      case n.image_compression.FAST:
        R = 1, _ = o;
        break;
      case n.image_compression.MEDIUM:
        R = 6, _ = h;
        break;
      case n.image_compression.SLOW:
        R = 9, _ = f;
    }
    S = i(S, p, O, _);
    var E = xs(S, { level: R });
    return n.__addimage__.arrayBufferToBinaryString(E);
  }, i = function(S, p, O, I) {
    for (var R, _, E, X = S.length / p, ot = new Uint8Array(S.length + X), ut = b(), wt = 0; wt < X; wt += 1) {
      if (E = wt * p, R = S.subarray(E, E + p), I) ot.set(I(R, O, _), E + wt);
      else {
        for (var tt, D = ut.length, gt = []; tt < D; tt += 1) gt[tt] = ut[tt](R, O, _);
        var dt = x(gt.concat());
        ot.set(gt[dt], E + wt);
      }
      _ = R;
    }
    return ot;
  }, s = function(S) {
    var p = Array.apply([], S);
    return p.unshift(0), p;
  }, o = function(S, p) {
    var O, I = [], R = S.length;
    I[0] = 1;
    for (var _ = 0; _ < R; _ += 1) O = S[_ - p] || 0, I[_ + 1] = S[_] - O + 256 & 255;
    return I;
  }, u = function(S, p, O) {
    var I, R = [], _ = S.length;
    R[0] = 2;
    for (var E = 0; E < _; E += 1) I = O && O[E] || 0, R[E + 1] = S[E] - I + 256 & 255;
    return R;
  }, h = function(S, p, O) {
    var I, R, _ = [], E = S.length;
    _[0] = 3;
    for (var X = 0; X < E; X += 1) I = S[X - p] || 0, R = O && O[X] || 0, _[X + 1] = S[X] + 256 - (I + R >>> 1) & 255;
    return _;
  }, f = function(S, p, O) {
    var I, R, _, E, X = [], ot = S.length;
    X[0] = 4;
    for (var ut = 0; ut < ot; ut += 1) I = S[ut - p] || 0, R = O && O[ut] || 0, _ = O && O[ut - p] || 0, E = g(I, R, _), X[ut + 1] = S[ut] - E + 256 & 255;
    return X;
  }, g = function(S, p, O) {
    if (S === p && p === O) return S;
    var I = Math.abs(p - O), R = Math.abs(S - O), _ = Math.abs(S + p - O - O);
    return I <= R && I <= _ ? S : R <= _ ? p : O;
  }, b = function() {
    return [s, o, u, h, f];
  }, x = function(S) {
    var p = S.map(function(O) {
      return O.reduce(function(I, R) {
        return I + Math.abs(R);
      }, 0);
    });
    return p.indexOf(Math.min.apply(null, p));
  };
  n.processPNG = function(S, p, O, I) {
    var R, _, E, X, ot, ut, wt, tt, D, gt, dt, F, P, z, q, at = this.decode.FLATE_DECODE, nt = "";
    if (this.__addimage__.isArrayBuffer(S) && (S = new Uint8Array(S)), this.__addimage__.isArrayBufferView(S)) {
      if (S = (E = new El(S)).imgData, _ = E.bits, R = E.colorSpace, ot = E.colors, [4, 6].indexOf(E.colorType) !== -1) {
        if (E.bits === 8) {
          D = (tt = E.pixelBitlength == 32 ? new Uint32Array(E.decodePixels().buffer) : E.pixelBitlength == 16 ? new Uint16Array(E.decodePixels().buffer) : new Uint8Array(E.decodePixels().buffer)).length, dt = new Uint8Array(D * E.colors), gt = new Uint8Array(D);
          var lt, Z = E.pixelBitlength - E.bits;
          for (z = 0, q = 0; z < D; z++) {
            for (P = tt[z], lt = 0; lt < Z; ) dt[q++] = P >>> lt & 255, lt += E.bits;
            gt[z] = P >>> lt & 255;
          }
        }
        if (E.bits === 16) {
          D = (tt = new Uint32Array(E.decodePixels().buffer)).length, dt = new Uint8Array(D * (32 / E.pixelBitlength) * E.colors), gt = new Uint8Array(D * (32 / E.pixelBitlength)), F = E.colors > 1, z = 0, q = 0;
          for (var ft = 0; z < D; ) P = tt[z++], dt[q++] = P >>> 0 & 255, F && (dt[q++] = P >>> 16 & 255, P = tt[z++], dt[q++] = P >>> 0 & 255), gt[ft++] = P >>> 16 & 255;
          _ = 8;
        }
        I !== n.image_compression.NONE && t() ? (S = r(dt, E.width * E.colors, E.colors, I), wt = r(gt, E.width, 1, I)) : (S = dt, wt = gt, at = void 0);
      }
      if (E.colorType === 3 && (R = this.color_spaces.INDEXED, ut = E.palette, E.transparency.indexed)) {
        var ht = E.transparency.indexed, kt = 0;
        for (z = 0, D = ht.length; z < D; ++z) kt += ht[z];
        if ((kt /= 255) === D - 1 && ht.indexOf(0) !== -1) X = [ht.indexOf(0)];
        else if (kt !== D) {
          for (tt = E.decodePixels(), gt = new Uint8Array(tt.length), z = 0, D = tt.length; z < D; z++) gt[z] = ht[tt[z]];
          wt = r(gt, E.width, 1);
        }
      }
      var L = function(j) {
        var M;
        switch (j) {
          case n.image_compression.FAST:
            M = 11;
            break;
          case n.image_compression.MEDIUM:
            M = 13;
            break;
          case n.image_compression.SLOW:
            M = 14;
            break;
          default:
            M = 12;
        }
        return M;
      }(I);
      return at === this.decode.FLATE_DECODE && (nt = "/Predictor " + L + " "), nt += "/Colors " + ot + " /BitsPerComponent " + _ + " /Columns " + E.width, (this.__addimage__.isArrayBuffer(S) || this.__addimage__.isArrayBufferView(S)) && (S = this.__addimage__.arrayBufferToBinaryString(S)), (wt && this.__addimage__.isArrayBuffer(wt) || this.__addimage__.isArrayBufferView(wt)) && (wt = this.__addimage__.arrayBufferToBinaryString(wt)), { alias: O, data: S, index: p, filter: at, decodeParameters: nt, transparency: X, palette: ut, sMask: wt, predictor: L, width: E.width, height: E.height, bitsPerComponent: _, colorSpace: R };
    }
  };
})(zt.API), function(n) {
  n.processGIF89A = function(t, r, i, s) {
    var o = new Ml(t), u = o.width, h = o.height, f = [];
    o.decodeAndBlitFrameRGBA(0, f);
    var g = { data: f, width: u, height: h }, b = new gs(100).encode(g, 100);
    return n.processJPEG.call(this, b, r, i, s);
  }, n.processGIF87A = n.processGIF89A;
}(zt.API), qn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(n);
    for (var t = 0; t < n; t++) {
      var r = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0);
      this.palette[t] = { red: s, green: i, blue: r, quad: o };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, qn.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var n = "bit" + this.bitPP, t = this.width * this.height * 4;
    this.data = new Uint8Array(t), this[n]();
  } catch (r) {
    ve.log("bit decode error:" + r);
  }
}, qn.prototype.bit1 = function() {
  var n, t = Math.ceil(this.width / 8), r = t % 4;
  for (n = this.height - 1; n >= 0; n--) {
    for (var i = this.bottom_up ? n : this.height - 1 - n, s = 0; s < t; s++) for (var o = this.datav.getUint8(this.pos++, !0), u = i * this.width * 4 + 8 * s * 4, h = 0; h < 8 && 8 * s + h < this.width; h++) {
      var f = this.palette[o >> 7 - h & 1];
      this.data[u + 4 * h] = f.blue, this.data[u + 4 * h + 1] = f.green, this.data[u + 4 * h + 2] = f.red, this.data[u + 4 * h + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, qn.prototype.bit4 = function() {
  for (var n = Math.ceil(this.width / 2), t = n % 4, r = this.height - 1; r >= 0; r--) {
    for (var i = this.bottom_up ? r : this.height - 1 - r, s = 0; s < n; s++) {
      var o = this.datav.getUint8(this.pos++, !0), u = i * this.width * 4 + 2 * s * 4, h = o >> 4, f = 15 & o, g = this.palette[h];
      if (this.data[u] = g.blue, this.data[u + 1] = g.green, this.data[u + 2] = g.red, this.data[u + 3] = 255, 2 * s + 1 >= this.width) break;
      g = this.palette[f], this.data[u + 4] = g.blue, this.data[u + 4 + 1] = g.green, this.data[u + 4 + 2] = g.red, this.data[u + 4 + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, qn.prototype.bit8 = function() {
  for (var n = this.width % 4, t = this.height - 1; t >= 0; t--) {
    for (var r = this.bottom_up ? t : this.height - 1 - t, i = 0; i < this.width; i++) {
      var s = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 4 * i;
      if (s < this.palette.length) {
        var u = this.palette[s];
        this.data[o] = u.red, this.data[o + 1] = u.green, this.data[o + 2] = u.blue, this.data[o + 3] = 255;
      } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, qn.prototype.bit15 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
    for (var i = this.bottom_up ? r : this.height - 1 - r, s = 0; s < this.width; s++) {
      var o = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var u = (o & t) / t * 255 | 0, h = (o >> 5 & t) / t * 255 | 0, f = (o >> 10 & t) / t * 255 | 0, g = o >> 15 ? 255 : 0, b = i * this.width * 4 + 4 * s;
      this.data[b] = f, this.data[b + 1] = h, this.data[b + 2] = u, this.data[b + 3] = g;
    }
    this.pos += n;
  }
}, qn.prototype.bit16 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), r = parseInt("111111", 2), i = this.height - 1; i >= 0; i--) {
    for (var s = this.bottom_up ? i : this.height - 1 - i, o = 0; o < this.width; o++) {
      var u = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var h = (u & t) / t * 255 | 0, f = (u >> 5 & r) / r * 255 | 0, g = (u >> 11) / t * 255 | 0, b = s * this.width * 4 + 4 * o;
      this.data[b] = g, this.data[b + 1] = f, this.data[b + 2] = h, this.data[b + 3] = 255;
    }
    this.pos += n;
  }
}, qn.prototype.bit24 = function() {
  for (var n = this.height - 1; n >= 0; n--) {
    for (var t = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
      var i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), u = t * this.width * 4 + 4 * r;
      this.data[u] = o, this.data[u + 1] = s, this.data[u + 2] = i, this.data[u + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, qn.prototype.bit32 = function() {
  for (var n = this.height - 1; n >= 0; n--) for (var t = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
    var i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), h = t * this.width * 4 + 4 * r;
    this.data[h] = o, this.data[h + 1] = s, this.data[h + 2] = i, this.data[h + 3] = u;
  }
}, qn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processBMP = function(t, r, i, s) {
    var o = new qn(t, !1), u = o.width, h = o.height, f = { data: o.getData(), width: u, height: h }, g = new gs(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, i, s);
  };
}(zt.API), Oc.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  n.processWEBP = function(t, r, i, s) {
    var o = new Oc(t), u = o.width, h = o.height, f = { data: o.getData(), width: u, height: h }, g = new gs(100).encode(f, 100);
    return n.processJPEG.call(this, g, r, i, s);
  };
}(zt.API), zt.API.processRGBA = function(n, t, r) {
  for (var i = n.data, s = i.length, o = new Uint8Array(s / 4 * 3), u = new Uint8Array(s / 4), h = 0, f = 0, g = 0; g < s; g += 4) {
    var b = i[g], x = i[g + 1], S = i[g + 2], p = i[g + 3];
    o[h++] = b, o[h++] = x, o[h++] = S, u[f++] = p;
  }
  var O = this.__addimage__.arrayBufferToBinaryString(o);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(u), data: O, index: t, alias: r, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: n.width, height: n.height };
}, zt.API.setLanguage = function(n) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Ni = zt.API, no = Ni.getCharWidthsArray = function(n, t) {
  var r, i, s = (t = t || {}).font || this.internal.getFont(), o = t.fontSize || this.internal.getFontSize(), u = t.charSpace || this.internal.getCharSpace(), h = t.widths ? t.widths : s.metadata.Unicode.widths, f = h.fof ? h.fof : 1, g = t.kerning ? t.kerning : s.metadata.Unicode.kerning, b = g.fof ? g.fof : 1, x = t.doKerning !== !1, S = 0, p = n.length, O = 0, I = h[0] || f, R = [];
  for (r = 0; r < p; r++) i = n.charCodeAt(r), typeof s.metadata.widthOfString == "function" ? R.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(i)) + u * (1e3 / o) || 0) / 1e3) : (S = x && fe(g[i]) === "object" && !isNaN(parseInt(g[i][O], 10)) ? g[i][O] / b : 0, R.push((h[i] || I) / f + S)), O = i;
  return R;
}, Fc = Ni.getStringUnitWidth = function(n, t) {
  var r = (t = t || {}).fontSize || this.internal.getFontSize(), i = t.font || this.internal.getFont(), s = t.charSpace || this.internal.getCharSpace();
  return Ni.processArabic && (n = Ni.processArabic(n)), typeof i.metadata.widthOfString == "function" ? i.metadata.widthOfString(n, r, s) / r : no.apply(this, arguments).reduce(function(o, u) {
    return o + u;
  }, 0);
}, Ic = function(n, t, r, i) {
  for (var s = [], o = 0, u = n.length, h = 0; o !== u && h + t[o] < r; ) h += t[o], o++;
  s.push(n.slice(0, o));
  var f = o;
  for (h = 0; o !== u; ) h + t[o] > i && (s.push(n.slice(f, o)), h = 0, f = o), h += t[o], o++;
  return f !== o && s.push(n.slice(f, o)), s;
}, Cc = function(n, t, r) {
  r || (r = {});
  var i, s, o, u, h, f, g, b = [], x = [b], S = r.textIndent || 0, p = 0, O = 0, I = n.split(" "), R = no.apply(this, [" ", r])[0];
  if (f = r.lineIndent === -1 ? I[0].length + 2 : r.lineIndent || 0) {
    var _ = Array(f).join(" "), E = [];
    I.map(function(ot) {
      (ot = ot.split(/\s*\n/)).length > 1 ? E = E.concat(ot.map(function(ut, wt) {
        return (wt && ut.length ? `
` : "") + ut;
      })) : E.push(ot[0]);
    }), I = E, f = Fc.apply(this, [_, r]);
  }
  for (o = 0, u = I.length; o < u; o++) {
    var X = 0;
    if (i = I[o], f && i[0] == `
` && (i = i.substr(1), X = 1), S + p + (O = (s = no.apply(this, [i, r])).reduce(function(ot, ut) {
      return ot + ut;
    }, 0)) > t || X) {
      if (O > t) {
        for (h = Ic.apply(this, [i, s, t - (S + p), t]), b.push(h.shift()), b = [h.pop()]; h.length; ) x.push([h.shift()]);
        O = s.slice(i.length - (b[0] ? b[0].length : 0)).reduce(function(ot, ut) {
          return ot + ut;
        }, 0);
      } else b = [i];
      x.push(b), S = O + f, p = R;
    } else b.push(i), S += p + O, p = R;
  }
  return g = f ? function(ot, ut) {
    return (ut ? _ : "") + ot.join(" ");
  } : function(ot) {
    return ot.join(" ");
  }, x.map(g);
}, Ni.splitTextToSize = function(n, t, r) {
  var i, s = (r = r || {}).fontSize || this.internal.getFontSize(), o = (function(b) {
    if (b.widths && b.kerning) return { widths: b.widths, kerning: b.kerning };
    var x = this.internal.getFont(b.fontName, b.fontStyle);
    return x.metadata.Unicode ? { widths: x.metadata.Unicode.widths || { 0: 1 }, kerning: x.metadata.Unicode.kerning || {} } : { font: x.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, r);
  i = Array.isArray(n) ? n : String(n).split(/\r?\n/);
  var u = 1 * this.internal.scaleFactor * t / s;
  o.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / s : 0, o.lineIndent = r.lineIndent;
  var h, f, g = [];
  for (h = 0, f = i.length; h < f; h++) g = g.concat(Cc.apply(this, [i[h], u, o]));
  return g;
}, function(n) {
  n.__fontmetrics__ = n.__fontmetrics__ || {};
  for (var t = "klmnopqrstuvwxyz", r = {}, i = {}, s = 0; s < t.length; s++) r[t[s]] = "0123456789abcdef"[s], i["0123456789abcdef"[s]] = t[s];
  var o = function(x) {
    return "0x" + parseInt(x, 10).toString(16);
  }, u = n.__fontmetrics__.compress = function(x) {
    var S, p, O, I, R = ["{"];
    for (var _ in x) {
      if (S = x[_], isNaN(parseInt(_, 10)) ? p = "'" + _ + "'" : (_ = parseInt(_, 10), p = (p = o(_).slice(2)).slice(0, -1) + i[p.slice(-1)]), typeof S == "number") S < 0 ? (O = o(S).slice(3), I = "-") : (O = o(S).slice(2), I = ""), O = I + O.slice(0, -1) + i[O.slice(-1)];
      else {
        if (fe(S) !== "object") throw new Error("Don't know what to do with value type " + fe(S) + ".");
        O = u(S);
      }
      R.push(p + O);
    }
    return R.push("}"), R.join("");
  }, h = n.__fontmetrics__.uncompress = function(x) {
    if (typeof x != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var S, p, O, I, R = {}, _ = 1, E = R, X = [], ot = "", ut = "", wt = x.length - 1, tt = 1; tt < wt; tt += 1) (I = x[tt]) == "'" ? S ? (O = S.join(""), S = void 0) : S = [] : S ? S.push(I) : I == "{" ? (X.push([E, O]), E = {}, O = void 0) : I == "}" ? ((p = X.pop())[0][p[1]] = E, O = void 0, E = p[0]) : I == "-" ? _ = -1 : O === void 0 ? r.hasOwnProperty(I) ? (ot += r[I], O = parseInt(ot, 16) * _, _ = 1, ot = "") : ot += I : r.hasOwnProperty(I) ? (ut += r[I], E[O] = parseInt(ut, 16) * _, _ = 1, O = void 0, ut = "") : ut += I;
    return R;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, b = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  n.events.push(["addFont", function(x) {
    var S = x.font, p = b.Unicode[S.postScriptName];
    p && (S.metadata.Unicode = {}, S.metadata.Unicode.widths = p.widths, S.metadata.Unicode.kerning = p.kerning);
    var O = g.Unicode[S.postScriptName];
    O && (S.metadata.Unicode.encoding = O, S.encoding = O.codePages[0]);
  }]);
}(zt.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function(r) {
    for (var i = r.length, s = new Uint8Array(i), o = 0; o < i; o++) s[o] = r.charCodeAt(o);
    return s;
  };
  n.API.events.push(["addFont", function(r) {
    var i = void 0, s = r.font, o = r.instance;
    if (!s.isStandardFont) {
      if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      if (typeof (i = o.existsFileInVFS(s.postScriptName) === !1 ? o.loadFile(s.postScriptName) : o.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      (function(u, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? t(h) : t(ua(h)), u.metadata = n.API.TTFFont.open(h), u.metadata.Unicode = u.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, u.metadata.glyIdsUsed = [0];
      })(s, i);
    }
  }]);
}(zt), /** @license
 * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(n) {
  function t() {
    return (Ht.canvg ? Promise.resolve(Ht.canvg) : import("./index.es-mA2HNct6.js")).catch(function(r) {
      return Promise.reject(new Error("Could not load canvg: " + r));
    }).then(function(r) {
      return r.default ? r.default : r;
    });
  }
  zt.API.addSvgAsImage = function(r, i, s, o, u, h, f, g) {
    if (isNaN(i) || isNaN(s)) throw ve.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(o) || isNaN(u)) throw ve.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var b = document.createElement("canvas");
    b.width = o, b.height = u;
    var x = b.getContext("2d");
    x.fillStyle = "#fff", x.fillRect(0, 0, b.width, b.height);
    var S = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, p = this;
    return t().then(function(O) {
      return O.fromString(x, r, S);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(O) {
      return O.render(S);
    }).then(function() {
      p.addImage(b.toDataURL("image/jpeg", 1), i, s, o, u, f, g);
    });
  };
}(), zt.API.putTotalPages = function(n) {
  var t, r = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(n, "g"), r = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var i = 1; i <= this.internal.getNumberOfPages(); i++) for (var s = 0; s < this.internal.pages[i].length; s++) this.internal.pages[i][s] = this.internal.pages[i][s].replace(t, r);
  return this;
}, zt.API.viewerPreferences = function(n, t) {
  var r;
  n = n || {}, t = t || !1;
  var i, s, o, u = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(u), f = [], g = 0, b = 0, x = 0;
  function S(O, I) {
    var R, _ = !1;
    for (R = 0; R < O.length; R += 1) O[R] === I && (_ = !0);
    return _;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(u)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, n === "reset" || t === !0) {
    var p = h.length;
    for (x = 0; x < p; x += 1) r[h[x]].value = r[h[x]].defaultValue, r[h[x]].explicitSet = !1;
  }
  if (fe(n) === "object") {
    for (s in n) if (o = n[s], S(h, s) && o !== void 0) {
      if (r[s].type === "boolean" && typeof o == "boolean") r[s].value = o;
      else if (r[s].type === "name" && S(r[s].valueSet, o)) r[s].value = o;
      else if (r[s].type === "integer" && Number.isInteger(o)) r[s].value = o;
      else if (r[s].type === "array") {
        for (g = 0; g < o.length; g += 1) if (i = !0, o[g].length === 1 && typeof o[g][0] == "number") f.push(String(o[g] - 1));
        else if (o[g].length > 1) {
          for (b = 0; b < o[g].length; b += 1) typeof o[g][b] != "number" && (i = !1);
          i === !0 && f.push([o[g][0] - 1, o[g][1] - 1].join(" "));
        }
        r[s].value = "[" + f.join(" ") + "]";
      } else r[s].value = r[s].defaultValue;
      r[s].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var O, I = [];
    for (O in r) r[O].explicitSet === !0 && (r[O].type === "name" ? I.push("/" + O + " /" + r[O].value) : I.push("/" + O + " " + r[O].value));
    I.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + I.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = r, this;
}, /** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(n) {
  var t = function() {
    var i = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(i)), u = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), g = o.length + u.length + h.length + s.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(s + o + u + h + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, r = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  n.addMetadata = function(i, s) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: i, namespaceuri: s || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r), this.internal.events.subscribe("postPutResources", t)), this;
  };
}(zt.API), function(n) {
  var t = n.API, r = t.pdfEscape16 = function(o, u) {
    for (var h, f = u.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], b = [""], x = 0, S = o.length; x < S; ++x) {
      if (h = u.metadata.characterToGlyph(o.charCodeAt(x)), u.metadata.glyIdsUsed.push(h), u.metadata.toUnicode[h] = o.charCodeAt(x), f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(u.metadata.widthOfGlyph(h), 10)])), h == "0") return b.join("");
      h = h.toString(16), b.push(g[4 - h.length], h);
    }
    return b.join("");
  }, i = function(o) {
    var u, h, f, g, b, x, S;
    for (b = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, f = [], x = 0, S = (h = Object.keys(o).sort(function(p, O) {
      return p - O;
    })).length; x < S; x++) u = h[x], f.length >= 100 && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), o[u] !== void 0 && o[u] !== null && typeof o[u].toString == "function" && (g = ("0000" + o[u].toString(16)).slice(-4), u = ("0000" + (+u).toString(16)).slice(-4), f.push("<" + u + "><" + g + ">"));
    return f.length && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), b += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  t.events.push(["putFont", function(o) {
    (function(u) {
      var h = u.font, f = u.out, g = u.newObject, b = u.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "Identity-H") {
        for (var x = h.metadata.Unicode.widths, S = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", O = 0; O < S.length; O++) p += String.fromCharCode(S[O]);
        var I = g();
        b({ data: p, addLength1: !0, objectId: I }), f("endobj");
        var R = g();
        b({ data: i(h.metadata.toUnicode), addLength1: !0, objectId: R }), f("endobj");
        var _ = g();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + _i(h.fontName)), f("/FontFile2 " + I + " 0 R"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f(">>"), f("endobj");
        var E = g();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + _i(h.fontName)), f("/FontDescriptor " + _ + " 0 R"), f("/W " + n.API.PDFObject.convert(x)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), h.objectNumber = g(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + R + " 0 R"), f("/BaseFont /" + _i(h.fontName)), f("/Encoding /" + h.encoding), f("/DescendantFonts [" + E + " 0 R]"), f(">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]), t.events.push(["putFont", function(o) {
    (function(u) {
      var h = u.font, f = u.out, g = u.newObject, b = u.putStream;
      if (h.metadata instanceof n.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var x = h.metadata.rawData, S = "", p = 0; p < x.length; p++) S += String.fromCharCode(x[p]);
        var O = g();
        b({ data: S, addLength1: !0, objectId: O }), f("endobj");
        var I = g();
        b({ data: i(h.metadata.toUnicode), addLength1: !0, objectId: I }), f("endobj");
        var R = g();
        f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + O + " 0 R"), f("/Flags 96"), f("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), f("/FontName /" + _i(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = g();
        for (var _ = 0; _ < h.metadata.hmtx.widths.length; _++) h.metadata.hmtx.widths[_] = parseInt(h.metadata.hmtx.widths[_] * (1e3 / h.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + I + " 0 R/BaseFont/" + _i(h.fontName) + "/FontDescriptor " + R + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]);
  var s = function(o) {
    var u, h = o.text || "", f = o.x, g = o.y, b = o.options || {}, x = o.mutex || {}, S = x.pdfEscape, p = x.activeFontKey, O = x.fonts, I = p, R = "", _ = 0, E = "", X = O[I].encoding;
    if (O[I].encoding !== "Identity-H") return { text: h, x: f, y: g, options: b, mutex: x };
    for (E = h, I = p, Array.isArray(h) && (E = h[0]), _ = 0; _ < E.length; _ += 1) O[I].metadata.hasOwnProperty("cmap") && (u = O[I].metadata.cmap.unicode.codeMap[E[_].charCodeAt(0)]), u || E[_].charCodeAt(0) < 256 && O[I].metadata.hasOwnProperty("Unicode") ? R += E[_] : R += "";
    var ot = "";
    return parseInt(I.slice(1)) < 14 || X === "WinAnsiEncoding" ? ot = S(R, I).split("").map(function(ut) {
      return ut.charCodeAt(0).toString(16);
    }).join("") : X === "Identity-H" && (ot = r(R, O[I])), x.isHex = !0, { text: ot, x: f, y: g, options: b, mutex: x };
  };
  t.events.push(["postProcessText", function(o) {
    var u = o.text || "", h = [], f = { text: u, x: o.x, y: o.y, options: o.options, mutex: o.mutex };
    if (Array.isArray(u)) {
      var g = 0;
      for (g = 0; g < u.length; g += 1) Array.isArray(u[g]) && u[g].length === 3 ? h.push([s(Object.assign({}, f, { text: u[g][0] })).text, u[g][1], u[g][2]]) : h.push(s(Object.assign({}, f, { text: u[g] })).text);
      o.text = h;
    } else o.text = s(Object.assign({}, f, { text: u })).text;
  }]);
}(zt), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(n) {
  var t = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  n.existsFileInVFS = function(r) {
    return t.call(this), this.internal.vFS[r] !== void 0;
  }, n.addFileToVFS = function(r, i) {
    return t.call(this), this.internal.vFS[r] = i, this;
  }, n.getFileFromVFS = function(r) {
    return t.call(this), this.internal.vFS[r] !== void 0 ? this.internal.vFS[r] : null;
  };
}(zt.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(n) {
  n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(i) {
    var s, o, u, h, f, g, b, x = t, S = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], O = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, I = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, R = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], _ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), E = !1, X = 0;
    this.__bidiEngine__ = {};
    var ot = function(F) {
      var P = F.charCodeAt(), z = P >> 8, q = I[z];
      return q !== void 0 ? x[256 * q + (255 & P)] : z === 252 || z === 253 ? "AL" : _.test(z) ? "L" : z === 8 ? "R" : "N";
    }, ut = function(F) {
      for (var P, z = 0; z < F.length; z++) {
        if ((P = ot(F.charAt(z))) === "L") return !1;
        if (P === "R") return !0;
      }
      return !1;
    }, wt = function(F, P, z, q) {
      var at, nt, lt, Z, ft = P[q];
      switch (ft) {
        case "L":
        case "R":
          E = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          E && (ft = "AN");
          break;
        case "AL":
          E = !0, ft = "R";
          break;
        case "WS":
          ft = "N";
          break;
        case "CS":
          q < 1 || q + 1 >= P.length || (at = z[q - 1]) !== "EN" && at !== "AN" || (nt = P[q + 1]) !== "EN" && nt !== "AN" ? ft = "N" : E && (nt = "AN"), ft = nt === at ? nt : "N";
          break;
        case "ES":
          ft = (at = q > 0 ? z[q - 1] : "B") === "EN" && q + 1 < P.length && P[q + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (q > 0 && z[q - 1] === "EN") {
            ft = "EN";
            break;
          }
          if (E) {
            ft = "N";
            break;
          }
          for (lt = q + 1, Z = P.length; lt < Z && P[lt] === "ET"; ) lt++;
          ft = lt < Z && P[lt] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (u && !h) {
            for (Z = P.length, lt = q + 1; lt < Z && P[lt] === "NSM"; ) lt++;
            if (lt < Z) {
              var ht = F[q], kt = ht >= 1425 && ht <= 2303 || ht === 64286;
              if (at = P[lt], kt && (at === "R" || at === "AL")) {
                ft = "R";
                break;
              }
            }
          }
          ft = q < 1 || (at = P[q - 1]) === "B" ? "N" : z[q - 1];
          break;
        case "B":
          E = !1, s = !0, ft = X;
          break;
        case "S":
          o = !0, ft = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          E = !1;
          break;
        case "BN":
          ft = "N";
      }
      return ft;
    }, tt = function(F, P, z) {
      var q = F.split("");
      return z && D(q, z, { hiLevel: X }), q.reverse(), P && P.reverse(), q.join("");
    }, D = function(F, P, z) {
      var q, at, nt, lt, Z, ft = -1, ht = F.length, kt = 0, L = [], j = X ? p : S, M = [];
      for (E = !1, s = !1, o = !1, at = 0; at < ht; at++) M[at] = ot(F[at]);
      for (nt = 0; nt < ht; nt++) {
        if (Z = kt, L[nt] = wt(F, M, L, nt), q = 240 & (kt = j[Z][O[L[nt]]]), kt &= 15, P[nt] = lt = j[kt][5], q > 0) if (q === 16) {
          for (at = ft; at < nt; at++) P[at] = 1;
          ft = -1;
        } else ft = -1;
        if (j[kt][6]) ft === -1 && (ft = nt);
        else if (ft > -1) {
          for (at = ft; at < nt; at++) P[at] = lt;
          ft = -1;
        }
        M[nt] === "B" && (P[nt] = 0), z.hiLevel |= lt;
      }
      o && function(W, Y, Q) {
        for (var et = 0; et < Q; et++) if (W[et] === "S") {
          Y[et] = X;
          for (var rt = et - 1; rt >= 0 && W[rt] === "WS"; rt--) Y[rt] = X;
        }
      }(M, P, ht);
    }, gt = function(F, P, z, q, at) {
      if (!(at.hiLevel < F)) {
        if (F === 1 && X === 1 && !s) return P.reverse(), void (z && z.reverse());
        for (var nt, lt, Z, ft, ht = P.length, kt = 0; kt < ht; ) {
          if (q[kt] >= F) {
            for (Z = kt + 1; Z < ht && q[Z] >= F; ) Z++;
            for (ft = kt, lt = Z - 1; ft < lt; ft++, lt--) nt = P[ft], P[ft] = P[lt], P[lt] = nt, z && (nt = z[ft], z[ft] = z[lt], z[lt] = nt);
            kt = Z;
          }
          kt++;
        }
      }
    }, dt = function(F, P, z) {
      var q = F.split(""), at = { hiLevel: X };
      return z || (z = []), D(q, z, at), function(nt, lt, Z) {
        if (Z.hiLevel !== 0 && b) for (var ft, ht = 0; ht < nt.length; ht++) lt[ht] === 1 && (ft = R.indexOf(nt[ht])) >= 0 && (nt[ht] = R[ft + 1]);
      }(q, z, at), gt(2, q, P, z, at), gt(1, q, P, z, at), q.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(F, P, z) {
      if (function(at, nt) {
        if (nt) for (var lt = 0; lt < at.length; lt++) nt[lt] = lt;
        h === void 0 && (h = ut(at)), g === void 0 && (g = ut(at));
      }(F, P), u || !f || g) if (u && f && h ^ g) X = h ? 1 : 0, F = tt(F, P, z);
      else if (!u && f && g) X = h ? 1 : 0, F = dt(F, P, z), F = tt(F, P);
      else if (!u || h || f || g) {
        if (u && !f && h ^ g) F = tt(F, P), h ? (X = 0, F = dt(F, P, z)) : (X = 1, F = dt(F, P, z), F = tt(F, P));
        else if (u && h && !f && g) X = 1, F = dt(F, P, z), F = tt(F, P);
        else if (!u && !f && h ^ g) {
          var q = b;
          h ? (X = 1, F = dt(F, P, z), X = 0, b = !1, F = dt(F, P, z), b = q) : (X = 0, F = dt(F, P, z), F = tt(F, P), X = 1, b = !1, F = dt(F, P, z), b = q, F = tt(F, P));
        }
      } else X = 0, F = dt(F, P, z);
      else X = h ? 1 : 0, F = dt(F, P, z);
      return F;
    }, this.__bidiEngine__.setOptions = function(F) {
      F && (u = F.isInputVisual, f = F.isOutputVisual, h = F.isInputRtl, g = F.isOutputRtl, b = F.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(i), this.__bidiEngine__;
  };
  var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], r = new n.__bidiEngine__({ isInputVisual: !0 });
  n.API.events.push(["postProcessText", function(i) {
    var s = i.text, o = (i.x, i.y, i.options || {}), u = (i.mutex, o.lang, []);
    if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, r.setOptions(o), Object.prototype.toString.call(s) === "[object Array]") {
      var h = 0;
      for (u = [], h = 0; h < s.length; h += 1) Object.prototype.toString.call(s[h]) === "[object Array]" ? u.push([r.doBidiReorder(s[h][0]), s[h][1], s[h][2]]) : u.push([r.doBidiReorder(s[h])]);
      i.text = u;
    } else i.text = r.doBidiReorder(s);
    r.setOptions({ isInputVisual: !0 });
  }]);
}(zt), zt.API.TTFFont = function() {
  function n(t) {
    var r;
    if (this.rawData = t, r = this.contents = new Er(t), this.contents.pos = 4, r.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    r.pos = 0, this.parse(), this.subset = new Kl(this), this.registerTTF();
  }
  return n.open = function(t) {
    return new n(t);
  }, n.prototype.parse = function() {
    return this.directory = new Bl(this.contents), this.head = new ql(this), this.name = new Hl(this), this.cmap = new ru(this), this.toUnicode = {}, this.hhea = new Dl(this), this.maxp = new Wl(this), this.hmtx = new Vl(this), this.post = new zl(this), this.os2 = new Tl(this), this.loca = new Xl(this), this.glyf = new Gl(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, n.prototype.registerTTF = function() {
    var t, r, i, s, o;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var u, h, f, g;
      for (g = [], u = 0, h = (f = this.bbox).length; u < h; u++) t = f[u], g.push(Math.round(t * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (i = 255 & (s = this.post.italic_angle), 32768 & (r = s >> 16) && (r = -(1 + (65535 ^ r))), this.italicAngle = +(r + "." + i)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, n.prototype.characterToGlyph = function(t) {
    var r;
    return ((r = this.cmap.unicode) != null ? r.codeMap[t] : void 0) || 0;
  }, n.prototype.widthOfGlyph = function(t) {
    var r;
    return r = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * r;
  }, n.prototype.widthOfString = function(t, r, i) {
    var s, o, u, h;
    for (u = 0, o = 0, h = (t = "" + t).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) s = t.charCodeAt(o), u += this.widthOfGlyph(this.characterToGlyph(s)) + i * (1e3 / r) || 0;
    return u * (r / 1e3);
  }, n.prototype.lineHeight = function(t, r) {
    var i;
    return r == null && (r = !1), i = r ? this.lineGap : 0, (this.ascender + i - this.decender) / 1e3 * t;
  }, n;
}();
var Tn, Er = function() {
  function n(t) {
    this.data = t ?? [], this.pos = 0, this.length = this.data.length;
  }
  return n.prototype.readByte = function() {
    return this.data[this.pos++];
  }, n.prototype.writeByte = function(t) {
    return this.data[this.pos++] = t;
  }, n.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, n.prototype.writeUInt32 = function(t) {
    return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt32 = function() {
    var t;
    return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
  }, n.prototype.writeInt32 = function(t) {
    return t < 0 && (t += 4294967296), this.writeUInt32(t);
  }, n.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, n.prototype.writeUInt16 = function(t) {
    return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt16 = function() {
    var t;
    return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
  }, n.prototype.writeInt16 = function(t) {
    return t < 0 && (t += 65536), this.writeUInt16(t);
  }, n.prototype.readString = function(t) {
    var r, i;
    for (i = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r) i[r] = String.fromCharCode(this.readByte());
    return i.join("");
  }, n.prototype.writeString = function(t) {
    var r, i, s;
    for (s = [], r = 0, i = t.length; 0 <= i ? r < i : r > i; r = 0 <= i ? ++r : --r) s.push(this.writeByte(t.charCodeAt(r)));
    return s;
  }, n.prototype.readShort = function() {
    return this.readInt16();
  }, n.prototype.writeShort = function(t) {
    return this.writeInt16(t);
  }, n.prototype.readLongLong = function() {
    var t, r, i, s, o, u, h, f;
    return t = this.readByte(), r = this.readByte(), i = this.readByte(), s = this.readByte(), o = this.readByte(), u = this.readByte(), h = this.readByte(), f = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ r) + 1099511627776 * (255 ^ i) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ o) + 65536 * (255 ^ u) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * t + 281474976710656 * r + 1099511627776 * i + 4294967296 * s + 16777216 * o + 65536 * u + 256 * h + f;
  }, n.prototype.writeLongLong = function(t) {
    var r, i;
    return r = Math.floor(t / 4294967296), i = 4294967295 & t, this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r), this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i);
  }, n.prototype.readInt = function() {
    return this.readInt32();
  }, n.prototype.writeInt = function(t) {
    return this.writeInt32(t);
  }, n.prototype.read = function(t) {
    var r, i;
    for (r = [], i = 0; 0 <= t ? i < t : i > t; i = 0 <= t ? ++i : --i) r.push(this.readByte());
    return r;
  }, n.prototype.write = function(t) {
    var r, i, s, o;
    for (o = [], i = 0, s = t.length; i < s; i++) r = t[i], o.push(this.writeByte(r));
    return o;
  }, n;
}(), Bl = function() {
  var n;
  function t(r) {
    var i, s, o;
    for (this.scalarType = r.readInt(), this.tableCount = r.readShort(), this.searchRange = r.readShort(), this.entrySelector = r.readShort(), this.rangeShift = r.readShort(), this.tables = {}, s = 0, o = this.tableCount; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) i = { tag: r.readString(4), checksum: r.readInt(), offset: r.readInt(), length: r.readInt() }, this.tables[i.tag] = i;
  }
  return t.prototype.encode = function(r) {
    var i, s, o, u, h, f, g, b, x, S, p, O, I;
    for (I in p = Object.keys(r).length, f = Math.log(2), x = 16 * Math.floor(Math.log(p) / f), u = Math.floor(x / f), b = 16 * p - x, (s = new Er()).writeInt(this.scalarType), s.writeShort(p), s.writeShort(x), s.writeShort(u), s.writeShort(b), o = 16 * p, g = s.pos + o, h = null, O = [], r) for (S = r[I], s.writeString(I), s.writeInt(n(S)), s.writeInt(g), s.writeInt(S.length), O = O.concat(S), I === "head" && (h = g), g += S.length; g % 4; ) O.push(0), g++;
    return s.write(O), i = 2981146554 - n(s.data), s.pos = h + 8, s.writeUInt32(i), s.data;
  }, n = function(r) {
    var i, s, o, u;
    for (r = iu.call(r); r.length % 4; ) r.push(0);
    for (o = new Er(r), s = 0, i = 0, u = r.length; i < u; i = i += 4) s += o.readUInt32();
    return 4294967295 & s;
  }, t;
}(), Rl = {}.hasOwnProperty, Qn = function(n, t) {
  for (var r in t) Rl.call(t, r) && (n[r] = t[r]);
  function i() {
    this.constructor = n;
  }
  return i.prototype = t.prototype, n.prototype = new i(), n.__super__ = t.prototype, n;
};
Tn = function() {
  function n(t) {
    var r;
    this.file = t, r = this.file.directory.tables[this.tag], this.exists = !!r, r && (this.offset = r.offset, this.length = r.length, this.parse(this.file.contents));
  }
  return n.prototype.parse = function() {
  }, n.prototype.encode = function() {
  }, n.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, n;
}();
var ql = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "head", t.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.revision = r.readInt(), this.checkSumAdjustment = r.readInt(), this.magicNumber = r.readInt(), this.flags = r.readShort(), this.unitsPerEm = r.readShort(), this.created = r.readLongLong(), this.modified = r.readLongLong(), this.xMin = r.readShort(), this.yMin = r.readShort(), this.xMax = r.readShort(), this.yMax = r.readShort(), this.macStyle = r.readShort(), this.lowestRecPPEM = r.readShort(), this.fontDirectionHint = r.readShort(), this.indexToLocFormat = r.readShort(), this.glyphDataFormat = r.readShort();
  }, t.prototype.encode = function(r) {
    var i;
    return (i = new Er()).writeInt(this.version), i.writeInt(this.revision), i.writeInt(this.checkSumAdjustment), i.writeInt(this.magicNumber), i.writeShort(this.flags), i.writeShort(this.unitsPerEm), i.writeLongLong(this.created), i.writeLongLong(this.modified), i.writeShort(this.xMin), i.writeShort(this.yMin), i.writeShort(this.xMax), i.writeShort(this.yMax), i.writeShort(this.macStyle), i.writeShort(this.lowestRecPPEM), i.writeShort(this.fontDirectionHint), i.writeShort(r), i.writeShort(this.glyphDataFormat), i.data;
  }, t;
}(), Ec = function() {
  function n(t, r) {
    var i, s, o, u, h, f, g, b, x, S, p, O, I, R, _, E, X;
    switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = r + t.readInt(), x = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = t.readByte();
        break;
      case 4:
        for (p = t.readUInt16(), S = p / 2, t.pos += 6, o = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(t.readUInt16());
          return ut;
        }(), t.pos += 2, I = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(t.readUInt16());
          return ut;
        }(), g = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(t.readUInt16());
          return ut;
        }(), b = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ut.push(t.readUInt16());
          return ut;
        }(), s = (this.length - t.pos + this.offset) / 2, h = function() {
          var ot, ut;
          for (ut = [], f = ot = 0; 0 <= s ? ot < s : ot > s; f = 0 <= s ? ++ot : --ot) ut.push(t.readUInt16());
          return ut;
        }(), f = _ = 0, X = o.length; _ < X; f = ++_) for (R = o[f], i = E = O = I[f]; O <= R ? E <= R : E >= R; i = O <= R ? ++E : --E) b[f] === 0 ? u = i + g[f] : (u = h[b[f] / 2 + (i - O) - (S - f)] || 0) !== 0 && (u += g[f]), this.codeMap[i] = 65535 & u;
    }
    t.pos = x;
  }
  return n.encode = function(t, r) {
    var i, s, o, u, h, f, g, b, x, S, p, O, I, R, _, E, X, ot, ut, wt, tt, D, gt, dt, F, P, z, q, at, nt, lt, Z, ft, ht, kt, L, j, M, W, Y, Q, et, rt, At, xt, Ct;
    switch (q = new Er(), u = Object.keys(t).sort(function(Et, Ut) {
      return Et - Ut;
    }), r) {
      case "macroman":
        for (I = 0, R = function() {
          var Et = [];
          for (O = 0; O < 256; ++O) Et.push(0);
          return Et;
        }(), E = { 0: 0 }, o = {}, at = 0, ft = u.length; at < ft; at++) E[rt = t[s = u[at]]] == null && (E[rt] = ++I), o[s] = { old: t[s], new: E[t[s]] }, R[s] = E[t[s]];
        return q.writeUInt16(1), q.writeUInt16(0), q.writeUInt32(12), q.writeUInt16(0), q.writeUInt16(262), q.writeUInt16(0), q.write(R), { charMap: o, subtable: q.data, maxGlyphID: I + 1 };
      case "unicode":
        for (P = [], x = [], X = 0, E = {}, i = {}, _ = g = null, nt = 0, ht = u.length; nt < ht; nt++) E[ut = t[s = u[nt]]] == null && (E[ut] = ++X), i[s] = { old: ut, new: E[ut] }, h = E[ut] - s, _ != null && h === g || (_ && x.push(_), P.push(s), g = h), _ = s;
        for (_ && x.push(_), x.push(65535), P.push(65535), dt = 2 * (gt = P.length), D = 2 * Math.pow(Math.log(gt) / Math.LN2, 2), S = Math.log(D / 2) / Math.LN2, tt = 2 * gt - D, f = [], wt = [], p = [], O = lt = 0, kt = P.length; lt < kt; O = ++lt) {
          if (F = P[O], b = x[O], F === 65535) {
            f.push(0), wt.push(0);
            break;
          }
          if (F - (z = i[F].new) >= 32768) for (f.push(0), wt.push(2 * (p.length + gt - O)), s = Z = F; F <= b ? Z <= b : Z >= b; s = F <= b ? ++Z : --Z) p.push(i[s].new);
          else f.push(z - F), wt.push(0);
        }
        for (q.writeUInt16(3), q.writeUInt16(1), q.writeUInt32(12), q.writeUInt16(4), q.writeUInt16(16 + 8 * gt + 2 * p.length), q.writeUInt16(0), q.writeUInt16(dt), q.writeUInt16(D), q.writeUInt16(S), q.writeUInt16(tt), Q = 0, L = x.length; Q < L; Q++) s = x[Q], q.writeUInt16(s);
        for (q.writeUInt16(0), et = 0, j = P.length; et < j; et++) s = P[et], q.writeUInt16(s);
        for (At = 0, M = f.length; At < M; At++) h = f[At], q.writeUInt16(h);
        for (xt = 0, W = wt.length; xt < W; xt++) ot = wt[xt], q.writeUInt16(ot);
        for (Ct = 0, Y = p.length; Ct < Y; Ct++) I = p[Ct], q.writeUInt16(I);
        return { charMap: i, subtable: q.data, maxGlyphID: X + 1 };
    }
  }, n;
}(), ru = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "cmap", t.prototype.parse = function(r) {
    var i, s, o;
    for (r.pos = this.offset, this.version = r.readUInt16(), o = r.readUInt16(), this.tables = [], this.unicode = null, s = 0; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) i = new Ec(r, this.offset), this.tables.push(i), i.isUnicode && this.unicode == null && (this.unicode = i);
    return !0;
  }, t.encode = function(r, i) {
    var s, o;
    return i == null && (i = "macroman"), s = Ec.encode(r, i), (o = new Er()).writeUInt16(0), o.writeUInt16(1), s.table = o.data.concat(s.subtable), s;
  }, t;
}(), Dl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "hhea", t.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.ascender = r.readShort(), this.decender = r.readShort(), this.lineGap = r.readShort(), this.advanceWidthMax = r.readShort(), this.minLeftSideBearing = r.readShort(), this.minRightSideBearing = r.readShort(), this.xMaxExtent = r.readShort(), this.caretSlopeRise = r.readShort(), this.caretSlopeRun = r.readShort(), this.caretOffset = r.readShort(), r.pos += 8, this.metricDataFormat = r.readShort(), this.numberOfMetrics = r.readUInt16();
  }, t;
}(), Tl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "OS/2", t.prototype.parse = function(r) {
    if (r.pos = this.offset, this.version = r.readUInt16(), this.averageCharWidth = r.readShort(), this.weightClass = r.readUInt16(), this.widthClass = r.readUInt16(), this.type = r.readShort(), this.ySubscriptXSize = r.readShort(), this.ySubscriptYSize = r.readShort(), this.ySubscriptXOffset = r.readShort(), this.ySubscriptYOffset = r.readShort(), this.ySuperscriptXSize = r.readShort(), this.ySuperscriptYSize = r.readShort(), this.ySuperscriptXOffset = r.readShort(), this.ySuperscriptYOffset = r.readShort(), this.yStrikeoutSize = r.readShort(), this.yStrikeoutPosition = r.readShort(), this.familyClass = r.readShort(), this.panose = function() {
      var i, s;
      for (s = [], i = 0; i < 10; ++i) s.push(r.readByte());
      return s;
    }(), this.charRange = function() {
      var i, s;
      for (s = [], i = 0; i < 4; ++i) s.push(r.readInt());
      return s;
    }(), this.vendorID = r.readString(4), this.selection = r.readShort(), this.firstCharIndex = r.readShort(), this.lastCharIndex = r.readShort(), this.version > 0 && (this.ascent = r.readShort(), this.descent = r.readShort(), this.lineGap = r.readShort(), this.winAscent = r.readShort(), this.winDescent = r.readShort(), this.codePageRange = function() {
      var i, s;
      for (s = [], i = 0; i < 2; i = ++i) s.push(r.readInt());
      return s;
    }(), this.version > 1)) return this.xHeight = r.readShort(), this.capHeight = r.readShort(), this.defaultChar = r.readShort(), this.breakChar = r.readShort(), this.maxContext = r.readShort();
  }, t;
}(), zl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "post", t.prototype.parse = function(r) {
    var i, s, o;
    switch (r.pos = this.offset, this.format = r.readInt(), this.italicAngle = r.readInt(), this.underlinePosition = r.readShort(), this.underlineThickness = r.readShort(), this.isFixedPitch = r.readInt(), this.minMemType42 = r.readInt(), this.maxMemType42 = r.readInt(), this.minMemType1 = r.readInt(), this.maxMemType1 = r.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var u;
        for (s = r.readUInt16(), this.glyphNameIndex = [], u = 0; 0 <= s ? u < s : u > s; u = 0 <= s ? ++u : --u) this.glyphNameIndex.push(r.readUInt16());
        for (this.names = [], o = []; r.pos < this.offset + this.length; ) i = r.readByte(), o.push(this.names.push(r.readString(i)));
        return o;
      case 151552:
        return s = r.readUInt16(), this.offsets = r.read(s);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var h, f, g;
          for (g = [], u = h = 0, f = this.file.maxp.numGlyphs; 0 <= f ? h < f : h > f; u = 0 <= f ? ++h : --h) g.push(r.readUInt32());
          return g;
        }).call(this);
    }
  }, t;
}(), Ul = function(n, t) {
  this.raw = n, this.length = n.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
}, Hl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "name", t.prototype.parse = function(r) {
    var i, s, o, u, h, f, g, b, x, S, p;
    for (r.pos = this.offset, r.readShort(), i = r.readShort(), f = r.readShort(), s = [], u = 0; 0 <= i ? u < i : u > i; u = 0 <= i ? ++u : --u) s.push({ platformID: r.readShort(), encodingID: r.readShort(), languageID: r.readShort(), nameID: r.readShort(), length: r.readShort(), offset: this.offset + f + r.readShort() });
    for (g = {}, u = x = 0, S = s.length; x < S; u = ++x) o = s[u], r.pos = o.offset, b = r.readString(o.length), h = new Ul(b, o), g[p = o.nameID] == null && (g[p] = []), g[o.nameID].push(h);
    this.strings = g, this.copyright = g[0], this.fontFamily = g[1], this.fontSubfamily = g[2], this.uniqueSubfamily = g[3], this.fontName = g[4], this.version = g[5];
    try {
      this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = g[7], this.manufacturer = g[8], this.designer = g[9], this.description = g[10], this.vendorUrl = g[11], this.designerUrl = g[12], this.license = g[13], this.licenseUrl = g[14], this.preferredFamily = g[15], this.preferredSubfamily = g[17], this.compatibleFull = g[18], this.sampleText = g[19];
  }, t;
}(), Wl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "maxp", t.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.numGlyphs = r.readUInt16(), this.maxPoints = r.readUInt16(), this.maxContours = r.readUInt16(), this.maxCompositePoints = r.readUInt16(), this.maxComponentContours = r.readUInt16(), this.maxZones = r.readUInt16(), this.maxTwilightPoints = r.readUInt16(), this.maxStorage = r.readUInt16(), this.maxFunctionDefs = r.readUInt16(), this.maxInstructionDefs = r.readUInt16(), this.maxStackElements = r.readUInt16(), this.maxSizeOfInstructions = r.readUInt16(), this.maxComponentElements = r.readUInt16(), this.maxComponentDepth = r.readUInt16();
  }, t;
}(), Vl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "hmtx", t.prototype.parse = function(r) {
    var i, s, o, u, h, f, g;
    for (r.pos = this.offset, this.metrics = [], i = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? i < f : i > f; i = 0 <= f ? ++i : --i) this.metrics.push({ advance: r.readUInt16(), lsb: r.readInt16() });
    for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var b, x;
      for (x = [], i = b = 0; 0 <= o ? b < o : b > o; i = 0 <= o ? ++b : --b) x.push(r.readInt16());
      return x;
    }(), this.widths = (function() {
      var b, x, S, p;
      for (p = [], b = 0, x = (S = this.metrics).length; b < x; b++) u = S[b], p.push(u.advance);
      return p;
    }).call(this), s = this.widths[this.widths.length - 1], g = [], i = h = 0; 0 <= o ? h < o : h > o; i = 0 <= o ? ++h : --h) g.push(this.widths.push(s));
    return g;
  }, t.prototype.forGlyph = function(r) {
    return r in this.metrics ? this.metrics[r] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[r - this.metrics.length] };
  }, t;
}(), iu = [].slice, Gl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "glyf", t.prototype.parse = function() {
    return this.cache = {};
  }, t.prototype.glyphFor = function(r) {
    var i, s, o, u, h, f, g, b, x, S;
    return r in this.cache ? this.cache[r] : (u = this.file.loca, i = this.file.contents, s = u.indexOf(r), (o = u.lengthOf(r)) === 0 ? this.cache[r] = null : (i.pos = this.offset + s, h = (f = new Er(i.read(o))).readShort(), b = f.readShort(), S = f.readShort(), g = f.readShort(), x = f.readShort(), this.cache[r] = h === -1 ? new Jl(f, b, S, g, x) : new Yl(f, h, b, S, g, x), this.cache[r]));
  }, t.prototype.encode = function(r, i, s) {
    var o, u, h, f, g;
    for (h = [], u = [], f = 0, g = i.length; f < g; f++) o = r[i[f]], u.push(h.length), o && (h = h.concat(o.encode(s)));
    return u.push(h.length), { table: h, offsets: u };
  }, t;
}(), Yl = function() {
  function n(t, r, i, s, o, u) {
    this.raw = t, this.numberOfContours = r, this.xMin = i, this.yMin = s, this.xMax = o, this.yMax = u, this.compound = !1;
  }
  return n.prototype.encode = function() {
    return this.raw.data;
  }, n;
}(), Jl = function() {
  function n(t, r, i, s, o) {
    var u, h;
    for (this.raw = t, this.xMin = r, this.yMin = i, this.xMax = s, this.yMax = o, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], u = this.raw; h = u.readShort(), this.glyphOffsets.push(u.pos), this.glyphIDs.push(u.readUInt16()), 32 & h; ) u.pos += 1 & h ? 4 : 2, 128 & h ? u.pos += 8 : 64 & h ? u.pos += 4 : 8 & h && (u.pos += 2);
  }
  return n.prototype.encode = function() {
    var t, r, i;
    for (r = new Er(iu.call(this.raw.data)), t = 0, i = this.glyphIDs.length; t < i; ++t) r.pos = this.glyphOffsets[t];
    return r.data;
  }, n;
}(), Xl = function(n) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return Qn(t, Tn), t.prototype.tag = "loca", t.prototype.parse = function(r) {
    var i, s;
    return r.pos = this.offset, i = this.file.head.indexToLocFormat, this.offsets = i === 0 ? (function() {
      var o, u;
      for (u = [], s = 0, o = this.length; s < o; s += 2) u.push(2 * r.readUInt16());
      return u;
    }).call(this) : (function() {
      var o, u;
      for (u = [], s = 0, o = this.length; s < o; s += 4) u.push(r.readUInt32());
      return u;
    }).call(this);
  }, t.prototype.indexOf = function(r) {
    return this.offsets[r];
  }, t.prototype.lengthOf = function(r) {
    return this.offsets[r + 1] - this.offsets[r];
  }, t.prototype.encode = function(r, i) {
    for (var s = new Uint32Array(this.offsets.length), o = 0, u = 0, h = 0; h < s.length; ++h) if (s[h] = o, u < i.length && i[u] == h) {
      ++u, s[h] = o;
      var f = this.offsets[h], g = this.offsets[h + 1] - f;
      g > 0 && (o += g);
    }
    for (var b = new Array(4 * s.length), x = 0; x < s.length; ++x) b[4 * x + 3] = 255 & s[x], b[4 * x + 2] = (65280 & s[x]) >> 8, b[4 * x + 1] = (16711680 & s[x]) >> 16, b[4 * x] = (4278190080 & s[x]) >> 24;
    return b;
  }, t;
}(), Kl = function() {
  function n(t) {
    this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return n.prototype.generateCmap = function() {
    var t, r, i, s, o;
    for (r in s = this.font.cmap.tables[0].codeMap, t = {}, o = this.subset) i = o[r], t[r] = s[i];
    return t;
  }, n.prototype.glyphsFor = function(t) {
    var r, i, s, o, u, h, f;
    for (s = {}, u = 0, h = t.length; u < h; u++) s[o = t[u]] = this.font.glyf.glyphFor(o);
    for (o in r = [], s) (i = s[o]) != null && i.compound && r.push.apply(r, i.glyphIDs);
    if (r.length > 0) for (o in f = this.glyphsFor(r)) i = f[o], s[o] = i;
    return s;
  }, n.prototype.encode = function(t, r) {
    var i, s, o, u, h, f, g, b, x, S, p, O, I, R, _;
    for (s in i = ru.encode(this.generateCmap(), "unicode"), u = this.glyphsFor(t), p = { 0: 0 }, _ = i.charMap) p[(f = _[s]).old] = f.new;
    for (O in S = i.maxGlyphID, u) O in p || (p[O] = S++);
    return b = function(E) {
      var X, ot;
      for (X in ot = {}, E) ot[E[X]] = X;
      return ot;
    }(p), x = Object.keys(b).sort(function(E, X) {
      return E - X;
    }), I = function() {
      var E, X, ot;
      for (ot = [], E = 0, X = x.length; E < X; E++) h = x[E], ot.push(b[h]);
      return ot;
    }(), o = this.font.glyf.encode(u, I, p), g = this.font.loca.encode(o.offsets, I), R = { cmap: this.font.cmap.raw(), glyf: o.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(r) }, this.font.os2.exists && (R["OS/2"] = this.font.os2.raw()), this.font.directory.encode(R);
  }, n;
}();
zt.API.PDFObject = function() {
  var n;
  function t() {
  }
  return n = function(r, i) {
    return (Array(i + 1).join("0") + r).slice(-i);
  }, t.convert = function(r) {
    var i, s, o, u;
    if (Array.isArray(r)) return "[" + function() {
      var h, f, g;
      for (g = [], h = 0, f = r.length; h < f; h++) i = r[h], g.push(t.convert(i));
      return g;
    }().join(" ") + "]";
    if (typeof r == "string") return "/" + r;
    if (r != null && r.isString) return "(" + r + ")";
    if (r instanceof Date) return "(D:" + n(r.getUTCFullYear(), 4) + n(r.getUTCMonth(), 2) + n(r.getUTCDate(), 2) + n(r.getUTCHours(), 2) + n(r.getUTCMinutes(), 2) + n(r.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(r) === "[object Object]") {
      for (s in o = ["<<"], r) u = r[s], o.push("/" + s + " " + t.convert(u));
      return o.push(">>"), o.join(`
`);
    }
    return "" + r;
  }, t;
}();
function $l(n, t) {
  if (n.match(/^[a-z]+:\/\//i))
    return n;
  if (n.match(/^\/\//))
    return window.location.protocol + n;
  if (n.match(/^[a-z]+:/i))
    return n;
  const r = document.implementation.createHTMLDocument(), i = r.createElement("base"), s = r.createElement("a");
  return r.head.appendChild(i), r.body.appendChild(s), t && (i.href = t), s.href = n, s.href;
}
const Zl = /* @__PURE__ */ (() => {
  let n = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (n += 1, `u${t()}${n}`);
})();
function dr(n) {
  const t = [];
  for (let r = 0, i = n.length; r < i; r++)
    t.push(n[r]);
  return t;
}
function lo(n, t) {
  const i = (n.ownerDocument.defaultView || window).getComputedStyle(n).getPropertyValue(t);
  return i ? parseFloat(i.replace("px", "")) : 0;
}
function Ql(n) {
  const t = lo(n, "border-left-width"), r = lo(n, "border-right-width");
  return n.clientWidth + t + r;
}
function th(n) {
  const t = lo(n, "border-top-width"), r = lo(n, "border-bottom-width");
  return n.clientHeight + t + r;
}
function au(n, t = {}) {
  const r = t.width || Ql(n), i = t.height || th(n);
  return { width: r, height: i };
}
function eh() {
  let n, t;
  try {
    t = process;
  } catch {
  }
  const r = t && t.env ? t.env.devicePixelRatio : null;
  return r && (n = parseInt(r, 10), Number.isNaN(n) && (n = 1)), n || window.devicePixelRatio || 1;
}
const gn = 16384;
function nh(n) {
  (n.width > gn || n.height > gn) && (n.width > gn && n.height > gn ? n.width > n.height ? (n.height *= gn / n.width, n.width = gn) : (n.width *= gn / n.height, n.height = gn) : n.width > gn ? (n.height *= gn / n.width, n.width = gn) : (n.width *= gn / n.height, n.height = gn));
}
function ho(n) {
  return new Promise((t, r) => {
    const i = new Image();
    i.decode = () => t(i), i.onload = () => t(i), i.onerror = r, i.crossOrigin = "anonymous", i.decoding = "async", i.src = n;
  });
}
async function rh(n) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(n)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function ih(n, t, r) {
  const i = "http://www.w3.org/2000/svg", s = document.createElementNS(i, "svg"), o = document.createElementNS(i, "foreignObject");
  return s.setAttribute("width", `${t}`), s.setAttribute("height", `${r}`), s.setAttribute("viewBox", `0 0 ${t} ${r}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), s.appendChild(o), o.appendChild(n), rh(s);
}
const cn = (n, t) => {
  if (n instanceof t)
    return !0;
  const r = Object.getPrototypeOf(n);
  return r === null ? !1 : r.constructor.name === t.name || cn(r, t);
};
function ah(n) {
  const t = n.getPropertyValue("content");
  return `${n.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function oh(n) {
  return dr(n).map((t) => {
    const r = n.getPropertyValue(t), i = n.getPropertyPriority(t);
    return `${t}: ${r}${i ? " !important" : ""};`;
  }).join(" ");
}
function sh(n, t, r) {
  const i = `.${n}:${t}`, s = r.cssText ? ah(r) : oh(r);
  return document.createTextNode(`${i}{${s}}`);
}
function Mc(n, t, r) {
  const i = window.getComputedStyle(n, r), s = i.getPropertyValue("content");
  if (s === "" || s === "none")
    return;
  const o = Zl();
  try {
    t.className = `${t.className} ${o}`;
  } catch {
    return;
  }
  const u = document.createElement("style");
  u.appendChild(sh(o, r, i)), t.appendChild(u);
}
function ch(n, t) {
  Mc(n, t, ":before"), Mc(n, t, ":after");
}
const Bc = "application/font-woff", Rc = "image/jpeg", uh = {
  woff: Bc,
  woff2: Bc,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Rc,
  jpeg: Rc,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function lh(n) {
  const t = /\.([^./]*?)$/g.exec(n);
  return t ? t[1] : "";
}
function js(n) {
  const t = lh(n).toLowerCase();
  return uh[t] || "";
}
function hh(n) {
  return n.split(/,/)[1];
}
function Fs(n) {
  return n.search(/^(data:)/) !== -1;
}
function fh(n, t) {
  return `data:${t};base64,${n}`;
}
async function ou(n, t, r) {
  const i = await fetch(n, t);
  if (i.status === 404)
    throw new Error(`Resource "${i.url}" not found`);
  const s = await i.blob();
  return new Promise((o, u) => {
    const h = new FileReader();
    h.onerror = u, h.onloadend = () => {
      try {
        o(r({ res: i, result: h.result }));
      } catch (f) {
        u(f);
      }
    }, h.readAsDataURL(s);
  });
}
const ms = {};
function dh(n, t, r) {
  let i = n.replace(/\?.*/, "");
  return r && (i = n), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")), t ? `[${t}]${i}` : i;
}
async function Os(n, t, r) {
  const i = dh(n, t, r.includeQueryParams);
  if (ms[i] != null)
    return ms[i];
  r.cacheBust && (n += (/\?/.test(n) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let s;
  try {
    const o = await ou(n, r.fetchRequestInit, ({ res: u, result: h }) => (t || (t = u.headers.get("Content-Type") || ""), hh(h)));
    s = fh(o, t);
  } catch (o) {
    s = r.imagePlaceholder || "";
    let u = `Failed to fetch resource: ${n}`;
    o && (u = typeof o == "string" ? o : o.message), u && console.warn(u);
  }
  return ms[i] = s, s;
}
async function ph(n) {
  const t = n.toDataURL();
  return t === "data:," ? n.cloneNode(!1) : ho(t);
}
async function gh(n, t) {
  if (n.currentSrc) {
    const o = document.createElement("canvas"), u = o.getContext("2d");
    o.width = n.clientWidth, o.height = n.clientHeight, u == null || u.drawImage(n, 0, 0, o.width, o.height);
    const h = o.toDataURL();
    return ho(h);
  }
  const r = n.poster, i = js(r), s = await Os(r, i, t);
  return ho(s);
}
async function mh(n) {
  var t;
  try {
    if (!((t = n == null ? void 0 : n.contentDocument) === null || t === void 0) && t.body)
      return await mo(n.contentDocument.body, {}, !0);
  } catch {
  }
  return n.cloneNode(!1);
}
async function vh(n, t) {
  return cn(n, HTMLCanvasElement) ? ph(n) : cn(n, HTMLVideoElement) ? gh(n, t) : cn(n, HTMLIFrameElement) ? mh(n) : n.cloneNode(!1);
}
const bh = (n) => n.tagName != null && n.tagName.toUpperCase() === "SLOT";
async function wh(n, t, r) {
  var i, s;
  let o = [];
  return bh(n) && n.assignedNodes ? o = dr(n.assignedNodes()) : cn(n, HTMLIFrameElement) && (!((i = n.contentDocument) === null || i === void 0) && i.body) ? o = dr(n.contentDocument.body.childNodes) : o = dr(((s = n.shadowRoot) !== null && s !== void 0 ? s : n).childNodes), o.length === 0 || cn(n, HTMLVideoElement) || await o.reduce((u, h) => u.then(() => mo(h, r)).then((f) => {
    f && t.appendChild(f);
  }), Promise.resolve()), t;
}
function yh(n, t) {
  const r = t.style;
  if (!r)
    return;
  const i = window.getComputedStyle(n);
  i.cssText ? (r.cssText = i.cssText, r.transformOrigin = i.transformOrigin) : dr(i).forEach((s) => {
    let o = i.getPropertyValue(s);
    s === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), cn(n, HTMLIFrameElement) && s === "display" && o === "inline" && (o = "block"), s === "d" && t.getAttribute("d") && (o = `path(${t.getAttribute("d")})`), r.setProperty(s, o, i.getPropertyPriority(s));
  });
}
function Lh(n, t) {
  cn(n, HTMLTextAreaElement) && (t.innerHTML = n.value), cn(n, HTMLInputElement) && t.setAttribute("value", n.value);
}
function xh(n, t) {
  if (cn(n, HTMLSelectElement)) {
    const r = t, i = Array.from(r.children).find((s) => n.value === s.getAttribute("value"));
    i && i.setAttribute("selected", "");
  }
}
function Ah(n, t) {
  return cn(t, Element) && (yh(n, t), ch(n, t), Lh(n, t), xh(n, t)), t;
}
async function Nh(n, t) {
  const r = n.querySelectorAll ? n.querySelectorAll("use") : [];
  if (r.length === 0)
    return n;
  const i = {};
  for (let o = 0; o < r.length; o++) {
    const h = r[o].getAttribute("xlink:href");
    if (h) {
      const f = n.querySelector(h), g = document.querySelector(h);
      !f && g && !i[h] && (i[h] = await mo(g, t, !0));
    }
  }
  const s = Object.values(i);
  if (s.length) {
    const o = "http://www.w3.org/1999/xhtml", u = document.createElementNS(o, "svg");
    u.setAttribute("xmlns", o), u.style.position = "absolute", u.style.width = "0", u.style.height = "0", u.style.overflow = "hidden", u.style.display = "none";
    const h = document.createElementNS(o, "defs");
    u.appendChild(h);
    for (let f = 0; f < s.length; f++)
      h.appendChild(s[f]);
    n.appendChild(u);
  }
  return n;
}
async function mo(n, t, r) {
  return !r && t.filter && !t.filter(n) ? null : Promise.resolve(n).then((i) => vh(i, t)).then((i) => wh(n, i, t)).then((i) => Ah(n, i)).then((i) => Nh(i, t));
}
const su = /url\((['"]?)([^'"]+?)\1\)/g, Sh = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, _h = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Ph(n) {
  const t = n.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function kh(n) {
  const t = [];
  return n.replace(su, (r, i, s) => (t.push(s), r)), t.filter((r) => !Fs(r));
}
async function Fh(n, t, r, i, s) {
  try {
    const o = r ? $l(t, r) : t, u = js(t);
    let h;
    return s || (h = await Os(o, u, i)), n.replace(Ph(t), `$1${h}$3`);
  } catch {
  }
  return n;
}
function Ih(n, { preferredFontFormat: t }) {
  return t ? n.replace(_h, (r) => {
    for (; ; ) {
      const [i, , s] = Sh.exec(r) || [];
      if (!s)
        return "";
      if (s === t)
        return `src: ${i};`;
    }
  }) : n;
}
function cu(n) {
  return n.search(su) !== -1;
}
async function uu(n, t, r) {
  if (!cu(n))
    return n;
  const i = Ih(n, r);
  return kh(i).reduce((o, u) => o.then((h) => Fh(h, u, t, r)), Promise.resolve(i));
}
async function ro(n, t, r) {
  var i;
  const s = (i = t.style) === null || i === void 0 ? void 0 : i.getPropertyValue(n);
  if (s) {
    const o = await uu(s, null, r);
    return t.style.setProperty(n, o, t.style.getPropertyPriority(n)), !0;
  }
  return !1;
}
async function Ch(n, t) {
  await ro("background", n, t) || await ro("background-image", n, t), await ro("mask", n, t) || await ro("mask-image", n, t);
}
async function jh(n, t) {
  const r = cn(n, HTMLImageElement);
  if (!(r && !Fs(n.src)) && !(cn(n, SVGImageElement) && !Fs(n.href.baseVal)))
    return;
  const i = r ? n.src : n.href.baseVal, s = await Os(i, js(i), t);
  await new Promise((o, u) => {
    n.onload = o, n.onerror = u;
    const h = n;
    h.decode && (h.decode = o), h.loading === "lazy" && (h.loading = "eager"), r ? (n.srcset = "", n.src = s) : n.href.baseVal = s;
  });
}
async function Oh(n, t) {
  const i = dr(n.childNodes).map((s) => lu(s, t));
  await Promise.all(i).then(() => n);
}
async function lu(n, t) {
  cn(n, Element) && (await Ch(n, t), await jh(n, t), await Oh(n, t));
}
function Eh(n, t) {
  const { style: r } = n;
  t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.width && (r.width = `${t.width}px`), t.height && (r.height = `${t.height}px`);
  const i = t.style;
  return i != null && Object.keys(i).forEach((s) => {
    r[s] = i[s];
  }), n;
}
const qc = {};
async function Dc(n) {
  let t = qc[n];
  if (t != null)
    return t;
  const i = await (await fetch(n)).text();
  return t = { url: n, cssText: i }, qc[n] = t, t;
}
async function Tc(n, t) {
  let r = n.cssText;
  const i = /url\(["']?([^"')]+)["']?\)/g, o = (r.match(/url\([^)]+\)/g) || []).map(async (u) => {
    let h = u.replace(i, "$1");
    return h.startsWith("https://") || (h = new URL(h, n.url).href), ou(h, t.fetchRequestInit, ({ result: f }) => (r = r.replace(u, `url(${f})`), [u, f]));
  });
  return Promise.all(o).then(() => r);
}
function zc(n) {
  if (n == null)
    return [];
  const t = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let i = n.replace(r, "");
  const s = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const f = s.exec(i);
    if (f === null)
      break;
    t.push(f[0]);
  }
  i = i.replace(s, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, u = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", h = new RegExp(u, "gi");
  for (; ; ) {
    let f = o.exec(i);
    if (f === null) {
      if (f = h.exec(i), f === null)
        break;
      o.lastIndex = h.lastIndex;
    } else
      h.lastIndex = o.lastIndex;
    t.push(f[0]);
  }
  return t;
}
async function Mh(n, t) {
  const r = [], i = [];
  return n.forEach((s) => {
    if ("cssRules" in s)
      try {
        dr(s.cssRules || []).forEach((o, u) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let h = u + 1;
            const f = o.href, g = Dc(f).then((b) => Tc(b, t)).then((b) => zc(b).forEach((x) => {
              try {
                s.insertRule(x, x.startsWith("@import") ? h += 1 : s.cssRules.length);
              } catch (S) {
                console.error("Error inserting rule from remote css", {
                  rule: x,
                  error: S
                });
              }
            })).catch((b) => {
              console.error("Error loading remote css", b.toString());
            });
            i.push(g);
          }
        });
      } catch (o) {
        const u = n.find((h) => h.href == null) || document.styleSheets[0];
        s.href != null && i.push(Dc(s.href).then((h) => Tc(h, t)).then((h) => zc(h).forEach((f) => {
          u.insertRule(f, s.cssRules.length);
        })).catch((h) => {
          console.error("Error loading remote stylesheet", h);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(i).then(() => (n.forEach((s) => {
    if ("cssRules" in s)
      try {
        dr(s.cssRules || []).forEach((o) => {
          r.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${s.href}`, o);
      }
  }), r));
}
function Bh(n) {
  return n.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => cu(t.style.getPropertyValue("src")));
}
async function Rh(n, t) {
  if (n.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = dr(n.ownerDocument.styleSheets), i = await Mh(r, t);
  return Bh(i);
}
async function qh(n, t) {
  const r = await Rh(n, t);
  return (await Promise.all(r.map((s) => {
    const o = s.parentStyleSheet ? s.parentStyleSheet.href : null;
    return uu(s.cssText, o, t);
  }))).join(`
`);
}
async function Dh(n, t) {
  const r = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await qh(n, t);
  if (r) {
    const i = document.createElement("style"), s = document.createTextNode(r);
    i.appendChild(s), n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i);
  }
}
async function Th(n, t = {}) {
  const { width: r, height: i } = au(n, t), s = await mo(n, t, !0);
  return await Dh(s, t), await lu(s, t), Eh(s, t), await ih(s, r, i);
}
async function zh(n, t = {}) {
  const { width: r, height: i } = au(n, t), s = await Th(n, t), o = await ho(s), u = document.createElement("canvas"), h = u.getContext("2d"), f = t.pixelRatio || eh(), g = t.canvasWidth || r, b = t.canvasHeight || i;
  return u.width = g * f, u.height = b * f, t.skipAutoScale || nh(u), u.style.width = `${g}`, u.style.height = `${b}`, t.backgroundColor && (h.fillStyle = t.backgroundColor, h.fillRect(0, 0, u.width, u.height)), h.drawImage(o, 0, 0, u.width, u.height), u;
}
async function Uh(n, t = {}) {
  return (await zh(n, t)).toDataURL();
}
function Hh(n, t, r) {
  let i = new zt();
  async function s(u = "blob", h = 0, f) {
    const g = Ju(n);
    if (!g) throw new Error("Element not found");
    const { clientHeight: b, clientWidth: x } = g;
    i = new zt({
      unit: "pt",
      orientation: "landscape",
      format: [x, b],
      ...t
    });
    const S = await Uh(g, f ?? r);
    return i.addImage(S, "PNG", h, h, x, b), u === "string" ? i.output("datauristring") : u === "arraybuffer" ? i.output("arraybuffer") : u === "url" ? i.output("bloburl") : i.output("blob");
  }
  return {
    convert: s,
    save: async (u, h = 0, f) => {
      await s("blob", h, f), i.save(u);
    }
  };
}
const Vh = /* @__PURE__ */ Xu({
  __name: "Html2Pdf",
  setup(n) {
    const t = Ku(), { convert: r, save: i } = Hh(t);
    return (s, o) => ($u(), Zu("div", Qu({
      ref_key: "pdfEl",
      ref: t
    }, s.$attrs), [
      tl(s.$slots, "default", {
        convert: pc(r),
        save: pc(i)
      })
    ], 16));
  }
});
export {
  fe as _,
  Vh as a,
  Hh as u
};
