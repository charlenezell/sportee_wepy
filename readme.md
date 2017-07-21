<!-- TOC -->

- [增加页面流程](#增加页面流程)
- [添加首页入口](#添加首页入口)
- [wepy一些实现](#wepy一些实现)

<!-- /TOC -->


# 增加页面流程
1. app.wpy config添加页面

#添加首页入口
1. index.wpy 添加入口

# wepy一些实现

例子是引入组件如下图: ![1]
1. css组件化是style生成一个wxss然后被页面import那样没有做module处理而且会重复引入![0]

1. template也只是做了复制代码，然后做了模块化的是js的变量部分 ![2]


[0]: resource/Code_2017-07-21_11-11-00.png "生成后的index.wxss出现重复引入"
[1]: resource/Code_2017-07-21_11-10-11.png "使用引入"
[2]: resource/Code_2017-07-21_11-11-30.png "生成后的index.wxml做了js的变量模块化"
