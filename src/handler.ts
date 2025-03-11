import 'module-alias/register';
import 'reflect-metadata';
import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
import {fileUploadService} from './main';
import {createSuccessResponse, createErrorResponse} from './response';

/**
 * Lambda handler for file upload to S3.
 *
 * @param event The APIGatewayProxyEvent object containing the request data.
 * @returns A Promise that resolves to an APIGatewayProxyResult object with the response.
 */
export const fileUploadToS3Handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    console.log(event.body);
    const result = await fileUploadService.uploadFileToS3(event.body);
    return createSuccessResponse(200, result);
  } catch (err) {
    console.error(`Error processing file upload to s3`);
    return createErrorResponse(500, err.message);
  }
};
