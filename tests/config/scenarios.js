export const scenarios = {
    load: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '30s', target: 1000 },
            { duration: '60s', target: 10000 },
            { duration: '120s', target: 100000 },
            { duration: '60s', target: 100000 },
            { duration: '30s', target: 0 },
        ],
        gracefulRampDown: '30s',
    },
    stress: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '2m', target: 10000 },
            { duration: '5m', target: 50000 },
            { duration: '10m', target: 150000 },
            { duration: '2m', target: 0 },
        ],
    },
    spike: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
            { duration: '5s', target: 50000 },
            { duration: '1m', target: 50000 },
            { duration: '5s', target: 0 },
        ],
    },
    soak: {
        executor: 'constant-vus',
        vus: 10000,
        duration: '1h',
    },
};
