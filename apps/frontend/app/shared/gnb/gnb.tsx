import { IconNotification } from '~/shared/components/icons/notification'
import { ModeToggle } from '~/shared/components/mode-toggle'
import { Popover, PopoverContent, PopoverTrigger } from '~/shared/components/ui/popover'
import { NotificationPack } from '~/widget/notification'

import { Logo } from '../components/logo'
import { Button } from '../components/ui/button'
import { GnbMemoClerkNav } from './_partials/clerk'

export function Gnb() {
  return (
    <header className="border-b">
      <div className="container py-3">
        <div className="grid grid-cols-[200px,1fr,200px]">
          <div className="grid grid-cols-[auto,1fr] gap-x-2">
            <div className="w-[48px] h-[48px] flex items-center justify-center bg-brand-200 rounded-xl border">
              <Logo className="text-[24px]" />
            </div>
            <div className="self-center">
              <b>쇼핑몰 구매 데이터</b>
            </div>
          </div>
          <div className="self-center"></div>
          <div className="flex justify-end items-center gap-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <IconNotification className="text-[14px]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end">
                <NotificationPack />
              </PopoverContent>
            </Popover>
            <div className="w-px h-[12px] bg-slate-600" />
            <GnbMemoClerkNav />
            <div className="w-px h-[12px] bg-slate-600" />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
