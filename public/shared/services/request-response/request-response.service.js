"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestResponseService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_errors_1 = require("../../constants/mongodb.errors");
let RequestResponseService = class RequestResponseService {
    successReponseHandler(message, data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: message,
            data: data,
            errorType: null
        };
    }
    changeHttpErrorToMongooesError(status) {
        switch (status) {
            case common_1.HttpStatus.NOT_FOUND: {
                return mongodb_errors_1.MONGO_ERROR_TYPES.DocumentNotFoundError;
            }
            case common_1.HttpStatus.BAD_REQUEST: {
                return mongodb_errors_1.MONGO_ERROR_TYPES.MongoError;
            }
            case common_1.HttpStatus.NOT_MODIFIED: {
                return mongodb_errors_1.MONGO_ERROR_TYPES.OverwriteModelError;
            }
            case common_1.HttpStatus.NOT_ACCEPTABLE: {
                return mongodb_errors_1.MONGO_ERROR_TYPES.StrictModeError;
            }
            case common_1.HttpStatus.UNAUTHORIZED: {
                return 'UNAUTHORIZED';
            }
            default: {
                return '';
            }
        }
    }
    errorReponseHandler(error) {
        if (error['status']) {
            error.name = this.changeHttpErrorToMongooesError(error['status']);
            if (error['response']) {
                error.message = error['response'];
            }
        }
        switch (error.name) {
            case mongodb_errors_1.MONGO_ERROR_TYPES.CastError: {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Record not found',
                    data: null,
                    errorType: error.name
                };
            }
            case mongodb_errors_1.MONGO_ERROR_TYPES.ValidationError: {
                const arr = error.message.split(':');
                arr.splice(0, 1);
                const finalMessage = (arr.join(":")).trim();
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: finalMessage,
                    data: null,
                    errorType: error.name
                };
            }
            case mongodb_errors_1.MONGO_ERROR_TYPES.MongoError: {
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: error.message,
                    data: null,
                    errorType: error.name
                };
            }
            case mongodb_errors_1.MONGO_ERROR_TYPES.DocumentNotFoundError: {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: error.message ? error.message : 'No records found',
                    data: null,
                    errorType: error.name
                };
            }
            case mongodb_errors_1.MONGO_ERROR_TYPES.OverwriteModelError: {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: error.message ? error.message : 'No Records Modified',
                    data: null,
                    errorType: error.name
                };
            }
            case mongodb_errors_1.MONGO_ERROR_TYPES.StrictModeError: {
                return {
                    statusCode: common_1.HttpStatus.NOT_ACCEPTABLE,
                    message: error.message ? error.message : 'Not acceptable request',
                    data: null,
                    errorType: error.name
                };
            }
            case mongodb_errors_1.HTTP_ERROR_TYPES.UNAUTHORIZED: {
                return {
                    statusCode: common_1.HttpStatus.UNAUTHORIZED,
                    message: error.message ? error.message : 'Unauthorized Users',
                    data: null,
                    errorType: error.name
                };
            }
            default: {
                return {
                    statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    message: 'Unknown error not able to find the issse... Try again',
                    data: null,
                    errorType: error.name
                };
            }
        }
    }
};
exports.RequestResponseService = RequestResponseService;
exports.RequestResponseService = RequestResponseService = __decorate([
    (0, common_1.Injectable)()
], RequestResponseService);
//# sourceMappingURL=request-response.service.js.map