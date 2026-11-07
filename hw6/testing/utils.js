// 計算購物車商品總和的商業邏輯
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        return 0;
    }
    return items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
}

module.exports = { calculateTotal };
