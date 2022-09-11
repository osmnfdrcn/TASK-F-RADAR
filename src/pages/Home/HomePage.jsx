import Wrapper from "../../assets/wrappera/Home";
import { useSelector, useDispatch } from "react-redux";
import { showCreateCustomerModal } from "../../features/customer/CustomerSlice";
import useTranslations from "../../features/i18n/useTranslation";

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
	const { t } = useTranslations();

	const dispatch = useDispatch();
	const { displayCreateCustomerModal } = useSelector((store) => store.customer);
	const { user } = useSelector((store) => store.user);
	const userVerified = user?.status === "Active";

	return (
		<Wrapper>
			{displayCreateCustomerModal && <CustomerCreateModal />}
			<Title title={t.customerList} />

			<Search />
			<Button
				className="btn"
				text={t.createNewCustomer}
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
