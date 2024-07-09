const mongoose = require("mongoose");
require("dotenv").config();

const main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.vnxqqgh.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.error(error);
  }

  // for(let i = 0; i < 10; i++) {
  //   const reminder = new Reminder({
  //     title: `Reminder ${i}`,
  //     date: new Date(),
  //     children: [],
  //     isCompleted: false
  //   })

  //   console.log(await reminder.save())

  // }

  // console.log((await Reminder.find({}).populate("children")).map((r) => r));
};

module.exports = { main };
