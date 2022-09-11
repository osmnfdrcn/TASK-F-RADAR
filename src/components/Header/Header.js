import { useSelector } from "react-redux";
import { selectTranslations } from "../../features/i18n/i18nSlice";
// ...

export default function Header() {
  const t = useSelector(selectTranslations);

  return (
    <div>
      <p> {t.accountSettings}</p>
      <p> {t.customerList}</p>
      {t.createNewCustomer}

      {/* <LangSwitcher /> */}
    </div>
  );
}