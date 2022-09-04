import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const Customer = ({ customer }) => {
	const {
		id,
		companyName,
		taxnumber,
		taxOffice,
		invoiceCount,
		contactNumber,
		province,
	} = customer;
	return (
		<Link to={`/customers/${id}`}>
			<div>
				<p>{companyName} </p>
			</div>
		</Link>
	);
};

export default Customer;
