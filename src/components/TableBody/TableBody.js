import { Customer, Spinner } from "../";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getCustomers } from "../../features/customer/CustomerSlice";
import Wrapper from "../../assets/wrappera/Table";

const TableBody = () => {
  const dispatch = useDispatch();
  const { searchResults, isLoading } = useSelector((store) => store.customer);
  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  if (isLoading) { return <Spinner /> }
  return (
    <tbody>
      {searchResults?.map((customer) => {
        return <Customer customer={customer} key={uuidv4()} />;
      })}
    </tbody>
  )
}

export default TableBody