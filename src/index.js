import React from 'react'
import ReactDOM from 'react-dom'

import App from './shared/App'

import configureRouter from './configureRouter'

const router = configureRouter()

router.on('route', async (args, routing) => { // eslint-disable-line arrow-parens
  try {
    // TODO: conditionalize the app loading based on user permissions
    const {view, app = 'family'} = await routing

    ReactDOM.render(
      <App app={app}>
        {view}
      </App>,
      document.getElementById('app')
    )
  } catch (ex) {
    console.error(ex) // eslint-disable-line no-console
  }
}).start()
