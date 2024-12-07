import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { TNotificationBase } from '.'

const NotificationContainer = React.lazy(() =>
  import('.').then((module) => ({
    default: React.memo(module.Notification),
  })),
)

interface TNotificationPack extends TNotificationBase {}
export function NotificationPack(props: TNotificationPack) {
  return (
    <ErrorBoundary fallback={null}>
      <React.Suspense fallback={null}>
        <NotificationContainer {...props} />
      </React.Suspense>
    </ErrorBoundary>
  )
}
