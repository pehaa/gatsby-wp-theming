import React from 'react'

const Description = ({ description }) => {
  return <p dangerouslySetInnerHTML={{ __html: description }} />
}

export default Description
