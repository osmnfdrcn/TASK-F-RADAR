import Wrapper from "../../assets/wrappera/Title"
import useTranslations from "../../features/i18n/useTranslation"


const Title = ({ title }) => {
  const { lang } = useTranslations()
  const align = lang === "he" ? "flex-end" : "flex-start"
  return (
    <Wrapper align={align}>
      <p>{title}</p>
    </Wrapper>
  )
}

export default Title