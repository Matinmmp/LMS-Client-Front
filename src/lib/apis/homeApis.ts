import { customFetch } from "../fetcher"

const getHomeLastCourses = async () => {
    try {
        const data = await customFetch('get-home-last-courses', { method: 'GET', credentials: 'include' });
     

        return await data;
    } catch (error) {
        
        return error
    }

}

export {
    getHomeLastCourses
}