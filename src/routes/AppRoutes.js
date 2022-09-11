import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Warning } from '../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  HomePage,
  CustomerDetailsPage,
  LoginPage,
  ProtectedRoute,
  SharedLayout,
  ErrorPage,
  VerifyUser
} from '../pages'

import {
  ContactInfo,
  PasswordChange,
} from '../pages/UserDashboard'


const AppRoutes = () => {
  const { user, } = useSelector((store) => store.user);
  const userVerified = user?.status === 'Active'

  return (
    <Router>
      <Navbar />
      <ToastContainer hideProgressBar autoClose={2000} position='top-left' pauseOnFocusLoss={false} closeOnClick pauseOnHover={false} />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path='customers/:id' element={<CustomerDetailsPage />} />
          <Route path='user' element={<ContactInfo />} />
          <Route path='security' element={<PasswordChange />} />
        </Route>
        <Route path='user/:verificationCode' element={<VerifyUser />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {
        user && !userVerified && <Warning text={"Hesabinizi aktif hale getirmek icin lutfen email adresinizi onaylayiniz!"} />
      }


    </Router>
  )
}

export default AppRoutes