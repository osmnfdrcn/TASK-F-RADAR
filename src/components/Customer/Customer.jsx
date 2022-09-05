import { useNavigate } from "react-router-dom";

const Customer = ({ customer }) => {
	const navigate = useNavigate();

	const {
		companyName,
		taxNumber,
		taxOffice,
		invoiceCount,
		contactNumber,
		province,
	} = customer;

	const handleRowClick = (row) => {
		navigate(`/customers/${row.id}`);
	};

	return (
		<tr onClick={() => handleRowClick(customer)}>
			<td data-column="Company Name">{companyName} </td>
			<td data-column="Tax Number">{taxNumber}</td>
			<td data-column="Tax Office">{taxOffice}</td>
			<td data-column="Invoice Count">{invoiceCount}</td>
			<td data-column="Contact Number">{contactNumber}</td>
			<td data-column="Province">{province}</td>
		</tr>
	);
};

export default Customer;
