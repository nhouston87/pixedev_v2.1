import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../resources/img/400dpiLogoCropped.png'
import {Icon, Header, Modal } from 'semantic-ui-react'

const Navigation = () => {
  const handleClick = () => {
    const toggler = document.querySelector('#toggler')
    toggler.parentElement.classList.toggle('active')
  }

  const LoginModal = () => (
    <Modal trigger={<Link to="#" className="link">Customers</Link>} centered={false}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

  return (
    <nav className='navbar'>
      <Link to='/' className="brand"><img src={logo} alt="PIXEDEV" /></Link>
      <Link to='#' onClick={handleClick} className="toggle" id="toggler"><Icon name='setting' /></Link>
      <div className="left"></div>
      <div className="right">
        <Link to="/story" className="link">Story</Link>
        <Link to="/work" className="link">Work</Link>
        <Link to="/contact" className="link">Contact</Link>
        <LoginModal />
      </div>
    </nav>
  )
}

export default Navigation
