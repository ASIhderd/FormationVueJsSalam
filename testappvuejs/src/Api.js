import axios from 'axios'

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        common: {
            Accept: 'application/json'
        },
        patch: {
            'Content-Type': 'application/merge-patch+json'
        }
    }

});

export default instance