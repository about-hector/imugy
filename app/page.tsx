import Image from 'next/image'
import FeedGrid from '@/components/FeedGrid/FeedGrid'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Home() {
    return (
        <main className="relative z-50 max-w-4xl mx-auto flex-col h-full px-4">
            <div className='flex flex-col justify-center items-center mt-16 md:mt-32 mb-8'>
                <h1 className='text-4xl font-bold mb-2 text-foreground'>Explore the feed</h1>
                <p className='text-xs text-muted-foreground'>(sorry, there is porn sometimes. Enjoy)</p>
            </div>
            <div className='relative max-w-md md:max-w-lg mx-auto mb-8 md:mb-16'>
                <Search className='absolute top-2 right-2 pointer-events-none' />
                <Input placeholder='technology, tech' className='hover:border-foreground max-w-lg my-6 pr-12' />
            </div>
            <FeedGrid />
        </main>
    )
}
