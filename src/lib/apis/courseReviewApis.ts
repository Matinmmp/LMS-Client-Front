import { customFetch } from "../fetcher";



export const getCourseComments = async ({ name, currentPage }: { name: string, currentPage: 1 }) => {
    try {
        const data = await customFetch(`/getCourseComments/${name}`, {
            method: 'POST',
            body: JSON.stringify({ page: currentPage, limit: 10 }),
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

