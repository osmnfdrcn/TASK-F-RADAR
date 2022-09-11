import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SchemaUser } from "../../utils/formSchemas";
import { FormRow } from "../";
import Wrapper from "../../assets/wrappera/UserInfo";
import useTranslations from '../../features/i18n/useTranslation';

const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslations();
  const { user, isLoading } = useSelector((store) => store.user);
  const userVerified = user.status === 'Active'


  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      city: user.address?.city,
      country: user.address?.country,
      phone: user.address?.phone
    },

    validationSchema: SchemaUser,
    onSubmit: () => {
      const { firstName, lastName, email, city, country, phone } = formik.values;
      const address = { city, country, phone }
      dispatch(updateUser({ firstName, lastName, email, address }));
    }
  })


  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>

        <FormRow
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          labelText={t.name}
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
          labelText={t.lastname}
        />
        {formik.errors.lastName && formik.touched.lastName &&
          <span className="form-error">{formik.errors.lastName} </span>
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
          <span className="form-error">{formik.errors.email} </span>
        }
        <FormRow
          type="text"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.city}
          labelText={t.city}
        />
        {formik.errors.city && formik.touched.city &&
          <span className="form-error">{formik.errors.city} </span>
        }
        <FormRow
          type="text"
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values?.country}
          labelText={t.country}
        />
        {formik.errors.country && formik.touched.country &&
          <span className="form-error">{formik.errors.country} </span>
        }
        <FormRow
          type="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          placeholder="orn : 212 212 12 12 veya 534 2346576 veya 5326784523"
          labelText={t.phone}
        />
        {formik.errors.phone && formik.touched.phone &&
          <span className="form-error">{formik.errors.phone} </span>
        }
        <button className="btn btn-block" type="submit" disabled={!userVerified} >{t.save}</button>
      </form>

    </Wrapper >
  )
}

export default UserInfo