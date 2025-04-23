"use client";

import React, { useEffect } from 'react'
import AppSideBar from '@/components/dashboard/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar'
import WelcomeContainer from '@/components/dashboard/WelcomeContainer'
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient'

const DashboardProvider = ({ children }) => {
    const router = useRouter();
    const { user, setUser } = useUser();

    const createNewUser = async () => {
        supabase.auth.getUser().then(async ({ data: { user } }) => {
            if (!user) {
                router.replace('/auth')
            }
            if (user) {
                let { data: Users, error } = await supabase
                .from('Users')
                .select("*")
                .eq('email', user.email)

                if (Users?.length === 0) {
                    const { data, error } = await supabase
                    .from('Users')
                    .insert([
                    { 
                        name: user?.user_metadata?.name, 
                        email: user?.email, 
                        picture: user?.user_metadata?.picture,                     
                    },
                    ]).select();
                    setUser(data[0]);
                } else {
                    setUser(Users[0]);
                }
            }            
        })
    } 

    useEffect(() => {
        createNewUser();
      }, []);

    return (  
        <SidebarProvider>
            <AppSideBar />
            <div className="w-full p-10">
                <WelcomeContainer />
                {children}
            </div>
        </SidebarProvider>
    );
}

export default DashboardProvider;
