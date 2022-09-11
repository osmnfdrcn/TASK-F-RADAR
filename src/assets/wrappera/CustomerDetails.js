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
    justify-content: flex-end;
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
    display: inline-block;
    min-width: 200px ;
  }
  .item span:nth-child(2){
    display: inline-block;
    min-width: 200px ;
    text-align: right;
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

  .align-right{
    justify-content: flex-end;
  }
  @media (min-width: 767px) {
    .item span:nth-child(1){
      width: 25% ;

    }
  }
  
`
export default Wrapper