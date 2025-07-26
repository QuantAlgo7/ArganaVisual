import telebot
import MetaTrader5 as mt5

API_TOKEN = '7767897741:AAGrKbPgrYc-ZEdmbnGte1eyRnzdxaD3UGY'

bot = telebot.TeleBot(API_TOKEN)

# Init MT5
mt5.initialize()

@bot.message_handler(func=lambda message: True)
def handle_signal(message):
    text = message.text.upper()
    if "BUY" in text or "SELL" in text:
        symbol = "EURUSD"
        lot = 0.1
        price = mt5.symbol_info_tick(symbol).ask if "BUY" in text else mt5.symbol_info_tick(symbol).bid
        order_type = mt5.ORDER_TYPE_BUY if "BUY" in text else mt5.ORDER_TYPE_SELL

        request = {
            "action": mt5.TRADE_ACTION_DEAL,
            "symbol": symbol,
            "volume": lot,
            "type": order_type,
            "price": price,
            "deviation": 20,
            "magic": 234000,
            "comment": "Signal Telegram",
            "type_time": mt5.ORDER_TIME_GTC,
            "type_filling": mt5.ORDER_FILLING_IOC,
        }
        result = mt5.order_send(request)
        print(result)

bot.polling()
