import React from 'react'
import {hot} from 'react-hot-loader/root'
import styles from './app.module.css'
import SignIn from './SignIn'
import Counter from './Counter'

function App() {
  return (
    <div className={styles['css-mod-test']}>
      <Counter />
      <SignIn />
    </div>
  )
}

export default hot(App)
