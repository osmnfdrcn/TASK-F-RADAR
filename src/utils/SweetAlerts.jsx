import Swal from "sweetalert2";

export const AlertsSuccess = ({ title }) => {
	Swal.fire({
		position: "top-end",
		icon: "success",
		title,
		showConfirmButton: false,
		timer: 5500,
	});
};

export const AlertsError = ({ title, text }) => {
	Swal.fire({
		position: "top-end",
		icon: "error",
		text,
		title,
	});
};
