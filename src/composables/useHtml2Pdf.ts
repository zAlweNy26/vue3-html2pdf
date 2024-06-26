import { type MaybeRefOrGetter, toValue } from "vue"
import html2Pdf, { type Html2PdfWorkerOptions, type Html2PdfWorkerTarget } from 'html2pdf.js'

export default function useHtml2Pdf(
    element: MaybeRefOrGetter<HTMLElement | undefined | null>, 
    options?: Html2PdfWorkerOptions
) {
    const converter = html2Pdf(undefined, options)

    return {
        save(fileName?: string) {
            const el = toValue(element)
            if (!el) throw new Error('Element not found')
            return converter.from(el).save(fileName)
        },
        async convert(...args: Parameters<Html2PdfWorkerTarget['output']>) {
            const el = toValue(element)
            if (!el) throw new Error('Element not found')
            return converter.from(el).output(...args)
        }
    }
}