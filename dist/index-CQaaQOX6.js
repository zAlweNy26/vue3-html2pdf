import { toValue as xc, defineComponent as Sc, ref as _c, openBlock as Pc, createElementBlock as kc, mergeProps as Fc, renderSlot as Ic, unref as ru } from "vue";
function fe(r) {
  "@babel/helpers - typeof";
  return fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fe(r);
}
var sn = Uint8Array, Qe = Uint16Array, sa = Uint32Array, oo = new sn([
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
]), so = new sn([
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
]), cs = new sn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), xu = function(r, e) {
  for (var n = new Qe(31), a = 0; a < 31; ++a)
    n[a] = e += 1 << r[a - 1];
  for (var u = new sa(n[30]), a = 1; a < 30; ++a)
    for (var o = n[a]; o < n[a + 1]; ++o)
      u[o] = o - n[a] << 5 | a;
  return [n, u];
}, Su = xu(oo, 2), _u = Su[0], ls = Su[1];
_u[28] = 258, ls[258] = 28;
var Pu = xu(so, 0), Cc = Pu[0], iu = Pu[1], hs = new Qe(32768);
for (var ye = 0; ye < 32768; ++ye) {
  var Pr = (ye & 43690) >>> 1 | (ye & 21845) << 1;
  Pr = (Pr & 52428) >>> 2 | (Pr & 13107) << 2, Pr = (Pr & 61680) >>> 4 | (Pr & 3855) << 4, hs[ye] = ((Pr & 65280) >>> 8 | (Pr & 255) << 8) >>> 1;
}
var Kn = function(r, e, n) {
  for (var a = r.length, u = 0, o = new Qe(e); u < a; ++u)
    ++o[r[u] - 1];
  var l = new Qe(e);
  for (u = 0; u < e; ++u)
    l[u] = l[u - 1] + o[u - 1] << 1;
  var h;
  if (n) {
    h = new Qe(1 << e);
    var f = 15 - e;
    for (u = 0; u < a; ++u)
      if (r[u])
        for (var g = u << 4 | r[u], b = e - r[u], A = l[r[u] - 1]++ << b, S = A | (1 << b) - 1; A <= S; ++A)
          h[hs[A] >>> f] = g;
  } else
    for (h = new Qe(a), u = 0; u < a; ++u)
      h[u] = hs[l[r[u] - 1]++] >>> 15 - r[u];
  return h;
}, Ir = new sn(288);
for (var ye = 0; ye < 144; ++ye)
  Ir[ye] = 8;
for (var ye = 144; ye < 256; ++ye)
  Ir[ye] = 9;
for (var ye = 256; ye < 280; ++ye)
  Ir[ye] = 7;
for (var ye = 280; ye < 288; ++ye)
  Ir[ye] = 8;
var ua = new sn(32);
for (var ye = 0; ye < 32; ++ye)
  ua[ye] = 5;
var jc = /* @__PURE__ */ Kn(Ir, 9, 0), Oc = /* @__PURE__ */ Kn(Ir, 9, 1), Bc = /* @__PURE__ */ Kn(ua, 5, 0), Mc = /* @__PURE__ */ Kn(ua, 5, 1), ts = function(r) {
  for (var e = r[0], n = 1; n < r.length; ++n)
    r[n] > e && (e = r[n]);
  return e;
}, Mn = function(r, e, n) {
  var a = e / 8 >> 0;
  return (r[a] | r[a + 1] << 8) >>> (e & 7) & n;
}, es = function(r, e) {
  var n = e / 8 >> 0;
  return (r[n] | r[n + 1] << 8 | r[n + 2] << 16) >>> (e & 7);
}, Ls = function(r) {
  return (r / 8 >> 0) + (r & 7 && 1);
}, ku = function(r, e, n) {
  (n == null || n > r.length) && (n = r.length);
  var a = new (r instanceof Qe ? Qe : r instanceof sa ? sa : sn)(n - e);
  return a.set(r.subarray(e, n)), a;
}, Ec = function(r, e, n) {
  var a = r.length, u = !e || n, o = !n || n.i;
  n || (n = {}), e || (e = new sn(a * 3));
  var l = function(Y) {
    var Q = e.length;
    if (Y > Q) {
      var et = new sn(Math.max(Q * 2, Y));
      et.set(e), e = et;
    }
  }, h = n.f || 0, f = n.p || 0, g = n.b || 0, b = n.l, A = n.d, S = n.m, p = n.n, O = a * 8;
  do {
    if (!b) {
      n.f = h = Mn(r, f, 1);
      var I = Mn(r, f + 1, 3);
      if (f += 3, I)
        if (I == 1)
          b = Oc, A = Mc, S = 9, p = 5;
        else if (I == 2) {
          var X = Mn(r, f, 31) + 257, ot = Mn(r, f + 10, 15) + 4, ct = X + Mn(r, f + 5, 31) + 1;
          f += 14;
          for (var wt = new sn(ct), tt = new sn(19), R = 0; R < ot; ++R)
            tt[cs[R]] = Mn(r, f + R * 3, 7);
          f += ot * 3;
          var gt = ts(tt), dt = (1 << gt) - 1;
          if (!o && f + ct * (gt + 7) > O)
            break;
          for (var F = Kn(tt, gt, 1), R = 0; R < ct; ) {
            var P = F[Mn(r, f, dt)];
            f += P & 15;
            var q = P >>> 4;
            if (q < 16)
              wt[R++] = q;
            else {
              var z = 0, D = 0;
              for (q == 16 ? (D = 3 + Mn(r, f, 3), f += 2, z = wt[R - 1]) : q == 17 ? (D = 3 + Mn(r, f, 7), f += 3) : q == 18 && (D = 11 + Mn(r, f, 127), f += 7); D--; )
                wt[R++] = z;
            }
          }
          var at = wt.subarray(0, X), nt = wt.subarray(X);
          S = ts(at), p = ts(nt), b = Kn(at, S, 1), A = Kn(nt, p, 1);
        } else
          throw "invalid block type";
      else {
        var q = Ls(f) + 4, _ = r[q - 4] | r[q - 3] << 8, B = q + _;
        if (B > a) {
          if (o)
            throw "unexpected EOF";
          break;
        }
        u && l(g + _), e.set(r.subarray(q, B), g), n.b = g += _, n.p = f = B * 8;
        continue;
      }
      if (f > O)
        throw "unexpected EOF";
    }
    u && l(g + 131072);
    for (var lt = (1 << S) - 1, $ = (1 << p) - 1, ft = S + p + 18; o || f + ft < O; ) {
      var z = b[es(r, f) & lt], ht = z >>> 4;
      if (f += z & 15, f > O)
        throw "unexpected EOF";
      if (!z)
        throw "invalid length/literal";
      if (ht < 256)
        e[g++] = ht;
      else if (ht == 256) {
        b = null;
        break;
      } else {
        var kt = ht - 254;
        if (ht > 264) {
          var R = ht - 257, L = oo[R];
          kt = Mn(r, f, (1 << L) - 1) + _u[R], f += L;
        }
        var j = A[es(r, f) & $], M = j >>> 4;
        if (!j)
          throw "invalid distance";
        f += j & 15;
        var nt = Cc[M];
        if (M > 3) {
          var L = so[M];
          nt += es(r, f) & (1 << L) - 1, f += L;
        }
        if (f > O)
          throw "unexpected EOF";
        u && l(g + 131072);
        for (var W = g + kt; g < W; g += 4)
          e[g] = e[g - nt], e[g + 1] = e[g + 1 - nt], e[g + 2] = e[g + 2 - nt], e[g + 3] = e[g + 3 - nt];
        g = W;
      }
    }
    n.l = b, n.p = f, n.b = g, b && (h = 1, n.m = S, n.d = A, n.n = p);
  } while (!h);
  return g == e.length ? e : ku(e, 0, g);
}, lr = function(r, e, n) {
  n <<= e & 7;
  var a = e / 8 >> 0;
  r[a] |= n, r[a + 1] |= n >>> 8;
}, ia = function(r, e, n) {
  n <<= e & 7;
  var a = e / 8 >> 0;
  r[a] |= n, r[a + 1] |= n >>> 8, r[a + 2] |= n >>> 16;
}, ns = function(r, e) {
  for (var n = [], a = 0; a < r.length; ++a)
    r[a] && n.push({ s: a, f: r[a] });
  var u = n.length, o = n.slice();
  if (!u)
    return [new sn(0), 0];
  if (u == 1) {
    var l = new sn(n[0].s + 1);
    return l[n[0].s] = 1, [l, 1];
  }
  n.sort(function(ct, wt) {
    return ct.f - wt.f;
  }), n.push({ s: -1, f: 25001 });
  var h = n[0], f = n[1], g = 0, b = 1, A = 2;
  for (n[0] = { s: -1, f: h.f + f.f, l: h, r: f }; b != u - 1; )
    h = n[n[g].f < n[A].f ? g++ : A++], f = n[g != b && n[g].f < n[A].f ? g++ : A++], n[b++] = { s: -1, f: h.f + f.f, l: h, r: f };
  for (var S = o[0].s, a = 1; a < u; ++a)
    o[a].s > S && (S = o[a].s);
  var p = new Qe(S + 1), O = fs(n[b - 1], p, 0);
  if (O > e) {
    var a = 0, I = 0, q = O - e, _ = 1 << q;
    for (o.sort(function(wt, tt) {
      return p[tt.s] - p[wt.s] || wt.f - tt.f;
    }); a < u; ++a) {
      var B = o[a].s;
      if (p[B] > e)
        I += _ - (1 << O - p[B]), p[B] = e;
      else
        break;
    }
    for (I >>>= q; I > 0; ) {
      var X = o[a].s;
      p[X] < e ? I -= 1 << e - p[X]++ - 1 : ++a;
    }
    for (; a >= 0 && I; --a) {
      var ot = o[a].s;
      p[ot] == e && (--p[ot], ++I);
    }
    O = e;
  }
  return [new sn(p), O];
}, fs = function(r, e, n) {
  return r.s == -1 ? Math.max(fs(r.l, e, n + 1), fs(r.r, e, n + 1)) : e[r.s] = n;
}, au = function(r) {
  for (var e = r.length; e && !r[--e]; )
    ;
  for (var n = new Qe(++e), a = 0, u = r[0], o = 1, l = function(f) {
    n[a++] = f;
  }, h = 1; h <= e; ++h)
    if (r[h] == u && h != e)
      ++o;
    else {
      if (!u && o > 2) {
        for (; o > 138; o -= 138)
          l(32754);
        o > 2 && (l(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
      } else if (o > 3) {
        for (l(u), --o; o > 6; o -= 6)
          l(8304);
        o > 2 && (l(o - 3 << 5 | 8208), o = 0);
      }
      for (; o--; )
        l(u);
      o = 1, u = r[h];
    }
  return [n.subarray(0, a), e];
}, aa = function(r, e) {
  for (var n = 0, a = 0; a < e.length; ++a)
    n += r[a] * e[a];
  return n;
}, ds = function(r, e, n) {
  var a = n.length, u = Ls(e + 2);
  r[u] = a & 255, r[u + 1] = a >>> 8, r[u + 2] = r[u] ^ 255, r[u + 3] = r[u + 1] ^ 255;
  for (var o = 0; o < a; ++o)
    r[u + o + 4] = n[o];
  return (u + 4 + a) * 8;
}, ou = function(r, e, n, a, u, o, l, h, f, g, b) {
  lr(e, b++, n), ++u[256];
  for (var A = ns(u, 15), S = A[0], p = A[1], O = ns(o, 15), I = O[0], q = O[1], _ = au(S), B = _[0], X = _[1], ot = au(I), ct = ot[0], wt = ot[1], tt = new Qe(19), R = 0; R < B.length; ++R)
    tt[B[R] & 31]++;
  for (var R = 0; R < ct.length; ++R)
    tt[ct[R] & 31]++;
  for (var gt = ns(tt, 7), dt = gt[0], F = gt[1], P = 19; P > 4 && !dt[cs[P - 1]]; --P)
    ;
  var z = g + 5 << 3, D = aa(u, Ir) + aa(o, ua) + l, at = aa(u, S) + aa(o, I) + l + 14 + 3 * P + aa(tt, dt) + (2 * tt[16] + 3 * tt[17] + 7 * tt[18]);
  if (z <= D && z <= at)
    return ds(e, b, r.subarray(f, f + g));
  var nt, lt, $, ft;
  if (lr(e, b, 1 + (at < D)), b += 2, at < D) {
    nt = Kn(S, p, 0), lt = S, $ = Kn(I, q, 0), ft = I;
    var ht = Kn(dt, F, 0);
    lr(e, b, X - 257), lr(e, b + 5, wt - 1), lr(e, b + 10, P - 4), b += 14;
    for (var R = 0; R < P; ++R)
      lr(e, b + 3 * R, dt[cs[R]]);
    b += 3 * P;
    for (var kt = [B, ct], L = 0; L < 2; ++L)
      for (var j = kt[L], R = 0; R < j.length; ++R) {
        var M = j[R] & 31;
        lr(e, b, ht[M]), b += dt[M], M > 15 && (lr(e, b, j[R] >>> 5 & 127), b += j[R] >>> 12);
      }
  } else
    nt = jc, lt = Ir, $ = Bc, ft = ua;
  for (var R = 0; R < h; ++R)
    if (a[R] > 255) {
      var M = a[R] >>> 18 & 31;
      ia(e, b, nt[M + 257]), b += lt[M + 257], M > 7 && (lr(e, b, a[R] >>> 23 & 31), b += oo[M]);
      var W = a[R] & 31;
      ia(e, b, $[W]), b += ft[W], W > 3 && (ia(e, b, a[R] >>> 5 & 8191), b += so[W]);
    } else
      ia(e, b, nt[a[R]]), b += lt[a[R]];
  return ia(e, b, nt[256]), b + lt[256];
}, qc = /* @__PURE__ */ new sa([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Dc = function(r, e, n, a, u, o) {
  var l = r.length, h = new sn(a + l + 5 * (1 + Math.floor(l / 7e3)) + u), f = h.subarray(a, h.length - u), g = 0;
  if (!e || l < 8)
    for (var b = 0; b <= l; b += 65535) {
      var A = b + 65535;
      A < l ? g = ds(f, g, r.subarray(b, A)) : (f[b] = o, g = ds(f, g, r.subarray(b, l)));
    }
  else {
    for (var S = qc[e - 1], p = S >>> 13, O = S & 8191, I = (1 << n) - 1, q = new Qe(32768), _ = new Qe(I + 1), B = Math.ceil(n / 3), X = 2 * B, ot = function(zt) {
      return (r[zt] ^ r[zt + 1] << B ^ r[zt + 2] << X) & I;
    }, ct = new sa(25e3), wt = new Qe(288), tt = new Qe(32), R = 0, gt = 0, b = 0, dt = 0, F = 0, P = 0; b < l; ++b) {
      var z = ot(b), D = b & 32767, at = _[z];
      if (q[D] = at, _[z] = D, F <= b) {
        var nt = l - b;
        if ((R > 7e3 || dt > 24576) && nt > 423) {
          g = ou(r, f, 0, ct, wt, tt, gt, dt, P, b - P, g), dt = R = gt = 0, P = b;
          for (var lt = 0; lt < 286; ++lt)
            wt[lt] = 0;
          for (var lt = 0; lt < 30; ++lt)
            tt[lt] = 0;
        }
        var $ = 2, ft = 0, ht = O, kt = D - at & 32767;
        if (nt > 2 && z == ot(b - kt))
          for (var L = Math.min(p, nt) - 1, j = Math.min(32767, b), M = Math.min(258, nt); kt <= j && --ht && D != at; ) {
            if (r[b + $] == r[b + $ - kt]) {
              for (var W = 0; W < M && r[b + W] == r[b + W - kt]; ++W)
                ;
              if (W > $) {
                if ($ = W, ft = kt, W > L)
                  break;
                for (var Y = Math.min(kt, W - 2), Q = 0, lt = 0; lt < Y; ++lt) {
                  var et = b - kt + lt + 32768 & 32767, rt = q[et], At = et - rt + 32768 & 32767;
                  At > Q && (Q = At, at = et);
                }
              }
            }
            D = at, at = q[D], kt += D - at + 32768 & 32767;
          }
        if (ft) {
          ct[dt++] = 268435456 | ls[$] << 18 | iu[ft];
          var Nt = ls[$] & 31, Ct = iu[ft] & 31;
          gt += oo[Nt] + so[Ct], ++wt[257 + Nt], ++tt[Ct], F = b + $, ++R;
        } else
          ct[dt++] = r[b], ++wt[r[b]];
      }
    }
    g = ou(r, f, o, ct, wt, tt, gt, dt, P, b - P, g);
  }
  return ku(h, 0, a + Ls(g) + u);
}, Rc = function() {
  var r = 1, e = 0;
  return {
    p: function(n) {
      for (var a = r, u = e, o = n.length, l = 0; l != o; ) {
        for (var h = Math.min(l + 5552, o); l < h; ++l)
          a += n[l], u += a;
        a %= 65521, u %= 65521;
      }
      r = a, e = u;
    },
    d: function() {
      return (r >>> 8 << 16 | (e & 255) << 8 | e >>> 8) + ((r & 255) << 23) * 2;
    }
  };
}, Tc = function(r, e, n, a, u) {
  return Dc(r, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + e.mem, n, a, !u);
}, zc = function(r, e, n) {
  for (; n; ++e)
    r[e] = n, n >>>= 8;
}, Uc = function(r, e) {
  var n = e.level, a = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
  r[0] = 120, r[1] = a << 6 | (a ? 32 - 2 * a : 1);
}, Hc = function(r) {
  if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31)
    throw "invalid zlib data";
  if (r[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function ps(r, e) {
  e === void 0 && (e = {});
  var n = Rc();
  n.p(r);
  var a = Tc(r, e, 2, 4);
  return Uc(a, e), zc(a, a.length - 4, n.d()), a;
}
function Wc(r, e) {
  return Ec((Hc(r), r.subarray(2, -4)), e);
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
function rs() {
  Ht.console && typeof Ht.console.log == "function" && Ht.console.log.apply(Ht.console, arguments);
}
var ve = { log: rs, warn: function(r) {
  Ht.console && (typeof Ht.console.warn == "function" ? Ht.console.warn.apply(Ht.console, arguments) : rs.call(null, arguments));
}, error: function(r) {
  Ht.console && (typeof Ht.console.error == "function" ? Ht.console.error.apply(Ht.console, arguments) : rs(r));
} };
function is(r, e, n) {
  var a = new XMLHttpRequest();
  a.open("GET", r), a.responseType = "blob", a.onload = function() {
    Ur(a.response, e, n);
  }, a.onerror = function() {
    ve.error("could not download file");
  }, a.send();
}
function su(r) {
  var e = new XMLHttpRequest();
  e.open("HEAD", r, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function Ka(r) {
  try {
    r.dispatchEvent(new MouseEvent("click"));
  } catch {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), r.dispatchEvent(e);
  }
}
var oa, gs, Ur = Ht.saveAs || ((typeof window > "u" ? "undefined" : fe(window)) !== "object" || window !== Ht ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(r, e, n) {
  var a = Ht.URL || Ht.webkitURL, u = document.createElement("a");
  e = e || r.name || "download", u.download = e, u.rel = "noopener", typeof r == "string" ? (u.href = r, u.origin !== location.origin ? su(u.href) ? is(r, e, n) : Ka(u, u.target = "_blank") : Ka(u)) : (u.href = a.createObjectURL(r), setTimeout(function() {
    a.revokeObjectURL(u.href);
  }, 4e4), setTimeout(function() {
    Ka(u);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(r, e, n) {
  if (e = e || r.name || "download", typeof r == "string") if (su(r)) is(r, e, n);
  else {
    var a = document.createElement("a");
    a.href = r, a.target = "_blank", setTimeout(function() {
      Ka(a);
    });
  }
  else navigator.msSaveOrOpenBlob(function(u, o) {
    return o === void 0 ? o = { autoBom: !1 } : fe(o) !== "object" && (ve.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type) ? new Blob(["\uFEFF", u], { type: u.type }) : u;
  }(r, n), e);
} : function(r, e, n, a) {
  if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), typeof r == "string") return is(r, e, n);
  var u = r.type === "application/octet-stream", o = /constructor/i.test(Ht.HTMLElement) || Ht.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((l || u && o) && (typeof FileReader > "u" ? "undefined" : fe(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var b = h.result;
      b = l ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = b : location = b, a = null;
    }, h.readAsDataURL(r);
  } else {
    var f = Ht.URL || Ht.webkitURL, g = f.createObjectURL(r);
    a ? a.location = g : location.href = g, a = null, setTimeout(function() {
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
function Fu(r) {
  var e;
  r = r || "", this.ok = !1, r.charAt(0) == "#" && (r = r.substr(1, 6)), r = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[r = (r = r.replace(/ /g, "")).toLowerCase()] || r;
  for (var n = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], a = 0; a < n.length; a++) {
    var u = n[a].re, o = n[a].process, l = u.exec(r);
    l && (e = o(l), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
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
function as(r, e) {
  var n = r[0], a = r[1], u = r[2], o = r[3];
  n = Je(n, a, u, o, e[0], 7, -680876936), o = Je(o, n, a, u, e[1], 12, -389564586), u = Je(u, o, n, a, e[2], 17, 606105819), a = Je(a, u, o, n, e[3], 22, -1044525330), n = Je(n, a, u, o, e[4], 7, -176418897), o = Je(o, n, a, u, e[5], 12, 1200080426), u = Je(u, o, n, a, e[6], 17, -1473231341), a = Je(a, u, o, n, e[7], 22, -45705983), n = Je(n, a, u, o, e[8], 7, 1770035416), o = Je(o, n, a, u, e[9], 12, -1958414417), u = Je(u, o, n, a, e[10], 17, -42063), a = Je(a, u, o, n, e[11], 22, -1990404162), n = Je(n, a, u, o, e[12], 7, 1804603682), o = Je(o, n, a, u, e[13], 12, -40341101), u = Je(u, o, n, a, e[14], 17, -1502002290), n = Xe(n, a = Je(a, u, o, n, e[15], 22, 1236535329), u, o, e[1], 5, -165796510), o = Xe(o, n, a, u, e[6], 9, -1069501632), u = Xe(u, o, n, a, e[11], 14, 643717713), a = Xe(a, u, o, n, e[0], 20, -373897302), n = Xe(n, a, u, o, e[5], 5, -701558691), o = Xe(o, n, a, u, e[10], 9, 38016083), u = Xe(u, o, n, a, e[15], 14, -660478335), a = Xe(a, u, o, n, e[4], 20, -405537848), n = Xe(n, a, u, o, e[9], 5, 568446438), o = Xe(o, n, a, u, e[14], 9, -1019803690), u = Xe(u, o, n, a, e[3], 14, -187363961), a = Xe(a, u, o, n, e[8], 20, 1163531501), n = Xe(n, a, u, o, e[13], 5, -1444681467), o = Xe(o, n, a, u, e[2], 9, -51403784), u = Xe(u, o, n, a, e[7], 14, 1735328473), n = Ke(n, a = Xe(a, u, o, n, e[12], 20, -1926607734), u, o, e[5], 4, -378558), o = Ke(o, n, a, u, e[8], 11, -2022574463), u = Ke(u, o, n, a, e[11], 16, 1839030562), a = Ke(a, u, o, n, e[14], 23, -35309556), n = Ke(n, a, u, o, e[1], 4, -1530992060), o = Ke(o, n, a, u, e[4], 11, 1272893353), u = Ke(u, o, n, a, e[7], 16, -155497632), a = Ke(a, u, o, n, e[10], 23, -1094730640), n = Ke(n, a, u, o, e[13], 4, 681279174), o = Ke(o, n, a, u, e[0], 11, -358537222), u = Ke(u, o, n, a, e[3], 16, -722521979), a = Ke(a, u, o, n, e[6], 23, 76029189), n = Ke(n, a, u, o, e[9], 4, -640364487), o = Ke(o, n, a, u, e[12], 11, -421815835), u = Ke(u, o, n, a, e[15], 16, 530742520), n = Ze(n, a = Ke(a, u, o, n, e[2], 23, -995338651), u, o, e[0], 6, -198630844), o = Ze(o, n, a, u, e[7], 10, 1126891415), u = Ze(u, o, n, a, e[14], 15, -1416354905), a = Ze(a, u, o, n, e[5], 21, -57434055), n = Ze(n, a, u, o, e[12], 6, 1700485571), o = Ze(o, n, a, u, e[3], 10, -1894986606), u = Ze(u, o, n, a, e[10], 15, -1051523), a = Ze(a, u, o, n, e[1], 21, -2054922799), n = Ze(n, a, u, o, e[8], 6, 1873313359), o = Ze(o, n, a, u, e[15], 10, -30611744), u = Ze(u, o, n, a, e[6], 15, -1560198380), a = Ze(a, u, o, n, e[13], 21, 1309151649), n = Ze(n, a, u, o, e[4], 6, -145523070), o = Ze(o, n, a, u, e[11], 10, -1120210379), u = Ze(u, o, n, a, e[2], 15, 718787259), a = Ze(a, u, o, n, e[9], 21, -343485551), r[0] = Fr(n, r[0]), r[1] = Fr(a, r[1]), r[2] = Fr(u, r[2]), r[3] = Fr(o, r[3]);
}
function uo(r, e, n, a, u, o) {
  return e = Fr(Fr(e, r), Fr(a, o)), Fr(e << u | e >>> 32 - u, n);
}
function Je(r, e, n, a, u, o, l) {
  return uo(e & n | ~e & a, r, e, u, o, l);
}
function Xe(r, e, n, a, u, o, l) {
  return uo(e & a | n & ~a, r, e, u, o, l);
}
function Ke(r, e, n, a, u, o, l) {
  return uo(e ^ n ^ a, r, e, u, o, l);
}
function Ze(r, e, n, a, u, o, l) {
  return uo(n ^ (e | ~a), r, e, u, o, l);
}
function Iu(r) {
  var e, n = r.length, a = [1732584193, -271733879, -1732584194, 271733878];
  for (e = 64; e <= r.length; e += 64) as(a, Vc(r.substring(e - 64, e)));
  r = r.substring(e - 64);
  var u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (e = 0; e < r.length; e++) u[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
  if (u[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (as(a, u), e = 0; e < 16; e++) u[e] = 0;
  return u[14] = 8 * n, as(a, u), a;
}
function Vc(r) {
  var e, n = [];
  for (e = 0; e < 64; e += 4) n[e >> 2] = r.charCodeAt(e) + (r.charCodeAt(e + 1) << 8) + (r.charCodeAt(e + 2) << 16) + (r.charCodeAt(e + 3) << 24);
  return n;
}
oa = Ht.atob.bind(Ht), gs = Ht.btoa.bind(Ht);
var uu = "0123456789abcdef".split("");
function Gc(r) {
  for (var e = "", n = 0; n < 4; n++) e += uu[r >> 8 * n + 4 & 15] + uu[r >> 8 * n & 15];
  return e;
}
function Yc(r) {
  return String.fromCharCode((255 & r) >> 0, (65280 & r) >> 8, (16711680 & r) >> 16, (4278190080 & r) >> 24);
}
function ms(r) {
  return Iu(r).map(Yc).join("");
}
var Jc = function(r) {
  for (var e = 0; e < r.length; e++) r[e] = Gc(r[e]);
  return r.join("");
}(Iu("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Fr(r, e) {
  if (Jc) {
    var n = (65535 & r) + (65535 & e);
    return (r >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  return r + e & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function vs(r, e) {
  var n, a, u, o;
  if (r !== n) {
    for (var l = (u = r, o = 1 + (256 / r.length >> 0), new Array(o + 1).join(u)), h = [], f = 0; f < 256; f++) h[f] = f;
    var g = 0;
    for (f = 0; f < 256; f++) {
      var b = h[f];
      g = (g + b + l.charCodeAt(f)) % 256, h[f] = h[g], h[g] = b;
    }
    n = r, a = h;
  } else h = a;
  var A = e.length, S = 0, p = 0, O = "";
  for (f = 0; f < A; f++) p = (p + (b = h[S = (S + 1) % 256])) % 256, h[S] = h[p], h[p] = b, l = h[(h[S] + h[p]) % 256], O += String.fromCharCode(e.charCodeAt(f) ^ l);
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
var cu = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Ni(r, e, n, a) {
  this.v = 1, this.r = 2;
  var u = 192;
  r.forEach(function(h) {
    if (cu.perm !== void 0) throw new Error("Invalid permission: " + h);
    u += cu[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var o = (e + this.padding).substr(0, 32), l = (n + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(o, l), this.P = -(1 + (255 ^ u)), this.encryptionKey = ms(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), this.U = vs(this.encryptionKey, this.padding);
}
function Ai(r) {
  if (/[^\u0000-\u00ff]/.test(r)) throw new Error("Invalid PDF Name Object: " + r + ", Only accept ASCII characters.");
  for (var e = "", n = r.length, a = 0; a < n; a++) {
    var u = r.charCodeAt(a);
    u < 33 || u === 35 || u === 37 || u === 40 || u === 41 || u === 47 || u === 60 || u === 62 || u === 91 || u === 93 || u === 123 || u === 125 || u > 126 ? e += "#" + ("0" + u.toString(16)).slice(-2) : e += r[a];
  }
  return e;
}
function lu(r) {
  if (fe(r) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var e = {};
  this.subscribe = function(n, a, u) {
    if (u = u || !1, typeof n != "string" || typeof a != "function" || typeof u != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    e.hasOwnProperty(n) || (e[n] = {});
    var o = Math.random().toString(35);
    return e[n][o] = [a, !!u], o;
  }, this.unsubscribe = function(n) {
    for (var a in e) if (e[a][n]) return delete e[a][n], Object.keys(e[a]).length === 0 && delete e[a], !0;
    return !1;
  }, this.publish = function(n) {
    if (e.hasOwnProperty(n)) {
      var a = Array.prototype.slice.call(arguments, 1), u = [];
      for (var o in e[n]) {
        var l = e[n][o];
        try {
          l[0].apply(r, a);
        } catch (h) {
          Ht.console && ve.error("jsPDF PubSub Error", h.message, h);
        }
        l[1] && u.push(o);
      }
      u.length && u.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return e;
  };
}
function io(r) {
  if (!(this instanceof io)) return new io(r);
  var e = "opacity,stroke-opacity".split(",");
  for (var n in r) r.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = r[n]);
  this.id = "", this.objectNumber = -1;
}
function Cu(r, e) {
  this.gState = r, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function Hr(r, e, n, a, u) {
  if (!(this instanceof Hr)) return new Hr(r, e, n, a, u);
  this.type = r === "axial" ? 2 : 3, this.coords = e, this.colors = n, Cu.call(this, a, u);
}
function xi(r, e, n, a, u) {
  if (!(this instanceof xi)) return new xi(r, e, n, a, u);
  this.boundingBox = r, this.xStep = e, this.yStep = n, this.stream = "", this.cloneIndex = 0, Cu.call(this, a, u);
}
function Ut(r) {
  var e, n = typeof arguments[0] == "string" ? arguments[0] : "p", a = arguments[1], u = arguments[2], o = arguments[3], l = [], h = 1, f = 16, g = "S", b = null;
  fe(r = r || {}) === "object" && (n = r.orientation, a = r.unit || a, u = r.format || u, o = r.compress || r.compressPdf || o, (b = r.encryption || null) !== null && (b.userPassword = b.userPassword || "", b.ownerPassword = b.ownerPassword || "", b.userPermissions = b.userPermissions || []), h = typeof r.userUnit == "number" ? Math.abs(r.userUnit) : 1, r.precision !== void 0 && (e = r.precision), r.floatPrecision !== void 0 && (f = r.floatPrecision), g = r.defaultPathOperation || "S"), l = r.filters || (o === !0 ? ["FlateEncode"] : l), a = a || "mm", n = ("" + (n || "P")).toLowerCase();
  var A = r.putOnlyUsedFonts || !1, S = {}, p = { internal: {}, __private__: {} };
  p.__private__.PubSub = lu;
  var O = "1.3", I = p.__private__.getPdfVersion = function() {
    return O;
  };
  p.__private__.setPdfVersion = function(s) {
    O = s;
  };
  var q = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  p.__private__.getPageFormats = function() {
    return q;
  };
  var _ = p.__private__.getPageFormat = function(s) {
    return q[s];
  };
  u = u || "a4";
  var B = { COMPAT: "compat", ADVANCED: "advanced" }, X = B.COMPAT;
  function ot() {
    this.saveGraphicsState(), E(new Tt(It, 0, 0, -It, 0, pr() * It).toString() + " cm"), this.setFontSize(this.getFontSize() / It), g = "n", X = B.ADVANCED;
  }
  function ct() {
    this.restoreGraphicsState(), g = "S", X = B.COMPAT;
  }
  var wt = p.__private__.combineFontStyleAndFontWeight = function(s, v) {
    if (s == "bold" && v == "normal" || s == "bold" && v == 400 || s == "normal" && v == "italic" || s == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return v && (s = v == 400 || v === "normal" ? s === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || s !== "normal" ? (v == 700 ? "bold" : v) + "" + s : "bold"), s;
  };
  p.advancedAPI = function(s) {
    var v = X === B.COMPAT;
    return v && ot.call(this), typeof s != "function" || (s(this), v && ct.call(this)), this;
  }, p.compatAPI = function(s) {
    var v = X === B.ADVANCED;
    return v && ct.call(this), typeof s != "function" || (s(this), v && ot.call(this)), this;
  }, p.isAdvancedAPI = function() {
    return X === B.ADVANCED;
  };
  var tt, R = function(s) {
    if (X !== B.ADVANCED) throw new Error(s + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, gt = p.roundToPrecision = p.__private__.roundToPrecision = function(s, v) {
    var C = e || v;
    if (isNaN(s) || isNaN(C)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return s.toFixed(C).replace(/0+$/, "");
  };
  tt = p.hpf = p.__private__.hpf = typeof f == "number" ? function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(s, f);
  } : f === "smart" ? function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(s, s > -1 && s < 1 ? 16 : 5);
  } : function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return gt(s, 16);
  };
  var dt = p.f2 = p.__private__.f2 = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.f2");
    return gt(s, 2);
  }, F = p.__private__.f3 = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.f3");
    return gt(s, 3);
  }, P = p.scale = p.__private__.scale = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.scale");
    return X === B.COMPAT ? s * It : X === B.ADVANCED ? s : void 0;
  }, z = function(s) {
    return X === B.COMPAT ? pr() - s : X === B.ADVANCED ? s : void 0;
  }, D = function(s) {
    return P(z(s));
  };
  p.__private__.setPrecision = p.setPrecision = function(s) {
    typeof parseInt(s, 10) == "number" && (e = parseInt(s, 10));
  };
  var at, nt = "00000000000000000000000000000000", lt = p.__private__.getFileId = function() {
    return nt;
  }, $ = p.__private__.setFileId = function(s) {
    return nt = s !== void 0 && /^[a-fA-F0-9]{32}$/.test(s) ? s.toUpperCase() : nt.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), b !== null && (Ge = new Ni(b.userPermissions, b.userPassword, b.ownerPassword, nt)), nt;
  };
  p.setFileId = function(s) {
    return $(s), this;
  }, p.getFileId = function() {
    return lt();
  };
  var ft = p.__private__.convertDateToPDFDate = function(s) {
    var v = s.getTimezoneOffset(), C = v < 0 ? "+" : "-", T = Math.floor(Math.abs(v / 60)), J = Math.abs(v % 60), st = [C, M(T), "'", M(J), "'"].join("");
    return ["D:", s.getFullYear(), M(s.getMonth() + 1), M(s.getDate()), M(s.getHours()), M(s.getMinutes()), M(s.getSeconds()), st].join("");
  }, ht = p.__private__.convertPDFDateToDate = function(s) {
    var v = parseInt(s.substr(2, 4), 10), C = parseInt(s.substr(6, 2), 10) - 1, T = parseInt(s.substr(8, 2), 10), J = parseInt(s.substr(10, 2), 10), st = parseInt(s.substr(12, 2), 10), yt = parseInt(s.substr(14, 2), 10);
    return new Date(v, C, T, J, st, yt, 0);
  }, kt = p.__private__.setCreationDate = function(s) {
    var v;
    if (s === void 0 && (s = /* @__PURE__ */ new Date()), s instanceof Date) v = ft(s);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(s)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      v = s;
    }
    return at = v;
  }, L = p.__private__.getCreationDate = function(s) {
    var v = at;
    return s === "jsDate" && (v = ht(at)), v;
  };
  p.setCreationDate = function(s) {
    return kt(s), this;
  }, p.getCreationDate = function(s) {
    return L(s);
  };
  var j, M = p.__private__.padd2 = function(s) {
    return ("0" + parseInt(s)).slice(-2);
  }, W = p.__private__.padd2Hex = function(s) {
    return ("00" + (s = s.toString())).substr(s.length);
  }, Y = 0, Q = [], et = [], rt = 0, At = [], Nt = [], Ct = !1, Bt = et, zt = function() {
    Y = 0, rt = 0, et = [], Q = [], At = [], Qn = Oe(), An = Oe();
  };
  p.__private__.setCustomOutputDestination = function(s) {
    Ct = !0, Bt = s;
  };
  var ut = function(s) {
    Ct || (Bt = s);
  };
  p.__private__.resetCustomOutputDestination = function() {
    Ct = !1, Bt = et;
  };
  var E = p.__private__.out = function(s) {
    return s = s.toString(), rt += s.length + 1, Bt.push(s), Bt;
  }, Xt = p.__private__.write = function(s) {
    return E(arguments.length === 1 ? s.toString() : Array.prototype.join.call(arguments, " "));
  }, Et = p.__private__.getArrayBuffer = function(s) {
    for (var v = s.length, C = new ArrayBuffer(v), T = new Uint8Array(C); v--; ) T[v] = s.charCodeAt(v);
    return C;
  }, Lt = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  p.__private__.getStandardFonts = function() {
    return Lt;
  };
  var xt = r.fontSize || 16;
  p.__private__.setFontSize = p.setFontSize = function(s) {
    return xt = X === B.ADVANCED ? s / It : s, this;
  };
  var Ft, Pt = p.__private__.getFontSize = p.getFontSize = function() {
    return X === B.COMPAT ? xt : xt * It;
  }, qt = r.R2L || !1;
  p.__private__.setR2L = p.setR2L = function(s) {
    return qt = s, this;
  }, p.__private__.getR2L = p.getR2L = function() {
    return qt;
  };
  var Gt, $t = p.__private__.setZoomMode = function(s) {
    var v = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(s)) Ft = s;
    else if (isNaN(s)) {
      if (v.indexOf(s) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + s + '" is not recognized.');
      Ft = s;
    } else Ft = parseInt(s, 10);
  };
  p.__private__.getZoomMode = function() {
    return Ft;
  };
  var te, ie = p.__private__.setPageMode = function(s) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(s) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + s + '" is not recognized.');
    Gt = s;
  };
  p.__private__.getPageMode = function() {
    return Gt;
  };
  var de = p.__private__.setLayoutMode = function(s) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(s) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + s + '" is not recognized.');
    te = s;
  };
  p.__private__.getLayoutMode = function() {
    return te;
  }, p.__private__.setDisplayMode = p.setDisplayMode = function(s, v, C) {
    return $t(s), de(v), ie(C), this;
  };
  var Wt = { title: "", subject: "", author: "", keywords: "", creator: "" };
  p.__private__.getDocumentProperty = function(s) {
    if (Object.keys(Wt).indexOf(s) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return Wt[s];
  }, p.__private__.getDocumentProperties = function() {
    return Wt;
  }, p.__private__.setDocumentProperties = p.setProperties = p.setDocumentProperties = function(s) {
    for (var v in Wt) Wt.hasOwnProperty(v) && s[v] && (Wt[v] = s[v]);
    return this;
  }, p.__private__.setDocumentProperty = function(s, v) {
    if (Object.keys(Wt).indexOf(s) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return Wt[s] = v;
  };
  var ee, It, Ve, oe, yn, ge = {}, Le = {}, Rn = [], ue = {}, jr = {}, Ae = {}, Ln = {}, $n = null, xe = 0, Yt = [], ce = new lu(p), Or = r.hotfixes || [], He = {}, Tn = {}, zn = [], Tt = function s(v, C, T, J, st, yt) {
    if (!(this instanceof s)) return new s(v, C, T, J, st, yt);
    isNaN(v) && (v = 1), isNaN(C) && (C = 0), isNaN(T) && (T = 0), isNaN(J) && (J = 1), isNaN(st) && (st = 0), isNaN(yt) && (yt = 0), this._matrix = [v, C, T, J, st, yt];
  };
  Object.defineProperty(Tt.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(s) {
    this._matrix[0] = s;
  } }), Object.defineProperty(Tt.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(s) {
    this._matrix[1] = s;
  } }), Object.defineProperty(Tt.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(s) {
    this._matrix[2] = s;
  } }), Object.defineProperty(Tt.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(s) {
    this._matrix[3] = s;
  } }), Object.defineProperty(Tt.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(s) {
    this._matrix[4] = s;
  } }), Object.defineProperty(Tt.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(s) {
    this._matrix[5] = s;
  } }), Object.defineProperty(Tt.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(s) {
    this._matrix[0] = s;
  } }), Object.defineProperty(Tt.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(s) {
    this._matrix[1] = s;
  } }), Object.defineProperty(Tt.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(s) {
    this._matrix[2] = s;
  } }), Object.defineProperty(Tt.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(s) {
    this._matrix[3] = s;
  } }), Object.defineProperty(Tt.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(s) {
    this._matrix[4] = s;
  } }), Object.defineProperty(Tt.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(s) {
    this._matrix[5] = s;
  } }), Object.defineProperty(Tt.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Tt.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Tt.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Tt.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Tt.prototype.join = function(s) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(tt).join(s);
  }, Tt.prototype.multiply = function(s) {
    var v = s.sx * this.sx + s.shy * this.shx, C = s.sx * this.shy + s.shy * this.sy, T = s.shx * this.sx + s.sy * this.shx, J = s.shx * this.shy + s.sy * this.sy, st = s.tx * this.sx + s.ty * this.shx + this.tx, yt = s.tx * this.shy + s.ty * this.sy + this.ty;
    return new Tt(v, C, T, J, st, yt);
  }, Tt.prototype.decompose = function() {
    var s = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty, yt = Math.sqrt(s * s + v * v), jt = (s /= yt) * C + (v /= yt) * T;
    C -= s * jt, T -= v * jt;
    var Dt = Math.sqrt(C * C + T * T);
    return jt /= Dt, s * (T /= Dt) < v * (C /= Dt) && (s = -s, v = -v, jt = -jt, yt = -yt), { scale: new Tt(yt, 0, 0, Dt, 0, 0), translate: new Tt(1, 0, 0, 1, J, st), rotate: new Tt(s, v, -v, s, 0, 0), skew: new Tt(1, 0, jt, 1, 0, 0) };
  }, Tt.prototype.toString = function(s) {
    return this.join(" ");
  }, Tt.prototype.inversed = function() {
    var s = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty, yt = 1 / (s * T - v * C), jt = T * yt, Dt = -v * yt, Kt = -C * yt, Qt = s * yt;
    return new Tt(jt, Dt, Kt, Qt, -jt * J - Kt * st, -Dt * J - Qt * st);
  }, Tt.prototype.applyToPoint = function(s) {
    var v = s.x * this.sx + s.y * this.shx + this.tx, C = s.x * this.shy + s.y * this.sy + this.ty;
    return new ai(v, C);
  }, Tt.prototype.applyToRectangle = function(s) {
    var v = this.applyToPoint(s), C = this.applyToPoint(new ai(s.x + s.w, s.y + s.h));
    return new Ri(v.x, v.y, C.x - v.x, C.y - v.y);
  }, Tt.prototype.clone = function() {
    var s = this.sx, v = this.shy, C = this.shx, T = this.sy, J = this.tx, st = this.ty;
    return new Tt(s, v, C, T, J, st);
  }, p.Matrix = Tt;
  var Nn = p.matrixMult = function(s, v) {
    return v.multiply(s);
  }, Un = new Tt(1, 0, 0, 1, 0, 0);
  p.unitMatrix = p.identityMatrix = Un;
  var tn = function(s, v) {
    if (!jr[s]) {
      var C = (v instanceof Hr ? "Sh" : "P") + (Object.keys(ue).length + 1).toString(10);
      v.id = C, jr[s] = C, ue[C] = v, ce.publish("addPattern", v);
    }
  };
  p.ShadingPattern = Hr, p.TilingPattern = xi, p.addShadingPattern = function(s, v) {
    return R("addShadingPattern()"), tn(s, v), this;
  }, p.beginTilingPattern = function(s) {
    R("beginTilingPattern()"), Pa(s.boundingBox[0], s.boundingBox[1], s.boundingBox[2] - s.boundingBox[0], s.boundingBox[3] - s.boundingBox[1], s.matrix);
  }, p.endTilingPattern = function(s, v) {
    R("endTilingPattern()"), v.stream = Nt[j].join(`
`), tn(s, v), ce.publish("endTilingPattern", v), zn.pop().restore();
  };
  var qe = p.__private__.newObject = function() {
    var s = Oe();
    return cn(s, !0), s;
  }, Oe = p.__private__.newObjectDeferred = function() {
    return Y++, Q[Y] = function() {
      return rt;
    }, Y;
  }, cn = function(s, v) {
    return v = typeof v == "boolean" && v, Q[s] = rt, v && E(s + " 0 obj"), s;
  }, Gr = p.__private__.newAdditionalObject = function() {
    var s = { objId: Oe(), content: "" };
    return At.push(s), s;
  }, Qn = Oe(), An = Oe(), xn = p.__private__.decodeColorString = function(s) {
    var v = s.split(" ");
    if (v.length !== 2 || v[1] !== "g" && v[1] !== "G")
      v.length === 5 && (v[4] === "k" || v[4] === "K") && (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), "r"]);
    else {
      var C = parseFloat(v[0]);
      v = [C, C, C, "r"];
    }
    for (var T = "#", J = 0; J < 3; J++) T += ("0" + Math.floor(255 * parseFloat(v[J])).toString(16)).slice(-2);
    return T;
  }, Sn = p.__private__.encodeColorString = function(s) {
    var v;
    typeof s == "string" && (s = { ch1: s });
    var C = s.ch1, T = s.ch2, J = s.ch3, st = s.ch4, yt = s.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof C == "string" && C.charAt(0) !== "#") {
      var jt = new Fu(C);
      if (jt.ok) C = jt.toHex();
      else if (!/^\d*\.?\d*$/.test(C)) throw new Error('Invalid color "' + C + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof C == "string" && /^#[0-9A-Fa-f]{3}$/.test(C) && (C = "#" + C[1] + C[1] + C[2] + C[2] + C[3] + C[3]), typeof C == "string" && /^#[0-9A-Fa-f]{6}$/.test(C)) {
      var Dt = parseInt(C.substr(1), 16);
      C = Dt >> 16 & 255, T = Dt >> 8 & 255, J = 255 & Dt;
    }
    if (T === void 0 || st === void 0 && C === T && T === J) if (typeof C == "string") v = C + " " + yt[0];
    else switch (s.precision) {
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
      else switch (s.precision) {
        case 2:
          v = [dt(C / 255), dt(T / 255), dt(J / 255), yt[1]].join(" ");
          break;
        default:
        case 3:
          v = [F(C / 255), F(T / 255), F(J / 255), yt[1]].join(" ");
      }
    } else if (typeof C == "string") v = [C, T, J, st, yt[2]].join(" ");
    else switch (s.precision) {
      case 2:
        v = [dt(C), dt(T), dt(J), dt(st), yt[2]].join(" ");
        break;
      case 3:
      default:
        v = [F(C), F(T), F(J), F(st), yt[2]].join(" ");
    }
    return v;
  }, Hn = p.__private__.getFilters = function() {
    return l;
  }, pn = p.__private__.putStream = function(s) {
    var v = (s = s || {}).data || "", C = s.filters || Hn(), T = s.alreadyAppliedFilters || [], J = s.addLength1 || !1, st = v.length, yt = s.objectId, jt = function(Ye) {
      return Ye;
    };
    if (b !== null && yt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    b !== null && (jt = Ge.encryptor(yt, 0));
    var Dt = {};
    C === !0 && (C = ["FlateEncode"]);
    var Kt = s.additionalKeyValues || [], Qt = (Dt = Ut.API.processDataByFilters !== void 0 ? Ut.API.processDataByFilters(v, C) : { data: v, reverseChain: [] }).reverseChain + (Array.isArray(T) ? T.join(" ") : T.toString());
    if (Dt.data.length !== 0 && (Kt.push({ key: "Length", value: Dt.data.length }), J === !0 && Kt.push({ key: "Length1", value: st })), Qt.length != 0) if (Qt.split("/").length - 1 == 1) Kt.push({ key: "Filter", value: Qt });
    else {
      Kt.push({ key: "Filter", value: "[" + Qt + "]" });
      for (var re = 0; re < Kt.length; re += 1) if (Kt[re].key === "DecodeParms") {
        for (var Ne = [], Se = 0; Se < Dt.reverseChain.split("/").length - 1; Se += 1) Ne.push("null");
        Ne.push(Kt[re].value), Kt[re].value = "[" + Ne.join(" ") + "]";
      }
    }
    E("<<");
    for (var Be = 0; Be < Kt.length; Be++) E("/" + Kt[Be].key + " " + Kt[Be].value);
    E(">>"), Dt.data.length !== 0 && (E("stream"), E(jt(Dt.data)), E("endstream"));
  }, Wn = p.__private__.putPage = function(s) {
    var v = s.number, C = s.data, T = s.objId, J = s.contentsObjId;
    cn(T, !0), E("<</Type /Page"), E("/Parent " + s.rootDictionaryObjId + " 0 R"), E("/Resources " + s.resourceDictionaryObjId + " 0 R"), E("/MediaBox [" + parseFloat(tt(s.mediaBox.bottomLeftX)) + " " + parseFloat(tt(s.mediaBox.bottomLeftY)) + " " + tt(s.mediaBox.topRightX) + " " + tt(s.mediaBox.topRightY) + "]"), s.cropBox !== null && E("/CropBox [" + tt(s.cropBox.bottomLeftX) + " " + tt(s.cropBox.bottomLeftY) + " " + tt(s.cropBox.topRightX) + " " + tt(s.cropBox.topRightY) + "]"), s.bleedBox !== null && E("/BleedBox [" + tt(s.bleedBox.bottomLeftX) + " " + tt(s.bleedBox.bottomLeftY) + " " + tt(s.bleedBox.topRightX) + " " + tt(s.bleedBox.topRightY) + "]"), s.trimBox !== null && E("/TrimBox [" + tt(s.trimBox.bottomLeftX) + " " + tt(s.trimBox.bottomLeftY) + " " + tt(s.trimBox.topRightX) + " " + tt(s.trimBox.topRightY) + "]"), s.artBox !== null && E("/ArtBox [" + tt(s.artBox.bottomLeftX) + " " + tt(s.artBox.bottomLeftY) + " " + tt(s.artBox.topRightX) + " " + tt(s.artBox.topRightY) + "]"), typeof s.userUnit == "number" && s.userUnit !== 1 && E("/UserUnit " + s.userUnit), ce.publish("putPage", { objId: T, pageContext: Yt[v], pageNumber: v, page: C }), E("/Contents " + J + " 0 R"), E(">>"), E("endobj");
    var st = C.join(`
`);
    return X === B.ADVANCED && (st += `
Q`), cn(J, !0), pn({ data: st, filters: Hn(), objectId: J }), E("endobj"), T;
  }, Br = p.__private__.putPages = function() {
    var s, v, C = [];
    for (s = 1; s <= xe; s++) Yt[s].objId = Oe(), Yt[s].contentsObjId = Oe();
    for (s = 1; s <= xe; s++) C.push(Wn({ number: s, data: Nt[s], objId: Yt[s].objId, contentsObjId: Yt[s].contentsObjId, mediaBox: Yt[s].mediaBox, cropBox: Yt[s].cropBox, bleedBox: Yt[s].bleedBox, trimBox: Yt[s].trimBox, artBox: Yt[s].artBox, userUnit: Yt[s].userUnit, rootDictionaryObjId: Qn, resourceDictionaryObjId: An }));
    cn(Qn, !0), E("<</Type /Pages");
    var T = "/Kids [";
    for (v = 0; v < xe; v++) T += C[v] + " 0 R ";
    E(T + "]"), E("/Count " + xe), E(">>"), E("endobj"), ce.publish("postPutPages");
  }, Yr = function(s) {
    ce.publish("putFont", { font: s, out: E, newObject: qe, putStream: pn }), s.isAlreadyPutted !== !0 && (s.objectNumber = qe(), E("<<"), E("/Type /Font"), E("/BaseFont /" + Ai(s.postScriptName)), E("/Subtype /Type1"), typeof s.encoding == "string" && E("/Encoding /" + s.encoding), E("/FirstChar 32"), E("/LastChar 255"), E(">>"), E("endobj"));
  }, Jr = function() {
    for (var s in ge) ge.hasOwnProperty(s) && (A === !1 || A === !0 && S.hasOwnProperty(s)) && Yr(ge[s]);
  }, Xr = function(s) {
    s.objectNumber = qe();
    var v = [];
    v.push({ key: "Type", value: "/XObject" }), v.push({ key: "Subtype", value: "/Form" }), v.push({ key: "BBox", value: "[" + [tt(s.x), tt(s.y), tt(s.x + s.width), tt(s.y + s.height)].join(" ") + "]" }), v.push({ key: "Matrix", value: "[" + s.matrix.toString() + "]" });
    var C = s.pages[1].join(`
`);
    pn({ data: C, additionalKeyValues: v, objectId: s.objectNumber }), E("endobj");
  }, Kr = function() {
    for (var s in He) He.hasOwnProperty(s) && Xr(He[s]);
  }, ca = function(s, v) {
    var C, T = [], J = 1 / (v - 1);
    for (C = 0; C < 1; C += J) T.push(C);
    if (T.push(1), s[0].offset != 0) {
      var st = { offset: 0, color: s[0].color };
      s.unshift(st);
    }
    if (s[s.length - 1].offset != 1) {
      var yt = { offset: 1, color: s[s.length - 1].color };
      s.push(yt);
    }
    for (var jt = "", Dt = 0, Kt = 0; Kt < T.length; Kt++) {
      for (C = T[Kt]; C > s[Dt + 1].offset; ) Dt++;
      var Qt = s[Dt].offset, re = (C - Qt) / (s[Dt + 1].offset - Qt), Ne = s[Dt].color, Se = s[Dt + 1].color;
      jt += W(Math.round((1 - re) * Ne[0] + re * Se[0]).toString(16)) + W(Math.round((1 - re) * Ne[1] + re * Se[1]).toString(16)) + W(Math.round((1 - re) * Ne[2] + re * Se[2]).toString(16));
    }
    return jt.trim();
  }, co = function(s, v) {
    v || (v = 21);
    var C = qe(), T = ca(s.colors, v), J = [];
    J.push({ key: "FunctionType", value: "0" }), J.push({ key: "Domain", value: "[0.0 1.0]" }), J.push({ key: "Size", value: "[" + v + "]" }), J.push({ key: "BitsPerSample", value: "8" }), J.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), J.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), pn({ data: T, additionalKeyValues: J, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: C }), E("endobj"), s.objectNumber = qe(), E("<< /ShadingType " + s.type), E("/ColorSpace /DeviceRGB");
    var st = "/Coords [" + tt(parseFloat(s.coords[0])) + " " + tt(parseFloat(s.coords[1])) + " ";
    s.type === 2 ? st += tt(parseFloat(s.coords[2])) + " " + tt(parseFloat(s.coords[3])) : st += tt(parseFloat(s.coords[2])) + " " + tt(parseFloat(s.coords[3])) + " " + tt(parseFloat(s.coords[4])) + " " + tt(parseFloat(s.coords[5])), E(st += "]"), s.matrix && E("/Matrix [" + s.matrix.toString() + "]"), E("/Function " + C + " 0 R"), E("/Extend [true true]"), E(">>"), E("endobj");
  }, lo = function(s, v) {
    var C = Oe(), T = qe();
    v.push({ resourcesOid: C, objectOid: T }), s.objectNumber = T;
    var J = [];
    J.push({ key: "Type", value: "/Pattern" }), J.push({ key: "PatternType", value: "1" }), J.push({ key: "PaintType", value: "1" }), J.push({ key: "TilingType", value: "1" }), J.push({ key: "BBox", value: "[" + s.boundingBox.map(tt).join(" ") + "]" }), J.push({ key: "XStep", value: tt(s.xStep) }), J.push({ key: "YStep", value: tt(s.yStep) }), J.push({ key: "Resources", value: C + " 0 R" }), s.matrix && J.push({ key: "Matrix", value: "[" + s.matrix.toString() + "]" }), pn({ data: s.stream, additionalKeyValues: J, objectId: s.objectNumber }), E("endobj");
  }, Zr = function(s) {
    var v;
    for (v in ue) ue.hasOwnProperty(v) && (ue[v] instanceof Hr ? co(ue[v]) : ue[v] instanceof xi && lo(ue[v], s));
  }, la = function(s) {
    for (var v in s.objectNumber = qe(), E("<<"), s) switch (v) {
      case "opacity":
        E("/ca " + dt(s[v]));
        break;
      case "stroke-opacity":
        E("/CA " + dt(s[v]));
    }
    E(">>"), E("endobj");
  }, ho = function() {
    var s;
    for (s in Ae) Ae.hasOwnProperty(s) && la(Ae[s]);
  }, Fi = function() {
    for (var s in E("/XObject <<"), He) He.hasOwnProperty(s) && He[s].objectNumber >= 0 && E("/" + s + " " + He[s].objectNumber + " 0 R");
    ce.publish("putXobjectDict"), E(">>");
  }, fo = function() {
    Ge.oid = qe(), E("<<"), E("/Filter /Standard"), E("/V " + Ge.v), E("/R " + Ge.r), E("/U <" + Ge.toHexString(Ge.U) + ">"), E("/O <" + Ge.toHexString(Ge.O) + ">"), E("/P " + Ge.P), E(">>"), E("endobj");
  }, ha = function() {
    for (var s in E("/Font <<"), ge) ge.hasOwnProperty(s) && (A === !1 || A === !0 && S.hasOwnProperty(s)) && E("/" + s + " " + ge[s].objectNumber + " 0 R");
    E(">>");
  }, po = function() {
    if (Object.keys(ue).length > 0) {
      for (var s in E("/Shading <<"), ue) ue.hasOwnProperty(s) && ue[s] instanceof Hr && ue[s].objectNumber >= 0 && E("/" + s + " " + ue[s].objectNumber + " 0 R");
      ce.publish("putShadingPatternDict"), E(">>");
    }
  }, $r = function(s) {
    if (Object.keys(ue).length > 0) {
      for (var v in E("/Pattern <<"), ue) ue.hasOwnProperty(v) && ue[v] instanceof p.TilingPattern && ue[v].objectNumber >= 0 && ue[v].objectNumber < s && E("/" + v + " " + ue[v].objectNumber + " 0 R");
      ce.publish("putTilingPatternDict"), E(">>");
    }
  }, go = function() {
    if (Object.keys(Ae).length > 0) {
      var s;
      for (s in E("/ExtGState <<"), Ae) Ae.hasOwnProperty(s) && Ae[s].objectNumber >= 0 && E("/" + s + " " + Ae[s].objectNumber + " 0 R");
      ce.publish("putGStateDict"), E(">>");
    }
  }, ke = function(s) {
    cn(s.resourcesOid, !0), E("<<"), E("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), ha(), po(), $r(s.objectOid), go(), Fi(), E(">>"), E("endobj");
  }, fa = function() {
    var s = [];
    Jr(), ho(), Kr(), Zr(s), ce.publish("putResources"), s.forEach(ke), ke({ resourcesOid: An, objectOid: Number.MAX_SAFE_INTEGER }), ce.publish("postPutResources");
  }, da = function() {
    ce.publish("putAdditionalObjects");
    for (var s = 0; s < At.length; s++) {
      var v = At[s];
      cn(v.objId, !0), E(v.content), E("endobj");
    }
    ce.publish("postPutAdditionalObjects");
  }, pa = function(s) {
    Le[s.fontName] = Le[s.fontName] || {}, Le[s.fontName][s.fontStyle] = s.id;
  }, Ii = function(s, v, C, T, J) {
    var st = { id: "F" + (Object.keys(ge).length + 1).toString(10), postScriptName: s, fontName: v, fontStyle: C, encoding: T, isStandardFont: J || !1, metadata: {} };
    return ce.publish("addFont", { font: st, instance: this }), ge[st.id] = st, pa(st), st.id;
  }, mo = function(s) {
    for (var v = 0, C = Lt.length; v < C; v++) {
      var T = Ii.call(this, s[v][0], s[v][1], s[v][2], Lt[v][3], !0);
      A === !1 && (S[T] = !0);
      var J = s[v][0].split("-");
      pa({ id: T, fontName: J[0], fontStyle: J[1] || "" });
    }
    ce.publish("addFonts", { fonts: ge, dictionary: Le });
  }, _n = function(s) {
    return s.foo = function() {
      try {
        return s.apply(this, arguments);
      } catch (T) {
        var v = T.stack || "";
        ~v.indexOf(" at ") && (v = v.split(" at ")[1]);
        var C = "Error in function " + v.split(`
`)[0].split("<")[0] + ": " + T.message;
        if (!Ht.console) throw new Error(C);
        Ht.console.error(C, T), Ht.alert && alert(C);
      }
    }, s.foo.bar = s, s.foo;
  }, Qr = function(s, v) {
    var C, T, J, st, yt, jt, Dt, Kt, Qt;
    if (J = (v = v || {}).sourceEncoding || "Unicode", yt = v.outputEncoding, (v.autoencode || yt) && ge[ee].metadata && ge[ee].metadata[J] && ge[ee].metadata[J].encoding && (st = ge[ee].metadata[J].encoding, !yt && ge[ee].encoding && (yt = ge[ee].encoding), !yt && st.codePages && (yt = st.codePages[0]), typeof yt == "string" && (yt = st[yt]), yt)) {
      for (Dt = !1, jt = [], C = 0, T = s.length; C < T; C++) (Kt = yt[s.charCodeAt(C)]) ? jt.push(String.fromCharCode(Kt)) : jt.push(s[C]), jt[C].charCodeAt(0) >> 8 && (Dt = !0);
      s = jt.join("");
    }
    for (C = s.length; Dt === void 0 && C !== 0; ) s.charCodeAt(C - 1) >> 8 && (Dt = !0), C--;
    if (!Dt) return s;
    for (jt = v.noBOM ? [] : [254, 255], C = 0, T = s.length; C < T; C++) {
      if ((Qt = (Kt = s.charCodeAt(C)) >> 8) >> 8) throw new Error("Character at position " + C + " of string '" + s + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      jt.push(Qt), jt.push(Kt - (Qt << 8));
    }
    return String.fromCharCode.apply(void 0, jt);
  }, en = p.__private__.pdfEscape = p.pdfEscape = function(s, v) {
    return Qr(s, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Ci = p.__private__.beginPage = function(s) {
    Nt[++xe] = [], Yt[xe] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(s[0]), topRightY: Number(s[1]) } }, ma(xe), ut(Nt[j]);
  }, ga = function(s, v) {
    var C, T, J;
    switch (n = v || n, typeof s == "string" && (C = _(s.toLowerCase()), Array.isArray(C) && (T = C[0], J = C[1])), Array.isArray(s) && (T = s[0] * It, J = s[1] * It), isNaN(T) && (T = u[0], J = u[1]), (T > 14400 || J > 14400) && (ve.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), T = Math.min(14400, T), J = Math.min(14400, J)), u = [T, J], n.substr(0, 1)) {
      case "l":
        J > T && (u = [J, T]);
        break;
      case "p":
        T > J && (u = [J, T]);
    }
    Ci(u), Na(Mi), E(Pn), qi !== 0 && E(qi + " J"), Di !== 0 && E(Di + " j"), ce.publish("addPage", { pageNumber: xe });
  }, vo = function(s) {
    s > 0 && s <= xe && (Nt.splice(s, 1), Yt.splice(s, 1), xe--, j > xe && (j = xe), this.setPage(j));
  }, ma = function(s) {
    s > 0 && s <= xe && (j = s);
  }, bo = p.__private__.getNumberOfPages = p.getNumberOfPages = function() {
    return Nt.length - 1;
  }, va = function(s, v, C) {
    var T, J = void 0;
    return C = C || {}, s = s !== void 0 ? s : ge[ee].fontName, v = v !== void 0 ? v : ge[ee].fontStyle, T = s.toLowerCase(), Le[T] !== void 0 && Le[T][v] !== void 0 ? J = Le[T][v] : Le[s] !== void 0 && Le[s][v] !== void 0 ? J = Le[s][v] : C.disableWarning === !1 && ve.warn("Unable to look up font label for font '" + s + "', '" + v + "'. Refer to getFontList() for available fonts."), J || C.noFallback || (J = Le.times[v]) == null && (J = Le.times.normal), J;
  }, wo = p.__private__.putInfo = function() {
    var s = qe(), v = function(T) {
      return T;
    };
    for (var C in b !== null && (v = Ge.encryptor(s, 0)), E("<<"), E("/Producer (" + en(v("jsPDF " + Ut.version)) + ")"), Wt) Wt.hasOwnProperty(C) && Wt[C] && E("/" + C.substr(0, 1).toUpperCase() + C.substr(1) + " (" + en(v(Wt[C])) + ")");
    E("/CreationDate (" + en(v(at)) + ")"), E(">>"), E("endobj");
  }, ji = p.__private__.putCatalog = function(s) {
    var v = (s = s || {}).rootDictionaryObjId || Qn;
    switch (qe(), E("<<"), E("/Type /Catalog"), E("/Pages " + v + " 0 R"), Ft || (Ft = "fullwidth"), Ft) {
      case "fullwidth":
        E("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        E("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        E("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        E("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var C = "" + Ft;
        C.substr(C.length - 1) === "%" && (Ft = parseInt(Ft) / 100), typeof Ft == "number" && E("/OpenAction [3 0 R /XYZ null null " + dt(Ft) + "]");
    }
    switch (te || (te = "continuous"), te) {
      case "continuous":
        E("/PageLayout /OneColumn");
        break;
      case "single":
        E("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        E("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        E("/PageLayout /TwoColumnRight");
    }
    Gt && E("/PageMode /" + Gt), ce.publish("putCatalog"), E(">>"), E("endobj");
  }, yo = p.__private__.putTrailer = function() {
    E("trailer"), E("<<"), E("/Size " + (Y + 1)), E("/Root " + Y + " 0 R"), E("/Info " + (Y - 1) + " 0 R"), b !== null && E("/Encrypt " + Ge.oid + " 0 R"), E("/ID [ <" + nt + "> <" + nt + "> ]"), E(">>");
  }, Lo = p.__private__.putHeader = function() {
    E("%PDF-" + O), E("%ºß¬à");
  }, No = p.__private__.putXRef = function() {
    var s = "0000000000";
    E("xref"), E("0 " + (Y + 1)), E("0000000000 65535 f ");
    for (var v = 1; v <= Y; v++)
      typeof Q[v] == "function" ? E((s + Q[v]()).slice(-10) + " 00000 n ") : Q[v] !== void 0 ? E((s + Q[v]).slice(-10) + " 00000 n ") : E("0000000000 00000 n ");
  }, tr = p.__private__.buildDocument = function() {
    zt(), ut(et), ce.publish("buildDocument"), Lo(), Br(), da(), fa(), b !== null && fo(), wo(), ji();
    var s = rt;
    return No(), yo(), E("startxref"), E("" + s), E("%%EOF"), ut(Nt[j]), et.join(`
`);
  }, ti = p.__private__.getBlob = function(s) {
    return new Blob([Et(s)], { type: "application/pdf" });
  }, ei = p.output = p.__private__.output = _n(function(s, v) {
    switch (typeof (v = v || {}) == "string" ? v = { filename: v } : v.filename = v.filename || "generated.pdf", s) {
      case void 0:
        return tr();
      case "save":
        p.save(v.filename);
        break;
      case "arraybuffer":
        return Et(tr());
      case "blob":
        return ti(tr());
      case "bloburi":
      case "bloburl":
        if (Ht.URL !== void 0 && typeof Ht.URL.createObjectURL == "function") return Ht.URL && Ht.URL.createObjectURL(ti(tr())) || void 0;
        ve.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var C = "", T = tr();
        try {
          C = gs(T);
        } catch {
          C = gs(unescape(encodeURIComponent(T)));
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
          var Dt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (v.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + v.filename + '" width="500px" height="400px" /></body></html>', Kt = Ht.open();
          if (Kt !== null) {
            Kt.document.write(Dt);
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
        var re = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", v) + '"></iframe></body></html>', Ne = Ht.open();
        if (Ne !== null && (Ne.document.write(re), Ne.document.title = v.filename), Ne || typeof safari > "u") return Ne;
        break;
      case "datauri":
      case "dataurl":
        return Ht.document.location.href = this.output("datauristring", v);
      default:
        return null;
    }
  }), ba = function(s) {
    return Array.isArray(Or) === !0 && Or.indexOf(s) > -1;
  };
  switch (a) {
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
      It = ba("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      It = 12;
      break;
    case "ex":
      It = 6;
      break;
    default:
      if (typeof a != "number") throw new Error("Invalid unit: " + a);
      It = a;
  }
  var Ge = null;
  kt(), $();
  var Ao = function(s) {
    return b !== null ? Ge.encryptor(s, 0) : function(v) {
      return v;
    };
  }, wa = p.__private__.getPageInfo = p.getPageInfo = function(s) {
    if (isNaN(s) || s % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Yt[s].objId, pageNumber: s, pageContext: Yt[s] };
  }, Vt = p.__private__.getPageInfoByObjId = function(s) {
    if (isNaN(s) || s % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var v in Yt) if (Yt[v].objId === s) break;
    return wa(v);
  }, xo = p.__private__.getCurrentPageInfo = p.getCurrentPageInfo = function() {
    return { objId: Yt[j].objId, pageNumber: j, pageContext: Yt[j] };
  };
  p.addPage = function() {
    return ga.apply(this, arguments), this;
  }, p.setPage = function() {
    return ma.apply(this, arguments), ut.call(this, Nt[j]), this;
  }, p.insertPage = function(s) {
    return this.addPage(), this.movePage(j, s), this;
  }, p.movePage = function(s, v) {
    var C, T;
    if (s > v) {
      C = Nt[s], T = Yt[s];
      for (var J = s; J > v; J--) Nt[J] = Nt[J - 1], Yt[J] = Yt[J - 1];
      Nt[v] = C, Yt[v] = T, this.setPage(v);
    } else if (s < v) {
      C = Nt[s], T = Yt[s];
      for (var st = s; st < v; st++) Nt[st] = Nt[st + 1], Yt[st] = Yt[st + 1];
      Nt[v] = C, Yt[v] = T, this.setPage(v);
    }
    return this;
  }, p.deletePage = function() {
    return vo.apply(this, arguments), this;
  }, p.__private__.text = p.text = function(s, v, C, T, J) {
    var st, yt, jt, Dt, Kt, Qt, re, Ne, Se, Be = (T = T || {}).scope || this;
    if (typeof s == "number" && typeof v == "number" && (typeof C == "string" || Array.isArray(C))) {
      var Ye = C;
      C = v, v = s, s = Ye;
    }
    if (arguments[3] instanceof Tt ? (R("The transform parameter of text() with a Matrix value"), Se = J) : (jt = arguments[4], Dt = arguments[5], fe(re = arguments[3]) === "object" && re !== null || (typeof jt == "string" && (Dt = jt, jt = null), typeof re == "string" && (Dt = re, re = null), typeof re == "number" && (jt = re, re = null), T = { flags: re, angle: jt, align: Dt })), isNaN(v) || isNaN(C) || s == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (s.length === 0) return Be;
    var Re = "", kn = !1, ln = typeof T.lineHeightFactor == "number" ? T.lineHeightFactor : Er, nr = Be.internal.scaleFactor;
    function ka(be) {
      return be = be.split("	").join(Array(T.TabLen || 9).join(" ")), en(be, re);
    }
    function Hi(be) {
      for (var we, Fe = be.concat(), De = [], or = Fe.length; or--; ) typeof (we = Fe.shift()) == "string" ? De.push(we) : Array.isArray(be) && (we.length === 1 || we[1] === void 0 && we[2] === void 0) ? De.push(we[0]) : De.push([we[0], we[1], we[2]]);
      return De;
    }
    function Wi(be, we) {
      var Fe;
      if (typeof be == "string") Fe = we(be)[0];
      else if (Array.isArray(be)) {
        for (var De, or, wr = be.concat(), gi = [], Ia = wr.length; Ia--; ) typeof (De = wr.shift()) == "string" ? gi.push(we(De)[0]) : Array.isArray(De) && typeof De[0] == "string" && (or = we(De[0], De[1], De[2]), gi.push([or[0], or[1], or[2]]));
        Fe = gi;
      }
      return Fe;
    }
    var si = !1, Vi = !0;
    if (typeof s == "string") si = !0;
    else if (Array.isArray(s)) {
      var Gi = s.concat();
      yt = [];
      for (var ui, nn = Gi.length; nn--; ) (typeof (ui = Gi.shift()) != "string" || Array.isArray(ui) && typeof ui[0] != "string") && (Vi = !1);
      si = Vi;
    }
    if (si === !1) throw new Error('Type of text must be string or Array. "' + s + '" is not recognized.');
    typeof s == "string" && (s = s.match(/[\r?\n]/) ? s.split(/\r\n|\r|\n/g) : [s]);
    var ci = xt / Be.internal.scaleFactor, li = ci * (ln - 1);
    switch (T.baseline) {
      case "bottom":
        C -= li;
        break;
      case "top":
        C += ci - li;
        break;
      case "hanging":
        C += ci - 2 * li;
        break;
      case "middle":
        C += ci / 2 - li;
    }
    if ((Qt = T.maxWidth || 0) > 0 && (typeof s == "string" ? s = Be.splitTextToSize(s, Qt) : Object.prototype.toString.call(s) === "[object Array]" && (s = s.reduce(function(be, we) {
      return be.concat(Be.splitTextToSize(we, Qt));
    }, []))), st = { text: s, x: v, y: C, options: T, mutex: { pdfEscape: en, activeFontKey: ee, fonts: ge, activeFontSize: xt } }, ce.publish("preProcessText", st), s = st.text, jt = (T = st.options).angle, !(Se instanceof Tt) && jt && typeof jt == "number") {
      jt *= Math.PI / 180, T.rotationDirection === 0 && (jt = -jt), X === B.ADVANCED && (jt = -jt);
      var hi = Math.cos(jt), Yi = Math.sin(jt);
      Se = new Tt(hi, Yi, -Yi, hi, 0, 0);
    } else jt && jt instanceof Tt && (Se = jt);
    X !== B.ADVANCED || Se || (Se = Un), (Kt = T.charSpace || ii) !== void 0 && (Re += tt(P(Kt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ne = T.horizontalScale) !== void 0 && (Re += tt(100 * Ne) + ` Tz
`), T.lang;
    var rn = -1, Bo = T.renderingMode !== void 0 ? T.renderingMode : T.stroke, Ji = Be.internal.getCurrentPageInfo().pageContext;
    switch (Bo) {
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
    var Fa = Ji.usedRenderingMode !== void 0 ? Ji.usedRenderingMode : -1;
    rn !== -1 ? Re += rn + ` Tr
` : Fa !== -1 && (Re += `0 Tr
`), rn !== -1 && (Ji.usedRenderingMode = rn), Dt = T.align || "left";
    var Fn, Xi = xt * ln, Mo = Be.internal.pageSize.getWidth(), Eo = ge[ee];
    Kt = T.charSpace || ii, Qt = T.maxWidth || 0, re = Object.assign({ autoencode: !0, noBOM: !0 }, T.flags);
    var gr = [];
    if (Object.prototype.toString.call(s) === "[object Array]") {
      var gn;
      yt = Hi(s), Dt !== "left" && (Fn = yt.map(function(be) {
        return Be.getStringUnitWidth(be, { font: Eo, charSpace: Kt, fontSize: xt, doKerning: !1 }) * xt / nr;
      }));
      var In, mr = 0;
      if (Dt === "right") {
        v -= Fn[0], s = [], nn = yt.length;
        for (var Gn = 0; Gn < nn; Gn++) Gn === 0 ? (In = er(v), gn = fr(C)) : (In = P(mr - Fn[Gn]), gn = -Xi), s.push([yt[Gn], In, gn]), mr = Fn[Gn];
      } else if (Dt === "center") {
        v -= Fn[0] / 2, s = [], nn = yt.length;
        for (var rr = 0; rr < nn; rr++) rr === 0 ? (In = er(v), gn = fr(C)) : (In = P((mr - Fn[rr]) / 2), gn = -Xi), s.push([yt[rr], In, gn]), mr = Fn[rr];
      } else if (Dt === "left") {
        s = [], nn = yt.length;
        for (var fi = 0; fi < nn; fi++) s.push(yt[fi]);
      } else {
        if (Dt !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        s = [], nn = yt.length, Qt = Qt !== 0 ? Qt : Mo;
        for (var Cn = 0; Cn < nn; Cn++) gn = Cn === 0 ? fr(C) : -Xi, In = Cn === 0 ? er(v) : 0, Cn < nn - 1 ? gr.push(tt(P((Qt - Fn[Cn]) / (yt[Cn].split(" ").length - 1)))) : gr.push(0), s.push([yt[Cn], In, gn]);
      }
    }
    var di = typeof T.R2L == "boolean" ? T.R2L : qt;
    di === !0 && (s = Wi(s, function(be, we, Fe) {
      return [be.split("").reverse().join(""), we, Fe];
    })), st = { text: s, x: v, y: C, options: T, mutex: { pdfEscape: en, activeFontKey: ee, fonts: ge, activeFontSize: xt } }, ce.publish("postProcessText", st), s = st.text, kn = st.mutex.isHex || !1;
    var Ki = ge[ee].encoding;
    Ki !== "WinAnsiEncoding" && Ki !== "StandardEncoding" || (s = Wi(s, function(be, we, Fe) {
      return [ka(be), we, Fe];
    })), yt = Hi(s), s = [];
    for (var vr, jn, ir, Rr = 0, pi = 1, Tr = Array.isArray(yt[0]) ? pi : Rr, br = "", Zi = function(be, we, Fe) {
      var De = "";
      return Fe instanceof Tt ? (Fe = typeof T.angle == "number" ? Nn(Fe, new Tt(1, 0, 0, 1, be, we)) : Nn(new Tt(1, 0, 0, 1, be, we), Fe), X === B.ADVANCED && (Fe = Nn(new Tt(1, 0, 0, -1, 0, 0), Fe)), De = Fe.join(" ") + ` Tm
`) : De = tt(be) + " " + tt(we) + ` Td
`, De;
    }, mn = 0; mn < yt.length; mn++) {
      switch (br = "", Tr) {
        case pi:
          ir = (kn ? "<" : "(") + yt[mn][0] + (kn ? ">" : ")"), vr = parseFloat(yt[mn][1]), jn = parseFloat(yt[mn][2]);
          break;
        case Rr:
          ir = (kn ? "<" : "(") + yt[mn] + (kn ? ">" : ")"), vr = er(v), jn = fr(C);
      }
      gr !== void 0 && gr[mn] !== void 0 && (br = gr[mn] + ` Tw
`), mn === 0 ? s.push(br + Zi(vr, jn, Se) + ir) : Tr === Rr ? s.push(br + ir) : Tr === pi && s.push(br + Zi(vr, jn, Se) + ir);
    }
    s = Tr === Rr ? s.join(` Tj
T* `) : s.join(` Tj
`), s += ` Tj
`;
    var ar = `BT
/`;
    return ar += ee + " " + xt + ` Tf
`, ar += tt(xt * ln) + ` TL
`, ar += qr + `
`, ar += Re, ar += s, E(ar += "ET"), S[ee] = !0, Be;
  };
  var So = p.__private__.clip = p.clip = function(s) {
    return E(s === "evenodd" ? "W*" : "W"), this;
  };
  p.clipEvenOdd = function() {
    return So("evenodd");
  }, p.__private__.discardPath = p.discardPath = function() {
    return E("n"), this;
  };
  var Vn = p.__private__.isValidStyle = function(s) {
    var v = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(s) !== -1 && (v = !0), v;
  };
  p.__private__.setDefaultPathOperation = p.setDefaultPathOperation = function(s) {
    return Vn(s) && (g = s), this;
  };
  var ya = p.__private__.getStyle = p.getStyle = function(s) {
    var v = g;
    switch (s) {
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
        v = s;
    }
    return v;
  }, La = p.close = function() {
    return E("h"), this;
  };
  p.stroke = function() {
    return E("S"), this;
  }, p.fill = function(s) {
    return ni("f", s), this;
  }, p.fillEvenOdd = function(s) {
    return ni("f*", s), this;
  }, p.fillStroke = function(s) {
    return ni("B", s), this;
  }, p.fillStrokeEvenOdd = function(s) {
    return ni("B*", s), this;
  };
  var ni = function(s, v) {
    fe(v) === "object" ? Po(v, s) : E(s);
  }, Oi = function(s) {
    s === null || X === B.ADVANCED && s === void 0 || (s = ya(s), E(s));
  };
  function _o(s, v, C, T, J) {
    var st = new xi(v || this.boundingBox, C || this.xStep, T || this.yStep, this.gState, J || this.matrix);
    st.stream = this.stream;
    var yt = s + "$$" + this.cloneIndex++ + "$$";
    return tn(yt, st), st;
  }
  var Po = function(s, v) {
    var C = jr[s.key], T = ue[C];
    if (T instanceof Hr) E("q"), E(ko(v)), T.gState && p.setGState(T.gState), E(s.matrix.toString() + " cm"), E("/" + C + " sh"), E("Q");
    else if (T instanceof xi) {
      var J = new Tt(1, 0, 0, -1, 0, pr());
      s.matrix && (J = J.multiply(s.matrix || Un), C = _o.call(T, s.key, s.boundingBox, s.xStep, s.yStep, J).id), E("q"), E("/Pattern cs"), E("/" + C + " scn"), T.gState && p.setGState(T.gState), E(v), E("Q");
    }
  }, ko = function(s) {
    switch (s) {
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
  }, Bi = p.moveTo = function(s, v) {
    return E(tt(P(s)) + " " + tt(D(v)) + " m"), this;
  }, Mr = p.lineTo = function(s, v) {
    return E(tt(P(s)) + " " + tt(D(v)) + " l"), this;
  }, hr = p.curveTo = function(s, v, C, T, J, st) {
    return E([tt(P(s)), tt(D(v)), tt(P(C)), tt(D(T)), tt(P(J)), tt(D(st)), "c"].join(" ")), this;
  };
  p.__private__.line = p.line = function(s, v, C, T, J) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || !Vn(J)) throw new Error("Invalid arguments passed to jsPDF.line");
    return X === B.COMPAT ? this.lines([[C - s, T - v]], s, v, [1, 1], J || "S") : this.lines([[C - s, T - v]], s, v, [1, 1]).stroke();
  }, p.__private__.lines = p.lines = function(s, v, C, T, J, st) {
    var yt, jt, Dt, Kt, Qt, re, Ne, Se, Be, Ye, Re, kn;
    if (typeof s == "number" && (kn = C, C = v, v = s, s = kn), T = T || [1, 1], st = st || !1, isNaN(v) || isNaN(C) || !Array.isArray(s) || !Array.isArray(T) || !Vn(J) || typeof st != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (Bi(v, C), yt = T[0], jt = T[1], Kt = s.length, Ye = v, Re = C, Dt = 0; Dt < Kt; Dt++) (Qt = s[Dt]).length === 2 ? (Ye = Qt[0] * yt + Ye, Re = Qt[1] * jt + Re, Mr(Ye, Re)) : (re = Qt[0] * yt + Ye, Ne = Qt[1] * jt + Re, Se = Qt[2] * yt + Ye, Be = Qt[3] * jt + Re, Ye = Qt[4] * yt + Ye, Re = Qt[5] * jt + Re, hr(re, Ne, Se, Be, Ye, Re));
    return st && La(), Oi(J), this;
  }, p.path = function(s) {
    for (var v = 0; v < s.length; v++) {
      var C = s[v], T = C.c;
      switch (C.op) {
        case "m":
          Bi(T[0], T[1]);
          break;
        case "l":
          Mr(T[0], T[1]);
          break;
        case "c":
          hr.apply(this, T);
          break;
        case "h":
          La();
      }
    }
    return this;
  }, p.__private__.rect = p.rect = function(s, v, C, T, J) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || !Vn(J)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return X === B.COMPAT && (T = -T), E([tt(P(s)), tt(D(v)), tt(P(C)), tt(P(T)), "re"].join(" ")), Oi(J), this;
  }, p.__private__.triangle = p.triangle = function(s, v, C, T, J, st, yt) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || isNaN(J) || isNaN(st) || !Vn(yt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[C - s, T - v], [J - C, st - T], [s - J, v - st]], s, v, [1, 1], yt, !0), this;
  }, p.__private__.roundedRect = p.roundedRect = function(s, v, C, T, J, st, yt) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || isNaN(J) || isNaN(st) || !Vn(yt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var jt = 4 / 3 * (Math.SQRT2 - 1);
    return J = Math.min(J, 0.5 * C), st = Math.min(st, 0.5 * T), this.lines([[C - 2 * J, 0], [J * jt, 0, J, st - st * jt, J, st], [0, T - 2 * st], [0, st * jt, -J * jt, st, -J, st], [2 * J - C, 0], [-J * jt, 0, -J, -st * jt, -J, -st], [0, 2 * st - T], [0, -st * jt, J * jt, -st, J, -st]], s + J, v, [1, 1], yt, !0), this;
  }, p.__private__.ellipse = p.ellipse = function(s, v, C, T, J) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || isNaN(T) || !Vn(J)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var st = 4 / 3 * (Math.SQRT2 - 1) * C, yt = 4 / 3 * (Math.SQRT2 - 1) * T;
    return Bi(s + C, v), hr(s + C, v - yt, s + st, v - T, s, v - T), hr(s - st, v - T, s - C, v - yt, s - C, v), hr(s - C, v + yt, s - st, v + T, s, v + T), hr(s + st, v + T, s + C, v + yt, s + C, v), Oi(J), this;
  }, p.__private__.circle = p.circle = function(s, v, C, T) {
    if (isNaN(s) || isNaN(v) || isNaN(C) || !Vn(T)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(s, v, C, C, T);
  }, p.setFont = function(s, v, C) {
    return C && (v = wt(v, C)), ee = va(s, v, { disableWarning: !1 }), this;
  };
  var Fo = p.__private__.getFont = p.getFont = function() {
    return ge[va.apply(p, arguments)];
  };
  p.__private__.getFontList = p.getFontList = function() {
    var s, v, C = {};
    for (s in Le) if (Le.hasOwnProperty(s)) for (v in C[s] = [], Le[s]) Le[s].hasOwnProperty(v) && C[s].push(v);
    return C;
  }, p.addFont = function(s, v, C, T, J) {
    var st = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && st.indexOf(arguments[3]) !== -1 ? J = arguments[3] : arguments[3] && st.indexOf(arguments[3]) == -1 && (C = wt(C, T)), J = J || "Identity-H", Ii.call(this, s, v, C, J);
  };
  var Er, Mi = r.lineWidth || 0.200025, ri = p.__private__.getLineWidth = p.getLineWidth = function() {
    return Mi;
  }, Na = p.__private__.setLineWidth = p.setLineWidth = function(s) {
    return Mi = s, E(tt(P(s)) + " w"), this;
  };
  p.__private__.setLineDash = Ut.API.setLineDash = Ut.API.setLineDashPattern = function(s, v) {
    if (s = s || [], v = v || 0, isNaN(v) || !Array.isArray(s)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return s = s.map(function(C) {
      return tt(P(C));
    }).join(" "), v = tt(P(v)), E("[" + s + "] " + v + " d"), this;
  };
  var Aa = p.__private__.getLineHeight = p.getLineHeight = function() {
    return xt * Er;
  };
  p.__private__.getLineHeight = p.getLineHeight = function() {
    return xt * Er;
  };
  var xa = p.__private__.setLineHeightFactor = p.setLineHeightFactor = function(s) {
    return typeof (s = s || 1.15) == "number" && (Er = s), this;
  }, Sa = p.__private__.getLineHeightFactor = p.getLineHeightFactor = function() {
    return Er;
  };
  xa(r.lineHeight);
  var er = p.__private__.getHorizontalCoordinate = function(s) {
    return P(s);
  }, fr = p.__private__.getVerticalCoordinate = function(s) {
    return X === B.ADVANCED ? s : Yt[j].mediaBox.topRightY - Yt[j].mediaBox.bottomLeftY - P(s);
  }, Io = p.__private__.getHorizontalCoordinateString = p.getHorizontalCoordinateString = function(s) {
    return tt(er(s));
  }, dr = p.__private__.getVerticalCoordinateString = p.getVerticalCoordinateString = function(s) {
    return tt(fr(s));
  }, Pn = r.strokeColor || "0 G";
  p.__private__.getStrokeColor = p.getDrawColor = function() {
    return xn(Pn);
  }, p.__private__.setStrokeColor = p.setDrawColor = function(s, v, C, T) {
    return Pn = Sn({ ch1: s, ch2: v, ch3: C, ch4: T, pdfColorType: "draw", precision: 2 }), E(Pn), this;
  };
  var Ei = r.fillColor || "0 g";
  p.__private__.getFillColor = p.getFillColor = function() {
    return xn(Ei);
  }, p.__private__.setFillColor = p.setFillColor = function(s, v, C, T) {
    return Ei = Sn({ ch1: s, ch2: v, ch3: C, ch4: T, pdfColorType: "fill", precision: 2 }), E(Ei), this;
  };
  var qr = r.textColor || "0 g", Co = p.__private__.getTextColor = p.getTextColor = function() {
    return xn(qr);
  };
  p.__private__.setTextColor = p.setTextColor = function(s, v, C, T) {
    return qr = Sn({ ch1: s, ch2: v, ch3: C, ch4: T, pdfColorType: "text", precision: 3 }), this;
  };
  var ii = r.charSpace, jo = p.__private__.getCharSpace = p.getCharSpace = function() {
    return parseFloat(ii || 0);
  };
  p.__private__.setCharSpace = p.setCharSpace = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return ii = s, this;
  };
  var qi = 0;
  p.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, p.__private__.setLineCap = p.setLineCap = function(s) {
    var v = p.CapJoinStyles[s];
    if (v === void 0) throw new Error("Line cap style of '" + s + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return qi = v, E(v + " J"), this;
  };
  var Di = 0;
  p.__private__.setLineJoin = p.setLineJoin = function(s) {
    var v = p.CapJoinStyles[s];
    if (v === void 0) throw new Error("Line join style of '" + s + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Di = v, E(v + " j"), this;
  }, p.__private__.setLineMiterLimit = p.__private__.setMiterLimit = p.setLineMiterLimit = p.setMiterLimit = function(s) {
    if (s = s || 0, isNaN(s)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return E(tt(P(s)) + " M"), this;
  }, p.GState = io, p.setGState = function(s) {
    (s = typeof s == "string" ? Ae[Ln[s]] : _a(null, s)).equals($n) || (E("/" + s.id + " gs"), $n = s);
  };
  var _a = function(s, v) {
    if (!s || !Ln[s]) {
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
      return s && (Ln[s] = v.id), ce.publish("addGState", v), v;
    }
  };
  p.addGState = function(s, v) {
    return _a(s, v), this;
  }, p.saveGraphicsState = function() {
    return E("q"), Rn.push({ key: ee, size: xt, color: qr }), this;
  }, p.restoreGraphicsState = function() {
    E("Q");
    var s = Rn.pop();
    return ee = s.key, xt = s.size, qr = s.color, $n = null, this;
  }, p.setCurrentTransformationMatrix = function(s) {
    return E(s.toString() + " cm"), this;
  }, p.comment = function(s) {
    return E("#" + s), this;
  };
  var ai = function(s, v) {
    var C = s || 0;
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
  }, Ri = function(s, v, C, T) {
    ai.call(this, s, v), this.type = "rect";
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
  }, Ti = function() {
    this.page = xe, this.currentPage = j, this.pages = Nt.slice(0), this.pagesContext = Yt.slice(0), this.x = Ve, this.y = oe, this.matrix = yn, this.width = Dr(j), this.height = pr(j), this.outputDestination = Bt, this.id = "", this.objectNumber = -1;
  };
  Ti.prototype.restore = function() {
    xe = this.page, j = this.currentPage, Yt = this.pagesContext, Nt = this.pages, Ve = this.x, oe = this.y, yn = this.matrix, zi(j, this.width), Ui(j, this.height), Bt = this.outputDestination;
  };
  var Pa = function(s, v, C, T, J) {
    zn.push(new Ti()), xe = j = 0, Nt = [], Ve = s, oe = v, yn = J, Ci([C, T]);
  }, Oo = function(s) {
    if (Tn[s]) zn.pop().restore();
    else {
      var v = new Ti(), C = "Xo" + (Object.keys(He).length + 1).toString(10);
      v.id = C, Tn[s] = C, He[C] = v, ce.publish("addFormObject", v), zn.pop().restore();
    }
  };
  for (var oi in p.beginFormObject = function(s, v, C, T, J) {
    return Pa(s, v, C, T, J), this;
  }, p.endFormObject = function(s) {
    return Oo(s), this;
  }, p.doFormObject = function(s, v) {
    var C = He[Tn[s]];
    return E("q"), E(v.toString() + " cm"), E("/" + C.id + " Do"), E("Q"), this;
  }, p.getFormObject = function(s) {
    var v = He[Tn[s]];
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix };
  }, p.save = function(s, v) {
    return s = s || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || !1, v.returnPromise === !1 ? (Ur(ti(tr()), s), typeof Ur.unload == "function" && Ht.setTimeout && setTimeout(Ur.unload, 911), this) : new Promise(function(C, T) {
      try {
        var J = Ur(ti(tr()), s);
        typeof Ur.unload == "function" && Ht.setTimeout && setTimeout(Ur.unload, 911), C(J);
      } catch (st) {
        T(st.message);
      }
    });
  }, Ut.API) Ut.API.hasOwnProperty(oi) && (oi === "events" && Ut.API.events.length ? function(s, v) {
    var C, T, J;
    for (J = v.length - 1; J !== -1; J--) C = v[J][0], T = v[J][1], s.subscribe.apply(s, [C].concat(typeof T == "function" ? [T] : T));
  }(ce, Ut.API.events) : p[oi] = Ut.API[oi]);
  var Dr = p.getPageWidth = function(s) {
    return (Yt[s = s || j].mediaBox.topRightX - Yt[s].mediaBox.bottomLeftX) / It;
  }, zi = p.setPageWidth = function(s, v) {
    Yt[s].mediaBox.topRightX = v * It + Yt[s].mediaBox.bottomLeftX;
  }, pr = p.getPageHeight = function(s) {
    return (Yt[s = s || j].mediaBox.topRightY - Yt[s].mediaBox.bottomLeftY) / It;
  }, Ui = p.setPageHeight = function(s, v) {
    Yt[s].mediaBox.topRightY = v * It + Yt[s].mediaBox.bottomLeftY;
  };
  return p.internal = { pdfEscape: en, getStyle: ya, getFont: Fo, getFontSize: Pt, getCharSpace: jo, getTextColor: Co, getLineHeight: Aa, getLineHeightFactor: Sa, getLineWidth: ri, write: Xt, getHorizontalCoordinate: er, getVerticalCoordinate: fr, getCoordinateString: Io, getVerticalCoordinateString: dr, collections: {}, newObject: qe, newAdditionalObject: Gr, newObjectDeferred: Oe, newObjectDeferredBegin: cn, getFilters: Hn, putStream: pn, events: ce, scaleFactor: It, pageSize: { getWidth: function() {
    return Dr(j);
  }, setWidth: function(s) {
    zi(j, s);
  }, getHeight: function() {
    return pr(j);
  }, setHeight: function(s) {
    Ui(j, s);
  } }, encryptionOptions: b, encryption: Ge, getEncryptor: Ao, output: ei, getNumberOfPages: bo, pages: Nt, out: E, f2: dt, f3: F, getPageInfo: wa, getPageInfoByObjId: Vt, getCurrentPageInfo: xo, getPDFVersion: I, Point: ai, Rectangle: Ri, Matrix: Tt, hasHotfix: ba }, Object.defineProperty(p.internal.pageSize, "width", { get: function() {
    return Dr(j);
  }, set: function(s) {
    zi(j, s);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(p.internal.pageSize, "height", { get: function() {
    return pr(j);
  }, set: function(s) {
    Ui(j, s);
  }, enumerable: !0, configurable: !0 }), mo.call(p, Lt), ee = "F1", ga(u, n), ce.publish("initialized"), p;
}
Ni.prototype.lsbFirstWord = function(r) {
  return String.fromCharCode(r >> 0 & 255, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255);
}, Ni.prototype.toHexString = function(r) {
  return r.split("").map(function(e) {
    return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, Ni.prototype.hexToBytes = function(r) {
  for (var e = [], n = 0; n < r.length; n += 2) e.push(String.fromCharCode(parseInt(r.substr(n, 2), 16)));
  return e.join("");
}, Ni.prototype.processOwnerPassword = function(r, e) {
  return vs(ms(e).substr(0, 5), r);
}, Ni.prototype.encryptor = function(r, e) {
  var n = ms(this.encryptionKey + String.fromCharCode(255 & r, r >> 8 & 255, r >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
  return function(a) {
    return vs(n, a);
  };
}, io.prototype.equals = function(r) {
  var e, n = "id,objectNumber,equals";
  if (!r || fe(r) !== fe(this)) return !1;
  var a = 0;
  for (e in this) if (!(n.indexOf(e) >= 0)) {
    if (this.hasOwnProperty(e) && !r.hasOwnProperty(e) || this[e] !== r[e]) return !1;
    a++;
  }
  for (e in r) r.hasOwnProperty(e) && n.indexOf(e) < 0 && a--;
  return a === 0;
}, Ut.API = { events: [] }, Ut.version = "2.5.1";
var Pe = Ut.API, Ns = 1, Vr = function(r) {
  return r.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, yi = function(r) {
  return r.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, Jt = function(r) {
  return r.toFixed(2);
}, kr = function(r) {
  return r.toFixed(5);
};
Pe.__acroform__ = {};
var un = function(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r;
}, hu = function(r) {
  return r * Ns;
}, Jn = function(r) {
  var e = new Ou(), n = Mt.internal.getHeight(r) || 0, a = Mt.internal.getWidth(r) || 0;
  return e.BBox = [0, 0, Number(Jt(a)), Number(Jt(n))], e;
}, Xc = Pe.__acroform__.setBit = function(r, e) {
  if (r = r || 0, e = e || 0, isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return r |= 1 << e;
}, Kc = Pe.__acroform__.clearBit = function(r, e) {
  if (r = r || 0, e = e || 0, isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return r &= ~(1 << e);
}, Zc = Pe.__acroform__.getBit = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return r & 1 << e ? 1 : 0;
}, Ie = Pe.__acroform__.getBitForPdf = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return Zc(r, e - 1);
}, Ce = Pe.__acroform__.setBitForPdf = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return Xc(r, e - 1);
}, je = Pe.__acroform__.clearBitForPdf = function(r, e) {
  if (isNaN(r) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return Kc(r, e - 1);
}, $c = Pe.__acroform__.calculateCoordinates = function(r, e) {
  var n = e.internal.getHorizontalCoordinate, a = e.internal.getVerticalCoordinate, u = r[0], o = r[1], l = r[2], h = r[3], f = {};
  return f.lowerLeft_X = n(u) || 0, f.lowerLeft_Y = a(o + h) || 0, f.upperRight_X = n(u + l) || 0, f.upperRight_Y = a(o) || 0, [Number(Jt(f.lowerLeft_X)), Number(Jt(f.lowerLeft_Y)), Number(Jt(f.upperRight_X)), Number(Jt(f.upperRight_Y))];
}, Qc = function(r) {
  if (r.appearanceStreamContent) return r.appearanceStreamContent;
  if (r.V || r.DV) {
    var e = [], n = r._V || r.DV, a = bs(r, n), u = r.scope.internal.getFont(r.fontName, r.fontStyle).id;
    e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(r.scope.__private__.encodeColorString(r.color)), e.push("/" + u + " " + Jt(a.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC");
    var o = Jn(r);
    return o.scope = r.scope, o.stream = e.join(`
`), o;
  }
}, bs = function(r, e) {
  var n = r.fontSize === 0 ? r.maxFontSize : r.fontSize, a = { text: "", fontSize: "" }, u = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
  u = r.multiline ? u.map(function(F) {
    return F.split(`
`);
  }) : u.map(function(F) {
    return [F];
  });
  var o = n, l = Mt.internal.getHeight(r) || 0;
  l = l < 0 ? -l : l;
  var h = Mt.internal.getWidth(r) || 0;
  h = h < 0 ? -h : h;
  var f = function(F, P, z) {
    if (F + 1 < u.length) {
      var D = P + " " + u[F + 1][0];
      return Za(D, r, z).width <= h - 4;
    }
    return !1;
  };
  o++;
  t: for (; o > 0; ) {
    e = "", o--;
    var g, b, A = Za("3", r, o).height, S = r.multiline ? l - o : (l - A) / 2, p = S += 2, O = 0, I = 0, q = 0;
    if (o <= 0) {
      e = `(...) Tj
`, e += "% Width of Text: " + Za(e, r, o = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var _ = "", B = 0, X = 0; X < u.length; X++) if (u.hasOwnProperty(X)) {
      var ot = !1;
      if (u[X].length !== 1 && q !== u[X].length - 1) {
        if ((A + 2) * (B + 2) + 2 > l) continue t;
        _ += u[X][q], ot = !0, I = X, X--;
      } else {
        _ = (_ += u[X][q] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
        var ct = parseInt(X), wt = f(ct, _, o), tt = X >= u.length - 1;
        if (wt && !tt) {
          _ += " ", q = 0;
          continue;
        }
        if (wt || tt) {
          if (tt) I = ct;
          else if (r.multiline && (A + 2) * (B + 2) + 2 > l) continue t;
        } else {
          if (!r.multiline || (A + 2) * (B + 2) + 2 > l) continue t;
          I = ct;
        }
      }
      for (var R = "", gt = O; gt <= I; gt++) {
        var dt = u[gt];
        if (r.multiline) {
          if (gt === I) {
            R += dt[q] + " ", q = (q + 1) % dt.length;
            continue;
          }
          if (gt === O) {
            R += dt[dt.length - 1] + " ";
            continue;
          }
        }
        R += dt[0] + " ";
      }
      switch (R = R.substr(R.length - 1) == " " ? R.substr(0, R.length - 1) : R, b = Za(R, r, o).width, r.textAlign) {
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
      e += Jt(g) + " " + Jt(p) + ` Td
`, e += "(" + Vr(R) + `) Tj
`, e += -Jt(g) + ` 0 Td
`, p = -(o + 2), b = 0, O = ot ? I : I + 1, B++, _ = "";
    }
    break;
  }
  return a.text = e, a.fontSize = o, a;
}, Za = function(r, e, n) {
  var a = e.scope.internal.getFont(e.fontName, e.fontStyle), u = e.scope.getStringUnitWidth(r, { font: a, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n);
  return { height: e.scope.getStringUnitWidth("3", { font: a, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n) * 1.5, width: u };
}, t1 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, e1 = function(r, e) {
  var n = { type: "reference", object: r };
  e.internal.getPageInfo(r.page).pageContext.annotations.find(function(a) {
    return a.type === n.type && a.object === n.object;
  }) === void 0 && e.internal.getPageInfo(r.page).pageContext.annotations.push(n);
}, n1 = function(r, e) {
  for (var n in r) if (r.hasOwnProperty(n)) {
    var a = n, u = r[n];
    e.internal.newObjectDeferredBegin(u.objId, !0), fe(u) === "object" && typeof u.putStream == "function" && u.putStream(), delete r[a];
  }
}, r1 = function(r, e) {
  if (e.scope = r, r.internal !== void 0 && (r.internal.acroformPlugin === void 0 || r.internal.acroformPlugin.isInitialized === !1)) {
    if (qn.FieldNum = 0, r.internal.acroformPlugin = JSON.parse(JSON.stringify(t1)), r.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Ns = r.internal.scaleFactor, r.internal.acroformPlugin.acroFormDictionaryRoot = new Bu(), r.internal.acroformPlugin.acroFormDictionaryRoot.scope = r, r.internal.acroformPlugin.acroFormDictionaryRoot._eventID = r.internal.events.subscribe("postPutResources", function() {
      (function(n) {
        n.internal.events.unsubscribe(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID, n.internal.acroformPlugin.printedOut = !0;
      })(r);
    }), r.internal.events.subscribe("buildDocument", function() {
      (function(n) {
        n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var a = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var u in a) if (a.hasOwnProperty(u)) {
          var o = a[u];
          o.objId = void 0, o.hasAnnotation && e1(o, n);
        }
      })(r);
    }), r.internal.events.subscribe("putCatalog", function() {
      (function(n) {
        if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        n.internal.write("/AcroForm " + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(r);
    }), r.internal.events.subscribe("postPutPages", function(n) {
      (function(a, u) {
        var o = !a;
        for (var l in a || (u.internal.newObjectDeferredBegin(u.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), u.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), a = a || u.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (a.hasOwnProperty(l)) {
          var h = a[l], f = [], g = h.Rect;
          if (h.Rect && (h.Rect = $c(h.Rect, u)), u.internal.newObjectDeferredBegin(h.objId, !0), h.DA = Mt.createDefaultAppearanceStream(h), fe(h) === "object" && typeof h.getKeyValueListForStream == "function" && (f = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var b = Qc(h);
            f.push({ key: "AP", value: "<</N " + b + ">>" }), u.internal.acroformPlugin.xForms.push(b);
          }
          if (h.appearanceStreamContent) {
            var A = "";
            for (var S in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(S)) {
              var p = h.appearanceStreamContent[S];
              if (A += "/" + S + " ", A += "<<", Object.keys(p).length >= 1 || Array.isArray(p)) {
                for (var l in p) if (p.hasOwnProperty(l)) {
                  var O = p[l];
                  typeof O == "function" && (O = O.call(u, h)), A += "/" + l + " " + O + " ", u.internal.acroformPlugin.xForms.indexOf(O) >= 0 || u.internal.acroformPlugin.xForms.push(O);
                }
              } else typeof (O = p) == "function" && (O = O.call(u, h)), A += "/" + l + " " + O, u.internal.acroformPlugin.xForms.indexOf(O) >= 0 || u.internal.acroformPlugin.xForms.push(O);
              A += ">>";
            }
            f.push({ key: "AP", value: `<<
` + A + ">>" });
          }
          u.internal.putStream({ additionalKeyValues: f, objectId: h.objId }), u.internal.out("endobj");
        }
        o && n1(u.internal.acroformPlugin.xForms, u);
      })(n, r);
    }), r.internal.acroformPlugin.isInitialized = !0;
  }
}, ju = Pe.__acroform__.arrayToPdfArray = function(r, e, n) {
  var a = function(l) {
    return l;
  };
  if (Array.isArray(r)) {
    for (var u = "[", o = 0; o < r.length; o++) switch (o !== 0 && (u += " "), fe(r[o])) {
      case "boolean":
      case "number":
      case "object":
        u += r[o].toString();
        break;
      case "string":
        r[o].substr(0, 1) !== "/" ? (e !== void 0 && n && (a = n.internal.getEncryptor(e)), u += "(" + Vr(a(r[o].toString())) + ")") : u += r[o].toString();
    }
    return u += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, os = function(r, e, n) {
  var a = function(u) {
    return u;
  };
  return e !== void 0 && n && (a = n.internal.getEncryptor(e)), (r = r || "").toString(), r = "(" + Vr(a(r)) + ")";
}, Xn = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(r) {
    this._objId = r;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
Xn.prototype.toString = function() {
  return this.objId + " 0 R";
}, Xn.prototype.putStream = function() {
  var r = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: r, objectId: this.objId }), this.scope.internal.out("endobj");
}, Xn.prototype.getKeyValueListForStream = function() {
  var r = [], e = Object.getOwnPropertyNames(this).filter(function(o) {
    return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
  });
  for (var n in e) if (Object.getOwnPropertyDescriptor(this, e[n]).configurable === !1) {
    var a = e[n], u = this[a];
    u && (Array.isArray(u) ? r.push({ key: a, value: ju(u, this.objId, this.scope) }) : u instanceof Xn ? (u.scope = this.scope, r.push({ key: a, value: u.objId + " 0 R" })) : typeof u != "function" && r.push({ key: a, value: u }));
  }
  return r;
};
var Ou = function() {
  Xn.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var r, e = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return e;
  }, set: function(n) {
    e = n;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(n) {
    r = n.trim();
  }, get: function() {
    return r || null;
  } });
};
un(Ou, Xn);
var Bu = function() {
  Xn.call(this);
  var r, e = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return e.length > 0 ? e : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return e;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (r) {
      var n = function(a) {
        return a;
      };
      return this.scope && (n = this.scope.internal.getEncryptor(this.objId)), "(" + Vr(n(r)) + ")";
    }
  }, set: function(n) {
    r = n;
  } });
};
un(Bu, Xn);
var qn = function r() {
  Xn.call(this);
  var e = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
    e = _;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(e, 3);
  }, set: function(_) {
    _ ? this.F = Ce(e, 3) : this.F = je(e, 3);
  } });
  var n = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(_) {
    if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
    n = _;
  } });
  var a = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (a.length !== 0) return a;
  }, set: function(_) {
    a = _ !== void 0 ? _ : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[0]) ? 0 : a[0];
  }, set: function(_) {
    a[0] = _;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[1]) ? 0 : a[1];
  }, set: function(_) {
    a[1] = _;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[2]) ? 0 : a[2];
  }, set: function(_) {
    a[2] = _;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[3]) ? 0 : a[3];
  }, set: function(_) {
    a[3] = _;
  } });
  var u = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return u;
  }, set: function(_) {
    switch (_) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        u = _;
        break;
      default:
        throw new Error('Invalid value "' + _ + '" for attribute FT supplied.');
    }
  } });
  var o = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!o || o.length < 1) {
      if (this instanceof ao) return;
      o = "FieldObject" + r.FieldNum++;
    }
    var _ = function(B) {
      return B;
    };
    return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), "(" + Vr(_(o)) + ")";
  }, set: function(_) {
    o = _.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return o;
  }, set: function(_) {
    o = _;
  } });
  var l = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return l;
  }, set: function(_) {
    l = _;
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
    return g === void 0 ? 50 / Ns : g;
  }, set: function(_) {
    g = _;
  } });
  var b = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return b;
  }, set: function(_) {
    b = _;
  } });
  var A = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!A || this instanceof ao || this instanceof Wr)) return os(A, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), A = _;
  } });
  var S = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (S) return this instanceof Ue ? S : os(S, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), S = this instanceof Ue ? _ : _.substr(0, 1) === "(" ? yi(_.substr(1, _.length - 2)) : yi(_);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Ue ? yi(S.substr(1, S.length - 1)) : S;
  }, set: function(_) {
    _ = _.toString(), S = this instanceof Ue ? "/" + _ : _;
  } });
  var p = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return p;
  }, set: function(_) {
    this.V = _;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (p) return this instanceof Ue ? p : os(p, this.objId, this.scope);
  }, set: function(_) {
    _ = _.toString(), p = this instanceof Ue ? _ : _.substr(0, 1) === "(" ? yi(_.substr(1, _.length - 2)) : yi(_);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Ue ? yi(p.substr(1, p.length - 1)) : p;
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
  var q = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (q !== null) return q;
  }, set: function(_) {
    if ([0, 1, 2].indexOf(_) === -1) throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
    q = _;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var _;
    switch (q) {
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
        q = 2;
        break;
      case "center":
      case 1:
        q = 1;
        break;
      case "left":
      case 0:
      default:
        q = 0;
    }
  } });
};
un(qn, Xn);
var Si = function() {
  qn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var r = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(n) {
    r = n;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return r;
  }, set: function(n) {
    r = n;
  } });
  var e = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return ju(e, this.objId, this.scope);
  }, set: function(n) {
    var a, u;
    u = [], typeof (a = n) == "string" && (u = function(o, l, h) {
      h || (h = 1);
      for (var f, g = []; f = l.exec(o); ) g.push(f[h]);
      return g;
    }(a, /\((.*?)\)/g)), e = u;
  } }), this.getOptions = function() {
    return e;
  }, this.setOptions = function(n) {
    e = n, this.sort && e.sort();
  }, this.addOption = function(n) {
    n = (n = n || "").toString(), e.push(n), this.sort && e.sort();
  }, this.removeOption = function(n, a) {
    for (a = a || !1, n = (n = n || "").toString(); e.indexOf(n) !== -1 && (e.splice(e.indexOf(n), 1), a !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 18);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 18) : this.Ff = je(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 19);
  }, set: function(n) {
    this.combo === !0 && (n ? this.Ff = Ce(this.Ff, 19) : this.Ff = je(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 20);
  }, set: function(n) {
    n ? (this.Ff = Ce(this.Ff, 20), e.sort()) : this.Ff = je(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 22);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 22) : this.Ff = je(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 23);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 27);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 27) : this.Ff = je(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
un(Si, qn);
var _i = function() {
  Si.call(this), this.fontName = "helvetica", this.combo = !1;
};
un(_i, Si);
var Pi = function() {
  _i.call(this), this.combo = !0;
};
un(Pi, _i);
var to = function() {
  Pi.call(this), this.edit = !0;
};
un(to, Pi);
var Ue = function() {
  qn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 15);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 15) : this.Ff = je(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 16);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 16) : this.Ff = je(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 17);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 17) : this.Ff = je(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 26);
  }, set: function(n) {
    n ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
  } });
  var r, e = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var n = function(o) {
      return o;
    };
    if (this.scope && (n = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
      var a, u = [];
      for (a in u.push("<<"), e) u.push("/" + a + " (" + Vr(n(e[a])) + ")");
      return u.push(">>"), u.join(`
`);
    }
  }, set: function(n) {
    fe(n) === "object" && (e = n);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return e.CA || "";
  }, set: function(n) {
    typeof n == "string" && (e.CA = n);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(n) {
    r = n;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return r.substr(1, r.length - 1);
  }, set: function(n) {
    r = "/" + n;
  } });
};
un(Ue, qn);
var eo = function() {
  Ue.call(this), this.pushButton = !0;
};
un(eo, Ue);
var ki = function() {
  Ue.call(this), this.radio = !0, this.pushButton = !1;
  var r = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(e) {
    r = e !== void 0 ? e : [];
  } });
};
un(ki, Ue);
var ao = function() {
  var r, e;
  qn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(u) {
    r = u;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return e;
  }, set: function(u) {
    e = u;
  } });
  var n, a = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var u = function(h) {
      return h;
    };
    this.scope && (u = this.scope.internal.getEncryptor(this.objId));
    var o, l = [];
    for (o in l.push("<<"), a) l.push("/" + o + " (" + Vr(u(a[o])) + ")");
    return l.push(">>"), l.join(`
`);
  }, set: function(u) {
    fe(u) === "object" && (a = u);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return a.CA || "";
  }, set: function(u) {
    typeof u == "string" && (a.CA = u);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(u) {
    n = u;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(u) {
    n = "/" + u;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Mt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
un(ao, qn), ki.prototype.setAppearance = function(r) {
  if (!("createAppearanceStream" in r) || !("getCA" in r)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
    var n = this.Kids[e];
    n.appearanceStreamContent = r.createAppearanceStream(n.optionName), n.caption = r.getCA();
  }
}, ki.prototype.createOption = function(r) {
  var e = new ao();
  return e.Parent = this, e.optionName = r, this.Kids.push(e), i1.call(this.scope, e), e;
};
var no = function() {
  Ue.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Mt.CheckBox.createAppearanceStream();
};
un(no, Ue);
var Wr = function() {
  qn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 13);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 13) : this.Ff = je(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 21);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 21) : this.Ff = je(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 23) : this.Ff = je(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 24);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 24) : this.Ff = je(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 25);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 25) : this.Ff = je(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = Ce(this.Ff, 26) : this.Ff = je(this.Ff, 26);
  } });
  var r = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(e) {
    r = e;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return r;
  }, set: function(e) {
    Number.isInteger(e) && (r = e);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
un(Wr, qn);
var ro = function() {
  Wr.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Ie(this.Ff, 14);
  }, set: function(r) {
    r ? this.Ff = Ce(this.Ff, 14) : this.Ff = je(this.Ff, 14);
  } }), this.password = !0;
};
un(ro, Wr);
var Mt = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Mt.CheckBox.YesNormal }, D: { On: Mt.CheckBox.YesPushDown, Off: Mt.CheckBox.OffPushDown } };
}, YesPushDown: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [], a = r.scope.internal.getFont(r.fontName, r.fontStyle).id, u = r.scope.__private__.encodeColorString(r.color), o = bs(r, r.caption);
  return n.push("0.749023 g"), n.push("0 0 " + Jt(Mt.internal.getWidth(r)) + " " + Jt(Mt.internal.getHeight(r)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + a + " " + Jt(o.fontSize) + " Tf " + u), n.push("BT"), n.push(o.text), n.push("ET"), n.push("Q"), n.push("EMC"), e.stream = n.join(`
`), e;
}, YesNormal: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = r.scope.internal.getFont(r.fontName, r.fontStyle).id, a = r.scope.__private__.encodeColorString(r.color), u = [], o = Mt.internal.getHeight(r), l = Mt.internal.getWidth(r), h = bs(r, r.caption);
  return u.push("1 g"), u.push("0 0 " + Jt(l) + " " + Jt(o) + " re"), u.push("f"), u.push("q"), u.push("0 0 1 rg"), u.push("0 0 " + Jt(l - 1) + " " + Jt(o - 1) + " re"), u.push("W"), u.push("n"), u.push("0 g"), u.push("BT"), u.push("/" + n + " " + Jt(h.fontSize) + " Tf " + a), u.push(h.text), u.push("ET"), u.push("Q"), e.stream = u.join(`
`), e;
}, OffPushDown: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [];
  return n.push("0.749023 g"), n.push("0 0 " + Jt(Mt.internal.getWidth(r)) + " " + Jt(Mt.internal.getHeight(r)) + " re"), n.push("f"), e.stream = n.join(`
`), e;
} }, RadioButton: { Circle: { createAppearanceStream: function(r) {
  var e = { D: { Off: Mt.RadioButton.Circle.OffPushDown }, N: {} };
  return e.N[r] = Mt.RadioButton.Circle.YesNormal, e.D[r] = Mt.RadioButton.Circle.YesPushDown, e;
}, getCA: function() {
  return "l";
}, YesNormal: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [], a = Mt.internal.getWidth(r) <= Mt.internal.getHeight(r) ? Mt.internal.getWidth(r) / 4 : Mt.internal.getHeight(r) / 4;
  a = Number((0.9 * a).toFixed(5));
  var u = Mt.internal.Bezier_C, o = Number((a * u).toFixed(5));
  return n.push("q"), n.push("1 0 0 1 " + kr(Mt.internal.getWidth(r) / 2) + " " + kr(Mt.internal.getHeight(r) / 2) + " cm"), n.push(a + " 0 m"), n.push(a + " " + o + " " + o + " " + a + " 0 " + a + " c"), n.push("-" + o + " " + a + " -" + a + " " + o + " -" + a + " 0 c"), n.push("-" + a + " -" + o + " -" + o + " -" + a + " 0 -" + a + " c"), n.push(o + " -" + a + " " + a + " -" + o + " " + a + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
}, YesPushDown: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [], a = Mt.internal.getWidth(r) <= Mt.internal.getHeight(r) ? Mt.internal.getWidth(r) / 4 : Mt.internal.getHeight(r) / 4;
  a = Number((0.9 * a).toFixed(5));
  var u = Number((2 * a).toFixed(5)), o = Number((u * Mt.internal.Bezier_C).toFixed(5)), l = Number((a * Mt.internal.Bezier_C).toFixed(5));
  return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + kr(Mt.internal.getWidth(r) / 2) + " " + kr(Mt.internal.getHeight(r) / 2) + " cm"), n.push(u + " 0 m"), n.push(u + " " + o + " " + o + " " + u + " 0 " + u + " c"), n.push("-" + o + " " + u + " -" + u + " " + o + " -" + u + " 0 c"), n.push("-" + u + " -" + o + " -" + o + " -" + u + " 0 -" + u + " c"), n.push(o + " -" + u + " " + u + " -" + o + " " + u + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + kr(Mt.internal.getWidth(r) / 2) + " " + kr(Mt.internal.getHeight(r) / 2) + " cm"), n.push(a + " 0 m"), n.push(a + " " + l + " " + l + " " + a + " 0 " + a + " c"), n.push("-" + l + " " + a + " -" + a + " " + l + " -" + a + " 0 c"), n.push("-" + a + " -" + l + " -" + l + " -" + a + " 0 -" + a + " c"), n.push(l + " -" + a + " " + a + " -" + l + " " + a + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
}, OffPushDown: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [], a = Mt.internal.getWidth(r) <= Mt.internal.getHeight(r) ? Mt.internal.getWidth(r) / 4 : Mt.internal.getHeight(r) / 4;
  a = Number((0.9 * a).toFixed(5));
  var u = Number((2 * a).toFixed(5)), o = Number((u * Mt.internal.Bezier_C).toFixed(5));
  return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + kr(Mt.internal.getWidth(r) / 2) + " " + kr(Mt.internal.getHeight(r) / 2) + " cm"), n.push(u + " 0 m"), n.push(u + " " + o + " " + o + " " + u + " 0 " + u + " c"), n.push("-" + o + " " + u + " -" + u + " " + o + " -" + u + " 0 c"), n.push("-" + u + " -" + o + " -" + o + " -" + u + " 0 -" + u + " c"), n.push(o + " -" + u + " " + u + " -" + o + " " + u + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join(`
`), e;
} }, Cross: { createAppearanceStream: function(r) {
  var e = { D: { Off: Mt.RadioButton.Cross.OffPushDown }, N: {} };
  return e.N[r] = Mt.RadioButton.Cross.YesNormal, e.D[r] = Mt.RadioButton.Cross.YesPushDown, e;
}, getCA: function() {
  return "8";
}, YesNormal: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [], a = Mt.internal.calculateCross(r);
  return n.push("q"), n.push("1 1 " + Jt(Mt.internal.getWidth(r) - 2) + " " + Jt(Mt.internal.getHeight(r) - 2) + " re"), n.push("W"), n.push("n"), n.push(Jt(a.x1.x) + " " + Jt(a.x1.y) + " m"), n.push(Jt(a.x2.x) + " " + Jt(a.x2.y) + " l"), n.push(Jt(a.x4.x) + " " + Jt(a.x4.y) + " m"), n.push(Jt(a.x3.x) + " " + Jt(a.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join(`
`), e;
}, YesPushDown: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = Mt.internal.calculateCross(r), a = [];
  return a.push("0.749023 g"), a.push("0 0 " + Jt(Mt.internal.getWidth(r)) + " " + Jt(Mt.internal.getHeight(r)) + " re"), a.push("f"), a.push("q"), a.push("1 1 " + Jt(Mt.internal.getWidth(r) - 2) + " " + Jt(Mt.internal.getHeight(r) - 2) + " re"), a.push("W"), a.push("n"), a.push(Jt(n.x1.x) + " " + Jt(n.x1.y) + " m"), a.push(Jt(n.x2.x) + " " + Jt(n.x2.y) + " l"), a.push(Jt(n.x4.x) + " " + Jt(n.x4.y) + " m"), a.push(Jt(n.x3.x) + " " + Jt(n.x3.y) + " l"), a.push("s"), a.push("Q"), e.stream = a.join(`
`), e;
}, OffPushDown: function(r) {
  var e = Jn(r);
  e.scope = r.scope;
  var n = [];
  return n.push("0.749023 g"), n.push("0 0 " + Jt(Mt.internal.getWidth(r)) + " " + Jt(Mt.internal.getHeight(r)) + " re"), n.push("f"), e.stream = n.join(`
`), e;
} } }, createDefaultAppearanceStream: function(r) {
  var e = r.scope.internal.getFont(r.fontName, r.fontStyle).id, n = r.scope.__private__.encodeColorString(r.color);
  return "/" + e + " " + r.fontSize + " Tf " + n;
} };
Mt.internal = { Bezier_C: 0.551915024494, calculateCross: function(r) {
  var e = Mt.internal.getWidth(r), n = Mt.internal.getHeight(r), a = Math.min(e, n);
  return { x1: { x: (e - a) / 2, y: (n - a) / 2 + a }, x2: { x: (e - a) / 2 + a, y: (n - a) / 2 }, x3: { x: (e - a) / 2, y: (n - a) / 2 }, x4: { x: (e - a) / 2 + a, y: (n - a) / 2 + a } };
} }, Mt.internal.getWidth = function(r) {
  var e = 0;
  return fe(r) === "object" && (e = hu(r.Rect[2])), e;
}, Mt.internal.getHeight = function(r) {
  var e = 0;
  return fe(r) === "object" && (e = hu(r.Rect[3])), e;
};
var i1 = Pe.addField = function(r) {
  if (r1(this, r), !(r instanceof qn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var e;
  return (e = r).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), r.page = r.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Pe.AcroFormChoiceField = Si, Pe.AcroFormListBox = _i, Pe.AcroFormComboBox = Pi, Pe.AcroFormEditBox = to, Pe.AcroFormButton = Ue, Pe.AcroFormPushButton = eo, Pe.AcroFormRadioButton = ki, Pe.AcroFormCheckBox = no, Pe.AcroFormTextField = Wr, Pe.AcroFormPasswordField = ro, Pe.AcroFormAppearance = Mt, Pe.AcroForm = { ChoiceField: Si, ListBox: _i, ComboBox: Pi, EditBox: to, Button: Ue, PushButton: eo, RadioButton: ki, CheckBox: no, TextField: Wr, PasswordField: ro, Appearance: Mt }, Ut.AcroForm = { ChoiceField: Si, ListBox: _i, ComboBox: Pi, EditBox: to, Button: Ue, PushButton: eo, RadioButton: ki, CheckBox: no, TextField: Wr, PasswordField: ro, Appearance: Mt };
function Mu(r) {
  return r.reduce(function(e, n, a) {
    return e[n] = a, e;
  }, {});
}
(function(r) {
  r.__addimage__ = {};
  var e = "UNKNOWN", n = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a = r.__addimage__.getImageFileTypeByImageData = function(F, P) {
    var z, D, at, nt, lt, $ = e;
    if ((P = P || e) === "RGBA" || F.data !== void 0 && F.data instanceof Uint8ClampedArray && "height" in F && "width" in F) return "RGBA";
    if (wt(F)) for (lt in n) for (at = n[lt], z = 0; z < at.length; z += 1) {
      for (nt = !0, D = 0; D < at[z].length; D += 1) if (at[z][D] !== void 0 && at[z][D] !== F[D]) {
        nt = !1;
        break;
      }
      if (nt === !0) {
        $ = lt;
        break;
      }
    }
    else for (lt in n) for (at = n[lt], z = 0; z < at.length; z += 1) {
      for (nt = !0, D = 0; D < at[z].length; D += 1) if (at[z][D] !== void 0 && at[z][D] !== F.charCodeAt(D)) {
        nt = !1;
        break;
      }
      if (nt === !0) {
        $ = lt;
        break;
      }
    }
    return $ === e && P !== e && ($ = P), $;
  }, u = function F(P) {
    for (var z = this.internal.write, D = this.internal.putStream, at = (0, this.internal.getFilters)(); at.indexOf("FlateEncode") !== -1; ) at.splice(at.indexOf("FlateEncode"), 1);
    P.objectId = this.internal.newObject();
    var nt = [];
    if (nt.push({ key: "Type", value: "/XObject" }), nt.push({ key: "Subtype", value: "/Image" }), nt.push({ key: "Width", value: P.width }), nt.push({ key: "Height", value: P.height }), P.colorSpace === q.INDEXED ? nt.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (P.palette.length / 3 - 1) + " " + ("sMask" in P && P.sMask !== void 0 ? P.objectId + 2 : P.objectId + 1) + " 0 R]" }) : (nt.push({ key: "ColorSpace", value: "/" + P.colorSpace }), P.colorSpace === q.DEVICE_CMYK && nt.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), nt.push({ key: "BitsPerComponent", value: P.bitsPerComponent }), "decodeParameters" in P && P.decodeParameters !== void 0 && nt.push({ key: "DecodeParms", value: "<<" + P.decodeParameters + ">>" }), "transparency" in P && Array.isArray(P.transparency)) {
      for (var lt = "", $ = 0, ft = P.transparency.length; $ < ft; $++) lt += P.transparency[$] + " " + P.transparency[$] + " ";
      nt.push({ key: "Mask", value: "[" + lt + "]" });
    }
    P.sMask !== void 0 && nt.push({ key: "SMask", value: P.objectId + 1 + " 0 R" });
    var ht = P.filter !== void 0 ? ["/" + P.filter] : void 0;
    if (D({ data: P.data, additionalKeyValues: nt, alreadyAppliedFilters: ht, objectId: P.objectId }), z("endobj"), "sMask" in P && P.sMask !== void 0) {
      var kt = "/Predictor " + P.predictor + " /Colors 1 /BitsPerComponent " + P.bitsPerComponent + " /Columns " + P.width, L = { width: P.width, height: P.height, colorSpace: "DeviceGray", bitsPerComponent: P.bitsPerComponent, decodeParameters: kt, data: P.sMask };
      "filter" in P && (L.filter = P.filter), F.call(this, L);
    }
    if (P.colorSpace === q.INDEXED) {
      var j = this.internal.newObject();
      D({ data: R(new Uint8Array(P.palette)), objectId: j }), z("endobj");
    }
  }, o = function() {
    var F = this.internal.collections.addImage_images;
    for (var P in F) u.call(this, F[P]);
  }, l = function() {
    var F, P = this.internal.collections.addImage_images, z = this.internal.write;
    for (var D in P) z("/I" + (F = P[D]).index, F.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", l));
  }, f = function() {
    var F = this.internal.collections.addImage_images;
    return h.call(this), F;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, b = function(F) {
    return typeof r["process" + F.toUpperCase()] == "function";
  }, A = function(F) {
    return fe(F) === "object" && F.nodeType === 1;
  }, S = function(F, P) {
    if (F.nodeName === "IMG" && F.hasAttribute("src")) {
      var z = "" + F.getAttribute("src");
      if (z.indexOf("data:image/") === 0) return oa(unescape(z).split("base64,").pop());
      var D = r.loadFile(z, !0);
      if (D !== void 0) return D;
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
      return oa(F.toDataURL(at, 1).split("base64,").pop());
    }
  }, p = function(F) {
    var P = this.internal.collections.addImage_images;
    if (P) {
      for (var z in P) if (F === P[z].alias) return P[z];
    }
  }, O = function(F, P, z) {
    return F || P || (F = -96, P = -96), F < 0 && (F = -1 * z.width * 72 / F / this.internal.scaleFactor), P < 0 && (P = -1 * z.height * 72 / P / this.internal.scaleFactor), F === 0 && (F = P * z.width / z.height), P === 0 && (P = F * z.height / z.width), [F, P];
  }, I = function(F, P, z, D, at, nt) {
    var lt = O.call(this, z, D, at), $ = this.internal.getCoordinateString, ft = this.internal.getVerticalCoordinateString, ht = f.call(this);
    if (z = lt[0], D = lt[1], ht[at.index] = at, nt) {
      nt *= Math.PI / 180;
      var kt = Math.cos(nt), L = Math.sin(nt), j = function(W) {
        return W.toFixed(4);
      }, M = [j(kt), j(L), j(-1 * L), j(kt), 0, 0, "cm"];
    }
    this.internal.write("q"), nt ? (this.internal.write([1, "0", "0", 1, $(F), ft(P + D), "cm"].join(" ")), this.internal.write(M.join(" ")), this.internal.write([$(z), "0", "0", $(D), "0", "0", "cm"].join(" "))) : this.internal.write([$(z), "0", "0", $(D), $(F), ft(P + D), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + at.index + " Do"), this.internal.write("Q");
  }, q = r.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  r.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var _ = r.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, B = r.__addimage__.sHashCode = function(F) {
    var P, z, D = 0;
    if (typeof F == "string") for (z = F.length, P = 0; P < z; P++) D = (D << 5) - D + F.charCodeAt(P), D |= 0;
    else if (wt(F)) for (z = F.byteLength / 2, P = 0; P < z; P++) D = (D << 5) - D + F[P], D |= 0;
    return D;
  }, X = r.__addimage__.validateStringAsBase64 = function(F) {
    (F = F || "").toString().trim();
    var P = !0;
    return F.length === 0 && (P = !1), F.length % 4 != 0 && (P = !1), /^[A-Za-z0-9+/]+$/.test(F.substr(0, F.length - 2)) === !1 && (P = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(F.substr(-2)) === !1 && (P = !1), P;
  }, ot = r.__addimage__.extractImageFromDataUrl = function(F) {
    var P = (F = F || "").split("base64,"), z = null;
    if (P.length === 2) {
      var D = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(P[0]);
      Array.isArray(D) && (z = { mimeType: D[1], charset: D[2], data: P[1] });
    }
    return z;
  }, ct = r.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  r.__addimage__.isArrayBuffer = function(F) {
    return ct() && F instanceof ArrayBuffer;
  };
  var wt = r.__addimage__.isArrayBufferView = function(F) {
    return ct() && typeof Uint32Array < "u" && (F instanceof Int8Array || F instanceof Uint8Array || typeof Uint8ClampedArray < "u" && F instanceof Uint8ClampedArray || F instanceof Int16Array || F instanceof Uint16Array || F instanceof Int32Array || F instanceof Uint32Array || F instanceof Float32Array || F instanceof Float64Array);
  }, tt = r.__addimage__.binaryStringToUint8Array = function(F) {
    for (var P = F.length, z = new Uint8Array(P), D = 0; D < P; D++) z[D] = F.charCodeAt(D);
    return z;
  }, R = r.__addimage__.arrayBufferToBinaryString = function(F) {
    for (var P = "", z = wt(F) ? F : new Uint8Array(F), D = 0; D < z.length; D += 8192) P += String.fromCharCode.apply(null, z.subarray(D, D + 8192));
    return P;
  };
  r.addImage = function() {
    var F, P, z, D, at, nt, lt, $, ft;
    if (typeof arguments[1] == "number" ? (P = e, z = arguments[1], D = arguments[2], at = arguments[3], nt = arguments[4], lt = arguments[5], $ = arguments[6], ft = arguments[7]) : (P = arguments[1], z = arguments[2], D = arguments[3], at = arguments[4], nt = arguments[5], lt = arguments[6], $ = arguments[7], ft = arguments[8]), fe(F = arguments[0]) === "object" && !A(F) && "imageData" in F) {
      var ht = F;
      F = ht.imageData, P = ht.format || P || e, z = ht.x || z || 0, D = ht.y || D || 0, at = ht.w || ht.width || at, nt = ht.h || ht.height || nt, lt = ht.alias || lt, $ = ht.compression || $, ft = ht.rotation || ht.angle || ft;
    }
    var kt = this.internal.getFilters();
    if ($ === void 0 && kt.indexOf("FlateEncode") !== -1 && ($ = "SLOW"), isNaN(z) || isNaN(D)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var L = gt.call(this, F, P, lt, $);
    return I.call(this, z, D, at, nt, L, ft), this;
  };
  var gt = function(F, P, z, D) {
    var at, nt, lt;
    if (typeof F == "string" && a(F) === e) {
      F = unescape(F);
      var $ = dt(F, !1);
      ($ !== "" || ($ = r.loadFile(F, !0)) !== void 0) && (F = $);
    }
    if (A(F) && (F = S(F, P)), P = a(F, P), !b(P)) throw new Error("addImage does not support files of type '" + P + "', please ensure that a plugin for '" + P + "' support is added.");
    if (((lt = z) == null || lt.length === 0) && (z = function(ft) {
      return typeof ft == "string" || wt(ft) ? B(ft) : wt(ft.data) ? B(ft.data) : null;
    }(F)), (at = p.call(this, z)) || (ct() && (F instanceof Uint8Array || P === "RGBA" || (nt = F, F = tt(F))), at = this["process" + P.toUpperCase()](F, g.call(this), z, function(ft) {
      return ft && typeof ft == "string" && (ft = ft.toUpperCase()), ft in r.image_compression ? ft : _.NONE;
    }(D), nt)), !at) throw new Error("An unknown error occurred whilst processing the image.");
    return at;
  }, dt = r.__addimage__.convertBase64ToBinaryString = function(F, P) {
    var z;
    P = typeof P != "boolean" || P;
    var D, at = "";
    if (typeof F == "string") {
      D = (z = ot(F)) !== null ? z.data : F;
      try {
        at = oa(D);
      } catch (nt) {
        if (P) throw X(D) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + nt.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return at;
  };
  r.getImageProperties = function(F) {
    var P, z, D = "";
    if (A(F) && (F = S(F)), typeof F == "string" && a(F) === e && ((D = dt(F, !1)) === "" && (D = r.loadFile(F) || ""), F = D), z = a(F), !b(z)) throw new Error("addImage does not support files of type '" + z + "', please ensure that a plugin for '" + z + "' support is added.");
    if (!ct() || F instanceof Uint8Array || (F = tt(F)), !(P = this["process" + z.toUpperCase()](F))) throw new Error("An unknown error occurred whilst processing the image");
    return P.fileType = z, P;
  };
})(Ut.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e = function(n) {
    if (n !== void 0 && n != "") return !0;
  };
  Ut.API.events.push(["addPage", function(n) {
    this.internal.getPageInfo(n.pageNumber).pageContext.annotations = [];
  }]), r.events.push(["putPage", function(n) {
    for (var a, u, o, l = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(n.objId), g = n.pageContext.annotations, b = !1, A = 0; A < g.length && !b; A++) switch ((a = g[A]).type) {
      case "link":
        (e(a.options.url) || e(a.options.pageNumber)) && (b = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        b = !0;
    }
    if (b != 0) {
      this.internal.write("/Annots [");
      for (var S = 0; S < g.length; S++) {
        a = g[S];
        var p = this.internal.pdfEscape, O = this.internal.getEncryptor(n.objId);
        switch (a.type) {
          case "reference":
            this.internal.write(" " + a.object.objId + " 0 R ");
            break;
          case "text":
            var I = this.internal.newAdditionalObject(), q = this.internal.newAdditionalObject(), _ = this.internal.getEncryptor(I.objId), B = a.title || "Note";
            o = "<</Type /Annot /Subtype /Text " + (u = "/Rect [" + l(a.bounds.x) + " " + h(a.bounds.y + a.bounds.h) + " " + l(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y) + "] ") + "/Contents (" + p(_(a.contents)) + ")", o += " /Popup " + q.objId + " 0 R", o += " /P " + f.objId + " 0 R", o += " /T (" + p(_(B)) + ") >>", I.content = o;
            var X = I.objId + " 0 R";
            o = "<</Type /Annot /Subtype /Popup " + (u = "/Rect [" + l(a.bounds.x + 30) + " " + h(a.bounds.y + a.bounds.h) + " " + l(a.bounds.x + a.bounds.w + 30) + " " + h(a.bounds.y) + "] ") + " /Parent " + X, a.open && (o += " /Open true"), o += " >>", q.content = o, this.internal.write(I.objId, "0 R", q.objId, "0 R");
            break;
          case "freetext":
            u = "/Rect [" + l(a.bounds.x) + " " + h(a.bounds.y) + " " + l(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y + a.bounds.h) + "] ";
            var ot = a.color || "#000000";
            o = "<</Type /Annot /Subtype /FreeText " + u + "/Contents (" + p(O(a.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + ot + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
            break;
          case "link":
            if (a.options.name) {
              var ct = this.annotations._nameMap[a.options.name];
              a.options.pageNumber = ct.page, a.options.top = ct.y;
            } else a.options.top || (a.options.top = 0);
            if (u = "/Rect [" + a.finalBounds.x + " " + a.finalBounds.y + " " + a.finalBounds.w + " " + a.finalBounds.h + "] ", o = "", a.options.url) o = "<</Type /Annot /Subtype /Link " + u + "/Border [0 0 0] /A <</S /URI /URI (" + p(O(a.options.url)) + ") >>";
            else if (a.options.pageNumber)
              switch (o = "<</Type /Annot /Subtype /Link " + u + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                case "Fit":
                  o += " /Fit]";
                  break;
                case "FitH":
                  o += " /FitH " + a.options.top + "]";
                  break;
                case "FitV":
                  a.options.left = a.options.left || 0, o += " /FitV " + a.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var wt = h(a.options.top);
                  a.options.left = a.options.left || 0, a.options.zoom === void 0 && (a.options.zoom = 0), o += " /XYZ " + a.options.left + " " + wt + " " + a.options.zoom + "]";
              }
            o != "" && (o += " >>", this.internal.write(o));
        }
      }
      this.internal.write("]");
    }
  }]), r.createAnnotation = function(n) {
    var a = this.internal.getCurrentPageInfo();
    switch (n.type) {
      case "link":
        this.link(n.bounds.x, n.bounds.y, n.bounds.w, n.bounds.h, n);
        break;
      case "text":
      case "freetext":
        a.pageContext.annotations.push(n);
    }
  }, r.link = function(n, a, u, o, l) {
    var h = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: f(n), y: g(a), w: f(n + u), h: g(a + o) }, options: l, type: "link" });
  }, r.textWithLink = function(n, a, u, o) {
    var l, h, f = this.getTextWidth(n), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (o.maxWidth !== void 0) {
      h = o.maxWidth;
      var b = this.splitTextToSize(n, h).length;
      l = Math.ceil(g * b);
    } else h = f, l = g;
    return this.text(n, a, u, o), u += 0.2 * g, o.align === "center" && (a -= f / 2), o.align === "right" && (a -= f), this.link(a, u - g, h, l, o), f;
  }, r.getTextWidth = function(n) {
    var a = this.internal.getFontSize();
    return this.getStringUnitWidth(n) * a / this.internal.scaleFactor;
  };
}(Ut.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, n = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, a = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, u = [1570, 1571, 1573, 1575];
  r.__arabicParser__ = {};
  var o = r.__arabicParser__.isInArabicSubstitutionA = function(I) {
    return e[I.charCodeAt(0)] !== void 0;
  }, l = r.__arabicParser__.isArabicLetter = function(I) {
    return typeof I == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(I);
  }, h = r.__arabicParser__.isArabicEndLetter = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length <= 2;
  }, f = r.__arabicParser__.isArabicAlfLetter = function(I) {
    return l(I) && u.indexOf(I.charCodeAt(0)) >= 0;
  };
  r.__arabicParser__.arabicLetterHasIsolatedForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length >= 1;
  };
  var g = r.__arabicParser__.arabicLetterHasFinalForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length >= 2;
  };
  r.__arabicParser__.arabicLetterHasInitialForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length >= 3;
  };
  var b = r.__arabicParser__.arabicLetterHasMedialForm = function(I) {
    return l(I) && o(I) && e[I.charCodeAt(0)].length == 4;
  }, A = r.__arabicParser__.resolveLigatures = function(I) {
    var q = 0, _ = n, B = "", X = 0;
    for (q = 0; q < I.length; q += 1) _[I.charCodeAt(q)] !== void 0 ? (X++, typeof (_ = _[I.charCodeAt(q)]) == "number" && (B += String.fromCharCode(_), _ = n, X = 0), q === I.length - 1 && (_ = n, B += I.charAt(q - (X - 1)), q -= X - 1, X = 0)) : (_ = n, B += I.charAt(q - X), q -= X, X = 0);
    return B;
  };
  r.__arabicParser__.isArabicDiacritic = function(I) {
    return I !== void 0 && a[I.charCodeAt(0)] !== void 0;
  };
  var S = r.__arabicParser__.getCorrectForm = function(I, q, _) {
    return l(I) ? o(I) === !1 ? -1 : !g(I) || !l(q) && !l(_) || !l(_) && h(q) || h(I) && !l(q) || h(I) && f(q) || h(I) && h(q) ? 0 : b(I) && l(q) && !h(q) && l(_) && g(_) ? 3 : h(I) || !l(_) ? 1 : 2 : -1;
  }, p = function(I) {
    var q = 0, _ = 0, B = 0, X = "", ot = "", ct = "", wt = (I = I || "").split("\\s+"), tt = [];
    for (q = 0; q < wt.length; q += 1) {
      for (tt.push(""), _ = 0; _ < wt[q].length; _ += 1) X = wt[q][_], ot = wt[q][_ - 1], ct = wt[q][_ + 1], l(X) ? (B = S(X, ot, ct), tt[q] += B !== -1 ? String.fromCharCode(e[X.charCodeAt(0)][B]) : X) : tt[q] += X;
      tt[q] = A(tt[q]);
    }
    return tt.join(" ");
  }, O = r.__arabicParser__.processArabic = r.processArabic = function() {
    var I, q = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, _ = [];
    if (Array.isArray(q)) {
      var B = 0;
      for (_ = [], B = 0; B < q.length; B += 1) Array.isArray(q[B]) ? _.push([p(q[B][0]), q[B][1], q[B][2]]) : _.push([p(q[B])]);
      I = _;
    } else I = p(q);
    return typeof arguments[0] == "string" ? I : (arguments[0].text = I, arguments[0]);
  };
  r.events.push(["preProcessText", O]);
}(Ut.API), Ut.API.autoPrint = function(r) {
  var e;
  switch ((r = r || {}).variant = r.variant || "non-conform", r.variant) {
    case "javascript":
      this.addJS("print({});");
      break;
    case "non-conform":
    default:
      this.internal.events.subscribe("postPutResources", function() {
        e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + e + " 0 R");
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
function(r) {
  var e = function() {
    var n = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return n;
    }, set: function(h) {
      n = h;
    } });
    var a = 150;
    Object.defineProperty(this, "width", { get: function() {
      return a;
    }, set: function(h) {
      a = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = a + 1);
    } });
    var u = 300;
    Object.defineProperty(this, "height", { get: function() {
      return u;
    }, set: function(h) {
      u = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = u + 1);
    } });
    var o = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return o;
    }, set: function(h) {
      o = h;
    } });
    var l = {};
    Object.defineProperty(this, "style", { get: function() {
      return l;
    }, set: function(h) {
      l = h;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  e.prototype.getContext = function(n, a) {
    var u;
    if ((n = n || "2d") !== "2d") return null;
    for (u in a) this.pdf.context2d.hasOwnProperty(u) && (this.pdf.context2d[u] = a[u]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, e.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, r.events.push(["initialized", function() {
    this.canvas = new e(), this.canvas.pdf = this;
  }]);
}(Ut.API), function(r) {
  var e = { left: 0, top: 0, bottom: 0, right: 0 }, n = !1, a = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), u.call(this));
  }, u = function() {
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
    var A = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return A;
    }, set: function(I) {
      A = I;
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
  }, r.setHeaderFunction = function(f) {
    return a.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, r.getTextDimensions = function(f, g) {
    a.call(this);
    var b = (g = g || {}).fontSize || this.getFontSize(), A = g.font || this.getFont(), S = g.scaleFactor || this.internal.scaleFactor, p = 0, O = 0, I = 0, q = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var _ = g.maxWidth;
    _ > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, _) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(X, ot) {
      return X.concat(q.splitTextToSize(ot, _));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var B = 0; B < f.length; B++) p < (I = this.getStringUnitWidth(f[B], { font: A }) * b) && (p = I);
    return p !== 0 && (O = f.length), { w: p /= S, h: Math.max((O * b * this.getLineHeightFactor() - b * (this.getLineHeightFactor() - 1)) / S, 0) };
  }, r.cellAddPage = function() {
    a.call(this), this.addPage();
    var f = this.internal.__cell__.margins || e;
    return this.internal.__cell__.lastCell = new o(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var l = r.cell = function() {
    var f;
    f = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), a.call(this);
    var g = this.internal.__cell__.lastCell, b = this.internal.__cell__.padding, A = this.internal.__cell__.margins || e, S = this.internal.__cell__.tableHeaderRow, p = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === f.lineNumber ? (f.x = (g.x || 0) + (g.width || 0), f.y = g.y || 0) : g.y + g.height + f.height + A.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = A.top, p && S && (this.printHeaderRow(f.lineNumber, !0), f.y += S[0].height)) : f.y = g.y + g.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, n === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - b, f.y + b, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + b, { align: "center", baseline: "top", maxWidth: f.width - b - b }) : this.text(f.text, f.x + b, f.y + b, { align: "left", baseline: "top", maxWidth: f.width - b - b })), this.internal.__cell__.lastCell = f, this;
  };
  r.table = function(f, g, b, A, S) {
    if (a.call(this), !b) throw new Error("No data for PDF table.");
    var p, O, I, q, _ = [], B = [], X = [], ot = {}, ct = {}, wt = [], tt = [], R = (S = S || {}).autoSize || !1, gt = S.printHeaders !== !1, dt = S.css && S.css["font-size"] !== void 0 ? 16 * S.css["font-size"] : S.fontSize || 12, F = S.margins || Object.assign({ width: this.getPageWidth() }, e), P = typeof S.padding == "number" ? S.padding : 3, z = S.headerBackgroundColor || "#c8c8c8", D = S.headerTextColor || "#000";
    if (u.call(this), this.internal.__cell__.printHeaders = gt, this.internal.__cell__.margins = F, this.internal.__cell__.table_font_size = dt, this.internal.__cell__.padding = P, this.internal.__cell__.headerBackgroundColor = z, this.internal.__cell__.headerTextColor = D, this.setFontSize(dt), A == null) B = _ = Object.keys(b[0]), X = _.map(function() {
      return "left";
    });
    else if (Array.isArray(A) && fe(A[0]) === "object") for (_ = A.map(function(ht) {
      return ht.name;
    }), B = A.map(function(ht) {
      return ht.prompt || ht.name || "";
    }), X = A.map(function(ht) {
      return ht.align || "left";
    }), p = 0; p < A.length; p += 1) ct[A[p].name] = A[p].width * (19.049976 / 25.4);
    else Array.isArray(A) && typeof A[0] == "string" && (B = _ = A, X = _.map(function() {
      return "left";
    }));
    if (R || Array.isArray(A) && typeof A[0] == "string") for (p = 0; p < _.length; p += 1) {
      for (ot[q = _[p]] = b.map(function(ht) {
        return ht[q];
      }), this.setFont(void 0, "bold"), wt.push(this.getTextDimensions(B[p], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), O = ot[q], this.setFont(void 0, "normal"), I = 0; I < O.length; I += 1) wt.push(this.getTextDimensions(O[I], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      ct[q] = Math.max.apply(null, wt) + P + P, wt = [];
    }
    if (gt) {
      var at = {};
      for (p = 0; p < _.length; p += 1) at[_[p]] = {}, at[_[p]].text = B[p], at[_[p]].align = X[p];
      var nt = h.call(this, at, ct);
      tt = _.map(function(ht) {
        return new o(f, g, ct[ht], nt, at[ht].text, void 0, at[ht].align);
      }), this.setTableHeaderRow(tt), this.printHeaderRow(1, !1);
    }
    var lt = A.reduce(function(ht, kt) {
      return ht[kt.name] = kt.align, ht;
    }, {});
    for (p = 0; p < b.length; p += 1) {
      "rowStart" in S && S.rowStart instanceof Function && S.rowStart({ row: p, data: b[p] }, this);
      var $ = h.call(this, b[p], ct);
      for (I = 0; I < _.length; I += 1) {
        var ft = b[p][_[I]];
        "cellStart" in S && S.cellStart instanceof Function && S.cellStart({ row: p, col: I, data: ft }, this), l.call(this, new o(f, g, ct[_[I]], $, ft, p + 2, lt[_[I]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = g, this;
  };
  var h = function(f, g) {
    var b = this.internal.__cell__.padding, A = this.internal.__cell__.table_font_size, S = this.internal.scaleFactor;
    return Object.keys(f).map(function(p) {
      var O = f[p];
      return this.splitTextToSize(O.hasOwnProperty("text") ? O.text : O, g[p] - b - b);
    }, this).map(function(p) {
      return this.getLineHeightFactor() * p.length * A / S + b + b;
    }, this).reduce(function(p, O) {
      return Math.max(p, O);
    }, 0);
  };
  r.setTableHeaderRow = function(f) {
    a.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, r.printHeaderRow = function(f, g) {
    if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var b;
    if (n = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var A = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o(A[0], A[1], A[2], A[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var S = [], p = 0; p < this.internal.__cell__.tableHeaderRow.length; p += 1) {
      b = this.internal.__cell__.tableHeaderRow[p].clone(), g && (b.y = this.internal.__cell__.margins.top || 0, S.push(b)), b.lineNumber = f;
      var O = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), l.call(this, b), this.setTextColor(O);
    }
    S.length > 0 && this.setTableHeaderRow(S), this.setFont(void 0, "normal"), n = !1;
  };
}(Ut.API);
var Eu = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, qu = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], ws = Mu(qu), Du = [100, 200, 300, 400, 500, 600, 700, 800, 900], a1 = Mu(Du);
function ys(r) {
  var e = r.family.replace(/"|'/g, "").toLowerCase(), n = function(o) {
    return Eu[o = o || "normal"] ? o : "normal";
  }(r.style), a = function(o) {
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
  }(r.weight), u = function(o) {
    return typeof ws[o = o || "normal"] == "number" ? o : "normal";
  }(r.stretch);
  return { family: e, style: n, weight: a, stretch: u, src: r.src || [], ref: r.ref || { name: e, style: [u, n, a].join(" ") } };
}
function fu(r, e, n, a) {
  var u;
  for (u = n; u >= 0 && u < e.length; u += a) if (r[e[u]]) return r[e[u]];
  for (u = n; u >= 0 && u < e.length; u -= a) if (r[e[u]]) return r[e[u]];
}
var o1 = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, du = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function pu(r) {
  return [r.stretch, r.style, r.weight, r.family].join(" ");
}
function s1(r, e, n) {
  for (var a = (n = n || {}).defaultFontFamily || "times", u = Object.assign({}, o1, n.genericFontFamilies || {}), o = null, l = null, h = 0; h < e.length; ++h) if (u[(o = ys(e[h])).family] && (o.family = u[o.family]), r.hasOwnProperty(o.family)) {
    l = r[o.family];
    break;
  }
  if (!(l = l || r[a])) throw new Error("Could not find a font-family for the rule '" + pu(o) + "' and default family '" + a + "'.");
  if (l = function(f, g) {
    if (g[f]) return g[f];
    var b = ws[f], A = b <= ws.normal ? -1 : 1, S = fu(g, qu, b, A);
    if (!S) throw new Error("Could not find a matching font-stretch value for " + f);
    return S;
  }(o.stretch, l), l = function(f, g) {
    if (g[f]) return g[f];
    for (var b = Eu[f], A = 0; A < b.length; ++A) if (g[b[A]]) return g[b[A]];
    throw new Error("Could not find a matching font-style for " + f);
  }(o.style, l), !(l = function(f, g) {
    if (g[f]) return g[f];
    if (f === 400 && g[500]) return g[500];
    if (f === 500 && g[400]) return g[400];
    var b = a1[f], A = fu(g, Du, b, f < 400 ? -1 : 1);
    if (!A) throw new Error("Could not find a matching font-weight for value " + f);
    return A;
  }(o.weight, l))) throw new Error("Failed to resolve a font for the rule '" + pu(o) + "'.");
  return l;
}
function gu(r) {
  return r.trimLeft();
}
function u1(r, e) {
  for (var n = 0; n < r.length; ) {
    if (r.charAt(n) === e) return [r.substring(0, n), r.substring(n + 1)];
    n += 1;
  }
  return null;
}
function c1(r) {
  var e = r.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return e === null ? null : [e[0], r.substring(e[0].length)];
}
var $a, mu, vu, ss = ["times"];
(function(r) {
  var e, n, a, u, o, l, h, f, g, b = function(L) {
    return L = L || {}, this.isStrokeTransparent = L.isStrokeTransparent || !1, this.strokeOpacity = L.strokeOpacity || 1, this.strokeStyle = L.strokeStyle || "#000000", this.fillStyle = L.fillStyle || "#000000", this.isFillTransparent = L.isFillTransparent || !1, this.fillOpacity = L.fillOpacity || 1, this.font = L.font || "10px sans-serif", this.textBaseline = L.textBaseline || "alphabetic", this.textAlign = L.textAlign || "left", this.lineWidth = L.lineWidth || 1, this.lineJoin = L.lineJoin || "miter", this.lineCap = L.lineCap || "butt", this.path = L.path || [], this.transform = L.transform !== void 0 ? L.transform.clone() : new f(), this.globalCompositeOperation = L.globalCompositeOperation || "normal", this.globalAlpha = L.globalAlpha || 1, this.clip_path = L.clip_path || [], this.currentPoint = L.currentPoint || new l(), this.miterLimit = L.miterLimit || 10, this.lastPoint = L.lastPoint || new l(), this.lineDashOffset = L.lineDashOffset || 0, this.lineDash = L.lineDash || [], this.margin = L.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = L.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof L.ignoreClearRect != "boolean" || L.ignoreClearRect, this;
  };
  r.events.push(["initialized", function() {
    this.context2d = new A(this), e = this.internal.f2, n = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, u = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, l = this.internal.Point, h = this.internal.Rectangle, f = this.internal.Matrix, g = new b();
  }]);
  var A = function(L) {
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
    }, set: function(ut) {
      M = !!ut;
    } });
    var W = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return W;
    }, set: function(ut) {
      W = !!ut;
    } });
    var Y = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return Y;
    }, set: function(ut) {
      isNaN(ut) || (Y = ut);
    } });
    var Q = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return Q;
    }, set: function(ut) {
      isNaN(ut) || (Q = ut);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(ut) {
      var E;
      typeof ut == "number" ? E = [ut, ut, ut, ut] : ((E = new Array(4))[0] = ut[0], E[1] = ut.length >= 2 ? ut[1] : E[0], E[2] = ut.length >= 3 ? ut[2] : E[0], E[3] = ut.length >= 4 ? ut[3] : E[1]), g.margin = E;
    } });
    var et = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return et;
    }, set: function(ut) {
      et = ut;
    } });
    var rt = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return rt;
    }, set: function(ut) {
      rt = ut;
    } });
    var At = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return At;
    }, set: function(ut) {
      At = ut;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(ut) {
      ut instanceof b && (g = ut);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(ut) {
      g.path = ut;
    } });
    var Nt = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return Nt;
    }, set: function(ut) {
      Nt = ut;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(ut) {
      var E;
      E = S(ut), this.ctx.fillStyle = E.style, this.ctx.isFillTransparent = E.a === 0, this.ctx.fillOpacity = E.a, this.pdf.setFillColor(E.r, E.g, E.b, { a: E.a }), this.pdf.setTextColor(E.r, E.g, E.b, { a: E.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(ut) {
      var E = S(ut);
      this.ctx.strokeStyle = E.style, this.ctx.isStrokeTransparent = E.a === 0, this.ctx.strokeOpacity = E.a, E.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (E.a, this.pdf.setDrawColor(E.r, E.g, E.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(ut) {
      ["butt", "round", "square"].indexOf(ut) !== -1 && (this.ctx.lineCap = ut, this.pdf.setLineCap(ut));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(ut) {
      isNaN(ut) || (this.ctx.lineWidth = ut, this.pdf.setLineWidth(ut));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(ut) {
      ["bevel", "round", "miter"].indexOf(ut) !== -1 && (this.ctx.lineJoin = ut, this.pdf.setLineJoin(ut));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(ut) {
      isNaN(ut) || (this.ctx.miterLimit = ut, this.pdf.setMiterLimit(ut));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(ut) {
      this.ctx.textBaseline = ut;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(ut) {
      ["right", "end", "center", "left", "start"].indexOf(ut) !== -1 && (this.ctx.textAlign = ut);
    } });
    var Ct = null;
    function Bt(ut, E) {
      if (Ct === null) {
        var Xt = function(Et) {
          var Lt = [];
          return Object.keys(Et).forEach(function(xt) {
            Et[xt].forEach(function(Ft) {
              var Pt = null;
              switch (Ft) {
                case "bold":
                  Pt = { family: xt, weight: "bold" };
                  break;
                case "italic":
                  Pt = { family: xt, style: "italic" };
                  break;
                case "bolditalic":
                  Pt = { family: xt, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  Pt = { family: xt };
              }
              Pt !== null && (Pt.ref = { name: xt, style: Ft }, Lt.push(Pt));
            });
          }), Lt;
        }(ut.getFontList());
        Ct = function(Et) {
          for (var Lt = {}, xt = 0; xt < Et.length; ++xt) {
            var Ft = ys(Et[xt]), Pt = Ft.family, qt = Ft.stretch, Gt = Ft.style, $t = Ft.weight;
            Lt[Pt] = Lt[Pt] || {}, Lt[Pt][qt] = Lt[Pt][qt] || {}, Lt[Pt][qt][Gt] = Lt[Pt][qt][Gt] || {}, Lt[Pt][qt][Gt][$t] = Ft;
          }
          return Lt;
        }(Xt.concat(E));
      }
      return Ct;
    }
    var zt = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return zt;
    }, set: function(ut) {
      Ct = null, zt = ut;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(ut) {
      var E;
      if (this.ctx.font = ut, (E = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(ut)) !== null) {
        var Xt = E[1], Et = (E[2], E[3]), Lt = E[4], xt = (E[5], E[6]), Ft = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Lt)[2];
        Lt = Math.floor(Ft === "px" ? parseFloat(Lt) * this.pdf.internal.scaleFactor : Ft === "em" ? parseFloat(Lt) * this.pdf.getFontSize() : parseFloat(Lt) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Lt);
        var Pt = function(Wt) {
          var ee, It, Ve = [], oe = Wt.trim();
          if (oe === "") return ss;
          if (oe in du) return [du[oe]];
          for (; oe !== ""; ) {
            switch (It = null, ee = (oe = gu(oe)).charAt(0)) {
              case '"':
              case "'":
                It = u1(oe.substring(1), ee);
                break;
              default:
                It = c1(oe);
            }
            if (It === null || (Ve.push(It[0]), (oe = gu(It[1])) !== "" && oe.charAt(0) !== ",")) return ss;
            oe = oe.replace(/^,/, "");
          }
          return Ve;
        }(xt);
        if (this.fontFaces) {
          var qt = s1(Bt(this.pdf, this.fontFaces), Pt.map(function(Wt) {
            return { family: Wt, stretch: "normal", weight: Et, style: Xt };
          }));
          this.pdf.setFont(qt.ref.name, qt.ref.style);
        } else {
          var Gt = "";
          (Et === "bold" || parseInt(Et, 10) >= 700 || Xt === "bold") && (Gt = "bold"), Xt === "italic" && (Gt += "italic"), Gt.length === 0 && (Gt = "normal");
          for (var $t = "", te = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, ie = 0; ie < Pt.length; ie++) {
            if (this.pdf.internal.getFont(Pt[ie], Gt, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              $t = Pt[ie];
              break;
            }
            if (Gt === "bolditalic" && this.pdf.internal.getFont(Pt[ie], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) $t = Pt[ie], Gt = "bold";
            else if (this.pdf.internal.getFont(Pt[ie], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              $t = Pt[ie], Gt = "normal";
              break;
            }
          }
          if ($t === "") {
            for (var de = 0; de < Pt.length; de++) if (te[Pt[de]]) {
              $t = te[Pt[de]];
              break;
            }
          }
          $t = $t === "" ? "Times" : $t, this.pdf.setFont($t, Gt);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(ut) {
      this.ctx.globalCompositeOperation = ut;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(ut) {
      this.ctx.globalAlpha = ut;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(ut) {
      this.ctx.lineDashOffset = ut, kt.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(ut) {
      this.ctx.lineDash = ut, kt.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(ut) {
      this.ctx.ignoreClearRect = !!ut;
    } });
  };
  A.prototype.setLineDash = function(L) {
    this.lineDash = L;
  }, A.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, A.prototype.fill = function() {
    ot.call(this, "fill", !1);
  }, A.prototype.stroke = function() {
    ot.call(this, "stroke", !1);
  }, A.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, A.prototype.moveTo = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var M = this.ctx.transform.applyToPoint(new l(L, j));
    this.path.push({ type: "mt", x: M.x, y: M.y }), this.ctx.lastPoint = new l(L, j);
  }, A.prototype.closePath = function() {
    var L = new l(0, 0), j = 0;
    for (j = this.path.length - 1; j !== -1; j--) if (this.path[j].type === "begin" && fe(this.path[j + 1]) === "object" && typeof this.path[j + 1].x == "number") {
      L = new l(this.path[j + 1].x, this.path[j + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new l(L.x, L.y);
  }, A.prototype.lineTo = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var M = this.ctx.transform.applyToPoint(new l(L, j));
    this.path.push({ type: "lt", x: M.x, y: M.y }), this.ctx.lastPoint = new l(M.x, M.y);
  }, A.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), ot.call(this, null, !0);
  }, A.prototype.quadraticCurveTo = function(L, j, M, W) {
    if (isNaN(M) || isNaN(W) || isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var Y = this.ctx.transform.applyToPoint(new l(M, W)), Q = this.ctx.transform.applyToPoint(new l(L, j));
    this.path.push({ type: "qct", x1: Q.x, y1: Q.y, x: Y.x, y: Y.y }), this.ctx.lastPoint = new l(Y.x, Y.y);
  }, A.prototype.bezierCurveTo = function(L, j, M, W, Y, Q) {
    if (isNaN(Y) || isNaN(Q) || isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var et = this.ctx.transform.applyToPoint(new l(Y, Q)), rt = this.ctx.transform.applyToPoint(new l(L, j)), At = this.ctx.transform.applyToPoint(new l(M, W));
    this.path.push({ type: "bct", x1: rt.x, y1: rt.y, x2: At.x, y2: At.y, x: et.x, y: et.y }), this.ctx.lastPoint = new l(et.x, et.y);
  }, A.prototype.arc = function(L, j, M, W, Y, Q) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W) || isNaN(Y)) throw ve.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (Q = !!Q, !this.ctx.transform.isIdentity) {
      var et = this.ctx.transform.applyToPoint(new l(L, j));
      L = et.x, j = et.y;
      var rt = this.ctx.transform.applyToPoint(new l(0, M)), At = this.ctx.transform.applyToPoint(new l(0, 0));
      M = Math.sqrt(Math.pow(rt.x - At.x, 2) + Math.pow(rt.y - At.y, 2));
    }
    Math.abs(Y - W) >= 2 * Math.PI && (W = 0, Y = 2 * Math.PI), this.path.push({ type: "arc", x: L, y: j, radius: M, startAngle: W, endAngle: Y, counterclockwise: Q });
  }, A.prototype.arcTo = function(L, j, M, W, Y) {
    throw new Error("arcTo not implemented.");
  }, A.prototype.rect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(L, j), this.lineTo(L + M, j), this.lineTo(L + M, j + W), this.lineTo(L, j + W), this.lineTo(L, j), this.lineTo(L + M, j), this.lineTo(L, j);
  }, A.prototype.fillRect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!p.call(this)) {
      var Y = {};
      this.lineCap !== "butt" && (Y.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Y.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(L, j, M, W), this.fill(), Y.hasOwnProperty("lineCap") && (this.lineCap = Y.lineCap), Y.hasOwnProperty("lineJoin") && (this.lineJoin = Y.lineJoin);
    }
  }, A.prototype.strokeRect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    O.call(this) || (this.beginPath(), this.rect(L, j, M, W), this.stroke());
  }, A.prototype.clearRect = function(L, j, M, W) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W)) throw ve.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(L, j, M, W));
  }, A.prototype.save = function(L) {
    L = typeof L != "boolean" || L;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, M = 0; M < this.pdf.internal.getNumberOfPages(); M++) this.pdf.setPage(M + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(j), L) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var W = new b(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = W;
    }
  }, A.prototype.restore = function(L) {
    L = typeof L != "boolean" || L;
    for (var j = this.pdf.internal.getCurrentPageInfo().pageNumber, M = 0; M < this.pdf.internal.getNumberOfPages(); M++) this.pdf.setPage(M + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(j), L && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, A.prototype.toDataURL = function() {
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
          var et = new Fu(L);
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
  A.prototype.fillText = function(L, j, M, W) {
    if (isNaN(j) || isNaN(M) || typeof L != "string") throw ve.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (W = isNaN(W) ? void 0 : W, !p.call(this)) {
      var Y = $(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
      P.call(this, { text: L, x: j, y: M, scale: Q, angle: Y, align: this.textAlign, maxWidth: W });
    }
  }, A.prototype.strokeText = function(L, j, M, W) {
    if (isNaN(j) || isNaN(M) || typeof L != "string") throw ve.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!O.call(this)) {
      W = isNaN(W) ? void 0 : W;
      var Y = $(this.ctx.transform.rotation), Q = this.ctx.transform.scaleX;
      P.call(this, { text: L, x: j, y: M, scale: Q, renderingMode: "stroke", angle: Y, align: this.textAlign, maxWidth: W });
    }
  }, A.prototype.measureText = function(L) {
    if (typeof L != "string") throw ve.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var j = this.pdf, M = this.pdf.internal.scaleFactor, W = j.internal.getFontSize(), Y = j.getStringUnitWidth(L) * W / j.internal.scaleFactor, Q = function(et) {
      var rt = (et = et || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return rt;
      } }), this;
    };
    return new Q({ width: Y *= Math.round(96 * M / 72 * 1e4) / 1e4 });
  }, A.prototype.scale = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var M = new f(L, 0, 0, j, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(M);
  }, A.prototype.rotate = function(L) {
    if (isNaN(L)) throw ve.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var j = new f(Math.cos(L), Math.sin(L), -Math.sin(L), Math.cos(L), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(j);
  }, A.prototype.translate = function(L, j) {
    if (isNaN(L) || isNaN(j)) throw ve.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var M = new f(1, 0, 0, 1, L, j);
    this.ctx.transform = this.ctx.transform.multiply(M);
  }, A.prototype.transform = function(L, j, M, W, Y, Q) {
    if (isNaN(L) || isNaN(j) || isNaN(M) || isNaN(W) || isNaN(Y) || isNaN(Q)) throw ve.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var et = new f(L, j, M, W, Y, Q);
    this.ctx.transform = this.ctx.transform.multiply(et);
  }, A.prototype.setTransform = function(L, j, M, W, Y, Q) {
    L = isNaN(L) ? 1 : L, j = isNaN(j) ? 0 : j, M = isNaN(M) ? 0 : M, W = isNaN(W) ? 1 : W, Y = isNaN(Y) ? 0 : Y, Q = isNaN(Q) ? 0 : Q, this.ctx.transform = new f(L, j, M, W, Y, Q);
  };
  var I = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  A.prototype.drawImage = function(L, j, M, W, Y, Q, et, rt, At) {
    var Nt = this.pdf.getImageProperties(L), Ct = 1, Bt = 1, zt = 1, ut = 1;
    W !== void 0 && rt !== void 0 && (zt = rt / W, ut = At / Y, Ct = Nt.width / W * rt / W, Bt = Nt.height / Y * At / Y), Q === void 0 && (Q = j, et = M, j = 0, M = 0), W !== void 0 && rt === void 0 && (rt = W, At = Y), W === void 0 && rt === void 0 && (rt = Nt.width, At = Nt.height);
    for (var E, Xt = this.ctx.transform.decompose(), Et = $(Xt.rotate.shx), Lt = new f(), xt = (Lt = (Lt = (Lt = Lt.multiply(Xt.translate)).multiply(Xt.skew)).multiply(Xt.scale)).applyToRectangle(new h(Q - j * zt, et - M * ut, W * Ct, Y * Bt)), Ft = q.call(this, xt), Pt = [], qt = 0; qt < Ft.length; qt += 1) Pt.indexOf(Ft[qt]) === -1 && Pt.push(Ft[qt]);
    if (X(Pt), this.autoPaging) for (var Gt = Pt[0], $t = Pt[Pt.length - 1], te = Gt; te < $t + 1; te++) {
      this.pdf.setPage(te);
      var ie = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], de = te === 1 ? this.posY + this.margin[0] : this.margin[0], Wt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ee = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], It = te === 1 ? 0 : Wt + (te - 2) * ee;
      if (this.ctx.clip_path.length !== 0) {
        var Ve = this.path;
        E = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = B(E, this.posX + this.margin[3], -It + de + this.ctx.prevPageLastElemOffset), ct.call(this, "fill", !0), this.path = Ve;
      }
      var oe = JSON.parse(JSON.stringify(xt));
      oe = B([oe], this.posX + this.margin[3], -It + de + this.ctx.prevPageLastElemOffset)[0];
      var yn = (te > Gt || te < $t) && I.call(this);
      yn && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ie, ee, null).clip().discardPath()), this.pdf.addImage(L, "JPEG", oe.x, oe.y, oe.w, oe.h, null, null, Et), yn && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(L, "JPEG", xt.x, xt.y, xt.w, xt.h, null, null, Et);
  };
  var q = function(L, j, M) {
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
  }, B = function(L, j, M) {
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
    for (var M, W, Y = this.fillStyle, Q = this.strokeStyle, et = this.lineCap, rt = this.lineWidth, At = Math.abs(rt * this.ctx.transform.scaleX), Nt = this.lineJoin, Ct = JSON.parse(JSON.stringify(this.path)), Bt = JSON.parse(JSON.stringify(this.path)), zt = [], ut = 0; ut < Bt.length; ut++) if (Bt[ut].x !== void 0) for (var E = q.call(this, Bt[ut]), Xt = 0; Xt < E.length; Xt += 1) zt.indexOf(E[Xt]) === -1 && zt.push(E[Xt]);
    for (var Et = 0; Et < zt.length; Et++) for (; this.pdf.internal.getNumberOfPages() < zt[Et]; ) _.call(this);
    if (X(zt), this.autoPaging) for (var Lt = zt[0], xt = zt[zt.length - 1], Ft = Lt; Ft < xt + 1; Ft++) {
      this.pdf.setPage(Ft), this.fillStyle = Y, this.strokeStyle = Q, this.lineCap = et, this.lineWidth = At, this.lineJoin = Nt;
      var Pt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], qt = Ft === 1 ? this.posY + this.margin[0] : this.margin[0], Gt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], $t = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], te = Ft === 1 ? 0 : Gt + (Ft - 2) * $t;
      if (this.ctx.clip_path.length !== 0) {
        var ie = this.path;
        M = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = B(M, this.posX + this.margin[3], -te + qt + this.ctx.prevPageLastElemOffset), ct.call(this, L, !0), this.path = ie;
      }
      if (W = JSON.parse(JSON.stringify(Ct)), this.path = B(W, this.posX + this.margin[3], -te + qt + this.ctx.prevPageLastElemOffset), j === !1 || Ft === 0) {
        var de = (Ft > Lt || Ft < xt) && I.call(this);
        de && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Pt, $t, null).clip().discardPath()), ct.call(this, L, j), de && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = rt;
    }
    else this.lineWidth = At, ct.call(this, L, j), this.lineWidth = rt;
    this.path = Ct;
  }, ct = function(L, j) {
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
            var Nt = Q[et - 1].x + 2 / 3 * (rt.x1 - Q[et - 1].x), Ct = Q[et - 1].y + 2 / 3 * (rt.y1 - Q[et - 1].y), Bt = rt.x + 2 / 3 * (rt.x1 - rt.x), zt = rt.y + 2 / 3 * (rt.y1 - rt.y), ut = rt.x, E = rt.y;
            M = [Nt - Q[et - 1].x, Ct - Q[et - 1].y, Bt - Q[et - 1].x, zt - Q[et - 1].y, ut - Q[et - 1].x, E - Q[et - 1].y], Y[Y.length - 1].deltas.push(M);
            break;
          case "arc":
            Y.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(Y[Y.length - 1].abs) && Y[Y.length - 1].abs.push(rt);
        }
      }
      W = j ? null : L === "stroke" ? "stroke" : "fill";
      for (var Xt = !1, Et = 0; Et < Y.length; Et++) if (Y[Et].arc) for (var Lt = Y[Et].abs, xt = 0; xt < Lt.length; xt++) {
        var Ft = Lt[xt];
        Ft.type === "arc" ? R.call(this, Ft.x, Ft.y, Ft.radius, Ft.startAngle, Ft.endAngle, Ft.counterclockwise, void 0, j, !Xt) : z.call(this, Ft.x, Ft.y), Xt = !0;
      }
      else if (Y[Et].close === !0) this.pdf.internal.out("h"), Xt = !1;
      else if (Y[Et].begin !== !0) {
        var Pt = Y[Et].start.x, qt = Y[Et].start.y;
        D.call(this, Y[Et].deltas, Pt, qt), Xt = !0;
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
  A.prototype.createLinearGradient = function() {
    var L = function() {
    };
    return L.colorStops = [], L.addColorStop = function(j, M) {
      this.colorStops.push([j, M]);
    }, L.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, L.isCanvasGradient = !0, L;
  }, A.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, A.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var R = function(L, j, M, W, Y, Q, et, rt, At) {
    for (var Nt = nt.call(this, M, W, Y, Q), Ct = 0; Ct < Nt.length; Ct++) {
      var Bt = Nt[Ct];
      Ct === 0 && (At ? F.call(this, Bt.x1 + L, Bt.y1 + j) : z.call(this, Bt.x1 + L, Bt.y1 + j)), at.call(this, L, j, Bt.x2, Bt.y2, Bt.x3, Bt.y3, Bt.x4, Bt.y4);
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
    this.pdf.internal.out(n(L) + " " + a(j) + " m");
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
    var M = this.pdf.getTextDimensions(L.text), W = wt.call(this, L.y), Y = tt.call(this, W) - M.h, Q = this.ctx.transform.applyToPoint(new l(L.x, W)), et = this.ctx.transform.decompose(), rt = new f();
    rt = (rt = (rt = rt.multiply(et.translate)).multiply(et.skew)).multiply(et.scale);
    for (var At, Nt, Ct, Bt = this.ctx.transform.applyToRectangle(new h(L.x, W, M.w, M.h)), zt = rt.applyToRectangle(new h(L.x, Y, M.w, M.h)), ut = q.call(this, zt), E = [], Xt = 0; Xt < ut.length; Xt += 1) E.indexOf(ut[Xt]) === -1 && E.push(ut[Xt]);
    if (X(E), this.autoPaging) for (var Et = E[0], Lt = E[E.length - 1], xt = Et; xt < Lt + 1; xt++) {
      this.pdf.setPage(xt);
      var Ft = xt === 1 ? this.posY + this.margin[0] : this.margin[0], Pt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], qt = this.pdf.internal.pageSize.height - this.margin[2], Gt = qt - this.margin[0], $t = this.pdf.internal.pageSize.width - this.margin[1], te = $t - this.margin[3], ie = xt === 1 ? 0 : Pt + (xt - 2) * Gt;
      if (this.ctx.clip_path.length !== 0) {
        var de = this.path;
        At = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = B(At, this.posX + this.margin[3], -1 * ie + Ft), ct.call(this, "fill", !0), this.path = de;
      }
      var Wt = B([JSON.parse(JSON.stringify(zt))], this.posX + this.margin[3], -ie + Ft + this.ctx.prevPageLastElemOffset)[0];
      L.scale >= 0.01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), Ct = this.lineWidth, this.lineWidth = Ct * L.scale);
      var ee = this.autoPaging !== "text";
      if (ee || Wt.y + Wt.h <= qt) {
        if (ee || Wt.y >= Ft && Wt.x <= $t) {
          var It = ee ? L.text : this.pdf.splitTextToSize(L.text, L.maxWidth || $t - Wt.x)[0], Ve = B([JSON.parse(JSON.stringify(Bt))], this.posX + this.margin[3], -ie + Ft + this.ctx.prevPageLastElemOffset)[0], oe = ee && (xt > Et || xt < Lt) && I.call(this);
          oe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], te, Gt, null).clip().discardPath()), this.pdf.text(It, Ve.x, Ve.y, { angle: L.angle, align: j, renderingMode: L.renderingMode }), oe && this.pdf.restoreGraphicsState();
        }
      } else Wt.y < qt && (this.ctx.prevPageLastElemOffset += qt - Wt.y);
      L.scale >= 0.01 && (this.pdf.setFontSize(Nt), this.lineWidth = Ct);
    }
    else L.scale >= 0.01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), Ct = this.lineWidth, this.lineWidth = Ct * L.scale), this.pdf.text(L.text, Q.x + this.posX, Q.y + this.posY, { angle: L.angle, align: j, renderingMode: L.renderingMode, maxWidth: L.maxWidth }), L.scale >= 0.01 && (this.pdf.setFontSize(Nt), this.lineWidth = Ct);
  }, z = function(L, j, M, W) {
    M = M || 0, W = W || 0, this.pdf.internal.out(n(L + M) + " " + a(j + W) + " l");
  }, D = function(L, j, M) {
    return this.pdf.lines(L, j, M, null, null);
  }, at = function(L, j, M, W, Y, Q, et, rt) {
    this.pdf.internal.out([e(u(M + L)), e(o(W + j)), e(u(Y + L)), e(o(Q + j)), e(u(et + L)), e(o(rt + j)), "c"].join(" "));
  }, nt = function(L, j, M, W) {
    for (var Y = 2 * Math.PI, Q = Math.PI / 2; j > M; ) j -= Y;
    var et = Math.abs(M - j);
    et < Y && W && (et = Y - et);
    for (var rt = [], At = W ? -1 : 1, Nt = j; et > 1e-5; ) {
      var Ct = Nt + At * Math.min(et, Q);
      rt.push(lt.call(this, L, Nt, Ct)), et -= Math.abs(Ct - Nt), Nt = Ct;
    }
    return rt;
  }, lt = function(L, j, M) {
    var W = (M - j) / 2, Y = L * Math.cos(W), Q = L * Math.sin(W), et = Y, rt = -Q, At = et * et + rt * rt, Nt = At + et * Y + rt * Q, Ct = 4 / 3 * (Math.sqrt(2 * At * Nt) - Nt) / (et * Q - rt * Y), Bt = et - Ct * rt, zt = rt + Ct * et, ut = Bt, E = -zt, Xt = W + j, Et = Math.cos(Xt), Lt = Math.sin(Xt);
    return { x1: L * Math.cos(j), y1: L * Math.sin(j), x2: Bt * Et - zt * Lt, y2: Bt * Lt + zt * Et, x3: ut * Et - E * Lt, y3: ut * Lt + E * Et, x4: L * Math.cos(M), y4: L * Math.sin(M) };
  }, $ = function(L) {
    return 180 * L / Math.PI;
  }, ft = function(L, j, M, W, Y, Q) {
    var et = L + 0.5 * (M - L), rt = j + 0.5 * (W - j), At = Y + 0.5 * (M - Y), Nt = Q + 0.5 * (W - Q), Ct = Math.min(L, Y, et, At), Bt = Math.max(L, Y, et, At), zt = Math.min(j, Q, rt, Nt), ut = Math.max(j, Q, rt, Nt);
    return new h(Ct, zt, Bt - Ct, ut - zt);
  }, ht = function(L, j, M, W, Y, Q, et, rt) {
    var At, Nt, Ct, Bt, zt, ut, E, Xt, Et, Lt, xt, Ft, Pt, qt, Gt = M - L, $t = W - j, te = Y - M, ie = Q - W, de = et - Y, Wt = rt - Q;
    for (Nt = 0; Nt < 41; Nt++) Et = (E = (Ct = L + (At = Nt / 40) * Gt) + At * ((zt = M + At * te) - Ct)) + At * (zt + At * (Y + At * de - zt) - E), Lt = (Xt = (Bt = j + At * $t) + At * ((ut = W + At * ie) - Bt)) + At * (ut + At * (Q + At * Wt - ut) - Xt), Nt == 0 ? (xt = Et, Ft = Lt, Pt = Et, qt = Lt) : (xt = Math.min(xt, Et), Ft = Math.min(Ft, Lt), Pt = Math.max(Pt, Et), qt = Math.max(qt, Lt));
    return new h(Math.round(xt), Math.round(Ft), Math.round(Pt - xt), Math.round(qt - Ft));
  }, kt = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var L, j, M = (L = this.ctx.lineDash, j = this.ctx.lineDashOffset, JSON.stringify({ lineDash: L, lineDashOffset: j }));
      this.prevLineDash !== M && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = M);
    }
  };
})(Ut.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e = function(o) {
    var l, h, f, g, b, A, S, p, O, I;
    for (h = [], f = 0, g = (o += l = "\0\0\0\0".slice(o.length % 4 || 4)).length; g > f; f += 4) (b = (o.charCodeAt(f) << 24) + (o.charCodeAt(f + 1) << 16) + (o.charCodeAt(f + 2) << 8) + o.charCodeAt(f + 3)) !== 0 ? (A = (b = ((b = ((b = ((b = (b - (I = b % 85)) / 85) - (O = b % 85)) / 85) - (p = b % 85)) / 85) - (S = b % 85)) / 85) % 85, h.push(A + 33, S + 33, p + 33, O + 33, I + 33)) : h.push(122);
    return function(q, _) {
      for (var B = _; B > 0; B--) q.pop();
    }(h, l.length), String.fromCharCode.apply(String, h) + "~>";
  }, n = function(o) {
    var l, h, f, g, b, A = String, S = "length", p = 255, O = "charCodeAt", I = "slice", q = "replace";
    for (o[I](-2), o = o[I](0, -2)[q](/\s/g, "")[q]("z", "!!!!!"), f = [], g = 0, b = (o += l = "uuuuu"[I](o[S] % 5 || 5))[S]; b > g; g += 5) h = 52200625 * (o[O](g) - 33) + 614125 * (o[O](g + 1) - 33) + 7225 * (o[O](g + 2) - 33) + 85 * (o[O](g + 3) - 33) + (o[O](g + 4) - 33), f.push(p & h >> 24, p & h >> 16, p & h >> 8, p & h);
    return function(_, B) {
      for (var X = B; X > 0; X--) _.pop();
    }(f, l[S]), A.fromCharCode.apply(A, f);
  }, a = function(o) {
    var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), o.length % 2 && (o += "0"), l.test(o) === !1) return "";
    for (var h = "", f = 0; f < o.length; f += 2) h += String.fromCharCode("0x" + (o[f] + o[f + 1]));
    return h;
  }, u = function(o) {
    for (var l = new Uint8Array(o.length), h = o.length; h--; ) l[h] = o.charCodeAt(h);
    return o = (l = ps(l)).reduce(function(f, g) {
      return f + String.fromCharCode(g);
    }, "");
  };
  r.processDataByFilters = function(o, l) {
    var h = 0, f = o || "", g = [];
    for (typeof (l = l || []) == "string" && (l = [l]), h = 0; h < l.length; h += 1) switch (l[h]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        f = n(f), g.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        f = e(f), g.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        f = a(f), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(b) {
          return ("0" + b.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", g.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        f = u(f), g.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + l[h] + '" is not implemented');
    }
    return { data: f, reverseChain: g.reverse().join(" ") };
  };
}(Ut.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  r.loadFile = function(e, n, a) {
    return function(u, o, l) {
      o = o !== !1, l = typeof l == "function" ? l : function() {
      };
      var h = void 0;
      try {
        h = function(f, g, b) {
          var A = new XMLHttpRequest(), S = 0, p = function(O) {
            var I = O.length, q = [], _ = String.fromCharCode;
            for (S = 0; S < I; S += 1) q.push(_(255 & O.charCodeAt(S)));
            return q.join("");
          };
          if (A.open("GET", f, !g), A.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (A.onload = function() {
            A.status === 200 ? b(p(this.responseText)) : b(void 0);
          }), A.send(null), g && A.status === 200) return p(A.responseText);
        }(u, o, l);
      } catch {
      }
      return h;
    }(e, n, a);
  }, r.loadImageFile = r.loadFile;
}(Ut.API), function(r) {
  function e() {
    return (Ht.html2canvas ? Promise.resolve(Ht.html2canvas) : import("./html2canvas.esm-d2sM-0Wm.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load html2canvas: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  function n() {
    return (Ht.DOMPurify ? Promise.resolve(Ht.DOMPurify) : import("./purify.es-B7BPtUgm.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load dompurify: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  var a = function(l) {
    var h = fe(l);
    return h === "undefined" ? "undefined" : h === "string" || l instanceof String ? "string" : h === "number" || l instanceof Number ? "number" : h === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, u = function(l, h) {
    var f = document.createElement(l);
    for (var g in h.className && (f.className = h.className), h.innerHTML && h.dompurify && (f.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) f.style[g] = h.style[g];
    return f;
  }, o = function l(h) {
    var f = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), g = l.convert(Promise.resolve(), f);
    return g = (g = g.setProgress(1, l, 1, [l])).set(h);
  };
  (o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(l, h) {
    return l.__proto__ = h || o.prototype, l;
  }, o.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, o.prototype.from = function(l, h) {
    return this.then(function() {
      switch (h = h || function(f) {
        switch (a(f)) {
          case "string":
            return "string";
          case "element":
            return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(l)) {
        case "string":
          return this.then(n).then(function(f) {
            return this.set({ src: u("div", { innerHTML: l, dompurify: f }) });
          });
        case "element":
          return this.set({ src: l });
        case "canvas":
          return this.set({ canvas: l });
        case "img":
          return this.set({ img: l });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, o.prototype.to = function(l) {
    switch (l) {
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
      var l = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function f(g, b) {
        for (var A = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1), S = g.firstChild; S; S = S.nextSibling) b !== !0 && S.nodeType === 1 && S.nodeName === "SCRIPT" || A.appendChild(f(S, b));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (A.width = g.width, A.height = g.height, A.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (A.value = g.value), A.addEventListener("load", function() {
          A.scrollTop = g.scrollTop, A.scrollLeft = g.scrollLeft;
        }, !0)), A;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = u("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = u("div", { className: "html2pdf__container", style: l }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(u("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, o.prototype.toCanvas = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(h) {
      var f = Object.assign({}, this.opt.html2canvas);
      return delete f.onrendered, h(this.prop.container, f);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toContext2d = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(e).then(function(h) {
      var f = this.opt.jsPDF, g = this.opt.fontFaces, b = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, A = Object.assign({ async: !0, allowTaint: !0, scale: b, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete A.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = g, g) for (var S = 0; S < g.length; ++S) {
        var p = g[S], O = p.src.find(function(I) {
          return I.format === "truetype";
        });
        O && f.addFont(O.url, p.ref.name, p.ref.style);
      }
      return A.windowHeight = A.windowHeight || 0, A.windowHeight = A.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : A.windowHeight, f.context2d.save(!0), h(this.prop.container, A);
    }).then(function(h) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = l;
    });
  }, o.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, o.prototype.output = function(l, h, f) {
    return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(l, h) : this.outputPdf(l, h);
  }, o.prototype.outputPdf = function(l, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(l, h);
    });
  }, o.prototype.outputImg = function(l) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (l) {
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
          throw 'Image output type "' + l + '" is not supported.';
      }
    });
  }, o.prototype.save = function(l) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(l ? { filename: l } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, o.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, o.prototype.set = function(l) {
    if (a(l) !== "object") return this;
    var h = Object.keys(l || {}).map(function(f) {
      if (f in o.template.prop) return function() {
        this.prop[f] = l[f];
      };
      switch (f) {
        case "margin":
          return this.setMargin.bind(this, l.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = l.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, l.pageSize);
        default:
          return function() {
            this.opt[f] = l[f];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, o.prototype.get = function(l, h) {
    return this.then(function() {
      var f = l in o.template.prop ? this.prop[l] : this.opt[l];
      return h ? h(f) : f;
    });
  }, o.prototype.setMargin = function(l) {
    return this.then(function() {
      switch (a(l)) {
        case "number":
          l = [l, l, l, l];
        case "array":
          if (l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = l;
    }).then(this.setPageSize);
  }, o.prototype.setPageSize = function(l) {
    function h(f, g) {
      return Math.floor(f * g / 72 * 96);
    }
    return this.then(function() {
      (l = l || Ut.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = { width: l.width - this.opt.margin[1] - this.opt.margin[3], height: l.height - this.opt.margin[0] - this.opt.margin[2] }, l.inner.px = { width: h(l.inner.width, l.k), height: h(l.inner.height, l.k) }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
    });
  }, o.prototype.setProgress = function(l, h, f, g) {
    return l != null && (this.progress.val = l), h != null && (this.progress.state = h), f != null && (this.progress.n = f), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, o.prototype.updateProgress = function(l, h, f, g) {
    return this.setProgress(l ? this.progress.val + l : null, h || null, f ? this.progress.n + f : null, g ? this.progress.stack.concat(g) : null);
  }, o.prototype.then = function(l, h) {
    var f = this;
    return this.thenCore(l, h, function(g, b) {
      return f.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(A) {
        return f.updateProgress(null, g), A;
      }).then(g, b).then(function(A) {
        return f.updateProgress(1), A;
      });
    });
  }, o.prototype.thenCore = function(l, h, f) {
    f = f || Promise.prototype.then, l && (l = l.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), b = f.call(g, l, h);
    return o.convert(b, this.__proto__);
  }, o.prototype.thenExternal = function(l, h) {
    return Promise.prototype.then.call(this, l, h);
  }, o.prototype.thenList = function(l) {
    var h = this;
    return l.forEach(function(f) {
      h = h.thenCore(f);
    }), h;
  }, o.prototype.catch = function(l) {
    l && (l = l.bind(this));
    var h = Promise.prototype.catch.call(this, l);
    return o.convert(h, this);
  }, o.prototype.catchExternal = function(l) {
    return Promise.prototype.catch.call(this, l);
  }, o.prototype.error = function(l) {
    return this.then(function() {
      throw new Error(l);
    });
  }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, Ut.getPageSize = function(l, h, f) {
    if (fe(l) === "object") {
      var g = l;
      l = g.orientation, h = g.unit || h, f = g.format || f;
    }
    h = h || "mm", f = f || "a4", l = ("" + (l || "P")).toLowerCase();
    var b, A = ("" + f).toLowerCase(), S = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
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
    if (S.hasOwnProperty(A)) O = S[A][1] / b, I = S[A][0] / b;
    else try {
      O = f[1], I = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (l === "p" || l === "portrait") l = "p", I > O && (p = I, I = O, O = p);
    else {
      if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
      l = "l", O > I && (p = I, I = O, O = p);
    }
    return { width: I, height: O, unit: h, k: b, orientation: l };
  }, r.html = function(l, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(ys) : null;
    var f = new o(h);
    return h.worker ? f : f.from(l).doCallback();
  };
}(Ut.API), Ut.API.addJS = function(r) {
  return vu = r, this.internal.events.subscribe("postPutResources", function() {
    $a = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + ($a + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), mu = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + vu + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    $a !== void 0 && mu !== void 0 && this.internal.out("/Names <</JavaScript " + $a + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e;
  r.events.push(["postPutResources", function() {
    var n = this, a = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var u = n.outline.render().split(/\r\n/), o = 0; o < u.length; o++) {
      var l = u[o], h = a.exec(l);
      if (h != null) {
        var f = h[1];
        n.internal.newObjectDeferredBegin(f, !1);
      }
      n.internal.write(l);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, b = [];
      for (o = 0; o < g; o++) {
        var A = n.internal.newObject();
        b.push(A);
        var S = n.internal.getPageInfo(o + 1);
        n.internal.write("<< /D[" + S.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var p = n.internal.newObject();
      for (n.internal.write("<< /Names [ "), o = 0; o < b.length; o++) n.internal.write("(page_" + (o + 1) + ")" + b[o] + " 0 R");
      n.internal.write(" ] >>", "endobj"), e = n.internal.newObject(), n.internal.write("<< /Dests " + p + " 0 R"), n.internal.write(">>", "endobj");
    }
  }]), r.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
  }]), r.events.push(["initialized", function() {
    var n = this;
    n.outline = { createNamedDestinations: !1, root: { children: [] } }, n.outline.add = function(a, u, o) {
      var l = { title: u, options: o, children: [] };
      return a == null && (a = this.root), a.children.push(l), l;
    }, n.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = n, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, n.outline.genIds_r = function(a) {
      a.id = n.internal.newObjectDeferred();
      for (var u = 0; u < a.children.length; u++) this.genIds_r(a.children[u]);
    }, n.outline.renderRoot = function(a) {
      this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, a)), this.objEnd();
    }, n.outline.renderItems = function(a) {
      for (var u = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < a.children.length; o++) {
        var l = a.children[o];
        this.objStart(l), this.line("/Title " + this.makeString(l.title)), this.line("/Parent " + this.makeRef(a)), o > 0 && this.line("/Prev " + this.makeRef(a.children[o - 1])), o < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[o + 1])), l.children.length > 0 && (this.line("/First " + this.makeRef(l.children[0])), this.line("/Last " + this.makeRef(l.children[l.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, l);
        if (h > 0 && this.line("/Count " + h), l.options && l.options.pageNumber) {
          var f = n.internal.getPageInfo(l.options.pageNumber);
          this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + u(0) + " 0]");
        }
        this.objEnd();
      }
      for (var g = 0; g < a.children.length; g++) this.renderItems(a.children[g]);
    }, n.outline.line = function(a) {
      this.ctx.val += a + `\r
`;
    }, n.outline.makeRef = function(a) {
      return a.id + " 0 R";
    }, n.outline.makeString = function(a) {
      return "(" + n.internal.pdfEscape(a) + ")";
    }, n.outline.objStart = function(a) {
      this.ctx.val += `\r
` + a.id + ` 0 obj\r
<<\r
`;
    }, n.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, n.outline.count_r = function(a, u) {
      for (var o = 0; o < u.children.length; o++) a.count++, this.count_r(a, u.children[o]);
      return a.count;
    };
  }]);
}(Ut.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e = [192, 193, 194, 195, 196, 197, 198, 199];
  r.processJPEG = function(n, a, u, o, l, h) {
    var f, g = this.decode.DCT_DECODE, b = null;
    if (typeof n == "string" || this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) {
      switch (n = l || n, n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n, (f = function(A) {
        for (var S, p = 256 * A.charCodeAt(4) + A.charCodeAt(5), O = A.length, I = { width: 0, height: 0, numcomponents: 1 }, q = 4; q < O; q += 2) {
          if (q += p, e.indexOf(A.charCodeAt(q + 1)) !== -1) {
            S = 256 * A.charCodeAt(q + 5) + A.charCodeAt(q + 6), I = { width: 256 * A.charCodeAt(q + 7) + A.charCodeAt(q + 8), height: S, numcomponents: A.charCodeAt(q + 9) };
            break;
          }
          p = 256 * A.charCodeAt(q + 2) + A.charCodeAt(q + 3);
        }
        return I;
      }(n = this.__addimage__.isArrayBufferView(n) ? this.__addimage__.arrayBufferToBinaryString(n) : n)).numcomponents) {
        case 1:
          h = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          h = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          h = this.color_spaces.DEVICE_RGB;
      }
      b = { data: n, width: f.width, height: f.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: a, alias: u };
    }
    return b;
  };
}(Ut.API);
var Li, Qa, bu, wu, yu, l1 = function() {
  var r, e, n;
  function a(o) {
    var l, h, f, g, b, A, S, p, O, I, q, _, B, X;
    for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, A = null; ; ) {
      switch (l = this.readUInt32(), O = (function() {
        var ot, ct;
        for (ct = [], ot = 0; ot < 4; ++ot) ct.push(String.fromCharCode(this.data[this.pos++]));
        return ct;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(l);
          break;
        case "fcTL":
          A && this.animation.frames.push(A), this.pos += 4, A = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, b = this.readUInt16(), g = this.readUInt16() || 100, A.delay = 1e3 * b / g, A.disposeOp = this.data[this.pos++], A.blendOp = this.data[this.pos++], A.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (O === "fdAT" && (this.pos += 4, l -= 4), o = (A != null ? A.data : void 0) || this.imgData, _ = 0; 0 <= l ? _ < l : _ > l; 0 <= l ? ++_ : --_) o.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(l), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((I = f - this.transparency.indexed.length) > 0) for (B = 0; 0 <= I ? B < I : B > I; 0 <= I ? ++B : --B) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(l)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(l);
          }
          break;
        case "tEXt":
          S = (q = this.read(l)).indexOf(0), p = String.fromCharCode.apply(String, q.slice(0, S)), this.text[p] = String.fromCharCode.apply(String, q.slice(S + 1));
          break;
        case "IEND":
          return A && this.animation.frames.push(A), this.colors = (function() {
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
          this.pos += l;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  a.prototype.read = function(o) {
    var l, h;
    for (h = [], l = 0; 0 <= o ? l < o : l > o; 0 <= o ? ++l : --l) h.push(this.data[this.pos++]);
    return h;
  }, a.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.decodePixels = function(o) {
    var l = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * l), f = 0, g = this;
    if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
    function b(A, S, p, O) {
      var I, q, _, B, X, ot, ct, wt, tt, R, gt, dt, F, P, z, D, at, nt, lt, $, ft, ht = Math.ceil((g.width - A) / p), kt = Math.ceil((g.height - S) / O), L = g.width == ht && g.height == kt;
      for (P = l * ht, dt = L ? h : new Uint8Array(P * kt), ot = o.length, F = 0, q = 0; F < kt && f < ot; ) {
        switch (o[f++]) {
          case 0:
            for (B = at = 0; at < P; B = at += 1) dt[q++] = o[f++];
            break;
          case 1:
            for (B = nt = 0; nt < P; B = nt += 1) I = o[f++], X = B < l ? 0 : dt[q - l], dt[q++] = (I + X) % 256;
            break;
          case 2:
            for (B = lt = 0; lt < P; B = lt += 1) I = o[f++], _ = (B - B % l) / l, z = F && dt[(F - 1) * P + _ * l + B % l], dt[q++] = (z + I) % 256;
            break;
          case 3:
            for (B = $ = 0; $ < P; B = $ += 1) I = o[f++], _ = (B - B % l) / l, X = B < l ? 0 : dt[q - l], z = F && dt[(F - 1) * P + _ * l + B % l], dt[q++] = (I + Math.floor((X + z) / 2)) % 256;
            break;
          case 4:
            for (B = ft = 0; ft < P; B = ft += 1) I = o[f++], _ = (B - B % l) / l, X = B < l ? 0 : dt[q - l], F === 0 ? z = D = 0 : (z = dt[(F - 1) * P + _ * l + B % l], D = _ && dt[(F - 1) * P + (_ - 1) * l + B % l]), ct = X + z - D, wt = Math.abs(ct - X), R = Math.abs(ct - z), gt = Math.abs(ct - D), tt = wt <= R && wt <= gt ? X : R <= gt ? z : D, dt[q++] = (I + tt) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + o[f - 1]);
        }
        if (!L) {
          var j = ((S + F * O) * g.width + A) * l, M = F * P;
          for (B = 0; B < ht; B += 1) {
            for (var W = 0; W < l; W += 1) h[j++] = dt[M++];
            j += (p - 1) * l;
          }
        }
        F++;
      }
    }
    return o = Wc(o), g.interlaceMethod == 1 ? (b(0, 0, 8, 8), b(4, 0, 8, 8), b(0, 4, 4, 8), b(2, 0, 4, 4), b(0, 2, 2, 4), b(1, 0, 2, 2), b(0, 1, 1, 2)) : b(0, 0, 1, 1), h;
  }, a.prototype.decodePalette = function() {
    var o, l, h, f, g, b, A, S, p;
    for (h = this.palette, b = this.transparency.indexed || [], g = new Uint8Array((b.length || 0) + h.length), f = 0, o = 0, l = A = 0, S = h.length; A < S; l = A += 3) g[f++] = h[l], g[f++] = h[l + 1], g[f++] = h[l + 2], g[f++] = (p = b[o++]) != null ? p : 255;
    return g;
  }, a.prototype.copyToImageData = function(o, l) {
    var h, f, g, b, A, S, p, O, I, q, _;
    if (f = this.colors, I = null, h = this.hasAlphaChannel, this.palette.length && (I = (_ = this._decodedPalette) != null ? _ : this._decodedPalette = this.decodePalette(), f = 4, h = !0), O = (g = o.data || o).length, A = I || l, b = S = 0, f === 1) for (; b < O; ) p = I ? 4 * l[b / 4] : S, q = A[p++], g[b++] = q, g[b++] = q, g[b++] = q, g[b++] = h ? A[p++] : 255, S = p;
    else for (; b < O; ) p = I ? 4 * l[b / 4] : S, g[b++] = A[p++], g[b++] = A[p++], g[b++] = A[p++], g[b++] = h ? A[p++] : 255, S = p;
  }, a.prototype.decode = function() {
    var o;
    return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), o;
  };
  var u = function() {
    if (Object.prototype.toString.call(Ht) === "[object Window]") {
      try {
        e = Ht.document.createElement("canvas"), n = e.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return u(), r = function(o) {
    var l;
    if (u() === !0) return n.width = o.width, n.height = o.height, n.clearRect(0, 0, o.width, o.height), n.putImageData(o, 0, 0), (l = new Image()).src = e.toDataURL(), l;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, a.prototype.decodeFrames = function(o) {
    var l, h, f, g, b, A, S, p;
    if (this.animation) {
      for (p = [], h = b = 0, A = (S = this.animation.frames).length; b < A; h = ++b) l = S[h], f = o.createImageData(l.width, l.height), g = this.decodePixels(new Uint8Array(l.data)), this.copyToImageData(f, g), l.imageData = f, p.push(l.image = r(f));
      return p;
    }
  }, a.prototype.renderFrame = function(o, l) {
    var h, f, g;
    return h = (f = this.animation.frames)[l], g = f[l - 1], l === 0 && o.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && o.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), o.drawImage(h.image, h.xOffset, h.yOffset);
  }, a.prototype.animate = function(o) {
    var l, h, f, g, b, A, S = this;
    return h = 0, A = this.animation, g = A.numFrames, f = A.frames, b = A.numPlays, (l = function() {
      var p, O;
      if (p = h++ % g, O = f[p], S.renderFrame(o, p), g > 1 && h / g < b) return S.animation._timeout = setTimeout(l, O.delay);
    })();
  }, a.prototype.stopAnimation = function() {
    var o;
    return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
  }, a.prototype.render = function(o) {
    var l, h;
    return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, o.height = this.height, l = o.getContext("2d"), this.animation ? (this.decodeFrames(l), this.animate(l)) : (h = l.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), l.putImageData(h, 0, 0));
  }, a;
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
function h1(r) {
  var e = 0;
  if (r[e++] !== 71 || r[e++] !== 73 || r[e++] !== 70 || r[e++] !== 56 || (r[e++] + 1 & 253) != 56 || r[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var n = r[e++] | r[e++] << 8, a = r[e++] | r[e++] << 8, u = r[e++], o = u >> 7, l = 1 << (7 & u) + 1;
  r[e++], r[e++];
  var h = null, f = null;
  o && (h = e, f = l, e += 3 * l);
  var g = !0, b = [], A = 0, S = null, p = 0, O = null;
  for (this.width = n, this.height = a; g && e < r.length; ) switch (r[e++]) {
    case 33:
      switch (r[e++]) {
        case 255:
          if (r[e] !== 11 || r[e + 1] == 78 && r[e + 2] == 69 && r[e + 3] == 84 && r[e + 4] == 83 && r[e + 5] == 67 && r[e + 6] == 65 && r[e + 7] == 80 && r[e + 8] == 69 && r[e + 9] == 50 && r[e + 10] == 46 && r[e + 11] == 48 && r[e + 12] == 3 && r[e + 13] == 1 && r[e + 16] == 0) e += 14, O = r[e++] | r[e++] << 8, e++;
          else for (e += 12; ; ) {
            if (!((F = r[e++]) >= 0)) throw Error("Invalid block size");
            if (F === 0) break;
            e += F;
          }
          break;
        case 249:
          if (r[e++] !== 4 || r[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var I = r[e++];
          A = r[e++] | r[e++] << 8, S = r[e++], !(1 & I) && (S = null), p = I >> 2 & 7, e++;
          break;
        case 254:
          for (; ; ) {
            if (!((F = r[e++]) >= 0)) throw Error("Invalid block size");
            if (F === 0) break;
            e += F;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + r[e - 1].toString(16));
      }
      break;
    case 44:
      var q = r[e++] | r[e++] << 8, _ = r[e++] | r[e++] << 8, B = r[e++] | r[e++] << 8, X = r[e++] | r[e++] << 8, ot = r[e++], ct = ot >> 6 & 1, wt = 1 << (7 & ot) + 1, tt = h, R = f, gt = !1;
      ot >> 7 && (gt = !0, tt = e, R = wt, e += 3 * wt);
      var dt = e;
      for (e++; ; ) {
        var F;
        if (!((F = r[e++]) >= 0)) throw Error("Invalid block size");
        if (F === 0) break;
        e += F;
      }
      b.push({ x: q, y: _, width: B, height: X, has_local_palette: gt, palette_offset: tt, palette_size: R, data_offset: dt, data_length: e - dt, transparent_index: S, interlaced: !!ct, delay: A, disposal: p });
      break;
    case 59:
      g = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + r[e - 1].toString(16));
  }
  this.numFrames = function() {
    return b.length;
  }, this.loopCount = function() {
    return O;
  }, this.frameInfo = function(P) {
    if (P < 0 || P >= b.length) throw new Error("Frame index out of range.");
    return b[P];
  }, this.decodeAndBlitFrameBGRA = function(P, z) {
    var D = this.frameInfo(P), at = D.width * D.height, nt = new Uint8Array(at);
    Lu(r, D.data_offset, nt, at);
    var lt = D.palette_offset, $ = D.transparent_index;
    $ === null && ($ = 256);
    var ft = D.width, ht = n - ft, kt = ft, L = 4 * (D.y * n + D.x), j = 4 * ((D.y + D.height) * n + D.x), M = L, W = 4 * ht;
    D.interlaced === !0 && (W += 4 * n * 7);
    for (var Y = 8, Q = 0, et = nt.length; Q < et; ++Q) {
      var rt = nt[Q];
      if (kt === 0 && (kt = ft, (M += W) >= j && (W = 4 * ht + 4 * n * (Y - 1), M = L + (ft + ht) * (Y << 1), Y >>= 1)), rt === $) M += 4;
      else {
        var At = r[lt + 3 * rt], Nt = r[lt + 3 * rt + 1], Ct = r[lt + 3 * rt + 2];
        z[M++] = Ct, z[M++] = Nt, z[M++] = At, z[M++] = 255;
      }
      --kt;
    }
  }, this.decodeAndBlitFrameRGBA = function(P, z) {
    var D = this.frameInfo(P), at = D.width * D.height, nt = new Uint8Array(at);
    Lu(r, D.data_offset, nt, at);
    var lt = D.palette_offset, $ = D.transparent_index;
    $ === null && ($ = 256);
    var ft = D.width, ht = n - ft, kt = ft, L = 4 * (D.y * n + D.x), j = 4 * ((D.y + D.height) * n + D.x), M = L, W = 4 * ht;
    D.interlaced === !0 && (W += 4 * n * 7);
    for (var Y = 8, Q = 0, et = nt.length; Q < et; ++Q) {
      var rt = nt[Q];
      if (kt === 0 && (kt = ft, (M += W) >= j && (W = 4 * ht + 4 * n * (Y - 1), M = L + (ft + ht) * (Y << 1), Y >>= 1)), rt === $) M += 4;
      else {
        var At = r[lt + 3 * rt], Nt = r[lt + 3 * rt + 1], Ct = r[lt + 3 * rt + 2];
        z[M++] = At, z[M++] = Nt, z[M++] = Ct, z[M++] = 255;
      }
      --kt;
    }
  };
}
function Lu(r, e, n, a) {
  for (var u = r[e++], o = 1 << u, l = o + 1, h = l + 1, f = u + 1, g = (1 << f) - 1, b = 0, A = 0, S = 0, p = r[e++], O = new Int32Array(4096), I = null; ; ) {
    for (; b < 16 && p !== 0; ) A |= r[e++] << b, b += 8, p === 1 ? p = r[e++] : --p;
    if (b < f) break;
    var q = A & g;
    if (A >>= f, b -= f, q !== o) {
      if (q === l) break;
      for (var _ = q < h ? q : I, B = 0, X = _; X > o; ) X = O[X] >> 8, ++B;
      var ot = X;
      if (S + B + (_ !== q ? 1 : 0) > a) return void ve.log("Warning, gif stream longer than expected.");
      n[S++] = ot;
      var ct = S += B;
      for (_ !== q && (n[S++] = ot), X = _; B--; ) X = O[X], n[--ct] = 255 & X, X >>= 8;
      I !== null && h < 4096 && (O[h++] = I << 8 | ot, h >= g + 1 && f < 12 && (++f, g = g << 1 | 1)), I = q;
    } else h = l + 1, g = (1 << (f = u + 1)) - 1, I = null;
  }
  return S !== a && ve.log("Warning, gif stream shorter than expected."), n;
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
function us(r) {
  var e, n, a, u, o, l = Math.floor, h = new Array(64), f = new Array(64), g = new Array(64), b = new Array(64), A = new Array(65535), S = new Array(65535), p = new Array(64), O = new Array(64), I = [], q = 0, _ = 7, B = new Array(64), X = new Array(64), ot = new Array(64), ct = new Array(256), wt = new Array(2048), tt = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], R = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], gt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], dt = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], F = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], D = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], at = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function nt(L, j) {
    for (var M = 0, W = 0, Y = new Array(), Q = 1; Q <= 16; Q++) {
      for (var et = 1; et <= L[Q]; et++) Y[j[W]] = [], Y[j[W]][0] = M, Y[j[W]][1] = Q, W++, M++;
      M *= 2;
    }
    return Y;
  }
  function lt(L) {
    for (var j = L[0], M = L[1] - 1; M >= 0; ) j & 1 << M && (q |= 1 << _), M--, --_ < 0 && (q == 255 ? ($(255), $(0)) : $(q), _ = 7, q = 0);
  }
  function $(L) {
    I.push(L);
  }
  function ft(L) {
    $(L >> 8 & 255), $(255 & L);
  }
  function ht(L, j, M, W, Y) {
    for (var Q, et = Y[0], rt = Y[240], At = function(Lt, xt) {
      var Ft, Pt, qt, Gt, $t, te, ie, de, Wt, ee, It = 0;
      for (Wt = 0; Wt < 8; ++Wt) {
        Ft = Lt[It], Pt = Lt[It + 1], qt = Lt[It + 2], Gt = Lt[It + 3], $t = Lt[It + 4], te = Lt[It + 5], ie = Lt[It + 6];
        var Ve = Ft + (de = Lt[It + 7]), oe = Ft - de, yn = Pt + ie, ge = Pt - ie, Le = qt + te, Rn = qt - te, ue = Gt + $t, jr = Gt - $t, Ae = Ve + ue, Ln = Ve - ue, $n = yn + Le, xe = yn - Le;
        Lt[It] = Ae + $n, Lt[It + 4] = Ae - $n;
        var Yt = 0.707106781 * (xe + Ln);
        Lt[It + 2] = Ln + Yt, Lt[It + 6] = Ln - Yt;
        var ce = 0.382683433 * ((Ae = jr + Rn) - (xe = ge + oe)), Or = 0.5411961 * Ae + ce, He = 1.306562965 * xe + ce, Tn = 0.707106781 * ($n = Rn + ge), zn = oe + Tn, Tt = oe - Tn;
        Lt[It + 5] = Tt + Or, Lt[It + 3] = Tt - Or, Lt[It + 1] = zn + He, Lt[It + 7] = zn - He, It += 8;
      }
      for (It = 0, Wt = 0; Wt < 8; ++Wt) {
        Ft = Lt[It], Pt = Lt[It + 8], qt = Lt[It + 16], Gt = Lt[It + 24], $t = Lt[It + 32], te = Lt[It + 40], ie = Lt[It + 48];
        var Nn = Ft + (de = Lt[It + 56]), Un = Ft - de, tn = Pt + ie, qe = Pt - ie, Oe = qt + te, cn = qt - te, Gr = Gt + $t, Qn = Gt - $t, An = Nn + Gr, xn = Nn - Gr, Sn = tn + Oe, Hn = tn - Oe;
        Lt[It] = An + Sn, Lt[It + 32] = An - Sn;
        var pn = 0.707106781 * (Hn + xn);
        Lt[It + 16] = xn + pn, Lt[It + 48] = xn - pn;
        var Wn = 0.382683433 * ((An = Qn + cn) - (Hn = qe + Un)), Br = 0.5411961 * An + Wn, Yr = 1.306562965 * Hn + Wn, Jr = 0.707106781 * (Sn = cn + qe), Xr = Un + Jr, Kr = Un - Jr;
        Lt[It + 40] = Kr + Br, Lt[It + 24] = Kr - Br, Lt[It + 8] = Xr + Yr, Lt[It + 56] = Xr - Yr, It++;
      }
      for (Wt = 0; Wt < 64; ++Wt) ee = Lt[Wt] * xt[Wt], p[Wt] = ee > 0 ? ee + 0.5 | 0 : ee - 0.5 | 0;
      return p;
    }(L, j), Nt = 0; Nt < 64; ++Nt) O[tt[Nt]] = At[Nt];
    var Ct = O[0] - M;
    M = O[0], Ct == 0 ? lt(W[0]) : (lt(W[S[Q = 32767 + Ct]]), lt(A[Q]));
    for (var Bt = 63; Bt > 0 && O[Bt] == 0; ) Bt--;
    if (Bt == 0) return lt(et), M;
    for (var zt, ut = 1; ut <= Bt; ) {
      for (var E = ut; O[ut] == 0 && ut <= Bt; ) ++ut;
      var Xt = ut - E;
      if (Xt >= 16) {
        zt = Xt >> 4;
        for (var Et = 1; Et <= zt; ++Et) lt(rt);
        Xt &= 15;
      }
      Q = 32767 + O[ut], lt(Y[(Xt << 4) + S[Q]]), lt(A[Q]), ut++;
    }
    return Bt != 63 && lt(et), M;
  }
  function kt(L) {
    L = Math.min(Math.max(L, 1), 100), o != L && (function(j) {
      for (var M = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], W = 0; W < 64; W++) {
        var Y = l((M[W] * j + 50) / 100);
        Y = Math.min(Math.max(Y, 1), 255), h[tt[W]] = Y;
      }
      for (var Q = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], et = 0; et < 64; et++) {
        var rt = l((Q[et] * j + 50) / 100);
        rt = Math.min(Math.max(rt, 1), 255), f[tt[et]] = rt;
      }
      for (var At = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], Nt = 0, Ct = 0; Ct < 8; Ct++) for (var Bt = 0; Bt < 8; Bt++) g[Nt] = 1 / (h[tt[Nt]] * At[Ct] * At[Bt] * 8), b[Nt] = 1 / (f[tt[Nt]] * At[Ct] * At[Bt] * 8), Nt++;
    }(L < 50 ? Math.floor(5e3 / L) : Math.floor(200 - 2 * L)), o = L);
  }
  this.encode = function(L, j) {
    j && kt(j), I = new Array(), q = 0, _ = 7, ft(65496), ft(65504), ft(16), $(74), $(70), $(73), $(70), $(0), $(1), $(1), $(0), ft(1), ft(1), $(0), $(0), function() {
      ft(65499), ft(132), $(0);
      for (var Pt = 0; Pt < 64; Pt++) $(h[Pt]);
      $(1);
      for (var qt = 0; qt < 64; qt++) $(f[qt]);
    }(), function(Pt, qt) {
      ft(65472), ft(17), $(8), ft(qt), ft(Pt), $(3), $(1), $(17), $(0), $(2), $(17), $(1), $(3), $(17), $(1);
    }(L.width, L.height), function() {
      ft(65476), ft(418), $(0);
      for (var Pt = 0; Pt < 16; Pt++) $(R[Pt + 1]);
      for (var qt = 0; qt <= 11; qt++) $(gt[qt]);
      $(16);
      for (var Gt = 0; Gt < 16; Gt++) $(dt[Gt + 1]);
      for (var $t = 0; $t <= 161; $t++) $(F[$t]);
      $(1);
      for (var te = 0; te < 16; te++) $(P[te + 1]);
      for (var ie = 0; ie <= 11; ie++) $(z[ie]);
      $(17);
      for (var de = 0; de < 16; de++) $(D[de + 1]);
      for (var Wt = 0; Wt <= 161; Wt++) $(at[Wt]);
    }(), ft(65498), ft(12), $(3), $(1), $(0), $(2), $(17), $(3), $(17), $(0), $(63), $(0);
    var M = 0, W = 0, Y = 0;
    q = 0, _ = 7, this.encode.displayName = "_encode_";
    for (var Q, et, rt, At, Nt, Ct, Bt, zt, ut, E = L.data, Xt = L.width, Et = L.height, Lt = 4 * Xt, xt = 0; xt < Et; ) {
      for (Q = 0; Q < Lt; ) {
        for (Nt = Lt * xt + Q, Bt = -1, zt = 0, ut = 0; ut < 64; ut++) Ct = Nt + (zt = ut >> 3) * Lt + (Bt = 4 * (7 & ut)), xt + zt >= Et && (Ct -= Lt * (xt + 1 + zt - Et)), Q + Bt >= Lt && (Ct -= Q + Bt - Lt + 4), et = E[Ct++], rt = E[Ct++], At = E[Ct++], B[ut] = (wt[et] + wt[rt + 256 >> 0] + wt[At + 512 >> 0] >> 16) - 128, X[ut] = (wt[et + 768 >> 0] + wt[rt + 1024 >> 0] + wt[At + 1280 >> 0] >> 16) - 128, ot[ut] = (wt[et + 1280 >> 0] + wt[rt + 1536 >> 0] + wt[At + 1792 >> 0] >> 16) - 128;
        M = ht(B, g, M, e, a), W = ht(X, b, W, n, u), Y = ht(ot, b, Y, n, u), Q += 32;
      }
      xt += 8;
    }
    if (_ >= 0) {
      var Ft = [];
      Ft[1] = _ + 1, Ft[0] = (1 << _ + 1) - 1, lt(Ft);
    }
    return ft(65497), new Uint8Array(I);
  }, r = r || 50, function() {
    for (var L = String.fromCharCode, j = 0; j < 256; j++) ct[j] = L(j);
  }(), e = nt(R, gt), n = nt(P, z), a = nt(dt, F), u = nt(D, at), function() {
    for (var L = 1, j = 2, M = 1; M <= 15; M++) {
      for (var W = L; W < j; W++) S[32767 + W] = M, A[32767 + W] = [], A[32767 + W][1] = M, A[32767 + W][0] = W;
      for (var Y = -(j - 1); Y <= -L; Y++) S[32767 + Y] = M, A[32767 + Y] = [], A[32767 + Y][1] = M, A[32767 + Y][0] = j - 1 + Y;
      L <<= 1, j <<= 1;
    }
  }(), function() {
    for (var L = 0; L < 256; L++) wt[L] = 19595 * L, wt[L + 256 >> 0] = 38470 * L, wt[L + 512 >> 0] = 7471 * L + 32768, wt[L + 768 >> 0] = -11059 * L, wt[L + 1024 >> 0] = -21709 * L, wt[L + 1280 >> 0] = 32768 * L + 8421375, wt[L + 1536 >> 0] = -27439 * L, wt[L + 1792 >> 0] = -5329 * L;
  }(), kt(r);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function En(r, e) {
  if (this.pos = 0, this.buffer = r, this.datav = new DataView(r.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Nu(r) {
  function e(R) {
    if (!R) throw Error("assert :P");
  }
  function n(R, gt, dt) {
    for (var F = 0; 4 > F; F++) if (R[gt + F] != dt.charCodeAt(F)) return !0;
    return !1;
  }
  function a(R, gt, dt, F, P) {
    for (var z = 0; z < P; z++) R[gt + z] = dt[F + z];
  }
  function u(R, gt, dt, F) {
    for (var P = 0; P < F; P++) R[gt + P] = dt;
  }
  function o(R) {
    return new Int32Array(R);
  }
  function l(R, gt) {
    for (var dt = [], F = 0; F < R; F++) dt.push(new gt());
    return dt;
  }
  function h(R, gt) {
    var dt = [];
    return function F(P, z, D) {
      for (var at = D[z], nt = 0; nt < at && (P.push(D.length > z + 1 ? [] : new gt()), !(D.length < z + 1)); nt++) F(P[nt], z + 1, D);
    }(dt, 0, R), dt;
  }
  var f = function() {
    var R = this;
    function gt(t, i) {
      for (var c = 1 << i - 1 >>> 0; t & c; ) c >>>= 1;
      return c ? (t & c - 1) + c : t;
    }
    function dt(t, i, c, d, m) {
      e(!(d % c));
      do
        t[i + (d -= c)] = m;
      while (0 < d);
    }
    function F(t, i, c, d, m) {
      if (e(2328 >= m), 512 >= m) var w = o(512);
      else if ((w = o(m)) == null) return 0;
      return function(y, N, x, k, U, K) {
        var Z, G, vt = N, it = 1 << x, H = o(16), V = o(16);
        for (e(U != 0), e(k != null), e(y != null), e(0 < x), G = 0; G < U; ++G) {
          if (15 < k[G]) return 0;
          ++H[k[G]];
        }
        if (H[0] == U) return 0;
        for (V[1] = 0, Z = 1; 15 > Z; ++Z) {
          if (H[Z] > 1 << Z) return 0;
          V[Z + 1] = V[Z] + H[Z];
        }
        for (G = 0; G < U; ++G) Z = k[G], 0 < k[G] && (K[V[Z]++] = G);
        if (V[15] == 1) return (k = new P()).g = 0, k.value = K[0], dt(y, vt, 1, it, k), it;
        var pt, bt = -1, mt = it - 1, Ot = 0, St = 1, Rt = 1, _t = 1 << x;
        for (G = 0, Z = 1, U = 2; Z <= x; ++Z, U <<= 1) {
          if (St += Rt <<= 1, 0 > (Rt -= H[Z])) return 0;
          for (; 0 < H[Z]; --H[Z]) (k = new P()).g = Z, k.value = K[G++], dt(y, vt + Ot, U, _t, k), Ot = gt(Ot, Z);
        }
        for (Z = x + 1, U = 2; 15 >= Z; ++Z, U <<= 1) {
          if (St += Rt <<= 1, 0 > (Rt -= H[Z])) return 0;
          for (; 0 < H[Z]; --H[Z]) {
            if (k = new P(), (Ot & mt) != bt) {
              for (vt += _t, pt = 1 << (bt = Z) - x; 15 > bt && !(0 >= (pt -= H[bt])); ) ++bt, pt <<= 1;
              it += _t = 1 << (pt = bt - x), y[N + (bt = Ot & mt)].g = pt + x, y[N + bt].value = vt - N - bt;
            }
            k.g = Z - x, k.value = K[G++], dt(y, vt + (Ot >> x), U, _t, k), Ot = gt(Ot, Z);
          }
        }
        return St != 2 * V[15] - 1 ? 0 : it;
      }(t, i, c, d, m, w);
    }
    function P() {
      this.value = this.g = 0;
    }
    function z() {
      this.value = this.g = 0;
    }
    function D() {
      this.G = l(5, P), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = l(nn, z);
    }
    function at(t, i, c, d) {
      e(t != null), e(i != null), e(2147483648 > d), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = i, t.pa = c, t.Jd = i, t.Yc = c + d, t.Zc = 4 <= d ? c + d - 4 + 1 : c, Q(t);
    }
    function nt(t, i) {
      for (var c = 0; 0 < i--; ) c |= rt(t, 128) << i;
      return c;
    }
    function lt(t, i) {
      var c = nt(t, i);
      return et(t) ? -c : c;
    }
    function $(t, i, c, d) {
      var m, w = 0;
      for (e(t != null), e(i != null), e(4294967288 > d), t.Sb = d, t.Ra = 0, t.u = 0, t.h = 0, 4 < d && (d = 4), m = 0; m < d; ++m) w += i[c + m] << 8 * m;
      t.Ra = w, t.bb = d, t.oa = i, t.pa = c;
    }
    function ft(t) {
      for (; 8 <= t.u && t.bb < t.Sb; ) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << hi - 8 >>> 0, ++t.bb, t.u -= 8;
      M(t) && (t.h = 1, t.u = 0);
    }
    function ht(t, i) {
      if (e(0 <= i), !t.h && i <= li) {
        var c = j(t) & ci[i];
        return t.u += i, ft(t), c;
      }
      return t.h = 1, t.u = 0;
    }
    function kt() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function L() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function j(t) {
      return t.Ra >>> (t.u & hi - 1) >>> 0;
    }
    function M(t) {
      return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > hi;
    }
    function W(t, i) {
      t.u = i, t.h = M(t);
    }
    function Y(t) {
      t.u >= Yi && (e(t.u >= Yi), ft(t));
    }
    function Q(t) {
      e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
    }
    function et(t) {
      return nt(t, 1);
    }
    function rt(t, i) {
      var c = t.Ca;
      0 > t.b && Q(t);
      var d = t.b, m = c * i >>> 8, w = (t.I >>> d > m) + 0;
      for (w ? (c -= m, t.I -= m + 1 << d >>> 0) : c = m + 1, d = c, m = 0; 256 <= d; ) m += 8, d >>= 8;
      return d = 7 ^ m + rn[d], t.b -= d, t.Ca = (c << d) - 1, w;
    }
    function At(t, i, c) {
      t[i + 0] = c >> 24 & 255, t[i + 1] = c >> 16 & 255, t[i + 2] = c >> 8 & 255, t[i + 3] = c >> 0 & 255;
    }
    function Nt(t, i) {
      return t[i + 0] << 0 | t[i + 1] << 8;
    }
    function Ct(t, i) {
      return Nt(t, i) | t[i + 2] << 16;
    }
    function Bt(t, i) {
      return Nt(t, i) | Nt(t, i + 2) << 16;
    }
    function zt(t, i) {
      var c = 1 << i;
      return e(t != null), e(0 < i), t.X = o(c), t.X == null ? 0 : (t.Mb = 32 - i, t.Xa = i, 1);
    }
    function ut(t, i) {
      e(t != null), e(i != null), e(t.Xa == i.Xa), a(i.X, 0, t.X, 0, 1 << i.Xa);
    }
    function E() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Xt(t, i, c, d) {
      e(c != null), e(d != null);
      var m = c[0], w = d[0];
      return m == 0 && (m = (t * w + i / 2) / i), w == 0 && (w = (i * m + t / 2) / t), 0 >= m || 0 >= w ? 0 : (c[0] = m, d[0] = w, 1);
    }
    function Et(t, i) {
      return t + (1 << i) - 1 >>> i;
    }
    function Lt(t, i) {
      return ((4278255360 & t) + (4278255360 & i) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & i) >>> 0 & 16711935) >>> 0;
    }
    function xt(t, i) {
      R[i] = function(c, d, m, w, y, N, x) {
        var k;
        for (k = 0; k < y; ++k) {
          var U = R[t](N[x + k - 1], m, w + k);
          N[x + k] = Lt(c[d + k], U);
        }
      };
    }
    function Ft() {
      this.ud = this.hd = this.jd = 0;
    }
    function Pt(t, i) {
      return ((4278124286 & (t ^ i)) >>> 1) + (t & i) >>> 0;
    }
    function qt(t) {
      return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
    }
    function Gt(t, i) {
      return qt(t + (t - i + 0.5 >> 1));
    }
    function $t(t, i, c) {
      return Math.abs(i - c) - Math.abs(t - c);
    }
    function te(t, i, c, d, m, w, y) {
      for (d = w[y - 1], c = 0; c < m; ++c) w[y + c] = d = Lt(t[i + c], d);
    }
    function ie(t, i, c, d, m) {
      var w;
      for (w = 0; w < c; ++w) {
        var y = t[i + w], N = y >> 8 & 255, x = 16711935 & (x = (x = 16711935 & y) + ((N << 16) + N));
        d[m + w] = (4278255360 & y) + x >>> 0;
      }
    }
    function de(t, i) {
      i.jd = t >> 0 & 255, i.hd = t >> 8 & 255, i.ud = t >> 16 & 255;
    }
    function Wt(t, i, c, d, m, w) {
      var y;
      for (y = 0; y < d; ++y) {
        var N = i[c + y], x = N >>> 8, k = N, U = 255 & (U = (U = N >>> 16) + ((t.jd << 24 >> 24) * (x << 24 >> 24) >>> 5));
        k = 255 & (k = (k = k + ((t.hd << 24 >> 24) * (x << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (U << 24 >> 24) >>> 5)), m[w + y] = (4278255360 & N) + (U << 16) + k;
      }
    }
    function ee(t, i, c, d, m) {
      R[i] = function(w, y, N, x, k, U, K, Z, G) {
        for (x = K; x < Z; ++x) for (K = 0; K < G; ++K) k[U++] = m(N[d(w[y++])]);
      }, R[t] = function(w, y, N, x, k, U, K) {
        var Z = 8 >> w.b, G = w.Ea, vt = w.K[0], it = w.w;
        if (8 > Z) for (w = (1 << w.b) - 1, it = (1 << Z) - 1; y < N; ++y) {
          var H, V = 0;
          for (H = 0; H < G; ++H) H & w || (V = d(x[k++])), U[K++] = m(vt[V & it]), V >>= Z;
        }
        else R["VP8LMapColor" + c](x, k, vt, it, U, K, y, N, G);
      };
    }
    function It(t, i, c, d, m) {
      for (c = i + c; i < c; ) {
        var w = t[i++];
        d[m++] = w >> 16 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 0 & 255;
      }
    }
    function Ve(t, i, c, d, m) {
      for (c = i + c; i < c; ) {
        var w = t[i++];
        d[m++] = w >> 16 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 0 & 255, d[m++] = w >> 24 & 255;
      }
    }
    function oe(t, i, c, d, m) {
      for (c = i + c; i < c; ) {
        var w = (y = t[i++]) >> 16 & 240 | y >> 12 & 15, y = y >> 0 & 240 | y >> 28 & 15;
        d[m++] = w, d[m++] = y;
      }
    }
    function yn(t, i, c, d, m) {
      for (c = i + c; i < c; ) {
        var w = (y = t[i++]) >> 16 & 248 | y >> 13 & 7, y = y >> 5 & 224 | y >> 3 & 31;
        d[m++] = w, d[m++] = y;
      }
    }
    function ge(t, i, c, d, m) {
      for (c = i + c; i < c; ) {
        var w = t[i++];
        d[m++] = w >> 0 & 255, d[m++] = w >> 8 & 255, d[m++] = w >> 16 & 255;
      }
    }
    function Le(t, i, c, d, m, w) {
      if (w == 0) for (c = i + c; i < c; ) At(d, ((w = t[i++])[0] >> 24 | w[1] >> 8 & 65280 | w[2] << 8 & 16711680 | w[3] << 24) >>> 0), m += 32;
      else a(d, m, t, i, c);
    }
    function Rn(t, i) {
      R[i][0] = R[t + "0"], R[i][1] = R[t + "1"], R[i][2] = R[t + "2"], R[i][3] = R[t + "3"], R[i][4] = R[t + "4"], R[i][5] = R[t + "5"], R[i][6] = R[t + "6"], R[i][7] = R[t + "7"], R[i][8] = R[t + "8"], R[i][9] = R[t + "9"], R[i][10] = R[t + "10"], R[i][11] = R[t + "11"], R[i][12] = R[t + "12"], R[i][13] = R[t + "13"], R[i][14] = R[t + "0"], R[i][15] = R[t + "0"];
    }
    function ue(t) {
      return t == Ro || t == To || t == Ea || t == zo;
    }
    function jr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Ae() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function Ln() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new jr(), this.f.kb = new Ae(), this.sd = null;
    }
    function $n() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function xe() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function Yt(t) {
      return alert("todo:WebPSamplerProcessPlane"), t.T;
    }
    function ce(t, i) {
      var c = t.T, d = i.ba.f.RGBA, m = d.eb, w = d.fb + t.ka * d.A, y = bn[i.ba.S], N = t.y, x = t.O, k = t.f, U = t.N, K = t.ea, Z = t.W, G = i.cc, vt = i.dc, it = i.Mc, H = i.Nc, V = t.ka, pt = t.ka + t.T, bt = t.U, mt = bt + 1 >> 1;
      for (V == 0 ? y(N, x, null, null, k, U, K, Z, k, U, K, Z, m, w, null, null, bt) : (y(i.ec, i.fc, N, x, G, vt, it, H, k, U, K, Z, m, w - d.A, m, w, bt), ++c); V + 2 < pt; V += 2) G = k, vt = U, it = K, H = Z, U += t.Rc, Z += t.Rc, w += 2 * d.A, y(N, (x += 2 * t.fa) - t.fa, N, x, G, vt, it, H, k, U, K, Z, m, w - d.A, m, w, bt);
      return x += t.fa, t.j + pt < t.o ? (a(i.ec, i.fc, N, x, bt), a(i.cc, i.dc, k, U, mt), a(i.Mc, i.Nc, K, Z, mt), c--) : 1 & pt || y(N, x, null, null, k, U, K, Z, k, U, K, Z, m, w + d.A, null, null, bt), c;
    }
    function Or(t, i, c) {
      var d = t.F, m = [t.J];
      if (d != null) {
        var w = t.U, y = i.ba.S, N = y == Ma || y == Ea;
        i = i.ba.f.RGBA;
        var x = [0], k = t.ka;
        x[0] = t.T, t.Kb && (k == 0 ? --x[0] : (--k, m[0] -= t.width), t.j + t.ka + t.T == t.o && (x[0] = t.o - t.j - k));
        var U = i.eb;
        k = i.fb + k * i.A, t = Ia(d, m[0], t.width, w, x, U, k + (N ? 0 : 3), i.A), e(c == x), t && ue(y) && wr(U, k, N, w, x, i.A);
      }
      return 0;
    }
    function He(t) {
      var i = t.ma, c = i.ba.S, d = 11 > c, m = c == Oa || c == Ba || c == Ma || c == Do || c == 12 || ue(c);
      if (i.memory = null, i.Ib = null, i.Jb = null, i.Nd = null, !Vi(i.Oa, t, m ? 11 : 12)) return 0;
      if (m && ue(c) && yt(), t.da) alert("todo:use_scaling");
      else {
        if (d) {
          if (i.Ib = Yt, t.Kb) {
            if (c = t.U + 1 >> 1, i.memory = o(t.U + 2 * c), i.memory == null) return 0;
            i.ec = i.memory, i.fc = 0, i.cc = i.ec, i.dc = i.fc + t.U, i.Mc = i.cc, i.Nc = i.dc + c, i.Ib = ce, yt();
          }
        } else alert("todo:EmitYUV");
        m && (i.Jb = Or, d && J());
      }
      if (d && !Rs) {
        for (t = 0; 256 > t; ++t) ac[t] = 89858 * (t - 128) + Da >> qa, uc[t] = -22014 * (t - 128) + Da, sc[t] = -45773 * (t - 128), oc[t] = 113618 * (t - 128) + Da >> qa;
        for (t = Qi; t < Wo; ++t) i = 76283 * (t - 16) + Da >> qa, cc[t - Qi] = ln(i, 255), lc[t - Qi] = ln(i + 8 >> 4, 15);
        Rs = 1;
      }
      return 1;
    }
    function Tn(t) {
      var i = t.ma, c = t.U, d = t.T;
      return e(!(1 & t.ka)), 0 >= c || 0 >= d ? 0 : (c = i.Ib(t, i), i.Jb != null && i.Jb(t, i, c), i.Dc += c, 1);
    }
    function zn(t) {
      t.ma.memory = null;
    }
    function Tt(t, i, c, d) {
      return ht(t, 8) != 47 ? 0 : (i[0] = ht(t, 14) + 1, c[0] = ht(t, 14) + 1, d[0] = ht(t, 1), ht(t, 3) != 0 ? 0 : !t.h);
    }
    function Nn(t, i) {
      if (4 > t) return t + 1;
      var c = t - 2 >> 1;
      return (2 + (1 & t) << c) + ht(i, c) + 1;
    }
    function Un(t, i) {
      return 120 < i ? i - 120 : 1 <= (c = ((c = Vu[i - 1]) >> 4) * t + (8 - (15 & c))) ? c : 1;
      var c;
    }
    function tn(t, i, c) {
      var d = j(c), m = t[i += 255 & d].g - 8;
      return 0 < m && (W(c, c.u + 8), d = j(c), i += t[i].value, i += d & (1 << m) - 1), W(c, c.u + t[i].g), t[i].value;
    }
    function qe(t, i, c) {
      return c.g += t.g, c.value += t.value << i >>> 0, e(8 >= c.g), t.g;
    }
    function Oe(t, i, c) {
      var d = t.xc;
      return e((i = d == 0 ? 0 : t.vc[t.md * (c >> d) + (i >> d)]) < t.Wb), t.Ya[i];
    }
    function cn(t, i, c, d) {
      var m = t.ab, w = t.c * i, y = t.C;
      i = y + i;
      var N = c, x = d;
      for (d = t.Ta, c = t.Ua; 0 < m--; ) {
        var k = t.gc[m], U = y, K = i, Z = N, G = x, vt = (x = d, N = c, k.Ea);
        switch (e(U < K), e(K <= k.nc), k.hc) {
          case 2:
            Fa(Z, G, (K - U) * vt, x, N);
            break;
          case 0:
            var it = U, H = K, V = x, pt = N, bt = (_t = k).Ea;
            it == 0 && (Bo(Z, G, null, null, 1, V, pt), te(Z, G + 1, 0, 0, bt - 1, V, pt + 1), G += bt, pt += bt, ++it);
            for (var mt = 1 << _t.b, Ot = mt - 1, St = Et(bt, _t.b), Rt = _t.K, _t = _t.w + (it >> _t.b) * St; it < H; ) {
              var se = Rt, le = _t, ae = 1;
              for (Ji(Z, G, V, pt - bt, 1, V, pt); ae < bt; ) {
                var ne = (ae & ~Ot) + mt;
                ne > bt && (ne = bt), (0, gr[se[le++] >> 8 & 15])(Z, G + +ae, V, pt + ae - bt, ne - ae, V, pt + ae), ae = ne;
              }
              G += bt, pt += bt, ++it & Ot || (_t += St);
            }
            K != k.nc && a(x, N - vt, x, N + (K - U - 1) * vt, vt);
            break;
          case 1:
            for (vt = Z, H = G, bt = (Z = k.Ea) - (pt = Z & ~(V = (G = 1 << k.b) - 1)), it = Et(Z, k.b), mt = k.K, k = k.w + (U >> k.b) * it; U < K; ) {
              for (Ot = mt, St = k, Rt = new Ft(), _t = H + pt, se = H + Z; H < _t; ) de(Ot[St++], Rt), gn(Rt, vt, H, G, x, N), H += G, N += G;
              H < se && (de(Ot[St++], Rt), gn(Rt, vt, H, bt, x, N), H += bt, N += bt), ++U & V || (k += it);
            }
            break;
          case 3:
            if (Z == x && G == N && 0 < k.b) {
              for (H = x, Z = vt = N + (K - U) * vt - (pt = (K - U) * Et(k.Ea, k.b)), G = x, V = N, it = [], pt = (bt = pt) - 1; 0 <= pt; --pt) it[pt] = G[V + pt];
              for (pt = bt - 1; 0 <= pt; --pt) H[Z + pt] = it[pt];
              Fn(k, U, K, x, vt, x, N);
            } else Fn(k, U, K, Z, G, x, N);
        }
        N = d, x = c;
      }
      x != c && a(d, c, N, x, w);
    }
    function Gr(t, i) {
      var c = t.V, d = t.Ba + t.c * t.C, m = i - t.C;
      if (e(i <= t.l.o), e(16 >= m), 0 < m) {
        var w = t.l, y = t.Ta, N = t.Ua, x = w.width;
        if (cn(t, m, c, d), m = N = [N], e((c = t.C) < (d = i)), e(w.v < w.va), d > w.o && (d = w.o), c < w.j) {
          var k = w.j - c;
          c = w.j, m[0] += k * x;
        }
        if (c >= d ? c = 0 : (m[0] += 4 * w.v, w.ka = c - w.j, w.U = w.va - w.v, w.T = d - c, c = 1), c) {
          if (N = N[0], 11 > (c = t.ca).S) {
            var U = c.f.RGBA, K = (d = c.S, m = w.U, w = w.T, k = U.eb, U.A), Z = w;
            for (U = U.fb + t.Ma * U.A; 0 < Z--; ) {
              var G = y, vt = N, it = m, H = k, V = U;
              switch (d) {
                case ja:
                  In(G, vt, it, H, V);
                  break;
                case Oa:
                  mr(G, vt, it, H, V);
                  break;
                case Ro:
                  mr(G, vt, it, H, V), wr(H, V, 0, it, 1, 0);
                  break;
                case Fs:
                  fi(G, vt, it, H, V);
                  break;
                case Ba:
                  Le(G, vt, it, H, V, 1);
                  break;
                case To:
                  Le(G, vt, it, H, V, 1), wr(H, V, 0, it, 1, 0);
                  break;
                case Ma:
                  Le(G, vt, it, H, V, 0);
                  break;
                case Ea:
                  Le(G, vt, it, H, V, 0), wr(H, V, 1, it, 1, 0);
                  break;
                case Do:
                  Gn(G, vt, it, H, V);
                  break;
                case zo:
                  Gn(G, vt, it, H, V), gi(H, V, it, 1, 0);
                  break;
                case Is:
                  rr(G, vt, it, H, V);
                  break;
                default:
                  e(0);
              }
              N += x, U += K;
            }
            t.Ma += w;
          } else alert("todo:EmitRescaledRowsYUVA");
          e(t.Ma <= c.height);
        }
      }
      t.C = i, e(t.C <= t.i);
    }
    function Qn(t) {
      var i;
      if (0 < t.ua) return 0;
      for (i = 0; i < t.Wb; ++i) {
        var c = t.Ya[i].G, d = t.Ya[i].H;
        if (0 < c[1][d[1] + 0].g || 0 < c[2][d[2] + 0].g || 0 < c[3][d[3] + 0].g) return 0;
      }
      return 1;
    }
    function An(t, i, c, d, m, w) {
      if (t.Z != 0) {
        var y = t.qd, N = t.rd;
        for (e(Lr[t.Z] != null); i < c; ++i) Lr[t.Z](y, N, d, m, d, m, w), y = d, N = m, m += w;
        t.qd = y, t.rd = N;
      }
    }
    function xn(t, i) {
      var c = t.l.ma, d = c.Z == 0 || c.Z == 1 ? t.l.j : t.C;
      if (d = t.C < d ? d : t.C, e(i <= t.l.o), i > d) {
        var m = t.l.width, w = c.ca, y = c.tb + m * d, N = t.V, x = t.Ba + t.c * d, k = t.gc;
        e(t.ab == 1), e(k[0].hc == 3), Mo(k[0], d, i, N, x, w, y), An(c, d, i, w, y, m);
      }
      t.C = t.Ma = i;
    }
    function Sn(t, i, c, d, m, w, y) {
      var N = t.$ / d, x = t.$ % d, k = t.m, U = t.s, K = c + t.$, Z = K;
      m = c + d * m;
      var G = c + d * w, vt = 280 + U.ua, it = t.Pb ? N : 16777216, H = 0 < U.ua ? U.Wa : null, V = U.wc, pt = K < G ? Oe(U, x, N) : null;
      e(t.C < w), e(G <= m);
      var bt = !1;
      t: for (; ; ) {
        for (; bt || K < G; ) {
          var mt = 0;
          if (N >= it) {
            var Ot = K - c;
            e((it = t).Pb), it.wd = it.m, it.xd = Ot, 0 < it.s.ua && ut(it.s.Wa, it.s.vb), it = N + Yu;
          }
          if (x & V || (pt = Oe(U, x, N)), e(pt != null), pt.Qb && (i[K] = pt.qb, bt = !0), !bt) if (Y(k), pt.jc) {
            mt = k, Ot = i;
            var St = K, Rt = pt.pd[j(mt) & nn - 1];
            e(pt.jc), 256 > Rt.g ? (W(mt, mt.u + Rt.g), Ot[St] = Rt.value, mt = 0) : (W(mt, mt.u + Rt.g - 256), e(256 <= Rt.value), mt = Rt.value), mt == 0 && (bt = !0);
          } else mt = tn(pt.G[0], pt.H[0], k);
          if (k.h) break;
          if (bt || 256 > mt) {
            if (!bt) if (pt.nd) i[K] = (pt.qb | mt << 8) >>> 0;
            else {
              if (Y(k), bt = tn(pt.G[1], pt.H[1], k), Y(k), Ot = tn(pt.G[2], pt.H[2], k), St = tn(pt.G[3], pt.H[3], k), k.h) break;
              i[K] = (St << 24 | bt << 16 | mt << 8 | Ot) >>> 0;
            }
            if (bt = !1, ++K, ++x >= d && (x = 0, ++N, y != null && N <= w && !(N % 16) && y(t, N), H != null)) for (; Z < K; ) mt = i[Z++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
          } else if (280 > mt) {
            if (mt = Nn(mt - 256, k), Ot = tn(pt.G[4], pt.H[4], k), Y(k), Ot = Un(d, Ot = Nn(Ot, k)), k.h) break;
            if (K - c < Ot || m - K < mt) break t;
            for (St = 0; St < mt; ++St) i[K + St] = i[K + St - Ot];
            for (K += mt, x += mt; x >= d; ) x -= d, ++N, y != null && N <= w && !(N % 16) && y(t, N);
            if (e(K <= m), x & V && (pt = Oe(U, x, N)), H != null) for (; Z < K; ) mt = i[Z++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
          } else {
            if (!(mt < vt)) break t;
            for (bt = mt - 280, e(H != null); Z < K; ) mt = i[Z++], H.X[(506832829 * mt & 4294967295) >>> H.Mb] = mt;
            mt = K, e(!(bt >>> (Ot = H).Xa)), i[mt] = Ot.X[bt], bt = !0;
          }
          bt || e(k.h == M(k));
        }
        if (t.Pb && k.h && K < m) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && ut(t.s.vb, t.s.Wa);
        else {
          if (k.h) break t;
          y != null && y(t, N > w ? w : N), t.a = 0, t.$ = K - c;
        }
        return 1;
      }
      return t.a = 3, 0;
    }
    function Hn(t) {
      e(t != null), t.vc = null, t.yc = null, t.Ya = null;
      var i = t.Wa;
      i != null && (i.X = null), t.vb = null, e(t != null);
    }
    function pn() {
      var t = new Oo();
      return t == null ? null : (t.a = 0, t.xb = Os, Rn("Predictor", "VP8LPredictors"), Rn("Predictor", "VP8LPredictors_C"), Rn("PredictorAdd", "VP8LPredictorsAdd"), Rn("PredictorAdd", "VP8LPredictorsAdd_C"), Fa = ie, gn = Wt, In = It, mr = Ve, Gn = oe, rr = yn, fi = ge, R.VP8LMapColor32b = Xi, R.VP8LMapColor8b = Eo, t);
    }
    function Wn(t, i, c, d, m) {
      var w = 1, y = [t], N = [i], x = d.m, k = d.s, U = null, K = 0;
      t: for (; ; ) {
        if (c) for (; w && ht(x, 1); ) {
          var Z = y, G = N, vt = d, it = 1, H = vt.m, V = vt.gc[vt.ab], pt = ht(H, 2);
          if (vt.Oc & 1 << pt) w = 0;
          else {
            switch (vt.Oc |= 1 << pt, V.hc = pt, V.Ea = Z[0], V.nc = G[0], V.K = [null], ++vt.ab, e(4 >= vt.ab), pt) {
              case 0:
              case 1:
                V.b = ht(H, 3) + 2, it = Wn(Et(V.Ea, V.b), Et(V.nc, V.b), 0, vt, V.K), V.K = V.K[0];
                break;
              case 3:
                var bt, mt = ht(H, 8) + 1, Ot = 16 < mt ? 0 : 4 < mt ? 1 : 2 < mt ? 2 : 3;
                if (Z[0] = Et(V.Ea, Ot), V.b = Ot, bt = it = Wn(mt, 1, 0, vt, V.K)) {
                  var St, Rt = mt, _t = V, se = 1 << (8 >> _t.b), le = o(se);
                  if (le == null) bt = 0;
                  else {
                    var ae = _t.K[0], ne = _t.w;
                    for (le[0] = _t.K[0][0], St = 1; St < 1 * Rt; ++St) le[St] = Lt(ae[ne + St], le[St - 1]);
                    for (; St < 4 * se; ++St) le[St] = 0;
                    _t.K[0] = null, _t.K[0] = le, bt = 1;
                  }
                }
                it = bt;
                break;
              case 2:
                break;
              default:
                e(0);
            }
            w = it;
          }
        }
        if (y = y[0], N = N[0], w && ht(x, 1) && !(w = 1 <= (K = ht(x, 4)) && 11 >= K)) {
          d.a = 3;
          break t;
        }
        var me;
        if (me = w) e: {
          var pe, Zt, Me, an = d, Ee = y, on = N, he = K, fn = c, dn = an.m, Te = an.s, We = [null], $e = 1, wn = 0, Yn = Gu[he];
          n: for (; ; ) {
            if (fn && ht(dn, 1)) {
              var ze = ht(dn, 3) + 2, ur = Et(Ee, ze), zr = Et(on, ze), mi = ur * zr;
              if (!Wn(ur, zr, 0, an, We)) break n;
              for (We = We[0], Te.xc = ze, pe = 0; pe < mi; ++pe) {
                var Nr = We[pe] >> 8 & 65535;
                We[pe] = Nr, Nr >= $e && ($e = Nr + 1);
              }
            }
            if (dn.h) break n;
            for (Zt = 0; 5 > Zt; ++Zt) {
              var _e = Cs[Zt];
              !Zt && 0 < he && (_e += 1 << he), wn < _e && (wn = _e);
            }
            var Vo = l($e * Yn, P), Us = $e, Hs = l(Us, D);
            if (Hs == null) var Ta = null;
            else e(65536 >= Us), Ta = Hs;
            var ta = o(wn);
            if (Ta == null || ta == null || Vo == null) {
              an.a = 1;
              break n;
            }
            var za = Vo;
            for (pe = Me = 0; pe < $e; ++pe) {
              var Bn = Ta[pe], vi = Bn.G, bi = Bn.H, Ws = 0, Ua = 1, Vs = 0;
              for (Zt = 0; 5 > Zt; ++Zt) {
                _e = Cs[Zt], vi[Zt] = za, bi[Zt] = Me, !Zt && 0 < he && (_e += 1 << he);
                i: {
                  var Ha, Go = _e, Wa = an, ea = ta, dc = za, pc = Me, Yo = 0, Ar = Wa.m, gc = ht(Ar, 1);
                  if (u(ea, 0, 0, Go), gc) {
                    var mc = ht(Ar, 1) + 1, vc = ht(Ar, 1), Gs = ht(Ar, vc == 0 ? 1 : 8);
                    ea[Gs] = 1, mc == 2 && (ea[Gs = ht(Ar, 8)] = 1);
                    var Va = 1;
                  } else {
                    var Ys = o(19), Js = ht(Ar, 4) + 4;
                    if (19 < Js) {
                      Wa.a = 3;
                      var Ga = 0;
                      break i;
                    }
                    for (Ha = 0; Ha < Js; ++Ha) Ys[Wu[Ha]] = ht(Ar, 3);
                    var Jo = void 0, na = void 0, Xs = Wa, bc = Ys, Ya = Go, Ks = ea, Xo = 0, xr = Xs.m, Zs = 8, $s = l(128, P);
                    r: for (; F($s, 0, 7, bc, 19); ) {
                      if (ht(xr, 1)) {
                        var wc = 2 + 2 * ht(xr, 3);
                        if ((Jo = 2 + ht(xr, wc)) > Ya) break r;
                      } else Jo = Ya;
                      for (na = 0; na < Ya && Jo--; ) {
                        Y(xr);
                        var Qs = $s[0 + (127 & j(xr))];
                        W(xr, xr.u + Qs.g);
                        var wi = Qs.value;
                        if (16 > wi) Ks[na++] = wi, wi != 0 && (Zs = wi);
                        else {
                          var yc = wi == 16, tu = wi - 16, Lc = Uu[tu], eu = ht(xr, zu[tu]) + Lc;
                          if (na + eu > Ya) break r;
                          for (var Nc = yc ? Zs : 0; 0 < eu--; ) Ks[na++] = Nc;
                        }
                      }
                      Xo = 1;
                      break r;
                    }
                    Xo || (Xs.a = 3), Va = Xo;
                  }
                  (Va = Va && !Ar.h) && (Yo = F(dc, pc, 8, ea, Go)), Va && Yo != 0 ? Ga = Yo : (Wa.a = 3, Ga = 0);
                }
                if (Ga == 0) break n;
                if (Ua && Hu[Zt] == 1 && (Ua = za[Me].g == 0), Ws += za[Me].g, Me += Ga, 3 >= Zt) {
                  var ra, Ko = ta[0];
                  for (ra = 1; ra < _e; ++ra) ta[ra] > Ko && (Ko = ta[ra]);
                  Vs += Ko;
                }
              }
              if (Bn.nd = Ua, Bn.Qb = 0, Ua && (Bn.qb = (vi[3][bi[3] + 0].value << 24 | vi[1][bi[1] + 0].value << 16 | vi[2][bi[2] + 0].value) >>> 0, Ws == 0 && 256 > vi[0][bi[0] + 0].value && (Bn.Qb = 1, Bn.qb += vi[0][bi[0] + 0].value << 8)), Bn.jc = !Bn.Qb && 6 > Vs, Bn.jc) {
                var Ja, cr = Bn;
                for (Ja = 0; Ja < nn; ++Ja) {
                  var Sr = Ja, _r = cr.pd[Sr], Xa = cr.G[0][cr.H[0] + Sr];
                  256 <= Xa.value ? (_r.g = Xa.g + 256, _r.value = Xa.value) : (_r.g = 0, _r.value = 0, Sr >>= qe(Xa, 8, _r), Sr >>= qe(cr.G[1][cr.H[1] + Sr], 16, _r), Sr >>= qe(cr.G[2][cr.H[2] + Sr], 0, _r), qe(cr.G[3][cr.H[3] + Sr], 24, _r));
                }
              }
            }
            Te.vc = We, Te.Wb = $e, Te.Ya = Ta, Te.yc = Vo, me = 1;
            break e;
          }
          me = 0;
        }
        if (!(w = me)) {
          d.a = 3;
          break t;
        }
        if (0 < K) {
          if (k.ua = 1 << K, !zt(k.Wa, K)) {
            d.a = 1, w = 0;
            break t;
          }
        } else k.ua = 0;
        var Zo = d, nu = y, Ac = N, $o = Zo.s, Qo = $o.xc;
        if (Zo.c = nu, Zo.i = Ac, $o.md = Et(nu, Qo), $o.wc = Qo == 0 ? -1 : (1 << Qo) - 1, c) {
          d.xb = tc;
          break t;
        }
        if ((U = o(y * N)) == null) {
          d.a = 1, w = 0;
          break t;
        }
        w = (w = Sn(d, U, 0, y, N, N, null)) && !x.h;
        break t;
      }
      return w ? (m != null ? m[0] = U : (e(U == null), e(c)), d.$ = 0, c || Hn(k)) : Hn(k), w;
    }
    function Br(t, i) {
      var c = t.c * t.i, d = c + i + 16 * i;
      return e(t.c <= i), t.V = o(d), t.V == null ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + c + i, 1);
    }
    function Yr(t, i) {
      var c = t.C, d = i - c, m = t.V, w = t.Ba + t.c * c;
      for (e(i <= t.l.o); 0 < d; ) {
        var y = 16 < d ? 16 : d, N = t.l.ma, x = t.l.width, k = x * y, U = N.ca, K = N.tb + x * c, Z = t.Ta, G = t.Ua;
        cn(t, y, m, w), As(Z, G, U, K, k), An(N, c, c + y, U, K, x), d -= y, m += y * t.c, c += y;
      }
      e(c == i), t.C = t.Ma = i;
    }
    function Jr() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Xr() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function Kr() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
    }
    function ca() {
      this.Yb = function() {
        var t = [];
        return function i(c, d, m) {
          for (var w = m[d], y = 0; y < w && (c.push(m.length > d + 1 ? [] : 0), !(m.length < d + 1)); y++) i(c[y], d + 1, m);
        }(t, 0, [3, 11]), t;
      }();
    }
    function co() {
      this.jb = o(3), this.Wc = h([4, 8], ca), this.Xc = h([4, 17], ca);
    }
    function lo() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
    }
    function Zr() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function la() {
      this.Na = this.la = 0;
    }
    function ho() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function Fi() {
      this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function fo() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new Zr()), this.Y = 0, this.ya = Array(new Fi()), this.aa = 0, this.l = new $r();
    }
    function ha() {
      this.y = o(16), this.f = o(8), this.ea = o(8);
    }
    function po() {
      this.cb = this.a = 0, this.sc = "", this.m = new kt(), this.Od = new Jr(), this.Kc = new Xr(), this.ed = new lo(), this.Qa = new Kr(), this.Ic = this.$c = this.Aa = 0, this.D = new fo(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = l(8, kt), this.ia = 0, this.pb = l(4, ho), this.Pa = new co(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new ha()), this.Hd = 0, this.rb = Array(new la()), this.sb = 0, this.wa = Array(new Zr()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Fi()), this.L = this.aa = 0, this.gd = h([4, 2], Zr), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function $r() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function go() {
      var t = new po();
      return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, $i || ($i = pa)), t;
    }
    function ke(t, i, c) {
      return t.a == 0 && (t.a = i, t.sc = c, t.cb = 0), 0;
    }
    function fa(t, i, c) {
      return 3 <= c && t[i + 0] == 157 && t[i + 1] == 1 && t[i + 2] == 42;
    }
    function da(t, i) {
      if (t == null) return 0;
      if (t.a = 0, t.sc = "OK", i == null) return ke(t, 2, "null VP8Io passed to VP8GetHeaders()");
      var c = i.data, d = i.w, m = i.ha;
      if (4 > m) return ke(t, 7, "Truncated header.");
      var w = c[d + 0] | c[d + 1] << 8 | c[d + 2] << 16, y = t.Od;
      if (y.Rb = !(1 & w), y.td = w >> 1 & 7, y.yd = w >> 4 & 1, y.ub = w >> 5, 3 < y.td) return ke(t, 3, "Incorrect keyframe parameters.");
      if (!y.yd) return ke(t, 4, "Frame not displayable.");
      d += 3, m -= 3;
      var N = t.Kc;
      if (y.Rb) {
        if (7 > m) return ke(t, 7, "cannot parse picture header");
        if (!fa(c, d, m)) return ke(t, 3, "Bad code word");
        N.c = 16383 & (c[d + 4] << 8 | c[d + 3]), N.Td = c[d + 4] >> 6, N.i = 16383 & (c[d + 6] << 8 | c[d + 5]), N.Ud = c[d + 6] >> 6, d += 7, m -= 7, t.za = N.c + 15 >> 4, t.Ub = N.i + 15 >> 4, i.width = N.c, i.height = N.i, i.Da = 0, i.j = 0, i.v = 0, i.va = i.width, i.o = i.height, i.da = 0, i.ib = i.width, i.hb = i.height, i.U = i.width, i.T = i.height, u((w = t.Pa).jb, 0, 255, w.jb.length), e((w = t.Qa) != null), w.Cb = 0, w.Bb = 0, w.Fb = 1, u(w.Zb, 0, 0, w.Zb.length), u(w.Lb, 0, 0, w.Lb);
      }
      if (y.ub > m) return ke(t, 7, "bad partition length");
      at(w = t.m, c, d, y.ub), d += y.ub, m -= y.ub, y.Rb && (N.Ld = et(w), N.Kd = et(w)), N = t.Qa;
      var x, k = t.Pa;
      if (e(w != null), e(N != null), N.Cb = et(w), N.Cb) {
        if (N.Bb = et(w), et(w)) {
          for (N.Fb = et(w), x = 0; 4 > x; ++x) N.Zb[x] = et(w) ? lt(w, 7) : 0;
          for (x = 0; 4 > x; ++x) N.Lb[x] = et(w) ? lt(w, 6) : 0;
        }
        if (N.Bb) for (x = 0; 3 > x; ++x) k.jb[x] = et(w) ? nt(w, 8) : 255;
      } else N.Bb = 0;
      if (w.Ka) return ke(t, 3, "cannot parse segment header");
      if ((N = t.ed).zd = et(w), N.Tb = nt(w, 6), N.wb = nt(w, 3), N.Pc = et(w), N.Pc && et(w)) {
        for (k = 0; 4 > k; ++k) et(w) && (N.vd[k] = lt(w, 6));
        for (k = 0; 4 > k; ++k) et(w) && (N.od[k] = lt(w, 6));
      }
      if (t.L = N.Tb == 0 ? 0 : N.zd ? 1 : 2, w.Ka) return ke(t, 3, "cannot parse filter header");
      var U = m;
      if (m = x = d, d = x + U, N = U, t.Xb = (1 << nt(t.m, 2)) - 1, U < 3 * (k = t.Xb)) c = 7;
      else {
        for (x += 3 * k, N -= 3 * k, U = 0; U < k; ++U) {
          var K = c[m + 0] | c[m + 1] << 8 | c[m + 2] << 16;
          K > N && (K = N), at(t.Jc[+U], c, x, K), x += K, N -= K, m += 3;
        }
        at(t.Jc[+k], c, x, N), c = x < d ? 0 : 5;
      }
      if (c != 0) return ke(t, c, "cannot parse partitions");
      for (c = nt(x = t.m, 7), m = et(x) ? lt(x, 4) : 0, d = et(x) ? lt(x, 4) : 0, N = et(x) ? lt(x, 4) : 0, k = et(x) ? lt(x, 4) : 0, x = et(x) ? lt(x, 4) : 0, U = t.Qa, K = 0; 4 > K; ++K) {
        if (U.Cb) {
          var Z = U.Zb[K];
          U.Fb || (Z += c);
        } else {
          if (0 < K) {
            t.pb[K] = t.pb[0];
            continue;
          }
          Z = c;
        }
        var G = t.pb[K];
        G.Sc[0] = Uo[ln(Z + m, 127)], G.Sc[1] = Ho[ln(Z + 0, 127)], G.Eb[0] = 2 * Uo[ln(Z + d, 127)], G.Eb[1] = 101581 * Ho[ln(Z + N, 127)] >> 16, 8 > G.Eb[1] && (G.Eb[1] = 8), G.Qc[0] = Uo[ln(Z + k, 117)], G.Qc[1] = Ho[ln(Z + x, 127)], G.lc = Z + x;
      }
      if (!y.Rb) return ke(t, 4, "Not a key frame.");
      for (et(w), y = t.Pa, c = 0; 4 > c; ++c) {
        for (m = 0; 8 > m; ++m) for (d = 0; 3 > d; ++d) for (N = 0; 11 > N; ++N) k = rt(w, $u[c][m][d][N]) ? nt(w, 8) : Ku[c][m][d][N], y.Wc[c][m].Yb[d][N] = k;
        for (m = 0; 17 > m; ++m) y.Xc[c][m] = y.Wc[c][Qu[m]];
      }
      return t.kc = et(w), t.kc && (t.Bd = nt(w, 8)), t.cb = 1;
    }
    function pa(t, i, c, d, m, w, y) {
      var N = i[m].Yb[c];
      for (c = 0; 16 > m; ++m) {
        if (!rt(t, N[c + 0])) return m;
        for (; !rt(t, N[c + 1]); ) if (N = i[++m].Yb[0], c = 0, m == 16) return 16;
        var x = i[m + 1].Yb;
        if (rt(t, N[c + 2])) {
          var k = t, U = 0;
          if (rt(k, (Z = N)[(K = c) + 3])) if (rt(k, Z[K + 6])) {
            for (N = 0, K = 2 * (U = rt(k, Z[K + 8])) + (Z = rt(k, Z[K + 9 + U])), U = 0, Z = Ju[K]; Z[N]; ++N) U += U + rt(k, Z[N]);
            U += 3 + (8 << K);
          } else rt(k, Z[K + 7]) ? (U = 7 + 2 * rt(k, 165), U += rt(k, 145)) : U = 5 + rt(k, 159);
          else U = rt(k, Z[K + 4]) ? 3 + rt(k, Z[K + 5]) : 2;
          N = x[2];
        } else U = 1, N = x[1];
        x = y + Xu[m], 0 > (k = t).b && Q(k);
        var K, Z = k.b, G = (K = k.Ca >> 1) - (k.I >> Z) >> 31;
        --k.b, k.Ca += G, k.Ca |= 1, k.I -= (K + 1 & G) << Z, w[x] = ((U ^ G) - G) * d[(0 < m) + 0];
      }
      return 16;
    }
    function Ii(t) {
      var i = t.rb[t.sb - 1];
      i.la = 0, i.Na = 0, u(t.zc, 0, 0, t.zc.length), t.ja = 0;
    }
    function mo(t, i) {
      if (t == null) return 0;
      if (i == null) return ke(t, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!t.cb && !da(t, i)) return 0;
      if (e(t.cb), i.ac == null || i.ac(i)) {
        i.ob && (t.L = 0);
        var c = Ra[t.L];
        if (t.L == 2 ? (t.yb = 0, t.zb = 0) : (t.yb = i.v - c >> 4, t.zb = i.j - c >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = i.o + 15 + c >> 4, t.Hb = i.va + 15 + c >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
          var d = t.ed;
          for (c = 0; 4 > c; ++c) {
            var m;
            if (t.Qa.Cb) {
              var w = t.Qa.Lb[c];
              t.Qa.Fb || (w += d.Tb);
            } else w = d.Tb;
            for (m = 0; 1 >= m; ++m) {
              var y = t.gd[c][m], N = w;
              if (d.Pc && (N += d.vd[0], m && (N += d.od[0])), 0 < (N = 0 > N ? 0 : 63 < N ? 63 : N)) {
                var x = N;
                0 < d.wb && (x = 4 < d.wb ? x >> 2 : x >> 1) > 9 - d.wb && (x = 9 - d.wb), 1 > x && (x = 1), y.dd = x, y.tc = 2 * N + x, y.ld = 40 <= N ? 2 : 15 <= N ? 1 : 0;
              } else y.tc = 0;
              y.La = m;
            }
          }
        }
        c = 0;
      } else ke(t, 6, "Frame setup failed"), c = t.a;
      if (c = c == 0) {
        if (c) {
          t.$c = 0, 0 < t.Aa || (t.Ic = fc);
          t: {
            c = t.Ic, d = 4 * (x = t.za);
            var k = 32 * x, U = x + 1, K = 0 < t.L ? x * (0 < t.Aa ? 2 : 1) : 0, Z = (t.Aa == 2 ? 2 : 1) * x;
            if ((y = d + 832 + (m = 3 * (16 * c + Ra[t.L]) / 2 * k) + (w = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != y) c = 0;
            else {
              if (y > t.Vb) {
                if (t.Vb = 0, t.Ec = o(y), t.Fc = 0, t.Ec == null) {
                  c = ke(t, 1, "no memory during frame initialization.");
                  break t;
                }
                t.Vb = y;
              }
              y = t.Ec, N = t.Fc, t.Ac = y, t.Bc = N, N += d, t.Gd = l(k, ha), t.Hd = 0, t.rb = l(U + 1, la), t.sb = 1, t.wa = K ? l(K, Zr) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += x), e(!0), t.oc = y, t.pc = N, N += 832, t.ya = l(Z, Fi), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, t.Aa == 2 && (t.D.aa += x), t.R = 16 * x, t.B = 8 * x, x = (k = Ra[t.L]) * t.R, k = k / 2 * t.B, t.sa = y, t.ta = N + x, t.qa = t.sa, t.ra = t.ta + 16 * c * t.R + k, t.Ha = t.qa, t.Ia = t.ra + 8 * c * t.B + k, t.$c = 0, N += m, t.mb = w ? y : null, t.nb = w ? N : null, e(N + w <= t.Fc + t.Vb), Ii(t), u(t.Ac, t.Bc, 0, d), c = 1;
            }
          }
          if (c) {
            if (i.ka = 0, i.y = t.sa, i.O = t.ta, i.f = t.qa, i.N = t.ra, i.ea = t.Ha, i.Vd = t.Ia, i.fa = t.R, i.Rc = t.B, i.F = null, i.J = 0, !ks) {
              for (c = -255; 255 >= c; ++c) xs[255 + c] = 0 > c ? -c : c;
              for (c = -1020; 1020 >= c; ++c) Ss[1020 + c] = -128 > c ? -128 : 127 < c ? 127 : c;
              for (c = -112; 112 >= c; ++c) _s[112 + c] = -16 > c ? -16 : 15 < c ? 15 : c;
              for (c = -255; 510 >= c; ++c) Ps[255 + c] = 0 > c ? 0 : 255 < c ? 255 : c;
              ks = 1;
            }
            Cn = wo, di = vo, vr = ma, jn = bo, ir = va, Ki = ga, Rr = Ei, pi = qr, Tr = jo, br = qi, Zi = Co, mn = ii, ar = Di, be = _a, we = Sa, Fe = er, De = fr, or = Io, On[0] = Vn, On[1] = yo, On[2] = xo, On[3] = So, On[4] = ya, On[5] = ni, On[6] = La, On[7] = Oi, On[8] = Po, On[9] = _o, yr[0] = ba, yr[1] = No, yr[2] = tr, yr[3] = ti, yr[4] = Ge, yr[5] = Ao, yr[6] = wa, sr[0] = hr, sr[1] = Lo, sr[2] = ko, sr[3] = Bi, sr[4] = Er, sr[5] = Fo, sr[6] = Mi, c = 1;
          } else c = 0;
        }
        c && (c = function(G, vt) {
          for (G.M = 0; G.M < G.Va; ++G.M) {
            var it, H = G.Jc[G.M & G.Xb], V = G.m, pt = G;
            for (it = 0; it < pt.za; ++it) {
              var bt = V, mt = pt, Ot = mt.Ac, St = mt.Bc + 4 * it, Rt = mt.zc, _t = mt.ya[mt.aa + it];
              if (mt.Qa.Bb ? _t.$b = rt(bt, mt.Pa.jb[0]) ? 2 + rt(bt, mt.Pa.jb[2]) : rt(bt, mt.Pa.jb[1]) : _t.$b = 0, mt.kc && (_t.Ad = rt(bt, mt.Bd)), _t.Za = !rt(bt, 145) + 0, _t.Za) {
                var se = _t.Ob, le = 0;
                for (mt = 0; 4 > mt; ++mt) {
                  var ae, ne = Rt[0 + mt];
                  for (ae = 0; 4 > ae; ++ae) {
                    ne = Zu[Ot[St + ae]][ne];
                    for (var me = js[rt(bt, ne[0])]; 0 < me; ) me = js[2 * me + rt(bt, ne[me])];
                    ne = -me, Ot[St + ae] = ne;
                  }
                  a(se, le, Ot, St, 4), le += 4, Rt[0 + mt] = ne;
                }
              } else ne = rt(bt, 156) ? rt(bt, 128) ? 1 : 3 : rt(bt, 163) ? 2 : 0, _t.Ob[0] = ne, u(Ot, St, ne, 4), u(Rt, 0, ne, 4);
              _t.Dd = rt(bt, 142) ? rt(bt, 114) ? rt(bt, 183) ? 1 : 3 : 2 : 0;
            }
            if (pt.m.Ka) return ke(G, 7, "Premature end-of-partition0 encountered.");
            for (; G.ja < G.za; ++G.ja) {
              if (pt = H, bt = (V = G).rb[V.sb - 1], Ot = V.rb[V.sb + V.ja], it = V.ya[V.aa + V.ja], St = V.kc ? it.Ad : 0) bt.la = Ot.la = 0, it.Za || (bt.Na = Ot.Na = 0), it.Hc = 0, it.Gc = 0, it.ia = 0;
              else {
                var pe, Zt;
                if (bt = Ot, Ot = pt, St = V.Pa.Xc, Rt = V.ya[V.aa + V.ja], _t = V.pb[Rt.$b], mt = Rt.ad, se = 0, le = V.rb[V.sb - 1], ne = ae = 0, u(mt, se, 0, 384), Rt.Za) var Me = 0, an = St[3];
                else {
                  me = o(16);
                  var Ee = bt.Na + le.Na;
                  if (Ee = $i(Ot, St[1], Ee, _t.Eb, 0, me, 0), bt.Na = le.Na = (0 < Ee) + 0, 1 < Ee) Cn(me, 0, mt, se);
                  else {
                    var on = me[0] + 3 >> 3;
                    for (me = 0; 256 > me; me += 16) mt[se + me] = on;
                  }
                  Me = 1, an = St[0];
                }
                var he = 15 & bt.la, fn = 15 & le.la;
                for (me = 0; 4 > me; ++me) {
                  var dn = 1 & fn;
                  for (on = Zt = 0; 4 > on; ++on) he = he >> 1 | (dn = (Ee = $i(Ot, an, Ee = dn + (1 & he), _t.Sc, Me, mt, se)) > Me) << 7, Zt = Zt << 2 | (3 < Ee ? 3 : 1 < Ee ? 2 : mt[se + 0] != 0), se += 16;
                  he >>= 4, fn = fn >> 1 | dn << 7, ae = (ae << 8 | Zt) >>> 0;
                }
                for (an = he, Me = fn >> 4, pe = 0; 4 > pe; pe += 2) {
                  for (Zt = 0, he = bt.la >> 4 + pe, fn = le.la >> 4 + pe, me = 0; 2 > me; ++me) {
                    for (dn = 1 & fn, on = 0; 2 > on; ++on) Ee = dn + (1 & he), he = he >> 1 | (dn = 0 < (Ee = $i(Ot, St[2], Ee, _t.Qc, 0, mt, se))) << 3, Zt = Zt << 2 | (3 < Ee ? 3 : 1 < Ee ? 2 : mt[se + 0] != 0), se += 16;
                    he >>= 2, fn = fn >> 1 | dn << 5;
                  }
                  ne |= Zt << 4 * pe, an |= he << 4 << pe, Me |= (240 & fn) << pe;
                }
                bt.la = an, le.la = Me, Rt.Hc = ae, Rt.Gc = ne, Rt.ia = 43690 & ne ? 0 : _t.ia, St = !(ae | ne);
              }
              if (0 < V.L && (V.wa[V.Y + V.ja] = V.gd[it.$b][it.Za], V.wa[V.Y + V.ja].La |= !St), pt.Ka) return ke(G, 7, "Premature end-of-file encountered.");
            }
            if (Ii(G), V = vt, pt = 1, it = (H = G).D, bt = 0 < H.L && H.M >= H.zb && H.M <= H.Va, H.Aa == 0) t: {
              if (it.M = H.M, it.uc = bt, Wi(H, it), pt = 1, it = (Zt = H.D).Nb, bt = (ne = Ra[H.L]) * H.R, Ot = ne / 2 * H.B, me = 16 * it * H.R, on = 8 * it * H.B, St = H.sa, Rt = H.ta - bt + me, _t = H.qa, mt = H.ra - Ot + on, se = H.Ha, le = H.Ia - Ot + on, fn = (he = Zt.M) == 0, ae = he >= H.Va - 1, H.Aa == 2 && Wi(H, Zt), Zt.uc) for (dn = (Ee = H).D.M, e(Ee.D.uc), Zt = Ee.yb; Zt < Ee.Hb; ++Zt) {
                Me = Zt, an = dn;
                var Te = (We = (_e = Ee).D).Nb;
                pe = _e.R;
                var We = We.wa[We.Y + Me], $e = _e.sa, wn = _e.ta + 16 * Te * pe + 16 * Me, Yn = We.dd, ze = We.tc;
                if (ze != 0) if (e(3 <= ze), _e.L == 1) 0 < Me && Fe($e, wn, pe, ze + 4), We.La && or($e, wn, pe, ze), 0 < an && we($e, wn, pe, ze + 4), We.La && De($e, wn, pe, ze);
                else {
                  var ur = _e.B, zr = _e.qa, mi = _e.ra + 8 * Te * ur + 8 * Me, Nr = _e.Ha, _e = _e.Ia + 8 * Te * ur + 8 * Me;
                  Te = We.ld, 0 < Me && (pi($e, wn, pe, ze + 4, Yn, Te), br(zr, mi, Nr, _e, ur, ze + 4, Yn, Te)), We.La && (mn($e, wn, pe, ze, Yn, Te), be(zr, mi, Nr, _e, ur, ze, Yn, Te)), 0 < an && (Rr($e, wn, pe, ze + 4, Yn, Te), Tr(zr, mi, Nr, _e, ur, ze + 4, Yn, Te)), We.La && (Zi($e, wn, pe, ze, Yn, Te), ar(zr, mi, Nr, _e, ur, ze, Yn, Te));
                }
              }
              if (H.ia && alert("todo:DitherRow"), V.put != null) {
                if (Zt = 16 * he, he = 16 * (he + 1), fn ? (V.y = H.sa, V.O = H.ta + me, V.f = H.qa, V.N = H.ra + on, V.ea = H.Ha, V.W = H.Ia + on) : (Zt -= ne, V.y = St, V.O = Rt, V.f = _t, V.N = mt, V.ea = se, V.W = le), ae || (he -= ne), he > V.o && (he = V.o), V.F = null, V.J = null, H.Fa != null && 0 < H.Fa.length && Zt < he && (V.J = Ui(H, V, Zt, he - Zt), V.F = H.mb, V.F == null && V.F.length == 0)) {
                  pt = ke(H, 3, "Could not decode alpha data.");
                  break t;
                }
                Zt < V.j && (ne = V.j - Zt, Zt = V.j, e(!(1 & ne)), V.O += H.R * ne, V.N += H.B * (ne >> 1), V.W += H.B * (ne >> 1), V.F != null && (V.J += V.width * ne)), Zt < he && (V.O += V.v, V.N += V.v >> 1, V.W += V.v >> 1, V.F != null && (V.J += V.v), V.ka = Zt - V.j, V.U = V.va - V.v, V.T = he - Zt, pt = V.put(V));
              }
              it + 1 != H.Ic || ae || (a(H.sa, H.ta - bt, St, Rt + 16 * H.R, bt), a(H.qa, H.ra - Ot, _t, mt + 8 * H.B, Ot), a(H.Ha, H.Ia - Ot, se, le + 8 * H.B, Ot));
            }
            if (!pt) return ke(G, 6, "Output aborted.");
          }
          return 1;
        }(t, i)), i.bc != null && i.bc(i), c &= 1;
      }
      return c ? (t.cb = 0, c) : 0;
    }
    function _n(t, i, c, d, m) {
      m = t[i + c + 32 * d] + (m >> 3), t[i + c + 32 * d] = -256 & m ? 0 > m ? 0 : 255 : m;
    }
    function Qr(t, i, c, d, m, w) {
      _n(t, i, 0, c, d + m), _n(t, i, 1, c, d + w), _n(t, i, 2, c, d - w), _n(t, i, 3, c, d - m);
    }
    function en(t) {
      return (20091 * t >> 16) + t;
    }
    function Ci(t, i, c, d) {
      var m, w = 0, y = o(16);
      for (m = 0; 4 > m; ++m) {
        var N = t[i + 0] + t[i + 8], x = t[i + 0] - t[i + 8], k = (35468 * t[i + 4] >> 16) - en(t[i + 12]), U = en(t[i + 4]) + (35468 * t[i + 12] >> 16);
        y[w + 0] = N + U, y[w + 1] = x + k, y[w + 2] = x - k, y[w + 3] = N - U, w += 4, i++;
      }
      for (m = w = 0; 4 > m; ++m) N = (t = y[w + 0] + 4) + y[w + 8], x = t - y[w + 8], k = (35468 * y[w + 4] >> 16) - en(y[w + 12]), _n(c, d, 0, 0, N + (U = en(y[w + 4]) + (35468 * y[w + 12] >> 16))), _n(c, d, 1, 0, x + k), _n(c, d, 2, 0, x - k), _n(c, d, 3, 0, N - U), w++, d += 32;
    }
    function ga(t, i, c, d) {
      var m = t[i + 0] + 4, w = 35468 * t[i + 4] >> 16, y = en(t[i + 4]), N = 35468 * t[i + 1] >> 16;
      Qr(c, d, 0, m + y, t = en(t[i + 1]), N), Qr(c, d, 1, m + w, t, N), Qr(c, d, 2, m - w, t, N), Qr(c, d, 3, m - y, t, N);
    }
    function vo(t, i, c, d, m) {
      Ci(t, i, c, d), m && Ci(t, i + 16, c, d + 4);
    }
    function ma(t, i, c, d) {
      di(t, i + 0, c, d, 1), di(t, i + 32, c, d + 128, 1);
    }
    function bo(t, i, c, d) {
      var m;
      for (t = t[i + 0] + 4, m = 0; 4 > m; ++m) for (i = 0; 4 > i; ++i) _n(c, d, i, m, t);
    }
    function va(t, i, c, d) {
      t[i + 0] && jn(t, i + 0, c, d), t[i + 16] && jn(t, i + 16, c, d + 4), t[i + 32] && jn(t, i + 32, c, d + 128), t[i + 48] && jn(t, i + 48, c, d + 128 + 4);
    }
    function wo(t, i, c, d) {
      var m, w = o(16);
      for (m = 0; 4 > m; ++m) {
        var y = t[i + 0 + m] + t[i + 12 + m], N = t[i + 4 + m] + t[i + 8 + m], x = t[i + 4 + m] - t[i + 8 + m], k = t[i + 0 + m] - t[i + 12 + m];
        w[0 + m] = y + N, w[8 + m] = y - N, w[4 + m] = k + x, w[12 + m] = k - x;
      }
      for (m = 0; 4 > m; ++m) y = (t = w[0 + 4 * m] + 3) + w[3 + 4 * m], N = w[1 + 4 * m] + w[2 + 4 * m], x = w[1 + 4 * m] - w[2 + 4 * m], k = t - w[3 + 4 * m], c[d + 0] = y + N >> 3, c[d + 16] = k + x >> 3, c[d + 32] = y - N >> 3, c[d + 48] = k - x >> 3, d += 64;
    }
    function ji(t, i, c) {
      var d, m = i - 32, w = hn, y = 255 - t[m - 1];
      for (d = 0; d < c; ++d) {
        var N, x = w, k = y + t[i - 1];
        for (N = 0; N < c; ++N) t[i + N] = x[k + t[m + N]];
        i += 32;
      }
    }
    function yo(t, i) {
      ji(t, i, 4);
    }
    function Lo(t, i) {
      ji(t, i, 8);
    }
    function No(t, i) {
      ji(t, i, 16);
    }
    function tr(t, i) {
      var c;
      for (c = 0; 16 > c; ++c) a(t, i + 32 * c, t, i - 32, 16);
    }
    function ti(t, i) {
      var c;
      for (c = 16; 0 < c; --c) u(t, i, t[i - 1], 16), i += 32;
    }
    function ei(t, i, c) {
      var d;
      for (d = 0; 16 > d; ++d) u(i, c + 32 * d, t, 16);
    }
    function ba(t, i) {
      var c, d = 16;
      for (c = 0; 16 > c; ++c) d += t[i - 1 + 32 * c] + t[i + c - 32];
      ei(d >> 5, t, i);
    }
    function Ge(t, i) {
      var c, d = 8;
      for (c = 0; 16 > c; ++c) d += t[i - 1 + 32 * c];
      ei(d >> 4, t, i);
    }
    function Ao(t, i) {
      var c, d = 8;
      for (c = 0; 16 > c; ++c) d += t[i + c - 32];
      ei(d >> 4, t, i);
    }
    function wa(t, i) {
      ei(128, t, i);
    }
    function Vt(t, i, c) {
      return t + 2 * i + c + 2 >> 2;
    }
    function xo(t, i) {
      var c, d = i - 32;
      for (d = new Uint8Array([Vt(t[d - 1], t[d + 0], t[d + 1]), Vt(t[d + 0], t[d + 1], t[d + 2]), Vt(t[d + 1], t[d + 2], t[d + 3]), Vt(t[d + 2], t[d + 3], t[d + 4])]), c = 0; 4 > c; ++c) a(t, i + 32 * c, d, 0, d.length);
    }
    function So(t, i) {
      var c = t[i - 1], d = t[i - 1 + 32], m = t[i - 1 + 64], w = t[i - 1 + 96];
      At(t, i + 0, 16843009 * Vt(t[i - 1 - 32], c, d)), At(t, i + 32, 16843009 * Vt(c, d, m)), At(t, i + 64, 16843009 * Vt(d, m, w)), At(t, i + 96, 16843009 * Vt(m, w, w));
    }
    function Vn(t, i) {
      var c, d = 4;
      for (c = 0; 4 > c; ++c) d += t[i + c - 32] + t[i - 1 + 32 * c];
      for (d >>= 3, c = 0; 4 > c; ++c) u(t, i + 32 * c, d, 4);
    }
    function ya(t, i) {
      var c = t[i - 1 + 0], d = t[i - 1 + 32], m = t[i - 1 + 64], w = t[i - 1 - 32], y = t[i + 0 - 32], N = t[i + 1 - 32], x = t[i + 2 - 32], k = t[i + 3 - 32];
      t[i + 0 + 96] = Vt(d, m, t[i - 1 + 96]), t[i + 1 + 96] = t[i + 0 + 64] = Vt(c, d, m), t[i + 2 + 96] = t[i + 1 + 64] = t[i + 0 + 32] = Vt(w, c, d), t[i + 3 + 96] = t[i + 2 + 64] = t[i + 1 + 32] = t[i + 0 + 0] = Vt(y, w, c), t[i + 3 + 64] = t[i + 2 + 32] = t[i + 1 + 0] = Vt(N, y, w), t[i + 3 + 32] = t[i + 2 + 0] = Vt(x, N, y), t[i + 3 + 0] = Vt(k, x, N);
    }
    function La(t, i) {
      var c = t[i + 1 - 32], d = t[i + 2 - 32], m = t[i + 3 - 32], w = t[i + 4 - 32], y = t[i + 5 - 32], N = t[i + 6 - 32], x = t[i + 7 - 32];
      t[i + 0 + 0] = Vt(t[i + 0 - 32], c, d), t[i + 1 + 0] = t[i + 0 + 32] = Vt(c, d, m), t[i + 2 + 0] = t[i + 1 + 32] = t[i + 0 + 64] = Vt(d, m, w), t[i + 3 + 0] = t[i + 2 + 32] = t[i + 1 + 64] = t[i + 0 + 96] = Vt(m, w, y), t[i + 3 + 32] = t[i + 2 + 64] = t[i + 1 + 96] = Vt(w, y, N), t[i + 3 + 64] = t[i + 2 + 96] = Vt(y, N, x), t[i + 3 + 96] = Vt(N, x, x);
    }
    function ni(t, i) {
      var c = t[i - 1 + 0], d = t[i - 1 + 32], m = t[i - 1 + 64], w = t[i - 1 - 32], y = t[i + 0 - 32], N = t[i + 1 - 32], x = t[i + 2 - 32], k = t[i + 3 - 32];
      t[i + 0 + 0] = t[i + 1 + 64] = w + y + 1 >> 1, t[i + 1 + 0] = t[i + 2 + 64] = y + N + 1 >> 1, t[i + 2 + 0] = t[i + 3 + 64] = N + x + 1 >> 1, t[i + 3 + 0] = x + k + 1 >> 1, t[i + 0 + 96] = Vt(m, d, c), t[i + 0 + 64] = Vt(d, c, w), t[i + 0 + 32] = t[i + 1 + 96] = Vt(c, w, y), t[i + 1 + 32] = t[i + 2 + 96] = Vt(w, y, N), t[i + 2 + 32] = t[i + 3 + 96] = Vt(y, N, x), t[i + 3 + 32] = Vt(N, x, k);
    }
    function Oi(t, i) {
      var c = t[i + 0 - 32], d = t[i + 1 - 32], m = t[i + 2 - 32], w = t[i + 3 - 32], y = t[i + 4 - 32], N = t[i + 5 - 32], x = t[i + 6 - 32], k = t[i + 7 - 32];
      t[i + 0 + 0] = c + d + 1 >> 1, t[i + 1 + 0] = t[i + 0 + 64] = d + m + 1 >> 1, t[i + 2 + 0] = t[i + 1 + 64] = m + w + 1 >> 1, t[i + 3 + 0] = t[i + 2 + 64] = w + y + 1 >> 1, t[i + 0 + 32] = Vt(c, d, m), t[i + 1 + 32] = t[i + 0 + 96] = Vt(d, m, w), t[i + 2 + 32] = t[i + 1 + 96] = Vt(m, w, y), t[i + 3 + 32] = t[i + 2 + 96] = Vt(w, y, N), t[i + 3 + 64] = Vt(y, N, x), t[i + 3 + 96] = Vt(N, x, k);
    }
    function _o(t, i) {
      var c = t[i - 1 + 0], d = t[i - 1 + 32], m = t[i - 1 + 64], w = t[i - 1 + 96];
      t[i + 0 + 0] = c + d + 1 >> 1, t[i + 2 + 0] = t[i + 0 + 32] = d + m + 1 >> 1, t[i + 2 + 32] = t[i + 0 + 64] = m + w + 1 >> 1, t[i + 1 + 0] = Vt(c, d, m), t[i + 3 + 0] = t[i + 1 + 32] = Vt(d, m, w), t[i + 3 + 32] = t[i + 1 + 64] = Vt(m, w, w), t[i + 3 + 64] = t[i + 2 + 64] = t[i + 0 + 96] = t[i + 1 + 96] = t[i + 2 + 96] = t[i + 3 + 96] = w;
    }
    function Po(t, i) {
      var c = t[i - 1 + 0], d = t[i - 1 + 32], m = t[i - 1 + 64], w = t[i - 1 + 96], y = t[i - 1 - 32], N = t[i + 0 - 32], x = t[i + 1 - 32], k = t[i + 2 - 32];
      t[i + 0 + 0] = t[i + 2 + 32] = c + y + 1 >> 1, t[i + 0 + 32] = t[i + 2 + 64] = d + c + 1 >> 1, t[i + 0 + 64] = t[i + 2 + 96] = m + d + 1 >> 1, t[i + 0 + 96] = w + m + 1 >> 1, t[i + 3 + 0] = Vt(N, x, k), t[i + 2 + 0] = Vt(y, N, x), t[i + 1 + 0] = t[i + 3 + 32] = Vt(c, y, N), t[i + 1 + 32] = t[i + 3 + 64] = Vt(d, c, y), t[i + 1 + 64] = t[i + 3 + 96] = Vt(m, d, c), t[i + 1 + 96] = Vt(w, m, d);
    }
    function ko(t, i) {
      var c;
      for (c = 0; 8 > c; ++c) a(t, i + 32 * c, t, i - 32, 8);
    }
    function Bi(t, i) {
      var c;
      for (c = 0; 8 > c; ++c) u(t, i, t[i - 1], 8), i += 32;
    }
    function Mr(t, i, c) {
      var d;
      for (d = 0; 8 > d; ++d) u(i, c + 32 * d, t, 8);
    }
    function hr(t, i) {
      var c, d = 8;
      for (c = 0; 8 > c; ++c) d += t[i + c - 32] + t[i - 1 + 32 * c];
      Mr(d >> 4, t, i);
    }
    function Fo(t, i) {
      var c, d = 4;
      for (c = 0; 8 > c; ++c) d += t[i + c - 32];
      Mr(d >> 3, t, i);
    }
    function Er(t, i) {
      var c, d = 4;
      for (c = 0; 8 > c; ++c) d += t[i - 1 + 32 * c];
      Mr(d >> 3, t, i);
    }
    function Mi(t, i) {
      Mr(128, t, i);
    }
    function ri(t, i, c) {
      var d = t[i - c], m = t[i + 0], w = 3 * (m - d) + qo[1020 + t[i - 2 * c] - t[i + c]], y = Ca[112 + (w + 4 >> 3)];
      t[i - c] = hn[255 + d + Ca[112 + (w + 3 >> 3)]], t[i + 0] = hn[255 + m - y];
    }
    function Na(t, i, c, d) {
      var m = t[i + 0], w = t[i + c];
      return vn[255 + t[i - 2 * c] - t[i - c]] > d || vn[255 + w - m] > d;
    }
    function Aa(t, i, c, d) {
      return 4 * vn[255 + t[i - c] - t[i + 0]] + vn[255 + t[i - 2 * c] - t[i + c]] <= d;
    }
    function xa(t, i, c, d, m) {
      var w = t[i - 3 * c], y = t[i - 2 * c], N = t[i - c], x = t[i + 0], k = t[i + c], U = t[i + 2 * c], K = t[i + 3 * c];
      return 4 * vn[255 + N - x] + vn[255 + y - k] > d ? 0 : vn[255 + t[i - 4 * c] - w] <= m && vn[255 + w - y] <= m && vn[255 + y - N] <= m && vn[255 + K - U] <= m && vn[255 + U - k] <= m && vn[255 + k - x] <= m;
    }
    function Sa(t, i, c, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Aa(t, i + d, c, m) && ri(t, i + d, c);
    }
    function er(t, i, c, d) {
      var m = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Aa(t, i + d * c, 1, m) && ri(t, i + d * c, 1);
    }
    function fr(t, i, c, d) {
      var m;
      for (m = 3; 0 < m; --m) Sa(t, i += 4 * c, c, d);
    }
    function Io(t, i, c, d) {
      var m;
      for (m = 3; 0 < m; --m) er(t, i += 4, c, d);
    }
    function dr(t, i, c, d, m, w, y, N) {
      for (w = 2 * w + 1; 0 < m--; ) {
        if (xa(t, i, c, w, y)) if (Na(t, i, c, N)) ri(t, i, c);
        else {
          var x = t, k = i, U = c, K = x[k - 2 * U], Z = x[k - U], G = x[k + 0], vt = x[k + U], it = x[k + 2 * U], H = 27 * (pt = qo[1020 + 3 * (G - Z) + qo[1020 + K - vt]]) + 63 >> 7, V = 18 * pt + 63 >> 7, pt = 9 * pt + 63 >> 7;
          x[k - 3 * U] = hn[255 + x[k - 3 * U] + pt], x[k - 2 * U] = hn[255 + K + V], x[k - U] = hn[255 + Z + H], x[k + 0] = hn[255 + G - H], x[k + U] = hn[255 + vt - V], x[k + 2 * U] = hn[255 + it - pt];
        }
        i += d;
      }
    }
    function Pn(t, i, c, d, m, w, y, N) {
      for (w = 2 * w + 1; 0 < m--; ) {
        if (xa(t, i, c, w, y)) if (Na(t, i, c, N)) ri(t, i, c);
        else {
          var x = t, k = i, U = c, K = x[k - U], Z = x[k + 0], G = x[k + U], vt = Ca[112 + ((it = 3 * (Z - K)) + 4 >> 3)], it = Ca[112 + (it + 3 >> 3)], H = vt + 1 >> 1;
          x[k - 2 * U] = hn[255 + x[k - 2 * U] + H], x[k - U] = hn[255 + K + it], x[k + 0] = hn[255 + Z - vt], x[k + U] = hn[255 + G - H];
        }
        i += d;
      }
    }
    function Ei(t, i, c, d, m, w) {
      dr(t, i, c, 1, 16, d, m, w);
    }
    function qr(t, i, c, d, m, w) {
      dr(t, i, 1, c, 16, d, m, w);
    }
    function Co(t, i, c, d, m, w) {
      var y;
      for (y = 3; 0 < y; --y) Pn(t, i += 4 * c, c, 1, 16, d, m, w);
    }
    function ii(t, i, c, d, m, w) {
      var y;
      for (y = 3; 0 < y; --y) Pn(t, i += 4, 1, c, 16, d, m, w);
    }
    function jo(t, i, c, d, m, w, y, N) {
      dr(t, i, m, 1, 8, w, y, N), dr(c, d, m, 1, 8, w, y, N);
    }
    function qi(t, i, c, d, m, w, y, N) {
      dr(t, i, 1, m, 8, w, y, N), dr(c, d, 1, m, 8, w, y, N);
    }
    function Di(t, i, c, d, m, w, y, N) {
      Pn(t, i + 4 * m, m, 1, 8, w, y, N), Pn(c, d + 4 * m, m, 1, 8, w, y, N);
    }
    function _a(t, i, c, d, m, w, y, N) {
      Pn(t, i + 4, 1, m, 8, w, y, N), Pn(c, d + 4, 1, m, 8, w, y, N);
    }
    function ai() {
      this.ba = new Ln(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xe(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function Ri() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function Ti() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Pa() {
      this.ua = 0, this.Wa = new E(), this.vb = new E(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new D(), this.yc = new P();
    }
    function Oo() {
      this.xb = this.a = 0, this.l = new $r(), this.ca = new Ln(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new L(), this.Pb = 0, this.wd = new L(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Pa(), this.ab = 0, this.gc = l(4, Ti), this.Oc = 0;
    }
    function oi() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new $r(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Dr(t, i, c, d, m, w, y) {
      for (t = t == null ? 0 : t[i + 0], i = 0; i < y; ++i) m[w + i] = t + c[d + i] & 255, t = m[w + i];
    }
    function zi(t, i, c, d, m, w, y) {
      var N;
      if (t == null) Dr(null, null, c, d, m, w, y);
      else for (N = 0; N < y; ++N) m[w + N] = t[i + N] + c[d + N] & 255;
    }
    function pr(t, i, c, d, m, w, y) {
      if (t == null) Dr(null, null, c, d, m, w, y);
      else {
        var N, x = t[i + 0], k = x, U = x;
        for (N = 0; N < y; ++N) k = U + (x = t[i + N]) - k, U = c[d + N] + (-256 & k ? 0 > k ? 0 : 255 : k) & 255, k = x, m[w + N] = U;
      }
    }
    function Ui(t, i, c, d) {
      var m = i.width, w = i.o;
      if (e(t != null && i != null), 0 > c || 0 >= d || c + d > w) return null;
      if (!t.Cc) {
        if (t.ga == null) {
          var y;
          if (t.ga = new oi(), (y = t.ga == null) || (y = i.width * i.o, e(t.Gb.length == 0), t.Gb = o(y), t.Uc = 0, t.Gb == null ? y = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, y = 1), y = !y), !y) {
            y = t.ga;
            var N = t.Fa, x = t.P, k = t.qc, U = t.mb, K = t.nb, Z = x + 1, G = k - 1, vt = y.l;
            if (e(N != null && U != null && i != null), Lr[0] = null, Lr[1] = Dr, Lr[2] = zi, Lr[3] = pr, y.ca = U, y.tb = K, y.c = i.width, y.i = i.height, e(0 < y.c && 0 < y.i), 1 >= k) i = 0;
            else if (y.$a = N[x + 0] >> 0 & 3, y.Z = N[x + 0] >> 2 & 3, y.Lc = N[x + 0] >> 4 & 3, x = N[x + 0] >> 6 & 3, 0 > y.$a || 1 < y.$a || 4 <= y.Z || 1 < y.Lc || x) i = 0;
            else if (vt.put = Tn, vt.ac = He, vt.bc = zn, vt.ma = y, vt.width = i.width, vt.height = i.height, vt.Da = i.Da, vt.v = i.v, vt.va = i.va, vt.j = i.j, vt.o = i.o, y.$a) t: {
              e(y.$a == 1), i = pn();
              e: for (; ; ) {
                if (i == null) {
                  i = 0;
                  break t;
                }
                if (e(y != null), y.mc = i, i.c = y.c, i.i = y.i, i.l = y.l, i.l.ma = y, i.l.width = y.c, i.l.height = y.i, i.a = 0, $(i.m, N, Z, G), !Wn(y.c, y.i, 1, i, null) || (i.ab == 1 && i.gc[0].hc == 3 && Qn(i.s) ? (y.ic = 1, N = i.c * i.i, i.Ta = null, i.Ua = 0, i.V = o(N), i.Ba = 0, i.V == null ? (i.a = 1, i = 0) : i = 1) : (y.ic = 0, i = Br(i, y.c)), !i)) break e;
                i = 1;
                break t;
              }
              y.mc = null, i = 0;
            }
            else i = G >= y.c * y.i;
            y = !i;
          }
          if (y) return null;
          t.ga.Lc != 1 ? t.Ga = 0 : d = w - c;
        }
        e(t.ga != null), e(c + d <= w);
        t: {
          if (i = (N = t.ga).c, w = N.l.o, N.$a == 0) {
            if (Z = t.rc, G = t.Vc, vt = t.Fa, x = t.P + 1 + c * i, k = t.mb, U = t.nb + c * i, e(x <= t.P + t.qc), N.Z != 0) for (e(Lr[N.Z] != null), y = 0; y < d; ++y) Lr[N.Z](Z, G, vt, x, k, U, i), Z = k, G = U, U += i, x += i;
            else for (y = 0; y < d; ++y) a(k, U, vt, x, i), Z = k, G = U, U += i, x += i;
            t.rc = Z, t.Vc = G;
          } else {
            if (e(N.mc != null), i = c + d, e((y = N.mc) != null), e(i <= y.i), y.C >= i) i = 1;
            else if (N.ic || J(), N.ic) {
              N = y.V, Z = y.Ba, G = y.c;
              var it = y.i, H = (vt = 1, x = y.$ / G, k = y.$ % G, U = y.m, K = y.s, y.$), V = G * it, pt = G * i, bt = K.wc, mt = H < pt ? Oe(K, k, x) : null;
              e(H <= V), e(i <= it), e(Qn(K));
              e: for (; ; ) {
                for (; !U.h && H < pt; ) {
                  if (k & bt || (mt = Oe(K, k, x)), e(mt != null), Y(U), 256 > (it = tn(mt.G[0], mt.H[0], U))) N[Z + H] = it, ++H, ++k >= G && (k = 0, ++x <= i && !(x % 16) && xn(y, x));
                  else {
                    if (!(280 > it)) {
                      vt = 0;
                      break e;
                    }
                    it = Nn(it - 256, U);
                    var Ot, St = tn(mt.G[4], mt.H[4], U);
                    if (Y(U), !(H >= (St = Un(G, St = Nn(St, U))) && V - H >= it)) {
                      vt = 0;
                      break e;
                    }
                    for (Ot = 0; Ot < it; ++Ot) N[Z + H + Ot] = N[Z + H + Ot - St];
                    for (H += it, k += it; k >= G; ) k -= G, ++x <= i && !(x % 16) && xn(y, x);
                    H < pt && k & bt && (mt = Oe(K, k, x));
                  }
                  e(U.h == M(U));
                }
                xn(y, x > i ? i : x);
                break e;
              }
              !vt || U.h && H < V ? (vt = 0, y.a = U.h ? 5 : 3) : y.$ = H, i = vt;
            } else i = Sn(y, y.V, y.Ba, y.c, y.i, i, Yr);
            if (!i) {
              d = 0;
              break t;
            }
          }
          c + d >= w && (t.Cc = 1), d = 1;
        }
        if (!d) return null;
        if (t.Cc && ((d = t.ga) != null && (d.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return t.nb + c * m;
    }
    function s(t, i, c, d, m, w) {
      for (; 0 < m--; ) {
        var y, N = t, x = i + (c ? 1 : 0), k = t, U = i + (c ? 0 : 3);
        for (y = 0; y < d; ++y) {
          var K = k[U + 4 * y];
          K != 255 && (K *= 32897, N[x + 4 * y + 0] = N[x + 4 * y + 0] * K >> 23, N[x + 4 * y + 1] = N[x + 4 * y + 1] * K >> 23, N[x + 4 * y + 2] = N[x + 4 * y + 2] * K >> 23);
        }
        i += w;
      }
    }
    function v(t, i, c, d, m) {
      for (; 0 < d--; ) {
        var w;
        for (w = 0; w < c; ++w) {
          var y = t[i + 2 * w + 0], N = 15 & (k = t[i + 2 * w + 1]), x = 4369 * N, k = (240 & k | k >> 4) * x >> 16;
          t[i + 2 * w + 0] = (240 & y | y >> 4) * x >> 16 & 240 | (15 & y | y << 4) * x >> 16 >> 4 & 15, t[i + 2 * w + 1] = 240 & k | N;
        }
        i += m;
      }
    }
    function C(t, i, c, d, m, w, y, N) {
      var x, k, U = 255;
      for (k = 0; k < m; ++k) {
        for (x = 0; x < d; ++x) {
          var K = t[i + x];
          w[y + 4 * x] = K, U &= K;
        }
        i += c, y += N;
      }
      return U != 255;
    }
    function T(t, i, c, d, m) {
      var w;
      for (w = 0; w < m; ++w) c[d + w] = t[i + w] >> 8;
    }
    function J() {
      wr = s, gi = v, Ia = C, As = T;
    }
    function st(t, i, c) {
      R[t] = function(d, m, w, y, N, x, k, U, K, Z, G, vt, it, H, V, pt, bt) {
        var mt, Ot = bt - 1 >> 1, St = N[x + 0] | k[U + 0] << 16, Rt = K[Z + 0] | G[vt + 0] << 16;
        e(d != null);
        var _t = 3 * St + Rt + 131074 >> 2;
        for (i(d[m + 0], 255 & _t, _t >> 16, it, H), w != null && (_t = 3 * Rt + St + 131074 >> 2, i(w[y + 0], 255 & _t, _t >> 16, V, pt)), mt = 1; mt <= Ot; ++mt) {
          var se = N[x + mt] | k[U + mt] << 16, le = K[Z + mt] | G[vt + mt] << 16, ae = St + se + Rt + le + 524296, ne = ae + 2 * (se + Rt) >> 3;
          _t = ne + St >> 1, St = (ae = ae + 2 * (St + le) >> 3) + se >> 1, i(d[m + 2 * mt - 1], 255 & _t, _t >> 16, it, H + (2 * mt - 1) * c), i(d[m + 2 * mt - 0], 255 & St, St >> 16, it, H + (2 * mt - 0) * c), w != null && (_t = ae + Rt >> 1, St = ne + le >> 1, i(w[y + 2 * mt - 1], 255 & _t, _t >> 16, V, pt + (2 * mt - 1) * c), i(w[y + 2 * mt + 0], 255 & St, St >> 16, V, pt + (2 * mt + 0) * c)), St = se, Rt = le;
        }
        1 & bt || (_t = 3 * St + Rt + 131074 >> 2, i(d[m + bt - 1], 255 & _t, _t >> 16, it, H + (bt - 1) * c), w != null && (_t = 3 * Rt + St + 131074 >> 2, i(w[y + bt - 1], 255 & _t, _t >> 16, V, pt + (bt - 1) * c)));
      };
    }
    function yt() {
      bn[ja] = ec, bn[Oa] = Bs, bn[Fs] = nc, bn[Ba] = Ms, bn[Ma] = Es, bn[Do] = qs, bn[Is] = rc, bn[Ro] = Bs, bn[To] = Ms, bn[Ea] = Es, bn[zo] = qs;
    }
    function jt(t) {
      return t & ~ic ? 0 > t ? 0 : 255 : t >> Ds;
    }
    function Dt(t, i) {
      return jt((19077 * t >> 8) + (26149 * i >> 8) - 14234);
    }
    function Kt(t, i, c) {
      return jt((19077 * t >> 8) - (6419 * i >> 8) - (13320 * c >> 8) + 8708);
    }
    function Qt(t, i) {
      return jt((19077 * t >> 8) + (33050 * i >> 8) - 17685);
    }
    function re(t, i, c, d, m) {
      d[m + 0] = Dt(t, c), d[m + 1] = Kt(t, i, c), d[m + 2] = Qt(t, i);
    }
    function Ne(t, i, c, d, m) {
      d[m + 0] = Qt(t, i), d[m + 1] = Kt(t, i, c), d[m + 2] = Dt(t, c);
    }
    function Se(t, i, c, d, m) {
      var w = Kt(t, i, c);
      i = w << 3 & 224 | Qt(t, i) >> 3, d[m + 0] = 248 & Dt(t, c) | w >> 5, d[m + 1] = i;
    }
    function Be(t, i, c, d, m) {
      var w = 240 & Qt(t, i) | 15;
      d[m + 0] = 240 & Dt(t, c) | Kt(t, i, c) >> 4, d[m + 1] = w;
    }
    function Ye(t, i, c, d, m) {
      d[m + 0] = 255, re(t, i, c, d, m + 1);
    }
    function Re(t, i, c, d, m) {
      Ne(t, i, c, d, m), d[m + 3] = 255;
    }
    function kn(t, i, c, d, m) {
      re(t, i, c, d, m), d[m + 3] = 255;
    }
    function ln(t, i) {
      return 0 > t ? 0 : t > i ? i : t;
    }
    function nr(t, i, c) {
      R[t] = function(d, m, w, y, N, x, k, U, K) {
        for (var Z = U + (-2 & K) * c; U != Z; ) i(d[m + 0], w[y + 0], N[x + 0], k, U), i(d[m + 1], w[y + 0], N[x + 0], k, U + c), m += 2, ++y, ++x, U += 2 * c;
        1 & K && i(d[m + 0], w[y + 0], N[x + 0], k, U);
      };
    }
    function ka(t, i, c) {
      return c == 0 ? t == 0 ? i == 0 ? 6 : 5 : i == 0 ? 4 : 0 : c;
    }
    function Hi(t, i, c, d, m) {
      switch (t >>> 30) {
        case 3:
          di(i, c, d, m, 0);
          break;
        case 2:
          Ki(i, c, d, m);
          break;
        case 1:
          jn(i, c, d, m);
      }
    }
    function Wi(t, i) {
      var c, d, m = i.M, w = i.Nb, y = t.oc, N = t.pc + 40, x = t.oc, k = t.pc + 584, U = t.oc, K = t.pc + 600;
      for (c = 0; 16 > c; ++c) y[N + 32 * c - 1] = 129;
      for (c = 0; 8 > c; ++c) x[k + 32 * c - 1] = 129, U[K + 32 * c - 1] = 129;
      for (0 < m ? y[N - 1 - 32] = x[k - 1 - 32] = U[K - 1 - 32] = 129 : (u(y, N - 32 - 1, 127, 21), u(x, k - 32 - 1, 127, 9), u(U, K - 32 - 1, 127, 9)), d = 0; d < t.za; ++d) {
        var Z = i.ya[i.aa + d];
        if (0 < d) {
          for (c = -1; 16 > c; ++c) a(y, N + 32 * c - 4, y, N + 32 * c + 12, 4);
          for (c = -1; 8 > c; ++c) a(x, k + 32 * c - 4, x, k + 32 * c + 4, 4), a(U, K + 32 * c - 4, U, K + 32 * c + 4, 4);
        }
        var G = t.Gd, vt = t.Hd + d, it = Z.ad, H = Z.Hc;
        if (0 < m && (a(y, N - 32, G[vt].y, 0, 16), a(x, k - 32, G[vt].f, 0, 8), a(U, K - 32, G[vt].ea, 0, 8)), Z.Za) {
          var V = y, pt = N - 32 + 16;
          for (0 < m && (d >= t.za - 1 ? u(V, pt, G[vt].y[15], 4) : a(V, pt, G[vt + 1].y, 0, 4)), c = 0; 4 > c; c++) V[pt + 128 + c] = V[pt + 256 + c] = V[pt + 384 + c] = V[pt + 0 + c];
          for (c = 0; 16 > c; ++c, H <<= 2) V = y, pt = N + Ts[c], On[Z.Ob[c]](V, pt), Hi(H, it, 16 * +c, V, pt);
        } else if (V = ka(d, m, Z.Ob[0]), yr[V](y, N), H != 0) for (c = 0; 16 > c; ++c, H <<= 2) Hi(H, it, 16 * +c, y, N + Ts[c]);
        for (c = Z.Gc, V = ka(d, m, Z.Dd), sr[V](x, k), sr[V](U, K), H = it, V = x, pt = k, 255 & (Z = c >> 0) && (170 & Z ? vr(H, 256, V, pt) : ir(H, 256, V, pt)), Z = U, H = K, 255 & (c >>= 8) && (170 & c ? vr(it, 320, Z, H) : ir(it, 320, Z, H)), m < t.Ub - 1 && (a(G[vt].y, 0, y, N + 480, 16), a(G[vt].f, 0, x, k + 224, 8), a(G[vt].ea, 0, U, K + 224, 8)), c = 8 * w * t.B, G = t.sa, vt = t.ta + 16 * d + 16 * w * t.R, it = t.qa, Z = t.ra + 8 * d + c, H = t.Ha, V = t.Ia + 8 * d + c, c = 0; 16 > c; ++c) a(G, vt + c * t.R, y, N + 32 * c, 16);
        for (c = 0; 8 > c; ++c) a(it, Z + c * t.B, x, k + 32 * c, 8), a(H, V + c * t.B, U, K + 32 * c, 8);
      }
    }
    function si(t, i, c, d, m, w, y, N, x) {
      var k = [0], U = [0], K = 0, Z = x != null ? x.kd : 0, G = x ?? new Ri();
      if (t == null || 12 > c) return 7;
      G.data = t, G.w = i, G.ha = c, i = [i], c = [c], G.gb = [G.gb];
      t: {
        var vt = i, it = c, H = G.gb;
        if (e(t != null), e(it != null), e(H != null), H[0] = 0, 12 <= it[0] && !n(t, vt[0], "RIFF")) {
          if (n(t, vt[0] + 8, "WEBP")) {
            H = 3;
            break t;
          }
          var V = Bt(t, vt[0] + 4);
          if (12 > V || 4294967286 < V) {
            H = 3;
            break t;
          }
          if (Z && V > it[0] - 8) {
            H = 7;
            break t;
          }
          H[0] = V, vt[0] += 12, it[0] -= 12;
        }
        H = 0;
      }
      if (H != 0) return H;
      for (V = 0 < G.gb[0], c = c[0]; ; ) {
        t: {
          var pt = t;
          it = i, H = c;
          var bt = k, mt = U, Ot = vt = [0];
          if ((_t = K = [K])[0] = 0, 8 > H[0]) H = 7;
          else {
            if (!n(pt, it[0], "VP8X")) {
              if (Bt(pt, it[0] + 4) != 10) {
                H = 3;
                break t;
              }
              if (18 > H[0]) {
                H = 7;
                break t;
              }
              var St = Bt(pt, it[0] + 8), Rt = 1 + Ct(pt, it[0] + 12);
              if (2147483648 <= Rt * (pt = 1 + Ct(pt, it[0] + 15))) {
                H = 3;
                break t;
              }
              Ot != null && (Ot[0] = St), bt != null && (bt[0] = Rt), mt != null && (mt[0] = pt), it[0] += 18, H[0] -= 18, _t[0] = 1;
            }
            H = 0;
          }
        }
        if (K = K[0], vt = vt[0], H != 0) return H;
        if (it = !!(2 & vt), !V && K) return 3;
        if (w != null && (w[0] = !!(16 & vt)), y != null && (y[0] = it), N != null && (N[0] = 0), y = k[0], vt = U[0], K && it && x == null) {
          H = 0;
          break;
        }
        if (4 > c) {
          H = 7;
          break;
        }
        if (V && K || !V && !K && !n(t, i[0], "ALPH")) {
          c = [c], G.na = [G.na], G.P = [G.P], G.Sa = [G.Sa];
          t: {
            St = t, H = i, V = c;
            var _t = G.gb;
            bt = G.na, mt = G.P, Ot = G.Sa, Rt = 22, e(St != null), e(V != null), pt = H[0];
            var se = V[0];
            for (e(bt != null), e(Ot != null), bt[0] = null, mt[0] = null, Ot[0] = 0; ; ) {
              if (H[0] = pt, V[0] = se, 8 > se) {
                H = 7;
                break t;
              }
              var le = Bt(St, pt + 4);
              if (4294967286 < le) {
                H = 3;
                break t;
              }
              var ae = 8 + le + 1 & -2;
              if (Rt += ae, 0 < _t && Rt > _t) {
                H = 3;
                break t;
              }
              if (!n(St, pt, "VP8 ") || !n(St, pt, "VP8L")) {
                H = 0;
                break t;
              }
              if (se[0] < ae) {
                H = 7;
                break t;
              }
              n(St, pt, "ALPH") || (bt[0] = St, mt[0] = pt + 8, Ot[0] = le), pt += ae, se -= ae;
            }
          }
          if (c = c[0], G.na = G.na[0], G.P = G.P[0], G.Sa = G.Sa[0], H != 0) break;
        }
        c = [c], G.Ja = [G.Ja], G.xa = [G.xa];
        t: if (_t = t, H = i, V = c, bt = G.gb[0], mt = G.Ja, Ot = G.xa, St = H[0], pt = !n(_t, St, "VP8 "), Rt = !n(_t, St, "VP8L"), e(_t != null), e(V != null), e(mt != null), e(Ot != null), 8 > V[0]) H = 7;
        else {
          if (pt || Rt) {
            if (_t = Bt(_t, St + 4), 12 <= bt && _t > bt - 12) {
              H = 3;
              break t;
            }
            if (Z && _t > V[0] - 8) {
              H = 7;
              break t;
            }
            mt[0] = _t, H[0] += 8, V[0] -= 8, Ot[0] = Rt;
          } else Ot[0] = 5 <= V[0] && _t[St + 0] == 47 && !(_t[St + 4] >> 5), mt[0] = V[0];
          H = 0;
        }
        if (c = c[0], G.Ja = G.Ja[0], G.xa = G.xa[0], i = i[0], H != 0) break;
        if (4294967286 < G.Ja) return 3;
        if (N == null || it || (N[0] = G.xa ? 2 : 1), y = [y], vt = [vt], G.xa) {
          if (5 > c) {
            H = 7;
            break;
          }
          N = y, Z = vt, it = w, t == null || 5 > c ? t = 0 : 5 <= c && t[i + 0] == 47 && !(t[i + 4] >> 5) ? (V = [0], _t = [0], bt = [0], $(mt = new L(), t, i, c), Tt(mt, V, _t, bt) ? (N != null && (N[0] = V[0]), Z != null && (Z[0] = _t[0]), it != null && (it[0] = bt[0]), t = 1) : t = 0) : t = 0;
        } else {
          if (10 > c) {
            H = 7;
            break;
          }
          N = vt, t == null || 10 > c || !fa(t, i + 3, c - 3) ? t = 0 : (Z = t[i + 0] | t[i + 1] << 8 | t[i + 2] << 16, it = 16383 & (t[i + 7] << 8 | t[i + 6]), t = 16383 & (t[i + 9] << 8 | t[i + 8]), 1 & Z || 3 < (Z >> 1 & 7) || !(Z >> 4 & 1) || Z >> 5 >= G.Ja || !it || !t ? t = 0 : (y && (y[0] = it), N && (N[0] = t), t = 1));
        }
        if (!t || (y = y[0], vt = vt[0], K && (k[0] != y || U[0] != vt))) return 3;
        x != null && (x[0] = G, x.offset = i - x.w, e(4294967286 > i - x.w), e(x.offset == x.ha - c));
        break;
      }
      return H == 0 || H == 7 && K && x == null ? (w != null && (w[0] |= G.na != null && 0 < G.na.length), d != null && (d[0] = y), m != null && (m[0] = vt), 0) : H;
    }
    function Vi(t, i, c) {
      var d = i.width, m = i.height, w = 0, y = 0, N = d, x = m;
      if (i.Da = t != null && 0 < t.Da, i.Da && (N = t.cd, x = t.bd, w = t.v, y = t.j, 11 > c || (w &= -2, y &= -2), 0 > w || 0 > y || 0 >= N || 0 >= x || w + N > d || y + x > m)) return 0;
      if (i.v = w, i.j = y, i.va = w + N, i.o = y + x, i.U = N, i.T = x, i.da = t != null && 0 < t.da, i.da) {
        if (!Xt(N, x, c = [t.ib], w = [t.hb])) return 0;
        i.ib = c[0], i.hb = w[0];
      }
      return i.ob = t != null && t.ob, i.Kb = t == null || !t.Sd, i.da && (i.ob = i.ib < 3 * d / 4 && i.hb < 3 * m / 4, i.Kb = 0), 1;
    }
    function Gi(t) {
      if (t == null) return 2;
      if (11 > t.S) {
        var i = t.f.RGBA;
        i.fb += (t.height - 1) * i.A, i.A = -i.A;
      } else i = t.f.kb, t = t.height, i.O += (t - 1) * i.fa, i.fa = -i.fa, i.N += (t - 1 >> 1) * i.Ab, i.Ab = -i.Ab, i.W += (t - 1 >> 1) * i.Db, i.Db = -i.Db, i.F != null && (i.J += (t - 1) * i.lb, i.lb = -i.lb);
      return 0;
    }
    function ui(t, i, c, d) {
      if (d == null || 0 >= t || 0 >= i) return 2;
      if (c != null) {
        if (c.Da) {
          var m = c.cd, w = c.bd, y = -2 & c.v, N = -2 & c.j;
          if (0 > y || 0 > N || 0 >= m || 0 >= w || y + m > t || N + w > i) return 2;
          t = m, i = w;
        }
        if (c.da) {
          if (!Xt(t, i, m = [c.ib], w = [c.hb])) return 2;
          t = m[0], i = w[0];
        }
      }
      d.width = t, d.height = i;
      t: {
        var x = d.width, k = d.height;
        if (t = d.S, 0 >= x || 0 >= k || !(t >= ja && 13 > t)) t = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            y = w = m = i = 0;
            var U = (N = x * zs[t]) * k;
            if (11 > t || (w = (k + 1) / 2 * (i = (x + 1) / 2), t == 12 && (y = (m = x) * k)), (k = o(U + 2 * w + y)) == null) {
              t = 1;
              break t;
            }
            d.sd = k, 11 > t ? ((x = d.f.RGBA).eb = k, x.fb = 0, x.A = N, x.size = U) : ((x = d.f.kb).y = k, x.O = 0, x.fa = N, x.Fd = U, x.f = k, x.N = 0 + U, x.Ab = i, x.Cd = w, x.ea = k, x.W = 0 + U + w, x.Db = i, x.Ed = w, t == 12 && (x.F = k, x.J = 0 + U + 2 * w), x.Tc = y, x.lb = m);
          }
          if (i = 1, m = d.S, w = d.width, y = d.height, m >= ja && 13 > m) if (11 > m) t = d.f.RGBA, i &= (N = Math.abs(t.A)) * (y - 1) + w <= t.size, i &= N >= w * zs[m], i &= t.eb != null;
          else {
            t = d.f.kb, N = (w + 1) / 2, U = (y + 1) / 2, x = Math.abs(t.fa), k = Math.abs(t.Ab);
            var K = Math.abs(t.Db), Z = Math.abs(t.lb), G = Z * (y - 1) + w;
            i &= x * (y - 1) + w <= t.Fd, i &= k * (U - 1) + N <= t.Cd, i = (i &= K * (U - 1) + N <= t.Ed) & x >= w & k >= N & K >= N, i &= t.y != null, i &= t.f != null, i &= t.ea != null, m == 12 && (i &= Z >= w, i &= G <= t.Tc, i &= t.F != null);
          }
          else i = 0;
          t = i ? 0 : 2;
        }
      }
      return t != 0 || c != null && c.fd && (t = Gi(d)), t;
    }
    var nn = 64, ci = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], li = 24, hi = 32, Yi = 8, rn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    xt("Predictor0", "PredictorAdd0"), R.Predictor0 = function() {
      return 4278190080;
    }, R.Predictor1 = function(t) {
      return t;
    }, R.Predictor2 = function(t, i, c) {
      return i[c + 0];
    }, R.Predictor3 = function(t, i, c) {
      return i[c + 1];
    }, R.Predictor4 = function(t, i, c) {
      return i[c - 1];
    }, R.Predictor5 = function(t, i, c) {
      return Pt(Pt(t, i[c + 1]), i[c + 0]);
    }, R.Predictor6 = function(t, i, c) {
      return Pt(t, i[c - 1]);
    }, R.Predictor7 = function(t, i, c) {
      return Pt(t, i[c + 0]);
    }, R.Predictor8 = function(t, i, c) {
      return Pt(i[c - 1], i[c + 0]);
    }, R.Predictor9 = function(t, i, c) {
      return Pt(i[c + 0], i[c + 1]);
    }, R.Predictor10 = function(t, i, c) {
      return Pt(Pt(t, i[c - 1]), Pt(i[c + 0], i[c + 1]));
    }, R.Predictor11 = function(t, i, c) {
      var d = i[c + 0];
      return 0 >= $t(d >> 24 & 255, t >> 24 & 255, (i = i[c - 1]) >> 24 & 255) + $t(d >> 16 & 255, t >> 16 & 255, i >> 16 & 255) + $t(d >> 8 & 255, t >> 8 & 255, i >> 8 & 255) + $t(255 & d, 255 & t, 255 & i) ? d : t;
    }, R.Predictor12 = function(t, i, c) {
      var d = i[c + 0];
      return (qt((t >> 24 & 255) + (d >> 24 & 255) - ((i = i[c - 1]) >> 24 & 255)) << 24 | qt((t >> 16 & 255) + (d >> 16 & 255) - (i >> 16 & 255)) << 16 | qt((t >> 8 & 255) + (d >> 8 & 255) - (i >> 8 & 255)) << 8 | qt((255 & t) + (255 & d) - (255 & i))) >>> 0;
    }, R.Predictor13 = function(t, i, c) {
      var d = i[c - 1];
      return (Gt((t = Pt(t, i[c + 0])) >> 24 & 255, d >> 24 & 255) << 24 | Gt(t >> 16 & 255, d >> 16 & 255) << 16 | Gt(t >> 8 & 255, d >> 8 & 255) << 8 | Gt(t >> 0 & 255, d >> 0 & 255)) >>> 0;
    };
    var Bo = R.PredictorAdd0;
    R.PredictorAdd1 = te, xt("Predictor2", "PredictorAdd2"), xt("Predictor3", "PredictorAdd3"), xt("Predictor4", "PredictorAdd4"), xt("Predictor5", "PredictorAdd5"), xt("Predictor6", "PredictorAdd6"), xt("Predictor7", "PredictorAdd7"), xt("Predictor8", "PredictorAdd8"), xt("Predictor9", "PredictorAdd9"), xt("Predictor10", "PredictorAdd10"), xt("Predictor11", "PredictorAdd11"), xt("Predictor12", "PredictorAdd12"), xt("Predictor13", "PredictorAdd13");
    var Ji = R.PredictorAdd2;
    ee("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
      return t >> 8 & 255;
    }, function(t) {
      return t;
    }), ee("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
      return t;
    }, function(t) {
      return t >> 8 & 255;
    });
    var Fa, Fn = R.ColorIndexInverseTransform, Xi = R.MapARGB, Mo = R.VP8LColorIndexInverseTransformAlpha, Eo = R.MapAlpha, gr = R.VP8LPredictorsAdd = [];
    gr.length = 16, (R.VP8LPredictors = []).length = 16, (R.VP8LPredictorsAdd_C = []).length = 16, (R.VP8LPredictors_C = []).length = 16;
    var gn, In, mr, Gn, rr, fi, Cn, di, Ki, vr, jn, ir, Rr, pi, Tr, br, Zi, mn, ar, be, we, Fe, De, or, wr, gi, Ia, As, xs = o(511), Ss = o(2041), _s = o(225), Ps = o(767), ks = 0, qo = Ss, Ca = _s, hn = Ps, vn = xs, ja = 0, Oa = 1, Fs = 2, Ba = 3, Ma = 4, Do = 5, Is = 6, Ro = 7, To = 8, Ea = 9, zo = 10, zu = [2, 3, 7], Uu = [3, 3, 11], Cs = [280, 256, 256, 256, 40], Hu = [0, 1, 1, 1, 0], Wu = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], Vu = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], Gu = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], Yu = 8, Uo = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], Ho = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], $i = null, Ju = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], Xu = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], js = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], Ku = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], Zu = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], $u = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], Qu = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], yr = [], On = [], sr = [], tc = 1, Os = 2, Lr = [], bn = [];
    st("UpsampleRgbLinePair", re, 3), st("UpsampleBgrLinePair", Ne, 3), st("UpsampleRgbaLinePair", kn, 4), st("UpsampleBgraLinePair", Re, 4), st("UpsampleArgbLinePair", Ye, 4), st("UpsampleRgba4444LinePair", Be, 2), st("UpsampleRgb565LinePair", Se, 2);
    var ec = R.UpsampleRgbLinePair, nc = R.UpsampleBgrLinePair, Bs = R.UpsampleRgbaLinePair, Ms = R.UpsampleBgraLinePair, Es = R.UpsampleArgbLinePair, qs = R.UpsampleRgba4444LinePair, rc = R.UpsampleRgb565LinePair, qa = 16, Da = 1 << qa - 1, Qi = -227, Wo = 482, Ds = 6, ic = (256 << Ds) - 1, Rs = 0, ac = o(256), oc = o(256), sc = o(256), uc = o(256), cc = o(Wo - Qi), lc = o(Wo - Qi);
    nr("YuvToRgbRow", re, 3), nr("YuvToBgrRow", Ne, 3), nr("YuvToRgbaRow", kn, 4), nr("YuvToBgraRow", Re, 4), nr("YuvToArgbRow", Ye, 4), nr("YuvToRgba4444Row", Be, 2), nr("YuvToRgb565Row", Se, 2);
    var Ts = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], Ra = [0, 2, 8], hc = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], fc = 1;
    this.WebPDecodeRGBA = function(t, i, c, d, m) {
      var w = Oa, y = new ai(), N = new Ln();
      y.ba = N, N.S = w, N.width = [N.width], N.height = [N.height];
      var x = N.width, k = N.height, U = new $n();
      if (U == null || t == null) var K = 2;
      else e(U != null), K = si(t, i, c, U.width, U.height, U.Pd, U.Qd, U.format, null);
      if (K != 0 ? x = 0 : (x != null && (x[0] = U.width[0]), k != null && (k[0] = U.height[0]), x = 1), x) {
        N.width = N.width[0], N.height = N.height[0], d != null && (d[0] = N.width), m != null && (m[0] = N.height);
        t: {
          if (d = new $r(), (m = new Ri()).data = t, m.w = i, m.ha = c, m.kd = 1, i = [0], e(m != null), ((t = si(m.data, m.w, m.ha, null, null, null, i, null, m)) == 0 || t == 7) && i[0] && (t = 4), (i = t) == 0) {
            if (e(y != null), d.data = m.data, d.w = m.w + m.offset, d.ha = m.ha - m.offset, d.put = Tn, d.ac = He, d.bc = zn, d.ma = y, m.xa) {
              if ((t = pn()) == null) {
                y = 1;
                break t;
              }
              if (function(Z, G) {
                var vt = [0], it = [0], H = [0];
                e: for (; ; ) {
                  if (Z == null) return 0;
                  if (G == null) return Z.a = 2, 0;
                  if (Z.l = G, Z.a = 0, $(Z.m, G.data, G.w, G.ha), !Tt(Z.m, vt, it, H)) {
                    Z.a = 3;
                    break e;
                  }
                  if (Z.xb = Os, G.width = vt[0], G.height = it[0], !Wn(vt[0], it[0], 1, Z, null)) break e;
                  return 1;
                }
                return e(Z.a != 0), 0;
              }(t, d)) {
                if (d = (i = ui(d.width, d.height, y.Oa, y.ba)) == 0) {
                  e: {
                    d = t;
                    n: for (; ; ) {
                      if (d == null) {
                        d = 0;
                        break e;
                      }
                      if (e(d.s.yc != null), e(d.s.Ya != null), e(0 < d.s.Wb), e((c = d.l) != null), e((m = c.ma) != null), d.xb != 0) {
                        if (d.ca = m.ba, d.tb = m.tb, e(d.ca != null), !Vi(m.Oa, c, Ba)) {
                          d.a = 2;
                          break n;
                        }
                        if (!Br(d, c.width) || c.da) break n;
                        if ((c.da || ue(d.ca.S)) && J(), 11 > d.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), d.ca.f.kb.F != null && J()), d.Pb && 0 < d.s.ua && d.s.vb.X == null && !zt(d.s.vb, d.s.Wa.Xa)) {
                          d.a = 1;
                          break n;
                        }
                        d.xb = 0;
                      }
                      if (!Sn(d, d.V, d.Ba, d.c, d.i, c.o, Gr)) break n;
                      m.Dc = d.Ma, d = 1;
                      break e;
                    }
                    e(d.a != 0), d = 0;
                  }
                  d = !d;
                }
                d && (i = t.a);
              } else i = t.a;
            } else {
              if ((t = new go()) == null) {
                y = 1;
                break t;
              }
              if (t.Fa = m.na, t.P = m.P, t.qc = m.Sa, da(t, d)) {
                if ((i = ui(d.width, d.height, y.Oa, y.ba)) == 0) {
                  if (t.Aa = 0, c = y.Oa, e((m = t) != null), c != null) {
                    if (0 < (x = 0 > (x = c.Md) ? 0 : 100 < x ? 255 : 255 * x / 100)) {
                      for (k = U = 0; 4 > k; ++k) 12 > (K = m.pb[k]).lc && (K.ia = x * hc[0 > K.lc ? 0 : K.lc] >> 3), U |= K.ia;
                      U && (alert("todo:VP8InitRandom"), m.ia = 1);
                    }
                    m.Ga = c.Id, 100 < m.Ga ? m.Ga = 100 : 0 > m.Ga && (m.Ga = 0);
                  }
                  mo(t, d) || (i = t.a);
                }
              } else i = t.a;
            }
            i == 0 && y.Oa != null && y.Oa.fd && (i = Gi(y.ba));
          }
          y = i;
        }
        w = y != 0 ? null : 11 > w ? N.f.RGBA.eb : N.f.kb.y;
      } else w = null;
      return w;
    };
    var zs = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(R, gt) {
    for (var dt = "", F = 0; F < 4; F++) dt += String.fromCharCode(R[gt++]);
    return dt;
  }
  function b(R, gt) {
    return (R[gt + 0] << 0 | R[gt + 1] << 8 | R[gt + 2] << 16) >>> 0;
  }
  function A(R, gt) {
    return (R[gt + 0] << 0 | R[gt + 1] << 8 | R[gt + 2] << 16 | R[gt + 3] << 24) >>> 0;
  }
  new f();
  var S = [0], p = [0], O = [], I = new f(), q = r, _ = function(R, gt) {
    var dt = {}, F = 0, P = !1, z = 0, D = 0;
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
    }(R, gt, "RIFF", 4)) {
      var at, nt;
      for (A(R, gt += 4), gt += 8; gt < R.length; ) {
        var lt = g(R, gt), $ = A(R, gt += 4);
        gt += 4;
        var ft = $ + (1 & $);
        switch (lt) {
          case "VP8 ":
          case "VP8L":
            dt.frames[F] === void 0 && (dt.frames[F] = {}), (L = dt.frames[F]).src_off = P ? D : gt - 8, L.src_size = z + $ + 8, F++, P && (P = !1, z = 0, D = 0);
            break;
          case "VP8X":
            (L = dt.header = {}).feature_flags = R[gt];
            var ht = gt + 4;
            L.canvas_width = 1 + b(R, ht), ht += 3, L.canvas_height = 1 + b(R, ht), ht += 3;
            break;
          case "ALPH":
            P = !0, z = ft + 8, D = gt - 8;
            break;
          case "ANIM":
            (L = dt.header).bgcolor = A(R, gt), ht = gt + 4, L.loop_count = (at = R)[(nt = ht) + 0] << 0 | at[nt + 1] << 8, ht += 2;
            break;
          case "ANMF":
            var kt, L;
            (L = dt.frames[F] = {}).offset_x = 2 * b(R, gt), gt += 3, L.offset_y = 2 * b(R, gt), gt += 3, L.width = 1 + b(R, gt), gt += 3, L.height = 1 + b(R, gt), gt += 3, L.duration = b(R, gt), gt += 3, kt = R[gt++], L.dispose = 1 & kt, L.blend = kt >> 1 & 1;
        }
        lt != "ANMF" && (gt += ft);
      }
      return dt;
    }
  }(q, 0);
  _.response = q, _.rgbaoutput = !0, _.dataurl = !1;
  var B = _.header ? _.header : null, X = _.frames ? _.frames : null;
  if (B) {
    B.loop_counter = B.loop_count, S = [B.canvas_height], p = [B.canvas_width];
    for (var ot = 0; ot < X.length && X[ot].blend != 0; ot++) ;
  }
  var ct = X[0], wt = I.WebPDecodeRGBA(q, ct.src_off, ct.src_size, p, S);
  ct.rgba = wt, ct.imgwidth = p[0], ct.imgheight = S[0];
  for (var tt = 0; tt < p[0] * S[0] * 4; tt++) O[tt] = wt[tt];
  return this.width = p, this.height = S, this.data = O, this;
}
(function(r) {
  var e = function() {
    return typeof ps == "function";
  }, n = function(S, p, O, I) {
    var q = 4, _ = l;
    switch (I) {
      case r.image_compression.FAST:
        q = 1, _ = o;
        break;
      case r.image_compression.MEDIUM:
        q = 6, _ = h;
        break;
      case r.image_compression.SLOW:
        q = 9, _ = f;
    }
    S = a(S, p, O, _);
    var B = ps(S, { level: q });
    return r.__addimage__.arrayBufferToBinaryString(B);
  }, a = function(S, p, O, I) {
    for (var q, _, B, X = S.length / p, ot = new Uint8Array(S.length + X), ct = b(), wt = 0; wt < X; wt += 1) {
      if (B = wt * p, q = S.subarray(B, B + p), I) ot.set(I(q, O, _), B + wt);
      else {
        for (var tt, R = ct.length, gt = []; tt < R; tt += 1) gt[tt] = ct[tt](q, O, _);
        var dt = A(gt.concat());
        ot.set(gt[dt], B + wt);
      }
      _ = q;
    }
    return ot;
  }, u = function(S) {
    var p = Array.apply([], S);
    return p.unshift(0), p;
  }, o = function(S, p) {
    var O, I = [], q = S.length;
    I[0] = 1;
    for (var _ = 0; _ < q; _ += 1) O = S[_ - p] || 0, I[_ + 1] = S[_] - O + 256 & 255;
    return I;
  }, l = function(S, p, O) {
    var I, q = [], _ = S.length;
    q[0] = 2;
    for (var B = 0; B < _; B += 1) I = O && O[B] || 0, q[B + 1] = S[B] - I + 256 & 255;
    return q;
  }, h = function(S, p, O) {
    var I, q, _ = [], B = S.length;
    _[0] = 3;
    for (var X = 0; X < B; X += 1) I = S[X - p] || 0, q = O && O[X] || 0, _[X + 1] = S[X] + 256 - (I + q >>> 1) & 255;
    return _;
  }, f = function(S, p, O) {
    var I, q, _, B, X = [], ot = S.length;
    X[0] = 4;
    for (var ct = 0; ct < ot; ct += 1) I = S[ct - p] || 0, q = O && O[ct] || 0, _ = O && O[ct - p] || 0, B = g(I, q, _), X[ct + 1] = S[ct] - B + 256 & 255;
    return X;
  }, g = function(S, p, O) {
    if (S === p && p === O) return S;
    var I = Math.abs(p - O), q = Math.abs(S - O), _ = Math.abs(S + p - O - O);
    return I <= q && I <= _ ? S : q <= _ ? p : O;
  }, b = function() {
    return [u, o, l, h, f];
  }, A = function(S) {
    var p = S.map(function(O) {
      return O.reduce(function(I, q) {
        return I + Math.abs(q);
      }, 0);
    });
    return p.indexOf(Math.min.apply(null, p));
  };
  r.processPNG = function(S, p, O, I) {
    var q, _, B, X, ot, ct, wt, tt, R, gt, dt, F, P, z, D, at = this.decode.FLATE_DECODE, nt = "";
    if (this.__addimage__.isArrayBuffer(S) && (S = new Uint8Array(S)), this.__addimage__.isArrayBufferView(S)) {
      if (S = (B = new l1(S)).imgData, _ = B.bits, q = B.colorSpace, ot = B.colors, [4, 6].indexOf(B.colorType) !== -1) {
        if (B.bits === 8) {
          R = (tt = B.pixelBitlength == 32 ? new Uint32Array(B.decodePixels().buffer) : B.pixelBitlength == 16 ? new Uint16Array(B.decodePixels().buffer) : new Uint8Array(B.decodePixels().buffer)).length, dt = new Uint8Array(R * B.colors), gt = new Uint8Array(R);
          var lt, $ = B.pixelBitlength - B.bits;
          for (z = 0, D = 0; z < R; z++) {
            for (P = tt[z], lt = 0; lt < $; ) dt[D++] = P >>> lt & 255, lt += B.bits;
            gt[z] = P >>> lt & 255;
          }
        }
        if (B.bits === 16) {
          R = (tt = new Uint32Array(B.decodePixels().buffer)).length, dt = new Uint8Array(R * (32 / B.pixelBitlength) * B.colors), gt = new Uint8Array(R * (32 / B.pixelBitlength)), F = B.colors > 1, z = 0, D = 0;
          for (var ft = 0; z < R; ) P = tt[z++], dt[D++] = P >>> 0 & 255, F && (dt[D++] = P >>> 16 & 255, P = tt[z++], dt[D++] = P >>> 0 & 255), gt[ft++] = P >>> 16 & 255;
          _ = 8;
        }
        I !== r.image_compression.NONE && e() ? (S = n(dt, B.width * B.colors, B.colors, I), wt = n(gt, B.width, 1, I)) : (S = dt, wt = gt, at = void 0);
      }
      if (B.colorType === 3 && (q = this.color_spaces.INDEXED, ct = B.palette, B.transparency.indexed)) {
        var ht = B.transparency.indexed, kt = 0;
        for (z = 0, R = ht.length; z < R; ++z) kt += ht[z];
        if ((kt /= 255) === R - 1 && ht.indexOf(0) !== -1) X = [ht.indexOf(0)];
        else if (kt !== R) {
          for (tt = B.decodePixels(), gt = new Uint8Array(tt.length), z = 0, R = tt.length; z < R; z++) gt[z] = ht[tt[z]];
          wt = n(gt, B.width, 1);
        }
      }
      var L = function(j) {
        var M;
        switch (j) {
          case r.image_compression.FAST:
            M = 11;
            break;
          case r.image_compression.MEDIUM:
            M = 13;
            break;
          case r.image_compression.SLOW:
            M = 14;
            break;
          default:
            M = 12;
        }
        return M;
      }(I);
      return at === this.decode.FLATE_DECODE && (nt = "/Predictor " + L + " "), nt += "/Colors " + ot + " /BitsPerComponent " + _ + " /Columns " + B.width, (this.__addimage__.isArrayBuffer(S) || this.__addimage__.isArrayBufferView(S)) && (S = this.__addimage__.arrayBufferToBinaryString(S)), (wt && this.__addimage__.isArrayBuffer(wt) || this.__addimage__.isArrayBufferView(wt)) && (wt = this.__addimage__.arrayBufferToBinaryString(wt)), { alias: O, data: S, index: p, filter: at, decodeParameters: nt, transparency: X, palette: ct, sMask: wt, predictor: L, width: B.width, height: B.height, bitsPerComponent: _, colorSpace: q };
    }
  };
})(Ut.API), function(r) {
  r.processGIF89A = function(e, n, a, u) {
    var o = new h1(e), l = o.width, h = o.height, f = [];
    o.decodeAndBlitFrameRGBA(0, f);
    var g = { data: f, width: l, height: h }, b = new us(100).encode(g, 100);
    return r.processJPEG.call(this, b, n, a, u);
  }, r.processGIF87A = r.processGIF89A;
}(Ut.API), En.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var r = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(r);
    for (var e = 0; e < r; e++) {
      var n = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0);
      this.palette[e] = { red: u, green: a, blue: n, quad: o };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, En.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var r = "bit" + this.bitPP, e = this.width * this.height * 4;
    this.data = new Uint8Array(e), this[r]();
  } catch (n) {
    ve.log("bit decode error:" + n);
  }
}, En.prototype.bit1 = function() {
  var r, e = Math.ceil(this.width / 8), n = e % 4;
  for (r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, u = 0; u < e; u++) for (var o = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 8 * u * 4, h = 0; h < 8 && 8 * u + h < this.width; h++) {
      var f = this.palette[o >> 7 - h & 1];
      this.data[l + 4 * h] = f.blue, this.data[l + 4 * h + 1] = f.green, this.data[l + 4 * h + 2] = f.red, this.data[l + 4 * h + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, En.prototype.bit4 = function() {
  for (var r = Math.ceil(this.width / 2), e = r % 4, n = this.height - 1; n >= 0; n--) {
    for (var a = this.bottom_up ? n : this.height - 1 - n, u = 0; u < r; u++) {
      var o = this.datav.getUint8(this.pos++, !0), l = a * this.width * 4 + 2 * u * 4, h = o >> 4, f = 15 & o, g = this.palette[h];
      if (this.data[l] = g.blue, this.data[l + 1] = g.green, this.data[l + 2] = g.red, this.data[l + 3] = 255, 2 * u + 1 >= this.width) break;
      g = this.palette[f], this.data[l + 4] = g.blue, this.data[l + 4 + 1] = g.green, this.data[l + 4 + 2] = g.red, this.data[l + 4 + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, En.prototype.bit8 = function() {
  for (var r = this.width % 4, e = this.height - 1; e >= 0; e--) {
    for (var n = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
      var u = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 4 * a;
      if (u < this.palette.length) {
        var l = this.palette[u];
        this.data[o] = l.red, this.data[o + 1] = l.green, this.data[o + 2] = l.blue, this.data[o + 3] = 255;
      } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, En.prototype.bit15 = function() {
  for (var r = this.width % 3, e = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
    for (var a = this.bottom_up ? n : this.height - 1 - n, u = 0; u < this.width; u++) {
      var o = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var l = (o & e) / e * 255 | 0, h = (o >> 5 & e) / e * 255 | 0, f = (o >> 10 & e) / e * 255 | 0, g = o >> 15 ? 255 : 0, b = a * this.width * 4 + 4 * u;
      this.data[b] = f, this.data[b + 1] = h, this.data[b + 2] = l, this.data[b + 3] = g;
    }
    this.pos += r;
  }
}, En.prototype.bit16 = function() {
  for (var r = this.width % 3, e = parseInt("11111", 2), n = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
    for (var u = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
      var l = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var h = (l & e) / e * 255 | 0, f = (l >> 5 & n) / n * 255 | 0, g = (l >> 11) / e * 255 | 0, b = u * this.width * 4 + 4 * o;
      this.data[b] = g, this.data[b + 1] = f, this.data[b + 2] = h, this.data[b + 3] = 255;
    }
    this.pos += r;
  }
}, En.prototype.bit24 = function() {
  for (var r = this.height - 1; r >= 0; r--) {
    for (var e = this.bottom_up ? r : this.height - 1 - r, n = 0; n < this.width; n++) {
      var a = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), l = e * this.width * 4 + 4 * n;
      this.data[l] = o, this.data[l + 1] = u, this.data[l + 2] = a, this.data[l + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, En.prototype.bit32 = function() {
  for (var r = this.height - 1; r >= 0; r--) for (var e = this.bottom_up ? r : this.height - 1 - r, n = 0; n < this.width; n++) {
    var a = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), l = this.datav.getUint8(this.pos++, !0), h = e * this.width * 4 + 4 * n;
    this.data[h] = o, this.data[h + 1] = u, this.data[h + 2] = a, this.data[h + 3] = l;
  }
}, En.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  r.processBMP = function(e, n, a, u) {
    var o = new En(e, !1), l = o.width, h = o.height, f = { data: o.getData(), width: l, height: h }, g = new us(100).encode(f, 100);
    return r.processJPEG.call(this, g, n, a, u);
  };
}(Ut.API), Nu.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  r.processWEBP = function(e, n, a, u) {
    var o = new Nu(e), l = o.width, h = o.height, f = { data: o.getData(), width: l, height: h }, g = new us(100).encode(f, 100);
    return r.processJPEG.call(this, g, n, a, u);
  };
}(Ut.API), Ut.API.processRGBA = function(r, e, n) {
  for (var a = r.data, u = a.length, o = new Uint8Array(u / 4 * 3), l = new Uint8Array(u / 4), h = 0, f = 0, g = 0; g < u; g += 4) {
    var b = a[g], A = a[g + 1], S = a[g + 2], p = a[g + 3];
    o[h++] = b, o[h++] = A, o[h++] = S, l[f++] = p;
  }
  var O = this.__addimage__.arrayBufferToBinaryString(o);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(l), data: O, index: e, alias: n, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: r.width, height: r.height };
}, Ut.API.setLanguage = function(r) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[r] !== void 0 && (this.internal.languageSettings.languageCode = r, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Li = Ut.API, Qa = Li.getCharWidthsArray = function(r, e) {
  var n, a, u = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), l = e.charSpace || this.internal.getCharSpace(), h = e.widths ? e.widths : u.metadata.Unicode.widths, f = h.fof ? h.fof : 1, g = e.kerning ? e.kerning : u.metadata.Unicode.kerning, b = g.fof ? g.fof : 1, A = e.doKerning !== !1, S = 0, p = r.length, O = 0, I = h[0] || f, q = [];
  for (n = 0; n < p; n++) a = r.charCodeAt(n), typeof u.metadata.widthOfString == "function" ? q.push((u.metadata.widthOfGlyph(u.metadata.characterToGlyph(a)) + l * (1e3 / o) || 0) / 1e3) : (S = A && fe(g[a]) === "object" && !isNaN(parseInt(g[a][O], 10)) ? g[a][O] / b : 0, q.push((h[a] || I) / f + S)), O = a;
  return q;
}, bu = Li.getStringUnitWidth = function(r, e) {
  var n = (e = e || {}).fontSize || this.internal.getFontSize(), a = e.font || this.internal.getFont(), u = e.charSpace || this.internal.getCharSpace();
  return Li.processArabic && (r = Li.processArabic(r)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(r, n, u) / n : Qa.apply(this, arguments).reduce(function(o, l) {
    return o + l;
  }, 0);
}, wu = function(r, e, n, a) {
  for (var u = [], o = 0, l = r.length, h = 0; o !== l && h + e[o] < n; ) h += e[o], o++;
  u.push(r.slice(0, o));
  var f = o;
  for (h = 0; o !== l; ) h + e[o] > a && (u.push(r.slice(f, o)), h = 0, f = o), h += e[o], o++;
  return f !== o && u.push(r.slice(f, o)), u;
}, yu = function(r, e, n) {
  n || (n = {});
  var a, u, o, l, h, f, g, b = [], A = [b], S = n.textIndent || 0, p = 0, O = 0, I = r.split(" "), q = Qa.apply(this, [" ", n])[0];
  if (f = n.lineIndent === -1 ? I[0].length + 2 : n.lineIndent || 0) {
    var _ = Array(f).join(" "), B = [];
    I.map(function(ot) {
      (ot = ot.split(/\s*\n/)).length > 1 ? B = B.concat(ot.map(function(ct, wt) {
        return (wt && ct.length ? `
` : "") + ct;
      })) : B.push(ot[0]);
    }), I = B, f = bu.apply(this, [_, n]);
  }
  for (o = 0, l = I.length; o < l; o++) {
    var X = 0;
    if (a = I[o], f && a[0] == `
` && (a = a.substr(1), X = 1), S + p + (O = (u = Qa.apply(this, [a, n])).reduce(function(ot, ct) {
      return ot + ct;
    }, 0)) > e || X) {
      if (O > e) {
        for (h = wu.apply(this, [a, u, e - (S + p), e]), b.push(h.shift()), b = [h.pop()]; h.length; ) A.push([h.shift()]);
        O = u.slice(a.length - (b[0] ? b[0].length : 0)).reduce(function(ot, ct) {
          return ot + ct;
        }, 0);
      } else b = [a];
      A.push(b), S = O + f, p = q;
    } else b.push(a), S += p + O, p = q;
  }
  return g = f ? function(ot, ct) {
    return (ct ? _ : "") + ot.join(" ");
  } : function(ot) {
    return ot.join(" ");
  }, A.map(g);
}, Li.splitTextToSize = function(r, e, n) {
  var a, u = (n = n || {}).fontSize || this.internal.getFontSize(), o = (function(b) {
    if (b.widths && b.kerning) return { widths: b.widths, kerning: b.kerning };
    var A = this.internal.getFont(b.fontName, b.fontStyle);
    return A.metadata.Unicode ? { widths: A.metadata.Unicode.widths || { 0: 1 }, kerning: A.metadata.Unicode.kerning || {} } : { font: A.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, n);
  a = Array.isArray(r) ? r : String(r).split(/\r?\n/);
  var l = 1 * this.internal.scaleFactor * e / u;
  o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / u : 0, o.lineIndent = n.lineIndent;
  var h, f, g = [];
  for (h = 0, f = a.length; h < f; h++) g = g.concat(yu.apply(this, [a[h], l, o]));
  return g;
}, function(r) {
  r.__fontmetrics__ = r.__fontmetrics__ || {};
  for (var e = "klmnopqrstuvwxyz", n = {}, a = {}, u = 0; u < e.length; u++) n[e[u]] = "0123456789abcdef"[u], a["0123456789abcdef"[u]] = e[u];
  var o = function(A) {
    return "0x" + parseInt(A, 10).toString(16);
  }, l = r.__fontmetrics__.compress = function(A) {
    var S, p, O, I, q = ["{"];
    for (var _ in A) {
      if (S = A[_], isNaN(parseInt(_, 10)) ? p = "'" + _ + "'" : (_ = parseInt(_, 10), p = (p = o(_).slice(2)).slice(0, -1) + a[p.slice(-1)]), typeof S == "number") S < 0 ? (O = o(S).slice(3), I = "-") : (O = o(S).slice(2), I = ""), O = I + O.slice(0, -1) + a[O.slice(-1)];
      else {
        if (fe(S) !== "object") throw new Error("Don't know what to do with value type " + fe(S) + ".");
        O = l(S);
      }
      q.push(p + O);
    }
    return q.push("}"), q.join("");
  }, h = r.__fontmetrics__.uncompress = function(A) {
    if (typeof A != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var S, p, O, I, q = {}, _ = 1, B = q, X = [], ot = "", ct = "", wt = A.length - 1, tt = 1; tt < wt; tt += 1) (I = A[tt]) == "'" ? S ? (O = S.join(""), S = void 0) : S = [] : S ? S.push(I) : I == "{" ? (X.push([B, O]), B = {}, O = void 0) : I == "}" ? ((p = X.pop())[0][p[1]] = B, O = void 0, B = p[0]) : I == "-" ? _ = -1 : O === void 0 ? n.hasOwnProperty(I) ? (ot += n[I], O = parseInt(ot, 16) * _, _ = 1, ot = "") : ot += I : n.hasOwnProperty(I) ? (ct += n[I], B[O] = parseInt(ct, 16) * _, _ = 1, O = void 0, ct = "") : ct += I;
    return q;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, b = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  r.events.push(["addFont", function(A) {
    var S = A.font, p = b.Unicode[S.postScriptName];
    p && (S.metadata.Unicode = {}, S.metadata.Unicode.widths = p.widths, S.metadata.Unicode.kerning = p.kerning);
    var O = g.Unicode[S.postScriptName];
    O && (S.metadata.Unicode.encoding = O, S.encoding = O.codePages[0]);
  }]);
}(Ut.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e = function(n) {
    for (var a = n.length, u = new Uint8Array(a), o = 0; o < a; o++) u[o] = n.charCodeAt(o);
    return u;
  };
  r.API.events.push(["addFont", function(n) {
    var a = void 0, u = n.font, o = n.instance;
    if (!u.isStandardFont) {
      if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + u.postScriptName + "').");
      if (typeof (a = o.existsFileInVFS(u.postScriptName) === !1 ? o.loadFile(u.postScriptName) : o.getFileFromVFS(u.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + u.postScriptName + "').");
      (function(l, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(oa(h)), l.metadata = r.API.TTFFont.open(h), l.metadata.Unicode = l.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, l.metadata.glyIdsUsed = [0];
      })(u, a);
    }
  }]);
}(Ut), /** @license
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
function(r) {
  function e() {
    return (Ht.canvg ? Promise.resolve(Ht.canvg) : import("./index.es-CCQT1i1o.js")).catch(function(n) {
      return Promise.reject(new Error("Could not load canvg: " + n));
    }).then(function(n) {
      return n.default ? n.default : n;
    });
  }
  Ut.API.addSvgAsImage = function(n, a, u, o, l, h, f, g) {
    if (isNaN(a) || isNaN(u)) throw ve.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(o) || isNaN(l)) throw ve.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var b = document.createElement("canvas");
    b.width = o, b.height = l;
    var A = b.getContext("2d");
    A.fillStyle = "#fff", A.fillRect(0, 0, b.width, b.height);
    var S = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, p = this;
    return e().then(function(O) {
      return O.fromString(A, n, S);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(O) {
      return O.render(S);
    }).then(function() {
      p.addImage(b.toDataURL("image/jpeg", 1), a, u, o, l, f, g);
    });
  };
}(), Ut.API.putTotalPages = function(r) {
  var e, n = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(r, "g"), n = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(r, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var a = 1; a <= this.internal.getNumberOfPages(); a++) for (var u = 0; u < this.internal.pages[a].length; u++) this.internal.pages[a][u] = this.internal.pages[a][u].replace(e, n);
  return this;
}, Ut.API.viewerPreferences = function(r, e) {
  var n;
  r = r || {}, e = e || !1;
  var a, u, o, l = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(l), f = [], g = 0, b = 0, A = 0;
  function S(O, I) {
    var q, _ = !1;
    for (q = 0; q < O.length; q += 1) O[q] === I && (_ = !0);
    return _;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(l)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, r === "reset" || e === !0) {
    var p = h.length;
    for (A = 0; A < p; A += 1) n[h[A]].value = n[h[A]].defaultValue, n[h[A]].explicitSet = !1;
  }
  if (fe(r) === "object") {
    for (u in r) if (o = r[u], S(h, u) && o !== void 0) {
      if (n[u].type === "boolean" && typeof o == "boolean") n[u].value = o;
      else if (n[u].type === "name" && S(n[u].valueSet, o)) n[u].value = o;
      else if (n[u].type === "integer" && Number.isInteger(o)) n[u].value = o;
      else if (n[u].type === "array") {
        for (g = 0; g < o.length; g += 1) if (a = !0, o[g].length === 1 && typeof o[g][0] == "number") f.push(String(o[g] - 1));
        else if (o[g].length > 1) {
          for (b = 0; b < o[g].length; b += 1) typeof o[g][b] != "number" && (a = !1);
          a === !0 && f.push([o[g][0] - 1, o[g][1] - 1].join(" "));
        }
        n[u].value = "[" + f.join(" ") + "]";
      } else n[u].value = n[u].defaultValue;
      n[u].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var O, I = [];
    for (O in n) n[O].explicitSet === !0 && (n[O].type === "name" ? I.push("/" + O + " /" + n[O].value) : I.push("/" + O + " " + n[O].value));
    I.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + I.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this;
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
function(r) {
  var e = function() {
    var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', u = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(a)), l = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), g = o.length + l.length + h.length + u.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(u + o + l + h + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, n = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  r.addMetadata = function(a, u) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: a, namespaceuri: u || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", e)), this;
  };
}(Ut.API), function(r) {
  var e = r.API, n = e.pdfEscape16 = function(o, l) {
    for (var h, f = l.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], b = [""], A = 0, S = o.length; A < S; ++A) {
      if (h = l.metadata.characterToGlyph(o.charCodeAt(A)), l.metadata.glyIdsUsed.push(h), l.metadata.toUnicode[h] = o.charCodeAt(A), f.indexOf(h) == -1 && (f.push(h), f.push([parseInt(l.metadata.widthOfGlyph(h), 10)])), h == "0") return b.join("");
      h = h.toString(16), b.push(g[4 - h.length], h);
    }
    return b.join("");
  }, a = function(o) {
    var l, h, f, g, b, A, S;
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
endcodespacerange`, f = [], A = 0, S = (h = Object.keys(o).sort(function(p, O) {
      return p - O;
    })).length; A < S; A++) l = h[A], f.length >= 100 && (b += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), o[l] !== void 0 && o[l] !== null && typeof o[l].toString == "function" && (g = ("0000" + o[l].toString(16)).slice(-4), l = ("0000" + (+l).toString(16)).slice(-4), f.push("<" + l + "><" + g + ">"));
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
  e.events.push(["putFont", function(o) {
    (function(l) {
      var h = l.font, f = l.out, g = l.newObject, b = l.putStream;
      if (h.metadata instanceof r.API.TTFFont && h.encoding === "Identity-H") {
        for (var A = h.metadata.Unicode.widths, S = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), p = "", O = 0; O < S.length; O++) p += String.fromCharCode(S[O]);
        var I = g();
        b({ data: p, addLength1: !0, objectId: I }), f("endobj");
        var q = g();
        b({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: q }), f("endobj");
        var _ = g();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Ai(h.fontName)), f("/FontFile2 " + I + " 0 R"), f("/FontBBox " + r.API.PDFObject.convert(h.metadata.bbox)), f("/Flags " + h.metadata.flags), f("/StemV " + h.metadata.stemV), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f(">>"), f("endobj");
        var B = g();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + Ai(h.fontName)), f("/FontDescriptor " + _ + " 0 R"), f("/W " + r.API.PDFObject.convert(A)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + h.encoding + ")"), f(">>"), f(">>"), f("endobj"), h.objectNumber = g(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + q + " 0 R"), f("/BaseFont /" + Ai(h.fontName)), f("/Encoding /" + h.encoding), f("/DescendantFonts [" + B + " 0 R]"), f(">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]), e.events.push(["putFont", function(o) {
    (function(l) {
      var h = l.font, f = l.out, g = l.newObject, b = l.putStream;
      if (h.metadata instanceof r.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var A = h.metadata.rawData, S = "", p = 0; p < A.length; p++) S += String.fromCharCode(A[p]);
        var O = g();
        b({ data: S, addLength1: !0, objectId: O }), f("endobj");
        var I = g();
        b({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: I }), f("endobj");
        var q = g();
        f("<<"), f("/Descent " + h.metadata.decender), f("/CapHeight " + h.metadata.capHeight), f("/StemV " + h.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + O + " 0 R"), f("/Flags 96"), f("/FontBBox " + r.API.PDFObject.convert(h.metadata.bbox)), f("/FontName /" + Ai(h.fontName)), f("/ItalicAngle " + h.metadata.italicAngle), f("/Ascent " + h.metadata.ascender), f(">>"), f("endobj"), h.objectNumber = g();
        for (var _ = 0; _ < h.metadata.hmtx.widths.length; _++) h.metadata.hmtx.widths[_] = parseInt(h.metadata.hmtx.widths[_] * (1e3 / h.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + I + " 0 R/BaseFont/" + Ai(h.fontName) + "/FontDescriptor " + q + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + r.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), f("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]);
  var u = function(o) {
    var l, h = o.text || "", f = o.x, g = o.y, b = o.options || {}, A = o.mutex || {}, S = A.pdfEscape, p = A.activeFontKey, O = A.fonts, I = p, q = "", _ = 0, B = "", X = O[I].encoding;
    if (O[I].encoding !== "Identity-H") return { text: h, x: f, y: g, options: b, mutex: A };
    for (B = h, I = p, Array.isArray(h) && (B = h[0]), _ = 0; _ < B.length; _ += 1) O[I].metadata.hasOwnProperty("cmap") && (l = O[I].metadata.cmap.unicode.codeMap[B[_].charCodeAt(0)]), l || B[_].charCodeAt(0) < 256 && O[I].metadata.hasOwnProperty("Unicode") ? q += B[_] : q += "";
    var ot = "";
    return parseInt(I.slice(1)) < 14 || X === "WinAnsiEncoding" ? ot = S(q, I).split("").map(function(ct) {
      return ct.charCodeAt(0).toString(16);
    }).join("") : X === "Identity-H" && (ot = n(q, O[I])), A.isHex = !0, { text: ot, x: f, y: g, options: b, mutex: A };
  };
  e.events.push(["postProcessText", function(o) {
    var l = o.text || "", h = [], f = { text: l, x: o.x, y: o.y, options: o.options, mutex: o.mutex };
    if (Array.isArray(l)) {
      var g = 0;
      for (g = 0; g < l.length; g += 1) Array.isArray(l[g]) && l[g].length === 3 ? h.push([u(Object.assign({}, f, { text: l[g][0] })).text, l[g][1], l[g][2]]) : h.push(u(Object.assign({}, f, { text: l[g] })).text);
      o.text = h;
    } else o.text = u(Object.assign({}, f, { text: l })).text;
  }]);
}(Ut), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(r) {
  var e = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  r.existsFileInVFS = function(n) {
    return e.call(this), this.internal.vFS[n] !== void 0;
  }, r.addFileToVFS = function(n, a) {
    return e.call(this), this.internal.vFS[n] = a, this;
  }, r.getFileFromVFS = function(n) {
    return e.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null;
  };
}(Ut.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(r) {
  r.__bidiEngine__ = r.prototype.__bidiEngine__ = function(a) {
    var u, o, l, h, f, g, b, A = e, S = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], p = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], O = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, I = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, q = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], _ = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), B = !1, X = 0;
    this.__bidiEngine__ = {};
    var ot = function(F) {
      var P = F.charCodeAt(), z = P >> 8, D = I[z];
      return D !== void 0 ? A[256 * D + (255 & P)] : z === 252 || z === 253 ? "AL" : _.test(z) ? "L" : z === 8 ? "R" : "N";
    }, ct = function(F) {
      for (var P, z = 0; z < F.length; z++) {
        if ((P = ot(F.charAt(z))) === "L") return !1;
        if (P === "R") return !0;
      }
      return !1;
    }, wt = function(F, P, z, D) {
      var at, nt, lt, $, ft = P[D];
      switch (ft) {
        case "L":
        case "R":
          B = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          B && (ft = "AN");
          break;
        case "AL":
          B = !0, ft = "R";
          break;
        case "WS":
          ft = "N";
          break;
        case "CS":
          D < 1 || D + 1 >= P.length || (at = z[D - 1]) !== "EN" && at !== "AN" || (nt = P[D + 1]) !== "EN" && nt !== "AN" ? ft = "N" : B && (nt = "AN"), ft = nt === at ? nt : "N";
          break;
        case "ES":
          ft = (at = D > 0 ? z[D - 1] : "B") === "EN" && D + 1 < P.length && P[D + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (D > 0 && z[D - 1] === "EN") {
            ft = "EN";
            break;
          }
          if (B) {
            ft = "N";
            break;
          }
          for (lt = D + 1, $ = P.length; lt < $ && P[lt] === "ET"; ) lt++;
          ft = lt < $ && P[lt] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (l && !h) {
            for ($ = P.length, lt = D + 1; lt < $ && P[lt] === "NSM"; ) lt++;
            if (lt < $) {
              var ht = F[D], kt = ht >= 1425 && ht <= 2303 || ht === 64286;
              if (at = P[lt], kt && (at === "R" || at === "AL")) {
                ft = "R";
                break;
              }
            }
          }
          ft = D < 1 || (at = P[D - 1]) === "B" ? "N" : z[D - 1];
          break;
        case "B":
          B = !1, u = !0, ft = X;
          break;
        case "S":
          o = !0, ft = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          B = !1;
          break;
        case "BN":
          ft = "N";
      }
      return ft;
    }, tt = function(F, P, z) {
      var D = F.split("");
      return z && R(D, z, { hiLevel: X }), D.reverse(), P && P.reverse(), D.join("");
    }, R = function(F, P, z) {
      var D, at, nt, lt, $, ft = -1, ht = F.length, kt = 0, L = [], j = X ? p : S, M = [];
      for (B = !1, u = !1, o = !1, at = 0; at < ht; at++) M[at] = ot(F[at]);
      for (nt = 0; nt < ht; nt++) {
        if ($ = kt, L[nt] = wt(F, M, L, nt), D = 240 & (kt = j[$][O[L[nt]]]), kt &= 15, P[nt] = lt = j[kt][5], D > 0) if (D === 16) {
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
    }, gt = function(F, P, z, D, at) {
      if (!(at.hiLevel < F)) {
        if (F === 1 && X === 1 && !u) return P.reverse(), void (z && z.reverse());
        for (var nt, lt, $, ft, ht = P.length, kt = 0; kt < ht; ) {
          if (D[kt] >= F) {
            for ($ = kt + 1; $ < ht && D[$] >= F; ) $++;
            for (ft = kt, lt = $ - 1; ft < lt; ft++, lt--) nt = P[ft], P[ft] = P[lt], P[lt] = nt, z && (nt = z[ft], z[ft] = z[lt], z[lt] = nt);
            kt = $;
          }
          kt++;
        }
      }
    }, dt = function(F, P, z) {
      var D = F.split(""), at = { hiLevel: X };
      return z || (z = []), R(D, z, at), function(nt, lt, $) {
        if ($.hiLevel !== 0 && b) for (var ft, ht = 0; ht < nt.length; ht++) lt[ht] === 1 && (ft = q.indexOf(nt[ht])) >= 0 && (nt[ht] = q[ft + 1]);
      }(D, z, at), gt(2, D, P, z, at), gt(1, D, P, z, at), D.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(F, P, z) {
      if (function(at, nt) {
        if (nt) for (var lt = 0; lt < at.length; lt++) nt[lt] = lt;
        h === void 0 && (h = ct(at)), g === void 0 && (g = ct(at));
      }(F, P), l || !f || g) if (l && f && h ^ g) X = h ? 1 : 0, F = tt(F, P, z);
      else if (!l && f && g) X = h ? 1 : 0, F = dt(F, P, z), F = tt(F, P);
      else if (!l || h || f || g) {
        if (l && !f && h ^ g) F = tt(F, P), h ? (X = 0, F = dt(F, P, z)) : (X = 1, F = dt(F, P, z), F = tt(F, P));
        else if (l && h && !f && g) X = 1, F = dt(F, P, z), F = tt(F, P);
        else if (!l && !f && h ^ g) {
          var D = b;
          h ? (X = 1, F = dt(F, P, z), X = 0, b = !1, F = dt(F, P, z), b = D) : (X = 0, F = dt(F, P, z), F = tt(F, P), X = 1, b = !1, F = dt(F, P, z), b = D, F = tt(F, P));
        }
      } else X = 0, F = dt(F, P, z);
      else X = h ? 1 : 0, F = dt(F, P, z);
      return F;
    }, this.__bidiEngine__.setOptions = function(F) {
      F && (l = F.isInputVisual, f = F.isOutputVisual, h = F.isInputRtl, g = F.isOutputRtl, b = F.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__;
  };
  var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], n = new r.__bidiEngine__({ isInputVisual: !0 });
  r.API.events.push(["postProcessText", function(a) {
    var u = a.text, o = (a.x, a.y, a.options || {}), l = (a.mutex, o.lang, []);
    if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, n.setOptions(o), Object.prototype.toString.call(u) === "[object Array]") {
      var h = 0;
      for (l = [], h = 0; h < u.length; h += 1) Object.prototype.toString.call(u[h]) === "[object Array]" ? l.push([n.doBidiReorder(u[h][0]), u[h][1], u[h][2]]) : l.push([n.doBidiReorder(u[h])]);
      a.text = l;
    } else a.text = n.doBidiReorder(u);
    n.setOptions({ isInputVisual: !0 });
  }]);
}(Ut), Ut.API.TTFFont = function() {
  function r(e) {
    var n;
    if (this.rawData = e, n = this.contents = new Cr(e), this.contents.pos = 4, n.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    n.pos = 0, this.parse(), this.subset = new _1(this), this.registerTTF();
  }
  return r.open = function(e) {
    return new r(e);
  }, r.prototype.parse = function() {
    return this.directory = new f1(this.contents), this.head = new p1(this), this.name = new w1(this), this.cmap = new Ru(this), this.toUnicode = {}, this.hhea = new g1(this), this.maxp = new y1(this), this.hmtx = new L1(this), this.post = new v1(this), this.os2 = new m1(this), this.loca = new S1(this), this.glyf = new N1(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, r.prototype.registerTTF = function() {
    var e, n, a, u, o;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var l, h, f, g;
      for (g = [], l = 0, h = (f = this.bbox).length; l < h; l++) e = f[l], g.push(Math.round(e * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (a = 255 & (u = this.post.italic_angle), 32768 & (n = u >> 16) && (n = -(1 + (65535 ^ n))), this.italicAngle = +(n + "." + a)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, r.prototype.characterToGlyph = function(e) {
    var n;
    return ((n = this.cmap.unicode) != null ? n.codeMap[e] : void 0) || 0;
  }, r.prototype.widthOfGlyph = function(e) {
    var n;
    return n = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * n;
  }, r.prototype.widthOfString = function(e, n, a) {
    var u, o, l, h;
    for (l = 0, o = 0, h = (e = "" + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) u = e.charCodeAt(o), l += this.widthOfGlyph(this.characterToGlyph(u)) + a * (1e3 / n) || 0;
    return l * (n / 1e3);
  }, r.prototype.lineHeight = function(e, n) {
    var a;
    return n == null && (n = !1), a = n ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * e;
  }, r;
}();
var Dn, Cr = function() {
  function r(e) {
    this.data = e ?? [], this.pos = 0, this.length = this.data.length;
  }
  return r.prototype.readByte = function() {
    return this.data[this.pos++];
  }, r.prototype.writeByte = function(e) {
    return this.data[this.pos++] = e;
  }, r.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, r.prototype.writeUInt32 = function(e) {
    return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, r.prototype.readInt32 = function() {
    var e;
    return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
  }, r.prototype.writeInt32 = function(e) {
    return e < 0 && (e += 4294967296), this.writeUInt32(e);
  }, r.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, r.prototype.writeUInt16 = function(e) {
    return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, r.prototype.readInt16 = function() {
    var e;
    return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
  }, r.prototype.writeInt16 = function(e) {
    return e < 0 && (e += 65536), this.writeUInt16(e);
  }, r.prototype.readString = function(e) {
    var n, a;
    for (a = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n) a[n] = String.fromCharCode(this.readByte());
    return a.join("");
  }, r.prototype.writeString = function(e) {
    var n, a, u;
    for (u = [], n = 0, a = e.length; 0 <= a ? n < a : n > a; n = 0 <= a ? ++n : --n) u.push(this.writeByte(e.charCodeAt(n)));
    return u;
  }, r.prototype.readShort = function() {
    return this.readInt16();
  }, r.prototype.writeShort = function(e) {
    return this.writeInt16(e);
  }, r.prototype.readLongLong = function() {
    var e, n, a, u, o, l, h, f;
    return e = this.readByte(), n = this.readByte(), a = this.readByte(), u = this.readByte(), o = this.readByte(), l = this.readByte(), h = this.readByte(), f = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ n) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ u) + 16777216 * (255 ^ o) + 65536 * (255 ^ l) + 256 * (255 ^ h) + (255 ^ f) + 1) : 72057594037927940 * e + 281474976710656 * n + 1099511627776 * a + 4294967296 * u + 16777216 * o + 65536 * l + 256 * h + f;
  }, r.prototype.writeLongLong = function(e) {
    var n, a;
    return n = Math.floor(e / 4294967296), a = 4294967295 & e, this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n), this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), this.writeByte(255 & a);
  }, r.prototype.readInt = function() {
    return this.readInt32();
  }, r.prototype.writeInt = function(e) {
    return this.writeInt32(e);
  }, r.prototype.read = function(e) {
    var n, a;
    for (n = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) n.push(this.readByte());
    return n;
  }, r.prototype.write = function(e) {
    var n, a, u, o;
    for (o = [], a = 0, u = e.length; a < u; a++) n = e[a], o.push(this.writeByte(n));
    return o;
  }, r;
}(), f1 = function() {
  var r;
  function e(n) {
    var a, u, o;
    for (this.scalarType = n.readInt(), this.tableCount = n.readShort(), this.searchRange = n.readShort(), this.entrySelector = n.readShort(), this.rangeShift = n.readShort(), this.tables = {}, u = 0, o = this.tableCount; 0 <= o ? u < o : u > o; u = 0 <= o ? ++u : --u) a = { tag: n.readString(4), checksum: n.readInt(), offset: n.readInt(), length: n.readInt() }, this.tables[a.tag] = a;
  }
  return e.prototype.encode = function(n) {
    var a, u, o, l, h, f, g, b, A, S, p, O, I;
    for (I in p = Object.keys(n).length, f = Math.log(2), A = 16 * Math.floor(Math.log(p) / f), l = Math.floor(A / f), b = 16 * p - A, (u = new Cr()).writeInt(this.scalarType), u.writeShort(p), u.writeShort(A), u.writeShort(l), u.writeShort(b), o = 16 * p, g = u.pos + o, h = null, O = [], n) for (S = n[I], u.writeString(I), u.writeInt(r(S)), u.writeInt(g), u.writeInt(S.length), O = O.concat(S), I === "head" && (h = g), g += S.length; g % 4; ) O.push(0), g++;
    return u.write(O), a = 2981146554 - r(u.data), u.pos = h + 8, u.writeUInt32(a), u.data;
  }, r = function(n) {
    var a, u, o, l;
    for (n = Tu.call(n); n.length % 4; ) n.push(0);
    for (o = new Cr(n), u = 0, a = 0, l = n.length; a < l; a = a += 4) u += o.readUInt32();
    return 4294967295 & u;
  }, e;
}(), d1 = {}.hasOwnProperty, Zn = function(r, e) {
  for (var n in e) d1.call(e, n) && (r[n] = e[n]);
  function a() {
    this.constructor = r;
  }
  return a.prototype = e.prototype, r.prototype = new a(), r.__super__ = e.prototype, r;
};
Dn = function() {
  function r(e) {
    var n;
    this.file = e, n = this.file.directory.tables[this.tag], this.exists = !!n, n && (this.offset = n.offset, this.length = n.length, this.parse(this.file.contents));
  }
  return r.prototype.parse = function() {
  }, r.prototype.encode = function() {
  }, r.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, r;
}();
var p1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "head", e.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.revision = n.readInt(), this.checkSumAdjustment = n.readInt(), this.magicNumber = n.readInt(), this.flags = n.readShort(), this.unitsPerEm = n.readShort(), this.created = n.readLongLong(), this.modified = n.readLongLong(), this.xMin = n.readShort(), this.yMin = n.readShort(), this.xMax = n.readShort(), this.yMax = n.readShort(), this.macStyle = n.readShort(), this.lowestRecPPEM = n.readShort(), this.fontDirectionHint = n.readShort(), this.indexToLocFormat = n.readShort(), this.glyphDataFormat = n.readShort();
  }, e.prototype.encode = function(n) {
    var a;
    return (a = new Cr()).writeInt(this.version), a.writeInt(this.revision), a.writeInt(this.checkSumAdjustment), a.writeInt(this.magicNumber), a.writeShort(this.flags), a.writeShort(this.unitsPerEm), a.writeLongLong(this.created), a.writeLongLong(this.modified), a.writeShort(this.xMin), a.writeShort(this.yMin), a.writeShort(this.xMax), a.writeShort(this.yMax), a.writeShort(this.macStyle), a.writeShort(this.lowestRecPPEM), a.writeShort(this.fontDirectionHint), a.writeShort(n), a.writeShort(this.glyphDataFormat), a.data;
  }, e;
}(), Au = function() {
  function r(e, n) {
    var a, u, o, l, h, f, g, b, A, S, p, O, I, q, _, B, X;
    switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = n + e.readInt(), A = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = e.readByte();
        break;
      case 4:
        for (p = e.readUInt16(), S = p / 2, e.pos += 6, o = function() {
          var ot, ct;
          for (ct = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ct.push(e.readUInt16());
          return ct;
        }(), e.pos += 2, I = function() {
          var ot, ct;
          for (ct = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ct.push(e.readUInt16());
          return ct;
        }(), g = function() {
          var ot, ct;
          for (ct = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ct.push(e.readUInt16());
          return ct;
        }(), b = function() {
          var ot, ct;
          for (ct = [], f = ot = 0; 0 <= S ? ot < S : ot > S; f = 0 <= S ? ++ot : --ot) ct.push(e.readUInt16());
          return ct;
        }(), u = (this.length - e.pos + this.offset) / 2, h = function() {
          var ot, ct;
          for (ct = [], f = ot = 0; 0 <= u ? ot < u : ot > u; f = 0 <= u ? ++ot : --ot) ct.push(e.readUInt16());
          return ct;
        }(), f = _ = 0, X = o.length; _ < X; f = ++_) for (q = o[f], a = B = O = I[f]; O <= q ? B <= q : B >= q; a = O <= q ? ++B : --B) b[f] === 0 ? l = a + g[f] : (l = h[b[f] / 2 + (a - O) - (S - f)] || 0) !== 0 && (l += g[f]), this.codeMap[a] = 65535 & l;
    }
    e.pos = A;
  }
  return r.encode = function(e, n) {
    var a, u, o, l, h, f, g, b, A, S, p, O, I, q, _, B, X, ot, ct, wt, tt, R, gt, dt, F, P, z, D, at, nt, lt, $, ft, ht, kt, L, j, M, W, Y, Q, et, rt, At, Nt, Ct;
    switch (D = new Cr(), l = Object.keys(e).sort(function(Bt, zt) {
      return Bt - zt;
    }), n) {
      case "macroman":
        for (I = 0, q = function() {
          var Bt = [];
          for (O = 0; O < 256; ++O) Bt.push(0);
          return Bt;
        }(), B = { 0: 0 }, o = {}, at = 0, ft = l.length; at < ft; at++) B[rt = e[u = l[at]]] == null && (B[rt] = ++I), o[u] = { old: e[u], new: B[e[u]] }, q[u] = B[e[u]];
        return D.writeUInt16(1), D.writeUInt16(0), D.writeUInt32(12), D.writeUInt16(0), D.writeUInt16(262), D.writeUInt16(0), D.write(q), { charMap: o, subtable: D.data, maxGlyphID: I + 1 };
      case "unicode":
        for (P = [], A = [], X = 0, B = {}, a = {}, _ = g = null, nt = 0, ht = l.length; nt < ht; nt++) B[ct = e[u = l[nt]]] == null && (B[ct] = ++X), a[u] = { old: ct, new: B[ct] }, h = B[ct] - u, _ != null && h === g || (_ && A.push(_), P.push(u), g = h), _ = u;
        for (_ && A.push(_), A.push(65535), P.push(65535), dt = 2 * (gt = P.length), R = 2 * Math.pow(Math.log(gt) / Math.LN2, 2), S = Math.log(R / 2) / Math.LN2, tt = 2 * gt - R, f = [], wt = [], p = [], O = lt = 0, kt = P.length; lt < kt; O = ++lt) {
          if (F = P[O], b = A[O], F === 65535) {
            f.push(0), wt.push(0);
            break;
          }
          if (F - (z = a[F].new) >= 32768) for (f.push(0), wt.push(2 * (p.length + gt - O)), u = $ = F; F <= b ? $ <= b : $ >= b; u = F <= b ? ++$ : --$) p.push(a[u].new);
          else f.push(z - F), wt.push(0);
        }
        for (D.writeUInt16(3), D.writeUInt16(1), D.writeUInt32(12), D.writeUInt16(4), D.writeUInt16(16 + 8 * gt + 2 * p.length), D.writeUInt16(0), D.writeUInt16(dt), D.writeUInt16(R), D.writeUInt16(S), D.writeUInt16(tt), Q = 0, L = A.length; Q < L; Q++) u = A[Q], D.writeUInt16(u);
        for (D.writeUInt16(0), et = 0, j = P.length; et < j; et++) u = P[et], D.writeUInt16(u);
        for (At = 0, M = f.length; At < M; At++) h = f[At], D.writeUInt16(h);
        for (Nt = 0, W = wt.length; Nt < W; Nt++) ot = wt[Nt], D.writeUInt16(ot);
        for (Ct = 0, Y = p.length; Ct < Y; Ct++) I = p[Ct], D.writeUInt16(I);
        return { charMap: a, subtable: D.data, maxGlyphID: X + 1 };
    }
  }, r;
}(), Ru = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "cmap", e.prototype.parse = function(n) {
    var a, u, o;
    for (n.pos = this.offset, this.version = n.readUInt16(), o = n.readUInt16(), this.tables = [], this.unicode = null, u = 0; 0 <= o ? u < o : u > o; u = 0 <= o ? ++u : --u) a = new Au(n, this.offset), this.tables.push(a), a.isUnicode && this.unicode == null && (this.unicode = a);
    return !0;
  }, e.encode = function(n, a) {
    var u, o;
    return a == null && (a = "macroman"), u = Au.encode(n, a), (o = new Cr()).writeUInt16(0), o.writeUInt16(1), u.table = o.data.concat(u.subtable), u;
  }, e;
}(), g1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "hhea", e.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.ascender = n.readShort(), this.decender = n.readShort(), this.lineGap = n.readShort(), this.advanceWidthMax = n.readShort(), this.minLeftSideBearing = n.readShort(), this.minRightSideBearing = n.readShort(), this.xMaxExtent = n.readShort(), this.caretSlopeRise = n.readShort(), this.caretSlopeRun = n.readShort(), this.caretOffset = n.readShort(), n.pos += 8, this.metricDataFormat = n.readShort(), this.numberOfMetrics = n.readUInt16();
  }, e;
}(), m1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "OS/2", e.prototype.parse = function(n) {
    if (n.pos = this.offset, this.version = n.readUInt16(), this.averageCharWidth = n.readShort(), this.weightClass = n.readUInt16(), this.widthClass = n.readUInt16(), this.type = n.readShort(), this.ySubscriptXSize = n.readShort(), this.ySubscriptYSize = n.readShort(), this.ySubscriptXOffset = n.readShort(), this.ySubscriptYOffset = n.readShort(), this.ySuperscriptXSize = n.readShort(), this.ySuperscriptYSize = n.readShort(), this.ySuperscriptXOffset = n.readShort(), this.ySuperscriptYOffset = n.readShort(), this.yStrikeoutSize = n.readShort(), this.yStrikeoutPosition = n.readShort(), this.familyClass = n.readShort(), this.panose = function() {
      var a, u;
      for (u = [], a = 0; a < 10; ++a) u.push(n.readByte());
      return u;
    }(), this.charRange = function() {
      var a, u;
      for (u = [], a = 0; a < 4; ++a) u.push(n.readInt());
      return u;
    }(), this.vendorID = n.readString(4), this.selection = n.readShort(), this.firstCharIndex = n.readShort(), this.lastCharIndex = n.readShort(), this.version > 0 && (this.ascent = n.readShort(), this.descent = n.readShort(), this.lineGap = n.readShort(), this.winAscent = n.readShort(), this.winDescent = n.readShort(), this.codePageRange = function() {
      var a, u;
      for (u = [], a = 0; a < 2; a = ++a) u.push(n.readInt());
      return u;
    }(), this.version > 1)) return this.xHeight = n.readShort(), this.capHeight = n.readShort(), this.defaultChar = n.readShort(), this.breakChar = n.readShort(), this.maxContext = n.readShort();
  }, e;
}(), v1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "post", e.prototype.parse = function(n) {
    var a, u, o;
    switch (n.pos = this.offset, this.format = n.readInt(), this.italicAngle = n.readInt(), this.underlinePosition = n.readShort(), this.underlineThickness = n.readShort(), this.isFixedPitch = n.readInt(), this.minMemType42 = n.readInt(), this.maxMemType42 = n.readInt(), this.minMemType1 = n.readInt(), this.maxMemType1 = n.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var l;
        for (u = n.readUInt16(), this.glyphNameIndex = [], l = 0; 0 <= u ? l < u : l > u; l = 0 <= u ? ++l : --l) this.glyphNameIndex.push(n.readUInt16());
        for (this.names = [], o = []; n.pos < this.offset + this.length; ) a = n.readByte(), o.push(this.names.push(n.readString(a)));
        return o;
      case 151552:
        return u = n.readUInt16(), this.offsets = n.read(u);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var h, f, g;
          for (g = [], l = h = 0, f = this.file.maxp.numGlyphs; 0 <= f ? h < f : h > f; l = 0 <= f ? ++h : --h) g.push(n.readUInt32());
          return g;
        }).call(this);
    }
  }, e;
}(), b1 = function(r, e) {
  this.raw = r, this.length = r.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, w1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "name", e.prototype.parse = function(n) {
    var a, u, o, l, h, f, g, b, A, S, p;
    for (n.pos = this.offset, n.readShort(), a = n.readShort(), f = n.readShort(), u = [], l = 0; 0 <= a ? l < a : l > a; l = 0 <= a ? ++l : --l) u.push({ platformID: n.readShort(), encodingID: n.readShort(), languageID: n.readShort(), nameID: n.readShort(), length: n.readShort(), offset: this.offset + f + n.readShort() });
    for (g = {}, l = A = 0, S = u.length; A < S; l = ++A) o = u[l], n.pos = o.offset, b = n.readString(o.length), h = new b1(b, o), g[p = o.nameID] == null && (g[p] = []), g[o.nameID].push(h);
    this.strings = g, this.copyright = g[0], this.fontFamily = g[1], this.fontSubfamily = g[2], this.uniqueSubfamily = g[3], this.fontName = g[4], this.version = g[5];
    try {
      this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = g[7], this.manufacturer = g[8], this.designer = g[9], this.description = g[10], this.vendorUrl = g[11], this.designerUrl = g[12], this.license = g[13], this.licenseUrl = g[14], this.preferredFamily = g[15], this.preferredSubfamily = g[17], this.compatibleFull = g[18], this.sampleText = g[19];
  }, e;
}(), y1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "maxp", e.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.numGlyphs = n.readUInt16(), this.maxPoints = n.readUInt16(), this.maxContours = n.readUInt16(), this.maxCompositePoints = n.readUInt16(), this.maxComponentContours = n.readUInt16(), this.maxZones = n.readUInt16(), this.maxTwilightPoints = n.readUInt16(), this.maxStorage = n.readUInt16(), this.maxFunctionDefs = n.readUInt16(), this.maxInstructionDefs = n.readUInt16(), this.maxStackElements = n.readUInt16(), this.maxSizeOfInstructions = n.readUInt16(), this.maxComponentElements = n.readUInt16(), this.maxComponentDepth = n.readUInt16();
  }, e;
}(), L1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "hmtx", e.prototype.parse = function(n) {
    var a, u, o, l, h, f, g;
    for (n.pos = this.offset, this.metrics = [], a = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? a < f : a > f; a = 0 <= f ? ++a : --a) this.metrics.push({ advance: n.readUInt16(), lsb: n.readInt16() });
    for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var b, A;
      for (A = [], a = b = 0; 0 <= o ? b < o : b > o; a = 0 <= o ? ++b : --b) A.push(n.readInt16());
      return A;
    }(), this.widths = (function() {
      var b, A, S, p;
      for (p = [], b = 0, A = (S = this.metrics).length; b < A; b++) l = S[b], p.push(l.advance);
      return p;
    }).call(this), u = this.widths[this.widths.length - 1], g = [], a = h = 0; 0 <= o ? h < o : h > o; a = 0 <= o ? ++h : --h) g.push(this.widths.push(u));
    return g;
  }, e.prototype.forGlyph = function(n) {
    return n in this.metrics ? this.metrics[n] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[n - this.metrics.length] };
  }, e;
}(), Tu = [].slice, N1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "glyf", e.prototype.parse = function() {
    return this.cache = {};
  }, e.prototype.glyphFor = function(n) {
    var a, u, o, l, h, f, g, b, A, S;
    return n in this.cache ? this.cache[n] : (l = this.file.loca, a = this.file.contents, u = l.indexOf(n), (o = l.lengthOf(n)) === 0 ? this.cache[n] = null : (a.pos = this.offset + u, h = (f = new Cr(a.read(o))).readShort(), b = f.readShort(), S = f.readShort(), g = f.readShort(), A = f.readShort(), this.cache[n] = h === -1 ? new x1(f, b, S, g, A) : new A1(f, h, b, S, g, A), this.cache[n]));
  }, e.prototype.encode = function(n, a, u) {
    var o, l, h, f, g;
    for (h = [], l = [], f = 0, g = a.length; f < g; f++) o = n[a[f]], l.push(h.length), o && (h = h.concat(o.encode(u)));
    return l.push(h.length), { table: h, offsets: l };
  }, e;
}(), A1 = function() {
  function r(e, n, a, u, o, l) {
    this.raw = e, this.numberOfContours = n, this.xMin = a, this.yMin = u, this.xMax = o, this.yMax = l, this.compound = !1;
  }
  return r.prototype.encode = function() {
    return this.raw.data;
  }, r;
}(), x1 = function() {
  function r(e, n, a, u, o) {
    var l, h;
    for (this.raw = e, this.xMin = n, this.yMin = a, this.xMax = u, this.yMax = o, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], l = this.raw; h = l.readShort(), this.glyphOffsets.push(l.pos), this.glyphIDs.push(l.readUInt16()), 32 & h; ) l.pos += 1 & h ? 4 : 2, 128 & h ? l.pos += 8 : 64 & h ? l.pos += 4 : 8 & h && (l.pos += 2);
  }
  return r.prototype.encode = function() {
    var e, n, a;
    for (n = new Cr(Tu.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e) n.pos = this.glyphOffsets[e];
    return n.data;
  }, r;
}(), S1 = function(r) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return Zn(e, Dn), e.prototype.tag = "loca", e.prototype.parse = function(n) {
    var a, u;
    return n.pos = this.offset, a = this.file.head.indexToLocFormat, this.offsets = a === 0 ? (function() {
      var o, l;
      for (l = [], u = 0, o = this.length; u < o; u += 2) l.push(2 * n.readUInt16());
      return l;
    }).call(this) : (function() {
      var o, l;
      for (l = [], u = 0, o = this.length; u < o; u += 4) l.push(n.readUInt32());
      return l;
    }).call(this);
  }, e.prototype.indexOf = function(n) {
    return this.offsets[n];
  }, e.prototype.lengthOf = function(n) {
    return this.offsets[n + 1] - this.offsets[n];
  }, e.prototype.encode = function(n, a) {
    for (var u = new Uint32Array(this.offsets.length), o = 0, l = 0, h = 0; h < u.length; ++h) if (u[h] = o, l < a.length && a[l] == h) {
      ++l, u[h] = o;
      var f = this.offsets[h], g = this.offsets[h + 1] - f;
      g > 0 && (o += g);
    }
    for (var b = new Array(4 * u.length), A = 0; A < u.length; ++A) b[4 * A + 3] = 255 & u[A], b[4 * A + 2] = (65280 & u[A]) >> 8, b[4 * A + 1] = (16711680 & u[A]) >> 16, b[4 * A] = (4278190080 & u[A]) >> 24;
    return b;
  }, e;
}(), _1 = function() {
  function r(e) {
    this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return r.prototype.generateCmap = function() {
    var e, n, a, u, o;
    for (n in u = this.font.cmap.tables[0].codeMap, e = {}, o = this.subset) a = o[n], e[n] = u[a];
    return e;
  }, r.prototype.glyphsFor = function(e) {
    var n, a, u, o, l, h, f;
    for (u = {}, l = 0, h = e.length; l < h; l++) u[o = e[l]] = this.font.glyf.glyphFor(o);
    for (o in n = [], u) (a = u[o]) != null && a.compound && n.push.apply(n, a.glyphIDs);
    if (n.length > 0) for (o in f = this.glyphsFor(n)) a = f[o], u[o] = a;
    return u;
  }, r.prototype.encode = function(e, n) {
    var a, u, o, l, h, f, g, b, A, S, p, O, I, q, _;
    for (u in a = Ru.encode(this.generateCmap(), "unicode"), l = this.glyphsFor(e), p = { 0: 0 }, _ = a.charMap) p[(f = _[u]).old] = f.new;
    for (O in S = a.maxGlyphID, l) O in p || (p[O] = S++);
    return b = function(B) {
      var X, ot;
      for (X in ot = {}, B) ot[B[X]] = X;
      return ot;
    }(p), A = Object.keys(b).sort(function(B, X) {
      return B - X;
    }), I = function() {
      var B, X, ot;
      for (ot = [], B = 0, X = A.length; B < X; B++) h = A[B], ot.push(b[h]);
      return ot;
    }(), o = this.font.glyf.encode(l, I, p), g = this.font.loca.encode(o.offsets, I), q = { cmap: this.font.cmap.raw(), glyf: o.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(n) }, this.font.os2.exists && (q["OS/2"] = this.font.os2.raw()), this.font.directory.encode(q);
  }, r;
}();
Ut.API.PDFObject = function() {
  var r;
  function e() {
  }
  return r = function(n, a) {
    return (Array(a + 1).join("0") + n).slice(-a);
  }, e.convert = function(n) {
    var a, u, o, l;
    if (Array.isArray(n)) return "[" + function() {
      var h, f, g;
      for (g = [], h = 0, f = n.length; h < f; h++) a = n[h], g.push(e.convert(a));
      return g;
    }().join(" ") + "]";
    if (typeof n == "string") return "/" + n;
    if (n != null && n.isString) return "(" + n + ")";
    if (n instanceof Date) return "(D:" + r(n.getUTCFullYear(), 4) + r(n.getUTCMonth(), 2) + r(n.getUTCDate(), 2) + r(n.getUTCHours(), 2) + r(n.getUTCMinutes(), 2) + r(n.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(n) === "[object Object]") {
      for (u in o = ["<<"], n) l = n[u], o.push("/" + u + " " + e.convert(l));
      return o.push(">>"), o.join(`
`);
    }
    return "" + n;
  }, e;
}();
function P1(r, e, n) {
  const a = new Ut({
    unit: "pt",
    orientation: "landscape",
    ...e
  });
  async function u(l = "blob", h) {
    const f = xc(r);
    if (!f) throw new Error("Element not found");
    const g = a.html(f, h ?? n);
    return l === "string" ? g.outputPdf("datauristring") : l === "arraybuffer" ? g.outputPdf("arraybuffer") : l === "url" ? g.outputPdf("bloburl") : g.outputPdf("blob");
  }
  return {
    convert: u,
    save: async (l, h) => {
      await u("blob", h), a.save(l);
    }
  };
}
const F1 = /* @__PURE__ */ Sc({
  __name: "Html2Pdf",
  setup(r) {
    const e = _c(), { convert: n, save: a } = P1(e);
    return (u, o) => (Pc(), kc("div", Fc({
      ref_key: "pdfEl",
      ref: e
    }, u.$attrs), [
      Ic(u.$slots, "default", {
        convert: ru(n),
        save: ru(a)
      })
    ], 16));
  }
});
export {
  fe as _,
  F1 as a,
  P1 as u
};
