import React from 'react'
import { overrideForwardRef } from '../OverridableComponent'
import styled from '@emotion/styled'

export interface IListProps {
  children?: React.ReactNode
  className?: string
}

const StyledList = styled('ul')({
  position: 'relative',
  margin: 0,
  padding: 0,
  listStyle: 'none'
})

export const List = overrideForwardRef<IListProps, 'ul'>(function List(
  { children, Component, ...props },
  ref
) {
  return (
    <StyledList as={Component} ref={ref} {...props}>
      {children}
    </StyledList>
  )
})

List.defaultProps = {
  Component: 'ul'
}
