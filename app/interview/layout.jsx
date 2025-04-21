"use client"

import React, { useState } from 'react'
import InterviewHeader from '@/components/interview/InterviewHeader'
import { InterviewDataContext } from '@/context/InterviewDataContext'

const InterviewLayout = ({ children }) => {
    const [interviewInfo, setInterviewInfo] = useState();
    return (
        <InterviewDataContext.Provider value={{ interviewInfo, setInterviewInfo }}>
            <div className='bg-secondary'>
                <InterviewHeader />
                {children}
            </div>
        </InterviewDataContext.Provider>
    )
}

export default InterviewLayout