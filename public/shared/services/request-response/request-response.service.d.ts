import { HttpStatus } from '@nestjs/common';
export interface ISuccessErrorObjectInterface {
    statusCode: HttpStatus;
    message: string;
    data: any;
    errorType: string;
}
export declare class RequestResponseService {
    successReponseHandler(message: any, data: any): ISuccessErrorObjectInterface;
    changeHttpErrorToMongooesError(status: HttpStatus): string;
    errorReponseHandler(error: Error): ISuccessErrorObjectInterface;
}
