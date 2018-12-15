import React from 'react'
import Router from 'middle-router'

import Welcome from './pages/Welcome'
import Member from './pages/Member'
import Quiz from './pages/Quiz'

const app = 'family'
const familyrouter = Router()
  .use('/', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Welcome />
    })
  })
  .use('/quiz', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Quiz {...params} />
    })
  })
  .use('/year/:year', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Welcome year={params.year} />
    })
  })
  .use('/member/:member/year/:year', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Member familyMember={params.member} year={params.year} />
    })
  })

export default familyrouter
