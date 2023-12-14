const { test, expect } = require("@playwright/test");

test("API GET request", async ({ request }) => {
  const petId = 5;

  const response = await request.get(
    `https://petstore.swagger.io/v2/pet/${petId}`
  );

  expect(response.status()).toBe(200);

  const responseJson = await response.json();
  expect(responseJson.id).toBe(petId);
});

test("API POST request", async ({ request }) => {

  const orderId = 9223372036854255000;
  const petId = 5;
  
  const response = await request.post(
    `https://petstore.swagger.io/v2/store/order`,
    {
      data: {
        id: orderId,
        petId: petId,
        quantity: 1,
        shipDate: "2023-12-14T09:55:37.803Z",
        status: "placed",
        complete: true,
      },
    }
  );

  expect(response.status()).toBe(200);

  const responseJson = await response.json();
  expect(responseJson.id).toBe(orderId);
  expect(responseJson.petId).toBe(petId);
});
