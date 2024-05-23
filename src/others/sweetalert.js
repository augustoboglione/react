import Swal from 'sweetalert2'

const fire = (title, text, icon, callback) => Swal.fire({title, text, icon}).then(callback)

export default fire