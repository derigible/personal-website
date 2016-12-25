import React, {Component, PropTypes} from 'react'
import styles from './styles.css'

import Avatar from 'instructure-ui/lib/components/Avatar'
import Heading from 'instructure-ui/lib/components/Heading'
import Link from 'instructure-ui/lib/components/Link'

import Bio from '../../components/Bio'

import members from '../../data/members'

import {router} from '../../../configureRouter'

export default class Member extends Component {
  static propTypes = {
    familyMember: PropTypes.string
  }

  render () {
    const member = members.find((member) => member.id === this.props.familyMember)
    const navigate = router.navigate.bind(router, '/family')

    return (
      <div className={styles.wrapper}>
        <div className={styles[`banner${member.id}`]}>
          <Heading>{member.name}</Heading>
        </div>
        <div className={styles.avatar}>
          <Link onClick={navigate}>
            <Avatar
              userName={member.name}
              size="auto"
              userImgUrl={member.img} />
          </Link>
        </div>
        <Bio bioInfo={member.bio} />
      </div>
    )
  }
}
