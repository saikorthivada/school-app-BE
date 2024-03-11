import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/constants/model.enum';
import { ISubjectsDocument } from './subjects.schema';

@Injectable()
export class SubjectsService {
    constructor(@Inject(MODEL_ENUMS.SUBJECTS) private readonly subjectsModel: Model<ISubjectsDocument>) {

    }

    async createSubject(payload: ISubjectsDocument): Promise<ISubjectsDocument> {
        const subjectObj = new this.subjectsModel(payload);
        return subjectObj.save();
    }

    async getAllSubjects(): Promise<ISubjectsDocument[]> {
        return await this.subjectsModel.find({}).exec();
    }

    async getSubjectById(_id: string): Promise<ISubjectsDocument> {
        return await this.subjectsModel.findById(_id).exec();
    }

    async deleteSubjectById(_id: string): Promise<ISubjectsDocument> {
        return await this.subjectsModel.findByIdAndDelete(_id).exec();
    }

    async updateSubjectById(_id: string, payload: ISubjectsDocument): Promise<ISubjectsDocument> {
        return await this.subjectsModel.findByIdAndUpdate(_id, {name: payload.subjectName}).exec();
    }
}
