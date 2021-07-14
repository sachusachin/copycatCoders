import React from 'react';
// import { NavLink,Link} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; 

function Notfound() {
  const stylediv = {
    color: 'black',
    fontSize: 80,
    display:'flex',
    alignItems:'center',
    justifyContent:'spaceAround',
    flexDirection:'column',
    height:'80vh'

  };
    return (
       <div style={ stylediv }>
         <p>404</p>
         <h3>Error</h3>
       </div>
    );
  }
  
  export default Notfound;