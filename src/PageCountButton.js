import React from 'react'

const PageCountButton = (props) => {
  return (
    <button onClick={props.getBooks}>Get Total Page Count</button>
  )
}

export default PageCountButton
