#### 运行
本地测试端口: 4019

如果需要在自己的机器上运行可以如下：
```
git clone git@gitlab.followme.com:Node/act-jyds.git
cd act-jyds && yarn
npm start
```

#### 提交流程

* 1.提交代码时会触发commitmsg脚本，如果不符合"<type>(<scope>): <subject>"格式，会报错
* 2.git add .
* 3.现在提交代码通过git cz来执行不再通过git commit
```
    安装cz 
    npm install -g commitizen
```
* 4.git cz以后会出现选项框用于选择本次提交的内容类型
```
    feat：新功能（feature）
    fix：修补bug
    docs：文档（documentation）
    style： 格式（不影响代码运行的变动）
    refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    test：增加测试
    chore：构建过程或辅助工具的变动 
```
* 5.选择以后会出现Denote the scope of this change ($location, $browser, $compile, etc.) 用于输入本次提交改变的功能范围 
* 6.然后出现Write a short, imperative tense description of the change 用于输入本次提交内容的概要
* 7.Provide a longer description of the change，用于输入本次提交内容的详细    描述
* 8.List any breaking changes，用于输入本次提交的重要变更内容
* 9.List any issues closed by this change 用于输入本次提交解决的问题
* 10.git pull
* 11.git push




