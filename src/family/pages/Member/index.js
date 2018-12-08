import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Avatar from '@instructure/ui-elements/lib/components/Avatar'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import Link from '@instructure/ui-elements/lib/components/Link'
import Select from '@instructure/ui-forms/lib/components/Select'

import Bio from '../../components/Bio'

import members from '../../data/members'

import {router} from '../../../configureRouter'

export default class Member extends Component {
  static propTypes = {
    familyMember: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  }

  handleYearChange (e) {
    if (window.location.pathname.includes('year')) {
      router.navigate(`${e.target.value}`)
    } else {
      router.navigate(`/family/member/${this.props.familyMember}/year/${e.target.value}`)
    }
  }

  render () {
    const { year, familyMember } = this.props
    const member = members[year].find((member) => member.id === familyMember)
    const navigate = () => { router.navigate(`/family/year/${year}`) }

    return (
      <div>
        <div>
          <Heading>{member.name}</Heading>
        </div>
        <div>
          <Link onClick={navigate}>
            <Avatar
              name={member.name}
              size="auto"
              src={member.img} />
          </Link>
        </div>
        <Select
          label="Year"
          value={this.props.year}
          onChange={this.handleYearChange}
        >
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </Select>
        <Bio bioInfo={member.bio} />
      </div>
    )
  }
}
