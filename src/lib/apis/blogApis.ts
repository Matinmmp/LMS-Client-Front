import { customFetch } from "../fetcher";


export const getRelatedBlogsByCourseName = async (name:string) => {
    try {
        const data = await customFetch(`/getRelatedBlogsByCourseName/${name}`, {
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

