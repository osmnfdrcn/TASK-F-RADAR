
const MainHeaderItem = ({ reactIcon, text, classname, onClick, onMouseLeave }) => {
  return (
    <div className={classname} onClick={onClick} onMouseLeave={onMouseLeave}>
      {reactIcon}
      <span>{text}</span>
    </div>
  )
}

export default MainHeaderItem