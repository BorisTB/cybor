import React from 'react'
import styled from '@emotion/styled'

export interface IListItemContentProps {
  children?: React.ReactNode
  className?: string
}

const StyledListItemContent = styled('div')({
  flex: '1 1 auto',
  minWidth: 0
})

export const ListItemContent: React.FC<IListItemContentProps> = ({
  children,
  ...props
}) => {
  return <StyledListItemContent {...props}>{children}</StyledListItemContent>
}
