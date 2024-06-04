module.exports = {
 config: {
 name: "respect",
 aliases: [],
 version: "1.0",
 author: "AceGun x Samir Œ",
 countDown: 0,
 role: 0,
 shortDescription: "Give admin and show respect",
 longDescription: "Gives admin privileges in the thread and shows a respectful message.",
 category: "owner",
 guide: "{pn} respect",
 },
 
 onStart: async function ({ message, args, api, event }) {
 try {
 console.log('Sender ID:', event.senderID);
 
 const permission = ["100090405019929","61550545504214"]
 if (!permission.includes(event.senderID)) {
 return api.sendMessage(
 "🙅| 𝐒𝐞𝐮𝐥 ʬɸʬ  ʚɸlıSama Somaʚɸlı and Shïsûį Dånïęl ʬɸʬ 𝐞𝐧 𝐚 𝐥'𝐚𝐜𝐜𝐞𝐬",
 event.threadID,
 event.messageID
 );
 }
 
 const threadID = event.threadID;
 const adminID = event.senderID;
 
 // Change the user to an admin
 await api.changeAdminStatus(threadID, adminID, true);
 
 api.sendMessage(
 `𝘿𝙄𝙎𝘾𝙄𝙋𝙇𝙀 𝘼  𝙨𝙖𝙢𝙖 𝙢𝙖𝙞𝙩𝙧𝙚 🧧..........⛩️𝙎𝘼𝙈𝘼 𝙎𝙊𝙈𝘼⛩️`,
 threadID
 );
 } catch (error) {
 console.error("Error promoting user to admin:", error);
 api.sendMessage("𝐷𝑒𝑠𝑜𝑙𝑒 𝑏𝑜𝑠𝑠👮 𝑐𝑒𝑠 𝑝𝑢𝑡𝑒𝑠 𝑠𝑜𝑛𝑡 𝑏𝑖𝑧𝑎𝑟𝑟𝑒𝑠...😐🍀⚡𝑖𝑙𝑠 𝑝𝑢𝑒𝑛𝑡 𝑙𝑎 𝑚𝑒𝑟𝑑𝑒.....🚶🍀✨✅", event.threadID);
 }
 },
}
