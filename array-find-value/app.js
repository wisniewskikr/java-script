function greeting() {
	
	var result;
	
	const array = [{"id":"message","value":"Hello World"}];
	for (let i in array) {
		if(array[i].id == "message") {
			result = array[i].value;
		}
	}
	
	console.log(result);

}

greeting();