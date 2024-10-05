import { customFetch } from "../fetcher"


// revalidate 3600
const getHomeLastCourses = async () => {
    try {
        const data = await customFetch('get-home-last-courses', {
            method: 'GET', credentials: 'include',
            //  next: { revalidate: 3600 }
            cache:'no-store'
        }
        );
        return await data;
    } catch (error) {
        return error
    }
    
}

// revalidate 3600
const getHomeFavoritCourses = async () => {
    try {
        const data = await customFetch('/get-home-favorite-courses', {
            method: 'GET', credentials: 'include',
            //  next: { revalidate: 3600 }
            cache:'no-store'
        }
        );
        return await data;
    } catch (error) {
        return error
    }
    
}

const getHomeFavoritAcademies = async () => {
    try {
        const data = await customFetch('/get-home-favorite-academy', {
            method: 'GET', credentials: 'include',
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
    getHomeLastCourses,
    getHomeFavoritCourses,
    getHomeFavoritAcademies
}