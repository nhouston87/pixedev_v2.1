import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
import styles from '../resources/styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.overlay} >
        <div className={styles.content}>
          <h1>Pixedev | Web Design And Development</h1>
          <h3>Coding the future today</h3>
          <Link to='/story' className={styles.btnCta}>Let's Get Started <Icon name='hand point right' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
