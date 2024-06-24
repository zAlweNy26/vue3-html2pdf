<script setup lang="ts">
const test = 'Hello I am Awesome library'

defineEmits<{
    convert: []
}>()
</script>

<template>
    <button type="button" @click="$emit('convert')">{{ test }}</button>
</template>