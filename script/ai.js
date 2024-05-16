const axios = require('axios');

module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['snow', 'ai'],
  description: "An AI command powered by Snowflakes AI",
  usage: "snowflakes [prompt]",
  credits: 'churchill',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  const input = args.join(' ');
  
  if (!input) {
    api.sendMessage(`ANO BAaaaaaaa?!!!!!!!!!!!!!!!!!! 

━━━━━━━━━━━━━━━

 𝐛𝐚𝐭 𝐩𝐮𝐫𝐨 𝐤𝐚 𝐀𝐈 𝐭𝐚𝐧𝐠𝐚, 𝐦𝐚𝐠 𝐭𝐚𝐧𝐨𝐧𝐠 𝐤𝐚𝐧𝐚!`, event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage(`🔍Searching please wait....`, event.threadID, event.messageID);
  
  try {
    const { data } = await axios.get(`https://hashier-api-snowflake.vercel.app/api/snowflake?ask=${encodeURIComponent(input)}`);
    if (data.response) {
      api.sendMessage(data.response + "\n\nhttps://web.facebook.com/frenchclarence.mangigo.9", event.threadID, event.messageID);
    } else {
      api.sendMessage('No response found.', event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
