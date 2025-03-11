import {PutObjectCommand, PutObjectCommandInput} from '@aws-sdk/client-s3';
import {injectable} from 'tsyringe';
import {IPutObjectCommandFactory} from '../interfaces';

/**
 * Factory for creating PutObjectCommand instances.
 */
@injectable()
export class PutObjectCommandFactory implements IPutObjectCommandFactory {
  create(params: PutObjectCommandInput): PutObjectCommand {
    return new PutObjectCommand(params);
  }
}
