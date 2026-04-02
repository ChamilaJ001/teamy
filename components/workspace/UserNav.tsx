import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CreditCard, LogOut, User } from 'lucide-react'
import { LogoutLink, PortalLink } from '@kinde-oss/kinde-auth-nextjs/components'

const user = {
  picture: 'https://github.com/shadcn.png',
  given_name: 'Chamila Jayasinghe',
  email: 'chamila@gmail.com',
}

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className='cursor-pointer size-12 rounded-xl hover:rounded-lg transition-all duration-200 bg-background/50 border-border/50 hover:bg-accent hover:text-accent-foreground'>
          <Avatar className='relative size-8 rounded-lg'>
            <AvatarImage src={user.picture} />
            <AvatarFallback>{user.given_name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side='right' sideOffset={8} className='w-[200px]'>
        <DropdownMenuLabel className='flex items-center gap-2 px-2 py-1.5 text-left font-normal text-sm'>
          <Avatar>
            <AvatarImage src={user.picture} />
            <AvatarFallback>{user.given_name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className='grid flex-1 text-left text-sm leading-tight'>
            <p className='truncate font-medium'>{user.given_name}</p>
            <p className='truncate text-muted-foreground text-xs'>{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <PortalLink>
              <User className='size-4 mr-2' />
              <span>Account</span>
            </PortalLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <PortalLink>
              <CreditCard className='size-4 mr-2' />
              <span>Billing</span>
            </PortalLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink>
            <LogOut className='size-4 mr-2' />
            Logout
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav