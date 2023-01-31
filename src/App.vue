<script setup>
import toast from './components/toast.vue'

import { ref } from 'vue'

const pos = ref('top-l')
const desc = ref('All your tasks has been completed')
const title = ref('Well done!')
const show = ref(false)
const type = ref('success')

const showToast = (position, toastTitle, toatsMessage, toastType) => {
  title.value = toastTitle
  desc.value = toatsMessage
  pos.value = position
  type.value = toastType
  show.value = true
  window.mainAPI.toastCounter()
}

const hideToast = () => {
  show.value = false
}

</script>

<template>
    <toast :type="type" :title="title" :description="desc" :position="pos" :showToast="show" @hideToast="hideToast" />
    <button @click="showToast('top-r', 'Hello there', 'I am a success toast! you can prompt a success message here', 'success')">top-right</button>
    <button @click="showToast('top-l', 'HEEEY!', 'I am a warning toast! you can prompt a warning message here', 'warning')">top-left</button>
    <button @click="showToast('top-c', 'OPS', 'I am a error toast! you can prompt an error message here', 'error')">top-center</button>
    <button @click="showToast('bottom-r', 'Yeahh', 'You did it!', 'success')">bottom-right</button>
    <button @click="showToast('bottom-l', 'CRITICAL ERROR', 'Something went wrong', 'error')">bottom-left</button>
    <button @click="showToast('bottom-c', 'Check your data', 'please consider entering an email address', 'warning')">bottom-center</button>
</template>

<style scoped>

button {
  @apply m-4 p-4 border-2 border-black
}

</style>
