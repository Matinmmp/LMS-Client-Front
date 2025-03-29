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

export const getBlogsByCategories = async () => {
    try {
        const data = await customFetch(`/getBlogsByCategories`, {
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

export const getBlogsByCategory = async ({slug}:{slug:string}) => {
    try {
        const data = await customFetch(`/getBlogsByCategory/${slug}`, {
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


export const searchBlogs = async (search: any) => {
    try {
        const data = await customFetch(`/searchBlogs`, {
            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify(search),
            headers: { 'Content-Type': 'application/json' },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

