import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import { default as PlaceholderList } from '@/components/placeholders/List';

import { formatCurrency } from '@/helpers';

function CoinList() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://data.messari.io/api/v2/assets?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <main>
        <section className='bg-white'>
          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-slate-100'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                        >
                          Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                        >
                          Price USD
                        </th>
                        <th
                          scope='col'
                          className='hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 lg:table-cell'
                        >
                          Market Cap
                        </th>
                        <th
                          scope='col'
                          className='hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 lg:table-cell'
                        >
                          Change
                          <span className='ml-1 inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800'>
                            24HR
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading || data.length == 0 ? (
                        <PlaceholderList rows={10} cols={4} />
                      ) : (
                        <>
                          {data.map((coin, i) => (
                            <tr
                              className={`${
                                i % 2 ? 'bg-white' : 'bg-slate-50'
                              }`}
                              key={i}
                            >
                              <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900'>
                                <a
                                  href={`/coins/${coin.symbol.toLowerCase()}`}
                                  className='transition-all hover:text-blue-500 hover:underline'
                                >
                                  {coin.name}
                                </a>
                              </td>
                              <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                                <span
                                  className={`${
                                    coin.metrics.market_data
                                      .percent_change_usd_last_24_hours > 0
                                      ? 'text-green-500'
                                      : 'text-red-500'
                                  }`}
                                >
                                  {formatCurrency(
                                    coin.metrics.market_data.price_usd
                                  )}
                                </span>
                              </td>
                              <td className='hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 lg:table-cell'>
                                {formatCurrency(
                                  coin.metrics.marketcap.current_marketcap_usd
                                )}
                              </td>
                              <td className='hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 lg:table-cell'>
                                <span
                                  className={`font-bold ${
                                    coin.metrics.market_data
                                      .percent_change_usd_last_24_hours > 0
                                      ? 'text-green-500'
                                      : 'text-red-500'
                                  }`}
                                >
                                  {coin.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
                                    4
                                  )}
                                  %
                                </span>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CoinList;
