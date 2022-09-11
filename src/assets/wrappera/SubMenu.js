import styled from 'styled-components'
const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  top: 60px;
  right: 0;
  width: 250px;
  box-shadow: var(--shadow-2);
  ul li{
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 16px;
    color: var(--grey-500);
    height: 60px;
    width: 100%;
    cursor: pointer;
  }
  ul li:hover{
    background-color: var(--grey-50);
  }
  .icon{
    margin-right: 20px;
    font-size: 20px;
    font-weight: 800;
  }
`
export default Wrapper