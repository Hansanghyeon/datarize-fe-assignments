import type { Route } from '+routes/dashboard._index/+types/route'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Page() {
  return <div>dashboard</div>
}
