import mongoose from '../connectors/mongoose';

const widgetSchema = mongoose.Schema({
  name: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
});

const widgetsCollection = mongoose.model('widgets', widgetSchema);

const widget = {
  getWidgetById(id) {
    return widgetsCollection.findOne({ _id: id });
  },

  getAllWidgets() {
    return widgetsCollection.find().fetch();
  },

  async createWidget(root, data) {
    return widgetsCollection.create(data).then(widgetId => (
      widget.getWidgetById(widgetId)
    ));
  },
};

export default widget;
