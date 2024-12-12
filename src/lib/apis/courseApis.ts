import { customFetch } from "../fetcher";

export const getCourseByName = async (name: string) => {
    try {
        const data = await customFetch(`/get-course/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-store'
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getCourseDataByNameNoLoged = async (name: string) => {
    try {
        const data = await customFetch(`/getCourseDataByNameNoLoged/${name}`, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include',
        });
        return await data;
    } catch (error) {
        return error
    }
}

export const getCourseDataByNameLoged = async (name: string) => {
    try {
        const data = await customFetch(`/getCourseDataByNameLoged/${name}`, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include',
        });
        return await data;
    } catch (error) {
        return error
    }
}