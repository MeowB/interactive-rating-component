// TO DO

// 1. put the list items in a list

let list = document.querySelectorAll(".numbers button");

// 2. add id's for each buttons

for (let i = 0; i < list.length; i++) {
	let element = list[i];
	element.classList.add(`button${i}`)
}

// 3. add an event listener for clics


// list.forEach(element => {
// 	console.log(element)
// });

// change the color of the buttons based on the active state and react to the user changing the selection of the button.