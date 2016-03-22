var AWS = require('aws-sdk');
// AWS.config.region('us-west-2');
var s3 = new AWS.S3();

 s3.createBucket({Bucket: 'joshonceinalifetime'}, function() {

  var params = {Bucket: 'joshonceinalifetime', Key: 'fileOne', Body: 'Hello world!'};

  // s3.putObject(params, function(err, data) {
  //
  //     if (err)
  //
  //         console.log(err)
  //
  //     else       console.log("Successfully uploaded data to myBucket/myKey");
  //
  //  });
  var params2 = {Bucket: 'joshonceinalifetime', Key: 'fileOne'};

  s3.upload(params, function(err, data) {
      if (err){
        console.log(err)
      } else {
        console.log("Successfully uploaded data to myBucket/myKey");
        var url = s3.getSignedUrl('getObject', params2);
        console.log(url);
      }
   });
});

// s3.getSignedUrl('upload', params, function (err, url) {
//   console.log('The URL is', url);
// });
