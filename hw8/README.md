# hw6 Cloudflare Pages - 雲端即時 Markdown 編輯器

這是一個基於 HTML5 與 JavaScript 打造的靜態網頁應用程式。透過導入 `marked.js` 套件，實作了左側輸入 Markdown 語法，右側即時渲染 HTML 排版的雙視窗編輯器。本專案專為 Cloudflare Pages 部署所設計，能發揮其邊緣節點 (Edge Network) 帶來的極致載入速度。

## 核心功能清單

1. **即時渲染預覽**：透過 JavaScript 監聽輸入框事件，每次按鍵皆會瞬間將 Markdown 轉換為 HTML 並渲染於右側面板。
2. **本機草稿儲存**：結合 HTML5 LocalStorage API，自動儲存使用者的文字內容。即使意外關閉網頁，下次開啟時仍可恢復未完成的草稿。
3. **輕量化靜態架構**：不需要後端資料庫，無 API 呼叫延遲，部署成本與維護成本皆為零。

## Cloudflare Pages 部署步驟紀錄

為了將此專案發布至網際網路上，我執行了以下 Cloudflare Pages 的自動化部署流程：

### 步驟一：準備 GitHub 儲存庫
1. 在本地端建立專案資料夾，並放入 `index.html` 與 `README.md`。
2. 將這些檔案 Commit 並 Push 到個人 GitHub 帳號下的一個新儲存庫 (例如命名為 `cloudflare-markdown-editor`)。

### 步驟二：連結 Cloudflare
1. 登入 [Cloudflare 儀表板](https://dash.cloudflare.com/)。
2. 在左側導覽列點選「Workers & Pages」選項。
3. 點擊「Create application」按鈕，然後選擇「Pages」分頁。
4. 點擊「Connect to Git」，授權 Cloudflare 存取個人的 GitHub 帳號。

### 步驟三：設定部署參數
1. 在儲存庫清單中，選擇剛剛建立的 `cloudflare-markdown-editor` 專案。
2. 點擊「Begin setup」進入建置設定頁面。
3. 根據本專案的靜態特性，完成以下參數設定：
   - **Framework preset (框架預設)**：選擇 `None`
   - **Build command (建置指令)**：留空 (不需編譯)
   - **Build output directory (建置輸出目錄)**：留空 (或輸入 `/`)，代表直接發布根目錄檔案。
4. 點擊「Save and Deploy」按鈕。

### 步驟四：發布完成
1. Cloudflare 系統會自動從 GitHub 拉取原始碼並發布至全球 CDN 節點。
2. 等待約 30 秒至 1 分鐘，畫面上會出現成功提示，並提供專屬的應用程式網址 (例如 `https://你的專案名稱.pages.dev`)。
3. 未來只要透過 Git 推送新的程式碼到 GitHub 主分支，Cloudflare 就會自動觸發更新，確保網站隨時保持在最新版本。
