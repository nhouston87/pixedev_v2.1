import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Icon, Modal} from 'semantic-ui-react'
import BigBLite from '../games/BigBLite'
import Rps from '../games/Rps'

const Footer = () => {
  // Handles if there is currently an active game session in the DOM
  const [playing, setPlaying] = useState(false)
  // Handles Toggling of the modal
  const [modal, setModal] = useState(false)
  // Handles which game is currently active
  const [game, setGame] = useState(null)
  // Game data per game
  const [bigB, setBigB] = useState({chap: 1, sub: 0, lvl: 1, exp: 0, atk: 10, def: 5, spec: 10, h: 100, s: 100, w: 'none'})
  const [rps, setRps] = useState({you: 0, comp: 0, round: 1, youLast: '', compLast: ''})
  
  const keepPlaying = () => {
    if(!playing) {
     setPlaying(true)
    }
    setModal(false)
  }

  const handleModal = () => {
    setModal(true);
  }

  const handleGame = (e) => {
    setGame(e.target.value)
  }

  const computerPicks = () => {
    const choice = Math.floor(Math.random() * 2) + 1
    switch (choice) {
      case 1:
        setGame('Big B Lite')
        break;
      case 2:
        setGame('Rock,Paper,Scissors')
        break;
      default:
        setGame('I wasnt listening and didnt choose, click quit')
        break;
    }
  }

  const quitGame = () => {
    setGame(null)
  }

  const loadGame = () => {
    switch (game) {
      case 'Big B Lite':
        return <BigBLite player={bigB} changePlayer={setBigB} />
      case 'Rock,Paper,Scissors':
        return <Rps data={rps} changeData={setRps} />
      default:
        return 'Could not load game'
    }
  }

  const GameList = () => (
    <div className='game-list'>
      <h4>Which game should we play?</h4>
      <div>
        <button className="game-btn" onClick={handleGame} value='Big B Lite'>Big B Lite</button>
        <button className="game-btn" onClick={handleGame} value='Rock,Paper,Scissors'>Rock,Paper,Scissors</button>
        <button className="game-btn" onClick={computerPicks}>You pick for me</button>
      </div>
    </div>
  )

  const CurrentGame = () => (
    <div className="current-game actions">
      <h4>Playing: {game}</h4>
      <div>{loadGame()}</div>
      <button className='game-btn button' onClick={quitGame} >Quit</button>
    </div>
  )

  const GameModal = () => (
    <Modal 
      closeIcon 
      open={modal}
      onClose={keepPlaying} 
      trigger={
        <Link to="#" className="link" onClick={handleModal} >
          {!playing ? 'Want to play a game?' : 'Let\'s keep playing!'}
        </Link>
      } centered={false}>
      <Modal.Header>{!playing ? 'Lets play!' : 'So you\'re back for more...'}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {game === null ? <GameList /> : <CurrentGame /> }
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
