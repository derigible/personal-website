import React, {Component, PropTypes} from 'react'
import styles from './styles.css'

export default class Welcome extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        Hello world
      </div>
    )
  }
}
