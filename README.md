# Surge

## 项目目标：

1. **[去广告](https://github.com/001ProMax/Surge/edit/main/README.md#%E5%8E%BB%E5%B9%BF%E5%91%8A)**：通过简洁方式去除应用中的广告干扰（如开屏弹窗、横幅等）。
2. **[自用工具](https://github.com/001ProMax/Surge/edit/main/README.md#%E5%B7%A5%E5%85%B7)**：编写模块脚本，实现一些Surge没有的功能。

部分功能仅适用于 Surge 用户，使用其他软件的用户请使用 [Script-Hub](https://github.com/Script-Hub-Org/Script-Hub) 进行规则转换。

若喜欢本项目请点下 🌟🌟。

---

## Surge工具

**安装方法：**
- 自行探索：[工具合集](https://github.com/001ProMax/Surge/tree/main/Module/Tools)

---

## Surge脚本开发工具
使用教程：
1. 在 `Code Runner` 插件的 `code-runner.executorMap` 中添加以下配置：

    ```json
    "code-runner.executorMapByFileExtension": {
      "javascript": "zsh -c '[[ \"$1\" =~ ^\"Path/To/Your/Surge/Scripts\" ]] && /Applications/Surge.app/Contents/Applications/surge-cli script evaluate \"$1\" cron 30 || node \"$1\"' _ $filePath"
    }
    ```
2. Run Code

---

## Surge快捷指令

⚠️ 注意：由于快捷指令依赖需要用到Surge的`HTTP API`功能，因此仅适用于 Surge 用户。

点击安装[依赖](https://www.icloud.com/shortcuts/c7a01fa868be477ca44e653b717c247e)

1. [最近请求匹配时间](https://www.icloud.com/shortcuts/63ce770034b54f3097ffe52911fd534f)
2. [统计规则数量](https://www.icloud.com/shortcuts/1f969963dedd478db7b149d6b50cdc28)
3. [开关抓包](https://www.icloud.com/shortcuts/050d7cb221794ac4a79c83edbd258348)

---

## 鸣谢（排名不分先后）
- [@mieqq](https://github.com/mieqq/mieqq)
- [@RuCu6](https://github.com/RuCu6/QuanX)
- [@Keywos](https://github.com/Keywos/rule)
- [@ScriptHub](https://github.com/Script-Hub-Org/Script-Hub)
