import { useDispatch } from 'react-redux';
import useTranslations from '../../features/i18n/useTranslation';
import { logoutUser } from "../../features/user/userSlice";
import { setShowMainSubMenu } from '../../features/app/appSlice'
import { Link } from 'react-router-dom';
import Wrapper from "../../assets/wrappera/SubMenu"
import { MdOutlineManageAccounts } from 'react-icons/md'
import { RiLockPasswordLine, RiLogoutBoxRLine } from 'react-icons/ri'

const SubMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslations();

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Wrapper onMouseLeave={() => dispatch(setShowMainSubMenu(false))}>
      <ul >
        <Link to="/user"><li ><MdOutlineManageAccounts className='icon' /> {t.accountInfo}</li></Link>
        <Link to="/security"><li > <RiLockPasswordLine className='icon' /> {t.password}</li></Link>
        <Link to=''><li onClick={handleLogout}><RiLogoutBoxRLine className='icon' /> {t.logout}</li></Link>
      </ul>
    </Wrapper>
  )
}

export default SubMenu

