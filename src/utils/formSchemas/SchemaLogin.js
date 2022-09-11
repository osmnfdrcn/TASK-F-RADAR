import * as Yup from 'yup'

const SchemaLogin = Yup.object().shape({
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "Please enter a valid email address"
  ),
  password: Yup.string().required("required"),
})

export default SchemaLogin