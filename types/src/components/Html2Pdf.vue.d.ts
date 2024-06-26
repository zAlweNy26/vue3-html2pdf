declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {
        convert: {
            (type?: "arraybuffer" | undefined, margin?: number | undefined, options?: import("html-to-image/lib/types").Options | undefined): Promise<ArrayBuffer>;
            (type?: "url" | undefined, margin?: number | undefined, options?: import("html-to-image/lib/types").Options | undefined): Promise<URL>;
            (type?: "string" | undefined, margin?: number | undefined, options?: import("html-to-image/lib/types").Options | undefined): Promise<string>;
            (type?: "blob" | undefined, margin?: number | undefined, options?: import("html-to-image/lib/types").Options | undefined): Promise<Blob>;
        };
        save: (fileName?: string | undefined, margin?: number, options?: import("html-to-image/lib/types").Options | undefined) => Promise<void>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Html2Pdf.vue.d.ts.map