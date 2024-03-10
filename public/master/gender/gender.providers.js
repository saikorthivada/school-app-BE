"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderProviders = void 0;
const model_enum_1 = require("../../shared/constants/model.enum");
const gender_schema_1 = require("./gender.schema");
exports.GenderProviders = [{
        provide: model_enum_1.MODEL_ENUMS.GENDER_MODEL,
        useFactory: (connection) => connection.model(model_enum_1.COLLECTION_ENUMS.gender, gender_schema_1.GenderSchema),
        inject: [model_enum_1.MODEL_ENUMS.DATABASE_CONNECTION]
    }];
//# sourceMappingURL=gender.providers.js.map