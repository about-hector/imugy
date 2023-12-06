import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import { HTMLProps } from 'react'

const imugy = localFont({
    src: '../public/fonts/osaka-japan/OsakaJapan.ttf',
    display: 'swap',
})

export default function ImugyLogo({className, ...props}: HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={cn(
                imugy.className,
                "text-2xl hover:text-accent text-foreground",
                className
            )}
            {...props}
        >
            Imugy
        </div>
    )
}
