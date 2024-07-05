const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const BOT_TOKEN = '7494931466:AAHm6bT9zk8hE7NvNdVC0jD9TO9RIQlNCFQ';
const bot = new Telegraf(BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))


const validateTime = (time) => {
    const timePattern = /^([01]\d|2[0-3])\.[0-5]\d$/;
    return timePattern.test(time);
};

bot.on('message', async (ctx) => {
    if (validateTime(ctx.text)) {
        console.log({ id: ctx.from.id, msg: ctx.text });
        await ctx.reply(ctx.text)
        // console.log(`${ctx.text} adalah format waktu yang valid`);
    }
})

// bot.on('chat_member', async (ctx) => {
//     await ctx.reply(`Hello `)
// })



bot.launch().then(() => {
    console.log('Bot is running');
});

bot.catch((err) => {
    console.error('Error: ', err);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
