import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = request.nextUrl.searchParams.get('token') as string;
    
    if (path === '/account' && token) {
        // Create a response object to set the cookie
        const response = NextResponse.next();
    
        // Set the token in a cookie
        const cookie = `token=${token};`
        response.headers.append('Set-Cookie', cookie);
        return response;
      }


    if(! request.cookies.get('token')){
        return NextResponse.redirect(new URL('/', request.url))
    }
}


export const config = {
  matcher: ['/account','/summary']
}