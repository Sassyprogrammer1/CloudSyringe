import dayjs from 'dayjs';
import {PutObjectCommandInput} from '@aws-sdk/client-s3';

/**
 * Generates parameters for uploading a file to S3.
 *
 * @param {File} file The file to upload.
 * @returns {PutObjectCommandInput} An object containing the S3 upload parameters.
 */
export const S3Params = (file): PutObjectCommandInput => {
  const dateKey = dayjs().format('YY-MM-DD');
  return {
    Bucket: 'bucket-name',
    Key: `${dateKey}_transactions.csv`,
    Body: file,
  };
};
