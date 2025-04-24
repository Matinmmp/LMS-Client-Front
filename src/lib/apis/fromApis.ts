import { customFetch } from "../fetcher";


export const sendFormEmail = async ({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) => {
    try {
        const data = await customFetch(`/sendFormEmail`, {
            method: 'POST',
         
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message }),
        }
        );
        return await data;
    } catch (error) {
        return error
    }
}

