declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>, {
    default?(_: {
        convert: (type: "dataurl" | "arraybuffer" | "blob" | "bloburl", options?: {
            filename: string;
        } | undefined, src?: "img" | "pdf" | undefined) => string | ArrayBuffer | Blob | URL;
        save: (fileName?: string | undefined) => PromiseLike<void>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Html2Pdf.vue.d.ts.map