import React from 'react'
import ReactDOM from 'react-dom'
import { canvas } from '@instructure/ui-themes'

canvas.use()

import App from './shared/App'

import {router} from './configureRouter'

router.on('route', async (args, routing) => { // eslint-disable-line arrow-parens
  try {
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
