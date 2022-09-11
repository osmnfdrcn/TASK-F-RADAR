import Wrapper from "../../assets/wrappera/Logo"
import logo from '../../assets/svg/logo.svg';

const Logo = () => {
  return (
    <Wrapper>
      <img className='logo' src={logo} alt="fon radar logo" />
    </Wrapper>
  )
}

export default Logo