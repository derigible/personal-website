import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Heading from '@instructure/ui-elements/lib/components/Heading'
import Link from '@instructure/ui-elements/lib/components/Link'
import Select from '@instructure/ui-forms/lib/components/Select'
import Text from '@instructure/ui-elements/lib/components/Text'
import Flex, {FlexItem} from '@instructure/ui-layout/lib/components/Flex'

import Avatar from '../../components/Avatar'
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

  handleYearChange (_, value) {
    if (window.location.pathname.includes('year')) {
      router.navigate(`${value.value}`)
    } else {
      router.navigate(`/family/year/${value.value}`)
    }
  }

  renderMembers () {
    const { year } = this.props
    return members[year].map((member) => {
      const navigate = () => { router.navigate(`/family/member/${member.id}/year/${year}`) }
      return (
        <FlexItem key={`${member.id}_avatar`} margin="medium large">
          <Link onClick={navigate}>
            <Avatar
              name={member.name}
              src={member.img}
            />
          </Link>
          <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
            <Text size="large">{member.name}</Text>
          </div>
        </FlexItem>
      )
    })
  }

  render () {
    return (
      <div>
        <div style={{margin: 'auto', textAlign: 'center', color: '#8e8ef7'}}>
          <Heading margin="medium none">The Phillips Family</Heading>
        </div>
        <Flex justifyItems="center" margin="small xx-large" wrapItems>
          {this.renderMembers()}
        </Flex>
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
        <Bio bioInfo={familyInfo[this.props.year]} />
      </div>
    )
  }
}
