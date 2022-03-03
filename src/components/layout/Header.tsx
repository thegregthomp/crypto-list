import * as React from 'react';
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-indigo-600'>
      <nav className='mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
          <div className='flex items-center'>
            <span className='text-4xl'>&#128176;</span>
            <h1 className='ml-3 hidden text-xl text-white lg:inline-block'>
              <Link href="/coins">Greg&apos;s Cool Coins!</Link>
            </h1>
          </div>
          <div className='flex items-center'>{/* nav stuff */}</div>
          <div className='ml-10 space-x-4'>
            <Link
              href='#'
              className='inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75'
            >
              Action
            </Link>
            <Link
              href='#'
              className='inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50'
            >
              Action
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
