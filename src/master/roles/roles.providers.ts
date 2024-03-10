import { Connection } from "mongoose";
import { COLLECTION_ENUMS, MODEL_ENUMS } from "src/shared/constants/model.enum";
import { RolesSchema } from "./roles.schema";

export const ROLES_PROVIDERS = [
    {
        provide: MODEL_ENUMS.ROLES,
        useFactory: (connection: Connection) => {
            return connection.model(COLLECTION_ENUMS.roles, RolesSchema)
        },
        inject: [MODEL_ENUMS.DATABASE_CONNECTION]
    }
]