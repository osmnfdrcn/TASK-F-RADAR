import * as Yup from 'yup'

const SchemaUser = Yup.object().shape({
  firstName: Yup.string().required('gerekli').min(2).max(30),
  lastName: Yup.string().required('gerekli').min(2).max(30),
  email: Yup.string().required('gerekli').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "lutfen gecerli bir email adresi giriniz"
  ),
  country: Yup.string(),
  city: Yup.string(),
  phone: Yup.string()
})


export default SchemaUser

