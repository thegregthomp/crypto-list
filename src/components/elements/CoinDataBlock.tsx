import React from 'react';

function CoinDataBlock({ children }: { children: React.ReactNode }) {
  return <li className='flex flex-col bg-gray-100 py-6 px-6'>{children}</li>;
}

export default CoinDataBlock;
