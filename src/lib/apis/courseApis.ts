import { customFetch } from "../fetcher";

export const getCourseByName = async (name: string) => {
    try {
        const data = await customFetch(`/get-course/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-cache'
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getCourseDataByNameNoLoged = async (name: string) => {
    try {
        const data = await customFetch(`/getCourseDataByNameNoLoged/${name}`, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include',
        });
        return await data;
    } catch (error) {
        return error
    }
}

export const getCourseDataByNameLoged = async (name: string) => {
    try {
        const data = await customFetch(`/getCourseDataByNameLoged/${name}`, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include',
        });
        return await data;
    } catch (error) {
        return error
    }
}

export const getAllCourseUrlNames = async () => {
    try {
        const data = await customFetch(`/getAllCourseUrlNames`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'force-cache'
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getRelatedCourses = async (name: string) => {
    try {
        const data = await customFetch(`/getRelatedCourses/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 }
            cache: 'no-cache'
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const postComment = async ({ comment, courseId, commentId }: { comment: string, courseId: string, commentId?: string }) => {
 
        const data = await customFetch(`/postComment`, {
            method: 'Post',
            credentials: 'include' as const,
            body: JSON.stringify({ comment, courseId, commentId }),
            headers: { 'Content-Type': 'application/json' },
        }
        );
        return await data;
 
}

