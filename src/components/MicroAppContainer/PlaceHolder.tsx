import React from 'react'
import { Skeleton, Spin } from 'antd'
import { SkeletonProps } from 'antd/es/Skeleton'
import { LoadingOutlined } from '@ant-design/icons'

interface PlaceHolderProps extends SkeletonProps {
  rows?: number
  spin?: boolean
}

const PlaceHolder: React.FC<PlaceHolderProps> = (props) => {
  const { rows, spin, ...skeletonProps } = props
  const places = spin ? (
    <Spin
      tip="应用加载中..."
      spinning={true}
      indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
    />
  ) : (
    new Array(rows).fill(null).map((_, i) => {
      return <Skeleton key={i} {...skeletonProps} />
    })
  )

  return <div className="text-center p-4">{places}</div>
}

export default PlaceHolder

PlaceHolder.defaultProps = {
  rows: 1,
  spin: true
}
