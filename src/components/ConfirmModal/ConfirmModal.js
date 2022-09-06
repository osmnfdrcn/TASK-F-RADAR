import Wrapper from "../../assets/wrappera/ConfirmModal"
import { useDispatch, useSelector } from "react-redux";
import { AlertsSuccess } from '../../utils/SweetAlerts'

import { showConfirmModal } from "../../features/app/AppSlice";
import Button from "../Button/Button";

const ConfirmModal = ({ action, question, id, handleAction }) => {
  const dispatch = useDispatch();
  const { showSuccessAlert } = useSelector((store) => store.customer);

  return (
    <Wrapper>
      {showSuccessAlert && <AlertsSuccess title={'Record Deleted'} />}
      <h3>{action}</h3>
      <h4>{question}</h4>
      <div className="buttons">
        <Button className="btn" onClick={() => handleAction(id)} text="DELETE" />
        <Button className="btn" onClick={() => dispatch(showConfirmModal(false))} text="CLOSE" />
      </div>
    </Wrapper>
  )
}

export default ConfirmModal