import React, {Component, PropTypes} from 'react'
import styles from './styles.css'

import Avatar from 'instructure-ui/lib/components/Avatar'
import Heading from 'instructure-ui/lib/components/Heading'
import Typography from 'instructure-ui/lib/components/Typography'

import members from '../../data/members'

export default class Member extends Component {
  static propTypes = {
    familyMember: PropTypes.string // TODO: this looks up info on the family member
  }

  render () {
    const member = members.find((member) => member.id === this.props.familyMember)

    return (
      <div className={styles.wrapper}>
        <div className={styles[`banner${member.id}`]}>
          <Heading>{member.name}</Heading>
        </div>
        <div className={styles.avatar}>
          <Avatar
            userName={member.name}
            size="auto"
            userImgUrl={member.img} />
        </div>
        <Typography>
          {member.bio}
        </Typography>
      </div>
    )
  }
}
