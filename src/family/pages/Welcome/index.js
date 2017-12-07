import React, {Component, PropTypes} from 'react'
import styles from './styles.css'

import Avatar from 'instructure-ui/lib/components/Avatar'
import Heading from 'instructure-ui/lib/components/Heading'
import Link from 'instructure-ui/lib/components/Link'
import Select from 'instructure-ui/lib/components/Select'
import Typography from 'instructure-ui/lib/components/Typography'

import Bio from '../../components/Bio'

import members from '../../data/members'
import familyInfo from '../../data/familyInfo'

import {router} from '../../../configureRouter'

export default class Welcome extends Component {
  static propTypes = {
    year: PropTypes.string
  }

  static defaultProps = {
    year: '2017'
  }

  handleYearChange (e) {
    if (window.location.pathname.includes('year')) {
      router.navigate(`${e.target.value}`)
    } else {
      router.navigate(`/family/year/${e.target.value}`)
    }
  }

  renderMembers () {
    const { year } = this.props
    return members[year].map((member) => {
      const navigate = () => { router.navigate(`/family/member/${member.id}/year/${year}`) }
      return (
        <div key={`${member.id}_avatar`} className={styles.avatar}>
          <Link onClick={navigate}>
            <Avatar
              userName={member.name}
              size="auto"
              userImgUrl={member.img}
            />
          </Link>
          <div className={styles.nameplate}>
            <Typography size="x-small">{member.name}</Typography>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <Heading>The Phillips Family</Heading>
        </div>
        {this.renderMembers()}
        <Select
          label="Year"
          value={this.props.year}
          onChange={this.handleYearChange}
        >
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </Select>
        <Bio bioInfo={familyInfo} />
      </div>
    )
  }
}
