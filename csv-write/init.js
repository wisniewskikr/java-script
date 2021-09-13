const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'data.csv',
  header: [
    {id: 'message', title: 'Message'},
    {id: 'name', title: 'Name'},
  ]
});

const data = [
  {
    message: 'Hello World',
    name: 'Chris'
  }
];

function greeting() {
	
	csvWriter
		.writeRecords(data)
		.then(()=> console.log('The CSV file was written successfully'));
	
}

greeting();