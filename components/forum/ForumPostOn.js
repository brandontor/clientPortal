import { TextField } from '@mui/material'
import React from 'react'
import styles from './ForumPostOn.module.css'

function ForumPostOn() {

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p>Ontario - Skin - ForumPost</p>
        </div>
        <div className={styles.body}>
            <div className={styles.title}>
                <p>Hello World</p>
            </div>
            <div className={styles.question}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className={styles.answer}>
                <textarea placeholder='Comment'></textarea>
                <button>Submit</button>
            </div>
        </div>

    </div>
    )
}

export default ForumPostOn
