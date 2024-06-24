import { type MaybeRefOrGetter, toValue } from "vue"

export default function useHtml2Pdf(element: MaybeRefOrGetter<HTMLElement>) {
    console.log('useHtml2Pdf', toValue(element).innerHTML)
}