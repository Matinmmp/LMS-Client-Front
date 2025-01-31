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
