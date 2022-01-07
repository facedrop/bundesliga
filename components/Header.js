import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10'>
            {/* Logo */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://i57.servimg.com/u/f57/17/35/22/78/91510.png' 
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* Seach */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input 
                    type="text" 
                    placeholder='Search' 
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-500' 
                />
                <SearchIcon className='hidden h-8 md:inline-flex bg-gray-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

        </header>
    )
}

export default Header
