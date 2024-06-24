import { defineComponent as o, openBlock as r, createElementBlock as m, toDisplayString as l, toValue as s } from "vue";
const c = "Hello I am Awesome library", p = /* @__PURE__ */ o({
  __name: "Html2Pdf",
  emits: ["convert"],
  setup(t) {
    return (n, e) => (r(), m("button", {
      type: "button",
      onClick: e[0] || (e[0] = (i) => n.$emit("convert"))
    }, l(c)));
  }
});
function a(t) {
  return {
    convert() {
      return `converted ${s(t).textContent}`;
    }
  };
}
export {
  p as Html2Pdf,
  a as useHtml2Pdf
};
