import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as UniqueValidators from 'mongoose-unique-validator';

@Schema({
    timestamps: true
})
export class Classes {
    @Prop({required: true, unique: true})
    className: string;

    @Prop({required: true})
    sections: string[];

    @Prop({required: true})
    subjects: string[];
}

export const ClassesSchema = SchemaFactory.createForClass(Classes).plugin(UniqueValidators);

export type IClassesDocument = HydratedDocument<Classes>;