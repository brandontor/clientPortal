import React from 'react'
import styles from './Layout.module.css'
import User from './User'

function Layout() {
  return (
    <div className={styles.container}>
      <User></User>
    </div>
  )
}

export default Layout