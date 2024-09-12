# Surge

## 项目目标：

1. **[去广告](https://github.com/001ProMax/Surge/edit/main/README.md#%E5%8E%BB%E5%B9%BF%E5%91%8A)**：通过简洁方式去除应用中的广告干扰（如开屏弹窗、横幅等）。
2. **[自用工具](https://github.com/001ProMax/Surge/edit/main/README.md#%E5%B7%A5%E5%85%B7)**：编写模块脚本，实现一些Surge没有的功能。

由于本项目仅适用于 Surge 用户，使用其他软件的用户请使用 [Script-Hub](https://github.com/Script-Hub-Org/Script-Hub) 进行规则转换。

若喜欢本项目请点下 🌟🌟。

---

## 去广告

**安装方法（二选一）：**

1. **通用规则**：
   - 模块下载：[APP.sgmodule](https://raw.githubusercontent.com/001ProMax/Surge/main/Module/AD/APP.sgmodule)
   - 规则链接：[AD.list](https://raw.githubusercontent.com/001ProMax/Surge/main/Ruleset/AD.list)

2. **单独 APP**：
   - 自行探索：[模块合集](https://github.com/001ProMax/Surge/tree/main/Module/AD)

---

## Surge工具

**安装方法：**
- 自行探索：[工具合集](https://github.com/001ProMax/Surge/tree/main/Module/Tools)

---

## Surge开发工具
使用教程：
1. 在 Code Runner 插件的 `code-runner.executorMap` 中添加以下配置：

    ```json
    "code-runner.executorMapByFileExtension": {
      "javascript": "zsh -c '[[ \"$1\" =~ ^\"Path/To/Your/Surge/Scripts\" ]] && /Applications/Surge.app/Contents/Applications/surge-cli script evaluate \"$1\" cron 30 || node \"$1\"' _ $filePath"
    }
    ```
2. Run Code

---

## 鸣谢（排名不分先后）

- [@RuCu6](https://github.com/RuCu6/QuanX)
- [@Keywos](https://github.com/Keywos/rule)
- [@ScriptHub](https://github.com/Script-Hub-Org/Script-Hub)
