import PropTypes from 'prop-types'
import React, {Component} from 'react'

import {Alert} from '@instructure/ui-alerts'
import {Heading} from '@instructure/ui-elements'
import {Link} from '@instructure/ui-elements'
import {Select} from '@instructure/ui-forms'
import {Text} from '@instructure/ui-elements'
import {Flex} from '@instructure/ui-layout'

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
    year: '2018'
  }

  handleYearChange (_, value) {
    if (window.location.pathname.includes('year')) {
      router.navigate(`${value.value}`)
    } else {
      router.navigate(`/family/year/${value.value}`)
    }
  }

  takeQuiz () {
    router.navigate('/family/quiz')
  }

  renderMembers () {
    const { year } = this.props
    return members[year].map((member) => {
      const navigate = () => { router.navigate(`/family/member/${member.id}/year/${year}`) }
      return (
        <Flex.Item key={`${member.id}_avatar`} margin="medium large">
          <Link onClick={navigate}>
            <Avatar
              name={member.name}
              src={member.img}
              size={(members[year].length < 5 || window.matchMedia("(max-width: 600px)").matches) ? "large" : "small"}
            />
          </Link>
          <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
            <Text size="large">{member.name}</Text>
          </div>
        </Flex.Item>
      )
    })
  }

  render () {
    return (
      <div>
        <div style={{margin: 'auto', textAlign: 'center', color: '#8e8ef7', maxWidth: '25rem'}}>
          <Heading margin="medium none">The Phillips Family</Heading>
          <Alert
            variant="info"
          >
            <Link onClick={this.takeQuiz}>
              Click here to play the baby guessing game!
            </Link>
          </Alert>
        </div>
        <Flex justifyItems="center" margin="small xx-large" wrapItems>
          {this.renderMembers()}
        </Flex>
        <div style={{margin: 'auto', textAlign: 'center', marginBottom: '1rem'}}>
         Click the portraits of a person to read more!
        </div>
        <div style={{maxWidth: '15rem', margin: 'auto'}}>
          <Select
            label="Year"
            value={this.props.year}
            onChange={this.handleYearChange}
            margin="medium none none small"
          >
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </Select>
        </div>
        <Bio bioInfo={familyInfo[this.props.year]} />
      </div>
    )
  }
}
