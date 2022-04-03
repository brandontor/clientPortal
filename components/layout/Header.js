import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className='w-full h-7.5% flex justify-center items-center relative'>
        <h1 className={styles.header}>LIBTAYO ADVISOR NETWORK</h1>
        <input className={styles.search} placeholder="Search"/>
    </div>
  )
}

export default Header