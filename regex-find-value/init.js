var json = '{"greeting": "Hello", "greeting": "World"}';

function greeting() {
	
	var regex = new RegExp('(?:^|["greeting": "])greeting": "([^"]+)', 'g');
	var matches;
	var values = [];

	while (matches = regex.exec(json)) {
		values.push(matches[1]);   
	}
	
	console.log(values[0] + " " + values[1]);

}

greeting();