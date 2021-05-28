import React, { useEffect } from 'react'
import { Skeleton } from 'antd'
import { SkeletonProps } from 'antd/es/Skeleton'
import { start } from 'qiankun'
import PlaceHolder from './PlaceHolder'

export interface MicroAppContainerProps {
  mountElementId: string
  loading?: boolean
}

const MicroAppContainer: React.FC<MicroAppContainerProps> = (props) => {
  const { loading, mountElementId } = props
  const skeletonProps = {
    avatar: true,
    loading: true,
    round: true,
    active: true,
    title: true,
    paragraph: { rows: 3 }
  }
  useEffect(() => {
    console.log('1111111111')
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
  }, [])
  return (
    <>
      {loading && <PlaceHolder rows={3} {...skeletonProps} />}
      <div id={mountElementId}></div>
    </>
  )
}

export default MicroAppContainer

MicroAppContainer.defaultProps = {
  loading: true
}
