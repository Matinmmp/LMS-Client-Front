import { customFetch } from "../fetcher";

export const getCourseByName = async (name: string, refresh_token: any, access_token: any) => {
    try {
        const data = await customFetch(`/get-course/${name}`, {
            method: 'GET',
            //  next: { revalidate: 3600 },
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json",
                "Cookie": `refresh_token=${refresh_token};access_token=${access_token}`,
            },
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

export const getCourseDataByNameNoLoged = async (name: string) => {

    const data = await customFetch(`/getCourseDataByNameNoLoged/${name}`, {
        method: 'GET',
 
    });
    return await data;

}

export const getCourseDataByNameLoged = async (name: string) => {

    const data = await customFetch(`/getCourseDataByNameLoged/${name}`, {
        method: 'GET',
 
        credentials: 'include',
    });
    return await data;

}

export const getAllCourseUrlNames = async () => {
    try {
        const data = await customFetch(`/getAllCourseUrlNames`, {
            method: 'GET',
            //  next: { revalidate: 3600 },
            cache: 'no-store',
            // cache: 'force-cache'
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
    }
    catch (error) {
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

export const rateCourse = async ({ courseId, rating }: { courseId: string, rating: any }) => {

    const data = await customFetch(`/rateCourse`, {
        method: 'Post',
        credentials: 'include' as const,
        body: JSON.stringify({ courseId, rating }),
        headers: { 'Content-Type': 'application/json' },
    }
    );
    return await data;

}

export const recordCourseView = async ( courseId: string) => {
    
    const data = await customFetch(`/recordCourseView/${courseId}`, {
        method: 'Get',
        headers: { 'Content-Type': 'application/json' },
    }
    );
 
    return await data;

}
