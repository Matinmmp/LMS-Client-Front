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

const getTeacherByName = async (name: string) => {
    try {
        const data = await customFetch(`/getTeacherByEngName/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 },
            cache: 'no-store',
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

const getTeacherCoursesByEngName = async (name: string) => {
    try {
        const data = await customFetch(`/getTeacherCoursesByEngName/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
             
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

const getTeachersAcademiesByEngName = async (name: string) => {
    try {
        const data = await customFetch(`/getTeachersAcademiesByEngName/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
         
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

const getAllTeachersName = async () => {
    try {
        const data = await customFetch(`/getAllTeachersName`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
             
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}


export {
    getTeachers,
    getTeacherByName,
    getTeacherCoursesByEngName,
    getTeachersAcademiesByEngName,
    getAllTeachersName
}