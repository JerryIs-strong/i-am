<div align="center">
    <img src="https://imgur.com/LbReEjp.png">
    <br/>
    <a href="https://pw-demo-ten.vercel.app/" target="blank"><strong>🌎 DEMO</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#%EF%B8%8F-部署" target="blank"><strong>📦️ 部署</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-配置項" target="blank"><strong>💾 配置項</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#-更新日志" target="blank"><strong>📄 日志</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="https://github.com/JerryIs-strong/pw-plugins-repo" target="blank"><strong>🚛 Plugins Store</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <strong>💌 V1.5.1(推送版本)</strong>
    <br/>
    <br/>
    <div>
        <a href="https://github.com/JerryIs-strong/Arona/releases/">
            <img src="https://img.shields.io/github/v/release/JerryIs-strong/Arona.svg"/>
        </a>
    </div>
</div>

---
歡迎使用JerryIs-strong/Arona，你將瞭解如何部署此項目，並簡單地配置網頁的必要設置。請放心，我們將會一切從簡。
## ❓ "Arona"
名字的由來來自[這裏](https://bluearchive.fandom.com/wiki/Arona)

## ✨ 特性
- ⚡簡易性: 一切基於setting.json文件進行配置
- 🚀高性能: 去除一切其他的功能，只做一個純粹的個人主頁
- 🌍SEO優化: 我們盡力為你在前期做好SEO優化，減少後續的工作
- 📱自適應: 我們為不同尺寸的設備做出了適配
- 🌓暗黑模式: 支援自動暗黑模式的切換
- 🔗URL Parameters: 支援傳入URL Parameters，隱藏不需要的連結
- 🎠美學: 支援高斯模糊
- 🚛模組化: 開發者能夠輕易地管理或加入網頁的各項功能與組件

## 📦️ 部署
1. [NetLify](#%EF%B8%8F-以netlify開始)
2. [Github page](#%EF%B8%8F-以github-page開始)
3. [Vercel](#%EF%B8%8F-以vercel開始)(推介)
4. 更多靜態網頁托管平臺

## ⚙️ 以NetLify開始
歡迎使用NetLify部署你的個人主頁，相信這是一個簡單且穩定的方式! 以下教程將會講解如何將此項目部署至NetLify的伺服器。<br/>
<br/>
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JerryIs-strong/Arona)
<br/>
1. 點擊以上的```Deploy to Netlify```按鈕
2. 點擊```Connect to GitHub```
![](https://imgur.com/ijZSGdF.png)
3. 授權GitHub賬戶，點擊```Authorize netlify```
![](https://imgur.com/CeuWSUH.png)
4. 根據步驟，創建Git儲存庫，點擊```Save & Deploy```
![](https://imgur.com/jBlQSQZ.png)
5. 等待NetLify的部署工作，部署成功
![](https://imgur.com/wIW3KUf.png)

## ⚙️ 以Github Page開始
歡迎使用Github Page部署你的個人主頁，相信這是一個簡單且穩定的方式! 以下教程將會講解如何將此項目部署至NetLify的伺服器。<br/>
1. 點擊```Fork```按鈕
![](https://imgur.com/Jnn8kcN.png)
2. 根據步驟，創建GitHub儲存庫，點擊```Create```
![](https://imgur.com/POrPEWR.png)
3. 點擊```Settings```一欄
![](https://imgur.com/jnuWIzf.png)
4. 點擊```Pages```一項
![](https://imgur.com/8pSMfrT.png)
5. 選擇```Main```分支，點擊```Save```
![](https://imgur.com/nLUutod.png)
6. 等待Github Page的部署工作，部署成功
![](https://imgur.com/qteR1wL.png)
## ⚙️ 以Vercel開始
歡迎使用Vercel部署你的個人主頁，相信這是一個簡單且穩定的方式! 以下教程將會講解如何將此項目部署至Vercel的伺服器。<br/>
<br/>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JerryIs-strong/Arona.git)
<br/>
1. 點擊以上的```deploy```按鈕
2. 在"Create Git Repository"一欄中，選擇一個Git儲存庫(推介GitHub)
![](https://imgur.com/7WKRoCE.png)
3. 根據步驟，創建Git儲存庫，點擊```Create fork```
![](https://imgur.com/ySQw4ci.png)
4. 等待Git任務完成
![](https://imgur.com/sl8WRWQ.png)
5. 部署成功

## 💾 配置項(未更新)
> 你現在可以使用[JerryIs-strong/pw-config-editor](https://jerryis-strong.github.io/pw-config-editor/)快速和簡單地配置配置項!

以下所用配置項均可以透過`setting.json`文件配置，如果你不是開發者，請不要移動或刪除`setting.json`配置文件以外的文件，以免發生錯誤
### Basic Environment 基本環境
```Json
{
"profile": {
    "website_name": "My SPACE", //網站標題(瀏覽器)
    "subtitle": "海内存知己 天涯若比鄰", //網站副標題
    "description": "JERRY's Homepage", //SEO description
    "name": "SPACE", //作者名稱
    "icon":{
        "method": "local", //作者頭像：1.local | 2.gravatar(自動獲取)
        "local":{
            "url": "/icon.png" //填寫絕對路徑 e.g: sub-background.png
        },
        "gravatar": {
            "email": "" //作者gravatar電郵
        }
    }
},
"display": {
    "background":{
        "url": "background.png" //1.Local: 填寫絕對路徑 e.g: background.png | 2.外部連結: 添加https://標頭 e.g: https://jerrypro.xyz/background.png
    },
    "signature":{
        "enabled": true, //true: 開啓 | false: 關閉
        "content": "JP", //個性簽名
        "auto-hide": true //true: 在移動設備中自動隱藏 | False: 在移動設備中顯示
    },
    "music": { 
        "enabled": true, //true: 開啓 | false: 關閉
        "Show Github Icon": false, //是否顯示Github Project
        "data":{ //可添加多首歌曲，但music-$必須由1開始!(No limit)
            "music_1":{
                "name": "那年 - 任然 • 任然精選集 • 2016",
                "url": "https://music.youtube.com/watch?v=LXBiGyEQmZw"
            },
            "music_2":{
                "name": "圈住你 - 一口甜 • 圈住你 • 2019",
                "url": "https://music.youtube.com/watch?v=RR9w_ZSsTvM"
            }
        }
    },
},
"debug": false, //true: 開啓 | false: 關閉 (除錯模式)
"plugins": [] //安裝組件
}
```
### Link 鏈結按鈕(未更新)
```Json
{
"Link": { //Up to 5 limit
    "link_1": { 
        "enabled": true, //true: 開啓 | false: 關閉
        "title": "facebook",
        "name": "fb", //用於URL Parameters檢測
        "icon": "fa-brands fa-facebook", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://facebook.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    },
    "link_2": {
        "enabled": true, //true: 開啓 | false: 關閉
        "title": "youtube",
        "name": "yt", //用於URL Parameters檢測
        "icon": "fa fa-youtube", //fontawesome取得icon的名稱 e.g:fa-brands fa-facebook
        "url": "https://youtube.com", //連結目標
        "target": "blank" //_blank | _self | _parent | _top
    }
}
}
```
## 🔗 URL Parameters
syntax: ```url + ?media=```

Case: 在blog中發放連結
| Url | NEW | OLD |
| :---: | :---: | :---: |
| https://demo.webpage.com/?media=blog | ![](https://imgur.com/QPrqYQd.png) | ![](https://imgur.com/6dUeYF4.png) |
| blog icon | ❎ | ✅ |

## 📦 "鏈接收納空間"
"鏈接收納空間"旨在當鏈接在主頁面溢出時，把溢出的鏈接整齊有序地放置於一個收納空間(Wrapper)，"鏈接收納空間"由多個"鏈接收納盒"組成，只要用戶能够規範的完成設置工作，"鏈接收納空間"便會在適當的時候自動開啟。
```Json
{
"links": { 
    "more":{ //"鏈接收納盒名稱"
        "link_1": { 
            "enabled": true,
            "title": "facebook",
            "name": "fb",
            "icon": {
                "type": "fontawesome",
                "fontawesome": "fa-brands fa-facebook-f",
                "image": false
            },
            "url": "https://facebook.com",
            "target": "blank"
        },
        "link_2": {
            "enabled": true,
            "title": "youtube",
            "name": "yt",
            "icon": {
                "type": "fontawesome",
                "fontawesome": "fa fa-youtube",
                "image": false
            },
            "url": "https://youtube.com",
            "target": "blank"
        }
    }
}
}
```

<br>

> [!CAUTION]
> "鏈接收納盒"的標題不能包含"link"，而僅有包含"link_"作為名稱的鏈接會被渲染。"未規范"設置的鏈接仍然會被收納至"鏈接收納空間"中，但其會默認歸納至"more" "鏈接收納盒"中，且不可被自定義。

以下為"未規范"設置鏈接的事例:
```Json
{
"links": { 
    "more":{ 
        "link_1": { 
            "enabled": true,
            "title": "facebook",
            "name": "fb",
            "icon": {
                "type": "fontawesome",
                "fontawesome": "fa-brands fa-facebook-f",
                "image": false
            },
            "url": "https://facebook.com",
            "target": "blank"
        },
        "link_2": {
            "enabled": true,
            "title": "youtube",
            "name": "yt",
            "icon": {
                "type": "fontawesome",
                "fontawesome": "fa fa-youtube",
                "image": false
            },
            "url": "https://youtube.com",
            "target": "blank"
        }
    },
    "link_3":{ //"鏈接收納盒名稱"包含"link" > "未規范"設置
        "enabled": true,
        "title": "blog",
        "name": "blog",
        "icon": {
            "type": "fontawesome",
            "fontawesome": "fa-solid fa-blog",
            "image": false
        },
        "url": "https://myblog.com",
        "target": "blank"
    }
}
}
```

## 🚛 模組
> Go to ["Document | Get start"](https://jerry7818.notion.site/Plugins-Document-f06cd809b10143c19a5ff86e070644b6) to read more about plugins development

> 切記請勿移除與/plugins/private下的必須模組，移除有關模組可能會導致網頁出錯。

在V1.2.1開始，PW已模組化。你可以隨意添加你需要的功能或組件，同時移除你無需使用的功能或組件以輕量化你的網頁! 以下是添加或移除相關功能或組件的方式:

1. 於```setting.json```中的"plugins"添加功能或組件的名稱，同時以","分割多於一個的功能或組件。(功能或組件的名稱應以"xxx.js"中的xxx作爲命名方式)
2. 於```/plugins```放置相關功能或組件的js檔案

## ✨ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=JerryIs-strong/Arona&type=Date)](https://star-history.com/#JerryIs-strong/Arona&Date)

## 🎀 更新日志
建議覆蓋安裝/更新帶有```[!Important]```字樣的版本更新。

- [V1.0.x](#v10x8)
- [V1.2.x](#v12x10)
- [V1.3.x](#v13x4)
- [V1.4.x](#v14x_arona9)
- [V1.5.x](#v15x_bocchi-)

----

### V1.5.X_\[Bocchi\](#-)

> V1.5.5[2]: 有數個功能上的更新
> - 增加對於"未規范"設置的鏈接的處理
> - 增加對於鏈接名稱規範性的校驗
> - 加入"404"錯誤頁面
> - 增加按鈕(圖片)對於"Dark Mode"的支援(自定義)
> - 修改通知的廣播api
> - 通知支援供使用者刪除(隱藏)
> - 支援通過meta tag方式驗證Google Console
> - 增加robots.txt

> V1.5.5[1]: 有數個功能得到改進
> - 修改“鏈接收納空間”中標題的樣式
> - 修改創建鏈接與使用“鏈接收納空間”的邏輯
> - 修正多個顯示錯誤問題
> - 修正按鈕(圖片)顯示錯位問題
> - 修復自定義Github倉庫時，Github圖標無法顯示的問題(Repeat)
> - 移除對theme的支援

> V1.5.4[1]: 有數個功能得到改進
> - 鏈接支援以圖片的方式展示
> - 支援於鏈接庫組合鏈接
> - 設置文件中的"icon"，支援更多的設置方式
> - 修正一些邏輯錯誤

> V1.5.3[1]: 有數個功能得到改進
> - 支援添加更多鏈接(無上限)
> - 修正一些邏輯錯誤
> - 增加對整體文件完整性的校驗

> V1.5.2[2]: 有數個功能得到改進
> - main.js(改善整體性能)
> - 增加鏈接加載動畫

> V1.5.2[1]: 有數個功能上的更新
> - 支援展示名稱
> - 支援展示標籤(支持多於一個選項)

> V1.5.1[2]: 有數個功能得到改進
> - 修正文字在正常模式下顔色錯誤的問題
> - 移除對theme的支援

> V1.5.1[1]: 有數個功能上的更新
> - 更新debug log的樣式
> - 支持自定義網頁圖標
> - 支援自定義自適應網頁圖標

> V1.5.0[2]: 有數個功能得到改進
> - SEO移除對於tag的支持
> - 支援手動修改Open Graph的設置
> - 增加對Dark reader檢測的支援
> - 通知圖標在移動端下潛問題

> V1.5.0[1]: 有數個功能上的更新
> - 更新Notification的樣式
> - 支持更換主題(需於配置文件定義)
> - title支援使用問候語

----

### V1.4.X_\[Arona\](#9)

> INFO: V1.4.X_\[Arona\]更新生命期完結，共更新 ***9*** 次

> V1.4.5[2]: 有數個功能得到改進
> - setting.json(支援設置blur效果的啓或禁用)

> V1.4.5[1]: 有數個功能得到改進
> - index.html(add wrapper for plugins to inject)
> - setting.json(improve music setting: now you can set artist and album for the music)
> - open more api for plugins

> V1.4.4[1]: 有數個錯誤已被修正
> - Github Icon位置錯誤
> - signature auto-hide功能無法被正確調用
> - debug功能失效

> V1.4.3[1]: 有數個功能上的更新
> - notification now have a new style in mobile device

> V1.4.2[1]: 有數個功能得到改進
> - fetcher.js(改善整體性能)
> - log.js(改善整體性能)
> - update-alert.js(改善整體性能，修復版本號不一致的錯誤)
> - main.js(改善整體性能)

> V1.4.1[1]: 有數個功能上的更新
> - 增添更多關於SEO的選項
> - 支援彈幕通知功能

> V1.4.0[3]: 有數個功能上的更新
> - Added breath effect to skill icon

> V1.4.0[2]: 有數個錯誤已被修正
> - Github Icon無法被禁用
> - Music被禁用時，父元素share被移除

> V1.4.0[1]: 有數個功能上的更新
> - 支持顯示不同語言的編程語言icon
> - update-alert已被整合至默認插件
> - 添加每期更新的默認壁紙
> - 自定義倉庫的名稱

----

### V1.3.X(#4)

> INFO: V1.3.x更新生命期完結，共更新 ***4*** 次

> INFO: V1.3.x的變量(統一)更新已完成，受影響的變量名稱共 ***14*** 個，請在可能的情況下酌情更新，以減低將來報錯的可能性

> V1.3.2[1]: 已更新文件variable的名稱，故舊有的配置文件可能會出現錯誤。建議使用[JerryIs-strong/pw-config-editor](https://jerryis-strong.github.io/pw-config-editor/)更新你當前的配置文件。\
> [-] 受影響的變量名稱: 
> 1. basic information > profile
> 2. music > share
> 3. data > music_data
> 4. show_github_icon > enabled
>
> [+] 添加的變量名稱: 
> 1. display
> 2. skills
> 3. github_icon
> 4. github_user_name
> 5. github_repo_name

> V1.3.1[1]: 已更新文件variable的名稱，故舊有的配置文件可能會出現錯誤。建議使用[JerryIs-strong/pw-config-editor](https://jerryis-strong.github.io/pw-config-editor/)更新你當前的配置文件。\
> [-] 受影響的變量名稱: 
> 1. Link-${num.} > link_${num.}
> 2. music-${num.} > music_${num.}
> 3. Show Github Icon > show_github_icon
> 4. Links > links

> INFO: 現在可以於```Release page```下載V1.3.X往後的歷史版本

> ***V1.3.0[2][!Important]: 重新構建數個重要的邏輯代碼***
> 1. 鏈結以"create"而非"remove"方式產生，因此現在你可以添加超過```5```個鏈結

> V1.3.0[1]: 已更新文件variable的名稱，故舊有的配置文件可能會出現錯誤。建議使用[JerryIs-strong/pw-config-editor](https://jerryis-strong.github.io/pw-config-editor/)更新你當前的配置文件。\
> [-] 受影響的變量名稱: 
> 1. basic information > basic_information
> 2. website name > website_name

----
### V1.2.X(#10)

> INFO: V1.2.x更新生命期完結，共更新 ***10*** 次

> V1.2.6[1]: 已更新文件variable的名稱，故舊有的配置文件可能會出現錯誤。建議使用[JerryIs-strong/pw-config-editor](https://jerryis-strong.github.io/pw-config-editor/)更新你當前的配置文件。同時預設不再開啟update-alert模組，但我們仍強烈建議開啟，以取得重要的更新提示。\
> [-] 受影響的變量名稱: 
> 1. basic environment > basic information
> 2. meta description > description
> 3. holder name > name
> 4. holder icon > icon
> 5. Link > Links

> V1.2.5[2]: 預設不再提供bing-api模組

> V1.2.5[1]: 解決當網頁不在根目錄時，無法抓取version.txt的錯誤

> V1.2.4[4]: 補丁更新

> V1.2.4[3]: 重新構建debug的邏輯代碼與樣式\
> 受影響的文件: \
> root\
> &ensp;|_ src\
> &ensp;&ensp;&ensp;|_ plugins\
> &ensp;&ensp;&ensp;&ensp;&ensp;|_ private\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ debug.js\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ log.js\
> &ensp;&ensp;&ensp;|_ plugins-manager.js

> V1.2.4[2]: 補丁更新，增加隱藏Github Icon的設置

> ***V1.2.4[1][!Important]: 重新構建數個重要的邏輯代碼***\
> 受影響的文件: \
> root\
> &ensp;|_ version.txt\
> &ensp;|_ src\
> &ensp;&ensp;&ensp;|_ plugins\
> &ensp;&ensp;&ensp;&ensp;&ensp;|_ private\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ debug.js\
> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;|_ fetcher.js\
> &ensp;&ensp;&ensp;|_ main.js\
> &ensp;&ensp;&ensp;|_ plugins-manager.js

> V1.2.3[1]: 修復數個bug

> V1.2.2[1]: 重新構建Plugins的執行邏輯(這是一次大型的邏輯重構，你幾乎一定會遇到bug，如果遇到不可緩解的bug，請及時向我們報告)

> V1.2.1[1]: 加入模組化，開發者能夠隨時且輕易地管理網頁的各項功能與組件

----
### V1.0.X(#8)

> INFO: V1.0.x更新生命期完結，共更新 ***8*** 次

> V1.0.5[1]: 解決Android設備背景錯位的問題

> V1.0.4[6]: 優化SEO，增加對description meta tag的設置項，解決未啟用音樂分享時的錯位問題，增加noscript tag，重命名website description設置項為subtitle

> V1.0.4[5]: 合并Github與music欄，使整體更爲整潔

> V1.0.4[4]: 優化無障礙設置，添加Debug Mode

> V1.0.4[3]: 添加Music Share功能，快來和別人分享喜歡的音樂吧！

> V1.0.4[2]: 改進以移除的方式隱藏沒有使用的連結

> V1.0.4[1]: 添加對URL Parameters的支持，能在不同場景打開的連結中隱藏當前社交媒體的連結按鈕

> INFO: V1.0.3更新生命期完結，共更新 ***1*** 次

> V1.0.3[1]: 更改背景加載動畫速率