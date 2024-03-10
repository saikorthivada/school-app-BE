"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProvider = void 0;
const mongoose_1 = require("mongoose");
const app_properties_1 = require("../shared/constants/app.properties");
const model_enum_1 = require("../shared/constants/model.enum");
exports.DatabaseProvider = [{
        provide: model_enum_1.MODEL_ENUMS.DATABASE_CONNECTION,
        useFactory: () => {
            return mongoose_1.default.connect(app_properties_1.MONGO_DB_CONNECTION_URL);
        }
    }];
//# sourceMappingURL=database.providers.js.map