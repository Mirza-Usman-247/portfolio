import { cn } from '../lib/utils'
import React from 'react'

interface Props{
    className?: string,
    children: React.ReactNode
}
const Container = ({className, children}: Props) => {
  return (
    <div className={cn(' w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl', className)}>
        {children}
    </div>
  )
}

export default Container