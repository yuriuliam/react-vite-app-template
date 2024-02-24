import React from 'react'

const composeChildren = (children: React.ReactNode) => {
  return React.Children.toArray(children)
}

export { composeChildren }
