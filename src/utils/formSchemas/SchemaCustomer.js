import * as Yup from 'yup'

const SchemaCustomer = Yup.object().shape({
  companyName: Yup.string().required("Please enter Company Name!"),
  taxNumber: Yup.number().test('len', 'Must be exactly 10 characters', val => Math.ceil(Math.log10(val + 1)) === 10),
  taxOffice: Yup.string().required("Please enter Tax Office!"),
  invoiceCount: Yup.number().required("Please enter Invoice Count!"),
  contactNumber: Yup.string().required("Please enter a valid contact number!").matches(
    /^([23458]{1})([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/,
  ),
  province: Yup.string().required("required"),

})

export default SchemaCustomer