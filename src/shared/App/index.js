import PropTypes from 'prop-types'
import React, {Component} from 'react'

import View from '@instructure/ui-layout/lib/components/View'

export default class App extends Component {
  static propTypes = {
    app: PropTypes.string,
    children: PropTypes.object
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
