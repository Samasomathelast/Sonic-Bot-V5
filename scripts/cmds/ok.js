module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "𝐒𝐀𝐌𝐀 𝐒𝐎𝐌𝐀",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "ok") return message.reply("𝐎𝐍𝐓 𝐄𝐒𝐓 𝐃'𝐂𝐂 𝐐𝐔𝐄 𝐉 𝐒𝐔𝐈𝐒 𝐂𝐎𝐎𝐋 𝐂𝐎𝐌𝐌𝐄 𝐁𝐎𝐓");
    }
}
￼Enter
