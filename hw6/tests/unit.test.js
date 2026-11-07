const { calculateTotal } = require('../utils');

describe('單元測試 (Unit Test)', () => {
    test('測試 calculateTotal: 傳入正常陣列應計算正確總和', () => {
        const items = [{ price: 100 }, { price: 200 }, { price: 50 }];
        expect(calculateTotal(items)).toBe(350);
    });

    test('測試 calculateTotal: 傳入空陣列應回傳 0', () => {
        expect(calculateTotal([])).toBe(0);
    });

    test('測試 calculateTotal: 傳入無效字串或負數處理', () => {
        const items = [{ price: '100' }, { price: -50 }, { price: 'abc' }];
        expect(calculateTotal(items)).toBe(50);
    });
});
