import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({
  children,
  width,
}: {
  children: React.ReactNode;
  width: string;
}) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <div
        className={`${
          width != 'full'
            ? 'container mx-auto px-4 pt-4 sm:px-6 lg:px-8 lg:pt-10'
            : 'w-full'
        }`}
      >
        {children}
      </div>
    </>
  );
}
