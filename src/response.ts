import {APIGatewayProxyResult} from 'aws-lambda';

export const createSuccessResponse = (statusCode: number, body: any): APIGatewayProxyResult => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  },
  body: JSON.stringify(body),
});

export const createErrorResponse = (statusCode: number, error: any): APIGatewayProxyResult => ({
  statusCode,
  body: JSON.stringify({error}),
});
