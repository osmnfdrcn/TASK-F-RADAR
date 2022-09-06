import * as Yup from 'yup'

const SchemaLogin = Yup.object().shape({
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "Lutfen e-posta adresi giriniz!"
  ),
  password: Yup.string().required("Lutfen sifrenizi giriniz!"),
})

export default SchemaLogin