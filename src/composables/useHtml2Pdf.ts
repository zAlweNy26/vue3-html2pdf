import { type MaybeRefOrGetter, toValue } from "vue"
import { jsPDF, type jsPDFOptions as PdfOptions } from "jspdf"
import { toPng } from "html-to-image"

type ImageOptions = Parameters<typeof toPng>[1]

export default function useHtml2Pdf(
    element: MaybeRefOrGetter<HTMLElement | undefined | null>,
    pdfOptions?: PdfOptions,
    imageOptions?: ImageOptions
) {
    let pdf = new jsPDF()

    async function convert(type?: 'arraybuffer', margin?: number, options?: ImageOptions): Promise<ArrayBuffer>;
    async function convert(type?: 'url', margin?: number, options?: ImageOptions): Promise<URL>;
    async function convert(type?: 'string', margin?: number, options?: ImageOptions): Promise<string>;
    async function convert(type?: 'blob', margin?: number, options?: ImageOptions): Promise<Blob>;
    async function convert(type: 'blob' | 'arraybuffer' | 'url' | 'string' = 'blob', margin = 0, options?: ImageOptions) {
        const el = toValue(element)
        if (!el) throw new Error('Element not found')
        const { clientHeight, clientWidth } = el
        pdf = new jsPDF({
            unit: 'pt',
            orientation: 'landscape',
            format: [clientWidth + (margin * 2), clientHeight + (margin * 2)],
            ...pdfOptions,
        })
        const imgData = await toPng(el, options ?? imageOptions)
        pdf.addImage(imgData, "PNG", margin, margin, clientWidth, clientHeight)
        if (type === 'string') return pdf.output('datauristring')
        if (type === 'arraybuffer') return pdf.output('arraybuffer')
        if (type === 'url') return pdf.output('bloburl')
        return pdf.output('blob')
    }

    const save = async (fileName?: string, margin = 0, options?: ImageOptions) => {
        await convert('blob', margin, options)
        pdf.save(fileName)
    }

    return {
        convert,
        save,
    }
}