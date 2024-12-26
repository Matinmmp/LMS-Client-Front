import { customFetch } from "../fetcher";


// revalidate 3600

const getAcademies = async () => {
    try {
        const data = await customFetch('/academies', {
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

const getAcademyByName = async (name: string) => {
    try {
        const data = await customFetch(`/getAcademyByName/${name}`, {
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

const getAcademyCoursesByEngName = async (name: string) => {
    try {
        const data = await customFetch(`/getAcademyCoursesByEngName/${name}`, {method: 'GET',});
        return await data;
    } catch (error) {
        return error
    } 
}

const getAcademyTeachersByEngName = async (name: string) => {
    try {
        const data = await customFetch(`/getAcademyTeachersByEngName/${name}`, {
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

const getAllAcademyNames = async () => {
    try {
        const data = await customFetch(`/getAllAcademyNames`, {
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


export {
    getAcademies,
    getAcademyByName,
    getAcademyCoursesByEngName,
    getAcademyTeachersByEngName,
    getAllAcademyNames
}


