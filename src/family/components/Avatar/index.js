import PropTypes from 'prop-types'
import React, { Component } from 'react'
import themeable from '@instructure/ui-themeable/lib/themeable'

import styles from './styles.css'
import theme from './theme'

class Avatar extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={styles.image} style={{backgroundImage:`url(${this.props.src})`}}/>
    )
  }
}

export default themeable(theme, styles)(Avatar)
