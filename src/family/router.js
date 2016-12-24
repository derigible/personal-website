import React from 'react'
import Router from 'middle-router'

import Welcome from './pages/Welcome'

const app = 'family'
const familyrouter = Router()
  .use('/', ({path, resolve, exiting, params, location}) => {
    resolve({
      app,
      view: <Welcome />
    })
  })

export default familyrouter
