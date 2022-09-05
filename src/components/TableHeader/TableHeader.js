import { v4 as uuidv4 } from "uuid";

const TableHeader = ({ titles }) => {
  return (
    <thead>
      <tr>
        {
          titles.map(title => {
            return <th key={uuidv4()}>{title.title}</th>
          })
        }
      </tr>
    </thead>
  )
}

export default TableHeader