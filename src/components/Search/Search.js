import { useDispatch } from 'react-redux'
import FormRow from '../FormRow/FormRow'
import { updateSearchString } from '../../features/customer/CustomerSlice'
import useTranslations from "../../features/i18n/useTranslation";


const Search = () => {
  const dispatch = useDispatch()
  const { t } = useTranslations();
  const handleChange = (e) => {
    e.preventDefault()
    dispatch(updateSearchString(e.target.value))
  }
  return (
    <FormRow
      type="text"
      name="search"
      onChange={handleChange}
      placeholder={t.search}
      className="search-input"
      labelText=""
    />
  )
}

export default Search