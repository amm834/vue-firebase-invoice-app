import {defineStore} from "pinia/dist/pinia";
import {reactive, ref} from "vue";
import {addDoc, collection, getDocs} from 'firebase/firestore'
import {db} from '../services/firebase.service'


export const useInvoicesStore = defineStore('invoices', () => {
    const invoices = reactive([]);
    const loading = ref(null)

    async function getAllInvoice() {
        const querySnapshot = await getDocs(collection(db, "invoices"));
        querySnapshot.forEach((doc) => {
            invoices.push(doc.data())
        });
    }

    async function createInvoice(invoice) {
        loading.value = true
        await addDoc(collection(db, 'invoices'), JSON.parse(JSON.stringify(invoice)));
        loading.value = false
    }

    return {
        invoices, loading,

        createInvoice,
        getAllInvoice,
    }
})
