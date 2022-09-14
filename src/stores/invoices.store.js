import {defineStore} from "pinia/dist/pinia";
import {reactive, ref} from "vue";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../services/firebase.service'


export const useInvoicesStore = defineStore('invoices', () => {
    const invoices = reactive([]);
    const loading = ref(null)

    async function createInvoice(invoice) {
        loading.value = true
        await addDoc(collection(db, 'invoices'), JSON.parse(JSON.stringify(invoice)));
        loading.value = false
    }

    return {
        invoices,
        loading,

        createInvoice,
    }
})
