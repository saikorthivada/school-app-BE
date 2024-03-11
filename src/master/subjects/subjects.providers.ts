import { Connection } from "mongoose";
import {SubjectSchema} from './subjects.schema';
import {COLLECTION_ENUMS, MODEL_ENUMS} from './../../shared/constants/model.enum';
export const SubjectsProviders = [
    {
        provide: MODEL_ENUMS.SUBJECTS,
        useFactory: (connection: Connection) => {
            return connection.model(COLLECTION_ENUMS.subjects, SubjectSchema)
        },
        inject: [MODEL_ENUMS.DATABASE_CONNECTION]
    }
]