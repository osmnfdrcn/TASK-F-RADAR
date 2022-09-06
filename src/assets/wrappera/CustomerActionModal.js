import styled from 'styled-components'

const Wrapper = styled.div`
  position:absolute;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
  /* padding: 20px 0; */
  z-index: 1000;
  background-color: white;
  max-width: 600px;
  min-width: 400px;
  max-height: 900px;
  border: 1px solid var(--grey-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-4);
  svg{
    font-size: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-weight: 100;
    color: var(--grey-300);
    :hover{
      color: var(--primary-300);
    }
  }

  
`
export default Wrapper