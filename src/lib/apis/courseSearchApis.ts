import { customFetch } from "../fetcher";



const searchCourse = async (search: any) => {
    try {
        const data = await customFetch(`/searchCourses`, {
            method: 'POST',
            
            body: JSON.stringify(search),
            headers: { 'Content-Type': 'application/json' },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export {
    searchCourse
}