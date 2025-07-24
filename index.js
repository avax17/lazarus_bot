require('dotenv').config()
const { Markup, Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

const webAppUrl = 'https://lazarusbank.ru' // URL вашего мини-приложения


bot.start(async (ctx) => {
  await ctx.replyWithPhoto(
    { source: 'cards.png' },
    {
      caption: 'Lazarus.Finance — твой надежный партнер для международного бизнеса!\n\nМы современный цифровой сервис для оплаты инвойсов и получения переводов по всему миру.\n\n• Оплата инвойсов до 1 дня на выгодных условиях — комиссия от 0,5%\n• Переводы на китайские карты\n• Swift и SEPA переводы\n• Обмен криптовалюты и валюты разных стран в тот же день\n• Агентские платежи для юр лиц\n• Удобный личный кабинет и поддержка клиентов 24/7',
      ...Markup.inlineKeyboard([
        [
          Markup.button.callback('О нас', 'about'),
          Markup.button.webApp('Сайт', 'https://lazarusbank.ru')
        ],
        [
          Markup.button.webApp('Личный кабинет', 'https://lazarusbank.ru/login')
        ]
      ])
    }
  )
})

bot.action('about', async (ctx) => {
  await ctx.answerCbQuery()
  await ctx.reply(
    'Lazarus.Finance — сервис, позволяющий решить любые финансовые задачи для импортеров, экспортеров и других предпринимателей.\n\nОсновные преимущества работы с нами:\n\n1. Статус и лицензия РНКО (Расчетная небанковская кредитная организация)\n\n2. Прозрачные условия операций — подробно расскажем и объясним, как формируется цена на любую из оказанных услуг.\n\n3. Собственные офисы в Москве и Санкт-Петербурге, а также большая сеть партнерских филиалов во многих городах России.\n\n4. Большой охват по всему миру: Европа, Азия или США — поможем вам из любой страны.\n\n5. Команда профессионалов! Более 10 лет занимаемся международными переводами и успешно помогли тысячам клиентов!',
    Markup.inlineKeyboard([
      [
        Markup.button.callback('О нас', 'about'),
        Markup.button.webApp('Сайт', 'https://lazarusbank.ru')
      ],
      [
        Markup.button.webApp('Личный кабинет', 'https://lazarusbank.ru/login')
      ]
    ])
  )
})

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))