# hw1 MyCurl - Python HTTP Request CLI 工具
資工四 111210511 李昱欣

MyCurl 是一個使用 Python 標準函式庫 (`urllib` 與 `argparse`) 打造的命令列工具，復刻了 Linux curl 的核心體驗。本專案主打輕量化，不需依賴外部套件即可支援自訂標頭、POST 資料傳送以及檔案下載等核心功能。

## 系統需求與安裝
請確保系統已安裝 Python 3.6 或以上版本。
1. 複製專案：將 `mycurl.py` 下載或複製到本地目錄。
2. 安裝依賴套件：本專案僅依賴 Python 內建標準庫，**無需安裝額外模組 (不需 pip install)**。

## 核心功能與參數列表
使用以下指令語法來發送請求：
`python mycurl.py [options] <url>`

支援的參數如下：

### 請求方法與資料
| 參數 | 說明 |
|---|---|
| `-X, --request` | 指定 HTTP 請求方法 (例如 GET, POST, PUT, DELETE) |
| `-d, --data` | 傳送 HTTP POST 資料 |

### 標頭與輸出控制
| 參數 | 說明 |
|---|---|
| `-H, --header` | 傳遞自訂標頭給伺服器 (可多次使用，例如 `-H "Content-Type: application/json"`) |
| `-o, --output` | 將輸出寫入指定的本地檔案，而非終端機 (stdout) |

## 實用測試範例

### 1. 基本 GET 請求
最基礎的用法，直接獲取網頁原始碼並印在終端機上：
```bash
python mycurl.py [http://example.com](http://example.com)
2. 取得遠端檔案並儲存
將伺服器回應的結果存為指定的本地檔案：

Bash
python mycurl.py -o output.html [http://example.com](http://example.com)
3. 發送 POST 請求並夾帶資料
指定使用 POST 方法，並透過 -d 參數傳遞字串資料給伺服器：

Bash
python mycurl.py -X POST -d "name=test&value=123" [http://example.com](http://example.com)
4. 帶有自訂標頭的請求
傳遞特定的 Header 格式給伺服器，可用於要求特定的回應格式 (例如 JSON)：

Bash
python mycurl.py -H "Accept: application/json" [http://example.com](http://example.com)
