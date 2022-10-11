import "dotenv/config";
import { Telegraf } from "telegraf";

console.log("Hello, World!");

const main = () => {
  if (!process.env.API_TOKEN) {
    return;
  }

  const bot = new Telegraf(process.env.API_TOKEN);

  bot.start((ctx) => ctx.reply("Welcome to the app!"));

  bot.on("text", async (ctx) => {
    await ctx.telegram.sendMessage(
      ctx.chat.id,
      `You said "${ctx.message.text}"?`
    );
  });

  bot.launch();
  console.log("Bot started!");

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
};

main();
