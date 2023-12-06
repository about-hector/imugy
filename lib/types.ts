// I know, but please bear with me here let the man cook
export type FlickrImg = {
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

export type SearchParams = {
    [key: string]: string | string[] | undefined,
}


