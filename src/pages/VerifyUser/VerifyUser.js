import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { verifyUser } from '../../features/user/userSlice';
import Wrapper from '../../assets/wrappera/VerifyUser';
import { Spinner } from '../../components';

const VerifyUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { verificationCode } = useParams()
  const { isVerified, isLoading } = useSelector((store) => store.user);
  useState(() => {
    dispatch(verifyUser(verificationCode))
    setTimeout(() => {
      navigate('/');
    }, 3000)
  }, []);

  if (isLoading) { return <Spinner /> }
  return (
    <Wrapper >
      <p>{
        isVerified && verificationCode ? "Account Activated" : "404"
      }</p>
    </Wrapper>
  )
}

export default VerifyUser