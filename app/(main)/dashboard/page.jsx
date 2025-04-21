import CreateOptions from '@/components/dashboard/CreateOptions'
import LatestInterviewsList from '@/components/dashboard/LatestInterviewsList'
import React from 'react'

const Dasboard = () => {
  return (
    <div>      
      <h2 className='my-3 font-bold text-2xl'>Dashboard</h2>
      <CreateOptions />
      <LatestInterviewsList />
    </div>
  )
}

export default Dasboard