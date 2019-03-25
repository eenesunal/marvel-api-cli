import MD5 from "crypto-js/md5"

const API = "https://gateway.marvel.com/v1/public/"
const TIME_STAMP = new Date().getTime()
const PUBLIC_KEY = "458f6c63683c89d3b7a2dc77b8514cf2"
const PRIVATE_KEY = "26105905d1e8199838c01dbb5b3cb3cc17fd4d2a"
const HASH = MD5(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY).toString()

export const getJSON = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "GET"
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const doRequest = (request) => {
    if (!request.headers) {
        request.headers = {}
    }
    if (request.method !== "GET" && !request.headers.hasOwnProperty("Content-Type")) {
        request.headers["Content-Type"] = "application/x-www-form-urlencoded"
        request.body = encodeParameters(request.body)
    }
    if (!request.headers.hasOwnProperty("Accept")) {
        request.headers["Accept"] = "application/json"
    }
    if (!request.headers.hasOwnProperty("Authorization") && request.accessToken) {
        request.headers["Authorization"] = `Bearer ${request.accessToken}`
    }

    return new Promise((resolve, reject) => {
        if (request) {
            let nameStartsWith = request.nameStartsWith ? 'nameStartsWith=' + request.nameStartsWith : ""
            let name = request.name ? '&name=' + request.name : ""
            let limit = request.limit ? '&limit=' + request.limit : ""
            let offset = request.offset ? '&offset=' + request.offset : ""
            let apiKey = `&apikey=${PUBLIC_KEY}`
            let hash = `&hash=${HASH}`

            let params = nameStartsWith + name + limit + offset + apiKey + hash

            if (params.charAt(0) === "&") params = params.substr(1)
            if (params.charAt(params.length - 1) === "&") params = params.substring(0, params.length - 1)

            const url = `${API + request.url}?${params}`

            fetch(new Request(url, request)).then((response) => {
                response.traceId = response.headers.get("x-trace-id")
                if (response.status < 400) {
                    return resolve(response)
                }
                return reject(response)
            }).catch((response) => {
                if (response.headers) {
                    response.traceId = response.headers.get("x-trace-id")
                }
                return reject(response)
            })
        }
    })
}

const encodeParameters = (params) => {
    const formBody = []
    for (const property in params) {
        const encodedKey = encodeURIComponent(property)
        const encodedValue = encodeURIComponent(params[property])
        formBody.push(`${encodedKey}=${encodedValue}`)
    }
    return `${formBody.join("&")}`
}