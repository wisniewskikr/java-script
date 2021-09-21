function greeting() {
	
	const json = '[{"id":"message","value":"Hello World"}]';
	const array = JSON.parse(json);
	console.log(array[0].value);

}

greeting();