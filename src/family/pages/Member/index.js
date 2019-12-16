import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {Heading, Link} from '@instructure/ui-elements'
import {Select} from '@instructure/ui-forms'

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

  handleYearChange (_, value) {
    if (window.location.pathname.includes('year')) {
      router.navigate(value.value)
    } else {
      router.navigate(`/family/member/${this.props.familyMember}/year/${value.value}`)
    }
  }

  renderYearOptions () {
    const { familyMember } = this.props
    const years = Object.keys(members).reduce(
      (memo, year) => {
        if (members[year].find((member) => member.id === familyMember)) {
          return memo.concat([year])
        }
        return memo
      },
      []
    )
    return years.map(year => <option value={year} key={year}>{year}</option>)
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
            {this.renderYearOptions()}
          </Select>
        </div>
        <Bio bioInfo={member.bio} />
      </div>
    )
  }
}
