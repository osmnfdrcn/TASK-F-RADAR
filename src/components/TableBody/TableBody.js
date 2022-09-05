import { Customer } from "../";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getCustomers } from "../../features/customer/CustomerSlice";
import Wrapper from "../../assets/wrappera/Table";


const TableBody = () => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((store) => store.customer);
  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  return (
    <tbody>
      {searchResults?.map((customer) => {
        return <Customer customer={customer} key={uuidv4()} />;
      })}
    </tbody>
  )
}

export default TableBody