import Swal from 'sweetalert2'

const fire = (titleText, text, icon, callback = null, showCancelButton) => {
    let confirmButtonText = 'Accept'

    if (showCancelButton) {
        confirmButtonText = 'Yes'
    }

    Swal.fire({titleText, text, icon, showCancelButton, confirmButtonText, color: '#000000',
        customClass: {
            popup: 'shadowed',
            confirmButton: 'text-button',
            cancelButton: 'text-button'
        }
    }).then(result => result.isConfirmed && callback ? callback() : null)
}

export default fire