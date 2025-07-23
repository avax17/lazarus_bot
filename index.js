require('dotenv').config()
const { Markup, Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

const webAppUrl = 'https://lazarusbank.ru' // URL вашего мини-приложения

bot.start((ctx) => ctx.reply(
  'Приветствую! Я бот компании Lazarus Finance. Нажмите «Старт», чтобы открыть приложение.',
  Markup.keyboard([
    Markup.button.webApp('Старт', webAppUrl)
  ]).resize().oneTime()
))

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))