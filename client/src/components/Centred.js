import React from 'react'
import styles from './Centred.module.css'; 

class Centred extends React.Component {
  render() {
    return (
      <div class={styles.centred}>{this.props.children}</div>
    )
  }
}

export default Centred