import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:5173',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Laptop_Screen',
            use: { viewport: { width: 1366, height: 768 } },
        },
        {
            name: 'Full_HD',
            use: { viewport: { width: 1920, height: 1080 } },
        },
        {
            name: 'WQHD',
            use: { viewport: { width: 2560, height: 1440 } },
        },
        {
            name: 'Ultrawide_21:9',
            use: { viewport: { width: 3440, height: 1440 } },
        },
    ],
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173',
        reuseExistingServer: !process.env.CI,
    },
});