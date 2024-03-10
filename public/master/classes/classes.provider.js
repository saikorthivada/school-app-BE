"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesProvider = void 0;
const model_enum_1 = require("../../shared/constants/model.enum");
const classes_schema_1 = require("./classes.schema");
exports.ClassesProvider = [
    {
        provide: model_enum_1.MODEL_ENUMS.CLASSES,
        useFactory: (connection) => {
            return connection.model(model_enum_1.COLLECTION_ENUMS.classes, classes_schema_1.ClassesSchema);
        },
        inject: [model_enum_1.MODEL_ENUMS.DATABASE_CONNECTION]
    }
];
//# sourceMappingURL=classes.provider.js.map