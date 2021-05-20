export const FetchData = (url) => {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            })
    })
}