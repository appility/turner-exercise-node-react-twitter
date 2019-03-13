import React from 'react'
import Linkify from 'react-linkify'
import styles from './ListItem.module.css'

const ListItem = (props) => (
  <li className={styles.listItem}>
  	<Linkify>{props.item.text}</Linkify>
  </li>
)

export default ListItem
