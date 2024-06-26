module.exports.config = {
  name: "autoGreet",
  version: "1.0.0",
  credits: "Clarence"
};

module.exports.handleEvent = async function({ api, event }) {
  if (event.logMessageType === 'log:subscribe') {
    const addedUserID = event.logMessageData.addedParticipants.map(participant => participant.userFbId);
    const userInfo = await api.getUserInfo(addedUserID);
    const threadInfo = await api.getThreadInfo(event.threadID);

    // Calculate the current member count including the new member
    const currentMemberCount = threadInfo.participantIDs.length + addedUserID.length;

    addedUserID.forEach((id, index) => {
      const name = userInfo[id].name;
      const groupName = threadInfo.threadName;
      const position = currentMemberCount - addedUserID.length + index + 1; // Calculate the position
      const ordinalSuffix = getOrdinalSuffix(position); // Function to get ordinal suffix (e.g., 1st, 2nd, 3rd)

      const greetingMessage = `Hello ${name}! Welcome to ${groupName} 🎉 You are the ${position}${ordinalSuffix} member in this group!`;

      api.sendMessage(greetingMessage, event.threadID);
    });
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
