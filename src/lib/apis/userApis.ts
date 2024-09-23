import { customFetch } from "../fetcher"

export const getUserInfo = async () => {
    const data = await customFetch('user', { method: 'GET', credentials: 'include' });
    return await data;
}