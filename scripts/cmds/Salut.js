 module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝑆𝑎𝑙𝑢𝑡 ✋✨🍀...ʚɸlıSoma 𝙚𝙨𝙩 𝙡𝙖 𝙥𝙤𝙪𝙧 𝙩𝙚 𝙨𝙚𝙧𝙫𝙞𝙧𝙚 ");
}
};
