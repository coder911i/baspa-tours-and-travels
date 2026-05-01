import http from 'k6/http';
import { check, sleep } from 'k6';
import { thresholds } from '../config/thresholds.js';
import { scenarios } from '../config/scenarios.js';

export const options = {
    scenarios: {
        load_test: scenarios.load,
    },
    thresholds: thresholds,
};

const BASE_URL = 'https://baspa-tours-and-travels-9y8v.vercel.app';

export default function () {
    const responses = http.batch([
        ['GET', `${BASE_URL}/`],
        ['GET', `${BASE_URL}/tours`],
        ['GET', `${BASE_URL}/contact`],
        ['GET', `${BASE_URL}/about`],
    ]);

    responses.forEach((res) => {
        check(res, {
            'status is 200': (r) => r.status === 200,
            'response time < 3000ms': (r) => r.timings.duration < 3000,
            'body is not empty': (r) => r.body && r.body.length > 0,
            'no error in body': (r) => !r.body.includes('error') && !r.body.includes('Internal Server Error'),
        });
    });

    sleep(1);
}
