//import Image from 'next/image'

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


export const FeedGrid = async () => {
    const data = await getData();
    return (
        <>
            <div className="p-0 sm:p-4 columns-3 gap-2 md:gap-6 overflow-hidden">
                {data.items.map((item, index) => {
                    const [width, height] = extractWidthAndHeight(item.description);
                    const imgLink = item.media.m.replace('_m.jpg', '_b.jpg')
                    return (
                        <div key={index} className="w-full">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className='group block w-full h-full md:hover:scale-105 transition-all duration-200 ease-in-out md:focus-visible:scale-105 ring-offset-background rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
                                <img src={imgLink} alt={item.title} className='md:group-focus-visible:grayscale-0 w-full mb-2 md:mb-6 rounded-2xl md:grayscale md:group-hover:grayscale-0 '/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FeedGrid;
