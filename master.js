// TO DO

// 1. put the list items in a list

let list = document.querySelectorAll(".numbers button");

// 2. add id's for each buttons

for (let i = 0; i < list.length; i++) {
	let element = list[i];
	element.classList.add(`button${i}`)
	element.id = i + 1
	// console.log(element)
}

// 3. add an event listener for clics
list.forEach(button => {
	button.addEventListener('click', function () {
		// console.log(`Button ${button.textContent} clicked!`)

		// 4. change the background of the button that was clicked.
		list.forEach(buttons => {
			buttons.classList.remove("active")
			buttons.style.backgroundColor = "";
		} )
		button.style.backgroundColor = "hsl(216, 12%, 54%)";
		button.classList.add("active")
		
		// change the background back for all the other buttons
	})
})


// on clic on the submit button, change url parameters to the button id then follow the link
let buttonSubmit = document.querySelector(".submit-button")

buttonSubmit.addEventListener("click", function () {
	let value;
	// getting the value of the active button
	for (let i = 0; i < list.length; i++) {
		const element = list[i];
		if(element.classList.contains("active")) {
			value = element.id
			let encodedValue = encodeURIComponent(value);
			window.location.href = `thanksyou.html?value=${encodedValue}`;
		}
	}
	
})