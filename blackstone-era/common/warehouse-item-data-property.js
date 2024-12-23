/* #公共js样式文件# */

// 服务器删除 在GitHub上获取项目的JSON文件（item-catalog.json）
const repoUrl = 'https://raw.githubusercontent.com/GSpore/momin/main/blackstone-era/common/item-catalog.json';// GSpore是用户名，Momin是仓库名。这段ulr链接仅作为在github项目网站上测试代码使用

// 创建角色仓库物品数据 警戒(以下物品数据只用于测试，测试完成后留空window.warehouseItems = []并删除本括号内的内容)
window.warehouseItems = [
    { id: 1, quantity: 5 },
    { id: 2, quantity: 3 },
    { id: 3, quantity: 1 },
    { id: 4, quantity: 1 },
    { id: 5, quantity: 1 },
    { id: 6, quantity: 1 }
];

// 背包物品数据
window.backpackItems = [];/*"[]"内为空，表示目前没有任何物品。
当用户从仓库在向背包转移物品时候，物品数据会动态生成更新 */