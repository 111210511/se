const express = require('express');
const path = require('path');
const { calculateTotal } = require('./utils');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Web API 端點，接收 JSON 並回傳計算結果
app.post('/api/calculate', (req, res) => {
    const items = req.body.items || [];
    const total = calculateTotal(items);
    res.json({ total: total });
});

// 若此檔案被直接執行，則啟動伺服器；若是被測試框架載入，則不自動啟動
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`伺服器已啟動於 http://localhost:${port}`);
    });
}

module.exports = app;
