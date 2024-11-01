---
title: 常见问题
---

常见问题

## 为什么会出现「无法验证用户名」？

这往往是因为你没有使用我们的皮肤站进行登录。
如果你使用`MUA联合登录`，但是它不工作，请联系管理员为你创建一个`NUISTCraft 皮肤站`账户。

## 为什么会出现「登入失败：身份验证服务器目前正在停机维护。」？

这是因为你的客户端没有办法与我们的皮肤站进行通信。
请检查游戏版本目录下的`authlib-injector.log`来获取更多信息。如果你看不懂，可以联系管理员。
这通常有以下原因：

- 抽风了。重启客户端试试。
- 没能正常登录皮肤站。
- 你的`Java 8`版本太老(比如`8u51`)，请下载最新的`Java 8`版本。
  这是因为`Java`使用自己的证书库，如果你的版本太老，将不能正常与皮肤站进行`SSL`通信。

## 崩服了怎么办？

- 等待服务器自动重启，给它一些时间，它会自动重启的。
- 长时间无法连接到服务器，请联系管理员。
