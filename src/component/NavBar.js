import React from 'react'
import logo from '../logo.svg'
class NavBar extends React.Component {
    state = {  } 
    render() { 
        return ( 
          <>      
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="Logo"
                width={30}
                height={24}
                className="d-inline-block align-text-top"
              />
            NSS UPES
            </a>
          </div>
        </>
        );
    }
}
 
export default NavBar ;