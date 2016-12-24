import React, {Component, PropTypes} from 'react'
import styles from './styles.css'

import Avatar from 'instructure-ui/lib/components/Avatar'
import Heading from 'instructure-ui/lib/components/Heading'

export default class Member extends Component {
  static propTypes = {
    familyMember: PropTypes.string // TODO: this looks up info on the family member
  }

  getMemberInfo()

  render () {
    return (
      <div className={styles.wrapper}>
        <Heading color="brand">Whitley Marie</Heading>
        <span className={styles.avatar}>
          <Avatar
            userName="Whitley Marie"
            size="auto"
            userImgUrl={'http://d33tz7arw1d3eu.cloudfront.net/2815515/05e317c770335014f935a65db6e4fb7b-large.jpg'} />
        </span>
      </div>
    )
  }
}
