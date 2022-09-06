import { useSelector } from "react-redux"

const Button = ({ className, type, onClick, text, disabled }) => {
  const { isLoading } = useSelector((store) => store.customer);
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  )
}

export default Button