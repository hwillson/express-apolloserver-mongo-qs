"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("../connectors/mongoose"));
const widgetSchema = mongoose_1.default.Schema({
    name: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
});
const widgetsCollection = mongoose_1.default.model('widgets', widgetSchema);
const widget = {
    getWidgetById(id) {
        return widgetsCollection.findOne({ _id: id });
    },
    getAllWidgets() {
        return widgetsCollection.find().fetch();
    },
    createWidget(root, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return widgetsCollection.create(data).then(widgetId => (widget.getWidgetById(widgetId)));
        });
    },
};
exports.default = widget;
//# sourceMappingURL=widget.js.map