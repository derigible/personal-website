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
    year: '2020'
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

  renderMember (member, year, margin="medium large") {
    const navigate = () => { router.navigate(`/family/member/${member.id}/year/${year}`) }
    return (
      <Flex.Item key={`${member.id}_avatar`} margin={margin}>
        <Link onClick={navigate}>
          <Avatar
            name={member.name}
            src={member.img}
            hoverSrc={member.hoverImg}
            size={(members[year].length < 5 || window.matchMedia("(max-width: 600px)").matches) ? "large" : "small"}
          />
        </Link>
        <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
          <Text size="large">{member.name}</Text>
        </div>
      </Flex.Item>
    )
  }

  renderMembers () {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
    const { year } = this.props
    if(members[year].length > 5) {
      const toRender = [(
        <div key="firstRow">
          <Flex justifyItems="center" margin={isMobile ? "" : "xx-small xx-large"} wrapItems  direction="row">
            {members[year].slice(0,2).map((member) => {
              return (this.renderMember(member, year, "small large"))
            })}
          </Flex>
        </div>
      )]
      toRender.push(
        <div key="secondRow">
          <Flex justifyItems="center" margin={isMobile ? "" : "xx-small xx-large"} wrapItems direction="row">
            {
              members[year].slice(2, members[year].length).map((member) => {
                return (this.renderMember(member, year, "small large"))
              })
            }
          </Flex>
        </div>
      )

      return <Flex direction="column">
        {toRender}
      </Flex>
    }
    return <Flex justifyItems="center" margin={isMobile ? "" : "small xx-large"} wrapItems>
      {members[year].map((member) => {
        return (this.renderMember(member, year))
      })}
    </Flex>
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
              Click here to play the baby guessing game! Now includes Hadley!
            </Link>
          </Alert>
        </div>
        {this.renderMembers()}
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
            <option value="2020">2020</option>
            <option value="2019">2019</option>
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
