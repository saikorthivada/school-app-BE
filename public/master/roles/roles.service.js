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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const model_enum_1 = require("../../shared/constants/model.enum");
let RolesService = class RolesService {
    constructor(rolesModel) {
        this.rolesModel = rolesModel;
    }
    async createRole(payload) {
        console.log(payload);
        const rolesObj = new this.rolesModel(payload);
        return rolesObj.save();
    }
    async getAllRoles() {
        return await this.rolesModel.find({}).exec();
    }
    async getRoleById(_id) {
        return await this.rolesModel.findById(_id).exec();
    }
    async deleteRoleById(_id) {
        return await this.rolesModel.findByIdAndDelete(_id).exec();
    }
    async updateRoleById(_id, payload) {
        return await this.rolesModel.findByIdAndUpdate(_id, { name: payload.name }).exec();
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enum_1.MODEL_ENUMS.ROLES)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RolesService);
//# sourceMappingURL=roles.service.js.map