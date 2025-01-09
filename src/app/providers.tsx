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
// import { SessionProvider } from "next-auth/react";
import { GoogleOAuthProvider } from '@react-oauth/google';

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient(
    // { defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } }

)

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;



export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter();

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
                    {/* <SessionProvider> */}
                    <GoogleOAuthProvider clientId={clientId || ''}>
                        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>

                    </GoogleOAuthProvider>
                    {/* </SessionProvider> */}
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