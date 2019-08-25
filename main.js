var chats = [];

function response(room, msg, sender, isGroupChat, replier) {
// Logging chats
var calendar = new Date();
var year = calendar.getFullYear();
var month = calendar.getMonth() + 1;
var date = calendar.getDate();
var hour = calendar.getHours();
var minute = calendar.getMinutes();
var second = calendar.getSeconds();
chats.push({
room: room.trim(),
msg: msg.trim(),
sender: sender.trim(),
time: year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second
});

// Commands
var splitedMsg = msg.split(" ");
if (splitedMsg[0].toUpperCase() == "@LOG") {
if (splitedMsg.length == 1) {
var result = chats.map(o => "[" + o.time + "][" + o.room + "] " + o.sender + ": " + o.msg); // [20XX.XX.XX XX:XX:XX][room] sender: msg
replier.reply(result.join("\n"));
} else {
if (splitedMsg.length >= 3) {
var result;
switch(splitedMsg[1].toUpperCase()) {
case "SENDER":
result = chats.filter(function (o) {
return o.sender.toUpperCase() == splitedMsg.slice(2).join(" ").toUpperCase().trim();
}).map(o => "[" + o.time + "][" + o.room + "] " + o.sender + ": " + o.msg); // [20XX.XX.XX XX:XX:XX][room] sender: msg
break;
case "MESSAGE":
result = chats.filter(function (o) {
return o.msg.indexOf(splitedMsg.slice(2).join(" ")) > -1;
}).map(o => "[" + o.time + "][ " + o.room + "] " + o.sender + ": " + o.msg); // [20XX.XX.XX XX:XX:XX][room] sender: msg
break;
case "ROOM":
result = chats.filter(function (o) {
return o.room.toUpperCase() == splitedMsg.slice(2).join(" ").toUpperCase().trim();
}).map(o => "[" + o.time + "][" + o.room + "] " + o.sender + ": " + o.msg); // [20XX.XX.XX XX:XX:XX][room] sender: msg
break;
case "TIME":
result = chats.filter(function (o) {
return (o.time.split("/").join(".").split(":").join(".").split(" ").join(".") + ".").startsWith(splitedMsg.slice(2).join(".") + ".");
}).map(o => "[" + o.time + "][" + o.room + "] " + o.sender + ": " + o.msg); // [20XX.XX.XX XX:XX:XX][room] sender: msg
break;
default:
replier.reply("Invalid form");
return;
}
replier.reply(result.join("\n"));
} else {
if (splitedMsg[1].toUpperCase() == "INIT") {
chats = [];
replier.reply("Initialized logs");
return;
} else {
replier.reply("Invalid form");
}
}
}
}
}
