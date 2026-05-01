import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios } from '../config/scenarios.js';

export const options = {
    scenarios: {
        soak_test: scenarios.soak,
    },
};

const BASE_URL = 'https://baspa-tours-and-travels-9y8v.vercel.app';

export default function () {
    const res = http.get(`${BASE_URL}/`);
    
    check(res, {
        'status is 200': (r) => r.status === 200,
        'no memory leak indicators': (r) => r.status !== 500,
    });

    sleep(1);
}
