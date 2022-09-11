import { useDispatch, useSelector } from 'react-redux';
import { createCustomer, showCreateCustomerModal } from '../../features/customer/CustomerSlice';
import SchemaCustomer from '../../utils/formSchemas/SchemaCustomer'
import { useFormik } from "formik";
import { FormRow, Title, Spinner, Button } from '..'
import Wrapper from '../../assets/wrappera/CustomerActionModal';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { selectTranslations } from "../../features/i18n/i18nSlice";
import useTranslations from '../../features/i18n/useTranslation';


const CustomerCreateModal = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.customer);
  const { t } = useTranslations();
  const { user } = useSelector((store) => store.user);
  const userVerified = user?.status === "Active";

  const formik = useFormik({
    initialValues: {
      companyName: "",
      taxNumber: "",
      taxOffice: "",
      invoiceCount: "",
      contactNumber: "",
      province: "",

    },

    validationSchema: SchemaCustomer,
    onSubmit: () => {
      const { companyName, taxNumber, taxOffice, invoiceCount, contactNumber } = formik.values;

      dispatch(createCustomer(formik.values));

    }
  })

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Title title={t.createNewCustomer} />
      <AiOutlineCloseCircle onClick={() => dispatch(showCreateCustomerModal(false))} />
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
            placeholder={t.forInstance}
          />
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
          <Button className="btn btn-block" type="submit" text={t.create} disabled={!userVerified || isLoading || !(formik.isValid && formik.dirty)} />
        </div>
      </form>
    </Wrapper>
  );
}

export default CustomerCreateModal