import React from 'react'
import List from './List'
import styles from './Tweets.module.css'

export default function Tweets(props) {
  return (
  	<div class={styles.columns}>
  		<List  {...props} linkify={true} />
  	</div>
  )
}


