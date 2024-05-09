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
				"belat"
		});
	}, 3000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 5000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 7000);
	setTimeout(() => {
		a({
			body:
				"oten"
		});
	}, 9000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 12000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 15000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 17000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 20000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 23000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 25000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 28500);
	setTimeout(() => {
		a({ body: "oten" });
	}, 31000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 36000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 39000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 40000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 65000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 70000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 75000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 80000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 85000);
	setTimeout(() => {
		a("belat");
	}, 90000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 95000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 100000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 105000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 115000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 125000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 135000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 145000);
	setTimeout(() => {
		a({ body: "belat" });
	}, 155000);
	setTimeout(() => {
		a({ body: "oten" });
	}, 165000);
};
