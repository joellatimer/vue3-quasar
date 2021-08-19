import { Dialog, Loading } from 'quasar'
eslint-disable
// eslint-disable-next-line import/prefer-default-export
export function showErrorMessage(errorMessage) {
    Loading.hide()
    Dialog.create({
        title: 'Error',
        message: errorMessage
    })
}
