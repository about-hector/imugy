import FeedGrid from '@/components/FeedGrid/FeedGrid'
import SearchBox from '@/components/SearchBox'
import { Suspense } from 'react'
import type { SearchParams } from '@/lib/types'

export default async function Home({
    searchParams
}: {
    searchParams: SearchParams
}) {
    let tags: string;
    if (searchParams.tags && typeof searchParams.tags === 'string') {
        tags = searchParams.tags.split(',').join(', ');
    } else {
        tags = ''
    }
    return (
        <main className="relative z-50 max-w-4xl mx-auto flex-col h-full px-4">
            <div className='flex flex-col justify-center items-center mt-16 md:mt-32 mb-8'>
                <h1 className='text-4xl text-center font-bold mb-2 text-foreground'>Explore Flickr&apos;s public feeds</h1>
                <p className='text-xs text-muted-foreground'>(sorry, there is porn sometimes. Enjoy)</p>
            </div>
            <SearchBox />
            <Suspense>
            {searchParams.tags ?
            (<p className='mb-4 md:px-4'>
                <span className='text-lg text-muted-foreground font-semibold'>Results for:{' '}</span> 
                {tags}
            </p>) : null}
                <FeedGrid tags={searchParams.tags as string} />
            </Suspense>
        </main>
    )
}
