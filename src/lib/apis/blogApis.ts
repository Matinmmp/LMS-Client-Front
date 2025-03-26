import { customFetch } from "../fetcher";


export const getBlogsInSlider = async () => {
    try {
        const data = await customFetch(`/getBlogsInSlider`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getSpecialBlogs = async () => {
    try {
        const data = await customFetch(`/getSpecialBlogs`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getOldestAndPopularBlogs = async () => {
    try {
        const data = await customFetch(`/getOldestAndPopularBlogs`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getLatestBlogs = async () => {
    try {
        const data = await customFetch(`/getLatestBlogs`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}



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

