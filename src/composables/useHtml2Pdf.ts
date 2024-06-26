import { type MaybeRefOrGetter, toValue } from "vue"
import { jsPDF, type jsPDFOptions as PdfOptions, type HTMLOptions } from "jspdf"

export default function useHtml2Pdf(
    element: MaybeRefOrGetter<HTMLElement | undefined | null>,
    pdfOptions?: PdfOptions,
    htmlOptions?: HTMLOptions
) {
    const pdf = new jsPDF({
        unit: 'pt',
        orientation: 'landscape',
        ...pdfOptions,
    })

    async function convert(type?: 'arraybuffer', options?: HTMLOptions): Promise<ArrayBuffer>;
    async function convert(type?: 'url', options?: HTMLOptions): Promise<URL>;
    async function convert(type?: 'string', options?: HTMLOptions): Promise<string>;
    async function convert(type?: 'blob', options?: HTMLOptions): Promise<Blob>;
    async function convert(type: 'blob' | 'arraybuffer' | 'url' | 'string' = 'blob', options?: HTMLOptions) {
        const el = toValue(element)
        if (!el) throw new Error('Element not found')
        const worker = pdf.html(el, options ?? htmlOptions)
        if (type === 'string') return worker.outputPdf('datauristring')
        if (type === 'arraybuffer') return worker.outputPdf('arraybuffer')
        if (type === 'url') return worker.outputPdf('bloburl')
        return worker.outputPdf('blob')
    }

    const save = async (fileName?: string, options?: HTMLOptions) => {
        await convert('blob', options)
        pdf.save(fileName)
    }

    return {
        convert,
        save,
    }
}