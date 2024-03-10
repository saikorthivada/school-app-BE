import { Connection } from "mongoose";
import { COLLECTION_ENUMS, MODEL_ENUMS } from "src/shared/constants/model.enum";
import { GenderSchema } from "./gender.schema";

export const GenderProviders = [{
    provide: MODEL_ENUMS.GENDER_MODEL,
    useFactory: (connection: Connection) => connection.model(COLLECTION_ENUMS.gender, GenderSchema),
    inject: [MODEL_ENUMS.DATABASE_CONNECTION]
}]