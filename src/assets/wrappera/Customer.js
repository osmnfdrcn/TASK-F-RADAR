import styled from 'styled-components'

const Wrapper = styled.div`


.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}


  td, .fl-table th {
    text-align: center;
    padding: 8px;
}
  td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}
  th {
    color: #ffffff;
    background: #4FC3A1;
}

  th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}
  tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {

 th {
        display: block;
    }
 th:last-child{
        border-bottom: none;
    }
 td, th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
 th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
 tr {
        display: table-cell;
    }
 tr:nth-child(odd) {
        background: none;
    }
 tr:nth-child(even) {
        background: transparent;
    }
 tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
 tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
 td {
        display: block;
        text-align: center;
    }
}
  
`
export default Wrapper