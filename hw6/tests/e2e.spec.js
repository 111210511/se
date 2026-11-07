const { test, expect } = require('@playwright/test');

test.describe('端到端測試 (E2E Test)', () => {
    test('模擬使用者填寫價格並驗證畫面顯示的計算結果', async ({ page }) => {
        // 假設進行 E2E 測試前，已透過 npm start 將伺服器啟動於 port 3000
        await page.goto('http://localhost:3000');
        
        // 驗證網頁標題
        await expect(page).toHaveTitle('測試範例應用');

        // 模擬使用者清空輸入框並填寫新數值
        await page.fill('#price1', '150');
        await page.fill('#price2', '250');
        
        // 模擬使用者點擊計算按鈕
        await page.click('#calcBtn');
        
        // 等待並驗證畫面上出現正確的 API 回傳總和 (150 + 250 = 400)
        const result = page.locator('#result');
        await expect(result).toHaveText('400');
    });
});
