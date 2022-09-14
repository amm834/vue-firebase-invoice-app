<script setup>
import useModal from "../modal";

const modal = useModal()
</script>
<template>

  <div
      class="bg-slate-900 shadow-lg shadow-lg shadow-gray-800 text-white  absolute left-16 py-20 pl-14 pr-12 h-screen overflow-y-scroll scrollbar">
    <h2>New Invoice</h2>
    Invoice
    <button class="btn btn-primary" @click="modal.closeModal">Close</button>


  </div>

</template>
