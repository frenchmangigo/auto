module.exports.config = {
  name: "autoGreet",
  version: "1.0.0",
  credits: "YourName"
};

module.exports.handleEvent = async function({ api, event }) {
  if (event.logMessageType === 'log:subscribe') {
    const addedParticipants = event.logMessageData.addedParticipants;
    const threadInfo = await api.getThreadInfo(event.threadID);

    for (let i = 0; i < addedParticipants.length; i++) {
      const participant = addedParticipants[i];
      const userInfo = await api.getUserInfo(participant.userFbId);
      const name = userInfo[participant.userFbId].name;
      const groupName = threadInfo.threadName;
      const greetingMessage = `Hello @${name}! Welcome to ${groupName} 🎉`; // Mentioning the user

      api.sendMessage(greetingMessage, event.threadID);
    }
  }
};
