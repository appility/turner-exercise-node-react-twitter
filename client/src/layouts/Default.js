import React from 'react'
import styles from './Default.module.css'

export default function DefaultLayout(props) {
  return (
    <div class={styles.wrapper}>
      {props.children}
    </div>
  )
}
