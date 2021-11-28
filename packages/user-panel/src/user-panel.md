---
title: UserPanel 用户面板
group:
  path: /
nav:
  path: /components
---

# UserPanel 用户面板

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

用户登录注册集成面板

[version-image]: http://img.shields.io/npm/v/@arvinxu/user-panel.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/@arvinxu/user-panel
[download-image]: https://img.shields.io/npm/dm/@arvinxu/user-panel.svg
[download-url]: https://github.com/arvinxx/components/tree/master/packages/user-panel

## 登录面板

<code src='../demos/Login.tsx' />

### 带 Logo

<code src='../demos/LoginWithLogo.tsx' />

### 显示忘记密码

填入 忘记密码所在 url 或者实现方法

<code src='../demos/LoginWithForgotUrl.tsx' />

### 显示底部

如果需要显示微信登录按钮, 需要实现 `onWechatLoginClick` 方法. 否则默认不显示

<code src='../demos/LoginWithFooter.tsx' />

<API src='./UserLogin.tsx'></API>

## 注册面板

TODO