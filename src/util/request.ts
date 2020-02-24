import axios, { CancelToken, CancelTokenSource } from "axios";

export function sanitize(s: string): string {
    return s.replace(/(%|\*|\+|\?|\{|\}|\(|\)|\[|\])/u, "\\$1");
}

export function cancelTokenSource(): CancelTokenSource {
    return axios.CancelToken.source();
}

export function getCancelToken(): CancelToken {
    return cancelTokenSource().token;
}

export async function externalRequest<T>(
    endpoint: string,
    token: CancelToken | null = null
): Promise<T> {
    const url = `${endpoint}`;
    if (token == null) return axios.get(url).then(resp => resp.data as T);
    return axios.get(url, { cancelToken: token }).then(resp => resp.data as T);
}
