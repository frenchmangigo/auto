const fs = require("fs");

module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    role: 0,
    credits: "cliff",
    description: "Display the prefix of your bot",
    usages: "prefix",
    cooldown: 5,
    aliases: ["prefix", "Prefix", "PREFIX", "prefi"],
};

module.exports.run = function ({ api, event, prefix, admin }) {
    const { threadID, messageID, body } = event;

    if (!prefix) {
        api.sendMessage(
            "𝐈 𝐡𝐚𝐯𝐞 𝐧𝐨 𝐩𝐫𝐞𝐟𝐢𝐱",
            threadID,
            messageID
        );
        return;
    }

    // Check if the command is invoked manually with the prefix
    if (body.toLowerCase() === `prefix`) {
        api.sendMessage(
            `Hey there! My prefix is [ 𓆩 ${prefix} 𓆪 ].`,
            threadID,
            messageID
        );
        return;
    }

    // Sending the message along with the attachment
    api.sendMessage(
        {
            body: `Yo, my prefix is [ 𓆩 ${prefix} 𓆪 ]`,
            attachment: fs.createReadStream(__dirname + "/cache2/prefix.jpeg")
        },
        threadID,
        (err, messageInfo) => {
            if (err) return console.error(err);

            const voiceFile = fs.readFileSync(__dirname + "/cache2/prefix.jpeg");
            api.sendMessage(
                {
                    attachment: voiceFile,
                    type: "audio",
                    body: "Hey, listen to my prefix information!",
                },
                threadID,
                () => {}
            );
            api.setMessageReaction("🚀", messageInfo.messageID, (err) => {}, true);
        }
    );
};
