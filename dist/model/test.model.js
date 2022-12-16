"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testSchema = new mongoose_1.Schema({
    thing: { type: String, required: false }
});
exports.default = (0, mongoose_1.model)('Test', testSchema);
//# sourceMappingURL=test.model.js.map