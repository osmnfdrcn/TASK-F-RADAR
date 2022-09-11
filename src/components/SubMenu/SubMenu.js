import { useDispatch } from 'react-redux';
import { logoutUser } from "../../features/user/userSlice";
import { setShowMainSubMenu } from '../../features/app/appSlice'
import { Link } from 'react-router-dom';
import Wrapper from "../../assets/wrappera/SubMenu"
import useTranslations from '../../features/i18n/useTranslation';

const SubMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const handleLogout = () => {
    dispatch(logoutUser())

  }
  return (
    <Wrapper onMouseLeave={() => dispatch(setShowMainSubMenu(false))}>
      <ul >
        <Link to="/user"><li >{t.accountInfo}</li></Link>
        <Link to="/security"><li >{t.password}</li></Link>
        <Link to=''><li onClick={handleLogout}>{t.logout}</li></Link>
      </ul>
    </Wrapper>
  )
}

export default SubMenu

