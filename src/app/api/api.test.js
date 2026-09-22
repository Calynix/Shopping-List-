import { POST as register } from './register/route';
import { POST as join } from './join/route';
import { POST as addItem } from './addItem/route';
import { shoppingLists } from './data';

function jsonRequest(body) {
  return new Request('http://localhost/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  Object.keys(shoppingLists).forEach((code) => {
    delete shoppingLists[code];
  });
});

describe('shopping list API', () => {
  test('registers an empty shopping list and returns its code', async () => {
    const response = await register();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.code).toHaveLength(6);

    expect(shoppingLists[data.code]).toEqual({
      items: [],
      members: [],
    });
  });

  test('joins an existing list', async () => {
    shoppingLists.ABC123 = {
      items: [],
      members: [],
    };

    const response = await join(
      jsonRequest({
        code: 'ABC123',
        memberName: 'Alex',
      })
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      success: true,
    });

    expect(shoppingLists.ABC123.members).toEqual(['Alex']);
  });

  test('adds an item to an existing list', async () => {
    shoppingLists.ABC123 = {
      items: [],
      members: [],
    };

    const response = await addItem(
      jsonRequest({
        code: 'ABC123',
        itemName: 'Milk',
      })
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      success: true,
    });

    expect(shoppingLists.ABC123.items).toEqual([
      expect.objectContaining({
        name: 'Milk',
        reservedBy: null,
        completed: false,
      }),
    ]);
  });

  test('returns not found for an unknown list', async () => {
    const response = await join(
      jsonRequest({
        code: 'UNKNOWN',
        memberName: 'Alex',
      })
    );

    expect(response.status).toBe(404);

    expect(await response.json()).toEqual({
      error: 'List not found',
    });
  });
});
