import React from 'react';

function List({rows = 10, cols = 4}) {
  return (
      <>
        {[...Array(rows)].map((x, i) =>
			    <tr className="bg-white" key={i}>
            {[...Array(cols)].map((x, i) =>
  	          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><div className="h-2 bg-gray-300 rounded col-span-2"></div></td>
            )}
	        </tr>
			  )}
      </>
  )
}

export default List
