function greeting() {
	
	const json = '{"id":"message","value":"Hello World"}';
	const obj = JSON.parse(json);
	console.log(obj.value);

}

greeting();