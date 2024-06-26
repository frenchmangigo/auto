module.exports.config = {
  name: "autoGreet",
  version: "1.0.0",
  credits: "Clarence"
};

module.exports.handleEvent = async function({ api, event }) {
  if (event.logMessageType === 'log:subscribe') {
    const addedParticipants = event.logMessageData.addedParticipants;
    const threadInfo = await api.getThreadInfo(event.threadID);

    // Calculate the current member count including the new members
    const currentMemberCount = threadInfo.participantIDs.length + addedParticipants.length;

    for (let i = 0; i < addedParticipants.length; i++) {
      const participant = addedParticipants[i];
      const userInfo = await api.getUserInfo(participant.userFbId);
      const name = userInfo[participant.userFbId].name;
      const groupName = threadInfo.threadName;
      const position = currentMemberCount - addedParticipants.length + i + 1;
      const ordinalSuffix = getOrdinalSuffix(position);

      const greetingMessage = `Hello ${name}! Welcome to ${groupName} 🎉 You are the ${position}${ordinalSuffix} member in this group!`;

      api.sendMessage(greetingMessage, event.threadID);
    }
  }
};

// Helper function to get ordinal suffix for numbers (1st, 2nd, 3rd, ...)
function getOrdinalSuffix(number) {
  if (number % 100 >= 11 && number % 100 <= 13) {
    return "th";
  }
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
