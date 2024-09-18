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

export const signUp = async ({ name,email, password }: { name:string,email: string, password: string }) => {
    const data = await customFetch('registration',
        {
            method: 'POST',
            credentials: 'include' as const,
            body: JSON.stringify({ name,email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}
