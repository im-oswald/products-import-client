import swal from 'sweetalert';

const SweetAlert = {
    error: (text) => {
      let args = {
        title: "Error",
        text: text,
        icon: "warning",
        buttons: {
          ok: true
        }
      };
      return swal(args)
    },
    success: (text) => {
      let args = {
        title: "Success",
        text: text,
        icon: "success",
        buttons: {
          ok: true
        }
      };
      return swal(args)
    }
};

export default SweetAlert;
