import { useDispatch, useSelector } from 'react-redux';
import { updateCustomer, showUpdateCustomerModal } from '../../features/customer/CustomerSlice';
import SchemaCustomer from '../../utils/formSchemas/SchemaCustomer'
import { useFormik } from "formik";
import { FormRow, Title, Spinner, Button } from '../../components'
import Wrapper from '../../assets/wrappera/CustomerActionModal';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { selectTranslations } from "../../features/i18n/i18nSlice";
import useTranslations from '../../features/i18n/useTranslation';

const CustomerUpdateModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { t } = useTranslations();

  const { customer, isLoading } = useSelector((store) => store.customer);

  const formik = useFormik({
    initialValues: {
      id: customer.id,
      companyName: customer.companyName,
      taxNumber: customer.taxNumber,
      taxOffice: customer.taxOffice,
      invoiceCount: customer.invoiceCount,
      contactNumber: customer.contactNumber,
      province: customer.province,

    },

    validationSchema: SchemaCustomer,
    onSubmit: () => {
      dispatch(updateCustomer(formik.values));
    }
  })

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Title title={t.update} />
      <AiOutlineCloseCircle onClick={() => dispatch(showUpdateCustomerModal(false))} />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <FormRow
            type="text"
            name="companyName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            labelText={t.companyName}
          />
          {formik.errors.companyName && formik.touched.companyName && (
            <span className="form-error"> {formik.errors.companyName}</span>
          )}
        </div>
        <div>
          <FormRow
            type="text"
            name="taxNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.taxNumber}
            labelText={t.taxNumber}
          />
          {formik.errors.taxNumber && formik.touched.taxNumber && (
            <span className="form-error">{formik.errors.taxNumber} </span>
          )}
        </div>

        <div>
          <FormRow
            type="text"
            name="taxOffice"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.taxOffice}
            labelText={t.taxOffice}
          />
          {formik.errors.taxOffice && formik.touched.taxOffice && (
            <span className="form-error">{formik.errors.taxOffice} </span>
          )}
        </div>
        <div>
          <FormRow
            type="text"
            name="invoiceCount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.invoiceCount}
            labelText={t.invoiceCount}
          />
          {formik.errors.invoiceCount && formik.touched.invoiceCount && (
            <span className="form-error">{formik.errors.invoiceCount} </span>
          )}
        </div>

        <div>
          <FormRow
            type="text"
            name="contactNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.contactNumber}
            labelText={t.contactNumber}
            placeholder={t.forInstance} />
          {formik.errors.contactNumber && formik.touched.contactNumber && (
            <span className="form-error">{formik.errors.contactNumber} </span>
          )}
        </div>
        <div>
          <FormRow
            type="text"
            name="province"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.province}
            labelText={t.province}
          />
          {formik.errors.province && formik.touched.province && (
            <span className="form-error">{formik.errors.province} </span>
          )}
        </div>

        <div className="buttons">
          <Button className="btn btn-block" type="submit" text={t.update} disabled={isLoading || !(formik.isValid && formik.dirty)} />
        </div>
      </form>
    </Wrapper>
  );
}

export default CustomerUpdateModal