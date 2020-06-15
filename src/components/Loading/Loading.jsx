import React from 'react'
import { withTheme } from 'styled-components'
import { Spinner } from './Loading.styles'

const Loading = (props) => (
  <Spinner className="spinner" viewBox="0 0 50 50">
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
  </Spinner>
)

export default withTheme(Loading)
