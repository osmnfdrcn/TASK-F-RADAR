import styled from 'styled-components'
const Wrapper = styled.div`
 margin: 30px 0;
 min-width: 350px;
 @media (min-width: 960px) {
  .horizontal-line{
    /* width: 100%; */
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }
  .password-form{
    width: 500px;
  }
 }
`
export default Wrapper