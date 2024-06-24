import { type MaybeRefOrGetter } from "vue";
export default function useHtml2Pdf(element: MaybeRefOrGetter<HTMLElement>): {
    convert(): string;
};
