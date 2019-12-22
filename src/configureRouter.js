import Router from 'middle-router'

import NotFound from './errors/NotFound'

const configureRouter = () => {
  return Router()
    .lazy('/family', () => new Promise((resolve) => require.ensure(
      [], (require) => resolve(require('./family/router').default), 'family'
    )))
    .lazy('/', () => new Promise((resolve) => require.ensure(
      [], (require) => resolve(require('./family/router').default), 'family'
    )))
}

export default configureRouter

export const router = configureRouter()
