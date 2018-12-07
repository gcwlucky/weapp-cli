# weapp-cli
weapp command line tool, can achieve engineering upload and other functions

# 背景
在用git进行小程序协作开发时，需要对发布上线的版本进行版本管理和描述备注，意味着上传时需要手动维护版本号和备注。基于自身痛点，期望组内共同遵循某一规则，将流程工程化，以提升协作效率。

# Usage
1.配置系统环境变量(具体配置方式自行查阅)，以下为path:
- macOS: <开发者工具安装路径>/Contents/MacOS
- Windows: <开发者工具安装路径>

2.npm i weapp-dev-cli -g

# Conmand

命令 | 描述 | 选项
---|---|---
wa u | 上传 | 可选：-v(版本号)，-d(备注)，如wa u v v.1.0.0 d "upload test"，默认会按照版本号yyyymmddhh，备注（git log -1 message）
wa p | 预览 | 
wa o | 打开工具 | 
wa l | 登录工具 | 可选：-p(项目路径)，如wa o pwd（打开当前目录）


