import React, {Component} from 'react'
import styles from './styles.css'

import Avatar from 'instructure-ui/lib/components/Avatar'
import Heading from 'instructure-ui/lib/components/Heading'
import Link from 'instructure-ui/lib/components/Link'
import Typography from 'instructure-ui/lib/components/Typography'

import members from '../../data/members'
import familyInfo from '../../data/familyInfo'

import {router} from '../../../configureRouter'

export default class Welcome extends Component {

  renderMembers () {
    return members.map((member) => {
      const navigate = router.navigate.bind(router, `/family/${member.id}`)
      return (
        <div key={`${member.id}_avatar`} className={styles.avatar}>
          <Link onClick={navigate}>
            <Avatar
              userName={member.name}
              size="auto"
              userImgUrl={member.img} />
          </Link>
          <div className={styles.nameplate}>
            <Typography size="x-small">{member.name}</Typography>
          </div>
        </div>
      )
    })
  }

  renderBio () {
    return familyInfo.map((section) => {
      return <p>{section.data}</p>
    })
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <Heading>The Phillips Family</Heading>
        </div>
        {this.renderMembers()}
        <div className={styles.bio}>
          <Typography lineHeight="double">
            {this.renderBio()}
          </Typography>
        </div>
      </div>
    )
  }
}
