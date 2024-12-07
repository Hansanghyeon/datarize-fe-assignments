import { useUser } from '@clerk/clerk-react'

import type { Route } from '+routes/_index/+types/route'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser()
  if (!isLoaded) {
    // Handle loading state however you like
    return null
  }

  if (isSignedIn) {
    return <div>Hello {user.username}!</div>
  }

  return <div>Not signed in</div>
}
