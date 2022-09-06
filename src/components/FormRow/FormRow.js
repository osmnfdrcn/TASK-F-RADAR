const FormRow = ({ type, name, value, onChange, onBlur, labelText, placeholder, className, readOnly }) => {
    const isEditing = true
    return (
        <div className={`form-row ${className}`}>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                className='form-input '
                placeholder={placeholder}
            // readOnly={true}
            />
        </div>
    )
}

export default FormRow