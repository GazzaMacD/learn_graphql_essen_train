import mongoose from "mongoose";
import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;

/*
 * Mongodb connections
 */

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/friends", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  language: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});

const Friends = mongoose.model("friends", friendSchema);

/*
 * Sqlite connections
 */

const sequelize = new Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "./alien.sqlite",
});

const Aliens = sequelize.define("aliens", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  planet: {
    type: DataTypes.STRING,
  },
});

export { Friends, Aliens };
