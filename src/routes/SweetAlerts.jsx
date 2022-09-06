import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const mySwal = withReactContent(Swal);

export const SweetAlertsLogin = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Successful Login",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const SweetAlertsError = () => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    text: "Incorrect email.",
    title: "Something went wrong!",
  });
};
