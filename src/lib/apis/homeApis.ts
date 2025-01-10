import { customFetch } from "../fetcher"


// revalidate 3600
const getHomeLastCourses = async () => {
    try {
        const data = await customFetch('get-home-last-courses', {
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

// revalidate 3600
const getHomeFavoritCourses = async () => {
    try {
        const data = await customFetch('/get-home-favorite-courses', {
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

const getDiscountedCourses = async () => {
    try {
        const data = await customFetch('/getDiscountedCourses', {
            method: 'GET',
            cache: 'no-store'
        }
        );
        return await data;
    } catch (error) {
        return error
    }

}

// revalidate 3600
const getHomeFavoritAcademies = async () => {
    try {
        const data = await customFetch('/get-home-favorite-academy', {
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

// revalidate 3600
const getHomeFavoritTeachers = async () => {
    try {
        const data = await customFetch('/get-home-favorite-teachers', {
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

const homeSearch = async (search: string) => {
    try {
        const data = await customFetch(`/home-search?query=${search}`, { method: 'GET', });
        return await data;
    } catch (error) {
        return error
    }
}

export {
    getHomeLastCourses,
    getHomeFavoritCourses,
    getHomeFavoritAcademies,
    getHomeFavoritTeachers,
    homeSearch,
    getDiscountedCourses
}