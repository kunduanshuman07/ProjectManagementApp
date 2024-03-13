import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your email" },
                password: { label: "Password", type: "Enter your password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
                const email = credentials.email;
                const password = credentials.password;
                const cookieStore = cookies();
                const supabase = createServerComponentClient({ cookies: () => cookieStore })
                const { data } = await supabase.from('pm-users').select('*').match({ email: email });
                if (data?.[0].password === password) {
                    return { message: 'Login Succesfull', data };
                }
                return { message: 'Invalid Credentials', data: null }

            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };