依据已经提供的 `html` `css` 模板，完成一个 Todo 应用。

# 前提

完成这个项目你需要一些基本的 javascript 的知识：

1. 对 javascript 的基础语法有所了解，并且该项目采用 es2015 的语法，因此你必须了解 es2015 的语法，比如：
   * 如何写类
   * 如何使用 `import` 
   * 如何用 `=>` 创建函数
   * 如何使用 `let` `const`
2. 知道如何利用 javascript 操纵 DOM 元素，比如
   * 如何创建一个元素
   * 如何把它插入到 dom 中
   * 如何删除一个元素
   * 如何用 `querySelector` 选择元素
3. 知道如何 DOM 的事件模型以及如何为 DOM 元素绑定不同种类的事件，该项目可能会涉及到如下的内容：
   * 如何绑定键盘事件
   * 如何绑定鼠标单击事件
   * 如何绑定双击事件
   * DOM 的事件传播方式是什么样子的

并且，你需要知道一些 `git` 的基本使用方式：

* 知道如何 `clone` 远端的 `git` 仓库
* 知道如何将添加或者修改后的文件提交到本地 `git` 仓库
* 知道如何将本地的仓库提交到远端的仓库

本项目使用的构建工具是 `webpack`，你有必要对其有一些基本的了解，明白其 `entry` `loader` 的概念。

还有，你可能需要知道一些 `nodejs` 以及 `npm` 的知识，**不过在目前这个项目，这些不是必须的**：

* 知道什么是 `nodejs`
* 知道如何利用 `npm` 对 HTML Javascript 的项目进行依赖管理

# 环境

为了构建这个项目，你需要至少将下面加 `*` 的东西安装到你的电脑上：

1. [`git`](https://git-scm.com/) `*`
2. `nodejs` 
3. `npm`

# 构建

该项目包含如下几个功能：

1. 创建一个新的 Todo
2. 把已经创建的 Todo 标记为已经完成
3. 删除一个 Todo
4. 显示当前有多少个 Todo 还没有完成

# 在本地执行测试

首先，这一步不是必须的。

按照下面的步骤安装必要的工具：

1. 安装 [node.js](https://nodejs.org/en/)
2. 安装 [Selenium](http://nightwatchjs.org/gettingstarted#selenium-server-setup)
2. 安装 [nightwatch](http://nightwatchjs.org/gettingstarted#installation)

然后执行以下命令安装其他依赖

```
$ npm install
```

在本地执行测试，首先需要启动 selenium，并使其端口为 `4444`

```
$ cd test
$ nightwatch
```