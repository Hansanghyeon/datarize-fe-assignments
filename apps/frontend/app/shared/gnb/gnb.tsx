import { IconNotification } from '~/shared/components/icons/notification'
import { ModeToggle } from '~/shared/components/mode-toggle'
import { Popover, PopoverContent, PopoverTrigger } from '~/shared/components/ui/popover'
import { NotificationPack } from '~/widget/notification'

import { GnbMemoClerkNav } from './_partials/clerk'

export function Gnb() {
  return (
    <header className="border-b">
      <div className="container py-3">
        <div className="grid grid-cols-[200px,1fr,200px]">
          <div>logo</div>
          <div>center</div>
          <div className="flex justify-end items-center gap-x-2">
            <Popover>
              <PopoverTrigger>
                <IconNotification className="text-[14px]" />
              </PopoverTrigger>
              <PopoverContent align="end">
                <NotificationPack />
              </PopoverContent>
            </Popover>
            <GnbMemoClerkNav />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
