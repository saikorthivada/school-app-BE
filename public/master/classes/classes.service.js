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
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const model_enum_1 = require("../../shared/constants/model.enum");
let ClassesService = class ClassesService {
    constructor(classesModel) {
        this.classesModel = classesModel;
    }
    async createClasses(payload) {
        const obj = new this.classesModel(payload);
        return obj.save();
    }
    async getAllClasses() {
        return this.classesModel.find({}).exec();
    }
    async getClassesById(_id) {
        return this.classesModel.findById(_id).exec();
    }
    async updateClassesById(_id, payload) {
        return this.classesModel.findByIdAndUpdate(_id, payload).exec();
    }
    async deleteClassesById(_id) {
        return this.classesModel.findByIdAndDelete(_id).exec();
    }
};
exports.ClassesService = ClassesService;
exports.ClassesService = ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enum_1.MODEL_ENUMS.CLASSES)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ClassesService);
//# sourceMappingURL=classes.service.js.map