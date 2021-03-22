import _ from "lodash";
import mongoose from "mongoose";
import pkg from "sequelize";
import casual from "casual";
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

// to create a bunch of aliens uncomment this
//Aliens.sync().then(() => {
//    const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//    ten.forEach((val) => {
//        Aliens.create({
//            firstName: casual.first_name,
//            lastName: casual.last_name,
//            planet: casual.word,
//        });
//    });
//});

export { Friends, Aliens };
