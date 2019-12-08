import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import {Image, Transition, Table, Progress } from 'semantic-ui-react'
import profile from '../resources/img/profile_pic.jpg'
import styles from '../resources/styles/Story.module.scss'

const Story = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return function cleanup() {
      setVisible(false);
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.top} >
        <h1 className={styles.h1} >A little bit about me</h1>
        <h4 className={styles.h4}>I'm a highly dedocated and very passionate full stack web developer with years of experince!</h4>
      </div>
      <div className={styles.middle} >
        <div className={styles.profile} >
          <Transition visible={visible} animation='fly left' duration={2000} >
            <Image  src={profile} size='huge' circular />
          </Transition>
        </div>
        <div className={styles.bio} >
          <p className={styles.bioHeader} >Hi my name is Nick!</p>
          <p className={styles.bioText}>This is my story...</p>
          <p className={styles.bioText} >I started my software development journey in 2014 when my son was born. I attended ITT Tech where I was introduced to and taught Object Oriented Programing concepts and Software Development methodologies. After graduating from ITT I immersed myself in web development languages and frameworks.</p>
          <p className={styles.bioText} >My skill set has grown tremendously since I first started. From HTML to PHP I have had a hunger to learn as many languages as I possibly can, always trying to find the best technologies available.</p>
          <p className={styles.bioText} >This web development company, pixeDEV, encompases everything I have learned so far and continue to learn. I know that with the right technologies I can build a beautiful, fast, and highly efficient web application for you.</p>
          <p className={styles.bioText} >I primarily build web applications using a 100% javascript stack, in short the MERN stack. MERN stands for MongoDB, Express.js, React.js, and Node.js. Not sure what all of that translates to? Let me show you what the MERN stack can do!</p>
        </div>
      </div>
      <div className={styles.bottom} >
        <div className={styles.spacer} ></div>
        <div className={styles.skills} >
          <h1 className={styles.h1} >Current Skill Progress</h1>
          <table className='ui celled collapsing very basic table inverted'>
            <tbody>
              <tr>
                <td>
                  React
                </td>
                <td className={styles.progress} >
                  <Progress percent={58} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  Redux
                </td>
                <td className={styles.progress} >
                  <Progress percent={34} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  Node
                </td>
                <td className={styles.progress} >
                  <Progress percent={45} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  Express
                </td>
                <td className={styles.progress} >
                  <Progress percent={45} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  MongoDB
                </td>
                <td className={styles.progress} >
                  <Progress percent={40} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  Git
                </td>
                <td className={styles.progress} >
                  <Progress percent={65} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  HTML5
                </td>
                <td className={styles.progress} >
                  <Progress percent={78} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  CSS3
                </td>
                <td className={styles.progress} >
                  <Progress percent={68} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  UI Design
                </td>
                <td className={styles.progress} >
                  <Progress percent={41} indicating />
                </td>
              </tr>
              <tr>
                <td>
                  UX Development
                </td>
                <td className={styles.progress} >
                  <Progress percent={58} indicating />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Story
