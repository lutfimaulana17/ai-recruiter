"use client";

import React, { useEffect, useState } from 'react'
import { useUser } from '@/app/provider';
import { Button } from '@/components/ui/button';
import { supabase } from '@/services/supabaseClient';
import { Video } from 'lucide-react';
import InterviewCard from '@/components/dashboard/InterviewCard';

const AllInterview = () => {
    const [interviewList, setInterviewList] = useState([]);
    const { user } = useUser();
    const [loading, setLoading] = useState(false);

    const getDataInterviewList = async () => {
        let { data: interviews, error } = await supabase
            .from('Interviews')
            .select('*')
            .eq('userEmail', user?.email)
            .order('id', { ascending: false })

        setInterviewList(interviews);
    }

    useEffect(() => {
        if (user) {
          getDataInterviewList();
        }
    }, [user])

    return (
        <div className='my-5'>
            <h2 className='font-bold text-2xl'>All Previously Created Interviews</h2>
            {interviewList?.length == 0 &&
                <div className='p-5 flex flex-col gap-3 items-center bg-white rounded-xl mt-5 '>
                    <Video className='h-10 w-10 text-primary' />
                    <h2>You don't have any interview created!</h2>
                    <Button>+ Create New Interview</Button>
                </div>}
            {interviewList &&
                <div className='grid grid-cols-2 mt-5 xl:grid-cols-3 gap-5'>
                    {interviewList.map((interview, index) => (
                        <InterviewCard interview={interview} key={index} />
                    ))}
                </div>
            }
        </div>
    )
}

export default AllInterview