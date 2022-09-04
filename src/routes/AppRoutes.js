import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  HomePage,
  CustomerDetailsPage,
  LoginPage,
  ProtectedRoute,
  SharedLayout,
  ErrorPage
} from '../pages'


const AppRoutes = () => {

  return (
    <Router>
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
          <Route path='customer/:id' element={<CustomerDetailsPage />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </Router>
  )
}

export default AppRoutes