"use client";

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { CreditCard, Plus, Zap } from "lucide-react"
import { useUser } from '@/app/provider'
import PayButton from '@/components/billing/PayButton'

const Billing = () => {
    const { user } = useUser();

    return (
        <main className="flex-1 p-4 md:p-6">
            <div className="mx-auto grid max-w-6xl gap-6">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
                    <p className="text-muted-foreground">Manage your Payment and credits</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 flex-wrap">
                    <Card className="md:col-span-2 lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Your Credits</CardTitle>
                            <CardDescription>Current usage and remaining credits</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">

                            <div className="rounded-lg border bg-card p-4 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                        <CreditCard className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-blue-600">{user?.credits} interviews left</p>
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <Plus className="mr-2 h-4 w-4" />
                                Add More Credits
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Purchase Credits</CardTitle>
                            <CardDescription>Add more interview credits to your account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">Basic</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">$5</div>
                                        <p className="text-sm text-muted-foreground">20 interviews</p>
                                        <ul className="mt-4 grid gap-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>Basic interview templates</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>Email support</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <PayButton amount={5} credits={20} />
                                    </CardFooter>
                                </Card>
                                <Card className="border-blue-200 bg-blue-50/50">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">Standard</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">$10</div>
                                        <p className="text-sm text-muted-foreground">50 interviews</p>
                                        <ul className="mt-4 grid gap-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>All interview templates</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>Priority support</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>Basic analytics</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <PayButton amount={10} credits={50} />
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">Pro</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">$20</div>
                                        <p className="text-sm text-muted-foreground">120 interviews</p>
                                        <ul className="mt-4 grid gap-2 text-sm">
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>All interview templates</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>24/7 support</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                <span>Advanced analytics</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <PayButton amount={20} credits={120} />
                                    </CardFooter>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Billing