import React from "react"
import { cookies } from 'next/headers'


type Props = {
    children: React.ReactNode,

}

const LoginChecker = async ({ children }: Props) => {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token');

    if (refresh_token)
        return (children)
}

export default LoginChecker