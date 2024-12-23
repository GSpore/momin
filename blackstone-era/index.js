// 进入洞窟函数
function enterCave() { // 在本项被调用后，会隐藏主菜单，并显示选择层数界面
    document.getElementById('main-menu').classList.remove('visible'); // 移除main-menu（主菜单界面）中的visible函数
    document.getElementById('main-menu').classList.add('hidden'); /* 为main-menu添加hidden函数，使main-menu完全隐藏；
    以上两行代码会将main-menu中的visible函数替换为hidden函数，隐藏主菜单；*/

    document.getElementById('layer-selection').classList.remove('hidden'); // 移除layer-selection（选择层数界面）中的hidden函数
    document.getElementById('layer-selection').classList.add('visible'); /* 为layer-selection添加visible函数，使layer-selection完全可见
    以上两行代码会将layer-selection中的hidden函数替换为visible函数，使选择层数界面可见 */
}

// 选择层数函数
function selectLayer(range) {     
    window.location.href = `prepare-interface/prepare-interface.html?layer=${range}`;
    // 跳转到准备界面，并传递输出的URL参数："../准备界面/准备界面.html?layer=X"(X为range的值，即选中的最小层数)
}

// 进入角色仓库页面函数
function enterWarehouse() { // 在本项被调用后，会跳转角色仓库界面
    window.location.href = "role-repository/role-repository.html";
}