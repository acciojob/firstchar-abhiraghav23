function firstChar(text) {
   const trimmedStr = text.trim();
	return trimmedStr.length > 0 ? trimmedStr[0] : '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
