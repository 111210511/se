# hw4 Docker 微服務系統建置紀錄
學號：111210511

這是一個基於 Docker Compose 建置的微服務系統，包含了前端網頁伺服器、後端 API 以及資料庫。

## 1. 系統架構設計
本系統採用微服務架構，將不同職責的服務拆分在獨立的容器中執行：
- **Nginx (Web Server & Reverse Proxy)**：負責對外開放 Port 8080。一方面提供前端介面的靜態檔案 (HTML/JS/CSS)，另一方面將使用者呼叫 `/api/` 的路由請求，反向代理轉發給內部網路中的 Node.js 伺服器。
- **Node.js (Backend Application)**：擔任應用程式邏輯層。使用 Express 框架建立 API 端點，處理前端傳來的 GET 與 POST 請求，並透過 `pg` 套件與資料庫進行連線。
- **PostgreSQL (Database)**：負責資料的持久化儲存。此容器沒有對外暴露 Port，僅允許內部網路的 Node.js 連線，確保資料安全性，並透過 Docker Volume 設定掛載路徑，防止容器重啟後資料遺失。

## 2. Docker 學習紀錄 (核心指令)
在本次開發與建置過程中，使用到了以下實用的 Docker 指令：
- `docker-compose up -d`：讀取 `docker-compose.yml`，在背景建置並啟動所有微服務。
- `docker-compose down`：停止並移除由 compose 啟動的容器與內部網路。
- `docker ps`：列出當前系統中正在執行的容器清單與 Port 對應狀況。
- `docker logs <container_name>`：查看特定容器輸出的日誌，對於排除 Node.js 或 Database 連線錯誤非常有幫助。
- `docker build -t <image_name> .`：手動根據 Dockerfile 建立自訂的映像檔。

## 3. 系統執行與測試方式
1. 確認作業系統已經安裝 Docker 以及 Docker Compose。
2. 開啟終端機 (Terminal)，將路徑切換至本專案的根目錄。
3. 執行建置與啟動指令：
   ```bash
   docker-compose up -d
