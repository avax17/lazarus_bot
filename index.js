require('dotenv').config()
const TelegramApi = require("node-telegram-bot-api")

const token = process.env.TELEGRAM_BOT_TOKEN

const bot = new TelegramApi(token, { polling: true, botInfo: { name: "LazarusFBot" } })

const webAppUrl = "t.me/LazarusFBot/lzf"
// const webAppUrl = "https://ya.ru"

// const buttons = {
//   reply_markup: JSON.stringify({
//     inline_keyboard: [
//       [
//         { text: "Сайт", callback_data: "site", web_app: { url: webAppUrl } },
//         // { text: "Помощь", callback_data: "help" }
//       ],
//     ],
//   }),
// }

const start = () => {
  // bot.setMyCommands([
  //   { command: "/start", description: "Начать работу с ботом" },
  //   // { command: "/help", description: "Помощь" },
  // ])

  bot.on("message", async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if (text === "/start") {
      return bot.sendMessage(chatId, `Приветствую! Меня зовут ${bot.options.botInfo.name}, я бот компании Lazarus Finance. Давайте начнем!`, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Сайт', url: webAppUrl }]
          ]
        }
      })
    }

    // if (text === "/help") {
    //   return bot.sendMessage(chatId, `Я вам не помогу, я бот для лазаруса`)
    // }

    return bot.sendMessage(chatId, `Я вас не понимаю, попробуйте еще раз`)
  })

  // bot.on("callback_query", async (msg) => {
  //   const data = msg.data
  //   const chatId = msg.message.chat.id

  //   if (data === "site") {
  //     await bot.sendMessage(chatId, `http://lazarusbank.ru/`)
  //   }
  //   // if (data === "help") {
  //   //   await bot.sendMessage(chatId, `Я вам не помогу, я бот для лазаруса`)
  //   // }
  // })
}

start();



