import { customFetch } from "../fetcher";


export const getCartCourses = async (courseIds: []) => {
    try {
        const data = await customFetch(`/getCartCourses`, {
            method: 'POST',
            body: JSON.stringify({ courseIds }),
            headers: { 'Content-Type': 'application/json' },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

