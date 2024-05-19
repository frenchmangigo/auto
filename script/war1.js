const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
	name: "war1",
	version: "1.0.0",
	role: 2,
	credits: "cliff",
	description: "War nát cái boxchat",
	hasPrefix: false,
	usages: "war đấm chất",
	cooldown: 10,
};

module.exports.run = async function({ api, args, event, admin }) {
	var mention = Object.keys(event.mentions)[0];
	let name = event.mentions[mention];
	var arraytag = [];
	arraytag.push({ id: mention });
	var a = function(a) {
		api.sendMessage(a, event.threadID);
	};
	a("oten");
	setTimeout(() => {
		a({
			body:
				"Ecclesiastes 3:8, a time to love and a time to hate, a time for war and a time for peace."
		});
	}, 3000);
	setTimeout(() => {
		a({ body: "Matthew 24:6-7 You will hear of wars and rumors of wars, but see to it that you are not alarmed. Such things must happen, but the end is still to come. Nation will rise against nation, and kingdom against kingdom. There will be famines and earthquakes in various places." });
	}, 5000);
	setTimeout(() => {
		a({ body: "Matthew 5:9 Blessed are the peacemakers, for they will be called children of God." });
	}, 7000);
	setTimeout(() => {
		a({
			body:
				"Matthew 5:44 But I tell you, Love your enemies and pray for those who Persecute you."
		});
	}, 9000);
	setTimeout(() => {
		a({ body: "Jeremiah 46:16 They will stumble repeatedly; they will fall over each other. They will say, ‘Get up, let us go back to our own people and our native lands, away from the sword of the oppressor." });
	}, 12000);
	setTimeout(() => {
		a({ body: "Jeremiah 51:20 You are my war club, my weapon for battle— with you I shatter nations, with you I destroy kingdoms" });
	}, 15000);
	setTimeout(() => {
		a({ body: "Joel 3:9 Proclaim this among the nations: Prepare for war! Rouse the warriors! Let all the fighting men draw near and attack." });
	}, 17000);
	setTimeout(() => {
		a({ body: "Micah 7:8 Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the LORD will be my light." });
	}, 20000);
	setTimeout(() => {
		a({ body: "Matthew 26:52 Put your sword back in its place,” Jesus said to him, “for all who draw the sword will die by the sword." });
	}, 23000);
	setTimeout(() => {
		a({ body: "Psalms 68:30 Rebuke the beast among the reeds, the herd of bulls among the calves of the nations. Humbled, may the beast bring bars of silver. Scatter the nations who delight in war." });
	}, 25000);
	setTimeout(() => {
		a({ body: "Ephesians 6:11 Put on the full armor of God, so that you can take your stand against the devil’s schemes." });
	}, 28500);
	setTimeout(() => {
		a({ body: "Isaiah 2:4 He will judge between the nations and will settle disputes for many peoples. They will beat their swords into plowshares and their spears into pruning hooks. Nation will not take up sword against nation, nor will they train for war anymore." });
	}, 31000);
	setTimeout(() => {
		a({ body: "Isaiah 19:2 I will stir up Egyptian against Egyptian— brother will fight against brother, neighbor against neighbor, city against city, kingdom against kingdom." });
	}, 36000);
	setTimeout(() => {
		a({ body: "Revelation 21:7 Those who are victorious will inherit all this, and I will be their God and they will be my children." });
	}, 39000);
	setTimeout(() => {
		a({ body: "Romans 8:37 No, in all these things we are more than conquerors through him who loved us." });
	}, 40000);
	setTimeout(() => {
		a({ body: "Romans 12:19 Do not take revenge, my dear friends, but leave room for God’s wrath, for it is written: “It is mine to avenge; I will repay,” says the Lord." });
	}, 65000);
	setTimeout(() => {
		a({ body: "1 Timothy 6:12 Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made your good confession in the presence of many witnesses." });
	}, 70000);
	setTimeout(() => {
		a({ body: "2 Corinthians 10:4 The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds." });
	}, 75000);
	setTimeout(() => {
		a({ body: "Romans 13:4 For the one in authority is God’s servant for your good. But if you do wrong, be afraid, for rulers do not bear the sword for no reason. They are God’s servants, agents of wrath to bring punishment on the wrongdoer." });
	}, 80000);
	setTimeout(() => {
		a({ body: "Zechariah 10:5 Together they will be like warriors in battle trampling their enemy into the mud of the streets. They will fight because the LORD is with them, and they will put the enemy horsemen to shame." });
	}, 85000);
	setTimeout(() => {
		a("Zechariah 14:2 I will gather all the nations to Jerusalem to fight against it; the city will be captured, the houses ransacked, and the women raped. Half of the city will go into exile, but the rest of the people will not be taken from the city.");
	}, 90000);
	setTimeout(() => {
		a({ body: "Revelation 9:6 And in those days shall men seek death, and shall not find it; and shall desire to die, and death shall flee from them." });
	}, 95000);
	setTimeout(() => {
		a({ body: "1 Peter 3:9 Do not repay evil with evil or insult with insult. On the contrary, repay evil with blessing, because to this you were called so that you may inherit a blessing." });
	}, 100000);
	setTimeout(() => {
		a({ body: "1 Timothy 3:3 not given to drunkenness, not violent but gentle, not quarrelsome, not a lover of money." });
	}, 105000);
	setTimeout(() => {
		a({ body: "Genesis 4:7 If you do what is right, will you not be accepted? But if you do not do what is right, sin is crouching at your door; it desires to have you, but you must rule over it." });
	}, 115000);
	setTimeout(() => {
		a({ body: "Hebrews 10:10 And by that will, we have been made holy through the sacrifice of the body of Jesus Christ once for all." });
	}, 125000);
	setTimeout(() => {
		a({ body: "Hosea 4:2 There is only cursing, lying and murder, stealing and adultery; they break all bounds, and bloodshed follows bloodshed." });
	}, 135000);
	setTimeout(() => {
		a({ body: "Isaiah 60:18 No longer will violence be heard in your land, nor ruin or destruction within your borders, but you will call your walls Salvation and your gates Praise." });
	}, 145000);
	setTimeout(() => {
		a({ body: "Proverbs 3:29 Do not envy the violent or choose any of their ways." });
	}, 155000);
	setTimeout(() => {
		a({ body: "Psalms 11:5 The LORD examines the righteous, but the wicked, those who love violence, he hates with a passion." });
	}, 165000);
};
