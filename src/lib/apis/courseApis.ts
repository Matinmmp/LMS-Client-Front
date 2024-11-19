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