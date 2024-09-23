import { customFetch } from "../fetcher"

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

export const registration = async ({ name,email, password }: { name:string,email: string, password: string }) => {
    const data = await customFetch('registration',
        {
            method: 'POST',
            credentials: 'include' as const,
            body: JSON.stringify({ name,email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}

export const activation = async ({ activation_code,activation_token}: { activation_code:string,activation_token: string }) => {
    const data = await customFetch('activate-user',
        {
            method: 'POST',
            credentials: 'include' as const,
            body: JSON.stringify({ activation_code,activation_token}),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}
