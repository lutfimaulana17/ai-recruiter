import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2, Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import QuestionItem from './QuestionItem';
import { supabase } from '@/services/supabaseClient';
import { useUser } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';

const QuestionList = ({ formData, onCreateLink, setTotalQuestions }) => {
    const [loading, setLoading] = useState(true);
    const [questionList, setQuestionList] = useState();
    const { user } = useUser();
    const [saveLoading, setSaveLoading] = useState(false);

    useEffect(() => {
        if (questionList?.length > 0) {
            setTotalQuestions(questionList?.length);
        }
    }, [questionList]);

    useEffect(() => {
        if (formData) {
            handleGenerateQuestionList();
        }
    }, [formData])


    const handleGenerateQuestionList = async () => {
        setLoading(true);
        try {
            const res = await axios.post('/api/ai-model', {
                ...formData
            })
            console.log('here is the res', res.data)
            const content = res.data.content;
            const contentUpdated = content.replace('```json', '').replace('```', '')
            console.log(JSON.parse(contentUpdated)?.interviewQuestions)
            setQuestionList(JSON.parse(contentUpdated)?.interviewQuestions);
            setLoading(false);
        } catch (e) {
            console.log(e);
            toast('Server Error, Try Again!')
            setLoading(false);
        }
    }

    const onComplete = async () => {
        setSaveLoading(true);
        const interview_id = uuidv4();
        await supabase
            .from('Interviews')
            .insert([
                {
                    ...formData,
                    questionList: questionList,
                    userEmail: user?.email,
                    interview_id: interview_id
                },
            ]);

        await supabase
            .from('Users')
            .update({ credits: Number(user?.credits) - 1 })
            .eq('email', user?.email);

        onCreateLink(interview_id)
        setSaveLoading(false);
    }

    return (
        <div>
            {loading &&
                <div className='p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center'>
                    <Loader2Icon className='animate-spin' />
                    <div>
                        <h2 className='font-medium'>Generating Interview Questions</h2>
                        <p className='text-primary'>Our AI is crafting personalized questions bases on your job position</p>
                    </div>
                </div>
            }
            {questionList?.length > 0 &&
                <div>
                    <QuestionItem questionList={questionList} />
                </div>
            }

            {questionList?.length > 0 &&
                <div className='flex justify-end mt-10'>
                    <Button 
                        onClick={() => onComplete()} 
                        disabled={saveLoading}>
                        {saveLoading && <Loader2 className='animate-spin' />}
                        Create Interview Link & Finish
                    </Button>
                </div>
            }

        </div>
    )
}

export default QuestionList