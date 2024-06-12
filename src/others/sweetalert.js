import Swal from 'sweetalert2'

const fire = (titleText, text, icon, theme, callback = null, showCancelButton = false, confirmButtonText = 'Accept') => Swal.fire({
    titleText,
    text,
    icon,
    showCancelButton,
    confirmButtonText,
    color: theme ? '#FFFFFF' : '#000000',
    background: theme ? '#202020' : '#FFFFFF',
    confirmButtonColor: theme ? '#000000' : '#202020',
    cancelButtonColor: theme ? '#000000' : '#202020',
    buttonsStyling: false,
    customClass: {
        popup: `shadowed ${theme}`,
        confirmButton: 'text-button',
        cancelButton: 'text-button'
    }
}).then(result => result.isConfirmed && callback && callback())

export default fire