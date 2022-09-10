import { UserInfo } from "../../components/UserProfile"
import { Title } from "../../components"

const ContactInfo = () => {
  return (
    <div className='dashboard-section'>
      <Title title={'Hesap Bilgileri'} />
      <div className="dashboard-container">
        <UserInfo />
      </div>
    </div>
  )
}

export default ContactInfo