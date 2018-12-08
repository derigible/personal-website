import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Text from '@instructure/ui-elements/lib/components/Text'

export default class Bio extends Component {
  static propTypes = {
    bioInfo: PropTypes.array
  }

  renderBio () {
    // TODO: this should have logic to render different section types
    return this.props.bioInfo.map((section) => {
      return <p key={section.data.substring(1, 6)}>{section.data}</p>
    })
  }

  render () {
    return (
      <div>
        <Text lineHeight="double">
          {this.renderBio()}
        </Text>
      </div>
    )
  }
}
