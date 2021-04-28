# PogU Project
## Table of contents
* ### [Info](#info)
* ### [Requirements](#requirements)
* ### [Setup](#setup)

## Info
* #### **PogU** is a Discord bot written in **JS** and using **Node.js** to use it on your ***VPS/Hosting Service***

## Requirements
* #### **Node.js** version 12 or newer
## Setup
``` Shell
$ npm init
```
* #### Modify the main file to be **main.js** instead of **index.js**.

* #### Use the **[Discord Dev Portal](https://discord.com/developers)** to create an application and a bot like so:







<img src="https://miro.medium.com/max/5272/1*vUeUsiEwICG8H_9z9UchbQ.png" alt="App creation" width="500"/>
<img src="https://miro.medium.com/max/6616/1*m6ujP95qBOoIgWgUiWMG_w.png" alt="Bot creation" width="500"/>
<img src="https://th.bing.com/th/id/OIP.P2A-vX8C8x0RUJQxpPjzKgHaEu?pid=ImgDet&rs=1" alt="Bot created" width="300"/>





* #### Copy your **token** and put it in the main.js file at the end as so:
``` js
client.login('YOUR_TOKEN'); 
```

``` Shell
$ npm install discord.js
$ npm install ms
$ node . 
```
* #### You might need to change some settings as the role IDs as they are specific to each server.

* #### To invite your bot to your server, go to **[Discord Bot Calculator](https://discordapi.com/permissions.html)**. Copy your **client ID** from your application tab in the **Dev Portal** and paste it in the field. Give it all the **permissions** and press the link and the bot will be invited to your server. 




