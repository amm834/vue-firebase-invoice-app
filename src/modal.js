import {readonly, ref} from 'vue';


let open = ref(false);

export default function useModal() {

    const openModal = () => open.value = true;
    const closeModal = () => open.value = false;

    return {
        open: readonly(open),

        openModal, closeModal
    }
}