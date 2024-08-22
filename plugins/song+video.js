const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "Doenload Song And Videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title for Downloading...😌📥")
const search = await yts(q)
const data =  search.videos[0];
const url = data.url


let desc = '     
title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}
'


await  conn.sendMessage (from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

let down  = await fg.yta(url)
let downloadUrl = down.dl_url
await conn.sendMessage (from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage (from,{document: {url:downloadUrl},mimetype:"audio/mpeg", fileName:data.title + ".mp3",caption:"Download By Queen Nishu ║Sohan Matheesha...😌💗⚒️"},{quoted:mek})







}catch(e){
console.log(e)
reply('${e}')
}
})

//=====video  downloader =====//

cmd({
    pattern: "video",
    desc: "Doenload Song And Videos.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title for Downloading...😌📥)
const search = await yts(q)
const data =  search.videos[0];
const url = data.url


let desc = '
 │---⏪️YouTube Video Downloader By⏩
┌┤✑│ Queen Nishu ║Sohan Matheesha...😌💗⚒️ 
│└────────────┈ ⳹
|
└─--------Information---------->       
│title: ${data.title}
|description: ${data.description}
|time: ${data.timestamp}
|ago: ${data.ago}
|views: ${data.views}
│--------------------------------|
└─ ❤️Develop by Sohan Matheesha❤️
'


await  conn.sendMessage (from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

let down  = await fg.ytv(url)
let downloadUrl = down.dl_url
await conn.sendMessage (from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage (from,{document: {url:downloadUrl},mimetype:"video/mp4", fileName:data.title + ".mp4",caption:"Download By Queen Nishu ║Sohan Matheesha...😌💗⚒️" },{quoted:mek})


}catch(e){
console.log(e)
reply('${e}')
}
})
