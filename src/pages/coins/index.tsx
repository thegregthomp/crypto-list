import React, { useState, useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import {default as PlaceholderList} from '@/components/placeholders/List';
import {formatCurrency} from '@/helpers';

function CoinList() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://data.messari.io/api/v2/assets?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <main>

        <section className='bg-white'>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price USD</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Change
                          <span class="ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">24HR</span>
                        </th>

                      </tr>
                    </thead>
                    <tbody>
                      {(isLoading || data.length == 0) ?
                        <PlaceholderList rows={10} cols={4} />
                      :
                        <>
                          {data.map((coin, i)=>(
                            <tr className={`${(i % 2) ? "bg-white" : "bg-slate-50"}`} key={i}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <a href={`/coins/${coin.symbol.toLowerCase()}`} className="hover:text-blue-500 hover:underline transition-all">{coin.name}</a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className={`${(coin.metrics.market_data.percent_change_usd_last_24_hours > 0) ? "text-green-500" : "text-red-500"}`}>
                                  {formatCurrency(coin.metrics.market_data.price_usd)}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(coin.metrics.marketcap.current_marketcap_usd)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className={`font-bold ${(coin.metrics.market_data.percent_change_usd_last_24_hours > 0) ? "text-green-500" : "text-red-500"}`}>
                                  {coin.metrics.market_data.percent_change_usd_last_24_hours.toFixed(4)}%
                                </span>
                              </td>
                            </tr>
                          ))}

                        </>
                      }
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default CoinList
