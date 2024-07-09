const { model, Schema } = require("mongoose");


const reminderSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  children: [{ type: Schema.Types.ObjectId, ref: 'Reminder' }],
  isCompleted: { type: Boolean, default: false }
});

const Reminder = model("Reminder", reminderSchema)



module.exports = { Reminder }
