import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const getReq = (url, data) => {
    let urlParams = "";
    if (data && data.length) {
        urlParams = '/';
        for (const dataKey in data) {
            urlParams += `&${dataKey}=${data[dataKey]}`;
        }
    }
    return instance.get(url + urlParams)
}

export const postReq = (url, data) => {
    return instance.post(url, data)

}

export const deleteReq = (url) => {
    return instance.delete(url)

}

export const patchReq = (url, data) => {
    return instance.patch(url, data)
}
