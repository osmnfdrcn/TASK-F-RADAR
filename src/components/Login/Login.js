import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { FcGoogle } from 'react-icons/fc'
import { FormRow } from "../";
import Wrapper from "../../assets/wrappera/Login";
import { SchemaRegister, SchemaLogin } from "../../utils/formSchemas";

const Login = () => {
  const [isMember, setIsMember] = useState(true)
  const { user, isLoading } = useSelector((store) => store.user);
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


  return (
    <Wrapper>
      <div className="register-container">
        <form onSubmit={formik.handleSubmit}>
          <span className="title">
            {isMember ? "GIRIS" : "KAYIT"}
          </span>

          {!isMember &&
            <>
              <FormRow
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                labelText="Isim"
              />

              {formik.errors.firstName && formik.touched.firstName &&
                <span className="form-error"> {formik.errors.firstName}</span>
              }

              <FormRow
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                labelText="Soyisim"
              />
              {formik.errors.lastName && formik.touched.lastName &&
                <span className="form-error">{formik.errors.lastName} </span>
              }
            </>}

          <FormRow
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            labelText="Email"
          />
          {formik.errors.email && formik.touched.email &&
            <span className="form-error">{formik.errors.email} </span>
          }

          <FormRow
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            labelText="Parola"
          />
          {formik.touched.password && formik.touched.password &&
            <span className="form-error">{formik.errors.password} </span>
          }

          {!isMember &&
            <>
              <FormRow
                type="password"
                name="confirmPassword"
                labelText="Parolanizi Tekrar Giriniz"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}

              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                <span className="form-error">{formik.errors.confirmPassword} </span>
              }
            </>
          }

          <button className="btn btn-block" type="submit" disabled={isLoading}>{isMember ? "GIRIS YAP" : "KAYIT OL"}</button>

          <div className="toggle-button">
            <input type="checkbox" id="toggle" className="toggleCheckbox" />
            <label htmlFor="toggle" className="toggleContainer">
              <div
                onClick={() => {
                  formik.resetForm()
                  setIsMember(!isMember)
                }}>
                GIRIS
              </div>

              <div
                onClick={() => {
                  formik.resetForm()
                  setIsMember(!isMember)
                }}>
                KAYIT
              </div>
            </label>
          </div>

        </form>



      </div>
    </Wrapper >
  )
}

export default Login