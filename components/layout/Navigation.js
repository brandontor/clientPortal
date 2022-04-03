import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>Hello User</p>
            </div>
            <div className={styles.right}>
                <p>Other box</p>
            </div>
        </div>
    )
}

export default Navigation