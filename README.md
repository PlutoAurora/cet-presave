### 四六级预存

### 项目描述

该项目用于 cqupt 预存四六级准考信息，可通过调取微信接口拍照准考证
OCR 传回姓名和准考证号，也可自行输入姓名和准考证号，预存成功后可通过
预存查询四六级成绩

#### 项目目录结构

├─src
| ├─App.vue
| ├─main.js  
| ├─components
| | ├─message.vue //确认信息界面
| | ├─preStorage.vue //预存信息界面
| | ├─preStorageSuccess.vue //预存成功界面
| | ├─submitSuccess.vue //提交信息成功界面
| | └waitLoad.vue //上传图片等待界面
| ├─assets // 图片文件
| |

├─public
| ├─config.js
| ├─index.html
| ├─js_sign.js
| └tiaotiao.ttf

#### 技术栈

- vue
- vue-cli
- axios

#### 项目运行

使用 vue-cli 创建 , 按照标准运行即可

#### 图例

![](https://imgchr.com/i/Mpgi7Q)
![](https://imgchr.com/i/MpgAts)
![](https://imgchr.com/i/MpgP0g)
![](https://imgchr.com/i/Mpgkkj)
