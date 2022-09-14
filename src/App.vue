<script setup>
import NavBar from "./views/NavBar.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import useModal from "./composables/modal";
import NotAvaliable from "./views/NotAvaliable.vue";
import {useWindowSize} from '@vueuse/core'
import {watchEffect} from "vue";

const modal = useModal();

const {width} = useWindowSize()
let isMobile = $ref(false)

watchEffect(() => {
  isMobile = width.value <= 1250;
})


</script>

<template>
  <NotAvaliable v-if="isMobile"/>
  <main class="bg-slate-900 flex relative h-screen" v-else>
    <NavBar/>

    <transition name="invoice">
      <InvoiceModal v-show="modal.open.value"/>
    </transition>

    <RouterView/>
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

