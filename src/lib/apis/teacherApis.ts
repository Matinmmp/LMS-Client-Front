import { customFetch } from "../fetcher";


// revalidate 3600

const getTeachers = async () => {
    try {
        const data = await customFetch('/teachers', {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache:'no-store'
        }
        );
        return await data;
    } catch (error) {
        return error
    } 
}


export {
    getTeachers
}