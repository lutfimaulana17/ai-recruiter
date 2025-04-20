"use client"
import { useUser } from '@/app/provider';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const LatestInterviewsList = () => {
    const [interviewList, setInterviewList] = useState([]);

    return (
        <div className='my-5'>
            <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>

            {interviewList?.length == 0 &&
                <div className='p-5 flex flex-col gap-3 items-center bg-white rounded-xl mt-5 '>
                    <Video className='h-10 w-10 text-primary' />
                    <h2>You don't have any interview created!</h2>
                    <Link href="/dashboard/create-interview">
                        <Button>+ Create New Interview</Button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default LatestInterviewsList