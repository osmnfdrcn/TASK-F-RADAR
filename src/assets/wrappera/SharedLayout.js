import styled from 'styled-components'

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    top: 60px;
    left: 0;
    min-height: calc(100vh - 60px);
    
  @media (min-width: 960px) {
    width: 80%;
  }
  
`
export default Wrapper