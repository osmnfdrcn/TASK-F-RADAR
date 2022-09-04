import { useParams } from "react-router-dom";

const CustomerDetailsPage = () => {
	const { id } = useParams();
	return <div>{id}</div>;
};

export default CustomerDetailsPage;
