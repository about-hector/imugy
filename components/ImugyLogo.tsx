import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
import Link, { LinkProps } from 'next/link'

const imugy = localFont({
    src: '../public/fonts/osaka-japan/OsakaJapan.ttf',
    display: 'swap',
})

interface ImugyLogoProps extends LinkProps {
    className?: string;
}

export default function ImugyLogo({className, ...props}: ImugyLogoProps) {
    return (
        <Link
            className={cn(
                imugy.className,
                "text-2xl hover:text-accent text-foreground cursor-pointer",
                className
            )}
            {...props}
        >
            Imugy
        </Link>
    )
}
