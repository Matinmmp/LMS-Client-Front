interface FetchOptions extends RequestInit {
    authRequired?: boolean;
}

interface RefreshTokenResponse {
    accessToken: string;
}

export async function customFetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
    // گرفتن اکسس توکن از کوکی‌ها
    let accessToken = getAccessTokenFromCookies();

    options.headers = { ...options.headers };


    let response = await fetch(url, options);

    // اگر توکن منقضی شده باشد
    if (response.status === 401) {
        const newAccessToken = await refreshAccessToken();

        if (newAccessToken)
            response = await fetch(url, options);
    }

    // بررسی و هندل کردن ارور‌ها
    if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
    }

    // تبدیل به JSON
    const data: T = await response.json();
    return data;
}

function getAccessTokenFromCookies(): string | null {
    const cookieString = typeof document !== 'undefined' ? document.cookie : '';
    const accessToken = cookieString.split('; ').find(row => row.startsWith('accessToken='))?.split('=')[1];
    return accessToken || null;
}

async function refreshAccessToken(): Promise<string | null> {
    try {
        const response = await fetch(`${process.env.NEXT_PRIVTE_BASE_URL}/refresh-token`, {
            method: 'GET',
            credentials: 'include', // برای ارسال کوکی‌ها
        });

        if (!response.ok) throw new Error('Unable to refresh token');

        const data: RefreshTokenResponse = await response.json();
        // ذخیره کردن توکن جدید در کوکی‌ها
        return data.accessToken;

    } catch (error) {
        console.error('Token refresh failed', error);
        return null;
    }
}
