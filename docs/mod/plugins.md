---
title: 服务器插件
---

MCDR 插件

## 服务器插件

## 存档备份

我们使用 MCD Reforged 插件 QuickBackup 进行存档备份。

任何人都有权限触发存档备份和回档，操作方法如下：

```text
!!qb make
```

这么做可以触发存档备份，备份文件会被存放在 `./plugins/QuickBackup/backup` 目录下。

要查看已经有的备份，可以使用

```text
!!qb list
```

这么做可以列出所有备份文件，其中第一列是备份文件的 ID，第二列是备份文件的创建时间。

要回档，可以使用

```text
!!qb restore <id>
```

在不考虑手动备份的情况下，我们会每隔 1h 进行一次自动存档备份。