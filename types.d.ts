
declare module 'html2pdf.js' {
    export default html2pdf;
}

declare function html2pdf(opt?: Html2PdfWorkerOptions): Html2PdfWorkerRoot;
declare function html2pdf(
    element: Html2PdfElement,
    opt?: Html2PdfWorkerOptions
): PromiseLike<void>;

// declare type Html2PdfWorkerRoot = Html2PdfWorkerRoot;
declare type Html2PdfElement = string | HTMLElement;

declare interface Html2PdfWorkerRoot {
    from(
        element: Html2PdfElement,
        type?: 'string' | 'element' | 'canvas' | 'img'
    ): Html2PdfWorkerFrom;
}

declare interface Html2PdfWorkerContainer
    extends Html2PdfWorkerSave,
    Html2PdfWorkerTarget {
    toCanvas(): Html2PdfWorkerCanvas;
}

declare interface Html2PdfWorkerFrom
    extends Html2PdfWorkerSave,
    Html2PdfWorkerTarget,
    Html2PdfworkerOptions {
    toContainer(): Html2PdfWorkerContainer;
}

declare interface Html2PdfWorkerCanvas
    extends Html2PdfWorkerSave,
    Html2PdfWorkerTarget {
    toImg(): Html2PdfWorkerSave;
}

declare interface Html2PdfworkerImage
    extends Html2PdfWorkerSave,
    Html2PdfWorkerTarget {
    toPdf(): Html2PdfWorkerSave;
}

declare interface Html2PdfWorkerTarget {
    to(target: 'container' | 'canvas' | 'img' | 'pdf'): Html2PdfWorkerSave;
    output(type: 'dataurl', options?: { filename: string }, src: 'img'): string
    output(type: 'arraybuffer', options?: { filename: string }, src: 'pdf'): ArrayBuffer
    output(type: 'blob', options?: { filename: string }, src: 'pdf'): Blob
    output(type: 'bloburl', options?: { filename: string }, src: 'pdf'): URL
    output(
        type: 'dataurl' | 'arraybuffer' | 'blob' | 'bloburl', 
        options?: { filename: string }, 
        src?: 'img' | 'pdf'
    ): string | ArrayBuffer | Blob | URL
}

declare interface Html2PdfWorkerSave {
    save(fileName?: string): PromiseLike<void>;
}

declare interface Html2PdfworkerOptions {
    set(opt: Html2PdfWorkerOptions): Html2PdfWorkerRoot;
}

declare interface Html2PdfWorkerOptions {
    /**
     * PDF margin (in jsPDF units)
     */
    margin?: number | [number, number] | [number, number, number, number];
    /**
     * The default filename of the exported PDF.
     */
    filename?: string;
    /**
     * The image type and quality used to generate the PDF
     */
    image?: {
        type?: string;
        quality?: number;
    };
    /**
     * The html2canvas options used to generate the PDF.
     */
    html2canvas?: import('html2canvas').Options;
    /**
     * The jsPDF options used to generate the PDF.
     */
    jsPdf?: import('jspdf').jsPDFOptions;
    /**
     * If enabled, PDF hyperlinks are automatically added ontop of all anchor tags.
     */
    enableLinks?: boolean;
}
