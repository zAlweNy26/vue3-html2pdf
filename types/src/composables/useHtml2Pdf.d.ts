import { type MaybeRefOrGetter } from "vue";
export default function useHtml2Pdf(element: MaybeRefOrGetter<HTMLElement | undefined | null>, options?: Html2PdfWorkerOptions): {
    save(fileName?: string): PromiseLike<void>;
    convert(type: "dataurl" | "arraybuffer" | "blob" | "bloburl", options?: {
        filename: string;
    } | undefined, src?: "img" | "pdf" | undefined): string | ArrayBuffer | Blob | URL;
};
//# sourceMappingURL=useHtml2Pdf.d.ts.map