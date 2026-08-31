import { test, expect } from '@playwright/test';

// Global setup that runs once per worker
test.beforeAll(() => {
    console.log('BeforeAll hook: Should run just once per worker');
});

// Setup that runs before each test
test.beforeEach(() => {
    console.log('BeforeEach: Should run before all the tests in this file');
});

// Test suite
test.describe('Test suite 1', () => {
    
    // Suite-level global setup
    test.beforeAll(() => {
        console.log('Suite 1: beforeAll describe scope...');
    });

    // Setup that runs before each test in this suite
    test.beforeEach(() => {
        console.log('Suite 1: BeforeEach at describe level...');
    });

    // First test case
    test('test one', async ({ page }) => {
        console.log('Running test one...');
        await page.goto('https://www.google.com');
        expect(await page.title()).toContain('Google');
    });

    // Second test case
    test('test two', async ({ page }) => {
        console.log('Running test two...');
        await page.goto('https://www.example.com');
        expect(await page.title()).toContain('Example Domain');
    });
});