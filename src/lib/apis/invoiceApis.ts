import { customFetch } from "../fetcher";

export const getUserInvoices = async () => {
    const data = await customFetch('getUserInvoices',
        {
            method: 'GET',
            credentials: 'include' as const,
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}

export const initiatePayment = async (courses: any[]) => {
    const data = await customFetch('initiatePayment', {
        method: 'POST',
        credentials: 'include' as const,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courses })
    })
    return await data;

}
export const verifyPayment = async ({ Authority, Status, invoiceId }: { Authority: string, Status: string, invoiceId: string }) => {
    const data = await customFetch(`verifyPayment?invoiceId=${invoiceId}&Authority=${Authority}&Status=${Status}`, {
        method: 'GET',
        credentials: 'include' as const,
        headers: { 'Content-Type': 'application/json' },
    })
    return await data;

}
