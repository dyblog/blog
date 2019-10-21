---
layout: post
category: trace
date: 2019-10-06
title: 动手实现分布式用户行为日志收集与分析
description: 本篇文章主要介绍本人在工作中是如何采用Spring AOP + Mybatis 拦截器 + Dubbo filter + ThreadLocal 实现类似于APM分布式链路跟踪的方式来实现分布式服务下用户行为及数据前后变更日志收集与审计分析。
---
## 摘要
最近在开发一个用户行为日志及用户操作数据前后变更的分布式链路收集与分析系统，本篇是对这次系统开发的总结。整篇文章将会从背景、思路、设计及源码实现等各个方面一一介绍我是如何从初始到最终完成项目开发的，最后思考还有哪些待考虑待优化的部分

## 背景
了解需求的背景是我们关注的第一个问题，这是一个怎样的需求？
![](http://www.raoshihong.com/assets/img/trace/2019-10-16_184711.png)
大致的需求就是如上图,需要的文本要求如下：
- 只收集用户新增、修改、删除记录，不收集用户查询记录
- 需要记录操作数据字段内容的前后变更
- 需要记录当前操作用户的信息
- 需要记录操作页面

可以看到上面的需求图，以及需求的文本描述是极其的简单。从上面的需求，我们可以分析到，这个需求需要收集用户的行为记录以及用户的操作数据变更，另外还要获取到当前登录用户的信息。这就需要让我们考虑以下几个问题：
- 分布式服务下多台服务之间的行为链路如何关联？
- 数据的前后变更如何收集？
- 以及各系统不同用户体系如何获取登录用户信息？
- 如何做到系统非侵入式埋点对用户行为日志及数据变更的收集？

## 思路及设计

### 客户端数据收集及服务端数据治理流程

![](http://www.raoshihong.com/assets/img/trace/2019-10-21_111144.png)

  整个链路收集项目设计分为服务端和客户端（下面把要收集用户的行为数据的目标系统统一称为业务端)
  >- 客户端主要是负责对目标方法的链路开启,以及用户数据变更操作的收集及将收集的数据回传给服务端进行治理
  >- 服务端主要保存客户端收集的数据及对收集的数据进行治理,并提供相关的API进行治理后数据的查询
  >- 业务端只需引入客户端的jar包依赖即可开启对用户行为日志操作数据收集

![](http://www.raoshihong.com/assets/img/trace/2019-10-21_23-30-33.png)

## 业务端使用客户端

业务端需要使用到客户端的地方只有三个部分：

- 引入客户端依赖
````
<dependency>
    <groupId>com.daoyuan</groupId>
    <artifactId>trace-client</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>

````

二 添加客户端包组件扫描路径

````
@Configuration
@ComponentScan(basePackages = {"com.daoyuan.trace.client"})
public class CoreConfig {
}

````

三 添加各业务端自定义用户（这部分可有可无）

- 业务端自定义类实现客户端提供的`GetTraceUserService`接口


### 客户端对业务端日志收集的实现
下面我具体介绍下客户端是如何开启对业务端日志收集以及对数据前后变更日志的收集和服务与服务之间日志的关联
通过Spring AOP 定义一个切面，对指定对方法进行拦截



如何跨服务或者跨线程传递链路？


如何收集数据变更？


如何进行数据治理



我的整体思路是从用户操作界面到后台服务，以及最终各服务之间的调用和最终数据落地的顺序
采用Spring AOP 对web层进行拦截，或者采用指定注解对方式对指定方法进行拦截，在这块开启链路
采用dubbo filter进行服务之间的链路传递
采用mybatis 拦截器对数据操作对拦截
以上任务都会将收集到到相关信息回传到日志收集及分析服务，对收集到到数据进行加工处理

1。链路开启入口：

2。服务与服务之间的链路传递的实现

3。数据变更的收集实现

1. Spring AOP





涉及技术点
- **跨线程数据传递** 
因为存在多线程或者job执行任务的方式，所以我们需要考虑到跨线程数据链路跟踪
- **mybatis拦截器** 
数据库层面的链路跟踪及数据前后变更，我们采用的是mybatis的拦截器实现
- **Spring AOP** 
4。跨进程实现数据传递dubbo filter
5。动态SQL
6。JSqlParse
7。java探针
8。apm

在介绍整个项目前，我们先来了解下项目中使用到的核心技术以及如何使用这些技术

## 已有很多基于探针技术实现的APM，反而使用AOP？

整个项目分为客户端和服务端，客户端用于收集应用端的用户链路日志以及数据的变更，服务端用于保存配置信息以及分析客户端收集到到数据

## 涉及到到技术点
Jacman 主题提供了丰富的配置属性，可以实现您对主题的自定义。配置文件`_config.yml`位于主题根目录下。本次更新对配置文件进行了较大调整，如您之前就使用了 Jacman，也需要您根据以下指南进行相应的修改。

```
##### 菜单
menu:
  主页: /
  归档: /archives
  关于: /about

#### 控件
widgets: 
- category
- tag
- links
- rss

#### RSS 
rss: /atom.xml 

#### 图片相关
imglogo:
  enable: true               ## 是否显示网站 logo
  src: img/logo.png        
favicon: img/favicon.ico     ## 网站图标    
apple_icon: img/jacman.jpg   ## 苹果设备上的图标，背景不要透明
author_img: img/author.jpg   ## 网站底部的博主头像
banner_img: img/banner.jpg   ## 博客顶部的图片

close_aside: false      ##是否在文章页面自动关闭侧边栏

#### 首页相关
index:
  expand: true              ## 首页文章是否展开。默认为展开式，显示 Read More。
  excerpt_link: Read More    

#### 作者信息
author:
  name: ## 作者名
  intro_line1:  "Hello ,I'm Larry Page in Google."    ## 网站底部的个人介绍
  intro_line2:  "This is my blog,believe it or not."  
  weibo_verifier:  ## 微博秀的验证码
  tsina:           ## 用于微博秀和微博分享
  weibo:           ## 用于显示网站底部社交按钮，下同
  douban:         
  zhihu:  
  email:     
  twitter:   
  github:     
  facebook: 
  linkedin:   
  google_plus:   
  stackoverflow:  


#### 目录
toc:
  article: true   ## 是否在文章中显示目录
  aside: true     ## 是否在侧边栏显示目录

#### 友情链接
links:
  码农圈: https://coderq.com,一个面向程序员交流分享的新一代社区
  Jark's Blog: http://wuchong.me
  
#### 评论
duoshuo_shortname: 
disqus_shortname:  

#### 分享按钮
jiathis:
  enable: false   ## 默认使用主题内建分享
  id:    
  tsina: 
  
#### 网站统计
google_analytics:
  enable: false
  id:            ## google analytics ID.
  site:          ## 网站地址.
baidu_tongji:
  enable: false
  sitecode:      ## 百度统计站点特征码
cnzz_tongji:
  enable: false
  siteid:        ## CNZZ统计站点ID

#### 杂项
ShowCustomFont: true  
fancybox: true        
totop: true           

#### 自定义搜索
google_cse: 
  enable: false
  cx:  
baidu_search:    
  enable: false
  id:   
  site: http://zhannei.baidu.com/cse/search 
tinysou_search:     ## http://tinysou.com/
  enable: false
  id: "4ac092ad8d749fdc6293" 
```

### 属性功能
- **菜单 menu**
默认没有启用 `/tags` 和 `/categories`页面，如果需要启用请在博客目录下分别建立`tags` 和 `categories`文件夹每个文件夹中分别包含一个`index.md`文件。内容为：


## 疑点
使用到的相关技术点以及技术实现的难点，还有为什么是使用AOP实现链路数据收集而不是直接使用APM分布式链路跟踪或者公司的数据中台，欲知详情，请听我娓娓道来。
