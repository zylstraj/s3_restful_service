var AWS = require('aws-sdk');
var s3 = new AWS.S3();

s3.createBucket({Bucket: 'myBucket'}, () => {
  var params = {Bucket: 'myBucket', Key: 'myKey', Body: 'Hello!'};

  s3.putObject(params, (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully uploaded data to myBucket/myKey');
    }
  });
});