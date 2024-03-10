import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/constants/model.enum';
import { IClassesDocument } from './classes.schema';

@Injectable()
export class ClassesService {

    constructor(@Inject(MODEL_ENUMS.CLASSES) private readonly classesModel: Model<IClassesDocument>) {

    }

    async createClasses(payload: IClassesDocument): Promise<IClassesDocument> {
        const obj = new this.classesModel(payload);
        return obj.save();
    }

    async getAllClasses(): Promise<IClassesDocument[]> {
        return this.classesModel.find({}).exec();
    }

    async getClassesById(_id: string): Promise<IClassesDocument> {
        return this.classesModel.findById(_id).exec();
    }

    async updateClassesById(_id: string, payload: IClassesDocument): Promise<IClassesDocument> {
        return this.classesModel.findByIdAndUpdate(_id, payload).exec();
    }

    async deleteClassesById(_id: string): Promise<IClassesDocument> {
        return this.classesModel.findByIdAndDelete(_id).exec();
    }
}
