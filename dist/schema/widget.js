"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widget_1 = __importDefault(require("../models/widget"));
exports.typeDef = `
  # Widget
  type Widget {
    # Unique widget ID
    _id: ObjectId!

    # Widget name
    name: String!

    # Date created
    dateCreated: Date!
  }

  type Mutation {
    # Insert a new widget
    createWidget(
      name: String!
    ): Widget
  }
`;
exports.resolvers = {
    Query: {
        allWidgets(root) {
            return widget_1.default.getAllWidgets();
        },
    },
    Mutation: {
        createWidget(root, data) {
            return widget_1.default.createWidget(root, data);
        },
    },
};
//# sourceMappingURL=widget.js.map