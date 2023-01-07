




import React, { useState } from 'react';

import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';



export default function NavBurger() {
  const [showNavExternal, setShowNavExternal] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            className = 'mx-2' color='secondary'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal(!showNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0'>
            PROJECTS
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' >
            ABOUT
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' >
            CONTACT
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}





