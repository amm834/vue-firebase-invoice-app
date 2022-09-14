<script setup>
import NavBar from "./views/NavBar.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import useModal from "./modal";
import NotAvaliable from "./views/NotAvaliable.vue";
import {useWindowSize} from '@vueuse/core'
import {watchEffect} from "vue";

const modal = useModal();
const isNotAvaliable = $ref(true)

const {width} = useWindowSize()
const isMobile = $ref(false)

watchEffect(() => {
  isMobile = width.value <= 1250;
})


</script>

<template>
  <NotAvaliable v-if="isMobile"/>
  <main class="bg-slate-900 flex relative h-screen" v-else>
    <NavBar/>
    <InvoiceModal v-show="modal.open.value"/>
    <RouterView/>
  </main>
</template>

