import styled from 'styled-components'
const Wrapper = styled.div`
  --align: ${props => props.align};
  
  height: 60px;
  width: 100%;
  font-size: 22px;
  color: var(--grey-800);
  display: flex;
  justify-content: var(--align);
  align-items: center;
  padding: 60px;
  letter-spacing: 5px;
  p{
    display: inline-block;
    padding: 5px 0;
    font-weight: 600;
    letter-spacing: 3px;
  }



`
export default Wrapper