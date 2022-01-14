import React from 'react'
import styles from './app.module.css'
import SignIn from './SignIn'
import Counter from './Counter'

function App () {
  return (
    <div className={styles['css-mod-test']}>
      <Counter />
      <SignIn />
    </div>
  )
}

export default App
