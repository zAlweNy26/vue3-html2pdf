import { type MaybeRefOrGetter } from "vue";
import { type jsPDFOptions as PdfOptions } from "jspdf";
import { toPng } from "html-to-image";
type ImageOptions = Parameters<typeof toPng>[1];
export default function useHtml2Pdf(element: MaybeRefOrGetter<HTMLElement | undefined | null>, pdfOptions?: PdfOptions, imageOptions?: ImageOptions): {
    convert: {
        (type?: 'arraybuffer', margin?: number, options?: ImageOptions): Promise<ArrayBuffer>;
        (type?: 'url', margin?: number, options?: ImageOptions): Promise<URL>;
        (type?: 'string', margin?: number, options?: ImageOptions): Promise<string>;
        (type?: 'blob', margin?: number, options?: ImageOptions): Promise<Blob>;
    };
    save: (fileName?: string, margin?: number, options?: ImageOptions) => Promise<void>;
};
export {};
//# sourceMappingURL=useHtml2Pdf.d.ts.map