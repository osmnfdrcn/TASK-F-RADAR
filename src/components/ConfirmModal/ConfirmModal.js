import Wrapper from "../../assets/wrappera/ConfirmModal"
import { useDispatch } from "react-redux";

import { showDeleteConfirmModal } from "../../features/customer/CustomerSlice";
import Button from "../Button/Button";

const ConfirmModal = ({ action, question, id, handleAction }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h3>{action}</h3>
      <h4>{question}</h4>
      <div className="buttons">
        <Button className="btn" onClick={() => handleAction(id)} text="DELETE" />
        <Button className="btn" onClick={() => dispatch(showDeleteConfirmModal(false))} text="CLOSE" />
      </div>
    </Wrapper>
  )
}

export default ConfirmModal