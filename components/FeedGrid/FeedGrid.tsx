import Image from 'next/image'
import {getData, extractWidthAndHeight} from '@/lib/utils'
import type {FlickrImg} from '@/lib/types'

export const FeedGrid = async ({tags} : {tags: string}) => {
    const data = await getData(tags)
    const images = data.items as FlickrImg[];
    return (
        <>
            <div className="p-0 sm:p-4 columns-3 gap-2 md:gap-6 overflow-hidden">
                {images && images.map((imgObj: FlickrImg, index: number) => {
                    const [width, height] = extractWidthAndHeight(imgObj.description);
                    const imgLink = imgObj.media.m.replace('_m.jpg', '_b.jpg')
                    return (
                        <div key={`${index}-${imgObj.published}`} className={`mb-2 md:mb-6`}>
                            <a href={imgObj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative block md:hover:scale-105 transition-all duration-200 ease-in-out md:focus-visible:scale-105 ring-offset-background rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full h-full`}
                            >
                                <Image
                                    src={imgLink}
                                    alt={imgObj.title}
                                    className='md:group-focus-visible:grayscale-0 rounded-2xl md:grayscale md:group-hover:grayscale-0 w-full h-full'
                                    width={width}
                                    height={height}
                                    placeholder='empty'
                                    sizes="100vw" 
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FeedGrid;
