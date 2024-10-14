const { Telegraf, Markup } = require("telegraf");
const axios = require("axios");
const mongoose = require("mongoose");

const bot = new Telegraf("6711594376:AAEL9TjLdUdDhy99gO30s30DEpt4lrmtC1U");
// const channelId = "@nimblecoder";
// let myId = "1113584383";
// const mongoURL =
//   "mongodb+srv://xodjakovdilshodbek:0KvWpFux1zEpEiQ5@cluster0.lnvou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error: ", err));

// const { Schema, model } = require("mongoose");

// const userSchema = new Schema({
//   telegramId: { type: Number, required: true, unique: true },
//   firstName: String,
//   lastName: String,
//   username: String,
//   createdAt: { type: Date, default: Date.now },
// });
bot.start(async (ctx) => {
  // const { id, first_name, last_name, username } = ctx.from;
  // let user = await User.findOne({ telegramId: id });

  // if (!user) {
  //   // Save new user
  //   user = new User({
  //     telegramId: id,
  //     firstName: first_name,
  //     lastName: last_name,
  //     username: username,
  //   });
  //   await user.save();
  //   ctx.reply(`Welcome, ${first_name}! You have been added to our database.`);
  // } else {
  //   ctx.reply(`Welcome back, ${first_name}!`);
  // }
  ctx.reply("salom");
});
// const User = model("User", userSchema);

// async function sendMessageToAllUsers(message) {
//   try {
//     const users = await User.find();

//     for (const user of users) {
//       try {
//         await bot.telegram.sendMessage(user.telegramId, message);
//       } catch (error) {
//         console.error(`Failed to send message to ${user.telegramId}:`, error);
//       }
//     }
//   } catch (error) {
//     console.error("Error retrieving users:", error);
//   }
// }

// bot.command("send_ad", (ctx) => {
//   let id = ctx.from.id;
//   if (id == myId) {
//     const message = "hammen musrsan!"; // Customize your ad message here
//     sendMessageToAllUsers(message)
//       .then(() => {
//         ctx.reply("Advertisement sent to all users!");
//       })
//       .catch((error) => {
//         ctx.reply("Failed to send advertisement.");
//         console.error("Error sending advertisement:", error);
//       });
//   } else {
//     ctx.reply("botni sotib ol!!");
//   }
// });
// async function checkSubscription(userId) {
//   try {
//     const res = await axios.get(
//       `https://api.telegram.org/bot${bot.token}/getChatMember?chat_id=${channelId}&user_id=${userId}`
//     );
//     const status = res.data.result.status;
//     // Check if the user is an active subscriber
//     return (
//       status === "member" || status === "administrator" || status === "creator"
//     );
//   } catch (error) {
//     console.error("Error checking subscription:", error);
//     return false;
//   }
// }

// bot.start(async (ctx) => {
//   const userId = ctx.from.id;
//   const isSubscribed = await checkSubscription(userId);
//   if (isSubscribed) {
//     ctx.reply(`Welcome, ${ctx.from.first_name}! You are subscribed.`);
//   } else {
//     ctx.reply(
//       `Hi ${ctx.from.first_name}, please subscribe to our channel first.`,
//       Markup.inlineKeyboard([
//         Markup.button.url(
//           "Subscribe",
//           `https://t.me/${channelId.replace("@", "")}`
//         ),
//         Markup.button.callback("Check Subscription", "check_subscription"), // Button to recheck subscription
//       ])
//     );
//   }
// });
// bot.action("check_subscription", async (ctx) => {
//   const userId = ctx.from.id;

//   const isSubscribed = await checkSubscription(userId);

//   if (isSubscribed) {
//     ctx.reply(
//       `Thank you for subscribing, ${ctx.from.first_name}! You can now use the bot.`
//     );
//   } else {
//     ctx.reply(
//       `It looks like you still haven't subscribed. Please make sure to subscribe first.`,
//       Markup.inlineKeyboard([
//         Markup.button.url(
//           "Subscribe",
//           `https://t.me/${channelId.replace("@", "")}`
//         ),
//         Markup.button.callback("Check Subscription", "check_subscription"), // Button to recheck again
//       ])
//     );
//   }
// });

bot.launch();
