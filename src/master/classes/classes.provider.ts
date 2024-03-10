import { Connection } from "mongoose";
import { COLLECTION_ENUMS, MODEL_ENUMS } from "src/shared/constants/model.enum";
import { ClassesSchema } from "./classes.schema";

export const ClassesProvider = [
    {
        provide: MODEL_ENUMS.CLASSES,
        useFactory: (connection: Connection) => {
            return connection.model(COLLECTION_ENUMS.classes, ClassesSchema)
        },
        inject: [MODEL_ENUMS.DATABASE_CONNECTION]
    }
]