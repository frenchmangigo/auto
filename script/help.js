const randomQuotes = [
	"Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
	"Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old.",
	"The world's oldest known recipe is for beer.",
	// (other quotes)
	"The smartest pig in the world is owned by a math teacher in Madison, Wisconsin (USA). It has the ability to memorize worksheets multiplying to 12."
];

const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

module.exports.config = {
	name: 'help',
	version: '1.0.0',
	role: 0,
	hasPrefix: true,
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
			let helpMessage = `🎨✨『 COMMAND LIST 』✨🎨\n\n🌟 (∩^o^)⊃━☆ﾟ.*･｡ﾟ 🌟\n\n`;
			for (let i = start; i < Math.min(end, commands.length); i++) {
				helpMessage += `💠 『 ${i + 1} 』 ${prefix}${commands[i]}\n\n`;
			}
			helpMessage += `🎀『 FEATURE LIST 』🎀\n\n`;
			eventCommands.forEach((eventCommand, index) => {
				helpMessage += `📌『 ${index + 1}.』  ${prefix}${eventCommand}\n\n`;
			});
			helpMessage += `\n🌟 Page: ${page}/${Math.ceil(commands.length / pages)}\nTo view information about a specific command, type 'help command name'.\n\n🔮 RANDOM FACT: ${randomQuote}`;
			api.sendMessage(helpMessage, event.threadID, event.messageID);
		} else if (!isNaN(input)) {
			const page = parseInt(input);
			const pages = 100;
			let start = (page - 1) * pages;
			let end = start + pages;
			let helpMessage = `🎨✨『 COMMAND LIST 』✨🎨\n\n🌟 (∩^o^)⊃━☆ﾟ.*･｡ﾟ 🌟\n\n`;
			for (let i = start; i < Math.min(end, commands.length); i++) {
				helpMessage += `💠 『 ${i + 1} 』 ${prefix}${commands[i]}\n\n`;
			}
			helpMessage += `🎀『 FEATURE LIST 』🎀\n\n`;
			eventCommands.forEach((eventCommand, index) => {
				helpMessage += `📌『 ${index + 1}.』  ${prefix}${eventCommand}\n\n`;
			});
			helpMessage += `\n🌟 Page: ${page}/${Math.ceil(commands.length / pages)}`;
			api.sendMessage(helpMessage, event.threadID, event.messageID);
		} else {
			const command = [...Utils.handleEvent, ...Utils.commands].find(([key]) => key.includes(input?.toLowerCase()))?.[1];
			if (command) {
				const {
					name,
					version,
					role,
					aliases = [],
					description,
					usage,
					credits,
					cooldown,
					hasPrefix
				} = command;
				const roleMessage = role !== undefined ? (role === 0 ? '➛ Permission: user' : (role === 1 ? '➛ Permission: admin' : (role === 2 ? '➛ Permission: thread Admin' : (role === 3 ? '➛ Permission: super Admin' : '')))) : '';
				const aliasesMessage = aliases.length ? `➛ Aliases: ${aliases.join(', ')}\n` : '';
				const descriptionMessage = description ? `Description: ${description}\n` : '';
				const usageMessage = usage ? `➛ Usage: ${usage}\n` : '';
				const creditsMessage = credits ? `➛ Credits: ${credits}\n` : '';
				const versionMessage = version ? `➛ Version: ${version}\n` : '';
				const cooldownMessage = cooldown ? `➛ Cooldown: ${cooldown} second(s)\n` : '';
				const message = `🔹『 Command 』🔹\n\n➛ Name: ${name}\n${versionMessage}${roleMessage}\n${aliasesMessage}${descriptionMessage}${usageMessage}${creditsMessage}${cooldownMessage}`;
				api.sendMessage(message, event.threadID, event.messageID);
			} else {
				api.sendMessage('Command not found.', event.threadID, event.messageID);
			}
		}
	} catch (error) {
		console.error(error);
		api.sendMessage(`An error occurred while processing your request. Please try again later.`, event.threadID, event.messageID);
	}
};
