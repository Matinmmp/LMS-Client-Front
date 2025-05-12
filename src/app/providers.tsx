"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider, useMutation, useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUserInfo } from "../lib/apis/userApis";
import { userLoggedIn } from "../redux/auth/authSlice";
import { getRefreshTokenFromCookies } from "../lib/fetcher";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"
import { usePostHog } from 'posthog-js/react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } })

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();

    // useEffect(() => {
    //     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    //         api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',

    //         // ✅ فعال کردن پروفایل کاربران ناشناس (Anonymous Users)
    //         person_profiles: 'always',

    //         // ✅ غیرفعال کردن اتوماتیک pageview، چون می‌خوای خودت دستی بزنی
    //         capture_pageview: false,

    //         // ✅ فعال‌سازی ترک زمانی که کاربر از صفحه خارج میشه (صفحه رو ترک می‌کنه)
    //         capture_pageleave: true,

    //         // ✅ ذخیره user_id در کوکی
    //         autocapture: true, // ترک خودکار رویدادهای کلیدی مثل کلیک، سابمیت و ...

    //         // ✅ کوکی‌ها رو دامنه‌ی ساب‌دامین‌ها به اشتراک بذار (اگر پروژه چنددامنه‌ایه)
    //         cross_subdomain_cookie: true,

    //         // ✅ تعیین مدت نگهداری کوکی‌ها
    //         persistence: 'localStorage+cookie', // برای اینکه هم کوکی باشه هم در localStorage باشه (پایداری بهتر)

    //         enable_recording_console_log:true,
    //         // ✅ تگ زدن با نسخه فرانت یا ورژن (برای دیباگ بعداً)
    //         loaded: (posthogInstance) => {
    //             posthogInstance.register({
    //                 frontend_version: '1.0.0',
    //             })
    //         },

    //         // ✅ برای تست: Console log رو روشن کن
    //         debug: process.env.NODE_ENV === 'development',
    //     })
    // }, [])


    return (
        <QueryClientProvider client={queryClient}>

            <NextUIProvider navigate={router.push}>
                <Provider store={store}>
                    <RequestProviders></RequestProviders>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={true}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                    <GoogleOAuthProvider clientId={clientId || ''}>

                        <NextThemesProvider {...themeProps}>
                        {children}
                            {/* <PHProvider client={posthog}>
                                <SuspendedPostHogPageView />
                               
                            </PHProvider> */}
                        </NextThemesProvider>

                    </GoogleOAuthProvider>

                </Provider>
            </NextUIProvider>
        </QueryClientProvider>
    );
}

function RequestProviders() {
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.auth)
    const getUserQuery = useQuery({ queryKey: ['getUserQuery'], queryFn: () => getUserInfo(), enabled: !!getRefreshTokenFromCookies() });



    React.useEffect(() => {
        let data: any = {};
        if (user)
            data.user = user;
        if (!getUserQuery.isLoading && !getUserQuery.isError && getUserQuery.data)
            data = getUserQuery.data;

        if (!getUserQuery.isLoading && getUserQuery.isSuccess) {
            data.error = false;
            dispatch(userLoggedIn(data));
        }

        if (!getUserQuery.isLoading && getUserQuery.isError) {
            data.loading = false;
            data.error = true;
            dispatch(userLoggedIn(data));
        }

        if (getUserQuery.isLoading) {
            data.loading = true;
            data.error = false;
            dispatch(userLoggedIn(data));
        }

        if (!getUserQuery.isLoading && getUserQuery.isFetched) {
            data.loading = false;
            dispatch(userLoggedIn(data));
        }
    }, [getUserQuery])

    return (<></>)
}



// function PostHogPageView() {
//     const pathname = usePathname()
//     const searchParams = useSearchParams()
//     const posthog = usePostHog()

//     // Track pageviews
//     useEffect(() => {
       
//         if (pathname && posthog) {
//             let url = window.origin + pathname
//             if (searchParams.toString()) {
//                 url = url + "?" + searchParams.toString();
//             }
//             console.log(url)
//             posthog.capture('$pageview', { '$current_url': url })
//         }
//     }, [pathname, searchParams, posthog])

//     return null
// }

// Wrap PostHogPageView in Suspense to avoid the useSearchParams usage above
// from de-opting the whole app into client-side rendering
// See: https://nextjs.org/docs/messages/deopted-into-client-rendering
// export function SuspendedPostHogPageView() {
//     return (
//         <Suspense fallback={null}>
//             <PostHogPageView />
//         </Suspense>
//     )
// }




