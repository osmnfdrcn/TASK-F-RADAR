import { useDispatch } from 'react-redux';
import { logoutUser } from "../../features/user/userSlice";
import { setShowMainSubMenu } from '../../features/app/appSlice'
import { Link } from 'react-router-dom';

import Wrapper from "../../assets/wrappera/SubMenu"

const SubMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())

  }
  return (
    <Wrapper onMouseLeave={() => dispatch(setShowMainSubMenu(false))}>
      <ul >
        <Link to="/user"><li >Account Info</li></Link>
        <Link to="/security"><li >Password</li></Link>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </Wrapper>
  )
}

export default SubMenu

