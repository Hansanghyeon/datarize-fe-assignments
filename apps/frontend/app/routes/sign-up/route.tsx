import { SignUp } from '@clerk/clerk-react'

import type { Route } from '+routes/sign-up/+types/route'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Page() {
  return <SignUp />
}
