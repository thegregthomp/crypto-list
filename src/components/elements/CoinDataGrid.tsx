import React from 'react';

import CoinDataBlock from '@/components/elements/CoinDataBlock';
import CoinPercentBubble from '@/components/elements/CoinPercentBubble';

import { formatCurrency } from '@/helpers';

function CoinDataGrid({ data }) {
  return (
    <ul
      role='list'
      className='grid gap-px divide-x divide-gray-200 overflow-hidden rounded drop-shadow sm:grid-cols-3'
    >
      <CoinDataBlock>
        <div className='flex items-center'>
          <span className='text-base text-slate-900 lg:text-lg'>
            Price Change
          </span>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <div>
            <span className='text-lg font-bold text-purple-600 lg:text-2xl'>
              {formatCurrency(
                data.market_data.price_usd -
                  data.market_data.ohlcv_last_24_hour.open
              )}
            </span>
            <span className='ml-2 text-sm text-gray-500'>24HR</span>
          </div>
          <CoinPercentBubble
            percent={(
              ((data.market_data.price_usd -
                data.market_data.ohlcv_last_24_hour.open) /
                data.market_data.price_usd) *
              100
            ).toFixed(2)}
          />
        </div>
      </CoinDataBlock>
      <CoinDataBlock>
        <div className='flex items-center'>
          <span className='text-base text-slate-900 lg:text-lg'>
            24h Low / 24h High
          </span>
        </div>
        <div className='mt-2 text-lg lg:text-2xl'>
          <span className='font-bold text-red-500'>
            {formatCurrency(data.market_data.ohlcv_last_24_hour.low)}
          </span>
          &nbsp;/&nbsp;
          <span className='font-bold text-green-500'>
            {formatCurrency(data.market_data.ohlcv_last_24_hour.high)}
          </span>
        </div>
      </CoinDataBlock>
      <CoinDataBlock>
        <div className='flex items-center'>
          <span className='text-base text-slate-900 lg:text-lg'>
            Trading Volume
          </span>
          <span className='ml-2 inline-flex rounded-full bg-gray-200 px-2 text-xs font-semibold leading-5 text-gray-800'>
            24HR
          </span>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <span className='text-lg font-bold text-purple-600 lg:text-2xl'>
            {formatCurrency(data.market_data.ohlcv_last_24_hour.volume)}
          </span>
          {/* Can't find a reliable way to get the 24hr volume change. Need help with this formula */}
          <CoinPercentBubble
            percent={(
              ((data.market_data.price_usd -
                data.market_data.ohlcv_last_24_hour.open) /
                data.market_data.price_usd) *
              100
            ).toFixed(2)}
          />
        </div>
      </CoinDataBlock>
    </ul>
  );
}

export default CoinDataGrid;
