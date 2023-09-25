import Swal from "sweetalert2"


export const showAlert = () => {
  Swal.fire({
    title: 'Lenguajes',
    input: 'select',
    inputPlaceholder: 'Seleccione su idioma',
    showCancelButton: true,
    inputOptions: {
        Español: 'Español',
        Ingles: 'English',
        Chino: '中国人',
        Portugues: 'português',
    }
  })
}


