# dyblog

bundle exec jekyll serve -w --host=0.0.0.0 > /data//blog/blog.log 2>&1 &


或者直接通过shell命令执行run.sh脚本


添加目录在archives目录下,category为各分类，子目录名称为各功能名称
archives/article为存放文章的地方首页的地方


配置映射路由在_includes/archives/data.html

1.设置各知识点导图
````
 这个在archives目录下
 archives/
    index.html                      用来设置首页导图
    /category/                      各个子知识点导图
        /java/                      java知识导图目录
            /index.html             java知识导图首页
    /article/                       文章列表首页
        java/                       java下的知识列表
            /juc/index.html         juc相关的知识列表,通过列表点击进入文章详情,文章详情存放在_includes/archives下,具体的文章是存放在_posts目录下的,在这个目录,我们可以将文件名命名为我们对应的知识点的名称
````
1.设置文章列表
2.设置文章详情


如果要将文章归类到哪个列表,需要修改对应文章.md中到category : java/juc  的值,这个值在
_includes/archives/java/juc/article_list.html中有用到