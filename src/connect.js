import React from 'react'
import { Provider } from 'react-redux'

export default function connect (Child) {
  return function WebdesignioConnection (props) {
    const { store } = props
    return React.createElement(Provider, { store },
      React.createElement(Child, props)
    )
  }
}
