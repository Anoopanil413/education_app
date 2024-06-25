import Card from '@/components/Cards/Card'
import React from 'react'

import sylabuses from '../../../public/sylabuses.png'


const Dashboard = () => {
  return (
    <>
      <div className='flex gap-8'>
        <Card imags={sylabuses} heading='Test content' color='green' />
        {/* <Card /> */}


      </div>


    </>
  )
}

export default Dashboard