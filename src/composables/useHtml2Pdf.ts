import { type MaybeRefOrGetter, toValue } from "vue"

export default function useHtml2Pdf(element: MaybeRefOrGetter<HTMLElement>) {
    return {
        convert() {
            return `converted ${toValue(element).textContent}`
        }
    }
}