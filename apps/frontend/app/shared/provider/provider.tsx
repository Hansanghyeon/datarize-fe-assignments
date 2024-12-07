import { flow, pipe } from 'fp-ts/function'
import React from 'react'

import { ClerkPv } from './partials/clerk'

// 각 Provider를 래핑하는 함수
const wrap =
  (Provider: (props: React.PropsWithChildren) => React.ReactNode) =>
  (children: React.ReactNode) => <Provider>{children}</Provider>

const AppProviderPrimitive =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const ComposedProviders = ({ children }: { children: React.ReactNode }) =>
      pipe(children, wrap(ClerkPv))
    return (
      <ComposedProviders>
        <WrappedComponent {...props} />
      </ComposedProviders>
    )
  }

export const AppChildren = ({ children }: React.PropsWithChildren) => (
  <React.Fragment>{children}</React.Fragment>
)

export const AppProvider = AppProviderPrimitive(AppChildren)
