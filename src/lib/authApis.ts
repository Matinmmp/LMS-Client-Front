import { customFetch } from "./fetcher"

export const login = async ({ email, password }: { email: string, password: string }) => {
    const data = await customFetch('login',
        {
            method: 'POST',
            credentials: 'include' as const,
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}


export const getUserInfo = async () => {
    const data = await customFetch('user', { method: 'GET', credentials: 'include' });
    return await data;
}