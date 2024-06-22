import Swal from 'sweetalert2'

const fire = (titleText, text, icon, theme, callback = null, showCancelButton = false,
    confirmButtonText = 'Accept', cancelCallback = false) => Swal.fire({
    titleText,
    text,
    icon,
    showCancelButton,
    confirmButtonText,
    padding: '20px',
    color: theme ? '#FFFFFF' : '#000000',
    background: theme ? '#000000' : '#FFFFFF',
    confirmButtonColor: 'transparent',
    cancelButtonColor: 'transparent',
    buttonsStyling: false,
    heightAuto: false,
    customClass: {
        popup: `popup square shadowed ${theme}`,
        icon: 'popup-icon',
        title: 'popup-title',
        actions: 'popup-buttons',
        confirmButton: 'text-button shadowed',
        cancelButton: 'text-button shadowed'
    }
}).then(result => (cancelCallback && callback()) || (result.isConfirmed && callback && callback()))

export default fire