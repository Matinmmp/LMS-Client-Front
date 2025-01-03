import { customFetch } from "../fetcher";



export const getCourseComments = async ({ name, currentPage }: { name: string, currentPage: number }) => {
    try {
        const data = await customFetch(`/getCourseComments/${name}?page=${currentPage}`, {
            method: 'POST',
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

