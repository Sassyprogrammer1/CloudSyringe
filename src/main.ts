import 'module-alias/register';
import 'reflect-metadata';
import {container} from 'tsyringe';
import {S3Client} from '@aws-sdk/client-s3';
import {
  IPutObjectCommandFactory,
  IFileUploadService,
  IRepository,
} from './interfaces';

import {
  PutObjectCommandFactory,
} from './repository/paramsFactory';

import {FileUploadService} from './services/uploadService';
import {Repository} from './repository/repository';

/**
 * Registers the S3 client as a dependency.
 */
container.registerInstance('S3Client', new S3Client({}));

/**
 * Registers the PutObjectCommandFactory as a dependency.
 */
container.register(IPutObjectCommandFactory, {useClass: PutObjectCommandFactory});

/**
 * Registers the FileUploadService as a dependency.
 */
container.register(IFileUploadService, {useClass: FileUploadService});

/**
 * Registers the Repository as a dependency.
 */
container.register(IRepository, {useClass: Repository});

/**
 * Resolves the FileUploadService from the container.
 */
export const fileUploadService: IFileUploadService = container.resolve(IFileUploadService);