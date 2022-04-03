import React from 'react'
import styles from './CommentCard.module.css'

function CommentCard() {
  return (
    <div className={styles.container}>
        <p>Name</p>
        <p>Comment</p>
        <p>Date Posted</p>
    </div>
  )
}

export default CommentCard