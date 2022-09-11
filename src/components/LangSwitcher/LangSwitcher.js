import useTranslations from "../../features/i18n/useTranslation";

const LangSwitcher = () => {
  const { lang, supportedLangs, setLang } = useTranslations();

  return (
    <select className="form-select" value={lang} onChange={(e) => setLang(e.target.value)} >
      {Object.entries(supportedLangs).map(
        ([code, name]) => (
          <option value={code} key={code}>{name}</option>
        ),
      )}
    </select>
  );
}

export default LangSwitcher