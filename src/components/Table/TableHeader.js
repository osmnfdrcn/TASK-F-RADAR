import { v4 as uuidv4 } from "uuid";
import { useDispatch } from 'react-redux'
import { sortCustomers } from '../../features/customer/CustomerSlice'
import { TableCell } from "../../components";
import { tableHeaderTitles } from '../../utils/constants'

const TableHeader = ({ titles }) => {
  const dispatch = useDispatch()

  return (
    <thead>
      <tr>
        {
          tableHeaderTitles.map(title => {
            return <TableCell key={uuidv4()} onClick={() => dispatch(sortCustomers(title.objKey))} text={title.title} />
          })
        }
      </tr>
    </thead>
  )
}

export default TableHeader