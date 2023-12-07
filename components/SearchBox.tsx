'use client'
import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

import { useRouter } from 'next/navigation'

const TAG_MIN_LENGTH = 2; 

export default function SearchBox() {
    const [searchTags, setSearchTags] = useState('');
    const router = useRouter()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const tagsQuery = searchTags.split(',').map(tag => tag.trim()).join(',');

        router.push(`/?tags=${tagsQuery}`)
    }

    return (
        <form
            className='relative max-w-md md:max-w-lg mx-auto mb-8 md:mb-16'
            onSubmit={(e) => handleSubmit(e)}
        >
            <button 
                type='submit'
                disabled={searchTags.length < TAG_MIN_LENGTH}
                className='absolute top-px right-px bottom-px p-2 disabled:opacity-50 bg-accent/80 disabled:bg-transparent rounded-md-inner '>
                <Search className='pointer-events-none' />
            </button>
            <Input
                type='text'
                minLength={TAG_MIN_LENGTH}
                placeholder='technology, tech'
                className='hover:border-foreground max-w-lg my-6 pr-12'
                value={searchTags}
                onChange={(e) => setSearchTags(e.target.value)}
            />
        </form>
    )
}
