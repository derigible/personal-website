import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

import styles from './styles.css'

export default class App extends Component {
  static propTypes = {
    app: PropTypes.string,
    children: PropTypes.object
  }

  render () {
    const contentClassList = classNames({
      [styles.content]: true
    })

    return (
      <div className={contentClassList}>
        <div id="content" role="main" className={styles.main}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
