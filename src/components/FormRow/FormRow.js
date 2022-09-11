import useTranslations from "../../features/i18n/useTranslation"

const FormRow = ({ type, name, value, onChange, onBlur, labelText, placeholder, className }) => {
    const { lang } = useTranslations()
    const alignRight = lang === "he" && "alignRight"

    return (
        <div className={`form-row ${className} `}>
            <label htmlFor={name} className={`form-label ${alignRight}`}>
                {labelText || name}
            </label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                className={`form-input ${alignRight} `}
                placeholder={placeholder}
            />
        </div>
    )
}

export default FormRow