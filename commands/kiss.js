const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

exports.run = async (bot, message, args) => {
  // Words to be answered
  const words = [
    `${message.author.username} is kissing **${args[0]}** >////<`,
    `Look at ${message.author.username} and **${args[0]}**! O////O`,
    `How cute, ${message.author.username} is kissing **${args[0]}**!`
  ];
  // VARIABLES
  const wordAnswer = words.random(),
    answers = await neko.getSFWKiss(),
    idkI = "https://tinyurl.com/MikuIDK",
    idkD = `**${message.author.username}** trying to kiss themselves,\nI wonder how...`;
  let description, image;

  // STATEMENT
  if (!args[0]) description = idkD, image = idkI;
  else description = wordAnswer, image = answers;

  // BEGIN
  const embed = new Discord.RichEmbed()
    .setAuthor("Miku -- Kiss", "", `${image.url}`)
    .setColor(0x1a9ca8)
    .setDescription(description)
    .setImage(`${image.url}`)
    .setFooter(`${!args[0] ? "" : "Image by nekos.life"}`);
  message.channel.send("**Loading Image...**")
    .then(m => m.edit({
      embed
    }))
    .then(delete require.cache[require.resolve('./kiss.js')])
    .catch(err => console.log(err.stack));
}; // END exports

exports.conf = {
  aliases: ["kissu"]
};

exports.help = {
  name: "kiss",
  category: "Fun",
  description: "Kiss someone!",
  usage: "kiss \`<mention user>\` or \`<name>\`",
  param: "\`<mention user>\` or \`<name>\` are optional.",
  aliases: "kissu"
};