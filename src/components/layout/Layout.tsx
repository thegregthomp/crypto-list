import * as React from 'react';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-10">
        {children}
      </div>
    </>
  )
}
