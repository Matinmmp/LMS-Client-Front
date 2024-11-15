import { customFetch } from "../fetcher"

export const getUserInfo = async () => {
    const data = await customFetch('user', { method: 'GET', credentials: 'include' });
    return await data;
}

export const uploadAvatar = async (avatar: string | ArrayBuffer | null) => {

    const data = await customFetch('update-user-avatar',
        {
            method: 'PUT',
            credentials: 'include' as const,
            body: JSON.stringify({ avatar }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}

export const editUserInfo = async ({ name, phone }: { name: string, phone: string }) => {

    const data = await customFetch('update-user-info',
        {
            method: 'PUT',
            credentials: 'include' as const,
            body: JSON.stringify({ name, phone }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}

export const updateUserPassword = async ({ oldPassword, newPassword }: { oldPassword: string, newPassword: string }) => {

    const data = await customFetch('update-user-password',
        {
            method: 'PUT',
            credentials: 'include' as const,
            body: JSON.stringify({ oldPassword, newPassword }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}

export const setUserPassword = async (password: string) => {
    const data = await customFetch('set-user-password',
        {
            method: 'PUT',
            credentials: 'include' as const,
            body: JSON.stringify({ password }),
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}

export const getFactor = async () => {
    const data = await customFetch('get-invoice',
        {
            method: 'GET',
            credentials: 'include' as const,
            headers: { 'Content-Type': 'application/json' },
        });
    return await data;
}