import {ref} from 'vue';

let open = ref(false);

export default function useAlertModal() {

    const openAlertModal = () => open.value = true;
    const closeAlertModal = () => open.value = false;

    return {
        open,

        openModal: openAlertModal, closeModal: closeAlertModal
    }
}