import { FormRow } from "../"
import Wrapper from "../../assets/wrappera/UserInfo";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SchemaPasswordChange } from "../../utils/formSchemas";
import useTranslations from "../../features/i18n/useTranslation";

const Password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslations();
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
          labelText={t.password}
        />
        {
          formik.errors.password && formik.touched.password &&
          <span className="form-error">{t.errorMessagePassword} </span>
        }
        <FormRow
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          labelText={t.password}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword &&
          <span className="form-error">{t.errorMessageConfirmPassword} </span>
        }

        <button className="btn btn-block" type="submit" disabled={!userVerified} >{t.update}</button>


      </form>



    </Wrapper >
  )
}

export default Password

