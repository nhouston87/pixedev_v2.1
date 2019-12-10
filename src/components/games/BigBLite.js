import React, {useState, useEffect} from 'react'
import {Icon, Popup} from 'semantic-ui-react'
import styles from '../../resources/styles/games/BigB.module.scss'


import {wave as ch1w, text as ch1t, enemy as ch1e} from './helpers/bigb/chp1'
// import {wave as ch2w, text as ch2t, enemy as ch2e} from './helpers/bigb/chp2'
// import {wave as ch3w, text as ch3t, enemy as ch3e} from './helpers/bigb/chp3'
// import {wave as ch4w, text as ch4t, enemy as ch4e} from './helpers/bigb/chp4'
// import {wave as ch5w, text as ch5t, enemy as ch5e} from './helpers/bigb/chp5'

const BigBLite = ({player, changePlayer}) => {
  // Game control state
  const [playing, setPlaying] = useState(false)
  const [turn, setTurn] = useState(true)
  const [attacking, setAttacking] = useState(false)
  const [thinking, setThinking] = useState(false)
  const [sub, setSub] = useState(0)
  const [wave, setWave] = useState(1)
  const [text, setText] = useState('')
  const [textCount, setTextCount] = useState(0)
  const [logs, setLogs] = useState([])
  // Sub Chapter data state
  const [subText, setSubText] = useState({})
  const [subEnemy, setSubEnemy] = useState({})
  const [totalWave, setTotalWave] = useState(0)

  const nextText = (i) => {
    // Switch statement to display the correct text based on the value passed in
    let newText = ''
    switch (i) {
      case 1:
        newText = subText.i
        break;
      case 2:
        newText = subText.a
        break;
      case 3:
        newText = subText.ms
        break;
      case 4:
        newText = subText.ma
        break;
      case 5:
        newText = subText.md
        break;
      case 6:
        newText = subText.ms
        break;
      default:
        break;
    }
    return newText
  }

  const decideTurn = () => {
    // Randomly pick a number and return true for human or false for computer
    const decide = Math.floor(Math.random() * 100 )
    if(decide <= 50 ) {
      setTurn(true)
    } else {
      setTurn(false)
    }
  }

  const loadSub = () => {
    // Set subtext, subEnemy, totalWave based on chapter
    const ch = player.chap
    switch (ch) {
      case 1:
        setSubText(ch1t[sub])
        console.log(subText)
        setSubEnemy(ch1e[sub])
        console.log(subEnemy)
        setTotalWave(ch1w[sub])
        console.log(totalWave)
        break;
      default:
        break;
    }
    // Call decideTurn
    decideTurn()
    // Call nextText and return text
    const counter = textCount + 1
    setTextCount(counter)
    const newText = nextText(1)
    setText(newText)
    console.log(text)
  }

  // const battle = () => {
    
  // }

  useEffect(() => {
    if(!turn) {
      setThinking(true);
      setTimeout(() => {
        // Computers turn to attack
      }, 4000)
    }
  }, [turn])

  const action = () => {
    // Determine if the action was next or attack based on attacking state
    if(!attacking) {
      const counter = textCount + 1
      const newText = nextText(counter)
      if(counter === 3) setAttacking(true)
      setText(newText)
      return
    }
    // If next call nextText
    // Else if attack call battle
    return
  }

  const startGame = () => {
    // Set Playing to true
    setPlaying(true)
    // Set Attacking to false
    setAttacking(false)
    console.log(`Attacking: ${attacking}`)
    // Set Sub to 0
    setSub(0)
    console.log(sub)
    // Set wave to 1
    setWave(1)
    console.log(wave)
    // Call load Sub
    loadSub()
  }

  // Action Button Component
  const ActionBtn = () => (
    <button className={styles.btn} onClick={action} >{!attacking ? 'Next' : 'Attack'}</button>
  )
  // Start Game Button Component
  const StartBtn = () => (
    <button className={styles.btn} onClick={startGame} >Start Game</button>
  )
  // Game Enemy Display Component
  const EnemyDisp = () => (
    <div className={styles.row}>
      <div className={styles.column}>
        <h4>{subEnemy.name}</h4>
        <p>Health: {subEnemy.h}</p>
        <p>Attack: {subEnemy.a}</p>
        <p>Defense: {subEnemy.d}</p>
      </div>
      <div>
        <h4>Combat Log</h4>
        {logs.map(log => <p key={log.key} >{log.msg}</p>)}
      </div>
    </div>
  )
  // Game Text Display Component
  const GameText = () => (
    <div>
      <p>{text}</p>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.row}>
          <h4>Character&nbsp;</h4>
          <div className={styles.stats} >
            Lvl: {player.lvl}
          </div>
          <div className={styles.stats} >
            Exp: {player.exp}
          </div>
          <div className={styles.stats} >
            <Popup content='health' trigger={<div><Icon name='heart' />{player.h}</div>} />
          </div>
          <div className={styles.stats} >
            <Popup content='stamina' trigger={<div><Icon name='lightning' />{player.s}</div>} />
          </div>
          <div className={styles.stats} >
            <Popup content='attack' trigger={<div><Icon name='crosshairs' />{player.atk}</div>} />
          </div>
          <div className={styles.stats} >
            <Popup content='defense' trigger={<div><Icon name='shield alternate' />{player.def}</div>} />
          </div>
          <div className={styles.stats} >
            <Popup content='weapon' trigger={<div><Icon name='legal' />{player.w}</div>} />
          </div>
        </div>
        <div className={styles.row} >
          <div className={styles.gameplay}>
            { !playing ? null : <GameText /> }
            { !attacking ? null : <EnemyDisp /> }
            { !playing ? <StartBtn /> : <ActionBtn /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigBLite
