import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Icon, Header, Modal} from 'semantic-ui-react'

const Footer = () => {
  const [playing, setPlaying] = useState(false)
  
  const handlePlaying = () => {
    if(!playing) {
     setPlaying(true)
     
    }
  }

  const GameModal = () => (
    <Modal trigger={<Link to="#" className="link" onClick={handlePlaying}>
      {!playing ? 'Want to play a game?' : 'Let\'s keep playing!'}
    </Link>} centered={false}>
      <Modal.Header>Lets play!</Modal.Header>
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
    <footer className='footer'>
      <div>
        <div className="start">
          <div>
            <Icon name='copyright' />2019 pixedev
          </div>
          <div>
            <Icon name='react' />react injected&nbsp;
          </div>
          <div>
            <GameModal />
          </div>
        </div>
      </div>
      <div>
        <ul className='sitemap'>
          <li><h4><Icon name='sitemap' /> Site Map</h4></li>
          <li><Link to="/story" className="link">Story</Link></li>
          <li><Link to="/work" className="link">Work</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
