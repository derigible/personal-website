import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Text from '@instructure/ui-elements/lib/components/Text'
import Responsive from '@instructure/ui-layout/lib/components/Responsive'
import View from '@instructure/ui-layout/lib/components/View'

export default class Bio extends Component {
  static propTypes = {
    bioInfo: PropTypes.array
  }

  renderBio () {
    // TODO: this should have logic to render different section types
    return this.props.bioInfo.map((section, i) => {
      return <p key={`${section.data.substring(1, 6)}${i}`}>{section.data}</p>
    })
  }

  render () {
    return (
      <Responsive
        match="media"
        query={{
          small: { maxWidth: 600 },
          large: { minWidth: 800}
        }}
      >
      {(_, matches) => {
        if (matches.includes('large')) {
          return (
            <View
              as="div"
              maxWidth="80rem"
              shadow="topmost"
              margin="small auto"
              padding="xx-small medium small medium"
            >
              <Text lineHeight="double">
                {this.renderBio()}
              </Text>
            </View>
          )
        } else {
          return (
            <div>
              <Text lineHeight="double">
                {this.renderBio()}
              </Text>
            </div>
          )
        }
      }}
    </Responsive>
    )
  }
}
