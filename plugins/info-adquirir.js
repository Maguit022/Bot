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
โ โใ ๐๐๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐๐ ใ โ
_Hola Soy MagoBot un Saludo ๐โโ๏ธ_
El Precio para obtener a MagoBot es Muy barato es de S/ 2.50 , Tenemos la Oferta de 3 Grupos x S/ 5.00 Soles . (SOLO ES UN SOLO PAGO NO ES MENSUAL)

๐ธ Tenemos Casi Todos los mรฉtodos de Pago de distintos paรญses Escrรญbele a mi Owner

http://wa.me/+51972005505
โ โใ ๐๐๐ ๐จ๐๐จ๐ญ ใ โ
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐๐๐๐๐๐๐ ๐ ๐๐๐๐๐๐๐',
body: '๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
}
handler.help = ['adquirir', 'speed']
handler.tags = ['adquirir', 'tools']
handler.command = /^(adquirir)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
