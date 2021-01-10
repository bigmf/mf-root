import React from 'react'
import { Skeleton } from 'antd'
import { SkeletonProps } from 'antd/es/Skeleton'
import PlaceHolder from './PlaceHolder'

export interface MicroAppContainerProps {
  loading?: boolean
}

const MicroAppContainer: React.FC<MicroAppContainerProps> = (props) => {
  const { loading } = props
  const skeletonProps = {
    avatar: true,
    loading: true,
    round: true,
    active: true,
    title: true,
    paragraph: { rows: 3 }
  }
  return (
    <>
      {loading && <PlaceHolder rows={3} {...skeletonProps} />}
      <div id="microapp-container"></div>
    </>
  )
}

export default MicroAppContainer

MicroAppContainer.defaultProps = {
  loading: true
}
