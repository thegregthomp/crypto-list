import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/placeholders/Icon';
import CoinHeaderData from '@/components/elements/CoinHeaderData';
import CoinDataGrid from '@/components/elements/CoinDataGrid';

import { useRouter } from 'next/router'

function Coin() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const router = useRouter()
  const { coin } = router.query

  useEffect(() => {
    setLoading(true)
    if(coin){
      fetch(`https://data.messari.io/api/v1/assets/${coin}/metrics/market-data`)
        .then((res) => res.json())
        .then((data) => {
          setData(data.data)
          setLoading(false)
        })
    }
  }, [coin])

  const isLoaded = () => {
    return (!isLoading && data?.market_data)
  }

  return (
    <Layout width='full'>
      <main>
        <section className='bg-white'>
          <div className="flex flex-col">
            <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 pb-4 lg:pb-0 pt-4 lg:pt-14 w-full lg:mb-16">
              <div className="ml-0 lg:ml-16 flex items-center">
                <div className="h-16 lg:h-32 w-16 lg:w-32 ml-0 lg:-ml-16 mb-0 lg:-mb-12 flex items-center">
                  {isLoaded() ?
                    <img src={`https://messari.io/asset-images/${data.id}/128.png?v=2`} className="max-w-full h-auto" alt=""/>
                  :
                    <Icon />
                  }
                </div>
                <div className="ml-2 lg:ml-8 flex items-center pb-2 w-full justify-between">
                  <CoinHeaderData isLoaded={isLoaded()} data={data} coin={coin} />
                  {isLoaded() &&
                    //Need real icons to match design
                    <div className="text-slate-400 flex hidden lg:flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 w-full">
              {isLoaded() &&
                <CoinDataGrid data={data} />
              }
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Coin
