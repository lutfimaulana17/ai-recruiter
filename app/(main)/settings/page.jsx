"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import { supabase } from '@/services/supabaseClient';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/provider';

const Settings = () => {
    const { user } = useUser();
    const router = useRouter();

    const onSignOut = async () => {
        await supabase.auth.signOut();
        router.replace('/auth')
    }

    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden mt-20">
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    { user?.picture && 
                        <Image src={user.picture} alt='user' width={100} height={100}
                            className='w-[70px] h-[70px] rounded-full'
                        />
                    }
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-lg font-medium">{user?.name}</h3>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Button variant="outline" className="w-full" onClick={onSignOut}>
                        Sign Out
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Settings