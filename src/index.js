import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './redux/store'

import LuggageTracker from './container/LuggageTracker'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <LuggageTracker />
  </Provider>,
  document.getElementById('root')
)
