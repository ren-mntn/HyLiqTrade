import { API_BASE_URL } from '../constants';

export const fetchJson = async <T>(endpoint: string, params?: Record<string, string>): Promise<T> => {
    const url = new URL(endpoint, API_BASE_URL);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<T>;
};
