---
layout: post
title: 动手实现分布式用户行为日志收集与分析
description: 本篇文章主要介绍本人在工作中是如何采用Spring AOP + Mybatis 拦截器 + Dubbo filter + ThreadLocal 实现类似于APM分布式链路跟踪的方式来实现分布式服务下用户行为及数据前后变更日志收集与审计分析。
---
## 前言
整篇文章将会为读者们介绍该项目使用到的相关技术点以及技术实现的难点，还有为什么是使用AOP实现链路数据收集而不是直接使用APM分布式链路跟踪或者公司的数据中台，欲知详情，请听我娓娓道来。

## 背景
项目实现的目的

## 思路
如何实现，

## 设计

## 实现
源码分析

## 项目运行

## 源码分析


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

```
layout: tags (或categories)
title: tags (或categories)
---
```