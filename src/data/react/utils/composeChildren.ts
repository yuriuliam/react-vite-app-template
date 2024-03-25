import React from 'react'

const composeChildren = (childrenBase: React.ReactNode) => {
  return React.Children.toArray(childrenBase)
}

export { composeChildren }
