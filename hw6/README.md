Markdown
# 網站測試應用範例

本專案實作了一個簡單的購物車計算系統，並包含三種層級的自動化測試：單元測試、系統 API 測試、以及 Playwright E2E 測試。

## 環境建置與安裝
請確保系統已安裝 Node.js。在專案根目錄下開啟終端機，執行以下指令安裝所需套件與 Playwright 瀏覽器核心：
```bash
npm install
npx playwright install
執行伺服器
若要手動測試網頁功能，請先啟動伺服器：

Bash
npm start
伺服器將執行於 http://localhost:3000。

執行自動化測試
執行單元測試 (Unit Test)
針對伺服器端的純邏輯函式進行測試。

Bash
npm run test:unit
執行系統測試 (Web API Test)
針對 Express 伺服器的 HTTP 路由與回應格式進行測試。

Bash
npm run test:api
執行端到端測試 (E2E Test)
注意：執行此測試前，請開啟另一個終端機視窗並執行 npm start 保持伺服器運行，接著再執行以下指令啟動無頭瀏覽器測試。

Bash
npm run test:e2e
