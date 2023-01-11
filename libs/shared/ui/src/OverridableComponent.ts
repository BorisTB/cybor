/*
 * Hexio App Engine Editor
 *
 * @package hae-editor
 * @copyright 2022 Hexio a.s. <contact@hexio.io> (hexio.io)
 * @license Commercial
 *
 *  See LICENSE file distributed with this source code for more information.
 */

import React, { ReactElement, ValidationMap, WeakValidationMap } from 'react'

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

export type VoidElement =
  | 'area'
  | 'base'
  | 'br'
  | 'col'
  | 'hr'
  | 'img'
  | 'input'
  | 'link'
  | 'meta'
  | 'param'
  | 'command'
  | 'keygen'
  | 'source'

export type OmitChildrenFromVoid<C extends React.ElementType> =
  C extends VoidElement
    ? Omit<React.ComponentPropsWithRef<C>, 'children'>
    : React.ComponentPropsWithRef<C>

/**
 * A component whose root component can be controlled via a `Component` prop.
 */
export interface OverridableComponent<P, D extends React.ElementType = 'div'> {
  <C extends React.ElementType>(
    props: { Component?: C } & OverrideProps<P, C>,
    context?: unknown
  ): JSX.Element

  (props: OverrideProps<P, D>, context?: unknown): JSX.Element

  propTypes?:
    | WeakValidationMap<
        React.PropsWithoutRef<P> & React.RefAttributes<React.ElementRef<D>>
      >
    | undefined
  contextTypes?: ValidationMap<unknown> | undefined
  defaultProps?: Partial<P & { Component: D }> | undefined
  displayName?: string | undefined
}

export type OverrideProps<P, C extends React.ElementType> = P &
  DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>

interface OverriddenForwardRefRenderFunction<P, D extends React.ElementType> {
  (
    props: { Component: D } & OverrideProps<P, D>,
    ref: React.ForwardedRef<React.ElementRef<D>>
  ): ReactElement | null

  displayName?: string | undefined
  defaultProps?: never | undefined
  propTypes?: never | undefined
}

export function overrideForwardRef<
  Props,
  DefaultType extends React.ElementType,
  Render extends OverriddenForwardRefRenderFunction<
    Props,
    DefaultType
  > = OverriddenForwardRefRenderFunction<Props, DefaultType>
>(render: Render): OverridableComponent<Props, DefaultType> {
  return React.forwardRef(render) as OverridableComponent<Props, DefaultType>
}
