module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
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
        if (event.body && event.body.toLowerCase() == "ok") return message.reply("𝐽'𝑑𝑜𝑖𝑠 𝑎𝑣𝑜𝑢𝑒𝑟😶 que suis plus tot bg🎀");
    }
}
