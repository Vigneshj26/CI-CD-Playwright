import { expect, test } from '@playwright/test';

test('Testing API - GET user', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/6');

    // Check status
    expect(response.status()).toBe(200);

    // Parse response as JSON
    const res = await response.json();

    // Log the response
    console.log(JSON.stringify(res, null, 2));

    // Optional: Validate some response fields
    expect(res.data).toHaveProperty('id', 6);
    expect(res.data).toHaveProperty('email');
    expect(res.data.first_name).toBe('Tracey');
});
