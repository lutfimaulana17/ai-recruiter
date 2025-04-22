"use client";

import React, { useEffect, useState } from 'react'
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient';
import { useParams } from 'next/navigation'
import InterviewDetailInfo from '@/components/scheduledInterview/InterviewDetailInfo';
import CandidateList from '@/components/scheduledInterview/CandidateList';

const InterviewDetail = () => {
    const { interview_id } = useParams();
    const { user } = useUser();
    const [interviewDetail, setInterviewDetail] = useState(null);

    const getDataInterviewDetail = async () => {
        const result = await supabase.from('Interviews')
            .select(`jobPosition, jobDescription, type, questionList, duration, interview_id, created_at,
                interview-feedback(userEmail,userName,feedback,created_at)`)
            .eq('interview_id', interview_id)
            .eq('userEmail', user?.email)            
        setInterviewDetail(result?.data[0]);
    }

    useEffect(() => {
        if (user) {
           getDataInterviewDetail();
        }
    }, [user]);

    return (
        <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Interview Detail</h2>
            <InterviewDetailInfo interviewDetail={interviewDetail} />
            <CandidateList candidateList={interviewDetail?.['interview-feedback']} />
        </div>
    )
}

export default InterviewDetail