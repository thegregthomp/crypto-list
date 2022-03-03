import React from 'react';

function List({ rows = 10, cols = 4 }) {
  return (
    <>
      {[...Array(rows)].map((x, i) => (
        <tr className='animate-pulse bg-white' key={i}>
          {[...Array(cols)].map((x, i) => (
            <td
              className={`whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 ${
                i > 1 ? 'hidden lg:table-cell' : ''
              }`}
              key={i}
            >
              <div className='col-span-2 h-2 rounded bg-gray-300'></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default List;
