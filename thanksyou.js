const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get("value")

let selectedScore = document.querySelector(".selected")
selectedScore.innerHTML = `You selected ${value} out of 5`