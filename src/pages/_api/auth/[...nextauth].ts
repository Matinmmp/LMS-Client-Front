import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '815509450248-520a6obdhgu8r3u3o7iqk0u8barari60.apps.googleusercontent.com',
            clientSecret: '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',
            authorization: {
                params: {
                    scope: "openid email profile",
                },
            },
        })
    ],
    debug: true,
    secret: "Virtaul Learn"
    // process.env.NEXT_PUBLIC_SECRET
}

console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)

export default NextAuth(authOptions)
