import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";
import {NextResponse} from "next/server";


export async function middleware(req: any){
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req: req, res: res});
    const {data: {user}} = await supabase.auth.getUser();

    if(user && req.nextUrl.pathname==='/'){
        return NextResponse.redirect(new URL('/projects', req.url));
    }
    if(!user && req.nextUrl.pathname!=='/'){
        return NextResponse.redirect(new URL('/login', req.url));
    }
    return res;
}

export const config = {
    matcher: ['/','/projects']
}