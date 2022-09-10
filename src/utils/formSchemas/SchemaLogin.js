import * as Yup from 'yup'

const SchemaLogin = Yup.object().shape({
  email: Yup.string().required('gerekli'),
  password: Yup.string().required("gerekli"),
})

export default SchemaLogin