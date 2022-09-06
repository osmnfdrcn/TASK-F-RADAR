import styled from 'styled-components'

const Wrapper = styled.div`
  position:absolute;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left:auto;
  margin-right:auto;
  max-width: 600px;
  height: 500px;
  border: 1px solid var(--grey-100);
  padding: 110px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-4);
  .buttons{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
`
export default Wrapper