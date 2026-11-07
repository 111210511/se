const request = require('supertest');
const app = require('../server');

describe('系統測試 (Web API Test)', () => {
    test('測試 POST /api/calculate 是否正確回傳 HTTP 200 與計算結果', async () => {
        const response = await request(app)
            .post('/api/calculate')
            .send({ 
                items: [{ price: 150 }, { price: 300 }] 
            });
        
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toHaveProperty('total', 450);
    });

    test('測試 POST /api/calculate 傳送空資料的邊界狀況', async () => {
        const response = await request(app)
            .post('/api/calculate')
            .send({});
            
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('total', 0);
    });
});
