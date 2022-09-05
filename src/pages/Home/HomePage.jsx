import Wrapper from "../../assets/wrappera/Home";
import { TableHeader, TableBody, Title, Search } from "../../components";
import { tableHeaderTitles } from "../../utils/constants";

const HomePage = () => {
	return (
		<Wrapper>
			<Title title="Customer List" />
			<Search />
			<table>
				<TableHeader titles={tableHeaderTitles} />
				<TableBody />
			</table>
		</Wrapper>
	);
};

export default HomePage;
