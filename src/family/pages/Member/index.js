import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Heading from '@instructure/ui-elements/lib/components/Heading'
import Link from '@instructure/ui-elements/lib/components/Link'
import Select from '@instructure/ui-forms/lib/components/Select'

import Avatar from '../../components/Avatar'
import Bio from '../../components/Bio'

import members from '../../data/members'

import {router} from '../../../configureRouter'

export default class Member extends Component {
  static propTypes = {
    familyMember: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }

  static defaultProps = {
    color: '#8e8ef7'
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
        <div style={{textAlign: 'center'}}>
          <div style={{color: member.color}}>
            <Heading margin="medium none">{member.name}</Heading>
          </div>
          <div>
            <Link onClick={navigate}>
              <Avatar
                name={member.name}
                src={member.img} />
            </Link>
          </div>
        </div>
        <div style={{maxWidth: '15rem', margin: 'auto'}}>
          <Select
            label="Year"
            value={this.props.year}
            onChange={this.handleYearChange}
          >
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </Select>
        </div>
        <Bio bioInfo={member.bio} />
      </div>
    )
  }
}
