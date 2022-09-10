import Wrapper from "../../assets/wrappera/Home";
import { useSelector, useDispatch } from "react-redux";
import { showCreateCustomerModal } from "../../features/customer/CustomerSlice";

import {
	Table,
	TableHeader,
	TableBody,
	Title,
	Search,
	Button,
	CustomerCreateModal,
} from "../../components";

import { tableHeaderTitles } from "../../utils/constants";

const HomePage = () => {
	const dispatch = useDispatch();
	const { displaySuccessAlert, displayErrorAlert, displayCreateCustomerModal } =
		useSelector((store) => store.customer);
	const { user } = useSelector((store) => store.user);
	const userVerified = user?.status === "Active";

	return (
		<Wrapper>
			{displayCreateCustomerModal && <CustomerCreateModal />}
			<Title title="Customer List" />

			<Search />
			<Button
				className="btn"
				text={"Create Customer"}
				onClick={() => dispatch(showCreateCustomerModal(true))}
				disabled={!userVerified}
			/>
			<Table>
				<TableHeader titles={tableHeaderTitles} />
				<TableBody />
			</Table>
		</Wrapper>
	);
};

export default HomePage;
