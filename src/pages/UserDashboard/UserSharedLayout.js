import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowUserProfileMobileMenu } from '../../features/app/appSlice'
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import Wrapper from '../../assets/wrappera/UserSharedLayout';

const UserSharedLayout = () => {
  const dispatch = useDispatch();
  const { showUserProfileMobileMenu } = useSelector((store) => store.app)

  useEffect(() => {
    window.addEventListener("click", () => dispatch(setShowUserProfileMobileMenu(false)))
    return () => {
      window.addEventListener("click", () => dispatch(setShowUserProfileMobileMenu(false)))
    }
  })

  return (
    <Wrapper>
      <div className='page-container'>
        <div className='outlet-area'>
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};
export default UserSharedLayout;

