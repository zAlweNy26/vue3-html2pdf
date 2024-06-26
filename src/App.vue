<script setup lang="ts">
import { ref } from 'vue'
import Html2Pdf from './components/Html2Pdf.vue'
import useHtml2Pdf from './composables/useHtml2Pdf'

const divEl = ref<HTMLDivElement>()

const { save, convert } = useHtml2Pdf(divEl)
</script>

<template>
    <div>
        <h1>Html2Pdf</h1>
        <Html2Pdf v-slot="{ save }">
            <h2>Html2Pdf example component</h2>
            <button type="button" @click="save()">Hello I am a slot component</button>
        </Html2Pdf>
        <div ref="divEl">
            <h2>Html2Pdf example composable</h2>
            <button type="button" @click="save('testName')">Save</button>
            <button type="button" @click="async () => {
                const res = await convert('blob')
                console.log(res)
            }">Convert</button>
        </div>
    </div>
</template>