import { Outlet } from 'react-router'

import type { Route } from '+types'

import { Footer } from './footer'
import { Header } from './header'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Page() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
