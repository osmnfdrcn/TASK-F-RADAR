import * as Yup from 'yup'

const SchemaRegister = Yup.object().shape({
  firstName: Yup.string().required('required').min(2).max(30),
  lastName: Yup.string().required('required').min(2).max(30),
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "Please enter a valid email address"
  ),
  password: Yup.string().required("required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    " Password must contain 1 uppercase, 1 lowercase letters, 1 number ve 1 special character and be at least 8 digit long!"
  ),
  confirmPassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "both password need to be the same"
    )
  })
})

export default SchemaRegister