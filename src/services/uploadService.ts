import {inject, injectable} from 'tsyringe';
import {PutObjectCommandOutput} from '@aws-sdk/client-s3';
import {IFileUploadService} from '../interfaces';
import {IRepository} from '../interfaces';

/**
 * Service for handling file uploads to S3.
 */
@injectable()
export class FileUploadService implements IFileUploadService {
  constructor(@inject(IRepository) private repository: IRepository) {}

  /**
   * Uploads a file to S3.
   *
   * @param fileData The file data to upload.
   * @returns A Promise that resolves to the PutObjectCommandOutput.
   */
  async uploadFileToS3(fileData: any): Promise<PutObjectCommandOutput> {
    return await this.repository.uploadObject(fileData);
  }
}
