// require('dotenv').config;
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;


async function getNewChapterUrl(content) {
  console.log(S3_BUCKET);
  const s3 = new aws.S3({
    accessKeyId: 'AKIAS2BUOKXJJMZNY7TR',
    secretAccessKey: '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',
    region: 'us-east-1',
    apiVersion: 'latest'
  });
  const fileName = new Date().valueOf() + '.txt';
  const fileType = 'text/plain'
  const bucketName = 'chapters';
  const s3Params = {
    Bucket: S3_BUCKET + '/' + bucketName,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  const data = await s3.putObject({
    ...s3Params,
    // ContentType: 'binary',
    Body: Buffer.from(content, 'utf-8')
  }).promise();

  const url = `https://${S3_BUCKET}.s3.amazonaws.com/${bucketName}/${fileName}`
   
  return url;
}

module.exports = { getNewChapterUrl };
