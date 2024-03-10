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
exports.GenderController = void 0;
const common_1 = require("@nestjs/common");
const request_response_service_1 = require("../../shared/services/request-response/request-response.service");
const gender_service_1 = require("./gender.service");
let GenderController = class GenderController {
    constructor(genderService, requestReponseService) {
        this.genderService = genderService;
        this.requestReponseService = requestReponseService;
    }
    async createGender(payload) {
        return this.genderService.createGender(payload).then((res) => {
            return this.requestReponseService.successReponseHandler('Genders Created Successfully', res);
        }).catch((error) => {
            return this.requestReponseService.errorReponseHandler(error);
        });
    }
    async getAllGenders() {
        return this.genderService.getAllGendersList().then((res) => {
            return this.requestReponseService.successReponseHandler('Genders Fetched Successfully', res);
        }).catch((error) => {
            return this.requestReponseService.errorReponseHandler(error);
        });
    }
    async getGenderById(id) {
        return this.genderService.getGenderByGenderId(id).then((res) => {
            return this.requestReponseService.successReponseHandler('Gender fetched Successfully', res);
        }).catch((error) => {
            return this.requestReponseService.errorReponseHandler(error);
        });
    }
    async deleteGenderById(id) {
        return this.genderService.deleteGenderByGenderId(id).then((res) => {
            return this.requestReponseService.successReponseHandler('Gender Deleted Successfully', res);
        }).catch((error) => {
            return this.requestReponseService.errorReponseHandler(error);
        });
    }
    async updateGenderById(id, payload) {
        return this.genderService.updateGenderById(id, payload).then((res) => {
            return this.requestReponseService.successReponseHandler('Gender Updated Successfully', payload);
        }).catch((error) => {
            return this.requestReponseService.errorReponseHandler(error);
        });
    }
};
exports.GenderController = GenderController;
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenderController.prototype, "createGender", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenderController.prototype, "getAllGenders", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenderController.prototype, "getGenderById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenderController.prototype, "deleteGenderById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GenderController.prototype, "updateGenderById", null);
exports.GenderController = GenderController = __decorate([
    (0, common_1.Controller)('gender'),
    __metadata("design:paramtypes", [gender_service_1.GenderService,
        request_response_service_1.RequestResponseService])
], GenderController);
//# sourceMappingURL=gender.controller.js.map