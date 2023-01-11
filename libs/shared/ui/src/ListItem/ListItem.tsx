import React from 'react'
import { overrideForwardRef } from '../OverridableComponent'
import styled from '@emotion/styled'

export interface IListItemProps {
  children?: React.ReactNode
  className?: string
}

const StyledListItem = styled('li')({
  position: 'relative'
})

const ListItemContent = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  textAlign: 'left',
  textDecoration: 'none',
  boxSizing: 'border-box'
})

export const ListItem = overrideForwardRef<IListItemProps, 'li'>(
  function ListItem({ children, Component, ...props }, ref) {
    return (
      <StyledListItem {...props} as={Component} ref={ref}>
        <ListItemContent>{children}</ListItemContent>
      </StyledListItem>
    )
  }
)

ListItem.defaultProps = {
  Component: 'li'
}
