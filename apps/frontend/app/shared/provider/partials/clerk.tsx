import { ClerkProvider } from '@clerk/clerk-react'
import { useNavigate } from 'react-router'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export function ClerkPv({ children }: React.PropsWithChildren) {
  const navigate = useNavigate()
  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  )
}
