import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTranslations from "../../features/i18n/useTranslation";
import {
	getSingleCustomer,
	deleteCustomer,
	showDeleteConfirmModal,
	showUpdateCustomerModal,
} from "../../features/customer/CustomerSlice";

import {
	Spinner,
	Title,
	ConfirmModal,
	Button,
	CustomerUpdateModal,
} from "../../components";
import Wrapper from "../../assets/wrappera/CustomerDetails";

const CustomerDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { t, lang } = useTranslations();
	const { user } = useSelector((store) => store.user);
	const userVerified = user?.status === "Active";
	const he = lang === "he";

	const {
		customer,
		isLoading,
		displayDeleteConfirmModal,
		displayUpdateCustomerModal,
	} = useSelector((store) => store.customer);

	useEffect(() => {
		dispatch(getSingleCustomer(id));
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	const handleDelete = (id) => {
		dispatch(deleteCustomer(id));
		dispatch(showDeleteConfirmModal(false));
		navigate("/");
	};

	return (
		<Wrapper>
			{displayDeleteConfirmModal && (
				<ConfirmModal
					action={t.youAreAboutToDeleteARecord}
					question={t.areYouSure}
					handleAction={handleDelete}
					id={customer.id}
				/>
			)}

			{displayUpdateCustomerModal && <CustomerUpdateModal />}
			<Title title={t.customerDetails} />

			{/* burasi component haline getirilecek */}
			<div className="customer-details">
				<div className={he ? "item align-right" : "item"}>
					{" "}
					<span>{he ? customer.companyName : t.companyName} </span>
					<span>{he ? t.companyName : customer.companyName}</span>
				</div>
				<div className={he ? "item align-right" : "item"}>
					{" "}
					<span>{he ? customer.taxOffice : t.taxOffice} </span>
					<span>{he ? t.taxOffice : customer.taxOffice}</span>
				</div>
				<div className={he ? "item align-right" : "item"}>
					{" "}
					<span>{he ? customer.taxNumber : t.taxNumber} </span>
					<span>{he ? t.taxNumber : customer.taxNumber}</span>
				</div>
				<div className={he ? "item align-right" : "item"}>
					{" "}
					<span>{he ? customer.invoiceCount : t.invoiceCount} </span>
					<span>{he ? t.invoiceCount : customer.invoiceCount}</span>
				</div>
				<div className={he ? "item align-right" : "item"}>
					{" "}
					<span>{he ? customer.contactNumber : t.contactNumber} </span>
					<span>{he ? t.contactNumber : customer.contactNumber}</span>
				</div>
				<div className={he ? "item align-right" : "item"}>
					{" "}
					<span>{he ? customer.province : t.province} </span>
					<span>{he ? t.province : customer.province}</span>
				</div>

				<div className={he ? "buttons align-right" : "buttons"}>
					<Button
						className="btn btn-block"
						type="submit"
						onClick={() => dispatch(showUpdateCustomerModal(true))}
						text={t.edit}
						disabled={!userVerified}
					/>
					<Button
						className="btn btn-block"
						type="submit"
						onClick={() => dispatch(showDeleteConfirmModal(true))}
						text={t.delete}
						disabled={!userVerified}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default CustomerDetailsPage;
