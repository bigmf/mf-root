import React from 'react'

export interface MicroAppContainerProps {
  loading?: boolean
}

const MicroAppContainer: React.FC<MicroAppContainerProps> = (props) => {
  const { loading } = props
  return (
    <>
      {loading && <div>Loading...</div>}
      <div id="microapp-container"></div>
    </>
  )
}

export default MicroAppContainer

MicroAppContainer.defaultProps = {
  loading: true
}
