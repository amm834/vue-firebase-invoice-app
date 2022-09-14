<script setup>
import NavBar from "./views/NavBar.vue";
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import {PlusCircleIcon, ChevronDownIcon} from '@heroicons/vue/24/solid'

const statuses = ['Pending', 'Draft', 'Paid']

</script>

<template>
  <main class="bg-slate-900 flex flex-row">
    <NavBar/>

    <div class="mx-auto px-4  text-white mt-8">
      <div class="fixed top-16 w-56 text-right">
      </div>
      <div class="flex flex-row gap-x-96 items-center">
        <div>
          <h1 class="text-3xl font-semibold mb-1">Invoices</h1>
          <div>There are 4 total invoices.</div>
        </div>

        <div class="flex gap-x-4 items-center">
          <!--        dropdown menu -->
          <div>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                    class="inline-flex w-full justify-center rounded-md px-4 py-2  text-white focus:outline-none"
                >
                  Filter By Status
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
                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="px-1 py-1">
                    <MenuItem
                        v-slot="{ active }"
                        v-for="(status,index) in statuses"
                        :key="index"
                    >
                      <button
                          :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                      >
                        {{ status }}
                      </button>
                    </MenuItem>
                  </div>

                </MenuItems>
              </transition>
            </Menu>

          </div>
          <!--         invoice button -->
          <div>
            <button class="btn btn-primary rounded-full flex gap-x-2 items-center">
              <PlusCircleIcon class="h-8"/>
              <span class="text-sm">New Invoice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

