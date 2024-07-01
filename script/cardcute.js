const { createCanvas, loadImage } = require('canvas');
const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
    name: "cardcute",
    credits: "Your Name",
    version: "1.0.0",
    role: 0,
    description: "Display user card information",
    hasPrefix: false,
    commandCategory: "Information",
    usages: "/cardcute",
    cooldowns: 0,
};

// Mock function to simulate fetching user data. Replace this with your actual data retrieval logic.
async function getUserData(senderID) {
    // Replace this with your actual data fetching logic
    return {
        fullName: "User Full Name",
        sex: "Female",
        followers: 306,
        relationship: "Single",
        birthday: "MM/DD",
        location: "Not Public",
        facebookUID: senderID,
        facebookLink: `https://www.facebook.com/${senderID}`,
        imageUrl: "https://i.imgur.com/SLaXsv1.png" // Replace with actual image URL
    };
}

module.exports.run = async function({ api, event, args }) {
    try {
        const { messageID, threadID, senderID } = event;

        // Fetch user data based on senderID
        const userData = await getUserData(senderID);

        // Load background image
        const background = await loadImage('cache/card.jpg'); // Replace with your background image path

        const canvas = createCanvas(background.width, background.height);
        const ctx = canvas.getContext('2d');

        // Draw the background
        ctx.drawImage(background, 0, 0);

        // Set text properties
        ctx.font = '20px Arial';
        ctx.fillStyle = '#ffffff';

        // Draw user information on the canvas
        ctx.fillText(`Full Name: ${userData.fullName}`, 50, 50);
        ctx.fillText(`Sex: ${userData.sex}`, 50, 80);
        ctx.fillText(`Followers: ${userData.followers}`, 50, 110);
        ctx.fillText(`Relationship: ${userData.relationship}`, 50, 140);
        ctx.fillText(`Birthday: ${userData.birthday}`, 50, 170);
        ctx.fillText(`Location: ${userData.location}`, 50, 200);
        ctx.fillText(`UID Facebook: ${userData.facebookUID}`, 50, 230);
        ctx.fillText(`Link: ${userData.facebookLink}`, 50, 260);

        // Load and draw user image
        if (userData.imageUrl) {
            const userImage = await loadImage(userData.imageUrl);
            ctx.drawImage(userImage, 300, 50, 100, 100); // Adjust position and size as needed
        }

        // Save the canvas to a file
        const outputPath = `cache/card${senderID}.jpg`; // Replace with your desired output path
        const buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(outputPath, buffer);

        // Send the image as an attachment
        api.sendMessage({
            attachment: fs.createReadStream(outputPath),
            body: "Here is your card information!"
        }, threadID, messageID);

        // Clean up the output file
        fs.unlinkSync(outputPath);

    } catch (error) {
        console.error('Error:', error);
        api.sendMessage(`❌ An error occurred while generating the card information. Please try again later. Error details: ${error.message}`, event.threadID, event.messageID);
    }
};
