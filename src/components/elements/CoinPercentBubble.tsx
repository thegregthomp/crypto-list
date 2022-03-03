import React from 'react';

function CoinPercentBubble({ percent }: { percent: number }) {
  return (
    <span
      className={`flex items-center rounded-full bg-gray-300 px-4 py-1 text-sm lg:text-base ${
        percent > 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
      }`}
    >
      {percent > 0 ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='inline h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='inline h-4 w-4'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      )}
      <span className='ml-1 font-bold'>{percent}%</span>
    </span>
  );
}

export default CoinPercentBubble;
