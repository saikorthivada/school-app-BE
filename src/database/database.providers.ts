import mongoose from "mongoose";
import { MONGO_DB_CONNECTION_URL } from "src/shared/constants/app.properties";
import { MODEL_ENUMS } from "src/shared/constants/model.enum";

export const DatabaseProvider = [{
    provide: MODEL_ENUMS.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> => {
        return mongoose.connect(MONGO_DB_CONNECTION_URL)
    }
}]