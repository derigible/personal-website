import React, {Component} from 'react'
import styles from './styles.css'

import Avatar from 'instructure-ui/lib/components/Avatar'
import Link from 'instructure-ui/lib/components/Link'

export default class Welcome extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <span className={styles.avatar}>
          <Avatar
            userName="Marc Alan"
            size="auto"
            userImgUrl={'http://d33tz7arw1d3eu.cloudfront.net/2815515/9c1364bc1529b364a3c4973e75632ff7-large.jpg'} />
        </span>
        <span className={styles.avatar}>
          <Avatar
            userName="Andrea Carter"
            size="auto"
            userImgUrl={'http://d33tz7arw1d3eu.cloudfront.net/2815515/f15150c182c7964863a477fa74ae7b2d-large.jpg'} />
        </span>
        <span className={styles.avatar}>
          <Link href="/family/Whitley">
            <Avatar
              userName="Whitley Marie"
              size="auto"
              userImgUrl={'http://d33tz7arw1d3eu.cloudfront.net/2815515/05e317c770335014f935a65db6e4fb7b-large.jpg'} />
          </Link>
        </span>
        <span className={styles.avatar}>
          <Avatar
            userName="Marley Jean"
            size="auto"
            userImgUrl={'http://d33tz7arw1d3eu.cloudfront.net/2815515/3996d6d4f45c770938f3dacb15336193-large.jpg'} />
        </span>
      </div>
    )
  }
}
