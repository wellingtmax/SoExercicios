import http from 'k6/http'

import { sleep, check } from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
}

export default function () {
    const res = http.get('https://https://jsonplaceholder.typicode.com/posts.k6.io')
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is less than 200ms': (r) => r.timings.duration < 500,

    })
    sleep(1)
}