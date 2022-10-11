import { Telegraf } from "telegraf";

console.log("Hello, World!");

const main = () => {
  if (!process.env.API_TOKEN) {
    return;
  }

  const bot = new Telegraf(process.env.API_TOKEN);
};

main();
