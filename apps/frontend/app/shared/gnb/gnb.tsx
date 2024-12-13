import { HiOutlineLightBulb } from 'react-icons/hi2'
import { Link } from 'react-router'

import { IconNotification } from '~/shared/components/icons/notification'
import { ModeToggle } from '~/shared/components/mode-toggle'
import { Popover, PopoverContent, PopoverTrigger } from '~/shared/components/ui/popover'
import { NotificationPack } from '~/widget/notification'

import { Logo } from '../components/logo'
import { badgeVariants } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { cn } from '../lib/utils'
import { GnbMemoClerkNav } from './_partials/clerk'

export function Gnb() {
  return (
    <header className="border-b">
      <div className="container">
        <div className="grid grid-cols-[auto,1fr,200px] py-3">
          <div className="flex gap-x-4 items-center">
            <div className="w-[48px] h-[48px] flex items-center justify-center bg-brand-200 rounded-xl">
              <Logo className="text-[24px]" />
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="typo-h2-sub font-semibold">쇼핑몰 구매 데이터</h2>
              <Link
                className={cn(badgeVariants({ variant: 'secondary' }), 'font-normal text-[10px] px-[6px] pl-[5px]')}
                to="https://datarize.gitbook.io/docs"
                target="_blank"
              >
                <HiOutlineLightBulb />
                가이드 바로가기
              </Link>
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
