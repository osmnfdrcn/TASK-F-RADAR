import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getCustomers } from "../../features/customer/CustomerSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
	const dispatch = useDispatch();
	const { customers } = useSelector((store) => store.customer);

	useEffect(() => {
		dispatch(getCustomers());
	}, []);

	return (
		<>
			{customers?.map((c) => {
				return (
					<Link to={`/customers/${c.id}`} key={uuidv4()}>
						<div>
							<p>{c.companyName}</p>
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default HomePage;
