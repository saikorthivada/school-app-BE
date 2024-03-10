"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES_PROVIDERS = void 0;
const model_enum_1 = require("../../shared/constants/model.enum");
const roles_schema_1 = require("./roles.schema");
exports.ROLES_PROVIDERS = [
    {
        provide: model_enum_1.MODEL_ENUMS.ROLES,
        useFactory: (connection) => {
            return connection.model(model_enum_1.COLLECTION_ENUMS.roles, roles_schema_1.RolesSchema);
        },
        inject: [model_enum_1.MODEL_ENUMS.DATABASE_CONNECTION]
    }
];
//# sourceMappingURL=roles.providers.js.map