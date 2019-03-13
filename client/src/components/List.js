import React from 'react'
import ListItem from './ListItem'
import styles from './List.module.css'

const List = (props) => (
  <ul className={styles.list}>
    {props.items.map((item, index)  => (  
      <ListItem item={item} index={index} key={index} linkify={props.linkify} />
    ))}
  </ul>
);

export default List
