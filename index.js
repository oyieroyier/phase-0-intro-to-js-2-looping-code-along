// const messages = []
// function writeCards(name, eventName) {
// 	for (let i = 0; i < name.length; i++) {
// 		messages.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
// 	}
// 	return messages;
// }

// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
// console.log(messages);

const messages = [];
function writeCards(name, eventName) {
	for (let i = 0; i < name.length; i++) {
		messages[i] = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
	}
	return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(messages);

function countDown(number) {
	while (number >= 0) {
		console.log(number--)
	}
}

countDown(10)