import * as Yup from 'yup'

const SchemaRegister = Yup.object().shape({
  firstName: Yup.string().required('gerekli').min(2).max(30),
  lastName: Yup.string().required('gerekli').min(2).max(30),
  email: Yup.string().required('required').matches(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    "lutfen gecerli bir email adresi giriniz"
  ),
  password: Yup.string().required("required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    " Sifreniz 1 buyuk harf, 1 kucuk harf, 1 rakam ve 1 ozel karakter iceren en az 8 karakter uzunlugunda olmalidir"
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