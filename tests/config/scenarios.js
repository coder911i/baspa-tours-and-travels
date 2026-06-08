export const scenarios = {
    load: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '10s', target: 10 },
            { duration: '20s', target: 10 },
            { duration: '10s', target: 0 },
        ],
        gracefulRampDown: '10s',
    },
    stress: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '15s', target: 25 },
            { duration: '30s', target: 25 },
            { duration: '15s', target: 0 },
        ],
    },
    spike: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '5s', target: 40 },
            { duration: '15s', target: 40 },
            { duration: '5s', target: 0 },
        ],
    },
    soak: {
        executor: 'constant-vus',
        vus: 5,
        duration: '1m',
    },
};
