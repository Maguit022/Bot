/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name} 💙*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝚂𝙴𝙶𝚄𝙸𝚁𝙼𝙴 :𝟹*
*┃*
┃ https://www.instagram.com/0_mago.ff/
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.instagram.com/0_mago.ff/', '𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['instagram']
handler.tags = ['instagram']
handler.command = /^dona(te|si)|insta|apoyara$/i
export default handler
