# Music-player

## 项目介绍
该项目使用原生js完成一个酷炫页面的开发，产品包括播放/暂停，上一曲/下一曲，播放效果，滑动效果，歌词展示等几大功能。
技术栈：移动端适配，SVG，Parcel，SASS，ES6。

## 第一次更新
**实现播放/暂停等基本功能**

遇到的问题：

展示在不同手机上，内容错落了，没有适配。

解决方案：

移动端适配有如下方案：
1. 基本不适配，加一点响应式，用媒体查询，px
2. 宽度自适应放大/缩小，不在乎高度（可滚动），所有单位用vw（根据屏幕宽度做换算）
3. 自适应且尽量一屏显示（不出现滚动条），类似电视大屏，中间部分自适应，头部/底部设为固定高度。

采用第三种方案，以满足需求。（ui优化）

## 第二次更新
**实现滑动效果**

封装了一个手势库

遇到的问题：
1. 滑动太过于灵敏，稍微一触碰就滑动过去了
2. 代码冗余

解决方案：
1. 同时调整滑动时的初始像素（xx像素才算滑动）以解决过于灵敏的问题（体验优化）。
2. 通过定义变量，提高代码可读性和开发效率（性能优化）。

## 第三次更新
**实现歌词展示**

