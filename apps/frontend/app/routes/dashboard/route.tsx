import { Outlet } from 'react-router'

import type { Route } from '+routes/dashboard/+types/route'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Page() {
  return (
    <>
      <Outlet />
    </>
  )
}
