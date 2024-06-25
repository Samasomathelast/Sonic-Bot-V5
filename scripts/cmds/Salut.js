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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝙨𝙖𝙡𝙪𝙩𝙖𝙩𝙞𝙤𝙣 𝙤𝙧𝙙𝙤𝙣𝙣𝙚𝙧 𝙥𝙖𝙧 𝙢𝙤𝙣 𝙘𝙧𝙚𝙖𝙩𝙚𝙪𝙧 𝐒𝐀𝐌𝐀 𝐒𝐎𝐌𝐀 ...𝙟 𝙨𝙪𝙞𝙨 𝙡𝙖 𝙥𝙤𝙪𝙧 𝙩𝙚 𝙨𝙚𝙧𝙫𝙞𝙧𝙚💆‍♂️🧧 ");
}
};
