import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'

function ClerkNav() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignUpButton />
        <Link to="/sign-in">Sign In</Link>
      </SignedOut>
    </>
  )
}

export const GnbMemoClerkNav = React.memo(ClerkNav)
