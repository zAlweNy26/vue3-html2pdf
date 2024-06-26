import { toValue as su, defineComponent as sh, ref as ih, openBlock as oh, createElementBlock as ah, mergeProps as ch, renderSlot as lh, unref as iu } from "vue";
var sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function fh(o) {
  if (o.__esModule) return o;
  var t = o.default;
  if (typeof t == "function") {
    var n = function c() {
      return this instanceof c ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(o).forEach(function(c) {
    var d = Object.getOwnPropertyDescriptor(o, c);
    Object.defineProperty(n, c, d.get ? d : {
      enumerable: !0,
      get: function() {
        return o[c];
      }
    });
  }), n;
}
var Lu = { exports: {} };
function st(o) {
  "@babel/helpers - typeof";
  return st = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, st(o);
}
var jr = Uint8Array, Br = Uint16Array, ua = Uint32Array, cc = new jr([
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
]), lc = new jr([
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
]), cl = new jr([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Iu = function(o, t) {
  for (var n = new Br(31), c = 0; c < 31; ++c)
    n[c] = t += 1 << o[c - 1];
  for (var d = new ua(n[30]), c = 1; c < 30; ++c)
    for (var u = n[c]; u < n[c + 1]; ++u)
      d[u] = u - n[c] << 5 | c;
  return [n, d];
}, xu = Iu(cc, 2), Su = xu[0], ll = xu[1];
Su[28] = 258, ll[258] = 28;
var Hu = Iu(lc, 0), hh = Hu[0], ou = Hu[1], ul = new Br(32768);
for (var ft = 0; ft < 32768; ++ft) {
  var Vs = (ft & 43690) >>> 1 | (ft & 21845) << 1;
  Vs = (Vs & 52428) >>> 2 | (Vs & 13107) << 2, Vs = (Vs & 61680) >>> 4 | (Vs & 3855) << 4, ul[ft] = ((Vs & 65280) >>> 8 | (Vs & 255) << 8) >>> 1;
}
var Rn = function(o, t, n) {
  for (var c = o.length, d = 0, u = new Br(t); d < c; ++d)
    ++u[o[d] - 1];
  var p = new Br(t);
  for (d = 0; d < t; ++d)
    p[d] = p[d - 1] + u[d - 1] << 1;
  var v;
  if (n) {
    v = new Br(1 << t);
    var f = 15 - t;
    for (d = 0; d < c; ++d)
      if (o[d])
        for (var m = d << 4 | o[d], l = t - o[d], y = p[o[d] - 1]++ << l, C = y | (1 << l) - 1; y <= C; ++y)
          v[ul[y] >>> f] = m;
  } else
    for (v = new Br(c), d = 0; d < c; ++d)
      v[d] = ul[p[o[d] - 1]++] >>> 15 - o[d];
  return v;
}, Ys = new jr(288);
for (var ft = 0; ft < 144; ++ft)
  Ys[ft] = 8;
for (var ft = 144; ft < 256; ++ft)
  Ys[ft] = 9;
for (var ft = 256; ft < 280; ++ft)
  Ys[ft] = 7;
for (var ft = 280; ft < 288; ++ft)
  Ys[ft] = 8;
var fa = new jr(32);
for (var ft = 0; ft < 32; ++ft)
  fa[ft] = 5;
var dh = /* @__PURE__ */ Rn(Ys, 9, 0), gh = /* @__PURE__ */ Rn(Ys, 9, 1), ph = /* @__PURE__ */ Rn(fa, 5, 0), Bh = /* @__PURE__ */ Rn(fa, 5, 1), $c = function(o) {
  for (var t = o[0], n = 1; n < o.length; ++n)
    o[n] > t && (t = o[n]);
  return t;
}, Bn = function(o, t, n) {
  var c = t / 8 >> 0;
  return (o[c] | o[c + 1] << 8) >>> (t & 7) & n;
}, Al = function(o, t) {
  var n = t / 8 >> 0;
  return (o[n] | o[n + 1] << 8 | o[n + 2] << 16) >>> (t & 7);
}, yl = function(o) {
  return (o / 8 >> 0) + (o & 7 && 1);
}, ju = function(o, t, n) {
  (n == null || n > o.length) && (n = o.length);
  var c = new (o instanceof Br ? Br : o instanceof ua ? ua : jr)(n - t);
  return c.set(o.subarray(t, n)), c;
}, wh = function(o, t, n) {
  var c = o.length, d = !t || n, u = !n || n.i;
  n || (n = {}), t || (t = new jr(c * 3));
  var p = function(uA) {
    var gA = t.length;
    if (uA > gA) {
      var FA = new jr(Math.max(gA * 2, uA));
      FA.set(t), t = FA;
    }
  }, v = n.f || 0, f = n.p || 0, m = n.b || 0, l = n.l, y = n.d, C = n.m, g = n.n, L = c * 8;
  do {
    if (!l) {
      n.f = v = Bn(o, f, 1);
      var E = Bn(o, f + 1, 3);
      if (f += 3, E)
        if (E == 1)
          l = gh, y = Bh, C = 9, g = 5;
        else if (E == 2) {
          var I = Bn(o, f, 31) + 257, M = Bn(o, f + 10, 15) + 4, R = I + Bn(o, f + 5, 31) + 1;
          f += 14;
          for (var Z = new jr(R), AA = new jr(19), V = 0; V < M; ++V)
            AA[cl[V]] = Bn(o, f + V * 3, 7);
          f += M * 3;
          var dA = $c(AA), cA = (1 << dA) - 1;
          if (!u && f + R * (dA + 7) > L)
            break;
          for (var T = Rn(AA, dA, 1), V = 0; V < R; ) {
            var _ = T[Bn(o, f, cA)];
            f += _ & 15;
            var x = _ >>> 4;
            if (x < 16)
              Z[V++] = x;
            else {
              var z = 0, J = 0;
              for (x == 16 ? (J = 3 + Bn(o, f, 3), f += 2, z = Z[V - 1]) : x == 17 ? (J = 3 + Bn(o, f, 7), f += 3) : x == 18 && (J = 11 + Bn(o, f, 127), f += 7); J--; )
                Z[V++] = z;
            }
          }
          var tA = Z.subarray(0, I), aA = Z.subarray(I);
          C = $c(tA), g = $c(aA), l = Rn(tA, C, 1), y = Rn(aA, g, 1);
        } else
          throw "invalid block type";
      else {
        var x = yl(f) + 4, b = o[x - 4] | o[x - 3] << 8, U = x + b;
        if (U > c) {
          if (u)
            throw "unexpected EOF";
          break;
        }
        d && p(m + b), t.set(o.subarray(x, U), m), n.b = m += b, n.p = f = U * 8;
        continue;
      }
      if (f > L)
        throw "unexpected EOF";
    }
    d && p(m + 131072);
    for (var vA = (1 << C) - 1, hA = (1 << g) - 1, UA = C + g + 18; u || f + UA < L; ) {
      var z = l[Al(o, f) & vA], bA = z >>> 4;
      if (f += z & 15, f > L)
        throw "unexpected EOF";
      if (!z)
        throw "invalid length/literal";
      if (bA < 256)
        t[m++] = bA;
      else if (bA == 256) {
        l = null;
        break;
      } else {
        var PA = bA - 254;
        if (bA > 264) {
          var V = bA - 257, j = cc[V];
          PA = Bn(o, f, (1 << j) - 1) + Su[V], f += j;
        }
        var X = y[Al(o, f) & hA], q = X >>> 4;
        if (!X)
          throw "invalid distance";
        f += X & 15;
        var aA = hh[q];
        if (q > 3) {
          var j = lc[q];
          aA += Al(o, f) & (1 << j) - 1, f += j;
        }
        if (f > L)
          throw "unexpected EOF";
        d && p(m + 131072);
        for (var eA = m + PA; m < eA; m += 4)
          t[m] = t[m - aA], t[m + 1] = t[m + 1 - aA], t[m + 2] = t[m + 2 - aA], t[m + 3] = t[m + 3 - aA];
        m = eA;
      }
    }
    n.l = l, n.p = f, n.b = m, l && (v = 1, n.m = C, n.d = y, n.n = g);
  } while (!v);
  return m == t.length ? t : ju(t, 0, m);
}, hs = function(o, t, n) {
  n <<= t & 7;
  var c = t / 8 >> 0;
  o[c] |= n, o[c + 1] |= n >>> 8;
}, ra = function(o, t, n) {
  n <<= t & 7;
  var c = t / 8 >> 0;
  o[c] |= n, o[c + 1] |= n >>> 8, o[c + 2] |= n >>> 16;
}, el = function(o, t) {
  for (var n = [], c = 0; c < o.length; ++c)
    o[c] && n.push({ s: c, f: o[c] });
  var d = n.length, u = n.slice();
  if (!d)
    return [new jr(0), 0];
  if (d == 1) {
    var p = new jr(n[0].s + 1);
    return p[n[0].s] = 1, [p, 1];
  }
  n.sort(function(R, Z) {
    return R.f - Z.f;
  }), n.push({ s: -1, f: 25001 });
  var v = n[0], f = n[1], m = 0, l = 1, y = 2;
  for (n[0] = { s: -1, f: v.f + f.f, l: v, r: f }; l != d - 1; )
    v = n[n[m].f < n[y].f ? m++ : y++], f = n[m != l && n[m].f < n[y].f ? m++ : y++], n[l++] = { s: -1, f: v.f + f.f, l: v, r: f };
  for (var C = u[0].s, c = 1; c < d; ++c)
    u[c].s > C && (C = u[c].s);
  var g = new Br(C + 1), L = fl(n[l - 1], g, 0);
  if (L > t) {
    var c = 0, E = 0, x = L - t, b = 1 << x;
    for (u.sort(function(Z, AA) {
      return g[AA.s] - g[Z.s] || Z.f - AA.f;
    }); c < d; ++c) {
      var U = u[c].s;
      if (g[U] > t)
        E += b - (1 << L - g[U]), g[U] = t;
      else
        break;
    }
    for (E >>>= x; E > 0; ) {
      var I = u[c].s;
      g[I] < t ? E -= 1 << t - g[I]++ - 1 : ++c;
    }
    for (; c >= 0 && E; --c) {
      var M = u[c].s;
      g[M] == t && (--g[M], ++E);
    }
    L = t;
  }
  return [new jr(g), L];
}, fl = function(o, t, n) {
  return o.s == -1 ? Math.max(fl(o.l, t, n + 1), fl(o.r, t, n + 1)) : t[o.s] = n;
}, au = function(o) {
  for (var t = o.length; t && !o[--t]; )
    ;
  for (var n = new Br(++t), c = 0, d = o[0], u = 1, p = function(f) {
    n[c++] = f;
  }, v = 1; v <= t; ++v)
    if (o[v] == d && v != t)
      ++u;
    else {
      if (!d && u > 2) {
        for (; u > 138; u -= 138)
          p(32754);
        u > 2 && (p(u > 10 ? u - 11 << 5 | 28690 : u - 3 << 5 | 12305), u = 0);
      } else if (u > 3) {
        for (p(d), --u; u > 6; u -= 6)
          p(8304);
        u > 2 && (p(u - 3 << 5 | 8208), u = 0);
      }
      for (; u--; )
        p(d);
      u = 1, d = o[v];
    }
  return [n.subarray(0, c), t];
}, na = function(o, t) {
  for (var n = 0, c = 0; c < t.length; ++c)
    n += o[c] * t[c];
  return n;
}, hl = function(o, t, n) {
  var c = n.length, d = yl(t + 2);
  o[d] = c & 255, o[d + 1] = c >>> 8, o[d + 2] = o[d] ^ 255, o[d + 3] = o[d + 1] ^ 255;
  for (var u = 0; u < c; ++u)
    o[d + u + 4] = n[u];
  return (d + 4 + c) * 8;
}, cu = function(o, t, n, c, d, u, p, v, f, m, l) {
  hs(t, l++, n), ++d[256];
  for (var y = el(d, 15), C = y[0], g = y[1], L = el(u, 15), E = L[0], x = L[1], b = au(C), U = b[0], I = b[1], M = au(E), R = M[0], Z = M[1], AA = new Br(19), V = 0; V < U.length; ++V)
    AA[U[V] & 31]++;
  for (var V = 0; V < R.length; ++V)
    AA[R[V] & 31]++;
  for (var dA = el(AA, 7), cA = dA[0], T = dA[1], _ = 19; _ > 4 && !cA[cl[_ - 1]]; --_)
    ;
  var z = m + 5 << 3, J = na(d, Ys) + na(u, fa) + p, tA = na(d, C) + na(u, E) + p + 14 + 3 * _ + na(AA, cA) + (2 * AA[16] + 3 * AA[17] + 7 * AA[18]);
  if (z <= J && z <= tA)
    return hl(t, l, o.subarray(f, f + m));
  var aA, vA, hA, UA;
  if (hs(t, l, 1 + (tA < J)), l += 2, tA < J) {
    aA = Rn(C, g, 0), vA = C, hA = Rn(E, x, 0), UA = E;
    var bA = Rn(cA, T, 0);
    hs(t, l, I - 257), hs(t, l + 5, Z - 1), hs(t, l + 10, _ - 4), l += 14;
    for (var V = 0; V < _; ++V)
      hs(t, l + 3 * V, cA[cl[V]]);
    l += 3 * _;
    for (var PA = [U, R], j = 0; j < 2; ++j)
      for (var X = PA[j], V = 0; V < X.length; ++V) {
        var q = X[V] & 31;
        hs(t, l, bA[q]), l += cA[q], q > 15 && (hs(t, l, X[V] >>> 5 & 127), l += X[V] >>> 12);
      }
  } else
    aA = dh, vA = Ys, hA = ph, UA = fa;
  for (var V = 0; V < v; ++V)
    if (c[V] > 255) {
      var q = c[V] >>> 18 & 31;
      ra(t, l, aA[q + 257]), l += vA[q + 257], q > 7 && (hs(t, l, c[V] >>> 23 & 31), l += cc[q]);
      var eA = c[V] & 31;
      ra(t, l, hA[eA]), l += UA[eA], eA > 3 && (ra(t, l, c[V] >>> 5 & 8191), l += lc[eA]);
    } else
      ra(t, l, aA[c[V]]), l += vA[c[V]];
  return ra(t, l, aA[256]), l + vA[256];
}, vh = /* @__PURE__ */ new ua([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), mh = function(o, t, n, c, d, u) {
  var p = o.length, v = new jr(c + p + 5 * (1 + Math.floor(p / 7e3)) + d), f = v.subarray(c, v.length - d), m = 0;
  if (!t || p < 8)
    for (var l = 0; l <= p; l += 65535) {
      var y = l + 65535;
      y < p ? m = hl(f, m, o.subarray(l, y)) : (f[l] = u, m = hl(f, m, o.subarray(l, p)));
    }
  else {
    for (var C = vh[t - 1], g = C >>> 13, L = C & 8191, E = (1 << n) - 1, x = new Br(32768), b = new Br(E + 1), U = Math.ceil(n / 3), I = 2 * U, M = function(ce) {
      return (o[ce] ^ o[ce + 1] << U ^ o[ce + 2] << I) & E;
    }, R = new ua(25e3), Z = new Br(288), AA = new Br(32), V = 0, dA = 0, l = 0, cA = 0, T = 0, _ = 0; l < p; ++l) {
      var z = M(l), J = l & 32767, tA = b[z];
      if (x[J] = tA, b[z] = J, T <= l) {
        var aA = p - l;
        if ((V > 7e3 || cA > 24576) && aA > 423) {
          m = cu(o, f, 0, R, Z, AA, dA, cA, _, l - _, m), cA = V = dA = 0, _ = l;
          for (var vA = 0; vA < 286; ++vA)
            Z[vA] = 0;
          for (var vA = 0; vA < 30; ++vA)
            AA[vA] = 0;
        }
        var hA = 2, UA = 0, bA = L, PA = J - tA & 32767;
        if (aA > 2 && z == M(l - PA))
          for (var j = Math.min(g, aA) - 1, X = Math.min(32767, l), q = Math.min(258, aA); PA <= X && --bA && J != tA; ) {
            if (o[l + hA] == o[l + hA - PA]) {
              for (var eA = 0; eA < q && o[l + eA] == o[l + eA - PA]; ++eA)
                ;
              if (eA > hA) {
                if (hA = eA, UA = PA, eA > j)
                  break;
                for (var uA = Math.min(PA, eA - 2), gA = 0, vA = 0; vA < uA; ++vA) {
                  var FA = l - PA + vA + 32768 & 32767, QA = x[FA], DA = FA - QA + 32768 & 32767;
                  DA > gA && (gA = DA, tA = FA);
                }
              }
            }
            J = tA, tA = x[J], PA += J - tA + 32768 & 32767;
          }
        if (UA) {
          R[cA++] = 268435456 | ll[hA] << 18 | ou[UA];
          var KA = ll[hA] & 31, RA = ou[UA] & 31;
          dA += cc[KA] + lc[RA], ++Z[257 + KA], ++AA[RA], T = l + hA, ++V;
        } else
          R[cA++] = o[l], ++Z[o[l]];
      }
    }
    m = cu(o, f, u, R, Z, AA, dA, cA, _, l - _, m);
  }
  return ju(v, 0, c + yl(m) + d);
}, yh = function() {
  var o = 1, t = 0;
  return {
    p: function(n) {
      for (var c = o, d = t, u = n.length, p = 0; p != u; ) {
        for (var v = Math.min(p + 5552, u); p < v; ++p)
          c += n[p], d += c;
        c %= 65521, d %= 65521;
      }
      o = c, t = d;
    },
    d: function() {
      return (o >>> 8 << 16 | (t & 255) << 8 | t >>> 8) + ((o & 255) << 23) * 2;
    }
  };
}, Ch = function(o, t, n, c, d) {
  return mh(o, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(o.length))) * 1.5) : 12 + t.mem, n, c, !d);
}, Fh = function(o, t, n) {
  for (; n; ++t)
    o[t] = n, n >>>= 8;
}, bh = function(o, t) {
  var n = t.level, c = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
  o[0] = 120, o[1] = c << 6 | (c ? 32 - 2 * c : 1);
}, Qh = function(o) {
  if ((o[0] & 15) != 8 || o[0] >>> 4 > 7 || (o[0] << 8 | o[1]) % 31)
    throw "invalid zlib data";
  if (o[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function dl(o, t) {
  t === void 0 && (t = {});
  var n = yh();
  n.p(o);
  var c = Ch(o, t, 2, 4);
  return bh(c, t), Fh(c, c.length - 4, n.d()), c;
}
function Uh(o, t) {
  return wh((Qh(o), o.subarray(2, -4)), t);
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
var Ie = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function tl() {
  Ie.console && typeof Ie.console.log == "function" && Ie.console.log.apply(Ie.console, arguments);
}
var ot = { log: tl, warn: function(o) {
  Ie.console && (typeof Ie.console.warn == "function" ? Ie.console.warn.apply(Ie.console, arguments) : tl.call(null, arguments));
}, error: function(o) {
  Ie.console && (typeof Ie.console.error == "function" ? Ie.console.error.apply(Ie.console, arguments) : tl(o));
} };
function rl(o, t, n) {
  var c = new XMLHttpRequest();
  c.open("GET", o), c.responseType = "blob", c.onload = function() {
    Ci(c.response, t, n);
  }, c.onerror = function() {
    ot.error("could not download file");
  }, c.send();
}
function lu(o) {
  var t = new XMLHttpRequest();
  t.open("HEAD", o, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function nc(o) {
  try {
    o.dispatchEvent(new MouseEvent("click"));
  } catch {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), o.dispatchEvent(t);
  }
}
var ia, gl, Ci = Ie.saveAs || ((typeof window > "u" ? "undefined" : st(window)) !== "object" || window !== Ie ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(o, t, n) {
  var c = Ie.URL || Ie.webkitURL, d = document.createElement("a");
  t = t || o.name || "download", d.download = t, d.rel = "noopener", typeof o == "string" ? (d.href = o, d.origin !== location.origin ? lu(d.href) ? rl(o, t, n) : nc(d, d.target = "_blank") : nc(d)) : (d.href = c.createObjectURL(o), setTimeout(function() {
    c.revokeObjectURL(d.href);
  }, 4e4), setTimeout(function() {
    nc(d);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(o, t, n) {
  if (t = t || o.name || "download", typeof o == "string") if (lu(o)) rl(o, t, n);
  else {
    var c = document.createElement("a");
    c.href = o, c.target = "_blank", setTimeout(function() {
      nc(c);
    });
  }
  else navigator.msSaveOrOpenBlob(function(d, u) {
    return u === void 0 ? u = { autoBom: !1 } : st(u) !== "object" && (ot.warn("Deprecated: Expected third argument to be a object"), u = { autoBom: !u }), u.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob(["\uFEFF", d], { type: d.type }) : d;
  }(o, n), t);
} : function(o, t, n, c) {
  if ((c = c || open("", "_blank")) && (c.document.title = c.document.body.innerText = "downloading..."), typeof o == "string") return rl(o, t, n);
  var d = o.type === "application/octet-stream", u = /constructor/i.test(Ie.HTMLElement) || Ie.safari, p = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((p || d && u) && (typeof FileReader > "u" ? "undefined" : st(FileReader)) === "object") {
    var v = new FileReader();
    v.onloadend = function() {
      var l = v.result;
      l = p ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), c ? c.location.href = l : location = l, c = null;
    }, v.readAsDataURL(o);
  } else {
    var f = Ie.URL || Ie.webkitURL, m = f.createObjectURL(o);
    c ? c.location = m : location.href = m, c = null, setTimeout(function() {
      f.revokeObjectURL(m);
    }, 4e4);
  }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function Nu(o) {
  var t;
  o = o || "", this.ok = !1, o.charAt(0) == "#" && (o = o.substr(1, 6)), o = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[o = (o = o.replace(/ /g, "")).toLowerCase()] || o;
  for (var n = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(v) {
    return [parseInt(v[1]), parseInt(v[2]), parseInt(v[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(v) {
    return [parseInt(v[1], 16), parseInt(v[2], 16), parseInt(v[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(v) {
    return [parseInt(v[1] + v[1], 16), parseInt(v[2] + v[2], 16), parseInt(v[3] + v[3], 16)];
  } }], c = 0; c < n.length; c++) {
    var d = n[c].re, u = n[c].process, p = d.exec(o);
    p && (t = u(p), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var v = this.r.toString(16), f = this.g.toString(16), m = this.b.toString(16);
    return v.length == 1 && (v = "0" + v), f.length == 1 && (f = "0" + f), m.length == 1 && (m = "0" + m), "#" + v + f + m;
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
function nl(o, t) {
  var n = o[0], c = o[1], d = o[2], u = o[3];
  n = or(n, c, d, u, t[0], 7, -680876936), u = or(u, n, c, d, t[1], 12, -389564586), d = or(d, u, n, c, t[2], 17, 606105819), c = or(c, d, u, n, t[3], 22, -1044525330), n = or(n, c, d, u, t[4], 7, -176418897), u = or(u, n, c, d, t[5], 12, 1200080426), d = or(d, u, n, c, t[6], 17, -1473231341), c = or(c, d, u, n, t[7], 22, -45705983), n = or(n, c, d, u, t[8], 7, 1770035416), u = or(u, n, c, d, t[9], 12, -1958414417), d = or(d, u, n, c, t[10], 17, -42063), c = or(c, d, u, n, t[11], 22, -1990404162), n = or(n, c, d, u, t[12], 7, 1804603682), u = or(u, n, c, d, t[13], 12, -40341101), d = or(d, u, n, c, t[14], 17, -1502002290), n = ar(n, c = or(c, d, u, n, t[15], 22, 1236535329), d, u, t[1], 5, -165796510), u = ar(u, n, c, d, t[6], 9, -1069501632), d = ar(d, u, n, c, t[11], 14, 643717713), c = ar(c, d, u, n, t[0], 20, -373897302), n = ar(n, c, d, u, t[5], 5, -701558691), u = ar(u, n, c, d, t[10], 9, 38016083), d = ar(d, u, n, c, t[15], 14, -660478335), c = ar(c, d, u, n, t[4], 20, -405537848), n = ar(n, c, d, u, t[9], 5, 568446438), u = ar(u, n, c, d, t[14], 9, -1019803690), d = ar(d, u, n, c, t[3], 14, -187363961), c = ar(c, d, u, n, t[8], 20, 1163531501), n = ar(n, c, d, u, t[13], 5, -1444681467), u = ar(u, n, c, d, t[2], 9, -51403784), d = ar(d, u, n, c, t[7], 14, 1735328473), n = cr(n, c = ar(c, d, u, n, t[12], 20, -1926607734), d, u, t[5], 4, -378558), u = cr(u, n, c, d, t[8], 11, -2022574463), d = cr(d, u, n, c, t[11], 16, 1839030562), c = cr(c, d, u, n, t[14], 23, -35309556), n = cr(n, c, d, u, t[1], 4, -1530992060), u = cr(u, n, c, d, t[4], 11, 1272893353), d = cr(d, u, n, c, t[7], 16, -155497632), c = cr(c, d, u, n, t[10], 23, -1094730640), n = cr(n, c, d, u, t[13], 4, 681279174), u = cr(u, n, c, d, t[0], 11, -358537222), d = cr(d, u, n, c, t[3], 16, -722521979), c = cr(c, d, u, n, t[6], 23, 76029189), n = cr(n, c, d, u, t[9], 4, -640364487), u = cr(u, n, c, d, t[12], 11, -421815835), d = cr(d, u, n, c, t[15], 16, 530742520), n = lr(n, c = cr(c, d, u, n, t[2], 23, -995338651), d, u, t[0], 6, -198630844), u = lr(u, n, c, d, t[7], 10, 1126891415), d = lr(d, u, n, c, t[14], 15, -1416354905), c = lr(c, d, u, n, t[5], 21, -57434055), n = lr(n, c, d, u, t[12], 6, 1700485571), u = lr(u, n, c, d, t[3], 10, -1894986606), d = lr(d, u, n, c, t[10], 15, -1051523), c = lr(c, d, u, n, t[1], 21, -2054922799), n = lr(n, c, d, u, t[8], 6, 1873313359), u = lr(u, n, c, d, t[15], 10, -30611744), d = lr(d, u, n, c, t[6], 15, -1560198380), c = lr(c, d, u, n, t[13], 21, 1309151649), n = lr(n, c, d, u, t[4], 6, -145523070), u = lr(u, n, c, d, t[11], 10, -1120210379), d = lr(d, u, n, c, t[2], 15, 718787259), c = lr(c, d, u, n, t[9], 21, -343485551), o[0] = Js(n, o[0]), o[1] = Js(c, o[1]), o[2] = Js(d, o[2]), o[3] = Js(u, o[3]);
}
function uc(o, t, n, c, d, u) {
  return t = Js(Js(t, o), Js(c, u)), Js(t << d | t >>> 32 - d, n);
}
function or(o, t, n, c, d, u, p) {
  return uc(t & n | ~t & c, o, t, d, u, p);
}
function ar(o, t, n, c, d, u, p) {
  return uc(t & c | n & ~c, o, t, d, u, p);
}
function cr(o, t, n, c, d, u, p) {
  return uc(t ^ n ^ c, o, t, d, u, p);
}
function lr(o, t, n, c, d, u, p) {
  return uc(n ^ (t | ~c), o, t, d, u, p);
}
function Ou(o) {
  var t, n = o.length, c = [1732584193, -271733879, -1732584194, 271733878];
  for (t = 64; t <= o.length; t += 64) nl(c, Eh(o.substring(t - 64, t)));
  o = o.substring(t - 64);
  var d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (t = 0; t < o.length; t++) d[t >> 2] |= o.charCodeAt(t) << (t % 4 << 3);
  if (d[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (nl(c, d), t = 0; t < 16; t++) d[t] = 0;
  return d[14] = 8 * n, nl(c, d), c;
}
function Eh(o) {
  var t, n = [];
  for (t = 0; t < 64; t += 4) n[t >> 2] = o.charCodeAt(t) + (o.charCodeAt(t + 1) << 8) + (o.charCodeAt(t + 2) << 16) + (o.charCodeAt(t + 3) << 24);
  return n;
}
ia = Ie.atob.bind(Ie), gl = Ie.btoa.bind(Ie);
var uu = "0123456789abcdef".split("");
function Lh(o) {
  for (var t = "", n = 0; n < 4; n++) t += uu[o >> 8 * n + 4 & 15] + uu[o >> 8 * n & 15];
  return t;
}
function Ih(o) {
  return String.fromCharCode((255 & o) >> 0, (65280 & o) >> 8, (16711680 & o) >> 16, (4278190080 & o) >> 24);
}
function pl(o) {
  return Ou(o).map(Ih).join("");
}
var xh = function(o) {
  for (var t = 0; t < o.length; t++) o[t] = Lh(o[t]);
  return o.join("");
}(Ou("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Js(o, t) {
  if (xh) {
    var n = (65535 & o) + (65535 & t);
    return (o >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  return o + t & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function Bl(o, t) {
  var n, c, d, u;
  if (o !== n) {
    for (var p = (d = o, u = 1 + (256 / o.length >> 0), new Array(u + 1).join(d)), v = [], f = 0; f < 256; f++) v[f] = f;
    var m = 0;
    for (f = 0; f < 256; f++) {
      var l = v[f];
      m = (m + l + p.charCodeAt(f)) % 256, v[f] = v[m], v[m] = l;
    }
    n = o, c = v;
  } else v = c;
  var y = t.length, C = 0, g = 0, L = "";
  for (f = 0; f < y; f++) g = (g + (l = v[C = (C + 1) % 256])) % 256, v[C] = v[g], v[g] = l, p = v[(v[C] + v[g]) % 256], L += String.fromCharCode(t.charCodeAt(f) ^ p);
  return L;
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
var fu = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function bo(o, t, n, c) {
  this.v = 1, this.r = 2;
  var d = 192;
  o.forEach(function(v) {
    if (fu.perm !== void 0) throw new Error("Invalid permission: " + v);
    d += fu[v];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var u = (t + this.padding).substr(0, 32), p = (n + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(u, p), this.P = -(1 + (255 ^ d)), this.encryptionKey = pl(u + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(c)).substr(0, 5), this.U = Bl(this.encryptionKey, this.padding);
}
function Qo(o) {
  if (/[^\u0000-\u00ff]/.test(o)) throw new Error("Invalid PDF Name Object: " + o + ", Only accept ASCII characters.");
  for (var t = "", n = o.length, c = 0; c < n; c++) {
    var d = o.charCodeAt(c);
    d < 33 || d === 35 || d === 37 || d === 40 || d === 41 || d === 47 || d === 60 || d === 62 || d === 91 || d === 93 || d === 123 || d === 125 || d > 126 ? t += "#" + ("0" + d.toString(16)).slice(-2) : t += o[c];
  }
  return t;
}
function hu(o) {
  if (st(o) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var t = {};
  this.subscribe = function(n, c, d) {
    if (d = d || !1, typeof n != "string" || typeof c != "function" || typeof d != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    t.hasOwnProperty(n) || (t[n] = {});
    var u = Math.random().toString(35);
    return t[n][u] = [c, !!d], u;
  }, this.unsubscribe = function(n) {
    for (var c in t) if (t[c][n]) return delete t[c][n], Object.keys(t[c]).length === 0 && delete t[c], !0;
    return !1;
  }, this.publish = function(n) {
    if (t.hasOwnProperty(n)) {
      var c = Array.prototype.slice.call(arguments, 1), d = [];
      for (var u in t[n]) {
        var p = t[n][u];
        try {
          p[0].apply(o, c);
        } catch (v) {
          Ie.console && ot.error("jsPDF PubSub Error", v.message, v);
        }
        p[1] && d.push(u);
      }
      d.length && d.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return t;
  };
}
function ha(o) {
  if (!(this instanceof ha)) return new ha(o);
  var t = "opacity,stroke-opacity".split(",");
  for (var n in o) o.hasOwnProperty(n) && t.indexOf(n) >= 0 && (this[n] = o[n]);
  this.id = "", this.objectNumber = -1;
}
function Pu(o, t) {
  this.gState = o, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function Xs(o, t, n, c, d) {
  if (!(this instanceof Xs)) return new Xs(o, t, n, c, d);
  this.type = o === "axial" ? 2 : 3, this.coords = t, this.colors = n, Pu.call(this, c, d);
}
function Fi(o, t, n, c, d) {
  if (!(this instanceof Fi)) return new Fi(o, t, n, c, d);
  this.boundingBox = o, this.xStep = t, this.yStep = n, this.stream = "", this.cloneIndex = 0, Pu.call(this, c, d);
}
function Ue(o) {
  var t, n = typeof arguments[0] == "string" ? arguments[0] : "p", c = arguments[1], d = arguments[2], u = arguments[3], p = [], v = 1, f = 16, m = "S", l = null;
  st(o = o || {}) === "object" && (n = o.orientation, c = o.unit || c, d = o.format || d, u = o.compress || o.compressPdf || u, (l = o.encryption || null) !== null && (l.userPassword = l.userPassword || "", l.ownerPassword = l.ownerPassword || "", l.userPermissions = l.userPermissions || []), v = typeof o.userUnit == "number" ? Math.abs(o.userUnit) : 1, o.precision !== void 0 && (t = o.precision), o.floatPrecision !== void 0 && (f = o.floatPrecision), m = o.defaultPathOperation || "S"), p = o.filters || (u === !0 ? ["FlateEncode"] : p), c = c || "mm", n = ("" + (n || "P")).toLowerCase();
  var y = o.putOnlyUsedFonts || !1, C = {}, g = { internal: {}, __private__: {} };
  g.__private__.PubSub = hu;
  var L = "1.3", E = g.__private__.getPdfVersion = function() {
    return L;
  };
  g.__private__.setPdfVersion = function(h) {
    L = h;
  };
  var x = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  g.__private__.getPageFormats = function() {
    return x;
  };
  var b = g.__private__.getPageFormat = function(h) {
    return x[h];
  };
  d = d || "a4";
  var U = { COMPAT: "compat", ADVANCED: "advanced" }, I = U.COMPAT;
  function M() {
    this.saveGraphicsState(), $(new ge(mA, 0, 0, -mA, 0, xn() * mA).toString() + " cm"), this.setFontSize(this.getFontSize() / mA), m = "n", I = U.ADVANCED;
  }
  function R() {
    this.restoreGraphicsState(), m = "S", I = U.COMPAT;
  }
  var Z = g.__private__.combineFontStyleAndFontWeight = function(h, H) {
    if (h == "bold" && H == "normal" || h == "bold" && H == 400 || h == "normal" && H == "italic" || h == "bold" && H == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return H && (h = H == 400 || H === "normal" ? h === "italic" ? "italic" : "normal" : H != 700 && H !== "bold" || h !== "normal" ? (H == 700 ? "bold" : H) + "" + h : "bold"), h;
  };
  g.advancedAPI = function(h) {
    var H = I === U.COMPAT;
    return H && M.call(this), typeof h != "function" || (h(this), H && R.call(this)), this;
  }, g.compatAPI = function(h) {
    var H = I === U.ADVANCED;
    return H && R.call(this), typeof h != "function" || (h(this), H && M.call(this)), this;
  }, g.isAdvancedAPI = function() {
    return I === U.ADVANCED;
  };
  var AA, V = function(h) {
    if (I !== U.ADVANCED) throw new Error(h + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, dA = g.roundToPrecision = g.__private__.roundToPrecision = function(h, H) {
    var Y = t || H;
    if (isNaN(h) || isNaN(Y)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return h.toFixed(Y).replace(/0+$/, "");
  };
  AA = g.hpf = g.__private__.hpf = typeof f == "number" ? function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return dA(h, f);
  } : f === "smart" ? function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return dA(h, h > -1 && h < 1 ? 16 : 5);
  } : function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return dA(h, 16);
  };
  var cA = g.f2 = g.__private__.f2 = function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.f2");
    return dA(h, 2);
  }, T = g.__private__.f3 = function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.f3");
    return dA(h, 3);
  }, _ = g.scale = g.__private__.scale = function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.scale");
    return I === U.COMPAT ? h * mA : I === U.ADVANCED ? h : void 0;
  }, z = function(h) {
    return I === U.COMPAT ? xn() - h : I === U.ADVANCED ? h : void 0;
  }, J = function(h) {
    return _(z(h));
  };
  g.__private__.setPrecision = g.setPrecision = function(h) {
    typeof parseInt(h, 10) == "number" && (t = parseInt(h, 10));
  };
  var tA, aA = "00000000000000000000000000000000", vA = g.__private__.getFileId = function() {
    return aA;
  }, hA = g.__private__.setFileId = function(h) {
    return aA = h !== void 0 && /^[a-fA-F0-9]{32}$/.test(h) ? h.toUpperCase() : aA.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), l !== null && (Gt = new bo(l.userPermissions, l.userPassword, l.ownerPassword, aA)), aA;
  };
  g.setFileId = function(h) {
    return hA(h), this;
  }, g.getFileId = function() {
    return vA();
  };
  var UA = g.__private__.convertDateToPDFDate = function(h) {
    var H = h.getTimezoneOffset(), Y = H < 0 ? "+" : "-", rA = Math.floor(Math.abs(H / 60)), pA = Math.abs(H % 60), IA = [Y, q(rA), "'", q(pA), "'"].join("");
    return ["D:", h.getFullYear(), q(h.getMonth() + 1), q(h.getDate()), q(h.getHours()), q(h.getMinutes()), q(h.getSeconds()), IA].join("");
  }, bA = g.__private__.convertPDFDateToDate = function(h) {
    var H = parseInt(h.substr(2, 4), 10), Y = parseInt(h.substr(6, 2), 10) - 1, rA = parseInt(h.substr(8, 2), 10), pA = parseInt(h.substr(10, 2), 10), IA = parseInt(h.substr(12, 2), 10), kA = parseInt(h.substr(14, 2), 10);
    return new Date(H, Y, rA, pA, IA, kA, 0);
  }, PA = g.__private__.setCreationDate = function(h) {
    var H;
    if (h === void 0 && (h = /* @__PURE__ */ new Date()), h instanceof Date) H = UA(h);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(h)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      H = h;
    }
    return tA = H;
  }, j = g.__private__.getCreationDate = function(h) {
    var H = tA;
    return h === "jsDate" && (H = bA(tA)), H;
  };
  g.setCreationDate = function(h) {
    return PA(h), this;
  }, g.getCreationDate = function(h) {
    return j(h);
  };
  var X, q = g.__private__.padd2 = function(h) {
    return ("0" + parseInt(h)).slice(-2);
  }, eA = g.__private__.padd2Hex = function(h) {
    return ("00" + (h = h.toString())).substr(h.length);
  }, uA = 0, gA = [], FA = [], QA = 0, DA = [], KA = [], RA = !1, GA = FA, ce = function() {
    uA = 0, QA = 0, FA = [], gA = [], DA = [], Pr = ut(), wr = ut();
  };
  g.__private__.setCustomOutputDestination = function(h) {
    RA = !0, GA = h;
  };
  var LA = function(h) {
    RA || (GA = h);
  };
  g.__private__.resetCustomOutputDestination = function() {
    RA = !1, GA = FA;
  };
  var $ = g.__private__.out = function(h) {
    return h = h.toString(), QA += h.length + 1, GA.push(h), GA;
  }, be = g.__private__.write = function(h) {
    return $(arguments.length === 1 ? h.toString() : Array.prototype.join.call(arguments, " "));
  }, zA = g.__private__.getArrayBuffer = function(h) {
    for (var H = h.length, Y = new ArrayBuffer(H), rA = new Uint8Array(Y); H--; ) rA[H] = h.charCodeAt(H);
    return Y;
  }, NA = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  g.__private__.getStandardFonts = function() {
    return NA;
  };
  var WA = o.fontSize || 16;
  g.__private__.setFontSize = g.setFontSize = function(h) {
    return WA = I === U.ADVANCED ? h / mA : h, this;
  };
  var YA, XA = g.__private__.getFontSize = g.getFontSize = function() {
    return I === U.COMPAT ? WA : WA * mA;
  }, ae = o.R2L || !1;
  g.__private__.setR2L = g.setR2L = function(h) {
    return ae = h, this;
  }, g.__private__.getR2L = g.getR2L = function() {
    return ae;
  };
  var ye, de = g.__private__.setZoomMode = function(h) {
    var H = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(h)) YA = h;
    else if (isNaN(h)) {
      if (H.indexOf(h) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + h + '" is not recognized.');
      YA = h;
    } else YA = parseInt(h, 10);
  };
  g.__private__.getZoomMode = function() {
    return YA;
  };
  var Ce, Te = g.__private__.setPageMode = function(h) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(h) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + h + '" is not recognized.');
    ye = h;
  };
  g.__private__.getPageMode = function() {
    return ye;
  };
  var Ee = g.__private__.setLayoutMode = function(h) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(h) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + h + '" is not recognized.');
    Ce = h;
  };
  g.__private__.getLayoutMode = function() {
    return Ce;
  }, g.__private__.setDisplayMode = g.setDisplayMode = function(h, H, Y) {
    return de(h), Ee(H), Te(Y), this;
  };
  var we = { title: "", subject: "", author: "", keywords: "", creator: "" };
  g.__private__.getDocumentProperty = function(h) {
    if (Object.keys(we).indexOf(h) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return we[h];
  }, g.__private__.getDocumentProperties = function() {
    return we;
  }, g.__private__.setDocumentProperties = g.setProperties = g.setDocumentProperties = function(h) {
    for (var H in we) we.hasOwnProperty(H) && h[H] && (we[H] = h[H]);
    return this;
  }, g.__private__.setDocumentProperty = function(h, H) {
    if (Object.keys(we).indexOf(h) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return we[h] = H;
  };
  var BA, mA, TA, MA, fe, Ae = {}, Fe = {}, Bt = [], He = {}, Ar = {}, Ge = {}, kt = {}, je = null, qA = 0, VA = [], ie = new hu(g), Me = o.hotfixes || [], Re = {}, Dt = {}, er = [], ge = function h(H, Y, rA, pA, IA, kA) {
    if (!(this instanceof h)) return new h(H, Y, rA, pA, IA, kA);
    isNaN(H) && (H = 1), isNaN(Y) && (Y = 0), isNaN(rA) && (rA = 0), isNaN(pA) && (pA = 1), isNaN(IA) && (IA = 0), isNaN(kA) && (kA = 0), this._matrix = [H, Y, rA, pA, IA, kA];
  };
  Object.defineProperty(ge.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(h) {
    this._matrix[0] = h;
  } }), Object.defineProperty(ge.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(h) {
    this._matrix[1] = h;
  } }), Object.defineProperty(ge.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(h) {
    this._matrix[2] = h;
  } }), Object.defineProperty(ge.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(h) {
    this._matrix[3] = h;
  } }), Object.defineProperty(ge.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(h) {
    this._matrix[4] = h;
  } }), Object.defineProperty(ge.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(h) {
    this._matrix[5] = h;
  } }), Object.defineProperty(ge.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(h) {
    this._matrix[0] = h;
  } }), Object.defineProperty(ge.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(h) {
    this._matrix[1] = h;
  } }), Object.defineProperty(ge.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(h) {
    this._matrix[2] = h;
  } }), Object.defineProperty(ge.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(h) {
    this._matrix[3] = h;
  } }), Object.defineProperty(ge.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(h) {
    this._matrix[4] = h;
  } }), Object.defineProperty(ge.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(h) {
    this._matrix[5] = h;
  } }), Object.defineProperty(ge.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(ge.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(ge.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(ge.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), ge.prototype.join = function(h) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(AA).join(h);
  }, ge.prototype.multiply = function(h) {
    var H = h.sx * this.sx + h.shy * this.shx, Y = h.sx * this.shy + h.shy * this.sy, rA = h.shx * this.sx + h.sy * this.shx, pA = h.shx * this.shy + h.sy * this.sy, IA = h.tx * this.sx + h.ty * this.shx + this.tx, kA = h.tx * this.shy + h.ty * this.sy + this.ty;
    return new ge(H, Y, rA, pA, IA, kA);
  }, ge.prototype.decompose = function() {
    var h = this.sx, H = this.shy, Y = this.shx, rA = this.sy, pA = this.tx, IA = this.ty, kA = Math.sqrt(h * h + H * H), te = (h /= kA) * Y + (H /= kA) * rA;
    Y -= h * te, rA -= H * te;
    var Be = Math.sqrt(Y * Y + rA * rA);
    return te /= Be, h * (rA /= Be) < H * (Y /= Be) && (h = -h, H = -H, te = -te, kA = -kA), { scale: new ge(kA, 0, 0, Be, 0, 0), translate: new ge(1, 0, 0, 1, pA, IA), rotate: new ge(h, H, -H, h, 0, 0), skew: new ge(1, 0, te, 1, 0, 0) };
  }, ge.prototype.toString = function(h) {
    return this.join(" ");
  }, ge.prototype.inversed = function() {
    var h = this.sx, H = this.shy, Y = this.shx, rA = this.sy, pA = this.tx, IA = this.ty, kA = 1 / (h * rA - H * Y), te = rA * kA, Be = -H * kA, xe = -Y * kA, Pe = h * kA;
    return new ge(te, Be, xe, Pe, -te * pA - xe * IA, -Be * pA - Pe * IA);
  }, ge.prototype.applyToPoint = function(h) {
    var H = h.x * this.sx + h.y * this.shx + this.tx, Y = h.x * this.shy + h.y * this.sy + this.ty;
    return new Fs(H, Y);
  }, ge.prototype.applyToRectangle = function(h) {
    var H = this.applyToPoint(h), Y = this.applyToPoint(new Fs(h.x + h.w, h.y + h.h));
    return new ti(H.x, H.y, Y.x - H.x, Y.y - H.y);
  }, ge.prototype.clone = function() {
    var h = this.sx, H = this.shy, Y = this.shx, rA = this.sy, pA = this.tx, IA = this.ty;
    return new ge(h, H, Y, rA, pA, IA);
  }, g.Matrix = ge;
  var Or = g.matrixMult = function(h, H) {
    return H.multiply(h);
  }, Xr = new ge(1, 0, 0, 1, 0, 0);
  g.unitMatrix = g.identityMatrix = Xr;
  var Xt = function(h, H) {
    if (!Ar[h]) {
      var Y = (H instanceof Xs ? "Sh" : "P") + (Object.keys(He).length + 1).toString(10);
      H.id = Y, Ar[h] = Y, He[Y] = H, ie.publish("addPattern", H);
    }
  };
  g.ShadingPattern = Xs, g.TilingPattern = Fi, g.addShadingPattern = function(h, H) {
    return V("addShadingPattern()"), Xt(h, H), this;
  }, g.beginTilingPattern = function(h) {
    V("beginTilingPattern()"), Xi(h.boundingBox[0], h.boundingBox[1], h.boundingBox[2] - h.boundingBox[0], h.boundingBox[3] - h.boundingBox[1], h.matrix);
  }, g.endTilingPattern = function(h, H) {
    V("endTilingPattern()"), H.stream = KA[X].join(`
`), Xt(h, H), ie.publish("endTilingPattern", H), er.pop().restore();
  };
  var pe = g.__private__.newObject = function() {
    var h = ut();
    return Jt(h, !0), h;
  }, ut = g.__private__.newObjectDeferred = function() {
    return uA++, gA[uA] = function() {
      return QA;
    }, uA;
  }, Jt = function(h, H) {
    return H = typeof H == "boolean" && H, gA[h] = QA, H && $(h + " 0 obj"), h;
  }, tr = g.__private__.newAdditionalObject = function() {
    var h = { objId: ut(), content: "" };
    return DA.push(h), h;
  }, Pr = ut(), wr = ut(), vr = g.__private__.decodeColorString = function(h) {
    var H = h.split(" ");
    if (H.length !== 2 || H[1] !== "g" && H[1] !== "G")
      H.length === 5 && (H[4] === "k" || H[4] === "K") && (H = [(1 - H[0]) * (1 - H[3]), (1 - H[1]) * (1 - H[3]), (1 - H[2]) * (1 - H[3]), "r"]);
    else {
      var Y = parseFloat(H[0]);
      H = [Y, Y, Y, "r"];
    }
    for (var rA = "#", pA = 0; pA < 3; pA++) rA += ("0" + Math.floor(255 * parseFloat(H[pA])).toString(16)).slice(-2);
    return rA;
  }, Tr = g.__private__.encodeColorString = function(h) {
    var H;
    typeof h == "string" && (h = { ch1: h });
    var Y = h.ch1, rA = h.ch2, pA = h.ch3, IA = h.ch4, kA = h.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof Y == "string" && Y.charAt(0) !== "#") {
      var te = new Nu(Y);
      if (te.ok) Y = te.toHex();
      else if (!/^\d*\.?\d*$/.test(Y)) throw new Error('Invalid color "' + Y + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof Y == "string" && /^#[0-9A-Fa-f]{3}$/.test(Y) && (Y = "#" + Y[1] + Y[1] + Y[2] + Y[2] + Y[3] + Y[3]), typeof Y == "string" && /^#[0-9A-Fa-f]{6}$/.test(Y)) {
      var Be = parseInt(Y.substr(1), 16);
      Y = Be >> 16 & 255, rA = Be >> 8 & 255, pA = 255 & Be;
    }
    if (rA === void 0 || IA === void 0 && Y === rA && rA === pA) if (typeof Y == "string") H = Y + " " + kA[0];
    else switch (h.precision) {
      case 2:
        H = cA(Y / 255) + " " + kA[0];
        break;
      case 3:
      default:
        H = T(Y / 255) + " " + kA[0];
    }
    else if (IA === void 0 || st(IA) === "object") {
      if (IA && !isNaN(IA.a) && IA.a === 0) return H = ["1.", "1.", "1.", kA[1]].join(" ");
      if (typeof Y == "string") H = [Y, rA, pA, kA[1]].join(" ");
      else switch (h.precision) {
        case 2:
          H = [cA(Y / 255), cA(rA / 255), cA(pA / 255), kA[1]].join(" ");
          break;
        default:
        case 3:
          H = [T(Y / 255), T(rA / 255), T(pA / 255), kA[1]].join(" ");
      }
    } else if (typeof Y == "string") H = [Y, rA, pA, IA, kA[2]].join(" ");
    else switch (h.precision) {
      case 2:
        H = [cA(Y), cA(rA), cA(pA), cA(IA), kA[2]].join(" ");
        break;
      case 3:
      default:
        H = [T(Y), T(rA), T(pA), T(IA), kA[2]].join(" ");
    }
    return H;
  }, Dr = g.__private__.getFilters = function() {
    return p;
  }, mr = g.__private__.putStream = function(h) {
    var H = (h = h || {}).data || "", Y = h.filters || Dr(), rA = h.alreadyAppliedFilters || [], pA = h.addLength1 || !1, IA = H.length, kA = h.objectId, te = function(Vt) {
      return Vt;
    };
    if (l !== null && kA === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    l !== null && (te = Gt.encryptor(kA, 0));
    var Be = {};
    Y === !0 && (Y = ["FlateEncode"]);
    var xe = h.additionalKeyValues || [], Pe = (Be = Ue.API.processDataByFilters !== void 0 ? Ue.API.processDataByFilters(H, Y) : { data: H, reverseChain: [] }).reverseChain + (Array.isArray(rA) ? rA.join(" ") : rA.toString());
    if (Be.data.length !== 0 && (xe.push({ key: "Length", value: Be.data.length }), pA === !0 && xe.push({ key: "Length1", value: IA })), Pe.length != 0) if (Pe.split("/").length - 1 == 1) xe.push({ key: "Filter", value: Pe });
    else {
      xe.push({ key: "Filter", value: "[" + Pe + "]" });
      for (var ke = 0; ke < xe.length; ke += 1) if (xe[ke].key === "DecodeParms") {
        for (var At = [], et = 0; et < Be.reverseChain.split("/").length - 1; et += 1) At.push("null");
        At.push(xe[ke].value), xe[ke].value = "[" + At.join(" ") + "]";
      }
    }
    $("<<");
    for (var Le = 0; Le < xe.length; Le++) $("/" + xe[Le].key + " " + xe[Le].value);
    $(">>"), Be.data.length !== 0 && ($("stream"), $(te(Be.data)), $("endstream"));
  }, Jr = g.__private__.putPage = function(h) {
    var H = h.number, Y = h.data, rA = h.objId, pA = h.contentsObjId;
    Jt(rA, !0), $("<</Type /Page"), $("/Parent " + h.rootDictionaryObjId + " 0 R"), $("/Resources " + h.resourceDictionaryObjId + " 0 R"), $("/MediaBox [" + parseFloat(AA(h.mediaBox.bottomLeftX)) + " " + parseFloat(AA(h.mediaBox.bottomLeftY)) + " " + AA(h.mediaBox.topRightX) + " " + AA(h.mediaBox.topRightY) + "]"), h.cropBox !== null && $("/CropBox [" + AA(h.cropBox.bottomLeftX) + " " + AA(h.cropBox.bottomLeftY) + " " + AA(h.cropBox.topRightX) + " " + AA(h.cropBox.topRightY) + "]"), h.bleedBox !== null && $("/BleedBox [" + AA(h.bleedBox.bottomLeftX) + " " + AA(h.bleedBox.bottomLeftY) + " " + AA(h.bleedBox.topRightX) + " " + AA(h.bleedBox.topRightY) + "]"), h.trimBox !== null && $("/TrimBox [" + AA(h.trimBox.bottomLeftX) + " " + AA(h.trimBox.bottomLeftY) + " " + AA(h.trimBox.topRightX) + " " + AA(h.trimBox.topRightY) + "]"), h.artBox !== null && $("/ArtBox [" + AA(h.artBox.bottomLeftX) + " " + AA(h.artBox.bottomLeftY) + " " + AA(h.artBox.topRightX) + " " + AA(h.artBox.topRightY) + "]"), typeof h.userUnit == "number" && h.userUnit !== 1 && $("/UserUnit " + h.userUnit), ie.publish("putPage", { objId: rA, pageContext: VA[H], pageNumber: H, page: Y }), $("/Contents " + pA + " 0 R"), $(">>"), $("endobj");
    var IA = Y.join(`
`);
    return I === U.ADVANCED && (IA += `
Q`), Jt(pA, !0), mr({ data: IA, filters: Dr(), objectId: pA }), $("endobj"), rA;
  }, sn = g.__private__.putPages = function() {
    var h, H, Y = [];
    for (h = 1; h <= qA; h++) VA[h].objId = ut(), VA[h].contentsObjId = ut();
    for (h = 1; h <= qA; h++) Y.push(Jr({ number: h, data: KA[h], objId: VA[h].objId, contentsObjId: VA[h].contentsObjId, mediaBox: VA[h].mediaBox, cropBox: VA[h].cropBox, bleedBox: VA[h].bleedBox, trimBox: VA[h].trimBox, artBox: VA[h].artBox, userUnit: VA[h].userUnit, rootDictionaryObjId: Pr, resourceDictionaryObjId: wr }));
    Jt(Pr, !0), $("<</Type /Pages");
    var rA = "/Kids [";
    for (H = 0; H < qA; H++) rA += Y[H] + " 0 R ";
    $(rA + "]"), $("/Count " + qA), $(">>"), $("endobj"), ie.publish("postPutPages");
  }, Gn = function(h) {
    ie.publish("putFont", { font: h, out: $, newObject: pe, putStream: mr }), h.isAlreadyPutted !== !0 && (h.objectNumber = pe(), $("<<"), $("/Type /Font"), $("/BaseFont /" + Qo(h.postScriptName)), $("/Subtype /Type1"), typeof h.encoding == "string" && $("/Encoding /" + h.encoding), $("/FirstChar 32"), $("/LastChar 255"), $(">>"), $("endobj"));
  }, ds = function() {
    for (var h in Ae) Ae.hasOwnProperty(h) && (y === !1 || y === !0 && C.hasOwnProperty(h)) && Gn(Ae[h]);
  }, gs = function(h) {
    h.objectNumber = pe();
    var H = [];
    H.push({ key: "Type", value: "/XObject" }), H.push({ key: "Subtype", value: "/Form" }), H.push({ key: "BBox", value: "[" + [AA(h.x), AA(h.y), AA(h.x + h.width), AA(h.y + h.height)].join(" ") + "]" }), H.push({ key: "Matrix", value: "[" + h.matrix.toString() + "]" });
    var Y = h.pages[1].join(`
`);
    mr({ data: Y, additionalKeyValues: H, objectId: h.objectNumber }), $("endobj");
  }, ps = function() {
    for (var h in Re) Re.hasOwnProperty(h) && gs(Re[h]);
  }, Ii = function(h, H) {
    var Y, rA = [], pA = 1 / (H - 1);
    for (Y = 0; Y < 1; Y += pA) rA.push(Y);
    if (rA.push(1), h[0].offset != 0) {
      var IA = { offset: 0, color: h[0].color };
      h.unshift(IA);
    }
    if (h[h.length - 1].offset != 1) {
      var kA = { offset: 1, color: h[h.length - 1].color };
      h.push(kA);
    }
    for (var te = "", Be = 0, xe = 0; xe < rA.length; xe++) {
      for (Y = rA[xe]; Y > h[Be + 1].offset; ) Be++;
      var Pe = h[Be].offset, ke = (Y - Pe) / (h[Be + 1].offset - Pe), At = h[Be].color, et = h[Be + 1].color;
      te += eA(Math.round((1 - ke) * At[0] + ke * et[0]).toString(16)) + eA(Math.round((1 - ke) * At[1] + ke * et[1]).toString(16)) + eA(Math.round((1 - ke) * At[2] + ke * et[2]).toString(16));
    }
    return te.trim();
  }, Uo = function(h, H) {
    H || (H = 21);
    var Y = pe(), rA = Ii(h.colors, H), pA = [];
    pA.push({ key: "FunctionType", value: "0" }), pA.push({ key: "Domain", value: "[0.0 1.0]" }), pA.push({ key: "Size", value: "[" + H + "]" }), pA.push({ key: "BitsPerSample", value: "8" }), pA.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), pA.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), mr({ data: rA, additionalKeyValues: pA, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: Y }), $("endobj"), h.objectNumber = pe(), $("<< /ShadingType " + h.type), $("/ColorSpace /DeviceRGB");
    var IA = "/Coords [" + AA(parseFloat(h.coords[0])) + " " + AA(parseFloat(h.coords[1])) + " ";
    h.type === 2 ? IA += AA(parseFloat(h.coords[2])) + " " + AA(parseFloat(h.coords[3])) : IA += AA(parseFloat(h.coords[2])) + " " + AA(parseFloat(h.coords[3])) + " " + AA(parseFloat(h.coords[4])) + " " + AA(parseFloat(h.coords[5])), $(IA += "]"), h.matrix && $("/Matrix [" + h.matrix.toString() + "]"), $("/Function " + Y + " 0 R"), $("/Extend [true true]"), $(">>"), $("endobj");
  }, Eo = function(h, H) {
    var Y = ut(), rA = pe();
    H.push({ resourcesOid: Y, objectOid: rA }), h.objectNumber = rA;
    var pA = [];
    pA.push({ key: "Type", value: "/Pattern" }), pA.push({ key: "PatternType", value: "1" }), pA.push({ key: "PaintType", value: "1" }), pA.push({ key: "TilingType", value: "1" }), pA.push({ key: "BBox", value: "[" + h.boundingBox.map(AA).join(" ") + "]" }), pA.push({ key: "XStep", value: AA(h.xStep) }), pA.push({ key: "YStep", value: AA(h.yStep) }), pA.push({ key: "Resources", value: Y + " 0 R" }), h.matrix && pA.push({ key: "Matrix", value: "[" + h.matrix.toString() + "]" }), mr({ data: h.stream, additionalKeyValues: pA, objectId: h.objectNumber }), $("endobj");
  }, zr = function(h) {
    var H;
    for (H in He) He.hasOwnProperty(H) && (He[H] instanceof Xs ? Uo(He[H]) : He[H] instanceof Fi && Eo(He[H], h));
  }, Zs = function(h) {
    for (var H in h.objectNumber = pe(), $("<<"), h) switch (H) {
      case "opacity":
        $("/ca " + cA(h[H]));
        break;
      case "stroke-opacity":
        $("/CA " + cA(h[H]));
    }
    $(">>"), $("endobj");
  }, Bs = function() {
    var h;
    for (h in Ge) Ge.hasOwnProperty(h) && Zs(Ge[h]);
  }, ws = function() {
    for (var h in $("/XObject <<"), Re) Re.hasOwnProperty(h) && Re[h].objectNumber >= 0 && $("/" + h + " " + Re[h].objectNumber + " 0 R");
    ie.publish("putXobjectDict"), $(">>");
  }, Vn = function() {
    Gt.oid = pe(), $("<<"), $("/Filter /Standard"), $("/V " + Gt.v), $("/R " + Gt.r), $("/U <" + Gt.toHexString(Gt.U) + ">"), $("/O <" + Gt.toHexString(Gt.O) + ">"), $("/P " + Gt.P), $(">>"), $("endobj");
  }, xi = function() {
    for (var h in $("/Font <<"), Ae) Ae.hasOwnProperty(h) && (y === !1 || y === !0 && C.hasOwnProperty(h)) && $("/" + h + " " + Ae[h].objectNumber + " 0 R");
    $(">>");
  }, Lo = function() {
    if (Object.keys(He).length > 0) {
      for (var h in $("/Shading <<"), He) He.hasOwnProperty(h) && He[h] instanceof Xs && He[h].objectNumber >= 0 && $("/" + h + " " + He[h].objectNumber + " 0 R");
      ie.publish("putShadingPatternDict"), $(">>");
    }
  }, on = function(h) {
    if (Object.keys(He).length > 0) {
      for (var H in $("/Pattern <<"), He) He.hasOwnProperty(H) && He[H] instanceof g.TilingPattern && He[H].objectNumber >= 0 && He[H].objectNumber < h && $("/" + H + " " + He[H].objectNumber + " 0 R");
      ie.publish("putTilingPatternDict"), $(">>");
    }
  }, Wn = function() {
    if (Object.keys(Ge).length > 0) {
      var h;
      for (h in $("/ExtGState <<"), Ge) Ge.hasOwnProperty(h) && Ge[h].objectNumber >= 0 && $("/" + h + " " + Ge[h].objectNumber + " 0 R");
      ie.publish("putGStateDict"), $(">>");
    }
  }, wt = function(h) {
    Jt(h.resourcesOid, !0), $("<<"), $("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), xi(), Lo(), on(h.objectOid), Wn(), ws(), $(">>"), $("endobj");
  }, Si = function() {
    var h = [];
    ds(), Bs(), ps(), zr(h), ie.publish("putResources"), h.forEach(wt), wt({ resourcesOid: wr, objectOid: Number.MAX_SAFE_INTEGER }), ie.publish("postPutResources");
  }, Hi = function() {
    ie.publish("putAdditionalObjects");
    for (var h = 0; h < DA.length; h++) {
      var H = DA[h];
      Jt(H.objId, !0), $(H.content), $("endobj");
    }
    ie.publish("postPutAdditionalObjects");
  }, Xn = function(h) {
    Fe[h.fontName] = Fe[h.fontName] || {}, Fe[h.fontName][h.fontStyle] = h.id;
  }, yn = function(h, H, Y, rA, pA) {
    var IA = { id: "F" + (Object.keys(Ae).length + 1).toString(10), postScriptName: h, fontName: H, fontStyle: Y, encoding: rA, isStandardFont: pA || !1, metadata: {} };
    return ie.publish("addFont", { font: IA, instance: this }), Ae[IA.id] = IA, Xn(IA), IA.id;
  }, Jn = function(h) {
    for (var H = 0, Y = NA.length; H < Y; H++) {
      var rA = yn.call(this, h[H][0], h[H][1], h[H][2], NA[H][3], !0);
      y === !1 && (C[rA] = !0);
      var pA = h[H][0].split("-");
      Xn({ id: rA, fontName: pA[0], fontStyle: pA[1] || "" });
    }
    ie.publish("addFonts", { fonts: Ae, dictionary: Fe });
  }, Mr = function(h) {
    return h.foo = function() {
      try {
        return h.apply(this, arguments);
      } catch (rA) {
        var H = rA.stack || "";
        ~H.indexOf(" at ") && (H = H.split(" at ")[1]);
        var Y = "Error in function " + H.split(`
`)[0].split("<")[0] + ": " + rA.message;
        if (!Ie.console) throw new Error(Y);
        Ie.console.error(Y, rA), Ie.alert && alert(Y);
      }
    }, h.foo.bar = h, h.foo;
  }, Qt = function(h, H) {
    var Y, rA, pA, IA, kA, te, Be, xe, Pe;
    if (pA = (H = H || {}).sourceEncoding || "Unicode", kA = H.outputEncoding, (H.autoencode || kA) && Ae[BA].metadata && Ae[BA].metadata[pA] && Ae[BA].metadata[pA].encoding && (IA = Ae[BA].metadata[pA].encoding, !kA && Ae[BA].encoding && (kA = Ae[BA].encoding), !kA && IA.codePages && (kA = IA.codePages[0]), typeof kA == "string" && (kA = IA[kA]), kA)) {
      for (Be = !1, te = [], Y = 0, rA = h.length; Y < rA; Y++) (xe = kA[h.charCodeAt(Y)]) ? te.push(String.fromCharCode(xe)) : te.push(h[Y]), te[Y].charCodeAt(0) >> 8 && (Be = !0);
      h = te.join("");
    }
    for (Y = h.length; Be === void 0 && Y !== 0; ) h.charCodeAt(Y - 1) >> 8 && (Be = !0), Y--;
    if (!Be) return h;
    for (te = H.noBOM ? [] : [254, 255], Y = 0, rA = h.length; Y < rA; Y++) {
      if ((Pe = (xe = h.charCodeAt(Y)) >> 8) >> 8) throw new Error("Character at position " + Y + " of string '" + h + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      te.push(Pe), te.push(xe - (Pe << 8));
    }
    return String.fromCharCode.apply(void 0, te);
  }, rr = g.__private__.pdfEscape = g.pdfEscape = function(h, H) {
    return Qt(h, H).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, $s = g.__private__.beginPage = function(h) {
    KA[++qA] = [], VA[qA] = { objId: 0, contentsObjId: 0, userUnit: Number(v), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(h[0]), topRightY: Number(h[1]) } }, Ni(qA), LA(KA[X]);
  }, ji = function(h, H) {
    var Y, rA, pA;
    switch (n = H || n, typeof h == "string" && (Y = b(h.toLowerCase()), Array.isArray(Y) && (rA = Y[0], pA = Y[1])), Array.isArray(h) && (rA = h[0] * mA, pA = h[1] * mA), isNaN(rA) && (rA = d[0], pA = d[1]), (rA > 14400 || pA > 14400) && (ot.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), rA = Math.min(14400, rA), pA = Math.min(14400, pA)), d = [rA, pA], n.substr(0, 1)) {
      case "l":
        pA > rA && (d = [pA, rA]);
        break;
      case "p":
        rA > pA && (d = [pA, rA]);
    }
    $s(d), Gi(ms), $(sr), qn !== 0 && $(qn + " J"), ei !== 0 && $(ei + " j"), ie.publish("addPage", { pageNumber: qA });
  }, Io = function(h) {
    h > 0 && h <= qA && (KA.splice(h, 1), VA.splice(h, 1), qA--, X > qA && (X = qA), this.setPage(X));
  }, Ni = function(h) {
    h > 0 && h <= qA && (X = h);
  }, xo = g.__private__.getNumberOfPages = g.getNumberOfPages = function() {
    return KA.length - 1;
  }, Oi = function(h, H, Y) {
    var rA, pA = void 0;
    return Y = Y || {}, h = h !== void 0 ? h : Ae[BA].fontName, H = H !== void 0 ? H : Ae[BA].fontStyle, rA = h.toLowerCase(), Fe[rA] !== void 0 && Fe[rA][H] !== void 0 ? pA = Fe[rA][H] : Fe[h] !== void 0 && Fe[h][H] !== void 0 ? pA = Fe[h][H] : Y.disableWarning === !1 && ot.warn("Unable to look up font label for font '" + h + "', '" + H + "'. Refer to getFontList() for available fonts."), pA || Y.noFallback || (pA = Fe.times[H]) == null && (pA = Fe.times.normal), pA;
  }, So = g.__private__.putInfo = function() {
    var h = pe(), H = function(rA) {
      return rA;
    };
    for (var Y in l !== null && (H = Gt.encryptor(h, 0)), $("<<"), $("/Producer (" + rr(H("jsPDF " + Ue.version)) + ")"), we) we.hasOwnProperty(Y) && we[Y] && $("/" + Y.substr(0, 1).toUpperCase() + Y.substr(1) + " (" + rr(H(we[Y])) + ")");
    $("/CreationDate (" + rr(H(tA)) + ")"), $(">>"), $("endobj");
  }, Cn = g.__private__.putCatalog = function(h) {
    var H = (h = h || {}).rootDictionaryObjId || Pr;
    switch (pe(), $("<<"), $("/Type /Catalog"), $("/Pages " + H + " 0 R"), YA || (YA = "fullwidth"), YA) {
      case "fullwidth":
        $("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        $("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        $("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        $("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var Y = "" + YA;
        Y.substr(Y.length - 1) === "%" && (YA = parseInt(YA) / 100), typeof YA == "number" && $("/OpenAction [3 0 R /XYZ null null " + cA(YA) + "]");
    }
    switch (Ce || (Ce = "continuous"), Ce) {
      case "continuous":
        $("/PageLayout /OneColumn");
        break;
      case "single":
        $("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        $("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        $("/PageLayout /TwoColumnRight");
    }
    ye && $("/PageMode /" + ye), ie.publish("putCatalog"), $(">>"), $("endobj");
  }, Ho = g.__private__.putTrailer = function() {
    $("trailer"), $("<<"), $("/Size " + (uA + 1)), $("/Root " + uA + " 0 R"), $("/Info " + (uA - 1) + " 0 R"), l !== null && $("/Encrypt " + Gt.oid + " 0 R"), $("/ID [ <" + aA + "> <" + aA + "> ]"), $(">>");
  }, Pi = g.__private__.putHeader = function() {
    $("%PDF-" + L), $("%ºß¬à");
  }, jo = g.__private__.putXRef = function() {
    var h = "0000000000";
    $("xref"), $("0 " + (uA + 1)), $("0000000000 65535 f ");
    for (var H = 1; H <= uA; H++)
      typeof gA[H] == "function" ? $((h + gA[H]()).slice(-10) + " 00000 n ") : gA[H] !== void 0 ? $((h + gA[H]).slice(-10) + " 00000 n ") : $("0000000000 00000 n ");
  }, an = g.__private__.buildDocument = function() {
    ce(), LA(FA), ie.publish("buildDocument"), Pi(), sn(), Hi(), Si(), l !== null && Vn(), So(), Cn();
    var h = QA;
    return jo(), Ho(), $("startxref"), $("" + h), $("%%EOF"), LA(KA[X]), FA.join(`
`);
  }, zn = g.__private__.getBlob = function(h) {
    return new Blob([zA(h)], { type: "application/pdf" });
  }, Fn = g.output = g.__private__.output = Mr(function(h, H) {
    switch (typeof (H = H || {}) == "string" ? H = { filename: H } : H.filename = H.filename || "generated.pdf", h) {
      case void 0:
        return an();
      case "save":
        g.save(H.filename);
        break;
      case "arraybuffer":
        return zA(an());
      case "blob":
        return zn(an());
      case "bloburi":
      case "bloburl":
        if (Ie.URL !== void 0 && typeof Ie.URL.createObjectURL == "function") return Ie.URL && Ie.URL.createObjectURL(zn(an())) || void 0;
        ot.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var Y = "", rA = an();
        try {
          Y = gl(rA);
        } catch {
          Y = gl(unescape(encodeURIComponent(rA)));
        }
        return "data:application/pdf;filename=" + H.filename + ";base64," + Y;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Ie) === "[object Window]") {
          var pA = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", IA = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          H.pdfObjectUrl && (pA = H.pdfObjectUrl, IA = "");
          var kA = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + pA + '"' + IA + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(H) + ");<\/script></body></html>", te = Ie.open();
          return te !== null && te.document.write(kA), te;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Ie) === "[object Window]") {
          var Be = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (H.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + H.filename + '" width="500px" height="400px" /></body></html>', xe = Ie.open();
          if (xe !== null) {
            xe.document.write(Be);
            var Pe = this;
            xe.document.documentElement.querySelector("#pdfViewer").onload = function() {
              xe.document.title = H.filename, xe.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(Pe.output("bloburl"));
            };
          }
          return xe;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Ie) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var ke = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", H) + '"></iframe></body></html>', At = Ie.open();
        if (At !== null && (At.document.write(ke), At.document.title = H.filename), At || typeof safari > "u") return At;
        break;
      case "datauri":
      case "dataurl":
        return Ie.document.location.href = this.output("datauristring", H);
      default:
        return null;
    }
  }), Yr = function(h) {
    return Array.isArray(Me) === !0 && Me.indexOf(h) > -1;
  };
  switch (c) {
    case "pt":
      mA = 1;
      break;
    case "mm":
      mA = 72 / 25.4;
      break;
    case "cm":
      mA = 72 / 2.54;
      break;
    case "in":
      mA = 72;
      break;
    case "px":
      mA = Yr("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      mA = 12;
      break;
    case "ex":
      mA = 6;
      break;
    default:
      if (typeof c != "number") throw new Error("Invalid unit: " + c);
      mA = c;
  }
  var Gt = null;
  PA(), hA();
  var No = function(h) {
    return l !== null ? Gt.encryptor(h, 0) : function(H) {
      return H;
    };
  }, Ti = g.__private__.getPageInfo = g.getPageInfo = function(h) {
    if (isNaN(h) || h % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: VA[h].objId, pageNumber: h, pageContext: VA[h] };
  }, Qe = g.__private__.getPageInfoByObjId = function(h) {
    if (isNaN(h) || h % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var H in VA) if (VA[H].objId === h) break;
    return Ti(H);
  }, Oo = g.__private__.getCurrentPageInfo = g.getCurrentPageInfo = function() {
    return { objId: VA[X].objId, pageNumber: X, pageContext: VA[X] };
  };
  g.addPage = function() {
    return ji.apply(this, arguments), this;
  }, g.setPage = function() {
    return Ni.apply(this, arguments), LA.call(this, KA[X]), this;
  }, g.insertPage = function(h) {
    return this.addPage(), this.movePage(X, h), this;
  }, g.movePage = function(h, H) {
    var Y, rA;
    if (h > H) {
      Y = KA[h], rA = VA[h];
      for (var pA = h; pA > H; pA--) KA[pA] = KA[pA - 1], VA[pA] = VA[pA - 1];
      KA[H] = Y, VA[H] = rA, this.setPage(H);
    } else if (h < H) {
      Y = KA[h], rA = VA[h];
      for (var IA = h; IA < H; IA++) KA[IA] = KA[IA + 1], VA[IA] = VA[IA + 1];
      KA[H] = Y, VA[H] = rA, this.setPage(H);
    }
    return this;
  }, g.deletePage = function() {
    return Io.apply(this, arguments), this;
  }, g.__private__.text = g.text = function(h, H, Y, rA, pA) {
    var IA, kA, te, Be, xe, Pe, ke, At, et, Le = (rA = rA || {}).scope || this;
    if (typeof h == "number" && typeof H == "number" && (typeof Y == "string" || Array.isArray(Y))) {
      var Vt = Y;
      Y = H, H = h, h = Vt;
    }
    if (arguments[3] instanceof ge ? (V("The transform parameter of text() with a Matrix value"), et = pA) : (te = arguments[4], Be = arguments[5], st(ke = arguments[3]) === "object" && ke !== null || (typeof te == "string" && (Be = te, te = null), typeof ke == "string" && (Be = ke, ke = null), typeof ke == "number" && (te = ke, ke = null), rA = { flags: ke, angle: te, align: Be })), isNaN(H) || isNaN(Y) || h == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (h.length === 0) return Le;
    var mt = "", yr = !1, jt = typeof rA.lineHeightFactor == "number" ? rA.lineHeightFactor : Qn, Nt = Le.internal.scaleFactor;
    function Ji(tt) {
      return tt = tt.split("	").join(Array(rA.TabLen || 9).join(" ")), rr(tt, ke);
    }
    function Cr(tt) {
      for (var rt, dt = tt.concat(), Ct = [], en = dt.length; en--; ) typeof (rt = dt.shift()) == "string" ? Ct.push(rt) : Array.isArray(tt) && (rt.length === 1 || rt[1] === void 0 && rt[2] === void 0) ? Ct.push(rt[0]) : Ct.push([rt[0], rt[1], rt[2]]);
      return Ct;
    }
    function at(tt, rt) {
      var dt;
      if (typeof tt == "string") dt = rt(tt)[0];
      else if (Array.isArray(tt)) {
        for (var Ct, en, dn = tt.concat(), ns = [], ci = dn.length; ci--; ) typeof (Ct = dn.shift()) == "string" ? ns.push(rt(Ct)[0]) : Array.isArray(Ct) && typeof Ct[0] == "string" && (en = rt(Ct[0], Ct[1], Ct[2]), ns.push([en[0], en[1], en[2]]));
        dt = ns;
      }
      return dt;
    }
    var $n = !1, vt = !0;
    if (typeof h == "string") $n = !0;
    else if (Array.isArray(h)) {
      var As = h.concat();
      kA = [];
      for (var fr, Ot = As.length; Ot--; ) (typeof (fr = As.shift()) != "string" || Array.isArray(fr) && typeof fr[0] != "string") && (vt = !1);
      $n = vt;
    }
    if ($n === !1) throw new Error('Type of text must be string or Array. "' + h + '" is not recognized.');
    typeof h == "string" && (h = h.match(/[\r?\n]/) ? h.split(/\r\n|\r|\n/g) : [h]);
    var Xe = WA / Le.internal.scaleFactor, es = Xe * (jt - 1);
    switch (rA.baseline) {
      case "bottom":
        Y -= es;
        break;
      case "top":
        Y += Xe - es;
        break;
      case "hanging":
        Y += Xe - 2 * es;
        break;
      case "middle":
        Y += Xe / 2 - es;
    }
    if ((Pe = rA.maxWidth || 0) > 0 && (typeof h == "string" ? h = Le.splitTextToSize(h, Pe) : Object.prototype.toString.call(h) === "[object Array]" && (h = h.reduce(function(tt, rt) {
      return tt.concat(Le.splitTextToSize(rt, Pe));
    }, []))), IA = { text: h, x: H, y: Y, options: rA, mutex: { pdfEscape: rr, activeFontKey: BA, fonts: Ae, activeFontSize: WA } }, ie.publish("preProcessText", IA), h = IA.text, te = (rA = IA.options).angle, !(et instanceof ge) && te && typeof te == "number") {
      te *= Math.PI / 180, rA.rotationDirection === 0 && (te = -te), I === U.ADVANCED && (te = -te);
      var ts = Math.cos(te), Qs = Math.sin(te);
      et = new ge(ts, Qs, -Qs, ts, 0, 0);
    } else te && te instanceof ge && (et = te);
    I !== U.ADVANCED || et || (et = Xr), (xe = rA.charSpace || ur) !== void 0 && (mt += AA(_(xe)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (At = rA.horizontalScale) !== void 0 && (mt += AA(100 * At) + ` Tz
`), rA.lang;
    var zt = -1, Us = rA.renderingMode !== void 0 ? rA.renderingMode : rA.stroke, Es = Le.internal.getCurrentPageInfo().pageContext;
    switch (Us) {
      case 0:
      case !1:
      case "fill":
        zt = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        zt = 1;
        break;
      case 2:
      case "fillThenStroke":
        zt = 2;
        break;
      case 3:
      case "invisible":
        zt = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        zt = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        zt = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        zt = 6;
        break;
      case 7:
      case "addToPathForClipping":
        zt = 7;
    }
    var ii = Es.usedRenderingMode !== void 0 ? Es.usedRenderingMode : -1;
    zt !== -1 ? mt += zt + ` Tr
` : ii !== -1 && (mt += `0 Tr
`), zt !== -1 && (Es.usedRenderingMode = zt), Be = rA.align || "left";
    var ht, Fr = WA * jt, Zr = Le.internal.pageSize.getWidth(), yt = Ae[BA];
    xe = rA.charSpace || ur, Pe = rA.maxWidth || 0, ke = Object.assign({ autoencode: !0, noBOM: !0 }, rA.flags);
    var Yt = [];
    if (Object.prototype.toString.call(h) === "[object Array]") {
      var hr;
      kA = Cr(h), Be !== "left" && (ht = kA.map(function(tt) {
        return Le.getStringUnitWidth(tt, { font: yt, charSpace: xe, fontSize: WA, doKerning: !1 }) * WA / Nt;
      }));
      var br, $r = 0;
      if (Be === "right") {
        H -= ht[0], h = [], Ot = kA.length;
        for (var _r = 0; _r < Ot; _r++) _r === 0 ? (br = ln(H), hr = Un(Y)) : (br = _($r - ht[_r]), hr = -Fr), h.push([kA[_r], br, hr]), $r = ht[_r];
      } else if (Be === "center") {
        H -= ht[0] / 2, h = [], Ot = kA.length;
        for (var un = 0; un < Ot; un++) un === 0 ? (br = ln(H), hr = Un(Y)) : (br = _(($r - ht[un]) / 2), hr = -Fr), h.push([kA[un], br, hr]), $r = ht[un];
      } else if (Be === "left") {
        h = [], Ot = kA.length;
        for (var An = 0; An < Ot; An++) h.push(kA[An]);
      } else {
        if (Be !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        h = [], Ot = kA.length, Pe = Pe !== 0 ? Pe : Zr;
        for (var Et = 0; Et < Ot; Et++) hr = Et === 0 ? Un(Y) : -Fr, br = Et === 0 ? ln(H) : 0, Et < Ot - 1 ? Yt.push(AA(_((Pe - ht[Et]) / (kA[Et].split(" ").length - 1)))) : Yt.push(0), h.push([kA[Et], br, hr]);
      }
    }
    var Ls = typeof rA.R2L == "boolean" ? rA.R2L : ae;
    Ls === !0 && (h = at(h, function(tt, rt, dt) {
      return [tt.split("").reverse().join(""), rt, dt];
    })), IA = { text: h, x: H, y: Y, options: rA, mutex: { pdfEscape: rr, activeFontKey: BA, fonts: Ae, activeFontSize: WA } }, ie.publish("postProcessText", IA), h = IA.text, yr = IA.mutex.isHex || !1;
    var oi = Ae[BA].encoding;
    oi !== "WinAnsiEncoding" && oi !== "StandardEncoding" || (h = at(h, function(tt, rt, dt) {
      return [Ji(tt), rt, dt];
    })), kA = Cr(h), h = [];
    for (var Kr, Qr, fn, rs = 0, Wt = 1, Sn = Array.isArray(kA[0]) ? Wt : rs, Hn = "", ai = function(tt, rt, dt) {
      var Ct = "";
      return dt instanceof ge ? (dt = typeof rA.angle == "number" ? Or(dt, new ge(1, 0, 0, 1, tt, rt)) : Or(new ge(1, 0, 0, 1, tt, rt), dt), I === U.ADVANCED && (dt = Or(new ge(1, 0, 0, -1, 0, 0), dt)), Ct = dt.join(" ") + ` Tm
`) : Ct = AA(tt) + " " + AA(rt) + ` Td
`, Ct;
    }, qt = 0; qt < kA.length; qt++) {
      switch (Hn = "", Sn) {
        case Wt:
          fn = (yr ? "<" : "(") + kA[qt][0] + (yr ? ">" : ")"), Kr = parseFloat(kA[qt][1]), Qr = parseFloat(kA[qt][2]);
          break;
        case rs:
          fn = (yr ? "<" : "(") + kA[qt] + (yr ? ">" : ")"), Kr = ln(H), Qr = Un(Y);
      }
      Yt !== void 0 && Yt[qt] !== void 0 && (Hn = Yt[qt] + ` Tw
`), qt === 0 ? h.push(Hn + ai(Kr, Qr, et) + fn) : Sn === rs ? h.push(Hn + fn) : Sn === Wt && h.push(Hn + ai(Kr, Qr, et) + fn);
    }
    h = Sn === rs ? h.join(` Tj
T* `) : h.join(` Tj
`), h += ` Tj
`;
    var hn = `BT
/`;
    return hn += BA + " " + WA + ` Tf
`, hn += AA(WA * jt) + ` TL
`, hn += In + `
`, hn += mt, hn += h, $(hn += "ET"), C[BA] = !0, Le;
  };
  var Po = g.__private__.clip = g.clip = function(h) {
    return $(h === "evenodd" ? "W*" : "W"), this;
  };
  g.clipEvenOdd = function() {
    return Po("evenodd");
  }, g.__private__.discardPath = g.discardPath = function() {
    return $("n"), this;
  };
  var qr = g.__private__.isValidStyle = function(h) {
    var H = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(h) !== -1 && (H = !0), H;
  };
  g.__private__.setDefaultPathOperation = g.setDefaultPathOperation = function(h) {
    return qr(h) && (m = h), this;
  };
  var Di = g.__private__.getStyle = g.getStyle = function(h) {
    var H = m;
    switch (h) {
      case "D":
      case "S":
        H = "S";
        break;
      case "F":
        H = "f";
        break;
      case "FD":
      case "DF":
        H = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        H = h;
    }
    return H;
  }, Mi = g.close = function() {
    return $("h"), this;
  };
  g.stroke = function() {
    return $("S"), this;
  }, g.fill = function(h) {
    return vs("f", h), this;
  }, g.fillEvenOdd = function(h) {
    return vs("f*", h), this;
  }, g.fillStroke = function(h) {
    return vs("B", h), this;
  }, g.fillStrokeEvenOdd = function(h) {
    return vs("B*", h), this;
  };
  var vs = function(h, H) {
    st(H) === "object" ? Ki(H, h) : $(h);
  }, nr = function(h) {
    h === null || I === U.ADVANCED && h === void 0 || (h = Di(h), $(h));
  };
  function _i(h, H, Y, rA, pA) {
    var IA = new Fi(H || this.boundingBox, Y || this.xStep, rA || this.yStep, this.gState, pA || this.matrix);
    IA.stream = this.stream;
    var kA = h + "$$" + this.cloneIndex++ + "$$";
    return Xt(kA, IA), IA;
  }
  var Ki = function(h, H) {
    var Y = Ar[h.key], rA = He[Y];
    if (rA instanceof Xs) $("q"), $(Ri(H)), rA.gState && g.setGState(rA.gState), $(h.matrix.toString() + " cm"), $("/" + Y + " sh"), $("Q");
    else if (rA instanceof Fi) {
      var pA = new ge(1, 0, 0, -1, 0, xn());
      h.matrix && (pA = pA.multiply(h.matrix || Xr), Y = _i.call(rA, h.key, h.boundingBox, h.xStep, h.yStep, pA).id), $("q"), $("/Pattern cs"), $("/" + Y + " scn"), rA.gState && g.setGState(rA.gState), $(H), $("Q");
    }
  }, Ri = function(h) {
    switch (h) {
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
  }, Ai = g.moveTo = function(h, H) {
    return $(AA(_(h)) + " " + AA(J(H)) + " m"), this;
  }, Yn = g.lineTo = function(h, H) {
    return $(AA(_(h)) + " " + AA(J(H)) + " l"), this;
  }, bn = g.curveTo = function(h, H, Y, rA, pA, IA) {
    return $([AA(_(h)), AA(J(H)), AA(_(Y)), AA(J(rA)), AA(_(pA)), AA(J(IA)), "c"].join(" ")), this;
  };
  g.__private__.line = g.line = function(h, H, Y, rA, pA) {
    if (isNaN(h) || isNaN(H) || isNaN(Y) || isNaN(rA) || !qr(pA)) throw new Error("Invalid arguments passed to jsPDF.line");
    return I === U.COMPAT ? this.lines([[Y - h, rA - H]], h, H, [1, 1], pA || "S") : this.lines([[Y - h, rA - H]], h, H, [1, 1]).stroke();
  }, g.__private__.lines = g.lines = function(h, H, Y, rA, pA, IA) {
    var kA, te, Be, xe, Pe, ke, At, et, Le, Vt, mt, yr;
    if (typeof h == "number" && (yr = Y, Y = H, H = h, h = yr), rA = rA || [1, 1], IA = IA || !1, isNaN(H) || isNaN(Y) || !Array.isArray(h) || !Array.isArray(rA) || !qr(pA) || typeof IA != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (Ai(H, Y), kA = rA[0], te = rA[1], xe = h.length, Vt = H, mt = Y, Be = 0; Be < xe; Be++) (Pe = h[Be]).length === 2 ? (Vt = Pe[0] * kA + Vt, mt = Pe[1] * te + mt, Yn(Vt, mt)) : (ke = Pe[0] * kA + Vt, At = Pe[1] * te + mt, et = Pe[2] * kA + Vt, Le = Pe[3] * te + mt, Vt = Pe[4] * kA + Vt, mt = Pe[5] * te + mt, bn(ke, At, et, Le, Vt, mt));
    return IA && Mi(), nr(pA), this;
  }, g.path = function(h) {
    for (var H = 0; H < h.length; H++) {
      var Y = h[H], rA = Y.c;
      switch (Y.op) {
        case "m":
          Ai(rA[0], rA[1]);
          break;
        case "l":
          Yn(rA[0], rA[1]);
          break;
        case "c":
          bn.apply(this, rA);
          break;
        case "h":
          Mi();
      }
    }
    return this;
  }, g.__private__.rect = g.rect = function(h, H, Y, rA, pA) {
    if (isNaN(h) || isNaN(H) || isNaN(Y) || isNaN(rA) || !qr(pA)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return I === U.COMPAT && (rA = -rA), $([AA(_(h)), AA(J(H)), AA(_(Y)), AA(_(rA)), "re"].join(" ")), nr(pA), this;
  }, g.__private__.triangle = g.triangle = function(h, H, Y, rA, pA, IA, kA) {
    if (isNaN(h) || isNaN(H) || isNaN(Y) || isNaN(rA) || isNaN(pA) || isNaN(IA) || !qr(kA)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[Y - h, rA - H], [pA - Y, IA - rA], [h - pA, H - IA]], h, H, [1, 1], kA, !0), this;
  }, g.__private__.roundedRect = g.roundedRect = function(h, H, Y, rA, pA, IA, kA) {
    if (isNaN(h) || isNaN(H) || isNaN(Y) || isNaN(rA) || isNaN(pA) || isNaN(IA) || !qr(kA)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var te = 4 / 3 * (Math.SQRT2 - 1);
    return pA = Math.min(pA, 0.5 * Y), IA = Math.min(IA, 0.5 * rA), this.lines([[Y - 2 * pA, 0], [pA * te, 0, pA, IA - IA * te, pA, IA], [0, rA - 2 * IA], [0, IA * te, -pA * te, IA, -pA, IA], [2 * pA - Y, 0], [-pA * te, 0, -pA, -IA * te, -pA, -IA], [0, 2 * IA - rA], [0, -IA * te, pA * te, -IA, pA, -IA]], h + pA, H, [1, 1], kA, !0), this;
  }, g.__private__.ellipse = g.ellipse = function(h, H, Y, rA, pA) {
    if (isNaN(h) || isNaN(H) || isNaN(Y) || isNaN(rA) || !qr(pA)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var IA = 4 / 3 * (Math.SQRT2 - 1) * Y, kA = 4 / 3 * (Math.SQRT2 - 1) * rA;
    return Ai(h + Y, H), bn(h + Y, H - kA, h + IA, H - rA, h, H - rA), bn(h - IA, H - rA, h - Y, H - kA, h - Y, H), bn(h - Y, H + kA, h - IA, H + rA, h, H + rA), bn(h + IA, H + rA, h + Y, H + kA, h + Y, H), nr(pA), this;
  }, g.__private__.circle = g.circle = function(h, H, Y, rA) {
    if (isNaN(h) || isNaN(H) || isNaN(Y) || !qr(rA)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(h, H, Y, Y, rA);
  }, g.setFont = function(h, H, Y) {
    return Y && (H = Z(H, Y)), BA = Oi(h, H, { disableWarning: !1 }), this;
  };
  var ki = g.__private__.getFont = g.getFont = function() {
    return Ae[Oi.apply(g, arguments)];
  };
  g.__private__.getFontList = g.getFontList = function() {
    var h, H, Y = {};
    for (h in Fe) if (Fe.hasOwnProperty(h)) for (H in Y[h] = [], Fe[h]) Fe[h].hasOwnProperty(H) && Y[h].push(H);
    return Y;
  }, g.addFont = function(h, H, Y, rA, pA) {
    var IA = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && IA.indexOf(arguments[3]) !== -1 ? pA = arguments[3] : arguments[3] && IA.indexOf(arguments[3]) == -1 && (Y = Z(Y, rA)), pA = pA || "Identity-H", yn.call(this, h, H, Y, pA);
  };
  var Qn, ms = o.lineWidth || 0.200025, ys = g.__private__.getLineWidth = g.getLineWidth = function() {
    return ms;
  }, Gi = g.__private__.setLineWidth = g.setLineWidth = function(h) {
    return ms = h, $(AA(_(h)) + " w"), this;
  };
  g.__private__.setLineDash = Ue.API.setLineDash = Ue.API.setLineDashPattern = function(h, H) {
    if (h = h || [], H = H || 0, isNaN(H) || !Array.isArray(h)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return h = h.map(function(Y) {
      return AA(_(Y));
    }).join(" "), H = AA(_(H)), $("[" + h + "] " + H + " d"), this;
  };
  var Ut = g.__private__.getLineHeight = g.getLineHeight = function() {
    return WA * Qn;
  };
  g.__private__.getLineHeight = g.getLineHeight = function() {
    return WA * Qn;
  };
  var Vi = g.__private__.setLineHeightFactor = g.setLineHeightFactor = function(h) {
    return typeof (h = h || 1.15) == "number" && (Qn = h), this;
  }, cn = g.__private__.getLineHeightFactor = g.getLineHeightFactor = function() {
    return Qn;
  };
  Vi(o.lineHeight);
  var ln = g.__private__.getHorizontalCoordinate = function(h) {
    return _(h);
  }, Un = g.__private__.getVerticalCoordinate = function(h) {
    return I === U.ADVANCED ? h : VA[X].mediaBox.topRightY - VA[X].mediaBox.bottomLeftY - _(h);
  }, To = g.__private__.getHorizontalCoordinateString = g.getHorizontalCoordinateString = function(h) {
    return AA(ln(h));
  }, En = g.__private__.getVerticalCoordinateString = g.getVerticalCoordinateString = function(h) {
    return AA(Un(h));
  }, sr = o.strokeColor || "0 G";
  g.__private__.getStrokeColor = g.getDrawColor = function() {
    return vr(sr);
  }, g.__private__.setStrokeColor = g.setDrawColor = function(h, H, Y, rA) {
    return sr = Tr({ ch1: h, ch2: H, ch3: Y, ch4: rA, pdfColorType: "draw", precision: 2 }), $(sr), this;
  };
  var Ln = o.fillColor || "0 g";
  g.__private__.getFillColor = g.getFillColor = function() {
    return vr(Ln);
  }, g.__private__.setFillColor = g.setFillColor = function(h, H, Y, rA) {
    return Ln = Tr({ ch1: h, ch2: H, ch3: Y, ch4: rA, pdfColorType: "fill", precision: 2 }), $(Ln), this;
  };
  var In = o.textColor || "0 g", Do = g.__private__.getTextColor = g.getTextColor = function() {
    return vr(In);
  };
  g.__private__.setTextColor = g.setTextColor = function(h, H, Y, rA) {
    return In = Tr({ ch1: h, ch2: H, ch3: Y, ch4: rA, pdfColorType: "text", precision: 3 }), this;
  };
  var ur = o.charSpace, Cs = g.__private__.getCharSpace = g.getCharSpace = function() {
    return parseFloat(ur || 0);
  };
  g.__private__.setCharSpace = g.setCharSpace = function(h) {
    if (isNaN(h)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return ur = h, this;
  };
  var qn = 0;
  g.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, g.__private__.setLineCap = g.setLineCap = function(h) {
    var H = g.CapJoinStyles[h];
    if (H === void 0) throw new Error("Line cap style of '" + h + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return qn = H, $(H + " J"), this;
  };
  var ei = 0;
  g.__private__.setLineJoin = g.setLineJoin = function(h) {
    var H = g.CapJoinStyles[h];
    if (H === void 0) throw new Error("Line join style of '" + h + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ei = H, $(H + " j"), this;
  }, g.__private__.setLineMiterLimit = g.__private__.setMiterLimit = g.setLineMiterLimit = g.setMiterLimit = function(h) {
    if (h = h || 0, isNaN(h)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return $(AA(_(h)) + " M"), this;
  }, g.GState = ha, g.setGState = function(h) {
    (h = typeof h == "string" ? Ge[kt[h]] : Wi(null, h)).equals(je) || ($("/" + h.id + " gs"), je = h);
  };
  var Wi = function(h, H) {
    if (!h || !kt[h]) {
      var Y = !1;
      for (var rA in Ge) if (Ge.hasOwnProperty(rA) && Ge[rA].equals(H)) {
        Y = !0;
        break;
      }
      if (Y) H = Ge[rA];
      else {
        var pA = "GS" + (Object.keys(Ge).length + 1).toString(10);
        Ge[pA] = H, H.id = pA;
      }
      return h && (kt[h] = H.id), ie.publish("addGState", H), H;
    }
  };
  g.addGState = function(h, H) {
    return Wi(h, H), this;
  }, g.saveGraphicsState = function() {
    return $("q"), Bt.push({ key: BA, size: WA, color: In }), this;
  }, g.restoreGraphicsState = function() {
    $("Q");
    var h = Bt.pop();
    return BA = h.key, WA = h.size, In = h.color, je = null, this;
  }, g.setCurrentTransformationMatrix = function(h) {
    return $(h.toString() + " cm"), this;
  }, g.comment = function(h) {
    return $("#" + h), this;
  };
  var Fs = function(h, H) {
    var Y = h || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return Y;
    }, set: function(IA) {
      isNaN(IA) || (Y = parseFloat(IA));
    } });
    var rA = H || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return rA;
    }, set: function(IA) {
      isNaN(IA) || (rA = parseFloat(IA));
    } });
    var pA = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return pA;
    }, set: function(IA) {
      pA = IA.toString();
    } }), this;
  }, ti = function(h, H, Y, rA) {
    Fs.call(this, h, H), this.type = "rect";
    var pA = Y || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return pA;
    }, set: function(kA) {
      isNaN(kA) || (pA = parseFloat(kA));
    } });
    var IA = rA || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return IA;
    }, set: function(kA) {
      isNaN(kA) || (IA = parseFloat(kA));
    } }), this;
  }, ri = function() {
    this.page = qA, this.currentPage = X, this.pages = KA.slice(0), this.pagesContext = VA.slice(0), this.x = TA, this.y = MA, this.matrix = fe, this.width = Zn(X), this.height = xn(X), this.outputDestination = GA, this.id = "", this.objectNumber = -1;
  };
  ri.prototype.restore = function() {
    qA = this.page, X = this.currentPage, VA = this.pagesContext, KA = this.pages, TA = this.x, MA = this.y, fe = this.matrix, ni(X, this.width), si(X, this.height), GA = this.outputDestination;
  };
  var Xi = function(h, H, Y, rA, pA) {
    er.push(new ri()), qA = X = 0, KA = [], TA = h, MA = H, fe = pA, $s([Y, rA]);
  }, Mo = function(h) {
    if (Dt[h]) er.pop().restore();
    else {
      var H = new ri(), Y = "Xo" + (Object.keys(Re).length + 1).toString(10);
      H.id = Y, Dt[h] = Y, Re[Y] = H, ie.publish("addFormObject", H), er.pop().restore();
    }
  };
  for (var bs in g.beginFormObject = function(h, H, Y, rA, pA) {
    return Xi(h, H, Y, rA, pA), this;
  }, g.endFormObject = function(h) {
    return Mo(h), this;
  }, g.doFormObject = function(h, H) {
    var Y = Re[Dt[h]];
    return $("q"), $(H.toString() + " cm"), $("/" + Y.id + " Do"), $("Q"), this;
  }, g.getFormObject = function(h) {
    var H = Re[Dt[h]];
    return { x: H.x, y: H.y, width: H.width, height: H.height, matrix: H.matrix };
  }, g.save = function(h, H) {
    return h = h || "generated.pdf", (H = H || {}).returnPromise = H.returnPromise || !1, H.returnPromise === !1 ? (Ci(zn(an()), h), typeof Ci.unload == "function" && Ie.setTimeout && setTimeout(Ci.unload, 911), this) : new Promise(function(Y, rA) {
      try {
        var pA = Ci(zn(an()), h);
        typeof Ci.unload == "function" && Ie.setTimeout && setTimeout(Ci.unload, 911), Y(pA);
      } catch (IA) {
        rA(IA.message);
      }
    });
  }, Ue.API) Ue.API.hasOwnProperty(bs) && (bs === "events" && Ue.API.events.length ? function(h, H) {
    var Y, rA, pA;
    for (pA = H.length - 1; pA !== -1; pA--) Y = H[pA][0], rA = H[pA][1], h.subscribe.apply(h, [Y].concat(typeof rA == "function" ? [rA] : rA));
  }(ie, Ue.API.events) : g[bs] = Ue.API[bs]);
  var Zn = g.getPageWidth = function(h) {
    return (VA[h = h || X].mediaBox.topRightX - VA[h].mediaBox.bottomLeftX) / mA;
  }, ni = g.setPageWidth = function(h, H) {
    VA[h].mediaBox.topRightX = H * mA + VA[h].mediaBox.bottomLeftX;
  }, xn = g.getPageHeight = function(h) {
    return (VA[h = h || X].mediaBox.topRightY - VA[h].mediaBox.bottomLeftY) / mA;
  }, si = g.setPageHeight = function(h, H) {
    VA[h].mediaBox.topRightY = H * mA + VA[h].mediaBox.bottomLeftY;
  };
  return g.internal = { pdfEscape: rr, getStyle: Di, getFont: ki, getFontSize: XA, getCharSpace: Cs, getTextColor: Do, getLineHeight: Ut, getLineHeightFactor: cn, getLineWidth: ys, write: be, getHorizontalCoordinate: ln, getVerticalCoordinate: Un, getCoordinateString: To, getVerticalCoordinateString: En, collections: {}, newObject: pe, newAdditionalObject: tr, newObjectDeferred: ut, newObjectDeferredBegin: Jt, getFilters: Dr, putStream: mr, events: ie, scaleFactor: mA, pageSize: { getWidth: function() {
    return Zn(X);
  }, setWidth: function(h) {
    ni(X, h);
  }, getHeight: function() {
    return xn(X);
  }, setHeight: function(h) {
    si(X, h);
  } }, encryptionOptions: l, encryption: Gt, getEncryptor: No, output: Fn, getNumberOfPages: xo, pages: KA, out: $, f2: cA, f3: T, getPageInfo: Ti, getPageInfoByObjId: Qe, getCurrentPageInfo: Oo, getPDFVersion: E, Point: Fs, Rectangle: ti, Matrix: ge, hasHotfix: Yr }, Object.defineProperty(g.internal.pageSize, "width", { get: function() {
    return Zn(X);
  }, set: function(h) {
    ni(X, h);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(g.internal.pageSize, "height", { get: function() {
    return xn(X);
  }, set: function(h) {
    si(X, h);
  }, enumerable: !0, configurable: !0 }), Jn.call(g, NA), BA = "F1", ji(d, n), ie.publish("initialized"), g;
}
bo.prototype.lsbFirstWord = function(o) {
  return String.fromCharCode(o >> 0 & 255, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255);
}, bo.prototype.toHexString = function(o) {
  return o.split("").map(function(t) {
    return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, bo.prototype.hexToBytes = function(o) {
  for (var t = [], n = 0; n < o.length; n += 2) t.push(String.fromCharCode(parseInt(o.substr(n, 2), 16)));
  return t.join("");
}, bo.prototype.processOwnerPassword = function(o, t) {
  return Bl(pl(t).substr(0, 5), o);
}, bo.prototype.encryptor = function(o, t) {
  var n = pl(this.encryptionKey + String.fromCharCode(255 & o, o >> 8 & 255, o >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
  return function(c) {
    return Bl(n, c);
  };
}, ha.prototype.equals = function(o) {
  var t, n = "id,objectNumber,equals";
  if (!o || st(o) !== st(this)) return !1;
  var c = 0;
  for (t in this) if (!(n.indexOf(t) >= 0)) {
    if (this.hasOwnProperty(t) && !o.hasOwnProperty(t) || this[t] !== o[t]) return !1;
    c++;
  }
  for (t in o) o.hasOwnProperty(t) && n.indexOf(t) < 0 && c--;
  return c === 0;
}, Ue.API = { events: [] }, Ue.version = "2.5.1";
var bt = Ue.API, Cl = 1, Li = function(o) {
  return o.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, Co = function(o) {
  return o.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, Oe = function(o) {
  return o.toFixed(2);
}, Ws = function(o) {
  return o.toFixed(5);
};
bt.__acroform__ = {};
var Nr = function(o, t) {
  o.prototype = Object.create(t.prototype), o.prototype.constructor = o;
}, du = function(o) {
  return o * Cl;
}, _n = function(o) {
  var t = new Du(), n = le.internal.getHeight(o) || 0, c = le.internal.getWidth(o) || 0;
  return t.BBox = [0, 0, Number(Oe(c)), Number(Oe(n))], t;
}, Sh = bt.__acroform__.setBit = function(o, t) {
  if (o = o || 0, t = t || 0, isNaN(o) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return o |= 1 << t;
}, Hh = bt.__acroform__.clearBit = function(o, t) {
  if (o = o || 0, t = t || 0, isNaN(o) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return o &= ~(1 << t);
}, jh = bt.__acroform__.getBit = function(o, t) {
  if (isNaN(o) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return o & 1 << t ? 1 : 0;
}, xt = bt.__acroform__.getBitForPdf = function(o, t) {
  if (isNaN(o) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return jh(o, t - 1);
}, St = bt.__acroform__.setBitForPdf = function(o, t) {
  if (isNaN(o) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return Sh(o, t - 1);
}, Ht = bt.__acroform__.clearBitForPdf = function(o, t) {
  if (isNaN(o) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return Hh(o, t - 1);
}, Nh = bt.__acroform__.calculateCoordinates = function(o, t) {
  var n = t.internal.getHorizontalCoordinate, c = t.internal.getVerticalCoordinate, d = o[0], u = o[1], p = o[2], v = o[3], f = {};
  return f.lowerLeft_X = n(d) || 0, f.lowerLeft_Y = c(u + v) || 0, f.upperRight_X = n(d + p) || 0, f.upperRight_Y = c(u) || 0, [Number(Oe(f.lowerLeft_X)), Number(Oe(f.lowerLeft_Y)), Number(Oe(f.upperRight_X)), Number(Oe(f.upperRight_Y))];
}, Oh = function(o) {
  if (o.appearanceStreamContent) return o.appearanceStreamContent;
  if (o.V || o.DV) {
    var t = [], n = o._V || o.DV, c = wl(o, n), d = o.scope.internal.getFont(o.fontName, o.fontStyle).id;
    t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(o.scope.__private__.encodeColorString(o.color)), t.push("/" + d + " " + Oe(c.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(c.text), t.push("ET"), t.push("Q"), t.push("EMC");
    var u = _n(o);
    return u.scope = o.scope, u.stream = t.join(`
`), u;
  }
}, wl = function(o, t) {
  var n = o.fontSize === 0 ? o.maxFontSize : o.fontSize, c = { text: "", fontSize: "" }, d = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
  d = o.multiline ? d.map(function(T) {
    return T.split(`
`);
  }) : d.map(function(T) {
    return [T];
  });
  var u = n, p = le.internal.getHeight(o) || 0;
  p = p < 0 ? -p : p;
  var v = le.internal.getWidth(o) || 0;
  v = v < 0 ? -v : v;
  var f = function(T, _, z) {
    if (T + 1 < d.length) {
      var J = _ + " " + d[T + 1][0];
      return sc(J, o, z).width <= v - 4;
    }
    return !1;
  };
  u++;
  A: for (; u > 0; ) {
    t = "", u--;
    var m, l, y = sc("3", o, u).height, C = o.multiline ? p - u : (p - y) / 2, g = C += 2, L = 0, E = 0, x = 0;
    if (u <= 0) {
      t = `(...) Tj
`, t += "% Width of Text: " + sc(t, o, u = 12).width + ", FieldWidth:" + v + `
`;
      break;
    }
    for (var b = "", U = 0, I = 0; I < d.length; I++) if (d.hasOwnProperty(I)) {
      var M = !1;
      if (d[I].length !== 1 && x !== d[I].length - 1) {
        if ((y + 2) * (U + 2) + 2 > p) continue A;
        b += d[I][x], M = !0, E = I, I--;
      } else {
        b = (b += d[I][x] + " ").substr(b.length - 1) == " " ? b.substr(0, b.length - 1) : b;
        var R = parseInt(I), Z = f(R, b, u), AA = I >= d.length - 1;
        if (Z && !AA) {
          b += " ", x = 0;
          continue;
        }
        if (Z || AA) {
          if (AA) E = R;
          else if (o.multiline && (y + 2) * (U + 2) + 2 > p) continue A;
        } else {
          if (!o.multiline || (y + 2) * (U + 2) + 2 > p) continue A;
          E = R;
        }
      }
      for (var V = "", dA = L; dA <= E; dA++) {
        var cA = d[dA];
        if (o.multiline) {
          if (dA === E) {
            V += cA[x] + " ", x = (x + 1) % cA.length;
            continue;
          }
          if (dA === L) {
            V += cA[cA.length - 1] + " ";
            continue;
          }
        }
        V += cA[0] + " ";
      }
      switch (V = V.substr(V.length - 1) == " " ? V.substr(0, V.length - 1) : V, l = sc(V, o, u).width, o.textAlign) {
        case "right":
          m = v - l - 2;
          break;
        case "center":
          m = (v - l) / 2;
          break;
        case "left":
        default:
          m = 2;
      }
      t += Oe(m) + " " + Oe(g) + ` Td
`, t += "(" + Li(V) + `) Tj
`, t += -Oe(m) + ` 0 Td
`, g = -(u + 2), l = 0, L = M ? E : E + 1, U++, b = "";
    }
    break;
  }
  return c.text = t, c.fontSize = u, c;
}, sc = function(o, t, n) {
  var c = t.scope.internal.getFont(t.fontName, t.fontStyle), d = t.scope.getStringUnitWidth(o, { font: c, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n);
  return { height: t.scope.getStringUnitWidth("3", { font: c, fontSize: parseFloat(n), charSpace: 0 }) * parseFloat(n) * 1.5, width: d };
}, Ph = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, Th = function(o, t) {
  var n = { type: "reference", object: o };
  t.internal.getPageInfo(o.page).pageContext.annotations.find(function(c) {
    return c.type === n.type && c.object === n.object;
  }) === void 0 && t.internal.getPageInfo(o.page).pageContext.annotations.push(n);
}, Dh = function(o, t) {
  for (var n in o) if (o.hasOwnProperty(n)) {
    var c = n, d = o[n];
    t.internal.newObjectDeferredBegin(d.objId, !0), st(d) === "object" && typeof d.putStream == "function" && d.putStream(), delete o[c];
  }
}, Mh = function(o, t) {
  if (t.scope = o, o.internal !== void 0 && (o.internal.acroformPlugin === void 0 || o.internal.acroformPlugin.isInitialized === !1)) {
    if (vn.FieldNum = 0, o.internal.acroformPlugin = JSON.parse(JSON.stringify(Ph)), o.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Cl = o.internal.scaleFactor, o.internal.acroformPlugin.acroFormDictionaryRoot = new Mu(), o.internal.acroformPlugin.acroFormDictionaryRoot.scope = o, o.internal.acroformPlugin.acroFormDictionaryRoot._eventID = o.internal.events.subscribe("postPutResources", function() {
      (function(n) {
        n.internal.events.unsubscribe(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete n.internal.acroformPlugin.acroFormDictionaryRoot._eventID, n.internal.acroformPlugin.printedOut = !0;
      })(o);
    }), o.internal.events.subscribe("buildDocument", function() {
      (function(n) {
        n.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var c = n.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var d in c) if (c.hasOwnProperty(d)) {
          var u = c[d];
          u.objId = void 0, u.hasAnnotation && Th(u, n);
        }
      })(o);
    }), o.internal.events.subscribe("putCatalog", function() {
      (function(n) {
        if (n.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        n.internal.write("/AcroForm " + n.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(o);
    }), o.internal.events.subscribe("postPutPages", function(n) {
      (function(c, d) {
        var u = !c;
        for (var p in c || (d.internal.newObjectDeferredBegin(d.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), d.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), c = c || d.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (c.hasOwnProperty(p)) {
          var v = c[p], f = [], m = v.Rect;
          if (v.Rect && (v.Rect = Nh(v.Rect, d)), d.internal.newObjectDeferredBegin(v.objId, !0), v.DA = le.createDefaultAppearanceStream(v), st(v) === "object" && typeof v.getKeyValueListForStream == "function" && (f = v.getKeyValueListForStream()), v.Rect = m, v.hasAppearanceStream && !v.appearanceStreamContent) {
            var l = Oh(v);
            f.push({ key: "AP", value: "<</N " + l + ">>" }), d.internal.acroformPlugin.xForms.push(l);
          }
          if (v.appearanceStreamContent) {
            var y = "";
            for (var C in v.appearanceStreamContent) if (v.appearanceStreamContent.hasOwnProperty(C)) {
              var g = v.appearanceStreamContent[C];
              if (y += "/" + C + " ", y += "<<", Object.keys(g).length >= 1 || Array.isArray(g)) {
                for (var p in g) if (g.hasOwnProperty(p)) {
                  var L = g[p];
                  typeof L == "function" && (L = L.call(d, v)), y += "/" + p + " " + L + " ", d.internal.acroformPlugin.xForms.indexOf(L) >= 0 || d.internal.acroformPlugin.xForms.push(L);
                }
              } else typeof (L = g) == "function" && (L = L.call(d, v)), y += "/" + p + " " + L, d.internal.acroformPlugin.xForms.indexOf(L) >= 0 || d.internal.acroformPlugin.xForms.push(L);
              y += ">>";
            }
            f.push({ key: "AP", value: `<<
` + y + ">>" });
          }
          d.internal.putStream({ additionalKeyValues: f, objectId: v.objId }), d.internal.out("endobj");
        }
        u && Dh(d.internal.acroformPlugin.xForms, d);
      })(n, o);
    }), o.internal.acroformPlugin.isInitialized = !0;
  }
}, Tu = bt.__acroform__.arrayToPdfArray = function(o, t, n) {
  var c = function(p) {
    return p;
  };
  if (Array.isArray(o)) {
    for (var d = "[", u = 0; u < o.length; u++) switch (u !== 0 && (d += " "), st(o[u])) {
      case "boolean":
      case "number":
      case "object":
        d += o[u].toString();
        break;
      case "string":
        o[u].substr(0, 1) !== "/" ? (t !== void 0 && n && (c = n.internal.getEncryptor(t)), d += "(" + Li(c(o[u].toString())) + ")") : d += o[u].toString();
    }
    return d += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, sl = function(o, t, n) {
  var c = function(d) {
    return d;
  };
  return t !== void 0 && n && (c = n.internal.getEncryptor(t)), (o = o || "").toString(), o = "(" + Li(c(o)) + ")";
}, Kn = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(o) {
    this._objId = o;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
Kn.prototype.toString = function() {
  return this.objId + " 0 R";
}, Kn.prototype.putStream = function() {
  var o = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: o, objectId: this.objId }), this.scope.internal.out("endobj");
}, Kn.prototype.getKeyValueListForStream = function() {
  var o = [], t = Object.getOwnPropertyNames(this).filter(function(u) {
    return u != "content" && u != "appearanceStreamContent" && u != "scope" && u != "objId" && u.substring(0, 1) != "_";
  });
  for (var n in t) if (Object.getOwnPropertyDescriptor(this, t[n]).configurable === !1) {
    var c = t[n], d = this[c];
    d && (Array.isArray(d) ? o.push({ key: c, value: Tu(d, this.objId, this.scope) }) : d instanceof Kn ? (d.scope = this.scope, o.push({ key: c, value: d.objId + " 0 R" })) : typeof d != "function" && o.push({ key: c, value: d }));
  }
  return o;
};
var Du = function() {
  Kn.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var o, t = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return t;
  }, set: function(n) {
    t = n;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(n) {
    o = n.trim();
  }, get: function() {
    return o || null;
  } });
};
Nr(Du, Kn);
var Mu = function() {
  Kn.call(this);
  var o, t = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return t.length > 0 ? t : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return t;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (o) {
      var n = function(c) {
        return c;
      };
      return this.scope && (n = this.scope.internal.getEncryptor(this.objId)), "(" + Li(n(o)) + ")";
    }
  }, set: function(n) {
    o = n;
  } });
};
Nr(Mu, Kn);
var vn = function o() {
  Kn.call(this);
  var t = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(b) {
    if (isNaN(b)) throw new Error('Invalid value "' + b + '" for attribute F supplied.');
    t = b;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(t, 3);
  }, set: function(b) {
    b ? this.F = St(t, 3) : this.F = Ht(t, 3);
  } });
  var n = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(b) {
    if (isNaN(b)) throw new Error('Invalid value "' + b + '" for attribute Ff supplied.');
    n = b;
  } });
  var c = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (c.length !== 0) return c;
  }, set: function(b) {
    c = b !== void 0 ? b : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !c || isNaN(c[0]) ? 0 : c[0];
  }, set: function(b) {
    c[0] = b;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !c || isNaN(c[1]) ? 0 : c[1];
  }, set: function(b) {
    c[1] = b;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !c || isNaN(c[2]) ? 0 : c[2];
  }, set: function(b) {
    c[2] = b;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !c || isNaN(c[3]) ? 0 : c[3];
  }, set: function(b) {
    c[3] = b;
  } });
  var d = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return d;
  }, set: function(b) {
    switch (b) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        d = b;
        break;
      default:
        throw new Error('Invalid value "' + b + '" for attribute FT supplied.');
    }
  } });
  var u = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!u || u.length < 1) {
      if (this instanceof ac) return;
      u = "FieldObject" + o.FieldNum++;
    }
    var b = function(U) {
      return U;
    };
    return this.scope && (b = this.scope.internal.getEncryptor(this.objId)), "(" + Li(b(u)) + ")";
  }, set: function(b) {
    u = b.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return u;
  }, set: function(b) {
    u = b;
  } });
  var p = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return p;
  }, set: function(b) {
    p = b;
  } });
  var v = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return v;
  }, set: function(b) {
    v = b;
  } });
  var f = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return f;
  }, set: function(b) {
    f = b;
  } });
  var m = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return m === void 0 ? 50 / Cl : m;
  }, set: function(b) {
    m = b;
  } });
  var l = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return l;
  }, set: function(b) {
    l = b;
  } });
  var y = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!y || this instanceof ac || this instanceof zs)) return sl(y, this.objId, this.scope);
  }, set: function(b) {
    b = b.toString(), y = b;
  } });
  var C = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (C) return this instanceof Rt ? C : sl(C, this.objId, this.scope);
  }, set: function(b) {
    b = b.toString(), C = this instanceof Rt ? b : b.substr(0, 1) === "(" ? Co(b.substr(1, b.length - 2)) : Co(b);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Rt ? Co(C.substr(1, C.length - 1)) : C;
  }, set: function(b) {
    b = b.toString(), C = this instanceof Rt ? "/" + b : b;
  } });
  var g = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (g) return g;
  }, set: function(b) {
    this.V = b;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (g) return this instanceof Rt ? g : sl(g, this.objId, this.scope);
  }, set: function(b) {
    b = b.toString(), g = this instanceof Rt ? b : b.substr(0, 1) === "(" ? Co(b.substr(1, b.length - 2)) : Co(b);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Rt ? Co(g.substr(1, g.length - 1)) : g;
  }, set: function(b) {
    b = b.toString(), g = this instanceof Rt ? "/" + b : b;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var L, E = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return E;
  }, set: function(b) {
    b = !!b, E = b;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (L) return L;
  }, set: function(b) {
    L = b;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 1);
  }, set: function(b) {
    b ? this.Ff = St(this.Ff, 1) : this.Ff = Ht(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 2);
  }, set: function(b) {
    b ? this.Ff = St(this.Ff, 2) : this.Ff = Ht(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 3);
  }, set: function(b) {
    b ? this.Ff = St(this.Ff, 3) : this.Ff = Ht(this.Ff, 3);
  } });
  var x = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (x !== null) return x;
  }, set: function(b) {
    if ([0, 1, 2].indexOf(b) === -1) throw new Error('Invalid value "' + b + '" for attribute Q supplied.');
    x = b;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var b;
    switch (x) {
      case 0:
      default:
        b = "left";
        break;
      case 1:
        b = "center";
        break;
      case 2:
        b = "right";
    }
    return b;
  }, configurable: !0, enumerable: !0, set: function(b) {
    switch (b) {
      case "right":
      case 2:
        x = 2;
        break;
      case "center":
      case 1:
        x = 1;
        break;
      case "left":
      case 0:
      default:
        x = 0;
    }
  } });
};
Nr(vn, Kn);
var bi = function() {
  vn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var o = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return o;
  }, set: function(n) {
    o = n;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return o;
  }, set: function(n) {
    o = n;
  } });
  var t = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return Tu(t, this.objId, this.scope);
  }, set: function(n) {
    var c, d;
    d = [], typeof (c = n) == "string" && (d = function(u, p, v) {
      v || (v = 1);
      for (var f, m = []; f = p.exec(u); ) m.push(f[v]);
      return m;
    }(c, /\((.*?)\)/g)), t = d;
  } }), this.getOptions = function() {
    return t;
  }, this.setOptions = function(n) {
    t = n, this.sort && t.sort();
  }, this.addOption = function(n) {
    n = (n = n || "").toString(), t.push(n), this.sort && t.sort();
  }, this.removeOption = function(n, c) {
    for (c = c || !1, n = (n = n || "").toString(); t.indexOf(n) !== -1 && (t.splice(t.indexOf(n), 1), c !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 18);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 18) : this.Ff = Ht(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 19);
  }, set: function(n) {
    this.combo === !0 && (n ? this.Ff = St(this.Ff, 19) : this.Ff = Ht(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 20);
  }, set: function(n) {
    n ? (this.Ff = St(this.Ff, 20), t.sort()) : this.Ff = Ht(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 22);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 22) : this.Ff = Ht(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 23);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 23) : this.Ff = Ht(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 27);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 27) : this.Ff = Ht(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
Nr(bi, vn);
var Qi = function() {
  bi.call(this), this.fontName = "helvetica", this.combo = !1;
};
Nr(Qi, bi);
var Ui = function() {
  Qi.call(this), this.combo = !0;
};
Nr(Ui, Qi);
var oa = function() {
  Ui.call(this), this.edit = !0;
};
Nr(oa, Ui);
var Rt = function() {
  vn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 15);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 15) : this.Ff = Ht(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 16);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 16) : this.Ff = Ht(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 17);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 17) : this.Ff = Ht(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 26);
  }, set: function(n) {
    n ? this.Ff = St(this.Ff, 26) : this.Ff = Ht(this.Ff, 26);
  } });
  var o, t = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var n = function(u) {
      return u;
    };
    if (this.scope && (n = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
      var c, d = [];
      for (c in d.push("<<"), t) d.push("/" + c + " (" + Li(n(t[c])) + ")");
      return d.push(">>"), d.join(`
`);
    }
  }, set: function(n) {
    st(n) === "object" && (t = n);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return t.CA || "";
  }, set: function(n) {
    typeof n == "string" && (t.CA = n);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return o;
  }, set: function(n) {
    o = n;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return o.substr(1, o.length - 1);
  }, set: function(n) {
    o = "/" + n;
  } });
};
Nr(Rt, vn);
var aa = function() {
  Rt.call(this), this.pushButton = !0;
};
Nr(aa, Rt);
var Ei = function() {
  Rt.call(this), this.radio = !0, this.pushButton = !1;
  var o = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return o;
  }, set: function(t) {
    o = t !== void 0 ? t : [];
  } });
};
Nr(Ei, Rt);
var ac = function() {
  var o, t;
  vn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return o;
  }, set: function(d) {
    o = d;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return t;
  }, set: function(d) {
    t = d;
  } });
  var n, c = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var d = function(v) {
      return v;
    };
    this.scope && (d = this.scope.internal.getEncryptor(this.objId));
    var u, p = [];
    for (u in p.push("<<"), c) p.push("/" + u + " (" + Li(d(c[u])) + ")");
    return p.push(">>"), p.join(`
`);
  }, set: function(d) {
    st(d) === "object" && (c = d);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return c.CA || "";
  }, set: function(d) {
    typeof d == "string" && (c.CA = d);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(d) {
    n = d;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(d) {
    n = "/" + d;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = le.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Nr(ac, vn), Ei.prototype.setAppearance = function(o) {
  if (!("createAppearanceStream" in o) || !("getCA" in o)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
    var n = this.Kids[t];
    n.appearanceStreamContent = o.createAppearanceStream(n.optionName), n.caption = o.getCA();
  }
}, Ei.prototype.createOption = function(o) {
  var t = new ac();
  return t.Parent = this, t.optionName = o, this.Kids.push(t), _h.call(this.scope, t), t;
};
var ca = function() {
  Rt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = le.CheckBox.createAppearanceStream();
};
Nr(ca, Rt);
var zs = function() {
  vn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 13);
  }, set: function(t) {
    t ? this.Ff = St(this.Ff, 13) : this.Ff = Ht(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 21);
  }, set: function(t) {
    t ? this.Ff = St(this.Ff, 21) : this.Ff = Ht(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 23);
  }, set: function(t) {
    t ? this.Ff = St(this.Ff, 23) : this.Ff = Ht(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 24);
  }, set: function(t) {
    t ? this.Ff = St(this.Ff, 24) : this.Ff = Ht(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 25);
  }, set: function(t) {
    t ? this.Ff = St(this.Ff, 25) : this.Ff = Ht(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 26);
  }, set: function(t) {
    t ? this.Ff = St(this.Ff, 26) : this.Ff = Ht(this.Ff, 26);
  } });
  var o = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return o;
  }, set: function(t) {
    o = t;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return o;
  }, set: function(t) {
    Number.isInteger(t) && (o = t);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
Nr(zs, vn);
var la = function() {
  zs.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!xt(this.Ff, 14);
  }, set: function(o) {
    o ? this.Ff = St(this.Ff, 14) : this.Ff = Ht(this.Ff, 14);
  } }), this.password = !0;
};
Nr(la, zs);
var le = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: le.CheckBox.YesNormal }, D: { On: le.CheckBox.YesPushDown, Off: le.CheckBox.OffPushDown } };
}, YesPushDown: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [], c = o.scope.internal.getFont(o.fontName, o.fontStyle).id, d = o.scope.__private__.encodeColorString(o.color), u = wl(o, o.caption);
  return n.push("0.749023 g"), n.push("0 0 " + Oe(le.internal.getWidth(o)) + " " + Oe(le.internal.getHeight(o)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + c + " " + Oe(u.fontSize) + " Tf " + d), n.push("BT"), n.push(u.text), n.push("ET"), n.push("Q"), n.push("EMC"), t.stream = n.join(`
`), t;
}, YesNormal: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = o.scope.internal.getFont(o.fontName, o.fontStyle).id, c = o.scope.__private__.encodeColorString(o.color), d = [], u = le.internal.getHeight(o), p = le.internal.getWidth(o), v = wl(o, o.caption);
  return d.push("1 g"), d.push("0 0 " + Oe(p) + " " + Oe(u) + " re"), d.push("f"), d.push("q"), d.push("0 0 1 rg"), d.push("0 0 " + Oe(p - 1) + " " + Oe(u - 1) + " re"), d.push("W"), d.push("n"), d.push("0 g"), d.push("BT"), d.push("/" + n + " " + Oe(v.fontSize) + " Tf " + c), d.push(v.text), d.push("ET"), d.push("Q"), t.stream = d.join(`
`), t;
}, OffPushDown: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [];
  return n.push("0.749023 g"), n.push("0 0 " + Oe(le.internal.getWidth(o)) + " " + Oe(le.internal.getHeight(o)) + " re"), n.push("f"), t.stream = n.join(`
`), t;
} }, RadioButton: { Circle: { createAppearanceStream: function(o) {
  var t = { D: { Off: le.RadioButton.Circle.OffPushDown }, N: {} };
  return t.N[o] = le.RadioButton.Circle.YesNormal, t.D[o] = le.RadioButton.Circle.YesPushDown, t;
}, getCA: function() {
  return "l";
}, YesNormal: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [], c = le.internal.getWidth(o) <= le.internal.getHeight(o) ? le.internal.getWidth(o) / 4 : le.internal.getHeight(o) / 4;
  c = Number((0.9 * c).toFixed(5));
  var d = le.internal.Bezier_C, u = Number((c * d).toFixed(5));
  return n.push("q"), n.push("1 0 0 1 " + Ws(le.internal.getWidth(o) / 2) + " " + Ws(le.internal.getHeight(o) / 2) + " cm"), n.push(c + " 0 m"), n.push(c + " " + u + " " + u + " " + c + " 0 " + c + " c"), n.push("-" + u + " " + c + " -" + c + " " + u + " -" + c + " 0 c"), n.push("-" + c + " -" + u + " -" + u + " -" + c + " 0 -" + c + " c"), n.push(u + " -" + c + " " + c + " -" + u + " " + c + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join(`
`), t;
}, YesPushDown: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [], c = le.internal.getWidth(o) <= le.internal.getHeight(o) ? le.internal.getWidth(o) / 4 : le.internal.getHeight(o) / 4;
  c = Number((0.9 * c).toFixed(5));
  var d = Number((2 * c).toFixed(5)), u = Number((d * le.internal.Bezier_C).toFixed(5)), p = Number((c * le.internal.Bezier_C).toFixed(5));
  return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Ws(le.internal.getWidth(o) / 2) + " " + Ws(le.internal.getHeight(o) / 2) + " cm"), n.push(d + " 0 m"), n.push(d + " " + u + " " + u + " " + d + " 0 " + d + " c"), n.push("-" + u + " " + d + " -" + d + " " + u + " -" + d + " 0 c"), n.push("-" + d + " -" + u + " -" + u + " -" + d + " 0 -" + d + " c"), n.push(u + " -" + d + " " + d + " -" + u + " " + d + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + Ws(le.internal.getWidth(o) / 2) + " " + Ws(le.internal.getHeight(o) / 2) + " cm"), n.push(c + " 0 m"), n.push(c + " " + p + " " + p + " " + c + " 0 " + c + " c"), n.push("-" + p + " " + c + " -" + c + " " + p + " -" + c + " 0 c"), n.push("-" + c + " -" + p + " -" + p + " -" + c + " 0 -" + c + " c"), n.push(p + " -" + c + " " + c + " -" + p + " " + c + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join(`
`), t;
}, OffPushDown: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [], c = le.internal.getWidth(o) <= le.internal.getHeight(o) ? le.internal.getWidth(o) / 4 : le.internal.getHeight(o) / 4;
  c = Number((0.9 * c).toFixed(5));
  var d = Number((2 * c).toFixed(5)), u = Number((d * le.internal.Bezier_C).toFixed(5));
  return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Ws(le.internal.getWidth(o) / 2) + " " + Ws(le.internal.getHeight(o) / 2) + " cm"), n.push(d + " 0 m"), n.push(d + " " + u + " " + u + " " + d + " 0 " + d + " c"), n.push("-" + u + " " + d + " -" + d + " " + u + " -" + d + " 0 c"), n.push("-" + d + " -" + u + " -" + u + " -" + d + " 0 -" + d + " c"), n.push(u + " -" + d + " " + d + " -" + u + " " + d + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join(`
`), t;
} }, Cross: { createAppearanceStream: function(o) {
  var t = { D: { Off: le.RadioButton.Cross.OffPushDown }, N: {} };
  return t.N[o] = le.RadioButton.Cross.YesNormal, t.D[o] = le.RadioButton.Cross.YesPushDown, t;
}, getCA: function() {
  return "8";
}, YesNormal: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [], c = le.internal.calculateCross(o);
  return n.push("q"), n.push("1 1 " + Oe(le.internal.getWidth(o) - 2) + " " + Oe(le.internal.getHeight(o) - 2) + " re"), n.push("W"), n.push("n"), n.push(Oe(c.x1.x) + " " + Oe(c.x1.y) + " m"), n.push(Oe(c.x2.x) + " " + Oe(c.x2.y) + " l"), n.push(Oe(c.x4.x) + " " + Oe(c.x4.y) + " m"), n.push(Oe(c.x3.x) + " " + Oe(c.x3.y) + " l"), n.push("s"), n.push("Q"), t.stream = n.join(`
`), t;
}, YesPushDown: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = le.internal.calculateCross(o), c = [];
  return c.push("0.749023 g"), c.push("0 0 " + Oe(le.internal.getWidth(o)) + " " + Oe(le.internal.getHeight(o)) + " re"), c.push("f"), c.push("q"), c.push("1 1 " + Oe(le.internal.getWidth(o) - 2) + " " + Oe(le.internal.getHeight(o) - 2) + " re"), c.push("W"), c.push("n"), c.push(Oe(n.x1.x) + " " + Oe(n.x1.y) + " m"), c.push(Oe(n.x2.x) + " " + Oe(n.x2.y) + " l"), c.push(Oe(n.x4.x) + " " + Oe(n.x4.y) + " m"), c.push(Oe(n.x3.x) + " " + Oe(n.x3.y) + " l"), c.push("s"), c.push("Q"), t.stream = c.join(`
`), t;
}, OffPushDown: function(o) {
  var t = _n(o);
  t.scope = o.scope;
  var n = [];
  return n.push("0.749023 g"), n.push("0 0 " + Oe(le.internal.getWidth(o)) + " " + Oe(le.internal.getHeight(o)) + " re"), n.push("f"), t.stream = n.join(`
`), t;
} } }, createDefaultAppearanceStream: function(o) {
  var t = o.scope.internal.getFont(o.fontName, o.fontStyle).id, n = o.scope.__private__.encodeColorString(o.color);
  return "/" + t + " " + o.fontSize + " Tf " + n;
} };
le.internal = { Bezier_C: 0.551915024494, calculateCross: function(o) {
  var t = le.internal.getWidth(o), n = le.internal.getHeight(o), c = Math.min(t, n);
  return { x1: { x: (t - c) / 2, y: (n - c) / 2 + c }, x2: { x: (t - c) / 2 + c, y: (n - c) / 2 }, x3: { x: (t - c) / 2, y: (n - c) / 2 }, x4: { x: (t - c) / 2 + c, y: (n - c) / 2 + c } };
} }, le.internal.getWidth = function(o) {
  var t = 0;
  return st(o) === "object" && (t = du(o.Rect[2])), t;
}, le.internal.getHeight = function(o) {
  var t = 0;
  return st(o) === "object" && (t = du(o.Rect[3])), t;
};
var _h = bt.addField = function(o) {
  if (Mh(this, o), !(o instanceof vn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var t;
  return (t = o).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), o.page = o.scope.internal.getCurrentPageInfo().pageNumber, this;
};
bt.AcroFormChoiceField = bi, bt.AcroFormListBox = Qi, bt.AcroFormComboBox = Ui, bt.AcroFormEditBox = oa, bt.AcroFormButton = Rt, bt.AcroFormPushButton = aa, bt.AcroFormRadioButton = Ei, bt.AcroFormCheckBox = ca, bt.AcroFormTextField = zs, bt.AcroFormPasswordField = la, bt.AcroFormAppearance = le, bt.AcroForm = { ChoiceField: bi, ListBox: Qi, ComboBox: Ui, EditBox: oa, Button: Rt, PushButton: aa, RadioButton: Ei, CheckBox: ca, TextField: zs, PasswordField: la, Appearance: le }, Ue.AcroForm = { ChoiceField: bi, ListBox: Qi, ComboBox: Ui, EditBox: oa, Button: Rt, PushButton: aa, RadioButton: Ei, CheckBox: ca, TextField: zs, PasswordField: la, Appearance: le };
var Kh = Ue.AcroForm;
function _u(o) {
  return o.reduce(function(t, n, c) {
    return t[n] = c, t;
  }, {});
}
(function(o) {
  o.__addimage__ = {};
  var t = "UNKNOWN", n = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, c = o.__addimage__.getImageFileTypeByImageData = function(T, _) {
    var z, J, tA, aA, vA, hA = t;
    if ((_ = _ || t) === "RGBA" || T.data !== void 0 && T.data instanceof Uint8ClampedArray && "height" in T && "width" in T) return "RGBA";
    if (Z(T)) for (vA in n) for (tA = n[vA], z = 0; z < tA.length; z += 1) {
      for (aA = !0, J = 0; J < tA[z].length; J += 1) if (tA[z][J] !== void 0 && tA[z][J] !== T[J]) {
        aA = !1;
        break;
      }
      if (aA === !0) {
        hA = vA;
        break;
      }
    }
    else for (vA in n) for (tA = n[vA], z = 0; z < tA.length; z += 1) {
      for (aA = !0, J = 0; J < tA[z].length; J += 1) if (tA[z][J] !== void 0 && tA[z][J] !== T.charCodeAt(J)) {
        aA = !1;
        break;
      }
      if (aA === !0) {
        hA = vA;
        break;
      }
    }
    return hA === t && _ !== t && (hA = _), hA;
  }, d = function T(_) {
    for (var z = this.internal.write, J = this.internal.putStream, tA = (0, this.internal.getFilters)(); tA.indexOf("FlateEncode") !== -1; ) tA.splice(tA.indexOf("FlateEncode"), 1);
    _.objectId = this.internal.newObject();
    var aA = [];
    if (aA.push({ key: "Type", value: "/XObject" }), aA.push({ key: "Subtype", value: "/Image" }), aA.push({ key: "Width", value: _.width }), aA.push({ key: "Height", value: _.height }), _.colorSpace === x.INDEXED ? aA.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (_.palette.length / 3 - 1) + " " + ("sMask" in _ && _.sMask !== void 0 ? _.objectId + 2 : _.objectId + 1) + " 0 R]" }) : (aA.push({ key: "ColorSpace", value: "/" + _.colorSpace }), _.colorSpace === x.DEVICE_CMYK && aA.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), aA.push({ key: "BitsPerComponent", value: _.bitsPerComponent }), "decodeParameters" in _ && _.decodeParameters !== void 0 && aA.push({ key: "DecodeParms", value: "<<" + _.decodeParameters + ">>" }), "transparency" in _ && Array.isArray(_.transparency)) {
      for (var vA = "", hA = 0, UA = _.transparency.length; hA < UA; hA++) vA += _.transparency[hA] + " " + _.transparency[hA] + " ";
      aA.push({ key: "Mask", value: "[" + vA + "]" });
    }
    _.sMask !== void 0 && aA.push({ key: "SMask", value: _.objectId + 1 + " 0 R" });
    var bA = _.filter !== void 0 ? ["/" + _.filter] : void 0;
    if (J({ data: _.data, additionalKeyValues: aA, alreadyAppliedFilters: bA, objectId: _.objectId }), z("endobj"), "sMask" in _ && _.sMask !== void 0) {
      var PA = "/Predictor " + _.predictor + " /Colors 1 /BitsPerComponent " + _.bitsPerComponent + " /Columns " + _.width, j = { width: _.width, height: _.height, colorSpace: "DeviceGray", bitsPerComponent: _.bitsPerComponent, decodeParameters: PA, data: _.sMask };
      "filter" in _ && (j.filter = _.filter), T.call(this, j);
    }
    if (_.colorSpace === x.INDEXED) {
      var X = this.internal.newObject();
      J({ data: V(new Uint8Array(_.palette)), objectId: X }), z("endobj");
    }
  }, u = function() {
    var T = this.internal.collections.addImage_images;
    for (var _ in T) d.call(this, T[_]);
  }, p = function() {
    var T, _ = this.internal.collections.addImage_images, z = this.internal.write;
    for (var J in _) z("/I" + (T = _[J]).index, T.objectId, "0", "R");
  }, v = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", u), this.internal.events.subscribe("putXobjectDict", p));
  }, f = function() {
    var T = this.internal.collections.addImage_images;
    return v.call(this), T;
  }, m = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, l = function(T) {
    return typeof o["process" + T.toUpperCase()] == "function";
  }, y = function(T) {
    return st(T) === "object" && T.nodeType === 1;
  }, C = function(T, _) {
    if (T.nodeName === "IMG" && T.hasAttribute("src")) {
      var z = "" + T.getAttribute("src");
      if (z.indexOf("data:image/") === 0) return ia(unescape(z).split("base64,").pop());
      var J = o.loadFile(z, !0);
      if (J !== void 0) return J;
    }
    if (T.nodeName === "CANVAS") {
      if (T.width === 0 || T.height === 0) throw new Error("Given canvas must have data. Canvas width: " + T.width + ", height: " + T.height);
      var tA;
      switch (_) {
        case "PNG":
          tA = "image/png";
          break;
        case "WEBP":
          tA = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          tA = "image/jpeg";
      }
      return ia(T.toDataURL(tA, 1).split("base64,").pop());
    }
  }, g = function(T) {
    var _ = this.internal.collections.addImage_images;
    if (_) {
      for (var z in _) if (T === _[z].alias) return _[z];
    }
  }, L = function(T, _, z) {
    return T || _ || (T = -96, _ = -96), T < 0 && (T = -1 * z.width * 72 / T / this.internal.scaleFactor), _ < 0 && (_ = -1 * z.height * 72 / _ / this.internal.scaleFactor), T === 0 && (T = _ * z.width / z.height), _ === 0 && (_ = T * z.height / z.width), [T, _];
  }, E = function(T, _, z, J, tA, aA) {
    var vA = L.call(this, z, J, tA), hA = this.internal.getCoordinateString, UA = this.internal.getVerticalCoordinateString, bA = f.call(this);
    if (z = vA[0], J = vA[1], bA[tA.index] = tA, aA) {
      aA *= Math.PI / 180;
      var PA = Math.cos(aA), j = Math.sin(aA), X = function(eA) {
        return eA.toFixed(4);
      }, q = [X(PA), X(j), X(-1 * j), X(PA), 0, 0, "cm"];
    }
    this.internal.write("q"), aA ? (this.internal.write([1, "0", "0", 1, hA(T), UA(_ + J), "cm"].join(" ")), this.internal.write(q.join(" ")), this.internal.write([hA(z), "0", "0", hA(J), "0", "0", "cm"].join(" "))) : this.internal.write([hA(z), "0", "0", hA(J), hA(T), UA(_ + J), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + tA.index + " Do"), this.internal.write("Q");
  }, x = o.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  o.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var b = o.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, U = o.__addimage__.sHashCode = function(T) {
    var _, z, J = 0;
    if (typeof T == "string") for (z = T.length, _ = 0; _ < z; _++) J = (J << 5) - J + T.charCodeAt(_), J |= 0;
    else if (Z(T)) for (z = T.byteLength / 2, _ = 0; _ < z; _++) J = (J << 5) - J + T[_], J |= 0;
    return J;
  }, I = o.__addimage__.validateStringAsBase64 = function(T) {
    (T = T || "").toString().trim();
    var _ = !0;
    return T.length === 0 && (_ = !1), T.length % 4 != 0 && (_ = !1), /^[A-Za-z0-9+/]+$/.test(T.substr(0, T.length - 2)) === !1 && (_ = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(T.substr(-2)) === !1 && (_ = !1), _;
  }, M = o.__addimage__.extractImageFromDataUrl = function(T) {
    var _ = (T = T || "").split("base64,"), z = null;
    if (_.length === 2) {
      var J = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(_[0]);
      Array.isArray(J) && (z = { mimeType: J[1], charset: J[2], data: _[1] });
    }
    return z;
  }, R = o.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  o.__addimage__.isArrayBuffer = function(T) {
    return R() && T instanceof ArrayBuffer;
  };
  var Z = o.__addimage__.isArrayBufferView = function(T) {
    return R() && typeof Uint32Array < "u" && (T instanceof Int8Array || T instanceof Uint8Array || typeof Uint8ClampedArray < "u" && T instanceof Uint8ClampedArray || T instanceof Int16Array || T instanceof Uint16Array || T instanceof Int32Array || T instanceof Uint32Array || T instanceof Float32Array || T instanceof Float64Array);
  }, AA = o.__addimage__.binaryStringToUint8Array = function(T) {
    for (var _ = T.length, z = new Uint8Array(_), J = 0; J < _; J++) z[J] = T.charCodeAt(J);
    return z;
  }, V = o.__addimage__.arrayBufferToBinaryString = function(T) {
    for (var _ = "", z = Z(T) ? T : new Uint8Array(T), J = 0; J < z.length; J += 8192) _ += String.fromCharCode.apply(null, z.subarray(J, J + 8192));
    return _;
  };
  o.addImage = function() {
    var T, _, z, J, tA, aA, vA, hA, UA;
    if (typeof arguments[1] == "number" ? (_ = t, z = arguments[1], J = arguments[2], tA = arguments[3], aA = arguments[4], vA = arguments[5], hA = arguments[6], UA = arguments[7]) : (_ = arguments[1], z = arguments[2], J = arguments[3], tA = arguments[4], aA = arguments[5], vA = arguments[6], hA = arguments[7], UA = arguments[8]), st(T = arguments[0]) === "object" && !y(T) && "imageData" in T) {
      var bA = T;
      T = bA.imageData, _ = bA.format || _ || t, z = bA.x || z || 0, J = bA.y || J || 0, tA = bA.w || bA.width || tA, aA = bA.h || bA.height || aA, vA = bA.alias || vA, hA = bA.compression || hA, UA = bA.rotation || bA.angle || UA;
    }
    var PA = this.internal.getFilters();
    if (hA === void 0 && PA.indexOf("FlateEncode") !== -1 && (hA = "SLOW"), isNaN(z) || isNaN(J)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    v.call(this);
    var j = dA.call(this, T, _, vA, hA);
    return E.call(this, z, J, tA, aA, j, UA), this;
  };
  var dA = function(T, _, z, J) {
    var tA, aA, vA;
    if (typeof T == "string" && c(T) === t) {
      T = unescape(T);
      var hA = cA(T, !1);
      (hA !== "" || (hA = o.loadFile(T, !0)) !== void 0) && (T = hA);
    }
    if (y(T) && (T = C(T, _)), _ = c(T, _), !l(_)) throw new Error("addImage does not support files of type '" + _ + "', please ensure that a plugin for '" + _ + "' support is added.");
    if (((vA = z) == null || vA.length === 0) && (z = function(UA) {
      return typeof UA == "string" || Z(UA) ? U(UA) : Z(UA.data) ? U(UA.data) : null;
    }(T)), (tA = g.call(this, z)) || (R() && (T instanceof Uint8Array || _ === "RGBA" || (aA = T, T = AA(T))), tA = this["process" + _.toUpperCase()](T, m.call(this), z, function(UA) {
      return UA && typeof UA == "string" && (UA = UA.toUpperCase()), UA in o.image_compression ? UA : b.NONE;
    }(J), aA)), !tA) throw new Error("An unknown error occurred whilst processing the image.");
    return tA;
  }, cA = o.__addimage__.convertBase64ToBinaryString = function(T, _) {
    var z;
    _ = typeof _ != "boolean" || _;
    var J, tA = "";
    if (typeof T == "string") {
      J = (z = M(T)) !== null ? z.data : T;
      try {
        tA = ia(J);
      } catch (aA) {
        if (_) throw I(J) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + aA.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return tA;
  };
  o.getImageProperties = function(T) {
    var _, z, J = "";
    if (y(T) && (T = C(T)), typeof T == "string" && c(T) === t && ((J = cA(T, !1)) === "" && (J = o.loadFile(T) || ""), T = J), z = c(T), !l(z)) throw new Error("addImage does not support files of type '" + z + "', please ensure that a plugin for '" + z + "' support is added.");
    if (!R() || T instanceof Uint8Array || (T = AA(T)), !(_ = this["process" + z.toUpperCase()](T))) throw new Error("An unknown error occurred whilst processing the image");
    return _.fileType = z, _;
  };
})(Ue.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t = function(n) {
    if (n !== void 0 && n != "") return !0;
  };
  Ue.API.events.push(["addPage", function(n) {
    this.internal.getPageInfo(n.pageNumber).pageContext.annotations = [];
  }]), o.events.push(["putPage", function(n) {
    for (var c, d, u, p = this.internal.getCoordinateString, v = this.internal.getVerticalCoordinateString, f = this.internal.getPageInfoByObjId(n.objId), m = n.pageContext.annotations, l = !1, y = 0; y < m.length && !l; y++) switch ((c = m[y]).type) {
      case "link":
        (t(c.options.url) || t(c.options.pageNumber)) && (l = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        l = !0;
    }
    if (l != 0) {
      this.internal.write("/Annots [");
      for (var C = 0; C < m.length; C++) {
        c = m[C];
        var g = this.internal.pdfEscape, L = this.internal.getEncryptor(n.objId);
        switch (c.type) {
          case "reference":
            this.internal.write(" " + c.object.objId + " 0 R ");
            break;
          case "text":
            var E = this.internal.newAdditionalObject(), x = this.internal.newAdditionalObject(), b = this.internal.getEncryptor(E.objId), U = c.title || "Note";
            u = "<</Type /Annot /Subtype /Text " + (d = "/Rect [" + p(c.bounds.x) + " " + v(c.bounds.y + c.bounds.h) + " " + p(c.bounds.x + c.bounds.w) + " " + v(c.bounds.y) + "] ") + "/Contents (" + g(b(c.contents)) + ")", u += " /Popup " + x.objId + " 0 R", u += " /P " + f.objId + " 0 R", u += " /T (" + g(b(U)) + ") >>", E.content = u;
            var I = E.objId + " 0 R";
            u = "<</Type /Annot /Subtype /Popup " + (d = "/Rect [" + p(c.bounds.x + 30) + " " + v(c.bounds.y + c.bounds.h) + " " + p(c.bounds.x + c.bounds.w + 30) + " " + v(c.bounds.y) + "] ") + " /Parent " + I, c.open && (u += " /Open true"), u += " >>", x.content = u, this.internal.write(E.objId, "0 R", x.objId, "0 R");
            break;
          case "freetext":
            d = "/Rect [" + p(c.bounds.x) + " " + v(c.bounds.y) + " " + p(c.bounds.x + c.bounds.w) + " " + v(c.bounds.y + c.bounds.h) + "] ";
            var M = c.color || "#000000";
            u = "<</Type /Annot /Subtype /FreeText " + d + "/Contents (" + g(L(c.contents)) + ")", u += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + M + ")", u += " /Border [0 0 0]", u += " >>", this.internal.write(u);
            break;
          case "link":
            if (c.options.name) {
              var R = this.annotations._nameMap[c.options.name];
              c.options.pageNumber = R.page, c.options.top = R.y;
            } else c.options.top || (c.options.top = 0);
            if (d = "/Rect [" + c.finalBounds.x + " " + c.finalBounds.y + " " + c.finalBounds.w + " " + c.finalBounds.h + "] ", u = "", c.options.url) u = "<</Type /Annot /Subtype /Link " + d + "/Border [0 0 0] /A <</S /URI /URI (" + g(L(c.options.url)) + ") >>";
            else if (c.options.pageNumber)
              switch (u = "<</Type /Annot /Subtype /Link " + d + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(c.options.pageNumber).objId + " 0 R", c.options.magFactor = c.options.magFactor || "XYZ", c.options.magFactor) {
                case "Fit":
                  u += " /Fit]";
                  break;
                case "FitH":
                  u += " /FitH " + c.options.top + "]";
                  break;
                case "FitV":
                  c.options.left = c.options.left || 0, u += " /FitV " + c.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var Z = v(c.options.top);
                  c.options.left = c.options.left || 0, c.options.zoom === void 0 && (c.options.zoom = 0), u += " /XYZ " + c.options.left + " " + Z + " " + c.options.zoom + "]";
              }
            u != "" && (u += " >>", this.internal.write(u));
        }
      }
      this.internal.write("]");
    }
  }]), o.createAnnotation = function(n) {
    var c = this.internal.getCurrentPageInfo();
    switch (n.type) {
      case "link":
        this.link(n.bounds.x, n.bounds.y, n.bounds.w, n.bounds.h, n);
        break;
      case "text":
      case "freetext":
        c.pageContext.annotations.push(n);
    }
  }, o.link = function(n, c, d, u, p) {
    var v = this.internal.getCurrentPageInfo(), f = this.internal.getCoordinateString, m = this.internal.getVerticalCoordinateString;
    v.pageContext.annotations.push({ finalBounds: { x: f(n), y: m(c), w: f(n + d), h: m(c + u) }, options: p, type: "link" });
  }, o.textWithLink = function(n, c, d, u) {
    var p, v, f = this.getTextWidth(n), m = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (u.maxWidth !== void 0) {
      v = u.maxWidth;
      var l = this.splitTextToSize(n, v).length;
      p = Math.ceil(m * l);
    } else v = f, p = m;
    return this.text(n, c, d, u), d += 0.2 * m, u.align === "center" && (c -= f / 2), u.align === "right" && (c -= f), this.link(c, d - m, v, p, u), f;
  }, o.getTextWidth = function(n) {
    var c = this.internal.getFontSize();
    return this.getStringUnitWidth(n) * c / this.internal.scaleFactor;
  };
}(Ue.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, n = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, c = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, d = [1570, 1571, 1573, 1575];
  o.__arabicParser__ = {};
  var u = o.__arabicParser__.isInArabicSubstitutionA = function(E) {
    return t[E.charCodeAt(0)] !== void 0;
  }, p = o.__arabicParser__.isArabicLetter = function(E) {
    return typeof E == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(E);
  }, v = o.__arabicParser__.isArabicEndLetter = function(E) {
    return p(E) && u(E) && t[E.charCodeAt(0)].length <= 2;
  }, f = o.__arabicParser__.isArabicAlfLetter = function(E) {
    return p(E) && d.indexOf(E.charCodeAt(0)) >= 0;
  };
  o.__arabicParser__.arabicLetterHasIsolatedForm = function(E) {
    return p(E) && u(E) && t[E.charCodeAt(0)].length >= 1;
  };
  var m = o.__arabicParser__.arabicLetterHasFinalForm = function(E) {
    return p(E) && u(E) && t[E.charCodeAt(0)].length >= 2;
  };
  o.__arabicParser__.arabicLetterHasInitialForm = function(E) {
    return p(E) && u(E) && t[E.charCodeAt(0)].length >= 3;
  };
  var l = o.__arabicParser__.arabicLetterHasMedialForm = function(E) {
    return p(E) && u(E) && t[E.charCodeAt(0)].length == 4;
  }, y = o.__arabicParser__.resolveLigatures = function(E) {
    var x = 0, b = n, U = "", I = 0;
    for (x = 0; x < E.length; x += 1) b[E.charCodeAt(x)] !== void 0 ? (I++, typeof (b = b[E.charCodeAt(x)]) == "number" && (U += String.fromCharCode(b), b = n, I = 0), x === E.length - 1 && (b = n, U += E.charAt(x - (I - 1)), x -= I - 1, I = 0)) : (b = n, U += E.charAt(x - I), x -= I, I = 0);
    return U;
  };
  o.__arabicParser__.isArabicDiacritic = function(E) {
    return E !== void 0 && c[E.charCodeAt(0)] !== void 0;
  };
  var C = o.__arabicParser__.getCorrectForm = function(E, x, b) {
    return p(E) ? u(E) === !1 ? -1 : !m(E) || !p(x) && !p(b) || !p(b) && v(x) || v(E) && !p(x) || v(E) && f(x) || v(E) && v(x) ? 0 : l(E) && p(x) && !v(x) && p(b) && m(b) ? 3 : v(E) || !p(b) ? 1 : 2 : -1;
  }, g = function(E) {
    var x = 0, b = 0, U = 0, I = "", M = "", R = "", Z = (E = E || "").split("\\s+"), AA = [];
    for (x = 0; x < Z.length; x += 1) {
      for (AA.push(""), b = 0; b < Z[x].length; b += 1) I = Z[x][b], M = Z[x][b - 1], R = Z[x][b + 1], p(I) ? (U = C(I, M, R), AA[x] += U !== -1 ? String.fromCharCode(t[I.charCodeAt(0)][U]) : I) : AA[x] += I;
      AA[x] = y(AA[x]);
    }
    return AA.join(" ");
  }, L = o.__arabicParser__.processArabic = o.processArabic = function() {
    var E, x = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, b = [];
    if (Array.isArray(x)) {
      var U = 0;
      for (b = [], U = 0; U < x.length; U += 1) Array.isArray(x[U]) ? b.push([g(x[U][0]), x[U][1], x[U][2]]) : b.push([g(x[U])]);
      E = b;
    } else E = g(x);
    return typeof arguments[0] == "string" ? E : (arguments[0].text = E, arguments[0]);
  };
  o.events.push(["preProcessText", L]);
}(Ue.API), Ue.API.autoPrint = function(o) {
  var t;
  switch ((o = o || {}).variant = o.variant || "non-conform", o.variant) {
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
function(o) {
  var t = function() {
    var n = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return n;
    }, set: function(v) {
      n = v;
    } });
    var c = 150;
    Object.defineProperty(this, "width", { get: function() {
      return c;
    }, set: function(v) {
      c = isNaN(v) || Number.isInteger(v) === !1 || v < 0 ? 150 : v, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = c + 1);
    } });
    var d = 300;
    Object.defineProperty(this, "height", { get: function() {
      return d;
    }, set: function(v) {
      d = isNaN(v) || Number.isInteger(v) === !1 || v < 0 ? 300 : v, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = d + 1);
    } });
    var u = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return u;
    }, set: function(v) {
      u = v;
    } });
    var p = {};
    Object.defineProperty(this, "style", { get: function() {
      return p;
    }, set: function(v) {
      p = v;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  t.prototype.getContext = function(n, c) {
    var d;
    if ((n = n || "2d") !== "2d") return null;
    for (d in c) this.pdf.context2d.hasOwnProperty(d) && (this.pdf.context2d[d] = c[d]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, t.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, o.events.push(["initialized", function() {
    this.canvas = new t(), this.canvas.pdf = this;
  }]);
}(Ue.API), function(o) {
  var t = { left: 0, top: 0, bottom: 0, right: 0 }, n = !1, c = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), d.call(this));
  }, d = function() {
    this.internal.__cell__.lastCell = new u(), this.internal.__cell__.pages = 1;
  }, u = function() {
    var f = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return f;
    }, set: function(E) {
      f = E;
    } });
    var m = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return m;
    }, set: function(E) {
      m = E;
    } });
    var l = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return l;
    }, set: function(E) {
      l = E;
    } });
    var y = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return y;
    }, set: function(E) {
      y = E;
    } });
    var C = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return C;
    }, set: function(E) {
      C = E;
    } });
    var g = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return g;
    }, set: function(E) {
      g = E;
    } });
    var L = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return L;
    }, set: function(E) {
      L = E;
    } }), this;
  };
  u.prototype.clone = function() {
    return new u(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, u.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, o.setHeaderFunction = function(f) {
    return c.call(this), this.internal.__cell__.headerFunction = typeof f == "function" ? f : void 0, this;
  }, o.getTextDimensions = function(f, m) {
    c.call(this);
    var l = (m = m || {}).fontSize || this.getFontSize(), y = m.font || this.getFont(), C = m.scaleFactor || this.internal.scaleFactor, g = 0, L = 0, E = 0, x = this;
    if (!Array.isArray(f) && typeof f != "string") {
      if (typeof f != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      f = String(f);
    }
    var b = m.maxWidth;
    b > 0 ? typeof f == "string" ? f = this.splitTextToSize(f, b) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(I, M) {
      return I.concat(x.splitTextToSize(M, b));
    }, [])) : f = Array.isArray(f) ? f : [f];
    for (var U = 0; U < f.length; U++) g < (E = this.getStringUnitWidth(f[U], { font: y }) * l) && (g = E);
    return g !== 0 && (L = f.length), { w: g /= C, h: Math.max((L * l * this.getLineHeightFactor() - l * (this.getLineHeightFactor() - 1)) / C, 0) };
  }, o.cellAddPage = function() {
    c.call(this), this.addPage();
    var f = this.internal.__cell__.margins || t;
    return this.internal.__cell__.lastCell = new u(f.left, f.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var p = o.cell = function() {
    var f;
    f = arguments[0] instanceof u ? arguments[0] : new u(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), c.call(this);
    var m = this.internal.__cell__.lastCell, l = this.internal.__cell__.padding, y = this.internal.__cell__.margins || t, C = this.internal.__cell__.tableHeaderRow, g = this.internal.__cell__.printHeaders;
    return m.lineNumber !== void 0 && (m.lineNumber === f.lineNumber ? (f.x = (m.x || 0) + (m.width || 0), f.y = m.y || 0) : m.y + m.height + f.height + y.bottom > this.getPageHeight() ? (this.cellAddPage(), f.y = y.top, g && C && (this.printHeaderRow(f.lineNumber, !0), f.y += C[0].height)) : f.y = m.y + m.height || f.y), f.text[0] !== void 0 && (this.rect(f.x, f.y, f.width, f.height, n === !0 ? "FD" : void 0), f.align === "right" ? this.text(f.text, f.x + f.width - l, f.y + l, { align: "right", baseline: "top" }) : f.align === "center" ? this.text(f.text, f.x + f.width / 2, f.y + l, { align: "center", baseline: "top", maxWidth: f.width - l - l }) : this.text(f.text, f.x + l, f.y + l, { align: "left", baseline: "top", maxWidth: f.width - l - l })), this.internal.__cell__.lastCell = f, this;
  };
  o.table = function(f, m, l, y, C) {
    if (c.call(this), !l) throw new Error("No data for PDF table.");
    var g, L, E, x, b = [], U = [], I = [], M = {}, R = {}, Z = [], AA = [], V = (C = C || {}).autoSize || !1, dA = C.printHeaders !== !1, cA = C.css && C.css["font-size"] !== void 0 ? 16 * C.css["font-size"] : C.fontSize || 12, T = C.margins || Object.assign({ width: this.getPageWidth() }, t), _ = typeof C.padding == "number" ? C.padding : 3, z = C.headerBackgroundColor || "#c8c8c8", J = C.headerTextColor || "#000";
    if (d.call(this), this.internal.__cell__.printHeaders = dA, this.internal.__cell__.margins = T, this.internal.__cell__.table_font_size = cA, this.internal.__cell__.padding = _, this.internal.__cell__.headerBackgroundColor = z, this.internal.__cell__.headerTextColor = J, this.setFontSize(cA), y == null) U = b = Object.keys(l[0]), I = b.map(function() {
      return "left";
    });
    else if (Array.isArray(y) && st(y[0]) === "object") for (b = y.map(function(bA) {
      return bA.name;
    }), U = y.map(function(bA) {
      return bA.prompt || bA.name || "";
    }), I = y.map(function(bA) {
      return bA.align || "left";
    }), g = 0; g < y.length; g += 1) R[y[g].name] = y[g].width * (19.049976 / 25.4);
    else Array.isArray(y) && typeof y[0] == "string" && (U = b = y, I = b.map(function() {
      return "left";
    }));
    if (V || Array.isArray(y) && typeof y[0] == "string") for (g = 0; g < b.length; g += 1) {
      for (M[x = b[g]] = l.map(function(bA) {
        return bA[x];
      }), this.setFont(void 0, "bold"), Z.push(this.getTextDimensions(U[g], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), L = M[x], this.setFont(void 0, "normal"), E = 0; E < L.length; E += 1) Z.push(this.getTextDimensions(L[E], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      R[x] = Math.max.apply(null, Z) + _ + _, Z = [];
    }
    if (dA) {
      var tA = {};
      for (g = 0; g < b.length; g += 1) tA[b[g]] = {}, tA[b[g]].text = U[g], tA[b[g]].align = I[g];
      var aA = v.call(this, tA, R);
      AA = b.map(function(bA) {
        return new u(f, m, R[bA], aA, tA[bA].text, void 0, tA[bA].align);
      }), this.setTableHeaderRow(AA), this.printHeaderRow(1, !1);
    }
    var vA = y.reduce(function(bA, PA) {
      return bA[PA.name] = PA.align, bA;
    }, {});
    for (g = 0; g < l.length; g += 1) {
      "rowStart" in C && C.rowStart instanceof Function && C.rowStart({ row: g, data: l[g] }, this);
      var hA = v.call(this, l[g], R);
      for (E = 0; E < b.length; E += 1) {
        var UA = l[g][b[E]];
        "cellStart" in C && C.cellStart instanceof Function && C.cellStart({ row: g, col: E, data: UA }, this), p.call(this, new u(f, m, R[b[E]], hA, UA, g + 2, vA[b[E]]));
      }
    }
    return this.internal.__cell__.table_x = f, this.internal.__cell__.table_y = m, this;
  };
  var v = function(f, m) {
    var l = this.internal.__cell__.padding, y = this.internal.__cell__.table_font_size, C = this.internal.scaleFactor;
    return Object.keys(f).map(function(g) {
      var L = f[g];
      return this.splitTextToSize(L.hasOwnProperty("text") ? L.text : L, m[g] - l - l);
    }, this).map(function(g) {
      return this.getLineHeightFactor() * g.length * y / C + l + l;
    }, this).reduce(function(g, L) {
      return Math.max(g, L);
    }, 0);
  };
  o.setTableHeaderRow = function(f) {
    c.call(this), this.internal.__cell__.tableHeaderRow = f;
  }, o.printHeaderRow = function(f, m) {
    if (c.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var l;
    if (n = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var y = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new u(y[0], y[1], y[2], y[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var C = [], g = 0; g < this.internal.__cell__.tableHeaderRow.length; g += 1) {
      l = this.internal.__cell__.tableHeaderRow[g].clone(), m && (l.y = this.internal.__cell__.margins.top || 0, C.push(l)), l.lineNumber = f;
      var L = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), p.call(this, l), this.setTextColor(L);
    }
    C.length > 0 && this.setTableHeaderRow(C), this.setFont(void 0, "normal"), n = !1;
  };
}(Ue.API);
var Ku = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, Ru = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], vl = _u(Ru), ku = [100, 200, 300, 400, 500, 600, 700, 800, 900], Rh = _u(ku);
function ml(o) {
  var t = o.family.replace(/"|'/g, "").toLowerCase(), n = function(u) {
    return Ku[u = u || "normal"] ? u : "normal";
  }(o.style), c = function(u) {
    if (!u) return 400;
    if (typeof u == "number") return u >= 100 && u <= 900 && u % 100 == 0 ? u : 400;
    if (/^\d00$/.test(u)) return parseInt(u);
    switch (u) {
      case "bold":
        return 700;
      case "normal":
      default:
        return 400;
    }
  }(o.weight), d = function(u) {
    return typeof vl[u = u || "normal"] == "number" ? u : "normal";
  }(o.stretch);
  return { family: t, style: n, weight: c, stretch: d, src: o.src || [], ref: o.ref || { name: t, style: [d, n, c].join(" ") } };
}
function gu(o, t, n, c) {
  var d;
  for (d = n; d >= 0 && d < t.length; d += c) if (o[t[d]]) return o[t[d]];
  for (d = n; d >= 0 && d < t.length; d -= c) if (o[t[d]]) return o[t[d]];
}
var kh = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, pu = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function Bu(o) {
  return [o.stretch, o.style, o.weight, o.family].join(" ");
}
function Gh(o, t, n) {
  for (var c = (n = n || {}).defaultFontFamily || "times", d = Object.assign({}, kh, n.genericFontFamilies || {}), u = null, p = null, v = 0; v < t.length; ++v) if (d[(u = ml(t[v])).family] && (u.family = d[u.family]), o.hasOwnProperty(u.family)) {
    p = o[u.family];
    break;
  }
  if (!(p = p || o[c])) throw new Error("Could not find a font-family for the rule '" + Bu(u) + "' and default family '" + c + "'.");
  if (p = function(f, m) {
    if (m[f]) return m[f];
    var l = vl[f], y = l <= vl.normal ? -1 : 1, C = gu(m, Ru, l, y);
    if (!C) throw new Error("Could not find a matching font-stretch value for " + f);
    return C;
  }(u.stretch, p), p = function(f, m) {
    if (m[f]) return m[f];
    for (var l = Ku[f], y = 0; y < l.length; ++y) if (m[l[y]]) return m[l[y]];
    throw new Error("Could not find a matching font-style for " + f);
  }(u.style, p), !(p = function(f, m) {
    if (m[f]) return m[f];
    if (f === 400 && m[500]) return m[500];
    if (f === 500 && m[400]) return m[400];
    var l = Rh[f], y = gu(m, ku, l, f < 400 ? -1 : 1);
    if (!y) throw new Error("Could not find a matching font-weight for value " + f);
    return y;
  }(u.weight, p))) throw new Error("Failed to resolve a font for the rule '" + Bu(u) + "'.");
  return p;
}
function wu(o) {
  return o.trimLeft();
}
function Vh(o, t) {
  for (var n = 0; n < o.length; ) {
    if (o.charAt(n) === t) return [o.substring(0, n), o.substring(n + 1)];
    n += 1;
  }
  return null;
}
function Wh(o) {
  var t = o.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return t === null ? null : [t[0], o.substring(t[0].length)];
}
var ic, vu, mu, il = ["times"];
(function(o) {
  var t, n, c, d, u, p, v, f, m, l = function(j) {
    return j = j || {}, this.isStrokeTransparent = j.isStrokeTransparent || !1, this.strokeOpacity = j.strokeOpacity || 1, this.strokeStyle = j.strokeStyle || "#000000", this.fillStyle = j.fillStyle || "#000000", this.isFillTransparent = j.isFillTransparent || !1, this.fillOpacity = j.fillOpacity || 1, this.font = j.font || "10px sans-serif", this.textBaseline = j.textBaseline || "alphabetic", this.textAlign = j.textAlign || "left", this.lineWidth = j.lineWidth || 1, this.lineJoin = j.lineJoin || "miter", this.lineCap = j.lineCap || "butt", this.path = j.path || [], this.transform = j.transform !== void 0 ? j.transform.clone() : new f(), this.globalCompositeOperation = j.globalCompositeOperation || "normal", this.globalAlpha = j.globalAlpha || 1, this.clip_path = j.clip_path || [], this.currentPoint = j.currentPoint || new p(), this.miterLimit = j.miterLimit || 10, this.lastPoint = j.lastPoint || new p(), this.lineDashOffset = j.lineDashOffset || 0, this.lineDash = j.lineDash || [], this.margin = j.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = j.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof j.ignoreClearRect != "boolean" || j.ignoreClearRect, this;
  };
  o.events.push(["initialized", function() {
    this.context2d = new y(this), t = this.internal.f2, n = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString, d = this.internal.getHorizontalCoordinate, u = this.internal.getVerticalCoordinate, p = this.internal.Point, v = this.internal.Rectangle, f = this.internal.Matrix, m = new l();
  }]);
  var y = function(j) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var X = j;
    Object.defineProperty(this, "pdf", { get: function() {
      return X;
    } });
    var q = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return q;
    }, set: function(LA) {
      q = !!LA;
    } });
    var eA = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return eA;
    }, set: function(LA) {
      eA = !!LA;
    } });
    var uA = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return uA;
    }, set: function(LA) {
      isNaN(LA) || (uA = LA);
    } });
    var gA = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return gA;
    }, set: function(LA) {
      isNaN(LA) || (gA = LA);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return m.margin;
    }, set: function(LA) {
      var $;
      typeof LA == "number" ? $ = [LA, LA, LA, LA] : (($ = new Array(4))[0] = LA[0], $[1] = LA.length >= 2 ? LA[1] : $[0], $[2] = LA.length >= 3 ? LA[2] : $[0], $[3] = LA.length >= 4 ? LA[3] : $[1]), m.margin = $;
    } });
    var FA = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return FA;
    }, set: function(LA) {
      FA = LA;
    } });
    var QA = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return QA;
    }, set: function(LA) {
      QA = LA;
    } });
    var DA = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return DA;
    }, set: function(LA) {
      DA = LA;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return m;
    }, set: function(LA) {
      LA instanceof l && (m = LA);
    } }), Object.defineProperty(this, "path", { get: function() {
      return m.path;
    }, set: function(LA) {
      m.path = LA;
    } });
    var KA = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return KA;
    }, set: function(LA) {
      KA = LA;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(LA) {
      var $;
      $ = C(LA), this.ctx.fillStyle = $.style, this.ctx.isFillTransparent = $.a === 0, this.ctx.fillOpacity = $.a, this.pdf.setFillColor($.r, $.g, $.b, { a: $.a }), this.pdf.setTextColor($.r, $.g, $.b, { a: $.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(LA) {
      var $ = C(LA);
      this.ctx.strokeStyle = $.style, this.ctx.isStrokeTransparent = $.a === 0, this.ctx.strokeOpacity = $.a, $.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : ($.a, this.pdf.setDrawColor($.r, $.g, $.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(LA) {
      ["butt", "round", "square"].indexOf(LA) !== -1 && (this.ctx.lineCap = LA, this.pdf.setLineCap(LA));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(LA) {
      isNaN(LA) || (this.ctx.lineWidth = LA, this.pdf.setLineWidth(LA));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(LA) {
      ["bevel", "round", "miter"].indexOf(LA) !== -1 && (this.ctx.lineJoin = LA, this.pdf.setLineJoin(LA));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(LA) {
      isNaN(LA) || (this.ctx.miterLimit = LA, this.pdf.setMiterLimit(LA));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(LA) {
      this.ctx.textBaseline = LA;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(LA) {
      ["right", "end", "center", "left", "start"].indexOf(LA) !== -1 && (this.ctx.textAlign = LA);
    } });
    var RA = null;
    function GA(LA, $) {
      if (RA === null) {
        var be = function(zA) {
          var NA = [];
          return Object.keys(zA).forEach(function(WA) {
            zA[WA].forEach(function(YA) {
              var XA = null;
              switch (YA) {
                case "bold":
                  XA = { family: WA, weight: "bold" };
                  break;
                case "italic":
                  XA = { family: WA, style: "italic" };
                  break;
                case "bolditalic":
                  XA = { family: WA, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  XA = { family: WA };
              }
              XA !== null && (XA.ref = { name: WA, style: YA }, NA.push(XA));
            });
          }), NA;
        }(LA.getFontList());
        RA = function(zA) {
          for (var NA = {}, WA = 0; WA < zA.length; ++WA) {
            var YA = ml(zA[WA]), XA = YA.family, ae = YA.stretch, ye = YA.style, de = YA.weight;
            NA[XA] = NA[XA] || {}, NA[XA][ae] = NA[XA][ae] || {}, NA[XA][ae][ye] = NA[XA][ae][ye] || {}, NA[XA][ae][ye][de] = YA;
          }
          return NA;
        }(be.concat($));
      }
      return RA;
    }
    var ce = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return ce;
    }, set: function(LA) {
      RA = null, ce = LA;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(LA) {
      var $;
      if (this.ctx.font = LA, ($ = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(LA)) !== null) {
        var be = $[1], zA = ($[2], $[3]), NA = $[4], WA = ($[5], $[6]), YA = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(NA)[2];
        NA = Math.floor(YA === "px" ? parseFloat(NA) * this.pdf.internal.scaleFactor : YA === "em" ? parseFloat(NA) * this.pdf.getFontSize() : parseFloat(NA) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(NA);
        var XA = function(we) {
          var BA, mA, TA = [], MA = we.trim();
          if (MA === "") return il;
          if (MA in pu) return [pu[MA]];
          for (; MA !== ""; ) {
            switch (mA = null, BA = (MA = wu(MA)).charAt(0)) {
              case '"':
              case "'":
                mA = Vh(MA.substring(1), BA);
                break;
              default:
                mA = Wh(MA);
            }
            if (mA === null || (TA.push(mA[0]), (MA = wu(mA[1])) !== "" && MA.charAt(0) !== ",")) return il;
            MA = MA.replace(/^,/, "");
          }
          return TA;
        }(WA);
        if (this.fontFaces) {
          var ae = Gh(GA(this.pdf, this.fontFaces), XA.map(function(we) {
            return { family: we, stretch: "normal", weight: zA, style: be };
          }));
          this.pdf.setFont(ae.ref.name, ae.ref.style);
        } else {
          var ye = "";
          (zA === "bold" || parseInt(zA, 10) >= 700 || be === "bold") && (ye = "bold"), be === "italic" && (ye += "italic"), ye.length === 0 && (ye = "normal");
          for (var de = "", Ce = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, Te = 0; Te < XA.length; Te++) {
            if (this.pdf.internal.getFont(XA[Te], ye, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              de = XA[Te];
              break;
            }
            if (ye === "bolditalic" && this.pdf.internal.getFont(XA[Te], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) de = XA[Te], ye = "bold";
            else if (this.pdf.internal.getFont(XA[Te], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              de = XA[Te], ye = "normal";
              break;
            }
          }
          if (de === "") {
            for (var Ee = 0; Ee < XA.length; Ee++) if (Ce[XA[Ee]]) {
              de = Ce[XA[Ee]];
              break;
            }
          }
          de = de === "" ? "Times" : de, this.pdf.setFont(de, ye);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(LA) {
      this.ctx.globalCompositeOperation = LA;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(LA) {
      this.ctx.globalAlpha = LA;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(LA) {
      this.ctx.lineDashOffset = LA, PA.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(LA) {
      this.ctx.lineDash = LA, PA.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(LA) {
      this.ctx.ignoreClearRect = !!LA;
    } });
  };
  y.prototype.setLineDash = function(j) {
    this.lineDash = j;
  }, y.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, y.prototype.fill = function() {
    M.call(this, "fill", !1);
  }, y.prototype.stroke = function() {
    M.call(this, "stroke", !1);
  }, y.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, y.prototype.moveTo = function(j, X) {
    if (isNaN(j) || isNaN(X)) throw ot.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var q = this.ctx.transform.applyToPoint(new p(j, X));
    this.path.push({ type: "mt", x: q.x, y: q.y }), this.ctx.lastPoint = new p(j, X);
  }, y.prototype.closePath = function() {
    var j = new p(0, 0), X = 0;
    for (X = this.path.length - 1; X !== -1; X--) if (this.path[X].type === "begin" && st(this.path[X + 1]) === "object" && typeof this.path[X + 1].x == "number") {
      j = new p(this.path[X + 1].x, this.path[X + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new p(j.x, j.y);
  }, y.prototype.lineTo = function(j, X) {
    if (isNaN(j) || isNaN(X)) throw ot.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var q = this.ctx.transform.applyToPoint(new p(j, X));
    this.path.push({ type: "lt", x: q.x, y: q.y }), this.ctx.lastPoint = new p(q.x, q.y);
  }, y.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), M.call(this, null, !0);
  }, y.prototype.quadraticCurveTo = function(j, X, q, eA) {
    if (isNaN(q) || isNaN(eA) || isNaN(j) || isNaN(X)) throw ot.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var uA = this.ctx.transform.applyToPoint(new p(q, eA)), gA = this.ctx.transform.applyToPoint(new p(j, X));
    this.path.push({ type: "qct", x1: gA.x, y1: gA.y, x: uA.x, y: uA.y }), this.ctx.lastPoint = new p(uA.x, uA.y);
  }, y.prototype.bezierCurveTo = function(j, X, q, eA, uA, gA) {
    if (isNaN(uA) || isNaN(gA) || isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA)) throw ot.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var FA = this.ctx.transform.applyToPoint(new p(uA, gA)), QA = this.ctx.transform.applyToPoint(new p(j, X)), DA = this.ctx.transform.applyToPoint(new p(q, eA));
    this.path.push({ type: "bct", x1: QA.x, y1: QA.y, x2: DA.x, y2: DA.y, x: FA.x, y: FA.y }), this.ctx.lastPoint = new p(FA.x, FA.y);
  }, y.prototype.arc = function(j, X, q, eA, uA, gA) {
    if (isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA) || isNaN(uA)) throw ot.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (gA = !!gA, !this.ctx.transform.isIdentity) {
      var FA = this.ctx.transform.applyToPoint(new p(j, X));
      j = FA.x, X = FA.y;
      var QA = this.ctx.transform.applyToPoint(new p(0, q)), DA = this.ctx.transform.applyToPoint(new p(0, 0));
      q = Math.sqrt(Math.pow(QA.x - DA.x, 2) + Math.pow(QA.y - DA.y, 2));
    }
    Math.abs(uA - eA) >= 2 * Math.PI && (eA = 0, uA = 2 * Math.PI), this.path.push({ type: "arc", x: j, y: X, radius: q, startAngle: eA, endAngle: uA, counterclockwise: gA });
  }, y.prototype.arcTo = function(j, X, q, eA, uA) {
    throw new Error("arcTo not implemented.");
  }, y.prototype.rect = function(j, X, q, eA) {
    if (isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA)) throw ot.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(j, X), this.lineTo(j + q, X), this.lineTo(j + q, X + eA), this.lineTo(j, X + eA), this.lineTo(j, X), this.lineTo(j + q, X), this.lineTo(j, X);
  }, y.prototype.fillRect = function(j, X, q, eA) {
    if (isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA)) throw ot.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!g.call(this)) {
      var uA = {};
      this.lineCap !== "butt" && (uA.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (uA.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(j, X, q, eA), this.fill(), uA.hasOwnProperty("lineCap") && (this.lineCap = uA.lineCap), uA.hasOwnProperty("lineJoin") && (this.lineJoin = uA.lineJoin);
    }
  }, y.prototype.strokeRect = function(j, X, q, eA) {
    if (isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA)) throw ot.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    L.call(this) || (this.beginPath(), this.rect(j, X, q, eA), this.stroke());
  }, y.prototype.clearRect = function(j, X, q, eA) {
    if (isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA)) throw ot.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(j, X, q, eA));
  }, y.prototype.save = function(j) {
    j = typeof j != "boolean" || j;
    for (var X = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(X), j) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var eA = new l(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = eA;
    }
  }, y.prototype.restore = function(j) {
    j = typeof j != "boolean" || j;
    for (var X = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(X), j && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, y.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var C = function(j) {
    var X, q, eA, uA;
    if (j.isCanvasGradient === !0 && (j = j.getColor()), !j) return { r: 0, g: 0, b: 0, a: 0, style: j };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(j)) X = 0, q = 0, eA = 0, uA = 0;
    else {
      var gA = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(j);
      if (gA !== null) X = parseInt(gA[1]), q = parseInt(gA[2]), eA = parseInt(gA[3]), uA = 1;
      else if ((gA = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(j)) !== null) X = parseInt(gA[1]), q = parseInt(gA[2]), eA = parseInt(gA[3]), uA = parseFloat(gA[4]);
      else {
        if (uA = 1, typeof j == "string" && j.charAt(0) !== "#") {
          var FA = new Nu(j);
          j = FA.ok ? FA.toHex() : "#000000";
        }
        j.length === 4 ? (X = j.substring(1, 2), X += X, q = j.substring(2, 3), q += q, eA = j.substring(3, 4), eA += eA) : (X = j.substring(1, 3), q = j.substring(3, 5), eA = j.substring(5, 7)), X = parseInt(X, 16), q = parseInt(q, 16), eA = parseInt(eA, 16);
      }
    }
    return { r: X, g: q, b: eA, a: uA, style: j };
  }, g = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, L = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  y.prototype.fillText = function(j, X, q, eA) {
    if (isNaN(X) || isNaN(q) || typeof j != "string") throw ot.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (eA = isNaN(eA) ? void 0 : eA, !g.call(this)) {
      var uA = hA(this.ctx.transform.rotation), gA = this.ctx.transform.scaleX;
      _.call(this, { text: j, x: X, y: q, scale: gA, angle: uA, align: this.textAlign, maxWidth: eA });
    }
  }, y.prototype.strokeText = function(j, X, q, eA) {
    if (isNaN(X) || isNaN(q) || typeof j != "string") throw ot.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!L.call(this)) {
      eA = isNaN(eA) ? void 0 : eA;
      var uA = hA(this.ctx.transform.rotation), gA = this.ctx.transform.scaleX;
      _.call(this, { text: j, x: X, y: q, scale: gA, renderingMode: "stroke", angle: uA, align: this.textAlign, maxWidth: eA });
    }
  }, y.prototype.measureText = function(j) {
    if (typeof j != "string") throw ot.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var X = this.pdf, q = this.pdf.internal.scaleFactor, eA = X.internal.getFontSize(), uA = X.getStringUnitWidth(j) * eA / X.internal.scaleFactor, gA = function(FA) {
      var QA = (FA = FA || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return QA;
      } }), this;
    };
    return new gA({ width: uA *= Math.round(96 * q / 72 * 1e4) / 1e4 });
  }, y.prototype.scale = function(j, X) {
    if (isNaN(j) || isNaN(X)) throw ot.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var q = new f(j, 0, 0, X, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(q);
  }, y.prototype.rotate = function(j) {
    if (isNaN(j)) throw ot.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var X = new f(Math.cos(j), Math.sin(j), -Math.sin(j), Math.cos(j), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(X);
  }, y.prototype.translate = function(j, X) {
    if (isNaN(j) || isNaN(X)) throw ot.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var q = new f(1, 0, 0, 1, j, X);
    this.ctx.transform = this.ctx.transform.multiply(q);
  }, y.prototype.transform = function(j, X, q, eA, uA, gA) {
    if (isNaN(j) || isNaN(X) || isNaN(q) || isNaN(eA) || isNaN(uA) || isNaN(gA)) throw ot.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var FA = new f(j, X, q, eA, uA, gA);
    this.ctx.transform = this.ctx.transform.multiply(FA);
  }, y.prototype.setTransform = function(j, X, q, eA, uA, gA) {
    j = isNaN(j) ? 1 : j, X = isNaN(X) ? 0 : X, q = isNaN(q) ? 0 : q, eA = isNaN(eA) ? 1 : eA, uA = isNaN(uA) ? 0 : uA, gA = isNaN(gA) ? 0 : gA, this.ctx.transform = new f(j, X, q, eA, uA, gA);
  };
  var E = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  y.prototype.drawImage = function(j, X, q, eA, uA, gA, FA, QA, DA) {
    var KA = this.pdf.getImageProperties(j), RA = 1, GA = 1, ce = 1, LA = 1;
    eA !== void 0 && QA !== void 0 && (ce = QA / eA, LA = DA / uA, RA = KA.width / eA * QA / eA, GA = KA.height / uA * DA / uA), gA === void 0 && (gA = X, FA = q, X = 0, q = 0), eA !== void 0 && QA === void 0 && (QA = eA, DA = uA), eA === void 0 && QA === void 0 && (QA = KA.width, DA = KA.height);
    for (var $, be = this.ctx.transform.decompose(), zA = hA(be.rotate.shx), NA = new f(), WA = (NA = (NA = (NA = NA.multiply(be.translate)).multiply(be.skew)).multiply(be.scale)).applyToRectangle(new v(gA - X * ce, FA - q * LA, eA * RA, uA * GA)), YA = x.call(this, WA), XA = [], ae = 0; ae < YA.length; ae += 1) XA.indexOf(YA[ae]) === -1 && XA.push(YA[ae]);
    if (I(XA), this.autoPaging) for (var ye = XA[0], de = XA[XA.length - 1], Ce = ye; Ce < de + 1; Ce++) {
      this.pdf.setPage(Ce);
      var Te = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Ee = Ce === 1 ? this.posY + this.margin[0] : this.margin[0], we = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], BA = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], mA = Ce === 1 ? 0 : we + (Ce - 2) * BA;
      if (this.ctx.clip_path.length !== 0) {
        var TA = this.path;
        $ = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = U($, this.posX + this.margin[3], -mA + Ee + this.ctx.prevPageLastElemOffset), R.call(this, "fill", !0), this.path = TA;
      }
      var MA = JSON.parse(JSON.stringify(WA));
      MA = U([MA], this.posX + this.margin[3], -mA + Ee + this.ctx.prevPageLastElemOffset)[0];
      var fe = (Ce > ye || Ce < de) && E.call(this);
      fe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Te, BA, null).clip().discardPath()), this.pdf.addImage(j, "JPEG", MA.x, MA.y, MA.w, MA.h, null, null, zA), fe && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(j, "JPEG", WA.x, WA.y, WA.w, WA.h, null, null, zA);
  };
  var x = function(j, X, q) {
    var eA = [];
    X = X || this.pdf.internal.pageSize.width, q = q || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var uA = this.posY + this.ctx.prevPageLastElemOffset;
    switch (j.type) {
      default:
      case "mt":
      case "lt":
        eA.push(Math.floor((j.y + uA) / q) + 1);
        break;
      case "arc":
        eA.push(Math.floor((j.y + uA - j.radius) / q) + 1), eA.push(Math.floor((j.y + uA + j.radius) / q) + 1);
        break;
      case "qct":
        var gA = UA(this.ctx.lastPoint.x, this.ctx.lastPoint.y, j.x1, j.y1, j.x, j.y);
        eA.push(Math.floor((gA.y + uA) / q) + 1), eA.push(Math.floor((gA.y + gA.h + uA) / q) + 1);
        break;
      case "bct":
        var FA = bA(this.ctx.lastPoint.x, this.ctx.lastPoint.y, j.x1, j.y1, j.x2, j.y2, j.x, j.y);
        eA.push(Math.floor((FA.y + uA) / q) + 1), eA.push(Math.floor((FA.y + FA.h + uA) / q) + 1);
        break;
      case "rect":
        eA.push(Math.floor((j.y + uA) / q) + 1), eA.push(Math.floor((j.y + j.h + uA) / q) + 1);
    }
    for (var QA = 0; QA < eA.length; QA += 1) for (; this.pdf.internal.getNumberOfPages() < eA[QA]; ) b.call(this);
    return eA;
  }, b = function() {
    var j = this.fillStyle, X = this.strokeStyle, q = this.font, eA = this.lineCap, uA = this.lineWidth, gA = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = j, this.strokeStyle = X, this.font = q, this.lineCap = eA, this.lineWidth = uA, this.lineJoin = gA;
  }, U = function(j, X, q) {
    for (var eA = 0; eA < j.length; eA++) switch (j[eA].type) {
      case "bct":
        j[eA].x2 += X, j[eA].y2 += q;
      case "qct":
        j[eA].x1 += X, j[eA].y1 += q;
      case "mt":
      case "lt":
      case "arc":
      default:
        j[eA].x += X, j[eA].y += q;
    }
    return j;
  }, I = function(j) {
    return j.sort(function(X, q) {
      return X - q;
    });
  }, M = function(j, X) {
    for (var q, eA, uA = this.fillStyle, gA = this.strokeStyle, FA = this.lineCap, QA = this.lineWidth, DA = Math.abs(QA * this.ctx.transform.scaleX), KA = this.lineJoin, RA = JSON.parse(JSON.stringify(this.path)), GA = JSON.parse(JSON.stringify(this.path)), ce = [], LA = 0; LA < GA.length; LA++) if (GA[LA].x !== void 0) for (var $ = x.call(this, GA[LA]), be = 0; be < $.length; be += 1) ce.indexOf($[be]) === -1 && ce.push($[be]);
    for (var zA = 0; zA < ce.length; zA++) for (; this.pdf.internal.getNumberOfPages() < ce[zA]; ) b.call(this);
    if (I(ce), this.autoPaging) for (var NA = ce[0], WA = ce[ce.length - 1], YA = NA; YA < WA + 1; YA++) {
      this.pdf.setPage(YA), this.fillStyle = uA, this.strokeStyle = gA, this.lineCap = FA, this.lineWidth = DA, this.lineJoin = KA;
      var XA = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], ae = YA === 1 ? this.posY + this.margin[0] : this.margin[0], ye = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], de = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Ce = YA === 1 ? 0 : ye + (YA - 2) * de;
      if (this.ctx.clip_path.length !== 0) {
        var Te = this.path;
        q = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = U(q, this.posX + this.margin[3], -Ce + ae + this.ctx.prevPageLastElemOffset), R.call(this, j, !0), this.path = Te;
      }
      if (eA = JSON.parse(JSON.stringify(RA)), this.path = U(eA, this.posX + this.margin[3], -Ce + ae + this.ctx.prevPageLastElemOffset), X === !1 || YA === 0) {
        var Ee = (YA > NA || YA < WA) && E.call(this);
        Ee && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], XA, de, null).clip().discardPath()), R.call(this, j, X), Ee && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = QA;
    }
    else this.lineWidth = DA, R.call(this, j, X), this.lineWidth = QA;
    this.path = RA;
  }, R = function(j, X) {
    if ((j !== "stroke" || X || !L.call(this)) && (j === "stroke" || X || !g.call(this))) {
      for (var q, eA, uA = [], gA = this.path, FA = 0; FA < gA.length; FA++) {
        var QA = gA[FA];
        switch (QA.type) {
          case "begin":
            uA.push({ begin: !0 });
            break;
          case "close":
            uA.push({ close: !0 });
            break;
          case "mt":
            uA.push({ start: QA, deltas: [], abs: [] });
            break;
          case "lt":
            var DA = uA.length;
            if (gA[FA - 1] && !isNaN(gA[FA - 1].x) && (q = [QA.x - gA[FA - 1].x, QA.y - gA[FA - 1].y], DA > 0)) {
              for (; DA >= 0; DA--) if (uA[DA - 1].close !== !0 && uA[DA - 1].begin !== !0) {
                uA[DA - 1].deltas.push(q), uA[DA - 1].abs.push(QA);
                break;
              }
            }
            break;
          case "bct":
            q = [QA.x1 - gA[FA - 1].x, QA.y1 - gA[FA - 1].y, QA.x2 - gA[FA - 1].x, QA.y2 - gA[FA - 1].y, QA.x - gA[FA - 1].x, QA.y - gA[FA - 1].y], uA[uA.length - 1].deltas.push(q);
            break;
          case "qct":
            var KA = gA[FA - 1].x + 2 / 3 * (QA.x1 - gA[FA - 1].x), RA = gA[FA - 1].y + 2 / 3 * (QA.y1 - gA[FA - 1].y), GA = QA.x + 2 / 3 * (QA.x1 - QA.x), ce = QA.y + 2 / 3 * (QA.y1 - QA.y), LA = QA.x, $ = QA.y;
            q = [KA - gA[FA - 1].x, RA - gA[FA - 1].y, GA - gA[FA - 1].x, ce - gA[FA - 1].y, LA - gA[FA - 1].x, $ - gA[FA - 1].y], uA[uA.length - 1].deltas.push(q);
            break;
          case "arc":
            uA.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(uA[uA.length - 1].abs) && uA[uA.length - 1].abs.push(QA);
        }
      }
      eA = X ? null : j === "stroke" ? "stroke" : "fill";
      for (var be = !1, zA = 0; zA < uA.length; zA++) if (uA[zA].arc) for (var NA = uA[zA].abs, WA = 0; WA < NA.length; WA++) {
        var YA = NA[WA];
        YA.type === "arc" ? V.call(this, YA.x, YA.y, YA.radius, YA.startAngle, YA.endAngle, YA.counterclockwise, void 0, X, !be) : z.call(this, YA.x, YA.y), be = !0;
      }
      else if (uA[zA].close === !0) this.pdf.internal.out("h"), be = !1;
      else if (uA[zA].begin !== !0) {
        var XA = uA[zA].start.x, ae = uA[zA].start.y;
        J.call(this, uA[zA].deltas, XA, ae), be = !0;
      }
      eA && dA.call(this, eA), X && cA.call(this);
    }
  }, Z = function(j) {
    var X = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, q = X * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return j - q;
      case "top":
        return j + X - q;
      case "hanging":
        return j + X - 2 * q;
      case "middle":
        return j + X / 2 - q;
      case "ideographic":
        return j;
      case "alphabetic":
      default:
        return j;
    }
  }, AA = function(j) {
    return j + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  y.prototype.createLinearGradient = function() {
    var j = function() {
    };
    return j.colorStops = [], j.addColorStop = function(X, q) {
      this.colorStops.push([X, q]);
    }, j.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, j.isCanvasGradient = !0, j;
  }, y.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, y.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var V = function(j, X, q, eA, uA, gA, FA, QA, DA) {
    for (var KA = aA.call(this, q, eA, uA, gA), RA = 0; RA < KA.length; RA++) {
      var GA = KA[RA];
      RA === 0 && (DA ? T.call(this, GA.x1 + j, GA.y1 + X) : z.call(this, GA.x1 + j, GA.y1 + X)), tA.call(this, j, X, GA.x2, GA.y2, GA.x3, GA.y3, GA.x4, GA.y4);
    }
    QA ? cA.call(this) : dA.call(this, FA);
  }, dA = function(j) {
    switch (j) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, cA = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, T = function(j, X) {
    this.pdf.internal.out(n(j) + " " + c(X) + " m");
  }, _ = function(j) {
    var X;
    switch (j.align) {
      case "right":
      case "end":
        X = "right";
        break;
      case "center":
        X = "center";
        break;
      case "left":
      case "start":
      default:
        X = "left";
    }
    var q = this.pdf.getTextDimensions(j.text), eA = Z.call(this, j.y), uA = AA.call(this, eA) - q.h, gA = this.ctx.transform.applyToPoint(new p(j.x, eA)), FA = this.ctx.transform.decompose(), QA = new f();
    QA = (QA = (QA = QA.multiply(FA.translate)).multiply(FA.skew)).multiply(FA.scale);
    for (var DA, KA, RA, GA = this.ctx.transform.applyToRectangle(new v(j.x, eA, q.w, q.h)), ce = QA.applyToRectangle(new v(j.x, uA, q.w, q.h)), LA = x.call(this, ce), $ = [], be = 0; be < LA.length; be += 1) $.indexOf(LA[be]) === -1 && $.push(LA[be]);
    if (I($), this.autoPaging) for (var zA = $[0], NA = $[$.length - 1], WA = zA; WA < NA + 1; WA++) {
      this.pdf.setPage(WA);
      var YA = WA === 1 ? this.posY + this.margin[0] : this.margin[0], XA = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ae = this.pdf.internal.pageSize.height - this.margin[2], ye = ae - this.margin[0], de = this.pdf.internal.pageSize.width - this.margin[1], Ce = de - this.margin[3], Te = WA === 1 ? 0 : XA + (WA - 2) * ye;
      if (this.ctx.clip_path.length !== 0) {
        var Ee = this.path;
        DA = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = U(DA, this.posX + this.margin[3], -1 * Te + YA), R.call(this, "fill", !0), this.path = Ee;
      }
      var we = U([JSON.parse(JSON.stringify(ce))], this.posX + this.margin[3], -Te + YA + this.ctx.prevPageLastElemOffset)[0];
      j.scale >= 0.01 && (KA = this.pdf.internal.getFontSize(), this.pdf.setFontSize(KA * j.scale), RA = this.lineWidth, this.lineWidth = RA * j.scale);
      var BA = this.autoPaging !== "text";
      if (BA || we.y + we.h <= ae) {
        if (BA || we.y >= YA && we.x <= de) {
          var mA = BA ? j.text : this.pdf.splitTextToSize(j.text, j.maxWidth || de - we.x)[0], TA = U([JSON.parse(JSON.stringify(GA))], this.posX + this.margin[3], -Te + YA + this.ctx.prevPageLastElemOffset)[0], MA = BA && (WA > zA || WA < NA) && E.call(this);
          MA && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Ce, ye, null).clip().discardPath()), this.pdf.text(mA, TA.x, TA.y, { angle: j.angle, align: X, renderingMode: j.renderingMode }), MA && this.pdf.restoreGraphicsState();
        }
      } else we.y < ae && (this.ctx.prevPageLastElemOffset += ae - we.y);
      j.scale >= 0.01 && (this.pdf.setFontSize(KA), this.lineWidth = RA);
    }
    else j.scale >= 0.01 && (KA = this.pdf.internal.getFontSize(), this.pdf.setFontSize(KA * j.scale), RA = this.lineWidth, this.lineWidth = RA * j.scale), this.pdf.text(j.text, gA.x + this.posX, gA.y + this.posY, { angle: j.angle, align: X, renderingMode: j.renderingMode, maxWidth: j.maxWidth }), j.scale >= 0.01 && (this.pdf.setFontSize(KA), this.lineWidth = RA);
  }, z = function(j, X, q, eA) {
    q = q || 0, eA = eA || 0, this.pdf.internal.out(n(j + q) + " " + c(X + eA) + " l");
  }, J = function(j, X, q) {
    return this.pdf.lines(j, X, q, null, null);
  }, tA = function(j, X, q, eA, uA, gA, FA, QA) {
    this.pdf.internal.out([t(d(q + j)), t(u(eA + X)), t(d(uA + j)), t(u(gA + X)), t(d(FA + j)), t(u(QA + X)), "c"].join(" "));
  }, aA = function(j, X, q, eA) {
    for (var uA = 2 * Math.PI, gA = Math.PI / 2; X > q; ) X -= uA;
    var FA = Math.abs(q - X);
    FA < uA && eA && (FA = uA - FA);
    for (var QA = [], DA = eA ? -1 : 1, KA = X; FA > 1e-5; ) {
      var RA = KA + DA * Math.min(FA, gA);
      QA.push(vA.call(this, j, KA, RA)), FA -= Math.abs(RA - KA), KA = RA;
    }
    return QA;
  }, vA = function(j, X, q) {
    var eA = (q - X) / 2, uA = j * Math.cos(eA), gA = j * Math.sin(eA), FA = uA, QA = -gA, DA = FA * FA + QA * QA, KA = DA + FA * uA + QA * gA, RA = 4 / 3 * (Math.sqrt(2 * DA * KA) - KA) / (FA * gA - QA * uA), GA = FA - RA * QA, ce = QA + RA * FA, LA = GA, $ = -ce, be = eA + X, zA = Math.cos(be), NA = Math.sin(be);
    return { x1: j * Math.cos(X), y1: j * Math.sin(X), x2: GA * zA - ce * NA, y2: GA * NA + ce * zA, x3: LA * zA - $ * NA, y3: LA * NA + $ * zA, x4: j * Math.cos(q), y4: j * Math.sin(q) };
  }, hA = function(j) {
    return 180 * j / Math.PI;
  }, UA = function(j, X, q, eA, uA, gA) {
    var FA = j + 0.5 * (q - j), QA = X + 0.5 * (eA - X), DA = uA + 0.5 * (q - uA), KA = gA + 0.5 * (eA - gA), RA = Math.min(j, uA, FA, DA), GA = Math.max(j, uA, FA, DA), ce = Math.min(X, gA, QA, KA), LA = Math.max(X, gA, QA, KA);
    return new v(RA, ce, GA - RA, LA - ce);
  }, bA = function(j, X, q, eA, uA, gA, FA, QA) {
    var DA, KA, RA, GA, ce, LA, $, be, zA, NA, WA, YA, XA, ae, ye = q - j, de = eA - X, Ce = uA - q, Te = gA - eA, Ee = FA - uA, we = QA - gA;
    for (KA = 0; KA < 41; KA++) zA = ($ = (RA = j + (DA = KA / 40) * ye) + DA * ((ce = q + DA * Ce) - RA)) + DA * (ce + DA * (uA + DA * Ee - ce) - $), NA = (be = (GA = X + DA * de) + DA * ((LA = eA + DA * Te) - GA)) + DA * (LA + DA * (gA + DA * we - LA) - be), KA == 0 ? (WA = zA, YA = NA, XA = zA, ae = NA) : (WA = Math.min(WA, zA), YA = Math.min(YA, NA), XA = Math.max(XA, zA), ae = Math.max(ae, NA));
    return new v(Math.round(WA), Math.round(YA), Math.round(XA - WA), Math.round(ae - YA));
  }, PA = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var j, X, q = (j = this.ctx.lineDash, X = this.ctx.lineDashOffset, JSON.stringify({ lineDash: j, lineDashOffset: X }));
      this.prevLineDash !== q && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = q);
    }
  };
})(Ue.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t = function(u) {
    var p, v, f, m, l, y, C, g, L, E;
    for (v = [], f = 0, m = (u += p = "\0\0\0\0".slice(u.length % 4 || 4)).length; m > f; f += 4) (l = (u.charCodeAt(f) << 24) + (u.charCodeAt(f + 1) << 16) + (u.charCodeAt(f + 2) << 8) + u.charCodeAt(f + 3)) !== 0 ? (y = (l = ((l = ((l = ((l = (l - (E = l % 85)) / 85) - (L = l % 85)) / 85) - (g = l % 85)) / 85) - (C = l % 85)) / 85) % 85, v.push(y + 33, C + 33, g + 33, L + 33, E + 33)) : v.push(122);
    return function(x, b) {
      for (var U = b; U > 0; U--) x.pop();
    }(v, p.length), String.fromCharCode.apply(String, v) + "~>";
  }, n = function(u) {
    var p, v, f, m, l, y = String, C = "length", g = 255, L = "charCodeAt", E = "slice", x = "replace";
    for (u[E](-2), u = u[E](0, -2)[x](/\s/g, "")[x]("z", "!!!!!"), f = [], m = 0, l = (u += p = "uuuuu"[E](u[C] % 5 || 5))[C]; l > m; m += 5) v = 52200625 * (u[L](m) - 33) + 614125 * (u[L](m + 1) - 33) + 7225 * (u[L](m + 2) - 33) + 85 * (u[L](m + 3) - 33) + (u[L](m + 4) - 33), f.push(g & v >> 24, g & v >> 16, g & v >> 8, g & v);
    return function(b, U) {
      for (var I = U; I > 0; I--) b.pop();
    }(f, p[C]), y.fromCharCode.apply(y, f);
  }, c = function(u) {
    var p = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((u = u.replace(/\s/g, "")).indexOf(">") !== -1 && (u = u.substr(0, u.indexOf(">"))), u.length % 2 && (u += "0"), p.test(u) === !1) return "";
    for (var v = "", f = 0; f < u.length; f += 2) v += String.fromCharCode("0x" + (u[f] + u[f + 1]));
    return v;
  }, d = function(u) {
    for (var p = new Uint8Array(u.length), v = u.length; v--; ) p[v] = u.charCodeAt(v);
    return u = (p = dl(p)).reduce(function(f, m) {
      return f + String.fromCharCode(m);
    }, "");
  };
  o.processDataByFilters = function(u, p) {
    var v = 0, f = u || "", m = [];
    for (typeof (p = p || []) == "string" && (p = [p]), v = 0; v < p.length; v += 1) switch (p[v]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        f = n(f), m.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        f = t(f), m.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        f = c(f), m.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        f = f.split("").map(function(l) {
          return ("0" + l.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", m.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        f = d(f), m.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + p[v] + '" is not implemented');
    }
    return { data: f, reverseChain: m.reverse().join(" ") };
  };
}(Ue.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  o.loadFile = function(t, n, c) {
    return function(d, u, p) {
      u = u !== !1, p = typeof p == "function" ? p : function() {
      };
      var v = void 0;
      try {
        v = function(f, m, l) {
          var y = new XMLHttpRequest(), C = 0, g = function(L) {
            var E = L.length, x = [], b = String.fromCharCode;
            for (C = 0; C < E; C += 1) x.push(b(255 & L.charCodeAt(C)));
            return x.join("");
          };
          if (y.open("GET", f, !m), y.overrideMimeType("text/plain; charset=x-user-defined"), m === !1 && (y.onload = function() {
            y.status === 200 ? l(g(this.responseText)) : l(void 0);
          }), y.send(null), m && y.status === 200) return g(y.responseText);
        }(d, u, p);
      } catch {
      }
      return v;
    }(t, n, c);
  }, o.loadImageFile = o.loadFile;
}(Ue.API), function(o) {
  function t() {
    return (Ie.html2canvas ? Promise.resolve(Ie.html2canvas) : import("./html2canvas-DXUZRuYK.js").then((p) => p.h)).catch(function(p) {
      return Promise.reject(new Error("Could not load html2canvas: " + p));
    }).then(function(p) {
      return p.default ? p.default : p;
    });
  }
  function n() {
    return (Ie.DOMPurify ? Promise.resolve(Ie.DOMPurify) : import("./purify.es-B7BPtUgm.js")).catch(function(p) {
      return Promise.reject(new Error("Could not load dompurify: " + p));
    }).then(function(p) {
      return p.default ? p.default : p;
    });
  }
  var c = function(p) {
    var v = st(p);
    return v === "undefined" ? "undefined" : v === "string" || p instanceof String ? "string" : v === "number" || p instanceof Number ? "number" : v === "function" || p instanceof Function ? "function" : p && p.constructor === Array ? "array" : p && p.nodeType === 1 ? "element" : v === "object" ? "object" : "unknown";
  }, d = function(p, v) {
    var f = document.createElement(p);
    for (var m in v.className && (f.className = v.className), v.innerHTML && v.dompurify && (f.innerHTML = v.dompurify.sanitize(v.innerHTML)), v.style) f.style[m] = v.style[m];
    return f;
  }, u = function p(v) {
    var f = Object.assign(p.convert(Promise.resolve()), JSON.parse(JSON.stringify(p.template))), m = p.convert(Promise.resolve(), f);
    return m = (m = m.setProgress(1, p, 1, [p])).set(v);
  };
  (u.prototype = Object.create(Promise.prototype)).constructor = u, u.convert = function(p, v) {
    return p.__proto__ = v || u.prototype, p;
  }, u.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, u.prototype.from = function(p, v) {
    return this.then(function() {
      switch (v = v || function(f) {
        switch (c(f)) {
          case "string":
            return "string";
          case "element":
            return f.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(p)) {
        case "string":
          return this.then(n).then(function(f) {
            return this.set({ src: d("div", { innerHTML: p, dompurify: f }) });
          });
        case "element":
          return this.set({ src: p });
        case "canvas":
          return this.set({ canvas: p });
        case "img":
          return this.set({ img: p });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, u.prototype.to = function(p) {
    switch (p) {
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
  }, u.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var p = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, v = function f(m, l) {
        for (var y = m.nodeType === 3 ? document.createTextNode(m.nodeValue) : m.cloneNode(!1), C = m.firstChild; C; C = C.nextSibling) l !== !0 && C.nodeType === 1 && C.nodeName === "SCRIPT" || y.appendChild(f(C, l));
        return m.nodeType === 1 && (m.nodeName === "CANVAS" ? (y.width = m.width, y.height = m.height, y.getContext("2d").drawImage(m, 0, 0)) : m.nodeName !== "TEXTAREA" && m.nodeName !== "SELECT" || (y.value = m.value), y.addEventListener("load", function() {
          y.scrollTop = m.scrollTop, y.scrollLeft = m.scrollLeft;
        }, !0)), y;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      v.tagName === "BODY" && (p.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = d("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = d("div", { className: "html2pdf__container", style: p }), this.prop.container.appendChild(v), this.prop.container.firstChild.appendChild(d("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, u.prototype.toCanvas = function() {
    var p = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(p).then(t).then(function(v) {
      var f = Object.assign({}, this.opt.html2canvas);
      return delete f.onrendered, v(this.prop.container, f);
    }).then(function(v) {
      (this.opt.html2canvas.onrendered || function() {
      })(v), this.prop.canvas = v, document.body.removeChild(this.prop.overlay);
    });
  }, u.prototype.toContext2d = function() {
    var p = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(p).then(t).then(function(v) {
      var f = this.opt.jsPDF, m = this.opt.fontFaces, l = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, y = Object.assign({ async: !0, allowTaint: !0, scale: l, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete y.onrendered, f.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, f.context2d.posX = this.opt.x, f.context2d.posY = this.opt.y, f.context2d.margin = this.opt.margin, f.context2d.fontFaces = m, m) for (var C = 0; C < m.length; ++C) {
        var g = m[C], L = g.src.find(function(E) {
          return E.format === "truetype";
        });
        L && f.addFont(L.url, g.ref.name, g.ref.style);
      }
      return y.windowHeight = y.windowHeight || 0, y.windowHeight = y.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : y.windowHeight, f.context2d.save(!0), v(this.prop.container, y);
    }).then(function(v) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(v), this.prop.canvas = v, document.body.removeChild(this.prop.overlay);
    });
  }, u.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var p = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = p;
    });
  }, u.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, u.prototype.output = function(p, v, f) {
    return (f = f || "pdf").toLowerCase() === "img" || f.toLowerCase() === "image" ? this.outputImg(p, v) : this.outputPdf(p, v);
  }, u.prototype.outputPdf = function(p, v) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(p, v);
    });
  }, u.prototype.outputImg = function(p) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (p) {
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
          throw 'Image output type "' + p + '" is not supported.';
      }
    });
  }, u.prototype.save = function(p) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(p ? { filename: p } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, u.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, u.prototype.set = function(p) {
    if (c(p) !== "object") return this;
    var v = Object.keys(p || {}).map(function(f) {
      if (f in u.template.prop) return function() {
        this.prop[f] = p[f];
      };
      switch (f) {
        case "margin":
          return this.setMargin.bind(this, p.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = p.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, p.pageSize);
        default:
          return function() {
            this.opt[f] = p[f];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(v);
    });
  }, u.prototype.get = function(p, v) {
    return this.then(function() {
      var f = p in u.template.prop ? this.prop[p] : this.opt[p];
      return v ? v(f) : f;
    });
  }, u.prototype.setMargin = function(p) {
    return this.then(function() {
      switch (c(p)) {
        case "number":
          p = [p, p, p, p];
        case "array":
          if (p.length === 2 && (p = [p[0], p[1], p[0], p[1]]), p.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = p;
    }).then(this.setPageSize);
  }, u.prototype.setPageSize = function(p) {
    function v(f, m) {
      return Math.floor(f * m / 72 * 96);
    }
    return this.then(function() {
      (p = p || Ue.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (p.inner = { width: p.width - this.opt.margin[1] - this.opt.margin[3], height: p.height - this.opt.margin[0] - this.opt.margin[2] }, p.inner.px = { width: v(p.inner.width, p.k), height: v(p.inner.height, p.k) }, p.inner.ratio = p.inner.height / p.inner.width), this.prop.pageSize = p;
    });
  }, u.prototype.setProgress = function(p, v, f, m) {
    return p != null && (this.progress.val = p), v != null && (this.progress.state = v), f != null && (this.progress.n = f), m != null && (this.progress.stack = m), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, u.prototype.updateProgress = function(p, v, f, m) {
    return this.setProgress(p ? this.progress.val + p : null, v || null, f ? this.progress.n + f : null, m ? this.progress.stack.concat(m) : null);
  }, u.prototype.then = function(p, v) {
    var f = this;
    return this.thenCore(p, v, function(m, l) {
      return f.updateProgress(null, null, 1, [m]), Promise.prototype.then.call(this, function(y) {
        return f.updateProgress(null, m), y;
      }).then(m, l).then(function(y) {
        return f.updateProgress(1), y;
      });
    });
  }, u.prototype.thenCore = function(p, v, f) {
    f = f || Promise.prototype.then, p && (p = p.bind(this)), v && (v = v.bind(this));
    var m = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : u.convert(Object.assign({}, this), Promise.prototype), l = f.call(m, p, v);
    return u.convert(l, this.__proto__);
  }, u.prototype.thenExternal = function(p, v) {
    return Promise.prototype.then.call(this, p, v);
  }, u.prototype.thenList = function(p) {
    var v = this;
    return p.forEach(function(f) {
      v = v.thenCore(f);
    }), v;
  }, u.prototype.catch = function(p) {
    p && (p = p.bind(this));
    var v = Promise.prototype.catch.call(this, p);
    return u.convert(v, this);
  }, u.prototype.catchExternal = function(p) {
    return Promise.prototype.catch.call(this, p);
  }, u.prototype.error = function(p) {
    return this.then(function() {
      throw new Error(p);
    });
  }, u.prototype.using = u.prototype.set, u.prototype.saveAs = u.prototype.save, u.prototype.export = u.prototype.output, u.prototype.run = u.prototype.then, Ue.getPageSize = function(p, v, f) {
    if (st(p) === "object") {
      var m = p;
      p = m.orientation, v = m.unit || v, f = m.format || f;
    }
    v = v || "mm", f = f || "a4", p = ("" + (p || "P")).toLowerCase();
    var l, y = ("" + f).toLowerCase(), C = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (v) {
      case "pt":
        l = 1;
        break;
      case "mm":
        l = 72 / 25.4;
        break;
      case "cm":
        l = 72 / 2.54;
        break;
      case "in":
        l = 72;
        break;
      case "px":
        l = 0.75;
        break;
      case "pc":
      case "em":
        l = 12;
        break;
      case "ex":
        l = 6;
        break;
      default:
        throw "Invalid unit: " + v;
    }
    var g, L = 0, E = 0;
    if (C.hasOwnProperty(y)) L = C[y][1] / l, E = C[y][0] / l;
    else try {
      L = f[1], E = f[0];
    } catch {
      throw new Error("Invalid format: " + f);
    }
    if (p === "p" || p === "portrait") p = "p", E > L && (g = E, E = L, L = g);
    else {
      if (p !== "l" && p !== "landscape") throw "Invalid orientation: " + p;
      p = "l", L > E && (g = E, E = L, L = g);
    }
    return { width: E, height: L, unit: v, k: l, orientation: p };
  }, o.html = function(p, v) {
    (v = v || {}).callback = v.callback || function() {
    }, v.html2canvas = v.html2canvas || {}, v.html2canvas.canvas = v.html2canvas.canvas || this.canvas, v.jsPDF = v.jsPDF || this, v.fontFaces = v.fontFaces ? v.fontFaces.map(ml) : null;
    var f = new u(v);
    return v.worker ? f : f.from(p).doCallback();
  };
}(Ue.API), Ue.API.addJS = function(o) {
  return mu = o, this.internal.events.subscribe("postPutResources", function() {
    ic = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (ic + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), vu = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + mu + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    ic !== void 0 && vu !== void 0 && this.internal.out("/Names <</JavaScript " + ic + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t;
  o.events.push(["postPutResources", function() {
    var n = this, c = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var d = n.outline.render().split(/\r\n/), u = 0; u < d.length; u++) {
      var p = d[u], v = c.exec(p);
      if (v != null) {
        var f = v[1];
        n.internal.newObjectDeferredBegin(f, !1);
      }
      n.internal.write(p);
    }
    if (this.outline.createNamedDestinations) {
      var m = this.internal.pages.length, l = [];
      for (u = 0; u < m; u++) {
        var y = n.internal.newObject();
        l.push(y);
        var C = n.internal.getPageInfo(u + 1);
        n.internal.write("<< /D[" + C.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var g = n.internal.newObject();
      for (n.internal.write("<< /Names [ "), u = 0; u < l.length; u++) n.internal.write("(page_" + (u + 1) + ")" + l[u] + " 0 R");
      n.internal.write(" ] >>", "endobj"), t = n.internal.newObject(), n.internal.write("<< /Dests " + g + " 0 R"), n.internal.write(">>", "endobj");
    }
  }]), o.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"));
  }]), o.events.push(["initialized", function() {
    var n = this;
    n.outline = { createNamedDestinations: !1, root: { children: [] } }, n.outline.add = function(c, d, u) {
      var p = { title: d, options: u, children: [] };
      return c == null && (c = this.root), c.children.push(p), p;
    }, n.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = n, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, n.outline.genIds_r = function(c) {
      c.id = n.internal.newObjectDeferred();
      for (var d = 0; d < c.children.length; d++) this.genIds_r(c.children[d]);
    }, n.outline.renderRoot = function(c) {
      this.objStart(c), this.line("/Type /Outlines"), c.children.length > 0 && (this.line("/First " + this.makeRef(c.children[0])), this.line("/Last " + this.makeRef(c.children[c.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, c)), this.objEnd();
    }, n.outline.renderItems = function(c) {
      for (var d = this.ctx.pdf.internal.getVerticalCoordinateString, u = 0; u < c.children.length; u++) {
        var p = c.children[u];
        this.objStart(p), this.line("/Title " + this.makeString(p.title)), this.line("/Parent " + this.makeRef(c)), u > 0 && this.line("/Prev " + this.makeRef(c.children[u - 1])), u < c.children.length - 1 && this.line("/Next " + this.makeRef(c.children[u + 1])), p.children.length > 0 && (this.line("/First " + this.makeRef(p.children[0])), this.line("/Last " + this.makeRef(p.children[p.children.length - 1])));
        var v = this.count = this.count_r({ count: 0 }, p);
        if (v > 0 && this.line("/Count " + v), p.options && p.options.pageNumber) {
          var f = n.internal.getPageInfo(p.options.pageNumber);
          this.line("/Dest [" + f.objId + " 0 R /XYZ 0 " + d(0) + " 0]");
        }
        this.objEnd();
      }
      for (var m = 0; m < c.children.length; m++) this.renderItems(c.children[m]);
    }, n.outline.line = function(c) {
      this.ctx.val += c + `\r
`;
    }, n.outline.makeRef = function(c) {
      return c.id + " 0 R";
    }, n.outline.makeString = function(c) {
      return "(" + n.internal.pdfEscape(c) + ")";
    }, n.outline.objStart = function(c) {
      this.ctx.val += `\r
` + c.id + ` 0 obj\r
<<\r
`;
    }, n.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, n.outline.count_r = function(c, d) {
      for (var u = 0; u < d.children.length; u++) c.count++, this.count_r(c, d.children[u]);
      return c.count;
    };
  }]);
}(Ue.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t = [192, 193, 194, 195, 196, 197, 198, 199];
  o.processJPEG = function(n, c, d, u, p, v) {
    var f, m = this.decode.DCT_DECODE, l = null;
    if (typeof n == "string" || this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) {
      switch (n = p || n, n = this.__addimage__.isArrayBuffer(n) ? new Uint8Array(n) : n, (f = function(y) {
        for (var C, g = 256 * y.charCodeAt(4) + y.charCodeAt(5), L = y.length, E = { width: 0, height: 0, numcomponents: 1 }, x = 4; x < L; x += 2) {
          if (x += g, t.indexOf(y.charCodeAt(x + 1)) !== -1) {
            C = 256 * y.charCodeAt(x + 5) + y.charCodeAt(x + 6), E = { width: 256 * y.charCodeAt(x + 7) + y.charCodeAt(x + 8), height: C, numcomponents: y.charCodeAt(x + 9) };
            break;
          }
          g = 256 * y.charCodeAt(x + 2) + y.charCodeAt(x + 3);
        }
        return E;
      }(n = this.__addimage__.isArrayBufferView(n) ? this.__addimage__.arrayBufferToBinaryString(n) : n)).numcomponents) {
        case 1:
          v = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          v = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          v = this.color_spaces.DEVICE_RGB;
      }
      l = { data: n, width: f.width, height: f.height, colorSpace: v, bitsPerComponent: 8, filter: m, index: c, alias: d };
    }
    return l;
  };
}(Ue.API);
var Fo, oc, yu, Cu, Fu, Xh = function() {
  var o, t, n;
  function c(u) {
    var p, v, f, m, l, y, C, g, L, E, x, b, U, I;
    for (this.data = u, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, y = null; ; ) {
      switch (p = this.readUInt32(), L = (function() {
        var M, R;
        for (R = [], M = 0; M < 4; ++M) R.push(String.fromCharCode(this.data[this.pos++]));
        return R;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(p);
          break;
        case "fcTL":
          y && this.animation.frames.push(y), this.pos += 4, y = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, l = this.readUInt16(), m = this.readUInt16() || 100, y.delay = 1e3 * l / m, y.disposeOp = this.data[this.pos++], y.blendOp = this.data[this.pos++], y.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (L === "fdAT" && (this.pos += 4, p -= 4), u = (y != null ? y.data : void 0) || this.imgData, b = 0; 0 <= p ? b < p : b > p; 0 <= p ? ++b : --b) u.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (f = this.palette.length / 3, this.transparency.indexed = this.read(p), this.transparency.indexed.length > f) throw new Error("More transparent colors than palette size");
              if ((E = f - this.transparency.indexed.length) > 0) for (U = 0; 0 <= E ? U < E : U > E; 0 <= E ? ++U : --U) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(p)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(p);
          }
          break;
        case "tEXt":
          C = (x = this.read(p)).indexOf(0), g = String.fromCharCode.apply(String, x.slice(0, C)), this.text[g] = String.fromCharCode.apply(String, x.slice(C + 1));
          break;
        case "IEND":
          return y && this.animation.frames.push(y), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (I = this.colorType) === 4 || I === 6, v = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * v, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += p;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  c.prototype.read = function(u) {
    var p, v;
    for (v = [], p = 0; 0 <= u ? p < u : p > u; 0 <= u ? ++p : --p) v.push(this.data[this.pos++]);
    return v;
  }, c.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, c.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, c.prototype.decodePixels = function(u) {
    var p = this.pixelBitlength / 8, v = new Uint8Array(this.width * this.height * p), f = 0, m = this;
    if (u == null && (u = this.imgData), u.length === 0) return new Uint8Array(0);
    function l(y, C, g, L) {
      var E, x, b, U, I, M, R, Z, AA, V, dA, cA, T, _, z, J, tA, aA, vA, hA, UA, bA = Math.ceil((m.width - y) / g), PA = Math.ceil((m.height - C) / L), j = m.width == bA && m.height == PA;
      for (_ = p * bA, cA = j ? v : new Uint8Array(_ * PA), M = u.length, T = 0, x = 0; T < PA && f < M; ) {
        switch (u[f++]) {
          case 0:
            for (U = tA = 0; tA < _; U = tA += 1) cA[x++] = u[f++];
            break;
          case 1:
            for (U = aA = 0; aA < _; U = aA += 1) E = u[f++], I = U < p ? 0 : cA[x - p], cA[x++] = (E + I) % 256;
            break;
          case 2:
            for (U = vA = 0; vA < _; U = vA += 1) E = u[f++], b = (U - U % p) / p, z = T && cA[(T - 1) * _ + b * p + U % p], cA[x++] = (z + E) % 256;
            break;
          case 3:
            for (U = hA = 0; hA < _; U = hA += 1) E = u[f++], b = (U - U % p) / p, I = U < p ? 0 : cA[x - p], z = T && cA[(T - 1) * _ + b * p + U % p], cA[x++] = (E + Math.floor((I + z) / 2)) % 256;
            break;
          case 4:
            for (U = UA = 0; UA < _; U = UA += 1) E = u[f++], b = (U - U % p) / p, I = U < p ? 0 : cA[x - p], T === 0 ? z = J = 0 : (z = cA[(T - 1) * _ + b * p + U % p], J = b && cA[(T - 1) * _ + (b - 1) * p + U % p]), R = I + z - J, Z = Math.abs(R - I), V = Math.abs(R - z), dA = Math.abs(R - J), AA = Z <= V && Z <= dA ? I : V <= dA ? z : J, cA[x++] = (E + AA) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + u[f - 1]);
        }
        if (!j) {
          var X = ((C + T * L) * m.width + y) * p, q = T * _;
          for (U = 0; U < bA; U += 1) {
            for (var eA = 0; eA < p; eA += 1) v[X++] = cA[q++];
            X += (g - 1) * p;
          }
        }
        T++;
      }
    }
    return u = Uh(u), m.interlaceMethod == 1 ? (l(0, 0, 8, 8), l(4, 0, 8, 8), l(0, 4, 4, 8), l(2, 0, 4, 4), l(0, 2, 2, 4), l(1, 0, 2, 2), l(0, 1, 1, 2)) : l(0, 0, 1, 1), v;
  }, c.prototype.decodePalette = function() {
    var u, p, v, f, m, l, y, C, g;
    for (v = this.palette, l = this.transparency.indexed || [], m = new Uint8Array((l.length || 0) + v.length), f = 0, u = 0, p = y = 0, C = v.length; y < C; p = y += 3) m[f++] = v[p], m[f++] = v[p + 1], m[f++] = v[p + 2], m[f++] = (g = l[u++]) != null ? g : 255;
    return m;
  }, c.prototype.copyToImageData = function(u, p) {
    var v, f, m, l, y, C, g, L, E, x, b;
    if (f = this.colors, E = null, v = this.hasAlphaChannel, this.palette.length && (E = (b = this._decodedPalette) != null ? b : this._decodedPalette = this.decodePalette(), f = 4, v = !0), L = (m = u.data || u).length, y = E || p, l = C = 0, f === 1) for (; l < L; ) g = E ? 4 * p[l / 4] : C, x = y[g++], m[l++] = x, m[l++] = x, m[l++] = x, m[l++] = v ? y[g++] : 255, C = g;
    else for (; l < L; ) g = E ? 4 * p[l / 4] : C, m[l++] = y[g++], m[l++] = y[g++], m[l++] = y[g++], m[l++] = v ? y[g++] : 255, C = g;
  }, c.prototype.decode = function() {
    var u;
    return u = new Uint8Array(this.width * this.height * 4), this.copyToImageData(u, this.decodePixels()), u;
  };
  var d = function() {
    if (Object.prototype.toString.call(Ie) === "[object Window]") {
      try {
        t = Ie.document.createElement("canvas"), n = t.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return d(), o = function(u) {
    var p;
    if (d() === !0) return n.width = u.width, n.height = u.height, n.clearRect(0, 0, u.width, u.height), n.putImageData(u, 0, 0), (p = new Image()).src = t.toDataURL(), p;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, c.prototype.decodeFrames = function(u) {
    var p, v, f, m, l, y, C, g;
    if (this.animation) {
      for (g = [], v = l = 0, y = (C = this.animation.frames).length; l < y; v = ++l) p = C[v], f = u.createImageData(p.width, p.height), m = this.decodePixels(new Uint8Array(p.data)), this.copyToImageData(f, m), p.imageData = f, g.push(p.image = o(f));
      return g;
    }
  }, c.prototype.renderFrame = function(u, p) {
    var v, f, m;
    return v = (f = this.animation.frames)[p], m = f[p - 1], p === 0 && u.clearRect(0, 0, this.width, this.height), (m != null ? m.disposeOp : void 0) === 1 ? u.clearRect(m.xOffset, m.yOffset, m.width, m.height) : (m != null ? m.disposeOp : void 0) === 2 && u.putImageData(m.imageData, m.xOffset, m.yOffset), v.blendOp === 0 && u.clearRect(v.xOffset, v.yOffset, v.width, v.height), u.drawImage(v.image, v.xOffset, v.yOffset);
  }, c.prototype.animate = function(u) {
    var p, v, f, m, l, y, C = this;
    return v = 0, y = this.animation, m = y.numFrames, f = y.frames, l = y.numPlays, (p = function() {
      var g, L;
      if (g = v++ % m, L = f[g], C.renderFrame(u, g), m > 1 && v / m < l) return C.animation._timeout = setTimeout(p, L.delay);
    })();
  }, c.prototype.stopAnimation = function() {
    var u;
    return clearTimeout((u = this.animation) != null ? u._timeout : void 0);
  }, c.prototype.render = function(u) {
    var p, v;
    return u._png && u._png.stopAnimation(), u._png = this, u.width = this.width, u.height = this.height, p = u.getContext("2d"), this.animation ? (this.decodeFrames(p), this.animate(p)) : (v = p.createImageData(this.width, this.height), this.copyToImageData(v, this.decodePixels()), p.putImageData(v, 0, 0));
  }, c;
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
function Jh(o) {
  var t = 0;
  if (o[t++] !== 71 || o[t++] !== 73 || o[t++] !== 70 || o[t++] !== 56 || (o[t++] + 1 & 253) != 56 || o[t++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var n = o[t++] | o[t++] << 8, c = o[t++] | o[t++] << 8, d = o[t++], u = d >> 7, p = 1 << (7 & d) + 1;
  o[t++], o[t++];
  var v = null, f = null;
  u && (v = t, f = p, t += 3 * p);
  var m = !0, l = [], y = 0, C = null, g = 0, L = null;
  for (this.width = n, this.height = c; m && t < o.length; ) switch (o[t++]) {
    case 33:
      switch (o[t++]) {
        case 255:
          if (o[t] !== 11 || o[t + 1] == 78 && o[t + 2] == 69 && o[t + 3] == 84 && o[t + 4] == 83 && o[t + 5] == 67 && o[t + 6] == 65 && o[t + 7] == 80 && o[t + 8] == 69 && o[t + 9] == 50 && o[t + 10] == 46 && o[t + 11] == 48 && o[t + 12] == 3 && o[t + 13] == 1 && o[t + 16] == 0) t += 14, L = o[t++] | o[t++] << 8, t++;
          else for (t += 12; ; ) {
            if (!((T = o[t++]) >= 0)) throw Error("Invalid block size");
            if (T === 0) break;
            t += T;
          }
          break;
        case 249:
          if (o[t++] !== 4 || o[t + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var E = o[t++];
          y = o[t++] | o[t++] << 8, C = o[t++], !(1 & E) && (C = null), g = E >> 2 & 7, t++;
          break;
        case 254:
          for (; ; ) {
            if (!((T = o[t++]) >= 0)) throw Error("Invalid block size");
            if (T === 0) break;
            t += T;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + o[t - 1].toString(16));
      }
      break;
    case 44:
      var x = o[t++] | o[t++] << 8, b = o[t++] | o[t++] << 8, U = o[t++] | o[t++] << 8, I = o[t++] | o[t++] << 8, M = o[t++], R = M >> 6 & 1, Z = 1 << (7 & M) + 1, AA = v, V = f, dA = !1;
      M >> 7 && (dA = !0, AA = t, V = Z, t += 3 * Z);
      var cA = t;
      for (t++; ; ) {
        var T;
        if (!((T = o[t++]) >= 0)) throw Error("Invalid block size");
        if (T === 0) break;
        t += T;
      }
      l.push({ x, y: b, width: U, height: I, has_local_palette: dA, palette_offset: AA, palette_size: V, data_offset: cA, data_length: t - cA, transparent_index: C, interlaced: !!R, delay: y, disposal: g });
      break;
    case 59:
      m = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + o[t - 1].toString(16));
  }
  this.numFrames = function() {
    return l.length;
  }, this.loopCount = function() {
    return L;
  }, this.frameInfo = function(_) {
    if (_ < 0 || _ >= l.length) throw new Error("Frame index out of range.");
    return l[_];
  }, this.decodeAndBlitFrameBGRA = function(_, z) {
    var J = this.frameInfo(_), tA = J.width * J.height, aA = new Uint8Array(tA);
    bu(o, J.data_offset, aA, tA);
    var vA = J.palette_offset, hA = J.transparent_index;
    hA === null && (hA = 256);
    var UA = J.width, bA = n - UA, PA = UA, j = 4 * (J.y * n + J.x), X = 4 * ((J.y + J.height) * n + J.x), q = j, eA = 4 * bA;
    J.interlaced === !0 && (eA += 4 * n * 7);
    for (var uA = 8, gA = 0, FA = aA.length; gA < FA; ++gA) {
      var QA = aA[gA];
      if (PA === 0 && (PA = UA, (q += eA) >= X && (eA = 4 * bA + 4 * n * (uA - 1), q = j + (UA + bA) * (uA << 1), uA >>= 1)), QA === hA) q += 4;
      else {
        var DA = o[vA + 3 * QA], KA = o[vA + 3 * QA + 1], RA = o[vA + 3 * QA + 2];
        z[q++] = RA, z[q++] = KA, z[q++] = DA, z[q++] = 255;
      }
      --PA;
    }
  }, this.decodeAndBlitFrameRGBA = function(_, z) {
    var J = this.frameInfo(_), tA = J.width * J.height, aA = new Uint8Array(tA);
    bu(o, J.data_offset, aA, tA);
    var vA = J.palette_offset, hA = J.transparent_index;
    hA === null && (hA = 256);
    var UA = J.width, bA = n - UA, PA = UA, j = 4 * (J.y * n + J.x), X = 4 * ((J.y + J.height) * n + J.x), q = j, eA = 4 * bA;
    J.interlaced === !0 && (eA += 4 * n * 7);
    for (var uA = 8, gA = 0, FA = aA.length; gA < FA; ++gA) {
      var QA = aA[gA];
      if (PA === 0 && (PA = UA, (q += eA) >= X && (eA = 4 * bA + 4 * n * (uA - 1), q = j + (UA + bA) * (uA << 1), uA >>= 1)), QA === hA) q += 4;
      else {
        var DA = o[vA + 3 * QA], KA = o[vA + 3 * QA + 1], RA = o[vA + 3 * QA + 2];
        z[q++] = DA, z[q++] = KA, z[q++] = RA, z[q++] = 255;
      }
      --PA;
    }
  };
}
function bu(o, t, n, c) {
  for (var d = o[t++], u = 1 << d, p = u + 1, v = p + 1, f = d + 1, m = (1 << f) - 1, l = 0, y = 0, C = 0, g = o[t++], L = new Int32Array(4096), E = null; ; ) {
    for (; l < 16 && g !== 0; ) y |= o[t++] << l, l += 8, g === 1 ? g = o[t++] : --g;
    if (l < f) break;
    var x = y & m;
    if (y >>= f, l -= f, x !== u) {
      if (x === p) break;
      for (var b = x < v ? x : E, U = 0, I = b; I > u; ) I = L[I] >> 8, ++U;
      var M = I;
      if (C + U + (b !== x ? 1 : 0) > c) return void ot.log("Warning, gif stream longer than expected.");
      n[C++] = M;
      var R = C += U;
      for (b !== x && (n[C++] = M), I = b; U--; ) I = L[I], n[--R] = 255 & I, I >>= 8;
      E !== null && v < 4096 && (L[v++] = E << 8 | M, v >= m + 1 && f < 12 && (++f, m = m << 1 | 1)), E = x;
    } else v = p + 1, m = (1 << (f = d + 1)) - 1, E = null;
  }
  return C !== c && ot.log("Warning, gif stream shorter than expected."), n;
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
function ol(o) {
  var t, n, c, d, u, p = Math.floor, v = new Array(64), f = new Array(64), m = new Array(64), l = new Array(64), y = new Array(65535), C = new Array(65535), g = new Array(64), L = new Array(64), E = [], x = 0, b = 7, U = new Array(64), I = new Array(64), M = new Array(64), R = new Array(256), Z = new Array(2048), AA = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], V = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], dA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], cA = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], _ = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], J = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], tA = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function aA(j, X) {
    for (var q = 0, eA = 0, uA = new Array(), gA = 1; gA <= 16; gA++) {
      for (var FA = 1; FA <= j[gA]; FA++) uA[X[eA]] = [], uA[X[eA]][0] = q, uA[X[eA]][1] = gA, eA++, q++;
      q *= 2;
    }
    return uA;
  }
  function vA(j) {
    for (var X = j[0], q = j[1] - 1; q >= 0; ) X & 1 << q && (x |= 1 << b), q--, --b < 0 && (x == 255 ? (hA(255), hA(0)) : hA(x), b = 7, x = 0);
  }
  function hA(j) {
    E.push(j);
  }
  function UA(j) {
    hA(j >> 8 & 255), hA(255 & j);
  }
  function bA(j, X, q, eA, uA) {
    for (var gA, FA = uA[0], QA = uA[240], DA = function(NA, WA) {
      var YA, XA, ae, ye, de, Ce, Te, Ee, we, BA, mA = 0;
      for (we = 0; we < 8; ++we) {
        YA = NA[mA], XA = NA[mA + 1], ae = NA[mA + 2], ye = NA[mA + 3], de = NA[mA + 4], Ce = NA[mA + 5], Te = NA[mA + 6];
        var TA = YA + (Ee = NA[mA + 7]), MA = YA - Ee, fe = XA + Te, Ae = XA - Te, Fe = ae + Ce, Bt = ae - Ce, He = ye + de, Ar = ye - de, Ge = TA + He, kt = TA - He, je = fe + Fe, qA = fe - Fe;
        NA[mA] = Ge + je, NA[mA + 4] = Ge - je;
        var VA = 0.707106781 * (qA + kt);
        NA[mA + 2] = kt + VA, NA[mA + 6] = kt - VA;
        var ie = 0.382683433 * ((Ge = Ar + Bt) - (qA = Ae + MA)), Me = 0.5411961 * Ge + ie, Re = 1.306562965 * qA + ie, Dt = 0.707106781 * (je = Bt + Ae), er = MA + Dt, ge = MA - Dt;
        NA[mA + 5] = ge + Me, NA[mA + 3] = ge - Me, NA[mA + 1] = er + Re, NA[mA + 7] = er - Re, mA += 8;
      }
      for (mA = 0, we = 0; we < 8; ++we) {
        YA = NA[mA], XA = NA[mA + 8], ae = NA[mA + 16], ye = NA[mA + 24], de = NA[mA + 32], Ce = NA[mA + 40], Te = NA[mA + 48];
        var Or = YA + (Ee = NA[mA + 56]), Xr = YA - Ee, Xt = XA + Te, pe = XA - Te, ut = ae + Ce, Jt = ae - Ce, tr = ye + de, Pr = ye - de, wr = Or + tr, vr = Or - tr, Tr = Xt + ut, Dr = Xt - ut;
        NA[mA] = wr + Tr, NA[mA + 32] = wr - Tr;
        var mr = 0.707106781 * (Dr + vr);
        NA[mA + 16] = vr + mr, NA[mA + 48] = vr - mr;
        var Jr = 0.382683433 * ((wr = Pr + Jt) - (Dr = pe + Xr)), sn = 0.5411961 * wr + Jr, Gn = 1.306562965 * Dr + Jr, ds = 0.707106781 * (Tr = Jt + pe), gs = Xr + ds, ps = Xr - ds;
        NA[mA + 40] = ps + sn, NA[mA + 24] = ps - sn, NA[mA + 8] = gs + Gn, NA[mA + 56] = gs - Gn, mA++;
      }
      for (we = 0; we < 64; ++we) BA = NA[we] * WA[we], g[we] = BA > 0 ? BA + 0.5 | 0 : BA - 0.5 | 0;
      return g;
    }(j, X), KA = 0; KA < 64; ++KA) L[AA[KA]] = DA[KA];
    var RA = L[0] - q;
    q = L[0], RA == 0 ? vA(eA[0]) : (vA(eA[C[gA = 32767 + RA]]), vA(y[gA]));
    for (var GA = 63; GA > 0 && L[GA] == 0; ) GA--;
    if (GA == 0) return vA(FA), q;
    for (var ce, LA = 1; LA <= GA; ) {
      for (var $ = LA; L[LA] == 0 && LA <= GA; ) ++LA;
      var be = LA - $;
      if (be >= 16) {
        ce = be >> 4;
        for (var zA = 1; zA <= ce; ++zA) vA(QA);
        be &= 15;
      }
      gA = 32767 + L[LA], vA(uA[(be << 4) + C[gA]]), vA(y[gA]), LA++;
    }
    return GA != 63 && vA(FA), q;
  }
  function PA(j) {
    j = Math.min(Math.max(j, 1), 100), u != j && (function(X) {
      for (var q = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], eA = 0; eA < 64; eA++) {
        var uA = p((q[eA] * X + 50) / 100);
        uA = Math.min(Math.max(uA, 1), 255), v[AA[eA]] = uA;
      }
      for (var gA = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], FA = 0; FA < 64; FA++) {
        var QA = p((gA[FA] * X + 50) / 100);
        QA = Math.min(Math.max(QA, 1), 255), f[AA[FA]] = QA;
      }
      for (var DA = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], KA = 0, RA = 0; RA < 8; RA++) for (var GA = 0; GA < 8; GA++) m[KA] = 1 / (v[AA[KA]] * DA[RA] * DA[GA] * 8), l[KA] = 1 / (f[AA[KA]] * DA[RA] * DA[GA] * 8), KA++;
    }(j < 50 ? Math.floor(5e3 / j) : Math.floor(200 - 2 * j)), u = j);
  }
  this.encode = function(j, X) {
    X && PA(X), E = new Array(), x = 0, b = 7, UA(65496), UA(65504), UA(16), hA(74), hA(70), hA(73), hA(70), hA(0), hA(1), hA(1), hA(0), UA(1), UA(1), hA(0), hA(0), function() {
      UA(65499), UA(132), hA(0);
      for (var XA = 0; XA < 64; XA++) hA(v[XA]);
      hA(1);
      for (var ae = 0; ae < 64; ae++) hA(f[ae]);
    }(), function(XA, ae) {
      UA(65472), UA(17), hA(8), UA(ae), UA(XA), hA(3), hA(1), hA(17), hA(0), hA(2), hA(17), hA(1), hA(3), hA(17), hA(1);
    }(j.width, j.height), function() {
      UA(65476), UA(418), hA(0);
      for (var XA = 0; XA < 16; XA++) hA(V[XA + 1]);
      for (var ae = 0; ae <= 11; ae++) hA(dA[ae]);
      hA(16);
      for (var ye = 0; ye < 16; ye++) hA(cA[ye + 1]);
      for (var de = 0; de <= 161; de++) hA(T[de]);
      hA(1);
      for (var Ce = 0; Ce < 16; Ce++) hA(_[Ce + 1]);
      for (var Te = 0; Te <= 11; Te++) hA(z[Te]);
      hA(17);
      for (var Ee = 0; Ee < 16; Ee++) hA(J[Ee + 1]);
      for (var we = 0; we <= 161; we++) hA(tA[we]);
    }(), UA(65498), UA(12), hA(3), hA(1), hA(0), hA(2), hA(17), hA(3), hA(17), hA(0), hA(63), hA(0);
    var q = 0, eA = 0, uA = 0;
    x = 0, b = 7, this.encode.displayName = "_encode_";
    for (var gA, FA, QA, DA, KA, RA, GA, ce, LA, $ = j.data, be = j.width, zA = j.height, NA = 4 * be, WA = 0; WA < zA; ) {
      for (gA = 0; gA < NA; ) {
        for (KA = NA * WA + gA, GA = -1, ce = 0, LA = 0; LA < 64; LA++) RA = KA + (ce = LA >> 3) * NA + (GA = 4 * (7 & LA)), WA + ce >= zA && (RA -= NA * (WA + 1 + ce - zA)), gA + GA >= NA && (RA -= gA + GA - NA + 4), FA = $[RA++], QA = $[RA++], DA = $[RA++], U[LA] = (Z[FA] + Z[QA + 256 >> 0] + Z[DA + 512 >> 0] >> 16) - 128, I[LA] = (Z[FA + 768 >> 0] + Z[QA + 1024 >> 0] + Z[DA + 1280 >> 0] >> 16) - 128, M[LA] = (Z[FA + 1280 >> 0] + Z[QA + 1536 >> 0] + Z[DA + 1792 >> 0] >> 16) - 128;
        q = bA(U, m, q, t, c), eA = bA(I, l, eA, n, d), uA = bA(M, l, uA, n, d), gA += 32;
      }
      WA += 8;
    }
    if (b >= 0) {
      var YA = [];
      YA[1] = b + 1, YA[0] = (1 << b + 1) - 1, vA(YA);
    }
    return UA(65497), new Uint8Array(E);
  }, o = o || 50, function() {
    for (var j = String.fromCharCode, X = 0; X < 256; X++) R[X] = j(X);
  }(), t = aA(V, dA), n = aA(_, z), c = aA(cA, T), d = aA(J, tA), function() {
    for (var j = 1, X = 2, q = 1; q <= 15; q++) {
      for (var eA = j; eA < X; eA++) C[32767 + eA] = q, y[32767 + eA] = [], y[32767 + eA][1] = q, y[32767 + eA][0] = eA;
      for (var uA = -(X - 1); uA <= -j; uA++) C[32767 + uA] = q, y[32767 + uA] = [], y[32767 + uA][1] = q, y[32767 + uA][0] = X - 1 + uA;
      j <<= 1, X <<= 1;
    }
  }(), function() {
    for (var j = 0; j < 256; j++) Z[j] = 19595 * j, Z[j + 256 >> 0] = 38470 * j, Z[j + 512 >> 0] = 7471 * j + 32768, Z[j + 768 >> 0] = -11059 * j, Z[j + 1024 >> 0] = -21709 * j, Z[j + 1280 >> 0] = 32768 * j + 8421375, Z[j + 1536 >> 0] = -27439 * j, Z[j + 1792 >> 0] = -5329 * j;
  }(), PA(o);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function wn(o, t) {
  if (this.pos = 0, this.buffer = o, this.datav = new DataView(o.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Qu(o) {
  function t(V) {
    if (!V) throw Error("assert :P");
  }
  function n(V, dA, cA) {
    for (var T = 0; 4 > T; T++) if (V[dA + T] != cA.charCodeAt(T)) return !0;
    return !1;
  }
  function c(V, dA, cA, T, _) {
    for (var z = 0; z < _; z++) V[dA + z] = cA[T + z];
  }
  function d(V, dA, cA, T) {
    for (var _ = 0; _ < T; _++) V[dA + _] = cA;
  }
  function u(V) {
    return new Int32Array(V);
  }
  function p(V, dA) {
    for (var cA = [], T = 0; T < V; T++) cA.push(new dA());
    return cA;
  }
  function v(V, dA) {
    var cA = [];
    return function T(_, z, J) {
      for (var tA = J[z], aA = 0; aA < tA && (_.push(J.length > z + 1 ? [] : new dA()), !(J.length < z + 1)); aA++) T(_[aA], z + 1, J);
    }(cA, 0, V), cA;
  }
  var f = function() {
    var V = this;
    function dA(A, a) {
      for (var B = 1 << a - 1 >>> 0; A & B; ) B >>>= 1;
      return B ? (A & B - 1) + B : A;
    }
    function cA(A, a, B, F, S) {
      t(!(F % B));
      do
        A[a + (F -= B)] = S;
      while (0 < F);
    }
    function T(A, a, B, F, S) {
      if (t(2328 >= S), 512 >= S) var N = u(512);
      else if ((N = u(S)) == null) return 0;
      return function(P, D, K, W, nA, yA) {
        var CA, oA, jA = D, EA = 1 << K, sA = u(16), lA = u(16);
        for (t(nA != 0), t(W != null), t(P != null), t(0 < K), oA = 0; oA < nA; ++oA) {
          if (15 < W[oA]) return 0;
          ++sA[W[oA]];
        }
        if (sA[0] == nA) return 0;
        for (lA[1] = 0, CA = 1; 15 > CA; ++CA) {
          if (sA[CA] > 1 << CA) return 0;
          lA[CA + 1] = lA[CA] + sA[CA];
        }
        for (oA = 0; oA < nA; ++oA) CA = W[oA], 0 < W[oA] && (yA[lA[CA]++] = oA);
        if (lA[15] == 1) return (W = new _()).g = 0, W.value = yA[0], cA(P, jA, 1, EA, W), EA;
        var SA, OA = -1, HA = EA - 1, re = 0, ZA = 1, ve = 1, $A = 1 << K;
        for (oA = 0, CA = 1, nA = 2; CA <= K; ++CA, nA <<= 1) {
          if (ZA += ve <<= 1, 0 > (ve -= sA[CA])) return 0;
          for (; 0 < sA[CA]; --sA[CA]) (W = new _()).g = CA, W.value = yA[oA++], cA(P, jA + re, nA, $A, W), re = dA(re, CA);
        }
        for (CA = K + 1, nA = 2; 15 >= CA; ++CA, nA <<= 1) {
          if (ZA += ve <<= 1, 0 > (ve -= sA[CA])) return 0;
          for (; 0 < sA[CA]; --sA[CA]) {
            if (W = new _(), (re & HA) != OA) {
              for (jA += $A, SA = 1 << (OA = CA) - K; 15 > OA && !(0 >= (SA -= sA[OA])); ) ++OA, SA <<= 1;
              EA += $A = 1 << (SA = OA - K), P[D + (OA = re & HA)].g = SA + K, P[D + OA].value = jA - D - OA;
            }
            W.g = CA - K, W.value = yA[oA++], cA(P, jA + (re >> K), nA, $A, W), re = dA(re, CA);
          }
        }
        return ZA != 2 * lA[15] - 1 ? 0 : EA;
      }(A, a, B, F, S, N);
    }
    function _() {
      this.value = this.g = 0;
    }
    function z() {
      this.value = this.g = 0;
    }
    function J() {
      this.G = p(5, _), this.H = u(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = p(Ot, z);
    }
    function tA(A, a, B, F) {
      t(A != null), t(a != null), t(2147483648 > F), A.Ca = 254, A.I = 0, A.b = -8, A.Ka = 0, A.oa = a, A.pa = B, A.Jd = a, A.Yc = B + F, A.Zc = 4 <= F ? B + F - 4 + 1 : B, gA(A);
    }
    function aA(A, a) {
      for (var B = 0; 0 < a--; ) B |= QA(A, 128) << a;
      return B;
    }
    function vA(A, a) {
      var B = aA(A, a);
      return FA(A) ? -B : B;
    }
    function hA(A, a, B, F) {
      var S, N = 0;
      for (t(A != null), t(a != null), t(4294967288 > F), A.Sb = F, A.Ra = 0, A.u = 0, A.h = 0, 4 < F && (F = 4), S = 0; S < F; ++S) N += a[B + S] << 8 * S;
      A.Ra = N, A.bb = F, A.oa = a, A.pa = B;
    }
    function UA(A) {
      for (; 8 <= A.u && A.bb < A.Sb; ) A.Ra >>>= 8, A.Ra += A.oa[A.pa + A.bb] << ts - 8 >>> 0, ++A.bb, A.u -= 8;
      q(A) && (A.h = 1, A.u = 0);
    }
    function bA(A, a) {
      if (t(0 <= a), !A.h && a <= es) {
        var B = X(A) & Xe[a];
        return A.u += a, UA(A), B;
      }
      return A.h = 1, A.u = 0;
    }
    function PA() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function j() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function X(A) {
      return A.Ra >>> (A.u & ts - 1) >>> 0;
    }
    function q(A) {
      return t(A.bb <= A.Sb), A.h || A.bb == A.Sb && A.u > ts;
    }
    function eA(A, a) {
      A.u = a, A.h = q(A);
    }
    function uA(A) {
      A.u >= Qs && (t(A.u >= Qs), UA(A));
    }
    function gA(A) {
      t(A != null && A.oa != null), A.pa < A.Zc ? (A.I = (A.oa[A.pa++] | A.I << 8) >>> 0, A.b += 8) : (t(A != null && A.oa != null), A.pa < A.Yc ? (A.b += 8, A.I = A.oa[A.pa++] | A.I << 8) : A.Ka ? A.b = 0 : (A.I <<= 8, A.b += 8, A.Ka = 1));
    }
    function FA(A) {
      return aA(A, 1);
    }
    function QA(A, a) {
      var B = A.Ca;
      0 > A.b && gA(A);
      var F = A.b, S = B * a >>> 8, N = (A.I >>> F > S) + 0;
      for (N ? (B -= S, A.I -= S + 1 << F >>> 0) : B = S + 1, F = B, S = 0; 256 <= F; ) S += 8, F >>= 8;
      return F = 7 ^ S + zt[F], A.b -= F, A.Ca = (B << F) - 1, N;
    }
    function DA(A, a, B) {
      A[a + 0] = B >> 24 & 255, A[a + 1] = B >> 16 & 255, A[a + 2] = B >> 8 & 255, A[a + 3] = B >> 0 & 255;
    }
    function KA(A, a) {
      return A[a + 0] << 0 | A[a + 1] << 8;
    }
    function RA(A, a) {
      return KA(A, a) | A[a + 2] << 16;
    }
    function GA(A, a) {
      return KA(A, a) | KA(A, a + 2) << 16;
    }
    function ce(A, a) {
      var B = 1 << a;
      return t(A != null), t(0 < a), A.X = u(B), A.X == null ? 0 : (A.Mb = 32 - a, A.Xa = a, 1);
    }
    function LA(A, a) {
      t(A != null), t(a != null), t(A.Xa == a.Xa), c(a.X, 0, A.X, 0, 1 << a.Xa);
    }
    function $() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function be(A, a, B, F) {
      t(B != null), t(F != null);
      var S = B[0], N = F[0];
      return S == 0 && (S = (A * N + a / 2) / a), N == 0 && (N = (a * S + A / 2) / A), 0 >= S || 0 >= N ? 0 : (B[0] = S, F[0] = N, 1);
    }
    function zA(A, a) {
      return A + (1 << a) - 1 >>> a;
    }
    function NA(A, a) {
      return ((4278255360 & A) + (4278255360 & a) >>> 0 & 4278255360) + ((16711935 & A) + (16711935 & a) >>> 0 & 16711935) >>> 0;
    }
    function WA(A, a) {
      V[a] = function(B, F, S, N, P, D, K) {
        var W;
        for (W = 0; W < P; ++W) {
          var nA = V[A](D[K + W - 1], S, N + W);
          D[K + W] = NA(B[F + W], nA);
        }
      };
    }
    function YA() {
      this.ud = this.hd = this.jd = 0;
    }
    function XA(A, a) {
      return ((4278124286 & (A ^ a)) >>> 1) + (A & a) >>> 0;
    }
    function ae(A) {
      return 0 <= A && 256 > A ? A : 0 > A ? 0 : 255 < A ? 255 : void 0;
    }
    function ye(A, a) {
      return ae(A + (A - a + 0.5 >> 1));
    }
    function de(A, a, B) {
      return Math.abs(a - B) - Math.abs(A - B);
    }
    function Ce(A, a, B, F, S, N, P) {
      for (F = N[P - 1], B = 0; B < S; ++B) N[P + B] = F = NA(A[a + B], F);
    }
    function Te(A, a, B, F, S) {
      var N;
      for (N = 0; N < B; ++N) {
        var P = A[a + N], D = P >> 8 & 255, K = 16711935 & (K = (K = 16711935 & P) + ((D << 16) + D));
        F[S + N] = (4278255360 & P) + K >>> 0;
      }
    }
    function Ee(A, a) {
      a.jd = A >> 0 & 255, a.hd = A >> 8 & 255, a.ud = A >> 16 & 255;
    }
    function we(A, a, B, F, S, N) {
      var P;
      for (P = 0; P < F; ++P) {
        var D = a[B + P], K = D >>> 8, W = D, nA = 255 & (nA = (nA = D >>> 16) + ((A.jd << 24 >> 24) * (K << 24 >> 24) >>> 5));
        W = 255 & (W = (W = W + ((A.hd << 24 >> 24) * (K << 24 >> 24) >>> 5)) + ((A.ud << 24 >> 24) * (nA << 24 >> 24) >>> 5)), S[N + P] = (4278255360 & D) + (nA << 16) + W;
      }
    }
    function BA(A, a, B, F, S) {
      V[a] = function(N, P, D, K, W, nA, yA, CA, oA) {
        for (K = yA; K < CA; ++K) for (yA = 0; yA < oA; ++yA) W[nA++] = S(D[F(N[P++])]);
      }, V[A] = function(N, P, D, K, W, nA, yA) {
        var CA = 8 >> N.b, oA = N.Ea, jA = N.K[0], EA = N.w;
        if (8 > CA) for (N = (1 << N.b) - 1, EA = (1 << CA) - 1; P < D; ++P) {
          var sA, lA = 0;
          for (sA = 0; sA < oA; ++sA) sA & N || (lA = F(K[W++])), nA[yA++] = S(jA[lA & EA]), lA >>= CA;
        }
        else V["VP8LMapColor" + B](K, W, jA, EA, nA, yA, P, D, oA);
      };
    }
    function mA(A, a, B, F, S) {
      for (B = a + B; a < B; ) {
        var N = A[a++];
        F[S++] = N >> 16 & 255, F[S++] = N >> 8 & 255, F[S++] = N >> 0 & 255;
      }
    }
    function TA(A, a, B, F, S) {
      for (B = a + B; a < B; ) {
        var N = A[a++];
        F[S++] = N >> 16 & 255, F[S++] = N >> 8 & 255, F[S++] = N >> 0 & 255, F[S++] = N >> 24 & 255;
      }
    }
    function MA(A, a, B, F, S) {
      for (B = a + B; a < B; ) {
        var N = (P = A[a++]) >> 16 & 240 | P >> 12 & 15, P = P >> 0 & 240 | P >> 28 & 15;
        F[S++] = N, F[S++] = P;
      }
    }
    function fe(A, a, B, F, S) {
      for (B = a + B; a < B; ) {
        var N = (P = A[a++]) >> 16 & 248 | P >> 13 & 7, P = P >> 5 & 224 | P >> 3 & 31;
        F[S++] = N, F[S++] = P;
      }
    }
    function Ae(A, a, B, F, S) {
      for (B = a + B; a < B; ) {
        var N = A[a++];
        F[S++] = N >> 0 & 255, F[S++] = N >> 8 & 255, F[S++] = N >> 16 & 255;
      }
    }
    function Fe(A, a, B, F, S, N) {
      if (N == 0) for (B = a + B; a < B; ) DA(F, ((N = A[a++])[0] >> 24 | N[1] >> 8 & 65280 | N[2] << 8 & 16711680 | N[3] << 24) >>> 0), S += 32;
      else c(F, S, A, a, B);
    }
    function Bt(A, a) {
      V[a][0] = V[A + "0"], V[a][1] = V[A + "1"], V[a][2] = V[A + "2"], V[a][3] = V[A + "3"], V[a][4] = V[A + "4"], V[a][5] = V[A + "5"], V[a][6] = V[A + "6"], V[a][7] = V[A + "7"], V[a][8] = V[A + "8"], V[a][9] = V[A + "9"], V[a][10] = V[A + "10"], V[a][11] = V[A + "11"], V[a][12] = V[A + "12"], V[a][13] = V[A + "13"], V[a][14] = V[A + "0"], V[a][15] = V[A + "0"];
    }
    function He(A) {
      return A == _o || A == Ko || A == to || A == xs;
    }
    function Ar() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Ge() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function kt() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Ar(), this.f.kb = new Ge(), this.sd = null;
    }
    function je() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function qA() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function VA(A) {
      return alert("todo:WebPSamplerProcessPlane"), A.T;
    }
    function ie(A, a) {
      var B = A.T, F = a.ba.f.RGBA, S = F.eb, N = F.fb + A.ka * F.A, P = Lr[a.ba.S], D = A.y, K = A.O, W = A.f, nA = A.N, yA = A.ea, CA = A.W, oA = a.cc, jA = a.dc, EA = a.Mc, sA = a.Nc, lA = A.ka, SA = A.ka + A.T, OA = A.U, HA = OA + 1 >> 1;
      for (lA == 0 ? P(D, K, null, null, W, nA, yA, CA, W, nA, yA, CA, S, N, null, null, OA) : (P(a.ec, a.fc, D, K, oA, jA, EA, sA, W, nA, yA, CA, S, N - F.A, S, N, OA), ++B); lA + 2 < SA; lA += 2) oA = W, jA = nA, EA = yA, sA = CA, nA += A.Rc, CA += A.Rc, N += 2 * F.A, P(D, (K += 2 * A.fa) - A.fa, D, K, oA, jA, EA, sA, W, nA, yA, CA, S, N - F.A, S, N, OA);
      return K += A.fa, A.j + SA < A.o ? (c(a.ec, a.fc, D, K, OA), c(a.cc, a.dc, W, nA, HA), c(a.Mc, a.Nc, yA, CA, HA), B--) : 1 & SA || P(D, K, null, null, W, nA, yA, CA, W, nA, yA, CA, S, N + F.A, null, null, OA), B;
    }
    function Me(A, a, B) {
      var F = A.F, S = [A.J];
      if (F != null) {
        var N = A.U, P = a.ba.S, D = P == eo || P == to;
        a = a.ba.f.RGBA;
        var K = [0], W = A.ka;
        K[0] = A.T, A.Kb && (W == 0 ? --K[0] : (--W, S[0] -= A.width), A.j + A.ka + A.T == A.o && (K[0] = A.o - A.j - W));
        var nA = a.eb;
        W = a.fb + W * a.A, A = ci(F, S[0], A.width, N, K, nA, W + (D ? 0 : 3), a.A), t(B == K), A && He(P) && dn(nA, W, D, N, K, a.A);
      }
      return 0;
    }
    function Re(A) {
      var a = A.ma, B = a.ba.S, F = 11 > B, S = B == $i || B == Ao || B == eo || B == Is || B == 12 || He(B);
      if (a.memory = null, a.Ib = null, a.Jb = null, a.Nd = null, !vt(a.Oa, A, S ? 11 : 12)) return 0;
      if (S && He(B) && kA(), A.da) alert("todo:use_scaling");
      else {
        if (F) {
          if (a.Ib = VA, A.Kb) {
            if (B = A.U + 1 >> 1, a.memory = u(A.U + 2 * B), a.memory == null) return 0;
            a.ec = a.memory, a.fc = 0, a.cc = a.ec, a.dc = a.fc + A.U, a.Mc = a.cc, a.Nc = a.dc + B, a.Ib = ie, kA();
          }
        } else alert("todo:EmitYUV");
        S && (a.Jb = Me, F && pA());
      }
      if (F && !Ua) {
        for (A = 0; 256 > A; ++A) Lc[A] = 89858 * (A - 128) + so >> no, Sc[A] = -22014 * (A - 128) + so, xc[A] = -45773 * (A - 128), Ic[A] = 113618 * (A - 128) + so >> no;
        for (A = Nn; A < Go; ++A) a = 76283 * (A - 16) + so >> no, Hc[A - Nn] = jt(a, 255), jc[A - Nn] = jt(a + 8 >> 4, 15);
        Ua = 1;
      }
      return 1;
    }
    function Dt(A) {
      var a = A.ma, B = A.U, F = A.T;
      return t(!(1 & A.ka)), 0 >= B || 0 >= F ? 0 : (B = a.Ib(A, a), a.Jb != null && a.Jb(A, a, B), a.Dc += B, 1);
    }
    function er(A) {
      A.ma.memory = null;
    }
    function ge(A, a, B, F) {
      return bA(A, 8) != 47 ? 0 : (a[0] = bA(A, 14) + 1, B[0] = bA(A, 14) + 1, F[0] = bA(A, 1), bA(A, 3) != 0 ? 0 : !A.h);
    }
    function Or(A, a) {
      if (4 > A) return A + 1;
      var B = A - 2 >> 1;
      return (2 + (1 & A) << B) + bA(a, B) + 1;
    }
    function Xr(A, a) {
      return 120 < a ? a - 120 : 1 <= (B = ((B = gc[a - 1]) >> 4) * A + (8 - (15 & B))) ? B : 1;
      var B;
    }
    function Xt(A, a, B) {
      var F = X(B), S = A[a += 255 & F].g - 8;
      return 0 < S && (eA(B, B.u + 8), F = X(B), a += A[a].value, a += F & (1 << S) - 1), eA(B, B.u + A[a].g), A[a].value;
    }
    function pe(A, a, B) {
      return B.g += A.g, B.value += A.value << a >>> 0, t(8 >= B.g), A.g;
    }
    function ut(A, a, B) {
      var F = A.xc;
      return t((a = F == 0 ? 0 : A.vc[A.md * (B >> F) + (a >> F)]) < A.Wb), A.Ya[a];
    }
    function Jt(A, a, B, F) {
      var S = A.ab, N = A.c * a, P = A.C;
      a = P + a;
      var D = B, K = F;
      for (F = A.Ta, B = A.Ua; 0 < S--; ) {
        var W = A.gc[S], nA = P, yA = a, CA = D, oA = K, jA = (K = F, D = B, W.Ea);
        switch (t(nA < yA), t(yA <= W.nc), W.hc) {
          case 2:
            ii(CA, oA, (yA - nA) * jA, K, D);
            break;
          case 0:
            var EA = nA, sA = yA, lA = K, SA = D, OA = ($A = W).Ea;
            EA == 0 && (Us(CA, oA, null, null, 1, lA, SA), Ce(CA, oA + 1, 0, 0, OA - 1, lA, SA + 1), oA += OA, SA += OA, ++EA);
            for (var HA = 1 << $A.b, re = HA - 1, ZA = zA(OA, $A.b), ve = $A.K, $A = $A.w + (EA >> $A.b) * ZA; EA < sA; ) {
              var Je = ve, ze = $A, _A = 1;
              for (Es(CA, oA, lA, SA - OA, 1, lA, SA); _A < OA; ) {
                var Ke = (_A & ~re) + HA;
                Ke > OA && (Ke = OA), (0, Yt[Je[ze++] >> 8 & 15])(CA, oA + +_A, lA, SA + _A - OA, Ke - _A, lA, SA + _A), _A = Ke;
              }
              oA += OA, SA += OA, ++EA & re || ($A += ZA);
            }
            yA != W.nc && c(K, D - jA, K, D + (yA - nA - 1) * jA, jA);
            break;
          case 1:
            for (jA = CA, sA = oA, OA = (CA = W.Ea) - (SA = CA & ~(lA = (oA = 1 << W.b) - 1)), EA = zA(CA, W.b), HA = W.K, W = W.w + (nA >> W.b) * EA; nA < yA; ) {
              for (re = HA, ZA = W, ve = new YA(), $A = sA + SA, Je = sA + CA; sA < $A; ) Ee(re[ZA++], ve), hr(ve, jA, sA, oA, K, D), sA += oA, D += oA;
              sA < Je && (Ee(re[ZA++], ve), hr(ve, jA, sA, OA, K, D), sA += OA, D += OA), ++nA & lA || (W += EA);
            }
            break;
          case 3:
            if (CA == K && oA == D && 0 < W.b) {
              for (sA = K, CA = jA = D + (yA - nA) * jA - (SA = (yA - nA) * zA(W.Ea, W.b)), oA = K, lA = D, EA = [], SA = (OA = SA) - 1; 0 <= SA; --SA) EA[SA] = oA[lA + SA];
              for (SA = OA - 1; 0 <= SA; --SA) sA[CA + SA] = EA[SA];
              ht(W, nA, yA, K, jA, K, D);
            } else ht(W, nA, yA, CA, oA, K, D);
        }
        D = F, K = B;
      }
      K != B && c(F, B, D, K, N);
    }
    function tr(A, a) {
      var B = A.V, F = A.Ba + A.c * A.C, S = a - A.C;
      if (t(a <= A.l.o), t(16 >= S), 0 < S) {
        var N = A.l, P = A.Ta, D = A.Ua, K = N.width;
        if (Jt(A, S, B, F), S = D = [D], t((B = A.C) < (F = a)), t(N.v < N.va), F > N.o && (F = N.o), B < N.j) {
          var W = N.j - B;
          B = N.j, S[0] += W * K;
        }
        if (B >= F ? B = 0 : (S[0] += 4 * N.v, N.ka = B - N.j, N.U = N.va - N.v, N.T = F - B, B = 1), B) {
          if (D = D[0], 11 > (B = A.ca).S) {
            var nA = B.f.RGBA, yA = (F = B.S, S = N.U, N = N.T, W = nA.eb, nA.A), CA = N;
            for (nA = nA.fb + A.Ma * nA.A; 0 < CA--; ) {
              var oA = P, jA = D, EA = S, sA = W, lA = nA;
              switch (F) {
                case Zi:
                  br(oA, jA, EA, sA, lA);
                  break;
                case $i:
                  $r(oA, jA, EA, sA, lA);
                  break;
                case _o:
                  $r(oA, jA, EA, sA, lA), dn(sA, lA, 0, EA, 1, 0);
                  break;
                case ss:
                  An(oA, jA, EA, sA, lA);
                  break;
                case Ao:
                  Fe(oA, jA, EA, sA, lA, 1);
                  break;
                case Ko:
                  Fe(oA, jA, EA, sA, lA, 1), dn(sA, lA, 0, EA, 1, 0);
                  break;
                case eo:
                  Fe(oA, jA, EA, sA, lA, 0);
                  break;
                case to:
                  Fe(oA, jA, EA, sA, lA, 0), dn(sA, lA, 1, EA, 1, 0);
                  break;
                case Is:
                  _r(oA, jA, EA, sA, lA);
                  break;
                case xs:
                  _r(oA, jA, EA, sA, lA), ns(sA, lA, EA, 1, 0);
                  break;
                case wa:
                  un(oA, jA, EA, sA, lA);
                  break;
                default:
                  t(0);
              }
              D += K, nA += yA;
            }
            A.Ma += N;
          } else alert("todo:EmitRescaledRowsYUVA");
          t(A.Ma <= B.height);
        }
      }
      A.C = a, t(A.C <= A.i);
    }
    function Pr(A) {
      var a;
      if (0 < A.ua) return 0;
      for (a = 0; a < A.Wb; ++a) {
        var B = A.Ya[a].G, F = A.Ya[a].H;
        if (0 < B[1][F[1] + 0].g || 0 < B[2][F[2] + 0].g || 0 < B[3][F[3] + 0].g) return 0;
      }
      return 1;
    }
    function wr(A, a, B, F, S, N) {
      if (A.Z != 0) {
        var P = A.qd, D = A.rd;
        for (t(gn[A.Z] != null); a < B; ++a) gn[A.Z](P, D, F, S, F, S, N), P = F, D = S, S += N;
        A.qd = P, A.rd = D;
      }
    }
    function vr(A, a) {
      var B = A.l.ma, F = B.Z == 0 || B.Z == 1 ? A.l.j : A.C;
      if (F = A.C < F ? F : A.C, t(a <= A.l.o), a > F) {
        var S = A.l.width, N = B.ca, P = B.tb + S * F, D = A.V, K = A.Ba + A.c * F, W = A.gc;
        t(A.ab == 1), t(W[0].hc == 3), Zr(W[0], F, a, D, K, N, P), wr(B, F, a, N, P, S);
      }
      A.C = A.Ma = a;
    }
    function Tr(A, a, B, F, S, N, P) {
      var D = A.$ / F, K = A.$ % F, W = A.m, nA = A.s, yA = B + A.$, CA = yA;
      S = B + F * S;
      var oA = B + F * N, jA = 280 + nA.ua, EA = A.Pb ? D : 16777216, sA = 0 < nA.ua ? nA.Wa : null, lA = nA.wc, SA = yA < oA ? ut(nA, K, D) : null;
      t(A.C < N), t(oA <= S);
      var OA = !1;
      A: for (; ; ) {
        for (; OA || yA < oA; ) {
          var HA = 0;
          if (D >= EA) {
            var re = yA - B;
            t((EA = A).Pb), EA.wd = EA.m, EA.xd = re, 0 < EA.s.ua && LA(EA.s.Wa, EA.s.vb), EA = D + Bc;
          }
          if (K & lA || (SA = ut(nA, K, D)), t(SA != null), SA.Qb && (a[yA] = SA.qb, OA = !0), !OA) if (uA(W), SA.jc) {
            HA = W, re = a;
            var ZA = yA, ve = SA.pd[X(HA) & Ot - 1];
            t(SA.jc), 256 > ve.g ? (eA(HA, HA.u + ve.g), re[ZA] = ve.value, HA = 0) : (eA(HA, HA.u + ve.g - 256), t(256 <= ve.value), HA = ve.value), HA == 0 && (OA = !0);
          } else HA = Xt(SA.G[0], SA.H[0], W);
          if (W.h) break;
          if (OA || 256 > HA) {
            if (!OA) if (SA.nd) a[yA] = (SA.qb | HA << 8) >>> 0;
            else {
              if (uA(W), OA = Xt(SA.G[1], SA.H[1], W), uA(W), re = Xt(SA.G[2], SA.H[2], W), ZA = Xt(SA.G[3], SA.H[3], W), W.h) break;
              a[yA] = (ZA << 24 | OA << 16 | HA << 8 | re) >>> 0;
            }
            if (OA = !1, ++yA, ++K >= F && (K = 0, ++D, P != null && D <= N && !(D % 16) && P(A, D), sA != null)) for (; CA < yA; ) HA = a[CA++], sA.X[(506832829 * HA & 4294967295) >>> sA.Mb] = HA;
          } else if (280 > HA) {
            if (HA = Or(HA - 256, W), re = Xt(SA.G[4], SA.H[4], W), uA(W), re = Xr(F, re = Or(re, W)), W.h) break;
            if (yA - B < re || S - yA < HA) break A;
            for (ZA = 0; ZA < HA; ++ZA) a[yA + ZA] = a[yA + ZA - re];
            for (yA += HA, K += HA; K >= F; ) K -= F, ++D, P != null && D <= N && !(D % 16) && P(A, D);
            if (t(yA <= S), K & lA && (SA = ut(nA, K, D)), sA != null) for (; CA < yA; ) HA = a[CA++], sA.X[(506832829 * HA & 4294967295) >>> sA.Mb] = HA;
          } else {
            if (!(HA < jA)) break A;
            for (OA = HA - 280, t(sA != null); CA < yA; ) HA = a[CA++], sA.X[(506832829 * HA & 4294967295) >>> sA.Mb] = HA;
            HA = yA, t(!(OA >>> (re = sA).Xa)), a[HA] = re.X[OA], OA = !0;
          }
          OA || t(W.h == q(W));
        }
        if (A.Pb && W.h && yA < S) t(A.m.h), A.a = 5, A.m = A.wd, A.$ = A.xd, 0 < A.s.ua && LA(A.s.vb, A.s.Wa);
        else {
          if (W.h) break A;
          P != null && P(A, D > N ? N : D), A.a = 0, A.$ = yA - B;
        }
        return 1;
      }
      return A.a = 3, 0;
    }
    function Dr(A) {
      t(A != null), A.vc = null, A.yc = null, A.Ya = null;
      var a = A.Wa;
      a != null && (a.X = null), A.vb = null, t(A != null);
    }
    function mr() {
      var A = new Mo();
      return A == null ? null : (A.a = 0, A.xb = ya, Bt("Predictor", "VP8LPredictors"), Bt("Predictor", "VP8LPredictors_C"), Bt("PredictorAdd", "VP8LPredictorsAdd"), Bt("PredictorAdd", "VP8LPredictorsAdd_C"), ii = Te, hr = we, br = mA, $r = TA, _r = MA, un = fe, An = Ae, V.VP8LMapColor32b = Fr, V.VP8LMapColor8b = yt, A);
    }
    function Jr(A, a, B, F, S) {
      var N = 1, P = [A], D = [a], K = F.m, W = F.s, nA = null, yA = 0;
      A: for (; ; ) {
        if (B) for (; N && bA(K, 1); ) {
          var CA = P, oA = D, jA = F, EA = 1, sA = jA.m, lA = jA.gc[jA.ab], SA = bA(sA, 2);
          if (jA.Oc & 1 << SA) N = 0;
          else {
            switch (jA.Oc |= 1 << SA, lA.hc = SA, lA.Ea = CA[0], lA.nc = oA[0], lA.K = [null], ++jA.ab, t(4 >= jA.ab), SA) {
              case 0:
              case 1:
                lA.b = bA(sA, 3) + 2, EA = Jr(zA(lA.Ea, lA.b), zA(lA.nc, lA.b), 0, jA, lA.K), lA.K = lA.K[0];
                break;
              case 3:
                var OA, HA = bA(sA, 8) + 1, re = 16 < HA ? 0 : 4 < HA ? 1 : 2 < HA ? 2 : 3;
                if (CA[0] = zA(lA.Ea, re), lA.b = re, OA = EA = Jr(HA, 1, 0, jA, lA.K)) {
                  var ZA, ve = HA, $A = lA, Je = 1 << (8 >> $A.b), ze = u(Je);
                  if (ze == null) OA = 0;
                  else {
                    var _A = $A.K[0], Ke = $A.w;
                    for (ze[0] = $A.K[0][0], ZA = 1; ZA < 1 * ve; ++ZA) ze[ZA] = NA(_A[Ke + ZA], ze[ZA - 1]);
                    for (; ZA < 4 * Je; ++ZA) ze[ZA] = 0;
                    $A.K[0] = null, $A.K[0] = ze, OA = 1;
                  }
                }
                EA = OA;
                break;
              case 2:
                break;
              default:
                t(0);
            }
            N = EA;
          }
        }
        if (P = P[0], D = D[0], N && bA(K, 1) && !(N = 1 <= (yA = bA(K, 4)) && 11 >= yA)) {
          F.a = 3;
          break A;
        }
        var nt;
        if (nt = N) e: {
          var Ye, me, Ft, Zt = F, ct = P, Mt = D, Ze = yA, gr = B, pr = Zt.m, lt = Zt.s, Lt = [null], _t = 1, Ir = 0, kr = pc[Ze];
          t: for (; ; ) {
            if (gr && bA(pr, 1)) {
              var Pt = bA(pr, 3) + 2, Gr = zA(ct, Pt), is = zA(Mt, Pt), Hs = Gr * is;
              if (!Jr(Gr, is, 0, Zt, Lt)) break t;
              for (Lt = Lt[0], lt.xc = Pt, Ye = 0; Ye < Hs; ++Ye) {
                var On = Lt[Ye] >> 8 & 65535;
                Lt[Ye] = On, On >= _t && (_t = On + 1);
              }
            }
            if (pr.h) break t;
            for (me = 0; 5 > me; ++me) {
              var gt = va[me];
              !me && 0 < Ze && (gt += 1 << Ze), Ir < gt && (Ir = gt);
            }
            var Vo = p(_t * kr, _), xa = _t, Sa = p(xa, J);
            if (Sa == null) var oo = null;
            else t(65536 >= xa), oo = Sa;
            var js = u(Ir);
            if (oo == null || js == null || Vo == null) {
              Zt.a = 1;
              break t;
            }
            var ao = Vo;
            for (Ye = Ft = 0; Ye < _t; ++Ye) {
              var Vr = oo[Ye], Ns = Vr.G, os = Vr.H, Ha = 0, as = 1, ja = 0;
              for (me = 0; 5 > me; ++me) {
                gt = va[me], Ns[me] = ao, os[me] = Ft, !me && 0 < Ze && (gt += 1 << Ze);
                n: {
                  var Os, hi = gt, di = Zt, Ps = js, Oc = ao, Na = Ft, gi = 0, tn = di.m, Oa = bA(tn, 1);
                  if (d(Ps, 0, 0, hi), Oa) {
                    var Pa = bA(tn, 1) + 1, Ta = bA(tn, 1), Wo = bA(tn, Ta == 0 ? 1 : 8);
                    Ps[Wo] = 1, Pa == 2 && (Ps[Wo = bA(tn, 8)] = 1);
                    var Ts = 1;
                  } else {
                    var Da = u(19), Ma = bA(tn, 4) + 4;
                    if (19 < Ma) {
                      di.a = 3;
                      var co = 0;
                      break n;
                    }
                    for (Os = 0; Os < Ma; ++Os) Da[ro[Os]] = bA(tn, 3);
                    var ir = void 0, cs = void 0, _a = di, Pc = Da, lo = hi, Ka = Ps, Xo = 0, Pn = _a.m, Ra = 8, ka = p(128, _);
                    r: for (; T(ka, 0, 7, Pc, 19); ) {
                      if (bA(Pn, 1)) {
                        var Tc = 2 + 2 * bA(Pn, 3);
                        if ((ir = 2 + bA(Pn, Tc)) > lo) break r;
                      } else ir = lo;
                      for (cs = 0; cs < lo && ir--; ) {
                        uA(Pn);
                        var Jo = ka[0 + (127 & X(Pn))];
                        eA(Pn, Pn.u + Jo.g);
                        var Ds = Jo.value;
                        if (16 > Ds) Ka[cs++] = Ds, Ds != 0 && (Ra = Ds);
                        else {
                          var zo = Ds == 16, Yo = Ds - 16, Kt = hc[Yo], Ms = bA(Pn, fc[Yo]) + Kt;
                          if (cs + Ms > lo) break r;
                          for (var Dc = zo ? Ra : 0; 0 < Ms--; ) Ka[cs++] = Dc;
                        }
                      }
                      Xo = 1;
                      break r;
                    }
                    Xo || (_a.a = 3), Ts = Xo;
                  }
                  (Ts = Ts && !tn.h) && (gi = T(Oc, Na, 8, Ps, hi)), Ts && gi != 0 ? co = gi : (di.a = 3, co = 0);
                }
                if (co == 0) break t;
                if (as && dc[me] == 1 && (as = ao[Ft].g == 0), Ha += ao[Ft].g, Ft += co, 3 >= me) {
                  var pi, uo = js[0];
                  for (pi = 1; pi < gt; ++pi) js[pi] > uo && (uo = js[pi]);
                  ja += uo;
                }
              }
              if (Vr.nd = as, Vr.Qb = 0, as && (Vr.qb = (Ns[3][os[3] + 0].value << 24 | Ns[1][os[1] + 0].value << 16 | Ns[2][os[2] + 0].value) >>> 0, Ha == 0 && 256 > Ns[0][os[0] + 0].value && (Vr.Qb = 1, Vr.qb += Ns[0][os[0] + 0].value << 8)), Vr.jc = !Vr.Qb && 6 > ja, Vr.jc) {
                var _s, pn = Vr;
                for (_s = 0; _s < Ot; ++_s) {
                  var Tn = _s, Dn = pn.pd[Tn], fo = pn.G[0][pn.H[0] + Tn];
                  256 <= fo.value ? (Dn.g = fo.g + 256, Dn.value = fo.value) : (Dn.g = 0, Dn.value = 0, Tn >>= pe(fo, 8, Dn), Tn >>= pe(pn.G[1][pn.H[1] + Tn], 16, Dn), Tn >>= pe(pn.G[2][pn.H[2] + Tn], 0, Dn), pe(pn.G[3][pn.H[3] + Tn], 24, Dn));
                }
              }
            }
            lt.vc = Lt, lt.Wb = _t, lt.Ya = oo, lt.yc = Vo, nt = 1;
            break e;
          }
          nt = 0;
        }
        if (!(N = nt)) {
          F.a = 3;
          break A;
        }
        if (0 < yA) {
          if (W.ua = 1 << yA, !ce(W.Wa, yA)) {
            F.a = 1, N = 0;
            break A;
          }
        } else W.ua = 0;
        var qo = F, Ga = P, Mc = D, Zo = qo.s, ho = Zo.xc;
        if (qo.c = Ga, qo.i = Mc, Zo.md = zA(Ga, ho), Zo.wc = ho == 0 ? -1 : (1 << ho) - 1, B) {
          F.xb = bc;
          break A;
        }
        if ((nA = u(P * D)) == null) {
          F.a = 1, N = 0;
          break A;
        }
        N = (N = Tr(F, nA, 0, P, D, D, null)) && !K.h;
        break A;
      }
      return N ? (S != null ? S[0] = nA : (t(nA == null), t(B)), F.$ = 0, B || Dr(W)) : Dr(W), N;
    }
    function sn(A, a) {
      var B = A.c * A.i, F = B + a + 16 * a;
      return t(A.c <= a), A.V = u(F), A.V == null ? (A.Ta = null, A.Ua = 0, A.a = 1, 0) : (A.Ta = A.V, A.Ua = A.Ba + B + a, 1);
    }
    function Gn(A, a) {
      var B = A.C, F = a - B, S = A.V, N = A.Ba + A.c * B;
      for (t(a <= A.l.o); 0 < F; ) {
        var P = 16 < F ? 16 : F, D = A.l.ma, K = A.l.width, W = K * P, nA = D.ca, yA = D.tb + K * B, CA = A.Ta, oA = A.Ua;
        Jt(A, P, S, N), da(CA, oA, nA, yA, W), wr(D, B, B + P, nA, yA, K), F -= P, S += P * A.c, B += P;
      }
      t(B == a), A.C = A.Ma = a;
    }
    function ds() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function gs() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function ps() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = u(4), this.Lb = u(4);
    }
    function Ii() {
      this.Yb = function() {
        var A = [];
        return function a(B, F, S) {
          for (var N = S[F], P = 0; P < N && (B.push(S.length > F + 1 ? [] : 0), !(S.length < F + 1)); P++) a(B[P], F + 1, S);
        }(A, 0, [3, 11]), A;
      }();
    }
    function Uo() {
      this.jb = u(3), this.Wc = v([4, 8], Ii), this.Xc = v([4, 17], Ii);
    }
    function Eo() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new u(4), this.od = new u(4);
    }
    function zr() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Zs() {
      this.Na = this.la = 0;
    }
    function Bs() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function ws() {
      this.ad = u(384), this.Za = 0, this.Ob = u(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Vn() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new zr()), this.Y = 0, this.ya = Array(new ws()), this.aa = 0, this.l = new on();
    }
    function xi() {
      this.y = u(16), this.f = u(8), this.ea = u(8);
    }
    function Lo() {
      this.cb = this.a = 0, this.sc = "", this.m = new PA(), this.Od = new ds(), this.Kc = new gs(), this.ed = new Eo(), this.Qa = new ps(), this.Ic = this.$c = this.Aa = 0, this.D = new Vn(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = p(8, PA), this.ia = 0, this.pb = p(4, Bs), this.Pa = new Uo(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new xi()), this.Hd = 0, this.rb = Array(new Zs()), this.sb = 0, this.wa = Array(new zr()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new ws()), this.L = this.aa = 0, this.gd = v([4, 2], zr), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function on() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function Wn() {
      var A = new Lo();
      return A != null && (A.a = 0, A.sc = "OK", A.cb = 0, A.Xb = 0, ui || (ui = Xn)), A;
    }
    function wt(A, a, B) {
      return A.a == 0 && (A.a = a, A.sc = B, A.cb = 0), 0;
    }
    function Si(A, a, B) {
      return 3 <= B && A[a + 0] == 157 && A[a + 1] == 1 && A[a + 2] == 42;
    }
    function Hi(A, a) {
      if (A == null) return 0;
      if (A.a = 0, A.sc = "OK", a == null) return wt(A, 2, "null VP8Io passed to VP8GetHeaders()");
      var B = a.data, F = a.w, S = a.ha;
      if (4 > S) return wt(A, 7, "Truncated header.");
      var N = B[F + 0] | B[F + 1] << 8 | B[F + 2] << 16, P = A.Od;
      if (P.Rb = !(1 & N), P.td = N >> 1 & 7, P.yd = N >> 4 & 1, P.ub = N >> 5, 3 < P.td) return wt(A, 3, "Incorrect keyframe parameters.");
      if (!P.yd) return wt(A, 4, "Frame not displayable.");
      F += 3, S -= 3;
      var D = A.Kc;
      if (P.Rb) {
        if (7 > S) return wt(A, 7, "cannot parse picture header");
        if (!Si(B, F, S)) return wt(A, 3, "Bad code word");
        D.c = 16383 & (B[F + 4] << 8 | B[F + 3]), D.Td = B[F + 4] >> 6, D.i = 16383 & (B[F + 6] << 8 | B[F + 5]), D.Ud = B[F + 6] >> 6, F += 7, S -= 7, A.za = D.c + 15 >> 4, A.Ub = D.i + 15 >> 4, a.width = D.c, a.height = D.i, a.Da = 0, a.j = 0, a.v = 0, a.va = a.width, a.o = a.height, a.da = 0, a.ib = a.width, a.hb = a.height, a.U = a.width, a.T = a.height, d((N = A.Pa).jb, 0, 255, N.jb.length), t((N = A.Qa) != null), N.Cb = 0, N.Bb = 0, N.Fb = 1, d(N.Zb, 0, 0, N.Zb.length), d(N.Lb, 0, 0, N.Lb);
      }
      if (P.ub > S) return wt(A, 7, "bad partition length");
      tA(N = A.m, B, F, P.ub), F += P.ub, S -= P.ub, P.Rb && (D.Ld = FA(N), D.Kd = FA(N)), D = A.Qa;
      var K, W = A.Pa;
      if (t(N != null), t(D != null), D.Cb = FA(N), D.Cb) {
        if (D.Bb = FA(N), FA(N)) {
          for (D.Fb = FA(N), K = 0; 4 > K; ++K) D.Zb[K] = FA(N) ? vA(N, 7) : 0;
          for (K = 0; 4 > K; ++K) D.Lb[K] = FA(N) ? vA(N, 6) : 0;
        }
        if (D.Bb) for (K = 0; 3 > K; ++K) W.jb[K] = FA(N) ? aA(N, 8) : 255;
      } else D.Bb = 0;
      if (N.Ka) return wt(A, 3, "cannot parse segment header");
      if ((D = A.ed).zd = FA(N), D.Tb = aA(N, 6), D.wb = aA(N, 3), D.Pc = FA(N), D.Pc && FA(N)) {
        for (W = 0; 4 > W; ++W) FA(N) && (D.vd[W] = vA(N, 6));
        for (W = 0; 4 > W; ++W) FA(N) && (D.od[W] = vA(N, 6));
      }
      if (A.L = D.Tb == 0 ? 0 : D.zd ? 1 : 2, N.Ka) return wt(A, 3, "cannot parse filter header");
      var nA = S;
      if (S = K = F, F = K + nA, D = nA, A.Xb = (1 << aA(A.m, 2)) - 1, nA < 3 * (W = A.Xb)) B = 7;
      else {
        for (K += 3 * W, D -= 3 * W, nA = 0; nA < W; ++nA) {
          var yA = B[S + 0] | B[S + 1] << 8 | B[S + 2] << 16;
          yA > D && (yA = D), tA(A.Jc[+nA], B, K, yA), K += yA, D -= yA, S += 3;
        }
        tA(A.Jc[+W], B, K, D), B = K < F ? 0 : 5;
      }
      if (B != 0) return wt(A, B, "cannot parse partitions");
      for (B = aA(K = A.m, 7), S = FA(K) ? vA(K, 4) : 0, F = FA(K) ? vA(K, 4) : 0, D = FA(K) ? vA(K, 4) : 0, W = FA(K) ? vA(K, 4) : 0, K = FA(K) ? vA(K, 4) : 0, nA = A.Qa, yA = 0; 4 > yA; ++yA) {
        if (nA.Cb) {
          var CA = nA.Zb[yA];
          nA.Fb || (CA += B);
        } else {
          if (0 < yA) {
            A.pb[yA] = A.pb[0];
            continue;
          }
          CA = B;
        }
        var oA = A.pb[yA];
        oA.Sc[0] = Ro[jt(CA + S, 127)], oA.Sc[1] = Ss[jt(CA + 0, 127)], oA.Eb[0] = 2 * Ro[jt(CA + F, 127)], oA.Eb[1] = 101581 * Ss[jt(CA + D, 127)] >> 16, 8 > oA.Eb[1] && (oA.Eb[1] = 8), oA.Qc[0] = Ro[jt(CA + W, 117)], oA.Qc[1] = Ss[jt(CA + K, 127)], oA.lc = CA + K;
      }
      if (!P.Rb) return wt(A, 4, "Not a key frame.");
      for (FA(N), P = A.Pa, B = 0; 4 > B; ++B) {
        for (S = 0; 8 > S; ++S) for (F = 0; 3 > F; ++F) for (D = 0; 11 > D; ++D) W = QA(N, Cc[B][S][F][D]) ? aA(N, 8) : mc[B][S][F][D], P.Wc[B][S].Yb[F][D] = W;
        for (S = 0; 17 > S; ++S) P.Xc[B][S] = P.Wc[B][Fc[S]];
      }
      return A.kc = FA(N), A.kc && (A.Bd = aA(N, 8)), A.cb = 1;
    }
    function Xn(A, a, B, F, S, N, P) {
      var D = a[S].Yb[B];
      for (B = 0; 16 > S; ++S) {
        if (!QA(A, D[B + 0])) return S;
        for (; !QA(A, D[B + 1]); ) if (D = a[++S].Yb[0], B = 0, S == 16) return 16;
        var K = a[S + 1].Yb;
        if (QA(A, D[B + 2])) {
          var W = A, nA = 0;
          if (QA(W, (CA = D)[(yA = B) + 3])) if (QA(W, CA[yA + 6])) {
            for (D = 0, yA = 2 * (nA = QA(W, CA[yA + 8])) + (CA = QA(W, CA[yA + 9 + nA])), nA = 0, CA = wc[yA]; CA[D]; ++D) nA += nA + QA(W, CA[D]);
            nA += 3 + (8 << yA);
          } else QA(W, CA[yA + 7]) ? (nA = 7 + 2 * QA(W, 165), nA += QA(W, 145)) : nA = 5 + QA(W, 159);
          else nA = QA(W, CA[yA + 4]) ? 3 + QA(W, CA[yA + 5]) : 2;
          D = K[2];
        } else nA = 1, D = K[1];
        K = P + vc[S], 0 > (W = A).b && gA(W);
        var yA, CA = W.b, oA = (yA = W.Ca >> 1) - (W.I >> CA) >> 31;
        --W.b, W.Ca += oA, W.Ca |= 1, W.I -= (yA + 1 & oA) << CA, N[K] = ((nA ^ oA) - oA) * F[(0 < S) + 0];
      }
      return 16;
    }
    function yn(A) {
      var a = A.rb[A.sb - 1];
      a.la = 0, a.Na = 0, d(A.zc, 0, 0, A.zc.length), A.ja = 0;
    }
    function Jn(A, a) {
      if (A == null) return 0;
      if (a == null) return wt(A, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!A.cb && !Hi(A, a)) return 0;
      if (t(A.cb), a.ac == null || a.ac(a)) {
        a.ob && (A.L = 0);
        var B = io[A.L];
        if (A.L == 2 ? (A.yb = 0, A.zb = 0) : (A.yb = a.v - B >> 4, A.zb = a.j - B >> 4, 0 > A.yb && (A.yb = 0), 0 > A.zb && (A.zb = 0)), A.Va = a.o + 15 + B >> 4, A.Hb = a.va + 15 + B >> 4, A.Hb > A.za && (A.Hb = A.za), A.Va > A.Ub && (A.Va = A.Ub), 0 < A.L) {
          var F = A.ed;
          for (B = 0; 4 > B; ++B) {
            var S;
            if (A.Qa.Cb) {
              var N = A.Qa.Lb[B];
              A.Qa.Fb || (N += F.Tb);
            } else N = F.Tb;
            for (S = 0; 1 >= S; ++S) {
              var P = A.gd[B][S], D = N;
              if (F.Pc && (D += F.vd[0], S && (D += F.od[0])), 0 < (D = 0 > D ? 0 : 63 < D ? 63 : D)) {
                var K = D;
                0 < F.wb && (K = 4 < F.wb ? K >> 2 : K >> 1) > 9 - F.wb && (K = 9 - F.wb), 1 > K && (K = 1), P.dd = K, P.tc = 2 * D + K, P.ld = 40 <= D ? 2 : 15 <= D ? 1 : 0;
              } else P.tc = 0;
              P.La = S;
            }
          }
        }
        B = 0;
      } else wt(A, 6, "Frame setup failed"), B = A.a;
      if (B = B == 0) {
        if (B) {
          A.$c = 0, 0 < A.Aa || (A.Ic = Nc);
          A: {
            B = A.Ic, F = 4 * (K = A.za);
            var W = 32 * K, nA = K + 1, yA = 0 < A.L ? K * (0 < A.Aa ? 2 : 1) : 0, CA = (A.Aa == 2 ? 2 : 1) * K;
            if ((P = F + 832 + (S = 3 * (16 * B + io[A.L]) / 2 * W) + (N = A.Fa != null && 0 < A.Fa.length ? A.Kc.c * A.Kc.i : 0)) != P) B = 0;
            else {
              if (P > A.Vb) {
                if (A.Vb = 0, A.Ec = u(P), A.Fc = 0, A.Ec == null) {
                  B = wt(A, 1, "no memory during frame initialization.");
                  break A;
                }
                A.Vb = P;
              }
              P = A.Ec, D = A.Fc, A.Ac = P, A.Bc = D, D += F, A.Gd = p(W, xi), A.Hd = 0, A.rb = p(nA + 1, Zs), A.sb = 1, A.wa = yA ? p(yA, zr) : null, A.Y = 0, A.D.Nb = 0, A.D.wa = A.wa, A.D.Y = A.Y, 0 < A.Aa && (A.D.Y += K), t(!0), A.oc = P, A.pc = D, D += 832, A.ya = p(CA, ws), A.aa = 0, A.D.ya = A.ya, A.D.aa = A.aa, A.Aa == 2 && (A.D.aa += K), A.R = 16 * K, A.B = 8 * K, K = (W = io[A.L]) * A.R, W = W / 2 * A.B, A.sa = P, A.ta = D + K, A.qa = A.sa, A.ra = A.ta + 16 * B * A.R + W, A.Ha = A.qa, A.Ia = A.ra + 8 * B * A.B + W, A.$c = 0, D += S, A.mb = N ? P : null, A.nb = N ? D : null, t(D + N <= A.Fc + A.Vb), yn(A), d(A.Ac, A.Bc, 0, F), B = 1;
            }
          }
          if (B) {
            if (a.ka = 0, a.y = A.sa, a.O = A.ta, a.f = A.qa, a.N = A.ra, a.ea = A.Ha, a.Vd = A.Ia, a.fa = A.R, a.Rc = A.B, a.F = null, a.J = 0, !Ba) {
              for (B = -255; 255 >= B; ++B) li[255 + B] = 0 > B ? -B : B;
              for (B = -1020; 1020 >= B; ++B) ga[1020 + B] = -128 > B ? -128 : 127 < B ? 127 : B;
              for (B = -112; 112 >= B; ++B) pa[112 + B] = -16 > B ? -16 : 15 < B ? 15 : B;
              for (B = -255; 510 >= B; ++B) zi[255 + B] = 0 > B ? 0 : 255 < B ? 255 : B;
              Ba = 1;
            }
            Et = So, Ls = Io, Kr = Ni, Qr = xo, fn = Oi, oi = ji, rs = Ln, Wt = In, Sn = Cs, Hn = qn, ai = Do, qt = ur, hn = ei, tt = Wi, rt = cn, dt = ln, Ct = Un, en = To, Rr[0] = qr, Rr[1] = Ho, Rr[2] = Oo, Rr[3] = Po, Rr[4] = Di, Rr[5] = vs, Rr[6] = Mi, Rr[7] = nr, Rr[8] = Ki, Rr[9] = _i, jn[0] = Yr, jn[1] = jo, jn[2] = an, jn[3] = zn, jn[4] = Gt, jn[5] = No, jn[6] = Ti, Er[0] = bn, Er[1] = Pi, Er[2] = Ri, Er[3] = Ai, Er[4] = Qn, Er[5] = ki, Er[6] = ms, B = 1;
          } else B = 0;
        }
        B && (B = function(oA, jA) {
          for (oA.M = 0; oA.M < oA.Va; ++oA.M) {
            var EA, sA = oA.Jc[oA.M & oA.Xb], lA = oA.m, SA = oA;
            for (EA = 0; EA < SA.za; ++EA) {
              var OA = lA, HA = SA, re = HA.Ac, ZA = HA.Bc + 4 * EA, ve = HA.zc, $A = HA.ya[HA.aa + EA];
              if (HA.Qa.Bb ? $A.$b = QA(OA, HA.Pa.jb[0]) ? 2 + QA(OA, HA.Pa.jb[2]) : QA(OA, HA.Pa.jb[1]) : $A.$b = 0, HA.kc && ($A.Ad = QA(OA, HA.Bd)), $A.Za = !QA(OA, 145) + 0, $A.Za) {
                var Je = $A.Ob, ze = 0;
                for (HA = 0; 4 > HA; ++HA) {
                  var _A, Ke = ve[0 + HA];
                  for (_A = 0; 4 > _A; ++_A) {
                    Ke = yc[re[ZA + _A]][Ke];
                    for (var nt = ma[QA(OA, Ke[0])]; 0 < nt; ) nt = ma[2 * nt + QA(OA, Ke[nt])];
                    Ke = -nt, re[ZA + _A] = Ke;
                  }
                  c(Je, ze, re, ZA, 4), ze += 4, ve[0 + HA] = Ke;
                }
              } else Ke = QA(OA, 156) ? QA(OA, 128) ? 1 : 3 : QA(OA, 163) ? 2 : 0, $A.Ob[0] = Ke, d(re, ZA, Ke, 4), d(ve, 0, Ke, 4);
              $A.Dd = QA(OA, 142) ? QA(OA, 114) ? QA(OA, 183) ? 1 : 3 : 2 : 0;
            }
            if (SA.m.Ka) return wt(oA, 7, "Premature end-of-partition0 encountered.");
            for (; oA.ja < oA.za; ++oA.ja) {
              if (SA = sA, OA = (lA = oA).rb[lA.sb - 1], re = lA.rb[lA.sb + lA.ja], EA = lA.ya[lA.aa + lA.ja], ZA = lA.kc ? EA.Ad : 0) OA.la = re.la = 0, EA.Za || (OA.Na = re.Na = 0), EA.Hc = 0, EA.Gc = 0, EA.ia = 0;
              else {
                var Ye, me;
                if (OA = re, re = SA, ZA = lA.Pa.Xc, ve = lA.ya[lA.aa + lA.ja], $A = lA.pb[ve.$b], HA = ve.ad, Je = 0, ze = lA.rb[lA.sb - 1], Ke = _A = 0, d(HA, Je, 0, 384), ve.Za) var Ft = 0, Zt = ZA[3];
                else {
                  nt = u(16);
                  var ct = OA.Na + ze.Na;
                  if (ct = ui(re, ZA[1], ct, $A.Eb, 0, nt, 0), OA.Na = ze.Na = (0 < ct) + 0, 1 < ct) Et(nt, 0, HA, Je);
                  else {
                    var Mt = nt[0] + 3 >> 3;
                    for (nt = 0; 256 > nt; nt += 16) HA[Je + nt] = Mt;
                  }
                  Ft = 1, Zt = ZA[0];
                }
                var Ze = 15 & OA.la, gr = 15 & ze.la;
                for (nt = 0; 4 > nt; ++nt) {
                  var pr = 1 & gr;
                  for (Mt = me = 0; 4 > Mt; ++Mt) Ze = Ze >> 1 | (pr = (ct = ui(re, Zt, ct = pr + (1 & Ze), $A.Sc, Ft, HA, Je)) > Ft) << 7, me = me << 2 | (3 < ct ? 3 : 1 < ct ? 2 : HA[Je + 0] != 0), Je += 16;
                  Ze >>= 4, gr = gr >> 1 | pr << 7, _A = (_A << 8 | me) >>> 0;
                }
                for (Zt = Ze, Ft = gr >> 4, Ye = 0; 4 > Ye; Ye += 2) {
                  for (me = 0, Ze = OA.la >> 4 + Ye, gr = ze.la >> 4 + Ye, nt = 0; 2 > nt; ++nt) {
                    for (pr = 1 & gr, Mt = 0; 2 > Mt; ++Mt) ct = pr + (1 & Ze), Ze = Ze >> 1 | (pr = 0 < (ct = ui(re, ZA[2], ct, $A.Qc, 0, HA, Je))) << 3, me = me << 2 | (3 < ct ? 3 : 1 < ct ? 2 : HA[Je + 0] != 0), Je += 16;
                    Ze >>= 2, gr = gr >> 1 | pr << 5;
                  }
                  Ke |= me << 4 * Ye, Zt |= Ze << 4 << Ye, Ft |= (240 & gr) << Ye;
                }
                OA.la = Zt, ze.la = Ft, ve.Hc = _A, ve.Gc = Ke, ve.ia = 43690 & Ke ? 0 : $A.ia, ZA = !(_A | Ke);
              }
              if (0 < lA.L && (lA.wa[lA.Y + lA.ja] = lA.gd[EA.$b][EA.Za], lA.wa[lA.Y + lA.ja].La |= !ZA), SA.Ka) return wt(oA, 7, "Premature end-of-file encountered.");
            }
            if (yn(oA), lA = jA, SA = 1, EA = (sA = oA).D, OA = 0 < sA.L && sA.M >= sA.zb && sA.M <= sA.Va, sA.Aa == 0) A: {
              if (EA.M = sA.M, EA.uc = OA, at(sA, EA), SA = 1, EA = (me = sA.D).Nb, OA = (Ke = io[sA.L]) * sA.R, re = Ke / 2 * sA.B, nt = 16 * EA * sA.R, Mt = 8 * EA * sA.B, ZA = sA.sa, ve = sA.ta - OA + nt, $A = sA.qa, HA = sA.ra - re + Mt, Je = sA.Ha, ze = sA.Ia - re + Mt, gr = (Ze = me.M) == 0, _A = Ze >= sA.Va - 1, sA.Aa == 2 && at(sA, me), me.uc) for (pr = (ct = sA).D.M, t(ct.D.uc), me = ct.yb; me < ct.Hb; ++me) {
                Ft = me, Zt = pr;
                var lt = (Lt = (gt = ct).D).Nb;
                Ye = gt.R;
                var Lt = Lt.wa[Lt.Y + Ft], _t = gt.sa, Ir = gt.ta + 16 * lt * Ye + 16 * Ft, kr = Lt.dd, Pt = Lt.tc;
                if (Pt != 0) if (t(3 <= Pt), gt.L == 1) 0 < Ft && dt(_t, Ir, Ye, Pt + 4), Lt.La && en(_t, Ir, Ye, Pt), 0 < Zt && rt(_t, Ir, Ye, Pt + 4), Lt.La && Ct(_t, Ir, Ye, Pt);
                else {
                  var Gr = gt.B, is = gt.qa, Hs = gt.ra + 8 * lt * Gr + 8 * Ft, On = gt.Ha, gt = gt.Ia + 8 * lt * Gr + 8 * Ft;
                  lt = Lt.ld, 0 < Ft && (Wt(_t, Ir, Ye, Pt + 4, kr, lt), Hn(is, Hs, On, gt, Gr, Pt + 4, kr, lt)), Lt.La && (qt(_t, Ir, Ye, Pt, kr, lt), tt(is, Hs, On, gt, Gr, Pt, kr, lt)), 0 < Zt && (rs(_t, Ir, Ye, Pt + 4, kr, lt), Sn(is, Hs, On, gt, Gr, Pt + 4, kr, lt)), Lt.La && (ai(_t, Ir, Ye, Pt, kr, lt), hn(is, Hs, On, gt, Gr, Pt, kr, lt));
                }
              }
              if (sA.ia && alert("todo:DitherRow"), lA.put != null) {
                if (me = 16 * Ze, Ze = 16 * (Ze + 1), gr ? (lA.y = sA.sa, lA.O = sA.ta + nt, lA.f = sA.qa, lA.N = sA.ra + Mt, lA.ea = sA.Ha, lA.W = sA.Ia + Mt) : (me -= Ke, lA.y = ZA, lA.O = ve, lA.f = $A, lA.N = HA, lA.ea = Je, lA.W = ze), _A || (Ze -= Ke), Ze > lA.o && (Ze = lA.o), lA.F = null, lA.J = null, sA.Fa != null && 0 < sA.Fa.length && me < Ze && (lA.J = si(sA, lA, me, Ze - me), lA.F = sA.mb, lA.F == null && lA.F.length == 0)) {
                  SA = wt(sA, 3, "Could not decode alpha data.");
                  break A;
                }
                me < lA.j && (Ke = lA.j - me, me = lA.j, t(!(1 & Ke)), lA.O += sA.R * Ke, lA.N += sA.B * (Ke >> 1), lA.W += sA.B * (Ke >> 1), lA.F != null && (lA.J += lA.width * Ke)), me < Ze && (lA.O += lA.v, lA.N += lA.v >> 1, lA.W += lA.v >> 1, lA.F != null && (lA.J += lA.v), lA.ka = me - lA.j, lA.U = lA.va - lA.v, lA.T = Ze - me, SA = lA.put(lA));
              }
              EA + 1 != sA.Ic || _A || (c(sA.sa, sA.ta - OA, ZA, ve + 16 * sA.R, OA), c(sA.qa, sA.ra - re, $A, HA + 8 * sA.B, re), c(sA.Ha, sA.Ia - re, Je, ze + 8 * sA.B, re));
            }
            if (!SA) return wt(oA, 6, "Output aborted.");
          }
          return 1;
        }(A, a)), a.bc != null && a.bc(a), B &= 1;
      }
      return B ? (A.cb = 0, B) : 0;
    }
    function Mr(A, a, B, F, S) {
      S = A[a + B + 32 * F] + (S >> 3), A[a + B + 32 * F] = -256 & S ? 0 > S ? 0 : 255 : S;
    }
    function Qt(A, a, B, F, S, N) {
      Mr(A, a, 0, B, F + S), Mr(A, a, 1, B, F + N), Mr(A, a, 2, B, F - N), Mr(A, a, 3, B, F - S);
    }
    function rr(A) {
      return (20091 * A >> 16) + A;
    }
    function $s(A, a, B, F) {
      var S, N = 0, P = u(16);
      for (S = 0; 4 > S; ++S) {
        var D = A[a + 0] + A[a + 8], K = A[a + 0] - A[a + 8], W = (35468 * A[a + 4] >> 16) - rr(A[a + 12]), nA = rr(A[a + 4]) + (35468 * A[a + 12] >> 16);
        P[N + 0] = D + nA, P[N + 1] = K + W, P[N + 2] = K - W, P[N + 3] = D - nA, N += 4, a++;
      }
      for (S = N = 0; 4 > S; ++S) D = (A = P[N + 0] + 4) + P[N + 8], K = A - P[N + 8], W = (35468 * P[N + 4] >> 16) - rr(P[N + 12]), Mr(B, F, 0, 0, D + (nA = rr(P[N + 4]) + (35468 * P[N + 12] >> 16))), Mr(B, F, 1, 0, K + W), Mr(B, F, 2, 0, K - W), Mr(B, F, 3, 0, D - nA), N++, F += 32;
    }
    function ji(A, a, B, F) {
      var S = A[a + 0] + 4, N = 35468 * A[a + 4] >> 16, P = rr(A[a + 4]), D = 35468 * A[a + 1] >> 16;
      Qt(B, F, 0, S + P, A = rr(A[a + 1]), D), Qt(B, F, 1, S + N, A, D), Qt(B, F, 2, S - N, A, D), Qt(B, F, 3, S - P, A, D);
    }
    function Io(A, a, B, F, S) {
      $s(A, a, B, F), S && $s(A, a + 16, B, F + 4);
    }
    function Ni(A, a, B, F) {
      Ls(A, a + 0, B, F, 1), Ls(A, a + 32, B, F + 128, 1);
    }
    function xo(A, a, B, F) {
      var S;
      for (A = A[a + 0] + 4, S = 0; 4 > S; ++S) for (a = 0; 4 > a; ++a) Mr(B, F, a, S, A);
    }
    function Oi(A, a, B, F) {
      A[a + 0] && Qr(A, a + 0, B, F), A[a + 16] && Qr(A, a + 16, B, F + 4), A[a + 32] && Qr(A, a + 32, B, F + 128), A[a + 48] && Qr(A, a + 48, B, F + 128 + 4);
    }
    function So(A, a, B, F) {
      var S, N = u(16);
      for (S = 0; 4 > S; ++S) {
        var P = A[a + 0 + S] + A[a + 12 + S], D = A[a + 4 + S] + A[a + 8 + S], K = A[a + 4 + S] - A[a + 8 + S], W = A[a + 0 + S] - A[a + 12 + S];
        N[0 + S] = P + D, N[8 + S] = P - D, N[4 + S] = W + K, N[12 + S] = W - K;
      }
      for (S = 0; 4 > S; ++S) P = (A = N[0 + 4 * S] + 3) + N[3 + 4 * S], D = N[1 + 4 * S] + N[2 + 4 * S], K = N[1 + 4 * S] - N[2 + 4 * S], W = A - N[3 + 4 * S], B[F + 0] = P + D >> 3, B[F + 16] = W + K >> 3, B[F + 32] = P - D >> 3, B[F + 48] = W - K >> 3, F += 64;
    }
    function Cn(A, a, B) {
      var F, S = a - 32, N = dr, P = 255 - A[S - 1];
      for (F = 0; F < B; ++F) {
        var D, K = N, W = P + A[a - 1];
        for (D = 0; D < B; ++D) A[a + D] = K[W + A[S + D]];
        a += 32;
      }
    }
    function Ho(A, a) {
      Cn(A, a, 4);
    }
    function Pi(A, a) {
      Cn(A, a, 8);
    }
    function jo(A, a) {
      Cn(A, a, 16);
    }
    function an(A, a) {
      var B;
      for (B = 0; 16 > B; ++B) c(A, a + 32 * B, A, a - 32, 16);
    }
    function zn(A, a) {
      var B;
      for (B = 16; 0 < B; --B) d(A, a, A[a - 1], 16), a += 32;
    }
    function Fn(A, a, B) {
      var F;
      for (F = 0; 16 > F; ++F) d(a, B + 32 * F, A, 16);
    }
    function Yr(A, a) {
      var B, F = 16;
      for (B = 0; 16 > B; ++B) F += A[a - 1 + 32 * B] + A[a + B - 32];
      Fn(F >> 5, A, a);
    }
    function Gt(A, a) {
      var B, F = 8;
      for (B = 0; 16 > B; ++B) F += A[a - 1 + 32 * B];
      Fn(F >> 4, A, a);
    }
    function No(A, a) {
      var B, F = 8;
      for (B = 0; 16 > B; ++B) F += A[a + B - 32];
      Fn(F >> 4, A, a);
    }
    function Ti(A, a) {
      Fn(128, A, a);
    }
    function Qe(A, a, B) {
      return A + 2 * a + B + 2 >> 2;
    }
    function Oo(A, a) {
      var B, F = a - 32;
      for (F = new Uint8Array([Qe(A[F - 1], A[F + 0], A[F + 1]), Qe(A[F + 0], A[F + 1], A[F + 2]), Qe(A[F + 1], A[F + 2], A[F + 3]), Qe(A[F + 2], A[F + 3], A[F + 4])]), B = 0; 4 > B; ++B) c(A, a + 32 * B, F, 0, F.length);
    }
    function Po(A, a) {
      var B = A[a - 1], F = A[a - 1 + 32], S = A[a - 1 + 64], N = A[a - 1 + 96];
      DA(A, a + 0, 16843009 * Qe(A[a - 1 - 32], B, F)), DA(A, a + 32, 16843009 * Qe(B, F, S)), DA(A, a + 64, 16843009 * Qe(F, S, N)), DA(A, a + 96, 16843009 * Qe(S, N, N));
    }
    function qr(A, a) {
      var B, F = 4;
      for (B = 0; 4 > B; ++B) F += A[a + B - 32] + A[a - 1 + 32 * B];
      for (F >>= 3, B = 0; 4 > B; ++B) d(A, a + 32 * B, F, 4);
    }
    function Di(A, a) {
      var B = A[a - 1 + 0], F = A[a - 1 + 32], S = A[a - 1 + 64], N = A[a - 1 - 32], P = A[a + 0 - 32], D = A[a + 1 - 32], K = A[a + 2 - 32], W = A[a + 3 - 32];
      A[a + 0 + 96] = Qe(F, S, A[a - 1 + 96]), A[a + 1 + 96] = A[a + 0 + 64] = Qe(B, F, S), A[a + 2 + 96] = A[a + 1 + 64] = A[a + 0 + 32] = Qe(N, B, F), A[a + 3 + 96] = A[a + 2 + 64] = A[a + 1 + 32] = A[a + 0 + 0] = Qe(P, N, B), A[a + 3 + 64] = A[a + 2 + 32] = A[a + 1 + 0] = Qe(D, P, N), A[a + 3 + 32] = A[a + 2 + 0] = Qe(K, D, P), A[a + 3 + 0] = Qe(W, K, D);
    }
    function Mi(A, a) {
      var B = A[a + 1 - 32], F = A[a + 2 - 32], S = A[a + 3 - 32], N = A[a + 4 - 32], P = A[a + 5 - 32], D = A[a + 6 - 32], K = A[a + 7 - 32];
      A[a + 0 + 0] = Qe(A[a + 0 - 32], B, F), A[a + 1 + 0] = A[a + 0 + 32] = Qe(B, F, S), A[a + 2 + 0] = A[a + 1 + 32] = A[a + 0 + 64] = Qe(F, S, N), A[a + 3 + 0] = A[a + 2 + 32] = A[a + 1 + 64] = A[a + 0 + 96] = Qe(S, N, P), A[a + 3 + 32] = A[a + 2 + 64] = A[a + 1 + 96] = Qe(N, P, D), A[a + 3 + 64] = A[a + 2 + 96] = Qe(P, D, K), A[a + 3 + 96] = Qe(D, K, K);
    }
    function vs(A, a) {
      var B = A[a - 1 + 0], F = A[a - 1 + 32], S = A[a - 1 + 64], N = A[a - 1 - 32], P = A[a + 0 - 32], D = A[a + 1 - 32], K = A[a + 2 - 32], W = A[a + 3 - 32];
      A[a + 0 + 0] = A[a + 1 + 64] = N + P + 1 >> 1, A[a + 1 + 0] = A[a + 2 + 64] = P + D + 1 >> 1, A[a + 2 + 0] = A[a + 3 + 64] = D + K + 1 >> 1, A[a + 3 + 0] = K + W + 1 >> 1, A[a + 0 + 96] = Qe(S, F, B), A[a + 0 + 64] = Qe(F, B, N), A[a + 0 + 32] = A[a + 1 + 96] = Qe(B, N, P), A[a + 1 + 32] = A[a + 2 + 96] = Qe(N, P, D), A[a + 2 + 32] = A[a + 3 + 96] = Qe(P, D, K), A[a + 3 + 32] = Qe(D, K, W);
    }
    function nr(A, a) {
      var B = A[a + 0 - 32], F = A[a + 1 - 32], S = A[a + 2 - 32], N = A[a + 3 - 32], P = A[a + 4 - 32], D = A[a + 5 - 32], K = A[a + 6 - 32], W = A[a + 7 - 32];
      A[a + 0 + 0] = B + F + 1 >> 1, A[a + 1 + 0] = A[a + 0 + 64] = F + S + 1 >> 1, A[a + 2 + 0] = A[a + 1 + 64] = S + N + 1 >> 1, A[a + 3 + 0] = A[a + 2 + 64] = N + P + 1 >> 1, A[a + 0 + 32] = Qe(B, F, S), A[a + 1 + 32] = A[a + 0 + 96] = Qe(F, S, N), A[a + 2 + 32] = A[a + 1 + 96] = Qe(S, N, P), A[a + 3 + 32] = A[a + 2 + 96] = Qe(N, P, D), A[a + 3 + 64] = Qe(P, D, K), A[a + 3 + 96] = Qe(D, K, W);
    }
    function _i(A, a) {
      var B = A[a - 1 + 0], F = A[a - 1 + 32], S = A[a - 1 + 64], N = A[a - 1 + 96];
      A[a + 0 + 0] = B + F + 1 >> 1, A[a + 2 + 0] = A[a + 0 + 32] = F + S + 1 >> 1, A[a + 2 + 32] = A[a + 0 + 64] = S + N + 1 >> 1, A[a + 1 + 0] = Qe(B, F, S), A[a + 3 + 0] = A[a + 1 + 32] = Qe(F, S, N), A[a + 3 + 32] = A[a + 1 + 64] = Qe(S, N, N), A[a + 3 + 64] = A[a + 2 + 64] = A[a + 0 + 96] = A[a + 1 + 96] = A[a + 2 + 96] = A[a + 3 + 96] = N;
    }
    function Ki(A, a) {
      var B = A[a - 1 + 0], F = A[a - 1 + 32], S = A[a - 1 + 64], N = A[a - 1 + 96], P = A[a - 1 - 32], D = A[a + 0 - 32], K = A[a + 1 - 32], W = A[a + 2 - 32];
      A[a + 0 + 0] = A[a + 2 + 32] = B + P + 1 >> 1, A[a + 0 + 32] = A[a + 2 + 64] = F + B + 1 >> 1, A[a + 0 + 64] = A[a + 2 + 96] = S + F + 1 >> 1, A[a + 0 + 96] = N + S + 1 >> 1, A[a + 3 + 0] = Qe(D, K, W), A[a + 2 + 0] = Qe(P, D, K), A[a + 1 + 0] = A[a + 3 + 32] = Qe(B, P, D), A[a + 1 + 32] = A[a + 3 + 64] = Qe(F, B, P), A[a + 1 + 64] = A[a + 3 + 96] = Qe(S, F, B), A[a + 1 + 96] = Qe(N, S, F);
    }
    function Ri(A, a) {
      var B;
      for (B = 0; 8 > B; ++B) c(A, a + 32 * B, A, a - 32, 8);
    }
    function Ai(A, a) {
      var B;
      for (B = 0; 8 > B; ++B) d(A, a, A[a - 1], 8), a += 32;
    }
    function Yn(A, a, B) {
      var F;
      for (F = 0; 8 > F; ++F) d(a, B + 32 * F, A, 8);
    }
    function bn(A, a) {
      var B, F = 8;
      for (B = 0; 8 > B; ++B) F += A[a + B - 32] + A[a - 1 + 32 * B];
      Yn(F >> 4, A, a);
    }
    function ki(A, a) {
      var B, F = 4;
      for (B = 0; 8 > B; ++B) F += A[a + B - 32];
      Yn(F >> 3, A, a);
    }
    function Qn(A, a) {
      var B, F = 4;
      for (B = 0; 8 > B; ++B) F += A[a - 1 + 32 * B];
      Yn(F >> 3, A, a);
    }
    function ms(A, a) {
      Yn(128, A, a);
    }
    function ys(A, a, B) {
      var F = A[a - B], S = A[a + 0], N = 3 * (S - F) + Yi[1020 + A[a - 2 * B] - A[a + B]], P = qi[112 + (N + 4 >> 3)];
      A[a - B] = dr[255 + F + qi[112 + (N + 3 >> 3)]], A[a + 0] = dr[255 + S - P];
    }
    function Gi(A, a, B, F) {
      var S = A[a + 0], N = A[a + B];
      return Ur[255 + A[a - 2 * B] - A[a - B]] > F || Ur[255 + N - S] > F;
    }
    function Ut(A, a, B, F) {
      return 4 * Ur[255 + A[a - B] - A[a + 0]] + Ur[255 + A[a - 2 * B] - A[a + B]] <= F;
    }
    function Vi(A, a, B, F, S) {
      var N = A[a - 3 * B], P = A[a - 2 * B], D = A[a - B], K = A[a + 0], W = A[a + B], nA = A[a + 2 * B], yA = A[a + 3 * B];
      return 4 * Ur[255 + D - K] + Ur[255 + P - W] > F ? 0 : Ur[255 + A[a - 4 * B] - N] <= S && Ur[255 + N - P] <= S && Ur[255 + P - D] <= S && Ur[255 + yA - nA] <= S && Ur[255 + nA - W] <= S && Ur[255 + W - K] <= S;
    }
    function cn(A, a, B, F) {
      var S = 2 * F + 1;
      for (F = 0; 16 > F; ++F) Ut(A, a + F, B, S) && ys(A, a + F, B);
    }
    function ln(A, a, B, F) {
      var S = 2 * F + 1;
      for (F = 0; 16 > F; ++F) Ut(A, a + F * B, 1, S) && ys(A, a + F * B, 1);
    }
    function Un(A, a, B, F) {
      var S;
      for (S = 3; 0 < S; --S) cn(A, a += 4 * B, B, F);
    }
    function To(A, a, B, F) {
      var S;
      for (S = 3; 0 < S; --S) ln(A, a += 4, B, F);
    }
    function En(A, a, B, F, S, N, P, D) {
      for (N = 2 * N + 1; 0 < S--; ) {
        if (Vi(A, a, B, N, P)) if (Gi(A, a, B, D)) ys(A, a, B);
        else {
          var K = A, W = a, nA = B, yA = K[W - 2 * nA], CA = K[W - nA], oA = K[W + 0], jA = K[W + nA], EA = K[W + 2 * nA], sA = 27 * (SA = Yi[1020 + 3 * (oA - CA) + Yi[1020 + yA - jA]]) + 63 >> 7, lA = 18 * SA + 63 >> 7, SA = 9 * SA + 63 >> 7;
          K[W - 3 * nA] = dr[255 + K[W - 3 * nA] + SA], K[W - 2 * nA] = dr[255 + yA + lA], K[W - nA] = dr[255 + CA + sA], K[W + 0] = dr[255 + oA - sA], K[W + nA] = dr[255 + jA - lA], K[W + 2 * nA] = dr[255 + EA - SA];
        }
        a += F;
      }
    }
    function sr(A, a, B, F, S, N, P, D) {
      for (N = 2 * N + 1; 0 < S--; ) {
        if (Vi(A, a, B, N, P)) if (Gi(A, a, B, D)) ys(A, a, B);
        else {
          var K = A, W = a, nA = B, yA = K[W - nA], CA = K[W + 0], oA = K[W + nA], jA = qi[112 + ((EA = 3 * (CA - yA)) + 4 >> 3)], EA = qi[112 + (EA + 3 >> 3)], sA = jA + 1 >> 1;
          K[W - 2 * nA] = dr[255 + K[W - 2 * nA] + sA], K[W - nA] = dr[255 + yA + EA], K[W + 0] = dr[255 + CA - jA], K[W + nA] = dr[255 + oA - sA];
        }
        a += F;
      }
    }
    function Ln(A, a, B, F, S, N) {
      En(A, a, B, 1, 16, F, S, N);
    }
    function In(A, a, B, F, S, N) {
      En(A, a, 1, B, 16, F, S, N);
    }
    function Do(A, a, B, F, S, N) {
      var P;
      for (P = 3; 0 < P; --P) sr(A, a += 4 * B, B, 1, 16, F, S, N);
    }
    function ur(A, a, B, F, S, N) {
      var P;
      for (P = 3; 0 < P; --P) sr(A, a += 4, 1, B, 16, F, S, N);
    }
    function Cs(A, a, B, F, S, N, P, D) {
      En(A, a, S, 1, 8, N, P, D), En(B, F, S, 1, 8, N, P, D);
    }
    function qn(A, a, B, F, S, N, P, D) {
      En(A, a, 1, S, 8, N, P, D), En(B, F, 1, S, 8, N, P, D);
    }
    function ei(A, a, B, F, S, N, P, D) {
      sr(A, a + 4 * S, S, 1, 8, N, P, D), sr(B, F + 4 * S, S, 1, 8, N, P, D);
    }
    function Wi(A, a, B, F, S, N, P, D) {
      sr(A, a + 4, 1, S, 8, N, P, D), sr(B, F + 4, 1, S, 8, N, P, D);
    }
    function Fs() {
      this.ba = new kt(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new qA(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function ti() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function ri() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Xi() {
      this.ua = 0, this.Wa = new $(), this.vb = new $(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new J(), this.yc = new _();
    }
    function Mo() {
      this.xb = this.a = 0, this.l = new on(), this.ca = new kt(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new j(), this.Pb = 0, this.wd = new j(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Xi(), this.ab = 0, this.gc = p(4, ri), this.Oc = 0;
    }
    function bs() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new on(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Zn(A, a, B, F, S, N, P) {
      for (A = A == null ? 0 : A[a + 0], a = 0; a < P; ++a) S[N + a] = A + B[F + a] & 255, A = S[N + a];
    }
    function ni(A, a, B, F, S, N, P) {
      var D;
      if (A == null) Zn(null, null, B, F, S, N, P);
      else for (D = 0; D < P; ++D) S[N + D] = A[a + D] + B[F + D] & 255;
    }
    function xn(A, a, B, F, S, N, P) {
      if (A == null) Zn(null, null, B, F, S, N, P);
      else {
        var D, K = A[a + 0], W = K, nA = K;
        for (D = 0; D < P; ++D) W = nA + (K = A[a + D]) - W, nA = B[F + D] + (-256 & W ? 0 > W ? 0 : 255 : W) & 255, W = K, S[N + D] = nA;
      }
    }
    function si(A, a, B, F) {
      var S = a.width, N = a.o;
      if (t(A != null && a != null), 0 > B || 0 >= F || B + F > N) return null;
      if (!A.Cc) {
        if (A.ga == null) {
          var P;
          if (A.ga = new bs(), (P = A.ga == null) || (P = a.width * a.o, t(A.Gb.length == 0), A.Gb = u(P), A.Uc = 0, A.Gb == null ? P = 0 : (A.mb = A.Gb, A.nb = A.Uc, A.rc = null, P = 1), P = !P), !P) {
            P = A.ga;
            var D = A.Fa, K = A.P, W = A.qc, nA = A.mb, yA = A.nb, CA = K + 1, oA = W - 1, jA = P.l;
            if (t(D != null && nA != null && a != null), gn[0] = null, gn[1] = Zn, gn[2] = ni, gn[3] = xn, P.ca = nA, P.tb = yA, P.c = a.width, P.i = a.height, t(0 < P.c && 0 < P.i), 1 >= W) a = 0;
            else if (P.$a = D[K + 0] >> 0 & 3, P.Z = D[K + 0] >> 2 & 3, P.Lc = D[K + 0] >> 4 & 3, K = D[K + 0] >> 6 & 3, 0 > P.$a || 1 < P.$a || 4 <= P.Z || 1 < P.Lc || K) a = 0;
            else if (jA.put = Dt, jA.ac = Re, jA.bc = er, jA.ma = P, jA.width = a.width, jA.height = a.height, jA.Da = a.Da, jA.v = a.v, jA.va = a.va, jA.j = a.j, jA.o = a.o, P.$a) A: {
              t(P.$a == 1), a = mr();
              e: for (; ; ) {
                if (a == null) {
                  a = 0;
                  break A;
                }
                if (t(P != null), P.mc = a, a.c = P.c, a.i = P.i, a.l = P.l, a.l.ma = P, a.l.width = P.c, a.l.height = P.i, a.a = 0, hA(a.m, D, CA, oA), !Jr(P.c, P.i, 1, a, null) || (a.ab == 1 && a.gc[0].hc == 3 && Pr(a.s) ? (P.ic = 1, D = a.c * a.i, a.Ta = null, a.Ua = 0, a.V = u(D), a.Ba = 0, a.V == null ? (a.a = 1, a = 0) : a = 1) : (P.ic = 0, a = sn(a, P.c)), !a)) break e;
                a = 1;
                break A;
              }
              P.mc = null, a = 0;
            }
            else a = oA >= P.c * P.i;
            P = !a;
          }
          if (P) return null;
          A.ga.Lc != 1 ? A.Ga = 0 : F = N - B;
        }
        t(A.ga != null), t(B + F <= N);
        A: {
          if (a = (D = A.ga).c, N = D.l.o, D.$a == 0) {
            if (CA = A.rc, oA = A.Vc, jA = A.Fa, K = A.P + 1 + B * a, W = A.mb, nA = A.nb + B * a, t(K <= A.P + A.qc), D.Z != 0) for (t(gn[D.Z] != null), P = 0; P < F; ++P) gn[D.Z](CA, oA, jA, K, W, nA, a), CA = W, oA = nA, nA += a, K += a;
            else for (P = 0; P < F; ++P) c(W, nA, jA, K, a), CA = W, oA = nA, nA += a, K += a;
            A.rc = CA, A.Vc = oA;
          } else {
            if (t(D.mc != null), a = B + F, t((P = D.mc) != null), t(a <= P.i), P.C >= a) a = 1;
            else if (D.ic || pA(), D.ic) {
              D = P.V, CA = P.Ba, oA = P.c;
              var EA = P.i, sA = (jA = 1, K = P.$ / oA, W = P.$ % oA, nA = P.m, yA = P.s, P.$), lA = oA * EA, SA = oA * a, OA = yA.wc, HA = sA < SA ? ut(yA, W, K) : null;
              t(sA <= lA), t(a <= EA), t(Pr(yA));
              e: for (; ; ) {
                for (; !nA.h && sA < SA; ) {
                  if (W & OA || (HA = ut(yA, W, K)), t(HA != null), uA(nA), 256 > (EA = Xt(HA.G[0], HA.H[0], nA))) D[CA + sA] = EA, ++sA, ++W >= oA && (W = 0, ++K <= a && !(K % 16) && vr(P, K));
                  else {
                    if (!(280 > EA)) {
                      jA = 0;
                      break e;
                    }
                    EA = Or(EA - 256, nA);
                    var re, ZA = Xt(HA.G[4], HA.H[4], nA);
                    if (uA(nA), !(sA >= (ZA = Xr(oA, ZA = Or(ZA, nA))) && lA - sA >= EA)) {
                      jA = 0;
                      break e;
                    }
                    for (re = 0; re < EA; ++re) D[CA + sA + re] = D[CA + sA + re - ZA];
                    for (sA += EA, W += EA; W >= oA; ) W -= oA, ++K <= a && !(K % 16) && vr(P, K);
                    sA < SA && W & OA && (HA = ut(yA, W, K));
                  }
                  t(nA.h == q(nA));
                }
                vr(P, K > a ? a : K);
                break e;
              }
              !jA || nA.h && sA < lA ? (jA = 0, P.a = nA.h ? 5 : 3) : P.$ = sA, a = jA;
            } else a = Tr(P, P.V, P.Ba, P.c, P.i, a, Gn);
            if (!a) {
              F = 0;
              break A;
            }
          }
          B + F >= N && (A.Cc = 1), F = 1;
        }
        if (!F) return null;
        if (A.Cc && ((F = A.ga) != null && (F.mc = null), A.ga = null, 0 < A.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return A.nb + B * S;
    }
    function h(A, a, B, F, S, N) {
      for (; 0 < S--; ) {
        var P, D = A, K = a + (B ? 1 : 0), W = A, nA = a + (B ? 0 : 3);
        for (P = 0; P < F; ++P) {
          var yA = W[nA + 4 * P];
          yA != 255 && (yA *= 32897, D[K + 4 * P + 0] = D[K + 4 * P + 0] * yA >> 23, D[K + 4 * P + 1] = D[K + 4 * P + 1] * yA >> 23, D[K + 4 * P + 2] = D[K + 4 * P + 2] * yA >> 23);
        }
        a += N;
      }
    }
    function H(A, a, B, F, S) {
      for (; 0 < F--; ) {
        var N;
        for (N = 0; N < B; ++N) {
          var P = A[a + 2 * N + 0], D = 15 & (W = A[a + 2 * N + 1]), K = 4369 * D, W = (240 & W | W >> 4) * K >> 16;
          A[a + 2 * N + 0] = (240 & P | P >> 4) * K >> 16 & 240 | (15 & P | P << 4) * K >> 16 >> 4 & 15, A[a + 2 * N + 1] = 240 & W | D;
        }
        a += S;
      }
    }
    function Y(A, a, B, F, S, N, P, D) {
      var K, W, nA = 255;
      for (W = 0; W < S; ++W) {
        for (K = 0; K < F; ++K) {
          var yA = A[a + K];
          N[P + 4 * K] = yA, nA &= yA;
        }
        a += B, P += D;
      }
      return nA != 255;
    }
    function rA(A, a, B, F, S) {
      var N;
      for (N = 0; N < S; ++N) B[F + N] = A[a + N] >> 8;
    }
    function pA() {
      dn = h, ns = H, ci = Y, da = rA;
    }
    function IA(A, a, B) {
      V[A] = function(F, S, N, P, D, K, W, nA, yA, CA, oA, jA, EA, sA, lA, SA, OA) {
        var HA, re = OA - 1 >> 1, ZA = D[K + 0] | W[nA + 0] << 16, ve = yA[CA + 0] | oA[jA + 0] << 16;
        t(F != null);
        var $A = 3 * ZA + ve + 131074 >> 2;
        for (a(F[S + 0], 255 & $A, $A >> 16, EA, sA), N != null && ($A = 3 * ve + ZA + 131074 >> 2, a(N[P + 0], 255 & $A, $A >> 16, lA, SA)), HA = 1; HA <= re; ++HA) {
          var Je = D[K + HA] | W[nA + HA] << 16, ze = yA[CA + HA] | oA[jA + HA] << 16, _A = ZA + Je + ve + ze + 524296, Ke = _A + 2 * (Je + ve) >> 3;
          $A = Ke + ZA >> 1, ZA = (_A = _A + 2 * (ZA + ze) >> 3) + Je >> 1, a(F[S + 2 * HA - 1], 255 & $A, $A >> 16, EA, sA + (2 * HA - 1) * B), a(F[S + 2 * HA - 0], 255 & ZA, ZA >> 16, EA, sA + (2 * HA - 0) * B), N != null && ($A = _A + ve >> 1, ZA = Ke + ze >> 1, a(N[P + 2 * HA - 1], 255 & $A, $A >> 16, lA, SA + (2 * HA - 1) * B), a(N[P + 2 * HA + 0], 255 & ZA, ZA >> 16, lA, SA + (2 * HA + 0) * B)), ZA = Je, ve = ze;
        }
        1 & OA || ($A = 3 * ZA + ve + 131074 >> 2, a(F[S + OA - 1], 255 & $A, $A >> 16, EA, sA + (OA - 1) * B), N != null && ($A = 3 * ve + ZA + 131074 >> 2, a(N[P + OA - 1], 255 & $A, $A >> 16, lA, SA + (OA - 1) * B)));
      };
    }
    function kA() {
      Lr[Zi] = Qc, Lr[$i] = fi, Lr[ss] = ko, Lr[Ao] = Ca, Lr[eo] = Fa, Lr[Is] = ba, Lr[wa] = Uc, Lr[_o] = fi, Lr[Ko] = Ca, Lr[to] = Fa, Lr[xs] = ba;
    }
    function te(A) {
      return A & ~Ec ? 0 > A ? 0 : 255 : A >> Qa;
    }
    function Be(A, a) {
      return te((19077 * A >> 8) + (26149 * a >> 8) - 14234);
    }
    function xe(A, a, B) {
      return te((19077 * A >> 8) - (6419 * a >> 8) - (13320 * B >> 8) + 8708);
    }
    function Pe(A, a) {
      return te((19077 * A >> 8) + (33050 * a >> 8) - 17685);
    }
    function ke(A, a, B, F, S) {
      F[S + 0] = Be(A, B), F[S + 1] = xe(A, a, B), F[S + 2] = Pe(A, a);
    }
    function At(A, a, B, F, S) {
      F[S + 0] = Pe(A, a), F[S + 1] = xe(A, a, B), F[S + 2] = Be(A, B);
    }
    function et(A, a, B, F, S) {
      var N = xe(A, a, B);
      a = N << 3 & 224 | Pe(A, a) >> 3, F[S + 0] = 248 & Be(A, B) | N >> 5, F[S + 1] = a;
    }
    function Le(A, a, B, F, S) {
      var N = 240 & Pe(A, a) | 15;
      F[S + 0] = 240 & Be(A, B) | xe(A, a, B) >> 4, F[S + 1] = N;
    }
    function Vt(A, a, B, F, S) {
      F[S + 0] = 255, ke(A, a, B, F, S + 1);
    }
    function mt(A, a, B, F, S) {
      At(A, a, B, F, S), F[S + 3] = 255;
    }
    function yr(A, a, B, F, S) {
      ke(A, a, B, F, S), F[S + 3] = 255;
    }
    function jt(A, a) {
      return 0 > A ? 0 : A > a ? a : A;
    }
    function Nt(A, a, B) {
      V[A] = function(F, S, N, P, D, K, W, nA, yA) {
        for (var CA = nA + (-2 & yA) * B; nA != CA; ) a(F[S + 0], N[P + 0], D[K + 0], W, nA), a(F[S + 1], N[P + 0], D[K + 0], W, nA + B), S += 2, ++P, ++K, nA += 2 * B;
        1 & yA && a(F[S + 0], N[P + 0], D[K + 0], W, nA);
      };
    }
    function Ji(A, a, B) {
      return B == 0 ? A == 0 ? a == 0 ? 6 : 5 : a == 0 ? 4 : 0 : B;
    }
    function Cr(A, a, B, F, S) {
      switch (A >>> 30) {
        case 3:
          Ls(a, B, F, S, 0);
          break;
        case 2:
          oi(a, B, F, S);
          break;
        case 1:
          Qr(a, B, F, S);
      }
    }
    function at(A, a) {
      var B, F, S = a.M, N = a.Nb, P = A.oc, D = A.pc + 40, K = A.oc, W = A.pc + 584, nA = A.oc, yA = A.pc + 600;
      for (B = 0; 16 > B; ++B) P[D + 32 * B - 1] = 129;
      for (B = 0; 8 > B; ++B) K[W + 32 * B - 1] = 129, nA[yA + 32 * B - 1] = 129;
      for (0 < S ? P[D - 1 - 32] = K[W - 1 - 32] = nA[yA - 1 - 32] = 129 : (d(P, D - 32 - 1, 127, 21), d(K, W - 32 - 1, 127, 9), d(nA, yA - 32 - 1, 127, 9)), F = 0; F < A.za; ++F) {
        var CA = a.ya[a.aa + F];
        if (0 < F) {
          for (B = -1; 16 > B; ++B) c(P, D + 32 * B - 4, P, D + 32 * B + 12, 4);
          for (B = -1; 8 > B; ++B) c(K, W + 32 * B - 4, K, W + 32 * B + 4, 4), c(nA, yA + 32 * B - 4, nA, yA + 32 * B + 4, 4);
        }
        var oA = A.Gd, jA = A.Hd + F, EA = CA.ad, sA = CA.Hc;
        if (0 < S && (c(P, D - 32, oA[jA].y, 0, 16), c(K, W - 32, oA[jA].f, 0, 8), c(nA, yA - 32, oA[jA].ea, 0, 8)), CA.Za) {
          var lA = P, SA = D - 32 + 16;
          for (0 < S && (F >= A.za - 1 ? d(lA, SA, oA[jA].y[15], 4) : c(lA, SA, oA[jA + 1].y, 0, 4)), B = 0; 4 > B; B++) lA[SA + 128 + B] = lA[SA + 256 + B] = lA[SA + 384 + B] = lA[SA + 0 + B];
          for (B = 0; 16 > B; ++B, sA <<= 2) lA = P, SA = D + Ea[B], Rr[CA.Ob[B]](lA, SA), Cr(sA, EA, 16 * +B, lA, SA);
        } else if (lA = Ji(F, S, CA.Ob[0]), jn[lA](P, D), sA != 0) for (B = 0; 16 > B; ++B, sA <<= 2) Cr(sA, EA, 16 * +B, P, D + Ea[B]);
        for (B = CA.Gc, lA = Ji(F, S, CA.Dd), Er[lA](K, W), Er[lA](nA, yA), sA = EA, lA = K, SA = W, 255 & (CA = B >> 0) && (170 & CA ? Kr(sA, 256, lA, SA) : fn(sA, 256, lA, SA)), CA = nA, sA = yA, 255 & (B >>= 8) && (170 & B ? Kr(EA, 320, CA, sA) : fn(EA, 320, CA, sA)), S < A.Ub - 1 && (c(oA[jA].y, 0, P, D + 480, 16), c(oA[jA].f, 0, K, W + 224, 8), c(oA[jA].ea, 0, nA, yA + 224, 8)), B = 8 * N * A.B, oA = A.sa, jA = A.ta + 16 * F + 16 * N * A.R, EA = A.qa, CA = A.ra + 8 * F + B, sA = A.Ha, lA = A.Ia + 8 * F + B, B = 0; 16 > B; ++B) c(oA, jA + B * A.R, P, D + 32 * B, 16);
        for (B = 0; 8 > B; ++B) c(EA, CA + B * A.B, K, W + 32 * B, 8), c(sA, lA + B * A.B, nA, yA + 32 * B, 8);
      }
    }
    function $n(A, a, B, F, S, N, P, D, K) {
      var W = [0], nA = [0], yA = 0, CA = K != null ? K.kd : 0, oA = K ?? new ti();
      if (A == null || 12 > B) return 7;
      oA.data = A, oA.w = a, oA.ha = B, a = [a], B = [B], oA.gb = [oA.gb];
      A: {
        var jA = a, EA = B, sA = oA.gb;
        if (t(A != null), t(EA != null), t(sA != null), sA[0] = 0, 12 <= EA[0] && !n(A, jA[0], "RIFF")) {
          if (n(A, jA[0] + 8, "WEBP")) {
            sA = 3;
            break A;
          }
          var lA = GA(A, jA[0] + 4);
          if (12 > lA || 4294967286 < lA) {
            sA = 3;
            break A;
          }
          if (CA && lA > EA[0] - 8) {
            sA = 7;
            break A;
          }
          sA[0] = lA, jA[0] += 12, EA[0] -= 12;
        }
        sA = 0;
      }
      if (sA != 0) return sA;
      for (lA = 0 < oA.gb[0], B = B[0]; ; ) {
        A: {
          var SA = A;
          EA = a, sA = B;
          var OA = W, HA = nA, re = jA = [0];
          if (($A = yA = [yA])[0] = 0, 8 > sA[0]) sA = 7;
          else {
            if (!n(SA, EA[0], "VP8X")) {
              if (GA(SA, EA[0] + 4) != 10) {
                sA = 3;
                break A;
              }
              if (18 > sA[0]) {
                sA = 7;
                break A;
              }
              var ZA = GA(SA, EA[0] + 8), ve = 1 + RA(SA, EA[0] + 12);
              if (2147483648 <= ve * (SA = 1 + RA(SA, EA[0] + 15))) {
                sA = 3;
                break A;
              }
              re != null && (re[0] = ZA), OA != null && (OA[0] = ve), HA != null && (HA[0] = SA), EA[0] += 18, sA[0] -= 18, $A[0] = 1;
            }
            sA = 0;
          }
        }
        if (yA = yA[0], jA = jA[0], sA != 0) return sA;
        if (EA = !!(2 & jA), !lA && yA) return 3;
        if (N != null && (N[0] = !!(16 & jA)), P != null && (P[0] = EA), D != null && (D[0] = 0), P = W[0], jA = nA[0], yA && EA && K == null) {
          sA = 0;
          break;
        }
        if (4 > B) {
          sA = 7;
          break;
        }
        if (lA && yA || !lA && !yA && !n(A, a[0], "ALPH")) {
          B = [B], oA.na = [oA.na], oA.P = [oA.P], oA.Sa = [oA.Sa];
          A: {
            ZA = A, sA = a, lA = B;
            var $A = oA.gb;
            OA = oA.na, HA = oA.P, re = oA.Sa, ve = 22, t(ZA != null), t(lA != null), SA = sA[0];
            var Je = lA[0];
            for (t(OA != null), t(re != null), OA[0] = null, HA[0] = null, re[0] = 0; ; ) {
              if (sA[0] = SA, lA[0] = Je, 8 > Je) {
                sA = 7;
                break A;
              }
              var ze = GA(ZA, SA + 4);
              if (4294967286 < ze) {
                sA = 3;
                break A;
              }
              var _A = 8 + ze + 1 & -2;
              if (ve += _A, 0 < $A && ve > $A) {
                sA = 3;
                break A;
              }
              if (!n(ZA, SA, "VP8 ") || !n(ZA, SA, "VP8L")) {
                sA = 0;
                break A;
              }
              if (Je[0] < _A) {
                sA = 7;
                break A;
              }
              n(ZA, SA, "ALPH") || (OA[0] = ZA, HA[0] = SA + 8, re[0] = ze), SA += _A, Je -= _A;
            }
          }
          if (B = B[0], oA.na = oA.na[0], oA.P = oA.P[0], oA.Sa = oA.Sa[0], sA != 0) break;
        }
        B = [B], oA.Ja = [oA.Ja], oA.xa = [oA.xa];
        A: if ($A = A, sA = a, lA = B, OA = oA.gb[0], HA = oA.Ja, re = oA.xa, ZA = sA[0], SA = !n($A, ZA, "VP8 "), ve = !n($A, ZA, "VP8L"), t($A != null), t(lA != null), t(HA != null), t(re != null), 8 > lA[0]) sA = 7;
        else {
          if (SA || ve) {
            if ($A = GA($A, ZA + 4), 12 <= OA && $A > OA - 12) {
              sA = 3;
              break A;
            }
            if (CA && $A > lA[0] - 8) {
              sA = 7;
              break A;
            }
            HA[0] = $A, sA[0] += 8, lA[0] -= 8, re[0] = ve;
          } else re[0] = 5 <= lA[0] && $A[ZA + 0] == 47 && !($A[ZA + 4] >> 5), HA[0] = lA[0];
          sA = 0;
        }
        if (B = B[0], oA.Ja = oA.Ja[0], oA.xa = oA.xa[0], a = a[0], sA != 0) break;
        if (4294967286 < oA.Ja) return 3;
        if (D == null || EA || (D[0] = oA.xa ? 2 : 1), P = [P], jA = [jA], oA.xa) {
          if (5 > B) {
            sA = 7;
            break;
          }
          D = P, CA = jA, EA = N, A == null || 5 > B ? A = 0 : 5 <= B && A[a + 0] == 47 && !(A[a + 4] >> 5) ? (lA = [0], $A = [0], OA = [0], hA(HA = new j(), A, a, B), ge(HA, lA, $A, OA) ? (D != null && (D[0] = lA[0]), CA != null && (CA[0] = $A[0]), EA != null && (EA[0] = OA[0]), A = 1) : A = 0) : A = 0;
        } else {
          if (10 > B) {
            sA = 7;
            break;
          }
          D = jA, A == null || 10 > B || !Si(A, a + 3, B - 3) ? A = 0 : (CA = A[a + 0] | A[a + 1] << 8 | A[a + 2] << 16, EA = 16383 & (A[a + 7] << 8 | A[a + 6]), A = 16383 & (A[a + 9] << 8 | A[a + 8]), 1 & CA || 3 < (CA >> 1 & 7) || !(CA >> 4 & 1) || CA >> 5 >= oA.Ja || !EA || !A ? A = 0 : (P && (P[0] = EA), D && (D[0] = A), A = 1));
        }
        if (!A || (P = P[0], jA = jA[0], yA && (W[0] != P || nA[0] != jA))) return 3;
        K != null && (K[0] = oA, K.offset = a - K.w, t(4294967286 > a - K.w), t(K.offset == K.ha - B));
        break;
      }
      return sA == 0 || sA == 7 && yA && K == null ? (N != null && (N[0] |= oA.na != null && 0 < oA.na.length), F != null && (F[0] = P), S != null && (S[0] = jA), 0) : sA;
    }
    function vt(A, a, B) {
      var F = a.width, S = a.height, N = 0, P = 0, D = F, K = S;
      if (a.Da = A != null && 0 < A.Da, a.Da && (D = A.cd, K = A.bd, N = A.v, P = A.j, 11 > B || (N &= -2, P &= -2), 0 > N || 0 > P || 0 >= D || 0 >= K || N + D > F || P + K > S)) return 0;
      if (a.v = N, a.j = P, a.va = N + D, a.o = P + K, a.U = D, a.T = K, a.da = A != null && 0 < A.da, a.da) {
        if (!be(D, K, B = [A.ib], N = [A.hb])) return 0;
        a.ib = B[0], a.hb = N[0];
      }
      return a.ob = A != null && A.ob, a.Kb = A == null || !A.Sd, a.da && (a.ob = a.ib < 3 * F / 4 && a.hb < 3 * S / 4, a.Kb = 0), 1;
    }
    function As(A) {
      if (A == null) return 2;
      if (11 > A.S) {
        var a = A.f.RGBA;
        a.fb += (A.height - 1) * a.A, a.A = -a.A;
      } else a = A.f.kb, A = A.height, a.O += (A - 1) * a.fa, a.fa = -a.fa, a.N += (A - 1 >> 1) * a.Ab, a.Ab = -a.Ab, a.W += (A - 1 >> 1) * a.Db, a.Db = -a.Db, a.F != null && (a.J += (A - 1) * a.lb, a.lb = -a.lb);
      return 0;
    }
    function fr(A, a, B, F) {
      if (F == null || 0 >= A || 0 >= a) return 2;
      if (B != null) {
        if (B.Da) {
          var S = B.cd, N = B.bd, P = -2 & B.v, D = -2 & B.j;
          if (0 > P || 0 > D || 0 >= S || 0 >= N || P + S > A || D + N > a) return 2;
          A = S, a = N;
        }
        if (B.da) {
          if (!be(A, a, S = [B.ib], N = [B.hb])) return 2;
          A = S[0], a = N[0];
        }
      }
      F.width = A, F.height = a;
      A: {
        var K = F.width, W = F.height;
        if (A = F.S, 0 >= K || 0 >= W || !(A >= Zi && 13 > A)) A = 2;
        else {
          if (0 >= F.Rd && F.sd == null) {
            P = N = S = a = 0;
            var nA = (D = K * Ia[A]) * W;
            if (11 > A || (N = (W + 1) / 2 * (a = (K + 1) / 2), A == 12 && (P = (S = K) * W)), (W = u(nA + 2 * N + P)) == null) {
              A = 1;
              break A;
            }
            F.sd = W, 11 > A ? ((K = F.f.RGBA).eb = W, K.fb = 0, K.A = D, K.size = nA) : ((K = F.f.kb).y = W, K.O = 0, K.fa = D, K.Fd = nA, K.f = W, K.N = 0 + nA, K.Ab = a, K.Cd = N, K.ea = W, K.W = 0 + nA + N, K.Db = a, K.Ed = N, A == 12 && (K.F = W, K.J = 0 + nA + 2 * N), K.Tc = P, K.lb = S);
          }
          if (a = 1, S = F.S, N = F.width, P = F.height, S >= Zi && 13 > S) if (11 > S) A = F.f.RGBA, a &= (D = Math.abs(A.A)) * (P - 1) + N <= A.size, a &= D >= N * Ia[S], a &= A.eb != null;
          else {
            A = F.f.kb, D = (N + 1) / 2, nA = (P + 1) / 2, K = Math.abs(A.fa), W = Math.abs(A.Ab);
            var yA = Math.abs(A.Db), CA = Math.abs(A.lb), oA = CA * (P - 1) + N;
            a &= K * (P - 1) + N <= A.Fd, a &= W * (nA - 1) + D <= A.Cd, a = (a &= yA * (nA - 1) + D <= A.Ed) & K >= N & W >= D & yA >= D, a &= A.y != null, a &= A.f != null, a &= A.ea != null, S == 12 && (a &= CA >= N, a &= oA <= A.Tc, a &= A.F != null);
          }
          else a = 0;
          A = a ? 0 : 2;
        }
      }
      return A != 0 || B != null && B.fd && (A = As(F)), A;
    }
    var Ot = 64, Xe = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], es = 24, ts = 32, Qs = 8, zt = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    WA("Predictor0", "PredictorAdd0"), V.Predictor0 = function() {
      return 4278190080;
    }, V.Predictor1 = function(A) {
      return A;
    }, V.Predictor2 = function(A, a, B) {
      return a[B + 0];
    }, V.Predictor3 = function(A, a, B) {
      return a[B + 1];
    }, V.Predictor4 = function(A, a, B) {
      return a[B - 1];
    }, V.Predictor5 = function(A, a, B) {
      return XA(XA(A, a[B + 1]), a[B + 0]);
    }, V.Predictor6 = function(A, a, B) {
      return XA(A, a[B - 1]);
    }, V.Predictor7 = function(A, a, B) {
      return XA(A, a[B + 0]);
    }, V.Predictor8 = function(A, a, B) {
      return XA(a[B - 1], a[B + 0]);
    }, V.Predictor9 = function(A, a, B) {
      return XA(a[B + 0], a[B + 1]);
    }, V.Predictor10 = function(A, a, B) {
      return XA(XA(A, a[B - 1]), XA(a[B + 0], a[B + 1]));
    }, V.Predictor11 = function(A, a, B) {
      var F = a[B + 0];
      return 0 >= de(F >> 24 & 255, A >> 24 & 255, (a = a[B - 1]) >> 24 & 255) + de(F >> 16 & 255, A >> 16 & 255, a >> 16 & 255) + de(F >> 8 & 255, A >> 8 & 255, a >> 8 & 255) + de(255 & F, 255 & A, 255 & a) ? F : A;
    }, V.Predictor12 = function(A, a, B) {
      var F = a[B + 0];
      return (ae((A >> 24 & 255) + (F >> 24 & 255) - ((a = a[B - 1]) >> 24 & 255)) << 24 | ae((A >> 16 & 255) + (F >> 16 & 255) - (a >> 16 & 255)) << 16 | ae((A >> 8 & 255) + (F >> 8 & 255) - (a >> 8 & 255)) << 8 | ae((255 & A) + (255 & F) - (255 & a))) >>> 0;
    }, V.Predictor13 = function(A, a, B) {
      var F = a[B - 1];
      return (ye((A = XA(A, a[B + 0])) >> 24 & 255, F >> 24 & 255) << 24 | ye(A >> 16 & 255, F >> 16 & 255) << 16 | ye(A >> 8 & 255, F >> 8 & 255) << 8 | ye(A >> 0 & 255, F >> 0 & 255)) >>> 0;
    };
    var Us = V.PredictorAdd0;
    V.PredictorAdd1 = Ce, WA("Predictor2", "PredictorAdd2"), WA("Predictor3", "PredictorAdd3"), WA("Predictor4", "PredictorAdd4"), WA("Predictor5", "PredictorAdd5"), WA("Predictor6", "PredictorAdd6"), WA("Predictor7", "PredictorAdd7"), WA("Predictor8", "PredictorAdd8"), WA("Predictor9", "PredictorAdd9"), WA("Predictor10", "PredictorAdd10"), WA("Predictor11", "PredictorAdd11"), WA("Predictor12", "PredictorAdd12"), WA("Predictor13", "PredictorAdd13");
    var Es = V.PredictorAdd2;
    BA("ColorIndexInverseTransform", "MapARGB", "32b", function(A) {
      return A >> 8 & 255;
    }, function(A) {
      return A;
    }), BA("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(A) {
      return A;
    }, function(A) {
      return A >> 8 & 255;
    });
    var ii, ht = V.ColorIndexInverseTransform, Fr = V.MapARGB, Zr = V.VP8LColorIndexInverseTransformAlpha, yt = V.MapAlpha, Yt = V.VP8LPredictorsAdd = [];
    Yt.length = 16, (V.VP8LPredictors = []).length = 16, (V.VP8LPredictorsAdd_C = []).length = 16, (V.VP8LPredictors_C = []).length = 16;
    var hr, br, $r, _r, un, An, Et, Ls, oi, Kr, Qr, fn, rs, Wt, Sn, Hn, ai, qt, hn, tt, rt, dt, Ct, en, dn, ns, ci, da, li = u(511), ga = u(2041), pa = u(225), zi = u(767), Ba = 0, Yi = ga, qi = pa, dr = zi, Ur = li, Zi = 0, $i = 1, ss = 2, Ao = 3, eo = 4, Is = 5, wa = 6, _o = 7, Ko = 8, to = 9, xs = 10, fc = [2, 3, 7], hc = [3, 3, 11], va = [280, 256, 256, 256, 40], dc = [0, 1, 1, 1, 0], ro = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], gc = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], pc = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], Bc = 8, Ro = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], Ss = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ui = null, wc = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], vc = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], ma = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], mc = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], yc = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], Cc = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], Fc = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], jn = [], Rr = [], Er = [], bc = 1, ya = 2, gn = [], Lr = [];
    IA("UpsampleRgbLinePair", ke, 3), IA("UpsampleBgrLinePair", At, 3), IA("UpsampleRgbaLinePair", yr, 4), IA("UpsampleBgraLinePair", mt, 4), IA("UpsampleArgbLinePair", Vt, 4), IA("UpsampleRgba4444LinePair", Le, 2), IA("UpsampleRgb565LinePair", et, 2);
    var Qc = V.UpsampleRgbLinePair, ko = V.UpsampleBgrLinePair, fi = V.UpsampleRgbaLinePair, Ca = V.UpsampleBgraLinePair, Fa = V.UpsampleArgbLinePair, ba = V.UpsampleRgba4444LinePair, Uc = V.UpsampleRgb565LinePair, no = 16, so = 1 << no - 1, Nn = -227, Go = 482, Qa = 6, Ec = (256 << Qa) - 1, Ua = 0, Lc = u(256), Ic = u(256), xc = u(256), Sc = u(256), Hc = u(Go - Nn), jc = u(Go - Nn);
    Nt("YuvToRgbRow", ke, 3), Nt("YuvToBgrRow", At, 3), Nt("YuvToRgbaRow", yr, 4), Nt("YuvToBgraRow", mt, 4), Nt("YuvToArgbRow", Vt, 4), Nt("YuvToRgba4444Row", Le, 2), Nt("YuvToRgb565Row", et, 2);
    var Ea = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], io = [0, 2, 8], La = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], Nc = 1;
    this.WebPDecodeRGBA = function(A, a, B, F, S) {
      var N = $i, P = new Fs(), D = new kt();
      P.ba = D, D.S = N, D.width = [D.width], D.height = [D.height];
      var K = D.width, W = D.height, nA = new je();
      if (nA == null || A == null) var yA = 2;
      else t(nA != null), yA = $n(A, a, B, nA.width, nA.height, nA.Pd, nA.Qd, nA.format, null);
      if (yA != 0 ? K = 0 : (K != null && (K[0] = nA.width[0]), W != null && (W[0] = nA.height[0]), K = 1), K) {
        D.width = D.width[0], D.height = D.height[0], F != null && (F[0] = D.width), S != null && (S[0] = D.height);
        A: {
          if (F = new on(), (S = new ti()).data = A, S.w = a, S.ha = B, S.kd = 1, a = [0], t(S != null), ((A = $n(S.data, S.w, S.ha, null, null, null, a, null, S)) == 0 || A == 7) && a[0] && (A = 4), (a = A) == 0) {
            if (t(P != null), F.data = S.data, F.w = S.w + S.offset, F.ha = S.ha - S.offset, F.put = Dt, F.ac = Re, F.bc = er, F.ma = P, S.xa) {
              if ((A = mr()) == null) {
                P = 1;
                break A;
              }
              if (function(CA, oA) {
                var jA = [0], EA = [0], sA = [0];
                e: for (; ; ) {
                  if (CA == null) return 0;
                  if (oA == null) return CA.a = 2, 0;
                  if (CA.l = oA, CA.a = 0, hA(CA.m, oA.data, oA.w, oA.ha), !ge(CA.m, jA, EA, sA)) {
                    CA.a = 3;
                    break e;
                  }
                  if (CA.xb = ya, oA.width = jA[0], oA.height = EA[0], !Jr(jA[0], EA[0], 1, CA, null)) break e;
                  return 1;
                }
                return t(CA.a != 0), 0;
              }(A, F)) {
                if (F = (a = fr(F.width, F.height, P.Oa, P.ba)) == 0) {
                  e: {
                    F = A;
                    t: for (; ; ) {
                      if (F == null) {
                        F = 0;
                        break e;
                      }
                      if (t(F.s.yc != null), t(F.s.Ya != null), t(0 < F.s.Wb), t((B = F.l) != null), t((S = B.ma) != null), F.xb != 0) {
                        if (F.ca = S.ba, F.tb = S.tb, t(F.ca != null), !vt(S.Oa, B, Ao)) {
                          F.a = 2;
                          break t;
                        }
                        if (!sn(F, B.width) || B.da) break t;
                        if ((B.da || He(F.ca.S)) && pA(), 11 > F.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), F.ca.f.kb.F != null && pA()), F.Pb && 0 < F.s.ua && F.s.vb.X == null && !ce(F.s.vb, F.s.Wa.Xa)) {
                          F.a = 1;
                          break t;
                        }
                        F.xb = 0;
                      }
                      if (!Tr(F, F.V, F.Ba, F.c, F.i, B.o, tr)) break t;
                      S.Dc = F.Ma, F = 1;
                      break e;
                    }
                    t(F.a != 0), F = 0;
                  }
                  F = !F;
                }
                F && (a = A.a);
              } else a = A.a;
            } else {
              if ((A = new Wn()) == null) {
                P = 1;
                break A;
              }
              if (A.Fa = S.na, A.P = S.P, A.qc = S.Sa, Hi(A, F)) {
                if ((a = fr(F.width, F.height, P.Oa, P.ba)) == 0) {
                  if (A.Aa = 0, B = P.Oa, t((S = A) != null), B != null) {
                    if (0 < (K = 0 > (K = B.Md) ? 0 : 100 < K ? 255 : 255 * K / 100)) {
                      for (W = nA = 0; 4 > W; ++W) 12 > (yA = S.pb[W]).lc && (yA.ia = K * La[0 > yA.lc ? 0 : yA.lc] >> 3), nA |= yA.ia;
                      nA && (alert("todo:VP8InitRandom"), S.ia = 1);
                    }
                    S.Ga = B.Id, 100 < S.Ga ? S.Ga = 100 : 0 > S.Ga && (S.Ga = 0);
                  }
                  Jn(A, F) || (a = A.a);
                }
              } else a = A.a;
            }
            a == 0 && P.Oa != null && P.Oa.fd && (a = As(P.ba));
          }
          P = a;
        }
        N = P != 0 ? null : 11 > N ? D.f.RGBA.eb : D.f.kb.y;
      } else N = null;
      return N;
    };
    var Ia = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function m(V, dA) {
    for (var cA = "", T = 0; T < 4; T++) cA += String.fromCharCode(V[dA++]);
    return cA;
  }
  function l(V, dA) {
    return (V[dA + 0] << 0 | V[dA + 1] << 8 | V[dA + 2] << 16) >>> 0;
  }
  function y(V, dA) {
    return (V[dA + 0] << 0 | V[dA + 1] << 8 | V[dA + 2] << 16 | V[dA + 3] << 24) >>> 0;
  }
  new f();
  var C = [0], g = [0], L = [], E = new f(), x = o, b = function(V, dA) {
    var cA = {}, T = 0, _ = !1, z = 0, J = 0;
    if (cA.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    function(X, q, eA, uA) {
      for (var gA = 0; gA < uA; gA++) if (X[q + gA] != eA.charCodeAt(gA)) return !0;
      return !1;
    }(V, dA, "RIFF", 4)) {
      var tA, aA;
      for (y(V, dA += 4), dA += 8; dA < V.length; ) {
        var vA = m(V, dA), hA = y(V, dA += 4);
        dA += 4;
        var UA = hA + (1 & hA);
        switch (vA) {
          case "VP8 ":
          case "VP8L":
            cA.frames[T] === void 0 && (cA.frames[T] = {}), (j = cA.frames[T]).src_off = _ ? J : dA - 8, j.src_size = z + hA + 8, T++, _ && (_ = !1, z = 0, J = 0);
            break;
          case "VP8X":
            (j = cA.header = {}).feature_flags = V[dA];
            var bA = dA + 4;
            j.canvas_width = 1 + l(V, bA), bA += 3, j.canvas_height = 1 + l(V, bA), bA += 3;
            break;
          case "ALPH":
            _ = !0, z = UA + 8, J = dA - 8;
            break;
          case "ANIM":
            (j = cA.header).bgcolor = y(V, dA), bA = dA + 4, j.loop_count = (tA = V)[(aA = bA) + 0] << 0 | tA[aA + 1] << 8, bA += 2;
            break;
          case "ANMF":
            var PA, j;
            (j = cA.frames[T] = {}).offset_x = 2 * l(V, dA), dA += 3, j.offset_y = 2 * l(V, dA), dA += 3, j.width = 1 + l(V, dA), dA += 3, j.height = 1 + l(V, dA), dA += 3, j.duration = l(V, dA), dA += 3, PA = V[dA++], j.dispose = 1 & PA, j.blend = PA >> 1 & 1;
        }
        vA != "ANMF" && (dA += UA);
      }
      return cA;
    }
  }(x, 0);
  b.response = x, b.rgbaoutput = !0, b.dataurl = !1;
  var U = b.header ? b.header : null, I = b.frames ? b.frames : null;
  if (U) {
    U.loop_counter = U.loop_count, C = [U.canvas_height], g = [U.canvas_width];
    for (var M = 0; M < I.length && I[M].blend != 0; M++) ;
  }
  var R = I[0], Z = E.WebPDecodeRGBA(x, R.src_off, R.src_size, g, C);
  R.rgba = Z, R.imgwidth = g[0], R.imgheight = C[0];
  for (var AA = 0; AA < g[0] * C[0] * 4; AA++) L[AA] = Z[AA];
  return this.width = g, this.height = C, this.data = L, this;
}
(function(o) {
  var t = function() {
    return typeof dl == "function";
  }, n = function(C, g, L, E) {
    var x = 4, b = p;
    switch (E) {
      case o.image_compression.FAST:
        x = 1, b = u;
        break;
      case o.image_compression.MEDIUM:
        x = 6, b = v;
        break;
      case o.image_compression.SLOW:
        x = 9, b = f;
    }
    C = c(C, g, L, b);
    var U = dl(C, { level: x });
    return o.__addimage__.arrayBufferToBinaryString(U);
  }, c = function(C, g, L, E) {
    for (var x, b, U, I = C.length / g, M = new Uint8Array(C.length + I), R = l(), Z = 0; Z < I; Z += 1) {
      if (U = Z * g, x = C.subarray(U, U + g), E) M.set(E(x, L, b), U + Z);
      else {
        for (var AA, V = R.length, dA = []; AA < V; AA += 1) dA[AA] = R[AA](x, L, b);
        var cA = y(dA.concat());
        M.set(dA[cA], U + Z);
      }
      b = x;
    }
    return M;
  }, d = function(C) {
    var g = Array.apply([], C);
    return g.unshift(0), g;
  }, u = function(C, g) {
    var L, E = [], x = C.length;
    E[0] = 1;
    for (var b = 0; b < x; b += 1) L = C[b - g] || 0, E[b + 1] = C[b] - L + 256 & 255;
    return E;
  }, p = function(C, g, L) {
    var E, x = [], b = C.length;
    x[0] = 2;
    for (var U = 0; U < b; U += 1) E = L && L[U] || 0, x[U + 1] = C[U] - E + 256 & 255;
    return x;
  }, v = function(C, g, L) {
    var E, x, b = [], U = C.length;
    b[0] = 3;
    for (var I = 0; I < U; I += 1) E = C[I - g] || 0, x = L && L[I] || 0, b[I + 1] = C[I] + 256 - (E + x >>> 1) & 255;
    return b;
  }, f = function(C, g, L) {
    var E, x, b, U, I = [], M = C.length;
    I[0] = 4;
    for (var R = 0; R < M; R += 1) E = C[R - g] || 0, x = L && L[R] || 0, b = L && L[R - g] || 0, U = m(E, x, b), I[R + 1] = C[R] - U + 256 & 255;
    return I;
  }, m = function(C, g, L) {
    if (C === g && g === L) return C;
    var E = Math.abs(g - L), x = Math.abs(C - L), b = Math.abs(C + g - L - L);
    return E <= x && E <= b ? C : x <= b ? g : L;
  }, l = function() {
    return [d, u, p, v, f];
  }, y = function(C) {
    var g = C.map(function(L) {
      return L.reduce(function(E, x) {
        return E + Math.abs(x);
      }, 0);
    });
    return g.indexOf(Math.min.apply(null, g));
  };
  o.processPNG = function(C, g, L, E) {
    var x, b, U, I, M, R, Z, AA, V, dA, cA, T, _, z, J, tA = this.decode.FLATE_DECODE, aA = "";
    if (this.__addimage__.isArrayBuffer(C) && (C = new Uint8Array(C)), this.__addimage__.isArrayBufferView(C)) {
      if (C = (U = new Xh(C)).imgData, b = U.bits, x = U.colorSpace, M = U.colors, [4, 6].indexOf(U.colorType) !== -1) {
        if (U.bits === 8) {
          V = (AA = U.pixelBitlength == 32 ? new Uint32Array(U.decodePixels().buffer) : U.pixelBitlength == 16 ? new Uint16Array(U.decodePixels().buffer) : new Uint8Array(U.decodePixels().buffer)).length, cA = new Uint8Array(V * U.colors), dA = new Uint8Array(V);
          var vA, hA = U.pixelBitlength - U.bits;
          for (z = 0, J = 0; z < V; z++) {
            for (_ = AA[z], vA = 0; vA < hA; ) cA[J++] = _ >>> vA & 255, vA += U.bits;
            dA[z] = _ >>> vA & 255;
          }
        }
        if (U.bits === 16) {
          V = (AA = new Uint32Array(U.decodePixels().buffer)).length, cA = new Uint8Array(V * (32 / U.pixelBitlength) * U.colors), dA = new Uint8Array(V * (32 / U.pixelBitlength)), T = U.colors > 1, z = 0, J = 0;
          for (var UA = 0; z < V; ) _ = AA[z++], cA[J++] = _ >>> 0 & 255, T && (cA[J++] = _ >>> 16 & 255, _ = AA[z++], cA[J++] = _ >>> 0 & 255), dA[UA++] = _ >>> 16 & 255;
          b = 8;
        }
        E !== o.image_compression.NONE && t() ? (C = n(cA, U.width * U.colors, U.colors, E), Z = n(dA, U.width, 1, E)) : (C = cA, Z = dA, tA = void 0);
      }
      if (U.colorType === 3 && (x = this.color_spaces.INDEXED, R = U.palette, U.transparency.indexed)) {
        var bA = U.transparency.indexed, PA = 0;
        for (z = 0, V = bA.length; z < V; ++z) PA += bA[z];
        if ((PA /= 255) === V - 1 && bA.indexOf(0) !== -1) I = [bA.indexOf(0)];
        else if (PA !== V) {
          for (AA = U.decodePixels(), dA = new Uint8Array(AA.length), z = 0, V = AA.length; z < V; z++) dA[z] = bA[AA[z]];
          Z = n(dA, U.width, 1);
        }
      }
      var j = function(X) {
        var q;
        switch (X) {
          case o.image_compression.FAST:
            q = 11;
            break;
          case o.image_compression.MEDIUM:
            q = 13;
            break;
          case o.image_compression.SLOW:
            q = 14;
            break;
          default:
            q = 12;
        }
        return q;
      }(E);
      return tA === this.decode.FLATE_DECODE && (aA = "/Predictor " + j + " "), aA += "/Colors " + M + " /BitsPerComponent " + b + " /Columns " + U.width, (this.__addimage__.isArrayBuffer(C) || this.__addimage__.isArrayBufferView(C)) && (C = this.__addimage__.arrayBufferToBinaryString(C)), (Z && this.__addimage__.isArrayBuffer(Z) || this.__addimage__.isArrayBufferView(Z)) && (Z = this.__addimage__.arrayBufferToBinaryString(Z)), { alias: L, data: C, index: g, filter: tA, decodeParameters: aA, transparency: I, palette: R, sMask: Z, predictor: j, width: U.width, height: U.height, bitsPerComponent: b, colorSpace: x };
    }
  };
})(Ue.API), function(o) {
  o.processGIF89A = function(t, n, c, d) {
    var u = new Jh(t), p = u.width, v = u.height, f = [];
    u.decodeAndBlitFrameRGBA(0, f);
    var m = { data: f, width: p, height: v }, l = new ol(100).encode(m, 100);
    return o.processJPEG.call(this, l, n, c, d);
  }, o.processGIF87A = o.processGIF89A;
}(Ue.API), wn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var o = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(o);
    for (var t = 0; t < o; t++) {
      var n = this.datav.getUint8(this.pos++, !0), c = this.datav.getUint8(this.pos++, !0), d = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0);
      this.palette[t] = { red: d, green: c, blue: n, quad: u };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, wn.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var o = "bit" + this.bitPP, t = this.width * this.height * 4;
    this.data = new Uint8Array(t), this[o]();
  } catch (n) {
    ot.log("bit decode error:" + n);
  }
}, wn.prototype.bit1 = function() {
  var o, t = Math.ceil(this.width / 8), n = t % 4;
  for (o = this.height - 1; o >= 0; o--) {
    for (var c = this.bottom_up ? o : this.height - 1 - o, d = 0; d < t; d++) for (var u = this.datav.getUint8(this.pos++, !0), p = c * this.width * 4 + 8 * d * 4, v = 0; v < 8 && 8 * d + v < this.width; v++) {
      var f = this.palette[u >> 7 - v & 1];
      this.data[p + 4 * v] = f.blue, this.data[p + 4 * v + 1] = f.green, this.data[p + 4 * v + 2] = f.red, this.data[p + 4 * v + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, wn.prototype.bit4 = function() {
  for (var o = Math.ceil(this.width / 2), t = o % 4, n = this.height - 1; n >= 0; n--) {
    for (var c = this.bottom_up ? n : this.height - 1 - n, d = 0; d < o; d++) {
      var u = this.datav.getUint8(this.pos++, !0), p = c * this.width * 4 + 2 * d * 4, v = u >> 4, f = 15 & u, m = this.palette[v];
      if (this.data[p] = m.blue, this.data[p + 1] = m.green, this.data[p + 2] = m.red, this.data[p + 3] = 255, 2 * d + 1 >= this.width) break;
      m = this.palette[f], this.data[p + 4] = m.blue, this.data[p + 4 + 1] = m.green, this.data[p + 4 + 2] = m.red, this.data[p + 4 + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, wn.prototype.bit8 = function() {
  for (var o = this.width % 4, t = this.height - 1; t >= 0; t--) {
    for (var n = this.bottom_up ? t : this.height - 1 - t, c = 0; c < this.width; c++) {
      var d = this.datav.getUint8(this.pos++, !0), u = n * this.width * 4 + 4 * c;
      if (d < this.palette.length) {
        var p = this.palette[d];
        this.data[u] = p.red, this.data[u + 1] = p.green, this.data[u + 2] = p.blue, this.data[u + 3] = 255;
      } else this.data[u] = 255, this.data[u + 1] = 255, this.data[u + 2] = 255, this.data[u + 3] = 255;
    }
    o !== 0 && (this.pos += 4 - o);
  }
}, wn.prototype.bit15 = function() {
  for (var o = this.width % 3, t = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
    for (var c = this.bottom_up ? n : this.height - 1 - n, d = 0; d < this.width; d++) {
      var u = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var p = (u & t) / t * 255 | 0, v = (u >> 5 & t) / t * 255 | 0, f = (u >> 10 & t) / t * 255 | 0, m = u >> 15 ? 255 : 0, l = c * this.width * 4 + 4 * d;
      this.data[l] = f, this.data[l + 1] = v, this.data[l + 2] = p, this.data[l + 3] = m;
    }
    this.pos += o;
  }
}, wn.prototype.bit16 = function() {
  for (var o = this.width % 3, t = parseInt("11111", 2), n = parseInt("111111", 2), c = this.height - 1; c >= 0; c--) {
    for (var d = this.bottom_up ? c : this.height - 1 - c, u = 0; u < this.width; u++) {
      var p = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var v = (p & t) / t * 255 | 0, f = (p >> 5 & n) / n * 255 | 0, m = (p >> 11) / t * 255 | 0, l = d * this.width * 4 + 4 * u;
      this.data[l] = m, this.data[l + 1] = f, this.data[l + 2] = v, this.data[l + 3] = 255;
    }
    this.pos += o;
  }
}, wn.prototype.bit24 = function() {
  for (var o = this.height - 1; o >= 0; o--) {
    for (var t = this.bottom_up ? o : this.height - 1 - o, n = 0; n < this.width; n++) {
      var c = this.datav.getUint8(this.pos++, !0), d = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), p = t * this.width * 4 + 4 * n;
      this.data[p] = u, this.data[p + 1] = d, this.data[p + 2] = c, this.data[p + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, wn.prototype.bit32 = function() {
  for (var o = this.height - 1; o >= 0; o--) for (var t = this.bottom_up ? o : this.height - 1 - o, n = 0; n < this.width; n++) {
    var c = this.datav.getUint8(this.pos++, !0), d = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), p = this.datav.getUint8(this.pos++, !0), v = t * this.width * 4 + 4 * n;
    this.data[v] = u, this.data[v + 1] = d, this.data[v + 2] = c, this.data[v + 3] = p;
  }
}, wn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  o.processBMP = function(t, n, c, d) {
    var u = new wn(t, !1), p = u.width, v = u.height, f = { data: u.getData(), width: p, height: v }, m = new ol(100).encode(f, 100);
    return o.processJPEG.call(this, m, n, c, d);
  };
}(Ue.API), Qu.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  o.processWEBP = function(t, n, c, d) {
    var u = new Qu(t), p = u.width, v = u.height, f = { data: u.getData(), width: p, height: v }, m = new ol(100).encode(f, 100);
    return o.processJPEG.call(this, m, n, c, d);
  };
}(Ue.API), Ue.API.processRGBA = function(o, t, n) {
  for (var c = o.data, d = c.length, u = new Uint8Array(d / 4 * 3), p = new Uint8Array(d / 4), v = 0, f = 0, m = 0; m < d; m += 4) {
    var l = c[m], y = c[m + 1], C = c[m + 2], g = c[m + 3];
    u[v++] = l, u[v++] = y, u[v++] = C, p[f++] = g;
  }
  var L = this.__addimage__.arrayBufferToBinaryString(u);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(p), data: L, index: t, alias: n, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: o.width, height: o.height };
}, Ue.API.setLanguage = function(o) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[o] !== void 0 && (this.internal.languageSettings.languageCode = o, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Fo = Ue.API, oc = Fo.getCharWidthsArray = function(o, t) {
  var n, c, d = (t = t || {}).font || this.internal.getFont(), u = t.fontSize || this.internal.getFontSize(), p = t.charSpace || this.internal.getCharSpace(), v = t.widths ? t.widths : d.metadata.Unicode.widths, f = v.fof ? v.fof : 1, m = t.kerning ? t.kerning : d.metadata.Unicode.kerning, l = m.fof ? m.fof : 1, y = t.doKerning !== !1, C = 0, g = o.length, L = 0, E = v[0] || f, x = [];
  for (n = 0; n < g; n++) c = o.charCodeAt(n), typeof d.metadata.widthOfString == "function" ? x.push((d.metadata.widthOfGlyph(d.metadata.characterToGlyph(c)) + p * (1e3 / u) || 0) / 1e3) : (C = y && st(m[c]) === "object" && !isNaN(parseInt(m[c][L], 10)) ? m[c][L] / l : 0, x.push((v[c] || E) / f + C)), L = c;
  return x;
}, yu = Fo.getStringUnitWidth = function(o, t) {
  var n = (t = t || {}).fontSize || this.internal.getFontSize(), c = t.font || this.internal.getFont(), d = t.charSpace || this.internal.getCharSpace();
  return Fo.processArabic && (o = Fo.processArabic(o)), typeof c.metadata.widthOfString == "function" ? c.metadata.widthOfString(o, n, d) / n : oc.apply(this, arguments).reduce(function(u, p) {
    return u + p;
  }, 0);
}, Cu = function(o, t, n, c) {
  for (var d = [], u = 0, p = o.length, v = 0; u !== p && v + t[u] < n; ) v += t[u], u++;
  d.push(o.slice(0, u));
  var f = u;
  for (v = 0; u !== p; ) v + t[u] > c && (d.push(o.slice(f, u)), v = 0, f = u), v += t[u], u++;
  return f !== u && d.push(o.slice(f, u)), d;
}, Fu = function(o, t, n) {
  n || (n = {});
  var c, d, u, p, v, f, m, l = [], y = [l], C = n.textIndent || 0, g = 0, L = 0, E = o.split(" "), x = oc.apply(this, [" ", n])[0];
  if (f = n.lineIndent === -1 ? E[0].length + 2 : n.lineIndent || 0) {
    var b = Array(f).join(" "), U = [];
    E.map(function(M) {
      (M = M.split(/\s*\n/)).length > 1 ? U = U.concat(M.map(function(R, Z) {
        return (Z && R.length ? `
` : "") + R;
      })) : U.push(M[0]);
    }), E = U, f = yu.apply(this, [b, n]);
  }
  for (u = 0, p = E.length; u < p; u++) {
    var I = 0;
    if (c = E[u], f && c[0] == `
` && (c = c.substr(1), I = 1), C + g + (L = (d = oc.apply(this, [c, n])).reduce(function(M, R) {
      return M + R;
    }, 0)) > t || I) {
      if (L > t) {
        for (v = Cu.apply(this, [c, d, t - (C + g), t]), l.push(v.shift()), l = [v.pop()]; v.length; ) y.push([v.shift()]);
        L = d.slice(c.length - (l[0] ? l[0].length : 0)).reduce(function(M, R) {
          return M + R;
        }, 0);
      } else l = [c];
      y.push(l), C = L + f, g = x;
    } else l.push(c), C += g + L, g = x;
  }
  return m = f ? function(M, R) {
    return (R ? b : "") + M.join(" ");
  } : function(M) {
    return M.join(" ");
  }, y.map(m);
}, Fo.splitTextToSize = function(o, t, n) {
  var c, d = (n = n || {}).fontSize || this.internal.getFontSize(), u = (function(l) {
    if (l.widths && l.kerning) return { widths: l.widths, kerning: l.kerning };
    var y = this.internal.getFont(l.fontName, l.fontStyle);
    return y.metadata.Unicode ? { widths: y.metadata.Unicode.widths || { 0: 1 }, kerning: y.metadata.Unicode.kerning || {} } : { font: y.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, n);
  c = Array.isArray(o) ? o : String(o).split(/\r?\n/);
  var p = 1 * this.internal.scaleFactor * t / d;
  u.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / d : 0, u.lineIndent = n.lineIndent;
  var v, f, m = [];
  for (v = 0, f = c.length; v < f; v++) m = m.concat(Fu.apply(this, [c[v], p, u]));
  return m;
}, function(o) {
  o.__fontmetrics__ = o.__fontmetrics__ || {};
  for (var t = "klmnopqrstuvwxyz", n = {}, c = {}, d = 0; d < t.length; d++) n[t[d]] = "0123456789abcdef"[d], c["0123456789abcdef"[d]] = t[d];
  var u = function(y) {
    return "0x" + parseInt(y, 10).toString(16);
  }, p = o.__fontmetrics__.compress = function(y) {
    var C, g, L, E, x = ["{"];
    for (var b in y) {
      if (C = y[b], isNaN(parseInt(b, 10)) ? g = "'" + b + "'" : (b = parseInt(b, 10), g = (g = u(b).slice(2)).slice(0, -1) + c[g.slice(-1)]), typeof C == "number") C < 0 ? (L = u(C).slice(3), E = "-") : (L = u(C).slice(2), E = ""), L = E + L.slice(0, -1) + c[L.slice(-1)];
      else {
        if (st(C) !== "object") throw new Error("Don't know what to do with value type " + st(C) + ".");
        L = p(C);
      }
      x.push(g + L);
    }
    return x.push("}"), x.join("");
  }, v = o.__fontmetrics__.uncompress = function(y) {
    if (typeof y != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var C, g, L, E, x = {}, b = 1, U = x, I = [], M = "", R = "", Z = y.length - 1, AA = 1; AA < Z; AA += 1) (E = y[AA]) == "'" ? C ? (L = C.join(""), C = void 0) : C = [] : C ? C.push(E) : E == "{" ? (I.push([U, L]), U = {}, L = void 0) : E == "}" ? ((g = I.pop())[0][g[1]] = U, L = void 0, U = g[0]) : E == "-" ? b = -1 : L === void 0 ? n.hasOwnProperty(E) ? (M += n[E], L = parseInt(M, 16) * b, b = 1, M = "") : M += E : n.hasOwnProperty(E) ? (R += n[E], U[L] = parseInt(R, 16) * b, b = 1, L = void 0, R = "") : R += E;
    return x;
  }, f = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: v("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, m = { Unicode: { Courier: f, "Courier-Bold": f, "Courier-BoldOblique": f, "Courier-Oblique": f, Helvetica: f, "Helvetica-Bold": f, "Helvetica-BoldOblique": f, "Helvetica-Oblique": f, "Times-Roman": f, "Times-Bold": f, "Times-BoldItalic": f, "Times-Italic": f } }, l = { Unicode: { "Courier-Oblique": v("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": v("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": v("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: v("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": v("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": v("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: v("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: v("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": v("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: v("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": v("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": v("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": v("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": v("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  o.events.push(["addFont", function(y) {
    var C = y.font, g = l.Unicode[C.postScriptName];
    g && (C.metadata.Unicode = {}, C.metadata.Unicode.widths = g.widths, C.metadata.Unicode.kerning = g.kerning);
    var L = m.Unicode[C.postScriptName];
    L && (C.metadata.Unicode.encoding = L, C.encoding = L.codePages[0]);
  }]);
}(Ue.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t = function(n) {
    for (var c = n.length, d = new Uint8Array(c), u = 0; u < c; u++) d[u] = n.charCodeAt(u);
    return d;
  };
  o.API.events.push(["addFont", function(n) {
    var c = void 0, d = n.font, u = n.instance;
    if (!d.isStandardFont) {
      if (u === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + d.postScriptName + "').");
      if (typeof (c = u.existsFileInVFS(d.postScriptName) === !1 ? u.loadFile(d.postScriptName) : u.getFileFromVFS(d.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + d.postScriptName + "').");
      (function(p, v) {
        v = /^\x00\x01\x00\x00/.test(v) ? t(v) : t(ia(v)), p.metadata = o.API.TTFFont.open(v), p.metadata.Unicode = p.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, p.metadata.glyIdsUsed = [0];
      })(d, c);
    }
  }]);
}(Ue), /** @license
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
function(o) {
  function t() {
    return (Ie.canvg ? Promise.resolve(Ie.canvg) : import("./index.es-DrFvq0Bt.js")).catch(function(n) {
      return Promise.reject(new Error("Could not load canvg: " + n));
    }).then(function(n) {
      return n.default ? n.default : n;
    });
  }
  Ue.API.addSvgAsImage = function(n, c, d, u, p, v, f, m) {
    if (isNaN(c) || isNaN(d)) throw ot.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(u) || isNaN(p)) throw ot.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var l = document.createElement("canvas");
    l.width = u, l.height = p;
    var y = l.getContext("2d");
    y.fillStyle = "#fff", y.fillRect(0, 0, l.width, l.height);
    var C = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, g = this;
    return t().then(function(L) {
      return L.fromString(y, n, C);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(L) {
      return L.render(C);
    }).then(function() {
      g.addImage(l.toDataURL("image/jpeg", 1), c, d, u, p, f, m);
    });
  };
}(), Ue.API.putTotalPages = function(o) {
  var t, n = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(o, "g"), n = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(o, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var c = 1; c <= this.internal.getNumberOfPages(); c++) for (var d = 0; d < this.internal.pages[c].length; d++) this.internal.pages[c][d] = this.internal.pages[c][d].replace(t, n);
  return this;
}, Ue.API.viewerPreferences = function(o, t) {
  var n;
  o = o || {}, t = t || !1;
  var c, d, u, p = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, v = Object.keys(p), f = [], m = 0, l = 0, y = 0;
  function C(L, E) {
    var x, b = !1;
    for (x = 0; x < L.length; x += 1) L[x] === E && (b = !0);
    return b;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(p)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, o === "reset" || t === !0) {
    var g = v.length;
    for (y = 0; y < g; y += 1) n[v[y]].value = n[v[y]].defaultValue, n[v[y]].explicitSet = !1;
  }
  if (st(o) === "object") {
    for (d in o) if (u = o[d], C(v, d) && u !== void 0) {
      if (n[d].type === "boolean" && typeof u == "boolean") n[d].value = u;
      else if (n[d].type === "name" && C(n[d].valueSet, u)) n[d].value = u;
      else if (n[d].type === "integer" && Number.isInteger(u)) n[d].value = u;
      else if (n[d].type === "array") {
        for (m = 0; m < u.length; m += 1) if (c = !0, u[m].length === 1 && typeof u[m][0] == "number") f.push(String(u[m] - 1));
        else if (u[m].length > 1) {
          for (l = 0; l < u[m].length; l += 1) typeof u[m][l] != "number" && (c = !1);
          c === !0 && f.push([u[m][0] - 1, u[m][1] - 1].join(" "));
        }
        n[d].value = "[" + f.join(" ") + "]";
      } else n[d].value = n[d].defaultValue;
      n[d].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var L, E = [];
    for (L in n) n[L].explicitSet === !0 && (n[L].type === "name" ? E.push("/" + L + " /" + n[L].value) : E.push("/" + L + " " + n[L].value));
    E.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + E.join(`
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
function(o) {
  var t = function() {
    var c = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', d = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), u = unescape(encodeURIComponent(c)), p = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), v = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), f = unescape(encodeURIComponent("</x:xmpmeta>")), m = u.length + p.length + v.length + d.length + f.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + m + " >>"), this.internal.write("stream"), this.internal.write(d + u + p + v + f), this.internal.write("endstream"), this.internal.write("endobj");
  }, n = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  o.addMetadata = function(c, d) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: c, namespaceuri: d || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", t)), this;
  };
}(Ue.API), function(o) {
  var t = o.API, n = t.pdfEscape16 = function(u, p) {
    for (var v, f = p.metadata.Unicode.widths, m = ["", "0", "00", "000", "0000"], l = [""], y = 0, C = u.length; y < C; ++y) {
      if (v = p.metadata.characterToGlyph(u.charCodeAt(y)), p.metadata.glyIdsUsed.push(v), p.metadata.toUnicode[v] = u.charCodeAt(y), f.indexOf(v) == -1 && (f.push(v), f.push([parseInt(p.metadata.widthOfGlyph(v), 10)])), v == "0") return l.join("");
      v = v.toString(16), l.push(m[4 - v.length], v);
    }
    return l.join("");
  }, c = function(u) {
    var p, v, f, m, l, y, C;
    for (l = `/CIDInit /ProcSet findresource begin
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
endcodespacerange`, f = [], y = 0, C = (v = Object.keys(u).sort(function(g, L) {
      return g - L;
    })).length; y < C; y++) p = v[y], f.length >= 100 && (l += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar`, f = []), u[p] !== void 0 && u[p] !== null && typeof u[p].toString == "function" && (m = ("0000" + u[p].toString(16)).slice(-4), p = ("0000" + (+p).toString(16)).slice(-4), f.push("<" + p + "><" + m + ">"));
    return f.length && (l += `
` + f.length + ` beginbfchar
` + f.join(`
`) + `
endbfchar
`), l += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  t.events.push(["putFont", function(u) {
    (function(p) {
      var v = p.font, f = p.out, m = p.newObject, l = p.putStream;
      if (v.metadata instanceof o.API.TTFFont && v.encoding === "Identity-H") {
        for (var y = v.metadata.Unicode.widths, C = v.metadata.subset.encode(v.metadata.glyIdsUsed, 1), g = "", L = 0; L < C.length; L++) g += String.fromCharCode(C[L]);
        var E = m();
        l({ data: g, addLength1: !0, objectId: E }), f("endobj");
        var x = m();
        l({ data: c(v.metadata.toUnicode), addLength1: !0, objectId: x }), f("endobj");
        var b = m();
        f("<<"), f("/Type /FontDescriptor"), f("/FontName /" + Qo(v.fontName)), f("/FontFile2 " + E + " 0 R"), f("/FontBBox " + o.API.PDFObject.convert(v.metadata.bbox)), f("/Flags " + v.metadata.flags), f("/StemV " + v.metadata.stemV), f("/ItalicAngle " + v.metadata.italicAngle), f("/Ascent " + v.metadata.ascender), f("/Descent " + v.metadata.decender), f("/CapHeight " + v.metadata.capHeight), f(">>"), f("endobj");
        var U = m();
        f("<<"), f("/Type /Font"), f("/BaseFont /" + Qo(v.fontName)), f("/FontDescriptor " + b + " 0 R"), f("/W " + o.API.PDFObject.convert(y)), f("/CIDToGIDMap /Identity"), f("/DW 1000"), f("/Subtype /CIDFontType2"), f("/CIDSystemInfo"), f("<<"), f("/Supplement 0"), f("/Registry (Adobe)"), f("/Ordering (" + v.encoding + ")"), f(">>"), f(">>"), f("endobj"), v.objectNumber = m(), f("<<"), f("/Type /Font"), f("/Subtype /Type0"), f("/ToUnicode " + x + " 0 R"), f("/BaseFont /" + Qo(v.fontName)), f("/Encoding /" + v.encoding), f("/DescendantFonts [" + U + " 0 R]"), f(">>"), f("endobj"), v.isAlreadyPutted = !0;
      }
    })(u);
  }]), t.events.push(["putFont", function(u) {
    (function(p) {
      var v = p.font, f = p.out, m = p.newObject, l = p.putStream;
      if (v.metadata instanceof o.API.TTFFont && v.encoding === "WinAnsiEncoding") {
        for (var y = v.metadata.rawData, C = "", g = 0; g < y.length; g++) C += String.fromCharCode(y[g]);
        var L = m();
        l({ data: C, addLength1: !0, objectId: L }), f("endobj");
        var E = m();
        l({ data: c(v.metadata.toUnicode), addLength1: !0, objectId: E }), f("endobj");
        var x = m();
        f("<<"), f("/Descent " + v.metadata.decender), f("/CapHeight " + v.metadata.capHeight), f("/StemV " + v.metadata.stemV), f("/Type /FontDescriptor"), f("/FontFile2 " + L + " 0 R"), f("/Flags 96"), f("/FontBBox " + o.API.PDFObject.convert(v.metadata.bbox)), f("/FontName /" + Qo(v.fontName)), f("/ItalicAngle " + v.metadata.italicAngle), f("/Ascent " + v.metadata.ascender), f(">>"), f("endobj"), v.objectNumber = m();
        for (var b = 0; b < v.metadata.hmtx.widths.length; b++) v.metadata.hmtx.widths[b] = parseInt(v.metadata.hmtx.widths[b] * (1e3 / v.metadata.head.unitsPerEm));
        f("<</Subtype/TrueType/Type/Font/ToUnicode " + E + " 0 R/BaseFont/" + Qo(v.fontName) + "/FontDescriptor " + x + " 0 R/Encoding/" + v.encoding + " /FirstChar 29 /LastChar 255 /Widths " + o.API.PDFObject.convert(v.metadata.hmtx.widths) + ">>"), f("endobj"), v.isAlreadyPutted = !0;
      }
    })(u);
  }]);
  var d = function(u) {
    var p, v = u.text || "", f = u.x, m = u.y, l = u.options || {}, y = u.mutex || {}, C = y.pdfEscape, g = y.activeFontKey, L = y.fonts, E = g, x = "", b = 0, U = "", I = L[E].encoding;
    if (L[E].encoding !== "Identity-H") return { text: v, x: f, y: m, options: l, mutex: y };
    for (U = v, E = g, Array.isArray(v) && (U = v[0]), b = 0; b < U.length; b += 1) L[E].metadata.hasOwnProperty("cmap") && (p = L[E].metadata.cmap.unicode.codeMap[U[b].charCodeAt(0)]), p || U[b].charCodeAt(0) < 256 && L[E].metadata.hasOwnProperty("Unicode") ? x += U[b] : x += "";
    var M = "";
    return parseInt(E.slice(1)) < 14 || I === "WinAnsiEncoding" ? M = C(x, E).split("").map(function(R) {
      return R.charCodeAt(0).toString(16);
    }).join("") : I === "Identity-H" && (M = n(x, L[E])), y.isHex = !0, { text: M, x: f, y: m, options: l, mutex: y };
  };
  t.events.push(["postProcessText", function(u) {
    var p = u.text || "", v = [], f = { text: p, x: u.x, y: u.y, options: u.options, mutex: u.mutex };
    if (Array.isArray(p)) {
      var m = 0;
      for (m = 0; m < p.length; m += 1) Array.isArray(p[m]) && p[m].length === 3 ? v.push([d(Object.assign({}, f, { text: p[m][0] })).text, p[m][1], p[m][2]]) : v.push(d(Object.assign({}, f, { text: p[m] })).text);
      u.text = v;
    } else u.text = d(Object.assign({}, f, { text: p })).text;
  }]);
}(Ue), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(o) {
  var t = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  o.existsFileInVFS = function(n) {
    return t.call(this), this.internal.vFS[n] !== void 0;
  }, o.addFileToVFS = function(n, c) {
    return t.call(this), this.internal.vFS[n] = c, this;
  }, o.getFileFromVFS = function(n) {
    return t.call(this), this.internal.vFS[n] !== void 0 ? this.internal.vFS[n] : null;
  };
}(Ue.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(o) {
  o.__bidiEngine__ = o.prototype.__bidiEngine__ = function(c) {
    var d, u, p, v, f, m, l, y = t, C = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], g = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], L = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, E = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, x = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], b = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), U = !1, I = 0;
    this.__bidiEngine__ = {};
    var M = function(T) {
      var _ = T.charCodeAt(), z = _ >> 8, J = E[z];
      return J !== void 0 ? y[256 * J + (255 & _)] : z === 252 || z === 253 ? "AL" : b.test(z) ? "L" : z === 8 ? "R" : "N";
    }, R = function(T) {
      for (var _, z = 0; z < T.length; z++) {
        if ((_ = M(T.charAt(z))) === "L") return !1;
        if (_ === "R") return !0;
      }
      return !1;
    }, Z = function(T, _, z, J) {
      var tA, aA, vA, hA, UA = _[J];
      switch (UA) {
        case "L":
        case "R":
          U = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          U && (UA = "AN");
          break;
        case "AL":
          U = !0, UA = "R";
          break;
        case "WS":
          UA = "N";
          break;
        case "CS":
          J < 1 || J + 1 >= _.length || (tA = z[J - 1]) !== "EN" && tA !== "AN" || (aA = _[J + 1]) !== "EN" && aA !== "AN" ? UA = "N" : U && (aA = "AN"), UA = aA === tA ? aA : "N";
          break;
        case "ES":
          UA = (tA = J > 0 ? z[J - 1] : "B") === "EN" && J + 1 < _.length && _[J + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (J > 0 && z[J - 1] === "EN") {
            UA = "EN";
            break;
          }
          if (U) {
            UA = "N";
            break;
          }
          for (vA = J + 1, hA = _.length; vA < hA && _[vA] === "ET"; ) vA++;
          UA = vA < hA && _[vA] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (p && !v) {
            for (hA = _.length, vA = J + 1; vA < hA && _[vA] === "NSM"; ) vA++;
            if (vA < hA) {
              var bA = T[J], PA = bA >= 1425 && bA <= 2303 || bA === 64286;
              if (tA = _[vA], PA && (tA === "R" || tA === "AL")) {
                UA = "R";
                break;
              }
            }
          }
          UA = J < 1 || (tA = _[J - 1]) === "B" ? "N" : z[J - 1];
          break;
        case "B":
          U = !1, d = !0, UA = I;
          break;
        case "S":
          u = !0, UA = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          U = !1;
          break;
        case "BN":
          UA = "N";
      }
      return UA;
    }, AA = function(T, _, z) {
      var J = T.split("");
      return z && V(J, z, { hiLevel: I }), J.reverse(), _ && _.reverse(), J.join("");
    }, V = function(T, _, z) {
      var J, tA, aA, vA, hA, UA = -1, bA = T.length, PA = 0, j = [], X = I ? g : C, q = [];
      for (U = !1, d = !1, u = !1, tA = 0; tA < bA; tA++) q[tA] = M(T[tA]);
      for (aA = 0; aA < bA; aA++) {
        if (hA = PA, j[aA] = Z(T, q, j, aA), J = 240 & (PA = X[hA][L[j[aA]]]), PA &= 15, _[aA] = vA = X[PA][5], J > 0) if (J === 16) {
          for (tA = UA; tA < aA; tA++) _[tA] = 1;
          UA = -1;
        } else UA = -1;
        if (X[PA][6]) UA === -1 && (UA = aA);
        else if (UA > -1) {
          for (tA = UA; tA < aA; tA++) _[tA] = vA;
          UA = -1;
        }
        q[aA] === "B" && (_[aA] = 0), z.hiLevel |= vA;
      }
      u && function(eA, uA, gA) {
        for (var FA = 0; FA < gA; FA++) if (eA[FA] === "S") {
          uA[FA] = I;
          for (var QA = FA - 1; QA >= 0 && eA[QA] === "WS"; QA--) uA[QA] = I;
        }
      }(q, _, bA);
    }, dA = function(T, _, z, J, tA) {
      if (!(tA.hiLevel < T)) {
        if (T === 1 && I === 1 && !d) return _.reverse(), void (z && z.reverse());
        for (var aA, vA, hA, UA, bA = _.length, PA = 0; PA < bA; ) {
          if (J[PA] >= T) {
            for (hA = PA + 1; hA < bA && J[hA] >= T; ) hA++;
            for (UA = PA, vA = hA - 1; UA < vA; UA++, vA--) aA = _[UA], _[UA] = _[vA], _[vA] = aA, z && (aA = z[UA], z[UA] = z[vA], z[vA] = aA);
            PA = hA;
          }
          PA++;
        }
      }
    }, cA = function(T, _, z) {
      var J = T.split(""), tA = { hiLevel: I };
      return z || (z = []), V(J, z, tA), function(aA, vA, hA) {
        if (hA.hiLevel !== 0 && l) for (var UA, bA = 0; bA < aA.length; bA++) vA[bA] === 1 && (UA = x.indexOf(aA[bA])) >= 0 && (aA[bA] = x[UA + 1]);
      }(J, z, tA), dA(2, J, _, z, tA), dA(1, J, _, z, tA), J.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(T, _, z) {
      if (function(tA, aA) {
        if (aA) for (var vA = 0; vA < tA.length; vA++) aA[vA] = vA;
        v === void 0 && (v = R(tA)), m === void 0 && (m = R(tA));
      }(T, _), p || !f || m) if (p && f && v ^ m) I = v ? 1 : 0, T = AA(T, _, z);
      else if (!p && f && m) I = v ? 1 : 0, T = cA(T, _, z), T = AA(T, _);
      else if (!p || v || f || m) {
        if (p && !f && v ^ m) T = AA(T, _), v ? (I = 0, T = cA(T, _, z)) : (I = 1, T = cA(T, _, z), T = AA(T, _));
        else if (p && v && !f && m) I = 1, T = cA(T, _, z), T = AA(T, _);
        else if (!p && !f && v ^ m) {
          var J = l;
          v ? (I = 1, T = cA(T, _, z), I = 0, l = !1, T = cA(T, _, z), l = J) : (I = 0, T = cA(T, _, z), T = AA(T, _), I = 1, l = !1, T = cA(T, _, z), l = J, T = AA(T, _));
        }
      } else I = 0, T = cA(T, _, z);
      else I = v ? 1 : 0, T = cA(T, _, z);
      return T;
    }, this.__bidiEngine__.setOptions = function(T) {
      T && (p = T.isInputVisual, f = T.isOutputVisual, v = T.isInputRtl, m = T.isOutputRtl, l = T.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(c), this.__bidiEngine__;
  };
  var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], n = new o.__bidiEngine__({ isInputVisual: !0 });
  o.API.events.push(["postProcessText", function(c) {
    var d = c.text, u = (c.x, c.y, c.options || {}), p = (c.mutex, u.lang, []);
    if (u.isInputVisual = typeof u.isInputVisual != "boolean" || u.isInputVisual, n.setOptions(u), Object.prototype.toString.call(d) === "[object Array]") {
      var v = 0;
      for (p = [], v = 0; v < d.length; v += 1) Object.prototype.toString.call(d[v]) === "[object Array]" ? p.push([n.doBidiReorder(d[v][0]), d[v][1], d[v][2]]) : p.push([n.doBidiReorder(d[v])]);
      c.text = p;
    } else c.text = n.doBidiReorder(d);
    n.setOptions({ isInputVisual: !0 });
  }]);
}(Ue), Ue.API.TTFFont = function() {
  function o(t) {
    var n;
    if (this.rawData = t, n = this.contents = new qs(t), this.contents.pos = 4, n.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    n.pos = 0, this.parse(), this.subset = new cd(this), this.registerTTF();
  }
  return o.open = function(t) {
    return new o(t);
  }, o.prototype.parse = function() {
    return this.directory = new zh(this.contents), this.head = new qh(this), this.name = new td(this), this.cmap = new Gu(this), this.toUnicode = {}, this.hhea = new Zh(this), this.maxp = new rd(this), this.hmtx = new nd(this), this.post = new Ad(this), this.os2 = new $h(this), this.loca = new ad(this), this.glyf = new sd(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, o.prototype.registerTTF = function() {
    var t, n, c, d, u;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var p, v, f, m;
      for (m = [], p = 0, v = (f = this.bbox).length; p < v; p++) t = f[p], m.push(Math.round(t * this.scaleFactor));
      return m;
    }).call(this), this.stemV = 0, this.post.exists ? (c = 255 & (d = this.post.italic_angle), 32768 & (n = d >> 16) && (n = -(1 + (65535 ^ n))), this.italicAngle = +(n + "." + c)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (u = this.familyClass) === 1 || u === 2 || u === 3 || u === 4 || u === 5 || u === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, o.prototype.characterToGlyph = function(t) {
    var n;
    return ((n = this.cmap.unicode) != null ? n.codeMap[t] : void 0) || 0;
  }, o.prototype.widthOfGlyph = function(t) {
    var n;
    return n = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * n;
  }, o.prototype.widthOfString = function(t, n, c) {
    var d, u, p, v;
    for (p = 0, u = 0, v = (t = "" + t).length; 0 <= v ? u < v : u > v; u = 0 <= v ? ++u : --u) d = t.charCodeAt(u), p += this.widthOfGlyph(this.characterToGlyph(d)) + c * (1e3 / n) || 0;
    return p * (n / 1e3);
  }, o.prototype.lineHeight = function(t, n) {
    var c;
    return n == null && (n = !1), c = n ? this.lineGap : 0, (this.ascender + c - this.decender) / 1e3 * t;
  }, o;
}();
var mn, qs = function() {
  function o(t) {
    this.data = t ?? [], this.pos = 0, this.length = this.data.length;
  }
  return o.prototype.readByte = function() {
    return this.data[this.pos++];
  }, o.prototype.writeByte = function(t) {
    return this.data[this.pos++] = t;
  }, o.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, o.prototype.writeUInt32 = function(t) {
    return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, o.prototype.readInt32 = function() {
    var t;
    return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
  }, o.prototype.writeInt32 = function(t) {
    return t < 0 && (t += 4294967296), this.writeUInt32(t);
  }, o.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, o.prototype.writeUInt16 = function(t) {
    return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, o.prototype.readInt16 = function() {
    var t;
    return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
  }, o.prototype.writeInt16 = function(t) {
    return t < 0 && (t += 65536), this.writeUInt16(t);
  }, o.prototype.readString = function(t) {
    var n, c;
    for (c = [], n = 0; 0 <= t ? n < t : n > t; n = 0 <= t ? ++n : --n) c[n] = String.fromCharCode(this.readByte());
    return c.join("");
  }, o.prototype.writeString = function(t) {
    var n, c, d;
    for (d = [], n = 0, c = t.length; 0 <= c ? n < c : n > c; n = 0 <= c ? ++n : --n) d.push(this.writeByte(t.charCodeAt(n)));
    return d;
  }, o.prototype.readShort = function() {
    return this.readInt16();
  }, o.prototype.writeShort = function(t) {
    return this.writeInt16(t);
  }, o.prototype.readLongLong = function() {
    var t, n, c, d, u, p, v, f;
    return t = this.readByte(), n = this.readByte(), c = this.readByte(), d = this.readByte(), u = this.readByte(), p = this.readByte(), v = this.readByte(), f = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ n) + 1099511627776 * (255 ^ c) + 4294967296 * (255 ^ d) + 16777216 * (255 ^ u) + 65536 * (255 ^ p) + 256 * (255 ^ v) + (255 ^ f) + 1) : 72057594037927940 * t + 281474976710656 * n + 1099511627776 * c + 4294967296 * d + 16777216 * u + 65536 * p + 256 * v + f;
  }, o.prototype.writeLongLong = function(t) {
    var n, c;
    return n = Math.floor(t / 4294967296), c = 4294967295 & t, this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n), this.writeByte(c >> 24 & 255), this.writeByte(c >> 16 & 255), this.writeByte(c >> 8 & 255), this.writeByte(255 & c);
  }, o.prototype.readInt = function() {
    return this.readInt32();
  }, o.prototype.writeInt = function(t) {
    return this.writeInt32(t);
  }, o.prototype.read = function(t) {
    var n, c;
    for (n = [], c = 0; 0 <= t ? c < t : c > t; c = 0 <= t ? ++c : --c) n.push(this.readByte());
    return n;
  }, o.prototype.write = function(t) {
    var n, c, d, u;
    for (u = [], c = 0, d = t.length; c < d; c++) n = t[c], u.push(this.writeByte(n));
    return u;
  }, o;
}(), zh = function() {
  var o;
  function t(n) {
    var c, d, u;
    for (this.scalarType = n.readInt(), this.tableCount = n.readShort(), this.searchRange = n.readShort(), this.entrySelector = n.readShort(), this.rangeShift = n.readShort(), this.tables = {}, d = 0, u = this.tableCount; 0 <= u ? d < u : d > u; d = 0 <= u ? ++d : --d) c = { tag: n.readString(4), checksum: n.readInt(), offset: n.readInt(), length: n.readInt() }, this.tables[c.tag] = c;
  }
  return t.prototype.encode = function(n) {
    var c, d, u, p, v, f, m, l, y, C, g, L, E;
    for (E in g = Object.keys(n).length, f = Math.log(2), y = 16 * Math.floor(Math.log(g) / f), p = Math.floor(y / f), l = 16 * g - y, (d = new qs()).writeInt(this.scalarType), d.writeShort(g), d.writeShort(y), d.writeShort(p), d.writeShort(l), u = 16 * g, m = d.pos + u, v = null, L = [], n) for (C = n[E], d.writeString(E), d.writeInt(o(C)), d.writeInt(m), d.writeInt(C.length), L = L.concat(C), E === "head" && (v = m), m += C.length; m % 4; ) L.push(0), m++;
    return d.write(L), c = 2981146554 - o(d.data), d.pos = v + 8, d.writeUInt32(c), d.data;
  }, o = function(n) {
    var c, d, u, p;
    for (n = Vu.call(n); n.length % 4; ) n.push(0);
    for (u = new qs(n), d = 0, c = 0, p = n.length; c < p; c = c += 4) d += u.readUInt32();
    return 4294967295 & d;
  }, t;
}(), Yh = {}.hasOwnProperty, kn = function(o, t) {
  for (var n in t) Yh.call(t, n) && (o[n] = t[n]);
  function c() {
    this.constructor = o;
  }
  return c.prototype = t.prototype, o.prototype = new c(), o.__super__ = t.prototype, o;
};
mn = function() {
  function o(t) {
    var n;
    this.file = t, n = this.file.directory.tables[this.tag], this.exists = !!n, n && (this.offset = n.offset, this.length = n.length, this.parse(this.file.contents));
  }
  return o.prototype.parse = function() {
  }, o.prototype.encode = function() {
  }, o.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, o;
}();
var qh = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "head", t.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.revision = n.readInt(), this.checkSumAdjustment = n.readInt(), this.magicNumber = n.readInt(), this.flags = n.readShort(), this.unitsPerEm = n.readShort(), this.created = n.readLongLong(), this.modified = n.readLongLong(), this.xMin = n.readShort(), this.yMin = n.readShort(), this.xMax = n.readShort(), this.yMax = n.readShort(), this.macStyle = n.readShort(), this.lowestRecPPEM = n.readShort(), this.fontDirectionHint = n.readShort(), this.indexToLocFormat = n.readShort(), this.glyphDataFormat = n.readShort();
  }, t.prototype.encode = function(n) {
    var c;
    return (c = new qs()).writeInt(this.version), c.writeInt(this.revision), c.writeInt(this.checkSumAdjustment), c.writeInt(this.magicNumber), c.writeShort(this.flags), c.writeShort(this.unitsPerEm), c.writeLongLong(this.created), c.writeLongLong(this.modified), c.writeShort(this.xMin), c.writeShort(this.yMin), c.writeShort(this.xMax), c.writeShort(this.yMax), c.writeShort(this.macStyle), c.writeShort(this.lowestRecPPEM), c.writeShort(this.fontDirectionHint), c.writeShort(n), c.writeShort(this.glyphDataFormat), c.data;
  }, t;
}(), Uu = function() {
  function o(t, n) {
    var c, d, u, p, v, f, m, l, y, C, g, L, E, x, b, U, I;
    switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = n + t.readInt(), y = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (f = 0; f < 256; ++f) this.codeMap[f] = t.readByte();
        break;
      case 4:
        for (g = t.readUInt16(), C = g / 2, t.pos += 6, u = function() {
          var M, R;
          for (R = [], f = M = 0; 0 <= C ? M < C : M > C; f = 0 <= C ? ++M : --M) R.push(t.readUInt16());
          return R;
        }(), t.pos += 2, E = function() {
          var M, R;
          for (R = [], f = M = 0; 0 <= C ? M < C : M > C; f = 0 <= C ? ++M : --M) R.push(t.readUInt16());
          return R;
        }(), m = function() {
          var M, R;
          for (R = [], f = M = 0; 0 <= C ? M < C : M > C; f = 0 <= C ? ++M : --M) R.push(t.readUInt16());
          return R;
        }(), l = function() {
          var M, R;
          for (R = [], f = M = 0; 0 <= C ? M < C : M > C; f = 0 <= C ? ++M : --M) R.push(t.readUInt16());
          return R;
        }(), d = (this.length - t.pos + this.offset) / 2, v = function() {
          var M, R;
          for (R = [], f = M = 0; 0 <= d ? M < d : M > d; f = 0 <= d ? ++M : --M) R.push(t.readUInt16());
          return R;
        }(), f = b = 0, I = u.length; b < I; f = ++b) for (x = u[f], c = U = L = E[f]; L <= x ? U <= x : U >= x; c = L <= x ? ++U : --U) l[f] === 0 ? p = c + m[f] : (p = v[l[f] / 2 + (c - L) - (C - f)] || 0) !== 0 && (p += m[f]), this.codeMap[c] = 65535 & p;
    }
    t.pos = y;
  }
  return o.encode = function(t, n) {
    var c, d, u, p, v, f, m, l, y, C, g, L, E, x, b, U, I, M, R, Z, AA, V, dA, cA, T, _, z, J, tA, aA, vA, hA, UA, bA, PA, j, X, q, eA, uA, gA, FA, QA, DA, KA, RA;
    switch (J = new qs(), p = Object.keys(t).sort(function(GA, ce) {
      return GA - ce;
    }), n) {
      case "macroman":
        for (E = 0, x = function() {
          var GA = [];
          for (L = 0; L < 256; ++L) GA.push(0);
          return GA;
        }(), U = { 0: 0 }, u = {}, tA = 0, UA = p.length; tA < UA; tA++) U[QA = t[d = p[tA]]] == null && (U[QA] = ++E), u[d] = { old: t[d], new: U[t[d]] }, x[d] = U[t[d]];
        return J.writeUInt16(1), J.writeUInt16(0), J.writeUInt32(12), J.writeUInt16(0), J.writeUInt16(262), J.writeUInt16(0), J.write(x), { charMap: u, subtable: J.data, maxGlyphID: E + 1 };
      case "unicode":
        for (_ = [], y = [], I = 0, U = {}, c = {}, b = m = null, aA = 0, bA = p.length; aA < bA; aA++) U[R = t[d = p[aA]]] == null && (U[R] = ++I), c[d] = { old: R, new: U[R] }, v = U[R] - d, b != null && v === m || (b && y.push(b), _.push(d), m = v), b = d;
        for (b && y.push(b), y.push(65535), _.push(65535), cA = 2 * (dA = _.length), V = 2 * Math.pow(Math.log(dA) / Math.LN2, 2), C = Math.log(V / 2) / Math.LN2, AA = 2 * dA - V, f = [], Z = [], g = [], L = vA = 0, PA = _.length; vA < PA; L = ++vA) {
          if (T = _[L], l = y[L], T === 65535) {
            f.push(0), Z.push(0);
            break;
          }
          if (T - (z = c[T].new) >= 32768) for (f.push(0), Z.push(2 * (g.length + dA - L)), d = hA = T; T <= l ? hA <= l : hA >= l; d = T <= l ? ++hA : --hA) g.push(c[d].new);
          else f.push(z - T), Z.push(0);
        }
        for (J.writeUInt16(3), J.writeUInt16(1), J.writeUInt32(12), J.writeUInt16(4), J.writeUInt16(16 + 8 * dA + 2 * g.length), J.writeUInt16(0), J.writeUInt16(cA), J.writeUInt16(V), J.writeUInt16(C), J.writeUInt16(AA), gA = 0, j = y.length; gA < j; gA++) d = y[gA], J.writeUInt16(d);
        for (J.writeUInt16(0), FA = 0, X = _.length; FA < X; FA++) d = _[FA], J.writeUInt16(d);
        for (DA = 0, q = f.length; DA < q; DA++) v = f[DA], J.writeUInt16(v);
        for (KA = 0, eA = Z.length; KA < eA; KA++) M = Z[KA], J.writeUInt16(M);
        for (RA = 0, uA = g.length; RA < uA; RA++) E = g[RA], J.writeUInt16(E);
        return { charMap: c, subtable: J.data, maxGlyphID: I + 1 };
    }
  }, o;
}(), Gu = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "cmap", t.prototype.parse = function(n) {
    var c, d, u;
    for (n.pos = this.offset, this.version = n.readUInt16(), u = n.readUInt16(), this.tables = [], this.unicode = null, d = 0; 0 <= u ? d < u : d > u; d = 0 <= u ? ++d : --d) c = new Uu(n, this.offset), this.tables.push(c), c.isUnicode && this.unicode == null && (this.unicode = c);
    return !0;
  }, t.encode = function(n, c) {
    var d, u;
    return c == null && (c = "macroman"), d = Uu.encode(n, c), (u = new qs()).writeUInt16(0), u.writeUInt16(1), d.table = u.data.concat(d.subtable), d;
  }, t;
}(), Zh = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "hhea", t.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.ascender = n.readShort(), this.decender = n.readShort(), this.lineGap = n.readShort(), this.advanceWidthMax = n.readShort(), this.minLeftSideBearing = n.readShort(), this.minRightSideBearing = n.readShort(), this.xMaxExtent = n.readShort(), this.caretSlopeRise = n.readShort(), this.caretSlopeRun = n.readShort(), this.caretOffset = n.readShort(), n.pos += 8, this.metricDataFormat = n.readShort(), this.numberOfMetrics = n.readUInt16();
  }, t;
}(), $h = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "OS/2", t.prototype.parse = function(n) {
    if (n.pos = this.offset, this.version = n.readUInt16(), this.averageCharWidth = n.readShort(), this.weightClass = n.readUInt16(), this.widthClass = n.readUInt16(), this.type = n.readShort(), this.ySubscriptXSize = n.readShort(), this.ySubscriptYSize = n.readShort(), this.ySubscriptXOffset = n.readShort(), this.ySubscriptYOffset = n.readShort(), this.ySuperscriptXSize = n.readShort(), this.ySuperscriptYSize = n.readShort(), this.ySuperscriptXOffset = n.readShort(), this.ySuperscriptYOffset = n.readShort(), this.yStrikeoutSize = n.readShort(), this.yStrikeoutPosition = n.readShort(), this.familyClass = n.readShort(), this.panose = function() {
      var c, d;
      for (d = [], c = 0; c < 10; ++c) d.push(n.readByte());
      return d;
    }(), this.charRange = function() {
      var c, d;
      for (d = [], c = 0; c < 4; ++c) d.push(n.readInt());
      return d;
    }(), this.vendorID = n.readString(4), this.selection = n.readShort(), this.firstCharIndex = n.readShort(), this.lastCharIndex = n.readShort(), this.version > 0 && (this.ascent = n.readShort(), this.descent = n.readShort(), this.lineGap = n.readShort(), this.winAscent = n.readShort(), this.winDescent = n.readShort(), this.codePageRange = function() {
      var c, d;
      for (d = [], c = 0; c < 2; c = ++c) d.push(n.readInt());
      return d;
    }(), this.version > 1)) return this.xHeight = n.readShort(), this.capHeight = n.readShort(), this.defaultChar = n.readShort(), this.breakChar = n.readShort(), this.maxContext = n.readShort();
  }, t;
}(), Ad = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "post", t.prototype.parse = function(n) {
    var c, d, u;
    switch (n.pos = this.offset, this.format = n.readInt(), this.italicAngle = n.readInt(), this.underlinePosition = n.readShort(), this.underlineThickness = n.readShort(), this.isFixedPitch = n.readInt(), this.minMemType42 = n.readInt(), this.maxMemType42 = n.readInt(), this.minMemType1 = n.readInt(), this.maxMemType1 = n.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var p;
        for (d = n.readUInt16(), this.glyphNameIndex = [], p = 0; 0 <= d ? p < d : p > d; p = 0 <= d ? ++p : --p) this.glyphNameIndex.push(n.readUInt16());
        for (this.names = [], u = []; n.pos < this.offset + this.length; ) c = n.readByte(), u.push(this.names.push(n.readString(c)));
        return u;
      case 151552:
        return d = n.readUInt16(), this.offsets = n.read(d);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var v, f, m;
          for (m = [], p = v = 0, f = this.file.maxp.numGlyphs; 0 <= f ? v < f : v > f; p = 0 <= f ? ++v : --v) m.push(n.readUInt32());
          return m;
        }).call(this);
    }
  }, t;
}(), ed = function(o, t) {
  this.raw = o, this.length = o.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
}, td = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "name", t.prototype.parse = function(n) {
    var c, d, u, p, v, f, m, l, y, C, g;
    for (n.pos = this.offset, n.readShort(), c = n.readShort(), f = n.readShort(), d = [], p = 0; 0 <= c ? p < c : p > c; p = 0 <= c ? ++p : --p) d.push({ platformID: n.readShort(), encodingID: n.readShort(), languageID: n.readShort(), nameID: n.readShort(), length: n.readShort(), offset: this.offset + f + n.readShort() });
    for (m = {}, p = y = 0, C = d.length; y < C; p = ++y) u = d[p], n.pos = u.offset, l = n.readString(u.length), v = new ed(l, u), m[g = u.nameID] == null && (m[g] = []), m[u.nameID].push(v);
    this.strings = m, this.copyright = m[0], this.fontFamily = m[1], this.fontSubfamily = m[2], this.uniqueSubfamily = m[3], this.fontName = m[4], this.version = m[5];
    try {
      this.postscriptName = m[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = m[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = m[7], this.manufacturer = m[8], this.designer = m[9], this.description = m[10], this.vendorUrl = m[11], this.designerUrl = m[12], this.license = m[13], this.licenseUrl = m[14], this.preferredFamily = m[15], this.preferredSubfamily = m[17], this.compatibleFull = m[18], this.sampleText = m[19];
  }, t;
}(), rd = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "maxp", t.prototype.parse = function(n) {
    return n.pos = this.offset, this.version = n.readInt(), this.numGlyphs = n.readUInt16(), this.maxPoints = n.readUInt16(), this.maxContours = n.readUInt16(), this.maxCompositePoints = n.readUInt16(), this.maxComponentContours = n.readUInt16(), this.maxZones = n.readUInt16(), this.maxTwilightPoints = n.readUInt16(), this.maxStorage = n.readUInt16(), this.maxFunctionDefs = n.readUInt16(), this.maxInstructionDefs = n.readUInt16(), this.maxStackElements = n.readUInt16(), this.maxSizeOfInstructions = n.readUInt16(), this.maxComponentElements = n.readUInt16(), this.maxComponentDepth = n.readUInt16();
  }, t;
}(), nd = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "hmtx", t.prototype.parse = function(n) {
    var c, d, u, p, v, f, m;
    for (n.pos = this.offset, this.metrics = [], c = 0, f = this.file.hhea.numberOfMetrics; 0 <= f ? c < f : c > f; c = 0 <= f ? ++c : --c) this.metrics.push({ advance: n.readUInt16(), lsb: n.readInt16() });
    for (u = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var l, y;
      for (y = [], c = l = 0; 0 <= u ? l < u : l > u; c = 0 <= u ? ++l : --l) y.push(n.readInt16());
      return y;
    }(), this.widths = (function() {
      var l, y, C, g;
      for (g = [], l = 0, y = (C = this.metrics).length; l < y; l++) p = C[l], g.push(p.advance);
      return g;
    }).call(this), d = this.widths[this.widths.length - 1], m = [], c = v = 0; 0 <= u ? v < u : v > u; c = 0 <= u ? ++v : --v) m.push(this.widths.push(d));
    return m;
  }, t.prototype.forGlyph = function(n) {
    return n in this.metrics ? this.metrics[n] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[n - this.metrics.length] };
  }, t;
}(), Vu = [].slice, sd = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "glyf", t.prototype.parse = function() {
    return this.cache = {};
  }, t.prototype.glyphFor = function(n) {
    var c, d, u, p, v, f, m, l, y, C;
    return n in this.cache ? this.cache[n] : (p = this.file.loca, c = this.file.contents, d = p.indexOf(n), (u = p.lengthOf(n)) === 0 ? this.cache[n] = null : (c.pos = this.offset + d, v = (f = new qs(c.read(u))).readShort(), l = f.readShort(), C = f.readShort(), m = f.readShort(), y = f.readShort(), this.cache[n] = v === -1 ? new od(f, l, C, m, y) : new id(f, v, l, C, m, y), this.cache[n]));
  }, t.prototype.encode = function(n, c, d) {
    var u, p, v, f, m;
    for (v = [], p = [], f = 0, m = c.length; f < m; f++) u = n[c[f]], p.push(v.length), u && (v = v.concat(u.encode(d)));
    return p.push(v.length), { table: v, offsets: p };
  }, t;
}(), id = function() {
  function o(t, n, c, d, u, p) {
    this.raw = t, this.numberOfContours = n, this.xMin = c, this.yMin = d, this.xMax = u, this.yMax = p, this.compound = !1;
  }
  return o.prototype.encode = function() {
    return this.raw.data;
  }, o;
}(), od = function() {
  function o(t, n, c, d, u) {
    var p, v;
    for (this.raw = t, this.xMin = n, this.yMin = c, this.xMax = d, this.yMax = u, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], p = this.raw; v = p.readShort(), this.glyphOffsets.push(p.pos), this.glyphIDs.push(p.readUInt16()), 32 & v; ) p.pos += 1 & v ? 4 : 2, 128 & v ? p.pos += 8 : 64 & v ? p.pos += 4 : 8 & v && (p.pos += 2);
  }
  return o.prototype.encode = function() {
    var t, n, c;
    for (n = new qs(Vu.call(this.raw.data)), t = 0, c = this.glyphIDs.length; t < c; ++t) n.pos = this.glyphOffsets[t];
    return n.data;
  }, o;
}(), ad = function(o) {
  function t() {
    return t.__super__.constructor.apply(this, arguments);
  }
  return kn(t, mn), t.prototype.tag = "loca", t.prototype.parse = function(n) {
    var c, d;
    return n.pos = this.offset, c = this.file.head.indexToLocFormat, this.offsets = c === 0 ? (function() {
      var u, p;
      for (p = [], d = 0, u = this.length; d < u; d += 2) p.push(2 * n.readUInt16());
      return p;
    }).call(this) : (function() {
      var u, p;
      for (p = [], d = 0, u = this.length; d < u; d += 4) p.push(n.readUInt32());
      return p;
    }).call(this);
  }, t.prototype.indexOf = function(n) {
    return this.offsets[n];
  }, t.prototype.lengthOf = function(n) {
    return this.offsets[n + 1] - this.offsets[n];
  }, t.prototype.encode = function(n, c) {
    for (var d = new Uint32Array(this.offsets.length), u = 0, p = 0, v = 0; v < d.length; ++v) if (d[v] = u, p < c.length && c[p] == v) {
      ++p, d[v] = u;
      var f = this.offsets[v], m = this.offsets[v + 1] - f;
      m > 0 && (u += m);
    }
    for (var l = new Array(4 * d.length), y = 0; y < d.length; ++y) l[4 * y + 3] = 255 & d[y], l[4 * y + 2] = (65280 & d[y]) >> 8, l[4 * y + 1] = (16711680 & d[y]) >> 16, l[4 * y] = (4278190080 & d[y]) >> 24;
    return l;
  }, t;
}(), cd = function() {
  function o(t) {
    this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return o.prototype.generateCmap = function() {
    var t, n, c, d, u;
    for (n in d = this.font.cmap.tables[0].codeMap, t = {}, u = this.subset) c = u[n], t[n] = d[c];
    return t;
  }, o.prototype.glyphsFor = function(t) {
    var n, c, d, u, p, v, f;
    for (d = {}, p = 0, v = t.length; p < v; p++) d[u = t[p]] = this.font.glyf.glyphFor(u);
    for (u in n = [], d) (c = d[u]) != null && c.compound && n.push.apply(n, c.glyphIDs);
    if (n.length > 0) for (u in f = this.glyphsFor(n)) c = f[u], d[u] = c;
    return d;
  }, o.prototype.encode = function(t, n) {
    var c, d, u, p, v, f, m, l, y, C, g, L, E, x, b;
    for (d in c = Gu.encode(this.generateCmap(), "unicode"), p = this.glyphsFor(t), g = { 0: 0 }, b = c.charMap) g[(f = b[d]).old] = f.new;
    for (L in C = c.maxGlyphID, p) L in g || (g[L] = C++);
    return l = function(U) {
      var I, M;
      for (I in M = {}, U) M[U[I]] = I;
      return M;
    }(g), y = Object.keys(l).sort(function(U, I) {
      return U - I;
    }), E = function() {
      var U, I, M;
      for (M = [], U = 0, I = y.length; U < I; U++) v = y[U], M.push(l[v]);
      return M;
    }(), u = this.font.glyf.encode(p, E, g), m = this.font.loca.encode(u.offsets, E), x = { cmap: this.font.cmap.raw(), glyf: u.table, loca: m, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(n) }, this.font.os2.exists && (x["OS/2"] = this.font.os2.raw()), this.font.directory.encode(x);
  }, o;
}();
Ue.API.PDFObject = function() {
  var o;
  function t() {
  }
  return o = function(n, c) {
    return (Array(c + 1).join("0") + n).slice(-c);
  }, t.convert = function(n) {
    var c, d, u, p;
    if (Array.isArray(n)) return "[" + function() {
      var v, f, m;
      for (m = [], v = 0, f = n.length; v < f; v++) c = n[v], m.push(t.convert(c));
      return m;
    }().join(" ") + "]";
    if (typeof n == "string") return "/" + n;
    if (n != null && n.isString) return "(" + n + ")";
    if (n instanceof Date) return "(D:" + o(n.getUTCFullYear(), 4) + o(n.getUTCMonth(), 2) + o(n.getUTCDate(), 2) + o(n.getUTCHours(), 2) + o(n.getUTCMinutes(), 2) + o(n.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(n) === "[object Object]") {
      for (d in u = ["<<"], n) p = n[d], u.push("/" + d + " " + t.convert(p));
      return u.push(">>"), u.join(`
`);
    }
    return "" + n;
  }, t;
}();
const ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcroForm: Kh,
  AcroFormAppearance: le,
  AcroFormButton: Rt,
  AcroFormCheckBox: ca,
  AcroFormChoiceField: bi,
  AcroFormComboBox: Ui,
  AcroFormEditBox: oa,
  AcroFormListBox: Qi,
  AcroFormPasswordField: la,
  AcroFormPushButton: aa,
  AcroFormRadioButton: Ei,
  AcroFormTextField: zs,
  GState: ha,
  ShadingPattern: Xs,
  TilingPattern: Fi,
  default: Ue,
  jsPDF: Ue
}, Symbol.toStringTag, { value: "Module" })), ud = /* @__PURE__ */ fh(ld);
var al = { exports: {} };
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var Eu;
function fd() {
  return Eu || (Eu = 1, function(o, t) {
    (function(n, c) {
      o.exports = c();
    })(sa, function() {
      /*! *****************************************************************************
      		    Copyright (c) Microsoft Corporation.
      
      		    Permission to use, copy, modify, and/or distribute this software for any
      		    purpose with or without fee is hereby granted.
      
      		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      		    PERFORMANCE OF THIS SOFTWARE.
      		    ***************************************************************************** */
      var n = function(r, e) {
        return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
          i.__proto__ = s;
        } || function(i, s) {
          for (var w in s) Object.prototype.hasOwnProperty.call(s, w) && (i[w] = s[w]);
        }, n(r, e);
      };
      function c(r, e) {
        if (typeof e != "function" && e !== null)
          throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        n(r, e);
        function i() {
          this.constructor = r;
        }
        r.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
      }
      var d = function() {
        return d = Object.assign || function(e) {
          for (var i, s = 1, w = arguments.length; s < w; s++) {
            i = arguments[s];
            for (var Q in i) Object.prototype.hasOwnProperty.call(i, Q) && (e[Q] = i[Q]);
          }
          return e;
        }, d.apply(this, arguments);
      };
      function u(r, e, i, s) {
        function w(Q) {
          return Q instanceof i ? Q : new i(function(O) {
            O(Q);
          });
        }
        return new (i || (i = Promise))(function(Q, O) {
          function G(fA) {
            try {
              iA(s.next(fA));
            } catch (wA) {
              O(wA);
            }
          }
          function k(fA) {
            try {
              iA(s.throw(fA));
            } catch (wA) {
              O(wA);
            }
          }
          function iA(fA) {
            fA.done ? Q(fA.value) : w(fA.value).then(G, k);
          }
          iA((s = s.apply(r, [])).next());
        });
      }
      function p(r, e) {
        var i = { label: 0, sent: function() {
          if (Q[0] & 1) throw Q[1];
          return Q[1];
        }, trys: [], ops: [] }, s, w, Q, O;
        return O = { next: G(0), throw: G(1), return: G(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
          return this;
        }), O;
        function G(iA) {
          return function(fA) {
            return k([iA, fA]);
          };
        }
        function k(iA) {
          if (s) throw new TypeError("Generator is already executing.");
          for (; i; ) try {
            if (s = 1, w && (Q = iA[0] & 2 ? w.return : iA[0] ? w.throw || ((Q = w.return) && Q.call(w), 0) : w.next) && !(Q = Q.call(w, iA[1])).done) return Q;
            switch (w = 0, Q && (iA = [iA[0] & 2, Q.value]), iA[0]) {
              case 0:
              case 1:
                Q = iA;
                break;
              case 4:
                return i.label++, { value: iA[1], done: !1 };
              case 5:
                i.label++, w = iA[1], iA = [0];
                continue;
              case 7:
                iA = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (Q = i.trys, !(Q = Q.length > 0 && Q[Q.length - 1]) && (iA[0] === 6 || iA[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (iA[0] === 3 && (!Q || iA[1] > Q[0] && iA[1] < Q[3])) {
                  i.label = iA[1];
                  break;
                }
                if (iA[0] === 6 && i.label < Q[1]) {
                  i.label = Q[1], Q = iA;
                  break;
                }
                if (Q && i.label < Q[2]) {
                  i.label = Q[2], i.ops.push(iA);
                  break;
                }
                Q[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            iA = e.call(r, i);
          } catch (fA) {
            iA = [6, fA], w = 0;
          } finally {
            s = Q = 0;
          }
          if (iA[0] & 5) throw iA[1];
          return { value: iA[0] ? iA[1] : void 0, done: !0 };
        }
      }
      function v(r, e, i) {
        if (arguments.length === 2) for (var s = 0, w = e.length, Q; s < w; s++)
          (Q || !(s in e)) && (Q || (Q = Array.prototype.slice.call(e, 0, s)), Q[s] = e[s]);
        return r.concat(Q || e);
      }
      for (var f = (
        /** @class */
        function() {
          function r(e, i, s, w) {
            this.left = e, this.top = i, this.width = s, this.height = w;
          }
          return r.prototype.add = function(e, i, s, w) {
            return new r(this.left + e, this.top + i, this.width + s, this.height + w);
          }, r.fromClientRect = function(e, i) {
            return new r(i.left + e.windowBounds.left, i.top + e.windowBounds.top, i.width, i.height);
          }, r.fromDOMRectList = function(e, i) {
            var s = Array.from(i).find(function(w) {
              return w.width !== 0;
            });
            return s ? new r(s.left + e.windowBounds.left, s.top + e.windowBounds.top, s.width, s.height) : r.EMPTY;
          }, r.EMPTY = new r(0, 0, 0, 0), r;
        }()
      ), m = function(r, e) {
        return f.fromClientRect(r, e.getBoundingClientRect());
      }, l = function(r) {
        var e = r.body, i = r.documentElement;
        if (!e || !i)
          throw new Error("Unable to get document size");
        var s = Math.max(Math.max(e.scrollWidth, i.scrollWidth), Math.max(e.offsetWidth, i.offsetWidth), Math.max(e.clientWidth, i.clientWidth)), w = Math.max(Math.max(e.scrollHeight, i.scrollHeight), Math.max(e.offsetHeight, i.offsetHeight), Math.max(e.clientHeight, i.clientHeight));
        return new f(0, 0, s, w);
      }, y = function(r) {
        for (var e = [], i = 0, s = r.length; i < s; ) {
          var w = r.charCodeAt(i++);
          if (w >= 55296 && w <= 56319 && i < s) {
            var Q = r.charCodeAt(i++);
            (Q & 64512) === 56320 ? e.push(((w & 1023) << 10) + (Q & 1023) + 65536) : (e.push(w), i--);
          } else
            e.push(w);
        }
        return e;
      }, C = function() {
        for (var r = [], e = 0; e < arguments.length; e++)
          r[e] = arguments[e];
        if (String.fromCodePoint)
          return String.fromCodePoint.apply(String, r);
        var i = r.length;
        if (!i)
          return "";
        for (var s = [], w = -1, Q = ""; ++w < i; ) {
          var O = r[w];
          O <= 65535 ? s.push(O) : (O -= 65536, s.push((O >> 10) + 55296, O % 1024 + 56320)), (w + 1 === i || s.length > 16384) && (Q += String.fromCharCode.apply(String, s), s.length = 0);
        }
        return Q;
      }, g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", L = typeof Uint8Array > "u" ? [] : new Uint8Array(256), E = 0; E < g.length; E++)
        L[g.charCodeAt(E)] = E;
      for (var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = typeof Uint8Array > "u" ? [] : new Uint8Array(256), U = 0; U < x.length; U++)
        b[x.charCodeAt(U)] = U;
      for (var I = function(r) {
        var e = r.length * 0.75, i = r.length, s, w = 0, Q, O, G, k;
        r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
        var iA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), fA = Array.isArray(iA) ? iA : new Uint8Array(iA);
        for (s = 0; s < i; s += 4)
          Q = b[r.charCodeAt(s)], O = b[r.charCodeAt(s + 1)], G = b[r.charCodeAt(s + 2)], k = b[r.charCodeAt(s + 3)], fA[w++] = Q << 2 | O >> 4, fA[w++] = (O & 15) << 4 | G >> 2, fA[w++] = (G & 3) << 6 | k & 63;
        return iA;
      }, M = function(r) {
        for (var e = r.length, i = [], s = 0; s < e; s += 2)
          i.push(r[s + 1] << 8 | r[s]);
        return i;
      }, R = function(r) {
        for (var e = r.length, i = [], s = 0; s < e; s += 4)
          i.push(r[s + 3] << 24 | r[s + 2] << 16 | r[s + 1] << 8 | r[s]);
        return i;
      }, Z = 5, AA = 11, V = 2, dA = AA - Z, cA = 65536 >> Z, T = 1 << Z, _ = T - 1, z = 1024 >> Z, J = cA + z, tA = J, aA = 32, vA = tA + aA, hA = 65536 >> AA, UA = 1 << dA, bA = UA - 1, PA = function(r, e, i) {
        return r.slice ? r.slice(e, i) : new Uint16Array(Array.prototype.slice.call(r, e, i));
      }, j = function(r, e, i) {
        return r.slice ? r.slice(e, i) : new Uint32Array(Array.prototype.slice.call(r, e, i));
      }, X = function(r, e) {
        var i = I(r), s = Array.isArray(i) ? R(i) : new Uint32Array(i), w = Array.isArray(i) ? M(i) : new Uint16Array(i), Q = 24, O = PA(w, Q / 2, s[4] / 2), G = s[5] === 2 ? PA(w, (Q + s[4]) / 2) : j(s, Math.ceil((Q + s[4]) / 4));
        return new q(s[0], s[1], s[2], s[3], O, G);
      }, q = (
        /** @class */
        function() {
          function r(e, i, s, w, Q, O) {
            this.initialValue = e, this.errorValue = i, this.highStart = s, this.highValueIndex = w, this.index = Q, this.data = O;
          }
          return r.prototype.get = function(e) {
            var i;
            if (e >= 0) {
              if (e < 55296 || e > 56319 && e <= 65535)
                return i = this.index[e >> Z], i = (i << V) + (e & _), this.data[i];
              if (e <= 65535)
                return i = this.index[cA + (e - 55296 >> Z)], i = (i << V) + (e & _), this.data[i];
              if (e < this.highStart)
                return i = vA - hA + (e >> AA), i = this.index[i], i += e >> Z & bA, i = this.index[i], i = (i << V) + (e & _), this.data[i];
              if (e <= 1114111)
                return this.data[this.highValueIndex];
            }
            return this.errorValue;
          }, r;
        }()
      ), eA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", uA = typeof Uint8Array > "u" ? [] : new Uint8Array(256), gA = 0; gA < eA.length; gA++)
        uA[eA.charCodeAt(gA)] = gA;
      var FA = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", QA = 50, DA = 1, KA = 2, RA = 3, GA = 4, ce = 5, LA = 7, $ = 8, be = 9, zA = 10, NA = 11, WA = 12, YA = 13, XA = 14, ae = 15, ye = 16, de = 17, Ce = 18, Te = 19, Ee = 20, we = 21, BA = 22, mA = 23, TA = 24, MA = 25, fe = 26, Ae = 27, Fe = 28, Bt = 29, He = 30, Ar = 31, Ge = 32, kt = 33, je = 34, qA = 35, VA = 36, ie = 37, Me = 38, Re = 39, Dt = 40, er = 41, ge = 42, Or = 43, Xr = [9001, 65288], Xt = "!", pe = "×", ut = "÷", Jt = X(FA), tr = [He, VA], Pr = [DA, KA, RA, ce], wr = [zA, $], vr = [Ae, fe], Tr = Pr.concat(wr), Dr = [Me, Re, Dt, je, qA], mr = [ae, YA], Jr = function(r, e) {
        e === void 0 && (e = "strict");
        var i = [], s = [], w = [];
        return r.forEach(function(Q, O) {
          var G = Jt.get(Q);
          if (G > QA ? (w.push(!0), G -= QA) : w.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(Q) !== -1)
            return s.push(O), i.push(ye);
          if (G === GA || G === NA) {
            if (O === 0)
              return s.push(O), i.push(He);
            var k = i[O - 1];
            return Tr.indexOf(k) === -1 ? (s.push(s[O - 1]), i.push(k)) : (s.push(O), i.push(He));
          }
          if (s.push(O), G === Ar)
            return i.push(e === "strict" ? we : ie);
          if (G === ge || G === Bt)
            return i.push(He);
          if (G === Or)
            return Q >= 131072 && Q <= 196605 || Q >= 196608 && Q <= 262141 ? i.push(ie) : i.push(He);
          i.push(G);
        }), [s, i, w];
      }, sn = function(r, e, i, s) {
        var w = s[i];
        if (Array.isArray(r) ? r.indexOf(w) !== -1 : r === w)
          for (var Q = i; Q <= s.length; ) {
            Q++;
            var O = s[Q];
            if (O === e)
              return !0;
            if (O !== zA)
              break;
          }
        if (w === zA)
          for (var Q = i; Q > 0; ) {
            Q--;
            var G = s[Q];
            if (Array.isArray(r) ? r.indexOf(G) !== -1 : r === G)
              for (var k = i; k <= s.length; ) {
                k++;
                var O = s[k];
                if (O === e)
                  return !0;
                if (O !== zA)
                  break;
              }
            if (G !== zA)
              break;
          }
        return !1;
      }, Gn = function(r, e) {
        for (var i = r; i >= 0; ) {
          var s = e[i];
          if (s === zA)
            i--;
          else
            return s;
        }
        return 0;
      }, ds = function(r, e, i, s, w) {
        if (i[s] === 0)
          return pe;
        var Q = s - 1;
        if (Array.isArray(w) && w[Q] === !0)
          return pe;
        var O = Q - 1, G = Q + 1, k = e[Q], iA = O >= 0 ? e[O] : 0, fA = e[G];
        if (k === KA && fA === RA)
          return pe;
        if (Pr.indexOf(k) !== -1)
          return Xt;
        if (Pr.indexOf(fA) !== -1 || wr.indexOf(fA) !== -1)
          return pe;
        if (Gn(Q, e) === $)
          return ut;
        if (Jt.get(r[Q]) === NA || (k === Ge || k === kt) && Jt.get(r[G]) === NA || k === LA || fA === LA || k === be || [zA, YA, ae].indexOf(k) === -1 && fA === be || [de, Ce, Te, TA, Fe].indexOf(fA) !== -1 || Gn(Q, e) === BA || sn(mA, BA, Q, e) || sn([de, Ce], we, Q, e) || sn(WA, WA, Q, e))
          return pe;
        if (k === zA)
          return ut;
        if (k === mA || fA === mA)
          return pe;
        if (fA === ye || k === ye)
          return ut;
        if ([YA, ae, we].indexOf(fA) !== -1 || k === XA || iA === VA && mr.indexOf(k) !== -1 || k === Fe && fA === VA || fA === Ee || tr.indexOf(fA) !== -1 && k === MA || tr.indexOf(k) !== -1 && fA === MA || k === Ae && [ie, Ge, kt].indexOf(fA) !== -1 || [ie, Ge, kt].indexOf(k) !== -1 && fA === fe || tr.indexOf(k) !== -1 && vr.indexOf(fA) !== -1 || vr.indexOf(k) !== -1 && tr.indexOf(fA) !== -1 || // (PR | PO) × ( OP | HY )? NU
        [Ae, fe].indexOf(k) !== -1 && (fA === MA || [BA, ae].indexOf(fA) !== -1 && e[G + 1] === MA) || // ( OP | HY ) × NU
        [BA, ae].indexOf(k) !== -1 && fA === MA || // NU ×	(NU | SY | IS)
        k === MA && [MA, Fe, TA].indexOf(fA) !== -1)
          return pe;
        if ([MA, Fe, TA, de, Ce].indexOf(fA) !== -1)
          for (var wA = Q; wA >= 0; ) {
            var xA = e[wA];
            if (xA === MA)
              return pe;
            if ([Fe, TA].indexOf(xA) !== -1)
              wA--;
            else
              break;
          }
        if ([Ae, fe].indexOf(fA) !== -1)
          for (var wA = [de, Ce].indexOf(k) !== -1 ? O : Q; wA >= 0; ) {
            var xA = e[wA];
            if (xA === MA)
              return pe;
            if ([Fe, TA].indexOf(xA) !== -1)
              wA--;
            else
              break;
          }
        if (Me === k && [Me, Re, je, qA].indexOf(fA) !== -1 || [Re, je].indexOf(k) !== -1 && [Re, Dt].indexOf(fA) !== -1 || [Dt, qA].indexOf(k) !== -1 && fA === Dt || Dr.indexOf(k) !== -1 && [Ee, fe].indexOf(fA) !== -1 || Dr.indexOf(fA) !== -1 && k === Ae || tr.indexOf(k) !== -1 && tr.indexOf(fA) !== -1 || k === TA && tr.indexOf(fA) !== -1 || tr.concat(MA).indexOf(k) !== -1 && fA === BA && Xr.indexOf(r[G]) === -1 || tr.concat(MA).indexOf(fA) !== -1 && k === Ce)
          return pe;
        if (k === er && fA === er) {
          for (var oe = i[Q], JA = 1; oe > 0 && (oe--, e[oe] === er); )
            JA++;
          if (JA % 2 !== 0)
            return pe;
        }
        return k === Ge && fA === kt ? pe : ut;
      }, gs = function(r, e) {
        e || (e = { lineBreak: "normal", wordBreak: "normal" });
        var i = Jr(r, e.lineBreak), s = i[0], w = i[1], Q = i[2];
        (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (w = w.map(function(G) {
          return [MA, He, ge].indexOf(G) !== -1 ? ie : G;
        }));
        var O = e.wordBreak === "keep-all" ? Q.map(function(G, k) {
          return G && r[k] >= 19968 && r[k] <= 40959;
        }) : void 0;
        return [s, w, O];
      }, ps = (
        /** @class */
        function() {
          function r(e, i, s, w) {
            this.codePoints = e, this.required = i === Xt, this.start = s, this.end = w;
          }
          return r.prototype.slice = function() {
            return C.apply(void 0, this.codePoints.slice(this.start, this.end));
          }, r;
        }()
      ), Ii = function(r, e) {
        var i = y(r), s = gs(i, e), w = s[0], Q = s[1], O = s[2], G = i.length, k = 0, iA = 0;
        return {
          next: function() {
            if (iA >= G)
              return { done: !0, value: null };
            for (var fA = pe; iA < G && (fA = ds(i, Q, w, ++iA, O)) === pe; )
              ;
            if (fA !== pe || iA === G) {
              var wA = new ps(i, fA, k, iA);
              return k = iA, { value: wA, done: !1 };
            }
            return { done: !0, value: null };
          }
        };
      }, Uo = 1, Eo = 2, zr = 4, Zs = 8, Bs = 10, ws = 47, Vn = 92, xi = 9, Lo = 32, on = 34, Wn = 61, wt = 35, Si = 36, Hi = 37, Xn = 39, yn = 40, Jn = 41, Mr = 95, Qt = 45, rr = 33, $s = 60, ji = 62, Io = 64, Ni = 91, xo = 93, Oi = 61, So = 123, Cn = 63, Ho = 125, Pi = 124, jo = 126, an = 128, zn = 65533, Fn = 42, Yr = 43, Gt = 44, No = 58, Ti = 59, Qe = 46, Oo = 0, Po = 8, qr = 11, Di = 14, Mi = 31, vs = 127, nr = -1, _i = 48, Ki = 97, Ri = 101, Ai = 102, Yn = 117, bn = 122, ki = 65, Qn = 69, ms = 70, ys = 85, Gi = 90, Ut = function(r) {
        return r >= _i && r <= 57;
      }, Vi = function(r) {
        return r >= 55296 && r <= 57343;
      }, cn = function(r) {
        return Ut(r) || r >= ki && r <= ms || r >= Ki && r <= Ai;
      }, ln = function(r) {
        return r >= Ki && r <= bn;
      }, Un = function(r) {
        return r >= ki && r <= Gi;
      }, To = function(r) {
        return ln(r) || Un(r);
      }, En = function(r) {
        return r >= an;
      }, sr = function(r) {
        return r === Bs || r === xi || r === Lo;
      }, Ln = function(r) {
        return To(r) || En(r) || r === Mr;
      }, In = function(r) {
        return Ln(r) || Ut(r) || r === Qt;
      }, Do = function(r) {
        return r >= Oo && r <= Po || r === qr || r >= Di && r <= Mi || r === vs;
      }, ur = function(r, e) {
        return r !== Vn ? !1 : e !== Bs;
      }, Cs = function(r, e, i) {
        return r === Qt ? Ln(e) || ur(e, i) : Ln(r) ? !0 : !!(r === Vn && ur(r, e));
      }, qn = function(r, e, i) {
        return r === Yr || r === Qt ? Ut(e) ? !0 : e === Qe && Ut(i) : Ut(r === Qe ? e : r);
      }, ei = function(r) {
        var e = 0, i = 1;
        (r[e] === Yr || r[e] === Qt) && (r[e] === Qt && (i = -1), e++);
        for (var s = []; Ut(r[e]); )
          s.push(r[e++]);
        var w = s.length ? parseInt(C.apply(void 0, s), 10) : 0;
        r[e] === Qe && e++;
        for (var Q = []; Ut(r[e]); )
          Q.push(r[e++]);
        var O = Q.length, G = O ? parseInt(C.apply(void 0, Q), 10) : 0;
        (r[e] === Qn || r[e] === Ri) && e++;
        var k = 1;
        (r[e] === Yr || r[e] === Qt) && (r[e] === Qt && (k = -1), e++);
        for (var iA = []; Ut(r[e]); )
          iA.push(r[e++]);
        var fA = iA.length ? parseInt(C.apply(void 0, iA), 10) : 0;
        return i * (w + G * Math.pow(10, -O)) * Math.pow(10, k * fA);
      }, Wi = {
        type: 2
        /* LEFT_PARENTHESIS_TOKEN */
      }, Fs = {
        type: 3
        /* RIGHT_PARENTHESIS_TOKEN */
      }, ti = {
        type: 4
        /* COMMA_TOKEN */
      }, ri = {
        type: 13
        /* SUFFIX_MATCH_TOKEN */
      }, Xi = {
        type: 8
        /* PREFIX_MATCH_TOKEN */
      }, Mo = {
        type: 21
        /* COLUMN_TOKEN */
      }, bs = {
        type: 9
        /* DASH_MATCH_TOKEN */
      }, Zn = {
        type: 10
        /* INCLUDE_MATCH_TOKEN */
      }, ni = {
        type: 11
        /* LEFT_CURLY_BRACKET_TOKEN */
      }, xn = {
        type: 12
        /* RIGHT_CURLY_BRACKET_TOKEN */
      }, si = {
        type: 14
        /* SUBSTRING_MATCH_TOKEN */
      }, h = {
        type: 23
        /* BAD_URL_TOKEN */
      }, H = {
        type: 1
        /* BAD_STRING_TOKEN */
      }, Y = {
        type: 25
        /* CDO_TOKEN */
      }, rA = {
        type: 24
        /* CDC_TOKEN */
      }, pA = {
        type: 26
        /* COLON_TOKEN */
      }, IA = {
        type: 27
        /* SEMICOLON_TOKEN */
      }, kA = {
        type: 28
        /* LEFT_SQUARE_BRACKET_TOKEN */
      }, te = {
        type: 29
        /* RIGHT_SQUARE_BRACKET_TOKEN */
      }, Be = {
        type: 31
        /* WHITESPACE_TOKEN */
      }, xe = {
        type: 32
        /* EOF_TOKEN */
      }, Pe = (
        /** @class */
        function() {
          function r() {
            this._value = [];
          }
          return r.prototype.write = function(e) {
            this._value = this._value.concat(y(e));
          }, r.prototype.read = function() {
            for (var e = [], i = this.consumeToken(); i !== xe; )
              e.push(i), i = this.consumeToken();
            return e;
          }, r.prototype.consumeToken = function() {
            var e = this.consumeCodePoint();
            switch (e) {
              case on:
                return this.consumeStringToken(on);
              case wt:
                var i = this.peekCodePoint(0), s = this.peekCodePoint(1), w = this.peekCodePoint(2);
                if (In(i) || ur(s, w)) {
                  var Q = Cs(i, s, w) ? Eo : Uo, O = this.consumeName();
                  return { type: 5, value: O, flags: Q };
                }
                break;
              case Si:
                if (this.peekCodePoint(0) === Wn)
                  return this.consumeCodePoint(), ri;
                break;
              case Xn:
                return this.consumeStringToken(Xn);
              case yn:
                return Wi;
              case Jn:
                return Fs;
              case Fn:
                if (this.peekCodePoint(0) === Wn)
                  return this.consumeCodePoint(), si;
                break;
              case Yr:
                if (qn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                  return this.reconsumeCodePoint(e), this.consumeNumericToken();
                break;
              case Gt:
                return ti;
              case Qt:
                var G = e, k = this.peekCodePoint(0), iA = this.peekCodePoint(1);
                if (qn(G, k, iA))
                  return this.reconsumeCodePoint(e), this.consumeNumericToken();
                if (Cs(G, k, iA))
                  return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
                if (k === Qt && iA === ji)
                  return this.consumeCodePoint(), this.consumeCodePoint(), rA;
                break;
              case Qe:
                if (qn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                  return this.reconsumeCodePoint(e), this.consumeNumericToken();
                break;
              case ws:
                if (this.peekCodePoint(0) === Fn)
                  for (this.consumeCodePoint(); ; ) {
                    var fA = this.consumeCodePoint();
                    if (fA === Fn && (fA = this.consumeCodePoint(), fA === ws))
                      return this.consumeToken();
                    if (fA === nr)
                      return this.consumeToken();
                  }
                break;
              case No:
                return pA;
              case Ti:
                return IA;
              case $s:
                if (this.peekCodePoint(0) === rr && this.peekCodePoint(1) === Qt && this.peekCodePoint(2) === Qt)
                  return this.consumeCodePoint(), this.consumeCodePoint(), Y;
                break;
              case Io:
                var wA = this.peekCodePoint(0), xA = this.peekCodePoint(1), oe = this.peekCodePoint(2);
                if (Cs(wA, xA, oe)) {
                  var O = this.consumeName();
                  return { type: 7, value: O };
                }
                break;
              case Ni:
                return kA;
              case Vn:
                if (ur(e, this.peekCodePoint(0)))
                  return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
                break;
              case xo:
                return te;
              case Oi:
                if (this.peekCodePoint(0) === Wn)
                  return this.consumeCodePoint(), Xi;
                break;
              case So:
                return ni;
              case Ho:
                return xn;
              case Yn:
              case ys:
                var JA = this.peekCodePoint(0), ee = this.peekCodePoint(1);
                return JA === Yr && (cn(ee) || ee === Cn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
              case Pi:
                if (this.peekCodePoint(0) === Wn)
                  return this.consumeCodePoint(), bs;
                if (this.peekCodePoint(0) === Pi)
                  return this.consumeCodePoint(), Mo;
                break;
              case jo:
                if (this.peekCodePoint(0) === Wn)
                  return this.consumeCodePoint(), Zn;
                break;
              case nr:
                return xe;
            }
            return sr(e) ? (this.consumeWhiteSpace(), Be) : Ut(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Ln(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: C(e) };
          }, r.prototype.consumeCodePoint = function() {
            var e = this._value.shift();
            return typeof e > "u" ? -1 : e;
          }, r.prototype.reconsumeCodePoint = function(e) {
            this._value.unshift(e);
          }, r.prototype.peekCodePoint = function(e) {
            return e >= this._value.length ? -1 : this._value[e];
          }, r.prototype.consumeUnicodeRangeToken = function() {
            for (var e = [], i = this.consumeCodePoint(); cn(i) && e.length < 6; )
              e.push(i), i = this.consumeCodePoint();
            for (var s = !1; i === Cn && e.length < 6; )
              e.push(i), i = this.consumeCodePoint(), s = !0;
            if (s) {
              var w = parseInt(C.apply(void 0, e.map(function(k) {
                return k === Cn ? _i : k;
              })), 16), Q = parseInt(C.apply(void 0, e.map(function(k) {
                return k === Cn ? ms : k;
              })), 16);
              return { type: 30, start: w, end: Q };
            }
            var O = parseInt(C.apply(void 0, e), 16);
            if (this.peekCodePoint(0) === Qt && cn(this.peekCodePoint(1))) {
              this.consumeCodePoint(), i = this.consumeCodePoint();
              for (var G = []; cn(i) && G.length < 6; )
                G.push(i), i = this.consumeCodePoint();
              var Q = parseInt(C.apply(void 0, G), 16);
              return { type: 30, start: O, end: Q };
            } else
              return { type: 30, start: O, end: O };
          }, r.prototype.consumeIdentLikeToken = function() {
            var e = this.consumeName();
            return e.toLowerCase() === "url" && this.peekCodePoint(0) === yn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === yn ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
          }, r.prototype.consumeUrlToken = function() {
            var e = [];
            if (this.consumeWhiteSpace(), this.peekCodePoint(0) === nr)
              return { type: 22, value: "" };
            var i = this.peekCodePoint(0);
            if (i === Xn || i === on) {
              var s = this.consumeStringToken(this.consumeCodePoint());
              return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === nr || this.peekCodePoint(0) === Jn) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), h);
            }
            for (; ; ) {
              var w = this.consumeCodePoint();
              if (w === nr || w === Jn)
                return { type: 22, value: C.apply(void 0, e) };
              if (sr(w))
                return this.consumeWhiteSpace(), this.peekCodePoint(0) === nr || this.peekCodePoint(0) === Jn ? (this.consumeCodePoint(), { type: 22, value: C.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), h);
              if (w === on || w === Xn || w === yn || Do(w))
                return this.consumeBadUrlRemnants(), h;
              if (w === Vn)
                if (ur(w, this.peekCodePoint(0)))
                  e.push(this.consumeEscapedCodePoint());
                else
                  return this.consumeBadUrlRemnants(), h;
              else
                e.push(w);
            }
          }, r.prototype.consumeWhiteSpace = function() {
            for (; sr(this.peekCodePoint(0)); )
              this.consumeCodePoint();
          }, r.prototype.consumeBadUrlRemnants = function() {
            for (; ; ) {
              var e = this.consumeCodePoint();
              if (e === Jn || e === nr)
                return;
              ur(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
            }
          }, r.prototype.consumeStringSlice = function(e) {
            for (var i = 5e4, s = ""; e > 0; ) {
              var w = Math.min(i, e);
              s += C.apply(void 0, this._value.splice(0, w)), e -= w;
            }
            return this._value.shift(), s;
          }, r.prototype.consumeStringToken = function(e) {
            var i = "", s = 0;
            do {
              var w = this._value[s];
              if (w === nr || w === void 0 || w === e)
                return i += this.consumeStringSlice(s), { type: 0, value: i };
              if (w === Bs)
                return this._value.splice(0, s), H;
              if (w === Vn) {
                var Q = this._value[s + 1];
                Q !== nr && Q !== void 0 && (Q === Bs ? (i += this.consumeStringSlice(s), s = -1, this._value.shift()) : ur(w, Q) && (i += this.consumeStringSlice(s), i += C(this.consumeEscapedCodePoint()), s = -1));
              }
              s++;
            } while (!0);
          }, r.prototype.consumeNumber = function() {
            var e = [], i = zr, s = this.peekCodePoint(0);
            for ((s === Yr || s === Qt) && e.push(this.consumeCodePoint()); Ut(this.peekCodePoint(0)); )
              e.push(this.consumeCodePoint());
            s = this.peekCodePoint(0);
            var w = this.peekCodePoint(1);
            if (s === Qe && Ut(w))
              for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), i = Zs; Ut(this.peekCodePoint(0)); )
                e.push(this.consumeCodePoint());
            s = this.peekCodePoint(0), w = this.peekCodePoint(1);
            var Q = this.peekCodePoint(2);
            if ((s === Qn || s === Ri) && ((w === Yr || w === Qt) && Ut(Q) || Ut(w)))
              for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), i = Zs; Ut(this.peekCodePoint(0)); )
                e.push(this.consumeCodePoint());
            return [ei(e), i];
          }, r.prototype.consumeNumericToken = function() {
            var e = this.consumeNumber(), i = e[0], s = e[1], w = this.peekCodePoint(0), Q = this.peekCodePoint(1), O = this.peekCodePoint(2);
            if (Cs(w, Q, O)) {
              var G = this.consumeName();
              return { type: 15, number: i, flags: s, unit: G };
            }
            return w === Hi ? (this.consumeCodePoint(), { type: 16, number: i, flags: s }) : { type: 17, number: i, flags: s };
          }, r.prototype.consumeEscapedCodePoint = function() {
            var e = this.consumeCodePoint();
            if (cn(e)) {
              for (var i = C(e); cn(this.peekCodePoint(0)) && i.length < 6; )
                i += C(this.consumeCodePoint());
              sr(this.peekCodePoint(0)) && this.consumeCodePoint();
              var s = parseInt(i, 16);
              return s === 0 || Vi(s) || s > 1114111 ? zn : s;
            }
            return e === nr ? zn : e;
          }, r.prototype.consumeName = function() {
            for (var e = ""; ; ) {
              var i = this.consumeCodePoint();
              if (In(i))
                e += C(i);
              else if (ur(i, this.peekCodePoint(0)))
                e += C(this.consumeEscapedCodePoint());
              else
                return this.reconsumeCodePoint(i), e;
            }
          }, r;
        }()
      ), ke = (
        /** @class */
        function() {
          function r(e) {
            this._tokens = e;
          }
          return r.create = function(e) {
            var i = new Pe();
            return i.write(e), new r(i.read());
          }, r.parseValue = function(e) {
            return r.create(e).parseComponentValue();
          }, r.parseValues = function(e) {
            return r.create(e).parseComponentValues();
          }, r.prototype.parseComponentValue = function() {
            for (var e = this.consumeToken(); e.type === 31; )
              e = this.consumeToken();
            if (e.type === 32)
              throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            this.reconsumeToken(e);
            var i = this.consumeComponentValue();
            do
              e = this.consumeToken();
            while (e.type === 31);
            if (e.type === 32)
              return i;
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
          }, r.prototype.parseComponentValues = function() {
            for (var e = []; ; ) {
              var i = this.consumeComponentValue();
              if (i.type === 32)
                return e;
              e.push(i), e.push();
            }
          }, r.prototype.consumeComponentValue = function() {
            var e = this.consumeToken();
            switch (e.type) {
              case 11:
              case 28:
              case 2:
                return this.consumeSimpleBlock(e.type);
              case 19:
                return this.consumeFunction(e);
            }
            return e;
          }, r.prototype.consumeSimpleBlock = function(e) {
            for (var i = { type: e, values: [] }, s = this.consumeToken(); ; ) {
              if (s.type === 32 || Ji(s, e))
                return i;
              this.reconsumeToken(s), i.values.push(this.consumeComponentValue()), s = this.consumeToken();
            }
          }, r.prototype.consumeFunction = function(e) {
            for (var i = {
              name: e.value,
              values: [],
              type: 18
              /* FUNCTION */
            }; ; ) {
              var s = this.consumeToken();
              if (s.type === 32 || s.type === 3)
                return i;
              this.reconsumeToken(s), i.values.push(this.consumeComponentValue());
            }
          }, r.prototype.consumeToken = function() {
            var e = this._tokens.shift();
            return typeof e > "u" ? xe : e;
          }, r.prototype.reconsumeToken = function(e) {
            this._tokens.unshift(e);
          }, r;
        }()
      ), At = function(r) {
        return r.type === 15;
      }, et = function(r) {
        return r.type === 17;
      }, Le = function(r) {
        return r.type === 20;
      }, Vt = function(r) {
        return r.type === 0;
      }, mt = function(r, e) {
        return Le(r) && r.value === e;
      }, yr = function(r) {
        return r.type !== 31;
      }, jt = function(r) {
        return r.type !== 31 && r.type !== 4;
      }, Nt = function(r) {
        var e = [], i = [];
        return r.forEach(function(s) {
          if (s.type === 4) {
            if (i.length === 0)
              throw new Error("Error parsing function args, zero tokens for arg");
            e.push(i), i = [];
            return;
          }
          s.type !== 31 && i.push(s);
        }), i.length && e.push(i), e;
      }, Ji = function(r, e) {
        return e === 11 && r.type === 12 || e === 28 && r.type === 29 ? !0 : e === 2 && r.type === 3;
      }, Cr = function(r) {
        return r.type === 17 || r.type === 15;
      }, at = function(r) {
        return r.type === 16 || Cr(r);
      }, $n = function(r) {
        return r.length > 1 ? [r[0], r[1]] : [r[0]];
      }, vt = {
        type: 17,
        number: 0,
        flags: zr
      }, As = {
        type: 16,
        number: 50,
        flags: zr
      }, fr = {
        type: 16,
        number: 100,
        flags: zr
      }, Ot = function(r, e, i) {
        var s = r[0], w = r[1];
        return [Xe(s, e), Xe(typeof w < "u" ? w : s, i)];
      }, Xe = function(r, e) {
        if (r.type === 16)
          return r.number / 100 * e;
        if (At(r))
          switch (r.unit) {
            case "rem":
            case "em":
              return 16 * r.number;
            case "px":
            default:
              return r.number;
          }
        return r.number;
      }, es = "deg", ts = "grad", Qs = "rad", zt = "turn", Us = {
        name: "angle",
        parse: function(r, e) {
          if (e.type === 15)
            switch (e.unit) {
              case es:
                return Math.PI * e.number / 180;
              case ts:
                return Math.PI / 200 * e.number;
              case Qs:
                return e.number;
              case zt:
                return Math.PI * 2 * e.number;
            }
          throw new Error("Unsupported angle type");
        }
      }, Es = function(r) {
        return r.type === 15 && (r.unit === es || r.unit === ts || r.unit === Qs || r.unit === zt);
      }, ii = function(r) {
        var e = r.filter(Le).map(function(i) {
          return i.value;
        }).join(" ");
        switch (e) {
          case "to bottom right":
          case "to right bottom":
          case "left top":
          case "top left":
            return [vt, vt];
          case "to top":
          case "bottom":
            return ht(0);
          case "to bottom left":
          case "to left bottom":
          case "right top":
          case "top right":
            return [vt, fr];
          case "to right":
          case "left":
            return ht(90);
          case "to top left":
          case "to left top":
          case "right bottom":
          case "bottom right":
            return [fr, fr];
          case "to bottom":
          case "top":
            return ht(180);
          case "to top right":
          case "to right top":
          case "left bottom":
          case "bottom left":
            return [fr, vt];
          case "to left":
          case "right":
            return ht(270);
        }
        return 0;
      }, ht = function(r) {
        return Math.PI * r / 180;
      }, Fr = {
        name: "color",
        parse: function(r, e) {
          if (e.type === 18) {
            var i = un[e.name];
            if (typeof i > "u")
              throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
            return i(r, e.values);
          }
          if (e.type === 5) {
            if (e.value.length === 3) {
              var s = e.value.substring(0, 1), w = e.value.substring(1, 2), Q = e.value.substring(2, 3);
              return Yt(parseInt(s + s, 16), parseInt(w + w, 16), parseInt(Q + Q, 16), 1);
            }
            if (e.value.length === 4) {
              var s = e.value.substring(0, 1), w = e.value.substring(1, 2), Q = e.value.substring(2, 3), O = e.value.substring(3, 4);
              return Yt(parseInt(s + s, 16), parseInt(w + w, 16), parseInt(Q + Q, 16), parseInt(O + O, 16) / 255);
            }
            if (e.value.length === 6) {
              var s = e.value.substring(0, 2), w = e.value.substring(2, 4), Q = e.value.substring(4, 6);
              return Yt(parseInt(s, 16), parseInt(w, 16), parseInt(Q, 16), 1);
            }
            if (e.value.length === 8) {
              var s = e.value.substring(0, 2), w = e.value.substring(2, 4), Q = e.value.substring(4, 6), O = e.value.substring(6, 8);
              return Yt(parseInt(s, 16), parseInt(w, 16), parseInt(Q, 16), parseInt(O, 16) / 255);
            }
          }
          if (e.type === 20) {
            var G = Et[e.value.toUpperCase()];
            if (typeof G < "u")
              return G;
          }
          return Et.TRANSPARENT;
        }
      }, Zr = function(r) {
        return (255 & r) === 0;
      }, yt = function(r) {
        var e = 255 & r, i = 255 & r >> 8, s = 255 & r >> 16, w = 255 & r >> 24;
        return e < 255 ? "rgba(" + w + "," + s + "," + i + "," + e / 255 + ")" : "rgb(" + w + "," + s + "," + i + ")";
      }, Yt = function(r, e, i, s) {
        return (r << 24 | e << 16 | i << 8 | Math.round(s * 255) << 0) >>> 0;
      }, hr = function(r, e) {
        if (r.type === 17)
          return r.number;
        if (r.type === 16) {
          var i = e === 3 ? 1 : 255;
          return e === 3 ? r.number / 100 * i : Math.round(r.number / 100 * i);
        }
        return 0;
      }, br = function(r, e) {
        var i = e.filter(jt);
        if (i.length === 3) {
          var s = i.map(hr), w = s[0], Q = s[1], O = s[2];
          return Yt(w, Q, O, 1);
        }
        if (i.length === 4) {
          var G = i.map(hr), w = G[0], Q = G[1], O = G[2], k = G[3];
          return Yt(w, Q, O, k);
        }
        return 0;
      };
      function $r(r, e, i) {
        return i < 0 && (i += 1), i >= 1 && (i -= 1), i < 1 / 6 ? (e - r) * i * 6 + r : i < 1 / 2 ? e : i < 2 / 3 ? (e - r) * 6 * (2 / 3 - i) + r : r;
      }
      var _r = function(r, e) {
        var i = e.filter(jt), s = i[0], w = i[1], Q = i[2], O = i[3], G = (s.type === 17 ? ht(s.number) : Us.parse(r, s)) / (Math.PI * 2), k = at(w) ? w.number / 100 : 0, iA = at(Q) ? Q.number / 100 : 0, fA = typeof O < "u" && at(O) ? Xe(O, 1) : 1;
        if (k === 0)
          return Yt(iA * 255, iA * 255, iA * 255, 1);
        var wA = iA <= 0.5 ? iA * (k + 1) : iA + k - iA * k, xA = iA * 2 - wA, oe = $r(xA, wA, G + 1 / 3), JA = $r(xA, wA, G), ee = $r(xA, wA, G - 1 / 3);
        return Yt(oe * 255, JA * 255, ee * 255, fA);
      }, un = {
        hsl: _r,
        hsla: _r,
        rgb: br,
        rgba: br
      }, An = function(r, e) {
        return Fr.parse(r, ke.create(e).parseComponentValue());
      }, Et = {
        ALICEBLUE: 4042850303,
        ANTIQUEWHITE: 4209760255,
        AQUA: 16777215,
        AQUAMARINE: 2147472639,
        AZURE: 4043309055,
        BEIGE: 4126530815,
        BISQUE: 4293182719,
        BLACK: 255,
        BLANCHEDALMOND: 4293643775,
        BLUE: 65535,
        BLUEVIOLET: 2318131967,
        BROWN: 2771004159,
        BURLYWOOD: 3736635391,
        CADETBLUE: 1604231423,
        CHARTREUSE: 2147418367,
        CHOCOLATE: 3530104575,
        CORAL: 4286533887,
        CORNFLOWERBLUE: 1687547391,
        CORNSILK: 4294499583,
        CRIMSON: 3692313855,
        CYAN: 16777215,
        DARKBLUE: 35839,
        DARKCYAN: 9145343,
        DARKGOLDENROD: 3095837695,
        DARKGRAY: 2846468607,
        DARKGREEN: 6553855,
        DARKGREY: 2846468607,
        DARKKHAKI: 3182914559,
        DARKMAGENTA: 2332068863,
        DARKOLIVEGREEN: 1433087999,
        DARKORANGE: 4287365375,
        DARKORCHID: 2570243327,
        DARKRED: 2332033279,
        DARKSALMON: 3918953215,
        DARKSEAGREEN: 2411499519,
        DARKSLATEBLUE: 1211993087,
        DARKSLATEGRAY: 793726975,
        DARKSLATEGREY: 793726975,
        DARKTURQUOISE: 13554175,
        DARKVIOLET: 2483082239,
        DEEPPINK: 4279538687,
        DEEPSKYBLUE: 12582911,
        DIMGRAY: 1768516095,
        DIMGREY: 1768516095,
        DODGERBLUE: 512819199,
        FIREBRICK: 2988581631,
        FLORALWHITE: 4294635775,
        FORESTGREEN: 579543807,
        FUCHSIA: 4278255615,
        GAINSBORO: 3705462015,
        GHOSTWHITE: 4177068031,
        GOLD: 4292280575,
        GOLDENROD: 3668254975,
        GRAY: 2155905279,
        GREEN: 8388863,
        GREENYELLOW: 2919182335,
        GREY: 2155905279,
        HONEYDEW: 4043305215,
        HOTPINK: 4285117695,
        INDIANRED: 3445382399,
        INDIGO: 1258324735,
        IVORY: 4294963455,
        KHAKI: 4041641215,
        LAVENDER: 3873897215,
        LAVENDERBLUSH: 4293981695,
        LAWNGREEN: 2096890111,
        LEMONCHIFFON: 4294626815,
        LIGHTBLUE: 2916673279,
        LIGHTCORAL: 4034953471,
        LIGHTCYAN: 3774873599,
        LIGHTGOLDENRODYELLOW: 4210742015,
        LIGHTGRAY: 3553874943,
        LIGHTGREEN: 2431553791,
        LIGHTGREY: 3553874943,
        LIGHTPINK: 4290167295,
        LIGHTSALMON: 4288707327,
        LIGHTSEAGREEN: 548580095,
        LIGHTSKYBLUE: 2278488831,
        LIGHTSLATEGRAY: 2005441023,
        LIGHTSLATEGREY: 2005441023,
        LIGHTSTEELBLUE: 2965692159,
        LIGHTYELLOW: 4294959359,
        LIME: 16711935,
        LIMEGREEN: 852308735,
        LINEN: 4210091775,
        MAGENTA: 4278255615,
        MAROON: 2147483903,
        MEDIUMAQUAMARINE: 1724754687,
        MEDIUMBLUE: 52735,
        MEDIUMORCHID: 3126187007,
        MEDIUMPURPLE: 2473647103,
        MEDIUMSEAGREEN: 1018393087,
        MEDIUMSLATEBLUE: 2070474495,
        MEDIUMSPRINGGREEN: 16423679,
        MEDIUMTURQUOISE: 1221709055,
        MEDIUMVIOLETRED: 3340076543,
        MIDNIGHTBLUE: 421097727,
        MINTCREAM: 4127193855,
        MISTYROSE: 4293190143,
        MOCCASIN: 4293178879,
        NAVAJOWHITE: 4292783615,
        NAVY: 33023,
        OLDLACE: 4260751103,
        OLIVE: 2155872511,
        OLIVEDRAB: 1804477439,
        ORANGE: 4289003775,
        ORANGERED: 4282712319,
        ORCHID: 3664828159,
        PALEGOLDENROD: 4008225535,
        PALEGREEN: 2566625535,
        PALETURQUOISE: 2951671551,
        PALEVIOLETRED: 3681588223,
        PAPAYAWHIP: 4293907967,
        PEACHPUFF: 4292524543,
        PERU: 3448061951,
        PINK: 4290825215,
        PLUM: 3718307327,
        POWDERBLUE: 2967529215,
        PURPLE: 2147516671,
        REBECCAPURPLE: 1714657791,
        RED: 4278190335,
        ROSYBROWN: 3163525119,
        ROYALBLUE: 1097458175,
        SADDLEBROWN: 2336560127,
        SALMON: 4202722047,
        SANDYBROWN: 4104413439,
        SEAGREEN: 780883967,
        SEASHELL: 4294307583,
        SIENNA: 2689740287,
        SILVER: 3233857791,
        SKYBLUE: 2278484991,
        SLATEBLUE: 1784335871,
        SLATEGRAY: 1887473919,
        SLATEGREY: 1887473919,
        SNOW: 4294638335,
        SPRINGGREEN: 16744447,
        STEELBLUE: 1182971135,
        TAN: 3535047935,
        TEAL: 8421631,
        THISTLE: 3636451583,
        TOMATO: 4284696575,
        TRANSPARENT: 0,
        TURQUOISE: 1088475391,
        VIOLET: 4001558271,
        WHEAT: 4125012991,
        WHITE: 4294967295,
        WHITESMOKE: 4126537215,
        YELLOW: 4294902015,
        YELLOWGREEN: 2597139199
      }, Ls = {
        name: "background-clip",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return e.map(function(i) {
            if (Le(i))
              switch (i.value) {
                case "padding-box":
                  return 1;
                case "content-box":
                  return 2;
              }
            return 0;
          });
        }
      }, oi = {
        name: "background-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
      }, Kr = function(r, e) {
        var i = Fr.parse(r, e[0]), s = e[1];
        return s && at(s) ? { color: i, stop: s } : { color: i, stop: null };
      }, Qr = function(r, e) {
        var i = r[0], s = r[r.length - 1];
        i.stop === null && (i.stop = vt), s.stop === null && (s.stop = fr);
        for (var w = [], Q = 0, O = 0; O < r.length; O++) {
          var G = r[O].stop;
          if (G !== null) {
            var k = Xe(G, e);
            k > Q ? w.push(k) : w.push(Q), Q = k;
          } else
            w.push(null);
        }
        for (var iA = null, O = 0; O < w.length; O++) {
          var fA = w[O];
          if (fA === null)
            iA === null && (iA = O);
          else if (iA !== null) {
            for (var wA = O - iA, xA = w[iA - 1], oe = (fA - xA) / (wA + 1), JA = 1; JA <= wA; JA++)
              w[iA + JA - 1] = oe * JA;
            iA = null;
          }
        }
        return r.map(function(ee, De) {
          var he = ee.color;
          return { color: he, stop: Math.max(Math.min(1, w[De] / e), 0) };
        });
      }, fn = function(r, e, i) {
        var s = e / 2, w = i / 2, Q = Xe(r[0], e) - s, O = w - Xe(r[1], i);
        return (Math.atan2(O, Q) + Math.PI * 2) % (Math.PI * 2);
      }, rs = function(r, e, i) {
        var s = typeof r == "number" ? r : fn(r, e, i), w = Math.abs(e * Math.sin(s)) + Math.abs(i * Math.cos(s)), Q = e / 2, O = i / 2, G = w / 2, k = Math.sin(s - Math.PI / 2) * G, iA = Math.cos(s - Math.PI / 2) * G;
        return [w, Q - iA, Q + iA, O - k, O + k];
      }, Wt = function(r, e) {
        return Math.sqrt(r * r + e * e);
      }, Sn = function(r, e, i, s, w) {
        var Q = [
          [0, 0],
          [0, e],
          [r, 0],
          [r, e]
        ];
        return Q.reduce(function(O, G) {
          var k = G[0], iA = G[1], fA = Wt(i - k, s - iA);
          return (w ? fA < O.optimumDistance : fA > O.optimumDistance) ? {
            optimumCorner: G,
            optimumDistance: fA
          } : O;
        }, {
          optimumDistance: w ? 1 / 0 : -1 / 0,
          optimumCorner: null
        }).optimumCorner;
      }, Hn = function(r, e, i, s, w) {
        var Q = 0, O = 0;
        switch (r.size) {
          case 0:
            r.shape === 0 ? Q = O = Math.min(Math.abs(e), Math.abs(e - s), Math.abs(i), Math.abs(i - w)) : r.shape === 1 && (Q = Math.min(Math.abs(e), Math.abs(e - s)), O = Math.min(Math.abs(i), Math.abs(i - w)));
            break;
          case 2:
            if (r.shape === 0)
              Q = O = Math.min(Wt(e, i), Wt(e, i - w), Wt(e - s, i), Wt(e - s, i - w));
            else if (r.shape === 1) {
              var G = Math.min(Math.abs(i), Math.abs(i - w)) / Math.min(Math.abs(e), Math.abs(e - s)), k = Sn(s, w, e, i, !0), iA = k[0], fA = k[1];
              Q = Wt(iA - e, (fA - i) / G), O = G * Q;
            }
            break;
          case 1:
            r.shape === 0 ? Q = O = Math.max(Math.abs(e), Math.abs(e - s), Math.abs(i), Math.abs(i - w)) : r.shape === 1 && (Q = Math.max(Math.abs(e), Math.abs(e - s)), O = Math.max(Math.abs(i), Math.abs(i - w)));
            break;
          case 3:
            if (r.shape === 0)
              Q = O = Math.max(Wt(e, i), Wt(e, i - w), Wt(e - s, i), Wt(e - s, i - w));
            else if (r.shape === 1) {
              var G = Math.max(Math.abs(i), Math.abs(i - w)) / Math.max(Math.abs(e), Math.abs(e - s)), wA = Sn(s, w, e, i, !1), iA = wA[0], fA = wA[1];
              Q = Wt(iA - e, (fA - i) / G), O = G * Q;
            }
            break;
        }
        return Array.isArray(r.size) && (Q = Xe(r.size[0], s), O = r.size.length === 2 ? Xe(r.size[1], w) : Q), [Q, O];
      }, ai = function(r, e) {
        var i = ht(180), s = [];
        return Nt(e).forEach(function(w, Q) {
          if (Q === 0) {
            var O = w[0];
            if (O.type === 20 && O.value === "to") {
              i = ii(w);
              return;
            } else if (Es(O)) {
              i = Us.parse(r, O);
              return;
            }
          }
          var G = Kr(r, w);
          s.push(G);
        }), {
          angle: i,
          stops: s,
          type: 1
          /* LINEAR_GRADIENT */
        };
      }, qt = function(r, e) {
        var i = ht(180), s = [];
        return Nt(e).forEach(function(w, Q) {
          if (Q === 0) {
            var O = w[0];
            if (O.type === 20 && ["top", "left", "right", "bottom"].indexOf(O.value) !== -1) {
              i = ii(w);
              return;
            } else if (Es(O)) {
              i = (Us.parse(r, O) + ht(270)) % ht(360);
              return;
            }
          }
          var G = Kr(r, w);
          s.push(G);
        }), {
          angle: i,
          stops: s,
          type: 1
          /* LINEAR_GRADIENT */
        };
      }, hn = function(r, e) {
        var i = ht(180), s = [], w = 1, Q = 0, O = 3, G = [];
        return Nt(e).forEach(function(k, iA) {
          var fA = k[0];
          if (iA === 0) {
            if (Le(fA) && fA.value === "linear") {
              w = 1;
              return;
            } else if (Le(fA) && fA.value === "radial") {
              w = 2;
              return;
            }
          }
          if (fA.type === 18) {
            if (fA.name === "from") {
              var wA = Fr.parse(r, fA.values[0]);
              s.push({ stop: vt, color: wA });
            } else if (fA.name === "to") {
              var wA = Fr.parse(r, fA.values[0]);
              s.push({ stop: fr, color: wA });
            } else if (fA.name === "color-stop") {
              var xA = fA.values.filter(jt);
              if (xA.length === 2) {
                var wA = Fr.parse(r, xA[1]), oe = xA[0];
                et(oe) && s.push({
                  stop: { type: 16, number: oe.number * 100, flags: oe.flags },
                  color: wA
                });
              }
            }
          }
        }), w === 1 ? {
          angle: (i + ht(180)) % ht(360),
          stops: s,
          type: w
        } : { size: O, shape: Q, stops: s, position: G, type: w };
      }, tt = "closest-side", rt = "farthest-side", dt = "closest-corner", Ct = "farthest-corner", en = "circle", dn = "ellipse", ns = "cover", ci = "contain", da = function(r, e) {
        var i = 0, s = 3, w = [], Q = [];
        return Nt(e).forEach(function(O, G) {
          var k = !0;
          if (G === 0) {
            var iA = !1;
            k = O.reduce(function(wA, xA) {
              if (iA)
                if (Le(xA))
                  switch (xA.value) {
                    case "center":
                      return Q.push(As), wA;
                    case "top":
                    case "left":
                      return Q.push(vt), wA;
                    case "right":
                    case "bottom":
                      return Q.push(fr), wA;
                  }
                else (at(xA) || Cr(xA)) && Q.push(xA);
              else if (Le(xA))
                switch (xA.value) {
                  case en:
                    return i = 0, !1;
                  case dn:
                    return i = 1, !1;
                  case "at":
                    return iA = !0, !1;
                  case tt:
                    return s = 0, !1;
                  case ns:
                  case rt:
                    return s = 1, !1;
                  case ci:
                  case dt:
                    return s = 2, !1;
                  case Ct:
                    return s = 3, !1;
                }
              else if (Cr(xA) || at(xA))
                return Array.isArray(s) || (s = []), s.push(xA), !1;
              return wA;
            }, k);
          }
          if (k) {
            var fA = Kr(r, O);
            w.push(fA);
          }
        }), {
          size: s,
          shape: i,
          stops: w,
          position: Q,
          type: 2
          /* RADIAL_GRADIENT */
        };
      }, li = function(r, e) {
        var i = 0, s = 3, w = [], Q = [];
        return Nt(e).forEach(function(O, G) {
          var k = !0;
          if (G === 0 ? k = O.reduce(function(fA, wA) {
            if (Le(wA))
              switch (wA.value) {
                case "center":
                  return Q.push(As), !1;
                case "top":
                case "left":
                  return Q.push(vt), !1;
                case "right":
                case "bottom":
                  return Q.push(fr), !1;
              }
            else if (at(wA) || Cr(wA))
              return Q.push(wA), !1;
            return fA;
          }, k) : G === 1 && (k = O.reduce(function(fA, wA) {
            if (Le(wA))
              switch (wA.value) {
                case en:
                  return i = 0, !1;
                case dn:
                  return i = 1, !1;
                case ci:
                case tt:
                  return s = 0, !1;
                case rt:
                  return s = 1, !1;
                case dt:
                  return s = 2, !1;
                case ns:
                case Ct:
                  return s = 3, !1;
              }
            else if (Cr(wA) || at(wA))
              return Array.isArray(s) || (s = []), s.push(wA), !1;
            return fA;
          }, k)), k) {
            var iA = Kr(r, O);
            w.push(iA);
          }
        }), {
          size: s,
          shape: i,
          stops: w,
          position: Q,
          type: 2
          /* RADIAL_GRADIENT */
        };
      }, ga = function(r) {
        return r.type === 1;
      }, pa = function(r) {
        return r.type === 2;
      }, zi = {
        name: "image",
        parse: function(r, e) {
          if (e.type === 22) {
            var i = {
              url: e.value,
              type: 0
              /* URL */
            };
            return r.cache.addImage(e.value), i;
          }
          if (e.type === 18) {
            var s = Yi[e.name];
            if (typeof s > "u")
              throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
            return s(r, e.values);
          }
          throw new Error("Unsupported image type " + e.type);
        }
      };
      function Ba(r) {
        return !(r.type === 20 && r.value === "none") && (r.type !== 18 || !!Yi[r.name]);
      }
      var Yi = {
        "linear-gradient": ai,
        "-moz-linear-gradient": qt,
        "-ms-linear-gradient": qt,
        "-o-linear-gradient": qt,
        "-webkit-linear-gradient": qt,
        "radial-gradient": da,
        "-moz-radial-gradient": li,
        "-ms-radial-gradient": li,
        "-o-radial-gradient": li,
        "-webkit-radial-gradient": li,
        "-webkit-gradient": hn
      }, qi = {
        name: "background-image",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(r, e) {
          if (e.length === 0)
            return [];
          var i = e[0];
          return i.type === 20 && i.value === "none" ? [] : e.filter(function(s) {
            return jt(s) && Ba(s);
          }).map(function(s) {
            return zi.parse(r, s);
          });
        }
      }, dr = {
        name: "background-origin",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return e.map(function(i) {
            if (Le(i))
              switch (i.value) {
                case "padding-box":
                  return 1;
                case "content-box":
                  return 2;
              }
            return 0;
          });
        }
      }, Ur = {
        name: "background-position",
        initialValue: "0% 0%",
        type: 1,
        prefix: !1,
        parse: function(r, e) {
          return Nt(e).map(function(i) {
            return i.filter(at);
          }).map($n);
        }
      }, Zi = {
        name: "background-repeat",
        initialValue: "repeat",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return Nt(e).map(function(i) {
            return i.filter(Le).map(function(s) {
              return s.value;
            }).join(" ");
          }).map($i);
        }
      }, $i = function(r) {
        switch (r) {
          case "no-repeat":
            return 1;
          case "repeat-x":
          case "repeat no-repeat":
            return 2;
          case "repeat-y":
          case "no-repeat repeat":
            return 3;
          case "repeat":
          default:
            return 0;
        }
      }, ss;
      (function(r) {
        r.AUTO = "auto", r.CONTAIN = "contain", r.COVER = "cover";
      })(ss || (ss = {}));
      var Ao = {
        name: "background-size",
        initialValue: "0",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return Nt(e).map(function(i) {
            return i.filter(eo);
          });
        }
      }, eo = function(r) {
        return Le(r) || at(r);
      }, Is = function(r) {
        return {
          name: "border-" + r + "-color",
          initialValue: "transparent",
          prefix: !1,
          type: 3,
          format: "color"
        };
      }, wa = Is("top"), _o = Is("right"), Ko = Is("bottom"), to = Is("left"), xs = function(r) {
        return {
          name: "border-radius-" + r,
          initialValue: "0 0",
          prefix: !1,
          type: 1,
          parse: function(e, i) {
            return $n(i.filter(at));
          }
        };
      }, fc = xs("top-left"), hc = xs("top-right"), va = xs("bottom-right"), dc = xs("bottom-left"), ro = function(r) {
        return {
          name: "border-" + r + "-style",
          initialValue: "solid",
          prefix: !1,
          type: 2,
          parse: function(e, i) {
            switch (i) {
              case "none":
                return 0;
              case "dashed":
                return 2;
              case "dotted":
                return 3;
              case "double":
                return 4;
            }
            return 1;
          }
        };
      }, gc = ro("top"), pc = ro("right"), Bc = ro("bottom"), Ro = ro("left"), Ss = function(r) {
        return {
          name: "border-" + r + "-width",
          initialValue: "0",
          type: 0,
          prefix: !1,
          parse: function(e, i) {
            return At(i) ? i.number : 0;
          }
        };
      }, ui = Ss("top"), wc = Ss("right"), vc = Ss("bottom"), ma = Ss("left"), mc = {
        name: "color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
      }, yc = {
        name: "direction",
        initialValue: "ltr",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "rtl":
              return 1;
            case "ltr":
            default:
              return 0;
          }
        }
      }, Cc = {
        name: "display",
        initialValue: "inline-block",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return e.filter(Le).reduce(
            function(i, s) {
              return i | Fc(s.value);
            },
            0
            /* NONE */
          );
        }
      }, Fc = function(r) {
        switch (r) {
          case "block":
          case "-webkit-box":
            return 2;
          case "inline":
            return 4;
          case "run-in":
            return 8;
          case "flow":
            return 16;
          case "flow-root":
            return 32;
          case "table":
            return 64;
          case "flex":
          case "-webkit-flex":
            return 128;
          case "grid":
          case "-ms-grid":
            return 256;
          case "ruby":
            return 512;
          case "subgrid":
            return 1024;
          case "list-item":
            return 2048;
          case "table-row-group":
            return 4096;
          case "table-header-group":
            return 8192;
          case "table-footer-group":
            return 16384;
          case "table-row":
            return 32768;
          case "table-cell":
            return 65536;
          case "table-column-group":
            return 131072;
          case "table-column":
            return 262144;
          case "table-caption":
            return 524288;
          case "ruby-base":
            return 1048576;
          case "ruby-text":
            return 2097152;
          case "ruby-base-container":
            return 4194304;
          case "ruby-text-container":
            return 8388608;
          case "contents":
            return 16777216;
          case "inline-block":
            return 33554432;
          case "inline-list-item":
            return 67108864;
          case "inline-table":
            return 134217728;
          case "inline-flex":
            return 268435456;
          case "inline-grid":
            return 536870912;
        }
        return 0;
      }, jn = {
        name: "float",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "left":
              return 1;
            case "right":
              return 2;
            case "inline-start":
              return 3;
            case "inline-end":
              return 4;
          }
          return 0;
        }
      }, Rr = {
        name: "letter-spacing",
        initialValue: "0",
        prefix: !1,
        type: 0,
        parse: function(r, e) {
          return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
        }
      }, Er;
      (function(r) {
        r.NORMAL = "normal", r.STRICT = "strict";
      })(Er || (Er = {}));
      var bc = {
        name: "line-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "strict":
              return Er.STRICT;
            case "normal":
            default:
              return Er.NORMAL;
          }
        }
      }, ya = {
        name: "line-height",
        initialValue: "normal",
        prefix: !1,
        type: 4
        /* TOKEN_VALUE */
      }, gn = function(r, e) {
        return Le(r) && r.value === "normal" ? 1.2 * e : r.type === 17 ? e * r.number : at(r) ? Xe(r, e) : e;
      }, Lr = {
        name: "list-style-image",
        initialValue: "none",
        type: 0,
        prefix: !1,
        parse: function(r, e) {
          return e.type === 20 && e.value === "none" ? null : zi.parse(r, e);
        }
      }, Qc = {
        name: "list-style-position",
        initialValue: "outside",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "inside":
              return 0;
            case "outside":
            default:
              return 1;
          }
        }
      }, ko = {
        name: "list-style-type",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "disc":
              return 0;
            case "circle":
              return 1;
            case "square":
              return 2;
            case "decimal":
              return 3;
            case "cjk-decimal":
              return 4;
            case "decimal-leading-zero":
              return 5;
            case "lower-roman":
              return 6;
            case "upper-roman":
              return 7;
            case "lower-greek":
              return 8;
            case "lower-alpha":
              return 9;
            case "upper-alpha":
              return 10;
            case "arabic-indic":
              return 11;
            case "armenian":
              return 12;
            case "bengali":
              return 13;
            case "cambodian":
              return 14;
            case "cjk-earthly-branch":
              return 15;
            case "cjk-heavenly-stem":
              return 16;
            case "cjk-ideographic":
              return 17;
            case "devanagari":
              return 18;
            case "ethiopic-numeric":
              return 19;
            case "georgian":
              return 20;
            case "gujarati":
              return 21;
            case "gurmukhi":
              return 22;
            case "hebrew":
              return 22;
            case "hiragana":
              return 23;
            case "hiragana-iroha":
              return 24;
            case "japanese-formal":
              return 25;
            case "japanese-informal":
              return 26;
            case "kannada":
              return 27;
            case "katakana":
              return 28;
            case "katakana-iroha":
              return 29;
            case "khmer":
              return 30;
            case "korean-hangul-formal":
              return 31;
            case "korean-hanja-formal":
              return 32;
            case "korean-hanja-informal":
              return 33;
            case "lao":
              return 34;
            case "lower-armenian":
              return 35;
            case "malayalam":
              return 36;
            case "mongolian":
              return 37;
            case "myanmar":
              return 38;
            case "oriya":
              return 39;
            case "persian":
              return 40;
            case "simp-chinese-formal":
              return 41;
            case "simp-chinese-informal":
              return 42;
            case "tamil":
              return 43;
            case "telugu":
              return 44;
            case "thai":
              return 45;
            case "tibetan":
              return 46;
            case "trad-chinese-formal":
              return 47;
            case "trad-chinese-informal":
              return 48;
            case "upper-armenian":
              return 49;
            case "disclosure-open":
              return 50;
            case "disclosure-closed":
              return 51;
            case "none":
            default:
              return -1;
          }
        }
      }, fi = function(r) {
        return {
          name: "margin-" + r,
          initialValue: "0",
          prefix: !1,
          type: 4
          /* TOKEN_VALUE */
        };
      }, Ca = fi("top"), Fa = fi("right"), ba = fi("bottom"), Uc = fi("left"), no = {
        name: "overflow",
        initialValue: "visible",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return e.filter(Le).map(function(i) {
            switch (i.value) {
              case "hidden":
                return 1;
              case "scroll":
                return 2;
              case "clip":
                return 3;
              case "auto":
                return 4;
              case "visible":
              default:
                return 0;
            }
          });
        }
      }, so = {
        name: "overflow-wrap",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "break-word":
              return "break-word";
            case "normal":
            default:
              return "normal";
          }
        }
      }, Nn = function(r) {
        return {
          name: "padding-" + r,
          initialValue: "0",
          prefix: !1,
          type: 3,
          format: "length-percentage"
        };
      }, Go = Nn("top"), Qa = Nn("right"), Ec = Nn("bottom"), Ua = Nn("left"), Lc = {
        name: "text-align",
        initialValue: "left",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "right":
              return 2;
            case "center":
            case "justify":
              return 1;
            case "left":
            default:
              return 0;
          }
        }
      }, Ic = {
        name: "position",
        initialValue: "static",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "relative":
              return 1;
            case "absolute":
              return 2;
            case "fixed":
              return 3;
            case "sticky":
              return 4;
          }
          return 0;
        }
      }, xc = {
        name: "text-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(r, e) {
          return e.length === 1 && mt(e[0], "none") ? [] : Nt(e).map(function(i) {
            for (var s = {
              color: Et.TRANSPARENT,
              offsetX: vt,
              offsetY: vt,
              blur: vt
            }, w = 0, Q = 0; Q < i.length; Q++) {
              var O = i[Q];
              Cr(O) ? (w === 0 ? s.offsetX = O : w === 1 ? s.offsetY = O : s.blur = O, w++) : s.color = Fr.parse(r, O);
            }
            return s;
          });
        }
      }, Sc = {
        name: "text-transform",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "uppercase":
              return 2;
            case "lowercase":
              return 1;
            case "capitalize":
              return 3;
          }
          return 0;
        }
      }, Hc = {
        name: "transform",
        initialValue: "none",
        prefix: !0,
        type: 0,
        parse: function(r, e) {
          if (e.type === 20 && e.value === "none")
            return null;
          if (e.type === 18) {
            var i = io[e.name];
            if (typeof i > "u")
              throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
            return i(e.values);
          }
          return null;
        }
      }, jc = function(r) {
        var e = r.filter(function(i) {
          return i.type === 17;
        }).map(function(i) {
          return i.number;
        });
        return e.length === 6 ? e : null;
      }, Ea = function(r) {
        var e = r.filter(function(k) {
          return k.type === 17;
        }).map(function(k) {
          return k.number;
        }), i = e[0], s = e[1];
        e[2], e[3];
        var w = e[4], Q = e[5];
        e[6], e[7], e[8], e[9], e[10], e[11];
        var O = e[12], G = e[13];
        return e[14], e[15], e.length === 16 ? [i, s, w, Q, O, G] : null;
      }, io = {
        matrix: jc,
        matrix3d: Ea
      }, La = {
        type: 16,
        number: 50,
        flags: zr
      }, Nc = [La, La], Ia = {
        name: "transform-origin",
        initialValue: "50% 50%",
        prefix: !0,
        type: 1,
        parse: function(r, e) {
          var i = e.filter(at);
          return i.length !== 2 ? Nc : [i[0], i[1]];
        }
      }, A = {
        name: "visible",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "hidden":
              return 1;
            case "collapse":
              return 2;
            case "visible":
            default:
              return 0;
          }
        }
      }, a;
      (function(r) {
        r.NORMAL = "normal", r.BREAK_ALL = "break-all", r.KEEP_ALL = "keep-all";
      })(a || (a = {}));
      for (var B = {
        name: "word-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "break-all":
              return a.BREAK_ALL;
            case "keep-all":
              return a.KEEP_ALL;
            case "normal":
            default:
              return a.NORMAL;
          }
        }
      }, F = {
        name: "z-index",
        initialValue: "auto",
        prefix: !1,
        type: 0,
        parse: function(r, e) {
          if (e.type === 20)
            return { auto: !0, order: 0 };
          if (et(e))
            return { auto: !1, order: e.number };
          throw new Error("Invalid z-index number parsed");
        }
      }, S = {
        name: "time",
        parse: function(r, e) {
          if (e.type === 15)
            switch (e.unit.toLowerCase()) {
              case "s":
                return 1e3 * e.number;
              case "ms":
                return e.number;
            }
          throw new Error("Unsupported time type");
        }
      }, N = {
        name: "opacity",
        initialValue: "1",
        type: 0,
        prefix: !1,
        parse: function(r, e) {
          return et(e) ? e.number : 1;
        }
      }, P = {
        name: "text-decoration-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
      }, D = {
        name: "text-decoration-line",
        initialValue: "none",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return e.filter(Le).map(function(i) {
            switch (i.value) {
              case "underline":
                return 1;
              case "overline":
                return 2;
              case "line-through":
                return 3;
              case "none":
                return 4;
            }
            return 0;
          }).filter(function(i) {
            return i !== 0;
          });
        }
      }, K = {
        name: "font-family",
        initialValue: "",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          var i = [], s = [];
          return e.forEach(function(w) {
            switch (w.type) {
              case 20:
              case 0:
                i.push(w.value);
                break;
              case 17:
                i.push(w.number.toString());
                break;
              case 4:
                s.push(i.join(" ")), i.length = 0;
                break;
            }
          }), i.length && s.push(i.join(" ")), s.map(function(w) {
            return w.indexOf(" ") === -1 ? w : "'" + w + "'";
          });
        }
      }, W = {
        name: "font-size",
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length"
      }, nA = {
        name: "font-weight",
        initialValue: "normal",
        type: 0,
        prefix: !1,
        parse: function(r, e) {
          if (et(e))
            return e.number;
          if (Le(e))
            switch (e.value) {
              case "bold":
                return 700;
              case "normal":
              default:
                return 400;
            }
          return 400;
        }
      }, yA = {
        name: "font-variant",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(r, e) {
          return e.filter(Le).map(function(i) {
            return i.value;
          });
        }
      }, CA = {
        name: "font-style",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function(r, e) {
          switch (e) {
            case "oblique":
              return "oblique";
            case "italic":
              return "italic";
            case "normal":
            default:
              return "normal";
          }
        }
      }, oA = function(r, e) {
        return (r & e) !== 0;
      }, jA = {
        name: "content",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(r, e) {
          if (e.length === 0)
            return [];
          var i = e[0];
          return i.type === 20 && i.value === "none" ? [] : e;
        }
      }, EA = {
        name: "counter-increment",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(r, e) {
          if (e.length === 0)
            return null;
          var i = e[0];
          if (i.type === 20 && i.value === "none")
            return null;
          for (var s = [], w = e.filter(yr), Q = 0; Q < w.length; Q++) {
            var O = w[Q], G = w[Q + 1];
            if (O.type === 20) {
              var k = G && et(G) ? G.number : 1;
              s.push({ counter: O.value, increment: k });
            }
          }
          return s;
        }
      }, sA = {
        name: "counter-reset",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(r, e) {
          if (e.length === 0)
            return [];
          for (var i = [], s = e.filter(yr), w = 0; w < s.length; w++) {
            var Q = s[w], O = s[w + 1];
            if (Le(Q) && Q.value !== "none") {
              var G = O && et(O) ? O.number : 0;
              i.push({ counter: Q.value, reset: G });
            }
          }
          return i;
        }
      }, lA = {
        name: "duration",
        initialValue: "0s",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          return e.filter(At).map(function(i) {
            return S.parse(r, i);
          });
        }
      }, SA = {
        name: "quotes",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function(r, e) {
          if (e.length === 0)
            return null;
          var i = e[0];
          if (i.type === 20 && i.value === "none")
            return null;
          var s = [], w = e.filter(Vt);
          if (w.length % 2 !== 0)
            return null;
          for (var Q = 0; Q < w.length; Q += 2) {
            var O = w[Q].value, G = w[Q + 1].value;
            s.push({ open: O, close: G });
          }
          return s;
        }
      }, OA = function(r, e, i) {
        if (!r)
          return "";
        var s = r[Math.min(e, r.length - 1)];
        return s ? i ? s.open : s.close : "";
      }, HA = {
        name: "box-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function(r, e) {
          return e.length === 1 && mt(e[0], "none") ? [] : Nt(e).map(function(i) {
            for (var s = {
              color: 255,
              offsetX: vt,
              offsetY: vt,
              blur: vt,
              spread: vt,
              inset: !1
            }, w = 0, Q = 0; Q < i.length; Q++) {
              var O = i[Q];
              mt(O, "inset") ? s.inset = !0 : Cr(O) ? (w === 0 ? s.offsetX = O : w === 1 ? s.offsetY = O : w === 2 ? s.blur = O : s.spread = O, w++) : s.color = Fr.parse(r, O);
            }
            return s;
          });
        }
      }, re = {
        name: "paint-order",
        initialValue: "normal",
        prefix: !1,
        type: 1,
        parse: function(r, e) {
          var i = [
            0,
            1,
            2
            /* MARKERS */
          ], s = [];
          return e.filter(Le).forEach(function(w) {
            switch (w.value) {
              case "stroke":
                s.push(
                  1
                  /* STROKE */
                );
                break;
              case "fill":
                s.push(
                  0
                  /* FILL */
                );
                break;
              case "markers":
                s.push(
                  2
                  /* MARKERS */
                );
                break;
            }
          }), i.forEach(function(w) {
            s.indexOf(w) === -1 && s.push(w);
          }), s;
        }
      }, ZA = {
        name: "-webkit-text-stroke-color",
        initialValue: "currentcolor",
        prefix: !1,
        type: 3,
        format: "color"
      }, ve = {
        name: "-webkit-text-stroke-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function(r, e) {
          return At(e) ? e.number : 0;
        }
      }, $A = (
        /** @class */
        function() {
          function r(e, i) {
            var s, w;
            this.animationDuration = _A(e, lA, i.animationDuration), this.backgroundClip = _A(e, Ls, i.backgroundClip), this.backgroundColor = _A(e, oi, i.backgroundColor), this.backgroundImage = _A(e, qi, i.backgroundImage), this.backgroundOrigin = _A(e, dr, i.backgroundOrigin), this.backgroundPosition = _A(e, Ur, i.backgroundPosition), this.backgroundRepeat = _A(e, Zi, i.backgroundRepeat), this.backgroundSize = _A(e, Ao, i.backgroundSize), this.borderTopColor = _A(e, wa, i.borderTopColor), this.borderRightColor = _A(e, _o, i.borderRightColor), this.borderBottomColor = _A(e, Ko, i.borderBottomColor), this.borderLeftColor = _A(e, to, i.borderLeftColor), this.borderTopLeftRadius = _A(e, fc, i.borderTopLeftRadius), this.borderTopRightRadius = _A(e, hc, i.borderTopRightRadius), this.borderBottomRightRadius = _A(e, va, i.borderBottomRightRadius), this.borderBottomLeftRadius = _A(e, dc, i.borderBottomLeftRadius), this.borderTopStyle = _A(e, gc, i.borderTopStyle), this.borderRightStyle = _A(e, pc, i.borderRightStyle), this.borderBottomStyle = _A(e, Bc, i.borderBottomStyle), this.borderLeftStyle = _A(e, Ro, i.borderLeftStyle), this.borderTopWidth = _A(e, ui, i.borderTopWidth), this.borderRightWidth = _A(e, wc, i.borderRightWidth), this.borderBottomWidth = _A(e, vc, i.borderBottomWidth), this.borderLeftWidth = _A(e, ma, i.borderLeftWidth), this.boxShadow = _A(e, HA, i.boxShadow), this.color = _A(e, mc, i.color), this.direction = _A(e, yc, i.direction), this.display = _A(e, Cc, i.display), this.float = _A(e, jn, i.cssFloat), this.fontFamily = _A(e, K, i.fontFamily), this.fontSize = _A(e, W, i.fontSize), this.fontStyle = _A(e, CA, i.fontStyle), this.fontVariant = _A(e, yA, i.fontVariant), this.fontWeight = _A(e, nA, i.fontWeight), this.letterSpacing = _A(e, Rr, i.letterSpacing), this.lineBreak = _A(e, bc, i.lineBreak), this.lineHeight = _A(e, ya, i.lineHeight), this.listStyleImage = _A(e, Lr, i.listStyleImage), this.listStylePosition = _A(e, Qc, i.listStylePosition), this.listStyleType = _A(e, ko, i.listStyleType), this.marginTop = _A(e, Ca, i.marginTop), this.marginRight = _A(e, Fa, i.marginRight), this.marginBottom = _A(e, ba, i.marginBottom), this.marginLeft = _A(e, Uc, i.marginLeft), this.opacity = _A(e, N, i.opacity);
            var Q = _A(e, no, i.overflow);
            this.overflowX = Q[0], this.overflowY = Q[Q.length > 1 ? 1 : 0], this.overflowWrap = _A(e, so, i.overflowWrap), this.paddingTop = _A(e, Go, i.paddingTop), this.paddingRight = _A(e, Qa, i.paddingRight), this.paddingBottom = _A(e, Ec, i.paddingBottom), this.paddingLeft = _A(e, Ua, i.paddingLeft), this.paintOrder = _A(e, re, i.paintOrder), this.position = _A(e, Ic, i.position), this.textAlign = _A(e, Lc, i.textAlign), this.textDecorationColor = _A(e, P, (s = i.textDecorationColor) !== null && s !== void 0 ? s : i.color), this.textDecorationLine = _A(e, D, (w = i.textDecorationLine) !== null && w !== void 0 ? w : i.textDecoration), this.textShadow = _A(e, xc, i.textShadow), this.textTransform = _A(e, Sc, i.textTransform), this.transform = _A(e, Hc, i.transform), this.transformOrigin = _A(e, Ia, i.transformOrigin), this.visibility = _A(e, A, i.visibility), this.webkitTextStrokeColor = _A(e, ZA, i.webkitTextStrokeColor), this.webkitTextStrokeWidth = _A(e, ve, i.webkitTextStrokeWidth), this.wordBreak = _A(e, B, i.wordBreak), this.zIndex = _A(e, F, i.zIndex);
          }
          return r.prototype.isVisible = function() {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0;
          }, r.prototype.isTransparent = function() {
            return Zr(this.backgroundColor);
          }, r.prototype.isTransformed = function() {
            return this.transform !== null;
          }, r.prototype.isPositioned = function() {
            return this.position !== 0;
          }, r.prototype.isPositionedWithZIndex = function() {
            return this.isPositioned() && !this.zIndex.auto;
          }, r.prototype.isFloating = function() {
            return this.float !== 0;
          }, r.prototype.isInlineLevel = function() {
            return oA(
              this.display,
              4
              /* INLINE */
            ) || oA(
              this.display,
              33554432
              /* INLINE_BLOCK */
            ) || oA(
              this.display,
              268435456
              /* INLINE_FLEX */
            ) || oA(
              this.display,
              536870912
              /* INLINE_GRID */
            ) || oA(
              this.display,
              67108864
              /* INLINE_LIST_ITEM */
            ) || oA(
              this.display,
              134217728
              /* INLINE_TABLE */
            );
          }, r;
        }()
      ), Je = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i) {
            this.content = _A(e, jA, i.content), this.quotes = _A(e, SA, i.quotes);
          }
          return r;
        }()
      ), ze = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i) {
            this.counterIncrement = _A(e, EA, i.counterIncrement), this.counterReset = _A(e, sA, i.counterReset);
          }
          return r;
        }()
      ), _A = function(r, e, i) {
        var s = new Pe(), w = i !== null && typeof i < "u" ? i.toString() : e.initialValue;
        s.write(w);
        var Q = new ke(s.read());
        switch (e.type) {
          case 2:
            var O = Q.parseComponentValue();
            return e.parse(r, Le(O) ? O.value : e.initialValue);
          case 0:
            return e.parse(r, Q.parseComponentValue());
          case 1:
            return e.parse(r, Q.parseComponentValues());
          case 4:
            return Q.parseComponentValue();
          case 3:
            switch (e.format) {
              case "angle":
                return Us.parse(r, Q.parseComponentValue());
              case "color":
                return Fr.parse(r, Q.parseComponentValue());
              case "image":
                return zi.parse(r, Q.parseComponentValue());
              case "length":
                var G = Q.parseComponentValue();
                return Cr(G) ? G : vt;
              case "length-percentage":
                var k = Q.parseComponentValue();
                return at(k) ? k : vt;
              case "time":
                return S.parse(r, Q.parseComponentValue());
            }
            break;
        }
      }, Ke = "data-html2canvas-debug", nt = function(r) {
        var e = r.getAttribute(Ke);
        switch (e) {
          case "all":
            return 1;
          case "clone":
            return 2;
          case "parse":
            return 3;
          case "render":
            return 4;
          default:
            return 0;
        }
      }, Ye = function(r, e) {
        var i = nt(r);
        return i === 1 || e === i;
      }, me = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i) {
            if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Ye(
              i,
              3
              /* PARSE */
            ))
              debugger;
            this.styles = new $A(e, window.getComputedStyle(i, null)), Rc(i) && (this.styles.animationDuration.some(function(s) {
              return s > 0;
            }) && (i.style.animationDuration = "0s"), this.styles.transform !== null && (i.style.transform = "none")), this.bounds = m(this.context, i), Ye(
              i,
              4
              /* RENDER */
            ) && (this.flags |= 16);
          }
          return r;
        }()
      ), Ft = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Zt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ct = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Mt = 0; Mt < Zt.length; Mt++)
        ct[Zt.charCodeAt(Mt)] = Mt;
      for (var Ze = function(r) {
        var e = r.length * 0.75, i = r.length, s, w = 0, Q, O, G, k;
        r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
        var iA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), fA = Array.isArray(iA) ? iA : new Uint8Array(iA);
        for (s = 0; s < i; s += 4)
          Q = ct[r.charCodeAt(s)], O = ct[r.charCodeAt(s + 1)], G = ct[r.charCodeAt(s + 2)], k = ct[r.charCodeAt(s + 3)], fA[w++] = Q << 2 | O >> 4, fA[w++] = (O & 15) << 4 | G >> 2, fA[w++] = (G & 3) << 6 | k & 63;
        return iA;
      }, gr = function(r) {
        for (var e = r.length, i = [], s = 0; s < e; s += 2)
          i.push(r[s + 1] << 8 | r[s]);
        return i;
      }, pr = function(r) {
        for (var e = r.length, i = [], s = 0; s < e; s += 4)
          i.push(r[s + 3] << 24 | r[s + 2] << 16 | r[s + 1] << 8 | r[s]);
        return i;
      }, lt = 5, Lt = 11, _t = 2, Ir = Lt - lt, kr = 65536 >> lt, Pt = 1 << lt, Gr = Pt - 1, is = 1024 >> lt, Hs = kr + is, On = Hs, gt = 32, Vo = On + gt, xa = 65536 >> Lt, Sa = 1 << Ir, oo = Sa - 1, js = function(r, e, i) {
        return r.slice ? r.slice(e, i) : new Uint16Array(Array.prototype.slice.call(r, e, i));
      }, ao = function(r, e, i) {
        return r.slice ? r.slice(e, i) : new Uint32Array(Array.prototype.slice.call(r, e, i));
      }, Vr = function(r, e) {
        var i = Ze(r), s = Array.isArray(i) ? pr(i) : new Uint32Array(i), w = Array.isArray(i) ? gr(i) : new Uint16Array(i), Q = 24, O = js(w, Q / 2, s[4] / 2), G = s[5] === 2 ? js(w, (Q + s[4]) / 2) : ao(s, Math.ceil((Q + s[4]) / 4));
        return new Ns(s[0], s[1], s[2], s[3], O, G);
      }, Ns = (
        /** @class */
        function() {
          function r(e, i, s, w, Q, O) {
            this.initialValue = e, this.errorValue = i, this.highStart = s, this.highValueIndex = w, this.index = Q, this.data = O;
          }
          return r.prototype.get = function(e) {
            var i;
            if (e >= 0) {
              if (e < 55296 || e > 56319 && e <= 65535)
                return i = this.index[e >> lt], i = (i << _t) + (e & Gr), this.data[i];
              if (e <= 65535)
                return i = this.index[kr + (e - 55296 >> lt)], i = (i << _t) + (e & Gr), this.data[i];
              if (e < this.highStart)
                return i = Vo - xa + (e >> Lt), i = this.index[i], i += e >> lt & oo, i = this.index[i], i = (i << _t) + (e & Gr), this.data[i];
              if (e <= 1114111)
                return this.data[this.highValueIndex];
            }
            return this.errorValue;
          }, r;
        }()
      ), os = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ha = typeof Uint8Array > "u" ? [] : new Uint8Array(256), as = 0; as < os.length; as++)
        Ha[os.charCodeAt(as)] = as;
      var ja = 1, Os = 2, hi = 3, di = 4, Ps = 5, Oc = 7, Na = 8, gi = 9, tn = 10, Oa = 11, Pa = 12, Ta = 13, Wo = 14, Ts = 15, Da = function(r) {
        for (var e = [], i = 0, s = r.length; i < s; ) {
          var w = r.charCodeAt(i++);
          if (w >= 55296 && w <= 56319 && i < s) {
            var Q = r.charCodeAt(i++);
            (Q & 64512) === 56320 ? e.push(((w & 1023) << 10) + (Q & 1023) + 65536) : (e.push(w), i--);
          } else
            e.push(w);
        }
        return e;
      }, Ma = function() {
        for (var r = [], e = 0; e < arguments.length; e++)
          r[e] = arguments[e];
        if (String.fromCodePoint)
          return String.fromCodePoint.apply(String, r);
        var i = r.length;
        if (!i)
          return "";
        for (var s = [], w = -1, Q = ""; ++w < i; ) {
          var O = r[w];
          O <= 65535 ? s.push(O) : (O -= 65536, s.push((O >> 10) + 55296, O % 1024 + 56320)), (w + 1 === i || s.length > 16384) && (Q += String.fromCharCode.apply(String, s), s.length = 0);
        }
        return Q;
      }, co = Vr(Ft), ir = "×", cs = "÷", _a = function(r) {
        return co.get(r);
      }, Pc = function(r, e, i) {
        var s = i - 2, w = e[s], Q = e[i - 1], O = e[i];
        if (Q === Os && O === hi)
          return ir;
        if (Q === Os || Q === hi || Q === di || O === Os || O === hi || O === di)
          return cs;
        if (Q === Na && [Na, gi, Oa, Pa].indexOf(O) !== -1 || (Q === Oa || Q === gi) && (O === gi || O === tn) || (Q === Pa || Q === tn) && O === tn || O === Ta || O === Ps || O === Oc || Q === ja)
          return ir;
        if (Q === Ta && O === Wo) {
          for (; w === Ps; )
            w = e[--s];
          if (w === Wo)
            return ir;
        }
        if (Q === Ts && O === Ts) {
          for (var G = 0; w === Ts; )
            G++, w = e[--s];
          if (G % 2 === 0)
            return ir;
        }
        return cs;
      }, lo = function(r) {
        var e = Da(r), i = e.length, s = 0, w = 0, Q = e.map(_a);
        return {
          next: function() {
            if (s >= i)
              return { done: !0, value: null };
            for (var O = ir; s < i && (O = Pc(e, Q, ++s)) === ir; )
              ;
            if (O !== ir || s === i) {
              var G = Ma.apply(null, e.slice(w, s));
              return w = s, { value: G, done: !1 };
            }
            return { done: !0, value: null };
          }
        };
      }, Ka = function(r) {
        for (var e = lo(r), i = [], s; !(s = e.next()).done; )
          s.value && i.push(s.value.slice());
        return i;
      }, Xo = function(r) {
        var e = 123;
        if (r.createRange) {
          var i = r.createRange();
          if (i.getBoundingClientRect) {
            var s = r.createElement("boundtest");
            s.style.height = e + "px", s.style.display = "block", r.body.appendChild(s), i.selectNode(s);
            var w = i.getBoundingClientRect(), Q = Math.round(w.height);
            if (r.body.removeChild(s), Q === e)
              return !0;
          }
        }
        return !1;
      }, Pn = function(r) {
        var e = r.createElement("boundtest");
        e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", r.body.appendChild(e);
        var i = r.createRange();
        e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
        var s = e.firstChild, w = y(s.data).map(function(k) {
          return C(k);
        }), Q = 0, O = {}, G = w.every(function(k, iA) {
          i.setStart(s, Q), i.setEnd(s, Q + k.length);
          var fA = i.getBoundingClientRect();
          Q += k.length;
          var wA = fA.x > O.x || fA.y > O.y;
          return O = fA, iA === 0 ? !0 : wA;
        });
        return r.body.removeChild(e), G;
      }, Ra = function() {
        return typeof new Image().crossOrigin < "u";
      }, ka = function() {
        return typeof new XMLHttpRequest().responseType == "string";
      }, Tc = function(r) {
        var e = new Image(), i = r.createElement("canvas"), s = i.getContext("2d");
        if (!s)
          return !1;
        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
          s.drawImage(e, 0, 0), i.toDataURL();
        } catch {
          return !1;
        }
        return !0;
      }, Jo = function(r) {
        return r[0] === 0 && r[1] === 255 && r[2] === 0 && r[3] === 255;
      }, Ds = function(r) {
        var e = r.createElement("canvas"), i = 100;
        e.width = i, e.height = i;
        var s = e.getContext("2d");
        if (!s)
          return Promise.reject(!1);
        s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, i, i);
        var w = new Image(), Q = e.toDataURL();
        w.src = Q;
        var O = zo(i, i, 0, 0, w);
        return s.fillStyle = "red", s.fillRect(0, 0, i, i), Yo(O).then(function(G) {
          s.drawImage(G, 0, 0);
          var k = s.getImageData(0, 0, i, i).data;
          s.fillStyle = "red", s.fillRect(0, 0, i, i);
          var iA = r.createElement("div");
          return iA.style.backgroundImage = "url(" + Q + ")", iA.style.height = i + "px", Jo(k) ? Yo(zo(i, i, 0, 0, iA)) : Promise.reject(!1);
        }).then(function(G) {
          return s.drawImage(G, 0, 0), Jo(s.getImageData(0, 0, i, i).data);
        }).catch(function() {
          return !1;
        });
      }, zo = function(r, e, i, s, w) {
        var Q = "http://www.w3.org/2000/svg", O = document.createElementNS(Q, "svg"), G = document.createElementNS(Q, "foreignObject");
        return O.setAttributeNS(null, "width", r.toString()), O.setAttributeNS(null, "height", e.toString()), G.setAttributeNS(null, "width", "100%"), G.setAttributeNS(null, "height", "100%"), G.setAttributeNS(null, "x", i.toString()), G.setAttributeNS(null, "y", s.toString()), G.setAttributeNS(null, "externalResourcesRequired", "true"), O.appendChild(G), G.appendChild(w), O;
      }, Yo = function(r) {
        return new Promise(function(e, i) {
          var s = new Image();
          s.onload = function() {
            return e(s);
          }, s.onerror = i, s.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r));
        });
      }, Kt = {
        get SUPPORT_RANGE_BOUNDS() {
          var r = Xo(document);
          return Object.defineProperty(Kt, "SUPPORT_RANGE_BOUNDS", { value: r }), r;
        },
        get SUPPORT_WORD_BREAKING() {
          var r = Kt.SUPPORT_RANGE_BOUNDS && Pn(document);
          return Object.defineProperty(Kt, "SUPPORT_WORD_BREAKING", { value: r }), r;
        },
        get SUPPORT_SVG_DRAWING() {
          var r = Tc(document);
          return Object.defineProperty(Kt, "SUPPORT_SVG_DRAWING", { value: r }), r;
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
          var r = typeof Array.from == "function" && typeof window.fetch == "function" ? Ds(document) : Promise.resolve(!1);
          return Object.defineProperty(Kt, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: r }), r;
        },
        get SUPPORT_CORS_IMAGES() {
          var r = Ra();
          return Object.defineProperty(Kt, "SUPPORT_CORS_IMAGES", { value: r }), r;
        },
        get SUPPORT_RESPONSE_TYPE() {
          var r = ka();
          return Object.defineProperty(Kt, "SUPPORT_RESPONSE_TYPE", { value: r }), r;
        },
        get SUPPORT_CORS_XHR() {
          var r = "withCredentials" in new XMLHttpRequest();
          return Object.defineProperty(Kt, "SUPPORT_CORS_XHR", { value: r }), r;
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
          var r = !!(typeof Intl < "u" && Intl.Segmenter);
          return Object.defineProperty(Kt, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: r }), r;
        }
      }, Ms = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i) {
            this.text = e, this.bounds = i;
          }
          return r;
        }()
      ), Dc = function(r, e, i, s) {
        var w = Tn(e, i), Q = [], O = 0;
        return w.forEach(function(G) {
          if (i.textDecorationLine.length || G.trim().length > 0)
            if (Kt.SUPPORT_RANGE_BOUNDS) {
              var k = uo(s, O, G.length).getClientRects();
              if (k.length > 1) {
                var iA = _s(G), fA = 0;
                iA.forEach(function(xA) {
                  Q.push(new Ms(xA, f.fromDOMRectList(r, uo(s, fA + O, xA.length).getClientRects()))), fA += xA.length;
                });
              } else
                Q.push(new Ms(G, f.fromDOMRectList(r, k)));
            } else {
              var wA = s.splitText(G.length);
              Q.push(new Ms(G, pi(r, s))), s = wA;
            }
          else Kt.SUPPORT_RANGE_BOUNDS || (s = s.splitText(G.length));
          O += G.length;
        }), Q;
      }, pi = function(r, e) {
        var i = e.ownerDocument;
        if (i) {
          var s = i.createElement("html2canvaswrapper");
          s.appendChild(e.cloneNode(!0));
          var w = e.parentNode;
          if (w) {
            w.replaceChild(s, e);
            var Q = m(r, s);
            return s.firstChild && w.replaceChild(s.firstChild, s), Q;
          }
        }
        return f.EMPTY;
      }, uo = function(r, e, i) {
        var s = r.ownerDocument;
        if (!s)
          throw new Error("Node has no owner document");
        var w = s.createRange();
        return w.setStart(r, e), w.setEnd(r, e + i), w;
      }, _s = function(r) {
        if (Kt.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
          var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
          return Array.from(e.segment(r)).map(function(i) {
            return i.segment;
          });
        }
        return Ka(r);
      }, pn = function(r, e) {
        if (Kt.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
          var i = new Intl.Segmenter(void 0, {
            granularity: "word"
          });
          return Array.from(i.segment(r)).map(function(s) {
            return s.segment;
          });
        }
        return fo(r, e);
      }, Tn = function(r, e) {
        return e.letterSpacing !== 0 ? _s(r) : pn(r, e);
      }, Dn = [32, 160, 4961, 65792, 65793, 4153, 4241], fo = function(r, e) {
        for (var i = Ii(r, {
          lineBreak: e.lineBreak,
          wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
        }), s = [], w, Q = function() {
          if (w.value) {
            var O = w.value.slice(), G = y(O), k = "";
            G.forEach(function(iA) {
              Dn.indexOf(iA) === -1 ? k += C(iA) : (k.length && s.push(k), s.push(C(iA)), k = "");
            }), k.length && s.push(k);
          }
        }; !(w = i.next()).done; )
          Q();
        return s;
      }, qo = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i, s) {
            this.text = Ga(i.data, s.textTransform), this.textBounds = Dc(e, this.text, s, i);
          }
          return r;
        }()
      ), Ga = function(r, e) {
        switch (e) {
          case 1:
            return r.toLowerCase();
          case 3:
            return r.replace(Mc, Zo);
          case 2:
            return r.toUpperCase();
          default:
            return r;
        }
      }, Mc = /(^|\s|:|-|\(|\))([a-z])/g, Zo = function(r, e, i) {
        return r.length > 0 ? e + i.toUpperCase() : r;
      }, ho = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w.src = s.currentSrc || s.src, w.intrinsicWidth = s.naturalWidth, w.intrinsicHeight = s.naturalHeight, w.context.cache.addImage(w.src), w;
          }
          return e;
        }(me)
      ), Fl = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w.canvas = s, w.intrinsicWidth = s.width, w.intrinsicHeight = s.height, w;
          }
          return e;
        }(me)
      ), bl = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this, Q = new XMLSerializer(), O = m(i, s);
            return s.setAttribute("width", O.width + "px"), s.setAttribute("height", O.height + "px"), w.svg = "data:image/svg+xml," + encodeURIComponent(Q.serializeToString(s)), w.intrinsicWidth = s.width.baseVal.value, w.intrinsicHeight = s.height.baseVal.value, w.context.cache.addImage(w.svg), w;
          }
          return e;
        }(me)
      ), Ql = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w.value = s.value, w;
          }
          return e;
        }(me)
      ), _c = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w.start = s.start, w.reversed = typeof s.reversed == "boolean" && s.reversed === !0, w;
          }
          return e;
        }(me)
      ), Wu = [
        {
          type: 15,
          flags: 0,
          unit: "px",
          number: 3
        }
      ], Xu = [
        {
          type: 16,
          flags: 0,
          number: 50
        }
      ], Ju = function(r) {
        return r.width > r.height ? new f(r.left + (r.width - r.height) / 2, r.top, r.height, r.height) : r.width < r.height ? new f(r.left, r.top + (r.height - r.width) / 2, r.width, r.width) : r;
      }, zu = function(r) {
        var e = r.type === Yu ? new Array(r.value.length + 1).join("•") : r.value;
        return e.length === 0 ? r.placeholder || "" : e;
      }, Va = "checkbox", Wa = "radio", Yu = "password", Ul = 707406591, Kc = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            switch (w.type = s.type.toLowerCase(), w.checked = s.checked, w.value = zu(s), (w.type === Va || w.type === Wa) && (w.styles.backgroundColor = 3739148031, w.styles.borderTopColor = w.styles.borderRightColor = w.styles.borderBottomColor = w.styles.borderLeftColor = 2779096575, w.styles.borderTopWidth = w.styles.borderRightWidth = w.styles.borderBottomWidth = w.styles.borderLeftWidth = 1, w.styles.borderTopStyle = w.styles.borderRightStyle = w.styles.borderBottomStyle = w.styles.borderLeftStyle = 1, w.styles.backgroundClip = [
              0
              /* BORDER_BOX */
            ], w.styles.backgroundOrigin = [
              0
              /* BORDER_BOX */
            ], w.bounds = Ju(w.bounds)), w.type) {
              case Va:
                w.styles.borderTopRightRadius = w.styles.borderTopLeftRadius = w.styles.borderBottomRightRadius = w.styles.borderBottomLeftRadius = Wu;
                break;
              case Wa:
                w.styles.borderTopRightRadius = w.styles.borderTopLeftRadius = w.styles.borderBottomRightRadius = w.styles.borderBottomLeftRadius = Xu;
                break;
            }
            return w;
          }
          return e;
        }(me)
      ), El = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this, Q = s.options[s.selectedIndex || 0];
            return w.value = Q && Q.text || "", w;
          }
          return e;
        }(me)
      ), Ll = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w.value = s.value, w;
          }
          return e;
        }(me)
      ), Il = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            w.src = s.src, w.width = parseInt(s.width, 10) || 0, w.height = parseInt(s.height, 10) || 0, w.backgroundColor = w.styles.backgroundColor;
            try {
              if (s.contentWindow && s.contentWindow.document && s.contentWindow.document.documentElement) {
                w.tree = Sl(i, s.contentWindow.document.documentElement);
                var Q = s.contentWindow.document.documentElement ? An(i, getComputedStyle(s.contentWindow.document.documentElement).backgroundColor) : Et.TRANSPARENT, O = s.contentWindow.document.body ? An(i, getComputedStyle(s.contentWindow.document.body).backgroundColor) : Et.TRANSPARENT;
                w.backgroundColor = Zr(Q) ? Zr(O) ? w.styles.backgroundColor : O : Q;
              }
            } catch {
            }
            return w;
          }
          return e;
        }(me)
      ), qu = ["OL", "UL", "MENU"], Xa = function(r, e, i, s) {
        for (var w = e.firstChild, Q = void 0; w; w = Q)
          if (Q = w.nextSibling, Hl(w) && w.data.trim().length > 0)
            i.textNodes.push(new qo(r, w, i.styles));
          else if (go(w))
            if (Dl(w) && w.assignedNodes)
              w.assignedNodes().forEach(function(G) {
                return Xa(r, G, i, s);
              });
            else {
              var O = xl(r, w);
              O.styles.isVisible() && (Zu(w, O, s) ? O.flags |= 4 : $u(O.styles) && (O.flags |= 2), qu.indexOf(w.tagName) !== -1 && (O.flags |= 8), i.elements.push(O), w.slot, w.shadowRoot ? Xa(r, w.shadowRoot, O, s) : !za(w) && !jl(w) && !Ya(w) && Xa(r, w, O, s));
            }
      }, xl = function(r, e) {
        return Gc(e) ? new ho(r, e) : Nl(e) ? new Fl(r, e) : jl(e) ? new bl(r, e) : Af(e) ? new Ql(r, e) : ef(e) ? new _c(r, e) : tf(e) ? new Kc(r, e) : Ya(e) ? new El(r, e) : za(e) ? new Ll(r, e) : Pl(e) ? new Il(r, e) : new me(r, e);
      }, Sl = function(r, e) {
        var i = xl(r, e);
        return i.flags |= 4, Xa(r, e, i, i), i;
      }, Zu = function(r, e, i) {
        return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || kc(r) && i.styles.isTransparent();
      }, $u = function(r) {
        return r.isPositioned() || r.isFloating();
      }, Hl = function(r) {
        return r.nodeType === Node.TEXT_NODE;
      }, go = function(r) {
        return r.nodeType === Node.ELEMENT_NODE;
      }, Rc = function(r) {
        return go(r) && typeof r.style < "u" && !Ja(r);
      }, Ja = function(r) {
        return typeof r.className == "object";
      }, Af = function(r) {
        return r.tagName === "LI";
      }, ef = function(r) {
        return r.tagName === "OL";
      }, tf = function(r) {
        return r.tagName === "INPUT";
      }, rf = function(r) {
        return r.tagName === "HTML";
      }, jl = function(r) {
        return r.tagName === "svg";
      }, kc = function(r) {
        return r.tagName === "BODY";
      }, Nl = function(r) {
        return r.tagName === "CANVAS";
      }, Ol = function(r) {
        return r.tagName === "VIDEO";
      }, Gc = function(r) {
        return r.tagName === "IMG";
      }, Pl = function(r) {
        return r.tagName === "IFRAME";
      }, Tl = function(r) {
        return r.tagName === "STYLE";
      }, nf = function(r) {
        return r.tagName === "SCRIPT";
      }, za = function(r) {
        return r.tagName === "TEXTAREA";
      }, Ya = function(r) {
        return r.tagName === "SELECT";
      }, Dl = function(r) {
        return r.tagName === "SLOT";
      }, Ml = function(r) {
        return r.tagName.indexOf("-") > 0;
      }, sf = (
        /** @class */
        function() {
          function r() {
            this.counters = {};
          }
          return r.prototype.getCounterValue = function(e) {
            var i = this.counters[e];
            return i && i.length ? i[i.length - 1] : 1;
          }, r.prototype.getCounterValues = function(e) {
            var i = this.counters[e];
            return i || [];
          }, r.prototype.pop = function(e) {
            var i = this;
            e.forEach(function(s) {
              return i.counters[s].pop();
            });
          }, r.prototype.parse = function(e) {
            var i = this, s = e.counterIncrement, w = e.counterReset, Q = !0;
            s !== null && s.forEach(function(G) {
              var k = i.counters[G.counter];
              k && G.increment !== 0 && (Q = !1, k.length || k.push(1), k[Math.max(0, k.length - 1)] += G.increment);
            });
            var O = [];
            return Q && w.forEach(function(G) {
              var k = i.counters[G.counter];
              O.push(G.counter), k || (k = i.counters[G.counter] = []), k.push(G.reset);
            }), O;
          }, r;
        }()
      ), _l = {
        integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
      }, Kl = {
        integers: [
          9e3,
          8e3,
          7e3,
          6e3,
          5e3,
          4e3,
          3e3,
          2e3,
          1e3,
          900,
          800,
          700,
          600,
          500,
          400,
          300,
          200,
          100,
          90,
          80,
          70,
          60,
          50,
          40,
          30,
          20,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1
        ],
        values: [
          "Ք",
          "Փ",
          "Ւ",
          "Ց",
          "Ր",
          "Տ",
          "Վ",
          "Ս",
          "Ռ",
          "Ջ",
          "Պ",
          "Չ",
          "Ո",
          "Շ",
          "Ն",
          "Յ",
          "Մ",
          "Ճ",
          "Ղ",
          "Ձ",
          "Հ",
          "Կ",
          "Ծ",
          "Խ",
          "Լ",
          "Ի",
          "Ժ",
          "Թ",
          "Ը",
          "Է",
          "Զ",
          "Ե",
          "Դ",
          "Գ",
          "Բ",
          "Ա"
        ]
      }, of = {
        integers: [
          1e4,
          9e3,
          8e3,
          7e3,
          6e3,
          5e3,
          4e3,
          3e3,
          2e3,
          1e3,
          400,
          300,
          200,
          100,
          90,
          80,
          70,
          60,
          50,
          40,
          30,
          20,
          19,
          18,
          17,
          16,
          15,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1
        ],
        values: [
          "י׳",
          "ט׳",
          "ח׳",
          "ז׳",
          "ו׳",
          "ה׳",
          "ד׳",
          "ג׳",
          "ב׳",
          "א׳",
          "ת",
          "ש",
          "ר",
          "ק",
          "צ",
          "פ",
          "ע",
          "ס",
          "נ",
          "מ",
          "ל",
          "כ",
          "יט",
          "יח",
          "יז",
          "טז",
          "טו",
          "י",
          "ט",
          "ח",
          "ז",
          "ו",
          "ה",
          "ד",
          "ג",
          "ב",
          "א"
        ]
      }, af = {
        integers: [
          1e4,
          9e3,
          8e3,
          7e3,
          6e3,
          5e3,
          4e3,
          3e3,
          2e3,
          1e3,
          900,
          800,
          700,
          600,
          500,
          400,
          300,
          200,
          100,
          90,
          80,
          70,
          60,
          50,
          40,
          30,
          20,
          10,
          9,
          8,
          7,
          6,
          5,
          4,
          3,
          2,
          1
        ],
        values: [
          "ჵ",
          "ჰ",
          "ჯ",
          "ჴ",
          "ხ",
          "ჭ",
          "წ",
          "ძ",
          "ც",
          "ჩ",
          "შ",
          "ყ",
          "ღ",
          "ქ",
          "ფ",
          "ჳ",
          "ტ",
          "ს",
          "რ",
          "ჟ",
          "პ",
          "ო",
          "ჲ",
          "ნ",
          "მ",
          "ლ",
          "კ",
          "ი",
          "თ",
          "ჱ",
          "ზ",
          "ვ",
          "ე",
          "დ",
          "გ",
          "ბ",
          "ა"
        ]
      }, po = function(r, e, i, s, w, Q) {
        return r < e || r > i ? Aa(r, w, Q.length > 0) : s.integers.reduce(function(O, G, k) {
          for (; r >= G; )
            r -= G, O += s.values[k];
          return O;
        }, "") + Q;
      }, Rl = function(r, e, i, s) {
        var w = "";
        do
          i || r--, w = s(r) + w, r /= e;
        while (r * e >= e);
        return w;
      }, It = function(r, e, i, s, w) {
        var Q = i - e + 1;
        return (r < 0 ? "-" : "") + (Rl(Math.abs(r), Q, s, function(O) {
          return C(Math.floor(O % Q) + e);
        }) + w);
      }, Bi = function(r, e, i) {
        i === void 0 && (i = ". ");
        var s = e.length;
        return Rl(Math.abs(r), s, !1, function(w) {
          return e[Math.floor(w % s)];
        }) + i;
      }, Bo = 1, Ks = 2, Rs = 4, $o = 8, ls = function(r, e, i, s, w, Q) {
        if (r < -9999 || r > 9999)
          return Aa(r, 4, w.length > 0);
        var O = Math.abs(r), G = w;
        if (O === 0)
          return e[0] + G;
        for (var k = 0; O > 0 && k <= 4; k++) {
          var iA = O % 10;
          iA === 0 && oA(Q, Bo) && G !== "" ? G = e[iA] + G : iA > 1 || iA === 1 && k === 0 || iA === 1 && k === 1 && oA(Q, Ks) || iA === 1 && k === 1 && oA(Q, Rs) && r > 100 || iA === 1 && k > 1 && oA(Q, $o) ? G = e[iA] + (k > 0 ? i[k - 1] : "") + G : iA === 1 && k > 0 && (G = i[k - 1] + G), O = Math.floor(O / 10);
        }
        return (r < 0 ? s : "") + G;
      }, kl = "十百千萬", Gl = "拾佰仟萬", Vl = "マイナス", Vc = "마이너스", Aa = function(r, e, i) {
        var s = i ? ". " : "", w = i ? "、" : "", Q = i ? ", " : "", O = i ? " " : "";
        switch (e) {
          case 0:
            return "•" + O;
          case 1:
            return "◦" + O;
          case 2:
            return "◾" + O;
          case 5:
            var G = It(r, 48, 57, !0, s);
            return G.length < 4 ? "0" + G : G;
          case 4:
            return Bi(r, "〇一二三四五六七八九", w);
          case 6:
            return po(r, 1, 3999, _l, 3, s).toLowerCase();
          case 7:
            return po(r, 1, 3999, _l, 3, s);
          case 8:
            return It(r, 945, 969, !1, s);
          case 9:
            return It(r, 97, 122, !1, s);
          case 10:
            return It(r, 65, 90, !1, s);
          case 11:
            return It(r, 1632, 1641, !0, s);
          case 12:
          case 49:
            return po(r, 1, 9999, Kl, 3, s);
          case 35:
            return po(r, 1, 9999, Kl, 3, s).toLowerCase();
          case 13:
            return It(r, 2534, 2543, !0, s);
          case 14:
          case 30:
            return It(r, 6112, 6121, !0, s);
          case 15:
            return Bi(r, "子丑寅卯辰巳午未申酉戌亥", w);
          case 16:
            return Bi(r, "甲乙丙丁戊己庚辛壬癸", w);
          case 17:
          case 48:
            return ls(r, "零一二三四五六七八九", kl, "負", w, Ks | Rs | $o);
          case 47:
            return ls(r, "零壹貳參肆伍陸柒捌玖", Gl, "負", w, Bo | Ks | Rs | $o);
          case 42:
            return ls(r, "零一二三四五六七八九", kl, "负", w, Ks | Rs | $o);
          case 41:
            return ls(r, "零壹贰叁肆伍陆柒捌玖", Gl, "负", w, Bo | Ks | Rs | $o);
          case 26:
            return ls(r, "〇一二三四五六七八九", "十百千万", Vl, w, 0);
          case 25:
            return ls(r, "零壱弐参四伍六七八九", "拾百千万", Vl, w, Bo | Ks | Rs);
          case 31:
            return ls(r, "영일이삼사오육칠팔구", "십백천만", Vc, Q, Bo | Ks | Rs);
          case 33:
            return ls(r, "零一二三四五六七八九", "十百千萬", Vc, Q, 0);
          case 32:
            return ls(r, "零壹貳參四五六七八九", "拾百千", Vc, Q, Bo | Ks | Rs);
          case 18:
            return It(r, 2406, 2415, !0, s);
          case 20:
            return po(r, 1, 19999, af, 3, s);
          case 21:
            return It(r, 2790, 2799, !0, s);
          case 22:
            return It(r, 2662, 2671, !0, s);
          case 22:
            return po(r, 1, 10999, of, 3, s);
          case 23:
            return Bi(r, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
          case 24:
            return Bi(r, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
          case 27:
            return It(r, 3302, 3311, !0, s);
          case 28:
            return Bi(r, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", w);
          case 29:
            return Bi(r, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", w);
          case 34:
            return It(r, 3792, 3801, !0, s);
          case 37:
            return It(r, 6160, 6169, !0, s);
          case 38:
            return It(r, 4160, 4169, !0, s);
          case 39:
            return It(r, 2918, 2927, !0, s);
          case 40:
            return It(r, 1776, 1785, !0, s);
          case 43:
            return It(r, 3046, 3055, !0, s);
          case 44:
            return It(r, 3174, 3183, !0, s);
          case 45:
            return It(r, 3664, 3673, !0, s);
          case 46:
            return It(r, 3872, 3881, !0, s);
          case 3:
          default:
            return It(r, 48, 57, !0, s);
        }
      }, Wl = "data-html2canvas-ignore", Xl = (
        /** @class */
        function() {
          function r(e, i, s) {
            if (this.context = e, this.options = s, this.scrolledElements = [], this.referenceElement = i, this.counters = new sf(), this.quoteDepth = 0, !i.ownerDocument)
              throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(i.ownerDocument.documentElement, !1);
          }
          return r.prototype.toIFrame = function(e, i) {
            var s = this, w = cf(e, i);
            if (!w.contentWindow)
              return Promise.reject("Unable to find iframe window");
            var Q = e.defaultView.pageXOffset, O = e.defaultView.pageYOffset, G = w.contentWindow, k = G.document, iA = ff(w).then(function() {
              return u(s, void 0, void 0, function() {
                var fA, wA;
                return p(this, function(xA) {
                  switch (xA.label) {
                    case 0:
                      return this.scrolledElements.forEach(pf), G && (G.scrollTo(i.left, i.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (G.scrollY !== i.top || G.scrollX !== i.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(G.scrollX - i.left, G.scrollY - i.top, 0, 0))), fA = this.options.onclone, wA = this.clonedReferenceElement, typeof wA > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : k.fonts && k.fonts.ready ? [4, k.fonts.ready] : [3, 2];
                    case 1:
                      xA.sent(), xA.label = 2;
                    case 2:
                      return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, uf(k)] : [3, 4];
                    case 3:
                      xA.sent(), xA.label = 4;
                    case 4:
                      return typeof fA == "function" ? [2, Promise.resolve().then(function() {
                        return fA(k, wA);
                      }).then(function() {
                        return w;
                      })] : [2, w];
                  }
                });
              });
            });
            return k.open(), k.write(df(document.doctype) + "<html></html>"), gf(this.referenceElement.ownerDocument, Q, O), k.replaceChild(k.adoptNode(this.documentElement), k.documentElement), k.close(), iA;
          }, r.prototype.createElementClone = function(e) {
            if (Ye(
              e,
              2
              /* CLONE */
            ))
              debugger;
            if (Nl(e))
              return this.createCanvasClone(e);
            if (Ol(e))
              return this.createVideoClone(e);
            if (Tl(e))
              return this.createStyleClone(e);
            var i = e.cloneNode(!1);
            return Gc(i) && (Gc(e) && e.currentSrc && e.currentSrc !== e.src && (i.src = e.currentSrc, i.srcset = ""), i.loading === "lazy" && (i.loading = "eager")), Ml(i) ? this.createCustomElementClone(i) : i;
          }, r.prototype.createCustomElementClone = function(e) {
            var i = document.createElement("html2canvascustomelement");
            return Wc(e.style, i), i;
          }, r.prototype.createStyleClone = function(e) {
            try {
              var i = e.sheet;
              if (i && i.cssRules) {
                var s = [].slice.call(i.cssRules, 0).reduce(function(Q, O) {
                  return O && typeof O.cssText == "string" ? Q + O.cssText : Q;
                }, ""), w = e.cloneNode(!1);
                return w.textContent = s, w;
              }
            } catch (Q) {
              if (this.context.logger.error("Unable to access cssRules property", Q), Q.name !== "SecurityError")
                throw Q;
            }
            return e.cloneNode(!1);
          }, r.prototype.createCanvasClone = function(e) {
            var i;
            if (this.options.inlineImages && e.ownerDocument) {
              var s = e.ownerDocument.createElement("img");
              try {
                return s.src = e.toDataURL(), s;
              } catch {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
              }
            }
            var w = e.cloneNode(!1);
            try {
              w.width = e.width, w.height = e.height;
              var Q = e.getContext("2d"), O = w.getContext("2d");
              if (O)
                if (!this.options.allowTaint && Q)
                  O.putImageData(Q.getImageData(0, 0, e.width, e.height), 0, 0);
                else {
                  var G = (i = e.getContext("webgl2")) !== null && i !== void 0 ? i : e.getContext("webgl");
                  if (G) {
                    var k = G.getContextAttributes();
                    (k == null ? void 0 : k.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
                  }
                  O.drawImage(e, 0, 0);
                }
              return w;
            } catch {
              this.context.logger.info("Unable to clone canvas as it is tainted", e);
            }
            return w;
          }, r.prototype.createVideoClone = function(e) {
            var i = e.ownerDocument.createElement("canvas");
            i.width = e.offsetWidth, i.height = e.offsetHeight;
            var s = i.getContext("2d");
            try {
              return s && (s.drawImage(e, 0, 0, i.width, i.height), this.options.allowTaint || s.getImageData(0, 0, i.width, i.height)), i;
            } catch {
              this.context.logger.info("Unable to clone video as it is tainted", e);
            }
            var w = e.ownerDocument.createElement("canvas");
            return w.width = e.offsetWidth, w.height = e.offsetHeight, w;
          }, r.prototype.appendChildNode = function(e, i, s) {
            (!go(i) || !nf(i) && !i.hasAttribute(Wl) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(i))) && (!this.options.copyStyles || !go(i) || !Tl(i)) && e.appendChild(this.cloneNode(i, s));
          }, r.prototype.cloneChildNodes = function(e, i, s) {
            for (var w = this, Q = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; Q; Q = Q.nextSibling)
              if (go(Q) && Dl(Q) && typeof Q.assignedNodes == "function") {
                var O = Q.assignedNodes();
                O.length && O.forEach(function(G) {
                  return w.appendChildNode(i, G, s);
                });
              } else
                this.appendChildNode(i, Q, s);
          }, r.prototype.cloneNode = function(e, i) {
            if (Hl(e))
              return document.createTextNode(e.data);
            if (!e.ownerDocument)
              return e.cloneNode(!1);
            var s = e.ownerDocument.defaultView;
            if (s && go(e) && (Rc(e) || Ja(e))) {
              var w = this.createElementClone(e);
              w.style.transitionProperty = "none";
              var Q = s.getComputedStyle(e), O = s.getComputedStyle(e, ":before"), G = s.getComputedStyle(e, ":after");
              this.referenceElement === e && Rc(w) && (this.clonedReferenceElement = w), kc(w) && vf(w);
              var k = this.counters.parse(new ze(this.context, Q)), iA = this.resolvePseudoContent(e, w, O, ea.BEFORE);
              Ml(e) && (i = !0), Ol(e) || this.cloneChildNodes(e, w, i), iA && w.insertBefore(iA, w.firstChild);
              var fA = this.resolvePseudoContent(e, w, G, ea.AFTER);
              return fA && w.appendChild(fA), this.counters.pop(k), (Q && (this.options.copyStyles || Ja(e)) && !Pl(e) || i) && Wc(Q, w), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([w, e.scrollLeft, e.scrollTop]), (za(e) || Ya(e)) && (za(w) || Ya(w)) && (w.value = e.value), w;
            }
            return e.cloneNode(!1);
          }, r.prototype.resolvePseudoContent = function(e, i, s, w) {
            var Q = this;
            if (s) {
              var O = s.content, G = i.ownerDocument;
              if (!(!G || !O || O === "none" || O === "-moz-alt-content" || s.display === "none")) {
                this.counters.parse(new ze(this.context, s));
                var k = new Je(this.context, s), iA = G.createElement("html2canvaspseudoelement");
                Wc(s, iA), k.content.forEach(function(wA) {
                  if (wA.type === 0)
                    iA.appendChild(G.createTextNode(wA.value));
                  else if (wA.type === 22) {
                    var xA = G.createElement("img");
                    xA.src = wA.value, xA.style.opacity = "1", iA.appendChild(xA);
                  } else if (wA.type === 18) {
                    if (wA.name === "attr") {
                      var oe = wA.values.filter(Le);
                      oe.length && iA.appendChild(G.createTextNode(e.getAttribute(oe[0].value) || ""));
                    } else if (wA.name === "counter") {
                      var JA = wA.values.filter(jt), ee = JA[0], De = JA[1];
                      if (ee && Le(ee)) {
                        var he = Q.counters.getCounterValue(ee.value), ue = De && Le(De) ? ko.parse(Q.context, De.value) : 3;
                        iA.appendChild(G.createTextNode(Aa(he, ue, !1)));
                      }
                    } else if (wA.name === "counters") {
                      var qe = wA.values.filter(jt), ee = qe[0], _e = qe[1], De = qe[2];
                      if (ee && Le(ee)) {
                        var Se = Q.counters.getCounterValues(ee.value), se = De && Le(De) ? ko.parse(Q.context, De.value) : 3, Ve = _e && _e.type === 0 ? _e.value : "", We = Se.map(function(xr) {
                          return Aa(xr, se, !1);
                        }).join(Ve);
                        iA.appendChild(G.createTextNode(We));
                      }
                    }
                  } else if (wA.type === 20)
                    switch (wA.value) {
                      case "open-quote":
                        iA.appendChild(G.createTextNode(OA(k.quotes, Q.quoteDepth++, !0)));
                        break;
                      case "close-quote":
                        iA.appendChild(G.createTextNode(OA(k.quotes, --Q.quoteDepth, !1)));
                        break;
                      default:
                        iA.appendChild(G.createTextNode(wA.value));
                    }
                }), iA.className = Xc + " " + Jc;
                var fA = w === ea.BEFORE ? " " + Xc : " " + Jc;
                return Ja(i) ? i.className.baseValue += fA : i.className += fA, iA;
              }
            }
          }, r.destroy = function(e) {
            return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
          }, r;
        }()
      ), ea;
      (function(r) {
        r[r.BEFORE = 0] = "BEFORE", r[r.AFTER = 1] = "AFTER";
      })(ea || (ea = {}));
      var cf = function(r, e) {
        var i = r.createElement("iframe");
        return i.className = "html2canvas-container", i.style.visibility = "hidden", i.style.position = "fixed", i.style.left = "-10000px", i.style.top = "0px", i.style.border = "0", i.width = e.width.toString(), i.height = e.height.toString(), i.scrolling = "no", i.setAttribute(Wl, "true"), r.body.appendChild(i), i;
      }, lf = function(r) {
        return new Promise(function(e) {
          if (r.complete) {
            e();
            return;
          }
          if (!r.src) {
            e();
            return;
          }
          r.onload = e, r.onerror = e;
        });
      }, uf = function(r) {
        return Promise.all([].slice.call(r.images, 0).map(lf));
      }, ff = function(r) {
        return new Promise(function(e, i) {
          var s = r.contentWindow;
          if (!s)
            return i("No window assigned for iframe");
          var w = s.document;
          s.onload = r.onload = function() {
            s.onload = r.onload = null;
            var Q = setInterval(function() {
              w.body.childNodes.length > 0 && w.readyState === "complete" && (clearInterval(Q), e(r));
            }, 50);
          };
        });
      }, hf = [
        "all",
        "d",
        "content"
        // Safari shows pseudoelements if content is set
      ], Wc = function(r, e) {
        for (var i = r.length - 1; i >= 0; i--) {
          var s = r.item(i);
          hf.indexOf(s) === -1 && e.style.setProperty(s, r.getPropertyValue(s));
        }
        return e;
      }, df = function(r) {
        var e = "";
        return r && (e += "<!DOCTYPE ", r.name && (e += r.name), r.internalSubset && (e += r.internalSubset), r.publicId && (e += '"' + r.publicId + '"'), r.systemId && (e += '"' + r.systemId + '"'), e += ">"), e;
      }, gf = function(r, e, i) {
        r && r.defaultView && (e !== r.defaultView.pageXOffset || i !== r.defaultView.pageYOffset) && r.defaultView.scrollTo(e, i);
      }, pf = function(r) {
        var e = r[0], i = r[1], s = r[2];
        e.scrollLeft = i, e.scrollTop = s;
      }, Bf = ":before", wf = ":after", Xc = "___html2canvas___pseudoelement_before", Jc = "___html2canvas___pseudoelement_after", Jl = `{
    content: "" !important;
    display: none !important;
}`, vf = function(r) {
        mf(r, "." + Xc + Bf + Jl + `
         .` + Jc + wf + Jl);
      }, mf = function(r, e) {
        var i = r.ownerDocument;
        if (i) {
          var s = i.createElement("style");
          s.textContent = e, r.appendChild(s);
        }
      }, zl = (
        /** @class */
        function() {
          function r() {
          }
          return r.getOrigin = function(e) {
            var i = r._link;
            return i ? (i.href = e, i.href = i.href, i.protocol + i.hostname + i.port) : "about:blank";
          }, r.isSameOrigin = function(e) {
            return r.getOrigin(e) === r._origin;
          }, r.setContext = function(e) {
            r._link = e.document.createElement("a"), r._origin = r.getOrigin(e.location.href);
          }, r._origin = "about:blank", r;
        }()
      ), yf = (
        /** @class */
        function() {
          function r(e, i) {
            this.context = e, this._options = i, this._cache = {};
          }
          return r.prototype.addImage = function(e) {
            var i = Promise.resolve();
            return this.has(e) || (Yc(e) || Qf(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
            }), i;
          }, r.prototype.match = function(e) {
            return this._cache[e];
          }, r.prototype.loadImage = function(e) {
            return u(this, void 0, void 0, function() {
              var i, s, w, Q, O = this;
              return p(this, function(G) {
                switch (G.label) {
                  case 0:
                    return i = zl.isSameOrigin(e), s = !zc(e) && this._options.useCORS === !0 && Kt.SUPPORT_CORS_IMAGES && !i, w = !zc(e) && !i && !Yc(e) && typeof this._options.proxy == "string" && Kt.SUPPORT_CORS_XHR && !s, !i && this._options.allowTaint === !1 && !zc(e) && !Yc(e) && !w && !s ? [
                      2
                      /*return*/
                    ] : (Q = e, w ? [4, this.proxy(Q)] : [3, 2]);
                  case 1:
                    Q = G.sent(), G.label = 2;
                  case 2:
                    return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(k, iA) {
                      var fA = new Image();
                      fA.onload = function() {
                        return k(fA);
                      }, fA.onerror = iA, (Uf(Q) || s) && (fA.crossOrigin = "anonymous"), fA.src = Q, fA.complete === !0 && setTimeout(function() {
                        return k(fA);
                      }, 500), O._options.imageTimeout > 0 && setTimeout(function() {
                        return iA("Timed out (" + O._options.imageTimeout + "ms) loading image");
                      }, O._options.imageTimeout);
                    })];
                  case 3:
                    return [2, G.sent()];
                }
              });
            });
          }, r.prototype.has = function(e) {
            return typeof this._cache[e] < "u";
          }, r.prototype.keys = function() {
            return Promise.resolve(Object.keys(this._cache));
          }, r.prototype.proxy = function(e) {
            var i = this, s = this._options.proxy;
            if (!s)
              throw new Error("No proxy defined");
            var w = e.substring(0, 256);
            return new Promise(function(Q, O) {
              var G = Kt.SUPPORT_RESPONSE_TYPE ? "blob" : "text", k = new XMLHttpRequest();
              k.onload = function() {
                if (k.status === 200)
                  if (G === "text")
                    Q(k.response);
                  else {
                    var wA = new FileReader();
                    wA.addEventListener("load", function() {
                      return Q(wA.result);
                    }, !1), wA.addEventListener("error", function(xA) {
                      return O(xA);
                    }, !1), wA.readAsDataURL(k.response);
                  }
                else
                  O("Failed to proxy resource " + w + " with status code " + k.status);
              }, k.onerror = O;
              var iA = s.indexOf("?") > -1 ? "&" : "?";
              if (k.open("GET", "" + s + iA + "url=" + encodeURIComponent(e) + "&responseType=" + G), G !== "text" && k instanceof XMLHttpRequest && (k.responseType = G), i._options.imageTimeout) {
                var fA = i._options.imageTimeout;
                k.timeout = fA, k.ontimeout = function() {
                  return O("Timed out (" + fA + "ms) proxying " + w);
                };
              }
              k.send();
            });
          }, r;
        }()
      ), Cf = /^data:image\/svg\+xml/i, Ff = /^data:image\/.*;base64,/i, bf = /^data:image\/.*/i, Qf = function(r) {
        return Kt.SUPPORT_SVG_DRAWING || !Ef(r);
      }, zc = function(r) {
        return bf.test(r);
      }, Uf = function(r) {
        return Ff.test(r);
      }, Yc = function(r) {
        return r.substr(0, 4) === "blob";
      }, Ef = function(r) {
        return r.substr(-3).toLowerCase() === "svg" || Cf.test(r);
      }, ne = (
        /** @class */
        function() {
          function r(e, i) {
            this.type = 0, this.x = e, this.y = i;
          }
          return r.prototype.add = function(e, i) {
            return new r(this.x + e, this.y + i);
          }, r;
        }()
      ), wo = function(r, e, i) {
        return new ne(r.x + (e.x - r.x) * i, r.y + (e.y - r.y) * i);
      }, qa = (
        /** @class */
        function() {
          function r(e, i, s, w) {
            this.type = 1, this.start = e, this.startControl = i, this.endControl = s, this.end = w;
          }
          return r.prototype.subdivide = function(e, i) {
            var s = wo(this.start, this.startControl, e), w = wo(this.startControl, this.endControl, e), Q = wo(this.endControl, this.end, e), O = wo(s, w, e), G = wo(w, Q, e), k = wo(O, G, e);
            return i ? new r(this.start, s, O, k) : new r(k, G, Q, this.end);
          }, r.prototype.add = function(e, i) {
            return new r(this.start.add(e, i), this.startControl.add(e, i), this.endControl.add(e, i), this.end.add(e, i));
          }, r.prototype.reverse = function() {
            return new r(this.end, this.endControl, this.startControl, this.start);
          }, r;
        }()
      ), rn = function(r) {
        return r.type === 1;
      }, Lf = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e) {
            var i = e.styles, s = e.bounds, w = Ot(i.borderTopLeftRadius, s.width, s.height), Q = w[0], O = w[1], G = Ot(i.borderTopRightRadius, s.width, s.height), k = G[0], iA = G[1], fA = Ot(i.borderBottomRightRadius, s.width, s.height), wA = fA[0], xA = fA[1], oe = Ot(i.borderBottomLeftRadius, s.width, s.height), JA = oe[0], ee = oe[1], De = [];
            De.push((Q + k) / s.width), De.push((JA + wA) / s.width), De.push((O + ee) / s.height), De.push((iA + xA) / s.height);
            var he = Math.max.apply(Math, De);
            he > 1 && (Q /= he, O /= he, k /= he, iA /= he, wA /= he, xA /= he, JA /= he, ee /= he);
            var ue = s.width - k, qe = s.height - xA, _e = s.width - wA, Se = s.height - ee, se = i.borderTopWidth, Ve = i.borderRightWidth, We = i.borderBottomWidth, Ne = i.borderLeftWidth, Tt = Xe(i.paddingTop, e.bounds.width), xr = Xe(i.paddingRight, e.bounds.width), Wr = Xe(i.paddingBottom, e.bounds.width), it = Xe(i.paddingLeft, e.bounds.width);
            this.topLeftBorderDoubleOuterBox = Q > 0 || O > 0 ? pt(s.left + Ne / 3, s.top + se / 3, Q - Ne / 3, O - se / 3, $e.TOP_LEFT) : new ne(s.left + Ne / 3, s.top + se / 3), this.topRightBorderDoubleOuterBox = Q > 0 || O > 0 ? pt(s.left + ue, s.top + se / 3, k - Ve / 3, iA - se / 3, $e.TOP_RIGHT) : new ne(s.left + s.width - Ve / 3, s.top + se / 3), this.bottomRightBorderDoubleOuterBox = wA > 0 || xA > 0 ? pt(s.left + _e, s.top + qe, wA - Ve / 3, xA - We / 3, $e.BOTTOM_RIGHT) : new ne(s.left + s.width - Ve / 3, s.top + s.height - We / 3), this.bottomLeftBorderDoubleOuterBox = JA > 0 || ee > 0 ? pt(s.left + Ne / 3, s.top + Se, JA - Ne / 3, ee - We / 3, $e.BOTTOM_LEFT) : new ne(s.left + Ne / 3, s.top + s.height - We / 3), this.topLeftBorderDoubleInnerBox = Q > 0 || O > 0 ? pt(s.left + Ne * 2 / 3, s.top + se * 2 / 3, Q - Ne * 2 / 3, O - se * 2 / 3, $e.TOP_LEFT) : new ne(s.left + Ne * 2 / 3, s.top + se * 2 / 3), this.topRightBorderDoubleInnerBox = Q > 0 || O > 0 ? pt(s.left + ue, s.top + se * 2 / 3, k - Ve * 2 / 3, iA - se * 2 / 3, $e.TOP_RIGHT) : new ne(s.left + s.width - Ve * 2 / 3, s.top + se * 2 / 3), this.bottomRightBorderDoubleInnerBox = wA > 0 || xA > 0 ? pt(s.left + _e, s.top + qe, wA - Ve * 2 / 3, xA - We * 2 / 3, $e.BOTTOM_RIGHT) : new ne(s.left + s.width - Ve * 2 / 3, s.top + s.height - We * 2 / 3), this.bottomLeftBorderDoubleInnerBox = JA > 0 || ee > 0 ? pt(s.left + Ne * 2 / 3, s.top + Se, JA - Ne * 2 / 3, ee - We * 2 / 3, $e.BOTTOM_LEFT) : new ne(s.left + Ne * 2 / 3, s.top + s.height - We * 2 / 3), this.topLeftBorderStroke = Q > 0 || O > 0 ? pt(s.left + Ne / 2, s.top + se / 2, Q - Ne / 2, O - se / 2, $e.TOP_LEFT) : new ne(s.left + Ne / 2, s.top + se / 2), this.topRightBorderStroke = Q > 0 || O > 0 ? pt(s.left + ue, s.top + se / 2, k - Ve / 2, iA - se / 2, $e.TOP_RIGHT) : new ne(s.left + s.width - Ve / 2, s.top + se / 2), this.bottomRightBorderStroke = wA > 0 || xA > 0 ? pt(s.left + _e, s.top + qe, wA - Ve / 2, xA - We / 2, $e.BOTTOM_RIGHT) : new ne(s.left + s.width - Ve / 2, s.top + s.height - We / 2), this.bottomLeftBorderStroke = JA > 0 || ee > 0 ? pt(s.left + Ne / 2, s.top + Se, JA - Ne / 2, ee - We / 2, $e.BOTTOM_LEFT) : new ne(s.left + Ne / 2, s.top + s.height - We / 2), this.topLeftBorderBox = Q > 0 || O > 0 ? pt(s.left, s.top, Q, O, $e.TOP_LEFT) : new ne(s.left, s.top), this.topRightBorderBox = k > 0 || iA > 0 ? pt(s.left + ue, s.top, k, iA, $e.TOP_RIGHT) : new ne(s.left + s.width, s.top), this.bottomRightBorderBox = wA > 0 || xA > 0 ? pt(s.left + _e, s.top + qe, wA, xA, $e.BOTTOM_RIGHT) : new ne(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = JA > 0 || ee > 0 ? pt(s.left, s.top + Se, JA, ee, $e.BOTTOM_LEFT) : new ne(s.left, s.top + s.height), this.topLeftPaddingBox = Q > 0 || O > 0 ? pt(s.left + Ne, s.top + se, Math.max(0, Q - Ne), Math.max(0, O - se), $e.TOP_LEFT) : new ne(s.left + Ne, s.top + se), this.topRightPaddingBox = k > 0 || iA > 0 ? pt(s.left + Math.min(ue, s.width - Ve), s.top + se, ue > s.width + Ve ? 0 : Math.max(0, k - Ve), Math.max(0, iA - se), $e.TOP_RIGHT) : new ne(s.left + s.width - Ve, s.top + se), this.bottomRightPaddingBox = wA > 0 || xA > 0 ? pt(s.left + Math.min(_e, s.width - Ne), s.top + Math.min(qe, s.height - We), Math.max(0, wA - Ve), Math.max(0, xA - We), $e.BOTTOM_RIGHT) : new ne(s.left + s.width - Ve, s.top + s.height - We), this.bottomLeftPaddingBox = JA > 0 || ee > 0 ? pt(s.left + Ne, s.top + Math.min(Se, s.height - We), Math.max(0, JA - Ne), Math.max(0, ee - We), $e.BOTTOM_LEFT) : new ne(s.left + Ne, s.top + s.height - We), this.topLeftContentBox = Q > 0 || O > 0 ? pt(s.left + Ne + it, s.top + se + Tt, Math.max(0, Q - (Ne + it)), Math.max(0, O - (se + Tt)), $e.TOP_LEFT) : new ne(s.left + Ne + it, s.top + se + Tt), this.topRightContentBox = k > 0 || iA > 0 ? pt(s.left + Math.min(ue, s.width + Ne + it), s.top + se + Tt, ue > s.width + Ne + it ? 0 : k - Ne + it, iA - (se + Tt), $e.TOP_RIGHT) : new ne(s.left + s.width - (Ve + xr), s.top + se + Tt), this.bottomRightContentBox = wA > 0 || xA > 0 ? pt(s.left + Math.min(_e, s.width - (Ne + it)), s.top + Math.min(qe, s.height + se + Tt), Math.max(0, wA - (Ve + xr)), xA - (We + Wr), $e.BOTTOM_RIGHT) : new ne(s.left + s.width - (Ve + xr), s.top + s.height - (We + Wr)), this.bottomLeftContentBox = JA > 0 || ee > 0 ? pt(s.left + Ne + it, s.top + Se, Math.max(0, JA - (Ne + it)), ee - (We + Wr), $e.BOTTOM_LEFT) : new ne(s.left + Ne + it, s.top + s.height - (We + Wr));
          }
          return r;
        }()
      ), $e;
      (function(r) {
        r[r.TOP_LEFT = 0] = "TOP_LEFT", r[r.TOP_RIGHT = 1] = "TOP_RIGHT", r[r.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", r[r.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
      })($e || ($e = {}));
      var pt = function(r, e, i, s, w) {
        var Q = 4 * ((Math.sqrt(2) - 1) / 3), O = i * Q, G = s * Q, k = r + i, iA = e + s;
        switch (w) {
          case $e.TOP_LEFT:
            return new qa(new ne(r, iA), new ne(r, iA - G), new ne(k - O, e), new ne(k, e));
          case $e.TOP_RIGHT:
            return new qa(new ne(r, e), new ne(r + O, e), new ne(k, iA - G), new ne(k, iA));
          case $e.BOTTOM_RIGHT:
            return new qa(new ne(k, e), new ne(k, e + G), new ne(r + O, iA), new ne(r, iA));
          case $e.BOTTOM_LEFT:
          default:
            return new qa(new ne(k, iA), new ne(k - O, iA), new ne(r, e + G), new ne(r, e));
        }
      }, Za = function(r) {
        return [r.topLeftBorderBox, r.topRightBorderBox, r.bottomRightBorderBox, r.bottomLeftBorderBox];
      }, If = function(r) {
        return [
          r.topLeftContentBox,
          r.topRightContentBox,
          r.bottomRightContentBox,
          r.bottomLeftContentBox
        ];
      }, $a = function(r) {
        return [
          r.topLeftPaddingBox,
          r.topRightPaddingBox,
          r.bottomRightPaddingBox,
          r.bottomLeftPaddingBox
        ];
      }, xf = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i, s) {
            this.offsetX = e, this.offsetY = i, this.matrix = s, this.type = 0, this.target = 6;
          }
          return r;
        }()
      ), Ac = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i) {
            this.path = e, this.target = i, this.type = 1;
          }
          return r;
        }()
      ), Sf = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e) {
            this.opacity = e, this.type = 2, this.target = 6;
          }
          return r;
        }()
      ), Hf = function(r) {
        return r.type === 0;
      }, Yl = function(r) {
        return r.type === 1;
      }, jf = function(r) {
        return r.type === 2;
      }, ql = function(r, e) {
        return r.length === e.length ? r.some(function(i, s) {
          return i === e[s];
        }) : !1;
      }, Nf = function(r, e, i, s, w) {
        return r.map(function(Q, O) {
          switch (O) {
            case 0:
              return Q.add(e, i);
            case 1:
              return Q.add(e + s, i);
            case 2:
              return Q.add(e + s, i + w);
            case 3:
              return Q.add(e, i + w);
          }
          return Q;
        });
      }, Zl = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e) {
            this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
          }
          return r;
        }()
      ), $l = (
        /** @class */
        function() {
          function r(e, i) {
            if (this.container = e, this.parent = i, this.effects = [], this.curves = new Lf(this.container), this.container.styles.opacity < 1 && this.effects.push(new Sf(this.container.styles.opacity)), this.container.styles.transform !== null) {
              var s = this.container.bounds.left + this.container.styles.transformOrigin[0].number, w = this.container.bounds.top + this.container.styles.transformOrigin[1].number, Q = this.container.styles.transform;
              this.effects.push(new xf(s, w, Q));
            }
            if (this.container.styles.overflowX !== 0) {
              var O = Za(this.curves), G = $a(this.curves);
              ql(O, G) ? this.effects.push(new Ac(
                O,
                6
                /* CONTENT */
              )) : (this.effects.push(new Ac(
                O,
                2
                /* BACKGROUND_BORDERS */
              )), this.effects.push(new Ac(
                G,
                4
                /* CONTENT */
              )));
            }
          }
          return r.prototype.getEffects = function(e) {
            for (var i = [
              2,
              3
              /* FIXED */
            ].indexOf(this.container.styles.position) === -1, s = this.parent, w = this.effects.slice(0); s; ) {
              var Q = s.effects.filter(function(k) {
                return !Yl(k);
              });
              if (i || s.container.styles.position !== 0 || !s.parent) {
                if (w.unshift.apply(w, Q), i = [
                  2,
                  3
                  /* FIXED */
                ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
                  var O = Za(s.curves), G = $a(s.curves);
                  ql(O, G) || w.unshift(new Ac(
                    G,
                    6
                    /* CONTENT */
                  ));
                }
              } else
                w.unshift.apply(w, Q);
              s = s.parent;
            }
            return w.filter(function(k) {
              return oA(k.target, e);
            });
          }, r;
        }()
      ), qc = function(r, e, i, s) {
        r.container.elements.forEach(function(w) {
          var Q = oA(
            w.flags,
            4
            /* CREATES_REAL_STACKING_CONTEXT */
          ), O = oA(
            w.flags,
            2
            /* CREATES_STACKING_CONTEXT */
          ), G = new $l(w, r);
          oA(
            w.styles.display,
            2048
            /* LIST_ITEM */
          ) && s.push(G);
          var k = oA(
            w.flags,
            8
            /* IS_LIST_OWNER */
          ) ? [] : s;
          if (Q || O) {
            var iA = Q || w.styles.isPositioned() ? i : e, fA = new Zl(G);
            if (w.styles.isPositioned() || w.styles.opacity < 1 || w.styles.isTransformed()) {
              var wA = w.styles.zIndex.order;
              if (wA < 0) {
                var xA = 0;
                iA.negativeZIndex.some(function(JA, ee) {
                  return wA > JA.element.container.styles.zIndex.order ? (xA = ee, !1) : xA > 0;
                }), iA.negativeZIndex.splice(xA, 0, fA);
              } else if (wA > 0) {
                var oe = 0;
                iA.positiveZIndex.some(function(JA, ee) {
                  return wA >= JA.element.container.styles.zIndex.order ? (oe = ee + 1, !1) : oe > 0;
                }), iA.positiveZIndex.splice(oe, 0, fA);
              } else
                iA.zeroOrAutoZIndexOrTransformedOrOpacity.push(fA);
            } else
              w.styles.isFloating() ? iA.nonPositionedFloats.push(fA) : iA.nonPositionedInlineLevel.push(fA);
            qc(G, fA, Q ? fA : i, k);
          } else
            w.styles.isInlineLevel() ? e.inlineLevel.push(G) : e.nonInlineLevel.push(G), qc(G, e, i, k);
          oA(
            w.flags,
            8
            /* IS_LIST_OWNER */
          ) && Au(w, k);
        });
      }, Au = function(r, e) {
        for (var i = r instanceof _c ? r.start : 1, s = r instanceof _c ? r.reversed : !1, w = 0; w < e.length; w++) {
          var Q = e[w];
          Q.container instanceof Ql && typeof Q.container.value == "number" && Q.container.value !== 0 && (i = Q.container.value), Q.listValue = Aa(i, Q.container.styles.listStyleType, !0), i += s ? -1 : 1;
        }
      }, Of = function(r) {
        var e = new $l(r, null), i = new Zl(e), s = [];
        return qc(e, i, i, s), Au(e.container, s), i;
      }, eu = function(r, e) {
        switch (e) {
          case 0:
            return nn(r.topLeftBorderBox, r.topLeftPaddingBox, r.topRightBorderBox, r.topRightPaddingBox);
          case 1:
            return nn(r.topRightBorderBox, r.topRightPaddingBox, r.bottomRightBorderBox, r.bottomRightPaddingBox);
          case 2:
            return nn(r.bottomRightBorderBox, r.bottomRightPaddingBox, r.bottomLeftBorderBox, r.bottomLeftPaddingBox);
          case 3:
          default:
            return nn(r.bottomLeftBorderBox, r.bottomLeftPaddingBox, r.topLeftBorderBox, r.topLeftPaddingBox);
        }
      }, Pf = function(r, e) {
        switch (e) {
          case 0:
            return nn(r.topLeftBorderBox, r.topLeftBorderDoubleOuterBox, r.topRightBorderBox, r.topRightBorderDoubleOuterBox);
          case 1:
            return nn(r.topRightBorderBox, r.topRightBorderDoubleOuterBox, r.bottomRightBorderBox, r.bottomRightBorderDoubleOuterBox);
          case 2:
            return nn(r.bottomRightBorderBox, r.bottomRightBorderDoubleOuterBox, r.bottomLeftBorderBox, r.bottomLeftBorderDoubleOuterBox);
          case 3:
          default:
            return nn(r.bottomLeftBorderBox, r.bottomLeftBorderDoubleOuterBox, r.topLeftBorderBox, r.topLeftBorderDoubleOuterBox);
        }
      }, Tf = function(r, e) {
        switch (e) {
          case 0:
            return nn(r.topLeftBorderDoubleInnerBox, r.topLeftPaddingBox, r.topRightBorderDoubleInnerBox, r.topRightPaddingBox);
          case 1:
            return nn(r.topRightBorderDoubleInnerBox, r.topRightPaddingBox, r.bottomRightBorderDoubleInnerBox, r.bottomRightPaddingBox);
          case 2:
            return nn(r.bottomRightBorderDoubleInnerBox, r.bottomRightPaddingBox, r.bottomLeftBorderDoubleInnerBox, r.bottomLeftPaddingBox);
          case 3:
          default:
            return nn(r.bottomLeftBorderDoubleInnerBox, r.bottomLeftPaddingBox, r.topLeftBorderDoubleInnerBox, r.topLeftPaddingBox);
        }
      }, Df = function(r, e) {
        switch (e) {
          case 0:
            return ec(r.topLeftBorderStroke, r.topRightBorderStroke);
          case 1:
            return ec(r.topRightBorderStroke, r.bottomRightBorderStroke);
          case 2:
            return ec(r.bottomRightBorderStroke, r.bottomLeftBorderStroke);
          case 3:
          default:
            return ec(r.bottomLeftBorderStroke, r.topLeftBorderStroke);
        }
      }, ec = function(r, e) {
        var i = [];
        return rn(r) ? i.push(r.subdivide(0.5, !1)) : i.push(r), rn(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), i;
      }, nn = function(r, e, i, s) {
        var w = [];
        return rn(r) ? w.push(r.subdivide(0.5, !1)) : w.push(r), rn(i) ? w.push(i.subdivide(0.5, !0)) : w.push(i), rn(s) ? w.push(s.subdivide(0.5, !0).reverse()) : w.push(s), rn(e) ? w.push(e.subdivide(0.5, !1).reverse()) : w.push(e), w;
      }, tu = function(r) {
        var e = r.bounds, i = r.styles;
        return e.add(i.borderLeftWidth, i.borderTopWidth, -(i.borderRightWidth + i.borderLeftWidth), -(i.borderTopWidth + i.borderBottomWidth));
      }, tc = function(r) {
        var e = r.styles, i = r.bounds, s = Xe(e.paddingLeft, i.width), w = Xe(e.paddingRight, i.width), Q = Xe(e.paddingTop, i.width), O = Xe(e.paddingBottom, i.width);
        return i.add(s + e.borderLeftWidth, Q + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + s + w), -(e.borderTopWidth + e.borderBottomWidth + Q + O));
      }, Mf = function(r, e) {
        return r === 0 ? e.bounds : r === 2 ? tc(e) : tu(e);
      }, _f = function(r, e) {
        return r === 0 ? e.bounds : r === 2 ? tc(e) : tu(e);
      }, Zc = function(r, e, i) {
        var s = Mf(mo(r.styles.backgroundOrigin, e), r), w = _f(mo(r.styles.backgroundClip, e), r), Q = Kf(mo(r.styles.backgroundSize, e), i, s), O = Q[0], G = Q[1], k = Ot(mo(r.styles.backgroundPosition, e), s.width - O, s.height - G), iA = Rf(mo(r.styles.backgroundRepeat, e), k, Q, s, w), fA = Math.round(s.left + k[0]), wA = Math.round(s.top + k[1]);
        return [iA, fA, wA, O, G];
      }, vo = function(r) {
        return Le(r) && r.value === ss.AUTO;
      }, rc = function(r) {
        return typeof r == "number";
      }, Kf = function(r, e, i) {
        var s = e[0], w = e[1], Q = e[2], O = r[0], G = r[1];
        if (!O)
          return [0, 0];
        if (at(O) && G && at(G))
          return [Xe(O, i.width), Xe(G, i.height)];
        var k = rc(Q);
        if (Le(O) && (O.value === ss.CONTAIN || O.value === ss.COVER)) {
          if (rc(Q)) {
            var iA = i.width / i.height;
            return iA < Q != (O.value === ss.COVER) ? [i.width, i.width / Q] : [i.height * Q, i.height];
          }
          return [i.width, i.height];
        }
        var fA = rc(s), wA = rc(w), xA = fA || wA;
        if (vo(O) && (!G || vo(G))) {
          if (fA && wA)
            return [s, w];
          if (!k && !xA)
            return [i.width, i.height];
          if (xA && k) {
            var oe = fA ? s : w * Q, JA = wA ? w : s / Q;
            return [oe, JA];
          }
          var ee = fA ? s : i.width, De = wA ? w : i.height;
          return [ee, De];
        }
        if (k) {
          var he = 0, ue = 0;
          return at(O) ? he = Xe(O, i.width) : at(G) && (ue = Xe(G, i.height)), vo(O) ? he = ue * Q : (!G || vo(G)) && (ue = he / Q), [he, ue];
        }
        var qe = null, _e = null;
        if (at(O) ? qe = Xe(O, i.width) : G && at(G) && (_e = Xe(G, i.height)), qe !== null && (!G || vo(G)) && (_e = fA && wA ? qe / s * w : i.height), _e !== null && vo(O) && (qe = fA && wA ? _e / w * s : i.width), qe !== null && _e !== null)
          return [qe, _e];
        throw new Error("Unable to calculate background-size for element");
      }, mo = function(r, e) {
        var i = r[e];
        return typeof i > "u" ? r[0] : i;
      }, Rf = function(r, e, i, s, w) {
        var Q = e[0], O = e[1], G = i[0], k = i[1];
        switch (r) {
          case 2:
            return [
              new ne(Math.round(s.left), Math.round(s.top + O)),
              new ne(Math.round(s.left + s.width), Math.round(s.top + O)),
              new ne(Math.round(s.left + s.width), Math.round(k + s.top + O)),
              new ne(Math.round(s.left), Math.round(k + s.top + O))
            ];
          case 3:
            return [
              new ne(Math.round(s.left + Q), Math.round(s.top)),
              new ne(Math.round(s.left + Q + G), Math.round(s.top)),
              new ne(Math.round(s.left + Q + G), Math.round(s.height + s.top)),
              new ne(Math.round(s.left + Q), Math.round(s.height + s.top))
            ];
          case 1:
            return [
              new ne(Math.round(s.left + Q), Math.round(s.top + O)),
              new ne(Math.round(s.left + Q + G), Math.round(s.top + O)),
              new ne(Math.round(s.left + Q + G), Math.round(s.top + O + k)),
              new ne(Math.round(s.left + Q), Math.round(s.top + O + k))
            ];
          default:
            return [
              new ne(Math.round(w.left), Math.round(w.top)),
              new ne(Math.round(w.left + w.width), Math.round(w.top)),
              new ne(Math.round(w.left + w.width), Math.round(w.height + w.top)),
              new ne(Math.round(w.left), Math.round(w.height + w.top))
            ];
        }
      }, kf = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ru = "Hidden Text", Gf = (
        /** @class */
        function() {
          function r(e) {
            this._data = {}, this._document = e;
          }
          return r.prototype.parseMetrics = function(e, i) {
            var s = this._document.createElement("div"), w = this._document.createElement("img"), Q = this._document.createElement("span"), O = this._document.body;
            s.style.visibility = "hidden", s.style.fontFamily = e, s.style.fontSize = i, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", O.appendChild(s), w.src = kf, w.width = 1, w.height = 1, w.style.margin = "0", w.style.padding = "0", w.style.verticalAlign = "baseline", Q.style.fontFamily = e, Q.style.fontSize = i, Q.style.margin = "0", Q.style.padding = "0", Q.appendChild(this._document.createTextNode(ru)), s.appendChild(Q), s.appendChild(w);
            var G = w.offsetTop - Q.offsetTop + 2;
            s.removeChild(Q), s.appendChild(this._document.createTextNode(ru)), s.style.lineHeight = "normal", w.style.verticalAlign = "super";
            var k = w.offsetTop - s.offsetTop + 2;
            return O.removeChild(s), { baseline: G, middle: k };
          }, r.prototype.getMetrics = function(e, i) {
            var s = e + " " + i;
            return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(e, i)), this._data[s];
          }, r;
        }()
      ), nu = (
        /** @class */
        /* @__PURE__ */ function() {
          function r(e, i) {
            this.context = e, this.options = i;
          }
          return r;
        }()
      ), Vf = 1e4, Wf = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w._activeEffects = [], w.canvas = s.canvas ? s.canvas : document.createElement("canvas"), w.ctx = w.canvas.getContext("2d"), s.canvas || (w.canvas.width = Math.floor(s.width * s.scale), w.canvas.height = Math.floor(s.height * s.scale), w.canvas.style.width = s.width + "px", w.canvas.style.height = s.height + "px"), w.fontMetrics = new Gf(document), w.ctx.scale(w.options.scale, w.options.scale), w.ctx.translate(-s.x, -s.y), w.ctx.textBaseline = "bottom", w._activeEffects = [], w.context.logger.debug("Canvas renderer initialized (" + s.width + "x" + s.height + ") with scale " + s.scale), w;
          }
          return e.prototype.applyEffects = function(i) {
            for (var s = this; this._activeEffects.length; )
              this.popEffect();
            i.forEach(function(w) {
              return s.applyEffect(w);
            });
          }, e.prototype.applyEffect = function(i) {
            this.ctx.save(), jf(i) && (this.ctx.globalAlpha = i.opacity), Hf(i) && (this.ctx.translate(i.offsetX, i.offsetY), this.ctx.transform(i.matrix[0], i.matrix[1], i.matrix[2], i.matrix[3], i.matrix[4], i.matrix[5]), this.ctx.translate(-i.offsetX, -i.offsetY)), Yl(i) && (this.path(i.path), this.ctx.clip()), this._activeEffects.push(i);
          }, e.prototype.popEffect = function() {
            this._activeEffects.pop(), this.ctx.restore();
          }, e.prototype.renderStack = function(i) {
            return u(this, void 0, void 0, function() {
              var s;
              return p(this, function(w) {
                switch (w.label) {
                  case 0:
                    return s = i.element.container.styles, s.isVisible() ? [4, this.renderStackContent(i)] : [3, 2];
                  case 1:
                    w.sent(), w.label = 2;
                  case 2:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.renderNode = function(i) {
            return u(this, void 0, void 0, function() {
              return p(this, function(s) {
                switch (s.label) {
                  case 0:
                    if (oA(
                      i.container.flags,
                      16
                      /* DEBUG_RENDER */
                    ))
                      debugger;
                    return i.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(i)] : [3, 3];
                  case 1:
                    return s.sent(), [4, this.renderNodeContent(i)];
                  case 2:
                    s.sent(), s.label = 3;
                  case 3:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.renderTextWithLetterSpacing = function(i, s, w) {
            var Q = this;
            if (s === 0)
              this.ctx.fillText(i.text, i.bounds.left, i.bounds.top + w);
            else {
              var O = _s(i.text);
              O.reduce(function(G, k) {
                return Q.ctx.fillText(k, G, i.bounds.top + w), G + Q.ctx.measureText(k).width;
              }, i.bounds.left);
            }
          }, e.prototype.createFontStyle = function(i) {
            var s = i.fontVariant.filter(function(O) {
              return O === "normal" || O === "small-caps";
            }).join(""), w = qf(i.fontFamily).join(", "), Q = At(i.fontSize) ? "" + i.fontSize.number + i.fontSize.unit : i.fontSize.number + "px";
            return [
              [i.fontStyle, s, i.fontWeight, Q, w].join(" "),
              w,
              Q
            ];
          }, e.prototype.renderTextNode = function(i, s) {
            return u(this, void 0, void 0, function() {
              var w, Q, O, G, k, iA, fA, wA, xA = this;
              return p(this, function(oe) {
                return w = this.createFontStyle(s), Q = w[0], O = w[1], G = w[2], this.ctx.font = Q, this.ctx.direction = s.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", k = this.fontMetrics.getMetrics(O, G), iA = k.baseline, fA = k.middle, wA = s.paintOrder, i.textBounds.forEach(function(JA) {
                  wA.forEach(function(ee) {
                    switch (ee) {
                      case 0:
                        xA.ctx.fillStyle = yt(s.color), xA.renderTextWithLetterSpacing(JA, s.letterSpacing, iA);
                        var De = s.textShadow;
                        De.length && JA.text.trim().length && (De.slice(0).reverse().forEach(function(he) {
                          xA.ctx.shadowColor = yt(he.color), xA.ctx.shadowOffsetX = he.offsetX.number * xA.options.scale, xA.ctx.shadowOffsetY = he.offsetY.number * xA.options.scale, xA.ctx.shadowBlur = he.blur.number, xA.renderTextWithLetterSpacing(JA, s.letterSpacing, iA);
                        }), xA.ctx.shadowColor = "", xA.ctx.shadowOffsetX = 0, xA.ctx.shadowOffsetY = 0, xA.ctx.shadowBlur = 0), s.textDecorationLine.length && (xA.ctx.fillStyle = yt(s.textDecorationColor || s.color), s.textDecorationLine.forEach(function(he) {
                          switch (he) {
                            case 1:
                              xA.ctx.fillRect(JA.bounds.left, Math.round(JA.bounds.top + iA), JA.bounds.width, 1);
                              break;
                            case 2:
                              xA.ctx.fillRect(JA.bounds.left, Math.round(JA.bounds.top), JA.bounds.width, 1);
                              break;
                            case 3:
                              xA.ctx.fillRect(JA.bounds.left, Math.ceil(JA.bounds.top + fA), JA.bounds.width, 1);
                              break;
                          }
                        }));
                        break;
                      case 1:
                        s.webkitTextStrokeWidth && JA.text.trim().length && (xA.ctx.strokeStyle = yt(s.webkitTextStrokeColor), xA.ctx.lineWidth = s.webkitTextStrokeWidth, xA.ctx.lineJoin = window.chrome ? "miter" : "round", xA.ctx.strokeText(JA.text, JA.bounds.left, JA.bounds.top + iA)), xA.ctx.strokeStyle = "", xA.ctx.lineWidth = 0, xA.ctx.lineJoin = "miter";
                        break;
                    }
                  });
                }), [
                  2
                  /*return*/
                ];
              });
            });
          }, e.prototype.renderReplacedElement = function(i, s, w) {
            if (w && i.intrinsicWidth > 0 && i.intrinsicHeight > 0) {
              var Q = tc(i), O = $a(s);
              this.path(O), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(w, 0, 0, i.intrinsicWidth, i.intrinsicHeight, Q.left, Q.top, Q.width, Q.height), this.ctx.restore();
            }
          }, e.prototype.renderNodeContent = function(i) {
            return u(this, void 0, void 0, function() {
              var s, w, Q, O, G, k, ue, ue, iA, fA, wA, xA, _e, oe, JA, Se, ee, De, he, ue, qe, _e, Se;
              return p(this, function(se) {
                switch (se.label) {
                  case 0:
                    this.applyEffects(i.getEffects(
                      4
                      /* CONTENT */
                    )), s = i.container, w = i.curves, Q = s.styles, O = 0, G = s.textNodes, se.label = 1;
                  case 1:
                    return O < G.length ? (k = G[O], [4, this.renderTextNode(k, Q)]) : [3, 4];
                  case 2:
                    se.sent(), se.label = 3;
                  case 3:
                    return O++, [3, 1];
                  case 4:
                    if (!(s instanceof ho)) return [3, 8];
                    se.label = 5;
                  case 5:
                    return se.trys.push([5, 7, , 8]), [4, this.context.cache.match(s.src)];
                  case 6:
                    return ue = se.sent(), this.renderReplacedElement(s, w, ue), [3, 8];
                  case 7:
                    return se.sent(), this.context.logger.error("Error loading image " + s.src), [3, 8];
                  case 8:
                    if (s instanceof Fl && this.renderReplacedElement(s, w, s.canvas), !(s instanceof bl)) return [3, 12];
                    se.label = 9;
                  case 9:
                    return se.trys.push([9, 11, , 12]), [4, this.context.cache.match(s.svg)];
                  case 10:
                    return ue = se.sent(), this.renderReplacedElement(s, w, ue), [3, 12];
                  case 11:
                    return se.sent(), this.context.logger.error("Error loading svg " + s.svg.substring(0, 255)), [3, 12];
                  case 12:
                    return s instanceof Il && s.tree ? (iA = new e(this.context, {
                      scale: this.options.scale,
                      backgroundColor: s.backgroundColor,
                      x: 0,
                      y: 0,
                      width: s.width,
                      height: s.height
                    }), [4, iA.render(s.tree)]) : [3, 14];
                  case 13:
                    fA = se.sent(), s.width && s.height && this.ctx.drawImage(fA, 0, 0, s.width, s.height, s.bounds.left, s.bounds.top, s.bounds.width, s.bounds.height), se.label = 14;
                  case 14:
                    if (s instanceof Kc && (wA = Math.min(s.bounds.width, s.bounds.height), s.type === Va ? s.checked && (this.ctx.save(), this.path([
                      new ne(s.bounds.left + wA * 0.39363, s.bounds.top + wA * 0.79),
                      new ne(s.bounds.left + wA * 0.16, s.bounds.top + wA * 0.5549),
                      new ne(s.bounds.left + wA * 0.27347, s.bounds.top + wA * 0.44071),
                      new ne(s.bounds.left + wA * 0.39694, s.bounds.top + wA * 0.5649),
                      new ne(s.bounds.left + wA * 0.72983, s.bounds.top + wA * 0.23),
                      new ne(s.bounds.left + wA * 0.84, s.bounds.top + wA * 0.34085),
                      new ne(s.bounds.left + wA * 0.39363, s.bounds.top + wA * 0.79)
                    ]), this.ctx.fillStyle = yt(Ul), this.ctx.fill(), this.ctx.restore()) : s.type === Wa && s.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(s.bounds.left + wA / 2, s.bounds.top + wA / 2, wA / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = yt(Ul), this.ctx.fill(), this.ctx.restore())), Xf(s) && s.value.length) {
                      switch (xA = this.createFontStyle(Q), _e = xA[0], oe = xA[1], JA = this.fontMetrics.getMetrics(_e, oe).baseline, this.ctx.font = _e, this.ctx.fillStyle = yt(Q.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = zf(s.styles.textAlign), Se = tc(s), ee = 0, s.styles.textAlign) {
                        case 1:
                          ee += Se.width / 2;
                          break;
                        case 2:
                          ee += Se.width;
                          break;
                      }
                      De = Se.add(ee, 0, 0, -Se.height / 2 + 1), this.ctx.save(), this.path([
                        new ne(Se.left, Se.top),
                        new ne(Se.left + Se.width, Se.top),
                        new ne(Se.left + Se.width, Se.top + Se.height),
                        new ne(Se.left, Se.top + Se.height)
                      ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ms(s.value, De), Q.letterSpacing, JA), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
                    }
                    if (!oA(
                      s.styles.display,
                      2048
                      /* LIST_ITEM */
                    )) return [3, 20];
                    if (s.styles.listStyleImage === null) return [3, 19];
                    if (he = s.styles.listStyleImage, he.type !== 0) return [3, 18];
                    ue = void 0, qe = he.url, se.label = 15;
                  case 15:
                    return se.trys.push([15, 17, , 18]), [4, this.context.cache.match(qe)];
                  case 16:
                    return ue = se.sent(), this.ctx.drawImage(ue, s.bounds.left - (ue.width + 10), s.bounds.top), [3, 18];
                  case 17:
                    return se.sent(), this.context.logger.error("Error loading list-style-image " + qe), [3, 18];
                  case 18:
                    return [3, 20];
                  case 19:
                    i.listValue && s.styles.listStyleType !== -1 && (_e = this.createFontStyle(Q)[0], this.ctx.font = _e, this.ctx.fillStyle = yt(Q.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", Se = new f(s.bounds.left, s.bounds.top + Xe(s.styles.paddingTop, s.bounds.width), s.bounds.width, gn(Q.lineHeight, Q.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ms(i.listValue, Se), Q.letterSpacing, gn(Q.lineHeight, Q.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), se.label = 20;
                  case 20:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.renderStackContent = function(i) {
            return u(this, void 0, void 0, function() {
              var s, w, he, Q, O, he, G, k, he, iA, fA, he, wA, xA, he, oe, JA, he, ee, De, he;
              return p(this, function(ue) {
                switch (ue.label) {
                  case 0:
                    if (oA(
                      i.element.container.flags,
                      16
                      /* DEBUG_RENDER */
                    ))
                      debugger;
                    return [4, this.renderNodeBackgroundAndBorders(i.element)];
                  case 1:
                    ue.sent(), s = 0, w = i.negativeZIndex, ue.label = 2;
                  case 2:
                    return s < w.length ? (he = w[s], [4, this.renderStack(he)]) : [3, 5];
                  case 3:
                    ue.sent(), ue.label = 4;
                  case 4:
                    return s++, [3, 2];
                  case 5:
                    return [4, this.renderNodeContent(i.element)];
                  case 6:
                    ue.sent(), Q = 0, O = i.nonInlineLevel, ue.label = 7;
                  case 7:
                    return Q < O.length ? (he = O[Q], [4, this.renderNode(he)]) : [3, 10];
                  case 8:
                    ue.sent(), ue.label = 9;
                  case 9:
                    return Q++, [3, 7];
                  case 10:
                    G = 0, k = i.nonPositionedFloats, ue.label = 11;
                  case 11:
                    return G < k.length ? (he = k[G], [4, this.renderStack(he)]) : [3, 14];
                  case 12:
                    ue.sent(), ue.label = 13;
                  case 13:
                    return G++, [3, 11];
                  case 14:
                    iA = 0, fA = i.nonPositionedInlineLevel, ue.label = 15;
                  case 15:
                    return iA < fA.length ? (he = fA[iA], [4, this.renderStack(he)]) : [3, 18];
                  case 16:
                    ue.sent(), ue.label = 17;
                  case 17:
                    return iA++, [3, 15];
                  case 18:
                    wA = 0, xA = i.inlineLevel, ue.label = 19;
                  case 19:
                    return wA < xA.length ? (he = xA[wA], [4, this.renderNode(he)]) : [3, 22];
                  case 20:
                    ue.sent(), ue.label = 21;
                  case 21:
                    return wA++, [3, 19];
                  case 22:
                    oe = 0, JA = i.zeroOrAutoZIndexOrTransformedOrOpacity, ue.label = 23;
                  case 23:
                    return oe < JA.length ? (he = JA[oe], [4, this.renderStack(he)]) : [3, 26];
                  case 24:
                    ue.sent(), ue.label = 25;
                  case 25:
                    return oe++, [3, 23];
                  case 26:
                    ee = 0, De = i.positiveZIndex, ue.label = 27;
                  case 27:
                    return ee < De.length ? (he = De[ee], [4, this.renderStack(he)]) : [3, 30];
                  case 28:
                    ue.sent(), ue.label = 29;
                  case 29:
                    return ee++, [3, 27];
                  case 30:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.mask = function(i) {
            this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(i.slice(0).reverse()), this.ctx.closePath();
          }, e.prototype.path = function(i) {
            this.ctx.beginPath(), this.formatPath(i), this.ctx.closePath();
          }, e.prototype.formatPath = function(i) {
            var s = this;
            i.forEach(function(w, Q) {
              var O = rn(w) ? w.start : w;
              Q === 0 ? s.ctx.moveTo(O.x, O.y) : s.ctx.lineTo(O.x, O.y), rn(w) && s.ctx.bezierCurveTo(w.startControl.x, w.startControl.y, w.endControl.x, w.endControl.y, w.end.x, w.end.y);
            });
          }, e.prototype.renderRepeat = function(i, s, w, Q) {
            this.path(i), this.ctx.fillStyle = s, this.ctx.translate(w, Q), this.ctx.fill(), this.ctx.translate(-w, -Q);
          }, e.prototype.resizeImage = function(i, s, w) {
            var Q;
            if (i.width === s && i.height === w)
              return i;
            var O = (Q = this.canvas.ownerDocument) !== null && Q !== void 0 ? Q : document, G = O.createElement("canvas");
            G.width = Math.max(1, s), G.height = Math.max(1, w);
            var k = G.getContext("2d");
            return k.drawImage(i, 0, 0, i.width, i.height, 0, 0, s, w), G;
          }, e.prototype.renderBackgroundImage = function(i) {
            return u(this, void 0, void 0, function() {
              var s, w, Q, O, G, k;
              return p(this, function(iA) {
                switch (iA.label) {
                  case 0:
                    s = i.styles.backgroundImage.length - 1, w = function(fA) {
                      var wA, xA, oe, Tt, Sr, Hr, it, $t, We, JA, Tt, Sr, Hr, it, $t, ee, De, he, ue, qe, _e, Se, se, Ve, We, Ne, Tt, xr, Wr, it, $t, ks, Sr, Hr, wi, Mn, Gs, vi, mi, us, yi, fs;
                      return p(this, function(yo) {
                        switch (yo.label) {
                          case 0:
                            if (fA.type !== 0) return [3, 5];
                            wA = void 0, xA = fA.url, yo.label = 1;
                          case 1:
                            return yo.trys.push([1, 3, , 4]), [4, Q.context.cache.match(xA)];
                          case 2:
                            return wA = yo.sent(), [3, 4];
                          case 3:
                            return yo.sent(), Q.context.logger.error("Error loading background-image " + xA), [3, 4];
                          case 4:
                            return wA && (oe = Zc(i, s, [
                              wA.width,
                              wA.height,
                              wA.width / wA.height
                            ]), Tt = oe[0], Sr = oe[1], Hr = oe[2], it = oe[3], $t = oe[4], We = Q.ctx.createPattern(Q.resizeImage(wA, it, $t), "repeat"), Q.renderRepeat(Tt, We, Sr, Hr)), [3, 6];
                          case 5:
                            ga(fA) ? (JA = Zc(i, s, [null, null, null]), Tt = JA[0], Sr = JA[1], Hr = JA[2], it = JA[3], $t = JA[4], ee = rs(fA.angle, it, $t), De = ee[0], he = ee[1], ue = ee[2], qe = ee[3], _e = ee[4], Se = document.createElement("canvas"), Se.width = it, Se.height = $t, se = Se.getContext("2d"), Ve = se.createLinearGradient(he, qe, ue, _e), Qr(fA.stops, De).forEach(function(ta) {
                              return Ve.addColorStop(ta.stop, yt(ta.color));
                            }), se.fillStyle = Ve, se.fillRect(0, 0, it, $t), it > 0 && $t > 0 && (We = Q.ctx.createPattern(Se, "repeat"), Q.renderRepeat(Tt, We, Sr, Hr))) : pa(fA) && (Ne = Zc(i, s, [
                              null,
                              null,
                              null
                            ]), Tt = Ne[0], xr = Ne[1], Wr = Ne[2], it = Ne[3], $t = Ne[4], ks = fA.position.length === 0 ? [As] : fA.position, Sr = Xe(ks[0], it), Hr = Xe(ks[ks.length - 1], $t), wi = Hn(fA, Sr, Hr, it, $t), Mn = wi[0], Gs = wi[1], Mn > 0 && Gs > 0 && (vi = Q.ctx.createRadialGradient(xr + Sr, Wr + Hr, 0, xr + Sr, Wr + Hr, Mn), Qr(fA.stops, Mn * 2).forEach(function(ta) {
                              return vi.addColorStop(ta.stop, yt(ta.color));
                            }), Q.path(Tt), Q.ctx.fillStyle = vi, Mn !== Gs ? (mi = i.bounds.left + 0.5 * i.bounds.width, us = i.bounds.top + 0.5 * i.bounds.height, yi = Gs / Mn, fs = 1 / yi, Q.ctx.save(), Q.ctx.translate(mi, us), Q.ctx.transform(1, 0, 0, yi, 0, 0), Q.ctx.translate(-mi, -us), Q.ctx.fillRect(xr, fs * (Wr - us) + us, it, $t * fs), Q.ctx.restore()) : Q.ctx.fill())), yo.label = 6;
                          case 6:
                            return s--, [
                              2
                              /*return*/
                            ];
                        }
                      });
                    }, Q = this, O = 0, G = i.styles.backgroundImage.slice(0).reverse(), iA.label = 1;
                  case 1:
                    return O < G.length ? (k = G[O], [5, w(k)]) : [3, 4];
                  case 2:
                    iA.sent(), iA.label = 3;
                  case 3:
                    return O++, [3, 1];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.renderSolidBorder = function(i, s, w) {
            return u(this, void 0, void 0, function() {
              return p(this, function(Q) {
                return this.path(eu(w, s)), this.ctx.fillStyle = yt(i), this.ctx.fill(), [
                  2
                  /*return*/
                ];
              });
            });
          }, e.prototype.renderDoubleBorder = function(i, s, w, Q) {
            return u(this, void 0, void 0, function() {
              var O, G;
              return p(this, function(k) {
                switch (k.label) {
                  case 0:
                    return s < 3 ? [4, this.renderSolidBorder(i, w, Q)] : [3, 2];
                  case 1:
                    return k.sent(), [
                      2
                      /*return*/
                    ];
                  case 2:
                    return O = Pf(Q, w), this.path(O), this.ctx.fillStyle = yt(i), this.ctx.fill(), G = Tf(Q, w), this.path(G), this.ctx.fill(), [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.renderNodeBackgroundAndBorders = function(i) {
            return u(this, void 0, void 0, function() {
              var s, w, Q, O, G, k, iA, fA, wA = this;
              return p(this, function(xA) {
                switch (xA.label) {
                  case 0:
                    return this.applyEffects(i.getEffects(
                      2
                      /* BACKGROUND_BORDERS */
                    )), s = i.container.styles, w = !Zr(s.backgroundColor) || s.backgroundImage.length, Q = [
                      { style: s.borderTopStyle, color: s.borderTopColor, width: s.borderTopWidth },
                      { style: s.borderRightStyle, color: s.borderRightColor, width: s.borderRightWidth },
                      { style: s.borderBottomStyle, color: s.borderBottomColor, width: s.borderBottomWidth },
                      { style: s.borderLeftStyle, color: s.borderLeftColor, width: s.borderLeftWidth }
                    ], O = Jf(mo(s.backgroundClip, 0), i.curves), w || s.boxShadow.length ? (this.ctx.save(), this.path(O), this.ctx.clip(), Zr(s.backgroundColor) || (this.ctx.fillStyle = yt(s.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(i.container)]) : [3, 2];
                  case 1:
                    xA.sent(), this.ctx.restore(), s.boxShadow.slice(0).reverse().forEach(function(oe) {
                      wA.ctx.save();
                      var JA = Za(i.curves), ee = oe.inset ? 0 : Vf, De = Nf(JA, -ee + (oe.inset ? 1 : -1) * oe.spread.number, (oe.inset ? 1 : -1) * oe.spread.number, oe.spread.number * (oe.inset ? -2 : 2), oe.spread.number * (oe.inset ? -2 : 2));
                      oe.inset ? (wA.path(JA), wA.ctx.clip(), wA.mask(De)) : (wA.mask(JA), wA.ctx.clip(), wA.path(De)), wA.ctx.shadowOffsetX = oe.offsetX.number + ee, wA.ctx.shadowOffsetY = oe.offsetY.number, wA.ctx.shadowColor = yt(oe.color), wA.ctx.shadowBlur = oe.blur.number, wA.ctx.fillStyle = oe.inset ? yt(oe.color) : "rgba(0,0,0,1)", wA.ctx.fill(), wA.ctx.restore();
                    }), xA.label = 2;
                  case 2:
                    G = 0, k = 0, iA = Q, xA.label = 3;
                  case 3:
                    return k < iA.length ? (fA = iA[k], fA.style !== 0 && !Zr(fA.color) && fA.width > 0 ? fA.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                      fA.color,
                      fA.width,
                      G,
                      i.curves,
                      2
                      /* DASHED */
                    )] : [3, 11]) : [3, 13];
                  case 4:
                    return xA.sent(), [3, 11];
                  case 5:
                    return fA.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                      fA.color,
                      fA.width,
                      G,
                      i.curves,
                      3
                      /* DOTTED */
                    )];
                  case 6:
                    return xA.sent(), [3, 11];
                  case 7:
                    return fA.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(fA.color, fA.width, G, i.curves)];
                  case 8:
                    return xA.sent(), [3, 11];
                  case 9:
                    return [4, this.renderSolidBorder(fA.color, G, i.curves)];
                  case 10:
                    xA.sent(), xA.label = 11;
                  case 11:
                    G++, xA.label = 12;
                  case 12:
                    return k++, [3, 3];
                  case 13:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          }, e.prototype.renderDashedDottedBorder = function(i, s, w, Q, O) {
            return u(this, void 0, void 0, function() {
              var G, k, iA, fA, wA, xA, oe, JA, ee, De, he, ue, qe, _e, Se, se, Se, se;
              return p(this, function(Ve) {
                return this.ctx.save(), G = Df(Q, w), k = eu(Q, w), O === 2 && (this.path(k), this.ctx.clip()), rn(k[0]) ? (iA = k[0].start.x, fA = k[0].start.y) : (iA = k[0].x, fA = k[0].y), rn(k[1]) ? (wA = k[1].end.x, xA = k[1].end.y) : (wA = k[1].x, xA = k[1].y), w === 0 || w === 2 ? oe = Math.abs(iA - wA) : oe = Math.abs(fA - xA), this.ctx.beginPath(), O === 3 ? this.formatPath(G) : this.formatPath(k.slice(0, 2)), JA = s < 3 ? s * 3 : s * 2, ee = s < 3 ? s * 2 : s, O === 3 && (JA = s, ee = s), De = !0, oe <= JA * 2 ? De = !1 : oe <= JA * 2 + ee ? (he = oe / (2 * JA + ee), JA *= he, ee *= he) : (ue = Math.floor((oe + ee) / (JA + ee)), qe = (oe - ue * JA) / (ue - 1), _e = (oe - (ue + 1) * JA) / ue, ee = _e <= 0 || Math.abs(ee - qe) < Math.abs(ee - _e) ? qe : _e), De && (O === 3 ? this.ctx.setLineDash([0, JA + ee]) : this.ctx.setLineDash([JA, ee])), O === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = s) : this.ctx.lineWidth = s * 2 + 1.1, this.ctx.strokeStyle = yt(i), this.ctx.stroke(), this.ctx.setLineDash([]), O === 2 && (rn(k[0]) && (Se = k[3], se = k[0], this.ctx.beginPath(), this.formatPath([new ne(Se.end.x, Se.end.y), new ne(se.start.x, se.start.y)]), this.ctx.stroke()), rn(k[1]) && (Se = k[1], se = k[2], this.ctx.beginPath(), this.formatPath([new ne(Se.end.x, Se.end.y), new ne(se.start.x, se.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
                  2
                  /*return*/
                ];
              });
            });
          }, e.prototype.render = function(i) {
            return u(this, void 0, void 0, function() {
              var s;
              return p(this, function(w) {
                switch (w.label) {
                  case 0:
                    return this.options.backgroundColor && (this.ctx.fillStyle = yt(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), s = Of(i), [4, this.renderStack(s)];
                  case 1:
                    return w.sent(), this.applyEffects([]), [2, this.canvas];
                }
              });
            });
          }, e;
        }(nu)
      ), Xf = function(r) {
        return r instanceof Ll || r instanceof El ? !0 : r instanceof Kc && r.type !== Wa && r.type !== Va;
      }, Jf = function(r, e) {
        switch (r) {
          case 0:
            return Za(e);
          case 2:
            return If(e);
          case 1:
          default:
            return $a(e);
        }
      }, zf = function(r) {
        switch (r) {
          case 1:
            return "center";
          case 2:
            return "right";
          case 0:
          default:
            return "left";
        }
      }, Yf = ["-apple-system", "system-ui"], qf = function(r) {
        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? r.filter(function(e) {
          return Yf.indexOf(e) === -1;
        }) : r;
      }, Zf = (
        /** @class */
        function(r) {
          c(e, r);
          function e(i, s) {
            var w = r.call(this, i, s) || this;
            return w.canvas = s.canvas ? s.canvas : document.createElement("canvas"), w.ctx = w.canvas.getContext("2d"), w.options = s, w.canvas.width = Math.floor(s.width * s.scale), w.canvas.height = Math.floor(s.height * s.scale), w.canvas.style.width = s.width + "px", w.canvas.style.height = s.height + "px", w.ctx.scale(w.options.scale, w.options.scale), w.ctx.translate(-s.x, -s.y), w.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + s.width + "x" + s.height + " at " + s.x + "," + s.y + ") with scale " + s.scale), w;
          }
          return e.prototype.render = function(i) {
            return u(this, void 0, void 0, function() {
              var s, w;
              return p(this, function(Q) {
                switch (Q.label) {
                  case 0:
                    return s = zo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, i), [4, $f(s)];
                  case 1:
                    return w = Q.sent(), this.options.backgroundColor && (this.ctx.fillStyle = yt(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(w, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
                }
              });
            });
          }, e;
        }(nu)
      ), $f = function(r) {
        return new Promise(function(e, i) {
          var s = new Image();
          s.onload = function() {
            e(s);
          }, s.onerror = i, s.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r));
        });
      }, Ah = (
        /** @class */
        function() {
          function r(e) {
            var i = e.id, s = e.enabled;
            this.id = i, this.enabled = s, this.start = Date.now();
          }
          return r.prototype.debug = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, v([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
          }, r.prototype.getTime = function() {
            return Date.now() - this.start;
          }, r.prototype.info = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, v([this.id, this.getTime() + "ms"], e));
          }, r.prototype.warn = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, v([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
          }, r.prototype.error = function() {
            for (var e = [], i = 0; i < arguments.length; i++)
              e[i] = arguments[i];
            this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, v([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
          }, r.instances = {}, r;
        }()
      ), eh = (
        /** @class */
        function() {
          function r(e, i) {
            var s;
            this.windowBounds = i, this.instanceName = "#" + r.instanceCount++, this.logger = new Ah({ id: this.instanceName, enabled: e.logging }), this.cache = (s = e.cache) !== null && s !== void 0 ? s : new yf(this, e);
          }
          return r.instanceCount = 1, r;
        }()
      ), th = function(r, e) {
        return e === void 0 && (e = {}), rh(r, e);
      };
      typeof window < "u" && zl.setContext(window);
      var rh = function(r, e) {
        return u(void 0, void 0, void 0, function() {
          var i, s, w, Q, O, G, k, iA, fA, wA, xA, oe, JA, ee, De, he, ue, qe, _e, Se, Ve, se, Ve, We, Ne, Tt, xr, Wr, it, $t, ks, Sr, Hr, wi, Mn, Gs, vi, mi, us, yi;
          return p(this, function(fs) {
            switch (fs.label) {
              case 0:
                if (!r || typeof r != "object")
                  return [2, Promise.reject("Invalid element provided as first argument")];
                if (i = r.ownerDocument, !i)
                  throw new Error("Element is not attached to a Document");
                if (s = i.defaultView, !s)
                  throw new Error("Document is not attached to a Window");
                return w = {
                  allowTaint: (We = e.allowTaint) !== null && We !== void 0 ? We : !1,
                  imageTimeout: (Ne = e.imageTimeout) !== null && Ne !== void 0 ? Ne : 15e3,
                  proxy: e.proxy,
                  useCORS: (Tt = e.useCORS) !== null && Tt !== void 0 ? Tt : !1
                }, Q = d({ logging: (xr = e.logging) !== null && xr !== void 0 ? xr : !0, cache: e.cache }, w), O = {
                  windowWidth: (Wr = e.windowWidth) !== null && Wr !== void 0 ? Wr : s.innerWidth,
                  windowHeight: (it = e.windowHeight) !== null && it !== void 0 ? it : s.innerHeight,
                  scrollX: ($t = e.scrollX) !== null && $t !== void 0 ? $t : s.pageXOffset,
                  scrollY: (ks = e.scrollY) !== null && ks !== void 0 ? ks : s.pageYOffset
                }, G = new f(O.scrollX, O.scrollY, O.windowWidth, O.windowHeight), k = new eh(Q, G), iA = (Sr = e.foreignObjectRendering) !== null && Sr !== void 0 ? Sr : !1, fA = {
                  allowTaint: (Hr = e.allowTaint) !== null && Hr !== void 0 ? Hr : !1,
                  onclone: e.onclone,
                  ignoreElements: e.ignoreElements,
                  inlineImages: iA,
                  copyStyles: iA
                }, k.logger.debug("Starting document clone with size " + G.width + "x" + G.height + " scrolled to " + -G.left + "," + -G.top), wA = new Xl(k, r, fA), xA = wA.clonedReferenceElement, xA ? [4, wA.toIFrame(i, G)] : [2, Promise.reject("Unable to find element in cloned iframe")];
              case 1:
                return oe = fs.sent(), JA = kc(xA) || rf(xA) ? l(xA.ownerDocument) : m(k, xA), ee = JA.width, De = JA.height, he = JA.left, ue = JA.top, qe = nh(k, xA, e.backgroundColor), _e = {
                  canvas: e.canvas,
                  backgroundColor: qe,
                  scale: (Mn = (wi = e.scale) !== null && wi !== void 0 ? wi : s.devicePixelRatio) !== null && Mn !== void 0 ? Mn : 1,
                  x: ((Gs = e.x) !== null && Gs !== void 0 ? Gs : 0) + he,
                  y: ((vi = e.y) !== null && vi !== void 0 ? vi : 0) + ue,
                  width: (mi = e.width) !== null && mi !== void 0 ? mi : Math.ceil(ee),
                  height: (us = e.height) !== null && us !== void 0 ? us : Math.ceil(De)
                }, iA ? (k.logger.debug("Document cloned, using foreign object rendering"), Ve = new Zf(k, _e), [4, Ve.render(xA)]) : [3, 3];
              case 2:
                return Se = fs.sent(), [3, 5];
              case 3:
                return k.logger.debug("Document cloned, element located at " + he + "," + ue + " with size " + ee + "x" + De + " using computed rendering"), k.logger.debug("Starting DOM parsing"), se = Sl(k, xA), qe === se.styles.backgroundColor && (se.styles.backgroundColor = Et.TRANSPARENT), k.logger.debug("Starting renderer for element at " + _e.x + "," + _e.y + " with size " + _e.width + "x" + _e.height), Ve = new Wf(k, _e), [4, Ve.render(se)];
              case 4:
                Se = fs.sent(), fs.label = 5;
              case 5:
                return (!((yi = e.removeContainer) !== null && yi !== void 0) || yi) && (Xl.destroy(oe) || k.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), k.logger.debug("Finished rendering"), [2, Se];
            }
          });
        });
      }, nh = function(r, e, i) {
        var s = e.ownerDocument, w = s.documentElement ? An(r, getComputedStyle(s.documentElement).backgroundColor) : Et.TRANSPARENT, Q = s.body ? An(r, getComputedStyle(s.body).backgroundColor) : Et.TRANSPARENT, O = typeof i == "string" ? An(r, i) : i === null ? Et.TRANSPARENT : 4294967295;
        return e === s.documentElement ? Zr(w) ? Zr(Q) ? O : Q : w : O;
      };
      return th;
    });
  }(al)), al.exports;
}
/*!
 * html2pdf.js v0.10.1
 * Copyright (c) 2021 Erik Koopmans
 * Released under the MIT License.
 */
(function(o, t) {
  (function(c, d) {
    o.exports = d(ud, fd());
  })(self, function(n, c) {
    return (
      /******/
      function() {
        var d = {
          /***/
          "./src/plugin/hyperlinks.js": (
            /*!**********************************!*\
              !*** ./src/plugin/hyperlinks.js ***!
              \**********************************/
            /***/
            function(f, m, l) {
              l.r(m), l(
                /*! core-js/modules/web.dom-collections.for-each.js */
                "./node_modules/core-js/modules/web.dom-collections.for-each.js"
              ), l(
                /*! core-js/modules/es.string.link.js */
                "./node_modules/core-js/modules/es.string.link.js"
              );
              var y = l(
                /*! ../worker.js */
                "./src/worker.js"
              ), C = l(
                /*! ../utils.js */
                "./src/utils.js"
              ), g = [], L = {
                toContainer: y.default.prototype.toContainer,
                toPdf: y.default.prototype.toPdf
              };
              y.default.prototype.toContainer = function() {
                return L.toContainer.call(this).then(function() {
                  if (this.opt.enableLinks) {
                    var b = this.prop.container, U = b.querySelectorAll("a"), I = (0, C.unitConvert)(b.getBoundingClientRect(), this.prop.pageSize.k);
                    g = [], Array.prototype.forEach.call(U, function(M) {
                      for (var R = M.getClientRects(), Z = 0; Z < R.length; Z++) {
                        var AA = (0, C.unitConvert)(R[Z], this.prop.pageSize.k);
                        AA.left -= I.left, AA.top -= I.top;
                        var V = Math.floor(AA.top / this.prop.pageSize.inner.height) + 1, dA = this.opt.margin[0] + AA.top % this.prop.pageSize.inner.height, cA = this.opt.margin[1] + AA.left;
                        g.push({
                          page: V,
                          top: dA,
                          left: cA,
                          clientRect: AA,
                          link: M
                        });
                      }
                    }, this);
                  }
                });
              }, y.default.prototype.toPdf = function() {
                return L.toPdf.call(this).then(function() {
                  if (this.opt.enableLinks) {
                    g.forEach(function(U) {
                      this.prop.pdf.setPage(U.page), this.prop.pdf.link(U.left, U.top, U.clientRect.width, U.clientRect.height, {
                        url: U.link.href
                      });
                    }, this);
                    var b = this.prop.pdf.internal.getNumberOfPages();
                    this.prop.pdf.setPage(b);
                  }
                });
              };
            }
          ),
          /***/
          "./src/plugin/jspdf-plugin.js": (
            /*!************************************!*\
              !*** ./src/plugin/jspdf-plugin.js ***!
              \************************************/
            /***/
            function(f, m, l) {
              l.r(m), l(
                /*! core-js/modules/es.symbol.js */
                "./node_modules/core-js/modules/es.symbol.js"
              ), l(
                /*! core-js/modules/es.symbol.description.js */
                "./node_modules/core-js/modules/es.symbol.description.js"
              ), l(
                /*! core-js/modules/es.object.to-string.js */
                "./node_modules/core-js/modules/es.object.to-string.js"
              ), l(
                /*! core-js/modules/es.symbol.iterator.js */
                "./node_modules/core-js/modules/es.symbol.iterator.js"
              ), l(
                /*! core-js/modules/es.array.iterator.js */
                "./node_modules/core-js/modules/es.array.iterator.js"
              ), l(
                /*! core-js/modules/es.string.iterator.js */
                "./node_modules/core-js/modules/es.string.iterator.js"
              ), l(
                /*! core-js/modules/web.dom-collections.iterator.js */
                "./node_modules/core-js/modules/web.dom-collections.iterator.js"
              );
              var y = l(
                /*! jspdf */
                "jspdf"
              );
              function C(g) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? C = function(E) {
                  return typeof E;
                } : C = function(E) {
                  return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
                }, C(g);
              }
              y.jsPDF.getPageSize = function(g, L, E) {
                if (C(g) === "object") {
                  var x = g;
                  g = x.orientation, L = x.unit || L, E = x.format || E;
                }
                L = L || "mm", E = E || "a4", g = ("" + (g || "P")).toLowerCase();
                var b = ("" + E).toLowerCase(), U = {
                  a0: [2383.94, 3370.39],
                  a1: [1683.78, 2383.94],
                  a2: [1190.55, 1683.78],
                  a3: [841.89, 1190.55],
                  a4: [595.28, 841.89],
                  a5: [419.53, 595.28],
                  a6: [297.64, 419.53],
                  a7: [209.76, 297.64],
                  a8: [147.4, 209.76],
                  a9: [104.88, 147.4],
                  a10: [73.7, 104.88],
                  b0: [2834.65, 4008.19],
                  b1: [2004.09, 2834.65],
                  b2: [1417.32, 2004.09],
                  b3: [1000.63, 1417.32],
                  b4: [708.66, 1000.63],
                  b5: [498.9, 708.66],
                  b6: [354.33, 498.9],
                  b7: [249.45, 354.33],
                  b8: [175.75, 249.45],
                  b9: [124.72, 175.75],
                  b10: [87.87, 124.72],
                  c0: [2599.37, 3676.54],
                  c1: [1836.85, 2599.37],
                  c2: [1298.27, 1836.85],
                  c3: [918.43, 1298.27],
                  c4: [649.13, 918.43],
                  c5: [459.21, 649.13],
                  c6: [323.15, 459.21],
                  c7: [229.61, 323.15],
                  c8: [161.57, 229.61],
                  c9: [113.39, 161.57],
                  c10: [79.37, 113.39],
                  dl: [311.81, 623.62],
                  letter: [612, 792],
                  "government-letter": [576, 756],
                  legal: [612, 1008],
                  "junior-legal": [576, 360],
                  ledger: [1224, 792],
                  tabloid: [792, 1224],
                  "credit-card": [153, 243]
                };
                switch (L) {
                  case "pt":
                    var I = 1;
                    break;
                  case "mm":
                    var I = 72 / 25.4;
                    break;
                  case "cm":
                    var I = 72 / 2.54;
                    break;
                  case "in":
                    var I = 72;
                    break;
                  case "px":
                    var I = 72 / 96;
                    break;
                  case "pc":
                    var I = 12;
                    break;
                  case "em":
                    var I = 12;
                    break;
                  case "ex":
                    var I = 6;
                    break;
                  default:
                    throw "Invalid unit: " + L;
                }
                if (U.hasOwnProperty(b))
                  var M = U[b][1] / I, R = U[b][0] / I;
                else
                  try {
                    var M = E[1], R = E[0];
                  } catch {
                    throw new Error("Invalid format: " + E);
                  }
                if (g === "p" || g === "portrait") {
                  if (g = "p", R > M) {
                    var Z = R;
                    R = M, M = Z;
                  }
                } else if (g === "l" || g === "landscape") {
                  if (g = "l", M > R) {
                    var Z = R;
                    R = M, M = Z;
                  }
                } else
                  throw "Invalid orientation: " + g;
                var AA = {
                  width: R,
                  height: M,
                  unit: L,
                  k: I
                };
                return AA;
              }, m.default = y.jsPDF;
            }
          ),
          /***/
          "./src/plugin/pagebreaks.js": (
            /*!**********************************!*\
              !*** ./src/plugin/pagebreaks.js ***!
              \**********************************/
            /***/
            function(f, m, l) {
              l.r(m), l(
                /*! core-js/modules/es.array.concat.js */
                "./node_modules/core-js/modules/es.array.concat.js"
              ), l(
                /*! core-js/modules/es.array.slice.js */
                "./node_modules/core-js/modules/es.array.slice.js"
              ), l(
                /*! core-js/modules/es.array.join.js */
                "./node_modules/core-js/modules/es.array.join.js"
              ), l(
                /*! core-js/modules/web.dom-collections.for-each.js */
                "./node_modules/core-js/modules/web.dom-collections.for-each.js"
              ), l(
                /*! core-js/modules/es.object.keys.js */
                "./node_modules/core-js/modules/es.object.keys.js"
              );
              var y = l(
                /*! ../worker.js */
                "./src/worker.js"
              ), C = l(
                /*! ../utils.js */
                "./src/utils.js"
              ), g = {
                toContainer: y.default.prototype.toContainer
              };
              y.default.template.opt.pagebreak = {
                mode: ["css", "legacy"],
                before: [],
                after: [],
                avoid: []
              }, y.default.prototype.toContainer = function() {
                return g.toContainer.call(this).then(function() {
                  var x = this.prop.container, b = this.prop.pageSize.inner.px.height, U = [].concat(this.opt.pagebreak.mode), I = {
                    avoidAll: U.indexOf("avoid-all") !== -1,
                    css: U.indexOf("css") !== -1,
                    legacy: U.indexOf("legacy") !== -1
                  }, M = {}, R = this;
                  ["before", "after", "avoid"].forEach(function(V) {
                    var dA = I.avoidAll && V === "avoid";
                    M[V] = dA ? [] : [].concat(R.opt.pagebreak[V] || []), M[V].length > 0 && (M[V] = Array.prototype.slice.call(x.querySelectorAll(M[V].join(", "))));
                  });
                  var Z = x.querySelectorAll(".html2pdf__page-break");
                  Z = Array.prototype.slice.call(Z);
                  var AA = x.querySelectorAll("*");
                  Array.prototype.forEach.call(AA, function(dA) {
                    var cA = {
                      before: !1,
                      after: I.legacy && Z.indexOf(dA) !== -1,
                      avoid: I.avoidAll
                    };
                    if (I.css) {
                      var T = window.getComputedStyle(dA), _ = ["always", "page", "left", "right"], z = ["avoid", "avoid-page"];
                      cA = {
                        before: cA.before || _.indexOf(T.breakBefore || T.pageBreakBefore) !== -1,
                        after: cA.after || _.indexOf(T.breakAfter || T.pageBreakAfter) !== -1,
                        avoid: cA.avoid || z.indexOf(T.breakInside || T.pageBreakInside) !== -1
                      };
                    }
                    Object.keys(cA).forEach(function(UA) {
                      cA[UA] = cA[UA] || M[UA].indexOf(dA) !== -1;
                    });
                    var J = dA.getBoundingClientRect();
                    if (cA.avoid && !cA.before) {
                      var tA = Math.floor(J.top / b), aA = Math.floor(J.bottom / b), vA = Math.abs(J.bottom - J.top) / b;
                      aA !== tA && vA <= 1 && (cA.before = !0);
                    }
                    if (cA.before) {
                      var hA = (0, C.createElement)("div", {
                        style: {
                          display: "block",
                          height: b - J.top % b + "px"
                        }
                      });
                      dA.parentNode.insertBefore(hA, dA);
                    }
                    if (cA.after) {
                      var hA = (0, C.createElement)("div", {
                        style: {
                          display: "block",
                          height: b - J.bottom % b + "px"
                        }
                      });
                      dA.parentNode.insertBefore(hA, dA.nextSibling);
                    }
                  });
                });
              };
            }
          ),
          /***/
          "./src/utils.js": (
            /*!**********************!*\
              !*** ./src/utils.js ***!
              \**********************/
            /***/
            function(f, m, l) {
              l.r(m), l.d(m, {
                /* harmony export */
                objType: function() {
                  return (
                    /* binding */
                    C
                  );
                },
                /* harmony export */
                createElement: function() {
                  return (
                    /* binding */
                    g
                  );
                },
                /* harmony export */
                cloneNode: function() {
                  return (
                    /* binding */
                    L
                  );
                },
                /* harmony export */
                unitConvert: function() {
                  return (
                    /* binding */
                    E
                  );
                },
                /* harmony export */
                toPx: function() {
                  return (
                    /* binding */
                    x
                  );
                }
                /* harmony export */
              }), l(
                /*! core-js/modules/es.number.constructor.js */
                "./node_modules/core-js/modules/es.number.constructor.js"
              ), l(
                /*! core-js/modules/es.symbol.js */
                "./node_modules/core-js/modules/es.symbol.js"
              ), l(
                /*! core-js/modules/es.symbol.description.js */
                "./node_modules/core-js/modules/es.symbol.description.js"
              ), l(
                /*! core-js/modules/es.object.to-string.js */
                "./node_modules/core-js/modules/es.object.to-string.js"
              ), l(
                /*! core-js/modules/es.symbol.iterator.js */
                "./node_modules/core-js/modules/es.symbol.iterator.js"
              ), l(
                /*! core-js/modules/es.array.iterator.js */
                "./node_modules/core-js/modules/es.array.iterator.js"
              ), l(
                /*! core-js/modules/es.string.iterator.js */
                "./node_modules/core-js/modules/es.string.iterator.js"
              ), l(
                /*! core-js/modules/web.dom-collections.iterator.js */
                "./node_modules/core-js/modules/web.dom-collections.iterator.js"
              );
              function y(b) {
                "@babel/helpers - typeof";
                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? y = function(I) {
                  return typeof I;
                } : y = function(I) {
                  return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I;
                }, y(b);
              }
              var C = function(U) {
                var I = y(U);
                return I === "undefined" ? "undefined" : I === "string" || U instanceof String ? "string" : I === "number" || U instanceof Number ? "number" : I === "function" || U instanceof Function ? "function" : U && U.constructor === Array ? "array" : U && U.nodeType === 1 ? "element" : I === "object" ? "object" : "unknown";
              }, g = function(U, I) {
                var M = document.createElement(U);
                if (I.className && (M.className = I.className), I.innerHTML) {
                  M.innerHTML = I.innerHTML;
                  for (var R = M.getElementsByTagName("script"), Z = R.length; Z-- > 0; null)
                    R[Z].parentNode.removeChild(R[Z]);
                }
                for (var AA in I.style)
                  M.style[AA] = I.style[AA];
                return M;
              }, L = function b(U, I) {
                for (var M = U.nodeType === 3 ? document.createTextNode(U.nodeValue) : U.cloneNode(!1), R = U.firstChild; R; R = R.nextSibling)
                  (I === !0 || R.nodeType !== 1 || R.nodeName !== "SCRIPT") && M.appendChild(b(R, I));
                return U.nodeType === 1 && (U.nodeName === "CANVAS" ? (M.width = U.width, M.height = U.height, M.getContext("2d").drawImage(U, 0, 0)) : (U.nodeName === "TEXTAREA" || U.nodeName === "SELECT") && (M.value = U.value), M.addEventListener("load", function() {
                  M.scrollTop = U.scrollTop, M.scrollLeft = U.scrollLeft;
                }, !0)), M;
              }, E = function(U, I) {
                if (C(U) === "number")
                  return U * 72 / 96 / I;
                var M = {};
                for (var R in U)
                  M[R] = U[R] * 72 / 96 / I;
                return M;
              }, x = function(U, I) {
                return Math.floor(U * I / 72 * 96);
              };
            }
          ),
          /***/
          "./src/worker.js": (
            /*!***********************!*\
              !*** ./src/worker.js ***!
              \***********************/
            /***/
            function(f, m, l) {
              l.r(m), l(
                /*! core-js/modules/es.object.assign.js */
                "./node_modules/core-js/modules/es.object.assign.js"
              ), l(
                /*! core-js/modules/es.array.map.js */
                "./node_modules/core-js/modules/es.array.map.js"
              ), l(
                /*! core-js/modules/es.object.keys.js */
                "./node_modules/core-js/modules/es.object.keys.js"
              ), l(
                /*! core-js/modules/es.array.concat.js */
                "./node_modules/core-js/modules/es.array.concat.js"
              ), l(
                /*! core-js/modules/es.object.to-string.js */
                "./node_modules/core-js/modules/es.object.to-string.js"
              ), l(
                /*! core-js/modules/es.regexp.to-string.js */
                "./node_modules/core-js/modules/es.regexp.to-string.js"
              ), l(
                /*! core-js/modules/es.function.name.js */
                "./node_modules/core-js/modules/es.function.name.js"
              ), l(
                /*! core-js/modules/web.dom-collections.for-each.js */
                "./node_modules/core-js/modules/web.dom-collections.for-each.js"
              );
              var y = l(
                /*! jspdf */
                "jspdf"
              ), C = l(
                /*! html2canvas */
                "html2canvas"
              ), g = l(
                /*! ./utils.js */
                "./src/utils.js"
              ), L = l(
                /*! es6-promise */
                "./node_modules/es6-promise/dist/es6-promise.js"
              ), E = /* @__PURE__ */ l.n(L), x = E().Promise, b = function U(I) {
                var M = Object.assign(U.convert(x.resolve()), JSON.parse(JSON.stringify(U.template))), R = U.convert(x.resolve(), M);
                return R = R.setProgress(1, U, 1, [U]), R = R.set(I), R;
              };
              b.prototype = Object.create(x.prototype), b.prototype.constructor = b, b.convert = function(I, M) {
                return I.__proto__ = M || b.prototype, I;
              }, b.template = {
                prop: {
                  src: null,
                  container: null,
                  overlay: null,
                  canvas: null,
                  img: null,
                  pdf: null,
                  pageSize: null
                },
                progress: {
                  val: 0,
                  state: null,
                  n: 0,
                  stack: []
                },
                opt: {
                  filename: "file.pdf",
                  margin: [0, 0, 0, 0],
                  image: {
                    type: "jpeg",
                    quality: 0.95
                  },
                  enableLinks: !0,
                  html2canvas: {},
                  jsPDF: {}
                }
              }, b.prototype.from = function(I, M) {
                function R(Z) {
                  switch ((0, g.objType)(Z)) {
                    case "string":
                      return "string";
                    case "element":
                      return Z.nodeName.toLowerCase === "canvas" ? "canvas" : "element";
                    default:
                      return "unknown";
                  }
                }
                return this.then(function() {
                  switch (M = M || R(I), M) {
                    case "string":
                      return this.set({
                        src: (0, g.createElement)("div", {
                          innerHTML: I
                        })
                      });
                    case "element":
                      return this.set({
                        src: I
                      });
                    case "canvas":
                      return this.set({
                        canvas: I
                      });
                    case "img":
                      return this.set({
                        img: I
                      });
                    default:
                      return this.error("Unknown source type.");
                  }
                });
              }, b.prototype.to = function(I) {
                switch (I) {
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
              }, b.prototype.toContainer = function() {
                var I = [function() {
                  return this.prop.src || this.error("Cannot duplicate - no source HTML.");
                }, function() {
                  return this.prop.pageSize || this.setPageSize();
                }];
                return this.thenList(I).then(function() {
                  var R = {
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1e3,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    backgroundColor: "rgba(0,0,0,0.8)"
                  }, Z = {
                    position: "absolute",
                    width: this.prop.pageSize.inner.width + this.prop.pageSize.unit,
                    left: 0,
                    right: 0,
                    top: 0,
                    height: "auto",
                    margin: "auto",
                    backgroundColor: "white"
                  };
                  R.opacity = 0;
                  var AA = (0, g.cloneNode)(this.prop.src, this.opt.html2canvas.javascriptEnabled);
                  this.prop.overlay = (0, g.createElement)("div", {
                    className: "html2pdf__overlay",
                    style: R
                  }), this.prop.container = (0, g.createElement)("div", {
                    className: "html2pdf__container",
                    style: Z
                  }), this.prop.container.appendChild(AA), this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay);
                });
              }, b.prototype.toCanvas = function() {
                var I = [function() {
                  return document.body.contains(this.prop.container) || this.toContainer();
                }];
                return this.thenList(I).then(function() {
                  var R = Object.assign({}, this.opt.html2canvas);
                  return delete R.onrendered, C(this.prop.container, R);
                }).then(function(R) {
                  var Z = this.opt.html2canvas.onrendered || function() {
                  };
                  Z(R), this.prop.canvas = R, document.body.removeChild(this.prop.overlay);
                });
              }, b.prototype.toImg = function() {
                var I = [function() {
                  return this.prop.canvas || this.toCanvas();
                }];
                return this.thenList(I).then(function() {
                  var R = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
                  this.prop.img = document.createElement("img"), this.prop.img.src = R;
                });
              }, b.prototype.toPdf = function() {
                var I = [function() {
                  return this.prop.canvas || this.toCanvas();
                }];
                return this.thenList(I).then(function() {
                  var R = this.prop.canvas, Z = this.opt, AA = R.height, V = Math.floor(R.width * this.prop.pageSize.inner.ratio), dA = Math.ceil(AA / V), cA = this.prop.pageSize.inner.height, T = document.createElement("canvas"), _ = T.getContext("2d");
                  T.width = R.width, T.height = V, this.prop.pdf = this.prop.pdf || new y.jsPDF(Z.jsPDF);
                  for (var z = 0; z < dA; z++) {
                    z === dA - 1 && AA % V !== 0 && (T.height = AA % V, cA = T.height * this.prop.pageSize.inner.width / T.width);
                    var J = T.width, tA = T.height;
                    _.fillStyle = "white", _.fillRect(0, 0, J, tA), _.drawImage(R, 0, z * V, J, tA, 0, 0, J, tA), z && this.prop.pdf.addPage();
                    var aA = T.toDataURL("image/" + Z.image.type, Z.image.quality);
                    this.prop.pdf.addImage(aA, Z.image.type, Z.margin[1], Z.margin[0], this.prop.pageSize.inner.width, cA);
                  }
                });
              }, b.prototype.output = function(I, M, R) {
                return R = R || "pdf", R.toLowerCase() === "img" || R.toLowerCase() === "image" ? this.outputImg(I, M) : this.outputPdf(I, M);
              }, b.prototype.outputPdf = function(I, M) {
                var R = [function() {
                  return this.prop.pdf || this.toPdf();
                }];
                return this.thenList(R).then(function() {
                  return this.prop.pdf.output(I, M);
                });
              }, b.prototype.outputImg = function(I, M) {
                var R = [function() {
                  return this.prop.img || this.toImg();
                }];
                return this.thenList(R).then(function() {
                  switch (I) {
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
                      throw 'Image output type "' + I + '" is not supported.';
                  }
                });
              }, b.prototype.save = function(I) {
                var M = [function() {
                  return this.prop.pdf || this.toPdf();
                }];
                return this.thenList(M).set(I ? {
                  filename: I
                } : null).then(function() {
                  this.prop.pdf.save(this.opt.filename);
                });
              }, b.prototype.set = function(I) {
                if ((0, g.objType)(I) !== "object")
                  return this;
                var M = Object.keys(I || {}).map(function(R) {
                  switch (R) {
                    case "margin":
                      return this.setMargin.bind(this, I.margin);
                    case "jsPDF":
                      return function() {
                        return this.opt.jsPDF = I.jsPDF, this.setPageSize();
                      };
                    case "pageSize":
                      return this.setPageSize.bind(this, I.pageSize);
                    default:
                      return R in b.template.prop ? function() {
                        this.prop[R] = I[R];
                      } : function() {
                        this.opt[R] = I[R];
                      };
                  }
                }, this);
                return this.then(function() {
                  return this.thenList(M);
                });
              }, b.prototype.get = function(I, M) {
                return this.then(function() {
                  var Z = I in b.template.prop ? this.prop[I] : this.opt[I];
                  return M ? M(Z) : Z;
                });
              }, b.prototype.setMargin = function(I) {
                return this.then(function() {
                  switch ((0, g.objType)(I)) {
                    case "number":
                      I = [I, I, I, I];
                    case "array":
                      if (I.length === 2 && (I = [I[0], I[1], I[0], I[1]]), I.length === 4)
                        break;
                    default:
                      return this.error("Invalid margin array.");
                  }
                  this.opt.margin = I;
                }).then(this.setPageSize);
              }, b.prototype.setPageSize = function(I) {
                return this.then(function() {
                  I = I || y.jsPDF.getPageSize(this.opt.jsPDF), I.hasOwnProperty("inner") || (I.inner = {
                    width: I.width - this.opt.margin[1] - this.opt.margin[3],
                    height: I.height - this.opt.margin[0] - this.opt.margin[2]
                  }, I.inner.px = {
                    width: (0, g.toPx)(I.inner.width, I.k),
                    height: (0, g.toPx)(I.inner.height, I.k)
                  }, I.inner.ratio = I.inner.height / I.inner.width), this.prop.pageSize = I;
                });
              }, b.prototype.setProgress = function(I, M, R, Z) {
                return I != null && (this.progress.val = I), M != null && (this.progress.state = M), R != null && (this.progress.n = R), Z != null && (this.progress.stack = Z), this.progress.ratio = this.progress.val / this.progress.state, this;
              }, b.prototype.updateProgress = function(I, M, R, Z) {
                return this.setProgress(I ? this.progress.val + I : null, M || null, R ? this.progress.n + R : null, Z ? this.progress.stack.concat(Z) : null);
              }, b.prototype.then = function(I, M) {
                var R = this;
                return this.thenCore(I, M, function(AA, V) {
                  return R.updateProgress(null, null, 1, [AA]), x.prototype.then.call(this, function(cA) {
                    return R.updateProgress(null, AA), cA;
                  }).then(AA, V).then(function(cA) {
                    return R.updateProgress(1), cA;
                  });
                });
              }, b.prototype.thenCore = function(I, M, R) {
                R = R || x.prototype.then;
                var Z = this;
                I && (I = I.bind(Z)), M && (M = M.bind(Z));
                var AA = x.toString().indexOf("[native code]") !== -1 && x.name === "Promise", V = AA ? Z : b.convert(Object.assign({}, Z), x.prototype), dA = R.call(V, I, M);
                return b.convert(dA, Z.__proto__);
              }, b.prototype.thenExternal = function(I, M) {
                return x.prototype.then.call(this, I, M);
              }, b.prototype.thenList = function(I) {
                var M = this;
                return I.forEach(function(Z) {
                  M = M.thenCore(Z);
                }), M;
              }, b.prototype.catch = function(U) {
                U && (U = U.bind(this));
                var I = x.prototype.catch.call(this, U);
                return b.convert(I, this);
              }, b.prototype.catchExternal = function(I) {
                return x.prototype.catch.call(this, I);
              }, b.prototype.error = function(I) {
                return this.then(function() {
                  throw new Error(I);
                });
              }, b.prototype.using = b.prototype.set, b.prototype.saveAs = b.prototype.save, b.prototype.export = b.prototype.output, b.prototype.run = b.prototype.then, m.default = b;
            }
          ),
          /***/
          "./node_modules/core-js/internals/a-function.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/a-function.js ***!
              \******************************************************/
            /***/
            function(f) {
              f.exports = function(m) {
                if (typeof m != "function")
                  throw TypeError(String(m) + " is not a function");
                return m;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/a-possible-prototype.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
              \****************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              f.exports = function(C) {
                if (!y(C) && C !== null)
                  throw TypeError("Can't set " + String(C) + " as a prototype");
                return C;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/add-to-unscopables.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
              \**************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), C = l(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              ), g = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), L = y("unscopables"), E = Array.prototype;
              E[L] == null && g.f(E, L, {
                configurable: !0,
                value: C(null)
              }), f.exports = function(x) {
                E[L][x] = !0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/an-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/an-object.js ***!
              \*****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              f.exports = function(C) {
                if (!y(C))
                  throw TypeError(String(C) + " is not an object");
                return C;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-for-each.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/array-for-each.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/array-iteration */
                "./node_modules/core-js/internals/array-iteration.js"
              ).forEach, C = l(
                /*! ../internals/array-method-is-strict */
                "./node_modules/core-js/internals/array-method-is-strict.js"
              ), g = C("forEach");
              f.exports = g ? [].forEach : function(E) {
                return y(this, E, arguments.length > 1 ? arguments[1] : void 0);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-includes.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/array-includes.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), C = l(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              ), g = l(
                /*! ../internals/to-absolute-index */
                "./node_modules/core-js/internals/to-absolute-index.js"
              ), L = function(E) {
                return function(x, b, U) {
                  var I = y(x), M = C(I.length), R = g(U, M), Z;
                  if (E && b != b) {
                    for (; M > R; )
                      if (Z = I[R++], Z != Z) return !0;
                  } else for (; M > R; R++)
                    if ((E || R in I) && I[R] === b) return E || R || 0;
                  return !E && -1;
                };
              };
              f.exports = {
                // `Array.prototype.includes` method
                // https://tc39.es/ecma262/#sec-array.prototype.includes
                includes: L(!0),
                // `Array.prototype.indexOf` method
                // https://tc39.es/ecma262/#sec-array.prototype.indexof
                indexOf: L(!1)
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-iteration.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/array-iteration.js ***!
              \***********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/function-bind-context */
                "./node_modules/core-js/internals/function-bind-context.js"
              ), C = l(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              ), g = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), L = l(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              ), E = l(
                /*! ../internals/array-species-create */
                "./node_modules/core-js/internals/array-species-create.js"
              ), x = [].push, b = function(U) {
                var I = U == 1, M = U == 2, R = U == 3, Z = U == 4, AA = U == 6, V = U == 7, dA = U == 5 || AA;
                return function(cA, T, _, z) {
                  for (var J = g(cA), tA = C(J), aA = y(T, _, 3), vA = L(tA.length), hA = 0, UA = z || E, bA = I ? UA(cA, vA) : M || V ? UA(cA, 0) : void 0, PA, j; vA > hA; hA++) if ((dA || hA in tA) && (PA = tA[hA], j = aA(PA, hA, J), U))
                    if (I) bA[hA] = j;
                    else if (j) switch (U) {
                      case 3:
                        return !0;
                      case 5:
                        return PA;
                      case 6:
                        return hA;
                      case 2:
                        x.call(bA, PA);
                    }
                    else switch (U) {
                      case 4:
                        return !1;
                      case 7:
                        x.call(bA, PA);
                    }
                  return AA ? -1 : R || Z ? Z : bA;
                };
              };
              f.exports = {
                // `Array.prototype.forEach` method
                // https://tc39.es/ecma262/#sec-array.prototype.foreach
                forEach: b(0),
                // `Array.prototype.map` method
                // https://tc39.es/ecma262/#sec-array.prototype.map
                map: b(1),
                // `Array.prototype.filter` method
                // https://tc39.es/ecma262/#sec-array.prototype.filter
                filter: b(2),
                // `Array.prototype.some` method
                // https://tc39.es/ecma262/#sec-array.prototype.some
                some: b(3),
                // `Array.prototype.every` method
                // https://tc39.es/ecma262/#sec-array.prototype.every
                every: b(4),
                // `Array.prototype.find` method
                // https://tc39.es/ecma262/#sec-array.prototype.find
                find: b(5),
                // `Array.prototype.findIndex` method
                // https://tc39.es/ecma262/#sec-array.prototype.findIndex
                findIndex: b(6),
                // `Array.prototype.filterReject` method
                // https://github.com/tc39/proposal-array-filtering
                filterReject: b(7)
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-method-has-species-support.js": (
            /*!****************************************************************************!*\
              !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
              \****************************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), C = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), g = l(
                /*! ../internals/engine-v8-version */
                "./node_modules/core-js/internals/engine-v8-version.js"
              ), L = C("species");
              f.exports = function(E) {
                return g >= 51 || !y(function() {
                  var x = [], b = x.constructor = {};
                  return b[L] = function() {
                    return { foo: 1 };
                  }, x[E](Boolean).foo !== 1;
                });
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-method-is-strict.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
              \******************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              f.exports = function(C, g) {
                var L = [][C];
                return !!L && y(function() {
                  L.call(null, g || function() {
                    throw 1;
                  }, 1);
                });
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-species-constructor.js": (
            /*!*********************************************************************!*\
              !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
              \*********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), C = l(
                /*! ../internals/is-array */
                "./node_modules/core-js/internals/is-array.js"
              ), g = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), L = g("species");
              f.exports = function(E) {
                var x;
                return C(E) && (x = E.constructor, typeof x == "function" && (x === Array || C(x.prototype)) ? x = void 0 : y(x) && (x = x[L], x === null && (x = void 0))), x === void 0 ? Array : x;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-species-create.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/array-species-create.js ***!
              \****************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/array-species-constructor */
                "./node_modules/core-js/internals/array-species-constructor.js"
              );
              f.exports = function(C, g) {
                return new (y(C))(g === 0 ? 0 : g);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof-raw.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/classof-raw.js ***!
              \*******************************************************/
            /***/
            function(f) {
              var m = {}.toString;
              f.exports = function(l) {
                return m.call(l).slice(8, -1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/classof.js ***!
              \***************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-string-tag-support */
                "./node_modules/core-js/internals/to-string-tag-support.js"
              ), C = l(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              ), g = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), L = g("toStringTag"), E = C(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", x = function(b, U) {
                try {
                  return b[U];
                } catch {
                }
              };
              f.exports = y ? C : function(b) {
                var U, I, M;
                return b === void 0 ? "Undefined" : b === null ? "Null" : typeof (I = x(U = Object(b), L)) == "string" ? I : E ? C(U) : (M = C(U)) == "Object" && typeof U.callee == "function" ? "Arguments" : M;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/copy-constructor-properties.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
              \***********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), C = l(
                /*! ../internals/own-keys */
                "./node_modules/core-js/internals/own-keys.js"
              ), g = l(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ), L = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              f.exports = function(E, x) {
                for (var b = C(x), U = L.f, I = g.f, M = 0; M < b.length; M++) {
                  var R = b[M];
                  y(E, R) || U(E, R, I(x, R));
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/correct-prototype-getter.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
              \********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              f.exports = !y(function() {
                function C() {
                }
                return C.prototype.constructor = null, Object.getPrototypeOf(new C()) !== C.prototype;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-html.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/create-html.js ***!
              \*******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              ), C = l(
                /*! ../internals/to-string */
                "./node_modules/core-js/internals/to-string.js"
              ), g = /"/g;
              f.exports = function(L, E, x, b) {
                var U = C(y(L)), I = "<" + E;
                return x !== "" && (I += " " + x + '="' + C(b).replace(g, "&quot;") + '"'), I + ">" + U + "</" + E + ">";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-iterator-constructor.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
              \***********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ).IteratorPrototype, C = l(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              ), g = l(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              ), L = l(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              ), E = l(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), x = function() {
                return this;
              };
              f.exports = function(b, U, I) {
                var M = U + " Iterator";
                return b.prototype = C(y, { next: g(1, I) }), L(b, M, !1, !0), E[M] = x, b;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-non-enumerable-property.js": (
            /*!**************************************************************************!*\
              !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
              \**************************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), g = l(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              f.exports = y ? function(L, E, x) {
                return C.f(L, E, g(1, x));
              } : function(L, E, x) {
                return L[E] = x, L;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property-descriptor.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
              \**********************************************************************/
            /***/
            function(f) {
              f.exports = function(m, l) {
                return {
                  enumerable: !(m & 1),
                  configurable: !(m & 2),
                  writable: !(m & 4),
                  value: l
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/create-property.js ***!
              \***********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-property-key */
                "./node_modules/core-js/internals/to-property-key.js"
              ), C = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), g = l(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              f.exports = function(L, E, x) {
                var b = y(E);
                b in L ? C.f(L, b, g(0, x)) : L[b] = x;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/define-iterator.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/define-iterator.js ***!
              \***********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/create-iterator-constructor */
                "./node_modules/core-js/internals/create-iterator-constructor.js"
              ), g = l(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              ), L = l(
                /*! ../internals/object-set-prototype-of */
                "./node_modules/core-js/internals/object-set-prototype-of.js"
              ), E = l(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              ), x = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), b = l(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), U = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), I = l(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), M = l(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), R = l(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ), Z = R.IteratorPrototype, AA = R.BUGGY_SAFARI_ITERATORS, V = U("iterator"), dA = "keys", cA = "values", T = "entries", _ = function() {
                return this;
              };
              f.exports = function(z, J, tA, aA, vA, hA, UA) {
                C(tA, J, aA);
                var bA = function(DA) {
                  if (DA === vA && eA) return eA;
                  if (!AA && DA in X) return X[DA];
                  switch (DA) {
                    case dA:
                      return function() {
                        return new tA(this, DA);
                      };
                    case cA:
                      return function() {
                        return new tA(this, DA);
                      };
                    case T:
                      return function() {
                        return new tA(this, DA);
                      };
                  }
                  return function() {
                    return new tA(this);
                  };
                }, PA = J + " Iterator", j = !1, X = z.prototype, q = X[V] || X["@@iterator"] || vA && X[vA], eA = !AA && q || bA(vA), uA = J == "Array" && X.entries || q, gA, FA, QA;
                if (uA && (gA = g(uA.call(new z())), Z !== Object.prototype && gA.next && (!I && g(gA) !== Z && (L ? L(gA, Z) : typeof gA[V] != "function" && x(gA, V, _)), E(gA, PA, !0, !0), I && (M[PA] = _))), vA == cA && q && q.name !== cA && (j = !0, eA = function() {
                  return q.call(this);
                }), (!I || UA) && X[V] !== eA && x(X, V, eA), M[J] = eA, vA)
                  if (FA = {
                    values: bA(cA),
                    keys: hA ? eA : bA(dA),
                    entries: bA(T)
                  }, UA) for (QA in FA)
                    (AA || j || !(QA in X)) && b(X, QA, FA[QA]);
                  else y({ target: J, proto: !0, forced: AA || j }, FA);
                return FA;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/define-well-known-symbol.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
              \********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/path */
                "./node_modules/core-js/internals/path.js"
              ), C = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), g = l(
                /*! ../internals/well-known-symbol-wrapped */
                "./node_modules/core-js/internals/well-known-symbol-wrapped.js"
              ), L = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f;
              f.exports = function(E) {
                var x = y.Symbol || (y.Symbol = {});
                C(x, E) || L(x, E, {
                  value: g.f(E)
                });
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/descriptors.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/descriptors.js ***!
              \*******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              f.exports = !y(function() {
                return Object.defineProperty({}, 1, { get: function() {
                  return 7;
                } })[1] != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/document-create-element.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/document-create-element.js ***!
              \*******************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), g = y.document, L = C(g) && C(g.createElement);
              f.exports = function(E) {
                return L ? g.createElement(E) : {};
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/dom-iterables.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/dom-iterables.js ***!
              \*********************************************************/
            /***/
            function(f) {
              f.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/engine-user-agent.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/get-built-in */
                "./node_modules/core-js/internals/get-built-in.js"
              );
              f.exports = y("navigator", "userAgent") || "";
            }
          ),
          /***/
          "./node_modules/core-js/internals/engine-v8-version.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/engine-user-agent */
                "./node_modules/core-js/internals/engine-user-agent.js"
              ), g = y.process, L = y.Deno, E = g && g.versions || L && L.version, x = E && E.v8, b, U;
              x ? (b = x.split("."), U = b[0] < 4 ? 1 : b[0] + b[1]) : C && (b = C.match(/Edge\/(\d+)/), (!b || b[1] >= 74) && (b = C.match(/Chrome\/(\d+)/), b && (U = b[1]))), f.exports = U && +U;
            }
          ),
          /***/
          "./node_modules/core-js/internals/enum-bug-keys.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
              \*********************************************************/
            /***/
            function(f) {
              f.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "./node_modules/core-js/internals/export.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/export.js ***!
              \**************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ).f, g = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), L = l(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), E = l(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              ), x = l(
                /*! ../internals/copy-constructor-properties */
                "./node_modules/core-js/internals/copy-constructor-properties.js"
              ), b = l(
                /*! ../internals/is-forced */
                "./node_modules/core-js/internals/is-forced.js"
              );
              f.exports = function(U, I) {
                var M = U.target, R = U.global, Z = U.stat, AA, V, dA, cA, T, _;
                if (R ? V = y : Z ? V = y[M] || E(M, {}) : V = (y[M] || {}).prototype, V) for (dA in I) {
                  if (T = I[dA], U.noTargetGet ? (_ = C(V, dA), cA = _ && _.value) : cA = V[dA], AA = b(R ? dA : M + (Z ? "." : "#") + dA, U.forced), !AA && cA !== void 0) {
                    if (typeof T == typeof cA) continue;
                    x(T, cA);
                  }
                  (U.sham || cA && cA.sham) && g(T, "sham", !0), L(V, dA, T, U);
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/fails.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/internals/fails.js ***!
              \*************************************************/
            /***/
            function(f) {
              f.exports = function(m) {
                try {
                  return !!m();
                } catch {
                  return !0;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/function-bind-context.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/core-js/internals/function-bind-context.js ***!
              \*****************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/a-function */
                "./node_modules/core-js/internals/a-function.js"
              );
              f.exports = function(C, g, L) {
                if (y(C), g === void 0) return C;
                switch (L) {
                  case 0:
                    return function() {
                      return C.call(g);
                    };
                  case 1:
                    return function(E) {
                      return C.call(g, E);
                    };
                  case 2:
                    return function(E, x) {
                      return C.call(g, E, x);
                    };
                  case 3:
                    return function(E, x, b) {
                      return C.call(g, E, x, b);
                    };
                }
                return function() {
                  return C.apply(g, arguments);
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/get-built-in.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/get-built-in.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = function(g) {
                return typeof g == "function" ? g : void 0;
              };
              f.exports = function(g, L) {
                return arguments.length < 2 ? C(y[g]) : y[g] && y[g][L];
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/global.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/global.js ***!
              \**************************************************/
            /***/
            function(f) {
              var m = function(l) {
                return l && l.Math == Math && l;
              };
              f.exports = // eslint-disable-next-line es/no-global-this -- safe
              m(typeof globalThis == "object" && globalThis) || m(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
              m(typeof self == "object" && self) || m(typeof sa == "object" && sa) || // eslint-disable-next-line no-new-func -- fallback
              /* @__PURE__ */ function() {
                return this;
              }() || Function("return this")();
            }
          ),
          /***/
          "./node_modules/core-js/internals/has.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/has.js ***!
              \***********************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), C = {}.hasOwnProperty;
              f.exports = Object.hasOwn || function(L, E) {
                return C.call(y(L), E);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/hidden-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/hidden-keys.js ***!
              \*******************************************************/
            /***/
            function(f) {
              f.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/html.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/html.js ***!
              \************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/get-built-in */
                "./node_modules/core-js/internals/get-built-in.js"
              );
              f.exports = y("document", "documentElement");
            }
          ),
          /***/
          "./node_modules/core-js/internals/ie8-dom-define.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), g = l(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              f.exports = !y && !C(function() {
                return Object.defineProperty(g("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/indexed-object.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/indexed-object.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), C = l(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              ), g = "".split;
              f.exports = y(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(L) {
                return C(L) == "String" ? g.call(L, "") : Object(L);
              } : Object;
            }
          ),
          /***/
          "./node_modules/core-js/internals/inherit-if-required.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
              \***************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), C = l(
                /*! ../internals/object-set-prototype-of */
                "./node_modules/core-js/internals/object-set-prototype-of.js"
              );
              f.exports = function(g, L, E) {
                var x, b;
                return (
                  // it can work only with native `setPrototypeOf`
                  C && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
                  typeof (x = L.constructor) == "function" && x !== E && y(b = x.prototype) && b !== E.prototype && C(g, b), g
                );
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/inspect-source.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/inspect-source.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/shared-store */
                "./node_modules/core-js/internals/shared-store.js"
              ), C = Function.toString;
              typeof y.inspectSource != "function" && (y.inspectSource = function(g) {
                return C.call(g);
              }), f.exports = y.inspectSource;
            }
          ),
          /***/
          "./node_modules/core-js/internals/internal-state.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/internal-state.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/native-weak-map */
                "./node_modules/core-js/internals/native-weak-map.js"
              ), C = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), g = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), L = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), E = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), x = l(
                /*! ../internals/shared-store */
                "./node_modules/core-js/internals/shared-store.js"
              ), b = l(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), U = l(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              ), I = "Object already initialized", M = C.WeakMap, R, Z, AA, V = function(tA) {
                return AA(tA) ? Z(tA) : R(tA, {});
              }, dA = function(tA) {
                return function(aA) {
                  var vA;
                  if (!g(aA) || (vA = Z(aA)).type !== tA)
                    throw TypeError("Incompatible receiver, " + tA + " required");
                  return vA;
                };
              };
              if (y || x.state) {
                var cA = x.state || (x.state = new M()), T = cA.get, _ = cA.has, z = cA.set;
                R = function(tA, aA) {
                  if (_.call(cA, tA)) throw new TypeError(I);
                  return aA.facade = tA, z.call(cA, tA, aA), aA;
                }, Z = function(tA) {
                  return T.call(cA, tA) || {};
                }, AA = function(tA) {
                  return _.call(cA, tA);
                };
              } else {
                var J = b("state");
                U[J] = !0, R = function(tA, aA) {
                  if (E(tA, J)) throw new TypeError(I);
                  return aA.facade = tA, L(tA, J, aA), aA;
                }, Z = function(tA) {
                  return E(tA, J) ? tA[J] : {};
                }, AA = function(tA) {
                  return E(tA, J);
                };
              }
              f.exports = {
                set: R,
                get: Z,
                has: AA,
                enforce: V,
                getterFor: dA
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-array.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/is-array.js ***!
              \****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              f.exports = Array.isArray || function(g) {
                return y(g) == "Array";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-forced.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-forced.js ***!
              \*****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), C = /#|\.prototype\./, g = function(U, I) {
                var M = E[L(U)];
                return M == b ? !0 : M == x ? !1 : typeof I == "function" ? y(I) : !!I;
              }, L = g.normalize = function(U) {
                return String(U).replace(C, ".").toLowerCase();
              }, E = g.data = {}, x = g.NATIVE = "N", b = g.POLYFILL = "P";
              f.exports = g;
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-object.js ***!
              \*****************************************************/
            /***/
            function(f) {
              f.exports = function(m) {
                return typeof m == "object" ? m !== null : typeof m == "function";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-pure.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/is-pure.js ***!
              \***************************************************/
            /***/
            function(f) {
              f.exports = !1;
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-symbol.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-symbol.js ***!
              \*****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/get-built-in */
                "./node_modules/core-js/internals/get-built-in.js"
              ), C = l(
                /*! ../internals/use-symbol-as-uid */
                "./node_modules/core-js/internals/use-symbol-as-uid.js"
              );
              f.exports = C ? function(g) {
                return typeof g == "symbol";
              } : function(g) {
                var L = y("Symbol");
                return typeof L == "function" && Object(g) instanceof L;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators-core.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/iterators-core.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), C = l(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              ), g = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), L = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), E = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), x = l(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), b = E("iterator"), U = !1, I = function() {
                return this;
              }, M, R, Z;
              [].keys && (Z = [].keys(), "next" in Z ? (R = C(C(Z)), R !== Object.prototype && (M = R)) : U = !0);
              var AA = M == null || y(function() {
                var V = {};
                return M[b].call(V) !== V;
              });
              AA && (M = {}), (!x || AA) && !L(M, b) && g(M, b, I), f.exports = {
                IteratorPrototype: M,
                BUGGY_SAFARI_ITERATORS: U
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/iterators.js ***!
              \*****************************************************/
            /***/
            function(f) {
              f.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-symbol.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/native-symbol.js ***!
              \*********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/engine-v8-version */
                "./node_modules/core-js/internals/engine-v8-version.js"
              ), C = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              f.exports = !!Object.getOwnPropertySymbols && !C(function() {
                var g = Symbol();
                return !String(g) || !(Object(g) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
                !Symbol.sham && y && y < 41;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-weak-map.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/native-weak-map.js ***!
              \***********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/inspect-source */
                "./node_modules/core-js/internals/inspect-source.js"
              ), g = y.WeakMap;
              f.exports = typeof g == "function" && /native code/.test(C(g));
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-assign.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/object-assign.js ***!
              \*********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), g = l(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              ), L = l(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              ), E = l(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              ), x = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), b = l(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              ), U = Object.assign, I = Object.defineProperty;
              f.exports = !U || C(function() {
                if (y && U({ b: 1 }, U(I({}, "a", {
                  enumerable: !0,
                  get: function() {
                    I(this, "b", {
                      value: 3,
                      enumerable: !1
                    });
                  }
                }), { b: 2 })).b !== 1) return !0;
                var M = {}, R = {}, Z = Symbol(), AA = "abcdefghijklmnopqrst";
                return M[Z] = 7, AA.split("").forEach(function(V) {
                  R[V] = V;
                }), U({}, M)[Z] != 7 || g(U({}, R)).join("") != AA;
              }) ? function(R, Z) {
                for (var AA = x(R), V = arguments.length, dA = 1, cA = L.f, T = E.f; V > dA; )
                  for (var _ = b(arguments[dA++]), z = cA ? g(_).concat(cA(_)) : g(_), J = z.length, tA = 0, aA; J > tA; )
                    aA = z[tA++], (!y || T.call(_, aA)) && (AA[aA] = _[aA]);
                return AA;
              } : U;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-create.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/object-create.js ***!
              \*********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), C = l(
                /*! ../internals/object-define-properties */
                "./node_modules/core-js/internals/object-define-properties.js"
              ), g = l(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              ), L = l(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              ), E = l(
                /*! ../internals/html */
                "./node_modules/core-js/internals/html.js"
              ), x = l(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              ), b = l(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), U = ">", I = "<", M = "prototype", R = "script", Z = b("IE_PROTO"), AA = function() {
              }, V = function(z) {
                return I + R + U + z + I + "/" + R + U;
              }, dA = function(z) {
                z.write(V("")), z.close();
                var J = z.parentWindow.Object;
                return z = null, J;
              }, cA = function() {
                var z = x("iframe"), J = "java" + R + ":", tA;
                if (z.style)
                  return z.style.display = "none", E.appendChild(z), z.src = String(J), tA = z.contentWindow.document, tA.open(), tA.write(V("document.F=Object")), tA.close(), tA.F;
              }, T, _ = function() {
                try {
                  T = new ActiveXObject("htmlfile");
                } catch {
                }
                _ = document.domain && T ? dA(T) : (
                  // old IE
                  cA() || dA(T)
                );
                for (var z = g.length; z--; ) delete _[M][g[z]];
                return _();
              };
              L[Z] = !0, f.exports = Object.create || function(J, tA) {
                var aA;
                return J !== null ? (AA[M] = y(J), aA = new AA(), AA[M] = null, aA[Z] = J) : aA = _(), tA === void 0 ? aA : C(aA, tA);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-properties.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-properties.js ***!
              \********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), g = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), L = l(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              );
              f.exports = y ? Object.defineProperties : function(x, b) {
                g(x);
                for (var U = L(b), I = U.length, M = 0, R; I > M; ) C.f(x, R = U[M++], b[R]);
                return x;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-property.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-property.js ***!
              \******************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              ), g = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), L = l(
                /*! ../internals/to-property-key */
                "./node_modules/core-js/internals/to-property-key.js"
              ), E = Object.defineProperty;
              m.f = y ? E : function(b, U, I) {
                if (g(b), U = L(U), g(I), C) try {
                  return E(b, U, I);
                } catch {
                }
                if ("get" in I || "set" in I) throw TypeError("Accessors not supported");
                return "value" in I && (b[U] = I.value), b;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-descriptor.js": (
            /*!******************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
              \******************************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              ), g = l(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              ), L = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), E = l(
                /*! ../internals/to-property-key */
                "./node_modules/core-js/internals/to-property-key.js"
              ), x = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), b = l(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              ), U = Object.getOwnPropertyDescriptor;
              m.f = y ? U : function(M, R) {
                if (M = L(M), R = E(R), b) try {
                  return U(M, R);
                } catch {
                }
                if (x(M, R)) return g(!C.f.call(M, R), M[R]);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-names-external.js": (
            /*!**********************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
              \**********************************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), C = l(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              ).f, g = {}.toString, L = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], E = function(x) {
                try {
                  return C(x);
                } catch {
                  return L.slice();
                }
              };
              f.exports.f = function(b) {
                return L && g.call(b) == "[object Window]" ? E(b) : C(y(b));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-names.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
              \*************************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              ), C = l(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              ), g = C.concat("length", "prototype");
              m.f = Object.getOwnPropertyNames || function(E) {
                return y(E, g);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-symbols.js": (
            /*!***************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
              \***************************************************************************/
            /***/
            function(f, m) {
              m.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
              \*******************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), C = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), g = l(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), L = l(
                /*! ../internals/correct-prototype-getter */
                "./node_modules/core-js/internals/correct-prototype-getter.js"
              ), E = g("IE_PROTO"), x = Object.prototype;
              f.exports = L ? Object.getPrototypeOf : function(b) {
                return b = C(b), y(b, E) ? b[E] : typeof b.constructor == "function" && b instanceof b.constructor ? b.constructor.prototype : b instanceof Object ? x : null;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys-internal.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
              \****************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), C = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), g = l(
                /*! ../internals/array-includes */
                "./node_modules/core-js/internals/array-includes.js"
              ).indexOf, L = l(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              f.exports = function(E, x) {
                var b = C(E), U = 0, I = [], M;
                for (M in b) !y(L, M) && y(b, M) && I.push(M);
                for (; x.length > U; ) y(b, M = x[U++]) && (~g(I, M) || I.push(M));
                return I;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys.js ***!
              \*******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              ), C = l(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              f.exports = Object.keys || function(L) {
                return y(L, C);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-property-is-enumerable.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
              \*************************************************************************/
            /***/
            function(f, m) {
              var l = {}.propertyIsEnumerable, y = Object.getOwnPropertyDescriptor, C = y && !l.call({ 1: 2 }, 1);
              m.f = C ? function(L) {
                var E = y(this, L);
                return !!E && E.enumerable;
              } : l;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-set-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
              \*******************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), C = l(
                /*! ../internals/a-possible-prototype */
                "./node_modules/core-js/internals/a-possible-prototype.js"
              );
              f.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var g = !1, L = {}, E;
                try {
                  E = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, E.call(L, []), g = L instanceof Array;
                } catch {
                }
                return function(b, U) {
                  return y(b), C(U), g ? E.call(b, U) : b.__proto__ = U, b;
                };
              }() : void 0);
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-to-string.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/internals/object-to-string.js ***!
              \************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-string-tag-support */
                "./node_modules/core-js/internals/to-string-tag-support.js"
              ), C = l(
                /*! ../internals/classof */
                "./node_modules/core-js/internals/classof.js"
              );
              f.exports = y ? {}.toString : function() {
                return "[object " + C(this) + "]";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/ordinary-to-primitive.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
              \*****************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              f.exports = function(C, g) {
                var L, E;
                if (g === "string" && typeof (L = C.toString) == "function" && !y(E = L.call(C)) || typeof (L = C.valueOf) == "function" && !y(E = L.call(C)) || g !== "string" && typeof (L = C.toString) == "function" && !y(E = L.call(C))) return E;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/own-keys.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/own-keys.js ***!
              \****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/get-built-in */
                "./node_modules/core-js/internals/get-built-in.js"
              ), C = l(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              ), g = l(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              ), L = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              f.exports = y("Reflect", "ownKeys") || function(x) {
                var b = C.f(L(x)), U = g.f;
                return U ? b.concat(U(x)) : b;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/path.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/path.js ***!
              \************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              f.exports = y;
            }
          ),
          /***/
          "./node_modules/core-js/internals/redefine.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/redefine.js ***!
              \****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), g = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), L = l(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              ), E = l(
                /*! ../internals/inspect-source */
                "./node_modules/core-js/internals/inspect-source.js"
              ), x = l(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              ), b = x.get, U = x.enforce, I = String(String).split("String");
              (f.exports = function(M, R, Z, AA) {
                var V = AA ? !!AA.unsafe : !1, dA = AA ? !!AA.enumerable : !1, cA = AA ? !!AA.noTargetGet : !1, T;
                if (typeof Z == "function" && (typeof R == "string" && !g(Z, "name") && C(Z, "name", R), T = U(Z), T.source || (T.source = I.join(typeof R == "string" ? R : ""))), M === y) {
                  dA ? M[R] = Z : L(R, Z);
                  return;
                } else V ? !cA && M[R] && (dA = !0) : delete M[R];
                dA ? M[R] = Z : C(M, R, Z);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && b(this).source || E(this);
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/regexp-flags.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/regexp-flags.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              f.exports = function() {
                var C = y(this), g = "";
                return C.global && (g += "g"), C.ignoreCase && (g += "i"), C.multiline && (g += "m"), C.dotAll && (g += "s"), C.unicode && (g += "u"), C.sticky && (g += "y"), g;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/require-object-coercible.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
              \********************************************************************/
            /***/
            function(f) {
              f.exports = function(m) {
                if (m == null) throw TypeError("Can't call method on " + m);
                return m;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-global.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/set-global.js ***!
              \******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              f.exports = function(C, g) {
                try {
                  Object.defineProperty(y, C, { value: g, configurable: !0, writable: !0 });
                } catch {
                  y[C] = g;
                }
                return g;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-to-string-tag.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f, C = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), g = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), L = g("toStringTag");
              f.exports = function(E, x, b) {
                E && !C(E = b ? E : E.prototype, L) && y(E, L, { configurable: !0, value: x });
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared-key.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/shared-key.js ***!
              \******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              ), C = l(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              ), g = y("keys");
              f.exports = function(L) {
                return g[L] || (g[L] = C(L));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared-store.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/shared-store.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              ), g = "__core-js_shared__", L = y[g] || C(g, {});
              f.exports = L;
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/shared.js ***!
              \**************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), C = l(
                /*! ../internals/shared-store */
                "./node_modules/core-js/internals/shared-store.js"
              );
              (f.exports = function(g, L) {
                return C[g] || (C[g] = L !== void 0 ? L : {});
              })("versions", []).push({
                version: "3.16.0",
                mode: y ? "pure" : "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-html-forced.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/internals/string-html-forced.js ***!
              \**************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              f.exports = function(C) {
                return y(function() {
                  var g = ""[C]('"');
                  return g !== g.toLowerCase() || g.split('"').length > 3;
                });
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-multibyte.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/internals/string-multibyte.js ***!
              \************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              ), C = l(
                /*! ../internals/to-string */
                "./node_modules/core-js/internals/to-string.js"
              ), g = l(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              ), L = function(E) {
                return function(x, b) {
                  var U = C(g(x)), I = y(b), M = U.length, R, Z;
                  return I < 0 || I >= M ? E ? "" : void 0 : (R = U.charCodeAt(I), R < 55296 || R > 56319 || I + 1 === M || (Z = U.charCodeAt(I + 1)) < 56320 || Z > 57343 ? E ? U.charAt(I) : R : E ? U.slice(I, I + 2) : (R - 55296 << 10) + (Z - 56320) + 65536);
                };
              };
              f.exports = {
                // `String.prototype.codePointAt` method
                // https://tc39.es/ecma262/#sec-string.prototype.codepointat
                codeAt: L(!1),
                // `String.prototype.at` method
                // https://github.com/mathiasbynens/String.prototype.at
                charAt: L(!0)
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-trim.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/string-trim.js ***!
              \*******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              ), C = l(
                /*! ../internals/to-string */
                "./node_modules/core-js/internals/to-string.js"
              ), g = l(
                /*! ../internals/whitespaces */
                "./node_modules/core-js/internals/whitespaces.js"
              ), L = "[" + g + "]", E = RegExp("^" + L + L + "*"), x = RegExp(L + L + "*$"), b = function(U) {
                return function(I) {
                  var M = C(y(I));
                  return U & 1 && (M = M.replace(E, "")), U & 2 && (M = M.replace(x, "")), M;
                };
              };
              f.exports = {
                // `String.prototype.{ trimLeft, trimStart }` methods
                // https://tc39.es/ecma262/#sec-string.prototype.trimstart
                start: b(1),
                // `String.prototype.{ trimRight, trimEnd }` methods
                // https://tc39.es/ecma262/#sec-string.prototype.trimend
                end: b(2),
                // `String.prototype.trim` method
                // https://tc39.es/ecma262/#sec-string.prototype.trim
                trim: b(3)
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-absolute-index.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              ), C = Math.max, g = Math.min;
              f.exports = function(L, E) {
                var x = y(L);
                return x < 0 ? C(x + E, 0) : g(x, E);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-indexed-object.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              ), C = l(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              f.exports = function(g) {
                return y(C(g));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-integer.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/to-integer.js ***!
              \******************************************************/
            /***/
            function(f) {
              var m = Math.ceil, l = Math.floor;
              f.exports = function(y) {
                return isNaN(y = +y) ? 0 : (y > 0 ? l : m)(y);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-length.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-length.js ***!
              \*****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              ), C = Math.min;
              f.exports = function(g) {
                return g > 0 ? C(y(g), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-object.js ***!
              \*****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              f.exports = function(C) {
                return Object(y(C));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-primitive.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/to-primitive.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), C = l(
                /*! ../internals/is-symbol */
                "./node_modules/core-js/internals/is-symbol.js"
              ), g = l(
                /*! ../internals/ordinary-to-primitive */
                "./node_modules/core-js/internals/ordinary-to-primitive.js"
              ), L = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), E = L("toPrimitive");
              f.exports = function(x, b) {
                if (!y(x) || C(x)) return x;
                var U = x[E], I;
                if (U !== void 0) {
                  if (b === void 0 && (b = "default"), I = U.call(x, b), !y(I) || C(I)) return I;
                  throw TypeError("Can't convert object to primitive value");
                }
                return b === void 0 && (b = "number"), g(x, b);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-property-key.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/to-property-key.js ***!
              \***********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              ), C = l(
                /*! ../internals/is-symbol */
                "./node_modules/core-js/internals/is-symbol.js"
              );
              f.exports = function(g) {
                var L = y(g, "string");
                return C(L) ? L : String(L);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-string-tag-support.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
              \*****************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), C = y("toStringTag"), g = {};
              g[C] = "z", f.exports = String(g) === "[object z]";
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-string.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-string.js ***!
              \*****************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/is-symbol */
                "./node_modules/core-js/internals/is-symbol.js"
              );
              f.exports = function(C) {
                if (y(C)) throw TypeError("Cannot convert a Symbol value to a string");
                return String(C);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/uid.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/uid.js ***!
              \***********************************************/
            /***/
            function(f) {
              var m = 0, l = Math.random();
              f.exports = function(y) {
                return "Symbol(" + String(y === void 0 ? "" : y) + ")_" + (++m + l).toString(36);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/use-symbol-as-uid.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              );
              f.exports = y && !Symbol.sham && typeof Symbol.iterator == "symbol";
            }
          ),
          /***/
          "./node_modules/core-js/internals/well-known-symbol-wrapped.js": (
            /*!*********************************************************************!*\
              !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
              \*********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              m.f = y;
            }
          ),
          /***/
          "./node_modules/core-js/internals/well-known-symbol.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              ), g = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), L = l(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              ), E = l(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              ), x = l(
                /*! ../internals/use-symbol-as-uid */
                "./node_modules/core-js/internals/use-symbol-as-uid.js"
              ), b = C("wks"), U = y.Symbol, I = x ? U : U && U.withoutSetter || L;
              f.exports = function(M) {
                return (!g(b, M) || !(E || typeof b[M] == "string")) && (E && g(U, M) ? b[M] = U[M] : b[M] = I("Symbol." + M)), b[M];
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/whitespaces.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/whitespaces.js ***!
              \*******************************************************/
            /***/
            function(f) {
              f.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.concat.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.concat.js ***!
              \*********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), g = l(
                /*! ../internals/is-array */
                "./node_modules/core-js/internals/is-array.js"
              ), L = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), E = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), x = l(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              ), b = l(
                /*! ../internals/create-property */
                "./node_modules/core-js/internals/create-property.js"
              ), U = l(
                /*! ../internals/array-species-create */
                "./node_modules/core-js/internals/array-species-create.js"
              ), I = l(
                /*! ../internals/array-method-has-species-support */
                "./node_modules/core-js/internals/array-method-has-species-support.js"
              ), M = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), R = l(
                /*! ../internals/engine-v8-version */
                "./node_modules/core-js/internals/engine-v8-version.js"
              ), Z = M("isConcatSpreadable"), AA = 9007199254740991, V = "Maximum allowed index exceeded", dA = R >= 51 || !C(function() {
                var z = [];
                return z[Z] = !1, z.concat()[0] !== z;
              }), cA = I("concat"), T = function(z) {
                if (!L(z)) return !1;
                var J = z[Z];
                return J !== void 0 ? !!J : g(z);
              }, _ = !dA || !cA;
              y({ target: "Array", proto: !0, forced: _ }, {
                // eslint-disable-next-line no-unused-vars -- required for `.length`
                concat: function(J) {
                  var tA = E(this), aA = U(tA, 0), vA = 0, hA, UA, bA, PA, j;
                  for (hA = -1, bA = arguments.length; hA < bA; hA++)
                    if (j = hA === -1 ? tA : arguments[hA], T(j)) {
                      if (PA = x(j.length), vA + PA > AA) throw TypeError(V);
                      for (UA = 0; UA < PA; UA++, vA++) UA in j && b(aA, vA, j[UA]);
                    } else {
                      if (vA >= AA) throw TypeError(V);
                      b(aA, vA++, j);
                    }
                  return aA.length = vA, aA;
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.iterator.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
              \***********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), C = l(
                /*! ../internals/add-to-unscopables */
                "./node_modules/core-js/internals/add-to-unscopables.js"
              ), g = l(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), L = l(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              ), E = l(
                /*! ../internals/define-iterator */
                "./node_modules/core-js/internals/define-iterator.js"
              ), x = "Array Iterator", b = L.set, U = L.getterFor(x);
              f.exports = E(Array, "Array", function(I, M) {
                b(this, {
                  type: x,
                  target: y(I),
                  // target
                  index: 0,
                  // next index
                  kind: M
                  // kind
                });
              }, function() {
                var I = U(this), M = I.target, R = I.kind, Z = I.index++;
                return !M || Z >= M.length ? (I.target = void 0, { value: void 0, done: !0 }) : R == "keys" ? { value: Z, done: !1 } : R == "values" ? { value: M[Z], done: !1 } : { value: [Z, M[Z]], done: !1 };
              }, "values"), g.Arguments = g.Array, C("keys"), C("values"), C("entries");
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.join.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.join.js ***!
              \*******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              ), g = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), L = l(
                /*! ../internals/array-method-is-strict */
                "./node_modules/core-js/internals/array-method-is-strict.js"
              ), E = [].join, x = C != Object, b = L("join", ",");
              y({ target: "Array", proto: !0, forced: x || !b }, {
                join: function(I) {
                  return E.call(g(this), I === void 0 ? "," : I);
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.map.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.map.js ***!
              \******************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/array-iteration */
                "./node_modules/core-js/internals/array-iteration.js"
              ).map, g = l(
                /*! ../internals/array-method-has-species-support */
                "./node_modules/core-js/internals/array-method-has-species-support.js"
              ), L = g("map");
              y({ target: "Array", proto: !0, forced: !L }, {
                map: function(x) {
                  return C(this, x, arguments.length > 1 ? arguments[1] : void 0);
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.slice.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.slice.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), g = l(
                /*! ../internals/is-array */
                "./node_modules/core-js/internals/is-array.js"
              ), L = l(
                /*! ../internals/to-absolute-index */
                "./node_modules/core-js/internals/to-absolute-index.js"
              ), E = l(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              ), x = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), b = l(
                /*! ../internals/create-property */
                "./node_modules/core-js/internals/create-property.js"
              ), U = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), I = l(
                /*! ../internals/array-method-has-species-support */
                "./node_modules/core-js/internals/array-method-has-species-support.js"
              ), M = I("slice"), R = U("species"), Z = [].slice, AA = Math.max;
              y({ target: "Array", proto: !0, forced: !M }, {
                slice: function(dA, cA) {
                  var T = x(this), _ = E(T.length), z = L(dA, _), J = L(cA === void 0 ? _ : cA, _), tA, aA, vA;
                  if (g(T) && (tA = T.constructor, typeof tA == "function" && (tA === Array || g(tA.prototype)) ? tA = void 0 : C(tA) && (tA = tA[R], tA === null && (tA = void 0)), tA === Array || tA === void 0))
                    return Z.call(T, z, J);
                  for (aA = new (tA === void 0 ? Array : tA)(AA(J - z, 0)), vA = 0; z < J; z++, vA++) z in T && b(aA, vA, T[z]);
                  return aA.length = vA, aA;
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.function.name.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/es.function.name.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f, g = Function.prototype, L = g.toString, E = /^\s*function ([^ (]*)/, x = "name";
              y && !(x in g) && C(g, x, {
                configurable: !0,
                get: function() {
                  try {
                    return L.call(this).match(E)[1];
                  } catch {
                    return "";
                  }
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.number.constructor.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
              \***************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), C = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), g = l(
                /*! ../internals/is-forced */
                "./node_modules/core-js/internals/is-forced.js"
              ), L = l(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), E = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), x = l(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              ), b = l(
                /*! ../internals/inherit-if-required */
                "./node_modules/core-js/internals/inherit-if-required.js"
              ), U = l(
                /*! ../internals/is-symbol */
                "./node_modules/core-js/internals/is-symbol.js"
              ), I = l(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              ), M = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), R = l(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              ), Z = l(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              ).f, AA = l(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ).f, V = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f, dA = l(
                /*! ../internals/string-trim */
                "./node_modules/core-js/internals/string-trim.js"
              ).trim, cA = "Number", T = C[cA], _ = T.prototype, z = x(R(_)) == cA, J = function(UA) {
                if (U(UA)) throw TypeError("Cannot convert a Symbol value to a number");
                var bA = I(UA, "number"), PA, j, X, q, eA, uA, gA, FA;
                if (typeof bA == "string" && bA.length > 2) {
                  if (bA = dA(bA), PA = bA.charCodeAt(0), PA === 43 || PA === 45) {
                    if (j = bA.charCodeAt(2), j === 88 || j === 120) return NaN;
                  } else if (PA === 48) {
                    switch (bA.charCodeAt(1)) {
                      case 66:
                      case 98:
                        X = 2, q = 49;
                        break;
                      case 79:
                      case 111:
                        X = 8, q = 55;
                        break;
                      default:
                        return +bA;
                    }
                    for (eA = bA.slice(2), uA = eA.length, gA = 0; gA < uA; gA++)
                      if (FA = eA.charCodeAt(gA), FA < 48 || FA > q) return NaN;
                    return parseInt(eA, X);
                  }
                }
                return +bA;
              };
              if (g(cA, !T(" 0o1") || !T("0b1") || T("+0x1"))) {
                for (var tA = function(bA) {
                  var PA = arguments.length < 1 ? 0 : bA, j = this;
                  return j instanceof tA && (z ? M(function() {
                    _.valueOf.call(j);
                  }) : x(j) != cA) ? b(new T(J(PA)), j, tA) : J(PA);
                }, aA = y ? Z(T) : (
                  // ES3:
                  "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(",")
                ), vA = 0, hA; aA.length > vA; vA++)
                  E(T, hA = aA[vA]) && !E(tA, hA) && V(tA, hA, AA(T, hA));
                tA.prototype = _, _.constructor = tA, L(C, cA, tA);
              }
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.object.assign.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/es.object.assign.js ***!
              \**********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/object-assign */
                "./node_modules/core-js/internals/object-assign.js"
              );
              y({ target: "Object", stat: !0, forced: Object.assign !== C }, {
                assign: C
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.object.keys.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/es.object.keys.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), g = l(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              ), L = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), E = L(function() {
                g(1);
              });
              y({ target: "Object", stat: !0, forced: E }, {
                keys: function(b) {
                  return g(C(b));
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.object.to-string.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/to-string-tag-support */
                "./node_modules/core-js/internals/to-string-tag-support.js"
              ), C = l(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), g = l(
                /*! ../internals/object-to-string */
                "./node_modules/core-js/internals/object-to-string.js"
              );
              y || C(Object.prototype, "toString", g, { unsafe: !0 });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.regexp.to-string.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
              \*************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), C = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), g = l(
                /*! ../internals/to-string */
                "./node_modules/core-js/internals/to-string.js"
              ), L = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), E = l(
                /*! ../internals/regexp-flags */
                "./node_modules/core-js/internals/regexp-flags.js"
              ), x = "toString", b = RegExp.prototype, U = b[x], I = L(function() {
                return U.call({ source: "a", flags: "b" }) != "/a/b";
              }), M = U.name != x;
              (I || M) && y(RegExp.prototype, x, function() {
                var Z = C(this), AA = g(Z.source), V = Z.flags, dA = g(V === void 0 && Z instanceof RegExp && !("flags" in b) ? E.call(Z) : V);
                return "/" + AA + "/" + dA;
              }, { unsafe: !0 });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.string.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
              \************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/string-multibyte */
                "./node_modules/core-js/internals/string-multibyte.js"
              ).charAt, C = l(
                /*! ../internals/to-string */
                "./node_modules/core-js/internals/to-string.js"
              ), g = l(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              ), L = l(
                /*! ../internals/define-iterator */
                "./node_modules/core-js/internals/define-iterator.js"
              ), E = "String Iterator", x = g.set, b = g.getterFor(E);
              L(String, "String", function(U) {
                x(this, {
                  type: E,
                  string: C(U),
                  index: 0
                });
              }, function() {
                var I = b(this), M = I.string, R = I.index, Z;
                return R >= M.length ? { value: void 0, done: !0 } : (Z = y(M, R), I.index += Z.length, { value: Z, done: !1 });
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.string.link.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/es.string.link.js ***!
              \********************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/create-html */
                "./node_modules/core-js/internals/create-html.js"
              ), g = l(
                /*! ../internals/string-html-forced */
                "./node_modules/core-js/internals/string-html-forced.js"
              );
              y({ target: "String", proto: !0, forced: g("link") }, {
                link: function(E) {
                  return C(this, "a", "href", E);
                }
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.symbol.description.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
              \***************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), g = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), L = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), E = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), x = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f, b = l(
                /*! ../internals/copy-constructor-properties */
                "./node_modules/core-js/internals/copy-constructor-properties.js"
              ), U = g.Symbol;
              if (C && typeof U == "function" && (!("description" in U.prototype) || // Safari 12 bug
              U().description !== void 0)) {
                var I = {}, M = function() {
                  var cA = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), T = this instanceof M ? new U(cA) : cA === void 0 ? U() : U(cA);
                  return cA === "" && (I[T] = !0), T;
                };
                b(M, U);
                var R = M.prototype = U.prototype;
                R.constructor = M;
                var Z = R.toString, AA = String(U("test")) == "Symbol(test)", V = /^Symbol\((.*)\)[^)]+$/;
                x(R, "description", {
                  configurable: !0,
                  get: function() {
                    var cA = E(this) ? this.valueOf() : this, T = Z.call(cA);
                    if (L(I, cA)) return "";
                    var _ = AA ? T.slice(7, -1) : T.replace(V, "$1");
                    return _ === "" ? void 0 : _;
                  }
                }), y({ global: !0, forced: !0 }, {
                  Symbol: M
                });
              }
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.symbol.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
              \************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/define-well-known-symbol */
                "./node_modules/core-js/internals/define-well-known-symbol.js"
              );
              y("iterator");
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.symbol.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/modules/es.symbol.js ***!
              \***************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), C = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), g = l(
                /*! ../internals/get-built-in */
                "./node_modules/core-js/internals/get-built-in.js"
              ), L = l(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), E = l(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), x = l(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              ), b = l(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), U = l(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), I = l(
                /*! ../internals/is-array */
                "./node_modules/core-js/internals/is-array.js"
              ), M = l(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), R = l(
                /*! ../internals/is-symbol */
                "./node_modules/core-js/internals/is-symbol.js"
              ), Z = l(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), AA = l(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), V = l(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), dA = l(
                /*! ../internals/to-property-key */
                "./node_modules/core-js/internals/to-property-key.js"
              ), cA = l(
                /*! ../internals/to-string */
                "./node_modules/core-js/internals/to-string.js"
              ), T = l(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              ), _ = l(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              ), z = l(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              ), J = l(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              ), tA = l(
                /*! ../internals/object-get-own-property-names-external */
                "./node_modules/core-js/internals/object-get-own-property-names-external.js"
              ), aA = l(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              ), vA = l(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ), hA = l(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), UA = l(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              ), bA = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), PA = l(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), j = l(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              ), X = l(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), q = l(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              ), eA = l(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              ), uA = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), gA = l(
                /*! ../internals/well-known-symbol-wrapped */
                "./node_modules/core-js/internals/well-known-symbol-wrapped.js"
              ), FA = l(
                /*! ../internals/define-well-known-symbol */
                "./node_modules/core-js/internals/define-well-known-symbol.js"
              ), QA = l(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              ), DA = l(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              ), KA = l(
                /*! ../internals/array-iteration */
                "./node_modules/core-js/internals/array-iteration.js"
              ).forEach, RA = X("hidden"), GA = "Symbol", ce = "prototype", LA = uA("toPrimitive"), $ = DA.set, be = DA.getterFor(GA), zA = Object[ce], NA = C.Symbol, WA = g("JSON", "stringify"), YA = vA.f, XA = hA.f, ae = tA.f, ye = UA.f, de = j("symbols"), Ce = j("op-symbols"), Te = j("string-to-symbol-registry"), Ee = j("symbol-to-string-registry"), we = j("wks"), BA = C.QObject, mA = !BA || !BA[ce] || !BA[ce].findChild, TA = E && b(function() {
                return _(XA({}, "a", {
                  get: function() {
                    return XA(this, "a", { value: 7 }).a;
                  }
                })).a != 7;
              }) ? function(je, qA, VA) {
                var ie = YA(zA, qA);
                ie && delete zA[qA], XA(je, qA, VA), ie && je !== zA && XA(zA, qA, ie);
              } : XA, MA = function(je, qA) {
                var VA = de[je] = _(NA[ce]);
                return $(VA, {
                  type: GA,
                  tag: je,
                  description: qA
                }), E || (VA.description = qA), VA;
              }, fe = function(qA, VA, ie) {
                qA === zA && fe(Ce, VA, ie), Z(qA);
                var Me = dA(VA);
                return Z(ie), U(de, Me) ? (ie.enumerable ? (U(qA, RA) && qA[RA][Me] && (qA[RA][Me] = !1), ie = _(ie, { enumerable: T(0, !1) })) : (U(qA, RA) || XA(qA, RA, T(1, {})), qA[RA][Me] = !0), TA(qA, Me, ie)) : XA(qA, Me, ie);
              }, Ae = function(qA, VA) {
                Z(qA);
                var ie = V(VA), Me = z(ie).concat(Ge(ie));
                return KA(Me, function(Re) {
                  (!E || Bt.call(ie, Re)) && fe(qA, Re, ie[Re]);
                }), qA;
              }, Fe = function(qA, VA) {
                return VA === void 0 ? _(qA) : Ae(_(qA), VA);
              }, Bt = function(qA) {
                var VA = dA(qA), ie = ye.call(this, VA);
                return this === zA && U(de, VA) && !U(Ce, VA) ? !1 : ie || !U(this, VA) || !U(de, VA) || U(this, RA) && this[RA][VA] ? ie : !0;
              }, He = function(qA, VA) {
                var ie = V(qA), Me = dA(VA);
                if (!(ie === zA && U(de, Me) && !U(Ce, Me))) {
                  var Re = YA(ie, Me);
                  return Re && U(de, Me) && !(U(ie, RA) && ie[RA][Me]) && (Re.enumerable = !0), Re;
                }
              }, Ar = function(qA) {
                var VA = ae(V(qA)), ie = [];
                return KA(VA, function(Me) {
                  !U(de, Me) && !U(q, Me) && ie.push(Me);
                }), ie;
              }, Ge = function(qA) {
                var VA = qA === zA, ie = ae(VA ? Ce : V(qA)), Me = [];
                return KA(ie, function(Re) {
                  U(de, Re) && (!VA || U(zA, Re)) && Me.push(de[Re]);
                }), Me;
              };
              if (x || (NA = function() {
                if (this instanceof NA) throw TypeError("Symbol is not a constructor");
                var qA = !arguments.length || arguments[0] === void 0 ? void 0 : cA(arguments[0]), VA = eA(qA), ie = function(Me) {
                  this === zA && ie.call(Ce, Me), U(this, RA) && U(this[RA], VA) && (this[RA][VA] = !1), TA(this, VA, T(1, Me));
                };
                return E && mA && TA(zA, VA, { configurable: !0, set: ie }), MA(VA, qA);
              }, PA(NA[ce], "toString", function() {
                return be(this).tag;
              }), PA(NA, "withoutSetter", function(je) {
                return MA(eA(je), je);
              }), UA.f = Bt, hA.f = fe, vA.f = He, J.f = tA.f = Ar, aA.f = Ge, gA.f = function(je) {
                return MA(uA(je), je);
              }, E && (XA(NA[ce], "description", {
                configurable: !0,
                get: function() {
                  return be(this).description;
                }
              }), L || PA(zA, "propertyIsEnumerable", Bt, { unsafe: !0 }))), y({ global: !0, wrap: !0, forced: !x, sham: !x }, {
                Symbol: NA
              }), KA(z(we), function(je) {
                FA(je);
              }), y({ target: GA, stat: !0, forced: !x }, {
                // `Symbol.for` method
                // https://tc39.es/ecma262/#sec-symbol.for
                for: function(je) {
                  var qA = cA(je);
                  if (U(Te, qA)) return Te[qA];
                  var VA = NA(qA);
                  return Te[qA] = VA, Ee[VA] = qA, VA;
                },
                // `Symbol.keyFor` method
                // https://tc39.es/ecma262/#sec-symbol.keyfor
                keyFor: function(qA) {
                  if (!R(qA)) throw TypeError(qA + " is not a symbol");
                  if (U(Ee, qA)) return Ee[qA];
                },
                useSetter: function() {
                  mA = !0;
                },
                useSimple: function() {
                  mA = !1;
                }
              }), y({ target: "Object", stat: !0, forced: !x, sham: !E }, {
                // `Object.create` method
                // https://tc39.es/ecma262/#sec-object.create
                create: Fe,
                // `Object.defineProperty` method
                // https://tc39.es/ecma262/#sec-object.defineproperty
                defineProperty: fe,
                // `Object.defineProperties` method
                // https://tc39.es/ecma262/#sec-object.defineproperties
                defineProperties: Ae,
                // `Object.getOwnPropertyDescriptor` method
                // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
                getOwnPropertyDescriptor: He
              }), y({ target: "Object", stat: !0, forced: !x }, {
                // `Object.getOwnPropertyNames` method
                // https://tc39.es/ecma262/#sec-object.getownpropertynames
                getOwnPropertyNames: Ar,
                // `Object.getOwnPropertySymbols` method
                // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
                getOwnPropertySymbols: Ge
              }), y({ target: "Object", stat: !0, forced: b(function() {
                aA.f(1);
              }) }, {
                getOwnPropertySymbols: function(qA) {
                  return aA.f(AA(qA));
                }
              }), WA) {
                var kt = !x || b(function() {
                  var je = NA();
                  return WA([je]) != "[null]" || WA({ a: je }) != "{}" || WA(Object(je)) != "{}";
                });
                y({ target: "JSON", stat: !0, forced: kt }, {
                  // eslint-disable-next-line no-unused-vars -- required for `.length`
                  stringify: function(qA, VA, ie) {
                    for (var Me = [qA], Re = 1, Dt; arguments.length > Re; ) Me.push(arguments[Re++]);
                    if (Dt = VA, !(!M(VA) && qA === void 0 || R(qA)))
                      return I(VA) || (VA = function(er, ge) {
                        if (typeof Dt == "function" && (ge = Dt.call(this, er, ge)), !R(ge)) return ge;
                      }), Me[1] = VA, WA.apply(null, Me);
                  }
                });
              }
              NA[ce][LA] || bA(NA[ce], LA, NA[ce].valueOf), QA(NA, GA), q[RA] = !0;
            }
          ),
          /***/
          "./node_modules/core-js/modules/web.dom-collections.for-each.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
              \**********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/dom-iterables */
                "./node_modules/core-js/internals/dom-iterables.js"
              ), g = l(
                /*! ../internals/array-for-each */
                "./node_modules/core-js/internals/array-for-each.js"
              ), L = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              );
              for (var E in C) {
                var x = y[E], b = x && x.prototype;
                if (b && b.forEach !== g) try {
                  L(b, "forEach", g);
                } catch {
                  b.forEach = g;
                }
              }
            }
          ),
          /***/
          "./node_modules/core-js/modules/web.dom-collections.iterator.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
              \**********************************************************************/
            /***/
            function(f, m, l) {
              var y = l(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), C = l(
                /*! ../internals/dom-iterables */
                "./node_modules/core-js/internals/dom-iterables.js"
              ), g = l(
                /*! ../modules/es.array.iterator */
                "./node_modules/core-js/modules/es.array.iterator.js"
              ), L = l(
                /*! ../internals/create-non-enumerable-property */
                "./node_modules/core-js/internals/create-non-enumerable-property.js"
              ), E = l(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), x = E("iterator"), b = E("toStringTag"), U = g.values;
              for (var I in C) {
                var M = y[I], R = M && M.prototype;
                if (R) {
                  if (R[x] !== U) try {
                    L(R, x, U);
                  } catch {
                    R[x] = U;
                  }
                  if (R[b] || L(R, b, I), C[I]) {
                    for (var Z in g)
                      if (R[Z] !== g[Z]) try {
                        L(R, Z, g[Z]);
                      } catch {
                        R[Z] = g[Z];
                      }
                  }
                }
              }
            }
          ),
          /***/
          "./node_modules/es6-promise/dist/es6-promise.js": (
            /*!******************************************************!*\
              !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
              \******************************************************/
            /***/
            function(f) {
              /*!
               * @overview es6-promise - a tiny implementation of Promises/A+.
               * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
               * @license   Licensed under MIT license
               *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
               * @version   v4.2.8+1e68dce6
               */
              (function(m, l) {
                f.exports = l();
              })(this, function() {
                function m(BA) {
                  var mA = typeof BA;
                  return BA !== null && (mA === "object" || mA === "function");
                }
                function l(BA) {
                  return typeof BA == "function";
                }
                var y = void 0;
                Array.isArray ? y = Array.isArray : y = function(BA) {
                  return Object.prototype.toString.call(BA) === "[object Array]";
                };
                var C = y, g = 0, L = void 0, E = void 0, x = function(mA, TA) {
                  z[g] = mA, z[g + 1] = TA, g += 2, g === 2 && (E ? E(J) : aA());
                };
                function b(BA) {
                  E = BA;
                }
                function U(BA) {
                  x = BA;
                }
                var I = typeof window < "u" ? window : void 0, M = I || {}, R = M.MutationObserver || M.WebKitMutationObserver, Z = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", AA = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
                function V() {
                  return function() {
                    return process.nextTick(J);
                  };
                }
                function dA() {
                  return typeof L < "u" ? function() {
                    L(J);
                  } : _();
                }
                function cA() {
                  var BA = 0, mA = new R(J), TA = document.createTextNode("");
                  return mA.observe(TA, { characterData: !0 }), function() {
                    TA.data = BA = ++BA % 2;
                  };
                }
                function T() {
                  var BA = new MessageChannel();
                  return BA.port1.onmessage = J, function() {
                    return BA.port2.postMessage(0);
                  };
                }
                function _() {
                  var BA = setTimeout;
                  return function() {
                    return BA(J, 1);
                  };
                }
                var z = new Array(1e3);
                function J() {
                  for (var BA = 0; BA < g; BA += 2) {
                    var mA = z[BA], TA = z[BA + 1];
                    mA(TA), z[BA] = void 0, z[BA + 1] = void 0;
                  }
                  g = 0;
                }
                function tA() {
                  try {
                    var BA = Function("return this")().require("vertx");
                    return L = BA.runOnLoop || BA.runOnContext, dA();
                  } catch {
                    return _();
                  }
                }
                var aA = void 0;
                Z ? aA = V() : R ? aA = cA() : AA ? aA = T() : I === void 0 ? aA = tA() : aA = _();
                function vA(BA, mA) {
                  var TA = this, MA = new this.constructor(bA);
                  MA[UA] === void 0 && WA(MA);
                  var fe = TA._state;
                  if (fe) {
                    var Ae = arguments[fe - 1];
                    x(function() {
                      return $(fe, MA, Ae, TA._result);
                    });
                  } else
                    ce(TA, MA, BA, mA);
                  return MA;
                }
                function hA(BA) {
                  var mA = this;
                  if (BA && typeof BA == "object" && BA.constructor === mA)
                    return BA;
                  var TA = new mA(bA);
                  return DA(TA, BA), TA;
                }
                var UA = Math.random().toString(36).substring(2);
                function bA() {
                }
                var PA = void 0, j = 1, X = 2;
                function q() {
                  return new TypeError("You cannot resolve a promise with itself");
                }
                function eA() {
                  return new TypeError("A promises callback cannot return that same promise.");
                }
                function uA(BA, mA, TA, MA) {
                  try {
                    BA.call(mA, TA, MA);
                  } catch (fe) {
                    return fe;
                  }
                }
                function gA(BA, mA, TA) {
                  x(function(MA) {
                    var fe = !1, Ae = uA(TA, mA, function(Fe) {
                      fe || (fe = !0, mA !== Fe ? DA(MA, Fe) : RA(MA, Fe));
                    }, function(Fe) {
                      fe || (fe = !0, GA(MA, Fe));
                    }, "Settle: " + (MA._label || " unknown promise"));
                    !fe && Ae && (fe = !0, GA(MA, Ae));
                  }, BA);
                }
                function FA(BA, mA) {
                  mA._state === j ? RA(BA, mA._result) : mA._state === X ? GA(BA, mA._result) : ce(mA, void 0, function(TA) {
                    return DA(BA, TA);
                  }, function(TA) {
                    return GA(BA, TA);
                  });
                }
                function QA(BA, mA, TA) {
                  mA.constructor === BA.constructor && TA === vA && mA.constructor.resolve === hA ? FA(BA, mA) : TA === void 0 ? RA(BA, mA) : l(TA) ? gA(BA, mA, TA) : RA(BA, mA);
                }
                function DA(BA, mA) {
                  if (BA === mA)
                    GA(BA, q());
                  else if (m(mA)) {
                    var TA = void 0;
                    try {
                      TA = mA.then;
                    } catch (MA) {
                      GA(BA, MA);
                      return;
                    }
                    QA(BA, mA, TA);
                  } else
                    RA(BA, mA);
                }
                function KA(BA) {
                  BA._onerror && BA._onerror(BA._result), LA(BA);
                }
                function RA(BA, mA) {
                  BA._state === PA && (BA._result = mA, BA._state = j, BA._subscribers.length !== 0 && x(LA, BA));
                }
                function GA(BA, mA) {
                  BA._state === PA && (BA._state = X, BA._result = mA, x(KA, BA));
                }
                function ce(BA, mA, TA, MA) {
                  var fe = BA._subscribers, Ae = fe.length;
                  BA._onerror = null, fe[Ae] = mA, fe[Ae + j] = TA, fe[Ae + X] = MA, Ae === 0 && BA._state && x(LA, BA);
                }
                function LA(BA) {
                  var mA = BA._subscribers, TA = BA._state;
                  if (mA.length !== 0) {
                    for (var MA = void 0, fe = void 0, Ae = BA._result, Fe = 0; Fe < mA.length; Fe += 3)
                      MA = mA[Fe], fe = mA[Fe + TA], MA ? $(TA, MA, fe, Ae) : fe(Ae);
                    BA._subscribers.length = 0;
                  }
                }
                function $(BA, mA, TA, MA) {
                  var fe = l(TA), Ae = void 0, Fe = void 0, Bt = !0;
                  if (fe) {
                    try {
                      Ae = TA(MA);
                    } catch (He) {
                      Bt = !1, Fe = He;
                    }
                    if (mA === Ae) {
                      GA(mA, eA());
                      return;
                    }
                  } else
                    Ae = MA;
                  mA._state !== PA || (fe && Bt ? DA(mA, Ae) : Bt === !1 ? GA(mA, Fe) : BA === j ? RA(mA, Ae) : BA === X && GA(mA, Ae));
                }
                function be(BA, mA) {
                  try {
                    mA(function(MA) {
                      DA(BA, MA);
                    }, function(MA) {
                      GA(BA, MA);
                    });
                  } catch (TA) {
                    GA(BA, TA);
                  }
                }
                var zA = 0;
                function NA() {
                  return zA++;
                }
                function WA(BA) {
                  BA[UA] = zA++, BA._state = void 0, BA._result = void 0, BA._subscribers = [];
                }
                function YA() {
                  return new Error("Array Methods must be provided an Array");
                }
                var XA = function() {
                  function BA(mA, TA) {
                    this._instanceConstructor = mA, this.promise = new mA(bA), this.promise[UA] || WA(this.promise), C(TA) ? (this.length = TA.length, this._remaining = TA.length, this._result = new Array(this.length), this.length === 0 ? RA(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(TA), this._remaining === 0 && RA(this.promise, this._result))) : GA(this.promise, YA());
                  }
                  return BA.prototype._enumerate = function(TA) {
                    for (var MA = 0; this._state === PA && MA < TA.length; MA++)
                      this._eachEntry(TA[MA], MA);
                  }, BA.prototype._eachEntry = function(TA, MA) {
                    var fe = this._instanceConstructor, Ae = fe.resolve;
                    if (Ae === hA) {
                      var Fe = void 0, Bt = void 0, He = !1;
                      try {
                        Fe = TA.then;
                      } catch (Ge) {
                        He = !0, Bt = Ge;
                      }
                      if (Fe === vA && TA._state !== PA)
                        this._settledAt(TA._state, MA, TA._result);
                      else if (typeof Fe != "function")
                        this._remaining--, this._result[MA] = TA;
                      else if (fe === Ee) {
                        var Ar = new fe(bA);
                        He ? GA(Ar, Bt) : QA(Ar, TA, Fe), this._willSettleAt(Ar, MA);
                      } else
                        this._willSettleAt(new fe(function(Ge) {
                          return Ge(TA);
                        }), MA);
                    } else
                      this._willSettleAt(Ae(TA), MA);
                  }, BA.prototype._settledAt = function(TA, MA, fe) {
                    var Ae = this.promise;
                    Ae._state === PA && (this._remaining--, TA === X ? GA(Ae, fe) : this._result[MA] = fe), this._remaining === 0 && RA(Ae, this._result);
                  }, BA.prototype._willSettleAt = function(TA, MA) {
                    var fe = this;
                    ce(TA, void 0, function(Ae) {
                      return fe._settledAt(j, MA, Ae);
                    }, function(Ae) {
                      return fe._settledAt(X, MA, Ae);
                    });
                  }, BA;
                }();
                function ae(BA) {
                  return new XA(this, BA).promise;
                }
                function ye(BA) {
                  var mA = this;
                  return C(BA) ? new mA(function(TA, MA) {
                    for (var fe = BA.length, Ae = 0; Ae < fe; Ae++)
                      mA.resolve(BA[Ae]).then(TA, MA);
                  }) : new mA(function(TA, MA) {
                    return MA(new TypeError("You must pass an array to race."));
                  });
                }
                function de(BA) {
                  var mA = this, TA = new mA(bA);
                  return GA(TA, BA), TA;
                }
                function Ce() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function Te() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                var Ee = function() {
                  function BA(mA) {
                    this[UA] = NA(), this._result = this._state = void 0, this._subscribers = [], bA !== mA && (typeof mA != "function" && Ce(), this instanceof BA ? be(this, mA) : Te());
                  }
                  return BA.prototype.catch = function(TA) {
                    return this.then(null, TA);
                  }, BA.prototype.finally = function(TA) {
                    var MA = this, fe = MA.constructor;
                    return l(TA) ? MA.then(function(Ae) {
                      return fe.resolve(TA()).then(function() {
                        return Ae;
                      });
                    }, function(Ae) {
                      return fe.resolve(TA()).then(function() {
                        throw Ae;
                      });
                    }) : MA.then(TA, TA);
                  }, BA;
                }();
                Ee.prototype.then = vA, Ee.all = ae, Ee.race = ye, Ee.resolve = hA, Ee.reject = de, Ee._setScheduler = b, Ee._setAsap = U, Ee._asap = x;
                function we() {
                  var BA = void 0;
                  if (typeof sa < "u")
                    BA = sa;
                  else if (typeof self < "u")
                    BA = self;
                  else
                    try {
                      BA = Function("return this")();
                    } catch {
                      throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                  var mA = BA.Promise;
                  if (mA) {
                    var TA = null;
                    try {
                      TA = Object.prototype.toString.call(mA.resolve());
                    } catch {
                    }
                    if (TA === "[object Promise]" && !mA.cast)
                      return;
                  }
                  BA.Promise = Ee;
                }
                return Ee.polyfill = we, Ee.Promise = Ee, Ee;
              });
            }
          ),
          /***/
          html2canvas: (
            /*!******************************!*\
              !*** external "html2canvas" ***!
              \******************************/
            /***/
            function(f) {
              f.exports = c;
            }
          ),
          /***/
          jspdf: (
            /*!************************!*\
              !*** external "jspdf" ***!
              \************************/
            /***/
            function(f) {
              f.exports = n;
            }
          )
          /******/
        }, u = {};
        function p(f) {
          var m = u[f];
          if (m !== void 0)
            return m.exports;
          var l = u[f] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return d[f].call(l.exports, l, l.exports, p), l.exports;
        }
        (function() {
          p.n = function(f) {
            var m = f && f.__esModule ? (
              /******/
              function() {
                return f.default;
              }
            ) : (
              /******/
              function() {
                return f;
              }
            );
            return p.d(m, { a: m }), m;
          };
        })(), function() {
          p.d = function(f, m) {
            for (var l in m)
              p.o(m, l) && !p.o(f, l) && Object.defineProperty(f, l, { enumerable: !0, get: m[l] });
          };
        }(), function() {
          p.o = function(f, m) {
            return Object.prototype.hasOwnProperty.call(f, m);
          };
        }(), function() {
          p.r = function(f) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
          };
        }();
        var v = {};
        return function() {
          /*!**********************!*\
            !*** ./src/index.js ***!
            \**********************/
          p.r(v);
          var f = p(
            /*! ./worker.js */
            "./src/worker.js"
          );
          p(
            /*! ./plugin/jspdf-plugin.js */
            "./src/plugin/jspdf-plugin.js"
          ), p(
            /*! ./plugin/pagebreaks.js */
            "./src/plugin/pagebreaks.js"
          ), p(
            /*! ./plugin/hyperlinks.js */
            "./src/plugin/hyperlinks.js"
          );
          var m = function l(y, C) {
            var g = new l.Worker(C);
            return y ? g.from(y).save() : g;
          };
          m.Worker = f.default, v.default = m;
        }(), v = v.default, v;
      }()
    );
  });
})(Lu);
var hd = Lu.exports;
const dd = /* @__PURE__ */ uh(hd);
function gd(o, t) {
  const n = dd(t);
  return {
    save(c) {
      const d = su(o);
      if (!d) throw new Error("Element not found");
      return n.from(d).save(c);
    },
    convert(...c) {
      const d = su(o);
      if (!d) throw new Error("Element not found");
      return n.from(d).output(...c);
    }
  };
}
const Bd = /* @__PURE__ */ sh({
  __name: "Html2Pdf",
  setup(o) {
    const t = ih(), { convert: n, save: c } = gd(t);
    return (d, u) => (oh(), ah("div", ch({
      ref_key: "pdfEl",
      ref: t
    }, d.$attrs), [
      lh(d.$slots, "default", {
        convert: iu(n),
        save: iu(c)
      })
    ], 16));
  }
});
export {
  st as _,
  Bd as a,
  sa as c,
  uh as g,
  fd as r,
  gd as u
};
