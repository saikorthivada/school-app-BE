"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesController = void 0;
const common_1 = require("@nestjs/common");
const request_response_service_1 = require("../../shared/services/request-response/request-response.service");
const classes_service_1 = require("./classes.service");
let ClassesController = class ClassesController {
    constructor(classesServices, requestResponseService) {
        this.classesServices = classesServices;
        this.requestResponseService = requestResponseService;
    }
    async getAllClasses() {
        return this.classesServices.getAllClasses().then((res) => {
            return this.requestResponseService.successReponseHandler('Classes Fetched Successfully', res);
        }).catch((e) => {
            return this.requestResponseService.errorReponseHandler(e);
        });
    }
    async getClassesById(id) {
        return this.classesServices.getClassesById(id).then((res) => {
            return this.requestResponseService.successReponseHandler('Classe Fetched Successfully', res);
        }).catch((e) => {
            return this.requestResponseService.errorReponseHandler(e);
        });
    }
    async deleteClassesById(id) {
        return this.classesServices.deleteClassesById(id).then((res) => {
            return this.requestResponseService.successReponseHandler('Classe Deleted Successfully', res);
        }).catch((e) => {
            return this.requestResponseService.errorReponseHandler(e);
        });
    }
    async updateClassesById(id, payload) {
        return this.classesServices.updateClassesById(id, payload).then(() => {
            return this.requestResponseService.successReponseHandler('Classes Updated Successfully', payload);
        }).catch((e) => {
            return this.requestResponseService.errorReponseHandler(e);
        });
    }
    async createClasses(payload) {
        return this.classesServices.createClasses(payload).then((res) => {
            return this.requestResponseService.successReponseHandler('Classes Created Successfully', res);
        }).catch((e) => {
            return this.requestResponseService.errorReponseHandler(e);
        });
    }
};
exports.ClassesController = ClassesController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "getAllClasses", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "getClassesById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "deleteClassesById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "updateClassesById", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClassesController.prototype, "createClasses", null);
exports.ClassesController = ClassesController = __decorate([
    (0, common_1.Controller)('classes'),
    __metadata("design:paramtypes", [classes_service_1.ClassesService,
        request_response_service_1.RequestResponseService])
], ClassesController);
//# sourceMappingURL=classes.controller.js.map