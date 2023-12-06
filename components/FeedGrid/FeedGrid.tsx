import Image from 'next/image'

async function getData() {
    const response = await fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json&api_key=dcc60f09612ec9c88306d06aa63a7d36&nojsoncallback=1');

    if (!response.ok) {
        throw new Error('Fetch Failed')
    }
    return response.json()
}

const extractWidthAndHeight = (description: string) => {
    const regex = /<img[^>]+width="(\d+)"[^>]+height="(\d+)"[^>]*>/;
    const match = description.match(regex);

    if (match) {
        return [
            parseInt(match[1], 10),
            parseInt(match[2], 10)
        ];
    }

    return [
        0,
        0
    ];
};

const calculateAspectRatio = (width: number, height: number) => height + '_/_' + width;

// I know, but please bear with me here let the man cook
type FlickrImg = {
    title: string,
    link: string,
    media: {
        m: string
    },
    date_taken: string,
    description: string,
    published: string,
    author: string,
    tags: string
}

export const FeedGrid = async () => {
    const data = await getData();
    return (
        <>
            <div className="p-0 sm:p-4 columns-3 gap-2 md:gap-6 overflow-hidden">
                {data.items.map((item: FlickrImg, index: number) => {
                    const [width, height] = extractWidthAndHeight(item.description);
                    const imgLink = item.media.m.replace('_m.jpg', '_b.jpg')
                    return (
                        <div key={index} className={`mb-2 md:mb-6`}>
                            <a href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative block md:hover:scale-105 transition-all duration-200 ease-in-out md:focus-visible:scale-105 ring-offset-background rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full h-full`}
                            >
                                <Image
                                    src={imgLink}
                                    alt={item.title}
                                    className='md:group-focus-visible:grayscale-0 rounded-2xl md:grayscale md:group-hover:grayscale-0 w-full h-full'
                                    width={width}
                                    height={height}
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
