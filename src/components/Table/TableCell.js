import useTranslations from "../../features/i18n/useTranslation";

const TableCell = ({ key, onClick, text }) => {
  const { t } = useTranslations();
  return (
    <th key={key} onClick={onClick} >{t[text]}</th>
  )
}

export default TableCell