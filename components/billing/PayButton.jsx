import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useUser } from '@/app/provider'
import { supabase } from '@/services/supabaseClient'

const PayButton = ({ amount, credits }) => {
    const { user } = useUser();

    const onPaymentSuccess = async () => {
        await supabase
            .from('Users')
            .update({ credits: Number(user?.credits) + credits })
            .eq('email', user?.email);
            
        toast('Credit Updated');
        window.location.reload();
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full">Purchase Credits</Button>
                </DialogTrigger>
                <DialogContent style={{ maxWidth: "450px" }}>
                    <DialogHeader>
                        <DialogTitle>Checkout</DialogTitle>
                        <DialogDescription asChild className="max-h-[400px] overflow-scroll">
                            <PayPalButtons style={{ layout: "vertical" }}
                                onApprove={() => onPaymentSuccess()}
                                onCancel={() => toast('Payment Canceled!')}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: amount,
                                                    currency_code: 'USD'
                                                }
                                            }
                                        ]
                                    })
                                }}
                            />

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PayButton