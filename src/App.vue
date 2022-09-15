<script setup>
import NavBar from "./views/NavBar.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import useModal from "./composables/modal";
import NotAvaliable from "./views/NotAvaliable.vue";
import {useWindowSize} from '@vueuse/core'
import {watchEffect} from "vue";
import AlertModal from "./components/AlertModal.vue";
import useAlertModal from "./composables/alert-modal";
import {TransitionRoot} from '@headlessui/vue'

const modal = useModal();

const {width} = useWindowSize()
let isMobile = $ref(false)

watchEffect(() => {
  isMobile = width.value <= 1250;
})

const alertModal = useAlertModal()


</script>

<template>
  <NotAvaliable v-if="isMobile"/>
  <main class="bg-slate-900 flex relative h-screen" v-else>
    <NavBar/>

    <TransitionRoot
        :show="modal.open.value"
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
      <InvoiceModal v-show="modal.open.value"/>
    </TransitionRoot>

    <RouterView/>

    <AlertModal v-show="alertModal.open.value"/>
  </main>
</template>

<style scoped>

.invoice-enter-active,
.invoice-leave-active {
  transition: .5s ease-out all;
}


.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-100%);
}

</style>

