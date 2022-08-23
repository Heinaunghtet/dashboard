import React from 'react';
// icons
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimativeDot } from 'react-icons/go';
// components
import { Button, LineChart, Pie, SparkLine, stacked } from '../components';

// data
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Home = () => {
  return (
    <div className='mt-2 bg-slate-700'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full xl
        lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>

        </div>

      </div>

    </div>
  )
}

export default Home