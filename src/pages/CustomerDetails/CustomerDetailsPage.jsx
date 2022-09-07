import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
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
					action="You are about to delete a record!"
					question="Are you sure?"
					handleAction={handleDelete}
					id={customer.id}
				/>
			)}

			{displayUpdateCustomerModal && <CustomerUpdateModal />}
			<Title title="Customer Details" />

			{/* burasi component haline getirilecek */}
			<div className="customer-details">
				<div className="item">
					{" "}
					<span>Company Name </span>
					<span>{customer.companyName}</span>
				</div>
				<div className="item">
					{" "}
					<span>Tax Number </span>
					<span>{customer.taxNumber}</span>
				</div>
				<div className="item">
					{" "}
					<span>Invoice Count</span>
					<span>{customer.invoiceCount}</span>
				</div>
				<div className="item">
					{" "}
					<span>Contact Number</span>
					<span>{customer.contactNumber}</span>
				</div>
				<div className="item">
					{" "}
					<span>Province</span>
					<span>{customer.province}</span>
				</div>

				<div className="buttons">
					<Button
						className="btn btn-block"
						type="submit"
						onClick={() => dispatch(showUpdateCustomerModal(true))}
						text="EDIT"
					/>
					<Button
						className="btn btn-block"
						type="submit"
						onClick={() => dispatch(showDeleteConfirmModal(true))}
						text="DELETE"
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default CustomerDetailsPage;
