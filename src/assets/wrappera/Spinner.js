import styled from 'styled-components'

const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    animation: spinner 1s linear infinite;
  }
  .loading-center {
    margin: 0 auto;
  }



`

export default Wrapper