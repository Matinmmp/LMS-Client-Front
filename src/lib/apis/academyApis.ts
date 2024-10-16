import { customFetch } from "../fetcher";


// revalidate 3600

const getAcademies= async () => {
    try {
        const data = await customFetch('/academies', {
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
    getAcademies
}