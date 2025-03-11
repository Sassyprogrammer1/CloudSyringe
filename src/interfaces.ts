import {PutObjectCommandInput, PutObjectCommandOutput, PutObjectCommand} from '@aws-sdk/client-s3';
import {Repository} from './repository/repository';

/**
 * Symbol for the S3 client.
 */
export const IS3Client = Symbol('IS3Client');

/**
 * Symbol for IRepository Class.
 */
export const IRepository = Symbol('IRepository');

/**
 * Service for handling file uploads to S3.
 */
export const IFileUploadService = Symbol('IFileUploadService');

/**
 * Factory for creating PutItemCommand instances.
 */
export const IPutObjectCommandFactory = Symbol('IPutObjectCommandFactory');

/**
 * Factory for creating PutObjectCommand instances.
 */
export interface IPutObjectCommandFactory {
  create(params: PutObjectCommandInput): PutObjectCommand;
}

/**
 * Interface for S3 client operations.
 */
export interface IS3Client {
  /**
   * Uploads an object to S3.
   *
   * @param params - Parameters for the PutObjectCommand.
   * @returns A Promise that resolves to the PutObjectCommandOutput.
   */
  uploadFile(params: PutObjectCommandInput): Promise<PutObjectCommandOutput>;
}

/**
 * Service for handling file uploads to S3.
 */
export interface IFileUploadService {
  /**
   * Uploads a file to S3.
   *
   * @param fileData - The file data to upload.
   * @returns A Promise that resolves to the PutObjectCommandOutput.
   */
  uploadFileToS3(fileData: any): Promise<PutObjectCommandOutput>;
}

/**
 * Repository interface for interacting with S3 and DynamoDB.
 */
export interface IRepository {
  /**
   * Uploads an object to S3.
   *
   * @param body - The object body to upload.
   * @returns A Promise that resolves to the PutObjectCommandOutput.
   */
  uploadObject(
    body: any,
    receipt?: any,
    filename?: any,
    transactionId?: any,
  ): Promise<PutObjectCommandOutput>;
}

/**
 * Handler interface.
 */
export interface IHandler {
  /**
   * Handles file uploads to S3.
   *
   * @param fileData - The file data to upload.
   * @returns A Promise that resolves when the upload is complete.
   */
  handleFileUploadToS3(fileData: any): Promise<void>;
  /**
   * Handles S3 events.
   *
   * @param file - The S3 event.
   * @returns A Promise that resolves when the event is processed.
   */
  handleS3Event(file: any): Promise<void>;
}
