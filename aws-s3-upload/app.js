const aws = require('aws-sdk');
var fs =  require('fs');

aws.config.update({accessKeyId: '', secretAccessKey: ''});
const s3 = new aws.S3();

fs.readFile('demo.txt', function (err, data) {
    if (err)
        console.error(err)

    var params = {
        Bucket: 'wisniewskikr-demo',
        Key: 'demo.txt',
        Body: data
    }
    
    s3.putObject(params, function(err, data) {

        if (err)
            console.error(err);
    
        console.log("Successfully uploaded")
    
    });    

});    

