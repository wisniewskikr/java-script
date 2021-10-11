const aws = require('aws-sdk');

aws.config.update({accessKeyId: '', secretAccessKey: ''});
var getParams = {
    Bucket: 'wisniewskikr-demo',
    Key: 'demo.csv'
}
const s3 = new aws.S3();

s3.getObject(getParams, function(err, data) {
    
    if (err)
        console.error(err);

    let objectData = data.Body.toString('utf-8'); // Use the encoding necessary
    console.log(objectData);

});