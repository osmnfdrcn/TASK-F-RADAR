import * as Yup from 'yup'

const SchemaUser = Yup.object().shape({
  firstName: Yup.string().required('required').min(2).max(30),
  lastName: Yup.string().required('required').min(2).max(30),
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "Please provide a valid email address"
  ),
  country: Yup.string(),
  city: Yup.string(),
  phone: Yup.string()
})


export default SchemaUser

