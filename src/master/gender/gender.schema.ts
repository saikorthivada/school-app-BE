import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator';
@Schema({
    timestamps: true
})
export class Gender {
    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    id: number;
}
export type IGenderDocument = HydratedDocument<Gender>;
export const GenderSchema = SchemaFactory.createForClass(Gender).plugin(uniqueValidators);