import { type MaybeRefOrGetter } from "vue";
import { type jsPDFOptions as PdfOptions, type HTMLOptions } from "jspdf";
export default function useHtml2Pdf(element: MaybeRefOrGetter<HTMLElement | undefined | null>, pdfOptions?: PdfOptions, htmlOptions?: HTMLOptions): {
    convert: {
        (type?: 'arraybuffer', options?: HTMLOptions): Promise<ArrayBuffer>;
        (type?: 'url', options?: HTMLOptions): Promise<URL>;
        (type?: 'string', options?: HTMLOptions): Promise<string>;
        (type?: 'blob', options?: HTMLOptions): Promise<Blob>;
    };
    save: (fileName?: string, options?: HTMLOptions) => Promise<void>;
};
//# sourceMappingURL=useHtml2Pdf.d.ts.map