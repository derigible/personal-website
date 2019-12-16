import PropTypes from 'prop-types'
import React, { Component } from 'react'
import themeable from '@instructure/ui-themeable'

import styles from './styles.css'
import theme from './theme'

class Avatar extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'large', 'x-large'])
  }

  static defaultProps = {
    size: 'large'
  }

  render () {
    let styleOverrides = {}
    if (this.props.size === 'small') {
      styleOverrides = {width: '15rem', height: '15rem'}
    }
    if (this.props.size === 'x-large') {
      styleOverrides =  {width: '40rem', height: '40rem', borderRadius: '20rem'}
    }
    return (
      <div className={styles.image} style={{backgroundImage:`url(${this.props.src})`, ...styleOverrides}}/>
    )
  }
}

export default themeable(theme, styles)(Avatar)
