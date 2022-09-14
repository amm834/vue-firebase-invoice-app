<script setup>
import NavBar from "./views/NavBar.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import useModal from "./modal";

const modal = useModal();
</script>

<template>
  <main class="bg-slate-900 flex relative">
    <NavBar/>
    <InvoiceModal v-show="modal.open.value"/>
    <RouterView/>
  </main>
</template>

