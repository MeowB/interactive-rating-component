const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get("value")

if (value){
	console.log(`received this value: ${value}`)
}