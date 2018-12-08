import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Avatar from '@instructure/ui-elements/lib/components/Avatar'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import Link from '@instructure/ui-elements/lib/components/Link'
import Select from '@instructure/ui-forms/lib/components/Select'
import Text from '@instructure/ui-elements/lib/components/Text'
import Flex, {FlexItem} from '@instructure/ui-layout/lib/components/Flex'

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
        <FlexItem key={`${member.id}_avatar`}>
          <Link onClick={navigate}>
            <Avatar
              as="div"
              name={member.name}
              size="x-large"
              src={member.img}
            />
          </Link>
          <div>
            <Text>{member.name}</Text>
          </div>
        </FlexItem>
      )
    })
  }

  render () {
    return (
      <div>
        <div style={{margin: 'auto', textAlign: 'center'}}>
          <Heading>The Phillips Family</Heading>
        </div>
        <Flex justifyItems="space-between" margin="large xx-large">
          {this.renderMembers()}
        </Flex>
        <div>
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
