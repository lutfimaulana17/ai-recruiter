"use client";

import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner';
import FormCreate from '@/components/dashboard/createInterview/FormCreate';
import QuestionList from '@/components/dashboard/createInterview/QuestionList';
import InterviewLink from '@/components/dashboard/createInterview/InterviewLink';
import { useUser } from '@/app/provider';

const CreateInterview = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();
    const [interviewId, setInterviewId] = useState();
    const { user } = useUser();

    const onNext = () => {
        if (!formData?.jobPosition || !formData?.jobDescription || !formData?.duration || !formData.type) {
            toast('Please fill all the data!')
            return;
        }
        setStep(step + 1);
    }

    const onCreateLink = (interview_id) => {
        setInterviewId(interview_id);
        setStep(step + 1);
    }

    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }
    
    return (
        <div className='mt-5 px-10 md:px-24 lg:px-44 xl:px-56'>
            <div className='flex gap-5 items-center'>
                <ArrowLeft onClick={() => router.back()} className='cursor-pointer' />
                <h2 className='font-bold text-2xl'>Create New Interview</h2>

            </div>
            <Progress value={step * 33.33} className='my-5' />
            {step == 1 ? 
            <FormCreate
                onHandleInputChange={onHandleInputChange}
                onNext={() => onNext()} />
            : step == 2 ? <QuestionList formData={formData} onCreateLink={(interview_id) => onCreateLink(interview_id)} /> 
                    :
                    step == 3 ?
                        <InterviewLink interview_id={interviewId}
                            formData={formData}
                        /> : null}
        </div>
    )
}

export default CreateInterview