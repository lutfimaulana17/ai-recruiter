import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Clock, Copy, List, Mail, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

const InterviewLink = ({ interviewId, formData, totalQuestions }) => {
    const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interviewId

    const onCopyLink = async () => {
        await navigator.clipboard.writeText(url);
        toast('Link Copied')
    }

    console.log('cek form data >>>', formData)

    return (
        <div className='flex items-center justify-center flex-col mt-10'>
            <div className=''>
                <Image src={'/check.png'} alt='check'
                    width={200}
                    height={200}
                    className='w-[50px] h-[50px]'
                />
            </div>
            <h2 className='font-bold text-lg mt-4'>Your AI Interview is Ready!</h2>
            <p className='mt-3'>Share this link with your candidates to start the interview process</p>

            <div className='w-full p-7 mt-6 rounded-lg bg-white'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold'>Interview Link</h2>
                    <h2 className='p-1 px-2 text-primary bg-blue-50 rounded-4xl'>Valid for 30 Days</h2>
                </div>
                <div className='mt-3 flex gap-3 items-center'>
                    <Input defaultValue={url} disabled={true} />
                    <Button onClick={() => onCopyLink()}> <Copy /> Copy Link </Button>
                </div>
                <hr className='my-5' />

                <div className='flex gap-5'>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'><Clock className='h-4 w-4' />{formData?.duration} </h2>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'><List className='h-4 w-4' /> {totalQuestions} Questions </h2>                   
                </div>
            </div>

            <div className='mt-7 bg-white p-5 rounded-lg w-full'>
                <h2 className='font-bold'>Share Via</h2>
                <div className='flex gap-7 mt-2 justify-around'>
                    <Button variant={'outline'} className=''> <Mail /> Slack </Button>
                    <Button variant={'outline'} className=''> <Mail /> Email </Button>
                    <Button variant={'outline'} className=''> <Mail /> Whatsapp </Button>

                </div>
            </div>
            <div className='flex w-full gap-5 justify-between mt-6'>
                <Link href={'/dashboard'}>
                    <Button variant={'outline'} > <ArrowLeft /> Back to Dashboard </Button>
                </Link>
                <Link href={'/dashboard/create-interview'}>
                    <Button> <Plus /> Create New Interview </Button>
                </Link>

            </div>
        </div>
    )
}

export default InterviewLink;