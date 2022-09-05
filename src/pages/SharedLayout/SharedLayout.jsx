import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappera/SharedLayout";

const SharedLayout = () => {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
};

export default SharedLayout;
