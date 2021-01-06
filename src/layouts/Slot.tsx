import React, { PropsWithChildren } from 'react'

interface SlotProps {
  name: string
}

export interface WithSlot {
  Slot: React.ElementType
}

const Slot: React.FC<PropsWithChildren<SlotProps>> = (props) => {
  return <>{props.children}</>
}

export function getSlots<T>(props: PropsWithChildren<T>) {
  const { children } = props

  if (children) {
    const slots: Record<string, React.ReactNode> = {}
    React.Children.forEach(children, (child) => {
      if (
        React.isValidElement(child) &&
        typeof child.type !== 'string' &&
        child.type.name === 'Slot'
      ) {
        slots[child.props.name] = child.props.children
      }
    })
    return slots
  } else {
    return props
  }
}

export default Slot
