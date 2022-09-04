import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getSingleCustomer } from "../../features/customer/CustomerSlice";
import { Link } from "react-router-dom";
import { Customer } from "../../components";

const CustomerDetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { customer } = useSelector((store) => store.customer);

	useEffect(() => {
		dispatch(getSingleCustomer(id));
	}, []);
	return <Customer key={uuidv4()} customer={customer} />;
};

export default CustomerDetailsPage;
