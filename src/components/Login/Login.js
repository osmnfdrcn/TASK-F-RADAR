import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import useTranslations from "../../features/i18n/useTranslation";
import { loginUser, registerUser } from '../../features/user/userSlice';
import { FormRow, Spinner } from "../";
import Wrapper from "../../assets/wrappera/Login";
import { SchemaRegister, SchemaLogin } from "../../utils/formSchemas";



const Login = () => {
  const [isMember, setIsMember] = useState(true)
  const { user, isLoading } = useSelector((store) => store.user);
  const { t } = useTranslations();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: isMember ? SchemaLogin : SchemaRegister,
    onSubmit: () => {
      const { firstName, lastName, email, password } = formik.values;

      if (isMember) {
        dispatch(loginUser({ email, password }));
        return;
      }
      dispatch(registerUser({ firstName, lastName, email, password }));
      formik.resetForm()
    }
  })

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    // eslint-disable-next-line 
  }, [user]);

  if (isLoading) { return <Spinner /> }
  return (
    <Wrapper>
      <div className="register-container">
        <form onSubmit={formik.handleSubmit}>
          <span className="title">
            {isMember ? t.login : t.register}
          </span>

          {!isMember &&
            <>
              <FormRow
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                labelText={t.name}
              />

              {formik.errors.firstName && formik.touched.firstName &&
                <span className="form-error"> {t.errorMessageFirstName}</span>
              }

              <FormRow
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                labelText={t.lastName}
              />
              {formik.errors.lastName && formik.touched.lastName &&
                <span className="form-error">{t.errorMessageLastName} </span>
              }
            </>
          }

          <FormRow
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            labelText={t.email}
          />
          {formik.errors.email && formik.touched.email &&
            <span className="form-error">{t.errorMessageEmail} </span>
          }

          <FormRow
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            labelText={t.password}
          />
          {formik.errors.password && formik.touched.password &&
            <span className="form-error">{isMember ? t.errorMessageLoginPassword : t.errorMessagePassword} </span>
          }

          {!isMember &&
            <>
              <FormRow
                type="password"
                name="confirmPassword"
                labelText={t.passwordRepeat}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}

              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                <span className="form-error">{t.errorMessageConfirmPassword} </span>
              }
            </>
          }

          <button className="btn btn-block" type="submit" disabled={isLoading}>{isMember ? t.login : t.register}</button>

          <div className="toggle-button">
            <input type="checkbox" id="toggle" className="toggleCheckbox" />
            <label htmlFor="toggle" className="toggleContainer">
              <div
                onClick={() => {
                  formik.resetForm()
                  setIsMember(!isMember)
                }}>
                {t.login}
              </div>

              <div
                onClick={() => {
                  formik.resetForm()
                  setIsMember(!isMember)
                }}>
                {t.register}
              </div>
            </label>
          </div>

        </form>



      </div>
    </Wrapper >
  )
}

export default Login