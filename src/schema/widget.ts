import widget from '../models/widget';

export const typeDef = `
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

export const resolvers = {
  // Query: {
  //   allWidgets(root) {
  //     return widget.getAllWidgets();
  //   },
  // },

  Mutation: {
    createWidget(root, data) {
      return widget.createWidget(root, data);
    },
  },
};
