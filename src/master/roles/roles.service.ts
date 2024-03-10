import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/constants/model.enum';
import { IRolesDocument } from './roles.schema';

@Injectable()
export class RolesService {
    constructor(@Inject(MODEL_ENUMS.ROLES) private readonly rolesModel: Model<IRolesDocument>) {

    }

    async createRole(payload: IRolesDocument): Promise<IRolesDocument> {
        console.log(payload);
        const rolesObj = new this.rolesModel(payload);
        return rolesObj.save();
    }

    async getAllRoles(): Promise<IRolesDocument[]> {
        return await this.rolesModel.find({}).exec();
    }

    async getRoleById(_id: string): Promise<IRolesDocument> {
        return await this.rolesModel.findById(_id).exec();
    }

    async deleteRoleById(_id: string): Promise<IRolesDocument> {
        return await this.rolesModel.findByIdAndDelete(_id).exec();
    }

    async updateRoleById(_id: string, payload: IRolesDocument): Promise<IRolesDocument> {
        return await this.rolesModel.findByIdAndUpdate(_id, {name: payload.name}).exec();
    }
}
