import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from 'react-redux'

import { sortCustomers } from '../../features/customer/CustomerSlice'

const TableHeader = ({ titles }) => {
  const dispatch = useDispatch()
  return (
    <thead>
      <tr>
        {
          titles.map(title => {
            return <th key={uuidv4()} onClick={() => dispatch(sortCustomers(title.objKey))} >{title.title}</th>
          })
        }
      </tr>
    </thead>
  )
}

export default TableHeader