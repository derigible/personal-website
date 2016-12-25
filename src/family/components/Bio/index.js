import React, {Component, PropTypes} from 'react'
import styles from './styles.css'

import Typography from 'instructure-ui/lib/components/Typography'

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
      <div className={styles.bio}>
        <Typography lineHeight="double">
          {this.renderBio()}
        </Typography>
      </div>
    )
  }
}
