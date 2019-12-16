import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {View} from '@instructure/ui-layout'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render () {
    return (
      <div id="content" role="main">
        <View as="div" margin="small">
          {this.props.children}
        </View>
      </div>
    )
  }
}
