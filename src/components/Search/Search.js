import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormRow from '../FormRow/FormRow'
import { updateSearchString } from '../../features/customer/CustomerSlice'

const Search = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault()
    dispatch(updateSearchString(e.target.value))
  }
  return (
    <FormRow
      type="text"
      name="search"
      onChange={handleChange}
    />
  )
}

export default Search