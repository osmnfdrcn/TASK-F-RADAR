import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowMainSubMenu } from '../../features/app/appSlice'
import Wrapper from '../../assets/wrappera/Navbar';
import { AiOutlineUser } from 'react-icons/ai'

import { MainHeaderItem, Logo, SubMenu } from '../../components';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { showMainSubMenu } = useSelector((store) => store.app)

  return (
    <Wrapper>

      <Link to='/' >
        <Logo />
      </Link>

      {user
        ? <div className='header-items'>
          <MainHeaderItem
            reactIcon={<AiOutlineUser />}
            text={user.firstName}
            classname={"user-item"}
            onClick={(e) => {
              dispatch(setShowMainSubMenu(!showMainSubMenu))
            }}
          />
        </div>
        : (<div className='header-items'>
          <Link to='/login' className='user-item'>
            <MainHeaderItem text={"Login"} classname={"user-item"} />
          </Link>
        </div>)

      }
      {
        user && showMainSubMenu && <SubMenu />
      }

    </Wrapper>
  )
}

export default Navbar