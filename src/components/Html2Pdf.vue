<script setup lang="ts">
import useHtml2Pdf from '@/composables/useHtml2Pdf'
import { ref } from 'vue'

const pdfEl = ref<HTMLDivElement>()

const { convert, save } = useHtml2Pdf(pdfEl)
</script>

<template>
  <div ref="pdfEl" v-bind="$attrs">
    <slot :convert :save />
  </div>
</template>