import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as uniqueValidators from 'mongoose-unique-validator';

@Schema({
    timestamps: true
})
export class Roles {
    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    id: number
}

export type IRolesDocument = HydratedDocument<Roles>;
export const RolesSchema = SchemaFactory.createForClass(Roles).plugin(uniqueValidators);