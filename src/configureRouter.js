import React from 'react'
import Router from 'middle-router'

import NotFound from './errors/NotFound'

const configureRouter = () => {
  return Router()
    .lazy('/family', () => new Promise((resolve) => require.ensure(
      [], (require) => resolve(require('./family/router').default), 'family'
    )))
    .use('/*', ({ path, resolve, exiting }) => {
      console.log(path)
      resolve({view: <NotFound />, app: 'notFound'})
    })
}

export default configureRouter

export const router = configureRouter()
