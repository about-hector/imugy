'use client'
import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

import { useRouter } from 'next/navigation'

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
            <Search className='absolute top-2 right-2 pointer-events-none' />

            <Input
                placeholder='technology, tech'
                className='hover:border-foreground max-w-lg my-6 pr-12'
                value={searchTags}
                onChange={(e) => setSearchTags(e.target.value)}
            />
        </form>
    )
}
