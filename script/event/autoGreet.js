module.exports.config = {
  name: "autoGreet",
  version: "1.0.0",
  credits: "YourName"
};

module.exports.handleEvent = async function({ api, event }) {
  if (event.logMessageType === 'log:subscribe') {
    const addedUserID = event.logMessageData.addedParticipants.map(participant => participant.userFbId);
    const userInfo = await api.getUserInfo(addedUserID);
    const threadInfo = await api.getThreadInfo(event.threadID);

    addedUserID.forEach(id => {
      const name = userInfo[id].name;
      const groupName = threadInfo.threadName;
      const greetingMessage = `Hello ${name}! Welcome to ${groupName} 🎉`;

      api.sendMessage(greetingMessage, event.threadID);
    });
  }
};
