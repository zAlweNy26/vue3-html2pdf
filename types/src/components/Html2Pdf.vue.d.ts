/// <reference types="jspdf" />
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {
        convert: {
            (type?: "arraybuffer" | undefined, options?: import("jspdf").HTMLOptions | undefined): Promise<ArrayBuffer>;
            (type?: "url" | undefined, options?: import("jspdf").HTMLOptions | undefined): Promise<URL>;
            (type?: "string" | undefined, options?: import("jspdf").HTMLOptions | undefined): Promise<string>;
            (type?: "blob" | undefined, options?: import("jspdf").HTMLOptions | undefined): Promise<Blob>;
        };
        save: (fileName?: string | undefined, options?: import("jspdf").HTMLOptions | undefined) => Promise<void>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Html2Pdf.vue.d.ts.map