import React from 'react'
import Router from 'middle-router'

import Welcome from './pages/Welcome'
import Member from './pages/Member'

const app = 'family'
const familyrouter = Router()
  .use('/', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Welcome />
    })
  })
  .use('/:member', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Member familyMember={params.member} />
    })
  })

export default familyrouter
