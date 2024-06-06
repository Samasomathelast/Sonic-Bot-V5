const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61550545504214","100090405019929", "61559119588245"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝒊𝒏𝒅𝒊𝒈𝒏𝒆...😒🔑❌ 𝚜𝚎𝚞𝚕 𝚖𝚘𝚗 𝚌𝚛𝚎𝚊𝚝𝚎𝚞𝚛(𝚂𝙰𝙼𝙰 𝚂𝙾𝙼𝙰)𝚎𝚝 𝚕𝚎𝚜 𝚊𝚍𝚖𝚒𝚗 𝚘𝚗𝚝 𝚕𝚎 𝚍𝚛𝚘𝚒𝚝 𝚍'𝚞𝚝𝚒𝚕𝚒𝚜𝚎𝚛 𝚌𝚎𝚝𝚝𝚎 𝚌𝚖𝚍", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝖡𝖺𝗅𝖺𝗇𝖼𝖾 𝗅𝖾 𝗇𝗈𝗆 𝖽𝗎 𝖿𝗂𝖼𝗁𝗂𝖾𝗋.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
