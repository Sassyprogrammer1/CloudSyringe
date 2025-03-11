import {inject, injectable} from 'tsyringe';
import {IPutObjectCommandFactory} from '../interfaces';
import {S3Client, PutObjectOutput} from '@aws-sdk/client-s3';
import {S3Params} from './params';

@injectable()
export class Repository {
  constructor(
    @inject('S3Client') private s3Client: S3Client,
    @inject(IPutObjectCommandFactory) private putObjectCommandFactory: IPutObjectCommandFactory,
  ) {}

  /**
   * Uploads an object to S3.
   *
   * @param {any} body - The object body to upload.
   * @returns {Promise<PutObjectOutput>} - A Promise that resolves to the upload result.
   */
  async uploadObject(body: any): Promise<PutObjectOutput> {
    try {
      const params = S3Params(body);
      const command = this.putObjectCommandFactory.create(params);
      console.info(`uploading the object now...`);
      return await this.s3Client.send(command);
    } catch (err) {
      throw new Error(`Error while trying to upload object: ${err.message}`);
    }
  }
}
