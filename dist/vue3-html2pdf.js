import { openBlock as r, createElementBlock as s, toValue as l } from "vue";
const _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, f = {}, m = { type: "button" };
function u(t, e) {
  return r(), s("button", m, "Hello I am Awesome library");
}
const i = /* @__PURE__ */ _(f, [["render", u]]);
function d(t) {
  console.log("useHtml2Pdf", l(t).innerHTML);
}
export {
  i as Html2Pdf,
  d as useHtml2Pdf
};
