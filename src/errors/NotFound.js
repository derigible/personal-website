import React, {Component, PropTypes} from 'react'
import styles from './NotFound.css'

export default class NotFound extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          404
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.title}>
            Page Not Found
          </div>
          <div className={styles.subtitle}>
            We cannot find the page you requested. Sorry...
          </div>
        </div>
      </div>
    )
  }
}
