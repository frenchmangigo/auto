const randomQuotes = [
    "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
    "Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old.",
    // Add more quotes here...
];

const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

module.exports.config = {
    name: 'help',
    version: '1.0.0',
    role: 0,
    hasPrefix: false,
    aliases: ['help'],
    description: "Beginner's guide",
    usage: "Help [page] or [command]",
    credits: 'Developer',
};

module.exports.run = async function ({
    api,
    event,
    enableCommands,
    args,
    Utils,
    prefix
}) {
    const input = args.join(' ');
    try {
        const eventCommands = enableCommands[1].handleEvent;
        const commands = enableCommands[0].commands;
        if (!input) {
            const pages = 999;
            let page = 1;
            let start = (page - 1) * pages;
            let end = start + pages;
            let helpMessage = `🌐🔹🔸🔹🔸🔹🔸🔹🔸🔹🌐\n\n====『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧 』====\n╭───────────⟡───────────╮\n│ ♡ ∩_∩              ♡  │\n│ （„• ֊ •„)♡         │\n╰─────∪∪────⟡──────────╯`;
            for (let i = start; i < Math.min(end, commands.length); i++) {
                helpMessage += `\n├ ✧『 ${i + 1} 』  ${commands[i]}\n├──────────────⟡\t`;
            }
            helpMessage += '\n\n====『𝗙𝗘𝗔𝗧𝗨𝗥𝗘 𝗟𝗜𝗦𝗧』====\n╭───────────⟡───────────╮';
            eventCommands.forEach((eventCommand, index) => {
                helpMessage += `\n│ ♡ ${eventCommand}  ♡        │\n`;
            });
            helpMessage += `\n╰──────⟡──────────╯ \n\n𝗣𝗮𝗴𝗲: 『${page}/${Math.ceil(commands.length / pages)}』\nTo view information about a specific command, type 'help command name'.\n\n🌐🔹🔸🔹🔸🔹🔸🔹🔸🔹🌐\n\n𝗥𝗔𝗡𝗗𝗢𝗠 𝗙𝗔𝗖𝗧: ${randomQuote}`;
            api.sendMessage(helpMessage, event.threadID, event.messageID);
        } else if (!isNaN(input)) {
            const page = parseInt(input);
            const pages = 100;
            let start = (page - 1) * pages;
            let end = start + pages;
            let helpMessage = `𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧:\n\n`;
            for (let i = start; i < Math.min(end, commands.length); i++) {
                helpMessage += `\t${i + 1}. 『 ${commands[i]} 』\n`;
            }
            helpMessage += '\n𝗘𝗩𝗘𝗡𝗧 𝗟𝗜𝗦𝗧:\n\n';
            eventCommands.forEach((eventCommand, index) => {
                helpMessage += `\t${index + 1}. 『 ${eventCommand} 』\n`;
            });
            helpMessage += `\n𝗣𝗮𝗴𝗲: ${page}/${Math.ceil(commands.length / pages)}\nTo view information about a specific command, type 'help command name'.`;
            api.sendMessage(helpMessage, event.threadID, event.messageID);
        } else {
            const command = enableCommands[0].commands.includes(input) ? input : 'help';
            api.sendMessage(`Information about ${command} command:\nUsage: ${enableCommands[0][command].usage}\nDescription: ${enableCommands[0][command].description}`, event.threadID, event.messageID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage(`An error occurred while processing your request. Please try again later.`, event.threadID, event.messageID);
    }
};
