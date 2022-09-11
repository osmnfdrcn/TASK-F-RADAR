import { UserInfo } from "../../components/UserProfile"
import { Title } from "../../components"
import useTranslations from "../../features/i18n/useTranslation"

const ContactInfo = () => {
  const { t, lang } = useTranslations();
  const he = lang === "he";

  return (
    <div className={he ? "dashboard-section align-right" : "dashboard-section"} >
      <Title title={t.accountInfo} />
      <div className="dashboard-container ">
        <UserInfo />
      </div>
    </div>
  )
}

export default ContactInfo