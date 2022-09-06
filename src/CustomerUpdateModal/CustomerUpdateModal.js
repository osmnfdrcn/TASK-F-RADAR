import { useDispatch, useSelector } from 'react-redux';
import { updateCustomer } from '../features/customer/CustomerSlice';
import { showUpdateCustomerModal } from '../features/app/AppSlice'
import SchemaCustomer from '../utils/formSchemas/SchemaCustomer'
import { useFormik } from "formik";
import { FormRow, Title, Spinner, Button } from '../components'
import Wrapper from '../assets/wrappera/CustomerActionModal';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const CustomerUpdateModal = () => {
  const dispatch = useDispatch();
  const { customer, isLoading } = useSelector((store) => store.customer);
  const { companyName, taxNumber, taxOffice, invoiceCount, contactNumber, province } = customer

  const formik = useFormik({
    initialValues: {
      companyName,
      taxNumber,
      taxOffice,
      invoiceCount,
      contactNumber,
      province,

    },

    validationSchema: SchemaCustomer,
    onSubmit: () => {
      const { companyName, taxNumber, taxOffice, invoiceCount, contactNumber } = formik.values;

      dispatch(updateCustomer(formik.values));
    }
  })

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Title title="Update Customer" />
      <AiOutlineCloseCircle onClick={() => dispatch(showUpdateCustomerModal(false))} />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <FormRow
            type="text"
            name="companyName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyName}
            labelText="Company Name"
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
            labelText="Tax Number"
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
            labelText="Tax Office"
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
            labelText="Invoice Count"
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
            labelText="Contact Number"
            placeholder="e.g : 212 212 12 12 or 534 2346576 or 5326784523"
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
            labelText="Province"
          />
          {formik.errors.province && formik.touched.province && (
            <span className="form-error">{formik.errors.province} </span>
          )}
        </div>

        <div className="buttons">
          <Button className="btn btn-block" type="submit" text="CREATE" disabled={isLoading || !(formik.isValid && formik.dirty)} />
        </div>
      </form>
    </Wrapper>
  );
}

export default CustomerUpdateModal