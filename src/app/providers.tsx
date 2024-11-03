"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getUserInfo } from "../lib/apis/userApis";
import { userLoggedIn } from "../redux/auth/authSlice";
import { getRefreshTokenFromCookies } from "../lib/fetcher";
import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } })

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
                    <SessionProvider>
                        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
                    </SessionProvider>
                </Provider>
            </NextUIProvider>
        </QueryClientProvider>
    );
}

function RequestProviders() {
    const dispatch = useDispatch();


    const getUserMutation = useMutation({
        mutationFn: () => getUserInfo(),
        onMutate: () => dispatch(userLoggedIn({ loading: true })),
        onSuccess: (e) => dispatch(userLoggedIn(e)),
        onError: (e: any) => {
            e.loading = false;
            dispatch(userLoggedIn(e));
        },
        onSettled: (e: any) => {
            e.loading = false;
            dispatch(userLoggedIn(e));
        }
    })
    React.useEffect(() => {
        const haveRefrshToken = getRefreshTokenFromCookies()
        if (haveRefrshToken)
            getUserMutation.mutate();
    }, [])

    return (<></>)
}