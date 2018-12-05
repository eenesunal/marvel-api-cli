const API = "https://gateway.marvel.com/v1/public/"
const API_KEY = "458f6c63683c89d3b7a2dc77b8514cf2"

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
            let limit = request.limit ? 'limit=' + request.limit : ""
            let offset = request.offset ? 'offset=' + request.offset : ""
            let apiKey = `apikey=${API_KEY}`

            let params = `${nameStartsWith}&${limit}&${offset}&${apiKey}`

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