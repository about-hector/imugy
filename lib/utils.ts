import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// display the search for "cats" by default, there was too much casual porn coming from the api. 
export async function getData(tags: string | string[] | undefined = 'cats') {
    const response = await fetch(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`);

    if (!response.ok) {
        throw new Error('Fetch Failed')
    }
    let json =  await response.json();
    return json;
}

export const extractWidthAndHeight = (description: string) => {
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
