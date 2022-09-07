import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  table { 
		width: 1250px; 
		border-collapse: collapse; 
		margin:50px auto;
	}

/* Zebra striping */

tr:nth-of-type(odd) { 
	background: #eee; 
}
	tr:hover{
	background-color: var(--primary-300);
	color: white;
}
th { 
	background: var(--primary-800); 
	color: white; 
	letter-spacing: 2px;
	}

td, th { 
	padding: 10px; 
	border: 1px solid #ccc; 
	text-align: left; 
	font-size: 15px;
	}


@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table { 
	  	width: 100%; 
	}

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}

	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
		/* Label the data */
		content: attr(data-column);

		color: #000;
		font-weight: bold;
	}

}


  /* @media (min-width: 992px) {


  } */
  
`
export default Wrapper