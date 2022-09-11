import { useDispatch } from "react-redux";
import useTranslations from "../../features/i18n/useTranslation";
import { showDeleteConfirmModal } from "../../features/customer/CustomerSlice";
import { Button } from "../";
import Wrapper from "../../assets/wrappera/ConfirmModal"

const ConfirmModal = ({ action, question, id, handleAction }) => {
  const dispatch = useDispatch();
  const { t } = useTranslations();


  return (
    <Wrapper>
      <h3>{action}</h3>
      <h4>{question}</h4>
      <div className="buttons">
        <Button className="btn" onClick={() => handleAction(id)} text={t.delete} />
        <Button className="btn" onClick={() => dispatch(showDeleteConfirmModal(false))} text={t.close} />
      </div>
    </Wrapper>
  )
}

export default ConfirmModal