import { FormRow } from "../"
import Wrapper from "../../assets/wrappera/UserInfo";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SchemaPasswordChange } from "../../utils/formSchemas";


const Password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((store) => store.user);
  const userVerified = user.status === 'Active'

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validationSchema: SchemaPasswordChange,
    onSubmit: () => {
      const { password } = formik.values;
      dispatch(updateUser({ password }));
    }
  })


  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit} className="password-form">
        < FormRow
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          labelText="Parola"
        />
        {
          formik.touched.password && formik.touched.password &&
          <span className="form-error">{formik.errors.password} </span>
        }
        <FormRow
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          labelText="Parola tekrar"
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword &&
          <span className="form-error">{formik.errors.confirmPassword} </span>
        }

        <button className="btn btn-block" type="submit" disabled={!userVerified} >GUNCELLE</button>


      </form>



    </Wrapper >
  )
}

export default Password

