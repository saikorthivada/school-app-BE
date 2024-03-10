import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/constants/model.enum';
import { IGenderDocument } from './gender.schema';

@Injectable()
export class GenderService {
    constructor(@Inject(MODEL_ENUMS.GENDER_MODEL) private readonly genderModel: Model<IGenderDocument>){

    }

    async createGender(payload: IGenderDocument): Promise<IGenderDocument> {
        const genderObj = new this.genderModel(payload);
        return genderObj.save();
    }

    async getAllGendersList(): Promise<IGenderDocument[]> {
        return await this.genderModel.find({}).exec();
    }

    async getGenderByGenderId(id: string): Promise<IGenderDocument> {
        return await this.genderModel.findOne({id: id}).exec();
    }

    async deleteGenderByGenderId(_id: string): Promise<IGenderDocument> {
        return await this.genderModel.findByIdAndDelete(_id).exec();
    }

    async updateGenderById(_id: string, payload: IGenderDocument): Promise<IGenderDocument> {
         return await this.genderModel.findByIdAndUpdate(_id, payload).exec();
    }
}
