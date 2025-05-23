// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const refreshToken = request.cookies.get('refresh_token')?.value;
 
    if (!refreshToken) {
        return NextResponse.redirect(new URL('/?openLogin=true', request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/profile/:path*'], 
};