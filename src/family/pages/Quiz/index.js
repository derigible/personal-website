import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Alert from '@instructure/ui-alerts/lib/components/Alert'
import Button from '@instructure/ui-buttons/lib/components/Button'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import RadioInput from '@instructure/ui-forms/lib/components/RadioInput'
import RadioInputGroup from '@instructure/ui-forms/lib/components/RadioInputGroup'
import Text from '@instructure/ui-elements/lib/components/Text'

import Avatar from '../../components/Avatar'

import data from './data'

export default class Quiz extends Component {
  static propTypes = {
    page: PropTypes.string,
    showAnswer: PropTypes.string
  }

  static defaultProps = {
    page: '0'
  }

  constructor (props) {
    super(props)
    const p = parseInt(this.props.page, 10)
    this.state = {
      guesses: [],
      page: p,
      showAnswer: !!this.props.showAnswer,
      tempAnswer: ''
    }
  }

  selectChild = () => {
    this.setState({
      page: this.state.page + 1,
      guesses: this.state.guesses.concat([this.state.tempAnswer]),
      tempAnswer: ''
    })
  }

  setInputRef = (node) => { this.inputRef = node }

  makeSelection = (_, value) => {
    this.setState({tempAnswer: value})
  }

  renderQuiz () {
    const { page, showAnswer, tempAnswer } = this.state
    return (
      <div style={{textAlign: 'center', margin: 'auto'}}>
        <Avatar
          name="Who am I?"
          src={data[page].img}
        />
        <div style={{maxWidth: '22rem', textAlign: 'center', margin: 'auto'}}>
          <RadioInputGroup
            name="girlsquiz"
            description="Select the girl who matches the picture above."
            value={showAnswer ? data[page].answer : tempAnswer}
            readOnly={showAnswer}
            onChange={this.makeSelection}
          >
            <RadioInput label="Marley" value="marley" />
            <RadioInput label="Whitley" value="whitley" />
            <RadioInput label="Brinley" value="brinley" />
          </RadioInputGroup>
        </div>
        <Button variant="primary" onClick={this.selectChild} margin="large" disabled={tempAnswer === ''}>Next</Button>
      </div>
    )
  }

  renderResult (i) {
    const answer = data[i]
    const guess = this.state.guesses[i]

    return (
      <div key={`${answer.answer}${i}`} style={{margin: 'auto', textAlign: 'center', maxWidth: '60rem'}}>
        <Avatar
          src={answer.img}
          name=""
        />
        {guess === answer.answer
          ? <Alert
              variant="success"
              margin="small"
            >
            Correct! You Answered: {answer.answer}
            </Alert>
          : <Alert
              variant="error"
              margin="small"
            >
            Wrong! You Answered: {<Text transform="capitalize">{guess}</Text>}.
            This is {<Text transform="capitalize">{answer.answer}</Text>}
            </Alert>
        }
      </div>
    )
  }

  renderCongratulations (correctCount) {
    let color
    let message
    let level
    if (correctCount === data.length) {
      color = "green"
      level = "Uncanny Oracle"
      message = "You see things that no one else really should be able to see. You got all of them right and that is incredible!"
    } else if (correctCount > 10) {
      color = "blue"
      level = "Babysitter"
      message = "You've seen them enough that you must baby sit them to be able to get so many correct. Congrats!"
    } else if (correctCount < 10 && correctCount > 5) {
      color = "yellow"
      level = "Regular Human"
      message = "Not too impressive, but not sad either. Most attain these heights."
    } else {
      color = "red"
      level = "Long Lost Uncle"
      message = "You're name is probably John and should come see your neices more."
    }

    return <div style={{margin: 'auto', marginBottom: '2rem', textAlign: 'center', color}}>
      <Heading as="h2">Level Achieved:{level}</Heading>
      <Heading as="h3">Ratio Correct: {correctCount}/{data.length}</Heading>
      {message}
    </div>
  }

  renderResults () {
    const results = []
    let correctCount = 0
    for (let i = 0; i < this.state.guesses.length; i++) {
      results.push(this.renderResult(i))
      if (this.state.guesses[i] === data[i].answer) {
        correctCount = correctCount + 1
      }
    }
    return (
      <div style={{textAlign: 'center', margin: 'auto'}}>
        {this.renderCongratulations(correctCount)}
        {results}
      </div>
    )
  }

  render () {
    const { guesses } = this.state
    return (
      <div>
        <div style={{margin: 'auto', textAlign: 'center', color: '#8e8ef7'}}>
          <Heading margin="medium none">Guess That Baby!</Heading>
        </div>
        {guesses.length === data.length ? this.renderResults() : this.renderQuiz()}
      </div>
    )
  }
}