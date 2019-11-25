"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// Express setup
const app = express_1.default();
const PORT = 3000 || process.env.PORT;
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
// MongDB setup
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee-review', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'Connection Error!'));
db.once('open', () => console.log('Connection Succeeded!'));
// Routes
const routes = require('./routes');
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=app.js.map