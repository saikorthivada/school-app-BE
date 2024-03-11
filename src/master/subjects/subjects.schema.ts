import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as uniquevalidators from 'mongoose-unique-validator';

@Schema({
    timestamps: true
})
export class Subjects  {

    @Prop({required: true})
    subjectName: string;
}

export type ISubjectsDocument = HydratedDocument<Subjects>;
export const SubjectSchema = SchemaFactory.createForClass(Subjects).plugin(uniquevalidators);