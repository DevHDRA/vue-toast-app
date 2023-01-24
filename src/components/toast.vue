<template>
    <Transition :name="`toast-${position}`">
        <div :class="`toast-content ${useDefault(props.type)} ${position}`" v-show="props.showToast" @click="$emit('hideToast')">
            <div class="icon">
                <component :class="`icon-svg ${useDefault(props.type)}SVG`" :is="getImage(props.type)"></component>
            </div>
            <div class="message">
                <h5 class="title">{{ props.title }}</h5>
                <p class="description">{{ props.description }}</p>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import success from '../assets/success.vue'
import warning from '../assets/warning.vue'
import error from '../assets/error.vue'

import { ref, watch } from 'vue'

let timeoutVal = ref(null)

const emit = defineEmits(['hideToast'])

const typeSVG = {
    success,
    warning,
    error
}
 
const props = defineProps({
    type: { type: String, required: true, default: 'success',},
    title: { type: String, required: false, default: 'Success'},
    description: { type: String, required: false, default: 'everything is fine' },
    showToast: { type: Boolean, required: true, default: false},
    position: { type: String, required: true, default: 'top-l'}
})

watch(() => props.showToast, () => {
    if (timeoutVal.value) {
        clearTimeout(timeoutVal.value)
        timeoutVal.value = null
    }

    timeoutVal.value = setTimeout(() => {
        emit('hideToast')
    }, 3000);
});

const getImage = (type) => {
    const validateType = useDefault(type)
    return typeSVG[validateType]
}

const useDefault = (type) => {return ['success', 'warning', 'error'].indexOf(type) !== -1 ? type : 'success' }


</script>

<style scoped>
.icon-svg {
    @apply border-r-4 w-20 h-20 mx-2
}

.message {
    @apply px-4
}

.message .title {
    @apply text-2xl font-bold font-sans py-0
}

.message .description {
    @apply text-lg font-light font-sans italic py-0
}

.toast-content{
    @apply
    flex
    flex-row
    max-w-xl
    w-fit
    h-auto
    rounded-full
    text-white
    p-2
    justify-start
    items-center
    absolute
}

.success {
    @apply bg-success fill-success_low
}

.successSVG {
    @apply fill-success_low border-success_low
}

.warning {
    @apply bg-warning fill-warning_low
}

.warningSVG {
    @apply fill-warning_low border-warning_low
}

.error {
    @apply bg-error fill-error_low
}

.errorSVG {
    @apply fill-error_low border-error_low
}

/* Toast positions */

.top-r {
    @apply
    top-4
    right-4
}

.top-c {
    @apply
    absolute 
    top-2 
    left-1/2 
    transform -translate-x-1/2
}

.top-l {
    @apply
    top-4
    left-4
}

.bottom-r {
    @apply
    bottom-4
    right-4
}

.bottom-c {
    @apply
    absolute 
    bottom-2 
    left-1/2 
    transform -translate-x-1/2
}

.bottom-l {
    @apply
    bottom-4
    left-4
}

/* left styles */
.toast-top-l-enter-from, .toast-bottom-l-enter-from {
    @apply -translate-x-full;
}

.toast-top-l-enter-to, .toast-bottom-l-enter-to {
    @apply translate-x-0;
}

.toast-top-l-enter-active, .toast-bottom-l-enter-active {
    transition: all 500ms ease-in-out;
}

.toast-top-l-leave-from, .toast-bottom-l-leave-from{
    @apply translate-x-0;
}

.toast-top-l-leave-to, .toast-bottom-l-leave-to {
    @apply -translate-x-full;
}

.toast-top-l-leave-active, .toast-bottom-l-leave-active {
    transition: all 500ms ease-in-out;
}

/* Right styles */
.toast-top-r-enter-from, .toast-bottom-r-enter-from {
    @apply translate-x-full;
}

.toast-top-r-enter-to, .toast-bottom-r-enter-to {
    @apply translate-x-0;
}

.toast-top-r-enter-active, .toast-bottom-r-enter-active {
    transition: all 500ms ease-in-out;
}

.toast-top-r-leave-from, .toast-bottom-r-leave-from{
    @apply translate-x-0;
}

.toast-top-r-leave-to, .toast-bottom-r-leave-to {
    @apply translate-x-full;
}

.toast-top-r-leave-active, .toast-bottom-r-leave-active {
    transition: all 500ms ease-in-out;
}

/* Center styles */
.toast-top-c-enter-from{
    @apply -translate-y-full;
}

.toast-bottom-c-enter-from {
    @apply translate-y-full;
}

.toast-top-c-enter-to , .toast-bottom-c-enter-to {
    @apply translate-y-0;
}

.toast-top-c-enter-active, .toast-bottom-c-enter-active {
    transition: all 500ms ease-in-out;
}

.toast-top-c-leave-from, .toast-bottom-c-leave-from{
    @apply translate-y-0;
}

.toast-top-c-leave-to {
    @apply -translate-y-full;
}

.toast-bottom-c-leave-to {
    @apply translate-y-full;
}

.toast-top-c-leave-active, .toast-bottom-c-leave-active {
    transition: all 500ms ease-in-out;
}


</style>