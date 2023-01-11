import React from 'react'
import styled from '@emotion/styled'

export interface IListItemIconProps {
  children?: React.ReactNode
  className?: string
}

const StyledListItemIcon = styled('div')({})

export const ListItemIcon: React.FC<IListItemIconProps> = ({
  children,
  ...props
}) => {
  return <StyledListItemIcon {...props}>{children}</StyledListItemIcon>
}
