import React, { useState } from 'react'
import { withTheme } from 'styled-components'
import { Page, Options } from './Viewer.styles'

const Viewer = (props) => {
  const [actualPage, setPage] = useState(0)

  const nextPage = () => {
    if (actualPage !== props.totalPages) {
      let newPage = actualPage + 1
      setPage(newPage)
      props.loadImage(newPage)
    }
  }

  const prevPage = () => {
    if (actualPage !== 0) {
      let newPage = actualPage - 1
      setPage(newPage)
      props.loadImage(newPage)
    }
  }

  return (
    <>
      <Page src={props.image} />
      <Options>
        <button onClick={() => prevPage()}><i className='bx bxs-chevron-left' ></i></button>
        <p>{actualPage}/{props.totalPages}</p>
        <button onClick={() => nextPage()}><i className='bx bxs-chevron-right' ></i></button>
      </Options>
    </>
  )
}

export default withTheme(Viewer)
