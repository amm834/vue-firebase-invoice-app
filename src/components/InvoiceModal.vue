<script setup>
import useModal from "../modal";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {ChevronDownIcon, PlusCircleIcon} from '@heroicons/vue/24/solid'

const modal = useModal()
const date = $ref()
const paymentsTerms = ['Net 30 days', 'Net 60 days']
let selectedPyament = $ref(paymentsTerms[0])


const changePaymentTerm = (index) => selectedPyament = paymentsTerms[index]

const createInvoice = () => {
  // TODO: create invoice
}

const cancelInvoice = () => {
  modal.closeModal()
}

const saveAsDraft = () => {
  // TODO: save as draft
}
</script>
<template>

  <form
      @submit.prevent="createInvoice"
      class="bg-slate-900 shadow-lg shadow-lg shadow-gray-800 text-white  absolute left-16 py-20 pl-14 pr-12 h-screen overflow-y-scroll scrollbar z-10">
    <h2 class="text-2xl font-bold mb-12">New Invoice</h2>

    <!--    Billing from section -->
    <section class="mb-16">
      <h3 class="text-purple-600 font-semibold mb-6">Bill From</h3>

      <!--      Street Address -->
      <div class="mb-6">
        <label for="street" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Street
          Address</label>
        <input type="text" id="street"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
      </div>

      <div class="grid grid-cols-3 gap-x-4">
        <!--        City -->
        <div class="mb-6">
          <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
          <input type="text" id="city"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
        <!--        Zip code -->
        <div class="mb-6">
          <label for="zip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Zip
          </label>
          <input type="number" id="zip"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
        <!--        Country -->
        <div class="mb-6">
          <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Country
          </label>
          <input type="text" id="country"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
      </div>


    </section>

    <!--    Bill to section -->
    <section class="mb-16">
      <h3 class="text-purple-600 font-semibold mb-6">Bill To</h3>

      <!--      Client Name -->
      <div class="mb-6">
        <label for="client-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Client
          Name</label>
        <input type="text" id="client-name"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required>
      </div>

      <!--      Client email -->
      <div class="mb-6">
        <label for="client-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Client
          Email</label>
        <input type="text" id="client-email"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required>
      </div>

      <!--     Client Street Address -->
      <div class="mb-6">
        <label for="client-street-address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Street
          Address</label>
        <input type="text" id="client-street-address"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required>
      </div>

      <div class="grid grid-cols-3 gap-x-4">
        <!--        City -->
        <div class="mb-6">
          <label for="client-city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
          <input type="text" id="client-city"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
        <!--        Zip code -->
        <div class="mb-6">
          <label for="client-zip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Zip
          </label>
          <input type="number" id="client-zip"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
        <!--        Country -->
        <div class="mb-6">
          <label for="client-country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Country
          </label>
          <input type="text" id="client-country"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>


        <!--       Invoice Date picker -->
        <div class="col-span-full grid grid-cols-2 gap-x-3 mt-12 mb-6">
          <div>
            <label for="client-country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Invoice Date
            </label>
            <Datepicker v-model="date" id="invoice-date" close-on-auto-apply dark text-input
                        hide-input-icon
            />
          </div>

          <!--          Due date -->
          <div>
            <label for="client-country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Due Date
            </label>
            <Datepicker id="invoice-date" close-on-auto-apply dark text-input
                        hide-input-icon disabled/>
          </div>

        </div>

      </div>

      <!--          Payment Terms -->
      <div class="mb-6">
        <label class="block  text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">Payment Terms</label>
        <Menu as="div" class="relative text-left col-span-full">
          <div>
            <MenuButton
                class="flex bg-gray-500 w-full justify-between rounded-md px-4 py-2  text-white focus:outline-none"
            >
              {{ selectedPyament }}
              <ChevronDownIcon
                  class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
              />
            </MenuButton>
          </div>

          <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
                class="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem
                    v-slot="{ active }"
                    v-for="(payment,index) in paymentsTerms"
                    :key="index"
                >
                  <button
                      :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                      @click="changePaymentTerm(index)"
                  >
                    {{ payment }}
                  </button>
                </MenuItem>
              </div>

            </MenuItems>
          </transition>
        </Menu>
      </div>

      <!-- Product Description -->
      <div class="mb-6 col-span-full">
        <label for="product-description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product
          Description</label>
        <input type="text" id="product-description"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required>
      </div>

    </section>


    <!--    Item list section -->
    <section>
      <h3 class="text-purple-600 font-semibold mb-6">Item List</h3>

      <!--      List table -->
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Item Name
            </th>
            <th scope="col" class="py-3 px-6 text-center">
              Qty
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              Apple Watch
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center space-x-3">
                <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button">
                  <span class="sr-only">Quantity button</span>
                  <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"></path>
                  </svg>
                </button>
                <div>
                  <input type="number" id="first_product"
                         class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="1" required="">
                </div>
                <button
                    class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button">
                  <span class="sr-only">Quantity button</span>
                  <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              $599
            </td>
            <td class="py-4 px-6">
              <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <!--       Add new item button-->
      <button
          class="transition-colors flex justify-center items-center gap-x-3 my-4 bg-slate-800 col-span-full w-full rounded-full py-3 hover:bg-slate-700">
        <PlusCircleIcon class="h-8 text-indigo-600"/>
        <span> Add New Item</span>
      </button>

    </section>

    <!--    Form Action section-->
    <section class="flex justify-between mt-16">
      <div>
        <!--        Cancel button -->
        <button
            class="bg-red-500 px-6 py-3 rounded-full hover:opacity-90"
            @click="cancelInvoice"
        >
          Cancel
        </button>
      </div>
      <div class="space-x-3">
        <!--        Save Draft button -->
        <button
            class="bg-slate-800 px-6 py-3 rounded-full hover:opacity-90"
            @click="saveAsDraft"
        >
          Save Draft
        </button>

        <!--        Creaet Invoice button -->
        <button type="submit" class="bg-green-600 px-6 py-3 rounded-full hover:opacity-90">Create Invoice</button>
      </div>
    </section>
  </form>

</template>
