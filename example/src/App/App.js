import React from 'react'
import {hot} from 'react-hot-loader'
import styles from './app.module.css'
import SignIn from './SignIn'

function App () {
  return (
    <div className={styles['css-mod-test']}>
      <SignIn />
    </div>
  )
}

export default hot(module)(App)
