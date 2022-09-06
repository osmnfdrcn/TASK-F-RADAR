import styled from 'styled-components'
const Wrapper = styled.div`
    margin: 0 auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  .customer-details{
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
    width: 100%;
  }
  .item{
    width: 100%;
     display: flex;
     align-items: center;
  }
  .item span:nth-child(1){
      width: 50% ;

    }

  .buttons{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    button{
      width: 100px;
    }
  }
  @media (min-width: 767px) {
    .item span:nth-child(1){
      width: 25% ;

    }
  }
  
`
export default Wrapper