import { cn } from '~/shared/lib/utils'

import LogoAsset from './logo.png'

export function Logo({ className }: { className?: string }) {
  return <img src={LogoAsset} className={cn('w-[1em] h-[1em]', className)} />
}
