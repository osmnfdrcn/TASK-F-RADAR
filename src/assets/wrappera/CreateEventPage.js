import styled from 'styled-components'
const Wrapper = styled.div`

  width: 100%;
  .location{
    margin: 0 auto;
    max-width: 600px;
  }
  .tags-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    margin-bottom: 20px;

    .visited{
        position: relative;
        display: inline-block;
        background-color: var(--grey-100 );
        padding: 5px 10px;
        font-size: 14px;
        color: var(--grey-600);
    }
    .visited span{
        position: absolute;
        top: -8px;
        right: 2px;
        font-size: 14px;
        display: none;
        color: white;
    }
    .visited:hover{
        cursor: pointer;
        background-color: var(--grey-600);
        color: white;
    }
    .visited:hover span{
        display: block;
    }
  }
  .category,
  .tags{
    display: flex;
    align-items: center;
    gap: 30px;

  }
  .tags{
    .form-tag{
      flex: 8;
    }
    button{
      cursor: pointer;
      outline: none;
      border: none;
      text-align: center;
      /* height: 100%; */
      padding: 15px 25px;
      display: inline-block;
      color: white;
      background-color: var(--grey-500);
      flex: 1;
      :disabled{
        cursor: not-allowed;
      }
    }
  }
  .category{
    flex-direction: column;
  }
  .suggestion-container{
    width: 100%;
    border: 1px solid var(--grey-100);
    padding: 10px 20px;
    span{
      display: block;
      font-size: 14px;
      color: var(--grey-500);
      
    }
  }
  .map {
  margin-top: 30px;
  width: 100%;
  height: 300px;
}
  .suggestion-container:hover{
    background-color: var(--grey-50);
  }

  .pickers{
    margin-top: 30px;
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 30px;
  }
  @media (min-width: 960px) {
    main{
      max-width: 700px;
    }
  }

`
export default Wrapper