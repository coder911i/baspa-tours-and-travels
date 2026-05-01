import http from 'k6/http';
import { check, sleep } from 'k6';
import { scenarios } from '../config/scenarios.js';

export const options = {
    scenarios: {
        stress_test: scenarios.stress,
    },
    // No strict thresholds for stress testing as we expect some failures at extreme load
};

const BASE_URL = 'https://baspa-tours-and-travels-9y8v.vercel.app';

export default function () {
    const res = http.get(`${BASE_URL}/`);
    
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 5000ms': (r) => r.timings.duration < 5000,
    });

    sleep(0.5); // Faster hitting for stress test
}
