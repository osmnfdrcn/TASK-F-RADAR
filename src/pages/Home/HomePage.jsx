import Wrapper from "../../assets/wrappera/Home";
import { useSelector, useDispatch } from "react-redux";
import { showCreateCustomerModal } from "../../features/app/AppSlice";

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
	const { displaySuccessAlert, displayErrorAlert } = useSelector(
		(store) => store.customer
	);
	const { displayCreateCustomerModal } = useSelector((store) => store.app);

	return (
		<Wrapper>
			{displayCreateCustomerModal && <CustomerCreateModal />}
			<Title title="Customer List" />

			<Search />
			<Button
				className="btn"
				text={"Create Customer"}
				onClick={() => dispatch(showCreateCustomerModal(true))}
			/>
			<Table>
				<TableHeader titles={tableHeaderTitles} />
				<TableBody />
			</Table>
		</Wrapper>
	);
};

export default HomePage;
