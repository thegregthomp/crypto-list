import React from 'react';

import { formatCurrency } from '@/helpers';

function CoinHeaderData({ isLoaded = false, data, coin }) {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          {!isLoaded ? (
            <>
              <span className='text-xl font-bold text-slate-900 lg:text-3xl animate-pulse'>
                <div className='h-2 w-8 rounded bg-gray-300 lg:h-4 lg:w-32'></div>
              </span>
              <span className='ml-3 text-lg text-slate-500 lg:text-xl animate-pulse'>
                <div className='h-2 w-4 rounded bg-gray-300 lg:h-4 lg:w-16'></div>
              </span>
              <span className='ml-3 text-lg lg:text-xl animate-pulse'>
                <div className='h-2 w-8 rounded bg-gray-300 lg:h-4 lg:w-32'></div>
              </span>
            </>
          ) : (
            <>
              <span className='text-lg font-bold text-slate-900 lg:text-3xl'>
                {data.name}
              </span>
              <span className='ml-3 rounded bg-purple-200 px-2 py-1 text-xs font-bold text-purple-500'>
                {coin.toUpperCase()}
              </span>
              <span className='ml-3 text-base text-slate-500 lg:text-xl'>
                {formatCurrency(data.market_data.price_usd)}
              </span>
              <span
                className={`ml-3 text-base lg:text-xl ${
                  data.market_data.percent_change_usd_last_24_hours > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                ({data.market_data.percent_change_usd_last_24_hours.toFixed(2)}
                %)
              </span>
            </>
          )}
        </div>
        <div className='-mt-1'>
          {!isLoaded ? (
            <span className='mt-4 inline-block text-sm font-bold text-slate-500'>
              <div className='mx-1 inline-block h-2 w-6 rounded bg-gray-300 lg:h-4 lg:w-8'></div>
              <div className='mx-1 inline-block h-2 w-4 rounded bg-gray-300 lg:h-4 lg:w-12'></div>
              <div className='mx-1 inline-block h-2 w-6 rounded bg-gray-300 lg:h-4 lg:w-16'></div>
              <div className='mx-1 inline-block h-2 w-4 rounded bg-gray-300 lg:h-4 lg:w-8'></div>
              <div className='mx-1 inline-block h-2 w-8 rounded bg-gray-300 lg:h-4 lg:w-32'></div>
            </span>
          ) : (
            <span className='text-sm text-sm font-bold text-slate-500 lg:text-base'>
              A peer-to-peer electronic cash system.
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default CoinHeaderData;
