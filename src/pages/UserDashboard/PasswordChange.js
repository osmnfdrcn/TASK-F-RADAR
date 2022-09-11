import { Title } from "../../components"
import { Password } from "../../components/UserProfile/"
import useTranslations from "../../features/i18n/useTranslation"

const PasswordChange = () => {
  const { t, lang } = useTranslations();
  const he = lang === "he";

  return (
    <div className={he ? "dashboard-section align-right" : "dashboard-section"}>
      <Title title={t.password} />
      <div className="dashboard-container">
        <Password />
      </div>
    </div >
  )
}

export default PasswordChange

