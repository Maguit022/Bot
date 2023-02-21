 import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 *SERVICIOS MAGO* 〙 ═
*Hola que tal, Soy el Owner de Mago Bot*
Mago Bot es parye de *SERVICIOS MAGO* @mago.scf
es una tienda con productos digitales para tu agrado 

PRECIOS MUY BARATOS CON CASI TODOS LOS METODOS DE PAGO QUE HAY
Menú de Venta*

 *Seguidores 👥*
 *Likes ❤️*
 *MagoBot 🤖*
 *Ventas de Cuentas De ig 👥*
 *Apk para Spam Inmune 📩*
 *+600 Links de Comunidades de Spam 👾*
 *Pack De Recursos Dzn*
 *Servicio de Spam*

https://chat.whatsapp.com/CXz4vZQEA2wENCy75sitb3


╠═〘 𝐌𝐚𝐠𝐨𝐁𝐨𝐭 〙 ═`.trim() 
let buttons = [
{ buttonId: '.owner', buttonText: { displayText: 'OWNER' }, type: 1 },
{ buttonId: '.adquirir', buttonText: { displayText: 'ADQUIRIR' }, type: 1 }]
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'SAGIO STOREE',
body: '𝐍𝐨𝐭𝐉𝐡𝐮𝐳ᙆ  ᷦ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(online|tienda|sagio)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
